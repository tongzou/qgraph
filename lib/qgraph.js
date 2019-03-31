(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define("qgraph", ["lodash"], factory);
	else if(typeof exports === 'object')
		exports["qgraph"] = factory(require("lodash"));
	else
		root["qgraph"] = factory(root["_"]);
})((typeof window !== 'undefined' ? window : this), function(__WEBPACK_EXTERNAL_MODULE_lodash__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/bean.js":
/*!*********************!*\
  !*** ./lib/bean.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bean - copyright (c) Jacob Thornton 2011-2012
  * https://github.com/fat/bean
  * MIT license
  */
(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})('bean', this, function (name, context) {
  name = name || 'bean';
  context = context || this;

  var win = typeof window !== 'undefined' ? window : this,
      old = context[name],
      namespaceRegex = /[^\.]*(?=\..*)\.|.*/,
      nameRegex = /\..*/,
      addEvent = 'addEventListener',
      removeEvent = 'removeEventListener',
      doc = typeof document !== 'undefined' ? document : {},
      nav = typeof navigator !== 'undefined' ? navigator : {},
      root = doc.documentElement || {},
      W3C_MODEL = root[addEvent],
      eventSupport = W3C_MODEL ? addEvent : 'attachEvent',
      ONE = {} // singleton for quick matching making add() do one()
  ,
      slice = Array.prototype.slice,
      str2arr = function str2arr(s, d) {
    return s.split(d || ' ');
  },
      isString = function isString(o) {
    return typeof o == 'string';
  },
      isFunction = function isFunction(o) {
    return typeof o == 'function';
  } // events that we consider to be 'native', anything not in this list will
  // be treated as a custom event
  ,
      standardNativeEvents = 'click dblclick mouseup mousedown contextmenu ' + // mouse buttons
  'mousewheel mousemultiwheel DOMMouseScroll ' + // mouse wheel
  'mouseover mouseout mousemove selectstart selectend ' + // mouse movement
  'keydown keypress keyup ' + // keyboard
  'orientationchange ' + // mobile
  'focus blur change reset select submit ' + // form elements
  'load unload beforeunload resize move DOMContentLoaded ' + // window
  'readystatechange message ' + // window
  'error abort scroll ' // misc
  // element.fireEvent('onXYZ'... is not forgiving if we try to fire an event
  // that doesn't actually exist, so make sure we only do these on newer browsers
  ,
      w3cNativeEvents = 'show ' + // mouse buttons
  'input invalid ' + // form elements
  'touchstart touchmove touchend touchcancel ' + // touch
  'gesturestart gesturechange gestureend ' + // gesture
  'textinput ' + // TextEvent
  'readystatechange pageshow pagehide popstate ' + // window
  'hashchange offline online ' + // window
  'afterprint beforeprint ' + // printing
  'dragstart dragenter dragover dragleave drag drop dragend ' + // dnd
  'loadstart progress suspend emptied stalled loadmetadata ' + // media
  'loadeddata canplay canplaythrough playing waiting seeking ' + // media
  'seeked ended durationchange timeupdate play pause ratechange ' + // media
  'volumechange cuechange ' + // media
  'checking noupdate downloading cached updateready obsolete ' // appcache
  // convert to a hash for quick lookups
  ,
      nativeEvents = function (hash, events, i) {
    for (i = 0; i < events.length; i++) {
      events[i] && (hash[events[i]] = 1);
    }

    return hash;
  }({}, str2arr(standardNativeEvents + (W3C_MODEL ? w3cNativeEvents : ''))) // custom events are events that we *fake*, they are not provided natively but
  // we can use native events to generate them
  ,
      customEvents = function () {
    var isAncestor = 'compareDocumentPosition' in root ? function (element, container) {
      return container.compareDocumentPosition && (container.compareDocumentPosition(element) & 16) === 16;
    } : 'contains' in root ? function (element, container) {
      container = container.nodeType === 9 || container === window ? root : container;
      return container !== element && container.contains(element);
    } : function (element, container) {
      while (element = element.parentNode) {
        if (element === container) return 1;
      }

      return 0;
    },
        check = function check(event) {
      var related = event.relatedTarget;
      return !related ? related == null : related !== this && related.prefix !== 'xul' && !/document/.test(this.toString()) && !isAncestor(related, this);
    };

    return {
      mouseenter: {
        base: 'mouseover',
        condition: check
      },
      mouseleave: {
        base: 'mouseout',
        condition: check
      },
      mousewheel: {
        base: /Firefox/.test(nav.userAgent) ? 'DOMMouseScroll' : 'mousewheel'
      }
    };
  }() // we provide a consistent Event object across browsers by taking the actual DOM
  // event object and generating a new one from its properties.
  ,
      Event = function () {
    // a whitelist of properties (for different event types) tells us what to check for and copy
    var commonProps = str2arr('altKey attrChange attrName bubbles cancelable ctrlKey currentTarget ' + 'detail eventPhase getModifierState isTrusted metaKey relatedNode relatedTarget shiftKey ' + 'srcElement target timeStamp type view which propertyName'),
        mouseProps = commonProps.concat(str2arr('button buttons clientX clientY dataTransfer ' + 'fromElement offsetX offsetY pageX pageY screenX screenY toElement')),
        mouseWheelProps = mouseProps.concat(str2arr('wheelDelta wheelDeltaX wheelDeltaY wheelDeltaZ ' + 'axis')) // 'axis' is FF specific
    ,
        keyProps = commonProps.concat(str2arr('char charCode key keyCode keyIdentifier ' + 'keyLocation location')),
        textProps = commonProps.concat(str2arr('data')),
        touchProps = commonProps.concat(str2arr('touches targetTouches changedTouches scale rotation')),
        messageProps = commonProps.concat(str2arr('data origin source')),
        stateProps = commonProps.concat(str2arr('state')),
        overOutRegex = /over|out/ // some event types need special handling and some need special properties, do that all here
    ,
        typeFixers = [{
      // key events
      reg: /key/i,
      fix: function fix(event, newEvent) {
        newEvent.keyCode = event.keyCode || event.which;
        return keyProps;
      }
    }, {
      // mouse events
      reg: /click|mouse(?!(.*wheel|scroll))|menu|drag|drop/i,
      fix: function fix(event, newEvent, type) {
        newEvent.rightClick = event.which === 3 || event.button === 2;
        newEvent.pos = {
          x: 0,
          y: 0
        };

        if (event.pageX || event.pageY) {
          newEvent.clientX = event.pageX;
          newEvent.clientY = event.pageY;
        } else if (event.clientX || event.clientY) {
          newEvent.clientX = event.clientX + doc.body.scrollLeft + root.scrollLeft;
          newEvent.clientY = event.clientY + doc.body.scrollTop + root.scrollTop;
        }

        if (overOutRegex.test(type)) {
          newEvent.relatedTarget = event.relatedTarget || event[(type == 'mouseover' ? 'from' : 'to') + 'Element'];
        }

        return mouseProps;
      }
    }, {
      // mouse wheel events
      reg: /mouse.*(wheel|scroll)/i,
      fix: function fix() {
        return mouseWheelProps;
      }
    }, {
      // TextEvent
      reg: /^text/i,
      fix: function fix() {
        return textProps;
      }
    }, {
      // touch and gesture events
      reg: /^touch|^gesture/i,
      fix: function fix() {
        return touchProps;
      }
    }, {
      // message events
      reg: /^message$/i,
      fix: function fix() {
        return messageProps;
      }
    }, {
      // popstate events
      reg: /^popstate$/i,
      fix: function fix() {
        return stateProps;
      }
    }, {
      // everything else
      reg: /.*/,
      fix: function fix() {
        return commonProps;
      }
    }],
        typeFixerMap = {} // used to map event types to fixer functions (above), a basic cache mechanism
    ,
        Event = function Event(event, element, isNative) {
      if (!arguments.length) return;
      event = event || ((element.ownerDocument || element.document || element).parentWindow || win).event;
      this.originalEvent = event;
      this.isNative = isNative;
      this.isBean = true;
      if (!event) return;
      var type = event.type,
          target = event.target || event.srcElement,
          i,
          l,
          p,
          props,
          fixer;
      this.target = target && target.nodeType === 3 ? target.parentNode : target;

      if (isNative) {
        // we only need basic augmentation on custom events, the rest expensive & pointless
        fixer = typeFixerMap[type];

        if (!fixer) {
          // haven't encountered this event type before, map a fixer function for it
          for (i = 0, l = typeFixers.length; i < l; i++) {
            if (typeFixers[i].reg.test(type)) {
              // guaranteed to match at least one, last is .*
              typeFixerMap[type] = fixer = typeFixers[i].fix;
              break;
            }
          }
        }

        props = fixer(event, this, type);

        for (i = props.length; i--;) {
          if (!((p = props[i]) in this) && p in event) this[p] = event[p];
        }
      }
    }; // preventDefault() and stopPropagation() are a consistent interface to those functions
    // on the DOM, stop() is an alias for both of them together


    Event.prototype.preventDefault = function () {
      if (this.originalEvent.preventDefault) this.originalEvent.preventDefault();else this.originalEvent.returnValue = false;
    };

    Event.prototype.stopPropagation = function () {
      if (this.originalEvent.stopPropagation) this.originalEvent.stopPropagation();else this.originalEvent.cancelBubble = true;
    };

    Event.prototype.stop = function () {
      this.preventDefault();
      this.stopPropagation();
      this.stopped = true;
    }; // stopImmediatePropagation() has to be handled internally because we manage the event list for
    // each element
    // note that originalElement may be a Bean#Event object in some situations


    Event.prototype.stopImmediatePropagation = function () {
      if (this.originalEvent.stopImmediatePropagation) this.originalEvent.stopImmediatePropagation();

      this.isImmediatePropagationStopped = function () {
        return true;
      };
    };

    Event.prototype.isImmediatePropagationStopped = function () {
      return this.originalEvent.isImmediatePropagationStopped && this.originalEvent.isImmediatePropagationStopped();
    };

    Event.prototype.clone = function (currentTarget) {
      //TODO: this is ripe for optimisation, new events are *expensive*
      // improving this will speed up delegated events
      var ne = new Event(this, this.element, this.isNative);
      ne.currentTarget = currentTarget;
      return ne;
    };

    return Event;
  }() // if we're in old IE we can't do onpropertychange on doc or win so we use doc.documentElement for both
  ,
      targetElement = function targetElement(element, isNative) {
    return !W3C_MODEL && !isNative && (element === doc || element === win) ? root : element;
  }
  /**
    * Bean maintains an internal registry for event listeners. We don't touch elements, objects
    * or functions to identify them, instead we store everything in the registry.
    * Each event listener has a RegEntry object, we have one 'registry' for the whole instance.
    */
  ,
      RegEntry = function () {
    // each handler is wrapped so we can handle delegation and custom events
    var wrappedHandler = function wrappedHandler(element, fn, condition, args) {
      var call = function call(event, eargs) {
        return fn.apply(element, args ? slice.call(eargs, event ? 0 : 1).concat(args) : eargs);
      },
          findTarget = function findTarget(event, eventElement) {
        return fn.__beanDel ? fn.__beanDel.ft(event.target, element) : eventElement;
      },
          handler = condition ? function (event) {
        var target = findTarget(event, this); // deleated event

        if (condition.apply(target, arguments)) {
          if (event) event.currentTarget = target;
          return call(event, arguments);
        }
      } : function (event) {
        if (fn.__beanDel) event = event.clone(findTarget(event)); // delegated event, fix the fix

        return call(event, arguments);
      };

      handler.__beanDel = fn.__beanDel;
      return handler;
    },
        RegEntry = function RegEntry(element, type, handler, original, namespaces, args, root) {
      var customType = customEvents[type],
          isNative;

      if (type == 'unload') {
        // self clean-up
        handler = once(removeListener, element, type, handler, original);
      }

      if (customType) {
        if (customType.condition) {
          handler = wrappedHandler(element, handler, customType.condition, args);
        }

        type = customType.base || type;
      }

      this.isNative = isNative = nativeEvents[type] && !!element[eventSupport];
      this.customType = !W3C_MODEL && !isNative && type;
      this.element = element;
      this.type = type;
      this.original = original;
      this.namespaces = namespaces;
      this.eventType = W3C_MODEL || isNative ? type : 'propertychange';
      this.target = targetElement(element, isNative);
      this[eventSupport] = !!this.target[eventSupport];
      this.root = root;
      this.handler = wrappedHandler(element, handler, null, args);
    }; // given a list of namespaces, is our entry in any of them?


    RegEntry.prototype.inNamespaces = function (checkNamespaces) {
      var i,
          j,
          c = 0;
      if (!checkNamespaces) return true;
      if (!this.namespaces) return false;

      for (i = checkNamespaces.length; i--;) {
        for (j = this.namespaces.length; j--;) {
          if (checkNamespaces[i] == this.namespaces[j]) c++;
        }
      }

      return checkNamespaces.length === c;
    }; // match by element, original fn (opt), handler fn (opt)


    RegEntry.prototype.matches = function (checkElement, checkOriginal, checkHandler) {
      return this.element === checkElement && (!checkOriginal || this.original === checkOriginal) && (!checkHandler || this.handler === checkHandler);
    };

    return RegEntry;
  }(),
      registry = function () {
    // our map stores arrays by event type, just because it's better than storing
    // everything in a single array.
    // uses '$' as a prefix for the keys for safety and 'r' as a special prefix for
    // rootListeners so we can look them up fast
    var map = {} // generic functional search of our registry for matching listeners,
    // `fn` returns false to break out of the loop
    ,
        forAll = function forAll(element, type, original, handler, root, fn) {
      var pfx = root ? 'r' : '$';

      if (!type || type == '*') {
        // search the whole registry
        for (var t in map) {
          if (t.charAt(0) == pfx) {
            forAll(element, t.substr(1), original, handler, root, fn);
          }
        }
      } else {
        var i = 0,
            l,
            list = map[pfx + type],
            all = element == '*';
        if (!list) return;

        for (l = list.length; i < l; i++) {
          if ((all || list[i].matches(element, original, handler)) && !fn(list[i], list, i, type)) return;
        }
      }
    },
        has = function has(element, type, original, root) {
      // we're not using forAll here simply because it's a bit slower and this
      // needs to be fast
      var i,
          list = map[(root ? 'r' : '$') + type];

      if (list) {
        for (i = list.length; i--;) {
          if (!list[i].root && list[i].matches(element, original, null)) return true;
        }
      }

      return false;
    },
        get = function get(element, type, original, root) {
      var entries = [];
      forAll(element, type, original, null, root, function (entry) {
        return entries.push(entry);
      });
      return entries;
    },
        put = function put(entry) {
      var has = !entry.root && !this.has(entry.element, entry.type, null, false),
          key = (entry.root ? 'r' : '$') + entry.type;
      (map[key] || (map[key] = [])).push(entry);
      return has;
    },
        del = function del(entry) {
      forAll(entry.element, entry.type, null, entry.handler, entry.root, function (entry, list, i) {
        list.splice(i, 1);
        entry.removed = true;
        if (list.length === 0) delete map[(entry.root ? 'r' : '$') + entry.type];
        return false;
      });
    } // dump all entries, used for onunload
    ,
        entries = function entries() {
      var t,
          entries = [];

      for (t in map) {
        if (t.charAt(0) == '$') entries = entries.concat(map[t]);
      }

      return entries;
    };

    return {
      has: has,
      get: get,
      put: put,
      del: del,
      entries: entries
    };
  }() // we need a selector engine for delegated events, use querySelectorAll if it exists
  // but for older browsers we need Qwery, Sizzle or similar
  ,
      selectorEngine,
      setSelectorEngine = function setSelectorEngine(e) {
    if (!arguments.length) {
      selectorEngine = doc.querySelectorAll ? function (s, r) {
        return r.querySelectorAll(s);
      } : function () {
        throw new Error('Bean: No selector engine installed'); // eeek
      };
    } else {
      selectorEngine = e;
    }
  } // we attach this listener to each DOM event that we need to listen to, only once
  // per event type per DOM element
  ,
      rootListener = function rootListener(event, type) {
    if (!W3C_MODEL && type && event && event.propertyName != '_on' + type) return;
    var listeners = registry.get(this, type || event.type, null, false),
        l = listeners.length,
        i = 0;
    event = new Event(event, this, true);
    if (type) event.type = type; // iterate through all handlers registered for this type, calling them unless they have
    // been removed by a previous handler or stopImmediatePropagation() has been called

    for (; i < l && !event.isImmediatePropagationStopped(); i++) {
      if (!listeners[i].removed) listeners[i].handler.call(this, event);
    }
  } // add and remove listeners to DOM elements
  ,
      listener = W3C_MODEL ? function (element, type, add) {
    // new browsers
    element[add ? addEvent : removeEvent](type, rootListener, false);
  } : function (element, type, add, custom) {
    // IE8 and below, use attachEvent/detachEvent and we have to piggy-back propertychange events
    // to simulate event bubbling etc.
    var entry;

    if (add) {
      registry.put(entry = new RegEntry(element, custom || type, function (event) {
        // handler
        rootListener.call(element, event, custom);
      }, rootListener, null, null, true // is root
      ));
      if (custom && element['_on' + custom] == null) element['_on' + custom] = 0;
      entry.target.attachEvent('on' + entry.eventType, entry.handler);
    } else {
      entry = registry.get(element, custom || type, rootListener, true)[0];

      if (entry) {
        entry.target.detachEvent('on' + entry.eventType, entry.handler);
        registry.del(entry);
      }
    }
  },
      once = function once(rm, element, type, fn, originalFn) {
    // wrap the handler in a handler that does a remove as well
    return function () {
      fn.apply(this, arguments);
      rm(element, type, originalFn);
    };
  },
      removeListener = function removeListener(element, orgType, handler, namespaces) {
    var type = orgType && orgType.replace(nameRegex, ''),
        handlers = registry.get(element, type, null, false),
        removed = {},
        i,
        l;

    for (i = 0, l = handlers.length; i < l; i++) {
      if ((!handler || handlers[i].original === handler) && handlers[i].inNamespaces(namespaces)) {
        // TODO: this is problematic, we have a registry.get() and registry.del() that
        // both do registry searches so we waste cycles doing this. Needs to be rolled into
        // a single registry.forAll(fn) that removes while finding, but the catch is that
        // we'll be splicing the arrays that we're iterating over. Needs extra tests to
        // make sure we don't screw it up. @rvagg
        registry.del(handlers[i]);
        if (!removed[handlers[i].eventType] && handlers[i][eventSupport]) removed[handlers[i].eventType] = {
          t: handlers[i].eventType,
          c: handlers[i].type
        };
      }
    } // check each type/element for removed listeners and remove the rootListener where it's no longer needed


    for (i in removed) {
      if (!registry.has(element, removed[i].t, null, false)) {
        // last listener of this type, remove the rootListener
        listener(element, removed[i].t, false, removed[i].c);
      }
    }
  } // set up a delegate helper using the given selector, wrap the handler function
  ,
      delegate = function delegate(selector, fn) {
    //TODO: findTarget (therefore $) is called twice, once for match and once for
    // setting e.currentTarget, fix this so it's only needed once
    var findTarget = function findTarget(target, root) {
      var i,
          array = isString(selector) ? selectorEngine(selector, root) : selector;

      for (; target && target !== root; target = target.parentNode) {
        for (i = array.length; i--;) {
          if (array[i] === target) return target;
        }
      }
    },
        handler = function handler(e) {
      var match = findTarget(e.target, this);
      if (match) fn.apply(match, arguments);
    }; // __beanDel isn't pleasant but it's a private function, not exposed outside of Bean


    handler.__beanDel = {
      ft: findTarget // attach it here for customEvents to use too
      ,
      selector: selector
    };
    return handler;
  },
      fireListener = W3C_MODEL ? function (isNative, type, element) {
    // modern browsers, do a proper dispatchEvent()
    var evt = doc.createEvent(isNative ? 'HTMLEvents' : 'UIEvents');
    evt[isNative ? 'initEvent' : 'initUIEvent'](type, true, true, win, 1);
    element.dispatchEvent(evt);
  } : function (isNative, type, element) {
    // old browser use onpropertychange, just increment a custom property to trigger the event
    element = targetElement(element, isNative);
    isNative ? element.fireEvent('on' + type, doc.createEventObject()) : element['_on' + type]++;
  }
  /**
    * Public API: off(), on(), add(), (remove()), one(), fire(), clone()
    */

  /**
    * off(element[, eventType(s)[, handler ]])
    */
  ,
      off = function off(element, typeSpec, fn) {
    var isTypeStr = isString(typeSpec),
        k,
        type,
        namespaces,
        i;

    if (isTypeStr && typeSpec.indexOf(' ') > 0) {
      // off(el, 't1 t2 t3', fn) or off(el, 't1 t2 t3')
      typeSpec = str2arr(typeSpec);

      for (i = typeSpec.length; i--;) {
        off(element, typeSpec[i], fn);
      }

      return element;
    }

    type = isTypeStr && typeSpec.replace(nameRegex, '');
    if (type && customEvents[type]) type = customEvents[type].base;

    if (!typeSpec || isTypeStr) {
      // off(el) or off(el, t1.ns) or off(el, .ns) or off(el, .ns1.ns2.ns3)
      if (namespaces = isTypeStr && typeSpec.replace(namespaceRegex, '')) namespaces = str2arr(namespaces, '.');
      removeListener(element, type, fn, namespaces);
    } else if (isFunction(typeSpec)) {
      // off(el, fn)
      removeListener(element, null, typeSpec);
    } else {
      // off(el, { t1: fn1, t2, fn2 })
      for (k in typeSpec) {
        if (typeSpec.hasOwnProperty(k)) off(element, k, typeSpec[k]);
      }
    }

    return element;
  }
  /**
    * on(element, eventType(s)[, selector], handler[, args ])
    */
  ,
      on = function on(element, events, selector, fn) {
    var originalFn, type, types, i, args, entry, first; //TODO: the undefined check means you can't pass an 'args' argument, fix this perhaps?

    if (selector === undefined && _typeof(events) == 'object') {
      //TODO: this can't handle delegated events
      for (type in events) {
        if (events.hasOwnProperty(type)) {
          on.call(this, element, type, events[type]);
        }
      }

      return;
    }

    if (!isFunction(selector)) {
      // delegated event
      originalFn = fn;
      args = slice.call(arguments, 4);
      fn = delegate(selector, originalFn, selectorEngine);
    } else {
      args = slice.call(arguments, 3);
      fn = originalFn = selector;
    }

    types = str2arr(events); // special case for one(), wrap in a self-removing handler

    if (this === ONE) {
      fn = once(off, element, events, fn, originalFn);
    }

    for (i = types.length; i--;) {
      // add new handler to the registry and check if it's the first for this element/type
      first = registry.put(entry = new RegEntry(element, types[i].replace(nameRegex, '') // event type
      , fn, originalFn, str2arr(types[i].replace(namespaceRegex, ''), '.') // namespaces
      , args, false // not root
      ));

      if (entry[eventSupport] && first) {
        // first event of this type on this element, add root listener
        listener(element, entry.eventType, true, entry.customType);
      }
    }

    return element;
  }
  /**
    * add(element[, selector], eventType(s), handler[, args ])
    *
    * Deprecated: kept (for now) for backward-compatibility
    */
  ,
      add = function add(element, events, fn, delfn) {
    return on.apply(null, !isString(fn) ? slice.call(arguments) : [element, fn, events, delfn].concat(arguments.length > 3 ? slice.call(arguments, 5) : []));
  }
  /**
    * one(element, eventType(s)[, selector], handler[, args ])
    */
  ,
      one = function one() {
    return on.apply(ONE, arguments);
  }
  /**
    * fire(element, eventType(s)[, args ])
    *
    * The optional 'args' argument must be an array, if no 'args' argument is provided
    * then we can use the browser's DOM event system, otherwise we trigger handlers manually
    */
  ,
      fire = function fire(element, type, args) {
    var types = str2arr(type),
        i,
        j,
        l,
        names,
        handlers;

    for (i = types.length; i--;) {
      type = types[i].replace(nameRegex, '');
      if (names = types[i].replace(namespaceRegex, '')) names = str2arr(names, '.');

      if (!names && !args && element[eventSupport]) {
        fireListener(nativeEvents[type], type, element);
      } else {
        // non-native event, either because of a namespace, arguments or a non DOM element
        // iterate over all listeners and manually 'fire'
        handlers = registry.get(element, type, null, false);
        args = [false].concat(args);

        for (j = 0, l = handlers.length; j < l; j++) {
          if (handlers[j].inNamespaces(names)) {
            handlers[j].handler.apply(element, args);
          }
        }
      }
    }

    return element;
  }
  /**
    * clone(dstElement, srcElement[, eventType ])
    *
    * TODO: perhaps for consistency we should allow the same flexibility in type specifiers?
    */
  ,
      clone = function clone(element, from, type) {
    var handlers = registry.get(from, type, null, false),
        l = handlers.length,
        i = 0,
        args,
        beanDel;

    for (; i < l; i++) {
      if (handlers[i].original) {
        args = [element, handlers[i].type];
        if (beanDel = handlers[i].handler.__beanDel) args.push(beanDel.selector);
        args.push(handlers[i].original);
        on.apply(null, args);
      }
    }

    return element;
  },
      bean = {
    'on': on,
    'add': add,
    'one': one,
    'off': off,
    'remove': off,
    'clone': clone,
    'fire': fire,
    'Event': Event,
    'setSelectorEngine': setSelectorEngine,
    'noConflict': function noConflict() {
      context[name] = old;
      return this;
    } // for IE, clean up on unload to avoid leaks

  };

  if (win.attachEvent) {
    var cleanup = function cleanup() {
      var i,
          entries = registry.entries();

      for (i in entries) {
        if (entries[i].type && entries[i].type !== 'unload') off(entries[i].element, entries[i].type);
      }

      win.detachEvent('onunload', cleanup);
      win.CollectGarbage && win.CollectGarbage();
    };

    win.attachEvent('onunload', cleanup);
  } // initialize selector engine to internal default (qSA or throw Error)


  setSelectorEngine();
  return bean;
});

/***/ }),

