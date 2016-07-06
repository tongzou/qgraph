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
	
	var _Link = __webpack_require__(11);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _EventDispatcher = __webpack_require__(12);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Graph = __webpack_require__(14);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _Cell = __webpack_require__(16);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Node = __webpack_require__(15);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(19);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Layout = __webpack_require__(21);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(22);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(18);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Marker = __webpack_require__(20);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _Renderer = __webpack_require__(23);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _SVGRenderer = __webpack_require__(26);
	
	var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);
	
	var _GraphBehavior = __webpack_require__(24);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
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
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(4);
	
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(6);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Rectangle = __webpack_require__(4);
	
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
/* 11 */
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
	
	var _Utils = __webpack_require__(2);
	
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
/* 12 */
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
	
	var _KeyUtils = __webpack_require__(13);
	
	var KeyUtils = _interopRequireWildcard(_KeyUtils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _StringBuffer = __webpack_require__(8);
	
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
/* 13 */
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
/* 14 */
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
	
	var _Node = __webpack_require__(15);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(19);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Marker = __webpack_require__(20);
	
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
			var _iteratorNormalCompletion = true;
			var _didIteratorError = false;
			var _iteratorError = undefined;
	
			try {
				for (var _iterator = edgeTypes.entries()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
					var type = _step.value;
	
					markerConfig = type[1].prototype.startMarker;
					if (markerConfig) {
						marker = _Marker2.default.getMarker(markerConfig, true);
						this.markers.push(marker);
					}
					markerConfig = type[1].prototype.endMarker;
					if (markerConfig) {
						marker = _Marker2.default.getMarker(markerConfig, false);
						this.markers.push(marker);
					}
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
/* 15 */
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
	
	var _Cell2 = __webpack_require__(16);
	
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
/* 16 */
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
	
	var _Cache = __webpack_require__(17);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Shape = __webpack_require__(6);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Label = __webpack_require__(18);
	
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
/* 17 */
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
/* 18 */
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
			visible: function visible() {
				return this.input && this.input.style.visibility == 'visible';
			},
	
			start: function start(key, container, box, refEl, textEl) {
				var scale = arguments.length <= 5 || arguments[5] === undefined ? 1.0 : arguments[5];
	
				if (!this.input) {
					this.input = _DomUtils2.default.createElement('textarea', { id: "inlineEditor", unselectable: "off" }, { position: "absolute", overflow: "hidden", padding: "0px", margin: "0px", border: "transparent" });
					container.appendChild(this.input);
				} else if (this.visible() && this.key != key) {
					// need to close the existing editor first
					this.stop();
				}
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
			getStringSize: getStringSize,
			wrap: wrap,
			getLabelBox: getLabelBox,
			getLabelBoxForLink: getLabelBoxForLink,
			render: render,
			editor: editor
		};
	}();

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Cell2 = __webpack_require__(16);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Link = __webpack_require__(11);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Label = __webpack_require__(18);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Cache = __webpack_require__(17);
	
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
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _Rectangle = __webpack_require__(4);
	
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
/* 21 */
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Layout2 = __webpack_require__(21);
	
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
/* 23 */
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
	
	var _Layout = __webpack_require__(21);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _EventDispatcher = __webpack_require__(12);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _GraphBehavior = __webpack_require__(24);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _Label = __webpack_require__(18);
	
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
			key: "toDataURL",
			value: function toDataURL(format, options) {}
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Behavior2 = __webpack_require__(25);
	
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
/* 25 */
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
/* 26 */
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
	
	var _Renderer2 = __webpack_require__(23);
	
	var _Renderer3 = _interopRequireDefault(_Renderer2);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NS = 'http://www.w3.org/2000/svg';
	
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
					var buf = new _StringBuffer2.default('<svg width="100%" height="100%">');
					buf.append(this.renderDefs());
					var t = this.translate;
					buf.append('<g transform="translate(').append(t[0]).append(',').append(t[1]).append(')scale(').append(this.scale).append(')">');
					buf.append(root.render(this));
					buf.append('</g></svg>');
					SVGRenderer.setContent(this.box, buf.toString());
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
		}, {
			key: "toDataURL",
			value: function toDataURL(format, options) {
				SVGRenderer.toDataURL(this.svg, format, options);
			}
		}], [{
			key: "renderMarkers",
			value: function renderMarkers(markers) {
				var buf = new _StringBuffer2.default(),
				    str1 = void 0,
				    str2 = void 0;
				var _iteratorNormalCompletion = true;
				var _didIteratorError = false;
				var _iteratorError = undefined;
	
				try {
					for (var _iterator = markers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
						var marker = _step.value;
	
						str1 = this.TEMPLATES['Marker'](marker);
						str2 = marker.shape;
						if (!_lodash2.default.isString(str2)) str2 = this.renderShape(str2);
						str1 = str1.replace(/\#\{shape\}/, str2);
						buf.append(str1);
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
			key: "toDataURL",
			value: function toDataURL(svg, format, options) {
				if (!canvg) return null;
				var bbox = svg.getBBox();
				var canvas = _DomUtils2.default.createElement('canvas');
				document.body.appendChild(canvas);
				canvg(canvas, '<svg style="width: ' + bbox.width + 'px; height: ' + bbox.height + 'px;"><g transform="translate(' + bbox.width / 2 + ',' + bbox.height / 2 + ')scale(' + this.transform.scale + ')">' + $(this.g.node()).prop('innerHTML') + '</g></svg>');
				var image = canvas.toDataURL(format);
				document.body.removeChild(canvas);
				return image;
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
			key: "setContent",
			value: function setContent(el, content) {
				if (_DomUtils2.default.isIE) {
					// empty el first.
					var child = void 0;
					while (child = el.lastChild) {
						el.removeChild(child);
					}SVGRenderer.appendContent(el, content);
				} else el.innerHTML = content;
				return el;
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
			var _iteratorNormalCompletion2 = true;
			var _didIteratorError2 = false;
			var _iteratorError2 = undefined;
	
			try {
				for (var _iterator2 = shape.points[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
					var pt = _step2.value;
	
					buf.append(pt[0]).append(',').append(pt[1]).append(' ');
				}
			} catch (err) {
				_didIteratorError2 = true;
				_iteratorError2 = err;
			} finally {
				try {
					if (!_iteratorNormalCompletion2 && _iterator2.return) {
						_iterator2.return();
					}
				} finally {
					if (_didIteratorError2) {
						throw _iteratorError2;
					}
				}
			}
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA0NDk4NDgzNjI3ZjE1YjVjMmI2YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdkLHdCQUhjO0FBSWQsOEJBSmM7QUFLZCxzQ0FMYztBQU1kLHdCQU5jO0FBT2Qsc0JBUGM7QUFRZCx3QkFSYztBQVNkLGdDQVRjO0FBVWQsNEJBVmM7QUFXZCxzQkFYYztBQVlkLDRDQVpjO0FBYWQsd0JBYmM7QUFjZCwwQkFkYztBQWVkLHdCQWZjO0FBZ0JkLHNCQWhCYztBQWlCZCxzQkFqQmM7QUFrQmQsc0JBbEJjO0FBbUJkLDBCQW5CYztBQW9CZCxrQ0FwQmM7QUFxQmQsOEJBckJjO0FBc0JkLG9DQXRCYztBQXVCZDtBQXZCYyxFOzs7Ozs7QUMzQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7O0FBRXpCO0FBQ0EseUNBQXdDO0FBQ3hDLHNDQUFxQztBQUNyQyxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxRQUFPLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQTZCO0FBQzdCO0FBQ0EsOEJBQTZCO0FBQzdCLHFEQUFvRCxPQUFPO0FBQzNELHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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aUVBSU8sSUFKUCwwRUFLTyxJQUxQLGdCQUtvQixJQUxwQiwwREFNRyxJQU5ILEVBQVA7QUFPQSxHQXpDc0I7QUEwQ3ZCLFNBQU8saUJBQUUsUUFBRixDQUFXLGdqQ0FrQmpCLElBbEJpQixFQUFYLEVBa0JFLEVBQUMsVUFBVSxNQUFYLEVBbEJGO0FBMUNnQixFQUF4Qjs7bUJBK0RlLFciLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDQ0OTg0ODM2MjdmMTViNWMyYjZiXG4gKiovIiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xyXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuL2dlb21ldHJ5L0xpbmtcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcclxuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL2dyYXBoL0NlbGxcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vZ3JhcGgvTm9kZVwiO1xyXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgRmxvd0xheW91dCBmcm9tIFwiLi9sYXlvdXQvRmxvd0xheW91dFwiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL3ZpZXcvTWFya2VyXCI7XHJcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi92aWV3L1JlbmRlcmVyXCI7XHJcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XHJcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3JcIjtcclxuXHJcblNoYXBlLmFkZFNoYXBlKFwiUmVjdGFuZ2xlXCIsIFJlY3RhbmdsZSk7XHJcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRFdmVudHMsXHJcblx0Q2FjaGUsXHJcblx0VXRpbHMsXHJcblx0RG9tVXRpbHMsXHJcblx0U3RyaW5nQnVmZmVyLFxyXG5cdFBvaW50LFxyXG5cdExpbmUsXHJcblx0U2hhcGUsXHJcblx0UmVjdGFuZ2xlLFxyXG5cdEVsbGlwc2UsXHJcblx0TGluayxcclxuXHRFdmVudERpc3BhdGNoZXIsXHJcblx0TGFiZWwsXHJcblx0TWFya2VyLFxyXG5cdEdyYXBoLFxyXG5cdENlbGwsXHJcblx0Tm9kZSxcclxuXHRFZGdlLFxyXG5cdExheW91dCxcclxuXHRGbG93TGF5b3V0LFxyXG5cdFJlbmRlcmVyLFxyXG5cdFNWR1JlbmRlcmVyLFxyXG5cdEdyYXBoQmVoYXZpb3JcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKiFcbiAgKiBCZWFuIC0gY29weXJpZ2h0IChjKSBKYWNvYiBUaG9ybnRvbiAyMDExLTIwMTJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmF0L2JlYW5cbiAgKiBNSVQgbGljZW5zZVxuICAqL1xuKGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSkoJ2JlYW4nLCB0aGlzLCBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xuICBuYW1lICAgID0gbmFtZSAgICB8fCAnYmVhbidcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuXG4gIHZhciB3aW4gICAgICAgICAgICA9IHdpbmRvd1xuICAgICwgb2xkICAgICAgICAgICAgPSBjb250ZXh0W25hbWVdXG4gICAgLCBuYW1lc3BhY2VSZWdleCA9IC9bXlxcLl0qKD89XFwuLiopXFwufC4qL1xuICAgICwgbmFtZVJlZ2V4ICAgICAgPSAvXFwuLiovXG4gICAgLCBhZGRFdmVudCAgICAgICA9ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgICwgcmVtb3ZlRXZlbnQgICAgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAsIGRvYyAgICAgICAgICAgID0gZG9jdW1lbnQgfHwge31cbiAgICAsIHJvb3QgICAgICAgICAgID0gZG9jLmRvY3VtZW50RWxlbWVudCB8fCB7fVxuICAgICwgVzNDX01PREVMICAgICAgPSByb290W2FkZEV2ZW50XVxuICAgICwgZXZlbnRTdXBwb3J0ICAgPSBXM0NfTU9ERUwgPyBhZGRFdmVudCA6ICdhdHRhY2hFdmVudCdcbiAgICAsIE9ORSAgICAgICAgICAgID0ge30gLy8gc2luZ2xldG9uIGZvciBxdWljayBtYXRjaGluZyBtYWtpbmcgYWRkKCkgZG8gb25lKClcblxuICAgICwgc2xpY2UgICAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAsIHN0cjJhcnIgICAgICAgID0gZnVuY3Rpb24gKHMsIGQpIHsgcmV0dXJuIHMuc3BsaXQoZCB8fCAnICcpIH1cbiAgICAsIGlzU3RyaW5nICAgICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdzdHJpbmcnIH1cbiAgICAsIGlzRnVuY3Rpb24gICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdmdW5jdGlvbicgfVxuXG4gICAgICAvLyBldmVudHMgdGhhdCB3ZSBjb25zaWRlciB0byBiZSAnbmF0aXZlJywgYW55dGhpbmcgbm90IGluIHRoaXMgbGlzdCB3aWxsXG4gICAgICAvLyBiZSB0cmVhdGVkIGFzIGEgY3VzdG9tIGV2ZW50XG4gICAgLCBzdGFuZGFyZE5hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdjbGljayBkYmxjbGljayBtb3VzZXVwIG1vdXNlZG93biBjb250ZXh0bWVudSAnICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdtb3VzZXdoZWVsIG1vdXNlbXVsdGl3aGVlbCBET01Nb3VzZVNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSB3aGVlbFxuICAgICAgICAnbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBzZWxlY3RzdGFydCBzZWxlY3RlbmQgJyAgICAgICAgICAgICsgLy8gbW91c2UgbW92ZW1lbnRcbiAgICAgICAgJ2tleWRvd24ga2V5cHJlc3Mga2V5dXAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGtleWJvYXJkXG4gICAgICAgICdvcmllbnRhdGlvbmNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb2JpbGVcbiAgICAgICAgJ2ZvY3VzIGJsdXIgY2hhbmdlIHJlc2V0IHNlbGVjdCBzdWJtaXQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ2xvYWQgdW5sb2FkIGJlZm9yZXVubG9hZCByZXNpemUgbW92ZSBET01Db250ZW50TG9hZGVkICcgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBtZXNzYWdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdlcnJvciBhYm9ydCBzY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaXNjXG4gICAgICAvLyBlbGVtZW50LmZpcmVFdmVudCgnb25YWVonLi4uIGlzIG5vdCBmb3JnaXZpbmcgaWYgd2UgdHJ5IHRvIGZpcmUgYW4gZXZlbnRcbiAgICAgIC8vIHRoYXQgZG9lc24ndCBhY3R1YWxseSBleGlzdCwgc28gbWFrZSBzdXJlIHdlIG9ubHkgZG8gdGhlc2Ugb24gbmV3ZXIgYnJvd3NlcnNcbiAgICAsIHczY05hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdzaG93ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdpbnB1dCBpbnZhbGlkICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyB0b3VjaFxuICAgICAgICAnZ2VzdHVyZXN0YXJ0IGdlc3R1cmVjaGFuZ2UgZ2VzdHVyZWVuZCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZ2VzdHVyZVxuICAgICAgICAndGV4dGlucHV0ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gVGV4dEV2ZW50XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIHBhZ2VzaG93IHBhZ2VoaWRlIHBvcHN0YXRlICcgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2hhc2hjaGFuZ2Ugb2ZmbGluZSBvbmxpbmUgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnYWZ0ZXJwcmludCBiZWZvcmVwcmludCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gcHJpbnRpbmdcbiAgICAgICAgJ2RyYWdzdGFydCBkcmFnZW50ZXIgZHJhZ292ZXIgZHJhZ2xlYXZlIGRyYWcgZHJvcCBkcmFnZW5kICcgICAgICArIC8vIGRuZFxuICAgICAgICAnbG9hZHN0YXJ0IHByb2dyZXNzIHN1c3BlbmQgZW1wdGllZCBzdGFsbGVkIGxvYWRtZXRhZGF0YSAnICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2xvYWRlZGRhdGEgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBwbGF5aW5nIHdhaXRpbmcgc2Vla2luZyAnICAgICArIC8vIG1lZGlhXG4gICAgICAgICdzZWVrZWQgZW5kZWQgZHVyYXRpb25jaGFuZ2UgdGltZXVwZGF0ZSBwbGF5IHBhdXNlIHJhdGVjaGFuZ2UgJyAgKyAvLyBtZWRpYVxuICAgICAgICAndm9sdW1lY2hhbmdlIGN1ZWNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2NoZWNraW5nIG5vdXBkYXRlIGRvd25sb2FkaW5nIGNhY2hlZCB1cGRhdGVyZWFkeSBvYnNvbGV0ZSAnICAgICAgIC8vIGFwcGNhY2hlXG5cbiAgICAgIC8vIGNvbnZlcnQgdG8gYSBoYXNoIGZvciBxdWljayBsb29rdXBzXG4gICAgLCBuYXRpdmVFdmVudHMgPSAoZnVuY3Rpb24gKGhhc2gsIGV2ZW50cywgaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSBldmVudHNbaV0gJiYgKGhhc2hbZXZlbnRzW2ldXSA9IDEpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgICB9KHt9LCBzdHIyYXJyKHN0YW5kYXJkTmF0aXZlRXZlbnRzICsgKFczQ19NT0RFTCA/IHczY05hdGl2ZUV2ZW50cyA6ICcnKSkpKVxuXG4gICAgICAvLyBjdXN0b20gZXZlbnRzIGFyZSBldmVudHMgdGhhdCB3ZSAqZmFrZSosIHRoZXkgYXJlIG5vdCBwcm92aWRlZCBuYXRpdmVseSBidXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgbmF0aXZlIGV2ZW50cyB0byBnZW5lcmF0ZSB0aGVtXG4gICAgLCBjdXN0b21FdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9ICdjb21wYXJlRG9jdW1lbnRQb3NpdGlvbicgaW4gcm9vdFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIDE2KSA9PT0gMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogJ2NvbnRhaW5zJyBpbiByb290XG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSB8fCBjb250YWluZXIgPT09IHdpbmRvdyA/IHJvb3QgOiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLCBjaGVjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgcmV0dXJuICFyZWxhdGVkXG4gICAgICAgICAgICAgICAgPyByZWxhdGVkID09IG51bGxcbiAgICAgICAgICAgICAgICA6IChyZWxhdGVkICE9PSB0aGlzICYmIHJlbGF0ZWQucHJlZml4ICE9PSAneHVsJyAmJiAhL2RvY3VtZW50Ly50ZXN0KHRoaXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgJiYgIWlzQW5jZXN0b3IocmVsYXRlZCwgdGhpcykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IHsgYmFzZTogJ21vdXNlb3ZlcicsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2VsZWF2ZTogeyBiYXNlOiAnbW91c2VvdXQnLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNld2hlZWw6IHsgYmFzZTogL0ZpcmVmb3gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnIH1cbiAgICAgICAgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBwcm92aWRlIGEgY29uc2lzdGVudCBFdmVudCBvYmplY3QgYWNyb3NzIGJyb3dzZXJzIGJ5IHRha2luZyB0aGUgYWN0dWFsIERPTVxuICAgICAgLy8gZXZlbnQgb2JqZWN0IGFuZCBnZW5lcmF0aW5nIGEgbmV3IG9uZSBmcm9tIGl0cyBwcm9wZXJ0aWVzLlxuICAgICwgRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gYSB3aGl0ZWxpc3Qgb2YgcHJvcGVydGllcyAoZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcykgdGVsbHMgdXMgd2hhdCB0byBjaGVjayBmb3IgYW5kIGNvcHlcbiAgICAgICAgdmFyIGNvbW1vblByb3BzICA9IHN0cjJhcnIoJ2FsdEtleSBhdHRyQ2hhbmdlIGF0dHJOYW1lIGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgJyArXG4gICAgICAgICAgICAgICdkZXRhaWwgZXZlbnRQaGFzZSBnZXRNb2RpZmllclN0YXRlIGlzVHJ1c3RlZCBtZXRhS2V5IHJlbGF0ZWROb2RlIHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgJyAgK1xuICAgICAgICAgICAgICAnc3JjRWxlbWVudCB0YXJnZXQgdGltZVN0YW1wIHR5cGUgdmlldyB3aGljaCBwcm9wZXJ0eU5hbWUnKVxuICAgICAgICAgICwgbW91c2VQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2J1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBkYXRhVHJhbnNmZXIgJyAgICAgICtcbiAgICAgICAgICAgICAgJ2Zyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50JykpXG4gICAgICAgICAgLCBtb3VzZVdoZWVsUHJvcHMgPSBtb3VzZVByb3BzLmNvbmNhdChzdHIyYXJyKCd3aGVlbERlbHRhIHdoZWVsRGVsdGFYIHdoZWVsRGVsdGFZIHdoZWVsRGVsdGFaICcgK1xuICAgICAgICAgICAgICAnYXhpcycpKSAvLyAnYXhpcycgaXMgRkYgc3BlY2lmaWNcbiAgICAgICAgICAsIGtleVByb3BzICAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlIGtleUlkZW50aWZpZXIgJyAgICAgICAgICArXG4gICAgICAgICAgICAgICdrZXlMb2NhdGlvbiBsb2NhdGlvbicpKVxuICAgICAgICAgICwgdGV4dFByb3BzICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEnKSlcbiAgICAgICAgICAsIHRvdWNoUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCd0b3VjaGVzIHRhcmdldFRvdWNoZXMgY2hhbmdlZFRvdWNoZXMgc2NhbGUgcm90YXRpb24nKSlcbiAgICAgICAgICAsIG1lc3NhZ2VQcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhIG9yaWdpbiBzb3VyY2UnKSlcbiAgICAgICAgICAsIHN0YXRlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdzdGF0ZScpKVxuICAgICAgICAgICwgb3Zlck91dFJlZ2V4ID0gL292ZXJ8b3V0L1xuICAgICAgICAgICAgLy8gc29tZSBldmVudCB0eXBlcyBuZWVkIHNwZWNpYWwgaGFuZGxpbmcgYW5kIHNvbWUgbmVlZCBzcGVjaWFsIHByb3BlcnRpZXMsIGRvIHRoYXQgYWxsIGhlcmVcbiAgICAgICAgICAsIHR5cGVGaXhlcnMgICA9IFtcbiAgICAgICAgICAgICAgICB7IC8vIGtleSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAva2V5L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQua2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9jbGlja3xtb3VzZSg/ISguKndoZWVsfHNjcm9sbCkpfG1lbnV8ZHJhZ3xkcm9wL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50LCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnBvcyA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnBhZ2VZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WCArIGRvYy5ib2R5LnNjcm9sbExlZnQgKyByb290LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZICsgZG9jLmJvZHkuc2Nyb2xsVG9wICsgcm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJPdXRSZWdleC50ZXN0KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBldmVudFsodHlwZSA9PSAnbW91c2VvdmVyJyA/ICdmcm9tJyA6ICd0bycpICsgJ0VsZW1lbnQnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2Ugd2hlZWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL21vdXNlLiood2hlZWx8c2Nyb2xsKS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VXaGVlbFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBUZXh0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRleHQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHRQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gdG91Y2ggYW5kIGdlc3R1cmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150b3VjaHxeZ2VzdHVyZS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG91Y2hQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbWVzc2FnZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXm1lc3NhZ2UkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZXNzYWdlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHBvcHN0YXRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ecG9wc3RhdGUkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvLiovXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tbW9uUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAsIHR5cGVGaXhlck1hcCA9IHt9IC8vIHVzZWQgdG8gbWFwIGV2ZW50IHR5cGVzIHRvIGZpeGVyIGZ1bmN0aW9ucyAoYWJvdmUpLCBhIGJhc2ljIGNhY2hlIG1lY2hhbmlzbVxuXG4gICAgICAgICAgLCBFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCAoKGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQpLnBhcmVudFdpbmRvdyB8fCB3aW4pLmV2ZW50XG4gICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50XG4gICAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICAgPSBpc05hdGl2ZVxuICAgICAgICAgICAgICB0aGlzLmlzQmVhbiAgICAgICAgID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQpIHJldHVyblxuXG4gICAgICAgICAgICAgIHZhciB0eXBlICAgPSBldmVudC50eXBlXG4gICAgICAgICAgICAgICAgLCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxuICAgICAgICAgICAgICAgICwgaSwgbCwgcCwgcHJvcHMsIGZpeGVyXG5cbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gdGFyZ2V0LnBhcmVudE5vZGUgOiB0YXJnZXRcblxuICAgICAgICAgICAgICBpZiAoaXNOYXRpdmUpIHsgLy8gd2Ugb25seSBuZWVkIGJhc2ljIGF1Z21lbnRhdGlvbiBvbiBjdXN0b20gZXZlbnRzLCB0aGUgcmVzdCBleHBlbnNpdmUgJiBwb2ludGxlc3NcbiAgICAgICAgICAgICAgICBmaXhlciA9IHR5cGVGaXhlck1hcFt0eXBlXVxuICAgICAgICAgICAgICAgIGlmICghZml4ZXIpIHsgLy8gaGF2ZW4ndCBlbmNvdW50ZXJlZCB0aGlzIGV2ZW50IHR5cGUgYmVmb3JlLCBtYXAgYSBmaXhlciBmdW5jdGlvbiBmb3IgaXRcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSB0eXBlRml4ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZUZpeGVyc1tpXS5yZWcudGVzdCh0eXBlKSkgeyAvLyBndWFyYW50ZWVkIHRvIG1hdGNoIGF0IGxlYXN0IG9uZSwgbGFzdCBpcyAuKlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVGaXhlck1hcFt0eXBlXSA9IGZpeGVyID0gdHlwZUZpeGVyc1tpXS5maXhcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBmaXhlcihldmVudCwgdGhpcywgdHlwZSlcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBwcm9wcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKChwID0gcHJvcHNbaV0pIGluIHRoaXMpICYmIHAgaW4gZXZlbnQpIHRoaXNbcF0gPSBldmVudFtwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgYW5kIHN0b3BQcm9wYWdhdGlvbigpIGFyZSBhIGNvbnNpc3RlbnQgaW50ZXJmYWNlIHRvIHRob3NlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBvbiB0aGUgRE9NLCBzdG9wKCkgaXMgYW4gYWxpYXMgZm9yIGJvdGggb2YgdGhlbSB0b2dldGhlclxuICAgICAgICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCkgdGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIHRvIGJlIGhhbmRsZWQgaW50ZXJuYWxseSBiZWNhdXNlIHdlIG1hbmFnZSB0aGUgZXZlbnQgbGlzdCBmb3JcbiAgICAgICAgLy8gZWFjaCBlbGVtZW50XG4gICAgICAgIC8vIG5vdGUgdGhhdCBvcmlnaW5hbEVsZW1lbnQgbWF5IGJlIGEgQmVhbiNFdmVudCBvYmplY3QgaW4gc29tZSBzaXR1YXRpb25zXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCAmJiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGlzIHJpcGUgZm9yIG9wdGltaXNhdGlvbiwgbmV3IGV2ZW50cyBhcmUgKmV4cGVuc2l2ZSpcbiAgICAgICAgICAvLyBpbXByb3ZpbmcgdGhpcyB3aWxsIHNwZWVkIHVwIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICB2YXIgbmUgPSBuZXcgRXZlbnQodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLmlzTmF0aXZlKVxuICAgICAgICAgIG5lLmN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0XG4gICAgICAgICAgcmV0dXJuIG5lXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRXZlbnRcbiAgICAgIH0oKSlcblxuICAgICAgLy8gaWYgd2UncmUgaW4gb2xkIElFIHdlIGNhbid0IGRvIG9ucHJvcGVydHljaGFuZ2Ugb24gZG9jIG9yIHdpbiBzbyB3ZSB1c2UgZG9jLmRvY3VtZW50RWxlbWVudCBmb3IgYm90aFxuICAgICwgdGFyZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICByZXR1cm4gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgKGVsZW1lbnQgPT09IGRvYyB8fCBlbGVtZW50ID09PSB3aW4pID8gcm9vdCA6IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogQmVhbiBtYWludGFpbnMgYW4gaW50ZXJuYWwgcmVnaXN0cnkgZm9yIGV2ZW50IGxpc3RlbmVycy4gV2UgZG9uJ3QgdG91Y2ggZWxlbWVudHMsIG9iamVjdHNcbiAgICAgICAgKiBvciBmdW5jdGlvbnMgdG8gaWRlbnRpZnkgdGhlbSwgaW5zdGVhZCB3ZSBzdG9yZSBldmVyeXRoaW5nIGluIHRoZSByZWdpc3RyeS5cbiAgICAgICAgKiBFYWNoIGV2ZW50IGxpc3RlbmVyIGhhcyBhIFJlZ0VudHJ5IG9iamVjdCwgd2UgaGF2ZSBvbmUgJ3JlZ2lzdHJ5JyBmb3IgdGhlIHdob2xlIGluc3RhbmNlLlxuICAgICAgICAqL1xuICAgICwgUmVnRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlYWNoIGhhbmRsZXIgaXMgd3JhcHBlZCBzbyB3ZSBjYW4gaGFuZGxlIGRlbGVnYXRpb24gYW5kIGN1c3RvbSBldmVudHNcbiAgICAgICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuLCBjb25kaXRpb24sIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gKGV2ZW50LCBlYXJncykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIGFyZ3MgPyBzbGljZS5jYWxsKGVhcmdzLCBldmVudCA/IDAgOiAxKS5jb25jYXQoYXJncykgOiBlYXJncylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgZmluZFRhcmdldCA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uX19iZWFuRGVsID8gZm4uX19iZWFuRGVsLmZ0KGV2ZW50LnRhcmdldCwgZWxlbWVudCkgOiBldmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgaGFuZGxlciA9IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZFRhcmdldChldmVudCwgdGhpcykgLy8gZGVsZWF0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZm4uX19iZWFuRGVsKSBldmVudCA9IGV2ZW50LmNsb25lKGZpbmRUYXJnZXQoZXZlbnQpKSAvLyBkZWxlZ2F0ZWQgZXZlbnQsIGZpeCB0aGUgZml4XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSBmbi5fX2JlYW5EZWxcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICAgfVxuXG4gICAgICAgICwgUmVnRW50cnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwsIG5hbWVzcGFjZXMsIGFyZ3MsIHJvb3QpIHtcbiAgICAgICAgICAgIHZhciBjdXN0b21UeXBlICAgICA9IGN1c3RvbUV2ZW50c1t0eXBlXVxuICAgICAgICAgICAgICAsIGlzTmF0aXZlXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICd1bmxvYWQnKSB7XG4gICAgICAgICAgICAgIC8vIHNlbGYgY2xlYW4tdXBcbiAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UocmVtb3ZlTGlzdGVuZXIsIGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VzdG9tVHlwZSkge1xuICAgICAgICAgICAgICBpZiAoY3VzdG9tVHlwZS5jb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY3VzdG9tVHlwZS5jb25kaXRpb24sIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHlwZSA9IGN1c3RvbVR5cGUuYmFzZSB8fCB0eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICA9IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzW3R5cGVdICYmICEhZWxlbWVudFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVR5cGUgICAgPSAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiB0eXBlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLnR5cGUgICAgICAgICAgPSB0eXBlXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsICAgICAgPSBvcmlnaW5hbFxuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2VzICAgID0gbmFtZXNwYWNlc1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgICAgID0gVzNDX01PREVMIHx8IGlzTmF0aXZlID8gdHlwZSA6ICdwcm9wZXJ0eWNoYW5nZSdcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICAgICAgICA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgICAgICB0aGlzW2V2ZW50U3VwcG9ydF0gPSAhIXRoaXMudGFyZ2V0W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMucm9vdCAgICAgICAgICA9IHJvb3RcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciAgICAgICA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIGdpdmVuIGEgbGlzdCBvZiBuYW1lc3BhY2VzLCBpcyBvdXIgZW50cnkgaW4gYW55IG9mIHRoZW0/XG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5pbk5hbWVzcGFjZXMgPSBmdW5jdGlvbiAoY2hlY2tOYW1lc3BhY2VzKSB7XG4gICAgICAgICAgdmFyIGksIGosIGMgPSAwXG4gICAgICAgICAgaWYgKCFjaGVja05hbWVzcGFjZXMpIHJldHVybiB0cnVlXG4gICAgICAgICAgaWYgKCF0aGlzLm5hbWVzcGFjZXMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGZvciAoaSA9IGNoZWNrTmFtZXNwYWNlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IHRoaXMubmFtZXNwYWNlcy5sZW5ndGg7IGotLTspIHtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrTmFtZXNwYWNlc1tpXSA9PSB0aGlzLm5hbWVzcGFjZXNbal0pIGMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aCA9PT0gY1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggYnkgZWxlbWVudCwgb3JpZ2luYWwgZm4gKG9wdCksIGhhbmRsZXIgZm4gKG9wdClcbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAoY2hlY2tFbGVtZW50LCBjaGVja09yaWdpbmFsLCBjaGVja0hhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50ID09PSBjaGVja0VsZW1lbnQgJiZcbiAgICAgICAgICAgICghY2hlY2tPcmlnaW5hbCB8fCB0aGlzLm9yaWdpbmFsID09PSBjaGVja09yaWdpbmFsKSAmJlxuICAgICAgICAgICAgKCFjaGVja0hhbmRsZXIgfHwgdGhpcy5oYW5kbGVyID09PSBjaGVja0hhbmRsZXIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVnRW50cnlcbiAgICAgIH0oKSlcblxuICAgICwgcmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvdXIgbWFwIHN0b3JlcyBhcnJheXMgYnkgZXZlbnQgdHlwZSwganVzdCBiZWNhdXNlIGl0J3MgYmV0dGVyIHRoYW4gc3RvcmluZ1xuICAgICAgICAvLyBldmVyeXRoaW5nIGluIGEgc2luZ2xlIGFycmF5LlxuICAgICAgICAvLyB1c2VzICckJyBhcyBhIHByZWZpeCBmb3IgdGhlIGtleXMgZm9yIHNhZmV0eSBhbmQgJ3InIGFzIGEgc3BlY2lhbCBwcmVmaXggZm9yXG4gICAgICAgIC8vIHJvb3RMaXN0ZW5lcnMgc28gd2UgY2FuIGxvb2sgdGhlbSB1cCBmYXN0XG4gICAgICAgIHZhciBtYXAgPSB7fVxuXG4gICAgICAgICAgLy8gZ2VuZXJpYyBmdW5jdGlvbmFsIHNlYXJjaCBvZiBvdXIgcmVnaXN0cnkgZm9yIG1hdGNoaW5nIGxpc3RlbmVycyxcbiAgICAgICAgICAvLyBgZm5gIHJldHVybnMgZmFsc2UgdG8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgLCBmb3JBbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKSB7XG4gICAgICAgICAgICAgIHZhciBwZnggPSByb290ID8gJ3InIDogJyQnXG4gICAgICAgICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICcqJykge1xuICAgICAgICAgICAgICAgIC8vIHNlYXJjaCB0aGUgd2hvbGUgcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09IHBmeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdC5zdWJzdHIoMSksIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsLCBsaXN0ID0gbWFwW3BmeCArIHR5cGVdLCBhbGwgPSBlbGVtZW50ID09ICcqJ1xuICAgICAgICAgICAgICAgIGlmICghbGlzdCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgZm9yIChsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoYWxsIHx8IGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgaGFuZGxlcikpICYmICFmbihsaXN0W2ldLCBsaXN0LCBpLCB0eXBlKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGhhcyA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICAvLyB3ZSdyZSBub3QgdXNpbmcgZm9yQWxsIGhlcmUgc2ltcGx5IGJlY2F1c2UgaXQncyBhIGJpdCBzbG93ZXIgYW5kIHRoaXNcbiAgICAgICAgICAgICAgLy8gbmVlZHMgdG8gYmUgZmFzdFxuICAgICAgICAgICAgICB2YXIgaSwgbGlzdCA9IG1hcFsocm9vdCA/ICdyJyA6ICckJykgKyB0eXBlXVxuICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWxpc3RbaV0ucm9vdCAmJiBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIG51bGwpKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBudWxsLCByb290LCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBwdXQgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgdmFyIGhhcyA9ICFlbnRyeS5yb290ICYmICF0aGlzLmhhcyhlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAsIGtleSA9IChlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVcbiAgICAgICAgICAgICAgOyhtYXBba2V5XSB8fCAobWFwW2tleV0gPSBbXSkpLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIHJldHVybiBoYXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZGVsID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIGZvckFsbChlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBlbnRyeS5oYW5kbGVyLCBlbnRyeS5yb290LCBmdW5jdGlvbiAoZW50cnksIGxpc3QsIGkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSBkZWxldGUgbWFwWyhlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVdXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGR1bXAgYWxsIGVudHJpZXMsIHVzZWQgZm9yIG9udW5sb2FkXG4gICAgICAgICAgLCBlbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgdCwgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvciAodCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gJyQnKSBlbnRyaWVzID0gZW50cmllcy5jb25jYXQobWFwW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaGFzOiBoYXMsIGdldDogZ2V0LCBwdXQ6IHB1dCwgZGVsOiBkZWwsIGVudHJpZXM6IGVudHJpZXMgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBuZWVkIGEgc2VsZWN0b3IgZW5naW5lIGZvciBkZWxlZ2F0ZWQgZXZlbnRzLCB1c2UgcXVlcnlTZWxlY3RvckFsbCBpZiBpdCBleGlzdHNcbiAgICAgIC8vIGJ1dCBmb3Igb2xkZXIgYnJvd3NlcnMgd2UgbmVlZCBRd2VyeSwgU2l6emxlIG9yIHNpbWlsYXJcbiAgICAsIHNlbGVjdG9yRW5naW5lXG4gICAgLCBzZXRTZWxlY3RvckVuZ2luZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGxcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHMsIHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci5xdWVyeVNlbGVjdG9yQWxsKHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmVhbjogTm8gc2VsZWN0b3IgZW5naW5lIGluc3RhbGxlZCcpIC8vIGVlZWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGF0dGFjaCB0aGlzIGxpc3RlbmVyIHRvIGVhY2ggRE9NIGV2ZW50IHRoYXQgd2UgbmVlZCB0byBsaXN0ZW4gdG8sIG9ubHkgb25jZVxuICAgICAgLy8gcGVyIGV2ZW50IHR5cGUgcGVyIERPTSBlbGVtZW50XG4gICAgLCByb290TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIHR5cGUpIHtcbiAgICAgICAgaWYgKCFXM0NfTU9ERUwgJiYgdHlwZSAmJiBldmVudCAmJiBldmVudC5wcm9wZXJ0eU5hbWUgIT0gJ19vbicgKyB0eXBlKSByZXR1cm5cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0cnkuZ2V0KHRoaXMsIHR5cGUgfHwgZXZlbnQudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcblxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgaWYgKHR5cGUpIGV2ZW50LnR5cGUgPSB0eXBlXG5cbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBoYW5kbGVycyByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUsIGNhbGxpbmcgdGhlbSB1bmxlc3MgdGhleSBoYXZlXG4gICAgICAgIC8vIGJlZW4gcmVtb3ZlZCBieSBhIHByZXZpb3VzIGhhbmRsZXIgb3Igc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIGJlZW4gY2FsbGVkXG4gICAgICAgIGZvciAoOyBpIDwgbCAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaV0ucmVtb3ZlZCkgbGlzdGVuZXJzW2ldLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG4gICAgLCBsaXN0ZW5lciA9IFczQ19NT0RFTFxuICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQpIHtcbiAgICAgICAgICAgIC8vIG5ldyBicm93c2Vyc1xuICAgICAgICAgICAgZWxlbWVudFthZGQgPyBhZGRFdmVudCA6IHJlbW92ZUV2ZW50XSh0eXBlLCByb290TGlzdGVuZXIsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkLCBjdXN0b20pIHtcbiAgICAgICAgICAgIC8vIElFOCBhbmQgYmVsb3csIHVzZSBhdHRhY2hFdmVudC9kZXRhY2hFdmVudCBhbmQgd2UgaGF2ZSB0byBwaWdneS1iYWNrIHByb3BlcnR5Y2hhbmdlIGV2ZW50c1xuICAgICAgICAgICAgLy8gdG8gc2ltdWxhdGUgZXZlbnQgYnViYmxpbmcgZXRjLlxuICAgICAgICAgICAgdmFyIGVudHJ5XG4gICAgICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGN1c3RvbSB8fCB0eXBlXG4gICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZXZlbnQpIHsgLy8gaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICByb290TGlzdGVuZXIuY2FsbChlbGVtZW50LCBldmVudCwgY3VzdG9tKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCB0cnVlIC8vIGlzIHJvb3RcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbSAmJiBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9PSBudWxsKSBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9IDBcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbnRyeSA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCBjdXN0b20gfHwgdHlwZSwgcm9vdExpc3RlbmVyLCB0cnVlKVswXVxuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgICAgICByZWdpc3RyeS5kZWwoZW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAsIG9uY2UgPSBmdW5jdGlvbiAocm0sIGVsZW1lbnQsIHR5cGUsIGZuLCBvcmlnaW5hbEZuKSB7XG4gICAgICAgIC8vIHdyYXAgdGhlIGhhbmRsZXIgaW4gYSBoYW5kbGVyIHRoYXQgZG9lcyBhIHJlbW92ZSBhcyB3ZWxsXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIHJtKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICwgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3JnVHlwZSwgaGFuZGxlciwgbmFtZXNwYWNlcykge1xuICAgICAgICB2YXIgdHlwZSAgICAgPSBvcmdUeXBlICYmIG9yZ1R5cGUucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgICwgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCByZW1vdmVkICA9IHt9XG4gICAgICAgICAgLCBpLCBsXG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICgoIWhhbmRsZXIgfHwgaGFuZGxlcnNbaV0ub3JpZ2luYWwgPT09IGhhbmRsZXIpICYmIGhhbmRsZXJzW2ldLmluTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBwcm9ibGVtYXRpYywgd2UgaGF2ZSBhIHJlZ2lzdHJ5LmdldCgpIGFuZCByZWdpc3RyeS5kZWwoKSB0aGF0XG4gICAgICAgICAgICAvLyBib3RoIGRvIHJlZ2lzdHJ5IHNlYXJjaGVzIHNvIHdlIHdhc3RlIGN5Y2xlcyBkb2luZyB0aGlzLiBOZWVkcyB0byBiZSByb2xsZWQgaW50b1xuICAgICAgICAgICAgLy8gYSBzaW5nbGUgcmVnaXN0cnkuZm9yQWxsKGZuKSB0aGF0IHJlbW92ZXMgd2hpbGUgZmluZGluZywgYnV0IHRoZSBjYXRjaCBpcyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSdsbCBiZSBzcGxpY2luZyB0aGUgYXJyYXlzIHRoYXQgd2UncmUgaXRlcmF0aW5nIG92ZXIuIE5lZWRzIGV4dHJhIHRlc3RzIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2NyZXcgaXQgdXAuIEBydmFnZ1xuICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGhhbmRsZXJzW2ldKVxuICAgICAgICAgICAgaWYgKCFyZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gJiYgaGFuZGxlcnNbaV1bZXZlbnRTdXBwb3J0XSlcbiAgICAgICAgICAgICAgcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdID0geyB0OiBoYW5kbGVyc1tpXS5ldmVudFR5cGUsIGM6IGhhbmRsZXJzW2ldLnR5cGUgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBlYWNoIHR5cGUvZWxlbWVudCBmb3IgcmVtb3ZlZCBsaXN0ZW5lcnMgYW5kIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyIHdoZXJlIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICBmb3IgKGkgaW4gcmVtb3ZlZCkge1xuICAgICAgICAgIGlmICghcmVnaXN0cnkuaGFzKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgbnVsbCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpc3RlbmVyIG9mIHRoaXMgdHlwZSwgcmVtb3ZlIHRoZSByb290TGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgZmFsc2UsIHJlbW92ZWRbaV0uYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHVwIGEgZGVsZWdhdGUgaGVscGVyIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3Rvciwgd3JhcCB0aGUgaGFuZGxlciBmdW5jdGlvblxuICAgICwgZGVsZWdhdGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIC8vVE9ETzogZmluZFRhcmdldCAodGhlcmVmb3JlICQpIGlzIGNhbGxlZCB0d2ljZSwgb25jZSBmb3IgbWF0Y2ggYW5kIG9uY2UgZm9yXG4gICAgICAgIC8vIHNldHRpbmcgZS5jdXJyZW50VGFyZ2V0LCBmaXggdGhpcyBzbyBpdCdzIG9ubHkgbmVlZGVkIG9uY2VcbiAgICAgICAgdmFyIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBpLCBhcnJheSA9IGlzU3RyaW5nKHNlbGVjdG9yKSA/IHNlbGVjdG9yRW5naW5lKHNlbGVjdG9yLCByb290KSA6IHNlbGVjdG9yXG4gICAgICAgICAgICAgIGZvciAoOyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSByb290OyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGFycmF5Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kVGFyZ2V0KGUudGFyZ2V0LCB0aGlzKVxuICAgICAgICAgICAgICBpZiAobWF0Y2gpIGZuLmFwcGx5KG1hdGNoLCBhcmd1bWVudHMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gX19iZWFuRGVsIGlzbid0IHBsZWFzYW50IGJ1dCBpdCdzIGEgcHJpdmF0ZSBmdW5jdGlvbiwgbm90IGV4cG9zZWQgb3V0c2lkZSBvZiBCZWFuXG4gICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0ge1xuICAgICAgICAgICAgZnQgICAgICAgOiBmaW5kVGFyZ2V0IC8vIGF0dGFjaCBpdCBoZXJlIGZvciBjdXN0b21FdmVudHMgdG8gdXNlIHRvb1xuICAgICAgICAgICwgc2VsZWN0b3IgOiBzZWxlY3RvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICB9XG5cbiAgICAsIGZpcmVMaXN0ZW5lciA9IFczQ19NT0RFTCA/IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBtb2Rlcm4gYnJvd3NlcnMsIGRvIGEgcHJvcGVyIGRpc3BhdGNoRXZlbnQoKVxuICAgICAgICB2YXIgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KGlzTmF0aXZlID8gJ0hUTUxFdmVudHMnIDogJ1VJRXZlbnRzJylcbiAgICAgICAgZXZ0W2lzTmF0aXZlID8gJ2luaXRFdmVudCcgOiAnaW5pdFVJRXZlbnQnXSh0eXBlLCB0cnVlLCB0cnVlLCB3aW4sIDEpXG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICB9IDogZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG9sZCBicm93c2VyIHVzZSBvbnByb3BlcnR5Y2hhbmdlLCBqdXN0IGluY3JlbWVudCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgaXNOYXRpdmUgPyBlbGVtZW50LmZpcmVFdmVudCgnb24nICsgdHlwZSwgZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCkpIDogZWxlbWVudFsnX29uJyArIHR5cGVdKytcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogUHVibGljIEFQSTogb2ZmKCksIG9uKCksIGFkZCgpLCAocmVtb3ZlKCkpLCBvbmUoKSwgZmlyZSgpLCBjbG9uZSgpXG4gICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9mZihlbGVtZW50WywgZXZlbnRUeXBlKHMpWywgaGFuZGxlciBdXSlcbiAgICAgICAgKi9cbiAgICAsIG9mZiA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlU3BlYywgZm4pIHtcbiAgICAgICAgdmFyIGlzVHlwZVN0ciA9IGlzU3RyaW5nKHR5cGVTcGVjKVxuICAgICAgICAgICwgaywgdHlwZSwgbmFtZXNwYWNlcywgaVxuXG4gICAgICAgIGlmIChpc1R5cGVTdHIgJiYgdHlwZVNwZWMuaW5kZXhPZignICcpID4gMCkge1xuICAgICAgICAgIC8vIG9mZihlbCwgJ3QxIHQyIHQzJywgZm4pIG9yIG9mZihlbCwgJ3QxIHQyIHQzJylcbiAgICAgICAgICB0eXBlU3BlYyA9IHN0cjJhcnIodHlwZVNwZWMpXG4gICAgICAgICAgZm9yIChpID0gdHlwZVNwZWMubGVuZ3RoOyBpLS07KVxuICAgICAgICAgICAgb2ZmKGVsZW1lbnQsIHR5cGVTcGVjW2ldLCBmbilcbiAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgIGlmICh0eXBlICYmIGN1c3RvbUV2ZW50c1t0eXBlXSkgdHlwZSA9IGN1c3RvbUV2ZW50c1t0eXBlXS5iYXNlXG5cbiAgICAgICAgaWYgKCF0eXBlU3BlYyB8fCBpc1R5cGVTdHIpIHtcbiAgICAgICAgICAvLyBvZmYoZWwpIG9yIG9mZihlbCwgdDEubnMpIG9yIG9mZihlbCwgLm5zKSBvciBvZmYoZWwsIC5uczEubnMyLm5zMylcbiAgICAgICAgICBpZiAobmFtZXNwYWNlcyA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzcGFjZXMgPSBzdHIyYXJyKG5hbWVzcGFjZXMsICcuJylcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmbiwgbmFtZXNwYWNlcylcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHR5cGVTcGVjKSkge1xuICAgICAgICAgIC8vIG9mZihlbCwgZm4pXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgbnVsbCwgdHlwZVNwZWMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCB7IHQxOiBmbjEsIHQyLCBmbjIgfSlcbiAgICAgICAgICBmb3IgKGsgaW4gdHlwZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU3BlYy5oYXNPd25Qcm9wZXJ0eShrKSkgb2ZmKGVsZW1lbnQsIGssIHR5cGVTcGVjW2tdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnRzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsRm4sIHR5cGUsIHR5cGVzLCBpLCBhcmdzLCBlbnRyeSwgZmlyc3RcblxuICAgICAgICAvL1RPRE86IHRoZSB1bmRlZmluZWQgY2hlY2sgbWVhbnMgeW91IGNhbid0IHBhc3MgYW4gJ2FyZ3MnIGFyZ3VtZW50LCBmaXggdGhpcyBwZXJoYXBzP1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXZlbnRzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGNhbid0IGhhbmRsZSBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgICBvbi5jYWxsKHRoaXMsIGVsZW1lbnQsIHR5cGUsIGV2ZW50c1t0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgLy8gZGVsZWdhdGVkIGV2ZW50XG4gICAgICAgICAgb3JpZ2luYWxGbiA9IGZuXG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA0KVxuICAgICAgICAgIGZuICAgICAgICAgPSBkZWxlZ2F0ZShzZWxlY3Rvciwgb3JpZ2luYWxGbiwgc2VsZWN0b3JFbmdpbmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKVxuICAgICAgICAgIGZuICAgICAgICAgPSBvcmlnaW5hbEZuID0gc2VsZWN0b3JcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzID0gc3RyMmFycihldmVudHMpXG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBvbmUoKSwgd3JhcCBpbiBhIHNlbGYtcmVtb3ZpbmcgaGFuZGxlclxuICAgICAgICBpZiAodGhpcyA9PT0gT05FKSB7XG4gICAgICAgICAgZm4gPSBvbmNlKG9mZiwgZWxlbWVudCwgZXZlbnRzLCBmbiwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIC8vIGFkZCBuZXcgaGFuZGxlciB0byB0aGUgcmVnaXN0cnkgYW5kIGNoZWNrIGlmIGl0J3MgdGhlIGZpcnN0IGZvciB0aGlzIGVsZW1lbnQvdHlwZVxuICAgICAgICAgIGZpcnN0ID0gcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAsIHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJykgLy8gZXZlbnQgdHlwZVxuICAgICAgICAgICAgLCBmblxuICAgICAgICAgICAgLCBvcmlnaW5hbEZuXG4gICAgICAgICAgICAsIHN0cjJhcnIodHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpLCAnLicpIC8vIG5hbWVzcGFjZXNcbiAgICAgICAgICAgICwgYXJnc1xuICAgICAgICAgICAgLCBmYWxzZSAvLyBub3Qgcm9vdFxuICAgICAgICAgICkpXG4gICAgICAgICAgaWYgKGVudHJ5W2V2ZW50U3VwcG9ydF0gJiYgZmlyc3QpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGV2ZW50IG9mIHRoaXMgdHlwZSBvbiB0aGlzIGVsZW1lbnQsIGFkZCByb290IGxpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCBlbnRyeS5ldmVudFR5cGUsIHRydWUsIGVudHJ5LmN1c3RvbVR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogYWRkKGVsZW1lbnRbLCBzZWxlY3Rvcl0sIGV2ZW50VHlwZShzKSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIERlcHJlY2F0ZWQ6IGtlcHQgKGZvciBub3cpIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5XG4gICAgICAgICovXG4gICAgLCBhZGQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGVsZm4pIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICwgIWlzU3RyaW5nKGZuKVxuICAgICAgICAgICAgICA/IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICAgICA6IFsgZWxlbWVudCwgZm4sIGV2ZW50cywgZGVsZm4gXS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgNSkgOiBbXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoT05FLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGZpcmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogVGhlIG9wdGlvbmFsICdhcmdzJyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBpZiBubyAnYXJncycgYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgICAgKiB0aGVuIHdlIGNhbiB1c2UgdGhlIGJyb3dzZXIncyBET00gZXZlbnQgc3lzdGVtLCBvdGhlcndpc2Ugd2UgdHJpZ2dlciBoYW5kbGVycyBtYW51YWxseVxuICAgICAgICAqL1xuICAgICwgZmlyZSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhcmdzKSB7XG4gICAgICAgIHZhciB0eXBlcyA9IHN0cjJhcnIodHlwZSlcbiAgICAgICAgICAsIGksIGosIGwsIG5hbWVzLCBoYW5kbGVyc1xuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHR5cGUgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgaWYgKG5hbWVzID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lcyA9IHN0cjJhcnIobmFtZXMsICcuJylcbiAgICAgICAgICBpZiAoIW5hbWVzICYmICFhcmdzICYmIGVsZW1lbnRbZXZlbnRTdXBwb3J0XSkge1xuICAgICAgICAgICAgZmlyZUxpc3RlbmVyKG5hdGl2ZUV2ZW50c1t0eXBlXSwgdHlwZSwgZWxlbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uLW5hdGl2ZSBldmVudCwgZWl0aGVyIGJlY2F1c2Ugb2YgYSBuYW1lc3BhY2UsIGFyZ3VtZW50cyBvciBhIG5vbiBET00gZWxlbWVudFxuICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGFsbCBsaXN0ZW5lcnMgYW5kIG1hbnVhbGx5ICdmaXJlJ1xuICAgICAgICAgICAgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICBhcmdzID0gW2ZhbHNlXS5jb25jYXQoYXJncylcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2pdLmluTmFtZXNwYWNlcyhuYW1lcykpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5oYW5kbGVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogY2xvbmUoZHN0RWxlbWVudCwgc3JjRWxlbWVudFssIGV2ZW50VHlwZSBdKVxuICAgICAgICAqXG4gICAgICAgICogVE9ETzogcGVyaGFwcyBmb3IgY29uc2lzdGVuY3kgd2Ugc2hvdWxkIGFsbG93IHRoZSBzYW1lIGZsZXhpYmlsaXR5IGluIHR5cGUgc3BlY2lmaWVycz9cbiAgICAgICAgKi9cbiAgICAsIGNsb25lID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZyb20sIHR5cGUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGZyb20sIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGhhbmRsZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcbiAgICAgICAgICAsIGFyZ3MsIGJlYW5EZWxcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5vcmlnaW5hbCkge1xuICAgICAgICAgICAgYXJncyA9IFsgZWxlbWVudCwgaGFuZGxlcnNbaV0udHlwZSBdXG4gICAgICAgICAgICBpZiAoYmVhbkRlbCA9IGhhbmRsZXJzW2ldLmhhbmRsZXIuX19iZWFuRGVsKSBhcmdzLnB1c2goYmVhbkRlbC5zZWxlY3RvcilcbiAgICAgICAgICAgIGFyZ3MucHVzaChoYW5kbGVyc1tpXS5vcmlnaW5hbClcbiAgICAgICAgICAgIG9uLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAsIGJlYW4gPSB7XG4gICAgICAgICAgJ29uJyAgICAgICAgICAgICAgICA6IG9uXG4gICAgICAgICwgJ2FkZCcgICAgICAgICAgICAgICA6IGFkZFxuICAgICAgICAsICdvbmUnICAgICAgICAgICAgICAgOiBvbmVcbiAgICAgICAgLCAnb2ZmJyAgICAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ3JlbW92ZScgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdjbG9uZScgICAgICAgICAgICAgOiBjbG9uZVxuICAgICAgICAsICdmaXJlJyAgICAgICAgICAgICAgOiBmaXJlXG4gICAgICAgICwgJ0V2ZW50JyAgICAgICAgICAgICA6IEV2ZW50XG4gICAgICAgICwgJ3NldFNlbGVjdG9yRW5naW5lJyA6IHNldFNlbGVjdG9yRW5naW5lXG4gICAgICAgICwgJ25vQ29uZmxpY3QnICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBvbGRcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gIC8vIGZvciBJRSwgY2xlYW4gdXAgb24gdW5sb2FkIHRvIGF2b2lkIGxlYWtzXG4gIGlmICh3aW4uYXR0YWNoRXZlbnQpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpLCBlbnRyaWVzID0gcmVnaXN0cnkuZW50cmllcygpXG4gICAgICBmb3IgKGkgaW4gZW50cmllcykge1xuICAgICAgICBpZiAoZW50cmllc1tpXS50eXBlICYmIGVudHJpZXNbaV0udHlwZSAhPT0gJ3VubG9hZCcpIG9mZihlbnRyaWVzW2ldLmVsZW1lbnQsIGVudHJpZXNbaV0udHlwZSlcbiAgICAgIH1cbiAgICAgIHdpbi5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICAgICAgd2luLkNvbGxlY3RHYXJiYWdlICYmIHdpbi5Db2xsZWN0R2FyYmFnZSgpXG4gICAgfVxuICAgIHdpbi5hdHRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBzZWxlY3RvciBlbmdpbmUgdG8gaW50ZXJuYWwgZGVmYXVsdCAocVNBIG9yIHRocm93IEVycm9yKVxuICBzZXRTZWxlY3RvckVuZ2luZSgpXG5cbiAgcmV0dXJuIGJlYW5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVhbi9iZWFuLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9nZW9tZXRyeS9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuXHJcbi8vIHV0aWwgdmFyaWFibGVzXHJcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XHJcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxyXG5cdFx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSA9IG5ldyBNYXAoKTtcclxuXHRcdGlmICghbmFtZSlcclxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xyXG5cdFx0aWYgKCF0eXBlKVxyXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xyXG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSwgcHJvcHMsIGRlZmF1bHRUeXBlKSB7XHJcblx0XHRsZXQgbmFtZSA9IHByb3BzLm5hbWU7XHJcblxyXG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdHlwZSBleGlzdHNcclxuXHRcdGxldCB0eXBlID0gdGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSk7XHJcblx0XHRpZiAoIXR5cGUpIHtcclxuXHRcdFx0bGV0IGV4dGVuZCA9IHByb3BzLmV4dGVuZHMgPyB0aGlzLnR5cGUobmFtZXNwYWNlLCBwcm9wcy5leHRlbmRzKSA6IG51bGw7XHJcblx0XHRcdGlmICghZXh0ZW5kICYmIGRlZmF1bHRUeXBlKVxyXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xyXG5cdFx0XHRpZiAoZXh0ZW5kKVxyXG5cdFx0XHRcdHR5cGUgPSBjbGFzcyBleHRlbmRzIGV4dGVuZCB7fTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dHlwZSA9IGNsYXNzIHtcclxuXHRcdFx0XHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xyXG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdH1cclxuXHRcdFx0ZGVsZXRlIHByb3BzLm5hbWU7XHJcblx0XHRcdGRlbGV0ZSBwcm9wcy5leHRlbmRzO1xyXG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xyXG5cdFx0XHR0eXBlLnR5cGVOYW1lID0gbmFtZTtcclxuXHRcdFx0dGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSk7XHJcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHR5cGU7XHJcblx0fSxcclxuXHJcblx0YnVpbGRUeXBlczogZnVuY3Rpb24odHlwZXMsIG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpIHtcclxuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XHJcblxyXG5cdFx0aWYgKCF0eXBlcyAmJiBkZWZhdWx0VHlwZSkge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XHJcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcclxuXHRcdFx0bGV0IHR5cGUgPSBfLnJlbW92ZSh0eXBlcywge25hbWU6IGRlZmF1bHRUeXBlLm5hbWV9KTtcclxuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xyXG5cdFx0XHRpZiAodHlwZSlcclxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIF8uYXNzaWduKHt9LCBkZWZhdWx0VHlwZSwgdHlwZSkpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Xy5mb3JFYWNoKHR5cGVzLCAodHlwZSkgPT4ge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCB0eXBlLCBkZWZhdWx0VHlwZSk7XHJcblx0XHR9KTtcclxuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xyXG5cdH0sXHJcblxyXG5cdC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxyXG5cdC8vIFNpbWlsYXIgdG8gYGdvb2cuaW5oZXJpdHNgLCBidXQgdXNlcyBhIGhhc2ggb2YgcHJvdG90eXBlIHByb3BlcnRpZXMgYW5kXHJcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cclxuXHRleHRlbmQ6IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcblx0XHQvLyBBZGQgc3RhdGljIHByb3BlcnRpZXMgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBpZiBzdXBwbGllZC5cclxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcclxuXHJcblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0byBpbmhlcml0IGZyb20gYHBhcmVudGAsIHdpdGhvdXQgY2FsbGluZ1xyXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cclxuXHRcdHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XHJcblx0XHRTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XHJcblxyXG5cdFx0Ly8gQWRkIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChpbnN0YW5jZSBwcm9wZXJ0aWVzKSB0byB0aGUgc3ViY2xhc3MsXHJcblx0XHQvLyBpZiBzdXBwbGllZC5cclxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXHJcblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHJcblx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0fSxcclxuXHJcblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcclxuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xyXG5cdFx0d2hpbGUgKGMpIHtcclxuXHRcdFx0aWYgKGMuc3VwZXIpIHtcclxuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0XHRzcGxpY2UuYXBwbHkoY0FyciwgWzAsIDAsIGNdKTtcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0YyA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGMgPSBjQXJyW2ldO1xyXG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcclxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XHJcblx0XHR9XHJcblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcclxuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xyXG5cdFx0XHRpZiAoIXZhbHVlKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xyXG5cdFx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XHJcblx0XHR9O1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBqc0NsYXNzXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDbGFzc1xyXG5cdCAqL1xyXG5cdGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcclxuXHRcdGlmICghanNDbGFzcylcclxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcclxuXHJcblx0XHRpZiAoXy5pc1N0cmluZyhqc0NsYXNzKSlcclxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XHJcblx0XHRyZXR1cm4ganNDbGFzcztcclxuXHR9LFxyXG5cclxuXHRkZWJ1ZzogZnVuY3Rpb24obW9kdWxlTmFtZSkge1xyXG5cdFx0aWYgKG1vZHVsZU5hbWUpIHtcclxuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X2RlYnVnQWxsID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcclxuXHRcdGlmICghd2luZG93LmNvbnNvbGUpIHsgcmV0dXJuOyB9XHJcblx0XHR2YXIgZGVidWcgPSBfZGVidWdBbGw7XHJcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xyXG5cdFx0XHRkZWJ1ZyA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaTxfZGVidWdnaW5nLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cclxuXHRcdHdoaWxlIChuYW1lLmxlbmd0aDwxMCkgeyBuYW1lPW5hbWUrJyAnOyB9XHJcblx0XHRuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMTApK1wiIC0gXCI7XHJcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBzdWIgc2hhcGVzIHdpdGhpbiBhIHBhcmVudCBzaGFyZS5cclxuXHQgKiBAcGFyYW0gYm91bmRzXHJcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcclxuXHQgKiB7XHJcblx0ICogICAgICB4OiBcInggY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQsIGlmIGxlc3MgdGhhbiAxLCB3aWxsIGJlIHRyZWF0ZWQgYXMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHBhcmVudCB3aWR0aC5cIixcclxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcclxuXHQgKiAgICAgIGFuY2hvclg6IFwieCBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxyXG5cdCAqICAgICAgYW5jaG9yWTogXCJ5IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXHJcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxyXG5cdCAqICAgICAgb2Zmc2V0WTogXCJ0aGUgb2Zmc2V0IGluIHRoZSB5IGRpcmVjdGlvbi5cIixcclxuXHQgKiAgICAgIHdpZHRoOiBcInRoZSB3aWR0aCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiLFxyXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxyXG5cdCAqIH1cclxuXHQgKiBAcmV0dXJucyB7KltdfVxyXG5cdCAqL1xyXG5cdGdldFJlbGF0aXZlUG9zaXRpb246IGZ1bmN0aW9uKGJvdW5kcywgZ2VvbWV0cnkpIHtcclxuXHRcdGxldCB4ID0gTWF0aC5hYnMoZ2VvbWV0cnkueCkgPD0gMSA/IGJvdW5kcy53aWR0aCAqIGdlb21ldHJ5LnggOiBnZW9tZXRyeS54O1xyXG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xyXG5cdFx0cmV0dXJuIHRoaXMub2Zmc2V0UG9zaXRpb24oW3gsIHldLCBnZW9tZXRyeSk7XHJcblx0fSxcclxuXHJcblx0b2Zmc2V0UG9zaXRpb246IGZ1bmN0aW9uKHBvcywgZ2VvbWV0cnkpIHtcclxuXHRcdHJldHVybiBbcG9zWzBdICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9zWzFdICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXHJcblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRlXHJcblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXHJcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXHJcblx0ICovXHJcblx0dW5zY2FsZTogZnVuY3Rpb24odCwgc2NhbGUsIG8pIHtcclxuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0sIG8ud2lkdGgqc2NhbGUsIG8uaGVpZ2h0KnNjYWxlKTtcclxuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gW29bMF0qc2NhbGUrdFswXSwgb1sxXSpzY2FsZSt0WzFdXTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXHJcblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cclxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcclxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cclxuXHQgKi9cclxuXHRzY2FsZTogZnVuY3Rpb24odCwgc2NhbGUsIG8pIHtcclxuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XHJcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueC10WzBdKS9zY2FsZSwgKG8ueS10WzFdKS9zY2FsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBbKG9bMF0tdFswXSkvc2NhbGUsIChvWzFdLXRbMV0pL3NjYWxlXTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBDb252ZW5pZW5jZSBtZXRob2QuXHJcblx0ICovXHJcblx0Z2V0UHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xyXG5cdFx0aWYgKCFvYmopXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0aWYgKF8uaGFzKG9iaiwgcHJvcCkpXHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF07XHJcblx0XHRpZiAob2JqLnByb3AgJiYgXy5pc0Z1bmN0aW9uKG9iai5wcm9wKSlcclxuXHRcdFx0cmV0dXJuIG9iai5wcm9wKHByb3ApO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1V0aWxzLmpzXG4gKiovIiwiY2xhc3MgUG9pbnQge1xyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcclxuXHQgKi9cclxuXHRjbG9uZSgpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcHQgdG8gdGhlIG90aGVyIHB0LlxyXG5cdCAqIEBwYXJhbSBhUHRcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKGFQdCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRyYW5zbGF0ZSB0aGlzIHBvaW50XHJcbiBcdCAqL1xyXG5cdHRyYW5zbGF0ZShwMikge1xyXG5cdFx0dGhpcy54ICs9IHAyLng7XHJcblx0XHR0aGlzLnkgKz0gcDIueTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NhbGUgdGhpcyB2ZWN0b3JcclxuIFx0ICovXHJcblx0c2NhbGUoc2NhbGUpIHtcclxuXHRcdHRoaXMueCAqPSBzY2FsZTtcclxuXHRcdHRoaXMueSAqPSBzY2FsZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NhbGVkKHNjYWxlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSk7XHJcblx0fVxyXG5cclxuXHRnZXRUcmFuc2xhdGVkKHAyKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAyLngsIHRoaXMueSArIHAyLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cclxuXHQgKiBAcGFyYW0gcDJcclxuXHQgKiBAcmV0dXJucyB7UG9pbnR9XHJcblx0ICovXHJcblx0Z2V0RGlyZWN0aW9uKHAyKSB7XHJcblx0XHR2YXIgZGlzdCA9IHRoaXMuZGlzdGFuY2UocDIpO1xyXG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJvdGF0ZSB0aGUgcG9pbnQgYWJvdXQgdGhlIG9yaWdpbi4gV2l0aCB0aGUgc3BlY2lmaWVkIGFuZ2xlLlxyXG5cdCAqIEBwYXJhbSBhbmdsZSB0aGUgYW5nbGUgdG8gcm90YXRlXHJcblx0ICovXHJcblx0cm90YXRlKGFuZ2xlKSB7XHJcblx0XHR2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XHJcblx0XHR0aGlzLnggPSB4ICogY29zIC0geSAqIHNpbjtcclxuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXRSb3RhdGVkKGFuZ2xlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbG9uZSgpLnJvdGF0ZShhbmdsZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxyXG5cdCAqL1xyXG5cdGRvdFByb2R1Y3QocDIpIHtcclxuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgbWlkIHBvaW50IGJldHdlZW4gdGhpcyBhbmQgcDIuXHJcbiBcdCAqL1xyXG5cdGdldE1pZFBvaW50KHAyKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KCh0aGlzLnggKyBwMi54KSAvIDIsICh0aGlzLnkgKyBwMi55KSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cmV2ZXJzZSgpIHtcclxuXHRcdHRoaXMueCA9IC10aGlzLng7XHJcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRlcXVhbHMocDIpIHtcclxuXHRcdGlmICghcDIgfHwgcDIuY29uc3RydWN0b3IgIT0gUG9pbnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKHRoaXMueCA9PSBwMi54ICYmIHRoaXMueSA9PSBwMi55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmxlY3QgdGhpcyBwb2ludCB3LnIudC4gdGhlIHJlY3RhbmdsZS5cclxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxyXG5cdCAqIGNlbnRyYWwgbGluZSBvZiB0aGUgcmVjdGFuZ2xlLCBvdGhlcndpc2UgcmVmbGVjdCBjcm9zcyB0aGUgaG9yaXpvbnRhbFxyXG5cdCAqIGNlbnRyYWwgbGluZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZWN0IHRoZSByZWN0YW5nbGVcclxuXHQgKiBAcGFyYW0gdmVydGljYWwgd2hldGhlciBpcyB2ZXJ0aWNhbCByZWZsZWN0aW9uIG9yIGhvcml6b250YWwgcmVmbGVjdGlvbi5cclxuXHQgKi9cclxuXHRyZWZsZWN0KHJlY3QsIHZlcnRpY2FsKSB7XHJcblx0XHRpZiAodmVydGljYWwpXHJcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMueSA9IDIgKiByZWN0LnkgLSB0aGlzLnk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xyXG5cdH1cclxufVxyXG5cclxuUG9pbnQuVyA9IG5ldyBQb2ludCgtMSwgMCk7XHJcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xyXG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xyXG5Qb2ludC5FID0gbmV3IFBvaW50KDEsIDApO1xyXG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XHJcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XHJcblBvaW50LlNFID0gbmV3IFBvaW50KDEsIDEpO1xyXG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XG5cdC8qKlxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXG5cdCAqL1xuXHRjb250YWlucyhlbCkge1xuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcblx0XHRsZXQgaCA9IGVsLmhlaWdodCB8fCAwO1xuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xuXHRcdGxldCB0b3AgPSBlbC55IC0gaC8yO1xuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxuXHRcdFx0KHRvcCA+PSB0aGlzLnRvcCkgJiYgKGJvdHRvbSA8PSB0aGlzLmJvdHRvbSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcblxuXHRcdGlmIChwdC54IDwgdGhpcy5sZWZ0KSB7XG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcblx0XHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xuXHRcdH1cblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9wIC0gcHQueTtcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XG5cdFx0fVxuXHRcdGlmIChwdC55IDwgdGhpcy50b3ApXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXG5cdFx0XHRyZXR1cm4gcHQueCAtIHRoaXMucmlnaHQ7XG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxuXHQgKiB3aXRoIHRoZSByZWN0YW5nbGUgb3Igbm90LiBXZSBhc3N1bWUgb25seSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGxpbmUgc2VnbWVudHMuXG5cdCAqXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXG5cdCAqL1xuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xuXHRcdGxldCBjb250YWluczEgPSB0aGlzLmNvbnRhaW5zKHB0MSk7XG5cdFx0bGV0IGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XG5cdFx0aWYgKCFjb250YWluczEgJiYgIWNvbnRhaW5zMikge1xuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxuXHRcdFx0XHRcdHJldHVybiAwO1xuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxuXHRcdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcblx0XHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcblx0XHRcdFx0XHRyZXR1cm4gMztcblx0XHRcdH1cblx0XHRcdHJldHVybiAtMTtcblx0XHR9XG5cblx0XHRsZXQgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XG5cdFx0aWYgKGhvcml6b250YWwpIHtcblx0XHRcdGlmIChvdXRQdC54ID4gdGhpcy5yaWdodClcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHRyZXR1cm4gMztcblx0XHR9XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG5cblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0bGV0IHggPSByZWN0Lng7XG5cdFx0bGV0IHkgPSByZWN0Lnk7XG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XG5cdFx0bGV0IGR5ID0gcHQueSAtIHk7XG5cdFx0bGV0IGFscGhhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xuXHRcdGxldCBwaSA9IE1hdGguUEk7XG5cdFx0bGV0IHBpMiA9IE1hdGguUEkvMjtcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xuXHRcdGxldCB0ID0gTWF0aC5hdGFuMihyZWN0LmhlaWdodCwgcmVjdC53aWR0aCk7XG5cblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XG5cdFx0XHQvLyBMZWZ0IGVkZ2Vcblx0XHRcdHAueCA9IHJlY3QubGVmdDtcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcblx0XHRcdC8vIFRvcCBFZGdlXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcblx0XHRcdHAueCA9IHggLSByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xuXHRcdFx0Ly8gUmlnaHQgRWRnZVxuXHRcdFx0cC54ID0gcmVjdC5yaWdodDtcblx0XHRcdHAueSA9IHkgKyByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQm90dG9tIEVkZ2Vcblx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xuXHRcdH1cblxuXHRcdGlmIChvcnRob2dvbmFsKSB7XG5cdFx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XG5cdFx0XHRcdC8vIExlZnQgZWRnZVxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XG5cdFx0XHRcdHAueSA9IHk7XG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcblx0XHRcdFx0Ly8gVG9wIEVkZ2Vcblx0XHRcdFx0cC55ID0gcmVjdC50b3A7XG5cdFx0XHRcdHAueCA9IHg7XG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xuXHRcdFx0XHQvLyBSaWdodCBFZGdlXG5cdFx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XG5cdFx0XHRcdHAueSA9IHk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBCb3R0b20gRWRnZVxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcblx0XHRcdFx0cC54ID0geDtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0YW5nbGUgdGhhdCBjb250YWlucyBwMSBhbmQgcDJcblx0ICovXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xuXHRcdGlmICghcHRzIHx8IHB0cy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxuXHRcdFx0bWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XG5cdFx0bGV0IG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGV0IHAgPSBwdHNbaV07XG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XG5cdFx0XHRcdG1pblswXSA9IHAueDtcblx0XHRcdH1cblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcblx0XHRcdFx0bWluWzFdID0gcC55O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xuXHRcdFx0XHRtYXhbMF0gPSBwLng7XG5cdFx0XHR9XG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XG5cdFx0XHRcdG1heFsxXSA9IHAueTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bWluWzBdID0gbWluWzBdIC0gbWFyZ2luWzBdO1xuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XG5cdFx0bWF4WzFdID0gbWF4WzFdICsgbWFyZ2luWzNdO1xuXHRcdGxldCB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWluWzBdICsgdy8yLCBtaW5bMV0gKyBoLzIsIHcsIGgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cblx0ICogQHBhcmFtIHJlY3RzXG5cdCAqL1xuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xuXHRcdF8uZWFjaChyZWN0cywgZnVuY3Rpb24gKHJlY3QpIHtcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcblx0XHRcdG1pbnggPSBNYXRoLm1pbihtaW54LCByZWN0LngpO1xuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcblx0XHRcdG1heHkgPSBNYXRoLm1heChtYXh5LCByZWN0LmJvdHRvbSgpKTtcblx0XHR9KTtcblx0XHRtaW54ID0gbWlueCB8fCAwO1xuXHRcdG1pbnkgPSBtaW55IHx8IDA7XG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXG5cdCAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgV0VTVCAoLTEsMCksIEVBU1QgKDEsMCksIE5PUlRIICgwLC0xKSBhbmQgU09VVEggKDAsMSkgaWYgb3J0aG9nb25hbCBpcyB0cnVlLCBvdGhlcndpc2UgcmV0dXJuXG5cdCAqIHRoZSBkaXJlY3Rpb24gY29ubmVjdGlvbiB0aGUgY2VudGVyIG9mIHIgYW5kIHAuXG5cdCAqIEBwYXJhbSByXG5cdCAqIEBwYXJhbSBwXG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxuXHQgKi9cblx0c3RhdGljIGdldERpcmVjdGlvbihyLCBwLCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRpZiAoIW9ydGhvZ29uYWwpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHIueCwgci55KS5nZXREaXJlY3Rpb24obmV3IFBvaW50KHAueCwgcC55KSk7XG5cblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xuXG5cdFx0aSA9IE1hdGguYWJzKHIudG9wIC0gcC55KTtcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xuXHRcdFx0ZGlzdGFuY2UgPSBpO1xuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuTjtcblx0XHR9XG5cblx0XHRpID0gTWF0aC5hYnMoci5ib3R0b20gLSBwLnkpO1xuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XG5cdFx0XHRkaXN0YW5jZSA9IGk7XG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5TO1xuXHRcdH1cblxuXHRcdGkgPSBNYXRoLmFicyhyLnJpZ2h0IC0gcC54KTtcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5FO1xuXHRcdH1cblxuXHRcdHJldHVybiBkaXJlY3Rpb247XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1JlY3RhbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5cclxubGV0IHJlZ2lzdHJ5ID0ge307XHJcblxyXG5jbGFzcyBTaGFwZSB7XHJcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XHJcblx0XHR0aGlzLnggPSB4O1xyXG5cdFx0dGhpcy55ID0geTtcclxuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcclxuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cdFx0Xy5kZWZhdWx0cyh0aGlzLCBjb25maWcsIHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Z2V0IHRvcCgpIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzI7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgdGhpcyBSZWN0YW5nbGUuXHJcblx0ICovXHJcblx0Z2V0IGJvdHRvbSgpIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSB4LWNvb3JkIG9mIGxlZnQgc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cclxuXHQgKi9cclxuXHRnZXQgcmlnaHQoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cclxuXHJcblx0Z2V0IGNlbnRlcigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH1cclxuXHJcblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxyXG5cclxuXHRjb250YWlucyhlbCkgeyByZXR1cm4gZmFsc2U7IH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhpcyB3aWxsIGdlbmVyYXRlIG4gcG9ydHMgb24gdGhlIHNoYXBlLlxyXG5cdCAqL1xyXG5cdGdldFJlZ3VsYXJQb2ludHMobikge3JldHVybiBudWxsO31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiBib3VuZGFyeSBvZiB0aGlzIHNoYXBlIGFuZCB0aGUgbGluZSBjb25uZWN0aW5nICh4LHkpIHdpdGggdGhlIHJlZlB0LlxyXG5cdCAqIEBwYXJhbSByZWZQdFxyXG5cdCAqIEByZXR1cm5zIHtudWxsfVxyXG5cdCAqL1xyXG5cdGdldFBlcmltZXRlcihyZWZQdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHZpZXcpIHtcclxuXHRcdGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodmlldy5nZXRUZW1wbGF0ZSh0aGlzLm5hbWUsIHRoaXMpKTtcclxuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRTaGFwZShuYW1lKSB7XHJcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xyXG5cdFx0cmVnaXN0cnlbbmFtZV0gPSBjO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbW92ZVNoYXBlKG5hbWUpIHtcclxuXHRcdGRlbGV0ZSByZWdpc3RyeVtuYW1lXTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLyoqXHJcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XHJcblx0XHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XHJcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xyXG5cclxuXHRcdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXHJcblx0XHRpZiAoSWR4ID4gMClcclxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHNBZ2VudC5zdWJzdHJpbmcoSWR4ICsgNSwgc0FnZW50LmluZGV4T2YoXCIuXCIsIElkeCkpKTtcclxuXHJcblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXHJcblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXHJcblx0XHRcdHJldHVybiAxMTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xyXG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXHJcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcclxuXHR9KSgpLFxyXG5cclxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcclxuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcclxuXHRcdGlmIChodG1sKVxyXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0cmV0dXJuIGVsO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcclxuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XHJcblx0fSxcclxuXHJcblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcclxuXHRcdGlmIChhdHRyaWJzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XHJcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcblx0XHRcdCB9KTtcclxuXHRcdH1cclxuXHRcdGlmIChzdHlsZXMpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xyXG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcclxuXHR9LFxyXG5cclxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcclxuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxyXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcclxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXHJcblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIGNvbnRleHRcclxuXHQgKiBAcmV0dXJucyB7KltdfVxyXG5cdCAqL1xyXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XHJcblx0fSxcclxuXHJcblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcclxuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcclxuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XHJcblxyXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xyXG5cdH0sXHJcblxyXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XHJcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cdH0sXHJcblxyXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XHJcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xyXG5cdFx0cmV0dXJuIFt3LCBoXTtcclxuXHR9LFxyXG5cclxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XHJcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xyXG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xyXG5cdH0sXHJcblxyXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XHJcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xyXG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XHJcblxyXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcclxuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcclxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xyXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0bGlzdC5wdXNoKGltZyk7XHJcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcclxuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIHNyY1xyXG5cdCAqL1xyXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XHJcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cclxuXHQgKiBAcGFyYW0gZSAgaW5wdXQgZXZlbnRcclxuXHQgKi9cclxuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XHJcblx0XHR2YXIgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWU7XHJcblx0XHRyZXR1cm4gKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvRG9tVXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ0J1ZmZlciB7XHJcblx0Y29uc3RydWN0b3Ioc3RyKSB7XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdFx0aWYgKHN0cilcclxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xyXG5cdH1cclxuXHJcblx0YXBwZW5kKHN0dWZmKSB7XHJcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3R1ZmYpO1xyXG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcclxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHByZXBlbmQoc3R1ZmYpIHtcclxuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcclxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gc3R1ZmYuY29uY2F0KHRoaXMuYnVmZmVyKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGNsZWFyKCkge1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUxhc3QoKSB7XHJcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoc2VwKSB7XHJcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XHJcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XHJcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xyXG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xyXG5cdFx0dGhpcy5lbmQgPSBlbmQ7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcclxuXHQgKi9cclxuXHRsZW5ndGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIG9mIHRoaXMgbGluZSB0byB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdHZhciB4ID0gdGhpcy5zdGFydC5kaXN0YW5jZShwdCk7XHJcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcclxuXHJcblx0XHR2YXIgbCA9IHRoaXMubGVuZ3RoKCk7XHJcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxyXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XHJcblxyXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cclxuXHQgKlxyXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxyXG5cdCAqXHJcblx0ICogUGFyYW1ldGVyczpcclxuXHQgKlxyXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cclxuXHQgKiB5MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cclxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxyXG5cdCAqIHgyIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cclxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cclxuXHQgKiB5MyAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cclxuXHQgKi9cclxuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xyXG5cdFx0dmFyIGRlbm9tID0gKCh5MyAtIHkyKSAqICh4MSAtIHgwKSkgLSAoKHgzIC0geDIpICogKHkxIC0geTApKTtcclxuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xyXG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XHJcblxyXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XHJcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcclxuXHJcblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XHJcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XHJcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25YID0geDAgKyB1YSAqICh4MSAtIHgwKTtcclxuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xyXG5cclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChpbnRlcnNlY3Rpb25YLCBpbnRlcnNlY3Rpb25ZKTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBObyBpbnRlcnNlY3Rpb25cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG5cblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcblx0XHR2YXIgYiA9IHJlY3QuaGVpZ2h0IC8gMjtcblx0XHR2YXIgY3ggPSByZWN0Lng7XG5cdFx0dmFyIGN5ID0gcmVjdC55O1xuXHRcdHZhciBweCA9IHB0Lng7XG5cdFx0dmFyIHB5ID0gcHQueTtcblxuXHRcdC8vIENhbGN1bGF0ZXMgc3RyYWlnaHQgbGluZSBlcXVhdGlvbiB0aHJvdWdoXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcblx0XHR2YXIgZHkgPSBwYXJzZUludChweSAtIGN5KTtcblxuXHRcdHZhciB0eCwgdHk7XG5cblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XG5cdFx0fSBlbHNlIGlmIChkeCA9PSAwICYmIGR5ID09IDApIHtcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxuXHRcdHZhciBkID0gZHkgLyBkeDtcblx0XHR2YXIgaCA9IGN5IC0gZCAqIGN4O1xuXHRcdHZhciBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XG5cdFx0dmFyIGcgPSBhICogYSAqIGQgKiBkICogY3ggKiBjeCArIGIgKiBiICogY3ggKiBjeCAtIGEgKiBhICogYiAqIGI7XG5cdFx0dmFyIGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XG5cblx0XHQvLyBUd28gc29sdXRpb25zIChwZXJpbWV0ZXIgcG9pbnRzKVxuXHRcdHZhciB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xuXHRcdHZhciB5b3V0MSA9IGQgKiB4b3V0MSArIGg7XG5cdFx0dmFyIHlvdXQyID0gZCAqIHhvdXQyICsgaDtcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xuXHRcdHZhciBkaXN0MiA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDIgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQyIC0gcHkpLCAyKSk7XG5cblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXG5cdFx0dmFyIHhvdXQgPSAwO1xuXHRcdHZhciB5b3V0ID0gMDtcblxuXHRcdGlmIChkaXN0MSA8IGRpc3QyKSB7XG5cdFx0XHR4b3V0ID0geG91dDE7XG5cdFx0XHR5b3V0ID0geW91dDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHhvdXQgPSB4b3V0Mjtcblx0XHRcdHlvdXQgPSB5b3V0Mjtcblx0XHR9XG5cblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcblx0XHRpZiAob3J0aG9nb25hbCkge1xuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCAtIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4ICsgYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSAtIGIpLCBkaXJlY3Rpb246IGRpcn07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5ICsgYiksIGRpcmVjdGlvbjogZGlyfTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdHR5cGU6IFwiZGlyZWN0XCIsXG5cdHNob3dHYXVnZTogdHJ1ZSxcblx0b3J0aG9nb25hbDogZmFsc2Vcbn07XG5cbmxldCBkZWZhdWx0R2VvbWV0cnkgPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdGFuY2hvclg6IDAsXG5cdGFuY2hvclk6IDAsXG5cdG9mZnNldFg6IDAsXG5cdG9mZnNldFk6IDBcbn07XG5cbmxldCBsaW5rVHlwZXMgPSB7fTtcblxuY2xhc3MgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHR0aGlzLnN0YXJ0ID0gdGVybWluYWxWaXN1YWxbMF0ucG9pbnQ7XG5cdFx0dGhpcy5lbmQgPSB0ZXJtaW5hbFZpc3VhbFsxXS5wb2ludDtcblx0XHR0aGlzLnN0YXJ0Tm9ybWFsID0gdGVybWluYWxWaXN1YWxbMF0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuZW5kTm9ybWFsID0gdGVybWluYWxWaXN1YWxbMV0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuc3RhcnRNYXJrZXIgPSBzdGFydE1hcmtlcjtcblx0XHR0aGlzLmVuZE1hcmtlciA9IGVuZE1hcmtlcjtcblx0XHRfLmFzc2lnbih0aGlzLCBzaGFwZUNvbmZpZyk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsodGhpcyk7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgY29udHJvbFB0cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGksIGwgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKVxuXHRcdFx0bCArPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdHJldHVybiBsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IG1vZGlmaWVycyBvciBsYWJlbC4uXG5cdCAqXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxuXHQgKiBAcmV0dXJuICpbXSB0aGUgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPD0gMSkgcCAqPSBsO1xuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xuXHRcdGlmIChwID4gbCkgcCA9IGw7XG5cblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHMsIGQsIHBvaW50LCBkaXI7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRkID0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdGlmIChwIDw9IGQpIHtcblx0XHRcdFx0Ly8gd2UndmUgbG9jYXRlZCB0aGUgbGluZSBzZWdtZW50LlxuXHRcdFx0XHRwb2ludCA9IHBvaW50c1tpXS5jbG9uZSgpO1xuXHRcdFx0XHRkaXIgPSBwb2ludC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pO1xuXHRcdFx0XHRwb2ludC50cmFuc2xhdGUoZGlyLmdldFNjYWxlZChwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cCAtPSBkO1xuXHRcdH1cblxuXHRcdC8vIHJldHVybiB0aGUgbGFzdCBwb2ludC5cblx0XHRpZiAoIXBvaW50KVxuXHRcdFx0cG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluayc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TGluayh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGxpbmtDbGFzcyA9IGxpbmtUeXBlc1tzaGFwZUNvbmZpZy50eXBlXTtcblx0XHRpZiAobGlua0NsYXNzKVxuXHRcdFx0cmV0dXJuIG5ldyBsaW5rQ2xhc3ModGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0XHRjb25zb2xlLmxvZygnbGluayB0eXBlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy50eXBlKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5jbGFzcyBEaXJlY3RMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cbn1cblxuY2xhc3MgQmV6aWVyTGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2xQdHMoKSB7XG5cdFx0bGV0IHMgPSB0aGlzLnBvaW50c1swXSwgZSA9IHRoaXMucG9pbnRzWzFdO1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBudWxsO1xuXHRcdHB0c1sxXSA9IFtdO1xuXHRcdGlmICh0aGlzLnN0YXJ0Tm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KHMueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIHMueSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuZE5vcm1hbC54ID09IDApIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludChlLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBlLnkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApID4gMSkgcCAvPSBsO1xuXHRcdGlmIChwIDwgMCkgcCsrO1xuXHRcdGlmIChwID4gMSkgcC0tO1xuXG5cdFx0bGV0IHB0cyA9IHRoaXMucG9pbnRzO1xuXHRcdGxldCBjdHJscHRzID0gdGhpcy5jb250cm9sUHRzO1xuXHRcdGxldCBwMSA9IHB0c1swXTtcblx0XHRsZXQgcDIgPSBjdHJscHRzWzFdWzBdO1xuXHRcdGxldCBwMyA9IGN0cmxwdHNbMV1bMV07XG5cdFx0bGV0IHA0ID0gcHRzWzFdO1xuXG5cdFx0bGV0IHBvaW50ID0gWygxLXApKigxLXApKigxLXApICogcDEueCArIDMqcCooMS1wKSooMS1wKSAqIHAyLnggKyAzKnAqcCooMS1wKSAqIHAzLnggKyBwKnAqcCAqIHA0LngsICgxLXApKigxLXApKigxLXApICogcDEueSArIDMqcCooMS1wKSooMS1wKSAqIHAyLnkgKyAzKnAqcCooMS1wKSAqIHAzLnkgKyBwKnAqcCAqIHA0LnldO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxufVxuXG5jbGFzcyBFbnRpdHlSZWxhdGlvbnMgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHR2YXIgc291cmNlID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgdHJ1ZSk7XG5cdFx0dmFyIHRhcmdldCA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIGZhbHNlKTtcblx0XHR2YXIgaXNTb3VyY2VMZWZ0ID0gdGFyZ2V0LnJpZ2h0KCkgPCBzb3VyY2UueDtcblx0XHR2YXIgaXNUYXJnZXRMZWZ0ID0gc291cmNlLnJpZ2h0KCkgPCB0YXJnZXQueDtcblx0XHR2YXIgcmVzdWx0ID0gW107XG5cblx0XHR2YXIgeDAgPSAoaXNTb3VyY2VMZWZ0KSA/IHNvdXJjZS54IDogc291cmNlLnggKyBzb3VyY2Uud2lkdGg7XG5cdFx0dmFyIHkwID0gc291cmNlLmdldENlbnRlclkoKTtcblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeDAsIHkwKSk7XG5cblx0XHR2YXIgeGUgPSAoaXNUYXJnZXRMZWZ0KSA/IHRhcmdldC54IDogdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG5cdFx0dmFyIHllID0gdGFyZ2V0LmdldENlbnRlclkoKTtcblxuXHRcdHZhciBzZWcgPSB0aGlzLnNlZ21lbnQ7XG5cblx0XHR2YXIgZHggPSAoaXNTb3VyY2VMZWZ0KSA/IC1zZWcgOiBzZWc7XG5cdFx0dmFyIGRlcCA9IG5ldyBQb2ludCh4MCArIGR4LCB5MCk7XG5cblx0XHRkeCA9IChpc1RhcmdldExlZnQpID8gLXNlZyA6IHNlZztcblx0XHR2YXIgYXJyID0gbmV3IFBvaW50KHhlICsgZHgsIHllKTtcblxuXHRcdC8vIEFkZHMgaW50ZXJtZWRpYXRlIHBvaW50cyBpZiBib3RoIGdvIG91dCBvbiBzYW1lIHNpZGVcblx0XHRpZiAoaXNTb3VyY2VMZWZ0ID09IGlzVGFyZ2V0TGVmdClcblx0XHR7XG5cdFx0XHR2YXIgeCA9IChpc1NvdXJjZUxlZnQpID9cblx0XHRcdE1hdGgubWluKHgwLCB4ZSktc2VnIDpcblx0XHRcdE1hdGgubWF4KHgwLCB4ZSkrc2VnO1xuXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeTApKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5ZSkpO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoZGVwLnggPCBhcnIueCkgPT0gaXNTb3VyY2VMZWZ0KVxuXHRcdHtcblx0XHRcdHZhciBtaWRZID0geTAgKyAoeWUgLSB5MCkgLyAyO1xuXG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGRlcC54LCBtaWRZKSk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoYXJyLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeGUsIHllKSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5cbmNsYXNzIE1hbmhhdHRhbiBleHRlbmRzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHMoc2hhcGVDb25maWcsIHtcblx0XHRcdE1JTl9CVUZGRVI6IDEwLFxuXHRcdFx0YXV0b1JvdXRlOiBmYWxzZSxcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXG5cdFx0fSk7XG5cdFx0c3VwZXIodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7XG5cdFx0Ly9sZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlSW50ZXJuYWwodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdC8vcG9zID0gTWFuaGF0dGFuLnByb2Nlc3NQb3NpdGlvbnModGhpcy5zdGFydCwgdGhpcy5lbmQsIHBvcywgdGhpcy5zdGFydE5vcm1hbC54IT0wKTtcblx0XHRsZXQgcG9zID0gTWFuaGF0dGFuLmZpbmRQb3NpdGlvbnModGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdFx0dmFyIGJveGVzID0gW10sIG5vZGUsIHN0YXJ0Qm94LCBlbmRCb3g7XG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcblx0XHRcdHZhciBpbmRleCA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdC8vIERvIG5vdCBpbmNsdWRlIHNvdXJjZSBvciB0YXJnZXQgYW5jZXN0b3JzIGluIHJvdXRpbmcuXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcblx0XHRcdFx0c3RhcnRCb3ggPSBpbmRleDtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xuXHRcdFx0XHRib3hlcy5wdXNoKG5vZGUuZ2V0Qm91bmRzKGRvY3VtZW50KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYm94ZXMubGVuZ3RoID4gMSlcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdH1cblx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8vTmV3IGZ1bmN0aW9uIGZvciBmaW5kaW5nIHJvdXRlXG5cdHN0YXRpYyBmaW5kUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBzdGFydEJ1ZmZlciA9IG5ldyBQb2ludChzdGFydC54ICsgc3RhcnROb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnQueSArIHN0YXJ0Tm9ybWFsLnkgKiBidWZmZXIpO1xuXHRcdHZhciBlbmRCdWZmZXIgPSBuZXcgUG9pbnQoZW5kLnggKyBlbmROb3JtYWwueCAqIGJ1ZmZlciwgZW5kLnkgKyBlbmROb3JtYWwueSAqIGJ1ZmZlcik7XG5cdFx0dmFyIHN0YXJ0QnVmZmVyTm9ybWFsLCBlbmRCdWZmZXJOb3JtYWw7XG5cdFx0dmFyIHB0cztcblx0XHRpZiAoc3RhcnROb3JtYWwueCAhPSAwKSB7XG5cdFx0XHRpZiAoKGVuZEJ1ZmZlci54IC0gc3RhcnRCdWZmZXIueCkgLyBzdGFydE5vcm1hbC54ID4gMCkge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KDAsIChlbmRCdWZmZXIueSA+PSBzdGFydEJ1ZmZlci55KSA/IDEgOiAtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKChlbmRCdWZmZXIueSAtIHN0YXJ0QnVmZmVyLnkpIC8gc3RhcnROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoZW5kQnVmZmVyLnggPj0gc3RhcnRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZW5kTm9ybWFsLnggIT0gMCkge1xuXHRcdFx0aWYgKChzdGFydEJ1ZmZlci54IC0gZW5kQnVmZmVyLngpIC8gZW5kTm9ybWFsLnggPiAwKSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKHN0YXJ0QnVmZmVyLnkgPj0gZW5kQnVmZmVyLnkpID8gMSA6IC0xKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnkgLSBlbmRCdWZmZXIueSkgLyBlbmROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gZW5kTm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoc3RhcnRCdWZmZXIueCA+PSBlbmRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPT0gMCkge1xuXHRcdFx0dmFyIG1pZGRsZSA9IChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApID8gbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIGVuZEJ1ZmZlci55KSA6IG5ldyBQb2ludChlbmRCdWZmZXIueCwgc3RhcnRCdWZmZXIueSk7XG5cdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBtaWRkbGUsIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpIDwgMCkge1xuXHRcdFx0aWYgKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgc3RhcnRCdWZmZXIueSksIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIGVuZEJ1ZmZlci55KSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludChzdGFydEJ1ZmZlci54ICsgc3RhcnRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnRCdWZmZXIueSArIHN0YXJ0QnVmZmVyTm9ybWFsLnkgKiBidWZmZXIpLCBuZXcgUG9pbnQoZW5kQnVmZmVyLnggKyBlbmRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgZW5kQnVmZmVyLnkgKyBlbmRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cblx0XHR2YXIgcHJ1bmVQdHMgPSBbXTtcblx0XHRwcnVuZVB0c1swXSA9IHB0c1swXTtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmICgocHRzW2ldLnggPT0gcHRzW2ktMV0ueCAmJiBwdHNbaV0ueCA9PSBwdHNbaSsxXS54KSB8fCAocHRzW2ldLnkgPT0gcHRzW2ktMV0ueSAmJiBwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHBydW5lUHRzLnB1c2gocHRzW2ldKTtcblx0XHR9XG5cdFx0cHJ1bmVQdHMucHVzaChwdHNbcHRzLmxlbmd0aCAtIDFdKTtcblx0XHRyZXR1cm4gcHJ1bmVQdHM7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIHJvdXRlIGJhc2VkIG9uIHRoZSBzdGFydCwgZW5kIGFuZCBzdGFydE5vcm1hbCBhbmQgZW5kTm9ybWFsXG5cdCAqIE5vbmUgb2YgdGhlIHBhcmFtZXRlcnMgY2FuIGJlIG51bGxcblx0ICogVE9ETzogVGhpcyBtZXRob2QgY291bGQgdXNlIHNvbWUgaW1wcm92ZW1lbnQuLi5cblx0ICovXG5cdHN0YXRpYyByb3V0ZUludGVybmFsKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5nZXREaXJlY3Rpb24oZW5kKTtcblx0XHR2YXIgYXZlcmFnZSA9IHN0YXJ0LmdldE1pZFBvaW50KGVuZCk7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHZhciBzdGFydFBvc2l0aXZlID0gbmV3IFBvaW50KHN0YXJ0Tm9ybWFsLngqc3RhcnROb3JtYWwueCwgc3RhcnROb3JtYWwueSpzdGFydE5vcm1hbC55KTtcblx0XHR2YXIgZW5kUG9zaXRpdmUgPSBuZXcgUG9pbnQoZW5kTm9ybWFsLngqZW5kTm9ybWFsLngsIGVuZE5vcm1hbC55KmVuZE5vcm1hbC55KTtcblx0XHR2YXIgaG9yaXpvbnRhbCA9IHN0YXJ0Tm9ybWFsLnggIT0gMDtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueSA6IHN0YXJ0Lng7XG5cblx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0dmFyIGk7XG5cdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA9PSAwKSB7XG5cdFx0XHRpZiAoKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHQmJiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8PSAwKSkge1xuXHRcdFx0XHQvLyAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyAyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+IDApXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID4gMCkge1xuXHRcdFx0XHQvLzFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLzMgb3IgMVxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBvcy5wdXNoKGhvcml6b250YWwgPyBlbmQueSA6IGVuZC54KTtcblxuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvLyBQcm9jZXNzIHRoZSBwb3NpdGlvbnMuXG5cdHN0YXRpYyBwcm9jZXNzUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHBvc2l0aW9ucywgaG9yaXpvbnRhbCkge1xuXHRcdHZhciBwb3MgPSBbXTtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueCA6IHN0YXJ0Lnk7XG5cdFx0dmFyIGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cG9zW2kgKyAxXSA9IHBvc2l0aW9uc1tpXTtcblx0XHR9XG5cdFx0cG9zLnB1c2goKGhvcml6b250YWwgPT0gKHBvc2l0aW9ucy5sZW5ndGggJSAyID09IDEpKSA/IGVuZC54IDogZW5kLnkpO1xuXG5cdFx0dmFyIHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IHN0YXJ0O1xuXHRcdHZhciBwO1xuXHRcdHZhciBjdXJyZW50LCBwcmV2O1xuXHRcdGZvciAoaSA9IDI7IGkgPCBwb3MubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRwcmV2ID0gcG9zW2kgLSAxXTtcblx0XHRcdGN1cnJlbnQgPSBwb3NbaV07XG5cdFx0XHRwID0gaG9yaXpvbnRhbCA/IG5ldyBQb2ludChwcmV2LCBjdXJyZW50KSA6IG5ldyBQb2ludChjdXJyZW50LCBwcmV2KTtcblx0XHRcdHB0cy5wdXNoKHApO1xuXHRcdH1cblx0XHRwdHMucHVzaChlbmQpO1xuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSByb3V0ZSB0aGUgY29ubmVjdGlvbiB0byBhdm9pZCBpbnRlcnNlY3Rpb25zIHdpdGggb3RoZXIgdmVydGljZXMuXG5cdCAqL1xuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIHNpZGUsIHNpZGUyLCBkLCBib3gsIGludGVyc2VjdCwgajtcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XG5cblx0XHR2YXIgc3RhcnRQYWRkaW5nID0gMCwgZW5kUGFkZGluZztcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XG5cdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDJdO1xuXHRcdGlmIChwdC55IDwgYm94LnkpXG5cdFx0XHRzaWRlID0gMTtcblx0XHRlbHNlIGlmIChwdC55ID4gYm94LnkgKyBib3guaGVpZ2h0KVxuXHRcdFx0c2lkZSA9IDM7XG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxuXHRcdFx0c2lkZSA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0c2lkZSA9IDI7XG5cdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgZW5kQm94LCBib3hlcywgc2lkZSk7XG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdFx0aWYgKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcblx0XHRcdHN3aXRjaChzaWRlKSB7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS55ID09IHB0c1tpKzNdLnkpICYmIChwdHNbaSsyXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpKzJdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIuYm90dG9tICsgY2hhbm5lbDIudG9wKS8yIC0gcHQueTtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS54ID09IHB0c1tpKzNdLngpICYmIChwdHNbaSsyXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaSsyXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIucmlnaHQgKyBjaGFubmVsMi5sZWZ0KS8yIC0gcHQueDtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIG1heCBwb2ludHMuXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpKzEsIDAsIHB0KTtcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHR9XG5cdH1cblxuXHRfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBib3gsIHNpZGUsIHNhdmVkSW5kZXggPSBudWxsLCBzYXZlZFNpZGUgPSBudWxsO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgoaSA9PSAwICYmIGogPT0gc3RhcnRCb3gpIHx8IChpID09IHB0cy5sZW5ndGggLSAyICYmIGogPT0gZW5kQm94KSlcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdHNpZGUgPSBib3guZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pO1xuXHRcdFx0aWYgKHNpZGUgPj0gMCkge1xuXHRcdFx0XHRpZiAoc2F2ZWRJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoYm94ZXNbc2F2ZWRJbmRleF0uZGlzdGFuY2UocHRzW2ldKSA+IGJveC5kaXN0YW5jZShwdHNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzYXZlZEluZGV4ICE9IG51bGwpXG5cdFx0XHRyZXR1cm4gW3NhdmVkSW5kZXgsIHNhdmVkU2lkZV07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIGJyZWFrUHQsIGJveCwgc2lkZSkge1xuXHRcdHZhciBkaXI7XG5cdFx0dmFyIHA7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHAgPSBcInlcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHAgPSBcInhcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vZmlyc3QgdHJ5IHRoZSBicmVha3B0LlxuXHRcdGRpciA9IF9nZXRSb3V0ZURpcmVjdGlvbihicmVha1B0LCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdGRpciA9IC1fZ2V0Um91dGVEaXJlY3Rpb24ocHRzWzBdLCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0XHRpZiAoYnJlYWtQdFtwXSA8IGJveC5nZXRDZW50ZXIoKVtwXSlcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkaXI7XG5cdH1cblxuXHRfZ2V0Um91dGVEaXJlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcblx0XHRcdHJldHVybiBQb2ludC5OO1xuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcblx0XHRcdHJldHVybiBQb2ludC5XO1xuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcblx0XHRcdHJldHVybiBQb2ludC5ORTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcblx0XHRcdHJldHVybiBQb2ludC5OVztcblx0XHR9XG5cdH1cblxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xuXHRcdHZhciBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcblx0XHR2YXIgYm94MSA9IGJveGVzW2luZGV4XSwgYm94Mjtcblx0XHR2YXIgcHQsIGk7XG5cdFx0dmFyIGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcblx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IHB0Lng7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkge1xuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNoYW5uZWwucmlnaHQgLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkge1xuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNoYW5uZWwuYm90dG9tIC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRSaWdodCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAobCA8PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRCb3R0b20oKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGlmIChib3gyLmdldFRvcCgpLnkgPD0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYW5uZWw7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHB0cyB0aGUgbGlzdCBvZiBwb2ludHMuXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSBzdGFydFBhZGRpbmdcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcblx0ICovXG5cdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZykge1xuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxuXHRcdHZhciBkaXIsIGwsIHB0O1xuXHRcdGlmIChpID09IDApIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xuXHRcdFx0aWYgKCFzdGFydFBhZGRpbmcpXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbMF0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoaSA9PSBwdHMubGVuZ3RoIC0gMikge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgZW5kIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcblx0XHRcdGlmICghZW5kUGFkZGluZylcblx0XHRcdFx0ZW5kUGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XG5cdFx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMV0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZShwdHMubGVuZ3RoIC0gMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHB0c1tpXS55ID09IHB0c1tpKzFdLnkpIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnkgPT0gcHRzW2ldLnkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueSArPSBkO1xuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS54ID09IHB0c1tpXS54KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnggKz0gZDtcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBtZXRob2Qgd2lsbCBtZXJnZSB0aGUgcmVkdW5kYW50IHNlZ21lbnRzLlxuXHQgKi9cblx0X21lcmdlU2VnbWVudHMocHRzKSB7XG5cdFx0dmFyIGgxID0gcHRzW3B0cy5sZW5ndGgtMV0ueSA9PSBwdHNbcHRzLmxlbmd0aC0yXS55O1xuXHRcdHZhciBoMjtcblx0XHRmb3IgKHZhciBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XG5cdFx0XHRoMiA9IHB0c1tpXS55ID09IHB0c1tpLTFdLnk7XG5cdFx0XHRpZiAoaDIgPT0gaDEgfHwgKHB0c1tpXS5lcXVhbHMocHRzW2ktMV0pKSlcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0aDEgPSAhaDE7XG5cdFx0fVxuXHR9XG59XG5cbmxpbmtUeXBlc1snZGlyZWN0J10gPSBEaXJlY3RMaW5rO1xubGlua1R5cGVzWydiZXppZXInXSA9IEJlemllckxpbms7XG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xubGlua1R5cGVzWydtYW5oYXR0YW4nXSA9IE1hbmhhdHRhbjtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmsuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcclxuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcclxuXHJcbmNvbnN0IERFRkFVTFRTID0ge1xyXG5cdHN0b3BQcm9wYWdhdGlvbjogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XHJcblx0LyoqXHJcblx0ICogQ29uc3RydWN0b3JcclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXHJcblx0ICogQHBhcmFtIHpvb21TY2FsZVxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHR0aGlzLnJvb3QgPSByb290O1xyXG5cdFx0dGhpcy5yb290TlMgPSByb290LmdldEF0dHJpYnV0ZSgnbnMnKSB8fCAncm9vdCc7XHJcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcclxuXHRcdF8uYXNzaWduKHRoaXMsIERFRkFVTFRTLCBjb25maWcpO1xyXG5cdFx0dGhpcy5zY2FsZSA9IDEuMDtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XHJcblx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmhhbmRsZXIgPSBfLmJpbmQodGhpcy5oYW5kbGVFdmVudCwgdGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBTaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzXHJcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN0YXJ0IGxpc3RlbmluZyBmb3IgZXZlbnRzLlxyXG5cdCAqL1xyXG5cdHN0YXJ0KCkge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0RXZlbnRzLm9uKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xyXG5cdFx0dGhpcy5zdGFydEtleXMoKTtcclxuXHRcdHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzLlxyXG5cdCAqL1xyXG5cdHN0b3AoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcclxuXHRcdHRoaXMuc3RvcEtleXMoKTtcclxuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0c3RhcnRLZXlzKCkge1xyXG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHRzdG9wS2V5cygpIHtcclxuXHRcdEV2ZW50cy5vZmYoZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcclxuXHR9XHJcblxyXG5cdGdldEV2ZW50SW5mbyhldmVudCkge1xyXG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcclxuXHRcdHdoaWxlICghaXNSb290ICYmIHRhcmdldCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQpIHtcclxuXHRcdFx0bnMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCducycpO1xyXG5cdFx0XHRpZiAobnMpIHtcclxuXHRcdFx0XHRpc1Jvb3QgPSBfLnN0YXJ0c1dpdGgobnMsIFwicm9vdC5cIik7XHJcblx0XHRcdFx0aWYgKGlzUm9vdCkge1xyXG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XHJcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcclxuXHRcdFx0XHRzdGFjay5zcGxpY2UoMCwgMCwgdGFyZ2V0KTtcclxuXHRcdFx0XHRidWYucHJlcGVuZChucyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XHJcblx0XHR9XHJcblx0XHRpZiAoIWlzUm9vdClcclxuXHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGV2ZW50Lm5zVGFyZ2V0O1xyXG5cclxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cclxuXHRcdGV2ZW50LnRhcmdldFN0YWNrID0gc3RhY2s7XHJcblx0XHRucyA9IGJ1Zi50b1N0cmluZygnLicpO1xyXG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xyXG5cdFx0cmV0dXJuIHtkYXRhOiBldmVudC5yb290VGFyZ2V0LCBuczogbnN9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVGhlIG1haW4gZXZlbnQgaGFuZGxlciBtZXRob2QsIGl0IHByb2Nlc3NlcyBldmVudCBhbmQgZ2VuZXJhdGUgcmVsZXZhbnQgZXZlbnRzIHRvIGRpc3BhdGNoLlxyXG5cdCAqL1xyXG5cdGhhbmRsZUV2ZW50KGV2ZW50KSB7XHJcblx0XHRsZXQgdHlwZSA9IGV2ZW50LnR5cGU7XHJcblxyXG5cdFx0Ly8gRG8gbm90IGRpc3BhdGNoIG90aGVyIGV2ZW50cyBpZiB3ZSBhcmUgZHJhZ2dpbmcuXHJcblx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHJldHVybjtcclxuXHJcblx0XHRsZXQgZGF0YSwgbnMsIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpLCBpbmZvLCBpc0tleUV2ZW50ID0gKHR5cGUgPT0gJ2tleWRvd24nIHx8IHR5cGUgPT0na2V5dXAnKTtcclxuXHRcdGlmIChpc0tleUV2ZW50KSB7XHJcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XHJcblx0XHRcdG5zID0gS2V5VXRpbHMuZ2V0S2V5RXZlbnQoZXZlbnQpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcclxuXHRcdFx0aWYgKCFpbmZvKSByZXR1cm47XHJcblx0XHRcdGRhdGEgPSBpbmZvLmRhdGE7XHJcblx0XHRcdG5zID0gaW5mby5ucztcclxuXHRcdH1cclxuXHJcblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcclxuXHJcblx0XHRpZiAodHlwZSA9PSAnbW91c2V3aGVlbCcpIHtcclxuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xyXG5cdFx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XHJcblx0XHRcdGV2ZW50LnNjYWxlID0gdGhpcy5zY2FsZTtcclxuXHRcdFx0dHlwZSA9ICd6b29tJztcclxuXHRcdH1cclxuXHJcblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xyXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uID09IDAgLypvbmx5IGRyYWcgb24gbGVmdCBjbGljayovKSB7XHJcblx0XHRcdC8vIENyZWF0ZSBkcmFnIG9iamVjdC5cclxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XHJcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciBtb3VzZSBtb3ZlLlxyXG5cdFx0XHRsZXQgZHJhZ1BvcztcclxuXHJcblx0XHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XHJcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWdnaW5nKSB7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgbW91c2UgaGFzIG1vdmVkLiBJRSBhbHdheXMgZmlyZSBtb3VzZW1vdmUgYWZ0ZXIgbW91c2Vkb3duIGV2ZW4gaWYgdGhlIG1vdXNlIGhhc24ndCBtb3ZlZCB5ZXQuXHJcblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XHJcblxyXG5cdFx0XHRcdFx0Ly8gc3RhcnQgZHJhZ2dpbmdcclxuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xyXG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGRyYWdPYmplY3QuZGF0YTtcclxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnc3RhcnQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnT2JqZWN0LnBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcclxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IGN1cnJlbnRQb3M7XHJcblx0XHRcdFx0dGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xyXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XHJcblx0XHRcdH07XHJcblx0XHRcdGNvbnN0IG1vdXNldXAgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXHJcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcclxuXHJcblx0XHRcdFx0bGV0IGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XHJcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcclxuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnZW5kJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZXVwJywgbnMsIGluZm8uZGF0YSwgZHJhZ1Bvcyk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XHJcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XHJcblx0XHRcdH07XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaXNLZXlFdmVudClcclxuXHRcdFx0dGhpcy5zaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xyXG5cdFx0dGhpcy5kaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XHJcblxyXG5cdFx0Ly8gZGlzYWJsZSB0aGUgZGVmYXVsdCBjb250ZXh0IG1lbnVcclxuXHRcdC8vaWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51JylcclxuXHRcdC8vXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXHJcblx0ICovXHJcblx0c2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XHJcblx0XHRsZXQgbGFzdCwgc3RhY2s7XHJcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xyXG5cdFx0XHRrID0gayB8fCAwO1xyXG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxyXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xyXG5cdFx0XHRcdGxhc3QgPSB0aGlzLmVudGVyU3RhY2sucG9wKCk7XHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XHJcblx0XHRcdH1cclxuXHRcdH07XHJcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcclxuXHRcdFx0XHR2YXIgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XHJcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXHJcblx0XHRcdFx0XHR2YWwgPSB2YWwuc3Vic3RyaW5nKDUpO1xyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCcuJyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmIChucyAmJiBucyAhPSB0aGlzLnJvb3ROUykge1xyXG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xyXG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XHJcblx0XHRcdFx0bGV0IGl0ZW07XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLmVudGVyU3RhY2tbaV0udGFyZ2V0ICE9IHN0YWNrW2ldKSB7XHJcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcclxuXHRcdFx0XHRcdHRoaXMuZW50ZXJTdGFjay5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aClcclxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXHJcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xyXG5cdH1cclxuXHJcblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcclxuXHRcdC8vaWYgKHR5cGUgIT0gJ21vdXNlb3ZlcicgJiYgdHlwZSAhPSAnbW91c2VvdXQnKVxyXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcclxuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XHJcblx0XHRjb25zdCBuc1R5cGUgPSBucyA/IHR5cGUgKyAnLicgKyBucyA6IHR5cGU7XHJcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xyXG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwga2V5KSkge1xyXG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXHJcblx0XHRpZiAodGhpcy5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XHJcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XHJcblx0XHRpZighIF8uaXNOYU4ocG9zWzBdKSAmJiAhIF8uaXNOYU4ocG9zWzFdKSlcclxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYSBrZXkgZXZlbnQgaGFuZGxlclxyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XHJcblx0ICovXHJcblx0cmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xyXG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XHJcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XHJcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xyXG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xyXG5cclxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XHJcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldIHx8ICh0aGlzLmxpc3RlbmVyc1trZXldID0gW10pO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xyXG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XHJcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XHJcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcclxuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XHJcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XHJcblxyXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyO1xyXG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xyXG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlclxyXG5cdCAqL1xyXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkodHlwZSkpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgekluZGV4OiB6SW5kZXh9O1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0sIGxpc3RlbmVyO1xyXG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xyXG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRkZWxldGUgdGhpcy5yb290O1xyXG5cdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzO1xyXG5cdFx0ZGVsZXRlIHRoaXMuZW50ZXJTdGFjaztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBtYXRjaChuc1R5cGUsIHJlZ2lzdGVyZWRUeXBlKSB7XHJcblx0XHRjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xyXG5cdFx0aWYgKGFyci5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcclxuXHJcblx0XHRsZXQgc3Vic3RyLCBpbmRleCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcclxuXHRcdFx0c3Vic3RyID0gbnNUeXBlLnNsaWNlKGluZGV4KTtcclxuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xyXG5cdFx0XHRpZiAoaW5kZXggPCAwKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xyXG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xyXG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xyXG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcclxuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcclxuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XHJcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XHJcblx0XHR9XHJcblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcblxyXG4vKipcclxuICogS0VZIGNvbnN0YW50XHJcbiAqL1xyXG5jb25zdCBLRVkgPSB7XHJcblx0QUxUICAgICAgICAgIDogMTgsXHJcblx0QkFDS19TUEFDRSAgIDogOCxcclxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcclxuXHRDT05UUk9MICAgICAgOiAxNyxcclxuXHRERUxFVEUgICAgICAgOiA0NixcclxuXHRET1dOICAgICAgICAgOiA0MCxcclxuXHRFTkQgICAgICAgICAgOiAzNSxcclxuXHRFTlRFUiAgICAgICAgOiAxMyxcclxuXHRFU0NBUEUgICAgICAgOiAyMjAsXHJcblx0SE9NRSAgICAgICAgIDogMzYsXHJcblx0TEVGVCAgICAgICAgIDogMzcsXHJcblx0TUVUQSAgICAgICAgIDogMjI0LFxyXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcclxuXHRQQUdFX0RPV04gICAgOiAzNCxcclxuXHRQQUdFX1VQICAgICAgOiAzMyxcclxuXHRQQVVTRSAgICAgICAgOiAxOSxcclxuXHRQUklOVFNDUkVFTiAgOiA0NCxcclxuXHRSSUdIVCAgICAgICAgOiAzOSxcclxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXHJcblx0U0hJRlQgICAgICAgIDogMTYsXHJcblx0U1BBQ0UgICAgICAgIDogMzIsXHJcblx0VEFCICAgICAgICAgIDogOSxcclxuXHRVUCAgICAgICAgICAgOiAzOFxyXG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxyXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcclxuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcblxyXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXHJcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcclxuXHRcdGtleSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcclxuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cclxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XHJcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcclxuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcclxuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XHJcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xyXG5cclxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcclxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xyXG5cclxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnbm9kZScsXHJcblx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdHNlbGVjdGFibGU6IHRydWUsXHJcblx0ZWRpdGFibGU6IHRydWUsXHJcblx0cmVzaXphYmxlOiBmYWxzZSxcclxuXHRzb3VyY2VhYmxlOiB0cnVlLFxyXG5cdHRhcmdldGFibGU6IHRydWUsXHJcblx0dmlzaWJsZTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnZWRnZScsXHJcblx0c2VsZWN0YWJsZTogdHJ1ZSxcclxuXHR2aXNpYmxlOiB0cnVlLFxyXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxyXG5cdGVuZE1hcmtlcjoge1xyXG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXHJcblx0XHR0eXBlOiAnYXJyb3cnLFxyXG5cdFx0c2l6ZTogMTAsXHJcblx0XHRjb2xvcjogJyMwZWExMTcnXHJcblx0fSxcclxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xyXG5cdHN0YXJ0OiBbMCwgMF0sXHJcblx0ZW5kOiBbNDAwLCAyMDBdXHJcbn07XHJcblxyXG5jbGFzcyBHcmFwaCB7XHJcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xyXG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XHJcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcclxuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxyXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XHJcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xyXG5cdFx0Zm9yIChsZXQgdHlwZSBvZiBlZGdlVHlwZXMuZW50cmllcygpKSB7XHJcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGVbMV0ucHJvdG90eXBlLnN0YXJ0TWFya2VyO1xyXG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XHJcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xyXG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuZW5kTWFya2VyO1xyXG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XHJcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XHJcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHRcdHRoaXMucm9vdCA9IG51bGw7XHJcblx0XHRpZiAobW9kZWwpXHJcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XHJcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XHJcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XHJcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cclxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcclxuXHRcdFx0aWYgKHR5cGUpXHJcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXHJcblx0ICovXHJcblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xyXG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcclxuXHRcdGxldCBub2RlID0gbmV3IE5vZGVDbGFzcyh0aGlzLCBjb25maWcpO1xyXG5cclxuXHRcdGlmIChwYXJlbnQpXHJcblx0XHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgbm9kZSwgcG9zKTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xyXG5cdFx0XHR0aGlzLnJvb3QucHJvcCgncm9sZScsICdyb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ub2Rlc1tub2RlLmlkXSA9IG5vZGU7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xyXG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcclxuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcclxuXHJcblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xyXG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XHJcblx0XHRyZXR1cm4gZWRnZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XHJcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cclxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXHJcblx0XHRcdFx0Y2hpbGQucGFyZW50LmNoaWxkcmVuID0gXy53aXRob3V0KGNoaWxkLnBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xyXG5cdH1cclxuXHJcblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XHJcblx0XHR2YXIgbm9kZXMgPSBtb2RlbC5ub2RlcztcclxuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLmVkZ2VzO1xyXG5cclxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xyXG5cdFx0aWYgKG5vZGVzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChlZGdlcykge1xyXG5cdFx0XHRfLmZvckVhY2goZWRnZXMsIChlZGdlKSA9PiB7XHJcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xyXG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXHJcblx0XHRcdFx0XHRmcm9tID0gdGhpcy5ub2Rlc1tlZGdlLmZyb21dO1xyXG5cdFx0XHRcdGlmIChlZGdlLnRvKVxyXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xyXG5cdFx0XHRcdHRoaXMuYWRkRWRnZShlZGdlLCBub2RlLCBmcm9tLCB0byk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGN1cnJlbnRSb290KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge31cclxuXHRkZXN0cm95KCkge31cclxufVxyXG5cclxuR3JhcGguREVGQVVMVFMgPSB7XHJcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxyXG5cdG11bHRpQ29ubmVjdDogZmFsc2UsXHJcblx0cmVhZE9ubHk6IGZhbHNlLFxyXG5cdHZpZXdPbmx5OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XHJcblxyXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnTicpO1xyXG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5pbkVkZ2VzID0gW107XHJcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XHJcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGlzQW5jZXN0b3Iobikge1xyXG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XHJcblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xyXG5cdFx0d2hpbGUgKG5vZGUpIHtcclxuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcclxuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xyXG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2VcclxuXHRhZGRJbkVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxyXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQgfHwgcG9zID4gZWRnZS5sZW5ndGggLSAxKVxyXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3V0RWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDaGlsZHJlbih2aWV3KSB7XHJcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xyXG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRfLmZvckVhY2godGhpcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xyXG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xyXG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xyXG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxyXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xyXG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xyXG5cdH1cclxufVxyXG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcblxyXG4vKlxyXG5cclxuLyoqXHJcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXHJcbiAqXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMucGFyZW50O1xyXG59O1xyXG5cclxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcclxuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcclxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xyXG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xyXG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcclxuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXHJcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcclxuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXHJcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XHJcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxyXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcclxuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcclxuXHRcdGlmICghdHlwZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XHJcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcclxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XHJcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogQHBhcmFtIG5hbWVcclxuXHQgKiBAcGFyYW0gdmFsdWVcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XHJcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcclxuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcclxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XHJcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XHJcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxyXG5cdCAqL1xyXG5cdGdldFZpZXcoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XHJcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xyXG5cdFx0XHRpZDogdGhpcy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcclxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZVxyXG5cdFx0fSwgc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2hhcGUoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XHJcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcclxuXHJcblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XHJcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XHJcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XHJcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcclxuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XHJcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcclxuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xyXG5cdFx0cmV0dXJuIHNoYXBlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHZpZXcpIHtcclxuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xyXG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xyXG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcclxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcclxuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xyXG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXHJcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xyXG5cdFx0aWYgKHNoYXBlKVxyXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTGFiZWwodmlldykge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcclxuXHRcdGlmIChib3gpXHJcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRMYWJlbEJveChrZXkpIHtcclxuXHRcdGxldCBib3ggPSBDYWNoZS5nZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBrZXkpO1xyXG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcclxuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcclxuXHRcdC8vIEp1c3QgZ2V0IHRoZSBjb25maWcgd2lsbCBoYXZlIGEgcG9zaXRpdmUgcGVyZm9ybWFuY2UgYm9vc3QgZm9yIElFMTEgYW5kIElFMTAuXHJcblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XHJcblx0XHRyZXR1cm4gYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbXB1dGVkQ2xhc3NOYW1lKCkge1xyXG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xyXG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcclxuXHRcdFx0bGV0IHByb3BzID0gdGhpcy5wcm9wcztcclxuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xyXG5cdFx0XHRwcm9wcyA9IHByb3BzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuXHRcdFx0d2hpbGUgKHByb3BzKSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XHJcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lID0gYnVmLnRvU3RyaW5nKCcgJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgbmFtZXNwYWNlKCkge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdCkgcmV0dXJuICcnO1xyXG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XHJcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xyXG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XHJcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XHJcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cclxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcclxuXHRkZWxldGUgdGhpcy5ib3VuZHM7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XHJcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xyXG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XHJcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xyXG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcclxuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XHJcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcclxuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xyXG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XHJcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcclxuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcclxuXHJcblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3NcclxuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XHJcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XHJcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XHJcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzKTtcclxuXHR9XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XHJcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcclxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XHJcblxyXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxyXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XHJcblxyXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxyXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXHJcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXHJcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xyXG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xyXG5cdGlmIChtb2RpZmllcnMpXHJcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9DZWxsLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cclxuICovXHJcblxyXG5sZXQgY2FjaGVzID0ge307XHJcblxyXG5sZXQgQ2FjaGUgPSB7XHJcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XHJcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XHJcblx0fSxcclxuXHJcblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcclxuXHRcdGlmICghbmFtZXNwYWNlKVxyXG5cdFx0XHRjYWNoZXMgPSB7fTtcclxuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxyXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xyXG5cdH0sXHJcblxyXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcclxuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXHJcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XHJcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuXHJcbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XHJcblxyXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcclxuXHRmb250U2l6ZTogMTEsXHJcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG5cdGZvbnRTdHlsZTogMCxcclxuXHRwYWRkaW5nOiAwLFxyXG5cdGxpbmVQYWRkaW5nOiAwLFxyXG5cdGFsaWduOiBcImxlZnRcIixcclxuXHR3aWR0aDogMCxcclxuXHRoZWlnaHQ6IDAsXHJcblx0cm90YXRpb246IG51bGwsXHJcblx0Z2VvbWV0cnk6IHt4OiAwLCB5OiAwLCBhbmNob3JZOiAwLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcclxuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxyXG5cdCAqL1xyXG5cdGxldCBnZXRTdHJpbmdTaXplID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcclxuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XHJcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcclxuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xyXG5cclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXHJcblx0XHRpZiAoIXN0cmluZ01lYXN1cmVFbCkge1xyXG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XHJcblx0XHRcdHZhciBkb2MgPSBzdHJpbmdNZWFzdXJlRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuXHRcdFx0ZG9jLm9wZW4oKTtcclxuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJiYXNlbGluZURpdlwiIHN0eWxlPVwiaGVpZ2h0OjEwMHB4O1wiPjxzcGFuIHN0eWxlPVwibGluZS1oZWlnaHQ6MFwiPlQ8L3NwYW4+PHNwYW4gc3R5bGU9XCJoZWlnaHQ6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L3NwYW4+PC9kaXY+XFxcclxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcclxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xyXG5cdFx0XHRkb2MuY2xvc2UoKTtcclxuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XHJcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XHJcblx0XHR9XHJcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcclxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xyXG5cdFx0YmFzZWxpbmVEaXYuc3R5bGUuZm9udFdlaWdodCA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFdlaWdodCA9IGJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJztcclxuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xyXG5cclxuXHRcdGxldCBzdHJ1dCA9IGJhc2VsaW5lRGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XHJcblxyXG5cdFx0cmV0dXJuIHt3aWR0aDogbWVhc3VyZURpdi5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBtZWFzdXJlRGl2Lm9mZnNldEhlaWdodCwgYmFzZWxpbmU6IGJhc2VsaW5lSGVpZ2h0fTtcclxuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxyXG5cdCAqIEBwYXJhbSB7bWF4V2lkdGh9IHRoZSBtYXhpbXVtIHdpZHRoIHRoaXMgc3RyaW5nIGNhbiB0YWtlLlxyXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XHJcblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxyXG5cdCAqIEBwYXJhbSB7Ym9sZH1cclxuXHQgKi9cclxuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xyXG5cdFx0bWF4V2lkdGggPSBtYXhXaWR0aCB8fCAwO1xyXG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcclxuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xyXG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XHJcblxyXG5cdFx0bGV0IGFyciA9IFtdO1xyXG5cdFx0bGV0IHNwYWNlU2l6ZSA9IGdldFN0cmluZ1NpemUoXCImbmJzcDtcIiwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLCBzcGFjZSA9IHNwYWNlU2l6ZS53aWR0aDtcclxuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcclxuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcclxuXHJcblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcclxuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcclxuXHRcdFx0YXJyLndpZHRoID0gKCFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpID8gc3BhY2UgOiBnZXRTdHJpbmdTaXplKHN0cmluZywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xyXG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XHJcblx0XHRcdHJldHVybiBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHdpZHRoID0gMDtcclxuXHRcdC8vc3BsaXQgdGhlIHRleHQgYnkgbGluZXNcclxuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XHJcblxyXG5cdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdC8vc3BsaXQgZWFjaCBsaW5lIGJ5IHdvcmRcclxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xyXG5cdFx0XHR2YXIgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcclxuXHRcdFx0XHR3b3JkV2lkdGggPSBnZXRTdHJpbmdTaXplKHdvcmQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcclxuXHJcblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdGlmIChuZXdMaW5lKSB7XHJcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XHJcblx0XHRcdFx0XHRcdGlmIChpIDwgd29yZHMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpO1xyXG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxpbmUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcclxuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcclxuXHRcdFx0XHRcdFx0aS0tOyAvLyBtb3ZlIGJhY2sgb25lIHdvcmQuXHJcblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGluZSA9IG5ld0xpbmUgPyB3b3JkIDogbGluZSArIFwiIFwiICsgd29yZDtcclxuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcclxuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XHJcblx0XHRcdFx0XHRuZXdMaW5lID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsaW5lICE9IFwiXCIpXHJcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcclxuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0YXJyLndpZHRoID0gd2lkdGg7XHJcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9LCBmdW5jdGlvbihzdHIsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgbWF4V2lkdGggKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcclxuXHJcblx0LyoqXHJcblx0ICogIEdldCB0aGUgdmlldyBpbmZvcm1hdGlvbiBmb3IgaG93IHRvIGRpc3BsYXkgdGhlIGxhYmVsLlxyXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXHJcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cclxuXHQgKiBAcGFyYW0gY29udGFpbmVySGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIuXHJcblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG5cdCAqIHtcclxuXHQgKiAgICAgIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250U3R5bGUsIHBhZGRpbmcsXHJcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXHJcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXHJcblx0ICogICAgICBoZWlnaHQsXHJcblx0ICogICAgICBnZW9tZXRyeVxyXG5cdCAqIH1cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcclxuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKSB7XHJcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xyXG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XHJcblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcclxuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcclxuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XHJcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcclxuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcclxuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xyXG5cdFx0bGV0IGFsaWduID0gbGFiZWxDb25maWcuYWxpZ247XHJcblxyXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcclxuXHRcdGlmIChjb250ZXh0LndpZHRoKSB7XHJcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XHJcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xyXG5cdFx0fVxyXG5cdFx0dyAtPSAyICogcGFkZGluZztcclxuXHRcdGggLT0gMiAqIHBhZGRpbmc7XHJcblx0XHR3ID0gTWF0aC5tYXgoMCwgdyk7XHJcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gXy5jbG9uZShsYWJlbENvbmZpZy5nZW9tZXRyeSk7XHJcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XHJcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xyXG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gd3JhcHBlZExhYmVsLmhlaWdodCArIDIgKiBwYWRkaW5nICsgKHdyYXBwZWRMYWJlbC5sZW5ndGggLSAxKSAqIGxpbmVQYWRkaW5nO1xyXG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XHJcblx0XHRzd2l0Y2ggKGFsaWduKSB7XHJcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcclxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xyXG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XHJcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcclxuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xyXG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImxlZnRcIjpcclxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBwb3M7XHJcblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxyXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcclxuXHJcblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XHJcblx0XHQvLyB0aGUgcGl2b3QgaXMgdGhlIGNlbnRlciBvZiByb3RhdGlvbiB3aGVuIHRoZSBsYWJlbCBoYXMgYSByb3RhdGlvbiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xyXG5cclxuXHRcdC8vIHRoZSBtYXhpbXVtIGJvdW5kcyBmb3IgdGhlIGxhYmVsLCB1c2VkIHRvIHBvc2l0aW9uIGlubGluZSBlZGl0b3JcclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XHJcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XHJcblxyXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcclxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XHJcblxyXG5cdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcclxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgLSB3cmFwcGVkTGFiZWwuYmFzZWxpbmUsIGFuY2hvciwgbGluZUhlaWdodDogd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgKyBsaW5lUGFkZGluZyxcclxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVuZGVyKHZpZXcsIGJveCkge1xyXG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcclxuXHR9XHJcblxyXG5cdGxldCBlZGl0b3IgPSB7XHJcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcclxuXHJcblx0XHRzdGFydDogZnVuY3Rpb24oa2V5LCBjb250YWluZXIsIGJveCwgcmVmRWwsIHRleHRFbCwgc2NhbGUgPSAxLjApIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSB7XHJcblx0XHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xyXG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnZpc2libGUoKSAmJiB0aGlzLmtleSAhPSBrZXkpIHtcclxuXHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3RcclxuXHRcdFx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0aGlzLmtleSA9IGtleTtcclxuXHRcdFx0dGhpcy5ib3ggPSBib3g7XHJcblx0XHRcdHRoaXMucmVmRWwgPSByZWZFbDtcclxuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XHJcblxyXG5cdFx0XHRsZXQgbGFiZWxDb25maWcgPSBib3guY29uZmlnO1xyXG5cdFx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShib3gubWF4Qm91bmRzLngsIGJveC5tYXhCb3VuZHMueSwgYm94Lm1heEJvdW5kcy53aWR0aCAqIHNjYWxlLCBib3gubWF4Qm91bmRzLmhlaWdodCAqIHNjYWxlKTtcclxuXHRcdFx0bGV0IHBvcyA9IERvbVV0aWxzLmdldENlbnRlclBvc2l0aW9uKHJlZkVsLCBjb250YWluZXIpO1xyXG5cdFx0XHRwb3MgPSBbcG9zWzBdICsgbWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIG1heEJvdW5kcy50b3BdO1xyXG5cclxuXHRcdFx0aWYgKHRleHRFbClcclxuXHRcdFx0XHR0ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XHJcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxyXG5cdFx0XHRcdGxlZnQ6IHBvc1swXSArIFwicHhcIixcclxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcclxuXHRcdFx0XHR3aWR0aDogbWF4Qm91bmRzLndpZHRoICsgJ3B4JyxcclxuXHRcdFx0XHRoZWlnaHQ6IG1heEJvdW5kcy5oZWlnaHQgKyAncHgnLFxyXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIjogbGFiZWxDb25maWcuZm9udEZhbWlseSxcclxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiAobGFiZWxDb25maWcuZm9udFNpemUgKiBzY2FsZSkgKyAncHgnLFxyXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcclxuXHRcdFx0XHQvKlwiY29sb3JcIjogbGFiZWxDb25maWcuZm9udENvbG9yKi9cclxuXHRcdFx0fSk7XHJcblxyXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gYm94Ll9sYWJlbDtcclxuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xyXG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xyXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0YXJ0JywgW3RoaXMua2V5XSk7XHJcblx0XHR9LFxyXG5cclxuXHRcdHN0b3A6IGZ1bmN0aW9uKGNhbmNlbCkge1xyXG5cdFx0XHRpZiAoIXRoaXMudmlzaWJsZSgpKSByZXR1cm47XHJcblxyXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XHJcblx0XHRcdGlmICh0aGlzLnRleHRFbClcclxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcclxuXHJcblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cdFx0XHRpZiAoIWNhbmNlbClcclxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xyXG5cclxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xyXG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcclxuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRGT05UX0JPTEQsXHJcblx0XHRGT05UX0lUQUxJQyxcclxuXHRcdEZPTlRfVU5ERVJMSU5FLFxyXG5cdFx0Rk9OVF9TSEFET1csXHJcblx0XHRnZXRTdHJpbmdTaXplLFxyXG5cdFx0d3JhcCxcclxuXHRcdGdldExhYmVsQm94LFxyXG5cdFx0Z2V0TGFiZWxCb3hGb3JMaW5rLFxyXG5cdFx0cmVuZGVyLFxyXG5cdFx0ZWRpdG9yXHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xyXG5cclxuY2xhc3MgRWRnZSBleHRlbmRzIENlbGwge1xyXG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcclxuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XHJcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHRcdHRoaXMuc2V0U291cmNlKHNvdXJjZSwgY29uZmlnLnNvdXJjZVBvcyk7XHJcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xyXG5cdH1cclxuXHJcblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xyXG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcclxuXHR9XHJcblxyXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcclxuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAndGFyZ2V0Jyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcclxuXHQgKi9cclxuXHQgc2V0VGVybWluYWwobm9kZSwgcG9zLCBkaXIpIHtcclxuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xyXG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XHJcblx0XHRcdC8vIHNpbXBseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBlZGdlLlxyXG5cdFx0XHRpZiAobm9kZSlcclxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGVuZCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxyXG5cdFx0XHRcdGVuZC5yZW1vdmVFZGdlKHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobm9kZSkge1xyXG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBub2RlO1xyXG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExhYmVsQm94KGtleSkge1xyXG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKCdsYWJlbCcpO1xyXG5cdFx0aWYgKGxhYmVsKVxyXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXHJcblx0ICovXHJcblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xyXG5cdFx0bGV0IHB0cyA9IFtdO1xyXG5cdFx0aWYgKHRoaXMuc291cmNlKVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xyXG5cclxuXHRcdHJldHVybiBwdHM7XHJcblx0fVxyXG5cclxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcclxuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xyXG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xyXG5cclxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcclxuXHJcblx0XHRpZiAodGhpcy50YXJnZXQpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcclxuXHRcdHJldHVybiB0ZXJtaW5hbHM7XHJcblx0fVxyXG5cclxuXHRnZXRTaGFwZShrZXkpIHtcclxuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcclxuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xyXG5cclxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcclxuXHRcdHJldHVybiBzaGFwZTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHN1cGVyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xyXG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XHJcblx0fVxyXG59XHJcbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcclxuXHJcbi8qXHJcblxyXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcclxuXHR9IGVsc2VcclxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcblxyXG5sZXQgcmVnaXN0cnkgPSB7fTtcclxuXHJcbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cclxuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xyXG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XHJcblx0XHR2YXIgbWFya2VyID0ge1xyXG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcclxuXHRcdFx0c2l6ZTogc2l6ZSxcclxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0ge1xyXG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXHJcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcclxuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXHJcblx0XHRcdHNpemU6IHNpemUsXHJcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXHJcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxyXG5cdFx0fTtcclxuXHRcdG1hcmtlci5zaGFwZSA9IHtcclxuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxyXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgciA9IHNpemUgLyAyO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFswLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+JztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcclxuXHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxyXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3JcclxuXHRcdH07XHJcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXHJcblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XHJcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcclxuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XHJcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcclxuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xyXG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xyXG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxyXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5cclxuY2xhc3MgTGF5b3V0IHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcclxuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcclxuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxyXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcclxuXHRcdH1cclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XHJcblx0cmVzZXQoKSB7fVxyXG5cdGRlc3Ryb3koKSB7fVxyXG59XHJcbkxheW91dC5WRVJUSUNBTCA9IDA7XHJcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcclxuXHJcbkxheW91dC5ERUZBVUxUUyA9IHtcclxuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XHJcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xyXG5cdFx0dmFyIGl0ZW1zO1xyXG5cdFx0aWYgKCFyb290KVxyXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2RlcztcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcclxuXHRcdFx0aXRlbXMgPSByb290O1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xyXG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRub2RlID0gaXRlbXNbaV07XHJcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXHJcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xyXG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XHJcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xyXG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcclxuXHRcdFx0cDErKztcclxuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcclxuXHR9XHJcbn1cclxuXHJcbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XHJcblx0aGdhcDogMTAsXHJcblx0dmdhcDogMTBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XHJcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xyXG5cclxuY2xhc3MgUmVuZGVyZXIge1xyXG5cdGNvbnN0cnVjdG9yKGlkLCBjb250YWluZXIsIGNvbmZpZyA9IHt9LCBncmFwaCA9IG51bGwpIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiB0aGlzLmlkLCB0YWJpbmRleDogMCwgbnM6ICdncmFwaCd9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcclxuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJveCk7XHJcblx0XHRpZiAoY29uZmlnLmxheW91dCkge1xyXG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XHJcblx0XHRcdHRoaXMubGF5b3V0ID0gbmV3IGxheW91dENsYXNzKGNvbmZpZy5sYXlvdXQuY29uZmlnKTtcclxuXHRcdFx0ZGVsZXRlIGNvbmZpZy5sYXlvdXQ7XHJcblx0XHR9XHJcblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcclxuXHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFswLCAwXTtcclxuXHRcdHRoaXMuX3NjYWxlID0gMS4wO1xyXG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xyXG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcclxuXHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG51bGw7XHJcblx0XHR0aGlzLnNlbGVjdGlvbkJlaGF2aW9yID0gbnVsbDtcclxuXHRcdHRoaXMubm9kZUJlaGF2aW9yID0gbnVsbDtcclxuXHRcdHRoaXMuZWRnZUJlaGF2aW9yID0gbnVsbDtcclxuXHRcdHRoaXMuY29ubmVjdGlvbkJlaGF2aW9yID0gbnVsbDtcclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHJcblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhrZXkgKyAnPScgKyB2YWx1ZSk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGdldCBncmFwaCgpIHtcclxuXHRcdHJldHVybiB0aGlzLl9ncmFwaDtcclxuXHR9XHJcblxyXG5cdHNldCBncmFwaChncmFwaCkge1xyXG5cdFx0dGhpcy5fZ3JhcGggPSBncmFwaDtcclxuXHRcdGxldCByb290ID0gZ3JhcGguY3VycmVudFJvb3Q7XHJcblx0XHRpZiAocm9vdCkge1xyXG5cdFx0XHR0aGlzLl90cmFuc2xhdGUgPSBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcclxuXHRcdFx0dGhpcy5fc2NhbGUgPSByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHZpZXdwb3J0KHNjYWxlZCwgdmlld3BvcnQpIHtcclxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XHJcblx0XHRpZiAoIXZpZXdwb3J0KSB7XHJcblx0XHRcdHZhciB2cCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdGhpcy5ib3gub2Zmc2V0V2lkdGgsIHRoaXMuYm94Lm9mZnNldEhlaWdodCk7XHJcblx0XHRcdGlmIChzY2FsZWQpXHJcblx0XHRcdFx0cmV0dXJuIFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2cCk7XHJcblx0XHRcdHJldHVybiB2cDtcclxuXHRcdH1cclxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2aWV3cG9ydCk7XHJcblx0XHR2YXIgdyA9IHRoaXMuYm94Lm9mZnNldFdpZHRoO1xyXG5cdFx0dmFyIHNjYWxlID0gdyAvIHZpZXdwb3J0LndpZHRoO1xyXG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XHJcblx0fVxyXG5cclxuXHRnZXQgdHJhbnNsYXRlKCkgeyByZXR1cm4gdGhpcy5fdHJhbnNsYXRlOyB9XHJcblx0c2V0IHRyYW5zbGF0ZSh0KSB7IHRoaXMudHJhbnNmb3JtKHRbMF0sIHRbMV0pOyB9XHJcblx0Z2V0IHNjYWxlKCkgeyByZXR1cm4gdGhpcy5fc2NhbGU7IH1cclxuXHRzZXQgc2NhbGUoaykge1xyXG5cdFx0c3dpdGNoIChrKSB7XHJcblx0XHRcdGNhc2UgXCJpblwiOlxyXG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcIm91dFwiOlxyXG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlIC8gdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxyXG5cdFx0XHRcdGsgPSAxLjA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJmaXRcIjpcclxuXHRcdFx0XHR2YXIgZ3JpZFNpemUgPSB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSAqIDI7XHJcblxyXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcclxuXHRcdFx0XHR2YXIgdkJvdW5kcyA9IHRoaXMudmlld3BvcnQoKTtcclxuXHJcblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcclxuXHRcdFx0XHR2Qm91bmRzLmhlaWdodCAtPSBncmlkU2l6ZTtcclxuXHJcblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXHJcblx0XHRcdFx0ayA9IE1hdGgubWluKCh2Qm91bmRzLndpZHRoIC8gZ0JvdW5kcy53aWR0aCksICh2Qm91bmRzLmhlaWdodCAvZ0JvdW5kcy5oZWlnaHQpLCAxLjApO1xyXG5cclxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcclxuXHR9XHJcblxyXG5cdHRyYW5zZm9ybSh4ID0gbnVsbCwgeSA9IG51bGwsIHNjYWxlID0gbnVsbCkge1xyXG5cdFx0bGV0IGdyYXBoID0gdGhpcy5ncmFwaDtcclxuXHRcdGxldCByb290ID0gZ3JhcGggPyBncmFwaC5jdXJyZW50Um9vdCA6IG51bGw7XHJcblx0XHRpZiAoIV8uaXNOdWxsKHgpKSB7XHJcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZVswXSA9IHg7XHJcblx0XHRcdGlmIChyb290KVxyXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnLCB4KTtcclxuXHRcdH1cclxuXHRcdGlmICghXy5pc051bGwoeSkpIHtcclxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzFdID0geTtcclxuXHRcdFx0aWYgKHJvb3QpXHJcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScsIHkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfLmlzTnVsbChzY2FsZSkpIHtcclxuXHRcdFx0dGhpcy5fc2NhbGUgPSBzY2FsZTtcclxuXHRcdFx0aWYgKHJvb3QpXHJcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnLCBzY2FsZSk7XHJcblx0XHRcdC8vIHN5bmMgdGhlIHNjYWxlIGJldHdlZW4gdGhlIGRpc3BhdGNoZXIgYW5kIHRoZSBncmFwaFxyXG5cdFx0XHRsZXQgcyA9IHRoaXMuZGlzcGF0Y2hlci5zY2FsZTtcclxuXHRcdFx0aWYgKHMgIT0gc2NhbGUpXHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaGVyLnNjYWxlID0gc2NhbGU7XHJcblx0XHR9XHJcblx0XHR0aGlzLnJlZnJlc2goKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcigpIHtcclxuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiBmYWxzZTtcclxuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xyXG5cdFx0aWYgKHRoaXMubGF5b3V0KVxyXG5cdFx0XHR0aGlzLmxheW91dC5sYXlvdXQodGhpcy5fZ3JhcGguY3VycmVudFJvb3QsIHRoaXMudmlld3BvcnQoKSk7XHJcblxyXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cclxuXHRcdGlmICghdGhpcy5kaXNwYXRjaGVyKSB7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcclxuXHRcdFx0bGV0IGpzQ2xhc3M7XHJcblx0XHRcdGlmICh0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSkge1xyXG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XHJcblx0XHRcdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XHJcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlci5kcmFnZ2luZyAmJiAhbm9kZS5fZmlyc3RTZWxlY3Rpb24pIHtcclxuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcclxuXHRcdFx0XHRcdFx0XHRkZWxldGUgTGFiZWwuX2RlbGF5RWRpdDtcclxuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQsIHRoaXMuc2NhbGUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9LCAyNTApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSwgdGhpcyk7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlcihbJ21vdXNlZG93bi4qJywgJ3pvb20qJ10sIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xyXG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaXNwYXRjaGVyLnN0YXJ0KCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxhYmVsKGJveCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxpbmsoc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xyXG5cdH1cclxuXHJcblx0cmVmcmVzaCgpIHt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxyXG5cdCAqIEBwYXJhbSBrZXlcclxuXHQgKiBAcGFyYW0gY29uZmlnIGlmIHRoZSB0ZW1wbGF0ZSBpcyBhIGZ1bmN0aW9uLCB0aGlzIGNvbmZpZyB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgYXJndW1lbnQuXHJcblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxyXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xyXG5cdFx0dmFyIHQgPSB0aGlzLmNvbnN0cnVjdG9yLlRFTVBMQVRFU1trZXldO1xyXG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XHJcblx0XHRcdHQgPSB0KGNvbmZpZyk7XHJcblx0XHR9XHJcblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cclxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcclxuXHRcdFx0dmFyIHBhcnRzID0gdC5tYXRjaCgvKCN7W14jXSp9KS9nKTtcclxuXHRcdFx0dmFyIG9iaiA9IHt9O1xyXG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XHJcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XHJcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdDtcclxuXHR9XHJcblxyXG5cdHRvRGF0YVVSTChmb3JtYXQsIG9wdGlvbnMpIHt9XHJcblx0cmVzZXQoKSB7fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuX2dyYXBoO1xyXG5cdFx0ZGVsZXRlIHRoaXMubGF5b3V0O1xyXG5cdFx0aWYgKHRoaXMuZGlzcGF0Y2hlcikge1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5kaXNwYXRjaGVyO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gJyc7XHJcblx0fVxyXG59XHJcblJlbmRlcmVyLkRFRkFVTFRTID0ge1xyXG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXHJcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxyXG5cdHNpbmdsZVNlbGVjdDogdHJ1ZSxcclxuXHRkcmFnZ2FibGU6IHRydWUsXHJcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxyXG5cdGd1aWRlc0VuYWJsZWQ6IHRydWUsXHJcblx0Z3JpZFNpemU6IDMwLFxyXG5cdG1heFpvb206IDQuMCxcclxuXHRtaW5ab29tOiAwLjIsXHJcblx0em9vbUZhY3RvcjogMS4yLFxyXG5cdG1hc2tPcGFjaXR5OiAwLjUsXHJcblx0Z3JhcGhCZWhhdmlvcjogR3JhcGhCZWhhdmlvclxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvMjgvMjAxNi5cclxuICovXHJcbmltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xyXG5cclxuLyoqXHJcbiAqIEdyYXBoIGhhbmRsZXIgaGFuZGxlcyBQYW5uaW5nIGFuZCBab29tIGFuZCBydWJiZXIgYmFuZCBzZWxlY3Rpb25cclxuICovXHJcbmNsYXNzIEdyYXBoQmVoYXZpb3IgZXh0ZW5kcyBCZWhhdmlvciB7XHJcblx0Y29uc3RydWN0b3IocmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKHJlbmRlcmVyKTtcclxuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcclxuXHRcdGxldCBmID0gZnVuY3Rpb24odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XHJcblx0XHRcdC8vQ3Vyc29yLnVwZGF0ZUN1cnNvcih0eXBlLCBucywgZ3JhcGgsIGV2ZW50KTtcclxuXHRcdH07XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlRHJhZywgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCd6b29tLionLCB0aGlzLmhhbmRsZVpvb20sIHRoaXMpO1xyXG5cdFx0Ly9kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLmdyYXBoJywgJ21vdXNlZW50ZXIuZ3JhcGgnLCAnbW91c2VsZWF2ZS5ncmFwaCddLCBmKTtcclxuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShudWxsLCBudWxsLCBldmVudC5zY2FsZSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVEcmFnKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcclxuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xyXG5cdFx0XHRpZiAoIXBhbikgcmV0dXJuO1xyXG5cdFx0XHRsZXQgdCA9IHRoaXMucmVuZGVyZXIudHJhbnNsYXRlO1xyXG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0ocG9zWzBdICsgdGhpcy5vZmZzZXRbMF0sIHBvc1sxXSArIHRoaXMub2Zmc2V0WzFdKTtcclxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xyXG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMub2Zmc2V0O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGRlbGV0ZSB0aGlzLnJlbmRlcmVyO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5cclxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG5cclxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRsZXQgcm9vdCA9IHRoaXMuZ3JhcGguY3VycmVudFJvb3Q7XHJcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIj4nKTtcclxuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XHJcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoJzxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgnKS5hcHBlbmQodFswXSkuYXBwZW5kKCcsJykuYXBwZW5kKHRbMV0pLmFwcGVuZCgnKXNjYWxlKCcpLmFwcGVuZCh0aGlzLnNjYWxlKS5hcHBlbmQoJylcIj4nKTtcclxuXHRcdFx0YnVmLmFwcGVuZChyb290LnJlbmRlcih0aGlzKSk7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcclxuXHRcdFx0U1ZHUmVuZGVyZXIuc2V0Q29udGVudCh0aGlzLmJveCwgYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHR0aGlzLnN2ZyA9IHRoaXMuYm94LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyRGVmcygpIHtcclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcclxuXHRcdGJ1Zi5hcHBlbmQodGhpcy5nZXRUZW1wbGF0ZSgnR3JpZCcsIHRoaXMucHJvcChcImdyaWRTaXplXCIpKSk7XHJcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgubWFya2VycztcclxuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXHJcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XHJcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0aWYgKCF0aGlzLnN2ZykgcmV0dXJuO1xyXG5cdFx0bGV0IGcgPSB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdnJyk7XHJcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xyXG5cdFx0Zy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRbMF0gKyAnLCcgKyB0WzFdICsgJylzY2FsZSgnICsgdGhpcy5zY2FsZSArICcpJyk7XHJcblx0fVxyXG5cclxuXHR0b0RhdGFVUkwoZm9ybWF0LCBvcHRpb25zKSB7XHJcblx0XHRTVkdSZW5kZXJlci50b0RhdGFVUkwodGhpcy5zdmcsIGZvcm1hdCwgb3B0aW9ucyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xyXG5cdFx0Zm9yIChsZXQgbWFya2VyIG9mIG1hcmtlcnMpIHtcclxuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xyXG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xyXG5cdFx0XHRpZiAoIV8uaXNTdHJpbmcoc3RyMikpXHJcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XHJcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoc3RyMSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5URU1QTEFURVNbJ0xhYmVsJ10oYm94KTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXJTaGFwZShzaGFwZSkge1xyXG5cdFx0bGV0IHRlbXBsYXRlID0gdGhpcy5URU1QTEFURVNbc2hhcGUubmFtZV07XHJcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXHJcblx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XHJcblx0XHRyZXR1cm4gdGVtcGxhdGUoc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlckxpbmsoc2hhcGUpIHtcclxuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XHJcblx0XHRsZXQgY29udHJvbFB0cyA9IHNoYXBlLmNvbnRyb2xQdHM7XHJcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcclxuXHJcblx0XHRpZiAoIWNvbnRyb2xQdHMgJiYgc2hhcGUucm91bmQpIHtcclxuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cclxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xyXG5cdFx0XHRjb250cm9sUHRzID0gW107XHJcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcclxuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XHJcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxyXG5cdFx0XHRcdGNvbnRyb2xQdHNbMippXSA9IFtuZXh0LCBuZXh0XTtcclxuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxyXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcclxuXHRcdFx0XHRkMiA9IG5leHQuZGlzdGFuY2UocG9pbnRzW2krMV0pO1xyXG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcclxuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXHJcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocHJldikuc2NhbGUoY29ybmVyKS50cmFuc2xhdGUobmV4dCkpO1xyXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XHJcblx0XHRcdFx0cHJldiA9IG5leHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XHJcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcclxuXHRcdH1cclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cG9pbnQgPSBwb2ludHNbaV07XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcclxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb250cm9sUHRzW2ldLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XHJcblx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRsZXQgZCA9IGJ1Zi50b1N0cmluZygpO1xyXG5cdFx0YnVmLmNsZWFyKCk7XHJcblx0XHRpZiAoc2hhcGUuc2hvd0dhdWdlKVxyXG5cdFx0XHRidWYuYXBwZW5kKCc8cGF0aCBzdHlsZT1cInN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogOTsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1wiIGQ9XCInKVxyXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XHJcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBkPVwiJykuYXBwZW5kKGQpLmFwcGVuZCgnXCInKTtcclxuXHRcdGlmIChzaGFwZS5zdGFydE1hcmtlciB8fCBzaGFwZS5lbmRNYXJrZXIpIHtcclxuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XHJcblx0XHRcdGlmIChzaGFwZS5zdGFydE1hcmtlcilcclxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItc3RhcnQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuc3RhcnRNYXJrZXIpID8gc2hhcGUuc3RhcnRNYXJrZXIgOiBzaGFwZS5zdGFydE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xyXG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuZW5kTWFya2VyKSA/IHNoYXBlLmVuZE1hcmtlciA6IHNoYXBlLmVuZE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xyXG5cdFx0XHRidWYuYXBwZW5kKCdcIicpO1xyXG5cdFx0fVxyXG5cdFx0YnVmLmFwcGVuZCgnLz4nKTtcclxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB0b0RhdGFVUkwoc3ZnLCBmb3JtYXQsIG9wdGlvbnMpIHtcclxuXHRcdGlmICghY2FudmcpIHJldHVybiBudWxsO1xyXG5cdFx0dmFyIGJib3ggPSBzdmcuZ2V0QkJveCgpO1xyXG5cdFx0dmFyIGNhbnZhcyA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cdFx0Y2FudmcoY2FudmFzLCAnPHN2ZyBzdHlsZT1cIndpZHRoOiAnICsgYmJveC53aWR0aCArICdweDsgaGVpZ2h0OiAnICsgYmJveC5oZWlnaHQgKyAncHg7XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcgKyBiYm94LndpZHRoIC8gMiArICcsJyArIGJib3guaGVpZ2h0IC8gMiArICcpc2NhbGUoJyArIHRoaXMudHJhbnNmb3JtLnNjYWxlICArICcpXCI+JyArICQodGhpcy5nLm5vZGUoKSkucHJvcCgnaW5uZXJIVE1MJykgKyAnPC9nPjwvc3ZnPicpO1xyXG5cdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTChmb3JtYXQpO1xyXG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjYW52YXMpO1xyXG5cdFx0cmV0dXJuIGltYWdlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblx0XHRidWYuYXBwZW5kKCc8c3ZnPicpLmFwcGVuZChjb250ZW50KS5hcHBlbmQoJzwvc3ZnJyk7XHJcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHJcblx0XHR3aGlsZSAodGVtcC5maXJzdENoaWxkKVxyXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xyXG5cdFx0cmV0dXJuIGVsO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHNldENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcclxuXHRcdGlmIChEb21VdGlscy5pc0lFKSB7XHJcblx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxyXG5cdFx0XHRsZXQgY2hpbGQ7XHJcblx0XHRcdHdoaWxlIChjaGlsZCA9IGVsLmxhc3RDaGlsZClcclxuXHRcdFx0XHRlbC5yZW1vdmVDaGlsZChjaGlsZCk7XHJcblx0XHRcdFNWR1JlbmRlcmVyLmFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpO1xyXG5cdFx0fSBlbHNlXHJcblx0XHRcdGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fVxyXG59XHJcblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcclxuXHQkcm9vdDogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiN7Y2hpbGRyZW59PC9nPicsXHJcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxyXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXHJcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+JyxcclxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxyXG5cdFRyaWFuZ2xlOiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzJ9IDAsJHtoZWlnaHQvMn1cIi8+JyxcclxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxyXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0dmFyIHZlcnRpY2FsID0gY29uZmlnLmRpcmVjdGlvbiA9PSAnbm9ydGgnIHx8IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ3NvdXRoJztcclxuXHRcdGlmICh2ZXJ0aWNhbClcclxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xyXG5cdH0sXHJcblx0UG9seWdvbjogZnVuY3Rpb24oc2hhcGUpIHtcclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcclxuXHRcdGZvciAobGV0IHB0IG9mIHNoYXBlLnBvaW50cylcclxuXHRcdFx0YnVmLmFwcGVuZChwdFswXSkuYXBwZW5kKCcsJykuYXBwZW5kKHB0WzFdKS5hcHBlbmQoJyAnKTtcclxuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XHJcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fSxcclxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRyZXR1cm4gJzxpbWFnZSB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWY9XCInICsgY29uZmlnLmltYWdlICsgJ1wiLz4nO1xyXG5cdH0sXHJcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcclxuXHRcdHJldHVybiBgXHJcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxyXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXHJcbm1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiAke21hcmtlci5maWxsID8gYHN0eWxlPVwic3Ryb2tlOiAke21hcmtlci5maWxsfTtmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XHJcbmAudHJpbSgpO1xyXG5cdH0sXHJcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xyXG5cdFx0cmV0dXJuIGBcclxuPHBhdHRlcm4gaWQ9XCJHcmlkUGF0dGVyblwiIHdpZHRoPVwiJHtzaXplfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG48L3BhdHRlcm4+YC50cmltKCk7XHJcblx0fSxcclxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXHJcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxyXG4gICBpZiAoYm94KSB7JT5cclxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxyXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcclxuXHRcdHRleHQtYW5jaG9yPVwiPCU9Ym94LmFuY2hvciU+XCJcXFxyXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cclxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxyXG5cdFx0PHJlY3QgeD1cIjwlPS1ib3guYm91bmRzLndpZHRoLzIlPlwiIHk9XCI8JT0tYm94LmJvdW5kcy5oZWlnaHQvMiU+XCIgd2lkdGg9XCI8JT1ib3guYm91bmRzLndpZHRoJT5cIiBoZWlnaHQ9XCI8JT1ib3guYm91bmRzLmhlaWdodCU+XCIgc3R5bGU9XCI8JT1ib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSU+XCIvPlxyXG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxyXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxyXG5cdFx0XHQ8dGV4dCA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnRleHRTdHlsZSkgeyU+c3R5bGU9XCI8JT1ib3guY29uZmlnLnRleHRTdHlsZSU+XCI8JX0lPlxcXHJcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxyXG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxyXG5cdFx0XHQ8dGV4dD48JT1ib3gubGFiZWwlPjwvdGV4dD5cclxuXHRcdDwlfSU+XHJcblx0PC9nPlxyXG48JX0lPlxyXG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=