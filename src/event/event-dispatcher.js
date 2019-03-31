import _ from 'lodash'
import Events from '../../lib/bean'
import * as KeyUtils from './key-utils'
import DomUtils from '../util/dom-utils'
import StringBuffer from '../util/string-buffer'
// import Utils from '../util/Utils'

const DEFAULTS = {
  stopPropagation: false
}

const win = typeof window !== 'undefined' ? window : { addEventHandler: function () {} }
const doc = typeof document !== 'undefined' ? document : {}

/**
 * The EventDispatcher is the central event management. It will monitor all events and translate it into the a higher
 * level events for consumption.
 */
export default class EventDispatcher {
  /**
   * Constructor
   * @param root the root element that the manager will listen to.
   * @param zoomScale
   * @param config the configuraton for the event dispatcher.
   */
  constructor (root, zoomScale = [0, Infinity], config = {}) {
    this.root = root
    this.rootNS = root.getAttribute('ns') || 'root'
    this.zoomScale = zoomScale
    Object.assign(this, DEFAULTS, config)
    this.scale = 1.0
    this.listeners = {}
    this.dragging = false
    this.handler = (event) => { this.handleEvent(event) }
    this.started = false

    // Simulate mouseenter/mouseleave events
    this.enterStack = []
  }

  /**
   * Start listening for events.
   */
  start () {
    if (this.started) return
    Events.on(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler)
    this.startKeys()
    this.started = true
  }

  /**
   * Stop listening for events.
   */
  stop () {
    if (!this.started) return
    Events.off(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler)
    this.stopKeys()
    this.started = false
  }

  startKeys () {
    Events.on(doc, 'keydown keyup', this.handler)
  }

  stopKeys () {
    Events.off(doc, 'keydown keyup', this.handler)
  }