/***/ "./src/behavior/Behavior.js":
/*!**********************************!*\
  !*** ./src/behavior/Behavior.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Behavior; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Behavior =
/*#__PURE__*/
function () {
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



/***/ }),

/***/ "./src/behavior/GraphBehavior.js":
/*!***************************************!*\
  !*** ./src/behavior/GraphBehavior.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Behavior */ "./src/behavior/Behavior.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Created by tong on 6/28/2016.
 */

/**
 * Graph handler handles Panning and Zoom and rubber band selection
 */

var GraphBehavior =
/*#__PURE__*/
function (_Behavior) {
  _inherits(GraphBehavior, _Behavior);

  function GraphBehavior(renderer) {
    var _this;

    _classCallCheck(this, GraphBehavior);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GraphBehavior).call(this, renderer));
    var dispatcher = renderer.dispatcher; // TODO:
    // let f = function(type, ns, graph, pos, event) {
    // 	//Cursor.updateCursor(type, ns, graph, event);
    // };

    dispatcher.register(/^drag.*\.graph$/, _this.handleDrag, _assertThisInitialized(_this));
    dispatcher.register(/^zoom/, _this.handleZoom, _assertThisInitialized(_this)); // dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);

    _this.offset = null;
    return _this;
  }

  _createClass(GraphBehavior, [{
    key: "handleZoom",
    value: function handleZoom(type, ns, graph, pos, event) {
      this.renderer.transform(null, null, event.scale);
    }
  }, {
    key: "handleDrag",
    value: function handleDrag(type, ns, graph, pos, event) {
      if (type == 'dragstart') {
        var pan = this.renderer.prop('defaultClickMode') == 'pan' ^ (event.ctrlKey || event.shiftKey);
        if (!pan) return;
        var t = this.renderer.translate;
        this.offset = [t[0] - pos[0], t[1] - pos[1]];
        return;
      }

      if (!this.offset) return;
      this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);

      if (type == 'dragend') {
        // Cursor.updateCursor('mouseup', ns, graph, event);
        delete this.offset;
      }
    }
  }]);

  return GraphBehavior;
}(_Behavior__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (GraphBehavior);

/***/ }),

/***/ "./src/behavior/SelectionBehavior.js":
/*!*******************************************!*\
  !*** ./src/behavior/SelectionBehavior.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");
/* harmony import */ var _graph_Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../graph/Cell */ "./src/graph/Cell.js");
/* harmony import */ var _Behavior__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Behavior */ "./src/behavior/Behavior.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var SelectionBehavior =
/*#__PURE__*/
function (_Behavior) {
  _inherits(SelectionBehavior, _Behavior);

  function SelectionBehavior(renderer) {
    var _this;

    _classCallCheck(this, SelectionBehavior);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SelectionBehavior).call(this, renderer));
    var dispatcher = renderer.dispatcher;
    dispatcher.register('mousedown.*', _this.selectCell, _assertThisInitialized(_this));
    dispatcher.register('mouseup.*', _this.unselectCell, _assertThisInitialized(_this));
    dispatcher.register('drag*.graph', _this.handleMultiSelect, _assertThisInitialized(_this)); // graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, this.updateSelections, this)

    _this.selectedNodes = null;
    _this.selectedLinks = null;
    _this.attachedLinks = null;
    return _this;
  }

  _createClass(SelectionBehavior, [{
    key: "updateSelections",
    value: function updateSelections() {
      if (this.selectedNodes) {
        this.selectedNodes.classed('selected', false);
      }

      if (this.selectedLinks) {
        this.selectedLinks.classed('selected', false);
      }

      this.selectedNodes = null;
      this.selectedLinks = null;
      this.attachedLinks = null;

      if (this.graph.selectedVertices && this.graph.selectedVertices.length > 0) {
        this.selectedNodes = this.graph.renderer.getShapes(this.graph.selectedVertices);
        this.attachedLinks = this.graph.renderer.getShapes(this.graph.getAttachedEdges());
        this.selectedNodes.classed('selected', true);
      }

      if (this.graph.selectedEdges && this.graph.selectedEdges.length > 0) {
        this.selectedLinks = this.graph.renderer.getShapes(this.graph.selectedEdges);
        this.selectedLinks.classed('selected', true);
      }
    }
  }, {
    key: "selectCell",
    value: function selectCell(type, ns, data, pos, event) {
      var cell = data === this.graph ? null : data;
      if (cell && !(cell instanceof _graph_Cell__WEBPACK_IMPORTED_MODULE_1__["default"])) return;
      var toggle = event.ctrlKey || event.shiftKey;

      if (cell && cell instanceof _graph_Cell__WEBPACK_IMPORTED_MODULE_1__["default"]) {
        if (!this.graph.isSelected(cell)) {
          delete cell._firstSelection;
        } else {
          cell._firstSelection = true;
        }

        d3.select(event.dataTarget).moveToFront();
        this.graph.setSelection(cell, toggle);
      }
    }
  }, {
    key: "unselectCell",
    value: function unselectCell(type, ns, data, pos, event) {
      var cell = data === this.graph ? null : data;
      if (cell && !(cell instanceof _graph_Cell__WEBPACK_IMPORTED_MODULE_1__["default"])) return;
      var ctrlKey = event.ctrlKey || event.shiftKey;

      if (!cell) {
        this.graph.setSelection(cell, ctrlKey);
      }
    }
  }, {
    key: "handleMultiSelect",
    value: function handleMultiSelect(type, ns, data, pos, event) {
      pos = util.scale(this.graph, pos);

      if (type === 'dragstart') {
        var select = this.graph.getProperty('defaultClickMode') == 'select' ^ (event.ctrlKey || event.shiftKey);
        if (!select) return;
        this.startPt = new Point(pos[0], pos[1]);
        return;
      }

      if (!this.startPt) return;
      var rect = _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"].getBoundingRectangle([new Point(pos[0], pos[1]), this.startPt]);
      var renderer = this.graph.renderer;

      if (!this.rubberband) {
        this.rubberband = d3.select(renderer.appendNode(renderer.getCellLayer(), {
          template: _.template('<g><rect x="0" y="0" width="100" height="100" stroke="#000000" fill="none" stroke-dasharray="3 3"/></g>')
        }, false));
      }

      if (type == 'dragend') {
        var cells = this.graph.getCurrentRoot().children; // TODO: Define if we want to select vertexes / edges or both

        cells = _.filter(cells, function (cell) {
          var box = cell.getBounds();

          if (rect.contains(box)) {
            return true;
          }

          return false;
        }); // TODO: Set selection

        this.graph.setSelection(cells, event.ctrlKey);
        this.rubberband.remove();
        delete this.startPt;
        delete this.rubberband;
        return;
      }

      this.rubberband.select('rect').attr({
        x: rect.x,
        y: rect.y,
        width: rect.width,
        height: rect.height
      });
    }
  }, {
    key: "destroy",
    value: function destroy() {
      _get(_getPrototypeOf(SelectionBehavior.prototype), "destroy", this).call(this);

      delete this.selectedNodes;
      delete this.selectedLinks;
      delete this.attachedLinks;
    }
  }]);

  return SelectionBehavior;
}(_Behavior__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (SelectionBehavior);

/***/ }),

/***/ "./src/event/event-dispatcher.js":
/*!***************************************!*\
  !*** ./src/event/event-dispatcher.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDispatcher; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/bean */ "./lib/bean.js");
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_bean__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _key_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./key-utils */ "./src/event/key-utils.js");
/* harmony import */ var _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom-utils */ "./src/util/dom-utils.js");
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





 // import Utils from '../util/Utils'

var DEFAULTS = {
  stopPropagation: false
};
var win = typeof window !== 'undefined' ? window : {
  addEventHandler: function addEventHandler() {}
};
var doc = typeof document !== 'undefined' ? document : {};
/**
 * The EventDispatcher is the central event management. It will monitor all events and translate it into the a higher
 * level events for consumption.
 */

