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
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
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
			key: "export",
			value: function _export(format, options) {}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBhNTcyMWNiYTUxYjJlNGE4OTMwMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxpQkFBTSxRQUFOLENBQWUsV0FBZjtBQUNBLGlCQUFNLFFBQU4sQ0FBZSxTQUFmOzttQkFFZTtBQUNkLHdCQURjO0FBRWQsd0JBRmM7QUFHZCx3QkFIYztBQUlkLDhCQUpjO0FBS2Qsc0NBTGM7QUFNZCx3QkFOYztBQU9kLHNCQVBjO0FBUWQsd0JBUmM7QUFTZCxnQ0FUYztBQVVkLDRCQVZjO0FBV2Qsc0JBWGM7QUFZZCw0Q0FaYztBQWFkLHdCQWJjO0FBY2QsMEJBZGM7QUFlZCx3QkFmYztBQWdCZCxzQkFoQmM7QUFpQmQsc0JBakJjO0FBa0JkLHNCQWxCYztBQW1CZCwwQkFuQmM7QUFvQmQsa0NBcEJjO0FBcUJkLDhCQXJCYztBQXNCZCxvQ0F0QmM7QUF1QmQsd0NBdkJjOzs7Ozs7O0FDM0JmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlCOztBQUV6QjtBQUNBLHlDQUF3QztBQUN4QyxzQ0FBcUM7QUFDckMsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBbUIsbUJBQW1CO0FBQ3RDO0FBQ0EsUUFBTyxHQUFHOztBQUVWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCLDBCQUF5QjtBQUN6QjtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLHdCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBLGtCQUFpQjtBQUNqQjtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0EsOEJBQTZCOztBQUU3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLDhCQUE2QjtBQUM3QjtBQUNBLDhCQUE2QjtBQUM3QixxREFBb0QsT0FBTztBQUMzRCx3REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVDQUFzQyxLQUFLO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2REFBNEQ7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtB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QVAsQ0FBVyxDQUFYLHNDQUF5QyxPQUFPLE9BQVAsQ0FBZSxDQUFmLFNBQW9CLE9BQU8sT0FBUCxDQUFlLENBQWYsU0FBb0IsT0FBTyxPQUFQLENBQWUsS0FBZixTQUF3QixPQUFPLE9BQVAsQ0FBZSxNQUFmLDRDQUNsRixPQUFPLElBQVAsd0JBQWdDLE9BQU8sSUFBUCxjQUFvQixPQUFPLElBQVAsT0FBcEQsR0FBcUUsRUFBckUsMkJBSHRCLENBSVAsSUFKTyxFQUFQLENBRHdCO0dBQWpCO0FBT1IsUUFBTSxjQUFTLElBQVQsRUFBZTtBQUNwQixVQUFPLDRDQUMwQix3QkFBaUIsNklBRTdCLHFFQUNQLDhFQUNBLG9CQUFhLDZEQUxwQixDQU1HLElBTkgsRUFBUCxDQURvQjtHQUFmO0FBU04sU0FBTyxpQkFBRSxRQUFGLENBQVcsZ2pDQWtCakIsSUFsQmlCLEVBQVgsRUFrQkUsRUFBQyxVQUFVLE1BQVYsRUFsQkgsQ0FBUDtFQTFDRDs7bUJBK0RlLFkiLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGE1NzIxY2JhNTFiMmU0YTg5MzAwXG4gKiovIiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5cblNoYXBlLmFkZFNoYXBlKFwiUmVjdGFuZ2xlXCIsIFJlY3RhbmdsZSk7XG5TaGFwZS5hZGRTaGFwZShcIkVsbGlwc2VcIiwgRWxsaXBzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RXZlbnRzLFxuXHRDYWNoZSxcblx0VXRpbHMsXG5cdERvbVV0aWxzLFxuXHRTdHJpbmdCdWZmZXIsXG5cdFBvaW50LFxuXHRMaW5lLFxuXHRTaGFwZSxcblx0UmVjdGFuZ2xlLFxuXHRFbGxpcHNlLFxuXHRMaW5rLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdExhYmVsLFxuXHRNYXJrZXIsXG5cdEdyYXBoLFxuXHRDZWxsLFxuXHROb2RlLFxuXHRFZGdlLFxuXHRMYXlvdXQsXG5cdEZsb3dMYXlvdXQsXG5cdFJlbmRlcmVyLFxuXHRTVkdSZW5kZXJlcixcblx0R3JhcGhCZWhhdmlvclxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlYW4vYmVhbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG4vLyB1dGlsIHZhcmlhYmxlc1xubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUsIHR5cGUpIHtcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSBuZXcgTWFwKCk7XG5cdFx0aWYgKCFuYW1lKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5nZXQobmFtZSk7XG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xuXHR9LFxuXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSwgcHJvcHMsIGRlZmF1bHRUeXBlKSB7XG5cdFx0bGV0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdHlwZSBleGlzdHNcblx0XHRsZXQgdHlwZSA9IHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUpO1xuXHRcdGlmICghdHlwZSkge1xuXHRcdFx0bGV0IGV4dGVuZCA9IHByb3BzLmV4dGVuZHMgPyB0aGlzLnR5cGUobmFtZXNwYWNlLCBwcm9wcy5leHRlbmRzKSA6IG51bGw7XG5cdFx0XHRpZiAoIWV4dGVuZCAmJiBkZWZhdWx0VHlwZSlcblx0XHRcdFx0ZXh0ZW5kID0gZGVmYXVsdFR5cGU7XG5cdFx0XHRpZiAoZXh0ZW5kKVxuXHRcdFx0XHR0eXBlID0gY2xhc3MgZXh0ZW5kcyBleHRlbmQge307XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHlwZSA9IGNsYXNzIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdFx0XHRcdF8uYXNzaWduKHRoaXMsIGNvbmZpZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHByb3BzLm5hbWU7XG5cdFx0XHRkZWxldGUgcHJvcHMuZXh0ZW5kcztcblx0XHRcdF8uYXNzaWduKHR5cGUucHJvdG90eXBlLCBwcm9wcyk7XG5cdFx0XHR0eXBlLnR5cGVOYW1lID0gbmFtZTtcblx0XHRcdHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUsIHR5cGUpO1xuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmNyZWF0ZVR5cGUgLSAnICsgbmFtZXNwYWNlICsgJy4nICsgbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlO1xuXHR9LFxuXG5cdGJ1aWxkVHlwZXM6IGZ1bmN0aW9uKHR5cGVzLCBuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKSB7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcblxuXHRcdGlmICghdHlwZXMgJiYgZGVmYXVsdFR5cGUpIHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcblx0XHRcdGxldCB0eXBlID0gXy5yZW1vdmUodHlwZXMsIHtuYW1lOiBkZWZhdWx0VHlwZS5uYW1lfSk7XG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBfLmFzc2lnbih7fSwgZGVmYXVsdFR5cGUsIHR5cGUpKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fVxuXG5cdFx0Xy5mb3JFYWNoKHR5cGVzLCAodHlwZSkgPT4ge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHR9LFxuXG5cdC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxuXHQvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxuXHRleHRlbmQ6IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG5cdFx0Ly8gQWRkIHN0YXRpYyBwcm9wZXJ0aWVzIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgaWYgc3VwcGxpZWQuXG5cdFx0Xy5leHRlbmQoY2hpbGQsIHBhcmVudCwgc3RhdGljUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBwcm90b3R5cGUgY2hhaW4gdG8gaW5oZXJpdCBmcm9tIGBwYXJlbnRgLCB3aXRob3V0IGNhbGxpbmdcblx0XHQvLyBgcGFyZW50YCdzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuXHRcdHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG5cdFx0U3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuXHRcdC8vIEFkZCBwcm90b3R5cGUgcHJvcGVydGllcyAoaW5zdGFuY2UgcHJvcGVydGllcykgdG8gdGhlIHN1YmNsYXNzLFxuXHRcdC8vIGlmIHN1cHBsaWVkLlxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcblxuXHRcdHJldHVybiBjaGlsZDtcblx0fSxcblxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbihvYmosIGNvbmZpZykge1xuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xuXHRcdHdoaWxlIChjKSB7XG5cdFx0XHRpZiAoYy5zdXBlcikge1xuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0c3BsaWNlLmFwcGx5KGNBcnIsIFswLCAwLCBjXSk7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0YyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjID0gY0FycltpXTtcblx0XHRcdGlmIChjLkRFRkFVTFRTKVxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XG5cdFx0fVxuXHRcdG9iai5wcm9wcyA9IF8uYXNzaWduKHByb3BzLCBjb25maWcpO1xuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSlcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdFx0fTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyB0aGUgSlMgY2xhc3MgY29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBqc0NsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q2xhc3Ncblx0ICovXG5cdGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHRpZiAoIWpzQ2xhc3MpXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xuXG5cdFx0aWYgKF8uaXNTdHJpbmcoanNDbGFzcykpXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcblx0XHRyZXR1cm4ganNDbGFzcztcblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24obW9kdWxlTmFtZSkge1xuXHRcdGlmIChtb2R1bGVOYW1lKSB7XG5cdFx0XHRfZGVidWdnaW5nLnB1c2gobW9kdWxlTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9kZWJ1Z0FsbCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cdGxvZzogZnVuY3Rpb24obmFtZSwgbWVzc2FnZSkge1xuXHRcdGlmICghd2luZG93LmNvbnNvbGUpIHsgcmV0dXJuOyB9XG5cdFx0dmFyIGRlYnVnID0gX2RlYnVnQWxsO1xuXHRcdGlmICghX2RlYnVnQWxsKSB7XG5cdFx0XHRkZWJ1ZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGk8X2RlYnVnZ2luZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoX2RlYnVnZ2luZ1tpXT09bmFtZSkgZGVidWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWRlYnVnKSB7IHJldHVybjsgfVxuXHRcdHdoaWxlIChuYW1lLmxlbmd0aDwxMCkgeyBuYW1lPW5hbWUrJyAnOyB9XG5cdFx0bmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIDEwKStcIiAtIFwiO1xuXHRcdGNvbnNvbGUuaW5mbyhuYW1lLCBtZXNzYWdlKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBzdWIgc2hhcGVzIHdpdGhpbiBhIHBhcmVudCBzaGFyZS5cblx0ICogQHBhcmFtIGJvdW5kc1xuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIGdlb21ldHJ5IGluZm9ybWF0aW9uLCB0aGUgZm9ybWF0IG9mIEdlb21ldHJ5IGlzOlxuXHQgKiB7XG5cdCAqICAgICAgeDogXCJ4IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LCBpZiBsZXNzIHRoYW4gMSwgd2lsbCBiZSB0cmVhdGVkIGFzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBwYXJlbnQgd2lkdGguXCIsXG5cdCAqICAgICAgeTogXCJ5IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LlwiLFxuXHQgKiAgICAgIGFuY2hvclg6IFwieCBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIGFuY2hvclk6IFwieSBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIG9mZnNldFg6IFwidGhlIG9mZnNldCBpbiB0aGUgeCBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgb2Zmc2V0WTogXCJ0aGUgb2Zmc2V0IGluIHRoZSB5IGRpcmVjdGlvbi5cIixcblx0ICogICAgICB3aWR0aDogXCJ0aGUgd2lkdGggb2YgdGhlIGNoaWxkIGVsZW1lbnRcIixcblx0ICogICAgICBoZWlnaHQ6IFwidGhlIGhlaWdodCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiXG5cdCAqIH1cblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb246IGZ1bmN0aW9uKGJvdW5kcywgZ2VvbWV0cnkpIHtcblx0XHRsZXQgeCA9IE1hdGguYWJzKGdlb21ldHJ5LngpIDw9IDEgPyBib3VuZHMud2lkdGggKiBnZW9tZXRyeS54IDogZ2VvbWV0cnkueDtcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XG5cdFx0cmV0dXJuIHRoaXMub2Zmc2V0UG9zaXRpb24oW3gsIHldLCBnZW9tZXRyeSk7XG5cdH0sXG5cblx0b2Zmc2V0UG9zaXRpb246IGZ1bmN0aW9uKHBvcywgZ2VvbWV0cnkpIHtcblx0XHRyZXR1cm4gW3Bvc1swXSArIGdlb21ldHJ5LndpZHRoICogZ2VvbWV0cnkuYW5jaG9yWCArIGdlb21ldHJ5Lm9mZnNldFgsIHBvc1sxXSArIGdlb21ldHJ5LmhlaWdodCAqIGdlb21ldHJ5LmFuY2hvclkgKyBnZW9tZXRyeS5vZmZzZXRZXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHVuc2NhbGVkLCBpLmUuLCBhYnNvbHV0ZSBwb3NpdGlvbiB3aXRob3V0IGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRlXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHVuc2NhbGU6IGZ1bmN0aW9uKHQsIHNjYWxlLCBvKSB7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0sIG8ud2lkdGgqc2NhbGUsIG8uaGVpZ2h0KnNjYWxlKTtcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KG8ueCpzY2FsZSt0WzBdLCBvLnkqc2NhbGUrdFsxXSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIFtvWzBdKnNjYWxlK3RbMF0sIG9bMV0qc2NhbGUrdFsxXV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyBzY2FsZWQsIGkuZS4sIHJlbGF0aXZlIHBvc2l0aW9uIGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxuXHQgKi9cblx0c2NhbGU6IGZ1bmN0aW9uKHQsIHNjYWxlLCBvKSB7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdLXRbMF0pL3NjYWxlLCAob1sxXS10WzFdKS9zY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldFByb3BlcnR5OiBmdW5jdGlvbihvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLnByb3AgJiYgXy5pc0Z1bmN0aW9uKG9iai5wcm9wKSlcblx0XHRcdHJldHVybiBvYmoucHJvcChwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5uYW1lLCB0aGlzKSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XG5cdH1cblxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxuXHRcdGlmIChJZHggPiAwKVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHNBZ2VudC5zdWJzdHJpbmcoSWR4ICsgNSwgc0FnZW50LmluZGV4T2YoXCIuXCIsIElkeCkpKTtcblxuXHRcdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXG5cdFx0XHRyZXR1cm4gMTE7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpLFxuXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xuXHRcdC8vIEluc3RhbGxUcmlnZ2VyOiBGaXJlZm94J3MgQVBJIHRvIGluc3RhbGwgYWRkLW9uc1xuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXHR9KSgpLFxuXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoZWwsIGF0dHJpYnMsIHN0eWxlcyk7XG5cdFx0aWYgKGh0bWwpXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblxuXHRjcmVhdGVFbGVtZW50QnlTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XG5cdH0sXG5cblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcblx0XHRpZiAoYXR0cmlicykge1xuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXMpIHtcblx0XHRcdF8uZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdHRlc3RFbGVtZW50OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xuXHR9LFxuXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0aWYgKHRoaXMudGVzdEVsZW1lbnQobm9kZSwgbWV0aG9kKSApXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XG5cdH0sXG5cblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCB3ID0gZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQ7XG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0ICsgdy8yLCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wICsgaC8yXTtcblx0fSxcblxuXHRtb3ZlOiBmdW5jdGlvbihlbCwgeCwgeSkge1xuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHR9LFxuXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHcgPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0cmV0dXJuIFt3LCBoXTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XG5cdFx0aWYgKHcpIGVsLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCA9IHt9O1xuXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcblx0XHR2YXIgaW1nLCB0aGF0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhhdC5wcmVsb2FkSW1hZ2VzLmxvYWRlZFt0aGlzLm5hbWVdID0ge3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fTtcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxpc3QucHVzaChpbWcpO1xuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHNyY1xuXHQgKi9cblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWRbc3JjXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXG5cdCAqIEBwYXJhbSBlICBpbnB1dCBldmVudFxuXHQgKi9cblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xuXHRcdHZhciB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcblx0XHRyZXR1cm4gKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvRG9tVXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblx0Y29uc3RydWN0b3Ioc3RyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHRpZiAoc3RyKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xuXHR9XG5cblx0YXBwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcmVwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0fVxuXG5cdHJlbW92ZUxhc3QoKSB7XG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZyhzZXApIHtcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXG5cdCAqL1xuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xuXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzOlxuXHQgKlxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKi9cblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xuXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XG5cblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9Jztcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0dHlwZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiB0cnVlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0YW5jaG9yWDogMCxcblx0YW5jaG9yWTogMCxcblx0b2Zmc2V0WDogMCxcblx0b2Zmc2V0WTogMFxufTtcblxubGV0IGxpbmtUeXBlcyA9IHt9O1xuXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIGw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgbW9kaWZpZXJzIG9yIGxhYmVsLi5cblx0ICpcblx0ICogQHBhcmFtIGdlb21ldHJ5OiBkZWZpbmVzIGhvdyBmYXIgYWxvbmcgdGhlIGVkZ2Ugc2hvdWxkIHRoZSBwb2ludCBiZSBwbGFjZWQuXG5cdCAqIEByZXR1cm4gKltdIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA8PSAxKSBwICo9IGw7XG5cdFx0aWYgKHAgPCAwKSBwID0gbCArIHA7XG5cdFx0aWYgKHAgPiBsKSBwID0gbDtcblxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cywgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5rJztcblx0fVxuXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1R5cGVzW3NoYXBlQ29uZmlnLnR5cGVdO1xuXHRcdGlmIChsaW5rQ2xhc3MpXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHR5cGUgbm90IHN1cHBvcnRlZDogJyArIHNoYXBlQ29uZmlnLnR5cGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxufVxuXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cblxuXHRnZXQgY29udHJvbFB0cygpIHtcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IG51bGw7XG5cdFx0cHRzWzFdID0gW107XG5cdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XG5cdFx0aWYgKHAgPCAwKSBwKys7XG5cdFx0aWYgKHAgPiAxKSBwLS07XG5cblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XG5cdFx0bGV0IHAxID0gcHRzWzBdO1xuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcblx0XHRsZXQgcDQgPSBwdHNbMV07XG5cblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHZhciBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcblx0XHR2YXIgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xuXHRcdHZhciBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xuXHRcdHZhciBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdHZhciB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcblx0XHR2YXIgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcblxuXHRcdHZhciB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcblx0XHR2YXIgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xuXG5cdFx0dmFyIHNlZyA9IHRoaXMuc2VnbWVudDtcblxuXHRcdHZhciBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcblx0XHR2YXIgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcblxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xuXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxuXHRcdHtcblx0XHRcdHZhciB4ID0gKGlzU291cmNlTGVmdCkgP1xuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cblxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xuXHRcdFx0TUlOX0JVRkZFUjogMTAsXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxuXHRcdFx0bWF4Q2hhbm5lbFdpZHRoOiAxMDBcblx0XHR9KTtcblx0XHRzdXBlcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHtcblx0XHRsZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlSW50ZXJuYWwodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdHBvcyA9IE1hbmhhdHRhbi5wcm9jZXNzUG9zaXRpb25zKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCBwb3MsIHRoaXMuc3RhcnROb3JtYWwueCE9MCk7XG5cdFx0aWYgKHRoaXMuYXV0b1JvdXRlKSB7XG5cdFx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0XHR2YXIgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcblx0XHRcdHZhciBjb250YWluZXIgPSBlZGdlLnNvdXJjZS5nZXRDb21tb25BbmNlc3RvcihlZGdlLnRhcmdldCk7XG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGNvbnRhaW5lci5nZXREZXNjZW5kYW50cygpO1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRub2RlID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cblx0XHRcdFx0aWYgKG5vZGUuZXhjbHVkZUZyb21Sb3V0aW5nKGVkZ2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnNvdXJjZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2UudGFyZ2V0KSkgY29udGludWU7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2Uuc291cmNlKVxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnRhcmdldClcblx0XHRcdFx0ZW5kQm94ID0gaW5kZXg7XG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxuXHRcdFx0XHR0aGlzLmF1dG9Sb3V0ZShwb3MsIGNvbnRhaW5lci5nZXRCb3VuZHMoZG9jdW1lbnQpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0fVxuXHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYSByb3V0ZSBiYXNlZCBvbiB0aGUgc3RhcnQsIGVuZCBhbmQgc3RhcnROb3JtYWwgYW5kIGVuZE5vcm1hbFxuXHQgKiBOb25lIG9mIHRoZSBwYXJhbWV0ZXJzIGNhbiBiZSBudWxsXG5cdCAqIFRPRE86IFRoaXMgbWV0aG9kIGNvdWxkIHVzZSBzb21lIGltcHJvdmVtZW50Li4uXG5cdCAqL1xuXHRzdGF0aWMgcm91dGVJbnRlcm5hbChzdGFydCwgZW5kLCBzdGFydE5vcm1hbCwgZW5kTm9ybWFsLCBidWZmZXIpIHtcblx0XHR2YXIgZGlyZWN0aW9uID0gc3RhcnQuZ2V0RGlyZWN0aW9uKGVuZCk7XG5cdFx0dmFyIGF2ZXJhZ2UgPSBzdGFydC5nZXRNaWRQb2ludChlbmQpO1xuXHRcdHZhciBwb3MgPSBbXTtcblx0XHR2YXIgc3RhcnRQb3NpdGl2ZSA9IG5ldyBQb2ludChzdGFydE5vcm1hbC54KnN0YXJ0Tm9ybWFsLngsIHN0YXJ0Tm9ybWFsLnkqc3RhcnROb3JtYWwueSk7XG5cdFx0dmFyIGVuZFBvc2l0aXZlID0gbmV3IFBvaW50KGVuZE5vcm1hbC54KmVuZE5vcm1hbC54LCBlbmROb3JtYWwueSplbmROb3JtYWwueSk7XG5cdFx0dmFyIGhvcml6b250YWwgPSBzdGFydE5vcm1hbC54ICE9IDA7XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnkgOiBzdGFydC54O1xuXG5cdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdHZhciBpO1xuXHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPT0gMCkge1xuXHRcdFx0aWYgKChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0JiYgKGVuZE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPD0gMCkpIHtcblx0XHRcdFx0Ly8gMFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gMlxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMClcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cblx0XHRcdFx0aWYgKGVuZE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPiAwKVxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA+IDApIHtcblx0XHRcdFx0Ly8xXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8zIG9yIDFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApIHtcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwb3MucHVzaChob3Jpem9udGFsID8gZW5kLnkgOiBlbmQueCk7XG5cblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Ly8gUHJvY2VzcyB0aGUgcG9zaXRpb25zLlxuXHRzdGF0aWMgcHJvY2Vzc1Bvc2l0aW9ucyhzdGFydCwgZW5kLCBwb3NpdGlvbnMsIGhvcml6b250YWwpIHtcblx0XHR2YXIgcG9zID0gW107XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnggOiBzdGFydC55O1xuXHRcdHZhciBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvc1tpICsgMV0gPSBwb3NpdGlvbnNbaV07XG5cdFx0fVxuXHRcdHBvcy5wdXNoKChob3Jpem9udGFsID09IChwb3NpdGlvbnMubGVuZ3RoICUgMiA9PSAxKSkgPyBlbmQueCA6IGVuZC55KTtcblxuXHRcdHZhciBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBzdGFydDtcblx0XHR2YXIgcDtcblx0XHR2YXIgY3VycmVudCwgcHJldjtcblx0XHRmb3IgKGkgPSAyOyBpIDwgcG9zLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0cHJldiA9IHBvc1tpIC0gMV07XG5cdFx0XHRjdXJyZW50ID0gcG9zW2ldO1xuXHRcdFx0cCA9IGhvcml6b250YWwgPyBuZXcgUG9pbnQocHJldiwgY3VycmVudCkgOiBuZXcgUG9pbnQoY3VycmVudCwgcHJldik7XG5cdFx0XHRwdHMucHVzaChwKTtcblx0XHR9XG5cdFx0cHRzLnB1c2goZW5kKTtcblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxuXHQgKi9cblx0YXV0b1JvdXRlKHB0cywgY29udGFpbmVyLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XG5cdFx0dmFyIGNoYW5uZWwsIGNoYW5uZWwyLCBwdCwgZGlyO1xuXG5cdFx0dmFyIHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XG5cdFx0Ly8gZmlyc3QgZ2V0IHRoZSBzdGFydCBhbmQgZW5kIGNoYW5uZWxcblx0XHRib3ggPSBib3hlc1tlbmRCb3hdO1xuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcblx0XHRpZiAocHQueSA8IGJveC55KVxuXHRcdFx0c2lkZSA9IDE7XG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcblx0XHRcdHNpZGUgPSAzO1xuXHRcdGVsc2UgaWYgKHB0LnggPCBib3gueClcblx0XHRcdHNpZGUgPSAwO1xuXHRcdGVsc2Vcblx0XHRcdHNpZGUgPSAyO1xuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xuXHRcdGVuZFBhZGRpbmcgPSBjaGFubmVsLmhvcml6b250YWwgPyAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCkvMiA6IChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wKS8yO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAocHRzW2krMV0ueCA9PSBwdHNbaV0ueCAmJiBwdHNbaSsxXS55ID09IHB0c1tpXS55KSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdCA9IF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcblx0XHRcdGogPSBpbnRlcnNlY3RbMF07XG5cdFx0XHRzaWRlID0gaW50ZXJzZWN0WzFdO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZSk7XG5cdFx0XHRzd2l0Y2goc2lkZSkge1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludCgoY2hhbm5lbC5yaWdodCArIGNoYW5uZWwubGVmdCkvMiwgcHRzW2ldLnkpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMSA6IDM7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS55ID09IHB0c1tpLTFdLnkpICYmIChwdHNbaS0xXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpLTFdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAwICYmIHB0LnggPD0gcHRzW2ldLngpIHx8IChzaWRlID09IDIgJiYgcHQueCA+PSBwdHNbaV0ueCkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkgKyBkKSwgbmV3IFBvaW50KHB0LngsIHB0LnkgKyBkKV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludChwdHNbaV0ueCwgKGNoYW5uZWwuYm90dG9tICsgY2hhbm5lbC50b3ApLzIpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMCA6IDI7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS54ID09IHB0c1tpLTFdLngpICYmIChwdHNbaS0xXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaS0xXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAxICYmIHB0LnkgPD0gcHRzW2ldLnkpIHx8IChzaWRlID09IDMgJiYgcHQueSA+PSBwdHNbaV0ueSkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCArIGQsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0LnggKyBkLCBwdC55KV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBtYXggcG9pbnRzLlxuXHRcdFx0aWYgKGkgPiAyMCkgcmV0dXJuO1xuXHRcdFx0aWYgKHB0ICYmIChwdC54ICE9IHB0c1tpXS54IHx8IHB0LnkgIT0gcHRzW2ldLnkpKSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0fVxuXHR9XG5cblx0X2hhc0ludGVyc2VjdGlvbihwdHMsIGJveGVzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChib3hlc1tqXS5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSkgPj0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0X2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgYm94LCBzaWRlLCBzYXZlZEluZGV4ID0gbnVsbCwgc2F2ZWRTaWRlID0gbnVsbDtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKGkgPT0gMCAmJiBqID09IHN0YXJ0Qm94KSB8fCAoaSA9PSBwdHMubGVuZ3RoIC0gMiAmJiBqID09IGVuZEJveCkpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRzaWRlID0gYm94LmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKTtcblx0XHRcdGlmIChzaWRlID49IDApIHtcblx0XHRcdFx0aWYgKHNhdmVkSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGJveGVzW3NhdmVkSW5kZXhdLmRpc3RhbmNlKHB0c1tpXSkgPiBib3guZGlzdGFuY2UocHRzW2ldKSkge1xuXHRcdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2F2ZWRJbmRleCAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIFtzYXZlZEluZGV4LCBzYXZlZFNpZGVdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0X2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBicmVha1B0LCBib3gsIHNpZGUpIHtcblx0XHR2YXIgZGlyO1xuXHRcdHZhciBwO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwID0gXCJ5XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwID0gXCJ4XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvL2ZpcnN0IHRyeSB0aGUgYnJlYWtwdC5cblx0XHRkaXIgPSBfZ2V0Um91dGVEaXJlY3Rpb24oYnJlYWtQdCwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRkaXIgPSAtX2dldFJvdXRlRGlyZWN0aW9uKHB0c1swXSwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdFx0aWYgKGJyZWFrUHRbcF0gPCBib3guZ2V0Q2VudGVyKClbcF0pXG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGlyO1xuXHR9XG5cblx0X2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XG5cdFx0aWYgKHB0MS54ID09IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlM7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcblx0XHR9IGVsc2UgaWYgKHB0MS55ID09IHB0Mi55KSB7XG5cdFx0XHRpZiAocHQxLnggPCBwdDIueCkgcmV0dXJuIFBvaW50LkU7XG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcblx0XHR9IGVsc2UgaWYgKHB0MS54IDwgcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU0U7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU1c7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XG5cdFx0fVxuXHR9XG5cblx0X2dldENoYW5uZWwoY29udGFpbmVyLCBpbmRleCwgYm94ZXMsIHNpZGUpIHtcblx0XHR2YXIgbWF4Q2hhbm5lbFdpZHRoID0gdGhpcy5tYXhDaGFubmVsV2lkdGg7XG5cdFx0dmFyIGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XG5cdFx0dmFyIHB0LCBpO1xuXHRcdHZhciBjaGFubmVsID0ge30sIGwsIHQsIGIsIHI7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRMZWZ0KCk7XG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHIgPSBib3hlc1tpXS5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPj0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcblx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0VG9wKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGIgPSBib3hlc1tpXS5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChiID49IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcblx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGNoYW5uZWwubGVmdCA9IHB0Lng7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRsID0gYm94ZXNbaV0uZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY2hhbm5lbC5sZWZ0ICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwudG9wID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiBib3gyLmdldFRvcCgpLnkpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY2hhbm5lbC50b3AgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgYSBsaW5lIHNlZ21lbnQgYnkgYSBzcGVjaWZpZWQgZGlzdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxuXHQgKiBAcGFyYW0gaSB0aGUgaW5kZXggb2YgdGhlIHNlZ21lbnQuXG5cdCAqIEBwYXJhbSBkIHRoZSBkaXN0YW5jZSB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXG5cdCAqIEBwYXJhbSBlbmRQYWRkaW5nXG5cdCAqL1xuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBuZXcgbGluZSBzZWdtZW50cy5cblx0XHR2YXIgZGlyLCBsLCBwdDtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludC5cblx0XHRcdGRpciA9IHB0c1swXS5nZXREaXJlY3Rpb24ocHRzWzFdKTtcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxuXHRcdFx0XHRzdGFydFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oc3RhcnRQYWRkaW5nLCBwdHNbMF0uZGlzdGFuY2UocHRzWzFdKS8yKTtcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UoMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGkgPT0gcHRzLmxlbmd0aCAtIDIpIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cblx0XHRcdGRpciA9IHB0c1twdHMubGVuZ3RoLTFdLmdldERpcmVjdGlvbihwdHNbcHRzLmxlbmd0aC0yXSk7XG5cdFx0XHRpZiAoIWVuZFBhZGRpbmcpXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oZW5kUGFkZGluZywgcHRzW3B0cy5sZW5ndGgtMV0uZGlzdGFuY2UocHRzW3B0cy5sZW5ndGgtMl0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDFdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnkgKz0gZDtcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS54ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cblx0ICovXG5cdF9tZXJnZVNlZ21lbnRzKHB0cykge1xuXHRcdHZhciBoMSA9IHB0c1twdHMubGVuZ3RoLTFdLnkgPT0gcHRzW3B0cy5sZW5ndGgtMl0ueTtcblx0XHR2YXIgaDI7XG5cdFx0Zm9yICh2YXIgaSA9IHB0cy5sZW5ndGggLSAyOyBpID49IDE7IGktLSkge1xuXHRcdFx0aDIgPSBwdHNbaV0ueSA9PSBwdHNbaS0xXS55O1xuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGgxID0gIWgxO1xuXHRcdH1cblx0fVxufVxuXG5saW5rVHlwZXNbJ2RpcmVjdCddID0gRGlyZWN0TGluaztcbmxpbmtUeXBlc1snYmV6aWVyJ10gPSBCZXppZXJMaW5rO1xubGlua1R5cGVzWydlbnRpdHlSZWxhdGlvbnMnXSA9IEVudGl0eVJlbGF0aW9ucztcbmxpbmtUeXBlc1snbWFuaGF0dGFuJ10gPSBNYW5oYXR0YW47XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5rLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbmNvbnN0IERFRkFVTFRTID0ge1xuXHRzdG9wUHJvcGFnYXRpb246IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldLCBjb25maWcgPSB7fSkge1xuXHRcdHRoaXMucm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy5yb290TlMgPSByb290LmdldEF0dHJpYnV0ZSgnbnMnKSB8fCAncm9vdCc7XG5cdFx0dGhpcy56b29tU2NhbGUgPSB6b29tU2NhbGU7XG5cdFx0Xy5hc3NpZ24odGhpcywgREVGQVVMVFMsIGNvbmZpZyk7XG5cdFx0dGhpcy5zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xuXHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmhhbmRsZXIgPSBfLmJpbmQodGhpcy5oYW5kbGVFdmVudCwgdGhpcyk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cblx0XHQvLyBTaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzXG5cdFx0dGhpcy5lbnRlclN0YWNrID0gW107XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnQgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdGFydCgpIHtcblx0XHRpZiAodGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9uKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xuXHRcdHRoaXMuc3RhcnRLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzLlxuXHQgKi9cblx0c3RvcCgpIHtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdEV2ZW50cy5vZmYodGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdG9wS2V5cygpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXHR9XG5cblx0c3RhcnRLZXlzKCkge1xuXHRcdEV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0c3RvcEtleXMoKSB7XG5cdFx0RXZlbnRzLm9mZihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBucywgc3RhY2sgPSBbXSwgaXNSb290ID0gZmFsc2U7XG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xuXHRcdFx0bnMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCducycpO1xuXHRcdFx0aWYgKG5zKSB7XG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcblx0XHRcdFx0aWYgKGlzUm9vdCkge1xuXHRcdFx0XHRcdG5zID0gbnMuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFldmVudC5uc1RhcmdldCkgZXZlbnQubnNUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xuXHRcdFx0XHRidWYucHJlcGVuZChucyk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0aWYgKCFpc1Jvb3QpXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XG5cblx0XHQvLyB0YXJnZXQgc3RhY2sgaXMgYSBzdGFjayBvZiBhbGwgdGhlIG5zIHRhcmdldHMgdXAgdG8gdGhlIG9uZSB3aXRoIHRoZSBkYXRhIGJpbmRpbmcuXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcblx0XHRucyA9IGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdGlmIChucyA9PSAnJykgbnMgPSB0aGlzLnJvb3ROUztcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1haW4gZXZlbnQgaGFuZGxlciBtZXRob2QsIGl0IHByb2Nlc3NlcyBldmVudCBhbmQgZ2VuZXJhdGUgcmVsZXZhbnQgZXZlbnRzIHRvIGRpc3BhdGNoLlxuXHQgKi9cblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcblx0XHRsZXQgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cblx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHJldHVybjtcblxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xuXHRcdGlmIChpc0tleUV2ZW50KSB7XG5cdFx0XHRkYXRhID0gdGhpcy5yb290O1xuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcblx0XHRcdGRhdGEgPSBpbmZvLmRhdGE7XG5cdFx0XHRucyA9IGluZm8ubnM7XG5cdFx0fVxuXG5cdFx0Ly9VdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiaGFuZGxlRXZlbnQgLSBcIiArIHR5cGUgKyAnO25zPScgKyBucyk7XG5cblx0XHRpZiAodHlwZSA9PSAnbW91c2V3aGVlbCcpIHtcblx0XHRcdHRoaXMuc2NhbGUgKj0gTWF0aC5wb3coMiwgZXZlbnQud2hlZWxEZWx0YSAqIDAuMDAyKTtcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRcdGV2ZW50LnNjYWxlID0gdGhpcy5zY2FsZTtcblx0XHRcdHR5cGUgPSAnem9vbSc7XG5cdFx0fVxuXG5cdFx0Ly8gU2VlIGlmIHdlIHNob3VsZCBjcmVhdGUgZHJhZyBldmVudHNcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcblx0XHRcdC8vIENyZWF0ZSBkcmFnIG9iamVjdC5cblx0XHRcdGNvbnN0IGRyYWdPYmplY3QgPSB7ZGF0YTogZGF0YSwgcG9zOiBucyA9PSAncm9vdCcgPyBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCkgOiBwb3N9O1xuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciBtb3VzZSBtb3ZlLlxuXHRcdFx0bGV0IGRyYWdQb3M7XG5cblx0XHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgbW91c2UgaGFzIG1vdmVkLiBJRSBhbHdheXMgZmlyZSBtb3VzZW1vdmUgYWZ0ZXIgbW91c2Vkb3duIGV2ZW4gaWYgdGhlIG1vdXNlIGhhc24ndCBtb3ZlZCB5ZXQuXG5cdFx0XHRcdFx0aWYgKGRyYWdPYmplY3QucG9zWzBdID09IGN1cnJlbnRQb3NbMF0gJiYgZHJhZ09iamVjdC5wb3NbMV0gPT0gY3VycmVudFBvc1sxXSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgZHJhZ2dpbmdcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnc3RhcnQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnT2JqZWN0LnBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcblx0XHRcdFx0dGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZycsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG1vdXNldXAgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cblx0XHRcdFx0bGV0IGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnZW5kJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0XHR9O1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzS2V5RXZlbnQpXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cdFx0dGhpcy5kaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuXHRcdC8vaWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHQvL1x0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cblx0ICovXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdGxldCBsYXN0LCBzdGFjaztcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xuXHRcdFx0ayA9IGsgfHwgMDtcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdH07XG5cblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XG5cdFx0XHRcdGxldCBpdGVtO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xuXHR9XG5cblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0Jylcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwga2V5KSkge1xuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAoIWxpc3RlbmVyLmNvbnRleHQpXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KGxpc3RlbmVyLmNvbnRleHQsIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxuXHRcdGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdGlmKCEgXy5pc05hTihwb3NbMF0pICYmICEgXy5pc05hTihwb3NbMV0pKVxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGtleSBldmVudCBoYW5kbGVyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XG5cdCAqL1xuXHRyZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gfHwgKHRoaXMubGlzdGVuZXJzW2tleV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNba2V5XSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XG5cdFx0aWYgKF8uaXNBcnJheSh0eXBlKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCB6SW5kZXg6IHpJbmRleH07XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBtb3VzZShjb250YWluZXIsIGUpIHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xuXHRcdGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcblx0XHRcdHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcblx0XHRcdHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKGNvbnRhaW5lci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcblx0XHR9XG5cdFx0dmFyIHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiovIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8gICAgICAgICAgIFRoZSBLZXkgVXRpbGl0eSBDTGFzcyBmb3IgdGhlIEV2ZW50IERpc3BhdGNoZXIgICAgICAgICAgXHQgICAgIC8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuLyoqXG4gKiBLRVkgY29uc3RhbnRcbiAqL1xuY29uc3QgS0VZID0ge1xuXHRBTFQgICAgICAgICAgOiAxOCxcblx0QkFDS19TUEFDRSAgIDogOCxcblx0Q0FQU19MT0NLICAgIDogMjAsXG5cdENPTlRST0wgICAgICA6IDE3LFxuXHRERUxFVEUgICAgICAgOiA0Nixcblx0RE9XTiAgICAgICAgIDogNDAsXG5cdEVORCAgICAgICAgICA6IDM1LFxuXHRFTlRFUiAgICAgICAgOiAxMyxcblx0RVNDQVBFICAgICAgIDogMjIwLFxuXHRIT01FICAgICAgICAgOiAzNixcblx0TEVGVCAgICAgICAgIDogMzcsXG5cdE1FVEEgICAgICAgICA6IDIyNCxcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxuXHRQQUdFX0RPV04gICAgOiAzNCxcblx0UEFHRV9VUCAgICAgIDogMzMsXG5cdFBBVVNFICAgICAgICA6IDE5LFxuXHRQUklOVFNDUkVFTiAgOiA0NCxcblx0UklHSFQgICAgICAgIDogMzksXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcblx0U0hJRlQgICAgICAgIDogMTYsXG5cdFNQQUNFICAgICAgICA6IDMyLFxuXHRUQUIgICAgICAgICAgOiA5LFxuXHRVUCAgICAgICAgICAgOiAzOFxuXHQvL0FERCAgICAgICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDYxICA6IDE4Nyxcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXG5cdGlmIChrZXkgPj0gMTYgJiYga2V5IDw9IDE4KSB7XG5cdFx0a2V5ID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcblx0aWYgKHNoaWZ0KSBidWYuYXBwZW5kKFwiU0hJRlRcIik7XG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xuXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvS2V5VXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL0VkZ2VcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3ZpZXcvTWFya2VyXCI7XG5cbmNvbnN0IG5vZGVEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnbm9kZScsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0ZWRpdGFibGU6IHRydWUsXG5cdHJlc2l6YWJsZTogZmFsc2UsXG5cdHNvdXJjZWFibGU6IHRydWUsXG5cdHRhcmdldGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWVcbn07XG5cbmNvbnN0IGVkZ2VEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnZWRnZScsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWUsXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxuXHRlbmRNYXJrZXI6IHtcblx0XHRpZDogJ0RlZmF1bHRfRW5kTWFya2VyJyxcblx0XHR0eXBlOiAnYXJyb3cnLFxuXHRcdHNpemU6IDEwLFxuXHRcdGNvbG9yOiAnIzBlYTExNydcblx0fSxcblx0Lyogc3RhcnQgYW5kIGVuZCBpcyBvbmx5IHVzZWQgaWYgdGhlIGVkZ2UgaXMgbm90IGNvbm5lY3RlZCB0byBhIG5vZGUgKi9cblx0c3RhcnQ6IFswLCAwXSxcblx0ZW5kOiBbNDAwLCAyMDBdXG59O1xuXG5jbGFzcyBHcmFwaCB7XG5cdGNvbnN0cnVjdG9yKGlkID0gXy51bmlxdWVJZChcIkdcIiksIGNvbmZpZyA9IHt9LCBtb2RlbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdHRoaXMubm9kZXMgPSB7fTtcblx0XHR0aGlzLmVkZ2VzID0ge307XG5cblx0XHR0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLm5vZGVUeXBlcywgXCJOb2Rlc1wiLCBub2RlRGVmYXVsdHMpO1xuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLmVkZ2VUeXBlcywgXCJFZGdlc1wiLCBlZGdlRGVmYXVsdHMpO1xuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxuXHRcdHRoaXMubWFya2VycyA9IFtdO1xuXHRcdGxldCBlZGdlVHlwZXMgPSBVdGlscy50eXBlKEVkZ2UubmFtZXNwYWNlKSwgbWFya2VyLCBtYXJrZXJDb25maWc7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiBlZGdlVHlwZXMuZW50cmllcygpKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRlbGV0ZSBjb25maWcubm9kZVR5cGVzO1xuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xuXHRcdGlmIChtb2RlbClcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XG5cdFx0dmFyIGpzQ2xhc3MgPSBudWxsO1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cblx0XHRcdHZhciB0eXBlID0gVXRpbHMudHlwZShkZWZhdWx0Q2xhc3MubmFtZXNwYWNlLCBjb25maWcudHlwZSk7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcblx0XHR9XG5cblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgTm9kZVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xuXHRcdGxldCBFZGdlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgRWRnZSk7XG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xuXG5cdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBlZGdlKTtcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcblx0XHRyZXR1cm4gZWRnZTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQsIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cmV0dXJuIHNoYXBlLmdldFBlcmltZXRlcihlbmRQdCwgb3J0aG9nb25hbCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKFwibGFiZWxcIikgPyB0aGlzLnByb3AoXCJsYWJlbFwiKSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xuXHRcdHJldHVybiAnTm9kZTp7aWQ6JyArIHRoaXMuaWQgKyAnO2xhYmVsOicgKyBsYWJlbCArICc7dHlwZTonICsgdGhpcy5wcm9wcy5jb25zdHJ1Y3Rvci50eXBlTmFtZSArICd9Jztcblx0fVxufVxuTm9kZS5uYW1lc3BhY2UgPSBcIk5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG5cbi8qXG5cbi8qKlxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cbiAqXG5WZXJ0ZXgucHJvdG90eXBlLmdldERyaWxsRG93blBhcmVudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcblx0cmV0dXJuICEobW9kZSAmIEdyYXBoLkFMTE9XX0lOVEVSQUNUSU9OUyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmdldENydW1iVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIik7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvTm9kZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuLyoqXG4gKiBUaGUgQ2VsbCBpcyB0aGUgY29tbW9uIHBhcmVudCBmb3IgTm9kZSBhbmQgRWRnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7aWQ6IF8udW5pcXVlSWQoKX0pIHtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcblx0XHRkZWxldGUgY29uZmlnLmlkO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXG5cdFx0aWYgKGNvbmZpZy5kZWNvcmF0b3JzKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXG5cdFx0aWYgKGNvbmZpZy52aWV3cykge1xuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxuXHRcdHZhciB0eXBlID0gY29uZmlnLnR5cGUgfHwgXCJEZWZhdWx0XCI7XG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgbm90IGZvdW5kIFwiICsgY29uZmlnLnR5cGUpO1xuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcblx0fVxuXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0L1NldCBwcm9wZXJ0eSBzdG9yZWQgYnkgdmlld3MuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dmlld1Byb3Aoa2V5ID0gJ2RlZmF1bHQnLCBuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XG5cdFx0fVxuXHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMudmlld1Byb3BzW2tleV0pXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEZWNvcmF0b3JzKGRlY29yYXRvcnMpIHt9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9wZXJ0aWVzIG5lZWRlZCBmb3IgcmVuZGVyaW5nIHRoaXMgZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XG5cdCAqL1xuXHRnZXRWaWV3KGtleSkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xuXHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcblx0XHRcdG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2Vcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KSByZXR1cm4gJyc7XG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLmdyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XG5cdFx0ZGVsZXRlIHRoaXMudmlld1Byb3BzO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblx0fVxufVxuXG4vKlxuXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInlcIiwgTWF0aC5yb3VuZCh5KSk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIGgpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuU2VsZWN0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwic2VsZWN0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xuXHRyZXR1cm4gdGhpcy5ncmFwaC5nZXRUeXBlKHR5cGVTdHIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY3JlYXRlTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kaWZpZXJzKSB7XG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcblx0aWYgKG1vZGlmaWVyU2V0dGluZ3MpIHtcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XG5cdFx0XHRjb25maWcuc2V0dGluZyA9IG1vZGlmaWVyU2V0dGluZ3NbY29uZmlnLmNsYXNzTmFtZV07XG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmFkZE1vZGlmaWVyKGNvbmZpZy5jbGFzc05hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIENoZWNrIGZvciBzaG93QWx3YXlzIHNldHRpbmdzXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XG5cdFx0XHRcdHZhciBjb25maWcgPSB7dHlwZTogdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUobmFtZSksIHNldHRpbmc6IHNldHRpbmd9O1xuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHR9XG59O1xuXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XG5cdGlmICghdGhpcy5tb2RpZmllcnMpXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcblxuXHRpZiAoIW1vZGlmaWVyLmhhc093blByb3BlcnR5KFwic2hvd0hlYWRlclwiKSlcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcblxuXHQvLyBAaGFjayBwcmVmZXJhYmx5IHNldCBpdCBpbiBjb25maWd1cmF0aW9ucy5cblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XG5cblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXG5cdFx0dGhpcy5jcmVhdGVNb2RpZmllcnMoKTtcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xuXHRpZiAobW9kaWZpZXJzKVxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XG5cdHJldHVybiBudWxsO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJyk7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0NhY2hlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdHJvdGF0aW9uOiBudWxsLFxuXHRnZW9tZXRyeToge3g6IDAsIHk6IDAsIGFuY2hvclk6IDAsIG9mZnNldFg6IDAsIG9mZnNldFk6IDB9XG59O1xuXG4vKipcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxuXHQgKi9cblx0bGV0IGdldFN0cmluZ1NpemUgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0ZG9jLm9wZW4oKTtcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcblx0XHRcdFx0PGRpdiBpZD1cImJhc2VsaW5lRGl2XCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7XCI+PHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDowXCI+VDwvc3Bhbj48c3BhbiBzdHlsZT1cImhlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvc3Bhbj48L2Rpdj5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xuXHRcdH1cblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gbWVhc3VyZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xuXG5cdFx0bGV0IHN0cnV0ID0gYmFzZWxpbmVEaXYuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XG5cblx0XHRyZXR1cm4ge3dpZHRoOiBtZWFzdXJlRGl2Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IG1lYXN1cmVEaXYub2Zmc2V0SGVpZ2h0LCBiYXNlbGluZTogYmFzZWxpbmVIZWlnaHR9O1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdGxldCBhcnIgPSBbXTtcblx0XHRsZXQgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplLndpZHRoO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywge3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcblx0XHRsZXQgYWxpZ24gPSBsYWJlbENvbmZpZy5hbGlnbjtcblxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XG5cdFx0aWYgKGNvbnRleHQud2lkdGgpIHtcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcblx0XHR9XG5cdFx0dyAtPSAyICogcGFkZGluZztcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xuXHRcdHcgPSBNYXRoLm1heCgwLCB3KTtcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBfLmNsb25lKGxhYmVsQ29uZmlnLmdlb21ldHJ5KTtcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSB3cmFwcGVkTGFiZWwuaGVpZ2h0ICsgMiAqIHBhZGRpbmcgKyAod3JhcHBlZExhYmVsLmxlbmd0aCAtIDEpICogbGluZVBhZGRpbmc7XG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XG5cdFx0c3dpdGNoIChhbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XG5cdFx0XHRcdGR4ID0gd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgcG9zO1xuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xuXHRcdGVsc2Vcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdC8vIHRoZSBwaXZvdCBpcyB0aGUgY2VudGVyIG9mIHJvdGF0aW9uIHdoZW4gdGhlIGxhYmVsIGhhcyBhIHJvdGF0aW9uIHNwZWNpZmllZC5cblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xuXG5cdFx0Ly8gdGhlIG1heGltdW0gYm91bmRzIGZvciB0aGUgbGFiZWwsIHVzZWQgdG8gcG9zaXRpb24gaW5saW5lIGVkaXRvclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCAtIHdyYXBwZWRMYWJlbC5iYXNlbGluZSwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsLCBzY2FsZSA9IDEuMCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSB7XG5cdFx0XHRcdHRoaXMuaW5wdXQgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KTtcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnZpc2libGUoKSAmJiB0aGlzLmtleSAhPSBrZXkpIHtcblx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmJveCA9IGJveDtcblx0XHRcdHRoaXMucmVmRWwgPSByZWZFbDtcblx0XHRcdHRoaXMudGV4dEVsID0gdGV4dEVsO1xuXG5cdFx0XHRsZXQgbGFiZWxDb25maWcgPSBib3guY29uZmlnO1xuXHRcdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoYm94Lm1heEJvdW5kcy54LCBib3gubWF4Qm91bmRzLnksIGJveC5tYXhCb3VuZHMud2lkdGggKiBzY2FsZSwgYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSk7XG5cdFx0XHRsZXQgcG9zID0gRG9tVXRpbHMuZ2V0Q2VudGVyUG9zaXRpb24ocmVmRWwsIGNvbnRhaW5lcik7XG5cdFx0XHRwb3MgPSBbcG9zWzBdICsgbWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIG1heEJvdW5kcy50b3BdO1xuXG5cdFx0XHRpZiAodGV4dEVsKVxuXHRcdFx0XHR0ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHRsZWZ0OiBwb3NbMF0gKyBcInB4XCIsXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxuXHRcdFx0XHR3aWR0aDogbWF4Qm91bmRzLndpZHRoICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiBtYXhCb3VuZHMuaGVpZ2h0ICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LWZhbWlseVwiOiBsYWJlbENvbmZpZy5mb250RmFtaWx5LFxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiAobGFiZWxDb25maWcuZm9udFNpemUgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IChsYWJlbENvbmZpZy5mb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRCA/ICdib2xkJyA6ICdub3JtYWwnXG5cdFx0XHRcdC8qXCJjb2xvclwiOiBsYWJlbENvbmZpZy5mb250Q29sb3IqL1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBib3guX2xhYmVsO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RhcnQnLCBbdGhpcy5rZXldKTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24oY2FuY2VsKSB7XG5cdFx0XHRpZiAoIXRoaXMudmlzaWJsZSgpKSByZXR1cm47XG5cblx0XHRcdGNhbmNlbCA9IGNhbmNlbCB8fCBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRleHRFbClcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0aWYgKCFjYW5jZWwpXG5cdFx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3IudXBkYXRlJywgW3RoaXMua2V5LCB0aGlzLmlucHV0LnZhbHVlXSk7XG5cblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RvcCcsIFt0aGlzLmtleV0pO1xuXHRcdFx0ZGVsZXRlIHRoaXMua2V5O1xuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xuXHRcdFx0ZGVsZXRlIHRoaXMucmVmRWw7XG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0RWw7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Rk9OVF9CT0xELFxuXHRcdEZPTlRfSVRBTElDLFxuXHRcdEZPTlRfVU5ERVJMSU5FLFxuXHRcdEZPTlRfU0hBRE9XLFxuXHRcdGdldFN0cmluZ1NpemUsXG5cdFx0d3JhcCxcblx0XHRnZXRMYWJlbEJveCxcblx0XHRnZXRMYWJlbEJveEZvckxpbmssXG5cdFx0cmVuZGVyLFxuXHRcdGVkaXRvclxuXHR9O1xufSkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTGFiZWwuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuXG5jbGFzcyBFZGdlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnRScpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xuXHR9XG5cblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAnc291cmNlJyk7XG5cdH1cblxuXHRzZXRUYXJnZXQobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcblx0ICovXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xuXHRcdGlmIChlbmQgPT0gbm9kZSkge1xuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXG5cdFx0XHRpZiAobm9kZSlcblx0XHRcdFx0bm9kZS5zZXRFZGdlQXQodGhpcywgcG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGVuZCkge1xuXHRcdFx0XHQvLyBmaXJzdCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBlbmRcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdFx0bm9kZS5hZGRPdXRFZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoJ2xhYmVsJyk7XG5cdFx0aWYgKGxhYmVsKVxuXHRcdFx0cmV0dXJuIExhYmVsLmdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCB0aGlzLmdldFNoYXBlKGtleSkpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXG5cdCAqL1xuXHRnZXRSZWZlcmVuY2VQb2ludHMoa2V5KSB7XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdGlmICh0aGlzLnNvdXJjZSlcblx0XHRcdHB0cy5wdXNoKHRoaXMuc291cmNlLmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxuXHRcdFx0cHRzLnB1c2godGhpcy50YXJnZXQuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xuXG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFRlcm1pbmFsVmlzdWFsKGtleSwgb3J0aG9nb25hbCkge1xuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xuXHRcdGxldCB0ZXJtaW5hbHMgPSBbXTtcblxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShwdC54LCBwdC55LCAzLCAzKTtcblx0XHR9O1xuXG5cdFx0aWYgKHRoaXMuc291cmNlKSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnNvdXJjZS5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCdzb3VyY2VQb3J0JyksIHJlZlB0c1sxXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMF0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMF0pLCByZWZQdHNbMV0sIHRydWUpfSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3RhcmdldFBvcnQnKSwgcmVmUHRzWzBdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcblx0XHRyZXR1cm4gdGVybWluYWxzO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XG5cdH1cbn1cbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuXG4vKlxuXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJhbGxvd0RhbmdsaW5nRWRnZXNcIikpIHtcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xuXHR9IGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UgJiYgdGhpcy50YXJnZXQgJiYgdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpICYmIHRoaXMuc291cmNlLmlzVmlzaWJsZSgpICYmIHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0VkZ2UuanNcbiAqKi8iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XG5cblx0LyoqIEJlZ2luIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTIqc2lnbiwgMF0sIFstNCpzaWduLCA0XSwgWzQqc2lnbiwgMF0sIFstNCpzaWduLCAtNF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy01KnNpZ24sIC01XSwgWy01KnNpZ24sIDVdLCBbNCpzaWduLCAwXV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHIgPSBzaXplIC8gMjtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzAsIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCInICsgciArICdcIiByeT1cIicgKyByICsgJ1wiPjwvZWxsaXBzZT4nO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICcnO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblx0LyoqIEVuZCBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XG5cdFx0dmFyIGZhY3RvcnkgPSByZWdpc3RyeVtjb25maWcudHlwZV07XG5cdFx0dmFyIG1hcmtlciA9IGZhY3RvcnkoY29uZmlnLnNpemUsIHNvdXJjZSwgY29uZmlnKTtcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdHJlZ2lzdHJ5WydhcnJvdyddID0gYXJyb3c7XG5cdHJlZ2lzdHJ5Wyd0cmlhbmdsZSddID0gdHJpYW5nbGU7XG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xuXHRyZWdpc3RyeVsnZGlhbW9uZCddID0gZGlhbW9uZDtcblxuXHRyZXR1cm4ge1xuXHRcdHJlZ2lzdHJ5OiByZWdpc3RyeSxcblx0XHRnZXRNYXJrZXI6IGdldE1hcmtlclxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L01hcmtlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5jbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcblx0XHRpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwib3JpZW50YXRpb25cIikgJiYgXy5pc1N0cmluZyhjb25maWcub3JpZW50YXRpb24pKSB7XG5cdFx0XHRpZiAoY29uZmlnLm9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkgPT0gXCJIT1JJWk9OVEFMXCIpXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWxldGUgY29uZmlnLm9yaWVudGF0aW9uO1xuXHRcdH1cblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdH1cblxuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7fVxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuTGF5b3V0LlZFUlRJQ0FMID0gMDtcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcblxuTGF5b3V0LkRFRkFVTFRTID0ge1xuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvTGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcblxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XG5cdGxheW91dChyb290LCBib3VuZHMpIHtcblx0XHR2YXIgaXRlbXM7XG5cdFx0aWYgKCFyb290KVxuXHRcdFx0aXRlbXMgPSB0aGlzLm93bmVyLmNoaWxkTm9kZXM7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHJvb3QpKVxuXHRcdFx0aXRlbXMgPSByb290O1xuXHRcdGVsc2Vcblx0XHRcdGl0ZW1zID0gcm9vdC5nZXRMaW5rZWROb2RlcygndGFyZ2V0Jyk7XG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG5cdFx0dmFyIHggPSAwLCB5ID0gMCwgaCA9IDAsIG5vZGU7XG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vZGUgPSBpdGVtc1tpXTtcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XG5cdFx0XHRcdC8vIGNyZWF0ZSBuZXcgbGluZVxuXHRcdFx0XHR5ICs9IGggKyB0aGlzLnZnYXA7XG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5fZmxQb3MgPSBbcDEsIHAyXTtcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xuXHRcdFx0eCArPSB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIik7XG5cdFx0XHRwMSsrO1xuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcihuZXcgUmVjdGFuZ2xlKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCB5ICsgaCkpO1xuXHR9XG59XG5cbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XG5cdGhnYXA6IDEwLFxuXHR2Z2FwOiAxMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvd0xheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30sIGdyYXBoID0gbnVsbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmJveCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogdGhpcy5pZCwgdGFiaW5kZXg6IDAsIG5zOiAnZ3JhcGgnfSwge292ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiAncmVsYXRpdmUnfSk7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcblx0XHRpZiAoY29uZmlnLmxheW91dCkge1xuXHRcdFx0bGV0IGxheW91dENsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IoY29uZmlnLmxheW91dC5qc0NsYXNzLCBMYXlvdXQpO1xuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgbGF5b3V0Q2xhc3MoY29uZmlnLmxheW91dC5jb25maWcpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5sYXlvdXQ7XG5cdFx0fVxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xuXHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHR0aGlzLl9zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHR0aGlzLmdyYXBoQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMubm9kZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmVkZ2VCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5jb25uZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblxuXHRcdEV2ZW50cy5vbihMYWJlbC5lZGl0b3IsICdlZGl0b3IudXBkYXRlLionLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhrZXkgKyAnPScgKyB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgZ3JhcGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0c2V0IGdyYXBoKGdyYXBoKSB7XG5cdFx0dGhpcy5fZ3JhcGggPSBncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoLmN1cnJlbnRSb290O1xuXHRcdGlmIChyb290KSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUgPSBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHRcdHRoaXMuX3NjYWxlID0gcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnKSB8fCAxLjA7XG5cdFx0fVxuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdmlld3BvcnQpO1xuXHRcdHZhciB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XG5cdFx0dmFyIHNjYWxlID0gdyAvIHZpZXdwb3J0LndpZHRoO1xuXHRcdHRoaXMudHJhbnNmb3JtKC12aWV3cG9ydC54KnNjYWxlLCAtdmlld3BvcnQueSpzY2FsZSwgc2NhbGUpO1xuXHR9XG5cblx0Z2V0IHRyYW5zbGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZTsgfVxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cblx0Z2V0IHNjYWxlKCkgeyByZXR1cm4gdGhpcy5fc2NhbGU7IH1cblx0c2V0IHNjYWxlKGspIHtcblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAqIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm91dFwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4ID0gbnVsbCwgeSA9IG51bGwsIHNjYWxlID0gbnVsbCkge1xuXHRcdGxldCBncmFwaCA9IHRoaXMuZ3JhcGg7XG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcblx0XHRpZiAoIV8uaXNOdWxsKHgpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMF0gPSB4O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnLCB4KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzFdID0geTtcblx0XHRcdGlmIChyb290KVxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XG5cdFx0fVxuXHRcdGlmICghXy5pc051bGwoc2NhbGUpKSB7XG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJywgc2NhbGUpO1xuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXG5cdFx0XHRsZXQgcyA9IHRoaXMuZGlzcGF0Y2hlci5zY2FsZTtcblx0XHRcdGlmIChzICE9IHNjYWxlKVxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcblx0XHR9XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5jdXJyZW50Um9vdCwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcblx0XHRcdGxldCBqc0NsYXNzO1xuXHRcdFx0aWYgKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKSB7XG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQsIHRoaXMuc2NhbGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLionLCAnem9vbSonXSwgZnVuY3Rpb24odHlwZSwgbnMsIHRhcmdldCwgcG9zLCBldmVudCkge1xuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRyZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGluayhzaGFwZSk7XG5cdH1cblxuXHRyZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XG5cdFx0XHR0ID0gdChjb25maWcpO1xuXHRcdH1cblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRleHBvcnQoZm9ybWF0LCBvcHRpb25zKSB7fVxuXHRyZXNldCgpIHt9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5fZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMubGF5b3V0O1xuXHRcdGlmICh0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zdG9wKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5kaXNwYXRjaGVyO1xuXHRcdH1cblx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuUmVuZGVyZXIuREVGQVVMVFMgPSB7XG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcblx0c2luZ2xlU2VsZWN0OiB0cnVlLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcblx0Z3VpZGVzRW5hYmxlZDogdHJ1ZSxcblx0Z3JpZFNpemU6IDMwLFxuXHRtYXhab29tOiA0LjAsXG5cdG1pblpvb206IDAuMixcblx0em9vbUZhY3RvcjogMS4yLFxuXHRtYXNrT3BhY2l0eTogMC41LFxuXHRncmFwaEJlaGF2aW9yOiBHcmFwaEJlaGF2aW9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvUmVuZGVyZXIuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzI4LzIwMTYuXG4gKi9cbmltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xuXG4vKipcbiAqIEdyYXBoIGhhbmRsZXIgaGFuZGxlcyBQYW5uaW5nIGFuZCBab29tIGFuZCBydWJiZXIgYmFuZCBzZWxlY3Rpb25cbiAqL1xuY2xhc3MgR3JhcGhCZWhhdmlvciBleHRlbmRzIEJlaGF2aW9yIHtcblx0Y29uc3RydWN0b3IocmVuZGVyZXIpIHtcblx0XHRzdXBlcihyZW5kZXJlcik7XG5cdFx0bGV0IGRpc3BhdGNoZXIgPSByZW5kZXJlci5kaXNwYXRjaGVyO1xuXHRcdGxldCBmID0gZnVuY3Rpb24odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IodHlwZSwgbnMsIGdyYXBoLCBldmVudCk7XG5cdFx0fTtcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlRHJhZywgdGhpcyk7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3Rlcignem9vbS4qJywgdGhpcy5oYW5kbGVab29tLCB0aGlzKTtcblx0XHQvL2Rpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uZ3JhcGgnLCAnbW91c2VlbnRlci5ncmFwaCcsICdtb3VzZWxlYXZlLmdyYXBoJ10sIGYpO1xuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcblx0fVxuXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0obnVsbCwgbnVsbCwgZXZlbnQuc2NhbGUpO1xuXHR9XG5cblx0aGFuZGxlRHJhZyh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xuXHRcdFx0aWYgKCFwYW4pIHJldHVybjtcblx0XHRcdGxldCB0ID0gdGhpcy5yZW5kZXJlci50cmFuc2xhdGU7XG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKHBvc1swXSArIHRoaXMub2Zmc2V0WzBdLCBwb3NbMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHRcdGRlbGV0ZSB0aGlzLm9mZnNldDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3IuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRsZXQgcm9vdCA9IHRoaXMuZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XG5cdFx0XHRidWYuYXBwZW5kKCc8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJykuYXBwZW5kKHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZCh0WzFdKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQodGhpcy5zY2FsZSkuYXBwZW5kKCcpXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdFNWR1JlbmRlcmVyLnNldENvbnRlbnQodGhpcy5ib3gsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdHRoaXMuc3ZnID0gdGhpcy5ib3guZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyRGVmcygpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPGRlZnM+Jyk7XG5cdFx0YnVmLmFwcGVuZCh0aGlzLmdldFRlbXBsYXRlKCdHcmlkJywgdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikpKTtcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgubWFya2Vycztcblx0XHRpZiAobWFya2Vycy5sZW5ndGggPiAwKVxuXHRcdFx0YnVmLmFwcGVuZChTVkdSZW5kZXJlci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpKTtcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHRpZiAoIXRoaXMuc3ZnKSByZXR1cm47XG5cdFx0bGV0IGcgPSB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdnJyk7XG5cdFx0bGV0IHQgPSB0aGlzLnRyYW5zbGF0ZTtcblx0XHRnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdFswXSArICcsJyArIHRbMV0gKyAnKXNjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xuXHRcdGZvciAobGV0IG1hcmtlciBvZiBtYXJrZXJzKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxuXHRcdFx0XHRjb250cm9sUHRzWzIqaV0gPSBbbmV4dCwgbmV4dF07XG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0ZDIgPSBuZXh0LmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHByZXYpLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0cHJldiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcblx0XHR9XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyBzZXRDb250ZW50KGVsLCBjb250ZW50KSB7XG5cdFx0aWYgKERvbVV0aWxzLmlzSUUpIHtcblx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0d2hpbGUgKGNoaWxkID0gZWwubGFzdENoaWxkKVxuXHRcdFx0XHRlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRTVkdSZW5kZXJlci5hcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcblx0XHR9IGVsc2Vcblx0XHRcdGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG59XG5TVkdSZW5kZXJlci5URU1QTEFURVMgPSB7XG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+I3tjaGlsZHJlbn08L2c+Jyxcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XG5cdH0sXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xuXHRcdGZvciAobGV0IHB0IG9mIHNoYXBlLnBvaW50cylcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XG5cdFx0YnVmLnJlbW92ZUxhc3QoKTtcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9LFxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+Jztcblx0fSxcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcblx0XHRyZXR1cm4gYFxuPG1hcmtlciBpZD1cIiR7bWFya2VyLmlkfVwiIG1hcmtlcldpZHRoPVwiJHttYXJrZXIuc2l6ZX1cIiBtYXJrZXJIZWlnaHQ9XCIke21hcmtlci5zaXplfVwiIHJlZng9XCIke21hcmtlci5yZWZbMF19XCIgXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cInN0cm9rZTogJHttYXJrZXIuZmlsbH07ZmlsbDoke21hcmtlci5maWxsfVwiYCA6ICcnfT4je3NoYXBlfTwvbWFya2VyPlxuYC50cmltKCk7XG5cdH0sXG5cdEdyaWQ6IGZ1bmN0aW9uKHNpemUpIHtcblx0XHRyZXR1cm4gYFxuPHBhdHRlcm4gaWQ9XCJHcmlkUGF0dGVyblwiIHdpZHRoPVwiJHtzaXplfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cbjwvcGF0dGVybj5gLnRyaW0oKTtcblx0fSxcblx0TGFiZWw6IF8udGVtcGxhdGUoYFxuPCUgdmFyIGJveCA9IF8uaGFzKGRhdGEsIFwiZHhcIikgPyBkYXRhIDogKGRhdGEuZ2V0TGFiZWxCb3ggPyBkYXRhLmdldExhYmVsQm94KCkgOiBudWxsKTsgXG4gICBpZiAoYm94KSB7JT5cblx0PGcgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5jbGFzcykgeyU+Y2xhc3M9XCI8JT1ib3guY29uZmlnLmNsYXNzJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLm5zKSB7JT5ucz1cIjwlPWJveC5jb25maWcubnMlPlwiPCV9JT5cXFxuXHRcdHRleHQtYW5jaG9yPVwiPCU9Ym94LmFuY2hvciU+XCJcXFxuXHRcdHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg8JT1ib3guYm91bmRzLnglPiw8JT1ib3guYm91bmRzLnklPik8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnJvdGF0aW9uKSB7JT5yb3RhdGUoPCU9Ym94LmNvbmZpZy5yb3RhdGlvbiU+IDwlPWJveC5waXZvdFswXSU+IDwlPWJveC5waXZvdFsxXSU+KTwlfSU+XCI+XG5cdDwlIGlmIChib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSkgeyU+XG5cdFx0PHJlY3QgeD1cIjwlPS1ib3guYm91bmRzLndpZHRoLzIlPlwiIHk9XCI8JT0tYm94LmJvdW5kcy5oZWlnaHQvMiU+XCIgd2lkdGg9XCI8JT1ib3guYm91bmRzLndpZHRoJT5cIiBoZWlnaHQ9XCI8JT1ib3guYm91bmRzLmhlaWdodCU+XCIgc3R5bGU9XCI8JT1ib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSU+XCIvPlxuXHQ8JSB9IGlmIChfLmlzQXJyYXkoYm94LmxhYmVsKSkgeyBcblx0XHRfLmVhY2goYm94LmxhYmVsLCBmdW5jdGlvbih2YWx1ZSwgbGluZSkgeyU+XG5cdFx0XHQ8dGV4dCA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnRleHRTdHlsZSkgeyU+c3R5bGU9XCI8JT1ib3guY29uZmlnLnRleHRTdHlsZSU+XCI8JX0lPlxcXG5cdFx0XHRcdGR4PVwiPCU9Ym94LmR4JT5cIiBkeT1cIjwlPWJveC5keSArIGJveC5saW5lSGVpZ2h0ICogbGluZSU+XCI+PCU9dmFsdWUlPjwvdGV4dD5cblx0XHQ8JX0pO30gZWxzZSB7ICU+XG5cdFx0XHQ8dGV4dD48JT1ib3gubGFiZWwlPjwvdGV4dD5cblx0XHQ8JX0lPlxuXHQ8L2c+XG48JX0lPlxuYC50cmltKCksIHt2YXJpYWJsZTogXCJkYXRhXCJ9KVxufTtcblxuZXhwb3J0IGRlZmF1bHQgU1ZHUmVuZGVyZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==