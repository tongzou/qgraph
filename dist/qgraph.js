/*!
 * 
 * 	qgraph - A Graph Manipulation and Visualization Library
 * 	Author: Tong Zou
 * 	Version: v0.0.5
 * 	Url: https://github.com/tongzou/qgraph
 * 	License(s): MIT
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else if(typeof exports === 'object')
		exports["qgraph"] = factory(require("lodash"));
	else
		root["qgraph"] = factory(root["_"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Line = __webpack_require__(9);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Shape = __webpack_require__(6);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Ellipse = __webpack_require__(10);
	
	var _Ellipse2 = _interopRequireDefault(_Ellipse);
	
	var _EventDispatcher = __webpack_require__(11);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Graph = __webpack_require__(13);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _Element = __webpack_require__(15);
	
	var _Element2 = _interopRequireDefault(_Element);
	
	var _Node = __webpack_require__(14);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(18);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Layout = __webpack_require__(19);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(20);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _GraphView = __webpack_require__(21);
	
	var _GraphView2 = _interopRequireDefault(_GraphView);
	
	var _SVGView = __webpack_require__(22);
	
	var _SVGView2 = _interopRequireDefault(_SVGView);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Shape2.default.addShape("Rectangle", _Rectangle2.default);
	_Shape2.default.addShape("Ellipse", _Ellipse2.default);
	
	exports.default = {
		Events: _bean2.default,
		Cache: _Utils2.default,
		Utils: _Utils2.default,
		DomUtils: _DomUtils2.default,
		StringBuffer: _StringBuffer2.default,
		Point: _Point2.default,
		Line: _Line2.default,
		Shape: _Shape2.default,
		Rectangle: _Rectangle2.default,
		Ellipse: _Ellipse2.default,
		EventDispatcher: _EventDispatcher2.default,
		Label: _Label2.default,
		Graph: _Graph2.default,
		Element: _Element2.default,
		Node: _Node2.default,
		Edge: _Edge2.default,
		Layout: _Layout2.default,
		FlowLayout: _FlowLayout2.default,
		GraphView: _GraphView2.default,
		SVGView: _SVGView2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  * Bean - copyright (c) Jacob Thornton 2011-2012
	  * https://github.com/fat/bean
	  * MIT license
	  */
	(function (name, context, definition) {
	  if (typeof module != 'undefined' && module.exports) module.exports = definition()
	  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	  else context[name] = definition()
	})('bean', this, function (name, context) {
	  name    = name    || 'bean'
	  context = context || this
	
	  var win            = window
	    , old            = context[name]
	    , namespaceRegex = /[^\.]*(?=\..*)\.|.*/
	    , nameRegex      = /\..*/
	    , addEvent       = 'addEventListener'
	    , removeEvent    = 'removeEventListener'
	    , doc            = document || {}
	    , root           = doc.documentElement || {}
	    , W3C_MODEL      = root[addEvent]
	    , eventSupport   = W3C_MODEL ? addEvent : 'attachEvent'
	    , ONE            = {} // singleton for quick matching making add() do one()
	
	    , slice          = Array.prototype.slice
	    , str2arr        = function (s, d) { return s.split(d || ' ') }
	    , isString       = function (o) { return typeof o == 'string' }
	    , isFunction     = function (o) { return typeof o == 'function' }
	
	      // events that we consider to be 'native', anything not in this list will
	      // be treated as a custom event
	    , standardNativeEvents =
	        'click dblclick mouseup mousedown contextmenu '                  + // mouse buttons
	        'mousewheel mousemultiwheel DOMMouseScroll '                     + // mouse wheel
	        'mouseover mouseout mousemove selectstart selectend '            + // mouse movement
	        'keydown keypress keyup '                                        + // keyboard
	        'orientationchange '                                             + // mobile
	        'focus blur change reset select submit '                         + // form elements
	        'load unload beforeunload resize move DOMContentLoaded '         + // window
	        'readystatechange message '                                      + // window
	        'error abort scroll '                                              // misc
	      // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
	      // that doesn't actually exist, so make sure we only do these on newer browsers
	    , w3cNativeEvents =
	        'show '                                                          + // mouse buttons
	        'input invalid '                                                 + // form elements
	        'touchstart touchmove touchend touchcancel '                     + // touch
	        'gesturestart gesturechange gestureend '                         + // gesture
	        'textinput '                                                     + // TextEvent
	        'readystatechange pageshow pagehide popstate '                   + // window
	        'hashchange offline online '                                     + // window
	        'afterprint beforeprint '                                        + // printing
	        'dragstart dragenter dragover dragleave drag drop dragend '      + // dnd
	        'loadstart progress suspend emptied stalled loadmetadata '       + // media
	        'loadeddata canplay canplaythrough playing waiting seeking '     + // media
	        'seeked ended durationchange timeupdate play pause ratechange '  + // media
	        'volumechange cuechange '                                        + // media
	        'checking noupdate downloading cached updateready obsolete '       // appcache
	
	      // convert to a hash for quick lookups
	    , nativeEvents = (function (hash, events, i) {
	        for (i = 0; i < events.length; i++) events[i] && (hash[events[i]] = 1)
	        return hash
	      }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ''))))
	
	      // custom events are events that we *fake*, they are not provided natively but
	      // we can use native events to generate them
	    , customEvents = (function () {
	        var isAncestor = 'compareDocumentPosition' in root
	              ? function (element, container) {
	                  return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16
	                }
	              : 'contains' in root
	                ? function (element, container) {
	                    container = container.nodeType === 9 || container === window ? root : container
	                    return container !== element && container.contains(element)
	                  }
	                : function (element, container) {
	                    while (element = element.parentNode) if (element === container) return 1
	                    return 0
	                  }
	          , check = function (event) {
	              var related = event.relatedTarget
	              return !related
	                ? related == null
	                : (related !== this && related.prefix !== 'xul' && !/document/.test(this.toString())
	                    && !isAncestor(related, this))
	            }
	
	        return {
	            mouseenter: { base: 'mouseover', condition: check }
	          , mouseleave: { base: 'mouseout', condition: check }
	          , mousewheel: { base: /Firefox/.test(navigator.userAgent) ? 'DOMMouseScroll' : 'mousewheel' }
	        }
	      }())
	
	      // we provide a consistent Event object across browsers by taking the actual DOM
	      // event object and generating a new one from its properties.
	    , Event = (function () {
	            // a whitelist of properties (for different event types) tells us what to check for and copy
	        var commonProps  = str2arr('altKey attrChange attrName bubbles cancelable ctrlKey currentTarget ' +
	              'detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey '  +
	              'srcElement target timeStamp type view which propertyName')
	          , mouseProps   = commonProps.concat(str2arr('button buttons clientX clientY dataTransfer '      +
	              'fromElement offsetX offsetY pageX pageY screenX screenY toElement'))
	          , mouseWheelProps = mouseProps.concat(str2arr('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ ' +
	              'axis')) // 'axis' is FF specific
	          , keyProps     = commonProps.concat(str2arr('char charCode key keyCode keyIdentifier '          +
	              'keyLocation location'))
	          , textProps    = commonProps.concat(str2arr('data'))
	          , touchProps   = commonProps.concat(str2arr('touches targetTouches changedTouches scale rotation'))
	          , messageProps = commonProps.concat(str2arr('data origin source'))
	          , stateProps   = commonProps.concat(str2arr('state'))
	          , overOutRegex = /over|out/
	            // some event types need special handling and some need special properties, do that all here
	          , typeFixers   = [
	                { // key events
	                    reg: /key/i
	                  , fix: function (event, newEvent) {
	                      newEvent.keyCode = event.keyCode || event.which
	                      return keyProps
	                    }
	                }
	              , { // mouse events
	                    reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i
	                  , fix: function (event, newEvent, type) {
	                      newEvent.rightClick = event.which === 3 || event.button === 2
	                      newEvent.pos = { x: 0, y: 0 }
	                      if (event.pageX || event.pageY) {
	                        newEvent.clientX = event.pageX
	                        newEvent.clientY = event.pageY
	                      } else if (event.clientX || event.clientY) {
	                        newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft
	                        newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop
	                      }
	                      if (overOutRegex.test(type)) {
	                        newEvent.relatedTarget = event.relatedTarget
	                          || event[(type == 'mouseover' ? 'from' : 'to') + 'Element']
	                      }
	                      return mouseProps
	                    }
	                }
	              , { // mouse wheel events
	                    reg: /mouse.*(wheel|scroll)/i
	                  , fix: function () { return mouseWheelProps }
	                }
	              , { // TextEvent
	                    reg: /^text/i
	                  , fix: function () { return textProps }
	                }
	              , { // touch and gesture events
	                    reg: /^touch|^gesture/i
	                  , fix: function () { return touchProps }
	                }
	              , { // message events
	                    reg: /^message$/i
	                  , fix: function () { return messageProps }
	                }
	              , { // popstate events
	                    reg: /^popstate$/i
	                  , fix: function () { return stateProps }
	                }
	              , { // everything else
	                    reg: /.*/
	                  , fix: function () { return commonProps }
	                }
	            ]
	          , typeFixerMap = {} // used to map event types to fixer functions (above), a basic cache mechanism
	
	          , Event = function (event, element, isNative) {
	              if (!arguments.length) return
	              event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event
	              this.originalEvent = event
	              this.isNative       = isNative
	              this.isBean         = true
	
	              if (!event) return
	
	              var type   = event.type
	                , target = event.target || event.srcElement
	                , i, l, p, props, fixer
	
	              this.target = target && target.nodeType === 3 ? target.parentNode : target
	
	              if (isNative) { // we only need basic augmentation on custom events, the rest expensive & pointless
	                fixer = typeFixerMap[type]
	                if (!fixer) { // haven't encountered this event type before, map a fixer function for it
	                  for (i = 0, l = typeFixers.length; i < l; i++) {
	                    if (typeFixers[i].reg.test(type)) { // guaranteed to match at least one, last is .*
	                      typeFixerMap[type] = fixer = typeFixers[i].fix
	                      break
	                    }
	                  }
	                }
	
	                props = fixer(event, this, type)
	                for (i = props.length; i--;) {
	                  if (!((p = props[i]) in this) && p in event) this[p] = event[p]
	                }
	              }
	            }
	
	        // preventDefault() and stopPropagation() are a consistent interface to those functions
	        // on the DOM, stop() is an alias for both of them together
	        Event.prototype.preventDefault = function () {
	          if (this.originalEvent.preventDefault) this.originalEvent.preventDefault()
	          else this.originalEvent.returnValue = false
	        }
	        Event.prototype.stopPropagation = function () {
	          if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation()
	          else this.originalEvent.cancelBubble = true
	        }
	        Event.prototype.stop = function () {
	          this.preventDefault()
	          this.stopPropagation()
	          this.stopped = true
	        }
	        // stopImmediatePropagation() has to be handled internally because we manage the event list for
	        // each element
	        // note that originalElement may be a Bean#Event object in some situations
	        Event.prototype.stopImmediatePropagation = function () {
	          if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation()
	          this.isImmediatePropagationStopped = function () { return true }
	        }
	        Event.prototype.isImmediatePropagationStopped = function () {
	          return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped()
	        }
	        Event.prototype.clone = function (currentTarget) {
	          //TODO: this is ripe for optimisation, new events are *expensive*
	          // improving this will speed up delegated events
	          var ne = new Event(this, this.element, this.isNative)
	          ne.currentTarget = currentTarget
	          return ne
	        }
	
	        return Event
	      }())
	
	      // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
	    , targetElement = function (element, isNative) {
	        return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element
	      }
	
	      /**
	        * Bean maintains an internal registry for event listeners. We don't touch elements, objects
	        * or functions to identify them, instead we store everything in the registry.
	        * Each event listener has a RegEntry object, we have one 'registry' for the whole instance.
	        */
	    , RegEntry = (function () {
	        // each handler is wrapped so we can handle delegation and custom events
	        var wrappedHandler = function (element, fn, condition, args) {
	            var call = function (event, eargs) {
	                  return fn.apply(element, args ? slice.call(eargs, event ? 0 : 1).concat(args) : eargs)
	                }
	              , findTarget = function (event, eventElement) {
	                  return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement
	                }
	              , handler = condition
	                  ? function (event) {
	                      var target = findTarget(event, this) // deleated event
	                      if (condition.apply(target, arguments)) {
	                        if (event) event.currentTarget = target
	                        return call(event, arguments)
	                      }
	                    }
	                  : function (event) {
	                      if (fn.__beanDel) event = event.clone(findTarget(event)) // delegated event, fix the fix
	                      return call(event, arguments)
	                    }
	            handler.__beanDel = fn.__beanDel
	            return handler
	          }
	
	        , RegEntry = function (element, type, handler, original, namespaces, args, root) {
	            var customType     = customEvents[type]
	              , isNative
	
	            if (type == 'unload') {
	              // self clean-up
	              handler = once(removeListener, element, type, handler, original)
	            }
	
	            if (customType) {
	              if (customType.condition) {
	                handler = wrappedHandler(element, handler, customType.condition, args)
	              }
	              type = customType.base || type
	            }
	
	            this.isNative      = isNative = nativeEvents[type] && !!element[eventSupport]
	            this.customType    = !W3C_MODEL && !isNative && type
	            this.element       = element
	            this.type          = type
	            this.original      = original
	            this.namespaces    = namespaces
	            this.eventType     = W3C_MODEL || isNative ? type : 'propertychange'
	            this.target        = targetElement(element, isNative)
	            this[eventSupport] = !!this.target[eventSupport]
	            this.root          = root
	            this.handler       = wrappedHandler(element, handler, null, args)
	          }
	
	        // given a list of namespaces, is our entry in any of them?
	        RegEntry.prototype.inNamespaces = function (checkNamespaces) {
	          var i, j, c = 0
	          if (!checkNamespaces) return true
	          if (!this.namespaces) return false
	          for (i = checkNamespaces.length; i--;) {
	            for (j = this.namespaces.length; j--;) {
	              if (checkNamespaces[i] == this.namespaces[j]) c++
	            }
	          }
	          return checkNamespaces.length === c
	        }
	
	        // match by element, original fn (opt), handler fn (opt)
	        RegEntry.prototype.matches = function (checkElement, checkOriginal, checkHandler) {
	          return this.element === checkElement &&
	            (!checkOriginal || this.original === checkOriginal) &&
	            (!checkHandler || this.handler === checkHandler)
	        }
	
	        return RegEntry
	      }())
	
	    , registry = (function () {
	        // our map stores arrays by event type, just because it's better than storing
	        // everything in a single array.
	        // uses '$' as a prefix for the keys for safety and 'r' as a special prefix for
	        // rootListeners so we can look them up fast
	        var map = {}
	
	          // generic functional search of our registry for matching listeners,
	          // `fn` returns false to break out of the loop
	          , forAll = function (element, type, original, handler, root, fn) {
	              var pfx = root ? 'r' : '$'
	              if (!type || type == '*') {
	                // search the whole registry
	                for (var t in map) {
	                  if (t.charAt(0) == pfx) {
	                    forAll(element, t.substr(1), original, handler, root, fn)
	                  }
	                }
	              } else {
	                var i = 0, l, list = map[pfx + type], all = element == '*'
	                if (!list) return
	                for (l = list.length; i < l; i++) {
	                  if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return
	                }
	              }
	            }
	
	          , has = function (element, type, original, root) {
	              // we're not using forAll here simply because it's a bit slower and this
	              // needs to be fast
	              var i, list = map[(root ? 'r' : '$') + type]
	              if (list) {
	                for (i = list.length; i--;) {
	                  if (!list[i].root && list[i].matches(element, original, null)) return true
	                }
	              }
	              return false
	            }
	
	          , get = function (element, type, original, root) {
	              var entries = []
	              forAll(element, type, original, null, root, function (entry) {
	                return entries.push(entry)
	              })
	              return entries
	            }
	
	          , put = function (entry) {
	              var has = !entry.root && !this.has(entry.element, entry.type, null, false)
	                , key = (entry.root ? 'r' : '$') + entry.type
	              ;(map[key] || (map[key] = [])).push(entry)
	              return has
	            }
	
	          , del = function (entry) {
	              forAll(entry.element, entry.type, null, entry.handler, entry.root, function (entry, list, i) {
	                list.splice(i, 1)
	                entry.removed = true
	                if (list.length === 0) delete map[(entry.root ? 'r' : '$') + entry.type]
	                return false
	              })
	            }
	
	            // dump all entries, used for onunload
	          , entries = function () {
	              var t, entries = []
	              for (t in map) {
	                if (t.charAt(0) == '$') entries = entries.concat(map[t])
	              }
	              return entries
	            }
	
	        return { has: has, get: get, put: put, del: del, entries: entries }
	      }())
	
	      // we need a selector engine for delegated events, use querySelectorAll if it exists
	      // but for older browsers we need Qwery, Sizzle or similar
	    , selectorEngine
	    , setSelectorEngine = function (e) {
	        if (!arguments.length) {
	          selectorEngine = doc.querySelectorAll
	            ? function (s, r) {
	                return r.querySelectorAll(s)
	              }
	            : function () {
	                throw new Error('Bean: No selector engine installed') // eeek
	              }
	        } else {
	          selectorEngine = e
	        }
	      }
	
	      // we attach this listener to each DOM event that we need to listen to, only once
	      // per event type per DOM element
	    , rootListener = function (event, type) {
	        if (!W3C_MODEL && type && event && event.propertyName != '_on' + type) return
	
	        var listeners = registry.get(this, type || event.type, null, false)
	          , l = listeners.length
	          , i = 0
	
	        event = new Event(event, this, true)
	        if (type) event.type = type
	
	        // iterate through all handlers registered for this type, calling them unless they have
	        // been removed by a previous handler or stopImmediatePropagation() has been called
	        for (; i < l && !event.isImmediatePropagationStopped(); i++) {
	          if (!listeners[i].removed) listeners[i].handler.call(this, event)
	        }
	      }
	
	      // add and remove listeners to DOM elements
	    , listener = W3C_MODEL
	        ? function (element, type, add) {
	            // new browsers
	            element[add ? addEvent : removeEvent](type, rootListener, false)
	          }
	        : function (element, type, add, custom) {
	            // IE8 and below, use attachEvent/detachEvent and we have to piggy-back propertychange events
	            // to simulate event bubbling etc.
	            var entry
	            if (add) {
	              registry.put(entry = new RegEntry(
	                  element
	                , custom || type
	                , function (event) { // handler
	                    rootListener.call(element, event, custom)
	                  }
	                , rootListener
	                , null
	                , null
	                , true // is root
	              ))
	              if (custom && element['_on' + custom] == null) element['_on' + custom] = 0
	              entry.target.attachEvent('on' + entry.eventType, entry.handler)
	            } else {
	              entry = registry.get(element, custom || type, rootListener, true)[0]
	              if (entry) {
	                entry.target.detachEvent('on' + entry.eventType, entry.handler)
	                registry.del(entry)
	              }
	            }
	          }
	
	    , once = function (rm, element, type, fn, originalFn) {
	        // wrap the handler in a handler that does a remove as well
	        return function () {
	          fn.apply(this, arguments)
	          rm(element, type, originalFn)
	        }
	      }
	
	    , removeListener = function (element, orgType, handler, namespaces) {
	        var type     = orgType && orgType.replace(nameRegex, '')
	          , handlers = registry.get(element, type, null, false)
	          , removed  = {}
	          , i, l
	
	        for (i = 0, l = handlers.length; i < l; i++) {
	          if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
	            // TODO: this is problematic, we have a registry.get() and registry.del() that
	            // both do registry searches so we waste cycles doing this. Needs to be rolled into
	            // a single registry.forAll(fn) that removes while finding, but the catch is that
	            // we'll be splicing the arrays that we're iterating over. Needs extra tests to
	            // make sure we don't screw it up. @rvagg
	            registry.del(handlers[i])
	            if (!removed[handlers[i].eventType] && handlers[i][eventSupport])
	              removed[handlers[i].eventType] = { t: handlers[i].eventType, c: handlers[i].type }
	          }
	        }
	        // check each type/element for removed listeners and remove the rootListener where it's no longer needed
	        for (i in removed) {
	          if (!registry.has(element, removed[i].t, null, false)) {
	            // last listener of this type, remove the rootListener
	            listener(element, removed[i].t, false, removed[i].c)
	          }
	        }
	      }
	
	      // set up a delegate helper using the given selector, wrap the handler function
	    , delegate = function (selector, fn) {
	        //TODO: findTarget (therefore $) is called twice, once for match and once for
	        // setting e.currentTarget, fix this so it's only needed once
	        var findTarget = function (target, root) {
	              var i, array = isString(selector) ? selectorEngine(selector, root) : selector
	              for (; target && target !== root; target = target.parentNode) {
	                for (i = array.length; i--;) {
	                  if (array[i] === target) return target
	                }
	              }
	            }
	          , handler = function (e) {
	              var match = findTarget(e.target, this)
	              if (match) fn.apply(match, arguments)
	            }
	
	        // __beanDel isn't pleasant but it's a private function, not exposed outside of Bean
	        handler.__beanDel = {
	            ft       : findTarget // attach it here for customEvents to use too
	          , selector : selector
	        }
	        return handler
	      }
	
	    , fireListener = W3C_MODEL ? function (isNative, type, element) {
	        // modern browsers, do a proper dispatchEvent()
	        var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents')
	        evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1)
	        element.dispatchEvent(evt)
	      } : function (isNative, type, element) {
	        // old browser use onpropertychange, just increment a custom property to trigger the event
	        element = targetElement(element, isNative)
	        isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++
	      }
	
	      /**
	        * Public API: off(), on(), add(), (remove()), one(), fire(), clone()
	        */
	
	      /**
	        * off(element[, eventType(s)[, handler ]])
	        */
	    , off = function (element, typeSpec, fn) {
	        var isTypeStr = isString(typeSpec)
	          , k, type, namespaces, i
	
	        if (isTypeStr && typeSpec.indexOf(' ') > 0) {
	          // off(el, 't1 t2 t3', fn) or off(el, 't1 t2 t3')
	          typeSpec = str2arr(typeSpec)
	          for (i = typeSpec.length; i--;)
	            off(element, typeSpec[i], fn)
	          return element
	        }
	
	        type = isTypeStr && typeSpec.replace(nameRegex, '')
	        if (type && customEvents[type]) type = customEvents[type].base
	
	        if (!typeSpec || isTypeStr) {
	          // off(el) or off(el, t1.ns) or off(el, .ns) or off(el, .ns1.ns2.ns3)
	          if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, '')) namespaces = str2arr(namespaces, '.')
	          removeListener(element, type, fn, namespaces)
	        } else if (isFunction(typeSpec)) {
	          // off(el, fn)
	          removeListener(element, null, typeSpec)
	        } else {
	          // off(el, { t1: fn1, t2, fn2 })
	          for (k in typeSpec) {
	            if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k])
	          }
	        }
	
	        return element
	      }
	
	      /**
	        * on(element, eventType(s)[, selector], handler[, args ])
	        */
	    , on = function(element, events, selector, fn) {
	        var originalFn, type, types, i, args, entry, first
	
	        //TODO: the undefined check means you can't pass an 'args' argument, fix this perhaps?
	        if (selector === undefined && typeof events == 'object') {
	          //TODO: this can't handle delegated events
	          for (type in events) {
	            if (events.hasOwnProperty(type)) {
	              on.call(this, element, type, events[type])
	            }
	          }
	          return
	        }
	
	        if (!isFunction(selector)) {
	          // delegated event
	          originalFn = fn
	          args       = slice.call(arguments, 4)
	          fn         = delegate(selector, originalFn, selectorEngine)
	        } else {
	          args       = slice.call(arguments, 3)
	          fn         = originalFn = selector
	        }
	
	        types = str2arr(events)
	
	        // special case for one(), wrap in a self-removing handler
	        if (this === ONE) {
	          fn = once(off, element, events, fn, originalFn)
	        }
	
	        for (i = types.length; i--;) {
	          // add new handler to the registry and check if it's the first for this element/type
	          first = registry.put(entry = new RegEntry(
	              element
	            , types[i].replace(nameRegex, '') // event type
	            , fn
	            , originalFn
	            , str2arr(types[i].replace(namespaceRegex, ''), '.') // namespaces
	            , args
	            , false // not root
	          ))
	          if (entry[eventSupport] && first) {
	            // first event of this type on this element, add root listener
	            listener(element, entry.eventType, true, entry.customType)
	          }
	        }
	
	        return element
	      }
	
	      /**
	        * add(element[, selector], eventType(s), handler[, args ])
	        *
	        * Deprecated: kept (for now) for backward-compatibility
	        */
	    , add = function (element, events, fn, delfn) {
	        return on.apply(
	            null
	          , !isString(fn)
	              ? slice.call(arguments)
	              : [ element, fn, events, delfn ].concat(arguments.length > 3 ? slice.call(arguments, 5) : [])
	        )
	      }
	
	      /**
	        * one(element, eventType(s)[, selector], handler[, args ])
	        */
	    , one = function () {
	        return on.apply(ONE, arguments)
	      }
	
	      /**
	        * fire(element, eventType(s)[, args ])
	        *
	        * The optional 'args' argument must be an array, if no 'args' argument is provided
	        * then we can use the browser's DOM event system, otherwise we trigger handlers manually
	        */
	    , fire = function (element, type, args) {
	        var types = str2arr(type)
	          , i, j, l, names, handlers
	
	        for (i = types.length; i--;) {
	          type = types[i].replace(nameRegex, '')
	          if (names = types[i].replace(namespaceRegex, '')) names = str2arr(names, '.')
	          if (!names && !args && element[eventSupport]) {
	            fireListener(nativeEvents[type], type, element)
	          } else {
	            // non-native event, either because of a namespace, arguments or a non DOM element
	            // iterate over all listeners and manually 'fire'
	            handlers = registry.get(element, type, null, false)
	            args = [false].concat(args)
	            for (j = 0, l = handlers.length; j < l; j++) {
	              if (handlers[j].inNamespaces(names)) {
	                handlers[j].handler.apply(element, args)
	              }
	            }
	          }
	        }
	        return element
	      }
	
	      /**
	        * clone(dstElement, srcElement[, eventType ])
	        *
	        * TODO: perhaps for consistency we should allow the same flexibility in type specifiers?
	        */
	    , clone = function (element, from, type) {
	        var handlers = registry.get(from, type, null, false)
	          , l = handlers.length
	          , i = 0
	          , args, beanDel
	
	        for (; i < l; i++) {
	          if (handlers[i].original) {
	            args = [ element, handlers[i].type ]
	            if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector)
	            args.push(handlers[i].original)
	            on.apply(null, args)
	          }
	        }
	        return element
	      }
	
	    , bean = {
	          'on'                : on
	        , 'add'               : add
	        , 'one'               : one
	        , 'off'               : off
	        , 'remove'            : off
	        , 'clone'             : clone
	        , 'fire'              : fire
	        , 'Event'             : Event
	        , 'setSelectorEngine' : setSelectorEngine
	        , 'noConflict'        : function () {
	            context[name] = old
	            return this
	          }
	      }
	
	  // for IE, clean up on unload to avoid leaks
	  if (win.attachEvent) {
	    var cleanup = function () {
	      var i, entries = registry.entries()
	      for (i in entries) {
	        if (entries[i].type && entries[i].type !== 'unload') off(entries[i].element, entries[i].type)
	      }
	      win.detachEvent('onunload', cleanup)
	      win.CollectGarbage && win.CollectGarbage()
	    }
	    win.attachEvent('onunload', cleanup)
	  }
	
	  // initialize selector engine to internal default (qSA or throw Error)
	  setSelectorEngine()
	
	  return bean
	});


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// util variables
	var _debugging = [],
	    _debugAll = false,
	    typeRegistry = {},
	    splice = Array.splice;
	
	/**
	 * Utility functions
	 */
	exports.default = {
		type: function type(namespace, name, _type) {
			if (!typeRegistry[namespace]) typeRegistry[namespace] = {};
			if (!name) return typeRegistry[namespace];
			if (!_type) return typeRegistry[namespace][name];
			typeRegistry[namespace][name] = _type;
		},
	
		createType: function createType(namespace, props, defaultType) {
			var name = props.name;
	
			// first check if type exists
			var type = this.type(namespace, name);
			if (!type) {
				var extend = props.extends ? this.type(namespace, props.extends) : null;
				if (!extend && defaultType) extend = defaultType;
				if (extend) type = function (_extend) {
					_inherits(type, _extend);
	
					function type() {
						_classCallCheck(this, type);
	
						return _possibleConstructorReturn(this, Object.getPrototypeOf(type).apply(this, arguments));
					}
	
					return type;
				}(extend);else {
					type = function type(config) {
						_classCallCheck(this, type);
	
						_.assign(this, config);
					};
				}
				delete props.name;
				delete props.extends;
				_.assign(type.prototype, props);
				type.typeName = name;
				this.type(namespace, name, type);
				this.log('Utils', 'Utils.createType - ' + namespace + '.' + name);
			}
			return type;
		},
	
		buildTypes: function buildTypes(types, namespace, defaultType) {
			var _this2 = this;
	
			this.log('Utils', 'Utils.buildTypes - ' + namespace);
	
			if (!types && defaultType) {
				this.createType(namespace, defaultType);
				this.log('Utils', 'Utils.buildTypes end');
				return;
			}
			if (defaultType) {
				var type = _.remove(types, { name: defaultType.name });
				type = type.length > 0 ? type[0] : null;
				if (type) defaultType = this.createType(namespace, _.assign({}, defaultType, type));else defaultType = this.createType(namespace, defaultType);
			}
	
			_.forEach(types, function (type) {
				_this2.createType(namespace, type, defaultType);
			});
			this.log('Utils', 'Utils.buildTypes end');
		},
	
		// Helper function to correctly set up the prototype chain, for subclasses.
		// Similar to `goog.inherits`, but uses a hash of prototype properties and
		// class properties to be extended.
		extend: function extend(child, parent, protoProps, staticProps) {
			// Add static properties to the constructor function, if supplied.
			_.extend(child, parent, staticProps);
	
			// Set the prototype chain to inherit from `parent`, without calling
			// `parent`'s constructor function.
			var Surrogate = function Surrogate() {
				this.constructor = child;
			};
			Surrogate.prototype = parent.prototype;
			child.prototype = new Surrogate();
	
			// Add prototype properties (instance properties) to the subclass,
			// if supplied.
			if (protoProps) _.extend(child.prototype, protoProps);
	
			// Set a convenience property in case the parent's prototype is needed later.
			child.superclass = parent.prototype;
	
			return child;
		},
	
		initConfig: function initConfig(obj, config) {
			var props = {},
			    c = obj.constructor,
			    cArr = [c];
			while (c) {
				if (c.super) {
					c = c.super.constructor;
					splice.apply(cArr, [0, 0, c]);
				} else c = null;
			}
	
			for (var i = 0; i < cArr.length; i++) {
				c = cArr[i];
				if (c.DEFAULTS) _.assign(props, c.DEFAULTS);
			}
			obj.props = _.assign(props, config);
			c.prototype.prop = function (name, value) {
				if (!value) return this.props[name];
				this.props[name] = value;
			};
		},
	
		/**
	  * Gets the JS class constructor.
	  * @param {Object} jsClass
	  * @param {Object} defaultClass
	  */
		getConstructor: function getConstructor(jsClass, defaultClass) {
			if (!jsClass) jsClass = defaultClass;
	
			if (_.isString(jsClass)) jsClass = eval(jsClass);
			return jsClass;
		},
	
		debug: function debug(moduleName) {
			if (moduleName) {
				_debugging.push(moduleName);
			} else {
				_debugAll = true;
			}
		},
	
		log: function log(name, message) {
			if (!window.console) {
				return;
			}
			var debug = _debugAll;
			if (!_debugAll) {
				debug = false;
				for (var i = 0; i < _debugging.length; i++) {
					if (_debugging[i] == name) debug = true;
				}
			}
			if (!debug) {
				return;
			}
			while (name.length < 10) {
				name = name + ' ';
			}
			name = name.substring(0, 10) + " - ";
			console.info(name, message);
		},
	
		/**
	  * Get the relative position of sub shapes within a parent share.
	  * @param bounds
	  * @param geometry The geometry information, the format of Geometry is:
	  * {
	  *      x: "x coordinate of ref point, if less than 1, will be treated as the percentage of the parent width.",
	  *      y: "y coordinate of ref point.",
	  *      anchorX: "x pos of child relative to the ref point",
	  *      anchorY: "y pos of child relative to the ref point",
	  *      offsetX: "the offset in the x direction.",
	  *      offsetY: "the offset in the y direction.",
	  *      width: "the width of the child element",
	  *      height: "the height of the child element"
	  * }
	  * @returns {*[]}
	  */
		getRelativePosition: function getRelativePosition(bounds, geometry) {
			return [bounds.width * geometry.x + geometry.width * geometry.anchorX + geometry.offsetX, bounds.height * geometry.y + geometry.height * geometry.anchorY + geometry.offsetY];
		},
	
		/**
	  * Get the position relative to the graph that's unscaled, i.e., absolute position without considering translation and scale.
	  * @param view the graph view object
	  * @param o can be either a Point or a Rectangle or a Point array.
	  */
		unscale: function unscale(view, o) {
			var scale = view.scale();
			var t = view.translate();
			if (o instanceof _Rectangle2.default) return new _Rectangle2.default(o.x * scale + t[0], o.y * scale + t[1], o.width * scale, o.height * scale);else if (o instanceof _Point2.default) return new _Point2.default(o.x * scale + t[0], o.y * scale + t[1]);else return [o[0] * scale + t[0], o[1] * scale + t[1]];
		},
	
		/**
	  * Get the position relative to the graph that's scaled, i.e., relative position considering translation and scale.
	  * @param view the graph view object
	  * @param o can be either a Point or a Rectangle or a Point array.
	  */
		scale: function scale(view, o) {
			var scale = view.scale();
			var t = view.translate();
			if (o instanceof _Rectangle2.default) return new _Rectangle2.default((o.x - t[0]) / scale, (o.y - t[1]) / scale, o.width / scale, o.height / scale);else if (o instanceof _Point2.default) return new _Point2.default((o.x - t[0]) / scale, (o.y - t[1]) / scale);else return [(o[0] - t[0]) / scale, (o[1] - t[1]) / scale];
		},
	
		/**
	  * Convenience method.
	  */
		getObjProperty: function getObjProperty(obj, prop) {
			if (!obj) return null;
			if (_.has(obj, prop)) return obj[prop];
			if (obj.getProperty && _.isFunction(obj.getProperty)) return obj.getProperty(prop);
			return null;
		}
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Point = function () {
		function Point(x, y) {
			_classCallCheck(this, Point);
	
			this.x = x;
			this.y = y;
		}
	
		/**
	  * Make a clone of this point
	  */
	
	
		_createClass(Point, [{
			key: "clone",
			value: function clone() {
				return new Point(this.x, this.y);
			}
	
			/**
	   * Calculate the distance from this pt to the other pt.
	   * @param aPt
	   * @returns {number}
	   */
	
		}, {
			key: "distance",
			value: function distance(aPt) {
				return Math.sqrt((this.x - aPt.x) * (this.x - aPt.x) + (this.y - aPt.y) * (this.y - aPt.y));
			}
	
			/**
	   * Translate this point
	  	 */
	
		}, {
			key: "translate",
			value: function translate(p2) {
				this.x += p2.x;
				this.y += p2.y;
				return this;
			}
	
			/**
	   * Scale this vector
	  	 */
	
		}, {
			key: "scale",
			value: function scale(_scale) {
				this.x *= _scale;
				this.y *= _scale;
				return this;
			}
		}, {
			key: "getScaled",
			value: function getScaled(scale) {
				return new Point(this.x * scale, this.y * scale);
			}
		}, {
			key: "getTranslated",
			value: function getTranslated(p2) {
				return new Point(this.x + p2.x, this.y + p2.y);
			}
	
			/**
	   * Get the direction vector from this point to p2.
	   * @param p2
	   * @returns {Point}
	   */
	
		}, {
			key: "getDirection",
			value: function getDirection(p2) {
				var dist = this.distance(p2);
				return new Point((p2.x - this.x) / dist, (p2.y - this.y) / dist);
			}
	
			/**
	   * rotate the point about the origin. With the specified angle.
	   * @param angle the angle to rotate
	   */
	
		}, {
			key: "rotate",
			value: function rotate(angle) {
				var cos = Math.cos(angle * Math.PI / 180);
				var sin = Math.sin(angle * Math.PI / 180);
				var x = this.x,
				    y = this.y;
				this.x = x * cos - y * sin;
				this.y = x * sin + y * cos;
				return this;
			}
		}, {
			key: "getRotated",
			value: function getRotated(angle) {
				return this.clone().rotate(angle);
			}
	
			/**
	   * Calculate the dot product, treating this and p2 as vectors.
	   */
	
		}, {
			key: "dotProduct",
			value: function dotProduct(p2) {
				return this.x * p2.x + this.y * p2.y;
			}
	
			/**
	   * Calculates the similarity of this Ray with another.
	   * Similarity is defined as the absolute value of the dotProduct()
	   * @param p2
	   * @returns {number}
	   */
	
		}, {
			key: "similarity",
			value: function similarity(p2) {
				return Math.abs(this.dotProduct(p2));
			}
	
			/**
	   * Get the mid point between this and p2.
	  	 */
	
		}, {
			key: "getMidPoint",
			value: function getMidPoint(p2) {
				return new Point((this.x + p2.x) / 2, (this.y + p2.y) / 2);
			}
		}, {
			key: "reverse",
			value: function reverse() {
				this.x = -this.x;
				this.y = -this.y;
				return this;
			}
		}, {
			key: "equals",
			value: function equals(p2) {
				if (!p2 || p2.constructor != Point) return false;
	
				return this.x == p2.x && this.y == p2.y;
			}
	
			/**
	   * Reflect this point w.r.t. the rectangle.
	   * If vertical is true, it will reflect the point cross the vertical
	   * central line of the rectangle, otherwise reflect cross the horizontal
	   * central line.
	   *
	   * @param rect the rectangle
	   * @param vertical whether is vertical reflection or horizontal reflection.
	   */
	
		}, {
			key: "reflect",
			value: function reflect(rect, vertical) {
				if (vertical) this.x = 2 * rect.x - this.x;else this.y = 2 * rect.y - this.y;
				return this;
			}
		}, {
			key: "toString",
			value: function toString() {
				return "Point:{x=" + this.x + ";y=" + this.y + "}";
			}
		}]);
	
		return Point;
	}();
	
	Point.W = new Point(-1, 0);
	Point.N = new Point(0, -1);
	Point.S = new Point(0, 1);
	Point.E = new Point(1, 0);
	Point.NE = new Point(1, -1);
	Point.NW = new Point(-1, -1);
	Point.SE = new Point(1, 1);
	Point.SW = new Point(-1, 1);
	
	exports.default = Point;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Shape2 = __webpack_require__(6);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rectangle = function (_Shape) {
		_inherits(Rectangle, _Shape);
	
		function Rectangle() {
			_classCallCheck(this, Rectangle);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Rectangle).apply(this, arguments));
		}
	
		_createClass(Rectangle, [{
			key: "getPerimeter",
			value: function getPerimeter(refPt, orthogonal) {
				return Rectangle.getPerimeter(this, refPt, orthogonal);
			}
		}, {
			key: "contains",
	
	
			/**
	   * Checks whether this rectangle contains a given point of a given rectangle
	   */
			value: function contains(el) {
				var w = el.width || 0;
				var h = el.height || 0;
				var left = el.x - w / 2;
				var right = el.x + w / 2;
				var top = el.y - h / 2;
				var bottom = el.y + h / 2;
				return right <= this.right && left >= this.left && top >= this.top && bottom <= this.bottom;
			}
	
			/**
	   * Calcualte the distance to a point. 0 if this rectangle contains the point.
	   */
	
		}, {
			key: "distance",
			value: function distance(pt) {
				if (this.contains(pt)) return 0;
	
				if (pt.x < this.left) {
					if (pt.y < this.top) return pt.distance(new _Point2.default(this.left, this.top));
					if (pt.y <= this.bottom) return this.left - pt.x;
					return pt.distance(new _Point2.default(this.left, this.bottom));
				}
				if (pt.x <= this.right) {
					if (pt.y <= this.top) return this.top - pt.y;
					return pt.y - this.bottom;
				}
				if (pt.y < this.top) return pt.distance(new _Point2.default(this.right, this.top));
				if (pt.y <= this.bottom) return pt.x - this.right;
				return pt.distance(new _Point2.default(this.right, this.bottom));
			}
	
			/**
	   * Given two points, we want to detect whether the line joining the pts intersect
	   * with the rectangle or not. We assume only horizontal or vertical line segments.
	   *
	   * @return int the side of the intersection: -1: no intersection, 0: left, 1: top, 2: right, 3: bottom, 4: containment.
	   */
	
		}, {
			key: "detectIntersection",
			value: function detectIntersection(pt1, pt2) {
				var horizontal = pt1.y == pt2.y;
				var contains1 = this.contains(pt1);
				var contains2 = this.contains(pt2);
				if (contains1 && contains2) return 4;
				if (!contains1 && !contains2) {
					if (horizontal && pt1.y >= this.top && pt1.y <= this.bottom) {
						if (pt1.x < this.left && pt2.x > this.right) return 0;
						if (pt1.x > this.right && pt2.x < this.left) return 2;
					}
					if (!horizontal && pt1.x >= this.left && pt1.x <= this.right) {
						if (pt1.y < this.top && pt2.y > this.bottom) return 1;
						if (pt1.y > this.bottom && pt2.y < this.top) return 3;
					}
					return -1;
				}
	
				var outPt = contains1 ? pt2 : pt1;
				if (horizontal) {
					if (outPt.x > this.right) return 2;
					return 0;
				} else {
					if (outPt.y < this.top) return 1;
					return 3;
				}
			}
		}, {
			key: "toString",
			value: function toString() {
				return 'Rectangle:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
			}
		}], [{
			key: "getPerimeter",
			value: function getPerimeter(rect, pt) {
				var orthogonal = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
				var x = rect.x;
				var y = rect.y;
				var dx = pt.x - x;
				var dy = pt.y - y;
				var alpha = Math.atan2(y, x);
				var p = new _Point2.default(0, 0);
				var pi = Math.PI;
				var pi2 = Math.PI / 2;
				var beta = pi2 - alpha;
				var t = Math.atan2(rect.height, rect.width);
	
				if (alpha < -pi + t || alpha > pi - t) {
					// Left edge
					p.x = rect.left;
					p.y = y - rect.width * Math.tan(alpha) / 2;
				} else if (alpha < -t) {
					// Top Edge
					p.y = rect.top;
					p.x = x - rect.height * Math.tan(beta) / 2;
				} else if (alpha < t) {
					// Right Edge
					p.x = rect.right;
					p.y = y + rect.width * Math.tan(alpha) / 2;
				} else {
					// Bottom Edge
					p.y = rect.bottom;
					p.x = x + rect.height * Math.tan(beta) / 2;
				}
	
				if (orthogonal) {
					if (pt.x >= rect.left && pt.x <= rect.right) {
						p.x = pt.x;
					} else if (pt.y >= rect.top && pt.y <= rect.bottom) {
						p.y = pt.y;
					}
	
					if (pt.x < rect.left) {
						p.x = rect.left;
					} else if (pt.x > rect.right) {
						p.x = rect.right;
					}
	
					if (pt.y < rect.top) {
						p.y = rect.top;
					} else if (pt.y > rect.bottom) {
						p.y = rect.bottom;
					}
				}
	
				return p;
			}
	
			/**
	   * Return the bounding rectangle that contains p1 and p2
	   */
	
		}, {
			key: "getBoundingRectangle",
			value: function getBoundingRectangle(pts, margin) {
				if (!pts || pts.length == 0) return null;
				margin = margin || [0, 0, 0, 0];
				if (!_lodash2.default.isArray(margin)) margin = [margin, margin, margin, margin];
				var min = [pts[0].x, pts[0].y];
				var max = [pts[0].x, pts[0].y];
				for (var i = 1; i < pts.length; i++) {
					var p = pts[i];
					if (p.x < min[0]) {
						min[0] = p.x;
					}
					if (p.y < min[1]) {
						min[1] = p.y;
					}
					if (p.x > max[0]) {
						max[0] = p.x;
					}
					if (p.y > max[1]) {
						max[1] = p.y;
					}
				}
				min[0] = min[0] - margin[0];
				min[1] = min[1] - margin[1];
				max[0] = max[0] + margin[2];
				max[1] = max[1] + margin[3];
				var w = Math.abs(max[0] - min[0]);
				var h = Math.abs(max[1] - min[1]);
				return new Rectangle(min[0] + w / 2, min[1] + h / 2, w, h);
			}
	
			/**
	   * Create a union of all the rectangles.
	   * @param rects
	   */
	
		}, {
			key: "union",
			value: function union(rects) {
				var minx = null,
				    miny = null,
				    maxx = -Infinity,
				    maxy = -Infinity;
				_lodash2.default.each(rects, function (rect) {
					minx = minx || rect.x;
					miny = miny || rect.y;
					minx = Math.min(minx, rect.x);
					miny = Math.min(miny, rect.y);
					maxx = Math.max(maxx, rect.right());
					maxy = Math.max(maxy, rect.bottom());
				});
				minx = minx || 0;
				miny = miny || 0;
				return new Rectangle(minx, miny, maxx - minx, maxy - miny);
			}
		}]);
	
		return Rectangle;
	}(_Shape3.default);

	exports.default = Rectangle;

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var registry = {};
	
	var Shape = function () {
		function Shape() {
			var x = arguments.length <= 0 || arguments[0] === undefined ? 0 : arguments[0];
			var y = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
			var width = arguments.length <= 2 || arguments[2] === undefined ? 0 : arguments[2];
			var height = arguments.length <= 3 || arguments[3] === undefined ? 0 : arguments[3];
	
			_classCallCheck(this, Shape);
	
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
		}
	
		/**
	  * Return the y-coord of the top side of this rectangle
	  */
	
	
		_createClass(Shape, [{
			key: "contains",
			value: function contains(el) {
				return false;
			}
	
			/**
	   * This will generate n ports on the shape.
	   */
	
		}, {
			key: "getRegularPoints",
			value: function getRegularPoints(n) {
				return null;
			}
	
			/**
	   * Get the intersection between boundary of this shape and the line connecting (x,y) with the refPt.
	   * @param refPt
	   * @returns {null}
	   */
	
		}, {
			key: "getPerimeter",
			value: function getPerimeter(refPt) {
				var orthogonal = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];
				return null;
			}
		}, {
			key: "top",
			get: function get() {
				return this.y - this.height / 2;
			}
	
			/**
	   * Returns the y-coordinate of the bottom of this Rectangle.
	   */
	
		}, {
			key: "bottom",
			get: function get() {
				return this.y + this.height / 2;
			}
	
			/**
	   * Return the x-coord of left side of this rectangle
	   */
	
		}, {
			key: "left",
			get: function get() {
				return this.x - this.width / 2;
			}
	
			/**
	   * Returns the x-coordinate of the right side of this Rectangle.
	   */
	
		}, {
			key: "right",
			get: function get() {
				return this.x + this.width / 2;
			}
		}, {
			key: "bounds",
			get: function get() {
				return new _Rectangle2.default(this.x, this.y, this.width, this.height);
			}
		}], [{
			key: "getShape",
			value: function getShape(name) {
				return registry[name];
			}
		}, {
			key: "addShape",
			value: function addShape(name, c) {
				registry[name] = c;
			}
		}, {
			key: "removeShape",
			value: function removeShape(name) {
				delete registry[name];
			}
		}]);
	
		return Shape;
	}();
	
	exports.default = Shape;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * dom Utility functions
	 */
	exports.default = {
		isIE: function () {
			var sAgent = window.navigator.userAgent;
			var Idx = sAgent.indexOf("MSIE");
	
			// If IE, return version number.
			if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
	
			// If IE 11 then look for Updated user agent string.
			else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;else return false;
		}(),
	
		isIE2: function () {
			var isIE = false,
			    version = null,
			    window = window || {},
			    navigator = navigator || { userAgent: "" };
			if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
				isIE = true;
				version = 11;
			} else {
				var myNav = navigator.userAgent.toLowerCase();
				isIE = myNav.indexOf('msie') != -1;
				if (isIE) version = parseInt(myNav.split('msie')[1]);
			}
	
			return function () {
				return isIE ? version : false;
			};
		}(),
	
		isFireFox: function () {
			// InstallTrigger: Firefox's API to install add-ons
			return typeof InstallTrigger !== 'undefined';
		}(),
	
		createElement: function createElement(tag, attribs, styles, html) {
			var el = document.createElement(tag);
			this.setElement(el, attribs, styles);
			if (html) el.innerHTML = html;
			return el;
		},
	
		createElementByString: function createElementByString(str) {
			var temp = this.createElement('div', null, null, str);
			return temp.childNodes;
		},
	
		setElement: function setElement(el, attribs, styles) {
			if (attribs) {
				_lodash2.default.forEach(attribs, function (value, key) {
					el.setAttribute(key, value);
				});
			}
			if (styles) {
				_lodash2.default.forEach(styles, function (value, key) {
					el.style[key] = value;
				});
			}
		},
	
		testElement: function testElement(node, method) {
			return node && node.nodeType == 1 && (!method || method(node));
		},
	
		getAncestorBy: function getAncestorBy(node, method) {
			while (node = node.parentNode) {
				if (this.testElement(node, method)) return node;
			}return null;
		},
	
		/**
	  * Get the position of element relative to the context.
	  * @param el the element
	  * @param context
	  * @returns {*[]}
	  */
		getPosition: function getPosition(el, context) {
			if (!context) context = document.body;
			var elRect = el.getBoundingClientRect();
			var contextRect = context.getBoundingClientRect();
	
			return [elRect.left - contextRect.left, elRect.top - contextRect.top];
		},
		getCenterPosition: function getCenterPosition(el, context) {
			if (!context) context = document.body;
			var elRect = el.getBoundingClientRect();
			var contextRect = context.getBoundingClientRect();
			var w = elRect.right - elRect.left;
			var h = elRect.bottom - elRect.top;
	
			return [elRect.left - contextRect.left + w / 2, elRect.top - contextRect.top + h / 2];
		},
	
	
		move: function move(el, x, y) {
			if (x) el.style.left = x + 'px';
			if (y) el.style.top = y + 'px';
		},
	
		getSize: function getSize(el) {
			var w = parseInt(el.style.offsetWidth, 10);
			var h = parseInt(el.style.offsetHeight, 10);
			return [w, h];
		},
	
		resize: function resize(el, w, h) {
			if (w) el.style.width = w + "px";
			if (h) el.style.height = h + 'px';
		},
	
		preloadImages: function preloadImages(array) {
			if (!this.preloadImages.list) this.preloadImages.list = [];
			if (!this.preloadImages.loaded) this.preloadImages.loaded = {};
	
			var list = this.preloadImages.list;
			var img,
			    that = this;
			for (var i = 0; i < array.length; i++) {
				img = new Image();
				img.onload = function () {
					var index = list.indexOf(this);
					if (index !== -1) {
						that.preloadImages.loaded[this.name] = { width: this.width, height: this.height };
						// remove image from the array once it's loaded
						// for memory consumption reasons
						list.splice(index, 1);
					}
				};
				list.push(img);
				img.src = array[i];
				img.name = array[i];
			}
		},
	
		/**
	  * Get's the image's information given the url. Must be preloaded by calling the preloadImage function.
	  * @param src
	  */
		getImageInfo: function getImageInfo(src) {
			if (this.preloadImages.loaded) {
				return this.preloadImages.loaded[src];
			}
			return null;
		},
	
		/**
	  * Check whether the key event is from input, textarea or select.
	  * @param e  input event
	  */
		eventFromInput: function eventFromInput(e) {
			var tagName = e.target.tagName;
			return tagName == 'INPUT' || tagName == 'TEXTAREA' || tagName == 'SELECT';
		}
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * A string buffer for fast string manipulation
	 */
	
	var StringBuffer = function () {
		function StringBuffer(str) {
			_classCallCheck(this, StringBuffer);
	
			this.buffer = [];
			if (str) this.buffer.push(str);
		}
	
		_createClass(StringBuffer, [{
			key: "append",
			value: function append(stuff) {
				if (_lodash2.default.isString(stuff)) this.buffer.push(stuff);else if (_lodash2.default.isArray(stuff)) this.buffer = this.buffer.concat(stuff);else this.buffer.push("" + stuff);
				return this;
			}
		}, {
			key: "prepend",
			value: function prepend(stuff) {
				if (_lodash2.default.isString(stuff)) this.buffer.splice(0, 0, stuff);else if (_lodash2.default.isArray(stuff)) this.buffer = stuff.concat(this.buffer);else this.buffer.splice(0, 0, "" + stuff);
				return this;
			}
		}, {
			key: "clear",
			value: function clear() {
				this.buffer = [];
			}
		}, {
			key: "removeLast",
			value: function removeLast() {
				this.buffer.pop();
				return this;
			}
		}, {
			key: "toString",
			value: function toString(sep) {
				if (!sep) sep = '';
				return this.buffer.join(sep);
			}
		}]);
	
		return StringBuffer;
	}();

	exports.default = StringBuffer;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Line = function () {
		function Line(start, end) {
			_classCallCheck(this, Line);
	
			this.start = start;
			this.end = end;
		}
	
		/**
	  * Calculate the length of this line
	  */
	
	
		_createClass(Line, [{
			key: 'length',
			value: function length() {
				return this.start.distance(this.end);
			}
	
			/**
	   * Calculate the distance of this line to the point.
	   */
	
		}, {
			key: 'distance',
			value: function distance(pt) {
				var x = this.start.distance(pt);
				if (x == 0) return 0;
	
				var l = this.length();
				var cosa = new _Point2.default((this.end.x - this.start.x) / l, (this.end.y - this.start.y) / l).dotProduct(new _Point2.default(pt.x / x, pt.y / x));
	
				return x * Math.sqrt(1 - cosa * cosa);
			}
	
			/**
	   * Function: intersection
	   *
	   * Returns the intersection of two lines as an <mxPoint>.
	   *
	   * Parameters:
	   *
	   * x0 - X-coordinate of the first line's startpoint.
	   * y0 - X-coordinate of the first line's startpoint.
	   * x1 - X-coordinate of the first line's endpoint.
	   * y1 - Y-coordinate of the first line's endpoint.
	   * x2 - X-coordinate of the second line's startpoint.
	   * y2 - Y-coordinate of the second line's startpoint.
	   * x3 - X-coordinate of the second line's endpoint.
	   * y3 - Y-coordinate of the second line's endpoint.
	   */
	
		}, {
			key: 'toString',
			value: function toString() {
				return 'Line:{start=' + this.start + ';end=' + this.end + '}';
			}
		}], [{
			key: 'intersection',
			value: function intersection(x0, y0, x1, y1, x2, y2, x3, y3) {
				var denom = (y3 - y2) * (x1 - x0) - (x3 - x2) * (y1 - y0);
				var nume_a = (x3 - x2) * (y0 - y2) - (y3 - y2) * (x0 - x2);
				var nume_b = (x1 - x0) * (y0 - y2) - (y1 - y0) * (x0 - x2);
	
				var ua = nume_a / denom;
				var ub = nume_b / denom;
	
				if (ua >= 0.0 && ua <= 1.0 && ub >= 0.0 && ub <= 1.0) {
					// Get the intersection point
					var intersectionX = x0 + ua * (x1 - x0);
					var intersectionY = y0 + ua * (y1 - y0);
	
					return new _Point2.default(intersectionX, intersectionY);
				}
	
				// No intersection
				return null;
			}
		}]);
	
		return Line;
	}();

	exports.default = Line;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(6);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Ellipse = function (_Shape) {
		_inherits(Ellipse, _Shape);
	
		function Ellipse() {
			_classCallCheck(this, Ellipse);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Ellipse).apply(this, arguments));
		}
	
		_createClass(Ellipse, [{
			key: 'toString',
			value: function toString() {
				return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
			}
		}]);
	
		return Ellipse;
	}(_Shape3.default);

	exports.default = Ellipse;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _KeyUtils = __webpack_require__(12);
	
	var KeyUtils = _interopRequireWildcard(_KeyUtils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var EventDispatcher = function () {
		/**
	  * Constructor
	  * @param root the root element that the manager will listen to.
	  * @param zoomScale
	  */
	
		function EventDispatcher(root) {
			var zoomScale = arguments.length <= 1 || arguments[1] === undefined ? [0, Infinity] : arguments[1];
	
			_classCallCheck(this, EventDispatcher);
	
			this.root = root;
			this.rootNS = root.getAttribute('ns') || 'root';
			this.zoomScale = zoomScale;
			this.scale = 1.0;
			this.listeners = {};
			this.dragging = false;
			this.handler = _lodash2.default.bind(this.handleEvent, this);
			this.started = false;
	
			// Simulate mouseenter/mouseleave events
			this.enterStack = [];
		}
	
		/**
	  * Start listening for events.
	  */
	
	
		_createClass(EventDispatcher, [{
			key: "start",
			value: function start() {
				if (this.started) return;
				_bean2.default.on(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler);
				this.startKeys();
				this.started = true;
			}
	
			/**
	   * Stop listening for events.
	   */
	
		}, {
			key: "stop",
			value: function stop() {
				if (!this.started) return;
				_bean2.default.off(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler);
				this.stopKeys();
				this.started = false;
			}
		}, {
			key: "startKeys",
			value: function startKeys() {
				_bean2.default.on(document, 'keydown keyup', this.handler);
			}
		}, {
			key: "stopKeys",
			value: function stopKeys() {
				_bean2.default.off(document, 'keydown keyup', this.handler);
			}
		}, {
			key: "getEventInfo",
			value: function getEventInfo(event) {
				var target = event.target;
				var buf = new _StringBuffer2.default(),
				    ns = void 0,
				    stack = [],
				    isRoot = false;
				while (!isRoot && target && target != document) {
					ns = target.getAttribute('ns');
					if (ns) {
						isRoot = _lodash2.default.startsWith(ns, "root.");
						if (isRoot) {
							ns = ns.substring(5);
							event.rootTarget = target;
						}
						if (!event.nsTarget) event.nsTarget = target;
						stack.splice(0, 0, target);
						buf.prepend(ns);
					}
					target = target.parentNode;
				}
				if (!isRoot) event.rootTarget = event.nsTarget;
	
				// target stack is a stack of all the ns targets up to the one with the data binding.
				event.targetStack = stack;
				ns = buf.toString('.');
				if (ns == '') ns = this.rootNS;
				return { data: event.rootTarget, ns: ns };
			}
	
			/**
	   * The main event handler method, it processes event and generate relevant events to dispatch.
	   */
	
		}, {
			key: "handleEvent",
			value: function handleEvent(event) {
				var _this = this;
	
				var type = event.type;
	
				// Do not dispatch other events if we are dragging.
				if (this.dragging || _DomUtils2.default.eventFromInput(event)) return;
	
				var data = void 0,
				    ns = void 0,
				    pos = this.getPosition(event),
				    info = void 0,
				    isKeyEvent = type == 'keydown' || type == 'keyup';
				if (isKeyEvent) {
					data = this.root;
					ns = KeyUtils.getKeyEvent(event);
				} else {
					info = this.getEventInfo(event);
					if (!info) return;
					data = info.data;
					ns = info.ns;
				}
	
				//Utils.log('EventDispatcher', "handleEvent - " + type + ';ns=' + ns);
	
				if (type == 'mousewheel') {
					this.scale *= Math.pow(2, event.wheelDelta * 0.002);
					this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0]);
					event.scale = this.scale;
					type = 'zoom';
				}
	
				// See if we should create drag events
				if (type == 'mousedown' && event.button == 0 /*only drag on left click*/) {
						(function () {
							// Create drag object.
							var dragObject = { data: data, pos: ns == 'root' ? EventDispatcher.mouse(_this.root, event) : pos };
							_this.dragging = false;
							// Start listening for mouse move.
							var dragPos = void 0;
	
							var mousemove = function mousemove(event) {
								var currentPos = _this.getPosition(event);
								if (!_this.dragging) {
									// check if the mouse has moved. IE always fire mousemove after mousedown even if the mouse hasn't moved yet.
									if (dragObject.pos[0] == currentPos[0] && dragObject.pos[1] == currentPos[1]) return;
	
									// start dragging
									_this.dragging = true;
									event.rootTarget = dragObject.data;
									_this.dispatch(event, 'dragstart', ns, dragObject.data, dragObject.pos);
								}
								if (ns == "root") dragPos = EventDispatcher.mouse(_this.root, event);else dragPos = currentPos;
								_this.getEventInfo(event);
								_this.dispatch(event, 'drag', ns, dragObject.data, dragPos);
							};
							var mouseup = function mouseup(event) {
								if (ns == "root") dragPos = EventDispatcher.mouse(_this.root, event);else dragPos = _this.getPosition(event);
	
								var info = _this.getEventInfo(event);
								if (_this.dragging) {
									_this.dragging = false;
									_this.dispatch(event, 'dragend', ns, dragObject.data, dragPos);
								} else {
									_this.dispatch(event, 'mouseup', ns, info.data, dragPos);
								}
	
								_bean2.default.off(window, 'mousemove', mousemove);
								_bean2.default.off(window, 'mouseup', mouseup);
							};
							event.preventDefault();
							_bean2.default.on(window, 'mousemove', mousemove);
							_bean2.default.on(window, 'mouseup', mouseup);
						})();
					}
	
				if (!isKeyEvent) this.simulateEnterLeave(event, type, ns, data, pos);
				this.dispatch(event, type, ns, data, pos);
	
				// disable the default context menu
				if (type == 'contextmenu') event.preventDefault();
			}
	
			/**
	   * try to simulate mouseenter/mouseleave events.
	   */
	
		}, {
			key: "simulateEnterLeave",
			value: function simulateEnterLeave(event, type, ns, data, pos) {
				var _this2 = this;
	
				var last = void 0,
				    stack = void 0;
				var clearEnterStack = function clearEnterStack(k) {
					k = k || 0;
					// Clear off the enter stack.
					while (_this2.enterStack.length >= k + 1) {
						last = _this2.enterStack.pop();
						_this2.dispatch(event, 'mouseleave', last.ns, last.data, pos);
					}
				};
				var getNS = function getNS(index) {
					var buf = new _StringBuffer2.default();
					for (var i = 0; i <= index; i++) {
						var val = stack[i].getAttribute("ns");
						if (_lodash2.default.startsWith(val, "root.")) val = val.substring(5);
						buf.append(val);
					}
					return buf.toString('.');
				};
	
				if (ns && ns != this.rootNS) {
					if (type == 'mouseover') {
						stack = event.targetStack;
						var item = void 0;
						for (var i = 0; i < stack.length; i++) {
							if (i < this.enterStack.length) {
								if (this.enterStack[i].target != stack[i]) {
									clearEnterStack(i);
								} else continue;
							}
							item = { data: data, ns: getNS(i), target: stack[i] };
							this.enterStack.push(item);
							this.dispatch(event, 'mouseenter', item.ns, data, pos);
						}
						if (stack.length < this.enterStack.length) clearEnterStack(stack.length);
					}
				}
				if (ns == this.rootNS && this.enterStack.length > 0) clearEnterStack();
			}
		}, {
			key: "dispatch",
			value: function dispatch(event, type, ns, data, pos) {
				//if (type != 'mouseover' && type != 'mouseout')
				//	Utils.log('EventDispatcher', "dispatch - " + type + '.' + ns + ';' + pos + ';rootTarget=' + event.rootTarget + ';data=' + data);
				if (!this.started) return;
				var nsType = ns ? type + '.' + ns : type;
				_lodash2.default.forEach(this.listeners, function (listeners, key) {
					if (EventDispatcher.match(nsType, key)) {
						_lodash2.default.forEach(listeners, function (listener) {
							if (!listener.context) listener.callback.apply(window, [type, ns, data, pos, event]);else listener.callback.apply(listener.context, [type, ns, data, pos, event]);
						});
					}
				});
	
				// after dispatching, do not propagate.
				if (event.stopPropagation) event.stopPropagation();
			}
		}, {
			key: "getPosition",
			value: function getPosition(event) {
				var pos = EventDispatcher.mouse(this.root, event);
				if (!_lodash2.default.isNaN(pos[0]) && !_lodash2.default.isNaN(pos[1])) this.lastPosition = pos;
				return this.lastPosition;
			}
	
			/**
	   * Registers a key event handler
	   * // Key is object {ctrl, alt, shift, meta, code}
	   */
	
		}, {
			key: "registerKey",
			value: function registerKey(type, key, callback, context) {
				var _this3 = this;
	
				if (_lodash2.default.isArray(key)) {
					_lodash2.default.forEach(key, function (k) {
						_this3.registerKey(type, k, callback, context);
					});
					return;
				}
				key = KeyUtils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code);
				if (!key.length) return;
				key = new _StringBuffer2.default(type).append(key).toString('.');
	
				var listener = { callback: callback, context: context };
				this.listeners[key] || (this.listeners[key] = []);
				this.listeners[key].push(listener);
			}
		}, {
			key: "unregisterKey",
			value: function unregisterKey(type, key, callback, context) {
				var _this4 = this;
	
				if (_lodash2.default.isArray(key)) {
					_lodash2.default.forEach(key, function (k) {
						_this4.unregisterKey(type, k, callback, context);
					});
					return;
				}
				key = KeyUtils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code);
				if (!key.length) return;
				key = new _StringBuffer2.default(type).append(key).toString('.');
	
				var listeners = this.listeners[key],
				    listener = void 0;
				if (!listeners) return;
				for (var i = 0; i < listeners.length; i++) {
					listener = listeners[i];
					if (listener.callback === callback && (!context || context === listener.context)) {
						listeners.splice(i, 1);
						return;
					}
				}
			}
	
			/**
	   * Registers an event handler
	   */
	
		}, {
			key: "register",
			value: function register(type, callback, context, zIndex) {
				var _this5 = this;
	
				if (_lodash2.default.isArray(type)) {
					_lodash2.default.forEach(type, function (t) {
						_this5.register(t, callback, context, zIndex);
					});
					return;
				}
				var listener = { callback: callback, context: context, zIndex: zIndex };
				this.listeners[type] || (this.listeners[type] = []);
				this.listeners[type].push(listener);
			}
		}, {
			key: "unregister",
			value: function unregister(type, callback, context) {
				var listeners = this.listeners[type],
				    listener = void 0;
				if (!listeners) return;
				for (var i = 0; i < listeners.length; i++) {
					listener = listeners[i];
					if (listener.callback === callback && (!context || context === listener.context)) {
						listeners.splice(i, 1);
						return;
					}
				}
			}
		}, {
			key: "destroy",
			value: function destroy() {
				this.stop();
				delete this.root;
				delete this.listeners;
				delete this.enterStack;
			}
	
			/**
	   * Check if the registered event type matches the real event type. "*" is allowed as a wild card.
	   */
	
		}], [{
			key: "match",
			value: function match(nsType, registeredType) {
				var arr = registeredType.split('*');
				if (arr.length == 1) return nsType == registeredType;
	
				var substr = void 0,
				    index = 0;
				for (var i = 0; i < arr.length; i++) {
					if (arr[i].length == 0) continue;
					substr = nsType.slice(index);
					index = substr.indexOf(arr[i]);
					if (index < 0) return false;
					index += arr[i].length;
				}
				return true;
			}
		}, {
			key: "mouse",
			value: function mouse(container, e) {
				if (e.changedTouches) e = e.changedTouches[0];
				var svg = container.ownerSVGElement || container;
				if (svg.createSVGPoint) {
					var point = svg.createSVGPoint();
					point.x = e.clientX;point.y = e.clientY;
					point = point.matrixTransform(container.getScreenCTM().inverse());
					return [point.x, point.y];
				}
				var rect = container.getBoundingClientRect();
				return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
			}
		}]);
	
		return EventDispatcher;
	}();

	exports.default = EventDispatcher;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getKeyEvent = getKeyEvent;
	exports.getKeyData = getKeyData;
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * KEY constant
	 */
	var KEY = {
		ALT: 18,
		BACK_SPACE: 8,
		CAPS_LOCK: 20,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 220,
		HOME: 36,
		LEFT: 37,
		META: 224,
		NUM_LOCK: 144,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PAUSE: 19,
		PRINTSCREEN: 44,
		RIGHT: 39,
		SCROLL_LOCK: 145,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38
		//ADD          : DomUtils.isFireFox ? 61  : 187,
		//SUBTRACT     : DomUtils.isFireFox ? 173 : 189
	}; ///////////////////////////////////////////////////////////////////////////////
	//                                                                           //
	//           The Key Utility CLass for the Event Dispatcher          	     //
	//                                                                           //
	///////////////////////////////////////////////////////////////////////////////
	
	function getKeyEvent(event) {
		if (!event || !event instanceof KeyboardEvent) {
			return null;
		}
	
		var key = event.keyCode || event.which;
	
		// Need to find a way to avoid this
		if (key >= 16 && key <= 18) {
			key = null;
		}
	
		return getKeyData(event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, key);
	}
	
	function getKeyData(ctrl, alt, shift, meta, key) {
		var buf = new _StringBuffer2.default();
	
		if (ctrl) buf.append("CTRL");
		if (alt) buf.append("ALT");
		if (shift) buf.append("SHIFT");
		if (meta) buf.append("META");
		if (key) buf.append(key);
	
		return buf.toString(".");
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Node = __webpack_require__(14);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(18);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var nodeDefaults = {
		name: 'Default',
		role: 'node',
		draggable: true,
		selectable: true,
		editable: true,
		resizable: false,
		sourceable: true,
		targetable: true,
		visible: true
	};
	
	var edgeDefaults = {
		name: 'Default',
		role: 'edge',
		selectable: true,
		visible: true
	};
	
	var Graph = function () {
		function Graph() {
			var id = arguments.length <= 0 || arguments[0] === undefined ? _lodash2.default.uniqueId("G") : arguments[0];
			var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var model = arguments[2];
	
			_classCallCheck(this, Graph);
	
			this.id = id;
	
			this.nodes = {};
			this.edges = {};
	
			this.selection = null;
			this.destroyed = false;
	
			_Utils2.default.buildTypes(config.nodeTypes, "Nodes", nodeDefaults);
			_Utils2.default.buildTypes(config.edgeTypes, "Edges", edgeDefaults);
	
			delete config.nodeTypes;
			delete config.edgeTypes;
			_Utils2.default.initConfig(this, config);
			this.root = null;
			if (model) this.loadModel(model);
		}
	
		_createClass(Graph, [{
			key: "addNode",
	
	
			/**
	   * Create a new Node
	   */
			value: function addNode(config) {
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.getCurrentRoot() : arguments[1];
				var pos = arguments[2];
	
				var NodeClass = Graph.getJSClass(config, _Node2.default);
				var node = new NodeClass(this, config);
	
				if (parent) Graph.addChild(parent, node, pos);else {
					this.root = node;
					this.root.prop('role', 'root');
				}
	
				this.nodes[node.id] = node;
				return node;
			}
		}, {
			key: "addEdge",
			value: function addEdge(config) {
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.getCurrentRoot() : arguments[1];
				var from = arguments[2];
				var to = arguments[3];
	
				var EdgeClass = Graph.getJSClass(config, _Edge2.default);
				var edge = new EdgeClass(this, config, from, to);
	
				Graph.addChild(parent, edge);
				this.edges[edge.id] = edge;
				return edge;
			}
		}, {
			key: "loadModel",
			value: function loadModel(model) {
				var _this = this;
	
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.getCurrentRoot() : arguments[1];
	
				var nodes = model.nodes;
				var edges = model.edges;
				delete model.nodes;
				delete model.edges;
	
				var node = this.addNode(model, parent);
				if (nodes) {
					_lodash2.default.forEach(nodes, function (child) {
						_this.loadModel(child, node);
					});
				}
				if (edges) {
					_lodash2.default.forEach(edges, function (edge) {
						var from = void 0,
						    to = void 0;
						if (edge.from) from = _this.nodes[edge.from];
						if (edge.to) to = _this.nodes[edge.to];
						_this.addEdge(edge, node, from, to);
					});
				}
			}
		}, {
			key: "getCurrentRoot",
			value: function getCurrentRoot() {
				return this.root;
			}
		}, {
			key: "reset",
			value: function reset() {}
		}, {
			key: "destroy",
			value: function destroy() {}
		}], [{
			key: "getJSClass",
			value: function getJSClass(config, defaultClass) {
				var jsClass = null;
				if (config && config.type) {
					// See if we can get the js class from config.
					var type = _Utils2.default.type(defaultClass.namespace, config.type);
					if (type) jsClass = type.jsClass;
				}
	
				return _Utils2.default.getConstructor(jsClass, defaultClass);
			}
		}, {
			key: "addChild",
			value: function addChild(parent, child) {
				if (!parent.children) parent.children = [];
	
				if (child.parent != parent) {
					parent.children.push(child);
	
					if (child.parent && child.parent.children) child.parent.children = _lodash2.default.without(child.parent.children, child);
				}
				child.parent = parent;
			}
		}]);
	
		return Graph;
	}();
	
	Graph.DEFAULTS = {
		allowDanglingEdges: true,
		multiConnect: false,
		readOnly: false,
		viewOnly: false
	};
	
	exports.default = Graph;

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Element2 = __webpack_require__(15);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Node = function (_Element) {
		_inherits(Node, _Element);
	
		function Node(graph) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
			_classCallCheck(this, Node);
	
			if (!config.id) config.id = _lodash2.default.uniqueId('N');
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Node).call(this, graph, config));
	
			_this.inEdges = [];
			_this.outEdges = [];
			_this.ports = null;
			_this.parent = null;
			return _this;
		}
	
		_createClass(Node, [{
			key: "isAncestor",
			value: function isAncestor(n) {
				// TODO: should we move this to graph class ?
				var node = n.parent;
				while (node) {
					if (this == node) {
						return true;
					};
					node = node.parent;
				}
				return false;
			}
		}, {
			key: "removeEdge",
			value: function removeEdge(edge) {
				var edges = edge.source == this ? this.outEdges : this.inEdges;
				for (var i = 0; i < edges.length; i++) {
					if (edge == edges[i]) {
						edges.splice(i, 1);
						break;
					}
				}
			}
	
			// Add a new incoming edge
	
		}, {
			key: "addInEdge",
			value: function addInEdge(edge, pos) {
				if (pos == null || pos === undefined) this.inEdges.push(edge);else this.inEdges.splice(pos, 0, edge);
			}
	
			// Add a new outgoing edge
	
		}, {
			key: "addOutEdge",
			value: function addOutEdge(edge, pos) {
				if (pos == null || pos === undefined || pos > edge.length - 1) this.outEdges.push(edge);else this.outEdges.splice(pos, 0, edge);
			}
		}, {
			key: "renderChildren",
			value: function renderChildren(view) {
				var _this2 = this;
	
				if (this.children) {
					var _ret = function () {
						var buf = new _StringBuffer2.default();
						_lodash2.default.forEach(_this2.children, function (child) {
							buf.append(child.render(view));
						});
						return {
							v: buf.toString()
						};
					}();
	
					if ((typeof _ret === "undefined" ? "undefined" : _typeof(_ret)) === "object") return _ret.v;
				}
				return '';
			}
		}, {
			key: "getPort",
			value: function getPort(key) {
				var portName = arguments.length <= 1 || arguments[1] === undefined ? 'auto' : arguments[1];
				var endPt = arguments[2];
	
				var shape = this.getShape(key),
				    pt = void 0;
				if (portName == 'auto') {
					pt = shape.getPerimeter(endPt);
					return pt;
				}
				return null;
			}
		}, {
			key: "toString",
			value: function toString() {
				var label = this.prop("label") ? this.prop("label") : "undefined";
				if (_lodash2.default.isArray(label)) label = label[0];
				return 'Node:{id:' + this.id + ';label:' + label + ';type:' + this.props.constructor.typeName + '}';
			}
		}]);
	
		return Node;
	}(_Element3.default);
	
	Node.namespace = "Nodes";
	
	exports.default = Node;
	
	/*

	/**
	 * The DrillDownParent is the parent that displays the vertex when drilled down.
	 *
	Vertex.prototype.getDrillDownParent = function() {
		return this.parent;
	};

	Vertex.prototype.isLocked = function() {
		var mode = this.getProperty("mode") || 3;
		return !(mode & Graph.ALLOW_INTERACTIONS);
	};

	Vertex.prototype.getCrumbText = function() {
		if (this.isLocked())
			return '<span><img src="webwb/pzreadonly.png" /></span><span>&nbsp;' + this.getProperty("label") + '</span>';
		return this.getProperty("label");
	};

	Vertex.prototype.canEdit = function() {
		return (!this.parent || !this.parent.isLocked()) && Vertex.superclass.canEdit.call(this);
	};

	Vertex.prototype.isContainer = function() {
		return this.getProperty("container");
	};

	*/

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Cache = __webpack_require__(16);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Shape = __webpack_require__(6);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Element is the common parent for Node and Edge.
	 */
	
	var Element = function () {
		function Element(graph) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? { id: _lodash2.default.uniqueId() } : arguments[1];
	
			_classCallCheck(this, Element);
	
			this.graph = graph;
			this.id = config.id;
			delete config.id;
	
			// Initialize decorators
			if (config.decorators) {
				this.createDecorators(config.decorators);
				delete config.decorators;
			}
	
			// Initialize View Properties
			if (config.views) {
				this.viewProps = config.views;
				delete config.views;
			}
	
			// Initialize type
			var type = config.type || "Default";
			type = _Utils2.default.type(this.constructor.namespace, type);
			if (!type) throw new Error("Type not found " + config.type);
			delete config.type;
			this.props = new type(config);
		}
	
		_createClass(Element, [{
			key: "prop",
			value: function prop(name, value) {
				if (_lodash2.default.isUndefined(value)) return this.props[name];
				this.props[name] = value;
			}
	
			/**
	   * Get/Set property stored by views.
	   * @param key
	   * @param name
	   * @param value
	   * @returns {*}
	   */
	
		}, {
			key: "viewProp",
			value: function viewProp() {
				var key = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];
				var name = arguments[1];
				var value = arguments[2];
	
				if (_lodash2.default.isUndefined(value)) {
					if (key == 'default') return this.prop(name, value);
					return this.viewProps[key][name];
				}
				if (key == 'default') {
					this.prop(name, value);
				} else {
					if (!this.viewProps[key]) this.viewProps[key] = {};
					this.viewProps[key][name] = value;
				}
			}
		}, {
			key: "createDecorators",
			value: function createDecorators(decorators) {}
	
			/**
	   * Get properties needed for rendering this element
	   * @returns {{key: (string|*), className: *, namespace: *, bounds: *}}
	   */
	
		}, {
			key: "getView",
			value: function getView(key) {
				var shape = this.getShape(key);
				return _lodash2.default.assign({
					id: this.id,
					key: key,
					className: this.computedClassName,
					namespace: this.namespace,
					scale: this.viewProp(key, 'scale') || 1.0
				}, shape);
			}
		}, {
			key: "getShape",
			value: function getShape(key) {
				var shape = _Cache2.default.get(this.id + ".shape", key);
				if (shape) return shape;
	
				var shapeConfig = this.viewProp(key, 'shape');
				var shapeClass = shapeConfig ? _Shape2.default.getShape(shapeConfig.name) : _Shape2.default.getShape('Rectangle');
				var x = this.viewProp(key, "x");
				var y = this.viewProp(key, "y");
				var width = this.viewProp(key, "width") || (shapeConfig ? shapeConfig.width : 0);
				var height = this.viewProp(key, "height") || (shapeConfig ? shapeConfig.height : 0);
				shape = new shapeClass(x, y, width, height);
				_Cache2.default.set(this.id + '.shape', shape, key);
				return shape;
			}
		}, {
			key: "render",
			value: function render(view) {
				var template = _Cache2.default.get(this.id + '.template', view.id);
				if (!template) {
					//create the template
					var role = this.prop('role');
					template = view.getTemplate('$' + role, null, this);
					if (_lodash2.default.isString(template)) template = _lodash2.default.template(template);
					_Cache2.default.set(this.id + '.template', template, view.id);
				}
				return template(this.getView(view.id));
			}
		}, {
			key: "renderShape",
			value: function renderShape(view) {
				var shape = this.prop('shape');
				if (shape) {
					var template = _lodash2.default.template(view.getTemplate(shape.name, shape));
					return template(this.getView(view.id));
				}
				return '';
			}
		}, {
			key: "renderLabel",
			value: function renderLabel(view) {
				if (this == this.graph.getCurrentRoot()) return null;
				var box = this.getLabelBox(view.id);
				if (box) return _Label2.default.SVG_TEMPLATE(box);
				return '';
			}
		}, {
			key: "getLabelBox",
			value: function getLabelBox(key) {
				var box = _Cache2.default.get(this.id + '.labelBox', key);
				if (box) return box;
				var shape = this.getShape(key);
				// Just get the config will have a positive performance boost for IE11 and IE10.
				box = _Label2.default.getLabelBox(this.prop('label'), shape.width, shape.height, this.viewProp(key, 'labelConfig'));
				_Cache2.default.set(this.id + '.labelBox', box, key);
				return box;
			}
		}, {
			key: "destroy",
			value: function destroy() {
				delete this.graph;
				delete this.decorators;
				delete this.props;
				delete this.viewProps;
				this.destroyed = true;
			}
		}, {
			key: "computedClassName",
			get: function get() {
				if (!this._computedClassName) {
					var buf = new _StringBuffer2.default(this.prop("role"));
					var props = this.props;
					if (props.hasOwnProperty("className")) buf.append(props["className"]);
					props = props.constructor.prototype;
					while (props) {
						if (props.hasOwnProperty("className")) buf.append(props["className"]);
						props = Object.getPrototypeOf(props);
					}
					this._computedClassName = buf.toString(' ');
				}
				return this._computedClassName;
			}
		}, {
			key: "namespace",
			get: function get() {
				if (this == this.graph.getCurrentRoot()) return '';
				return "root." + this.prop("role");
			}
		}]);
	
		return Element;
	}();

	/*

	Cell.prototype.move = function(x, y) {
		this.setProperty("x", Math.round(x));
		this.setProperty("y", Math.round(y));
		delete this.bounds;
	};

	Cell.prototype.resize = function(w, h) {
		this.setProperty("width", w);
		this.setProperty("height", h);
		delete this.bounds;
	};

	Cell.prototype.canEdit = function() {
		return (this.graph ? this.graph.canEdit() : true) && this.getProperty("editable");
	};

	Cell.prototype.canSelect = function() {
		return (this.graph ? this.graph.canSelect() : true) && this.getProperty("selectable");
	};

	Cell.prototype.canMove = function() {
		return (this.graph ? this.graph.canEdit() : true) && this.getProperty("draggable");
	};

	Cell.prototype.canResize = function() {
		return (this.graph ? this.graph.canEdit() : true) && this.getProperty("resizable");
	};

	Cell.prototype.getTypeFromString = function(typeStr) {
		return this.graph.getType(typeStr);
	};

	Cell.prototype.createModifiers = function(modifiers) {
		this.modifiers = null;
		var modifierSettings = this.getProperty("modifierSettings");
		if (modifierSettings) {
			_.each(modifiers, function(config) {
				config.type = this.graph.getModifierType(config.className);
				config.setting = modifierSettings[config.className];
				if (!config.type || !config.setting) return;

				this.addModifier(config.className, new Modifier(this, config));
			}, this);

			// Check for showAlways settings
			_.each(modifierSettings, function(setting, name) {
				if (setting.showAlways && (!this.modifiers || !this.modifiers[name])) {
					var config = {type: this.graph.getModifierType(name), setting: setting};
					if (!config.type) return;
					this.addModifier(name, new Modifier(this, config));
				}
			}, this);
		}
	};

	Cell.prototype.addModifier = function(name, modifier) {
		if (!this.modifiers)
			this.modifiers = {};

		if (!modifier.hasOwnProperty("showHeader"))
			modifier.showHeader = true;

		// @hack preferably set it in configurations.
		if (modifier.name == "HoverProcessModifier" || modifier.name == "HoverResults")
			modifier.showHeader = false;

		this.modifiers[name] = modifier;
	};

	Cell.prototype.getModifiers = function() {
		if (_.isUndefined(this.modifiers))
			this.createModifiers();
		return this.modifiers;
	};

	Cell.prototype.getModifier = function(name) {
		var modifiers = this.getModifiers();
		if (modifiers)
			return modifiers[name];
		return null;
	};

	Cell.prototype.isVisible = function() {
		return this.getProperty('visible');
	};

	Cell.prototype.isContainer = function() {
		return false;
	};
	*/


	exports.default = Element;

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	/**
	 * Created by tong on 6/7/2016.
	 */
	
	var caches = {};
	
	var Cache = {
		get: function get(key, namespace) {
			return this.getCache(namespace)[key];
		},
	
		set: function set(key, value, namespace) {
			this.getCache(namespace)[key] = value;
		},
	
		contains: function contains(key, namespace) {
			return key in this.getCache(namespace);
		},
	
		remove: function remove(key, namespace) {
			delete this.getCache(namespace)[key];
		},
	
		clear: function clear(namesapce) {
			if (!namespace) caches = {};else if (caches[namespace]) caches[namespace] = {};
		},
	
		getCache: function getCache() {
			var namespace = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];
	
			if (!caches[namespace]) caches[namespace] = {};
			return caches[namespace];
		}
	};
	
	exports.default = Cache;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FONT_BOLD = 1,
	    FONT_ITALIC = 2,
	    FONT_UNDERLINE = 4,
	    FONT_SHADOW = 8;
	var SVG_TEMPLATE_STR = "\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)\">\n\t<% if (box.backgroundColor) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" fill=\"<%=box.backgroundColor%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>".trim();
	var SVG_TEMPLATE = _lodash2.default.template(SVG_TEMPLATE_STR, { variable: "data" });
	
	var defaultConfig = {
		fontSize: 11,
		fontFamily: "Arial",
		fontStyle: 0,
		padding: 0,
		linePadding: 0,
		align: "left",
		width: 0,
		height: 0,
		geometry: { x: 0, y: 0, anchorY: 0, offsetX: 0, offsetY: 0 }
	};
	
	/**
	 * The label object handles label sizing/positioning
	 */
	
	exports.default = function () {
		var canvasSupported = false,
		    stringMeasureEl = null;
	
		/**
	  * Calculate the size of the string.
	  */
		var getStringSize = _lodash2.default.memoize(function (str, fontSize, fontFamily, bold) {
			if (!str || str == "") return [0, 0];
	
			fontSize = fontSize || 11;
			fontFamily = fontFamily || 'Arial,Helvetica';
			bold = !_lodash2.default.isUndefined(bold) ? bold : false;
	
			var size;
	
			if (_lodash2.default.isNull(canvasSupported)) {
				stringMeasureEl = _DomUtils2.default.createElement('canvas');
				canvasSupported = !!(stringMeasureEl.getContext && stringMeasureEl.getContext('2d'));
			}
	
			if (canvasSupported) {
				_Utils2.default.log('Label', 'using canvas');
				var ctx = stringMeasureEl.getContext("2d");
				ctx.font = fontSize + " " + fontFamily + " " + (bold ? "bold" : "normal");
				var measure = ctx.measureText(str);
				size = [measure.width, 10];
			} else {
				// first check if there is a string-measuring div available, if not, create now.
				if (!stringMeasureEl) {
					stringMeasureEl = _DomUtils2.default.createElement('iframe', { id: "_ComputeStylesIframe" }, { position: "absolute", visibility: "hidden", display: "none", width: "auto" });
					document.body.appendChild(stringMeasureEl);
					var doc = stringMeasureEl.contentWindow.document;
					doc.open();
					doc.write('<html><body><div id="sizeMeasuringDiv" style="position:absolute;width:auto;height:auto;white-space:pre-wrap;word-wrap:break-word;display:inline-block;"></div></body></html>');
					doc.close();
				}
				stringMeasureEl.style.display = "";
				var div = stringMeasureEl.contentWindow.document.getElementById("sizeMeasuringDiv");
				div.style.fontSize = fontSize;
				div.style.fontFamily = fontFamily;
				div.style.fontWeight = bold ? 'bold' : 'normal';
				div.style.padding = 0;
				div.style.width = "auto";
				div.innerHTML = str;
	
				size = [div.offsetWidth, div.offsetHeight];
				stringMeasureEl.style.display = "none";
			}
			return size;
		}, function (str, fontSize, fontFamily, bold) {
			return str + ';' + fontSize + ';' + fontFamily + ';' + bold;
		});
	
		/**
	  * Create a wrapped text.
	  * @param {String} string the string to wrap.
	  * @param {maxWidth} the maximum width this string can take.
	  * @param {fontSize}
	  * @param {fontFamily}
	  * @param {bold}
	  */
		var wrap = _lodash2.default.memoize(function (string, maxWidth, fontSize, fontFamily, bold) {
			maxWidth = maxWidth || 0;
			fontSize = fontSize || 11;
			fontFamily = fontFamily || 'Arial,Helvetica';
			bold = !_lodash2.default.isUndefined(bold) ? bold : false;
	
			var arr = [];
			var spaceSize = getStringSize("&nbsp;", fontSize, fontFamily, bold),
			    space = spaceSize[0];
			arr.lineHeight = spaceSize[1];
	
			if (!maxWidth || !string || string == "") {
				arr.push(string);
				arr.width = !string || string == "" ? space : getStringSize(string, fontSize, fontFamily, bold)[0];
				arr.height = arr.lineHeight;
				return arr;
			}
	
			var width = 0;
			//split the text by lines
			var lines = string.split(/[\r\n|\n|\r]/);
	
			var buf = new _StringBuffer2.default();
	
			for (var j = 0; j < lines.length; j++) {
				//split each line by word
				var words = lines[j].split(/[\s]/);
				var line = "",
				    currentWidth = 0,
				    wordWidth = 0,
				    newLine = true,
				    word;
	
				for (var i = 0; i < words.length; i++) {
					word = words[i];
					wordWidth = getStringSize(word, fontSize, fontFamily, bold)[0];
	
					if ((newLine ? wordWidth : currentWidth + space + wordWidth) > maxWidth) {
						if (newLine) {
							buf.append(word);
							width = Math.max(width, wordWidth);
							if (i < words.length - 1) {
								arr.push(buf.toString());
								buf.clear();
							}
						} else {
							arr.push(buf.append(line).toString());
							width = Math.max(width, currentWidth + space + wordWidth);
							buf.clear();
						}
						line = "";
						currentWidth = 0;
						if (!newLine) i--; // move back one word.
						newLine = true;
					} else {
						line = newLine ? word : line + " " + word;
						currentWidth = newLine ? wordWidth : currentWidth + space + wordWidth;
						width = Math.max(width, currentWidth);
						newLine = false;
					}
				}
				if (line != "") buf.append(line);
				if (j < lines.length - 1) {
					arr.push(buf.toString());
					buf.clear();
				}
			}
	
			arr.push(buf.toString());
			arr.width = width;
			arr.height = arr.lineHeight * arr.length;
			return arr;
		}, function (str, maxWidth, fontSize, fontFamily, bold) {
			return str + ';' + maxWidth + ';' + fontSize + ';' + fontFamily + ';' + bold;
		});
	
		/**
	  *  Get the view information for how to display the label.
	  * @param label The string that needs to be displayed
	  * @param containerWidth The width of the parent container.
	  * @param containerHeight The height of the parent container.
	  * @param labelConfig The configuration on how to display label. It should be an object with the following parameters:
	  * {
	  *      fontSize, fontFamily, fontStyle, padding,
	  *      align: can be either "left", "center" or "right",
	  *      width: the maximum width of the label. if less than 1, then is treated as percentage. If 0, no wrapping will occur,
	  *      height,
	  *      geometry
	  * }
	  * @returns {*}
	  */
		function getLabelBox(label, containerWidth, containerHeight, labelConfig) {
			labelConfig = _lodash2.default.defaultsDeep(labelConfig, defaultConfig);
			var fontSize = labelConfig.fontSize;
			var fontFamily = labelConfig.fontFamily;
			var fontStyle = labelConfig.fontStyle;
			var bold = (fontStyle & FONT_BOLD) == FONT_BOLD;
			var padding = labelConfig.padding;
			var linePadding = labelConfig.linePadding;
			var align = labelConfig.align;
	
			var w = labelConfig.width,
			    h = labelConfig.height;
			w = w <= 5 ? containerWidth * w : w;
			h = h <= 5 ? containerHeight * h : h;
			w -= 2 * padding;
			h -= 2 * padding;
			w = Math.max(0, w);
			h = Math.max(0, h);
	
			var geometry = _lodash2.default.clone(labelConfig.geometry);
			var wrappedLabel = this.wrap(label, w, fontSize, fontFamily, bold);
			geometry.width = wrappedLabel.width + 2 * padding;
			geometry.height = wrappedLabel.height + 2 * padding + (wrappedLabel.length - 1) * linePadding;
			var anchor = "start",
			    dx = 0,
			    setAnchorX = !_lodash2.default.has(geometry, "anchorX");
			switch (align) {
				case "center":
					anchor = "middle";
					if (setAnchorX) geometry.anchorX = 0;
					break;
				case "right":
					anchor = "end";
					dx = wrappedLabel.width / 2;
					if (setAnchorX) geometry.anchorX = -0.5;
					break;
				case "left":
					dx = -wrappedLabel.width / 2;
					if (setAnchorX) geometry.anchorX = 0.5;
					break;
			}
			var pos = _Utils2.default.getRelativePosition({ width: containerWidth, height: containerHeight }, geometry);
			var bounds = new _Rectangle2.default(pos[0], pos[1], geometry.width, geometry.height);
	
			// the maximum bounds for the label, used to position inline editor
			geometry.width = Math.max(w + 2 * padding, geometry.width);
			geometry.height = Math.max(h + 2 * padding, geometry.height);
			pos = _Utils2.default.getRelativePosition({ width: containerWidth, height: containerHeight }, geometry);
			var maxBounds = new _Rectangle2.default(pos[0], pos[1], geometry.width, geometry.height);
	
			return {
				config: labelConfig, label: wrappedLabel, _label: label,
				dx: dx, dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight, anchor: anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
				bounds: bounds, maxBounds: maxBounds
			};
		}
	
		function getLabelBoxForEdge(label, edge, labelConfig) {
			labelConfig = _lodash2.default.defaultsDeep(labelConfig, defaultConfig);
			if (!label || label == "") return null;
	
			var fontSize = labelConfig.fontSize;
			var fontFamily = labelConfig.fontFamily;
			var fontStyle = labelConfig.fontStyle;
			var bold = (fontStyle & FONT_BOLD) == FONT_BOLD;
	
			var wrappedLabel = this.wrap(label, labelConfig.width, fontSize, fontFamily, bold);
			var pos = edge.getRelativePosition({ x: labelConfig.labelLocation / 2, offsetX: labelConfig.labelOffsetX || 0, offsetY: labelConfig.labelOffsetY || 0 });
	
			var anchor = "start",
			    dx = void 0;
			switch (labelConfig.align) {
				case "center":
					anchor = "middle";
					break;
				case "right":
					anchor = "end";
					dx = wrappedLabel.width / 2;
					break;
				case "left":
				default:
					dx = -wrappedLabel.width / 2;
					break;
			}
			return {
				config: labelConfig, label: wrappedLabel, _label: label,
				dx: dx, dy: -wrappedLabel.height / 2 + wrappedLabel.lineHeight,
				anchor: anchor, lineHeight: wrappedLabel.lineHeight,
				bounds: new _Rectangle2.default(pos[0], pos[1], wrappedLabel.width, wrappedLabel.height)
			};
		}
	
		var editor = {
			visible: function visible() {
				return this.input && this.input.style.visibility == 'visible';
			},
	
			start: function start(key, container, box, refEl, textEl) {
				if (!this.input) {
					this.input = _DomUtils2.default.createElement('textarea', { id: "inlineEditor", unselectable: "off" }, { position: "absolute", overflow: "hidden", padding: "0px", margin: "0px", border: "transparent" }), container.appendChild(this.input);
				} else if (this.visible() && this.key != key) {
					// need to close the existing editor first
					this.stop();
				}
				this.key = key;
				this.box = box;
				this.refEl = refEl;
				this.textEl = textEl;
	
				var labelConfig = box.config;
				//let pos = Utils.unscale(graph, [cell.getBounds().getCenterX() + bounds.x, cell.getBounds().getCenterY() + bounds.y + 5]);
				var pos = _DomUtils2.default.getCenterPosition(refEl, container);
				pos = [pos[0] + box.maxBounds.left, pos[1] + box.maxBounds.top];
				var scale = 1.0;
	
				if (textEl) textEl.style.visibility = 'hidden';
	
				_DomUtils2.default.setElement(this.input, null, {
					visibility: 'visible',
					left: pos[0] + "px",
					top: pos[1] + "px",
					width: box.maxBounds.width * scale + 'px',
					height: box.maxBounds.height * scale + 'px',
					"font-family": labelConfig.fontFamily,
					"font-size": labelConfig.fontSize * scale + 'px',
					"font-weight": (labelConfig.fontStyle & FONT_BOLD) == FONT_BOLD ? 'bold' : 'normal'
					/*"color": labelConfig.fontColor*/
				});
	
				this.input.value = box._label;
				this.input.focus();
				this.input.select();
				_bean2.default.fire(this, 'editor.start', [this.key]);
			},
	
			stop: function stop(cancel) {
				if (!this.visible()) return;
	
				cancel = cancel || false;
				if (this.textEl) this.textEl.style.visibility = null;
	
				this.input.style.visibility = 'hidden';
				if (!cancel) _bean2.default.fire(this, 'editor.update', [this.key, this.input.value]);
	
				_bean2.default.fire(this, 'editor.stop', [this.key]);
				delete this.key;
				delete this.box;
				delete this.refEl;
				delete this.textEl;
			}
		};
	
		return {
			FONT_BOLD: FONT_BOLD,
			FONT_ITALIC: FONT_ITALIC,
			FONT_UNDERLINE: FONT_UNDERLINE,
			FONT_SHADOW: FONT_SHADOW,
			SVG_TEMPLATE_STR: SVG_TEMPLATE_STR,
			SVG_TEMPLATE: SVG_TEMPLATE,
			getStringSize: getStringSize,
			wrap: wrap,
			getLabelBox: getLabelBox,
			getLabelBoxForEdge: getLabelBoxForEdge,
			editor: editor
		};
	}();

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Element2 = __webpack_require__(15);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Edge = function (_Element) {
		_inherits(Edge, _Element);
	
		function Edge(graph) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var source = arguments[2];
			var target = arguments[3];
	
			_classCallCheck(this, Edge);
	
			if (!config.id) config.id = _lodash2.default.uniqueId('E');
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Edge).call(this, graph, config));
	
			_this.source = _this.target = null;
			_this.setSource(source, config.sourcePos);
			_this.setTarget(target, config.targetPos);
			return _this;
		}
	
		_createClass(Edge, [{
			key: "setSource",
			value: function setSource(node, pos) {
				this.setTerminal(node, pos, 'source');
			}
		}, {
			key: "setTarget",
			value: function setTarget(node, pos) {
				this.setTerminal(node, pos, 'target');
			}
	
			/**
	   * Internal methods to set either the source or target
	   */
	
		}, {
			key: "setTerminal",
			value: function setTerminal(node, pos, dir) {
				var end = dir == 'source' ? this.source : this.target;
				if (end == node) {
					// simply change the position of the edge.
					if (node) node.setEdgeAt(this, pos);
				} else {
					if (end) {
						// first remove the edge from the current end
						end.removeEdge(this);
					}
	
					if (node) {
						if (dir == 'source') node.addOutEdge(this, pos);else node.addInEdge(this, pos);
					}
					if (dir == 'source') this.source = node;else this.target = node;
					this.clearPoints();
				}
			}
	
			/*getView(key) {
	  	}*/
	
		}, {
			key: "getLabelBox",
			value: function getLabelBox(key) {
				return _Label2.default.getLabelBoxForEdge(this.prop('label'), this.getView(key), this.viewProp(key, 'labelConfig'));
			}
		}, {
			key: "getPoints",
			value: function getPoints() {
				/*if (this.graph.eventDispatcher.dragging) {
	   	this.clearPoints();
	   	return [Anchor.getStartPoint(this), Anchor.getEndPoint(this)];
	   }*/
	
				if (!this.points || this.points.length == 0) {
					delete this.length;
					this.points = EdgeStyle.getPoints(this);
				}
	
				return this.points;
			}
	
			/**
	   *
	   * Return the total length of this connection, in pixels.
	   */
	
		}, {
			key: "getLength",
			value: function getLength() {
				if (!_lodash2.default.isUndefined(this.length)) return this.length;
	
				var points = this.getPoints();
				var i,
				    l = 0;
				for (i = 0; i < points.length - 1; i++) {
					l += points[i].distance(points[i + 1]);
				}return this.length = l;
			}
		}, {
			key: "clearPoints",
			value: function clearPoints() {
				delete this.points;
				delete this.length;
			}
	
			/**
	   * Return a pair of points as reference to the calculation of start and end points.
	   */
	
		}, {
			key: "getReferencePoints",
			value: function getReferencePoints() {
				var pts = [];
				var refPts = this.prop('refPts');
				if (this.source) pts.push(this.source.getBounds().getCenter());else pts.push(refPts[0]);
	
				if (this.target) pts.push(this.target.getBounds().getCenter());else pts.push(refPts[1]);
				return pts;
			}
	
			/**
	  * Calculate the position where to put modifiers or label..
	  *
	  * @param geometry: defines how far along the edge should the point be placed.
	  * @return the relative position.
	  */
	
		}, {
			key: "getRelativePosition",
			value: function getRelativePosition(geometry) {
				var p = geometry.x,
				    l = this.getLength();
				if (_lodash2.default.isString(p)) {
					if (/%$/.test(p)) {
						p = s(p).strLeft('%').toNumber() / 100;
					} else if (/px$/.test(p)) {
						p = s(p).strLeft('px').toNumber();
					}
				}
				if (p >= -1 && p <= 1) p *= l;
				if (p < 0) p = l + p;
				if (p > l) p = l;
	
				var points = this.getPoints(),
				    d,
				    point,
				    dir;
				for (var i = 0; i < points.length - 1; i++) {
					d = points[i].distance(points[i + 1]);
					if (p <= d) {
						// we've located the line segment.
						point = points[i].clone();
						dir = point.getDirection(points[i + 1]);
						point.translate(dir.getScaled(p));
						break;
					}
					p -= d;
				}
	
				// return the last point.
				if (!point) point = points[points.length - 1];
				return [point.x + geometry.offsetX, point.y + geometry.offsetY];
			}
		}, {
			key: "toString",
			value: function toString() {
				return 'Edge:{' + (_lodash2.default.isNull(this.source) ? 'null' : this.source.id) + '--' + (_lodash2.default.isNull(this.target) ? 'null' : this.target.id) + '}';
			}
		}, {
			key: "destroy",
			value: function destroy() {
				_get(Object.getPrototypeOf(Edge.prototype), "destroy", this).call(this);
				this.setSource(null);
				this.setTarget(null);
			}
		}]);
	
		return Edge;
	}(_Element3.default);
	
	Edge.namespace = "Edges";
	
	exports.default = Edge;
	
	/*

	Edge.prototype.isVisible = function() {
		if (this.graph.getProperty("allowDanglingEdges")) {
			return (this.source ? this.source.isVisible() : true) && (this.target ? this.target.isVisible() : true) && this.getProperty("visible");
		} else
			return this.source && this.target && this.getProperty('visible') && this.source.isVisible() && this.target.isVisible();
	};

	*/

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Layout = function () {
		function Layout() {
			var config = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
			_classCallCheck(this, Layout);
	
			if (config.hasOwnProperty("orientation") && _lodash2.default.isString(config.orientation)) {
				if (config.orientation.toUpperCase() == "HORIZONTAL") config.orientation = Layout.HORIZONTAL;else delete config.orientation;
			}
			_Utils2.default.initConfig(this, config);
		}
	
		_createClass(Layout, [{
			key: "layout",
			value: function layout(root, bounds) {}
		}, {
			key: "reset",
			value: function reset() {}
		}, {
			key: "destroy",
			value: function destroy() {}
		}]);
	
		return Layout;
	}();
	
	Layout.VERTICAL = 0;
	Layout.HORIZONTAL = 1;
	
	Layout.DEFAULTS = {
		orientation: Layout.VERTICAL
	};
	
	exports.default = Layout;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Layout2 = __webpack_require__(19);
	
	var _Layout3 = _interopRequireDefault(_Layout2);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FlowLayout = function (_Layout) {
		_inherits(FlowLayout, _Layout);
	
		function FlowLayout() {
			_classCallCheck(this, FlowLayout);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(FlowLayout).apply(this, arguments));
		}
	
		_createClass(FlowLayout, [{
			key: "layout",
			value: function layout(root, bounds) {
				var items;
				if (!root) items = this.owner.childNodes;else if (_.isArray(root)) items = root;else items = root.getLinkedNodes('target');
				if (!items || items.length == 0) return;
	
				var x = 0,
				    y = 0,
				    h = 0,
				    node;
				var p1 = 0,
				    p2 = 0;
				for (var i = 0; i < items.length; i++) {
					node = items[i];
					if (x > 0 && x + this.hgap + node.getProperty("width") > bounds.width) {
						// create new line
						y += h + this.vgap;
						x = 0;h = 0;p1 = 0;p2++;
					}
					node._flPos = [p1, p2];
					node.moveTo([bounds.x + x, bounds.y + y]);
					x += this.hgap + node.getProperty("width");
					p1++;
					h = h < node.getProperty("height") ? node.getProperty("height") : h;
				}
				this.trigger(new Rectangle(bounds.x, bounds.y, bounds.width, y + h));
			}
		}]);
	
		return FlowLayout;
	}(_Layout3.default);
	
	FlowLayout.DEFAULTS = {
		hgap: 10,
		vgap: 10
	};
	
	exports.default = FlowLayout;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Layout = __webpack_require__(19);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _EventDispatcher = __webpack_require__(11);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GraphView = function () {
		function GraphView(id, container) {
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
			_classCallCheck(this, GraphView);
	
			this.id = id;
			this.box = _DomUtils2.default.createElement('div', { id: this.id, tabindex: 0 }, { overflow: "hidden", width: "100%", height: "100%", position: 'relative' });
			container.appendChild(this.box);
			if (config.layout) {
				var layoutClass = _Utils2.default.getConstructor(config.layout.jsClass, _Layout2.default);
				this.layout = new layoutClass(config.layout.config);
				delete config.layout;
			}
			this.clear = true;
			this._graph = null;
			this.dispatcher = null;
			_Utils2.default.initConfig(this, config);
	
			// A object for storing template strings.
			this.templateStore = {};
			_bean2.default.on(_Label2.default.editor, 'editor.update.*', function (key, value) {
				console.log(key + '=' + value);
			});
		}
	
		_createClass(GraphView, [{
			key: "graph",
			value: function graph(_graph) {
				if (_graph) {
					this._graph = _graph;
					return this;
				}
				return this._graph;
			}
		}, {
			key: "viewport",
			value: function viewport(scaled, _viewport) {
				if (_lodash2.default.isUndefined(scaled) || _lodash2.default.isNull(scaled)) scaled = false;
				if (!_viewport) {
					var vp = new _Rectangle2.default(0, 0, this.box.offsetWidth, this.box.offsetHeight);
					if (scaled) return _Utils2.default.scale(this, vp);
					return vp;
				}
				if (!scaled) _viewport = _Utils2.default.scale(this, _viewport);
				var w = this.box.offsetWidth;
				var scale = w / _viewport.width;
				this.transform(-_viewport.x * scale, -_viewport.y * scale, scale);
			}
		}, {
			key: "translate",
			value: function translate(t) {
				if (!this._graph) return [0, 0];
				if (!arguments.length) {
					var root = this._graph.getCurrentRoot();
					if (!root) return [0, 0];
					return [root.viewProp(this.id, 'x') || 0, root.viewProp(this.id, 'y') || 0];
				}
				this.transform(t[0], t[1]);
			}
		}, {
			key: "scale",
			value: function scale(k) {
				if (!this._graph) return 1.0;
				if (!arguments.length) {
					var root = this._graph.getCurrentRoot();
					if (!root) return 1.0;
	
					return root.viewProp(this.id, 'scale') || 1.0;
				}
	
				switch (k) {
					case "in":
						k = this.scale() * this.prop("zoomFactor");
						break;
					case "out":
						k = this.scale() / this.prop("zoomFactor");
						break;
					case "actual":
						k = 1.0;
						break;
					case "fit":
						var gridSize = this.prop("gridSize") * 2;
	
						var gBounds = this.getBounds();
						var vBounds = this.viewport();
	
						vBounds.width -= gridSize;
						vBounds.height -= gridSize;
	
						/* Do not zoom more than actual if graph already fits into the bounds */
						k = Math.min(vBounds.width / gBounds.width, vBounds.height / gBounds.height, 1.0);
	
						//TODO: Add centering code here or trigger an event for that
						break;
					default:
						if (_lodash2.default.isString(k)) k = parseFloat(k);
						break;
				}
				this.transform(null, null, k);
			}
		}, {
			key: "transform",
			value: function transform(x, y, scale) {
				if (!this._graph) return;
				var root = this._graph.getCurrentRoot();
				if (!root) return;
	
				/*if (!_.isNull(x) && !_.isNull(y))
	   	root.move(x, y);
	   if (scale) {
	   	scale = Math.max(this.getProperty("minZoom"), Math.min(this.getProperty("maxZoom"), scale));
	   	root.setProperty('scale', scale);
	   	// sync the scale between the zoom behavior and the graph
	   	var zoom = this.eventDispatcher.zoom;
	   	if (zoom.scale() != scale)
	   		zoom.scale(scale);
	   }
	   	this.trigger(Graph.EVENT_TYPES.REFRESH);*/
			}
		}, {
			key: "render",
			value: function render() {
				if (!this._graph) return false;
				// intialize views
				if (this.layout) this.layout.layout(this._graph.getCurrentRoot(), this.viewport());
	
				// create the event dispatcher if necessary.
				if (!this.dispatcher) {
					this.dispatcher = new _EventDispatcher2.default(this.box);
					this.dispatcher.register('mouseup.node.label', function (type, ns, target, pos, event) {
						var _this = this;
	
						var node = this._graph.nodes[target.getAttribute('id')];
						if (!this.dispatcher.dragging && !node._firstSelection) {
							_Label2.default._delayEdit = _lodash2.default.delay(function () {
								if (_Label2.default._delayEdit) {
									delete _Label2.default._delayEdit;
									_Label2.default.editor.start(node.id, _this.box, node.getLabelBox(_this.id), target, event.nsTarget);
								}
							}, 250);
						}
					}, this);
					this.dispatcher.register(['mousedown.*', 'zoom*'], function (type, ns, target, pos, event) {
						if (!_DomUtils2.default.eventFromInput(event)) {
							_Label2.default.editor.stop();
						}
					}, this);
				}
				this.dispatcher.start();
				return true;
			}
	
			/**
	   * Get the template for the specified key.
	   * @param key
	   * @param config if the template is a function, this config will be passed as the argument.
	   * @param preprocessor if the template contains preprossing elements, such as #{shape}, the preprocessor will be
	   * used to render them.
	   * @returns {*}
	   */
	
		}, {
			key: "getTemplate",
			value: function getTemplate(key, config, preprocessor) {
				var t = this.templateStore[key];
				if (t && _lodash2.default.isFunction(t)) {
					t = t(config);
				}
				// check if there are any preprocessing tags.
				if (preprocessor) {
					var parts = t.match(/(#{[^#]*})/g);
					var obj = {};
					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;
	
					try {
						for (var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var part = _step.value;
	
							part = part.substring(2, part.length - 1).trim();
							obj[part] = preprocessor[_lodash2.default.camelCase('render ' + part)](this);
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
	
					t = _lodash2.default.template(t, { interpolate: /#{([\s\S]+?)}/g })(obj);
				}
				return t;
			}
		}, {
			key: "reset",
			value: function reset() {}
		}, {
			key: "destroy",
			value: function destroy() {}
		}]);
	
		return GraphView;
	}();
	
	GraphView.DEFAULTS = {
		defaultClickMode: "pan",
		hideOutline: false,
		singleSelect: true,
		draggable: true,
		gridEnabled: false,
		guidesEnabled: true,
		gridSize: 30,
		maxZoom: 4.0,
		minZoom: 0.1,
		zoomFactor: 1.2,
		maskOpacity: 0.5
	};
	
	exports.default = GraphView;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _GraphView2 = __webpack_require__(21);
	
	var _GraphView3 = _interopRequireDefault(_GraphView2);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TEMPLATES = {
		$root: '<g id="${id}" class="${className}" ns="graph" transform="translate(${x},${y})scale(${scale})">#{children}</g>',
		$node: '<g id="${id}" class="${className}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
		$edge: '<g id="${id}" class="${className}" ns="${namespace}">#{shape}</g>',
		Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"></ellipse>',
		Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"></rect>',
		Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"></polygon>',
		Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"></polygon>',
		Hexagon: function Hexagon(config) {
			var vertical = config.direction == 'north' || config.direction == 'south';
			if (vertical) return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"></polygon>';else return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"></polygon>';
		},
		Path: function Path(config) {
			var buf = new _StringBuffer2.default();
			buf.append('<path class="gauge" d="<%=gfw.SVGRenderer.getPathData(data.getPoints())%>"></path>');
			buf.append('<path d="<%=gfw.SVGRenderer.getPathData(data.getPoints())%>"');
			if (config.startArrow != 'none' || config.endArrow != 'none') {
				buf.append(' style="');
				if (config.startArrow != 'none') buf.append('marker-start: url(#<%=data.type.name%>_StartArrow);');
				if (config.endArrow != 'none') buf.append('marker-end: url(#<%=data.type.name%>_EndArrow);');
				buf.append('"');
			}
			buf.append('></path>');
			return buf.toString();
		},
		Image: function Image(config) {
			return '<image x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + config.image + '"></image>';
		}
	};
	
	var SVGView = function (_GraphView) {
		_inherits(SVGView, _GraphView);
	
		function SVGView(id, container, config) {
			_classCallCheck(this, SVGView);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SVGView).call(this, id, container, config));
	
			_lodash2.default.assign(_this.templateStore, TEMPLATES);
			return _this;
		}
	
		_createClass(SVGView, [{
			key: "render",
			value: function render() {
				var result = _get(Object.getPrototypeOf(SVGView.prototype), "render", this).call(this);
				if (result) {
					var root = this._graph.getCurrentRoot();
					var buf = new _StringBuffer2.default('<svg width="100%" height="100%">');
					buf.append(root.render(this));
					buf.append('</svg>');
					this.box.innerHTML = buf.toString();
				}
			}
		}], [{
			key: "appendContent",
			value: function appendContent(el, content) {
				var buf = new _StringBuffer2.default();
				buf.append('<svg>').append(content).append('</svg');
				var temp = _DomUtils2.default.createElement('div', null, null, buf.toString()).firstElementChild;
	
				while (temp.firstChild) {
					el.appendChild(temp.firstChild);
				}return el;
			}
		}, {
			key: "setContent",
			value: function setContent(el, content) {
				if (_DomUtils2.default.isIE) {
					// empty el first.
					var child = void 0;
					while (child = el.lastChild) {
						el.removeChild(child);
					}SVGView.appendContent(el, content);
				} else el.innerHTML = content;
				return el;
			}
		}]);
	
		return SVGView;
	}(_GraphView3.default);
	
	exports.default = SVGView;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YmU4YzQ4YzkwNDRhZWJiNGZkYyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvR3JhcGhWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakJBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdkLHdCQUhjO0FBSWQsOEJBSmM7QUFLZCxzQ0FMYztBQU1kLHdCQU5jO0FBT2Qsc0JBUGM7QUFRZCx3QkFSYztBQVNkLGdDQVRjO0FBVWQsNEJBVmM7QUFXZCw0Q0FYYztBQVlkLHdCQVpjO0FBYWQsd0JBYmM7QUFjZCw0QkFkYztBQWVkLHNCQWZjO0FBZ0JkLHNCQWhCYztBQWlCZCwwQkFqQmM7QUFrQmQsa0NBbEJjO0FBbUJkLGdDQW5CYztBQW9CZCw0QkFwQmM7Ozs7Ozs7QUN4QmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7O0FBRXpCO0FBQ0EseUNBQXdDO0FBQ3hDLHNDQUFxQztBQUNyQyxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxRQUFPLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQTZCO0FBQzdCO0FBQ0EsOEJBQTZCO0FBQzdCLHFEQUFvRCxPQUFPO0FBQzNELHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsS0FBSztBQUMvQyw2Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxn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Q0FQRDtBQVFBLFdBQU8sRUFBUCxDQVQ4Qjs7OztTQTNCMUI7OzttQkF3Q1MsUSIsImZpbGUiOiJxZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInFncmFwaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicWdyYXBoXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgN2JlOGM0OGM5MDQ0YWViYjRmZGNcbiAqKi8iLCJpbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZ3JhcGgvR3JhcGhcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2dyYXBoL0VsZW1lbnRcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL2dyYXBoL0VkZ2VcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi92aWV3L0xhYmVsXCI7XG5pbXBvcnQgR3JhcGhWaWV3IGZyb20gXCIuL3ZpZXcvR3JhcGhWaWV3XCI7XG5pbXBvcnQgU1ZHVmlldyBmcm9tIFwiLi92aWV3L1NWR1ZpZXdcIjtcblxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFdmVudHMsXG5cdENhY2hlLFxuXHRVdGlscyxcblx0RG9tVXRpbHMsXG5cdFN0cmluZ0J1ZmZlcixcblx0UG9pbnQsXG5cdExpbmUsXG5cdFNoYXBlLFxuXHRSZWN0YW5nbGUsXG5cdEVsbGlwc2UsXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0TGFiZWwsXG5cdEdyYXBoLFxuXHRFbGVtZW50LFxuXHROb2RlLFxuXHRFZGdlLFxuXHRMYXlvdXQsXG5cdEZsb3dMYXlvdXQsXG5cdEdyYXBoVmlldyxcblx0U1ZHVmlld1xufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlYW4vYmVhbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG4vLyB1dGlsIHZhcmlhYmxlc1xubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUsIHR5cGUpIHtcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSB7fTtcblx0XHRpZiAoIW5hbWUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV07XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdW25hbWVdO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdW25hbWVdID0gdHlwZTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtib3VuZHMud2lkdGggKiBnZW9tZXRyeS54ICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCxcblx0XHRcdGJvdW5kcy5oZWlnaHQgKiBnZW9tZXRyeS55ICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCpzY2FsZSt0WzBdLCBvLnkqc2NhbGUrdFsxXSwgby53aWR0aCpzY2FsZSwgby5oZWlnaHQqc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gW29bMF0qc2NhbGUrdFswXSwgb1sxXSpzY2FsZSt0WzFdXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHNjYWxlZCwgaS5lLiwgcmVsYXRpdmUgcG9zaXRpb24gY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHRzY2FsZTogZnVuY3Rpb24odmlldywgbykge1xuXHRcdHZhciBzY2FsZSA9IHZpZXcuc2NhbGUoKTtcblx0XHR2YXIgdCA9IHZpZXcudHJhbnNsYXRlKCk7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdLXRbMF0pL3NjYWxlLCAob1sxXS10WzFdKS9zY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldE9ialByb3BlcnR5OiBmdW5jdGlvbihvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLmdldFByb3BlcnR5ICYmIF8uaXNGdW5jdGlvbihvYmouZ2V0UHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIG9iai5nZXRQcm9wZXJ0eShwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzaW1pbGFyaXR5IG9mIHRoaXMgUmF5IHdpdGggYW5vdGhlci5cblx0ICogU2ltaWxhcml0eSBpcyBkZWZpbmVkIGFzIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgZG90UHJvZHVjdCgpXG5cdCAqIEBwYXJhbSBwMlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0c2ltaWxhcml0eShwMikge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLmRvdFByb2R1Y3QocDIpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiBcIlBvaW50Ont4PVwiICsgdGhpcy54ICsgXCI7eT1cIiArIHRoaXMueSArIFwifVwiO1xuXHR9XG59XG5cblBvaW50LlcgPSBuZXcgUG9pbnQoLTEsIDApO1xuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xuUG9pbnQuRSA9IG5ldyBQb2ludCgxLCAwKTtcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XG5Qb2ludC5TRSA9IG5ldyBQb2ludCgxLCAxKTtcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsKSB7XG5cdFx0cmV0dXJuIFJlY3RhbmdsZS5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0dmFyIHggPSByZWN0Lng7XG5cdFx0dmFyIHkgPSByZWN0Lnk7XG5cdFx0dmFyIGR4ID0gcHQueCAtIHg7XG5cdFx0dmFyIGR5ID0gcHQueSAtIHk7XG5cdFx0dmFyIGFscGhhID0gTWF0aC5hdGFuMih5LCB4KTtcblx0XHR2YXIgcCA9IG5ldyBQb2ludCgwLCAwKTtcblx0XHR2YXIgcGkgPSBNYXRoLlBJO1xuXHRcdHZhciBwaTIgPSBNYXRoLlBJLzI7XG5cdFx0dmFyIGJldGEgPSBwaTIgLSBhbHBoYTtcblx0XHR2YXIgdCA9IE1hdGguYXRhbjIocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xuXG5cdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xuXHRcdFx0Ly8gTGVmdCBlZGdlXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XG5cdFx0XHRwLnkgPSB5IC0gcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XG5cdFx0XHQvLyBUb3AgRWRnZVxuXHRcdFx0cC55ID0gcmVjdC50b3A7XG5cdFx0XHRwLnggPSB4IC0gcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcblx0XHRcdC8vIFJpZ2h0IEVkZ2Vcblx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEJvdHRvbSBFZGdlXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcblx0XHRcdHAueCA9IHggKyByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcblx0XHR9XG5cblx0XHRpZiAob3J0aG9nb25hbCkge1xuXHRcdFx0aWYgKHB0LnggPj0gcmVjdC5sZWZ0ICYmXG5cdFx0XHRcdHB0LnggPD0gcmVjdC5yaWdodCkge1xuXHRcdFx0XHRwLnggPSBwdC54O1xuXHRcdFx0fSBlbHNlIGlmIChwdC55ID49IHJlY3QudG9wICYmXG5cdFx0XHRcdHB0LnkgPD0gcmVjdC5ib3R0b20pIHtcblx0XHRcdFx0cC55ID0gcHQueTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHB0LnggPCByZWN0LmxlZnQpIHtcblx0XHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xuXHRcdFx0fSBlbHNlIGlmIChwdC54ID4gcmVjdC5yaWdodCkge1xuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocHQueSA8IHJlY3QudG9wKSB7XG5cdFx0XHRcdHAueSA9IHJlY3QudG9wO1xuXHRcdFx0fSBlbHNlIGlmIChwdC55ID4gcmVjdC5ib3R0b20pIHtcblx0XHRcdFx0cC55ID0gcmVjdC5ib3R0b207XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHA7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0YW5nbGUgdGhhdCBjb250YWlucyBwMSBhbmQgcDJcblx0ICovXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xuXHRcdGlmICghcHRzIHx8IHB0cy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxuXHRcdFx0bWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XG5cdFx0dmFyIG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xuXHRcdHZhciBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHAgPSBwdHNbaV07XG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XG5cdFx0XHRcdG1pblswXSA9IHAueDtcblx0XHRcdH1cblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcblx0XHRcdFx0bWluWzFdID0gcC55O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xuXHRcdFx0XHRtYXhbMF0gPSBwLng7XG5cdFx0XHR9XG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XG5cdFx0XHRcdG1heFsxXSA9IHAueTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWluWzBdID0gbWluWzBdIC0gbWFyZ2luWzBdO1xuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XG5cdFx0bWF4WzFdID0gbWF4WzFdICsgbWFyZ2luWzNdO1xuXHRcdHZhciB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcblx0XHR2YXIgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWluWzBdICsgdy8yLCBtaW5bMV0gKyBoLzIsIHcsIGgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cblx0ICogQHBhcmFtIHJlY3RzXG5cdCAqL1xuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcblx0XHR2YXIgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xuXHRcdF8uZWFjaChyZWN0cywgZnVuY3Rpb24gKHJlY3QpIHtcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcblx0XHRcdG1pbnggPSBNYXRoLm1pbihtaW54LCByZWN0LngpO1xuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcblx0XHRcdG1heHkgPSBNYXRoLm1heChtYXh5LCByZWN0LmJvdHRvbSgpKTtcblx0XHR9KTtcblx0XHRtaW54ID0gbWlueCB8fCAwO1xuXHRcdG1pbnkgPSBtaW55IHx8IDA7XG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXG5cdCAqL1xuXHRjb250YWlucyhlbCkge1xuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcblx0XHRsZXQgaCA9IGVsLmhlaWdodCB8fCAwO1xuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xuXHRcdGxldCB0b3AgPSBlbC55IC0gaC8yO1xuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxuXHRcdFx0KHRvcCA+PSB0aGlzLnRvcCkgJiYgKGJvdHRvbSA8PSB0aGlzLmJvdHRvbSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcblxuXHRcdGlmIChwdC54IDwgdGhpcy5sZWZ0KSB7XG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcblx0XHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xuXHRcdH1cblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9wIC0gcHQueTtcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XG5cdFx0fVxuXHRcdGlmIChwdC55IDwgdGhpcy50b3ApXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXG5cdFx0XHRyZXR1cm4gcHQueCAtIHRoaXMucmlnaHQ7XG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxuXHQgKiB3aXRoIHRoZSByZWN0YW5nbGUgb3Igbm90LiBXZSBhc3N1bWUgb25seSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGxpbmUgc2VnbWVudHMuXG5cdCAqXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXG5cdCAqL1xuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHR2YXIgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xuXHRcdHZhciBjb250YWluczEgPSB0aGlzLmNvbnRhaW5zKHB0MSk7XG5cdFx0dmFyIGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XG5cdFx0aWYgKCFjb250YWluczEgJiYgIWNvbnRhaW5zMikge1xuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxuXHRcdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcblx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcblx0XHRcdFx0XHRyZXR1cm4gMztcblx0XHRcdH1cblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHR2YXIgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XG5cdFx0aWYgKGhvcml6b250YWwpIHtcblx0XHRcdGlmIChvdXRQdC54ID4gdGhpcy5yaWdodClcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRyZXR1cm4gMztcblx0XHR9XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCA9IDAsIHkgPSAwLCB3aWR0aCA9IDAsIGhlaWdodCA9IDApIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeS1jb29yZCBvZiB0aGUgdG9wIHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IGJvdHRvbSgpIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB4LWNvb3JkIG9mIGxlZnQgc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoLzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSByaWdodCBzaWRlIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHsgcmV0dXJuIG51bGw7IH1cblxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xuXHRcdHJldHVybiByZWdpc3RyeVtuYW1lXTtcblx0fVxuXG5cdHN0YXRpYyBhZGRTaGFwZShuYW1lLCBjKSB7XG5cdFx0cmVnaXN0cnlbbmFtZV0gPSBjO1xuXHR9XG5cblx0c3RhdGljIHJlbW92ZVNoYXBlKG5hbWUpIHtcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogZG9tIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNJRTogKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcblxuXHRcdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXG5cdFx0aWYgKElkeCA+IDApXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xuXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSlcblx0XHRcdHJldHVybiAxMTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCksXG5cblx0aXNJRTI6IChmdW5jdGlvbigpIHtcblx0XHRsZXQgaXNJRSA9IGZhbHNlLCB2ZXJzaW9uID0gbnVsbCwgd2luZG93ID0gd2luZG93IHx8IHt9LCBuYXZpZ2F0b3IgPSBuYXZpZ2F0b3IgfHwge3VzZXJBZ2VudDogXCJcIn07XG5cdFx0aWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKHdpbmRvdywgXCJBY3RpdmVYT2JqZWN0XCIpICYmICF3aW5kb3cuQWN0aXZlWE9iamVjdCkge1xuXHRcdFx0aXNJRSA9IHRydWU7XG5cdFx0XHR2ZXJzaW9uID0gMTE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBteU5hdiA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcblx0XHRcdGlzSUUgPSBteU5hdi5pbmRleE9mKCdtc2llJykgIT0gLTE7XG5cdFx0XHRpZiAoaXNJRSlcblx0XHRcdFx0dmVyc2lvbiA9IHBhcnNlSW50KG15TmF2LnNwbGl0KCdtc2llJylbMV0pO1xuXHRcdH1cblxuXHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBpc0lFID8gdmVyc2lvbiA6IGZhbHNlO1xuXHRcdH07XG5cdH0pKCksXG5cblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXG5cdFx0cmV0dXJuIHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cdH0pKCksXG5cblx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgYXR0cmlicywgc3R5bGVzLCBodG1sKSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcblx0XHRpZiAoaHRtbClcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XG5cdFx0bGV0IHRlbXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHN0cik7XG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2Rlcztcblx0fSxcblxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xuXHRcdGlmIChhdHRyaWJzKSB7XG5cdFx0XHRfLmZvckVhY2goYXR0cmlicywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHRcdCB9KTtcblx0XHR9XG5cdFx0aWYgKHN0eWxlcykge1xuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0XHRlbC5zdHlsZVtrZXldID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT0gMSAmJiAoICFtZXRob2QgfHwgbWV0aG9kKG5vZGUpICk7XG5cdH0sXG5cblx0Z2V0QW5jZXN0b3JCeTogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBjb250ZXh0LlxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcblx0fSxcblxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcblx0XHRsZXQgaCA9IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xuXHR9LFxuXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG5cdFx0aWYgKHgpIGVsLnN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XG5cdH0sXG5cblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0dmFyIGggPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRIZWlnaHQsIDEwKTtcblx0XHRyZXR1cm4gW3csIGhdO1xuXHR9LFxuXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xuXHRcdGlmIChoKSBlbC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0fSxcblxuXHRwcmVsb2FkSW1hZ2VzOiBmdW5jdGlvbihhcnJheSkge1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XG5cblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodGhpcyk7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xuXHRcdFx0XHRcdC8vIHJlbW92ZSBpbWFnZSBmcm9tIHRoZSBhcnJheSBvbmNlIGl0J3MgbG9hZGVkXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0bGlzdC5wdXNoKGltZyk7XG5cdFx0XHRpbWcuc3JjID0gYXJyYXlbaV07XG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogR2V0J3MgdGhlIGltYWdlJ3MgaW5mb3JtYXRpb24gZ2l2ZW4gdGhlIHVybC4gTXVzdCBiZSBwcmVsb2FkZWQgYnkgY2FsbGluZyB0aGUgcHJlbG9hZEltYWdlIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqL1xuXHRnZXRJbWFnZUluZm86IGZ1bmN0aW9uKHNyYykge1xuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcblx0ICovXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xuXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XG5cblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cblx0ICpcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnM6XG5cdCAqXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqL1xuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XG5cblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcblxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XG5cblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0pIHtcblx0XHR0aGlzLnJvb3QgPSByb290O1xuXHRcdHRoaXMucm9vdE5TID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ25zJykgfHwgJ3Jvb3QnO1xuXHRcdHRoaXMuem9vbVNjYWxlID0gem9vbVNjYWxlO1xuXHRcdHRoaXMuc2NhbGUgPSAxLjA7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSB7fTtcblx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5oYW5kbGVyID0gXy5iaW5kKHRoaXMuaGFuZGxlRXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50c1xuXHRcdHRoaXMuZW50ZXJTdGFjayA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0IGxpc3RlbmluZyBmb3IgZXZlbnRzLlxuXHQgKi9cblx0c3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdEV2ZW50cy5vbih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0YXJ0S2V5cygpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0b3AoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub2ZmKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xuXHRcdHRoaXMuc3RvcEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdHN0YXJ0S2V5cygpIHtcblx0XHRFdmVudHMub24oZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcblx0fVxuXG5cdHN0b3BLZXlzKCkge1xuXHRcdEV2ZW50cy5vZmYoZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcblx0fVxuXG5cdGdldEV2ZW50SW5mbyhldmVudCkge1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgbnMsIHN0YWNrID0gW10sIGlzUm9vdCA9IGZhbHNlO1xuXHRcdHdoaWxlICghaXNSb290ICYmIHRhcmdldCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQpIHtcblx0XHRcdG5zID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbnMnKTtcblx0XHRcdGlmIChucykge1xuXHRcdFx0XHRpc1Jvb3QgPSBfLnN0YXJ0c1dpdGgobnMsIFwicm9vdC5cIik7XG5cdFx0XHRcdGlmIChpc1Jvb3QpIHtcblx0XHRcdFx0XHRucyA9IG5zLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZXZlbnQubnNUYXJnZXQpIGV2ZW50Lm5zVGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHRzdGFjay5zcGxpY2UoMCwgMCwgdGFyZ2V0KTtcblx0XHRcdFx0YnVmLnByZXBlbmQobnMpO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXHRcdGlmICghaXNSb290KVxuXHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGV2ZW50Lm5zVGFyZ2V0O1xuXG5cdFx0Ly8gdGFyZ2V0IHN0YWNrIGlzIGEgc3RhY2sgb2YgYWxsIHRoZSBucyB0YXJnZXRzIHVwIHRvIHRoZSBvbmUgd2l0aCB0aGUgZGF0YSBiaW5kaW5nLlxuXHRcdGV2ZW50LnRhcmdldFN0YWNrID0gc3RhY2s7XG5cdFx0bnMgPSBidWYudG9TdHJpbmcoJy4nKTtcblx0XHRpZiAobnMgPT0gJycpIG5zID0gdGhpcy5yb290TlM7XG5cdFx0cmV0dXJuIHtkYXRhOiBldmVudC5yb290VGFyZ2V0LCBuczogbnN9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtYWluIGV2ZW50IGhhbmRsZXIgbWV0aG9kLCBpdCBwcm9jZXNzZXMgZXZlbnQgYW5kIGdlbmVyYXRlIHJlbGV2YW50IGV2ZW50cyB0byBkaXNwYXRjaC5cblx0ICovXG5cdGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cdFx0bGV0IHR5cGUgPSBldmVudC50eXBlO1xuXG5cdFx0Ly8gRG8gbm90IGRpc3BhdGNoIG90aGVyIGV2ZW50cyBpZiB3ZSBhcmUgZHJhZ2dpbmcuXG5cdFx0aWYgKHRoaXMuZHJhZ2dpbmcgfHwgRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSByZXR1cm47XG5cblx0XHRsZXQgZGF0YSwgbnMsIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpLCBpbmZvLCBpc0tleUV2ZW50ID0gKHR5cGUgPT0gJ2tleWRvd24nIHx8IHR5cGUgPT0na2V5dXAnKTtcblx0XHRpZiAoaXNLZXlFdmVudCkge1xuXHRcdFx0ZGF0YSA9IHRoaXMucm9vdDtcblx0XHRcdG5zID0gS2V5VXRpbHMuZ2V0S2V5RXZlbnQoZXZlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0aWYgKCFpbmZvKSByZXR1cm47XG5cdFx0XHRkYXRhID0gaW5mby5kYXRhO1xuXHRcdFx0bnMgPSBpbmZvLm5zO1xuXHRcdH1cblxuXHRcdC8vVXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImhhbmRsZUV2ZW50IC0gXCIgKyB0eXBlICsgJztucz0nICsgbnMpO1xuXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNld2hlZWwnKSB7XG5cdFx0XHR0aGlzLnNjYWxlICo9IE1hdGgucG93KDIsIGV2ZW50LndoZWVsRGVsdGEgKiAwLjAwMik7XG5cdFx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XG5cdFx0XHRldmVudC5zY2FsZSA9IHRoaXMuc2NhbGU7XG5cdFx0XHR0eXBlID0gJ3pvb20nO1xuXHRcdH1cblxuXHRcdC8vIFNlZSBpZiB3ZSBzaG91bGQgY3JlYXRlIGRyYWcgZXZlbnRzXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uID09IDAgLypvbmx5IGRyYWcgb24gbGVmdCBjbGljayovKSB7XG5cdFx0XHQvLyBDcmVhdGUgZHJhZyBvYmplY3QuXG5cdFx0XHRjb25zdCBkcmFnT2JqZWN0ID0ge2RhdGE6IGRhdGEsIHBvczogbnMgPT0gJ3Jvb3QnID8gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpIDogcG9zfTtcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbW91c2UgbW92ZS5cblx0XHRcdGxldCBkcmFnUG9zO1xuXG5cdFx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIG1vdXNlIGhhcyBtb3ZlZC4gSUUgYWx3YXlzIGZpcmUgbW91c2Vtb3ZlIGFmdGVyIG1vdXNlZG93biBldmVuIGlmIHRoZSBtb3VzZSBoYXNuJ3QgbW92ZWQgeWV0LlxuXHRcdFx0XHRcdGlmIChkcmFnT2JqZWN0LnBvc1swXSA9PSBjdXJyZW50UG9zWzBdICYmIGRyYWdPYmplY3QucG9zWzFdID09IGN1cnJlbnRQb3NbMV0pIHJldHVybjtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGRyYWdnaW5nXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGRyYWdPYmplY3QuZGF0YTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ3N0YXJ0JywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ09iamVjdC5wb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IGN1cnJlbnRQb3M7XG5cdFx0XHRcdHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWcnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXG5cdFx0XHRcdGxldCBpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHRpZiAodGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ2VuZCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZXVwJywgbnMsIGluZm8uZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdFx0fTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc0tleUV2ZW50KVxuXHRcdFx0dGhpcy5zaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXG5cdFx0Ly8gZGlzYWJsZSB0aGUgZGVmYXVsdCBjb250ZXh0IG1lbnVcblx0XHRpZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cblx0ICovXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdGxldCBsYXN0LCBzdGFjaztcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xuXHRcdFx0ayA9IGsgfHwgMDtcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdH07XG5cblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XG5cdFx0XHRcdGxldCBpdGVtO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xuXHR9XG5cblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0Jylcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwga2V5KSkge1xuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAoIWxpc3RlbmVyLmNvbnRleHQpXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KGxpc3RlbmVyLmNvbnRleHQsIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxuXHRcdGlmIChldmVudC5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdGlmKCEgXy5pc05hTihwb3NbMF0pICYmICEgXy5pc05hTihwb3NbMV0pKVxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGtleSBldmVudCBoYW5kbGVyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XG5cdCAqL1xuXHRyZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gfHwgKHRoaXMubGlzdGVuZXJzW2tleV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNba2V5XSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XG5cdFx0aWYgKF8uaXNBcnJheSh0eXBlKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCB6SW5kZXg6IHpJbmRleH07XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBtb3VzZShjb250YWluZXIsIGUpIHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xuXHRcdGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcblx0XHRcdHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcblx0XHRcdHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKGNvbnRhaW5lci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcblx0XHR9XG5cdFx0dmFyIHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiovIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8gICAgICAgICAgIFRoZSBLZXkgVXRpbGl0eSBDTGFzcyBmb3IgdGhlIEV2ZW50IERpc3BhdGNoZXIgICAgICAgICAgXHQgICAgIC8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuLyoqXG4gKiBLRVkgY29uc3RhbnRcbiAqL1xuY29uc3QgS0VZID0ge1xuXHRBTFQgICAgICAgICAgOiAxOCxcblx0QkFDS19TUEFDRSAgIDogOCxcblx0Q0FQU19MT0NLICAgIDogMjAsXG5cdENPTlRST0wgICAgICA6IDE3LFxuXHRERUxFVEUgICAgICAgOiA0Nixcblx0RE9XTiAgICAgICAgIDogNDAsXG5cdEVORCAgICAgICAgICA6IDM1LFxuXHRFTlRFUiAgICAgICAgOiAxMyxcblx0RVNDQVBFICAgICAgIDogMjIwLFxuXHRIT01FICAgICAgICAgOiAzNixcblx0TEVGVCAgICAgICAgIDogMzcsXG5cdE1FVEEgICAgICAgICA6IDIyNCxcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxuXHRQQUdFX0RPV04gICAgOiAzNCxcblx0UEFHRV9VUCAgICAgIDogMzMsXG5cdFBBVVNFICAgICAgICA6IDE5LFxuXHRQUklOVFNDUkVFTiAgOiA0NCxcblx0UklHSFQgICAgICAgIDogMzksXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcblx0U0hJRlQgICAgICAgIDogMTYsXG5cdFNQQUNFICAgICAgICA6IDMyLFxuXHRUQUIgICAgICAgICAgOiA5LFxuXHRVUCAgICAgICAgICAgOiAzOFxuXHQvL0FERCAgICAgICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDYxICA6IDE4Nyxcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXG5cdGlmIChrZXkgPj0gMTYgJiYga2V5IDw9IDE4KSB7XG5cdFx0a2V5ID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcblx0aWYgKHNoaWZ0KSBidWYuYXBwZW5kKFwiU0hJRlRcIik7XG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xuXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvS2V5VXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL0VkZ2VcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY2xhc3MgR3JhcGgge1xuXHRjb25zdHJ1Y3RvcihpZCA9IF8udW5pcXVlSWQoXCJHXCIpLCBjb25maWcgPSB7fSwgbW9kZWwpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHR0aGlzLm5vZGVzID0ge307XG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xuXG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5ub2RlVHlwZXMsIFwiTm9kZXNcIiwgbm9kZURlZmF1bHRzKTtcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcblxuXHRcdGRlbGV0ZSBjb25maWcubm9kZVR5cGVzO1xuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xuXHRcdGlmIChtb2RlbClcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XG5cdFx0dmFyIGpzQ2xhc3MgPSBudWxsO1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cblx0XHRcdHZhciB0eXBlID0gVXRpbHMudHlwZShkZWZhdWx0Q2xhc3MubmFtZXNwYWNlLCBjb25maWcudHlwZSk7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcblx0XHR9XG5cblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgTm9kZVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSwgcG9zKSB7XG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcblx0XHRsZXQgbm9kZSA9IG5ldyBOb2RlQ2xhc3ModGhpcywgY29uZmlnKTtcblxuXHRcdGlmIChwYXJlbnQpXG5cdFx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIG5vZGUsIHBvcyk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xuXHRcdFx0dGhpcy5yb290LnByb3AoJ3JvbGUnLCAncm9vdCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZXNbbm9kZS5pZF0gPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSwgZnJvbSwgdG8pIHtcblx0XHRsZXQgRWRnZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIEVkZ2UpO1xuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcblxuXHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgZWRnZSk7XG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XG5cdFx0cmV0dXJuIGVkZ2U7XG5cdH1cblxuXHRzdGF0aWMgYWRkQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuXHRcdGlmICghcGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0cGFyZW50LmNoaWxkcmVuID0gW107XG5cblx0XHRpZiAoY2hpbGQucGFyZW50ICE9IHBhcmVudCkge1xuXHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXG5cdFx0XHRpZiAoY2hpbGQucGFyZW50ICYmIGNoaWxkLnBhcmVudC5jaGlsZHJlbilcblx0XHRcdFx0Y2hpbGQucGFyZW50LmNoaWxkcmVuID0gXy53aXRob3V0KGNoaWxkLnBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuXHRcdH1cblx0XHRjaGlsZC5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRsb2FkTW9kZWwobW9kZWwsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldEN1cnJlbnRSb290KCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5HcmFwaC5ERUZBVUxUUyA9IHtcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxuXHRtdWx0aUNvbm5lY3Q6IGZhbHNlLFxuXHRyZWFkT25seTogZmFsc2UsXG5cdHZpZXdPbmx5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9HcmFwaC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBFbGVtZW50IHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ04nKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuaW5FZGdlcyA9IFtdO1xuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRpc0FuY2VzdG9yKG4pIHtcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xuXHRcdHdoaWxlIChub2RlKSB7XG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlIH07XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2Vcblx0YWRkSW5FZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkIHx8IHBvcyA+IGVkZ2UubGVuZ3RoIC0gMSlcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4odmlldykge1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Xy5mb3JFYWNoKHRoaXMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KSwgcHQ7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cHQgPSBzaGFwZS5nZXRQZXJpbWV0ZXIoZW5kUHQpO1xuXHRcdFx0cmV0dXJuIHB0O1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcChcImxhYmVsXCIpID8gdGhpcy5wcm9wKFwibGFiZWxcIikgOiBcInVuZGVmaW5lZFwiO1xuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxuXHRcdFx0bGFiZWwgPSBsYWJlbFswXTtcblx0XHRyZXR1cm4gJ05vZGU6e2lkOicgKyB0aGlzLmlkICsgJztsYWJlbDonICsgbGFiZWwgKyAnO3R5cGU6JyArIHRoaXMucHJvcHMuY29uc3RydWN0b3IudHlwZU5hbWUgKyAnfSc7XG5cdH1cbn1cbk5vZGUubmFtZXNwYWNlID0gXCJOb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuXG4vKlxuXG4vKipcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXG4gKlxuVmVydGV4LnByb3RvdHlwZS5nZXREcmlsbERvd25QYXJlbnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbW9kZSA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RlXCIpIHx8IDM7XG5cdHJldHVybiAhKG1vZGUgJiBHcmFwaC5BTExPV19JTlRFUkFDVElPTlMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5nZXRDcnVtYlRleHQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcblx0XHRyZXR1cm4gJzxzcGFuPjxpbWcgc3JjPVwid2Vid2IvcHpyZWFkb25seS5wbmdcIiAvPjwvc3Bhbj48c3Bhbj4mbmJzcDsnICsgdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpICsgJzwvc3Bhbj4nO1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwiY29udGFpbmVyXCIpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL05vZGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XG5cbi8qKlxuICogVGhlIEVsZW1lbnQgaXMgdGhlIGNvbW1vbiBwYXJlbnQgZm9yIE5vZGUgYW5kIEVkZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge2lkOiBfLnVuaXF1ZUlkKCl9KSB7XG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdHRoaXMuaWQgPSBjb25maWcuaWQ7XG5cdFx0ZGVsZXRlIGNvbmZpZy5pZDtcblxuXHRcdC8vIEluaXRpYWxpemUgZGVjb3JhdG9yc1xuXHRcdGlmIChjb25maWcuZGVjb3JhdG9ycykge1xuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcblx0XHRcdGRlbGV0ZSBjb25maWcuZGVjb3JhdG9ycztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIFZpZXcgUHJvcGVydGllc1xuXHRcdGlmIChjb25maWcudmlld3MpIHtcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy52aWV3cztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIHR5cGVcblx0XHR2YXIgdHlwZSA9IGNvbmZpZy50eXBlIHx8IFwiRGVmYXVsdFwiO1xuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIG5vdCBmb3VuZCBcIiArIGNvbmZpZy50eXBlKTtcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XG5cdFx0dGhpcy5wcm9wcyA9IG5ldyB0eXBlKGNvbmZpZyk7XG5cdH1cblxuXHRwcm9wKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKVxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldC9TZXQgcHJvcGVydHkgc3RvcmVkIGJ5IHZpZXdzLlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHZpZXdQcm9wKGtleSA9ICdkZWZhdWx0JywgbmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcblx0XHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jykge1xuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCF0aGlzLnZpZXdQcm9wc1trZXldKVxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XG5cdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRGVjb3JhdG9ycyhkZWNvcmF0b3JzKSB7fVxuXG5cdC8qKlxuXHQgKiBHZXQgcHJvcGVydGllcyBuZWVkZWQgZm9yIHJlbmRlcmluZyB0aGlzIGVsZW1lbnRcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxuXHQgKi9cblx0Z2V0VmlldyhrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0cmV0dXJuIF8uYXNzaWduKHtcblx0XHRcdGlkOiB0aGlzLmlkLFxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRjbGFzc05hbWU6IHRoaXMuY29tcHV0ZWRDbGFzc05hbWUsXG5cdFx0XHRuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuXHRcdFx0c2NhbGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc2NhbGUnKSB8fCAxLjBcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIikgfHwgKHNoYXBlQ29uZmlnID8gc2hhcGVDb25maWcud2lkdGg6IDApO1xuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIikgfHwgKHNoYXBlQ29uZmlnID8gc2hhcGVDb25maWcuaGVpZ2h0OiAwKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdmlldy5pZCk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdFx0Ly9jcmVhdGUgdGhlIHRlbXBsYXRlXG5cdFx0XHRsZXQgcm9sZSA9IHRoaXMucHJvcCgncm9sZScpO1xuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xuXHRcdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcy5nZXRWaWV3KHZpZXcuaWQpKTtcblx0fVxuXG5cdHJlbmRlclNoYXBlKHZpZXcpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLnByb3AoJ3NoYXBlJyk7XG5cdFx0aWYgKHNoYXBlKSB7XG5cdFx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUoc2hhcGUubmFtZSwgc2hhcGUpKTtcblx0XHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzLmdldFZpZXcodmlldy5pZCkpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZW5kZXJMYWJlbCh2aWV3KSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5nZXRDdXJyZW50Um9vdCgpKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiBMYWJlbC5TVkdfVEVNUExBVEUoYm94KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRsZXQgYm94ID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94Jywga2V5KTtcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHQvLyBKdXN0IGdldCB0aGUgY29uZmlnIHdpbGwgaGF2ZSBhIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGJvb3N0IGZvciBJRTExIGFuZCBJRTEwLlxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XG5cdFx0cmV0dXJuIGJveDtcblx0fVxuXG5cdGdldCBjb21wdXRlZENsYXNzTmFtZSgpIHtcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcblx0XHRcdGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb21wdXRlZENsYXNzTmFtZSA9IGJ1Zi50b1N0cmluZygnICcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XG5cdH1cblxuXHRnZXQgbmFtZXNwYWNlKCkge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSkgcmV0dXJuICcnO1xuXHRcdHJldHVybiBcInJvb3QuXCIgKyB0aGlzLnByb3AoXCJyb2xlXCIpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5ncmFwaDtcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xuXHRcdGRlbGV0ZSB0aGlzLnByb3BzO1xuXHRcdGRlbGV0ZSB0aGlzLnZpZXdQcm9wcztcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cdH1cbn1cblxuLypcblxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInhcIiwgTWF0aC5yb3VuZCh4KSk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ5XCIsIE1hdGgucm91bmQoeSkpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCB3KTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBoKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJlZGl0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhblNlbGVjdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInNlbGVjdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJyZXNpemFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRUeXBlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHR5cGVTdHIpIHtcblx0cmV0dXJuIHRoaXMuZ3JhcGguZ2V0VHlwZSh0eXBlU3RyKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNyZWF0ZU1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZGlmaWVycykge1xuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XG5cdHZhciBtb2RpZmllclNldHRpbmdzID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGlmaWVyU2V0dGluZ3NcIik7XG5cdGlmIChtb2RpZmllclNldHRpbmdzKSB7XG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRjb25maWcudHlwZSA9IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKGNvbmZpZy5jbGFzc05hbWUpO1xuXHRcdFx0Y29uZmlnLnNldHRpbmcgPSBtb2RpZmllclNldHRpbmdzW2NvbmZpZy5jbGFzc05hbWVdO1xuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5hZGRNb2RpZmllcihjb25maWcuY2xhc3NOYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyBDaGVjayBmb3Igc2hvd0Fsd2F5cyBzZXR0aW5nc1xuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XG5cdFx0XHRpZiAoc2V0dGluZy5zaG93QWx3YXlzICYmICghdGhpcy5tb2RpZmllcnMgfHwgIXRoaXMubW9kaWZpZXJzW25hbWVdKSkge1xuXHRcdFx0XHR2YXIgY29uZmlnID0ge3R5cGU6IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKG5hbWUpLCBzZXR0aW5nOiBzZXR0aW5nfTtcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmFkZE1vZGlmaWVyKG5hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0fVxufTtcblxuQ2VsbC5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lLCBtb2RpZmllcikge1xuXHRpZiAoIXRoaXMubW9kaWZpZXJzKVxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XG5cblx0aWYgKCFtb2RpZmllci5oYXNPd25Qcm9wZXJ0eShcInNob3dIZWFkZXJcIikpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XG5cblx0Ly8gQGhhY2sgcHJlZmVyYWJseSBzZXQgaXQgaW4gY29uZmlndXJhdGlvbnMuXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IGZhbHNlO1xuXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKF8uaXNVbmRlZmluZWQodGhpcy5tb2RpZmllcnMpKVxuXHRcdHRoaXMuY3JlYXRlTW9kaWZpZXJzKCk7XG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgbW9kaWZpZXJzID0gdGhpcy5nZXRNb2RpZmllcnMoKTtcblx0aWYgKG1vZGlmaWVycylcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xuXHRyZXR1cm4gbnVsbDtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FbGVtZW50LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi83LzIwMTYuXG4gKi9cblxubGV0IGNhY2hlcyA9IHt9O1xuXG5sZXQgQ2FjaGUgPSB7XG5cdGdldDogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlLCBuYW1lc3BhY2UpIHtcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xuXHR9LFxuXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiBrZXkgaW4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRkZWxldGUgdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0Y2xlYXI6IGZ1bmN0aW9uKG5hbWVzYXBjZSkge1xuXHRcdGlmICghbmFtZXNwYWNlKVxuXHRcdFx0Y2FjaGVzID0ge307XG5cdFx0ZWxzZSBpZiAoY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHR9LFxuXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcblx0XHRpZiAoIWNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9DYWNoZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XG5jb25zdCBTVkdfVEVNUExBVEVfU1RSID0gYFxuPCUgdmFyIGJveCA9IF8uaGFzKGRhdGEsIFwiZHhcIikgPyBkYXRhIDogKGRhdGEuZ2V0TGFiZWxCb3ggPyBkYXRhLmdldExhYmVsQm94KCkgOiBudWxsKTsgXG4gICBpZiAoYm94KSB7JT5cblx0PGcgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5jbGFzcykgeyU+Y2xhc3M9XCI8JT1ib3guY29uZmlnLmNsYXNzJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLm5zKSB7JT5ucz1cIjwlPWJveC5jb25maWcubnMlPlwiPCV9JT5cXFxuXHRcdHRleHQtYW5jaG9yPVwiPCU9Ym94LmFuY2hvciU+XCJcXFxuXHRcdHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg8JT1ib3guYm91bmRzLnglPiw8JT1ib3guYm91bmRzLnklPilcIj5cblx0PCUgaWYgKGJveC5iYWNrZ3JvdW5kQ29sb3IpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIGZpbGw9XCI8JT1ib3guYmFja2dyb3VuZENvbG9yJT5cIi8+XG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxuXHRcdF8uZWFjaChib3gubGFiZWwsIGZ1bmN0aW9uKHZhbHVlLCBsaW5lKSB7JT5cblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxuXHRcdDwlfSk7fSBlbHNlIHsgJT5cblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+YC50cmltKCk7XG5jb25zdCBTVkdfVEVNUExBVEUgPSBfLnRlbXBsYXRlKFNWR19URU1QTEFURV9TVFIsIHt2YXJpYWJsZTogXCJkYXRhXCJ9KTtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBjYW52YXNTdXBwb3J0ZWQgPSBmYWxzZSwgc3RyaW5nTWVhc3VyZUVsID0gbnVsbDtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyID09IFwiXCIpXG5cdFx0XHRyZXR1cm4gWzAsIDBdO1xuXG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdHZhciBzaXplO1xuXG5cdFx0aWYgKF8uaXNOdWxsKGNhbnZhc1N1cHBvcnRlZCkpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdFx0Y2FudmFzU3VwcG9ydGVkID0gISEoc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQgJiYgc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQoJzJkJykpO1xuXHRcdH1cblxuXHRcdGlmIChjYW52YXNTdXBwb3J0ZWQpIHtcblx0XHRcdFV0aWxzLmxvZygnTGFiZWwnLCAndXNpbmcgY2FudmFzJyk7XG5cdFx0XHR2YXIgY3R4ID0gc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRcdGN0eC5mb250ID0gZm9udFNpemUgKyBcIiBcIiArIGZvbnRGYW1pbHkgKyBcIiBcIiArIChib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiKTtcblx0XHRcdHZhciBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHN0cik7XG5cdFx0XHRzaXplID0gW21lYXN1cmUud2lkdGgsIDEwXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdGhlcmUgaXMgYSBzdHJpbmctbWVhc3VyaW5nIGRpdiBhdmFpbGFibGUsIGlmIG5vdCwgY3JlYXRlIG5vdy5cblx0XHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIGRpc3BsYXk6XCJub25lXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RyaW5nTWVhc3VyZUVsKTtcblx0XHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0XHRkb2Mud3JpdGUoJzxodG1sPjxib2R5PjxkaXYgaWQ9XCJzaXplTWVhc3VyaW5nRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvZGl2PjwvYm9keT48L2h0bWw+Jyk7XG5cdFx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3RyaW5nTWVhc3VyZUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0dmFyIGRpdiA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l6ZU1lYXN1cmluZ0RpdlwiKTtcblx0XHRcdGRpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0XHRkaXYuc3R5bGUucGFkZGluZyA9IDA7XG5cdFx0XHRkaXYuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRcdHNpemUgPSBbZGl2Lm9mZnNldFdpZHRoLCBkaXYub2Zmc2V0SGVpZ2h0XTtcblx0XHRcdHN0cmluZ01lYXN1cmVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHRcdHJldHVybiBzaXplO1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdHZhciBhcnIgPSBbXTtcblx0XHR2YXIgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplWzBdO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplWzFdO1xuXG5cdFx0aWYgKCFtYXhXaWR0aCB8fCAhc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSB7XG5cdFx0XHRhcnIucHVzaChzdHJpbmcpO1xuXHRcdFx0YXJyLndpZHRoID0gKCFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpID8gc3BhY2UgOiBnZXRTdHJpbmdTaXplKHN0cmluZywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpWzBdO1xuXHRcdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0O1xuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9XG5cblx0XHR2YXIgd2lkdGggPSAwO1xuXHRcdC8vc3BsaXQgdGhlIHRleHQgYnkgbGluZXNcblx0XHR2YXIgbGluZXMgPSBzdHJpbmcuc3BsaXQoL1tcXHJcXG58XFxufFxccl0vKTtcblxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHR2YXIgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvW1xcc10vKTtcblx0XHRcdHZhciBsaW5lID0gXCJcIiwgY3VycmVudFdpZHRoID0gMCwgd29yZFdpZHRoID0gMCwgbmV3TGluZSA9IHRydWUsIHdvcmQ7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0d29yZCA9IHdvcmRzW2ldO1xuXHRcdFx0XHR3b3JkV2lkdGggPSBnZXRTdHJpbmdTaXplKHdvcmQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKVswXTtcblxuXHRcdFx0XHRpZiAoKG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCkgPiBtYXhXaWR0aCkge1xuXHRcdFx0XHRcdGlmIChuZXdMaW5lKSB7XG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKHdvcmQpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGlmIChpIDwgd29yZHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhcnIucHVzaChidWYuYXBwZW5kKGxpbmUpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpbmUgPSBcIlwiO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0XHRcdFx0aWYgKCFuZXdMaW5lKVxuXHRcdFx0XHRcdFx0aS0tOyAvLyBtb3ZlIGJhY2sgb25lIHdvcmQuXG5cdFx0XHRcdFx0bmV3TGluZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGluZSA9IG5ld0xpbmUgPyB3b3JkIDogbGluZSArIFwiIFwiICsgd29yZDtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSBuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGg7XG5cdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoKTtcblx0XHRcdFx0XHRuZXdMaW5lID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChsaW5lICE9IFwiXCIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQobGluZSk7XG5cdFx0XHRpZiAoaiA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0YXJyLndpZHRoID0gd2lkdGg7XG5cdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0ICogYXJyLmxlbmd0aDtcblx0XHRyZXR1cm4gYXJyO1xuXHR9LCBmdW5jdGlvbihzdHIsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgbWF4V2lkdGggKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogIEdldCB0aGUgdmlldyBpbmZvcm1hdGlvbiBmb3IgaG93IHRvIGRpc3BsYXkgdGhlIGxhYmVsLlxuXHQgKiBAcGFyYW0gbGFiZWwgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBAcGFyYW0gY29udGFpbmVyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gY29udGFpbmVySGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBsYWJlbENvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBvbiBob3cgdG8gZGlzcGxheSBsYWJlbC4gSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcblx0ICoge1xuXHQgKiAgICAgIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250U3R5bGUsIHBhZGRpbmcsXG5cdCAqICAgICAgYWxpZ246IGNhbiBiZSBlaXRoZXIgXCJsZWZ0XCIsIFwiY2VudGVyXCIgb3IgXCJyaWdodFwiLFxuXHQgKiAgICAgIHdpZHRoOiB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGFiZWwuIGlmIGxlc3MgdGhhbiAxLCB0aGVuIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gSWYgMCwgbm8gd3JhcHBpbmcgd2lsbCBvY2N1cixcblx0ICogICAgICBoZWlnaHQsXG5cdCAqICAgICAgZ2VvbWV0cnlcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94KGxhYmVsLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0LCBsYWJlbENvbmZpZykge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcblx0XHRsZXQgYWxpZ24gPSBsYWJlbENvbmZpZy5hbGlnbjtcblxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XG5cdFx0dyA9IHcgPD0gNSA/IGNvbnRhaW5lcldpZHRoICogdyA6IHc7XG5cdFx0aCA9IGggPD0gNSA/IGNvbnRhaW5lckhlaWdodCAqIGggOiBoO1xuXHRcdHcgLT0gMiAqIHBhZGRpbmc7XG5cdFx0aCAtPSAyICogcGFkZGluZztcblx0XHR3ID0gTWF0aC5tYXgoMCwgdyk7XG5cdFx0aCA9IE1hdGgubWF4KDAsIGgpO1xuXG5cdFx0bGV0IGdlb21ldHJ5ID0gXy5jbG9uZShsYWJlbENvbmZpZy5nZW9tZXRyeSk7XG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgdywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpO1xuXHRcdGdlb21ldHJ5LndpZHRoID0gd3JhcHBlZExhYmVsLndpZHRoICsgMiAqIHBhZGRpbmc7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gd3JhcHBlZExhYmVsLmhlaWdodCArIDIgKiBwYWRkaW5nICsgKHdyYXBwZWRMYWJlbC5sZW5ndGggLSAxKSAqIGxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4ID0gMCwgc2V0QW5jaG9yWCA9ICFfLmhhcyhnZW9tZXRyeSwgXCJhbmNob3JYXCIpO1xuXHRcdHN3aXRjaCAoYWxpZ24pIHtcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0XHRhbmNob3IgPSBcImVuZFwiO1xuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IC0wLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImxlZnRcIjpcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0bGV0IHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9LCBnZW9tZXRyeSk7XG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0Ly8gdGhlIG1heGltdW0gYm91bmRzIGZvciB0aGUgbGFiZWwsIHVzZWQgdG8gcG9zaXRpb24gaW5saW5lIGVkaXRvclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9LCBnZW9tZXRyeSk7XG5cdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0Ym91bmRzLCBtYXhCb3VuZHNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JFZGdlKGxhYmVsLCBlZGdlLCBsYWJlbENvbmZpZykge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGlmICghbGFiZWwgfHwgbGFiZWwgPT0gXCJcIikgcmV0dXJuIG51bGw7XG5cblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XG5cdFx0bGV0IGZvbnRTdHlsZSA9IGxhYmVsQ29uZmlnLmZvbnRTdHlsZTtcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcblxuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIGxhYmVsQ29uZmlnLndpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0bGV0IHBvcyA9IGVkZ2UuZ2V0UmVsYXRpdmVQb3NpdGlvbih7eDogbGFiZWxDb25maWcubGFiZWxMb2NhdGlvbi8yLCBvZmZzZXRYOiBsYWJlbENvbmZpZy5sYWJlbE9mZnNldFggfHwgMCwgb2Zmc2V0WTogbGFiZWxDb25maWcubGFiZWxPZmZzZXRZIHx8IDB9KTtcblxuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4O1xuXHRcdHN3aXRjaCAobGFiZWxDb25maWcuYWxpZ24pIHtcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGR4OiBkeCwgZHk6IC13cmFwcGVkTGFiZWwuaGVpZ2h0LzIgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCxcblx0XHRcdGFuY2hvcjogYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCxcblx0XHRcdGJvdW5kczogbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgd3JhcHBlZExhYmVsLndpZHRoLCB3cmFwcGVkTGFiZWwuaGVpZ2h0KVxuXHRcdH07XG5cdH1cblxuXHRsZXQgZWRpdG9yID0ge1xuXHRcdHZpc2libGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0eWxlLnZpc2liaWxpdHkgPT0gJ3Zpc2libGUnOyB9LFxuXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKGtleSwgY29udGFpbmVyLCBib3gsIHJlZkVsLCB0ZXh0RWwpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkge1xuXHRcdFx0XHR0aGlzLmlucHV0ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7aWQ6XCJpbmxpbmVFZGl0b3JcIiwgdW5zZWxlY3RhYmxlOlwib2ZmXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMHB4XCIsIG1hcmdpbjpcIjBweFwiLCBib3JkZXI6XCJ0cmFuc3BhcmVudFwifSksXG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy52aXNpYmxlKCkgJiYgdGhpcy5rZXkgIT0ga2V5KSB7XG5cdFx0XHRcdC8vIG5lZWQgdG8gY2xvc2UgdGhlIGV4aXN0aW5nIGVkaXRvciBmaXJzdFxuXHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5ib3ggPSBib3g7XG5cdFx0XHR0aGlzLnJlZkVsID0gcmVmRWw7XG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcblxuXHRcdFx0bGV0IGxhYmVsQ29uZmlnID0gYm94LmNvbmZpZztcblx0XHRcdC8vbGV0IHBvcyA9IFV0aWxzLnVuc2NhbGUoZ3JhcGgsIFtjZWxsLmdldEJvdW5kcygpLmdldENlbnRlclgoKSArIGJvdW5kcy54LCBjZWxsLmdldEJvdW5kcygpLmdldENlbnRlclkoKSArIGJvdW5kcy55ICsgNV0pO1xuXHRcdFx0bGV0IHBvcyA9IERvbVV0aWxzLmdldENlbnRlclBvc2l0aW9uKHJlZkVsLCBjb250YWluZXIpO1xuXHRcdFx0cG9zID0gW3Bvc1swXSArIGJveC5tYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgYm94Lm1heEJvdW5kcy50b3BdO1xuXHRcdFx0bGV0IHNjYWxlID0gMS4wO1xuXG5cdFx0XHRpZiAodGV4dEVsKVxuXHRcdFx0XHR0ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHRsZWZ0OiBwb3NbMF0gKyBcInB4XCIsXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxuXHRcdFx0XHR3aWR0aDogKGJveC5tYXhCb3VuZHMud2lkdGggKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IChib3gubWF4Qm91bmRzLmhlaWdodCAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIjogbGFiZWxDb25maWcuZm9udEZhbWlseSxcblx0XHRcdFx0XCJmb250LXNpemVcIjogKGxhYmVsQ29uZmlnLmZvbnRTaXplICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xuXHRcdFx0XHQvKlwiY29sb3JcIjogbGFiZWxDb25maWcuZm9udENvbG9yKi9cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gYm94Ll9sYWJlbDtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0YXJ0JywgW3RoaXMua2V5XSk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKGNhbmNlbCkge1xuXHRcdFx0aWYgKCF0aGlzLnZpc2libGUoKSkgcmV0dXJuO1xuXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXG5cdFx0XHRcdHRoaXMudGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXG5cdFx0XHR0aGlzLmlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdGlmICghY2FuY2VsKVxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xuXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0b3AnLCBbdGhpcy5rZXldKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcblx0XHRcdGRlbGV0ZSB0aGlzLmJveDtcblx0XHRcdGRlbGV0ZSB0aGlzLnJlZkVsO1xuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdEZPTlRfQk9MRCxcblx0XHRGT05UX0lUQUxJQyxcblx0XHRGT05UX1VOREVSTElORSxcblx0XHRGT05UX1NIQURPVyxcblx0XHRTVkdfVEVNUExBVEVfU1RSLFxuXHRcdFNWR19URU1QTEFURSxcblx0XHRnZXRTdHJpbmdTaXplLFxuXHRcdHdyYXAsXG5cdFx0Z2V0TGFiZWxCb3gsXG5cdFx0Z2V0TGFiZWxCb3hGb3JFZGdlLFxuXHRcdGVkaXRvclxuXHR9O1xufSkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTGFiZWwuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuY2xhc3MgRWRnZSBleHRlbmRzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge30sIHNvdXJjZSwgdGFyZ2V0KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ0UnKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuc291cmNlID0gdGhpcy50YXJnZXQgPSBudWxsO1xuXHRcdHRoaXMuc2V0U291cmNlKHNvdXJjZSwgY29uZmlnLnNvdXJjZVBvcyk7XG5cdFx0dGhpcy5zZXRUYXJnZXQodGFyZ2V0LCBjb25maWcudGFyZ2V0UG9zKTtcblx0fVxuXG5cdHNldFNvdXJjZShub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3NvdXJjZScpO1xuXHR9XG5cblx0c2V0VGFyZ2V0KG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAndGFyZ2V0Jyk7XG5cdH1cblxuXHQvKipcblx0ICogSW50ZXJuYWwgbWV0aG9kcyB0byBzZXQgZWl0aGVyIHRoZSBzb3VyY2Ugb3IgdGFyZ2V0XG5cdCAqL1xuXHQgc2V0VGVybWluYWwobm9kZSwgcG9zLCBkaXIpIHtcblx0XHR2YXIgZW5kID0gZGlyID09ICdzb3VyY2UnID8gdGhpcy5zb3VyY2UgOiB0aGlzLnRhcmdldDtcblx0XHRpZiAoZW5kID09IG5vZGUpIHtcblx0XHRcdC8vIHNpbXBseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBlZGdlLlxuXHRcdFx0aWYgKG5vZGUpXG5cdFx0XHRcdG5vZGUuc2V0RWRnZUF0KHRoaXMsIHBvcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChlbmQpIHtcblx0XHRcdFx0Ly8gZmlyc3QgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZW5kXG5cdFx0XHRcdGVuZC5yZW1vdmVFZGdlKHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHRcdG5vZGUuYWRkT3V0RWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bm9kZS5hZGRJbkVkZ2UodGhpcywgcG9zKTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdHRoaXMuc291cmNlID0gbm9kZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBub2RlO1xuXHRcdFx0dGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdC8qZ2V0VmlldyhrZXkpIHtcblxuXHR9Ki9cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JFZGdlKHRoaXMucHJvcCgnbGFiZWwnKSwgdGhpcy5nZXRWaWV3KGtleSksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSk7XG5cdH1cblxuXHRnZXRQb2ludHMoKSB7XG5cdFx0LyppZiAodGhpcy5ncmFwaC5ldmVudERpc3BhdGNoZXIuZHJhZ2dpbmcpIHtcblx0XHRcdHRoaXMuY2xlYXJQb2ludHMoKTtcblx0XHRcdHJldHVybiBbQW5jaG9yLmdldFN0YXJ0UG9pbnQodGhpcyksIEFuY2hvci5nZXRFbmRQb2ludCh0aGlzKV07XG5cdFx0fSovXG5cblx0XHRpZiAoIXRoaXMucG9pbnRzIHx8IHRoaXMucG9pbnRzLmxlbmd0aCA9PSAwKSB7XG5cdFx0XHRkZWxldGUgdGhpcy5sZW5ndGg7XG5cdFx0XHR0aGlzLnBvaW50cyA9IEVkZ2VTdHlsZS5nZXRQb2ludHModGhpcyk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucG9pbnRzO1xuXHR9XG5cblx0LyoqXG5cdCAqXG5cdCAqIFJldHVybiB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoaXMgY29ubmVjdGlvbiwgaW4gcGl4ZWxzLlxuXHQgKi9cblx0Z2V0TGVuZ3RoKCkge1xuXHRcdGlmICghXy5pc1VuZGVmaW5lZCh0aGlzLmxlbmd0aCkpIHJldHVybiB0aGlzLmxlbmd0aDtcblxuXHRcdHZhciBwb2ludHMgPSB0aGlzLmdldFBvaW50cygpO1xuXHRcdHZhciBpLCBsID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcblx0XHRcdGwgKz0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRyZXR1cm4gdGhpcy5sZW5ndGggPSBsO1xuXHR9XG5cblx0Y2xlYXJQb2ludHMoKSB7XG5cdFx0ZGVsZXRlIHRoaXMucG9pbnRzO1xuXHRcdGRlbGV0ZSB0aGlzLmxlbmd0aDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBwYWlyIG9mIHBvaW50cyBhcyByZWZlcmVuY2UgdG8gdGhlIGNhbGN1bGF0aW9uIG9mIHN0YXJ0IGFuZCBlbmQgcG9pbnRzLlxuXHQgKi9cblx0Z2V0UmVmZXJlbmNlUG9pbnRzKCkge1xuXHRcdHZhciBwdHMgPSBbXTtcblx0XHR2YXIgcmVmUHRzID0gdGhpcy5wcm9wKCdyZWZQdHMnKTtcblx0XHRpZiAodGhpcy5zb3VyY2UpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRCb3VuZHMoKS5nZXRDZW50ZXIoKSk7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2gocmVmUHRzWzBdKTtcblxuXHRcdGlmICh0aGlzLnRhcmdldClcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldEJvdW5kcygpLmdldENlbnRlcigpKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaChyZWZQdHNbMV0pO1xuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHQgLyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IG1vZGlmaWVycyBvciBsYWJlbC4uXG5cdCAqXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxuXHQgKiBAcmV0dXJuIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICovXG5cdCBnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0dmFyIHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5nZXRMZW5ndGgoKTtcblx0XHRpZiAoXy5pc1N0cmluZyhwKSkge1xuXHRcdFx0aWYgKC8lJC8udGVzdChwKSkge1xuXHRcdFx0XHRwID0gcyhwKS5zdHJMZWZ0KCclJykudG9OdW1iZXIoKSAvIDEwMDtcblx0XHRcdH0gZWxzZSBpZiAoL3B4JC8udGVzdChwKSkge1xuXHRcdFx0XHRwID0gcyhwKS5zdHJMZWZ0KCdweCcpLnRvTnVtYmVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChwID49IC0xICYmIHAgPD0gMSkgcCAqPSBsO1xuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xuXHRcdGlmIChwID4gbCkgcCA9IGw7XG5cblx0XHR2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKSwgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFtwb2ludC54ICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9pbnQueSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKF8uaXNOdWxsKHRoaXMuc291cmNlKSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoXy5pc051bGwodGhpcy50YXJnZXQpID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XG5cdH1cbn1cbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuXG4vKlxuXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJhbGxvd0RhbmdsaW5nRWRnZXNcIikpIHtcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xuXHR9IGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UgJiYgdGhpcy50YXJnZXQgJiYgdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpICYmIHRoaXMuc291cmNlLmlzVmlzaWJsZSgpICYmIHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0VkZ2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxuY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxuXHRcdFx0XHRjb25maWcub3JpZW50YXRpb24gPSBMYXlvdXQuSE9SSVpPTlRBTDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcblx0XHR9XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHR9XG5cblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkxheW91dC5WRVJUSUNBTCA9IDA7XG5MYXlvdXQuSE9SSVpPTlRBTCA9IDE7XG5cbkxheW91dC5ERUZBVUxUUyA9IHtcblx0b3JpZW50YXRpb246IExheW91dC5WRVJUSUNBTFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIEdyYXBoVmlldyB7XG5cdGNvbnN0cnVjdG9yKGlkLCBjb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOnRoaXMuaWQsIHRhYmluZGV4OjB9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fZ3JhcGggPSBudWxsO1xuXHRcdHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0Ly8gQSBvYmplY3QgZm9yIHN0b3JpbmcgdGVtcGxhdGUgc3RyaW5ncy5cblx0XHR0aGlzLnRlbXBsYXRlU3RvcmUgPSB7fTtcblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z3JhcGgoZ3JhcGgpIHtcblx0XHRpZiAoZ3JhcGgpIHtcblx0XHRcdHRoaXMuX2dyYXBoID0gZ3JhcGg7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMsIHZpZXdwb3J0KTtcblx0XHR2YXIgdyA9IHRoaXMuYm94Lm9mZnNldFdpZHRoO1xuXHRcdHZhciBzY2FsZSA9IHcgLyB2aWV3cG9ydC53aWR0aDtcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcblx0fVxuXG5cdHRyYW5zbGF0ZSh0KSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIFswLCAwXTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdClcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcblx0XHRcdHJldHVybiBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7XG5cdH1cblxuXHRzY2FsZShrKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIDEuMDtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdCkgcmV0dXJuIDEuMDtcblxuXHRcdFx0cmV0dXJuIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJvdXRcIjpcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUoKSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4LCB5LCBzY2FsZSkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybjtcblx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0aWYgKCFyb290KSByZXR1cm47XG5cblx0XHQvKmlmICghXy5pc051bGwoeCkgJiYgIV8uaXNOdWxsKHkpKVxuXHRcdFx0cm9vdC5tb3ZlKHgsIHkpO1xuXHRcdGlmIChzY2FsZSkge1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1heCh0aGlzLmdldFByb3BlcnR5KFwibWluWm9vbVwiKSwgTWF0aC5taW4odGhpcy5nZXRQcm9wZXJ0eShcIm1heFpvb21cIiksIHNjYWxlKSk7XG5cdFx0XHRyb290LnNldFByb3BlcnR5KCdzY2FsZScsIHNjYWxlKTtcblx0XHRcdC8vIHN5bmMgdGhlIHNjYWxlIGJldHdlZW4gdGhlIHpvb20gYmVoYXZpb3IgYW5kIHRoZSBncmFwaFxuXHRcdFx0dmFyIHpvb20gPSB0aGlzLmV2ZW50RGlzcGF0Y2hlci56b29tO1xuXHRcdFx0aWYgKHpvb20uc2NhbGUoKSAhPSBzY2FsZSlcblx0XHRcdFx0em9vbS5zY2FsZShzY2FsZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKEdyYXBoLkVWRU5UX1RZUEVTLlJFRlJFU0gpOyovXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpLCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHR2YXIgdCA9IHRoaXMudGVtcGxhdGVTdG9yZVtrZXldO1xuXHRcdGlmICh0ICYmIF8uaXNGdW5jdGlvbih0KSkge1xuXHRcdFx0dCA9IHQoY29uZmlnKTtcblx0XHR9XG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwcmVwcm9jZXNzaW5nIHRhZ3MuXG5cdFx0aWYgKHByZXByb2Nlc3Nvcikge1xuXHRcdFx0dmFyIHBhcnRzID0gdC5tYXRjaCgvKCN7W14jXSp9KS9nKTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdGZvciAobGV0IHBhcnQgb2YgcGFydHMpIHtcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XG5cdFx0XHRcdG9ialtwYXJ0XSA9IHByZXByb2Nlc3NvcltfLmNhbWVsQ2FzZSgncmVuZGVyICcgKyBwYXJ0KV0odGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XG5cdFx0fVxuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkdyYXBoVmlldy5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4xLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoVmlldztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvR3JhcGhWaWV3LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgR3JhcGhWaWV3IGZyb20gXCIuL0dyYXBoVmlld1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgVEVNUExBVEVTID0ge1xuXHQkcm9vdDogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiZ3JhcGhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSwke3l9KXNjYWxlKCR7c2NhbGV9KVwiPiN7Y2hpbGRyZW59PC9nPicsXG5cdCRub2RlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSwke3l9KVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0JGVkZ2U6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9PC9nPicsXG5cdEVsbGlwc2U6ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIiR7d2lkdGgvMn1cIiByeT1cIiR7aGVpZ2h0LzJ9XCI+PC9lbGxpcHNlPicsXG5cdFJlY3RhbmdsZTogJzxyZWN0IHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgcng9XCI5XCIgcnk9XCI5XCI+PC9yZWN0PicsXG5cdFRyaWFuZ2xlOiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzJ9IDAsJHtoZWlnaHQvMn1cIj48L3BvbHlnb24+Jyxcblx0UmhvbWJ1czogJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LDBcIj48L3BvbHlnb24+Jyxcblx0SGV4YWdvbjogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIHZlcnRpY2FsID0gY29uZmlnLmRpcmVjdGlvbiA9PSAnbm9ydGgnIHx8IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ3NvdXRoJztcblx0XHRpZiAodmVydGljYWwpXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzR9ICR7d2lkdGgvMn0sJHtoZWlnaHQvNH0gMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwke2hlaWdodC80fSAkey13aWR0aC8yfSwkey1oZWlnaHQvNH1cIj48L3BvbHlnb24+Jztcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LDAgJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwICR7d2lkdGgvNH0sJHtoZWlnaHQvMn0gJHstd2lkdGgvNH0sJHtoZWlnaHQvMn1cIj48L3BvbHlnb24+Jztcblx0fSxcblx0UGF0aDogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBjbGFzcz1cImdhdWdlXCIgZD1cIjwlPWdmdy5TVkdSZW5kZXJlci5nZXRQYXRoRGF0YShkYXRhLmdldFBvaW50cygpKSU+XCI+PC9wYXRoPicpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIGQ9XCI8JT1nZncuU1ZHUmVuZGVyZXIuZ2V0UGF0aERhdGEoZGF0YS5nZXRQb2ludHMoKSklPlwiJyk7XG5cdFx0aWYgKGNvbmZpZy5zdGFydEFycm93ICE9ICdub25lJyB8fCBjb25maWcuZW5kQXJyb3cgIT0gJ25vbmUnKSB7XG5cdFx0XHRidWYuYXBwZW5kKCcgc3R5bGU9XCInKTtcblx0XHRcdGlmIChjb25maWcuc3RhcnRBcnJvdyAhPSAnbm9uZScpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCM8JT1kYXRhLnR5cGUubmFtZSU+X1N0YXJ0QXJyb3cpOycpO1xuXHRcdFx0aWYgKGNvbmZpZy5lbmRBcnJvdyAhPSAnbm9uZScpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjPCU9ZGF0YS50eXBlLm5hbWUlPl9FbmRBcnJvdyk7Jyk7XG5cdFx0XHRidWYuYXBwZW5kKCdcIicpO1xuXHRcdH1cblx0XHRidWYuYXBwZW5kKCc+PC9wYXRoPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCI+PC9pbWFnZT4nO1xuXHR9XG59O1xuXG5jbGFzcyBTVkdWaWV3IGV4dGVuZHMgR3JhcGhWaWV3IHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnKSB7XG5cdFx0c3VwZXIoaWQsIGNvbnRhaW5lciwgY29uZmlnKTtcblx0XHRfLmFzc2lnbih0aGlzLnRlbXBsYXRlU3RvcmUsIFRFTVBMQVRFUyk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4nKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9zdmc+Jyk7XG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0c3RhdGljIHNldENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRpZiAoRG9tVXRpbHMuaXNJRSkge1xuXHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRsZXQgY2hpbGQ7XG5cdFx0XHR3aGlsZSAoY2hpbGQgPSBlbC5sYXN0Q2hpbGQpXG5cdFx0XHRcdGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFNWR1ZpZXcuYXBwZW5kQ29udGVudChlbCwgY29udGVudCk7XG5cdFx0fSBlbHNlXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuXHRcdHJldHVybiBlbDtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTVkdWaWV3O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdWaWV3LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==