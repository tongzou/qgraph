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
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
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
	
	var _base = __webpack_require__(2);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(8);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Line = __webpack_require__(10);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	var _Shape = __webpack_require__(7);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Ellipse = __webpack_require__(11);
	
	var _Ellipse2 = _interopRequireDefault(_Ellipse);
	
	var _Link = __webpack_require__(12);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _EventDispatcher = __webpack_require__(13);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Graph = __webpack_require__(15);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _Cell = __webpack_require__(17);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Node = __webpack_require__(16);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(20);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Layout = __webpack_require__(22);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(23);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Marker = __webpack_require__(21);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _Renderer = __webpack_require__(24);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _SVGRenderer = __webpack_require__(27);
	
	var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);
	
	var _GraphBehavior = __webpack_require__(25);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Shape2.default.addShape("Rectangle", _Rectangle2.default);
	_Shape2.default.addShape("Ellipse", _Ellipse2.default);
	
	exports.default = {
		Events: _bean2.default,
		Base64: _base2.default,
		Cache: _Utils2.default,
		Utils: _Utils2.default,
		DomUtils: _DomUtils2.default,
		StringBuffer: _StringBuffer2.default,
		Point: _Point2.default,
		Line: _Line2.default,
		Shape: _Shape2.default,
		Rectangle: _Rectangle2.default,
		Ellipse: _Ellipse2.default,
		Link: _Link2.default,
		EventDispatcher: _EventDispatcher2.default,
		Label: _Label2.default,
		Marker: _Marker2.default,
		Graph: _Graph2.default,
		Cell: _Cell2.default,
		Node: _Node2.default,
		Edge: _Edge2.default,
		Layout: _Layout2.default,
		FlowLayout: _FlowLayout2.default,
		Renderer: _Renderer2.default,
		SVGRenderer: _SVGRenderer2.default,
		GraphBehavior: _GraphBehavior2.default
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
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// http://www.webtoolkit.info/javascript-base64.html
	
	var Base64 = {
	
		// private property
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
		// public method for encoding
		encode: function encode(input) {
			var output = "";
			var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
			var i = 0;
	
			input = Base64._utf8_encode(input);
	
			while (i < input.length) {
	
				chr1 = input.charCodeAt(i++);
				chr2 = input.charCodeAt(i++);
				chr3 = input.charCodeAt(i++);
	
				enc1 = chr1 >> 2;
				enc2 = (chr1 & 3) << 4 | chr2 >> 4;
				enc3 = (chr2 & 15) << 2 | chr3 >> 6;
				enc4 = chr3 & 63;
	
				if (isNaN(chr2)) {
					enc3 = enc4 = 64;
				} else if (isNaN(chr3)) {
					enc4 = 64;
				}
	
				output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
			}
	
			return output;
		},
	
		// public method for decoding
		decode: function decode(input) {
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
	
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	
			while (i < input.length) {
	
				enc1 = this._keyStr.indexOf(input.charAt(i++));
				enc2 = this._keyStr.indexOf(input.charAt(i++));
				enc3 = this._keyStr.indexOf(input.charAt(i++));
				enc4 = this._keyStr.indexOf(input.charAt(i++));
	
				chr1 = enc1 << 2 | enc2 >> 4;
				chr2 = (enc2 & 15) << 4 | enc3 >> 2;
				chr3 = (enc3 & 3) << 6 | enc4;
	
				output = output + String.fromCharCode(chr1);
	
				if (enc3 != 64) {
					output = output + String.fromCharCode(chr2);
				}
				if (enc4 != 64) {
					output = output + String.fromCharCode(chr3);
				}
			}
	
			output = Base64._utf8_decode(output);
	
			return output;
		},
	
		// private method for UTF-8 encoding
		_utf8_encode: function _utf8_encode(string) {
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
	
			for (var n = 0; n < string.length; n++) {
	
				var c = string.charCodeAt(n);
	
				if (c < 128) {
					utftext += String.fromCharCode(c);
				} else if (c > 127 && c < 2048) {
					utftext += String.fromCharCode(c >> 6 | 192);
					utftext += String.fromCharCode(c & 63 | 128);
				} else {
					utftext += String.fromCharCode(c >> 12 | 224);
					utftext += String.fromCharCode(c >> 6 & 63 | 128);
					utftext += String.fromCharCode(c & 63 | 128);
				}
			}
	
			return utftext;
		},
	
		// private method for UTF-8 decoding
		_utf8_decode: function _utf8_decode(utftext) {
			var string = "";
			var i = 0;
			var c = c1 = c2 = 0;
	
			while (i < utftext.length) {
	
				c = utftext.charCodeAt(i);
	
				if (c < 128) {
					string += String.fromCharCode(c);
					i++;
				} else if (c > 191 && c < 224) {
					c2 = utftext.charCodeAt(i + 1);
					string += String.fromCharCode((c & 31) << 6 | c2 & 63);
					i += 2;
				} else {
					c2 = utftext.charCodeAt(i + 1);
					c3 = utftext.charCodeAt(i + 2);
					string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
					i += 3;
				}
			}
	
			return string;
		}
	
	};
	
	exports.default = Base64;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(5);
	
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
			if (!typeRegistry[namespace]) typeRegistry[namespace] = new Map();
			if (!name) return typeRegistry[namespace];
			if (!_type) return typeRegistry[namespace].get(name);
			typeRegistry[namespace].set(name, _type);
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
			var x = Math.abs(geometry.x) <= 1 ? bounds.width * geometry.x : geometry.x;
			var y = Math.abs(geometry.y) <= 1 ? bounds.height * geometry.y : geometry.y;
			return this.offsetPosition([x, y], geometry);
		},
	
		offsetPosition: function offsetPosition(pos, geometry) {
			return [pos[0] + geometry.width * geometry.anchorX + geometry.offsetX, pos[1] + geometry.height * geometry.anchorY + geometry.offsetY];
		},
	
		/**
	  * Get the position relative to the graph that's unscaled, i.e., absolute position without considering translation and scale.
	  * @param t the current translate
	  * @param scale the current scale
	  * @param o can be either a Point or a Rectangle or a Point array.
	  */
		unscale: function unscale(t, scale, o) {
			if (o instanceof _Rectangle2.default) return new _Rectangle2.default(o.x * scale + t[0], o.y * scale + t[1], o.width * scale, o.height * scale);else if (o instanceof _Point2.default) return new _Point2.default(o.x * scale + t[0], o.y * scale + t[1]);else return [o[0] * scale + t[0], o[1] * scale + t[1]];
		},
	
		/**
	  * Get the position relative to the graph that's scaled, i.e., relative position considering translation and scale.
	  * @param t the current translation
	  * @param scale the current scale
	  * @param o can be either a Point or a Rectangle or a Point array.
	  */
		scale: function scale(t, _scale, o) {
			if (o instanceof _Rectangle2.default) return new _Rectangle2.default((o.x - t[0]) / _scale, (o.y - t[1]) / _scale, o.width / _scale, o.height / _scale);else if (o instanceof _Point2.default) return new _Point2.default((o.x - t[0]) / _scale, (o.y - t[1]) / _scale);else return [(o[0] - t[0]) / _scale, (o[1] - t[1]) / _scale];
		},
	
		/**
	  * Convenience method.
	  */
		getProperty: function getProperty(obj, prop) {
			if (!obj) return null;
			if (_.has(obj, prop)) return obj[prop];
			if (obj.prop && _.isFunction(obj.prop)) return obj.prop(prop);
			return null;
		}
	};