var EventDispatcher =
/*#__PURE__*/
function () {
  /**
   * Constructor
   * @param root the root element that the manager will listen to.
   * @param zoomScale
   * @param config the configuraton for the event dispatcher.
   */
  function EventDispatcher(root) {
    var _this = this;

    var zoomScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, Infinity];
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    _classCallCheck(this, EventDispatcher);

    this.root = root;
    this.rootNS = root.getAttribute('ns') || 'root';
    this.zoomScale = zoomScale;
    Object.assign(this, DEFAULTS, config);
    this.scale = 1.0;
    this.listeners = {};
    this.dragging = false;

    this.handler = function (event) {
      _this.handleEvent(event);
    };

    this.started = false; // Simulate mouseenter/mouseleave events

    this.enterStack = [];
  }
  /**
   * Start listening for events.
   */


  _createClass(EventDispatcher, [{
    key: "start",
    value: function start() {
      if (this.started) return;
      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler);
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
      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.off(this.root, 'mousedown mouseover mouseout mouseenter mouseleave dblclick click contextmenu mousewheel', this.handler);
      this.stopKeys();
      this.started = false;
    }
  }, {
    key: "startKeys",
    value: function startKeys() {
      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(doc, 'keydown keyup', this.handler);
    }
  }, {
    key: "stopKeys",
    value: function stopKeys() {
      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.off(doc, 'keydown keyup', this.handler);
    }
  }, {
    key: "zoomIn",
    value: function zoomIn() {
      this.scale *= 1.25;
      this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0]);
      return this.scale;
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.scale *= 0.8;
      this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0]);
      return this.scale;
    }
  }, {
    key: "getEventInfo",
    value: function getEventInfo(event) {
      var target = event.target;
      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var ns;
      var stack = [];
      var isRoot = false;

      while (!isRoot && target && target !== doc) {
        ns = target.getAttribute('ns');

        if (ns) {
          isRoot = ns.startsWith('root.');

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

      if (!isRoot) {
        event.rootTarget = event.nsTarget;
      } // target stack is a stack of all the ns targets up to the one with the data binding.


      event.targetStack = stack;
      ns = buf.toString('.');
      if (ns === '') ns = this.rootNS;
      return {
        data: event.rootTarget,
        ns: ns
      };
    }
    /**
     * The main event handler method, it processes event and generate relevant events to dispatch.
     */

  }, {
    key: "handleEvent",
    value: function handleEvent(event) {
      var _this2 = this;

      var type = event.type; // Do not dispatch other events if we are dragging.

      if (this.dragging || _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].eventFromInput(event)) return;
      var data;
      var ns;
      var pos = this.getPosition(event);
      var info;
      var isKeyEvent = type === 'keydown' || type === 'keyup';

      if (isKeyEvent) {
        data = this.root;
        ns = _key_utils__WEBPACK_IMPORTED_MODULE_2__["getKeyEvent"](event);
      } else {
        info = this.getEventInfo(event);
        if (!info) return;
        data = info.data;
        ns = info.ns;
      } // Utils.log('EventDispatcher', "handleEvent - " + type + ';ns=' + ns)


      if (type === 'mousewheel') {
        this.scale *= Math.pow(2, event.wheelDelta * 0.002);
        this.scale = Math.max(Math.min(this.zoomScale[1], this.scale), this.zoomScale[0]);
        event.scale = this.scale;
        type = 'zoom';
      } // See if we should create drag events


      if (type === 'mousedown' && event.button === 0
      /* only drag on left click */
      ) {
          // Create drag object.
          var dragObject = {
            data: data,
            pos: ns === 'root' ? EventDispatcher.mouse(this.root, event) : pos
          };
          this.dragging = false; // Start listening for mouse move.

          var dragPos;

          var mousemove = function mousemove(event) {
            var currentPos = _this2.getPosition(event);

            if (!_this2.dragging) {
              // check if the mouse has moved. IE always fire mousemove after mousedown even if the mouse hasn't moved yet.
              if (dragObject.pos[0] === currentPos[0] && dragObject.pos[1] === currentPos[1]) return; // start dragging

              _this2.dragging = true;
              event.rootTarget = dragObject.data;

              _this2.dispatch(event, 'dragstart', ns, dragObject.data, dragObject.pos);
            }

            if (ns === 'root') {
              dragPos = EventDispatcher.mouse(_this2.root, event);
            } else {
              dragPos = currentPos;
            }

            _this2.getEventInfo(event);

            _this2.dispatch(event, 'drag', ns, dragObject.data, dragPos);
          };

          var mouseup = function mouseup(event) {
            if (ns === 'root') {
              dragPos = EventDispatcher.mouse(_this2.root, event);
            } else {
              dragPos = _this2.getPosition(event);
            }

            var info = _this2.getEventInfo(event);

            if (_this2.dragging) {
              _this2.dragging = false;

              _this2.dispatch(event, 'dragend', ns, dragObject.data, dragPos);
            } else {
              _this2.dispatch(event, 'mouseup', ns, info.data, dragPos);
            }

            _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.off(win, 'mousemove', mousemove);
            _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.off(win, 'mouseup', mouseup);
          };

          event.preventDefault();
          _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(win, 'mousemove', mousemove);
          _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(win, 'mouseup', mouseup);
        }

      if (!isKeyEvent) {
        this.simulateEnterLeave(event, type, ns, data, pos);
      }

      this.dispatch(event, type, ns, data, pos); // disable the default context menu
      // if (type == 'contextmenu')
      // event.preventDefault()
    }
    /**
     * try to simulate mouseenter/mouseleave events.
     */

  }, {
    key: "simulateEnterLeave",
    value: function simulateEnterLeave(event, type, ns, data, pos) {
      var _this3 = this;

      var last, stack;

      var clearEnterStack = function clearEnterStack(k) {
        k = k || 0; // Clear off the enter stack.

        while (_this3.enterStack.length >= k + 1) {
          last = _this3.enterStack.pop();

          _this3.dispatch(event, 'mouseleave', last.ns, last.data, pos);
        }
      };

      var getNS = function getNS(index) {
        var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();

        for (var i = 0; i <= index; i++) {
          var val = stack[i].getAttribute('ns');

          if (val.startsWith('root.')) {
            val = val.substring(5);
          }

          buf.append(val);
        }

        return buf.toString('.');
      };

      if (ns && ns !== this.rootNS) {
        if (type === 'mouseover') {
          stack = event.targetStack;
          var item;

          for (var i = 0; i < stack.length; i++) {
            if (i < this.enterStack.length) {
              if (this.enterStack[i].target !== stack[i]) {
                clearEnterStack(i);
              } else {
                continue;
              }
            }

            item = {
              data: data,
              ns: getNS(i),
              target: stack[i]
            };
            this.enterStack.push(item);
            this.dispatch(event, 'mouseenter', item.ns, data, pos);
          }

          if (stack.length < this.enterStack.length) {
            clearEnterStack(stack.length);
          }
        }
      }

      if (ns === this.rootNS && this.enterStack.length > 0) {
        clearEnterStack();
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(event, type, ns, data, pos) {
      // if (type !== 'mouseover' && type !== 'mouseout') {
      //   console.log('EventDispatcher', 'dispatch - ' + type + '.' + ns + ';' + pos + ';rootTarget=' + event.rootTarget + ';data=' + data)
      // }
      if (!this.started) return;
      var nsType = ns ? type + '.' + ns : type;

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(this.listeners, function (listeners, key) {
        if (EventDispatcher.match(nsType, listeners.regexp ? listeners.regexp : key)) {
          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(listeners, function (listener) {
            if (!listener.context) {
              listener.callback.apply(window, [type, ns, data, pos, event]);
            } else {
              listener.callback.apply(listener.context, [type, ns, data, pos, event]);
            }
          });
        }
      }); // after dispatching, do not propagate.


      if (this.stopPropagation && event.stopPropagation) {
        event.stopPropagation();
      }
    }
  }, {
    key: "getPosition",
    value: function getPosition(event) {
      var pos = EventDispatcher.mouse(this.root, event);

      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(pos[0]) && !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNaN(pos[1])) {
        this.lastPosition = pos;
      }

      return this.lastPosition;
    }
    /**
     * Registers a key event handler
     * // Key is object {ctrl, alt, shift, meta, code}
     */

  }, {
    key: "registerKey",
    value: function registerKey(type, key, callback, context) {
      var _this4 = this;

      if (Array.isArray(key)) {
        key.forEach(function (k) {
          _this4.registerKey(type, k, callback, context);
        });
        return;
      }

      key = _key_utils__WEBPACK_IMPORTED_MODULE_2__["getKeyData"](key.ctrl, key.alt, key.shift, key.meta, key.code);
      if (!key.length) return;
      key = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"](type).append(key).toString('.');
      var listener = {
        callback: callback,
        context: context
      };
      this.listeners[key] || (this.listeners[key] = []);
      this.listeners[key].push(listener);
    }
  }, {
    key: "unregisterKey",
    value: function unregisterKey(type, key, callback, context) {
      var _this5 = this;

      if (Array.isArray(key)) {
        key.forEach(function (k) {
          _this5.unregisterKey(type, k, callback, context);
        });
        return;
      }

      key = _key_utils__WEBPACK_IMPORTED_MODULE_2__["getKeyData"](key.ctrl, key.alt, key.shift, key.meta, key.code);
      if (!key.length) return;
      key = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"](type).append(key).toString('.');
      var listeners = this.listeners[key];
      var listener;
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
      var _this6 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          _this6.register(t, callback, context, zIndex);
        });
        return;
      }

      var listener = {
        callback: callback,
        context: context,
        zIndex: zIndex
      };
      var regexp = null;

      if (type instanceof RegExp) {
        regexp = type;
        type = type + '';
      }

      this.listeners[type] || (this.listeners[type] = []);

      if (regexp && !this.listeners[type].regexp) {
        this.listeners[type].regexp = regexp;
      }

      this.listeners[type].push(listener);
    }
  }, {
    key: "unregister",
    value: function unregister(type, callback, context) {
      if (type instanceof RegExp) {
        type = type + '';
      }

      var listeners = this.listeners[type];
      var listener;
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
      if (registeredType instanceof RegExp) {
        return nsType.match(registeredType);
      }

      return nsType === registeredType;
      /* const arr = registeredType.split('*');
      if (arr.length == 1)
        return nsType == registeredType;
       let substr, index = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].length == 0) continue;
        substr = nsType.slice(index);
        index = substr.indexOf(arr[i]);
        if (index < 0)
          return false;
        index += arr[i].length;
      }
      return true; */
    }
  }, {
    key: "mouse",
    value: function mouse(container, e) {
      if (e.changedTouches) e = e.changedTouches[0];
      var svg = container.ownerSVGElement || container;

      if (svg.createSVGPoint) {
        var point = svg.createSVGPoint();
        point.x = e.clientX;
        point.y = e.clientY;
        point = point.matrixTransform(container.getScreenCTM().inverse());
        return [point.x, point.y];
      }

      var rect = container.getBoundingClientRect();
      return [e.clientX - rect.left - container.clientLeft, e.clientY - rect.top - container.clientTop];
    }
  }]);

  return EventDispatcher;
}();



/***/ }),

/***/ "./src/event/key-utils.js":
/*!********************************!*\
  !*** ./src/event/key-utils.js ***!
  \********************************/
/*! exports provided: KEY, getKeyEvent, getKeyData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEY", function() { return KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyEvent", function() { return getKeyEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getKeyData", function() { return getKeyData; });
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
// The Key Utility CLass for the Event Dispatcher

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
  UP: 38 // ADD          : DomUtils.isFireFox ? 61  : 187,
  // SUBTRACT     : DomUtils.isFireFox ? 173 : 189

};
function getKeyEvent(event) {
  if (!event) {
    return null;
  }

  var key = event.keyCode || event.which; // Need to find a way to avoid this

  if (key >= 16 && key <= 18) {
    key = null;
  }

  return getKeyData(event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, key);
}
function getKeyData(ctrl, alt, shift, meta, key) {
  var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_0__["default"]();
  if (ctrl) buf.append('CTRL');
  if (alt) buf.append('ALT');
  if (shift) buf.append('SHIFT');
  if (meta) buf.append('META');
  if (key) buf.append(key);
  return buf.toString('.');
}

/***/ }),

/***/ "./src/geometry/Ellipse.js":
/*!*********************************!*\
  !*** ./src/geometry/Ellipse.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Ellipse; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/geometry/Shape.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rectangle */ "./src/geometry/Rectangle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Ellipse =
/*#__PURE__*/
function (_Shape) {
  _inherits(Ellipse, _Shape);

  function Ellipse() {
    _classCallCheck(this, Ellipse);

    return _possibleConstructorReturn(this, _getPrototypeOf(Ellipse).apply(this, arguments));
  }

  _createClass(Ellipse, [{
    key: "toString",
    value: function toString() {
      return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
    }
  }], [{
    key: "getPerimeter",
    value: function getPerimeter(rect, pt) {
      var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var a = rect.width / 2;
      var b = rect.height / 2;
      var cx = rect.x;
      var cy = rect.y;
      var px = pt.x;
      var py = pt.y; // Calculates straight line equation through
      // point and ellipse center y = d * x + h

      var dx = parseInt(px - cx);
      var dy = parseInt(py - cy);

      if (dx === 0 && dy !== 0) {
        return new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx, cy + b * dy / Math.abs(dy));
      } else if (dx === 0 && dy === 0) {
        return new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](px, py);
      } // Calculates intersection


      var d = dy / dx;
      var h = cy - d * cx;
      var e = a * a * d * d + b * b;
      var f = -2 * cx * e;
      var g = a * a * d * d * cx * cx + b * b * cx * cx - a * a * b * b;
      var det = Math.sqrt(f * f - 4 * e * g); // Two solutions (perimeter points)

      var xout1 = (-f + det) / (2 * e);
      var xout2 = (-f - det) / (2 * e);
      var yout1 = d * xout1 + h;
      var yout2 = d * xout2 + h;
      var dist1 = Math.sqrt(Math.pow(xout1 - px, 2) + Math.pow(yout1 - py, 2));
      var dist2 = Math.sqrt(Math.pow(xout2 - px, 2) + Math.pow(yout2 - py, 2)); // Correct solution

      var xout = 0;
      var yout = 0;

      if (dist1 < dist2) {
        xout = xout1;
        yout = yout1;
      } else {
        xout = xout2;
        yout = yout2;
      }

      var p = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](xout, yout);
      var dir = _Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"].getDirection(rect, p, orthogonal);

      if (orthogonal) {
        if (dir.x === -1) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx - a, cy),
            direction: dir
          };
        }

        if (dir.x === 1) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx + a, cy),
            direction: dir
          };
        }

        if (dir.y === -1) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx, cy - b),
            direction: dir
          };
        }

        if (dir.y === 1) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx, cy + b),
            direction: dir
          };
        }
      }

      return {
        point: p,
        direction: dir
      };
    }
  }]);

  return Ellipse;
}(_Shape__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/geometry/Line.js":
/*!******************************!*\
  !*** ./src/geometry/Line.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Line =
/*#__PURE__*/
function () {
  function Line(start, end) {
    _classCallCheck(this, Line);

    this.start = start;
    this.end = end;
  }
  /**
   * Calculate the length of this line
   */


  _createClass(Line, [{
    key: "length",
    value: function length() {
      return this.start.distance(this.end);
    }
    /**
     * Calculate the distance of this line to the point.
     */

  }, {
    key: "distance",
    value: function distance(pt) {
      var x = this.start.distance(pt);
      if (x === 0) return 0;
      var l = this.length();
      var cosa = new _Point__WEBPACK_IMPORTED_MODULE_0__["default"]((this.end.x - this.start.x) / l, (this.end.y - this.start.y) / l).dotProduct(new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](pt.x / x, pt.y / x));
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
    key: "toString",
    value: function toString() {
      return 'Line:{start=' + this.start + ';end=' + this.end + '}';
    }
  }], [{
    key: "intersection",
    value: function intersection(x0, y0, x1, y1, x2, y2, x3, y3) {
      var denom = (y3 - y2) * (x1 - x0) - (x3 - x2) * (y1 - y0);
      var numeA = (x3 - x2) * (y0 - y2) - (y3 - y2) * (x0 - x2);
      var numeB = (x1 - x0) * (y0 - y2) - (y1 - y0) * (x0 - x2);
      var ua = numeA / denom;
      var ub = numeB / denom;

      if (ua >= 0.0 && ua <= 1.0 && ub >= 0.0 && ub <= 1.0) {
        // Get the intersection point
        var intersectionX = x0 + ua * (x1 - x0);
        var intersectionY = y0 + ua * (y1 - y0);
        return new _Point__WEBPACK_IMPORTED_MODULE_0__["default"](intersectionX, intersectionY);
      } // No intersection


      return null;
    }
  }]);

  return Line;
}();



/***/ }),

/***/ "./src/geometry/Link.js":
/*!******************************!*\
  !*** ./src/geometry/Link.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var defaultConfig = {
  type: 'direct',
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

var Link =
/*#__PURE__*/
function () {
  function Link(terminalVisual) {
    var shapeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var startMarker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var endMarker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Link);

    this.start = terminalVisual[0].point;
    this.end = terminalVisual[1].point;
    this.startNormal = terminalVisual[0].direction;
    this.endNormal = terminalVisual[1].direction;
    this.startMarker = startMarker;
    this.endMarker = endMarker;
    Object.assign(this, shapeConfig);
  }

  _createClass(Link, [{
    key: "render",
    value: function render(view) {
      return view.renderLink(this);
    }
  }, {
    key: "getRelativePosition",

    /**
     * Calculate the position where to put decorators or label..
     *
     * @param geometry: defines how far along the edge should the point be placed.
     * @return *[] the relative position.
     */
    value: function getRelativePosition(geometry) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(geometry)) {
        geometry = {
          x: geometry
        };
      }

      geometry = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(geometry, defaultGeometry);
      var p = geometry.x;
      var l = this.length;
      if (Math.abs(p) <= 1) p *= l;
      if (p < 0) p = l + p;
      if (p > l) p = l;
      var points = this.points;
      var d;
      var point;
      var dir;

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
      } // return the last point.


      if (!point) {
        point = points[points.length - 1];
      }

      return _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].offsetPosition([point.x, point.y], geometry);
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
      var i;
      var l = 0;

      for (i = 0; i < points.length - 1; i++) {
        l += points[i].distance(points[i + 1]);
      }

      return l;
    }
  }], [{
    key: "getLink",
    value: function getLink(terminalVisual) {
      var shapeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var startMarker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var endMarker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
      shapeConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultsDeep(shapeConfig, defaultConfig);
      var LinkClass = linkTypes[shapeConfig.type];

      if (LinkClass) {
        return new LinkClass(terminalVisual, shapeConfig, startMarker, endMarker);
      }

      console.log('link type not supported: ' + shapeConfig.type);
      return null;
    }
  }]);

  return Link;
}();

var DirectLink =
/*#__PURE__*/
function (_Link) {
  _inherits(DirectLink, _Link);

  function DirectLink() {
    _classCallCheck(this, DirectLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(DirectLink).apply(this, arguments));
  }

  _createClass(DirectLink, [{
    key: "points",
    get: function get() {
      return [this.start, this.end];
    }
  }]);

  return DirectLink;
}(Link);

var BezierLink =
/*#__PURE__*/
function (_Link2) {
  _inherits(BezierLink, _Link2);

  function BezierLink() {
    _classCallCheck(this, BezierLink);

    return _possibleConstructorReturn(this, _getPrototypeOf(BezierLink).apply(this, arguments));
  }

  _createClass(BezierLink, [{
    key: "getRelativePosition",
    value: function getRelativePosition(geometry) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNumber(geometry)) {
        geometry = {
          x: geometry
        };
      }

      geometry = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(geometry, defaultGeometry);
      var p = geometry.x;
      var l = this.length;
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
      return _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].offsetPosition([point.x, point.y], geometry);
    }
  }, {
    key: "points",
    get: function get() {
      return [this.start, this.end];
    }
  }, {
    key: "controlPts",
    get: function get() {
      var s = this.points[0];
      var e = this.points[1];
      var pts = [];
      pts[0] = null;
      pts[1] = [];

      if (this.startNormal.x === 0) {
        pts[1][0] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](s.x, (s.y + e.y) / 2);
      } else {
        pts[1][0] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"]((s.x + e.x) / 2, s.y);
      }

      if (this.endNormal.x === 0) {
        pts[1][1] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](e.x, (s.y + e.y) / 2);
      } else {
        pts[1][1] = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"]((s.x + e.x) / 2, e.y);
      }

      return pts;
    }
  }]);

  return BezierLink;
}(Link);

var EntityRelations =
/*#__PURE__*/
function (_Link3) {
  _inherits(EntityRelations, _Link3);

  function EntityRelations() {
    _classCallCheck(this, EntityRelations);

    return _possibleConstructorReturn(this, _getPrototypeOf(EntityRelations).apply(this, arguments));
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
      result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x0, y0));
      var xe = isTargetLeft ? target.x : target.x + target.width;
      var ye = target.getCenterY();
      var seg = this.segment;
      var dx = isSourceLeft ? -seg : seg;
      var dep = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x0 + dx, y0);
      dx = isTargetLeft ? -seg : seg;
      var arr = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](xe + dx, ye); // Adds intermediate points if both go out on same side

      if (isSourceLeft === isTargetLeft) {
        var x = isSourceLeft ? Math.min(x0, xe) - seg : Math.max(x0, xe) + seg;
        result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, y0));
        result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, ye));
      } else if (dep.x < arr.x === isSourceLeft) {
        var midY = y0 + (ye - y0) / 2;
        result.push(dep);
        result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](dep.x, midY));
        result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](arr.x, midY));
        result.push(arr);
      } else {
        result.push(dep);
        result.push(arr);
      }

      result.push(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](xe, ye));
      return result;
    }
  }]);

  return EntityRelations;
}(Link);

