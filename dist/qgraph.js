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
	
	var _Element = __webpack_require__(16);
	
	var _Element2 = _interopRequireDefault(_Element);
	
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
		Element: _Element2.default,
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
			return [x + geometry.width * geometry.anchorX + geometry.offsetX, y + geometry.height * geometry.anchorY + geometry.offsetY];
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
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var defaultConfig = {
		linkStyle: "direct",
		showGauge: false,
		orthogonal: false
	};
	
	var linkStyles = {};
	
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
			key: "getLength",
	
	
			/**
	   *
	   * Return the total length of this connection, in pixels.
	   */
			value: function getLength() {
				if (!_lodash2.default.isUndefined(this.length)) return this.length;
	
				var points = this.points;
				var i,
				    l = 0;
				for (i = 0; i < points.length - 1; i++) {
					l += points[i].distance(points[i + 1]);
				}return this.length = l;
			}
	
			/**
	   * Calculate the position where to put modifiers or label..
	   *
	   * @param geometry: defines how far along the edge should the point be placed.
	   * @return *[] the relative position.
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
		}], [{
			key: "getLink",
			value: function getLink(terminalVisual) {
				var shapeConfig = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
				var startMarker = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
				var endMarker = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
				shapeConfig = _lodash2.default.defaultsDeep(shapeConfig, defaultConfig);
				var linkClass = linkStyles[shapeConfig.linkStyle];
				if (linkClass) return new linkClass(terminalVisual, shapeConfig, startMarker, endMarker);
				console.log('link style not supported: ' + shapeConfig.linkStyle);
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
				pts[1] = [new _Point2.default((s.x + e.x) / 2, s.y), new _Point2.default((s.x + e.x) / 2, e.y)];
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
				var horizontal = startNormal.x != 0;
				pos[0] = horizontal ? start.y : start.x;
	
				horizontal = !horizontal;
				var i;
				if (startNormal.dotProduct(endNormal) == 0) {
					if (startNormal.dotProduct(direction) >= 0 && endNormal.dotProduct(direction) <= 0) {
						// 0
					} else {
							// 2
							if (startNormal.dotProduct(direction) < 0) i = startNormal.similarity(start.getTranslated(startNormal.getScaled(buffer)));else i = horizontal ? average.y : average.x;
	
							pos.push(i);
							horizontal = !horizontal;
	
							if (endNormal.dotProduct(direction) > 0) i = endNormal.similarity(end.getTranslated(endNormal.getScaled(buffer)));else i = horizontal ? average.y : average.x;
	
							pos.push(i);
							horizontal = !horizontal;
						}
				} else {
					if (startNormal.dotProduct(endNormal) > 0) {
						//1
						if (startNormal.dotProduct(direction) >= 0) i = startNormal.similarity(start.getTranslated(startNormal.getScaled(buffer)));else i = endNormal.similarity(end.getTranslated(endNormal.getScaled(buffer)));
						pos.push(i);
						horizontal = !horizontal;
					} else {
						//3 or 1
						if (startNormal.dotProduct(direction) < 0) {
							i = startNormal.similarity(start.getTranslated(startNormal.getScaled(buffer)));
							pos.push(i);
							horizontal = !horizontal;
						}
	
						i = horizontal ? average.y : average.x;
						pos.push(i);
						horizontal = !horizontal;
	
						if (startNormal.dotProduct(direction) < 0) {
							i = endNormal.similarity(end.getTranslated(endNormal.getScaled(buffer)));
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
	
	linkStyles['direct'] = DirectLink;
	linkStyles['bezier'] = BezierLink;
	linkStyles['entityRelations'] = EntityRelations;
	linkStyles['manhattan'] = Manhattan;
	
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
	
	var _Element2 = __webpack_require__(16);
	
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
	
		function getLabelBoxForLink(label, link, labelConfig) {
			labelConfig = _lodash2.default.defaultsDeep(labelConfig, defaultConfig);
			if (!label || label == "") return null;
	
			var fontSize = labelConfig.fontSize;
			var fontFamily = labelConfig.fontFamily;
			var fontStyle = labelConfig.fontStyle;
			var bold = (fontStyle & FONT_BOLD) == FONT_BOLD;
	
			var wrappedLabel = this.wrap(label, labelConfig.width, fontSize, fontFamily, bold);
			var pos = link.getRelativePosition({ x: labelConfig.labelLocation / 2, offsetX: labelConfig.labelOffsetX || 0, offsetY: labelConfig.labelOffsetY || 0 });
	
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
	
	var _Element2 = __webpack_require__(16);
	
	var _Element3 = _interopRequireDefault(_Element2);
	
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
	
				var buf = new _StringBuffer2.default('M'),
				    point = void 0;
				for (var i = 0; i < points.length; i++) {
					point = points[i];
					if (i == 0) buf.append(point);else {
						if (controlPts && controlPts[i]) {
							buf.append(' C ');
							for (var j = 0; j < controlPts[i].length; j++) {
								buf.append(controlPts[i][j]).append(' ');
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
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MmFhY2JmYjM5ZmM1MGJhNjI3OCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUJBQU0sUUFBTixDQUFlLFdBQWY7QUFDQSxpQkFBTSxRQUFOLENBQWUsU0FBZjs7bUJBRWU7QUFDZCx3QkFEYztBQUVkLHdCQUZjO0FBR2Qsd0JBSGM7QUFJZCw4QkFKYztBQUtkLHNDQUxjO0FBTWQsd0JBTmM7QUFPZCxzQkFQYztBQVFkLHdCQVJjO0FBU2QsZ0NBVGM7QUFVZCw0QkFWYztBQVdkLHNCQVhjO0FBWWQsNENBWmM7QUFhZCx3QkFiYztBQWNkLDBCQWRjO0FBZWQsd0JBZmM7QUFnQmQsNEJBaEJjO0FBaUJkLHNCQWpCYztBQWtCZCxzQkFsQmM7QUFtQmQsMEJBbkJjO0FBb0JkLGtDQXBCYztBQXFCZCw4QkFyQmM7QUFzQmQsb0NBdEJjOzs7Ozs7O0FDMUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUosRUFBUCxDQU53QjtHQUFoQjtBQVFULFNBQU8sZUFBUyxNQUFULEVBQWlCO0FBQ3ZCLFVBQU8sd0lBQXdJLE9BQU8sS0FBUCxHQUFlLEtBQXZKLENBRGdCO0dBQWpCO0FBR1AsVUFBUSxnQkFBUyxNQUFULEVBQWlCO0FBQ3hCLFVBQU8scUJBQ0ssT0FBTyxFQUFQLHlCQUEyQixPQUFPLElBQVAsMEJBQThCLE9BQU8sSUFBUCxrQkFBc0IsT0FBTyxHQUFQLENBQVcsQ0FBWCxxQkFDckYsT0FBTyxHQUFQLENBQVcsQ0FBWCxzQ0FBeUMsT0FBTyxPQUFQLENBQWUsQ0FBZixTQUFvQixPQUFPLE9BQVAsQ0FBZSxDQUFmLFNBQW9CLE9BQU8sT0FBUCxDQUFlLEtBQWYsU0FBd0IsT0FBTyxPQUFQLENBQWUsTUFBZiw0Q0FDbEYsT0FBTyxJQUFQLHFCQUE2QixPQUFPLElBQVAsT0FBN0IsR0FBOEMsRUFBOUMsMkJBSHRCLENBSVAsSUFKTyxFQUFQLENBRHdCO0dBQWpCO0FBT1IsUUFBTSxjQUFTLElBQVQsRUFBZTtBQUNwQixVQUFPLDRDQUMwQix3QkFBaUIsNklBRTdCLHFFQUNQLDhFQUNBLG9CQUFhLDZEQUxwQixDQU1HLElBTkgsRUFBUCxDQURvQjtHQUFmO0FBU04sU0FBTyxpQkFBRSxRQUFGLENBQVcsaWlDQWtCakIsSUFsQmlCLEVBQVgsRUFrQkUsRUFBQyxVQUFVLE1BQVYsRUFsQkgsQ0FBUDtFQTFDRDs7bUJBK0RlLFkiLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDkyYWFjYmZiMzlmYzUwYmE2Mjc4XG4gKiovIiwiaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XG5pbXBvcnQgRWxlbWVudCBmcm9tIFwiLi9ncmFwaC9FbGVtZW50XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XG5cblNoYXBlLmFkZFNoYXBlKFwiUmVjdGFuZ2xlXCIsIFJlY3RhbmdsZSk7XG5TaGFwZS5hZGRTaGFwZShcIkVsbGlwc2VcIiwgRWxsaXBzZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcblx0RXZlbnRzLFxuXHRDYWNoZSxcblx0VXRpbHMsXG5cdERvbVV0aWxzLFxuXHRTdHJpbmdCdWZmZXIsXG5cdFBvaW50LFxuXHRMaW5lLFxuXHRTaGFwZSxcblx0UmVjdGFuZ2xlLFxuXHRFbGxpcHNlLFxuXHRMaW5rLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdExhYmVsLFxuXHRNYXJrZXIsXG5cdEdyYXBoLFxuXHRFbGVtZW50LFxuXHROb2RlLFxuXHRFZGdlLFxuXHRMYXlvdXQsXG5cdEZsb3dMYXlvdXQsXG5cdFJlbmRlcmVyLFxuXHRTVkdSZW5kZXJlclxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlYW4vYmVhbi5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG4vLyB1dGlsIHZhcmlhYmxlc1xubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIG5hbWUsIHR5cGUpIHtcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSBuZXcgTWFwKCk7XG5cdFx0aWYgKCFuYW1lKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5nZXQobmFtZSk7XG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xuXHR9LFxuXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSwgcHJvcHMsIGRlZmF1bHRUeXBlKSB7XG5cdFx0bGV0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdHlwZSBleGlzdHNcblx0XHRsZXQgdHlwZSA9IHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUpO1xuXHRcdGlmICghdHlwZSkge1xuXHRcdFx0bGV0IGV4dGVuZCA9IHByb3BzLmV4dGVuZHMgPyB0aGlzLnR5cGUobmFtZXNwYWNlLCBwcm9wcy5leHRlbmRzKSA6IG51bGw7XG5cdFx0XHRpZiAoIWV4dGVuZCAmJiBkZWZhdWx0VHlwZSlcblx0XHRcdFx0ZXh0ZW5kID0gZGVmYXVsdFR5cGU7XG5cdFx0XHRpZiAoZXh0ZW5kKVxuXHRcdFx0XHR0eXBlID0gY2xhc3MgZXh0ZW5kcyBleHRlbmQge307XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHlwZSA9IGNsYXNzIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdFx0XHRcdF8uYXNzaWduKHRoaXMsIGNvbmZpZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHByb3BzLm5hbWU7XG5cdFx0XHRkZWxldGUgcHJvcHMuZXh0ZW5kcztcblx0XHRcdF8uYXNzaWduKHR5cGUucHJvdG90eXBlLCBwcm9wcyk7XG5cdFx0XHR0eXBlLnR5cGVOYW1lID0gbmFtZTtcblx0XHRcdHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUsIHR5cGUpO1xuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmNyZWF0ZVR5cGUgLSAnICsgbmFtZXNwYWNlICsgJy4nICsgbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlO1xuXHR9LFxuXG5cdGJ1aWxkVHlwZXM6IGZ1bmN0aW9uKHR5cGVzLCBuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKSB7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcblxuXHRcdGlmICghdHlwZXMgJiYgZGVmYXVsdFR5cGUpIHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcblx0XHRcdGxldCB0eXBlID0gXy5yZW1vdmUodHlwZXMsIHtuYW1lOiBkZWZhdWx0VHlwZS5uYW1lfSk7XG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBfLmFzc2lnbih7fSwgZGVmYXVsdFR5cGUsIHR5cGUpKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fVxuXG5cdFx0Xy5mb3JFYWNoKHR5cGVzLCAodHlwZSkgPT4ge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHR9LFxuXG5cdC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxuXHQvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxuXHRleHRlbmQ6IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG5cdFx0Ly8gQWRkIHN0YXRpYyBwcm9wZXJ0aWVzIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgaWYgc3VwcGxpZWQuXG5cdFx0Xy5leHRlbmQoY2hpbGQsIHBhcmVudCwgc3RhdGljUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBwcm90b3R5cGUgY2hhaW4gdG8gaW5oZXJpdCBmcm9tIGBwYXJlbnRgLCB3aXRob3V0IGNhbGxpbmdcblx0XHQvLyBgcGFyZW50YCdzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuXHRcdHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbigpeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH07XG5cdFx0U3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuXHRcdC8vIEFkZCBwcm90b3R5cGUgcHJvcGVydGllcyAoaW5zdGFuY2UgcHJvcGVydGllcykgdG8gdGhlIHN1YmNsYXNzLFxuXHRcdC8vIGlmIHN1cHBsaWVkLlxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcblxuXHRcdHJldHVybiBjaGlsZDtcblx0fSxcblxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbihvYmosIGNvbmZpZykge1xuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xuXHRcdHdoaWxlIChjKSB7XG5cdFx0XHRpZiAoYy5zdXBlcikge1xuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0c3BsaWNlLmFwcGx5KGNBcnIsIFswLCAwLCBjXSk7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0YyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjID0gY0FycltpXTtcblx0XHRcdGlmIChjLkRFRkFVTFRTKVxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XG5cdFx0fVxuXHRcdG9iai5wcm9wcyA9IF8uYXNzaWduKHByb3BzLCBjb25maWcpO1xuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbihuYW1lLCB2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSlcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdFx0fTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyB0aGUgSlMgY2xhc3MgY29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBqc0NsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q2xhc3Ncblx0ICovXG5cdGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHRpZiAoIWpzQ2xhc3MpXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xuXG5cdFx0aWYgKF8uaXNTdHJpbmcoanNDbGFzcykpXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcblx0XHRyZXR1cm4ganNDbGFzcztcblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24obW9kdWxlTmFtZSkge1xuXHRcdGlmIChtb2R1bGVOYW1lKSB7XG5cdFx0XHRfZGVidWdnaW5nLnB1c2gobW9kdWxlTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9kZWJ1Z0FsbCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cdGxvZzogZnVuY3Rpb24obmFtZSwgbWVzc2FnZSkge1xuXHRcdGlmICghd2luZG93LmNvbnNvbGUpIHsgcmV0dXJuOyB9XG5cdFx0dmFyIGRlYnVnID0gX2RlYnVnQWxsO1xuXHRcdGlmICghX2RlYnVnQWxsKSB7XG5cdFx0XHRkZWJ1ZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGk8X2RlYnVnZ2luZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoX2RlYnVnZ2luZ1tpXT09bmFtZSkgZGVidWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWRlYnVnKSB7IHJldHVybjsgfVxuXHRcdHdoaWxlIChuYW1lLmxlbmd0aDwxMCkgeyBuYW1lPW5hbWUrJyAnOyB9XG5cdFx0bmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIDEwKStcIiAtIFwiO1xuXHRcdGNvbnNvbGUuaW5mbyhuYW1lLCBtZXNzYWdlKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBzdWIgc2hhcGVzIHdpdGhpbiBhIHBhcmVudCBzaGFyZS5cblx0ICogQHBhcmFtIGJvdW5kc1xuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIGdlb21ldHJ5IGluZm9ybWF0aW9uLCB0aGUgZm9ybWF0IG9mIEdlb21ldHJ5IGlzOlxuXHQgKiB7XG5cdCAqICAgICAgeDogXCJ4IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LCBpZiBsZXNzIHRoYW4gMSwgd2lsbCBiZSB0cmVhdGVkIGFzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBwYXJlbnQgd2lkdGguXCIsXG5cdCAqICAgICAgeTogXCJ5IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LlwiLFxuXHQgKiAgICAgIGFuY2hvclg6IFwieCBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIGFuY2hvclk6IFwieSBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIG9mZnNldFg6IFwidGhlIG9mZnNldCBpbiB0aGUgeCBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgb2Zmc2V0WTogXCJ0aGUgb2Zmc2V0IGluIHRoZSB5IGRpcmVjdGlvbi5cIixcblx0ICogICAgICB3aWR0aDogXCJ0aGUgd2lkdGggb2YgdGhlIGNoaWxkIGVsZW1lbnRcIixcblx0ICogICAgICBoZWlnaHQ6IFwidGhlIGhlaWdodCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiXG5cdCAqIH1cblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb246IGZ1bmN0aW9uKGJvdW5kcywgZ2VvbWV0cnkpIHtcblx0XHRsZXQgeCA9IE1hdGguYWJzKGdlb21ldHJ5LngpIDw9IDEgPyBib3VuZHMud2lkdGggKiBnZW9tZXRyeS54IDogZ2VvbWV0cnkueDtcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XG5cdFx0cmV0dXJuIFt4ICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCxcblx0XHRcdHkgKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB2aWV3IHRoZSBncmFwaCB2aWV3IG9iamVjdFxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHVuc2NhbGU6IGZ1bmN0aW9uKHZpZXcsIG8pIHtcblx0XHR2YXIgc2NhbGUgPSB2aWV3LnNjYWxlKCk7XG5cdFx0dmFyIHQgPSB2aWV3LnRyYW5zbGF0ZSgpO1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdLCBvLndpZHRoKnNjYWxlLCBvLmhlaWdodCpzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLngqc2NhbGUrdFswXSwgby55KnNjYWxlK3RbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSpzY2FsZSt0WzBdLCBvWzFdKnNjYWxlK3RbMV1dO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB2aWV3IHRoZSBncmFwaCB2aWV3IG9iamVjdFxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKChvLngtdFswXSkvc2NhbGUsIChvLnktdFsxXSkvc2NhbGUsIG8ud2lkdGgvc2NhbGUsIG8uaGVpZ2h0L3NjYWxlKTtcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KChvLngtdFswXSkvc2NhbGUsIChvLnktdFsxXSkvc2NhbGUpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbKG9bMF0tdFswXSkvc2NhbGUsIChvWzFdLXRbMV0pL3NjYWxlXTtcblx0fSxcblxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxuXHQgKi9cblx0Z2V0T2JqUHJvcGVydHk6IGZ1bmN0aW9uKG9iaiwgcHJvcCkge1xuXHRcdGlmICghb2JqKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYgKF8uaGFzKG9iaiwgcHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdO1xuXHRcdGlmIChvYmouZ2V0UHJvcGVydHkgJiYgXy5pc0Z1bmN0aW9uKG9iai5nZXRQcm9wZXJ0eSkpXG5cdFx0XHRyZXR1cm4gb2JqLmdldFByb3BlcnR5KHByb3ApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9VdGlscy5qc1xuICoqLyIsImNsYXNzIFBvaW50IHtcblx0Y29uc3RydWN0b3IoeCwgeSkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcHQgdG8gdGhlIG90aGVyIHB0LlxuXHQgKiBAcGFyYW0gYVB0XG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRkaXN0YW5jZShhUHQpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBhUHQueCkgKiAodGhpcy54IC0gYVB0LngpICsgKHRoaXMueSAtIGFQdC55KSAqICh0aGlzLnkgLSBhUHQueSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYW5zbGF0ZSB0aGlzIHBvaW50XG4gXHQgKi9cblx0dHJhbnNsYXRlKHAyKSB7XG5cdFx0dGhpcy54ICs9IHAyLng7XG5cdFx0dGhpcy55ICs9IHAyLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2NhbGUgdGhpcyB2ZWN0b3JcbiBcdCAqL1xuXHRzY2FsZShzY2FsZSkge1xuXHRcdHRoaXMueCAqPSBzY2FsZTtcblx0XHR0aGlzLnkgKj0gc2NhbGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRTY2FsZWQoc2NhbGUpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSk7XG5cdH1cblxuXHRnZXRUcmFuc2xhdGVkKHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwMi54LCB0aGlzLnkgKyBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgZnJvbSB0aGlzIHBvaW50IHRvIHAyLlxuXHQgKiBAcGFyYW0gcDJcblx0ICogQHJldHVybnMge1BvaW50fVxuXHQgKi9cblx0Z2V0RGlyZWN0aW9uKHAyKSB7XG5cdFx0dmFyIGRpc3QgPSB0aGlzLmRpc3RhbmNlKHAyKTtcblx0XHRyZXR1cm4gbmV3IFBvaW50KChwMi54IC0gdGhpcy54KSAvIGRpc3QsIChwMi55IC0gdGhpcy55KSAvIGRpc3QpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJvdGF0ZSB0aGUgcG9pbnQgYWJvdXQgdGhlIG9yaWdpbi4gV2l0aCB0aGUgc3BlY2lmaWVkIGFuZ2xlLlxuXHQgKiBAcGFyYW0gYW5nbGUgdGhlIGFuZ2xlIHRvIHJvdGF0ZVxuXHQgKi9cblx0cm90YXRlKGFuZ2xlKSB7XG5cdFx0dmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdFx0dGhpcy54ID0geCAqIGNvcyAtIHkgKiBzaW47XG5cdFx0dGhpcy55ID0geCAqIHNpbiArIHkgKiBjb3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRSb3RhdGVkKGFuZ2xlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoYW5nbGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QsIHRyZWF0aW5nIHRoaXMgYW5kIHAyIGFzIHZlY3RvcnMuXG5cdCAqL1xuXHRkb3RQcm9kdWN0KHAyKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55O1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZXMgdGhlIHNpbWlsYXJpdHkgb2YgdGhpcyBSYXkgd2l0aCBhbm90aGVyLlxuXHQgKiBTaW1pbGFyaXR5IGlzIGRlZmluZWQgYXMgdGhlIGFic29sdXRlIHZhbHVlIG9mIHRoZSBkb3RQcm9kdWN0KClcblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRzaW1pbGFyaXR5KHAyKSB7XG5cdFx0cmV0dXJuIE1hdGguYWJzKHRoaXMuZG90UHJvZHVjdChwMikpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbWlkIHBvaW50IGJldHdlZW4gdGhpcyBhbmQgcDIuXG4gXHQgKi9cblx0Z2V0TWlkUG9pbnQocDIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KCh0aGlzLnggKyBwMi54KSAvIDIsICh0aGlzLnkgKyBwMi55KSAvIDIpO1xuXHR9XG5cblx0cmV2ZXJzZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMocDIpIHtcblx0XHRpZiAoIXAyIHx8IHAyLmNvbnN0cnVjdG9yICE9IFBvaW50KSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gKHRoaXMueCA9PSBwMi54ICYmIHRoaXMueSA9PSBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWZsZWN0IHRoaXMgcG9pbnQgdy5yLnQuIHRoZSByZWN0YW5nbGUuXG5cdCAqIElmIHZlcnRpY2FsIGlzIHRydWUsIGl0IHdpbGwgcmVmbGVjdCB0aGUgcG9pbnQgY3Jvc3MgdGhlIHZlcnRpY2FsXG5cdCAqIGNlbnRyYWwgbGluZSBvZiB0aGUgcmVjdGFuZ2xlLCBvdGhlcndpc2UgcmVmbGVjdCBjcm9zcyB0aGUgaG9yaXpvbnRhbFxuXHQgKiBjZW50cmFsIGxpbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSByZWN0IHRoZSByZWN0YW5nbGVcblx0ICogQHBhcmFtIHZlcnRpY2FsIHdoZXRoZXIgaXMgdmVydGljYWwgcmVmbGVjdGlvbiBvciBob3Jpem9udGFsIHJlZmxlY3Rpb24uXG5cdCAqL1xuXHRyZWZsZWN0KHJlY3QsIHZlcnRpY2FsKSB7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0dGhpcy54ID0gMiAqIHJlY3QueCAtIHRoaXMueDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnkgPSAyICogcmVjdC55IC0gdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xuXHR9XG59XG5cblBvaW50LlcgPSBuZXcgUG9pbnQoLTEsIDApO1xuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xuUG9pbnQuRSA9IG5ldyBQb2ludCgxLCAwKTtcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XG5Qb2ludC5TRSA9IG5ldyBQb2ludCgxLCAxKTtcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIGEgZ2l2ZW4gcG9pbnQgb2YgYSBnaXZlbiByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRjb250YWlucyhlbCkge1xyXG5cdFx0bGV0IHcgPSBlbC53aWR0aCB8fCAwO1xyXG5cdFx0bGV0IGggPSBlbC5oZWlnaHQgfHwgMDtcclxuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcclxuXHRcdGxldCByaWdodCA9IGVsLnggKyB3LzI7XHJcblx0XHRsZXQgdG9wID0gZWwueSAtIGgvMjtcclxuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xyXG5cdFx0cmV0dXJuIChyaWdodCA8PSB0aGlzLnJpZ2h0KSAmJiAobGVmdCA+PSB0aGlzLmxlZnQpICYmXHJcblx0XHRcdCh0b3AgPj0gdGhpcy50b3ApICYmIChib3R0b20gPD0gdGhpcy5ib3R0b20pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cclxuXHQgKi9cclxuXHRkaXN0YW5jZShwdCkge1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcclxuXHJcblx0XHRpZiAocHQueCA8IHRoaXMubGVmdCkge1xyXG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKSk7XHJcblx0XHR9XHJcblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvcCAtIHB0Lnk7XHJcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XHJcblx0XHR9XHJcblx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XHJcblx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0cmV0dXJuIHB0LnggLSB0aGlzLnJpZ2h0O1xyXG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZW4gdHdvIHBvaW50cywgd2Ugd2FudCB0byBkZXRlY3Qgd2hldGhlciB0aGUgbGluZSBqb2luaW5nIHRoZSBwdHMgaW50ZXJzZWN0XHJcblx0ICogd2l0aCB0aGUgcmVjdGFuZ2xlIG9yIG5vdC4gV2UgYXNzdW1lIG9ubHkgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lIHNlZ21lbnRzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybiBpbnQgdGhlIHNpZGUgb2YgdGhlIGludGVyc2VjdGlvbjogLTE6IG5vIGludGVyc2VjdGlvbiwgMDogbGVmdCwgMTogdG9wLCAyOiByaWdodCwgMzogYm90dG9tLCA0OiBjb250YWlubWVudC5cclxuXHQgKi9cclxuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcclxuXHRcdGxldCBob3Jpem9udGFsID0gcHQxLnkgPT0gcHQyLnk7XHJcblx0XHRsZXQgY29udGFpbnMxID0gdGhpcy5jb250YWlucyhwdDEpO1xyXG5cdFx0bGV0IGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcclxuXHRcdGlmIChjb250YWluczEgJiYgY29udGFpbnMyKSByZXR1cm4gNDtcclxuXHRcdGlmICghY29udGFpbnMxICYmICFjb250YWluczIpIHtcclxuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xyXG5cdFx0XHRcdGlmIChwdDEueCA8IHRoaXMubGVmdCAmJiBwdDIueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnkgPCB0aGlzLnRvcCAmJiBwdDIueSA+IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRcdHJldHVybiAzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XHJcblx0XHRpZiAoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRpZiAob3V0UHQueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnUmVjdGFuZ2xlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGxldCB4ID0gcmVjdC54O1xyXG5cdFx0bGV0IHkgPSByZWN0Lnk7XHJcblx0XHRsZXQgZHggPSBwdC54IC0geDtcclxuXHRcdGxldCBkeSA9IHB0LnkgLSB5O1xyXG5cdFx0bGV0IGFscGhhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblx0XHRsZXQgcGkgPSBNYXRoLlBJO1xyXG5cdFx0bGV0IHBpMiA9IE1hdGguUEkvMjtcclxuXHRcdGxldCBiZXRhID0gcGkyIC0gYWxwaGE7XHJcblx0XHRsZXQgdCA9IE1hdGguYXRhbjIocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xyXG5cclxuXHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0cC55ID0geSAtIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRwLnggPSB4IC0gcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdHAueSA9IHkgKyByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRwLnggPSB4ICsgcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgcDEgYW5kIHAyXHJcblx0ICovXHJcblx0c3RhdGljIGdldEJvdW5kaW5nUmVjdGFuZ2xlKHB0cywgbWFyZ2luKSB7XHJcblx0XHRpZiAoIXB0cyB8fCBwdHMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcclxuXHRcdGlmICghXy5pc0FycmF5KG1hcmdpbikpXHJcblx0XHRcdG1hcmdpbiA9IFttYXJnaW4sIG1hcmdpbiwgbWFyZ2luLCBtYXJnaW5dO1xyXG5cdFx0bGV0IG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0bGV0IG1heCA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHAgPSBwdHNbaV07XHJcblx0XHRcdGlmIChwLnggPCBtaW5bMF0pIHtcclxuXHRcdFx0XHRtaW5bMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA8IG1pblsxXSkge1xyXG5cdFx0XHRcdG1pblsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC54ID4gbWF4WzBdKSB7XHJcblx0XHRcdFx0bWF4WzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPiBtYXhbMV0pIHtcclxuXHRcdFx0XHRtYXhbMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG1pblswXSA9IG1pblswXSAtIG1hcmdpblswXTtcclxuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcclxuXHRcdG1heFswXSA9IG1heFswXSArIG1hcmdpblsyXTtcclxuXHRcdG1heFsxXSA9IG1heFsxXSArIG1hcmdpblszXTtcclxuXHRcdGxldCB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcclxuXHRcdGxldCBoID0gTWF0aC5hYnMobWF4WzFdIC0gbWluWzFdKTtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pblswXSArIHcvMiwgbWluWzFdICsgaC8yLCB3LCBoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cclxuXHQgKiBAcGFyYW0gcmVjdHNcclxuXHQgKi9cclxuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcclxuXHRcdGxldCBtaW54ID0gbnVsbCwgbWlueSA9IG51bGwsIG1heHggPSAtSW5maW5pdHksIG1heHkgPSAtSW5maW5pdHk7XHJcblx0XHRfLmVhY2gocmVjdHMsIGZ1bmN0aW9uIChyZWN0KSB7XHJcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcclxuXHRcdFx0bWlueSA9IG1pbnkgfHwgcmVjdC55O1xyXG5cdFx0XHRtaW54ID0gTWF0aC5taW4obWlueCwgcmVjdC54KTtcclxuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XHJcblx0XHRcdG1heHggPSBNYXRoLm1heChtYXh4LCByZWN0LnJpZ2h0KCkpO1xyXG5cdFx0XHRtYXh5ID0gTWF0aC5tYXgobWF4eSwgcmVjdC5ib3R0b20oKSk7XHJcblx0XHR9KTtcclxuXHRcdG1pbnggPSBtaW54IHx8IDA7XHJcblx0XHRtaW55ID0gbWlueSB8fCAwO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGRpcmVjdGlvbiB0aGUgcG9pbnQgPGk+cDwvaT4gaXMgaW4gcmVsYXRpb24gdG8gdGhlIGdpdmVuIHJlY3RhbmdsZS5cclxuXHQgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFdFU1QgKC0xLDApLCBFQVNUICgxLDApLCBOT1JUSCAoMCwtMSkgYW5kIFNPVVRIICgwLDEpIGlmIG9ydGhvZ29uYWwgaXMgdHJ1ZSwgb3RoZXJ3aXNlIHJldHVyblxyXG5cdCAqIHRoZSBkaXJlY3Rpb24gY29ubmVjdGlvbiB0aGUgY2VudGVyIG9mIHIgYW5kIHAuXHJcblx0ICogQHBhcmFtIHJcclxuXHQgKiBAcGFyYW0gcFxyXG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXHJcblx0ICogQHJldHVybnMge1BvaW50fCp9XHJcblx0ICovXHJcblx0c3RhdGljIGdldERpcmVjdGlvbihyLCBwLCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGlmICghb3J0aG9nb25hbClcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChyLngsIHIueSkuZ2V0RGlyZWN0aW9uKG5ldyBQb2ludChwLngsIHAueSkpO1xyXG5cclxuXHRcdGxldCBpLCBkaXN0YW5jZSA9IE1hdGguYWJzKHIubGVmdCAtIHAueCksIGRpcmVjdGlvbiA9IFBvaW50Llc7XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIudG9wIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuTjtcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5ib3R0b20gLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5TO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnJpZ2h0IC0gcC54KTtcclxuXHRcdGlmIChpIDwgZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuRTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGlyZWN0aW9uO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xuXG5sZXQgcmVnaXN0cnkgPSB7fTtcblxuY2xhc3MgU2hhcGUge1xuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb25maWcpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xuXHRcdHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xuXHRcdF8uZGVmYXVsdHModGhpcywgY29uZmlnLCB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeS1jb29yZCBvZiB0aGUgdG9wIHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IGJvdHRvbSgpIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB4LWNvb3JkIG9mIGxlZnQgc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoLzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSByaWdodCBzaWRlIG9mIHRoaXMgUmVjdGFuZ2xlLlxuXHQgKi9cblx0Z2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XG5cblx0Z2V0IGNlbnRlcigpIHsgcmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7IH1cblxuXHRnZXQgYm91bmRzKCkgeyByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyB9XG5cblx0Y29udGFpbnMoZWwpIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0LyoqXG5cdCAqIFRoaXMgd2lsbCBnZW5lcmF0ZSBuIHBvcnRzIG9uIHRoZSBzaGFwZS5cblx0ICovXG5cdGdldFJlZ3VsYXJQb2ludHMobikge3JldHVybiBudWxsO31cblxuXHQvKipcblx0ICogR2V0IHRoZSBpbnRlcnNlY3Rpb24gYmV0d2VlbiBib3VuZGFyeSBvZiB0aGlzIHNoYXBlIGFuZCB0aGUgbGluZSBjb25uZWN0aW5nICh4LHkpIHdpdGggdGhlIHJlZlB0LlxuXHQgKiBAcGFyYW0gcmVmUHRcblx0ICogQHJldHVybnMge251bGx9XG5cdCAqL1xuXHRnZXRQZXJpbWV0ZXIocmVmUHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFBlcmltZXRlcih0aGlzLCByZWZQdCwgb3J0aG9nb25hbCk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodmlldy5nZXRUZW1wbGF0ZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWUsIHRoaXMpKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xuXHRcdHJldHVybiByZWdpc3RyeVtuYW1lXTtcblx0fVxuXG5cdHN0YXRpYyBhZGRTaGFwZShuYW1lLCBjKSB7XG5cdFx0cmVnaXN0cnlbbmFtZV0gPSBjO1xuXHR9XG5cblx0c3RhdGljIHJlbW92ZVNoYXBlKG5hbWUpIHtcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG5cblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogZG9tIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNJRTogKGZ1bmN0aW9uICgpIHtcblx0XHR2YXIgc0FnZW50ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQ7XG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcblxuXHRcdC8vIElmIElFLCByZXR1cm4gdmVyc2lvbiBudW1iZXIuXG5cdFx0aWYgKElkeCA+IDApXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xuXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSlcblx0XHRcdHJldHVybiAxMTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pKCksXG5cblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXG5cdFx0cmV0dXJuIHR5cGVvZiBJbnN0YWxsVHJpZ2dlciAhPT0gJ3VuZGVmaW5lZCc7XG5cdH0pKCksXG5cblx0Y3JlYXRlRWxlbWVudDogZnVuY3Rpb24gKHRhZywgYXR0cmlicywgc3R5bGVzLCBodG1sKSB7XG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcblx0XHRpZiAoaHRtbClcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XG5cdFx0cmV0dXJuIGVsO1xuXHR9LFxuXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XG5cdFx0bGV0IHRlbXAgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIHN0cik7XG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2Rlcztcblx0fSxcblxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xuXHRcdGlmIChhdHRyaWJzKSB7XG5cdFx0XHRfLmZvckVhY2goYXR0cmlicywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcblx0XHRcdCB9KTtcblx0XHR9XG5cdFx0aWYgKHN0eWxlcykge1xuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuXHRcdFx0XHRlbC5zdHlsZVtrZXldID0gdmFsdWU7XG5cdFx0XHR9KTtcblx0XHR9XG5cdH0sXG5cblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHJldHVybiBub2RlICYmIG5vZGUubm9kZVR5cGUgPT0gMSAmJiAoICFtZXRob2QgfHwgbWV0aG9kKG5vZGUpICk7XG5cdH0sXG5cblx0Z2V0QW5jZXN0b3JCeTogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcblx0XHRcdFx0cmV0dXJuIG5vZGU7XG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiBvZiBlbGVtZW50IHJlbGF0aXZlIHRvIHRoZSBjb250ZXh0LlxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcblx0ICogQHBhcmFtIGNvbnRleHRcblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcblx0fSxcblxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcblx0XHRsZXQgaCA9IGVsUmVjdC5ib3R0b20gLSBlbFJlY3QudG9wO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xuXHR9LFxuXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XG5cdFx0aWYgKHgpIGVsLnN0eWxlLmxlZnQgPSB4ICsgJ3B4Jztcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XG5cdH0sXG5cblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XG5cdFx0dmFyIGggPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRIZWlnaHQsIDEwKTtcblx0XHRyZXR1cm4gW3csIGhdO1xuXHR9LFxuXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xuXHRcdGlmIChoKSBlbC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4Jztcblx0fSxcblxuXHRwcmVsb2FkSW1hZ2VzOiBmdW5jdGlvbihhcnJheSkge1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XG5cblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSBsaXN0LmluZGV4T2YodGhpcyk7XG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xuXHRcdFx0XHRcdC8vIHJlbW92ZSBpbWFnZSBmcm9tIHRoZSBhcnJheSBvbmNlIGl0J3MgbG9hZGVkXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0bGlzdC5wdXNoKGltZyk7XG5cdFx0XHRpbWcuc3JjID0gYXJyYXlbaV07XG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogR2V0J3MgdGhlIGltYWdlJ3MgaW5mb3JtYXRpb24gZ2l2ZW4gdGhlIHVybC4gTXVzdCBiZSBwcmVsb2FkZWQgYnkgY2FsbGluZyB0aGUgcHJlbG9hZEltYWdlIGZ1bmN0aW9uLlxuXHQgKiBAcGFyYW0gc3JjXG5cdCAqL1xuXHRnZXRJbWFnZUluZm86IGZ1bmN0aW9uKHNyYykge1xuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcblx0ICovXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xuXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XG5cblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cblx0ICpcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnM6XG5cdCAqXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqL1xuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XG5cblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcblxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XG5cblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHR2YXIgYSA9IHJlY3Qud2lkdGggLyAyO1xyXG5cdFx0dmFyIGIgPSByZWN0LmhlaWdodCAvIDI7XHJcblx0XHR2YXIgY3ggPSByZWN0Lng7XHJcblx0XHR2YXIgY3kgPSByZWN0Lnk7XHJcblx0XHR2YXIgcHggPSBwdC54O1xyXG5cdFx0dmFyIHB5ID0gcHQueTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIHN0cmFpZ2h0IGxpbmUgZXF1YXRpb24gdGhyb3VnaFxyXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcclxuXHRcdHZhciBkeCA9IHBhcnNlSW50KHB4IC0gY3gpO1xyXG5cdFx0dmFyIGR5ID0gcGFyc2VJbnQocHkgLSBjeSk7XHJcblxyXG5cdFx0dmFyIHR4LCB0eTtcclxuXHJcblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoY3gsIGN5ICsgYiAqIGR5IC8gTWF0aC5hYnMoZHkpKTtcclxuXHRcdH0gZWxzZSBpZiAoZHggPT0gMCAmJiBkeSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxyXG5cdFx0dmFyIGQgPSBkeSAvIGR4O1xyXG5cdFx0dmFyIGggPSBjeSAtIGQgKiBjeDtcclxuXHRcdHZhciBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xyXG5cdFx0dmFyIGYgPSAtMiAqIGN4ICogZTtcclxuXHRcdHZhciBnID0gYSAqIGEgKiBkICogZCAqIGN4ICogY3ggKyBiICogYiAqIGN4ICogY3ggLSBhICogYSAqIGIgKiBiO1xyXG5cdFx0dmFyIGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XHJcblxyXG5cdFx0Ly8gVHdvIHNvbHV0aW9ucyAocGVyaW1ldGVyIHBvaW50cylcclxuXHRcdHZhciB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHhvdXQyID0gKC1mIC0gZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeW91dDEgPSBkICogeG91dDEgKyBoO1xyXG5cdFx0dmFyIHlvdXQyID0gZCAqIHhvdXQyICsgaDtcclxuXHRcdHZhciBkaXN0MSA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDEgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQxIC0gcHkpLCAyKSk7XHJcblx0XHR2YXIgZGlzdDIgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQyIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MiAtIHB5KSwgMikpO1xyXG5cclxuXHRcdC8vIENvcnJlY3Qgc29sdXRpb25cclxuXHRcdHZhciB4b3V0ID0gMDtcclxuXHRcdHZhciB5b3V0ID0gMDtcclxuXHJcblx0XHRpZiAoZGlzdDEgPCBkaXN0Mikge1xyXG5cdFx0XHR4b3V0ID0geG91dDE7XHJcblx0XHRcdHlvdXQgPSB5b3V0MTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MjtcclxuXHRcdFx0eW91dCA9IHlvdXQyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwID0gbmV3IFBvaW50KHhvdXQsIHlvdXQpO1xyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoZGlyLnggPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggLSBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnggPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCArIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgLSBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSArIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0bGlua1N0eWxlOiBcImRpcmVjdFwiLFxuXHRzaG93R2F1Z2U6IGZhbHNlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGxpbmtTdHlsZXMgPSB7fTtcblxuY2xhc3MgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHR0aGlzLnN0YXJ0ID0gdGVybWluYWxWaXN1YWxbMF0ucG9pbnQ7XG5cdFx0dGhpcy5lbmQgPSB0ZXJtaW5hbFZpc3VhbFsxXS5wb2ludDtcblx0XHR0aGlzLnN0YXJ0Tm9ybWFsID0gdGVybWluYWxWaXN1YWxbMF0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuZW5kTm9ybWFsID0gdGVybWluYWxWaXN1YWxbMV0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuc3RhcnRNYXJrZXIgPSBzdGFydE1hcmtlcjtcblx0XHR0aGlzLmVuZE1hcmtlciA9IGVuZE1hcmtlcjtcblx0XHRfLmFzc2lnbih0aGlzLCBzaGFwZUNvbmZpZyk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsodGhpcyk7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgY29udHJvbFB0cygpIHsgcmV0dXJuIG51bGw7IH1cblxuXHQvKipcblx0ICpcblx0ICogUmV0dXJuIHRoZSB0b3RhbCBsZW5ndGggb2YgdGhpcyBjb25uZWN0aW9uLCBpbiBwaXhlbHMuXG5cdCAqL1xuXHRnZXRMZW5ndGgoKSB7XG5cdFx0aWYgKCFfLmlzVW5kZWZpbmVkKHRoaXMubGVuZ3RoKSkgcmV0dXJuIHRoaXMubGVuZ3RoO1xuXG5cdFx0dmFyIHBvaW50cyA9IHRoaXMucG9pbnRzO1xuXHRcdHZhciBpLCBsID0gMDtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcblx0XHRcdGwgKz0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRyZXR1cm4gdGhpcy5sZW5ndGggPSBsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IG1vZGlmaWVycyBvciBsYWJlbC4uXG5cdCAqXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxuXHQgKiBAcmV0dXJuICpbXSB0aGUgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0dmFyIHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5nZXRMZW5ndGgoKTtcblx0XHRpZiAoXy5pc1N0cmluZyhwKSkge1xuXHRcdFx0aWYgKC8lJC8udGVzdChwKSkge1xuXHRcdFx0XHRwID0gcyhwKS5zdHJMZWZ0KCclJykudG9OdW1iZXIoKSAvIDEwMDtcblx0XHRcdH0gZWxzZSBpZiAoL3B4JC8udGVzdChwKSkge1xuXHRcdFx0XHRwID0gcyhwKS5zdHJMZWZ0KCdweCcpLnRvTnVtYmVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChwID49IC0xICYmIHAgPD0gMSkgcCAqPSBsO1xuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xuXHRcdGlmIChwID4gbCkgcCA9IGw7XG5cblx0XHR2YXIgcG9pbnRzID0gdGhpcy5nZXRQb2ludHMoKSwgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFtwb2ludC54ICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9pbnQueSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5rJztcblx0fVxuXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1N0eWxlc1tzaGFwZUNvbmZpZy5saW5rU3R5bGVdO1xuXHRcdGlmIChsaW5rQ2xhc3MpXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHN0eWxlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy5saW5rU3R5bGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxufVxuXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cblxuXHRnZXQgY29udHJvbFB0cygpIHtcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IG51bGw7XG5cdFx0cHRzWzFdID0gW25ldyBQb2ludCgocy54ICsgZS54KS8yLCBzLnkpLCBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgZS55KV07XG5cdFx0cmV0dXJuIHB0cztcblx0fVxufVxuXG5jbGFzcyBFbnRpdHlSZWxhdGlvbnMgZXh0ZW5kcyBMaW5rIHtcblxufVxuXG5cbmNsYXNzIE1hbmhhdHRhbiBleHRlbmRzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHMoc2hhcGVDb25maWcsIHtcblx0XHRcdE1JTl9CVUZGRVI6IDEwLFxuXHRcdFx0YXV0b1JvdXRlOiBmYWxzZSxcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXG5cdFx0fSk7XG5cdFx0c3VwZXIodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7XG5cdFx0bGV0IHBvcyA9IE1hbmhhdHRhbi5yb3V0ZUludGVybmFsKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnN0YXJ0Tm9ybWFsLCB0aGlzLmVuZE5vcm1hbCwgdGhpcy5NSU5fQlVGRkVSKTtcblx0XHRwb3MgPSBNYW5oYXR0YW4ucHJvY2Vzc1Bvc2l0aW9ucyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgcG9zLCB0aGlzLnN0YXJ0Tm9ybWFsLnghPTApO1xuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdFx0dmFyIGJveGVzID0gW10sIG5vZGUsIHN0YXJ0Qm94LCBlbmRCb3g7XG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcblx0XHRcdHZhciBpbmRleCA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdC8vIERvIG5vdCBpbmNsdWRlIHNvdXJjZSBvciB0YXJnZXQgYW5jZXN0b3JzIGluIHJvdXRpbmcuXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcblx0XHRcdFx0c3RhcnRCb3ggPSBpbmRleDtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xuXHRcdFx0XHRib3hlcy5wdXNoKG5vZGUuZ2V0Qm91bmRzKGRvY3VtZW50KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYm94ZXMubGVuZ3RoID4gMSlcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdH1cblx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgcm91dGUgYmFzZWQgb24gdGhlIHN0YXJ0LCBlbmQgYW5kIHN0YXJ0Tm9ybWFsIGFuZCBlbmROb3JtYWxcblx0ICogTm9uZSBvZiB0aGUgcGFyYW1ldGVycyBjYW4gYmUgbnVsbFxuXHQgKiBUT0RPOiBUaGlzIG1ldGhvZCBjb3VsZCB1c2Ugc29tZSBpbXByb3ZlbWVudC4uLlxuXHQgKi9cblx0c3RhdGljIHJvdXRlSW50ZXJuYWwoc3RhcnQsIGVuZCwgc3RhcnROb3JtYWwsIGVuZE5vcm1hbCwgYnVmZmVyKSB7XG5cdFx0dmFyIGRpcmVjdGlvbiA9IHN0YXJ0LmdldERpcmVjdGlvbihlbmQpO1xuXHRcdHZhciBhdmVyYWdlID0gc3RhcnQuZ2V0TWlkUG9pbnQoZW5kKTtcblx0XHR2YXIgcG9zID0gW107XG5cdFx0dmFyIGhvcml6b250YWwgPSBzdGFydE5vcm1hbC54ICE9IDA7XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnkgOiBzdGFydC54O1xuXG5cdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdHZhciBpO1xuXHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPT0gMCkge1xuXHRcdFx0aWYgKChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0JiYgKGVuZE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPD0gMCkpIHtcblx0XHRcdFx0Ly8gMFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gMlxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMClcblx0XHRcdFx0XHRpID0gc3RhcnROb3JtYWwuc2ltaWxhcml0eShzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID4gMClcblx0XHRcdFx0XHRpID0gZW5kTm9ybWFsLnNpbWlsYXJpdHkoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblxuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID4gMCkge1xuXHRcdFx0XHQvLzFcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxuXHRcdFx0XHRcdGkgPSBzdGFydE5vcm1hbC5zaW1pbGFyaXR5KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGkgPSBlbmROb3JtYWwuc2ltaWxhcml0eShlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vMyBvciAxXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IHN0YXJ0Tm9ybWFsLnNpbWlsYXJpdHkoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xuXHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XG5cdFx0XHRcdFx0aSA9IGVuZE5vcm1hbC5zaW1pbGFyaXR5KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRwb3MucHVzaChob3Jpem9udGFsID8gZW5kLnkgOiBlbmQueCk7XG5cblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Ly8gUHJvY2VzcyB0aGUgcG9zaXRpb25zLlxuXHRzdGF0aWMgcHJvY2Vzc1Bvc2l0aW9ucyhzdGFydCwgZW5kLCBwb3NpdGlvbnMsIGhvcml6b250YWwpIHtcblx0XHR2YXIgcG9zID0gW107XG5cdFx0cG9zWzBdID0gaG9yaXpvbnRhbCA/IHN0YXJ0LnggOiBzdGFydC55O1xuXHRcdHZhciBpO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvc1tpICsgMV0gPSBwb3NpdGlvbnNbaV07XG5cdFx0fVxuXHRcdHBvcy5wdXNoKChob3Jpem9udGFsID09IChwb3NpdGlvbnMubGVuZ3RoICUgMiA9PSAxKSkgPyBlbmQueCA6IGVuZC55KTtcblxuXHRcdHZhciBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBzdGFydDtcblx0XHR2YXIgcDtcblx0XHR2YXIgY3VycmVudCwgcHJldjtcblx0XHRmb3IgKGkgPSAyOyBpIDwgcG9zLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xuXHRcdFx0cHJldiA9IHBvc1tpIC0gMV07XG5cdFx0XHRjdXJyZW50ID0gcG9zW2ldO1xuXHRcdFx0cCA9IGhvcml6b250YWwgPyBuZXcgUG9pbnQocHJldiwgY3VycmVudCkgOiBuZXcgUG9pbnQoY3VycmVudCwgcHJldik7XG5cdFx0XHRwdHMucHVzaChwKTtcblx0XHR9XG5cdFx0cHRzLnB1c2goZW5kKTtcblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxuXHQgKi9cblx0YXV0b1JvdXRlKHB0cywgY29udGFpbmVyLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdHZhciBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XG5cdFx0dmFyIGNoYW5uZWwsIGNoYW5uZWwyLCBwdCwgZGlyO1xuXG5cdFx0dmFyIHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XG5cdFx0Ly8gZmlyc3QgZ2V0IHRoZSBzdGFydCBhbmQgZW5kIGNoYW5uZWxcblx0XHRib3ggPSBib3hlc1tlbmRCb3hdO1xuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcblx0XHRpZiAocHQueSA8IGJveC55KVxuXHRcdFx0c2lkZSA9IDE7XG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcblx0XHRcdHNpZGUgPSAzO1xuXHRcdGVsc2UgaWYgKHB0LnggPCBib3gueClcblx0XHRcdHNpZGUgPSAwO1xuXHRcdGVsc2Vcblx0XHRcdHNpZGUgPSAyO1xuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xuXHRcdGVuZFBhZGRpbmcgPSBjaGFubmVsLmhvcml6b250YWwgPyAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCkvMiA6IChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wKS8yO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAocHRzW2krMV0ueCA9PSBwdHNbaV0ueCAmJiBwdHNbaSsxXS55ID09IHB0c1tpXS55KSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdCA9IF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcblx0XHRcdGogPSBpbnRlcnNlY3RbMF07XG5cdFx0XHRzaWRlID0gaW50ZXJzZWN0WzFdO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZSk7XG5cdFx0XHRzd2l0Y2goc2lkZSkge1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludCgoY2hhbm5lbC5yaWdodCArIGNoYW5uZWwubGVmdCkvMiwgcHRzW2ldLnkpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMSA6IDM7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS55ID09IHB0c1tpLTFdLnkpICYmIChwdHNbaS0xXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpLTFdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAwICYmIHB0LnggPD0gcHRzW2ldLngpIHx8IChzaWRlID09IDIgJiYgcHQueCA+PSBwdHNbaV0ueCkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkgKyBkKSwgbmV3IFBvaW50KHB0LngsIHB0LnkgKyBkKV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludChwdHNbaV0ueCwgKGNoYW5uZWwuYm90dG9tICsgY2hhbm5lbC50b3ApLzIpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMCA6IDI7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS54ID09IHB0c1tpLTFdLngpICYmIChwdHNbaS0xXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaS0xXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAxICYmIHB0LnkgPD0gcHRzW2ldLnkpIHx8IChzaWRlID09IDMgJiYgcHQueSA+PSBwdHNbaV0ueSkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCArIGQsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0LnggKyBkLCBwdC55KV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBtYXggcG9pbnRzLlxuXHRcdFx0aWYgKGkgPiAyMCkgcmV0dXJuO1xuXHRcdFx0aWYgKHB0ICYmIChwdC54ICE9IHB0c1tpXS54IHx8IHB0LnkgIT0gcHRzW2ldLnkpKSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0fVxuXHR9XG5cblx0X2hhc0ludGVyc2VjdGlvbihwdHMsIGJveGVzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChib3hlc1tqXS5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSkgPj0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0X2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgYm94LCBzaWRlLCBzYXZlZEluZGV4ID0gbnVsbCwgc2F2ZWRTaWRlID0gbnVsbDtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKGkgPT0gMCAmJiBqID09IHN0YXJ0Qm94KSB8fCAoaSA9PSBwdHMubGVuZ3RoIC0gMiAmJiBqID09IGVuZEJveCkpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRzaWRlID0gYm94LmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKTtcblx0XHRcdGlmIChzaWRlID49IDApIHtcblx0XHRcdFx0aWYgKHNhdmVkSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGJveGVzW3NhdmVkSW5kZXhdLmRpc3RhbmNlKHB0c1tpXSkgPiBib3guZGlzdGFuY2UocHRzW2ldKSkge1xuXHRcdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2F2ZWRJbmRleCAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIFtzYXZlZEluZGV4LCBzYXZlZFNpZGVdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0X2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBicmVha1B0LCBib3gsIHNpZGUpIHtcblx0XHR2YXIgZGlyO1xuXHRcdHZhciBwO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwID0gXCJ5XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwID0gXCJ4XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvL2ZpcnN0IHRyeSB0aGUgYnJlYWtwdC5cblx0XHRkaXIgPSBfZ2V0Um91dGVEaXJlY3Rpb24oYnJlYWtQdCwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRkaXIgPSAtX2dldFJvdXRlRGlyZWN0aW9uKHB0c1swXSwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdFx0aWYgKGJyZWFrUHRbcF0gPCBib3guZ2V0Q2VudGVyKClbcF0pXG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGlyO1xuXHR9XG5cblx0X2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XG5cdFx0aWYgKHB0MS54ID09IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlM7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcblx0XHR9IGVsc2UgaWYgKHB0MS55ID09IHB0Mi55KSB7XG5cdFx0XHRpZiAocHQxLnggPCBwdDIueCkgcmV0dXJuIFBvaW50LkU7XG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcblx0XHR9IGVsc2UgaWYgKHB0MS54IDwgcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU0U7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU1c7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XG5cdFx0fVxuXHR9XG5cblx0X2dldENoYW5uZWwoY29udGFpbmVyLCBpbmRleCwgYm94ZXMsIHNpZGUpIHtcblx0XHR2YXIgbWF4Q2hhbm5lbFdpZHRoID0gdGhpcy5tYXhDaGFubmVsV2lkdGg7XG5cdFx0dmFyIGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XG5cdFx0dmFyIHB0LCBpO1xuXHRcdHZhciBjaGFubmVsID0ge30sIGwsIHQsIGIsIHI7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRMZWZ0KCk7XG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHIgPSBib3hlc1tpXS5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPj0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcblx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0VG9wKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGIgPSBib3hlc1tpXS5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChiID49IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcblx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGNoYW5uZWwubGVmdCA9IHB0Lng7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRsID0gYm94ZXNbaV0uZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY2hhbm5lbC5sZWZ0ICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwudG9wID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiBib3gyLmdldFRvcCgpLnkpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY2hhbm5lbC50b3AgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgYSBsaW5lIHNlZ21lbnQgYnkgYSBzcGVjaWZpZWQgZGlzdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxuXHQgKiBAcGFyYW0gaSB0aGUgaW5kZXggb2YgdGhlIHNlZ21lbnQuXG5cdCAqIEBwYXJhbSBkIHRoZSBkaXN0YW5jZSB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXG5cdCAqIEBwYXJhbSBlbmRQYWRkaW5nXG5cdCAqL1xuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBuZXcgbGluZSBzZWdtZW50cy5cblx0XHR2YXIgZGlyLCBsLCBwdDtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludC5cblx0XHRcdGRpciA9IHB0c1swXS5nZXREaXJlY3Rpb24ocHRzWzFdKTtcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxuXHRcdFx0XHRzdGFydFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oc3RhcnRQYWRkaW5nLCBwdHNbMF0uZGlzdGFuY2UocHRzWzFdKS8yKTtcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UoMSwgMCwgcHQpO1xuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGkgPT0gcHRzLmxlbmd0aCAtIDIpIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cblx0XHRcdGRpciA9IHB0c1twdHMubGVuZ3RoLTFdLmdldERpcmVjdGlvbihwdHNbcHRzLmxlbmd0aC0yXSk7XG5cdFx0XHRpZiAoIWVuZFBhZGRpbmcpXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oZW5kUGFkZGluZywgcHRzW3B0cy5sZW5ndGgtMV0uZGlzdGFuY2UocHRzW3B0cy5sZW5ndGgtMl0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDFdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnkgKz0gZDtcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS54ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cblx0ICovXG5cdF9tZXJnZVNlZ21lbnRzKHB0cykge1xuXHRcdHZhciBoMSA9IHB0c1twdHMubGVuZ3RoLTFdLnkgPT0gcHRzW3B0cy5sZW5ndGgtMl0ueTtcblx0XHR2YXIgaDI7XG5cdFx0Zm9yICh2YXIgaSA9IHB0cy5sZW5ndGggLSAyOyBpID49IDE7IGktLSkge1xuXHRcdFx0aDIgPSBwdHNbaV0ueSA9PSBwdHNbaS0xXS55O1xuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGgxID0gIWgxO1xuXHRcdH1cblx0fVxufVxuXG5saW5rU3R5bGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XG5saW5rU3R5bGVzWydiZXppZXInXSA9IEJlemllckxpbms7XG5saW5rU3R5bGVzWydlbnRpdHlSZWxhdGlvbnMnXSA9IEVudGl0eVJlbGF0aW9ucztcbmxpbmtTdHlsZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldKSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0aWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXG5cdCAqL1xuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHRsZXQgbGFzdCwgc3RhY2s7XG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcblx0XHRcdGsgPSBrIHx8IDA7XG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuXHRcdFx0XHR2YXIgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcblx0XHR9O1xuXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xuXHRcdFx0XHRsZXQgaXRlbTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcblx0fVxuXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGtleSkpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKGxpc3RlbmVycywgKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBhZnRlciBkaXNwYXRjaGluZywgZG8gbm90IHByb3BhZ2F0ZS5cblx0XHRpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbihldmVudCkge1xuXHRcdGNvbnN0IHBvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRpZighIF8uaXNOYU4ocG9zWzBdKSAmJiAhIF8uaXNOYU4ocG9zWzFdKSlcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gcG9zO1xuXHRcdHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBrZXkgZXZlbnQgaGFuZGxlclxuXHQgKiAvLyBLZXkgaXMgb2JqZWN0IHtjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBjb2RlfVxuXHQgKi9cblx0cmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0fTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldIHx8ICh0aGlzLmxpc3RlbmVyc1trZXldID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlclxuXHQgKi9cblx0cmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCkge1xuXHRcdGlmIChfLmlzQXJyYXkodHlwZSkpIHtcblx0XHRcdF8uZm9yRWFjaCh0eXBlLCAodCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyKHQsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgekluZGV4OiB6SW5kZXh9O1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0ZGVsZXRlIHRoaXMucm9vdDtcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG5cdFx0ZGVsZXRlIHRoaXMuZW50ZXJTdGFjaztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGUgcmVnaXN0ZXJlZCBldmVudCB0eXBlIG1hdGNoZXMgdGhlIHJlYWwgZXZlbnQgdHlwZS4gXCIqXCIgaXMgYWxsb3dlZCBhcyBhIHdpbGQgY2FyZC5cblx0ICovXG5cdHN0YXRpYyBtYXRjaChuc1R5cGUsIHJlZ2lzdGVyZWRUeXBlKSB7XG5cdFx0Y29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxKVxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcblxuXHRcdGxldCBzdWJzdHIsIGluZGV4ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cdFx0XHRzdWJzdHIgPSBuc1R5cGUuc2xpY2UoaW5kZXgpO1xuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xuXHRcdFx0aWYgKGluZGV4IDwgMClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzdGF0aWMgbW91c2UoY29udGFpbmVyLCBlKSB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdHZhciBzdmcgPSBjb250YWluZXIub3duZXJTVkdFbGVtZW50IHx8IGNvbnRhaW5lcjtcblx0XHRpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcblx0XHRcdHBvaW50LnggPSBlLmNsaWVudFg7IHBvaW50LnkgPSBlLmNsaWVudFk7XG5cdFx0XHRwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShjb250YWluZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG5cdFx0fVxuXHRcdHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICBUaGUgS2V5IFV0aWxpdHkgQ0xhc3MgZm9yIHRoZSBFdmVudCBEaXNwYXRjaGVyICAgICAgICAgIFx0ICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbi8qKlxuICogS0VZIGNvbnN0YW50XG4gKi9cbmNvbnN0IEtFWSA9IHtcblx0QUxUICAgICAgICAgIDogMTgsXG5cdEJBQ0tfU1BBQ0UgICA6IDgsXG5cdENBUFNfTE9DSyAgICA6IDIwLFxuXHRDT05UUk9MICAgICAgOiAxNyxcblx0REVMRVRFICAgICAgIDogNDYsXG5cdERPV04gICAgICAgICA6IDQwLFxuXHRFTkQgICAgICAgICAgOiAzNSxcblx0RU5URVIgICAgICAgIDogMTMsXG5cdEVTQ0FQRSAgICAgICA6IDIyMCxcblx0SE9NRSAgICAgICAgIDogMzYsXG5cdExFRlQgICAgICAgICA6IDM3LFxuXHRNRVRBICAgICAgICAgOiAyMjQsXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcblx0UEFHRV9ET1dOICAgIDogMzQsXG5cdFBBR0VfVVAgICAgICA6IDMzLFxuXHRQQVVTRSAgICAgICAgOiAxOSxcblx0UFJJTlRTQ1JFRU4gIDogNDQsXG5cdFJJR0hUICAgICAgICA6IDM5LFxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXG5cdFNISUZUICAgICAgICA6IDE2LFxuXHRTUEFDRSAgICAgICAgOiAzMixcblx0VEFCICAgICAgICAgIDogOSxcblx0VVAgICAgICAgICAgIDogMzhcblx0Ly9BREQgICAgICAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyA2MSAgOiAxODcsXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcblx0aWYgKCFldmVudCB8fCAhZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuXHQvLyBOZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXZvaWQgdGhpc1xuXHRpZiAoa2V5ID49IDE2ICYmIGtleSA8PSAxOCkge1xuXHRcdGtleSA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcblx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XG5cdGlmIChhbHQpIGJ1Zi5hcHBlbmQoXCJBTFRcIik7XG5cdGlmIChzaGlmdCkgYnVmLmFwcGVuZChcIlNISUZUXCIpO1xuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XG5cdGlmIChrZXkpIGJ1Zi5hcHBlbmQoa2V5KTtcblxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0tleVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9FZGdlXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xuXG5jb25zdCBub2RlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ25vZGUnLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdGVkaXRhYmxlOiB0cnVlLFxuXHRyZXNpemFibGU6IGZhbHNlLFxuXHRzb3VyY2VhYmxlOiB0cnVlLFxuXHR0YXJnZXRhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlXG59O1xuXG5jb25zdCBlZGdlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ2VkZ2UnLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlLFxuXHRzdGFydE1hcmtlcjogbnVsbCxcblx0ZW5kTWFya2VyOiB7XG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXG5cdFx0dHlwZTogJ2Fycm93Jyxcblx0XHRzaXplOiAxMFxuXHR9LFxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xuXHRzdGFydDogWzAsIDBdLFxuXHRlbmQ6IFs0MDAsIDIwMF1cbn07XG5cbmNsYXNzIEdyYXBoIHtcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xuXHRcdHRoaXMuZWRnZXMgPSB7fTtcblxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcuZWRnZVR5cGVzLCBcIkVkZ2VzXCIsIGVkZ2VEZWZhdWx0cyk7XG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XG5cdFx0bGV0IGVkZ2VUeXBlcyA9IFV0aWxzLnR5cGUoRWRnZS5uYW1lc3BhY2UpLCBtYXJrZXIsIG1hcmtlckNvbmZpZztcblx0XHRmb3IgKGxldCB0eXBlIG9mIGVkZ2VUeXBlcy5lbnRyaWVzKCkpIHtcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGVbMV0ucHJvdG90eXBlLnN0YXJ0TWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgdHJ1ZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5lbmRNYXJrZXI7XG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XG5cdFx0ZGVsZXRlIGNvbmZpZy5lZGdlVHlwZXM7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHRcdHRoaXMucm9vdCA9IG51bGw7XG5cdFx0aWYgKG1vZGVsKVxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xuXHR9XG5cblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudHlwZSkge1xuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXG5cdCAqL1xuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpLCBwb3MpIHtcblx0XHRsZXQgTm9kZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIE5vZGUpO1xuXHRcdGxldCBub2RlID0gbmV3IE5vZGVDbGFzcyh0aGlzLCBjb25maWcpO1xuXG5cdFx0aWYgKHBhcmVudClcblx0XHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgbm9kZSwgcG9zKTtcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucm9vdCA9IG5vZGU7XG5cdFx0XHR0aGlzLnJvb3QucHJvcCgncm9sZScsICdyb290Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ub2Rlc1tub2RlLmlkXSA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRhZGRFZGdlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpLCBmcm9tLCB0bykge1xuXHRcdGxldCBFZGdlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgRWRnZSk7XG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xuXG5cdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBlZGdlKTtcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcblx0XHRyZXR1cm4gZWRnZTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpKSB7XG5cdFx0dmFyIG5vZGVzID0gbW9kZWwubm9kZXM7XG5cdFx0dmFyIGVkZ2VzID0gbW9kZWwuZWRnZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xuXHRcdGRlbGV0ZSBtb2RlbC5lZGdlcztcblxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xuXHRcdGlmIChub2Rlcykge1xuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChlZGdlcykge1xuXHRcdFx0Xy5mb3JFYWNoKGVkZ2VzLCAoZWRnZSkgPT4ge1xuXHRcdFx0XHRsZXQgZnJvbSwgdG87XG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXG5cdFx0XHRcdFx0ZnJvbSA9IHRoaXMubm9kZXNbZWRnZS5mcm9tXTtcblx0XHRcdFx0aWYgKGVkZ2UudG8pXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xuXHRcdFx0XHR0aGlzLmFkZEVkZ2UoZWRnZSwgbm9kZSwgZnJvbSwgdG8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q3VycmVudFJvb3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5cbkdyYXBoLkRFRkFVTFRTID0ge1xuXHRhbGxvd0RhbmdsaW5nRWRnZXM6IHRydWUsXG5cdG11bHRpQ29ubmVjdDogZmFsc2UsXG5cdHJlYWRPbmx5OiBmYWxzZSxcblx0dmlld09ubHk6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuY2xhc3MgTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge30pIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnTicpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5pbkVkZ2VzID0gW107XG5cdFx0dGhpcy5vdXRFZGdlcyA9IFtdO1xuXHRcdHRoaXMucG9ydHMgPSBudWxsO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdGlzQW5jZXN0b3Iobikge1xuXHRcdC8vIFRPRE86IHNob3VsZCB3ZSBtb3ZlIHRoaXMgdG8gZ3JhcGggY2xhc3MgP1xuXHRcdHZhciBub2RlID0gbi5wYXJlbnQ7XG5cdFx0d2hpbGUgKG5vZGUpIHtcblx0XHRcdGlmICh0aGlzID09IG5vZGUpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmVtb3ZlRWRnZShlZGdlKSB7XG5cdFx0dmFyIGVkZ2VzID0gZWRnZS5zb3VyY2UgPT0gdGhpcyA/IHRoaXMub3V0RWRnZXMgOiB0aGlzLmluRWRnZXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGVkZ2UgPT0gZWRnZXNbaV0pIHtcblx0XHRcdFx0ZWRnZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgaW5jb21pbmcgZWRnZVxuXHRhZGRJbkVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhpcy5pbkVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5pbkVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IG91dGdvaW5nIGVkZ2Vcblx0YWRkT3V0RWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQgfHwgcG9zID4gZWRnZS5sZW5ndGggLSAxKVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub3V0RWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHRyZW5kZXJDaGlsZHJlbih2aWV3KSB7XG5cdFx0aWYgKHRoaXMuY2hpbGRyZW4pIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRfLmZvckVhY2godGhpcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQoY2hpbGQucmVuZGVyKHZpZXcpKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRQb3J0KGtleSwgcG9ydE5hbWUgPSAnYXV0bycsIGVuZFB0LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdGlmIChwb3J0TmFtZSA9PSAnYXV0bycpIHtcblx0XHRcdHJldHVybiBzaGFwZS5nZXRQZXJpbWV0ZXIoZW5kUHQsIG9ydGhvZ29uYWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcChcImxhYmVsXCIpID8gdGhpcy5wcm9wKFwibGFiZWxcIikgOiBcInVuZGVmaW5lZFwiO1xuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxuXHRcdFx0bGFiZWwgPSBsYWJlbFswXTtcblx0XHRyZXR1cm4gJ05vZGU6e2lkOicgKyB0aGlzLmlkICsgJztsYWJlbDonICsgbGFiZWwgKyAnO3R5cGU6JyArIHRoaXMucHJvcHMuY29uc3RydWN0b3IudHlwZU5hbWUgKyAnfSc7XG5cdH1cbn1cbk5vZGUubmFtZXNwYWNlID0gXCJOb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuXG4vKlxuXG4vKipcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXG4gKlxuVmVydGV4LnByb3RvdHlwZS5nZXREcmlsbERvd25QYXJlbnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbW9kZSA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RlXCIpIHx8IDM7XG5cdHJldHVybiAhKG1vZGUgJiBHcmFwaC5BTExPV19JTlRFUkFDVElPTlMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5nZXRDcnVtYlRleHQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcblx0XHRyZXR1cm4gJzxzcGFuPjxpbWcgc3JjPVwid2Vid2IvcHpyZWFkb25seS5wbmdcIiAvPjwvc3Bhbj48c3Bhbj4mbmJzcDsnICsgdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpICsgJzwvc3Bhbj4nO1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwiY29udGFpbmVyXCIpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL05vZGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XG5cbi8qKlxuICogVGhlIEVsZW1lbnQgaXMgdGhlIGNvbW1vbiBwYXJlbnQgZm9yIE5vZGUgYW5kIEVkZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge2lkOiBfLnVuaXF1ZUlkKCl9KSB7XG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdHRoaXMuaWQgPSBjb25maWcuaWQ7XG5cdFx0ZGVsZXRlIGNvbmZpZy5pZDtcblxuXHRcdC8vIEluaXRpYWxpemUgZGVjb3JhdG9yc1xuXHRcdGlmIChjb25maWcuZGVjb3JhdG9ycykge1xuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcblx0XHRcdGRlbGV0ZSBjb25maWcuZGVjb3JhdG9ycztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIFZpZXcgUHJvcGVydGllc1xuXHRcdGlmIChjb25maWcudmlld3MpIHtcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy52aWV3cztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIHR5cGVcblx0XHR2YXIgdHlwZSA9IGNvbmZpZy50eXBlIHx8IFwiRGVmYXVsdFwiO1xuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIG5vdCBmb3VuZCBcIiArIGNvbmZpZy50eXBlKTtcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XG5cdFx0dGhpcy5wcm9wcyA9IG5ldyB0eXBlKGNvbmZpZyk7XG5cdH1cblxuXHRwcm9wKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKVxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldC9TZXQgcHJvcGVydHkgc3RvcmVkIGJ5IHZpZXdzLlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHZpZXdQcm9wKGtleSA9ICdkZWZhdWx0JywgbmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcblx0XHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jykge1xuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCF0aGlzLnZpZXdQcm9wc1trZXldKVxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XG5cdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRGVjb3JhdG9ycyhkZWNvcmF0b3JzKSB7fVxuXG5cdC8qKlxuXHQgKiBHZXQgcHJvcGVydGllcyBuZWVkZWQgZm9yIHJlbmRlcmluZyB0aGlzIGVsZW1lbnRcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxuXHQgKi9cblx0Z2V0VmlldyhrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0cmV0dXJuIF8uYXNzaWduKHtcblx0XHRcdGlkOiB0aGlzLmlkLFxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRjbGFzc05hbWU6IHRoaXMuY29tcHV0ZWRDbGFzc05hbWUsXG5cdFx0XHRuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuXHRcdFx0c2NhbGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc2NhbGUnKSB8fCAxLjBcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcblx0XHRpZiAoYm94KVxuXHRcdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRsZXQgYm94ID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94Jywga2V5KTtcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHQvLyBKdXN0IGdldCB0aGUgY29uZmlnIHdpbGwgaGF2ZSBhIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGJvb3N0IGZvciBJRTExIGFuZCBJRTEwLlxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XG5cdFx0cmV0dXJuIGJveDtcblx0fVxuXG5cdGdldCBjb21wdXRlZENsYXNzTmFtZSgpIHtcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcblx0XHRcdGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb21wdXRlZENsYXNzTmFtZSA9IGJ1Zi50b1N0cmluZygnICcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XG5cdH1cblxuXHRnZXQgbmFtZXNwYWNlKCkge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSkgcmV0dXJuICcnO1xuXHRcdHJldHVybiBcInJvb3QuXCIgKyB0aGlzLnByb3AoXCJyb2xlXCIpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5ncmFwaDtcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xuXHRcdGRlbGV0ZSB0aGlzLnByb3BzO1xuXHRcdGRlbGV0ZSB0aGlzLnZpZXdQcm9wcztcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cdH1cbn1cblxuLypcblxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInhcIiwgTWF0aC5yb3VuZCh4KSk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ5XCIsIE1hdGgucm91bmQoeSkpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCB3KTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBoKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJlZGl0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhblNlbGVjdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInNlbGVjdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJyZXNpemFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRUeXBlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHR5cGVTdHIpIHtcblx0cmV0dXJuIHRoaXMuZ3JhcGguZ2V0VHlwZSh0eXBlU3RyKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNyZWF0ZU1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZGlmaWVycykge1xuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XG5cdHZhciBtb2RpZmllclNldHRpbmdzID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGlmaWVyU2V0dGluZ3NcIik7XG5cdGlmIChtb2RpZmllclNldHRpbmdzKSB7XG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRjb25maWcudHlwZSA9IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKGNvbmZpZy5jbGFzc05hbWUpO1xuXHRcdFx0Y29uZmlnLnNldHRpbmcgPSBtb2RpZmllclNldHRpbmdzW2NvbmZpZy5jbGFzc05hbWVdO1xuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5hZGRNb2RpZmllcihjb25maWcuY2xhc3NOYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyBDaGVjayBmb3Igc2hvd0Fsd2F5cyBzZXR0aW5nc1xuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XG5cdFx0XHRpZiAoc2V0dGluZy5zaG93QWx3YXlzICYmICghdGhpcy5tb2RpZmllcnMgfHwgIXRoaXMubW9kaWZpZXJzW25hbWVdKSkge1xuXHRcdFx0XHR2YXIgY29uZmlnID0ge3R5cGU6IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKG5hbWUpLCBzZXR0aW5nOiBzZXR0aW5nfTtcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmFkZE1vZGlmaWVyKG5hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0fVxufTtcblxuQ2VsbC5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lLCBtb2RpZmllcikge1xuXHRpZiAoIXRoaXMubW9kaWZpZXJzKVxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XG5cblx0aWYgKCFtb2RpZmllci5oYXNPd25Qcm9wZXJ0eShcInNob3dIZWFkZXJcIikpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XG5cblx0Ly8gQGhhY2sgcHJlZmVyYWJseSBzZXQgaXQgaW4gY29uZmlndXJhdGlvbnMuXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IGZhbHNlO1xuXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKF8uaXNVbmRlZmluZWQodGhpcy5tb2RpZmllcnMpKVxuXHRcdHRoaXMuY3JlYXRlTW9kaWZpZXJzKCk7XG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgbW9kaWZpZXJzID0gdGhpcy5nZXRNb2RpZmllcnMoKTtcblx0aWYgKG1vZGlmaWVycylcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xuXHRyZXR1cm4gbnVsbDtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FbGVtZW50LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi83LzIwMTYuXG4gKi9cblxubGV0IGNhY2hlcyA9IHt9O1xuXG5sZXQgQ2FjaGUgPSB7XG5cdGdldDogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlLCBuYW1lc3BhY2UpIHtcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xuXHR9LFxuXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiBrZXkgaW4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRkZWxldGUgdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0Y2xlYXI6IGZ1bmN0aW9uKG5hbWVzYXBjZSkge1xuXHRcdGlmICghbmFtZXNwYWNlKVxuXHRcdFx0Y2FjaGVzID0ge307XG5cdFx0ZWxzZSBpZiAoY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHR9LFxuXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcblx0XHRpZiAoIWNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9DYWNoZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHRmb250U2l6ZTogMTEsXG5cdGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcblx0Zm9udFN0eWxlOiAwLFxuXHRwYWRkaW5nOiAwLFxuXHRsaW5lUGFkZGluZzogMCxcblx0YWxpZ246IFwibGVmdFwiLFxuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwLFxuXHRyb3RhdGlvbjogbnVsbCxcblx0Z2VvbWV0cnk6IHt4OiAwLCB5OiAwLCBhbmNob3JZOiAwLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwfVxufTtcblxuLyoqXG4gKiBUaGUgbGFiZWwgb2JqZWN0IGhhbmRsZXMgbGFiZWwgc2l6aW5nL3Bvc2l0aW9uaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcblx0bGV0IGNhbnZhc1N1cHBvcnRlZCA9IGZhbHNlLCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIHN0cmluZy5cblx0ICovXG5cdGxldCBnZXRTdHJpbmdTaXplID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRpZiAoIXN0ciB8fCBzdHIgPT0gXCJcIilcblx0XHRcdHJldHVybiBbMCwgMF07XG5cblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0dmFyIHNpemU7XG5cblx0XHRpZiAoXy5pc051bGwoY2FudmFzU3VwcG9ydGVkKSkge1xuXHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0XHRjYW52YXNTdXBwb3J0ZWQgPSAhIShzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dCAmJiBzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dCgnMmQnKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbnZhc1N1cHBvcnRlZCkge1xuXHRcdFx0VXRpbHMubG9nKCdMYWJlbCcsICd1c2luZyBjYW52YXMnKTtcblx0XHRcdHZhciBjdHggPSBzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdFx0Y3R4LmZvbnQgPSBmb250U2l6ZSArIFwiIFwiICsgZm9udEZhbWlseSArIFwiIFwiICsgKGJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCIpO1xuXHRcdFx0dmFyIG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQoc3RyKTtcblx0XHRcdHNpemUgPSBbbWVhc3VyZS53aWR0aCwgMTBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge2lkOlwiX0NvbXB1dGVTdHlsZXNJZnJhbWVcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIHZpc2liaWxpdHk6XCJoaWRkZW5cIiwgZGlzcGxheTpcIm5vbmVcIiwgd2lkdGg6XCJhdXRvXCJ9KTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRcdGRvYy5vcGVuKCk7XG5cdFx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+PGRpdiBpZD1cInNpemVNZWFzdXJpbmdEaXZcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHR2YXIgZGl2ID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaXplTWVhc3VyaW5nRGl2XCIpO1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XG5cdFx0XHRkaXYuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XG5cdFx0XHRkaXYuc3R5bGUuZm9udFdlaWdodCA9IGJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJztcblx0XHRcdGRpdi5zdHlsZS5wYWRkaW5nID0gMDtcblx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuXHRcdFx0ZGl2LmlubmVySFRNTCA9IHN0cjtcblxuXHRcdFx0c2l6ZSA9IFtkaXYub2Zmc2V0V2lkdGgsIGRpdi5vZmZzZXRIZWlnaHRdO1xuXHRcdFx0c3RyaW5nTWVhc3VyZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHNpemU7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0dmFyIGFyciA9IFtdO1xuXHRcdHZhciBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemVbMF07XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemVbMV07XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZClbMF07XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpWzBdO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQsIGxhYmVsQ29uZmlnID0ge30pIHtcblx0XHRsYWJlbENvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKGxhYmVsQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XG5cdFx0bGV0IGZvbnRTdHlsZSA9IGxhYmVsQ29uZmlnLmZvbnRTdHlsZTtcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcblx0XHRsZXQgcGFkZGluZyA9IGxhYmVsQ29uZmlnLnBhZGRpbmc7XG5cdFx0bGV0IGxpbmVQYWRkaW5nID0gbGFiZWxDb25maWcubGluZVBhZGRpbmc7XG5cdFx0bGV0IGFsaWduID0gbGFiZWxDb25maWcuYWxpZ247XG5cblx0XHRsZXQgdyA9IGxhYmVsQ29uZmlnLndpZHRoLCBoID0gbGFiZWxDb25maWcuaGVpZ2h0O1xuXHRcdHcgPSB3IDw9IDUgPyBjb250YWluZXJXaWR0aCAqIHcgOiB3O1xuXHRcdGggPSBoIDw9IDUgPyBjb250YWluZXJIZWlnaHQgKiBoIDogaDtcblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXHRcdGxldCBib3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHQvLyB0aGUgcGl2b3QgaXMgdGhlIGNlbnRlciBvZiByb3RhdGlvbiB3aGVuIHRoZSBsYWJlbCBoYXMgYSByb3RhdGlvbiBzcGVjaWZpZWQuXG5cdFx0bGV0IHBpdm90ID0gYWxpZ24gPT0gJ2NlbnRlcicgPyBbMCwgMF0gOiAoYWxpZ24gPT0gJ2xlZnQnID8gWy13cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0gOiBbd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdKTtcblxuXHRcdC8vIHRoZSBtYXhpbXVtIGJvdW5kcyBmb3IgdGhlIGxhYmVsLCB1c2VkIHRvIHBvc2l0aW9uIGlubGluZSBlZGl0b3Jcblx0XHRnZW9tZXRyeS53aWR0aCA9IE1hdGgubWF4KHcgKyAyICogcGFkZGluZywgZ2VvbWV0cnkud2lkdGgpO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IE1hdGgubWF4KGggKyAyICogcGFkZGluZywgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IGxhYmVsQ29uZmlnLCBsYWJlbDogd3JhcHBlZExhYmVsLCBfbGFiZWw6IGxhYmVsLFxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQsIGFuY2hvciwgbGluZUhlaWdodDogd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgKyBsaW5lUGFkZGluZyxcblx0XHRcdHBpdm90LCBib3VuZHMsIG1heEJvdW5kc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIGxpbmssIGxhYmVsQ29uZmlnKSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0aWYgKCFsYWJlbCB8fCBsYWJlbCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgbGFiZWxDb25maWcud2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRsZXQgcG9zID0gbGluay5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt4OiBsYWJlbENvbmZpZy5sYWJlbExvY2F0aW9uLzIsIG9mZnNldFg6IGxhYmVsQ29uZmlnLmxhYmVsT2Zmc2V0WCB8fCAwLCBvZmZzZXRZOiBsYWJlbENvbmZpZy5sYWJlbE9mZnNldFkgfHwgMH0pO1xuXG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHg7XG5cdFx0c3dpdGNoIChsYWJlbENvbmZpZy5hbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0XHRhbmNob3IgPSBcImVuZFwiO1xuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IGxhYmVsQ29uZmlnLCBsYWJlbDogd3JhcHBlZExhYmVsLCBfbGFiZWw6IGxhYmVsLFxuXHRcdFx0ZHgsIGR5OiAtd3JhcHBlZExhYmVsLmhlaWdodC8yICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQsXG5cdFx0XHRhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0LFxuXHRcdFx0Ym91bmRzOiBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCB3cmFwcGVkTGFiZWwud2lkdGgsIHdyYXBwZWRMYWJlbC5oZWlnaHQpXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHtcblx0XHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlzaWJsZSgpICYmIHRoaXMua2V5ICE9IGtleSkge1xuXHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHQvL2xldCBwb3MgPSBVdGlscy51bnNjYWxlKGdyYXBoLCBbY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJYKCkgKyBib3VuZHMueCwgY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJZKCkgKyBib3VuZHMueSArIDVdKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBib3gubWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIGJveC5tYXhCb3VuZHMudG9wXTtcblx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IChib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiAoYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy52aXNpYmxlKCkpIHJldHVybjtcblxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGV4dEVsKVxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcblxuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRpZiAoIWNhbmNlbClcblx0XHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci51cGRhdGUnLCBbdGhpcy5rZXksIHRoaXMuaW5wdXQudmFsdWVdKTtcblxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBFbGVtZW50IHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHJldHVybiBMYWJlbC5nZXRMYWJlbEJveEZvckVkZ2UodGhpcy5wcm9wKCdsYWJlbCcpLCB0aGlzLmdldFZpZXcoa2V5KSwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBwYWlyIG9mIHBvaW50cyBhcyByZWZlcmVuY2UgdG8gdGhlIGNhbGN1bGF0aW9uIG9mIHN0YXJ0IGFuZCBlbmQgcG9pbnRzLlxuXHQgKi9cblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRpZiAodGhpcy5zb3VyY2UpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdzdGFydCcpKTtcblxuXHRcdGlmICh0aGlzLnRhcmdldClcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ2VuZCcpKTtcblxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgcmVmUHRzID0gdGhpcy5nZXRSZWZlcmVuY2VQb2ludHMoa2V5KTtcblx0XHRsZXQgdGVybWluYWxzID0gW107XG5cblx0XHRsZXQgZ2V0Qm91bmQgPSBmdW5jdGlvbihwdCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUocHQueCwgcHQueSwgMywgMyk7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZSkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzBdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzBdKSwgcmVmUHRzWzFdLCB0cnVlKX0pO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnRhcmdldC5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCd0YXJnZXRQb3J0JyksIHJlZlB0c1swXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMV0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMV0pLCByZWZQdHNbMF0sIHRydWUpfSk7XG5cdFx0cmV0dXJuIHRlcm1pbmFscztcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0c2hhcGUgPSBMaW5rLmdldExpbmsodGhpcy5nZXRUZXJtaW5hbFZpc3VhbChrZXksIGNvbmZpZy5vcnRob2dvbmFsKSwgY29uZmlnLCB0aGlzLnByb3AoJ3N0YXJ0TWFya2VyJyksIHRoaXMucHJvcCgnZW5kTWFya2VyJykpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWRnZTp7JyArICghdGhpcy5zb3VyY2UgPyAnbnVsbCcgOiB0aGlzLnNvdXJjZS5pZCkgKyAnLS0nICsgKCF0aGlzLnRhcmdldCA/ICdudWxsJyA6IHRoaXMudGFyZ2V0LmlkKSArICd9Jztcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KG51bGwpO1xuXHR9XG59XG5FZGdlLm5hbWVzcGFjZSA9IFwiRWRnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcblxuLypcblxuRWRnZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiYWxsb3dEYW5nbGluZ0VkZ2VzXCIpKSB7XG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcblx0fSBlbHNlXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlICYmIHRoaXMudGFyZ2V0ICYmIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKSAmJiB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSAmJiB0aGlzLnRhcmdldC5pc1Zpc2libGUoKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5sZXQgTWFya2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gYXJyb3coc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWFuZ2xlKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3ZhbChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciByID0gc2l6ZSAvIDI7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLXIsIC1yLCBzaXplLCBzaXplKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFswLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+Jztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbW9uZChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGdldE1hcmtlcihjb25maWcsIHNvdXJjZSkge1xuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XG5cdFx0bWFya2VyLmlkID0gY29uZmlnLmlkO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xuXHRyZWdpc3RyeVsnb3ZhbCddID0gb3ZhbDtcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XG5cblx0cmV0dXJuIHtcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxuY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxuXHRcdFx0XHRjb25maWcub3JpZW50YXRpb24gPSBMYXlvdXQuSE9SSVpPTlRBTDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcblx0XHR9XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHR9XG5cblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkxheW91dC5WRVJUSUNBTCA9IDA7XG5MYXlvdXQuSE9SSVpPTlRBTCA9IDE7XG5cbkxheW91dC5ERUZBVUxUUyA9IHtcblx0b3JpZW50YXRpb246IExheW91dC5WRVJUSUNBTFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6dGhpcy5pZCwgdGFiaW5kZXg6MH0sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJveCk7XG5cdFx0aWYgKGNvbmZpZy5sYXlvdXQpIHtcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcblx0XHRcdHRoaXMubGF5b3V0ID0gbmV3IGxheW91dENsYXNzKGNvbmZpZy5sYXlvdXQuY29uZmlnKTtcblx0XHRcdGRlbGV0ZSBjb25maWcubGF5b3V0O1xuXHRcdH1cblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcblx0XHR0aGlzLl9ncmFwaCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z3JhcGgoZ3JhcGgpIHtcblx0XHRpZiAoZ3JhcGgpIHtcblx0XHRcdHRoaXMuX2dyYXBoID0gZ3JhcGg7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMsIHZpZXdwb3J0KTtcblx0XHR2YXIgdyA9IHRoaXMuYm94Lm9mZnNldFdpZHRoO1xuXHRcdHZhciBzY2FsZSA9IHcgLyB2aWV3cG9ydC53aWR0aDtcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcblx0fVxuXG5cdHRyYW5zbGF0ZSh0KSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIFswLCAwXTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdClcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcblx0XHRcdHJldHVybiBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7XG5cdH1cblxuXHRzY2FsZShrKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIDEuMDtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdCkgcmV0dXJuIDEuMDtcblxuXHRcdFx0cmV0dXJuIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJvdXRcIjpcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUoKSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4LCB5LCBzY2FsZSkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybjtcblx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0aWYgKCFyb290KSByZXR1cm47XG5cblx0XHQvKmlmICghXy5pc051bGwoeCkgJiYgIV8uaXNOdWxsKHkpKVxuXHRcdFx0cm9vdC5tb3ZlKHgsIHkpO1xuXHRcdGlmIChzY2FsZSkge1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1heCh0aGlzLmdldFByb3BlcnR5KFwibWluWm9vbVwiKSwgTWF0aC5taW4odGhpcy5nZXRQcm9wZXJ0eShcIm1heFpvb21cIiksIHNjYWxlKSk7XG5cdFx0XHRyb290LnNldFByb3BlcnR5KCdzY2FsZScsIHNjYWxlKTtcblx0XHRcdC8vIHN5bmMgdGhlIHNjYWxlIGJldHdlZW4gdGhlIHpvb20gYmVoYXZpb3IgYW5kIHRoZSBncmFwaFxuXHRcdFx0dmFyIHpvb20gPSB0aGlzLmV2ZW50RGlzcGF0Y2hlci56b29tO1xuXHRcdFx0aWYgKHpvb20uc2NhbGUoKSAhPSBzY2FsZSlcblx0XHRcdFx0em9vbS5zY2FsZShzY2FsZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKEdyYXBoLkVWRU5UX1RZUEVTLlJFRlJFU0gpOyovXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpLCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0LnN1YnN0cmluZygyLCBwYXJ0Lmxlbmd0aCAtMSkudHJpbSgpO1xuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dCA9IF8udGVtcGxhdGUodCwge2ludGVycG9sYXRlOiAvI3soW1xcc1xcU10rPyl9L2d9KShvYmopO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4xLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9zdmc+Jyk7XG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaCgpLm1hcmtlcnM7XG5cdFx0aWYgKG1hcmtlcnMubGVuZ3RoID4gMClcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XG5cdFx0YnVmLmFwcGVuZCgnPC9kZWZzPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xuXHRcdGZvciAobGV0IG1hcmtlciBvZiBtYXJrZXJzKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBkID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0YnVmLmNsZWFyKCk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyBzZXRDb250ZW50KGVsLCBjb250ZW50KSB7XG5cdFx0aWYgKERvbVV0aWxzLmlzSUUpIHtcblx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0d2hpbGUgKGNoaWxkID0gZWwubGFzdENoaWxkKVxuXHRcdFx0XHRlbC5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRTVkdSZW5kZXJlci5hcHBlbmRDb250ZW50KGVsLCBjb250ZW50KTtcblx0XHR9IGVsc2Vcblx0XHRcdGVsLmlubmVySFRNTCA9IGNvbnRlbnQ7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG59XG5TVkdSZW5kZXJlci5URU1QTEFURVMgPSB7XG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCJncmFwaFwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pc2NhbGUoJHtzY2FsZX0pXCI+I3tjaGlsZHJlbn08L2c+Jyxcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRmb3IgKGxldCBwdCBvZiBzaGFwZS5wb2ludHMpXG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XG5gLnRyaW0oKTtcblx0fSxcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xuXHRcdHJldHVybiBgXG48cGF0dGVybiBpZD1cIkdyaWRQYXR0ZXJuXCIgd2lkdGg9XCIke3NpemV9XCIgaGVpZ2h0PVwiJHtzaXplfVwiIHBhdHRlcm5Vbml0cz1cInVzZXJTcGFjZU9uVXNlXCI+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuPC9wYXR0ZXJuPmAudHJpbSgpO1xuXHR9LFxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcbiAgIGlmIChib3gpIHslPlxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cblx0PCUgaWYgKGJveC5iYWNrZ3JvdW5kQ29sb3IpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIGZpbGw9XCI8JT1ib3guYmFja2dyb3VuZENvbG9yJT5cIi8+XG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxuXHRcdF8uZWFjaChib3gubGFiZWwsIGZ1bmN0aW9uKHZhbHVlLCBsaW5lKSB7JT5cblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxuXHRcdDwlfSk7fSBlbHNlIHsgJT5cblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+XG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9