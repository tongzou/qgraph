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
	
	var _SVGRenderer = __webpack_require__(24);
	
	var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);
	
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
		SVGRenderer: _SVGRenderer2.default
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
				//if (event.stopPropagation)
				//	event.stopPropagation();
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
				if (this == this.graph.getCurrentRoot()) return '';
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
				arr.baseline = arr.lineHeight;
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
			arr.baseline = arr.lineHeight;
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
				dx: dx, dy: -geometry.height / 2 + padding + wrappedLabel.baseline - 3, anchor: anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
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
	
	var _Label = __webpack_require__(18);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Renderer = function () {
		function Renderer(id, container) {
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
			_classCallCheck(this, Renderer);
	
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
	
		_createClass(Renderer, [{
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
		maskOpacity: 0.5
	};
	
	exports.default = Renderer;

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
	
	var _Renderer2 = __webpack_require__(23);
	
	var _Renderer3 = _interopRequireDefault(_Renderer2);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
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
				if (markers.length > 0) buf.append(SVGRenderer.renderMarkers(markers));
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
		$root: '<g id="${id}" class="${className}" ns="graph" transform="translate(${x},${y})scale(${scale})">#{children}</g>',
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
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundColor) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" fill=\"<%=box.config.backgroundColor%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" })
	};
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmZTg3YWMzMzA3ZTA2NGYwNDkzMSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUJBQU0sUUFBTixDQUFlLFdBQWY7QUFDQSxpQkFBTSxRQUFOLENBQWUsU0FBZjs7bUJBRWU7QUFDZCx3QkFEYztBQUVkLHdCQUZjO0FBR2Qsd0JBSGM7QUFJZCw4QkFKYztBQUtkLHNDQUxjO0FBTWQsd0JBTmM7QUFPZCxzQkFQYztBQVFkLHdCQVJjO0FBU2QsZ0NBVGM7QUFVZCw0QkFWYztBQVdkLHNCQVhjO0FBWWQsNENBWmM7QUFhZCx3QkFiYztBQWNkLDBCQWRjO0FBZWQsd0JBZmM7QUFnQmQsc0JBaEJjO0FBaUJkLHNCQWpCYztBQWtCZCxzQkFsQmM7QUFtQmQsMEJBbkJjO0FBb0JkLGtDQXBCYztBQXFCZCw4QkFyQmM7QUFzQmQsb0NBdEJjOzs7Ozs7O0FDMUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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MUNEOzttQkErRGUsWSIsImZpbGUiOiJxZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInFncmFwaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicWdyYXBoXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgZmU4N2FjMzMwN2UwNjRmMDQ5MzFcbiAqKi8iLCJpbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZ3JhcGgvR3JhcGhcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL2dyYXBoL0NlbGxcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL2dyYXBoL0VkZ2VcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi92aWV3L0xhYmVsXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL3ZpZXcvTWFya2VyXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9SZW5kZXJlclwiO1xuaW1wb3J0IFNWR1JlbmRlcmVyIGZyb20gXCIuL3ZpZXcvU1ZHUmVuZGVyZXJcIjtcblxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFdmVudHMsXG5cdENhY2hlLFxuXHRVdGlscyxcblx0RG9tVXRpbHMsXG5cdFN0cmluZ0J1ZmZlcixcblx0UG9pbnQsXG5cdExpbmUsXG5cdFNoYXBlLFxuXHRSZWN0YW5nbGUsXG5cdEVsbGlwc2UsXG5cdExpbmssXG5cdEV2ZW50RGlzcGF0Y2hlcixcblx0TGFiZWwsXG5cdE1hcmtlcixcblx0R3JhcGgsXG5cdENlbGwsXG5cdE5vZGUsXG5cdEVkZ2UsXG5cdExheW91dCxcblx0Rmxvd0xheW91dCxcblx0UmVuZGVyZXIsXG5cdFNWR1JlbmRlcmVyXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvKiFcbiAgKiBCZWFuIC0gY29weXJpZ2h0IChjKSBKYWNvYiBUaG9ybnRvbiAyMDExLTIwMTJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmF0L2JlYW5cbiAgKiBNSVQgbGljZW5zZVxuICAqL1xuKGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSkoJ2JlYW4nLCB0aGlzLCBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xuICBuYW1lICAgID0gbmFtZSAgICB8fCAnYmVhbidcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuXG4gIHZhciB3aW4gICAgICAgICAgICA9IHdpbmRvd1xuICAgICwgb2xkICAgICAgICAgICAgPSBjb250ZXh0W25hbWVdXG4gICAgLCBuYW1lc3BhY2VSZWdleCA9IC9bXlxcLl0qKD89XFwuLiopXFwufC4qL1xuICAgICwgbmFtZVJlZ2V4ICAgICAgPSAvXFwuLiovXG4gICAgLCBhZGRFdmVudCAgICAgICA9ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgICwgcmVtb3ZlRXZlbnQgICAgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAsIGRvYyAgICAgICAgICAgID0gZG9jdW1lbnQgfHwge31cbiAgICAsIHJvb3QgICAgICAgICAgID0gZG9jLmRvY3VtZW50RWxlbWVudCB8fCB7fVxuICAgICwgVzNDX01PREVMICAgICAgPSByb290W2FkZEV2ZW50XVxuICAgICwgZXZlbnRTdXBwb3J0ICAgPSBXM0NfTU9ERUwgPyBhZGRFdmVudCA6ICdhdHRhY2hFdmVudCdcbiAgICAsIE9ORSAgICAgICAgICAgID0ge30gLy8gc2luZ2xldG9uIGZvciBxdWljayBtYXRjaGluZyBtYWtpbmcgYWRkKCkgZG8gb25lKClcblxuICAgICwgc2xpY2UgICAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAsIHN0cjJhcnIgICAgICAgID0gZnVuY3Rpb24gKHMsIGQpIHsgcmV0dXJuIHMuc3BsaXQoZCB8fCAnICcpIH1cbiAgICAsIGlzU3RyaW5nICAgICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdzdHJpbmcnIH1cbiAgICAsIGlzRnVuY3Rpb24gICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdmdW5jdGlvbicgfVxuXG4gICAgICAvLyBldmVudHMgdGhhdCB3ZSBjb25zaWRlciB0byBiZSAnbmF0aXZlJywgYW55dGhpbmcgbm90IGluIHRoaXMgbGlzdCB3aWxsXG4gICAgICAvLyBiZSB0cmVhdGVkIGFzIGEgY3VzdG9tIGV2ZW50XG4gICAgLCBzdGFuZGFyZE5hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdjbGljayBkYmxjbGljayBtb3VzZXVwIG1vdXNlZG93biBjb250ZXh0bWVudSAnICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdtb3VzZXdoZWVsIG1vdXNlbXVsdGl3aGVlbCBET01Nb3VzZVNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSB3aGVlbFxuICAgICAgICAnbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBzZWxlY3RzdGFydCBzZWxlY3RlbmQgJyAgICAgICAgICAgICsgLy8gbW91c2UgbW92ZW1lbnRcbiAgICAgICAgJ2tleWRvd24ga2V5cHJlc3Mga2V5dXAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGtleWJvYXJkXG4gICAgICAgICdvcmllbnRhdGlvbmNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb2JpbGVcbiAgICAgICAgJ2ZvY3VzIGJsdXIgY2hhbmdlIHJlc2V0IHNlbGVjdCBzdWJtaXQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ2xvYWQgdW5sb2FkIGJlZm9yZXVubG9hZCByZXNpemUgbW92ZSBET01Db250ZW50TG9hZGVkICcgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBtZXNzYWdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdlcnJvciBhYm9ydCBzY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaXNjXG4gICAgICAvLyBlbGVtZW50LmZpcmVFdmVudCgnb25YWVonLi4uIGlzIG5vdCBmb3JnaXZpbmcgaWYgd2UgdHJ5IHRvIGZpcmUgYW4gZXZlbnRcbiAgICAgIC8vIHRoYXQgZG9lc24ndCBhY3R1YWxseSBleGlzdCwgc28gbWFrZSBzdXJlIHdlIG9ubHkgZG8gdGhlc2Ugb24gbmV3ZXIgYnJvd3NlcnNcbiAgICAsIHczY05hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdzaG93ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdpbnB1dCBpbnZhbGlkICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyB0b3VjaFxuICAgICAgICAnZ2VzdHVyZXN0YXJ0IGdlc3R1cmVjaGFuZ2UgZ2VzdHVyZWVuZCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZ2VzdHVyZVxuICAgICAgICAndGV4dGlucHV0ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gVGV4dEV2ZW50XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIHBhZ2VzaG93IHBhZ2VoaWRlIHBvcHN0YXRlICcgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2hhc2hjaGFuZ2Ugb2ZmbGluZSBvbmxpbmUgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnYWZ0ZXJwcmludCBiZWZvcmVwcmludCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gcHJpbnRpbmdcbiAgICAgICAgJ2RyYWdzdGFydCBkcmFnZW50ZXIgZHJhZ292ZXIgZHJhZ2xlYXZlIGRyYWcgZHJvcCBkcmFnZW5kICcgICAgICArIC8vIGRuZFxuICAgICAgICAnbG9hZHN0YXJ0IHByb2dyZXNzIHN1c3BlbmQgZW1wdGllZCBzdGFsbGVkIGxvYWRtZXRhZGF0YSAnICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2xvYWRlZGRhdGEgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBwbGF5aW5nIHdhaXRpbmcgc2Vla2luZyAnICAgICArIC8vIG1lZGlhXG4gICAgICAgICdzZWVrZWQgZW5kZWQgZHVyYXRpb25jaGFuZ2UgdGltZXVwZGF0ZSBwbGF5IHBhdXNlIHJhdGVjaGFuZ2UgJyAgKyAvLyBtZWRpYVxuICAgICAgICAndm9sdW1lY2hhbmdlIGN1ZWNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2NoZWNraW5nIG5vdXBkYXRlIGRvd25sb2FkaW5nIGNhY2hlZCB1cGRhdGVyZWFkeSBvYnNvbGV0ZSAnICAgICAgIC8vIGFwcGNhY2hlXG5cbiAgICAgIC8vIGNvbnZlcnQgdG8gYSBoYXNoIGZvciBxdWljayBsb29rdXBzXG4gICAgLCBuYXRpdmVFdmVudHMgPSAoZnVuY3Rpb24gKGhhc2gsIGV2ZW50cywgaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSBldmVudHNbaV0gJiYgKGhhc2hbZXZlbnRzW2ldXSA9IDEpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgICB9KHt9LCBzdHIyYXJyKHN0YW5kYXJkTmF0aXZlRXZlbnRzICsgKFczQ19NT0RFTCA/IHczY05hdGl2ZUV2ZW50cyA6ICcnKSkpKVxuXG4gICAgICAvLyBjdXN0b20gZXZlbnRzIGFyZSBldmVudHMgdGhhdCB3ZSAqZmFrZSosIHRoZXkgYXJlIG5vdCBwcm92aWRlZCBuYXRpdmVseSBidXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgbmF0aXZlIGV2ZW50cyB0byBnZW5lcmF0ZSB0aGVtXG4gICAgLCBjdXN0b21FdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9ICdjb21wYXJlRG9jdW1lbnRQb3NpdGlvbicgaW4gcm9vdFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIDE2KSA9PT0gMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogJ2NvbnRhaW5zJyBpbiByb290XG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSB8fCBjb250YWluZXIgPT09IHdpbmRvdyA/IHJvb3QgOiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLCBjaGVjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgcmV0dXJuICFyZWxhdGVkXG4gICAgICAgICAgICAgICAgPyByZWxhdGVkID09IG51bGxcbiAgICAgICAgICAgICAgICA6IChyZWxhdGVkICE9PSB0aGlzICYmIHJlbGF0ZWQucHJlZml4ICE9PSAneHVsJyAmJiAhL2RvY3VtZW50Ly50ZXN0KHRoaXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgJiYgIWlzQW5jZXN0b3IocmVsYXRlZCwgdGhpcykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IHsgYmFzZTogJ21vdXNlb3ZlcicsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2VsZWF2ZTogeyBiYXNlOiAnbW91c2VvdXQnLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNld2hlZWw6IHsgYmFzZTogL0ZpcmVmb3gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnIH1cbiAgICAgICAgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBwcm92aWRlIGEgY29uc2lzdGVudCBFdmVudCBvYmplY3QgYWNyb3NzIGJyb3dzZXJzIGJ5IHRha2luZyB0aGUgYWN0dWFsIERPTVxuICAgICAgLy8gZXZlbnQgb2JqZWN0IGFuZCBnZW5lcmF0aW5nIGEgbmV3IG9uZSBmcm9tIGl0cyBwcm9wZXJ0aWVzLlxuICAgICwgRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gYSB3aGl0ZWxpc3Qgb2YgcHJvcGVydGllcyAoZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcykgdGVsbHMgdXMgd2hhdCB0byBjaGVjayBmb3IgYW5kIGNvcHlcbiAgICAgICAgdmFyIGNvbW1vblByb3BzICA9IHN0cjJhcnIoJ2FsdEtleSBhdHRyQ2hhbmdlIGF0dHJOYW1lIGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgJyArXG4gICAgICAgICAgICAgICdkZXRhaWwgZXZlbnRQaGFzZSBnZXRNb2RpZmllclN0YXRlIGlzVHJ1c3RlZCBtZXRhS2V5IHJlbGF0ZWROb2RlIHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgJyAgK1xuICAgICAgICAgICAgICAnc3JjRWxlbWVudCB0YXJnZXQgdGltZVN0YW1wIHR5cGUgdmlldyB3aGljaCBwcm9wZXJ0eU5hbWUnKVxuICAgICAgICAgICwgbW91c2VQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2J1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBkYXRhVHJhbnNmZXIgJyAgICAgICtcbiAgICAgICAgICAgICAgJ2Zyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50JykpXG4gICAgICAgICAgLCBtb3VzZVdoZWVsUHJvcHMgPSBtb3VzZVByb3BzLmNvbmNhdChzdHIyYXJyKCd3aGVlbERlbHRhIHdoZWVsRGVsdGFYIHdoZWVsRGVsdGFZIHdoZWVsRGVsdGFaICcgK1xuICAgICAgICAgICAgICAnYXhpcycpKSAvLyAnYXhpcycgaXMgRkYgc3BlY2lmaWNcbiAgICAgICAgICAsIGtleVByb3BzICAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlIGtleUlkZW50aWZpZXIgJyAgICAgICAgICArXG4gICAgICAgICAgICAgICdrZXlMb2NhdGlvbiBsb2NhdGlvbicpKVxuICAgICAgICAgICwgdGV4dFByb3BzICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEnKSlcbiAgICAgICAgICAsIHRvdWNoUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCd0b3VjaGVzIHRhcmdldFRvdWNoZXMgY2hhbmdlZFRvdWNoZXMgc2NhbGUgcm90YXRpb24nKSlcbiAgICAgICAgICAsIG1lc3NhZ2VQcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhIG9yaWdpbiBzb3VyY2UnKSlcbiAgICAgICAgICAsIHN0YXRlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdzdGF0ZScpKVxuICAgICAgICAgICwgb3Zlck91dFJlZ2V4ID0gL292ZXJ8b3V0L1xuICAgICAgICAgICAgLy8gc29tZSBldmVudCB0eXBlcyBuZWVkIHNwZWNpYWwgaGFuZGxpbmcgYW5kIHNvbWUgbmVlZCBzcGVjaWFsIHByb3BlcnRpZXMsIGRvIHRoYXQgYWxsIGhlcmVcbiAgICAgICAgICAsIHR5cGVGaXhlcnMgICA9IFtcbiAgICAgICAgICAgICAgICB7IC8vIGtleSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAva2V5L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQua2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9jbGlja3xtb3VzZSg/ISguKndoZWVsfHNjcm9sbCkpfG1lbnV8ZHJhZ3xkcm9wL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50LCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnBvcyA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnBhZ2VZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WCArIGRvYy5ib2R5LnNjcm9sbExlZnQgKyByb290LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZICsgZG9jLmJvZHkuc2Nyb2xsVG9wICsgcm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJPdXRSZWdleC50ZXN0KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBldmVudFsodHlwZSA9PSAnbW91c2VvdmVyJyA/ICdmcm9tJyA6ICd0bycpICsgJ0VsZW1lbnQnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2Ugd2hlZWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL21vdXNlLiood2hlZWx8c2Nyb2xsKS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VXaGVlbFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBUZXh0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRleHQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHRQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gdG91Y2ggYW5kIGdlc3R1cmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150b3VjaHxeZ2VzdHVyZS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG91Y2hQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbWVzc2FnZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXm1lc3NhZ2UkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZXNzYWdlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHBvcHN0YXRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ecG9wc3RhdGUkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvLiovXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tbW9uUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAsIHR5cGVGaXhlck1hcCA9IHt9IC8vIHVzZWQgdG8gbWFwIGV2ZW50IHR5cGVzIHRvIGZpeGVyIGZ1bmN0aW9ucyAoYWJvdmUpLCBhIGJhc2ljIGNhY2hlIG1lY2hhbmlzbVxuXG4gICAgICAgICAgLCBFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCAoKGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQpLnBhcmVudFdpbmRvdyB8fCB3aW4pLmV2ZW50XG4gICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50XG4gICAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICAgPSBpc05hdGl2ZVxuICAgICAgICAgICAgICB0aGlzLmlzQmVhbiAgICAgICAgID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQpIHJldHVyblxuXG4gICAgICAgICAgICAgIHZhciB0eXBlICAgPSBldmVudC50eXBlXG4gICAgICAgICAgICAgICAgLCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxuICAgICAgICAgICAgICAgICwgaSwgbCwgcCwgcHJvcHMsIGZpeGVyXG5cbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gdGFyZ2V0LnBhcmVudE5vZGUgOiB0YXJnZXRcblxuICAgICAgICAgICAgICBpZiAoaXNOYXRpdmUpIHsgLy8gd2Ugb25seSBuZWVkIGJhc2ljIGF1Z21lbnRhdGlvbiBvbiBjdXN0b20gZXZlbnRzLCB0aGUgcmVzdCBleHBlbnNpdmUgJiBwb2ludGxlc3NcbiAgICAgICAgICAgICAgICBmaXhlciA9IHR5cGVGaXhlck1hcFt0eXBlXVxuICAgICAgICAgICAgICAgIGlmICghZml4ZXIpIHsgLy8gaGF2ZW4ndCBlbmNvdW50ZXJlZCB0aGlzIGV2ZW50IHR5cGUgYmVmb3JlLCBtYXAgYSBmaXhlciBmdW5jdGlvbiBmb3IgaXRcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSB0eXBlRml4ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZUZpeGVyc1tpXS5yZWcudGVzdCh0eXBlKSkgeyAvLyBndWFyYW50ZWVkIHRvIG1hdGNoIGF0IGxlYXN0IG9uZSwgbGFzdCBpcyAuKlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVGaXhlck1hcFt0eXBlXSA9IGZpeGVyID0gdHlwZUZpeGVyc1tpXS5maXhcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBmaXhlcihldmVudCwgdGhpcywgdHlwZSlcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBwcm9wcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKChwID0gcHJvcHNbaV0pIGluIHRoaXMpICYmIHAgaW4gZXZlbnQpIHRoaXNbcF0gPSBldmVudFtwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgYW5kIHN0b3BQcm9wYWdhdGlvbigpIGFyZSBhIGNvbnNpc3RlbnQgaW50ZXJmYWNlIHRvIHRob3NlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBvbiB0aGUgRE9NLCBzdG9wKCkgaXMgYW4gYWxpYXMgZm9yIGJvdGggb2YgdGhlbSB0b2dldGhlclxuICAgICAgICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCkgdGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIHRvIGJlIGhhbmRsZWQgaW50ZXJuYWxseSBiZWNhdXNlIHdlIG1hbmFnZSB0aGUgZXZlbnQgbGlzdCBmb3JcbiAgICAgICAgLy8gZWFjaCBlbGVtZW50XG4gICAgICAgIC8vIG5vdGUgdGhhdCBvcmlnaW5hbEVsZW1lbnQgbWF5IGJlIGEgQmVhbiNFdmVudCBvYmplY3QgaW4gc29tZSBzaXR1YXRpb25zXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCAmJiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGlzIHJpcGUgZm9yIG9wdGltaXNhdGlvbiwgbmV3IGV2ZW50cyBhcmUgKmV4cGVuc2l2ZSpcbiAgICAgICAgICAvLyBpbXByb3ZpbmcgdGhpcyB3aWxsIHNwZWVkIHVwIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICB2YXIgbmUgPSBuZXcgRXZlbnQodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLmlzTmF0aXZlKVxuICAgICAgICAgIG5lLmN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0XG4gICAgICAgICAgcmV0dXJuIG5lXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRXZlbnRcbiAgICAgIH0oKSlcblxuICAgICAgLy8gaWYgd2UncmUgaW4gb2xkIElFIHdlIGNhbid0IGRvIG9ucHJvcGVydHljaGFuZ2Ugb24gZG9jIG9yIHdpbiBzbyB3ZSB1c2UgZG9jLmRvY3VtZW50RWxlbWVudCBmb3IgYm90aFxuICAgICwgdGFyZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICByZXR1cm4gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgKGVsZW1lbnQgPT09IGRvYyB8fCBlbGVtZW50ID09PSB3aW4pID8gcm9vdCA6IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogQmVhbiBtYWludGFpbnMgYW4gaW50ZXJuYWwgcmVnaXN0cnkgZm9yIGV2ZW50IGxpc3RlbmVycy4gV2UgZG9uJ3QgdG91Y2ggZWxlbWVudHMsIG9iamVjdHNcbiAgICAgICAgKiBvciBmdW5jdGlvbnMgdG8gaWRlbnRpZnkgdGhlbSwgaW5zdGVhZCB3ZSBzdG9yZSBldmVyeXRoaW5nIGluIHRoZSByZWdpc3RyeS5cbiAgICAgICAgKiBFYWNoIGV2ZW50IGxpc3RlbmVyIGhhcyBhIFJlZ0VudHJ5IG9iamVjdCwgd2UgaGF2ZSBvbmUgJ3JlZ2lzdHJ5JyBmb3IgdGhlIHdob2xlIGluc3RhbmNlLlxuICAgICAgICAqL1xuICAgICwgUmVnRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlYWNoIGhhbmRsZXIgaXMgd3JhcHBlZCBzbyB3ZSBjYW4gaGFuZGxlIGRlbGVnYXRpb24gYW5kIGN1c3RvbSBldmVudHNcbiAgICAgICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuLCBjb25kaXRpb24sIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gKGV2ZW50LCBlYXJncykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIGFyZ3MgPyBzbGljZS5jYWxsKGVhcmdzLCBldmVudCA/IDAgOiAxKS5jb25jYXQoYXJncykgOiBlYXJncylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgZmluZFRhcmdldCA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uX19iZWFuRGVsID8gZm4uX19iZWFuRGVsLmZ0KGV2ZW50LnRhcmdldCwgZWxlbWVudCkgOiBldmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgaGFuZGxlciA9IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZFRhcmdldChldmVudCwgdGhpcykgLy8gZGVsZWF0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZm4uX19iZWFuRGVsKSBldmVudCA9IGV2ZW50LmNsb25lKGZpbmRUYXJnZXQoZXZlbnQpKSAvLyBkZWxlZ2F0ZWQgZXZlbnQsIGZpeCB0aGUgZml4XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSBmbi5fX2JlYW5EZWxcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICAgfVxuXG4gICAgICAgICwgUmVnRW50cnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwsIG5hbWVzcGFjZXMsIGFyZ3MsIHJvb3QpIHtcbiAgICAgICAgICAgIHZhciBjdXN0b21UeXBlICAgICA9IGN1c3RvbUV2ZW50c1t0eXBlXVxuICAgICAgICAgICAgICAsIGlzTmF0aXZlXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICd1bmxvYWQnKSB7XG4gICAgICAgICAgICAgIC8vIHNlbGYgY2xlYW4tdXBcbiAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UocmVtb3ZlTGlzdGVuZXIsIGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VzdG9tVHlwZSkge1xuICAgICAgICAgICAgICBpZiAoY3VzdG9tVHlwZS5jb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY3VzdG9tVHlwZS5jb25kaXRpb24sIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHlwZSA9IGN1c3RvbVR5cGUuYmFzZSB8fCB0eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICA9IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzW3R5cGVdICYmICEhZWxlbWVudFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVR5cGUgICAgPSAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiB0eXBlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLnR5cGUgICAgICAgICAgPSB0eXBlXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsICAgICAgPSBvcmlnaW5hbFxuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2VzICAgID0gbmFtZXNwYWNlc1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgICAgID0gVzNDX01PREVMIHx8IGlzTmF0aXZlID8gdHlwZSA6ICdwcm9wZXJ0eWNoYW5nZSdcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICAgICAgICA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgICAgICB0aGlzW2V2ZW50U3VwcG9ydF0gPSAhIXRoaXMudGFyZ2V0W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMucm9vdCAgICAgICAgICA9IHJvb3RcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciAgICAgICA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIGdpdmVuIGEgbGlzdCBvZiBuYW1lc3BhY2VzLCBpcyBvdXIgZW50cnkgaW4gYW55IG9mIHRoZW0/XG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5pbk5hbWVzcGFjZXMgPSBmdW5jdGlvbiAoY2hlY2tOYW1lc3BhY2VzKSB7XG4gICAgICAgICAgdmFyIGksIGosIGMgPSAwXG4gICAgICAgICAgaWYgKCFjaGVja05hbWVzcGFjZXMpIHJldHVybiB0cnVlXG4gICAgICAgICAgaWYgKCF0aGlzLm5hbWVzcGFjZXMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGZvciAoaSA9IGNoZWNrTmFtZXNwYWNlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IHRoaXMubmFtZXNwYWNlcy5sZW5ndGg7IGotLTspIHtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrTmFtZXNwYWNlc1tpXSA9PSB0aGlzLm5hbWVzcGFjZXNbal0pIGMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aCA9PT0gY1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggYnkgZWxlbWVudCwgb3JpZ2luYWwgZm4gKG9wdCksIGhhbmRsZXIgZm4gKG9wdClcbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAoY2hlY2tFbGVtZW50LCBjaGVja09yaWdpbmFsLCBjaGVja0hhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50ID09PSBjaGVja0VsZW1lbnQgJiZcbiAgICAgICAgICAgICghY2hlY2tPcmlnaW5hbCB8fCB0aGlzLm9yaWdpbmFsID09PSBjaGVja09yaWdpbmFsKSAmJlxuICAgICAgICAgICAgKCFjaGVja0hhbmRsZXIgfHwgdGhpcy5oYW5kbGVyID09PSBjaGVja0hhbmRsZXIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVnRW50cnlcbiAgICAgIH0oKSlcblxuICAgICwgcmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvdXIgbWFwIHN0b3JlcyBhcnJheXMgYnkgZXZlbnQgdHlwZSwganVzdCBiZWNhdXNlIGl0J3MgYmV0dGVyIHRoYW4gc3RvcmluZ1xuICAgICAgICAvLyBldmVyeXRoaW5nIGluIGEgc2luZ2xlIGFycmF5LlxuICAgICAgICAvLyB1c2VzICckJyBhcyBhIHByZWZpeCBmb3IgdGhlIGtleXMgZm9yIHNhZmV0eSBhbmQgJ3InIGFzIGEgc3BlY2lhbCBwcmVmaXggZm9yXG4gICAgICAgIC8vIHJvb3RMaXN0ZW5lcnMgc28gd2UgY2FuIGxvb2sgdGhlbSB1cCBmYXN0XG4gICAgICAgIHZhciBtYXAgPSB7fVxuXG4gICAgICAgICAgLy8gZ2VuZXJpYyBmdW5jdGlvbmFsIHNlYXJjaCBvZiBvdXIgcmVnaXN0cnkgZm9yIG1hdGNoaW5nIGxpc3RlbmVycyxcbiAgICAgICAgICAvLyBgZm5gIHJldHVybnMgZmFsc2UgdG8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgLCBmb3JBbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKSB7XG4gICAgICAgICAgICAgIHZhciBwZnggPSByb290ID8gJ3InIDogJyQnXG4gICAgICAgICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICcqJykge1xuICAgICAgICAgICAgICAgIC8vIHNlYXJjaCB0aGUgd2hvbGUgcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09IHBmeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdC5zdWJzdHIoMSksIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsLCBsaXN0ID0gbWFwW3BmeCArIHR5cGVdLCBhbGwgPSBlbGVtZW50ID09ICcqJ1xuICAgICAgICAgICAgICAgIGlmICghbGlzdCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgZm9yIChsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoYWxsIHx8IGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgaGFuZGxlcikpICYmICFmbihsaXN0W2ldLCBsaXN0LCBpLCB0eXBlKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGhhcyA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICAvLyB3ZSdyZSBub3QgdXNpbmcgZm9yQWxsIGhlcmUgc2ltcGx5IGJlY2F1c2UgaXQncyBhIGJpdCBzbG93ZXIgYW5kIHRoaXNcbiAgICAgICAgICAgICAgLy8gbmVlZHMgdG8gYmUgZmFzdFxuICAgICAgICAgICAgICB2YXIgaSwgbGlzdCA9IG1hcFsocm9vdCA/ICdyJyA6ICckJykgKyB0eXBlXVxuICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWxpc3RbaV0ucm9vdCAmJiBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIG51bGwpKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBudWxsLCByb290LCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBwdXQgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgdmFyIGhhcyA9ICFlbnRyeS5yb290ICYmICF0aGlzLmhhcyhlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAsIGtleSA9IChlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVcbiAgICAgICAgICAgICAgOyhtYXBba2V5XSB8fCAobWFwW2tleV0gPSBbXSkpLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIHJldHVybiBoYXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZGVsID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIGZvckFsbChlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBlbnRyeS5oYW5kbGVyLCBlbnRyeS5yb290LCBmdW5jdGlvbiAoZW50cnksIGxpc3QsIGkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSBkZWxldGUgbWFwWyhlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVdXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGR1bXAgYWxsIGVudHJpZXMsIHVzZWQgZm9yIG9udW5sb2FkXG4gICAgICAgICAgLCBlbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgdCwgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvciAodCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gJyQnKSBlbnRyaWVzID0gZW50cmllcy5jb25jYXQobWFwW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaGFzOiBoYXMsIGdldDogZ2V0LCBwdXQ6IHB1dCwgZGVsOiBkZWwsIGVudHJpZXM6IGVudHJpZXMgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBuZWVkIGEgc2VsZWN0b3IgZW5naW5lIGZvciBkZWxlZ2F0ZWQgZXZlbnRzLCB1c2UgcXVlcnlTZWxlY3RvckFsbCBpZiBpdCBleGlzdHNcbiAgICAgIC8vIGJ1dCBmb3Igb2xkZXIgYnJvd3NlcnMgd2UgbmVlZCBRd2VyeSwgU2l6emxlIG9yIHNpbWlsYXJcbiAgICAsIHNlbGVjdG9yRW5naW5lXG4gICAgLCBzZXRTZWxlY3RvckVuZ2luZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGxcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHMsIHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci5xdWVyeVNlbGVjdG9yQWxsKHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmVhbjogTm8gc2VsZWN0b3IgZW5naW5lIGluc3RhbGxlZCcpIC8vIGVlZWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGF0dGFjaCB0aGlzIGxpc3RlbmVyIHRvIGVhY2ggRE9NIGV2ZW50IHRoYXQgd2UgbmVlZCB0byBsaXN0ZW4gdG8sIG9ubHkgb25jZVxuICAgICAgLy8gcGVyIGV2ZW50IHR5cGUgcGVyIERPTSBlbGVtZW50XG4gICAgLCByb290TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIHR5cGUpIHtcbiAgICAgICAgaWYgKCFXM0NfTU9ERUwgJiYgdHlwZSAmJiBldmVudCAmJiBldmVudC5wcm9wZXJ0eU5hbWUgIT0gJ19vbicgKyB0eXBlKSByZXR1cm5cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0cnkuZ2V0KHRoaXMsIHR5cGUgfHwgZXZlbnQudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcblxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgaWYgKHR5cGUpIGV2ZW50LnR5cGUgPSB0eXBlXG5cbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBoYW5kbGVycyByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUsIGNhbGxpbmcgdGhlbSB1bmxlc3MgdGhleSBoYXZlXG4gICAgICAgIC8vIGJlZW4gcmVtb3ZlZCBieSBhIHByZXZpb3VzIGhhbmRsZXIgb3Igc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIGJlZW4gY2FsbGVkXG4gICAgICAgIGZvciAoOyBpIDwgbCAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaV0ucmVtb3ZlZCkgbGlzdGVuZXJzW2ldLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG4gICAgLCBsaXN0ZW5lciA9IFczQ19NT0RFTFxuICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQpIHtcbiAgICAgICAgICAgIC8vIG5ldyBicm93c2Vyc1xuICAgICAgICAgICAgZWxlbWVudFthZGQgPyBhZGRFdmVudCA6IHJlbW92ZUV2ZW50XSh0eXBlLCByb290TGlzdGVuZXIsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkLCBjdXN0b20pIHtcbiAgICAgICAgICAgIC8vIElFOCBhbmQgYmVsb3csIHVzZSBhdHRhY2hFdmVudC9kZXRhY2hFdmVudCBhbmQgd2UgaGF2ZSB0byBwaWdneS1iYWNrIHByb3BlcnR5Y2hhbmdlIGV2ZW50c1xuICAgICAgICAgICAgLy8gdG8gc2ltdWxhdGUgZXZlbnQgYnViYmxpbmcgZXRjLlxuICAgICAgICAgICAgdmFyIGVudHJ5XG4gICAgICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGN1c3RvbSB8fCB0eXBlXG4gICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZXZlbnQpIHsgLy8gaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICByb290TGlzdGVuZXIuY2FsbChlbGVtZW50LCBldmVudCwgY3VzdG9tKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCB0cnVlIC8vIGlzIHJvb3RcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbSAmJiBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9PSBudWxsKSBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9IDBcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbnRyeSA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCBjdXN0b20gfHwgdHlwZSwgcm9vdExpc3RlbmVyLCB0cnVlKVswXVxuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgICAgICByZWdpc3RyeS5kZWwoZW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAsIG9uY2UgPSBmdW5jdGlvbiAocm0sIGVsZW1lbnQsIHR5cGUsIGZuLCBvcmlnaW5hbEZuKSB7XG4gICAgICAgIC8vIHdyYXAgdGhlIGhhbmRsZXIgaW4gYSBoYW5kbGVyIHRoYXQgZG9lcyBhIHJlbW92ZSBhcyB3ZWxsXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIHJtKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICwgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3JnVHlwZSwgaGFuZGxlciwgbmFtZXNwYWNlcykge1xuICAgICAgICB2YXIgdHlwZSAgICAgPSBvcmdUeXBlICYmIG9yZ1R5cGUucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgICwgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCByZW1vdmVkICA9IHt9XG4gICAgICAgICAgLCBpLCBsXG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICgoIWhhbmRsZXIgfHwgaGFuZGxlcnNbaV0ub3JpZ2luYWwgPT09IGhhbmRsZXIpICYmIGhhbmRsZXJzW2ldLmluTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBwcm9ibGVtYXRpYywgd2UgaGF2ZSBhIHJlZ2lzdHJ5LmdldCgpIGFuZCByZWdpc3RyeS5kZWwoKSB0aGF0XG4gICAgICAgICAgICAvLyBib3RoIGRvIHJlZ2lzdHJ5IHNlYXJjaGVzIHNvIHdlIHdhc3RlIGN5Y2xlcyBkb2luZyB0aGlzLiBOZWVkcyB0byBiZSByb2xsZWQgaW50b1xuICAgICAgICAgICAgLy8gYSBzaW5nbGUgcmVnaXN0cnkuZm9yQWxsKGZuKSB0aGF0IHJlbW92ZXMgd2hpbGUgZmluZGluZywgYnV0IHRoZSBjYXRjaCBpcyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSdsbCBiZSBzcGxpY2luZyB0aGUgYXJyYXlzIHRoYXQgd2UncmUgaXRlcmF0aW5nIG92ZXIuIE5lZWRzIGV4dHJhIHRlc3RzIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2NyZXcgaXQgdXAuIEBydmFnZ1xuICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGhhbmRsZXJzW2ldKVxuICAgICAgICAgICAgaWYgKCFyZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gJiYgaGFuZGxlcnNbaV1bZXZlbnRTdXBwb3J0XSlcbiAgICAgICAgICAgICAgcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdID0geyB0OiBoYW5kbGVyc1tpXS5ldmVudFR5cGUsIGM6IGhhbmRsZXJzW2ldLnR5cGUgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBlYWNoIHR5cGUvZWxlbWVudCBmb3IgcmVtb3ZlZCBsaXN0ZW5lcnMgYW5kIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyIHdoZXJlIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICBmb3IgKGkgaW4gcmVtb3ZlZCkge1xuICAgICAgICAgIGlmICghcmVnaXN0cnkuaGFzKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgbnVsbCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpc3RlbmVyIG9mIHRoaXMgdHlwZSwgcmVtb3ZlIHRoZSByb290TGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgZmFsc2UsIHJlbW92ZWRbaV0uYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHVwIGEgZGVsZWdhdGUgaGVscGVyIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3Rvciwgd3JhcCB0aGUgaGFuZGxlciBmdW5jdGlvblxuICAgICwgZGVsZWdhdGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIC8vVE9ETzogZmluZFRhcmdldCAodGhlcmVmb3JlICQpIGlzIGNhbGxlZCB0d2ljZSwgb25jZSBmb3IgbWF0Y2ggYW5kIG9uY2UgZm9yXG4gICAgICAgIC8vIHNldHRpbmcgZS5jdXJyZW50VGFyZ2V0LCBmaXggdGhpcyBzbyBpdCdzIG9ubHkgbmVlZGVkIG9uY2VcbiAgICAgICAgdmFyIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBpLCBhcnJheSA9IGlzU3RyaW5nKHNlbGVjdG9yKSA/IHNlbGVjdG9yRW5naW5lKHNlbGVjdG9yLCByb290KSA6IHNlbGVjdG9yXG4gICAgICAgICAgICAgIGZvciAoOyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSByb290OyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGFycmF5Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kVGFyZ2V0KGUudGFyZ2V0LCB0aGlzKVxuICAgICAgICAgICAgICBpZiAobWF0Y2gpIGZuLmFwcGx5KG1hdGNoLCBhcmd1bWVudHMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gX19iZWFuRGVsIGlzbid0IHBsZWFzYW50IGJ1dCBpdCdzIGEgcHJpdmF0ZSBmdW5jdGlvbiwgbm90IGV4cG9zZWQgb3V0c2lkZSBvZiBCZWFuXG4gICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0ge1xuICAgICAgICAgICAgZnQgICAgICAgOiBmaW5kVGFyZ2V0IC8vIGF0dGFjaCBpdCBoZXJlIGZvciBjdXN0b21FdmVudHMgdG8gdXNlIHRvb1xuICAgICAgICAgICwgc2VsZWN0b3IgOiBzZWxlY3RvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICB9XG5cbiAgICAsIGZpcmVMaXN0ZW5lciA9IFczQ19NT0RFTCA/IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBtb2Rlcm4gYnJvd3NlcnMsIGRvIGEgcHJvcGVyIGRpc3BhdGNoRXZlbnQoKVxuICAgICAgICB2YXIgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KGlzTmF0aXZlID8gJ0hUTUxFdmVudHMnIDogJ1VJRXZlbnRzJylcbiAgICAgICAgZXZ0W2lzTmF0aXZlID8gJ2luaXRFdmVudCcgOiAnaW5pdFVJRXZlbnQnXSh0eXBlLCB0cnVlLCB0cnVlLCB3aW4sIDEpXG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICB9IDogZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG9sZCBicm93c2VyIHVzZSBvbnByb3BlcnR5Y2hhbmdlLCBqdXN0IGluY3JlbWVudCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgaXNOYXRpdmUgPyBlbGVtZW50LmZpcmVFdmVudCgnb24nICsgdHlwZSwgZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCkpIDogZWxlbWVudFsnX29uJyArIHR5cGVdKytcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogUHVibGljIEFQSTogb2ZmKCksIG9uKCksIGFkZCgpLCAocmVtb3ZlKCkpLCBvbmUoKSwgZmlyZSgpLCBjbG9uZSgpXG4gICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9mZihlbGVtZW50WywgZXZlbnRUeXBlKHMpWywgaGFuZGxlciBdXSlcbiAgICAgICAgKi9cbiAgICAsIG9mZiA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlU3BlYywgZm4pIHtcbiAgICAgICAgdmFyIGlzVHlwZVN0ciA9IGlzU3RyaW5nKHR5cGVTcGVjKVxuICAgICAgICAgICwgaywgdHlwZSwgbmFtZXNwYWNlcywgaVxuXG4gICAgICAgIGlmIChpc1R5cGVTdHIgJiYgdHlwZVNwZWMuaW5kZXhPZignICcpID4gMCkge1xuICAgICAgICAgIC8vIG9mZihlbCwgJ3QxIHQyIHQzJywgZm4pIG9yIG9mZihlbCwgJ3QxIHQyIHQzJylcbiAgICAgICAgICB0eXBlU3BlYyA9IHN0cjJhcnIodHlwZVNwZWMpXG4gICAgICAgICAgZm9yIChpID0gdHlwZVNwZWMubGVuZ3RoOyBpLS07KVxuICAgICAgICAgICAgb2ZmKGVsZW1lbnQsIHR5cGVTcGVjW2ldLCBmbilcbiAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgIGlmICh0eXBlICYmIGN1c3RvbUV2ZW50c1t0eXBlXSkgdHlwZSA9IGN1c3RvbUV2ZW50c1t0eXBlXS5iYXNlXG5cbiAgICAgICAgaWYgKCF0eXBlU3BlYyB8fCBpc1R5cGVTdHIpIHtcbiAgICAgICAgICAvLyBvZmYoZWwpIG9yIG9mZihlbCwgdDEubnMpIG9yIG9mZihlbCwgLm5zKSBvciBvZmYoZWwsIC5uczEubnMyLm5zMylcbiAgICAgICAgICBpZiAobmFtZXNwYWNlcyA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzcGFjZXMgPSBzdHIyYXJyKG5hbWVzcGFjZXMsICcuJylcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmbiwgbmFtZXNwYWNlcylcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHR5cGVTcGVjKSkge1xuICAgICAgICAgIC8vIG9mZihlbCwgZm4pXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgbnVsbCwgdHlwZVNwZWMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCB7IHQxOiBmbjEsIHQyLCBmbjIgfSlcbiAgICAgICAgICBmb3IgKGsgaW4gdHlwZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU3BlYy5oYXNPd25Qcm9wZXJ0eShrKSkgb2ZmKGVsZW1lbnQsIGssIHR5cGVTcGVjW2tdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnRzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsRm4sIHR5cGUsIHR5cGVzLCBpLCBhcmdzLCBlbnRyeSwgZmlyc3RcblxuICAgICAgICAvL1RPRE86IHRoZSB1bmRlZmluZWQgY2hlY2sgbWVhbnMgeW91IGNhbid0IHBhc3MgYW4gJ2FyZ3MnIGFyZ3VtZW50LCBmaXggdGhpcyBwZXJoYXBzP1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXZlbnRzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGNhbid0IGhhbmRsZSBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgICBvbi5jYWxsKHRoaXMsIGVsZW1lbnQsIHR5cGUsIGV2ZW50c1t0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgLy8gZGVsZWdhdGVkIGV2ZW50XG4gICAgICAgICAgb3JpZ2luYWxGbiA9IGZuXG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA0KVxuICAgICAgICAgIGZuICAgICAgICAgPSBkZWxlZ2F0ZShzZWxlY3Rvciwgb3JpZ2luYWxGbiwgc2VsZWN0b3JFbmdpbmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKVxuICAgICAgICAgIGZuICAgICAgICAgPSBvcmlnaW5hbEZuID0gc2VsZWN0b3JcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzID0gc3RyMmFycihldmVudHMpXG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBvbmUoKSwgd3JhcCBpbiBhIHNlbGYtcmVtb3ZpbmcgaGFuZGxlclxuICAgICAgICBpZiAodGhpcyA9PT0gT05FKSB7XG4gICAgICAgICAgZm4gPSBvbmNlKG9mZiwgZWxlbWVudCwgZXZlbnRzLCBmbiwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIC8vIGFkZCBuZXcgaGFuZGxlciB0byB0aGUgcmVnaXN0cnkgYW5kIGNoZWNrIGlmIGl0J3MgdGhlIGZpcnN0IGZvciB0aGlzIGVsZW1lbnQvdHlwZVxuICAgICAgICAgIGZpcnN0ID0gcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAsIHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJykgLy8gZXZlbnQgdHlwZVxuICAgICAgICAgICAgLCBmblxuICAgICAgICAgICAgLCBvcmlnaW5hbEZuXG4gICAgICAgICAgICAsIHN0cjJhcnIodHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpLCAnLicpIC8vIG5hbWVzcGFjZXNcbiAgICAgICAgICAgICwgYXJnc1xuICAgICAgICAgICAgLCBmYWxzZSAvLyBub3Qgcm9vdFxuICAgICAgICAgICkpXG4gICAgICAgICAgaWYgKGVudHJ5W2V2ZW50U3VwcG9ydF0gJiYgZmlyc3QpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGV2ZW50IG9mIHRoaXMgdHlwZSBvbiB0aGlzIGVsZW1lbnQsIGFkZCByb290IGxpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCBlbnRyeS5ldmVudFR5cGUsIHRydWUsIGVudHJ5LmN1c3RvbVR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogYWRkKGVsZW1lbnRbLCBzZWxlY3Rvcl0sIGV2ZW50VHlwZShzKSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIERlcHJlY2F0ZWQ6IGtlcHQgKGZvciBub3cpIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5XG4gICAgICAgICovXG4gICAgLCBhZGQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGVsZm4pIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICwgIWlzU3RyaW5nKGZuKVxuICAgICAgICAgICAgICA/IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICAgICA6IFsgZWxlbWVudCwgZm4sIGV2ZW50cywgZGVsZm4gXS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgNSkgOiBbXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoT05FLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGZpcmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogVGhlIG9wdGlvbmFsICdhcmdzJyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBpZiBubyAnYXJncycgYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgICAgKiB0aGVuIHdlIGNhbiB1c2UgdGhlIGJyb3dzZXIncyBET00gZXZlbnQgc3lzdGVtLCBvdGhlcndpc2Ugd2UgdHJpZ2dlciBoYW5kbGVycyBtYW51YWxseVxuICAgICAgICAqL1xuICAgICwgZmlyZSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhcmdzKSB7XG4gICAgICAgIHZhciB0eXBlcyA9IHN0cjJhcnIodHlwZSlcbiAgICAgICAgICAsIGksIGosIGwsIG5hbWVzLCBoYW5kbGVyc1xuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHR5cGUgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgaWYgKG5hbWVzID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lcyA9IHN0cjJhcnIobmFtZXMsICcuJylcbiAgICAgICAgICBpZiAoIW5hbWVzICYmICFhcmdzICYmIGVsZW1lbnRbZXZlbnRTdXBwb3J0XSkge1xuICAgICAgICAgICAgZmlyZUxpc3RlbmVyKG5hdGl2ZUV2ZW50c1t0eXBlXSwgdHlwZSwgZWxlbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uLW5hdGl2ZSBldmVudCwgZWl0aGVyIGJlY2F1c2Ugb2YgYSBuYW1lc3BhY2UsIGFyZ3VtZW50cyBvciBhIG5vbiBET00gZWxlbWVudFxuICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGFsbCBsaXN0ZW5lcnMgYW5kIG1hbnVhbGx5ICdmaXJlJ1xuICAgICAgICAgICAgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICBhcmdzID0gW2ZhbHNlXS5jb25jYXQoYXJncylcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2pdLmluTmFtZXNwYWNlcyhuYW1lcykpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5oYW5kbGVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogY2xvbmUoZHN0RWxlbWVudCwgc3JjRWxlbWVudFssIGV2ZW50VHlwZSBdKVxuICAgICAgICAqXG4gICAgICAgICogVE9ETzogcGVyaGFwcyBmb3IgY29uc2lzdGVuY3kgd2Ugc2hvdWxkIGFsbG93IHRoZSBzYW1lIGZsZXhpYmlsaXR5IGluIHR5cGUgc3BlY2lmaWVycz9cbiAgICAgICAgKi9cbiAgICAsIGNsb25lID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZyb20sIHR5cGUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGZyb20sIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGhhbmRsZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcbiAgICAgICAgICAsIGFyZ3MsIGJlYW5EZWxcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5vcmlnaW5hbCkge1xuICAgICAgICAgICAgYXJncyA9IFsgZWxlbWVudCwgaGFuZGxlcnNbaV0udHlwZSBdXG4gICAgICAgICAgICBpZiAoYmVhbkRlbCA9IGhhbmRsZXJzW2ldLmhhbmRsZXIuX19iZWFuRGVsKSBhcmdzLnB1c2goYmVhbkRlbC5zZWxlY3RvcilcbiAgICAgICAgICAgIGFyZ3MucHVzaChoYW5kbGVyc1tpXS5vcmlnaW5hbClcbiAgICAgICAgICAgIG9uLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAsIGJlYW4gPSB7XG4gICAgICAgICAgJ29uJyAgICAgICAgICAgICAgICA6IG9uXG4gICAgICAgICwgJ2FkZCcgICAgICAgICAgICAgICA6IGFkZFxuICAgICAgICAsICdvbmUnICAgICAgICAgICAgICAgOiBvbmVcbiAgICAgICAgLCAnb2ZmJyAgICAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ3JlbW92ZScgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdjbG9uZScgICAgICAgICAgICAgOiBjbG9uZVxuICAgICAgICAsICdmaXJlJyAgICAgICAgICAgICAgOiBmaXJlXG4gICAgICAgICwgJ0V2ZW50JyAgICAgICAgICAgICA6IEV2ZW50XG4gICAgICAgICwgJ3NldFNlbGVjdG9yRW5naW5lJyA6IHNldFNlbGVjdG9yRW5naW5lXG4gICAgICAgICwgJ25vQ29uZmxpY3QnICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBvbGRcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gIC8vIGZvciBJRSwgY2xlYW4gdXAgb24gdW5sb2FkIHRvIGF2b2lkIGxlYWtzXG4gIGlmICh3aW4uYXR0YWNoRXZlbnQpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpLCBlbnRyaWVzID0gcmVnaXN0cnkuZW50cmllcygpXG4gICAgICBmb3IgKGkgaW4gZW50cmllcykge1xuICAgICAgICBpZiAoZW50cmllc1tpXS50eXBlICYmIGVudHJpZXNbaV0udHlwZSAhPT0gJ3VubG9hZCcpIG9mZihlbnRyaWVzW2ldLmVsZW1lbnQsIGVudHJpZXNbaV0udHlwZSlcbiAgICAgIH1cbiAgICAgIHdpbi5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICAgICAgd2luLkNvbGxlY3RHYXJiYWdlICYmIHdpbi5Db2xsZWN0R2FyYmFnZSgpXG4gICAgfVxuICAgIHdpbi5hdHRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBzZWxlY3RvciBlbmdpbmUgdG8gaW50ZXJuYWwgZGVmYXVsdCAocVNBIG9yIHRocm93IEVycm9yKVxuICBzZXRTZWxlY3RvckVuZ2luZSgpXG5cbiAgcmV0dXJuIGJlYW5cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmVhbi9iZWFuLmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbi8vIHV0aWwgdmFyaWFibGVzXG5sZXQgX2RlYnVnZ2luZyA9IFtdLCBfZGVidWdBbGwgPSBmYWxzZSwgdHlwZVJlZ2lzdHJ5ID0ge30sIHNwbGljZSA9IEFycmF5LnNwbGljZTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdHR5cGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSkge1xuXHRcdGlmICghdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0pXG5cdFx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSA9IG5ldyBNYXAoKTtcblx0XHRpZiAoIW5hbWUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV07XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLmdldChuYW1lKTtcblx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5zZXQobmFtZSwgdHlwZSk7XG5cdH0sXG5cblx0Y3JlYXRlVHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBwcm9wcywgZGVmYXVsdFR5cGUpIHtcblx0XHRsZXQgbmFtZSA9IHByb3BzLm5hbWU7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0eXBlIGV4aXN0c1xuXHRcdGxldCB0eXBlID0gdGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSk7XG5cdFx0aWYgKCF0eXBlKSB7XG5cdFx0XHRsZXQgZXh0ZW5kID0gcHJvcHMuZXh0ZW5kcyA/IHRoaXMudHlwZShuYW1lc3BhY2UsIHByb3BzLmV4dGVuZHMpIDogbnVsbDtcblx0XHRcdGlmICghZXh0ZW5kICYmIGRlZmF1bHRUeXBlKVxuXHRcdFx0XHRleHRlbmQgPSBkZWZhdWx0VHlwZTtcblx0XHRcdGlmIChleHRlbmQpXG5cdFx0XHRcdHR5cGUgPSBjbGFzcyBleHRlbmRzIGV4dGVuZCB7fTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0eXBlID0gY2xhc3Mge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0XHRcdFx0Xy5hc3NpZ24odGhpcywgY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcHJvcHMubmFtZTtcblx0XHRcdGRlbGV0ZSBwcm9wcy5leHRlbmRzO1xuXHRcdFx0Xy5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3BzKTtcblx0XHRcdHR5cGUudHlwZU5hbWUgPSBuYW1lO1xuXHRcdFx0dGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuY3JlYXRlVHlwZSAtICcgKyBuYW1lc3BhY2UgKyAnLicgKyBuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH0sXG5cblx0YnVpbGRUeXBlczogZnVuY3Rpb24odHlwZXMsIG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpIHtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyAtICcgKyBuYW1lc3BhY2UpO1xuXG5cdFx0aWYgKCF0eXBlcyAmJiBkZWZhdWx0VHlwZSkge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChkZWZhdWx0VHlwZSkge1xuXHRcdFx0bGV0IHR5cGUgPSBfLnJlbW92ZSh0eXBlcywge25hbWU6IGRlZmF1bHRUeXBlLm5hbWV9KTtcblx0XHRcdHR5cGUgPSB0eXBlLmxlbmd0aCA+IDAgPyB0eXBlWzBdIDogbnVsbDtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIF8uYXNzaWduKHt9LCBkZWZhdWx0VHlwZSwgdHlwZSkpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHR9XG5cblx0XHRfLmZvckVhY2godHlwZXMsICh0eXBlKSA9PiB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCB0eXBlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XG5cdH0sXG5cblx0Ly8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvcnJlY3RseSBzZXQgdXAgdGhlIHByb3RvdHlwZSBjaGFpbiwgZm9yIHN1YmNsYXNzZXMuXG5cdC8vIFNpbWlsYXIgdG8gYGdvb2cuaW5oZXJpdHNgLCBidXQgdXNlcyBhIGhhc2ggb2YgcHJvdG90eXBlIHByb3BlcnRpZXMgYW5kXG5cdC8vIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQuXG5cdGV4dGVuZDogZnVuY3Rpb24oY2hpbGQsIHBhcmVudCwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcblx0XHQvLyBBZGQgc3RhdGljIHByb3BlcnRpZXMgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBpZiBzdXBwbGllZC5cblx0XHRfLmV4dGVuZChjaGlsZCwgcGFyZW50LCBzdGF0aWNQcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0byBpbmhlcml0IGZyb20gYHBhcmVudGAsIHdpdGhvdXQgY2FsbGluZ1xuXHRcdC8vIGBwYXJlbnRgJ3MgY29uc3RydWN0b3IgZnVuY3Rpb24uXG5cdFx0dmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uKCl7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfTtcblx0XHRTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcblx0XHRjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG5cdFx0Ly8gQWRkIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChpbnN0YW5jZSBwcm9wZXJ0aWVzKSB0byB0aGUgc3ViY2xhc3MsXG5cdFx0Ly8gaWYgc3VwcGxpZWQuXG5cdFx0aWYgKHByb3RvUHJvcHMpIF8uZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cblx0XHQvLyBTZXQgYSBjb252ZW5pZW5jZSBwcm9wZXJ0eSBpbiBjYXNlIHRoZSBwYXJlbnQncyBwcm90b3R5cGUgaXMgbmVlZGVkIGxhdGVyLlxuXHRcdGNoaWxkLnN1cGVyY2xhc3MgPSBwYXJlbnQucHJvdG90eXBlO1xuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9LFxuXG5cdGluaXRDb25maWc6IGZ1bmN0aW9uKG9iaiwgY29uZmlnKSB7XG5cdFx0bGV0IHByb3BzID0ge30sIGMgPSBvYmouY29uc3RydWN0b3IsIGNBcnIgPSBbY107XG5cdFx0d2hpbGUgKGMpIHtcblx0XHRcdGlmIChjLnN1cGVyKSB7XG5cdFx0XHRcdGMgPSBjLnN1cGVyLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRzcGxpY2UuYXBwbHkoY0FyciwgWzAsIDAsIGNdKTtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHRjID0gbnVsbDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNBcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGMgPSBjQXJyW2ldO1xuXHRcdFx0aWYgKGMuREVGQVVMVFMpXG5cdFx0XHRcdF8uYXNzaWduKHByb3BzLCBjLkRFRkFVTFRTKTtcblx0XHR9XG5cdFx0b2JqLnByb3BzID0gXy5hc3NpZ24ocHJvcHMsIGNvbmZpZyk7XG5cdFx0Yy5wcm90b3R5cGUucHJvcCA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBKUyBjbGFzcyBjb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGpzQ2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDbGFzc1xuXHQgKi9cblx0Z2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcykge1xuXHRcdGlmICghanNDbGFzcylcblx0XHRcdGpzQ2xhc3MgPSBkZWZhdWx0Q2xhc3M7XG5cblx0XHRpZiAoXy5pc1N0cmluZyhqc0NsYXNzKSlcblx0XHRcdGpzQ2xhc3MgPSBldmFsKGpzQ2xhc3MpO1xuXHRcdHJldHVybiBqc0NsYXNzO1xuXHR9LFxuXG5cdGRlYnVnOiBmdW5jdGlvbihtb2R1bGVOYW1lKSB7XG5cdFx0aWYgKG1vZHVsZU5hbWUpIHtcblx0XHRcdF9kZWJ1Z2dpbmcucHVzaChtb2R1bGVOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2RlYnVnQWxsID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cblx0bG9nOiBmdW5jdGlvbihuYW1lLCBtZXNzYWdlKSB7XG5cdFx0aWYgKCF3aW5kb3cuY29uc29sZSkgeyByZXR1cm47IH1cblx0XHR2YXIgZGVidWcgPSBfZGVidWdBbGw7XG5cdFx0aWYgKCFfZGVidWdBbGwpIHtcblx0XHRcdGRlYnVnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaTxfZGVidWdnaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChfZGVidWdnaW5nW2ldPT1uYW1lKSBkZWJ1ZyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghZGVidWcpIHsgcmV0dXJuOyB9XG5cdFx0d2hpbGUgKG5hbWUubGVuZ3RoPDEwKSB7IG5hbWU9bmFtZSsnICc7IH1cblx0XHRuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMTApK1wiIC0gXCI7XG5cdFx0Y29uc29sZS5pbmZvKG5hbWUsIG1lc3NhZ2UpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHN1YiBzaGFwZXMgd2l0aGluIGEgcGFyZW50IHNoYXJlLlxuXHQgKiBAcGFyYW0gYm91bmRzXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgZ2VvbWV0cnkgaW5mb3JtYXRpb24sIHRoZSBmb3JtYXQgb2YgR2VvbWV0cnkgaXM6XG5cdCAqIHtcblx0ICogICAgICB4OiBcInggY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQsIGlmIGxlc3MgdGhhbiAxLCB3aWxsIGJlIHRyZWF0ZWQgYXMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHBhcmVudCB3aWR0aC5cIixcblx0ICogICAgICB5OiBcInkgY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQuXCIsXG5cdCAqICAgICAgYW5jaG9yWDogXCJ4IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgYW5jaG9yWTogXCJ5IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgb2Zmc2V0WDogXCJ0aGUgb2Zmc2V0IGluIHRoZSB4IGRpcmVjdGlvbi5cIixcblx0ICogICAgICBvZmZzZXRZOiBcInRoZSBvZmZzZXQgaW4gdGhlIHkgZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIHdpZHRoOiBcInRoZSB3aWR0aCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiLFxuXHQgKiAgICAgIGhlaWdodDogXCJ0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBlbGVtZW50XCJcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbjogZnVuY3Rpb24oYm91bmRzLCBnZW9tZXRyeSkge1xuXHRcdGxldCB4ID0gTWF0aC5hYnMoZ2VvbWV0cnkueCkgPD0gMSA/IGJvdW5kcy53aWR0aCAqIGdlb21ldHJ5LnggOiBnZW9tZXRyeS54O1xuXHRcdGxldCB5ID0gTWF0aC5hYnMoZ2VvbWV0cnkueSkgPD0gMSA/IGJvdW5kcy5oZWlnaHQgKiBnZW9tZXRyeS55IDogZ2VvbWV0cnkueTtcblx0XHRyZXR1cm4gdGhpcy5vZmZzZXRQb3NpdGlvbihbeCwgeV0sIGdlb21ldHJ5KTtcblx0fSxcblxuXHRvZmZzZXRQb3NpdGlvbjogZnVuY3Rpb24ocG9zLCBnZW9tZXRyeSkge1xuXHRcdHJldHVybiBbcG9zWzBdICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9zWzFdICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCpzY2FsZSt0WzBdLCBvLnkqc2NhbGUrdFsxXSwgby53aWR0aCpzY2FsZSwgby5oZWlnaHQqc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gW29bMF0qc2NhbGUrdFswXSwgb1sxXSpzY2FsZSt0WzFdXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHNjYWxlZCwgaS5lLiwgcmVsYXRpdmUgcG9zaXRpb24gY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHRzY2FsZTogZnVuY3Rpb24odmlldywgbykge1xuXHRcdHZhciBzY2FsZSA9IHZpZXcuc2NhbGUoKTtcblx0XHR2YXIgdCA9IHZpZXcudHJhbnNsYXRlKCk7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdLXRbMF0pL3NjYWxlLCAob1sxXS10WzFdKS9zY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldE9ialByb3BlcnR5OiBmdW5jdGlvbihvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLmdldFByb3BlcnR5ICYmIF8uaXNGdW5jdGlvbihvYmouZ2V0UHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIG9iai5nZXRQcm9wZXJ0eShwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzKSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XG5cdH1cblxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxuXHRcdGlmIChJZHggPiAwKVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHNBZ2VudC5zdWJzdHJpbmcoSWR4ICsgNSwgc0FnZW50LmluZGV4T2YoXCIuXCIsIElkeCkpKTtcblxuXHRcdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXG5cdFx0XHRyZXR1cm4gMTE7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpLFxuXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xuXHRcdC8vIEluc3RhbGxUcmlnZ2VyOiBGaXJlZm94J3MgQVBJIHRvIGluc3RhbGwgYWRkLW9uc1xuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXHR9KSgpLFxuXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoZWwsIGF0dHJpYnMsIHN0eWxlcyk7XG5cdFx0aWYgKGh0bWwpXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblxuXHRjcmVhdGVFbGVtZW50QnlTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XG5cdH0sXG5cblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcblx0XHRpZiAoYXR0cmlicykge1xuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXMpIHtcblx0XHRcdF8uZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdHRlc3RFbGVtZW50OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xuXHR9LFxuXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0aWYgKHRoaXMudGVzdEVsZW1lbnQobm9kZSwgbWV0aG9kKSApXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XG5cdH0sXG5cblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCB3ID0gZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQ7XG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0ICsgdy8yLCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wICsgaC8yXTtcblx0fSxcblxuXHRtb3ZlOiBmdW5jdGlvbihlbCwgeCwgeSkge1xuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHR9LFxuXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHcgPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0cmV0dXJuIFt3LCBoXTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XG5cdFx0aWYgKHcpIGVsLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCA9IHt9O1xuXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcblx0XHR2YXIgaW1nLCB0aGF0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhhdC5wcmVsb2FkSW1hZ2VzLmxvYWRlZFt0aGlzLm5hbWVdID0ge3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fTtcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxpc3QucHVzaChpbWcpO1xuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHNyY1xuXHQgKi9cblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWRbc3JjXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXG5cdCAqIEBwYXJhbSBlICBpbnB1dCBldmVudFxuXHQgKi9cblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xuXHRcdHZhciB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcblx0XHRyZXR1cm4gKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvRG9tVXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblx0Y29uc3RydWN0b3Ioc3RyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHRpZiAoc3RyKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xuXHR9XG5cblx0YXBwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcmVwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0fVxuXG5cdHJlbW92ZUxhc3QoKSB7XG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZyhzZXApIHtcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXG5cdCAqL1xuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xuXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzOlxuXHQgKlxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKi9cblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xuXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XG5cblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9Jztcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0dHlwZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiBmYWxzZSxcblx0b3J0aG9nb25hbDogZmFsc2Vcbn07XG5cbmxldCBkZWZhdWx0R2VvbWV0cnkgPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdGFuY2hvclg6IDAsXG5cdGFuY2hvclk6IDAsXG5cdG9mZnNldFg6IDAsXG5cdG9mZnNldFk6IDBcbn07XG5cbmxldCBsaW5rVHlwZXMgPSB7fTtcblxuY2xhc3MgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHR0aGlzLnN0YXJ0ID0gdGVybWluYWxWaXN1YWxbMF0ucG9pbnQ7XG5cdFx0dGhpcy5lbmQgPSB0ZXJtaW5hbFZpc3VhbFsxXS5wb2ludDtcblx0XHR0aGlzLnN0YXJ0Tm9ybWFsID0gdGVybWluYWxWaXN1YWxbMF0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuZW5kTm9ybWFsID0gdGVybWluYWxWaXN1YWxbMV0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuc3RhcnRNYXJrZXIgPSBzdGFydE1hcmtlcjtcblx0XHR0aGlzLmVuZE1hcmtlciA9IGVuZE1hcmtlcjtcblx0XHRfLmFzc2lnbih0aGlzLCBzaGFwZUNvbmZpZyk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsodGhpcyk7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgY29udHJvbFB0cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGksIGwgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKVxuXHRcdFx0bCArPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdHJldHVybiBsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IG1vZGlmaWVycyBvciBsYWJlbC4uXG5cdCAqXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxuXHQgKiBAcmV0dXJuICpbXSB0aGUgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPD0gMSkgcCAqPSBsO1xuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xuXHRcdGlmIChwID4gbCkgcCA9IGw7XG5cblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHMsIGQsIHBvaW50LCBkaXI7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRkID0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdGlmIChwIDw9IGQpIHtcblx0XHRcdFx0Ly8gd2UndmUgbG9jYXRlZCB0aGUgbGluZSBzZWdtZW50LlxuXHRcdFx0XHRwb2ludCA9IHBvaW50c1tpXS5jbG9uZSgpO1xuXHRcdFx0XHRkaXIgPSBwb2ludC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pO1xuXHRcdFx0XHRwb2ludC50cmFuc2xhdGUoZGlyLmdldFNjYWxlZChwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cCAtPSBkO1xuXHRcdH1cblxuXHRcdC8vIHJldHVybiB0aGUgbGFzdCBwb2ludC5cblx0XHRpZiAoIXBvaW50KVxuXHRcdFx0cG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluayc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TGluayh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGxpbmtDbGFzcyA9IGxpbmtUeXBlc1tzaGFwZUNvbmZpZy50eXBlXTtcblx0XHRpZiAobGlua0NsYXNzKVxuXHRcdFx0cmV0dXJuIG5ldyBsaW5rQ2xhc3ModGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0XHRjb25zb2xlLmxvZygnbGluayB0eXBlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy50eXBlKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5jbGFzcyBEaXJlY3RMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cbn1cblxuY2xhc3MgQmV6aWVyTGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2xQdHMoKSB7XG5cdFx0bGV0IHMgPSB0aGlzLnBvaW50c1swXSwgZSA9IHRoaXMucG9pbnRzWzFdO1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBudWxsO1xuXHRcdHB0c1sxXSA9IFtdO1xuXHRcdGlmICh0aGlzLnN0YXJ0Tm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KHMueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIHMueSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuZE5vcm1hbC54ID09IDApIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludChlLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBlLnkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApID4gMSkgcCAvPSBsO1xuXHRcdGlmIChwIDwgMCkgcCsrO1xuXHRcdGlmIChwID4gMSkgcC0tO1xuXG5cdFx0bGV0IHB0cyA9IHRoaXMucG9pbnRzO1xuXHRcdGxldCBjdHJscHRzID0gdGhpcy5jb250cm9sUHRzO1xuXHRcdGxldCBwMSA9IHB0c1swXTtcblx0XHRsZXQgcDIgPSBjdHJscHRzWzFdWzBdO1xuXHRcdGxldCBwMyA9IGN0cmxwdHNbMV1bMV07XG5cdFx0bGV0IHA0ID0gcHRzWzFdO1xuXG5cdFx0bGV0IHBvaW50ID0gWygxLXApKigxLXApKigxLXApICogcDEueCArIDMqcCooMS1wKSooMS1wKSAqIHAyLnggKyAzKnAqcCooMS1wKSAqIHAzLnggKyBwKnAqcCAqIHA0LngsICgxLXApKigxLXApKigxLXApICogcDEueSArIDMqcCooMS1wKSooMS1wKSAqIHAyLnkgKyAzKnAqcCooMS1wKSAqIHAzLnkgKyBwKnAqcCAqIHA0LnldO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxufVxuXG5jbGFzcyBFbnRpdHlSZWxhdGlvbnMgZXh0ZW5kcyBMaW5rIHtcblxufVxuXG5cbmNsYXNzIE1hbmhhdHRhbiBleHRlbmRzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHMoc2hhcGVDb25maWcsIHtcblx0XHRcdE1JTl9CVUZGRVI6IDEwLFxuXHRcdFx0YXV0b1JvdXRlOiBmYWxzZSxcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXG5cdFx0fSk7XG5cdFx0c3VwZXIodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7XG5cdFx0bGV0IHBvcyA9IE1hbmhhdHRhbi5yb3V0ZUludGVybmFsKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnN0YXJ0Tm9ybWFsLCB0aGlzLmVuZE5vcm1hbCwgdGhpcy5NSU5fQlVGRkVSKTtcblx0XHRwb3MgPSBNYW5oYXR0YW4ucHJvY2Vzc1Bvc2l0aW9ucyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgcG9zLCB0aGlzLnN0YXJ0Tm9ybWFsLnghPTApO1xuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdFx0dmFyIGJveGVzID0gW10sIG5vZGUsIHN0YXJ0Qm94LCBlbmRCb3g7XG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcblx0XHRcdHZhciBpbmRleCA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdC8vIERvIG5vdCBpbmNsdWRlIHNvdXJjZSBvciB0YXJnZXQgYW5jZXN0b3JzIGluIHJvdXRpbmcuXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcblx0XHRcdFx0c3RhcnRCb3ggPSBpbmRleDtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xuXHRcdFx0XHRib3hlcy5wdXNoKG5vZGUuZ2V0Qm91bmRzKGRvY3VtZW50KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYm94ZXMubGVuZ3RoID4gMSlcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdH1cblx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgcm91dGUgYmFzZWQgb24gdGhlIHN0YXJ0LCBlbmQgYW5kIHN0YXJ0Tm9ybWFsIGFuZCBlbmROb3JtYWxcblx0ICogTm9uZSBvZiB0aGUgcGFyYW1ldGVycyBjYW4gYmUgbnVsbFxuXHQgKiBUT0RPOiBUaGlzIG1ldGhvZCBjb3VsZCB1c2Ugc29tZSBpbXByb3ZlbWVudC4uLlxuXHQgKi9cblx0c3RhdGljIHJvdXRlSW50ZXJuYWwoc3RhcnQsIGVuZCwgc3RhcnROb3JtYWwsIGVuZE5vcm1hbCwgYnVmZmVyKSB7XG5cdFx0dmFyIGRpcmVjdGlvbiA9IHN0YXJ0LmdldERpcmVjdGlvbihlbmQpO1xuXHRcdHZhciBhdmVyYWdlID0gc3RhcnQuZ2V0TWlkUG9pbnQoZW5kKTtcblx0XHR2YXIgcG9zID0gW107XG5cdFx0dmFyIHN0YXJ0UG9zaXRpdmUgPSBuZXcgUG9pbnQoc3RhcnROb3JtYWwueCpzdGFydE5vcm1hbC54LCBzdGFydE5vcm1hbC55KnN0YXJ0Tm9ybWFsLnkpO1xuXHRcdHZhciBlbmRQb3NpdGl2ZSA9IG5ldyBQb2ludChlbmROb3JtYWwueCplbmROb3JtYWwueCwgZW5kTm9ybWFsLnkqZW5kTm9ybWFsLnkpO1xuXHRcdHZhciBob3Jpem9udGFsID0gc3RhcnROb3JtYWwueCAhPSAwO1xuXHRcdHBvc1swXSA9IGhvcml6b250YWwgPyBzdGFydC55IDogc3RhcnQueDtcblxuXHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHR2YXIgaTtcblx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID09IDApIHtcblx0XHRcdGlmICgoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID49IDApXG5cdFx0XHRcdCYmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDw9IDApKSB7XG5cdFx0XHRcdC8vIDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIDJcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApXG5cdFx0XHRcdFx0aSA9IHN0YXJ0UG9zaXRpdmUuZG90UHJvZHVjdChzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID4gMClcblx0XHRcdFx0XHRpID0gZW5kUG9zaXRpdmUuZG90UHJvZHVjdChlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPiAwKSB7XG5cdFx0XHRcdC8vMVxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID49IDApXG5cdFx0XHRcdFx0aSA9IHN0YXJ0UG9zaXRpdmUuZG90UHJvZHVjdChzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gZW5kUG9zaXRpdmUuZG90UHJvZHVjdChlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vMyBvciAxXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IHN0YXJ0UG9zaXRpdmUuZG90UHJvZHVjdChzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApIHtcblx0XHRcdFx0XHRpID0gZW5kUG9zaXRpdmUuZG90UHJvZHVjdChlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cG9zLnB1c2goaG9yaXpvbnRhbCA/IGVuZC55IDogZW5kLngpO1xuXG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8vIFByb2Nlc3MgdGhlIHBvc2l0aW9ucy5cblx0c3RhdGljIHByb2Nlc3NQb3NpdGlvbnMoc3RhcnQsIGVuZCwgcG9zaXRpb25zLCBob3Jpem9udGFsKSB7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHBvc1swXSA9IGhvcml6b250YWwgPyBzdGFydC54IDogc3RhcnQueTtcblx0XHR2YXIgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb3NbaSArIDFdID0gcG9zaXRpb25zW2ldO1xuXHRcdH1cblx0XHRwb3MucHVzaCgoaG9yaXpvbnRhbCA9PSAocG9zaXRpb25zLmxlbmd0aCAlIDIgPT0gMSkpID8gZW5kLnggOiBlbmQueSk7XG5cblx0XHR2YXIgcHRzID0gW107XG5cdFx0cHRzWzBdID0gc3RhcnQ7XG5cdFx0dmFyIHA7XG5cdFx0dmFyIGN1cnJlbnQsIHByZXY7XG5cdFx0Zm9yIChpID0gMjsgaSA8IHBvcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdHByZXYgPSBwb3NbaSAtIDFdO1xuXHRcdFx0Y3VycmVudCA9IHBvc1tpXTtcblx0XHRcdHAgPSBob3Jpem9udGFsID8gbmV3IFBvaW50KHByZXYsIGN1cnJlbnQpIDogbmV3IFBvaW50KGN1cnJlbnQsIHByZXYpO1xuXHRcdFx0cHRzLnB1c2gocCk7XG5cdFx0fVxuXHRcdHB0cy5wdXNoKGVuZCk7XG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBBdXRvbWF0aWNhbGx5IHJvdXRlIHRoZSBjb25uZWN0aW9uIHRvIGF2b2lkIGludGVyc2VjdGlvbnMgd2l0aCBvdGhlciB2ZXJ0aWNlcy5cblx0ICovXG5cdGF1dG9Sb3V0ZShwdHMsIGNvbnRhaW5lciwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgc2lkZSwgc2lkZTIsIGQsIGJveCwgaW50ZXJzZWN0LCBqO1xuXHRcdHZhciBjaGFubmVsLCBjaGFubmVsMiwgcHQsIGRpcjtcblxuXHRcdHZhciBzdGFydFBhZGRpbmcgPSAwLCBlbmRQYWRkaW5nO1xuXHRcdC8vIGZpcnN0IGdldCB0aGUgc3RhcnQgYW5kIGVuZCBjaGFubmVsXG5cdFx0Ym94ID0gYm94ZXNbZW5kQm94XTtcblx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMl07XG5cdFx0aWYgKHB0LnkgPCBib3gueSlcblx0XHRcdHNpZGUgPSAxO1xuXHRcdGVsc2UgaWYgKHB0LnkgPiBib3gueSArIGJveC5oZWlnaHQpXG5cdFx0XHRzaWRlID0gMztcblx0XHRlbHNlIGlmIChwdC54IDwgYm94LngpXG5cdFx0XHRzaWRlID0gMDtcblx0XHRlbHNlXG5cdFx0XHRzaWRlID0gMjtcblx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBlbmRCb3gsIGJveGVzLCBzaWRlKTtcblx0XHRlbmRQYWRkaW5nID0gY2hhbm5lbC5ob3Jpem9udGFsID8gKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQpLzIgOiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCkvMjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKHB0c1tpKzFdLnggPT0gcHRzW2ldLnggJiYgcHRzW2krMV0ueSA9PSBwdHNbaV0ueSkgY29udGludWU7XG5cdFx0XHRpbnRlcnNlY3QgPSBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0XHRpZiAoIWludGVyc2VjdCkgY29udGludWU7XG5cdFx0XHRqID0gaW50ZXJzZWN0WzBdO1xuXHRcdFx0c2lkZSA9IGludGVyc2VjdFsxXTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUpO1xuXHRcdFx0c3dpdGNoKHNpZGUpIHtcblx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQoKGNoYW5uZWwucmlnaHQgKyBjaGFubmVsLmxlZnQpLzIsIHB0c1tpXS55KTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDEgOiAzO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueSA9PSBwdHNbaS0xXS55KSAmJiAocHRzW2ktMV0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaS0xXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnkgPT0gcHRzW2krM10ueSkgJiYgKHB0c1tpKzJdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2krMl0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5ib3R0b20gKyBjaGFubmVsMi50b3ApLzIgLSBwdC55O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMCAmJiBwdC54IDw9IHB0c1tpXS54KSB8fCAoc2lkZSA9PSAyICYmIHB0LnggPj0gcHRzW2ldLngpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55ICsgZCksIG5ldyBQb2ludChwdC54LCBwdC55ICsgZCldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQocHRzW2ldLngsIChjaGFubmVsLmJvdHRvbSArIGNoYW5uZWwudG9wKS8yKTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDAgOiAyO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueCA9PSBwdHNbaS0xXS54KSAmJiAocHRzW2ktMV0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2ktMV0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnggPT0gcHRzW2krM10ueCkgJiYgKHB0c1tpKzJdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpKzJdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5yaWdodCArIGNoYW5uZWwyLmxlZnQpLzIgLSBwdC54O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMSAmJiBwdC55IDw9IHB0c1tpXS55KSB8fCAoc2lkZSA9PSAzICYmIHB0LnkgPj0gcHRzW2ldLnkpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLnggKyBkLCBwdHNbaV0ueSksIG5ldyBQb2ludChwdC54ICsgZCwgcHQueSldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbWF4IHBvaW50cy5cblx0XHRcdGlmIChpID4gMjApIHJldHVybjtcblx0XHRcdGlmIChwdCAmJiAocHQueCAhPSBwdHNbaV0ueCB8fCBwdC55ICE9IHB0c1tpXS55KSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkrMSwgMCwgcHQpO1xuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdH1cblx0fVxuXG5cdF9oYXNJbnRlcnNlY3Rpb24ocHRzLCBib3hlcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoYm94ZXNbal0uZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pID49IDApXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIGJveCwgc2lkZSwgc2F2ZWRJbmRleCA9IG51bGwsIHNhdmVkU2lkZSA9IG51bGw7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChpID09IDAgJiYgaiA9PSBzdGFydEJveCkgfHwgKGkgPT0gcHRzLmxlbmd0aCAtIDIgJiYgaiA9PSBlbmRCb3gpKVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0c2lkZSA9IGJveC5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSk7XG5cdFx0XHRpZiAoc2lkZSA+PSAwKSB7XG5cdFx0XHRcdGlmIChzYXZlZEluZGV4ID09IG51bGwpIHtcblx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChib3hlc1tzYXZlZEluZGV4XS5kaXN0YW5jZShwdHNbaV0pID4gYm94LmRpc3RhbmNlKHB0c1tpXSkpIHtcblx0XHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNhdmVkSW5kZXggIT0gbnVsbClcblx0XHRcdHJldHVybiBbc2F2ZWRJbmRleCwgc2F2ZWRTaWRlXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgYnJlYWtQdCwgYm94LCBzaWRlKSB7XG5cdFx0dmFyIGRpcjtcblx0XHR2YXIgcDtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cCA9IFwieVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cCA9IFwieFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly9maXJzdCB0cnkgdGhlIGJyZWFrcHQuXG5cdFx0ZGlyID0gX2dldFJvdXRlRGlyZWN0aW9uKGJyZWFrUHQsIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0ZGlyID0gLV9nZXRSb3V0ZURpcmVjdGlvbihwdHNbMF0sIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRcdGlmIChicmVha1B0W3BdIDwgYm94LmdldENlbnRlcigpW3BdKVxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcjtcblx0fVxuXG5cdF9nZXRSb3V0ZURpcmVjdGlvbihwdDEsIHB0Mikge1xuXHRcdGlmIChwdDEueCA9PSBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk47XG5cdFx0fSBlbHNlIGlmIChwdDEueSA9PSBwdDIueSkge1xuXHRcdFx0aWYgKHB0MS54IDwgcHQyLngpIHJldHVybiBQb2ludC5FO1xuXHRcdFx0cmV0dXJuIFBvaW50Llc7XG5cdFx0fSBlbHNlIGlmIChwdDEueCA8IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNFO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5FO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNXO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5XO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaW5kZXgsIGJveGVzLCBzaWRlKSB7XG5cdFx0dmFyIG1heENoYW5uZWxXaWR0aCA9IHRoaXMubWF4Q2hhbm5lbFdpZHRoO1xuXHRcdHZhciBib3gxID0gYm94ZXNbaW5kZXhdLCBib3gyO1xuXHRcdHZhciBwdCwgaTtcblx0XHR2YXIgY2hhbm5lbCA9IHt9LCBsLCB0LCBiLCByO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0TGVmdCgpO1xuXHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gcHQueDtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRyID0gYm94ZXNbaV0uZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyID49IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY2hhbm5lbC5yaWdodCAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cHQgPSBib3gxLmdldFRvcCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRiID0gYm94ZXNbaV0uZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoYiA+PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY2hhbm5lbC5ib3R0b20gLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cHQgPSBib3gxLmdldFJpZ2h0KCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRjaGFubmVsLmxlZnQgPSBwdC54O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0bCA9IGJveGVzW2ldLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChsIDw9IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkge1xuXHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNoYW5uZWwubGVmdCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cHQgPSBib3gxLmdldEJvdHRvbSgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLnRvcCA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0aWYgKGJveDIuZ2V0VG9wKCkueSA8PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gYm94Mi5nZXRUb3AoKS55KVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkge1xuXHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNoYW5uZWwudG9wICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhbm5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIGEgbGluZSBzZWdtZW50IGJ5IGEgc3BlY2lmaWVkIGRpc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0gcHRzIHRoZSBsaXN0IG9mIHBvaW50cy5cblx0ICogQHBhcmFtIGkgdGhlIGluZGV4IG9mIHRoZSBzZWdtZW50LlxuXHQgKiBAcGFyYW0gZCB0aGUgZGlzdGFuY2UgdG8gbW92ZS5cblx0ICogQHBhcmFtIHN0YXJ0UGFkZGluZ1xuXHQgKiBAcGFyYW0gZW5kUGFkZGluZ1xuXHQgKi9cblx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKSB7XG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgd2UgbmVlZCB0byBhZGQgbmV3IGxpbmUgc2VnbWVudHMuXG5cdFx0dmFyIGRpciwgbCwgcHQ7XG5cdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgc3RhcnRpbmcgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbMF0uZ2V0RGlyZWN0aW9uKHB0c1sxXSk7XG5cdFx0XHRpZiAoIXN0YXJ0UGFkZGluZylcblx0XHRcdFx0c3RhcnRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKHN0YXJ0UGFkZGluZywgcHRzWzBdLmRpc3RhbmNlKHB0c1sxXSkvMik7XG5cdFx0XHRwdCA9IHB0c1swXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKDEsIDAsIHB0KTtcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBlbmQgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbcHRzLmxlbmd0aC0xXS5nZXREaXJlY3Rpb24ocHRzW3B0cy5sZW5ndGgtMl0pO1xuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxuXHRcdFx0XHRlbmRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKGVuZFBhZGRpbmcsIHB0c1twdHMubGVuZ3RoLTFdLmRpc3RhbmNlKHB0c1twdHMubGVuZ3RoLTJdKS8yKTtcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKHB0cy5sZW5ndGggLSAxLCAwLCBwdCk7XG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocHRzW2ldLnkgPT0gcHRzW2krMV0ueSkge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueSA9PSBwdHNbaV0ueSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueSA9PSBwdHNbaSsyXS55KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS55ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS55ICs9IGQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnggPT0gcHRzW2ldLngpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnggPT0gcHRzW2krMl0ueClcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueCArPSBkO1xuXHRcdFx0cHRzW2krMV0ueCArPSBkO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIG1ldGhvZCB3aWxsIG1lcmdlIHRoZSByZWR1bmRhbnQgc2VnbWVudHMuXG5cdCAqL1xuXHRfbWVyZ2VTZWdtZW50cyhwdHMpIHtcblx0XHR2YXIgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XG5cdFx0dmFyIGgyO1xuXHRcdGZvciAodmFyIGkgPSBwdHMubGVuZ3RoIC0gMjsgaSA+PSAxOyBpLS0pIHtcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcblx0XHRcdGlmIChoMiA9PSBoMSB8fCAocHRzW2ldLmVxdWFscyhwdHNbaS0xXSkpKVxuXHRcdFx0XHRwdHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRoMSA9ICFoMTtcblx0XHR9XG5cdH1cbn1cblxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XG5saW5rVHlwZXNbJ2JlemllciddID0gQmV6aWVyTGluaztcbmxpbmtUeXBlc1snZW50aXR5UmVsYXRpb25zJ10gPSBFbnRpdHlSZWxhdGlvbnM7XG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldKSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0Ly9pZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxuXHRcdC8vXHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHRyeSB0byBzaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzLlxuXHQgKi9cblx0c2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0bGV0IGxhc3QsIHN0YWNrO1xuXHRcdGNvbnN0IGNsZWFyRW50ZXJTdGFjayA9IChrKSA9PiB7XG5cdFx0XHRrID0gayB8fCAwO1xuXHRcdFx0Ly8gQ2xlYXIgb2ZmIHRoZSBlbnRlciBzdGFjay5cblx0XHRcdHdoaWxlICh0aGlzLmVudGVyU3RhY2subGVuZ3RoID49IGsgKyAxKSB7XG5cdFx0XHRcdGxhc3QgPSB0aGlzLmVudGVyU3RhY2sucG9wKCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWxlYXZlJywgbGFzdC5ucywgbGFzdC5kYXRhLCBwb3MpO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0Y29uc3QgZ2V0TlMgPSBmdW5jdGlvbihpbmRleCkge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDw9IGluZGV4OyBpKyspIHtcblx0XHRcdFx0dmFyIHZhbCA9IHN0YWNrW2ldLmdldEF0dHJpYnV0ZShcIm5zXCIpO1xuXHRcdFx0XHRpZiAoXy5zdGFydHNXaXRoKHZhbCwgXCJyb290LlwiKSlcblx0XHRcdFx0XHR2YWwgPSB2YWwuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRidWYuYXBwZW5kKHZhbCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0fTtcblxuXHRcdGlmIChucyAmJiBucyAhPSB0aGlzLnJvb3ROUykge1xuXHRcdFx0aWYgKHR5cGUgPT0gJ21vdXNlb3ZlcicpIHtcblx0XHRcdFx0c3RhY2sgPSBldmVudC50YXJnZXRTdGFjaztcblx0XHRcdFx0bGV0IGl0ZW07XG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLmVudGVyU3RhY2tbaV0udGFyZ2V0ICE9IHN0YWNrW2ldKSB7XG5cdFx0XHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhpKTtcblx0XHRcdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aXRlbSA9IHtkYXRhOiBkYXRhLCBuczogZ2V0TlMoaSksIHRhcmdldDogc3RhY2tbaV19O1xuXHRcdFx0XHRcdHRoaXMuZW50ZXJTdGFjay5wdXNoKGl0ZW0pO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWVudGVyJywgaXRlbS5ucywgZGF0YSwgcG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoc3RhY2subGVuZ3RoIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aClcblx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soc3RhY2subGVuZ3RoKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKG5zID09IHRoaXMucm9vdE5TICYmIHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPiAwKVxuXHRcdFx0Y2xlYXJFbnRlclN0YWNrKCk7XG5cdH1cblxuXHRkaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdC8vaWYgKHR5cGUgIT0gJ21vdXNlb3ZlcicgJiYgdHlwZSAhPSAnbW91c2VvdXQnKVxuXHRcdC8vXHRVdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiZGlzcGF0Y2ggLSBcIiArIHR5cGUgKyAnLicgKyBucyArICc7JyArIHBvcyArICc7cm9vdFRhcmdldD0nICsgZXZlbnQucm9vdFRhcmdldCArICc7ZGF0YT0nICsgZGF0YSk7XG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRjb25zdCBuc1R5cGUgPSBucyA/IHR5cGUgKyAnLicgKyBucyA6IHR5cGU7XG5cdFx0Xy5mb3JFYWNoKHRoaXMubGlzdGVuZXJzLCAobGlzdGVuZXJzLCBrZXkpID0+IHtcblx0XHRcdGlmIChFdmVudERpc3BhdGNoZXIubWF0Y2gobnNUeXBlLCBrZXkpKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KHdpbmRvdywgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXG5cdFx0Ly9pZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxuXHRcdC8vXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdGlmKCEgXy5pc05hTihwb3NbMF0pICYmICEgXy5pc05hTihwb3NbMV0pKVxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGtleSBldmVudCBoYW5kbGVyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XG5cdCAqL1xuXHRyZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gfHwgKHRoaXMubGlzdGVuZXJzW2tleV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNba2V5XSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XG5cdFx0aWYgKF8uaXNBcnJheSh0eXBlKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCB6SW5kZXg6IHpJbmRleH07XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHN0YXRpYyBtb3VzZShjb250YWluZXIsIGUpIHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xuXHRcdGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcblx0XHRcdHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcblx0XHRcdHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKGNvbnRhaW5lci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcblx0XHR9XG5cdFx0dmFyIHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiovIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8gICAgICAgICAgIFRoZSBLZXkgVXRpbGl0eSBDTGFzcyBmb3IgdGhlIEV2ZW50IERpc3BhdGNoZXIgICAgICAgICAgXHQgICAgIC8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuLyoqXG4gKiBLRVkgY29uc3RhbnRcbiAqL1xuY29uc3QgS0VZID0ge1xuXHRBTFQgICAgICAgICAgOiAxOCxcblx0QkFDS19TUEFDRSAgIDogOCxcblx0Q0FQU19MT0NLICAgIDogMjAsXG5cdENPTlRST0wgICAgICA6IDE3LFxuXHRERUxFVEUgICAgICAgOiA0Nixcblx0RE9XTiAgICAgICAgIDogNDAsXG5cdEVORCAgICAgICAgICA6IDM1LFxuXHRFTlRFUiAgICAgICAgOiAxMyxcblx0RVNDQVBFICAgICAgIDogMjIwLFxuXHRIT01FICAgICAgICAgOiAzNixcblx0TEVGVCAgICAgICAgIDogMzcsXG5cdE1FVEEgICAgICAgICA6IDIyNCxcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxuXHRQQUdFX0RPV04gICAgOiAzNCxcblx0UEFHRV9VUCAgICAgIDogMzMsXG5cdFBBVVNFICAgICAgICA6IDE5LFxuXHRQUklOVFNDUkVFTiAgOiA0NCxcblx0UklHSFQgICAgICAgIDogMzksXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcblx0U0hJRlQgICAgICAgIDogMTYsXG5cdFNQQUNFICAgICAgICA6IDMyLFxuXHRUQUIgICAgICAgICAgOiA5LFxuXHRVUCAgICAgICAgICAgOiAzOFxuXHQvL0FERCAgICAgICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDYxICA6IDE4Nyxcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXG5cdGlmIChrZXkgPj0gMTYgJiYga2V5IDw9IDE4KSB7XG5cdFx0a2V5ID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcblx0aWYgKHNoaWZ0KSBidWYuYXBwZW5kKFwiU0hJRlRcIik7XG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xuXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvS2V5VXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL0VkZ2VcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3ZpZXcvTWFya2VyXCI7XG5cbmNvbnN0IG5vZGVEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnbm9kZScsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0ZWRpdGFibGU6IHRydWUsXG5cdHJlc2l6YWJsZTogZmFsc2UsXG5cdHNvdXJjZWFibGU6IHRydWUsXG5cdHRhcmdldGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWVcbn07XG5cbmNvbnN0IGVkZ2VEZWZhdWx0cyA9IHtcblx0bmFtZTogJ0RlZmF1bHQnLFxuXHRyb2xlOiAnZWRnZScsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdHZpc2libGU6IHRydWUsXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxuXHRlbmRNYXJrZXI6IHtcblx0XHRpZDogJ0RlZmF1bHRfRW5kTWFya2VyJyxcblx0XHR0eXBlOiAnYXJyb3cnLFxuXHRcdHNpemU6IDEwXG5cdH0sXG5cdC8qIHN0YXJ0IGFuZCBlbmQgaXMgb25seSB1c2VkIGlmIHRoZSBlZGdlIGlzIG5vdCBjb25uZWN0ZWQgdG8gYSBub2RlICovXG5cdHN0YXJ0OiBbMCwgMF0sXG5cdGVuZDogWzQwMCwgMjAwXVxufTtcblxuY2xhc3MgR3JhcGgge1xuXHRjb25zdHJ1Y3RvcihpZCA9IF8udW5pcXVlSWQoXCJHXCIpLCBjb25maWcgPSB7fSwgbW9kZWwpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHR0aGlzLm5vZGVzID0ge307XG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xuXG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5ub2RlVHlwZXMsIFwiTm9kZXNcIiwgbm9kZURlZmF1bHRzKTtcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcblx0XHQvLyBjaGVjayBmb3IgbWFya2Vycy5cblx0XHR0aGlzLm1hcmtlcnMgPSBbXTtcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xuXHRcdGZvciAobGV0IHR5cGUgb2YgZWRnZVR5cGVzLmVudHJpZXMoKSkge1xuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuc3RhcnRNYXJrZXI7XG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCB0cnVlKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblx0XHRcdH1cblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGVbMV0ucHJvdG90eXBlLmVuZE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIGZhbHNlKTtcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRkZWxldGUgY29uZmlnLm5vZGVUeXBlcztcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdFx0dGhpcy5yb290ID0gbnVsbDtcblx0XHRpZiAobW9kZWwpXG5cdFx0XHR0aGlzLmxvYWRNb2RlbChtb2RlbCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0SlNDbGFzcyhjb25maWcsIGRlZmF1bHRDbGFzcykge1xuXHRcdHZhciBqc0NsYXNzID0gbnVsbDtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIGdldCB0aGUganMgY2xhc3MgZnJvbSBjb25maWcuXG5cdFx0XHR2YXIgdHlwZSA9IFV0aWxzLnR5cGUoZGVmYXVsdENsYXNzLm5hbWVzcGFjZSwgY29uZmlnLnR5cGUpO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGpzQ2xhc3MgPSB0eXBlLmpzQ2xhc3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFV0aWxzLmdldENvbnN0cnVjdG9yKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IE5vZGVcblx0ICovXG5cdGFkZE5vZGUoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCksIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCksIGZyb20sIHRvKSB7XG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcblx0XHRsZXQgZWRnZSA9IG5ldyBFZGdlQ2xhc3ModGhpcywgY29uZmlnLCBmcm9tLCB0byk7XG5cblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xuXHRcdHRoaXMuZWRnZXNbZWRnZS5pZF0gPSBlZGdlO1xuXHRcdHJldHVybiBlZGdlO1xuXHR9XG5cblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcblx0XHRcdHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRcdGNoaWxkLnBhcmVudC5jaGlsZHJlbiA9IF8ud2l0aG91dChjaGlsZC5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcblx0XHR9XG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmdldEN1cnJlbnRSb290KCkpIHtcblx0XHR2YXIgbm9kZXMgPSBtb2RlbC5ub2Rlcztcblx0XHR2YXIgZWRnZXMgPSBtb2RlbC5lZGdlcztcblx0XHRkZWxldGUgbW9kZWwubm9kZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLmVkZ2VzO1xuXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmFkZE5vZGUobW9kZWwsIHBhcmVudCk7XG5cdFx0aWYgKG5vZGVzKSB7XG5cdFx0XHRfLmZvckVhY2gobm9kZXMsIChjaGlsZCkgPT4ge1xuXHRcdFx0XHR0aGlzLmxvYWRNb2RlbChjaGlsZCwgbm9kZSk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKGVkZ2VzKSB7XG5cdFx0XHRfLmZvckVhY2goZWRnZXMsIChlZGdlKSA9PiB7XG5cdFx0XHRcdGxldCBmcm9tLCB0bztcblx0XHRcdFx0aWYgKGVkZ2UuZnJvbSlcblx0XHRcdFx0XHRmcm9tID0gdGhpcy5ub2Rlc1tlZGdlLmZyb21dO1xuXHRcdFx0XHRpZiAoZWRnZS50bylcblx0XHRcdFx0XHR0byA9IHRoaXMubm9kZXNbZWRnZS50b107XG5cdFx0XHRcdHRoaXMuYWRkRWRnZShlZGdlLCBub2RlLCBmcm9tLCB0byk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHRnZXRDdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQsIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cmV0dXJuIHNoYXBlLmdldFBlcmltZXRlcihlbmRQdCwgb3J0aG9nb25hbCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKFwibGFiZWxcIikgPyB0aGlzLnByb3AoXCJsYWJlbFwiKSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xuXHRcdHJldHVybiAnTm9kZTp7aWQ6JyArIHRoaXMuaWQgKyAnO2xhYmVsOicgKyBsYWJlbCArICc7dHlwZTonICsgdGhpcy5wcm9wcy5jb25zdHJ1Y3Rvci50eXBlTmFtZSArICd9Jztcblx0fVxufVxuTm9kZS5uYW1lc3BhY2UgPSBcIk5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG5cbi8qXG5cbi8qKlxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cbiAqXG5WZXJ0ZXgucHJvdG90eXBlLmdldERyaWxsRG93blBhcmVudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcblx0cmV0dXJuICEobW9kZSAmIEdyYXBoLkFMTE9XX0lOVEVSQUNUSU9OUyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmdldENydW1iVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIik7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvTm9kZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuLyoqXG4gKiBUaGUgQ2VsbCBpcyB0aGUgY29tbW9uIHBhcmVudCBmb3IgTm9kZSBhbmQgRWRnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7aWQ6IF8udW5pcXVlSWQoKX0pIHtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcblx0XHRkZWxldGUgY29uZmlnLmlkO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXG5cdFx0aWYgKGNvbmZpZy5kZWNvcmF0b3JzKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXG5cdFx0aWYgKGNvbmZpZy52aWV3cykge1xuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxuXHRcdHZhciB0eXBlID0gY29uZmlnLnR5cGUgfHwgXCJEZWZhdWx0XCI7XG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgbm90IGZvdW5kIFwiICsgY29uZmlnLnR5cGUpO1xuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcblx0fVxuXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0L1NldCBwcm9wZXJ0eSBzdG9yZWQgYnkgdmlld3MuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dmlld1Byb3Aoa2V5ID0gJ2RlZmF1bHQnLCBuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XG5cdFx0fVxuXHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMudmlld1Byb3BzW2tleV0pXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEZWNvcmF0b3JzKGRlY29yYXRvcnMpIHt9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9wZXJ0aWVzIG5lZWRlZCBmb3IgcmVuZGVyaW5nIHRoaXMgZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XG5cdCAqL1xuXHRnZXRWaWV3KGtleSkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xuXHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcblx0XHRcdG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2UsXG5cdFx0XHRzY2FsZTogdGhpcy52aWV3UHJvcChrZXksICdzY2FsZScpIHx8IDEuMFxuXHRcdH0sIHNoYXBlKTtcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBzaGFwZUNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XG5cdFx0bGV0IHggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ4XCIpO1xuXHRcdGxldCB5ID0gdGhpcy52aWV3UHJvcChrZXksIFwieVwiKTtcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcblx0XHRsZXQgaGVpZ2h0ID0gdGhpcy52aWV3UHJvcChrZXksIFwiaGVpZ2h0XCIpO1xuXHRcdHNoYXBlID0gbmV3IHNoYXBlQ2xhc3MoeCwgeSwgd2lkdGgsIGhlaWdodCwgc2hhcGVDb25maWcpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdmlldy5pZCk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdFx0Ly9jcmVhdGUgdGhlIHRlbXBsYXRlXG5cdFx0XHRsZXQgcm9sZSA9IHRoaXMucHJvcCgncm9sZScpO1xuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xuXHRcdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcy5nZXRWaWV3KHZpZXcuaWQpKTtcblx0fVxuXG5cdHJlbmRlclNoYXBlKHZpZXcpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xuXHRcdGlmIChzaGFwZSlcblx0XHRcdHJldHVybiBzaGFwZS5yZW5kZXIodmlldyk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwodmlldykge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSlcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGxldCBib3ggPSB0aGlzLmdldExhYmVsQm94KHZpZXcuaWQpO1xuXHRcdGlmIChib3gpXG5cdFx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdGxldCBib3ggPSBDYWNoZS5nZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBrZXkpO1xuXHRcdGlmIChib3gpIHJldHVybiBib3g7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdC8vIEp1c3QgZ2V0IHRoZSBjb25maWcgd2lsbCBoYXZlIGEgcG9zaXRpdmUgcGVyZm9ybWFuY2UgYm9vc3QgZm9yIElFMTEgYW5kIElFMTAuXG5cdFx0Ym94ID0gTGFiZWwuZ2V0TGFiZWxCb3godGhpcy5wcm9wKCdsYWJlbCcpLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGJveCwga2V5KTtcblx0XHRyZXR1cm4gYm94O1xuXHR9XG5cblx0Z2V0IGNvbXB1dGVkQ2xhc3NOYW1lKCkge1xuXHRcdGlmICghdGhpcy5fY29tcHV0ZWRDbGFzc05hbWUpIHtcblx0XHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKHRoaXMucHJvcChcInJvbGVcIikpO1xuXHRcdFx0bGV0IHByb3BzID0gdGhpcy5wcm9wcztcblx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XG5cdFx0XHRwcm9wcyA9IHByb3BzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0XHRcdHdoaWxlIChwcm9wcykge1xuXHRcdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XG5cdFx0XHRcdHByb3BzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3BzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lID0gYnVmLnRvU3RyaW5nKCcgJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9jb21wdXRlZENsYXNzTmFtZTtcblx0fVxuXG5cdGdldCBuYW1lc3BhY2UoKSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5nZXRDdXJyZW50Um9vdCgpKSByZXR1cm4gJyc7XG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLmdyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XG5cdFx0ZGVsZXRlIHRoaXMudmlld1Byb3BzO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblx0fVxufVxuXG4vKlxuXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInlcIiwgTWF0aC5yb3VuZCh5KSk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIGgpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuU2VsZWN0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwic2VsZWN0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xuXHRyZXR1cm4gdGhpcy5ncmFwaC5nZXRUeXBlKHR5cGVTdHIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY3JlYXRlTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kaWZpZXJzKSB7XG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcblx0aWYgKG1vZGlmaWVyU2V0dGluZ3MpIHtcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XG5cdFx0XHRjb25maWcuc2V0dGluZyA9IG1vZGlmaWVyU2V0dGluZ3NbY29uZmlnLmNsYXNzTmFtZV07XG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmFkZE1vZGlmaWVyKGNvbmZpZy5jbGFzc05hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIENoZWNrIGZvciBzaG93QWx3YXlzIHNldHRpbmdzXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XG5cdFx0XHRcdHZhciBjb25maWcgPSB7dHlwZTogdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUobmFtZSksIHNldHRpbmc6IHNldHRpbmd9O1xuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHR9XG59O1xuXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XG5cdGlmICghdGhpcy5tb2RpZmllcnMpXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcblxuXHRpZiAoIW1vZGlmaWVyLmhhc093blByb3BlcnR5KFwic2hvd0hlYWRlclwiKSlcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcblxuXHQvLyBAaGFjayBwcmVmZXJhYmx5IHNldCBpdCBpbiBjb25maWd1cmF0aW9ucy5cblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XG5cblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXG5cdFx0dGhpcy5jcmVhdGVNb2RpZmllcnMoKTtcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xuXHRpZiAobW9kaWZpZXJzKVxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XG5cdHJldHVybiBudWxsO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJyk7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0NhY2hlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdHJvdGF0aW9uOiBudWxsLFxuXHRnZW9tZXRyeToge3g6IDAsIHk6IDAsIGFuY2hvclk6IDAsIG9mZnNldFg6IDAsIG9mZnNldFk6IDB9XG59O1xuXG4vKipcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXHRsZXQgY2FudmFzU3VwcG9ydGVkID0gZmFsc2UsIHN0cmluZ01lYXN1cmVFbCA9IG51bGw7XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxuXHQgKi9cblx0bGV0IGdldFN0cmluZ1NpemUgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdGlmICghc3RyIHx8IHN0ciA9PSBcIlwiKVxuXHRcdFx0cmV0dXJuIFswLCAwXTtcblxuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHR2YXIgc2l6ZTtcblxuXHRcdGlmIChfLmlzTnVsbChjYW52YXNTdXBwb3J0ZWQpKSB7XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcblx0XHRcdGNhbnZhc1N1cHBvcnRlZCA9ICEhKHN0cmluZ01lYXN1cmVFbC5nZXRDb250ZXh0ICYmIHN0cmluZ01lYXN1cmVFbC5nZXRDb250ZXh0KCcyZCcpKTtcblx0XHR9XG5cblx0XHRpZiAoY2FudmFzU3VwcG9ydGVkKSB7XG5cdFx0XHRVdGlscy5sb2coJ0xhYmVsJywgJ3VzaW5nIGNhbnZhcycpO1xuXHRcdFx0dmFyIGN0eCA9IHN0cmluZ01lYXN1cmVFbC5nZXRDb250ZXh0KFwiMmRcIik7XG5cdFx0XHRjdHguZm9udCA9IGZvbnRTaXplICsgXCIgXCIgKyBmb250RmFtaWx5ICsgXCIgXCIgKyAoYm9sZCA/IFwiYm9sZFwiIDogXCJub3JtYWxcIik7XG5cdFx0XHR2YXIgbWVhc3VyZSA9IGN0eC5tZWFzdXJlVGV4dChzdHIpO1xuXHRcdFx0c2l6ZSA9IFttZWFzdXJlLndpZHRoLCAxMF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXG5cdFx0XHRpZiAoIXN0cmluZ01lYXN1cmVFbCkge1xuXHRcdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCBkaXNwbGF5Olwibm9uZVwiLCB3aWR0aDpcImF1dG9cIn0pO1xuXHRcdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XG5cdFx0XHRcdHZhciBkb2MgPSBzdHJpbmdNZWFzdXJlRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcblx0XHRcdFx0ZG9jLm9wZW4oKTtcblx0XHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT48ZGl2IGlkPVwic2l6ZU1lYXN1cmluZ0RpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bzt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L2Rpdj48L2JvZHk+PC9odG1sPicpO1xuXHRcdFx0XHRkb2MuY2xvc2UoKTtcblx0XHRcdH1cblx0XHRcdHN0cmluZ01lYXN1cmVFbC5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcblx0XHRcdHZhciBkaXYgPSBzdHJpbmdNZWFzdXJlRWwuY29udGVudFdpbmRvdy5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpemVNZWFzdXJpbmdEaXZcIik7XG5cdFx0XHRkaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcblx0XHRcdGRpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcblx0XHRcdGRpdi5zdHlsZS5mb250V2VpZ2h0ID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xuXHRcdFx0ZGl2LnN0eWxlLnBhZGRpbmcgPSAwO1xuXHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gXCJhdXRvXCI7XG5cdFx0XHRkaXYuaW5uZXJIVE1MID0gc3RyO1xuXG5cdFx0XHRzaXplID0gW2Rpdi5vZmZzZXRXaWR0aCwgZGl2Lm9mZnNldEhlaWdodF07XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuXHRcdH1cblx0XHRyZXR1cm4gc2l6ZTtcblx0fSwgZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIHdyYXBwZWQgdGV4dC5cblx0ICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyB0aGUgc3RyaW5nIHRvIHdyYXAuXG5cdCAqIEBwYXJhbSB7bWF4V2lkdGh9IHRoZSBtYXhpbXVtIHdpZHRoIHRoaXMgc3RyaW5nIGNhbiB0YWtlLlxuXHQgKiBAcGFyYW0ge2ZvbnRTaXplfVxuXHQgKiBAcGFyYW0ge2ZvbnRGYW1pbHl9XG5cdCAqIEBwYXJhbSB7Ym9sZH1cblx0ICovXG5cdGxldCB3cmFwID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0cmluZywgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0bWF4V2lkdGggPSBtYXhXaWR0aCB8fCAwO1xuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHR2YXIgYXJyID0gW107XG5cdFx0dmFyIHNwYWNlU2l6ZSA9IGdldFN0cmluZ1NpemUoXCImbmJzcDtcIiwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLCBzcGFjZSA9IHNwYWNlU2l6ZVswXTtcblx0XHRhcnIubGluZUhlaWdodCA9IHNwYWNlU2l6ZVsxXTtcblxuXHRcdGlmICghbWF4V2lkdGggfHwgIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikge1xuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKVswXTtcblx0XHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodDtcblx0XHRcdGFyci5iYXNlbGluZSA9IGFyci5saW5lSGVpZ2h0O1xuXHRcdFx0cmV0dXJuIGFycjtcblx0XHR9XG5cblx0XHR2YXIgd2lkdGggPSAwO1xuXHRcdC8vc3BsaXQgdGhlIHRleHQgYnkgbGluZXNcblx0XHR2YXIgbGluZXMgPSBzdHJpbmcuc3BsaXQoJ1xcbicpO1xuXG5cdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgbGluZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdC8vc3BsaXQgZWFjaCBsaW5lIGJ5IHdvcmRcblx0XHRcdHZhciB3b3JkcyA9IGxpbmVzW2pdLnNwbGl0KC9cXHMvKTtcblx0XHRcdHZhciBsaW5lID0gXCJcIiwgY3VycmVudFdpZHRoID0gMCwgd29yZFdpZHRoID0gMCwgbmV3TGluZSA9IHRydWUsIHdvcmQ7XG5cblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0d29yZCA9IHdvcmRzW2ldO1xuXHRcdFx0XHR3b3JkV2lkdGggPSBnZXRTdHJpbmdTaXplKHdvcmQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKVswXTtcblxuXHRcdFx0XHRpZiAoKG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCkgPiBtYXhXaWR0aCkge1xuXHRcdFx0XHRcdGlmIChuZXdMaW5lKSB7XG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKHdvcmQpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGlmIChpIDwgd29yZHMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRhcnIucHVzaChidWYuYXBwZW5kKGxpbmUpLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGxpbmUgPSBcIlwiO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IDA7XG5cdFx0XHRcdFx0aWYgKCFuZXdMaW5lKVxuXHRcdFx0XHRcdFx0aS0tOyAvLyBtb3ZlIGJhY2sgb25lIHdvcmQuXG5cdFx0XHRcdFx0bmV3TGluZSA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGluZSA9IG5ld0xpbmUgPyB3b3JkIDogbGluZSArIFwiIFwiICsgd29yZDtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSBuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGg7XG5cdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoKTtcblx0XHRcdFx0XHRuZXdMaW5lID0gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChsaW5lICE9IFwiXCIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQobGluZSk7XG5cdFx0XHRpZiAoaiA8IGxpbmVzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0YXJyLndpZHRoID0gd2lkdGg7XG5cdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0ICogYXJyLmxlbmd0aDtcblx0XHRhcnIuYmFzZWxpbmUgPSBhcnIubGluZUhlaWdodDtcblx0XHRyZXR1cm4gYXJyO1xuXHR9LCBmdW5jdGlvbihzdHIsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgbWF4V2lkdGggKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogIEdldCB0aGUgdmlldyBpbmZvcm1hdGlvbiBmb3IgaG93IHRvIGRpc3BsYXkgdGhlIGxhYmVsLlxuXHQgKiBAcGFyYW0gbGFiZWwgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxuXHQgKiBAcGFyYW0gY29udGFpbmVyV2lkdGggVGhlIHdpZHRoIG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gY29udGFpbmVySGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBsYWJlbENvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBvbiBob3cgdG8gZGlzcGxheSBsYWJlbC4gSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcblx0ICoge1xuXHQgKiAgICAgIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250U3R5bGUsIHBhZGRpbmcsXG5cdCAqICAgICAgYWxpZ246IGNhbiBiZSBlaXRoZXIgXCJsZWZ0XCIsIFwiY2VudGVyXCIgb3IgXCJyaWdodFwiLFxuXHQgKiAgICAgIHdpZHRoOiB0aGUgbWF4aW11bSB3aWR0aCBvZiB0aGUgbGFiZWwuIGlmIGxlc3MgdGhhbiAxLCB0aGVuIGlzIHRyZWF0ZWQgYXMgcGVyY2VudGFnZS4gSWYgMCwgbm8gd3JhcHBpbmcgd2lsbCBvY2N1cixcblx0ICogICAgICBoZWlnaHQsXG5cdCAqICAgICAgZ2VvbWV0cnlcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94KGxhYmVsLCBsYWJlbENvbmZpZywgY29udGFpbmVyV2lkdGgsIGNvbnRhaW5lckhlaWdodCkge1xuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSk7XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKSB7XG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywgbGluayk7XG5cdH1cblxuXHRmdW5jdGlvbiBfZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnID0ge30sIGNvbnRleHQpIHtcblx0XHRsYWJlbENvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKGxhYmVsQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XG5cdFx0bGV0IGZvbnRTdHlsZSA9IGxhYmVsQ29uZmlnLmZvbnRTdHlsZTtcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcblx0XHRsZXQgcGFkZGluZyA9IGxhYmVsQ29uZmlnLnBhZGRpbmc7XG5cdFx0bGV0IGxpbmVQYWRkaW5nID0gbGFiZWxDb25maWcubGluZVBhZGRpbmc7XG5cdFx0bGV0IGFsaWduID0gbGFiZWxDb25maWcuYWxpZ247XG5cblx0XHRsZXQgdyA9IGxhYmVsQ29uZmlnLndpZHRoLCBoID0gbGFiZWxDb25maWcuaGVpZ2h0O1xuXHRcdGlmIChjb250ZXh0LndpZHRoKSB7XG5cdFx0XHR3ID0gdyA8PSA1ID8gY29udGV4dC53aWR0aCAqIHcgOiB3O1xuXHRcdFx0aCA9IGggPD0gNSA/IGNvbnRleHQuaGVpZ2h0ICogaCA6IGg7XG5cdFx0fVxuXHRcdHcgLT0gMiAqIHBhZGRpbmc7XG5cdFx0aCAtPSAyICogcGFkZGluZztcblx0XHR3ID0gTWF0aC5tYXgoMCwgdyk7XG5cdFx0aCA9IE1hdGgubWF4KDAsIGgpO1xuXG5cdFx0bGV0IGdlb21ldHJ5ID0gXy5jbG9uZShsYWJlbENvbmZpZy5nZW9tZXRyeSk7XG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgdywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpO1xuXHRcdGdlb21ldHJ5LndpZHRoID0gd3JhcHBlZExhYmVsLndpZHRoICsgMiAqIHBhZGRpbmc7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gd3JhcHBlZExhYmVsLmhlaWdodCArIDIgKiBwYWRkaW5nICsgKHdyYXBwZWRMYWJlbC5sZW5ndGggLSAxKSAqIGxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4ID0gMCwgc2V0QW5jaG9yWCA9ICFfLmhhcyhnZW9tZXRyeSwgXCJhbmNob3JYXCIpO1xuXHRcdHN3aXRjaCAoYWxpZ24pIHtcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0XHRhbmNob3IgPSBcImVuZFwiO1xuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IC0wLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImxlZnRcIjpcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0bGV0IHBvcztcblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcblx0XHRlbHNlXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcblxuXHRcdGxldCBib3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHQvLyB0aGUgcGl2b3QgaXMgdGhlIGNlbnRlciBvZiByb3RhdGlvbiB3aGVuIHRoZSBsYWJlbCBoYXMgYSByb3RhdGlvbiBzcGVjaWZpZWQuXG5cdFx0bGV0IHBpdm90ID0gYWxpZ24gPT0gJ2NlbnRlcicgPyBbMCwgMF0gOiAoYWxpZ24gPT0gJ2xlZnQnID8gWy13cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0gOiBbd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdKTtcblxuXHRcdC8vIHRoZSBtYXhpbXVtIGJvdW5kcyBmb3IgdGhlIGxhYmVsLCB1c2VkIHRvIHBvc2l0aW9uIGlubGluZSBlZGl0b3Jcblx0XHRnZW9tZXRyeS53aWR0aCA9IE1hdGgubWF4KHcgKyAyICogcGFkZGluZywgZ2VvbWV0cnkud2lkdGgpO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IE1hdGgubWF4KGggKyAyICogcGFkZGluZywgZ2VvbWV0cnkuaGVpZ2h0KTtcblxuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xuXHRcdGVsc2Vcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXG5cdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IGxhYmVsQ29uZmlnLCBsYWJlbDogd3JhcHBlZExhYmVsLCBfbGFiZWw6IGxhYmVsLFxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmJhc2VsaW5lIC0gMywgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHtcblx0XHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlzaWJsZSgpICYmIHRoaXMua2V5ICE9IGtleSkge1xuXHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHQvL2xldCBwb3MgPSBVdGlscy51bnNjYWxlKGdyYXBoLCBbY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJYKCkgKyBib3VuZHMueCwgY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJZKCkgKyBib3VuZHMueSArIDVdKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBib3gubWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIGJveC5tYXhCb3VuZHMudG9wXTtcblx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IChib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiAoYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy52aXNpYmxlKCkpIHJldHVybjtcblxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGV4dEVsKVxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcblxuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRpZiAoIWNhbmNlbClcblx0XHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci51cGRhdGUnLCBbdGhpcy5rZXksIHRoaXMuaW5wdXQudmFsdWVdKTtcblxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcCgnbGFiZWwnKTtcblx0XHRpZiAobGFiZWwpXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cblx0ICovXG5cdGdldFJlZmVyZW5jZVBvaW50cyhrZXkpIHtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0aWYgKHRoaXMuc291cmNlKVxuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XG5cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0VGVybWluYWxWaXN1YWwoa2V5LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xuXG5cdFx0bGV0IGdldEJvdW5kID0gZnVuY3Rpb24ocHQpIHtcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xuXHRcdH07XG5cblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMuc291cmNlLmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3NvdXJjZVBvcnQnKSwgcmVmUHRzWzFdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcblxuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzFdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzFdKSwgcmVmUHRzWzBdLCB0cnVlKX0pO1xuXHRcdHJldHVybiB0ZXJtaW5hbHM7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgY29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdHNoYXBlID0gTGluay5nZXRMaW5rKHRoaXMuZ2V0VGVybWluYWxWaXN1YWwoa2V5LCBjb25maWcub3J0aG9nb25hbCksIGNvbmZpZywgdGhpcy5wcm9wKCdzdGFydE1hcmtlcicpLCB0aGlzLnByb3AoJ2VuZE1hcmtlcicpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0VkZ2U6eycgKyAoIXRoaXMuc291cmNlID8gJ251bGwnIDogdGhpcy5zb3VyY2UuaWQpICsgJy0tJyArICghdGhpcy50YXJnZXQgPyAnbnVsbCcgOiB0aGlzLnRhcmdldC5pZCkgKyAnfSc7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLnNldFNvdXJjZShudWxsKTtcblx0XHR0aGlzLnNldFRhcmdldChudWxsKTtcblx0fVxufVxuRWRnZS5uYW1lc3BhY2UgPSBcIkVkZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEVkZ2U7XG5cbi8qXG5cbkVkZ2UucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xuXHRcdHJldHVybiAodGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSA6IHRydWUpICYmICh0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInZpc2libGVcIik7XG5cdH0gZWxzZVxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XG59O1xuXG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvRWRnZS5qc1xuICoqLyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxubGV0IE1hcmtlciA9IChmdW5jdGlvbigpIHtcblxuXHQvKiogQmVnaW4gU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGFycm93KHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiB0cmlhbmdsZShzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIG92YWwoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgciA9IHNpemUgLyAyO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC1yLCAtciwgc2l6ZSwgc2l6ZSksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbMCwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIicgKyByICsgJ1wiIHJ5PVwiJyArIHIgKyAnXCI+PC9lbGxpcHNlPic7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIGRpYW1vbmQoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJyc7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXHQvKiogRW5kIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBnZXRNYXJrZXIoY29uZmlnLCBzb3VyY2UpIHtcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcblx0XHR2YXIgbWFya2VyID0gZmFjdG9yeShjb25maWcuc2l6ZSwgc291cmNlLCBjb25maWcpO1xuXHRcdG1hcmtlci5pZCA9IGNvbmZpZy5pZDtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcblx0cmVnaXN0cnlbJ3RyaWFuZ2xlJ10gPSB0cmlhbmdsZTtcblx0cmVnaXN0cnlbJ292YWwnXSA9IG92YWw7XG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xuXG5cdHJldHVybiB7XG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxuXHRcdGdldE1hcmtlcjogZ2V0TWFya2VyXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTWFya2VyLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmNsYXNzIExheW91dCB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcblx0XHRcdGlmIChjb25maWcub3JpZW50YXRpb24udG9VcHBlckNhc2UoKSA9PSBcIkhPUklaT05UQUxcIilcblx0XHRcdFx0Y29uZmlnLm9yaWVudGF0aW9uID0gTGF5b3V0LkhPUklaT05UQUw7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlbGV0ZSBjb25maWcub3JpZW50YXRpb247XG5cdFx0fVxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0fVxuXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5MYXlvdXQuVkVSVElDQUwgPSAwO1xuTGF5b3V0LkhPUklaT05UQUwgPSAxO1xuXG5MYXlvdXQuREVGQVVMVFMgPSB7XG5cdG9yaWVudGF0aW9uOiBMYXlvdXQuVkVSVElDQUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuXG5jbGFzcyBGbG93TGF5b3V0IGV4dGVuZHMgTGF5b3V0IHtcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xuXHRcdHZhciBpdGVtcztcblx0XHRpZiAoIXJvb3QpXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2Rlcztcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkocm9vdCkpXG5cdFx0XHRpdGVtcyA9IHJvb3Q7XG5cdFx0ZWxzZVxuXHRcdFx0aXRlbXMgPSByb290LmdldExpbmtlZE5vZGVzKCd0YXJnZXQnKTtcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm47XG5cblx0XHR2YXIgeCA9IDAsIHkgPSAwLCBoID0gMCwgbm9kZTtcblx0XHR2YXIgcDEgPSAwLCBwMiA9IDA7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bm9kZSA9IGl0ZW1zW2ldO1xuXHRcdFx0aWYgKHggPiAwICYmIHggKyB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIikgPiBib3VuZHMud2lkdGgpIHtcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXG5cdFx0XHRcdHkgKz0gaCArIHRoaXMudmdhcDtcblx0XHRcdFx0eCA9IDA7aCA9IDA7cDEgPSAwO3AyKys7XG5cdFx0XHR9XG5cdFx0XHRub2RlLl9mbFBvcyA9IFtwMSwgcDJdO1xuXHRcdFx0bm9kZS5tb3ZlVG8oW2JvdW5kcy54ICsgeCwgYm91bmRzLnkgKyB5XSk7XG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcblx0XHRcdHAxKys7XG5cdFx0XHRoID0gaCA8IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgPyBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpIDogaDtcblx0XHR9XG5cdFx0dGhpcy50cmlnZ2VyKG5ldyBSZWN0YW5nbGUoYm91bmRzLngsIGJvdW5kcy55LCBib3VuZHMud2lkdGgsIHkgKyBoKSk7XG5cdH1cbn1cblxuRmxvd0xheW91dC5ERUZBVUxUUyA9IHtcblx0aGdhcDogMTAsXG5cdHZnYXA6IDEwXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGbG93TGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5jbGFzcyBSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGlkLCBjb250YWluZXIsIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOnRoaXMuaWQsIHRhYmluZGV4OjB9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fZ3JhcGggPSBudWxsO1xuXHRcdHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcblx0XHR9KTtcblx0fVxuXG5cdGdyYXBoKGdyYXBoKSB7XG5cdFx0aWYgKGdyYXBoKSB7XG5cdFx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9ncmFwaDtcblx0fVxuXG5cdHZpZXdwb3J0KHNjYWxlZCwgdmlld3BvcnQpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChzY2FsZWQpIHx8IF8uaXNOdWxsKHNjYWxlZCkpIHNjYWxlZCA9IGZhbHNlO1xuXHRcdGlmICghdmlld3BvcnQpIHtcblx0XHRcdHZhciB2cCA9IG5ldyBSZWN0YW5nbGUoMCwgMCwgdGhpcy5ib3gub2Zmc2V0V2lkdGgsIHRoaXMuYm94Lm9mZnNldEhlaWdodCk7XG5cdFx0XHRpZiAoc2NhbGVkKVxuXHRcdFx0XHRyZXR1cm4gVXRpbHMuc2NhbGUodGhpcywgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLCB2aWV3cG9ydCk7XG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XG5cdH1cblxuXHR0cmFuc2xhdGUodCkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiBbMCwgMF07XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHRpZiAoIXJvb3QpXG5cdFx0XHRcdHJldHVybiBbMCwgMF07XG5cdFx0XHRyZXR1cm4gW3Jvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnKSB8fCAwLCByb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JykgfHwgMF07XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNmb3JtKHRbMF0sIHRbMV0pO1xuXHR9XG5cblx0c2NhbGUoaykge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiAxLjA7XG5cdFx0aWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHRpZiAoIXJvb3QpIHJldHVybiAxLjA7XG5cblx0XHRcdHJldHVybiByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcblx0XHR9XG5cblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSgpICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0XCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgLyB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJhY3R1YWxcIjpcblx0XHRcdFx0ayA9IDEuMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiZml0XCI6XG5cdFx0XHRcdHZhciBncmlkU2l6ZSA9IHRoaXMucHJvcChcImdyaWRTaXplXCIpICogMjtcblxuXHRcdFx0XHR2YXIgZ0JvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XG5cdFx0XHRcdHZhciB2Qm91bmRzID0gdGhpcy52aWV3cG9ydCgpO1xuXG5cdFx0XHRcdHZCb3VuZHMud2lkdGggLT0gZ3JpZFNpemU7XG5cdFx0XHRcdHZCb3VuZHMuaGVpZ2h0IC09IGdyaWRTaXplO1xuXG5cdFx0XHRcdC8qIERvIG5vdCB6b29tIG1vcmUgdGhhbiBhY3R1YWwgaWYgZ3JhcGggYWxyZWFkeSBmaXRzIGludG8gdGhlIGJvdW5kcyAqL1xuXHRcdFx0XHRrID0gTWF0aC5taW4oKHZCb3VuZHMud2lkdGggLyBnQm91bmRzLndpZHRoKSwgKHZCb3VuZHMuaGVpZ2h0IC9nQm91bmRzLmhlaWdodCksIDEuMCk7XG5cblx0XHRcdFx0Ly9UT0RPOiBBZGQgY2VudGVyaW5nIGNvZGUgaGVyZSBvciB0cmlnZ2VyIGFuIGV2ZW50IGZvciB0aGF0XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKF8uaXNTdHJpbmcoaykpIGsgPSBwYXJzZUZsb2F0KGspO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0obnVsbCwgbnVsbCwgayk7XG5cdH1cblxuXHR0cmFuc2Zvcm0oeCwgeSwgc2NhbGUpIHtcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm47XG5cdFx0dmFyIHJvb3QgPSB0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpO1xuXHRcdGlmICghcm9vdCkgcmV0dXJuO1xuXG5cdFx0LyppZiAoIV8uaXNOdWxsKHgpICYmICFfLmlzTnVsbCh5KSlcblx0XHRcdHJvb3QubW92ZSh4LCB5KTtcblx0XHRpZiAoc2NhbGUpIHtcblx0XHRcdHNjYWxlID0gTWF0aC5tYXgodGhpcy5nZXRQcm9wZXJ0eShcIm1pblpvb21cIiksIE1hdGgubWluKHRoaXMuZ2V0UHJvcGVydHkoXCJtYXhab29tXCIpLCBzY2FsZSkpO1xuXHRcdFx0cm9vdC5zZXRQcm9wZXJ0eSgnc2NhbGUnLCBzY2FsZSk7XG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSB6b29tIGJlaGF2aW9yIGFuZCB0aGUgZ3JhcGhcblx0XHRcdHZhciB6b29tID0gdGhpcy5ldmVudERpc3BhdGNoZXIuem9vbTtcblx0XHRcdGlmICh6b29tLnNjYWxlKCkgIT0gc2NhbGUpXG5cdFx0XHRcdHpvb20uc2NhbGUoc2NhbGUpO1xuXHRcdH1cblxuXHRcdHRoaXMudHJpZ2dlcihHcmFwaC5FVkVOVF9UWVBFUy5SRUZSRVNIKTsqL1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybiBmYWxzZTtcblx0XHQvLyBpbnRpYWxpemUgdmlld3Ncblx0XHRpZiAodGhpcy5sYXlvdXQpXG5cdFx0XHR0aGlzLmxheW91dC5sYXlvdXQodGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLionLCAnem9vbSonXSwgZnVuY3Rpb24odHlwZSwgbnMsIHRhcmdldCwgcG9zLCBldmVudCkge1xuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRyZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGluayhzaGFwZSk7XG5cdH1cblxuXHRyZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XG5cdFx0XHR0ID0gdChjb25maWcpO1xuXHRcdH1cblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xuXHRcdFx0dmFyIG9iaiA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgcGFydCBvZiBwYXJ0cykge1xuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuUmVuZGVyZXIuREVGQVVMVFMgPSB7XG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcblx0c2luZ2xlU2VsZWN0OiB0cnVlLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcblx0Z3VpZGVzRW5hYmxlZDogdHJ1ZSxcblx0Z3JpZFNpemU6IDMwLFxuXHRtYXhab29tOiA0LjAsXG5cdG1pblpvb206IDAuMSxcblx0em9vbUZhY3RvcjogMS4yLFxuXHRtYXNrT3BhY2l0eTogMC41XG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvUmVuZGVyZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIucmVuZGVyKCk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0dmFyIHJvb3QgPSB0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpO1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiPicpO1xuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvc3ZnPicpO1xuXHRcdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHR9XG5cblx0cmVuZGVyRGVmcygpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPGRlZnM+Jyk7XG5cdFx0YnVmLmFwcGVuZCh0aGlzLmdldFRlbXBsYXRlKCdHcmlkJywgdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikpKTtcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgoKS5tYXJrZXJzO1xuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xuXHRcdGJ1Zi5hcHBlbmQoJzwvZGVmcz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgc3RyMSwgc3RyMjtcblx0XHRmb3IgKGxldCBtYXJrZXIgb2YgbWFya2Vycykge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlckxhYmVsKGJveCkge1xuXHRcdHJldHVybiB0aGlzLlRFTVBMQVRFU1snTGFiZWwnXShib3gpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlclNoYXBlKHNoYXBlKSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gdGhpcy5URU1QTEFURVNbc2hhcGUubmFtZV07XG5cdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUoc2hhcGUpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cblx0XHRcdGxldCBuZXdQdHMgPSBbXTtcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkMSA9IHByZXYuZGlzdGFuY2UobmV4dCk7XG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcblx0XHRcdFx0Ly8gc3BsaXQgdGhlIHBvaW50IGludG8gdHdvLlxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdHByZXYgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cdFx0XHRwb2ludHMgPSBuZXdQdHM7XG5cdFx0fVxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgQyAnKTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRsZXQgZCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdGJ1Zi5jbGVhcigpO1xuXHRcdGlmIChzaGFwZS5zaG93R2F1Z2UpXG5cdFx0XHRidWYuYXBwZW5kKCc8cGF0aCBzdHlsZT1cInN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogOTsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1wiIGQ9XCInKVxuXHRcdFx0XHQuYXBwZW5kKGQpLmFwcGVuZCgnXCIvPicpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIGQ9XCInKS5hcHBlbmQoZCkuYXBwZW5kKCdcIicpO1xuXHRcdGlmIChzaGFwZS5zdGFydE1hcmtlciB8fCBzaGFwZS5lbmRNYXJrZXIpIHtcblx0XHRcdGJ1Zi5hcHBlbmQoJyBzdHlsZT1cIicpO1xuXHRcdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItc3RhcnQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuc3RhcnRNYXJrZXIpID8gc2hhcGUuc3RhcnRNYXJrZXIgOiBzaGFwZS5zdGFydE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xuXHRcdFx0aWYgKHNoYXBlLmVuZE1hcmtlcilcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLWVuZDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5lbmRNYXJrZXIpID8gc2hhcGUuZW5kTWFya2VyIDogc2hhcGUuZW5kTWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRidWYuYXBwZW5kKCdcIicpO1xuXHRcdH1cblx0XHRidWYuYXBwZW5kKCcvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRidWYuYXBwZW5kKCc8c3ZnPicpLmFwcGVuZChjb250ZW50KS5hcHBlbmQoJzwvc3ZnJyk7XG5cdFx0bGV0IHRlbXAgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBidWYudG9TdHJpbmcoKSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cblx0XHR3aGlsZSAodGVtcC5maXJzdENoaWxkKVxuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQodGVtcC5maXJzdENoaWxkKTtcblx0XHRyZXR1cm4gZWw7XG5cdH1cblxuXHRzdGF0aWMgc2V0Q29udGVudChlbCwgY29udGVudCkge1xuXHRcdGlmIChEb21VdGlscy5pc0lFKSB7XG5cdFx0XHQvLyBlbXB0eSBlbCBmaXJzdC5cblx0XHRcdGxldCBjaGlsZDtcblx0XHRcdHdoaWxlIChjaGlsZCA9IGVsLmxhc3RDaGlsZClcblx0XHRcdFx0ZWwucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0U1ZHUmVuZGVyZXIuYXBwZW5kQ29udGVudChlbCwgY29udGVudCk7XG5cdFx0fSBlbHNlXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBjb250ZW50O1xuXHRcdHJldHVybiBlbDtcblx0fVxufVxuU1ZHUmVuZGVyZXIuVEVNUExBVEVTID0ge1xuXHQkcm9vdDogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiZ3JhcGhcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSwke3l9KXNjYWxlKCR7c2NhbGV9KVwiPiN7Y2hpbGRyZW59PC9nPicsXG5cdCRub2RlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSwke3l9KVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0JGVkZ2U6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRmb3IgKGxldCBwdCBvZiBzaGFwZS5wb2ludHMpXG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XG5gLnRyaW0oKTtcblx0fSxcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xuXHRcdHJldHVybiBgXG48cGF0dGVybiBpZD1cIkdyaWRQYXR0ZXJuXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuPC9wYXR0ZXJuPmAudHJpbSgpO1xuXHR9LFxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcbiAgIGlmIChib3gpIHslPlxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cblx0PCUgaWYgKGJveC5jb25maWcuYmFja2dyb3VuZENvbG9yKSB7JT5cblx0XHQ8cmVjdCB4PVwiPCU9LWJveC5ib3VuZHMud2lkdGgvMiU+XCIgeT1cIjwlPS1ib3guYm91bmRzLmhlaWdodC8yJT5cIiB3aWR0aD1cIjwlPWJveC5ib3VuZHMud2lkdGglPlwiIGhlaWdodD1cIjwlPWJveC5ib3VuZHMuaGVpZ2h0JT5cIiBmaWxsPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3IlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0PC9nPlxuPCV9JT5cbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=