var Manhattan =
/*#__PURE__*/
function (_Link4) {
  _inherits(Manhattan, _Link4);

  function Manhattan(terminalVisual, shapeConfig, startMarker, endMarker) {
    _classCallCheck(this, Manhattan);

    shapeConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(shapeConfig, {
      MIN_BUFFER: 10,
      autoRoute: false,
      randomNoise: 0,
      step: 1,
      maxChannelWidth: 100
    });
    return _possibleConstructorReturn(this, _getPrototypeOf(Manhattan).call(this, terminalVisual, shapeConfig, startMarker, endMarker));
  }

  _createClass(Manhattan, [{
    key: "autoRoute",

    /**
    * Automatically route the connection to avoid intersections with other vertices.
    */
    value: function autoRoute(pts, container, boxes, startBox, endBox) {
      var side, side2, d, box, intersect, j;
      var channel, channel2, pt, dir;
      var startPadding = 0;
      var endPadding; // first get the start and end channel

      box = boxes[endBox];
      pt = pts[pts.length - 2];

      if (pt.y < box.y) {
        side = 1;
      } else if (pt.y > box.y + box.height) {
        side = 3;
      } else if (pt.x < box.x) {
        side = 0;
      } else {
        side = 2;
      }

      channel = _getChannel(container, endBox, boxes, side);
      endPadding = channel.horizontal ? (channel.right - channel.left) / 2 : (channel.bottom - channel.top) / 2;

      for (var i = 0; i < pts.length - 1; i++) {
        if (pts[i + 1].x === pts[i].x && pts[i + 1].y === pts[i].y) continue;
        intersect = _getFirstIntersection(pts, i, boxes, startBox, endBox);
        if (!intersect) continue;
        j = intersect[0];
        side = intersect[1];
        box = boxes[j];
        channel = _getChannel(container, j, boxes, side);

        switch (side) {
          case 0:
          case 2:
            pt = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"]((channel.right + channel.left) / 2, pts[i].y);
            dir = _getRouteTendency(pts, i, pt, box, side);
            side2 = dir < 0 ? 1 : 3;
            channel2 = _getChannel(container, j, boxes, side2); // if the previous point is in the channel2, use that point instead of center of the channel.

            if (i > 1 && pts[i - 2].y === pts[i - 1].y && pts[i - 1].y > channel2.top && pts[i - 1].y < channel2.bottom) {
              d = pts[i - 1].y - pt.y;
            } else if (i < pts.length - 3 && pts[i + 2].y === pts[i + 3].y && pts[i + 2].y > channel2.top && pts[i + 2].y < channel2.bottom) {
              d = pts[i + 2].y - pt.y;
            } else {
              d = (channel2.bottom + channel2.top) / 2 - pt.y;
            } // check if we need this pt.


            if (side === 0 && pt.x <= pts[i].x || side === 2 && pt.x >= pts[i].x) {
              pt = null;
            } else if (i > 0) {
              // see if we can push the line out to where we started.
              if (!_hasIntersection([new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pts[i].x, pts[i].y), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pts[i].x, pts[i].y + d), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pt.x, pt.y + d)], boxes)) {
                pt = null;
              }
            }

            break;

          case 1:
          case 3:
            pt = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pts[i].x, (channel.bottom + channel.top) / 2);
            dir = _getRouteTendency(pts, i, pt, box, side);
            side2 = dir < 0 ? 0 : 2;
            channel2 = _getChannel(container, j, boxes, side2); // if the previous point is in the channel2, use that point instead of center of the channel.

            if (i > 1 && pts[i - 2].x === pts[i - 1].x && pts[i - 1].x > channel2.left && pts[i - 1].x < channel2.right) {
              d = pts[i - 1].x - pt.x;
            } else if (i < pts.length - 3 && pts[i + 2].x === pts[i + 3].x && pts[i + 2].x > channel2.left && pts[i + 2].x < channel2.right) {
              d = pts[i + 2].x - pt.x;
            } else {
              d = (channel2.right + channel2.left) / 2 - pt.x;
            } // check if we need this pt.


            if (side === 1 && pt.y <= pts[i].y || side === 3 && pt.y >= pts[i].y) {
              pt = null;
            } else if (i > 0) {
              // see if we can push the line out to where we started.
              if (!_hasIntersection([new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pts[i].x, pts[i].y), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pts[i].x + d, pts[i].y), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](pt.x + d, pt.y)], boxes)) {
                pt = null;
              }
            }

            break;

          case 4:
            continue;
        } // max points.


        if (i > 20) return;

        if (pt && (pt.x !== pts[i].x || pt.y !== pts[i].y)) {
          pts.splice(i + 1, 0, pt);

          _moveSegment(pts, i + 1, d, startPadding, endPadding);

          i++;
        } else {
          _moveSegment(pts, i, d, startPadding, endPadding);
        }
      }
    }
  }, {
    key: "_getRouteTendency",
    value: function _getRouteTendency(pts, i, breakPt, box, side) {
      var dir;
      var p;

      switch (side) {
        case 0:
        case 2:
          p = 'y';
          break;

        case 1:
        case 3:
          p = 'x';
          break;
      } // first try the breakpt.


      dir = _getRouteDirection(breakPt, pts[pts.length - 1])[p];

      if (dir === 0) {
        dir = -_getRouteDirection(pts[0], pts[pts.length - 1])[p];

        if (dir === 0) {
          if (breakPt[p] < box.getCenter()[p]) {
            dir = -1;
          } else {
            dir = 1;
          }
        }
      }

      return dir;
    }
  }, {
    key: "_getChannel",
    value: function _getChannel(container, index, boxes, side) {
      var maxChannelWidth = this.maxChannelWidth;
      var box1 = boxes[index];
      var box2;
      var pt, i;
      var channel = {};
      var l;
      var t;
      var b;
      var r;

      switch (side) {
        case 0:
          pt = box1.getLeft();
          channel.right = pt.x;
          channel.horizontal = false;

          for (i = 0; i < boxes.length; i++) {
            if (i === index) continue;
            r = boxes[i].getRight().x;
            if (r >= pt.x) continue;

            if (!channel.left || channel.left < r) {
              channel.left = r;
            }
          }

          if (!channel.left) {
            channel.left = container.getLeft().x;

            if (channel.right - channel.left > maxChannelWidth) {
              channel.left = channel.right - maxChannelWidth;
            }
          }

          for (i = 0; i < boxes.length; i++) {
            if (i === index) continue;
            box2 = boxes[i];
            b = box2.getBottom().y;
            t = box2.getTop().y;

            if (b < pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
              if (!channel.top || channel.top < b) {
                channel.top = b;
              }
            }

            if (t > pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
              if (!channel.bottom || channel.bottom > t) {
                channel.bottom = t;
              }
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
            if (i === index) continue;
            b = boxes[i].getBottom().y;
            if (b >= pt.y) continue;

            if (!channel.top || channel.top < b) {
              channel.top = b;
            }
          }

          if (!channel.top) {
            channel.top = container.getTop().y;

            if (channel.bottom - channel.top > maxChannelWidth) {
              channel.top = channel.bottom - maxChannelWidth;
            }
          }

          for (i = 0; i < boxes.length; i++) {
            if (i === index) continue;
            box2 = boxes[i];
            l = box2.getLeft().x;
            r = box2.getRight().x;

            if (r < pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
              if (!channel.left || channel.left < r) {
                channel.left = r;
              }
            }

            if (l > pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
              if (!channel.right || channel.right > l) {
                channel.right = l;
              }
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
            if (i === index) continue;
            l = boxes[i].getLeft().x;
            if (l <= pt.x) continue;

            if (!channel.right || channel.right > l) {
              channel.right = l;
            }
          }

          if (!channel.right) {
            channel.right = container.getRight().x;

            if (channel.right - channel.left > maxChannelWidth) {
              channel.right = channel.left + maxChannelWidth;
            }
          }

          for (i = 0; i < boxes.length; i++) {
            if (i === index) continue;
            box2 = boxes[i];
            b = box2.getBottom().y;
            t = box2.getTop().y;

            if (b < pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
              if (!channel.top || channel.top < b) {
                channel.top = b;
              }
            }

            if (t > pt.y && box2.getRight() > channel.left && box2.getLeft() < channel.right) {
              if (!channel.bottom || channel.bottom > t) {
                channel.bottom = t;
              }
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
            if (i === index) continue;
            box2 = boxes[i];
            if (box2.getTop().y <= pt.y) continue;

            if (!channel.bottom || channel.bottom > box2.getTop().y) {
              channel.bottom = box2.getTop().y;
            }
          }

          if (!channel.bottom) {
            channel.bottom = container.getBottom().y;

            if (channel.bottom - channel.top > maxChannelWidth) {
              channel.bottom = channel.top + maxChannelWidth;
            }
          }

          for (i = 0; i < boxes.length; i++) {
            if (i === index) continue;
            box2 = boxes[i];
            l = box2.getLeft().x;
            r = box2.getRight().x;

            if (r < pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
              if (!channel.left || channel.left < r) {
                channel.left = r;
              }
            }

            if (l > pt.x && box2.getBottom() > channel.top && box2.getTop() < channel.bottom) {
              if (!channel.right || channel.right > l) {
                channel.right = l;
              }
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
    value: function _moveSegment(pts, i, d, startPadding, endPadding) {
      // first check if we need to add new line segments.
      var dir, l, pt;

      if (i === 0) {
        // we need to break off the segment, since we can't change the starting point.
        dir = pts[0].getDirection(pts[1]);

        if (!startPadding) {
          startPadding = this.MIN_BUFFER;
        }

        l = Math.min(startPadding, pts[0].distance(pts[1]) / 2);
        pt = pts[0].getTranslated(dir.scale(l));
        pts.splice(1, 0, pt);

        this._moveSegment(pts, i + 1, d);

        return;
      }

      if (i === pts.length - 2) {
        // we need to break off the segment, since we can't change the end point.
        dir = pts[pts.length - 1].getDirection(pts[pts.length - 2]);

        if (!endPadding) {
          endPadding = this.MIN_BUFFER;
        }

        l = Math.min(endPadding, pts[pts.length - 1].distance(pts[pts.length - 2]) / 2);
        pt = pts[pts.length - 1].getTranslated(dir.scale(l));
        pts.splice(pts.length - 1, 0, pt);

        this._moveSegment(pts, i, d);

        return;
      }

      if (pts[i].y === pts[i + 1].y) {
        if (i > 0 && pts[i - 1].y === pts[i].y) {
          pts.splice(i + 1, 0, pts[i].clone());
          i++;
        }

        if (i < pts.length - 2 && pts[i + 1].y === pts[i + 2].y) {
          pts.splice(i + 1, 0, pts[i + 1].clone());
        }

        pts[i].y += d;
        pts[i + 1].y += d;
      } else {
        if (i > 0 && pts[i - 1].x === pts[i].x) {
          pts.splice(i + 1, 0, pts[i].clone());
          i++;
        }

        if (i < pts.length - 2 && pts[i + 1].x === pts[i + 2].x) {
          pts.splice(i + 1, 0, pts[i + 1].clone());
        }

        pts[i].x += d;
        pts[i + 1].x += d;
      }
    }
    /**
    * This method will merge the redundant segments.
    */

  }, {
    key: "points",
    get: function get() {
      var pos = Manhattan.route(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);

      if (this.autoRoute) {
        this._mergeSegments(pos);

        var boxes = [];
        var node;
        var startBox;
        var endBox;
        var container = edge.source.getCommonAncestor(edge.target);
        var childNodes = container.getDescendants();
        var index = 0;

        for (var i = 0; i < childNodes.length; i++) {
          node = childNodes[i]; // Do not include source or target ancestors in routing.

          if (node.excludeFromRouting(edge) || node.isAncestor(edge.source) || node.isAncestor(edge.target)) continue;

          if (node === edge.source) {
            startBox = index;
          }

          if (node === edge.target) {
            endBox = index;
          }

          boxes.push(node.getBounds(document));
          index++;
        }

        if (boxes.length > 1) {
          this.autoRoute(pos, container.getBounds(document), boxes, startBox, endBox);
        }
      }

      Manhattan._mergeSegments(pos);

      if (this.randomNoise && pos.length > 3) {
        for (var _i = 1; _i < pos.length - 2; _i++) {
          var range = this.randomNoise / this.step;
          var randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
          var noise = void 0;

          if (this.randomNoise && pos.length == 4) {
            if (this.startNormal.x != 0 && this.startNormal.x != this.endNormal.x) {
              if (this.randomNoise <= Math.abs(pos[1].x - pos[0].x - this.startNormal.x * this.MIN_BUFFER)) {
                noise = this.randomNoise;
              } else {
                noise = Math.abs(pos[1].x - pos[0].x - this.startNormal.x * this.MIN_BUFFER);
              }
            } else if (this.startNormal.y != 0 && this.startNormal.y != this.endNormal.y) {
              if (this.randomNoise <= Math.abs(pos[1].y - pos[0].y - this.startNormal.y * this.MIN_BUFFER)) {
                noise = this.randomNoise;
              } else {
                noise = Math.abs(pos[1].y - pos[0].y - this.startNormal.y * this.MIN_BUFFER);
              }
            } else {
              noise = this.randomNoise;
            }

            var _range = noise / this.step;

            var _randomNumber = void 0;

            if (this.startNormal.x !== this.endNormal.x || this.startNormal.y !== this.endNormal.y) {
              _randomNumber = Math.floor(Math.random() * _range * 2 - _range + 1) * this.step;
            } else {
              _randomNumber = Math.sign(this.startNormal.x !== 0 ? this.startNormal.x : this.startNormal.y) * Math.floor(Math.random() * _range + 1) * this.step;
            }

            this._moveSegment(pos, 1, _randomNumber, 1, 1);
          }

          if (this.randomNoise && pos.length > 4) {
            for (var _i2 = 1; _i2 < pos.length - 2; _i2++) {
              range = this.randomNoise / this.step;

              if (_i2 == 1) {
                randomNumber = Math.sign(this.startNormal.x !== 0 ? this.startNormal.x : this.startNormal.y) * Math.floor(Math.random() * range + 1) * this.step;
              } else if (_i2 == pos.length - 3) {
                randomNumber = Math.sign(this.endNormal.x !== 0 ? this.endNormal.x : this.endNormal.y) * Math.floor(Math.random() * range + 1) * this.step;
              } else {
                randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
              }

              this._moveSegment(pos, _i2, randomNumber, 1, 1);
            }
          }
        }
      }

      return pos;
    } // New function for finding route

  }], [{
    key: "route",
    value: function route(start, end, startNormal, endNormal, buffer) {
      var startBuffer = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](start.x + startNormal.x * buffer, start.y + startNormal.y * buffer);
      var endBuffer = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](end.x + endNormal.x * buffer, end.y + endNormal.y * buffer);
      var startBufferNormal, endBufferNormal;
      var pts;

      if (startNormal.x !== 0) {
        if ((endBuffer.x - startBuffer.x) / startNormal.x > 0) {
          startBufferNormal = startNormal;
        } else {
          startBufferNormal = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, endBuffer.y >= startBuffer.y ? 1 : -1);
        }
      } else {
        if ((endBuffer.y - startBuffer.y) / startNormal.y > 0) {
          startBufferNormal = startNormal;
        } else {
          startBufferNormal = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](endBuffer.x >= startBuffer.x ? 1 : -1, 0);
        }
      }

      if (endNormal.x !== 0) {
        if ((startBuffer.x - endBuffer.x) / endNormal.x > 0) {
          endBufferNormal = endNormal;
        } else {
          endBufferNormal = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, startBuffer.y >= endBuffer.y ? 1 : -1);
        }
      } else {
        if ((startBuffer.y - endBuffer.y) / endNormal.y > 0) {
          endBufferNormal = endNormal;
        } else {
          endBufferNormal = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](startBuffer.x >= endBuffer.x ? 1 : -1, 0);
        }
      }

      if (startBufferNormal.dotProduct(endBufferNormal) === 0) {
        var middle = startBufferNormal.x === 0 ? new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](startBuffer.x, endBuffer.y) : new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](endBuffer.x, startBuffer.y);
        pts = [start, startBuffer, middle, endBuffer, end];
      } else if (startBufferNormal.dotProduct(endBufferNormal) < 0) {
        if (startBufferNormal.x === 0) {
          pts = [start, startBuffer, new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](startBuffer.x, (start.y + end.y) / 2), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](endBuffer.x, (start.y + end.y) / 2), endBuffer, end];
        } else {
          pts = [start, startBuffer, new _Point__WEBPACK_IMPORTED_MODULE_1__["default"]((start.x + end.x) / 2, startBuffer.y), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"]((start.x + end.x) / 2, endBuffer.y), endBuffer, end];
        }
      } else {
        pts = [start, startBuffer, new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](startBuffer.x + startBufferNormal.x * buffer, startBuffer.y + startBufferNormal.y * buffer), new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](endBuffer.x + endBufferNormal.x * buffer, endBuffer.y + endBufferNormal.y * buffer), endBuffer, end];
      }

      var prunePts = [];
      prunePts[0] = pts[0];

      for (var i = 1; i < pts.length - 1; i++) {
        if (pts[i].x === pts[i - 1].x && pts[i].x === pts[i + 1].x || pts[i].y === pts[i - 1].y && pts[i].y === pts[i + 1].y) {
          continue;
        }

        prunePts.push(pts[i]);
      }

      prunePts.push(pts[pts.length - 1]);
      return prunePts;
    }
  }, {
    key: "_hasIntersection",
    value: function _hasIntersection(pts, boxes) {
      for (var i = 0; i < pts.length - 1; i++) {
        for (var j = 0; j < boxes.length; j++) {
          if (boxes[j].detectIntersection(pts[i], pts[i + 1]) >= 0) {
            return true;
          }
        }
      }

      return false;
    }
  }, {
    key: "_getFirstIntersection",
    value: function _getFirstIntersection(pts, i, boxes, startBox, endBox) {
      var box;
      var side;
      var savedIndex = null;
      var savedSide = null;

      for (var j = 0; j < boxes.length; j++) {
        if (i === 0 && j === startBox || i === pts.length - 2 && j === endBox) {
          continue;
        }

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

      if (savedIndex != null) {
        return [savedIndex, savedSide];
      }

      return null;
    }
  }, {
    key: "_getRouteDirection",
    value: function _getRouteDirection(pt1, pt2) {
      if (pt1.x === pt2.x) {
        if (pt1.y < pt2.y) return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].S;
        return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].N;
      } else if (pt1.y === pt2.y) {
        if (pt1.x < pt2.x) return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].E;
        return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].W;
      } else if (pt1.x < pt2.x) {
        if (pt1.y < pt2.y) return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].SE;
        return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].NE;
      } else {
        if (pt1.y < pt2.y) return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].SW;
        return _Point__WEBPACK_IMPORTED_MODULE_1__["default"].NW;
      }
    }
  }, {
    key: "_mergeSegments",
    value: function _mergeSegments(pts) {
      var h1 = pts[pts.length - 1].y === pts[pts.length - 2].y;
      var h2;

      for (var i = pts.length - 2; i >= 1; i--) {
        h2 = pts[i].y === pts[i - 1].y;

        if (h2 === h1 || pts[i].equals(pts[i - 1])) {
          pts.splice(i, 1);
        } else {
          h1 = !h1;
        }
      }
    }
  }]);

  return Manhattan;
}(Link);

linkTypes['direct'] = DirectLink;
linkTypes['bezier'] = BezierLink;
linkTypes['entityRelations'] = EntityRelations;
linkTypes['manhattan'] = Manhattan;
/* harmony default export */ __webpack_exports__["default"] = (Link);

/***/ }),

