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
		type: "direct",
		showGauge: false,
		orthogonal: false
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
		}, {
			key: "controlPts",
			get: function get() {}
	
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
	
				if (!controlPts && shape.round) {
					// render rounded line joins.
					var newPts = [];
					controlPts = [];
					var prev = points[0],
					    next = void 0,
					    _d = void 0,
					    corner = void 0;
					newPts.push(prev);
					for (var i = 1; i < points.length - 1; i++) {
						next = points[i];
						// set the control point first.
						controlPts[2 * i] = [next, next];
						// check the size of the corner.
						_d = prev.distance(next);
						corner = Math.min(shape.round, _d / 2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3MzlkODUyNzExNjg2ZTFlZmU1NyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iZWFuL2JlYW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifSIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9ncmFwaC9HcmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvTm9kZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9DYWNoZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9MYWJlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvRWRnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9NYXJrZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9MYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZkEsaUJBQU0sUUFBTixDQUFlLFdBQWY7QUFDQSxpQkFBTSxRQUFOLENBQWUsU0FBZjs7bUJBRWU7QUFDZCx3QkFEYztBQUVkLHdCQUZjO0FBR2Qsd0JBSGM7QUFJZCw4QkFKYztBQUtkLHNDQUxjO0FBTWQsd0JBTmM7QUFPZCxzQkFQYztBQVFkLHdCQVJjO0FBU2QsZ0NBVGM7QUFVZCw0QkFWYztBQVdkLHNCQVhjO0FBWWQsNENBWmM7QUFhZCx3QkFiYztBQWNkLDBCQWRjO0FBZWQsd0JBZmM7QUFnQmQsNEJBaEJjO0FBaUJkLHNCQWpCYztBQWtCZCxzQkFsQmM7QUFtQmQsMEJBbkJjO0FBb0JkLGtDQXBCYztBQXFCZCw4QkFyQmM7QUFzQmQsb0NBdEJjOzs7Ozs7O0FDMUJmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0FrQmpCLElBbEJpQixFQUFYLEVBa0JFLEVBQUMsVUFBVSxNQUFWLEVBbEJILENBQVA7RUExQ0Q7O21CQStEZSxZIiwiZmlsZSI6InFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicWdyYXBoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uXG4gKiovIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA3MzlkODUyNzExNjg2ZTFlZmU1N1xuICoqLyIsImltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vZ2VvbWV0cnkvTGluZVwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEVsbGlwc2UgZnJvbSBcIi4vZ2VvbWV0cnkvRWxsaXBzZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xuaW1wb3J0IEVsZW1lbnQgZnJvbSBcIi4vZ3JhcGgvRWxlbWVudFwiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vZ3JhcGgvTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgRmxvd0xheW91dCBmcm9tIFwiLi9sYXlvdXQvRmxvd0xheW91dFwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi92aWV3L1JlbmRlcmVyXCI7XG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0RWxlbWVudCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXJcbn07XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9pbmRleC5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24obmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbihuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHt9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbih0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5hc3NpZ24oe30sIGRlZmF1bHRUeXBlLCB0eXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbihjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24oKXsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24ob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24oanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7IHJldHVybjsgfVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpPF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV09PW5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1ZykgeyByZXR1cm47IH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGg8MTApIHsgbmFtZT1uYW1lKycgJzsgfVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkrXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbihib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xuXHRcdHJldHVybiBbeCArIGdlb21ldHJ5LndpZHRoICogZ2VvbWV0cnkuYW5jaG9yWCArIGdlb21ldHJ5Lm9mZnNldFgsXG5cdFx0XHR5ICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbih2aWV3LCBvKSB7XG5cdFx0dmFyIHNjYWxlID0gdmlldy5zY2FsZSgpO1xuXHRcdHZhciB0ID0gdmlldy50cmFuc2xhdGUoKTtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCpzY2FsZSt0WzBdLCBvLnkqc2NhbGUrdFsxXSwgby53aWR0aCpzY2FsZSwgby5oZWlnaHQqc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54KnNjYWxlK3RbMF0sIG8ueSpzY2FsZSt0WzFdKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gW29bMF0qc2NhbGUrdFswXSwgb1sxXSpzY2FsZSt0WzFdXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHNjYWxlZCwgaS5lLiwgcmVsYXRpdmUgcG9zaXRpb24gY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdmlldyB0aGUgZ3JhcGggdmlldyBvYmplY3Rcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHRzY2FsZTogZnVuY3Rpb24odmlldywgbykge1xuXHRcdHZhciBzY2FsZSA9IHZpZXcuc2NhbGUoKTtcblx0XHR2YXIgdCA9IHZpZXcudHJhbnNsYXRlKCk7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlLCBvLndpZHRoL3NjYWxlLCBvLmhlaWdodC9zY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54LXRbMF0pL3NjYWxlLCAoby55LXRbMV0pL3NjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdLXRbMF0pL3NjYWxlLCAob1sxXS10WzFdKS9zY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldE9ialByb3BlcnR5OiBmdW5jdGlvbihvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLmdldFByb3BlcnR5ICYmIF8uaXNGdW5jdGlvbihvYmouZ2V0UHJvcGVydHkpKVxuXHRcdFx0cmV0dXJuIG9iai5nZXRQcm9wZXJ0eShwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGVzIHRoZSBzaW1pbGFyaXR5IG9mIHRoaXMgUmF5IHdpdGggYW5vdGhlci5cblx0ICogU2ltaWxhcml0eSBpcyBkZWZpbmVkIGFzIHRoZSBhYnNvbHV0ZSB2YWx1ZSBvZiB0aGUgZG90UHJvZHVjdCgpXG5cdCAqIEBwYXJhbSBwMlxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0c2ltaWxhcml0eShwMikge1xuXHRcdHJldHVybiBNYXRoLmFicyh0aGlzLmRvdFByb2R1Y3QocDIpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lLCB0aGlzKSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XG5cdH1cblxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxuXHRcdGlmIChJZHggPiAwKVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHNBZ2VudC5zdWJzdHJpbmcoSWR4ICsgNSwgc0FnZW50LmluZGV4T2YoXCIuXCIsIElkeCkpKTtcblxuXHRcdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXG5cdFx0XHRyZXR1cm4gMTE7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpLFxuXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xuXHRcdC8vIEluc3RhbGxUcmlnZ2VyOiBGaXJlZm94J3MgQVBJIHRvIGluc3RhbGwgYWRkLW9uc1xuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXHR9KSgpLFxuXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoZWwsIGF0dHJpYnMsIHN0eWxlcyk7XG5cdFx0aWYgKGh0bWwpXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblxuXHRjcmVhdGVFbGVtZW50QnlTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XG5cdH0sXG5cblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcblx0XHRpZiAoYXR0cmlicykge1xuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXMpIHtcblx0XHRcdF8uZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdHRlc3RFbGVtZW50OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xuXHR9LFxuXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0aWYgKHRoaXMudGVzdEVsZW1lbnQobm9kZSwgbWV0aG9kKSApXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XG5cdH0sXG5cblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCB3ID0gZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQ7XG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0ICsgdy8yLCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wICsgaC8yXTtcblx0fSxcblxuXHRtb3ZlOiBmdW5jdGlvbihlbCwgeCwgeSkge1xuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHR9LFxuXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHcgPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0cmV0dXJuIFt3LCBoXTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XG5cdFx0aWYgKHcpIGVsLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCA9IHt9O1xuXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcblx0XHR2YXIgaW1nLCB0aGF0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhhdC5wcmVsb2FkSW1hZ2VzLmxvYWRlZFt0aGlzLm5hbWVdID0ge3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fTtcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxpc3QucHVzaChpbWcpO1xuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHNyY1xuXHQgKi9cblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWRbc3JjXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXG5cdCAqIEBwYXJhbSBlICBpbnB1dCBldmVudFxuXHQgKi9cblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xuXHRcdHZhciB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcblx0XHRyZXR1cm4gKHRhZ05hbWUgPT0gJ0lOUFVUJyB8fCB0YWdOYW1lID09ICdURVhUQVJFQScgfHwgdGFnTmFtZSA9PSAnU0VMRUNUJyk7XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvRG9tVXRpbHMuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblx0Y29uc3RydWN0b3Ioc3RyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHRpZiAoc3RyKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xuXHR9XG5cblx0YXBwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcmVwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0fVxuXG5cdHJlbW92ZUxhc3QoKSB7XG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZyhzZXApIHtcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXG5cdCAqL1xuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xuXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzOlxuXHQgKlxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKi9cblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xuXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XG5cblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9Jztcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdHR5cGU6IFwiZGlyZWN0XCIsXG5cdHNob3dHYXVnZTogZmFsc2UsXG5cdG9ydGhvZ29uYWw6IGZhbHNlXG59O1xuXG5sZXQgbGlua1R5cGVzID0ge307XG5cbmNsYXNzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0dGhpcy5zdGFydCA9IHRlcm1pbmFsVmlzdWFsWzBdLnBvaW50O1xuXHRcdHRoaXMuZW5kID0gdGVybWluYWxWaXN1YWxbMV0ucG9pbnQ7XG5cdFx0dGhpcy5zdGFydE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzBdLmRpcmVjdGlvbjtcblx0XHR0aGlzLmVuZE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzFdLmRpcmVjdGlvbjtcblx0XHR0aGlzLnN0YXJ0TWFya2VyID0gc3RhcnRNYXJrZXI7XG5cdFx0dGhpcy5lbmRNYXJrZXIgPSBlbmRNYXJrZXI7XG5cdFx0Xy5hc3NpZ24odGhpcywgc2hhcGVDb25maWcpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMaW5rKHRoaXMpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGNvbnRyb2xQdHMoKSB7IHJldHVybiBudWxsOyB9XG5cblx0LyoqXG5cdCAqXG5cdCAqIFJldHVybiB0aGUgdG90YWwgbGVuZ3RoIG9mIHRoaXMgY29ubmVjdGlvbiwgaW4gcGl4ZWxzLlxuXHQgKi9cblx0Z2V0TGVuZ3RoKCkge1xuXHRcdGlmICghXy5pc1VuZGVmaW5lZCh0aGlzLmxlbmd0aCkpIHJldHVybiB0aGlzLmxlbmd0aDtcblxuXHRcdHZhciBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHR2YXIgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIHRoaXMubGVuZ3RoID0gbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIHdoZXJlIHRvIHB1dCBtb2RpZmllcnMgb3IgbGFiZWwuLlxuXHQgKlxuXHQgKiBAcGFyYW0gZ2VvbWV0cnk6IGRlZmluZXMgaG93IGZhciBhbG9uZyB0aGUgZWRnZSBzaG91bGQgdGhlIHBvaW50IGJlIHBsYWNlZC5cblx0ICogQHJldHVybiAqW10gdGhlIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdHZhciBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMuZ2V0TGVuZ3RoKCk7XG5cdFx0aWYgKF8uaXNTdHJpbmcocCkpIHtcblx0XHRcdGlmICgvJSQvLnRlc3QocCkpIHtcblx0XHRcdFx0cCA9IHMocCkuc3RyTGVmdCgnJScpLnRvTnVtYmVyKCkgLyAxMDA7XG5cdFx0XHR9IGVsc2UgaWYgKC9weCQvLnRlc3QocCkpIHtcblx0XHRcdFx0cCA9IHMocCkuc3RyTGVmdCgncHgnKS50b051bWJlcigpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAocCA+PSAtMSAmJiBwIDw9IDEpIHAgKj0gbDtcblx0XHRpZiAocCA8IDApIHAgPSBsICsgcDtcblx0XHRpZiAocCA+IGwpIHAgPSBsO1xuXG5cdFx0dmFyIHBvaW50cyA9IHRoaXMuZ2V0UG9pbnRzKCksIGQsIHBvaW50LCBkaXI7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRkID0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdGlmIChwIDw9IGQpIHtcblx0XHRcdFx0Ly8gd2UndmUgbG9jYXRlZCB0aGUgbGluZSBzZWdtZW50LlxuXHRcdFx0XHRwb2ludCA9IHBvaW50c1tpXS5jbG9uZSgpO1xuXHRcdFx0XHRkaXIgPSBwb2ludC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pO1xuXHRcdFx0XHRwb2ludC50cmFuc2xhdGUoZGlyLmdldFNjYWxlZChwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cCAtPSBkO1xuXHRcdH1cblxuXHRcdC8vIHJldHVybiB0aGUgbGFzdCBwb2ludC5cblx0XHRpZiAoIXBvaW50KVxuXHRcdFx0cG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuXHRcdHJldHVybiBbcG9pbnQueCArIGdlb21ldHJ5Lm9mZnNldFgsIHBvaW50LnkgKyBnZW9tZXRyeS5vZmZzZXRZXTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluayc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TGluayh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGxpbmtDbGFzcyA9IGxpbmtUeXBlc1tzaGFwZUNvbmZpZy50eXBlXTtcblx0XHRpZiAobGlua0NsYXNzKVxuXHRcdFx0cmV0dXJuIG5ldyBsaW5rQ2xhc3ModGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0XHRjb25zb2xlLmxvZygnbGluayB0eXBlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy50eXBlKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5jbGFzcyBEaXJlY3RMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cbn1cblxuY2xhc3MgQmV6aWVyTGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2xQdHMoKSB7XG5cdFx0bGV0IHMgPSB0aGlzLnBvaW50c1swXSwgZSA9IHRoaXMucG9pbnRzWzFdO1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBudWxsO1xuXHRcdHB0c1sxXSA9IFtdO1xuXHRcdGlmICh0aGlzLnN0YXJ0Tm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KHMueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIHMueSk7XG5cdFx0fVxuXHRcdGlmICh0aGlzLmVuZE5vcm1hbC54ID09IDApIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludChlLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBlLnkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXG59XG5cblxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xuXHRcdFx0TUlOX0JVRkZFUjogMTAsXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxuXHRcdFx0bWF4Q2hhbm5lbFdpZHRoOiAxMDBcblx0XHR9KTtcblx0XHRzdXBlcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHtcblx0XHRsZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlSW50ZXJuYWwodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdHBvcyA9IE1hbmhhdHRhbi5wcm9jZXNzUG9zaXRpb25zKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCBwb3MsIHRoaXMuc3RhcnROb3JtYWwueCE9MCk7XG5cdFx0aWYgKHRoaXMuYXV0b1JvdXRlKSB7XG5cdFx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0XHR2YXIgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcblx0XHRcdHZhciBjb250YWluZXIgPSBlZGdlLnNvdXJjZS5nZXRDb21tb25BbmNlc3RvcihlZGdlLnRhcmdldCk7XG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGNvbnRhaW5lci5nZXREZXNjZW5kYW50cygpO1xuXHRcdFx0dmFyIGluZGV4ID0gMDtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRub2RlID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cblx0XHRcdFx0aWYgKG5vZGUuZXhjbHVkZUZyb21Sb3V0aW5nKGVkZ2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnNvdXJjZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2UudGFyZ2V0KSkgY29udGludWU7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2Uuc291cmNlKVxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnRhcmdldClcblx0XHRcdFx0ZW5kQm94ID0gaW5kZXg7XG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxuXHRcdFx0XHR0aGlzLmF1dG9Sb3V0ZShwb3MsIGNvbnRhaW5lci5nZXRCb3VuZHMoZG9jdW1lbnQpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0fVxuXHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2xQdHMoKSB7XG5cdFx0XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIHJvdXRlIGJhc2VkIG9uIHRoZSBzdGFydCwgZW5kIGFuZCBzdGFydE5vcm1hbCBhbmQgZW5kTm9ybWFsXG5cdCAqIE5vbmUgb2YgdGhlIHBhcmFtZXRlcnMgY2FuIGJlIG51bGxcblx0ICogVE9ETzogVGhpcyBtZXRob2QgY291bGQgdXNlIHNvbWUgaW1wcm92ZW1lbnQuLi5cblx0ICovXG5cdHN0YXRpYyByb3V0ZUludGVybmFsKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBkaXJlY3Rpb24gPSBzdGFydC5nZXREaXJlY3Rpb24oZW5kKTtcblx0XHR2YXIgYXZlcmFnZSA9IHN0YXJ0LmdldE1pZFBvaW50KGVuZCk7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHZhciBob3Jpem9udGFsID0gc3RhcnROb3JtYWwueCAhPSAwO1xuXHRcdHBvc1swXSA9IGhvcml6b250YWwgPyBzdGFydC55IDogc3RhcnQueDtcblxuXHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHR2YXIgaTtcblx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChlbmROb3JtYWwpID09IDApIHtcblx0XHRcdGlmICgoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID49IDApXG5cdFx0XHRcdCYmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDw9IDApKSB7XG5cdFx0XHRcdC8vIDBcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIDJcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApXG5cdFx0XHRcdFx0aSA9IHN0YXJ0Tm9ybWFsLnNpbWlsYXJpdHkoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoZW5kTm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+IDApXG5cdFx0XHRcdFx0aSA9IGVuZE5vcm1hbC5zaW1pbGFyaXR5KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0aSA9IGhvcml6b250YWwgPyBhdmVyYWdlLnkgOiBhdmVyYWdlLng7XG5cblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZW5kTm9ybWFsKSA+IDApIHtcblx0XHRcdFx0Ly8xXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPj0gMClcblx0XHRcdFx0XHRpID0gc3RhcnROb3JtYWwuc2ltaWxhcml0eShzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRpID0gZW5kTm9ybWFsLnNpbWlsYXJpdHkoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XG5cdFx0XHRcdHBvcy5wdXNoKGkpO1xuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLzMgb3IgMVxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBzdGFydE5vcm1hbC5zaW1pbGFyaXR5KHN0YXJ0LmdldFRyYW5zbGF0ZWQoc3RhcnROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcblx0XHRcdFx0cG9zLnB1c2goaSk7XG5cdFx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMCkge1xuXHRcdFx0XHRcdGkgPSBlbmROb3JtYWwuc2ltaWxhcml0eShlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcblx0XHRcdFx0XHRwb3MucHVzaChpKTtcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cG9zLnB1c2goaG9yaXpvbnRhbCA/IGVuZC55IDogZW5kLngpO1xuXG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8vIFByb2Nlc3MgdGhlIHBvc2l0aW9ucy5cblx0c3RhdGljIHByb2Nlc3NQb3NpdGlvbnMoc3RhcnQsIGVuZCwgcG9zaXRpb25zLCBob3Jpem9udGFsKSB7XG5cdFx0dmFyIHBvcyA9IFtdO1xuXHRcdHBvc1swXSA9IGhvcml6b250YWwgPyBzdGFydC54IDogc3RhcnQueTtcblx0XHR2YXIgaTtcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb3NbaSArIDFdID0gcG9zaXRpb25zW2ldO1xuXHRcdH1cblx0XHRwb3MucHVzaCgoaG9yaXpvbnRhbCA9PSAocG9zaXRpb25zLmxlbmd0aCAlIDIgPT0gMSkpID8gZW5kLnggOiBlbmQueSk7XG5cblx0XHR2YXIgcHRzID0gW107XG5cdFx0cHRzWzBdID0gc3RhcnQ7XG5cdFx0dmFyIHA7XG5cdFx0dmFyIGN1cnJlbnQsIHByZXY7XG5cdFx0Zm9yIChpID0gMjsgaSA8IHBvcy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGhvcml6b250YWwgPSAhaG9yaXpvbnRhbDtcblx0XHRcdHByZXYgPSBwb3NbaSAtIDFdO1xuXHRcdFx0Y3VycmVudCA9IHBvc1tpXTtcblx0XHRcdHAgPSBob3Jpem9udGFsID8gbmV3IFBvaW50KHByZXYsIGN1cnJlbnQpIDogbmV3IFBvaW50KGN1cnJlbnQsIHByZXYpO1xuXHRcdFx0cHRzLnB1c2gocCk7XG5cdFx0fVxuXHRcdHB0cy5wdXNoKGVuZCk7XG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBBdXRvbWF0aWNhbGx5IHJvdXRlIHRoZSBjb25uZWN0aW9uIHRvIGF2b2lkIGludGVyc2VjdGlvbnMgd2l0aCBvdGhlciB2ZXJ0aWNlcy5cblx0ICovXG5cdGF1dG9Sb3V0ZShwdHMsIGNvbnRhaW5lciwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgc2lkZSwgc2lkZTIsIGQsIGJveCwgaW50ZXJzZWN0LCBqO1xuXHRcdHZhciBjaGFubmVsLCBjaGFubmVsMiwgcHQsIGRpcjtcblxuXHRcdHZhciBzdGFydFBhZGRpbmcgPSAwLCBlbmRQYWRkaW5nO1xuXHRcdC8vIGZpcnN0IGdldCB0aGUgc3RhcnQgYW5kIGVuZCBjaGFubmVsXG5cdFx0Ym94ID0gYm94ZXNbZW5kQm94XTtcblx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMl07XG5cdFx0aWYgKHB0LnkgPCBib3gueSlcblx0XHRcdHNpZGUgPSAxO1xuXHRcdGVsc2UgaWYgKHB0LnkgPiBib3gueSArIGJveC5oZWlnaHQpXG5cdFx0XHRzaWRlID0gMztcblx0XHRlbHNlIGlmIChwdC54IDwgYm94LngpXG5cdFx0XHRzaWRlID0gMDtcblx0XHRlbHNlXG5cdFx0XHRzaWRlID0gMjtcblx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBlbmRCb3gsIGJveGVzLCBzaWRlKTtcblx0XHRlbmRQYWRkaW5nID0gY2hhbm5lbC5ob3Jpem9udGFsID8gKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQpLzIgOiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCkvMjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKHB0c1tpKzFdLnggPT0gcHRzW2ldLnggJiYgcHRzW2krMV0ueSA9PSBwdHNbaV0ueSkgY29udGludWU7XG5cdFx0XHRpbnRlcnNlY3QgPSBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0XHRpZiAoIWludGVyc2VjdCkgY29udGludWU7XG5cdFx0XHRqID0gaW50ZXJzZWN0WzBdO1xuXHRcdFx0c2lkZSA9IGludGVyc2VjdFsxXTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUpO1xuXHRcdFx0c3dpdGNoKHNpZGUpIHtcblx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQoKGNoYW5uZWwucmlnaHQgKyBjaGFubmVsLmxlZnQpLzIsIHB0c1tpXS55KTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDEgOiAzO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueSA9PSBwdHNbaS0xXS55KSAmJiAocHRzW2ktMV0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaS0xXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnkgPT0gcHRzW2krM10ueSkgJiYgKHB0c1tpKzJdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2krMl0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5ib3R0b20gKyBjaGFubmVsMi50b3ApLzIgLSBwdC55O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMCAmJiBwdC54IDw9IHB0c1tpXS54KSB8fCAoc2lkZSA9PSAyICYmIHB0LnggPj0gcHRzW2ldLngpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55ICsgZCksIG5ldyBQb2ludChwdC54LCBwdC55ICsgZCldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQocHRzW2ldLngsIChjaGFubmVsLmJvdHRvbSArIGNoYW5uZWwudG9wKS8yKTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDAgOiAyO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueCA9PSBwdHNbaS0xXS54KSAmJiAocHRzW2ktMV0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2ktMV0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnggPT0gcHRzW2krM10ueCkgJiYgKHB0c1tpKzJdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpKzJdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5yaWdodCArIGNoYW5uZWwyLmxlZnQpLzIgLSBwdC54O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMSAmJiBwdC55IDw9IHB0c1tpXS55KSB8fCAoc2lkZSA9PSAzICYmIHB0LnkgPj0gcHRzW2ldLnkpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLnggKyBkLCBwdHNbaV0ueSksIG5ldyBQb2ludChwdC54ICsgZCwgcHQueSldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbWF4IHBvaW50cy5cblx0XHRcdGlmIChpID4gMjApIHJldHVybjtcblx0XHRcdGlmIChwdCAmJiAocHQueCAhPSBwdHNbaV0ueCB8fCBwdC55ICE9IHB0c1tpXS55KSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkrMSwgMCwgcHQpO1xuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdH1cblx0fVxuXG5cdF9oYXNJbnRlcnNlY3Rpb24ocHRzLCBib3hlcykge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoYm94ZXNbal0uZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pID49IDApXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIGJveCwgc2lkZSwgc2F2ZWRJbmRleCA9IG51bGwsIHNhdmVkU2lkZSA9IG51bGw7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChpID09IDAgJiYgaiA9PSBzdGFydEJveCkgfHwgKGkgPT0gcHRzLmxlbmd0aCAtIDIgJiYgaiA9PSBlbmRCb3gpKVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0c2lkZSA9IGJveC5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSk7XG5cdFx0XHRpZiAoc2lkZSA+PSAwKSB7XG5cdFx0XHRcdGlmIChzYXZlZEluZGV4ID09IG51bGwpIHtcblx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChib3hlc1tzYXZlZEluZGV4XS5kaXN0YW5jZShwdHNbaV0pID4gYm94LmRpc3RhbmNlKHB0c1tpXSkpIHtcblx0XHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNhdmVkSW5kZXggIT0gbnVsbClcblx0XHRcdHJldHVybiBbc2F2ZWRJbmRleCwgc2F2ZWRTaWRlXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgYnJlYWtQdCwgYm94LCBzaWRlKSB7XG5cdFx0dmFyIGRpcjtcblx0XHR2YXIgcDtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cCA9IFwieVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cCA9IFwieFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly9maXJzdCB0cnkgdGhlIGJyZWFrcHQuXG5cdFx0ZGlyID0gX2dldFJvdXRlRGlyZWN0aW9uKGJyZWFrUHQsIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0ZGlyID0gLV9nZXRSb3V0ZURpcmVjdGlvbihwdHNbMF0sIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRcdGlmIChicmVha1B0W3BdIDwgYm94LmdldENlbnRlcigpW3BdKVxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcjtcblx0fVxuXG5cdF9nZXRSb3V0ZURpcmVjdGlvbihwdDEsIHB0Mikge1xuXHRcdGlmIChwdDEueCA9PSBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk47XG5cdFx0fSBlbHNlIGlmIChwdDEueSA9PSBwdDIueSkge1xuXHRcdFx0aWYgKHB0MS54IDwgcHQyLngpIHJldHVybiBQb2ludC5FO1xuXHRcdFx0cmV0dXJuIFBvaW50Llc7XG5cdFx0fSBlbHNlIGlmIChwdDEueCA8IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNFO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5FO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNXO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5XO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaW5kZXgsIGJveGVzLCBzaWRlKSB7XG5cdFx0dmFyIG1heENoYW5uZWxXaWR0aCA9IHRoaXMubWF4Q2hhbm5lbFdpZHRoO1xuXHRcdHZhciBib3gxID0gYm94ZXNbaW5kZXhdLCBib3gyO1xuXHRcdHZhciBwdCwgaTtcblx0XHR2YXIgY2hhbm5lbCA9IHt9LCBsLCB0LCBiLCByO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0TGVmdCgpO1xuXHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gcHQueDtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRyID0gYm94ZXNbaV0uZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyID49IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY2hhbm5lbC5yaWdodCAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cHQgPSBib3gxLmdldFRvcCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRiID0gYm94ZXNbaV0uZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoYiA+PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY2hhbm5lbC5ib3R0b20gLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cHQgPSBib3gxLmdldFJpZ2h0KCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRjaGFubmVsLmxlZnQgPSBwdC54O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0bCA9IGJveGVzW2ldLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChsIDw9IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkge1xuXHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNoYW5uZWwubGVmdCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cHQgPSBib3gxLmdldEJvdHRvbSgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLnRvcCA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0aWYgKGJveDIuZ2V0VG9wKCkueSA8PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gYm94Mi5nZXRUb3AoKS55KVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkge1xuXHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNoYW5uZWwudG9wICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhbm5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIGEgbGluZSBzZWdtZW50IGJ5IGEgc3BlY2lmaWVkIGRpc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0gcHRzIHRoZSBsaXN0IG9mIHBvaW50cy5cblx0ICogQHBhcmFtIGkgdGhlIGluZGV4IG9mIHRoZSBzZWdtZW50LlxuXHQgKiBAcGFyYW0gZCB0aGUgZGlzdGFuY2UgdG8gbW92ZS5cblx0ICogQHBhcmFtIHN0YXJ0UGFkZGluZ1xuXHQgKiBAcGFyYW0gZW5kUGFkZGluZ1xuXHQgKi9cblx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKSB7XG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgd2UgbmVlZCB0byBhZGQgbmV3IGxpbmUgc2VnbWVudHMuXG5cdFx0dmFyIGRpciwgbCwgcHQ7XG5cdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgc3RhcnRpbmcgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbMF0uZ2V0RGlyZWN0aW9uKHB0c1sxXSk7XG5cdFx0XHRpZiAoIXN0YXJ0UGFkZGluZylcblx0XHRcdFx0c3RhcnRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKHN0YXJ0UGFkZGluZywgcHRzWzBdLmRpc3RhbmNlKHB0c1sxXSkvMik7XG5cdFx0XHRwdCA9IHB0c1swXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKDEsIDAsIHB0KTtcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBlbmQgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbcHRzLmxlbmd0aC0xXS5nZXREaXJlY3Rpb24ocHRzW3B0cy5sZW5ndGgtMl0pO1xuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxuXHRcdFx0XHRlbmRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKGVuZFBhZGRpbmcsIHB0c1twdHMubGVuZ3RoLTFdLmRpc3RhbmNlKHB0c1twdHMubGVuZ3RoLTJdKS8yKTtcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKHB0cy5sZW5ndGggLSAxLCAwLCBwdCk7XG5cdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocHRzW2ldLnkgPT0gcHRzW2krMV0ueSkge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueSA9PSBwdHNbaV0ueSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueSA9PSBwdHNbaSsyXS55KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS55ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS55ICs9IGQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnggPT0gcHRzW2ldLngpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnggPT0gcHRzW2krMl0ueClcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueCArPSBkO1xuXHRcdFx0cHRzW2krMV0ueCArPSBkO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIG1ldGhvZCB3aWxsIG1lcmdlIHRoZSByZWR1bmRhbnQgc2VnbWVudHMuXG5cdCAqL1xuXHRfbWVyZ2VTZWdtZW50cyhwdHMpIHtcblx0XHR2YXIgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XG5cdFx0dmFyIGgyO1xuXHRcdGZvciAodmFyIGkgPSBwdHMubGVuZ3RoIC0gMjsgaSA+PSAxOyBpLS0pIHtcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcblx0XHRcdGlmIChoMiA9PSBoMSB8fCAocHRzW2ldLmVxdWFscyhwdHNbaS0xXSkpKVxuXHRcdFx0XHRwdHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRoMSA9ICFoMTtcblx0XHR9XG5cdH1cbn1cblxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XG5saW5rVHlwZXNbJ2JlemllciddID0gQmV6aWVyTGluaztcbmxpbmtUeXBlc1snZW50aXR5UmVsYXRpb25zJ10gPSBFbnRpdHlSZWxhdGlvbnM7XG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldKSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIG5zLCBzdGFjayA9IFtdLCBpc1Jvb3QgPSBmYWxzZTtcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XG5cdFx0XHRpZiAobnMpIHtcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xuXHRcdFx0XHRpZiAoaXNSb290KSB7XG5cdFx0XHRcdFx0bnMgPSBucy5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWV2ZW50Lm5zVGFyZ2V0KSBldmVudC5uc1RhcmdldCA9IHRhcmdldDtcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcblx0XHRcdH1cblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xuXHRcdH1cblx0XHRpZiAoIWlzUm9vdClcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcblxuXHRcdC8vIHRhcmdldCBzdGFjayBpcyBhIHN0YWNrIG9mIGFsbCB0aGUgbnMgdGFyZ2V0cyB1cCB0byB0aGUgb25lIHdpdGggdGhlIGRhdGEgYmluZGluZy5cblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XG5cdFx0aWYgKG5zID09ICcnKSBucyA9IHRoaXMucm9vdE5TO1xuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXG5cdCAqL1xuXHRoYW5kbGVFdmVudChldmVudCkge1xuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcblxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xuXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcblx0XHRcdGRhdGEgPSB0aGlzLnJvb3Q7XG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcblx0XHRcdG5zID0gaW5mby5ucztcblx0XHR9XG5cblx0XHQvL1V0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJoYW5kbGVFdmVudCAtIFwiICsgdHlwZSArICc7bnM9JyArIG5zKTtcblxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xuXHRcdFx0dGhpcy5zY2FsZSAqPSBNYXRoLnBvdygyLCBldmVudC53aGVlbERlbHRhICogMC4wMDIpO1xuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xuXHRcdFx0dHlwZSA9ICd6b29tJztcblx0XHR9XG5cblx0XHQvLyBTZWUgaWYgd2Ugc2hvdWxkIGNyZWF0ZSBkcmFnIGV2ZW50c1xuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxuXHRcdFx0Y29uc3QgZHJhZ09iamVjdCA9IHtkYXRhOiBkYXRhLCBwb3M6IG5zID09ICdyb290JyA/IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KSA6IHBvc307XG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXG5cdFx0XHRsZXQgZHJhZ1BvcztcblxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGxldCBjdXJyZW50UG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cblx0XHRcdFx0XHRpZiAoZHJhZ09iamVjdC5wb3NbMF0gPT0gY3VycmVudFBvc1swXSAmJiBkcmFnT2JqZWN0LnBvc1sxXSA9PSBjdXJyZW50UG9zWzFdKSByZXR1cm47XG5cblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSB0cnVlO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHR9O1xuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRyYWdQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0aWYgKHRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHRcdH07XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdH1cblxuXHRcdGlmICghaXNLZXlFdmVudClcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcblxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XG5cdFx0aWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXG5cdCAqL1xuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHRsZXQgbGFzdCwgc3RhY2s7XG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcblx0XHRcdGsgPSBrIHx8IDA7XG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuXHRcdFx0XHR2YXIgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcblx0XHR9O1xuXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xuXHRcdFx0XHRsZXQgaXRlbTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcblx0fVxuXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGtleSkpIHtcblx0XHRcdFx0Xy5mb3JFYWNoKGxpc3RlbmVycywgKGxpc3RlbmVyKSA9PiB7XG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBhZnRlciBkaXNwYXRjaGluZywgZG8gbm90IHByb3BhZ2F0ZS5cblx0XHRpZiAoZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cblxuXHRnZXRQb3NpdGlvbihldmVudCkge1xuXHRcdGNvbnN0IHBvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcblx0XHRpZighIF8uaXNOYU4ocG9zWzBdKSAmJiAhIF8uaXNOYU4ocG9zWzFdKSlcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gcG9zO1xuXHRcdHJldHVybiB0aGlzLmxhc3RQb3NpdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYSBrZXkgZXZlbnQgaGFuZGxlclxuXHQgKiAvLyBLZXkgaXMgb2JqZWN0IHtjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBjb2RlfVxuXHQgKi9cblx0cmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0fTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldIHx8ICh0aGlzLmxpc3RlbmVyc1trZXldID0gW10pO1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMudW5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xuXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlclxuXHQgKi9cblx0cmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCkge1xuXHRcdGlmIChfLmlzQXJyYXkodHlwZSkpIHtcblx0XHRcdF8uZm9yRWFjaCh0eXBlLCAodCkgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyKHQsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgekluZGV4OiB6SW5kZXh9O1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0ZGVsZXRlIHRoaXMucm9vdDtcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG5cdFx0ZGVsZXRlIHRoaXMuZW50ZXJTdGFjaztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGUgcmVnaXN0ZXJlZCBldmVudCB0eXBlIG1hdGNoZXMgdGhlIHJlYWwgZXZlbnQgdHlwZS4gXCIqXCIgaXMgYWxsb3dlZCBhcyBhIHdpbGQgY2FyZC5cblx0ICovXG5cdHN0YXRpYyBtYXRjaChuc1R5cGUsIHJlZ2lzdGVyZWRUeXBlKSB7XG5cdFx0Y29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxKVxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcblxuXHRcdGxldCBzdWJzdHIsIGluZGV4ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cdFx0XHRzdWJzdHIgPSBuc1R5cGUuc2xpY2UoaW5kZXgpO1xuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xuXHRcdFx0aWYgKGluZGV4IDwgMClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRzdGF0aWMgbW91c2UoY29udGFpbmVyLCBlKSB7XG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xuXHRcdHZhciBzdmcgPSBjb250YWluZXIub3duZXJTVkdFbGVtZW50IHx8IGNvbnRhaW5lcjtcblx0XHRpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcblx0XHRcdHBvaW50LnggPSBlLmNsaWVudFg7IHBvaW50LnkgPSBlLmNsaWVudFk7XG5cdFx0XHRwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShjb250YWluZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XG5cdFx0fVxuXHRcdHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XG5cdH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICBUaGUgS2V5IFV0aWxpdHkgQ0xhc3MgZm9yIHRoZSBFdmVudCBEaXNwYXRjaGVyICAgICAgICAgIFx0ICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbi8qKlxuICogS0VZIGNvbnN0YW50XG4gKi9cbmNvbnN0IEtFWSA9IHtcblx0QUxUICAgICAgICAgIDogMTgsXG5cdEJBQ0tfU1BBQ0UgICA6IDgsXG5cdENBUFNfTE9DSyAgICA6IDIwLFxuXHRDT05UUk9MICAgICAgOiAxNyxcblx0REVMRVRFICAgICAgIDogNDYsXG5cdERPV04gICAgICAgICA6IDQwLFxuXHRFTkQgICAgICAgICAgOiAzNSxcblx0RU5URVIgICAgICAgIDogMTMsXG5cdEVTQ0FQRSAgICAgICA6IDIyMCxcblx0SE9NRSAgICAgICAgIDogMzYsXG5cdExFRlQgICAgICAgICA6IDM3LFxuXHRNRVRBICAgICAgICAgOiAyMjQsXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcblx0UEFHRV9ET1dOICAgIDogMzQsXG5cdFBBR0VfVVAgICAgICA6IDMzLFxuXHRQQVVTRSAgICAgICAgOiAxOSxcblx0UFJJTlRTQ1JFRU4gIDogNDQsXG5cdFJJR0hUICAgICAgICA6IDM5LFxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXG5cdFNISUZUICAgICAgICA6IDE2LFxuXHRTUEFDRSAgICAgICAgOiAzMixcblx0VEFCICAgICAgICAgIDogOSxcblx0VVAgICAgICAgICAgIDogMzhcblx0Ly9BREQgICAgICAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyA2MSAgOiAxODcsXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcblx0aWYgKCFldmVudCB8fCAhZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuXHQvLyBOZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXZvaWQgdGhpc1xuXHRpZiAoa2V5ID49IDE2ICYmIGtleSA8PSAxOCkge1xuXHRcdGtleSA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcblx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XG5cdGlmIChhbHQpIGJ1Zi5hcHBlbmQoXCJBTFRcIik7XG5cdGlmIChzaGlmdCkgYnVmLmFwcGVuZChcIlNISUZUXCIpO1xuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XG5cdGlmIChrZXkpIGJ1Zi5hcHBlbmQoa2V5KTtcblxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0tleVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9FZGdlXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xuXG5jb25zdCBub2RlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ25vZGUnLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdGVkaXRhYmxlOiB0cnVlLFxuXHRyZXNpemFibGU6IGZhbHNlLFxuXHRzb3VyY2VhYmxlOiB0cnVlLFxuXHR0YXJnZXRhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlXG59O1xuXG5jb25zdCBlZGdlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ2VkZ2UnLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlLFxuXHRzdGFydE1hcmtlcjogbnVsbCxcblx0ZW5kTWFya2VyOiB7XG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXG5cdFx0dHlwZTogJ2Fycm93Jyxcblx0XHRzaXplOiAxMFxuXHR9LFxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xuXHRzdGFydDogWzAsIDBdLFxuXHRlbmQ6IFs0MDAsIDIwMF1cbn07XG5cbmNsYXNzIEdyYXBoIHtcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xuXHRcdHRoaXMuZWRnZXMgPSB7fTtcblxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcuZWRnZVR5cGVzLCBcIkVkZ2VzXCIsIGVkZ2VEZWZhdWx0cyk7XG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XG5cdFx0bGV0IGVkZ2VUeXBlcyA9IFV0aWxzLnR5cGUoRWRnZS5uYW1lc3BhY2UpLCBtYXJrZXIsIG1hcmtlckNvbmZpZztcblx0XHRmb3IgKGxldCB0eXBlIG9mIGVkZ2VUeXBlcy5lbnRyaWVzKCkpIHtcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGVbMV0ucHJvdG90eXBlLnN0YXJ0TWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgdHJ1ZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlWzFdLnByb3RvdHlwZS5lbmRNYXJrZXI7XG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XG5cdFx0ZGVsZXRlIGNvbmZpZy5lZGdlVHlwZXM7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHRcdHRoaXMucm9vdCA9IG51bGw7XG5cdFx0aWYgKG1vZGVsKVxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xuXHR9XG5cblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudHlwZSkge1xuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXG5cdCAqL1xuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpLCBwb3MpIHtcblx0XHRsZXQgTm9kZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIE5vZGUpO1xuXHRcdGxldCBub2RlID0gbmV3IE5vZGVDbGFzcyh0aGlzLCBjb25maWcpO1xuXG5cdFx0aWYgKHBhcmVudClcblx0XHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgbm9kZSwgcG9zKTtcblx0XHRlbHNlIHtcblx0XHRcdHRoaXMucm9vdCA9IG5vZGU7XG5cdFx0XHR0aGlzLnJvb3QucHJvcCgncm9sZScsICdyb290Jyk7XG5cdFx0fVxuXG5cdFx0dGhpcy5ub2Rlc1tub2RlLmlkXSA9IG5vZGU7XG5cdFx0cmV0dXJuIG5vZGU7XG5cdH1cblxuXHRhZGRFZGdlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpLCBmcm9tLCB0bykge1xuXHRcdGxldCBFZGdlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgRWRnZSk7XG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xuXG5cdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBlZGdlKTtcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcblx0XHRyZXR1cm4gZWRnZTtcblx0fVxuXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5nZXRDdXJyZW50Um9vdCgpKSB7XG5cdFx0dmFyIG5vZGVzID0gbW9kZWwubm9kZXM7XG5cdFx0dmFyIGVkZ2VzID0gbW9kZWwuZWRnZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xuXHRcdGRlbGV0ZSBtb2RlbC5lZGdlcztcblxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xuXHRcdGlmIChub2Rlcykge1xuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChlZGdlcykge1xuXHRcdFx0Xy5mb3JFYWNoKGVkZ2VzLCAoZWRnZSkgPT4ge1xuXHRcdFx0XHRsZXQgZnJvbSwgdG87XG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXG5cdFx0XHRcdFx0ZnJvbSA9IHRoaXMubm9kZXNbZWRnZS5mcm9tXTtcblx0XHRcdFx0aWYgKGVkZ2UudG8pXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xuXHRcdFx0XHR0aGlzLmFkZEVkZ2UoZWRnZSwgbm9kZSwgZnJvbSwgdG8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0Q3VycmVudFJvb3QoKSB7XG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5cbkdyYXBoLkRFRkFVTFRTID0ge1xuXHRhbGxvd0RhbmdsaW5nRWRnZXM6IHRydWUsXG5cdG11bHRpQ29ubmVjdDogZmFsc2UsXG5cdHJlYWRPbmx5OiBmYWxzZSxcblx0dmlld09ubHk6IGZhbHNlXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcblxuY2xhc3MgTm9kZSBleHRlbmRzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge30pIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnTicpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5pbkVkZ2VzID0gW107XG5cdFx0dGhpcy5vdXRFZGdlcyA9IFtdO1xuXHRcdHRoaXMucG9ydHMgPSBudWxsO1xuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcblx0fVxuXG5cdGlzQW5jZXN0b3Iobikge1xuXHRcdC8vIFRPRE86IHNob3VsZCB3ZSBtb3ZlIHRoaXMgdG8gZ3JhcGggY2xhc3MgP1xuXHRcdHZhciBub2RlID0gbi5wYXJlbnQ7XG5cdFx0d2hpbGUgKG5vZGUpIHtcblx0XHRcdGlmICh0aGlzID09IG5vZGUpIHsgcmV0dXJuIHRydWU7IH1cblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudDtcblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0cmVtb3ZlRWRnZShlZGdlKSB7XG5cdFx0dmFyIGVkZ2VzID0gZWRnZS5zb3VyY2UgPT0gdGhpcyA/IHRoaXMub3V0RWRnZXMgOiB0aGlzLmluRWRnZXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGVkZ2UgPT0gZWRnZXNbaV0pIHtcblx0XHRcdFx0ZWRnZXMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgaW5jb21pbmcgZWRnZVxuXHRhZGRJbkVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkKVxuXHRcdFx0dGhpcy5pbkVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5pbkVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IG91dGdvaW5nIGVkZ2Vcblx0YWRkT3V0RWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQgfHwgcG9zID4gZWRnZS5sZW5ndGggLSAxKVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMub3V0RWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHRyZW5kZXJDaGlsZHJlbih2aWV3KSB7XG5cdFx0aWYgKHRoaXMuY2hpbGRyZW4pIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRfLmZvckVhY2godGhpcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQoY2hpbGQucmVuZGVyKHZpZXcpKTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHRcdH1cblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRQb3J0KGtleSwgcG9ydE5hbWUgPSAnYXV0bycsIGVuZFB0LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdGlmIChwb3J0TmFtZSA9PSAnYXV0bycpIHtcblx0XHRcdHJldHVybiBzaGFwZS5nZXRQZXJpbWV0ZXIoZW5kUHQsIG9ydGhvZ29uYWwpO1xuXHRcdH1cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcChcImxhYmVsXCIpID8gdGhpcy5wcm9wKFwibGFiZWxcIikgOiBcInVuZGVmaW5lZFwiO1xuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxuXHRcdFx0bGFiZWwgPSBsYWJlbFswXTtcblx0XHRyZXR1cm4gJ05vZGU6e2lkOicgKyB0aGlzLmlkICsgJztsYWJlbDonICsgbGFiZWwgKyAnO3R5cGU6JyArIHRoaXMucHJvcHMuY29uc3RydWN0b3IudHlwZU5hbWUgKyAnfSc7XG5cdH1cbn1cbk5vZGUubmFtZXNwYWNlID0gXCJOb2Rlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBOb2RlO1xuXG4vKlxuXG4vKipcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXG4gKlxuVmVydGV4LnByb3RvdHlwZS5nZXREcmlsbERvd25QYXJlbnQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMucGFyZW50O1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbW9kZSA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RlXCIpIHx8IDM7XG5cdHJldHVybiAhKG1vZGUgJiBHcmFwaC5BTExPV19JTlRFUkFDVElPTlMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5nZXRDcnVtYlRleHQgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcblx0XHRyZXR1cm4gJzxzcGFuPjxpbWcgc3JjPVwid2Vid2IvcHpyZWFkb25seS5wbmdcIiAvPjwvc3Bhbj48c3Bhbj4mbmJzcDsnICsgdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpICsgJzwvc3Bhbj4nO1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwiY29udGFpbmVyXCIpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL05vZGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XG5cbi8qKlxuICogVGhlIEVsZW1lbnQgaXMgdGhlIGNvbW1vbiBwYXJlbnQgZm9yIE5vZGUgYW5kIEVkZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsZW1lbnQge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge2lkOiBfLnVuaXF1ZUlkKCl9KSB7XG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdHRoaXMuaWQgPSBjb25maWcuaWQ7XG5cdFx0ZGVsZXRlIGNvbmZpZy5pZDtcblxuXHRcdC8vIEluaXRpYWxpemUgZGVjb3JhdG9yc1xuXHRcdGlmIChjb25maWcuZGVjb3JhdG9ycykge1xuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcblx0XHRcdGRlbGV0ZSBjb25maWcuZGVjb3JhdG9ycztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIFZpZXcgUHJvcGVydGllc1xuXHRcdGlmIChjb25maWcudmlld3MpIHtcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy52aWV3cztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIHR5cGVcblx0XHR2YXIgdHlwZSA9IGNvbmZpZy50eXBlIHx8IFwiRGVmYXVsdFwiO1xuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIG5vdCBmb3VuZCBcIiArIGNvbmZpZy50eXBlKTtcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XG5cdFx0dGhpcy5wcm9wcyA9IG5ldyB0eXBlKGNvbmZpZyk7XG5cdH1cblxuXHRwcm9wKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKVxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldC9TZXQgcHJvcGVydHkgc3RvcmVkIGJ5IHZpZXdzLlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHZpZXdQcm9wKGtleSA9ICdkZWZhdWx0JywgbmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcblx0XHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jykge1xuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCF0aGlzLnZpZXdQcm9wc1trZXldKVxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XG5cdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRGVjb3JhdG9ycyhkZWNvcmF0b3JzKSB7fVxuXG5cdC8qKlxuXHQgKiBHZXQgcHJvcGVydGllcyBuZWVkZWQgZm9yIHJlbmRlcmluZyB0aGlzIGVsZW1lbnRcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxuXHQgKi9cblx0Z2V0VmlldyhrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0cmV0dXJuIF8uYXNzaWduKHtcblx0XHRcdGlkOiB0aGlzLmlkLFxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRjbGFzc05hbWU6IHRoaXMuY29tcHV0ZWRDbGFzc05hbWUsXG5cdFx0XHRuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlLFxuXHRcdFx0c2NhbGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc2NhbGUnKSB8fCAxLjBcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcblx0XHRpZiAoYm94KVxuXHRcdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRsZXQgYm94ID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94Jywga2V5KTtcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHQvLyBKdXN0IGdldCB0aGUgY29uZmlnIHdpbGwgaGF2ZSBhIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGJvb3N0IGZvciBJRTExIGFuZCBJRTEwLlxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XG5cdFx0cmV0dXJuIGJveDtcblx0fVxuXG5cdGdldCBjb21wdXRlZENsYXNzTmFtZSgpIHtcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcblx0XHRcdGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb21wdXRlZENsYXNzTmFtZSA9IGJ1Zi50b1N0cmluZygnICcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XG5cdH1cblxuXHRnZXQgbmFtZXNwYWNlKCkge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKSkgcmV0dXJuICcnO1xuXHRcdHJldHVybiBcInJvb3QuXCIgKyB0aGlzLnByb3AoXCJyb2xlXCIpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5ncmFwaDtcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xuXHRcdGRlbGV0ZSB0aGlzLnByb3BzO1xuXHRcdGRlbGV0ZSB0aGlzLnZpZXdQcm9wcztcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cdH1cbn1cblxuLypcblxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInhcIiwgTWF0aC5yb3VuZCh4KSk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ5XCIsIE1hdGgucm91bmQoeSkpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCB3KTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBoKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJlZGl0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhblNlbGVjdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInNlbGVjdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJyZXNpemFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRUeXBlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHR5cGVTdHIpIHtcblx0cmV0dXJuIHRoaXMuZ3JhcGguZ2V0VHlwZSh0eXBlU3RyKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNyZWF0ZU1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZGlmaWVycykge1xuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XG5cdHZhciBtb2RpZmllclNldHRpbmdzID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGlmaWVyU2V0dGluZ3NcIik7XG5cdGlmIChtb2RpZmllclNldHRpbmdzKSB7XG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRjb25maWcudHlwZSA9IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKGNvbmZpZy5jbGFzc05hbWUpO1xuXHRcdFx0Y29uZmlnLnNldHRpbmcgPSBtb2RpZmllclNldHRpbmdzW2NvbmZpZy5jbGFzc05hbWVdO1xuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5hZGRNb2RpZmllcihjb25maWcuY2xhc3NOYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyBDaGVjayBmb3Igc2hvd0Fsd2F5cyBzZXR0aW5nc1xuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XG5cdFx0XHRpZiAoc2V0dGluZy5zaG93QWx3YXlzICYmICghdGhpcy5tb2RpZmllcnMgfHwgIXRoaXMubW9kaWZpZXJzW25hbWVdKSkge1xuXHRcdFx0XHR2YXIgY29uZmlnID0ge3R5cGU6IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKG5hbWUpLCBzZXR0aW5nOiBzZXR0aW5nfTtcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmFkZE1vZGlmaWVyKG5hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0fVxufTtcblxuQ2VsbC5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lLCBtb2RpZmllcikge1xuXHRpZiAoIXRoaXMubW9kaWZpZXJzKVxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XG5cblx0aWYgKCFtb2RpZmllci5oYXNPd25Qcm9wZXJ0eShcInNob3dIZWFkZXJcIikpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XG5cblx0Ly8gQGhhY2sgcHJlZmVyYWJseSBzZXQgaXQgaW4gY29uZmlndXJhdGlvbnMuXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IGZhbHNlO1xuXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKF8uaXNVbmRlZmluZWQodGhpcy5tb2RpZmllcnMpKVxuXHRcdHRoaXMuY3JlYXRlTW9kaWZpZXJzKCk7XG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgbW9kaWZpZXJzID0gdGhpcy5nZXRNb2RpZmllcnMoKTtcblx0aWYgKG1vZGlmaWVycylcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xuXHRyZXR1cm4gbnVsbDtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FbGVtZW50LmpzXG4gKiovIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi83LzIwMTYuXG4gKi9cblxubGV0IGNhY2hlcyA9IHt9O1xuXG5sZXQgQ2FjaGUgPSB7XG5cdGdldDogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlLCBuYW1lc3BhY2UpIHtcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xuXHR9LFxuXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiBrZXkgaW4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpO1xuXHR9LFxuXG5cdHJlbW92ZTogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRkZWxldGUgdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XG5cdH0sXG5cblx0Y2xlYXI6IGZ1bmN0aW9uKG5hbWVzYXBjZSkge1xuXHRcdGlmICghbmFtZXNwYWNlKVxuXHRcdFx0Y2FjaGVzID0ge307XG5cdFx0ZWxzZSBpZiAoY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHR9LFxuXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcblx0XHRpZiAoIWNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XG5cdH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhY2hlO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9DYWNoZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHRmb250U2l6ZTogMTEsXG5cdGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcblx0Zm9udFN0eWxlOiAwLFxuXHRwYWRkaW5nOiAwLFxuXHRsaW5lUGFkZGluZzogMCxcblx0YWxpZ246IFwibGVmdFwiLFxuXHR3aWR0aDogMCxcblx0aGVpZ2h0OiAwLFxuXHRyb3RhdGlvbjogbnVsbCxcblx0Z2VvbWV0cnk6IHt4OiAwLCB5OiAwLCBhbmNob3JZOiAwLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwfVxufTtcblxuLyoqXG4gKiBUaGUgbGFiZWwgb2JqZWN0IGhhbmRsZXMgbGFiZWwgc2l6aW5nL3Bvc2l0aW9uaW5nXG4gKi9cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcblx0bGV0IGNhbnZhc1N1cHBvcnRlZCA9IGZhbHNlLCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsO1xuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIHN0cmluZy5cblx0ICovXG5cdGxldCBnZXRTdHJpbmdTaXplID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRpZiAoIXN0ciB8fCBzdHIgPT0gXCJcIilcblx0XHRcdHJldHVybiBbMCwgMF07XG5cblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0dmFyIHNpemU7XG5cblx0XHRpZiAoXy5pc051bGwoY2FudmFzU3VwcG9ydGVkKSkge1xuXHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdFx0XHRjYW52YXNTdXBwb3J0ZWQgPSAhIShzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dCAmJiBzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dCgnMmQnKSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNhbnZhc1N1cHBvcnRlZCkge1xuXHRcdFx0VXRpbHMubG9nKCdMYWJlbCcsICd1c2luZyBjYW52YXMnKTtcblx0XHRcdHZhciBjdHggPSBzdHJpbmdNZWFzdXJlRWwuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRcdFx0Y3R4LmZvbnQgPSBmb250U2l6ZSArIFwiIFwiICsgZm9udEZhbWlseSArIFwiIFwiICsgKGJvbGQgPyBcImJvbGRcIiA6IFwibm9ybWFsXCIpO1xuXHRcdFx0dmFyIG1lYXN1cmUgPSBjdHgubWVhc3VyZVRleHQoc3RyKTtcblx0XHRcdHNpemUgPSBbbWVhc3VyZS53aWR0aCwgMTBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge2lkOlwiX0NvbXB1dGVTdHlsZXNJZnJhbWVcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIHZpc2liaWxpdHk6XCJoaWRkZW5cIiwgZGlzcGxheTpcIm5vbmVcIiwgd2lkdGg6XCJhdXRvXCJ9KTtcblx0XHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRcdGRvYy5vcGVuKCk7XG5cdFx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+PGRpdiBpZD1cInNpemVNZWFzdXJpbmdEaXZcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHR9XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwuc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHR2YXIgZGl2ID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaXplTWVhc3VyaW5nRGl2XCIpO1xuXHRcdFx0ZGl2LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XG5cdFx0XHRkaXYuc3R5bGUuZm9udEZhbWlseSA9IGZvbnRGYW1pbHk7XG5cdFx0XHRkaXYuc3R5bGUuZm9udFdlaWdodCA9IGJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJztcblx0XHRcdGRpdi5zdHlsZS5wYWRkaW5nID0gMDtcblx0XHRcdGRpdi5zdHlsZS53aWR0aCA9IFwiYXV0b1wiO1xuXHRcdFx0ZGl2LmlubmVySFRNTCA9IHN0cjtcblxuXHRcdFx0c2l6ZSA9IFtkaXYub2Zmc2V0V2lkdGgsIGRpdi5vZmZzZXRIZWlnaHRdO1xuXHRcdFx0c3RyaW5nTWVhc3VyZUVsLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHNpemU7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0dmFyIGFyciA9IFtdO1xuXHRcdHZhciBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemVbMF07XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemVbMV07XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZClbMF07XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpWzBdO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQsIGxhYmVsQ29uZmlnID0ge30pIHtcblx0XHRsYWJlbENvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKGxhYmVsQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XG5cdFx0bGV0IGZvbnRTdHlsZSA9IGxhYmVsQ29uZmlnLmZvbnRTdHlsZTtcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcblx0XHRsZXQgcGFkZGluZyA9IGxhYmVsQ29uZmlnLnBhZGRpbmc7XG5cdFx0bGV0IGxpbmVQYWRkaW5nID0gbGFiZWxDb25maWcubGluZVBhZGRpbmc7XG5cdFx0bGV0IGFsaWduID0gbGFiZWxDb25maWcuYWxpZ247XG5cblx0XHRsZXQgdyA9IGxhYmVsQ29uZmlnLndpZHRoLCBoID0gbGFiZWxDb25maWcuaGVpZ2h0O1xuXHRcdHcgPSB3IDw9IDUgPyBjb250YWluZXJXaWR0aCAqIHcgOiB3O1xuXHRcdGggPSBoIDw9IDUgPyBjb250YWluZXJIZWlnaHQgKiBoIDogaDtcblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXHRcdGxldCBib3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHQvLyB0aGUgcGl2b3QgaXMgdGhlIGNlbnRlciBvZiByb3RhdGlvbiB3aGVuIHRoZSBsYWJlbCBoYXMgYSByb3RhdGlvbiBzcGVjaWZpZWQuXG5cdFx0bGV0IHBpdm90ID0gYWxpZ24gPT0gJ2NlbnRlcicgPyBbMCwgMF0gOiAoYWxpZ24gPT0gJ2xlZnQnID8gWy13cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0gOiBbd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdKTtcblxuXHRcdC8vIHRoZSBtYXhpbXVtIGJvdW5kcyBmb3IgdGhlIGxhYmVsLCB1c2VkIHRvIHBvc2l0aW9uIGlubGluZSBlZGl0b3Jcblx0XHRnZW9tZXRyeS53aWR0aCA9IE1hdGgubWF4KHcgKyAyICogcGFkZGluZywgZ2VvbWV0cnkud2lkdGgpO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IE1hdGgubWF4KGggKyAyICogcGFkZGluZywgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IGxhYmVsQ29uZmlnLCBsYWJlbDogd3JhcHBlZExhYmVsLCBfbGFiZWw6IGxhYmVsLFxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQsIGFuY2hvciwgbGluZUhlaWdodDogd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgKyBsaW5lUGFkZGluZyxcblx0XHRcdHBpdm90LCBib3VuZHMsIG1heEJvdW5kc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIGxpbmssIGxhYmVsQ29uZmlnKSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0aWYgKCFsYWJlbCB8fCBsYWJlbCA9PSBcIlwiKSByZXR1cm4gbnVsbDtcblxuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgbGFiZWxDb25maWcud2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRsZXQgcG9zID0gbGluay5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt4OiBsYWJlbENvbmZpZy5sYWJlbExvY2F0aW9uLzIsIG9mZnNldFg6IGxhYmVsQ29uZmlnLmxhYmVsT2Zmc2V0WCB8fCAwLCBvZmZzZXRZOiBsYWJlbENvbmZpZy5sYWJlbE9mZnNldFkgfHwgMH0pO1xuXG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHg7XG5cdFx0c3dpdGNoIChsYWJlbENvbmZpZy5hbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxuXHRcdFx0XHRhbmNob3IgPSBcImVuZFwiO1xuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IGxhYmVsQ29uZmlnLCBsYWJlbDogd3JhcHBlZExhYmVsLCBfbGFiZWw6IGxhYmVsLFxuXHRcdFx0ZHgsIGR5OiAtd3JhcHBlZExhYmVsLmhlaWdodC8yICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQsXG5cdFx0XHRhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0LFxuXHRcdFx0Ym91bmRzOiBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCB3cmFwcGVkTGFiZWwud2lkdGgsIHdyYXBwZWRMYWJlbC5oZWlnaHQpXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHR2aXNpYmxlOiBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuaW5wdXQgJiYgdGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID09ICd2aXNpYmxlJzsgfSxcblxuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsKSB7XG5cdFx0XHRpZiAoIXRoaXMuaW5wdXQpIHtcblx0XHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMudmlzaWJsZSgpICYmIHRoaXMua2V5ICE9IGtleSkge1xuXHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHQvL2xldCBwb3MgPSBVdGlscy51bnNjYWxlKGdyYXBoLCBbY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJYKCkgKyBib3VuZHMueCwgY2VsbC5nZXRCb3VuZHMoKS5nZXRDZW50ZXJZKCkgKyBib3VuZHMueSArIDVdKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBib3gubWF4Qm91bmRzLmxlZnQsIHBvc1sxXSArIGJveC5tYXhCb3VuZHMudG9wXTtcblx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IChib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0aGVpZ2h0OiAoYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSkgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy52aXNpYmxlKCkpIHJldHVybjtcblxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xuXHRcdFx0aWYgKHRoaXMudGV4dEVsKVxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcblxuXHRcdFx0dGhpcy5pbnB1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHRpZiAoIWNhbmNlbClcblx0XHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci51cGRhdGUnLCBbdGhpcy5rZXksIHRoaXMuaW5wdXQudmFsdWVdKTtcblxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFbGVtZW50IGZyb20gXCIuL0VsZW1lbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBFbGVtZW50IHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHJldHVybiBMYWJlbC5nZXRMYWJlbEJveEZvckVkZ2UodGhpcy5wcm9wKCdsYWJlbCcpLCB0aGlzLmdldFZpZXcoa2V5KSwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gYSBwYWlyIG9mIHBvaW50cyBhcyByZWZlcmVuY2UgdG8gdGhlIGNhbGN1bGF0aW9uIG9mIHN0YXJ0IGFuZCBlbmQgcG9pbnRzLlxuXHQgKi9cblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRpZiAodGhpcy5zb3VyY2UpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdzdGFydCcpKTtcblxuXHRcdGlmICh0aGlzLnRhcmdldClcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ2VuZCcpKTtcblxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgcmVmUHRzID0gdGhpcy5nZXRSZWZlcmVuY2VQb2ludHMoa2V5KTtcblx0XHRsZXQgdGVybWluYWxzID0gW107XG5cblx0XHRsZXQgZ2V0Qm91bmQgPSBmdW5jdGlvbihwdCkge1xuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUocHQueCwgcHQueSwgMywgMyk7XG5cdFx0fTtcblxuXHRcdGlmICh0aGlzLnNvdXJjZSkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzBdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzBdKSwgcmVmUHRzWzFdLCB0cnVlKX0pO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnRhcmdldC5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCd0YXJnZXRQb3J0JyksIHJlZlB0c1swXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMV0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMV0pLCByZWZQdHNbMF0sIHRydWUpfSk7XG5cdFx0cmV0dXJuIHRlcm1pbmFscztcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0c2hhcGUgPSBMaW5rLmdldExpbmsodGhpcy5nZXRUZXJtaW5hbFZpc3VhbChrZXksIGNvbmZpZy5vcnRob2dvbmFsKSwgY29uZmlnLCB0aGlzLnByb3AoJ3N0YXJ0TWFya2VyJyksIHRoaXMucHJvcCgnZW5kTWFya2VyJykpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWRnZTp7JyArICghdGhpcy5zb3VyY2UgPyAnbnVsbCcgOiB0aGlzLnNvdXJjZS5pZCkgKyAnLS0nICsgKCF0aGlzLnRhcmdldCA/ICdudWxsJyA6IHRoaXMudGFyZ2V0LmlkKSArICd9Jztcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KG51bGwpO1xuXHR9XG59XG5FZGdlLm5hbWVzcGFjZSA9IFwiRWRnZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcblxuLypcblxuRWRnZS5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiYWxsb3dEYW5nbGluZ0VkZ2VzXCIpKSB7XG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcblx0fSBlbHNlXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlICYmIHRoaXMudGFyZ2V0ICYmIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKSAmJiB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSAmJiB0aGlzLnRhcmdldC5pc1Zpc2libGUoKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5sZXQgTWFya2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gYXJyb3coc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWFuZ2xlKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3ZhbChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciByID0gc2l6ZSAvIDI7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLXIsIC1yLCBzaXplLCBzaXplKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFswLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+Jztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbW9uZChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGdldE1hcmtlcihjb25maWcsIHNvdXJjZSkge1xuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XG5cdFx0bWFya2VyLmlkID0gY29uZmlnLmlkO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xuXHRyZWdpc3RyeVsnb3ZhbCddID0gb3ZhbDtcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XG5cblx0cmV0dXJuIHtcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxuY2xhc3MgTGF5b3V0IHtcblx0Y29uc3RydWN0b3IoY29uZmlnPXt9KSB7XG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxuXHRcdFx0XHRjb25maWcub3JpZW50YXRpb24gPSBMYXlvdXQuSE9SSVpPTlRBTDtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcblx0XHR9XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHR9XG5cblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cbkxheW91dC5WRVJUSUNBTCA9IDA7XG5MYXlvdXQuSE9SSVpPTlRBTCA9IDE7XG5cbkxheW91dC5ERUZBVUxUUyA9IHtcblx0b3JpZW50YXRpb246IExheW91dC5WRVJUSUNBTFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30pIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6dGhpcy5pZCwgdGFiaW5kZXg6MH0sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJveCk7XG5cdFx0aWYgKGNvbmZpZy5sYXlvdXQpIHtcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcblx0XHRcdHRoaXMubGF5b3V0ID0gbmV3IGxheW91dENsYXNzKGNvbmZpZy5sYXlvdXQuY29uZmlnKTtcblx0XHRcdGRlbGV0ZSBjb25maWcubGF5b3V0O1xuXHRcdH1cblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcblx0XHR0aGlzLl9ncmFwaCA9IG51bGw7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xuXHRcdH0pO1xuXHR9XG5cblx0Z3JhcGgoZ3JhcGgpIHtcblx0XHRpZiAoZ3JhcGgpIHtcblx0XHRcdHRoaXMuX2dyYXBoID0gZ3JhcGg7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMsIHZpZXdwb3J0KTtcblx0XHR2YXIgdyA9IHRoaXMuYm94Lm9mZnNldFdpZHRoO1xuXHRcdHZhciBzY2FsZSA9IHcgLyB2aWV3cG9ydC53aWR0aDtcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcblx0fVxuXG5cdHRyYW5zbGF0ZSh0KSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIFswLCAwXTtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdClcblx0XHRcdFx0cmV0dXJuIFswLCAwXTtcblx0XHRcdHJldHVybiBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHR9XG5cdFx0dGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7XG5cdH1cblxuXHRzY2FsZShrKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIDEuMDtcblx0XHRpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcblx0XHRcdHZhciByb290ID0gdGhpcy5fZ3JhcGguZ2V0Q3VycmVudFJvb3QoKTtcblx0XHRcdGlmICghcm9vdCkgcmV0dXJuIDEuMDtcblxuXHRcdFx0cmV0dXJuIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xuXHRcdH1cblxuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlKCkgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJvdXRcIjpcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUoKSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4LCB5LCBzY2FsZSkge1xuXHRcdGlmICghdGhpcy5fZ3JhcGgpIHJldHVybjtcblx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0aWYgKCFyb290KSByZXR1cm47XG5cblx0XHQvKmlmICghXy5pc051bGwoeCkgJiYgIV8uaXNOdWxsKHkpKVxuXHRcdFx0cm9vdC5tb3ZlKHgsIHkpO1xuXHRcdGlmIChzY2FsZSkge1xuXHRcdFx0c2NhbGUgPSBNYXRoLm1heCh0aGlzLmdldFByb3BlcnR5KFwibWluWm9vbVwiKSwgTWF0aC5taW4odGhpcy5nZXRQcm9wZXJ0eShcIm1heFpvb21cIiksIHNjYWxlKSk7XG5cdFx0XHRyb290LnNldFByb3BlcnR5KCdzY2FsZScsIHNjYWxlKTtcblx0XHRcdC8vIHN5bmMgdGhlIHNjYWxlIGJldHdlZW4gdGhlIHpvb20gYmVoYXZpb3IgYW5kIHRoZSBncmFwaFxuXHRcdFx0dmFyIHpvb20gPSB0aGlzLmV2ZW50RGlzcGF0Y2hlci56b29tO1xuXHRcdFx0aWYgKHpvb20uc2NhbGUoKSAhPSBzY2FsZSlcblx0XHRcdFx0em9vbS5zY2FsZShzY2FsZSk7XG5cdFx0fVxuXG5cdFx0dGhpcy50cmlnZ2VyKEdyYXBoLkVWRU5UX1RZUEVTLlJFRlJFU0gpOyovXG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdC8vIGludGlhbGl6ZSB2aWV3c1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5nZXRDdXJyZW50Um9vdCgpLCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uKicsICd6b29tKiddLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IG9mIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0LnN1YnN0cmluZygyLCBwYXJ0Lmxlbmd0aCAtMSkudHJpbSgpO1xuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dCA9IF8udGVtcGxhdGUodCwge2ludGVycG9sYXRlOiAvI3soW1xcc1xcU10rPyl9L2d9KShvYmopO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4xLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjVcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jbGFzcyBTVkdSZW5kZXJlciBleHRlbmRzIFJlbmRlcmVyIHtcblx0cmVuZGVyKCkge1xuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcblx0XHRpZiAocmVzdWx0KSB7XG5cdFx0XHR2YXIgcm9vdCA9IHRoaXMuX2dyYXBoLmdldEN1cnJlbnRSb290KCk7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9zdmc+Jyk7XG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaCgpLm1hcmtlcnM7XG5cdFx0aWYgKG1hcmtlcnMubGVuZ3RoID4gMClcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XG5cdFx0YnVmLmFwcGVuZCgnPC9kZWZzPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xuXHRcdGZvciAobGV0IG1hcmtlciBvZiBtYXJrZXJzKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQvMik7XG5cdFx0XHRcdC8vIHNwbGl0IHRoZSBwb2ludCBpbnRvIHR3by5cblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocHJldikuc2NhbGUoY29ybmVyKS50cmFuc2xhdGUobmV4dCkpO1xuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSkuc2NhbGUoY29ybmVyKS50cmFuc2xhdGUobmV4dCkpO1xuXHRcdFx0XHRwcmV2ID0gbmV4dDtcblx0XHRcdH1cblx0XHRcdG5ld1B0cy5wdXNoKHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV0pO1xuXHRcdFx0cG9pbnRzID0gbmV3UHRzO1xuXHRcdH1cblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignTScpLCBwb2ludDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0cG9pbnQgPSBwb2ludHNbaV07XG5cdFx0XHRpZiAoaSA9PSAwKVxuXHRcdFx0XHRidWYuYXBwZW5kKHBvaW50KTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRpZiAoY29udHJvbFB0cyAmJiBjb250cm9sUHRzW2ldKSB7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnIEMgJyk7XG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb250cm9sUHRzW2ldLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdFx0YnVmLmFwcGVuZChjb250cm9sUHRzW2ldW2pdKS5hcHBlbmQoJyAnKTtcblx0XHRcdFx0XHRidWYuYXBwZW5kKHBvaW50KTtcblx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnIEwgJykuYXBwZW5kKHBvaW50KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0bGV0IGQgPSBidWYudG9TdHJpbmcoKTtcblx0XHRidWYuY2xlYXIoKTtcblx0XHRpZiAoc2hhcGUuc2hvd0dhdWdlKVxuXHRcdFx0YnVmLmFwcGVuZCgnPHBhdGggc3R5bGU9XCJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDk7IHZpc2liaWxpdHk6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcIiBkPVwiJylcblx0XHRcdFx0LmFwcGVuZChkKS5hcHBlbmQoJ1wiLz4nKTtcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBkPVwiJykuYXBwZW5kKGQpLmFwcGVuZCgnXCInKTtcblx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIgfHwgc2hhcGUuZW5kTWFya2VyKSB7XG5cdFx0XHRidWYuYXBwZW5kKCcgc3R5bGU9XCInKTtcblx0XHRcdGlmIChzaGFwZS5zdGFydE1hcmtlcilcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLXN0YXJ0OiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLnN0YXJ0TWFya2VyKSA/IHNoYXBlLnN0YXJ0TWFya2VyIDogc2hhcGUuc3RhcnRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGlmIChzaGFwZS5lbmRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuZW5kTWFya2VyKSA/IHNoYXBlLmVuZE1hcmtlciA6IHNoYXBlLmVuZE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xuXHRcdFx0YnVmLmFwcGVuZCgnXCInKTtcblx0XHR9XG5cdFx0YnVmLmFwcGVuZCgnLz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0c3RhdGljIHNldENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRpZiAoRG9tVXRpbHMuaXNJRSkge1xuXHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRsZXQgY2hpbGQ7XG5cdFx0XHR3aGlsZSAoY2hpbGQgPSBlbC5sYXN0Q2hpbGQpXG5cdFx0XHRcdGVsLnJlbW92ZUNoaWxkKGNoaWxkKTtcblx0XHRcdFNWR1JlbmRlcmVyLmFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpO1xuXHRcdH0gZWxzZVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gY29udGVudDtcblx0XHRyZXR1cm4gZWw7XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBucz1cImdyYXBoXCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0sJHt5fSlzY2FsZSgke3NjYWxlfSlcIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0sJHt5fSlcIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgbnM9XCIke25hbWVzcGFjZX1cIj4je3NoYXBlfTwvZz4nLFxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XG5cdH0sXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xuXHRcdGZvciAobGV0IHB0IG9mIHNoYXBlLnBvaW50cylcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XG5cdFx0YnVmLnJlbW92ZUxhc3QoKTtcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9LFxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+Jztcblx0fSxcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcblx0XHRyZXR1cm4gYFxuPG1hcmtlciBpZD1cIiR7bWFya2VyLmlkfVwiIG1hcmtlcldpZHRoPVwiJHttYXJrZXIuc2l6ZX1cIiBtYXJrZXJIZWlnaHQ9XCIke21hcmtlci5zaXplfVwiIHJlZng9XCIke21hcmtlci5yZWZbMF19XCIgXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cImZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmJhY2tncm91bmRDb2xvcikgeyU+XG5cdFx0PHJlY3QgeD1cIjwlPS1ib3guYm91bmRzLndpZHRoLzIlPlwiIHk9XCI8JT0tYm94LmJvdW5kcy5oZWlnaHQvMiU+XCIgd2lkdGg9XCI8JT1ib3guYm91bmRzLndpZHRoJT5cIiBoZWlnaHQ9XCI8JT1ib3guYm91bmRzLmhlaWdodCU+XCIgZmlsbD1cIjwlPWJveC5iYWNrZ3JvdW5kQ29sb3IlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0PC9nPlxuPCV9JT5cbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSlcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=