  zoomIn () {
    this.scale *= 1.25
    this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0])
    return this.scale
  }

  zoomOut () {
    this.scale *= 0.8
    this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0])
    return this.scale
  }

  getEventInfo (event) {
    let target = event.target
    const buf = new StringBuffer()
    let ns
    const stack = []
    let isRoot = false
    while (!isRoot && target && target !== doc) {
      ns = target.getAttribute('ns')
      if (ns) {
        isRoot = ns.startsWith('root.')
        if (isRoot) {
          ns = ns.substring(5)
          event.rootTarget = target
        }
        if (!event.nsTarget) event.nsTarget = target
        stack.splice(0, 0, target)
        buf.prepend(ns)
      }
      target = target.parentNode
    }
    if (!isRoot) {
      event.rootTarget = event.nsTarget
    }

    // target stack is a stack of all the ns targets up to the one with the data binding.
    event.targetStack = stack
    ns = buf.toString('.')
    if (ns === '') ns = this.rootNS
    return { data: event.rootTarget, ns: ns }
  }

  /**
   * The main event handler method, it processes event and generate relevant events to dispatch.
   */
  handleEvent (event) {
    let type = event.type

    // Do not dispatch other events if we are dragging.
    if (this.dragging || DomUtils.eventFromInput(event)) return

    let data
    let ns
    const pos = this.getPosition(event)
    let info
    const isKeyEvent = (type === 'keydown' || type === 'keyup')
    if (isKeyEvent) {
      data = this.root
      ns = KeyUtils.getKeyEvent(event)
    } else {
      info = this.getEventInfo(event)
      if (!info) return
      data = info.data
      ns = info.ns
    }

    // Utils.log('EventDispatcher', "handleEvent - " + type + ';ns=' + ns)

    if (type === 'mousewheel') {
      this.scale *= Math.pow(2, event.wheelDelta * 0.002)
      this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0])
      event.scale = this.scale
      type = 'zoom'
    }

    // See if we should create drag events
    if (type === 'mousedown' && event.button === 0 /* only drag on left click */) {
      // Create drag object.
      const dragObject = { data: data, pos: ns === 'root' ? EventDispatcher.mouse(this.root, event) : pos }
      this.dragging = false
      // Start listening for mouse move.
      let dragPos

      const mousemove = (event) => {
        let currentPos = this.getPosition(event)
        if (!this.dragging) {
          // check if the mouse has moved. IE always fire mousemove after mousedown even if the mouse hasn't moved yet.
          if (dragObject.pos[0] === currentPos[0] && dragObject.pos[1] === currentPos[1]) return

          // start dragging
          this.dragging = true
          event.rootTarget = dragObject.data
          this.dispatch(event, 'dragstart', ns, dragObject.data, dragObject.pos)
        }
        if (ns === 'root') {
          dragPos = EventDispatcher.mouse(this.root, event)
        } else {
          dragPos = currentPos
        }
        this.getEventInfo(event)
        this.dispatch(event, 'drag', ns, dragObject.data, dragPos)
      }
      const mouseup = (event) => {
        if (ns === 'root') {
          dragPos = EventDispatcher.mouse(this.root, event)
        } else {
          dragPos = this.getPosition(event)
        }

        let info = this.getEventInfo(event)
        if (this.dragging) {
          this.dragging = false
          this.dispatch(event, 'dragend', ns, dragObject.data, dragPos)
        } else {
          this.dispatch(event, 'mouseup', ns, info.data, dragPos)
        }

        Events.off(win, 'mousemove', mousemove)
        Events.off(win, 'mouseup', mouseup)
      }
      event.preventDefault()
      Events.on(win, 'mousemove', mousemove)
      Events.on(win, 'mouseup', mouseup)
    }

    if (!isKeyEvent) {
      this.simulateEnterLeave(event, type, ns, data, pos)
    }
    this.dispatch(event, type, ns, data, pos)

    // disable the default context menu
    // if (type == 'contextmenu')
    // event.preventDefault()
  }

  /**
   * try to simulate mouseenter/mouseleave events.
   */
  simulateEnterLeave (event, type, ns, data, pos) {
    let last, stack
    const clearEnterStack = (k) => {
      k = k || 0
      // Clear off the enter stack.
      while (this.enterStack.length >= k + 1) {
        last = this.enterStack.pop()
        this.dispatch(event, 'mouseleave', last.ns, last.data, pos)
      }
    }
    const getNS = function (index) {
      let buf = new StringBuffer()
      for (let i = 0; i <= index; i++) {
        let val = stack[i].getAttribute('ns')
        if (val.startsWith('root.')) {
          val = val.substring(5)
        }
        buf.append(val)
      }
      return buf.toString('.')
    }

    if (ns && ns !== this.rootNS) {
      if (type === 'mouseover') {
        stack = event.targetStack
        let item
        for (let i = 0; i < stack.length; i++) {
          if (i < this.enterStack.length) {
            if (this.enterStack[i].target !== stack[i]) {
              clearEnterStack(i)
            } else {
              continue
            }
          }
          item = { data: data, ns: getNS(i), target: stack[i] }
          this.enterStack.push(item)
          this.dispatch(event, 'mouseenter', item.ns, data, pos)
        }
        if (stack.length < this.enterStack.length) {
          clearEnterStack(stack.length)
        }
      }
    }
    if (ns === this.rootNS && this.enterStack.length > 0) {
      clearEnterStack()
    }
  }

  dispatch (event, type, ns, data, pos) {
    // if (type !== 'mouseover' && type !== 'mouseout') {
    //   console.log('EventDispatcher', 'dispatch - ' + type + '.' + ns + ';' + pos + ';rootTarget=' + event.rootTarget + ';data=' + data)
    // }
    if (!this.started) return
    const nsType = ns ? type + '.' + ns : type
    _.forEach(this.listeners, (listeners, key) => {
      if (EventDispatcher.match(nsType, listeners.regexp ? listeners.regexp : key)) {
        _.forEach(listeners, (listener) => {
          if (!listener.context) {
            listener.callback.apply(window, [type, ns, data, pos, event])
          } else {
            listener.callback.apply(listener.context, [type, ns, data, pos, event])
          }
        })
      }
    })

    // after dispatching, do not propagate.
    if (this.stopPropagation && event.stopPropagation) {
      event.stopPropagation()
    }
  }

  getPosition (event) {
    const pos = EventDispatcher.mouse(this.root, event)
    if (!_.isNaN(pos[0]) && !_.isNaN(pos[1])) {
      this.lastPosition = pos
    }
    return this.lastPosition
  }

  /**
   * Registers a key event handler
   * // Key is object {ctrl, alt, shift, meta, code}
   */
  registerKey (type, key, callback, context) {
    if (Array.isArray(key)) {
      key.forEach(k => {
        this.registerKey(type, k, callback, context)
      })
      return
    }
    key = KeyUtils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code)
    if (!key.length) return
    key = new StringBuffer(type).append(key).toString('.')
    const listener = { callback, context }
    this.listeners[key] || (this.listeners[key] = [])
    this.listeners[key].push(listener)
  }

  unregisterKey (type, key, callback, context) {
    if (Array.isArray(key)) {
      key.forEach(k => {
        this.unregisterKey(type, k, callback, context)
      })
      return
    }
    key = KeyUtils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code)
    if (!key.length) return
    key = new StringBuffer(type).append(key).toString('.')

    let listeners = this.listeners[key]; let listener
    if (!listeners) return
    for (let i = 0; i < listeners.length; i++) {
      listener = listeners[i]
      if (listener.callback === callback && (!context || context === listener.context)) {
        listeners.splice(i, 1)
        return
      }
    }
  }

  /**
   * Registers an event handler
   */
  register (type, callback, context, zIndex) {
    if (Array.isArray(type)) {
      type.forEach(t => {
        this.register(t, callback, context, zIndex)
      })
      return
    }
    const listener = { callback: callback, context: context, zIndex: zIndex }
    let regexp = null
    if (type instanceof RegExp) {
      regexp = type
      type = type + ''
    }
    this.listeners[type] || (this.listeners[type] = [])
    if (regexp && !this.listeners[type].regexp) {
      this.listeners[type].regexp = regexp
    }
    this.listeners[type].push(listener)
  }

  unregister (type, callback, context) {
    if (type instanceof RegExp) {
      type = type + ''
    }
    let listeners = this.listeners[type]; let listener
    if (!listeners) return
    for (let i = 0; i < listeners.length; i++) {
      listener = listeners[i]
      if (listener.callback === callback && (!context || context === listener.context)) {
        listeners.splice(i, 1)
        return
      }
    }
  }

  destroy () {
    this.stop()
    delete this.root
    delete this.listeners
    delete this.enterStack
  }

  /**
   * Check if the registered event type matches the real event type. "*" is allowed as a wild card.
   */
  static match (nsType, registeredType) {
    if (registeredType instanceof RegExp) {
      return nsType.match(registeredType)
    }

    return nsType === registeredType
    /* const arr = registeredType.split('*');
    if (arr.length == 1)
      return nsType == registeredType;

    let substr, index = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length == 0) continue;
      substr = nsType.slice(index);
      index = substr.indexOf(arr[i]);
      if (index < 0)
        return false;
      index += arr[i].length;
    }
    return true; */
  }

  static mouse (container, e) {
    if (e.changedTouches) e = e.changedTouches[0]
    let svg = container.ownerSVGElement || container
    if (svg.createSVGPoint) {
      let point = svg.createSVGPoint()
      point.x = e.clientX; point.y = e.clientY
      point = point.matrixTransform(container.getScreenCTM().inverse())
      return [point.x, point.y]
    }
    let rect = container.getBoundingClientRect()
    return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop]
  }
}
