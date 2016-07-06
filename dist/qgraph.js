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
				var pos = Manhattan.routeInternal(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
				pos = Manhattan.processPositions(this.start, this.end, pos, this.startNormal.x != 0);
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
	
			/**
	   * Make a route based on the start, end and startNormal and endNormal
	   * None of the parameters can be null
	   * TODO: This method could use some improvement...
	   */
	
		}], [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkNzJjNjM2MDk0MjhhMGY0NDJmZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdkLHdCQUhjO0FBSWQsOEJBSmM7QUFLZCxzQ0FMYztBQU1kLHdCQU5jO0FBT2Qsc0JBUGM7QUFRZCx3QkFSYztBQVNkLGdDQVRjO0FBVWQsNEJBVmM7QUFXZCxzQkFYYztBQVlkLDRDQVpjO0FBYWQsd0JBYmM7QUFjZCwwQkFkYztBQWVkLHdCQWZjO0FBZ0JkLHNCQWhCYztBQWlCZCxzQkFqQmM7QUFrQmQsc0JBbEJjO0FBbUJkLDBCQW5CYztBQW9CZCxrQ0FwQmM7QUFxQmQsOEJBckJjO0FBc0JkLG9DQXRCYztBQXVCZDtBQXZCYyxFOzs7Ozs7QUMzQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7O0FBRXpCO0FBQ0EseUNBQXdDO0FBQ3hDLHNDQUFxQztBQUNyQyxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxRQUFPLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQTZCO0FBQzdCO0FBQ0EsOEJBQTZCO0FBQzdCLHFEQUFvRCxPQUFPO0FBQzNELHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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b0IsSUFMcEIsMERBTUcsSUFOSCxFQUFQO0FBT0EsR0F6Q3NCO0FBMEN2QixTQUFPLGlCQUFFLFFBQUYsQ0FBVyxnakNBa0JqQixJQWxCaUIsRUFBWCxFQWtCRSxFQUFDLFVBQVUsTUFBWCxFQWxCRjtBQTFDZ0IsRUFBeEI7O21CQStEZSxXIiwiZmlsZSI6InFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicWdyYXBoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNzJjNjM2MDk0MjhhMGY0NDJmZVxuICoqLyIsImltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vZ2VvbWV0cnkvTGluZVwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEVsbGlwc2UgZnJvbSBcIi4vZ2VvbWV0cnkvRWxsaXBzZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vZ3JhcGgvQ2VsbFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vZ3JhcGgvTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgRmxvd0xheW91dCBmcm9tIFwiLi9sYXlvdXQvRmxvd0xheW91dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi92aWV3L1JlbmRlcmVyXCI7XG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xuaW1wb3J0IEdyYXBoQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0Q2VsbCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXIsXG5cdEdyYXBoQmVoYXZpb3Jcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xuXHRcdHJldHVybiB0aGlzLm9mZnNldFBvc2l0aW9uKFt4LCB5XSwgZ2VvbWV0cnkpO1xuXHR9LFxuXG5cdG9mZnNldFBvc2l0aW9uOiBmdW5jdGlvbihwb3MsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtwb3NbMF0gKyBnZW9tZXRyeS53aWR0aCAqIGdlb21ldHJ5LmFuY2hvclggKyBnZW9tZXRyeS5vZmZzZXRYLCBwb3NbMV0gKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0ZVxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdLCBvLndpZHRoKnNjYWxlLCBvLmhlaWdodCpzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSpzY2FsZSt0WzBdLCBvWzFdKnNjYWxlK3RbMV1dO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0aW9uXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHNjYWxlOiBmdW5jdGlvbih0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoKG8ueC10WzBdKS9zY2FsZSwgKG8ueS10WzFdKS9zY2FsZSwgby53aWR0aC9zY2FsZSwgby5oZWlnaHQvc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueC10WzBdKS9zY2FsZSwgKG8ueS10WzFdKS9zY2FsZSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIFsob1swXS10WzBdKS9zY2FsZSwgKG9bMV0tdFsxXSkvc2NhbGVdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBtZXRob2QuXG5cdCAqL1xuXHRnZXRQcm9wZXJ0eTogZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG5cdFx0aWYgKCFvYmopXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZiAoXy5oYXMob2JqLCBwcm9wKSlcblx0XHRcdHJldHVybiBvYmpbcHJvcF07XG5cdFx0aWYgKG9iai5wcm9wICYmIF8uaXNGdW5jdGlvbihvYmoucHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqLnByb3AocHJvcCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1V0aWxzLmpzXG4gKiovIiwiY2xhc3MgUG9pbnQge1xuXHRjb25zdHJ1Y3Rvcih4LCB5KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYSBjbG9uZSBvZiB0aGlzIHBvaW50XG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwdCB0byB0aGUgb3RoZXIgcHQuXG5cdCAqIEBwYXJhbSBhUHRcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGRpc3RhbmNlKGFQdCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIGFQdC54KSAqICh0aGlzLnggLSBhUHQueCkgKyAodGhpcy55IC0gYVB0LnkpICogKHRoaXMueSAtIGFQdC55KSk7XG5cdH1cblxuXHQvKipcblx0ICogVHJhbnNsYXRlIHRoaXMgcG9pbnRcbiBcdCAqL1xuXHR0cmFuc2xhdGUocDIpIHtcblx0XHR0aGlzLnggKz0gcDIueDtcblx0XHR0aGlzLnkgKz0gcDIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTY2FsZSB0aGlzIHZlY3RvclxuIFx0ICovXG5cdHNjYWxlKHNjYWxlKSB7XG5cdFx0dGhpcy54ICo9IHNjYWxlO1xuXHRcdHRoaXMueSAqPSBzY2FsZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFNjYWxlZChzY2FsZSkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlKTtcblx0fVxuXG5cdGdldFRyYW5zbGF0ZWQocDIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAyLngsIHRoaXMueSArIHAyLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGlyZWN0aW9uIHZlY3RvciBmcm9tIHRoaXMgcG9pbnQgdG8gcDIuXG5cdCAqIEBwYXJhbSBwMlxuXHQgKiBAcmV0dXJucyB7UG9pbnR9XG5cdCAqL1xuXHRnZXREaXJlY3Rpb24ocDIpIHtcblx0XHR2YXIgZGlzdCA9IHRoaXMuZGlzdGFuY2UocDIpO1xuXHRcdHJldHVybiBuZXcgUG9pbnQoKHAyLnggLSB0aGlzLngpIC8gZGlzdCwgKHAyLnkgLSB0aGlzLnkpIC8gZGlzdCk7XG5cdH1cblxuXHQvKipcblx0ICogcm90YXRlIHRoZSBwb2ludCBhYm91dCB0aGUgb3JpZ2luLiBXaXRoIHRoZSBzcGVjaWZpZWQgYW5nbGUuXG5cdCAqIEBwYXJhbSBhbmdsZSB0aGUgYW5nbGUgdG8gcm90YXRlXG5cdCAqL1xuXHRyb3RhdGUoYW5nbGUpIHtcblx0XHR2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblx0XHR2YXIgc2luID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcblx0XHR0aGlzLnggPSB4ICogY29zIC0geSAqIHNpbjtcblx0XHR0aGlzLnkgPSB4ICogc2luICsgeSAqIGNvcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFJvdGF0ZWQoYW5nbGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jbG9uZSgpLnJvdGF0ZShhbmdsZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCwgdHJlYXRpbmcgdGhpcyBhbmQgcDIgYXMgdmVjdG9ycy5cblx0ICovXG5cdGRvdFByb2R1Y3QocDIpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogcDIueCArIHRoaXMueSAqIHAyLnk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBtaWQgcG9pbnQgYmV0d2VlbiB0aGlzIGFuZCBwMi5cbiBcdCAqL1xuXHRnZXRNaWRQb2ludChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQoKHRoaXMueCArIHAyLngpIC8gMiwgKHRoaXMueSArIHAyLnkpIC8gMik7XG5cdH1cblxuXHRyZXZlcnNlKCkge1xuXHRcdHRoaXMueCA9IC10aGlzLng7XG5cdFx0dGhpcy55ID0gLXRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhwMikge1xuXHRcdGlmICghcDIgfHwgcDIuY29uc3RydWN0b3IgIT0gUG9pbnQpIHJldHVybiBmYWxzZTtcblxuXHRcdHJldHVybiAodGhpcy54ID09IHAyLnggJiYgdGhpcy55ID09IHAyLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZmxlY3QgdGhpcyBwb2ludCB3LnIudC4gdGhlIHJlY3RhbmdsZS5cblx0ICogSWYgdmVydGljYWwgaXMgdHJ1ZSwgaXQgd2lsbCByZWZsZWN0IHRoZSBwb2ludCBjcm9zcyB0aGUgdmVydGljYWxcblx0ICogY2VudHJhbCBsaW5lIG9mIHRoZSByZWN0YW5nbGUsIG90aGVyd2lzZSByZWZsZWN0IGNyb3NzIHRoZSBob3Jpem9udGFsXG5cdCAqIGNlbnRyYWwgbGluZS5cblx0ICpcblx0ICogQHBhcmFtIHJlY3QgdGhlIHJlY3RhbmdsZVxuXHQgKiBAcGFyYW0gdmVydGljYWwgd2hldGhlciBpcyB2ZXJ0aWNhbCByZWZsZWN0aW9uIG9yIGhvcml6b250YWwgcmVmbGVjdGlvbi5cblx0ICovXG5cdHJlZmxlY3QocmVjdCwgdmVydGljYWwpIHtcblx0XHRpZiAodmVydGljYWwpXG5cdFx0XHR0aGlzLnggPSAyICogcmVjdC54IC0gdGhpcy54O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMueSA9IDIgKiByZWN0LnkgLSB0aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy54ICsgXCIsXCIgKyB0aGlzLnk7XG5cdH1cbn1cblxuUG9pbnQuVyA9IG5ldyBQb2ludCgtMSwgMCk7XG5Qb2ludC5OID0gbmV3IFBvaW50KDAsIC0xKTtcblBvaW50LlMgPSBuZXcgUG9pbnQoMCwgMSk7XG5Qb2ludC5FID0gbmV3IFBvaW50KDEsIDApO1xuUG9pbnQuTkUgPSBuZXcgUG9pbnQoMSwgLTEpO1xuUG9pbnQuTlcgPSBuZXcgUG9pbnQoLTEsIC0xKTtcblBvaW50LlNFID0gbmV3IFBvaW50KDEsIDEpO1xuUG9pbnQuU1cgPSBuZXcgUG9pbnQoLTEsIDEpO1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1BvaW50LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgYSBnaXZlbiBwb2ludCBvZiBhIGdpdmVuIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGNvbnRhaW5zKGVsKSB7XHJcblx0XHRsZXQgdyA9IGVsLndpZHRoIHx8IDA7XHJcblx0XHRsZXQgaCA9IGVsLmhlaWdodCB8fCAwO1xyXG5cdFx0bGV0IGxlZnQgPSBlbC54IC0gdy8yO1xyXG5cdFx0bGV0IHJpZ2h0ID0gZWwueCArIHcvMjtcclxuXHRcdGxldCB0b3AgPSBlbC55IC0gaC8yO1xyXG5cdFx0bGV0IGJvdHRvbSA9IGVsLnkgKyBoLzI7XHJcblx0XHRyZXR1cm4gKHJpZ2h0IDw9IHRoaXMucmlnaHQpICYmIChsZWZ0ID49IHRoaXMubGVmdCkgJiZcclxuXHRcdFx0KHRvcCA+PSB0aGlzLnRvcCkgJiYgKGJvdHRvbSA8PSB0aGlzLmJvdHRvbSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWFsdGUgdGhlIGRpc3RhbmNlIHRvIGEgcG9pbnQuIDAgaWYgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgdGhlIHBvaW50LlxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKHB0KSB7XHJcblx0XHRpZiAodGhpcy5jb250YWlucyhwdCkpIHJldHVybiAwO1xyXG5cclxuXHRcdGlmIChwdC54IDwgdGhpcy5sZWZ0KSB7XHJcblx0XHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKSk7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxlZnQgLSBwdC54O1xyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pKTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC54IDw9IHRoaXMucmlnaHQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9wIC0gcHQueTtcclxuXHRcdFx0cmV0dXJuIHB0LnkgLSB0aGlzLmJvdHRvbTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApKTtcclxuXHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRyZXR1cm4gcHQueCAtIHRoaXMucmlnaHQ7XHJcblx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHaXZlbiB0d28gcG9pbnRzLCB3ZSB3YW50IHRvIGRldGVjdCB3aGV0aGVyIHRoZSBsaW5lIGpvaW5pbmcgdGhlIHB0cyBpbnRlcnNlY3RcclxuXHQgKiB3aXRoIHRoZSByZWN0YW5nbGUgb3Igbm90LiBXZSBhc3N1bWUgb25seSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGxpbmUgc2VnbWVudHMuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIGludCB0aGUgc2lkZSBvZiB0aGUgaW50ZXJzZWN0aW9uOiAtMTogbm8gaW50ZXJzZWN0aW9uLCAwOiBsZWZ0LCAxOiB0b3AsIDI6IHJpZ2h0LCAzOiBib3R0b20sIDQ6IGNvbnRhaW5tZW50LlxyXG5cdCAqL1xyXG5cdGRldGVjdEludGVyc2VjdGlvbihwdDEsIHB0Mikge1xyXG5cdFx0bGV0IGhvcml6b250YWwgPSBwdDEueSA9PSBwdDIueTtcclxuXHRcdGxldCBjb250YWluczEgPSB0aGlzLmNvbnRhaW5zKHB0MSk7XHJcblx0XHRsZXQgY29udGFpbnMyID0gdGhpcy5jb250YWlucyhwdDIpO1xyXG5cdFx0aWYgKGNvbnRhaW5zMSAmJiBjb250YWluczIpIHJldHVybiA0O1xyXG5cdFx0aWYgKCFjb250YWluczEgJiYgIWNvbnRhaW5zMikge1xyXG5cdFx0XHRpZiAoaG9yaXpvbnRhbCAmJiAocHQxLnkgPj0gdGhpcy50b3AgJiYgcHQxLnkgPD0gdGhpcy5ib3R0b20pKSB7XHJcblx0XHRcdFx0aWYgKHB0MS54IDwgdGhpcy5sZWZ0ICYmIHB0Mi54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdGlmIChwdDEueCA+IHRoaXMucmlnaHQgJiYgcHQyLnggPCB0aGlzLmxlZnQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWhvcml6b250YWwgJiYgKHB0MS54ID49IHRoaXMubGVmdCAmJiBwdDEueCA8PSB0aGlzLnJpZ2h0KSkge1xyXG5cdFx0XHRcdGlmIChwdDEueSA8IHRoaXMudG9wICYmIHB0Mi55ID4gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAocHQxLnkgPiB0aGlzLmJvdHRvbSAmJiBwdDIueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDM7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvdXRQdCA9IGNvbnRhaW5zMSA/IHB0MiA6IHB0MTtcclxuXHRcdGlmIChob3Jpem9udGFsKSB7XHJcblx0XHRcdGlmIChvdXRQdC54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAob3V0UHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdSZWN0YW5nbGU6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0bGV0IHggPSByZWN0Lng7XHJcblx0XHRsZXQgeSA9IHJlY3QueTtcclxuXHRcdGxldCBkeCA9IHB0LnggLSB4O1xyXG5cdFx0bGV0IGR5ID0gcHQueSAtIHk7XHJcblx0XHRsZXQgYWxwaGEgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCgwLCAwKTtcclxuXHRcdGxldCBwaSA9IE1hdGguUEk7XHJcblx0XHRsZXQgcGkyID0gTWF0aC5QSS8yO1xyXG5cdFx0bGV0IGJldGEgPSBwaTIgLSBhbHBoYTtcclxuXHRcdGxldCB0ID0gTWF0aC5hdGFuMihyZWN0LmhlaWdodCwgcmVjdC53aWR0aCk7XHJcblxyXG5cdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRwLnkgPSB5IC0gcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdHAueCA9IHggLSByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0cC55ID0geSArIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdHAueCA9IHggKyByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0YW5nbGUgdGhhdCBjb250YWlucyBwMSBhbmQgcDJcclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0Qm91bmRpbmdSZWN0YW5nbGUocHRzLCBtYXJnaW4pIHtcclxuXHRcdGlmICghcHRzIHx8IHB0cy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcblx0XHRtYXJnaW4gPSBtYXJnaW4gfHwgWzAsIDAsIDAsIDBdO1xyXG5cdFx0aWYgKCFfLmlzQXJyYXkobWFyZ2luKSlcclxuXHRcdFx0bWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XHJcblx0XHRsZXQgbWluID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRsZXQgbWF4ID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgcCA9IHB0c1tpXTtcclxuXHRcdFx0aWYgKHAueCA8IG1pblswXSkge1xyXG5cdFx0XHRcdG1pblswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55IDwgbWluWzFdKSB7XHJcblx0XHRcdFx0bWluWzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnggPiBtYXhbMF0pIHtcclxuXHRcdFx0XHRtYXhbMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA+IG1heFsxXSkge1xyXG5cdFx0XHRcdG1heFsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bWluWzBdID0gbWluWzBdIC0gbWFyZ2luWzBdO1xyXG5cdFx0bWluWzFdID0gbWluWzFdIC0gbWFyZ2luWzFdO1xyXG5cdFx0bWF4WzBdID0gbWF4WzBdICsgbWFyZ2luWzJdO1xyXG5cdFx0bWF4WzFdID0gbWF4WzFdICsgbWFyZ2luWzNdO1xyXG5cdFx0bGV0IHcgPSBNYXRoLmFicyhtYXhbMF0gLSBtaW5bMF0pO1xyXG5cdFx0bGV0IGggPSBNYXRoLmFicyhtYXhbMV0gLSBtaW5bMV0pO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWluWzBdICsgdy8yLCBtaW5bMV0gKyBoLzIsIHcsIGgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgdW5pb24gb2YgYWxsIHRoZSByZWN0YW5nbGVzLlxyXG5cdCAqIEBwYXJhbSByZWN0c1xyXG5cdCAqL1xyXG5cdHN0YXRpYyB1bmlvbihyZWN0cykge1xyXG5cdFx0bGV0IG1pbnggPSBudWxsLCBtaW55ID0gbnVsbCwgbWF4eCA9IC1JbmZpbml0eSwgbWF4eSA9IC1JbmZpbml0eTtcclxuXHRcdF8uZWFjaChyZWN0cywgZnVuY3Rpb24gKHJlY3QpIHtcclxuXHRcdFx0bWlueCA9IG1pbnggfHwgcmVjdC54O1xyXG5cdFx0XHRtaW55ID0gbWlueSB8fCByZWN0Lnk7XHJcblx0XHRcdG1pbnggPSBNYXRoLm1pbihtaW54LCByZWN0LngpO1xyXG5cdFx0XHRtaW55ID0gTWF0aC5taW4obWlueSwgcmVjdC55KTtcclxuXHRcdFx0bWF4eCA9IE1hdGgubWF4KG1heHgsIHJlY3QucmlnaHQoKSk7XHJcblx0XHRcdG1heHkgPSBNYXRoLm1heChtYXh5LCByZWN0LmJvdHRvbSgpKTtcclxuXHRcdH0pO1xyXG5cdFx0bWlueCA9IG1pbnggfHwgMDtcclxuXHRcdG1pbnkgPSBtaW55IHx8IDA7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW54LCBtaW55LCBtYXh4IC0gbWlueCwgbWF4eSAtIG1pbnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIHRoZSBwb2ludCA8aT5wPC9pPiBpcyBpbiByZWxhdGlvbiB0byB0aGUgZ2l2ZW4gcmVjdGFuZ2xlLlxyXG5cdCAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgV0VTVCAoLTEsMCksIEVBU1QgKDEsMCksIE5PUlRIICgwLC0xKSBhbmQgU09VVEggKDAsMSkgaWYgb3J0aG9nb25hbCBpcyB0cnVlLCBvdGhlcndpc2UgcmV0dXJuXHJcblx0ICogdGhlIGRpcmVjdGlvbiBjb25uZWN0aW9uIHRoZSBjZW50ZXIgb2YgciBhbmQgcC5cclxuXHQgKiBAcGFyYW0gclxyXG5cdCAqIEBwYXJhbSBwXHJcblx0ICogQHBhcmFtIG9ydGhvZ29uYWxcclxuXHQgKiBAcmV0dXJucyB7UG9pbnR8Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0RGlyZWN0aW9uKHIsIHAsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0aWYgKCFvcnRob2dvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHIueCwgci55KS5nZXREaXJlY3Rpb24obmV3IFBvaW50KHAueCwgcC55KSk7XHJcblxyXG5cdFx0bGV0IGksIGRpc3RhbmNlID0gTWF0aC5hYnMoci5sZWZ0IC0gcC54KSwgZGlyZWN0aW9uID0gUG9pbnQuVztcclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci50b3AgLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5OO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLmJvdHRvbSAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LlM7XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIucmlnaHQgLSBwLngpO1xyXG5cdFx0aWYgKGkgPCBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5FO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkaXJlY3Rpb247XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1JlY3RhbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5jbGFzcyBTaGFwZSB7XG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Xy5kZWZhdWx0cyh0aGlzLCBjb25maWcsIHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IHRvcCgpIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHgtY29vcmQgb2YgbGVmdCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgcmlnaHQoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cblxuXHRnZXQgY2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxuXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cblxuXHRjb250YWlucyhlbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvKipcblx0ICogVGhpcyB3aWxsIGdlbmVyYXRlIG4gcG9ydHMgb24gdGhlIHNoYXBlLlxuXHQgKi9cblx0Z2V0UmVndWxhclBvaW50cyhuKSB7cmV0dXJuIG51bGw7fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIGJvdW5kYXJ5IG9mIHRoaXMgc2hhcGUgYW5kIHRoZSBsaW5lIGNvbm5lY3RpbmcgKHgseSkgd2l0aCB0aGUgcmVmUHQuXG5cdCAqIEBwYXJhbSByZWZQdFxuXHQgKiBAcmV0dXJucyB7bnVsbH1cblx0ICovXG5cdGdldFBlcmltZXRlcihyZWZQdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh2aWV3LmdldFRlbXBsYXRlKHRoaXMubmFtZSwgdGhpcykpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRTaGFwZShuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG5cblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcblx0XHRyZWdpc3RyeVtuYW1lXSA9IGM7XG5cdH1cblxuXHRzdGF0aWMgcmVtb3ZlU2hhcGUobmFtZSkge1xuXHRcdGRlbGV0ZSByZWdpc3RyeVtuYW1lXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9TaGFwZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBkb20gVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHRpc0lFOiAoZnVuY3Rpb24gKCkge1xuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcblx0XHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcblxuXHRcdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXG5cdFx0aWYgKElkeCA+IDApXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xuXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSlcblx0XHRcdHJldHVybiAxMTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCksXG5cblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXG5cdFx0cmV0dXJuIHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cdH0pKCksXG5cblx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgYXR0cmlicywgc3R5bGVzLCBodG1sKSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcblx0XHRpZiAoaHRtbClcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XG5cdFx0bGV0IHRlbXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHN0cik7XG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2Rlcztcblx0fSxcblxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xuXHRcdGlmIChhdHRyaWJzKSB7XG5cdFx0XHRfLmZvckVhY2goYXR0cmlicywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHRcdCB9KTtcblx0XHR9XG5cdFx0aWYgKHN0eWxlcykge1xuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0XHRlbC5zdHlsZVtrZXldID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT0gMSAmJiAoICFtZXRob2QgfHwgbWV0aG9kKG5vZGUpICk7XG5cdH0sXG5cblx0Z2V0QW5jZXN0b3JCeTogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBjb250ZXh0LlxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcblx0fSxcblxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcblx0XHRsZXQgaCA9IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xuXHR9LFxuXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG5cdFx0aWYgKHgpIGVsLnN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XG5cdH0sXG5cblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0dmFyIGggPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRIZWlnaHQsIDEwKTtcblx0XHRyZXR1cm4gW3csIGhdO1xuXHR9LFxuXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xuXHRcdGlmIChoKSBlbC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0fSxcblxuXHRwcmVsb2FkSW1hZ2VzOiBmdW5jdGlvbihhcnJheSkge1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XG5cblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodGhpcyk7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xuXHRcdFx0XHRcdC8vIHJlbW92ZSBpbWFnZSBmcm9tIHRoZSBhcnJheSBvbmNlIGl0J3MgbG9hZGVkXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0bGlzdC5wdXNoKGltZyk7XG5cdFx0XHRpbWcuc3JjID0gYXJyYXlbaV07XG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogR2V0J3MgdGhlIGltYWdlJ3MgaW5mb3JtYXRpb24gZ2l2ZW4gdGhlIHVybC4gTXVzdCBiZSBwcmVsb2FkZWQgYnkgY2FsbGluZyB0aGUgcHJlbG9hZEltYWdlIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqL1xuXHRnZXRJbWFnZUluZm86IGZ1bmN0aW9uKHNyYykge1xuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcblx0ICovXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xuXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XG5cblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cblx0ICpcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnM6XG5cdCAqXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqL1xuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XG5cblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcblxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XG5cblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHR2YXIgYSA9IHJlY3Qud2lkdGggLyAyO1xyXG5cdFx0dmFyIGIgPSByZWN0LmhlaWdodCAvIDI7XHJcblx0XHR2YXIgY3ggPSByZWN0Lng7XHJcblx0XHR2YXIgY3kgPSByZWN0Lnk7XHJcblx0XHR2YXIgcHggPSBwdC54O1xyXG5cdFx0dmFyIHB5ID0gcHQueTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIHN0cmFpZ2h0IGxpbmUgZXF1YXRpb24gdGhyb3VnaFxyXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcclxuXHRcdHZhciBkeCA9IHBhcnNlSW50KHB4IC0gY3gpO1xyXG5cdFx0dmFyIGR5ID0gcGFyc2VJbnQocHkgLSBjeSk7XHJcblxyXG5cdFx0dmFyIHR4LCB0eTtcclxuXHJcblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoY3gsIGN5ICsgYiAqIGR5IC8gTWF0aC5hYnMoZHkpKTtcclxuXHRcdH0gZWxzZSBpZiAoZHggPT0gMCAmJiBkeSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxyXG5cdFx0dmFyIGQgPSBkeSAvIGR4O1xyXG5cdFx0dmFyIGggPSBjeSAtIGQgKiBjeDtcclxuXHRcdHZhciBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xyXG5cdFx0dmFyIGYgPSAtMiAqIGN4ICogZTtcclxuXHRcdHZhciBnID0gYSAqIGEgKiBkICogZCAqIGN4ICogY3ggKyBiICogYiAqIGN4ICogY3ggLSBhICogYSAqIGIgKiBiO1xyXG5cdFx0dmFyIGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XHJcblxyXG5cdFx0Ly8gVHdvIHNvbHV0aW9ucyAocGVyaW1ldGVyIHBvaW50cylcclxuXHRcdHZhciB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHhvdXQyID0gKC1mIC0gZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeW91dDEgPSBkICogeG91dDEgKyBoO1xyXG5cdFx0dmFyIHlvdXQyID0gZCAqIHhvdXQyICsgaDtcclxuXHRcdHZhciBkaXN0MSA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDEgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQxIC0gcHkpLCAyKSk7XHJcblx0XHR2YXIgZGlzdDIgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQyIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MiAtIHB5KSwgMikpO1xyXG5cclxuXHRcdC8vIENvcnJlY3Qgc29sdXRpb25cclxuXHRcdHZhciB4b3V0ID0gMDtcclxuXHRcdHZhciB5b3V0ID0gMDtcclxuXHJcblx0XHRpZiAoZGlzdDEgPCBkaXN0Mikge1xyXG5cdFx0XHR4b3V0ID0geG91dDE7XHJcblx0XHRcdHlvdXQgPSB5b3V0MTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MjtcclxuXHRcdFx0eW91dCA9IHlvdXQyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwID0gbmV3IFBvaW50KHhvdXQsIHlvdXQpO1xyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoZGlyLnggPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggLSBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnggPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCArIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgLSBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSArIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHR0eXBlOiBcImRpcmVjdFwiLFxuXHRzaG93R2F1Z2U6IHRydWUsXG5cdG9ydGhvZ29uYWw6IGZhbHNlXG59O1xuXG5sZXQgZGVmYXVsdEdlb21ldHJ5ID0ge1xuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwLFxuXHRhbmNob3JYOiAwLFxuXHRhbmNob3JZOiAwLFxuXHRvZmZzZXRYOiAwLFxuXHRvZmZzZXRZOiAwXG59O1xuXG5sZXQgbGlua1R5cGVzID0ge307XG5cbmNsYXNzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0dGhpcy5zdGFydCA9IHRlcm1pbmFsVmlzdWFsWzBdLnBvaW50O1xuXHRcdHRoaXMuZW5kID0gdGVybWluYWxWaXN1YWxbMV0ucG9pbnQ7XG5cdFx0dGhpcy5zdGFydE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzBdLmRpcmVjdGlvbjtcblx0XHR0aGlzLmVuZE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzFdLmRpcmVjdGlvbjtcblx0XHR0aGlzLnN0YXJ0TWFya2VyID0gc3RhcnRNYXJrZXI7XG5cdFx0dGhpcy5lbmRNYXJrZXIgPSBlbmRNYXJrZXI7XG5cdFx0Xy5hc3NpZ24odGhpcywgc2hhcGVDb25maWcpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMaW5rKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGNvbnRyb2xQdHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBsZW5ndGgoKSB7XG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzO1xuXHRcdGxldCBpLCBsID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcblx0XHRcdGwgKz0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRyZXR1cm4gbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIHdoZXJlIHRvIHB1dCBtb2RpZmllcnMgb3IgbGFiZWwuLlxuXHQgKlxuXHQgKiBAcGFyYW0gZ2VvbWV0cnk6IGRlZmluZXMgaG93IGZhciBhbG9uZyB0aGUgZWRnZSBzaG91bGQgdGhlIHBvaW50IGJlIHBsYWNlZC5cblx0ICogQHJldHVybiAqW10gdGhlIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApIDw9IDEpIHAgKj0gbDtcblx0XHRpZiAocCA8IDApIHAgPSBsICsgcDtcblx0XHRpZiAocCA+IGwpIHAgPSBsO1xuXG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzLCBkLCBwb2ludCwgZGlyO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0ZCA9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRpZiAocCA8PSBkKSB7XG5cdFx0XHRcdC8vIHdlJ3ZlIGxvY2F0ZWQgdGhlIGxpbmUgc2VnbWVudC5cblx0XHRcdFx0cG9pbnQgPSBwb2ludHNbaV0uY2xvbmUoKTtcblx0XHRcdFx0ZGlyID0gcG9pbnQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0cG9pbnQudHJhbnNsYXRlKGRpci5nZXRTY2FsZWQocCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHAgLT0gZDtcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gdGhlIGxhc3QgcG9pbnQuXG5cdFx0aWYgKCFwb2ludClcblx0XHRcdHBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmsnO1xuXHR9XG5cblx0c3RhdGljIGdldExpbmsodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAoc2hhcGVDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBsaW5rQ2xhc3MgPSBsaW5rVHlwZXNbc2hhcGVDb25maWcudHlwZV07XG5cdFx0aWYgKGxpbmtDbGFzcylcblx0XHRcdHJldHVybiBuZXcgbGlua0NsYXNzKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdFx0Y29uc29sZS5sb2coJ2xpbmsgdHlwZSBub3Qgc3VwcG9ydGVkOiAnICsgc2hhcGVDb25maWcudHlwZSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuY2xhc3MgRGlyZWN0TGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG59XG5cbmNsYXNzIEJlemllckxpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxuXG5cdGdldCBjb250cm9sUHRzKCkge1xuXHRcdGxldCBzID0gdGhpcy5wb2ludHNbMF0sIGUgPSB0aGlzLnBvaW50c1sxXTtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0cHRzWzBdID0gbnVsbDtcblx0XHRwdHNbMV0gPSBbXTtcblx0XHRpZiAodGhpcy5zdGFydE5vcm1hbC54ID09IDApIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludChzLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBzLnkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoZS54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgZS55KTtcblx0XHR9XG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA+IDEpIHAgLz0gbDtcblx0XHRpZiAocCA8IDApIHArKztcblx0XHRpZiAocCA+IDEpIHAtLTtcblxuXHRcdGxldCBwdHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgY3RybHB0cyA9IHRoaXMuY29udHJvbFB0cztcblx0XHRsZXQgcDEgPSBwdHNbMF07XG5cdFx0bGV0IHAyID0gY3RybHB0c1sxXVswXTtcblx0XHRsZXQgcDMgPSBjdHJscHRzWzFdWzFdO1xuXHRcdGxldCBwNCA9IHB0c1sxXTtcblxuXHRcdGxldCBwb2ludCA9IFsoMS1wKSooMS1wKSooMS1wKSAqIHAxLnggKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi54ICsgMypwKnAqKDEtcCkgKiBwMy54ICsgcCpwKnAgKiBwNC54LCAoMS1wKSooMS1wKSooMS1wKSAqIHAxLnkgKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi55ICsgMypwKnAqKDEtcCkgKiBwMy55ICsgcCpwKnAgKiBwNC55XTtcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XG5cdH1cbn1cblxuY2xhc3MgRW50aXR5UmVsYXRpb25zIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0dmFyIHNvdXJjZSA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIHRydWUpO1xuXHRcdHZhciB0YXJnZXQgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCBmYWxzZSk7XG5cdFx0dmFyIGlzU291cmNlTGVmdCA9IHRhcmdldC5yaWdodCgpIDwgc291cmNlLng7XG5cdFx0dmFyIGlzVGFyZ2V0TGVmdCA9IHNvdXJjZS5yaWdodCgpIDwgdGFyZ2V0Lng7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0dmFyIHgwID0gKGlzU291cmNlTGVmdCkgPyBzb3VyY2UueCA6IHNvdXJjZS54ICsgc291cmNlLndpZHRoO1xuXHRcdHZhciB5MCA9IHNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgwLCB5MCkpO1xuXG5cdFx0dmFyIHhlID0gKGlzVGFyZ2V0TGVmdCkgPyB0YXJnZXQueCA6IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuXHRcdHZhciB5ZSA9IHRhcmdldC5nZXRDZW50ZXJZKCk7XG5cblx0XHR2YXIgc2VnID0gdGhpcy5zZWdtZW50O1xuXG5cdFx0dmFyIGR4ID0gKGlzU291cmNlTGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBkZXAgPSBuZXcgUG9pbnQoeDAgKyBkeCwgeTApO1xuXG5cdFx0ZHggPSAoaXNUYXJnZXRMZWZ0KSA/IC1zZWcgOiBzZWc7XG5cdFx0dmFyIGFyciA9IG5ldyBQb2ludCh4ZSArIGR4LCB5ZSk7XG5cblx0XHQvLyBBZGRzIGludGVybWVkaWF0ZSBwb2ludHMgaWYgYm90aCBnbyBvdXQgb24gc2FtZSBzaWRlXG5cdFx0aWYgKGlzU291cmNlTGVmdCA9PSBpc1RhcmdldExlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIHggPSAoaXNTb3VyY2VMZWZ0KSA/XG5cdFx0XHRNYXRoLm1pbih4MCwgeGUpLXNlZyA6XG5cdFx0XHRNYXRoLm1heCh4MCwgeGUpK3NlZztcblxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHkwKSk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeWUpKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGRlcC54IDwgYXJyLngpID09IGlzU291cmNlTGVmdClcblx0XHR7XG5cdFx0XHR2YXIgbWlkWSA9IHkwICsgKHllIC0geTApIC8gMjtcblxuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChkZXAueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGFyci54LCBtaWRZKSk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XG5cdFx0fVxuXG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHhlLCB5ZSkpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuXG5jbGFzcyBNYW5oYXR0YW4gZXh0ZW5kcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzKHNoYXBlQ29uZmlnLCB7XG5cdFx0XHRNSU5fQlVGRkVSOiAxMCxcblx0XHRcdGF1dG9Sb3V0ZTogZmFsc2UsXG5cdFx0XHRtYXhDaGFubmVsV2lkdGg6IDEwMFxuXHRcdH0pO1xuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkge1xuXHRcdGxldCBwb3MgPSBNYW5oYXR0YW4ucm91dGVJbnRlcm5hbCh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy5zdGFydE5vcm1hbCwgdGhpcy5lbmROb3JtYWwsIHRoaXMuTUlOX0JVRkZFUik7XG5cdFx0cG9zID0gTWFuaGF0dGFuLnByb2Nlc3NQb3NpdGlvbnModGhpcy5zdGFydCwgdGhpcy5lbmQsIHBvcywgdGhpcy5zdGFydE5vcm1hbC54IT0wKTtcblx0XHRpZiAodGhpcy5hdXRvUm91dGUpIHtcblx0XHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRcdHZhciBib3hlcyA9IFtdLCBub2RlLCBzdGFydEJveCwgZW5kQm94O1xuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGVkZ2Uuc291cmNlLmdldENvbW1vbkFuY2VzdG9yKGVkZ2UudGFyZ2V0KTtcblx0XHRcdHZhciBjaGlsZE5vZGVzID0gY29udGFpbmVyLmdldERlc2NlbmRhbnRzKCk7XG5cdFx0XHR2YXIgaW5kZXggPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXHRcdFx0XHQvLyBEbyBub3QgaW5jbHVkZSBzb3VyY2Ugb3IgdGFyZ2V0IGFuY2VzdG9ycyBpbiByb3V0aW5nLlxuXHRcdFx0XHRpZiAobm9kZS5leGNsdWRlRnJvbVJvdXRpbmcoZWRnZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2Uuc291cmNlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS50YXJnZXQpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS5zb3VyY2UpXG5cdFx0XHRcdHN0YXJ0Qm94ID0gaW5kZXg7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2UudGFyZ2V0KVxuXHRcdFx0XHRlbmRCb3ggPSBpbmRleDtcblx0XHRcdFx0Ym94ZXMucHVzaChub2RlLmdldEJvdW5kcyhkb2N1bWVudCkpO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGJveGVzLmxlbmd0aCA+IDEpXG5cdFx0XHRcdHRoaXMuYXV0b1JvdXRlKHBvcywgY29udGFpbmVyLmdldEJvdW5kcyhkb2N1bWVudCksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHR9XG5cdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIHJvdXRlIGJhc2VkIG9uIHRoZSBzdGFydCwgZW5kIGFuZCBzdGFydE5vcm1hbCBhbmQgZW5kTm9ybWFsXG5cdCAqIE5vbmUgb2YgdGhlIHBhcmFtZXRlcnMgY2FuIGJlIG51bGxcblx0ICogVE9ETzogVGhpcyBtZXRob2QgY291bGQgdXNlIHNvbWUgaW1wcm92ZW1lbnQuLi5cblx0ICovXG5cdHN0YXRpYyByb3V0ZUludGVybmFsKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5nZXREaXJlY3Rpb24oZW5kKTtcblx0XHR2YXIgYXZlcmFnZSA9IHN0YXJ0LmdldE1pZFBvaW50KGVuZCk7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHZhciBzdGFydFBvc2l0aXZlID0gbmV3IFBvaW50KHN0YXJ0Tm9ybWFsLngqc3RhcnROb3JtYWwueCwgc3RhcnROb3JtYWwueSpzdGFydE5vcm1hbC55KTtcblx0XHR2YXIgZW5kUG9zaXRpdmUgPSBuZXcgUG9pbnQoZW5kTm9ybWFsLngqZW5kTm9ybWFsLngsIGVuZE5vcm1hbC55KmVuZE5vcm1hbC55KTtcblx0XHR2YXIgaG9yaXpvbnRhbCA9IHN0YXJ0Tm9ybWFsLnggIT0gMDtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueSA6IHN0YXJ0Lng7XG5cblx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0dmFyIGk7XG5cdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA9PSAwKSB7XG5cdFx0XHRpZiAoKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHQmJiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8PSAwKSkge1xuXHRcdFx0XHQvLyAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyAyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+IDApXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID4gMCkge1xuXHRcdFx0XHQvLzFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLzMgb3IgMVxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBvcy5wdXNoKGhvcml6b250YWwgPyBlbmQueSA6IGVuZC54KTtcblxuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvLyBQcm9jZXNzIHRoZSBwb3NpdGlvbnMuXG5cdHN0YXRpYyBwcm9jZXNzUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHBvc2l0aW9ucywgaG9yaXpvbnRhbCkge1xuXHRcdHZhciBwb3MgPSBbXTtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueCA6IHN0YXJ0Lnk7XG5cdFx0dmFyIGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cG9zW2kgKyAxXSA9IHBvc2l0aW9uc1tpXTtcblx0XHR9XG5cdFx0cG9zLnB1c2goKGhvcml6b250YWwgPT0gKHBvc2l0aW9ucy5sZW5ndGggJSAyID09IDEpKSA/IGVuZC54IDogZW5kLnkpO1xuXG5cdFx0dmFyIHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IHN0YXJ0O1xuXHRcdHZhciBwO1xuXHRcdHZhciBjdXJyZW50LCBwcmV2O1xuXHRcdGZvciAoaSA9IDI7IGkgPCBwb3MubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRwcmV2ID0gcG9zW2kgLSAxXTtcblx0XHRcdGN1cnJlbnQgPSBwb3NbaV07XG5cdFx0XHRwID0gaG9yaXpvbnRhbCA/IG5ldyBQb2ludChwcmV2LCBjdXJyZW50KSA6IG5ldyBQb2ludChjdXJyZW50LCBwcmV2KTtcblx0XHRcdHB0cy5wdXNoKHApO1xuXHRcdH1cblx0XHRwdHMucHVzaChlbmQpO1xuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSByb3V0ZSB0aGUgY29ubmVjdGlvbiB0byBhdm9pZCBpbnRlcnNlY3Rpb25zIHdpdGggb3RoZXIgdmVydGljZXMuXG5cdCAqL1xuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIHNpZGUsIHNpZGUyLCBkLCBib3gsIGludGVyc2VjdCwgajtcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XG5cblx0XHR2YXIgc3RhcnRQYWRkaW5nID0gMCwgZW5kUGFkZGluZztcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XG5cdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDJdO1xuXHRcdGlmIChwdC55IDwgYm94LnkpXG5cdFx0XHRzaWRlID0gMTtcblx0XHRlbHNlIGlmIChwdC55ID4gYm94LnkgKyBib3guaGVpZ2h0KVxuXHRcdFx0c2lkZSA9IDM7XG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxuXHRcdFx0c2lkZSA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0c2lkZSA9IDI7XG5cdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgZW5kQm94LCBib3hlcywgc2lkZSk7XG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdFx0aWYgKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcblx0XHRcdHN3aXRjaChzaWRlKSB7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS55ID09IHB0c1tpKzNdLnkpICYmIChwdHNbaSsyXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpKzJdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIuYm90dG9tICsgY2hhbm5lbDIudG9wKS8yIC0gcHQueTtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS54ID09IHB0c1tpKzNdLngpICYmIChwdHNbaSsyXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaSsyXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIucmlnaHQgKyBjaGFubmVsMi5sZWZ0KS8yIC0gcHQueDtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIG1heCBwb2ludHMuXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpKzEsIDAsIHB0KTtcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHR9XG5cdH1cblxuXHRfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBib3gsIHNpZGUsIHNhdmVkSW5kZXggPSBudWxsLCBzYXZlZFNpZGUgPSBudWxsO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgoaSA9PSAwICYmIGogPT0gc3RhcnRCb3gpIHx8IChpID09IHB0cy5sZW5ndGggLSAyICYmIGogPT0gZW5kQm94KSlcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdHNpZGUgPSBib3guZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pO1xuXHRcdFx0aWYgKHNpZGUgPj0gMCkge1xuXHRcdFx0XHRpZiAoc2F2ZWRJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoYm94ZXNbc2F2ZWRJbmRleF0uZGlzdGFuY2UocHRzW2ldKSA+IGJveC5kaXN0YW5jZShwdHNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzYXZlZEluZGV4ICE9IG51bGwpXG5cdFx0XHRyZXR1cm4gW3NhdmVkSW5kZXgsIHNhdmVkU2lkZV07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIGJyZWFrUHQsIGJveCwgc2lkZSkge1xuXHRcdHZhciBkaXI7XG5cdFx0dmFyIHA7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHAgPSBcInlcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHAgPSBcInhcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vZmlyc3QgdHJ5IHRoZSBicmVha3B0LlxuXHRcdGRpciA9IF9nZXRSb3V0ZURpcmVjdGlvbihicmVha1B0LCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdGRpciA9IC1fZ2V0Um91dGVEaXJlY3Rpb24ocHRzWzBdLCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0XHRpZiAoYnJlYWtQdFtwXSA8IGJveC5nZXRDZW50ZXIoKVtwXSlcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkaXI7XG5cdH1cblxuXHRfZ2V0Um91dGVEaXJlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcblx0XHRcdHJldHVybiBQb2ludC5OO1xuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcblx0XHRcdHJldHVybiBQb2ludC5XO1xuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcblx0XHRcdHJldHVybiBQb2ludC5ORTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcblx0XHRcdHJldHVybiBQb2ludC5OVztcblx0XHR9XG5cdH1cblxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xuXHRcdHZhciBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcblx0XHR2YXIgYm94MSA9IGJveGVzW2luZGV4XSwgYm94Mjtcblx0XHR2YXIgcHQsIGk7XG5cdFx0dmFyIGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcblx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IHB0Lng7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkge1xuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNoYW5uZWwucmlnaHQgLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkge1xuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNoYW5uZWwuYm90dG9tIC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRSaWdodCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAobCA8PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRCb3R0b20oKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGlmIChib3gyLmdldFRvcCgpLnkgPD0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYW5uZWw7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHB0cyB0aGUgbGlzdCBvZiBwb2ludHMuXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSBzdGFydFBhZGRpbmdcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcblx0ICovXG5cdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZykge1xuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxuXHRcdHZhciBkaXIsIGwsIHB0O1xuXHRcdGlmIChpID09IDApIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xuXHRcdFx0aWYgKCFzdGFydFBhZGRpbmcpXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbMF0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoaSA9PSBwdHMubGVuZ3RoIC0gMikge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgZW5kIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcblx0XHRcdGlmICghZW5kUGFkZGluZylcblx0XHRcdFx0ZW5kUGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XG5cdFx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMV0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZShwdHMubGVuZ3RoIC0gMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHB0c1tpXS55ID09IHB0c1tpKzFdLnkpIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnkgPT0gcHRzW2ldLnkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueSArPSBkO1xuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS54ID09IHB0c1tpXS54KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnggKz0gZDtcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBtZXRob2Qgd2lsbCBtZXJnZSB0aGUgcmVkdW5kYW50IHNlZ21lbnRzLlxuXHQgKi9cblx0X21lcmdlU2VnbWVudHMocHRzKSB7XG5cdFx0dmFyIGgxID0gcHRzW3B0cy5sZW5ndGgtMV0ueSA9PSBwdHNbcHRzLmxlbmd0aC0yXS55O1xuXHRcdHZhciBoMjtcblx0XHRmb3IgKHZhciBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XG5cdFx0XHRoMiA9IHB0c1tpXS55ID09IHB0c1tpLTFdLnk7XG5cdFx0XHRpZiAoaDIgPT0gaDEgfHwgKHB0c1tpXS5lcXVhbHMocHRzW2ktMV0pKSlcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0aDEgPSAhaDE7XG5cdFx0fVxuXHR9XG59XG5cbmxpbmtUeXBlc1snZGlyZWN0J10gPSBEaXJlY3RMaW5rO1xubGlua1R5cGVzWydiZXppZXInXSA9IEJlemllckxpbms7XG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xubGlua1R5cGVzWydtYW5oYXR0YW4nXSA9IE1hbmhhdHRhbjtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmsuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgKiBhcyBLZXlVdGlscyBmcm9tIFwiLi9LZXlVdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbmNvbnN0IERFRkFVTFRTID0ge1xuXHRzdG9wUHJvcGFnYXRpb246IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldLCBjb25maWcgPSB7fSkge1xuXHRcdHRoaXMucm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy5yb290TlMgPSByb290LmdldEF0dHJpYnV0ZSgnbnMnKSB8fCAncm9vdCc7XG5cdFx0dGhpcy56b29tU2NhbGUgPSB6b29tU2NhbGU7XG5cdFx0Xy5hc3NpZ24odGhpcywgREVGQVVMVFMsIGNvbmZpZyk7XG5cdFx0dGhpcy5zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xuXHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmhhbmRsZXIgPSBfLmJpbmQodGhpcy5oYW5kbGVFdmVudCwgdGhpcyk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cblx0XHQvLyBTaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzXG5cdFx0dGhpcy5lbnRlclN0YWNrID0gW107XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnQgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdGFydCgpIHtcblx0XHRpZiAodGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9uKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xuXHRcdHRoaXMuc3RhcnRLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzLlxuXHQgKi9cblx0c3RvcCgpIHtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdEV2ZW50cy5vZmYodGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdG9wS2V5cygpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXHR9XG5cblx0c3RhcnRLZXlzKCkge1xuXHRcdEV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0c3RvcEtleXMoKSB7XG5cdFx0RXZlbnRzLm9mZihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBucywgc3RhY2sgPSBbXSwgaXNSb290ID0gZmFsc2U7XG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xuXHRcdFx0bnMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCducycpO1xuXHRcdFx0aWYgKG5zKSB7XG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcblx0XHRcdFx0aWYgKGlzUm9vdCkge1xuXHRcdFx0XHRcdG5zID0gbnMuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFldmVudC5uc1RhcmdldCkgZXZlbnQubnNUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xuXHRcdFx0XHRidWYucHJlcGVuZChucyk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0aWYgKCFpc1Jvb3QpXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XG5cblx0XHQvLyB0YXJnZXQgc3RhY2sgaXMgYSBzdGFjayBvZiBhbGwgdGhlIG5zIHRhcmdldHMgdXAgdG8gdGhlIG9uZSB3aXRoIHRoZSBkYXRhIGJpbmRpbmcuXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcblx0XHRucyA9IGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdGlmIChucyA9PSAnJykgbnMgPSB0aGlzLnJvb3ROUztcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1haW4gZXZlbnQgaGFuZGxlciBtZXRob2QsIGl0IHByb2Nlc3NlcyBldmVudCBhbmQgZ2VuZXJhdGUgcmVsZXZhbnQgZXZlbnRzIHRvIGRpc3BhdGNoLlxuXHQgKi9cblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcblx0XHRsZXQgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cblx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHJldHVybjtcblxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xuXHRcdGlmIChpc0tleUV2ZW50KSB7XG5cdFx0XHRkYXRhID0gdGhpcy5yb290O1xuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcblx0XHRcdGRhdGEgPSBpbmZvLmRhdGE7XG5cdFx0XHRucyA9IGluZm8ubnM7XG5cdFx0fVxuXG5cdFx0Ly9VdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiaGFuZGxlRXZlbnQgLSBcIiArIHR5cGUgKyAnO25zPScgKyBucyk7XG5cblx0XHRpZiAodHlwZSA9PSAnbW91c2V3aGVlbCcpIHtcblx0XHRcdHRoaXMuc2NhbGUgKj0gTWF0aC5wb3coMiwgZXZlbnQud2hlZWxEZWx0YSAqIDAuMDAyKTtcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRcdGV2ZW50LnNjYWxlID0gdGhpcy5zY2FsZTtcblx0XHRcdHR5cGUgPSAnem9vbSc7XG5cdFx0fVxuXG5cdFx0Ly8gU2VlIGlmIHdlIHNob3VsZCBjcmVhdGUgZHJhZyBldmVudHNcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcblx0XHRcdC8vIENyZWF0ZSBkcmFnIG9iamVjdC5cblx0XHRcdGNvbnN0IGRyYWdPYmplY3QgPSB7ZGF0YTogZGF0YSwgcG9zOiBucyA9PSAncm9vdCcgPyBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCkgOiBwb3N9O1xuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciBtb3VzZSBtb3ZlLlxuXHRcdFx0bGV0IGRyYWdQb3M7XG5cblx0XHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgbW91c2UgaGFzIG1vdmVkLiBJRSBhbHdheXMgZmlyZSBtb3VzZW1vdmUgYWZ0ZXIgbW91c2Vkb3duIGV2ZW4gaWYgdGhlIG1vdXNlIGhhc24ndCBtb3ZlZCB5ZXQuXG5cdFx0XHRcdFx0aWYgKGRyYWdPYmplY3QucG9zWzBdID09IGN1cnJlbnRQb3NbMF0gJiYgZHJhZ09iamVjdC5wb3NbMV0gPT0gY3VycmVudFBvc1sxXSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgZHJhZ2dpbmdcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnc3RhcnQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnT2JqZWN0LnBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcblx0XHRcdFx0dGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZycsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG1vdXNldXAgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cblx0XHRcdFx0bGV0IGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnZW5kJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0XHR9O1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzS2V5RXZlbnQpXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cdFx0dGhpcy5kaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuXHRcdC8vaWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHQvL1x0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cblx0ICovXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdGxldCBsYXN0LCBzdGFjaztcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xuXHRcdFx0ayA9IGsgfHwgMDtcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdH07XG5cblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XG5cdFx0XHRcdGxldCBpdGVtO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xuXHR9XG5cblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0Jylcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwga2V5KSkge1xuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAoIWxpc3RlbmVyLmNvbnRleHQpXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KGxpc3RlbmVyLmNvbnRleHQsIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxuXHRcdGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdGlmKCEgXy5pc05hTihwb3NbMF0pICYmICEgXy5pc05hTihwb3NbMV0pKVxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGtleSBldmVudCBoYW5kbGVyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XG5cdCAqL1xuXHRyZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gfHwgKHRoaXMubGlzdGVuZXJzW2tleV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNba2V5XSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XG5cdFx0aWYgKF8uaXNBcnJheSh0eXBlKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCB6SW5kZXg6IHpJbmRleH07XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBtb3VzZShjb250YWluZXIsIGUpIHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xuXHRcdGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcblx0XHRcdHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcblx0XHRcdHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKGNvbnRhaW5lci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcblx0XHR9XG5cdFx0dmFyIHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiovIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8gICAgICAgICAgIFRoZSBLZXkgVXRpbGl0eSBDTGFzcyBmb3IgdGhlIEV2ZW50IERpc3BhdGNoZXIgICAgICAgICAgXHQgICAgIC8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuLyoqXG4gKiBLRVkgY29uc3RhbnRcbiAqL1xuY29uc3QgS0VZID0ge1xuXHRBTFQgICAgICAgICAgOiAxOCxcblx0QkFDS19TUEFDRSAgIDogOCxcblx0Q0FQU19MT0NLICAgIDogMjAsXG5cdENPTlRST0wgICAgICA6IDE3LFxuXHRERUxFVEUgICAgICAgOiA0Nixcblx0RE9XTiAgICAgICAgIDogNDAsXG5cdEVORCAgICAgICAgICA6IDM1LFxuXHRFTlRFUiAgICAgICAgOiAxMyxcblx0RVNDQVBFICAgICAgIDogMjIwLFxuXHRIT01FICAgICAgICAgOiAzNixcblx0TEVGVCAgICAgICAgIDogMzcsXG5cdE1FVEEgICAgICAgICA6IDIyNCxcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxuXHRQQUdFX0RPV04gICAgOiAzNCxcblx0UEFHRV9VUCAgICAgIDogMzMsXG5cdFBBVVNFICAgICAgICA6IDE5LFxuXHRQUklOVFNDUkVFTiAgOiA0NCxcblx0UklHSFQgICAgICAgIDogMzksXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcblx0U0hJRlQgICAgICAgIDogMTYsXG5cdFNQQUNFICAgICAgICA6IDMyLFxuXHRUQUIgICAgICAgICAgOiA5LFxuXHRVUCAgICAgICAgICAgOiAzOFxuXHQvL0FERCAgICAgICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDYxICA6IDE4Nyxcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXG5cdGlmIChrZXkgPj0gMTYgJiYga2V5IDw9IDE4KSB7XG5cdFx0a2V5ID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcblx0aWYgKHNoaWZ0KSBidWYuYXBwZW5kKFwiU0hJRlRcIik7XG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xuXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvS2V5VXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL0VkZ2VcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3ZpZXcvTWFya2VyXCI7XG5cbmNvbnN0IG5vZGVEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnbm9kZScsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0ZWRpdGFibGU6IHRydWUsXG5cdHJlc2l6YWJsZTogZmFsc2UsXG5cdHNvdXJjZWFibGU6IHRydWUsXG5cdHRhcmdldGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWVcbn07XG5cbmNvbnN0IGVkZ2VEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnZWRnZScsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWUsXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxuXHRlbmRNYXJrZXI6IHtcblx0XHRpZDogJ0RlZmF1bHRfRW5kTWFya2VyJyxcblx0XHR0eXBlOiAnYXJyb3cnLFxuXHRcdHNpemU6IDEwLFxuXHRcdGNvbG9yOiAnIzBlYTExNydcblx0fSxcblx0Lyogc3RhcnQgYW5kIGVuZCBpcyBvbmx5IHVzZWQgaWYgdGhlIGVkZ2UgaXMgbm90IGNvbm5lY3RlZCB0byBhIG5vZGUgKi9cblx0c3RhcnQ6IFswLCAwXSxcblx0ZW5kOiBbNDAwLCAyMDBdXG59O1xuXG5jbGFzcyBHcmFwaCB7XG5cdGNvbnN0cnVjdG9yKGlkID0gXy51bmlxdWVJZChcIkdcIiksIGNvbmZpZyA9IHt9LCBtb2RlbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdHRoaXMubm9kZXMgPSB7fTtcblx0XHR0aGlzLmVkZ2VzID0ge307XG5cblx0XHR0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLm5vZGVUeXBlcywgXCJOb2Rlc1wiLCBub2RlRGVmYXVsdHMpO1xuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLmVkZ2VUeXBlcywgXCJFZGdlc1wiLCBlZGdlRGVmYXVsdHMpO1xuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxuXHRcdHRoaXMubWFya2VycyA9IFtdO1xuXHRcdGxldCBlZGdlVHlwZXMgPSBVdGlscy50eXBlKEVkZ2UubmFtZXNwYWNlKSwgbWFya2VyLCBtYXJrZXJDb25maWc7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiBlZGdlVHlwZXMuZW50cmllcygpKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRlbGV0ZSBjb25maWcubm9kZVR5cGVzO1xuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xuXHRcdGlmIChtb2RlbClcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XG5cdFx0dmFyIGpzQ2xhc3MgPSBudWxsO1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cblx0XHRcdHZhciB0eXBlID0gVXRpbHMudHlwZShkZWZhdWx0Q2xhc3MubmFtZXNwYWNlLCBjb25maWcudHlwZSk7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcblx0XHR9XG5cblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgTm9kZVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xuXHRcdGxldCBFZGdlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgRWRnZSk7XG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xuXG5cdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBlZGdlKTtcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcblx0XHRyZXR1cm4gZWRnZTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQsIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cmV0dXJuIHNoYXBlLmdldFBlcmltZXRlcihlbmRQdCwgb3J0aG9nb25hbCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKFwibGFiZWxcIikgPyB0aGlzLnByb3AoXCJsYWJlbFwiKSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xuXHRcdHJldHVybiAnTm9kZTp7aWQ6JyArIHRoaXMuaWQgKyAnO2xhYmVsOicgKyBsYWJlbCArICc7dHlwZTonICsgdGhpcy5wcm9wcy5jb25zdHJ1Y3Rvci50eXBlTmFtZSArICd9Jztcblx0fVxufVxuTm9kZS5uYW1lc3BhY2UgPSBcIk5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG5cbi8qXG5cbi8qKlxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cbiAqXG5WZXJ0ZXgucHJvdG90eXBlLmdldERyaWxsRG93blBhcmVudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcblx0cmV0dXJuICEobW9kZSAmIEdyYXBoLkFMTE9XX0lOVEVSQUNUSU9OUyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmdldENydW1iVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIik7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvTm9kZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuLyoqXG4gKiBUaGUgQ2VsbCBpcyB0aGUgY29tbW9uIHBhcmVudCBmb3IgTm9kZSBhbmQgRWRnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7aWQ6IF8udW5pcXVlSWQoKX0pIHtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcblx0XHRkZWxldGUgY29uZmlnLmlkO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXG5cdFx0aWYgKGNvbmZpZy5kZWNvcmF0b3JzKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXG5cdFx0aWYgKGNvbmZpZy52aWV3cykge1xuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxuXHRcdHZhciB0eXBlID0gY29uZmlnLnR5cGUgfHwgXCJEZWZhdWx0XCI7XG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgbm90IGZvdW5kIFwiICsgY29uZmlnLnR5cGUpO1xuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcblx0fVxuXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0L1NldCBwcm9wZXJ0eSBzdG9yZWQgYnkgdmlld3MuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dmlld1Byb3Aoa2V5ID0gJ2RlZmF1bHQnLCBuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XG5cdFx0fVxuXHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMudmlld1Byb3BzW2tleV0pXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEZWNvcmF0b3JzKGRlY29yYXRvcnMpIHt9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9wZXJ0aWVzIG5lZWRlZCBmb3IgcmVuZGVyaW5nIHRoaXMgZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XG5cdCAqL1xuXHRnZXRWaWV3KGtleSkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xuXHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcblx0XHRcdG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2Vcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KSByZXR1cm4gJyc7XG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLmdyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XG5cdFx0ZGVsZXRlIHRoaXMudmlld1Byb3BzO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblx0fVxufVxuXG4vKlxuXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInlcIiwgTWF0aC5yb3VuZCh5KSk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIGgpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuU2VsZWN0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwic2VsZWN0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xuXHRyZXR1cm4gdGhpcy5ncmFwaC5nZXRUeXBlKHR5cGVTdHIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY3JlYXRlTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kaWZpZXJzKSB7XG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcblx0aWYgKG1vZGlmaWVyU2V0dGluZ3MpIHtcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XG5cdFx0XHRjb25maWcuc2V0dGluZyA9IG1vZGlmaWVyU2V0dGluZ3NbY29uZmlnLmNsYXNzTmFtZV07XG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmFkZE1vZGlmaWVyKGNvbmZpZy5jbGFzc05hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIENoZWNrIGZvciBzaG93QWx3YXlzIHNldHRpbmdzXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XG5cdFx0XHRcdHZhciBjb25maWcgPSB7dHlwZTogdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUobmFtZSksIHNldHRpbmc6IHNldHRpbmd9O1xuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHR9XG59O1xuXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XG5cdGlmICghdGhpcy5tb2RpZmllcnMpXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcblxuXHRpZiAoIW1vZGlmaWVyLmhhc093blByb3BlcnR5KFwic2hvd0hlYWRlclwiKSlcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcblxuXHQvLyBAaGFjayBwcmVmZXJhYmx5IHNldCBpdCBpbiBjb25maWd1cmF0aW9ucy5cblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XG5cblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXG5cdFx0dGhpcy5jcmVhdGVNb2RpZmllcnMoKTtcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xuXHRpZiAobW9kaWZpZXJzKVxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XG5cdHJldHVybiBudWxsO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJyk7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0NhY2hlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdHJvdGF0aW9uOiBudWxsLFxuXHRnZW9tZXRyeToge3g6IDAsIHk6IDAsIGFuY2hvclk6IDAsIG9mZnNldFg6IDAsIG9mZnNldFk6IDB9XG59O1xuXG4vKipcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxuXHQgKi9cblx0bGV0IGdldFN0cmluZ1NpemUgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0ZG9jLm9wZW4oKTtcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcblx0XHRcdFx0PGRpdiBpZD1cImJhc2VsaW5lRGl2XCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7XCI+PHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDowXCI+VDwvc3Bhbj48c3BhbiBzdHlsZT1cImhlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvc3Bhbj48L2Rpdj5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xuXHRcdH1cblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gbWVhc3VyZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xuXG5cdFx0bGV0IHN0cnV0ID0gYmFzZWxpbmVEaXYuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XG5cblx0XHRyZXR1cm4ge3dpZHRoOiBtZWFzdXJlRGl2Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IG1lYXN1cmVEaXYub2Zmc2V0SGVpZ2h0LCBiYXNlbGluZTogYmFzZWxpbmVIZWlnaHR9O1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdGxldCBhcnIgPSBbXTtcblx0XHRsZXQgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplLndpZHRoO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywge3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcblx0XHRsZXQgYWxpZ24gPSBsYWJlbENvbmZpZy5hbGlnbjtcblxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XG5cdFx0aWYgKGNvbnRleHQud2lkdGgpIHtcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcblx0XHR9XG5cdFx0dyAtPSAyICogcGFkZGluZztcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xuXHRcdHcgPSBNYXRoLm1heCgwLCB3KTtcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBfLmNsb25lKGxhYmVsQ29uZmlnLmdlb21ldHJ5KTtcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSB3cmFwcGVkTGFiZWwuaGVpZ2h0ICsgMiAqIHBhZGRpbmcgKyAod3JhcHBlZExhYmVsLmxlbmd0aCAtIDEpICogbGluZVBhZGRpbmc7XG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XG5cdFx0c3dpdGNoIChhbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XG5cdFx0XHRcdGR4ID0gd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgcG9zO1xuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xuXHRcdGVsc2Vcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdC8vIHRoZSBwaXZvdCBpcyB0aGUgY2VudGVyIG9mIHJvdGF0aW9uIHdoZW4gdGhlIGxhYmVsIGhhcyBhIHJvdGF0aW9uIHNwZWNpZmllZC5cblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xuXG5cdFx0Ly8gdGhlIG1heGltdW0gYm91bmRzIGZvciB0aGUgbGFiZWwsIHVzZWQgdG8gcG9zaXRpb24gaW5saW5lIGVkaXRvclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCAtIHdyYXBwZWRMYWJlbC5iYXNlbGluZSwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsLCBzY2FsZSA9IDEuMCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSB7XG5cdFx0XHRcdHRoaXMuaW5wdXQgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KTtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnZpc2libGUoKSAmJiB0aGlzLmtleSAhPSBrZXkpIHtcblx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmJveCA9IGJveDtcblx0XHRcdHRoaXMucmVmRWwgPSByZWZFbDtcblx0XHRcdHRoaXMudGV4dEVsID0gdGV4dEVsO1xuXG5cdFx0XHRsZXQgbGFiZWxDb25maWcgPSBib3guY29uZmlnO1xuXHRcdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoYm94Lm1heEJvdW5kcy54LCBib3gubWF4Qm91bmRzLnksIGJveC5tYXhCb3VuZHMud2lkdGggKiBzY2FsZSwgYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSk7XG5cdFx0XHRsZXQgcG9zID0gRG9tVXRpbHMuZ2V0Q2VudGVyUG9zaXRpb24ocmVmRWwsIGNvbnRhaW5lcik7XG5cdFx0XHRwb3MgPSBbcG9zWzBdICsgbWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIG1heEJvdW5kcy50b3BdO1xuXG5cdFx0XHRpZiAodGV4dEVsKVxuXHRcdFx0XHR0ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHRsZWZ0OiBwb3NbMF0gKyBcInB4XCIsXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxuXHRcdFx0XHR3aWR0aDogbWF4Qm91bmRzLndpZHRoICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiBtYXhCb3VuZHMuaGVpZ2h0ICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LWZhbWlseVwiOiBsYWJlbENvbmZpZy5mb250RmFtaWx5LFxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiAobGFiZWxDb25maWcuZm9udFNpemUgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IChsYWJlbENvbmZpZy5mb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRCA/ICdib2xkJyA6ICdub3JtYWwnXG5cdFx0XHRcdC8qXCJjb2xvclwiOiBsYWJlbENvbmZpZy5mb250Q29sb3IqL1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBib3guX2xhYmVsO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RhcnQnLCBbdGhpcy5rZXldKTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24oY2FuY2VsKSB7XG5cdFx0XHRpZiAoIXRoaXMudmlzaWJsZSgpKSByZXR1cm47XG5cblx0XHRcdGNhbmNlbCA9IGNhbmNlbCB8fCBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRleHRFbClcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0aWYgKCFjYW5jZWwpXG5cdFx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3IudXBkYXRlJywgW3RoaXMua2V5LCB0aGlzLmlucHV0LnZhbHVlXSk7XG5cblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RvcCcsIFt0aGlzLmtleV0pO1xuXHRcdFx0ZGVsZXRlIHRoaXMua2V5O1xuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xuXHRcdFx0ZGVsZXRlIHRoaXMucmVmRWw7XG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0RWw7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Rk9OVF9CT0xELFxuXHRcdEZPTlRfSVRBTElDLFxuXHRcdEZPTlRfVU5ERVJMSU5FLFxuXHRcdEZPTlRfU0hBRE9XLFxuXHRcdGdldFN0cmluZ1NpemUsXG5cdFx0d3JhcCxcblx0XHRnZXRMYWJlbEJveCxcblx0XHRnZXRMYWJlbEJveEZvckxpbmssXG5cdFx0cmVuZGVyLFxuXHRcdGVkaXRvclxuXHR9O1xufSkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTGFiZWwuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuXG5jbGFzcyBFZGdlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnRScpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xuXHR9XG5cblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAnc291cmNlJyk7XG5cdH1cblxuXHRzZXRUYXJnZXQobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcblx0ICovXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xuXHRcdGlmIChlbmQgPT0gbm9kZSkge1xuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXG5cdFx0XHRpZiAobm9kZSlcblx0XHRcdFx0bm9kZS5zZXRFZGdlQXQodGhpcywgcG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGVuZCkge1xuXHRcdFx0XHQvLyBmaXJzdCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBlbmRcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdFx0bm9kZS5hZGRPdXRFZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoJ2xhYmVsJyk7XG5cdFx0aWYgKGxhYmVsKVxuXHRcdFx0cmV0dXJuIExhYmVsLmdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCB0aGlzLmdldFNoYXBlKGtleSkpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXG5cdCAqL1xuXHRnZXRSZWZlcmVuY2VQb2ludHMoa2V5KSB7XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdGlmICh0aGlzLnNvdXJjZSlcblx0XHRcdHB0cy5wdXNoKHRoaXMuc291cmNlLmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxuXHRcdFx0cHRzLnB1c2godGhpcy50YXJnZXQuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xuXG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFRlcm1pbmFsVmlzdWFsKGtleSwgb3J0aG9nb25hbCkge1xuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xuXHRcdGxldCB0ZXJtaW5hbHMgPSBbXTtcblxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShwdC54LCBwdC55LCAzLCAzKTtcblx0XHR9O1xuXG5cdFx0aWYgKHRoaXMuc291cmNlKSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnNvdXJjZS5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCdzb3VyY2VQb3J0JyksIHJlZlB0c1sxXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMF0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMF0pLCByZWZQdHNbMV0sIHRydWUpfSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3RhcmdldFBvcnQnKSwgcmVmUHRzWzBdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcblx0XHRyZXR1cm4gdGVybWluYWxzO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XG5cdH1cbn1cbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuXG4vKlxuXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJhbGxvd0RhbmdsaW5nRWRnZXNcIikpIHtcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xuXHR9IGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UgJiYgdGhpcy50YXJnZXQgJiYgdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpICYmIHRoaXMuc291cmNlLmlzVmlzaWJsZSgpICYmIHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0VkZ2UuanNcbiAqKi8iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XG5cblx0LyoqIEJlZ2luIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTIqc2lnbiwgMF0sIFstNCpzaWduLCA0XSwgWzQqc2lnbiwgMF0sIFstNCpzaWduLCAtNF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy01KnNpZ24sIC01XSwgWy01KnNpZ24sIDVdLCBbNCpzaWduLCAwXV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHIgPSBzaXplIC8gMjtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzAsIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCInICsgciArICdcIiByeT1cIicgKyByICsgJ1wiPjwvZWxsaXBzZT4nO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICcnO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblx0LyoqIEVuZCBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XG5cdFx0dmFyIGZhY3RvcnkgPSByZWdpc3RyeVtjb25maWcudHlwZV07XG5cdFx0dmFyIG1hcmtlciA9IGZhY3RvcnkoY29uZmlnLnNpemUsIHNvdXJjZSwgY29uZmlnKTtcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdHJlZ2lzdHJ5WydhcnJvdyddID0gYXJyb3c7XG5cdHJlZ2lzdHJ5Wyd0cmlhbmdsZSddID0gdHJpYW5nbGU7XG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xuXHRyZWdpc3RyeVsnZGlhbW9uZCddID0gZGlhbW9uZDtcblxuXHRyZXR1cm4ge1xuXHRcdHJlZ2lzdHJ5OiByZWdpc3RyeSxcblx0XHRnZXRNYXJrZXI6IGdldE1hcmtlclxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L01hcmtlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5jbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcblx0XHRpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwib3JpZW50YXRpb25cIikgJiYgXy5pc1N0cmluZyhjb25maWcub3JpZW50YXRpb24pKSB7XG5cdFx0XHRpZiAoY29uZmlnLm9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkgPT0gXCJIT1JJWk9OVEFMXCIpXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWxldGUgY29uZmlnLm9yaWVudGF0aW9uO1xuXHRcdH1cblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdH1cblxuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7fVxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuTGF5b3V0LlZFUlRJQ0FMID0gMDtcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcblxuTGF5b3V0LkRFRkFVTFRTID0ge1xuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvTGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcblxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XG5cdGxheW91dChyb290LCBib3VuZHMpIHtcblx0XHR2YXIgaXRlbXM7XG5cdFx0aWYgKCFyb290KVxuXHRcdFx0aXRlbXMgPSB0aGlzLm93bmVyLmNoaWxkTm9kZXM7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHJvb3QpKVxuXHRcdFx0aXRlbXMgPSByb290O1xuXHRcdGVsc2Vcblx0XHRcdGl0ZW1zID0gcm9vdC5nZXRMaW5rZWROb2RlcygndGFyZ2V0Jyk7XG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG5cdFx0dmFyIHggPSAwLCB5ID0gMCwgaCA9IDAsIG5vZGU7XG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vZGUgPSBpdGVtc1tpXTtcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XG5cdFx0XHRcdC8vIGNyZWF0ZSBuZXcgbGluZVxuXHRcdFx0XHR5ICs9IGggKyB0aGlzLnZnYXA7XG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5fZmxQb3MgPSBbcDEsIHAyXTtcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xuXHRcdFx0eCArPSB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIik7XG5cdFx0XHRwMSsrO1xuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcihuZXcgUmVjdGFuZ2xlKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCB5ICsgaCkpO1xuXHR9XG59XG5cbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XG5cdGhnYXA6IDEwLFxuXHR2Z2FwOiAxMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvd0xheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30sIGdyYXBoID0gbnVsbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmJveCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogdGhpcy5pZCwgdGFiaW5kZXg6IDAsIG5zOiAnZ3JhcGgnfSwge292ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiAncmVsYXRpdmUnfSk7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcblx0XHRpZiAoY29uZmlnLmxheW91dCkge1xuXHRcdFx0bGV0IGxheW91dENsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IoY29uZmlnLmxheW91dC5qc0NsYXNzLCBMYXlvdXQpO1xuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgbGF5b3V0Q2xhc3MoY29uZmlnLmxheW91dC5jb25maWcpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5sYXlvdXQ7XG5cdFx0fVxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xuXHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHR0aGlzLl9zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHR0aGlzLmdyYXBoQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMubm9kZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmVkZ2VCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5jb25uZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblxuXHRcdEV2ZW50cy5vbihMYWJlbC5lZGl0b3IsICdlZGl0b3IudXBkYXRlLionLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhrZXkgKyAnPScgKyB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgZ3JhcGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0c2V0IGdyYXBoKGdyYXBoKSB7XG5cdFx0dGhpcy5fZ3JhcGggPSBncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoLmN1cnJlbnRSb290O1xuXHRcdGlmIChyb290KSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUgPSBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHRcdHRoaXMuX3NjYWxlID0gcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnKSB8fCAxLjA7XG5cdFx0fVxuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdmlld3BvcnQpO1xuXHRcdHZhciB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XG5cdFx0dmFyIHNjYWxlID0gdyAvIHZpZXdwb3J0LndpZHRoO1xuXHRcdHRoaXMudHJhbnNmb3JtKC12aWV3cG9ydC54KnNjYWxlLCAtdmlld3BvcnQueSpzY2FsZSwgc2NhbGUpO1xuXHR9XG5cblx0Z2V0IHRyYW5zbGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZTsgfVxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cblx0Z2V0IHNjYWxlKCkgeyByZXR1cm4gdGhpcy5fc2NhbGU7IH1cblx0c2V0IHNjYWxlKGspIHtcblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAqIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm91dFwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4ID0gbnVsbCwgeSA9IG51bGwsIHNjYWxlID0gbnVsbCkge1xuXHRcdGxldCBncmFwaCA9IHRoaXMuZ3JhcGg7XG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcblx0XHRpZiAoIV8uaXNOdWxsKHgpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMF0gPSB4O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnLCB4KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzFdID0geTtcblx0XHRcdGlmIChyb290KVxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XG5cdFx0fVxuXHRcdGlmICghXy5pc051bGwoc2NhbGUpKSB7XG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJywgc2NhbGUpO1xuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXG5cdFx0XHRsZXQgcyA9IHRoaXMuZGlzcGF0Y2hlci5zY2FsZTtcblx0XHRcdGlmIChzICE9IHNjYWxlKVxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcblx0XHR9XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5jdXJyZW50Um9vdCwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcblx0XHRcdGxldCBqc0NsYXNzO1xuXHRcdFx0aWYgKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKSB7XG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQsIHRoaXMuc2NhbGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLionLCAnem9vbSonXSwgZnVuY3Rpb24odHlwZSwgbnMsIHRhcmdldCwgcG9zLCBldmVudCkge1xuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRyZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGluayhzaGFwZSk7XG5cdH1cblxuXHRyZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XG5cdFx0XHR0ID0gdChjb25maWcpO1xuXHRcdH1cblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHR0b0RhdGFVUkwoZm9ybWF0LCBvcHRpb25zKSB7fVxuXHRyZXNldCgpIHt9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5fZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMubGF5b3V0O1xuXHRcdGlmICh0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zdG9wKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5kaXNwYXRjaGVyO1xuXHRcdH1cblx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuUmVuZGVyZXIuREVGQVVMVFMgPSB7XG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcblx0c2luZ2xlU2VsZWN0OiB0cnVlLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcblx0Z3VpZGVzRW5hYmxlZDogdHJ1ZSxcblx0Z3JpZFNpemU6IDMwLFxuXHRtYXhab29tOiA0LjAsXG5cdG1pblpvb206IDAuMixcblx0em9vbUZhY3RvcjogMS4yLFxuXHRtYXNrT3BhY2l0eTogMC41LFxuXHRncmFwaEJlaGF2aW9yOiBHcmFwaEJlaGF2aW9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzI4LzIwMTYuXG4gKi9cbmltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xuXG4vKipcbiAqIEdyYXBoIGhhbmRsZXIgaGFuZGxlcyBQYW5uaW5nIGFuZCBab29tIGFuZCBydWJiZXIgYmFuZCBzZWxlY3Rpb25cbiAqL1xuY2xhc3MgR3JhcGhCZWhhdmlvciBleHRlbmRzIEJlaGF2aW9yIHtcblx0Y29uc3RydWN0b3IocmVuZGVyZXIpIHtcblx0XHRzdXBlcihyZW5kZXJlcik7XG5cdFx0bGV0IGRpc3BhdGNoZXIgPSByZW5kZXJlci5kaXNwYXRjaGVyO1xuXHRcdGxldCBmID0gZnVuY3Rpb24odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IodHlwZSwgbnMsIGdyYXBoLCBldmVudCk7XG5cdFx0fTtcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlRHJhZywgdGhpcyk7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3Rlcignem9vbS4qJywgdGhpcy5oYW5kbGVab29tLCB0aGlzKTtcblx0XHQvL2Rpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uZ3JhcGgnLCAnbW91c2VlbnRlci5ncmFwaCcsICdtb3VzZWxlYXZlLmdyYXBoJ10sIGYpO1xuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcblx0fVxuXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0obnVsbCwgbnVsbCwgZXZlbnQuc2NhbGUpO1xuXHR9XG5cblx0aGFuZGxlRHJhZyh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xuXHRcdFx0aWYgKCFwYW4pIHJldHVybjtcblx0XHRcdGxldCB0ID0gdGhpcy5yZW5kZXJlci50cmFuc2xhdGU7XG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKHBvc1swXSArIHRoaXMub2Zmc2V0WzBdLCBwb3NbMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHRcdGRlbGV0ZSB0aGlzLm9mZnNldDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3IuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRsZXQgcm9vdCA9IHRoaXMuZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XG5cdFx0XHRidWYuYXBwZW5kKCc8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJykuYXBwZW5kKHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZCh0WzFdKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQodGhpcy5zY2FsZSkuYXBwZW5kKCcpXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdFNWR1JlbmRlcmVyLnNldENvbnRlbnQodGhpcy5ib3gsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdHRoaXMuc3ZnID0gdGhpcy5ib3guZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyRGVmcygpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPGRlZnM+Jyk7XG5cdFx0YnVmLmFwcGVuZCh0aGlzLmdldFRlbXBsYXRlKCdHcmlkJywgdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikpKTtcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgubWFya2Vycztcblx0XHRpZiAobWFya2Vycy5sZW5ndGggPiAwKVxuXHRcdFx0YnVmLmFwcGVuZChTVkdSZW5kZXJlci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpKTtcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHRpZiAoIXRoaXMuc3ZnKSByZXR1cm47XG5cdFx0bGV0IGcgPSB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdnJyk7XG5cdFx0bGV0IHQgPSB0aGlzLnRyYW5zbGF0ZTtcblx0XHRnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdFswXSArICcsJyArIHRbMV0gKyAnKXNjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknKTtcblx0fVxuXG5cdHRvRGF0YVVSTChmb3JtYXQsIG9wdGlvbnMpIHtcblx0XHRTVkdSZW5kZXJlci50b0RhdGFVUkwodGhpcy5zdmcsIGZvcm1hdCwgb3B0aW9ucyk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgc3RyMSwgc3RyMjtcblx0XHRmb3IgKGxldCBtYXJrZXIgb2YgbWFya2Vycykge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLlRFTVBMQVRFU1snTGFiZWwnXShib3gpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlclNoYXBlKHNoYXBlKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gdGhpcy5URU1QTEFURVNbc2hhcGUubmFtZV07XG5cdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUoc2hhcGUpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cblx0XHRcdGxldCBuZXdQdHMgPSBbXTtcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkMSA9IHByZXYuZGlzdGFuY2UobmV4dCk7XG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcblx0XHRcdFx0Ly8gc3BsaXQgdGhlIHBvaW50IGludG8gdHdvLlxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdHByZXYgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cdFx0XHRwb2ludHMgPSBuZXdQdHM7XG5cdFx0fVxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgQyAnKTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgZCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdGJ1Zi5jbGVhcigpO1xuXHRcdGlmIChzaGFwZS5zaG93R2F1Z2UpXG5cdFx0XHRidWYuYXBwZW5kKCc8cGF0aCBzdHlsZT1cInN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogOTsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1wiIGQ9XCInKVxuXHRcdFx0XHQuYXBwZW5kKGQpLmFwcGVuZCgnXCIvPicpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIGQ9XCInKS5hcHBlbmQoZCkuYXBwZW5kKCdcIicpO1xuXHRcdGlmIChzaGFwZS5zdGFydE1hcmtlciB8fCBzaGFwZS5lbmRNYXJrZXIpIHtcblx0XHRcdGJ1Zi5hcHBlbmQoJyBzdHlsZT1cIicpO1xuXHRcdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItc3RhcnQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuc3RhcnRNYXJrZXIpID8gc2hhcGUuc3RhcnRNYXJrZXIgOiBzaGFwZS5zdGFydE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xuXHRcdFx0aWYgKHNoYXBlLmVuZE1hcmtlcilcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLWVuZDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5lbmRNYXJrZXIpID8gc2hhcGUuZW5kTWFya2VyIDogc2hhcGUuZW5kTWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRidWYuYXBwZW5kKCdcIicpO1xuXHRcdH1cblx0XHRidWYuYXBwZW5kKCcvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyB0b0RhdGFVUkwoc3ZnLCBmb3JtYXQsIG9wdGlvbnMpIHtcblx0XHRpZiAoIWNhbnZnKSByZXR1cm4gbnVsbDtcblx0XHR2YXIgYmJveCA9IHN2Zy5nZXRCQm94KCk7XG5cdFx0dmFyIGNhbnZhcyA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0XHRjYW52ZyhjYW52YXMsICc8c3ZnIHN0eWxlPVwid2lkdGg6ICcgKyBiYm94LndpZHRoICsgJ3B4OyBoZWlnaHQ6ICcgKyBiYm94LmhlaWdodCArICdweDtcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJyArIGJib3gud2lkdGggLyAyICsgJywnICsgYmJveC5oZWlnaHQgLyAyICsgJylzY2FsZSgnICsgdGhpcy50cmFuc2Zvcm0uc2NhbGUgICsgJylcIj4nICsgJCh0aGlzLmcubm9kZSgpKS5wcm9wKCdpbm5lckhUTUwnKSArICc8L2c+PC9zdmc+Jyk7XG5cdFx0dmFyIGltYWdlID0gY2FudmFzLnRvRGF0YVVSTChmb3JtYXQpO1xuXHRcdGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY2FudmFzKTtcblx0XHRyZXR1cm4gaW1hZ2U7XG5cdH1cblxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0c3RhdGljIHNldENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRpZiAoRG9tVXRpbHMuaXNJRSkge1xuXHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRsZXQgY2hpbGQ7XG5cdFx0XHR3aGlsZSAoY2hpbGQgPSBlbC5sYXN0Q2hpbGQpXG5cdFx0XHRcdGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFNWR1JlbmRlcmVyLmFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpO1xuXHRcdH0gZWxzZVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gY29udGVudDtcblx0XHRyZXR1cm4gZWw7XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0sJHt5fSlcIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdEVsbGlwc2U6ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIiR7d2lkdGgvMn1cIiByeT1cIiR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJlY3RhbmdsZTogJzxyZWN0IHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgcng9XCI5XCIgcnk9XCI5XCIvPicsXG5cdFRyaWFuZ2xlOiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzJ9IDAsJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmhvbWJ1czogJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LDBcIi8+Jyxcblx0SGV4YWdvbjogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0dmFyIHZlcnRpY2FsID0gY29uZmlnLmRpcmVjdGlvbiA9PSAnbm9ydGgnIHx8IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ3NvdXRoJztcblx0XHRpZiAodmVydGljYWwpXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzR9ICR7d2lkdGgvMn0sJHtoZWlnaHQvNH0gMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwke2hlaWdodC80fSAkey13aWR0aC8yfSwkey1oZWlnaHQvNH1cIi8+Jztcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LDAgJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwICR7d2lkdGgvNH0sJHtoZWlnaHQvMn0gJHstd2lkdGgvNH0sJHtoZWlnaHQvMn1cIi8+Jztcblx0fSxcblx0UG9seWdvbjogZnVuY3Rpb24oc2hhcGUpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHBvbHlnb24gcG9pbnRzPVwiJyk7XG5cdFx0Zm9yIChsZXQgcHQgb2Ygc2hhcGUucG9pbnRzKVxuXHRcdFx0YnVmLmFwcGVuZChwdFswXSkuYXBwZW5kKCcsJykuYXBwZW5kKHB0WzFdKS5hcHBlbmQoJyAnKTtcblx0XHRidWYucmVtb3ZlTGFzdCgpO1xuXHRcdGJ1Zi5hcHBlbmQoJ1wiLz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH0sXG5cdEltYWdlOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHRyZXR1cm4gJzxpbWFnZSB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWY9XCInICsgY29uZmlnLmltYWdlICsgJ1wiLz4nO1xuXHR9LFxuXHRNYXJrZXI6IGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdHJldHVybiBgXG48bWFya2VyIGlkPVwiJHttYXJrZXIuaWR9XCIgbWFya2VyV2lkdGg9XCIke21hcmtlci5zaXplfVwiIG1hcmtlckhlaWdodD1cIiR7bWFya2VyLnNpemV9XCIgcmVmeD1cIiR7bWFya2VyLnJlZlswXX1cIiBcbnJlZnk9XCIke21hcmtlci5yZWZbMV19XCIgb3JpZW50PVwiYXV0b1wiIHZpZXdib3g9XCIke21hcmtlci52aWV3Qm94Lnh9ICR7bWFya2VyLnZpZXdCb3gueX0gJHttYXJrZXIudmlld0JveC53aWR0aH0gJHttYXJrZXIudmlld0JveC5oZWlnaHR9XCJcbm1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiAke21hcmtlci5maWxsID8gYHN0eWxlPVwic3Ryb2tlOiAke21hcmtlci5maWxsfTtmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XG5gLnRyaW0oKTtcblx0fSxcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xuXHRcdHJldHVybiBgXG48cGF0dGVybiBpZD1cIkdyaWRQYXR0ZXJuXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuPC9wYXR0ZXJuPmAudHJpbSgpO1xuXHR9LFxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcbiAgIGlmIChib3gpIHslPlxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cblx0PCUgaWYgKGJveC5jb25maWcuYmFja2dyb3VuZFN0eWxlKSB7JT5cblx0XHQ8cmVjdCB4PVwiPCU9LWJveC5ib3VuZHMud2lkdGgvMiU+XCIgeT1cIjwlPS1ib3guYm91bmRzLmhlaWdodC8yJT5cIiB3aWR0aD1cIjwlPWJveC5ib3VuZHMud2lkdGglPlwiIGhlaWdodD1cIjwlPWJveC5ib3VuZHMuaGVpZ2h0JT5cIiBzdHlsZT1cIjwlPWJveC5jb25maWcuYmFja2dyb3VuZFN0eWxlJT5cIi8+XG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxuXHRcdF8uZWFjaChib3gubGFiZWwsIGZ1bmN0aW9uKHZhbHVlLCBsaW5lKSB7JT5cblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxuXHRcdDwlfSk7fSBlbHNlIHsgJT5cblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+XG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9