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
	
	var _Layout = __webpack_require__(21);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(22);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Link = __webpack_require__(19);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Marker = __webpack_require__(20);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _GraphView = __webpack_require__(23);
	
	var _GraphView2 = _interopRequireDefault(_GraphView);
	
	var _SVGView = __webpack_require__(24);
	
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
		Link: _Link2.default,
		Marker: _Marker2.default,
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
	
				if (orthogonal) {
					if (py >= rect.top && py <= rect.bottom) {
						ty = py - cy;
						tx = Math.sqrt(a * a * (1 - ty * ty / (b * b))) || 0;
	
						if (px <= rect.left) {
							tx = -tx;
						}
	
						return new _Point2.default(cx + tx, py);
					}
	
					if (px >= rect.left && px <= rect.right) {
						tx = px - cx;
						ty = Math.sqrt(b * b * (1 - tx * tx / (a * a))) || 0;
	
						if (py <= rect.top) {
							ty = -ty;
						}
	
						return new _Point2.default(px, cy + ty);
					}
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
	
				return new _Point2.default(xout, yout);
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
		shape: {
			name: "Link"
		},
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
				if (this == this.graph.getCurrentRoot()) return null;
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
		function getLabelBox(label, containerWidth, containerHeight) {
			var labelConfig = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];
	
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
			// the pivot is the center of rotation when the label has a rotation specified.
			var pivot = align == 'center' ? [0, 0] : align == 'left' ? [-wrappedLabel.width / 2, 0] : [wrappedLabel.width / 2, 0];
	
			// the maximum bounds for the label, used to position inline editor
			geometry.width = Math.max(w + 2 * padding, geometry.width);
			geometry.height = Math.max(h + 2 * padding, geometry.height);
			pos = _Utils2.default.getRelativePosition({ width: containerWidth, height: containerHeight }, geometry);
			var maxBounds = new _Rectangle2.default(pos[0], pos[1], geometry.width, geometry.height);
	
			return {
				config: labelConfig, label: wrappedLabel, _label: label,
				dx: dx, dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight, anchor: anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
				pivot: pivot, bounds: bounds, maxBounds: maxBounds
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
	
		function render(view, box) {
			return view.renderLabel(box);
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
			getStringSize: getStringSize,
			wrap: wrap,
			getLabelBox: getLabelBox,
			getLabelBoxForEdge: getLabelBoxForEdge,
			render: render,
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
	
	var _Link = __webpack_require__(19);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Label = __webpack_require__(17);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Cache = __webpack_require__(16);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
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
					//this.clearPoints();
				}
			}
		}, {
			key: "getLabelBox",
			value: function getLabelBox(key) {
				return _Label2.default.getLabelBoxForEdge(this.prop('label'), this.getView(key), this.viewProp(key, 'labelConfig'));
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
			key: "getTerminalPoints",
			value: function getTerminalPoints(key) {
				var refPts = this.getReferencePoints(key);
				var pts = [];
				if (this.source) {
					pts.push(this.source.getPort(key, this.prop('sourcePort'), refPts[1]));
				} else pts.push(refPts[0]);
	
				if (this.target) {
					pts.push(this.target.getPort(key, this.prop('targetPort'), refPts[0]));
				} else pts.push(refPts[1]);
				return pts;
			}
		}, {
			key: "getShape",
			value: function getShape(key) {
				var shape = _Cache2.default.get(this.id + ".shape", key);
				if (shape) return shape;
	
				var shapeConfig = this.viewProp(key, 'shape');
				shape = _Link2.default.getLinkShape(this.getTerminalPoints(key), null, shapeConfig, this.prop('startMarker'), this.prop('endMarker'));
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
	
	var defaultConfig = {
		linkStyle: "direct",
		showGauge: false
	};
	
	/**
	 * The Link object handles link calculations and rendering.
	 */
	var Link = function () {
	
		function getLinkShape(terminalPts, terminalDirections) {
			var shapeConfig = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			var startMarker = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
			var endMarker = arguments.length <= 4 || arguments[4] === undefined ? null : arguments[4];
	
			shapeConfig = _lodash2.default.defaultsDeep(shapeConfig, defaultConfig);
	
			return {
				config: shapeConfig,
				startMarker: startMarker,
				endMarker: endMarker,
				points: terminalPts,
				render: function render(view) {
					return Link.render(view, this);
				}
			};
		}
	
		function render(view, shape) {
			return view.renderLink(shape);
		}
	
		return {
			getLinkShape: getLinkShape,
			render: render
		};
	}();
	
	exports.default = Link;

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
/* 24 */
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
	
	var _GraphView2 = __webpack_require__(23);
	
	var _GraphView3 = _interopRequireDefault(_GraphView2);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SVGView = function (_GraphView) {
		_inherits(SVGView, _GraphView);
	
		function SVGView() {
			_classCallCheck(this, SVGView);
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SVGView).apply(this, arguments));
		}
	
		_createClass(SVGView, [{
			key: "render",
			value: function render() {
				var result = _get(Object.getPrototypeOf(SVGView.prototype), "render", this).call(this);
				if (result) {
					var root = this._graph.getCurrentRoot();
					var buf = new _StringBuffer2.default('<svg width="100%" height="100%">');
					buf.append(this.renderDefs());
					buf.append(root.render(this));
					buf.append('</svg>');
					this.box.innerHTML = buf.toString();
				}
			}
		}, {
			key: "renderDefs",
			value: function renderDefs() {
				var buf = new _StringBuffer2.default('<defs>');
				buf.append(this.getTemplate('Grid', this.prop("gridSize")));
				var markers = this.graph().markers;
				if (markers.length > 0) buf.append(SVGView.renderMarkers(markers));
				buf.append('</defs>');
				return buf.toString();
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
				if (!points || points.length == 0) return '';
	
				var buf = new _StringBuffer2.default('M'),
				    point = void 0;
				for (var i = 0; i < points.length; i++) {
					point = points[i];
					if (i == 0) buf.append(point.x).append(',').append(point.y);else buf.append(' L').append(point.x).append(',').append(point.y);
				}
				var d = buf.toString();
				buf.clear();
				if (shape.config && shape.config.showGauge) buf.append('<path style="stroke: white; stroke-width: 9; visibility: hidden; pointer-events: stroke;" d="').append(d).append('"/>');
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
					}SVGView.appendContent(el, content);
				} else el.innerHTML = content;
				return el;
			}
		}]);
	
		return SVGView;
	}(_GraphView3.default);
	
	SVGView.TEMPLATES = {
		$root: '<g id="${id}" class="${className}" ns="graph" transform="translate(${x},${y})scale(${scale})">#{children}</g>',
		$node: '<g id="${id}" class="${className}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
		$edge: '<g id="${id}" class="${className}" ns="${namespace}">#{shape}</g>',
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
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.backgroundColor) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" fill=\"<%=box.backgroundColor%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" })
	};
	
	exports.default = SVGView;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NGM1YjVhYmU5ZDdiM2JmNTIxOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L01hcmtlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvR3JhcGhWaWV3LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1ZpZXcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQSxpQkFBTSxRQUFOLENBQWUsV0FBZjtBQUNBLGlCQUFNLFFBQU4sQ0FBZSxTQUFmOzttQkFFZTtBQUNkLHdCQURjO0FBRWQsd0JBRmM7QUFHZCx3QkFIYztBQUlkLDhCQUpjO0FBS2Qsc0NBTGM7QUFNZCx3QkFOYztBQU9kLHNCQVBjO0FBUWQsd0JBUmM7QUFTZCxnQ0FUYztBQVVkLDRCQVZjO0FBV2QsNENBWGM7QUFZZCx3QkFaYztBQWFkLHNCQWJjO0FBY2QsMEJBZGM7QUFlZCx3QkFmYztBQWdCZCw0QkFoQmM7QUFpQmQsc0JBakJjO0FBa0JkLHNCQWxCYztBQW1CZCwwQkFuQmM7QUFvQmQsa0NBcEJjO0FBcUJkLGdDQXJCYztBQXNCZCw0QkF0QmM7Ozs7Ozs7QUMxQmY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeUI7O0FBRXpCO0FBQ0EseUNBQXdDO0FBQ3hDLHNDQUFxQztBQUNyQyxzQ0FBcUM7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFtQixtQkFBbUI7QUFDdEM7QUFDQSxRQUFPLEdBQUc7O0FBRVY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUF5QjtBQUN6QiwwQkFBeUI7QUFDekIsMEJBQXlCO0FBQ3pCO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0EsdUNBQXNDO0FBQ3RDO0FBQ0E7QUFDQSw4QkFBNkI7O0FBRTdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsOEJBQTZCO0FBQzdCO0FBQ0EsOEJBQTZCO0FBQzdCLHFEQUFvRCxPQUFPO0FBQzNELHdEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUNBQXNDLEtBQUs7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE0RDtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsS0FBSztBQUMvQyw2Q0FBNEMsS0FBSztBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFFBQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7QUFDQSxzQ0FBcUMsT0FBTztBQUM1QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXFDLEtBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFnQjtBQUNoQixRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWMsaURBQWlEO0FBQy9EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlDQUF3QyxPQUFPO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQW9CLDJCQUEyQjtBQUMvQyx1Q0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBbUMsS0FBSztBQUN4QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0EsVUFBUztBQUNULHVCQUFzQixtQkFBbUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUE4QixLQUFLO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0JBQThCLEtBQUs7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNEMsT0FBTztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGVBQWMsT0FBTztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaHVCRCxLQUFJLGFBQWEsRUFBYjtLQUFpQixZQUFZLEtBQVo7S0FBbUIsZUFBZSxFQUFmO0tBQW1CLFNBQVMsTUFBTSxNQUFOOzs7OzttQkFLckQ7QUFDZCxRQUFNLGNBQVMsU0FBVCxFQUFvQixJQUFwQixFQUEwQixLQUExQixFQUFnQztBQUNyQyxPQUFJLENBQUMsYUFBYSxTQUFiLENBQUQsRUFDSCxhQUFhLFNBQWIsSUFBMEIsSUFBSSxHQUFKLEVBQTFCLENBREQ7QUFFQSxPQUFJLENBQUMsSUFBRCxFQUNILE9BQU8sYUFBYSxTQUFiLENBQVAsQ0FERDtBQUVBLE9BQUksQ0FBQyxLQUFELEVBQ0gsT0FBTyxhQUFhLFNBQWIsRUFBd0IsR0FBeEIsQ0FBNEIsSUFBNUIsQ0FBUCxDQUREO0FBRUEsZ0JBQWEsU0FBYixFQUF3QixHQUF4QixDQUE0QixJQUE1QixFQUFrQyxLQUFsQyxFQVBxQztHQUFoQzs7QUFVTixjQUFZLG9CQUFTLFNBQVQsRUFBb0IsS0FBcEIsRUFBMkIsV0FBM0IsRUFBd0M7QUFDbkQsT0FBSSxPQUFPLE1BQU0sSUFBTjs7O0FBRHdDLE9BSS9DLE9BQU8sS0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQixDQUFQLENBSitDO0FBS25ELE9BQUksQ0FBQyxJQUFELEVBQU87QUFDVixRQUFJLFNBQVMsTUFBTSxPQUFOLEdBQWdCLEtBQUssSUFBTCxDQUFVLFNBQVYsRUFBcUIsTUFBTSxPQUFOLENBQXJDLEdBQXNELElBQXRELENBREg7QUFFVixRQUFJLENBQUMsTUFBRCxJQUFXLFdBQVgsRUFDSCxTQUFTLFdBQVQsQ0FERDtBQUVBLFFBQUksTUFBSixFQUNDOzs7Ozs7Ozs7O01BQXFCLE9BQXJCLENBREQsS0FFSztBQUNKLFlBQ0MsY0FBWSxNQUFaLEVBQW9COzs7QUFDbkIsUUFBRSxNQUFGLENBQVMsSUFBVCxFQUFlLE1BQWYsRUFEbUI7TUFBcEIsQ0FGRztLQUZMO0FBU0EsV0FBTyxNQUFNLElBQU4sQ0FiRztBQWNWLFdBQU8sTUFBTSxPQUFOLENBZEc7QUFlVixNQUFFLE1BQUYsQ0FBUyxLQUFLLFNBQUwsRUFBZ0IsS0FBekIsRUFmVTtBQWdCVixTQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FoQlU7QUFpQlYsU0FBSyxJQUFMLENBQVUsU0FBVixFQUFxQixJQUFyQixFQUEyQixJQUEzQixFQWpCVTtBQWtCVixTQUFLLEdBQUwsQ0FBUyxPQUFULEVBQWtCLHdCQUF3QixTQUF4QixHQUFvQyxHQUFwQyxHQUEwQyxJQUExQyxDQUFsQixDQWxCVTtJQUFYO0FBb0JBLFVBQU8sSUFBUCxDQXpCbUQ7R0FBeEM7O0FBNEJaLGNBQVksb0JBQVMsS0FBVCxFQUFnQixTQUFoQixFQUEyQixXQUEzQixFQUF3Qzs7O0FBQ25ELFFBQUssR0FBTCxDQUFTLE9BQVQsRUFBa0Isd0JBQXdCLFNBQXhCLENBQWxCLENBRG1EOztBQUduRCxPQUFJLENBQUMsS0FBRCxJQUFVLFdBQVYsRUFBdUI7QUFDMUIsU0FBSyxVQUFMLENBQWdCLFNBQWhCLEVBQTJCLFdBQTNCLEVBRDBCO0FBRTFCLFNBQUssR0FBTCxDQUFTLE9BQVQsRUFBa0Isc0JBQWxCLEVBRjBCO0FBRzFCLFdBSDBCO0lBQTNCO0FBS0EsT0FBSSxXQUFKLEVBQWlCO0FBQ2hCLFFBQUksT0FBTyxFQUFFLE1BQUYsQ0FBUyxLQUFULEVBQWdCLEVBQUMsTUFBTSxZQUFZLElBQVosRUFBdkIsQ0FBUCxDQURZO0FBRWhCLFdBQU8sS0FBSyxNQUFMLEdBQWMsQ0FBZCxHQUFrQixLQUFLLENBQUwsQ0FBbEIsR0FBNEIsSUFBNUIsQ0FGUztBQUdoQixRQUFJLElBQUosRUFDQyxjQUFjLEtBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixFQUFFLE1BQUYsQ0FBUyxFQUFULEVBQWEsV0FBYixFQUEwQixJQUExQixDQUEzQixDQUFkLENBREQsS0FHQyxjQUFjLEtBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixXQUEzQixDQUFkLENBSEQ7SUFIRDs7QUFTQSxLQUFFLE9BQUYsQ0FBVSxLQUFWLEVBQWlCLFVBQUMsSUFBRCxFQUFVO0FBQzFCLFdBQUssVUFBTCxDQUFnQixTQUFoQixFQUEyQixJQUEzQixFQUFpQyxXQUFqQyxFQUQwQjtJQUFWLENBQWpCLENBakJtRDtBQW9CbkQsUUFBSyxHQUFMLENBQVMsT0FBVCxFQUFrQixzQkFBbEIsRUFwQm1EO0dBQXhDOzs7OztBQTBCWixVQUFRLGdCQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsVUFBeEIsRUFBb0MsV0FBcEMsRUFBaUQ7O0FBRXhELEtBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsTUFBaEIsRUFBd0IsV0FBeEI7Ozs7QUFGd0QsT0FNcEQsWUFBWSxTQUFaLFNBQVksR0FBVTtBQUFFLFNBQUssV0FBTCxHQUFtQixLQUFuQixDQUFGO0lBQVYsQ0FOd0M7QUFPeEQsYUFBVSxTQUFWLEdBQXNCLE9BQU8sU0FBUCxDQVBrQztBQVF4RCxTQUFNLFNBQU4sR0FBa0IsSUFBSSxTQUFKLEVBQWxCOzs7O0FBUndELE9BWXBELFVBQUosRUFBZ0IsRUFBRSxNQUFGLENBQVMsTUFBTSxTQUFOLEVBQWlCLFVBQTFCLEVBQWhCOzs7QUFad0QsUUFleEQsQ0FBTSxVQUFOLEdBQW1CLE9BQU8sU0FBUCxDQWZxQzs7QUFpQnhELFVBQU8sS0FBUCxDQWpCd0Q7R0FBakQ7O0FBb0JSLGNBQVksb0JBQVMsR0FBVCxFQUFjLE1BQWQsRUFBc0I7QUFDakMsT0FBSSxRQUFRLEVBQVI7T0FBWSxJQUFJLElBQUksV0FBSjtPQUFpQixPQUFPLENBQUMsQ0FBRCxDQUFQLENBREo7QUFFakMsVUFBTyxDQUFQLEVBQVU7QUFDVCxRQUFJLEVBQUUsS0FBRixFQUFTO0FBQ1osU0FBSSxFQUFFLEtBQUYsQ0FBUSxXQUFSLENBRFE7QUFFWixZQUFPLEtBQVAsQ0FBYSxJQUFiLEVBQW1CLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLENBQW5CLEVBRlk7S0FBYixNQUlDLElBQUksSUFBSixDQUpEO0lBREQ7O0FBUUEsUUFBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksS0FBSyxNQUFMLEVBQWEsR0FBakMsRUFBc0M7QUFDckMsUUFBSSxLQUFLLENBQUwsQ0FBSixDQURxQztBQUVyQyxRQUFJLEVBQUUsUUFBRixFQUNILEVBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsRUFBRSxRQUFGLENBQWhCLENBREQ7SUFGRDtBQUtBLE9BQUksS0FBSixHQUFZLEVBQUUsTUFBRixDQUFTLEtBQVQsRUFBZ0IsTUFBaEIsQ0FBWixDQWZpQztBQWdCakMsS0FBRSxTQUFGLENBQVksSUFBWixHQUFtQixVQUFTLElBQVQsRUFBZSxLQUFmLEVBQXNCO0FBQ3hDLFFBQUksQ0FBQyxLQUFELEVBQ0gsT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFYLENBQVAsQ0FERDtBQUVBLFNBQUssS0FBTCxDQUFXLElBQVgsSUFBbUIsS0FBbkIsQ0FId0M7SUFBdEIsQ0FoQmM7R0FBdEI7Ozs7Ozs7QUE0Qlosa0JBQWdCLHdCQUFTLE9BQVQsRUFBa0IsWUFBbEIsRUFBZ0M7QUFDL0MsT0FBSSxDQUFDLE9BQUQsRUFDSCxVQUFVLFlBQVYsQ0FERDs7QUFHQSxPQUFJLEVBQUUsUUFBRixDQUFXLE9BQVgsQ0FBSixFQUNDLFVBQVUsS0FBSyxPQUFMLENBQVYsQ0FERDtBQUVBLFVBQU8sT0FBUCxDQU4rQztHQUFoQzs7QUFTaEIsU0FBTyxlQUFTLFVBQVQsRUFBcUI7QUFDM0IsT0FBSSxVQUFKLEVBQWdCO0FBQ2YsZUFBVyxJQUFYLENBQWdCLFVBQWhCLEVBRGU7SUFBaEIsTUFFTztBQUNOLGdCQUFZLElBQVosQ0FETTtJQUZQO0dBRE07O0FBUVAsT0FBSyxhQUFTLElBQVQsRUFBZSxPQUFmLEVBQXdCO0FBQzVCLE9BQUksQ0FBQyxPQUFPLE9BQVAsRUFBZ0I7QUFBRSxXQUFGO0lBQXJCO0FBQ0EsT0FBSSxRQUFRLFNBQVIsQ0FGd0I7QUFHNUIsT0FBSSxDQUFDLFNBQUQsRUFBWTtBQUNmLFlBQVEsS0FBUixDQURlO0FBRWYsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUUsV0FBVyxNQUFYLEVBQW1CLEdBQXJDLEVBQTBDO0FBQ3pDLFNBQUksV0FBVyxDQUFYLEtBQWUsSUFBZixFQUFxQixRQUFRLElBQVIsQ0FBekI7S0FERDtJQUZEO0FBTUEsT0FBSSxDQUFDLEtBQUQsRUFBUTtBQUFFLFdBQUY7SUFBWjtBQUNBLFVBQU8sS0FBSyxNQUFMLEdBQVksRUFBWixFQUFnQjtBQUFFLFdBQUssT0FBSyxHQUFMLENBQVA7SUFBdkI7QUFDQSxVQUFPLEtBQUssU0FBTCxDQUFlLENBQWYsRUFBa0IsRUFBbEIsSUFBc0IsS0FBdEIsQ0FYcUI7QUFZNUIsV0FBUSxJQUFSLENBQWEsSUFBYixFQUFtQixPQUFuQixFQVo0QjtHQUF4Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0JMLHVCQUFxQiw2QkFBUyxNQUFULEVBQWlCLFFBQWpCLEVBQTJCO0FBQy9DLFVBQU8sQ0FBQyxPQUFPLEtBQVAsR0FBZSxTQUFTLENBQVQsR0FBYSxTQUFTLEtBQVQsR0FBaUIsU0FBUyxPQUFULEdBQW1CLFNBQVMsT0FBVCxFQUN2RSxPQUFPLE1BQVAsR0FBZ0IsU0FBUyxDQUFULEdBQWEsU0FBUyxNQUFULEdBQWtCLFNBQVMsT0FBVCxHQUFtQixTQUFTLE9BQVQsQ0FEbkUsQ0FEK0M7R0FBM0I7Ozs7Ozs7QUFVckIsV0FBUyxpQkFBUyxJQUFULEVBQWUsQ0FBZixFQUFrQjtBQUMxQixPQUFJLFFBQVEsS0FBSyxLQUFMLEVBQVIsQ0FEc0I7QUFFMUIsT0FBSSxJQUFJLEtBQUssU0FBTCxFQUFKLENBRnNCO0FBRzFCLE9BQUksZ0NBQUosRUFDQyxPQUFPLHdCQUFjLEVBQUUsQ0FBRixHQUFJLEtBQUosR0FBVSxFQUFFLENBQUYsQ0FBVixFQUFnQixFQUFFLENBQUYsR0FBSSxLQUFKLEdBQVUsRUFBRSxDQUFGLENBQVYsRUFBZ0IsRUFBRSxLQUFGLEdBQVEsS0FBUixFQUFlLEVBQUUsTUFBRixHQUFTLEtBQVQsQ0FBcEUsQ0FERCxLQUVLLElBQUksNEJBQUosRUFDSixPQUFPLG9CQUFVLEVBQUUsQ0FBRixHQUFJLEtBQUosR0FBVSxFQUFFLENBQUYsQ0FBVixFQUFnQixFQUFFLENBQUYsR0FBSSxLQUFKLEdBQVUsRUFBRSxDQUFGLENBQVYsQ0FBakMsQ0FESSxLQUdKLE9BQU8sQ0FBQyxFQUFFLENBQUYsSUFBSyxLQUFMLEdBQVcsRUFBRSxDQUFGLENBQVgsRUFBaUIsRUFBRSxDQUFGLElBQUssS0FBTCxHQUFXLEVBQUUsQ0FBRixDQUFYLENBQXpCLENBSEk7R0FMRzs7Ozs7OztBQWdCVCxTQUFPLGVBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0I7QUFDeEIsT0FBSSxRQUFRLEtBQUssS0FBTCxFQUFSLENBRG9CO0FBRXhCLE9BQUksSUFBSSxLQUFLLFNBQUwsRUFBSixDQUZvQjtBQUd4QixPQUFJLGdDQUFKLEVBQ0MsT0FBTyx3QkFBYyxDQUFDLEVBQUUsQ0FBRixHQUFJLEVBQUUsQ0FBRixDQUFKLENBQUQsR0FBVyxLQUFYLEVBQWtCLENBQUMsRUFBRSxDQUFGLEdBQUksRUFBRSxDQUFGLENBQUosQ0FBRCxHQUFXLEtBQVgsRUFBa0IsRUFBRSxLQUFGLEdBQVEsS0FBUixFQUFlLEVBQUUsTUFBRixHQUFTLEtBQVQsQ0FBeEUsQ0FERCxLQUVLLElBQUksNEJBQUosRUFDSixPQUFPLG9CQUFVLENBQUMsRUFBRSxDQUFGLEdBQUksRUFBRSxDQUFGLENBQUosQ0FBRCxHQUFXLEtBQVgsRUFBa0IsQ0FBQyxFQUFFLENBQUYsR0FBSSxFQUFFLENBQUYsQ0FBSixDQUFELEdBQVcsS0FBWCxDQUFuQyxDQURJLEtBR0osT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFGLElBQUssRUFBRSxDQUFGLENBQUwsQ0FBRCxHQUFZLEtBQVosRUFBbUIsQ0FBQyxFQUFFLENBQUYsSUFBSyxFQUFFLENBQUYsQ0FBTCxDQUFELEdBQVksS0FBWixDQUEzQixDQUhJO0dBTEM7Ozs7O0FBY1Asa0JBQWdCLHdCQUFTLEdBQVQsRUFBYyxJQUFkLEVBQW9CO0FBQ25DLE9BQUksQ0FBQyxHQUFELEVBQ0gsT0FBTyxJQUFQLENBREQ7QUFFQSxPQUFJLEVBQUUsR0FBRixDQUFNLEdBQU4sRUFBVyxJQUFYLENBQUosRUFDQyxPQUFPLElBQUksSUFBSixDQUFQLENBREQ7QUFFQSxPQUFJLElBQUksV0FBSixJQUFtQixFQUFFLFVBQUYsQ0FBYSxJQUFJLFdBQUosQ0FBaEMsRUFDSCxPQUFPLElBQUksV0FBSixDQUFnQixJQUFoQixDQUFQLENBREQ7QUFFQSxVQUFPLElBQVAsQ0FQbUM7R0FBcEI7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbE5YO0FBQ0wsV0FESyxLQUNMLENBQVksQ0FBWixFQUFlLENBQWYsRUFBa0I7eUJBRGIsT0FDYTs7QUFDakIsUUFBSyxDQUFMLEdBQVMsQ0FBVCxDQURpQjtBQUVqQixRQUFLLENBQUwsR0FBUyxDQUFULENBRmlCO0dBQWxCOzs7Ozs7O2VBREs7OzJCQVNHO0FBQ1AsV0FBTyxJQUFJLEtBQUosQ0FBVSxLQUFLLENBQUwsRUFBUSxLQUFLLENBQUwsQ0FBekIsQ0FETzs7Ozs7Ozs7Ozs7NEJBU0MsS0FBSztBQUNiLFdBQU8sS0FBSyxJQUFMLENBQVUsQ0FBQyxLQUFLLENBQUwsR0FBUyxJQUFJLENBQUosQ0FBVixJQUFvQixLQUFLLENBQUwsR0FBUyxJQUFJLENBQUosQ0FBN0IsR0FBc0MsQ0FBQyxLQUFLLENBQUwsR0FBUyxJQUFJLENBQUosQ0FBVixJQUFvQixLQUFLLENBQUwsR0FBUyxJQUFJLENBQUosQ0FBN0IsQ0FBdkQsQ0FEYTs7Ozs7Ozs7OzZCQU9KLElBQUk7QUFDYixTQUFLLENBQUwsSUFBVSxHQUFHLENBQUgsQ0FERztBQUViLFNBQUssQ0FBTCxJQUFVLEdBQUcsQ0FBSCxDQUZHO0FBR2IsV0FBTyxJQUFQLENBSGE7Ozs7Ozs7Ozt5QkFTUixRQUFPO0FBQ1osU0FBSyxDQUFMLElBQVUsTUFBVixDQURZO0FBRVosU0FBSyxDQUFMLElBQVUsTUFBVixDQUZZO0FBR1osV0FBTyxJQUFQLENBSFk7Ozs7NkJBTUgsT0FBTztBQUNoQixXQUFPLElBQUksS0FBSixDQUFVLEtBQUssQ0FBTCxHQUFTLEtBQVQsRUFBZ0IsS0FBSyxDQUFMLEdBQVMsS0FBVCxDQUFqQyxDQURnQjs7OztpQ0FJSCxJQUFJO0FBQ2pCLFdBQU8sSUFBSSxLQUFKLENBQVUsS0FBSyxDQUFMLEdBQVMsR0FBRyxDQUFILEVBQU0sS0FBSyxDQUFMLEdBQVMsR0FBRyxDQUFILENBQXpDLENBRGlCOzs7Ozs7Ozs7OztnQ0FTTCxJQUFJO0FBQ2hCLFFBQUksT0FBTyxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQVAsQ0FEWTtBQUVoQixXQUFPLElBQUksS0FBSixDQUFVLENBQUMsR0FBRyxDQUFILEdBQU8sS0FBSyxDQUFMLENBQVIsR0FBa0IsSUFBbEIsRUFBd0IsQ0FBQyxHQUFHLENBQUgsR0FBTyxLQUFLLENBQUwsQ0FBUixHQUFrQixJQUFsQixDQUF6QyxDQUZnQjs7Ozs7Ozs7OzswQkFTVixPQUFPO0FBQ2IsUUFBSSxNQUFNLEtBQUssR0FBTCxDQUFTLFFBQVEsS0FBSyxFQUFMLEdBQVUsR0FBbEIsQ0FBZixDQURTO0FBRWIsUUFBSSxNQUFNLEtBQUssR0FBTCxDQUFTLFFBQVEsS0FBSyxFQUFMLEdBQVUsR0FBbEIsQ0FBZixDQUZTO0FBR2IsUUFBSSxJQUFJLEtBQUssQ0FBTDtRQUFRLElBQUksS0FBSyxDQUFMLENBSFA7QUFJYixTQUFLLENBQUwsR0FBUyxJQUFJLEdBQUosR0FBVSxJQUFJLEdBQUosQ0FKTjtBQUtiLFNBQUssQ0FBTCxHQUFTLElBQUksR0FBSixHQUFVLElBQUksR0FBSixDQUxOO0FBTWIsV0FBTyxJQUFQLENBTmE7Ozs7OEJBU0gsT0FBTztBQUNqQixXQUFPLEtBQUssS0FBTCxHQUFhLE1BQWIsQ0FBb0IsS0FBcEIsQ0FBUCxDQURpQjs7Ozs7Ozs7OzhCQU9QLElBQUk7QUFDZCxXQUFPLEtBQUssQ0FBTCxHQUFTLEdBQUcsQ0FBSCxHQUFPLEtBQUssQ0FBTCxHQUFTLEdBQUcsQ0FBSCxDQURsQjs7Ozs7Ozs7Ozs7OzhCQVVKLElBQUk7QUFDZCxXQUFPLEtBQUssR0FBTCxDQUFTLEtBQUssVUFBTCxDQUFnQixFQUFoQixDQUFULENBQVAsQ0FEYzs7Ozs7Ozs7OytCQU9ILElBQUk7QUFDZixXQUFPLElBQUksS0FBSixDQUFVLENBQUMsS0FBSyxDQUFMLEdBQVMsR0FBRyxDQUFILENBQVYsR0FBa0IsQ0FBbEIsRUFBcUIsQ0FBQyxLQUFLLENBQUwsR0FBUyxHQUFHLENBQUgsQ0FBVixHQUFrQixDQUFsQixDQUF0QyxDQURlOzs7OzZCQUlOO0FBQ1QsU0FBSyxDQUFMLEdBQVMsQ0FBQyxLQUFLLENBQUwsQ0FERDtBQUVULFNBQUssQ0FBTCxHQUFTLENBQUMsS0FBSyxDQUFMLENBRkQ7QUFHVCxXQUFPLElBQVAsQ0FIUzs7OzswQkFNSCxJQUFJO0FBQ1YsUUFBSSxDQUFDLEVBQUQsSUFBTyxHQUFHLFdBQUgsSUFBa0IsS0FBbEIsRUFBeUIsT0FBTyxLQUFQLENBQXBDOztBQUVBLFdBQVEsS0FBSyxDQUFMLElBQVUsR0FBRyxDQUFILElBQVEsS0FBSyxDQUFMLElBQVUsR0FBRyxDQUFILENBSDFCOzs7Ozs7Ozs7Ozs7Ozs7MkJBZUgsTUFBTSxVQUFVO0FBQ3ZCLFFBQUksUUFBSixFQUNDLEtBQUssQ0FBTCxHQUFTLElBQUksS0FBSyxDQUFMLEdBQVMsS0FBSyxDQUFMLENBRHZCLEtBR0MsS0FBSyxDQUFMLEdBQVMsSUFBSSxLQUFLLENBQUwsR0FBUyxLQUFLLENBQUwsQ0FIdkI7QUFJQSxXQUFPLElBQVAsQ0FMdUI7Ozs7OEJBUWI7QUFDVixXQUFPLGNBQWMsS0FBSyxDQUFMLEdBQVMsS0FBdkIsR0FBK0IsS0FBSyxDQUFMLEdBQVMsR0FBeEMsQ0FERzs7OztTQWhJTjs7O0FBcUlOLE9BQU0sQ0FBTixHQUFVLElBQUksS0FBSixDQUFVLENBQUMsQ0FBRCxFQUFJLENBQWQsQ0FBVjtBQUNBLE9BQU0sQ0FBTixHQUFVLElBQUksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQUQsQ0FBdkI7QUFDQSxPQUFNLENBQU4sR0FBVSxJQUFJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFWO0FBQ0EsT0FBTSxDQUFOLEdBQVUsSUFBSSxLQUFKLENBQVUsQ0FBVixFQUFhLENBQWIsQ0FBVjtBQUNBLE9BQU0sRUFBTixHQUFXLElBQUksS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQUQsQ0FBeEI7QUFDQSxPQUFNLEVBQU4sR0FBVyxJQUFJLEtBQUosQ0FBVSxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUQsQ0FBekI7QUFDQSxPQUFNLEVBQU4sR0FBVyxJQUFJLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBYixDQUFYO0FBQ0EsT0FBTSxFQUFOLEdBQVcsSUFBSSxLQUFKLENBQVUsQ0FBQyxDQUFELEVBQUksQ0FBZCxDQUFYOzttQkFFZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDMUlNOzs7Ozs7Ozs7Ozs7Ozs7NEJBSVgsSUFBSTtBQUNaLFFBQUksSUFBSSxHQUFHLEtBQUgsSUFBWSxDQUFaLENBREk7QUFFWixRQUFJLElBQUksR0FBRyxNQUFILElBQWEsQ0FBYixDQUZJO0FBR1osUUFBSSxPQUFPLEdBQUcsQ0FBSCxHQUFPLElBQUUsQ0FBRixDQUhOO0FBSVosUUFBSSxRQUFRLEdBQUcsQ0FBSCxHQUFPLElBQUUsQ0FBRixDQUpQO0FBS1osUUFBSSxNQUFNLEdBQUcsQ0FBSCxHQUFPLElBQUUsQ0FBRixDQUxMO0FBTVosUUFBSSxTQUFTLEdBQUcsQ0FBSCxHQUFPLElBQUUsQ0FBRixDQU5SO0FBT1osV0FBTyxLQUFDLElBQVMsS0FBSyxLQUFMLElBQWdCLFFBQVEsS0FBSyxJQUFMLElBQ3ZDLE9BQU8sS0FBSyxHQUFMLElBQWMsVUFBVSxLQUFLLE1BQUwsQ0FSckI7Ozs7Ozs7Ozs0QkFjSixJQUFJO0FBQ1osUUFBSSxLQUFLLFFBQUwsQ0FBYyxFQUFkLENBQUosRUFBdUIsT0FBTyxDQUFQLENBQXZCOztBQUVBLFFBQUksR0FBRyxDQUFILEdBQU8sS0FBSyxJQUFMLEVBQVc7QUFDckIsU0FBSSxHQUFHLENBQUgsR0FBTyxLQUFLLEdBQUwsRUFDVixPQUFPLEdBQUcsUUFBSCxDQUFZLG9CQUFVLEtBQUssSUFBTCxFQUFXLEtBQUssR0FBTCxDQUFqQyxDQUFQLENBREQ7QUFFQSxTQUFJLEdBQUcsQ0FBSCxJQUFRLEtBQUssTUFBTCxFQUNYLE9BQU8sS0FBSyxJQUFMLEdBQVksR0FBRyxDQUFILENBRHBCO0FBRUEsWUFBTyxHQUFHLFFBQUgsQ0FBWSxvQkFBVSxLQUFLLElBQUwsRUFBVyxLQUFLLE1BQUwsQ0FBakMsQ0FBUCxDQUxxQjtLQUF0QjtBQU9BLFFBQUksR0FBRyxDQUFILElBQVEsS0FBSyxLQUFMLEVBQVk7QUFDdkIsU0FBSSxHQUFHLENBQUgsSUFBUSxLQUFLLEdBQUwsRUFDWCxPQUFPLEtBQUssR0FBTCxHQUFXLEdBQUcsQ0FBSCxDQURuQjtBQUVBLFlBQU8sR0FBRyxDQUFILEdBQU8sS0FBSyxNQUFMLENBSFM7S0FBeEI7QUFLQSxRQUFJLEdBQUcsQ0FBSCxHQUFPLEtBQUssR0FBTCxFQUNWLE9BQU8sR0FBRyxRQUFILENBQVksb0JBQVUsS0FBSyxLQUFMLEVBQVksS0FBSyxHQUFMLENBQWxDLENBQVAsQ0FERDtBQUVBLFFBQUksR0FBRyxDQUFILElBQVEsS0FBSyxNQUFMLEVBQ1gsT0FBTyxHQUFHLENBQUgsR0FBTyxLQUFLLEtBQUwsQ0FEZjtBQUVBLFdBQU8sR0FBRyxRQUFILENBQVksb0JBQVUsS0FBSyxLQUFMLEVBQVksS0FBSyxNQUFMLENBQWxDLENBQVAsQ0FuQlk7Ozs7Ozs7Ozs7OztzQ0E0Qk0sS0FBSyxLQUFLO0FBQzVCLFFBQUksYUFBYSxJQUFJLENBQUosSUFBUyxJQUFJLENBQUosQ0FERTtBQUU1QixRQUFJLFlBQVksS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFaLENBRndCO0FBRzVCLFFBQUksWUFBWSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQVosQ0FId0I7QUFJNUIsUUFBSSxhQUFhLFNBQWIsRUFBd0IsT0FBTyxDQUFQLENBQTVCO0FBQ0EsUUFBSSxDQUFDLFNBQUQsSUFBYyxDQUFDLFNBQUQsRUFBWTtBQUM3QixTQUFJLGNBQWUsSUFBSSxDQUFKLElBQVMsS0FBSyxHQUFMLElBQVksSUFBSSxDQUFKLElBQVMsS0FBSyxNQUFMLEVBQWM7QUFDOUQsVUFBSSxJQUFJLENBQUosR0FBUSxLQUFLLElBQUwsSUFBYSxJQUFJLENBQUosR0FBUSxLQUFLLEtBQUwsRUFDaEMsT0FBTyxDQUFQLENBREQ7QUFFQSxVQUFJLElBQUksQ0FBSixHQUFRLEtBQUssS0FBTCxJQUFjLElBQUksQ0FBSixHQUFRLEtBQUssSUFBTCxFQUNqQyxPQUFPLENBQVAsQ0FERDtNQUhEO0FBTUEsU0FBSSxDQUFDLFVBQUQsSUFBZ0IsSUFBSSxDQUFKLElBQVMsS0FBSyxJQUFMLElBQWEsSUFBSSxDQUFKLElBQVMsS0FBSyxLQUFMLEVBQWE7QUFDL0QsVUFBSSxJQUFJLENBQUosR0FBUSxLQUFLLEdBQUwsSUFBWSxJQUFJLENBQUosR0FBUSxLQUFLLE1BQUwsRUFDL0IsT0FBTyxDQUFQLENBREQ7QUFFQSxVQUFJLElBQUksQ0FBSixHQUFRLEtBQUssTUFBTCxJQUFlLElBQUksQ0FBSixHQUFRLEtBQUssR0FBTCxFQUNsQyxPQUFPLENBQVAsQ0FERDtNQUhEO0FBTUEsWUFBTyxDQUFDLENBQUQsQ0Fic0I7S0FBOUI7O0FBZ0JBLFFBQUksUUFBUSxZQUFZLEdBQVosR0FBa0IsR0FBbEIsQ0FyQmdCO0FBc0I1QixRQUFJLFVBQUosRUFBZ0I7QUFDZixTQUFJLE1BQU0sQ0FBTixHQUFVLEtBQUssS0FBTCxFQUNiLE9BQU8sQ0FBUCxDQUREO0FBRUEsWUFBTyxDQUFQLENBSGU7S0FBaEIsTUFJTztBQUNOLFNBQUksTUFBTSxDQUFOLEdBQVUsS0FBSyxHQUFMLEVBQ2IsT0FBTyxDQUFQLENBREQ7QUFFQSxZQUFPLENBQVAsQ0FITTtLQUpQOzs7OzhCQVdVO0FBQ1YsV0FBTyxrQkFBa0IsS0FBSyxDQUFMLEdBQVMsS0FBM0IsR0FBbUMsS0FBSyxDQUFMLEdBQVMsU0FBNUMsR0FBd0QsS0FBSyxLQUFMLEdBQWEsVUFBckUsR0FBa0YsS0FBSyxNQUFMLEdBQWMsR0FBaEcsQ0FERzs7OztnQ0FJUyxNQUFNLElBQXdCO1FBQXBCLG1FQUFhLHFCQUFPOztBQUNqRCxRQUFJLElBQUksS0FBSyxDQUFMLENBRHlDO0FBRWpELFFBQUksSUFBSSxLQUFLLENBQUwsQ0FGeUM7QUFHakQsUUFBSSxLQUFLLEdBQUcsQ0FBSCxHQUFPLENBQVAsQ0FId0M7QUFJakQsUUFBSSxLQUFLLEdBQUcsQ0FBSCxHQUFPLENBQVAsQ0FKd0M7QUFLakQsUUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLEVBQVgsRUFBZSxFQUFmLENBQVIsQ0FMNkM7QUFNakQsUUFBSSxJQUFJLG9CQUFVLENBQVYsRUFBYSxDQUFiLENBQUosQ0FONkM7QUFPakQsUUFBSSxLQUFLLEtBQUssRUFBTCxDQVB3QztBQVFqRCxRQUFJLE1BQU0sS0FBSyxFQUFMLEdBQVEsQ0FBUixDQVJ1QztBQVNqRCxRQUFJLE9BQU8sTUFBTSxLQUFOLENBVHNDO0FBVWpELFFBQUksSUFBSSxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsRUFBYSxLQUFLLEtBQUwsQ0FBNUIsQ0FWNkM7O0FBWWpELFFBQUksUUFBUSxDQUFDLEVBQUQsR0FBTSxDQUFOLElBQVcsUUFBUSxLQUFLLENBQUwsRUFBUTs7QUFFdEMsT0FBRSxDQUFGLEdBQU0sS0FBSyxJQUFMLENBRmdDO0FBR3RDLE9BQUUsQ0FBRixHQUFNLElBQUksS0FBSyxLQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFiLEdBQStCLENBQS9CLENBSDRCO0tBQXZDLE1BSU8sSUFBSSxRQUFRLENBQUMsQ0FBRCxFQUFJOztBQUV0QixPQUFFLENBQUYsR0FBTSxLQUFLLEdBQUwsQ0FGZ0I7QUFHdEIsT0FBRSxDQUFGLEdBQU0sSUFBSSxLQUFLLE1BQUwsR0FBYyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWQsR0FBK0IsQ0FBL0IsQ0FIWTtLQUFoQixNQUlBLElBQUksUUFBUSxDQUFSLEVBQVc7O0FBRXJCLE9BQUUsQ0FBRixHQUFNLEtBQUssS0FBTCxDQUZlO0FBR3JCLE9BQUUsQ0FBRixHQUFNLElBQUksS0FBSyxLQUFMLEdBQWEsS0FBSyxHQUFMLENBQVMsS0FBVCxDQUFiLEdBQStCLENBQS9CLENBSFc7S0FBZixNQUlBOztBQUVOLE9BQUUsQ0FBRixHQUFNLEtBQUssTUFBTCxDQUZBO0FBR04sT0FBRSxDQUFGLEdBQU0sSUFBSSxLQUFLLE1BQUwsR0FBYyxLQUFLLEdBQUwsQ0FBUyxJQUFULENBQWQsR0FBK0IsQ0FBL0IsQ0FISjtLQUpBOztBQVVQLFFBQUksVUFBSixFQUFnQjtBQUNmLFNBQUksR0FBRyxDQUFILElBQVEsS0FBSyxJQUFMLElBQ1gsR0FBRyxDQUFILElBQVEsS0FBSyxLQUFMLEVBQVk7QUFDcEIsUUFBRSxDQUFGLEdBQU0sR0FBRyxDQUFILENBRGM7TUFEckIsTUFHTyxJQUFJLEdBQUcsQ0FBSCxJQUFRLEtBQUssR0FBTCxJQUNsQixHQUFHLENBQUgsSUFBUSxLQUFLLE1BQUwsRUFBYTtBQUNyQixRQUFFLENBQUYsR0FBTSxHQUFHLENBQUgsQ0FEZTtNQURmOztBQUtQLFNBQUksR0FBRyxDQUFILEdBQU8sS0FBSyxJQUFMLEVBQVc7QUFDckIsUUFBRSxDQUFGLEdBQU0sS0FBSyxJQUFMLENBRGU7TUFBdEIsTUFFTyxJQUFJLEdBQUcsQ0FBSCxHQUFPLEtBQUssS0FBTCxFQUFZO0FBQzdCLFFBQUUsQ0FBRixHQUFNLEtBQUssS0FBTCxDQUR1QjtNQUF2Qjs7QUFJUCxTQUFJLEdBQUcsQ0FBSCxHQUFPLEtBQUssR0FBTCxFQUFVO0FBQ3BCLFFBQUUsQ0FBRixHQUFNLEtBQUssR0FBTCxDQURjO01BQXJCLE1BRU8sSUFBSSxHQUFHLENBQUgsR0FBTyxLQUFLLE1BQUwsRUFBYTtBQUM5QixRQUFFLENBQUYsR0FBTSxLQUFLLE1BQUwsQ0FEd0I7TUFBeEI7S0FqQlI7O0FBc0JBLFdBQU8sQ0FBUCxDQXBEaUQ7Ozs7Ozs7Ozt3Q0EwRHRCLEtBQUssUUFBUTtBQUN4QyxRQUFJLENBQUMsR0FBRCxJQUFRLElBQUksTUFBSixJQUFjLENBQWQsRUFBaUIsT0FBTyxJQUFQLENBQTdCO0FBQ0EsYUFBUyxVQUFVLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixDQUFWLENBRitCO0FBR3hDLFFBQUksQ0FBQyxpQkFBRSxPQUFGLENBQVUsTUFBVixDQUFELEVBQ0gsU0FBUyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE1BQXpCLENBQVQsQ0FERDtBQUVBLFFBQUksTUFBTSxDQUFDLElBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFJLENBQUosRUFBTyxDQUFQLENBQWpCLENBTG9DO0FBTXhDLFFBQUksTUFBTSxDQUFDLElBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxJQUFJLENBQUosRUFBTyxDQUFQLENBQWpCLENBTm9DO0FBT3hDLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLElBQUksTUFBSixFQUFZLEdBQWhDLEVBQXFDO0FBQ3BDLFNBQUksSUFBSSxJQUFJLENBQUosQ0FBSixDQURnQztBQUVwQyxTQUFJLEVBQUUsQ0FBRixHQUFNLElBQUksQ0FBSixDQUFOLEVBQWM7QUFDakIsVUFBSSxDQUFKLElBQVMsRUFBRSxDQUFGLENBRFE7TUFBbEI7QUFHQSxTQUFJLEVBQUUsQ0FBRixHQUFNLElBQUksQ0FBSixDQUFOLEVBQWM7QUFDakIsVUFBSSxDQUFKLElBQVMsRUFBRSxDQUFGLENBRFE7TUFBbEI7QUFHQSxTQUFJLEVBQUUsQ0FBRixHQUFNLElBQUksQ0FBSixDQUFOLEVBQWM7QUFDakIsVUFBSSxDQUFKLElBQVMsRUFBRSxDQUFGLENBRFE7TUFBbEI7QUFHQSxTQUFJLEVBQUUsQ0FBRixHQUFNLElBQUksQ0FBSixDQUFOLEVBQWM7QUFDakIsVUFBSSxDQUFKLElBQVMsRUFBRSxDQUFGLENBRFE7TUFBbEI7S0FYRDtBQWVBLFFBQUksQ0FBSixJQUFTLElBQUksQ0FBSixJQUFTLE9BQU8sQ0FBUCxDQUFULENBdEIrQjtBQXVCeEMsUUFBSSxDQUFKLElBQVMsSUFBSSxDQUFKLElBQVMsT0FBTyxDQUFQLENBQVQsQ0F2QitCO0FBd0J4QyxRQUFJLENBQUosSUFBUyxJQUFJLENBQUosSUFBUyxPQUFPLENBQVAsQ0FBVCxDQXhCK0I7QUF5QnhDLFFBQUksQ0FBSixJQUFTLElBQUksQ0FBSixJQUFTLE9BQU8sQ0FBUCxDQUFULENBekIrQjtBQTBCeEMsUUFBSSxJQUFJLEtBQUssR0FBTCxDQUFTLElBQUksQ0FBSixJQUFTLElBQUksQ0FBSixDQUFULENBQWIsQ0ExQm9DO0FBMkJ4QyxRQUFJLElBQUksS0FBSyxHQUFMLENBQVMsSUFBSSxDQUFKLElBQVMsSUFBSSxDQUFKLENBQVQsQ0FBYixDQTNCb0M7QUE0QnhDLFdBQU8sSUFBSSxTQUFKLENBQWMsSUFBSSxDQUFKLElBQVMsSUFBRSxDQUFGLEVBQUssSUFBSSxDQUFKLElBQVMsSUFBRSxDQUFGLEVBQUssQ0FBMUMsRUFBNkMsQ0FBN0MsQ0FBUCxDQTVCd0M7Ozs7Ozs7Ozs7eUJBbUM1QixPQUFPO0FBQ25CLFFBQUksT0FBTyxJQUFQO1FBQWEsT0FBTyxJQUFQO1FBQWEsT0FBTyxDQUFDLFFBQUQ7UUFBVyxPQUFPLENBQUMsUUFBRCxDQURwQztBQUVuQixxQkFBRSxJQUFGLENBQU8sS0FBUCxFQUFjLFVBQVUsSUFBVixFQUFnQjtBQUM3QixZQUFPLFFBQVEsS0FBSyxDQUFMLENBRGM7QUFFN0IsWUFBTyxRQUFRLEtBQUssQ0FBTCxDQUZjO0FBRzdCLFlBQU8sS0FBSyxHQUFMLENBQVMsSUFBVCxFQUFlLEtBQUssQ0FBTCxDQUF0QixDQUg2QjtBQUk3QixZQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFLLENBQUwsQ0FBdEIsQ0FKNkI7QUFLN0IsWUFBTyxLQUFLLEdBQUwsQ0FBUyxJQUFULEVBQWUsS0FBSyxLQUFMLEVBQWYsQ0FBUCxDQUw2QjtBQU03QixZQUFPLEtBQUssR0FBTCxDQUFTLElBQVQsRUFBZSxLQUFLLE1BQUwsRUFBZixDQUFQLENBTjZCO0tBQWhCLENBQWQsQ0FGbUI7QUFVbkIsV0FBTyxRQUFRLENBQVIsQ0FWWTtBQVduQixXQUFPLFFBQVEsQ0FBUixDQVhZO0FBWW5CLFdBQU8sSUFBSSxTQUFKLENBQWMsSUFBZCxFQUFvQixJQUFwQixFQUEwQixPQUFPLElBQVAsRUFBYSxPQUFPLElBQVAsQ0FBOUMsQ0FabUI7Ozs7U0FoTEE7Ozs7Ozs7OztBQ0pyQixnRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSUEsS0FBSSxXQUFXLEVBQVg7O0tBRUU7QUFDTCxXQURLLEtBQ0wsQ0FBWSxDQUFaLEVBQWUsQ0FBZixFQUFrQixLQUFsQixFQUF5QixNQUF6QixFQUFpQyxNQUFqQyxFQUF5Qzt5QkFEcEMsT0FDb0M7O0FBQ3hDLFFBQUssQ0FBTCxHQUFTLENBQVQsQ0FEd0M7QUFFeEMsUUFBSyxDQUFMLEdBQVMsQ0FBVCxDQUZ3QztBQUd4QyxRQUFLLEtBQUwsR0FBYSxLQUFiLENBSHdDO0FBSXhDLFFBQUssTUFBTCxHQUFjLE1BQWQsQ0FKd0M7QUFLeEMsb0JBQUUsUUFBRixDQUFXLElBQVgsRUFBaUIsTUFBakIsRUFBeUIsRUFBQyxHQUFHLENBQUgsRUFBTSxHQUFHLENBQUgsRUFBTSxPQUFPLENBQVAsRUFBVSxRQUFRLENBQVIsRUFBaEQsRUFMd0M7R0FBekM7Ozs7Ozs7ZUFESzs7NEJBaUNJLElBQUk7QUFBRSxXQUFPLEtBQVAsQ0FBRjs7Ozs7Ozs7O29DQUtJLEdBQUc7QUFBQyxXQUFPLElBQVAsQ0FBRDs7Ozs7Ozs7Ozs7Z0NBT1AsT0FBMkI7UUFBcEIsbUVBQWEscUJBQU87O0FBQ3ZDLFdBQU8sS0FBSyxXQUFMLENBQWlCLFlBQWpCLENBQThCLElBQTlCLEVBQW9DLEtBQXBDLEVBQTJDLFVBQTNDLENBQVAsQ0FEdUM7Ozs7MEJBSWpDLE1BQU07QUFDWixRQUFJLFdBQVcsaUJBQUUsUUFBRixDQUFXLEtBQUssV0FBTCxDQUFpQixLQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsSUFBeEMsQ0FBWCxDQUFYLENBRFE7QUFFWixXQUFPLFNBQVMsSUFBVCxDQUFQLENBRlk7Ozs7dUJBckNIO0FBQUUsV0FBTyxLQUFLLENBQUwsR0FBUyxLQUFLLE1BQUwsR0FBWSxDQUFaLENBQWxCOzs7Ozs7Ozs7dUJBS0c7QUFBRSxXQUFPLEtBQUssQ0FBTCxHQUFTLEtBQUssTUFBTCxHQUFZLENBQVosQ0FBbEI7Ozs7Ozs7Ozt1QkFLRjtBQUFFLFdBQU8sS0FBSyxDQUFMLEdBQVMsS0FBSyxLQUFMLEdBQVcsQ0FBWCxDQUFsQjs7Ozs7Ozs7O3VCQUtDO0FBQUUsV0FBTyxLQUFLLENBQUwsR0FBUyxLQUFLLEtBQUwsR0FBVyxDQUFYLENBQWxCOzs7O3VCQUVDO0FBQUUsV0FBTyxvQkFBVSxLQUFLLENBQUwsRUFBUSxLQUFLLENBQUwsQ0FBekIsQ0FBRjs7Ozt1QkFFQTtBQUFFLFdBQU8sd0JBQWMsS0FBSyxDQUFMLEVBQVEsS0FBSyxDQUFMLEVBQVEsS0FBSyxLQUFMLEVBQVksS0FBSyxNQUFMLENBQWpELENBQUY7Ozs7NEJBdUJHLE1BQU07QUFDckIsV0FBTyxTQUFTLElBQVQsQ0FBUCxDQURxQjs7Ozs0QkFJTixNQUFNLEdBQUc7QUFDeEIsYUFBUyxJQUFULElBQWlCLENBQWpCLENBRHdCOzs7OytCQUlOLE1BQU07QUFDeEIsV0FBTyxTQUFTLElBQVQsQ0FBUCxDQUR3Qjs7OztTQTlEcEI7OzttQkFtRVMsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21CQ3BFQTtBQUNkLFFBQU0sWUFBYTtBQUNsQixPQUFJLFNBQVMsT0FBTyxTQUFQLENBQWlCLFNBQWpCLENBREs7QUFFbEIsT0FBSSxNQUFNLE9BQU8sT0FBUCxDQUFlLE1BQWYsQ0FBTjs7O0FBRmMsT0FLZCxNQUFNLENBQU4sRUFDSCxPQUFPLFNBQVMsT0FBTyxTQUFQLENBQWlCLE1BQU0sQ0FBTixFQUFTLE9BQU8sT0FBUCxDQUFlLEdBQWYsRUFBb0IsR0FBcEIsQ0FBMUIsQ0FBVCxDQUFQOzs7QUFERCxRQUlLLElBQUksQ0FBQyxDQUFDLFVBQVUsU0FBVixDQUFvQixLQUFwQixDQUEwQixjQUExQixDQUFELEVBQ1QsT0FBTyxFQUFQLENBREksS0FHSixPQUFPLEtBQVAsQ0FISTtHQVRDLEVBQVA7O0FBZUEsYUFBWSxZQUFXOztBQUV0QixVQUFPLE9BQU8sY0FBUCxLQUEwQixXQUExQixDQUZlO0dBQVYsRUFBYjs7QUFLQSxpQkFBZSx1QkFBVSxHQUFWLEVBQWUsT0FBZixFQUF3QixNQUF4QixFQUFnQyxJQUFoQyxFQUFzQztBQUNwRCxPQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLEdBQXZCLENBQUwsQ0FEZ0Q7QUFFcEQsUUFBSyxVQUFMLENBQWdCLEVBQWhCLEVBQW9CLE9BQXBCLEVBQTZCLE1BQTdCLEVBRm9EO0FBR3BELE9BQUksSUFBSixFQUNDLEdBQUcsU0FBSCxHQUFlLElBQWYsQ0FERDtBQUVBLFVBQU8sRUFBUCxDQUxvRDtHQUF0Qzs7QUFRZix5QkFBdUIsK0JBQVMsR0FBVCxFQUFjO0FBQ3BDLE9BQUksT0FBTyxLQUFLLGFBQUwsQ0FBbUIsS0FBbkIsRUFBMEIsSUFBMUIsRUFBZ0MsSUFBaEMsRUFBc0MsR0FBdEMsQ0FBUCxDQURnQztBQUVwQyxVQUFPLEtBQUssVUFBTCxDQUY2QjtHQUFkOztBQUt2QixjQUFZLG9CQUFVLEVBQVYsRUFBYyxPQUFkLEVBQXVCLE1BQXZCLEVBQStCO0FBQzFDLE9BQUksT0FBSixFQUFhO0FBQ1oscUJBQUUsT0FBRixDQUFVLE9BQVYsRUFBbUIsVUFBUyxLQUFULEVBQWdCLEdBQWhCLEVBQXFCO0FBQ3BDLFFBQUcsWUFBSCxDQUFnQixHQUFoQixFQUFxQixLQUFyQixFQURvQztLQUFyQixDQUFuQixDQURZO0lBQWI7QUFLQSxPQUFJLE1BQUosRUFBWTtBQUNYLHFCQUFFLE9BQUYsQ0FBVSxNQUFWLEVBQWtCLFVBQVMsS0FBVCxFQUFnQixHQUFoQixFQUFxQjtBQUN0QyxRQUFHLEtBQUgsQ0FBUyxHQUFULElBQWdCLEtBQWhCLENBRHNDO0tBQXJCLENBQWxCLENBRFc7SUFBWjtHQU5XOztBQWFaLGVBQWEscUJBQVMsSUFBVCxFQUFlLE1BQWYsRUFBdUI7QUFDbkMsVUFBTyxRQUFRLEtBQUssUUFBTCxJQUFpQixDQUFqQixLQUF3QixDQUFDLE1BQUQsSUFBVyxPQUFPLElBQVAsQ0FBWCxDQUFoQyxDQUQ0QjtHQUF2Qjs7QUFJYixpQkFBZSx1QkFBUyxJQUFULEVBQWUsTUFBZixFQUF1QjtBQUNyQyxVQUFPLE9BQU8sS0FBSyxVQUFMO0FBQ2IsUUFBSSxLQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FBSixFQUNDLE9BQU8sSUFBUCxDQUREO0lBREQsT0FJTyxJQUFQLENBTHFDO0dBQXZCOzs7Ozs7OztBQWNmLG9DQUFZLElBQUksU0FBUztBQUN4QixPQUFJLENBQUMsT0FBRCxFQUFVLFVBQVUsU0FBUyxJQUFULENBQXhCO0FBQ0EsT0FBSSxTQUFTLEdBQUcscUJBQUgsRUFBVCxDQUZvQjtBQUd4QixPQUFJLGNBQWMsUUFBUSxxQkFBUixFQUFkLENBSG9COztBQUt4QixVQUFPLENBQUMsT0FBTyxJQUFQLEdBQWMsWUFBWSxJQUFaLEVBQWtCLE9BQU8sR0FBUCxHQUFhLFlBQVksR0FBWixDQUFyRCxDQUx3QjtHQWpFWDtBQXlFZCxnREFBa0IsSUFBSSxTQUFTO0FBQzlCLE9BQUksQ0FBQyxPQUFELEVBQVUsVUFBVSxTQUFTLElBQVQsQ0FBeEI7QUFDQSxPQUFJLFNBQVMsR0FBRyxxQkFBSCxFQUFULENBRjBCO0FBRzlCLE9BQUksY0FBYyxRQUFRLHFCQUFSLEVBQWQsQ0FIMEI7QUFJOUIsT0FBSSxJQUFJLE9BQU8sS0FBUCxHQUFlLE9BQU8sSUFBUCxDQUpPO0FBSzlCLE9BQUksSUFBSSxPQUFPLE1BQVAsR0FBZ0IsT0FBTyxHQUFQLENBTE07O0FBTzlCLFVBQU8sQ0FBQyxPQUFPLElBQVAsR0FBYyxZQUFZLElBQVosR0FBbUIsSUFBRSxDQUFGLEVBQUssT0FBTyxHQUFQLEdBQWEsWUFBWSxHQUFaLEdBQWtCLElBQUUsQ0FBRixDQUE3RSxDQVA4QjtHQXpFakI7OztBQW1GZCxRQUFNLGNBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUI7QUFDeEIsT0FBSSxDQUFKLEVBQU8sR0FBRyxLQUFILENBQVMsSUFBVCxHQUFnQixJQUFJLElBQUosQ0FBdkI7QUFDQSxPQUFJLENBQUosRUFBTyxHQUFHLEtBQUgsQ0FBUyxHQUFULEdBQWUsSUFBSSxJQUFKLENBQXRCO0dBRks7O0FBS04sV0FBUyxpQkFBUyxFQUFULEVBQWE7QUFDckIsT0FBSSxJQUFJLFNBQVMsR0FBRyxLQUFILENBQVMsV0FBVCxFQUFzQixFQUEvQixDQUFKLENBRGlCO0FBRXJCLE9BQUksSUFBSSxTQUFTLEdBQUcsS0FBSCxDQUFTLFlBQVQsRUFBdUIsRUFBaEMsQ0FBSixDQUZpQjtBQUdyQixVQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUCxDQUhxQjtHQUFiOztBQU1ULFVBQVEsZ0JBQVMsRUFBVCxFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUI7QUFDMUIsT0FBSSxDQUFKLEVBQU8sR0FBRyxLQUFILENBQVMsS0FBVCxHQUFpQixJQUFJLElBQUosQ0FBeEI7QUFDQSxPQUFJLENBQUosRUFBTyxHQUFHLEtBQUgsQ0FBUyxNQUFULEdBQWtCLElBQUksSUFBSixDQUF6QjtHQUZPOztBQUtSLGlCQUFlLHVCQUFTLEtBQVQsRUFBZ0I7QUFDOUIsT0FBSSxDQUFDLEtBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixLQUFLLGFBQUwsQ0FBbUIsSUFBbkIsR0FBMEIsRUFBMUIsQ0FBOUI7QUFDQSxPQUFJLENBQUMsS0FBSyxhQUFMLENBQW1CLE1BQW5CLEVBQTJCLEtBQUssYUFBTCxDQUFtQixNQUFuQixHQUE0QixFQUE1QixDQUFoQzs7QUFFQSxPQUFJLE9BQU8sS0FBSyxhQUFMLENBQW1CLElBQW5CLENBSm1CO0FBSzlCLE9BQUksR0FBSjtPQUFTLE9BQU8sSUFBUCxDQUxxQjtBQU05QixRQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1QztBQUN0QyxVQUFNLElBQUksS0FBSixFQUFOLENBRHNDO0FBRXRDLFFBQUksTUFBSixHQUFhLFlBQVc7QUFDdkIsU0FBSSxRQUFRLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBUixDQURtQjtBQUV2QixTQUFJLFVBQVUsQ0FBQyxDQUFELEVBQUk7QUFDakIsV0FBSyxhQUFMLENBQW1CLE1BQW5CLENBQTBCLEtBQUssSUFBTCxDQUExQixHQUF1QyxFQUFDLE9BQU8sS0FBSyxLQUFMLEVBQVksUUFBUSxLQUFLLE1BQUwsRUFBbkU7OztBQURpQixVQUlqQixDQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQW1CLENBQW5CLEVBSmlCO01BQWxCO0tBRlksQ0FGeUI7QUFXdEMsU0FBSyxJQUFMLENBQVUsR0FBVixFQVhzQztBQVl0QyxRQUFJLEdBQUosR0FBVSxNQUFNLENBQU4sQ0FBVixDQVpzQztBQWF0QyxRQUFJLElBQUosR0FBVyxNQUFNLENBQU4sQ0FBWCxDQWJzQztJQUF2QztHQU5jOzs7Ozs7QUEyQmYsZ0JBQWMsc0JBQVMsR0FBVCxFQUFjO0FBQzNCLE9BQUksS0FBSyxhQUFMLENBQW1CLE1BQW5CLEVBQTJCO0FBQzlCLFdBQU8sS0FBSyxhQUFMLENBQW1CLE1BQW5CLENBQTBCLEdBQTFCLENBQVAsQ0FEOEI7SUFBL0I7QUFHQSxVQUFPLElBQVAsQ0FKMkI7R0FBZDs7Ozs7O0FBV2Qsa0JBQWdCLHdCQUFTLENBQVQsRUFBVztBQUMxQixPQUFJLFVBQVUsRUFBRSxNQUFGLENBQVMsT0FBVCxDQURZO0FBRTFCLFVBQVEsV0FBVyxPQUFYLElBQXNCLFdBQVcsVUFBWCxJQUF5QixXQUFXLFFBQVgsQ0FGN0I7R0FBWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDeklJO0FBQ3BCLFdBRG9CLFlBQ3BCLENBQVksR0FBWixFQUFpQjt5QkFERyxjQUNIOztBQUNoQixRQUFLLE1BQUwsR0FBYyxFQUFkLENBRGdCO0FBRWhCLE9BQUksR0FBSixFQUNDLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsR0FBakIsRUFERDtHQUZEOztlQURvQjs7MEJBT2IsT0FBTztBQUNiLFFBQUksaUJBQUUsUUFBRixDQUFXLEtBQVgsQ0FBSixFQUNDLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsS0FBakIsRUFERCxLQUVLLElBQUksaUJBQUUsT0FBRixDQUFVLEtBQVYsQ0FBSixFQUNKLEtBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsS0FBbkIsQ0FBZCxDQURJLEtBR0osS0FBSyxNQUFMLENBQVksSUFBWixDQUFpQixLQUFLLEtBQUwsQ0FBakIsQ0FISTtBQUlMLFdBQU8sSUFBUCxDQVBhOzs7OzJCQVVOLE9BQU87QUFDZCxRQUFJLGlCQUFFLFFBQUYsQ0FBVyxLQUFYLENBQUosRUFDQyxLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEtBQXpCLEVBREQsS0FFSyxJQUFJLGlCQUFFLE9BQUYsQ0FBVSxLQUFWLENBQUosRUFDSixLQUFLLE1BQUwsR0FBYyxNQUFNLE1BQU4sQ0FBYSxLQUFLLE1BQUwsQ0FBM0IsQ0FESSxLQUdKLEtBQUssTUFBTCxDQUFZLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSyxLQUFMLENBQXpCLENBSEk7QUFJTCxXQUFPLElBQVAsQ0FQYzs7OzsyQkFVUDtBQUNQLFNBQUssTUFBTCxHQUFjLEVBQWQsQ0FETzs7OztnQ0FJSztBQUNaLFNBQUssTUFBTCxDQUFZLEdBQVosR0FEWTtBQUVaLFdBQU8sSUFBUCxDQUZZOzs7OzRCQUtKLEtBQUs7QUFDYixRQUFJLENBQUMsR0FBRCxFQUFNLE1BQU0sRUFBTixDQUFWO0FBQ0EsV0FBTyxLQUFLLE1BQUwsQ0FBWSxJQUFaLENBQWlCLEdBQWpCLENBQVAsQ0FGYTs7OztTQXBDTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0hBO0FBQ3BCLFdBRG9CLElBQ3BCLENBQVksS0FBWixFQUFtQixHQUFuQixFQUF3Qjt5QkFESixNQUNJOztBQUN2QixRQUFLLEtBQUwsR0FBYSxLQUFiLENBRHVCO0FBRXZCLFFBQUssR0FBTCxHQUFXLEdBQVgsQ0FGdUI7R0FBeEI7Ozs7Ozs7ZUFEb0I7OzRCQVNYO0FBQ1IsV0FBTyxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEtBQUssR0FBTCxDQUEzQixDQURROzs7Ozs7Ozs7NEJBT0EsSUFBSTtBQUNaLFFBQUksSUFBSSxLQUFLLEtBQUwsQ0FBVyxRQUFYLENBQW9CLEVBQXBCLENBQUosQ0FEUTtBQUVaLFFBQUksS0FBSyxDQUFMLEVBQVEsT0FBTyxDQUFQLENBQVo7O0FBRUEsUUFBSSxJQUFJLEtBQUssTUFBTCxFQUFKLENBSlE7QUFLWixRQUFJLE9BQU8sb0JBQVUsQ0FBQyxLQUFLLEdBQUwsQ0FBUyxDQUFULEdBQWEsS0FBSyxLQUFMLENBQVcsQ0FBWCxDQUFkLEdBQThCLENBQTlCLEVBQWlDLENBQUMsS0FBSyxHQUFMLENBQVMsQ0FBVCxHQUFhLEtBQUssS0FBTCxDQUFXLENBQVgsQ0FBZCxHQUE4QixDQUE5QixDQUEzQyxDQUE0RSxVQUE1RSxDQUNWLG9CQUFVLEdBQUcsQ0FBSCxHQUFPLENBQVAsRUFBVSxHQUFHLENBQUgsR0FBTyxDQUFQLENBRFYsQ0FBUCxDQUxROztBQVFaLFdBQU8sSUFBSSxLQUFLLElBQUwsQ0FBVSxJQUFJLE9BQU8sSUFBUCxDQUFsQixDQVJLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQStDRjtBQUNWLFdBQU8saUJBQWlCLEtBQUssS0FBTCxHQUFhLE9BQTlCLEdBQXdDLEtBQUssR0FBTCxHQUFXLEdBQW5ELENBREc7Ozs7Z0NBcEJTLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSTtBQUNuRCxRQUFJLFFBQVEsQ0FBRSxLQUFLLEVBQUwsQ0FBRCxJQUFhLEtBQUssRUFBTCxDQUFiLEdBQTBCLENBQUMsS0FBSyxFQUFMLENBQUQsSUFBYSxLQUFLLEVBQUwsQ0FBYixDQURZO0FBRW5ELFFBQUksU0FBUyxDQUFFLEtBQUssRUFBTCxDQUFELElBQWEsS0FBSyxFQUFMLENBQWIsR0FBMEIsQ0FBQyxLQUFLLEVBQUwsQ0FBRCxJQUFhLEtBQUssRUFBTCxDQUFiLENBRlc7QUFHbkQsUUFBSSxTQUFTLENBQUUsS0FBSyxFQUFMLENBQUQsSUFBYSxLQUFLLEVBQUwsQ0FBYixHQUEwQixDQUFDLEtBQUssRUFBTCxDQUFELElBQWEsS0FBSyxFQUFMLENBQWIsQ0FIVzs7QUFLbkQsUUFBSSxLQUFLLFNBQVMsS0FBVCxDQUwwQztBQU1uRCxRQUFJLEtBQUssU0FBUyxLQUFULENBTjBDOztBQVFuRCxRQUFJLE1BQU0sR0FBTixJQUFhLE1BQU0sR0FBTixJQUFhLE1BQU0sR0FBTixJQUFhLE1BQU0sR0FBTixFQUFXOztBQUVyRCxTQUFJLGdCQUFnQixLQUFLLE1BQU0sS0FBSyxFQUFMLENBQU4sQ0FGNEI7QUFHckQsU0FBSSxnQkFBZ0IsS0FBSyxNQUFNLEtBQUssRUFBTCxDQUFOLENBSDRCOztBQUtyRCxZQUFPLG9CQUFVLGFBQVYsRUFBeUIsYUFBekIsQ0FBUCxDQUxxRDtLQUF0RDs7O0FBUm1ELFdBaUI1QyxJQUFQLENBakJtRDs7OztTQTNDaEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0NBOzs7Ozs7Ozs7Ozs4QkFDVDtBQUNWLFdBQU8sZ0JBQWdCLEtBQUssQ0FBTCxHQUFTLEtBQXpCLEdBQWlDLEtBQUssQ0FBTCxHQUFTLFNBQTFDLEdBQXNELEtBQUssS0FBTCxHQUFhLFVBQW5FLEdBQWdGLEtBQUssTUFBTCxHQUFjLEdBQTlGLENBREc7Ozs7Z0NBSVMsTUFBTSxJQUF3QjtRQUFwQixtRUFBYSxxQkFBTzs7QUFDakQsUUFBSSxJQUFJLEtBQUssS0FBTCxHQUFhLENBQWIsQ0FEeUM7QUFFakQsUUFBSSxJQUFJLEtBQUssTUFBTCxHQUFjLENBQWQsQ0FGeUM7QUFHakQsUUFBSSxLQUFLLEtBQUssQ0FBTCxDQUh3QztBQUlqRCxRQUFJLEtBQUssS0FBSyxDQUFMLENBSndDO0FBS2pELFFBQUksS0FBSyxHQUFHLENBQUgsQ0FMd0M7QUFNakQsUUFBSSxLQUFLLEdBQUcsQ0FBSDs7OztBQU53QyxRQVU3QyxLQUFLLFNBQVMsS0FBSyxFQUFMLENBQWQsQ0FWNkM7QUFXakQsUUFBSSxLQUFLLFNBQVMsS0FBSyxFQUFMLENBQWQsQ0FYNkM7O0FBYWpELFFBQUksRUFBSixFQUFRLEVBQVIsQ0FiaUQ7O0FBZWpELFFBQUksTUFBTSxDQUFOLElBQVcsTUFBTSxDQUFOLEVBQVM7QUFDdkIsWUFBTyxvQkFBVSxFQUFWLEVBQWMsS0FBSyxJQUFJLEVBQUosR0FBUyxLQUFLLEdBQUwsQ0FBUyxFQUFULENBQVQsQ0FBMUIsQ0FEdUI7S0FBeEIsTUFFTyxJQUFJLE1BQU0sQ0FBTixJQUFXLE1BQU0sQ0FBTixFQUFTO0FBQzlCLFlBQU8sb0JBQVUsRUFBVixFQUFjLEVBQWQsQ0FBUCxDQUQ4QjtLQUF4Qjs7QUFJUCxRQUFJLFVBQUosRUFBZ0I7QUFDZixTQUFJLE1BQU0sS0FBSyxHQUFMLElBQVksTUFBTSxLQUFLLE1BQUwsRUFBYTtBQUN4QyxXQUFLLEtBQUssRUFBTCxDQURtQztBQUV4QyxXQUFLLEtBQUssSUFBTCxDQUFVLElBQUksQ0FBSixJQUFTLElBQUksRUFBQyxHQUFLLEVBQUwsSUFBWSxJQUFJLENBQUosQ0FBYixDQUFiLENBQVYsSUFBZ0QsQ0FBaEQsQ0FGbUM7O0FBSXhDLFVBQUksTUFBTSxLQUFLLElBQUwsRUFBVztBQUNwQixZQUFLLENBQUMsRUFBRCxDQURlO09BQXJCOztBQUlBLGFBQU8sb0JBQVUsS0FBSyxFQUFMLEVBQVMsRUFBbkIsQ0FBUCxDQVJ3QztNQUF6Qzs7QUFXQSxTQUFJLE1BQU0sS0FBSyxJQUFMLElBQWEsTUFBTSxLQUFLLEtBQUwsRUFBWTtBQUN4QyxXQUFLLEtBQUssRUFBTCxDQURtQztBQUV4QyxXQUFLLEtBQUssSUFBTCxDQUFVLElBQUksQ0FBSixJQUFTLElBQUksRUFBQyxHQUFLLEVBQUwsSUFBWSxJQUFJLENBQUosQ0FBYixDQUFiLENBQVYsSUFBZ0QsQ0FBaEQsQ0FGbUM7O0FBSXhDLFVBQUksTUFBTSxLQUFLLEdBQUwsRUFBVTtBQUNuQixZQUFLLENBQUMsRUFBRCxDQURjO09BQXBCOztBQUlBLGFBQU8sb0JBQVUsRUFBVixFQUFjLEtBQUssRUFBTCxDQUFyQixDQVJ3QztNQUF6QztLQVpEOzs7QUFyQmlELFFBOEM3QyxJQUFJLEtBQUssRUFBTCxDQTlDeUM7QUErQ2pELFFBQUksSUFBSSxLQUFLLElBQUksRUFBSixDQS9Db0M7QUFnRGpELFFBQUksSUFBSSxJQUFJLENBQUosR0FBUSxDQUFSLEdBQVksQ0FBWixHQUFnQixJQUFJLENBQUosQ0FoRHlCO0FBaURqRCxRQUFJLElBQUksQ0FBQyxDQUFELEdBQUssRUFBTCxHQUFVLENBQVYsQ0FqRHlDO0FBa0RqRCxRQUFJLElBQUksSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosR0FBZ0IsRUFBaEIsR0FBcUIsRUFBckIsR0FBMEIsSUFBSSxDQUFKLEdBQVEsRUFBUixHQUFhLEVBQWIsR0FBa0IsSUFBSSxDQUFKLEdBQVEsQ0FBUixHQUFZLENBQVosQ0FsREg7QUFtRGpELFFBQUksTUFBTSxLQUFLLElBQUwsQ0FBVSxJQUFJLENBQUosR0FBUSxJQUFJLENBQUosR0FBUSxDQUFSLENBQXhCOzs7QUFuRDZDLFFBc0Q3QyxRQUFRLENBQUMsQ0FBQyxDQUFELEdBQUssR0FBTCxDQUFELElBQWMsSUFBSSxDQUFKLENBQWQsQ0F0RHFDO0FBdURqRCxRQUFJLFFBQVEsQ0FBQyxDQUFDLENBQUQsR0FBSyxHQUFMLENBQUQsSUFBYyxJQUFJLENBQUosQ0FBZCxDQXZEcUM7QUF3RGpELFFBQUksUUFBUSxJQUFJLEtBQUosR0FBWSxDQUFaLENBeERxQztBQXlEakQsUUFBSSxRQUFRLElBQUksS0FBSixHQUFZLENBQVosQ0F6RHFDO0FBMERqRCxRQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsS0FBSyxHQUFMLENBQVUsUUFBUSxFQUFSLEVBQWEsQ0FBdkIsSUFBNEIsS0FBSyxHQUFMLENBQVUsUUFBUSxFQUFSLEVBQWEsQ0FBdkIsQ0FBNUIsQ0FBbEIsQ0ExRDZDO0FBMkRqRCxRQUFJLFFBQVEsS0FBSyxJQUFMLENBQVUsS0FBSyxHQUFMLENBQVUsUUFBUSxFQUFSLEVBQWEsQ0FBdkIsSUFBNEIsS0FBSyxHQUFMLENBQVUsUUFBUSxFQUFSLEVBQWEsQ0FBdkIsQ0FBNUIsQ0FBbEI7OztBQTNENkMsUUE4RDdDLE9BQU8sQ0FBUCxDQTlENkM7QUErRGpELFFBQUksT0FBTyxDQUFQLENBL0Q2Qzs7QUFpRWpELFFBQUksUUFBUSxLQUFSLEVBQWU7QUFDbEIsWUFBTyxLQUFQLENBRGtCO0FBRWxCLFlBQU8sS0FBUCxDQUZrQjtLQUFuQixNQUdPO0FBQ04sWUFBTyxLQUFQLENBRE07QUFFTixZQUFPLEtBQVAsQ0FGTTtLQUhQOztBQVFBLFdBQU8sb0JBQVUsSUFBVixFQUFnQixJQUFoQixDQUFQLENBekVpRDs7OztTQUw5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDRFQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBS1M7Ozs7Ozs7QUFNcEIsV0FOb0IsZUFNcEIsQ0FBWSxJQUFaLEVBQTZDO09BQTNCLGtFQUFZLENBQUMsQ0FBRCxFQUFJLFFBQUosaUJBQWU7O3lCQU56QixpQkFNeUI7O0FBQzVDLFFBQUssSUFBTCxHQUFZLElBQVosQ0FENEM7QUFFNUMsUUFBSyxNQUFMLEdBQWMsS0FBSyxZQUFMLENBQWtCLElBQWxCLEtBQTJCLE1BQTNCLENBRjhCO0FBRzVDLFFBQUssU0FBTCxHQUFpQixTQUFqQixDQUg0QztBQUk1QyxRQUFLLEtBQUwsR0FBYSxHQUFiLENBSjRDO0FBSzVDLFFBQUssU0FBTCxHQUFpQixFQUFqQixDQUw0QztBQU01QyxRQUFLLFFBQUwsR0FBZ0IsS0FBaEIsQ0FONEM7QUFPNUMsUUFBSyxPQUFMLEdBQWUsaUJBQUUsSUFBRixDQUFPLEtBQUssV0FBTCxFQUFrQixJQUF6QixDQUFmLENBUDRDO0FBUTVDLFFBQUssT0FBTCxHQUFlLEtBQWY7OztBQVI0QyxPQVc1QyxDQUFLLFVBQUwsR0FBa0IsRUFBbEIsQ0FYNEM7R0FBN0M7Ozs7Ozs7ZUFOb0I7OzJCQXVCWjtBQUNQLFFBQUksS0FBSyxPQUFMLEVBQWMsT0FBbEI7QUFDQSxtQkFBTyxFQUFQLENBQVUsS0FBSyxJQUFMLEVBQVcsMEZBQXJCLEVBQWlILEtBQUssT0FBTCxDQUFqSCxDQUZPO0FBR1AsU0FBSyxTQUFMLEdBSE87QUFJUCxTQUFLLE9BQUwsR0FBZSxJQUFmLENBSk87Ozs7Ozs7OzswQkFVRDtBQUNOLFFBQUksQ0FBQyxLQUFLLE9BQUwsRUFBYyxPQUFuQjtBQUNBLG1CQUFPLEdBQVAsQ0FBVyxLQUFLLElBQUwsRUFBVywwRkFBdEIsRUFBa0gsS0FBSyxPQUFMLENBQWxILENBRk07QUFHTixTQUFLLFFBQUwsR0FITTtBQUlOLFNBQUssT0FBTCxHQUFlLEtBQWYsQ0FKTTs7OzsrQkFPSztBQUNYLG1CQUFPLEVBQVAsQ0FBVSxRQUFWLEVBQW9CLGVBQXBCLEVBQXFDLEtBQUssT0FBTCxDQUFyQyxDQURXOzs7OzhCQUlEO0FBQ1YsbUJBQU8sR0FBUCxDQUFXLFFBQVgsRUFBcUIsZUFBckIsRUFBc0MsS0FBSyxPQUFMLENBQXRDLENBRFU7Ozs7Z0NBSUUsT0FBTztBQUNuQixRQUFJLFNBQVMsTUFBTSxNQUFOLENBRE07QUFFbkIsUUFBSSxNQUFNLDRCQUFOO1FBQTBCLFdBQTlCO1FBQWtDLFFBQVEsRUFBUjtRQUFZLFNBQVMsS0FBVCxDQUYzQjtBQUduQixXQUFPLENBQUMsTUFBRCxJQUFXLE1BQVgsSUFBcUIsVUFBVSxRQUFWLEVBQW9CO0FBQy9DLFVBQUssT0FBTyxZQUFQLENBQW9CLElBQXBCLENBQUwsQ0FEK0M7QUFFL0MsU0FBSSxFQUFKLEVBQVE7QUFDUCxlQUFTLGlCQUFFLFVBQUYsQ0FBYSxFQUFiLEVBQWlCLE9BQWpCLENBQVQsQ0FETztBQUVQLFVBQUksTUFBSixFQUFZO0FBQ1gsWUFBSyxHQUFHLFNBQUgsQ0FBYSxDQUFiLENBQUwsQ0FEVztBQUVYLGFBQU0sVUFBTixHQUFtQixNQUFuQixDQUZXO09BQVo7QUFJQSxVQUFJLENBQUMsTUFBTSxRQUFOLEVBQWdCLE1BQU0sUUFBTixHQUFpQixNQUFqQixDQUFyQjtBQUNBLFlBQU0sTUFBTixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsTUFBbkIsRUFQTztBQVFQLFVBQUksT0FBSixDQUFZLEVBQVosRUFSTztNQUFSO0FBVUEsY0FBUyxPQUFPLFVBQVAsQ0Fac0M7S0FBaEQ7QUFjQSxRQUFJLENBQUMsTUFBRCxFQUNILE1BQU0sVUFBTixHQUFtQixNQUFNLFFBQU4sQ0FEcEI7OztBQWpCbUIsU0FxQm5CLENBQU0sV0FBTixHQUFvQixLQUFwQixDQXJCbUI7QUFzQm5CLFNBQUssSUFBSSxRQUFKLENBQWEsR0FBYixDQUFMLENBdEJtQjtBQXVCbkIsUUFBSSxNQUFNLEVBQU4sRUFBVSxLQUFLLEtBQUssTUFBTCxDQUFuQjtBQUNBLFdBQU8sRUFBQyxNQUFNLE1BQU0sVUFBTixFQUFrQixJQUFJLEVBQUosRUFBaEMsQ0F4Qm1COzs7Ozs7Ozs7K0JBOEJSLE9BQU87OztBQUNsQixRQUFJLE9BQU8sTUFBTSxJQUFOOzs7QUFETyxRQUlkLEtBQUssUUFBTCxJQUFpQixtQkFBUyxjQUFULENBQXdCLEtBQXhCLENBQWpCLEVBQWlELE9BQXJEOztBQUVBLFFBQUksYUFBSjtRQUFVLFdBQVY7UUFBYyxNQUFNLEtBQUssV0FBTCxDQUFpQixLQUFqQixDQUFOO1FBQStCLGFBQTdDO1FBQW1ELGFBQWMsUUFBUSxTQUFSLElBQXFCLFFBQU8sT0FBUCxDQU5wRTtBQU9sQixRQUFJLFVBQUosRUFBZ0I7QUFDZixZQUFPLEtBQUssSUFBTCxDQURRO0FBRWYsVUFBSyxTQUFTLFdBQVQsQ0FBcUIsS0FBckIsQ0FBTCxDQUZlO0tBQWhCLE1BR087QUFDTixZQUFPLEtBQUssWUFBTCxDQUFrQixLQUFsQixDQUFQLENBRE07QUFFTixTQUFJLENBQUMsSUFBRCxFQUFPLE9BQVg7QUFDQSxZQUFPLEtBQUssSUFBTCxDQUhEO0FBSU4sVUFBSyxLQUFLLEVBQUwsQ0FKQztLQUhQOzs7O0FBUGtCLFFBbUJkLFFBQVEsWUFBUixFQUFzQjtBQUN6QixVQUFLLEtBQUwsSUFBYyxLQUFLLEdBQUwsQ0FBUyxDQUFULEVBQVksTUFBTSxVQUFOLEdBQW1CLEtBQW5CLENBQTFCLENBRHlCO0FBRXpCLFVBQUssS0FBTCxHQUFhLEtBQUssR0FBTCxDQUFTLEtBQUssR0FBTCxDQUFTLEtBQUssU0FBTCxDQUFlLENBQWYsQ0FBVCxFQUE0QixLQUFLLEtBQUwsQ0FBckMsRUFBa0QsS0FBSyxTQUFMLENBQWUsQ0FBZixDQUFsRCxDQUFiLENBRnlCO0FBR3pCLFdBQU0sS0FBTixHQUFjLEtBQUssS0FBTCxDQUhXO0FBSXpCLFlBQU8sTUFBUCxDQUp5QjtLQUExQjs7O0FBbkJrQixRQTJCZCxRQUFRLFdBQVIsSUFBdUIsTUFBTSxNQUFOLElBQWdCLENBQWhCLDRCQUEzQixFQUEwRTs7O0FBRXpFLFdBQU0sYUFBYSxFQUFDLE1BQU0sSUFBTixFQUFZLEtBQUssTUFBTSxNQUFOLEdBQWUsZ0JBQWdCLEtBQWhCLENBQXNCLE1BQUssSUFBTCxFQUFXLEtBQWpDLENBQWYsR0FBeUQsR0FBekQsRUFBL0I7QUFDTixhQUFLLFFBQUwsR0FBZ0IsS0FBaEI7O0FBRUEsV0FBSSxnQkFBSjs7QUFFQSxXQUFNLFlBQVksU0FBWixTQUFZLENBQUMsS0FBRCxFQUFXO0FBQzVCLFlBQUksYUFBYSxNQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBYixDQUR3QjtBQUU1QixZQUFJLENBQUMsTUFBSyxRQUFMLEVBQWU7O0FBRW5CLGFBQUksV0FBVyxHQUFYLENBQWUsQ0FBZixLQUFxQixXQUFXLENBQVgsQ0FBckIsSUFBc0MsV0FBVyxHQUFYLENBQWUsQ0FBZixLQUFxQixXQUFXLENBQVgsQ0FBckIsRUFBb0MsT0FBOUU7OztBQUZtQixjQUtuQixDQUFLLFFBQUwsR0FBZ0IsSUFBaEIsQ0FMbUI7QUFNbkIsZUFBTSxVQUFOLEdBQW1CLFdBQVcsSUFBWCxDQU5BO0FBT25CLGVBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsV0FBckIsRUFBa0MsRUFBbEMsRUFBc0MsV0FBVyxJQUFYLEVBQWlCLFdBQVcsR0FBWCxDQUF2RCxDQVBtQjtTQUFwQjtBQVNBLFlBQUksTUFBTSxNQUFOLEVBQ0gsVUFBVSxnQkFBZ0IsS0FBaEIsQ0FBc0IsTUFBSyxJQUFMLEVBQVcsS0FBakMsQ0FBVixDQURELEtBR0MsVUFBVSxVQUFWLENBSEQ7QUFJQSxjQUFLLFlBQUwsQ0FBa0IsS0FBbEIsRUFmNEI7QUFnQjVCLGNBQUssUUFBTCxDQUFjLEtBQWQsRUFBcUIsTUFBckIsRUFBNkIsRUFBN0IsRUFBaUMsV0FBVyxJQUFYLEVBQWlCLE9BQWxELEVBaEI0QjtRQUFYO0FBa0JsQixXQUFNLFVBQVUsU0FBVixPQUFVLENBQUMsS0FBRCxFQUFXO0FBQzFCLFlBQUksTUFBTSxNQUFOLEVBQ0gsVUFBVSxnQkFBZ0IsS0FBaEIsQ0FBc0IsTUFBSyxJQUFMLEVBQVcsS0FBakMsQ0FBVixDQURELEtBR0MsVUFBVSxNQUFLLFdBQUwsQ0FBaUIsS0FBakIsQ0FBVixDQUhEOztBQUtBLFlBQUksT0FBTyxNQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBUCxDQU5zQjtBQU8xQixZQUFJLE1BQUssUUFBTCxFQUFlO0FBQ2xCLGVBQUssUUFBTCxHQUFnQixLQUFoQixDQURrQjtBQUVsQixlQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLFNBQXJCLEVBQWdDLEVBQWhDLEVBQW9DLFdBQVcsSUFBWCxFQUFpQixPQUFyRCxFQUZrQjtTQUFuQixNQUdPO0FBQ04sZUFBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixTQUFyQixFQUFnQyxFQUFoQyxFQUFvQyxLQUFLLElBQUwsRUFBVyxPQUEvQyxFQURNO1NBSFA7O0FBT0EsdUJBQU8sR0FBUCxDQUFXLE1BQVgsRUFBbUIsV0FBbkIsRUFBZ0MsU0FBaEMsRUFkMEI7QUFlMUIsdUJBQU8sR0FBUCxDQUFXLE1BQVgsRUFBbUIsU0FBbkIsRUFBOEIsT0FBOUIsRUFmMEI7UUFBWDtBQWlCaEIsYUFBTSxjQUFOO0FBQ0Esc0JBQU8sRUFBUCxDQUFVLE1BQVYsRUFBa0IsV0FBbEIsRUFBK0IsU0FBL0I7QUFDQSxzQkFBTyxFQUFQLENBQVUsTUFBVixFQUFrQixTQUFsQixFQUE2QixPQUE3QjtXQTVDeUU7TUFBMUU7O0FBK0NBLFFBQUksQ0FBQyxVQUFELEVBQ0gsS0FBSyxrQkFBTCxDQUF3QixLQUF4QixFQUErQixJQUEvQixFQUFxQyxFQUFyQyxFQUF5QyxJQUF6QyxFQUErQyxHQUEvQyxFQUREO0FBRUEsU0FBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixJQUFyQixFQUEyQixFQUEzQixFQUErQixJQUEvQixFQUFxQyxHQUFyQzs7O0FBNUVrQixRQStFZCxRQUFRLGFBQVIsRUFDSCxNQUFNLGNBQU4sR0FERDs7Ozs7Ozs7O3NDQU9rQixPQUFPLE1BQU0sSUFBSSxNQUFNLEtBQUs7OztBQUM5QyxRQUFJLGFBQUo7UUFBVSxjQUFWLENBRDhDO0FBRTlDLFFBQU0sa0JBQWtCLFNBQWxCLGVBQWtCLENBQUMsQ0FBRCxFQUFPO0FBQzlCLFNBQUksS0FBSyxDQUFMOztBQUQwQixZQUd2QixPQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsSUFBMEIsSUFBSSxDQUFKLEVBQU87QUFDdkMsYUFBTyxPQUFLLFVBQUwsQ0FBZ0IsR0FBaEIsRUFBUCxDQUR1QztBQUV2QyxhQUFLLFFBQUwsQ0FBYyxLQUFkLEVBQXFCLFlBQXJCLEVBQW1DLEtBQUssRUFBTCxFQUFTLEtBQUssSUFBTCxFQUFXLEdBQXZELEVBRnVDO01BQXhDO0tBSHVCLENBRnNCO0FBVTlDLFFBQU0sUUFBUSxTQUFSLEtBQVEsQ0FBUyxLQUFULEVBQWdCO0FBQzdCLFNBQUksTUFBTSw0QkFBTixDQUR5QjtBQUU3QixVQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sS0FBSyxLQUFMLEVBQVksR0FBNUIsRUFBaUM7QUFDaEMsVUFBSSxNQUFNLE1BQU0sQ0FBTixFQUFTLFlBQVQsQ0FBc0IsSUFBdEIsQ0FBTixDQUQ0QjtBQUVoQyxVQUFJLGlCQUFFLFVBQUYsQ0FBYSxHQUFiLEVBQWtCLE9BQWxCLENBQUosRUFDQyxNQUFNLElBQUksU0FBSixDQUFjLENBQWQsQ0FBTixDQUREO0FBRUEsVUFBSSxNQUFKLENBQVcsR0FBWCxFQUpnQztNQUFqQztBQU1BLFlBQU8sSUFBSSxRQUFKLENBQWEsR0FBYixDQUFQLENBUjZCO0tBQWhCLENBVmdDOztBQXFCOUMsUUFBSSxNQUFNLE1BQU0sS0FBSyxNQUFMLEVBQWE7QUFDNUIsU0FBSSxRQUFRLFdBQVIsRUFBcUI7QUFDeEIsY0FBUSxNQUFNLFdBQU4sQ0FEZ0I7QUFFeEIsVUFBSSxhQUFKLENBRndCO0FBR3hCLFdBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3RDLFdBQUksSUFBSSxLQUFLLFVBQUwsQ0FBZ0IsTUFBaEIsRUFBd0I7QUFDL0IsWUFBSSxLQUFLLFVBQUwsQ0FBZ0IsQ0FBaEIsRUFBbUIsTUFBbkIsSUFBNkIsTUFBTSxDQUFOLENBQTdCLEVBQXVDO0FBQzFDLHlCQUFnQixDQUFoQixFQUQwQztTQUEzQyxNQUdDLFNBSEQ7UUFERDtBQU1BLGNBQU8sRUFBQyxNQUFNLElBQU4sRUFBWSxJQUFJLE1BQU0sQ0FBTixDQUFKLEVBQWMsUUFBUSxNQUFNLENBQU4sQ0FBUixFQUFsQyxDQVBzQztBQVF0QyxZQUFLLFVBQUwsQ0FBZ0IsSUFBaEIsQ0FBcUIsSUFBckIsRUFSc0M7QUFTdEMsWUFBSyxRQUFMLENBQWMsS0FBZCxFQUFxQixZQUFyQixFQUFtQyxLQUFLLEVBQUwsRUFBUyxJQUE1QyxFQUFrRCxHQUFsRCxFQVRzQztPQUF2QztBQVdBLFVBQUksTUFBTSxNQUFOLEdBQWUsS0FBSyxVQUFMLENBQWdCLE1BQWhCLEVBQ2xCLGdCQUFnQixNQUFNLE1BQU4sQ0FBaEIsQ0FERDtNQWREO0tBREQ7QUFtQkEsUUFBSSxNQUFNLEtBQUssTUFBTCxJQUFlLEtBQUssVUFBTCxDQUFnQixNQUFoQixHQUF5QixDQUF6QixFQUN4QixrQkFERDs7Ozs0QkFJUSxPQUFPLE1BQU0sSUFBSSxNQUFNLEtBQUs7OztBQUdwQyxRQUFJLENBQUMsS0FBSyxPQUFMLEVBQWMsT0FBbkI7QUFDQSxRQUFNLFNBQVMsS0FBSyxPQUFPLEdBQVAsR0FBYSxFQUFiLEdBQWtCLElBQXZCLENBSnFCO0FBS3BDLHFCQUFFLE9BQUYsQ0FBVSxLQUFLLFNBQUwsRUFBZ0IsVUFBQyxTQUFELEVBQVksR0FBWixFQUFvQjtBQUM3QyxTQUFJLGdCQUFnQixLQUFoQixDQUFzQixNQUF0QixFQUE4QixHQUE5QixDQUFKLEVBQXdDO0FBQ3ZDLHVCQUFFLE9BQUYsQ0FBVSxTQUFWLEVBQXFCLFVBQUMsUUFBRCxFQUFjO0FBQ2xDLFdBQUksQ0FBQyxTQUFTLE9BQVQsRUFDSixTQUFTLFFBQVQsQ0FBa0IsS0FBbEIsQ0FBd0IsTUFBeEIsRUFBZ0MsQ0FBQyxJQUFELEVBQU8sRUFBUCxFQUFXLElBQVgsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FBaEMsRUFERCxLQUdDLFNBQVMsUUFBVCxDQUFrQixLQUFsQixDQUF3QixTQUFTLE9BQVQsRUFBa0IsQ0FBQyxJQUFELEVBQU8sRUFBUCxFQUFXLElBQVgsRUFBaUIsR0FBakIsRUFBc0IsS0FBdEIsQ0FBMUMsRUFIRDtPQURvQixDQUFyQixDQUR1QztNQUF4QztLQUR5QixDQUExQjs7O0FBTG9DLFFBaUJoQyxNQUFNLGVBQU4sRUFDSCxNQUFNLGVBQU4sR0FERDs7OzsrQkFJVyxPQUFPO0FBQ2xCLFFBQU0sTUFBTSxnQkFBZ0IsS0FBaEIsQ0FBc0IsS0FBSyxJQUFMLEVBQVcsS0FBakMsQ0FBTixDQURZO0FBRWxCLFFBQUcsQ0FBRSxpQkFBRSxLQUFGLENBQVEsSUFBSSxDQUFKLENBQVIsQ0FBRixJQUFxQixDQUFFLGlCQUFFLEtBQUYsQ0FBUSxJQUFJLENBQUosQ0FBUixDQUFGLEVBQ3ZCLEtBQUssWUFBTCxHQUFvQixHQUFwQixDQUREO0FBRUEsV0FBTyxLQUFLLFlBQUwsQ0FKVzs7Ozs7Ozs7OzsrQkFXUCxNQUFNLEtBQUssVUFBVSxTQUFTOzs7QUFDekMsUUFBSSxpQkFBRSxPQUFGLENBQVUsR0FBVixDQUFKLEVBQW9CO0FBQ25CLHNCQUFFLE9BQUYsQ0FBVSxHQUFWLEVBQWUsVUFBQyxDQUFELEVBQU87QUFDckIsYUFBSyxXQUFMLENBQWlCLElBQWpCLEVBQXVCLENBQXZCLEVBQTBCLFFBQTFCLEVBQW9DLE9BQXBDLEVBRHFCO01BQVAsQ0FBZixDQURtQjtBQUluQixZQUptQjtLQUFwQjtBQU1BLFVBQU0sU0FBUyxVQUFULENBQW9CLElBQUksSUFBSixFQUFVLElBQUksR0FBSixFQUFTLElBQUksS0FBSixFQUFXLElBQUksSUFBSixFQUFVLElBQUksSUFBSixDQUFsRSxDQVB5QztBQVF6QyxRQUFHLENBQUMsSUFBSSxNQUFKLEVBQVksT0FBaEI7QUFDQSxVQUFNLDJCQUFpQixJQUFqQixFQUF1QixNQUF2QixDQUE4QixHQUE5QixFQUFtQyxRQUFuQyxDQUE0QyxHQUE1QyxDQUFOLENBVHlDOztBQVd6QyxRQUFNLFdBQVcsRUFBQyxVQUFVLFFBQVYsRUFBb0IsU0FBUyxPQUFULEVBQWhDLENBWG1DO0FBWXpDLFNBQUssU0FBTCxDQUFlLEdBQWYsTUFBd0IsS0FBSyxTQUFMLENBQWUsR0FBZixJQUFzQixFQUF0QixDQUF4QixDQVp5QztBQWF6QyxTQUFLLFNBQUwsQ0FBZSxHQUFmLEVBQW9CLElBQXBCLENBQXlCLFFBQXpCLEVBYnlDOzs7O2lDQWdCNUIsTUFBTSxLQUFLLFVBQVUsU0FBUzs7O0FBQzNDLFFBQUksaUJBQUUsT0FBRixDQUFVLEdBQVYsQ0FBSixFQUFvQjtBQUNuQixzQkFBRSxPQUFGLENBQVUsR0FBVixFQUFlLFVBQUMsQ0FBRCxFQUFPO0FBQ3JCLGFBQUssYUFBTCxDQUFtQixJQUFuQixFQUF5QixDQUF6QixFQUE0QixRQUE1QixFQUFzQyxPQUF0QyxFQURxQjtNQUFQLENBQWYsQ0FEbUI7QUFJbkIsWUFKbUI7S0FBcEI7QUFNQSxVQUFNLFNBQVMsVUFBVCxDQUFvQixJQUFJLElBQUosRUFBVSxJQUFJLEdBQUosRUFBUyxJQUFJLEtBQUosRUFBVyxJQUFJLElBQUosRUFBVSxJQUFJLElBQUosQ0FBbEUsQ0FQMkM7QUFRM0MsUUFBRyxDQUFDLElBQUksTUFBSixFQUFZLE9BQWhCO0FBQ0EsVUFBTSwyQkFBaUIsSUFBakIsRUFBdUIsTUFBdkIsQ0FBOEIsR0FBOUIsRUFBbUMsUUFBbkMsQ0FBNEMsR0FBNUMsQ0FBTixDQVQyQzs7QUFXM0MsUUFBSSxZQUFZLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBWjtRQUFpQyxpQkFBckMsQ0FYMkM7QUFZM0MsUUFBSSxDQUFDLFNBQUQsRUFBWSxPQUFoQjtBQUNBLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLFVBQVUsTUFBVixFQUFrQixHQUF0QyxFQUEyQztBQUMxQyxnQkFBVyxVQUFVLENBQVYsQ0FBWCxDQUQwQztBQUUxQyxTQUFJLFNBQVMsUUFBVCxLQUFzQixRQUF0QixLQUFtQyxDQUFDLE9BQUQsSUFBWSxZQUFZLFNBQVMsT0FBVCxDQUEzRCxFQUE4RTtBQUNqRixnQkFBVSxNQUFWLENBQWlCLENBQWpCLEVBQW9CLENBQXBCLEVBRGlGO0FBRWpGLGFBRmlGO01BQWxGO0tBRkQ7Ozs7Ozs7Ozs0QkFZUSxNQUFNLFVBQVUsU0FBUyxRQUFROzs7QUFDekMsUUFBSSxpQkFBRSxPQUFGLENBQVUsSUFBVixDQUFKLEVBQXFCO0FBQ3BCLHNCQUFFLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLFVBQUMsQ0FBRCxFQUFPO0FBQ3RCLGFBQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsUUFBakIsRUFBMkIsT0FBM0IsRUFBb0MsTUFBcEMsRUFEc0I7TUFBUCxDQUFoQixDQURvQjtBQUlwQixZQUpvQjtLQUFyQjtBQU1BLFFBQU0sV0FBVyxFQUFDLFVBQVUsUUFBVixFQUFvQixTQUFTLE9BQVQsRUFBa0IsUUFBUSxNQUFSLEVBQWxELENBUG1DO0FBUXpDLFNBQUssU0FBTCxDQUFlLElBQWYsTUFBeUIsS0FBSyxTQUFMLENBQWUsSUFBZixJQUF1QixFQUF2QixDQUF6QixDQVJ5QztBQVN6QyxTQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLENBQTBCLFFBQTFCLEVBVHlDOzs7OzhCQVkvQixNQUFNLFVBQVUsU0FBUztBQUNuQyxRQUFJLFlBQVksS0FBSyxTQUFMLENBQWUsSUFBZixDQUFaO1FBQWtDLGlCQUF0QyxDQURtQztBQUVuQyxRQUFJLENBQUMsU0FBRCxFQUFZLE9BQWhCO0FBQ0EsU0FBSyxJQUFJLElBQUksQ0FBSixFQUFPLElBQUksVUFBVSxNQUFWLEVBQWtCLEdBQXRDLEVBQTJDO0FBQzFDLGdCQUFXLFVBQVUsQ0FBVixDQUFYLENBRDBDO0FBRTFDLFNBQUksU0FBUyxRQUFULEtBQXNCLFFBQXRCLEtBQW1DLENBQUMsT0FBRCxJQUFZLFlBQVksU0FBUyxPQUFULENBQTNELEVBQThFO0FBQ2pGLGdCQUFVLE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsRUFEaUY7QUFFakYsYUFGaUY7TUFBbEY7S0FGRDs7Ozs2QkFTUztBQUNULFNBQUssSUFBTCxHQURTO0FBRVQsV0FBTyxLQUFLLElBQUwsQ0FGRTtBQUdULFdBQU8sS0FBSyxTQUFMLENBSEU7QUFJVCxXQUFPLEtBQUssVUFBTCxDQUpFOzs7Ozs7Ozs7eUJBVUcsUUFBUSxnQkFBZ0I7QUFDcEMsUUFBTSxNQUFNLGVBQWUsS0FBZixDQUFxQixHQUFyQixDQUFOLENBRDhCO0FBRXBDLFFBQUksSUFBSSxNQUFKLElBQWMsQ0FBZCxFQUNILE9BQU8sVUFBVSxjQUFWLENBRFI7O0FBR0EsUUFBSSxlQUFKO1FBQVksUUFBUSxDQUFSLENBTHdCO0FBTXBDLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLElBQUksTUFBSixFQUFZLEdBQWhDLEVBQXFDO0FBQ3BDLFNBQUksSUFBSSxDQUFKLEVBQU8sTUFBUCxJQUFpQixDQUFqQixFQUFvQixTQUF4QjtBQUNBLGNBQVMsT0FBTyxLQUFQLENBQWEsS0FBYixDQUFULENBRm9DO0FBR3BDLGFBQVEsT0FBTyxPQUFQLENBQWUsSUFBSSxDQUFKLENBQWYsQ0FBUixDQUhvQztBQUlwQyxTQUFJLFFBQVEsQ0FBUixFQUNILE9BQU8sS0FBUCxDQUREO0FBRUEsY0FBUyxJQUFJLENBQUosRUFBTyxNQUFQLENBTjJCO0tBQXJDO0FBUUEsV0FBTyxJQUFQLENBZG9DOzs7O3lCQWlCeEIsV0FBVyxHQUFHO0FBQzFCLFFBQUksRUFBRSxjQUFGLEVBQWtCLElBQUksRUFBRSxjQUFGLENBQWlCLENBQWpCLENBQUosQ0FBdEI7QUFDQSxRQUFJLE1BQU0sVUFBVSxlQUFWLElBQTZCLFNBQTdCLENBRmdCO0FBRzFCLFFBQUksSUFBSSxjQUFKLEVBQW9CO0FBQ3ZCLFNBQUksUUFBUSxJQUFJLGNBQUosRUFBUixDQURtQjtBQUV2QixXQUFNLENBQU4sR0FBVSxFQUFFLE9BQUYsQ0FGYSxLQUVGLENBQU0sQ0FBTixHQUFVLEVBQUUsT0FBRixDQUZSO0FBR3ZCLGFBQVEsTUFBTSxlQUFOLENBQXNCLFVBQVUsWUFBVixHQUF5QixPQUF6QixFQUF0QixDQUFSLENBSHVCO0FBSXZCLFlBQU8sQ0FBQyxNQUFNLENBQU4sRUFBUyxNQUFNLENBQU4sQ0FBakIsQ0FKdUI7S0FBeEI7QUFNQSxRQUFJLE9BQU8sVUFBVSxxQkFBVixFQUFQLENBVHNCO0FBVTFCLFdBQU8sQ0FBQyxFQUFFLE9BQUYsR0FBWSxLQUFLLElBQUwsR0FBWSxVQUFVLFVBQVYsRUFBc0IsRUFBRSxPQUFGLEdBQVksS0FBSyxHQUFMLEdBQVcsVUFBVSxTQUFWLENBQTdFLENBVjBCOzs7O1NBNVVQOzs7Ozs7Ozs7Ozs7OztTQ2dDTDtTQWVBOzs7Ozs7Ozs7OztBQTNDaEIsS0FBTSxNQUFNO0FBQ1gsT0FBZSxFQUFmO0FBQ0EsY0FBZSxDQUFmO0FBQ0EsYUFBZSxFQUFmO0FBQ0EsV0FBZSxFQUFmO0FBQ0EsVUFBZSxFQUFmO0FBQ0EsUUFBZSxFQUFmO0FBQ0EsT0FBZSxFQUFmO0FBQ0EsU0FBZSxFQUFmO0FBQ0EsVUFBZSxHQUFmO0FBQ0EsUUFBZSxFQUFmO0FBQ0EsUUFBZSxFQUFmO0FBQ0EsUUFBZSxHQUFmO0FBQ0EsWUFBZSxHQUFmO0FBQ0EsYUFBZSxFQUFmO0FBQ0EsV0FBZSxFQUFmO0FBQ0EsU0FBZSxFQUFmO0FBQ0EsZUFBZSxFQUFmO0FBQ0EsU0FBZSxFQUFmO0FBQ0EsZUFBZSxHQUFmO0FBQ0EsU0FBZSxFQUFmO0FBQ0EsU0FBZSxFQUFmO0FBQ0EsT0FBZSxDQUFmO0FBQ0EsTUFBZSxFQUFmOzs7QUF2QlcsRUFBTjs7Ozs7O0FBNEJDLFVBQVMsV0FBVCxDQUFxQixLQUFyQixFQUE0QjtBQUNsQyxNQUFJLENBQUMsS0FBRCxJQUFVLENBQUMsS0FBRCxZQUFrQixhQUFsQixFQUFpQztBQUM5QyxVQUFPLElBQVAsQ0FEOEM7R0FBL0M7O0FBSUEsTUFBSSxNQUFNLE1BQU0sT0FBTixJQUFpQixNQUFNLEtBQU47OztBQUxPLE1BUTlCLE9BQU8sRUFBUCxJQUFhLE9BQU8sRUFBUCxFQUFXO0FBQzNCLFNBQU0sSUFBTixDQUQyQjtHQUE1Qjs7QUFJQSxTQUFPLFdBQVcsTUFBTSxPQUFOLEVBQWUsTUFBTSxNQUFOLEVBQWMsTUFBTSxRQUFOLEVBQWdCLE1BQU0sT0FBTixFQUFlLEdBQXZFLENBQVAsQ0Faa0M7RUFBNUI7O0FBZUEsVUFBUyxVQUFULENBQW9CLElBQXBCLEVBQTBCLEdBQTFCLEVBQStCLEtBQS9CLEVBQXNDLElBQXRDLEVBQTRDLEdBQTVDLEVBQWlEO0FBQ3ZELE1BQUksTUFBTSw0QkFBTixDQURtRDs7QUFHdkQsTUFBSSxJQUFKLEVBQVUsSUFBSSxNQUFKLENBQVcsTUFBWCxFQUFWO0FBQ0EsTUFBSSxHQUFKLEVBQVMsSUFBSSxNQUFKLENBQVcsS0FBWCxFQUFUO0FBQ0EsTUFBSSxLQUFKLEVBQVcsSUFBSSxNQUFKLENBQVcsT0FBWCxFQUFYO0FBQ0EsTUFBSSxJQUFKLEVBQVUsSUFBSSxNQUFKLENBQVcsTUFBWCxFQUFWO0FBQ0EsTUFBSSxHQUFKLEVBQVMsSUFBSSxNQUFKLENBQVcsR0FBWCxFQUFUOztBQUVBLFNBQU8sSUFBSSxRQUFKLENBQWEsR0FBYixDQUFQLENBVHVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRHhELEtBQU0sZUFBZTtBQUNwQixRQUFNLFNBQU47QUFDQSxRQUFNLE1BQU47QUFDQSxhQUFXLElBQVg7QUFDQSxjQUFZLElBQVo7QUFDQSxZQUFVLElBQVY7QUFDQSxhQUFXLEtBQVg7QUFDQSxjQUFZLElBQVo7QUFDQSxjQUFZLElBQVo7QUFDQSxXQUFTLElBQVQ7RUFUSzs7QUFZTixLQUFNLGVBQWU7QUFDcEIsUUFBTSxTQUFOO0FBQ0EsUUFBTSxNQUFOO0FBQ0EsY0FBWSxJQUFaO0FBQ0EsV0FBUyxJQUFUO0FBQ0EsU0FBTztBQUNOLFNBQU0sTUFBTjtHQUREO0FBR0EsZUFBYSxJQUFiO0FBQ0EsYUFBVztBQUNWLE9BQUksbUJBQUo7QUFDQSxTQUFNLE9BQU47QUFDQSxTQUFNLEVBQU47R0FIRDs7QUFNQSxTQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUDtBQUNBLE9BQUssQ0FBQyxHQUFELEVBQU0sR0FBTixDQUFMO0VBaEJLOztLQW1CQTtBQUNMLFdBREssS0FDTCxHQUFzRDtPQUExQywyREFBSyxpQkFBRSxRQUFGLENBQVcsR0FBWCxpQkFBcUM7T0FBcEIsK0RBQVMsa0JBQVc7T0FBUCxxQkFBTzs7eUJBRGpELE9BQ2lEOztBQUNyRCxRQUFLLEVBQUwsR0FBVSxFQUFWLENBRHFEOztBQUdyRCxRQUFLLEtBQUwsR0FBYSxFQUFiLENBSHFEO0FBSXJELFFBQUssS0FBTCxHQUFhLEVBQWIsQ0FKcUQ7O0FBTXJELFFBQUssU0FBTCxHQUFpQixJQUFqQixDQU5xRDtBQU9yRCxRQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FQcUQ7O0FBU3JELG1CQUFNLFVBQU4sQ0FBaUIsT0FBTyxTQUFQLEVBQWtCLE9BQW5DLEVBQTRDLFlBQTVDLEVBVHFEO0FBVXJELG1CQUFNLFVBQU4sQ0FBaUIsT0FBTyxTQUFQLEVBQWtCLE9BQW5DLEVBQTRDLFlBQTVDOztBQVZxRCxPQVlyRCxDQUFLLE9BQUwsR0FBZSxFQUFmLENBWnFEO0FBYXJELE9BQUksWUFBWSxnQkFBTSxJQUFOLENBQVcsZUFBSyxTQUFMLENBQXZCO09BQXdDLGVBQTVDO09BQW9ELHFCQUFwRCxDQWJxRDs7Ozs7O0FBY3JELHlCQUFpQixVQUFVLE9BQVYsNEJBQWpCLG9HQUFzQztTQUE3QixtQkFBNkI7O0FBQ3JDLG9CQUFlLEtBQUssQ0FBTCxFQUFRLFNBQVIsQ0FBa0IsV0FBbEIsQ0FEc0I7QUFFckMsU0FBSSxZQUFKLEVBQWtCO0FBQ2pCLGVBQVMsaUJBQU8sU0FBUCxDQUFpQixZQUFqQixFQUErQixJQUEvQixDQUFULENBRGlCO0FBRWpCLFdBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsTUFBbEIsRUFGaUI7TUFBbEI7QUFJQSxvQkFBZSxLQUFLLENBQUwsRUFBUSxTQUFSLENBQWtCLFNBQWxCLENBTnNCO0FBT3JDLFNBQUksWUFBSixFQUFrQjtBQUNqQixlQUFTLGlCQUFPLFNBQVAsQ0FBaUIsWUFBakIsRUFBK0IsS0FBL0IsQ0FBVCxDQURpQjtBQUVqQixXQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLE1BQWxCLEVBRmlCO01BQWxCO0tBUEQ7Ozs7Ozs7Ozs7Ozs7O0lBZHFEOztBQTJCckQsVUFBTyxPQUFPLFNBQVAsQ0EzQjhDO0FBNEJyRCxVQUFPLE9BQU8sU0FBUCxDQTVCOEM7QUE2QnJELG1CQUFNLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUE3QnFEO0FBOEJyRCxRQUFLLElBQUwsR0FBWSxJQUFaLENBOUJxRDtBQStCckQsT0FBSSxLQUFKLEVBQ0MsS0FBSyxTQUFMLENBQWUsS0FBZixFQUREO0dBL0JEOztlQURLOzs7Ozs7OzJCQW1ERyxRQUE2QztRQUFyQywrREFBUyxLQUFLLGNBQUwsa0JBQTRCO1FBQUwsbUJBQUs7O0FBQ3BELFFBQUksWUFBWSxNQUFNLFVBQU4sQ0FBaUIsTUFBakIsaUJBQVosQ0FEZ0Q7QUFFcEQsUUFBSSxPQUFPLElBQUksU0FBSixDQUFjLElBQWQsRUFBb0IsTUFBcEIsQ0FBUCxDQUZnRDs7QUFJcEQsUUFBSSxNQUFKLEVBQ0MsTUFBTSxRQUFOLENBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixHQUE3QixFQURELEtBRUs7QUFDSixVQUFLLElBQUwsR0FBWSxJQUFaLENBREk7QUFFSixVQUFLLElBQUwsQ0FBVSxJQUFWLENBQWUsTUFBZixFQUF1QixNQUF2QixFQUZJO0tBRkw7O0FBT0EsU0FBSyxLQUFMLENBQVcsS0FBSyxFQUFMLENBQVgsR0FBc0IsSUFBdEIsQ0FYb0Q7QUFZcEQsV0FBTyxJQUFQLENBWm9EOzs7OzJCQWU3QyxRQUFrRDtRQUExQywrREFBUyxLQUFLLGNBQUwsa0JBQWlDO1FBQVYsb0JBQVU7UUFBSixrQkFBSTs7QUFDekQsUUFBSSxZQUFZLE1BQU0sVUFBTixDQUFpQixNQUFqQixpQkFBWixDQURxRDtBQUV6RCxRQUFJLE9BQU8sSUFBSSxTQUFKLENBQWMsSUFBZCxFQUFvQixNQUFwQixFQUE0QixJQUE1QixFQUFrQyxFQUFsQyxDQUFQLENBRnFEOztBQUl6RCxVQUFNLFFBQU4sQ0FBZSxNQUFmLEVBQXVCLElBQXZCLEVBSnlEO0FBS3pELFNBQUssS0FBTCxDQUFXLEtBQUssRUFBTCxDQUFYLEdBQXNCLElBQXRCLENBTHlEO0FBTXpELFdBQU8sSUFBUCxDQU55RDs7Ozs2QkFzQmhELE9BQXVDOzs7UUFBaEMsK0RBQVMsS0FBSyxjQUFMLGtCQUF1Qjs7QUFDaEQsUUFBSSxRQUFRLE1BQU0sS0FBTixDQURvQztBQUVoRCxRQUFJLFFBQVEsTUFBTSxLQUFOLENBRm9DO0FBR2hELFdBQU8sTUFBTSxLQUFOLENBSHlDO0FBSWhELFdBQU8sTUFBTSxLQUFOLENBSnlDOztBQU1oRCxRQUFJLE9BQU8sS0FBSyxPQUFMLENBQWEsS0FBYixFQUFvQixNQUFwQixDQUFQLENBTjRDO0FBT2hELFFBQUksS0FBSixFQUFXO0FBQ1Ysc0JBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsVUFBQyxLQUFELEVBQVc7QUFDM0IsWUFBSyxTQUFMLENBQWUsS0FBZixFQUFzQixJQUF0QixFQUQyQjtNQUFYLENBQWpCLENBRFU7S0FBWDtBQUtBLFFBQUksS0FBSixFQUFXO0FBQ1Ysc0JBQUUsT0FBRixDQUFVLEtBQVYsRUFBaUIsVUFBQyxJQUFELEVBQVU7QUFDMUIsVUFBSSxhQUFKO1VBQVUsV0FBVixDQUQwQjtBQUUxQixVQUFJLEtBQUssSUFBTCxFQUNILE9BQU8sTUFBSyxLQUFMLENBQVcsS0FBSyxJQUFMLENBQWxCLENBREQ7QUFFQSxVQUFJLEtBQUssRUFBTCxFQUNILEtBQUssTUFBSyxLQUFMLENBQVcsS0FBSyxFQUFMLENBQWhCLENBREQ7QUFFQSxZQUFLLE9BQUwsQ0FBYSxJQUFiLEVBQW1CLElBQW5CLEVBQXlCLElBQXpCLEVBQStCLEVBQS9CLEVBTjBCO01BQVYsQ0FBakIsQ0FEVTtLQUFYOzs7O29DQVlnQjtBQUNoQixXQUFPLEtBQUssSUFBTCxDQURTOzs7OzJCQUlUOzs7NkJBQ0U7Ozs4QkFqRlEsUUFBUSxjQUFjO0FBQ3ZDLFFBQUksVUFBVSxJQUFWLENBRG1DO0FBRXZDLFFBQUksVUFBVSxPQUFPLElBQVAsRUFBYTs7QUFFMUIsU0FBSSxPQUFPLGdCQUFNLElBQU4sQ0FBVyxhQUFhLFNBQWIsRUFBd0IsT0FBTyxJQUFQLENBQTFDLENBRnNCO0FBRzFCLFNBQUksSUFBSixFQUNDLFVBQVUsS0FBSyxPQUFMLENBRFg7S0FIRDs7QUFPQSxXQUFPLGdCQUFNLGNBQU4sQ0FBcUIsT0FBckIsRUFBOEIsWUFBOUIsQ0FBUCxDQVR1Qzs7Ozs0QkF1Q3hCLFFBQVEsT0FBTztBQUM5QixRQUFJLENBQUMsT0FBTyxRQUFQLEVBQ0osT0FBTyxRQUFQLEdBQWtCLEVBQWxCLENBREQ7O0FBR0EsUUFBSSxNQUFNLE1BQU4sSUFBZ0IsTUFBaEIsRUFBd0I7QUFDM0IsWUFBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLEtBQXJCLEVBRDJCOztBQUczQixTQUFJLE1BQU0sTUFBTixJQUFnQixNQUFNLE1BQU4sQ0FBYSxRQUFiLEVBQ25CLE1BQU0sTUFBTixDQUFhLFFBQWIsR0FBd0IsaUJBQUUsT0FBRixDQUFVLE1BQU0sTUFBTixDQUFhLFFBQWIsRUFBdUIsS0FBakMsQ0FBeEIsQ0FERDtLQUhEO0FBTUEsVUFBTSxNQUFOLEdBQWUsTUFBZixDQVY4Qjs7OztTQTNFMUI7OztBQXdITixPQUFNLFFBQU4sR0FBaUI7QUFDaEIsc0JBQW9CLElBQXBCO0FBQ0EsZ0JBQWMsS0FBZDtBQUNBLFlBQVUsS0FBVjtBQUNBLFlBQVUsS0FBVjtFQUpEOzttQkFPZSxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NoS1Q7OztBQUNMLFdBREssSUFDTCxDQUFZLEtBQVosRUFBZ0M7T0FBYiwrREFBUyxrQkFBSTs7eUJBRDNCLE1BQzJCOztBQUMvQixPQUFJLENBQUMsT0FBTyxFQUFQLEVBQVcsT0FBTyxFQUFQLEdBQVksaUJBQUUsUUFBRixDQUFXLEdBQVgsQ0FBWixDQUFoQjs7c0VBRkksaUJBR0UsT0FBTyxTQUZrQjs7QUFJL0IsU0FBSyxPQUFMLEdBQWUsRUFBZixDQUorQjtBQUsvQixTQUFLLFFBQUwsR0FBZ0IsRUFBaEIsQ0FMK0I7QUFNL0IsU0FBSyxLQUFMLEdBQWEsSUFBYixDQU4rQjtBQU8vQixTQUFLLE1BQUwsR0FBYyxJQUFkLENBUCtCOztHQUFoQzs7ZUFESzs7OEJBV00sR0FBRzs7QUFFYixRQUFJLE9BQU8sRUFBRSxNQUFGLENBRkU7QUFHYixXQUFPLElBQVAsRUFBYTtBQUNaLFNBQUksUUFBUSxJQUFSLEVBQWM7QUFBRSxhQUFPLElBQVAsQ0FBRjtNQUFsQixDQURZO0FBRVosWUFBTyxLQUFLLE1BQUwsQ0FGSztLQUFiO0FBSUEsV0FBTyxLQUFQLENBUGE7Ozs7OEJBVUgsTUFBTTtBQUNoQixRQUFJLFFBQVEsS0FBSyxNQUFMLElBQWUsSUFBZixHQUFzQixLQUFLLFFBQUwsR0FBZ0IsS0FBSyxPQUFMLENBRGxDO0FBRWhCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3RDLFNBQUksUUFBUSxNQUFNLENBQU4sQ0FBUixFQUFrQjtBQUNyQixZQUFNLE1BQU4sQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBRHFCO0FBRXJCLFlBRnFCO01BQXRCO0tBREQ7Ozs7Ozs7NkJBU1MsTUFBTSxLQUFLO0FBQ3BCLFFBQUksT0FBTyxJQUFQLElBQWUsUUFBUSxTQUFSLEVBQ2xCLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsSUFBbEIsRUFERCxLQUdDLEtBQUssT0FBTCxDQUFhLE1BQWIsQ0FBb0IsR0FBcEIsRUFBeUIsQ0FBekIsRUFBNEIsSUFBNUIsRUFIRDs7Ozs7Ozs4QkFPVSxNQUFNLEtBQUs7QUFDckIsUUFBSSxPQUFPLElBQVAsSUFBZSxRQUFRLFNBQVIsSUFBcUIsTUFBTSxLQUFLLE1BQUwsR0FBYyxDQUFkLEVBQzdDLEtBQUssUUFBTCxDQUFjLElBQWQsQ0FBbUIsSUFBbkIsRUFERCxLQUdDLEtBQUssUUFBTCxDQUFjLE1BQWQsQ0FBcUIsR0FBckIsRUFBMEIsQ0FBMUIsRUFBNkIsSUFBN0IsRUFIRDs7OztrQ0FNYyxNQUFNOzs7QUFDcEIsUUFBSSxLQUFLLFFBQUwsRUFBZTs7QUFDbEIsVUFBSSxNQUFNLDRCQUFOO0FBQ0osdUJBQUUsT0FBRixDQUFVLE9BQUssUUFBTCxFQUFlLFVBQUMsS0FBRCxFQUFXO0FBQ25DLFdBQUksTUFBSixDQUFXLE1BQU0sTUFBTixDQUFhLElBQWIsQ0FBWCxFQURtQztPQUFYLENBQXpCO0FBR0E7VUFBTyxJQUFJLFFBQUo7T0FBUDtTQUxrQjs7O0tBQW5CO0FBT0EsV0FBTyxFQUFQLENBUm9COzs7OzJCQVdiLEtBQStCO1FBQTFCLGlFQUFXLHNCQUFlO1FBQVAscUJBQU87O0FBQ3RDLFFBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxHQUFkLENBQVI7UUFBNEIsV0FBaEMsQ0FEc0M7QUFFdEMsUUFBSSxZQUFZLE1BQVosRUFBb0I7QUFDdkIsVUFBSyxNQUFNLFlBQU4sQ0FBbUIsS0FBbkIsQ0FBTCxDQUR1QjtBQUV2QixZQUFPLEVBQVAsQ0FGdUI7S0FBeEI7QUFJQSxXQUFPLElBQVAsQ0FOc0M7Ozs7OEJBUzVCO0FBQ1YsUUFBSSxRQUFRLEtBQUssSUFBTCxDQUFVLE9BQVYsSUFBcUIsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFyQixHQUEwQyxXQUExQyxDQURGO0FBRVYsUUFBSSxpQkFBRSxPQUFGLENBQVUsS0FBVixDQUFKLEVBQ0MsUUFBUSxNQUFNLENBQU4sQ0FBUixDQUREO0FBRUEsV0FBTyxjQUFjLEtBQUssRUFBTCxHQUFVLFNBQXhCLEdBQW9DLEtBQXBDLEdBQTRDLFFBQTVDLEdBQXVELEtBQUssS0FBTCxDQUFXLFdBQVgsQ0FBdUIsUUFBdkIsR0FBa0MsR0FBekYsQ0FKRzs7OztTQW5FTjs7O0FBMEVOLE1BQUssU0FBTCxHQUFpQixPQUFqQjs7bUJBRWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDckVNO0FBQ3BCLFdBRG9CLE9BQ3BCLENBQVksS0FBWixFQUFnRDtPQUE3QiwrREFBUyxFQUFDLElBQUksaUJBQUUsUUFBRixFQUFKLGtCQUFtQjs7eUJBRDVCLFNBQzRCOztBQUMvQyxRQUFLLEtBQUwsR0FBYSxLQUFiLENBRCtDO0FBRS9DLFFBQUssRUFBTCxHQUFVLE9BQU8sRUFBUCxDQUZxQztBQUcvQyxVQUFPLE9BQU8sRUFBUDs7O0FBSHdDLE9BTTNDLE9BQU8sVUFBUCxFQUFtQjtBQUN0QixTQUFLLGdCQUFMLENBQXNCLE9BQU8sVUFBUCxDQUF0QixDQURzQjtBQUV0QixXQUFPLE9BQU8sVUFBUCxDQUZlO0lBQXZCOzs7QUFOK0MsT0FZM0MsT0FBTyxLQUFQLEVBQWM7QUFDakIsU0FBSyxTQUFMLEdBQWlCLE9BQU8sS0FBUCxDQURBO0FBRWpCLFdBQU8sT0FBTyxLQUFQLENBRlU7SUFBbEI7OztBQVorQyxPQWtCM0MsT0FBTyxPQUFPLElBQVAsSUFBZSxTQUFmLENBbEJvQztBQW1CL0MsVUFBTyxnQkFBTSxJQUFOLENBQVcsS0FBSyxXQUFMLENBQWlCLFNBQWpCLEVBQTRCLElBQXZDLENBQVAsQ0FuQitDO0FBb0IvQyxPQUFJLENBQUMsSUFBRCxFQUNILE1BQU0sSUFBSSxLQUFKLENBQVUsb0JBQW9CLE9BQU8sSUFBUCxDQUFwQyxDQUREO0FBRUEsVUFBTyxPQUFPLElBQVAsQ0F0QndDO0FBdUIvQyxRQUFLLEtBQUwsR0FBYSxJQUFJLElBQUosQ0FBUyxNQUFULENBQWIsQ0F2QitDO0dBQWhEOztlQURvQjs7d0JBMkJmLE1BQU0sT0FBTztBQUNqQixRQUFJLGlCQUFFLFdBQUYsQ0FBYyxLQUFkLENBQUosRUFDQyxPQUFPLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBUCxDQUREO0FBRUEsU0FBSyxLQUFMLENBQVcsSUFBWCxJQUFtQixLQUFuQixDQUhpQjs7Ozs7Ozs7Ozs7Ozs4QkFhcUI7UUFBOUIsNERBQU0seUJBQXdCO1FBQWIsb0JBQWE7UUFBUCxxQkFBTzs7QUFDdEMsUUFBSSxpQkFBRSxXQUFGLENBQWMsS0FBZCxDQUFKLEVBQTBCO0FBQ3pCLFNBQUksT0FBTyxTQUFQLEVBQ0gsT0FBTyxLQUFLLElBQUwsQ0FBVSxJQUFWLEVBQWdCLEtBQWhCLENBQVAsQ0FERDtBQUVBLFlBQU8sS0FBSyxTQUFMLENBQWUsR0FBZixFQUFvQixJQUFwQixDQUFQLENBSHlCO0tBQTFCO0FBS0EsUUFBSSxPQUFPLFNBQVAsRUFBa0I7QUFDckIsVUFBSyxJQUFMLENBQVUsSUFBVixFQUFnQixLQUFoQixFQURxQjtLQUF0QixNQUVPO0FBQ04sU0FBSSxDQUFDLEtBQUssU0FBTCxDQUFlLEdBQWYsQ0FBRCxFQUNILEtBQUssU0FBTCxDQUFlLEdBQWYsSUFBc0IsRUFBdEIsQ0FERDtBQUVBLFVBQUssU0FBTCxDQUFlLEdBQWYsRUFBb0IsSUFBcEIsSUFBNEIsS0FBNUIsQ0FITTtLQUZQOzs7O29DQVNnQixZQUFZOzs7Ozs7Ozs7MkJBTXJCLEtBQUs7QUFDWixRQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxDQUFSLENBRFE7QUFFWixXQUFPLGlCQUFFLE1BQUYsQ0FBUztBQUNmLFNBQUksS0FBSyxFQUFMO0FBQ0osVUFBSyxHQUFMO0FBQ0EsZ0JBQVcsS0FBSyxpQkFBTDtBQUNYLGdCQUFXLEtBQUssU0FBTDtBQUNYLFlBQU8sS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixPQUFuQixLQUErQixHQUEvQjtLQUxELEVBTUosS0FOSSxDQUFQLENBRlk7Ozs7NEJBV0osS0FBSztBQUNiLFFBQUksUUFBUSxnQkFBTSxHQUFOLENBQVUsS0FBSyxFQUFMLEdBQVUsUUFBVixFQUFvQixHQUE5QixDQUFSLENBRFM7QUFFYixRQUFJLEtBQUosRUFBVyxPQUFPLEtBQVAsQ0FBWDs7QUFFQSxRQUFJLGNBQWMsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixPQUFuQixDQUFkLENBSlM7QUFLYixRQUFJLGFBQWEsY0FBYyxnQkFBTSxRQUFOLENBQWUsWUFBWSxJQUFaLENBQTdCLEdBQWlELGdCQUFNLFFBQU4sQ0FBZSxXQUFmLENBQWpELENBTEo7QUFNYixRQUFJLElBQUksS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixHQUFuQixDQUFKLENBTlM7QUFPYixRQUFJLElBQUksS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixHQUFuQixDQUFKLENBUFM7QUFRYixRQUFJLFFBQVEsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixPQUFuQixDQUFSLENBUlM7QUFTYixRQUFJLFNBQVMsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixRQUFuQixDQUFULENBVFM7QUFVYixZQUFRLElBQUksVUFBSixDQUFlLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUIsS0FBckIsRUFBNEIsTUFBNUIsRUFBb0MsV0FBcEMsQ0FBUixDQVZhO0FBV2Isb0JBQU0sR0FBTixDQUFVLEtBQUssRUFBTCxHQUFVLFFBQVYsRUFBb0IsS0FBOUIsRUFBcUMsR0FBckMsRUFYYTtBQVliLFdBQU8sS0FBUCxDQVphOzs7OzBCQWVQLE1BQU07QUFDWixRQUFJLFdBQVcsZ0JBQU0sR0FBTixDQUFVLEtBQUssRUFBTCxHQUFVLFdBQVYsRUFBdUIsS0FBSyxFQUFMLENBQTVDLENBRFE7QUFFWixRQUFJLENBQUMsUUFBRCxFQUFXOztBQUVkLFNBQUksT0FBTyxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQVAsQ0FGVTtBQUdkLGdCQUFXLEtBQUssV0FBTCxDQUFpQixNQUFNLElBQU4sRUFBWSxJQUE3QixFQUFtQyxJQUFuQyxDQUFYLENBSGM7QUFJZCxTQUFJLGlCQUFFLFFBQUYsQ0FBVyxRQUFYLENBQUosRUFDQyxXQUFXLGlCQUFFLFFBQUYsQ0FBVyxRQUFYLENBQVgsQ0FERDtBQUVBLHFCQUFNLEdBQU4sQ0FBVSxLQUFLLEVBQUwsR0FBVSxXQUFWLEVBQXVCLFFBQWpDLEVBQTJDLEtBQUssRUFBTCxDQUEzQyxDQU5jO0tBQWY7QUFRQSxXQUFPLFNBQVMsS0FBSyxPQUFMLENBQWEsS0FBSyxFQUFMLENBQXRCLENBQVAsQ0FWWTs7OzsrQkFhRCxNQUFNO0FBQ2pCLFFBQUksUUFBUSxLQUFLLFFBQUwsQ0FBYyxLQUFLLEVBQUwsQ0FBdEIsQ0FEYTtBQUVqQixRQUFJLEtBQUosRUFDQyxPQUFPLE1BQU0sTUFBTixDQUFhLElBQWIsQ0FBUCxDQUREO0FBRUEsV0FBTyxFQUFQLENBSmlCOzs7OytCQU9OLE1BQU07QUFDakIsUUFBSSxRQUFRLEtBQUssS0FBTCxDQUFXLGNBQVgsRUFBUixFQUNILE9BQU8sSUFBUCxDQUREO0FBRUEsUUFBSSxNQUFNLEtBQUssV0FBTCxDQUFpQixLQUFLLEVBQUwsQ0FBdkIsQ0FIYTtBQUlqQixRQUFJLEdBQUosRUFDQyxPQUFPLEtBQUssV0FBTCxDQUFpQixHQUFqQixDQUFQLENBREQ7QUFFQSxXQUFPLEVBQVAsQ0FOaUI7Ozs7K0JBU04sS0FBSztBQUNoQixRQUFJLE1BQU0sZ0JBQU0sR0FBTixDQUFVLEtBQUssRUFBTCxHQUFVLFdBQVYsRUFBdUIsR0FBakMsQ0FBTixDQURZO0FBRWhCLFFBQUksR0FBSixFQUFTLE9BQU8sR0FBUCxDQUFUO0FBQ0EsUUFBSSxRQUFRLEtBQUssUUFBTCxDQUFjLEdBQWQsQ0FBUjs7QUFIWSxPQUtoQixHQUFNLGdCQUFNLFdBQU4sQ0FBa0IsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFsQixFQUFzQyxNQUFNLEtBQU4sRUFBYSxNQUFNLE1BQU4sRUFBYyxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLGFBQW5CLENBQWpFLENBQU4sQ0FMZ0I7QUFNaEIsb0JBQU0sR0FBTixDQUFVLEtBQUssRUFBTCxHQUFVLFdBQVYsRUFBdUIsR0FBakMsRUFBc0MsR0FBdEMsRUFOZ0I7QUFPaEIsV0FBTyxHQUFQLENBUGdCOzs7OzZCQWdDUDtBQUNULFdBQU8sS0FBSyxLQUFMLENBREU7QUFFVCxXQUFPLEtBQUssVUFBTCxDQUZFO0FBR1QsV0FBTyxLQUFLLEtBQUwsQ0FIRTtBQUlULFdBQU8sS0FBSyxTQUFMLENBSkU7QUFLVCxTQUFLLFNBQUwsR0FBaUIsSUFBakIsQ0FMUzs7Ozt1QkF0QmM7QUFDdkIsUUFBSSxDQUFDLEtBQUssa0JBQUwsRUFBeUI7QUFDN0IsU0FBSSxNQUFNLDJCQUFpQixLQUFLLElBQUwsQ0FBVSxNQUFWLENBQWpCLENBQU4sQ0FEeUI7QUFFN0IsU0FBSSxRQUFRLEtBQUssS0FBTCxDQUZpQjtBQUc3QixTQUFJLE1BQU0sY0FBTixDQUFxQixXQUFyQixDQUFKLEVBQ0MsSUFBSSxNQUFKLENBQVcsTUFBTSxXQUFOLENBQVgsRUFERDtBQUVBLGFBQVEsTUFBTSxXQUFOLENBQWtCLFNBQWxCLENBTHFCO0FBTTdCLFlBQU8sS0FBUCxFQUFjO0FBQ2IsVUFBSSxNQUFNLGNBQU4sQ0FBcUIsV0FBckIsQ0FBSixFQUNDLElBQUksTUFBSixDQUFXLE1BQU0sV0FBTixDQUFYLEVBREQ7QUFFQSxjQUFRLE9BQU8sY0FBUCxDQUFzQixLQUF0QixDQUFSLENBSGE7TUFBZDtBQUtBLFVBQUssa0JBQUwsR0FBMEIsSUFBSSxRQUFKLENBQWEsR0FBYixDQUExQixDQVg2QjtLQUE5QjtBQWFBLFdBQU8sS0FBSyxrQkFBTCxDQWRnQjs7Ozt1QkFpQlI7QUFDZixRQUFJLFFBQVEsS0FBSyxLQUFMLENBQVcsY0FBWCxFQUFSLEVBQXFDLE9BQU8sRUFBUCxDQUF6QztBQUNBLFdBQU8sVUFBVSxLQUFLLElBQUwsQ0FBVSxNQUFWLENBQVYsQ0FGUTs7OztTQS9JSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ByQixLQUFJLFNBQVMsRUFBVDs7QUFFSixLQUFJLFFBQVE7QUFDWCxPQUFLLGFBQVMsR0FBVCxFQUFjLFNBQWQsRUFBeUI7QUFDN0IsVUFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCLENBQVAsQ0FENkI7R0FBekI7O0FBSUwsT0FBSyxhQUFTLEdBQVQsRUFBYyxLQUFkLEVBQXFCLFNBQXJCLEVBQWdDO0FBQ3BDLFFBQUssUUFBTCxDQUFjLFNBQWQsRUFBeUIsR0FBekIsSUFBZ0MsS0FBaEMsQ0FEb0M7R0FBaEM7O0FBSUwsWUFBVSxrQkFBUyxHQUFULEVBQWMsU0FBZCxFQUF5QjtBQUNsQyxVQUFPLE9BQU8sS0FBSyxRQUFMLENBQWMsU0FBZCxDQUFQLENBRDJCO0dBQXpCOztBQUlWLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLFNBQWQsRUFBeUI7QUFDaEMsVUFBTyxLQUFLLFFBQUwsQ0FBYyxTQUFkLEVBQXlCLEdBQXpCLENBQVAsQ0FEZ0M7R0FBekI7O0FBSVIsU0FBTyxlQUFTLFNBQVQsRUFBb0I7QUFDMUIsT0FBSSxDQUFDLFNBQUQsRUFDSCxTQUFTLEVBQVQsQ0FERCxLQUVLLElBQUksT0FBTyxTQUFQLENBQUosRUFDSixPQUFPLFNBQVAsSUFBb0IsRUFBcEIsQ0FESTtHQUhDOztBQU9QLFlBQVUsb0JBQWdDO09BQXZCLGtFQUFZLHlCQUFXOztBQUN6QyxPQUFJLENBQUMsT0FBTyxTQUFQLENBQUQsRUFDSCxPQUFPLFNBQVAsSUFBb0IsRUFBcEIsQ0FERDtBQUVBLFVBQU8sT0FBTyxTQUFQLENBQVAsQ0FIeUM7R0FBaEM7RUF4QlA7O21CQStCVyxNOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCZixLQUFNLFlBQVksQ0FBWjtLQUFlLGNBQWMsQ0FBZDtLQUFpQixpQkFBaUIsQ0FBakI7S0FBb0IsY0FBYyxDQUFkOztBQUUxRCxLQUFJLGdCQUFnQjtBQUNuQixZQUFVLEVBQVY7QUFDQSxjQUFZLE9BQVo7QUFDQSxhQUFXLENBQVg7QUFDQSxXQUFTLENBQVQ7QUFDQSxlQUFhLENBQWI7QUFDQSxTQUFPLE1BQVA7QUFDQSxTQUFPLENBQVA7QUFDQSxVQUFRLENBQVI7QUFDQSxZQUFVLElBQVY7QUFDQSxZQUFVLEVBQUMsR0FBRyxDQUFILEVBQU0sR0FBRyxDQUFILEVBQU0sU0FBUyxDQUFULEVBQVksU0FBUyxDQUFULEVBQVksU0FBUyxDQUFULEVBQS9DO0VBVkc7Ozs7OzttQkFnQlcsWUFBWTtBQUMxQixNQUFJLGtCQUFrQixLQUFsQjtNQUF5QixrQkFBa0IsSUFBbEI7Ozs7O0FBREgsTUFNdEIsZ0JBQWdCLGlCQUFFLE9BQUYsQ0FBVSxVQUFTLEdBQVQsRUFBYyxRQUFkLEVBQXdCLFVBQXhCLEVBQW9DLElBQXBDLEVBQTBDO0FBQ3ZFLE9BQUksQ0FBQyxHQUFELElBQVEsT0FBTyxFQUFQLEVBQ1gsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVAsQ0FERDs7QUFHQSxjQUFXLFlBQVksRUFBWixDQUo0RDtBQUt2RSxnQkFBYSxjQUFjLGlCQUFkLENBTDBEO0FBTXZFLFVBQU8sQ0FBQyxpQkFBRSxXQUFGLENBQWMsSUFBZCxDQUFELEdBQXVCLElBQXZCLEdBQTZCLEtBQTdCLENBTmdFOztBQVF2RSxPQUFJLElBQUosQ0FSdUU7O0FBVXZFLE9BQUksaUJBQUUsTUFBRixDQUFTLGVBQVQsQ0FBSixFQUErQjtBQUM5QixzQkFBa0IsbUJBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFsQixDQUQ4QjtBQUU5QixzQkFBa0IsQ0FBQyxFQUFFLGdCQUFnQixVQUFoQixJQUE4QixnQkFBZ0IsVUFBaEIsQ0FBMkIsSUFBM0IsQ0FBOUIsQ0FBRixDQUZXO0lBQS9COztBQUtBLE9BQUksZUFBSixFQUFxQjtBQUNwQixvQkFBTSxHQUFOLENBQVUsT0FBVixFQUFtQixjQUFuQixFQURvQjtBQUVwQixRQUFJLE1BQU0sZ0JBQWdCLFVBQWhCLENBQTJCLElBQTNCLENBQU4sQ0FGZ0I7QUFHcEIsUUFBSSxJQUFKLEdBQVcsV0FBVyxHQUFYLEdBQWlCLFVBQWpCLEdBQThCLEdBQTlCLElBQXFDLE9BQU8sTUFBUCxHQUFnQixRQUFoQixDQUFyQyxDQUhTO0FBSXBCLFFBQUksVUFBVSxJQUFJLFdBQUosQ0FBZ0IsR0FBaEIsQ0FBVixDQUpnQjtBQUtwQixXQUFPLENBQUMsUUFBUSxLQUFSLEVBQWUsRUFBaEIsQ0FBUCxDQUxvQjtJQUFyQixNQU1POztBQUVOLFFBQUksQ0FBQyxlQUFELEVBQWtCO0FBQ3JCLHVCQUFrQixtQkFBUyxhQUFULENBQXVCLFFBQXZCLEVBQWlDLEVBQUMsSUFBRyxzQkFBSCxFQUFsQyxFQUE4RCxFQUFDLFVBQVMsVUFBVCxFQUFxQixZQUFXLFFBQVgsRUFBcUIsU0FBUSxNQUFSLEVBQWdCLE9BQU0sTUFBTixFQUF6SCxDQUFsQixDQURxQjtBQUVyQixjQUFTLElBQVQsQ0FBYyxXQUFkLENBQTBCLGVBQTFCLEVBRnFCO0FBR3JCLFNBQUksTUFBTSxnQkFBZ0IsYUFBaEIsQ0FBOEIsUUFBOUIsQ0FIVztBQUlyQixTQUFJLElBQUosR0FKcUI7QUFLckIsU0FBSSxLQUFKLENBQVUsOEtBQVYsRUFMcUI7QUFNckIsU0FBSSxLQUFKLEdBTnFCO0tBQXRCO0FBUUEsb0JBQWdCLEtBQWhCLENBQXNCLE9BQXRCLEdBQWdDLEVBQWhDLENBVk07QUFXTixRQUFJLE1BQU0sZ0JBQWdCLGFBQWhCLENBQThCLFFBQTlCLENBQXVDLGNBQXZDLENBQXNELGtCQUF0RCxDQUFOLENBWEU7QUFZTixRQUFJLEtBQUosQ0FBVSxRQUFWLEdBQXFCLFFBQXJCLENBWk07QUFhTixRQUFJLEtBQUosQ0FBVSxVQUFWLEdBQXVCLFVBQXZCLENBYk07QUFjTixRQUFJLEtBQUosQ0FBVSxVQUFWLEdBQXVCLE9BQU8sTUFBUCxHQUFnQixRQUFoQixDQWRqQjtBQWVOLFFBQUksS0FBSixDQUFVLE9BQVYsR0FBb0IsQ0FBcEIsQ0FmTTtBQWdCTixRQUFJLEtBQUosQ0FBVSxLQUFWLEdBQWtCLE1BQWxCLENBaEJNO0FBaUJOLFFBQUksU0FBSixHQUFnQixHQUFoQixDQWpCTTs7QUFtQk4sV0FBTyxDQUFDLElBQUksV0FBSixFQUFpQixJQUFJLFlBQUosQ0FBekIsQ0FuQk07QUFvQk4sb0JBQWdCLEtBQWhCLENBQXNCLE9BQXRCLEdBQWdDLE1BQWhDLENBcEJNO0lBTlA7QUE0QkEsVUFBTyxJQUFQLENBM0N1RTtHQUExQyxFQTRDM0IsVUFBUyxHQUFULEVBQWMsUUFBZCxFQUF3QixVQUF4QixFQUFvQyxJQUFwQyxFQUEwQztBQUFFLFVBQU8sTUFBTSxHQUFOLEdBQVksUUFBWixHQUF1QixHQUF2QixHQUE2QixVQUE3QixHQUEwQyxHQUExQyxHQUFnRCxJQUFoRCxDQUFUO0dBQTFDLENBNUNDOzs7Ozs7Ozs7O0FBTnNCLE1BNER0QixPQUFPLGlCQUFFLE9BQUYsQ0FBVSxVQUFTLE1BQVQsRUFBaUIsUUFBakIsRUFBMkIsUUFBM0IsRUFBcUMsVUFBckMsRUFBaUQsSUFBakQsRUFBdUQ7QUFDM0UsY0FBVyxZQUFZLENBQVosQ0FEZ0U7QUFFM0UsY0FBVyxZQUFZLEVBQVosQ0FGZ0U7QUFHM0UsZ0JBQWEsY0FBYyxpQkFBZCxDQUg4RDtBQUkzRSxVQUFPLENBQUMsaUJBQUUsV0FBRixDQUFjLElBQWQsQ0FBRCxHQUF1QixJQUF2QixHQUE2QixLQUE3QixDQUpvRTs7QUFNM0UsT0FBSSxNQUFNLEVBQU4sQ0FOdUU7QUFPM0UsT0FBSSxZQUFZLGNBQWMsUUFBZCxFQUF3QixRQUF4QixFQUFrQyxVQUFsQyxFQUE4QyxJQUE5QyxDQUFaO09BQWlFLFFBQVEsVUFBVSxDQUFWLENBQVIsQ0FQTTtBQVEzRSxPQUFJLFVBQUosR0FBaUIsVUFBVSxDQUFWLENBQWpCLENBUjJFOztBQVUzRSxPQUFJLENBQUMsUUFBRCxJQUFhLENBQUMsTUFBRCxJQUFXLFVBQVUsRUFBVixFQUFjO0FBQ3pDLFFBQUksSUFBSixDQUFTLE1BQVQsRUFEeUM7QUFFekMsUUFBSSxLQUFKLEdBQVksQ0FBRSxNQUFELElBQVcsVUFBVSxFQUFWLEdBQWdCLEtBQTVCLEdBQW9DLGNBQWMsTUFBZCxFQUFzQixRQUF0QixFQUFnQyxVQUFoQyxFQUE0QyxJQUE1QyxFQUFrRCxDQUFsRCxDQUFwQyxDQUY2QjtBQUd6QyxRQUFJLE1BQUosR0FBYSxJQUFJLFVBQUosQ0FINEI7QUFJekMsV0FBTyxHQUFQLENBSnlDO0lBQTFDOztBQU9BLE9BQUksUUFBUSxDQUFSOztBQWpCdUUsT0FtQnZFLFFBQVEsT0FBTyxLQUFQLENBQWEsY0FBYixDQUFSLENBbkJ1RTs7QUFxQjNFLE9BQUksTUFBTSw0QkFBTixDQXJCdUU7O0FBdUIzRSxRQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1Qzs7QUFFdEMsUUFBSSxRQUFRLE1BQU0sQ0FBTixFQUFTLEtBQVQsQ0FBZSxNQUFmLENBQVIsQ0FGa0M7QUFHdEMsUUFBSSxPQUFPLEVBQVA7UUFBVyxlQUFlLENBQWY7UUFBa0IsWUFBWSxDQUFaO1FBQWUsVUFBVSxJQUFWO1FBQWdCLElBQWhFLENBSHNDOztBQUt0QyxTQUFLLElBQUksSUFBSSxDQUFKLEVBQU8sSUFBSSxNQUFNLE1BQU4sRUFBYyxHQUFsQyxFQUF1QztBQUN0QyxZQUFPLE1BQU0sQ0FBTixDQUFQLENBRHNDO0FBRXRDLGlCQUFZLGNBQWMsSUFBZCxFQUFvQixRQUFwQixFQUE4QixVQUE5QixFQUEwQyxJQUExQyxFQUFnRCxDQUFoRCxDQUFaLENBRnNDOztBQUl0QyxTQUFJLENBQUMsVUFBVSxTQUFWLEdBQXNCLGVBQWUsS0FBZixHQUF1QixTQUF2QixDQUF2QixHQUEyRCxRQUEzRCxFQUFxRTtBQUN4RSxVQUFJLE9BQUosRUFBYTtBQUNaLFdBQUksTUFBSixDQUFXLElBQVgsRUFEWTtBQUVaLGVBQVEsS0FBSyxHQUFMLENBQVMsS0FBVCxFQUFnQixTQUFoQixDQUFSLENBRlk7QUFHWixXQUFJLElBQUksTUFBTSxNQUFOLEdBQWUsQ0FBZixFQUFrQjtBQUN6QixZQUFJLElBQUosQ0FBUyxJQUFJLFFBQUosRUFBVCxFQUR5QjtBQUV6QixZQUFJLEtBQUosR0FGeUI7UUFBMUI7T0FIRCxNQU9PO0FBQ04sV0FBSSxJQUFKLENBQVMsSUFBSSxNQUFKLENBQVcsSUFBWCxFQUFpQixRQUFqQixFQUFULEVBRE07QUFFTixlQUFRLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsZUFBZSxLQUFmLEdBQXVCLFNBQXZCLENBQXhCLENBRk07QUFHTixXQUFJLEtBQUosR0FITTtPQVBQO0FBWUEsYUFBTyxFQUFQLENBYndFO0FBY3hFLHFCQUFlLENBQWYsQ0Fkd0U7QUFleEUsVUFBSSxDQUFDLE9BQUQsRUFDSCxJQUREO0FBZndFLGFBaUJ4RSxHQUFVLElBQVYsQ0FqQndFO01BQXpFLE1Ba0JPO0FBQ04sYUFBTyxVQUFVLElBQVYsR0FBaUIsT0FBTyxHQUFQLEdBQWEsSUFBYixDQURsQjtBQUVOLHFCQUFlLFVBQVUsU0FBVixHQUFzQixlQUFlLEtBQWYsR0FBdUIsU0FBdkIsQ0FGL0I7QUFHTixjQUFRLEtBQUssR0FBTCxDQUFTLEtBQVQsRUFBZ0IsWUFBaEIsQ0FBUixDQUhNO0FBSU4sZ0JBQVUsS0FBVixDQUpNO01BbEJQO0tBSkQ7QUE2QkEsUUFBSSxRQUFRLEVBQVIsRUFDSCxJQUFJLE1BQUosQ0FBVyxJQUFYLEVBREQ7QUFFQSxRQUFJLElBQUksTUFBTSxNQUFOLEdBQWUsQ0FBZixFQUFrQjtBQUN6QixTQUFJLElBQUosQ0FBUyxJQUFJLFFBQUosRUFBVCxFQUR5QjtBQUV6QixTQUFJLEtBQUosR0FGeUI7S0FBMUI7SUFwQ0Q7O0FBMENBLE9BQUksSUFBSixDQUFTLElBQUksUUFBSixFQUFULEVBakUyRTtBQWtFM0UsT0FBSSxLQUFKLEdBQVksS0FBWixDQWxFMkU7QUFtRTNFLE9BQUksTUFBSixHQUFhLElBQUksVUFBSixHQUFpQixJQUFJLE1BQUosQ0FuRTZDO0FBb0UzRSxVQUFPLEdBQVAsQ0FwRTJFO0dBQXZELEVBcUVsQixVQUFTLEdBQVQsRUFBYyxRQUFkLEVBQXdCLFFBQXhCLEVBQWtDLFVBQWxDLEVBQThDLElBQTlDLEVBQW9EO0FBQUUsVUFBTyxNQUFNLEdBQU4sR0FBWSxRQUFaLEdBQXVCLEdBQXZCLEdBQTZCLFFBQTdCLEdBQXdDLEdBQXhDLEdBQThDLFVBQTlDLEdBQTJELEdBQTNELEdBQWlFLElBQWpFLENBQVQ7R0FBcEQsQ0FyRUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNURzQixXQWtKakIsV0FBVCxDQUFxQixLQUFyQixFQUE0QixjQUE1QixFQUE0QyxlQUE1QyxFQUErRTtPQUFsQixvRUFBYyxrQkFBSTs7QUFDOUUsaUJBQWMsaUJBQUUsWUFBRixDQUFlLFdBQWYsRUFBNEIsYUFBNUIsQ0FBZCxDQUQ4RTtBQUU5RSxPQUFJLFdBQVcsWUFBWSxRQUFaLENBRitEO0FBRzlFLE9BQUksYUFBYSxZQUFZLFVBQVosQ0FINkQ7QUFJOUUsT0FBSSxZQUFZLFlBQVksU0FBWixDQUo4RDtBQUs5RSxPQUFJLE9BQU8sQ0FBQyxZQUFZLFNBQVosQ0FBRCxJQUEyQixTQUEzQixDQUxtRTtBQU05RSxPQUFJLFVBQVUsWUFBWSxPQUFaLENBTmdFO0FBTzlFLE9BQUksY0FBYyxZQUFZLFdBQVosQ0FQNEQ7QUFROUUsT0FBSSxRQUFRLFlBQVksS0FBWixDQVJrRTs7QUFVOUUsT0FBSSxJQUFJLFlBQVksS0FBWjtPQUFtQixJQUFJLFlBQVksTUFBWixDQVYrQztBQVc5RSxPQUFJLEtBQUssQ0FBTCxHQUFTLGlCQUFpQixDQUFqQixHQUFxQixDQUE5QixDQVgwRTtBQVk5RSxPQUFJLEtBQUssQ0FBTCxHQUFTLGtCQUFrQixDQUFsQixHQUFzQixDQUEvQixDQVowRTtBQWE5RSxRQUFLLElBQUksT0FBSixDQWJ5RTtBQWM5RSxRQUFLLElBQUksT0FBSixDQWR5RTtBQWU5RSxPQUFJLEtBQUssR0FBTCxDQUFTLENBQVQsRUFBWSxDQUFaLENBQUosQ0FmOEU7QUFnQjlFLE9BQUksS0FBSyxHQUFMLENBQVMsQ0FBVCxFQUFZLENBQVosQ0FBSixDQWhCOEU7O0FBa0I5RSxPQUFJLFdBQVcsaUJBQUUsS0FBRixDQUFRLFlBQVksUUFBWixDQUFuQixDQWxCMEU7QUFtQjlFLE9BQUksZUFBZSxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLENBQWpCLEVBQW9CLFFBQXBCLEVBQThCLFVBQTlCLEVBQTBDLElBQTFDLENBQWYsQ0FuQjBFO0FBb0I5RSxZQUFTLEtBQVQsR0FBaUIsYUFBYSxLQUFiLEdBQXFCLElBQUksT0FBSixDQXBCd0M7QUFxQjlFLFlBQVMsTUFBVCxHQUFrQixhQUFhLE1BQWIsR0FBc0IsSUFBSSxPQUFKLEdBQWMsQ0FBQyxhQUFhLE1BQWIsR0FBc0IsQ0FBdEIsQ0FBRCxHQUE0QixXQUE1QixDQXJCd0I7QUFzQjlFLE9BQUksU0FBUyxPQUFUO09BQWtCLEtBQUssQ0FBTDtPQUFRLGFBQWEsQ0FBQyxpQkFBRSxHQUFGLENBQU0sUUFBTixFQUFnQixTQUFoQixDQUFELENBdEJtQztBQXVCOUUsV0FBUSxLQUFSO0FBQ0MsU0FBSyxRQUFMO0FBQ0MsY0FBUyxRQUFULENBREQ7QUFFQyxTQUFJLFVBQUosRUFBZ0IsU0FBUyxPQUFULEdBQW1CLENBQW5CLENBQWhCO0FBQ0EsV0FIRDtBQURELFNBS00sT0FBTDtBQUNDLGNBQVMsS0FBVCxDQUREO0FBRUMsVUFBSyxhQUFhLEtBQWIsR0FBbUIsQ0FBbkIsQ0FGTjtBQUdDLFNBQUksVUFBSixFQUFnQixTQUFTLE9BQVQsR0FBbUIsQ0FBQyxHQUFELENBQW5DO0FBQ0EsV0FKRDtBQUxELFNBVU0sTUFBTDtBQUNDLFVBQUssQ0FBQyxhQUFhLEtBQWIsR0FBbUIsQ0FBcEIsQ0FETjtBQUVDLFNBQUksVUFBSixFQUFnQixTQUFTLE9BQVQsR0FBbUIsR0FBbkIsQ0FBaEI7QUFDQSxXQUhEO0FBVkQsSUF2QjhFO0FBc0M5RSxPQUFJLE1BQU0sZ0JBQU0sbUJBQU4sQ0FBMEIsRUFBQyxPQUFPLGNBQVAsRUFBdUIsUUFBUSxlQUFSLEVBQWxELEVBQTRFLFFBQTVFLENBQU4sQ0F0QzBFO0FBdUM5RSxPQUFJLFNBQVMsd0JBQWMsSUFBSSxDQUFKLENBQWQsRUFBc0IsSUFBSSxDQUFKLENBQXRCLEVBQThCLFNBQVMsS0FBVCxFQUFnQixTQUFTLE1BQVQsQ0FBdkQ7O0FBdkMwRSxPQXlDMUUsUUFBUSxTQUFTLFFBQVQsR0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQixHQUE4QixTQUFTLE1BQVQsR0FBa0IsQ0FBQyxDQUFDLGFBQWEsS0FBYixHQUFtQixDQUFwQixFQUF1QixDQUF4QixDQUFsQixHQUErQyxDQUFDLGFBQWEsS0FBYixHQUFtQixDQUFuQixFQUFzQixDQUF2QixDQUEvQzs7O0FBekNvQyxXQTRDOUUsQ0FBUyxLQUFULEdBQWlCLEtBQUssR0FBTCxDQUFTLElBQUksSUFBSSxPQUFKLEVBQWEsU0FBUyxLQUFULENBQTNDLENBNUM4RTtBQTZDOUUsWUFBUyxNQUFULEdBQWtCLEtBQUssR0FBTCxDQUFTLElBQUksSUFBSSxPQUFKLEVBQWEsU0FBUyxNQUFULENBQTVDLENBN0M4RTtBQThDOUUsU0FBTSxnQkFBTSxtQkFBTixDQUEwQixFQUFDLE9BQU8sY0FBUCxFQUF1QixRQUFRLGVBQVIsRUFBbEQsRUFBNEUsUUFBNUUsQ0FBTixDQTlDOEU7QUErQzlFLE9BQUksWUFBWSx3QkFBYyxJQUFJLENBQUosQ0FBZCxFQUFzQixJQUFJLENBQUosQ0FBdEIsRUFBOEIsU0FBUyxLQUFULEVBQWdCLFNBQVMsTUFBVCxDQUExRCxDQS9DMEU7O0FBaUQ5RSxVQUFPO0FBQ04sWUFBUSxXQUFSLEVBQXFCLE9BQU8sWUFBUCxFQUFxQixRQUFRLEtBQVI7QUFDMUMsVUFGTSxFQUVGLElBQUksQ0FBQyxTQUFTLE1BQVQsR0FBZ0IsQ0FBakIsR0FBcUIsT0FBckIsR0FBK0IsYUFBYSxVQUFiLEVBQXlCLGNBRjFELEVBRWtFLFlBQVksYUFBYSxVQUFiLEdBQTBCLFdBQTFCO0FBQ3BGLGdCQUhNLEVBR0MsY0FIRCxFQUdTLG9CQUhUO0lBQVAsQ0FqRDhFO0dBQS9FOztBQXdEQSxXQUFTLGtCQUFULENBQTRCLEtBQTVCLEVBQW1DLElBQW5DLEVBQXlDLFdBQXpDLEVBQXNEO0FBQ3JELGlCQUFjLGlCQUFFLFlBQUYsQ0FBZSxXQUFmLEVBQTRCLGFBQTVCLENBQWQsQ0FEcUQ7QUFFckQsT0FBSSxDQUFDLEtBQUQsSUFBVSxTQUFTLEVBQVQsRUFBYSxPQUFPLElBQVAsQ0FBM0I7O0FBRUEsT0FBSSxXQUFXLFlBQVksUUFBWixDQUpzQztBQUtyRCxPQUFJLGFBQWEsWUFBWSxVQUFaLENBTG9DO0FBTXJELE9BQUksWUFBWSxZQUFZLFNBQVosQ0FOcUM7QUFPckQsT0FBSSxPQUFPLENBQUMsWUFBWSxTQUFaLENBQUQsSUFBMkIsU0FBM0IsQ0FQMEM7O0FBU3JELE9BQUksZUFBZSxLQUFLLElBQUwsQ0FBVSxLQUFWLEVBQWlCLFlBQVksS0FBWixFQUFtQixRQUFwQyxFQUE4QyxVQUE5QyxFQUEwRCxJQUExRCxDQUFmLENBVGlEO0FBVXJELE9BQUksTUFBTSxLQUFLLG1CQUFMLENBQXlCLEVBQUMsR0FBRyxZQUFZLGFBQVosR0FBMEIsQ0FBMUIsRUFBNkIsU0FBUyxZQUFZLFlBQVosSUFBNEIsQ0FBNUIsRUFBK0IsU0FBUyxZQUFZLFlBQVosSUFBNEIsQ0FBNUIsRUFBM0csQ0FBTixDQVZpRDs7QUFZckQsT0FBSSxTQUFTLE9BQVQ7T0FBa0IsV0FBdEIsQ0FacUQ7QUFhckQsV0FBUSxZQUFZLEtBQVo7QUFDUCxTQUFLLFFBQUw7QUFDQyxjQUFTLFFBQVQsQ0FERDtBQUVDLFdBRkQ7QUFERCxTQUlNLE9BQUw7QUFDQyxjQUFTLEtBQVQsQ0FERDtBQUVDLFVBQUssYUFBYSxLQUFiLEdBQW1CLENBQW5CLENBRk47QUFHQyxXQUhEO0FBSkQsU0FRTSxNQUFMLENBUkQ7QUFTQztBQUNDLFVBQUssQ0FBQyxhQUFhLEtBQWIsR0FBbUIsQ0FBcEIsQ0FETjtBQUVDLFdBRkQ7QUFURCxJQWJxRDtBQTBCckQsVUFBTztBQUNOLFlBQVEsV0FBUixFQUFxQixPQUFPLFlBQVAsRUFBcUIsUUFBUSxLQUFSO0FBQzFDLFFBQUksRUFBSixFQUFRLElBQUksQ0FBQyxhQUFhLE1BQWIsR0FBb0IsQ0FBckIsR0FBeUIsYUFBYSxVQUFiO0FBQ3JDLFlBQVEsTUFBUixFQUFnQixZQUFZLGFBQWEsVUFBYjtBQUM1QixZQUFRLHdCQUFjLElBQUksQ0FBSixDQUFkLEVBQXNCLElBQUksQ0FBSixDQUF0QixFQUE4QixhQUFhLEtBQWIsRUFBb0IsYUFBYSxNQUFiLENBQTFEO0lBSkQsQ0ExQnFEO0dBQXREOztBQWtDQSxXQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsR0FBdEIsRUFBMkI7QUFDMUIsVUFBTyxLQUFLLFdBQUwsQ0FBaUIsR0FBakIsQ0FBUCxDQUQwQjtHQUEzQjs7QUFJQSxNQUFJLFNBQVM7QUFDWixZQUFTLG1CQUFXO0FBQUUsV0FBTyxLQUFLLEtBQUwsSUFBYyxLQUFLLEtBQUwsQ0FBVyxLQUFYLENBQWlCLFVBQWpCLElBQStCLFNBQS9CLENBQXZCO0lBQVg7O0FBRVQsVUFBTyxlQUFTLEdBQVQsRUFBYyxTQUFkLEVBQXlCLEdBQXpCLEVBQThCLEtBQTlCLEVBQXFDLE1BQXJDLEVBQTZDO0FBQ25ELFFBQUksQ0FBQyxLQUFLLEtBQUwsRUFBWTtBQUNoQixVQUFLLEtBQUwsR0FBYSxtQkFBUyxhQUFULENBQXVCLFVBQXZCLEVBQW1DLEVBQUMsSUFBRyxjQUFILEVBQW1CLGNBQWEsS0FBYixFQUF2RCxFQUE0RSxFQUFDLFVBQVMsVUFBVCxFQUFxQixVQUFTLFFBQVQsRUFBbUIsU0FBUSxLQUFSLEVBQWUsUUFBTyxLQUFQLEVBQWMsUUFBTyxhQUFQLEVBQWxKLENBQWIsRUFDQSxVQUFVLFdBQVYsQ0FBc0IsS0FBSyxLQUFMLENBRHRCLENBRGdCO0tBQWpCLE1BR08sSUFBSSxLQUFLLE9BQUwsTUFBa0IsS0FBSyxHQUFMLElBQVksR0FBWixFQUFpQjs7QUFFN0MsVUFBSyxJQUFMLEdBRjZDO0tBQXZDO0FBSVAsU0FBSyxHQUFMLEdBQVcsR0FBWCxDQVJtRDtBQVNuRCxTQUFLLEdBQUwsR0FBVyxHQUFYLENBVG1EO0FBVW5ELFNBQUssS0FBTCxHQUFhLEtBQWIsQ0FWbUQ7QUFXbkQsU0FBSyxNQUFMLEdBQWMsTUFBZCxDQVhtRDs7QUFhbkQsUUFBSSxjQUFjLElBQUksTUFBSjs7QUFiaUMsUUFlL0MsTUFBTSxtQkFBUyxpQkFBVCxDQUEyQixLQUEzQixFQUFrQyxTQUFsQyxDQUFOLENBZitDO0FBZ0JuRCxVQUFNLENBQUMsSUFBSSxDQUFKLElBQVMsSUFBSSxTQUFKLENBQWMsSUFBZCxFQUFvQixJQUFJLENBQUosSUFBUyxJQUFJLFNBQUosQ0FBYyxHQUFkLENBQTdDLENBaEJtRDtBQWlCbkQsUUFBSSxRQUFRLEdBQVIsQ0FqQitDOztBQW1CbkQsUUFBSSxNQUFKLEVBQ0MsT0FBTyxLQUFQLENBQWEsVUFBYixHQUEwQixRQUExQixDQUREOztBQUdBLHVCQUFTLFVBQVQsQ0FBb0IsS0FBSyxLQUFMLEVBQVksSUFBaEMsRUFBc0M7QUFDckMsaUJBQVksU0FBWjtBQUNBLFdBQU0sSUFBSSxDQUFKLElBQVMsSUFBVDtBQUNOLFVBQUssSUFBSSxDQUFKLElBQVMsSUFBVDtBQUNMLFlBQU8sR0FBQyxDQUFJLFNBQUosQ0FBYyxLQUFkLEdBQXNCLEtBQXRCLEdBQStCLElBQWhDO0FBQ1AsYUFBUSxHQUFDLENBQUksU0FBSixDQUFjLE1BQWQsR0FBdUIsS0FBdkIsR0FBZ0MsSUFBakM7QUFDUixvQkFBZSxZQUFZLFVBQVo7QUFDZixrQkFBYSxXQUFDLENBQVksUUFBWixHQUF1QixLQUF2QixHQUFnQyxJQUFqQztBQUNiLG9CQUFlLENBQUMsWUFBWSxTQUFaLEdBQXdCLFNBQXhCLENBQUQsSUFBdUMsU0FBdkMsR0FBbUQsTUFBbkQsR0FBNEQsUUFBNUQ7O0FBUnNCLEtBQXRDLEVBdEJtRDs7QUFrQ25ELFNBQUssS0FBTCxDQUFXLEtBQVgsR0FBbUIsSUFBSSxNQUFKLENBbENnQztBQW1DbkQsU0FBSyxLQUFMLENBQVcsS0FBWCxHQW5DbUQ7QUFvQ25ELFNBQUssS0FBTCxDQUFXLE1BQVgsR0FwQ21EO0FBcUNuRCxtQkFBTyxJQUFQLENBQVksSUFBWixFQUFrQixjQUFsQixFQUFrQyxDQUFDLEtBQUssR0FBTCxDQUFuQyxFQXJDbUQ7SUFBN0M7O0FBd0NQLFNBQU0sY0FBUyxNQUFULEVBQWlCO0FBQ3RCLFFBQUksQ0FBQyxLQUFLLE9BQUwsRUFBRCxFQUFpQixPQUFyQjs7QUFFQSxhQUFTLFVBQVUsS0FBVixDQUhhO0FBSXRCLFFBQUksS0FBSyxNQUFMLEVBQ0gsS0FBSyxNQUFMLENBQVksS0FBWixDQUFrQixVQUFsQixHQUErQixJQUEvQixDQUREOztBQUdBLFNBQUssS0FBTCxDQUFXLEtBQVgsQ0FBaUIsVUFBakIsR0FBOEIsUUFBOUIsQ0FQc0I7QUFRdEIsUUFBSSxDQUFDLE1BQUQsRUFDSCxlQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLGVBQWxCLEVBQW1DLENBQUMsS0FBSyxHQUFMLEVBQVUsS0FBSyxLQUFMLENBQVcsS0FBWCxDQUE5QyxFQUREOztBQUdBLG1CQUFPLElBQVAsQ0FBWSxJQUFaLEVBQWtCLGFBQWxCLEVBQWlDLENBQUMsS0FBSyxHQUFMLENBQWxDLEVBWHNCO0FBWXRCLFdBQU8sS0FBSyxHQUFMLENBWmU7QUFhdEIsV0FBTyxLQUFLLEdBQUwsQ0FiZTtBQWN0QixXQUFPLEtBQUssS0FBTCxDQWRlO0FBZXRCLFdBQU8sS0FBSyxNQUFMLENBZmU7SUFBakI7R0EzQ0gsQ0FoUHNCOztBQThTMUIsU0FBTztBQUNOLHVCQURNO0FBRU4sMkJBRk07QUFHTixpQ0FITTtBQUlOLDJCQUpNO0FBS04sK0JBTE07QUFNTixhQU5NO0FBT04sMkJBUE07QUFRTix5Q0FSTTtBQVNOLGlCQVRNO0FBVU4saUJBVk07R0FBUCxDQTlTMEI7RUFBWCxHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ25CVjs7O0FBQ0wsV0FESyxJQUNMLENBQVksS0FBWixFQUFnRDtPQUE3QiwrREFBUyxrQkFBb0I7T0FBaEIsc0JBQWdCO09BQVIsc0JBQVE7O3lCQUQzQyxNQUMyQzs7QUFDL0MsT0FBSSxDQUFDLE9BQU8sRUFBUCxFQUFXLE9BQU8sRUFBUCxHQUFZLGlCQUFFLFFBQUYsQ0FBVyxHQUFYLENBQVosQ0FBaEI7O3NFQUZJLGlCQUdFLE9BQU8sU0FGa0M7O0FBSS9DLFNBQUssTUFBTCxHQUFjLE1BQUssTUFBTCxHQUFjLElBQWQsQ0FKaUM7QUFLL0MsU0FBSyxTQUFMLENBQWUsTUFBZixFQUF1QixPQUFPLFNBQVAsQ0FBdkIsQ0FMK0M7QUFNL0MsU0FBSyxTQUFMLENBQWUsTUFBZixFQUF1QixPQUFPLFNBQVAsQ0FBdkIsQ0FOK0M7O0dBQWhEOztlQURLOzs2QkFVSyxNQUFNLEtBQUs7QUFDcEIsU0FBSyxXQUFMLENBQWlCLElBQWpCLEVBQXVCLEdBQXZCLEVBQTRCLFFBQTVCLEVBRG9COzs7OzZCQUlYLE1BQU0sS0FBSztBQUNwQixTQUFLLFdBQUwsQ0FBaUIsSUFBakIsRUFBdUIsR0FBdkIsRUFBNEIsUUFBNUIsRUFEb0I7Ozs7Ozs7OzsrQkFPUixNQUFNLEtBQUssS0FBSztBQUM1QixRQUFJLE1BQU0sT0FBTyxRQUFQLEdBQWtCLEtBQUssTUFBTCxHQUFjLEtBQUssTUFBTCxDQURkO0FBRTVCLFFBQUksT0FBTyxJQUFQLEVBQWE7O0FBRWhCLFNBQUksSUFBSixFQUNDLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsR0FBckIsRUFERDtLQUZELE1BSU87QUFDTixTQUFJLEdBQUosRUFBUzs7QUFFUixVQUFJLFVBQUosQ0FBZSxJQUFmLEVBRlE7TUFBVDs7QUFLQSxTQUFJLElBQUosRUFBVTtBQUNULFVBQUksT0FBTyxRQUFQLEVBQ0gsS0FBSyxVQUFMLENBQWdCLElBQWhCLEVBQXNCLEdBQXRCLEVBREQsS0FHQyxLQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLEdBQXJCLEVBSEQ7TUFERDtBQU1BLFNBQUksT0FBTyxRQUFQLEVBQ0gsS0FBSyxNQUFMLEdBQWMsSUFBZCxDQURELEtBR0MsS0FBSyxNQUFMLEdBQWMsSUFBZCxDQUhEOztBQVpNLEtBSlA7Ozs7K0JBd0JXLEtBQUs7QUFDaEIsV0FBTyxnQkFBTSxrQkFBTixDQUF5QixLQUFLLElBQUwsQ0FBVSxPQUFWLENBQXpCLEVBQTZDLEtBQUssT0FBTCxDQUFhLEdBQWIsQ0FBN0MsRUFBZ0UsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixhQUFuQixDQUFoRSxDQUFQLENBRGdCOzs7Ozs7Ozs7c0NBT0UsS0FBSztBQUN2QixRQUFJLE1BQU0sRUFBTixDQURtQjtBQUV2QixRQUFJLEtBQUssTUFBTCxFQUNILElBQUksSUFBSixDQUFTLEtBQUssTUFBTCxDQUFZLFFBQVosQ0FBcUIsR0FBckIsRUFBMEIsTUFBMUIsQ0FBVCxDQURELEtBR0MsSUFBSSxJQUFKLENBQVMsS0FBSyxRQUFMLENBQWMsR0FBZCxFQUFtQixPQUFuQixDQUFULEVBSEQ7O0FBS0EsUUFBSSxLQUFLLE1BQUwsRUFDSCxJQUFJLElBQUosQ0FBUyxLQUFLLE1BQUwsQ0FBWSxRQUFaLENBQXFCLEdBQXJCLEVBQTBCLE1BQTFCLENBQVQsQ0FERCxLQUdDLElBQUksSUFBSixDQUFTLEtBQUssUUFBTCxDQUFjLEdBQWQsRUFBbUIsS0FBbkIsQ0FBVCxFQUhEOztBQUtBLFdBQU8sR0FBUCxDQVp1Qjs7OztxQ0FlTixLQUFLO0FBQ3RCLFFBQUksU0FBUyxLQUFLLGtCQUFMLENBQXdCLEdBQXhCLENBQVQsQ0FEa0I7QUFFdEIsUUFBSSxNQUFNLEVBQU4sQ0FGa0I7QUFHdEIsUUFBSSxLQUFLLE1BQUwsRUFBYTtBQUNoQixTQUFJLElBQUosQ0FBUyxLQUFLLE1BQUwsQ0FBWSxPQUFaLENBQW9CLEdBQXBCLEVBQXlCLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBekIsRUFBa0QsT0FBTyxDQUFQLENBQWxELENBQVQsRUFEZ0I7S0FBakIsTUFHQyxJQUFJLElBQUosQ0FBUyxPQUFPLENBQVAsQ0FBVCxFQUhEOztBQUtBLFFBQUksS0FBSyxNQUFMLEVBQWE7QUFDaEIsU0FBSSxJQUFKLENBQVMsS0FBSyxNQUFMLENBQVksT0FBWixDQUFvQixHQUFwQixFQUF5QixLQUFLLElBQUwsQ0FBVSxZQUFWLENBQXpCLEVBQWtELE9BQU8sQ0FBUCxDQUFsRCxDQUFULEVBRGdCO0tBQWpCLE1BR0MsSUFBSSxJQUFKLENBQVMsT0FBTyxDQUFQLENBQVQsRUFIRDtBQUlBLFdBQU8sR0FBUCxDQVpzQjs7Ozs0QkFlZCxLQUFLO0FBQ2IsUUFBSSxRQUFRLGdCQUFNLEdBQU4sQ0FBVSxLQUFLLEVBQUwsR0FBVSxRQUFWLEVBQW9CLEdBQTlCLENBQVIsQ0FEUztBQUViLFFBQUksS0FBSixFQUFXLE9BQU8sS0FBUCxDQUFYOztBQUVBLFFBQUksY0FBYyxLQUFLLFFBQUwsQ0FBYyxHQUFkLEVBQW1CLE9BQW5CLENBQWQsQ0FKUztBQUtiLFlBQVEsZUFBSyxZQUFMLENBQWtCLEtBQUssaUJBQUwsQ0FBdUIsR0FBdkIsQ0FBbEIsRUFBK0MsSUFBL0MsRUFBcUQsV0FBckQsRUFBa0UsS0FBSyxJQUFMLENBQVUsYUFBVixDQUFsRSxFQUE0RixLQUFLLElBQUwsQ0FBVSxXQUFWLENBQTVGLENBQVIsQ0FMYTtBQU1iLG9CQUFNLEdBQU4sQ0FBVSxLQUFLLEVBQUwsR0FBVSxRQUFWLEVBQW9CLEtBQTlCLEVBQXFDLEdBQXJDLEVBTmE7QUFPYixXQUFPLEtBQVAsQ0FQYTs7Ozs4QkFVSDtBQUNWLFdBQU8sWUFBWSxDQUFDLEtBQUssTUFBTCxHQUFjLE1BQWYsR0FBd0IsS0FBSyxNQUFMLENBQVksRUFBWixDQUFwQyxHQUFzRCxJQUF0RCxJQUE4RCxDQUFDLEtBQUssTUFBTCxHQUFjLE1BQWYsR0FBd0IsS0FBSyxNQUFMLENBQVksRUFBWixDQUF0RixHQUF3RyxHQUF4RyxDQURHOzs7OzZCQUlEO0FBQ1QsK0JBbkdJLDRDQW1HSixDQURTO0FBRVQsU0FBSyxTQUFMLENBQWUsSUFBZixFQUZTO0FBR1QsU0FBSyxTQUFMLENBQWUsSUFBZixFQUhTOzs7O1NBbEdMOzs7QUF3R04sTUFBSyxTQUFMLEdBQWlCLE9BQWpCOzttQkFFZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHZixLQUFJLGdCQUFnQjtBQUNuQixhQUFXLFFBQVg7QUFDQSxhQUFXLEtBQVg7RUFGRzs7Ozs7QUFRSixLQUFJLE9BQU8sWUFBWTs7QUFFdEIsV0FBUyxZQUFULENBQXNCLFdBQXRCLEVBQW1DLGtCQUFuQyxFQUErRztPQUF4RCxvRUFBYyxrQkFBMEM7T0FBdEMsb0VBQWMsb0JBQXdCO09BQWxCLGtFQUFZLG9CQUFNOztBQUM5RyxpQkFBYyxpQkFBRSxZQUFGLENBQWUsV0FBZixFQUE0QixhQUE1QixDQUFkLENBRDhHOztBQUc5RyxVQUFPO0FBQ04sWUFBUSxXQUFSO0FBQ0EsNEJBRk07QUFHTix3QkFITTtBQUlOLFlBQVEsV0FBUjtBQUNBLFlBQVEsZ0JBQVMsSUFBVCxFQUFlO0FBQ3RCLFlBQU8sS0FBSyxNQUFMLENBQVksSUFBWixFQUFrQixJQUFsQixDQUFQLENBRHNCO0tBQWY7SUFMVCxDQUg4RztHQUEvRzs7QUFjQSxXQUFTLE1BQVQsQ0FBZ0IsSUFBaEIsRUFBc0IsS0FBdEIsRUFBNkI7QUFDNUIsVUFBTyxLQUFLLFVBQUwsQ0FBZ0IsS0FBaEIsQ0FBUCxDQUQ0QjtHQUE3Qjs7QUFJQSxTQUFPO0FBQ04sNkJBRE07QUFFTixpQkFGTTtHQUFQLENBcEJzQjtFQUFYLEVBQVI7O21CQTBCVyxLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2Q2YsS0FBSSxXQUFXLEVBQVg7O0FBRUosS0FBSSxTQUFTLFlBQVk7OztBQUd4QixXQUFTLEtBQVQsQ0FBZSxJQUFmLEVBQXFCLE1BQXJCLEVBQTZCLE1BQTdCLEVBQXFDO0FBQ3BDLE9BQUksT0FBTyxTQUFTLENBQUMsQ0FBRCxHQUFLLENBQWQsQ0FEeUI7QUFFcEMsT0FBSSxTQUFTO0FBQ1osYUFBUyx3QkFBYyxDQUFDLENBQUQsRUFBSSxDQUFDLENBQUQsRUFBSSxFQUF0QixFQUEwQixFQUExQixDQUFUO0FBQ0EsVUFBTSxJQUFOO0FBQ0EsU0FBSyxDQUFDLElBQUUsSUFBRixFQUFRLENBQVQsQ0FBTDtBQUNBLFVBQU0sT0FBTyxLQUFQO0lBSkgsQ0FGZ0M7QUFRcEMsVUFBTyxLQUFQLEdBQWU7QUFDZCxVQUFNLFNBQU47QUFDQSxZQUFRLENBQUMsQ0FBQyxDQUFDLENBQUQsR0FBRyxJQUFILEVBQVMsQ0FBVixDQUFELEVBQWUsQ0FBQyxDQUFDLENBQUQsR0FBRyxJQUFILEVBQVMsQ0FBVixDQUFmLEVBQTZCLENBQUMsSUFBRSxJQUFGLEVBQVEsQ0FBVCxDQUE3QixFQUEwQyxDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUgsRUFBUyxDQUFDLENBQUQsQ0FBcEQsQ0FBUjtJQUZELENBUm9DO0FBWXBDLFVBQU8sTUFBUCxDQVpvQztHQUFyQzs7QUFlQSxXQUFTLFFBQVQsQ0FBa0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0MsTUFBaEMsRUFBd0M7QUFDdkMsT0FBSSxPQUFPLFNBQVMsQ0FBQyxDQUFELEdBQUssQ0FBZCxDQUQ0QjtBQUV2QyxPQUFJLFNBQVM7QUFDWixhQUFTLHdCQUFjLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBRCxFQUFJLEVBQXRCLEVBQTBCLEVBQTFCLENBQVQ7QUFDQSxVQUFNLElBQU47QUFDQSxTQUFLLENBQUMsSUFBRSxJQUFGLEVBQVEsQ0FBVCxDQUFMO0FBQ0EsVUFBTSxPQUFPLEtBQVA7SUFKSCxDQUZtQztBQVF2QyxVQUFPLEtBQVAsR0FBZTtBQUNkLFVBQU0sU0FBTjtBQUNBLFlBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUgsRUFBUyxDQUFDLENBQUQsQ0FBWCxFQUFnQixDQUFDLENBQUMsQ0FBRCxHQUFHLElBQUgsRUFBUyxDQUFWLENBQWhCLEVBQThCLENBQUMsSUFBRSxJQUFGLEVBQVEsQ0FBVCxDQUE5QixDQUFSO0lBRkQsQ0FSdUM7QUFZdkMsVUFBTyxNQUFQLENBWnVDO0dBQXhDOztBQWVBLFdBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0IsTUFBcEIsRUFBNEIsTUFBNUIsRUFBb0M7QUFDbkMsT0FBSSxJQUFJLE9BQU8sQ0FBUCxDQUQyQjtBQUVuQyxPQUFJLFNBQVM7QUFDWixhQUFTLHdCQUFjLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBRCxFQUFJLElBQXRCLEVBQTRCLElBQTVCLENBQVQ7QUFDQSxVQUFNLElBQU47QUFDQSxTQUFLLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBTDtBQUNBLFVBQU0sT0FBTyxLQUFQO0lBSkgsQ0FGK0I7QUFRbkMsVUFBTyxLQUFQLEdBQWUsZ0NBQWdDLENBQWhDLEdBQW9DLFFBQXBDLEdBQStDLENBQS9DLEdBQW1ELGNBQW5ELENBUm9CO0FBU25DLFVBQU8sTUFBUCxDQVRtQztHQUFwQzs7QUFZQSxXQUFTLE9BQVQsQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFBK0IsTUFBL0IsRUFBdUM7QUFDdEMsT0FBSSxPQUFPLFNBQVMsQ0FBQyxDQUFELEdBQUssQ0FBZCxDQUQyQjtBQUV0QyxPQUFJLFNBQVM7QUFDWixhQUFTLHdCQUFjLENBQUMsQ0FBRCxFQUFJLENBQUMsQ0FBRCxFQUFJLEVBQXRCLEVBQTBCLEVBQTFCLENBQVQ7QUFDQSxVQUFNLElBQU47QUFDQSxTQUFLLENBQUMsSUFBRSxJQUFGLEVBQVEsQ0FBVCxDQUFMO0FBQ0EsVUFBTSxPQUFPLEtBQVA7SUFKSCxDQUZrQztBQVF0QyxVQUFPLEtBQVAsR0FBZSxFQUFmLENBUnNDO0FBU3RDLFVBQU8sTUFBUCxDQVRzQztHQUF2Qzs7QUE3Q3dCLFdBeURmLFNBQVQsQ0FBbUIsTUFBbkIsRUFBMkIsTUFBM0IsRUFBbUM7QUFDbEMsT0FBSSxVQUFVLFNBQVMsT0FBTyxJQUFQLENBQW5CLENBRDhCO0FBRWxDLE9BQUksU0FBUyxRQUFRLE9BQU8sSUFBUCxFQUFhLE1BQXJCLEVBQTZCLE1BQTdCLENBQVQsQ0FGOEI7QUFHbEMsVUFBTyxFQUFQLEdBQVksT0FBTyxFQUFQLENBSHNCO0FBSWxDLFVBQU8sTUFBUCxDQUprQztHQUFuQzs7QUFPQSxXQUFTLE9BQVQsSUFBb0IsS0FBcEIsQ0FoRXdCO0FBaUV4QixXQUFTLFVBQVQsSUFBdUIsUUFBdkIsQ0FqRXdCO0FBa0V4QixXQUFTLE1BQVQsSUFBbUIsSUFBbkIsQ0FsRXdCO0FBbUV4QixXQUFTLFNBQVQsSUFBc0IsT0FBdEIsQ0FuRXdCOztBQXFFeEIsU0FBTztBQUNOLGFBQVUsUUFBVjtBQUNBLGNBQVcsU0FBWDtHQUZELENBckV3QjtFQUFYLEVBQVY7O21CQTJFVyxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQzVFVDtBQUNMLFdBREssTUFDTCxHQUF1QjtPQUFYLCtEQUFPLGtCQUFJOzt5QkFEbEIsUUFDa0I7O0FBQ3RCLE9BQUksT0FBTyxjQUFQLENBQXNCLGFBQXRCLEtBQXdDLGlCQUFFLFFBQUYsQ0FBVyxPQUFPLFdBQVAsQ0FBbkQsRUFBd0U7QUFDM0UsUUFBSSxPQUFPLFdBQVAsQ0FBbUIsV0FBbkIsTUFBb0MsWUFBcEMsRUFDSCxPQUFPLFdBQVAsR0FBcUIsT0FBTyxVQUFQLENBRHRCLEtBR0MsT0FBTyxPQUFPLFdBQVAsQ0FIUjtJQUREO0FBTUEsbUJBQU0sVUFBTixDQUFpQixJQUFqQixFQUF1QixNQUF2QixFQVBzQjtHQUF2Qjs7ZUFESzs7MEJBV0UsTUFBTSxRQUFROzs7MkJBQ2I7Ozs2QkFDRTs7O1NBYkw7OztBQWVOLFFBQU8sUUFBUCxHQUFrQixDQUFsQjtBQUNBLFFBQU8sVUFBUCxHQUFvQixDQUFwQjs7QUFFQSxRQUFPLFFBQVAsR0FBa0I7QUFDakIsZUFBYSxPQUFPLFFBQVA7RUFEZDs7bUJBSWUsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDdEJUOzs7Ozs7Ozs7OzswQkFDRSxNQUFNLFFBQVE7QUFDcEIsUUFBSSxLQUFKLENBRG9CO0FBRXBCLFFBQUksQ0FBQyxJQUFELEVBQ0gsUUFBUSxLQUFLLEtBQUwsQ0FBVyxVQUFYLENBRFQsS0FFSyxJQUFJLEVBQUUsT0FBRixDQUFVLElBQVYsQ0FBSixFQUNKLFFBQVEsSUFBUixDQURJLEtBR0osUUFBUSxLQUFLLGNBQUwsQ0FBb0IsUUFBcEIsQ0FBUixDQUhJO0FBSUwsUUFBSSxDQUFDLEtBQUQsSUFBVSxNQUFNLE1BQU4sSUFBZ0IsQ0FBaEIsRUFBbUIsT0FBakM7O0FBRUEsUUFBSSxJQUFJLENBQUo7UUFBTyxJQUFJLENBQUo7UUFBTyxJQUFJLENBQUo7UUFBTyxJQUF6QixDQVZvQjtBQVdwQixRQUFJLEtBQUssQ0FBTDtRQUFRLEtBQUssQ0FBTCxDQVhRO0FBWXBCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE1BQU0sTUFBTixFQUFjLEdBQWxDLEVBQXVDO0FBQ3RDLFlBQU8sTUFBTSxDQUFOLENBQVAsQ0FEc0M7QUFFdEMsU0FBSSxJQUFJLENBQUosSUFBUyxJQUFJLEtBQUssSUFBTCxHQUFZLEtBQUssV0FBTCxDQUFpQixPQUFqQixDQUFoQixHQUE0QyxPQUFPLEtBQVAsRUFBYzs7QUFFdEUsV0FBSyxJQUFJLEtBQUssSUFBTCxDQUY2RDtBQUd0RSxVQUFJLENBQUosQ0FIc0UsQ0FHaEUsR0FBSSxDQUFKLENBSGdFLEVBRzFELEdBQUssQ0FBTCxDQUgwRCxFQUduRCxHQUhtRDtNQUF2RTtBQUtBLFVBQUssTUFBTCxHQUFjLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FBZCxDQVBzQztBQVF0QyxVQUFLLE1BQUwsQ0FBWSxDQUFDLE9BQU8sQ0FBUCxHQUFXLENBQVgsRUFBYyxPQUFPLENBQVAsR0FBVyxDQUFYLENBQTNCLEVBUnNDO0FBU3RDLFVBQUssS0FBSyxJQUFMLEdBQVksS0FBSyxXQUFMLENBQWlCLE9BQWpCLENBQVosQ0FUaUM7QUFVdEMsVUFWc0M7QUFXdEMsU0FBSSxJQUFJLEtBQUssV0FBTCxDQUFpQixRQUFqQixDQUFKLEdBQWlDLEtBQUssV0FBTCxDQUFpQixRQUFqQixDQUFqQyxHQUE4RCxDQUE5RCxDQVhrQztLQUF2QztBQWFBLFNBQUssT0FBTCxDQUFhLElBQUksU0FBSixDQUFjLE9BQU8sQ0FBUCxFQUFVLE9BQU8sQ0FBUCxFQUFVLE9BQU8sS0FBUCxFQUFjLElBQUksQ0FBSixDQUE3RCxFQXpCb0I7Ozs7U0FEaEI7OztBQThCTixZQUFXLFFBQVgsR0FBc0I7QUFDckIsUUFBTSxFQUFOO0FBQ0EsUUFBTSxFQUFOO0VBRkQ7O21CQUtlLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDN0JUO0FBQ0wsV0FESyxTQUNMLENBQVksRUFBWixFQUFnQixTQUFoQixFQUF3QztPQUFiLCtEQUFTLGtCQUFJOzt5QkFEbkMsV0FDbUM7O0FBQ3ZDLFFBQUssRUFBTCxHQUFVLEVBQVYsQ0FEdUM7QUFFdkMsUUFBSyxHQUFMLEdBQVcsbUJBQVMsYUFBVCxDQUF1QixLQUF2QixFQUE4QixFQUFDLElBQUcsS0FBSyxFQUFMLEVBQVMsVUFBUyxDQUFULEVBQTNDLEVBQXdELEVBQUMsVUFBVSxRQUFWLEVBQW9CLE9BQU8sTUFBUCxFQUFlLFFBQVEsTUFBUixFQUFnQixVQUFVLFVBQVYsRUFBNUcsQ0FBWCxDQUZ1QztBQUd2QyxhQUFVLFdBQVYsQ0FBc0IsS0FBSyxHQUFMLENBQXRCLENBSHVDO0FBSXZDLE9BQUksT0FBTyxNQUFQLEVBQWU7QUFDbEIsUUFBSSxjQUFjLGdCQUFNLGNBQU4sQ0FBcUIsT0FBTyxNQUFQLENBQWMsT0FBZCxrQkFBckIsQ0FBZCxDQURjO0FBRWxCLFNBQUssTUFBTCxHQUFjLElBQUksV0FBSixDQUFnQixPQUFPLE1BQVAsQ0FBYyxNQUFkLENBQTlCLENBRmtCO0FBR2xCLFdBQU8sT0FBTyxNQUFQLENBSFc7SUFBbkI7QUFLQSxRQUFLLEtBQUwsR0FBYSxJQUFiLENBVHVDO0FBVXZDLFFBQUssTUFBTCxHQUFjLElBQWQsQ0FWdUM7QUFXdkMsUUFBSyxVQUFMLEdBQWtCLElBQWxCLENBWHVDO0FBWXZDLG1CQUFNLFVBQU4sQ0FBaUIsSUFBakIsRUFBdUIsTUFBdkIsRUFadUM7O0FBY3ZDLGtCQUFPLEVBQVAsQ0FBVSxnQkFBTSxNQUFOLEVBQWMsaUJBQXhCLEVBQTJDLFVBQVMsR0FBVCxFQUFjLEtBQWQsRUFBcUI7QUFDL0QsWUFBUSxHQUFSLENBQVksTUFBTSxHQUFOLEdBQVksS0FBWixDQUFaLENBRCtEO0lBQXJCLENBQTNDLENBZHVDO0dBQXhDOztlQURLOzt5QkFvQkMsUUFBTztBQUNaLFFBQUksTUFBSixFQUFXO0FBQ1YsVUFBSyxNQUFMLEdBQWMsTUFBZCxDQURVO0FBRVYsWUFBTyxJQUFQLENBRlU7S0FBWDtBQUlBLFdBQU8sS0FBSyxNQUFMLENBTEs7Ozs7NEJBUUosUUFBUSxXQUFVO0FBQzFCLFFBQUksaUJBQUUsV0FBRixDQUFjLE1BQWQsS0FBeUIsaUJBQUUsTUFBRixDQUFTLE1BQVQsQ0FBekIsRUFBMkMsU0FBUyxLQUFULENBQS9DO0FBQ0EsUUFBSSxDQUFDLFNBQUQsRUFBVztBQUNkLFNBQUksS0FBSyx3QkFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEtBQUssR0FBTCxDQUFTLFdBQVQsRUFBc0IsS0FBSyxHQUFMLENBQVMsWUFBVCxDQUEvQyxDQURVO0FBRWQsU0FBSSxNQUFKLEVBQ0MsT0FBTyxnQkFBTSxLQUFOLENBQVksSUFBWixFQUFrQixFQUFsQixDQUFQLENBREQ7QUFFQSxZQUFPLEVBQVAsQ0FKYztLQUFmO0FBTUEsUUFBSSxDQUFDLE1BQUQsRUFBUyxZQUFXLGdCQUFNLEtBQU4sQ0FBWSxJQUFaLEVBQWtCLFNBQWxCLENBQVgsQ0FBYjtBQUNBLFFBQUksSUFBSSxLQUFLLEdBQUwsQ0FBUyxXQUFULENBVGtCO0FBVTFCLFFBQUksUUFBUSxJQUFJLFVBQVMsS0FBVCxDQVZVO0FBVzFCLFNBQUssU0FBTCxDQUFlLENBQUMsVUFBUyxDQUFULEdBQVcsS0FBWixFQUFtQixDQUFDLFVBQVMsQ0FBVCxHQUFXLEtBQVosRUFBbUIsS0FBckQsRUFYMEI7Ozs7NkJBY2pCLEdBQUc7QUFDWixRQUFJLENBQUMsS0FBSyxNQUFMLEVBQWEsT0FBTyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVAsQ0FBbEI7QUFDQSxRQUFJLENBQUMsVUFBVSxNQUFWLEVBQWtCO0FBQ3RCLFNBQUksT0FBTyxLQUFLLE1BQUwsQ0FBWSxjQUFaLEVBQVAsQ0FEa0I7QUFFdEIsU0FBSSxDQUFDLElBQUQsRUFDSCxPQUFPLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBUCxDQUREO0FBRUEsWUFBTyxDQUFDLEtBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLEdBQXZCLEtBQStCLENBQS9CLEVBQWtDLEtBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLEdBQXZCLEtBQStCLENBQS9CLENBQTFDLENBSnNCO0tBQXZCO0FBTUEsU0FBSyxTQUFMLENBQWUsRUFBRSxDQUFGLENBQWYsRUFBcUIsRUFBRSxDQUFGLENBQXJCLEVBUlk7Ozs7eUJBV1AsR0FBRztBQUNSLFFBQUksQ0FBQyxLQUFLLE1BQUwsRUFBYSxPQUFPLEdBQVAsQ0FBbEI7QUFDQSxRQUFJLENBQUMsVUFBVSxNQUFWLEVBQWtCO0FBQ3RCLFNBQUksT0FBTyxLQUFLLE1BQUwsQ0FBWSxjQUFaLEVBQVAsQ0FEa0I7QUFFdEIsU0FBSSxDQUFDLElBQUQsRUFBTyxPQUFPLEdBQVAsQ0FBWDs7QUFFQSxZQUFPLEtBQUssUUFBTCxDQUFjLEtBQUssRUFBTCxFQUFTLE9BQXZCLEtBQW1DLEdBQW5DLENBSmU7S0FBdkI7O0FBT0EsWUFBUSxDQUFSO0FBQ0MsVUFBSyxJQUFMO0FBQ0MsVUFBSSxLQUFLLEtBQUwsS0FBZSxLQUFLLElBQUwsQ0FBVSxZQUFWLENBQWYsQ0FETDtBQUVDLFlBRkQ7QUFERCxVQUlNLEtBQUw7QUFDQyxVQUFJLEtBQUssS0FBTCxLQUFlLEtBQUssSUFBTCxDQUFVLFlBQVYsQ0FBZixDQURMO0FBRUMsWUFGRDtBQUpELFVBT00sUUFBTDtBQUNDLFVBQUksR0FBSixDQUREO0FBRUMsWUFGRDtBQVBELFVBVU0sS0FBTDtBQUNDLFVBQUksV0FBVyxLQUFLLElBQUwsQ0FBVSxVQUFWLElBQXdCLENBQXhCLENBRGhCOztBQUdDLFVBQUksVUFBVSxLQUFLLFNBQUwsRUFBVixDQUhMO0FBSUMsVUFBSSxVQUFVLEtBQUssUUFBTCxFQUFWLENBSkw7O0FBTUMsY0FBUSxLQUFSLElBQWlCLFFBQWpCLENBTkQ7QUFPQyxjQUFRLE1BQVIsSUFBa0IsUUFBbEI7OztBQVBELE9BVUMsR0FBSSxLQUFLLEdBQUwsQ0FBVSxRQUFRLEtBQVIsR0FBZ0IsUUFBUSxLQUFSLEVBQWlCLFFBQVEsTUFBUixHQUFnQixRQUFRLE1BQVIsRUFBaUIsR0FBNUUsQ0FBSjs7O0FBVkQ7QUFWRDtBQXlCRSxVQUFJLGlCQUFFLFFBQUYsQ0FBVyxDQUFYLENBQUosRUFBbUIsSUFBSSxXQUFXLENBQVgsQ0FBSixDQUFuQjtBQUNBLFlBRkQ7QUF4QkQsS0FUUTtBQXFDUixTQUFLLFNBQUwsQ0FBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLENBQTNCLEVBckNROzs7OzZCQXdDQyxHQUFHLEdBQUcsT0FBTztBQUN0QixRQUFJLENBQUMsS0FBSyxNQUFMLEVBQWEsT0FBbEI7QUFDQSxRQUFJLE9BQU8sS0FBSyxNQUFMLENBQVksY0FBWixFQUFQLENBRmtCO0FBR3RCLFFBQUksQ0FBQyxJQUFELEVBQU8sT0FBWDs7Ozs7Ozs7Ozs7OztBQUhzQjs7OzRCQW1CZDtBQUNSLFFBQUksQ0FBQyxLQUFLLE1BQUwsRUFBYSxPQUFPLEtBQVAsQ0FBbEI7O0FBRFEsUUFHSixLQUFLLE1BQUwsRUFDSCxLQUFLLE1BQUwsQ0FBWSxNQUFaLENBQW1CLEtBQUssTUFBTCxDQUFZLGNBQVosRUFBbkIsRUFBaUQsS0FBSyxRQUFMLEVBQWpELEVBREQ7OztBQUhRLFFBT0osQ0FBQyxLQUFLLFVBQUwsRUFBaUI7QUFDckIsVUFBSyxVQUFMLEdBQWtCLDhCQUFvQixLQUFLLEdBQUwsQ0FBdEMsQ0FEcUI7QUFFckIsVUFBSyxVQUFMLENBQWdCLFFBQWhCLENBQXlCLG9CQUF6QixFQUErQyxVQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLE1BQW5CLEVBQTJCLEdBQTNCLEVBQWdDLEtBQWhDLEVBQXVDOzs7QUFDckYsVUFBSSxPQUFPLEtBQUssTUFBTCxDQUFZLEtBQVosQ0FBa0IsT0FBTyxZQUFQLENBQW9CLElBQXBCLENBQWxCLENBQVAsQ0FEaUY7QUFFckYsVUFBSSxDQUFDLEtBQUssVUFBTCxDQUFnQixRQUFoQixJQUE0QixDQUFDLEtBQUssZUFBTCxFQUFzQjtBQUN2RCx1QkFBTSxVQUFOLEdBQW1CLGlCQUFFLEtBQUYsQ0FBUSxZQUFNO0FBQ2hDLFlBQUksZ0JBQU0sVUFBTixFQUFrQjtBQUNyQixnQkFBTyxnQkFBTSxVQUFOLENBRGM7QUFFckIseUJBQU0sTUFBTixDQUFhLEtBQWIsQ0FBbUIsS0FBSyxFQUFMLEVBQVMsTUFBSyxHQUFMLEVBQVUsS0FBSyxXQUFMLENBQWlCLE1BQUssRUFBTCxDQUF2RCxFQUFpRSxNQUFqRSxFQUF5RSxNQUFNLFFBQU4sQ0FBekUsQ0FGcUI7U0FBdEI7UUFEMEIsRUFLeEIsR0FMZ0IsQ0FBbkIsQ0FEdUQ7T0FBeEQ7TUFGOEMsRUFVNUMsSUFWSCxFQUZxQjtBQWFyQixVQUFLLFVBQUwsQ0FBZ0IsUUFBaEIsQ0FBeUIsQ0FBQyxhQUFELEVBQWdCLE9BQWhCLENBQXpCLEVBQW1ELFVBQVMsSUFBVCxFQUFlLEVBQWYsRUFBbUIsTUFBbkIsRUFBMkIsR0FBM0IsRUFBZ0MsS0FBaEMsRUFBdUM7QUFDekYsVUFBSSxDQUFDLG1CQUFTLGNBQVQsQ0FBd0IsS0FBeEIsQ0FBRCxFQUFpQztBQUNwQyx1QkFBTSxNQUFOLENBQWEsSUFBYixHQURvQztPQUFyQztNQURrRCxFQUloRCxJQUpILEVBYnFCO0tBQXRCO0FBbUJBLFNBQUssVUFBTCxDQUFnQixLQUFoQixHQTFCUTtBQTJCUixXQUFPLElBQVAsQ0EzQlE7Ozs7K0JBOEJHLEtBQUs7QUFDaEIsV0FBTyxLQUFLLFdBQUwsQ0FBaUIsV0FBakIsQ0FBNkIsR0FBN0IsQ0FBUCxDQURnQjs7Ozs4QkFJTixPQUFPO0FBQ2pCLFdBQU8sS0FBSyxXQUFMLENBQWlCLFVBQWpCLENBQTRCLEtBQTVCLENBQVAsQ0FEaUI7Ozs7aUNBSUosU0FBUztBQUN0QixXQUFPLEtBQUssV0FBTCxDQUFpQixhQUFqQixDQUErQixPQUEvQixDQUFQLENBRHNCOzs7Ozs7Ozs7Ozs7OzsrQkFZWCxLQUFLLFFBQVEsY0FBYztBQUN0QyxRQUFJLElBQUksS0FBSyxXQUFMLENBQWlCLFNBQWpCLENBQTJCLEdBQTNCLENBQUosQ0FEa0M7QUFFdEMsUUFBSSxLQUFLLGlCQUFFLFVBQUYsQ0FBYSxDQUFiLENBQUwsRUFBc0I7QUFDekIsU0FBSSxFQUFFLE1BQUYsQ0FBSixDQUR5QjtLQUExQjs7QUFGc0MsUUFNbEMsWUFBSixFQUFrQjtBQUNqQixTQUFJLFFBQVEsRUFBRSxLQUFGLENBQVEsYUFBUixDQUFSLENBRGE7QUFFakIsU0FBSSxNQUFNLEVBQU4sQ0FGYTs7Ozs7O0FBR2pCLDJCQUFpQiwrQkFBakIsb0dBQXdCO1dBQWYsbUJBQWU7O0FBQ3ZCLGNBQU8sS0FBSyxTQUFMLENBQWUsQ0FBZixFQUFrQixLQUFLLE1BQUwsR0FBYSxDQUFiLENBQWxCLENBQWtDLElBQWxDLEVBQVAsQ0FEdUI7QUFFdkIsV0FBSSxJQUFKLElBQVksYUFBYSxpQkFBRSxTQUFGLENBQVksWUFBWSxJQUFaLENBQXpCLEVBQTRDLElBQTVDLENBQVosQ0FGdUI7T0FBeEI7Ozs7Ozs7Ozs7Ozs7O01BSGlCOztBQU9qQixTQUFJLGlCQUFFLFFBQUYsQ0FBVyxDQUFYLEVBQWMsRUFBQyxhQUFhLGdCQUFiLEVBQWYsRUFBK0MsR0FBL0MsQ0FBSixDQVBpQjtLQUFsQjtBQVNBLFdBQU8sQ0FBUCxDQWZzQzs7OzsyQkFrQi9COzs7NkJBQ0U7OztTQXJMTDs7O0FBdUxOLFdBQVUsUUFBVixHQUFxQjtBQUNwQixvQkFBa0IsS0FBbEI7QUFDQSxlQUFhLEtBQWI7QUFDQSxnQkFBYyxJQUFkO0FBQ0EsYUFBVyxJQUFYO0FBQ0EsZUFBYSxLQUFiO0FBQ0EsaUJBQWUsSUFBZjtBQUNBLFlBQVUsRUFBVjtBQUNBLFdBQVMsR0FBVDtBQUNBLFdBQVMsR0FBVDtBQUNBLGNBQVksR0FBWjtBQUNBLGVBQWEsR0FBYjtFQVhEOzttQkFjZSxVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDek1UOzs7Ozs7Ozs7Ozs0QkFDSTtBQUNSLFFBQUksb0NBRkEsOENBRUEsQ0FESTtBQUVSLFFBQUksTUFBSixFQUFZO0FBQ1gsU0FBSSxPQUFPLEtBQUssTUFBTCxDQUFZLGNBQVosRUFBUCxDQURPO0FBRVgsU0FBSSxNQUFNLDJCQUFpQixrQ0FBakIsQ0FBTixDQUZPO0FBR1gsU0FBSSxNQUFKLENBQVcsS0FBSyxVQUFMLEVBQVgsRUFIVztBQUlYLFNBQUksTUFBSixDQUFXLEtBQUssTUFBTCxDQUFZLElBQVosQ0FBWCxFQUpXO0FBS1gsU0FBSSxNQUFKLENBQVcsUUFBWCxFQUxXO0FBTVgsVUFBSyxHQUFMLENBQVMsU0FBVCxHQUFxQixJQUFJLFFBQUosRUFBckIsQ0FOVztLQUFaOzs7O2dDQVVZO0FBQ1osUUFBSSxNQUFNLDJCQUFpQixRQUFqQixDQUFOLENBRFE7QUFFWixRQUFJLE1BQUosQ0FBVyxLQUFLLFdBQUwsQ0FBaUIsTUFBakIsRUFBeUIsS0FBSyxJQUFMLENBQVUsVUFBVixDQUF6QixDQUFYLEVBRlk7QUFHWixRQUFJLFVBQVUsS0FBSyxLQUFMLEdBQWEsT0FBYixDQUhGO0FBSVosUUFBSSxRQUFRLE1BQVIsR0FBaUIsQ0FBakIsRUFDSCxJQUFJLE1BQUosQ0FBVyxRQUFRLGFBQVIsQ0FBc0IsT0FBdEIsQ0FBWCxFQUREO0FBRUEsUUFBSSxNQUFKLENBQVcsU0FBWCxFQU5ZO0FBT1osV0FBTyxJQUFJLFFBQUosRUFBUCxDQVBZOzs7O2lDQVVRLFNBQVM7QUFDN0IsUUFBSSxNQUFNLDRCQUFOO1FBQTBCLGFBQTlCO1FBQW9DLGFBQXBDLENBRDZCOzs7Ozs7QUFFN0IsMEJBQW1CLGlDQUFuQixvR0FBNEI7VUFBbkIscUJBQW1COztBQUMzQixhQUFPLEtBQUssU0FBTCxDQUFlLFFBQWYsRUFBeUIsTUFBekIsQ0FBUCxDQUQyQjtBQUUzQixhQUFPLE9BQU8sS0FBUCxDQUZvQjtBQUczQixVQUFJLENBQUMsaUJBQUUsUUFBRixDQUFXLElBQVgsQ0FBRCxFQUNILE9BQU8sS0FBSyxXQUFMLENBQWlCLElBQWpCLENBQVAsQ0FERDtBQUVBLGFBQU8sS0FBSyxPQUFMLENBQWEsYUFBYixFQUE0QixJQUE1QixDQUFQLENBTDJCO0FBTTNCLFVBQUksTUFBSixDQUFXLElBQVgsRUFOMkI7TUFBNUI7Ozs7Ozs7Ozs7Ozs7O0tBRjZCOztBQVU3QixXQUFPLElBQUksUUFBSixFQUFQLENBVjZCOzs7OytCQWFYLEtBQUs7QUFDdkIsV0FBTyxLQUFLLFNBQUwsQ0FBZSxPQUFmLEVBQXdCLEdBQXhCLENBQVAsQ0FEdUI7Ozs7K0JBSUwsT0FBTztBQUN6QixRQUFJLFdBQVcsS0FBSyxTQUFMLENBQWUsTUFBTSxJQUFOLENBQTFCLENBRHFCO0FBRXpCLFFBQUksaUJBQUUsUUFBRixDQUFXLFFBQVgsQ0FBSixFQUNDLFdBQVcsaUJBQUUsUUFBRixDQUFXLFFBQVgsQ0FBWCxDQUREO0FBRUEsV0FBTyxTQUFTLEtBQVQsQ0FBUCxDQUp5Qjs7Ozs4QkFPUixPQUFPO0FBQ3hCLFFBQUksU0FBUyxNQUFNLE1BQU4sQ0FEVztBQUV4QixRQUFJLENBQUMsTUFBRCxJQUFXLE9BQU8sTUFBUCxJQUFpQixDQUFqQixFQUFvQixPQUFPLEVBQVAsQ0FBbkM7O0FBRUEsUUFBSSxNQUFNLDJCQUFpQixHQUFqQixDQUFOO1FBQTZCLGNBQWpDLENBSndCO0FBS3hCLFNBQUssSUFBSSxJQUFJLENBQUosRUFBTyxJQUFJLE9BQU8sTUFBUCxFQUFlLEdBQW5DLEVBQXdDO0FBQ3ZDLGFBQVEsT0FBTyxDQUFQLENBQVIsQ0FEdUM7QUFFdkMsU0FBSSxLQUFLLENBQUwsRUFDSCxJQUFJLE1BQUosQ0FBVyxNQUFNLENBQU4sQ0FBWCxDQUFvQixNQUFwQixDQUEyQixHQUEzQixFQUFnQyxNQUFoQyxDQUF1QyxNQUFNLENBQU4sQ0FBdkMsQ0FERCxLQUdDLElBQUksTUFBSixDQUFXLElBQVgsRUFBaUIsTUFBakIsQ0FBd0IsTUFBTSxDQUFOLENBQXhCLENBQWlDLE1BQWpDLENBQXdDLEdBQXhDLEVBQTZDLE1BQTdDLENBQW9ELE1BQU0sQ0FBTixDQUFwRCxDQUhEO0tBRkQ7QUFPQSxRQUFJLElBQUksSUFBSSxRQUFKLEVBQUosQ0Fab0I7QUFheEIsUUFBSSxLQUFKLEdBYndCO0FBY3hCLFFBQUksTUFBTSxNQUFOLElBQWdCLE1BQU0sTUFBTixDQUFhLFNBQWIsRUFDbkIsSUFBSSxNQUFKLENBQVcsK0ZBQVgsRUFDRSxNQURGLENBQ1MsQ0FEVCxFQUNZLE1BRFosQ0FDbUIsS0FEbkIsRUFERDtBQUdBLFFBQUksTUFBSixDQUFXLFdBQVgsRUFBd0IsTUFBeEIsQ0FBK0IsQ0FBL0IsRUFBa0MsTUFBbEMsQ0FBeUMsR0FBekMsRUFqQndCO0FBa0J4QixRQUFJLE1BQU0sV0FBTixJQUFxQixNQUFNLFNBQU4sRUFBaUI7QUFDekMsU0FBSSxNQUFKLENBQVcsVUFBWCxFQUR5QztBQUV6QyxTQUFJLE1BQU0sV0FBTixFQUNILElBQUksTUFBSixDQUFXLHFCQUFYLEVBQWtDLE1BQWxDLENBQXlDLGlCQUFFLFFBQUYsQ0FBVyxNQUFNLFdBQU4sQ0FBWCxHQUFnQyxNQUFNLFdBQU4sR0FBb0IsTUFBTSxXQUFOLENBQWtCLEVBQWxCLENBQTdGLENBQW1ILE1BQW5ILENBQTBILElBQTFILEVBREQ7QUFFQSxTQUFJLE1BQU0sU0FBTixFQUNILElBQUksTUFBSixDQUFXLG1CQUFYLEVBQWdDLE1BQWhDLENBQXVDLGlCQUFFLFFBQUYsQ0FBVyxNQUFNLFNBQU4sQ0FBWCxHQUE4QixNQUFNLFNBQU4sR0FBa0IsTUFBTSxTQUFOLENBQWdCLEVBQWhCLENBQXZGLENBQTJHLE1BQTNHLENBQWtILElBQWxILEVBREQ7QUFFQSxTQUFJLE1BQUosQ0FBVyxHQUFYLEVBTnlDO0tBQTFDO0FBUUEsUUFBSSxNQUFKLENBQVcsSUFBWCxFQTFCd0I7QUEyQnhCLFdBQU8sSUFBSSxRQUFKLEVBQVAsQ0EzQndCOzs7O2lDQThCSixJQUFJLFNBQVM7QUFDakMsUUFBSSxNQUFNLDRCQUFOLENBRDZCO0FBRWpDLFFBQUksTUFBSixDQUFXLE9BQVgsRUFBb0IsTUFBcEIsQ0FBMkIsT0FBM0IsRUFBb0MsTUFBcEMsQ0FBMkMsT0FBM0MsRUFGaUM7QUFHakMsUUFBSSxPQUFPLG1CQUFTLGFBQVQsQ0FBdUIsS0FBdkIsRUFBOEIsSUFBOUIsRUFBb0MsSUFBcEMsRUFBMEMsSUFBSSxRQUFKLEVBQTFDLEVBQTBELGlCQUExRCxDQUhzQjs7QUFLakMsV0FBTyxLQUFLLFVBQUw7QUFDTixRQUFHLFdBQUgsQ0FBZSxLQUFLLFVBQUwsQ0FBZjtLQURELE9BRU8sRUFBUCxDQVBpQzs7Ozs4QkFVaEIsSUFBSSxTQUFTO0FBQzlCLFFBQUksbUJBQVMsSUFBVCxFQUFlOztBQUVsQixTQUFJLGNBQUosQ0FGa0I7QUFHbEIsWUFBTyxRQUFRLEdBQUcsU0FBSDtBQUNkLFNBQUcsV0FBSCxDQUFlLEtBQWY7TUFERCxPQUVBLENBQVEsYUFBUixDQUFzQixFQUF0QixFQUEwQixPQUExQixFQUxrQjtLQUFuQixNQU9DLEdBQUcsU0FBSCxHQUFlLE9BQWYsQ0FQRDtBQVFBLFdBQU8sRUFBUCxDQVQ4Qjs7OztTQXZGMUI7OztBQW1HTixTQUFRLFNBQVIsR0FBb0I7QUFDbkIsU0FBTywrR0FBUDtBQUNBLFNBQU8sNEdBQVA7QUFDQSxTQUFPLG1FQUFQO0FBQ0EsV0FBUywyREFBVDtBQUNBLGFBQVcsNEZBQVg7QUFDQSxZQUFVLG9GQUFWO0FBQ0EsV0FBUyw2RUFBVDtBQUNBLFdBQVMsaUJBQVMsTUFBVCxFQUFpQjtBQUN6QixPQUFJLFdBQVcsT0FBTyxTQUFQLElBQW9CLE9BQXBCLElBQStCLE9BQU8sU0FBUCxJQUFvQixPQUFwQixDQURyQjtBQUV6QixPQUFJLFFBQUosRUFDQyxPQUFPLGtKQUFQLENBREQsS0FHQyxPQUFPLCtJQUFQLENBSEQ7R0FGUTtBQU9ULFdBQVMsaUJBQVMsS0FBVCxFQUFnQjtBQUN4QixPQUFJLE1BQU0sMkJBQWlCLG1CQUFqQixDQUFOLENBRG9COzs7Ozs7QUFFeEIsMEJBQWUsTUFBTSxNQUFOLDJCQUFmO1NBQVM7O0FBQ1IsU0FBSSxNQUFKLENBQVcsR0FBRyxDQUFILENBQVgsRUFBa0IsTUFBbEIsQ0FBeUIsR0FBekIsRUFBOEIsTUFBOUIsQ0FBcUMsR0FBRyxDQUFILENBQXJDLEVBQTRDLE1BQTVDLENBQW1ELEdBQW5EO0tBREQ7Ozs7Ozs7Ozs7Ozs7O0lBRndCOztBQUl4QixPQUFJLFVBQUosR0FKd0I7QUFLeEIsT0FBSSxNQUFKLENBQVcsS0FBWCxFQUx3QjtBQU14QixVQUFPLElBQUksUUFBSixFQUFQLENBTndCO0dBQWhCO0FBUVQsU0FBTyxlQUFTLE1BQVQsRUFBaUI7QUFDdkIsVUFBTyx3SUFBd0ksT0FBTyxLQUFQLEdBQWUsS0FBdkosQ0FEZ0I7R0FBakI7QUFHUCxVQUFRLGdCQUFTLE1BQVQsRUFBaUI7QUFDeEIsVUFBTyxxQkFDSyxPQUFPLEVBQVAseUJBQTJCLE9BQU8sSUFBUCwwQkFBOEIsT0FBTyxJQUFQLGtCQUFzQixPQUFPLEdBQVAsQ0FBVyxDQUFYLHFCQUNyRixPQUFPLEdBQVAsQ0FBVyxDQUFYLHNDQUF5QyxPQUFPLE9BQVAsQ0FBZSxDQUFmLFNBQW9CLE9BQU8sT0FBUCxDQUFlLENBQWYsU0FBb0IsT0FBTyxPQUFQLENBQWUsS0FBZixTQUF3QixPQUFPLE9BQVAsQ0FBZSxNQUFmLDRDQUNsRixPQUFPLElBQVAscUJBQTZCLE9BQU8sSUFBUCxPQUE3QixHQUE4QyxFQUE5QywyQkFIdEIsQ0FJUCxJQUpPLEVBQVAsQ0FEd0I7R0FBakI7QUFPUixRQUFNLGNBQVMsSUFBVCxFQUFlO0FBQ3BCLFVBQU8sNENBQzBCLHdCQUFpQiw2SUFFN0IscUVBQ1AsOEVBQ0Esb0JBQWEsNkRBTHBCLENBTUcsSUFOSCxFQUFQLENBRG9CO0dBQWY7QUFTTixTQUFPLGlCQUFFLFFBQUYsQ0FBVyxpaUNBa0JqQixJQWxCaUIsRUFBWCxFQWtCRSxFQUFDLFVBQVUsTUFBVixFQWxCSCxDQUFQO0VBMUNEOzttQkErRGUsUSIsImZpbGUiOiJxZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInFncmFwaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicWdyYXBoXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzRjNWI1YWJlOWQ3YjNiZjUyMThcbiAqKi8iLCJpbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZ3JhcGgvR3JhcGhcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL2dyYXBoL0VsZW1lbnRcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL2dyYXBoL0VkZ2VcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi92aWV3L0xhYmVsXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi92aWV3L0xpbmtcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcbmltcG9ydCBHcmFwaFZpZXcgZnJvbSBcIi4vdmlldy9HcmFwaFZpZXdcIjtcbmltcG9ydCBTVkdWaWV3IGZyb20gXCIuL3ZpZXcvU1ZHVmlld1wiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TGluayxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0RWxlbWVudCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRHcmFwaFZpZXcsXG5cdFNWR1ZpZXdcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtib3VuZHMud2lkdGggKiBnZW9tZXRyeS54ICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCxcblx0XHRcdGJvdW5kcy5oZWlnaHQgKiBnZW9tZXRyeS55ICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCpzY2FsZSt0WzBdLCBvLnkqc2NhbGUrdFsxXSwgby53aWR0aCpzY2FsZSwgby5oZWlnaHQqc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gW29bMF0qc2NhbGUrdFswXSwgb1sxXSpzY2FsZSt0WzFdXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHNjYWxlZCwgaS5lLiwgcmVsYXRpdmUgcG9zaXRpb24gY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHRzY2FsZTogZnVuY3Rpb24odmlldywgbykge1xuXHRcdHZhciBzY2FsZSA9IHZpZXcuc2NhbGUoKTtcblx0XHR2YXIgdCA9IHZpZXcudHJhbnNsYXRlKCk7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdLXRbMF0pL3NjYWxlLCAob1sxXS10WzFdKS9zY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldE9ialByb3BlcnR5OiBmdW5jdGlvbihvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLmdldFByb3BlcnR5ICYmIF8uaXNGdW5jdGlvbihvYmouZ2V0UHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIG9iai5nZXRQcm9wZXJ0eShwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzaW1pbGFyaXR5IG9mIHRoaXMgUmF5IHdpdGggYW5vdGhlci5cblx0ICogU2ltaWxhcml0eSBpcyBkZWZpbmVkIGFzIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgZG90UHJvZHVjdCgpXG5cdCAqIEBwYXJhbSBwMlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0c2ltaWxhcml0eShwMikge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLmRvdFByb2R1Y3QocDIpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiBcIlBvaW50Ont4PVwiICsgdGhpcy54ICsgXCI7eT1cIiArIHRoaXMueSArIFwifVwiO1xuXHR9XG59XG5cblBvaW50LlcgPSBuZXcgUG9pbnQoLTEsIDApO1xuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xuUG9pbnQuRSA9IG5ldyBQb2ludCgxLCAwKTtcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XG5Qb2ludC5TRSA9IG5ldyBQb2ludCgxLCAxKTtcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcblx0LyoqXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIGEgZ2l2ZW4gcG9pbnQgb2YgYSBnaXZlbiByZWN0YW5nbGVcblx0ICovXG5cdGNvbnRhaW5zKGVsKSB7XG5cdFx0bGV0IHcgPSBlbC53aWR0aCB8fCAwO1xuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XG5cdFx0bGV0IGxlZnQgPSBlbC54IC0gdy8yO1xuXHRcdGxldCByaWdodCA9IGVsLnggKyB3LzI7XG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XG5cdFx0bGV0IGJvdHRvbSA9IGVsLnkgKyBoLzI7XG5cdFx0cmV0dXJuIChyaWdodCA8PSB0aGlzLnJpZ2h0KSAmJiAobGVmdCA+PSB0aGlzLmxlZnQpICYmXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWFsdGUgdGhlIGRpc3RhbmNlIHRvIGEgcG9pbnQuIDAgaWYgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHRpZiAodGhpcy5jb250YWlucyhwdCkpIHJldHVybiAwO1xuXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcblx0XHRcdGlmIChwdC55IDwgdGhpcy50b3ApXG5cdFx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXG5cdFx0XHRcdHJldHVybiB0aGlzLmxlZnQgLSBwdC54O1xuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKSk7XG5cdFx0fVxuXHRcdGlmIChwdC54IDw9IHRoaXMucmlnaHQpIHtcblx0XHRcdGlmIChwdC55IDw9IHRoaXMudG9wKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xuXHRcdFx0cmV0dXJuIHB0LnkgLSB0aGlzLmJvdHRvbTtcblx0XHR9XG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApKTtcblx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcblx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKSk7XG5cdH1cblxuXHQvKipcblx0ICogR2l2ZW4gdHdvIHBvaW50cywgd2Ugd2FudCB0byBkZXRlY3Qgd2hldGhlciB0aGUgbGluZSBqb2luaW5nIHRoZSBwdHMgaW50ZXJzZWN0XG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cblx0ICpcblx0ICogQHJldHVybiBpbnQgdGhlIHNpZGUgb2YgdGhlIGludGVyc2VjdGlvbjogLTE6IG5vIGludGVyc2VjdGlvbiwgMDogbGVmdCwgMTogdG9wLCAyOiByaWdodCwgMzogYm90dG9tLCA0OiBjb250YWlubWVudC5cblx0ICovXG5cdGRldGVjdEludGVyc2VjdGlvbihwdDEsIHB0Mikge1xuXHRcdHZhciBob3Jpem9udGFsID0gcHQxLnkgPT0gcHQyLnk7XG5cdFx0dmFyIGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcblx0XHR2YXIgY29udGFpbnMyID0gdGhpcy5jb250YWlucyhwdDIpO1xuXHRcdGlmIChjb250YWluczEgJiYgY29udGFpbnMyKSByZXR1cm4gNDtcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XG5cdFx0XHRpZiAoaG9yaXpvbnRhbCAmJiAocHQxLnkgPj0gdGhpcy50b3AgJiYgcHQxLnkgPD0gdGhpcy5ib3R0b20pKSB7XG5cdFx0XHRcdGlmIChwdDEueCA8IHRoaXMubGVmdCAmJiBwdDIueCA+IHRoaXMucmlnaHQpXG5cdFx0XHRcdFx0cmV0dXJuIDA7XG5cdFx0XHRcdGlmIChwdDEueCA+IHRoaXMucmlnaHQgJiYgcHQyLnggPCB0aGlzLmxlZnQpXG5cdFx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIWhvcml6b250YWwgJiYgKHB0MS54ID49IHRoaXMubGVmdCAmJiBwdDEueCA8PSB0aGlzLnJpZ2h0KSkge1xuXHRcdFx0XHRpZiAocHQxLnkgPCB0aGlzLnRvcCAmJiBwdDIueSA+IHRoaXMuYm90dG9tKVxuXHRcdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0XHRpZiAocHQxLnkgPiB0aGlzLmJvdHRvbSAmJiBwdDIueSA8IHRoaXMudG9wKVxuXHRcdFx0XHRcdHJldHVybiAzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIC0xO1xuXHRcdH1cblxuXHRcdHZhciBvdXRQdCA9IGNvbnRhaW5zMSA/IHB0MiA6IHB0MTtcblx0XHRpZiAoaG9yaXpvbnRhbCkge1xuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxuXHRcdFx0XHRyZXR1cm4gMjtcblx0XHRcdHJldHVybiAwO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAob3V0UHQueSA8IHRoaXMudG9wKVxuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdHJldHVybiAzO1xuXHRcdH1cblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnUmVjdGFuZ2xlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHR2YXIgeCA9IHJlY3QueDtcblx0XHR2YXIgeSA9IHJlY3QueTtcblx0XHR2YXIgZHggPSBwdC54IC0geDtcblx0XHR2YXIgZHkgPSBwdC55IC0geTtcblx0XHR2YXIgYWxwaGEgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XG5cdFx0dmFyIHAgPSBuZXcgUG9pbnQoMCwgMCk7XG5cdFx0dmFyIHBpID0gTWF0aC5QSTtcblx0XHR2YXIgcGkyID0gTWF0aC5QSS8yO1xuXHRcdHZhciBiZXRhID0gcGkyIC0gYWxwaGE7XG5cdFx0dmFyIHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcblxuXHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcblx0XHRcdC8vIExlZnQgZWRnZVxuXHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xuXHRcdFx0cC55ID0geSAtIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xuXHRcdFx0Ly8gVG9wIEVkZ2Vcblx0XHRcdHAueSA9IHJlY3QudG9wO1xuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XG5cdFx0XHQvLyBSaWdodCBFZGdlXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xuXHRcdFx0cC55ID0geSArIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBCb3R0b20gRWRnZVxuXHRcdFx0cC55ID0gcmVjdC5ib3R0b207XG5cdFx0XHRwLnggPSB4ICsgcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XG5cdFx0fVxuXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcblx0XHRcdGlmIChwdC54ID49IHJlY3QubGVmdCAmJlxuXHRcdFx0XHRwdC54IDw9IHJlY3QucmlnaHQpIHtcblx0XHRcdFx0cC54ID0gcHQueDtcblx0XHRcdH0gZWxzZSBpZiAocHQueSA+PSByZWN0LnRvcCAmJlxuXHRcdFx0XHRwdC55IDw9IHJlY3QuYm90dG9tKSB7XG5cdFx0XHRcdHAueSA9IHB0Lnk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwdC54IDwgcmVjdC5sZWZ0KSB7XG5cdFx0XHRcdHAueCA9IHJlY3QubGVmdDtcblx0XHRcdH0gZWxzZSBpZiAocHQueCA+IHJlY3QucmlnaHQpIHtcblx0XHRcdFx0cC54ID0gcmVjdC5yaWdodDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHB0LnkgPCByZWN0LnRvcCkge1xuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcblx0XHRcdH0gZWxzZSBpZiAocHQueSA+IHJlY3QuYm90dG9tKSB7XG5cdFx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBwO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgcDEgYW5kIHAyXG5cdCAqL1xuXHRzdGF0aWMgZ2V0Qm91bmRpbmdSZWN0YW5nbGUocHRzLCBtYXJnaW4pIHtcblx0XHRpZiAoIXB0cyB8fCBwdHMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XG5cdFx0aWYgKCFfLmlzQXJyYXkobWFyZ2luKSlcblx0XHRcdG1hcmdpbiA9IFttYXJnaW4sIG1hcmdpbiwgbWFyZ2luLCBtYXJnaW5dO1xuXHRcdHZhciBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcblx0XHR2YXIgbWF4ID0gW3B0c1swXS54LCBwdHNbMF0ueV07XG5cdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBwID0gcHRzW2ldO1xuXHRcdFx0aWYgKHAueCA8IG1pblswXSkge1xuXHRcdFx0XHRtaW5bMF0gPSBwLng7XG5cdFx0XHR9XG5cdFx0XHRpZiAocC55IDwgbWluWzFdKSB7XG5cdFx0XHRcdG1pblsxXSA9IHAueTtcblx0XHRcdH1cblx0XHRcdGlmIChwLnggPiBtYXhbMF0pIHtcblx0XHRcdFx0bWF4WzBdID0gcC54O1xuXHRcdFx0fVxuXHRcdFx0aWYgKHAueSA+IG1heFsxXSkge1xuXHRcdFx0XHRtYXhbMV0gPSBwLnk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdG1pblswXSA9IG1pblswXSAtIG1hcmdpblswXTtcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XG5cdFx0bWF4WzBdID0gbWF4WzBdICsgbWFyZ2luWzJdO1xuXHRcdG1heFsxXSA9IG1heFsxXSArIG1hcmdpblszXTtcblx0XHR2YXIgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XG5cdFx0dmFyIGggPSBNYXRoLmFicyhtYXhbMV0gLSBtaW5bMV0pO1xuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pblswXSArIHcvMiwgbWluWzFdICsgaC8yLCB3LCBoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXG5cdCAqIEBwYXJhbSByZWN0c1xuXHQgKi9cblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XG5cdFx0dmFyIG1pbnggPSBudWxsLCBtaW55ID0gbnVsbCwgbWF4eCA9IC1JbmZpbml0eSwgbWF4eSA9IC1JbmZpbml0eTtcblx0XHRfLmVhY2gocmVjdHMsIGZ1bmN0aW9uIChyZWN0KSB7XG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XG5cdFx0XHRtaW55ID0gbWlueSB8fCByZWN0Lnk7XG5cdFx0XHRtaW54ID0gTWF0aC5taW4obWlueCwgcmVjdC54KTtcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xuXHRcdFx0bWF4eCA9IE1hdGgubWF4KG1heHgsIHJlY3QucmlnaHQoKSk7XG5cdFx0XHRtYXh5ID0gTWF0aC5tYXgobWF4eSwgcmVjdC5ib3R0b20oKSk7XG5cdFx0fSk7XG5cdFx0bWlueCA9IG1pbnggfHwgMDtcblx0XHRtaW55ID0gbWlueSB8fCAwO1xuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1JlY3RhbmdsZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn1cbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5jbGFzcyBTaGFwZSB7XG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Xy5kZWZhdWx0cyh0aGlzLCBjb25maWcsIHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IHRvcCgpIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHgtY29vcmQgb2YgbGVmdCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgcmlnaHQoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cblxuXHRnZXQgY2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxuXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cblxuXHRjb250YWlucyhlbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvKipcblx0ICogVGhpcyB3aWxsIGdlbmVyYXRlIG4gcG9ydHMgb24gdGhlIHNoYXBlLlxuXHQgKi9cblx0Z2V0UmVndWxhclBvaW50cyhuKSB7cmV0dXJuIG51bGw7fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIGJvdW5kYXJ5IG9mIHRoaXMgc2hhcGUgYW5kIHRoZSBsaW5lIGNvbm5lY3RpbmcgKHgseSkgd2l0aCB0aGUgcmVmUHQuXG5cdCAqIEBwYXJhbSByZWZQdFxuXHQgKiBAcmV0dXJucyB7bnVsbH1cblx0ICovXG5cdGdldFBlcmltZXRlcihyZWZQdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh2aWV3LmdldFRlbXBsYXRlKHRoaXMuY29uc3RydWN0b3IubmFtZSwgdGhpcykpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRTaGFwZShuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG5cblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcblx0XHRyZWdpc3RyeVtuYW1lXSA9IGM7XG5cdH1cblxuXHRzdGF0aWMgcmVtb3ZlU2hhcGUobmFtZSkge1xuXHRcdGRlbGV0ZSByZWdpc3RyeVtuYW1lXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcblxuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9TaGFwZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBkb20gVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHRpc0lFOiAoZnVuY3Rpb24gKCkge1xuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cblx0XHRpZiAoSWR4ID4gMClcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XG5cblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxuXHRcdFx0cmV0dXJuIDExO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSkoKSxcblxuXHRpc0ZpcmVGb3ggOiAoZnVuY3Rpb24oKXtcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblx0fSkoKSxcblxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcblx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xuXHRcdGlmIChodG1sKVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcblx0XHRyZXR1cm4gdGVtcC5jaGlsZE5vZGVzO1xuXHR9LFxuXG5cdHNldEVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgYXR0cmlicywgc3R5bGVzKSB7XG5cdFx0aWYgKGF0dHJpYnMpIHtcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHQgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHRcdFx0IH0pO1xuXHRcdH1cblx0XHRpZiAoc3R5bGVzKSB7XG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcblx0fSxcblxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHR3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSlcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXG5cdCAqIEBwYXJhbSBlbCB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3BdO1xuXHR9LFxuXG5cdGdldENlbnRlclBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XG5cdH0sXG5cblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdGlmICh5KSBlbC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0fSxcblxuXHRnZXRTaXplOiBmdW5jdGlvbihlbCkge1xuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xuXHRcdHJldHVybiBbdywgaF07XG5cdH0sXG5cblx0cmVzaXplOiBmdW5jdGlvbihlbCwgdywgaCkge1xuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHR9LFxuXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubGlzdCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QgPSBbXTtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcblxuXHRcdHZhciBsaXN0ID0gdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3Q7XG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcblx0XHRcdFx0XHQvLyBmb3IgbWVtb3J5IGNvbnN1bXB0aW9uIHJlYXNvbnNcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcblx0XHRcdGltZy5uYW1lID0gYXJyYXlbaV07XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSBzcmNcblx0ICovXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XG5cdFx0aWYgKHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBrZXkgZXZlbnQgaXMgZnJvbSBpbnB1dCwgdGV4dGFyZWEgb3Igc2VsZWN0LlxuXHQgKiBAcGFyYW0gZSAgaW5wdXQgZXZlbnRcblx0ICovXG5cdGV2ZW50RnJvbUlucHV0OiBmdW5jdGlvbihlKXtcblx0XHR2YXIgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWU7XG5cdFx0cmV0dXJuICh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcpO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0RvbVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIEEgc3RyaW5nIGJ1ZmZlciBmb3IgZmFzdCBzdHJpbmcgbWFuaXB1bGF0aW9uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0cmluZ0J1ZmZlciB7XG5cdGNvbnN0cnVjdG9yKHN0cikge1xuXHRcdHRoaXMuYnVmZmVyID0gW107XG5cdFx0aWYgKHN0cilcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3RyKTtcblx0fVxuXG5cdGFwcGVuZChzdHVmZikge1xuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChzdHVmZik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0cHJlcGVuZChzdHVmZikge1xuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gc3R1ZmYuY29uY2F0KHRoaXMuYnVmZmVyKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdGNsZWFyKCkge1xuXHRcdHRoaXMuYnVmZmVyID0gW107XG5cdH1cblxuXHRyZW1vdmVMYXN0KCkge1xuXHRcdHRoaXMuYnVmZmVyLnBvcCgpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9TdHJpbmcoc2VwKSB7XG5cdFx0aWYgKCFzZXApIHNlcCA9ICcnO1xuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5qb2luKHNlcCk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xuXHRjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgbGluZVxuXHQgKi9cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlKHRoaXMuZW5kKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIG9mIHRoaXMgbGluZSB0byB0aGUgcG9pbnQuXG5cdCAqL1xuXHRkaXN0YW5jZShwdCkge1xuXHRcdHZhciB4ID0gdGhpcy5zdGFydC5kaXN0YW5jZShwdCk7XG5cdFx0aWYgKHggPT0gMCkgcmV0dXJuIDA7XG5cblx0XHR2YXIgbCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0dmFyIGNvc2EgPSBuZXcgUG9pbnQoKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpIC8gbCwgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpIC8gbCkuZG90UHJvZHVjdChcblx0XHRcdG5ldyBQb2ludChwdC54IC8geCwgcHQueSAvIHgpKTtcblxuXHRcdHJldHVybiB4ICogTWF0aC5zcXJ0KDEgLSBjb3NhICogY29zYSk7XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb246IGludGVyc2VjdGlvblxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGxpbmVzIGFzIGFuIDxteFBvaW50Pi5cblx0ICpcblx0ICogUGFyYW1ldGVyczpcblx0ICpcblx0ICogeDAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgxIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkxIC0gWS1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHgyIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkyIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgzIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MyAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICovXG5cdHN0YXRpYyBpbnRlcnNlY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG5cdFx0dmFyIGRlbm9tID0gKCh5MyAtIHkyKSAqICh4MSAtIHgwKSkgLSAoKHgzIC0geDIpICogKHkxIC0geTApKTtcblx0XHR2YXIgbnVtZV9hID0gKCh4MyAtIHgyKSAqICh5MCAtIHkyKSkgLSAoKHkzIC0geTIpICogKHgwIC0geDIpKTtcblx0XHR2YXIgbnVtZV9iID0gKCh4MSAtIHgwKSAqICh5MCAtIHkyKSkgLSAoKHkxIC0geTApICogKHgwIC0geDIpKTtcblxuXHRcdHZhciB1YSA9IG51bWVfYSAvIGRlbm9tO1xuXHRcdHZhciB1YiA9IG51bWVfYiAvIGRlbm9tO1xuXG5cdFx0aWYgKHVhID49IDAuMCAmJiB1YSA8PSAxLjAgJiYgdWIgPj0gMC4wICYmIHViIDw9IDEuMCkge1xuXHRcdFx0Ly8gR2V0IHRoZSBpbnRlcnNlY3Rpb24gcG9pbnRcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25YID0geDAgKyB1YSAqICh4MSAtIHgwKTtcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25ZID0geTAgKyB1YSAqICh5MSAtIHkwKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChpbnRlcnNlY3Rpb25YLCBpbnRlcnNlY3Rpb25ZKTtcblx0XHR9XG5cblx0XHQvLyBObyBpbnRlcnNlY3Rpb25cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluZTp7c3RhcnQ9JyArIHRoaXMuc3RhcnQgKyAnO2VuZD0nICsgdGhpcy5lbmQgKyAnfSc7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmUuanNcbiAqKi8iLCJpbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGxpcHNlIGV4dGVuZHMgU2hhcGUge1xuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9Jztcblx0fVxuXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xuXHRcdHZhciBhID0gcmVjdC53aWR0aCAvIDI7XG5cdFx0dmFyIGIgPSByZWN0LmhlaWdodCAvIDI7XG5cdFx0dmFyIGN4ID0gcmVjdC54O1xuXHRcdHZhciBjeSA9IHJlY3QueTtcblx0XHR2YXIgcHggPSBwdC54O1xuXHRcdHZhciBweSA9IHB0Lnk7XG5cblx0XHQvLyBDYWxjdWxhdGVzIHN0cmFpZ2h0IGxpbmUgZXF1YXRpb24gdGhyb3VnaFxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXG5cdFx0dmFyIGR4ID0gcGFyc2VJbnQocHggLSBjeCk7XG5cdFx0dmFyIGR5ID0gcGFyc2VJbnQocHkgLSBjeSk7XG5cblx0XHR2YXIgdHgsIHR5O1xuXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChjeCwgY3kgKyBiICogZHkgLyBNYXRoLmFicyhkeSkpO1xuXHRcdH0gZWxzZSBpZiAoZHggPT0gMCAmJiBkeSA9PSAwKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XG5cdFx0fVxuXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcblx0XHRcdGlmIChweSA+PSByZWN0LnRvcCAmJiBweSA8PSByZWN0LmJvdHRvbSkge1xuXHRcdFx0XHR0eSA9IHB5IC0gY3k7XG5cdFx0XHRcdHR4ID0gTWF0aC5zcXJ0KGEgKiBhICogKDEgLSAodHkgKiB0eSkgLyAoYiAqIGIpKSkgfHwgMDtcblxuXHRcdFx0XHRpZiAocHggPD0gcmVjdC5sZWZ0KSB7XG5cdFx0XHRcdFx0dHggPSAtdHg7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4ICsgdHgsIHB5KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHB4ID49IHJlY3QubGVmdCAmJiBweCA8PSByZWN0LnJpZ2h0KSB7XG5cdFx0XHRcdHR4ID0gcHggLSBjeDtcblx0XHRcdFx0dHkgPSBNYXRoLnNxcnQoYiAqIGIgKiAoMSAtICh0eCAqIHR4KSAvIChhICogYSkpKSB8fCAwO1xuXG5cdFx0XHRcdGlmIChweSA8PSByZWN0LnRvcCkge1xuXHRcdFx0XHRcdHR5ID0gLXR5O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG5ldyBQb2ludChweCwgY3kgKyB0eSk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cblx0XHR2YXIgZCA9IGR5IC8gZHg7XG5cdFx0dmFyIGggPSBjeSAtIGQgKiBjeDtcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcblx0XHR2YXIgZiA9IC0yICogY3ggKiBlO1xuXHRcdHZhciBnID0gYSAqIGEgKiBkICogZCAqIGN4ICogY3ggKyBiICogYiAqIGN4ICogY3ggLSBhICogYSAqIGIgKiBiO1xuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xuXG5cdFx0Ly8gVHdvIHNvbHV0aW9ucyAocGVyaW1ldGVyIHBvaW50cylcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcblx0XHR2YXIgeG91dDIgPSAoLWYgLSBkZXQpIC8gKDIgKiBlKTtcblx0XHR2YXIgeW91dDEgPSBkICogeG91dDEgKyBoO1xuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XG5cdFx0dmFyIGRpc3QxID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MSAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDEgLSBweSksIDIpKTtcblx0XHR2YXIgZGlzdDIgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQyIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MiAtIHB5KSwgMikpO1xuXG5cdFx0Ly8gQ29ycmVjdCBzb2x1dGlvblxuXHRcdHZhciB4b3V0ID0gMDtcblx0XHR2YXIgeW91dCA9IDA7XG5cblx0XHRpZiAoZGlzdDEgPCBkaXN0Mikge1xuXHRcdFx0eG91dCA9IHhvdXQxO1xuXHRcdFx0eW91dCA9IHlvdXQxO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR4b3V0ID0geG91dDI7XG5cdFx0XHR5b3V0ID0geW91dDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldKSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0aWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXG5cdCAqL1xuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHRsZXQgbGFzdCwgc3RhY2s7XG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcblx0XHRcdGsgPSBrIHx8IDA7XG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuXHRcdFx0XHR2YXIgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcblx0XHR9O1xuXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xuXHRcdFx0XHRsZXQgaXRlbTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcblx0fVxuXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGtleSkpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKGxpc3RlbmVycywgKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBhZnRlciBkaXNwYXRjaGluZywgZG8gbm90IHByb3BhZ2F0ZS5cblx0XHRpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbihldmVudCkge1xuXHRcdGNvbnN0IHBvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRpZighIF8uaXNOYU4ocG9zWzBdKSAmJiAhIF8uaXNOYU4ocG9zWzFdKSlcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gcG9zO1xuXHRcdHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBrZXkgZXZlbnQgaGFuZGxlclxuXHQgKiAvLyBLZXkgaXMgb2JqZWN0IHtjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBjb2RlfVxuXHQgKi9cblx0cmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0fTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldIHx8ICh0aGlzLmxpc3RlbmVyc1trZXldID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlclxuXHQgKi9cblx0cmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCkge1xuXHRcdGlmIChfLmlzQXJyYXkodHlwZSkpIHtcblx0XHRcdF8uZm9yRWFjaCh0eXBlLCAodCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyKHQsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgekluZGV4OiB6SW5kZXh9O1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0ZGVsZXRlIHRoaXMucm9vdDtcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG5cdFx0ZGVsZXRlIHRoaXMuZW50ZXJTdGFjaztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGUgcmVnaXN0ZXJlZCBldmVudCB0eXBlIG1hdGNoZXMgdGhlIHJlYWwgZXZlbnQgdHlwZS4gXCIqXCIgaXMgYWxsb3dlZCBhcyBhIHdpbGQgY2FyZC5cblx0ICovXG5cdHN0YXRpYyBtYXRjaChuc1R5cGUsIHJlZ2lzdGVyZWRUeXBlKSB7XG5cdFx0Y29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxKVxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcblxuXHRcdGxldCBzdWJzdHIsIGluZGV4ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cdFx0XHRzdWJzdHIgPSBuc1R5cGUuc2xpY2UoaW5kZXgpO1xuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xuXHRcdFx0aWYgKGluZGV4IDwgMClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzdGF0aWMgbW91c2UoY29udGFpbmVyLCBlKSB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdHZhciBzdmcgPSBjb250YWluZXIub3duZXJTVkdFbGVtZW50IHx8IGNvbnRhaW5lcjtcblx0XHRpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcblx0XHRcdHBvaW50LnggPSBlLmNsaWVudFg7IHBvaW50LnkgPSBlLmNsaWVudFk7XG5cdFx0XHRwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShjb250YWluZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG5cdFx0fVxuXHRcdHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICBUaGUgS2V5IFV0aWxpdHkgQ0xhc3MgZm9yIHRoZSBFdmVudCBEaXNwYXRjaGVyICAgICAgICAgIFx0ICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbi8qKlxuICogS0VZIGNvbnN0YW50XG4gKi9cbmNvbnN0IEtFWSA9IHtcblx0QUxUICAgICAgICAgIDogMTgsXG5cdEJBQ0tfU1BBQ0UgICA6IDgsXG5cdENBUFNfTE9DSyAgICA6IDIwLFxuXHRDT05UUk9MICAgICAgOiAxNyxcblx0REVMRVRFICAgICAgIDogNDYsXG5cdERPV04gICAgICAgICA6IDQwLFxuXHRFTkQgICAgICAgICAgOiAzNSxcblx0RU5URVIgICAgICAgIDogMTMsXG5cdEVTQ0FQRSAgICAgICA6IDIyMCxcblx0SE9NRSAgICAgICAgIDogMzYsXG5cdExFRlQgICAgICAgICA6IDM3LFxuXHRNRVRBICAgICAgICAgOiAyMjQsXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcblx0UEFHRV9ET1dOICAgIDogMzQsXG5cdFBBR0VfVVAgICAgICA6IDMzLFxuXHRQQVVTRSAgICAgICAgOiAxOSxcblx0UFJJTlRTQ1JFRU4gIDogNDQsXG5cdFJJR0hUICAgICAgICA6IDM5LFxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXG5cdFNISUZUICAgICAgICA6IDE2LFxuXHRTUEFDRSAgICAgICAgOiAzMixcblx0VEFCICAgICAgICAgIDogOSxcblx0VVAgICAgICAgICAgIDogMzhcblx0Ly9BREQgICAgICAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyA2MSAgOiAxODcsXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcblx0aWYgKCFldmVudCB8fCAhZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuXHQvLyBOZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXZvaWQgdGhpc1xuXHRpZiAoa2V5ID49IDE2ICYmIGtleSA8PSAxOCkge1xuXHRcdGtleSA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcblx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XG5cdGlmIChhbHQpIGJ1Zi5hcHBlbmQoXCJBTFRcIik7XG5cdGlmIChzaGlmdCkgYnVmLmFwcGVuZChcIlNISUZUXCIpO1xuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XG5cdGlmIChrZXkpIGJ1Zi5hcHBlbmQoa2V5KTtcblxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0tleVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9FZGdlXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xuXG5jb25zdCBub2RlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ25vZGUnLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdGVkaXRhYmxlOiB0cnVlLFxuXHRyZXNpemFibGU6IGZhbHNlLFxuXHRzb3VyY2VhYmxlOiB0cnVlLFxuXHR0YXJnZXRhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlXG59O1xuXG5jb25zdCBlZGdlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ2VkZ2UnLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlLFxuXHRzaGFwZToge1xuXHRcdG5hbWU6IFwiTGlua1wiXG5cdH0sXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxuXHRlbmRNYXJrZXI6IHtcblx0XHRpZDogJ0RlZmF1bHRfRW5kTWFya2VyJyxcblx0XHR0eXBlOiAnYXJyb3cnLFxuXHRcdHNpemU6IDEwXG5cdH0sXG5cdC8qIHN0YXJ0IGFuZCBlbmQgaXMgb25seSB1c2VkIGlmIHRoZSBlZGdlIGlzIG5vdCBjb25uZWN0ZWQgdG8gYSBub2RlICovXG5cdHN0YXJ0OiBbMCwgMF0sXG5cdGVuZDogWzQwMCwgMjAwXVxufTtcblxuY2xhc3MgR3JhcGgge1xuXHRjb25zdHJ1Y3RvcihpZCA9IF8udW5pcXVlSWQoXCJHXCIpLCBjb25maWcgPSB7fSwgbW9kZWwpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHR0aGlzLm5vZGVzID0ge307XG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xuXG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5ub2RlVHlwZXMsIFwiTm9kZXNcIiwgbm9kZURlZmF1bHRzKTtcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcblx0XHQvLyBjaGVjayBmb3IgbWFya2Vycy5cblx0XHR0aGlzLm1hcmtlcnMgPSBbXTtcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xuXHRcdGZvciAobGV0IHR5cGUgb2YgZWRnZVR5cGVzLmVudHJpZXMoKSkge1xuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuc3RhcnRNYXJrZXI7XG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCB0cnVlKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblx0XHRcdH1cblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGVbMV0ucHJvdG90eXBlLmVuZE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRkZWxldGUgY29uZmlnLm5vZGVUeXBlcztcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdFx0dGhpcy5yb290ID0gbnVsbDtcblx0XHRpZiAobW9kZWwpXG5cdFx0XHR0aGlzLmxvYWRNb2RlbChtb2RlbCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0SlNDbGFzcyhjb25maWcsIGRlZmF1bHRDbGFzcykge1xuXHRcdHZhciBqc0NsYXNzID0gbnVsbDtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIGdldCB0aGUganMgY2xhc3MgZnJvbSBjb25maWcuXG5cdFx0XHR2YXIgdHlwZSA9IFV0aWxzLnR5cGUoZGVmYXVsdENsYXNzLm5hbWVzcGFjZSwgY29uZmlnLnR5cGUpO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGpzQ2xhc3MgPSB0eXBlLmpzQ2xhc3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFV0aWxzLmdldENvbnN0cnVjdG9yKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IE5vZGVcblx0ICovXG5cdGFkZE5vZGUoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCksIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCksIGZyb20sIHRvKSB7XG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcblx0XHRsZXQgZWRnZSA9IG5ldyBFZGdlQ2xhc3ModGhpcywgY29uZmlnLCBmcm9tLCB0byk7XG5cblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xuXHRcdHRoaXMuZWRnZXNbZWRnZS5pZF0gPSBlZGdlO1xuXHRcdHJldHVybiBlZGdlO1xuXHR9XG5cblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcblx0XHRcdHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRcdGNoaWxkLnBhcmVudC5jaGlsZHJlbiA9IF8ud2l0aG91dChjaGlsZC5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcblx0XHR9XG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCkpIHtcblx0XHR2YXIgbm9kZXMgPSBtb2RlbC5ub2Rlcztcblx0XHR2YXIgZWRnZXMgPSBtb2RlbC5lZGdlcztcblx0XHRkZWxldGUgbW9kZWwubm9kZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLmVkZ2VzO1xuXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmFkZE5vZGUobW9kZWwsIHBhcmVudCk7XG5cdFx0aWYgKG5vZGVzKSB7XG5cdFx0XHRfLmZvckVhY2gobm9kZXMsIChjaGlsZCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRNb2RlbChjaGlsZCwgbm9kZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKGVkZ2VzKSB7XG5cdFx0XHRfLmZvckVhY2goZWRnZXMsIChlZGdlKSA9PiB7XG5cdFx0XHRcdGxldCBmcm9tLCB0bztcblx0XHRcdFx0aWYgKGVkZ2UuZnJvbSlcblx0XHRcdFx0XHRmcm9tID0gdGhpcy5ub2Rlc1tlZGdlLmZyb21dO1xuXHRcdFx0XHRpZiAoZWRnZS50bylcblx0XHRcdFx0XHR0byA9IHRoaXMubm9kZXNbZWRnZS50b107XG5cdFx0XHRcdHRoaXMuYWRkRWRnZShlZGdlLCBub2RlLCBmcm9tLCB0byk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRDdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vRWxlbWVudFwiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgRWxlbWVudCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZSB9O1xuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSksIHB0O1xuXHRcdGlmIChwb3J0TmFtZSA9PSAnYXV0bycpIHtcblx0XHRcdHB0ID0gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0KTtcblx0XHRcdHJldHVybiBwdDtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcblx0XHRpZiAoXy5pc0FycmF5KGxhYmVsKSlcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xuXHR9XG59XG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcblxuLypcblxuLyoqXG4gKiBUaGUgRHJpbGxEb3duUGFyZW50IGlzIHRoZSBwYXJlbnQgdGhhdCBkaXNwbGF5cyB0aGUgdmVydGV4IHdoZW4gZHJpbGxlZCBkb3duLlxuICpcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNMb2NrZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmlzTG9ja2VkKCkpXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+Jztcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQuaXNMb2NrZWQoKSkgJiYgVmVydGV4LnN1cGVyY2xhc3MuY2FuRWRpdC5jYWxsKHRoaXMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4uL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuXG4vKipcbiAqIFRoZSBFbGVtZW50IGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGVtZW50IHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmlkID0gY29uZmlnLmlkO1xuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XG5cblx0XHQvLyBJbml0aWFsaXplIGRlY29yYXRvcnNcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGVjb3JhdG9ycyhjb25maWcuZGVjb3JhdG9ycyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmRlY29yYXRvcnM7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBWaWV3IFByb3BlcnRpZXNcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XG5cdFx0XHR0aGlzLnZpZXdQcm9wcyA9IGNvbmZpZy52aWV3cztcblx0XHRcdGRlbGV0ZSBjb25maWcudmlld3M7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0eXBlXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcblx0XHR0eXBlID0gVXRpbHMudHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSwgdHlwZSk7XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XG5cdFx0ZGVsZXRlIGNvbmZpZy50eXBlO1xuXHRcdHRoaXMucHJvcHMgPSBuZXcgdHlwZShjb25maWcpO1xuXHR9XG5cblx0cHJvcChuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcblx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gbmFtZVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKSB7XG5cdFx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jylcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXTtcblx0XHR9XG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcblx0XHRcdHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcblx0XHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XSA9IHt9O1xuXHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cblxuXHQvKipcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHt7a2V5OiAoc3RyaW5nfCopLCBjbGFzc05hbWU6ICosIG5hbWVzcGFjZTogKiwgYm91bmRzOiAqfX1cblx0ICovXG5cdGdldFZpZXcoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdHJldHVybiBfLmFzc2lnbih7XG5cdFx0XHRpZDogdGhpcy5pZCxcblx0XHRcdGtleToga2V5LFxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmNvbXB1dGVkQ2xhc3NOYW1lLFxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcblx0XHRcdHNjYWxlOiB0aGlzLnZpZXdQcm9wKGtleSwgJ3NjYWxlJykgfHwgMS4wXG5cdFx0fSwgc2hhcGUpO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IHNoYXBlQ29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdGxldCBzaGFwZUNsYXNzID0gc2hhcGVDb25maWcgPyBTaGFwZS5nZXRTaGFwZShzaGFwZUNvbmZpZy5uYW1lKSA6IFNoYXBlLmdldFNoYXBlKCdSZWN0YW5nbGUnKTtcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XG5cdFx0bGV0IHkgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ5XCIpO1xuXHRcdGxldCB3aWR0aCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcIndpZHRoXCIpO1xuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XG5cdFx0c2hhcGUgPSBuZXcgc2hhcGVDbGFzcyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzaGFwZUNvbmZpZyk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBDYWNoZS5nZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB2aWV3LmlkKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcblx0XHRcdGxldCByb2xlID0gdGhpcy5wcm9wKCdyb2xlJyk7XG5cdFx0XHR0ZW1wbGF0ZSA9IHZpZXcuZ2V0VGVtcGxhdGUoJyQnICsgcm9sZSwgbnVsbCwgdGhpcyk7XG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB0ZW1wbGF0ZSwgdmlldy5pZCk7XG5cdFx0fVxuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzLmdldFZpZXcodmlldy5pZCkpO1xuXHR9XG5cblx0cmVuZGVyU2hhcGUodmlldykge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUodmlldy5pZCk7XG5cdFx0aWYgKHNoYXBlKVxuXHRcdFx0cmV0dXJuIHNoYXBlLnJlbmRlcih2aWV3KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZW5kZXJMYWJlbCh2aWV3KSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5nZXRDdXJyZW50Um9vdCgpKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQsIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkpIHJldHVybiAnJztcblx0XHRyZXR1cm4gXCJyb290LlwiICsgdGhpcy5wcm9wKFwicm9sZVwiKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMuZGVjb3JhdG9ycztcblx0XHRkZWxldGUgdGhpcy5wcm9wcztcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXHR9XG59XG5cbi8qXG5cbkNlbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ4XCIsIE1hdGgucm91bmQoeCkpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24odywgaCkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwid2lkdGhcIiwgdyk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZWRpdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5TZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJkcmFnZ2FibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwicmVzaXphYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0VHlwZUZyb21TdHJpbmcgPSBmdW5jdGlvbih0eXBlU3RyKSB7XG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcblx0dGhpcy5tb2RpZmllcnMgPSBudWxsO1xuXHR2YXIgbW9kaWZpZXJTZXR0aW5ncyA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RpZmllclNldHRpbmdzXCIpO1xuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xuXHRcdF8uZWFjaChtb2RpZmllcnMsIGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0Y29uZmlnLnR5cGUgPSB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShjb25maWcuY2xhc3NOYW1lKTtcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcblx0XHRcdGlmICghY29uZmlnLnR5cGUgfHwgIWNvbmZpZy5zZXR0aW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3Ncblx0XHRfLmVhY2gobW9kaWZpZXJTZXR0aW5ncywgZnVuY3Rpb24oc2V0dGluZywgbmFtZSkge1xuXHRcdFx0aWYgKHNldHRpbmcuc2hvd0Fsd2F5cyAmJiAoIXRoaXMubW9kaWZpZXJzIHx8ICF0aGlzLm1vZGlmaWVyc1tuYW1lXSkpIHtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XG5cdFx0XHRcdGlmICghY29uZmlnLnR5cGUpIHJldHVybjtcblx0XHRcdFx0dGhpcy5hZGRNb2RpZmllcihuYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdH1cbn07XG5cbkNlbGwucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSwgbW9kaWZpZXIpIHtcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcblx0XHR0aGlzLm1vZGlmaWVycyA9IHt9O1xuXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSB0cnVlO1xuXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxuXHRpZiAobW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUHJvY2Vzc01vZGlmaWVyXCIgfHwgbW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUmVzdWx0c1wiKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSBmYWxzZTtcblxuXHR0aGlzLm1vZGlmaWVyc1tuYW1lXSA9IG1vZGlmaWVyO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXJzID0gZnVuY3Rpb24oKSB7XG5cdGlmIChfLmlzVW5kZWZpbmVkKHRoaXMubW9kaWZpZXJzKSlcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xuXHRyZXR1cm4gdGhpcy5tb2RpZmllcnM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0dmFyIG1vZGlmaWVycyA9IHRoaXMuZ2V0TW9kaWZpZXJzKCk7XG5cdGlmIChtb2RpZmllcnMpXG5cdFx0cmV0dXJuIG1vZGlmaWVyc1tuYW1lXTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvRWxlbWVudC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvNy8yMDE2LlxuICovXG5cbmxldCBjYWNoZXMgPSB7fTtcblxubGV0IENhY2hlID0ge1xuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG5cdFx0dGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV0gPSB2YWx1ZTtcblx0fSxcblxuXHRjb250YWluczogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4ga2V5IGluIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcblx0XHRpZiAoIW5hbWVzcGFjZSlcblx0XHRcdGNhY2hlcyA9IHt9O1xuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0fSxcblxuXHRnZXRDYWNoZTogZnVuY3Rpb24obmFtZXNwYWNlID0gJ2RlZmF1bHQnKSB7XG5cdFx0aWYgKCFjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdFx0cmV0dXJuIGNhY2hlc1tuYW1lc3BhY2VdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5jb25zdCBGT05UX0JPTEQgPSAxLCBGT05UX0lUQUxJQyA9IDIsIEZPTlRfVU5ERVJMSU5FID0gNCwgRk9OVF9TSEFET1cgPSA4O1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0Zm9udFNpemU6IDExLFxuXHRmb250RmFtaWx5OiBcIkFyaWFsXCIsXG5cdGZvbnRTdHlsZTogMCxcblx0cGFkZGluZzogMCxcblx0bGluZVBhZGRpbmc6IDAsXG5cdGFsaWduOiBcImxlZnRcIixcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0cm90YXRpb246IG51bGwsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBjYW52YXNTdXBwb3J0ZWQgPSBmYWxzZSwgc3RyaW5nTWVhc3VyZUVsID0gbnVsbDtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0aWYgKCFzdHIgfHwgc3RyID09IFwiXCIpXG5cdFx0XHRyZXR1cm4gWzAsIDBdO1xuXG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdHZhciBzaXplO1xuXG5cdFx0aWYgKF8uaXNOdWxsKGNhbnZhc1N1cHBvcnRlZCkpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuXHRcdFx0Y2FudmFzU3VwcG9ydGVkID0gISEoc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQgJiYgc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQoJzJkJykpO1xuXHRcdH1cblxuXHRcdGlmIChjYW52YXNTdXBwb3J0ZWQpIHtcblx0XHRcdFV0aWxzLmxvZygnTGFiZWwnLCAndXNpbmcgY2FudmFzJyk7XG5cdFx0XHR2YXIgY3R4ID0gc3RyaW5nTWVhc3VyZUVsLmdldENvbnRleHQoXCIyZFwiKTtcblx0XHRcdGN0eC5mb250ID0gZm9udFNpemUgKyBcIiBcIiArIGZvbnRGYW1pbHkgKyBcIiBcIiArIChib2xkID8gXCJib2xkXCIgOiBcIm5vcm1hbFwiKTtcblx0XHRcdHZhciBtZWFzdXJlID0gY3R4Lm1lYXN1cmVUZXh0KHN0cik7XG5cdFx0XHRzaXplID0gW21lYXN1cmUud2lkdGgsIDEwXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdGhlcmUgaXMgYSBzdHJpbmctbWVhc3VyaW5nIGRpdiBhdmFpbGFibGUsIGlmIG5vdCwgY3JlYXRlIG5vdy5cblx0XHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIGRpc3BsYXk6XCJub25lXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3RyaW5nTWVhc3VyZUVsKTtcblx0XHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0XHRkb2Mud3JpdGUoJzxodG1sPjxib2R5PjxkaXYgaWQ9XCJzaXplTWVhc3VyaW5nRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvZGl2PjwvYm9keT48L2h0bWw+Jyk7XG5cdFx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0fVxuXHRcdFx0c3RyaW5nTWVhc3VyZUVsLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0dmFyIGRpdiA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2l6ZU1lYXN1cmluZ0RpdlwiKTtcblx0XHRcdGRpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0XHRkaXYuc3R5bGUucGFkZGluZyA9IDA7XG5cdFx0XHRkaXYuc3R5bGUud2lkdGggPSBcImF1dG9cIjtcblx0XHRcdGRpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRcdHNpemUgPSBbZGl2Lm9mZnNldFdpZHRoLCBkaXYub2Zmc2V0SGVpZ2h0XTtcblx0XHRcdHN0cmluZ01lYXN1cmVFbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG5cdFx0fVxuXHRcdHJldHVybiBzaXplO1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdHZhciBhcnIgPSBbXTtcblx0XHR2YXIgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplWzBdO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplWzFdO1xuXG5cdFx0aWYgKCFtYXhXaWR0aCB8fCAhc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSB7XG5cdFx0XHRhcnIucHVzaChzdHJpbmcpO1xuXHRcdFx0YXJyLndpZHRoID0gKCFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpID8gc3BhY2UgOiBnZXRTdHJpbmdTaXplKHN0cmluZywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpWzBdO1xuXHRcdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0O1xuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9XG5cblx0XHR2YXIgd2lkdGggPSAwO1xuXHRcdC8vc3BsaXQgdGhlIHRleHQgYnkgbGluZXNcblx0XHR2YXIgbGluZXMgPSBzdHJpbmcuc3BsaXQoL1tcXHJcXG58XFxufFxccl0vKTtcblxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHR2YXIgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvW1xcc10vKTtcblx0XHRcdHZhciBsaW5lID0gXCJcIiwgY3VycmVudFdpZHRoID0gMCwgd29yZFdpZHRoID0gMCwgbmV3TGluZSA9IHRydWUsIHdvcmQ7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0d29yZCA9IHdvcmRzW2ldO1xuXHRcdFx0XHR3b3JkV2lkdGggPSBnZXRTdHJpbmdTaXplKHdvcmQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKVswXTtcblxuXHRcdFx0XHRpZiAoKG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCkgPiBtYXhXaWR0aCkge1xuXHRcdFx0XHRcdGlmIChuZXdMaW5lKSB7XG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKHdvcmQpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGlmIChpIDwgd29yZHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhcnIucHVzaChidWYuYXBwZW5kKGxpbmUpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpbmUgPSBcIlwiO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0XHRcdFx0aWYgKCFuZXdMaW5lKVxuXHRcdFx0XHRcdFx0aS0tOyAvLyBtb3ZlIGJhY2sgb25lIHdvcmQuXG5cdFx0XHRcdFx0bmV3TGluZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGluZSA9IG5ld0xpbmUgPyB3b3JkIDogbGluZSArIFwiIFwiICsgd29yZDtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSBuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGg7XG5cdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoKTtcblx0XHRcdFx0XHRuZXdMaW5lID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChsaW5lICE9IFwiXCIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQobGluZSk7XG5cdFx0XHRpZiAoaiA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0YXJyLndpZHRoID0gd2lkdGg7XG5cdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0ICogYXJyLmxlbmd0aDtcblx0XHRyZXR1cm4gYXJyO1xuXHR9LCBmdW5jdGlvbihzdHIsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgbWF4V2lkdGggKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogIEdldCB0aGUgdmlldyBpbmZvcm1hdGlvbiBmb3IgaG93IHRvIGRpc3BsYXkgdGhlIGxhYmVsLlxuXHQgKiBAcGFyYW0gbGFiZWwgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBAcGFyYW0gY29udGFpbmVyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gY29udGFpbmVySGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBsYWJlbENvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBvbiBob3cgdG8gZGlzcGxheSBsYWJlbC4gSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcblx0ICoge1xuXHQgKiAgICAgIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250U3R5bGUsIHBhZGRpbmcsXG5cdCAqICAgICAgYWxpZ246IGNhbiBiZSBlaXRoZXIgXCJsZWZ0XCIsIFwiY2VudGVyXCIgb3IgXCJyaWdodFwiLFxuXHQgKiAgICAgIHdpZHRoOiB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGFiZWwuIGlmIGxlc3MgdGhhbiAxLCB0aGVuIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gSWYgMCwgbm8gd3JhcHBpbmcgd2lsbCBvY2N1cixcblx0ICogICAgICBoZWlnaHQsXG5cdCAqICAgICAgZ2VvbWV0cnlcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94KGxhYmVsLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0LCBsYWJlbENvbmZpZyA9IHt9KSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XG5cdFx0bGV0IGZvbnRGYW1pbHkgPSBsYWJlbENvbmZpZy5mb250RmFtaWx5O1xuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XG5cdFx0bGV0IHBhZGRpbmcgPSBsYWJlbENvbmZpZy5wYWRkaW5nO1xuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xuXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcblx0XHR3ID0gdyA8PSA1ID8gY29udGFpbmVyV2lkdGggKiB3IDogdztcblx0XHRoID0gaCA8PSA1ID8gY29udGFpbmVySGVpZ2h0ICogaCA6IGg7XG5cdFx0dyAtPSAyICogcGFkZGluZztcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xuXHRcdHcgPSBNYXRoLm1heCgwLCB3KTtcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBfLmNsb25lKGxhYmVsQ29uZmlnLmdlb21ldHJ5KTtcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSB3cmFwcGVkTGFiZWwuaGVpZ2h0ICsgMiAqIHBhZGRpbmcgKyAod3JhcHBlZExhYmVsLmxlbmd0aCAtIDEpICogbGluZVBhZGRpbmc7XG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XG5cdFx0c3dpdGNoIChhbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XG5cdFx0XHRcdGR4ID0gd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgcG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0sIGdlb21ldHJ5KTtcblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxuXHRcdGxldCBwaXZvdCA9IGFsaWduID09ICdjZW50ZXInID8gWzAsIDBdIDogKGFsaWduID09ICdsZWZ0JyA/IFstd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdIDogW3dyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSk7XG5cblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXG5cdFx0Z2VvbWV0cnkud2lkdGggPSBNYXRoLm1heCh3ICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LndpZHRoKTtcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0sIGdlb21ldHJ5KTtcblx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGR4LCBkeTogLWdlb21ldHJ5LmhlaWdodC8yICsgcGFkZGluZyArIHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0LCBhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0ICsgbGluZVBhZGRpbmcsXG5cdFx0XHRwaXZvdCwgYm91bmRzLCBtYXhCb3VuZHNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JFZGdlKGxhYmVsLCBlZGdlLCBsYWJlbENvbmZpZykge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGlmICghbGFiZWwgfHwgbGFiZWwgPT0gXCJcIikgcmV0dXJuIG51bGw7XG5cblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XG5cdFx0bGV0IGZvbnRTdHlsZSA9IGxhYmVsQ29uZmlnLmZvbnRTdHlsZTtcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcblxuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIGxhYmVsQ29uZmlnLndpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0bGV0IHBvcyA9IGVkZ2UuZ2V0UmVsYXRpdmVQb3NpdGlvbih7eDogbGFiZWxDb25maWcubGFiZWxMb2NhdGlvbi8yLCBvZmZzZXRYOiBsYWJlbENvbmZpZy5sYWJlbE9mZnNldFggfHwgMCwgb2Zmc2V0WTogbGFiZWxDb25maWcubGFiZWxPZmZzZXRZIHx8IDB9KTtcblxuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4O1xuXHRcdHN3aXRjaCAobGFiZWxDb25maWcuYWxpZ24pIHtcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGR4OiBkeCwgZHk6IC13cmFwcGVkTGFiZWwuaGVpZ2h0LzIgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCxcblx0XHRcdGFuY2hvcjogYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCxcblx0XHRcdGJvdW5kczogbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgd3JhcHBlZExhYmVsLndpZHRoLCB3cmFwcGVkTGFiZWwuaGVpZ2h0KVxuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXIodmlldywgYm94KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdGxldCBlZGl0b3IgPSB7XG5cdFx0dmlzaWJsZTogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmlucHV0ICYmIHRoaXMuaW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9PSAndmlzaWJsZSc7IH0sXG5cblx0XHRzdGFydDogZnVuY3Rpb24oa2V5LCBjb250YWluZXIsIGJveCwgcmVmRWwsIHRleHRFbCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSB7XG5cdFx0XHRcdHRoaXMuaW5wdXQgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KSxcblx0XHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXHRcdFx0fSBlbHNlIGlmICh0aGlzLnZpc2libGUoKSAmJiB0aGlzLmtleSAhPSBrZXkpIHtcblx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XG5cdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XG5cdFx0XHR0aGlzLmJveCA9IGJveDtcblx0XHRcdHRoaXMucmVmRWwgPSByZWZFbDtcblx0XHRcdHRoaXMudGV4dEVsID0gdGV4dEVsO1xuXG5cdFx0XHRsZXQgbGFiZWxDb25maWcgPSBib3guY29uZmlnO1xuXHRcdFx0Ly9sZXQgcG9zID0gVXRpbHMudW5zY2FsZShncmFwaCwgW2NlbGwuZ2V0Qm91bmRzKCkuZ2V0Q2VudGVyWCgpICsgYm91bmRzLngsIGNlbGwuZ2V0Qm91bmRzKCkuZ2V0Q2VudGVyWSgpICsgYm91bmRzLnkgKyA1XSk7XG5cdFx0XHRsZXQgcG9zID0gRG9tVXRpbHMuZ2V0Q2VudGVyUG9zaXRpb24ocmVmRWwsIGNvbnRhaW5lcik7XG5cdFx0XHRwb3MgPSBbcG9zWzBdICsgYm94Lm1heEJvdW5kcy5sZWZ0LCBwb3NbMV0gKyBib3gubWF4Qm91bmRzLnRvcF07XG5cdFx0XHRsZXQgc2NhbGUgPSAxLjA7XG5cblx0XHRcdGlmICh0ZXh0RWwpXG5cdFx0XHRcdHRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblx0XHRcdERvbVV0aWxzLnNldEVsZW1lbnQodGhpcy5pbnB1dCwgbnVsbCwge1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdGxlZnQ6IHBvc1swXSArIFwicHhcIixcblx0XHRcdFx0dG9wOiBwb3NbMV0gKyBcInB4XCIsXG5cdFx0XHRcdHdpZHRoOiAoYm94Lm1heEJvdW5kcy53aWR0aCAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdGhlaWdodDogKGJveC5tYXhCb3VuZHMuaGVpZ2h0ICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LWZhbWlseVwiOiBsYWJlbENvbmZpZy5mb250RmFtaWx5LFxuXHRcdFx0XHRcImZvbnQtc2l6ZVwiOiAobGFiZWxDb25maWcuZm9udFNpemUgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IChsYWJlbENvbmZpZy5mb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRCA/ICdib2xkJyA6ICdub3JtYWwnXG5cdFx0XHRcdC8qXCJjb2xvclwiOiBsYWJlbENvbmZpZy5mb250Q29sb3IqL1xuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBib3guX2xhYmVsO1xuXHRcdFx0dGhpcy5pbnB1dC5mb2N1cygpO1xuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RhcnQnLCBbdGhpcy5rZXldKTtcblx0XHR9LFxuXG5cdFx0c3RvcDogZnVuY3Rpb24oY2FuY2VsKSB7XG5cdFx0XHRpZiAoIXRoaXMudmlzaWJsZSgpKSByZXR1cm47XG5cblx0XHRcdGNhbmNlbCA9IGNhbmNlbCB8fCBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRleHRFbClcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cblx0XHRcdHRoaXMuaW5wdXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0aWYgKCFjYW5jZWwpXG5cdFx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3IudXBkYXRlJywgW3RoaXMua2V5LCB0aGlzLmlucHV0LnZhbHVlXSk7XG5cblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RvcCcsIFt0aGlzLmtleV0pO1xuXHRcdFx0ZGVsZXRlIHRoaXMua2V5O1xuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xuXHRcdFx0ZGVsZXRlIHRoaXMucmVmRWw7XG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0RWw7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Rk9OVF9CT0xELFxuXHRcdEZPTlRfSVRBTElDLFxuXHRcdEZPTlRfVU5ERVJMSU5FLFxuXHRcdEZPTlRfU0hBRE9XLFxuXHRcdGdldFN0cmluZ1NpemUsXG5cdFx0d3JhcCxcblx0XHRnZXRMYWJlbEJveCxcblx0XHRnZXRMYWJlbEJveEZvckVkZ2UsXG5cdFx0cmVuZGVyLFxuXHRcdGVkaXRvclxuXHR9O1xufSkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTGFiZWwuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9FbGVtZW50XCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vdmlldy9MaW5rXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuXG5jbGFzcyBFZGdlIGV4dGVuZHMgRWxlbWVudCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnRScpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xuXHR9XG5cblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAnc291cmNlJyk7XG5cdH1cblxuXHRzZXRUYXJnZXQobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcblx0ICovXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xuXHRcdGlmIChlbmQgPT0gbm9kZSkge1xuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXG5cdFx0XHRpZiAobm9kZSlcblx0XHRcdFx0bm9kZS5zZXRFZGdlQXQodGhpcywgcG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGVuZCkge1xuXHRcdFx0XHQvLyBmaXJzdCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBlbmRcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdFx0bm9kZS5hZGRPdXRFZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JFZGdlKHRoaXMucHJvcCgnbGFiZWwnKSwgdGhpcy5nZXRWaWV3KGtleSksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cblx0ICovXG5cdGdldFJlZmVyZW5jZVBvaW50cyhrZXkpIHtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0aWYgKHRoaXMuc291cmNlKVxuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XG5cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0VGVybWluYWxQb2ludHMoa2V5KSB7XG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdGlmICh0aGlzLnNvdXJjZSkge1xuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0pKTtcblx0XHR9IGVsc2Vcblx0XHRcdHB0cy5wdXNoKHJlZlB0c1swXSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3RhcmdldFBvcnQnKSwgcmVmUHRzWzBdKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHRwdHMucHVzaChyZWZQdHNbMV0pO1xuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0c2hhcGUgPSBMaW5rLmdldExpbmtTaGFwZSh0aGlzLmdldFRlcm1pbmFsUG9pbnRzKGtleSksIG51bGwsIHNoYXBlQ29uZmlnLCB0aGlzLnByb3AoJ3N0YXJ0TWFya2VyJyksIHRoaXMucHJvcCgnZW5kTWFya2VyJykpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWRnZTp7JyArICghdGhpcy5zb3VyY2UgPyAnbnVsbCcgOiB0aGlzLnNvdXJjZS5pZCkgKyAnLS0nICsgKCF0aGlzLnRhcmdldCA/ICdudWxsJyA6IHRoaXMudGFyZ2V0LmlkKSArICd9Jztcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KG51bGwpO1xuXHR9XG59XG5FZGdlLm5hbWVzcGFjZSA9IFwiRWRnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcblxuLypcblxuRWRnZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiYWxsb3dEYW5nbGluZ0VkZ2VzXCIpKSB7XG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcblx0fSBlbHNlXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlICYmIHRoaXMudGFyZ2V0ICYmIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKSAmJiB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSAmJiB0aGlzLnRhcmdldC5pc1Zpc2libGUoKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGxpbmtTdHlsZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiBmYWxzZVxufTtcblxuLyoqXG4gKiBUaGUgTGluayBvYmplY3QgaGFuZGxlcyBsaW5rIGNhbGN1bGF0aW9ucyBhbmQgcmVuZGVyaW5nLlxuICovXG5sZXQgTGluayA9IChmdW5jdGlvbigpIHtcblxuXHRmdW5jdGlvbiBnZXRMaW5rU2hhcGUodGVybWluYWxQdHMsIHRlcm1pbmFsRGlyZWN0aW9ucywgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBzaGFwZUNvbmZpZyxcblx0XHRcdHN0YXJ0TWFya2VyLFxuXHRcdFx0ZW5kTWFya2VyLFxuXHRcdFx0cG9pbnRzOiB0ZXJtaW5hbFB0cyxcblx0XHRcdHJlbmRlcjogZnVuY3Rpb24odmlldykge1xuXHRcdFx0XHRyZXR1cm4gTGluay5yZW5kZXIodmlldywgdGhpcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBzaGFwZSkge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsoc2hhcGUpO1xuXHR9XG5cblx0cmV0dXJuIHtcblx0XHRnZXRMaW5rU2hhcGUsXG5cdFx0cmVuZGVyXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MaW5rLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5sZXQgTWFya2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gYXJyb3coc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWFuZ2xlKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3ZhbChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciByID0gc2l6ZSAvIDI7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLXIsIC1yLCBzaXplLCBzaXplKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFswLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+Jztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbW9uZChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGdldE1hcmtlcihjb25maWcsIHNvdXJjZSkge1xuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XG5cdFx0bWFya2VyLmlkID0gY29uZmlnLmlkO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xuXHRyZWdpc3RyeVsnb3ZhbCddID0gb3ZhbDtcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XG5cblx0cmV0dXJuIHtcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxuY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxuXHRcdFx0XHRjb25maWcub3JpZW50YXRpb24gPSBMYXlvdXQuSE9SSVpPTlRBTDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcblx0XHR9XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHR9XG5cblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkxheW91dC5WRVJUSUNBTCA9IDA7XG5MYXlvdXQuSE9SSVpPTlRBTCA9IDE7XG5cbkxheW91dC5ERUZBVUxUUyA9IHtcblx0b3JpZW50YXRpb246IExheW91dC5WRVJUSUNBTFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIEdyYXBoVmlldyB7XG5cdGNvbnN0cnVjdG9yKGlkLCBjb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOnRoaXMuaWQsIHRhYmluZGV4OjB9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fZ3JhcGggPSBudWxsO1xuXHRcdHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdyYXBoKGdyYXBoKSB7XG5cdFx0aWYgKGdyYXBoKSB7XG5cdFx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9ncmFwaDtcblx0fVxuXG5cdHZpZXdwb3J0KHNjYWxlZCwgdmlld3BvcnQpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChzY2FsZWQpIHx8IF8uaXNOdWxsKHNjYWxlZCkpIHNjYWxlZCA9IGZhbHNlO1xuXHRcdGlmICghdmlld3BvcnQpIHtcblx0XHRcdHZhciB2cCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdGhpcy5ib3gub2Zmc2V0V2lkdGgsIHRoaXMuYm94Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRpZiAoc2NhbGVkKVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMuc2NhbGUodGhpcywgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLCB2aWV3cG9ydCk7XG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XG5cdH1cblxuXHR0cmFuc2xhdGUodCkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiBbMCwgMF07XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHRpZiAoIXJvb3QpXG5cdFx0XHRcdHJldHVybiBbMCwgMF07XG5cdFx0XHRyZXR1cm4gW3Jvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnKSB8fCAwLCByb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JykgfHwgMF07XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNmb3JtKHRbMF0sIHRbMV0pO1xuXHR9XG5cblx0c2NhbGUoaykge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiAxLjA7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHRpZiAoIXJvb3QpIHJldHVybiAxLjA7XG5cblx0XHRcdHJldHVybiByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSgpICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0XCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgLyB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhY3R1YWxcIjpcblx0XHRcdFx0ayA9IDEuMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZml0XCI6XG5cdFx0XHRcdHZhciBncmlkU2l6ZSA9IHRoaXMucHJvcChcImdyaWRTaXplXCIpICogMjtcblxuXHRcdFx0XHR2YXIgZ0JvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cdFx0XHRcdHZhciB2Qm91bmRzID0gdGhpcy52aWV3cG9ydCgpO1xuXG5cdFx0XHRcdHZCb3VuZHMud2lkdGggLT0gZ3JpZFNpemU7XG5cdFx0XHRcdHZCb3VuZHMuaGVpZ2h0IC09IGdyaWRTaXplO1xuXG5cdFx0XHRcdC8qIERvIG5vdCB6b29tIG1vcmUgdGhhbiBhY3R1YWwgaWYgZ3JhcGggYWxyZWFkeSBmaXRzIGludG8gdGhlIGJvdW5kcyAqL1xuXHRcdFx0XHRrID0gTWF0aC5taW4oKHZCb3VuZHMud2lkdGggLyBnQm91bmRzLndpZHRoKSwgKHZCb3VuZHMuaGVpZ2h0IC9nQm91bmRzLmhlaWdodCksIDEuMCk7XG5cblx0XHRcdFx0Ly9UT0RPOiBBZGQgY2VudGVyaW5nIGNvZGUgaGVyZSBvciB0cmlnZ2VyIGFuIGV2ZW50IGZvciB0aGF0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKF8uaXNTdHJpbmcoaykpIGsgPSBwYXJzZUZsb2F0KGspO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0obnVsbCwgbnVsbCwgayk7XG5cdH1cblxuXHR0cmFuc2Zvcm0oeCwgeSwgc2NhbGUpIHtcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm47XG5cdFx0dmFyIHJvb3QgPSB0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpO1xuXHRcdGlmICghcm9vdCkgcmV0dXJuO1xuXG5cdFx0LyppZiAoIV8uaXNOdWxsKHgpICYmICFfLmlzTnVsbCh5KSlcblx0XHRcdHJvb3QubW92ZSh4LCB5KTtcblx0XHRpZiAoc2NhbGUpIHtcblx0XHRcdHNjYWxlID0gTWF0aC5tYXgodGhpcy5nZXRQcm9wZXJ0eShcIm1pblpvb21cIiksIE1hdGgubWluKHRoaXMuZ2V0UHJvcGVydHkoXCJtYXhab29tXCIpLCBzY2FsZSkpO1xuXHRcdFx0cm9vdC5zZXRQcm9wZXJ0eSgnc2NhbGUnLCBzY2FsZSk7XG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSB6b29tIGJlaGF2aW9yIGFuZCB0aGUgZ3JhcGhcblx0XHRcdHZhciB6b29tID0gdGhpcy5ldmVudERpc3BhdGNoZXIuem9vbTtcblx0XHRcdGlmICh6b29tLnNjYWxlKCkgIT0gc2NhbGUpXG5cdFx0XHRcdHpvb20uc2NhbGUoc2NhbGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcihHcmFwaC5FVkVOVF9UWVBFUy5SRUZSRVNIKTsqL1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiBmYWxzZTtcblx0XHQvLyBpbnRpYWxpemUgdmlld3Ncblx0XHRpZiAodGhpcy5sYXlvdXQpXG5cdFx0XHR0aGlzLmxheW91dC5sYXlvdXQodGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLionLCAnem9vbSonXSwgZnVuY3Rpb24odHlwZSwgbnMsIHRhcmdldCwgcG9zLCBldmVudCkge1xuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRyZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGluayhzaGFwZSk7XG5cdH1cblxuXHRyZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XG5cdFx0XHR0ID0gdChjb25maWcpO1xuXHRcdH1cblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuR3JhcGhWaWV3LkRFRkFVTFRTID0ge1xuXHRkZWZhdWx0Q2xpY2tNb2RlOiBcInBhblwiLFxuXHRoaWRlT3V0bGluZTogZmFsc2UsXG5cdHNpbmdsZVNlbGVjdDogdHJ1ZSxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRncmlkRW5hYmxlZDogZmFsc2UsXG5cdGd1aWRlc0VuYWJsZWQ6IHRydWUsXG5cdGdyaWRTaXplOiAzMCxcblx0bWF4Wm9vbTogNC4wLFxuXHRtaW5ab29tOiAwLjEsXG5cdHpvb21GYWN0b3I6IDEuMixcblx0bWFza09wYWNpdHk6IDAuNVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhWaWV3O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9HcmFwaFZpZXcuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBHcmFwaFZpZXcgZnJvbSBcIi4vR3JhcGhWaWV3XCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jbGFzcyBTVkdWaWV3IGV4dGVuZHMgR3JhcGhWaWV3IHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9zdmc+Jyk7XG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaCgpLm1hcmtlcnM7XG5cdFx0aWYgKG1hcmtlcnMubGVuZ3RoID4gMClcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHVmlldy5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpKTtcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIHN0cjEsIHN0cjI7XG5cdFx0Zm9yIChsZXQgbWFya2VyIG9mIG1hcmtlcnMpIHtcblx0XHRcdHN0cjEgPSB0aGlzLlRFTVBMQVRFU1snTWFya2VyJ10obWFya2VyKTtcblx0XHRcdHN0cjIgPSBtYXJrZXIuc2hhcGU7XG5cdFx0XHRpZiAoIV8uaXNTdHJpbmcoc3RyMikpXG5cdFx0XHRcdHN0cjIgPSB0aGlzLnJlbmRlclNoYXBlKHN0cjIpO1xuXHRcdFx0c3RyMSA9IHN0cjEucmVwbGFjZSgvXFwjXFx7c2hhcGVcXH0vLCBzdHIyKTtcblx0XHRcdGJ1Zi5hcHBlbmQoc3RyMSk7XG5cdFx0fVxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJMYWJlbChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5URU1QTEFURVNbJ0xhYmVsJ10oYm94KTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJTaGFwZShzaGFwZSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHRoaXMuVEVNUExBVEVTW3NoYXBlLm5hbWVdO1xuXHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHNoYXBlKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0bGV0IHBvaW50cyA9IHNoYXBlLnBvaW50cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQueCkuYXBwZW5kKCcsJykuYXBwZW5kKHBvaW50LnkpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRidWYuYXBwZW5kKCcgTCcpLmFwcGVuZChwb2ludC54KS5hcHBlbmQoJywnKS5hcHBlbmQocG9pbnQueSk7XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLmNvbmZpZyAmJiBzaGFwZS5jb25maWcuc2hvd0dhdWdlKVxuXHRcdFx0YnVmLmFwcGVuZCgnPHBhdGggc3R5bGU9XCJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDk7IHZpc2liaWxpdHk6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcIiBkPVwiJylcblx0XHRcdFx0LmFwcGVuZChkKS5hcHBlbmQoJ1wiLz4nKTtcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBkPVwiJykuYXBwZW5kKGQpLmFwcGVuZCgnXCInKTtcblx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIgfHwgc2hhcGUuZW5kTWFya2VyKSB7XG5cdFx0XHRidWYuYXBwZW5kKCcgc3R5bGU9XCInKTtcblx0XHRcdGlmIChzaGFwZS5zdGFydE1hcmtlcilcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLXN0YXJ0OiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLnN0YXJ0TWFya2VyKSA/IHNoYXBlLnN0YXJ0TWFya2VyIDogc2hhcGUuc3RhcnRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGlmIChzaGFwZS5lbmRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuZW5kTWFya2VyKSA/IHNoYXBlLmVuZE1hcmtlciA6IHNoYXBlLmVuZE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xuXHRcdFx0YnVmLmFwcGVuZCgnXCInKTtcblx0XHR9XG5cdFx0YnVmLmFwcGVuZCgnLz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0c3RhdGljIHNldENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRpZiAoRG9tVXRpbHMuaXNJRSkge1xuXHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRsZXQgY2hpbGQ7XG5cdFx0XHR3aGlsZSAoY2hpbGQgPSBlbC5sYXN0Q2hpbGQpXG5cdFx0XHRcdGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFNWR1ZpZXcuYXBwZW5kQ29udGVudChlbCwgY29udGVudCk7XG5cdFx0fSBlbHNlXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuXHRcdHJldHVybiBlbDtcblx0fVxufVxuU1ZHVmlldy5URU1QTEFURVMgPSB7XG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCJncmFwaFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pc2NhbGUoJHtzY2FsZX0pXCI+I3tjaGlsZHJlbn08L2c+Jyxcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRmb3IgKGxldCBwdCBvZiBzaGFwZS5wb2ludHMpXG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XG5gLnRyaW0oKTtcblx0fSxcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xuXHRcdHJldHVybiBgXG48cGF0dGVybiBpZD1cIkdyaWRQYXR0ZXJuXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuPC9wYXR0ZXJuPmAudHJpbSgpO1xuXHR9LFxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcbiAgIGlmIChib3gpIHslPlxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cblx0PCUgaWYgKGJveC5iYWNrZ3JvdW5kQ29sb3IpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIGZpbGw9XCI8JT1ib3guYmFja2dyb3VuZENvbG9yJT5cIi8+XG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxuXHRcdF8uZWFjaChib3gubGFiZWwsIGZ1bmN0aW9uKHZhbHVlLCBsaW5lKSB7JT5cblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxuXHRcdDwlfSk7fSBlbHNlIHsgJT5cblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+XG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdWaWV3O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdWaWV3LmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==