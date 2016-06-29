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
	
	var _SVGRenderer = __webpack_require__(25);
	
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
				var template = _lodash2.default.template(view.getTemplate(this.constructor.name, this));
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
		showGauge: false,
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
			size: 10
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
			key: "reset",
			value: function reset() {}
		}, {
			key: "destroy",
			value: function destroy() {}
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
		minZoom: 0.1,
		zoomFactor: 1.2,
		maskOpacity: 0.5,
		graphBehavior: _GraphBehavior2.default
	};
	
	exports.default = Renderer;

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by tong on 6/28/2016.
	 */
	
	/**
	 * Graph handler handles Panning and Zoom and rubber band selection
	 */
	
	var GraphBehavior = function () {
		function GraphBehavior(renderer) {
			_classCallCheck(this, GraphBehavior);
	
			this.renderer = renderer;
			var dispatcher = renderer.dispatcher;
			var f = function f(type, ns, graph, pos, event) {
				//Cursor.updateCursor(type, ns, graph, event);
			};
			dispatcher.register('drag*.graph', this.handleDrag, this);
			dispatcher.register('zoom.*', this.handleZoom, this);
			//dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
			this.offset = null;
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
					console.log('GraphBehavior:' + t);
					this.offset = [t[0] - pos[0], t[1] - pos[1]];
					return;
				}
				if (!this.offset) return;
				if (type == 'dragend') {
					this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
					//Cursor.updateCursor('mouseup', ns, graph, event);
					delete this.offset;
					return;
				}
				this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
			}
		}, {
			key: 'destroy',
			value: function destroy() {
				delete this.renderer;
			}
		}]);
	
		return GraphBehavior;
	}();
	
	exports.default = GraphBehavior;