/***/ "./src/geometry/Point.js":
/*!*******************************!*\
  !*** ./src/geometry/Point.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Point =
/*#__PURE__*/
function () {
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
      var x = this.x;
      var y = this.y;
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
      if (!p2 || !(p2 instanceof Point)) return false;
      return this.x === p2.x && this.y === p2.y;
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
      if (vertical) {
        this.x = 2 * rect.x - this.x;
      } else {
        this.y = 2 * rect.y - this.y;
      }

      return this;
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.x + ',' + this.y;
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
/* harmony default export */ __webpack_exports__["default"] = (Point);

/***/ }),

/***/ "./src/geometry/Rectangle.js":
/*!***********************************!*\
  !*** ./src/geometry/Rectangle.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rectangle; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Shape */ "./src/geometry/Shape.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Rectangle =
/*#__PURE__*/
function (_Shape) {
  _inherits(Rectangle, _Shape);

  function Rectangle() {
    _classCallCheck(this, Rectangle);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rectangle).apply(this, arguments));
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
        if (pt.y < this.top) {
          return pt.distance(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.left, this.top));
        }

        if (pt.y <= this.bottom) return this.left - pt.x;
        return pt.distance(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.left, this.bottom));
      }

      if (pt.x <= this.right) {
        if (pt.y <= this.top) return this.top - pt.y;
        return pt.y - this.bottom;
      }

      if (pt.y < this.top) {
        return pt.distance(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.right, this.top));
      }

      if (pt.y <= this.bottom) return pt.x - this.right;
      return pt.distance(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.right, this.bottom));
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
      var horizontal = pt1.y === pt2.y;
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
      var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var x = rect.x;
      var y = rect.y;
      var dx = pt.x - x;
      var dy = pt.y - y;
      var alpha = Math.atan2(dy, dx);
      var p = new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](0, 0);
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
      return {
        point: p,
        direction: dir
      };
    }
    /**
     * Return the bounding rectangle that contains p1 and p2
     */

  }, {
    key: "getBoundingRectangle",
    value: function getBoundingRectangle(pts, margin) {
      if (!pts || pts.length === 0) return null;
      margin = margin || [0, 0, 0, 0];

      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(margin)) {
        margin = [margin, margin, margin, margin];
      }

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
      var minx = null;
      var miny = null;
      var maxx = -Infinity;
      var maxy = -Infinity;

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.each(rects, function (rect) {
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
      var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!orthogonal) {
        return new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](r.x, r.y).getDirection(new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](p.x, p.y));
      }

      var i;
      var distance = Math.abs(r.left - p.x);
      var direction = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].W;
      i = Math.abs(r.top - p.y);

      if (i <= distance) {
        distance = i;
        direction = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].N;
      }

      i = Math.abs(r.bottom - p.y);

      if (i <= distance) {
        distance = i;
        direction = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].S;
      }

      i = Math.abs(r.right - p.x);

      if (i < distance) {
        direction = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].E;
      }

      return direction;
    }
  }]);

  return Rectangle;
}(_Shape__WEBPACK_IMPORTED_MODULE_2__["default"]);



/***/ }),

/***/ "./src/geometry/Rhombus.js":
/*!*********************************!*\
  !*** ./src/geometry/Rhombus.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Rhombus; });
/* harmony import */ var _Shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Shape */ "./src/geometry/Shape.js");
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ "./src/geometry/Line.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Rhombus =
/*#__PURE__*/
function (_Shape) {
  _inherits(Rhombus, _Shape);

  function Rhombus() {
    _classCallCheck(this, Rhombus);

    return _possibleConstructorReturn(this, _getPrototypeOf(Rhombus).apply(this, arguments));
  }

  _createClass(Rhombus, [{
    key: "toString",
    value: function toString() {
      return 'Rhombus:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
    }
  }], [{
    key: "getPerimeter",
    value: function getPerimeter(rect, pt) {
      var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var w = rect.width;
      var h = rect.height;
      var cx = rect.x;
      var cy = rect.y;
      var x = cx - w / 2;
      var y = cy - h / 2;
      var px = pt.x;
      var py = pt.y; // Special case for intersecting the diamond's corners

      if (cx === px) {
        if (cy > py) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx, y),
            direction: _Point__WEBPACK_IMPORTED_MODULE_1__["default"].S // top

          };
        } else {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](cx, y + h),
            direction: _Point__WEBPACK_IMPORTED_MODULE_1__["default"].N // bottom

          };
        }
      } else if (cy === py) {
        if (cx > px) {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x, cy),
            direction: _Point__WEBPACK_IMPORTED_MODULE_1__["default"].E // left

          };
        } else {
          return {
            point: new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](x + w, cy),
            direction: _Point__WEBPACK_IMPORTED_MODULE_1__["default"].W // right

          };
        }
      }

      var tx = cx;
      var ty = cy;

      if (orthogonal) {
        if (px >= x && px <= x + w) {
          tx = px;
        } else if (py >= y && py <= y + h) {
          ty = py;
        }
      }

      var p, dir; // TODO direction calculation is not quite right.
      // In which quadrant will the intersection be?
      // set the slope and offset of the border line accordingly

      if (px < cx) {
        if (py < cy) {
          p = _Line__WEBPACK_IMPORTED_MODULE_2__["default"].intersection(px, py, tx, ty, cx, y, x, cy);
          dir = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].S;
        } else {
          p = _Line__WEBPACK_IMPORTED_MODULE_2__["default"].intersection(px, py, tx, ty, cx, y + h, x, cy);
          dir = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].N;
        }
      } else if (py < cy) {
        p = _Line__WEBPACK_IMPORTED_MODULE_2__["default"].intersection(px, py, tx, ty, cx, y, x + w, cy);
        dir = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].E;
      } else {
        p = _Line__WEBPACK_IMPORTED_MODULE_2__["default"].intersection(px, py, tx, ty, cx, y + h, x + w, cy);
        dir = _Point__WEBPACK_IMPORTED_MODULE_1__["default"].W;
      }

      return {
        point: p,
        direction: dir
      };
    }
  }]);

  return Rhombus;
}(_Shape__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/geometry/Shape.js":
/*!*******************************!*\
  !*** ./src/geometry/Shape.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Point */ "./src/geometry/Point.js");
/* harmony import */ var _Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Rectangle */ "./src/geometry/Rectangle.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var registry = {};

var Shape =
/*#__PURE__*/
function () {
  function Shape(x, y, width, height, config) {
    _classCallCheck(this, Shape);

    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaults(this, config, {
      x: 0,
      y: 0,
      width: 0,
      height: 0
    });
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
     * @param orthogonal
     * @returns {*|{point, direction}}
     */

  }, {
    key: "getPerimeter",
    value: function getPerimeter(refPt) {
      var orthogonal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      return this.constructor.getPerimeter(this, refPt, orthogonal);
    }
  }, {
    key: "render",
    value: function render(view) {
      var template = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.template(view.getTemplate(this.name, this));

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
      return new _Point__WEBPACK_IMPORTED_MODULE_1__["default"](this.x, this.y);
    }
  }, {
    key: "bounds",
    get: function get() {
      return new _Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"](this.x, this.y, this.width, this.height);
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

/* harmony default export */ __webpack_exports__["default"] = (Shape);

/***/ }),

/***/ "./src/graph/Cell.js":
/*!***************************!*\
  !*** ./src/graph/Cell.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cell; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
/* harmony import */ var _util_Cache__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Cache */ "./src/util/Cache.js");
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
/* harmony import */ var _geometry_Shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../geometry/Shape */ "./src/geometry/Shape.js");
/* harmony import */ var _view_Label__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../view/Label */ "./src/view/Label.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }







/**
 * The Cell is the common parent for Node and Edge.
 */

var Cell =
/*#__PURE__*/
function () {
  function Cell(graph) {
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
      id: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId()
    };

    _classCallCheck(this, Cell);

    this.graph = graph;
    this.id = config.id;
    delete config.id; // Initialize decorators

    if (config.decorators) {
      this.createDecorators(config.decorators);
      delete config.decorators;
    } // Initialize View Properties


    if (config.views) {
      this.viewProps = config.views;
      delete config.views;
    } // Initialize type


    var Type = config.type || 'Default';
    Type = _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].type(this.constructor.namespace, Type);

    if (!Type) {
      throw new Error('Type not found ' + config.type);
    }

    delete config.type;
    this.props = new Type(config);
  }

  _createClass(Cell, [{
    key: "prop",
    value: function prop(name, value) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(value)) {
        return this.props[name];
      }

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
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var name = arguments.length > 1 ? arguments[1] : undefined;
      var value = arguments.length > 2 ? arguments[2] : undefined;

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(value)) {
        if (key === 'default') {
          return this.prop(name, value);
        }

        return this.viewProps[key][name];
      }

      if (key === 'default') {
        this.prop(name, value);
      } else {
        if (!this.viewProps[key]) {
          this.viewProps[key] = {};
        }

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
      return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign({
        id: this.id,
        key: key,
        className: this.computedClassName,
        style: this.viewProp(key, 'style'),
        namespace: this.namespace
      }, shape);
    }
  }, {
    key: "getShape",
    value: function getShape(key) {
      var shape = _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.id + '.shape', key);
      if (shape) return shape;
      var shapeConfig = this.viewProp(key, 'shape');
      var ShapeClass = shapeConfig ? _geometry_Shape__WEBPACK_IMPORTED_MODULE_4__["default"].getShape(shapeConfig.name) : _geometry_Shape__WEBPACK_IMPORTED_MODULE_4__["default"].getShape('Rectangle');
      var x = this.viewProp(key, 'x');
      var y = this.viewProp(key, 'y');
      var width = this.viewProp(key, 'width');
      var height = this.viewProp(key, 'height');
      shape = new ShapeClass(x, y, width, height, shapeConfig);
      _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.id + '.shape', shape, key);
      return shape;
    }
  }, {
    key: "render",
    value: function render(view) {
      var template = _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.id + '.template', view.id);

      if (!template) {
        // create the template
        var role = this.prop('role');
        template = view.getTemplate('$' + role, null, this);

        if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(template)) {
          template = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.template(template);
        }

        _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.id + '.template', template, view.id);
      }

      return template(this.getView(view.id));
    }
  }, {
    key: "renderShape",
    value: function renderShape(view) {
      var shape = this.getShape(view.id);

      if (shape) {
        return shape.render(view);
      }

      return '';
    }
  }, {
    key: "renderLabel",
    value: function renderLabel(view) {
      if (this === this.graph.currentRoot) {
        return null;
      }

      var box = this.getLabelBox(view.id);

      if (box) {
        return view.renderLabel(box);
      }

      return '';
    }
  }, {
    key: "getLabelBox",
    value: function getLabelBox(key) {
      var box = _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].get(this.id + '.labelBox', key);
      if (box) return box;
      var shape = this.getShape(key); // Just get the config will have a positive performance boost for IE11 and IE10.

      box = _view_Label__WEBPACK_IMPORTED_MODULE_5__["default"].getLabelBox(this.prop('label'), this.viewProp(key, 'labelConfig'), shape.width, shape.height);
      _util_Cache__WEBPACK_IMPORTED_MODULE_2__["default"].set(this.id + '.labelBox', box, key);
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
        var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_3__["default"](this.prop('role'));
        var props = this.props;

        if (props.hasOwnProperty('className')) {
          buf.append(props['className']);
        }

        props = props.constructor.prototype;

        while (props) {
          if (props.hasOwnProperty('className')) {
            buf.append(props['className']);
          }

          props = Object.getPrototypeOf(props);
        }

        this._computedClassName = buf.toString(' ');
      }

      return this._computedClassName;
    }
  }, {
    key: "namespace",
    get: function get() {
      if (this === this.graph.currentRoot) return '';
      return 'root.' + this.prop('role');
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




/***/ }),

/***/ "./src/graph/Edge.js":
/*!***************************!*\
  !*** ./src/graph/Edge.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Cell */ "./src/graph/Cell.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");
/* harmony import */ var _geometry_Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../geometry/Link */ "./src/geometry/Link.js");
/* harmony import */ var _view_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/Label */ "./src/view/Label.js");
/* harmony import */ var _util_Cache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Cache */ "./src/util/Cache.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Edge =
/*#__PURE__*/
function (_Cell) {
  _inherits(Edge, _Cell);

  function Edge(graph) {
    var _this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var source = arguments.length > 2 ? arguments[2] : undefined;
    var target = arguments.length > 3 ? arguments[3] : undefined;

    _classCallCheck(this, Edge);

    if (!config.id) config.id = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId('E');
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Edge).call(this, graph, config));
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
        if (node) {
          node.setEdgeAt(this, pos);
        }
      } else {
        if (end) {
          // first remove the edge from the current end
          end.removeEdge(this);
        }

        if (node) {
          if (dir == 'source') {
            node.addOutEdge(this, pos);
          } else {
            node.addInEdge(this, pos);
          }
        }

        if (dir == 'source') {
          this.source = node;
        } else {
          this.target = node;
        } // this.clearPoints();

      }
    }
  }, {
    key: "getLabelBox",
    value: function getLabelBox(key) {
      var label = this.prop('label');

      if (label) {
        return _view_Label__WEBPACK_IMPORTED_MODULE_4__["default"].getLabelBoxForLink(label, this.viewProp(key, 'labelConfig'), this.getShape(key));
      }

      return null;
    }
    /**
    * Return a pair of points as reference to the calculation of start and end points.
    */

  }, {
    key: "getReferencePoints",
    value: function getReferencePoints(key) {
      var pts = [];

      if (this.source) {
        pts.push(this.source.getShape(key).center);
      } else {
        pts.push(this.viewProp(key, 'start'));
      }

      if (this.target) {
        pts.push(this.target.getShape(key).center);
      } else {
        pts.push(this.viewProp(key, 'end'));
      }

      return pts;
    }
  }, {
    key: "getTerminalVisual",
    value: function getTerminalVisual(key, orthogonal) {
      var refPts = this.getReferencePoints(key);
      var terminals = [];

      var getBound = function getBound(pt) {
        return new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"](pt.x, pt.y, 3, 3);
      };

      if (this.source) {
        terminals.push(this.source.getPort(key, this.prop('sourcePort'), refPts[1], orthogonal));
      } else {
        terminals.push({
          point: refPts[0],
          direction: _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"].getDirection(getBound(refPts[0]), refPts[1], true)
        });
      }

      if (this.target) {
        terminals.push(this.target.getPort(key, this.prop('targetPort'), refPts[0], orthogonal));
      } else {
        terminals.push({
          point: refPts[1],
          direction: _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"].getDirection(getBound(refPts[1]), refPts[0], true)
        });
      }

      return terminals;
    }
  }, {
    key: "getShape",
    value: function getShape(key) {
      var shape = _util_Cache__WEBPACK_IMPORTED_MODULE_5__["default"].get(this.id + '.shape', key);
      if (shape) return shape;
      var config = this.viewProp(key, 'shape');
      shape = _geometry_Link__WEBPACK_IMPORTED_MODULE_3__["default"].getLink(this.getTerminalVisual(key, config.orthogonal), config, this.prop('startMarker'), this.prop('endMarker'));
      _util_Cache__WEBPACK_IMPORTED_MODULE_5__["default"].set(this.id + '.shape', shape, key);
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
      _get(_getPrototypeOf(Edge.prototype), "destroy", this).call(this);

      this.setSource(null);
      this.setTarget(null);
    }
  }]);

  return Edge;
}(_Cell__WEBPACK_IMPORTED_MODULE_1__["default"]);

Edge.namespace = 'Edges';
/* harmony default export */ __webpack_exports__["default"] = (Edge);
/*

Edge.prototype.isVisible = function() {
	if (this.graph.getProperty("allowDanglingEdges")) {
		return (this.source ? this.source.isVisible() : true) && (this.target ? this.target.isVisible() : true) && this.getProperty("visible");
	} else
		return this.source && this.target && this.getProperty('visible') && this.source.isVisible() && this.target.isVisible();
};

*/

/***/ }),

/***/ "./src/graph/Graph.js":
/*!****************************!*\
  !*** ./src/graph/Graph.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
/* harmony import */ var _Node__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Node */ "./src/graph/Node.js");
/* harmony import */ var _Edge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Edge */ "./src/graph/Edge.js");
/* harmony import */ var _view_Marker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../view/Marker */ "./src/view/Marker.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






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