/***/ },
/* 4 */
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
				return this.x + "," + this.y;
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Shape2 = __webpack_require__(7);
	
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
				var alpha = Math.atan2(dy, dx);
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
					if (alpha < -pi + t || alpha > pi - t) {
						// Left edge
						p.x = rect.left;
						p.y = y;
					} else if (alpha < -t) {
						// Top Edge
						p.y = rect.top;
						p.x = x;
					} else if (alpha < t) {
						// Right Edge
						p.x = rect.right;
						p.y = y;
					} else {
						// Bottom Edge
						p.y = rect.bottom;
						p.x = x;
					}
				}
	
				var dir = Rectangle.getDirection(rect, p, orthogonal);
				return { point: p, direction: dir };
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
	
			/**
	   * Returns the direction the point <i>p</i> is in relation to the given rectangle.
	   * Possible values are WEST (-1,0), EAST (1,0), NORTH (0,-1) and SOUTH (0,1) if orthogonal is true, otherwise return
	   * the direction connection the center of r and p.
	   * @param r
	   * @param p
	   * @param orthogonal
	   * @returns {Point|*}
	   */
	
		}, {
			key: "getDirection",
			value: function getDirection(r, p) {
				var orthogonal = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
				if (!orthogonal) return new _Point2.default(r.x, r.y).getDirection(new _Point2.default(p.x, p.y));
	
				var i = void 0,
				    distance = Math.abs(r.left - p.x),
				    direction = _Point2.default.W;
	
				i = Math.abs(r.top - p.y);
				if (i <= distance) {
					distance = i;
					direction = _Point2.default.N;
				}
	
				i = Math.abs(r.bottom - p.y);
				if (i <= distance) {
					distance = i;
					direction = _Point2.default.S;
				}
	
				i = Math.abs(r.right - p.x);
				if (i < distance) {
					direction = _Point2.default.E;
				}
	
				return direction;
			}
		}]);
	
		return Rectangle;
	}(_Shape3.default);
	
	exports.default = Rectangle;

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var registry = {};
	
	var Shape = function () {
		function Shape(x, y, width, height, config) {
			_classCallCheck(this, Shape);
	
			this.x = x;
			this.y = y;
			this.width = width;
			this.height = height;
			_lodash2.default.defaults(this, config, { x: 0, y: 0, width: 0, height: 0 });
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
	
				return this.constructor.getPerimeter(this, refPt, orthogonal);
			}
		}, {
			key: "render",
			value: function render(view) {
				var template = _lodash2.default.template(view.getTemplate(this.name, this));
				return template(this);
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
			key: "center",
			get: function get() {
				return new _Point2.default(this.x, this.y);
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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * dom Utility functions
	 */
	exports.default = {
		isIE: function () {
			if (!window || !window.navigator || !navigator) return false;
			var sAgent = window.navigator.userAgent;
			var Idx = sAgent.indexOf("MSIE");
	
			// If IE, return version number.
			if (Idx > 0) return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));
	
			// If IE 11 then look for Updated user agent string.
			else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;else return false;
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
	
		downloadImage: function downloadImage(name, image) {
			if (!image) return;
			var mime = image.match(/^data:([^;]*)/)[1];
			var type = mime.split('/')[1];
			if (type.indexOf('+') > 0) type = type.split('+')[0];
			if (this.isIE) {
				image = this.b64toBlob(image.replace('data:' + mime + ';base64,', ''), mime);
				navigator.msSaveBlob(image, name + '.' + type);
			} else {
				var link = this.createElement('a', { href: image, download: name + '.' + type }, { display: "none" });
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
			}
		},
	
		/**
	  * Convert b54 to blob. IE only
	  */
		b64toBlob: function b64toBlob(b64Data, contentType, sliceSize) {
			contentType = contentType || '';
			sliceSize = sliceSize || 512;
	
			var byteCharacters = atob(b64Data);
			var byteArrays = [];
	
			for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
				var slice = byteCharacters.slice(offset, offset + sliceSize);
	
				var byteNumbers = new Array(slice.length);
				for (var i = 0; i < slice.length; i++) {
					byteNumbers[i] = slice.charCodeAt(i);
				}
				var byteArray = new Uint8Array(byteNumbers);
				byteArrays.push(byteArray);
			}
			return new Blob(byteArrays, { type: contentType });
		},
	
		openImage: function openImage(name, image) {
			var myWindow = window.open("", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=500, height=500");
			var myDocument = myWindow.document;
			var img = myDocument.createElement("img");
			this.setElement(img, { src: image, name: name });
			myDocument.body.appendChild(img);
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
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Point = __webpack_require__(4);
	
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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(7);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
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
			key: "toString",
			value: function toString() {
				return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
			}
		}], [{
			key: "getPerimeter",
			value: function getPerimeter(rect, pt) {
				var orthogonal = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];
	
				var a = rect.width / 2;
				var b = rect.height / 2;
				var cx = rect.x;
				var cy = rect.y;
				var px = pt.x;
				var py = pt.y;
	
				// Calculates straight line equation through
				// point and ellipse center y = d * x + h
				var dx = parseInt(px - cx);
				var dy = parseInt(py - cy);
	
				var tx, ty;
	
				if (dx == 0 && dy != 0) {
					return new _Point2.default(cx, cy + b * dy / Math.abs(dy));
				} else if (dx == 0 && dy == 0) {
					return new _Point2.default(px, py);
				}
	
				// Calculates intersection
				var d = dy / dx;
				var h = cy - d * cx;
				var e = a * a * d * d + b * b;
				var f = -2 * cx * e;
				var g = a * a * d * d * cx * cx + b * b * cx * cx - a * a * b * b;
				var det = Math.sqrt(f * f - 4 * e * g);
	
				// Two solutions (perimeter points)
				var xout1 = (-f + det) / (2 * e);
				var xout2 = (-f - det) / (2 * e);
				var yout1 = d * xout1 + h;
				var yout2 = d * xout2 + h;
				var dist1 = Math.sqrt(Math.pow(xout1 - px, 2) + Math.pow(yout1 - py, 2));
				var dist2 = Math.sqrt(Math.pow(xout2 - px, 2) + Math.pow(yout2 - py, 2));
	
				// Correct solution
				var xout = 0;
				var yout = 0;
	
				if (dist1 < dist2) {
					xout = xout1;
					yout = yout1;
				} else {
					xout = xout2;
					yout = yout2;
				}
	
				var p = new _Point2.default(xout, yout);
				var dir = _Rectangle2.default.getDirection(rect, p, orthogonal);
				if (orthogonal) {
					if (dir.x == -1) {
						return { point: new _Point2.default(cx - a, cy), direction: dir };
					}
					if (dir.x == 1) {
						return { point: new _Point2.default(cx + a, cy), direction: dir };
					}
					if (dir.y == -1) {
						return { point: new _Point2.default(cx, cy - b), direction: dir };
					}
					if (dir.y == 1) {
						return { point: new _Point2.default(cx, cy + b), direction: dir };
					}
				}
				return { point: p, direction: dir };
			}
		}]);
	
		return Ellipse;
	}(_Shape3.default);
	
	exports.default = Ellipse;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Point = __webpack_require__(4);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultConfig = {
		type: "direct",
		showGauge: true,
		orthogonal: false
	};
	
	var defaultGeometry = {
		width: 0,
		height: 0,
		anchorX: 0,
		anchorY: 0,
		offsetX: 0,
		offsetY: 0
	};
	
	var linkTypes = {};
	
	var Link = function () {
		function Link(terminalVisual) {
			var shapeConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var startMarker = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
			var endMarker = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
			_classCallCheck(this, Link);
	
			this.start = terminalVisual[0].point;
			this.end = terminalVisual[1].point;
			this.startNormal = terminalVisual[0].direction;
			this.endNormal = terminalVisual[1].direction;
			this.startMarker = startMarker;
			this.endMarker = endMarker;
			_lodash2.default.assign(this, shapeConfig);
		}
	
		_createClass(Link, [{
			key: "render",
			value: function render(view) {
				return view.renderLink(this);
			}
		}, {
			key: "getRelativePosition",
	
	
			/**
	   * Calculate the position where to put modifiers or label..
	   *
	   * @param geometry: defines how far along the edge should the point be placed.
	   * @return *[] the relative position.
	   */
			value: function getRelativePosition(geometry) {
				if (_lodash2.default.isNumber(geometry)) geometry = { x: geometry };
				geometry = _lodash2.default.defaults(geometry, defaultGeometry);
				var p = geometry.x,
				    l = this.length;
				if (Math.abs(p) <= 1) p *= l;
				if (p < 0) p = l + p;
				if (p > l) p = l;
	
				var points = this.points,
				    d = void 0,
				    point = void 0,
				    dir = void 0;
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
				return _Utils2.default.offsetPosition([point.x, point.y], geometry);
			}
		}, {
			key: "toString",
			value: function toString() {
				return 'Link';
			}
		}, {
			key: "points",
			get: function get() {
				return null;
			}
		}, {
			key: "controlPts",
			get: function get() {
				return null;
			}
		}, {
			key: "length",
			get: function get() {
				var points = this.points;
				var i = void 0,
				    l = 0;
				for (i = 0; i < points.length - 1; i++) {
					l += points[i].distance(points[i + 1]);
				}return l;
			}
		}], [{
			key: "getLink",
			value: function getLink(terminalVisual) {
				var shapeConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var startMarker = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
				var endMarker = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
				shapeConfig = _lodash2.default.defaultsDeep(shapeConfig, defaultConfig);
				var linkClass = linkTypes[shapeConfig.type];
				if (linkClass) return new linkClass(terminalVisual, shapeConfig, startMarker, endMarker);
				console.log('link type not supported: ' + shapeConfig.type);
				return null;
			}
		}]);
	
		return Link;
	}();
	
	var DirectLink = function (_Link) {
		_inherits(DirectLink, _Link);
	
		function DirectLink() {
			_classCallCheck(this, DirectLink);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(DirectLink).apply(this, arguments));
		}
	
		_createClass(DirectLink, [{
			key: "points",
			get: function get() {
				return [this.start, this.end];
			}
		}]);
	
		return DirectLink;
	}(Link);
	
	var BezierLink = function (_Link2) {
		_inherits(BezierLink, _Link2);
	
		function BezierLink() {
			_classCallCheck(this, BezierLink);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(BezierLink).apply(this, arguments));
		}
	
		_createClass(BezierLink, [{
			key: "getRelativePosition",
			value: function getRelativePosition(geometry) {
				if (_lodash2.default.isNumber(geometry)) geometry = { x: geometry };
				geometry = _lodash2.default.defaults(geometry, defaultGeometry);
				var p = geometry.x,
				    l = this.length;
				if (Math.abs(p) > 1) p /= l;
				if (p < 0) p++;
				if (p > 1) p--;
	
				var pts = this.points;
				var ctrlpts = this.controlPts;
				var p1 = pts[0];
				var p2 = ctrlpts[1][0];
				var p3 = ctrlpts[1][1];
				var p4 = pts[1];
	
				var point = [(1 - p) * (1 - p) * (1 - p) * p1.x + 3 * p * (1 - p) * (1 - p) * p2.x + 3 * p * p * (1 - p) * p3.x + p * p * p * p4.x, (1 - p) * (1 - p) * (1 - p) * p1.y + 3 * p * (1 - p) * (1 - p) * p2.y + 3 * p * p * (1 - p) * p3.y + p * p * p * p4.y];
				return _Utils2.default.offsetPosition([point.x, point.y], geometry);
			}
		}, {
			key: "points",
			get: function get() {
				return [this.start, this.end];
			}
		}, {
			key: "controlPts",
			get: function get() {
				var s = this.points[0],
				    e = this.points[1];
				var pts = [];
				pts[0] = null;
				pts[1] = [];
				if (this.startNormal.x == 0) {
					pts[1][0] = new _Point2.default(s.x, (s.y + e.y) / 2);
				} else {
					pts[1][0] = new _Point2.default((s.x + e.x) / 2, s.y);
				}
				if (this.endNormal.x == 0) {
					pts[1][1] = new _Point2.default(e.x, (s.y + e.y) / 2);
				} else {
					pts[1][1] = new _Point2.default((s.x + e.x) / 2, e.y);
				}
				return pts;
			}
		}]);
	
		return BezierLink;
	}(Link);
	
	var EntityRelations = function (_Link3) {
		_inherits(EntityRelations, _Link3);
	
		function EntityRelations() {
			_classCallCheck(this, EntityRelations);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(EntityRelations).apply(this, arguments));
		}
	
		_createClass(EntityRelations, [{
			key: "points",
			get: function get() {
				var source = Port.getBounds(edge, true);
				var target = Port.getBounds(edge, false);
				var isSourceLeft = target.right() < source.x;
				var isTargetLeft = source.right() < target.x;
				var result = [];
	
				var x0 = isSourceLeft ? source.x : source.x + source.width;
				var y0 = source.getCenterY();
				result.push(new _Point2.default(x0, y0));
	
				var xe = isTargetLeft ? target.x : target.x + target.width;
				var ye = target.getCenterY();
	
				var seg = this.segment;
	
				var dx = isSourceLeft ? -seg : seg;
				var dep = new _Point2.default(x0 + dx, y0);
	
				dx = isTargetLeft ? -seg : seg;
				var arr = new _Point2.default(xe + dx, ye);
	
				// Adds intermediate points if both go out on same side
				if (isSourceLeft == isTargetLeft) {
					var x = isSourceLeft ? Math.min(x0, xe) - seg : Math.max(x0, xe) + seg;
	
					result.push(new _Point2.default(x, y0));
					result.push(new _Point2.default(x, ye));
				} else if (dep.x < arr.x == isSourceLeft) {
					var midY = y0 + (ye - y0) / 2;
	
					result.push(dep);
					result.push(new _Point2.default(dep.x, midY));
					result.push(new _Point2.default(arr.x, midY));
					result.push(arr);
				} else {
					result.push(dep);
					result.push(arr);
				}
	
				result.push(new _Point2.default(xe, ye));
				return result;
			}
		}]);
	
		return EntityRelations;
	}(Link);
	
	var Manhattan = function (_Link4) {
		_inherits(Manhattan, _Link4);
	
		function Manhattan(terminalVisual, shapeConfig, startMarker, endMarker) {
			_classCallCheck(this, Manhattan);
	
			shapeConfig = _lodash2.default.defaults(shapeConfig, {
				MIN_BUFFER: 10,
				autoRoute: false,
				maxChannelWidth: 100
			});
			return _possibleConstructorReturn(this, Object.getPrototypeOf(Manhattan).call(this, terminalVisual, shapeConfig, startMarker, endMarker));
		}
	
		_createClass(Manhattan, [{
			key: "autoRoute",
	
	
			/**
	   * Automatically route the connection to avoid intersections with other vertices.
	   */
			value: function autoRoute(pts, container, boxes, startBox, endBox) {
				var side, side2, d, box, intersect, j;
				var channel, channel2, pt, dir;
	
				var startPadding = 0,
				    endPadding;
				// first get the start and end channel
				box = boxes[endBox];
				pt = pts[pts.length - 2];
				if (pt.y < box.y) side = 1;else if (pt.y > box.y + box.height) side = 3;else if (pt.x < box.x) side = 0;else side = 2;
				channel = _getChannel(container, endBox, boxes, side);
				endPadding = channel.horizontal ? (channel.right - channel.left) / 2 : (channel.bottom - channel.top) / 2;
	
				for (var i = 0; i < pts.length - 1; i++) {
					if (pts[i + 1].x == pts[i].x && pts[i + 1].y == pts[i].y) continue;
					intersect = _getFirstIntersection(pts, i, boxes, startBox, endBox);
					if (!intersect) continue;
					j = intersect[0];
					side = intersect[1];
					box = boxes[j];
					channel = _getChannel(container, j, boxes, side);
					switch (side) {
						case 0:
						case 2:
							pt = new _Point2.default((channel.right + channel.left) / 2, pts[i].y);
							dir = _getRouteTendency(pts, i, pt, box, side);
							side2 = dir < 0 ? 1 : 3;
							channel2 = _getChannel(container, j, boxes, side2);
							// if the previous point is in the channel2, use that point instead of center of the channel.
							if (i > 1 && pts[i - 2].y == pts[i - 1].y && pts[i - 1].y > channel2.top && pts[i - 1].y < channel2.bottom) d = pts[i - 1].y - pt.y;else if (i < pts.length - 3 && pts[i + 2].y == pts[i + 3].y && pts[i + 2].y > channel2.top && pts[i + 2].y < channel2.bottom) d = pts[i + 2].y - pt.y;else d = (channel2.bottom + channel2.top) / 2 - pt.y;
							// check if we need this pt.
							if (side == 0 && pt.x <= pts[i].x || side == 2 && pt.x >= pts[i].x) pt = null;else if (i > 0) {
								// see if we can push the line out to where we started.
								if (!_hasIntersection([new _Point2.default(pts[i].x, pts[i].y), new _Point2.default(pts[i].x, pts[i].y + d), new _Point2.default(pt.x, pt.y + d)], boxes)) pt = null;
							}
							break;
						case 1:
						case 3:
							pt = new _Point2.default(pts[i].x, (channel.bottom + channel.top) / 2);
							dir = _getRouteTendency(pts, i, pt, box, side);
							side2 = dir < 0 ? 0 : 2;
							channel2 = _getChannel(container, j, boxes, side2);
							// if the previous point is in the channel2, use that point instead of center of the channel.
							if (i > 1 && pts[i - 2].x == pts[i - 1].x && pts[i - 1].x > channel2.left && pts[i - 1].x < channel2.right) d = pts[i - 1].x - pt.x;else if (i < pts.length - 3 && pts[i + 2].x == pts[i + 3].x && pts[i + 2].x > channel2.left && pts[i + 2].x < channel2.right) d = pts[i + 2].x - pt.x;else d = (channel2.right + channel2.left) / 2 - pt.x;
							// check if we need this pt.
							if (side == 1 && pt.y <= pts[i].y || side == 3 && pt.y >= pts[i].y) pt = null;else if (i > 0) {
								// see if we can push the line out to where we started.
								if (!_hasIntersection([new _Point2.default(pts[i].x, pts[i].y), new _Point2.default(pts[i].x + d, pts[i].y), new _Point2.default(pt.x + d, pt.y)], boxes)) pt = null;
							}
							break;
						case 4:
							continue;
					}
					// max points.
					if (i > 20) return;
					if (pt && (pt.x != pts[i].x || pt.y != pts[i].y)) {
						pts.splice(i + 1, 0, pt);
						_moveSegment(pts, i + 1, d, startPadding, endPadding);
						i++;
					} else _moveSegment(pts, i, d, startPadding, endPadding);
				}
			}
		}, {
			key: "_hasIntersection",
			value: function _hasIntersection(pts, boxes) {
				for (var i = 0; i < pts.length - 1; i++) {
					for (var j = 0; j < boxes.length; j++) {
						if (boxes[j].detectIntersection(pts[i], pts[i + 1]) >= 0) return true;
					}
				}
				return false;
			}
		}, {
			key: "_getFirstIntersection",
			value: function _getFirstIntersection(pts, i, boxes, startBox, endBox) {
				var box,
				    side,
				    savedIndex = null,
				    savedSide = null;
				for (var j = 0; j < boxes.length; j++) {
					if (i == 0 && j == startBox || i == pts.length - 2 && j == endBox) continue;
					box = boxes[j];
					side = box.detectIntersection(pts[i], pts[i + 1]);
					if (side >= 0) {
						if (savedIndex == null) {
							savedIndex = j;
							savedSide = side;
						} else {
							if (boxes[savedIndex].distance(pts[i]) > box.distance(pts[i])) {
								savedIndex = j;
								savedSide = side;
							}
						}
					}
				}
				if (savedIndex != null) return [savedIndex, savedSide];
				return null;
			}
		}, {
			key: "_getRouteTendency",
			value: function _getRouteTendency(pts, i, breakPt, box, side) {
				var dir;
				var p;
				switch (side) {
					case 0:
					case 2:
						p = "y";
						break;
					case 1:
					case 3:
						p = "x";
						break;
				}
				//first try the breakpt.
				dir = _getRouteDirection(breakPt, pts[pts.length - 1])[p];
				if (dir == 0) {
					dir = -_getRouteDirection(pts[0], pts[pts.length - 1])[p];
					if (dir == 0) {
						if (breakPt[p] < box.getCenter()[p]) dir = -1;else dir = 1;
					}
				}
				return dir;
			}
		}, {
			key: "_getRouteDirection",
			value: function _getRouteDirection(pt1, pt2) {
				if (pt1.x == pt2.x) {
					if (pt1.y < pt2.y) return _Point2.default.S;
					return _Point2.default.N;
				} else if (pt1.y == pt2.y) {
					if (pt1.x < pt2.x) return _Point2.default.E;
					return _Point2.default.W;
				} else if (pt1.x < pt2.x) {
					if (pt1.y < pt2.y) return _Point2.default.SE;
					return _Point2.default.NE;
				} else {
					if (pt1.y < pt2.y) return _Point2.default.SW;
					return _Point2.default.NW;
				}
			}
		}, {
			key: "_getChannel",
			value: function _getChannel(container, index, boxes, side) {
				var maxChannelWidth = this.maxChannelWidth;
				var box1 = boxes[index],
				    box2;
				var pt, i;
				var channel = {},
				    l,
				    t,
				    b,
				    r;
				switch (side) {
					case 0:
						pt = box1.getLeft();
						channel.right = pt.x;
						channel.horizontal = false;
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							r = boxes[i].getRight().x;
							if (r >= pt.x) continue;
							if (!channel.left || channel.left < r) channel.left = r;
						}
						if (!channel.left) {
							channel.left = container.getLeft().x;
							if (channel.right - channel.left > maxChannelWidth) channel.left = channel.right - maxChannelWidth;
						}
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							box2 = boxes[i];
							b = box2.getBottom().y;
							t = box2.getTop().y;
							if (b < pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
								if (!channel.top || channel.top < b) channel.top = b;
							}
							if (t > pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
								if (!channel.bottom || channel.bottom > t) channel.bottom = t;
							}
						}
						if (!channel.top) channel.top = container.getTop().y;
						if (!channel.bottom) channel.bottom = container.getBottom().y;
						break;
					case 1:
						pt = box1.getTop();
						channel.horizontal = true;
						channel.bottom = pt.y;
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							b = boxes[i].getBottom().y;
							if (b >= pt.y) continue;
							if (!channel.top || channel.top < b) channel.top = b;
						}
						if (!channel.top) {
							channel.top = container.getTop().y;
							if (channel.bottom - channel.top > maxChannelWidth) channel.top = channel.bottom - maxChannelWidth;
						}
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							box2 = boxes[i];
							l = box2.getLeft().x;
							r = box2.getRight().x;
							if (r < pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
								if (!channel.left || channel.left < r) channel.left = r;
							}
							if (l > pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
								if (!channel.right || channel.right > l) channel.right = l;
							}
						}
						if (!channel.left) channel.left = container.getLeft().x;
						if (!channel.right) channel.right = container.getRight().x;
	
						break;
					case 2:
						pt = box1.getRight();
						channel.horizontal = false;
						channel.left = pt.x;
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							l = boxes[i].getLeft().x;
							if (l <= pt.x) continue;
							if (!channel.right || channel.right > l) channel.right = l;
						}
						if (!channel.right) {
							channel.right = container.getRight().x;
							if (channel.right - channel.left > maxChannelWidth) channel.right = channel.left + maxChannelWidth;
						}
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							box2 = boxes[i];
							b = box2.getBottom().y;
							t = box2.getTop().y;
							if (b < pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
								if (!channel.top || channel.top < b) channel.top = b;
							}
							if (t > pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
								if (!channel.bottom || channel.bottom > t) channel.bottom = t;
							}
						}
						if (!channel.top) channel.top = container.getTop().y;
						if (!channel.bottom) channel.bottom = container.getBottom().y;
						break;
					case 3:
						pt = box1.getBottom();
						channel.horizontal = true;
						channel.top = pt.y;
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							box2 = boxes[i];
							if (box2.getTop().y <= pt.y) continue;
							if (!channel.bottom || channel.bottom > box2.getTop().y) channel.bottom = box2.getTop().y;
						}
						if (!channel.bottom) {
							channel.bottom = container.getBottom().y;
							if (channel.bottom - channel.top > maxChannelWidth) channel.bottom = channel.top + maxChannelWidth;
						}
						for (i = 0; i < boxes.length; i++) {
							if (i == index) continue;
							box2 = boxes[i];
							l = box2.getLeft().x;
							r = box2.getRight().x;
							if (r < pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
								if (!channel.left || channel.left < r) channel.left = r;
							}
							if (l > pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
								if (!channel.right || channel.right > l) channel.right = l;
							}
						}
						if (!channel.left) channel.left = container.getLeft().x;
						if (!channel.right) channel.right = container.getRight().x;
						break;
				}
				return channel;
			}
	
			/**
	   * Move a line segment by a specified distance.
	   *
	   * @param pts the list of points.
	   * @param i the index of the segment.
	   * @param d the distance to move.
	   * @param startPadding
	   * @param endPadding
	   */
	
		}, {
			key: "_moveSegment",
			value: function (_moveSegment2) {
				function _moveSegment(_x7, _x8, _x9, _x10, _x11) {
					return _moveSegment2.apply(this, arguments);
				}
	
				_moveSegment.toString = function () {
					return _moveSegment2.toString();
				};
	
				return _moveSegment;
			}(function (pts, i, d, startPadding, endPadding) {
				// first check if we need to add new line segments.
				var dir, l, pt;
				if (i == 0) {
					// we need to break off the segment, since we can't change the starting point.
					dir = pts[0].getDirection(pts[1]);
					if (!startPadding) startPadding = this.MIN_BUFFER;
					l = Math.min(startPadding, pts[0].distance(pts[1]) / 2);
					pt = pts[0].getTranslated(dir.scale(l));
					pts.splice(1, 0, pt);
					_moveSegment(pts, i + 1, d);
					return;
				}
				if (i == pts.length - 2) {
					// we need to break off the segment, since we can't change the end point.
					dir = pts[pts.length - 1].getDirection(pts[pts.length - 2]);
					if (!endPadding) endPadding = this.MIN_BUFFER;
					l = Math.min(endPadding, pts[pts.length - 1].distance(pts[pts.length - 2]) / 2);
					pt = pts[pts.length - 1].getTranslated(dir.scale(l));
					pts.splice(pts.length - 1, 0, pt);
					_moveSegment(pts, i, d);
					return;
				}
	
				if (pts[i].y == pts[i + 1].y) {
					if (i > 0 && pts[i - 1].y == pts[i].y) {
						pts.splice(i + 1, 0, pts[i].clone());
						i++;
					}
					if (i < pts.length - 2 && pts[i + 1].y == pts[i + 2].y) pts.splice(i + 1, 0, pts[i + 1].clone());
					pts[i].y += d;
					pts[i + 1].y += d;
				} else {
					if (i > 0 && pts[i - 1].x == pts[i].x) {
						pts.splice(i + 1, 0, pts[i].clone());
						i++;
					}
					if (i < pts.length - 2 && pts[i + 1].x == pts[i + 2].x) pts.splice(i + 1, 0, pts[i + 1].clone());
					pts[i].x += d;
					pts[i + 1].x += d;
				}
			})
	
			/**
	   * This method will merge the redundant segments.
	   */
	
		}, {
			key: "_mergeSegments",
			value: function _mergeSegments(pts) {
				var h1 = pts[pts.length - 1].y == pts[pts.length - 2].y;
				var h2;
				for (var i = pts.length - 2; i >= 1; i--) {
					h2 = pts[i].y == pts[i - 1].y;
					if (h2 == h1 || pts[i].equals(pts[i - 1])) pts.splice(i, 1);else h1 = !h1;
				}
			}
		}, {
			key: "points",
			get: function get() {
				//let pos = Manhattan.routeInternal(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
				//pos = Manhattan.processPositions(this.start, this.end, pos, this.startNormal.x!=0);
				var pos = Manhattan.findPositions(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
				if (this.autoRoute) {
					this._mergeSegments(pos);
					var boxes = [],
					    node,
					    startBox,
					    endBox;
					var container = edge.source.getCommonAncestor(edge.target);
					var childNodes = container.getDescendants();
					var index = 0;
					for (var i = 0; i < childNodes.length; i++) {
						node = childNodes[i];
						// Do not include source or target ancestors in routing.
						if (node.excludeFromRouting(edge) || node.isAncestor(edge.source) || node.isAncestor(edge.target)) continue;
						if (node == edge.source) startBox = index;
						if (node == edge.target) endBox = index;
						boxes.push(node.getBounds(document));
						index++;
					}
					if (boxes.length > 1) this.autoRoute(pos, container.getBounds(document), boxes, startBox, endBox);
				}
				this._mergeSegments(pos);
				return pos;
			}
	
			//New function for finding route
	
		}], [{
			key: "findPositions",
			value: function findPositions(start, end, startNormal, endNormal, buffer) {
				var startBuffer = new _Point2.default(start.x + startNormal.x * buffer, start.y + startNormal.y * buffer);
				var endBuffer = new _Point2.default(end.x + endNormal.x * buffer, end.y + endNormal.y * buffer);
				var startBufferNormal, endBufferNormal;
				var pts;
				if (startNormal.x != 0) {
					if ((endBuffer.x - startBuffer.x) / startNormal.x > 0) {
						startBufferNormal = startNormal;
					} else {
						startBufferNormal = new _Point2.default(0, endBuffer.y >= startBuffer.y ? 1 : -1);
					}
				} else {
					if ((endBuffer.y - startBuffer.y) / startNormal.y > 0) {
						startBufferNormal = startNormal;
					} else {
						startBufferNormal = new _Point2.default(endBuffer.x >= startBuffer.x ? 1 : -1, 0);
					}
				}
				if (endNormal.x != 0) {
					if ((startBuffer.x - endBuffer.x) / endNormal.x > 0) {
						endBufferNormal = endNormal;
					} else {
						endBufferNormal = new _Point2.default(0, startBuffer.y >= endBuffer.y ? 1 : -1);
					}
				} else {
					if ((startBuffer.y - endBuffer.y) / endNormal.y > 0) {
						endBufferNormal = endNormal;
					} else {
						endBufferNormal = new _Point2.default(startBuffer.x >= endBuffer.x ? 1 : -1, 0);
					}
				}
	
				if (startBufferNormal.dotProduct(endBufferNormal) == 0) {
					var middle = startBufferNormal.x == 0 ? new _Point2.default(startBuffer.x, endBuffer.y) : new _Point2.default(endBuffer.x, startBuffer.y);
					pts = [start, startBuffer, middle, endBuffer, end];
				} else if (startBufferNormal.dotProduct(endBufferNormal) < 0) {
					if (startBufferNormal.x == 0) {
						pts = [start, startBuffer, new _Point2.default(startBuffer.x, (start.y + end.y) / 2), new _Point2.default(endBuffer.x, (start.y + end.y) / 2), endBuffer, end];
					} else {
						pts = [start, startBuffer, new _Point2.default((start.x + end.x) / 2, startBuffer.y), new _Point2.default((start.x + end.x) / 2, endBuffer.y), endBuffer, end];
					}
				} else {
					pts = [start, startBuffer, new _Point2.default(startBuffer.x + startBufferNormal.x * buffer, startBuffer.y + startBufferNormal.y * buffer), new _Point2.default(endBuffer.x + endBufferNormal.x * buffer, endBuffer.y + endBufferNormal.y * buffer), endBuffer, end];
				}
	
				var prunePts = [];
				prunePts[0] = pts[0];
				for (var i = 1; i < pts.length - 1; i++) {
					if (pts[i].x == pts[i - 1].x && pts[i].x == pts[i + 1].x || pts[i].y == pts[i - 1].y && pts[i].y == pts[i + 1].y) {
						continue;
					}
					prunePts.push(pts[i]);
				}
				prunePts.push(pts[pts.length - 1]);
				return prunePts;
			}
	
			/**
	   * Make a route based on the start, end and startNormal and endNormal
	   * None of the parameters can be null
	   * TODO: This method could use some improvement...
	   */
	
		}, {
			key: "routeInternal",
			value: function routeInternal(start, end, startNormal, endNormal, buffer) {
				var direction = start.getDirection(end);
				var average = start.getMidPoint(end);
				var pos = [];
				var startPositive = new _Point2.default(startNormal.x * startNormal.x, startNormal.y * startNormal.y);
				var endPositive = new _Point2.default(endNormal.x * endNormal.x, endNormal.y * endNormal.y);
				var horizontal = startNormal.x != 0;
				pos[0] = horizontal ? start.y : start.x;
	
				horizontal = !horizontal;
				var i;
				if (startNormal.dotProduct(endNormal) == 0) {
					if (startNormal.dotProduct(direction) >= 0 && endNormal.dotProduct(direction) <= 0) {
						// 0
					} else {
						// 2
						if (startNormal.dotProduct(direction) < 0) i = startPositive.dotProduct(start.getTranslated(startNormal.getScaled(buffer)));else i = horizontal ? average.y : average.x;
	
						pos.push(i);
						horizontal = !horizontal;
	
						if (endNormal.dotProduct(direction) > 0) i = endPositive.dotProduct(end.getTranslated(endNormal.getScaled(buffer)));else i = horizontal ? average.y : average.x;
	
						pos.push(i);
						horizontal = !horizontal;
					}
				} else {
					if (startNormal.dotProduct(endNormal) > 0) {
						//1
						if (startNormal.dotProduct(direction) >= 0) i = startPositive.dotProduct(start.getTranslated(startNormal.getScaled(buffer)));else i = endPositive.dotProduct(end.getTranslated(endNormal.getScaled(buffer)));
						pos.push(i);
						horizontal = !horizontal;
					} else {
						//3 or 1
						if (startNormal.dotProduct(direction) < 0) {
							i = startPositive.dotProduct(start.getTranslated(startNormal.getScaled(buffer)));
							pos.push(i);
							horizontal = !horizontal;
						}
	
						i = horizontal ? average.y : average.x;
						pos.push(i);
						horizontal = !horizontal;
	
						if (startNormal.dotProduct(direction) < 0) {
							i = endPositive.dotProduct(end.getTranslated(endNormal.getScaled(buffer)));
							pos.push(i);
							horizontal = !horizontal;
						}
					}
				}
				pos.push(horizontal ? end.y : end.x);
	
				return pos;
			}
	
			// Process the positions.
	
		}, {
			key: "processPositions",
			value: function processPositions(start, end, positions, horizontal) {
				var pos = [];
				pos[0] = horizontal ? start.x : start.y;
				var i;
				for (i = 0; i < positions.length; i++) {
					pos[i + 1] = positions[i];
				}
				pos.push(horizontal == (positions.length % 2 == 1) ? end.x : end.y);
	
				var pts = [];
				pts[0] = start;
				var p;
				var current, prev;
				for (i = 2; i < pos.length - 1; i++) {
					horizontal = !horizontal;
					prev = pos[i - 1];
					current = pos[i];
					p = horizontal ? new _Point2.default(prev, current) : new _Point2.default(current, prev);
					pts.push(p);
				}
				pts.push(end);
				return pts;
			}
		}]);
	
		return Manhattan;
	}(Link);
	
	linkTypes['direct'] = DirectLink;
	linkTypes['bezier'] = BezierLink;
	linkTypes['entityRelations'] = EntityRelations;
	linkTypes['manhattan'] = Manhattan;
	
	exports.default = Link;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _KeyUtils = __webpack_require__(14);
	
	var KeyUtils = _interopRequireWildcard(_KeyUtils);
	
	var _DomUtils = __webpack_require__(8);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var DEFAULTS = {
		stopPropagation: false
	};
	
	var EventDispatcher = function () {
		/**
	  * Constructor
	  * @param root the root element that the manager will listen to.
	  * @param zoomScale
	  */
	
		function EventDispatcher(root) {
			var zoomScale = arguments.length <= 1 || arguments[1] === undefined ? [0, Infinity] : arguments[1];
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
			_classCallCheck(this, EventDispatcher);
	
			this.root = root;
			this.rootNS = root.getAttribute('ns') || 'root';
			this.zoomScale = zoomScale;
			_lodash2.default.assign(this, DEFAULTS, config);
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
				//if (type == 'contextmenu')
				//	event.preventDefault();
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
				if (this.stopPropagation && event.stopPropagation) event.stopPropagation();
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
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.getKeyEvent = getKeyEvent;
	exports.getKeyData = getKeyData;
	
	var _StringBuffer = __webpack_require__(9);
	
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
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Node = __webpack_require__(16);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(20);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Marker = __webpack_require__(21);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
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
		visible: true,
		startMarker: null,
		endMarker: {
			id: 'Default_EndMarker',
			type: 'arrow',
			size: 10,
			color: '#0ea117'
		},
		/* start and end is only used if the edge is not connected to a node */
		start: [0, 0],
		end: [400, 200]
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
			// check for markers.
			this.markers = [];
			var edgeTypes = _Utils2.default.type(_Edge2.default.namespace),
			    marker = void 0,
			    markerConfig = void 0;
			edgeTypes.forEach(function (type) {
				markerConfig = type.prototype.startMarker;
				if (markerConfig) {
					marker = _Marker2.default.getMarker(markerConfig, true);
					this.markers.push(marker);
				}
				markerConfig = type.prototype.endMarker;
				if (markerConfig) {
					marker = _Marker2.default.getMarker(markerConfig, false);
					this.markers.push(marker);
				}
			}, this);
	
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
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
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
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
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
	
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
	
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
			key: "reset",
			value: function reset() {}
		}, {
			key: "destroy",
			value: function destroy() {}
		}, {
			key: "currentRoot",
			get: function get() {
				return this.root;
			}
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Cell2 = __webpack_require__(17);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Node = function (_Cell) {
		_inherits(Node, _Cell);
	
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
					}
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
				var orthogonal = arguments[3];
	
				var shape = this.getShape(key);
				if (portName == 'auto') {
					return shape.getPerimeter(endPt, orthogonal);
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
	}(_Cell3.default);
	
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Cache = __webpack_require__(18);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Shape = __webpack_require__(7);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Cell is the common parent for Node and Edge.
	 */
	
	var Cell = function () {
		function Cell(graph) {
			var config = arguments.length <= 1 || arguments[1] === undefined ? { id: _lodash2.default.uniqueId() } : arguments[1];
	
			_classCallCheck(this, Cell);
	
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
	
		_createClass(Cell, [{
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
					namespace: this.namespace
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
				var width = this.viewProp(key, "width");
				var height = this.viewProp(key, "height");
				shape = new shapeClass(x, y, width, height, shapeConfig);
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
				var shape = this.getShape(view.id);
				if (shape) return shape.render(view);
				return '';
			}
		}, {
			key: "renderLabel",
			value: function renderLabel(view) {
				if (this == this.graph.currentRoot) return null;
				var box = this.getLabelBox(view.id);
				if (box) return view.renderLabel(box);
				return '';
			}
		}, {
			key: "getLabelBox",
			value: function getLabelBox(key) {
				var box = _Cache2.default.get(this.id + '.labelBox', key);
				if (box) return box;
				var shape = this.getShape(key);
				// Just get the config will have a positive performance boost for IE11 and IE10.
				box = _Label2.default.getLabelBox(this.prop('label'), this.viewProp(key, 'labelConfig'), shape.width, shape.height);
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
				if (this == this.graph.currentRoot) return '';
				return "root." + this.prop("role");
			}
		}]);
	
		return Cell;
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
	
	
	exports.default = Cell;

/***/ },
/* 18 */
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(8);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var FONT_BOLD = 1,
	    FONT_ITALIC = 2,
	    FONT_UNDERLINE = 4,
	    FONT_SHADOW = 8;
	
	var defaultConfig = {
		fontSize: 11,
		fontFamily: "Arial",
		fontStyle: 0,
		padding: 0,
		linePadding: 0,
		align: "left",
		width: 0,
		height: 0,
		rotation: null,
		geometry: { x: 0, y: 0, anchorY: 0, offsetX: 0, offsetY: 0 }
	};
	
	/**
	 * The label object handles label sizing/positioning
	 */
	
	exports.default = function () {
		var stringMeasureEl = null,
		    measureDiv = void 0,
		    baselineDiv = void 0;
	
		/**
	  * Calculate the size of the string.
	  */
		var getStringSize = _lodash2.default.memoize(function (str, fontSize, fontFamily, bold) {
			fontSize = fontSize || 11;
			fontFamily = fontFamily || 'Arial,Helvetica';
			bold = !_lodash2.default.isUndefined(bold) ? bold : false;
	
			// first check if there is a string-measuring div available, if not, create now.
			if (!stringMeasureEl) {
				stringMeasureEl = _DomUtils2.default.createElement('iframe', { id: "_ComputeStylesIframe" }, { position: "absolute", visibility: "hidden", width: "auto" });
				document.body.appendChild(stringMeasureEl);
				var doc = stringMeasureEl.contentWindow.document;
				doc.open();
				doc.write('<html><body>\
					<div id="baselineDiv" style="height:100px;"><span style="line-height:0">T</span><span style="height:100%;display:inline-block;"></span></div>\
					<div id="measureDiv" style="position:absolute;width:auto;height:auto;padding:0;white-space:pre-wrap;word-wrap:break-word;display:inline-block;"></div>\
					</body></html>');
				doc.close();
				measureDiv = doc.getElementById("measureDiv");
				baselineDiv = doc.getElementById("baselineDiv");
			}
			baselineDiv.style.fontSize = measureDiv.style.fontSize = fontSize;
			baselineDiv.style.fontFamily = measureDiv.style.fontFamily = fontFamily;
			baselineDiv.style.fontWeight = measureDiv.style.fontWeight = bold ? 'bold' : 'normal';
			measureDiv.innerHTML = str;
	
			var strut = baselineDiv.firstChild;
			var baselineHeight = strut.offsetTop + strut.offsetHeight - baselineDiv.offsetHeight - baselineDiv.offsetTop;
	
			return { width: measureDiv.offsetWidth, height: measureDiv.offsetHeight, baseline: baselineHeight };
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
			    space = spaceSize.width;
			arr.lineHeight = spaceSize.height;
			arr.baseline = spaceSize.baseline;
	
			if (!maxWidth || !string || string == "") {
				arr.push(string);
				arr.width = !string || string == "" ? space : getStringSize(string, fontSize, fontFamily, bold).width;
				arr.height = arr.lineHeight;
				return arr;
			}
	
			var width = 0;
			//split the text by lines
			var lines = string.split('\n');
	
			var buf = new _StringBuffer2.default();
	
			for (var j = 0; j < lines.length; j++) {
				//split each line by word
				var words = lines[j].split(/\s/);
				var line = "",
				    currentWidth = 0,
				    wordWidth = 0,
				    newLine = true,
				    word;
	
				for (var i = 0; i < words.length; i++) {
					word = words[i];
					wordWidth = getStringSize(word, fontSize, fontFamily, bold).width;
	
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
		function getLabelBox(label, labelConfig, containerWidth, containerHeight) {
			return _getLabelBox.call(this, label, labelConfig, { width: containerWidth, height: containerHeight });
		}
	
		function getLabelBoxForLink(label, labelConfig, link) {
			return _getLabelBox.call(this, label, labelConfig, link);
		}
	
		function _getLabelBox(label) {
			var labelConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
			var context = arguments[2];
	
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
			if (context.width) {
				w = w <= 5 ? context.width * w : w;
				h = h <= 5 ? context.height * h : h;
			}
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
			var pos = void 0;
			if (context.getRelativePosition) pos = context.getRelativePosition(geometry);else pos = _Utils2.default.getRelativePosition({ width: context.width, height: context.height }, geometry);
	
			var bounds = new _Rectangle2.default(pos[0], pos[1], geometry.width, geometry.height);
			// the pivot is the center of rotation when the label has a rotation specified.
			var pivot = align == 'center' ? [0, 0] : align == 'left' ? [-wrappedLabel.width / 2, 0] : [wrappedLabel.width / 2, 0];
	
			// the maximum bounds for the label, used to position inline editor
			geometry.width = Math.max(w + 2 * padding, geometry.width);
			geometry.height = Math.max(h + 2 * padding, geometry.height);
	
			if (context.getRelativePosition) pos = context.getRelativePosition(geometry);else pos = _Utils2.default.getRelativePosition({ width: context.width, height: context.height }, geometry);
	
			var maxBounds = new _Rectangle2.default(pos[0], pos[1], geometry.width, geometry.height);
			return {
				config: labelConfig, label: wrappedLabel, _label: label,
				dx: dx, dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight - wrappedLabel.baseline, anchor: anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
				pivot: pivot, bounds: bounds, maxBounds: maxBounds
			};
		}
	
		function render(view, box) {
			return view.renderLabel(box);
		}
	
		var editor = {
			start: function start(key, container, box, refEl, textEl) {
				var _this = this;
	
				var scale = arguments.length <= 5 || arguments[5] === undefined ? 1.0 : arguments[5];
				var singleLine = arguments.length <= 6 || arguments[6] === undefined ? true : arguments[6];
	
				if (this.input) {
					if (this.key != key) {
						// need to close the existing editor first
						this.stop();
					} else return;
				}
				var tag = singleLine ? 'input' : 'textarea';
				this.input = _DomUtils2.default.createElement(tag, { id: "inlineEditor", unselectable: "off" }, { position: "absolute", overflow: "hidden", padding: "0px", margin: "0px", border: "transparent" });
				if (singleLine) {
					_bean2.default.on(this.input, 'keydown keyup', function (event) {
						if (event.keyCode == 13) {
							_bean2.default.off(_this.input, 'keydown keyup');
							_this.stop();
						}
					});
				}
				container.appendChild(this.input);
	
				this.key = key;
				this.box = box;
				this.refEl = refEl;
				this.textEl = textEl;
	
				var labelConfig = box.config;
				var maxBounds = new _Rectangle2.default(box.maxBounds.x, box.maxBounds.y, box.maxBounds.width * scale, box.maxBounds.height * scale);
				var pos = _DomUtils2.default.getCenterPosition(refEl, container);
				pos = [pos[0] + maxBounds.left, pos[1] + maxBounds.top];
	
				if (textEl) textEl.style.visibility = 'hidden';
	
				_DomUtils2.default.setElement(this.input, null, {
					visibility: 'visible',
					left: pos[0] + "px",
					top: pos[1] + "px",
					width: maxBounds.width + 'px',
					height: maxBounds.height + 'px',
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
				if (!this.input) return;
	
				cancel = cancel || false;
				if (this.textEl) this.textEl.style.visibility = null;
	
				if (!cancel) _bean2.default.fire(this, 'editor.update', [this.key, this.input.value]);
	
				_bean2.default.fire(this, 'editor.stop', [this.key]);
	
				// remove the input
				this.input.parentNode.removeChild(this.input);
				delete this.input;
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
			getStringSize: getStringSize,
			wrap: wrap,
			getLabelBox: getLabelBox,
			getLabelBoxForLink: getLabelBoxForLink,
			render: render,
			editor: editor
		};
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Cell2 = __webpack_require__(17);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Link = __webpack_require__(12);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Cache = __webpack_require__(18);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Edge = function (_Cell) {
		_inherits(Edge, _Cell);
	
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
					//this.clearPoints();
				}
			}
		}, {
			key: "getLabelBox",
			value: function getLabelBox(key) {
				var label = this.prop('label');
				if (label) return _Label2.default.getLabelBoxForLink(label, this.viewProp(key, 'labelConfig'), this.getShape(key));
				return null;
			}
	
			/**
	   * Return a pair of points as reference to the calculation of start and end points.
	   */
	
		}, {
			key: "getReferencePoints",
			value: function getReferencePoints(key) {
				var pts = [];
				if (this.source) pts.push(this.source.getShape(key).center);else pts.push(this.viewProp(key, 'start'));
	
				if (this.target) pts.push(this.target.getShape(key).center);else pts.push(this.viewProp(key, 'end'));
	
				return pts;
			}
		}, {
			key: "getTerminalVisual",
			value: function getTerminalVisual(key, orthogonal) {
				var refPts = this.getReferencePoints(key);
				var terminals = [];
	
				var getBound = function getBound(pt) {
					return new _Rectangle2.default(pt.x, pt.y, 3, 3);
				};
	
				if (this.source) {
					terminals.push(this.source.getPort(key, this.prop('sourcePort'), refPts[1], orthogonal));
				} else terminals.push({ point: refPts[0], direction: _Rectangle2.default.getDirection(getBound(refPts[0]), refPts[1], true) });
	
				if (this.target) {
					terminals.push(this.target.getPort(key, this.prop('targetPort'), refPts[0], orthogonal));
				} else terminals.push({ point: refPts[1], direction: _Rectangle2.default.getDirection(getBound(refPts[1]), refPts[0], true) });
				return terminals;
			}
		}, {
			key: "getShape",
			value: function getShape(key) {
				var shape = _Cache2.default.get(this.id + ".shape", key);
				if (shape) return shape;
	
				var config = this.viewProp(key, 'shape');
				shape = _Link2.default.getLink(this.getTerminalVisual(key, config.orthogonal), config, this.prop('startMarker'), this.prop('endMarker'));
				_Cache2.default.set(this.id + '.shape', shape, key);
				return shape;
			}
		}, {
			key: "toString",
			value: function toString() {
				return 'Edge:{' + (!this.source ? 'null' : this.source.id) + '--' + (!this.target ? 'null' : this.target.id) + '}';
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
	}(_Cell3.default);
	
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
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var registry = {};
	
	var Marker = function () {
	
		/** Begin Standard Marker Type **/
		function arrow(size, source, styles) {
			var sign = source ? -1 : 1;
			var marker = {
				viewBox: new _Rectangle2.default(-5, -5, 10, 10),
				size: size,
				ref: [4 * sign, 0],
				fill: styles.color
			};
			marker.shape = {
				name: 'Polygon',
				points: [[-2 * sign, 0], [-4 * sign, 4], [4 * sign, 0], [-4 * sign, -4]]
			};
			return marker;
		}
	
		function triangle(size, source, styles) {
			var sign = source ? -1 : 1;
			var marker = {
				viewBox: new _Rectangle2.default(-5, -5, 10, 10),
				size: size,
				ref: [4 * sign, 0],
				fill: styles.color
			};
			marker.shape = {
				name: 'Polygon',
				points: [[-5 * sign, -5], [-5 * sign, 5], [4 * sign, 0]]
			};
			return marker;
		}
	
		function oval(size, source, styles) {
			var r = size / 2;
			var marker = {
				viewBox: new _Rectangle2.default(-r, -r, size, size),
				size: size,
				ref: [0, 0],
				fill: styles.color
			};
			marker.shape = '<ellipse cx="0" cy="0" rx="' + r + '" ry="' + r + '"></ellipse>';
			return marker;
		}
	
		function diamond(size, source, styles) {
			var sign = source ? -1 : 1;
			var marker = {
				viewBox: new _Rectangle2.default(-5, -5, 10, 10),
				size: size,
				ref: [4 * sign, 0],
				fill: styles.color
			};
			marker.shape = '';
			return marker;
		}
		/** End Standard Marker Type **/
		function getMarker(config, source) {
			var factory = registry[config.type];
			var marker = factory(config.size, source, config);
			marker.id = config.id;
			return marker;
		}
	
		registry['arrow'] = arrow;
		registry['triangle'] = triangle;
		registry['oval'] = oval;
		registry['diamond'] = diamond;
	
		return {
			registry: registry,
			getMarker: getMarker
		};
	}();
	
	exports.default = Marker;

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(3);
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Layout2 = __webpack_require__(22);
	
	var _Layout3 = _interopRequireDefault(_Layout2);
	
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(1);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(3);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(8);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Layout = __webpack_require__(22);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Rectangle = __webpack_require__(5);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _EventDispatcher = __webpack_require__(13);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _GraphBehavior = __webpack_require__(25);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Renderer = function () {
		function Renderer(id, container) {
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			var graph = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
			_classCallCheck(this, Renderer);
	
			this.id = id;
			this.box = _DomUtils2.default.createElement('div', { id: this.id, tabindex: 0, ns: 'graph' }, { overflow: "hidden", width: "100%", height: "100%", position: 'relative' });
			container.appendChild(this.box);
			if (config.layout) {
				var layoutClass = _Utils2.default.getConstructor(config.layout.jsClass, _Layout2.default);
				this.layout = new layoutClass(config.layout.config);
				delete config.layout;
			}
			this.clear = true;
			this._translate = [0, 0];
			this._scale = 1.0;
			this.graph = graph;
			this.dispatcher = null;
			this.graphBehavior = null;
			this.selectionBehavior = null;
			this.nodeBehavior = null;
			this.edgeBehavior = null;
			this.connectionBehavior = null;
			_Utils2.default.initConfig(this, config);
	
			_bean2.default.on(_Label2.default.editor, 'editor.update.*', function (key, value) {
				console.log(key + '=' + value);
			});
		}
	
		_createClass(Renderer, [{
			key: "viewport",
			value: function viewport(scaled, _viewport) {
				if (_lodash2.default.isUndefined(scaled) || _lodash2.default.isNull(scaled)) scaled = false;
				if (!_viewport) {
					var vp = new _Rectangle2.default(0, 0, this.box.offsetWidth, this.box.offsetHeight);
					if (scaled) return _Utils2.default.scale(this.translate, this.scale, vp);
					return vp;
				}
				if (!scaled) _viewport = _Utils2.default.scale(this.translate, this.scale, _viewport);
				var w = this.box.offsetWidth;
				var scale = w / _viewport.width;
				this.transform(-_viewport.x * scale, -_viewport.y * scale, scale);
			}
		}, {
			key: "transform",
			value: function transform() {
				var x = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var y = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
				var scale = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
				var graph = this.graph;
				var root = graph ? graph.currentRoot : null;
				if (!_lodash2.default.isNull(x)) {
					this._translate[0] = x;
					if (root) root.viewProp(this.id, 'x', x);
				}
				if (!_lodash2.default.isNull(y)) {
					this._translate[1] = y;
					if (root) root.viewProp(this.id, 'y', y);
				}
				if (!_lodash2.default.isNull(scale)) {
					this._scale = scale;
					if (root) root.viewProp(this.id, 'scale', scale);
					// sync the scale between the dispatcher and the graph
					var s = this.dispatcher.scale;
					if (s != scale) this.dispatcher.scale = scale;
				}
				this.refresh();
			}
		}, {
			key: "render",
			value: function render() {
				if (!this._graph) return false;
				// intialize views
				if (this.layout) this.layout.layout(this._graph.currentRoot, this.viewport());
	
				// create the event dispatcher if necessary.
				if (!this.dispatcher) {
					this.dispatcher = new _EventDispatcher2.default(this.box, [this.prop('minZoom'), this.prop('maxZoom')]);
					var jsClass = void 0;
					if (this.prop('graphBehavior')) {
						jsClass = _Utils2.default.getConstructor(this.prop('graphBehavior'));
						this.graphBehavior = new jsClass(this);
					}
					this.dispatcher.register('mouseup.node.label', function (type, ns, target, pos, event) {
						var _this = this;
	
						var node = this._graph.nodes[target.getAttribute('id')];
						if (!this.dispatcher.dragging && !node._firstSelection) {
							_Label2.default._delayEdit = _lodash2.default.delay(function () {
								if (_Label2.default._delayEdit) {
									delete _Label2.default._delayEdit;
									_Label2.default.editor.start(node.id, _this.box, node.getLabelBox(_this.id), target, event.nsTarget, _this.scale);
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
		}, {
			key: "renderLabel",
			value: function renderLabel(box) {
				return this.constructor.renderLabel(box);
			}
		}, {
			key: "renderLink",
			value: function renderLink(shape) {
				return this.constructor.renderLink(shape);
			}
		}, {
			key: "renderMarkers",
			value: function renderMarkers(markers) {
				return this.constructor.renderMarkers(markers);
			}
		}, {
			key: "refresh",
			value: function refresh() {}
	
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
				var t = this.constructor.TEMPLATES[key];
				if (t && _lodash2.default.isFunction(t)) {
					t = t(config);
				}
				// check if there are any preprocessing tags.
				if (preprocessor) {
					var parts = t.match(/(#{[^#]*})/g);
					var obj = {};
					for (var part in parts) {
						part = parts[part];
						part = part.substring(2, part.length - 1).trim();
						obj[part] = preprocessor[_lodash2.default.camelCase('render ' + part)](this);
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
			value: function destroy() {
				delete this._graph;
				delete this.layout;
				if (this.dispatcher) {
					this.dispatcher.stop();
					delete this.dispatcher;
				}
				this.box.innerHTML = '';
			}
		}, {
			key: "graph",
			get: function get() {
				return this._graph;
			},
			set: function set(graph) {
				this._graph = graph;
				var root = graph.currentRoot;
				if (root) {
					this._translate = [root.viewProp(this.id, 'x') || 0, root.viewProp(this.id, 'y') || 0];
					this._scale = root.viewProp(this.id, 'scale') || 1.0;
				}
			}
		}, {
			key: "translate",
			get: function get() {
				return this._translate;
			},
			set: function set(t) {
				this.transform(t[0], t[1]);
			}
		}, {
			key: "scale",
			get: function get() {
				return this._scale;
			},
			set: function set(k) {
				switch (k) {
					case "in":
						k = this.scale * this.prop("zoomFactor");
						break;
					case "out":
						k = this.scale / this.prop("zoomFactor");
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
		}]);
	
		return Renderer;
	}();
	
	Renderer.DEFAULTS = {
		defaultClickMode: "pan",
		hideOutline: false,
		singleSelect: true,
		draggable: true,
		gridEnabled: false,
		guidesEnabled: true,
		gridSize: 30,
		maxZoom: 4.0,
		minZoom: 0.2,
		zoomFactor: 1.2,
		maskOpacity: 0.5,
		graphBehavior: _GraphBehavior2.default
	};
	
	exports.default = Renderer;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Behavior2 = __webpack_require__(26);
	
	var _Behavior3 = _interopRequireDefault(_Behavior2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by tong on 6/28/2016.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	/**
	 * Graph handler handles Panning and Zoom and rubber band selection
	 */
	
	var GraphBehavior = function (_Behavior) {
		_inherits(GraphBehavior, _Behavior);
	
		function GraphBehavior(renderer) {
			_classCallCheck(this, GraphBehavior);
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GraphBehavior).call(this, renderer));
	
			var dispatcher = renderer.dispatcher;
			var f = function f(type, ns, graph, pos, event) {
				//Cursor.updateCursor(type, ns, graph, event);
			};
			dispatcher.register('drag*.graph', _this.handleDrag, _this);
			dispatcher.register('zoom.*', _this.handleZoom, _this);
			//dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
			_this.offset = null;
			return _this;
		}
	
		_createClass(GraphBehavior, [{
			key: 'handleZoom',
			value: function handleZoom(type, ns, graph, pos, event) {
				this.renderer.transform(null, null, event.scale);
			}
		}, {
			key: 'handleDrag',
			value: function handleDrag(type, ns, graph, pos, event) {
				if (type == 'dragstart') {
					var pan = this.renderer.prop("defaultClickMode") == "pan" ^ (event.ctrlKey || event.shiftKey);
					if (!pan) return;
					var t = this.renderer.translate;
					this.offset = [t[0] - pos[0], t[1] - pos[1]];
					return;
				}
				if (!this.offset) return;
				this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
				if (type == 'dragend') {
					//Cursor.updateCursor('mouseup', ns, graph, event);
					delete this.offset;
				}
			}
		}]);
	
		return GraphBehavior;
	}(_Behavior3.default);
	
	exports.default = GraphBehavior;

/***/ },
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Behavior = function () {
		function Behavior(renderer) {
			_classCallCheck(this, Behavior);
	
			this.renderer = renderer;
		}
	
		_createClass(Behavior, [{
			key: "destroy",
			value: function destroy() {
				delete this.renderer;
			}
		}]);
	
		return Behavior;
	}();
	
	exports.default = Behavior;

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(6);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _base = __webpack_require__(2);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _DomUtils = __webpack_require__(8);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Renderer2 = __webpack_require__(24);
	
	var _Renderer3 = _interopRequireDefault(_Renderer2);
	
	var _StringBuffer = __webpack_require__(9);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NS = 'http://www.w3.org/2000/svg';
	if (typeof SVGElement != "undefined") {
		var svg = document.createElementNS(NS, "svg");
		svg.innerHTML = '<circle/>';
		if (svg.firstChild !== "[object SVGCircleElement]") {
			Object.defineProperties(SVGElement.prototype, {
				"outerHTML": {
					enumerable: false,
					configurable: true,
					get: function get() {
						var $node, $temp;
						$temp = document.createElement('div');
						$node = this.cloneNode(true);
						$temp.appendChild($node);
						return $temp.innerHTML;
					}
				},
				"innerHTML": {
					enumerable: false,
					configurable: true,
					get: function get() {
						var s = this.outerHTML;
						var ropen = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i");
						var rclose = new RegExp("<\/" + this.nodeName + ">$", "i");
						return s.replace(ropen, "").replace(rclose, "");
					},
					set: function set(markup) {
						// empty el first.
						var child = void 0;
						while (child = this.lastChild) {
							this.removeChild(child);
						}var buf = new _StringBuffer2.default();
						buf.append('<svg>').append(markup).append('</svg');
						var $temp = _DomUtils2.default.createElement('div', null, null, buf.toString()).firstElementChild;
						while ($temp.firstChild) {
							this.appendChild($temp.firstChild);
						}
					}
				}
			});
		}
		// Define the toDataURL for SVG
		SVGElement.prototype.toDataURL = function (type) {
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
			var _svg = this;
	
			var debug = function debug(msg) {};
	
			if (options['debug'] == true && typeof console != 'undefined') debug = function debug(msg) {
				console.log("SVG.toDataURL:", msg);
			};
	
			function exportSVG() {
				var svg_xml = _svg.outerHTML;
				var svg_dataurl = base64dataURLencode(svg_xml);
				debug(type + " length: " + svg_dataurl.length);
	
				// NOTE double data carrier
				if (options.callback) options.callback(svg_dataurl);
				return svg_dataurl;
			}
	
			function base64dataURLencode(s) {
				var b64 = "data:image/svg+xml;base64,";
	
				// https://developer.mozilla.org/en/DOM/window.btoa
				if (window.btoa) {
					debug("using window.btoa for base64 encoding");
					b64 += btoa(s);
				} else {
					debug("using custom base64 encoder");
					b64 += _base2.default.encode(s);
				}
	
				return b64;
			}
	
			// Native export doesn't work very well. should use canvg instead.
			function exportImage(type) {
				var canvas = document.createElement("canvas");
				var ctx = canvas.getContext('2d');
	
				// TODO: if (options.keepOutsideViewport), do some translation magic?
	
				var svg_img = new Image();
				var svg_xml = _svg.outerHTML;
				svg_img.src = base64dataURLencode(svg_xml);
	
				svg_img.onload = function () {
					debug("exported image size: " + [svg_img.width, svg_img.height]);
					canvas.width = svg_img.width;
					canvas.height = svg_img.height;
					ctx.drawImage(svg_img, 0, 0);
	
					// SECURITY_ERR WILL HAPPEN NOW
					var image_dataurl = canvas.toDataURL(type);
					debug(type + " length: " + image_dataurl.length);
	
					if (options.callback) options.callback(image_dataurl);else debug("WARNING: no callback set, so nothing happens.");
				};
	
				svg_img.onerror = function () {
					debug("Can't export! Maybe your browser doesn't support " + "SVG in img element or SVG input for Canvas drawImage?\n" + "http://en.wikipedia.org/wiki/SVG#Native_support");
				};
	
				// NOTE: will not return anything
			}
	
			function exportImageCanvg(type) {
				if (!canvg) return null;
				var canvas = _DomUtils2.default.createElement('canvas', null, { display: "none" });
				document.body.appendChild(canvas);
				if (!options.keepOutsideViewport) {
					canvg(canvas, _svg.outerHTML);
				} else {
					var padding = options.padding || 0;
					var scale = 1.0;
					var translate = [0, 0];
					var bbox = _svg.getBBox();
					debug("detected svg dimensions " + [bbox.x, bbox.y, bbox.width, bbox.height]);
					var transform = _svg.firstElementChild.getAttribute('transform');
					if (transform) {
						debug('detected svg transform ' + transform);
						transform = SVGRenderer.transform(transform);
						translate = transform.translate;
						scale = transform.scale;
					}
					var buf = new _StringBuffer2.default();
					buf.append('<svg width="').append(bbox.width + 2 * padding).append('px" height="').append(bbox.height + 2 * padding).append('px"><g transform="translate(').append(-bbox.x + translate[0] + padding).append(',').append(-bbox.y + translate[1] + padding).append(')scale(').append(scale).append(')">').append(_svg.firstElementChild.innerHTML).append('</g></svg>');
					canvg(canvas, buf.toString());
				}
				var image_dataurl = canvas.toDataURL(type);
				if (options.callback) options.callback(image_dataurl);
				canvas.parentNode.removeChild(canvas);
				return image_dataurl;
			}
	
			if (!type) type = "image/svg+xml";
	
			if (options.keepNonSafe) debug("NOTE: keepNonSafe is NOT supported and will be ignored!");
			if (options.keepOutsideViewport) debug("NOTE: keepOutsideViewport is only supported with canvg exporter.");
	
			switch (type) {
				case "image/svg+xml":
					return exportSVG();
				case "image/png":
				case "image/jpeg":
					if (!options.renderer) {
						if (window.canvg) options.renderer = "canvg";else options.renderer = "native";
					}
					switch (options.renderer) {
						case "canvg":
							debug("using canvg renderer for " + type + " image export");
							return exportImageCanvg(type);
						case "native":
							debug("using native renderer for " + type + " export. THIS MIGHT FAIL.");
							return exportImage(type);
						default:
							debug("unknown image renderer given, doing noting (" + options.renderer + ")");
					}
					break;
				default:
					debug("Sorry! Exporting as '" + type + "' is not supported!");
			}
			return null;
		};
	}
	
	var SVGRenderer = function (_Renderer) {
		_inherits(SVGRenderer, _Renderer);
	
		function SVGRenderer() {
			_classCallCheck(this, SVGRenderer);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SVGRenderer).apply(this, arguments));
		}
	
		_createClass(SVGRenderer, [{
			key: "render",
			value: function render() {
				var result = _get(Object.getPrototypeOf(SVGRenderer.prototype), "render", this).call(this);
				if (result) {
					var root = this.graph.currentRoot;
					var buf = new _StringBuffer2.default('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">');
					var t = this.translate;
					buf.append('<g transform="translate(').append(t[0]).append(',').append(t[1]).append(')scale(').append(this.scale).append(')">');
					buf.append(this.renderDefs());
					buf.append(root.render(this));
					buf.append('</g></svg>');
					this.box.innerHTML = buf.toString();
					this.svg = this.box.firstElementChild;
				}
			}
		}, {
			key: "renderDefs",
			value: function renderDefs() {
				var buf = new _StringBuffer2.default('<defs>');
				buf.append(this.getTemplate('Grid', this.prop("gridSize")));
				var markers = this.graph.markers;
				if (markers.length > 0) buf.append(SVGRenderer.renderMarkers(markers));
				buf.append('</defs>');
				return buf.toString();
			}
		}, {
			key: "refresh",
			value: function refresh() {
				if (!this.svg) return;
				var g = this.svg.querySelector('g');
				var t = this.translate;
				g.setAttribute('transform', 'translate(' + t[0] + ',' + t[1] + ')scale(' + this.scale + ')');
			}
		}], [{
			key: "renderMarkers",
			value: function renderMarkers(markers) {
				var buf = new _StringBuffer2.default(),
				    str1 = void 0,
				    str2 = void 0;
				markers.forEach(function (marker) {
					str1 = this.TEMPLATES['Marker'](marker);
					str2 = marker.shape;
					if (!_lodash2.default.isString(str2)) str2 = this.renderShape(str2);
					str1 = str1.replace(/\#\{shape\}/, str2);
					buf.append(str1);
				}, this);
				return buf.toString();
			}
		}, {
			key: "renderLabel",
			value: function renderLabel(box) {
				return this.TEMPLATES['Label'](box);
			}
		}, {
			key: "renderShape",
			value: function renderShape(shape) {
				var template = this.TEMPLATES[shape.name];
				if (_lodash2.default.isString(template)) template = _lodash2.default.template(template);
				return template(shape);
			}
		}, {
			key: "renderLink",
			value: function renderLink(shape) {
				var points = shape.points;
				var controlPts = shape.controlPts;
				if (!points || points.length == 0) return '';
	
				if (!controlPts && shape.round) {
					// render rounded line joins.
					var newPts = [];
					controlPts = [];
					var prev = points[0],
					    next = void 0,
					    d1 = void 0,
					    d2 = void 0,
					    corner = void 0;
					newPts.push(prev);
					for (var i = 1; i < points.length - 1; i++) {
						next = points[i];
						// set the control point first.
						controlPts[2 * i] = [next, next];
						// check the size of the corner.
						d1 = prev.distance(next);
						d2 = next.distance(points[i + 1]);
						corner = Math.min(shape.round, d1 / 2, d2 / 2);
						// split the point into two.
						newPts.push(next.getDirection(prev).scale(corner).translate(next));
						newPts.push(next.getDirection(points[i + 1]).scale(corner).translate(next));
						prev = next;
					}
					newPts.push(points[points.length - 1]);
					points = newPts;
				}
				var buf = new _StringBuffer2.default('M'),
				    point = void 0;
				for (var _i = 0; _i < points.length; _i++) {
					point = points[_i];
					if (_i == 0) buf.append(point);else {
						if (controlPts && controlPts[_i]) {
							buf.append(' C ');
							for (var j = 0; j < controlPts[_i].length; j++) {
								buf.append(controlPts[_i][j]).append(' ');
							}buf.append(point);
						} else buf.append(' L ').append(point);
					}
				}
				var d = buf.toString();
				buf.clear();
				if (shape.showGauge) buf.append('<path style="stroke: white; stroke-width: 9; visibility: hidden; pointer-events: stroke;" d="').append(d).append('"/>');
				buf.append('<path d="').append(d).append('"');
				if (shape.startMarker || shape.endMarker) {
					buf.append(' style="');
					if (shape.startMarker) buf.append('marker-start: url(#').append(_lodash2.default.isString(shape.startMarker) ? shape.startMarker : shape.startMarker.id).append(');');
					if (shape.endMarker) buf.append('marker-end: url(#').append(_lodash2.default.isString(shape.endMarker) ? shape.endMarker : shape.endMarker.id).append(');');
					buf.append('"');
				}
				buf.append('/>');
				return buf.toString();
			}
		}, {
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
			key: "transform",
			value: function transform(_transform) {
				var translate = [0, 0],
				    scale = 1.0;
				//
				var parts = _transform.match(/translate\(\s*([^)]+)/);
				if (parts) {
					var m = parts[1].trim().match(/([\d.-]+)[ ,]([\d.-]+)/);
					if (m) {
						translate[0] = parseFloat(m[1]) || 0;
						translate[1] = parseFloat(m[2]) || 0;
					} else translate[0] = translate[1] = parseFloat(parts[1]);
				}
				parts = _transform.match(/scale\(\s*([^)]+)/);
				if (parts) scale = parseFloat(parts[1]) || 1.0;
	
				return { translate: translate, scale: scale };
			}
		}]);
	
		return SVGRenderer;
	}(_Renderer3.default);
	
	SVGRenderer.TEMPLATES = {
		$root: '<g id="${id}" class="${className}">#{children}</g>',
		$node: '<g id="${id}" class="${className}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
		$edge: '<g id="${id}" class="${className}" ns="${namespace}">#{shape}#{label}</g>',
		Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"/>',
		Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"/>',
		Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"/>',
		Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"/>',
		Hexagon: function Hexagon(config) {
			var vertical = config.direction == 'north' || config.direction == 'south';
			if (vertical) return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"/>';else return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"/>';
		},
		Polygon: function Polygon(shape) {
			var buf = new _StringBuffer2.default('<polygon points="');
			shape.points.forEach(function (pt) {
				buf.append(pt[0]).append(',').append(pt[1]).append(' ');
			});
			buf.removeLast();
			buf.append('"/>');
			return buf.toString();
		},
		Image: function Image(config) {
			return '<image x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + config.image + '"/>';
		},
		Marker: function Marker(marker) {
			return ("\n<marker id=\"" + marker.id + "\" markerWidth=\"" + marker.size + "\" markerHeight=\"" + marker.size + "\" refx=\"" + marker.ref[0] + "\" \nrefy=\"" + marker.ref[1] + "\" orient=\"auto\" viewbox=\"" + marker.viewBox.x + " " + marker.viewBox.y + " " + marker.viewBox.width + " " + marker.viewBox.height + "\"\nmarkerUnits=\"userSpaceOnUse\" " + (marker.fill ? "style=\"stroke: " + marker.fill + ";fill:" + marker.fill + "\"" : '') + ">#{shape}</marker>\n").trim();
		},
		Grid: function Grid(size) {
			return ("\n<pattern id=\"GridPattern\" width=\"" + size + "\" height=\"" + size + "\" patternUnits=\"userSpaceOnUse\">\n\t<ellipse cx=\"0\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"0\" cy=\"" + size + "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"" + size + "\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"" + size + "\" cy=\"" + size + "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n</pattern>").trim();
		},
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundStyle) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" })
	};
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlMDdmZjQ5ODAxOWU5NTg1MTQxNiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdkLHdCQUhjO0FBSWQsd0JBSmM7QUFLZCw4QkFMYztBQU1kLHNDQU5jO0FBT2Qsd0JBUGM7QUFRZCxz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QUFKLENBQVcsS0FBWDtBQUNBLFVBQU8sSUFBSSxRQUFKLEVBQVA7QUFDQSxHQXZCc0I7QUF3QnZCLFNBQU8sZUFBUyxNQUFULEVBQWlCO0FBQ3ZCLFVBQU8sd0lBQXdJLE9BQU8sS0FBL0ksR0FBdUosS0FBOUo7QUFDQSxHQTFCc0I7QUEyQnZCLFVBQVEsZ0JBQVMsTUFBVCxFQUFpQjtBQUN4QixVQUFPLHFCQUNLLE9BQU8sRUFEWix5QkFDZ0MsT0FBTyxJQUR2QywwQkFDOEQsT0FBTyxJQURyRSxrQkFDb0YsT0FBTyxHQUFQLENBQVcsQ0FBWCxDQURwRixvQkFFRCxPQUFPLEdBQVAsQ0FBVyxDQUFYLENBRkMscUNBRXdDLE9BQU8sT0FBUCxDQUFlLENBRnZELFNBRTRELE9BQU8sT0FBUCxDQUFlLENBRjNFLFNBRWdGLE9BQU8sT0FBUCxDQUFlLEtBRi9GLFNBRXdHLE9BQU8sT0FBUCxDQUFlLE1BRnZILDRDQUdzQixPQUFPLElBQVAsd0JBQWdDLE9BQU8sSUFBdkMsY0FBb0QsT0FBTyxJQUEzRCxVQUFxRSxFQUgzRiw0QkFJUCxJQUpPLEVBQVA7QUFLQSxHQWpDc0I7QUFrQ3ZCLFFBQU0sY0FBUyxJQUFULEVBQWU7QUFDcEIsVUFBTyw0Q0FDMEIsSUFEMUIsb0JBQzJDLElBRDNDLHlJQUdjLElBSGQsaUVBSU8sSUFKUCwwRUFLTyxJQUxQLGdCQUtvQixJQUxwQiwwREFNRyxJQU5ILEVBQVA7QUFPQSxHQTFDc0I7QUEyQ3ZCLFNBQU8saUJBQUUsUUFBRixDQUFXLGdqQ0FrQmpCLElBbEJpQixFQUFYLEVBa0JFLEVBQUMsVUFBVSxNQUFYLEVBbEJGO0FBM0NnQixFQUF4Qjs7bUJBZ0VlLFciLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV82X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGUwN2ZmNDk4MDE5ZTk1ODUxNDE2XG4gKiovIiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi91dGlsL2Jhc2U2NFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5cblNoYXBlLmFkZFNoYXBlKFwiUmVjdGFuZ2xlXCIsIFJlY3RhbmdsZSk7XG5TaGFwZS5hZGRTaGFwZShcIkVsbGlwc2VcIiwgRWxsaXBzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RXZlbnRzLFxuXHRCYXNlNjQsXG5cdENhY2hlLFxuXHRVdGlscyxcblx0RG9tVXRpbHMsXG5cdFN0cmluZ0J1ZmZlcixcblx0UG9pbnQsXG5cdExpbmUsXG5cdFNoYXBlLFxuXHRSZWN0YW5nbGUsXG5cdEVsbGlwc2UsXG5cdExpbmssXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0TGFiZWwsXG5cdE1hcmtlcixcblx0R3JhcGgsXG5cdENlbGwsXG5cdE5vZGUsXG5cdEVkZ2UsXG5cdExheW91dCxcblx0Rmxvd0xheW91dCxcblx0UmVuZGVyZXIsXG5cdFNWR1JlbmRlcmVyLFxuXHRHcmFwaEJlaGF2aW9yXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKiFcbiAgKiBCZWFuIC0gY29weXJpZ2h0IChjKSBKYWNvYiBUaG9ybnRvbiAyMDExLTIwMTJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmF0L2JlYW5cbiAgKiBNSVQgbGljZW5zZVxuICAqL1xuKGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSkoJ2JlYW4nLCB0aGlzLCBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xuICBuYW1lICAgID0gbmFtZSAgICB8fCAnYmVhbidcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuXG4gIHZhciB3aW4gICAgICAgICAgICA9IHdpbmRvd1xuICAgICwgb2xkICAgICAgICAgICAgPSBjb250ZXh0W25hbWVdXG4gICAgLCBuYW1lc3BhY2VSZWdleCA9IC9bXlxcLl0qKD89XFwuLiopXFwufC4qL1xuICAgICwgbmFtZVJlZ2V4ICAgICAgPSAvXFwuLiovXG4gICAgLCBhZGRFdmVudCAgICAgICA9ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgICwgcmVtb3ZlRXZlbnQgICAgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAsIGRvYyAgICAgICAgICAgID0gZG9jdW1lbnQgfHwge31cbiAgICAsIHJvb3QgICAgICAgICAgID0gZG9jLmRvY3VtZW50RWxlbWVudCB8fCB7fVxuICAgICwgVzNDX01PREVMICAgICAgPSByb290W2FkZEV2ZW50XVxuICAgICwgZXZlbnRTdXBwb3J0ICAgPSBXM0NfTU9ERUwgPyBhZGRFdmVudCA6ICdhdHRhY2hFdmVudCdcbiAgICAsIE9ORSAgICAgICAgICAgID0ge30gLy8gc2luZ2xldG9uIGZvciBxdWljayBtYXRjaGluZyBtYWtpbmcgYWRkKCkgZG8gb25lKClcblxuICAgICwgc2xpY2UgICAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAsIHN0cjJhcnIgICAgICAgID0gZnVuY3Rpb24gKHMsIGQpIHsgcmV0dXJuIHMuc3BsaXQoZCB8fCAnICcpIH1cbiAgICAsIGlzU3RyaW5nICAgICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdzdHJpbmcnIH1cbiAgICAsIGlzRnVuY3Rpb24gICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdmdW5jdGlvbicgfVxuXG4gICAgICAvLyBldmVudHMgdGhhdCB3ZSBjb25zaWRlciB0byBiZSAnbmF0aXZlJywgYW55dGhpbmcgbm90IGluIHRoaXMgbGlzdCB3aWxsXG4gICAgICAvLyBiZSB0cmVhdGVkIGFzIGEgY3VzdG9tIGV2ZW50XG4gICAgLCBzdGFuZGFyZE5hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdjbGljayBkYmxjbGljayBtb3VzZXVwIG1vdXNlZG93biBjb250ZXh0bWVudSAnICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdtb3VzZXdoZWVsIG1vdXNlbXVsdGl3aGVlbCBET01Nb3VzZVNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSB3aGVlbFxuICAgICAgICAnbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBzZWxlY3RzdGFydCBzZWxlY3RlbmQgJyAgICAgICAgICAgICsgLy8gbW91c2UgbW92ZW1lbnRcbiAgICAgICAgJ2tleWRvd24ga2V5cHJlc3Mga2V5dXAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGtleWJvYXJkXG4gICAgICAgICdvcmllbnRhdGlvbmNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb2JpbGVcbiAgICAgICAgJ2ZvY3VzIGJsdXIgY2hhbmdlIHJlc2V0IHNlbGVjdCBzdWJtaXQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ2xvYWQgdW5sb2FkIGJlZm9yZXVubG9hZCByZXNpemUgbW92ZSBET01Db250ZW50TG9hZGVkICcgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBtZXNzYWdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdlcnJvciBhYm9ydCBzY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaXNjXG4gICAgICAvLyBlbGVtZW50LmZpcmVFdmVudCgnb25YWVonLi4uIGlzIG5vdCBmb3JnaXZpbmcgaWYgd2UgdHJ5IHRvIGZpcmUgYW4gZXZlbnRcbiAgICAgIC8vIHRoYXQgZG9lc24ndCBhY3R1YWxseSBleGlzdCwgc28gbWFrZSBzdXJlIHdlIG9ubHkgZG8gdGhlc2Ugb24gbmV3ZXIgYnJvd3NlcnNcbiAgICAsIHczY05hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdzaG93ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdpbnB1dCBpbnZhbGlkICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyB0b3VjaFxuICAgICAgICAnZ2VzdHVyZXN0YXJ0IGdlc3R1cmVjaGFuZ2UgZ2VzdHVyZWVuZCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZ2VzdHVyZVxuICAgICAgICAndGV4dGlucHV0ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gVGV4dEV2ZW50XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIHBhZ2VzaG93IHBhZ2VoaWRlIHBvcHN0YXRlICcgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2hhc2hjaGFuZ2Ugb2ZmbGluZSBvbmxpbmUgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnYWZ0ZXJwcmludCBiZWZvcmVwcmludCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gcHJpbnRpbmdcbiAgICAgICAgJ2RyYWdzdGFydCBkcmFnZW50ZXIgZHJhZ292ZXIgZHJhZ2xlYXZlIGRyYWcgZHJvcCBkcmFnZW5kICcgICAgICArIC8vIGRuZFxuICAgICAgICAnbG9hZHN0YXJ0IHByb2dyZXNzIHN1c3BlbmQgZW1wdGllZCBzdGFsbGVkIGxvYWRtZXRhZGF0YSAnICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2xvYWRlZGRhdGEgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBwbGF5aW5nIHdhaXRpbmcgc2Vla2luZyAnICAgICArIC8vIG1lZGlhXG4gICAgICAgICdzZWVrZWQgZW5kZWQgZHVyYXRpb25jaGFuZ2UgdGltZXVwZGF0ZSBwbGF5IHBhdXNlIHJhdGVjaGFuZ2UgJyAgKyAvLyBtZWRpYVxuICAgICAgICAndm9sdW1lY2hhbmdlIGN1ZWNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2NoZWNraW5nIG5vdXBkYXRlIGRvd25sb2FkaW5nIGNhY2hlZCB1cGRhdGVyZWFkeSBvYnNvbGV0ZSAnICAgICAgIC8vIGFwcGNhY2hlXG5cbiAgICAgIC8vIGNvbnZlcnQgdG8gYSBoYXNoIGZvciBxdWljayBsb29rdXBzXG4gICAgLCBuYXRpdmVFdmVudHMgPSAoZnVuY3Rpb24gKGhhc2gsIGV2ZW50cywgaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSBldmVudHNbaV0gJiYgKGhhc2hbZXZlbnRzW2ldXSA9IDEpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgICB9KHt9LCBzdHIyYXJyKHN0YW5kYXJkTmF0aXZlRXZlbnRzICsgKFczQ19NT0RFTCA/IHczY05hdGl2ZUV2ZW50cyA6ICcnKSkpKVxuXG4gICAgICAvLyBjdXN0b20gZXZlbnRzIGFyZSBldmVudHMgdGhhdCB3ZSAqZmFrZSosIHRoZXkgYXJlIG5vdCBwcm92aWRlZCBuYXRpdmVseSBidXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgbmF0aXZlIGV2ZW50cyB0byBnZW5lcmF0ZSB0aGVtXG4gICAgLCBjdXN0b21FdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9ICdjb21wYXJlRG9jdW1lbnRQb3NpdGlvbicgaW4gcm9vdFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIDE2KSA9PT0gMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogJ2NvbnRhaW5zJyBpbiByb290XG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSB8fCBjb250YWluZXIgPT09IHdpbmRvdyA/IHJvb3QgOiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLCBjaGVjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgcmV0dXJuICFyZWxhdGVkXG4gICAgICAgICAgICAgICAgPyByZWxhdGVkID09IG51bGxcbiAgICAgICAgICAgICAgICA6IChyZWxhdGVkICE9PSB0aGlzICYmIHJlbGF0ZWQucHJlZml4ICE9PSAneHVsJyAmJiAhL2RvY3VtZW50Ly50ZXN0KHRoaXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgJiYgIWlzQW5jZXN0b3IocmVsYXRlZCwgdGhpcykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IHsgYmFzZTogJ21vdXNlb3ZlcicsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2VsZWF2ZTogeyBiYXNlOiAnbW91c2VvdXQnLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNld2hlZWw6IHsgYmFzZTogL0ZpcmVmb3gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnIH1cbiAgICAgICAgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBwcm92aWRlIGEgY29uc2lzdGVudCBFdmVudCBvYmplY3QgYWNyb3NzIGJyb3dzZXJzIGJ5IHRha2luZyB0aGUgYWN0dWFsIERPTVxuICAgICAgLy8gZXZlbnQgb2JqZWN0IGFuZCBnZW5lcmF0aW5nIGEgbmV3IG9uZSBmcm9tIGl0cyBwcm9wZXJ0aWVzLlxuICAgICwgRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gYSB3aGl0ZWxpc3Qgb2YgcHJvcGVydGllcyAoZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcykgdGVsbHMgdXMgd2hhdCB0byBjaGVjayBmb3IgYW5kIGNvcHlcbiAgICAgICAgdmFyIGNvbW1vblByb3BzICA9IHN0cjJhcnIoJ2FsdEtleSBhdHRyQ2hhbmdlIGF0dHJOYW1lIGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgJyArXG4gICAgICAgICAgICAgICdkZXRhaWwgZXZlbnRQaGFzZSBnZXRNb2RpZmllclN0YXRlIGlzVHJ1c3RlZCBtZXRhS2V5IHJlbGF0ZWROb2RlIHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgJyAgK1xuICAgICAgICAgICAgICAnc3JjRWxlbWVudCB0YXJnZXQgdGltZVN0YW1wIHR5cGUgdmlldyB3aGljaCBwcm9wZXJ0eU5hbWUnKVxuICAgICAgICAgICwgbW91c2VQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2J1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBkYXRhVHJhbnNmZXIgJyAgICAgICtcbiAgICAgICAgICAgICAgJ2Zyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50JykpXG4gICAgICAgICAgLCBtb3VzZVdoZWVsUHJvcHMgPSBtb3VzZVByb3BzLmNvbmNhdChzdHIyYXJyKCd3aGVlbERlbHRhIHdoZWVsRGVsdGFYIHdoZWVsRGVsdGFZIHdoZWVsRGVsdGFaICcgK1xuICAgICAgICAgICAgICAnYXhpcycpKSAvLyAnYXhpcycgaXMgRkYgc3BlY2lmaWNcbiAgICAgICAgICAsIGtleVByb3BzICAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlIGtleUlkZW50aWZpZXIgJyAgICAgICAgICArXG4gICAgICAgICAgICAgICdrZXlMb2NhdGlvbiBsb2NhdGlvbicpKVxuICAgICAgICAgICwgdGV4dFByb3BzICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEnKSlcbiAgICAgICAgICAsIHRvdWNoUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCd0b3VjaGVzIHRhcmdldFRvdWNoZXMgY2hhbmdlZFRvdWNoZXMgc2NhbGUgcm90YXRpb24nKSlcbiAgICAgICAgICAsIG1lc3NhZ2VQcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhIG9yaWdpbiBzb3VyY2UnKSlcbiAgICAgICAgICAsIHN0YXRlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdzdGF0ZScpKVxuICAgICAgICAgICwgb3Zlck91dFJlZ2V4ID0gL292ZXJ8b3V0L1xuICAgICAgICAgICAgLy8gc29tZSBldmVudCB0eXBlcyBuZWVkIHNwZWNpYWwgaGFuZGxpbmcgYW5kIHNvbWUgbmVlZCBzcGVjaWFsIHByb3BlcnRpZXMsIGRvIHRoYXQgYWxsIGhlcmVcbiAgICAgICAgICAsIHR5cGVGaXhlcnMgICA9IFtcbiAgICAgICAgICAgICAgICB7IC8vIGtleSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAva2V5L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQua2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9jbGlja3xtb3VzZSg/ISguKndoZWVsfHNjcm9sbCkpfG1lbnV8ZHJhZ3xkcm9wL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50LCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnBvcyA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnBhZ2VZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WCArIGRvYy5ib2R5LnNjcm9sbExlZnQgKyByb290LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZICsgZG9jLmJvZHkuc2Nyb2xsVG9wICsgcm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJPdXRSZWdleC50ZXN0KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBldmVudFsodHlwZSA9PSAnbW91c2VvdmVyJyA/ICdmcm9tJyA6ICd0bycpICsgJ0VsZW1lbnQnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2Ugd2hlZWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL21vdXNlLiood2hlZWx8c2Nyb2xsKS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VXaGVlbFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBUZXh0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRleHQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHRQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gdG91Y2ggYW5kIGdlc3R1cmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150b3VjaHxeZ2VzdHVyZS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG91Y2hQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbWVzc2FnZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXm1lc3NhZ2UkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZXNzYWdlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHBvcHN0YXRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ecG9wc3RhdGUkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvLiovXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tbW9uUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAsIHR5cGVGaXhlck1hcCA9IHt9IC8vIHVzZWQgdG8gbWFwIGV2ZW50IHR5cGVzIHRvIGZpeGVyIGZ1bmN0aW9ucyAoYWJvdmUpLCBhIGJhc2ljIGNhY2hlIG1lY2hhbmlzbVxuXG4gICAgICAgICAgLCBFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCAoKGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQpLnBhcmVudFdpbmRvdyB8fCB3aW4pLmV2ZW50XG4gICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50XG4gICAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICAgPSBpc05hdGl2ZVxuICAgICAgICAgICAgICB0aGlzLmlzQmVhbiAgICAgICAgID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQpIHJldHVyblxuXG4gICAgICAgICAgICAgIHZhciB0eXBlICAgPSBldmVudC50eXBlXG4gICAgICAgICAgICAgICAgLCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxuICAgICAgICAgICAgICAgICwgaSwgbCwgcCwgcHJvcHMsIGZpeGVyXG5cbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gdGFyZ2V0LnBhcmVudE5vZGUgOiB0YXJnZXRcblxuICAgICAgICAgICAgICBpZiAoaXNOYXRpdmUpIHsgLy8gd2Ugb25seSBuZWVkIGJhc2ljIGF1Z21lbnRhdGlvbiBvbiBjdXN0b20gZXZlbnRzLCB0aGUgcmVzdCBleHBlbnNpdmUgJiBwb2ludGxlc3NcbiAgICAgICAgICAgICAgICBmaXhlciA9IHR5cGVGaXhlck1hcFt0eXBlXVxuICAgICAgICAgICAgICAgIGlmICghZml4ZXIpIHsgLy8gaGF2ZW4ndCBlbmNvdW50ZXJlZCB0aGlzIGV2ZW50IHR5cGUgYmVmb3JlLCBtYXAgYSBmaXhlciBmdW5jdGlvbiBmb3IgaXRcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSB0eXBlRml4ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZUZpeGVyc1tpXS5yZWcudGVzdCh0eXBlKSkgeyAvLyBndWFyYW50ZWVkIHRvIG1hdGNoIGF0IGxlYXN0IG9uZSwgbGFzdCBpcyAuKlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVGaXhlck1hcFt0eXBlXSA9IGZpeGVyID0gdHlwZUZpeGVyc1tpXS5maXhcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBmaXhlcihldmVudCwgdGhpcywgdHlwZSlcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBwcm9wcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKChwID0gcHJvcHNbaV0pIGluIHRoaXMpICYmIHAgaW4gZXZlbnQpIHRoaXNbcF0gPSBldmVudFtwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgYW5kIHN0b3BQcm9wYWdhdGlvbigpIGFyZSBhIGNvbnNpc3RlbnQgaW50ZXJmYWNlIHRvIHRob3NlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBvbiB0aGUgRE9NLCBzdG9wKCkgaXMgYW4gYWxpYXMgZm9yIGJvdGggb2YgdGhlbSB0b2dldGhlclxuICAgICAgICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCkgdGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIHRvIGJlIGhhbmRsZWQgaW50ZXJuYWxseSBiZWNhdXNlIHdlIG1hbmFnZSB0aGUgZXZlbnQgbGlzdCBmb3JcbiAgICAgICAgLy8gZWFjaCBlbGVtZW50XG4gICAgICAgIC8vIG5vdGUgdGhhdCBvcmlnaW5hbEVsZW1lbnQgbWF5IGJlIGEgQmVhbiNFdmVudCBvYmplY3QgaW4gc29tZSBzaXR1YXRpb25zXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCAmJiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGlzIHJpcGUgZm9yIG9wdGltaXNhdGlvbiwgbmV3IGV2ZW50cyBhcmUgKmV4cGVuc2l2ZSpcbiAgICAgICAgICAvLyBpbXByb3ZpbmcgdGhpcyB3aWxsIHNwZWVkIHVwIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICB2YXIgbmUgPSBuZXcgRXZlbnQodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLmlzTmF0aXZlKVxuICAgICAgICAgIG5lLmN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0XG4gICAgICAgICAgcmV0dXJuIG5lXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRXZlbnRcbiAgICAgIH0oKSlcblxuICAgICAgLy8gaWYgd2UncmUgaW4gb2xkIElFIHdlIGNhbid0IGRvIG9ucHJvcGVydHljaGFuZ2Ugb24gZG9jIG9yIHdpbiBzbyB3ZSB1c2UgZG9jLmRvY3VtZW50RWxlbWVudCBmb3IgYm90aFxuICAgICwgdGFyZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICByZXR1cm4gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgKGVsZW1lbnQgPT09IGRvYyB8fCBlbGVtZW50ID09PSB3aW4pID8gcm9vdCA6IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogQmVhbiBtYWludGFpbnMgYW4gaW50ZXJuYWwgcmVnaXN0cnkgZm9yIGV2ZW50IGxpc3RlbmVycy4gV2UgZG9uJ3QgdG91Y2ggZWxlbWVudHMsIG9iamVjdHNcbiAgICAgICAgKiBvciBmdW5jdGlvbnMgdG8gaWRlbnRpZnkgdGhlbSwgaW5zdGVhZCB3ZSBzdG9yZSBldmVyeXRoaW5nIGluIHRoZSByZWdpc3RyeS5cbiAgICAgICAgKiBFYWNoIGV2ZW50IGxpc3RlbmVyIGhhcyBhIFJlZ0VudHJ5IG9iamVjdCwgd2UgaGF2ZSBvbmUgJ3JlZ2lzdHJ5JyBmb3IgdGhlIHdob2xlIGluc3RhbmNlLlxuICAgICAgICAqL1xuICAgICwgUmVnRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlYWNoIGhhbmRsZXIgaXMgd3JhcHBlZCBzbyB3ZSBjYW4gaGFuZGxlIGRlbGVnYXRpb24gYW5kIGN1c3RvbSBldmVudHNcbiAgICAgICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuLCBjb25kaXRpb24sIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gKGV2ZW50LCBlYXJncykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIGFyZ3MgPyBzbGljZS5jYWxsKGVhcmdzLCBldmVudCA/IDAgOiAxKS5jb25jYXQoYXJncykgOiBlYXJncylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgZmluZFRhcmdldCA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uX19iZWFuRGVsID8gZm4uX19iZWFuRGVsLmZ0KGV2ZW50LnRhcmdldCwgZWxlbWVudCkgOiBldmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgaGFuZGxlciA9IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZFRhcmdldChldmVudCwgdGhpcykgLy8gZGVsZWF0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZm4uX19iZWFuRGVsKSBldmVudCA9IGV2ZW50LmNsb25lKGZpbmRUYXJnZXQoZXZlbnQpKSAvLyBkZWxlZ2F0ZWQgZXZlbnQsIGZpeCB0aGUgZml4XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSBmbi5fX2JlYW5EZWxcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICAgfVxuXG4gICAgICAgICwgUmVnRW50cnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwsIG5hbWVzcGFjZXMsIGFyZ3MsIHJvb3QpIHtcbiAgICAgICAgICAgIHZhciBjdXN0b21UeXBlICAgICA9IGN1c3RvbUV2ZW50c1t0eXBlXVxuICAgICAgICAgICAgICAsIGlzTmF0aXZlXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICd1bmxvYWQnKSB7XG4gICAgICAgICAgICAgIC8vIHNlbGYgY2xlYW4tdXBcbiAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UocmVtb3ZlTGlzdGVuZXIsIGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VzdG9tVHlwZSkge1xuICAgICAgICAgICAgICBpZiAoY3VzdG9tVHlwZS5jb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY3VzdG9tVHlwZS5jb25kaXRpb24sIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHlwZSA9IGN1c3RvbVR5cGUuYmFzZSB8fCB0eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICA9IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzW3R5cGVdICYmICEhZWxlbWVudFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVR5cGUgICAgPSAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiB0eXBlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLnR5cGUgICAgICAgICAgPSB0eXBlXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsICAgICAgPSBvcmlnaW5hbFxuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2VzICAgID0gbmFtZXNwYWNlc1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgICAgID0gVzNDX01PREVMIHx8IGlzTmF0aXZlID8gdHlwZSA6ICdwcm9wZXJ0eWNoYW5nZSdcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICAgICAgICA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgICAgICB0aGlzW2V2ZW50U3VwcG9ydF0gPSAhIXRoaXMudGFyZ2V0W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMucm9vdCAgICAgICAgICA9IHJvb3RcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciAgICAgICA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIGdpdmVuIGEgbGlzdCBvZiBuYW1lc3BhY2VzLCBpcyBvdXIgZW50cnkgaW4gYW55IG9mIHRoZW0/XG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5pbk5hbWVzcGFjZXMgPSBmdW5jdGlvbiAoY2hlY2tOYW1lc3BhY2VzKSB7XG4gICAgICAgICAgdmFyIGksIGosIGMgPSAwXG4gICAgICAgICAgaWYgKCFjaGVja05hbWVzcGFjZXMpIHJldHVybiB0cnVlXG4gICAgICAgICAgaWYgKCF0aGlzLm5hbWVzcGFjZXMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGZvciAoaSA9IGNoZWNrTmFtZXNwYWNlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IHRoaXMubmFtZXNwYWNlcy5sZW5ndGg7IGotLTspIHtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrTmFtZXNwYWNlc1tpXSA9PSB0aGlzLm5hbWVzcGFjZXNbal0pIGMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aCA9PT0gY1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggYnkgZWxlbWVudCwgb3JpZ2luYWwgZm4gKG9wdCksIGhhbmRsZXIgZm4gKG9wdClcbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAoY2hlY2tFbGVtZW50LCBjaGVja09yaWdpbmFsLCBjaGVja0hhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50ID09PSBjaGVja0VsZW1lbnQgJiZcbiAgICAgICAgICAgICghY2hlY2tPcmlnaW5hbCB8fCB0aGlzLm9yaWdpbmFsID09PSBjaGVja09yaWdpbmFsKSAmJlxuICAgICAgICAgICAgKCFjaGVja0hhbmRsZXIgfHwgdGhpcy5oYW5kbGVyID09PSBjaGVja0hhbmRsZXIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVnRW50cnlcbiAgICAgIH0oKSlcblxuICAgICwgcmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvdXIgbWFwIHN0b3JlcyBhcnJheXMgYnkgZXZlbnQgdHlwZSwganVzdCBiZWNhdXNlIGl0J3MgYmV0dGVyIHRoYW4gc3RvcmluZ1xuICAgICAgICAvLyBldmVyeXRoaW5nIGluIGEgc2luZ2xlIGFycmF5LlxuICAgICAgICAvLyB1c2VzICckJyBhcyBhIHByZWZpeCBmb3IgdGhlIGtleXMgZm9yIHNhZmV0eSBhbmQgJ3InIGFzIGEgc3BlY2lhbCBwcmVmaXggZm9yXG4gICAgICAgIC8vIHJvb3RMaXN0ZW5lcnMgc28gd2UgY2FuIGxvb2sgdGhlbSB1cCBmYXN0XG4gICAgICAgIHZhciBtYXAgPSB7fVxuXG4gICAgICAgICAgLy8gZ2VuZXJpYyBmdW5jdGlvbmFsIHNlYXJjaCBvZiBvdXIgcmVnaXN0cnkgZm9yIG1hdGNoaW5nIGxpc3RlbmVycyxcbiAgICAgICAgICAvLyBgZm5gIHJldHVybnMgZmFsc2UgdG8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgLCBmb3JBbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKSB7XG4gICAgICAgICAgICAgIHZhciBwZnggPSByb290ID8gJ3InIDogJyQnXG4gICAgICAgICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICcqJykge1xuICAgICAgICAgICAgICAgIC8vIHNlYXJjaCB0aGUgd2hvbGUgcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09IHBmeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdC5zdWJzdHIoMSksIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsLCBsaXN0ID0gbWFwW3BmeCArIHR5cGVdLCBhbGwgPSBlbGVtZW50ID09ICcqJ1xuICAgICAgICAgICAgICAgIGlmICghbGlzdCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgZm9yIChsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoYWxsIHx8IGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgaGFuZGxlcikpICYmICFmbihsaXN0W2ldLCBsaXN0LCBpLCB0eXBlKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGhhcyA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICAvLyB3ZSdyZSBub3QgdXNpbmcgZm9yQWxsIGhlcmUgc2ltcGx5IGJlY2F1c2UgaXQncyBhIGJpdCBzbG93ZXIgYW5kIHRoaXNcbiAgICAgICAgICAgICAgLy8gbmVlZHMgdG8gYmUgZmFzdFxuICAgICAgICAgICAgICB2YXIgaSwgbGlzdCA9IG1hcFsocm9vdCA/ICdyJyA6ICckJykgKyB0eXBlXVxuICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWxpc3RbaV0ucm9vdCAmJiBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIG51bGwpKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBudWxsLCByb290LCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBwdXQgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgdmFyIGhhcyA9ICFlbnRyeS5yb290ICYmICF0aGlzLmhhcyhlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAsIGtleSA9IChlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVcbiAgICAgICAgICAgICAgOyhtYXBba2V5XSB8fCAobWFwW2tleV0gPSBbXSkpLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIHJldHVybiBoYXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZGVsID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIGZvckFsbChlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBlbnRyeS5oYW5kbGVyLCBlbnRyeS5yb290LCBmdW5jdGlvbiAoZW50cnksIGxpc3QsIGkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSBkZWxldGUgbWFwWyhlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVdXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGR1bXAgYWxsIGVudHJpZXMsIHVzZWQgZm9yIG9udW5sb2FkXG4gICAgICAgICAgLCBlbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgdCwgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvciAodCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gJyQnKSBlbnRyaWVzID0gZW50cmllcy5jb25jYXQobWFwW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaGFzOiBoYXMsIGdldDogZ2V0LCBwdXQ6IHB1dCwgZGVsOiBkZWwsIGVudHJpZXM6IGVudHJpZXMgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBuZWVkIGEgc2VsZWN0b3IgZW5naW5lIGZvciBkZWxlZ2F0ZWQgZXZlbnRzLCB1c2UgcXVlcnlTZWxlY3RvckFsbCBpZiBpdCBleGlzdHNcbiAgICAgIC8vIGJ1dCBmb3Igb2xkZXIgYnJvd3NlcnMgd2UgbmVlZCBRd2VyeSwgU2l6emxlIG9yIHNpbWlsYXJcbiAgICAsIHNlbGVjdG9yRW5naW5lXG4gICAgLCBzZXRTZWxlY3RvckVuZ2luZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGxcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHMsIHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci5xdWVyeVNlbGVjdG9yQWxsKHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmVhbjogTm8gc2VsZWN0b3IgZW5naW5lIGluc3RhbGxlZCcpIC8vIGVlZWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGF0dGFjaCB0aGlzIGxpc3RlbmVyIHRvIGVhY2ggRE9NIGV2ZW50IHRoYXQgd2UgbmVlZCB0byBsaXN0ZW4gdG8sIG9ubHkgb25jZVxuICAgICAgLy8gcGVyIGV2ZW50IHR5cGUgcGVyIERPTSBlbGVtZW50XG4gICAgLCByb290TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIHR5cGUpIHtcbiAgICAgICAgaWYgKCFXM0NfTU9ERUwgJiYgdHlwZSAmJiBldmVudCAmJiBldmVudC5wcm9wZXJ0eU5hbWUgIT0gJ19vbicgKyB0eXBlKSByZXR1cm5cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0cnkuZ2V0KHRoaXMsIHR5cGUgfHwgZXZlbnQudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcblxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgaWYgKHR5cGUpIGV2ZW50LnR5cGUgPSB0eXBlXG5cbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBoYW5kbGVycyByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUsIGNhbGxpbmcgdGhlbSB1bmxlc3MgdGhleSBoYXZlXG4gICAgICAgIC8vIGJlZW4gcmVtb3ZlZCBieSBhIHByZXZpb3VzIGhhbmRsZXIgb3Igc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIGJlZW4gY2FsbGVkXG4gICAgICAgIGZvciAoOyBpIDwgbCAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaV0ucmVtb3ZlZCkgbGlzdGVuZXJzW2ldLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG4gICAgLCBsaXN0ZW5lciA9IFczQ19NT0RFTFxuICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQpIHtcbiAgICAgICAgICAgIC8vIG5ldyBicm93c2Vyc1xuICAgICAgICAgICAgZWxlbWVudFthZGQgPyBhZGRFdmVudCA6IHJlbW92ZUV2ZW50XSh0eXBlLCByb290TGlzdGVuZXIsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkLCBjdXN0b20pIHtcbiAgICAgICAgICAgIC8vIElFOCBhbmQgYmVsb3csIHVzZSBhdHRhY2hFdmVudC9kZXRhY2hFdmVudCBhbmQgd2UgaGF2ZSB0byBwaWdneS1iYWNrIHByb3BlcnR5Y2hhbmdlIGV2ZW50c1xuICAgICAgICAgICAgLy8gdG8gc2ltdWxhdGUgZXZlbnQgYnViYmxpbmcgZXRjLlxuICAgICAgICAgICAgdmFyIGVudHJ5XG4gICAgICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGN1c3RvbSB8fCB0eXBlXG4gICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZXZlbnQpIHsgLy8gaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICByb290TGlzdGVuZXIuY2FsbChlbGVtZW50LCBldmVudCwgY3VzdG9tKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCB0cnVlIC8vIGlzIHJvb3RcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbSAmJiBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9PSBudWxsKSBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9IDBcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbnRyeSA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCBjdXN0b20gfHwgdHlwZSwgcm9vdExpc3RlbmVyLCB0cnVlKVswXVxuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgICAgICByZWdpc3RyeS5kZWwoZW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAsIG9uY2UgPSBmdW5jdGlvbiAocm0sIGVsZW1lbnQsIHR5cGUsIGZuLCBvcmlnaW5hbEZuKSB7XG4gICAgICAgIC8vIHdyYXAgdGhlIGhhbmRsZXIgaW4gYSBoYW5kbGVyIHRoYXQgZG9lcyBhIHJlbW92ZSBhcyB3ZWxsXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIHJtKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICwgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3JnVHlwZSwgaGFuZGxlciwgbmFtZXNwYWNlcykge1xuICAgICAgICB2YXIgdHlwZSAgICAgPSBvcmdUeXBlICYmIG9yZ1R5cGUucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgICwgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCByZW1vdmVkICA9IHt9XG4gICAgICAgICAgLCBpLCBsXG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICgoIWhhbmRsZXIgfHwgaGFuZGxlcnNbaV0ub3JpZ2luYWwgPT09IGhhbmRsZXIpICYmIGhhbmRsZXJzW2ldLmluTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBwcm9ibGVtYXRpYywgd2UgaGF2ZSBhIHJlZ2lzdHJ5LmdldCgpIGFuZCByZWdpc3RyeS5kZWwoKSB0aGF0XG4gICAgICAgICAgICAvLyBib3RoIGRvIHJlZ2lzdHJ5IHNlYXJjaGVzIHNvIHdlIHdhc3RlIGN5Y2xlcyBkb2luZyB0aGlzLiBOZWVkcyB0byBiZSByb2xsZWQgaW50b1xuICAgICAgICAgICAgLy8gYSBzaW5nbGUgcmVnaXN0cnkuZm9yQWxsKGZuKSB0aGF0IHJlbW92ZXMgd2hpbGUgZmluZGluZywgYnV0IHRoZSBjYXRjaCBpcyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSdsbCBiZSBzcGxpY2luZyB0aGUgYXJyYXlzIHRoYXQgd2UncmUgaXRlcmF0aW5nIG92ZXIuIE5lZWRzIGV4dHJhIHRlc3RzIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2NyZXcgaXQgdXAuIEBydmFnZ1xuICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGhhbmRsZXJzW2ldKVxuICAgICAgICAgICAgaWYgKCFyZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gJiYgaGFuZGxlcnNbaV1bZXZlbnRTdXBwb3J0XSlcbiAgICAgICAgICAgICAgcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdID0geyB0OiBoYW5kbGVyc1tpXS5ldmVudFR5cGUsIGM6IGhhbmRsZXJzW2ldLnR5cGUgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBlYWNoIHR5cGUvZWxlbWVudCBmb3IgcmVtb3ZlZCBsaXN0ZW5lcnMgYW5kIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyIHdoZXJlIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICBmb3IgKGkgaW4gcmVtb3ZlZCkge1xuICAgICAgICAgIGlmICghcmVnaXN0cnkuaGFzKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgbnVsbCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpc3RlbmVyIG9mIHRoaXMgdHlwZSwgcmVtb3ZlIHRoZSByb290TGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgZmFsc2UsIHJlbW92ZWRbaV0uYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHVwIGEgZGVsZWdhdGUgaGVscGVyIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3Rvciwgd3JhcCB0aGUgaGFuZGxlciBmdW5jdGlvblxuICAgICwgZGVsZWdhdGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIC8vVE9ETzogZmluZFRhcmdldCAodGhlcmVmb3JlICQpIGlzIGNhbGxlZCB0d2ljZSwgb25jZSBmb3IgbWF0Y2ggYW5kIG9uY2UgZm9yXG4gICAgICAgIC8vIHNldHRpbmcgZS5jdXJyZW50VGFyZ2V0LCBmaXggdGhpcyBzbyBpdCdzIG9ubHkgbmVlZGVkIG9uY2VcbiAgICAgICAgdmFyIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBpLCBhcnJheSA9IGlzU3RyaW5nKHNlbGVjdG9yKSA/IHNlbGVjdG9yRW5naW5lKHNlbGVjdG9yLCByb290KSA6IHNlbGVjdG9yXG4gICAgICAgICAgICAgIGZvciAoOyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSByb290OyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGFycmF5Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kVGFyZ2V0KGUudGFyZ2V0LCB0aGlzKVxuICAgICAgICAgICAgICBpZiAobWF0Y2gpIGZuLmFwcGx5KG1hdGNoLCBhcmd1bWVudHMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gX19iZWFuRGVsIGlzbid0IHBsZWFzYW50IGJ1dCBpdCdzIGEgcHJpdmF0ZSBmdW5jdGlvbiwgbm90IGV4cG9zZWQgb3V0c2lkZSBvZiBCZWFuXG4gICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0ge1xuICAgICAgICAgICAgZnQgICAgICAgOiBmaW5kVGFyZ2V0IC8vIGF0dGFjaCBpdCBoZXJlIGZvciBjdXN0b21FdmVudHMgdG8gdXNlIHRvb1xuICAgICAgICAgICwgc2VsZWN0b3IgOiBzZWxlY3RvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICB9XG5cbiAgICAsIGZpcmVMaXN0ZW5lciA9IFczQ19NT0RFTCA/IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBtb2Rlcm4gYnJvd3NlcnMsIGRvIGEgcHJvcGVyIGRpc3BhdGNoRXZlbnQoKVxuICAgICAgICB2YXIgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KGlzTmF0aXZlID8gJ0hUTUxFdmVudHMnIDogJ1VJRXZlbnRzJylcbiAgICAgICAgZXZ0W2lzTmF0aXZlID8gJ2luaXRFdmVudCcgOiAnaW5pdFVJRXZlbnQnXSh0eXBlLCB0cnVlLCB0cnVlLCB3aW4sIDEpXG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICB9IDogZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG9sZCBicm93c2VyIHVzZSBvbnByb3BlcnR5Y2hhbmdlLCBqdXN0IGluY3JlbWVudCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgaXNOYXRpdmUgPyBlbGVtZW50LmZpcmVFdmVudCgnb24nICsgdHlwZSwgZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCkpIDogZWxlbWVudFsnX29uJyArIHR5cGVdKytcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogUHVibGljIEFQSTogb2ZmKCksIG9uKCksIGFkZCgpLCAocmVtb3ZlKCkpLCBvbmUoKSwgZmlyZSgpLCBjbG9uZSgpXG4gICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9mZihlbGVtZW50WywgZXZlbnRUeXBlKHMpWywgaGFuZGxlciBdXSlcbiAgICAgICAgKi9cbiAgICAsIG9mZiA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlU3BlYywgZm4pIHtcbiAgICAgICAgdmFyIGlzVHlwZVN0ciA9IGlzU3RyaW5nKHR5cGVTcGVjKVxuICAgICAgICAgICwgaywgdHlwZSwgbmFtZXNwYWNlcywgaVxuXG4gICAgICAgIGlmIChpc1R5cGVTdHIgJiYgdHlwZVNwZWMuaW5kZXhPZignICcpID4gMCkge1xuICAgICAgICAgIC8vIG9mZihlbCwgJ3QxIHQyIHQzJywgZm4pIG9yIG9mZihlbCwgJ3QxIHQyIHQzJylcbiAgICAgICAgICB0eXBlU3BlYyA9IHN0cjJhcnIodHlwZVNwZWMpXG4gICAgICAgICAgZm9yIChpID0gdHlwZVNwZWMubGVuZ3RoOyBpLS07KVxuICAgICAgICAgICAgb2ZmKGVsZW1lbnQsIHR5cGVTcGVjW2ldLCBmbilcbiAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgIGlmICh0eXBlICYmIGN1c3RvbUV2ZW50c1t0eXBlXSkgdHlwZSA9IGN1c3RvbUV2ZW50c1t0eXBlXS5iYXNlXG5cbiAgICAgICAgaWYgKCF0eXBlU3BlYyB8fCBpc1R5cGVTdHIpIHtcbiAgICAgICAgICAvLyBvZmYoZWwpIG9yIG9mZihlbCwgdDEubnMpIG9yIG9mZihlbCwgLm5zKSBvciBvZmYoZWwsIC5uczEubnMyLm5zMylcbiAgICAgICAgICBpZiAobmFtZXNwYWNlcyA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzcGFjZXMgPSBzdHIyYXJyKG5hbWVzcGFjZXMsICcuJylcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmbiwgbmFtZXNwYWNlcylcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHR5cGVTcGVjKSkge1xuICAgICAgICAgIC8vIG9mZihlbCwgZm4pXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgbnVsbCwgdHlwZVNwZWMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCB7IHQxOiBmbjEsIHQyLCBmbjIgfSlcbiAgICAgICAgICBmb3IgKGsgaW4gdHlwZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU3BlYy5oYXNPd25Qcm9wZXJ0eShrKSkgb2ZmKGVsZW1lbnQsIGssIHR5cGVTcGVjW2tdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnRzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsRm4sIHR5cGUsIHR5cGVzLCBpLCBhcmdzLCBlbnRyeSwgZmlyc3RcblxuICAgICAgICAvL1RPRE86IHRoZSB1bmRlZmluZWQgY2hlY2sgbWVhbnMgeW91IGNhbid0IHBhc3MgYW4gJ2FyZ3MnIGFyZ3VtZW50LCBmaXggdGhpcyBwZXJoYXBzP1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXZlbnRzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGNhbid0IGhhbmRsZSBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgICBvbi5jYWxsKHRoaXMsIGVsZW1lbnQsIHR5cGUsIGV2ZW50c1t0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgLy8gZGVsZWdhdGVkIGV2ZW50XG4gICAgICAgICAgb3JpZ2luYWxGbiA9IGZuXG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA0KVxuICAgICAgICAgIGZuICAgICAgICAgPSBkZWxlZ2F0ZShzZWxlY3Rvciwgb3JpZ2luYWxGbiwgc2VsZWN0b3JFbmdpbmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKVxuICAgICAgICAgIGZuICAgICAgICAgPSBvcmlnaW5hbEZuID0gc2VsZWN0b3JcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzID0gc3RyMmFycihldmVudHMpXG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBvbmUoKSwgd3JhcCBpbiBhIHNlbGYtcmVtb3ZpbmcgaGFuZGxlclxuICAgICAgICBpZiAodGhpcyA9PT0gT05FKSB7XG4gICAgICAgICAgZm4gPSBvbmNlKG9mZiwgZWxlbWVudCwgZXZlbnRzLCBmbiwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIC8vIGFkZCBuZXcgaGFuZGxlciB0byB0aGUgcmVnaXN0cnkgYW5kIGNoZWNrIGlmIGl0J3MgdGhlIGZpcnN0IGZvciB0aGlzIGVsZW1lbnQvdHlwZVxuICAgICAgICAgIGZpcnN0ID0gcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAsIHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJykgLy8gZXZlbnQgdHlwZVxuICAgICAgICAgICAgLCBmblxuICAgICAgICAgICAgLCBvcmlnaW5hbEZuXG4gICAgICAgICAgICAsIHN0cjJhcnIodHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpLCAnLicpIC8vIG5hbWVzcGFjZXNcbiAgICAgICAgICAgICwgYXJnc1xuICAgICAgICAgICAgLCBmYWxzZSAvLyBub3Qgcm9vdFxuICAgICAgICAgICkpXG4gICAgICAgICAgaWYgKGVudHJ5W2V2ZW50U3VwcG9ydF0gJiYgZmlyc3QpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGV2ZW50IG9mIHRoaXMgdHlwZSBvbiB0aGlzIGVsZW1lbnQsIGFkZCByb290IGxpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCBlbnRyeS5ldmVudFR5cGUsIHRydWUsIGVudHJ5LmN1c3RvbVR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogYWRkKGVsZW1lbnRbLCBzZWxlY3Rvcl0sIGV2ZW50VHlwZShzKSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIERlcHJlY2F0ZWQ6IGtlcHQgKGZvciBub3cpIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5XG4gICAgICAgICovXG4gICAgLCBhZGQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGVsZm4pIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICwgIWlzU3RyaW5nKGZuKVxuICAgICAgICAgICAgICA/IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICAgICA6IFsgZWxlbWVudCwgZm4sIGV2ZW50cywgZGVsZm4gXS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgNSkgOiBbXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoT05FLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGZpcmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogVGhlIG9wdGlvbmFsICdhcmdzJyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBpZiBubyAnYXJncycgYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgICAgKiB0aGVuIHdlIGNhbiB1c2UgdGhlIGJyb3dzZXIncyBET00gZXZlbnQgc3lzdGVtLCBvdGhlcndpc2Ugd2UgdHJpZ2dlciBoYW5kbGVycyBtYW51YWxseVxuICAgICAgICAqL1xuICAgICwgZmlyZSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhcmdzKSB7XG4gICAgICAgIHZhciB0eXBlcyA9IHN0cjJhcnIodHlwZSlcbiAgICAgICAgICAsIGksIGosIGwsIG5hbWVzLCBoYW5kbGVyc1xuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHR5cGUgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgaWYgKG5hbWVzID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lcyA9IHN0cjJhcnIobmFtZXMsICcuJylcbiAgICAgICAgICBpZiAoIW5hbWVzICYmICFhcmdzICYmIGVsZW1lbnRbZXZlbnRTdXBwb3J0XSkge1xuICAgICAgICAgICAgZmlyZUxpc3RlbmVyKG5hdGl2ZUV2ZW50c1t0eXBlXSwgdHlwZSwgZWxlbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uLW5hdGl2ZSBldmVudCwgZWl0aGVyIGJlY2F1c2Ugb2YgYSBuYW1lc3BhY2UsIGFyZ3VtZW50cyBvciBhIG5vbiBET00gZWxlbWVudFxuICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGFsbCBsaXN0ZW5lcnMgYW5kIG1hbnVhbGx5ICdmaXJlJ1xuICAgICAgICAgICAgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICBhcmdzID0gW2ZhbHNlXS5jb25jYXQoYXJncylcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2pdLmluTmFtZXNwYWNlcyhuYW1lcykpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5oYW5kbGVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogY2xvbmUoZHN0RWxlbWVudCwgc3JjRWxlbWVudFssIGV2ZW50VHlwZSBdKVxuICAgICAgICAqXG4gICAgICAgICogVE9ETzogcGVyaGFwcyBmb3IgY29uc2lzdGVuY3kgd2Ugc2hvdWxkIGFsbG93IHRoZSBzYW1lIGZsZXhpYmlsaXR5IGluIHR5cGUgc3BlY2lmaWVycz9cbiAgICAgICAgKi9cbiAgICAsIGNsb25lID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZyb20sIHR5cGUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGZyb20sIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGhhbmRsZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcbiAgICAgICAgICAsIGFyZ3MsIGJlYW5EZWxcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5vcmlnaW5hbCkge1xuICAgICAgICAgICAgYXJncyA9IFsgZWxlbWVudCwgaGFuZGxlcnNbaV0udHlwZSBdXG4gICAgICAgICAgICBpZiAoYmVhbkRlbCA9IGhhbmRsZXJzW2ldLmhhbmRsZXIuX19iZWFuRGVsKSBhcmdzLnB1c2goYmVhbkRlbC5zZWxlY3RvcilcbiAgICAgICAgICAgIGFyZ3MucHVzaChoYW5kbGVyc1tpXS5vcmlnaW5hbClcbiAgICAgICAgICAgIG9uLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAsIGJlYW4gPSB7XG4gICAgICAgICAgJ29uJyAgICAgICAgICAgICAgICA6IG9uXG4gICAgICAgICwgJ2FkZCcgICAgICAgICAgICAgICA6IGFkZFxuICAgICAgICAsICdvbmUnICAgICAgICAgICAgICAgOiBvbmVcbiAgICAgICAgLCAnb2ZmJyAgICAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ3JlbW92ZScgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdjbG9uZScgICAgICAgICAgICAgOiBjbG9uZVxuICAgICAgICAsICdmaXJlJyAgICAgICAgICAgICAgOiBmaXJlXG4gICAgICAgICwgJ0V2ZW50JyAgICAgICAgICAgICA6IEV2ZW50XG4gICAgICAgICwgJ3NldFNlbGVjdG9yRW5naW5lJyA6IHNldFNlbGVjdG9yRW5naW5lXG4gICAgICAgICwgJ25vQ29uZmxpY3QnICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBvbGRcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gIC8vIGZvciBJRSwgY2xlYW4gdXAgb24gdW5sb2FkIHRvIGF2b2lkIGxlYWtzXG4gIGlmICh3aW4uYXR0YWNoRXZlbnQpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpLCBlbnRyaWVzID0gcmVnaXN0cnkuZW50cmllcygpXG4gICAgICBmb3IgKGkgaW4gZW50cmllcykge1xuICAgICAgICBpZiAoZW50cmllc1tpXS50eXBlICYmIGVudHJpZXNbaV0udHlwZSAhPT0gJ3VubG9hZCcpIG9mZihlbnRyaWVzW2ldLmVsZW1lbnQsIGVudHJpZXNbaV0udHlwZSlcbiAgICAgIH1cbiAgICAgIHdpbi5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICAgICAgd2luLkNvbGxlY3RHYXJiYWdlICYmIHdpbi5Db2xsZWN0R2FyYmFnZSgpXG4gICAgfVxuICAgIHdpbi5hdHRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBzZWxlY3RvciBlbmdpbmUgdG8gaW50ZXJuYWwgZGVmYXVsdCAocVNBIG9yIHRocm93IEVycm9yKVxuICBzZXRTZWxlY3RvckVuZ2luZSgpXG5cbiAgcmV0dXJuIGJlYW5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVhbi9iZWFuLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vamF2YXNjcmlwdC1iYXNlNjQuaHRtbFxuXG52YXIgQmFzZTY0ID0ge1xuXG5cdC8vIHByaXZhdGUgcHJvcGVydHlcblx0X2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcblxuXHQvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuXHRlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHR2YXIgb3V0cHV0ID0gXCJcIjtcblx0XHR2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcblx0XHR2YXIgaSA9IDA7XG5cblx0XHRpbnB1dCA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoaW5wdXQpO1xuXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuXHRcdFx0Y2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblx0XHRcdGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cdFx0XHRjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG5cdFx0XHRlbmMxID0gY2hyMSA+PiAyO1xuXHRcdFx0ZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG5cdFx0XHRlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG5cdFx0XHRlbmM0ID0gY2hyMyAmIDYzO1xuXG5cdFx0XHRpZiAoaXNOYU4oY2hyMikpIHtcblx0XHRcdFx0ZW5jMyA9IGVuYzQgPSA2NDtcblx0XHRcdH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcblx0XHRcdFx0ZW5jNCA9IDY0O1xuXHRcdFx0fVxuXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgK1xuXHRcdFx0dGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuXHRcdFx0dGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9LFxuXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG5cdGRlY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzO1xuXHRcdHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuXHRcdHZhciBpID0gMDtcblxuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xuXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuXHRcdFx0ZW5jMSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblx0XHRcdGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cdFx0XHRlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXHRcdFx0ZW5jNCA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblxuXHRcdFx0Y2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XG5cdFx0XHRjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG5cdFx0XHRjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xuXG5cdFx0XHRpZiAoZW5jMyAhPSA2NCkge1xuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuYzQgIT0gNjQpIHtcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cblx0fSxcblxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2Rpbmdcblx0X3V0ZjhfZW5jb2RlIDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcblx0XHR2YXIgdXRmdGV4dCA9IFwiXCI7XG5cblx0XHRmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuXG5cdFx0XHR2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0ZnRleHQ7XG5cdH0sXG5cblx0Ly8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG5cdF91dGY4X2RlY29kZSA6IGZ1bmN0aW9uICh1dGZ0ZXh0KSB7XG5cdFx0dmFyIHN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciBjID0gYzEgPSBjMiA9IDA7XG5cblx0XHR3aGlsZSAoIGkgPCB1dGZ0ZXh0Lmxlbmd0aCApIHtcblxuXHRcdFx0YyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcblxuXHRcdFx0aWYgKGMgPCAxMjgpIHtcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuXHRcdFx0XHRjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcblx0XHRcdFx0YzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTtcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xuXHRcdFx0XHRpICs9IDM7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U2NDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvYmFzZTY0LmpzXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbi8vIHV0aWwgdmFyaWFibGVzXG5sZXQgX2RlYnVnZ2luZyA9IFtdLCBfZGVidWdBbGwgPSBmYWxzZSwgdHlwZVJlZ2lzdHJ5ID0ge30sIHNwbGljZSA9IEFycmF5LnNwbGljZTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdHR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG5hbWUsIHR5cGUpIHtcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSBuZXcgTWFwKCk7XG5cdFx0aWYgKCFuYW1lKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5nZXQobmFtZSk7XG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xuXHR9LFxuXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHtcblx0XHRcdFx0fTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0eXBlID0gY2xhc3Mge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0XHRcdFx0Xy5hc3NpZ24odGhpcywgY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcHJvcHMubmFtZTtcblx0XHRcdGRlbGV0ZSBwcm9wcy5leHRlbmRzO1xuXHRcdFx0Xy5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3BzKTtcblx0XHRcdHR5cGUudHlwZU5hbWUgPSBuYW1lO1xuXHRcdFx0dGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuY3JlYXRlVHlwZSAtICcgKyBuYW1lc3BhY2UgKyAnLicgKyBuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH0sXG5cblx0YnVpbGRUeXBlczogZnVuY3Rpb24gKHR5cGVzLCBuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKSB7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcblxuXHRcdGlmICghdHlwZXMgJiYgZGVmYXVsdFR5cGUpIHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcblx0XHRcdGxldCB0eXBlID0gXy5yZW1vdmUodHlwZXMsIHtuYW1lOiBkZWZhdWx0VHlwZS5uYW1lfSk7XG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBfLmFzc2lnbih7fSwgZGVmYXVsdFR5cGUsIHR5cGUpKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fVxuXG5cdFx0Xy5mb3JFYWNoKHR5cGVzLCAodHlwZSkgPT4ge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHR9LFxuXG5cdC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxuXHQvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxuXHRleHRlbmQ6IGZ1bmN0aW9uIChjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuXHRcdH07XG5cdFx0U3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuXHRcdC8vIEFkZCBwcm90b3R5cGUgcHJvcGVydGllcyAoaW5zdGFuY2UgcHJvcGVydGllcykgdG8gdGhlIHN1YmNsYXNzLFxuXHRcdC8vIGlmIHN1cHBsaWVkLlxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcblxuXHRcdHJldHVybiBjaGlsZDtcblx0fSxcblxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbiAob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBKUyBjbGFzcyBjb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGpzQ2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDbGFzc1xuXHQgKi9cblx0Z2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIChqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHRpZiAoIWpzQ2xhc3MpXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xuXG5cdFx0aWYgKF8uaXNTdHJpbmcoanNDbGFzcykpXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcblx0XHRyZXR1cm4ganNDbGFzcztcblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG5cdFx0aWYgKCF3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgZGVidWcgPSBfZGVidWdBbGw7XG5cdFx0aWYgKCFfZGVidWdBbGwpIHtcblx0XHRcdGRlYnVnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV0gPT0gbmFtZSkgZGVidWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWRlYnVnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHdoaWxlIChuYW1lLmxlbmd0aCA8IDEwKSB7XG5cdFx0XHRuYW1lID0gbmFtZSArICcgJztcblx0XHR9XG5cdFx0bmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIDEwKSArIFwiIC0gXCI7XG5cdFx0Y29uc29sZS5pbmZvKG5hbWUsIG1lc3NhZ2UpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHN1YiBzaGFwZXMgd2l0aGluIGEgcGFyZW50IHNoYXJlLlxuXHQgKiBAcGFyYW0gYm91bmRzXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgZ2VvbWV0cnkgaW5mb3JtYXRpb24sIHRoZSBmb3JtYXQgb2YgR2VvbWV0cnkgaXM6XG5cdCAqIHtcblx0ICogICAgICB4OiBcInggY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQsIGlmIGxlc3MgdGhhbiAxLCB3aWxsIGJlIHRyZWF0ZWQgYXMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHBhcmVudCB3aWR0aC5cIixcblx0ICogICAgICB5OiBcInkgY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQuXCIsXG5cdCAqICAgICAgYW5jaG9yWDogXCJ4IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgYW5jaG9yWTogXCJ5IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgb2Zmc2V0WDogXCJ0aGUgb2Zmc2V0IGluIHRoZSB4IGRpcmVjdGlvbi5cIixcblx0ICogICAgICBvZmZzZXRZOiBcInRoZSBvZmZzZXQgaW4gdGhlIHkgZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIHdpZHRoOiBcInRoZSB3aWR0aCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiLFxuXHQgKiAgICAgIGhlaWdodDogXCJ0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBlbGVtZW50XCJcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbjogZnVuY3Rpb24gKGJvdW5kcywgZ2VvbWV0cnkpIHtcblx0XHRsZXQgeCA9IE1hdGguYWJzKGdlb21ldHJ5LngpIDw9IDEgPyBib3VuZHMud2lkdGggKiBnZW9tZXRyeS54IDogZ2VvbWV0cnkueDtcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XG5cdFx0cmV0dXJuIHRoaXMub2Zmc2V0UG9zaXRpb24oW3gsIHldLCBnZW9tZXRyeSk7XG5cdH0sXG5cblx0b2Zmc2V0UG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtwb3NbMF0gKyBnZW9tZXRyeS53aWR0aCAqIGdlb21ldHJ5LmFuY2hvclggKyBnZW9tZXRyeS5vZmZzZXRYLCBwb3NbMV0gKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0ZVxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbiAodCwgc2NhbGUsIG8pIHtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCAqIHNjYWxlICsgdFswXSwgby55ICogc2NhbGUgKyB0WzFdLCBvLndpZHRoICogc2NhbGUsIG8uaGVpZ2h0ICogc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSAqIHNjYWxlICsgdFswXSwgb1sxXSAqIHNjYWxlICsgdFsxXV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyBzY2FsZWQsIGkuZS4sIHJlbGF0aXZlIHBvc2l0aW9uIGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxuXHQgKi9cblx0c2NhbGU6IGZ1bmN0aW9uICh0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlLCBvLndpZHRoIC8gc2NhbGUsIG8uaGVpZ2h0IC8gc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdIC0gdFswXSkgLyBzY2FsZSwgKG9bMV0gLSB0WzFdKSAvIHNjYWxlXTtcblx0fSxcblxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxuXHQgKi9cblx0Z2V0UHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLnByb3AgJiYgXy5pc0Z1bmN0aW9uKG9iai5wcm9wKSlcblx0XHRcdHJldHVybiBvYmoucHJvcChwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzZfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5uYW1lLCB0aGlzKSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XG5cdH1cblxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cblx0XHRpZiAoSWR4ID4gMClcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XG5cblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxuXHRcdFx0cmV0dXJuIDExO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSkoKSxcblxuXHRpc0ZpcmVGb3ggOiAoZnVuY3Rpb24oKXtcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblx0fSkoKSxcblxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcblx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xuXHRcdGlmIChodG1sKVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcblx0XHRyZXR1cm4gdGVtcC5jaGlsZE5vZGVzO1xuXHR9LFxuXG5cdHNldEVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgYXR0cmlicywgc3R5bGVzKSB7XG5cdFx0aWYgKGF0dHJpYnMpIHtcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHQgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHRcdFx0IH0pO1xuXHRcdH1cblx0XHRpZiAoc3R5bGVzKSB7XG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcblx0fSxcblxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHR3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSlcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXG5cdCAqIEBwYXJhbSBlbCB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3BdO1xuXHR9LFxuXG5cdGdldENlbnRlclBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XG5cdH0sXG5cblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdGlmICh5KSBlbC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0fSxcblxuXHRnZXRTaXplOiBmdW5jdGlvbihlbCkge1xuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xuXHRcdHJldHVybiBbdywgaF07XG5cdH0sXG5cblx0cmVzaXplOiBmdW5jdGlvbihlbCwgdywgaCkge1xuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHR9LFxuXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubGlzdCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QgPSBbXTtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcblxuXHRcdHZhciBsaXN0ID0gdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3Q7XG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcblx0XHRcdFx0XHQvLyBmb3IgbWVtb3J5IGNvbnN1bXB0aW9uIHJlYXNvbnNcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcblx0XHRcdGltZy5uYW1lID0gYXJyYXlbaV07XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSBzcmNcblx0ICovXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XG5cdFx0aWYgKHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdGRvd25sb2FkSW1hZ2U6IGZ1bmN0aW9uKG5hbWUsIGltYWdlKSB7XG5cdFx0aWYgKCFpbWFnZSkgcmV0dXJuO1xuXHRcdGxldCBtaW1lID0gaW1hZ2UubWF0Y2goL15kYXRhOihbXjtdKikvKVsxXTtcblx0XHRsZXQgdHlwZSA9IG1pbWUuc3BsaXQoJy8nKVsxXTtcblx0XHRpZiAodHlwZS5pbmRleE9mKCcrJykgPiAwKSB0eXBlID0gdHlwZS5zcGxpdCgnKycpWzBdO1xuXHRcdGlmICh0aGlzLmlzSUUpIHtcblx0XHRcdGltYWdlID0gdGhpcy5iNjR0b0Jsb2IoaW1hZ2UucmVwbGFjZSgnZGF0YTonICsgbWltZSArICc7YmFzZTY0LCcsICcnKSwgbWltZSk7XG5cdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihpbWFnZSwgbmFtZSArICcuJyArIHR5cGUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGluayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBpbWFnZSwgZG93bmxvYWQ6IG5hbWUgKyAnLicgKyB0eXBlfSwge2Rpc3BsYXk6IFwibm9uZVwifSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGxpbmspO1xuXHRcdFx0bGluay5jbGljaygpO1xuXHRcdFx0bGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogQ29udmVydCBiNTQgdG8gYmxvYi4gSUUgb25seVxuXHQgKi9cblx0YjY0dG9CbG9iOiBmdW5jdGlvbiAoYjY0RGF0YSwgY29udGVudFR5cGUsIHNsaWNlU2l6ZSkge1xuXHRcdGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XG5cdFx0c2xpY2VTaXplID0gc2xpY2VTaXplIHx8IDUxMjtcblxuXHRcdHZhciBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYjY0RGF0YSk7XG5cdFx0dmFyIGJ5dGVBcnJheXMgPSBbXTtcblxuXHRcdGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGJ5dGVDaGFyYWN0ZXJzLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuXHRcdFx0dmFyIHNsaWNlID0gYnl0ZUNoYXJhY3RlcnMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xuXG5cdFx0XHR2YXIgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoc2xpY2UubGVuZ3RoKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Ynl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcblx0XHRcdGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xuXHRcdH1cblx0XHRyZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XG5cdH0sXG5cblx0b3BlbkltYWdlOiBmdW5jdGlvbihuYW1lLCBpbWFnZSkge1xuXHRcdHZhciBteVdpbmRvdyA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9vbGJhcj15ZXMsIHNjcm9sbGJhcnM9eWVzLCByZXNpemFibGU9eWVzLCB3aWR0aD01MDAsIGhlaWdodD01MDBcIik7XG5cdFx0dmFyIG15RG9jdW1lbnQgPSBteVdpbmRvdy5kb2N1bWVudDtcblx0XHR2YXIgaW1nID0gbXlEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuXHRcdHRoaXMuc2V0RWxlbWVudChpbWcsIHtzcmM6IGltYWdlLCBuYW1lOiBuYW1lfSk7XG5cdFx0bXlEb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGltZyk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXG5cdCAqIEBwYXJhbSBlICBpbnB1dCBldmVudFxuXHQgKi9cblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xuXHRcdHZhciB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcblx0XHRyZXR1cm4gKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvRG9tVXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblx0Y29uc3RydWN0b3Ioc3RyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHRpZiAoc3RyKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xuXHR9XG5cblx0YXBwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcmVwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0fVxuXG5cdHJlbW92ZUxhc3QoKSB7XG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZyhzZXApIHtcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXG5cdCAqL1xuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xuXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzOlxuXHQgKlxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKi9cblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xuXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XG5cblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9Jztcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuXHJcbmxldCBkZWZhdWx0Q29uZmlnID0ge1xyXG5cdHR5cGU6IFwiZGlyZWN0XCIsXHJcblx0c2hvd0dhdWdlOiB0cnVlLFxyXG5cdG9ydGhvZ29uYWw6IGZhbHNlXHJcbn07XHJcblxyXG5sZXQgZGVmYXVsdEdlb21ldHJ5ID0ge1xyXG5cdHdpZHRoOiAwLFxyXG5cdGhlaWdodDogMCxcclxuXHRhbmNob3JYOiAwLFxyXG5cdGFuY2hvclk6IDAsXHJcblx0b2Zmc2V0WDogMCxcclxuXHRvZmZzZXRZOiAwXHJcbn07XHJcblxyXG5sZXQgbGlua1R5cGVzID0ge307XHJcblxyXG5jbGFzcyBMaW5rIHtcclxuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XHJcblx0XHR0aGlzLnN0YXJ0ID0gdGVybWluYWxWaXN1YWxbMF0ucG9pbnQ7XHJcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xyXG5cdFx0dGhpcy5zdGFydE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzBdLmRpcmVjdGlvbjtcclxuXHRcdHRoaXMuZW5kTm9ybWFsID0gdGVybWluYWxWaXN1YWxbMV0uZGlyZWN0aW9uO1xyXG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xyXG5cdFx0dGhpcy5lbmRNYXJrZXIgPSBlbmRNYXJrZXI7XHJcblx0XHRfLmFzc2lnbih0aGlzLCBzaGFwZUNvbmZpZyk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIodmlldykge1xyXG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcclxuXHR9XHJcblxyXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XHJcblx0Z2V0IGNvbnRyb2xQdHMoKSB7IHJldHVybiBudWxsOyB9XHJcblx0Z2V0IGxlbmd0aCgpIHtcclxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcclxuXHRcdGxldCBpLCBsID0gMDtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKVxyXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XHJcblx0XHRyZXR1cm4gbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IG1vZGlmaWVycyBvciBsYWJlbC4uXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gZ2VvbWV0cnk6IGRlZmluZXMgaG93IGZhciBhbG9uZyB0aGUgZWRnZSBzaG91bGQgdGhlIHBvaW50IGJlIHBsYWNlZC5cclxuXHQgKiBAcmV0dXJuICpbXSB0aGUgcmVsYXRpdmUgcG9zaXRpb24uXHJcblx0ICovXHJcblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xyXG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxyXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XHJcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XHJcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcclxuXHRcdGlmIChNYXRoLmFicyhwKSA8PSAxKSBwICo9IGw7XHJcblx0XHRpZiAocCA8IDApIHAgPSBsICsgcDtcclxuXHRcdGlmIChwID4gbCkgcCA9IGw7XHJcblxyXG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzLCBkLCBwb2ludCwgZGlyO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xyXG5cdFx0XHRpZiAocCA8PSBkKSB7XHJcblx0XHRcdFx0Ly8gd2UndmUgbG9jYXRlZCB0aGUgbGluZSBzZWdtZW50LlxyXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XHJcblx0XHRcdFx0ZGlyID0gcG9pbnQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKTtcclxuXHRcdFx0XHRwb2ludC50cmFuc2xhdGUoZGlyLmdldFNjYWxlZChwKSk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdFx0cCAtPSBkO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIHJldHVybiB0aGUgbGFzdCBwb2ludC5cclxuXHRcdGlmICghcG9pbnQpXHJcblx0XHRcdHBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcclxuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdMaW5rJztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcclxuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAoc2hhcGVDb25maWcsIGRlZmF1bHRDb25maWcpO1xyXG5cdFx0bGV0IGxpbmtDbGFzcyA9IGxpbmtUeXBlc1tzaGFwZUNvbmZpZy50eXBlXTtcclxuXHRcdGlmIChsaW5rQ2xhc3MpXHJcblx0XHRcdHJldHVybiBuZXcgbGlua0NsYXNzKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XHJcblx0XHRjb25zb2xlLmxvZygnbGluayB0eXBlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy50eXBlKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgRGlyZWN0TGluayBleHRlbmRzIExpbmsge1xyXG5cdGdldCBwb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEJlemllckxpbmsgZXh0ZW5kcyBMaW5rIHtcclxuXHRnZXQgcG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XHJcblx0fVxyXG5cclxuXHRnZXQgY29udHJvbFB0cygpIHtcclxuXHRcdGxldCBzID0gdGhpcy5wb2ludHNbMF0sIGUgPSB0aGlzLnBvaW50c1sxXTtcclxuXHRcdGxldCBwdHMgPSBbXTtcclxuXHRcdHB0c1swXSA9IG51bGw7XHJcblx0XHRwdHNbMV0gPSBbXTtcclxuXHRcdGlmICh0aGlzLnN0YXJ0Tm9ybWFsLnggPT0gMCkge1xyXG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmVuZE5vcm1hbC54ID09IDApIHtcclxuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcHRzO1xyXG5cdH1cclxuXHJcblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xyXG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxyXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XHJcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XHJcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcclxuXHRcdGlmIChNYXRoLmFicyhwKSA+IDEpIHAgLz0gbDtcclxuXHRcdGlmIChwIDwgMCkgcCsrO1xyXG5cdFx0aWYgKHAgPiAxKSBwLS07XHJcblxyXG5cdFx0bGV0IHB0cyA9IHRoaXMucG9pbnRzO1xyXG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XHJcblx0XHRsZXQgcDEgPSBwdHNbMF07XHJcblx0XHRsZXQgcDIgPSBjdHJscHRzWzFdWzBdO1xyXG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcclxuXHRcdGxldCBwNCA9IHB0c1sxXTtcclxuXHJcblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XHJcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBFbnRpdHlSZWxhdGlvbnMgZXh0ZW5kcyBMaW5rIHtcclxuXHRnZXQgcG9pbnRzKCkge1xyXG5cdFx0dmFyIHNvdXJjZSA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIHRydWUpO1xyXG5cdFx0dmFyIHRhcmdldCA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIGZhbHNlKTtcclxuXHRcdHZhciBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xyXG5cdFx0dmFyIGlzVGFyZ2V0TGVmdCA9IHNvdXJjZS5yaWdodCgpIDwgdGFyZ2V0Lng7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblxyXG5cdFx0dmFyIHgwID0gKGlzU291cmNlTGVmdCkgPyBzb3VyY2UueCA6IHNvdXJjZS54ICsgc291cmNlLndpZHRoO1xyXG5cdFx0dmFyIHkwID0gc291cmNlLmdldENlbnRlclkoKTtcclxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcclxuXHJcblx0XHR2YXIgeGUgPSAoaXNUYXJnZXRMZWZ0KSA/IHRhcmdldC54IDogdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XHJcblx0XHR2YXIgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xyXG5cclxuXHRcdHZhciBzZWcgPSB0aGlzLnNlZ21lbnQ7XHJcblxyXG5cdFx0dmFyIGR4ID0gKGlzU291cmNlTGVmdCkgPyAtc2VnIDogc2VnO1xyXG5cdFx0dmFyIGRlcCA9IG5ldyBQb2ludCh4MCArIGR4LCB5MCk7XHJcblxyXG5cdFx0ZHggPSAoaXNUYXJnZXRMZWZ0KSA/IC1zZWcgOiBzZWc7XHJcblx0XHR2YXIgYXJyID0gbmV3IFBvaW50KHhlICsgZHgsIHllKTtcclxuXHJcblx0XHQvLyBBZGRzIGludGVybWVkaWF0ZSBwb2ludHMgaWYgYm90aCBnbyBvdXQgb24gc2FtZSBzaWRlXHJcblx0XHRpZiAoaXNTb3VyY2VMZWZ0ID09IGlzVGFyZ2V0TGVmdClcclxuXHRcdHtcclxuXHRcdFx0dmFyIHggPSAoaXNTb3VyY2VMZWZ0KSA/XHJcblx0XHRcdE1hdGgubWluKHgwLCB4ZSktc2VnIDpcclxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XHJcblxyXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeTApKTtcclxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmICgoZGVwLnggPCBhcnIueCkgPT0gaXNTb3VyY2VMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgbWlkWSA9IHkwICsgKHllIC0geTApIC8gMjtcclxuXHJcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XHJcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChkZXAueCwgbWlkWSkpO1xyXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoYXJyLngsIG1pZFkpKTtcclxuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcclxuXHRcdH1cclxuXHRcdGVsc2VcclxuXHRcdHtcclxuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcclxuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeGUsIHllKSk7XHJcblx0XHRyZXR1cm4gcmVzdWx0O1xyXG5cdH1cclxufVxyXG5cclxuXHJcbmNsYXNzIE1hbmhhdHRhbiBleHRlbmRzIExpbmsge1xyXG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xyXG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzKHNoYXBlQ29uZmlnLCB7XHJcblx0XHRcdE1JTl9CVUZGRVI6IDEwLFxyXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxyXG5cdFx0XHRtYXhDaGFubmVsV2lkdGg6IDEwMFxyXG5cdFx0fSk7XHJcblx0XHRzdXBlcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBvaW50cygpIHtcclxuXHRcdC8vbGV0IHBvcyA9IE1hbmhhdHRhbi5yb3V0ZUludGVybmFsKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnN0YXJ0Tm9ybWFsLCB0aGlzLmVuZE5vcm1hbCwgdGhpcy5NSU5fQlVGRkVSKTtcclxuXHRcdC8vcG9zID0gTWFuaGF0dGFuLnByb2Nlc3NQb3NpdGlvbnModGhpcy5zdGFydCwgdGhpcy5lbmQsIHBvcywgdGhpcy5zdGFydE5vcm1hbC54IT0wKTtcclxuXHRcdGxldCBwb3MgPSBNYW5oYXR0YW4uZmluZFBvc2l0aW9ucyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy5zdGFydE5vcm1hbCwgdGhpcy5lbmROb3JtYWwsIHRoaXMuTUlOX0JVRkZFUik7XHJcblx0XHRpZiAodGhpcy5hdXRvUm91dGUpIHtcclxuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xyXG5cdFx0XHR2YXIgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcclxuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGVkZ2Uuc291cmNlLmdldENvbW1vbkFuY2VzdG9yKGVkZ2UudGFyZ2V0KTtcclxuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcclxuXHRcdFx0dmFyIGluZGV4ID0gMDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XHJcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cclxuXHRcdFx0XHRpZiAobm9kZS5leGNsdWRlRnJvbVJvdXRpbmcoZWRnZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2Uuc291cmNlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS50YXJnZXQpKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcclxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xyXG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2UudGFyZ2V0KVxyXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xyXG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcclxuXHRcdFx0XHRpbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdHRoaXMuYXV0b1JvdXRlKHBvcywgY29udGFpbmVyLmdldEJvdW5kcyhkb2N1bWVudCksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcclxuXHRcdH1cclxuXHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcclxuXHRcdHJldHVybiBwb3M7XHJcblx0fVxyXG5cclxuXHQvL05ldyBmdW5jdGlvbiBmb3IgZmluZGluZyByb3V0ZVxyXG5cdHN0YXRpYyBmaW5kUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xyXG5cdFx0dmFyIHN0YXJ0QnVmZmVyID0gbmV3IFBvaW50KHN0YXJ0LnggKyBzdGFydE5vcm1hbC54ICogYnVmZmVyLCBzdGFydC55ICsgc3RhcnROb3JtYWwueSAqIGJ1ZmZlcik7XHJcblx0XHR2YXIgZW5kQnVmZmVyID0gbmV3IFBvaW50KGVuZC54ICsgZW5kTm9ybWFsLnggKiBidWZmZXIsIGVuZC55ICsgZW5kTm9ybWFsLnkgKiBidWZmZXIpO1xyXG5cdFx0dmFyIHN0YXJ0QnVmZmVyTm9ybWFsLCBlbmRCdWZmZXJOb3JtYWw7XHJcblx0XHR2YXIgcHRzO1xyXG5cdFx0aWYgKHN0YXJ0Tm9ybWFsLnggIT0gMCkge1xyXG5cdFx0XHRpZiAoKGVuZEJ1ZmZlci54IC0gc3RhcnRCdWZmZXIueCkgLyBzdGFydE5vcm1hbC54ID4gMCkge1xyXG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gc3RhcnROb3JtYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKGVuZEJ1ZmZlci55ID49IHN0YXJ0QnVmZmVyLnkpID8gMSA6IC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmICgoZW5kQnVmZmVyLnkgLSBzdGFydEJ1ZmZlci55KSAvIHN0YXJ0Tm9ybWFsLnkgPiAwKSB7XHJcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoZW5kQnVmZmVyLnggPj0gc3RhcnRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoZW5kTm9ybWFsLnggIT0gMCkge1xyXG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnggLSBlbmRCdWZmZXIueCkgLyBlbmROb3JtYWwueCA+IDApIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBlbmROb3JtYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KDAsIChzdGFydEJ1ZmZlci55ID49IGVuZEJ1ZmZlci55KSA/IDEgOiAtMSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnkgLSBlbmRCdWZmZXIueSkgLyBlbmROb3JtYWwueSA+IDApIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBlbmROb3JtYWw7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KChzdGFydEJ1ZmZlci54ID49IGVuZEJ1ZmZlci54KSA/IDEgOiAtMSwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpID09IDApIHtcclxuXHRcdFx0dmFyIG1pZGRsZSA9IChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApID8gbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIGVuZEJ1ZmZlci55KSA6IG5ldyBQb2ludChlbmRCdWZmZXIueCwgc3RhcnRCdWZmZXIueSk7XHJcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG1pZGRsZSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpIDwgMCkge1xyXG5cdFx0XHRpZiAoc3RhcnRCdWZmZXJOb3JtYWwueCA9PSAwKSB7XHJcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIChzdGFydC55ICsgZW5kLnkpIC8gMiksIG5ldyBQb2ludChlbmRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIHN0YXJ0QnVmZmVyLnkpLCBuZXcgUG9pbnQoKHN0YXJ0LnggKyBlbmQueCkgLyAyLCBlbmRCdWZmZXIueSksIGVuZEJ1ZmZlciwgZW5kXTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludChzdGFydEJ1ZmZlci54ICsgc3RhcnRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnRCdWZmZXIueSArIHN0YXJ0QnVmZmVyTm9ybWFsLnkgKiBidWZmZXIpLCBuZXcgUG9pbnQoZW5kQnVmZmVyLnggKyBlbmRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgZW5kQnVmZmVyLnkgKyBlbmRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIGVuZEJ1ZmZlciwgZW5kXTtcclxuXHRcdH1cclxuXHJcblx0XHR2YXIgcHJ1bmVQdHMgPSBbXTtcclxuXHRcdHBydW5lUHRzWzBdID0gcHRzWzBdO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmICgocHRzW2ldLnggPT0gcHRzW2ktMV0ueCAmJiBwdHNbaV0ueCA9PSBwdHNbaSsxXS54KSB8fCAocHRzW2ldLnkgPT0gcHRzW2ktMV0ueSAmJiBwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSkge1xyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdHBydW5lUHRzLnB1c2gocHRzW2ldKTtcclxuXHRcdH1cclxuXHRcdHBydW5lUHRzLnB1c2gocHRzW3B0cy5sZW5ndGggLSAxXSk7XHJcblx0XHRyZXR1cm4gcHJ1bmVQdHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNYWtlIGEgcm91dGUgYmFzZWQgb24gdGhlIHN0YXJ0LCBlbmQgYW5kIHN0YXJ0Tm9ybWFsIGFuZCBlbmROb3JtYWxcclxuXHQgKiBOb25lIG9mIHRoZSBwYXJhbWV0ZXJzIGNhbiBiZSBudWxsXHJcblx0ICogVE9ETzogVGhpcyBtZXRob2QgY291bGQgdXNlIHNvbWUgaW1wcm92ZW1lbnQuLi5cclxuXHQgKi9cclxuXHRzdGF0aWMgcm91dGVJbnRlcm5hbChzdGFydCwgZW5kLCBzdGFydE5vcm1hbCwgZW5kTm9ybWFsLCBidWZmZXIpIHtcclxuXHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5nZXREaXJlY3Rpb24oZW5kKTtcclxuXHRcdHZhciBhdmVyYWdlID0gc3RhcnQuZ2V0TWlkUG9pbnQoZW5kKTtcclxuXHRcdHZhciBwb3MgPSBbXTtcclxuXHRcdHZhciBzdGFydFBvc2l0aXZlID0gbmV3IFBvaW50KHN0YXJ0Tm9ybWFsLngqc3RhcnROb3JtYWwueCwgc3RhcnROb3JtYWwueSpzdGFydE5vcm1hbC55KTtcclxuXHRcdHZhciBlbmRQb3NpdGl2ZSA9IG5ldyBQb2ludChlbmROb3JtYWwueCplbmROb3JtYWwueCwgZW5kTm9ybWFsLnkqZW5kTm9ybWFsLnkpO1xyXG5cdFx0dmFyIGhvcml6b250YWwgPSBzdGFydE5vcm1hbC54ICE9IDA7XHJcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueSA6IHN0YXJ0Lng7XHJcblxyXG5cdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0dmFyIGk7XHJcblx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID09IDApIHtcclxuXHRcdFx0aWYgKChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcclxuXHRcdFx0XHQmJiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8PSAwKSkge1xyXG5cdFx0XHRcdC8vIDBcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyAyXHJcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApXHJcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcclxuXHJcblx0XHRcdFx0cG9zLnB1c2goaSk7XHJcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cclxuXHRcdFx0XHRpZiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+IDApXHJcblx0XHRcdFx0XHRpID0gZW5kUG9zaXRpdmUuZG90UHJvZHVjdChlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcclxuXHJcblx0XHRcdFx0cG9zLnB1c2goaSk7XHJcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID4gMCkge1xyXG5cdFx0XHRcdC8vMVxyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcclxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xyXG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xyXG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLzMgb3IgMVxyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XHJcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcclxuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xyXG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XHJcblx0XHRcdFx0cG9zLnB1c2goaSk7XHJcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cclxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xyXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XHJcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcclxuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHBvcy5wdXNoKGhvcml6b250YWwgPyBlbmQueSA6IGVuZC54KTtcclxuXHJcblx0XHRyZXR1cm4gcG9zO1xyXG5cdH1cclxuXHJcblx0Ly8gUHJvY2VzcyB0aGUgcG9zaXRpb25zLlxyXG5cdHN0YXRpYyBwcm9jZXNzUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHBvc2l0aW9ucywgaG9yaXpvbnRhbCkge1xyXG5cdFx0dmFyIHBvcyA9IFtdO1xyXG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnggOiBzdGFydC55O1xyXG5cdFx0dmFyIGk7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHBvc1tpICsgMV0gPSBwb3NpdGlvbnNbaV07XHJcblx0XHR9XHJcblx0XHRwb3MucHVzaCgoaG9yaXpvbnRhbCA9PSAocG9zaXRpb25zLmxlbmd0aCAlIDIgPT0gMSkpID8gZW5kLnggOiBlbmQueSk7XHJcblxyXG5cdFx0dmFyIHB0cyA9IFtdO1xyXG5cdFx0cHRzWzBdID0gc3RhcnQ7XHJcblx0XHR2YXIgcDtcclxuXHRcdHZhciBjdXJyZW50LCBwcmV2O1xyXG5cdFx0Zm9yIChpID0gMjsgaSA8IHBvcy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0XHRwcmV2ID0gcG9zW2kgLSAxXTtcclxuXHRcdFx0Y3VycmVudCA9IHBvc1tpXTtcclxuXHRcdFx0cCA9IGhvcml6b250YWwgPyBuZXcgUG9pbnQocHJldiwgY3VycmVudCkgOiBuZXcgUG9pbnQoY3VycmVudCwgcHJldik7XHJcblx0XHRcdHB0cy5wdXNoKHApO1xyXG5cdFx0fVxyXG5cdFx0cHRzLnB1c2goZW5kKTtcclxuXHRcdHJldHVybiBwdHM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBBdXRvbWF0aWNhbGx5IHJvdXRlIHRoZSBjb25uZWN0aW9uIHRvIGF2b2lkIGludGVyc2VjdGlvbnMgd2l0aCBvdGhlciB2ZXJ0aWNlcy5cclxuXHQgKi9cclxuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XHJcblx0XHR2YXIgc2lkZSwgc2lkZTIsIGQsIGJveCwgaW50ZXJzZWN0LCBqO1xyXG5cdFx0dmFyIGNoYW5uZWwsIGNoYW5uZWwyLCBwdCwgZGlyO1xyXG5cclxuXHRcdHZhciBzdGFydFBhZGRpbmcgPSAwLCBlbmRQYWRkaW5nO1xyXG5cdFx0Ly8gZmlyc3QgZ2V0IHRoZSBzdGFydCBhbmQgZW5kIGNoYW5uZWxcclxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XHJcblx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMl07XHJcblx0XHRpZiAocHQueSA8IGJveC55KVxyXG5cdFx0XHRzaWRlID0gMTtcclxuXHRcdGVsc2UgaWYgKHB0LnkgPiBib3gueSArIGJveC5oZWlnaHQpXHJcblx0XHRcdHNpZGUgPSAzO1xyXG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxyXG5cdFx0XHRzaWRlID0gMDtcclxuXHRcdGVsc2VcclxuXHRcdFx0c2lkZSA9IDI7XHJcblx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBlbmRCb3gsIGJveGVzLCBzaWRlKTtcclxuXHRcdGVuZFBhZGRpbmcgPSBjaGFubmVsLmhvcml6b250YWwgPyAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCkvMiA6IChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wKS8yO1xyXG5cclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRpZiAocHRzW2krMV0ueCA9PSBwdHNbaV0ueCAmJiBwdHNbaSsxXS55ID09IHB0c1tpXS55KSBjb250aW51ZTtcclxuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xyXG5cdFx0XHRpZiAoIWludGVyc2VjdCkgY29udGludWU7XHJcblx0XHRcdGogPSBpbnRlcnNlY3RbMF07XHJcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XHJcblx0XHRcdGJveCA9IGJveGVzW2pdO1xyXG5cdFx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZSk7XHJcblx0XHRcdHN3aXRjaChzaWRlKSB7XHJcblx0XHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XHJcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xyXG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMSA6IDM7XHJcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxyXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS55ID09IHB0c1tpLTFdLnkpICYmIChwdHNbaS0xXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpLTFdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxyXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnkgPT0gcHRzW2krM10ueSkgJiYgKHB0c1tpKzJdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2krMl0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS55IC0gcHQueTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5ib3R0b20gKyBjaGFubmVsMi50b3ApLzIgLSBwdC55O1xyXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxyXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcclxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxyXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXHJcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkgKyBkKSwgbmV3IFBvaW50KHB0LngsIHB0LnkgKyBkKV0sXHJcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXHJcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XHJcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xyXG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMCA6IDI7XHJcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcclxuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxyXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS54ID09IHB0c1tpLTFdLngpICYmIChwdHNbaS0xXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaS0xXS54IDwgY2hhbm5lbDIucmlnaHQpKVxyXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnggPT0gcHRzW2krM10ueCkgJiYgKHB0c1tpKzJdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpKzJdLnggPCBjaGFubmVsMi5yaWdodCkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS54IC0gcHQueDtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5yaWdodCArIGNoYW5uZWwyLmxlZnQpLzIgLSBwdC54O1xyXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxyXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcclxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcclxuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxyXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXHJcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCArIGQsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0LnggKyBkLCBwdC55KV0sXHJcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXHJcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSA0OlxyXG5cdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0Ly8gbWF4IHBvaW50cy5cclxuXHRcdFx0aWYgKGkgPiAyMCkgcmV0dXJuO1xyXG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcclxuXHRcdFx0XHRwdHMuc3BsaWNlKGkrMSwgMCwgcHQpO1xyXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XHJcblx0XHR2YXIgYm94LCBzaWRlLCBzYXZlZEluZGV4ID0gbnVsbCwgc2F2ZWRTaWRlID0gbnVsbDtcclxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0aWYgKChpID09IDAgJiYgaiA9PSBzdGFydEJveCkgfHwgKGkgPT0gcHRzLmxlbmd0aCAtIDIgJiYgaiA9PSBlbmRCb3gpKVxyXG5cdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRib3ggPSBib3hlc1tqXTtcclxuXHRcdFx0c2lkZSA9IGJveC5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSk7XHJcblx0XHRcdGlmIChzaWRlID49IDApIHtcclxuXHRcdFx0XHRpZiAoc2F2ZWRJbmRleCA9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcclxuXHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChib3hlc1tzYXZlZEluZGV4XS5kaXN0YW5jZShwdHNbaV0pID4gYm94LmRpc3RhbmNlKHB0c1tpXSkpIHtcclxuXHRcdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XHJcblx0XHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoc2F2ZWRJbmRleCAhPSBudWxsKVxyXG5cdFx0XHRyZXR1cm4gW3NhdmVkSW5kZXgsIHNhdmVkU2lkZV07XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgYnJlYWtQdCwgYm94LCBzaWRlKSB7XHJcblx0XHR2YXIgZGlyO1xyXG5cdFx0dmFyIHA7XHJcblx0XHRzd2l0Y2ggKHNpZGUpIHtcclxuXHRcdFx0Y2FzZSAwOlxyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cCA9IFwieVwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRwID0gXCJ4XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHQvL2ZpcnN0IHRyeSB0aGUgYnJlYWtwdC5cclxuXHRcdGRpciA9IF9nZXRSb3V0ZURpcmVjdGlvbihicmVha1B0LCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcclxuXHRcdGlmIChkaXIgPT0gMCkge1xyXG5cdFx0XHRkaXIgPSAtX2dldFJvdXRlRGlyZWN0aW9uKHB0c1swXSwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XHJcblx0XHRcdGlmIChkaXIgPT0gMCkge1xyXG5cdFx0XHRcdGlmIChicmVha1B0W3BdIDwgYm94LmdldENlbnRlcigpW3BdKVxyXG5cdFx0XHRcdFx0ZGlyID0gLTE7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZGlyID0gMTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGRpcjtcclxuXHR9XHJcblxyXG5cdF9nZXRSb3V0ZURpcmVjdGlvbihwdDEsIHB0Mikge1xyXG5cdFx0aWYgKHB0MS54ID09IHB0Mi54KSB7XHJcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcclxuXHRcdFx0cmV0dXJuIFBvaW50Lk47XHJcblx0XHR9IGVsc2UgaWYgKHB0MS55ID09IHB0Mi55KSB7XHJcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcclxuXHRcdFx0cmV0dXJuIFBvaW50Llc7XHJcblx0XHR9IGVsc2UgaWYgKHB0MS54IDwgcHQyLngpIHtcclxuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcclxuXHRcdFx0cmV0dXJuIFBvaW50Lk5FO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcclxuXHRcdFx0cmV0dXJuIFBvaW50Lk5XO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0X2dldENoYW5uZWwoY29udGFpbmVyLCBpbmRleCwgYm94ZXMsIHNpZGUpIHtcclxuXHRcdHZhciBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcclxuXHRcdHZhciBib3gxID0gYm94ZXNbaW5kZXhdLCBib3gyO1xyXG5cdFx0dmFyIHB0LCBpO1xyXG5cdFx0dmFyIGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcclxuXHRcdHN3aXRjaCAoc2lkZSkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcclxuXHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gcHQueDtcclxuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdHIgPSBib3hlc1tpXS5nZXRSaWdodCgpLng7XHJcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSB7XHJcblx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY2hhbm5lbC5yaWdodCAtIG1heENoYW5uZWxXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcclxuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcclxuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xyXG5cdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gcHQueTtcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGIgPSBib3hlc1tpXS5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XHJcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSB7XHJcblx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY2hhbm5lbC5ib3R0b20gLSBtYXhDaGFubmVsV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xyXG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XHJcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XHJcblxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDI6XHJcblx0XHRcdFx0cHQgPSBib3gxLmdldFJpZ2h0KCk7XHJcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XHJcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdGlmIChsIDw9IHB0LngpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSB7XHJcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY2hhbm5lbC5sZWZ0ICsgbWF4Q2hhbm5lbFdpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcclxuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cHQgPSBib3gxLmdldEJvdHRvbSgpO1xyXG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XHJcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xyXG5cdFx0XHRcdFx0aWYgKGJveDIuZ2V0VG9wKCkueSA8PSBwdC55KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiBib3gyLmdldFRvcCgpLnkpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSB7XHJcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY2hhbm5lbC50b3AgKyBtYXhDaGFubmVsV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xyXG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XHJcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gY2hhbm5lbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1vdmUgYSBsaW5lIHNlZ21lbnQgYnkgYSBzcGVjaWZpZWQgZGlzdGFuY2UuXHJcblx0ICpcclxuXHQgKiBAcGFyYW0gcHRzIHRoZSBsaXN0IG9mIHBvaW50cy5cclxuXHQgKiBAcGFyYW0gaSB0aGUgaW5kZXggb2YgdGhlIHNlZ21lbnQuXHJcblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXHJcblx0ICogQHBhcmFtIHN0YXJ0UGFkZGluZ1xyXG5cdCAqIEBwYXJhbSBlbmRQYWRkaW5nXHJcblx0ICovXHJcblx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKSB7XHJcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBuZXcgbGluZSBzZWdtZW50cy5cclxuXHRcdHZhciBkaXIsIGwsIHB0O1xyXG5cdFx0aWYgKGkgPT0gMCkge1xyXG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludC5cclxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xyXG5cdFx0XHRpZiAoIXN0YXJ0UGFkZGluZylcclxuXHRcdFx0XHRzdGFydFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XHJcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xyXG5cdFx0XHRwdCA9IHB0c1swXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XHJcblx0XHRcdHB0cy5zcGxpY2UoMSwgMCwgcHQpO1xyXG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoaSA9PSBwdHMubGVuZ3RoIC0gMikge1xyXG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBlbmQgcG9pbnQuXHJcblx0XHRcdGRpciA9IHB0c1twdHMubGVuZ3RoLTFdLmdldERpcmVjdGlvbihwdHNbcHRzLmxlbmd0aC0yXSk7XHJcblx0XHRcdGlmICghZW5kUGFkZGluZylcclxuXHRcdFx0XHRlbmRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xyXG5cdFx0XHRsID0gTWF0aC5taW4oZW5kUGFkZGluZywgcHRzW3B0cy5sZW5ndGgtMV0uZGlzdGFuY2UocHRzW3B0cy5sZW5ndGgtMl0pLzIpO1xyXG5cdFx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMV0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xyXG5cdFx0XHRwdHMuc3BsaWNlKHB0cy5sZW5ndGggLSAxLCAwLCBwdCk7XHJcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHB0c1tpXS55ID09IHB0c1tpKzFdLnkpIHtcclxuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueSA9PSBwdHNbaV0ueSkge1xyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXHJcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XHJcblx0XHRcdHB0c1tpXS55ICs9IGQ7XHJcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnggPT0gcHRzW2ldLngpIHtcclxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xyXG5cdFx0XHRwdHNbaV0ueCArPSBkO1xyXG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIG1ldGhvZCB3aWxsIG1lcmdlIHRoZSByZWR1bmRhbnQgc2VnbWVudHMuXHJcblx0ICovXHJcblx0X21lcmdlU2VnbWVudHMocHRzKSB7XHJcblx0XHR2YXIgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XHJcblx0XHR2YXIgaDI7XHJcblx0XHRmb3IgKHZhciBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XHJcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcclxuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXHJcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGgxID0gIWgxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XHJcbmxpbmtUeXBlc1snYmV6aWVyJ10gPSBCZXppZXJMaW5rO1xyXG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xyXG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgREVGQVVMVFMgPSB7XG5cdHN0b3BQcm9wYWdhdGlvbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0Ly9pZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxuXHRcdC8vXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRyeSB0byBzaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzLlxuXHQgKi9cblx0c2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0bGV0IGxhc3QsIHN0YWNrO1xuXHRcdGNvbnN0IGNsZWFyRW50ZXJTdGFjayA9IChrKSA9PiB7XG5cdFx0XHRrID0gayB8fCAwO1xuXHRcdFx0Ly8gQ2xlYXIgb2ZmIHRoZSBlbnRlciBzdGFjay5cblx0XHRcdHdoaWxlICh0aGlzLmVudGVyU3RhY2subGVuZ3RoID49IGsgKyAxKSB7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmVudGVyU3RhY2sucG9wKCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWxlYXZlJywgbGFzdC5ucywgbGFzdC5kYXRhLCBwb3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZ2V0TlMgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcblx0XHRcdFx0dmFyIHZhbCA9IHN0YWNrW2ldLmdldEF0dHJpYnV0ZShcIm5zXCIpO1xuXHRcdFx0XHRpZiAoXy5zdGFydHNXaXRoKHZhbCwgXCJyb290LlwiKSlcblx0XHRcdFx0XHR2YWwgPSB2YWwuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRidWYuYXBwZW5kKHZhbCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0fTtcblxuXHRcdGlmIChucyAmJiBucyAhPSB0aGlzLnJvb3ROUykge1xuXHRcdFx0aWYgKHR5cGUgPT0gJ21vdXNlb3ZlcicpIHtcblx0XHRcdFx0c3RhY2sgPSBldmVudC50YXJnZXRTdGFjaztcblx0XHRcdFx0bGV0IGl0ZW07XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmVudGVyU3RhY2tbaV0udGFyZ2V0ICE9IHN0YWNrW2ldKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhpKTtcblx0XHRcdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aXRlbSA9IHtkYXRhOiBkYXRhLCBuczogZ2V0TlMoaSksIHRhcmdldDogc3RhY2tbaV19O1xuXHRcdFx0XHRcdHRoaXMuZW50ZXJTdGFjay5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWVudGVyJywgaXRlbS5ucywgZGF0YSwgcG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aClcblx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soc3RhY2subGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5zID09IHRoaXMucm9vdE5TICYmIHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPiAwKVxuXHRcdFx0Y2xlYXJFbnRlclN0YWNrKCk7XG5cdH1cblxuXHRkaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdC8vaWYgKHR5cGUgIT0gJ21vdXNlb3ZlcicgJiYgdHlwZSAhPSAnbW91c2VvdXQnKVxuXHRcdC8vXHRVdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiZGlzcGF0Y2ggLSBcIiArIHR5cGUgKyAnLicgKyBucyArICc7JyArIHBvcyArICc7cm9vdFRhcmdldD0nICsgZXZlbnQucm9vdFRhcmdldCArICc7ZGF0YT0nICsgZGF0YSk7XG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRjb25zdCBuc1R5cGUgPSBucyA/IHR5cGUgKyAnLicgKyBucyA6IHR5cGU7XG5cdFx0Xy5mb3JFYWNoKHRoaXMubGlzdGVuZXJzLCAobGlzdGVuZXJzLCBrZXkpID0+IHtcblx0XHRcdGlmIChFdmVudERpc3BhdGNoZXIubWF0Y2gobnNUeXBlLCBrZXkpKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KHdpbmRvdywgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHBvcztcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcblx0ICogLy8gS2V5IGlzIG9iamVjdCB7Y3RybCwgYWx0LCBzaGlmdCwgbWV0YSwgY29kZX1cblx0ICovXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnVucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XG5cdFx0XHRfLmZvckVhY2godHlwZSwgKHQpID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXSB8fCAodGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW3R5cGVdLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc3RvcCgpO1xuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XG5cdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzO1xuXHRcdGRlbGV0ZSB0aGlzLmVudGVyU3RhY2s7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgdHlwZSBtYXRjaGVzIHRoZSByZWFsIGV2ZW50IHR5cGUuIFwiKlwiIGlzIGFsbG93ZWQgYXMgYSB3aWxkIGNhcmQuXG5cdCAqL1xuXHRzdGF0aWMgbWF0Y2gobnNUeXBlLCByZWdpc3RlcmVkVHlwZSkge1xuXHRcdGNvbnN0IGFyciA9IHJlZ2lzdGVyZWRUeXBlLnNwbGl0KCcqJyk7XG5cdFx0aWYgKGFyci5sZW5ndGggPT0gMSlcblx0XHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XG5cblx0XHRsZXQgc3Vic3RyLCBpbmRleCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuXHRcdFx0c3Vic3RyID0gbnNUeXBlLnNsaWNlKGluZGV4KTtcblx0XHRcdGluZGV4ID0gc3Vic3RyLmluZGV4T2YoYXJyW2ldKTtcblx0XHRcdGlmIChpbmRleCA8IDApXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdGluZGV4ICs9IGFycltpXS5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xuXHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHR2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuXHRcdFx0dmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG5cdFx0XHRyZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuXHRcdH1cblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRyZXR1cm4gW2UuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3BdO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanNcbiAqKi8iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG4vKipcbiAqIEtFWSBjb25zdGFudFxuICovXG5jb25zdCBLRVkgPSB7XG5cdEFMVCAgICAgICAgICA6IDE4LFxuXHRCQUNLX1NQQUNFICAgOiA4LFxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcblx0Q09OVFJPTCAgICAgIDogMTcsXG5cdERFTEVURSAgICAgICA6IDQ2LFxuXHRET1dOICAgICAgICAgOiA0MCxcblx0RU5EICAgICAgICAgIDogMzUsXG5cdEVOVEVSICAgICAgICA6IDEzLFxuXHRFU0NBUEUgICAgICAgOiAyMjAsXG5cdEhPTUUgICAgICAgICA6IDM2LFxuXHRMRUZUICAgICAgICAgOiAzNyxcblx0TUVUQSAgICAgICAgIDogMjI0LFxuXHROVU1fTE9DSyAgICAgOiAxNDQsXG5cdFBBR0VfRE9XTiAgICA6IDM0LFxuXHRQQUdFX1VQICAgICAgOiAzMyxcblx0UEFVU0UgICAgICAgIDogMTksXG5cdFBSSU5UU0NSRUVOICA6IDQ0LFxuXHRSSUdIVCAgICAgICAgOiAzOSxcblx0U0NST0xMX0xPQ0sgIDogMTQ1LFxuXHRTSElGVCAgICAgICAgOiAxNixcblx0U1BBQ0UgICAgICAgIDogMzIsXG5cdFRBQiAgICAgICAgICA6IDksXG5cdFVQICAgICAgICAgICA6IDM4XG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxuXHQvL1NVQlRSQUNUICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDE3MyA6IDE4OVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUV2ZW50KGV2ZW50KSB7XG5cdGlmICghZXZlbnQgfHwgIWV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cblx0Ly8gTmVlZCB0byBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXNcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcblx0XHRrZXkgPSBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGdldEtleURhdGEoZXZlbnQuY3RybEtleSwgZXZlbnQuYWx0S2V5LCBldmVudC5zaGlmdEtleSwgZXZlbnQubWV0YUtleSwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleURhdGEoY3RybCwgYWx0LCBzaGlmdCwgbWV0YSwga2V5KSB7XG5cdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0aWYgKGN0cmwpIGJ1Zi5hcHBlbmQoXCJDVFJMXCIpO1xuXHRpZiAoYWx0KSBidWYuYXBwZW5kKFwiQUxUXCIpO1xuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcblx0aWYgKG1ldGEpIGJ1Zi5hcHBlbmQoXCJNRVRBXCIpO1xuXHRpZiAoa2V5KSBidWYuYXBwZW5kKGtleSk7XG5cblx0cmV0dXJuIGJ1Zi50b1N0cmluZyhcIi5cIik7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdmlldy9NYXJrZXJcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZSxcblx0c3RhcnRNYXJrZXI6IG51bGwsXG5cdGVuZE1hcmtlcjoge1xuXHRcdGlkOiAnRGVmYXVsdF9FbmRNYXJrZXInLFxuXHRcdHR5cGU6ICdhcnJvdycsXG5cdFx0c2l6ZTogMTAsXG5cdFx0Y29sb3I6ICcjMGVhMTE3J1xuXHR9LFxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xuXHRzdGFydDogWzAsIDBdLFxuXHRlbmQ6IFs0MDAsIDIwMF1cbn07XG5cbmNsYXNzIEdyYXBoIHtcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xuXHRcdHRoaXMuZWRnZXMgPSB7fTtcblxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcuZWRnZVR5cGVzLCBcIkVkZ2VzXCIsIGVkZ2VEZWZhdWx0cyk7XG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XG5cdFx0bGV0IGVkZ2VUeXBlcyA9IFV0aWxzLnR5cGUoRWRnZS5uYW1lc3BhY2UpLCBtYXJrZXIsIG1hcmtlckNvbmZpZztcblx0XHRlZGdlVHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XG5cdFx0ZGVsZXRlIGNvbmZpZy5lZGdlVHlwZXM7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHRcdHRoaXMucm9vdCA9IG51bGw7XG5cdFx0aWYgKG1vZGVsKVxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xuXHR9XG5cblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudHlwZSkge1xuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXG5cdCAqL1xuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCwgcG9zKSB7XG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcblx0XHRsZXQgbm9kZSA9IG5ldyBOb2RlQ2xhc3ModGhpcywgY29uZmlnKTtcblxuXHRcdGlmIChwYXJlbnQpXG5cdFx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIG5vZGUsIHBvcyk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xuXHRcdFx0dGhpcy5yb290LnByb3AoJ3JvbGUnLCAncm9vdCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZXNbbm9kZS5pZF0gPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIGZyb20sIHRvKSB7XG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcblx0XHRsZXQgZWRnZSA9IG5ldyBFZGdlQ2xhc3ModGhpcywgY29uZmlnLCBmcm9tLCB0byk7XG5cblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xuXHRcdHRoaXMuZWRnZXNbZWRnZS5pZF0gPSBlZGdlO1xuXHRcdHJldHVybiBlZGdlO1xuXHR9XG5cblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcblx0XHRcdHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRcdGNoaWxkLnBhcmVudC5jaGlsZHJlbiA9IF8ud2l0aG91dChjaGlsZC5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcblx0XHR9XG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XG5cdFx0dmFyIG5vZGVzID0gbW9kZWwubm9kZXM7XG5cdFx0dmFyIGVkZ2VzID0gbW9kZWwuZWRnZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xuXHRcdGRlbGV0ZSBtb2RlbC5lZGdlcztcblxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xuXHRcdGlmIChub2Rlcykge1xuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChlZGdlcykge1xuXHRcdFx0Xy5mb3JFYWNoKGVkZ2VzLCAoZWRnZSkgPT4ge1xuXHRcdFx0XHRsZXQgZnJvbSwgdG87XG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXG5cdFx0XHRcdFx0ZnJvbSA9IHRoaXMubm9kZXNbZWRnZS5mcm9tXTtcblx0XHRcdFx0aWYgKGVkZ2UudG8pXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xuXHRcdFx0XHR0aGlzLmFkZEVkZ2UoZWRnZSwgbm9kZSwgZnJvbSwgdG8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGN1cnJlbnRSb290KCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5HcmFwaC5ERUZBVUxUUyA9IHtcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxuXHRtdWx0aUNvbm5lY3Q6IGZhbHNlLFxuXHRyZWFkT25seTogZmFsc2UsXG5cdHZpZXdPbmx5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9HcmFwaC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ04nKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuaW5FZGdlcyA9IFtdO1xuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRpc0FuY2VzdG9yKG4pIHtcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xuXHRcdHdoaWxlIChub2RlKSB7XG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2Vcblx0YWRkSW5FZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkIHx8IHBvcyA+IGVkZ2UubGVuZ3RoIC0gMSlcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4odmlldykge1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Xy5mb3JFYWNoKHRoaXMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRpZiAocG9ydE5hbWUgPT0gJ2F1dG8nKSB7XG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcblx0XHRpZiAoXy5pc0FycmF5KGxhYmVsKSlcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xuXHR9XG59XG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcblxuLypcblxuLyoqXG4gKiBUaGUgRHJpbGxEb3duUGFyZW50IGlzIHRoZSBwYXJlbnQgdGhhdCBkaXNwbGF5cyB0aGUgdmVydGV4IHdoZW4gZHJpbGxlZCBkb3duLlxuICpcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNMb2NrZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmlzTG9ja2VkKCkpXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+Jztcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQuaXNMb2NrZWQoKSkgJiYgVmVydGV4LnN1cGVyY2xhc3MuY2FuRWRpdC5jYWxsKHRoaXMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4uL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuXG4vKipcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmlkID0gY29uZmlnLmlkO1xuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XG5cblx0XHQvLyBJbml0aWFsaXplIGRlY29yYXRvcnNcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGVjb3JhdG9ycyhjb25maWcuZGVjb3JhdG9ycyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmRlY29yYXRvcnM7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBWaWV3IFByb3BlcnRpZXNcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XG5cdFx0XHR0aGlzLnZpZXdQcm9wcyA9IGNvbmZpZy52aWV3cztcblx0XHRcdGRlbGV0ZSBjb25maWcudmlld3M7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0eXBlXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcblx0XHR0eXBlID0gVXRpbHMudHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSwgdHlwZSk7XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XG5cdFx0ZGVsZXRlIGNvbmZpZy50eXBlO1xuXHRcdHRoaXMucHJvcHMgPSBuZXcgdHlwZShjb25maWcpO1xuXHR9XG5cblx0cHJvcChuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcblx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gbmFtZVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKSB7XG5cdFx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jylcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXTtcblx0XHR9XG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcblx0XHRcdHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcblx0XHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XSA9IHt9O1xuXHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cblxuXHQvKipcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHt7a2V5OiAoc3RyaW5nfCopLCBjbGFzc05hbWU6ICosIG5hbWVzcGFjZTogKiwgYm91bmRzOiAqfX1cblx0ICovXG5cdGdldFZpZXcoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdHJldHVybiBfLmFzc2lnbih7XG5cdFx0XHRpZDogdGhpcy5pZCxcblx0XHRcdGtleToga2V5LFxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmNvbXB1dGVkQ2xhc3NOYW1lLFxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZVxuXHRcdH0sIHNoYXBlKTtcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBzaGFwZUNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XG5cdFx0bGV0IHggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ4XCIpO1xuXHRcdGxldCB5ID0gdGhpcy52aWV3UHJvcChrZXksIFwieVwiKTtcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcblx0XHRsZXQgaGVpZ2h0ID0gdGhpcy52aWV3UHJvcChrZXksIFwiaGVpZ2h0XCIpO1xuXHRcdHNoYXBlID0gbmV3IHNoYXBlQ2xhc3MoeCwgeSwgd2lkdGgsIGhlaWdodCwgc2hhcGVDb25maWcpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdmlldy5pZCk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdFx0Ly9jcmVhdGUgdGhlIHRlbXBsYXRlXG5cdFx0XHRsZXQgcm9sZSA9IHRoaXMucHJvcCgncm9sZScpO1xuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xuXHRcdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcy5nZXRWaWV3KHZpZXcuaWQpKTtcblx0fVxuXG5cdHJlbmRlclNoYXBlKHZpZXcpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xuXHRcdGlmIChzaGFwZSlcblx0XHRcdHJldHVybiBzaGFwZS5yZW5kZXIodmlldyk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwodmlldykge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguY3VycmVudFJvb3QpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcblx0XHRpZiAoYm94KVxuXHRcdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRsZXQgYm94ID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94Jywga2V5KTtcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHQvLyBKdXN0IGdldCB0aGUgY29uZmlnIHdpbGwgaGF2ZSBhIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGJvb3N0IGZvciBJRTExIGFuZCBJRTEwLlxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XG5cdFx0cmV0dXJuIGJveDtcblx0fVxuXG5cdGdldCBjb21wdXRlZENsYXNzTmFtZSgpIHtcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcblx0XHRcdGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb21wdXRlZENsYXNzTmFtZSA9IGJ1Zi50b1N0cmluZygnICcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XG5cdH1cblxuXHRnZXQgbmFtZXNwYWNlKCkge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguY3VycmVudFJvb3QpIHJldHVybiAnJztcblx0XHRyZXR1cm4gXCJyb290LlwiICsgdGhpcy5wcm9wKFwicm9sZVwiKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMuZGVjb3JhdG9ycztcblx0XHRkZWxldGUgdGhpcy5wcm9wcztcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXHR9XG59XG5cbi8qXG5cbkNlbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ4XCIsIE1hdGgucm91bmQoeCkpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24odywgaCkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwid2lkdGhcIiwgdyk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZWRpdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5TZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJkcmFnZ2FibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwicmVzaXphYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0VHlwZUZyb21TdHJpbmcgPSBmdW5jdGlvbih0eXBlU3RyKSB7XG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcblx0dGhpcy5tb2RpZmllcnMgPSBudWxsO1xuXHR2YXIgbW9kaWZpZXJTZXR0aW5ncyA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RpZmllclNldHRpbmdzXCIpO1xuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xuXHRcdF8uZWFjaChtb2RpZmllcnMsIGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0Y29uZmlnLnR5cGUgPSB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShjb25maWcuY2xhc3NOYW1lKTtcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcblx0XHRcdGlmICghY29uZmlnLnR5cGUgfHwgIWNvbmZpZy5zZXR0aW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3Ncblx0XHRfLmVhY2gobW9kaWZpZXJTZXR0aW5ncywgZnVuY3Rpb24oc2V0dGluZywgbmFtZSkge1xuXHRcdFx0aWYgKHNldHRpbmcuc2hvd0Fsd2F5cyAmJiAoIXRoaXMubW9kaWZpZXJzIHx8ICF0aGlzLm1vZGlmaWVyc1tuYW1lXSkpIHtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XG5cdFx0XHRcdGlmICghY29uZmlnLnR5cGUpIHJldHVybjtcblx0XHRcdFx0dGhpcy5hZGRNb2RpZmllcihuYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdH1cbn07XG5cbkNlbGwucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSwgbW9kaWZpZXIpIHtcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcblx0XHR0aGlzLm1vZGlmaWVycyA9IHt9O1xuXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSB0cnVlO1xuXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxuXHRpZiAobW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUHJvY2Vzc01vZGlmaWVyXCIgfHwgbW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUmVzdWx0c1wiKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSBmYWxzZTtcblxuXHR0aGlzLm1vZGlmaWVyc1tuYW1lXSA9IG1vZGlmaWVyO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXJzID0gZnVuY3Rpb24oKSB7XG5cdGlmIChfLmlzVW5kZWZpbmVkKHRoaXMubW9kaWZpZXJzKSlcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xuXHRyZXR1cm4gdGhpcy5tb2RpZmllcnM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0dmFyIG1vZGlmaWVycyA9IHRoaXMuZ2V0TW9kaWZpZXJzKCk7XG5cdGlmIChtb2RpZmllcnMpXG5cdFx0cmV0dXJuIG1vZGlmaWVyc1tuYW1lXTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvQ2VsbC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvNy8yMDE2LlxuICovXG5cbmxldCBjYWNoZXMgPSB7fTtcblxubGV0IENhY2hlID0ge1xuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG5cdFx0dGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV0gPSB2YWx1ZTtcblx0fSxcblxuXHRjb250YWluczogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4ga2V5IGluIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcblx0XHRpZiAoIW5hbWVzcGFjZSlcblx0XHRcdGNhY2hlcyA9IHt9O1xuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0fSxcblxuXHRnZXRDYWNoZTogZnVuY3Rpb24obmFtZXNwYWNlID0gJ2RlZmF1bHQnKSB7XG5cdFx0aWYgKCFjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdFx0cmV0dXJuIGNhY2hlc1tuYW1lc3BhY2VdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5jb25zdCBGT05UX0JPTEQgPSAxLCBGT05UX0lUQUxJQyA9IDIsIEZPTlRfVU5ERVJMSU5FID0gNCwgRk9OVF9TSEFET1cgPSA4O1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0Zm9udFNpemU6IDExLFxuXHRmb250RmFtaWx5OiBcIkFyaWFsXCIsXG5cdGZvbnRTdHlsZTogMCxcblx0cGFkZGluZzogMCxcblx0bGluZVBhZGRpbmc6IDAsXG5cdGFsaWduOiBcImxlZnRcIixcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0cm90YXRpb246IG51bGwsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsLCBtZWFzdXJlRGl2LCBiYXNlbGluZURpdjtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XG5cdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZWFzdXJlRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L2Rpdj5cXFxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHRtZWFzdXJlRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwibWVhc3VyZURpdlwiKTtcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XG5cdFx0fVxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRTaXplID0gbWVhc3VyZURpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0bWVhc3VyZURpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xuXHRcdGxldCBiYXNlbGluZUhlaWdodCA9IHN0cnV0Lm9mZnNldFRvcCArIHN0cnV0Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldFRvcDtcblxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0bGV0IGFyciA9IFtdO1xuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemUuaGVpZ2h0O1xuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcblxuXHRcdGlmICghbWF4V2lkdGggfHwgIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikge1xuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcblx0XHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodDtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0dmFyIHdpZHRoID0gMDtcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXG5cdFx0dmFyIGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcblxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHR2YXIgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvXFxzLyk7XG5cdFx0XHR2YXIgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xuXHRcdFx0XHRcdFx0YnVmLmFwcGVuZCh3b3JkKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSAwO1xuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxuXHRcdFx0XHRcdG5ld0xpbmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gbmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoO1xuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxuXHRcdFx0XHRidWYuYXBwZW5kKGxpbmUpO1xuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xuXHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodCAqIGFyci5sZW5ndGg7XG5cdFx0cmV0dXJuIGFycjtcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XG5cblx0LyoqXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cblx0ICogQHBhcmFtIGxhYmVsIFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gbGFiZWxDb25maWcgVGhlIGNvbmZpZ3VyYXRpb24gb24gaG93IHRvIGRpc3BsYXkgbGFiZWwuIEl0IHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG5cdCAqIHtcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxuXHQgKiAgICAgIGFsaWduOiBjYW4gYmUgZWl0aGVyIFwibGVmdFwiLCBcImNlbnRlclwiIG9yIFwicmlnaHRcIixcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXG5cdCAqICAgICAgaGVpZ2h0LFxuXHQgKiAgICAgIGdlb21ldHJ5XG5cdCAqIH1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldExhYmVsQm94KGxhYmVsLCBsYWJlbENvbmZpZyA9IHt9LCBjb250ZXh0KSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XG5cdFx0bGV0IGZvbnRGYW1pbHkgPSBsYWJlbENvbmZpZy5mb250RmFtaWx5O1xuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XG5cdFx0bGV0IHBhZGRpbmcgPSBsYWJlbENvbmZpZy5wYWRkaW5nO1xuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xuXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xuXHRcdFx0dyA9IHcgPD0gNSA/IGNvbnRleHQud2lkdGggKiB3IDogdztcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xuXHRcdH1cblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3M7XG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxuXHRcdGxldCBwaXZvdCA9IGFsaWduID09ICdjZW50ZXInID8gWzAsIDBdIDogKGFsaWduID09ICdsZWZ0JyA/IFstd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdIDogW3dyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSk7XG5cblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXG5cdFx0Z2VvbWV0cnkud2lkdGggPSBNYXRoLm1heCh3ICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LndpZHRoKTtcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XG5cblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcblx0XHRlbHNlXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcblxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGR4LCBkeTogLWdlb21ldHJ5LmhlaWdodC8yICsgcGFkZGluZyArIHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0IC0gd3JhcHBlZExhYmVsLmJhc2VsaW5lLCBhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0ICsgbGluZVBhZGRpbmcsXG5cdFx0XHRwaXZvdCwgYm91bmRzLCBtYXhCb3VuZHNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyKHZpZXcsIGJveCkge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRsZXQgZWRpdG9yID0ge1xuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsLCBzY2FsZSA9IDEuMCwgc2luZ2xlTGluZSA9IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLmlucHV0KSB7XG5cdFx0XHRcdGlmICh0aGlzLmtleSAhPSBrZXkpIHtcblx0XHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHRhZyA9IHNpbmdsZUxpbmUgPyAnaW5wdXQnIDogJ3RleHRhcmVhJztcblx0XHRcdHRoaXMuaW5wdXQgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KHRhZywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0aWYgKHNpbmdsZUxpbmUpIHtcblx0XHRcdFx0RXZlbnRzLm9uKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcblx0XHRcdFx0XHRcdEV2ZW50cy5vZmYodGhpcy5pbnB1dCwgJ2tleWRvd24ga2V5dXAnKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cblx0XHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5ib3ggPSBib3g7XG5cdFx0XHR0aGlzLnJlZkVsID0gcmVmRWw7XG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcblxuXHRcdFx0bGV0IGxhYmVsQ29uZmlnID0gYm94LmNvbmZpZztcblx0XHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGJveC5tYXhCb3VuZHMueCwgYm94Lm1heEJvdW5kcy55LCBib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUsIGJveC5tYXhCb3VuZHMuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0bGV0IHBvcyA9IERvbVV0aWxzLmdldENlbnRlclBvc2l0aW9uKHJlZkVsLCBjb250YWluZXIpO1xuXHRcdFx0cG9zID0gW3Bvc1swXSArIG1heEJvdW5kcy5sZWZ0LCBwb3NbMV0gKyBtYXhCb3VuZHMudG9wXTtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IG1heEJvdW5kcy53aWR0aCArICdweCcsXG5cdFx0XHRcdGhlaWdodDogbWF4Qm91bmRzLmhlaWdodCArICdweCcsXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIjogbGFiZWxDb25maWcuZm9udEZhbWlseSxcblx0XHRcdFx0XCJmb250LXNpemVcIjogKGxhYmVsQ29uZmlnLmZvbnRTaXplICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xuXHRcdFx0XHQvKlwiY29sb3JcIjogbGFiZWxDb25maWcuZm9udENvbG9yKi9cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gYm94Ll9sYWJlbDtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0YXJ0JywgW3RoaXMua2V5XSk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKGNhbmNlbCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cblx0XHRcdGNhbmNlbCA9IGNhbmNlbCB8fCBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRleHRFbClcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cblx0XHRcdGlmICghY2FuY2VsKVxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xuXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0b3AnLCBbdGhpcy5rZXldKTtcblxuXHRcdFx0Ly8gcmVtb3ZlIHRoZSBpbnB1dFxuXHRcdFx0dGhpcy5pbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuaW5wdXQpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuaW5wdXQ7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcCgnbGFiZWwnKTtcblx0XHRpZiAobGFiZWwpXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cblx0ICovXG5cdGdldFJlZmVyZW5jZVBvaW50cyhrZXkpIHtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0aWYgKHRoaXMuc291cmNlKVxuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XG5cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0VGVybWluYWxWaXN1YWwoa2V5LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xuXG5cdFx0bGV0IGdldEJvdW5kID0gZnVuY3Rpb24ocHQpIHtcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xuXHRcdH07XG5cblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMuc291cmNlLmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3NvdXJjZVBvcnQnKSwgcmVmUHRzWzFdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcblxuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzFdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzFdKSwgcmVmUHRzWzBdLCB0cnVlKX0pO1xuXHRcdHJldHVybiB0ZXJtaW5hbHM7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgY29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdHNoYXBlID0gTGluay5nZXRMaW5rKHRoaXMuZ2V0VGVybWluYWxWaXN1YWwoa2V5LCBjb25maWcub3J0aG9nb25hbCksIGNvbmZpZywgdGhpcy5wcm9wKCdzdGFydE1hcmtlcicpLCB0aGlzLnByb3AoJ2VuZE1hcmtlcicpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0VkZ2U6eycgKyAoIXRoaXMuc291cmNlID8gJ251bGwnIDogdGhpcy5zb3VyY2UuaWQpICsgJy0tJyArICghdGhpcy50YXJnZXQgPyAnbnVsbCcgOiB0aGlzLnRhcmdldC5pZCkgKyAnfSc7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLnNldFNvdXJjZShudWxsKTtcblx0XHR0aGlzLnNldFRhcmdldChudWxsKTtcblx0fVxufVxuRWRnZS5uYW1lc3BhY2UgPSBcIkVkZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEVkZ2U7XG5cbi8qXG5cbkVkZ2UucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xuXHRcdHJldHVybiAodGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSA6IHRydWUpICYmICh0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInZpc2libGVcIik7XG5cdH0gZWxzZVxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvRWRnZS5qc1xuICoqLyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxubGV0IE1hcmtlciA9IChmdW5jdGlvbigpIHtcblxuXHQvKiogQmVnaW4gU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGFycm93KHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlhbmdsZShzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIG92YWwoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgciA9IHNpemUgLyAyO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC1yLCAtciwgc2l6ZSwgc2l6ZSksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbMCwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIicgKyByICsgJ1wiIHJ5PVwiJyArIHIgKyAnXCI+PC9lbGxpcHNlPic7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpYW1vbmQoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJyc7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXHQvKiogRW5kIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBnZXRNYXJrZXIoY29uZmlnLCBzb3VyY2UpIHtcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcblx0XHR2YXIgbWFya2VyID0gZmFjdG9yeShjb25maWcuc2l6ZSwgc291cmNlLCBjb25maWcpO1xuXHRcdG1hcmtlci5pZCA9IGNvbmZpZy5pZDtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcblx0cmVnaXN0cnlbJ3RyaWFuZ2xlJ10gPSB0cmlhbmdsZTtcblx0cmVnaXN0cnlbJ292YWwnXSA9IG92YWw7XG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xuXG5cdHJldHVybiB7XG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxuXHRcdGdldE1hcmtlcjogZ2V0TWFya2VyXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTWFya2VyLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmNsYXNzIExheW91dCB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcblx0XHRcdGlmIChjb25maWcub3JpZW50YXRpb24udG9VcHBlckNhc2UoKSA9PSBcIkhPUklaT05UQUxcIilcblx0XHRcdFx0Y29uZmlnLm9yaWVudGF0aW9uID0gTGF5b3V0LkhPUklaT05UQUw7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlbGV0ZSBjb25maWcub3JpZW50YXRpb247XG5cdFx0fVxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0fVxuXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5MYXlvdXQuVkVSVElDQUwgPSAwO1xuTGF5b3V0LkhPUklaT05UQUwgPSAxO1xuXG5MYXlvdXQuREVGQVVMVFMgPSB7XG5cdG9yaWVudGF0aW9uOiBMYXlvdXQuVkVSVElDQUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuXG5jbGFzcyBGbG93TGF5b3V0IGV4dGVuZHMgTGF5b3V0IHtcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xuXHRcdHZhciBpdGVtcztcblx0XHRpZiAoIXJvb3QpXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2Rlcztcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkocm9vdCkpXG5cdFx0XHRpdGVtcyA9IHJvb3Q7XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbXMgPSByb290LmdldExpbmtlZE5vZGVzKCd0YXJnZXQnKTtcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm47XG5cblx0XHR2YXIgeCA9IDAsIHkgPSAwLCBoID0gMCwgbm9kZTtcblx0XHR2YXIgcDEgPSAwLCBwMiA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bm9kZSA9IGl0ZW1zW2ldO1xuXHRcdFx0aWYgKHggPiAwICYmIHggKyB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIikgPiBib3VuZHMud2lkdGgpIHtcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXG5cdFx0XHRcdHkgKz0gaCArIHRoaXMudmdhcDtcblx0XHRcdFx0eCA9IDA7aCA9IDA7cDEgPSAwO3AyKys7XG5cdFx0XHR9XG5cdFx0XHRub2RlLl9mbFBvcyA9IFtwMSwgcDJdO1xuXHRcdFx0bm9kZS5tb3ZlVG8oW2JvdW5kcy54ICsgeCwgYm91bmRzLnkgKyB5XSk7XG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcblx0XHRcdHAxKys7XG5cdFx0XHRoID0gaCA8IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgPyBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpIDogaDtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKG5ldyBSZWN0YW5nbGUoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIHkgKyBoKSk7XG5cdH1cbn1cblxuRmxvd0xheW91dC5ERUZBVUxUUyA9IHtcblx0aGdhcDogMTAsXG5cdHZnYXA6IDEwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93TGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcblxuY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihpZCwgY29udGFpbmVyLCBjb25maWcgPSB7fSwgZ3JhcGggPSBudWxsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiB0aGlzLmlkLCB0YWJpbmRleDogMCwgbnM6ICdncmFwaCd9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fdHJhbnNsYXRlID0gWzAsIDBdO1xuXHRcdHRoaXMuX3NjYWxlID0gMS4wO1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xuXHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5ub2RlQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuZWRnZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmNvbm5lY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldCBncmFwaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZ3JhcGg7XG5cdH1cblxuXHRzZXQgZ3JhcGgoZ3JhcGgpIHtcblx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xuXHRcdGxldCByb290ID0gZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0aWYgKHJvb3QpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFtyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JykgfHwgMCwgcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScpIHx8IDBdO1xuXHRcdFx0dGhpcy5fc2NhbGUgPSByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcblx0XHR9XG5cdH1cblxuXHR2aWV3cG9ydChzY2FsZWQsIHZpZXdwb3J0KSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQoc2NhbGVkKSB8fCBfLmlzTnVsbChzY2FsZWQpKSBzY2FsZWQgPSBmYWxzZTtcblx0XHRpZiAoIXZpZXdwb3J0KSB7XG5cdFx0XHR2YXIgdnAgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuYm94Lm9mZnNldFdpZHRoLCB0aGlzLmJveC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0aWYgKHNjYWxlZClcblx0XHRcdFx0cmV0dXJuIFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2aWV3cG9ydCk7XG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XG5cdH1cblxuXHRnZXQgdHJhbnNsYXRlKCkgeyByZXR1cm4gdGhpcy5fdHJhbnNsYXRlOyB9XG5cdHNldCB0cmFuc2xhdGUodCkgeyB0aGlzLnRyYW5zZm9ybSh0WzBdLCB0WzFdKTsgfVxuXHRnZXQgc2NhbGUoKSB7IHJldHVybiB0aGlzLl9zY2FsZTsgfVxuXHRzZXQgc2NhbGUoaykge1xuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0XCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlIC8gdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWN0dWFsXCI6XG5cdFx0XHRcdGsgPSAxLjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImZpdFwiOlxuXHRcdFx0XHR2YXIgZ3JpZFNpemUgPSB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSAqIDI7XG5cblx0XHRcdFx0dmFyIGdCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXHRcdFx0XHR2YXIgdkJvdW5kcyA9IHRoaXMudmlld3BvcnQoKTtcblxuXHRcdFx0XHR2Qm91bmRzLndpZHRoIC09IGdyaWRTaXplO1xuXHRcdFx0XHR2Qm91bmRzLmhlaWdodCAtPSBncmlkU2l6ZTtcblxuXHRcdFx0XHQvKiBEbyBub3Qgem9vbSBtb3JlIHRoYW4gYWN0dWFsIGlmIGdyYXBoIGFscmVhZHkgZml0cyBpbnRvIHRoZSBib3VuZHMgKi9cblx0XHRcdFx0ayA9IE1hdGgubWluKCh2Qm91bmRzLndpZHRoIC8gZ0JvdW5kcy53aWR0aCksICh2Qm91bmRzLmhlaWdodCAvZ0JvdW5kcy5oZWlnaHQpLCAxLjApO1xuXG5cdFx0XHRcdC8vVE9ETzogQWRkIGNlbnRlcmluZyBjb2RlIGhlcmUgb3IgdHJpZ2dlciBhbiBldmVudCBmb3IgdGhhdFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmIChfLmlzU3RyaW5nKGspKSBrID0gcGFyc2VGbG9hdChrKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNmb3JtKG51bGwsIG51bGwsIGspO1xuXHR9XG5cblx0dHJhbnNmb3JtKHggPSBudWxsLCB5ID0gbnVsbCwgc2NhbGUgPSBudWxsKSB7XG5cdFx0bGV0IGdyYXBoID0gdGhpcy5ncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoID8gZ3JhcGguY3VycmVudFJvb3QgOiBudWxsO1xuXHRcdGlmICghXy5pc051bGwoeCkpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZVswXSA9IHg7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcsIHgpO1xuXHRcdH1cblx0XHRpZiAoIV8uaXNOdWxsKHkpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMV0gPSB5O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knLCB5KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbChzY2FsZSkpIHtcblx0XHRcdHRoaXMuX3NjYWxlID0gc2NhbGU7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnLCBzY2FsZSk7XG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgZ3JhcGhcblx0XHRcdGxldCBzID0gdGhpcy5kaXNwYXRjaGVyLnNjYWxlO1xuXHRcdFx0aWYgKHMgIT0gc2NhbGUpXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zY2FsZSA9IHNjYWxlO1xuXHRcdH1cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm4gZmFsc2U7XG5cdFx0Ly8gaW50aWFsaXplIHZpZXdzXG5cdFx0aWYgKHRoaXMubGF5b3V0KVxuXHRcdFx0dGhpcy5sYXlvdXQubGF5b3V0KHRoaXMuX2dyYXBoLmN1cnJlbnRSb290LCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCwgW3RoaXMucHJvcCgnbWluWm9vbScpLCB0aGlzLnByb3AoJ21heFpvb20nKV0pO1xuXHRcdFx0bGV0IGpzQ2xhc3M7XG5cdFx0XHRpZiAodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpIHtcblx0XHRcdFx0anNDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKTtcblx0XHRcdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCwgdGhpcy5zY2FsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHRyZWZyZXNoKCkge31cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IGluIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0c1twYXJ0XTtcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XG5cdFx0XHRcdG9ialtwYXJ0XSA9IHByZXByb2Nlc3NvcltfLmNhbWVsQ2FzZSgncmVuZGVyICcgKyBwYXJ0KV0odGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XG5cdFx0fVxuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuX2dyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmxheW91dDtcblx0XHRpZiAodGhpcy5kaXNwYXRjaGVyKSB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZGlzcGF0Y2hlcjtcblx0XHR9XG5cdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gJyc7XG5cdH1cbn1cblJlbmRlcmVyLkRFRkFVTFRTID0ge1xuXHRkZWZhdWx0Q2xpY2tNb2RlOiBcInBhblwiLFxuXHRoaWRlT3V0bGluZTogZmFsc2UsXG5cdHNpbmdsZVNlbGVjdDogdHJ1ZSxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRncmlkRW5hYmxlZDogZmFsc2UsXG5cdGd1aWRlc0VuYWJsZWQ6IHRydWUsXG5cdGdyaWRTaXplOiAzMCxcblx0bWF4Wm9vbTogNC4wLFxuXHRtaW5ab29tOiAwLjIsXG5cdHpvb21GYWN0b3I6IDEuMixcblx0bWFza09wYWNpdHk6IDAuNSxcblx0Z3JhcGhCZWhhdmlvcjogR3JhcGhCZWhhdmlvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L1JlbmRlcmVyLmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi8yOC8yMDE2LlxuICovXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcblxuLyoqXG4gKiBHcmFwaCBoYW5kbGVyIGhhbmRsZXMgUGFubmluZyBhbmQgWm9vbSBhbmQgcnViYmVyIGJhbmQgc2VsZWN0aW9uXG4gKi9cbmNsYXNzIEdyYXBoQmVoYXZpb3IgZXh0ZW5kcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0c3VwZXIocmVuZGVyZXIpO1xuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcblx0XHRsZXQgZiA9IGZ1bmN0aW9uKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKHR5cGUsIG5zLCBncmFwaCwgZXZlbnQpO1xuXHRcdH07XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcignZHJhZyouZ3JhcGgnLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ3pvb20uKicsIHRoaXMuaGFuZGxlWm9vbSwgdGhpcyk7XG5cdFx0Ly9kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLmdyYXBoJywgJ21vdXNlZW50ZXIuZ3JhcGgnLCAnbW91c2VsZWF2ZS5ncmFwaCddLCBmKTtcblx0XHR0aGlzLm9mZnNldCA9IG51bGw7XG5cdH1cblxuXHRoYW5kbGVab29tKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKG51bGwsIG51bGwsIGV2ZW50LnNjYWxlKTtcblx0fVxuXG5cdGhhbmRsZURyYWcodHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcblx0XHRcdGxldCBwYW4gPSAodGhpcy5yZW5kZXJlci5wcm9wKFwiZGVmYXVsdENsaWNrTW9kZVwiKSA9PSBcInBhblwiKSBeIChldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcblx0XHRcdGlmICghcGFuKSByZXR1cm47XG5cdFx0XHRsZXQgdCA9IHRoaXMucmVuZGVyZXIudHJhbnNsYXRlO1xuXHRcdFx0dGhpcy5vZmZzZXQgPSBbdFswXSAtIHBvc1swXSwgdFsxXSAtIHBvc1sxXV07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5vZmZzZXQpIHJldHVybjtcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShwb3NbMF0gKyB0aGlzLm9mZnNldFswXSwgcG9zWzFdICsgdGhpcy5vZmZzZXRbMV0pO1xuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKCdtb3VzZXVwJywgbnMsIGdyYXBoLCBldmVudCk7XG5cdFx0XHRkZWxldGUgdGhpcy5vZmZzZXQ7XG5cdFx0fVxuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoQmVoYXZpb3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVuZGVyZXI7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0JlaGF2aW9yLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi4vdXRpbC9iYXNlNjRcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5pZiAodHlwZW9mIChTVkdFbGVtZW50KSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIFwic3ZnXCIpO1xuXHRzdmcuaW5uZXJIVE1MID0gJzxjaXJjbGUvPic7XG5cdGlmIChzdmcuZmlyc3RDaGlsZCAhPT0gXCJbb2JqZWN0IFNWR0NpcmNsZUVsZW1lbnRdXCIpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTVkdFbGVtZW50LnByb3RvdHlwZSwge1xuXHRcdFx0XCJvdXRlckhUTUxcIjoge1xuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciAkbm9kZSwgJHRlbXA7XG5cdFx0XHRcdFx0JHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHQkbm9kZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHRcdCR0ZW1wLmFwcGVuZENoaWxkKCRub2RlKTtcblx0XHRcdFx0XHRyZXR1cm4gJHRlbXAuaW5uZXJIVE1MO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJpbm5lckhUTUxcIjoge1xuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBzID0gdGhpcy5vdXRlckhUTUw7XG5cdFx0XHRcdFx0dmFyIHJvcGVuID0gbmV3IFJlZ0V4cChcIjxcIiArIHRoaXMubm9kZU5hbWUgKyAnXFxcXGIoPzooW1wiXFwnXSlbXlwiXSo/KFxcXFwxKXxbXj5dKSo+JywgXCJpXCIpO1xuXHRcdFx0XHRcdHZhciByY2xvc2UgPSBuZXcgUmVnRXhwKFwiPFxcL1wiICsgdGhpcy5ub2RlTmFtZSArIFwiPiRcIiwgXCJpXCIpO1xuXHRcdFx0XHRcdHJldHVybiAgcy5yZXBsYWNlKHJvcGVuLCBcIlwiKS5yZXBsYWNlKHJjbG9zZSwgXCJcIik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24obWFya3VwKSB7XG5cdFx0XHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0XHRcdHdoaWxlIChjaGlsZCA9IHRoaXMubGFzdENoaWxkKVxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCc8c3ZnPicpLmFwcGVuZChtYXJrdXApLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRcdFx0XHRsZXQgJHRlbXAgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBidWYudG9TdHJpbmcoKSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0d2hpbGUgKCR0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKCR0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHQvLyBEZWZpbmUgdGhlIHRvRGF0YVVSTCBmb3IgU1ZHXG5cdFNWR0VsZW1lbnQucHJvdG90eXBlLnRvRGF0YVVSTCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuXHRcdGxldCBfc3ZnID0gdGhpcztcblxuXHRcdGxldCBkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykge307XG5cblx0XHRpZiAob3B0aW9uc1snZGVidWcnXSA9PSB0cnVlICYmIHR5cGVvZihjb25zb2xlKSAhPSAndW5kZWZpbmVkJylcblx0XHRcdGRlYnVnID0gZnVuY3Rpb24obXNnKSB7IGNvbnNvbGUubG9nKFwiU1ZHLnRvRGF0YVVSTDpcIiwgbXNnKTsgfTtcblxuXHRcdGZ1bmN0aW9uIGV4cG9ydFNWRygpIHtcblx0XHRcdHZhciBzdmdfeG1sID0gX3N2Zy5vdXRlckhUTUw7XG5cdFx0XHR2YXIgc3ZnX2RhdGF1cmwgPSBiYXNlNjRkYXRhVVJMZW5jb2RlKHN2Z194bWwpO1xuXHRcdFx0ZGVidWcodHlwZSArIFwiIGxlbmd0aDogXCIgKyBzdmdfZGF0YXVybC5sZW5ndGgpO1xuXG5cdFx0XHQvLyBOT1RFIGRvdWJsZSBkYXRhIGNhcnJpZXJcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHN2Z19kYXRhdXJsKTtcblx0XHRcdHJldHVybiBzdmdfZGF0YXVybDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBiYXNlNjRkYXRhVVJMZW5jb2RlKHMpIHtcblx0XHRcdHZhciBiNjQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XG5cblx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cuYnRvYVxuXHRcdFx0aWYgKHdpbmRvdy5idG9hKSB7XG5cdFx0XHRcdGRlYnVnKFwidXNpbmcgd2luZG93LmJ0b2EgZm9yIGJhc2U2NCBlbmNvZGluZ1wiKTtcblx0XHRcdFx0YjY0ICs9IGJ0b2Eocyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGN1c3RvbSBiYXNlNjQgZW5jb2RlclwiKTtcblx0XHRcdFx0YjY0ICs9IEJhc2U2NC5lbmNvZGUocyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBiNjQ7XG5cdFx0fVxuXG5cdFx0Ly8gTmF0aXZlIGV4cG9ydCBkb2Vzbid0IHdvcmsgdmVyeSB3ZWxsLiBzaG91bGQgdXNlIGNhbnZnIGluc3RlYWQuXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2UodHlwZSkge1xuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0XHRcdC8vIFRPRE86IGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpLCBkbyBzb21lIHRyYW5zbGF0aW9uIG1hZ2ljP1xuXG5cdFx0XHR2YXIgc3ZnX2ltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0dmFyIHN2Z194bWwgPSBfc3ZnLm91dGVySFRNTDtcblx0XHRcdHN2Z19pbWcuc3JjID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcblxuXHRcdFx0c3ZnX2ltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVidWcoXCJleHBvcnRlZCBpbWFnZSBzaXplOiBcIiArIFtzdmdfaW1nLndpZHRoLCBzdmdfaW1nLmhlaWdodF0pO1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSBzdmdfaW1nLndpZHRoO1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gc3ZnX2ltZy5oZWlnaHQ7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2Uoc3ZnX2ltZywgMCwgMCk7XG5cblx0XHRcdFx0Ly8gU0VDVVJJVFlfRVJSIFdJTEwgSEFQUEVOIE5PV1xuXHRcdFx0XHR2YXIgaW1hZ2VfZGF0YXVybCA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG5cdFx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgaW1hZ2VfZGF0YXVybC5sZW5ndGgpO1xuXG5cdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKCBpbWFnZV9kYXRhdXJsICk7XG5cdFx0XHRcdGVsc2UgZGVidWcoXCJXQVJOSU5HOiBubyBjYWxsYmFjayBzZXQsIHNvIG5vdGhpbmcgaGFwcGVucy5cIik7XG5cdFx0XHR9O1xuXG5cdFx0XHRzdmdfaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVidWcoXG5cdFx0XHRcdFx0XCJDYW4ndCBleHBvcnQhIE1heWJlIHlvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgXCIgK1xuXHRcdFx0XHRcdFwiU1ZHIGluIGltZyBlbGVtZW50IG9yIFNWRyBpbnB1dCBmb3IgQ2FudmFzIGRyYXdJbWFnZT9cXG5cIiArXG5cdFx0XHRcdFx0XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NWRyNOYXRpdmVfc3VwcG9ydFwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBOT1RFOiB3aWxsIG5vdCByZXR1cm4gYW55dGhpbmdcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleHBvcnRJbWFnZUNhbnZnKHR5cGUpIHtcblx0XHRcdGlmICghY2FudmcpIHJldHVybiBudWxsO1xuXHRcdFx0bGV0IGNhbnZhcyA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycsIG51bGwsIHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRcdFx0aWYgKCFvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpIHtcblx0XHRcdFx0Y2FudmcoY2FudmFzLCBfc3ZnLm91dGVySFRNTCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsZXQgcGFkZGluZyA9IG9wdGlvbnMucGFkZGluZyB8fCAwO1xuXHRcdFx0XHRsZXQgc2NhbGUgPSAxLjA7XG5cdFx0XHRcdGxldCB0cmFuc2xhdGUgPSBbMCwgMF07XG5cdFx0XHRcdGxldCBiYm94ID0gX3N2Zy5nZXRCQm94KCk7XG5cdFx0XHRcdGRlYnVnKFwiZGV0ZWN0ZWQgc3ZnIGRpbWVuc2lvbnMgXCIgKyBbYmJveC54LCBiYm94LnksIGJib3gud2lkdGgsIGJib3guaGVpZ2h0XSk7XG5cdFx0XHRcdGxldCB0cmFuc2Zvcm0gPSBfc3ZnLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyk7XG5cdFx0XHRcdGlmICh0cmFuc2Zvcm0pIHtcblx0XHRcdFx0XHRkZWJ1ZygnZGV0ZWN0ZWQgc3ZnIHRyYW5zZm9ybSAnICsgdHJhbnNmb3JtKTtcblx0XHRcdFx0XHR0cmFuc2Zvcm0gPSBTVkdSZW5kZXJlci50cmFuc2Zvcm0odHJhbnNmb3JtKTtcblx0XHRcdFx0XHR0cmFuc2xhdGUgPSB0cmFuc2Zvcm0udHJhbnNsYXRlO1xuXHRcdFx0XHRcdHNjYWxlID0gdHJhbnNmb3JtLnNjYWxlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJzxzdmcgd2lkdGg9XCInKS5hcHBlbmQoYmJveC53aWR0aCArIDIqcGFkZGluZykuYXBwZW5kKCdweFwiIGhlaWdodD1cIicpLmFwcGVuZChiYm94LmhlaWdodCArIDIqcGFkZGluZykuYXBwZW5kKCdweFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgnKVxuXHRcdFx0XHRcdC5hcHBlbmQoLWJib3gueCt0cmFuc2xhdGVbMF0rcGFkZGluZykuYXBwZW5kKCcsJykuYXBwZW5kKC1iYm94LnkrdHJhbnNsYXRlWzFdK3BhZGRpbmcpLmFwcGVuZCgnKXNjYWxlKCcpLmFwcGVuZChzY2FsZSkuYXBwZW5kKCcpXCI+Jylcblx0XHRcdFx0XHQuYXBwZW5kKF9zdmcuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MKS5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdFx0Y2FudmcoY2FudmFzLCBidWYudG9TdHJpbmcoKSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgaW1hZ2VfZGF0YXVybCA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG5cdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xuXHRcdFx0Y2FudmFzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2FudmFzKTtcblx0XHRcdHJldHVybiBpbWFnZV9kYXRhdXJsO1xuXHRcdH1cblxuXHRcdGlmICghdHlwZSkgdHlwZSA9IFwiaW1hZ2Uvc3ZnK3htbFwiO1xuXG5cdFx0aWYgKG9wdGlvbnMua2VlcE5vblNhZmUpIGRlYnVnKFwiTk9URToga2VlcE5vblNhZmUgaXMgTk9UIHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIVwiKTtcblx0XHRpZiAob3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSBkZWJ1ZyhcIk5PVEU6IGtlZXBPdXRzaWRlVmlld3BvcnQgaXMgb25seSBzdXBwb3J0ZWQgd2l0aCBjYW52ZyBleHBvcnRlci5cIik7XG5cblx0XHRzd2l0Y2ggKHR5cGUpIHtcblx0XHRcdGNhc2UgXCJpbWFnZS9zdmcreG1sXCI6XG5cdFx0XHRcdHJldHVybiBleHBvcnRTVkcoKTtcblx0XHRcdGNhc2UgXCJpbWFnZS9wbmdcIjpcblx0XHRcdGNhc2UgXCJpbWFnZS9qcGVnXCI6XG5cdFx0XHRcdGlmICghb3B0aW9ucy5yZW5kZXJlcikge1xuXHRcdFx0XHRcdGlmICh3aW5kb3cuY2FudmcpIG9wdGlvbnMucmVuZGVyZXIgPSBcImNhbnZnXCI7XG5cdFx0XHRcdFx0ZWxzZSBvcHRpb25zLnJlbmRlcmVyPVwibmF0aXZlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLnJlbmRlcmVyKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImNhbnZnXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGNhbnZnIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBpbWFnZSBleHBvcnRcIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKTtcblx0XHRcdFx0XHRjYXNlIFwibmF0aXZlXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIG5hdGl2ZSByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgZXhwb3J0LiBUSElTIE1JR0hUIEZBSUwuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cG9ydEltYWdlKHR5cGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVua25vd24gaW1hZ2UgcmVuZGVyZXIgZ2l2ZW4sIGRvaW5nIG5vdGluZyAoXCIgKyBvcHRpb25zLnJlbmRlcmVyICsgXCIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGVidWcoXCJTb3JyeSEgRXhwb3J0aW5nIGFzICdcIiArIHR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdGxldCByb290ID0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdDtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Jyk7XG5cdFx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdFx0YnVmLmFwcGVuZCgnPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpLmFwcGVuZCh0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQodFsxXSkuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHRoaXMuc2NhbGUpLmFwcGVuZCgnKVwiPicpO1xuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdHRoaXMuYm94LmlubmVySFRNTCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5zdmcgPSB0aGlzLmJveC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaC5tYXJrZXJzO1xuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xuXHRcdGJ1Zi5hcHBlbmQoJzwvZGVmcz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdGlmICghdGhpcy5zdmcpIHJldHVybjtcblx0XHRsZXQgZyA9IHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2cnKTtcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0WzBdICsgJywnICsgdFsxXSArICcpc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKScpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIHN0cjEsIHN0cjI7XG5cdFx0bWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxuXHRcdFx0XHRjb250cm9sUHRzWzIqaV0gPSBbbmV4dCwgbmV4dF07XG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0ZDIgPSBuZXh0LmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHByZXYpLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0cHJldiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcblx0XHR9XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG5cdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXSwgc2NhbGUgPSAxLjA7XG5cdFx0Ly9cblx0XHRsZXQgcGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3RyYW5zbGF0ZVxcKFxccyooW14pXSspLyk7XG5cdFx0aWYgKHBhcnRzKSB7XG5cdFx0XHRsZXQgbSA9IHBhcnRzWzFdLnRyaW0oKS5tYXRjaCgvKFtcXGQuLV0rKVsgLF0oW1xcZC4tXSspLyk7XG5cdFx0XHRpZiAobSkge1xuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSBwYXJzZUZsb2F0KG1bMV0pIHx8IDA7XG5cdFx0XHRcdHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQobVsyXSkgfHwgMDtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSB0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KHBhcnRzWzFdKTtcblx0XHR9XG5cdFx0cGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3NjYWxlXFwoXFxzKihbXildKykvKTtcblx0XHRpZiAocGFydHMpXG5cdFx0XHRzY2FsZSA9IHBhcnNlRmxvYXQocGFydHNbMV0pIHx8IDEuMDtcblxuXHRcdHJldHVybiB7dHJhbnNsYXRlLCBzY2FsZX07XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0sJHt5fSlcIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdEVsbGlwc2U6ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIiR7d2lkdGgvMn1cIiByeT1cIiR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJlY3RhbmdsZTogJzxyZWN0IHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgcng9XCI5XCIgcnk9XCI5XCIvPicsXG5cdFRyaWFuZ2xlOiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzJ9IDAsJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmhvbWJ1czogJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LDBcIi8+Jyxcblx0SGV4YWdvbjogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIHZlcnRpY2FsID0gY29uZmlnLmRpcmVjdGlvbiA9PSAnbm9ydGgnIHx8IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ3NvdXRoJztcblx0XHRpZiAodmVydGljYWwpXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzR9ICR7d2lkdGgvMn0sJHtoZWlnaHQvNH0gMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwke2hlaWdodC80fSAkey13aWR0aC8yfSwkey1oZWlnaHQvNH1cIi8+Jztcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LDAgJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwICR7d2lkdGgvNH0sJHtoZWlnaHQvMn0gJHstd2lkdGgvNH0sJHtoZWlnaHQvMn1cIi8+Jztcblx0fSxcblx0UG9seWdvbjogZnVuY3Rpb24oc2hhcGUpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHBvbHlnb24gcG9pbnRzPVwiJyk7XG5cdFx0c2hhcGUucG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocHQpe1xuXHRcdFx0YnVmLmFwcGVuZChwdFswXSkuYXBwZW5kKCcsJykuYXBwZW5kKHB0WzFdKS5hcHBlbmQoJyAnKTtcblx0XHR9KTtcblx0XHRidWYucmVtb3ZlTGFzdCgpO1xuXHRcdGJ1Zi5hcHBlbmQoJ1wiLz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH0sXG5cdEltYWdlOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHRyZXR1cm4gJzxpbWFnZSB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWY9XCInICsgY29uZmlnLmltYWdlICsgJ1wiLz4nO1xuXHR9LFxuXHRNYXJrZXI6IGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdHJldHVybiBgXG48bWFya2VyIGlkPVwiJHttYXJrZXIuaWR9XCIgbWFya2VyV2lkdGg9XCIke21hcmtlci5zaXplfVwiIG1hcmtlckhlaWdodD1cIiR7bWFya2VyLnNpemV9XCIgcmVmeD1cIiR7bWFya2VyLnJlZlswXX1cIiBcbnJlZnk9XCIke21hcmtlci5yZWZbMV19XCIgb3JpZW50PVwiYXV0b1wiIHZpZXdib3g9XCIke21hcmtlci52aWV3Qm94Lnh9ICR7bWFya2VyLnZpZXdCb3gueX0gJHttYXJrZXIudmlld0JveC53aWR0aH0gJHttYXJrZXIudmlld0JveC5oZWlnaHR9XCJcbm1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiAke21hcmtlci5maWxsID8gYHN0eWxlPVwic3Ryb2tlOiAke21hcmtlci5maWxsfTtmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XG5gLnRyaW0oKTtcblx0fSxcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xuXHRcdHJldHVybiBgXG48cGF0dGVybiBpZD1cIkdyaWRQYXR0ZXJuXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuPC9wYXR0ZXJuPmAudHJpbSgpO1xuXHR9LFxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcbiAgIGlmIChib3gpIHslPlxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cblx0PCUgaWYgKGJveC5jb25maWcuYmFja2dyb3VuZFN0eWxlKSB7JT5cblx0XHQ8cmVjdCB4PVwiPCU9LWJveC5ib3VuZHMud2lkdGgvMiU+XCIgeT1cIjwlPS1ib3guYm91bmRzLmhlaWdodC8yJT5cIiB3aWR0aD1cIjwlPWJveC5ib3VuZHMud2lkdGglPlwiIGhlaWdodD1cIjwlPWJveC5ib3VuZHMuaGVpZ2h0JT5cIiBzdHlsZT1cIjwlPWJveC5jb25maWcuYmFja2dyb3VuZFN0eWxlJT5cIi8+XG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxuXHRcdF8uZWFjaChib3gubGFiZWwsIGZ1bmN0aW9uKHZhbHVlLCBsaW5lKSB7JT5cblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxuXHRcdDwlfSk7fSBlbHNlIHsgJT5cblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+XG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9