/***/ },
/* 25 */
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
			return ("\n<marker id=\"" + marker.id + "\" markerWidth=\"" + marker.size + "\" markerHeight=\"" + marker.size + "\" refx=\"" + marker.ref[0] + "\" \nrefy=\"" + marker.ref[1] + "\" orient=\"auto\" viewbox=\"" + marker.viewBox.x + " " + marker.viewBox.y + " " + marker.viewBox.width + " " + marker.viewBox.height + "\"\nmarkerUnits=\"userSpaceOnUse\" " + (marker.fill ? "style=\"fill:" + marker.fill + "\"" : '') + ">#{shape}</marker>\n").trim();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzOGZlMTFmZjZlZjA4NDNjODM4YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdkLHdCQUhjO0FBSWQsOEJBSmM7QUFLZCxzQ0FMYztBQU1kLHdCQU5jO0FBT2Qsc0JBUGM7QUFRZCx3QkFSYztBQVNkLGdDQVRjO0FBVWQsNEJBVmM7QUFXZCxzQkFYYztBQVlkLDRDQVpjO0FBYWQsd0JBYmM7QUFjZCwwQkFkYztBQWVkLHdCQWZjO0FBZ0JkLHNCQWhCYztBQWlCZCxzQkFqQmM7QUFrQmQsc0JBbEJjO0FBbUJkLDBCQW5CYztBQW9CZCxrQ0FwQmM7QUFxQmQsOEJBckJjO0FBc0JkLG9DQXRC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RUFDUCw4RUFDQSxvQkFBYSw2REFMcEIsQ0FNRyxJQU5ILEVBQVAsQ0FEb0I7R0FBZjtBQVNOLFNBQU8saUJBQUUsUUFBRixDQUFXLGdqQ0FrQmpCLElBbEJpQixFQUFYLEVBa0JFLEVBQUMsVUFBVSxNQUFWLEVBbEJILENBQVA7RUExQ0Q7O21CQStEZSxZIiwiZmlsZSI6InFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicWdyYXBoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAzOGZlMTFmZjZlZjA4NDNjODM4YlxuICoqLyIsImltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vZ2VvbWV0cnkvTGluZVwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEVsbGlwc2UgZnJvbSBcIi4vZ2VvbWV0cnkvRWxsaXBzZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vZ3JhcGgvQ2VsbFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vZ3JhcGgvTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgRmxvd0xheW91dCBmcm9tIFwiLi9sYXlvdXQvRmxvd0xheW91dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi92aWV3L1JlbmRlcmVyXCI7XG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xuaW1wb3J0IEdyYXBoQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0Q2VsbCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXIsXG5cdEdyYXBoQmVoYXZpb3Jcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xuXHRcdHJldHVybiB0aGlzLm9mZnNldFBvc2l0aW9uKFt4LCB5XSwgZ2VvbWV0cnkpO1xuXHR9LFxuXG5cdG9mZnNldFBvc2l0aW9uOiBmdW5jdGlvbihwb3MsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtwb3NbMF0gKyBnZW9tZXRyeS53aWR0aCAqIGdlb21ldHJ5LmFuY2hvclggKyBnZW9tZXRyeS5vZmZzZXRYLCBwb3NbMV0gKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0ZVxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdLCBvLndpZHRoKnNjYWxlLCBvLmhlaWdodCpzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSpzY2FsZSt0WzBdLCBvWzFdKnNjYWxlK3RbMV1dO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0aW9uXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHNjYWxlOiBmdW5jdGlvbih0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoKG8ueC10WzBdKS9zY2FsZSwgKG8ueS10WzFdKS9zY2FsZSwgby53aWR0aC9zY2FsZSwgby5oZWlnaHQvc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueC10WzBdKS9zY2FsZSwgKG8ueS10WzFdKS9zY2FsZSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIFsob1swXS10WzBdKS9zY2FsZSwgKG9bMV0tdFsxXSkvc2NhbGVdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBtZXRob2QuXG5cdCAqL1xuXHRnZXRQcm9wZXJ0eTogZnVuY3Rpb24ob2JqLCBwcm9wKSB7XG5cdFx0aWYgKCFvYmopXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZiAoXy5oYXMob2JqLCBwcm9wKSlcblx0XHRcdHJldHVybiBvYmpbcHJvcF07XG5cdFx0aWYgKG9iai5wcm9wICYmIF8uaXNGdW5jdGlvbihvYmoucHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqLnByb3AocHJvcCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1V0aWxzLmpzXG4gKiovIiwiY2xhc3MgUG9pbnQge1xuXHRjb25zdHJ1Y3Rvcih4LCB5KSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYSBjbG9uZSBvZiB0aGlzIHBvaW50XG5cdCAqL1xuXHRjbG9uZSgpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwdCB0byB0aGUgb3RoZXIgcHQuXG5cdCAqIEBwYXJhbSBhUHRcblx0ICogQHJldHVybnMge251bWJlcn1cblx0ICovXG5cdGRpc3RhbmNlKGFQdCkge1xuXHRcdHJldHVybiBNYXRoLnNxcnQoKHRoaXMueCAtIGFQdC54KSAqICh0aGlzLnggLSBhUHQueCkgKyAodGhpcy55IC0gYVB0LnkpICogKHRoaXMueSAtIGFQdC55KSk7XG5cdH1cblxuXHQvKipcblx0ICogVHJhbnNsYXRlIHRoaXMgcG9pbnRcbiBcdCAqL1xuXHR0cmFuc2xhdGUocDIpIHtcblx0XHR0aGlzLnggKz0gcDIueDtcblx0XHR0aGlzLnkgKz0gcDIueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdC8qKlxuXHQgKiBTY2FsZSB0aGlzIHZlY3RvclxuIFx0ICovXG5cdHNjYWxlKHNjYWxlKSB7XG5cdFx0dGhpcy54ICo9IHNjYWxlO1xuXHRcdHRoaXMueSAqPSBzY2FsZTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFNjYWxlZChzY2FsZSkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlKTtcblx0fVxuXG5cdGdldFRyYW5zbGF0ZWQocDIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAyLngsIHRoaXMueSArIHAyLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgZGlyZWN0aW9uIHZlY3RvciBmcm9tIHRoaXMgcG9pbnQgdG8gcDIuXG5cdCAqIEBwYXJhbSBwMlxuXHQgKiBAcmV0dXJucyB7UG9pbnR9XG5cdCAqL1xuXHRnZXREaXJlY3Rpb24ocDIpIHtcblx0XHR2YXIgZGlzdCA9IHRoaXMuZGlzdGFuY2UocDIpO1xuXHRcdHJldHVybiBuZXcgUG9pbnQoKHAyLnggLSB0aGlzLngpIC8gZGlzdCwgKHAyLnkgLSB0aGlzLnkpIC8gZGlzdCk7XG5cdH1cblxuXHQvKipcblx0ICogcm90YXRlIHRoZSBwb2ludCBhYm91dCB0aGUgb3JpZ2luLiBXaXRoIHRoZSBzcGVjaWZpZWQgYW5nbGUuXG5cdCAqIEBwYXJhbSBhbmdsZSB0aGUgYW5nbGUgdG8gcm90YXRlXG5cdCAqL1xuXHRyb3RhdGUoYW5nbGUpIHtcblx0XHR2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblx0XHR2YXIgc2luID0gTWF0aC5zaW4oYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcblx0XHR0aGlzLnggPSB4ICogY29zIC0geSAqIHNpbjtcblx0XHR0aGlzLnkgPSB4ICogc2luICsgeSAqIGNvcztcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGdldFJvdGF0ZWQoYW5nbGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jbG9uZSgpLnJvdGF0ZShhbmdsZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkb3QgcHJvZHVjdCwgdHJlYXRpbmcgdGhpcyBhbmQgcDIgYXMgdmVjdG9ycy5cblx0ICovXG5cdGRvdFByb2R1Y3QocDIpIHtcblx0XHRyZXR1cm4gdGhpcy54ICogcDIueCArIHRoaXMueSAqIHAyLnk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBtaWQgcG9pbnQgYmV0d2VlbiB0aGlzIGFuZCBwMi5cbiBcdCAqL1xuXHRnZXRNaWRQb2ludChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQoKHRoaXMueCArIHAyLngpIC8gMiwgKHRoaXMueSArIHAyLnkpIC8gMik7XG5cdH1cblxuXHRyZXZlcnNlKCkge1xuXHRcdHRoaXMueCA9IC10aGlzLng7XG5cdFx0dGhpcy55ID0gLXRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGVxdWFscyhwMikge1xuXHRcdGlmICghcDIgfHwgcDIuY29uc3RydWN0b3IgIT0gUG9pbnQpIHJldHVybiBmYWxzZTtcblxuXHRcdHJldHVybiAodGhpcy54ID09IHAyLnggJiYgdGhpcy55ID09IHAyLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZmxlY3QgdGhpcyBwb2ludCB3LnIudC4gdGhlIHJlY3RhbmdsZS5cblx0ICogSWYgdmVydGljYWwgaXMgdHJ1ZSwgaXQgd2lsbCByZWZsZWN0IHRoZSBwb2ludCBjcm9zcyB0aGUgdmVydGljYWxcblx0ICogY2VudHJhbCBsaW5lIG9mIHRoZSByZWN0YW5nbGUsIG90aGVyd2lzZSByZWZsZWN0IGNyb3NzIHRoZSBob3Jpem9udGFsXG5cdCAqIGNlbnRyYWwgbGluZS5cblx0ICpcblx0ICogQHBhcmFtIHJlY3QgdGhlIHJlY3RhbmdsZVxuXHQgKiBAcGFyYW0gdmVydGljYWwgd2hldGhlciBpcyB2ZXJ0aWNhbCByZWZsZWN0aW9uIG9yIGhvcml6b250YWwgcmVmbGVjdGlvbi5cblx0ICovXG5cdHJlZmxlY3QocmVjdCwgdmVydGljYWwpIHtcblx0XHRpZiAodmVydGljYWwpXG5cdFx0XHR0aGlzLnggPSAyICogcmVjdC54IC0gdGhpcy54O1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMueSA9IDIgKiByZWN0LnkgLSB0aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy54ICsgXCIsXCIgKyB0aGlzLnk7XG5cdH1cbn1cblxuUG9pbnQuVyA9IG5ldyBQb2ludCgtMSwgMCk7XG5Qb2ludC5OID0gbmV3IFBvaW50KDAsIC0xKTtcblBvaW50LlMgPSBuZXcgUG9pbnQoMCwgMSk7XG5Qb2ludC5FID0gbmV3IFBvaW50KDEsIDApO1xuUG9pbnQuTkUgPSBuZXcgUG9pbnQoMSwgLTEpO1xuUG9pbnQuTlcgPSBuZXcgUG9pbnQoLTEsIC0xKTtcblBvaW50LlNFID0gbmV3IFBvaW50KDEsIDEpO1xuUG9pbnQuU1cgPSBuZXcgUG9pbnQoLTEsIDEpO1xuXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1BvaW50LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgYSBnaXZlbiBwb2ludCBvZiBhIGdpdmVuIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGNvbnRhaW5zKGVsKSB7XHJcblx0XHRsZXQgdyA9IGVsLndpZHRoIHx8IDA7XHJcblx0XHRsZXQgaCA9IGVsLmhlaWdodCB8fCAwO1xyXG5cdFx0bGV0IGxlZnQgPSBlbC54IC0gdy8yO1xyXG5cdFx0bGV0IHJpZ2h0ID0gZWwueCArIHcvMjtcclxuXHRcdGxldCB0b3AgPSBlbC55IC0gaC8yO1xyXG5cdFx0bGV0IGJvdHRvbSA9IGVsLnkgKyBoLzI7XHJcblx0XHRyZXR1cm4gKHJpZ2h0IDw9IHRoaXMucmlnaHQpICYmIChsZWZ0ID49IHRoaXMubGVmdCkgJiZcclxuXHRcdFx0KHRvcCA+PSB0aGlzLnRvcCkgJiYgKGJvdHRvbSA8PSB0aGlzLmJvdHRvbSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWFsdGUgdGhlIGRpc3RhbmNlIHRvIGEgcG9pbnQuIDAgaWYgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgdGhlIHBvaW50LlxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKHB0KSB7XHJcblx0XHRpZiAodGhpcy5jb250YWlucyhwdCkpIHJldHVybiAwO1xyXG5cclxuXHRcdGlmIChwdC54IDwgdGhpcy5sZWZ0KSB7XHJcblx0XHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKSk7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxlZnQgLSBwdC54O1xyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pKTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC54IDw9IHRoaXMucmlnaHQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9wIC0gcHQueTtcclxuXHRcdFx0cmV0dXJuIHB0LnkgLSB0aGlzLmJvdHRvbTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApKTtcclxuXHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRyZXR1cm4gcHQueCAtIHRoaXMucmlnaHQ7XHJcblx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHaXZlbiB0d28gcG9pbnRzLCB3ZSB3YW50IHRvIGRldGVjdCB3aGV0aGVyIHRoZSBsaW5lIGpvaW5pbmcgdGhlIHB0cyBpbnRlcnNlY3RcclxuXHQgKiB3aXRoIHRoZSByZWN0YW5nbGUgb3Igbm90LiBXZSBhc3N1bWUgb25seSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGxpbmUgc2VnbWVudHMuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIGludCB0aGUgc2lkZSBvZiB0aGUgaW50ZXJzZWN0aW9uOiAtMTogbm8gaW50ZXJzZWN0aW9uLCAwOiBsZWZ0LCAxOiB0b3AsIDI6IHJpZ2h0LCAzOiBib3R0b20sIDQ6IGNvbnRhaW5tZW50LlxyXG5cdCAqL1xyXG5cdGRldGVjdEludGVyc2VjdGlvbihwdDEsIHB0Mikge1xyXG5cdFx0bGV0IGhvcml6b250YWwgPSBwdDEueSA9PSBwdDIueTtcclxuXHRcdGxldCBjb250YWluczEgPSB0aGlzLmNvbnRhaW5zKHB0MSk7XHJcblx0XHRsZXQgY29udGFpbnMyID0gdGhpcy5jb250YWlucyhwdDIpO1xyXG5cdFx0aWYgKGNvbnRhaW5zMSAmJiBjb250YWluczIpIHJldHVybiA0O1xyXG5cdFx0aWYgKCFjb250YWluczEgJiYgIWNvbnRhaW5zMikge1xyXG5cdFx0XHRpZiAoaG9yaXpvbnRhbCAmJiAocHQxLnkgPj0gdGhpcy50b3AgJiYgcHQxLnkgPD0gdGhpcy5ib3R0b20pKSB7XHJcblx0XHRcdFx0aWYgKHB0MS54IDwgdGhpcy5sZWZ0ICYmIHB0Mi54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdGlmIChwdDEueCA+IHRoaXMucmlnaHQgJiYgcHQyLnggPCB0aGlzLmxlZnQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWhvcml6b250YWwgJiYgKHB0MS54ID49IHRoaXMubGVmdCAmJiBwdDEueCA8PSB0aGlzLnJpZ2h0KSkge1xyXG5cdFx0XHRcdGlmIChwdDEueSA8IHRoaXMudG9wICYmIHB0Mi55ID4gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAocHQxLnkgPiB0aGlzLmJvdHRvbSAmJiBwdDIueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDM7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvdXRQdCA9IGNvbnRhaW5zMSA/IHB0MiA6IHB0MTtcclxuXHRcdGlmIChob3Jpem9udGFsKSB7XHJcblx0XHRcdGlmIChvdXRQdC54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAob3V0UHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdSZWN0YW5nbGU6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0bGV0IHggPSByZWN0Lng7XHJcblx0XHRsZXQgeSA9IHJlY3QueTtcclxuXHRcdGxldCBkeCA9IHB0LnggLSB4O1xyXG5cdFx0bGV0IGR5ID0gcHQueSAtIHk7XHJcblx0XHRsZXQgYWxwaGEgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCgwLCAwKTtcclxuXHRcdGxldCBwaSA9IE1hdGguUEk7XHJcblx0XHRsZXQgcGkyID0gTWF0aC5QSS8yO1xyXG5cdFx0bGV0IGJldGEgPSBwaTIgLSBhbHBoYTtcclxuXHRcdGxldCB0ID0gTWF0aC5hdGFuMihyZWN0LmhlaWdodCwgcmVjdC53aWR0aCk7XHJcblxyXG5cdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRwLnkgPSB5IC0gcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdHAueCA9IHggLSByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0cC55ID0geSArIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdHAueCA9IHggKyByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0YW5nbGUgdGhhdCBjb250YWlucyBwMSBhbmQgcDJcclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0Qm91bmRpbmdSZWN0YW5nbGUocHRzLCBtYXJnaW4pIHtcclxuXHRcdGlmICghcHRzIHx8IHB0cy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcblx0XHRtYXJnaW4gPSBtYXJnaW4gfHwgWzAsIDAsIDAsIDBdO1xyXG5cdFx0aWYgKCFfLmlzQXJyYXkobWFyZ2luKSlcclxuXHRcdFx0bWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XHJcblx0XHRsZXQgbWluID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRsZXQgbWF4ID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgcCA9IHB0c1tpXTtcclxuXHRcdFx0aWYgKHAueCA8IG1pblswXSkge1xyXG5cdFx0XHRcdG1pblswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55IDwgbWluWzFdKSB7XHJcblx0XHRcdFx0bWluWzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnggPiBtYXhbMF0pIHtcclxuXHRcdFx0XHRtYXhbMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA+IG1heFsxXSkge1xyXG5cdFx0XHRcdG1heFsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bWluWzBdID0gbWluWzBdIC0gbWFyZ2luWzBdO1xyXG5cdFx0bWluWzFdID0gbWluWzFdIC0gbWFyZ2luWzFdO1xyXG5cdFx0bWF4WzBdID0gbWF4WzBdICsgbWFyZ2luWzJdO1xyXG5cdFx0bWF4WzFdID0gbWF4WzFdICsgbWFyZ2luWzNdO1xyXG5cdFx0bGV0IHcgPSBNYXRoLmFicyhtYXhbMF0gLSBtaW5bMF0pO1xyXG5cdFx0bGV0IGggPSBNYXRoLmFicyhtYXhbMV0gLSBtaW5bMV0pO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWluWzBdICsgdy8yLCBtaW5bMV0gKyBoLzIsIHcsIGgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgdW5pb24gb2YgYWxsIHRoZSByZWN0YW5nbGVzLlxyXG5cdCAqIEBwYXJhbSByZWN0c1xyXG5cdCAqL1xyXG5cdHN0YXRpYyB1bmlvbihyZWN0cykge1xyXG5cdFx0bGV0IG1pbnggPSBudWxsLCBtaW55ID0gbnVsbCwgbWF4eCA9IC1JbmZpbml0eSwgbWF4eSA9IC1JbmZpbml0eTtcclxuXHRcdF8uZWFjaChyZWN0cywgZnVuY3Rpb24gKHJlY3QpIHtcclxuXHRcdFx0bWlueCA9IG1pbnggfHwgcmVjdC54O1xyXG5cdFx0XHRtaW55ID0gbWlueSB8fCByZWN0Lnk7XHJcblx0XHRcdG1pbnggPSBNYXRoLm1pbihtaW54LCByZWN0LngpO1xyXG5cdFx0XHRtaW55ID0gTWF0aC5taW4obWlueSwgcmVjdC55KTtcclxuXHRcdFx0bWF4eCA9IE1hdGgubWF4KG1heHgsIHJlY3QucmlnaHQoKSk7XHJcblx0XHRcdG1heHkgPSBNYXRoLm1heChtYXh5LCByZWN0LmJvdHRvbSgpKTtcclxuXHRcdH0pO1xyXG5cdFx0bWlueCA9IG1pbnggfHwgMDtcclxuXHRcdG1pbnkgPSBtaW55IHx8IDA7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW54LCBtaW55LCBtYXh4IC0gbWlueCwgbWF4eSAtIG1pbnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIHRoZSBwb2ludCA8aT5wPC9pPiBpcyBpbiByZWxhdGlvbiB0byB0aGUgZ2l2ZW4gcmVjdGFuZ2xlLlxyXG5cdCAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgV0VTVCAoLTEsMCksIEVBU1QgKDEsMCksIE5PUlRIICgwLC0xKSBhbmQgU09VVEggKDAsMSkgaWYgb3J0aG9nb25hbCBpcyB0cnVlLCBvdGhlcndpc2UgcmV0dXJuXHJcblx0ICogdGhlIGRpcmVjdGlvbiBjb25uZWN0aW9uIHRoZSBjZW50ZXIgb2YgciBhbmQgcC5cclxuXHQgKiBAcGFyYW0gclxyXG5cdCAqIEBwYXJhbSBwXHJcblx0ICogQHBhcmFtIG9ydGhvZ29uYWxcclxuXHQgKiBAcmV0dXJucyB7UG9pbnR8Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0RGlyZWN0aW9uKHIsIHAsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0aWYgKCFvcnRob2dvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHIueCwgci55KS5nZXREaXJlY3Rpb24obmV3IFBvaW50KHAueCwgcC55KSk7XHJcblxyXG5cdFx0bGV0IGksIGRpc3RhbmNlID0gTWF0aC5hYnMoci5sZWZ0IC0gcC54KSwgZGlyZWN0aW9uID0gUG9pbnQuVztcclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci50b3AgLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5OO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLmJvdHRvbSAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LlM7XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIucmlnaHQgLSBwLngpO1xyXG5cdFx0aWYgKGkgPCBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5FO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkaXJlY3Rpb247XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1JlY3RhbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5jbGFzcyBTaGFwZSB7XG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Xy5kZWZhdWx0cyh0aGlzLCBjb25maWcsIHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IHRvcCgpIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHgtY29vcmQgb2YgbGVmdCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgcmlnaHQoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cblxuXHRnZXQgY2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxuXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cblxuXHRjb250YWlucyhlbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvKipcblx0ICogVGhpcyB3aWxsIGdlbmVyYXRlIG4gcG9ydHMgb24gdGhlIHNoYXBlLlxuXHQgKi9cblx0Z2V0UmVndWxhclBvaW50cyhuKSB7cmV0dXJuIG51bGw7fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIGJvdW5kYXJ5IG9mIHRoaXMgc2hhcGUgYW5kIHRoZSBsaW5lIGNvbm5lY3RpbmcgKHgseSkgd2l0aCB0aGUgcmVmUHQuXG5cdCAqIEBwYXJhbSByZWZQdFxuXHQgKiBAcmV0dXJucyB7bnVsbH1cblx0ICovXG5cdGdldFBlcmltZXRlcihyZWZQdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh2aWV3LmdldFRlbXBsYXRlKHRoaXMuY29uc3RydWN0b3IubmFtZSwgdGhpcykpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRTaGFwZShuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG5cblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcblx0XHRyZWdpc3RyeVtuYW1lXSA9IGM7XG5cdH1cblxuXHRzdGF0aWMgcmVtb3ZlU2hhcGUobmFtZSkge1xuXHRcdGRlbGV0ZSByZWdpc3RyeVtuYW1lXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9TaGFwZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBkb20gVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHRpc0lFOiAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cblx0XHRpZiAoSWR4ID4gMClcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XG5cblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxuXHRcdFx0cmV0dXJuIDExO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSkoKSxcblxuXHRpc0ZpcmVGb3ggOiAoZnVuY3Rpb24oKXtcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblx0fSkoKSxcblxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcblx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xuXHRcdGlmIChodG1sKVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcblx0XHRyZXR1cm4gdGVtcC5jaGlsZE5vZGVzO1xuXHR9LFxuXG5cdHNldEVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgYXR0cmlicywgc3R5bGVzKSB7XG5cdFx0aWYgKGF0dHJpYnMpIHtcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHQgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHRcdFx0IH0pO1xuXHRcdH1cblx0XHRpZiAoc3R5bGVzKSB7XG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcblx0fSxcblxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHR3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSlcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXG5cdCAqIEBwYXJhbSBlbCB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3BdO1xuXHR9LFxuXG5cdGdldENlbnRlclBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XG5cdH0sXG5cblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdGlmICh5KSBlbC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0fSxcblxuXHRnZXRTaXplOiBmdW5jdGlvbihlbCkge1xuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xuXHRcdHJldHVybiBbdywgaF07XG5cdH0sXG5cblx0cmVzaXplOiBmdW5jdGlvbihlbCwgdywgaCkge1xuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHR9LFxuXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubGlzdCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QgPSBbXTtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcblxuXHRcdHZhciBsaXN0ID0gdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3Q7XG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcblx0XHRcdFx0XHQvLyBmb3IgbWVtb3J5IGNvbnN1bXB0aW9uIHJlYXNvbnNcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcblx0XHRcdGltZy5uYW1lID0gYXJyYXlbaV07XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSBzcmNcblx0ICovXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XG5cdFx0aWYgKHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBrZXkgZXZlbnQgaXMgZnJvbSBpbnB1dCwgdGV4dGFyZWEgb3Igc2VsZWN0LlxuXHQgKiBAcGFyYW0gZSAgaW5wdXQgZXZlbnRcblx0ICovXG5cdGV2ZW50RnJvbUlucHV0OiBmdW5jdGlvbihlKXtcblx0XHR2YXIgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWU7XG5cdFx0cmV0dXJuICh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0RvbVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEEgc3RyaW5nIGJ1ZmZlciBmb3IgZmFzdCBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ0J1ZmZlciB7XG5cdGNvbnN0cnVjdG9yKHN0cikge1xuXHRcdHRoaXMuYnVmZmVyID0gW107XG5cdFx0aWYgKHN0cilcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3RyKTtcblx0fVxuXG5cdGFwcGVuZChzdHVmZikge1xuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChzdHVmZik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJlcGVuZChzdHVmZikge1xuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gc3R1ZmYuY29uY2F0KHRoaXMuYnVmZmVyKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuYnVmZmVyID0gW107XG5cdH1cblxuXHRyZW1vdmVMYXN0KCkge1xuXHRcdHRoaXMuYnVmZmVyLnBvcCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9TdHJpbmcoc2VwKSB7XG5cdFx0aWYgKCFzZXApIHNlcCA9ICcnO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5qb2luKHNlcCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xuXHRjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgbGluZVxuXHQgKi9cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlKHRoaXMuZW5kKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIG9mIHRoaXMgbGluZSB0byB0aGUgcG9pbnQuXG5cdCAqL1xuXHRkaXN0YW5jZShwdCkge1xuXHRcdHZhciB4ID0gdGhpcy5zdGFydC5kaXN0YW5jZShwdCk7XG5cdFx0aWYgKHggPT0gMCkgcmV0dXJuIDA7XG5cblx0XHR2YXIgbCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0dmFyIGNvc2EgPSBuZXcgUG9pbnQoKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpIC8gbCwgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpIC8gbCkuZG90UHJvZHVjdChcblx0XHRcdG5ldyBQb2ludChwdC54IC8geCwgcHQueSAvIHgpKTtcblxuXHRcdHJldHVybiB4ICogTWF0aC5zcXJ0KDEgLSBjb3NhICogY29zYSk7XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb246IGludGVyc2VjdGlvblxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGxpbmVzIGFzIGFuIDxteFBvaW50Pi5cblx0ICpcblx0ICogUGFyYW1ldGVyczpcblx0ICpcblx0ICogeDAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgxIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkxIC0gWS1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHgyIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkyIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgzIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MyAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICovXG5cdHN0YXRpYyBpbnRlcnNlY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG5cdFx0dmFyIGRlbm9tID0gKCh5MyAtIHkyKSAqICh4MSAtIHgwKSkgLSAoKHgzIC0geDIpICogKHkxIC0geTApKTtcblx0XHR2YXIgbnVtZV9hID0gKCh4MyAtIHgyKSAqICh5MCAtIHkyKSkgLSAoKHkzIC0geTIpICogKHgwIC0geDIpKTtcblx0XHR2YXIgbnVtZV9iID0gKCh4MSAtIHgwKSAqICh5MCAtIHkyKSkgLSAoKHkxIC0geTApICogKHgwIC0geDIpKTtcblxuXHRcdHZhciB1YSA9IG51bWVfYSAvIGRlbm9tO1xuXHRcdHZhciB1YiA9IG51bWVfYiAvIGRlbm9tO1xuXG5cdFx0aWYgKHVhID49IDAuMCAmJiB1YSA8PSAxLjAgJiYgdWIgPj0gMC4wICYmIHViIDw9IDEuMCkge1xuXHRcdFx0Ly8gR2V0IHRoZSBpbnRlcnNlY3Rpb24gcG9pbnRcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25YID0geDAgKyB1YSAqICh4MSAtIHgwKTtcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25ZID0geTAgKyB1YSAqICh5MSAtIHkwKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChpbnRlcnNlY3Rpb25YLCBpbnRlcnNlY3Rpb25ZKTtcblx0XHR9XG5cblx0XHQvLyBObyBpbnRlcnNlY3Rpb25cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluZTp7c3RhcnQ9JyArIHRoaXMuc3RhcnQgKyAnO2VuZD0nICsgdGhpcy5lbmQgKyAnfSc7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmUuanNcbiAqKi8iLCJpbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGxpcHNlIGV4dGVuZHMgU2hhcGUge1xyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdFbGxpcHNlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdHZhciBhID0gcmVjdC53aWR0aCAvIDI7XHJcblx0XHR2YXIgYiA9IHJlY3QuaGVpZ2h0IC8gMjtcclxuXHRcdHZhciBjeCA9IHJlY3QueDtcclxuXHRcdHZhciBjeSA9IHJlY3QueTtcclxuXHRcdHZhciBweCA9IHB0Lng7XHJcblx0XHR2YXIgcHkgPSBwdC55O1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZXMgc3RyYWlnaHQgbGluZSBlcXVhdGlvbiB0aHJvdWdoXHJcblx0XHQvLyBwb2ludCBhbmQgZWxsaXBzZSBjZW50ZXIgeSA9IGQgKiB4ICsgaFxyXG5cdFx0dmFyIGR4ID0gcGFyc2VJbnQocHggLSBjeCk7XHJcblx0XHR2YXIgZHkgPSBwYXJzZUludChweSAtIGN5KTtcclxuXHJcblx0XHR2YXIgdHgsIHR5O1xyXG5cclxuXHRcdGlmIChkeCA9PSAwICYmIGR5ICE9IDApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChjeCwgY3kgKyBiICogZHkgLyBNYXRoLmFicyhkeSkpO1xyXG5cdFx0fSBlbHNlIGlmIChkeCA9PSAwICYmIGR5ID09IDApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChweCwgcHkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENhbGN1bGF0ZXMgaW50ZXJzZWN0aW9uXHJcblx0XHR2YXIgZCA9IGR5IC8gZHg7XHJcblx0XHR2YXIgaCA9IGN5IC0gZCAqIGN4O1xyXG5cdFx0dmFyIGUgPSBhICogYSAqIGQgKiBkICsgYiAqIGI7XHJcblx0XHR2YXIgZiA9IC0yICogY3ggKiBlO1xyXG5cdFx0dmFyIGcgPSBhICogYSAqIGQgKiBkICogY3ggKiBjeCArIGIgKiBiICogY3ggKiBjeCAtIGEgKiBhICogYiAqIGI7XHJcblx0XHR2YXIgZGV0ID0gTWF0aC5zcXJ0KGYgKiBmIC0gNCAqIGUgKiBnKTtcclxuXHJcblx0XHQvLyBUd28gc29sdXRpb25zIChwZXJpbWV0ZXIgcG9pbnRzKVxyXG5cdFx0dmFyIHhvdXQxID0gKC1mICsgZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeG91dDIgPSAoLWYgLSBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB5b3V0MSA9IGQgKiB4b3V0MSArIGg7XHJcblx0XHR2YXIgeW91dDIgPSBkICogeG91dDIgKyBoO1xyXG5cdFx0dmFyIGRpc3QxID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MSAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDEgLSBweSksIDIpKTtcclxuXHRcdHZhciBkaXN0MiA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDIgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQyIC0gcHkpLCAyKSk7XHJcblxyXG5cdFx0Ly8gQ29ycmVjdCBzb2x1dGlvblxyXG5cdFx0dmFyIHhvdXQgPSAwO1xyXG5cdFx0dmFyIHlvdXQgPSAwO1xyXG5cclxuXHRcdGlmIChkaXN0MSA8IGRpc3QyKSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MTtcclxuXHRcdFx0eW91dCA9IHlvdXQxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0eG91dCA9IHhvdXQyO1xyXG5cdFx0XHR5b3V0ID0geW91dDI7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoeG91dCwgeW91dCk7XHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChkaXIueCA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCAtIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueCA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4ICsgYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci55ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSAtIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci55ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5ICsgYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdHR5cGU6IFwiZGlyZWN0XCIsXG5cdHNob3dHYXVnZTogZmFsc2UsXG5cdG9ydGhvZ29uYWw6IGZhbHNlXG59O1xuXG5sZXQgZGVmYXVsdEdlb21ldHJ5ID0ge1xuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwLFxuXHRhbmNob3JYOiAwLFxuXHRhbmNob3JZOiAwLFxuXHRvZmZzZXRYOiAwLFxuXHRvZmZzZXRZOiAwXG59O1xuXG5sZXQgbGlua1R5cGVzID0ge307XG5cbmNsYXNzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0dGhpcy5zdGFydCA9IHRlcm1pbmFsVmlzdWFsWzBdLnBvaW50O1xuXHRcdHRoaXMuZW5kID0gdGVybWluYWxWaXN1YWxbMV0ucG9pbnQ7XG5cdFx0dGhpcy5zdGFydE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzBdLmRpcmVjdGlvbjtcblx0XHR0aGlzLmVuZE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzFdLmRpcmVjdGlvbjtcblx0XHR0aGlzLnN0YXJ0TWFya2VyID0gc3RhcnRNYXJrZXI7XG5cdFx0dGhpcy5lbmRNYXJrZXIgPSBlbmRNYXJrZXI7XG5cdFx0Xy5hc3NpZ24odGhpcywgc2hhcGVDb25maWcpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMaW5rKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGNvbnRyb2xQdHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBsZW5ndGgoKSB7XG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzO1xuXHRcdGxldCBpLCBsID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcblx0XHRcdGwgKz0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRyZXR1cm4gbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIHdoZXJlIHRvIHB1dCBtb2RpZmllcnMgb3IgbGFiZWwuLlxuXHQgKlxuXHQgKiBAcGFyYW0gZ2VvbWV0cnk6IGRlZmluZXMgaG93IGZhciBhbG9uZyB0aGUgZWRnZSBzaG91bGQgdGhlIHBvaW50IGJlIHBsYWNlZC5cblx0ICogQHJldHVybiAqW10gdGhlIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApIDw9IDEpIHAgKj0gbDtcblx0XHRpZiAocCA8IDApIHAgPSBsICsgcDtcblx0XHRpZiAocCA+IGwpIHAgPSBsO1xuXG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzLCBkLCBwb2ludCwgZGlyO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0ZCA9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRpZiAocCA8PSBkKSB7XG5cdFx0XHRcdC8vIHdlJ3ZlIGxvY2F0ZWQgdGhlIGxpbmUgc2VnbWVudC5cblx0XHRcdFx0cG9pbnQgPSBwb2ludHNbaV0uY2xvbmUoKTtcblx0XHRcdFx0ZGlyID0gcG9pbnQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0cG9pbnQudHJhbnNsYXRlKGRpci5nZXRTY2FsZWQocCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHAgLT0gZDtcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gdGhlIGxhc3QgcG9pbnQuXG5cdFx0aWYgKCFwb2ludClcblx0XHRcdHBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmsnO1xuXHR9XG5cblx0c3RhdGljIGdldExpbmsodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAoc2hhcGVDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBsaW5rQ2xhc3MgPSBsaW5rVHlwZXNbc2hhcGVDb25maWcudHlwZV07XG5cdFx0aWYgKGxpbmtDbGFzcylcblx0XHRcdHJldHVybiBuZXcgbGlua0NsYXNzKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdFx0Y29uc29sZS5sb2coJ2xpbmsgdHlwZSBub3Qgc3VwcG9ydGVkOiAnICsgc2hhcGVDb25maWcudHlwZSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuY2xhc3MgRGlyZWN0TGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG59XG5cbmNsYXNzIEJlemllckxpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxuXG5cdGdldCBjb250cm9sUHRzKCkge1xuXHRcdGxldCBzID0gdGhpcy5wb2ludHNbMF0sIGUgPSB0aGlzLnBvaW50c1sxXTtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0cHRzWzBdID0gbnVsbDtcblx0XHRwdHNbMV0gPSBbXTtcblx0XHRpZiAodGhpcy5zdGFydE5vcm1hbC54ID09IDApIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludChzLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBzLnkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoZS54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgZS55KTtcblx0XHR9XG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA+IDEpIHAgLz0gbDtcblx0XHRpZiAocCA8IDApIHArKztcblx0XHRpZiAocCA+IDEpIHAtLTtcblxuXHRcdGxldCBwdHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgY3RybHB0cyA9IHRoaXMuY29udHJvbFB0cztcblx0XHRsZXQgcDEgPSBwdHNbMF07XG5cdFx0bGV0IHAyID0gY3RybHB0c1sxXVswXTtcblx0XHRsZXQgcDMgPSBjdHJscHRzWzFdWzFdO1xuXHRcdGxldCBwNCA9IHB0c1sxXTtcblxuXHRcdGxldCBwb2ludCA9IFsoMS1wKSooMS1wKSooMS1wKSAqIHAxLnggKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi54ICsgMypwKnAqKDEtcCkgKiBwMy54ICsgcCpwKnAgKiBwNC54LCAoMS1wKSooMS1wKSooMS1wKSAqIHAxLnkgKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi55ICsgMypwKnAqKDEtcCkgKiBwMy55ICsgcCpwKnAgKiBwNC55XTtcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XG5cdH1cbn1cblxuY2xhc3MgRW50aXR5UmVsYXRpb25zIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0dmFyIHNvdXJjZSA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIHRydWUpO1xuXHRcdHZhciB0YXJnZXQgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCBmYWxzZSk7XG5cdFx0dmFyIGlzU291cmNlTGVmdCA9IHRhcmdldC5yaWdodCgpIDwgc291cmNlLng7XG5cdFx0dmFyIGlzVGFyZ2V0TGVmdCA9IHNvdXJjZS5yaWdodCgpIDwgdGFyZ2V0Lng7XG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xuXG5cdFx0dmFyIHgwID0gKGlzU291cmNlTGVmdCkgPyBzb3VyY2UueCA6IHNvdXJjZS54ICsgc291cmNlLndpZHRoO1xuXHRcdHZhciB5MCA9IHNvdXJjZS5nZXRDZW50ZXJZKCk7XG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgwLCB5MCkpO1xuXG5cdFx0dmFyIHhlID0gKGlzVGFyZ2V0TGVmdCkgPyB0YXJnZXQueCA6IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xuXHRcdHZhciB5ZSA9IHRhcmdldC5nZXRDZW50ZXJZKCk7XG5cblx0XHR2YXIgc2VnID0gdGhpcy5zZWdtZW50O1xuXG5cdFx0dmFyIGR4ID0gKGlzU291cmNlTGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBkZXAgPSBuZXcgUG9pbnQoeDAgKyBkeCwgeTApO1xuXG5cdFx0ZHggPSAoaXNUYXJnZXRMZWZ0KSA/IC1zZWcgOiBzZWc7XG5cdFx0dmFyIGFyciA9IG5ldyBQb2ludCh4ZSArIGR4LCB5ZSk7XG5cblx0XHQvLyBBZGRzIGludGVybWVkaWF0ZSBwb2ludHMgaWYgYm90aCBnbyBvdXQgb24gc2FtZSBzaWRlXG5cdFx0aWYgKGlzU291cmNlTGVmdCA9PSBpc1RhcmdldExlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIHggPSAoaXNTb3VyY2VMZWZ0KSA/XG5cdFx0XHRNYXRoLm1pbih4MCwgeGUpLXNlZyA6XG5cdFx0XHRNYXRoLm1heCh4MCwgeGUpK3NlZztcblxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHkwKSk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeWUpKTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoKGRlcC54IDwgYXJyLngpID09IGlzU291cmNlTGVmdClcblx0XHR7XG5cdFx0XHR2YXIgbWlkWSA9IHkwICsgKHllIC0geTApIC8gMjtcblxuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChkZXAueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGFyci54LCBtaWRZKSk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XG5cdFx0fVxuXG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHhlLCB5ZSkpO1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cbn1cblxuXG5jbGFzcyBNYW5oYXR0YW4gZXh0ZW5kcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzKHNoYXBlQ29uZmlnLCB7XG5cdFx0XHRNSU5fQlVGRkVSOiAxMCxcblx0XHRcdGF1dG9Sb3V0ZTogZmFsc2UsXG5cdFx0XHRtYXhDaGFubmVsV2lkdGg6IDEwMFxuXHRcdH0pO1xuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkge1xuXHRcdGxldCBwb3MgPSBNYW5oYXR0YW4ucm91dGVJbnRlcm5hbCh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy5zdGFydE5vcm1hbCwgdGhpcy5lbmROb3JtYWwsIHRoaXMuTUlOX0JVRkZFUik7XG5cdFx0cG9zID0gTWFuaGF0dGFuLnByb2Nlc3NQb3NpdGlvbnModGhpcy5zdGFydCwgdGhpcy5lbmQsIHBvcywgdGhpcy5zdGFydE5vcm1hbC54IT0wKTtcblx0XHRpZiAodGhpcy5hdXRvUm91dGUpIHtcblx0XHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRcdHZhciBib3hlcyA9IFtdLCBub2RlLCBzdGFydEJveCwgZW5kQm94O1xuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGVkZ2Uuc291cmNlLmdldENvbW1vbkFuY2VzdG9yKGVkZ2UudGFyZ2V0KTtcblx0XHRcdHZhciBjaGlsZE5vZGVzID0gY29udGFpbmVyLmdldERlc2NlbmRhbnRzKCk7XG5cdFx0XHR2YXIgaW5kZXggPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXHRcdFx0XHQvLyBEbyBub3QgaW5jbHVkZSBzb3VyY2Ugb3IgdGFyZ2V0IGFuY2VzdG9ycyBpbiByb3V0aW5nLlxuXHRcdFx0XHRpZiAobm9kZS5leGNsdWRlRnJvbVJvdXRpbmcoZWRnZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2Uuc291cmNlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS50YXJnZXQpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS5zb3VyY2UpXG5cdFx0XHRcdHN0YXJ0Qm94ID0gaW5kZXg7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2UudGFyZ2V0KVxuXHRcdFx0XHRlbmRCb3ggPSBpbmRleDtcblx0XHRcdFx0Ym94ZXMucHVzaChub2RlLmdldEJvdW5kcyhkb2N1bWVudCkpO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGJveGVzLmxlbmd0aCA+IDEpXG5cdFx0XHRcdHRoaXMuYXV0b1JvdXRlKHBvcywgY29udGFpbmVyLmdldEJvdW5kcyhkb2N1bWVudCksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHR9XG5cdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIHJvdXRlIGJhc2VkIG9uIHRoZSBzdGFydCwgZW5kIGFuZCBzdGFydE5vcm1hbCBhbmQgZW5kTm9ybWFsXG5cdCAqIE5vbmUgb2YgdGhlIHBhcmFtZXRlcnMgY2FuIGJlIG51bGxcblx0ICogVE9ETzogVGhpcyBtZXRob2QgY291bGQgdXNlIHNvbWUgaW1wcm92ZW1lbnQuLi5cblx0ICovXG5cdHN0YXRpYyByb3V0ZUludGVybmFsKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5nZXREaXJlY3Rpb24oZW5kKTtcblx0XHR2YXIgYXZlcmFnZSA9IHN0YXJ0LmdldE1pZFBvaW50KGVuZCk7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHZhciBzdGFydFBvc2l0aXZlID0gbmV3IFBvaW50KHN0YXJ0Tm9ybWFsLngqc3RhcnROb3JtYWwueCwgc3RhcnROb3JtYWwueSpzdGFydE5vcm1hbC55KTtcblx0XHR2YXIgZW5kUG9zaXRpdmUgPSBuZXcgUG9pbnQoZW5kTm9ybWFsLngqZW5kTm9ybWFsLngsIGVuZE5vcm1hbC55KmVuZE5vcm1hbC55KTtcblx0XHR2YXIgaG9yaXpvbnRhbCA9IHN0YXJ0Tm9ybWFsLnggIT0gMDtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueSA6IHN0YXJ0Lng7XG5cblx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0dmFyIGk7XG5cdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA9PSAwKSB7XG5cdFx0XHRpZiAoKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHQmJiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8PSAwKSkge1xuXHRcdFx0XHQvLyAwXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyAyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+IDApXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID4gMCkge1xuXHRcdFx0XHQvLzFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLzMgb3IgMVxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHBvcy5wdXNoKGhvcml6b250YWwgPyBlbmQueSA6IGVuZC54KTtcblxuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvLyBQcm9jZXNzIHRoZSBwb3NpdGlvbnMuXG5cdHN0YXRpYyBwcm9jZXNzUG9zaXRpb25zKHN0YXJ0LCBlbmQsIHBvc2l0aW9ucywgaG9yaXpvbnRhbCkge1xuXHRcdHZhciBwb3MgPSBbXTtcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueCA6IHN0YXJ0Lnk7XG5cdFx0dmFyIGk7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cG9zW2kgKyAxXSA9IHBvc2l0aW9uc1tpXTtcblx0XHR9XG5cdFx0cG9zLnB1c2goKGhvcml6b250YWwgPT0gKHBvc2l0aW9ucy5sZW5ndGggJSAyID09IDEpKSA/IGVuZC54IDogZW5kLnkpO1xuXG5cdFx0dmFyIHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IHN0YXJ0O1xuXHRcdHZhciBwO1xuXHRcdHZhciBjdXJyZW50LCBwcmV2O1xuXHRcdGZvciAoaSA9IDI7IGkgPCBwb3MubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRwcmV2ID0gcG9zW2kgLSAxXTtcblx0XHRcdGN1cnJlbnQgPSBwb3NbaV07XG5cdFx0XHRwID0gaG9yaXpvbnRhbCA/IG5ldyBQb2ludChwcmV2LCBjdXJyZW50KSA6IG5ldyBQb2ludChjdXJyZW50LCBwcmV2KTtcblx0XHRcdHB0cy5wdXNoKHApO1xuXHRcdH1cblx0XHRwdHMucHVzaChlbmQpO1xuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSByb3V0ZSB0aGUgY29ubmVjdGlvbiB0byBhdm9pZCBpbnRlcnNlY3Rpb25zIHdpdGggb3RoZXIgdmVydGljZXMuXG5cdCAqL1xuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIHNpZGUsIHNpZGUyLCBkLCBib3gsIGludGVyc2VjdCwgajtcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XG5cblx0XHR2YXIgc3RhcnRQYWRkaW5nID0gMCwgZW5kUGFkZGluZztcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XG5cdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDJdO1xuXHRcdGlmIChwdC55IDwgYm94LnkpXG5cdFx0XHRzaWRlID0gMTtcblx0XHRlbHNlIGlmIChwdC55ID4gYm94LnkgKyBib3guaGVpZ2h0KVxuXHRcdFx0c2lkZSA9IDM7XG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxuXHRcdFx0c2lkZSA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0c2lkZSA9IDI7XG5cdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgZW5kQm94LCBib3hlcywgc2lkZSk7XG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdFx0aWYgKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcblx0XHRcdHN3aXRjaChzaWRlKSB7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS55ID09IHB0c1tpKzNdLnkpICYmIChwdHNbaSsyXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpKzJdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIuYm90dG9tICsgY2hhbm5lbDIudG9wKS8yIC0gcHQueTtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS54ID09IHB0c1tpKzNdLngpICYmIChwdHNbaSsyXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaSsyXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIucmlnaHQgKyBjaGFubmVsMi5sZWZ0KS8yIC0gcHQueDtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIG1heCBwb2ludHMuXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpKzEsIDAsIHB0KTtcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHR9XG5cdH1cblxuXHRfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBib3gsIHNpZGUsIHNhdmVkSW5kZXggPSBudWxsLCBzYXZlZFNpZGUgPSBudWxsO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgoaSA9PSAwICYmIGogPT0gc3RhcnRCb3gpIHx8IChpID09IHB0cy5sZW5ndGggLSAyICYmIGogPT0gZW5kQm94KSlcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdHNpZGUgPSBib3guZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pO1xuXHRcdFx0aWYgKHNpZGUgPj0gMCkge1xuXHRcdFx0XHRpZiAoc2F2ZWRJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoYm94ZXNbc2F2ZWRJbmRleF0uZGlzdGFuY2UocHRzW2ldKSA+IGJveC5kaXN0YW5jZShwdHNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzYXZlZEluZGV4ICE9IG51bGwpXG5cdFx0XHRyZXR1cm4gW3NhdmVkSW5kZXgsIHNhdmVkU2lkZV07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIGJyZWFrUHQsIGJveCwgc2lkZSkge1xuXHRcdHZhciBkaXI7XG5cdFx0dmFyIHA7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHAgPSBcInlcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHAgPSBcInhcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vZmlyc3QgdHJ5IHRoZSBicmVha3B0LlxuXHRcdGRpciA9IF9nZXRSb3V0ZURpcmVjdGlvbihicmVha1B0LCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdGRpciA9IC1fZ2V0Um91dGVEaXJlY3Rpb24ocHRzWzBdLCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0XHRpZiAoYnJlYWtQdFtwXSA8IGJveC5nZXRDZW50ZXIoKVtwXSlcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkaXI7XG5cdH1cblxuXHRfZ2V0Um91dGVEaXJlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcblx0XHRcdHJldHVybiBQb2ludC5OO1xuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcblx0XHRcdHJldHVybiBQb2ludC5XO1xuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcblx0XHRcdHJldHVybiBQb2ludC5ORTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcblx0XHRcdHJldHVybiBQb2ludC5OVztcblx0XHR9XG5cdH1cblxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xuXHRcdHZhciBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcblx0XHR2YXIgYm94MSA9IGJveGVzW2luZGV4XSwgYm94Mjtcblx0XHR2YXIgcHQsIGk7XG5cdFx0dmFyIGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcblx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IHB0Lng7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkge1xuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNoYW5uZWwucmlnaHQgLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkge1xuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNoYW5uZWwuYm90dG9tIC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRSaWdodCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAobCA8PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRCb3R0b20oKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGlmIChib3gyLmdldFRvcCgpLnkgPD0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYW5uZWw7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHB0cyB0aGUgbGlzdCBvZiBwb2ludHMuXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSBzdGFydFBhZGRpbmdcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcblx0ICovXG5cdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZykge1xuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxuXHRcdHZhciBkaXIsIGwsIHB0O1xuXHRcdGlmIChpID09IDApIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xuXHRcdFx0aWYgKCFzdGFydFBhZGRpbmcpXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbMF0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoaSA9PSBwdHMubGVuZ3RoIC0gMikge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgZW5kIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcblx0XHRcdGlmICghZW5kUGFkZGluZylcblx0XHRcdFx0ZW5kUGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XG5cdFx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMV0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZShwdHMubGVuZ3RoIC0gMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHB0c1tpXS55ID09IHB0c1tpKzFdLnkpIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnkgPT0gcHRzW2ldLnkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueSArPSBkO1xuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS54ID09IHB0c1tpXS54KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnggKz0gZDtcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBtZXRob2Qgd2lsbCBtZXJnZSB0aGUgcmVkdW5kYW50IHNlZ21lbnRzLlxuXHQgKi9cblx0X21lcmdlU2VnbWVudHMocHRzKSB7XG5cdFx0dmFyIGgxID0gcHRzW3B0cy5sZW5ndGgtMV0ueSA9PSBwdHNbcHRzLmxlbmd0aC0yXS55O1xuXHRcdHZhciBoMjtcblx0XHRmb3IgKHZhciBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XG5cdFx0XHRoMiA9IHB0c1tpXS55ID09IHB0c1tpLTFdLnk7XG5cdFx0XHRpZiAoaDIgPT0gaDEgfHwgKHB0c1tpXS5lcXVhbHMocHRzW2ktMV0pKSlcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0aDEgPSAhaDE7XG5cdFx0fVxuXHR9XG59XG5cbmxpbmtUeXBlc1snZGlyZWN0J10gPSBEaXJlY3RMaW5rO1xubGlua1R5cGVzWydiZXppZXInXSA9IEJlemllckxpbms7XG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xubGlua1R5cGVzWydtYW5oYXR0YW4nXSA9IE1hbmhhdHRhbjtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmsuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgKiBhcyBLZXlVdGlscyBmcm9tIFwiLi9LZXlVdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgREVGQVVMVFMgPSB7XG5cdHN0b3BQcm9wYWdhdGlvbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0Ly9pZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxuXHRcdC8vXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRyeSB0byBzaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzLlxuXHQgKi9cblx0c2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0bGV0IGxhc3QsIHN0YWNrO1xuXHRcdGNvbnN0IGNsZWFyRW50ZXJTdGFjayA9IChrKSA9PiB7XG5cdFx0XHRrID0gayB8fCAwO1xuXHRcdFx0Ly8gQ2xlYXIgb2ZmIHRoZSBlbnRlciBzdGFjay5cblx0XHRcdHdoaWxlICh0aGlzLmVudGVyU3RhY2subGVuZ3RoID49IGsgKyAxKSB7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmVudGVyU3RhY2sucG9wKCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWxlYXZlJywgbGFzdC5ucywgbGFzdC5kYXRhLCBwb3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZ2V0TlMgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcblx0XHRcdFx0dmFyIHZhbCA9IHN0YWNrW2ldLmdldEF0dHJpYnV0ZShcIm5zXCIpO1xuXHRcdFx0XHRpZiAoXy5zdGFydHNXaXRoKHZhbCwgXCJyb290LlwiKSlcblx0XHRcdFx0XHR2YWwgPSB2YWwuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRidWYuYXBwZW5kKHZhbCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0fTtcblxuXHRcdGlmIChucyAmJiBucyAhPSB0aGlzLnJvb3ROUykge1xuXHRcdFx0aWYgKHR5cGUgPT0gJ21vdXNlb3ZlcicpIHtcblx0XHRcdFx0c3RhY2sgPSBldmVudC50YXJnZXRTdGFjaztcblx0XHRcdFx0bGV0IGl0ZW07XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmVudGVyU3RhY2tbaV0udGFyZ2V0ICE9IHN0YWNrW2ldKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhpKTtcblx0XHRcdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aXRlbSA9IHtkYXRhOiBkYXRhLCBuczogZ2V0TlMoaSksIHRhcmdldDogc3RhY2tbaV19O1xuXHRcdFx0XHRcdHRoaXMuZW50ZXJTdGFjay5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWVudGVyJywgaXRlbS5ucywgZGF0YSwgcG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aClcblx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soc3RhY2subGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5zID09IHRoaXMucm9vdE5TICYmIHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPiAwKVxuXHRcdFx0Y2xlYXJFbnRlclN0YWNrKCk7XG5cdH1cblxuXHRkaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdC8vaWYgKHR5cGUgIT0gJ21vdXNlb3ZlcicgJiYgdHlwZSAhPSAnbW91c2VvdXQnKVxuXHRcdC8vXHRVdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiZGlzcGF0Y2ggLSBcIiArIHR5cGUgKyAnLicgKyBucyArICc7JyArIHBvcyArICc7cm9vdFRhcmdldD0nICsgZXZlbnQucm9vdFRhcmdldCArICc7ZGF0YT0nICsgZGF0YSk7XG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRjb25zdCBuc1R5cGUgPSBucyA/IHR5cGUgKyAnLicgKyBucyA6IHR5cGU7XG5cdFx0Xy5mb3JFYWNoKHRoaXMubGlzdGVuZXJzLCAobGlzdGVuZXJzLCBrZXkpID0+IHtcblx0XHRcdGlmIChFdmVudERpc3BhdGNoZXIubWF0Y2gobnNUeXBlLCBrZXkpKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KHdpbmRvdywgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHBvcztcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcblx0ICogLy8gS2V5IGlzIG9iamVjdCB7Y3RybCwgYWx0LCBzaGlmdCwgbWV0YSwgY29kZX1cblx0ICovXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnVucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XG5cdFx0XHRfLmZvckVhY2godHlwZSwgKHQpID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXSB8fCAodGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW3R5cGVdLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc3RvcCgpO1xuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XG5cdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzO1xuXHRcdGRlbGV0ZSB0aGlzLmVudGVyU3RhY2s7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgdHlwZSBtYXRjaGVzIHRoZSByZWFsIGV2ZW50IHR5cGUuIFwiKlwiIGlzIGFsbG93ZWQgYXMgYSB3aWxkIGNhcmQuXG5cdCAqL1xuXHRzdGF0aWMgbWF0Y2gobnNUeXBlLCByZWdpc3RlcmVkVHlwZSkge1xuXHRcdGNvbnN0IGFyciA9IHJlZ2lzdGVyZWRUeXBlLnNwbGl0KCcqJyk7XG5cdFx0aWYgKGFyci5sZW5ndGggPT0gMSlcblx0XHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XG5cblx0XHRsZXQgc3Vic3RyLCBpbmRleCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuXHRcdFx0c3Vic3RyID0gbnNUeXBlLnNsaWNlKGluZGV4KTtcblx0XHRcdGluZGV4ID0gc3Vic3RyLmluZGV4T2YoYXJyW2ldKTtcblx0XHRcdGlmIChpbmRleCA8IDApXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdGluZGV4ICs9IGFycltpXS5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xuXHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHR2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuXHRcdFx0dmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG5cdFx0XHRyZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuXHRcdH1cblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRyZXR1cm4gW2UuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3BdO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanNcbiAqKi8iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG4vKipcbiAqIEtFWSBjb25zdGFudFxuICovXG5jb25zdCBLRVkgPSB7XG5cdEFMVCAgICAgICAgICA6IDE4LFxuXHRCQUNLX1NQQUNFICAgOiA4LFxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcblx0Q09OVFJPTCAgICAgIDogMTcsXG5cdERFTEVURSAgICAgICA6IDQ2LFxuXHRET1dOICAgICAgICAgOiA0MCxcblx0RU5EICAgICAgICAgIDogMzUsXG5cdEVOVEVSICAgICAgICA6IDEzLFxuXHRFU0NBUEUgICAgICAgOiAyMjAsXG5cdEhPTUUgICAgICAgICA6IDM2LFxuXHRMRUZUICAgICAgICAgOiAzNyxcblx0TUVUQSAgICAgICAgIDogMjI0LFxuXHROVU1fTE9DSyAgICAgOiAxNDQsXG5cdFBBR0VfRE9XTiAgICA6IDM0LFxuXHRQQUdFX1VQICAgICAgOiAzMyxcblx0UEFVU0UgICAgICAgIDogMTksXG5cdFBSSU5UU0NSRUVOICA6IDQ0LFxuXHRSSUdIVCAgICAgICAgOiAzOSxcblx0U0NST0xMX0xPQ0sgIDogMTQ1LFxuXHRTSElGVCAgICAgICAgOiAxNixcblx0U1BBQ0UgICAgICAgIDogMzIsXG5cdFRBQiAgICAgICAgICA6IDksXG5cdFVQICAgICAgICAgICA6IDM4XG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxuXHQvL1NVQlRSQUNUICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDE3MyA6IDE4OVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUV2ZW50KGV2ZW50KSB7XG5cdGlmICghZXZlbnQgfHwgIWV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cblx0Ly8gTmVlZCB0byBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXNcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcblx0XHRrZXkgPSBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGdldEtleURhdGEoZXZlbnQuY3RybEtleSwgZXZlbnQuYWx0S2V5LCBldmVudC5zaGlmdEtleSwgZXZlbnQubWV0YUtleSwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleURhdGEoY3RybCwgYWx0LCBzaGlmdCwgbWV0YSwga2V5KSB7XG5cdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0aWYgKGN0cmwpIGJ1Zi5hcHBlbmQoXCJDVFJMXCIpO1xuXHRpZiAoYWx0KSBidWYuYXBwZW5kKFwiQUxUXCIpO1xuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcblx0aWYgKG1ldGEpIGJ1Zi5hcHBlbmQoXCJNRVRBXCIpO1xuXHRpZiAoa2V5KSBidWYuYXBwZW5kKGtleSk7XG5cblx0cmV0dXJuIGJ1Zi50b1N0cmluZyhcIi5cIik7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdmlldy9NYXJrZXJcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZSxcblx0c3RhcnRNYXJrZXI6IG51bGwsXG5cdGVuZE1hcmtlcjoge1xuXHRcdGlkOiAnRGVmYXVsdF9FbmRNYXJrZXInLFxuXHRcdHR5cGU6ICdhcnJvdycsXG5cdFx0c2l6ZTogMTBcblx0fSxcblx0Lyogc3RhcnQgYW5kIGVuZCBpcyBvbmx5IHVzZWQgaWYgdGhlIGVkZ2UgaXMgbm90IGNvbm5lY3RlZCB0byBhIG5vZGUgKi9cblx0c3RhcnQ6IFswLCAwXSxcblx0ZW5kOiBbNDAwLCAyMDBdXG59O1xuXG5jbGFzcyBHcmFwaCB7XG5cdGNvbnN0cnVjdG9yKGlkID0gXy51bmlxdWVJZChcIkdcIiksIGNvbmZpZyA9IHt9LCBtb2RlbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdHRoaXMubm9kZXMgPSB7fTtcblx0XHR0aGlzLmVkZ2VzID0ge307XG5cblx0XHR0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLm5vZGVUeXBlcywgXCJOb2Rlc1wiLCBub2RlRGVmYXVsdHMpO1xuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLmVkZ2VUeXBlcywgXCJFZGdlc1wiLCBlZGdlRGVmYXVsdHMpO1xuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxuXHRcdHRoaXMubWFya2VycyA9IFtdO1xuXHRcdGxldCBlZGdlVHlwZXMgPSBVdGlscy50eXBlKEVkZ2UubmFtZXNwYWNlKSwgbWFya2VyLCBtYXJrZXJDb25maWc7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiBlZGdlVHlwZXMuZW50cmllcygpKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRlbGV0ZSBjb25maWcubm9kZVR5cGVzO1xuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xuXHRcdGlmIChtb2RlbClcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XG5cdFx0dmFyIGpzQ2xhc3MgPSBudWxsO1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cblx0XHRcdHZhciB0eXBlID0gVXRpbHMudHlwZShkZWZhdWx0Q2xhc3MubmFtZXNwYWNlLCBjb25maWcudHlwZSk7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcblx0XHR9XG5cblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgTm9kZVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xuXHRcdGxldCBFZGdlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgRWRnZSk7XG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xuXG5cdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBlZGdlKTtcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcblx0XHRyZXR1cm4gZWRnZTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQsIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cmV0dXJuIHNoYXBlLmdldFBlcmltZXRlcihlbmRQdCwgb3J0aG9nb25hbCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKFwibGFiZWxcIikgPyB0aGlzLnByb3AoXCJsYWJlbFwiKSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xuXHRcdHJldHVybiAnTm9kZTp7aWQ6JyArIHRoaXMuaWQgKyAnO2xhYmVsOicgKyBsYWJlbCArICc7dHlwZTonICsgdGhpcy5wcm9wcy5jb25zdHJ1Y3Rvci50eXBlTmFtZSArICd9Jztcblx0fVxufVxuTm9kZS5uYW1lc3BhY2UgPSBcIk5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG5cbi8qXG5cbi8qKlxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cbiAqXG5WZXJ0ZXgucHJvdG90eXBlLmdldERyaWxsRG93blBhcmVudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcblx0cmV0dXJuICEobW9kZSAmIEdyYXBoLkFMTE9XX0lOVEVSQUNUSU9OUyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmdldENydW1iVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIik7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvTm9kZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuLyoqXG4gKiBUaGUgQ2VsbCBpcyB0aGUgY29tbW9uIHBhcmVudCBmb3IgTm9kZSBhbmQgRWRnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7aWQ6IF8udW5pcXVlSWQoKX0pIHtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcblx0XHRkZWxldGUgY29uZmlnLmlkO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXG5cdFx0aWYgKGNvbmZpZy5kZWNvcmF0b3JzKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXG5cdFx0aWYgKGNvbmZpZy52aWV3cykge1xuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxuXHRcdHZhciB0eXBlID0gY29uZmlnLnR5cGUgfHwgXCJEZWZhdWx0XCI7XG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgbm90IGZvdW5kIFwiICsgY29uZmlnLnR5cGUpO1xuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcblx0fVxuXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0L1NldCBwcm9wZXJ0eSBzdG9yZWQgYnkgdmlld3MuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dmlld1Byb3Aoa2V5ID0gJ2RlZmF1bHQnLCBuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XG5cdFx0fVxuXHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMudmlld1Byb3BzW2tleV0pXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEZWNvcmF0b3JzKGRlY29yYXRvcnMpIHt9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9wZXJ0aWVzIG5lZWRlZCBmb3IgcmVuZGVyaW5nIHRoaXMgZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XG5cdCAqL1xuXHRnZXRWaWV3KGtleSkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xuXHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcblx0XHRcdG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2Vcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KSByZXR1cm4gJyc7XG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLmdyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XG5cdFx0ZGVsZXRlIHRoaXMudmlld1Byb3BzO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblx0fVxufVxuXG4vKlxuXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInlcIiwgTWF0aC5yb3VuZCh5KSk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIGgpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuU2VsZWN0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwic2VsZWN0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xuXHRyZXR1cm4gdGhpcy5ncmFwaC5nZXRUeXBlKHR5cGVTdHIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY3JlYXRlTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kaWZpZXJzKSB7XG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcblx0aWYgKG1vZGlmaWVyU2V0dGluZ3MpIHtcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XG5cdFx0XHRjb25maWcuc2V0dGluZyA9IG1vZGlmaWVyU2V0dGluZ3NbY29uZmlnLmNsYXNzTmFtZV07XG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmFkZE1vZGlmaWVyKGNvbmZpZy5jbGFzc05hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIENoZWNrIGZvciBzaG93QWx3YXlzIHNldHRpbmdzXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XG5cdFx0XHRcdHZhciBjb25maWcgPSB7dHlwZTogdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUobmFtZSksIHNldHRpbmc6IHNldHRpbmd9O1xuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHR9XG59O1xuXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XG5cdGlmICghdGhpcy5tb2RpZmllcnMpXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcblxuXHRpZiAoIW1vZGlmaWVyLmhhc093blByb3BlcnR5KFwic2hvd0hlYWRlclwiKSlcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcblxuXHQvLyBAaGFjayBwcmVmZXJhYmx5IHNldCBpdCBpbiBjb25maWd1cmF0aW9ucy5cblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XG5cblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXG5cdFx0dGhpcy5jcmVhdGVNb2RpZmllcnMoKTtcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xuXHRpZiAobW9kaWZpZXJzKVxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XG5cdHJldHVybiBudWxsO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJyk7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0NhY2hlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdHJvdGF0aW9uOiBudWxsLFxuXHRnZW9tZXRyeToge3g6IDAsIHk6IDAsIGFuY2hvclk6IDAsIG9mZnNldFg6IDAsIG9mZnNldFk6IDB9XG59O1xuXG4vKipcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxuXHQgKi9cblx0bGV0IGdldFN0cmluZ1NpemUgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0ZG9jLm9wZW4oKTtcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcblx0XHRcdFx0PGRpdiBpZD1cImJhc2VsaW5lRGl2XCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7XCI+PHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDowXCI+VDwvc3Bhbj48c3BhbiBzdHlsZT1cImhlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvc3Bhbj48L2Rpdj5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xuXHRcdH1cblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gbWVhc3VyZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xuXG5cdFx0bGV0IHN0cnV0ID0gYmFzZWxpbmVEaXYuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XG5cblx0XHRyZXR1cm4ge3dpZHRoOiBtZWFzdXJlRGl2Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IG1lYXN1cmVEaXYub2Zmc2V0SGVpZ2h0LCBiYXNlbGluZTogYmFzZWxpbmVIZWlnaHR9O1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdGxldCBhcnIgPSBbXTtcblx0XHRsZXQgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplLndpZHRoO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywge3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcblx0XHRsZXQgYWxpZ24gPSBsYWJlbENvbmZpZy5hbGlnbjtcblxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XG5cdFx0aWYgKGNvbnRleHQud2lkdGgpIHtcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcblx0XHR9XG5cdFx0dyAtPSAyICogcGFkZGluZztcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xuXHRcdHcgPSBNYXRoLm1heCgwLCB3KTtcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBfLmNsb25lKGxhYmVsQ29uZmlnLmdlb21ldHJ5KTtcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSB3cmFwcGVkTGFiZWwuaGVpZ2h0ICsgMiAqIHBhZGRpbmcgKyAod3JhcHBlZExhYmVsLmxlbmd0aCAtIDEpICogbGluZVBhZGRpbmc7XG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XG5cdFx0c3dpdGNoIChhbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XG5cdFx0XHRcdGR4ID0gd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgcG9zO1xuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xuXHRcdGVsc2Vcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdC8vIHRoZSBwaXZvdCBpcyB0aGUgY2VudGVyIG9mIHJvdGF0aW9uIHdoZW4gdGhlIGxhYmVsIGhhcyBhIHJvdGF0aW9uIHNwZWNpZmllZC5cblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xuXG5cdFx0Ly8gdGhlIG1heGltdW0gYm91bmRzIGZvciB0aGUgbGFiZWwsIHVzZWQgdG8gcG9zaXRpb24gaW5saW5lIGVkaXRvclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCAtIHdyYXBwZWRMYWJlbC5iYXNlbGluZSwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHtcblx0XHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlzaWJsZSgpICYmIHRoaXMua2V5ICE9IGtleSkge1xuXHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHQvL2xldCBwb3MgPSBVdGlscy51bnNjYWxlKGdyYXBoLCBbY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJYKCkgKyBib3VuZHMueCwgY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJZKCkgKyBib3VuZHMueSArIDVdKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBib3gubWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIGJveC5tYXhCb3VuZHMudG9wXTtcblx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IChib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiAoYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy52aXNpYmxlKCkpIHJldHVybjtcblxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGV4dEVsKVxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcblxuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRpZiAoIWNhbmNlbClcblx0XHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci51cGRhdGUnLCBbdGhpcy5rZXksIHRoaXMuaW5wdXQudmFsdWVdKTtcblxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcCgnbGFiZWwnKTtcblx0XHRpZiAobGFiZWwpXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cblx0ICovXG5cdGdldFJlZmVyZW5jZVBvaW50cyhrZXkpIHtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0aWYgKHRoaXMuc291cmNlKVxuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XG5cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0VGVybWluYWxWaXN1YWwoa2V5LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xuXG5cdFx0bGV0IGdldEJvdW5kID0gZnVuY3Rpb24ocHQpIHtcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xuXHRcdH07XG5cblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMuc291cmNlLmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3NvdXJjZVBvcnQnKSwgcmVmUHRzWzFdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcblxuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzFdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzFdKSwgcmVmUHRzWzBdLCB0cnVlKX0pO1xuXHRcdHJldHVybiB0ZXJtaW5hbHM7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgY29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdHNoYXBlID0gTGluay5nZXRMaW5rKHRoaXMuZ2V0VGVybWluYWxWaXN1YWwoa2V5LCBjb25maWcub3J0aG9nb25hbCksIGNvbmZpZywgdGhpcy5wcm9wKCdzdGFydE1hcmtlcicpLCB0aGlzLnByb3AoJ2VuZE1hcmtlcicpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0VkZ2U6eycgKyAoIXRoaXMuc291cmNlID8gJ251bGwnIDogdGhpcy5zb3VyY2UuaWQpICsgJy0tJyArICghdGhpcy50YXJnZXQgPyAnbnVsbCcgOiB0aGlzLnRhcmdldC5pZCkgKyAnfSc7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLnNldFNvdXJjZShudWxsKTtcblx0XHR0aGlzLnNldFRhcmdldChudWxsKTtcblx0fVxufVxuRWRnZS5uYW1lc3BhY2UgPSBcIkVkZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEVkZ2U7XG5cbi8qXG5cbkVkZ2UucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xuXHRcdHJldHVybiAodGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSA6IHRydWUpICYmICh0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInZpc2libGVcIik7XG5cdH0gZWxzZVxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvRWRnZS5qc1xuICoqLyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxubGV0IE1hcmtlciA9IChmdW5jdGlvbigpIHtcblxuXHQvKiogQmVnaW4gU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGFycm93KHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlhbmdsZShzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIG92YWwoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgciA9IHNpemUgLyAyO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC1yLCAtciwgc2l6ZSwgc2l6ZSksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbMCwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIicgKyByICsgJ1wiIHJ5PVwiJyArIHIgKyAnXCI+PC9lbGxpcHNlPic7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpYW1vbmQoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJyc7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXHQvKiogRW5kIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBnZXRNYXJrZXIoY29uZmlnLCBzb3VyY2UpIHtcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcblx0XHR2YXIgbWFya2VyID0gZmFjdG9yeShjb25maWcuc2l6ZSwgc291cmNlLCBjb25maWcpO1xuXHRcdG1hcmtlci5pZCA9IGNvbmZpZy5pZDtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcblx0cmVnaXN0cnlbJ3RyaWFuZ2xlJ10gPSB0cmlhbmdsZTtcblx0cmVnaXN0cnlbJ292YWwnXSA9IG92YWw7XG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xuXG5cdHJldHVybiB7XG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxuXHRcdGdldE1hcmtlcjogZ2V0TWFya2VyXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTWFya2VyLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmNsYXNzIExheW91dCB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcblx0XHRcdGlmIChjb25maWcub3JpZW50YXRpb24udG9VcHBlckNhc2UoKSA9PSBcIkhPUklaT05UQUxcIilcblx0XHRcdFx0Y29uZmlnLm9yaWVudGF0aW9uID0gTGF5b3V0LkhPUklaT05UQUw7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlbGV0ZSBjb25maWcub3JpZW50YXRpb247XG5cdFx0fVxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0fVxuXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5MYXlvdXQuVkVSVElDQUwgPSAwO1xuTGF5b3V0LkhPUklaT05UQUwgPSAxO1xuXG5MYXlvdXQuREVGQVVMVFMgPSB7XG5cdG9yaWVudGF0aW9uOiBMYXlvdXQuVkVSVElDQUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuXG5jbGFzcyBGbG93TGF5b3V0IGV4dGVuZHMgTGF5b3V0IHtcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xuXHRcdHZhciBpdGVtcztcblx0XHRpZiAoIXJvb3QpXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2Rlcztcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkocm9vdCkpXG5cdFx0XHRpdGVtcyA9IHJvb3Q7XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbXMgPSByb290LmdldExpbmtlZE5vZGVzKCd0YXJnZXQnKTtcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm47XG5cblx0XHR2YXIgeCA9IDAsIHkgPSAwLCBoID0gMCwgbm9kZTtcblx0XHR2YXIgcDEgPSAwLCBwMiA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bm9kZSA9IGl0ZW1zW2ldO1xuXHRcdFx0aWYgKHggPiAwICYmIHggKyB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIikgPiBib3VuZHMud2lkdGgpIHtcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXG5cdFx0XHRcdHkgKz0gaCArIHRoaXMudmdhcDtcblx0XHRcdFx0eCA9IDA7aCA9IDA7cDEgPSAwO3AyKys7XG5cdFx0XHR9XG5cdFx0XHRub2RlLl9mbFBvcyA9IFtwMSwgcDJdO1xuXHRcdFx0bm9kZS5tb3ZlVG8oW2JvdW5kcy54ICsgeCwgYm91bmRzLnkgKyB5XSk7XG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcblx0XHRcdHAxKys7XG5cdFx0XHRoID0gaCA8IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgPyBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpIDogaDtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKG5ldyBSZWN0YW5nbGUoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIHkgKyBoKSk7XG5cdH1cbn1cblxuRmxvd0xheW91dC5ERUZBVUxUUyA9IHtcblx0aGdhcDogMTAsXG5cdHZnYXA6IDEwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93TGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcblxuY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihpZCwgY29udGFpbmVyLCBjb25maWcgPSB7fSwgZ3JhcGggPSBudWxsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiB0aGlzLmlkLCB0YWJpbmRleDogMCwgbnM6ICdncmFwaCd9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fdHJhbnNsYXRlID0gWzAsIDBdO1xuXHRcdHRoaXMuX3NjYWxlID0gMS4wO1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xuXHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5ub2RlQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuZWRnZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmNvbm5lY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdldCBncmFwaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZ3JhcGg7XG5cdH1cblxuXHRzZXQgZ3JhcGgoZ3JhcGgpIHtcblx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xuXHRcdGxldCByb290ID0gZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0aWYgKHJvb3QpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFtyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JykgfHwgMCwgcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScpIHx8IDBdO1xuXHRcdFx0dGhpcy5fc2NhbGUgPSByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcblx0XHR9XG5cdH1cblxuXHR2aWV3cG9ydChzY2FsZWQsIHZpZXdwb3J0KSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQoc2NhbGVkKSB8fCBfLmlzTnVsbChzY2FsZWQpKSBzY2FsZWQgPSBmYWxzZTtcblx0XHRpZiAoIXZpZXdwb3J0KSB7XG5cdFx0XHR2YXIgdnAgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuYm94Lm9mZnNldFdpZHRoLCB0aGlzLmJveC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0aWYgKHNjYWxlZClcblx0XHRcdFx0cmV0dXJuIFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2aWV3cG9ydCk7XG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XG5cdH1cblxuXHRnZXQgdHJhbnNsYXRlKCkgeyByZXR1cm4gdGhpcy5fdHJhbnNsYXRlOyB9XG5cdHNldCB0cmFuc2xhdGUodCkgeyB0aGlzLnRyYW5zZm9ybSh0WzBdLCB0WzFdKTsgfVxuXHRnZXQgc2NhbGUoKSB7IHJldHVybiB0aGlzLl9zY2FsZTsgfVxuXHRzZXQgc2NhbGUoaykge1xuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0XCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlIC8gdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWN0dWFsXCI6XG5cdFx0XHRcdGsgPSAxLjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImZpdFwiOlxuXHRcdFx0XHR2YXIgZ3JpZFNpemUgPSB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSAqIDI7XG5cblx0XHRcdFx0dmFyIGdCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXHRcdFx0XHR2YXIgdkJvdW5kcyA9IHRoaXMudmlld3BvcnQoKTtcblxuXHRcdFx0XHR2Qm91bmRzLndpZHRoIC09IGdyaWRTaXplO1xuXHRcdFx0XHR2Qm91bmRzLmhlaWdodCAtPSBncmlkU2l6ZTtcblxuXHRcdFx0XHQvKiBEbyBub3Qgem9vbSBtb3JlIHRoYW4gYWN0dWFsIGlmIGdyYXBoIGFscmVhZHkgZml0cyBpbnRvIHRoZSBib3VuZHMgKi9cblx0XHRcdFx0ayA9IE1hdGgubWluKCh2Qm91bmRzLndpZHRoIC8gZ0JvdW5kcy53aWR0aCksICh2Qm91bmRzLmhlaWdodCAvZ0JvdW5kcy5oZWlnaHQpLCAxLjApO1xuXG5cdFx0XHRcdC8vVE9ETzogQWRkIGNlbnRlcmluZyBjb2RlIGhlcmUgb3IgdHJpZ2dlciBhbiBldmVudCBmb3IgdGhhdFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmIChfLmlzU3RyaW5nKGspKSBrID0gcGFyc2VGbG9hdChrKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNmb3JtKG51bGwsIG51bGwsIGspO1xuXHR9XG5cblx0dHJhbnNmb3JtKHggPSBudWxsLCB5ID0gbnVsbCwgc2NhbGUgPSBudWxsKSB7XG5cdFx0bGV0IGdyYXBoID0gdGhpcy5ncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoID8gZ3JhcGguY3VycmVudFJvb3QgOiBudWxsO1xuXHRcdGlmICghXy5pc051bGwoeCkpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZVswXSA9IHg7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcsIHgpO1xuXHRcdH1cblx0XHRpZiAoIV8uaXNOdWxsKHkpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMV0gPSB5O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knLCB5KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbChzY2FsZSkpIHtcblx0XHRcdHRoaXMuX3NjYWxlID0gc2NhbGU7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnLCBzY2FsZSk7XG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgZ3JhcGhcblx0XHRcdGxldCBzID0gdGhpcy5kaXNwYXRjaGVyLnNjYWxlO1xuXHRcdFx0aWYgKHMgIT0gc2NhbGUpXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zY2FsZSA9IHNjYWxlO1xuXHRcdH1cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm4gZmFsc2U7XG5cdFx0Ly8gaW50aWFsaXplIHZpZXdzXG5cdFx0aWYgKHRoaXMubGF5b3V0KVxuXHRcdFx0dGhpcy5sYXlvdXQubGF5b3V0KHRoaXMuX2dyYXBoLmN1cnJlbnRSb290LCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCwgW3RoaXMucHJvcCgnbWluWm9vbScpLCB0aGlzLnByb3AoJ21heFpvb20nKV0pO1xuXHRcdFx0bGV0IGpzQ2xhc3M7XG5cdFx0XHRpZiAodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpIHtcblx0XHRcdFx0anNDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKTtcblx0XHRcdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHRyZWZyZXNoKCkge31cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0LnN1YnN0cmluZygyLCBwYXJ0Lmxlbmd0aCAtMSkudHJpbSgpO1xuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dCA9IF8udGVtcGxhdGUodCwge2ludGVycG9sYXRlOiAvI3soW1xcc1xcU10rPyl9L2d9KShvYmopO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4xLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjUsXG5cdGdyYXBoQmVoYXZpb3I6IEdyYXBoQmVoYXZpb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvMjgvMjAxNi5cbiAqL1xuXG4vKipcbiAqIEdyYXBoIGhhbmRsZXIgaGFuZGxlcyBQYW5uaW5nIGFuZCBab29tIGFuZCBydWJiZXIgYmFuZCBzZWxlY3Rpb25cbiAqL1xuY2xhc3MgR3JhcGhCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcblx0XHRsZXQgZiA9IGZ1bmN0aW9uKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKHR5cGUsIG5zLCBncmFwaCwgZXZlbnQpO1xuXHRcdH07XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcignZHJhZyouZ3JhcGgnLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ3pvb20uKicsIHRoaXMuaGFuZGxlWm9vbSwgdGhpcyk7XG5cdFx0Ly9kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLmdyYXBoJywgJ21vdXNlZW50ZXIuZ3JhcGgnLCAnbW91c2VsZWF2ZS5ncmFwaCddLCBmKTtcblx0XHR0aGlzLm9mZnNldCA9IG51bGw7XG5cdH1cblxuXHRoYW5kbGVab29tKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKG51bGwsIG51bGwsIGV2ZW50LnNjYWxlKTtcblx0fVxuXG5cdGhhbmRsZURyYWcodHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcblx0XHRcdGxldCBwYW4gPSAodGhpcy5yZW5kZXJlci5wcm9wKFwiZGVmYXVsdENsaWNrTW9kZVwiKSA9PSBcInBhblwiKSBeIChldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcblx0XHRcdGlmICghcGFuKSByZXR1cm47XG5cdFx0XHRsZXQgdCA9IHRoaXMucmVuZGVyZXIudHJhbnNsYXRlO1xuXHRcdFx0Y29uc29sZS5sb2coJ0dyYXBoQmVoYXZpb3I6JyArIHQpO1xuXHRcdFx0dGhpcy5vZmZzZXQgPSBbdFswXSAtIHBvc1swXSwgdFsxXSAtIHBvc1sxXV07XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5vZmZzZXQpIHJldHVybjtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ2VuZCcpIHtcblx0XHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKHBvc1swXSArIHRoaXMub2Zmc2V0WzBdLCBwb3NbMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHRcdGRlbGV0ZSB0aGlzLm9mZnNldDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0ocG9zWzBdICsgdGhpcy5vZmZzZXRbMF0sIHBvc1sxXSArIHRoaXMub2Zmc2V0WzFdKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVuZGVyZXI7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3IuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHRsZXQgcm9vdCA9IHRoaXMuZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XG5cdFx0XHRidWYuYXBwZW5kKCc8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJykuYXBwZW5kKHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZCh0WzFdKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQodGhpcy5zY2FsZSkuYXBwZW5kKCcpXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdFNWR1JlbmRlcmVyLnNldENvbnRlbnQodGhpcy5ib3gsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdHRoaXMuc3ZnID0gdGhpcy5ib3guZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyRGVmcygpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPGRlZnM+Jyk7XG5cdFx0YnVmLmFwcGVuZCh0aGlzLmdldFRlbXBsYXRlKCdHcmlkJywgdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikpKTtcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgubWFya2Vycztcblx0XHRpZiAobWFya2Vycy5sZW5ndGggPiAwKVxuXHRcdFx0YnVmLmFwcGVuZChTVkdSZW5kZXJlci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpKTtcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHtcblx0XHRpZiAoIXRoaXMuc3ZnKSByZXR1cm47XG5cdFx0bGV0IGcgPSB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdnJyk7XG5cdFx0bGV0IHQgPSB0aGlzLnRyYW5zbGF0ZTtcblx0XHRnLnNldEF0dHJpYnV0ZSgndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgdFswXSArICcsJyArIHRbMV0gKyAnKXNjYWxlKCcgKyB0aGlzLnNjYWxlICsgJyknKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xuXHRcdGZvciAobGV0IG1hcmtlciBvZiBtYXJrZXJzKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxuXHRcdFx0XHRjb250cm9sUHRzWzIqaV0gPSBbbmV4dCwgbmV4dF07XG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0ZDIgPSBuZXh0LmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHByZXYpLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0cHJldiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcblx0XHR9XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyBzZXRDb250ZW50KGVsLCBjb250ZW50KSB7XG5cdFx0aWYgKERvbVV0aWxzLmlzSUUpIHtcblx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0d2hpbGUgKGNoaWxkID0gZWwubGFzdENoaWxkKVxuXHRcdFx0XHRlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRTVkdSZW5kZXJlci5hcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcblx0XHR9IGVsc2Vcblx0XHRcdGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG59XG5TVkdSZW5kZXJlci5URU1QTEFURVMgPSB7XG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+I3tjaGlsZHJlbn08L2c+Jyxcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XG5cdH0sXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xuXHRcdGZvciAobGV0IHB0IG9mIHNoYXBlLnBvaW50cylcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XG5cdFx0YnVmLnJlbW92ZUxhc3QoKTtcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9LFxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+Jztcblx0fSxcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcblx0XHRyZXR1cm4gYFxuPG1hcmtlciBpZD1cIiR7bWFya2VyLmlkfVwiIG1hcmtlcldpZHRoPVwiJHttYXJrZXIuc2l6ZX1cIiBtYXJrZXJIZWlnaHQ9XCIke21hcmtlci5zaXplfVwiIHJlZng9XCIke21hcmtlci5yZWZbMF19XCIgXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cImZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIHN0eWxlPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0PC9nPlxuPCV9JT5cbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=