var Graph =
/*#__PURE__*/
function () {
  function Graph() {
    var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId('G');
    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var model = arguments.length > 2 ? arguments[2] : undefined;

    _classCallCheck(this, Graph);

    this.id = id;
    this.nodes = {};
    this.edges = {};
    this.selection = null;
    this.destroyed = false;
    _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildTypes(config.nodeTypes, 'Nodes', nodeDefaults);
    _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].buildTypes(config.edgeTypes, 'Edges', edgeDefaults); // check for markers.

    this.markers = [];
    var edgeTypes = _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].type(_Edge__WEBPACK_IMPORTED_MODULE_3__["default"].namespace);
    var marker;
    var markerConfig;
    edgeTypes.forEach(function (type) {
      markerConfig = type.prototype.startMarker;

      if (markerConfig) {
        marker = _view_Marker__WEBPACK_IMPORTED_MODULE_4__["default"].getMarker(markerConfig, true);
        this.markers.push(marker);
      }

      markerConfig = type.prototype.endMarker;

      if (markerConfig) {
        marker = _view_Marker__WEBPACK_IMPORTED_MODULE_4__["default"].getMarker(markerConfig, false);
        this.markers.push(marker);
      }
    }, this);
    delete config.nodeTypes;
    delete config.edgeTypes;
    _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].initConfig(this, config);
    this.root = null;

    if (model) {
      this.loadModel(model);
    }
  }

  _createClass(Graph, [{
    key: "addNode",

    /**
    * Create a new Node
    * @param config
    * @param parent
    * @param pos
    * @returns {*}
    */
    value: function addNode(config) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
      var pos = arguments.length > 2 ? arguments[2] : undefined;
      var NodeClass = Graph.getJSClass(config, _Node__WEBPACK_IMPORTED_MODULE_2__["default"]);
      var node = new NodeClass(this, config);

      if (parent) {
        Graph.addChild(parent, node, pos);
      } else {
        this.root = node;
        this.root.prop('role', 'root');
      }

      this.nodes[node.id] = node;
      return node;
    }
    /**
    * Create a new Edge
    * @param config
    * @param parent
    * @param from
    * @param to
    * @returns {*}
    */

  }, {
    key: "addEdge",
    value: function addEdge(config) {
      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
      var from = arguments.length > 2 ? arguments[2] : undefined;
      var to = arguments.length > 3 ? arguments[3] : undefined;
      var EdgeClass = Graph.getJSClass(config, _Edge__WEBPACK_IMPORTED_MODULE_3__["default"]);
      var edge = new EdgeClass(this, config, from, to);
      Graph.addChild(parent, edge);
      this.edges[edge.id] = edge;
      return edge;
    }
    /**
    * Added a new child to the parent. The parent has to be a node.
    * @param parent
    * @param child
    */

  }, {
    key: "loadModel",
    value: function loadModel(model) {
      var _this = this;

      var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
      var nodes = model.nodes;
      var edges = model.edges;
      delete model.nodes;
      delete model.edges;
      var node = this.addNode(model, parent);

      if (nodes) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(nodes, function (child) {
          _this.loadModel(child, node);
        });
      }

      if (edges) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(edges, function (edge) {
          var from, to;

          if (edge.from) {
            from = _this.nodes[edge.from];
          }

          if (edge.to) {
            to = _this.nodes[edge.to];
          }

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
        var type = _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].type(defaultClass.namespace, config.type);

        if (type) {
          jsClass = type.jsClass;
        }
      }

      return _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].getConstructor(jsClass, defaultClass);
    }
  }, {
    key: "addChild",
    value: function addChild(parent, child) {
      if (!parent.children) {
        parent.children = [];
      }

      if (child.parent != parent) {
        parent.children.push(child);

        if (child.parent && child.parent.children) {
          child.parent.children = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.without(child.parent.children, child);
        }
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
/* harmony default export */ __webpack_exports__["default"] = (Graph);

/***/ }),

/***/ "./src/graph/Node.js":
/*!***************************!*\
  !*** ./src/graph/Node.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
/* harmony import */ var _Cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Cell */ "./src/graph/Cell.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * A Node represents vertex of the graph.
 */

var Node =
/*#__PURE__*/
function (_Cell) {
  _inherits(Node, _Cell);

  function Node(graph) {
    var _this;

    var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, Node);

    if (!config.id) config.id = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.uniqueId('N');
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Node).call(this, graph, config));
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
        if (this === node) {
          return true;
        }

        node = node.parent;
      }

      return false;
    }
  }, {
    key: "removeEdge",
    value: function removeEdge(edge) {
      var edges = edge.source === this ? this.outEdges : this.inEdges;

      for (var i = 0; i < edges.length; i++) {
        if (edge === edges[i]) {
          edges.splice(i, 1);
          break;
        }
      }
    } // Add a new incoming edge

  }, {
    key: "addInEdge",
    value: function addInEdge(edge, pos) {
      if (pos == null || pos === undefined) {
        this.inEdges.push(edge);
      } else {
        this.inEdges.splice(pos, 0, edge);
      }
    } // Add a new outgoing edge

  }, {
    key: "addOutEdge",
    value: function addOutEdge(edge, pos) {
      if (pos == null || pos === undefined || pos > edge.length - 1) {
        this.outEdges.push(edge);
      } else {
        this.outEdges.splice(pos, 0, edge);
      }
    }
  }, {
    key: "renderChildren",
    value: function renderChildren(view) {
      if (this.children) {
        var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_1__["default"]();

        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(this.children, function (child) {
          buf.append(child.render(view));
        });

        return buf.toString();
      }

      return '';
    }
  }, {
    key: "getPort",
    value: function getPort(key) {
      var portName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
      var endPt = arguments.length > 2 ? arguments[2] : undefined;
      var orthogonal = arguments.length > 3 ? arguments[3] : undefined;
      var shape = this.getShape(key);

      if (portName === 'auto') {
        return shape.getPerimeter(endPt, orthogonal);
      }

      return null;
    }
  }, {
    key: "toString",
    value: function toString() {
      var label = this.prop('label') ? this.prop('label') : 'undefined';

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(label)) {
        label = label[0];
      }

      return 'Node:{id:' + this.id + ';label:' + label + ';type:' + this.props.constructor.typeName + '}';
    }
  }]);

  return Node;
}(_Cell__WEBPACK_IMPORTED_MODULE_2__["default"]);

Node.namespace = 'Nodes';
/* harmony default export */ __webpack_exports__["default"] = (Node);
/*

/**
 * The DrillDownParent is the parent that displays the vertex when drilled down.
 *
Vertex.prototype.getDrillDownParent = function() {
  return this.parent;
};

Vertex.prototype.isLocked = function() {
  let mode = this.getProperty("mode") || 3;
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

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./util/base64 */ "./src/util/base64.js");
/* harmony import */ var _util_Cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/Cache */ "./src/util/Cache.js");
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/Utils */ "./src/util/Utils.js");
/* harmony import */ var _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/dom-utils */ "./src/util/dom-utils.js");
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/string-buffer */ "./src/util/string-buffer.js");
/* harmony import */ var _geometry_Point__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geometry/Point */ "./src/geometry/Point.js");
/* harmony import */ var _geometry_Line__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./geometry/Line */ "./src/geometry/Line.js");
/* harmony import */ var _geometry_Shape__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./geometry/Shape */ "./src/geometry/Shape.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./geometry/Rectangle */ "./src/geometry/Rectangle.js");
/* harmony import */ var _geometry_Ellipse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./geometry/Ellipse */ "./src/geometry/Ellipse.js");
/* harmony import */ var _geometry_Rhombus__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./geometry/Rhombus */ "./src/geometry/Rhombus.js");
/* harmony import */ var _geometry_Link__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./geometry/Link */ "./src/geometry/Link.js");
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lib/bean */ "./lib/bean.js");
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_lib_bean__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _event_event_dispatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./event/event-dispatcher */ "./src/event/event-dispatcher.js");
/* harmony import */ var _graph_Graph__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./graph/Graph */ "./src/graph/Graph.js");
/* harmony import */ var _graph_Cell__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./graph/Cell */ "./src/graph/Cell.js");
/* harmony import */ var _graph_Node__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./graph/Node */ "./src/graph/Node.js");
/* harmony import */ var _graph_Edge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./graph/Edge */ "./src/graph/Edge.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _layout_FlowLayout__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./layout/FlowLayout */ "./src/layout/FlowLayout.js");
/* harmony import */ var _view_Label__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./view/Label */ "./src/view/Label.js");
/* harmony import */ var _view_Marker__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./view/Marker */ "./src/view/Marker.js");
/* harmony import */ var _view_Renderer__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./view/Renderer */ "./src/view/Renderer.js");
/* harmony import */ var _view_SVGRenderer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./view/SVGRenderer */ "./src/view/SVGRenderer.js");
/* harmony import */ var _behavior_GraphBehavior__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./behavior/GraphBehavior */ "./src/behavior/GraphBehavior.js");
























 // import SelectionBehavior from './behavior/SelectionBehavior'

_geometry_Shape__WEBPACK_IMPORTED_MODULE_7__["default"].addShape('Rectangle', _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_8__["default"]);
_geometry_Shape__WEBPACK_IMPORTED_MODULE_7__["default"].addShape('Ellipse', _geometry_Ellipse__WEBPACK_IMPORTED_MODULE_9__["default"]);
_geometry_Shape__WEBPACK_IMPORTED_MODULE_7__["default"].addShape('Rhombus', _geometry_Rhombus__WEBPACK_IMPORTED_MODULE_10__["default"]);
/* harmony default export */ __webpack_exports__["default"] = ({
  Base64: _util_base64__WEBPACK_IMPORTED_MODULE_0__["default"],
  Cache: _util_Cache__WEBPACK_IMPORTED_MODULE_1__["default"],
  Utils: _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"],
  DomUtils: _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"],
  StringBuffer: _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"],
  Point: _geometry_Point__WEBPACK_IMPORTED_MODULE_5__["default"],
  Line: _geometry_Line__WEBPACK_IMPORTED_MODULE_6__["default"],
  Shape: _geometry_Shape__WEBPACK_IMPORTED_MODULE_7__["default"],
  Rectangle: _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_8__["default"],
  Ellipse: _geometry_Ellipse__WEBPACK_IMPORTED_MODULE_9__["default"],
  Link: _geometry_Link__WEBPACK_IMPORTED_MODULE_11__["default"],
  Events: _lib_bean__WEBPACK_IMPORTED_MODULE_12___default.a,
  EventDispatcher: _event_event_dispatcher__WEBPACK_IMPORTED_MODULE_13__["default"],
  Label: _view_Label__WEBPACK_IMPORTED_MODULE_20__["default"],
  Marker: _view_Marker__WEBPACK_IMPORTED_MODULE_21__["default"],
  Graph: _graph_Graph__WEBPACK_IMPORTED_MODULE_14__["default"],
  Cell: _graph_Cell__WEBPACK_IMPORTED_MODULE_15__["default"],
  Node: _graph_Node__WEBPACK_IMPORTED_MODULE_16__["default"],
  Edge: _graph_Edge__WEBPACK_IMPORTED_MODULE_17__["default"],
  Layout: _layout_Layout__WEBPACK_IMPORTED_MODULE_18__["default"],
  FlowLayout: _layout_FlowLayout__WEBPACK_IMPORTED_MODULE_19__["default"],
  Renderer: _view_Renderer__WEBPACK_IMPORTED_MODULE_22__["default"],
  SVGRenderer: _view_SVGRenderer__WEBPACK_IMPORTED_MODULE_23__["default"],
  GraphBehavior: _behavior_GraphBehavior__WEBPACK_IMPORTED_MODULE_24__["default"] // SelectionBehavior

});

/***/ }),

/***/ "./src/layout/FlowLayout.js":
/*!**********************************!*\
  !*** ./src/layout/FlowLayout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ "./src/layout/Layout.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var FlowLayout =
/*#__PURE__*/
function (_Layout) {
  _inherits(FlowLayout, _Layout);

  function FlowLayout() {
    _classCallCheck(this, FlowLayout);

    return _possibleConstructorReturn(this, _getPrototypeOf(FlowLayout).apply(this, arguments));
  }

  _createClass(FlowLayout, [{
    key: "layout",
    value: function layout(root, bounds) {
      var items;

      if (!root) {
        items = this.owner.childNodes;
      } else if (_.isArray(root)) {
        items = root;
      } else {
        items = root.getLinkedNodes('target');
      }

      if (!items || items.length == 0) return;
      var x = 0;
      var y = 0;
      var h = 0;
      var node;
      var p1 = 0;
      var p2 = 0;

      for (var i = 0; i < items.length; i++) {
        node = items[i];

        if (x > 0 && x + this.hgap + node.getProperty('width') > bounds.width) {
          // create new line
          y += h + this.vgap;
          x = 0;
          h = 0;
          p1 = 0;
          p2++;
        }

        node._flPos = [p1, p2];
        node.moveTo([bounds.x + x, bounds.y + y]);
        x += this.hgap + node.getProperty('width');
        p1++;
        h = h < node.getProperty('height') ? node.getProperty('height') : h;
      }

      this.trigger(new Rectangle(bounds.x, bounds.y, bounds.width, y + h));
    }
  }]);

  return FlowLayout;
}(_Layout__WEBPACK_IMPORTED_MODULE_0__["default"]);

FlowLayout.DEFAULTS = {
  hgap: 10,
  vgap: 10
};
/* harmony default export */ __webpack_exports__["default"] = (FlowLayout);

/***/ }),

/***/ "./src/layout/Layout.js":
/*!******************************!*\
  !*** ./src/layout/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Layout =
/*#__PURE__*/
function () {
  function Layout() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Layout);

    if (config.hasOwnProperty('orientation') && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(config.orientation)) {
      if (config.orientation.toUpperCase() == 'HORIZONTAL') {
        config.orientation = Layout.HORIZONTAL;
      } else {
        delete config.orientation;
      }
    }

    _util_Utils__WEBPACK_IMPORTED_MODULE_1__["default"].initConfig(this, config);
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
/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./src/util/Cache.js":
/*!***************************!*\
  !*** ./src/util/Cache.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  clear: function clear(namespace) {
    if (!namespace) {
      caches = {};
    } else if (caches[namespace]) {
      caches[namespace] = {};
    }
  },
  getCache: function getCache() {
    var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';

    if (!caches[namespace]) {
      caches[namespace] = {};
    }

    return caches[namespace];
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Cache);

/***/ }),

/***/ "./src/util/Utils.js":
/*!***************************!*\
  !*** ./src/util/Utils.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _geometry_Point__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../geometry/Point */ "./src/geometry/Point.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // util variables

var _debugging = [];
var _debugAll = false;
var typeRegistry = {};
var splice = Array.splice;
/**
 * Utility functions
 */

/* harmony default export */ __webpack_exports__["default"] = ({
  type: function type(namespace, name, _type) {
    if (!typeRegistry[namespace]) {
      typeRegistry[namespace] = new Map();
    }

    if (!name) {
      return typeRegistry[namespace];
    }

    if (!_type) {
      return typeRegistry[namespace].get(name);
    }

    typeRegistry[namespace].set(name, _type);
  },
  createType: function createType(namespace, props, defaultType) {
    var name = props.name; // first check if type exists

    var type = this.type(namespace, name);

    if (!type) {
      var extend = props.extends ? this.type(namespace, props.extends) : null;

      if (!extend && defaultType) {
        extend = defaultType;
      }

      if (extend) {
        type =
        /*#__PURE__*/
        function (_extend) {
          _inherits(type, _extend);

          function type() {
            _classCallCheck(this, type);

            return _possibleConstructorReturn(this, _getPrototypeOf(type).apply(this, arguments));
          }

          return type;
        }(extend);
      } else {
        type = function type(config) {
          _classCallCheck(this, type);

          lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(this, config);
        };
      }

      delete props.name;
      delete props.extends;

      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(type.prototype, props);

      type.typeName = name;
      this.type(namespace, name, type);
      this.log('Utils', 'Utils.createType - ' + namespace + '.' + name);
    }

    return type;
  },
  buildTypes: function buildTypes(types, namespace, defaultType) {
    var _this = this;

    this.log('Utils', 'Utils.buildTypes - ' + namespace);

    if (!types && defaultType) {
      this.createType(namespace, defaultType);
      this.log('Utils', 'Utils.buildTypes end');
      return;
    }

    if (defaultType) {
      var type = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.remove(types, {
        name: defaultType.name
      });

      type = type.length > 0 ? type[0] : null;

      if (type) {
        defaultType = this.createType(namespace, lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultsDeep(type, defaultType));
      } else {
        defaultType = this.createType(namespace, defaultType);
      }
    }

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(types, function (type) {
      _this.createType(namespace, type, defaultType);
    });

    this.log('Utils', 'Utils.buildTypes end');
  },
  // Helper function to correctly set up the prototype chain, for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  extend: function extend(child, parent, protoProps, staticProps) {
    // Add static properties to the constructor function, if supplied.
    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(child, parent, staticProps); // Set the prototype chain to inherit from `parent`, without calling
    // `parent`'s constructor function.


    var Surrogate = function Surrogate() {
      this.constructor = child;
    };

    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate(); // Add prototype properties (instance properties) to the subclass,
    // if supplied.

    if (protoProps) lodash__WEBPACK_IMPORTED_MODULE_0___default.a.extend(child.prototype, protoProps); // Set a convenience property in case the parent's prototype is needed later.

    child.superclass = parent.prototype;
    return child;
  },
  initConfig: function initConfig(obj, config) {
    var props = {};
    var c = obj.constructor;
    var cArr = [c];

    while (c) {
      if (c.super) {
        c = c.super.constructor;
        splice.apply(cArr, [0, 0, c]);
      } else {
        c = null;
      }
    }

    for (var i = 0; i < cArr.length; i++) {
      c = cArr[i];

      if (c.DEFAULTS) {
        lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(props, c.DEFAULTS);
      }
    }

    obj.props = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign(props, config);

    c.prototype.prop = function (name, value) {
      if (!value) {
        return this.props[name];
      }

      this.props[name] = value;
    };
  },

  /**
   * Gets the JS class constructor.
   * @param {Object} jsClass
   * @param {Object} defaultClass
   */
  getConstructor: function getConstructor(jsClass, defaultClass) {
    if (!jsClass) {
      jsClass = defaultClass;
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(jsClass)) {
      jsClass = eval(jsClass); // eslint-disable-line no-eval
    }

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
    var debug = _debugAll;

    if (!_debugAll) {
      debug = false;

      for (var i = 0; i < _debugging.length; i++) {
        if (_debugging[i] === name) debug = true;
      }
    }

    if (!debug) {
      return;
    }

    while (name.length < 10) {
      name = name + ' ';
    }

    name = name.substring(0, 10) + ' - ';
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
    if (o instanceof _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      return new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"](o.x * scale + t[0], o.y * scale + t[1], o.width * scale, o.height * scale);
    } else if (o instanceof _geometry_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return new _geometry_Point__WEBPACK_IMPORTED_MODULE_1__["default"](o.x * scale + t[0], o.y * scale + t[1]);
    } else {
      return [o[0] * scale + t[0], o[1] * scale + t[1]];
    }
  },

  /**
   * Get the position relative to the graph that's scaled, i.e., relative position considering translation and scale.
   * @param t the current translation
   * @param scale the current scale
   * @param o can be either a Point or a Rectangle or a Point array.
   */
  scale: function scale(t, _scale, o) {
    if (o instanceof _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"]) {
      return new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_2__["default"]((o.x - t[0]) / _scale, (o.y - t[1]) / _scale, o.width / _scale, o.height / _scale);
    } else if (o instanceof _geometry_Point__WEBPACK_IMPORTED_MODULE_1__["default"]) {
      return new _geometry_Point__WEBPACK_IMPORTED_MODULE_1__["default"]((o.x - t[0]) / _scale, (o.y - t[1]) / _scale);
    } else {
      return [(o[0] - t[0]) / _scale, (o[1] - t[1]) / _scale];
    }
  },

  /**
   * Convenience method.
   */
  getProperty: function getProperty(obj, prop) {
    if (!obj) {
      return null;
    }

    if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(obj, prop)) {
      return obj[prop];
    }

    if (obj.prop && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(obj.prop)) {
      return obj.prop(prop);
    }

    return null;
  }
});

/***/ }),

/***/ "./src/util/base64.js":
/*!****************************!*\
  !*** ./src/util/base64.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// http://www.webtoolkit.info/javascript-base64.html
var Base64 = {
  // private property
  _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
  // public method for encoding
  encode: function encode(input) {
    var output = '';
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
    var output = '';
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '');

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
    string = string.replace(/\r\n/g, '\n');
    var utftext = '';

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
    var string = '';
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
/* harmony default export */ __webpack_exports__["default"] = (Base64);

/***/ }),

/***/ "./src/util/dom-utils.js":
/*!*******************************!*\
  !*** ./src/util/dom-utils.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var inBrowser = function inBrowser() {
  return typeof window !== 'undefined' && window.navigator && typeof navigator !== 'undefined';
};
/**
 * dom Utility functions
 */


