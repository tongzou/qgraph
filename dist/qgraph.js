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
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundStyle) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" })
	};
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBlOTNjNGQzMTk0NmMxMmMzN2M3MyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUJBQU0sUUFBTixDQUFlLFdBQWY7QUFDQSxpQkFBTSxRQUFOLENBQWUsU0FBZjs7bUJBRWU7QUFDZCx3QkFEYztBQUVkLHdCQUZjO0FBR2Qsd0JBSGM7QUFJZCw4QkFKYztBQUtkLHNDQUxjO0FBTWQsd0JBTmM7QUFPZCxzQkFQYztBQVFkLHdCQVJjO0FBU2QsZ0NBVGM7QUFVZCw0QkFWYztBQVdkLHNCQVhjO0FBWWQsNENBWmM7QUFhZCx3QkFiYztBQWNkLDBCQWRjO0FBZWQsd0JBZmM7QUFnQmQsc0JBaEJjO0FBaUJkLHNCQWpCYztBQWtCZCxzQkFsQmM7QUFtQmQsMEJBbkJjO0FBb0JkLGtDQXBCYztBQXFCZCw4QkFyQmM7QUFzQmQsb0NBdEJjOzs7Ozs7O0FDMUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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LENBQUgsQ0FBWCxFQUFrQixNQUFsQixDQUF5QixHQUF6QixFQUE4QixNQUE5QixDQUFxQyxHQUFHLENBQUgsQ0FBckMsRUFBNEMsTUFBNUMsQ0FBbUQsR0FBbkQ7S0FERDs7Ozs7Ozs7Ozs7Ozs7SUFGd0I7O0FBSXhCLE9BQUksVUFBSixHQUp3QjtBQUt4QixPQUFJLE1BQUosQ0FBVyxLQUFYLEVBTHdCO0FBTXhCLFVBQU8sSUFBSSxRQUFKLEVBQVAsQ0FOd0I7R0FBaEI7QUFRVCxTQUFPLGVBQVMsTUFBVCxFQUFpQjtBQUN2QixVQUFPLHdJQUF3SSxPQUFPLEtBQVAsR0FBZSxLQUF2SixDQURnQjtHQUFqQjtBQUdQLFVBQVEsZ0JBQVMsTUFBVCxFQUFpQjtBQUN4QixVQUFPLHFCQUNLLE9BQU8sRUFBUCx5QkFBMkIsT0FBTyxJQUFQLDBCQUE4QixPQUFPLElBQVAsa0JBQXNCLE9BQU8sR0FBUCxDQUFXLENBQVgscUJBQ3JGLE9BQU8sR0FBUCxDQUFXLENBQVgsc0NBQXlDLE9BQU8sT0FBUCxDQUFlLENBQWYsU0FBb0IsT0FBTyxPQUFQLENBQWUsQ0FBZixTQUFvQixPQUFPLE9BQVAsQ0FBZSxLQUFmLFNBQXdCLE9BQU8sT0FBUCxDQUFlLE1BQWYsNENBQ2xGLE9BQU8sSUFBUCxxQkFBNkIsT0FBTyxJQUFQLE9BQTdCLEdBQThDLEVBQTlDLDJCQUh0QixDQUlQLElBSk8sRUFBUCxDQUR3QjtHQUFqQjtBQU9SLFFBQU0sY0FBUyxJQUFULEVBQWU7QUFDcEIsVUFBTyw0Q0FDMEIsd0JBQWlCLDZJQUU3QixxRUFDUCw4RUFDQSxvQkFBYSw2REFMcEIsQ0FNRyxJQU5ILEVBQVAsQ0FEb0I7R0FBZjtBQVNOLFNBQU8saUJBQUUsUUFBRixDQUFXLGdqQ0FrQmpCLElBbEJpQixFQUFYLEVBa0JFLEVBQUMsVUFBVSxNQUFWLEVBbEJILENBQVA7RUExQ0Q7O21CQStEZSxZIiwiZmlsZSI6InFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicWdyYXBoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBlOTNjNGQzMTk0NmMxMmMzN2M3M1xuICoqLyIsImltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vZ2VvbWV0cnkvTGluZVwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEVsbGlwc2UgZnJvbSBcIi4vZ2VvbWV0cnkvRWxsaXBzZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vZ3JhcGgvQ2VsbFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vZ3JhcGgvTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgRmxvd0xheW91dCBmcm9tIFwiLi9sYXlvdXQvRmxvd0xheW91dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi92aWV3L1JlbmRlcmVyXCI7XG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0Q2VsbCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xuXHRcdHJldHVybiB0aGlzLm9mZnNldFBvc2l0aW9uKFt4LCB5XSwgZ2VvbWV0cnkpO1xuXHR9LFxuXG5cdG9mZnNldFBvc2l0aW9uOiBmdW5jdGlvbihwb3MsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtwb3NbMF0gKyBnZW9tZXRyeS53aWR0aCAqIGdlb21ldHJ5LmFuY2hvclggKyBnZW9tZXRyeS5vZmZzZXRYLCBwb3NbMV0gKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB2aWV3IHRoZSBncmFwaCB2aWV3IG9iamVjdFxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHVuc2NhbGU6IGZ1bmN0aW9uKHZpZXcsIG8pIHtcblx0XHR2YXIgc2NhbGUgPSB2aWV3LnNjYWxlKCk7XG5cdFx0dmFyIHQgPSB2aWV3LnRyYW5zbGF0ZSgpO1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdLCBvLndpZHRoKnNjYWxlLCBvLmhlaWdodCpzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSpzY2FsZSt0WzBdLCBvWzFdKnNjYWxlK3RbMV1dO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB2aWV3IHRoZSBncmFwaCB2aWV3IG9iamVjdFxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKChvLngtdFswXSkvc2NhbGUsIChvLnktdFsxXSkvc2NhbGUsIG8ud2lkdGgvc2NhbGUsIG8uaGVpZ2h0L3NjYWxlKTtcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KChvLngtdFswXSkvc2NhbGUsIChvLnktdFsxXSkvc2NhbGUpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbKG9bMF0tdFswXSkvc2NhbGUsIChvWzFdLXRbMV0pL3NjYWxlXTtcblx0fSxcblxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxuXHQgKi9cblx0Z2V0T2JqUHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuXHRcdGlmICghb2JqKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYgKF8uaGFzKG9iaiwgcHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdO1xuXHRcdGlmIChvYmouZ2V0UHJvcGVydHkgJiYgXy5pc0Z1bmN0aW9uKG9iai5nZXRQcm9wZXJ0eSkpXG5cdFx0XHRyZXR1cm4gb2JqLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9VdGlscy5qc1xuICoqLyIsImNsYXNzIFBvaW50IHtcblx0Y29uc3RydWN0b3IoeCwgeSkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcHQgdG8gdGhlIG90aGVyIHB0LlxuXHQgKiBAcGFyYW0gYVB0XG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRkaXN0YW5jZShhUHQpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBhUHQueCkgKiAodGhpcy54IC0gYVB0LngpICsgKHRoaXMueSAtIGFQdC55KSAqICh0aGlzLnkgLSBhUHQueSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYW5zbGF0ZSB0aGlzIHBvaW50XG4gXHQgKi9cblx0dHJhbnNsYXRlKHAyKSB7XG5cdFx0dGhpcy54ICs9IHAyLng7XG5cdFx0dGhpcy55ICs9IHAyLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2NhbGUgdGhpcyB2ZWN0b3JcbiBcdCAqL1xuXHRzY2FsZShzY2FsZSkge1xuXHRcdHRoaXMueCAqPSBzY2FsZTtcblx0XHR0aGlzLnkgKj0gc2NhbGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRTY2FsZWQoc2NhbGUpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSk7XG5cdH1cblxuXHRnZXRUcmFuc2xhdGVkKHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwMi54LCB0aGlzLnkgKyBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgZnJvbSB0aGlzIHBvaW50IHRvIHAyLlxuXHQgKiBAcGFyYW0gcDJcblx0ICogQHJldHVybnMge1BvaW50fVxuXHQgKi9cblx0Z2V0RGlyZWN0aW9uKHAyKSB7XG5cdFx0dmFyIGRpc3QgPSB0aGlzLmRpc3RhbmNlKHAyKTtcblx0XHRyZXR1cm4gbmV3IFBvaW50KChwMi54IC0gdGhpcy54KSAvIGRpc3QsIChwMi55IC0gdGhpcy55KSAvIGRpc3QpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJvdGF0ZSB0aGUgcG9pbnQgYWJvdXQgdGhlIG9yaWdpbi4gV2l0aCB0aGUgc3BlY2lmaWVkIGFuZ2xlLlxuXHQgKiBAcGFyYW0gYW5nbGUgdGhlIGFuZ2xlIHRvIHJvdGF0ZVxuXHQgKi9cblx0cm90YXRlKGFuZ2xlKSB7XG5cdFx0dmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdFx0dGhpcy54ID0geCAqIGNvcyAtIHkgKiBzaW47XG5cdFx0dGhpcy55ID0geCAqIHNpbiArIHkgKiBjb3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRSb3RhdGVkKGFuZ2xlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoYW5nbGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QsIHRyZWF0aW5nIHRoaXMgYW5kIHAyIGFzIHZlY3RvcnMuXG5cdCAqL1xuXHRkb3RQcm9kdWN0KHAyKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbWlkIHBvaW50IGJldHdlZW4gdGhpcyBhbmQgcDIuXG4gXHQgKi9cblx0Z2V0TWlkUG9pbnQocDIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KCh0aGlzLnggKyBwMi54KSAvIDIsICh0aGlzLnkgKyBwMi55KSAvIDIpO1xuXHR9XG5cblx0cmV2ZXJzZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMocDIpIHtcblx0XHRpZiAoIXAyIHx8IHAyLmNvbnN0cnVjdG9yICE9IFBvaW50KSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gKHRoaXMueCA9PSBwMi54ICYmIHRoaXMueSA9PSBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWZsZWN0IHRoaXMgcG9pbnQgdy5yLnQuIHRoZSByZWN0YW5nbGUuXG5cdCAqIElmIHZlcnRpY2FsIGlzIHRydWUsIGl0IHdpbGwgcmVmbGVjdCB0aGUgcG9pbnQgY3Jvc3MgdGhlIHZlcnRpY2FsXG5cdCAqIGNlbnRyYWwgbGluZSBvZiB0aGUgcmVjdGFuZ2xlLCBvdGhlcndpc2UgcmVmbGVjdCBjcm9zcyB0aGUgaG9yaXpvbnRhbFxuXHQgKiBjZW50cmFsIGxpbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSByZWN0IHRoZSByZWN0YW5nbGVcblx0ICogQHBhcmFtIHZlcnRpY2FsIHdoZXRoZXIgaXMgdmVydGljYWwgcmVmbGVjdGlvbiBvciBob3Jpem9udGFsIHJlZmxlY3Rpb24uXG5cdCAqL1xuXHRyZWZsZWN0KHJlY3QsIHZlcnRpY2FsKSB7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0dGhpcy54ID0gMiAqIHJlY3QueCAtIHRoaXMueDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnkgPSAyICogcmVjdC55IC0gdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xuXHR9XG59XG5cblBvaW50LlcgPSBuZXcgUG9pbnQoLTEsIDApO1xuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xuUG9pbnQuRSA9IG5ldyBQb2ludCgxLCAwKTtcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XG5Qb2ludC5TRSA9IG5ldyBQb2ludCgxLCAxKTtcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIGEgZ2l2ZW4gcG9pbnQgb2YgYSBnaXZlbiByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRjb250YWlucyhlbCkge1xyXG5cdFx0bGV0IHcgPSBlbC53aWR0aCB8fCAwO1xyXG5cdFx0bGV0IGggPSBlbC5oZWlnaHQgfHwgMDtcclxuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcclxuXHRcdGxldCByaWdodCA9IGVsLnggKyB3LzI7XHJcblx0XHRsZXQgdG9wID0gZWwueSAtIGgvMjtcclxuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xyXG5cdFx0cmV0dXJuIChyaWdodCA8PSB0aGlzLnJpZ2h0KSAmJiAobGVmdCA+PSB0aGlzLmxlZnQpICYmXHJcblx0XHRcdCh0b3AgPj0gdGhpcy50b3ApICYmIChib3R0b20gPD0gdGhpcy5ib3R0b20pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cclxuXHQgKi9cclxuXHRkaXN0YW5jZShwdCkge1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcclxuXHJcblx0XHRpZiAocHQueCA8IHRoaXMubGVmdCkge1xyXG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKSk7XHJcblx0XHR9XHJcblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvcCAtIHB0Lnk7XHJcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XHJcblx0XHR9XHJcblx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XHJcblx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0cmV0dXJuIHB0LnggLSB0aGlzLnJpZ2h0O1xyXG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZW4gdHdvIHBvaW50cywgd2Ugd2FudCB0byBkZXRlY3Qgd2hldGhlciB0aGUgbGluZSBqb2luaW5nIHRoZSBwdHMgaW50ZXJzZWN0XHJcblx0ICogd2l0aCB0aGUgcmVjdGFuZ2xlIG9yIG5vdC4gV2UgYXNzdW1lIG9ubHkgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lIHNlZ21lbnRzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybiBpbnQgdGhlIHNpZGUgb2YgdGhlIGludGVyc2VjdGlvbjogLTE6IG5vIGludGVyc2VjdGlvbiwgMDogbGVmdCwgMTogdG9wLCAyOiByaWdodCwgMzogYm90dG9tLCA0OiBjb250YWlubWVudC5cclxuXHQgKi9cclxuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcclxuXHRcdGxldCBob3Jpem9udGFsID0gcHQxLnkgPT0gcHQyLnk7XHJcblx0XHRsZXQgY29udGFpbnMxID0gdGhpcy5jb250YWlucyhwdDEpO1xyXG5cdFx0bGV0IGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcclxuXHRcdGlmIChjb250YWluczEgJiYgY29udGFpbnMyKSByZXR1cm4gNDtcclxuXHRcdGlmICghY29udGFpbnMxICYmICFjb250YWluczIpIHtcclxuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xyXG5cdFx0XHRcdGlmIChwdDEueCA8IHRoaXMubGVmdCAmJiBwdDIueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnkgPCB0aGlzLnRvcCAmJiBwdDIueSA+IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRcdHJldHVybiAzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XHJcblx0XHRpZiAoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRpZiAob3V0UHQueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnUmVjdGFuZ2xlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGxldCB4ID0gcmVjdC54O1xyXG5cdFx0bGV0IHkgPSByZWN0Lnk7XHJcblx0XHRsZXQgZHggPSBwdC54IC0geDtcclxuXHRcdGxldCBkeSA9IHB0LnkgLSB5O1xyXG5cdFx0bGV0IGFscGhhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblx0XHRsZXQgcGkgPSBNYXRoLlBJO1xyXG5cdFx0bGV0IHBpMiA9IE1hdGguUEkvMjtcclxuXHRcdGxldCBiZXRhID0gcGkyIC0gYWxwaGE7XHJcblx0XHRsZXQgdCA9IE1hdGguYXRhbjIocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xyXG5cclxuXHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0cC55ID0geSAtIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRwLnggPSB4IC0gcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdHAueSA9IHkgKyByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRwLnggPSB4ICsgcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgcDEgYW5kIHAyXHJcblx0ICovXHJcblx0c3RhdGljIGdldEJvdW5kaW5nUmVjdGFuZ2xlKHB0cywgbWFyZ2luKSB7XHJcblx0XHRpZiAoIXB0cyB8fCBwdHMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcclxuXHRcdGlmICghXy5pc0FycmF5KG1hcmdpbikpXHJcblx0XHRcdG1hcmdpbiA9IFttYXJnaW4sIG1hcmdpbiwgbWFyZ2luLCBtYXJnaW5dO1xyXG5cdFx0bGV0IG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0bGV0IG1heCA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHAgPSBwdHNbaV07XHJcblx0XHRcdGlmIChwLnggPCBtaW5bMF0pIHtcclxuXHRcdFx0XHRtaW5bMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA8IG1pblsxXSkge1xyXG5cdFx0XHRcdG1pblsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC54ID4gbWF4WzBdKSB7XHJcblx0XHRcdFx0bWF4WzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPiBtYXhbMV0pIHtcclxuXHRcdFx0XHRtYXhbMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG1pblswXSA9IG1pblswXSAtIG1hcmdpblswXTtcclxuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcclxuXHRcdG1heFswXSA9IG1heFswXSArIG1hcmdpblsyXTtcclxuXHRcdG1heFsxXSA9IG1heFsxXSArIG1hcmdpblszXTtcclxuXHRcdGxldCB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcclxuXHRcdGxldCBoID0gTWF0aC5hYnMobWF4WzFdIC0gbWluWzFdKTtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pblswXSArIHcvMiwgbWluWzFdICsgaC8yLCB3LCBoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cclxuXHQgKiBAcGFyYW0gcmVjdHNcclxuXHQgKi9cclxuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcclxuXHRcdGxldCBtaW54ID0gbnVsbCwgbWlueSA9IG51bGwsIG1heHggPSAtSW5maW5pdHksIG1heHkgPSAtSW5maW5pdHk7XHJcblx0XHRfLmVhY2gocmVjdHMsIGZ1bmN0aW9uIChyZWN0KSB7XHJcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcclxuXHRcdFx0bWlueSA9IG1pbnkgfHwgcmVjdC55O1xyXG5cdFx0XHRtaW54ID0gTWF0aC5taW4obWlueCwgcmVjdC54KTtcclxuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XHJcblx0XHRcdG1heHggPSBNYXRoLm1heChtYXh4LCByZWN0LnJpZ2h0KCkpO1xyXG5cdFx0XHRtYXh5ID0gTWF0aC5tYXgobWF4eSwgcmVjdC5ib3R0b20oKSk7XHJcblx0XHR9KTtcclxuXHRcdG1pbnggPSBtaW54IHx8IDA7XHJcblx0XHRtaW55ID0gbWlueSB8fCAwO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGRpcmVjdGlvbiB0aGUgcG9pbnQgPGk+cDwvaT4gaXMgaW4gcmVsYXRpb24gdG8gdGhlIGdpdmVuIHJlY3RhbmdsZS5cclxuXHQgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFdFU1QgKC0xLDApLCBFQVNUICgxLDApLCBOT1JUSCAoMCwtMSkgYW5kIFNPVVRIICgwLDEpIGlmIG9ydGhvZ29uYWwgaXMgdHJ1ZSwgb3RoZXJ3aXNlIHJldHVyblxyXG5cdCAqIHRoZSBkaXJlY3Rpb24gY29ubmVjdGlvbiB0aGUgY2VudGVyIG9mIHIgYW5kIHAuXHJcblx0ICogQHBhcmFtIHJcclxuXHQgKiBAcGFyYW0gcFxyXG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXHJcblx0ICogQHJldHVybnMge1BvaW50fCp9XHJcblx0ICovXHJcblx0c3RhdGljIGdldERpcmVjdGlvbihyLCBwLCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGlmICghb3J0aG9nb25hbClcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChyLngsIHIueSkuZ2V0RGlyZWN0aW9uKG5ldyBQb2ludChwLngsIHAueSkpO1xyXG5cclxuXHRcdGxldCBpLCBkaXN0YW5jZSA9IE1hdGguYWJzKHIubGVmdCAtIHAueCksIGRpcmVjdGlvbiA9IFBvaW50Llc7XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIudG9wIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuTjtcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5ib3R0b20gLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5TO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnJpZ2h0IC0gcC54KTtcclxuXHRcdGlmIChpIDwgZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuRTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGlyZWN0aW9uO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuY2xhc3MgU2hhcGUge1xuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb25maWcpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdF8uZGVmYXVsdHModGhpcywgY29uZmlnLCB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeS1jb29yZCBvZiB0aGUgdG9wIHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IGJvdHRvbSgpIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB4LWNvb3JkIG9mIGxlZnQgc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoLzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSByaWdodCBzaWRlIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XG5cblx0Z2V0IGNlbnRlcigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH1cblxuXHRnZXQgYm91bmRzKCkgeyByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyB9XG5cblx0Y29udGFpbnMoZWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0LyoqXG5cdCAqIFRoaXMgd2lsbCBnZW5lcmF0ZSBuIHBvcnRzIG9uIHRoZSBzaGFwZS5cblx0ICovXG5cdGdldFJlZ3VsYXJQb2ludHMobikge3JldHVybiBudWxsO31cblxuXHQvKipcblx0ICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiBib3VuZGFyeSBvZiB0aGlzIHNoYXBlIGFuZCB0aGUgbGluZSBjb25uZWN0aW5nICh4LHkpIHdpdGggdGhlIHJlZlB0LlxuXHQgKiBAcGFyYW0gcmVmUHRcblx0ICogQHJldHVybnMge251bGx9XG5cdCAqL1xuXHRnZXRQZXJpbWV0ZXIocmVmUHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFBlcmltZXRlcih0aGlzLCByZWZQdCwgb3J0aG9nb25hbCk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodmlldy5nZXRUZW1wbGF0ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMpKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xuXHRcdHJldHVybiByZWdpc3RyeVtuYW1lXTtcblx0fVxuXG5cdHN0YXRpYyBhZGRTaGFwZShuYW1lLCBjKSB7XG5cdFx0cmVnaXN0cnlbbmFtZV0gPSBjO1xuXHR9XG5cblx0c3RhdGljIHJlbW92ZVNoYXBlKG5hbWUpIHtcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogZG9tIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNJRTogKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcblxuXHRcdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXG5cdFx0aWYgKElkeCA+IDApXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xuXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSlcblx0XHRcdHJldHVybiAxMTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCksXG5cblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXG5cdFx0cmV0dXJuIHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cdH0pKCksXG5cblx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgYXR0cmlicywgc3R5bGVzLCBodG1sKSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcblx0XHRpZiAoaHRtbClcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XG5cdFx0bGV0IHRlbXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHN0cik7XG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2Rlcztcblx0fSxcblxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xuXHRcdGlmIChhdHRyaWJzKSB7XG5cdFx0XHRfLmZvckVhY2goYXR0cmlicywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHRcdCB9KTtcblx0XHR9XG5cdFx0aWYgKHN0eWxlcykge1xuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0XHRlbC5zdHlsZVtrZXldID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT0gMSAmJiAoICFtZXRob2QgfHwgbWV0aG9kKG5vZGUpICk7XG5cdH0sXG5cblx0Z2V0QW5jZXN0b3JCeTogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBjb250ZXh0LlxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcblx0fSxcblxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcblx0XHRsZXQgaCA9IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xuXHR9LFxuXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG5cdFx0aWYgKHgpIGVsLnN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XG5cdH0sXG5cblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0dmFyIGggPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRIZWlnaHQsIDEwKTtcblx0XHRyZXR1cm4gW3csIGhdO1xuXHR9LFxuXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xuXHRcdGlmIChoKSBlbC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0fSxcblxuXHRwcmVsb2FkSW1hZ2VzOiBmdW5jdGlvbihhcnJheSkge1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XG5cblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodGhpcyk7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xuXHRcdFx0XHRcdC8vIHJlbW92ZSBpbWFnZSBmcm9tIHRoZSBhcnJheSBvbmNlIGl0J3MgbG9hZGVkXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0bGlzdC5wdXNoKGltZyk7XG5cdFx0XHRpbWcuc3JjID0gYXJyYXlbaV07XG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogR2V0J3MgdGhlIGltYWdlJ3MgaW5mb3JtYXRpb24gZ2l2ZW4gdGhlIHVybC4gTXVzdCBiZSBwcmVsb2FkZWQgYnkgY2FsbGluZyB0aGUgcHJlbG9hZEltYWdlIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqL1xuXHRnZXRJbWFnZUluZm86IGZ1bmN0aW9uKHNyYykge1xuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcblx0ICovXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xuXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XG5cblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cblx0ICpcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnM6XG5cdCAqXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqL1xuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XG5cblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcblxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XG5cblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHR2YXIgYSA9IHJlY3Qud2lkdGggLyAyO1xyXG5cdFx0dmFyIGIgPSByZWN0LmhlaWdodCAvIDI7XHJcblx0XHR2YXIgY3ggPSByZWN0Lng7XHJcblx0XHR2YXIgY3kgPSByZWN0Lnk7XHJcblx0XHR2YXIgcHggPSBwdC54O1xyXG5cdFx0dmFyIHB5ID0gcHQueTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIHN0cmFpZ2h0IGxpbmUgZXF1YXRpb24gdGhyb3VnaFxyXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcclxuXHRcdHZhciBkeCA9IHBhcnNlSW50KHB4IC0gY3gpO1xyXG5cdFx0dmFyIGR5ID0gcGFyc2VJbnQocHkgLSBjeSk7XHJcblxyXG5cdFx0dmFyIHR4LCB0eTtcclxuXHJcblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoY3gsIGN5ICsgYiAqIGR5IC8gTWF0aC5hYnMoZHkpKTtcclxuXHRcdH0gZWxzZSBpZiAoZHggPT0gMCAmJiBkeSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxyXG5cdFx0dmFyIGQgPSBkeSAvIGR4O1xyXG5cdFx0dmFyIGggPSBjeSAtIGQgKiBjeDtcclxuXHRcdHZhciBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xyXG5cdFx0dmFyIGYgPSAtMiAqIGN4ICogZTtcclxuXHRcdHZhciBnID0gYSAqIGEgKiBkICogZCAqIGN4ICogY3ggKyBiICogYiAqIGN4ICogY3ggLSBhICogYSAqIGIgKiBiO1xyXG5cdFx0dmFyIGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XHJcblxyXG5cdFx0Ly8gVHdvIHNvbHV0aW9ucyAocGVyaW1ldGVyIHBvaW50cylcclxuXHRcdHZhciB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHhvdXQyID0gKC1mIC0gZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeW91dDEgPSBkICogeG91dDEgKyBoO1xyXG5cdFx0dmFyIHlvdXQyID0gZCAqIHhvdXQyICsgaDtcclxuXHRcdHZhciBkaXN0MSA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDEgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQxIC0gcHkpLCAyKSk7XHJcblx0XHR2YXIgZGlzdDIgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQyIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MiAtIHB5KSwgMikpO1xyXG5cclxuXHRcdC8vIENvcnJlY3Qgc29sdXRpb25cclxuXHRcdHZhciB4b3V0ID0gMDtcclxuXHRcdHZhciB5b3V0ID0gMDtcclxuXHJcblx0XHRpZiAoZGlzdDEgPCBkaXN0Mikge1xyXG5cdFx0XHR4b3V0ID0geG91dDE7XHJcblx0XHRcdHlvdXQgPSB5b3V0MTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MjtcclxuXHRcdFx0eW91dCA9IHlvdXQyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwID0gbmV3IFBvaW50KHhvdXQsIHlvdXQpO1xyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoZGlyLnggPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggLSBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnggPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCArIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgLSBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSArIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHR0eXBlOiBcImRpcmVjdFwiLFxuXHRzaG93R2F1Z2U6IGZhbHNlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0YW5jaG9yWDogMCxcblx0YW5jaG9yWTogMCxcblx0b2Zmc2V0WDogMCxcblx0b2Zmc2V0WTogMFxufTtcblxubGV0IGxpbmtUeXBlcyA9IHt9O1xuXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIGw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgbW9kaWZpZXJzIG9yIGxhYmVsLi5cblx0ICpcblx0ICogQHBhcmFtIGdlb21ldHJ5OiBkZWZpbmVzIGhvdyBmYXIgYWxvbmcgdGhlIGVkZ2Ugc2hvdWxkIHRoZSBwb2ludCBiZSBwbGFjZWQuXG5cdCAqIEByZXR1cm4gKltdIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA8PSAxKSBwICo9IGw7XG5cdFx0aWYgKHAgPCAwKSBwID0gbCArIHA7XG5cdFx0aWYgKHAgPiBsKSBwID0gbDtcblxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cywgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5rJztcblx0fVxuXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1R5cGVzW3NoYXBlQ29uZmlnLnR5cGVdO1xuXHRcdGlmIChsaW5rQ2xhc3MpXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHR5cGUgbm90IHN1cHBvcnRlZDogJyArIHNoYXBlQ29uZmlnLnR5cGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxufVxuXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cblxuXHRnZXQgY29udHJvbFB0cygpIHtcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IG51bGw7XG5cdFx0cHRzWzFdID0gW107XG5cdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XG5cdFx0aWYgKHAgPCAwKSBwKys7XG5cdFx0aWYgKHAgPiAxKSBwLS07XG5cblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XG5cdFx0bGV0IHAxID0gcHRzWzBdO1xuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcblx0XHRsZXQgcDQgPSBwdHNbMV07XG5cblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHZhciBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcblx0XHR2YXIgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xuXHRcdHZhciBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xuXHRcdHZhciBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdHZhciB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcblx0XHR2YXIgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcblxuXHRcdHZhciB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcblx0XHR2YXIgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xuXG5cdFx0dmFyIHNlZyA9IHRoaXMuc2VnbWVudDtcblxuXHRcdHZhciBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcblx0XHR2YXIgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcblxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xuXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxuXHRcdHtcblx0XHRcdHZhciB4ID0gKGlzU291cmNlTGVmdCkgP1xuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cblxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xuXHRcdFx0TUlOX0JVRkZFUjogMTAsXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxuXHRcdFx0bWF4Q2hhbm5lbFdpZHRoOiAxMDBcblx0XHR9KTtcblx0XHRzdXBlcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHtcblx0XHRsZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlSW50ZXJuYWwodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdHBvcyA9IE1hbmhhdHRhbi5wcm9jZXNzUG9zaXRpb25zKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCBwb3MsIHRoaXMuc3RhcnROb3JtYWwueCE9MCk7XG5cdFx0aWYgKHRoaXMuYXV0b1JvdXRlKSB7XG5cdFx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0XHR2YXIgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcblx0XHRcdHZhciBjb250YWluZXIgPSBlZGdlLnNvdXJjZS5nZXRDb21tb25BbmNlc3RvcihlZGdlLnRhcmdldCk7XG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGNvbnRhaW5lci5nZXREZXNjZW5kYW50cygpO1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRub2RlID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cblx0XHRcdFx0aWYgKG5vZGUuZXhjbHVkZUZyb21Sb3V0aW5nKGVkZ2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnNvdXJjZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2UudGFyZ2V0KSkgY29udGludWU7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2Uuc291cmNlKVxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnRhcmdldClcblx0XHRcdFx0ZW5kQm94ID0gaW5kZXg7XG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxuXHRcdFx0XHR0aGlzLmF1dG9Sb3V0ZShwb3MsIGNvbnRhaW5lci5nZXRCb3VuZHMoZG9jdW1lbnQpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0fVxuXHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1ha2UgYSByb3V0ZSBiYXNlZCBvbiB0aGUgc3RhcnQsIGVuZCBhbmQgc3RhcnROb3JtYWwgYW5kIGVuZE5vcm1hbFxuXHQgKiBOb25lIG9mIHRoZSBwYXJhbWV0ZXJzIGNhbiBiZSBudWxsXG5cdCAqIFRPRE86IFRoaXMgbWV0aG9kIGNvdWxkIHVzZSBzb21lIGltcHJvdmVtZW50Li4uXG5cdCAqL1xuXHRzdGF0aWMgcm91dGVJbnRlcm5hbChzdGFydCwgZW5kLCBzdGFydE5vcm1hbCwgZW5kTm9ybWFsLCBidWZmZXIpIHtcblx0XHR2YXIgZGlyZWN0aW9uID0gc3RhcnQuZ2V0RGlyZWN0aW9uKGVuZCk7XG5cdFx0dmFyIGF2ZXJhZ2UgPSBzdGFydC5nZXRNaWRQb2ludChlbmQpO1xuXHRcdHZhciBwb3MgPSBbXTtcblx0XHR2YXIgc3RhcnRQb3NpdGl2ZSA9IG5ldyBQb2ludChzdGFydE5vcm1hbC54KnN0YXJ0Tm9ybWFsLngsIHN0YXJ0Tm9ybWFsLnkqc3RhcnROb3JtYWwueSk7XG5cdFx0dmFyIGVuZFBvc2l0aXZlID0gbmV3IFBvaW50KGVuZE5vcm1hbC54KmVuZE5vcm1hbC54LCBlbmROb3JtYWwueSplbmROb3JtYWwueSk7XG5cdFx0dmFyIGhvcml6b250YWwgPSBzdGFydE5vcm1hbC54ICE9IDA7XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnkgOiBzdGFydC54O1xuXG5cdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdHZhciBpO1xuXHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPT0gMCkge1xuXHRcdFx0aWYgKChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0JiYgKGVuZE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPD0gMCkpIHtcblx0XHRcdFx0Ly8gMFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gMlxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMClcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cblx0XHRcdFx0aWYgKGVuZE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPiAwKVxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA+IDApIHtcblx0XHRcdFx0Ly8xXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8zIG9yIDFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApIHtcblx0XHRcdFx0XHRpID0gc3RhcnRQb3NpdGl2ZS5kb3RQcm9kdWN0KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwb3MucHVzaChob3Jpem9udGFsID8gZW5kLnkgOiBlbmQueCk7XG5cblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Ly8gUHJvY2VzcyB0aGUgcG9zaXRpb25zLlxuXHRzdGF0aWMgcHJvY2Vzc1Bvc2l0aW9ucyhzdGFydCwgZW5kLCBwb3NpdGlvbnMsIGhvcml6b250YWwpIHtcblx0XHR2YXIgcG9zID0gW107XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnggOiBzdGFydC55O1xuXHRcdHZhciBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvc1tpICsgMV0gPSBwb3NpdGlvbnNbaV07XG5cdFx0fVxuXHRcdHBvcy5wdXNoKChob3Jpem9udGFsID09IChwb3NpdGlvbnMubGVuZ3RoICUgMiA9PSAxKSkgPyBlbmQueCA6IGVuZC55KTtcblxuXHRcdHZhciBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBzdGFydDtcblx0XHR2YXIgcDtcblx0XHR2YXIgY3VycmVudCwgcHJldjtcblx0XHRmb3IgKGkgPSAyOyBpIDwgcG9zLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0cHJldiA9IHBvc1tpIC0gMV07XG5cdFx0XHRjdXJyZW50ID0gcG9zW2ldO1xuXHRcdFx0cCA9IGhvcml6b250YWwgPyBuZXcgUG9pbnQocHJldiwgY3VycmVudCkgOiBuZXcgUG9pbnQoY3VycmVudCwgcHJldik7XG5cdFx0XHRwdHMucHVzaChwKTtcblx0XHR9XG5cdFx0cHRzLnB1c2goZW5kKTtcblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxuXHQgKi9cblx0YXV0b1JvdXRlKHB0cywgY29udGFpbmVyLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XG5cdFx0dmFyIGNoYW5uZWwsIGNoYW5uZWwyLCBwdCwgZGlyO1xuXG5cdFx0dmFyIHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XG5cdFx0Ly8gZmlyc3QgZ2V0IHRoZSBzdGFydCBhbmQgZW5kIGNoYW5uZWxcblx0XHRib3ggPSBib3hlc1tlbmRCb3hdO1xuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcblx0XHRpZiAocHQueSA8IGJveC55KVxuXHRcdFx0c2lkZSA9IDE7XG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcblx0XHRcdHNpZGUgPSAzO1xuXHRcdGVsc2UgaWYgKHB0LnggPCBib3gueClcblx0XHRcdHNpZGUgPSAwO1xuXHRcdGVsc2Vcblx0XHRcdHNpZGUgPSAyO1xuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xuXHRcdGVuZFBhZGRpbmcgPSBjaGFubmVsLmhvcml6b250YWwgPyAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCkvMiA6IChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wKS8yO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAocHRzW2krMV0ueCA9PSBwdHNbaV0ueCAmJiBwdHNbaSsxXS55ID09IHB0c1tpXS55KSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdCA9IF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcblx0XHRcdGogPSBpbnRlcnNlY3RbMF07XG5cdFx0XHRzaWRlID0gaW50ZXJzZWN0WzFdO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZSk7XG5cdFx0XHRzd2l0Y2goc2lkZSkge1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludCgoY2hhbm5lbC5yaWdodCArIGNoYW5uZWwubGVmdCkvMiwgcHRzW2ldLnkpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMSA6IDM7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS55ID09IHB0c1tpLTFdLnkpICYmIChwdHNbaS0xXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpLTFdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAwICYmIHB0LnggPD0gcHRzW2ldLngpIHx8IChzaWRlID09IDIgJiYgcHQueCA+PSBwdHNbaV0ueCkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkgKyBkKSwgbmV3IFBvaW50KHB0LngsIHB0LnkgKyBkKV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludChwdHNbaV0ueCwgKGNoYW5uZWwuYm90dG9tICsgY2hhbm5lbC50b3ApLzIpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMCA6IDI7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS54ID09IHB0c1tpLTFdLngpICYmIChwdHNbaS0xXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaS0xXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAxICYmIHB0LnkgPD0gcHRzW2ldLnkpIHx8IChzaWRlID09IDMgJiYgcHQueSA+PSBwdHNbaV0ueSkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCArIGQsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0LnggKyBkLCBwdC55KV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBtYXggcG9pbnRzLlxuXHRcdFx0aWYgKGkgPiAyMCkgcmV0dXJuO1xuXHRcdFx0aWYgKHB0ICYmIChwdC54ICE9IHB0c1tpXS54IHx8IHB0LnkgIT0gcHRzW2ldLnkpKSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0fVxuXHR9XG5cblx0X2hhc0ludGVyc2VjdGlvbihwdHMsIGJveGVzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChib3hlc1tqXS5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSkgPj0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0X2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgYm94LCBzaWRlLCBzYXZlZEluZGV4ID0gbnVsbCwgc2F2ZWRTaWRlID0gbnVsbDtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKGkgPT0gMCAmJiBqID09IHN0YXJ0Qm94KSB8fCAoaSA9PSBwdHMubGVuZ3RoIC0gMiAmJiBqID09IGVuZEJveCkpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRzaWRlID0gYm94LmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKTtcblx0XHRcdGlmIChzaWRlID49IDApIHtcblx0XHRcdFx0aWYgKHNhdmVkSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGJveGVzW3NhdmVkSW5kZXhdLmRpc3RhbmNlKHB0c1tpXSkgPiBib3guZGlzdGFuY2UocHRzW2ldKSkge1xuXHRcdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2F2ZWRJbmRleCAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIFtzYXZlZEluZGV4LCBzYXZlZFNpZGVdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0X2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBicmVha1B0LCBib3gsIHNpZGUpIHtcblx0XHR2YXIgZGlyO1xuXHRcdHZhciBwO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwID0gXCJ5XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwID0gXCJ4XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvL2ZpcnN0IHRyeSB0aGUgYnJlYWtwdC5cblx0XHRkaXIgPSBfZ2V0Um91dGVEaXJlY3Rpb24oYnJlYWtQdCwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRkaXIgPSAtX2dldFJvdXRlRGlyZWN0aW9uKHB0c1swXSwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdFx0aWYgKGJyZWFrUHRbcF0gPCBib3guZ2V0Q2VudGVyKClbcF0pXG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGlyO1xuXHR9XG5cblx0X2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XG5cdFx0aWYgKHB0MS54ID09IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlM7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcblx0XHR9IGVsc2UgaWYgKHB0MS55ID09IHB0Mi55KSB7XG5cdFx0XHRpZiAocHQxLnggPCBwdDIueCkgcmV0dXJuIFBvaW50LkU7XG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcblx0XHR9IGVsc2UgaWYgKHB0MS54IDwgcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU0U7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU1c7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XG5cdFx0fVxuXHR9XG5cblx0X2dldENoYW5uZWwoY29udGFpbmVyLCBpbmRleCwgYm94ZXMsIHNpZGUpIHtcblx0XHR2YXIgbWF4Q2hhbm5lbFdpZHRoID0gdGhpcy5tYXhDaGFubmVsV2lkdGg7XG5cdFx0dmFyIGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XG5cdFx0dmFyIHB0LCBpO1xuXHRcdHZhciBjaGFubmVsID0ge30sIGwsIHQsIGIsIHI7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRMZWZ0KCk7XG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHIgPSBib3hlc1tpXS5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPj0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcblx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0VG9wKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGIgPSBib3hlc1tpXS5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChiID49IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcblx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGNoYW5uZWwubGVmdCA9IHB0Lng7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRsID0gYm94ZXNbaV0uZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY2hhbm5lbC5sZWZ0ICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwudG9wID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiBib3gyLmdldFRvcCgpLnkpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY2hhbm5lbC50b3AgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgYSBsaW5lIHNlZ21lbnQgYnkgYSBzcGVjaWZpZWQgZGlzdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxuXHQgKiBAcGFyYW0gaSB0aGUgaW5kZXggb2YgdGhlIHNlZ21lbnQuXG5cdCAqIEBwYXJhbSBkIHRoZSBkaXN0YW5jZSB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXG5cdCAqIEBwYXJhbSBlbmRQYWRkaW5nXG5cdCAqL1xuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBuZXcgbGluZSBzZWdtZW50cy5cblx0XHR2YXIgZGlyLCBsLCBwdDtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludC5cblx0XHRcdGRpciA9IHB0c1swXS5nZXREaXJlY3Rpb24ocHRzWzFdKTtcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxuXHRcdFx0XHRzdGFydFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oc3RhcnRQYWRkaW5nLCBwdHNbMF0uZGlzdGFuY2UocHRzWzFdKS8yKTtcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UoMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGkgPT0gcHRzLmxlbmd0aCAtIDIpIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cblx0XHRcdGRpciA9IHB0c1twdHMubGVuZ3RoLTFdLmdldERpcmVjdGlvbihwdHNbcHRzLmxlbmd0aC0yXSk7XG5cdFx0XHRpZiAoIWVuZFBhZGRpbmcpXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oZW5kUGFkZGluZywgcHRzW3B0cy5sZW5ndGgtMV0uZGlzdGFuY2UocHRzW3B0cy5sZW5ndGgtMl0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDFdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnkgKz0gZDtcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS54ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cblx0ICovXG5cdF9tZXJnZVNlZ21lbnRzKHB0cykge1xuXHRcdHZhciBoMSA9IHB0c1twdHMubGVuZ3RoLTFdLnkgPT0gcHRzW3B0cy5sZW5ndGgtMl0ueTtcblx0XHR2YXIgaDI7XG5cdFx0Zm9yICh2YXIgaSA9IHB0cy5sZW5ndGggLSAyOyBpID49IDE7IGktLSkge1xuXHRcdFx0aDIgPSBwdHNbaV0ueSA9PSBwdHNbaS0xXS55O1xuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGgxID0gIWgxO1xuXHRcdH1cblx0fVxufVxuXG5saW5rVHlwZXNbJ2RpcmVjdCddID0gRGlyZWN0TGluaztcbmxpbmtUeXBlc1snYmV6aWVyJ10gPSBCZXppZXJMaW5rO1xubGlua1R5cGVzWydlbnRpdHlSZWxhdGlvbnMnXSA9IEVudGl0eVJlbGF0aW9ucztcbmxpbmtUeXBlc1snbWFuaGF0dGFuJ10gPSBNYW5oYXR0YW47XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5rLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0pIHtcblx0XHR0aGlzLnJvb3QgPSByb290O1xuXHRcdHRoaXMucm9vdE5TID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ25zJykgfHwgJ3Jvb3QnO1xuXHRcdHRoaXMuem9vbVNjYWxlID0gem9vbVNjYWxlO1xuXHRcdHRoaXMuc2NhbGUgPSAxLjA7XG5cdFx0dGhpcy5saXN0ZW5lcnMgPSB7fTtcblx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0dGhpcy5oYW5kbGVyID0gXy5iaW5kKHRoaXMuaGFuZGxlRXZlbnQsIHRoaXMpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gU2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50c1xuXHRcdHRoaXMuZW50ZXJTdGFjayA9IFtdO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0YXJ0IGxpc3RlbmluZyBmb3IgZXZlbnRzLlxuXHQgKi9cblx0c3RhcnQoKSB7XG5cdFx0aWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdEV2ZW50cy5vbih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0YXJ0S2V5cygpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IHRydWU7XG5cdH1cblxuXHQvKipcblx0ICogU3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0b3AoKSB7XG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub2ZmKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xuXHRcdHRoaXMuc3RvcEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblx0fVxuXG5cdHN0YXJ0S2V5cygpIHtcblx0XHRFdmVudHMub24oZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcblx0fVxuXG5cdHN0b3BLZXlzKCkge1xuXHRcdEV2ZW50cy5vZmYoZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcblx0fVxuXG5cdGdldEV2ZW50SW5mbyhldmVudCkge1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgbnMsIHN0YWNrID0gW10sIGlzUm9vdCA9IGZhbHNlO1xuXHRcdHdoaWxlICghaXNSb290ICYmIHRhcmdldCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQpIHtcblx0XHRcdG5zID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbnMnKTtcblx0XHRcdGlmIChucykge1xuXHRcdFx0XHRpc1Jvb3QgPSBfLnN0YXJ0c1dpdGgobnMsIFwicm9vdC5cIik7XG5cdFx0XHRcdGlmIChpc1Jvb3QpIHtcblx0XHRcdFx0XHRucyA9IG5zLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZXZlbnQubnNUYXJnZXQpIGV2ZW50Lm5zVGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHRzdGFjay5zcGxpY2UoMCwgMCwgdGFyZ2V0KTtcblx0XHRcdFx0YnVmLnByZXBlbmQobnMpO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXHRcdGlmICghaXNSb290KVxuXHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGV2ZW50Lm5zVGFyZ2V0O1xuXG5cdFx0Ly8gdGFyZ2V0IHN0YWNrIGlzIGEgc3RhY2sgb2YgYWxsIHRoZSBucyB0YXJnZXRzIHVwIHRvIHRoZSBvbmUgd2l0aCB0aGUgZGF0YSBiaW5kaW5nLlxuXHRcdGV2ZW50LnRhcmdldFN0YWNrID0gc3RhY2s7XG5cdFx0bnMgPSBidWYudG9TdHJpbmcoJy4nKTtcblx0XHRpZiAobnMgPT0gJycpIG5zID0gdGhpcy5yb290TlM7XG5cdFx0cmV0dXJuIHtkYXRhOiBldmVudC5yb290VGFyZ2V0LCBuczogbnN9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtYWluIGV2ZW50IGhhbmRsZXIgbWV0aG9kLCBpdCBwcm9jZXNzZXMgZXZlbnQgYW5kIGdlbmVyYXRlIHJlbGV2YW50IGV2ZW50cyB0byBkaXNwYXRjaC5cblx0ICovXG5cdGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cdFx0bGV0IHR5cGUgPSBldmVudC50eXBlO1xuXG5cdFx0Ly8gRG8gbm90IGRpc3BhdGNoIG90aGVyIGV2ZW50cyBpZiB3ZSBhcmUgZHJhZ2dpbmcuXG5cdFx0aWYgKHRoaXMuZHJhZ2dpbmcgfHwgRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSByZXR1cm47XG5cblx0XHRsZXQgZGF0YSwgbnMsIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpLCBpbmZvLCBpc0tleUV2ZW50ID0gKHR5cGUgPT0gJ2tleWRvd24nIHx8IHR5cGUgPT0na2V5dXAnKTtcblx0XHRpZiAoaXNLZXlFdmVudCkge1xuXHRcdFx0ZGF0YSA9IHRoaXMucm9vdDtcblx0XHRcdG5zID0gS2V5VXRpbHMuZ2V0S2V5RXZlbnQoZXZlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0aWYgKCFpbmZvKSByZXR1cm47XG5cdFx0XHRkYXRhID0gaW5mby5kYXRhO1xuXHRcdFx0bnMgPSBpbmZvLm5zO1xuXHRcdH1cblxuXHRcdC8vVXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImhhbmRsZUV2ZW50IC0gXCIgKyB0eXBlICsgJztucz0nICsgbnMpO1xuXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNld2hlZWwnKSB7XG5cdFx0XHR0aGlzLnNjYWxlICo9IE1hdGgucG93KDIsIGV2ZW50LndoZWVsRGVsdGEgKiAwLjAwMik7XG5cdFx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XG5cdFx0XHRldmVudC5zY2FsZSA9IHRoaXMuc2NhbGU7XG5cdFx0XHR0eXBlID0gJ3pvb20nO1xuXHRcdH1cblxuXHRcdC8vIFNlZSBpZiB3ZSBzaG91bGQgY3JlYXRlIGRyYWcgZXZlbnRzXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uID09IDAgLypvbmx5IGRyYWcgb24gbGVmdCBjbGljayovKSB7XG5cdFx0XHQvLyBDcmVhdGUgZHJhZyBvYmplY3QuXG5cdFx0XHRjb25zdCBkcmFnT2JqZWN0ID0ge2RhdGE6IGRhdGEsIHBvczogbnMgPT0gJ3Jvb3QnID8gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpIDogcG9zfTtcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbW91c2UgbW92ZS5cblx0XHRcdGxldCBkcmFnUG9zO1xuXG5cdFx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIG1vdXNlIGhhcyBtb3ZlZC4gSUUgYWx3YXlzIGZpcmUgbW91c2Vtb3ZlIGFmdGVyIG1vdXNlZG93biBldmVuIGlmIHRoZSBtb3VzZSBoYXNuJ3QgbW92ZWQgeWV0LlxuXHRcdFx0XHRcdGlmIChkcmFnT2JqZWN0LnBvc1swXSA9PSBjdXJyZW50UG9zWzBdICYmIGRyYWdPYmplY3QucG9zWzFdID09IGN1cnJlbnRQb3NbMV0pIHJldHVybjtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGRyYWdnaW5nXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGRyYWdPYmplY3QuZGF0YTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ3N0YXJ0JywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ09iamVjdC5wb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IGN1cnJlbnRQb3M7XG5cdFx0XHRcdHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWcnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXG5cdFx0XHRcdGxldCBpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHRpZiAodGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ2VuZCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZXVwJywgbnMsIGluZm8uZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdFx0fTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc0tleUV2ZW50KVxuXHRcdFx0dGhpcy5zaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXG5cdFx0Ly8gZGlzYWJsZSB0aGUgZGVmYXVsdCBjb250ZXh0IG1lbnVcblx0XHQvL2lmICh0eXBlID09ICdjb250ZXh0bWVudScpXG5cdFx0Ly9cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXG5cdCAqL1xuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHRsZXQgbGFzdCwgc3RhY2s7XG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcblx0XHRcdGsgPSBrIHx8IDA7XG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuXHRcdFx0XHR2YXIgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcblx0XHR9O1xuXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xuXHRcdFx0XHRsZXQgaXRlbTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcblx0fVxuXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGtleSkpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKGxpc3RlbmVycywgKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBhZnRlciBkaXNwYXRjaGluZywgZG8gbm90IHByb3BhZ2F0ZS5cblx0XHQvL2lmIChldmVudC5zdG9wUHJvcGFnYXRpb24pXG5cdFx0Ly9cdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHBvcztcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcblx0ICogLy8gS2V5IGlzIG9iamVjdCB7Y3RybCwgYWx0LCBzaGlmdCwgbWV0YSwgY29kZX1cblx0ICovXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnVucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XG5cdFx0XHRfLmZvckVhY2godHlwZSwgKHQpID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXSB8fCAodGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW3R5cGVdLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHRoaXMuc3RvcCgpO1xuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XG5cdFx0ZGVsZXRlIHRoaXMubGlzdGVuZXJzO1xuXHRcdGRlbGV0ZSB0aGlzLmVudGVyU3RhY2s7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgaWYgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgdHlwZSBtYXRjaGVzIHRoZSByZWFsIGV2ZW50IHR5cGUuIFwiKlwiIGlzIGFsbG93ZWQgYXMgYSB3aWxkIGNhcmQuXG5cdCAqL1xuXHRzdGF0aWMgbWF0Y2gobnNUeXBlLCByZWdpc3RlcmVkVHlwZSkge1xuXHRcdGNvbnN0IGFyciA9IHJlZ2lzdGVyZWRUeXBlLnNwbGl0KCcqJyk7XG5cdFx0aWYgKGFyci5sZW5ndGggPT0gMSlcblx0XHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XG5cblx0XHRsZXQgc3Vic3RyLCBpbmRleCA9IDA7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChhcnJbaV0ubGVuZ3RoID09IDApIGNvbnRpbnVlO1xuXHRcdFx0c3Vic3RyID0gbnNUeXBlLnNsaWNlKGluZGV4KTtcblx0XHRcdGluZGV4ID0gc3Vic3RyLmluZGV4T2YoYXJyW2ldKTtcblx0XHRcdGlmIChpbmRleCA8IDApXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdGluZGV4ICs9IGFycltpXS5sZW5ndGg7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xuXHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHR2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuXHRcdFx0dmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG5cdFx0XHRyZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuXHRcdH1cblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRyZXR1cm4gW2UuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3BdO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanNcbiAqKi8iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG4vKipcbiAqIEtFWSBjb25zdGFudFxuICovXG5jb25zdCBLRVkgPSB7XG5cdEFMVCAgICAgICAgICA6IDE4LFxuXHRCQUNLX1NQQUNFICAgOiA4LFxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcblx0Q09OVFJPTCAgICAgIDogMTcsXG5cdERFTEVURSAgICAgICA6IDQ2LFxuXHRET1dOICAgICAgICAgOiA0MCxcblx0RU5EICAgICAgICAgIDogMzUsXG5cdEVOVEVSICAgICAgICA6IDEzLFxuXHRFU0NBUEUgICAgICAgOiAyMjAsXG5cdEhPTUUgICAgICAgICA6IDM2LFxuXHRMRUZUICAgICAgICAgOiAzNyxcblx0TUVUQSAgICAgICAgIDogMjI0LFxuXHROVU1fTE9DSyAgICAgOiAxNDQsXG5cdFBBR0VfRE9XTiAgICA6IDM0LFxuXHRQQUdFX1VQICAgICAgOiAzMyxcblx0UEFVU0UgICAgICAgIDogMTksXG5cdFBSSU5UU0NSRUVOICA6IDQ0LFxuXHRSSUdIVCAgICAgICAgOiAzOSxcblx0U0NST0xMX0xPQ0sgIDogMTQ1LFxuXHRTSElGVCAgICAgICAgOiAxNixcblx0U1BBQ0UgICAgICAgIDogMzIsXG5cdFRBQiAgICAgICAgICA6IDksXG5cdFVQICAgICAgICAgICA6IDM4XG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxuXHQvL1NVQlRSQUNUICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDE3MyA6IDE4OVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUV2ZW50KGV2ZW50KSB7XG5cdGlmICghZXZlbnQgfHwgIWV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cblx0Ly8gTmVlZCB0byBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXNcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcblx0XHRrZXkgPSBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGdldEtleURhdGEoZXZlbnQuY3RybEtleSwgZXZlbnQuYWx0S2V5LCBldmVudC5zaGlmdEtleSwgZXZlbnQubWV0YUtleSwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleURhdGEoY3RybCwgYWx0LCBzaGlmdCwgbWV0YSwga2V5KSB7XG5cdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0aWYgKGN0cmwpIGJ1Zi5hcHBlbmQoXCJDVFJMXCIpO1xuXHRpZiAoYWx0KSBidWYuYXBwZW5kKFwiQUxUXCIpO1xuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcblx0aWYgKG1ldGEpIGJ1Zi5hcHBlbmQoXCJNRVRBXCIpO1xuXHRpZiAoa2V5KSBidWYuYXBwZW5kKGtleSk7XG5cblx0cmV0dXJuIGJ1Zi50b1N0cmluZyhcIi5cIik7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdmlldy9NYXJrZXJcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZSxcblx0c3RhcnRNYXJrZXI6IG51bGwsXG5cdGVuZE1hcmtlcjoge1xuXHRcdGlkOiAnRGVmYXVsdF9FbmRNYXJrZXInLFxuXHRcdHR5cGU6ICdhcnJvdycsXG5cdFx0c2l6ZTogMTBcblx0fSxcblx0Lyogc3RhcnQgYW5kIGVuZCBpcyBvbmx5IHVzZWQgaWYgdGhlIGVkZ2UgaXMgbm90IGNvbm5lY3RlZCB0byBhIG5vZGUgKi9cblx0c3RhcnQ6IFswLCAwXSxcblx0ZW5kOiBbNDAwLCAyMDBdXG59O1xuXG5jbGFzcyBHcmFwaCB7XG5cdGNvbnN0cnVjdG9yKGlkID0gXy51bmlxdWVJZChcIkdcIiksIGNvbmZpZyA9IHt9LCBtb2RlbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblxuXHRcdHRoaXMubm9kZXMgPSB7fTtcblx0XHR0aGlzLmVkZ2VzID0ge307XG5cblx0XHR0aGlzLnNlbGVjdGlvbiA9IG51bGw7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcblxuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLm5vZGVUeXBlcywgXCJOb2Rlc1wiLCBub2RlRGVmYXVsdHMpO1xuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLmVkZ2VUeXBlcywgXCJFZGdlc1wiLCBlZGdlRGVmYXVsdHMpO1xuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxuXHRcdHRoaXMubWFya2VycyA9IFtdO1xuXHRcdGxldCBlZGdlVHlwZXMgPSBVdGlscy50eXBlKEVkZ2UubmFtZXNwYWNlKSwgbWFya2VyLCBtYXJrZXJDb25maWc7XG5cdFx0Zm9yIChsZXQgdHlwZSBvZiBlZGdlVHlwZXMuZW50cmllcygpKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZVsxXS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGRlbGV0ZSBjb25maWcubm9kZVR5cGVzO1xuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0XHR0aGlzLnJvb3QgPSBudWxsO1xuXHRcdGlmIChtb2RlbClcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XG5cdFx0dmFyIGpzQ2xhc3MgPSBudWxsO1xuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cblx0XHRcdHZhciB0eXBlID0gVXRpbHMudHlwZShkZWZhdWx0Q2xhc3MubmFtZXNwYWNlLCBjb25maWcudHlwZSk7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcblx0XHR9XG5cblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgTm9kZVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSwgcG9zKSB7XG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcblx0XHRsZXQgbm9kZSA9IG5ldyBOb2RlQ2xhc3ModGhpcywgY29uZmlnKTtcblxuXHRcdGlmIChwYXJlbnQpXG5cdFx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIG5vZGUsIHBvcyk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xuXHRcdFx0dGhpcy5yb290LnByb3AoJ3JvbGUnLCAncm9vdCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZXNbbm9kZS5pZF0gPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSwgZnJvbSwgdG8pIHtcblx0XHRsZXQgRWRnZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIEVkZ2UpO1xuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcblxuXHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgZWRnZSk7XG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XG5cdFx0cmV0dXJuIGVkZ2U7XG5cdH1cblxuXHRzdGF0aWMgYWRkQ2hpbGQocGFyZW50LCBjaGlsZCkge1xuXHRcdGlmICghcGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0cGFyZW50LmNoaWxkcmVuID0gW107XG5cblx0XHRpZiAoY2hpbGQucGFyZW50ICE9IHBhcmVudCkge1xuXHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xuXG5cdFx0XHRpZiAoY2hpbGQucGFyZW50ICYmIGNoaWxkLnBhcmVudC5jaGlsZHJlbilcblx0XHRcdFx0Y2hpbGQucGFyZW50LmNoaWxkcmVuID0gXy53aXRob3V0KGNoaWxkLnBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xuXHRcdH1cblx0XHRjaGlsZC5wYXJlbnQgPSBwYXJlbnQ7XG5cdH1cblxuXHRsb2FkTW9kZWwobW9kZWwsIHBhcmVudCA9IHRoaXMuZ2V0Q3VycmVudFJvb3QoKSkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldEN1cnJlbnRSb290KCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5HcmFwaC5ERUZBVUxUUyA9IHtcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxuXHRtdWx0aUNvbm5lY3Q6IGZhbHNlLFxuXHRyZWFkT25seTogZmFsc2UsXG5cdHZpZXdPbmx5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9HcmFwaC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ04nKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuaW5FZGdlcyA9IFtdO1xuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRpc0FuY2VzdG9yKG4pIHtcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xuXHRcdHdoaWxlIChub2RlKSB7XG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2Vcblx0YWRkSW5FZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkIHx8IHBvcyA+IGVkZ2UubGVuZ3RoIC0gMSlcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4odmlldykge1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Xy5mb3JFYWNoKHRoaXMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRpZiAocG9ydE5hbWUgPT0gJ2F1dG8nKSB7XG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcblx0XHRpZiAoXy5pc0FycmF5KGxhYmVsKSlcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xuXHR9XG59XG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcblxuLypcblxuLyoqXG4gKiBUaGUgRHJpbGxEb3duUGFyZW50IGlzIHRoZSBwYXJlbnQgdGhhdCBkaXNwbGF5cyB0aGUgdmVydGV4IHdoZW4gZHJpbGxlZCBkb3duLlxuICpcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNMb2NrZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmlzTG9ja2VkKCkpXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+Jztcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQuaXNMb2NrZWQoKSkgJiYgVmVydGV4LnN1cGVyY2xhc3MuY2FuRWRpdC5jYWxsKHRoaXMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4uL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuXG4vKipcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmlkID0gY29uZmlnLmlkO1xuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XG5cblx0XHQvLyBJbml0aWFsaXplIGRlY29yYXRvcnNcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGVjb3JhdG9ycyhjb25maWcuZGVjb3JhdG9ycyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmRlY29yYXRvcnM7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBWaWV3IFByb3BlcnRpZXNcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XG5cdFx0XHR0aGlzLnZpZXdQcm9wcyA9IGNvbmZpZy52aWV3cztcblx0XHRcdGRlbGV0ZSBjb25maWcudmlld3M7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0eXBlXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcblx0XHR0eXBlID0gVXRpbHMudHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSwgdHlwZSk7XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XG5cdFx0ZGVsZXRlIGNvbmZpZy50eXBlO1xuXHRcdHRoaXMucHJvcHMgPSBuZXcgdHlwZShjb25maWcpO1xuXHR9XG5cblx0cHJvcChuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcblx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gbmFtZVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKSB7XG5cdFx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jylcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXTtcblx0XHR9XG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcblx0XHRcdHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcblx0XHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XSA9IHt9O1xuXHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cblxuXHQvKipcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHt7a2V5OiAoc3RyaW5nfCopLCBjbGFzc05hbWU6ICosIG5hbWVzcGFjZTogKiwgYm91bmRzOiAqfX1cblx0ICovXG5cdGdldFZpZXcoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdHJldHVybiBfLmFzc2lnbih7XG5cdFx0XHRpZDogdGhpcy5pZCxcblx0XHRcdGtleToga2V5LFxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmNvbXB1dGVkQ2xhc3NOYW1lLFxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZSxcblx0XHRcdHNjYWxlOiB0aGlzLnZpZXdQcm9wKGtleSwgJ3NjYWxlJykgfHwgMS4wXG5cdFx0fSwgc2hhcGUpO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IHNoYXBlQ29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdGxldCBzaGFwZUNsYXNzID0gc2hhcGVDb25maWcgPyBTaGFwZS5nZXRTaGFwZShzaGFwZUNvbmZpZy5uYW1lKSA6IFNoYXBlLmdldFNoYXBlKCdSZWN0YW5nbGUnKTtcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XG5cdFx0bGV0IHkgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ5XCIpO1xuXHRcdGxldCB3aWR0aCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcIndpZHRoXCIpO1xuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XG5cdFx0c2hhcGUgPSBuZXcgc2hhcGVDbGFzcyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzaGFwZUNvbmZpZyk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBDYWNoZS5nZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB2aWV3LmlkKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcblx0XHRcdGxldCByb2xlID0gdGhpcy5wcm9wKCdyb2xlJyk7XG5cdFx0XHR0ZW1wbGF0ZSA9IHZpZXcuZ2V0VGVtcGxhdGUoJyQnICsgcm9sZSwgbnVsbCwgdGhpcyk7XG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB0ZW1wbGF0ZSwgdmlldy5pZCk7XG5cdFx0fVxuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzLmdldFZpZXcodmlldy5pZCkpO1xuXHR9XG5cblx0cmVuZGVyU2hhcGUodmlldykge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUodmlldy5pZCk7XG5cdFx0aWYgKHNoYXBlKVxuXHRcdFx0cmV0dXJuIHNoYXBlLnJlbmRlcih2aWV3KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZW5kZXJMYWJlbCh2aWV3KSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5nZXRDdXJyZW50Um9vdCgpKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkpIHJldHVybiAnJztcblx0XHRyZXR1cm4gXCJyb290LlwiICsgdGhpcy5wcm9wKFwicm9sZVwiKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMuZGVjb3JhdG9ycztcblx0XHRkZWxldGUgdGhpcy5wcm9wcztcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXHR9XG59XG5cbi8qXG5cbkNlbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ4XCIsIE1hdGgucm91bmQoeCkpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24odywgaCkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwid2lkdGhcIiwgdyk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZWRpdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5TZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJkcmFnZ2FibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwicmVzaXphYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0VHlwZUZyb21TdHJpbmcgPSBmdW5jdGlvbih0eXBlU3RyKSB7XG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcblx0dGhpcy5tb2RpZmllcnMgPSBudWxsO1xuXHR2YXIgbW9kaWZpZXJTZXR0aW5ncyA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RpZmllclNldHRpbmdzXCIpO1xuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xuXHRcdF8uZWFjaChtb2RpZmllcnMsIGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0Y29uZmlnLnR5cGUgPSB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShjb25maWcuY2xhc3NOYW1lKTtcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcblx0XHRcdGlmICghY29uZmlnLnR5cGUgfHwgIWNvbmZpZy5zZXR0aW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3Ncblx0XHRfLmVhY2gobW9kaWZpZXJTZXR0aW5ncywgZnVuY3Rpb24oc2V0dGluZywgbmFtZSkge1xuXHRcdFx0aWYgKHNldHRpbmcuc2hvd0Fsd2F5cyAmJiAoIXRoaXMubW9kaWZpZXJzIHx8ICF0aGlzLm1vZGlmaWVyc1tuYW1lXSkpIHtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XG5cdFx0XHRcdGlmICghY29uZmlnLnR5cGUpIHJldHVybjtcblx0XHRcdFx0dGhpcy5hZGRNb2RpZmllcihuYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdH1cbn07XG5cbkNlbGwucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSwgbW9kaWZpZXIpIHtcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcblx0XHR0aGlzLm1vZGlmaWVycyA9IHt9O1xuXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSB0cnVlO1xuXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxuXHRpZiAobW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUHJvY2Vzc01vZGlmaWVyXCIgfHwgbW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUmVzdWx0c1wiKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSBmYWxzZTtcblxuXHR0aGlzLm1vZGlmaWVyc1tuYW1lXSA9IG1vZGlmaWVyO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXJzID0gZnVuY3Rpb24oKSB7XG5cdGlmIChfLmlzVW5kZWZpbmVkKHRoaXMubW9kaWZpZXJzKSlcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xuXHRyZXR1cm4gdGhpcy5tb2RpZmllcnM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0dmFyIG1vZGlmaWVycyA9IHRoaXMuZ2V0TW9kaWZpZXJzKCk7XG5cdGlmIChtb2RpZmllcnMpXG5cdFx0cmV0dXJuIG1vZGlmaWVyc1tuYW1lXTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvQ2VsbC5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvNy8yMDE2LlxuICovXG5cbmxldCBjYWNoZXMgPSB7fTtcblxubGV0IENhY2hlID0ge1xuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG5cdFx0dGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV0gPSB2YWx1ZTtcblx0fSxcblxuXHRjb250YWluczogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4ga2V5IGluIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcblx0XHRpZiAoIW5hbWVzcGFjZSlcblx0XHRcdGNhY2hlcyA9IHt9O1xuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0fSxcblxuXHRnZXRDYWNoZTogZnVuY3Rpb24obmFtZXNwYWNlID0gJ2RlZmF1bHQnKSB7XG5cdFx0aWYgKCFjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdFx0cmV0dXJuIGNhY2hlc1tuYW1lc3BhY2VdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG5jb25zdCBGT05UX0JPTEQgPSAxLCBGT05UX0lUQUxJQyA9IDIsIEZPTlRfVU5ERVJMSU5FID0gNCwgRk9OVF9TSEFET1cgPSA4O1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0Zm9udFNpemU6IDExLFxuXHRmb250RmFtaWx5OiBcIkFyaWFsXCIsXG5cdGZvbnRTdHlsZTogMCxcblx0cGFkZGluZzogMCxcblx0bGluZVBhZGRpbmc6IDAsXG5cdGFsaWduOiBcImxlZnRcIixcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0cm90YXRpb246IG51bGwsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsLCBtZWFzdXJlRGl2LCBiYXNlbGluZURpdjtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XG5cdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZWFzdXJlRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L2Rpdj5cXFxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHRtZWFzdXJlRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwibWVhc3VyZURpdlwiKTtcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XG5cdFx0fVxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRTaXplID0gbWVhc3VyZURpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0bWVhc3VyZURpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xuXHRcdGxldCBiYXNlbGluZUhlaWdodCA9IHN0cnV0Lm9mZnNldFRvcCArIHN0cnV0Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldFRvcDtcblxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0bGV0IGFyciA9IFtdO1xuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemUuaGVpZ2h0O1xuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcblxuXHRcdGlmICghbWF4V2lkdGggfHwgIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikge1xuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcblx0XHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodDtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0dmFyIHdpZHRoID0gMDtcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXG5cdFx0dmFyIGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcblxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHR2YXIgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvXFxzLyk7XG5cdFx0XHR2YXIgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xuXHRcdFx0XHRcdFx0YnVmLmFwcGVuZCh3b3JkKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSAwO1xuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxuXHRcdFx0XHRcdG5ld0xpbmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gbmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoO1xuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxuXHRcdFx0XHRidWYuYXBwZW5kKGxpbmUpO1xuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xuXHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodCAqIGFyci5sZW5ndGg7XG5cdFx0cmV0dXJuIGFycjtcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XG5cblx0LyoqXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cblx0ICogQHBhcmFtIGxhYmVsIFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gbGFiZWxDb25maWcgVGhlIGNvbmZpZ3VyYXRpb24gb24gaG93IHRvIGRpc3BsYXkgbGFiZWwuIEl0IHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG5cdCAqIHtcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxuXHQgKiAgICAgIGFsaWduOiBjYW4gYmUgZWl0aGVyIFwibGVmdFwiLCBcImNlbnRlclwiIG9yIFwicmlnaHRcIixcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXG5cdCAqICAgICAgaGVpZ2h0LFxuXHQgKiAgICAgIGdlb21ldHJ5XG5cdCAqIH1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldExhYmVsQm94KGxhYmVsLCBsYWJlbENvbmZpZyA9IHt9LCBjb250ZXh0KSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XG5cdFx0bGV0IGZvbnRGYW1pbHkgPSBsYWJlbENvbmZpZy5mb250RmFtaWx5O1xuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XG5cdFx0bGV0IHBhZGRpbmcgPSBsYWJlbENvbmZpZy5wYWRkaW5nO1xuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xuXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xuXHRcdFx0dyA9IHcgPD0gNSA/IGNvbnRleHQud2lkdGggKiB3IDogdztcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xuXHRcdH1cblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3M7XG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxuXHRcdGxldCBwaXZvdCA9IGFsaWduID09ICdjZW50ZXInID8gWzAsIDBdIDogKGFsaWduID09ICdsZWZ0JyA/IFstd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdIDogW3dyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSk7XG5cblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXG5cdFx0Z2VvbWV0cnkud2lkdGggPSBNYXRoLm1heCh3ICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LndpZHRoKTtcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XG5cblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcblx0XHRlbHNlXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcblxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGR4LCBkeTogLWdlb21ldHJ5LmhlaWdodC8yICsgcGFkZGluZyArIHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0IC0gd3JhcHBlZExhYmVsLmJhc2VsaW5lLCBhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0ICsgbGluZVBhZGRpbmcsXG5cdFx0XHRwaXZvdCwgYm91bmRzLCBtYXhCb3VuZHNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gcmVuZGVyKHZpZXcsIGJveCkge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdH1cblxuXHRsZXQgZWRpdG9yID0ge1xuXHRcdHZpc2libGU6IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5pbnB1dCAmJiB0aGlzLmlucHV0LnN0eWxlLnZpc2liaWxpdHkgPT0gJ3Zpc2libGUnOyB9LFxuXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKGtleSwgY29udGFpbmVyLCBib3gsIHJlZkVsLCB0ZXh0RWwpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkge1xuXHRcdFx0XHR0aGlzLmlucHV0ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnLCB7aWQ6XCJpbmxpbmVFZGl0b3JcIiwgdW5zZWxlY3RhYmxlOlwib2ZmXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMHB4XCIsIG1hcmdpbjpcIjBweFwiLCBib3JkZXI6XCJ0cmFuc3BhcmVudFwifSk7XG5cdFx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy52aXNpYmxlKCkgJiYgdGhpcy5rZXkgIT0ga2V5KSB7XG5cdFx0XHRcdC8vIG5lZWQgdG8gY2xvc2UgdGhlIGV4aXN0aW5nIGVkaXRvciBmaXJzdFxuXHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdH1cblx0XHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5ib3ggPSBib3g7XG5cdFx0XHR0aGlzLnJlZkVsID0gcmVmRWw7XG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcblxuXHRcdFx0bGV0IGxhYmVsQ29uZmlnID0gYm94LmNvbmZpZztcblx0XHRcdC8vbGV0IHBvcyA9IFV0aWxzLnVuc2NhbGUoZ3JhcGgsIFtjZWxsLmdldEJvdW5kcygpLmdldENlbnRlclgoKSArIGJvdW5kcy54LCBjZWxsLmdldEJvdW5kcygpLmdldENlbnRlclkoKSArIGJvdW5kcy55ICsgNV0pO1xuXHRcdFx0bGV0IHBvcyA9IERvbVV0aWxzLmdldENlbnRlclBvc2l0aW9uKHJlZkVsLCBjb250YWluZXIpO1xuXHRcdFx0cG9zID0gW3Bvc1swXSArIGJveC5tYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgYm94Lm1heEJvdW5kcy50b3BdO1xuXHRcdFx0bGV0IHNjYWxlID0gMS4wO1xuXG5cdFx0XHRpZiAodGV4dEVsKVxuXHRcdFx0XHR0ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcblx0XHRcdFx0dmlzaWJpbGl0eTogJ3Zpc2libGUnLFxuXHRcdFx0XHRsZWZ0OiBwb3NbMF0gKyBcInB4XCIsXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxuXHRcdFx0XHR3aWR0aDogKGJveC5tYXhCb3VuZHMud2lkdGggKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IChib3gubWF4Qm91bmRzLmhlaWdodCAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIjogbGFiZWxDb25maWcuZm9udEZhbWlseSxcblx0XHRcdFx0XCJmb250LXNpemVcIjogKGxhYmVsQ29uZmlnLmZvbnRTaXplICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xuXHRcdFx0XHQvKlwiY29sb3JcIjogbGFiZWxDb25maWcuZm9udENvbG9yKi9cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gYm94Ll9sYWJlbDtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0YXJ0JywgW3RoaXMua2V5XSk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKGNhbmNlbCkge1xuXHRcdFx0aWYgKCF0aGlzLnZpc2libGUoKSkgcmV0dXJuO1xuXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXG5cdFx0XHRcdHRoaXMudGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXG5cdFx0XHR0aGlzLmlucHV0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblx0XHRcdGlmICghY2FuY2VsKVxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xuXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0b3AnLCBbdGhpcy5rZXldKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcblx0XHRcdGRlbGV0ZSB0aGlzLmJveDtcblx0XHRcdGRlbGV0ZSB0aGlzLnJlZkVsO1xuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdEZPTlRfQk9MRCxcblx0XHRGT05UX0lUQUxJQyxcblx0XHRGT05UX1VOREVSTElORSxcblx0XHRGT05UX1NIQURPVyxcblx0XHRnZXRTdHJpbmdTaXplLFxuXHRcdHdyYXAsXG5cdFx0Z2V0TGFiZWxCb3gsXG5cdFx0Z2V0TGFiZWxCb3hGb3JMaW5rLFxuXHRcdHJlbmRlcixcblx0XHRlZGl0b3Jcblx0fTtcbn0pKCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L0xhYmVsLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi4vZ2VvbWV0cnkvTGlua1wiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcblxuY2xhc3MgRWRnZSBleHRlbmRzIENlbGwge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge30sIHNvdXJjZSwgdGFyZ2V0KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ0UnKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuc291cmNlID0gdGhpcy50YXJnZXQgPSBudWxsO1xuXHRcdHRoaXMuc2V0U291cmNlKHNvdXJjZSwgY29uZmlnLnNvdXJjZVBvcyk7XG5cdFx0dGhpcy5zZXRUYXJnZXQodGFyZ2V0LCBjb25maWcudGFyZ2V0UG9zKTtcblx0fVxuXG5cdHNldFNvdXJjZShub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3NvdXJjZScpO1xuXHR9XG5cblx0c2V0VGFyZ2V0KG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAndGFyZ2V0Jyk7XG5cdH1cblxuXHQvKipcblx0ICogSW50ZXJuYWwgbWV0aG9kcyB0byBzZXQgZWl0aGVyIHRoZSBzb3VyY2Ugb3IgdGFyZ2V0XG5cdCAqL1xuXHQgc2V0VGVybWluYWwobm9kZSwgcG9zLCBkaXIpIHtcblx0XHR2YXIgZW5kID0gZGlyID09ICdzb3VyY2UnID8gdGhpcy5zb3VyY2UgOiB0aGlzLnRhcmdldDtcblx0XHRpZiAoZW5kID09IG5vZGUpIHtcblx0XHRcdC8vIHNpbXBseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBlZGdlLlxuXHRcdFx0aWYgKG5vZGUpXG5cdFx0XHRcdG5vZGUuc2V0RWRnZUF0KHRoaXMsIHBvcyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChlbmQpIHtcblx0XHRcdFx0Ly8gZmlyc3QgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZW5kXG5cdFx0XHRcdGVuZC5yZW1vdmVFZGdlKHRoaXMpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAobm9kZSkge1xuXHRcdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHRcdG5vZGUuYWRkT3V0RWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0bm9kZS5hZGRJbkVkZ2UodGhpcywgcG9zKTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdHRoaXMuc291cmNlID0gbm9kZTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBub2RlO1xuXHRcdFx0Ly90aGlzLmNsZWFyUG9pbnRzKCk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKCdsYWJlbCcpO1xuXHRcdGlmIChsYWJlbClcblx0XHRcdHJldHVybiBMYWJlbC5nZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgdGhpcy5nZXRTaGFwZShrZXkpKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBwYWlyIG9mIHBvaW50cyBhcyByZWZlcmVuY2UgdG8gdGhlIGNhbGN1bGF0aW9uIG9mIHN0YXJ0IGFuZCBlbmQgcG9pbnRzLlxuXHQgKi9cblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRpZiAodGhpcy5zb3VyY2UpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdzdGFydCcpKTtcblxuXHRcdGlmICh0aGlzLnRhcmdldClcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ2VuZCcpKTtcblxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgcmVmUHRzID0gdGhpcy5nZXRSZWZlcmVuY2VQb2ludHMoa2V5KTtcblx0XHRsZXQgdGVybWluYWxzID0gW107XG5cblx0XHRsZXQgZ2V0Qm91bmQgPSBmdW5jdGlvbihwdCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUocHQueCwgcHQueSwgMywgMyk7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZSkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzBdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzBdKSwgcmVmUHRzWzFdLCB0cnVlKX0pO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnRhcmdldC5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCd0YXJnZXRQb3J0JyksIHJlZlB0c1swXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMV0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMV0pLCByZWZQdHNbMF0sIHRydWUpfSk7XG5cdFx0cmV0dXJuIHRlcm1pbmFscztcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0c2hhcGUgPSBMaW5rLmdldExpbmsodGhpcy5nZXRUZXJtaW5hbFZpc3VhbChrZXksIGNvbmZpZy5vcnRob2dvbmFsKSwgY29uZmlnLCB0aGlzLnByb3AoJ3N0YXJ0TWFya2VyJyksIHRoaXMucHJvcCgnZW5kTWFya2VyJykpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWRnZTp7JyArICghdGhpcy5zb3VyY2UgPyAnbnVsbCcgOiB0aGlzLnNvdXJjZS5pZCkgKyAnLS0nICsgKCF0aGlzLnRhcmdldCA/ICdudWxsJyA6IHRoaXMudGFyZ2V0LmlkKSArICd9Jztcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KG51bGwpO1xuXHR9XG59XG5FZGdlLm5hbWVzcGFjZSA9IFwiRWRnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcblxuLypcblxuRWRnZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiYWxsb3dEYW5nbGluZ0VkZ2VzXCIpKSB7XG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcblx0fSBlbHNlXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlICYmIHRoaXMudGFyZ2V0ICYmIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKSAmJiB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSAmJiB0aGlzLnRhcmdldC5pc1Zpc2libGUoKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5sZXQgTWFya2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gYXJyb3coc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWFuZ2xlKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3ZhbChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciByID0gc2l6ZSAvIDI7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLXIsIC1yLCBzaXplLCBzaXplKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFswLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+Jztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbW9uZChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGdldE1hcmtlcihjb25maWcsIHNvdXJjZSkge1xuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XG5cdFx0bWFya2VyLmlkID0gY29uZmlnLmlkO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xuXHRyZWdpc3RyeVsnb3ZhbCddID0gb3ZhbDtcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XG5cblx0cmV0dXJuIHtcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxuY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxuXHRcdFx0XHRjb25maWcub3JpZW50YXRpb24gPSBMYXlvdXQuSE9SSVpPTlRBTDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcblx0XHR9XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHR9XG5cblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkxheW91dC5WRVJUSUNBTCA9IDA7XG5MYXlvdXQuSE9SSVpPTlRBTCA9IDE7XG5cbkxheW91dC5ERUZBVUxUUyA9IHtcblx0b3JpZW50YXRpb246IExheW91dC5WRVJUSUNBTFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6dGhpcy5pZCwgdGFiaW5kZXg6MH0sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJveCk7XG5cdFx0aWYgKGNvbmZpZy5sYXlvdXQpIHtcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcblx0XHRcdHRoaXMubGF5b3V0ID0gbmV3IGxheW91dENsYXNzKGNvbmZpZy5sYXlvdXQuY29uZmlnKTtcblx0XHRcdGRlbGV0ZSBjb25maWcubGF5b3V0O1xuXHRcdH1cblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcblx0XHR0aGlzLl9ncmFwaCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z3JhcGgoZ3JhcGgpIHtcblx0XHRpZiAoZ3JhcGgpIHtcblx0XHRcdHRoaXMuX2dyYXBoID0gZ3JhcGg7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMsIHZpZXdwb3J0KTtcblx0XHR2YXIgdyA9IHRoaXMuYm94Lm9mZnNldFdpZHRoO1xuXHRcdHZhciBzY2FsZSA9IHcgLyB2aWV3cG9ydC53aWR0aDtcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcblx0fVxuXG5cdHRyYW5zbGF0ZSh0KSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIFswLCAwXTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdClcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcblx0XHRcdHJldHVybiBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7XG5cdH1cblxuXHRzY2FsZShrKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIDEuMDtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdCkgcmV0dXJuIDEuMDtcblxuXHRcdFx0cmV0dXJuIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJvdXRcIjpcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUoKSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4LCB5LCBzY2FsZSkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybjtcblx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0aWYgKCFyb290KSByZXR1cm47XG5cblx0XHQvKmlmICghXy5pc051bGwoeCkgJiYgIV8uaXNOdWxsKHkpKVxuXHRcdFx0cm9vdC5tb3ZlKHgsIHkpO1xuXHRcdGlmIChzY2FsZSkge1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1heCh0aGlzLmdldFByb3BlcnR5KFwibWluWm9vbVwiKSwgTWF0aC5taW4odGhpcy5nZXRQcm9wZXJ0eShcIm1heFpvb21cIiksIHNjYWxlKSk7XG5cdFx0XHRyb290LnNldFByb3BlcnR5KCdzY2FsZScsIHNjYWxlKTtcblx0XHRcdC8vIHN5bmMgdGhlIHNjYWxlIGJldHdlZW4gdGhlIHpvb20gYmVoYXZpb3IgYW5kIHRoZSBncmFwaFxuXHRcdFx0dmFyIHpvb20gPSB0aGlzLmV2ZW50RGlzcGF0Y2hlci56b29tO1xuXHRcdFx0aWYgKHpvb20uc2NhbGUoKSAhPSBzY2FsZSlcblx0XHRcdFx0em9vbS5zY2FsZShzY2FsZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKEdyYXBoLkVWRU5UX1RZUEVTLlJFRlJFU0gpOyovXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpLCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0LnN1YnN0cmluZygyLCBwYXJ0Lmxlbmd0aCAtMSkudHJpbSgpO1xuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dCA9IF8udGVtcGxhdGUodCwge2ludGVycG9sYXRlOiAvI3soW1xcc1xcU10rPyl9L2d9KShvYmopO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4xLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9zdmc+Jyk7XG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaCgpLm1hcmtlcnM7XG5cdFx0aWYgKG1hcmtlcnMubGVuZ3RoID4gMClcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XG5cdFx0YnVmLmFwcGVuZCgnPC9kZWZzPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xuXHRcdGZvciAobGV0IG1hcmtlciBvZiBtYXJrZXJzKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxuXHRcdFx0XHRjb250cm9sUHRzWzIqaV0gPSBbbmV4dCwgbmV4dF07XG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0ZDIgPSBuZXh0LmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHByZXYpLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0cHJldiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcblx0XHR9XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyBzZXRDb250ZW50KGVsLCBjb250ZW50KSB7XG5cdFx0aWYgKERvbVV0aWxzLmlzSUUpIHtcblx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0d2hpbGUgKGNoaWxkID0gZWwubGFzdENoaWxkKVxuXHRcdFx0XHRlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRTVkdSZW5kZXJlci5hcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcblx0XHR9IGVsc2Vcblx0XHRcdGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG59XG5TVkdSZW5kZXJlci5URU1QTEFURVMgPSB7XG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCJncmFwaFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pc2NhbGUoJHtzY2FsZX0pXCI+I3tjaGlsZHJlbn08L2c+Jyxcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XG5cdH0sXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xuXHRcdGZvciAobGV0IHB0IG9mIHNoYXBlLnBvaW50cylcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XG5cdFx0YnVmLnJlbW92ZUxhc3QoKTtcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9LFxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+Jztcblx0fSxcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcblx0XHRyZXR1cm4gYFxuPG1hcmtlciBpZD1cIiR7bWFya2VyLmlkfVwiIG1hcmtlcldpZHRoPVwiJHttYXJrZXIuc2l6ZX1cIiBtYXJrZXJIZWlnaHQ9XCIke21hcmtlci5zaXplfVwiIHJlZng9XCIke21hcmtlci5yZWZbMF19XCIgXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cImZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIHN0eWxlPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0PC9nPlxuPCV9JT5cbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=