/* harmony default export */ __webpack_exports__["default"] = ({
  isIE: function () {
    if (!inBrowser()) return false;
    var sAgent = window.navigator.userAgent;
    var Idx = sAgent.indexOf('MSIE');

    if (Idx > 0) {
      // If IE, return version number.
      return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf('.', Idx)));
    } else if (navigator.userAgent.match(/Trident\/7\./)) {
      // If IE 11 then look for Updated user agent string.
      return 11;
    } else if (navigator.userAgent.match(/Edge\//)) {
      return 'Edge';
    } else {
      return false;
    }
  }(),
  isFireFox: function () {
    // InstallTrigger: Firefox's API to install add-ons
    return typeof InstallTrigger !== 'undefined';
  }(),
  isChrome: function () {
    if (!inBrowser() || navigator.userAgent.indexOf('Edge') >= 0) return false;
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
    return raw ? parseInt(raw[2], 10) : false;
  }(),
  isMac: function () {
    if (!inBrowser()) return false;
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
  }(),
  isWindows: function () {
    if (!inBrowser()) return false;
    return navigator.appVersion.indexOf('Windows') >= 0;
  }(),
  isLinux: function () {
    if (!inBrowser()) return false;
    return navigator.appVersion.indexOf('Linux') >= 0;
  }(),
  createElement: function createElement(tag, attribs, styles, html) {
    var el = document.createElement(tag);
    this.setElement(el, attribs, styles);

    if (html) {
      el.innerHTML = html;
    }

    return el;
  },
  createElementByString: function createElementByString(str) {
    var temp = this.createElement('div', null, null, str);
    return temp.childNodes;
  },
  setElement: function setElement(el, attribs, styles) {
    if (attribs) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(attribs, function (value, key) {
        el.setAttribute(key, value);
      });
    }

    if (styles) {
      lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(styles, function (value, key) {
        el.style[key] = value;
      });
    }
  },
  testElement: function testElement(node, method) {
    return node && node.nodeType === 1 && (!method || method(node));
  },
  getAncestorBy: function getAncestorBy(node, method) {
    while ((node = node.parentNode) !== null) {
      if (this.testElement(node, method)) {
        return node;
      }
    }

    return null;
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
    if (w) el.style.width = w + 'px';
    if (h) el.style.height = h + 'px';
  },
  preloadImages: function preloadImages(array) {
    if (!this.preloadImages.list) this.preloadImages.list = [];
    if (!this.preloadImages.loaded) this.preloadImages.loaded = {};
    var list = this.preloadImages.list;
    var img;
    var that = this;

    for (var i = 0; i < array.length; i++) {
      img = new Image();

      img.onload = function () {
        var index = list.indexOf(this);

        if (index !== -1) {
          that.preloadImages.loaded[this.name] = {
            width: this.width,
            height: this.height // remove image from the array once it's loaded
            // for memory consumption reasons

          };
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
  downloadFile: function downloadFile(name, data) {
    if (!data) return;
    var mime = data.match(/^data:([^;,]*)/)[1];

    if (name.indexOf('.') < 0) {
      if (!mime) mime = 'text/plain';

      if (mime === 'text/plain') {
        name = name + '.txt';
      } else {
        var type = mime.split('/')[1];
        if (type.indexOf('+') > 0) type = type.split('+')[0];
        name = name + '.' + type;
      }
    }

    if (this.isIE) {
      var encoded = data.indexOf(';base64') >= 0;

      if (encoded) {
        data = atob(data.replace('data:' + mime + ';base64,', ''));
      } else {
        data = decodeURI(data.replace('data:' + mime + ',', ''));
      }

      data = this.GetBlob(data, mime);
      navigator.msSaveBlob(data, name);
    } else {
      var link = this.createElement('a', {
        href: data,
        download: name
      }, {
        display: 'none'
      });
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    }
  },

  /**
   * Convert b54 to blob. IE only
   */
  GetBlob: function GetBlob(data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;
    var byteArrays = [];

    for (var offset = 0; offset < data.length; offset += sliceSize) {
      var slice = data.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);

      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {
      type: contentType
    });
  },
  openImage: function openImage(name, image) {
    if (!inBrowser()) return;
    var myWindow = window.open('', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, width=500, height=500');
    var myDocument = myWindow.document;
    var img = myDocument.createElement('img');
    this.setElement(img, {
      src: image,
      name: name
    });
    myDocument.body.appendChild(img);
  },

  /**
   * Check whether the key event is from input, textarea or select.
   * @param e  input event
   */
  eventFromInput: function eventFromInput(e) {
    var tagName = e.target.tagName;
    return tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT';
  },

  /**
   * Wait for the element with the specified id to come into existence. Returns a promise
   * @param {*} id The id of the element to wait for
   */
  waitForElement: function waitForElement(id) {
    return new Promise(function (resolve) {
      var el = document.getElementById(id);

      if (!el) {
        var interval = setInterval(function () {
          var el = document.getElementById(id);

          if (el) {
            clearInterval(interval);
            return resolve(el);
          }
        }, 200);
      } else {
        return resolve(el);
      }
    });
  }
});

/***/ }),

/***/ "./src/util/string-buffer.js":
/*!***********************************!*\
  !*** ./src/util/string-buffer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StringBuffer; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/**
 * A string buffer for fast string manipulation
 */

var StringBuffer =
/*#__PURE__*/
function () {
  function StringBuffer(str) {
    _classCallCheck(this, StringBuffer);

    this.buffer = [];

    if (str) {
      this.buffer.push(str);
    }
  }

  _createClass(StringBuffer, [{
    key: "append",
    value: function append(stuff) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(stuff)) {
        this.buffer.push(stuff);
      } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stuff)) {
        this.buffer = this.buffer.concat(stuff);
      } else {
        this.buffer.push('' + stuff);
      }

      return this;
    }
  }, {
    key: "prepend",
    value: function prepend(stuff) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(stuff)) {
        this.buffer.splice(0, 0, stuff);
      } else if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isArray(stuff)) {
        this.buffer = stuff.concat(this.buffer);
      } else {
        this.buffer.splice(0, 0, '' + stuff);
      }

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



/***/ }),

/***/ "./src/view/Label.js":
/*!***************************!*\
  !*** ./src/view/Label.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/bean */ "./lib/bean.js");
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_bean__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
/* harmony import */ var _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom-utils */ "./src/util/dom-utils.js");
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");






var FONT_BOLD = 1;
var FONT_ITALIC = 2;
var FONT_UNDERLINE = 4;
var FONT_SHADOW = 8;
var defaultConfig = {
  fontSize: 11,
  fontFamily: 'Arial',
  fontStyle: 0,
  fontColor: 'black',
  padding: 0,
  linePadding: 0,
  align: 'left',
  width: 0,
  height: 0,
  rotation: null,
  geometry: {
    x: 0,
    y: 0,
    anchorY: 0,
    offsetX: 0,
    offsetY: 0
  }
  /**
   * The label object handles label sizing/positioning
   */

};
/* harmony default export */ __webpack_exports__["default"] = ((function () {
  var stringMeasureEl = null;
  var measureDiv;
  var baselineDiv;
  /**
   * Calculate the size of the string.
   */

  var getStringSize = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.memoize(function (str, fontSize, fontFamily, bold) {
    fontSize = fontSize || 11;
    fontFamily = fontFamily || 'Arial,Helvetica';
    bold = !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(bold) ? bold : false; // first check if there is a string-measuring div available, if not, create now.

    if (!stringMeasureEl) {
      stringMeasureEl = _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement('iframe', {
        id: '_ComputeStylesIframe'
      }, {
        position: 'absolute',
        visibility: 'hidden',
        width: 'auto'
      });
      document.body.appendChild(stringMeasureEl);
      var doc = stringMeasureEl.contentWindow.document;
      doc.open();
      doc.write("<html><body>\n        <div id=\"baselineDiv\" style=\"height:100px;\"><span style=\"line-height:0\">T</span><span style=\"height:100%;display:inline-block;\"></span></div>\n        <div id=\"measureDiv\" style=\"position:absolute;width:auto;height:auto;padding:0;white-space:nowrap;display:inline-block;\"></div>\n        </body></html>");
      doc.close();
      measureDiv = doc.getElementById('measureDiv');
      baselineDiv = doc.getElementById('baselineDiv');
    }

    baselineDiv.style.fontSize = measureDiv.style.fontSize = fontSize;
    baselineDiv.style.fontFamily = measureDiv.style.fontFamily = fontFamily;
    baselineDiv.style.fontWeight = measureDiv.style.fontWeight = bold ? 'bold' : 'normal';
    measureDiv.innerHTML = str;
    var strut = baselineDiv.firstChild;
    var baselineHeight = strut.offsetTop + strut.offsetHeight - baselineDiv.offsetHeight - baselineDiv.offsetTop;
    return {
      width: measureDiv.offsetWidth,
      height: measureDiv.offsetHeight,
      baseline: baselineHeight
    };
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


  var wrap = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.memoize(function (string, maxWidth, fontSize, fontFamily, bold) {
    maxWidth = maxWidth || 0;
    fontSize = fontSize || 11;
    fontFamily = fontFamily || 'Arial,Helvetica';
    bold = !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(bold) ? bold : false;
    var arr = [];
    var spaceSize = getStringSize('&nbsp;', fontSize, fontFamily, bold);
    var space = spaceSize.width;
    arr.lineHeight = spaceSize.height;
    arr.baseline = spaceSize.baseline;

    if (!maxWidth || !string || string === '') {
      arr.push(string);
      arr.width = !string || string === '' ? space : getStringSize(string, fontSize, fontFamily, bold).width;
      arr.height = arr.lineHeight;
      return arr;
    }

    var width = 0; // split the text by lines

    var lines = string.split('\n');
    var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();

    for (var j = 0; j < lines.length; j++) {
      // split each line by word
      var words = lines[j].split(/\s/);
      var line = '';
      var currentWidth = 0;
      var wordWidth = 0;
      var newLine = true;
      var word = void 0;

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

          line = '';
          currentWidth = 0;

          if (!newLine) {
            i--;
          } // move back one word.


          newLine = true;
        } else {
          line = newLine ? word : line + ' ' + word;
          currentWidth = newLine ? wordWidth : currentWidth + space + wordWidth;
          width = Math.max(width, currentWidth);
          newLine = false;
        }
      }

      if (line !== '') {
        buf.append(line);
      }

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
    return _getLabelBox.call(this, label, labelConfig, {
      width: containerWidth,
      height: containerHeight
    });
  }

  function getLabelBoxForLink(label, labelConfig, link) {
    return _getLabelBox.call(this, label, labelConfig, link);
  }

  function _getLabelBox(label) {
    var labelConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var context = arguments.length > 2 ? arguments[2] : undefined;
    labelConfig = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.defaultsDeep(labelConfig, defaultConfig);
    var fontSize = labelConfig.fontSize;
    var fontFamily = labelConfig.fontFamily;
    var fontStyle = labelConfig.fontStyle;
    var bold = (fontStyle & FONT_BOLD) === FONT_BOLD;
    var padding = labelConfig.padding;
    var linePadding = labelConfig.linePadding;
    var align = labelConfig.align;
    var w = labelConfig.width;
    var h = labelConfig.height;

    if (context.width) {
      w = w <= 5 ? context.width * w : w;
      h = h <= 5 ? context.height * h : h;
    }

    w -= 2 * padding;
    h -= 2 * padding;
    w = Math.max(0, w);
    h = Math.max(0, h);

    var geometry = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.clone(labelConfig.geometry);

    var wrappedLabel = this.wrap(label, w, fontSize, fontFamily, bold);
    geometry.width = wrappedLabel.width + 2 * padding;
    geometry.height = wrappedLabel.height + 2 * padding + (wrappedLabel.length - 1) * linePadding;
    var anchor = 'start';
    var dx = 0;
    var setAnchorX = !lodash__WEBPACK_IMPORTED_MODULE_0___default.a.has(geometry, 'anchorX');

    switch (align) {
      case 'center':
        anchor = 'middle';
        if (setAnchorX) geometry.anchorX = 0;
        break;

      case 'right':
        anchor = 'end';
        dx = wrappedLabel.width / 2;
        if (setAnchorX) geometry.anchorX = -0.5;
        break;

      case 'left':
        dx = -wrappedLabel.width / 2;
        if (setAnchorX) geometry.anchorX = 0.5;
        break;
    }

    var pos;

    if (context.getRelativePosition) {
      pos = context.getRelativePosition(geometry);
    } else {
      pos = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getRelativePosition({
        width: context.width,
        height: context.height
      }, geometry);
    }

    var bounds = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__["default"](pos[0], pos[1], geometry.width, geometry.height); // the pivot is the center of rotation when the label has a rotation specified.

    var pivot = align === 'center' ? [0, 0] : align === 'left' ? [-wrappedLabel.width / 2, 0] : [wrappedLabel.width / 2, 0]; // the maximum bounds for the label, used to position inline editor

    geometry.width = Math.max(w + 2 * padding, geometry.width);
    geometry.height = Math.max(h + 2 * padding, geometry.height);

    if (context.getRelativePosition) {
      pos = context.getRelativePosition(geometry);
    } else {
      pos = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getRelativePosition({
        width: context.width,
        height: context.height
      }, geometry);
    }

    var maxBounds = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__["default"](pos[0], pos[1], geometry.width, geometry.height);
    return {
      config: labelConfig,
      label: wrappedLabel,
      _label: label,
      bold: bold,
      underline: fontStyle & FONT_UNDERLINE,
      italic: fontStyle & FONT_ITALIC,
      shadow: fontStyle & FONT_SHADOW,
      dx: dx,
      dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight - wrappedLabel.baseline,
      anchor: anchor,
      lineHeight: wrappedLabel.lineHeight + linePadding,
      pivot: pivot,
      bounds: bounds,
      maxBounds: maxBounds
    };
  }

  function render(view, box) {
    return view.renderLabel(box);
  } // This is the inline editor for editing label text in place.


  var editor = {
    start: function start(key, container, box, refEl, textEl) {
      var _this = this;

      var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1.0;
      var singleLine = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;

      if (this.input) {
        if (this.key !== key) {
          // need to close the existing editor first
          this.stop();
        } else {
          return;
        }
      }

      var tag = singleLine ? 'input' : 'textarea';
      this.input = _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement(tag, {
        id: 'inlineEditor',
        unselectable: 'off'
      }, {
        position: 'absolute',
        overflow: 'hidden',
        padding: '0px',
        margin: '0px',
        border: 'transparent'
      });

      if (singleLine) {
        _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(this.input, 'keydown keyup', function (event) {
          if (event.keyCode === 13) {
            _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.off(_this.input, 'keydown keyup');

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
      var maxBounds = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__["default"](box.maxBounds.x, box.maxBounds.y, box.maxBounds.width * scale, box.maxBounds.height * scale);
      var pos = _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].getCenterPosition(refEl, container);
      pos = [pos[0] + maxBounds.left, pos[1] + maxBounds.top];

      if (textEl) {
        textEl.style.visibility = 'hidden';
      }

      _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].setElement(this.input, null, {
        visibility: 'visible',
        left: pos[0] + 'px',
        top: pos[1] + 'px',
        width: maxBounds.width + 'px',
        height: maxBounds.height + 'px',
        'font-family': labelConfig.fontFamily,
        'font-size': labelConfig.fontSize * scale + 'px',
        'font-weight': (labelConfig.fontStyle & FONT_BOLD) === FONT_BOLD ? 'bold' : 'normal'
        /* "color": labelConfig.fontColor */

      });
      this.input.value = box._label;
      this.input.focus();
      this.input.select();
      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.fire(this, 'editor.start', [this.key]);
    },
    stop: function stop(cancel) {
      if (!this.input) return;
      cancel = cancel || false;

      if (this.textEl) {
        this.textEl.style.visibility = null;
      } // remove the input


      this.input.parentNode.removeChild(this.input);

      if (!cancel) {
        _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.fire(this, 'editor.update', [this.key, this.input.value]);
      }

      _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.fire(this, 'editor.stop', [this.key]);
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
})());

/***/ }),

/***/ "./src/view/Marker.js":
/*!****************************!*\
  !*** ./src/view/Marker.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");

var registry = {};

var Marker = function () {
  /** Begin Standard Marker Type **/
  function arrow(size, source, styles) {
    var sign = source ? -1 : 1;
    var marker = {
      viewBox: new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](-5, -5, 10, 10),
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
      viewBox: new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](-5, -5, 10, 10),
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
      viewBox: new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](-r, -r, size, size),
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
      viewBox: new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_0__["default"](-5, -5, 10, 10),
      size: size,
      ref: [4 * sign, 0],
      fill: styles.color
    };
    marker.shape = {
      name: 'Polygon',
      points: [[-4, 0], [0, 4], [4, 0], [0, -4]]
    };
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

/* harmony default export */ __webpack_exports__["default"] = (Marker);

/***/ }),

/***/ "./src/view/Renderer.js":
/*!******************************!*\
  !*** ./src/view/Renderer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/bean */ "./lib/bean.js");
/* harmony import */ var _lib_bean__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_bean__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_Utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/Utils */ "./src/util/Utils.js");
/* harmony import */ var _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/dom-utils */ "./src/util/dom-utils.js");
/* harmony import */ var _layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/Layout */ "./src/layout/Layout.js");
/* harmony import */ var _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../geometry/Rectangle */ "./src/geometry/Rectangle.js");
/* harmony import */ var _event_event_dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../event/event-dispatcher */ "./src/event/event-dispatcher.js");
/* harmony import */ var _behavior_GraphBehavior__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../behavior/GraphBehavior */ "./src/behavior/GraphBehavior.js");
/* harmony import */ var _behavior_SelectionBehavior__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../behavior/SelectionBehavior */ "./src/behavior/SelectionBehavior.js");
/* harmony import */ var _Label__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Label */ "./src/view/Label.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }












var Renderer =
/*#__PURE__*/
function () {
  function Renderer(id, container) {
    var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var graph = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

    _classCallCheck(this, Renderer);

    this.id = id;
    this.box = _util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].createElement('div', {
      id: this.id,
      tabindex: 0,
      ns: 'graph'
    }, {
      overflow: 'hidden',
      width: '100%',
      height: '100%',
      position: 'relative'
    });
    container.appendChild(this.box);

    if (config.layout) {
      var LayoutClass = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getConstructor(config.layout.jsClass, _layout_Layout__WEBPACK_IMPORTED_MODULE_4__["default"]);
      this.layout = new LayoutClass(config.layout.config);
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
    _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].initConfig(this, config);
    _lib_bean__WEBPACK_IMPORTED_MODULE_1___default.a.on(_Label__WEBPACK_IMPORTED_MODULE_9__["default"].editor, 'editor.update.*', function (key, value) {
      // this.graph.nodes[key].prop('label', value);
      // this.render();
      console.log(key + '=' + value);
    });
  }

  _createClass(Renderer, [{
    key: "viewport",
    value: function viewport(scaled, _viewport) {
      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isUndefined(scaled) || lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(scaled)) scaled = false;

      if (!_viewport) {
        var vp = new _geometry_Rectangle__WEBPACK_IMPORTED_MODULE_5__["default"](0, 0, this.box.offsetWidth, this.box.offsetHeight);

        if (scaled) {
          return _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].scale(this.translate, this.scale, vp);
        }

        return vp;
      }

      if (!scaled) _viewport = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].scale(this.translate, this.scale, _viewport);
      var w = this.box.offsetWidth;
      var scale = w / _viewport.width;
      this.transform(-_viewport.x * scale, -_viewport.y * scale, scale);
    }
  }, {
    key: "transform",
    value: function transform() {
      var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var graph = this.graph;
      var root = graph ? graph.currentRoot : null;

      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(x)) {
        this._translate[0] = x;

        if (root) {
          root.viewProp(this.id, 'x', x);
        }
      }

      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(y)) {
        this._translate[1] = y;

        if (root) {
          root.viewProp(this.id, 'y', y);
        }
      }

      if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isNull(scale)) {
        this._scale = scale;

        if (root) {
          root.viewProp(this.id, 'scale', scale);
        } // sync the scale between the dispatcher and the graph


        var s = this.dispatcher.scale;

        if (s !== scale) {
          this.dispatcher.scale = scale;
        }
      }

      this.refresh();
    }
  }, {
    key: "render",
    value: function render() {
      if (!this._graph) return false;

      if (this.layout) {
        this.layout.layout(this._graph.currentRoot, this.viewport());
      }

      this.initializeBehaviors();
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
    key: "initializeBehaviors",
    value: function initializeBehaviors() {
      // create the event dispatcher if necessary.
      if (!this.dispatcher) {
        this.dispatcher = new _event_event_dispatcher__WEBPACK_IMPORTED_MODULE_6__["default"](this.box, [this.prop('minZoom'), this.prop('maxZoom')]);
        var JsClass;

        if (this.prop('graphBehavior')) {
          JsClass = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getConstructor(this.prop('graphBehavior'));
          this.graphBehavior = new JsClass(this);
        }

        if (this.prop('selectionBehavior')) {
          JsClass = _util_Utils__WEBPACK_IMPORTED_MODULE_2__["default"].getConstructor(this.prop('selectionBehavior'));
          this.selectionBehavior = new JsClass(this);
        }

        this.dispatcher.register('mouseup.node.label', function (type, ns, target, pos, event) {
          var _this = this;

          var node = this._graph.nodes[target.getAttribute('id')];

          if (!this.dispatcher.dragging && !node._firstSelection) {
            _Label__WEBPACK_IMPORTED_MODULE_9__["default"]._delayEdit = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.delay(function () {
              if (_Label__WEBPACK_IMPORTED_MODULE_9__["default"]._delayEdit) {
                delete _Label__WEBPACK_IMPORTED_MODULE_9__["default"]._delayEdit;
                _Label__WEBPACK_IMPORTED_MODULE_9__["default"].editor.start(node.id, _this.box, node.getLabelBox(_this.id), target, event.nsTarget, _this.scale);
              }
            }, 250);
          }
        }, this);
        this.dispatcher.register([/^mousedown/, /^zoom/], function (type, ns, target, pos, event) {
          if (!_util_dom_utils__WEBPACK_IMPORTED_MODULE_3__["default"].eventFromInput(event)) {
            _Label__WEBPACK_IMPORTED_MODULE_9__["default"].editor.stop();
          }
        }, this);
      }

      this.dispatcher.start();
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

      if (t && lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isFunction(t)) {
        t = t(config);
      } // check if there are any preprocessing tags.


      if (preprocessor) {
        var parts = t.match(/(#{[^#]*})/g);
        var obj = {};

        for (var part in parts) {
          part = parts[part];
          part = part.substring(2, part.length - 1).trim();
          obj[part] = preprocessor[lodash__WEBPACK_IMPORTED_MODULE_0___default.a.camelCase('render ' + part)](this);
        }

        t = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.template(t, {
          interpolate: /#{([\s\S]+?)}/g
        })(obj);
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
        case 'in':
          k = this.scale * this.prop('zoomFactor');
          break;

        case 'out':
          k = this.scale / this.prop('zoomFactor');
          break;

        case 'actual':
          k = 1.0;
          break;

        case 'fit':
          var gridSize = this.prop('gridSize') * 2;
          var gBounds = this.getBounds();
          var vBounds = this.viewport();
          vBounds.width -= gridSize;
          vBounds.height -= gridSize;
          /* Do not zoom more than actual if graph already fits into the bounds */

          k = Math.min(vBounds.width / gBounds.width, vBounds.height / gBounds.height, 1.0); // TODO: Add centering code here or trigger an event for that

          break;

        default:
          if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(k)) k = parseFloat(k);
          break;
      }

      this.transform(null, null, k);
    }
  }]);

  return Renderer;
}();

Renderer.DEFAULTS = {
  defaultClickMode: 'pan',
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
  graphBehavior: _behavior_GraphBehavior__WEBPACK_IMPORTED_MODULE_7__["default"],
  selectionBehavior: _behavior_SelectionBehavior__WEBPACK_IMPORTED_MODULE_8__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (Renderer);

/***/ }),

/***/ "./src/view/SVGRenderer.js":
/*!*********************************!*\
  !*** ./src/view/SVGRenderer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_base64__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/base64 */ "./src/util/base64.js");
/* harmony import */ var _util_dom_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/dom-utils */ "./src/util/dom-utils.js");
/* harmony import */ var _Renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Renderer */ "./src/view/Renderer.js");
/* harmony import */ var _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/string-buffer */ "./src/util/string-buffer.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var NS = 'http://www.w3.org/2000/svg';

if (typeof SVGElement !== 'undefined') {
  var svg = document.createElementNS(NS, 'svg');
  svg.innerHTML = '<circle/>';

  if (svg.firstChild !== '[object SVGCircleElement]') {
    Object.defineProperties(SVGElement.prototype, {
      'outerHTML': {
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
      'innerHTML': {
        enumerable: false,
        configurable: true,
        get: function get() {
          var s = this.outerHTML;
          var ropen = new RegExp('<' + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', 'i');
          var rclose = new RegExp('</' + this.nodeName + '>$', 'i');
          return s.replace(ropen, '').replace(rclose, '');
        },
        set: function set(markup) {
          // empty el first.
          var child;

          while ((child = this.lastChild) !== null) {
            this.removeChild(child);
          }

          var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
          buf.append('<svg>').append(markup).append('</svg');
          var $temp = _util_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('div', null, null, buf.toString()).firstElementChild;

          while ($temp.firstChild) {
            this.appendChild($temp.firstChild);
          }
        }
      }
    });
  } // Define the toDataURL for SVG


  SVGElement.prototype.toDataURL = function (type) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _svg = this;

    var debug = function debug(msg) {};

    if (options['debug'] === true && typeof console !== 'undefined') {
      debug = function debug(msg) {
        console.log('SVG.toDataURL:', msg);
      };
    }

    function exportSVG() {
      var svgXml = _svg.outerHTML;
      var svgDataurl = base64dataURLencode(svgXml);
      debug(type + ' length: ' + svgDataurl.length); // NOTE double data carrier

      if (options.callback) options.callback(svgDataurl);
      return svgDataurl;
    }

    function base64dataURLencode(s) {
      var b64 = 'data:image/svg+xml;base64,'; // https://developer.mozilla.org/en/DOM/window.btoa

      if (window && window.btoa) {
        debug('using window.btoa for base64 encoding');
        b64 += btoa(s);
      } else {
        debug('using custom base64 encoder');
        b64 += _util_base64__WEBPACK_IMPORTED_MODULE_1__["default"].encode(s);
      }

      return b64;
    } // Native export doesn't work very well. should use canvg instead.


    function exportImage(type) {
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d'); // TODO: if (options.keepOutsideViewport), do some translation magic?

      var svgImg = new Image();
      var svgXml = _svg.outerHTML;
      svgImg.src = base64dataURLencode(svgXml);

      svgImg.onload = function () {
        debug('exported image size: ' + [svgImg.width, svgImg.height]);
        canvas.width = svgImg.width;
        canvas.height = svgImg.height;
        ctx.drawImage(svgImg, 0, 0); // SECURITY_ERR WILL HAPPEN NOW

        var imageDataurl = canvas.toDataURL(type);
        debug(type + ' length: ' + imageDataurl.length);
        if (options.callback) options.callback(imageDataurl);else debug('WARNING: no callback set, so nothing happens.');
      };

      svgImg.onerror = function () {
        debug("Can't export! Maybe your browser doesn't support " + 'SVG in img element or SVG input for Canvas drawImage?\n' + 'http://en.wikipedia.org/wiki/SVG#Native_support');
      }; // NOTE: will not return anything

    }

    function exportImageCanvg(type) {
      if (typeof canvg === 'undefined') return null;
      var canvas = _util_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('canvas', null, {
        display: 'none'
      });
      document.body.appendChild(canvas);

      if (type === 'javascript' && typeof jsCanvas !== 'undefined') {
        var xcanvas = new jsCanvas('jscanvastest'); // eslint-disable-line new-cap

        xcanvas.canvas.style.display = 'none'; // xcanvas.canvas = canvas;
      }

      if (!options.keepOutsideViewport) {
        canvg(canvas, _svg.outerHTML);
      } else {
        var padding = options.padding || 0;
        var scale = 1.0;
        var translate = [0, 0];

        var bbox = _svg.getBBox();

        debug('detected svg dimensions ' + [bbox.x, bbox.y, bbox.width, bbox.height]);

        var transform = _svg.firstElementChild.getAttribute('transform');

        if (transform) {
          debug('detected svg transform ' + transform);
          transform = SVGRenderer.transform(transform);
          translate = transform.translate;
          scale = transform.scale;
        }

        var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
        buf.append('<svg width="').append(bbox.width + 2 * padding).append('px" height="').append(bbox.height + 2 * padding).append('px"><g transform="translate(').append(-bbox.x + translate[0] + padding).append(',').append(-bbox.y + translate[1] + padding).append(')scale(').append(scale).append(')">').append(_svg.firstElementChild.innerHTML).append('</g></svg>');

        if (type === 'javascript') {
          xcanvas.compile(buf.toString(), function () {
            if (options.callback) options.callback(xcanvas.toString());
          });
          return;
        } else {
          canvg(canvas, buf.toString());
        }
      }

      var imageDataurl = canvas.toDataURL(type);
      if (options.callback) options.callback(imageDataurl);
      canvas.parentNode.removeChild(canvas);
      return imageDataurl;
    }

    if (!type) type = 'image/svg+xml';
    if (options.keepNonSafe) debug('NOTE: keepNonSafe is NOT supported and will be ignored!');
    if (options.keepOutsideViewport) debug('NOTE: keepOutsideViewport is only supported with canvg exporter.');

    switch (type) {
      case 'image/svg+xml':
        return exportSVG();

      case 'image/png':
      case 'image/jpeg':
      case 'javascript':
        if (!options.renderer) {
          if (window && window.canvg) options.renderer = 'canvg';else options.renderer = 'native';
        }

        switch (options.renderer) {
          case 'canvg':
            debug('using canvg renderer for ' + type + ' image export');
            return exportImageCanvg(type);

          case 'native':
            debug('using native renderer for ' + type + ' export. THIS MIGHT FAIL.');
            return exportImage(type);

          default:
            debug('unknown image renderer given, doing noting (' + options.renderer + ')');
        }

        break;

      default:
        debug("Sorry! Exporting as '" + type + "' is not supported!");
    }

    return null;
  };
}

var SVGRenderer =
/*#__PURE__*/
function (_Renderer) {
  _inherits(SVGRenderer, _Renderer);

  function SVGRenderer() {
    _classCallCheck(this, SVGRenderer);

    return _possibleConstructorReturn(this, _getPrototypeOf(SVGRenderer).apply(this, arguments));
  }

  _createClass(SVGRenderer, [{
    key: "render",
    value: function render() {
      var result = _get(_getPrototypeOf(SVGRenderer.prototype), "render", this).call(this);

      if (result) {
        var root = this.graph.currentRoot;
        var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">');
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
      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]('<defs>');
      buf.append(this.getTemplate('Grid', this.prop('gridSize')));
      var markers = this.graph.markers;

      if (markers.length > 0) {
        buf.append(SVGRenderer.renderMarkers(markers));
      }

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
      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var str1;
      var str2;
      markers.forEach(function (marker) {
        str1 = this.TEMPLATES['Marker'](marker);
        str2 = marker.shape;

        if (!lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(str2)) {
          str2 = this.renderShape(str2);
        }

        str1 = str1.replace(/#\{shape\}/, str2);
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

      if (lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(template)) {
        template = lodash__WEBPACK_IMPORTED_MODULE_0___default.a.template(template);
      }

      return template(shape);
    }
  }, {
    key: "getPathData",
    value: function getPathData(shape) {
      var points = shape.points;
      var controlPts = shape.controlPts;
      if (!points || points.length === 0) return '';

      if (!controlPts && shape.round) {
        // render rounded line joins.
        var newPts = [];
        controlPts = [];
        var prev = points[0];
        var next;
        var d1;
        var d2;
        var corner;
        newPts.push(prev);

        for (var i = 1; i < points.length - 1; i++) {
          next = points[i]; // set the control point first.

          controlPts[2 * i] = [next, next]; // check the size of the corner.

          d1 = prev.distance(next);
          d2 = next.distance(points[i + 1]);
          corner = Math.min(shape.round, d1 / 2, d2 / 2); // split the point into two.

          newPts.push(next.getDirection(prev).scale(corner).translate(next));
          newPts.push(next.getDirection(points[i + 1]).scale(corner).translate(next));
          prev = next;
        }

        newPts.push(points[points.length - 1]);
        points = newPts;
      }

      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]('M');
      var point;

      for (var _i = 0; _i < points.length; _i++) {
        point = points[_i];

        if (_i === 0) {
          buf.append(point);
        } else {
          if (controlPts && controlPts[_i]) {
            buf.append(' C ');

            for (var j = 0; j < controlPts[_i].length; j++) {
              buf.append(controlPts[_i][j]).append(' ');
            }

            buf.append(point);
          } else {
            buf.append(' L ').append(point);
          }
        }
      }

      return buf.toString();
    }
  }, {
    key: "renderLink",
    value: function renderLink(shape) {
      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var d = SVGRenderer.getPathData(shape);

      if (shape.showGauge) {
        buf.append('<path style="stroke: white; stroke-width: 9; visibility: hidden; pointer-events: stroke;" d="').append(d).append('"/>');
      }

      buf.append('<path d="').append(d).append('"');

      if (shape.startMarker || shape.endMarker) {
        buf.append(' style="');

        if (shape.startMarker) {
          buf.append('marker-start: url(#').append(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(shape.startMarker) ? shape.startMarker : shape.startMarker.id).append(');');
        }

        if (shape.endMarker) {
          buf.append('marker-end: url(#').append(lodash__WEBPACK_IMPORTED_MODULE_0___default.a.isString(shape.endMarker) ? shape.endMarker : shape.endMarker.id).append(');');
        }

        buf.append('"');
      }

      buf.append('/>');
      return buf.toString();
    }
  }, {
    key: "appendContent",
    value: function appendContent(el, content) {
      var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]();
      buf.append('<svg>').append(content).append('</svg');
      var temp = _util_dom_utils__WEBPACK_IMPORTED_MODULE_2__["default"].createElement('div', null, null, buf.toString()).firstElementChild;

      while (temp.firstChild) {
        el.appendChild(temp.firstChild);
      }

      return el;
    }
  }, {
    key: "transform",
    value: function transform(_transform) {
      var translate = [0, 0];
      var scale = 1.0; //

      var parts = _transform.match(/translate\(\s*([^)]+)/);

      if (parts) {
        var m = parts[1].trim().match(/([\d.-]+)[ ,]([\d.-]+)/);

        if (m) {
          translate[0] = parseFloat(m[1]) || 0;
          translate[1] = parseFloat(m[2]) || 0;
        } else {
          translate[0] = translate[1] = parseFloat(parts[1]);
        }
      }

      parts = _transform.match(/scale\(\s*([^)]+)/);

      if (parts) {
        scale = parseFloat(parts[1]) || 1.0;
      }

      return {
        translate: translate,
        scale: scale
      };
    }
  }]);

  return SVGRenderer;
}(_Renderer__WEBPACK_IMPORTED_MODULE_3__["default"]);
/* eslint-disable no-template-curly-in-string */


SVGRenderer.TEMPLATES = {
  $root: '<g id="${id}" class="${className}">#{children}</g>',
  $node: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
  $edge: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}">#{shape}#{label}</g>',
  Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"/>',
  Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"/>',
  Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"/>',
  Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"/>',
  Hexagon: function Hexagon(config) {
    var vertical = config.direction === 'north' || config.direction === 'south';

    if (vertical) {
      return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"/>';
    } else {
      return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"/>';
    }
  },
  Polygon: function Polygon(shape) {
    var buf = new _util_string_buffer__WEBPACK_IMPORTED_MODULE_4__["default"]('<polygon points="');
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
    return "\n<marker id=\"".concat(marker.id, "\" markerWidth=\"").concat(marker.size, "\" markerHeight=\"").concat(marker.size, "\" refx=\"").concat(marker.ref[0], "\"\nrefy=\"").concat(marker.ref[1], "\" orient=\"auto\" viewbox=\"").concat(marker.viewBox.x, " ").concat(marker.viewBox.y, " ").concat(marker.viewBox.width, " ").concat(marker.viewBox.height, "\"\nmarkerUnits=\"userSpaceOnUse\" ").concat(marker.fill ? "style=\"stroke: ".concat(marker.fill, ";fill:").concat(marker.fill, "\"") : '', ">#{shape}</marker>\n").trim();
  },
  Grid: function Grid(size) {
    return "\n<pattern id=\"GridPattern\" width=\"".concat(size, "\" height=\"").concat(size, "\" patternUnits=\"userSpaceOnUse\">\n  <ellipse cx=\"0\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n  <ellipse cx=\"0\" cy=\"").concat(size, "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n  <ellipse cx=\"").concat(size, "\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n  <ellipse cx=\"").concat(size, "\" cy=\"").concat(size, "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n</pattern>").trim();
  },
  Label: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null);\n   if (box) {%>\n  <g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>    <% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>    <% if (box.config && box.config.inlineStyle) {%>      font-size=\"<%=box.config.fontSize%>\"      font-family=\"<%=box.config.fontFamily%>\"      font-weight=\"<% if (box.bold) {%>bold<%} else {%>normal<%}%>\"      <% if (box.underline) {%>text-decoration=\"underline\"<%}%>      <% if (box.italic) {%>font-style=\"italic\"<%}%>    <%}%>    text-anchor=\"<%=box.anchor%>\"    transform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n  <% if (box.config.backgroundStyle) {%>\n    <rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n  <% } if (_.isArray(box.label)) {\n    _.each(box.label, function(value, line) {%>\n      <text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>        dx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n    <%});} else { %>\n      <text><%=box.label%></text>\n    <%}%>\n    <% if (box.config.title) {%>\n      <title><%=box.config.title%></title>\n    <%}%>\n  </g>\n<%}%>\n".trim(), {
    variable: 'data'
  }) // TODO add more inline text styles.

};
/* harmony default export */ __webpack_exports__["default"] = (SVGRenderer);

/***/ }),

/***/ "lodash":
/*!*************************************************************************************!*\
  !*** external {"root":"_","commonjs":"lodash","commonjs2":"lodash","amd":"lodash"} ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_lodash__;

/***/ })

/******/ });
});
//# sourceMappingURL=qgraph.js.map