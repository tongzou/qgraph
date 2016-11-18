/*!
 * 
 * 	qgraph - A Graph Manipulation and Visualization Library
 * 	Author: Tong Zou
 * 	Version: v0.1.3
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
	
	var _base = __webpack_require__(1);
	
	var _base2 = _interopRequireDefault(_base);
	
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
	
	var _bean = __webpack_require__(12);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _EventDispatcher = __webpack_require__(13);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Graph = __webpack_require__(15);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _Cell = __webpack_require__(17);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Node = __webpack_require__(16);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(20);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Layout = __webpack_require__(22);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(23);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Marker = __webpack_require__(21);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _Renderer = __webpack_require__(24);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _SVGRenderer = __webpack_require__(28);
	
	var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);
	
	var _GraphBehavior = __webpack_require__(25);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _SelectionBehavior = __webpack_require__(27);
	
	var _SelectionBehavior2 = _interopRequireDefault(_SelectionBehavior);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Shape2.default.addShape("Rectangle", _Rectangle2.default);
	_Shape2.default.addShape("Ellipse", _Ellipse2.default);
	
	exports.default = {
		Events: _bean2.default,
		Base64: _base2.default,
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
		GraphBehavior: _GraphBehavior2.default,
		SelectionBehavior: _SelectionBehavior2.default
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	// http://www.webtoolkit.info/javascript-base64.html
	
	var Base64 = {
	
		// private property
		_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
	
		// public method for encoding
		encode: function encode(input) {
			var output = "";
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
			var output = "";
			var chr1, chr2, chr3;
			var enc1, enc2, enc3, enc4;
			var i = 0;
	
			input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
	
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
			string = string.replace(/\r\n/g, "\n");
			var utftext = "";
	
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
			var string = "";
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
	
	exports.default = Base64;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {"use strict";
	
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
	
	// bean requires the existence of window
	if (typeof window === 'undefined' && typeof global !== 'undefined') {
		global.window = { addEventHandler: function addEventHandler() {} };
		global.document = {};
		global.navigator = {};
	}
	
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
	
						return _possibleConstructorReturn(this, (type.__proto__ || Object.getPrototypeOf(type)).apply(this, arguments));
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
				if (type) defaultType = this.createType(namespace, _.defaultsDeep(type, defaultType));else defaultType = this.createType(namespace, defaultType);
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
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

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
	
			return _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).apply(this, arguments));
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
				var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
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
				var orthogonal = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
	
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
				var orthogonal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	
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
			else if (!!navigator.userAgent.match(/Trident\/7\./)) return 11;else if (!!navigator.userAgent.match(/Edge\//)) return "Edge";else return false;
		}(),
	
		isFireFox: function () {
			// InstallTrigger: Firefox's API to install add-ons
			return typeof InstallTrigger !== 'undefined';
		}(),
	
		isChrome: function () {
			if (!window || !window.navigator || !navigator || navigator.userAgent.indexOf('Edge') >= 0) return false;
			var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
			return raw ? parseInt(raw[2], 10) : false;
		}(),
	
		isMac: function () {
			if (!window || !window.navigator || !navigator) return false;
			return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
		}(),
	
		isWindows: function () {
			if (!window || !window.navigator || !navigator) return false;
			return navigator.appVersion.indexOf("Windows") >= 0;
		}(),
	
		isLinux: function () {
			if (!window || !window.navigator || !navigator) return false;
			return navigator.appVersion.indexOf("Linux") >= 0;
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
	
		downloadFile: function downloadFile(name, data) {
			if (!data) return;
			var mime = data.match(/^data:([^;,]*)/)[1];
			if (name.indexOf('.') < 0) {
				if (!mime) mime = 'text/plain';
				if (mime == 'text/plain') name = name + '.txt';else {
					var type = mime.split('/')[1];
					if (type.indexOf('+') > 0) type = type.split('+')[0];
					name = name + '.' + type;
				}
			}
			if (this.isIE) {
				var encoded = data.indexOf(';base64') >= 0;
				if (encoded) data = atob(data.replace('data:' + mime + ';base64,', ''));else data = decodeURI(data.replace('data:' + mime + ',', ''));
				data = this.GetBlob(data, mime);
				navigator.msSaveBlob(data, name);
			} else {
				var link = this.createElement('a', { href: data, download: name }, { display: "none" });
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
			return new Blob(byteArrays, { type: contentType });
		},
	
		openImage: function openImage(name, image) {
			var myWindow = window.open("", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=500, height=500");
			var myDocument = myWindow.document;
			var img = myDocument.createElement("img");
			this.setElement(img, { src: image, name: name });
			myDocument.body.appendChild(img);
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
	
			return _possibleConstructorReturn(this, (Ellipse.__proto__ || Object.getPrototypeOf(Ellipse)).apply(this, arguments));
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
				var shapeConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
				var startMarker = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
				var endMarker = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
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
	
			return _possibleConstructorReturn(this, (DirectLink.__proto__ || Object.getPrototypeOf(DirectLink)).apply(this, arguments));
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
	
			return _possibleConstructorReturn(this, (BezierLink.__proto__ || Object.getPrototypeOf(BezierLink)).apply(this, arguments));
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
	
			return _possibleConstructorReturn(this, (EntityRelations.__proto__ || Object.getPrototypeOf(EntityRelations)).apply(this, arguments));
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
				randomNoise: 0,
				maxChannelWidth: 100
			});
			return _possibleConstructorReturn(this, (Manhattan.__proto__ || Object.getPrototypeOf(Manhattan)).call(this, terminalVisual, shapeConfig, startMarker, endMarker));
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
			value: function _moveSegment(pts, i, d, startPadding, endPadding) {
				// first check if we need to add new line segments.
				var dir, l, pt;
				if (i == 0) {
					// we need to break off the segment, since we can't change the starting point.
					dir = pts[0].getDirection(pts[1]);
					if (!startPadding) startPadding = this.MIN_BUFFER;
					l = Math.min(startPadding, pts[0].distance(pts[1]) / 2);
					pt = pts[0].getTranslated(dir.scale(l));
					pts.splice(1, 0, pt);
					this._moveSegment(pts, i + 1, d);
					return;
				}
				if (i == pts.length - 2) {
					// we need to break off the segment, since we can't change the end point.
					dir = pts[pts.length - 1].getDirection(pts[pts.length - 2]);
					if (!endPadding) endPadding = this.MIN_BUFFER;
					l = Math.min(endPadding, pts[pts.length - 1].distance(pts[pts.length - 2]) / 2);
					pt = pts[pts.length - 1].getTranslated(dir.scale(l));
					pts.splice(pts.length - 1, 0, pt);
					this._moveSegment(pts, i, d);
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
				Manhattan._mergeSegments(pos);
				if (this.randomNoise && pos.length > 3) {
					for (var i = 1; i < pos.length - 2; i++) {
						var randomNumber = Math.floor(Math.random() * this.randomNoise * 2 - this.randomNoise);
						this._moveSegment(pos, i, randomNumber, 1, 1);
					}
				}
				return pos;
			}
	
			//New function for finding route
	
		}], [{
			key: "route",
			value: function route(start, end, startNormal, endNormal, buffer) {
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
			key: "_mergeSegments",
			value: function _mergeSegments(pts) {
				var h1 = pts[pts.length - 1].y == pts[pts.length - 2].y;
				var h2;
				for (var i = pts.length - 2; i >= 1; i--) {
					h2 = pts[i].y == pts[i - 1].y;
					if (h2 == h1 || pts[i].equals(pts[i - 1])) pts.splice(i, 1);else h1 = !h1;
				}
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(12);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _KeyUtils = __webpack_require__(14);
	
	var KeyUtils = _interopRequireWildcard(_KeyUtils);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
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
	  * @param config the configuraton for the event dispatcher.
	  */
		function EventDispatcher(root) {
			var zoomScale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, Infinity];
			var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
	
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
					if (EventDispatcher.match(nsType, listeners.regexp ? listeners.regexp : key)) {
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
				var regexp = null;
				if (type instanceof RegExp) {
					regexp = type;
					type = type + '';
				}
				this.listeners[type] || (this.listeners[type] = []);
				if (regexp && !this.listeners[type].regexp) this.listeners[type].regexp = regexp;
				this.listeners[type].push(listener);
			}
		}, {
			key: "unregister",
			value: function unregister(type, callback, context) {
				if (type instanceof RegExp) type = type + '';
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
				if (registeredType instanceof RegExp) return nsType.match(registeredType);
	
				return nsType == registeredType;
				/*const arr = registeredType.split('*');
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
	   return true;*/
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
/* 14 */
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
	
	var _Node = __webpack_require__(16);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(20);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Marker = __webpack_require__(21);
	
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
			var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _lodash2.default.uniqueId("G");
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
			edgeTypes.forEach(function (type) {
				markerConfig = type.prototype.startMarker;
				if (markerConfig) {
					marker = _Marker2.default.getMarker(markerConfig, true);
					this.markers.push(marker);
				}
				markerConfig = type.prototype.endMarker;
				if (markerConfig) {
					marker = _Marker2.default.getMarker(markerConfig, false);
					this.markers.push(marker);
				}
			}, this);
	
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
				var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
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
				var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
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
	
				var parent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.currentRoot;
	
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Cell2 = __webpack_require__(17);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Node = function (_Cell) {
		_inherits(Node, _Cell);
	
		function Node(graph) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			_classCallCheck(this, Node);
	
			if (!config.id) config.id = _lodash2.default.uniqueId('N');
	
			var _this = _possibleConstructorReturn(this, (Node.__proto__ || Object.getPrototypeOf(Node)).call(this, graph, config));
	
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
				var portName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'auto';
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
/* 17 */
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
	
	var _Cache = __webpack_require__(18);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Shape = __webpack_require__(6);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * The Cell is the common parent for Node and Edge.
	 */
	var Cell = function () {
		function Cell(graph) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { id: _lodash2.default.uniqueId() };
	
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
				var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
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
					style: this.viewProp(key, 'style'),
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
/* 18 */
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
			var namespace = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
	
			if (!caches[namespace]) caches[namespace] = {};
			return caches[namespace];
		}
	};
	
	exports.default = Cache;

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(12);
	
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
		fontColor: 'black',
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
			var labelConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
				bold: bold, underline: fontStyle & FONT_UNDERLINE, italic: fontStyle & FONT_ITALIC, shadow: fontStyle & FONT_SHADOW,
				dx: dx, dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight - wrappedLabel.baseline, anchor: anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
				pivot: pivot, bounds: bounds, maxBounds: maxBounds
			};
		}
	
		function render(view, box) {
			return view.renderLabel(box);
		}
	
		var editor = {
			start: function start(key, container, box, refEl, textEl) {
				var _this = this;
	
				var scale = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 1.0;
				var singleLine = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
	
				if (this.input) {
					if (this.key != key) {
						// need to close the existing editor first
						this.stop();
					} else return;
				}
				var tag = singleLine ? 'input' : 'textarea';
				this.input = _DomUtils2.default.createElement(tag, { id: "inlineEditor", unselectable: "off" }, { position: "absolute", overflow: "hidden", padding: "0px", margin: "0px", border: "transparent" });
				if (singleLine) {
					_bean2.default.on(this.input, 'keydown keyup', function (event) {
						if (event.keyCode == 13) {
							_bean2.default.off(_this.input, 'keydown keyup');
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
				if (!this.input) return;
	
				cancel = cancel || false;
				if (this.textEl) this.textEl.style.visibility = null;
	
				if (!cancel) _bean2.default.fire(this, 'editor.update', [this.key, this.input.value]);
	
				_bean2.default.fire(this, 'editor.stop', [this.key]);
	
				// remove the input
				this.input.parentNode.removeChild(this.input);
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
	}();

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Cell2 = __webpack_require__(17);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Link = __webpack_require__(11);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Cache = __webpack_require__(18);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Edge = function (_Cell) {
		_inherits(Edge, _Cell);
	
		function Edge(graph) {
			var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
			var source = arguments[2];
			var target = arguments[3];
	
			_classCallCheck(this, Edge);
	
			if (!config.id) config.id = _lodash2.default.uniqueId('E');
	
			var _this = _possibleConstructorReturn(this, (Edge.__proto__ || Object.getPrototypeOf(Edge)).call(this, graph, config));
	
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
				_get(Edge.prototype.__proto__ || Object.getPrototypeOf(Edge.prototype), "destroy", this).call(this);
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
/* 21 */
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
/* 22 */
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
			var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Layout2 = __webpack_require__(22);
	
	var _Layout3 = _interopRequireDefault(_Layout2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FlowLayout = function (_Layout) {
		_inherits(FlowLayout, _Layout);
	
		function FlowLayout() {
			_classCallCheck(this, FlowLayout);
	
			return _possibleConstructorReturn(this, (FlowLayout.__proto__ || Object.getPrototypeOf(FlowLayout)).apply(this, arguments));
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
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(12);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Layout = __webpack_require__(22);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _EventDispatcher = __webpack_require__(13);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _GraphBehavior = __webpack_require__(25);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _SelectionBehavior = __webpack_require__(27);
	
	var _SelectionBehavior2 = _interopRequireDefault(_SelectionBehavior);
	
	var _Label = __webpack_require__(19);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Renderer = function () {
		function Renderer(id, container) {
			var config = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
			var graph = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
	
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
				var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
				var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
				var scale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
	
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
				if (this.layout) this.layout.layout(this._graph.currentRoot, this.viewport());
	
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
					this.dispatcher = new _EventDispatcher2.default(this.box, [this.prop('minZoom'), this.prop('maxZoom')]);
					var jsClass = void 0;
					if (this.prop('graphBehavior')) {
						jsClass = _Utils2.default.getConstructor(this.prop('graphBehavior'));
						this.graphBehavior = new jsClass(this);
					}
					if (this.prop('selectionBehavior')) {
						jsClass = _Utils2.default.getConstructor(this.prop('selectionBehavior'));
						this.selectionBehavior = new jsClass(this);
					}
					/*this.dispatcher.register('mouseup.node.label', function(type, ns, target, pos, event) {
	    	let node = this._graph.nodes[target.getAttribute('id')];
	    	if (!this.dispatcher.dragging && !node._firstSelection) {
	    		Label._delayEdit = _.delay(() => {
	    			if (Label._delayEdit) {
	    				delete Label._delayEdit;
	    				Label.editor.start(node.id, this.box, node.getLabelBox(this.id), target, event.nsTarget, this.scale);
	    			}
	    		}, 250);
	    	}
	    }, this);
	    this.dispatcher.register([/^mousedown/, /^zoom/], function(type, ns, target, pos, event) {
	    	if (!DomUtils.eventFromInput(event)) {
	    		Label.editor.stop();
	    	}
	    }, this);*/
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
				if (t && _lodash2.default.isFunction(t)) {
					t = t(config);
				}
				// check if there are any preprocessing tags.
				if (preprocessor) {
					var parts = t.match(/(#{[^#]*})/g);
					var obj = {};
					for (var part in parts) {
						part = parts[part];
						part = part.substring(2, part.length - 1).trim();
						obj[part] = preprocessor[_lodash2.default.camelCase('render ' + part)](this);
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
		graphBehavior: _GraphBehavior2.default,
		selectionBehavior: _SelectionBehavior2.default
	};
	
	exports.default = Renderer;

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Behavior2 = __webpack_require__(26);
	
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
	
			var _this = _possibleConstructorReturn(this, (GraphBehavior.__proto__ || Object.getPrototypeOf(GraphBehavior)).call(this, renderer));
	
			var dispatcher = renderer.dispatcher;
			var f = function f(type, ns, graph, pos, event) {
				//Cursor.updateCursor(type, ns, graph, event);
			};
			dispatcher.register(/^drag.*\.graph$/, _this.handleDrag, _this);
			dispatcher.register(/^zoom/, _this.handleZoom, _this);
			//dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
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
/* 26 */
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Cell = __webpack_require__(17);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Behavior2 = __webpack_require__(26);
	
	var _Behavior3 = _interopRequireDefault(_Behavior2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SelectionBehavior = function (_Behavior) {
		_inherits(SelectionBehavior, _Behavior);
	
		function SelectionBehavior(renderer) {
			_classCallCheck(this, SelectionBehavior);
	
			var _this = _possibleConstructorReturn(this, (SelectionBehavior.__proto__ || Object.getPrototypeOf(SelectionBehavior)).call(this, renderer));
	
			var dispatcher = renderer.dispatcher;
			dispatcher.register('mousedown.*', _this.selectCell, _this);
			dispatcher.register('mouseup.*', _this.unselectCell, _this);
			dispatcher.register('drag*.graph', _this.handleMultiSelect, _this);
			//graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, this.updateSelections, this);
			_this.selectedNodes = null;
			_this.selectedLinks = null;
			_this.attachedLinks = null;
			return _this;
		}
	
		_createClass(SelectionBehavior, [{
			key: "updateSelections",
			value: function updateSelections() {
				if (this.selectedNodes) this.selectedNodes.classed('selected', false);
				if (this.selectedLinks) this.selectedLinks.classed('selected', false);
	
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
				var cell = data == this.graph ? null : data;
				if (cell && !(cell instanceof _Cell2.default)) return;
				var toggle = event.ctrlKey || event.shiftKey;
				if (cell && cell instanceof _Cell2.default) {
					if (!this.graph.isSelected(cell)) delete cell._firstSelection;else cell._firstSelection = true;
	
					d3.select(event.dataTarget).moveToFront();
					this.graph.setSelection(cell, toggle);
				}
			}
		}, {
			key: "unselectCell",
			value: function unselectCell(type, ns, data, pos, event) {
				var cell = data == this.graph ? null : data;
				if (cell && !(cell instanceof _Cell2.default)) return;
				var ctrlKey = event.ctrlKey || event.shiftKey;
				if (!cell) {
					this.graph.setSelection(cell, ctrlKey);
				}
			}
		}, {
			key: "handleMultiSelect",
			value: function handleMultiSelect(type, ns, data, pos, event) {
				pos = util.scale(this.graph, pos);
	
				if (type == 'dragstart') {
					var select = this.graph.getProperty("defaultClickMode") == "select" ^ (event.ctrlKey || event.shiftKey);
					if (!select) return;
					this.startPt = new Point(pos[0], pos[1]);
					return;
				}
				if (!this.startPt) return;
				var rect = _Rectangle2.default.getBoundingRectangle([new Point(pos[0], pos[1]), this.startPt]);
				var renderer = this.graph.renderer;
				if (!this.rubberband) {
					this.rubberband = d3.select(renderer.appendNode(renderer.getCellLayer(), {
						template: _.template('<g><rect x="0" y="0" width="100" height="100" stroke="#000000" fill="none" stroke-dasharray="3 3"/></g>')
					}, false));
				}
				if (type == 'dragend') {
					var cells = this.graph.getCurrentRoot().children;
					// TODO: Define if we want to select vertexes / edges or both
					cells = _.filter(cells, function (cell) {
						var box = cell.getBounds();
						if (rect.contains(box)) {
							return true;
						}
						return false;
					});
					// TODO: Set selection
					this.graph.setSelection(cells, event.ctrlKey);
	
					this.rubberband.remove();
					delete this.startPt;
					delete this.rubberband;
					return;
				}
				this.rubberband.select("rect").attr({ x: rect.x, y: rect.y, width: rect.width, height: rect.height });
			}
		}, {
			key: "destroy",
			value: function destroy() {
				_get(SelectionBehavior.prototype.__proto__ || Object.getPrototypeOf(SelectionBehavior.prototype), "destroy", this).call(this);
				delete this.selectedNodes;
				delete this.selectedLinks;
				delete this.attachedLinks;
			}
		}]);
	
		return SelectionBehavior;
	}(_Behavior3.default);
	
	exports.default = SelectionBehavior;

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _base = __webpack_require__(1);
	
	var _base2 = _interopRequireDefault(_base);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Renderer2 = __webpack_require__(24);
	
	var _Renderer3 = _interopRequireDefault(_Renderer2);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var NS = 'http://www.w3.org/2000/svg';
	if (typeof SVGElement != "undefined") {
		var svg = document.createElementNS(NS, "svg");
		svg.innerHTML = '<circle/>';
		if (svg.firstChild !== "[object SVGCircleElement]") {
			Object.defineProperties(SVGElement.prototype, {
				"outerHTML": {
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
				"innerHTML": {
					enumerable: false,
					configurable: true,
					get: function get() {
						var s = this.outerHTML;
						var ropen = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i");
						var rclose = new RegExp("<\/" + this.nodeName + ">$", "i");
						return s.replace(ropen, "").replace(rclose, "");
					},
					set: function set(markup) {
						// empty el first.
						var child = void 0;
						while (child = this.lastChild) {
							this.removeChild(child);
						}var buf = new _StringBuffer2.default();
						buf.append('<svg>').append(markup).append('</svg');
						var $temp = _DomUtils2.default.createElement('div', null, null, buf.toString()).firstElementChild;
						while ($temp.firstChild) {
							this.appendChild($temp.firstChild);
						}
					}
				}
			});
		}
		// Define the toDataURL for SVG
		SVGElement.prototype.toDataURL = function (type) {
			var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
			var _svg = this;
	
			var debug = function debug(msg) {};
	
			if (options['debug'] == true && typeof console != 'undefined') debug = function debug(msg) {
				console.log("SVG.toDataURL:", msg);
			};
	
			function exportSVG() {
				var svg_xml = _svg.outerHTML;
				var svg_dataurl = base64dataURLencode(svg_xml);
				debug(type + " length: " + svg_dataurl.length);
	
				// NOTE double data carrier
				if (options.callback) options.callback(svg_dataurl);
				return svg_dataurl;
			}
	
			function base64dataURLencode(s) {
				var b64 = "data:image/svg+xml;base64,";
	
				// https://developer.mozilla.org/en/DOM/window.btoa
				if (window.btoa) {
					debug("using window.btoa for base64 encoding");
					b64 += btoa(s);
				} else {
					debug("using custom base64 encoder");
					b64 += _base2.default.encode(s);
				}
	
				return b64;
			}
	
			// Native export doesn't work very well. should use canvg instead.
			function exportImage(type) {
				var canvas = document.createElement("canvas");
				var ctx = canvas.getContext('2d');
	
				// TODO: if (options.keepOutsideViewport), do some translation magic?
	
				var svg_img = new Image();
				var svg_xml = _svg.outerHTML;
				svg_img.src = base64dataURLencode(svg_xml);
	
				svg_img.onload = function () {
					debug("exported image size: " + [svg_img.width, svg_img.height]);
					canvas.width = svg_img.width;
					canvas.height = svg_img.height;
					ctx.drawImage(svg_img, 0, 0);
	
					// SECURITY_ERR WILL HAPPEN NOW
					var image_dataurl = canvas.toDataURL(type);
					debug(type + " length: " + image_dataurl.length);
	
					if (options.callback) options.callback(image_dataurl);else debug("WARNING: no callback set, so nothing happens.");
				};
	
				svg_img.onerror = function () {
					debug("Can't export! Maybe your browser doesn't support " + "SVG in img element or SVG input for Canvas drawImage?\n" + "http://en.wikipedia.org/wiki/SVG#Native_support");
				};
	
				// NOTE: will not return anything
			}
	
			function exportImageCanvg(type) {
				if (!canvg) return null;
				var canvas = _DomUtils2.default.createElement('canvas', null, { display: "none" });
				document.body.appendChild(canvas);
				if (type == 'javascript') {
					var xcanvas = new jsCanvas('jscanvastest');
					xcanvas.canvas.style.display = 'none';
					//xcanvas.canvas = canvas;
				}
	
				if (!options.keepOutsideViewport) {
					canvg(canvas, _svg.outerHTML);
				} else {
					var padding = options.padding || 0;
					var scale = 1.0;
					var translate = [0, 0];
					var bbox = _svg.getBBox();
					debug("detected svg dimensions " + [bbox.x, bbox.y, bbox.width, bbox.height]);
					var transform = _svg.firstElementChild.getAttribute('transform');
					if (transform) {
						debug('detected svg transform ' + transform);
						transform = SVGRenderer.transform(transform);
						translate = transform.translate;
						scale = transform.scale;
					}
					var buf = new _StringBuffer2.default();
					buf.append('<svg width="').append(bbox.width + 2 * padding).append('px" height="').append(bbox.height + 2 * padding).append('px"><g transform="translate(').append(-bbox.x + translate[0] + padding).append(',').append(-bbox.y + translate[1] + padding).append(')scale(').append(scale).append(')">').append(_svg.firstElementChild.innerHTML).append('</g></svg>');
					if (type == 'javascript') {
						xcanvas.compile(buf.toString(), function () {
							if (options.callback) options.callback(xcanvas.toString());
						});
						return;
					} else canvg(canvas, buf.toString());
				}
				var image_dataurl = canvas.toDataURL(type);
				if (options.callback) options.callback(image_dataurl);
				canvas.parentNode.removeChild(canvas);
				return image_dataurl;
			}
	
			if (!type) type = "image/svg+xml";
	
			if (options.keepNonSafe) debug("NOTE: keepNonSafe is NOT supported and will be ignored!");
			if (options.keepOutsideViewport) debug("NOTE: keepOutsideViewport is only supported with canvg exporter.");
	
			switch (type) {
				case "image/svg+xml":
					return exportSVG();
				case "image/png":
				case "image/jpeg":
				case "javascript":
					if (!options.renderer) {
						if (window.canvg) options.renderer = "canvg";else options.renderer = "native";
					}
					switch (options.renderer) {
						case "canvg":
							debug("using canvg renderer for " + type + " image export");
							return exportImageCanvg(type);
						case "native":
							debug("using native renderer for " + type + " export. THIS MIGHT FAIL.");
							return exportImage(type);
						default:
							debug("unknown image renderer given, doing noting (" + options.renderer + ")");
					}
					break;
				default:
					debug("Sorry! Exporting as '" + type + "' is not supported!");
			}
			return null;
		};
	}
	
	var SVGRenderer = function (_Renderer) {
		_inherits(SVGRenderer, _Renderer);
	
		function SVGRenderer() {
			_classCallCheck(this, SVGRenderer);
	
			return _possibleConstructorReturn(this, (SVGRenderer.__proto__ || Object.getPrototypeOf(SVGRenderer)).apply(this, arguments));
		}
	
		_createClass(SVGRenderer, [{
			key: "render",
			value: function render() {
				var result = _get(SVGRenderer.prototype.__proto__ || Object.getPrototypeOf(SVGRenderer.prototype), "render", this).call(this);
				if (result) {
					var root = this.graph.currentRoot;
					var buf = new _StringBuffer2.default('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">');
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
				markers.forEach(function (marker) {
					str1 = this.TEMPLATES['Marker'](marker);
					str2 = marker.shape;
					if (!_lodash2.default.isString(str2)) str2 = this.renderShape(str2);
					str1 = str1.replace(/\#\{shape\}/, str2);
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
				if (_lodash2.default.isString(template)) template = _lodash2.default.template(template);
				return template(shape);
			}
		}, {
			key: "getPathData",
			value: function getPathData(shape) {
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
				return buf.toString();
			}
		}, {
			key: "renderLink",
			value: function renderLink(shape) {
				var buf = new _StringBuffer2.default();
				var d = SVGRenderer.getPathData(shape);
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
			key: "transform",
			value: function transform(_transform) {
				var translate = [0, 0],
				    scale = 1.0;
				//
				var parts = _transform.match(/translate\(\s*([^)]+)/);
				if (parts) {
					var m = parts[1].trim().match(/([\d.-]+)[ ,]([\d.-]+)/);
					if (m) {
						translate[0] = parseFloat(m[1]) || 0;
						translate[1] = parseFloat(m[2]) || 0;
					} else translate[0] = translate[1] = parseFloat(parts[1]);
				}
				parts = _transform.match(/scale\(\s*([^)]+)/);
				if (parts) scale = parseFloat(parts[1]) || 1.0;
	
				return { translate: translate, scale: scale };
			}
		}]);
	
		return SVGRenderer;
	}(_Renderer3.default);
	
	SVGRenderer.TEMPLATES = {
		$root: '<g id="${id}" class="${className}">#{children}</g>',
		$node: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
		$edge: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}">#{shape}#{label}</g>',
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
			return ("\n<marker id=\"" + marker.id + "\" markerWidth=\"" + marker.size + "\" markerHeight=\"" + marker.size + "\" refx=\"" + marker.ref[0] + "\" \nrefy=\"" + marker.ref[1] + "\" orient=\"auto\" viewbox=\"" + marker.viewBox.x + " " + marker.viewBox.y + " " + marker.viewBox.width + " " + marker.viewBox.height + "\"\nmarkerUnits=\"userSpaceOnUse\" " + (marker.fill ? "style=\"stroke: " + marker.fill + ";fill:" + marker.fill + "\"" : '') + ">#{shape}</marker>\n").trim();
		},
		Grid: function Grid(size) {
			return ("\n<pattern id=\"GridPattern\" width=\"" + size + "\" height=\"" + size + "\" patternUnits=\"userSpaceOnUse\">\n\t<ellipse cx=\"0\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"0\" cy=\"" + size + "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"" + size + "\" cy=\"0\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n\t<ellipse cx=\"" + size + "\" cy=\"" + size + "\" rx=\"1\" ry=\"1\" fill=\"#999999\"/>\n</pattern>").trim();
		},
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\t<% if (box.config && box.config.inlineStyle) {%>\t\t\tfont-size=\"<%=box.config.fontSize%>\"\t\t\tfont-family=\"<%=box.config.fontFamily%>\"\t\t\tfont-weight=\"<% if (box.bold) {%>bold<%} else {%>normal<%}%>\"\t\t\t<% if (box.underline) {%>text-decoration=\"underline\"<%}%>\t\t\t<% if (box.italic) {%>font-style=\"italic\"<%}%>\t\t<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundStyle) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t\t<% if (box.config.title) {%>\n\t\t\t<title><%=box.config.title%></title>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" }) //TODO add more inline text styles.
	};
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwMDI5MDNlNzRjNmI2NGI4MzRjNyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZFNoYXBlIiwiRXZlbnRzIiwiQmFzZTY0IiwiQ2FjaGUiLCJVdGlscyIsIkRvbVV0aWxzIiwiU3RyaW5nQnVmZmVyIiwiUG9pbnQiLCJMaW5lIiwiU2hhcGUiLCJSZWN0YW5nbGUiLCJFbGxpcHNlIiwiTGluayIsIkV2ZW50RGlzcGF0Y2hlciIsIkxhYmVsIiwiTWFya2VyIiwiR3JhcGgiLCJDZWxsIiwiTm9kZSIsIkVkZ2UiLCJMYXlvdXQiLCJGbG93TGF5b3V0IiwiUmVuZGVyZXIiLCJTVkdSZW5kZXJlciIsIkdyYXBoQmVoYXZpb3IiLCJTZWxlY3Rpb25CZWhhdmlvciIsIl9rZXlTdHIiLCJlbmNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJhZGRFdmVudEhhbmRsZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsIl9kZWJ1Z2dpbmciLCJfZGVidWdBbGwiLCJ0eXBlUmVnaXN0cnkiLCJzcGxpY2UiLCJBcnJheSIsInR5cGUiLCJuYW1lc3BhY2UiLCJuYW1lIiwiTWFwIiwiZ2V0Iiwic2V0IiwiY3JlYXRlVHlwZSIsInByb3BzIiwiZGVmYXVsdFR5cGUiLCJleHRlbmQiLCJleHRlbmRzIiwiY29uZmlnIiwiXyIsImFzc2lnbiIsInByb3RvdHlwZSIsInR5cGVOYW1lIiwibG9nIiwiYnVpbGRUeXBlcyIsInR5cGVzIiwicmVtb3ZlIiwiZGVmYXVsdHNEZWVwIiwiZm9yRWFjaCIsImNoaWxkIiwicGFyZW50IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiU3Vycm9nYXRlIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiaW5pdENvbmZpZyIsIm9iaiIsImNBcnIiLCJzdXBlciIsImFwcGx5IiwiREVGQVVMVFMiLCJwcm9wIiwidmFsdWUiLCJnZXRDb25zdHJ1Y3RvciIsImpzQ2xhc3MiLCJkZWZhdWx0Q2xhc3MiLCJpc1N0cmluZyIsImV2YWwiLCJkZWJ1ZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzdWJzdHJpbmciLCJpbmZvIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImJvdW5kcyIsImdlb21ldHJ5IiwieCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsInBvcyIsImFuY2hvclgiLCJvZmZzZXRYIiwiYW5jaG9yWSIsIm9mZnNldFkiLCJ1bnNjYWxlIiwidCIsInNjYWxlIiwibyIsImdldFByb3BlcnR5IiwiaGFzIiwiaXNGdW5jdGlvbiIsImFQdCIsInNxcnQiLCJwMiIsImRpc3QiLCJkaXN0YW5jZSIsImFuZ2xlIiwiY29zIiwiUEkiLCJzaW4iLCJjbG9uZSIsInJvdGF0ZSIsInJlY3QiLCJ2ZXJ0aWNhbCIsIlciLCJOIiwiUyIsIkUiLCJORSIsIk5XIiwiU0UiLCJTVyIsImVsIiwidyIsImgiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwdCIsImNvbnRhaW5zIiwicHQxIiwicHQyIiwiaG9yaXpvbnRhbCIsImNvbnRhaW5zMSIsImNvbnRhaW5zMiIsIm91dFB0Iiwib3J0aG9nb25hbCIsImR4IiwiZHkiLCJhbHBoYSIsImF0YW4yIiwicCIsInBpIiwicGkyIiwiYmV0YSIsInRhbiIsImRpciIsImdldERpcmVjdGlvbiIsInBvaW50IiwiZGlyZWN0aW9uIiwicHRzIiwibWFyZ2luIiwiaXNBcnJheSIsIm1pbiIsIm1heCIsInJlY3RzIiwibWlueCIsIm1pbnkiLCJtYXh4IiwiSW5maW5pdHkiLCJtYXh5IiwiZWFjaCIsInIiLCJyZWdpc3RyeSIsImRlZmF1bHRzIiwicmVmUHQiLCJnZXRQZXJpbWV0ZXIiLCJ2aWV3IiwidGVtcGxhdGUiLCJnZXRUZW1wbGF0ZSIsImlzSUUiLCJzQWdlbnQiLCJ1c2VyQWdlbnQiLCJJZHgiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNGaXJlRm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc0Nocm9tZSIsInJhdyIsImlzTWFjIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImlzV2luZG93cyIsImFwcFZlcnNpb24iLCJpc0xpbnV4IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJodG1sIiwic2V0RWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnRCeVN0cmluZyIsInN0ciIsInRlbXAiLCJjaGlsZE5vZGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0ZXN0RWxlbWVudCIsIm5vZGUiLCJtZXRob2QiLCJub2RlVHlwZSIsImdldEFuY2VzdG9yQnkiLCJwYXJlbnROb2RlIiwiZ2V0UG9zaXRpb24iLCJjb250ZXh0IiwiYm9keSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRleHRSZWN0IiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJtb3ZlIiwiZ2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplIiwicHJlbG9hZEltYWdlcyIsImFycmF5IiwibGlzdCIsImxvYWRlZCIsImltZyIsInRoYXQiLCJJbWFnZSIsIm9ubG9hZCIsImluZGV4Iiwic3JjIiwiZ2V0SW1hZ2VJbmZvIiwiZG93bmxvYWRGaWxlIiwiZGF0YSIsIm1pbWUiLCJzcGxpdCIsImVuY29kZWQiLCJhdG9iIiwiZGVjb2RlVVJJIiwiR2V0QmxvYiIsIm1zU2F2ZUJsb2IiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiQmxvYiIsIm9wZW5JbWFnZSIsImltYWdlIiwibXlXaW5kb3ciLCJvcGVuIiwibXlEb2N1bWVudCIsImV2ZW50RnJvbUlucHV0IiwiZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJidWZmZXIiLCJzdHVmZiIsImNvbmNhdCIsInBvcCIsInNlcCIsImpvaW4iLCJzdGFydCIsImVuZCIsImwiLCJjb3NhIiwiZG90UHJvZHVjdCIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJkZW5vbSIsIm51bWVfYSIsIm51bWVfYiIsInVhIiwidWIiLCJpbnRlcnNlY3Rpb25YIiwiaW50ZXJzZWN0aW9uWSIsImEiLCJiIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0eCIsInR5IiwiZCIsImYiLCJnIiwiZGV0IiwieG91dDEiLCJ4b3V0MiIsInlvdXQxIiwieW91dDIiLCJkaXN0MSIsInBvdyIsImRpc3QyIiwieG91dCIsInlvdXQiLCJkZWZhdWx0Q29uZmlnIiwic2hvd0dhdWdlIiwiZGVmYXVsdEdlb21ldHJ5IiwibGlua1R5cGVzIiwidGVybWluYWxWaXN1YWwiLCJzaGFwZUNvbmZpZyIsInN0YXJ0TWFya2VyIiwiZW5kTWFya2VyIiwic3RhcnROb3JtYWwiLCJlbmROb3JtYWwiLCJyZW5kZXJMaW5rIiwiaXNOdW1iZXIiLCJwb2ludHMiLCJ0cmFuc2xhdGUiLCJnZXRTY2FsZWQiLCJsaW5rQ2xhc3MiLCJEaXJlY3RMaW5rIiwiQmV6aWVyTGluayIsImN0cmxwdHMiLCJjb250cm9sUHRzIiwicDEiLCJwMyIsInA0IiwicyIsIkVudGl0eVJlbGF0aW9ucyIsInNvdXJjZSIsIlBvcnQiLCJnZXRCb3VuZHMiLCJlZGdlIiwiaXNTb3VyY2VMZWZ0IiwiaXNUYXJnZXRMZWZ0IiwicmVzdWx0IiwiZ2V0Q2VudGVyWSIsInhlIiwieWUiLCJzZWciLCJzZWdtZW50IiwiZGVwIiwiYXJyIiwibWlkWSIsIk1hbmhhdHRhbiIsIk1JTl9CVUZGRVIiLCJhdXRvUm91dGUiLCJyYW5kb21Ob2lzZSIsIm1heENoYW5uZWxXaWR0aCIsImNvbnRhaW5lciIsImJveGVzIiwic3RhcnRCb3giLCJlbmRCb3giLCJzaWRlIiwic2lkZTIiLCJib3giLCJpbnRlcnNlY3QiLCJqIiwiY2hhbm5lbCIsImNoYW5uZWwyIiwic3RhcnRQYWRkaW5nIiwiZW5kUGFkZGluZyIsIl9nZXRDaGFubmVsIiwiX2dldEZpcnN0SW50ZXJzZWN0aW9uIiwiX2dldFJvdXRlVGVuZGVuY3kiLCJfaGFzSW50ZXJzZWN0aW9uIiwiX21vdmVTZWdtZW50IiwiYnJlYWtQdCIsIl9nZXRSb3V0ZURpcmVjdGlvbiIsImdldENlbnRlciIsImJveDEiLCJib3gyIiwiZ2V0TGVmdCIsImdldFJpZ2h0IiwiZ2V0Qm90dG9tIiwiZ2V0VG9wIiwiZ2V0VHJhbnNsYXRlZCIsInJvdXRlIiwiX21lcmdlU2VnbWVudHMiLCJnZXRDb21tb25BbmNlc3RvciIsImdldERlc2NlbmRhbnRzIiwiZXhjbHVkZUZyb21Sb3V0aW5nIiwiaXNBbmNlc3RvciIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwic3RhcnRCdWZmZXIiLCJlbmRCdWZmZXIiLCJzdGFydEJ1ZmZlck5vcm1hbCIsImVuZEJ1ZmZlck5vcm1hbCIsIm1pZGRsZSIsInBydW5lUHRzIiwiZGV0ZWN0SW50ZXJzZWN0aW9uIiwic2F2ZWRJbmRleCIsInNhdmVkU2lkZSIsImgxIiwiaDIiLCJlcXVhbHMiLCJLZXlVdGlscyIsInN0b3BQcm9wYWdhdGlvbiIsInJvb3QiLCJ6b29tU2NhbGUiLCJyb290TlMiLCJnZXRBdHRyaWJ1dGUiLCJsaXN0ZW5lcnMiLCJkcmFnZ2luZyIsImhhbmRsZXIiLCJiaW5kIiwiaGFuZGxlRXZlbnQiLCJzdGFydGVkIiwiZW50ZXJTdGFjayIsIm9uIiwic3RhcnRLZXlzIiwib2ZmIiwic3RvcEtleXMiLCJldmVudCIsImJ1ZiIsIm5zIiwic3RhY2siLCJpc1Jvb3QiLCJzdGFydHNXaXRoIiwicm9vdFRhcmdldCIsIm5zVGFyZ2V0IiwicHJlcGVuZCIsInRhcmdldFN0YWNrIiwidG9TdHJpbmciLCJpc0tleUV2ZW50IiwiZ2V0S2V5RXZlbnQiLCJnZXRFdmVudEluZm8iLCJ3aGVlbERlbHRhIiwiYnV0dG9uIiwiZHJhZ09iamVjdCIsIm1vdXNlIiwiZHJhZ1BvcyIsIm1vdXNlbW92ZSIsImN1cnJlbnRQb3MiLCJkaXNwYXRjaCIsIm1vdXNldXAiLCJwcmV2ZW50RGVmYXVsdCIsInNpbXVsYXRlRW50ZXJMZWF2ZSIsImxhc3QiLCJjbGVhckVudGVyU3RhY2siLCJrIiwiZ2V0TlMiLCJ2YWwiLCJhcHBlbmQiLCJpdGVtIiwibnNUeXBlIiwicmVnZXhwIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImxhc3RQb3NpdGlvbiIsInJlZ2lzdGVyS2V5IiwiZ2V0S2V5RGF0YSIsImN0cmwiLCJhbHQiLCJzaGlmdCIsIm1ldGEiLCJjb2RlIiwidW5yZWdpc3RlcktleSIsInpJbmRleCIsInJlZ2lzdGVyIiwiUmVnRXhwIiwic3RvcCIsInJlZ2lzdGVyZWRUeXBlIiwiY2hhbmdlZFRvdWNoZXMiLCJzdmciLCJvd25lclNWR0VsZW1lbnQiLCJjcmVhdGVTVkdQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwibWF0cml4VHJhbnNmb3JtIiwiZ2V0U2NyZWVuQ1RNIiwiaW52ZXJzZSIsImNsaWVudExlZnQiLCJjbGllbnRUb3AiLCJLRVkiLCJBTFQiLCJCQUNLX1NQQUNFIiwiQ0FQU19MT0NLIiwiQ09OVFJPTCIsIkRFTEVURSIsIkRPV04iLCJFTkQiLCJFTlRFUiIsIkVTQ0FQRSIsIkhPTUUiLCJMRUZUIiwiTUVUQSIsIk5VTV9MT0NLIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlBBVVNFIiwiUFJJTlRTQ1JFRU4iLCJSSUdIVCIsIlNDUk9MTF9MT0NLIiwiU0hJRlQiLCJTUEFDRSIsIlRBQiIsIlVQIiwiS2V5Ym9hcmRFdmVudCIsImtleUNvZGUiLCJ3aGljaCIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJub2RlRGVmYXVsdHMiLCJyb2xlIiwiZHJhZ2dhYmxlIiwic2VsZWN0YWJsZSIsImVkaXRhYmxlIiwicmVzaXphYmxlIiwic291cmNlYWJsZSIsInRhcmdldGFibGUiLCJ2aXNpYmxlIiwiZWRnZURlZmF1bHRzIiwiaWQiLCJzaXplIiwiY29sb3IiLCJ1bmlxdWVJZCIsIm1vZGVsIiwibm9kZXMiLCJlZGdlcyIsInNlbGVjdGlvbiIsImRlc3Ryb3llZCIsIm5vZGVUeXBlcyIsImVkZ2VUeXBlcyIsIm1hcmtlcnMiLCJtYXJrZXIiLCJtYXJrZXJDb25maWciLCJnZXRNYXJrZXIiLCJsb2FkTW9kZWwiLCJjdXJyZW50Um9vdCIsIk5vZGVDbGFzcyIsImdldEpTQ2xhc3MiLCJhZGRDaGlsZCIsImZyb20iLCJ0byIsIkVkZ2VDbGFzcyIsImFkZE5vZGUiLCJhZGRFZGdlIiwiY2hpbGRyZW4iLCJ3aXRob3V0IiwiYWxsb3dEYW5nbGluZ0VkZ2VzIiwibXVsdGlDb25uZWN0IiwicmVhZE9ubHkiLCJ2aWV3T25seSIsImdyYXBoIiwiaW5FZGdlcyIsIm91dEVkZ2VzIiwicG9ydHMiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJwb3J0TmFtZSIsImVuZFB0Iiwic2hhcGUiLCJnZXRTaGFwZSIsImxhYmVsIiwiZGVjb3JhdG9ycyIsImNyZWF0ZURlY29yYXRvcnMiLCJ2aWV3cyIsInZpZXdQcm9wcyIsIkVycm9yIiwiaXNVbmRlZmluZWQiLCJjbGFzc05hbWUiLCJjb21wdXRlZENsYXNzTmFtZSIsInZpZXdQcm9wIiwic2hhcGVDbGFzcyIsImdldFZpZXciLCJnZXRMYWJlbEJveCIsInJlbmRlckxhYmVsIiwiX2NvbXB1dGVkQ2xhc3NOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlcyIsImdldENhY2hlIiwiY2xlYXIiLCJuYW1lc2FwY2UiLCJGT05UX0JPTEQiLCJGT05UX0lUQUxJQyIsIkZPTlRfVU5ERVJMSU5FIiwiRk9OVF9TSEFET1ciLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250Q29sb3IiLCJwYWRkaW5nIiwibGluZVBhZGRpbmciLCJhbGlnbiIsInJvdGF0aW9uIiwic3RyaW5nTWVhc3VyZUVsIiwibWVhc3VyZURpdiIsImJhc2VsaW5lRGl2IiwiZ2V0U3RyaW5nU2l6ZSIsIm1lbW9pemUiLCJib2xkIiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiZG9jIiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJnZXRFbGVtZW50QnlJZCIsImZvbnRXZWlnaHQiLCJzdHJ1dCIsImZpcnN0Q2hpbGQiLCJiYXNlbGluZUhlaWdodCIsIm9mZnNldFRvcCIsImJhc2VsaW5lIiwid3JhcCIsIm1heFdpZHRoIiwic3BhY2VTaXplIiwic3BhY2UiLCJsaW5lSGVpZ2h0IiwibGluZXMiLCJ3b3JkcyIsImxpbmUiLCJjdXJyZW50V2lkdGgiLCJ3b3JkV2lkdGgiLCJuZXdMaW5lIiwid29yZCIsImxhYmVsQ29uZmlnIiwiY29udGFpbmVyV2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJfZ2V0TGFiZWxCb3giLCJjYWxsIiwiZ2V0TGFiZWxCb3hGb3JMaW5rIiwid3JhcHBlZExhYmVsIiwiYW5jaG9yIiwic2V0QW5jaG9yWCIsInBpdm90IiwibWF4Qm91bmRzIiwiX2xhYmVsIiwidW5kZXJsaW5lIiwiaXRhbGljIiwic2hhZG93IiwiZWRpdG9yIiwicmVmRWwiLCJ0ZXh0RWwiLCJzaW5nbGVMaW5lIiwidW5zZWxlY3RhYmxlIiwib3ZlcmZsb3ciLCJib3JkZXIiLCJmb2N1cyIsInNlbGVjdCIsImZpcmUiLCJjYW5jZWwiLCJzZXRTb3VyY2UiLCJzb3VyY2VQb3MiLCJzZXRUYXJnZXQiLCJ0YXJnZXRQb3MiLCJzZXRUZXJtaW5hbCIsInNldEVkZ2VBdCIsInJlbW92ZUVkZ2UiLCJhZGRPdXRFZGdlIiwiYWRkSW5FZGdlIiwiY2VudGVyIiwicmVmUHRzIiwiZ2V0UmVmZXJlbmNlUG9pbnRzIiwidGVybWluYWxzIiwiZ2V0Qm91bmQiLCJnZXRQb3J0IiwiZ2V0TGluayIsImdldFRlcm1pbmFsVmlzdWFsIiwiYXJyb3ciLCJzaWduIiwidmlld0JveCIsInJlZiIsImZpbGwiLCJ0cmlhbmdsZSIsIm92YWwiLCJkaWFtb25kIiwiZmFjdG9yeSIsIm9yaWVudGF0aW9uIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaXRlbXMiLCJvd25lciIsImdldExpbmtlZE5vZGVzIiwiaGdhcCIsInZnYXAiLCJfZmxQb3MiLCJtb3ZlVG8iLCJ0cmlnZ2VyIiwidGFiaW5kZXgiLCJsYXlvdXQiLCJsYXlvdXRDbGFzcyIsIl90cmFuc2xhdGUiLCJfc2NhbGUiLCJkaXNwYXRjaGVyIiwiZ3JhcGhCZWhhdmlvciIsInNlbGVjdGlvbkJlaGF2aW9yIiwibm9kZUJlaGF2aW9yIiwiZWRnZUJlaGF2aW9yIiwiY29ubmVjdGlvbkJlaGF2aW9yIiwic2NhbGVkIiwidmlld3BvcnQiLCJpc051bGwiLCJ2cCIsInRyYW5zZm9ybSIsInJlZnJlc2giLCJfZ3JhcGgiLCJpbml0aWFsaXplQmVoYXZpb3JzIiwicmVuZGVyTWFya2VycyIsInByZXByb2Nlc3NvciIsIlRFTVBMQVRFUyIsInBhcnRzIiwicGFydCIsInRyaW0iLCJjYW1lbENhc2UiLCJpbnRlcnBvbGF0ZSIsImdyaWRTaXplIiwiZ0JvdW5kcyIsInZCb3VuZHMiLCJwYXJzZUZsb2F0IiwiZGVmYXVsdENsaWNrTW9kZSIsImhpZGVPdXRsaW5lIiwic2luZ2xlU2VsZWN0IiwiZ3JpZEVuYWJsZWQiLCJndWlkZXNFbmFibGVkIiwibWF4Wm9vbSIsIm1pblpvb20iLCJ6b29tRmFjdG9yIiwibWFza09wYWNpdHkiLCJyZW5kZXJlciIsImhhbmRsZURyYWciLCJoYW5kbGVab29tIiwicGFuIiwiQmVoYXZpb3IiLCJzZWxlY3RDZWxsIiwidW5zZWxlY3RDZWxsIiwiaGFuZGxlTXVsdGlTZWxlY3QiLCJzZWxlY3RlZE5vZGVzIiwic2VsZWN0ZWRMaW5rcyIsImF0dGFjaGVkTGlua3MiLCJjbGFzc2VkIiwic2VsZWN0ZWRWZXJ0aWNlcyIsImdldFNoYXBlcyIsImdldEF0dGFjaGVkRWRnZXMiLCJzZWxlY3RlZEVkZ2VzIiwiY2VsbCIsInRvZ2dsZSIsImlzU2VsZWN0ZWQiLCJfZmlyc3RTZWxlY3Rpb24iLCJkMyIsImRhdGFUYXJnZXQiLCJtb3ZlVG9Gcm9udCIsInNldFNlbGVjdGlvbiIsInV0aWwiLCJzdGFydFB0IiwiZ2V0Qm91bmRpbmdSZWN0YW5nbGUiLCJydWJiZXJiYW5kIiwiYXBwZW5kTm9kZSIsImdldENlbGxMYXllciIsImNlbGxzIiwiZ2V0Q3VycmVudFJvb3QiLCJmaWx0ZXIiLCJhdHRyIiwiTlMiLCJTVkdFbGVtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCIkbm9kZSIsIiR0ZW1wIiwiY2xvbmVOb2RlIiwib3V0ZXJIVE1MIiwicm9wZW4iLCJub2RlTmFtZSIsInJjbG9zZSIsIm1hcmt1cCIsImxhc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwidG9EYXRhVVJMIiwib3B0aW9ucyIsIl9zdmciLCJtc2ciLCJleHBvcnRTVkciLCJzdmdfeG1sIiwic3ZnX2RhdGF1cmwiLCJiYXNlNjRkYXRhVVJMZW5jb2RlIiwiYjY0IiwiYnRvYSIsImV4cG9ydEltYWdlIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN2Z19pbWciLCJkcmF3SW1hZ2UiLCJpbWFnZV9kYXRhdXJsIiwib25lcnJvciIsImV4cG9ydEltYWdlQ2FudmciLCJjYW52ZyIsInhjYW52YXMiLCJqc0NhbnZhcyIsImtlZXBPdXRzaWRlVmlld3BvcnQiLCJiYm94IiwiZ2V0QkJveCIsImNvbXBpbGUiLCJrZWVwTm9uU2FmZSIsInJlbmRlckRlZnMiLCJxdWVyeVNlbGVjdG9yIiwic3RyMSIsInN0cjIiLCJyZW5kZXJTaGFwZSIsInJvdW5kIiwibmV3UHRzIiwicHJldiIsIm5leHQiLCJkMSIsImQyIiwiY29ybmVyIiwiZ2V0UGF0aERhdGEiLCJjb250ZW50IiwibSIsIiRyb290IiwiJGVkZ2UiLCJUcmlhbmdsZSIsIlJob21idXMiLCJIZXhhZ29uIiwiUG9seWdvbiIsInJlbW92ZUxhc3QiLCJHcmlkIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7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O0FBMkJ2QnJSLFVBQVEsZ0JBQVM2aUIsTUFBVCxFQUFpQjtBQUN4QixVQUFPLHFCQUNLQSxPQUFPWixFQURaLHlCQUNnQ1ksT0FBT1gsSUFEdkMsMEJBQzhEVyxPQUFPWCxJQURyRSxrQkFDb0ZXLE9BQU80SSxHQUFQLENBQVcsQ0FBWCxDQURwRixvQkFFRDVJLE9BQU80SSxHQUFQLENBQVcsQ0FBWCxDQUZDLHFDQUV3QzVJLE9BQU8ySSxPQUFQLENBQWVqbEIsQ0FGdkQsU0FFNERzYyxPQUFPMkksT0FBUCxDQUFlN2tCLENBRjNFLFNBRWdGa2MsT0FBTzJJLE9BQVAsQ0FBZTlrQixLQUYvRixTQUV3R21jLE9BQU8ySSxPQUFQLENBQWU1a0IsTUFGdkgsNENBR3NCaWMsT0FBTzZJLElBQVAsd0JBQWdDN0ksT0FBTzZJLElBQXZDLGNBQW9EN0ksT0FBTzZJLElBQTNELFVBQXFFLEVBSDNGLDRCQUlQd0MsSUFKTyxFQUFQO0FBS0EsR0FqQ3NCO0FBa0N2Qm1ILFFBQU0sY0FBU25ULElBQVQsRUFBZTtBQUNwQixVQUFPLDRDQUMwQkEsSUFEMUIsb0JBQzJDQSxJQUQzQyx5SUFHY0EsSUFIZCxpRUFJT0EsSUFKUCwwRUFLT0EsSUFMUCxnQkFLb0JBLElBTHBCLDBEQU1HZ00sSUFOSCxFQUFQO0FBT0EsR0ExQ3NCO0FBMkN2Qm51QixTQUFPLGlCQUFFK0wsUUFBRixDQUFXLDg5Q0E0QmpCb2lCLElBNUJpQixFQUFYLEVBNEJFLEVBQUNvSCxVQUFVLE1BQVgsRUE1QkYsQ0EzQ2dCLENBdUVRO0FBdkVSLEVBQXhCOzttQkEwRWU5MEIsVyIsImZpbGUiOiJxZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInFncmFwaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicWdyYXBoXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgMDAyOTAzZTc0YzZiNjRiODM0YzdcbiAqKi8iLCJpbXBvcnQgQmFzZTY0IGZyb20gXCIuL3V0aWwvYmFzZTY0XCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XHJcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcclxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcclxuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9SZW5kZXJlclwiO1xyXG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xyXG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XHJcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvclwiO1xyXG5cclxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcclxuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdEV2ZW50cyxcclxuXHRCYXNlNjQsXHJcblx0Q2FjaGUsXHJcblx0VXRpbHMsXHJcblx0RG9tVXRpbHMsXHJcblx0U3RyaW5nQnVmZmVyLFxyXG5cdFBvaW50LFxyXG5cdExpbmUsXHJcblx0U2hhcGUsXHJcblx0UmVjdGFuZ2xlLFxyXG5cdEVsbGlwc2UsXHJcblx0TGluayxcclxuXHRFdmVudERpc3BhdGNoZXIsXHJcblx0TGFiZWwsXHJcblx0TWFya2VyLFxyXG5cdEdyYXBoLFxyXG5cdENlbGwsXHJcblx0Tm9kZSxcclxuXHRFZGdlLFxyXG5cdExheW91dCxcclxuXHRGbG93TGF5b3V0LFxyXG5cdFJlbmRlcmVyLFxyXG5cdFNWR1JlbmRlcmVyLFxyXG5cdEdyYXBoQmVoYXZpb3IsXHJcblx0U2VsZWN0aW9uQmVoYXZpb3JcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9qYXZhc2NyaXB0LWJhc2U2NC5odG1sXHJcblxyXG52YXIgQmFzZTY0ID0ge1xyXG5cclxuXHQvLyBwcml2YXRlIHByb3BlcnR5XHJcblx0X2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcclxuXHJcblx0Ly8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcclxuXHRlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0dmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcblx0XHR2YXIgaSA9IDA7XHJcblxyXG5cdFx0aW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0KTtcclxuXHJcblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Y2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0Y2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0Y2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHJcblx0XHRcdGVuYzEgPSBjaHIxID4+IDI7XHJcblx0XHRcdGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xyXG5cdFx0XHRlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XHJcblx0XHRcdGVuYzQgPSBjaHIzICYgNjM7XHJcblxyXG5cdFx0XHRpZiAoaXNOYU4oY2hyMikpIHtcclxuXHRcdFx0XHRlbmMzID0gZW5jNCA9IDY0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XHJcblx0XHRcdFx0ZW5jNCA9IDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgK1xyXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXHJcblx0XHRcdHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMykgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH0sXHJcblxyXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXHJcblx0ZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcblx0XHR2YXIgb3V0cHV0ID0gXCJcIjtcclxuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzO1xyXG5cdFx0dmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcblx0XHR2YXIgaSA9IDA7XHJcblxyXG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcblxyXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblxyXG5cdFx0XHRjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcclxuXHRcdFx0Y2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG5cdFx0XHRjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xyXG5cclxuXHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcclxuXHJcblx0XHRcdGlmIChlbmMzICE9IDY0KSB7XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZW5jNCAhPSA2NCkge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0b3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xyXG5cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xyXG5cdF91dGY4X2VuY29kZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcclxuXHRcdHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xyXG5cclxuXHRcdFx0dmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcclxuXHJcblx0XHRcdGlmIChjIDwgMTI4KSB7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdXRmdGV4dDtcclxuXHR9LFxyXG5cclxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcclxuXHRfdXRmOF9kZWNvZGUgOiBmdW5jdGlvbiAodXRmdGV4dCkge1xyXG5cdFx0dmFyIHN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgaSA9IDA7XHJcblx0XHR2YXIgYyA9IGMxID0gYzIgPSAwO1xyXG5cclxuXHRcdHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0YyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcclxuXHJcblx0XHRcdGlmIChjIDwgMTI4KSB7XHJcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xyXG5cdFx0XHRcdGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuXHRcdFx0XHRpICs9IDI7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuXHRcdFx0XHRjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xyXG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuXHRcdFx0XHRpICs9IDM7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0cmluZztcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2Jhc2U2NC5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcblxyXG4vLyBiZWFuIHJlcXVpcmVzIHRoZSBleGlzdGVuY2Ugb2Ygd2luZG93XHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG5cdGdsb2JhbC53aW5kb3cgPSB7IGFkZEV2ZW50SGFuZGxlcjogZnVuY3Rpb24oKSB7fSB9O1xyXG5cdGdsb2JhbC5kb2N1bWVudCA9IHt9O1xyXG5cdGdsb2JhbC5uYXZpZ2F0b3IgPSB7fTtcclxufVxyXG5cclxuLy8gdXRpbCB2YXJpYWJsZXNcclxubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XHJcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxyXG5cdFx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSA9IG5ldyBNYXAoKTtcclxuXHRcdGlmICghbmFtZSlcclxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xyXG5cdFx0aWYgKCF0eXBlKVxyXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xyXG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xyXG5cdFx0bGV0IG5hbWUgPSBwcm9wcy5uYW1lO1xyXG5cclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXHJcblx0XHRsZXQgdHlwZSA9IHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUpO1xyXG5cdFx0aWYgKCF0eXBlKSB7XHJcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xyXG5cdFx0XHRpZiAoIWV4dGVuZCAmJiBkZWZhdWx0VHlwZSlcclxuXHRcdFx0XHRleHRlbmQgPSBkZWZhdWx0VHlwZTtcclxuXHRcdFx0aWYgKGV4dGVuZClcclxuXHRcdFx0XHR0eXBlID0gY2xhc3MgZXh0ZW5kcyBleHRlbmQge1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XHJcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0XHRcdFx0Xy5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xyXG5cdFx0XHRkZWxldGUgcHJvcHMuZXh0ZW5kcztcclxuXHRcdFx0Xy5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3BzKTtcclxuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XHJcblx0XHRcdHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUsIHR5cGUpO1xyXG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuY3JlYXRlVHlwZSAtICcgKyBuYW1lc3BhY2UgKyAnLicgKyBuYW1lKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0eXBlO1xyXG5cdH0sXHJcblxyXG5cdGJ1aWxkVHlwZXM6IGZ1bmN0aW9uICh0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xyXG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcclxuXHJcblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XHJcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcclxuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChkZWZhdWx0VHlwZSkge1xyXG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xyXG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XHJcblx0XHRcdGlmICh0eXBlKVxyXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5kZWZhdWx0c0RlZXAodHlwZSwgZGVmYXVsdFR5cGUpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcclxuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcclxuXHR9LFxyXG5cclxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cclxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxyXG5cdC8vIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQuXHJcblx0ZXh0ZW5kOiBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcclxuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxyXG5cdFx0Xy5leHRlbmQoY2hpbGQsIHBhcmVudCwgc3RhdGljUHJvcHMpO1xyXG5cclxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXHJcblx0XHQvLyBgcGFyZW50YCdzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxyXG5cdFx0dmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkO1xyXG5cdFx0fTtcclxuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcclxuXHRcdC8vIGlmIHN1cHBsaWVkLlxyXG5cdFx0aWYgKHByb3RvUHJvcHMpIF8uZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcblxyXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cclxuXHRcdGNoaWxkLnN1cGVyY2xhc3MgPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuXHRcdHJldHVybiBjaGlsZDtcclxuXHR9LFxyXG5cclxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbiAob2JqLCBjb25maWcpIHtcclxuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xyXG5cdFx0d2hpbGUgKGMpIHtcclxuXHRcdFx0aWYgKGMuc3VwZXIpIHtcclxuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0XHRzcGxpY2UuYXBwbHkoY0FyciwgWzAsIDAsIGNdKTtcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0YyA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGMgPSBjQXJyW2ldO1xyXG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcclxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XHJcblx0XHR9XHJcblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcclxuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0aWYgKCF2YWx1ZSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcclxuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSBKUyBjbGFzcyBjb25zdHJ1Y3Rvci5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q2xhc3NcclxuXHQgKi9cclxuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcykge1xyXG5cdFx0aWYgKCFqc0NsYXNzKVxyXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xyXG5cclxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxyXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcclxuXHRcdHJldHVybiBqc0NsYXNzO1xyXG5cdH0sXHJcblxyXG5cdGRlYnVnOiBmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xyXG5cdFx0aWYgKG1vZHVsZU5hbWUpIHtcclxuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X2RlYnVnQWxsID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRsb2c6IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XHJcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcclxuXHRcdGlmICghX2RlYnVnQWxsKSB7XHJcblx0XHRcdGRlYnVnID0gZmFsc2U7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX2RlYnVnZ2luZy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChfZGVidWdnaW5nW2ldID09IG5hbWUpIGRlYnVnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFkZWJ1Zykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR3aGlsZSAobmFtZS5sZW5ndGggPCAxMCkge1xyXG5cdFx0XHRuYW1lID0gbmFtZSArICcgJztcclxuXHRcdH1cclxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkgKyBcIiAtIFwiO1xyXG5cdFx0Y29uc29sZS5pbmZvKG5hbWUsIG1lc3NhZ2UpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXHJcblx0ICogQHBhcmFtIGJvdW5kc1xyXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgZ2VvbWV0cnkgaW5mb3JtYXRpb24sIHRoZSBmb3JtYXQgb2YgR2VvbWV0cnkgaXM6XHJcblx0ICoge1xyXG5cdCAqICAgICAgeDogXCJ4IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LCBpZiBsZXNzIHRoYW4gMSwgd2lsbCBiZSB0cmVhdGVkIGFzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBwYXJlbnQgd2lkdGguXCIsXHJcblx0ICogICAgICB5OiBcInkgY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQuXCIsXHJcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcclxuXHQgKiAgICAgIGFuY2hvclk6IFwieSBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxyXG5cdCAqICAgICAgb2Zmc2V0WDogXCJ0aGUgb2Zmc2V0IGluIHRoZSB4IGRpcmVjdGlvbi5cIixcclxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXHJcblx0ICogICAgICB3aWR0aDogXCJ0aGUgd2lkdGggb2YgdGhlIGNoaWxkIGVsZW1lbnRcIixcclxuXHQgKiAgICAgIGhlaWdodDogXCJ0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBlbGVtZW50XCJcclxuXHQgKiB9XHJcblx0ICogQHJldHVybnMgeypbXX1cclxuXHQgKi9cclxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbiAoYm91bmRzLCBnZW9tZXRyeSkge1xyXG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XHJcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XHJcblx0XHRyZXR1cm4gdGhpcy5vZmZzZXRQb3NpdGlvbihbeCwgeV0sIGdlb21ldHJ5KTtcclxuXHR9LFxyXG5cclxuXHRvZmZzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvcywgZ2VvbWV0cnkpIHtcclxuXHRcdHJldHVybiBbcG9zWzBdICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9zWzFdICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXHJcblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRlXHJcblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXHJcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXHJcblx0ICovXHJcblx0dW5zY2FsZTogZnVuY3Rpb24gKHQsIHNjYWxlLCBvKSB7XHJcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcclxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0sIG8ud2lkdGggKiBzY2FsZSwgby5oZWlnaHQgKiBzY2FsZSk7XHJcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gW29bMF0gKiBzY2FsZSArIHRbMF0sIG9bMV0gKiBzY2FsZSArIHRbMV1dO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyBzY2FsZWQsIGkuZS4sIHJlbGF0aXZlIHBvc2l0aW9uIGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cclxuXHQgKiBAcGFyYW0gdCB0aGUgY3VycmVudCB0cmFuc2xhdGlvblxyXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxyXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxyXG5cdCAqL1xyXG5cdHNjYWxlOiBmdW5jdGlvbiAodCwgc2NhbGUsIG8pIHtcclxuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54IC0gdFswXSkgLyBzY2FsZSwgKG8ueSAtIHRbMV0pIC8gc2NhbGUsIG8ud2lkdGggLyBzY2FsZSwgby5oZWlnaHQgLyBzY2FsZSk7XHJcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFsob1swXSAtIHRbMF0pIC8gc2NhbGUsIChvWzFdIC0gdFsxXSkgLyBzY2FsZV07XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdGdldFByb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XHJcblx0XHRpZiAoIW9iailcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRpZiAoXy5oYXMob2JqLCBwcm9wKSlcclxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcclxuXHRcdGlmIChvYmoucHJvcCAmJiBfLmlzRnVuY3Rpb24ob2JqLnByb3ApKVxyXG5cdFx0XHRyZXR1cm4gb2JqLnByb3AocHJvcCk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxyXG5cdCAqL1xyXG5cdGNsb25lKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwdCB0byB0aGUgb3RoZXIgcHQuXHJcblx0ICogQHBhcmFtIGFQdFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0ZGlzdGFuY2UoYVB0KSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBhUHQueCkgKiAodGhpcy54IC0gYVB0LngpICsgKHRoaXMueSAtIGFQdC55KSAqICh0aGlzLnkgLSBhUHQueSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHJhbnNsYXRlIHRoaXMgcG9pbnRcclxuIFx0ICovXHJcblx0dHJhbnNsYXRlKHAyKSB7XHJcblx0XHR0aGlzLnggKz0gcDIueDtcclxuXHRcdHRoaXMueSArPSBwMi55O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2FsZSB0aGlzIHZlY3RvclxyXG4gXHQgKi9cclxuXHRzY2FsZShzY2FsZSkge1xyXG5cdFx0dGhpcy54ICo9IHNjYWxlO1xyXG5cdFx0dGhpcy55ICo9IHNjYWxlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXRTY2FsZWQoc2NhbGUpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlKTtcclxuXHR9XHJcblxyXG5cdGdldFRyYW5zbGF0ZWQocDIpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgZnJvbSB0aGlzIHBvaW50IHRvIHAyLlxyXG5cdCAqIEBwYXJhbSBwMlxyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cclxuXHQgKi9cclxuXHRnZXREaXJlY3Rpb24ocDIpIHtcclxuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KChwMi54IC0gdGhpcy54KSAvIGRpc3QsIChwMi55IC0gdGhpcy55KSAvIGRpc3QpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcm90YXRlIHRoZSBwb2ludCBhYm91dCB0aGUgb3JpZ2luLiBXaXRoIHRoZSBzcGVjaWZpZWQgYW5nbGUuXHJcblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcclxuXHQgKi9cclxuXHRyb3RhdGUoYW5nbGUpIHtcclxuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cdFx0dmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcclxuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xyXG5cdFx0dGhpcy55ID0geCAqIHNpbiArIHkgKiBjb3M7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldFJvdGF0ZWQoYW5nbGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QsIHRyZWF0aW5nIHRoaXMgYW5kIHAyIGFzIHZlY3RvcnMuXHJcblx0ICovXHJcblx0ZG90UHJvZHVjdChwMikge1xyXG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBtaWQgcG9pbnQgYmV0d2VlbiB0aGlzIGFuZCBwMi5cclxuIFx0ICovXHJcblx0Z2V0TWlkUG9pbnQocDIpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQoKHRoaXMueCArIHAyLngpIC8gMiwgKHRoaXMueSArIHAyLnkpIC8gMik7XHJcblx0fVxyXG5cclxuXHRyZXZlcnNlKCkge1xyXG5cdFx0dGhpcy54ID0gLXRoaXMueDtcclxuXHRcdHRoaXMueSA9IC10aGlzLnk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVxdWFscyhwMikge1xyXG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAodGhpcy54ID09IHAyLnggJiYgdGhpcy55ID09IHAyLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxyXG5cdCAqIElmIHZlcnRpY2FsIGlzIHRydWUsIGl0IHdpbGwgcmVmbGVjdCB0aGUgcG9pbnQgY3Jvc3MgdGhlIHZlcnRpY2FsXHJcblx0ICogY2VudHJhbCBsaW5lIG9mIHRoZSByZWN0YW5nbGUsIG90aGVyd2lzZSByZWZsZWN0IGNyb3NzIHRoZSBob3Jpem9udGFsXHJcblx0ICogY2VudHJhbCBsaW5lLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlY3QgdGhlIHJlY3RhbmdsZVxyXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxyXG5cdCAqL1xyXG5cdHJlZmxlY3QocmVjdCwgdmVydGljYWwpIHtcclxuXHRcdGlmICh2ZXJ0aWNhbClcclxuXHRcdFx0dGhpcy54ID0gMiAqIHJlY3QueCAtIHRoaXMueDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy54ICsgXCIsXCIgKyB0aGlzLnk7XHJcblx0fVxyXG59XHJcblxyXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcclxuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XHJcblBvaW50LlMgPSBuZXcgUG9pbnQoMCwgMSk7XHJcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XHJcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcclxuUG9pbnQuTlcgPSBuZXcgUG9pbnQoLTEsIC0xKTtcclxuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XHJcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIGEgZ2l2ZW4gcG9pbnQgb2YgYSBnaXZlbiByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRjb250YWlucyhlbCkge1xyXG5cdFx0bGV0IHcgPSBlbC53aWR0aCB8fCAwO1xyXG5cdFx0bGV0IGggPSBlbC5oZWlnaHQgfHwgMDtcclxuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcclxuXHRcdGxldCByaWdodCA9IGVsLnggKyB3LzI7XHJcblx0XHRsZXQgdG9wID0gZWwueSAtIGgvMjtcclxuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xyXG5cdFx0cmV0dXJuIChyaWdodCA8PSB0aGlzLnJpZ2h0KSAmJiAobGVmdCA+PSB0aGlzLmxlZnQpICYmXHJcblx0XHRcdCh0b3AgPj0gdGhpcy50b3ApICYmIChib3R0b20gPD0gdGhpcy5ib3R0b20pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cclxuXHQgKi9cclxuXHRkaXN0YW5jZShwdCkge1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcclxuXHJcblx0XHRpZiAocHQueCA8IHRoaXMubGVmdCkge1xyXG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKSk7XHJcblx0XHR9XHJcblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvcCAtIHB0Lnk7XHJcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XHJcblx0XHR9XHJcblx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XHJcblx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0cmV0dXJuIHB0LnggLSB0aGlzLnJpZ2h0O1xyXG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZW4gdHdvIHBvaW50cywgd2Ugd2FudCB0byBkZXRlY3Qgd2hldGhlciB0aGUgbGluZSBqb2luaW5nIHRoZSBwdHMgaW50ZXJzZWN0XHJcblx0ICogd2l0aCB0aGUgcmVjdGFuZ2xlIG9yIG5vdC4gV2UgYXNzdW1lIG9ubHkgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lIHNlZ21lbnRzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybiBpbnQgdGhlIHNpZGUgb2YgdGhlIGludGVyc2VjdGlvbjogLTE6IG5vIGludGVyc2VjdGlvbiwgMDogbGVmdCwgMTogdG9wLCAyOiByaWdodCwgMzogYm90dG9tLCA0OiBjb250YWlubWVudC5cclxuXHQgKi9cclxuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcclxuXHRcdGxldCBob3Jpem9udGFsID0gcHQxLnkgPT0gcHQyLnk7XHJcblx0XHRsZXQgY29udGFpbnMxID0gdGhpcy5jb250YWlucyhwdDEpO1xyXG5cdFx0bGV0IGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcclxuXHRcdGlmIChjb250YWluczEgJiYgY29udGFpbnMyKSByZXR1cm4gNDtcclxuXHRcdGlmICghY29udGFpbnMxICYmICFjb250YWluczIpIHtcclxuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xyXG5cdFx0XHRcdGlmIChwdDEueCA8IHRoaXMubGVmdCAmJiBwdDIueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnkgPCB0aGlzLnRvcCAmJiBwdDIueSA+IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRcdHJldHVybiAzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XHJcblx0XHRpZiAoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRpZiAob3V0UHQueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnUmVjdGFuZ2xlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGxldCB4ID0gcmVjdC54O1xyXG5cdFx0bGV0IHkgPSByZWN0Lnk7XHJcblx0XHRsZXQgZHggPSBwdC54IC0geDtcclxuXHRcdGxldCBkeSA9IHB0LnkgLSB5O1xyXG5cdFx0bGV0IGFscGhhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblx0XHRsZXQgcGkgPSBNYXRoLlBJO1xyXG5cdFx0bGV0IHBpMiA9IE1hdGguUEkvMjtcclxuXHRcdGxldCBiZXRhID0gcGkyIC0gYWxwaGE7XHJcblx0XHRsZXQgdCA9IE1hdGguYXRhbjIocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xyXG5cclxuXHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0cC55ID0geSAtIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRwLnggPSB4IC0gcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdHAueSA9IHkgKyByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRwLnggPSB4ICsgcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgcDEgYW5kIHAyXHJcblx0ICovXHJcblx0c3RhdGljIGdldEJvdW5kaW5nUmVjdGFuZ2xlKHB0cywgbWFyZ2luKSB7XHJcblx0XHRpZiAoIXB0cyB8fCBwdHMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcclxuXHRcdGlmICghXy5pc0FycmF5KG1hcmdpbikpXHJcblx0XHRcdG1hcmdpbiA9IFttYXJnaW4sIG1hcmdpbiwgbWFyZ2luLCBtYXJnaW5dO1xyXG5cdFx0bGV0IG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0bGV0IG1heCA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHAgPSBwdHNbaV07XHJcblx0XHRcdGlmIChwLnggPCBtaW5bMF0pIHtcclxuXHRcdFx0XHRtaW5bMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA8IG1pblsxXSkge1xyXG5cdFx0XHRcdG1pblsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC54ID4gbWF4WzBdKSB7XHJcblx0XHRcdFx0bWF4WzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPiBtYXhbMV0pIHtcclxuXHRcdFx0XHRtYXhbMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG1pblswXSA9IG1pblswXSAtIG1hcmdpblswXTtcclxuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcclxuXHRcdG1heFswXSA9IG1heFswXSArIG1hcmdpblsyXTtcclxuXHRcdG1heFsxXSA9IG1heFsxXSArIG1hcmdpblszXTtcclxuXHRcdGxldCB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcclxuXHRcdGxldCBoID0gTWF0aC5hYnMobWF4WzFdIC0gbWluWzFdKTtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pblswXSArIHcvMiwgbWluWzFdICsgaC8yLCB3LCBoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cclxuXHQgKiBAcGFyYW0gcmVjdHNcclxuXHQgKi9cclxuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcclxuXHRcdGxldCBtaW54ID0gbnVsbCwgbWlueSA9IG51bGwsIG1heHggPSAtSW5maW5pdHksIG1heHkgPSAtSW5maW5pdHk7XHJcblx0XHRfLmVhY2gocmVjdHMsIGZ1bmN0aW9uIChyZWN0KSB7XHJcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcclxuXHRcdFx0bWlueSA9IG1pbnkgfHwgcmVjdC55O1xyXG5cdFx0XHRtaW54ID0gTWF0aC5taW4obWlueCwgcmVjdC54KTtcclxuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XHJcblx0XHRcdG1heHggPSBNYXRoLm1heChtYXh4LCByZWN0LnJpZ2h0KCkpO1xyXG5cdFx0XHRtYXh5ID0gTWF0aC5tYXgobWF4eSwgcmVjdC5ib3R0b20oKSk7XHJcblx0XHR9KTtcclxuXHRcdG1pbnggPSBtaW54IHx8IDA7XHJcblx0XHRtaW55ID0gbWlueSB8fCAwO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGRpcmVjdGlvbiB0aGUgcG9pbnQgPGk+cDwvaT4gaXMgaW4gcmVsYXRpb24gdG8gdGhlIGdpdmVuIHJlY3RhbmdsZS5cclxuXHQgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFdFU1QgKC0xLDApLCBFQVNUICgxLDApLCBOT1JUSCAoMCwtMSkgYW5kIFNPVVRIICgwLDEpIGlmIG9ydGhvZ29uYWwgaXMgdHJ1ZSwgb3RoZXJ3aXNlIHJldHVyblxyXG5cdCAqIHRoZSBkaXJlY3Rpb24gY29ubmVjdGlvbiB0aGUgY2VudGVyIG9mIHIgYW5kIHAuXHJcblx0ICogQHBhcmFtIHJcclxuXHQgKiBAcGFyYW0gcFxyXG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXHJcblx0ICogQHJldHVybnMge1BvaW50fCp9XHJcblx0ICovXHJcblx0c3RhdGljIGdldERpcmVjdGlvbihyLCBwLCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGlmICghb3J0aG9nb25hbClcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChyLngsIHIueSkuZ2V0RGlyZWN0aW9uKG5ldyBQb2ludChwLngsIHAueSkpO1xyXG5cclxuXHRcdGxldCBpLCBkaXN0YW5jZSA9IE1hdGguYWJzKHIubGVmdCAtIHAueCksIGRpcmVjdGlvbiA9IFBvaW50Llc7XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIudG9wIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuTjtcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5ib3R0b20gLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5TO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnJpZ2h0IC0gcC54KTtcclxuXHRcdGlmIChpIDwgZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuRTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGlyZWN0aW9uO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmxldCByZWdpc3RyeSA9IHt9O1xyXG5cclxuY2xhc3MgU2hhcGUge1xyXG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdF8uZGVmYXVsdHModGhpcywgY29uZmlnLCB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodC8yOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIG9mIHRoaXMgUmVjdGFuZ2xlLlxyXG5cdCAqL1xyXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXHJcblx0ICovXHJcblx0Z2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XHJcblxyXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XHJcblxyXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cclxuXHJcblx0Y29udGFpbnMoZWwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgd2lsbCBnZW5lcmF0ZSBuIHBvcnRzIG9uIHRoZSBzaGFwZS5cclxuXHQgKi9cclxuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cclxuXHQgKiBAcGFyYW0gcmVmUHRcclxuXHQgKiBAcmV0dXJucyB7bnVsbH1cclxuXHQgKi9cclxuXHRnZXRQZXJpbWV0ZXIocmVmUHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcih2aWV3KSB7XHJcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5uYW1lLCB0aGlzKSk7XHJcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xyXG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcclxuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XHJcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9TaGFwZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4gKiBkb20gVXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc0lFOiAoZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcclxuXHJcblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxyXG5cdFx0aWYgKElkeCA+IDApXHJcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XHJcblxyXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxyXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxyXG5cdFx0XHRyZXR1cm4gMTE7XHJcblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKSlcclxuXHRcdFx0cmV0dXJuIFwiRWRnZVwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSkoKSxcclxuXHJcblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcclxuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzQ2hyb21lOiAoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID49IDApIHJldHVybiBmYWxzZTtcclxuXHRcdHZhciByYXcgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xyXG5cdFx0cmV0dXJuIHJhdyA/IHBhcnNlSW50KHJhd1syXSwgMTApIDogZmFsc2U7XHJcblx0fSkoKSxcclxuXHJcblx0aXNNYWM6IChmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzV2luZG93czogKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJXaW5kb3dzXCIpID49IDA7XHJcblx0fSkoKSxcclxuXHJcblx0aXNMaW51eDogKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJMaW51eFwiKSA+PSAwO1xyXG5cdH0pKCksXHJcblxyXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xyXG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xyXG5cdFx0aWYgKGh0bWwpXHJcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fSxcclxuXHJcblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcclxuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xyXG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2RlcztcclxuXHR9LFxyXG5cclxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xyXG5cdFx0aWYgKGF0dHJpYnMpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcclxuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcclxuXHRcdFx0IH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0eWxlcykge1xyXG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XHJcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XHJcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xyXG5cdH0sXHJcblxyXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xyXG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXHJcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxyXG5cdFx0XHRcdHJldHVybiBub2RlO1xyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cclxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gY29udGV4dFxyXG5cdCAqIEByZXR1cm5zIHsqW119XHJcblx0ICovXHJcblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcclxuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcclxuXHR9LFxyXG5cclxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xyXG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcclxuXHJcblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XHJcblx0fSxcclxuXHJcblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcclxuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XHJcblx0fSxcclxuXHJcblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcclxuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcclxuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XHJcblx0XHRyZXR1cm4gW3csIGhdO1xyXG5cdH0sXHJcblxyXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcclxuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XHJcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcblx0fSxcclxuXHJcblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcclxuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XHJcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcclxuXHJcblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xyXG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XHJcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxyXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXHJcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcclxuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xyXG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cclxuXHQgKiBAcGFyYW0gc3JjXHJcblx0ICovXHJcblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcclxuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cclxuXHRkb3dubG9hZEZpbGU6IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0bGV0IG1pbWUgPSBkYXRhLm1hdGNoKC9eZGF0YTooW147LF0qKS8pWzFdO1xyXG5cdFx0aWYgKG5hbWUuaW5kZXhPZignLicpIDwgMCkge1xyXG5cdFx0XHRpZiAoIW1pbWUpIG1pbWUgPSAndGV4dC9wbGFpbic7XHJcblx0XHRcdGlmIChtaW1lID09ICd0ZXh0L3BsYWluJylcclxuXHRcdFx0XHRuYW1lID0gbmFtZSArICcudHh0JztcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0bGV0IHR5cGUgPSBtaW1lLnNwbGl0KCcvJylbMV07XHJcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZignKycpID4gMCkgdHlwZSA9IHR5cGUuc3BsaXQoJysnKVswXTtcclxuXHRcdFx0XHRuYW1lID0gbmFtZSArICcuJyArIHR5cGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmlzSUUpIHtcclxuXHRcdFx0bGV0IGVuY29kZWQgPSBkYXRhLmluZGV4T2YoJztiYXNlNjQnKSA+PSAwO1xyXG5cdFx0XHRpZiAoZW5jb2RlZClcclxuXHRcdFx0XHRkYXRhID0gYXRvYihkYXRhLnJlcGxhY2UoJ2RhdGE6JyArIG1pbWUgKyAnO2Jhc2U2NCwnLCAnJykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGF0YSA9IGRlY29kZVVSSShkYXRhLnJlcGxhY2UoJ2RhdGE6JyArIG1pbWUgKyAnLCcsICcnKSk7XHJcblx0XHRcdGRhdGEgPSB0aGlzLkdldEJsb2IoZGF0YSwgbWltZSk7XHJcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKGRhdGEsIG5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogZGF0YSwgZG93bmxvYWQ6IG5hbWV9LCB7ZGlzcGxheTogXCJub25lXCJ9KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHRcdFx0bGluay5jbGljaygpO1xyXG5cdFx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydCBiNTQgdG8gYmxvYi4gSUUgb25seVxyXG5cdCAqL1xyXG5cdEdldEJsb2I6IGZ1bmN0aW9uIChkYXRhLCBjb250ZW50VHlwZSwgc2xpY2VTaXplKSB7XHJcblx0XHRjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnO1xyXG5cdFx0c2xpY2VTaXplID0gc2xpY2VTaXplIHx8IDUxMjtcclxuXHJcblx0XHR2YXIgYnl0ZUFycmF5cyA9IFtdO1xyXG5cclxuXHRcdGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGRhdGEubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0XHRcdHZhciBzbGljZSA9IGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG5cclxuXHRcdFx0dmFyIGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuXHRcdFx0Ynl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcblx0fSxcclxuXHJcblx0b3BlbkltYWdlOiBmdW5jdGlvbihuYW1lLCBpbWFnZSkge1xyXG5cdFx0dmFyIG15V2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b29sYmFyPXllcywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHdpZHRoPTUwMCwgaGVpZ2h0PTUwMFwiKTtcclxuXHRcdHZhciBteURvY3VtZW50ID0gbXlXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHR2YXIgaW1nID0gbXlEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdFx0dGhpcy5zZXRFbGVtZW50KGltZywge3NyYzogaW1hZ2UsIG5hbWU6IG5hbWV9KTtcclxuXHRcdG15RG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXHJcblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XHJcblx0ICovXHJcblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xyXG5cdFx0cmV0dXJuICh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0RvbVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgc3RyaW5nIGJ1ZmZlciBmb3IgZmFzdCBzdHJpbmcgbWFuaXB1bGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0cikge1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdGlmIChzdHIpXHJcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3RyKTtcclxuXHR9XHJcblxyXG5cdGFwcGVuZChzdHVmZikge1xyXG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChcIlwiICsgc3R1ZmYpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwcmVwZW5kKHN0dWZmKSB7XHJcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBzdHVmZik7XHJcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0fVxyXG5cclxuXHRyZW1vdmVMYXN0KCkge1xyXG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKHNlcCkge1xyXG5cdFx0aWYgKCFzZXApIHNlcCA9ICcnO1xyXG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xyXG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcclxuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcclxuXHRcdHRoaXMuZW5kID0gZW5kO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXHJcblx0ICovXHJcblx0bGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKHB0KSB7XHJcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xyXG5cdFx0aWYgKHggPT0gMCkgcmV0dXJuIDA7XHJcblxyXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xyXG5cdFx0dmFyIGNvc2EgPSBuZXcgUG9pbnQoKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpIC8gbCwgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpIC8gbCkuZG90UHJvZHVjdChcclxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xyXG5cclxuXHRcdHJldHVybiB4ICogTWF0aC5zcXJ0KDEgLSBjb3NhICogY29zYSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXHJcblx0ICpcclxuXHQgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGxpbmVzIGFzIGFuIDxteFBvaW50Pi5cclxuXHQgKlxyXG5cdCAqIFBhcmFtZXRlcnM6XHJcblx0ICpcclxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHgxIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cclxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHkyIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICovXHJcblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XHJcblx0XHR2YXIgbnVtZV9hID0gKCh4MyAtIHgyKSAqICh5MCAtIHkyKSkgLSAoKHkzIC0geTIpICogKHgwIC0geDIpKTtcclxuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xyXG5cclxuXHRcdHZhciB1YSA9IG51bWVfYSAvIGRlbm9tO1xyXG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XHJcblxyXG5cdFx0aWYgKHVhID49IDAuMCAmJiB1YSA8PSAxLjAgJiYgdWIgPj0gMC4wICYmIHViIDw9IDEuMCkge1xyXG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxyXG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XHJcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25ZID0geTAgKyB1YSAqICh5MSAtIHkwKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9JztcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0dHlwZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiB0cnVlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0YW5jaG9yWDogMCxcblx0YW5jaG9yWTogMCxcblx0b2Zmc2V0WDogMCxcblx0b2Zmc2V0WTogMFxufTtcblxubGV0IGxpbmtUeXBlcyA9IHt9O1xuXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIGw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgbW9kaWZpZXJzIG9yIGxhYmVsLi5cblx0ICpcblx0ICogQHBhcmFtIGdlb21ldHJ5OiBkZWZpbmVzIGhvdyBmYXIgYWxvbmcgdGhlIGVkZ2Ugc2hvdWxkIHRoZSBwb2ludCBiZSBwbGFjZWQuXG5cdCAqIEByZXR1cm4gKltdIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA8PSAxKSBwICo9IGw7XG5cdFx0aWYgKHAgPCAwKSBwID0gbCArIHA7XG5cdFx0aWYgKHAgPiBsKSBwID0gbDtcblxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cywgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5rJztcblx0fVxuXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1R5cGVzW3NoYXBlQ29uZmlnLnR5cGVdO1xuXHRcdGlmIChsaW5rQ2xhc3MpXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHR5cGUgbm90IHN1cHBvcnRlZDogJyArIHNoYXBlQ29uZmlnLnR5cGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxufVxuXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cblxuXHRnZXQgY29udHJvbFB0cygpIHtcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IG51bGw7XG5cdFx0cHRzWzFdID0gW107XG5cdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XG5cdFx0aWYgKHAgPCAwKSBwKys7XG5cdFx0aWYgKHAgPiAxKSBwLS07XG5cblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XG5cdFx0bGV0IHAxID0gcHRzWzBdO1xuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcblx0XHRsZXQgcDQgPSBwdHNbMV07XG5cblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHZhciBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcblx0XHR2YXIgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xuXHRcdHZhciBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xuXHRcdHZhciBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdHZhciB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcblx0XHR2YXIgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcblxuXHRcdHZhciB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcblx0XHR2YXIgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xuXG5cdFx0dmFyIHNlZyA9IHRoaXMuc2VnbWVudDtcblxuXHRcdHZhciBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcblx0XHR2YXIgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcblxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xuXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxuXHRcdHtcblx0XHRcdHZhciB4ID0gKGlzU291cmNlTGVmdCkgP1xuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cblxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xuXHRcdFx0TUlOX0JVRkZFUjogMTAsXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxuXHRcdFx0cmFuZG9tTm9pc2U6IDAsXG5cdFx0XHRtYXhDaGFubmVsV2lkdGg6IDEwMFxuXHRcdH0pO1xuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkge1xuXHRcdGxldCBwb3MgPSBNYW5oYXR0YW4ucm91dGUodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdFx0dmFyIGJveGVzID0gW10sIG5vZGUsIHN0YXJ0Qm94LCBlbmRCb3g7XG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcblx0XHRcdHZhciBpbmRleCA9IDA7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdC8vIERvIG5vdCBpbmNsdWRlIHNvdXJjZSBvciB0YXJnZXQgYW5jZXN0b3JzIGluIHJvdXRpbmcuXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcblx0XHRcdFx0c3RhcnRCb3ggPSBpbmRleDtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xuXHRcdFx0XHRib3hlcy5wdXNoKG5vZGUuZ2V0Qm91bmRzKGRvY3VtZW50KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYm94ZXMubGVuZ3RoID4gMSlcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdH1cblx0XHRNYW5oYXR0YW4uX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRpZiAodGhpcy5yYW5kb21Ob2lzZSAmJiBwb3MubGVuZ3RoID4gMykge1xuXHRcdFx0Zm9yICh2YXIgaSA9IDE7IGkgPCBwb3MubGVuZ3RoIC0gMjsgaSsrKSB7XG5cdFx0XHRcdHZhciByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhbmRvbU5vaXNlICogMiAtIHRoaXMucmFuZG9tTm9pc2UpO1xuXHRcdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwb3MsIGksIHJhbmRvbU51bWJlciwgMSwgMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBwb3M7XG5cdH1cblxuXHQvL05ldyBmdW5jdGlvbiBmb3IgZmluZGluZyByb3V0ZVxuXHRzdGF0aWMgcm91dGUoc3RhcnQsIGVuZCwgc3RhcnROb3JtYWwsIGVuZE5vcm1hbCwgYnVmZmVyKSB7XG5cdFx0dmFyIHN0YXJ0QnVmZmVyID0gbmV3IFBvaW50KHN0YXJ0LnggKyBzdGFydE5vcm1hbC54ICogYnVmZmVyLCBzdGFydC55ICsgc3RhcnROb3JtYWwueSAqIGJ1ZmZlcik7XG5cdFx0dmFyIGVuZEJ1ZmZlciA9IG5ldyBQb2ludChlbmQueCArIGVuZE5vcm1hbC54ICogYnVmZmVyLCBlbmQueSArIGVuZE5vcm1hbC55ICogYnVmZmVyKTtcblx0XHR2YXIgc3RhcnRCdWZmZXJOb3JtYWwsIGVuZEJ1ZmZlck5vcm1hbDtcblx0XHR2YXIgcHRzO1xuXHRcdGlmIChzdGFydE5vcm1hbC54ICE9IDApIHtcblx0XHRcdGlmICgoZW5kQnVmZmVyLnggLSBzdGFydEJ1ZmZlci54KSAvIHN0YXJ0Tm9ybWFsLnggPiAwKSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gc3RhcnROb3JtYWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKGVuZEJ1ZmZlci55ID49IHN0YXJ0QnVmZmVyLnkpID8gMSA6IC0xKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoKGVuZEJ1ZmZlci55IC0gc3RhcnRCdWZmZXIueSkgLyBzdGFydE5vcm1hbC55ID4gMCkge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KChlbmRCdWZmZXIueCA+PSBzdGFydEJ1ZmZlci54KSA/IDEgOiAtMSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChlbmROb3JtYWwueCAhPSAwKSB7XG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnggLSBlbmRCdWZmZXIueCkgLyBlbmROb3JtYWwueCA+IDApIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gZW5kTm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgwLCAoc3RhcnRCdWZmZXIueSA+PSBlbmRCdWZmZXIueSkgPyAxIDogLTEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueSAtIGVuZEJ1ZmZlci55KSAvIGVuZE5vcm1hbC55ID4gMCkge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBlbmROb3JtYWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KChzdGFydEJ1ZmZlci54ID49IGVuZEJ1ZmZlci54KSA/IDEgOiAtMSwgMCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKHN0YXJ0QnVmZmVyTm9ybWFsLmRvdFByb2R1Y3QoZW5kQnVmZmVyTm9ybWFsKSA9PSAwKSB7XG5cdFx0XHR2YXIgbWlkZGxlID0gKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkgPyBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgZW5kQnVmZmVyLnkpIDogbmV3IFBvaW50KGVuZEJ1ZmZlci54LCBzdGFydEJ1ZmZlci55KTtcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG1pZGRsZSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdH1cblx0XHRlbHNlIGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPCAwKSB7XG5cdFx0XHRpZiAoc3RhcnRCdWZmZXJOb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludChzdGFydEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBuZXcgUG9pbnQoZW5kQnVmZmVyLngsIChzdGFydC55ICsgZW5kLnkpIC8gMiksIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoKHN0YXJ0LnggKyBlbmQueCkgLyAyLCBzdGFydEJ1ZmZlci55KSwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgZW5kQnVmZmVyLnkpLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KHN0YXJ0QnVmZmVyLnggKyBzdGFydEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBzdGFydEJ1ZmZlci55ICsgc3RhcnRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIG5ldyBQb2ludChlbmRCdWZmZXIueCArIGVuZEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBlbmRCdWZmZXIueSArIGVuZEJ1ZmZlck5vcm1hbC55ICogYnVmZmVyKSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdH1cblxuXHRcdHZhciBwcnVuZVB0cyA9IFtdO1xuXHRcdHBydW5lUHRzWzBdID0gcHRzWzBdO1xuXHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKChwdHNbaV0ueCA9PSBwdHNbaS0xXS54ICYmIHB0c1tpXS54ID09IHB0c1tpKzFdLngpIHx8IChwdHNbaV0ueSA9PSBwdHNbaS0xXS55ICYmIHB0c1tpXS55ID09IHB0c1tpKzFdLnkpKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0cHJ1bmVQdHMucHVzaChwdHNbaV0pO1xuXHRcdH1cblx0XHRwcnVuZVB0cy5wdXNoKHB0c1twdHMubGVuZ3RoIC0gMV0pO1xuXHRcdHJldHVybiBwcnVuZVB0cztcblx0fVxuXG5cdC8qKlxuXHQgKiBBdXRvbWF0aWNhbGx5IHJvdXRlIHRoZSBjb25uZWN0aW9uIHRvIGF2b2lkIGludGVyc2VjdGlvbnMgd2l0aCBvdGhlciB2ZXJ0aWNlcy5cblx0ICovXG5cdGF1dG9Sb3V0ZShwdHMsIGNvbnRhaW5lciwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgc2lkZSwgc2lkZTIsIGQsIGJveCwgaW50ZXJzZWN0LCBqO1xuXHRcdHZhciBjaGFubmVsLCBjaGFubmVsMiwgcHQsIGRpcjtcblxuXHRcdHZhciBzdGFydFBhZGRpbmcgPSAwLCBlbmRQYWRkaW5nO1xuXHRcdC8vIGZpcnN0IGdldCB0aGUgc3RhcnQgYW5kIGVuZCBjaGFubmVsXG5cdFx0Ym94ID0gYm94ZXNbZW5kQm94XTtcblx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMl07XG5cdFx0aWYgKHB0LnkgPCBib3gueSlcblx0XHRcdHNpZGUgPSAxO1xuXHRcdGVsc2UgaWYgKHB0LnkgPiBib3gueSArIGJveC5oZWlnaHQpXG5cdFx0XHRzaWRlID0gMztcblx0XHRlbHNlIGlmIChwdC54IDwgYm94LngpXG5cdFx0XHRzaWRlID0gMDtcblx0XHRlbHNlXG5cdFx0XHRzaWRlID0gMjtcblx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBlbmRCb3gsIGJveGVzLCBzaWRlKTtcblx0XHRlbmRQYWRkaW5nID0gY2hhbm5lbC5ob3Jpem9udGFsID8gKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQpLzIgOiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCkvMjtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0aWYgKHB0c1tpKzFdLnggPT0gcHRzW2ldLnggJiYgcHRzW2krMV0ueSA9PSBwdHNbaV0ueSkgY29udGludWU7XG5cdFx0XHRpbnRlcnNlY3QgPSBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0XHRpZiAoIWludGVyc2VjdCkgY29udGludWU7XG5cdFx0XHRqID0gaW50ZXJzZWN0WzBdO1xuXHRcdFx0c2lkZSA9IGludGVyc2VjdFsxXTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUpO1xuXHRcdFx0c3dpdGNoKHNpZGUpIHtcblx0XHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRjYXNlIDI6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQoKGNoYW5uZWwucmlnaHQgKyBjaGFubmVsLmxlZnQpLzIsIHB0c1tpXS55KTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDEgOiAzO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueSA9PSBwdHNbaS0xXS55KSAmJiAocHRzW2ktMV0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaS0xXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnkgPT0gcHRzW2krM10ueSkgJiYgKHB0c1tpKzJdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2krMl0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5ib3R0b20gKyBjaGFubmVsMi50b3ApLzIgLSBwdC55O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMCAmJiBwdC54IDw9IHB0c1tpXS54KSB8fCAoc2lkZSA9PSAyICYmIHB0LnggPj0gcHRzW2ldLngpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55ICsgZCksIG5ldyBQb2ludChwdC54LCBwdC55ICsgZCldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRjYXNlIDM6XG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQocHRzW2ldLngsIChjaGFubmVsLmJvdHRvbSArIGNoYW5uZWwudG9wKS8yKTtcblx0XHRcdFx0XHRkaXIgPSBfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIHB0LCBib3gsIHNpZGUpO1xuXHRcdFx0XHRcdHNpZGUyID0gZGlyIDwgMCA/IDAgOiAyO1xuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xuXHRcdFx0XHRcdC8vIGlmIHRoZSBwcmV2aW91cyBwb2ludCBpcyBpbiB0aGUgY2hhbm5lbDIsIHVzZSB0aGF0IHBvaW50IGluc3RlYWQgb2YgY2VudGVyIG9mIHRoZSBjaGFubmVsLlxuXHRcdFx0XHRcdGlmIChpID4gMSAmJiAocHRzW2ktMl0ueCA9PSBwdHNbaS0xXS54KSAmJiAocHRzW2ktMV0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2ktMV0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlIGlmIChpIDwgcHRzLmxlbmd0aCAtIDMgJiYgKHB0c1tpKzJdLnggPT0gcHRzW2krM10ueCkgJiYgKHB0c1tpKzJdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpKzJdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2krMl0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0ZCA9IChjaGFubmVsMi5yaWdodCArIGNoYW5uZWwyLmxlZnQpLzIgLSBwdC54O1xuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHdlIG5lZWQgdGhpcyBwdC5cblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMSAmJiBwdC55IDw9IHB0c1tpXS55KSB8fCAoc2lkZSA9PSAzICYmIHB0LnkgPj0gcHRzW2ldLnkpKVxuXHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPiAwKSB7XG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXG5cdFx0XHRcdFx0XHRpZiAoIV9oYXNJbnRlcnNlY3Rpb24oXG5cdFx0XHRcdFx0XHRcdFx0W25ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHRzW2ldLnggKyBkLCBwdHNbaV0ueSksIG5ldyBQb2ludChwdC54ICsgZCwgcHQueSldLFxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcblx0XHRcdFx0XHRcdFx0cHQgPSBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSA0OlxuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXHRcdFx0Ly8gbWF4IHBvaW50cy5cblx0XHRcdGlmIChpID4gMjApIHJldHVybjtcblx0XHRcdGlmIChwdCAmJiAocHQueCAhPSBwdHNbaV0ueCB8fCBwdC55ICE9IHB0c1tpXS55KSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkrMSwgMCwgcHQpO1xuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdH1cblx0fVxuXG5cdHN0YXRpYyBfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRzdGF0aWMgX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcblx0XHR2YXIgYm94LCBzaWRlLCBzYXZlZEluZGV4ID0gbnVsbCwgc2F2ZWRTaWRlID0gbnVsbDtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKGkgPT0gMCAmJiBqID09IHN0YXJ0Qm94KSB8fCAoaSA9PSBwdHMubGVuZ3RoIC0gMiAmJiBqID09IGVuZEJveCkpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRzaWRlID0gYm94LmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKTtcblx0XHRcdGlmIChzaWRlID49IDApIHtcblx0XHRcdFx0aWYgKHNhdmVkSW5kZXggPT0gbnVsbCkge1xuXHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0aWYgKGJveGVzW3NhdmVkSW5kZXhdLmRpc3RhbmNlKHB0c1tpXSkgPiBib3guZGlzdGFuY2UocHRzW2ldKSkge1xuXHRcdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoc2F2ZWRJbmRleCAhPSBudWxsKVxuXHRcdFx0cmV0dXJuIFtzYXZlZEluZGV4LCBzYXZlZFNpZGVdO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0X2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBicmVha1B0LCBib3gsIHNpZGUpIHtcblx0XHR2YXIgZGlyO1xuXHRcdHZhciBwO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwID0gXCJ5XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwID0gXCJ4XCI7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHQvL2ZpcnN0IHRyeSB0aGUgYnJlYWtwdC5cblx0XHRkaXIgPSBfZ2V0Um91dGVEaXJlY3Rpb24oYnJlYWtQdCwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRkaXIgPSAtX2dldFJvdXRlRGlyZWN0aW9uKHB0c1swXSwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XG5cdFx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdFx0aWYgKGJyZWFrUHRbcF0gPCBib3guZ2V0Q2VudGVyKClbcF0pXG5cdFx0XHRcdFx0ZGlyID0gLTE7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkaXIgPSAxO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gZGlyO1xuXHR9XG5cblx0c3RhdGljIF9nZXRSb3V0ZURpcmVjdGlvbihwdDEsIHB0Mikge1xuXHRcdGlmIChwdDEueCA9PSBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk47XG5cdFx0fSBlbHNlIGlmIChwdDEueSA9PSBwdDIueSkge1xuXHRcdFx0aWYgKHB0MS54IDwgcHQyLngpIHJldHVybiBQb2ludC5FO1xuXHRcdFx0cmV0dXJuIFBvaW50Llc7XG5cdFx0fSBlbHNlIGlmIChwdDEueCA8IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNFO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5FO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNXO1xuXHRcdFx0cmV0dXJuIFBvaW50Lk5XO1xuXHRcdH1cblx0fVxuXG5cdF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaW5kZXgsIGJveGVzLCBzaWRlKSB7XG5cdFx0dmFyIG1heENoYW5uZWxXaWR0aCA9IHRoaXMubWF4Q2hhbm5lbFdpZHRoO1xuXHRcdHZhciBib3gxID0gYm94ZXNbaW5kZXhdLCBib3gyO1xuXHRcdHZhciBwdCwgaTtcblx0XHR2YXIgY2hhbm5lbCA9IHt9LCBsLCB0LCBiLCByO1xuXHRcdHN3aXRjaCAoc2lkZSkge1xuXHRcdFx0Y2FzZSAwOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0TGVmdCgpO1xuXHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gcHQueDtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRyID0gYm94ZXNbaV0uZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyID49IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gY2hhbm5lbC5yaWdodCAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdFx0cHQgPSBib3gxLmdldFRvcCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRiID0gYm94ZXNbaV0uZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoYiA+PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY2hhbm5lbC5ib3R0b20gLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblxuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cHQgPSBib3gxLmdldFJpZ2h0KCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRjaGFubmVsLmxlZnQgPSBwdC54O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0bCA9IGJveGVzW2ldLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdGlmIChsIDw9IHB0LngpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkge1xuXHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNoYW5uZWwubGVmdCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0dCA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gdClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cHQgPSBib3gxLmdldEJvdHRvbSgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSB0cnVlO1xuXHRcdFx0XHRjaGFubmVsLnRvcCA9IHB0Lnk7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0aWYgKGJveDIuZ2V0VG9wKCkueSA8PSBwdC55KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tIHx8IGNoYW5uZWwuYm90dG9tID4gYm94Mi5nZXRUb3AoKS55KVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkge1xuXHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNoYW5uZWwudG9wICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRyZXR1cm4gY2hhbm5lbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBNb3ZlIGEgbGluZSBzZWdtZW50IGJ5IGEgc3BlY2lmaWVkIGRpc3RhbmNlLlxuXHQgKlxuXHQgKiBAcGFyYW0gcHRzIHRoZSBsaXN0IG9mIHBvaW50cy5cblx0ICogQHBhcmFtIGkgdGhlIGluZGV4IG9mIHRoZSBzZWdtZW50LlxuXHQgKiBAcGFyYW0gZCB0aGUgZGlzdGFuY2UgdG8gbW92ZS5cblx0ICogQHBhcmFtIHN0YXJ0UGFkZGluZ1xuXHQgKiBAcGFyYW0gZW5kUGFkZGluZ1xuXHQgKi9cblx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKSB7XG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgd2UgbmVlZCB0byBhZGQgbmV3IGxpbmUgc2VnbWVudHMuXG5cdFx0dmFyIGRpciwgbCwgcHQ7XG5cdFx0aWYgKGkgPT0gMCkge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgc3RhcnRpbmcgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbMF0uZ2V0RGlyZWN0aW9uKHB0c1sxXSk7XG5cdFx0XHRpZiAoIXN0YXJ0UGFkZGluZylcblx0XHRcdFx0c3RhcnRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKHN0YXJ0UGFkZGluZywgcHRzWzBdLmRpc3RhbmNlKHB0c1sxXSkvMik7XG5cdFx0XHRwdCA9IHB0c1swXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKDEsIDAsIHB0KTtcblx0XHRcdHRoaXMuX21vdmVTZWdtZW50KHB0cywgaSsxLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGkgPT0gcHRzLmxlbmd0aCAtIDIpIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cblx0XHRcdGRpciA9IHB0c1twdHMubGVuZ3RoLTFdLmdldERpcmVjdGlvbihwdHNbcHRzLmxlbmd0aC0yXSk7XG5cdFx0XHRpZiAoIWVuZFBhZGRpbmcpXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oZW5kUGFkZGluZywgcHRzW3B0cy5sZW5ndGgtMV0uZGlzdGFuY2UocHRzW3B0cy5sZW5ndGgtMl0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDFdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcblx0XHRcdHRoaXMuX21vdmVTZWdtZW50KHB0cywgaSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKHB0c1tpXS55ID09IHB0c1tpKzFdLnkpIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnkgPT0gcHRzW2ldLnkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueSArPSBkO1xuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS54ID09IHB0c1tpXS54KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnggKz0gZDtcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogVGhpcyBtZXRob2Qgd2lsbCBtZXJnZSB0aGUgcmVkdW5kYW50IHNlZ21lbnRzLlxuXHQgKi9cblx0c3RhdGljIF9tZXJnZVNlZ21lbnRzKHB0cykge1xuXHRcdHZhciBoMSA9IHB0c1twdHMubGVuZ3RoLTFdLnkgPT0gcHRzW3B0cy5sZW5ndGgtMl0ueTtcblx0XHR2YXIgaDI7XG5cdFx0Zm9yICh2YXIgaSA9IHB0cy5sZW5ndGggLSAyOyBpID49IDE7IGktLSkge1xuXHRcdFx0aDIgPSBwdHNbaV0ueSA9PSBwdHNbaS0xXS55O1xuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGgxID0gIWgxO1xuXHRcdH1cblx0fVxufVxuXG5saW5rVHlwZXNbJ2RpcmVjdCddID0gRGlyZWN0TGluaztcbmxpbmtUeXBlc1snYmV6aWVyJ10gPSBCZXppZXJMaW5rO1xubGlua1R5cGVzWydlbnRpdHlSZWxhdGlvbnMnXSA9IEVudGl0eVJlbGF0aW9ucztcbmxpbmtUeXBlc1snbWFuaGF0dGFuJ10gPSBNYW5oYXR0YW47XG5cbmV4cG9ydCBkZWZhdWx0IExpbms7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5rLmpzXG4gKiovIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlYW4vYmVhbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcblxyXG5jb25zdCBERUZBVUxUUyA9IHtcclxuXHRzdG9wUHJvcGFnYXRpb246IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xyXG5cdC8qKlxyXG5cdCAqIENvbnN0cnVjdG9yXHJcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxyXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcclxuXHQgKiBAcGFyYW0gY29uZmlnIHRoZSBjb25maWd1cmF0b24gZm9yIHRoZSBldmVudCBkaXNwYXRjaGVyLlxyXG5cdCAqL1xyXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XHJcblx0XHR0aGlzLnJvb3QgPSByb290O1xyXG5cdFx0dGhpcy5yb290TlMgPSByb290LmdldEF0dHJpYnV0ZSgnbnMnKSB8fCAncm9vdCc7XHJcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcclxuXHRcdF8uYXNzaWduKHRoaXMsIERFRkFVTFRTLCBjb25maWcpO1xyXG5cdFx0dGhpcy5zY2FsZSA9IDEuMDtcclxuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XHJcblx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblx0XHR0aGlzLmhhbmRsZXIgPSBfLmJpbmQodGhpcy5oYW5kbGVFdmVudCwgdGhpcyk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHJcblx0XHQvLyBTaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzXHJcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFN0YXJ0IGxpc3RlbmluZyBmb3IgZXZlbnRzLlxyXG5cdCAqL1xyXG5cdHN0YXJ0KCkge1xyXG5cdFx0aWYgKHRoaXMuc3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0RXZlbnRzLm9uKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xyXG5cdFx0dGhpcy5zdGFydEtleXMoKTtcclxuXHRcdHRoaXMuc3RhcnRlZCA9IHRydWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzLlxyXG5cdCAqL1xyXG5cdHN0b3AoKSB7XHJcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcclxuXHRcdHRoaXMuc3RvcEtleXMoKTtcclxuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xyXG5cdH1cclxuXHJcblx0c3RhcnRLZXlzKCkge1xyXG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHRzdG9wS2V5cygpIHtcclxuXHRcdEV2ZW50cy5vZmYoZG9jdW1lbnQsICdrZXlkb3duIGtleXVwJywgdGhpcy5oYW5kbGVyKTtcclxuXHR9XHJcblxyXG5cdHpvb21JbigpIHtcclxuXHRcdHRoaXMuc2NhbGUgKj0gMS4yNTtcclxuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcclxuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xyXG5cdH1cclxuXHJcblx0em9vbU91dCgpIHtcclxuXHRcdHRoaXMuc2NhbGUgKj0gMC44O1xyXG5cdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xyXG5cdFx0cmV0dXJuIHRoaXMuc2NhbGU7XHJcblx0fVxyXG5cclxuXHRnZXRFdmVudEluZm8oZXZlbnQpIHtcclxuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBucywgc3RhY2sgPSBbXSwgaXNSb290ID0gZmFsc2U7XHJcblx0XHR3aGlsZSAoIWlzUm9vdCAmJiB0YXJnZXQgJiYgdGFyZ2V0ICE9IGRvY3VtZW50KSB7XHJcblx0XHRcdG5zID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbnMnKTtcclxuXHRcdFx0aWYgKG5zKSB7XHJcblx0XHRcdFx0aXNSb290ID0gXy5zdGFydHNXaXRoKG5zLCBcInJvb3QuXCIpO1xyXG5cdFx0XHRcdGlmIChpc1Jvb3QpIHtcclxuXHRcdFx0XHRcdG5zID0gbnMuc3Vic3RyaW5nKDUpO1xyXG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IHRhcmdldDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFldmVudC5uc1RhcmdldCkgZXZlbnQubnNUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHRcdFx0c3RhY2suc3BsaWNlKDAsIDAsIHRhcmdldCk7XHJcblx0XHRcdFx0YnVmLnByZXBlbmQobnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFpc1Jvb3QpXHJcblx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBldmVudC5uc1RhcmdldDtcclxuXHJcblx0XHQvLyB0YXJnZXQgc3RhY2sgaXMgYSBzdGFjayBvZiBhbGwgdGhlIG5zIHRhcmdldHMgdXAgdG8gdGhlIG9uZSB3aXRoIHRoZSBkYXRhIGJpbmRpbmcuXHJcblx0XHRldmVudC50YXJnZXRTdGFjayA9IHN0YWNrO1xyXG5cdFx0bnMgPSBidWYudG9TdHJpbmcoJy4nKTtcclxuXHRcdGlmIChucyA9PSAnJykgbnMgPSB0aGlzLnJvb3ROUztcclxuXHRcdHJldHVybiB7ZGF0YTogZXZlbnQucm9vdFRhcmdldCwgbnM6IG5zfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoZSBtYWluIGV2ZW50IGhhbmRsZXIgbWV0aG9kLCBpdCBwcm9jZXNzZXMgZXZlbnQgYW5kIGdlbmVyYXRlIHJlbGV2YW50IGV2ZW50cyB0byBkaXNwYXRjaC5cclxuXHQgKi9cclxuXHRoYW5kbGVFdmVudChldmVudCkge1xyXG5cdFx0bGV0IHR5cGUgPSBldmVudC50eXBlO1xyXG5cclxuXHRcdC8vIERvIG5vdCBkaXNwYXRjaCBvdGhlciBldmVudHMgaWYgd2UgYXJlIGRyYWdnaW5nLlxyXG5cdFx0aWYgKHRoaXMuZHJhZ2dpbmcgfHwgRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSByZXR1cm47XHJcblxyXG5cdFx0bGV0IGRhdGEsIG5zLCBwb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KSwgaW5mbywgaXNLZXlFdmVudCA9ICh0eXBlID09ICdrZXlkb3duJyB8fCB0eXBlID09J2tleXVwJyk7XHJcblx0XHRpZiAoaXNLZXlFdmVudCkge1xyXG5cdFx0XHRkYXRhID0gdGhpcy5yb290O1xyXG5cdFx0XHRucyA9IEtleVV0aWxzLmdldEtleUV2ZW50KGV2ZW50KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XHJcblx0XHRcdGlmICghaW5mbykgcmV0dXJuO1xyXG5cdFx0XHRkYXRhID0gaW5mby5kYXRhO1xyXG5cdFx0XHRucyA9IGluZm8ubnM7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly9VdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiaGFuZGxlRXZlbnQgLSBcIiArIHR5cGUgKyAnO25zPScgKyBucyk7XHJcblxyXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNld2hlZWwnKSB7XHJcblx0XHRcdHRoaXMuc2NhbGUgKj0gTWF0aC5wb3coMiwgZXZlbnQud2hlZWxEZWx0YSAqIDAuMDAyKTtcclxuXHRcdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xyXG5cdFx0XHRldmVudC5zY2FsZSA9IHRoaXMuc2NhbGU7XHJcblx0XHRcdHR5cGUgPSAnem9vbSc7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gU2VlIGlmIHdlIHNob3VsZCBjcmVhdGUgZHJhZyBldmVudHNcclxuXHRcdGlmICh0eXBlID09ICdtb3VzZWRvd24nICYmIGV2ZW50LmJ1dHRvbiA9PSAwIC8qb25seSBkcmFnIG9uIGxlZnQgY2xpY2sqLykge1xyXG5cdFx0XHQvLyBDcmVhdGUgZHJhZyBvYmplY3QuXHJcblx0XHRcdGNvbnN0IGRyYWdPYmplY3QgPSB7ZGF0YTogZGF0YSwgcG9zOiBucyA9PSAncm9vdCcgPyBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCkgOiBwb3N9O1xyXG5cdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbW91c2UgbW92ZS5cclxuXHRcdFx0bGV0IGRyYWdQb3M7XHJcblxyXG5cdFx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xyXG5cdFx0XHRcdGlmICghdGhpcy5kcmFnZ2luZykge1xyXG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIG1vdXNlIGhhcyBtb3ZlZC4gSUUgYWx3YXlzIGZpcmUgbW91c2Vtb3ZlIGFmdGVyIG1vdXNlZG93biBldmVuIGlmIHRoZSBtb3VzZSBoYXNuJ3QgbW92ZWQgeWV0LlxyXG5cdFx0XHRcdFx0aWYgKGRyYWdPYmplY3QucG9zWzBdID09IGN1cnJlbnRQb3NbMF0gJiYgZHJhZ09iamVjdC5wb3NbMV0gPT0gY3VycmVudFBvc1sxXSkgcmV0dXJuO1xyXG5cclxuXHRcdFx0XHRcdC8vIHN0YXJ0IGRyYWdnaW5nXHJcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcclxuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSBkcmFnT2JqZWN0LmRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ3N0YXJ0JywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ09iamVjdC5wb3MpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAobnMgPT0gXCJyb290XCIpXHJcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGRyYWdQb3MgPSBjdXJyZW50UG9zO1xyXG5cdFx0XHRcdHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZycsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRkcmFnUG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XHJcblxyXG5cdFx0XHRcdGxldCBpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xyXG5cdFx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ2VuZCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2V1cCcsIG5zLCBpbmZvLmRhdGEsIGRyYWdQb3MpO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xyXG5cdFx0XHR9O1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIWlzS2V5RXZlbnQpXHJcblx0XHRcdHRoaXMuc2ltdWxhdGVFbnRlckxlYXZlKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcclxuXHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xyXG5cclxuXHRcdC8vIGRpc2FibGUgdGhlIGRlZmF1bHQgY29udGV4dCBtZW51XHJcblx0XHQvL2lmICh0eXBlID09ICdjb250ZXh0bWVudScpXHJcblx0XHQvL1x0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHRyeSB0byBzaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzLlxyXG5cdCAqL1xyXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xyXG5cdFx0bGV0IGxhc3QsIHN0YWNrO1xyXG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcclxuXHRcdFx0ayA9IGsgfHwgMDtcclxuXHRcdFx0Ly8gQ2xlYXIgb2ZmIHRoZSBlbnRlciBzdGFjay5cclxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcclxuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xyXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWxlYXZlJywgbGFzdC5ucywgbGFzdC5kYXRhLCBwb3MpO1xyXG5cdFx0XHR9XHJcblx0XHR9O1xyXG5cdFx0Y29uc3QgZ2V0TlMgPSBmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XHJcblx0XHRcdFx0dmFyIHZhbCA9IHN0YWNrW2ldLmdldEF0dHJpYnV0ZShcIm5zXCIpO1xyXG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxyXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcclxuXHRcdFx0XHRidWYuYXBwZW5kKHZhbCk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcclxuXHRcdFx0aWYgKHR5cGUgPT0gJ21vdXNlb3ZlcicpIHtcclxuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xyXG5cdFx0XHRcdGxldCBpdGVtO1xyXG5cdFx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xyXG5cdFx0XHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XHJcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZWVudGVyJywgaXRlbS5ucywgZGF0YSwgcG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXHJcblx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soc3RhY2subGVuZ3RoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKG5zID09IHRoaXMucm9vdE5TICYmIHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPiAwKVxyXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcclxuXHR9XHJcblxyXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XHJcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0JylcclxuXHRcdC8vXHRVdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiZGlzcGF0Y2ggLSBcIiArIHR5cGUgKyAnLicgKyBucyArICc7JyArIHBvcyArICc7cm9vdFRhcmdldD0nICsgZXZlbnQucm9vdFRhcmdldCArICc7ZGF0YT0nICsgZGF0YSk7XHJcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xyXG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xyXG5cdFx0Xy5mb3JFYWNoKHRoaXMubGlzdGVuZXJzLCAobGlzdGVuZXJzLCBrZXkpID0+IHtcclxuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGxpc3RlbmVycy5yZWdleHAgPyBsaXN0ZW5lcnMucmVnZXhwIDoga2V5KSkge1xyXG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKCFsaXN0ZW5lci5jb250ZXh0KVxyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseShsaXN0ZW5lci5jb250ZXh0LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblxyXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXHJcblx0XHRpZiAodGhpcy5zdG9wUHJvcGFnYXRpb24gJiYgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKVxyXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9XHJcblxyXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XHJcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XHJcblx0XHRpZighIF8uaXNOYU4ocG9zWzBdKSAmJiAhIF8uaXNOYU4ocG9zWzFdKSlcclxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XHJcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYSBrZXkgZXZlbnQgaGFuZGxlclxyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XHJcblx0ICovXHJcblx0cmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xyXG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XHJcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XHJcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xyXG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xyXG5cclxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XHJcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldIHx8ICh0aGlzLmxpc3RlbmVyc1trZXldID0gW10pO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xyXG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XHJcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XHJcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcclxuXHRcdGlmKCFrZXkubGVuZ3RoKSByZXR1cm47XHJcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XHJcblxyXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW2tleV0sIGxpc3RlbmVyO1xyXG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xyXG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZWdpc3RlcnMgYW4gZXZlbnQgaGFuZGxlclxyXG5cdCAqL1xyXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkodHlwZSkpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dCwgekluZGV4OiB6SW5kZXh9O1xyXG5cdFx0dmFyIHJlZ2V4cCA9IG51bGw7XHJcblx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xyXG5cdFx0XHRyZWdleHAgPSB0eXBlO1xyXG5cdFx0XHR0eXBlID0gdHlwZSArICcnO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0gfHwgKHRoaXMubGlzdGVuZXJzW3R5cGVdID0gW10pO1xyXG5cdFx0aWYgKHJlZ2V4cCAmJiAhdGhpcy5saXN0ZW5lcnNbdHlwZV0ucmVnZXhwKVxyXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5yZWdleHAgPSByZWdleHA7XHJcblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5wdXNoKGxpc3RlbmVyKTtcclxuXHR9XHJcblxyXG5cdHVucmVnaXN0ZXIodHlwZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuXHRcdGlmICh0eXBlIGluc3RhbmNlb2YgUmVnRXhwKVxyXG5cdFx0XHR0eXBlID0gdHlwZSArICcnO1xyXG5cdFx0bGV0IGxpc3RlbmVycyA9IHRoaXMubGlzdGVuZXJzW3R5cGVdLCBsaXN0ZW5lcjtcclxuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0ZGVsZXRlIHRoaXMucm9vdDtcclxuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcclxuXHRcdGRlbGV0ZSB0aGlzLmVudGVyU3RhY2s7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayBpZiB0aGUgcmVnaXN0ZXJlZCBldmVudCB0eXBlIG1hdGNoZXMgdGhlIHJlYWwgZXZlbnQgdHlwZS4gXCIqXCIgaXMgYWxsb3dlZCBhcyBhIHdpbGQgY2FyZC5cclxuXHQgKi9cclxuXHRzdGF0aWMgbWF0Y2gobnNUeXBlLCByZWdpc3RlcmVkVHlwZSkge1xyXG5cdFx0aWYgKHJlZ2lzdGVyZWRUeXBlIGluc3RhbmNlb2YgUmVnRXhwKVxyXG5cdFx0XHRyZXR1cm4gbnNUeXBlLm1hdGNoKHJlZ2lzdGVyZWRUeXBlKTtcclxuXHJcblx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xyXG5cdFx0Lypjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xyXG5cdFx0aWYgKGFyci5sZW5ndGggPT0gMSlcclxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcclxuXHJcblx0XHRsZXQgc3Vic3RyLCBpbmRleCA9IDA7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcclxuXHRcdFx0c3Vic3RyID0gbnNUeXBlLnNsaWNlKGluZGV4KTtcclxuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xyXG5cdFx0XHRpZiAoaW5kZXggPCAwKVxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlOyovXHJcblx0fVxyXG5cclxuXHRzdGF0aWMgbW91c2UoY29udGFpbmVyLCBlKSB7XHJcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XHJcblx0XHR2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XHJcblx0XHRpZiAoc3ZnLmNyZWF0ZVNWR1BvaW50KSB7XHJcblx0XHRcdHZhciBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xyXG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xyXG5cdFx0XHRwb2ludCA9IHBvaW50Lm1hdHJpeFRyYW5zZm9ybShjb250YWluZXIuZ2V0U2NyZWVuQ1RNKCkuaW52ZXJzZSgpKTtcclxuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcclxuXHRcdH1cclxuXHRcdHZhciByZWN0ID0gY29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzXG4gKiovIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vICAgICAgICAgICBUaGUgS2V5IFV0aWxpdHkgQ0xhc3MgZm9yIHRoZSBFdmVudCBEaXNwYXRjaGVyICAgICAgICAgIFx0ICAgICAvL1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXHJcbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBLRVkgY29uc3RhbnRcclxuICovXHJcbmNvbnN0IEtFWSA9IHtcclxuXHRBTFQgICAgICAgICAgOiAxOCxcclxuXHRCQUNLX1NQQUNFICAgOiA4LFxyXG5cdENBUFNfTE9DSyAgICA6IDIwLFxyXG5cdENPTlRST0wgICAgICA6IDE3LFxyXG5cdERFTEVURSAgICAgICA6IDQ2LFxyXG5cdERPV04gICAgICAgICA6IDQwLFxyXG5cdEVORCAgICAgICAgICA6IDM1LFxyXG5cdEVOVEVSICAgICAgICA6IDEzLFxyXG5cdEVTQ0FQRSAgICAgICA6IDIyMCxcclxuXHRIT01FICAgICAgICAgOiAzNixcclxuXHRMRUZUICAgICAgICAgOiAzNyxcclxuXHRNRVRBICAgICAgICAgOiAyMjQsXHJcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxyXG5cdFBBR0VfRE9XTiAgICA6IDM0LFxyXG5cdFBBR0VfVVAgICAgICA6IDMzLFxyXG5cdFBBVVNFICAgICAgICA6IDE5LFxyXG5cdFBSSU5UU0NSRUVOICA6IDQ0LFxyXG5cdFJJR0hUICAgICAgICA6IDM5LFxyXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcclxuXHRTSElGVCAgICAgICAgOiAxNixcclxuXHRTUEFDRSAgICAgICAgOiAzMixcclxuXHRUQUIgICAgICAgICAgOiA5LFxyXG5cdFVQICAgICAgICAgICA6IDM4XHJcblx0Ly9BREQgICAgICAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyA2MSAgOiAxODcsXHJcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xyXG5cdGlmICghZXZlbnQgfHwgIWV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHR2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcclxuXHJcblx0Ly8gTmVlZCB0byBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXNcclxuXHRpZiAoa2V5ID49IDE2ICYmIGtleSA8PSAxOCkge1xyXG5cdFx0a2V5ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xyXG5cdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblxyXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcclxuXHRpZiAoYWx0KSBidWYuYXBwZW5kKFwiQUxUXCIpO1xyXG5cdGlmIChzaGlmdCkgYnVmLmFwcGVuZChcIlNISUZUXCIpO1xyXG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcclxuXHRpZiAoa2V5KSBidWYuYXBwZW5kKGtleSk7XHJcblxyXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0tleVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xyXG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9FZGdlXCI7XHJcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4uL3ZpZXcvTWFya2VyXCI7XHJcblxyXG5jb25zdCBub2RlRGVmYXVsdHMgPSB7XHJcblx0bmFtZTogJ0RlZmF1bHQnLFxyXG5cdHJvbGU6ICdub2RlJyxcclxuXHRkcmFnZ2FibGU6IHRydWUsXHJcblx0c2VsZWN0YWJsZTogdHJ1ZSxcclxuXHRlZGl0YWJsZTogdHJ1ZSxcclxuXHRyZXNpemFibGU6IGZhbHNlLFxyXG5cdHNvdXJjZWFibGU6IHRydWUsXHJcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcclxuXHR2aXNpYmxlOiB0cnVlXHJcbn07XHJcblxyXG5jb25zdCBlZGdlRGVmYXVsdHMgPSB7XHJcblx0bmFtZTogJ0RlZmF1bHQnLFxyXG5cdHJvbGU6ICdlZGdlJyxcclxuXHRzZWxlY3RhYmxlOiB0cnVlLFxyXG5cdHZpc2libGU6IHRydWUsXHJcblx0c3RhcnRNYXJrZXI6IG51bGwsXHJcblx0ZW5kTWFya2VyOiB7XHJcblx0XHRpZDogJ0RlZmF1bHRfRW5kTWFya2VyJyxcclxuXHRcdHR5cGU6ICdhcnJvdycsXHJcblx0XHRzaXplOiAxMCxcclxuXHRcdGNvbG9yOiAnIzBlYTExNydcclxuXHR9LFxyXG5cdC8qIHN0YXJ0IGFuZCBlbmQgaXMgb25seSB1c2VkIGlmIHRoZSBlZGdlIGlzIG5vdCBjb25uZWN0ZWQgdG8gYSBub2RlICovXHJcblx0c3RhcnQ6IFswLCAwXSxcclxuXHRlbmQ6IFs0MDAsIDIwMF1cclxufTtcclxuXHJcbmNsYXNzIEdyYXBoIHtcclxuXHRjb25zdHJ1Y3RvcihpZCA9IF8udW5pcXVlSWQoXCJHXCIpLCBjb25maWcgPSB7fSwgbW9kZWwpIHtcclxuXHRcdHRoaXMuaWQgPSBpZDtcclxuXHJcblx0XHR0aGlzLm5vZGVzID0ge307XHJcblx0XHR0aGlzLmVkZ2VzID0ge307XHJcblxyXG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBudWxsO1xyXG5cdFx0dGhpcy5kZXN0cm95ZWQgPSBmYWxzZTtcclxuXHJcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5ub2RlVHlwZXMsIFwiTm9kZXNcIiwgbm9kZURlZmF1bHRzKTtcclxuXHRcdFV0aWxzLmJ1aWxkVHlwZXMoY29uZmlnLmVkZ2VUeXBlcywgXCJFZGdlc1wiLCBlZGdlRGVmYXVsdHMpO1xyXG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXHJcblx0XHR0aGlzLm1hcmtlcnMgPSBbXTtcclxuXHRcdGxldCBlZGdlVHlwZXMgPSBVdGlscy50eXBlKEVkZ2UubmFtZXNwYWNlKSwgbWFya2VyLCBtYXJrZXJDb25maWc7XHJcblx0XHRlZGdlVHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XHJcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGUucHJvdG90eXBlLnN0YXJ0TWFya2VyO1xyXG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XHJcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xyXG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XHJcblx0XHRcdH1cclxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZS5wcm90b3R5cGUuZW5kTWFya2VyO1xyXG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XHJcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIGZhbHNlKTtcclxuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHRkZWxldGUgY29uZmlnLm5vZGVUeXBlcztcclxuXHRcdGRlbGV0ZSBjb25maWcuZWRnZVR5cGVzO1xyXG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xyXG5cdFx0dGhpcy5yb290ID0gbnVsbDtcclxuXHRcdGlmIChtb2RlbClcclxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcclxuXHRcdHZhciBqc0NsYXNzID0gbnVsbDtcclxuXHRcdGlmIChjb25maWcgJiYgY29uZmlnLnR5cGUpIHtcclxuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxyXG5cdFx0XHR2YXIgdHlwZSA9IFV0aWxzLnR5cGUoZGVmYXVsdENsYXNzLm5hbWVzcGFjZSwgY29uZmlnLnR5cGUpO1xyXG5cdFx0XHRpZiAodHlwZSlcclxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgbmV3IE5vZGVcclxuXHQgKi9cclxuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCwgcG9zKSB7XHJcblx0XHRsZXQgTm9kZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIE5vZGUpO1xyXG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XHJcblxyXG5cdFx0aWYgKHBhcmVudClcclxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHRoaXMucm9vdCA9IG5vZGU7XHJcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcclxuXHRcdHJldHVybiBub2RlO1xyXG5cdH1cclxuXHJcblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIGZyb20sIHRvKSB7XHJcblx0XHRsZXQgRWRnZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIEVkZ2UpO1xyXG5cdFx0bGV0IGVkZ2UgPSBuZXcgRWRnZUNsYXNzKHRoaXMsIGNvbmZpZywgZnJvbSwgdG8pO1xyXG5cclxuXHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgZWRnZSk7XHJcblx0XHR0aGlzLmVkZ2VzW2VkZ2UuaWRdID0gZWRnZTtcclxuXHRcdHJldHVybiBlZGdlO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcclxuXHRcdGlmICghcGFyZW50LmNoaWxkcmVuKVxyXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcclxuXHJcblx0XHRpZiAoY2hpbGQucGFyZW50ICE9IHBhcmVudCkge1xyXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XHJcblxyXG5cdFx0XHRpZiAoY2hpbGQucGFyZW50ICYmIGNoaWxkLnBhcmVudC5jaGlsZHJlbilcclxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XHJcblx0XHR9XHJcblx0XHRjaGlsZC5wYXJlbnQgPSBwYXJlbnQ7XHJcblx0fVxyXG5cclxuXHRsb2FkTW9kZWwobW9kZWwsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QpIHtcclxuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xyXG5cdFx0dmFyIGVkZ2VzID0gbW9kZWwuZWRnZXM7XHJcblx0XHRkZWxldGUgbW9kZWwubm9kZXM7XHJcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XHJcblxyXG5cdFx0dmFyIG5vZGUgPSB0aGlzLmFkZE5vZGUobW9kZWwsIHBhcmVudCk7XHJcblx0XHRpZiAobm9kZXMpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcclxuXHRcdFx0XHR0aGlzLmxvYWRNb2RlbChjaGlsZCwgbm9kZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGVkZ2VzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcclxuXHRcdFx0XHRsZXQgZnJvbSwgdG87XHJcblx0XHRcdFx0aWYgKGVkZ2UuZnJvbSlcclxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XHJcblx0XHRcdFx0aWYgKGVkZ2UudG8pXHJcblx0XHRcdFx0XHR0byA9IHRoaXMubm9kZXNbZWRnZS50b107XHJcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRnZXQgY3VycmVudFJvb3QoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5yb290O1xyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7fVxyXG5cdGRlc3Ryb3koKSB7fVxyXG59XHJcblxyXG5HcmFwaC5ERUZBVUxUUyA9IHtcclxuXHRhbGxvd0RhbmdsaW5nRWRnZXM6IHRydWUsXHJcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcclxuXHRyZWFkT25seTogZmFsc2UsXHJcblx0dmlld09ubHk6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ3JhcGgvR3JhcGguanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcclxuXHJcbmNsYXNzIE5vZGUgZXh0ZW5kcyBDZWxsIHtcclxuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge30pIHtcclxuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XHJcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcclxuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcclxuXHRcdHRoaXMucG9ydHMgPSBudWxsO1xyXG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0aXNBbmNlc3RvcihuKSB7XHJcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cclxuXHRcdHZhciBub2RlID0gbi5wYXJlbnQ7XHJcblx0XHR3aGlsZSAobm9kZSkge1xyXG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlOyB9XHJcblx0XHRcdG5vZGUgPSBub2RlLnBhcmVudDtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xyXG5cdFx0dmFyIGVkZ2VzID0gZWRnZS5zb3VyY2UgPT0gdGhpcyA/IHRoaXMub3V0RWRnZXMgOiB0aGlzLmluRWRnZXM7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XHJcblx0XHRcdFx0ZWRnZXMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvLyBBZGQgYSBuZXcgaW5jb21pbmcgZWRnZVxyXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcclxuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcclxuXHRcdFx0dGhpcy5pbkVkZ2VzLnB1c2goZWRnZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcclxuXHR9XHJcblxyXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXHJcblx0YWRkT3V0RWRnZShlZGdlLCBwb3MpIHtcclxuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXHJcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcclxuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XHJcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcclxuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRQb3J0KGtleSwgcG9ydE5hbWUgPSAnYXV0bycsIGVuZFB0LCBvcnRob2dvbmFsKSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XHJcblx0XHRpZiAocG9ydE5hbWUgPT0gJ2F1dG8nKSB7XHJcblx0XHRcdHJldHVybiBzaGFwZS5nZXRQZXJpbWV0ZXIoZW5kUHQsIG9ydGhvZ29uYWwpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcChcImxhYmVsXCIpID8gdGhpcy5wcm9wKFwibGFiZWxcIikgOiBcInVuZGVmaW5lZFwiO1xyXG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXHJcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XHJcblx0XHRyZXR1cm4gJ05vZGU6e2lkOicgKyB0aGlzLmlkICsgJztsYWJlbDonICsgbGFiZWwgKyAnO3R5cGU6JyArIHRoaXMucHJvcHMuY29uc3RydWN0b3IudHlwZU5hbWUgKyAnfSc7XHJcblx0fVxyXG59XHJcbk5vZGUubmFtZXNwYWNlID0gXCJOb2Rlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcclxuXHJcbi8qXHJcblxyXG4vKipcclxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cclxuICpcclxuVmVydGV4LnByb3RvdHlwZS5nZXREcmlsbERvd25QYXJlbnQgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XHJcbn07XHJcblxyXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XHJcblx0dmFyIG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xyXG5cdHJldHVybiAhKG1vZGUgJiBHcmFwaC5BTExPV19JTlRFUkFDVElPTlMpO1xyXG59O1xyXG5cclxuVmVydGV4LnByb3RvdHlwZS5nZXRDcnVtYlRleHQgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxyXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+JztcclxuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImxhYmVsXCIpO1xyXG59O1xyXG5cclxuVmVydGV4LnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcclxufTtcclxuXHJcbiovXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL05vZGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcclxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XHJcblxyXG4vKipcclxuICogVGhlIENlbGwgaXMgdGhlIGNvbW1vbiBwYXJlbnQgZm9yIE5vZGUgYW5kIEVkZ2UuXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcclxuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge2lkOiBfLnVuaXF1ZUlkKCl9KSB7XHJcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XHJcblx0XHR0aGlzLmlkID0gY29uZmlnLmlkO1xyXG5cdFx0ZGVsZXRlIGNvbmZpZy5pZDtcclxuXHJcblx0XHQvLyBJbml0aWFsaXplIGRlY29yYXRvcnNcclxuXHRcdGlmIChjb25maWcuZGVjb3JhdG9ycykge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLmRlY29yYXRvcnM7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBWaWV3IFByb3BlcnRpZXNcclxuXHRcdGlmIChjb25maWcudmlld3MpIHtcclxuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XHJcblx0XHRcdGRlbGV0ZSBjb25maWcudmlld3M7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0eXBlXHJcblx0XHR2YXIgdHlwZSA9IGNvbmZpZy50eXBlIHx8IFwiRGVmYXVsdFwiO1xyXG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xyXG5cdFx0aWYgKCF0eXBlKVxyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIG5vdCBmb3VuZCBcIiArIGNvbmZpZy50eXBlKTtcclxuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcclxuXHRcdHRoaXMucHJvcHMgPSBuZXcgdHlwZShjb25maWcpO1xyXG5cdH1cclxuXHJcblx0cHJvcChuYW1lLCB2YWx1ZSkge1xyXG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKVxyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcclxuXHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldC9TZXQgcHJvcGVydHkgc3RvcmVkIGJ5IHZpZXdzLlxyXG5cdCAqIEBwYXJhbSBrZXlcclxuXHQgKiBAcGFyYW0gbmFtZVxyXG5cdCAqIEBwYXJhbSB2YWx1ZVxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdHZpZXdQcm9wKGtleSA9ICdkZWZhdWx0JywgbmFtZSwgdmFsdWUpIHtcclxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xyXG5cdFx0XHRpZiAoa2V5ID09ICdkZWZhdWx0JylcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XHJcblx0XHR9XHJcblx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jykge1xyXG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKCF0aGlzLnZpZXdQcm9wc1trZXldKVxyXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcclxuXHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXSA9IHZhbHVlO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Y3JlYXRlRGVjb3JhdG9ycyhkZWNvcmF0b3JzKSB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgcHJvcGVydGllcyBuZWVkZWQgZm9yIHJlbmRlcmluZyB0aGlzIGVsZW1lbnRcclxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XHJcblx0ICovXHJcblx0Z2V0VmlldyhrZXkpIHtcclxuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcclxuXHRcdHJldHVybiBfLmFzc2lnbih7XHJcblx0XHRcdGlkOiB0aGlzLmlkLFxyXG5cdFx0XHRrZXk6IGtleSxcclxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmNvbXB1dGVkQ2xhc3NOYW1lLFxyXG5cdFx0XHRzdHlsZTogdGhpcy52aWV3UHJvcChrZXksICdzdHlsZScpLFxyXG5cdFx0XHRuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlXHJcblx0XHR9LCBzaGFwZSk7XHJcblx0fVxyXG5cclxuXHRnZXRTaGFwZShrZXkpIHtcclxuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcclxuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xyXG5cclxuXHRcdGxldCBzaGFwZUNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcclxuXHRcdGxldCBzaGFwZUNsYXNzID0gc2hhcGVDb25maWcgPyBTaGFwZS5nZXRTaGFwZShzaGFwZUNvbmZpZy5uYW1lKSA6IFNoYXBlLmdldFNoYXBlKCdSZWN0YW5nbGUnKTtcclxuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcclxuXHRcdGxldCB5ID0gdGhpcy52aWV3UHJvcChrZXksIFwieVwiKTtcclxuXHRcdGxldCB3aWR0aCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcIndpZHRoXCIpO1xyXG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcclxuXHRcdHNoYXBlID0gbmV3IHNoYXBlQ2xhc3MoeCwgeSwgd2lkdGgsIGhlaWdodCwgc2hhcGVDb25maWcpO1xyXG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XHJcblx0XHRyZXR1cm4gc2hhcGU7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIodmlldykge1xyXG5cdFx0bGV0IHRlbXBsYXRlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdmlldy5pZCk7XHJcblx0XHRpZiAoIXRlbXBsYXRlKSB7XHJcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxyXG5cdFx0XHRsZXQgcm9sZSA9IHRoaXMucHJvcCgncm9sZScpO1xyXG5cdFx0XHR0ZW1wbGF0ZSA9IHZpZXcuZ2V0VGVtcGxhdGUoJyQnICsgcm9sZSwgbnVsbCwgdGhpcyk7XHJcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcclxuXHRcdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xyXG5cdFx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB0ZW1wbGF0ZSwgdmlldy5pZCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcy5nZXRWaWV3KHZpZXcuaWQpKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlclNoYXBlKHZpZXcpIHtcclxuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUodmlldy5pZCk7XHJcblx0XHRpZiAoc2hhcGUpXHJcblx0XHRcdHJldHVybiBzaGFwZS5yZW5kZXIodmlldyk7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJMYWJlbCh2aWV3KSB7XHJcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KVxyXG5cdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdGxldCBib3ggPSB0aGlzLmdldExhYmVsQm94KHZpZXcuaWQpO1xyXG5cdFx0aWYgKGJveClcclxuXHRcdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcclxuXHRcdHJldHVybiAnJztcclxuXHR9XHJcblxyXG5cdGdldExhYmVsQm94KGtleSkge1xyXG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XHJcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xyXG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xyXG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cclxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcclxuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGJveCwga2V5KTtcclxuXHRcdHJldHVybiBib3g7XHJcblx0fVxyXG5cclxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XHJcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XHJcblx0XHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKHRoaXMucHJvcChcInJvbGVcIikpO1xyXG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xyXG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXHJcblx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XHJcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xyXG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcclxuXHRcdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXHJcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcclxuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0aGlzLl9jb21wdXRlZENsYXNzTmFtZTtcclxuXHR9XHJcblxyXG5cdGdldCBuYW1lc3BhY2UoKSB7XHJcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KSByZXR1cm4gJyc7XHJcblx0XHRyZXR1cm4gXCJyb290LlwiICsgdGhpcy5wcm9wKFwicm9sZVwiKTtcclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHRkZWxldGUgdGhpcy5ncmFwaDtcclxuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XHJcblx0XHRkZWxldGUgdGhpcy5wcm9wcztcclxuXHRcdGRlbGV0ZSB0aGlzLnZpZXdQcm9wcztcclxuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcclxuXHR9XHJcbn1cclxuXHJcbi8qXHJcblxyXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xyXG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ4XCIsIE1hdGgucm91bmQoeCkpO1xyXG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ5XCIsIE1hdGgucm91bmQoeSkpO1xyXG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwid2lkdGhcIiwgdyk7XHJcblx0dGhpcy5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBoKTtcclxuXHRkZWxldGUgdGhpcy5ib3VuZHM7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZWRpdGFibGVcIik7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jYW5TZWxlY3QgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhblNlbGVjdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInNlbGVjdGFibGVcIik7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jYW5Nb3ZlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwicmVzaXphYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuZ2V0VHlwZUZyb21TdHJpbmcgPSBmdW5jdGlvbih0eXBlU3RyKSB7XHJcblx0cmV0dXJuIHRoaXMuZ3JhcGguZ2V0VHlwZSh0eXBlU3RyKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmNyZWF0ZU1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZGlmaWVycykge1xyXG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcclxuXHR2YXIgbW9kaWZpZXJTZXR0aW5ncyA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RpZmllclNldHRpbmdzXCIpO1xyXG5cdGlmIChtb2RpZmllclNldHRpbmdzKSB7XHJcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdFx0Y29uZmlnLnR5cGUgPSB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShjb25maWcuY2xhc3NOYW1lKTtcclxuXHRcdFx0Y29uZmlnLnNldHRpbmcgPSBtb2RpZmllclNldHRpbmdzW2NvbmZpZy5jbGFzc05hbWVdO1xyXG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xyXG5cclxuXHRcdFx0dGhpcy5hZGRNb2RpZmllcihjb25maWcuY2xhc3NOYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHJcblx0XHQvLyBDaGVjayBmb3Igc2hvd0Fsd2F5cyBzZXR0aW5nc1xyXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcclxuXHRcdFx0aWYgKHNldHRpbmcuc2hvd0Fsd2F5cyAmJiAoIXRoaXMubW9kaWZpZXJzIHx8ICF0aGlzLm1vZGlmaWVyc1tuYW1lXSkpIHtcclxuXHRcdFx0XHR2YXIgY29uZmlnID0ge3R5cGU6IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKG5hbWUpLCBzZXR0aW5nOiBzZXR0aW5nfTtcclxuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XHJcblx0XHRcdFx0dGhpcy5hZGRNb2RpZmllcihuYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XHJcblx0XHRcdH1cclxuXHRcdH0sIHRoaXMpO1xyXG5cdH1cclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSwgbW9kaWZpZXIpIHtcclxuXHRpZiAoIXRoaXMubW9kaWZpZXJzKVxyXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcclxuXHJcblx0aWYgKCFtb2RpZmllci5oYXNPd25Qcm9wZXJ0eShcInNob3dIZWFkZXJcIikpXHJcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcclxuXHJcblx0Ly8gQGhhY2sgcHJlZmVyYWJseSBzZXQgaXQgaW4gY29uZmlndXJhdGlvbnMuXHJcblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcclxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSBmYWxzZTtcclxuXHJcblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmIChfLmlzVW5kZWZpbmVkKHRoaXMubW9kaWZpZXJzKSlcclxuXHRcdHRoaXMuY3JlYXRlTW9kaWZpZXJzKCk7XHJcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XHJcblx0dmFyIG1vZGlmaWVycyA9IHRoaXMuZ2V0TW9kaWZpZXJzKCk7XHJcblx0aWYgKG1vZGlmaWVycylcclxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcclxuXHRyZXR1cm4gZmFsc2U7XHJcbn07XHJcbiovXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcclxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvNy8yMDE2LlxyXG4gKi9cclxuXHJcbmxldCBjYWNoZXMgPSB7fTtcclxuXHJcbmxldCBDYWNoZSA9IHtcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XHJcblx0fSxcclxuXHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlLCBuYW1lc3BhY2UpIHtcclxuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XHJcblx0fSxcclxuXHJcblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XHJcblx0XHRyZXR1cm4ga2V5IGluIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKTtcclxuXHR9LFxyXG5cclxuXHRyZW1vdmU6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XHJcblx0XHRkZWxldGUgdGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV07XHJcblx0fSxcclxuXHJcblx0Y2xlYXI6IGZ1bmN0aW9uKG5hbWVzYXBjZSkge1xyXG5cdFx0aWYgKCFuYW1lc3BhY2UpXHJcblx0XHRcdGNhY2hlcyA9IHt9O1xyXG5cdFx0ZWxzZSBpZiAoY2FjaGVzW25hbWVzcGFjZV0pXHJcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XHJcblx0fSxcclxuXHJcblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xyXG5cdFx0aWYgKCFjYWNoZXNbbmFtZXNwYWNlXSlcclxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcclxuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcclxuXHR9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9DYWNoZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5cclxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcclxuXHJcbmxldCBkZWZhdWx0Q29uZmlnID0ge1xyXG5cdGZvbnRTaXplOiAxMSxcclxuXHRmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcblx0Zm9udFN0eWxlOiAwLFxyXG5cdGZvbnRDb2xvcjogJ2JsYWNrJyxcclxuXHRwYWRkaW5nOiAwLFxyXG5cdGxpbmVQYWRkaW5nOiAwLFxyXG5cdGFsaWduOiBcImxlZnRcIixcclxuXHR3aWR0aDogMCxcclxuXHRoZWlnaHQ6IDAsXHJcblx0cm90YXRpb246IG51bGwsXHJcblx0Z2VvbWV0cnk6IHt4OiAwLCB5OiAwLCBhbmNob3JZOiAwLCBvZmZzZXRYOiAwLCBvZmZzZXRZOiAwfVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbigpIHtcclxuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxyXG5cdCAqL1xyXG5cdGxldCBnZXRTdHJpbmdTaXplID0gXy5tZW1vaXplKGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcclxuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XHJcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcclxuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xyXG5cclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXHJcblx0XHRpZiAoIXN0cmluZ01lYXN1cmVFbCkge1xyXG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XHJcblx0XHRcdHZhciBkb2MgPSBzdHJpbmdNZWFzdXJlRWwuY29udGVudFdpbmRvdy5kb2N1bWVudDtcclxuXHRcdFx0ZG9jLm9wZW4oKTtcclxuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxyXG5cdFx0XHRcdDxkaXYgaWQ9XCJiYXNlbGluZURpdlwiIHN0eWxlPVwiaGVpZ2h0OjEwMHB4O1wiPjxzcGFuIHN0eWxlPVwibGluZS1oZWlnaHQ6MFwiPlQ8L3NwYW4+PHNwYW4gc3R5bGU9XCJoZWlnaHQ6MTAwJTtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L3NwYW4+PC9kaXY+XFxcclxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcclxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xyXG5cdFx0XHRkb2MuY2xvc2UoKTtcclxuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XHJcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XHJcblx0XHR9XHJcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcclxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xyXG5cdFx0YmFzZWxpbmVEaXYuc3R5bGUuZm9udFdlaWdodCA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFdlaWdodCA9IGJvbGQgPyAnYm9sZCcgOiAnbm9ybWFsJztcclxuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xyXG5cclxuXHRcdGxldCBzdHJ1dCA9IGJhc2VsaW5lRGl2LmZpcnN0Q2hpbGQ7XHJcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XHJcblxyXG5cdFx0cmV0dXJuIHt3aWR0aDogbWVhc3VyZURpdi5vZmZzZXRXaWR0aCwgaGVpZ2h0OiBtZWFzdXJlRGl2Lm9mZnNldEhlaWdodCwgYmFzZWxpbmU6IGJhc2VsaW5lSGVpZ2h0fTtcclxuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxyXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxyXG5cdCAqIEBwYXJhbSB7bWF4V2lkdGh9IHRoZSBtYXhpbXVtIHdpZHRoIHRoaXMgc3RyaW5nIGNhbiB0YWtlLlxyXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XHJcblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxyXG5cdCAqIEBwYXJhbSB7Ym9sZH1cclxuXHQgKi9cclxuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xyXG5cdFx0bWF4V2lkdGggPSBtYXhXaWR0aCB8fCAwO1xyXG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcclxuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xyXG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XHJcblxyXG5cdFx0bGV0IGFyciA9IFtdO1xyXG5cdFx0bGV0IHNwYWNlU2l6ZSA9IGdldFN0cmluZ1NpemUoXCImbmJzcDtcIiwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLCBzcGFjZSA9IHNwYWNlU2l6ZS53aWR0aDtcclxuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcclxuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcclxuXHJcblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcclxuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcclxuXHRcdFx0YXJyLndpZHRoID0gKCFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpID8gc3BhY2UgOiBnZXRTdHJpbmdTaXplKHN0cmluZywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xyXG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XHJcblx0XHRcdHJldHVybiBhcnI7XHJcblx0XHR9XHJcblxyXG5cdFx0dmFyIHdpZHRoID0gMDtcclxuXHRcdC8vc3BsaXQgdGhlIHRleHQgYnkgbGluZXNcclxuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XHJcblxyXG5cdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdC8vc3BsaXQgZWFjaCBsaW5lIGJ5IHdvcmRcclxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xyXG5cdFx0XHR2YXIgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xyXG5cclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcclxuXHRcdFx0XHR3b3JkV2lkdGggPSBnZXRTdHJpbmdTaXplKHdvcmQsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcclxuXHJcblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcclxuXHRcdFx0XHRcdGlmIChuZXdMaW5lKSB7XHJcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XHJcblx0XHRcdFx0XHRcdGlmIChpIDwgd29yZHMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdFx0d2lkdGggPSBNYXRoLm1heCh3aWR0aCwgY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpO1xyXG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGxpbmUgPSBcIlwiO1xyXG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcclxuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcclxuXHRcdFx0XHRcdFx0aS0tOyAvLyBtb3ZlIGJhY2sgb25lIHdvcmQuXHJcblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0bGluZSA9IG5ld0xpbmUgPyB3b3JkIDogbGluZSArIFwiIFwiICsgd29yZDtcclxuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcclxuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XHJcblx0XHRcdFx0XHRuZXdMaW5lID0gZmFsc2U7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChsaW5lICE9IFwiXCIpXHJcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcclxuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XHJcblx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0YXJyLndpZHRoID0gd2lkdGg7XHJcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xyXG5cdFx0cmV0dXJuIGFycjtcclxuXHR9LCBmdW5jdGlvbihzdHIsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgbWF4V2lkdGggKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcclxuXHJcblx0LyoqXHJcblx0ICogIEdldCB0aGUgdmlldyBpbmZvcm1hdGlvbiBmb3IgaG93IHRvIGRpc3BsYXkgdGhlIGxhYmVsLlxyXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXHJcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cclxuXHQgKiBAcGFyYW0gY29udGFpbmVySGVpZ2h0IFRoZSBoZWlnaHQgb2YgdGhlIHBhcmVudCBjb250YWluZXIuXHJcblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxyXG5cdCAqIHtcclxuXHQgKiAgICAgIGZvbnRTaXplLCBmb250RmFtaWx5LCBmb250U3R5bGUsIHBhZGRpbmcsXHJcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXHJcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXHJcblx0ICogICAgICBoZWlnaHQsXHJcblx0ICogICAgICBnZW9tZXRyeVxyXG5cdCAqIH1cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcclxuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIHt3aWR0aDogY29udGFpbmVyV2lkdGgsIGhlaWdodDogY29udGFpbmVySGVpZ2h0fSk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBnZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKSB7XHJcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xyXG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XHJcblx0XHRsZXQgZm9udFNpemUgPSBsYWJlbENvbmZpZy5mb250U2l6ZTtcclxuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcclxuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XHJcblx0XHRsZXQgYm9sZCA9IChmb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRDtcclxuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcclxuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xyXG5cdFx0bGV0IGFsaWduID0gbGFiZWxDb25maWcuYWxpZ247XHJcblxyXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcclxuXHRcdGlmIChjb250ZXh0LndpZHRoKSB7XHJcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XHJcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xyXG5cdFx0fVxyXG5cdFx0dyAtPSAyICogcGFkZGluZztcclxuXHRcdGggLT0gMiAqIHBhZGRpbmc7XHJcblx0XHR3ID0gTWF0aC5tYXgoMCwgdyk7XHJcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XHJcblxyXG5cdFx0bGV0IGdlb21ldHJ5ID0gXy5jbG9uZShsYWJlbENvbmZpZy5nZW9tZXRyeSk7XHJcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XHJcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xyXG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gd3JhcHBlZExhYmVsLmhlaWdodCArIDIgKiBwYWRkaW5nICsgKHdyYXBwZWRMYWJlbC5sZW5ndGggLSAxKSAqIGxpbmVQYWRkaW5nO1xyXG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XHJcblx0XHRzd2l0Y2ggKGFsaWduKSB7XHJcblx0XHRcdGNhc2UgXCJjZW50ZXJcIjpcclxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xyXG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XHJcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcclxuXHRcdFx0XHRkeCA9IHdyYXBwZWRMYWJlbC53aWR0aC8yO1xyXG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImxlZnRcIjpcclxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdGxldCBwb3M7XHJcblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxyXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcclxuXHJcblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XHJcblx0XHQvLyB0aGUgcGl2b3QgaXMgdGhlIGNlbnRlciBvZiByb3RhdGlvbiB3aGVuIHRoZSBsYWJlbCBoYXMgYSByb3RhdGlvbiBzcGVjaWZpZWQuXHJcblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xyXG5cclxuXHRcdC8vIHRoZSBtYXhpbXVtIGJvdW5kcyBmb3IgdGhlIGxhYmVsLCB1c2VkIHRvIHBvc2l0aW9uIGlubGluZSBlZGl0b3JcclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XHJcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XHJcblxyXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcclxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XHJcblxyXG5cdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cdFx0cmV0dXJuIHtcclxuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcclxuXHRcdFx0Ym9sZCwgdW5kZXJsaW5lOiBmb250U3R5bGUgJiBGT05UX1VOREVSTElORSwgaXRhbGljOiBmb250U3R5bGUgJiBGT05UX0lUQUxJQywgc2hhZG93OiBmb250U3R5bGUgJiBGT05UX1NIQURPVyxcclxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgLSB3cmFwcGVkTGFiZWwuYmFzZWxpbmUsIGFuY2hvciwgbGluZUhlaWdodDogd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgKyBsaW5lUGFkZGluZyxcclxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXHJcblx0XHR9O1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gcmVuZGVyKHZpZXcsIGJveCkge1xyXG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcclxuXHR9XHJcblxyXG5cdGxldCBlZGl0b3IgPSB7XHJcblx0XHRzdGFydDogZnVuY3Rpb24oa2V5LCBjb250YWluZXIsIGJveCwgcmVmRWwsIHRleHRFbCwgc2NhbGUgPSAxLjAsIHNpbmdsZUxpbmUgPSB0cnVlKSB7XHJcblx0XHRcdGlmICh0aGlzLmlucHV0KSB7XHJcblx0XHRcdFx0aWYgKHRoaXMua2V5ICE9IGtleSkge1xyXG5cdFx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XHJcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0XHR2YXIgdGFnID0gc2luZ2xlTGluZSA/ICdpbnB1dCcgOiAndGV4dGFyZWEnO1xyXG5cdFx0XHR0aGlzLmlucHV0ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCh0YWcsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KTtcclxuXHRcdFx0aWYgKHNpbmdsZUxpbmUpIHtcclxuXHRcdFx0XHRFdmVudHMub24odGhpcy5pbnB1dCwgJ2tleWRvd24ga2V5dXAnLCAoZXZlbnQpID0+IHtcclxuXHRcdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdEV2ZW50cy5vZmYodGhpcy5pbnB1dCwgJ2tleWRvd24ga2V5dXAnKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xyXG5cclxuXHRcdFx0dGhpcy5rZXkgPSBrZXk7XHJcblx0XHRcdHRoaXMuYm94ID0gYm94O1xyXG5cdFx0XHR0aGlzLnJlZkVsID0gcmVmRWw7XHJcblx0XHRcdHRoaXMudGV4dEVsID0gdGV4dEVsO1xyXG5cclxuXHRcdFx0bGV0IGxhYmVsQ29uZmlnID0gYm94LmNvbmZpZztcclxuXHRcdFx0bGV0IG1heEJvdW5kcyA9IG5ldyBSZWN0YW5nbGUoYm94Lm1heEJvdW5kcy54LCBib3gubWF4Qm91bmRzLnksIGJveC5tYXhCb3VuZHMud2lkdGggKiBzY2FsZSwgYm94Lm1heEJvdW5kcy5oZWlnaHQgKiBzY2FsZSk7XHJcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcclxuXHRcdFx0cG9zID0gW3Bvc1swXSArIG1heEJvdW5kcy5sZWZ0LCBwb3NbMV0gKyBtYXhCb3VuZHMudG9wXTtcclxuXHJcblx0XHRcdGlmICh0ZXh0RWwpXHJcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcblx0XHRcdERvbVV0aWxzLnNldEVsZW1lbnQodGhpcy5pbnB1dCwgbnVsbCwge1xyXG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcclxuXHRcdFx0XHRsZWZ0OiBwb3NbMF0gKyBcInB4XCIsXHJcblx0XHRcdFx0dG9wOiBwb3NbMV0gKyBcInB4XCIsXHJcblx0XHRcdFx0d2lkdGg6IG1heEJvdW5kcy53aWR0aCArICdweCcsXHJcblx0XHRcdFx0aGVpZ2h0OiBtYXhCb3VuZHMuaGVpZ2h0ICsgJ3B4JyxcclxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXHJcblx0XHRcdFx0XCJmb250LXNpemVcIjogKGxhYmVsQ29uZmlnLmZvbnRTaXplICogc2NhbGUpICsgJ3B4JyxcclxuXHRcdFx0XHRcImZvbnQtd2VpZ2h0XCI6IChsYWJlbENvbmZpZy5mb250U3R5bGUgJiBGT05UX0JPTEQpID09IEZPTlRfQk9MRCA/ICdib2xkJyA6ICdub3JtYWwnXHJcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXHJcblx0XHRcdH0pO1xyXG5cclxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XHJcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcclxuXHRcdFx0dGhpcy5pbnB1dC5zZWxlY3QoKTtcclxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xyXG5cdFx0fSxcclxuXHJcblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcclxuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XHJcblxyXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XHJcblx0XHRcdGlmICh0aGlzLnRleHRFbClcclxuXHRcdFx0XHR0aGlzLnRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gbnVsbDtcclxuXHJcblx0XHRcdGlmICghY2FuY2VsKVxyXG5cdFx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3IudXBkYXRlJywgW3RoaXMua2V5LCB0aGlzLmlucHV0LnZhbHVlXSk7XHJcblxyXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0b3AnLCBbdGhpcy5rZXldKTtcclxuXHJcblx0XHRcdC8vIHJlbW92ZSB0aGUgaW5wdXRcclxuXHRcdFx0dGhpcy5pbnB1dC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuaW5wdXQpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5pbnB1dDtcclxuXHRcdFx0ZGVsZXRlIHRoaXMua2V5O1xyXG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnJlZkVsO1xyXG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0RWw7XHJcblx0XHR9XHJcblx0fTtcclxuXHJcblx0cmV0dXJuIHtcclxuXHRcdEZPTlRfQk9MRCxcclxuXHRcdEZPTlRfSVRBTElDLFxyXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXHJcblx0XHRGT05UX1NIQURPVyxcclxuXHRcdGdldFN0cmluZ1NpemUsXHJcblx0XHR3cmFwLFxyXG5cdFx0Z2V0TGFiZWxCb3gsXHJcblx0XHRnZXRMYWJlbEJveEZvckxpbmssXHJcblx0XHRyZW5kZXIsXHJcblx0XHRlZGl0b3JcclxuXHR9O1xyXG59KSgpO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L0xhYmVsLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwiLi4vZ2VvbWV0cnkvTGlua1wiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcclxuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XHJcblxyXG5jbGFzcyBFZGdlIGV4dGVuZHMgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xyXG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ0UnKTtcclxuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xyXG5cclxuXHRcdHRoaXMuc291cmNlID0gdGhpcy50YXJnZXQgPSBudWxsO1xyXG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcclxuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XHJcblx0fVxyXG5cclxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XHJcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3NvdXJjZScpO1xyXG5cdH1cclxuXHJcblx0c2V0VGFyZ2V0KG5vZGUsIHBvcykge1xyXG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxyXG5cdCAqL1xyXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xyXG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XHJcblx0XHRpZiAoZW5kID09IG5vZGUpIHtcclxuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXHJcblx0XHRcdGlmIChub2RlKVxyXG5cdFx0XHRcdG5vZGUuc2V0RWRnZUF0KHRoaXMsIHBvcyk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoZW5kKSB7XHJcblx0XHRcdFx0Ly8gZmlyc3QgcmVtb3ZlIHRoZSBlZGdlIGZyb20gdGhlIGN1cnJlbnQgZW5kXHJcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmIChub2RlKSB7XHJcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcclxuXHRcdFx0XHRcdG5vZGUuYWRkT3V0RWRnZSh0aGlzLCBwb3MpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcclxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XHJcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0TGFiZWxCb3goa2V5KSB7XHJcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoJ2xhYmVsJyk7XHJcblx0XHRpZiAobGFiZWwpXHJcblx0XHRcdHJldHVybiBMYWJlbC5nZXRMYWJlbEJveEZvckxpbmsobGFiZWwsIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgdGhpcy5nZXRTaGFwZShrZXkpKTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cclxuXHQgKi9cclxuXHRnZXRSZWZlcmVuY2VQb2ludHMoa2V5KSB7XHJcblx0XHRsZXQgcHRzID0gW107XHJcblx0XHRpZiAodGhpcy5zb3VyY2UpXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMuc291cmNlLmdldFNoYXBlKGtleSkuY2VudGVyKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdzdGFydCcpKTtcclxuXHJcblx0XHRpZiAodGhpcy50YXJnZXQpXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudGFyZ2V0LmdldFNoYXBlKGtleSkuY2VudGVyKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XHJcblxyXG5cdFx0cmV0dXJuIHB0cztcclxuXHR9XHJcblxyXG5cdGdldFRlcm1pbmFsVmlzdWFsKGtleSwgb3J0aG9nb25hbCkge1xyXG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XHJcblx0XHRsZXQgdGVybWluYWxzID0gW107XHJcblxyXG5cdFx0bGV0IGdldEJvdW5kID0gZnVuY3Rpb24ocHQpIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUocHQueCwgcHQueSwgMywgMyk7XHJcblx0XHR9O1xyXG5cclxuXHRcdGlmICh0aGlzLnNvdXJjZSkge1xyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnNvdXJjZS5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCdzb3VyY2VQb3J0JyksIHJlZlB0c1sxXSwgb3J0aG9nb25hbCkpO1xyXG5cdFx0fSBlbHNlXHJcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzBdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzBdKSwgcmVmUHRzWzFdLCB0cnVlKX0pO1xyXG5cclxuXHRcdGlmICh0aGlzLnRhcmdldCkge1xyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnRhcmdldC5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCd0YXJnZXRQb3J0JyksIHJlZlB0c1swXSwgb3J0aG9nb25hbCkpO1xyXG5cdFx0fSBlbHNlXHJcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzFdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzFdKSwgcmVmUHRzWzBdLCB0cnVlKX0pO1xyXG5cdFx0cmV0dXJuIHRlcm1pbmFscztcclxuXHR9XHJcblxyXG5cdGdldFNoYXBlKGtleSkge1xyXG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xyXG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XHJcblxyXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcclxuXHRcdHNoYXBlID0gTGluay5nZXRMaW5rKHRoaXMuZ2V0VGVybWluYWxWaXN1YWwoa2V5LCBjb25maWcub3J0aG9nb25hbCksIGNvbmZpZywgdGhpcy5wcm9wKCdzdGFydE1hcmtlcicpLCB0aGlzLnByb3AoJ2VuZE1hcmtlcicpKTtcclxuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xyXG5cdFx0cmV0dXJuIHNoYXBlO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VkZ2U6eycgKyAoIXRoaXMuc291cmNlID8gJ251bGwnIDogdGhpcy5zb3VyY2UuaWQpICsgJy0tJyArICghdGhpcy50YXJnZXQgPyAnbnVsbCcgOiB0aGlzLnRhcmdldC5pZCkgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0c3VwZXIuZGVzdHJveSgpO1xyXG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XHJcblx0XHR0aGlzLnNldFRhcmdldChudWxsKTtcclxuXHR9XHJcbn1cclxuRWRnZS5uYW1lc3BhY2UgPSBcIkVkZ2VzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xyXG5cclxuLypcclxuXHJcbkVkZ2UucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xyXG5cdGlmICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiYWxsb3dEYW5nbGluZ0VkZ2VzXCIpKSB7XHJcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xyXG5cdH0gZWxzZVxyXG5cdFx0cmV0dXJuIHRoaXMuc291cmNlICYmIHRoaXMudGFyZ2V0ICYmIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKSAmJiB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSAmJiB0aGlzLnRhcmdldC5pc1Zpc2libGUoKTtcclxufTtcclxuXHJcbiovXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0VkZ2UuanNcbiAqKi8iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuXHJcbmxldCByZWdpc3RyeSA9IHt9O1xyXG5cclxubGV0IE1hcmtlciA9IChmdW5jdGlvbigpIHtcclxuXHJcblx0LyoqIEJlZ2luIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xyXG5cdGZ1bmN0aW9uIGFycm93KHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcclxuXHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxyXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3JcclxuXHRcdH07XHJcblx0XHRtYXJrZXIuc2hhcGUgPSB7XHJcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcclxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiB0cmlhbmdsZShzaXplLCBzb3VyY2UsIHN0eWxlcykge1xyXG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XHJcblx0XHR2YXIgbWFya2VyID0ge1xyXG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcclxuXHRcdFx0c2l6ZTogc2l6ZSxcclxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0ge1xyXG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXHJcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXHJcblx0XHR9O1xyXG5cdFx0cmV0dXJuIG1hcmtlcjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIG92YWwoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcclxuXHRcdHZhciByID0gc2l6ZSAvIDI7XHJcblx0XHR2YXIgbWFya2VyID0ge1xyXG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC1yLCAtciwgc2l6ZSwgc2l6ZSksXHJcblx0XHRcdHNpemU6IHNpemUsXHJcblx0XHRcdHJlZjogWzAsIDBdLFxyXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3JcclxuXHRcdH07XHJcblx0XHRtYXJrZXIuc2hhcGUgPSAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCInICsgciArICdcIiByeT1cIicgKyByICsgJ1wiPjwvZWxsaXBzZT4nO1xyXG5cdFx0cmV0dXJuIG1hcmtlcjtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGRpYW1vbmQoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcclxuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXHJcblx0XHRcdHNpemU6IHNpemUsXHJcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXHJcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxyXG5cdFx0fTtcclxuXHRcdG1hcmtlci5zaGFwZSA9ICcnO1xyXG5cdFx0cmV0dXJuIG1hcmtlcjtcclxuXHR9XHJcblx0LyoqIEVuZCBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cclxuXHRmdW5jdGlvbiBnZXRNYXJrZXIoY29uZmlnLCBzb3VyY2UpIHtcclxuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xyXG5cdFx0dmFyIG1hcmtlciA9IGZhY3RvcnkoY29uZmlnLnNpemUsIHNvdXJjZSwgY29uZmlnKTtcclxuXHRcdG1hcmtlci5pZCA9IGNvbmZpZy5pZDtcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xyXG5cdHJlZ2lzdHJ5Wyd0cmlhbmdsZSddID0gdHJpYW5nbGU7XHJcblx0cmVnaXN0cnlbJ292YWwnXSA9IG92YWw7XHJcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXHJcblx0XHRnZXRNYXJrZXI6IGdldE1hcmtlclxyXG5cdH07XHJcbn0pKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L01hcmtlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcblxyXG5jbGFzcyBMYXlvdXQge1xyXG5cdGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xyXG5cdFx0aWYgKGNvbmZpZy5oYXNPd25Qcm9wZXJ0eShcIm9yaWVudGF0aW9uXCIpICYmIF8uaXNTdHJpbmcoY29uZmlnLm9yaWVudGF0aW9uKSkge1xyXG5cdFx0XHRpZiAoY29uZmlnLm9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkgPT0gXCJIT1JJWk9OVEFMXCIpXHJcblx0XHRcdFx0Y29uZmlnLm9yaWVudGF0aW9uID0gTGF5b3V0LkhPUklaT05UQUw7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWxldGUgY29uZmlnLm9yaWVudGF0aW9uO1xyXG5cdFx0fVxyXG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xyXG5cdH1cclxuXHJcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge31cclxuXHRyZXNldCgpIHt9XHJcblx0ZGVzdHJveSgpIHt9XHJcbn1cclxuTGF5b3V0LlZFUlRJQ0FMID0gMDtcclxuTGF5b3V0LkhPUklaT05UQUwgPSAxO1xyXG5cclxuTGF5b3V0LkRFRkFVTFRTID0ge1xyXG5cdG9yaWVudGF0aW9uOiBMYXlvdXQuVkVSVElDQUxcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0xheW91dC5qc1xuICoqLyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XHJcblxyXG5jbGFzcyBGbG93TGF5b3V0IGV4dGVuZHMgTGF5b3V0IHtcclxuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XHJcblx0XHR2YXIgaXRlbXM7XHJcblx0XHRpZiAoIXJvb3QpXHJcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xyXG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHJvb3QpKVxyXG5cdFx0XHRpdGVtcyA9IHJvb3Q7XHJcblx0XHRlbHNlXHJcblx0XHRcdGl0ZW1zID0gcm9vdC5nZXRMaW5rZWROb2RlcygndGFyZ2V0Jyk7XHJcblx0XHRpZiAoIWl0ZW1zIHx8IGl0ZW1zLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcblxyXG5cdFx0dmFyIHggPSAwLCB5ID0gMCwgaCA9IDAsIG5vZGU7XHJcblx0XHR2YXIgcDEgPSAwLCBwMiA9IDA7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdG5vZGUgPSBpdGVtc1tpXTtcclxuXHRcdFx0aWYgKHggPiAwICYmIHggKyB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIikgPiBib3VuZHMud2lkdGgpIHtcclxuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcclxuXHRcdFx0XHR5ICs9IGggKyB0aGlzLnZnYXA7XHJcblx0XHRcdFx0eCA9IDA7aCA9IDA7cDEgPSAwO3AyKys7XHJcblx0XHRcdH1cclxuXHRcdFx0bm9kZS5fZmxQb3MgPSBbcDEsIHAyXTtcclxuXHRcdFx0bm9kZS5tb3ZlVG8oW2JvdW5kcy54ICsgeCwgYm91bmRzLnkgKyB5XSk7XHJcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xyXG5cdFx0XHRwMSsrO1xyXG5cdFx0XHRoID0gaCA8IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgPyBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpIDogaDtcclxuXHRcdH1cclxuXHRcdHRoaXMudHJpZ2dlcihuZXcgUmVjdGFuZ2xlKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCB5ICsgaCkpO1xyXG5cdH1cclxufVxyXG5cclxuRmxvd0xheW91dC5ERUZBVUxUUyA9IHtcclxuXHRoZ2FwOiAxMCxcclxuXHR2Z2FwOiAxMFxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmxvd0xheW91dDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcclxuaW1wb3J0IEdyYXBoQmVoYXZpb3IgZnJvbSBcIi4uL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3JcIjtcclxuaW1wb3J0IFNlbGVjdGlvbkJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvclwiO1xyXG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcclxuXHJcbmNsYXNzIFJlbmRlcmVyIHtcclxuXHRjb25zdHJ1Y3RvcihpZCwgY29udGFpbmVyLCBjb25maWcgPSB7fSwgZ3JhcGggPSBudWxsKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblx0XHR0aGlzLmJveCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogdGhpcy5pZCwgdGFiaW5kZXg6IDAsIG5zOiAnZ3JhcGgnfSwge292ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiAncmVsYXRpdmUnfSk7XHJcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xyXG5cdFx0aWYgKGNvbmZpZy5sYXlvdXQpIHtcclxuXHRcdFx0bGV0IGxheW91dENsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IoY29uZmlnLmxheW91dC5qc0NsYXNzLCBMYXlvdXQpO1xyXG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XHJcblx0XHRcdGRlbGV0ZSBjb25maWcubGF5b3V0O1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XHJcblx0XHR0aGlzLl90cmFuc2xhdGUgPSBbMCwgMF07XHJcblx0XHR0aGlzLl9zY2FsZSA9IDEuMDtcclxuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcclxuXHRcdHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XHJcblx0XHR0aGlzLmdyYXBoQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG51bGw7XHJcblx0XHR0aGlzLm5vZGVCZWhhdmlvciA9IG51bGw7XHJcblx0XHR0aGlzLmVkZ2VCZWhhdmlvciA9IG51bGw7XHJcblx0XHR0aGlzLmNvbm5lY3Rpb25CZWhhdmlvciA9IG51bGw7XHJcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XHJcblxyXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRnZXQgZ3JhcGgoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fZ3JhcGg7XHJcblx0fVxyXG5cclxuXHRzZXQgZ3JhcGgoZ3JhcGgpIHtcclxuXHRcdHRoaXMuX2dyYXBoID0gZ3JhcGg7XHJcblx0XHRsZXQgcm9vdCA9IGdyYXBoLmN1cnJlbnRSb290O1xyXG5cdFx0aWYgKHJvb3QpIHtcclxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlID0gW3Jvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnKSB8fCAwLCByb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JykgfHwgMF07XHJcblx0XHRcdHRoaXMuX3NjYWxlID0gcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnKSB8fCAxLjA7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR2aWV3cG9ydChzY2FsZWQsIHZpZXdwb3J0KSB7XHJcblx0XHRpZiAoXy5pc1VuZGVmaW5lZChzY2FsZWQpIHx8IF8uaXNOdWxsKHNjYWxlZCkpIHNjYWxlZCA9IGZhbHNlO1xyXG5cdFx0aWYgKCF2aWV3cG9ydCkge1xyXG5cdFx0XHR2YXIgdnAgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuYm94Lm9mZnNldFdpZHRoLCB0aGlzLmJveC5vZmZzZXRIZWlnaHQpO1xyXG5cdFx0XHRpZiAoc2NhbGVkKVxyXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdnApO1xyXG5cdFx0XHRyZXR1cm4gdnA7XHJcblx0XHR9XHJcblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdmlld3BvcnQpO1xyXG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcclxuXHRcdHZhciBzY2FsZSA9IHcgLyB2aWV3cG9ydC53aWR0aDtcclxuXHRcdHRoaXMudHJhbnNmb3JtKC12aWV3cG9ydC54KnNjYWxlLCAtdmlld3BvcnQueSpzY2FsZSwgc2NhbGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHRyYW5zbGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZTsgfVxyXG5cdHNldCB0cmFuc2xhdGUodCkgeyB0aGlzLnRyYW5zZm9ybSh0WzBdLCB0WzFdKTsgfVxyXG5cdGdldCBzY2FsZSgpIHsgcmV0dXJuIHRoaXMuX3NjYWxlOyB9XHJcblx0c2V0IHNjYWxlKGspIHtcclxuXHRcdHN3aXRjaCAoaykge1xyXG5cdFx0XHRjYXNlIFwiaW5cIjpcclxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAqIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJvdXRcIjpcclxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJhY3R1YWxcIjpcclxuXHRcdFx0XHRrID0gMS4wO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiZml0XCI6XHJcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xyXG5cclxuXHRcdFx0XHR2YXIgZ0JvdW5kcyA9IHRoaXMuZ2V0Qm91bmRzKCk7XHJcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XHJcblxyXG5cdFx0XHRcdHZCb3VuZHMud2lkdGggLT0gZ3JpZFNpemU7XHJcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XHJcblxyXG5cdFx0XHRcdC8qIERvIG5vdCB6b29tIG1vcmUgdGhhbiBhY3R1YWwgaWYgZ3JhcGggYWxyZWFkeSBmaXRzIGludG8gdGhlIGJvdW5kcyAqL1xyXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcclxuXHJcblx0XHRcdFx0Ly9UT0RPOiBBZGQgY2VudGVyaW5nIGNvZGUgaGVyZSBvciB0cmlnZ2VyIGFuIGV2ZW50IGZvciB0aGF0XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0aWYgKF8uaXNTdHJpbmcoaykpIGsgPSBwYXJzZUZsb2F0KGspO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy50cmFuc2Zvcm0obnVsbCwgbnVsbCwgayk7XHJcblx0fVxyXG5cclxuXHR0cmFuc2Zvcm0oeCA9IG51bGwsIHkgPSBudWxsLCBzY2FsZSA9IG51bGwpIHtcclxuXHRcdGxldCBncmFwaCA9IHRoaXMuZ3JhcGg7XHJcblx0XHRsZXQgcm9vdCA9IGdyYXBoID8gZ3JhcGguY3VycmVudFJvb3QgOiBudWxsO1xyXG5cdFx0aWYgKCFfLmlzTnVsbCh4KSkge1xyXG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMF0gPSB4O1xyXG5cdFx0XHRpZiAocm9vdClcclxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JywgeCk7XHJcblx0XHR9XHJcblx0XHRpZiAoIV8uaXNOdWxsKHkpKSB7XHJcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZVsxXSA9IHk7XHJcblx0XHRcdGlmIChyb290KVxyXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knLCB5KTtcclxuXHRcdH1cclxuXHRcdGlmICghXy5pc051bGwoc2NhbGUpKSB7XHJcblx0XHRcdHRoaXMuX3NjYWxlID0gc2NhbGU7XHJcblx0XHRcdGlmIChyb290KVxyXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJywgc2NhbGUpO1xyXG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgZ3JhcGhcclxuXHRcdFx0bGV0IHMgPSB0aGlzLmRpc3BhdGNoZXIuc2NhbGU7XHJcblx0XHRcdGlmIChzICE9IHNjYWxlKVxyXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zY2FsZSA9IHNjYWxlO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5yZWZyZXNoKCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIoKSB7XHJcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm4gZmFsc2U7XHJcblx0XHRpZiAodGhpcy5sYXlvdXQpXHJcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5jdXJyZW50Um9vdCwgdGhpcy52aWV3cG9ydCgpKTtcclxuXHJcblx0XHR0aGlzLmluaXRpYWxpemVCZWhhdmlvcnMoKTtcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTGFiZWwoYm94KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMYWJlbChib3gpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTGluayhzaGFwZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGluayhzaGFwZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJNYXJrZXJzKG1hcmtlcnMpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XHJcblx0fVxyXG5cclxuXHRpbml0aWFsaXplQmVoYXZpb3JzKCkge1xyXG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cclxuXHRcdGlmICghdGhpcy5kaXNwYXRjaGVyKSB7XHJcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcclxuXHRcdFx0bGV0IGpzQ2xhc3M7XHJcblx0XHRcdGlmICh0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSkge1xyXG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XHJcblx0XHRcdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHRoaXMucHJvcCgnc2VsZWN0aW9uQmVoYXZpb3InKSkge1xyXG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ3NlbGVjdGlvbkJlaGF2aW9yJykpO1xyXG5cdFx0XHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBuZXcganNDbGFzcyh0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvKnRoaXMuZGlzcGF0Y2hlci5yZWdpc3RlcignbW91c2V1cC5ub2RlLmxhYmVsJywgZnVuY3Rpb24odHlwZSwgbnMsIHRhcmdldCwgcG9zLCBldmVudCkge1xyXG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XHJcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XHJcblx0XHRcdFx0XHRMYWJlbC5fZGVsYXlFZGl0ID0gXy5kZWxheSgoKSA9PiB7XHJcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XHJcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XHJcblx0XHRcdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0YXJ0KG5vZGUuaWQsIHRoaXMuYm94LCBub2RlLmdldExhYmVsQm94KHRoaXMuaWQpLCB0YXJnZXQsIGV2ZW50Lm5zVGFyZ2V0LCB0aGlzLnNjYWxlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSwgMjUwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpO1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWy9ebW91c2Vkb3duLywgL156b29tL10sIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0XHRpZiAoIURvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkge1xyXG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sIHRoaXMpOyovXHJcblx0XHR9XHJcblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcclxuXHR9XHJcblxyXG5cdHJlZnJlc2goKSB7fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHRlbXBsYXRlIGZvciB0aGUgc3BlY2lmaWVkIGtleS5cclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxyXG5cdCAqIEBwYXJhbSBwcmVwcm9jZXNzb3IgaWYgdGhlIHRlbXBsYXRlIGNvbnRhaW5zIHByZXByb3NzaW5nIGVsZW1lbnRzLCBzdWNoIGFzICN7c2hhcGV9LCB0aGUgcHJlcHJvY2Vzc29yIHdpbGwgYmVcclxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxyXG5cdCAqIEByZXR1cm5zIHsqfVxyXG5cdCAqL1xyXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcclxuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcclxuXHRcdGlmICh0ICYmIF8uaXNGdW5jdGlvbih0KSkge1xyXG5cdFx0XHR0ID0gdChjb25maWcpO1xyXG5cdFx0fVxyXG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwcmVwcm9jZXNzaW5nIHRhZ3MuXHJcblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XHJcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XHJcblx0XHRcdHZhciBvYmogPSB7fTtcclxuXHRcdFx0Zm9yIChsZXQgcGFydCBpbiBwYXJ0cykge1xyXG5cdFx0XHRcdHBhcnQgPSBwYXJ0c1twYXJ0XTtcclxuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcclxuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0O1xyXG5cdH1cclxuXHJcblx0cmVzZXQoKSB7fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuX2dyYXBoO1xyXG5cdFx0ZGVsZXRlIHRoaXMubGF5b3V0O1xyXG5cdFx0aWYgKHRoaXMuZGlzcGF0Y2hlcikge1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5kaXNwYXRjaGVyO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gJyc7XHJcblx0fVxyXG59XHJcblJlbmRlcmVyLkRFRkFVTFRTID0ge1xyXG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXHJcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxyXG5cdHNpbmdsZVNlbGVjdDogdHJ1ZSxcclxuXHRkcmFnZ2FibGU6IHRydWUsXHJcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxyXG5cdGd1aWRlc0VuYWJsZWQ6IHRydWUsXHJcblx0Z3JpZFNpemU6IDMwLFxyXG5cdG1heFpvb206IDQuMCxcclxuXHRtaW5ab29tOiAwLjIsXHJcblx0em9vbUZhY3RvcjogMS4yLFxyXG5cdG1hc2tPcGFjaXR5OiAwLjUsXHJcblx0Z3JhcGhCZWhhdmlvcjogR3JhcGhCZWhhdmlvcixcclxuXHRzZWxlY3Rpb25CZWhhdmlvcjogU2VsZWN0aW9uQmVoYXZpb3JcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L1JlbmRlcmVyLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzI4LzIwMTYuXHJcbiAqL1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcclxuXHJcbi8qKlxyXG4gKiBHcmFwaCBoYW5kbGVyIGhhbmRsZXMgUGFubmluZyBhbmQgWm9vbSBhbmQgcnViYmVyIGJhbmQgc2VsZWN0aW9uXHJcbiAqL1xyXG5jbGFzcyBHcmFwaEJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcihyZW5kZXJlcik7XHJcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XHJcblx0XHRsZXQgZiA9IGZ1bmN0aW9uKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xyXG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IodHlwZSwgbnMsIGdyYXBoLCBldmVudCk7XHJcblx0XHR9O1xyXG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcigvXmRyYWcuKlxcLmdyYXBoJC8sIHRoaXMuaGFuZGxlRHJhZywgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKC9eem9vbS8sIHRoaXMuaGFuZGxlWm9vbSwgdGhpcyk7XHJcblx0XHQvL2Rpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uZ3JhcGgnLCAnbW91c2VlbnRlci5ncmFwaCcsICdtb3VzZWxlYXZlLmdyYXBoJ10sIGYpO1xyXG5cdFx0dGhpcy5vZmZzZXQgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0aGFuZGxlWm9vbSh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcclxuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKG51bGwsIG51bGwsIGV2ZW50LnNjYWxlKTtcclxuXHR9XHJcblxyXG5cdGhhbmRsZURyYWcodHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XHJcblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xyXG5cdFx0XHRsZXQgcGFuID0gKHRoaXMucmVuZGVyZXIucHJvcChcImRlZmF1bHRDbGlja01vZGVcIikgPT0gXCJwYW5cIikgXiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XHJcblx0XHRcdGlmICghcGFuKSByZXR1cm47XHJcblx0XHRcdGxldCB0ID0gdGhpcy5yZW5kZXJlci50cmFuc2xhdGU7XHJcblx0XHRcdHRoaXMub2Zmc2V0ID0gW3RbMF0gLSBwb3NbMF0sIHRbMV0gLSBwb3NbMV1dO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoIXRoaXMub2Zmc2V0KSByZXR1cm47XHJcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShwb3NbMF0gKyB0aGlzLm9mZnNldFswXSwgcG9zWzFdICsgdGhpcy5vZmZzZXRbMV0pO1xyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XHJcblx0XHRcdC8vQ3Vyc29yLnVwZGF0ZUN1cnNvcignbW91c2V1cCcsIG5zLCBncmFwaCwgZXZlbnQpO1xyXG5cdFx0XHRkZWxldGUgdGhpcy5vZmZzZXQ7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHcmFwaEJlaGF2aW9yO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzXG4gKiovIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyID0gcmVuZGVyZXI7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMucmVuZGVyZXI7XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0JlaGF2aW9yLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBDZWxsIGZyb20gXCIuLi9ncmFwaC9DZWxsXCI7XHJcbmltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xyXG5cclxuY2xhc3MgU2VsZWN0aW9uQmVoYXZpb3IgZXh0ZW5kcyBCZWhhdmlvciB7XHJcblx0Y29uc3RydWN0b3IocmVuZGVyZXIpIHtcclxuXHRcdHN1cGVyKHJlbmRlcmVyKTtcclxuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcclxuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNlZG93bi4qJywgdGhpcy5zZWxlY3RDZWxsLCB0aGlzKTtcclxuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAuKicsIHRoaXMudW5zZWxlY3RDZWxsLCB0aGlzKTtcclxuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ2RyYWcqLmdyYXBoJywgdGhpcy5oYW5kbGVNdWx0aVNlbGVjdCwgdGhpcyk7XHJcblx0XHQvL2dyYXBoLm9uKEdyYXBoLkVWRU5UX1RZUEVTLlNFTEVDVElPTl9DSEFOR0UsIHRoaXMudXBkYXRlU2VsZWN0aW9ucywgdGhpcyk7XHJcblx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gbnVsbDtcclxuXHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IG51bGw7XHJcblx0fVxyXG5cclxuXHR1cGRhdGVTZWxlY3Rpb25zKCkge1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2RlcylcclxuXHRcdFx0dGhpcy5zZWxlY3RlZE5vZGVzLmNsYXNzZWQoJ3NlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRMaW5rcylcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzLmNsYXNzZWQoJ3NlbGVjdGVkJywgZmFsc2UpO1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0ZWROb2RlcyA9IG51bGw7XHJcblx0XHR0aGlzLnNlbGVjdGVkTGlua3MgPSBudWxsO1xyXG5cdFx0dGhpcy5hdHRhY2hlZExpbmtzID0gbnVsbDtcclxuXHJcblx0XHRpZiAodGhpcy5ncmFwaC5zZWxlY3RlZFZlcnRpY2VzICYmIHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcy5sZW5ndGggPiAwKSB7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2RlcyA9IHRoaXMuZ3JhcGgucmVuZGVyZXIuZ2V0U2hhcGVzKHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcyk7XHJcblx0XHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IHRoaXMuZ3JhcGgucmVuZGVyZXIuZ2V0U2hhcGVzKHRoaXMuZ3JhcGguZ2V0QXR0YWNoZWRFZGdlcygpKTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZE5vZGVzLmNsYXNzZWQoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHRoaXMuZ3JhcGguc2VsZWN0ZWRFZGdlcyAmJiB0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkTGlua3MgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMpO1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkTGlua3MuY2xhc3NlZCgnc2VsZWN0ZWQnLCB0cnVlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHNlbGVjdENlbGwodHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnQpIHtcclxuXHRcdHZhciBjZWxsID0gZGF0YSA9PSB0aGlzLmdyYXBoID8gbnVsbCA6IGRhdGE7XHJcblx0XHRpZiAoY2VsbCAmJiAhKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkgcmV0dXJuO1xyXG5cdFx0dmFyIHRvZ2dsZSA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXk7XHJcblx0XHRpZiAoY2VsbCAmJiAoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSB7XHJcblx0XHRcdGlmICghdGhpcy5ncmFwaC5pc1NlbGVjdGVkKGNlbGwpKVxyXG5cdFx0XHRcdGRlbGV0ZSBjZWxsLl9maXJzdFNlbGVjdGlvbjtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGNlbGwuX2ZpcnN0U2VsZWN0aW9uID0gdHJ1ZTtcclxuXHJcblx0XHRcdGQzLnNlbGVjdChldmVudC5kYXRhVGFyZ2V0KS5tb3ZlVG9Gcm9udCgpO1xyXG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxsLCB0b2dnbGUpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dW5zZWxlY3RDZWxsKHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR2YXIgY2VsbCA9IGRhdGEgPT0gdGhpcy5ncmFwaCA/IG51bGwgOiBkYXRhO1xyXG5cdFx0aWYgKGNlbGwgJiYgIShjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHJldHVybjtcclxuXHRcdHZhciBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleTtcclxuXHRcdGlmICghY2VsbCkge1xyXG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxsLCBjdHJsS2V5KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGhhbmRsZU11bHRpU2VsZWN0KHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XHJcblx0XHRwb3MgPSB1dGlsLnNjYWxlKHRoaXMuZ3JhcGgsIHBvcyk7XHJcblxyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcclxuXHRcdFx0dmFyIHNlbGVjdCA9ICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiZGVmYXVsdENsaWNrTW9kZVwiKSA9PSBcInNlbGVjdFwiKSBeIChldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcclxuXHRcdFx0aWYgKCFzZWxlY3QpIHJldHVybjtcclxuXHRcdFx0dGhpcy5zdGFydFB0ID0gbmV3IFBvaW50KHBvc1swXSwgcG9zWzFdKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLnN0YXJ0UHQpIHJldHVybjtcclxuXHRcdHZhciByZWN0ID0gUmVjdGFuZ2xlLmdldEJvdW5kaW5nUmVjdGFuZ2xlKFtuZXcgUG9pbnQocG9zWzBdLCBwb3NbMV0pLCB0aGlzLnN0YXJ0UHRdKTtcclxuXHRcdHZhciByZW5kZXJlciA9IHRoaXMuZ3JhcGgucmVuZGVyZXI7XHJcblx0XHRpZiAoIXRoaXMucnViYmVyYmFuZCkge1xyXG5cdFx0XHR0aGlzLnJ1YmJlcmJhbmQgPSBkMy5zZWxlY3QocmVuZGVyZXIuYXBwZW5kTm9kZShyZW5kZXJlci5nZXRDZWxsTGF5ZXIoKSwge1xyXG5cdFx0XHRcdHRlbXBsYXRlOiBfLnRlbXBsYXRlKCc8Zz48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHJva2U9XCIjMDAwMDAwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtZGFzaGFycmF5PVwiMyAzXCIvPjwvZz4nKVxyXG5cdFx0XHR9LCBmYWxzZSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XHJcblx0XHRcdHZhciBjZWxscyA9IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKS5jaGlsZHJlbjtcclxuXHRcdFx0Ly8gVE9ETzogRGVmaW5lIGlmIHdlIHdhbnQgdG8gc2VsZWN0IHZlcnRleGVzIC8gZWRnZXMgb3IgYm90aFxyXG5cdFx0XHRjZWxscyA9IF8uZmlsdGVyKGNlbGxzLCBmdW5jdGlvbiAoY2VsbCkge1xyXG5cdFx0XHRcdHZhciBib3ggPSBjZWxsLmdldEJvdW5kcygpO1xyXG5cdFx0XHRcdGlmIChyZWN0LmNvbnRhaW5zKGJveCkpIHtcclxuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQvLyBUT0RPOiBTZXQgc2VsZWN0aW9uXHJcblx0XHRcdHRoaXMuZ3JhcGguc2V0U2VsZWN0aW9uKGNlbGxzLCBldmVudC5jdHJsS2V5KTtcclxuXHJcblx0XHRcdHRoaXMucnViYmVyYmFuZC5yZW1vdmUoKTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhcnRQdDtcclxuXHRcdFx0ZGVsZXRlIHRoaXMucnViYmVyYmFuZDtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5ydWJiZXJiYW5kLnNlbGVjdChcInJlY3RcIikuYXR0cih7eDogcmVjdC54LCB5OiByZWN0LnksIHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0fSk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0c3VwZXIuZGVzdHJveSgpO1xyXG5cdFx0ZGVsZXRlIHRoaXMuc2VsZWN0ZWROb2RlcztcclxuXHRcdGRlbGV0ZSB0aGlzLnNlbGVjdGVkTGlua3M7XHJcblx0XHRkZWxldGUgdGhpcy5hdHRhY2hlZExpbmtzO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uQmVoYXZpb3I7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi4vdXRpbC9iYXNlNjRcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5pZiAodHlwZW9mIChTVkdFbGVtZW50KSAhPSBcInVuZGVmaW5lZFwiKSB7XG5cdHZhciBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoTlMsIFwic3ZnXCIpO1xuXHRzdmcuaW5uZXJIVE1MID0gJzxjaXJjbGUvPic7XG5cdGlmIChzdmcuZmlyc3RDaGlsZCAhPT0gXCJbb2JqZWN0IFNWR0NpcmNsZUVsZW1lbnRdXCIpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydGllcyhTVkdFbGVtZW50LnByb3RvdHlwZSwge1xuXHRcdFx0XCJvdXRlckhUTUxcIjoge1xuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciAkbm9kZSwgJHRlbXA7XG5cdFx0XHRcdFx0JHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRcdFx0XHQkbm9kZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHRcdCR0ZW1wLmFwcGVuZENoaWxkKCRub2RlKTtcblx0XHRcdFx0XHRyZXR1cm4gJHRlbXAuaW5uZXJIVE1MO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0XCJpbm5lckhUTUxcIjoge1xuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHZhciBzID0gdGhpcy5vdXRlckhUTUw7XG5cdFx0XHRcdFx0dmFyIHJvcGVuID0gbmV3IFJlZ0V4cChcIjxcIiArIHRoaXMubm9kZU5hbWUgKyAnXFxcXGIoPzooW1wiXFwnXSlbXlwiXSo/KFxcXFwxKXxbXj5dKSo+JywgXCJpXCIpO1xuXHRcdFx0XHRcdHZhciByY2xvc2UgPSBuZXcgUmVnRXhwKFwiPFxcL1wiICsgdGhpcy5ub2RlTmFtZSArIFwiPiRcIiwgXCJpXCIpO1xuXHRcdFx0XHRcdHJldHVybiAgcy5yZXBsYWNlKHJvcGVuLCBcIlwiKS5yZXBsYWNlKHJjbG9zZSwgXCJcIik7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHNldDogZnVuY3Rpb24obWFya3VwKSB7XG5cdFx0XHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXG5cdFx0XHRcdFx0bGV0IGNoaWxkO1xuXHRcdFx0XHRcdHdoaWxlIChjaGlsZCA9IHRoaXMubGFzdENoaWxkKVxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChjaGlsZCk7XG5cdFx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCc8c3ZnPicpLmFwcGVuZChtYXJrdXApLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRcdFx0XHRsZXQgJHRlbXAgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBidWYudG9TdHJpbmcoKSkuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdFx0d2hpbGUgKCR0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRcdFx0XHR0aGlzLmFwcGVuZENoaWxkKCR0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSlcblx0fVxuXHQvLyBEZWZpbmUgdGhlIHRvRGF0YVVSTCBmb3IgU1ZHXG5cdFNWR0VsZW1lbnQucHJvdG90eXBlLnRvRGF0YVVSTCA9IGZ1bmN0aW9uKHR5cGUsIG9wdGlvbnMgPSB7fSkge1xuXHRcdGxldCBfc3ZnID0gdGhpcztcblxuXHRcdGxldCBkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykge307XG5cblx0XHRpZiAob3B0aW9uc1snZGVidWcnXSA9PSB0cnVlICYmIHR5cGVvZihjb25zb2xlKSAhPSAndW5kZWZpbmVkJylcblx0XHRcdGRlYnVnID0gZnVuY3Rpb24obXNnKSB7IGNvbnNvbGUubG9nKFwiU1ZHLnRvRGF0YVVSTDpcIiwgbXNnKTsgfTtcblxuXHRcdGZ1bmN0aW9uIGV4cG9ydFNWRygpIHtcblx0XHRcdHZhciBzdmdfeG1sID0gX3N2Zy5vdXRlckhUTUw7XG5cdFx0XHR2YXIgc3ZnX2RhdGF1cmwgPSBiYXNlNjRkYXRhVVJMZW5jb2RlKHN2Z194bWwpO1xuXHRcdFx0ZGVidWcodHlwZSArIFwiIGxlbmd0aDogXCIgKyBzdmdfZGF0YXVybC5sZW5ndGgpO1xuXG5cdFx0XHQvLyBOT1RFIGRvdWJsZSBkYXRhIGNhcnJpZXJcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHN2Z19kYXRhdXJsKTtcblx0XHRcdHJldHVybiBzdmdfZGF0YXVybDtcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBiYXNlNjRkYXRhVVJMZW5jb2RlKHMpIHtcblx0XHRcdHZhciBiNjQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XG5cblx0XHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0RPTS93aW5kb3cuYnRvYVxuXHRcdFx0aWYgKHdpbmRvdy5idG9hKSB7XG5cdFx0XHRcdGRlYnVnKFwidXNpbmcgd2luZG93LmJ0b2EgZm9yIGJhc2U2NCBlbmNvZGluZ1wiKTtcblx0XHRcdFx0YjY0ICs9IGJ0b2Eocyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGN1c3RvbSBiYXNlNjQgZW5jb2RlclwiKTtcblx0XHRcdFx0YjY0ICs9IEJhc2U2NC5lbmNvZGUocyk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBiNjQ7XG5cdFx0fVxuXG5cdFx0Ly8gTmF0aXZlIGV4cG9ydCBkb2Vzbid0IHdvcmsgdmVyeSB3ZWxsLiBzaG91bGQgdXNlIGNhbnZnIGluc3RlYWQuXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2UodHlwZSkge1xuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG5cdFx0XHR2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5cblx0XHRcdC8vIFRPRE86IGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpLCBkbyBzb21lIHRyYW5zbGF0aW9uIG1hZ2ljP1xuXG5cdFx0XHR2YXIgc3ZnX2ltZyA9IG5ldyBJbWFnZSgpO1xuXHRcdFx0dmFyIHN2Z194bWwgPSBfc3ZnLm91dGVySFRNTDtcblx0XHRcdHN2Z19pbWcuc3JjID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcblxuXHRcdFx0c3ZnX2ltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVidWcoXCJleHBvcnRlZCBpbWFnZSBzaXplOiBcIiArIFtzdmdfaW1nLndpZHRoLCBzdmdfaW1nLmhlaWdodF0pO1xuXHRcdFx0XHRjYW52YXMud2lkdGggPSBzdmdfaW1nLndpZHRoO1xuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gc3ZnX2ltZy5oZWlnaHQ7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2Uoc3ZnX2ltZywgMCwgMCk7XG5cblx0XHRcdFx0Ly8gU0VDVVJJVFlfRVJSIFdJTEwgSEFQUEVOIE5PV1xuXHRcdFx0XHR2YXIgaW1hZ2VfZGF0YXVybCA9IGNhbnZhcy50b0RhdGFVUkwodHlwZSk7XG5cdFx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgaW1hZ2VfZGF0YXVybC5sZW5ndGgpO1xuXG5cdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKCBpbWFnZV9kYXRhdXJsICk7XG5cdFx0XHRcdGVsc2UgZGVidWcoXCJXQVJOSU5HOiBubyBjYWxsYmFjayBzZXQsIHNvIG5vdGhpbmcgaGFwcGVucy5cIik7XG5cdFx0XHR9O1xuXG5cdFx0XHRzdmdfaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVidWcoXG5cdFx0XHRcdFx0XCJDYW4ndCBleHBvcnQhIE1heWJlIHlvdXIgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgXCIgK1xuXHRcdFx0XHRcdFwiU1ZHIGluIGltZyBlbGVtZW50IG9yIFNWRyBpbnB1dCBmb3IgQ2FudmFzIGRyYXdJbWFnZT9cXG5cIiArXG5cdFx0XHRcdFx0XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NWRyNOYXRpdmVfc3VwcG9ydFwiXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBOT1RFOiB3aWxsIG5vdCByZXR1cm4gYW55dGhpbmdcblx0XHR9XG5cblx0XHRmdW5jdGlvbiBleHBvcnRJbWFnZUNhbnZnKHR5cGUpIHtcblx0XHRcdGlmICghY2FudmcpIHJldHVybiBudWxsO1xuXHRcdFx0bGV0IGNhbnZhcyA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycsIG51bGwsIHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xuXHRcdFx0aWYgKHR5cGUgPT0gJ2phdmFzY3JpcHQnKSB7XG5cdFx0XHRcdHZhciB4Y2FudmFzID0gbmV3IGpzQ2FudmFzICgnanNjYW52YXN0ZXN0Jyk7XG5cdFx0XHRcdHhjYW52YXMuY2FudmFzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0XHRcdC8veGNhbnZhcy5jYW52YXMgPSBjYW52YXM7XG5cdFx0XHR9XG5cblx0XHRcdGlmICghb3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSB7XG5cdFx0XHRcdGNhbnZnKGNhbnZhcywgX3N2Zy5vdXRlckhUTUwpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGV0IHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgfHwgMDtcblx0XHRcdFx0bGV0IHNjYWxlID0gMS4wO1xuXHRcdFx0XHRsZXQgdHJhbnNsYXRlID0gWzAsIDBdO1xuXHRcdFx0XHRsZXQgYmJveCA9IF9zdmcuZ2V0QkJveCgpO1xuXHRcdFx0XHRkZWJ1ZyhcImRldGVjdGVkIHN2ZyBkaW1lbnNpb25zIFwiICsgW2Jib3gueCwgYmJveC55LCBiYm94LndpZHRoLCBiYm94LmhlaWdodF0pO1xuXHRcdFx0XHRsZXQgdHJhbnNmb3JtID0gX3N2Zy5maXJzdEVsZW1lbnRDaGlsZC5nZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScpO1xuXHRcdFx0XHRpZiAodHJhbnNmb3JtKSB7XG5cdFx0XHRcdFx0ZGVidWcoJ2RldGVjdGVkIHN2ZyB0cmFuc2Zvcm0gJyArIHRyYW5zZm9ybSk7XG5cdFx0XHRcdFx0dHJhbnNmb3JtID0gU1ZHUmVuZGVyZXIudHJhbnNmb3JtKHRyYW5zZm9ybSk7XG5cdFx0XHRcdFx0dHJhbnNsYXRlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZTtcblx0XHRcdFx0XHRzY2FsZSA9IHRyYW5zZm9ybS5zY2FsZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0XHRidWYuYXBwZW5kKCc8c3ZnIHdpZHRoPVwiJykuYXBwZW5kKGJib3gud2lkdGggKyAyKnBhZGRpbmcpLmFwcGVuZCgncHhcIiBoZWlnaHQ9XCInKS5hcHBlbmQoYmJveC5oZWlnaHQgKyAyKnBhZGRpbmcpLmFwcGVuZCgncHhcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJylcblx0XHRcdFx0XHQuYXBwZW5kKC1iYm94LngrdHJhbnNsYXRlWzBdK3BhZGRpbmcpLmFwcGVuZCgnLCcpLmFwcGVuZCgtYmJveC55K3RyYW5zbGF0ZVsxXStwYWRkaW5nKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQoc2NhbGUpLmFwcGVuZCgnKVwiPicpXG5cdFx0XHRcdFx0LmFwcGVuZChfc3ZnLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCkuYXBwZW5kKCc8L2c+PC9zdmc+Jyk7XG5cdFx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xuXHRcdFx0XHRcdHhjYW52YXMuY29tcGlsZShidWYudG9TdHJpbmcoKSwgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soeGNhbnZhcy50b1N0cmluZygpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGNhbnZnKGNhbnZhcywgYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuXHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soIGltYWdlX2RhdGF1cmwgKTtcblx0XHRcdGNhbnZhcy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNhbnZhcyk7XG5cdFx0XHRyZXR1cm4gaW1hZ2VfZGF0YXVybDtcblx0XHR9XG5cblx0XHRpZiAoIXR5cGUpIHR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcblxuXHRcdGlmIChvcHRpb25zLmtlZXBOb25TYWZlKSBkZWJ1ZyhcIk5PVEU6IGtlZXBOb25TYWZlIGlzIE5PVCBzdXBwb3J0ZWQgYW5kIHdpbGwgYmUgaWdub3JlZCFcIik7XG5cdFx0aWYgKG9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkgZGVidWcoXCJOT1RFOiBrZWVwT3V0c2lkZVZpZXdwb3J0IGlzIG9ubHkgc3VwcG9ydGVkIHdpdGggY2FudmcgZXhwb3J0ZXIuXCIpO1xuXG5cdFx0c3dpdGNoICh0eXBlKSB7XG5cdFx0XHRjYXNlIFwiaW1hZ2Uvc3ZnK3htbFwiOlxuXHRcdFx0XHRyZXR1cm4gZXhwb3J0U1ZHKCk7XG5cdFx0XHRjYXNlIFwiaW1hZ2UvcG5nXCI6XG5cdFx0XHRjYXNlIFwiaW1hZ2UvanBlZ1wiOlxuXHRcdFx0Y2FzZSBcImphdmFzY3JpcHRcIjpcblx0XHRcdFx0aWYgKCFvcHRpb25zLnJlbmRlcmVyKSB7XG5cdFx0XHRcdFx0aWYgKHdpbmRvdy5jYW52Zykgb3B0aW9ucy5yZW5kZXJlciA9IFwiY2FudmdcIjtcblx0XHRcdFx0XHRlbHNlIG9wdGlvbnMucmVuZGVyZXI9XCJuYXRpdmVcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRzd2l0Y2ggKG9wdGlvbnMucmVuZGVyZXIpIHtcblx0XHRcdFx0XHRjYXNlIFwiY2FudmdcIjpcblx0XHRcdFx0XHRcdGRlYnVnKFwidXNpbmcgY2FudmcgcmVuZGVyZXIgZm9yIFwiICsgdHlwZSArIFwiIGltYWdlIGV4cG9ydFwiKTtcblx0XHRcdFx0XHRcdHJldHVybiBleHBvcnRJbWFnZUNhbnZnKHR5cGUpO1xuXHRcdFx0XHRcdGNhc2UgXCJuYXRpdmVcIjpcblx0XHRcdFx0XHRcdGRlYnVnKFwidXNpbmcgbmF0aXZlIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBleHBvcnQuIFRISVMgTUlHSFQgRkFJTC5cIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2UodHlwZSk7XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdGRlYnVnKFwidW5rbm93biBpbWFnZSByZW5kZXJlciBnaXZlbiwgZG9pbmcgbm90aW5nIChcIiArIG9wdGlvbnMucmVuZGVyZXIgKyBcIilcIik7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRkZWJ1ZyhcIlNvcnJ5ISBFeHBvcnRpbmcgYXMgJ1wiICsgdHlwZSArIFwiJyBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XG5cdHJlbmRlcigpIHtcblx0XHRsZXQgcmVzdWx0ID0gc3VwZXIucmVuZGVyKCk7XG5cdFx0aWYgKHJlc3VsdCkge1xuXHRcdFx0bGV0IHJvb3QgPSB0aGlzLmdyYXBoLmN1cnJlbnRSb290O1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nKTtcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XG5cdFx0XHRidWYuYXBwZW5kKCc8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJykuYXBwZW5kKHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZCh0WzFdKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQodGhpcy5zY2FsZSkuYXBwZW5kKCcpXCI+Jyk7XG5cdFx0XHRidWYuYXBwZW5kKHRoaXMucmVuZGVyRGVmcygpKTtcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xuXHRcdFx0YnVmLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xuXHRcdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gYnVmLnRvU3RyaW5nKCk7XG5cdFx0XHR0aGlzLnN2ZyA9IHRoaXMuYm94LmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdH1cblx0fVxuXG5cdHJlbmRlckRlZnMoKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxkZWZzPicpO1xuXHRcdGJ1Zi5hcHBlbmQodGhpcy5nZXRUZW1wbGF0ZSgnR3JpZCcsIHRoaXMucHJvcChcImdyaWRTaXplXCIpKSk7XG5cdFx0bGV0IG1hcmtlcnMgPSB0aGlzLmdyYXBoLm1hcmtlcnM7XG5cdFx0aWYgKG1hcmtlcnMubGVuZ3RoID4gMClcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XG5cdFx0YnVmLmFwcGVuZCgnPC9kZWZzPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHJlZnJlc2goKSB7XG5cdFx0aWYgKCF0aGlzLnN2ZykgcmV0dXJuO1xuXHRcdGxldCBnID0gdGhpcy5zdmcucXVlcnlTZWxlY3RvcignZycpO1xuXHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XG5cdFx0Zy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRbMF0gKyAnLCcgKyB0WzFdICsgJylzY2FsZSgnICsgdGhpcy5zY2FsZSArICcpJyk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgc3RyMSwgc3RyMjtcblx0XHRtYXJrZXJzLmZvckVhY2goZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xuXHRcdFx0aWYgKCFfLmlzU3RyaW5nKHN0cjIpKVxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XG5cdFx0XHRidWYuYXBwZW5kKHN0cjEpO1xuXHRcdH0sIHRoaXMpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJMYWJlbChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5URU1QTEFURVNbJ0xhYmVsJ10oYm94KTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJTaGFwZShzaGFwZSkge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IHRoaXMuVEVNUExBVEVTW3NoYXBlLm5hbWVdO1xuXHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHNoYXBlKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRQYXRoRGF0YShzaGFwZSkge1xuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XG5cdFx0bGV0IGNvbnRyb2xQdHMgPSBzaGFwZS5jb250cm9sUHRzO1xuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xuXG5cdFx0aWYgKCFjb250cm9sUHRzICYmIHNoYXBlLnJvdW5kKSB7XG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xuXHRcdFx0Y29udHJvbFB0cyA9IFtdO1xuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxuXHRcdFx0XHRjb250cm9sUHRzWzIqaV0gPSBbbmV4dCwgbmV4dF07XG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcblx0XHRcdFx0ZDIgPSBuZXh0LmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHByZXYpLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcblx0XHRcdFx0cHJldiA9IG5leHQ7XG5cdFx0XHR9XG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcblx0XHR9XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHBvaW50ID0gcG9pbnRzW2ldO1xuXHRcdFx0aWYgKGkgPT0gMClcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xuXHRcdFx0XHRcdGZvciAobGV0IGogPSAwOyBqIDwgY29udHJvbFB0c1tpXS5sZW5ndGg7IGorKylcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fVxuXG5cdHN0YXRpYyByZW5kZXJMaW5rKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRsZXQgZCA9IFNWR1JlbmRlcmVyLmdldFBhdGhEYXRhKHNoYXBlKTtcblx0XHRpZiAoc2hhcGUuc2hvd0dhdWdlKVxuXHRcdFx0YnVmLmFwcGVuZCgnPHBhdGggc3R5bGU9XCJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDk7IHZpc2liaWxpdHk6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcIiBkPVwiJylcblx0XHRcdFx0LmFwcGVuZChkKS5hcHBlbmQoJ1wiLz4nKTtcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBkPVwiJykuYXBwZW5kKGQpLmFwcGVuZCgnXCInKTtcblx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIgfHwgc2hhcGUuZW5kTWFya2VyKSB7XG5cdFx0XHRidWYuYXBwZW5kKCcgc3R5bGU9XCInKTtcblx0XHRcdGlmIChzaGFwZS5zdGFydE1hcmtlcilcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLXN0YXJ0OiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLnN0YXJ0TWFya2VyKSA/IHNoYXBlLnN0YXJ0TWFya2VyIDogc2hhcGUuc3RhcnRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGlmIChzaGFwZS5lbmRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuZW5kTWFya2VyKSA/IHNoYXBlLmVuZE1hcmtlciA6IHNoYXBlLmVuZE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xuXHRcdFx0YnVmLmFwcGVuZCgnXCInKTtcblx0XHR9XG5cdFx0YnVmLmFwcGVuZCgnLz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XG5cdFx0cmV0dXJuIGVsO1xuXHR9XG5cblx0c3RhdGljIHRyYW5zZm9ybSh0cmFuc2Zvcm0pIHtcblx0XHRsZXQgdHJhbnNsYXRlID0gWzAsIDBdLCBzY2FsZSA9IDEuMDtcblx0XHQvL1xuXHRcdGxldCBwYXJ0cyA9IHRyYW5zZm9ybS5tYXRjaCgvdHJhbnNsYXRlXFwoXFxzKihbXildKykvKTtcblx0XHRpZiAocGFydHMpIHtcblx0XHRcdGxldCBtID0gcGFydHNbMV0udHJpbSgpLm1hdGNoKC8oW1xcZC4tXSspWyAsXShbXFxkLi1dKykvKTtcblx0XHRcdGlmIChtKSB7XG5cdFx0XHRcdHRyYW5zbGF0ZVswXSA9IHBhcnNlRmxvYXQobVsxXSkgfHwgMDtcblx0XHRcdFx0dHJhbnNsYXRlWzFdID0gcGFyc2VGbG9hdChtWzJdKSB8fCAwO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdHRyYW5zbGF0ZVswXSA9IHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQocGFydHNbMV0pO1xuXHRcdH1cblx0XHRwYXJ0cyA9IHRyYW5zZm9ybS5tYXRjaCgvc2NhbGVcXChcXHMqKFteKV0rKS8pO1xuXHRcdGlmIChwYXJ0cylcblx0XHRcdHNjYWxlID0gcGFyc2VGbG9hdChwYXJ0c1sxXSkgfHwgMS4wO1xuXG5cdFx0cmV0dXJuIHt0cmFuc2xhdGUsIHNjYWxlfTtcblx0fVxufVxuU1ZHUmVuZGVyZXIuVEVNUExBVEVTID0ge1xuXHQkcm9vdDogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiN7Y2hpbGRyZW59PC9nPicsXG5cdCRub2RlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgc3R5bGU9XCIke3N0eWxlfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCR7eH0sJHt5fSlcIj4je3NoYXBlfSN7bGFiZWx9PC9nPicsXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgc3R5bGU9XCIke3N0eWxlfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxuXHRSZWN0YW5nbGU6ICc8cmVjdCB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHJ4PVwiOVwiIHJ5PVwiOVwiLz4nLFxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXG5cdEhleGFnb246IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC80fSAke3dpZHRoLzJ9LCR7aGVpZ2h0LzR9IDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sJHtoZWlnaHQvNH0gJHstd2lkdGgvMn0sJHstaGVpZ2h0LzR9XCIvPic7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XG5cdH0sXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xuXHRcdHNoYXBlLnBvaW50cy5mb3JFYWNoKGZ1bmN0aW9uKHB0KXtcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XG5cdFx0fSk7XG5cdFx0YnVmLnJlbW92ZUxhc3QoKTtcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9LFxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+Jztcblx0fSxcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcblx0XHRyZXR1cm4gYFxuPG1hcmtlciBpZD1cIiR7bWFya2VyLmlkfVwiIG1hcmtlcldpZHRoPVwiJHttYXJrZXIuc2l6ZX1cIiBtYXJrZXJIZWlnaHQ9XCIke21hcmtlci5zaXplfVwiIHJlZng9XCIke21hcmtlci5yZWZbMF19XCIgXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cInN0cm9rZTogJHttYXJrZXIuZmlsbH07ZmlsbDoke21hcmtlci5maWxsfVwiYCA6ICcnfT4je3NoYXBlfTwvbWFya2VyPlxuYC50cmltKCk7XG5cdH0sXG5cdEdyaWQ6IGZ1bmN0aW9uKHNpemUpIHtcblx0XHRyZXR1cm4gYFxuPHBhdHRlcm4gaWQ9XCJHcmlkUGF0dGVyblwiIHdpZHRoPVwiJHtzaXplfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cbjwvcGF0dGVybj5gLnRyaW0oKTtcblx0fSxcblx0TGFiZWw6IF8udGVtcGxhdGUoYFxuPCUgdmFyIGJveCA9IF8uaGFzKGRhdGEsIFwiZHhcIikgPyBkYXRhIDogKGRhdGEuZ2V0TGFiZWxCb3ggPyBkYXRhLmdldExhYmVsQm94KCkgOiBudWxsKTsgXG4gICBpZiAoYm94KSB7JT5cblx0PGcgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5jbGFzcykgeyU+Y2xhc3M9XCI8JT1ib3guY29uZmlnLmNsYXNzJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLm5zKSB7JT5ucz1cIjwlPWJveC5jb25maWcubnMlPlwiPCV9JT5cXFxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuaW5saW5lU3R5bGUpIHslPlxcXG5cdFx0XHRmb250LXNpemU9XCI8JT1ib3guY29uZmlnLmZvbnRTaXplJT5cIlxcXG5cdFx0XHRmb250LWZhbWlseT1cIjwlPWJveC5jb25maWcuZm9udEZhbWlseSU+XCJcXFxuXHRcdFx0Zm9udC13ZWlnaHQ9XCI8JSBpZiAoYm94LmJvbGQpIHslPmJvbGQ8JX0gZWxzZSB7JT5ub3JtYWw8JX0lPlwiXFxcblx0XHRcdDwlIGlmIChib3gudW5kZXJsaW5lKSB7JT50ZXh0LWRlY29yYXRpb249XCJ1bmRlcmxpbmVcIjwlfSU+XFxcblx0XHRcdDwlIGlmIChib3guaXRhbGljKSB7JT5mb250LXN0eWxlPVwiaXRhbGljXCI8JX0lPlxcXG5cdFx0PCV9JT5cXFxuXHRcdHRleHQtYW5jaG9yPVwiPCU9Ym94LmFuY2hvciU+XCJcXFxuXHRcdHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg8JT1ib3guYm91bmRzLnglPiw8JT1ib3guYm91bmRzLnklPik8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnJvdGF0aW9uKSB7JT5yb3RhdGUoPCU9Ym94LmNvbmZpZy5yb3RhdGlvbiU+IDwlPWJveC5waXZvdFswXSU+IDwlPWJveC5waXZvdFsxXSU+KTwlfSU+XCI+XG5cdDwlIGlmIChib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSkgeyU+XG5cdFx0PHJlY3QgeD1cIjwlPS1ib3guYm91bmRzLndpZHRoLzIlPlwiIHk9XCI8JT0tYm94LmJvdW5kcy5oZWlnaHQvMiU+XCIgd2lkdGg9XCI8JT1ib3guYm91bmRzLndpZHRoJT5cIiBoZWlnaHQ9XCI8JT1ib3guYm91bmRzLmhlaWdodCU+XCIgc3R5bGU9XCI8JT1ib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSU+XCIvPlxuXHQ8JSB9IGlmIChfLmlzQXJyYXkoYm94LmxhYmVsKSkgeyBcblx0XHRfLmVhY2goYm94LmxhYmVsLCBmdW5jdGlvbih2YWx1ZSwgbGluZSkgeyU+XG5cdFx0XHQ8dGV4dCA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnRleHRTdHlsZSkgeyU+c3R5bGU9XCI8JT1ib3guY29uZmlnLnRleHRTdHlsZSU+XCI8JX0lPlxcXG5cdFx0XHRcdGR4PVwiPCU9Ym94LmR4JT5cIiBkeT1cIjwlPWJveC5keSArIGJveC5saW5lSGVpZ2h0ICogbGluZSU+XCI+PCU9dmFsdWUlPjwvdGV4dD5cblx0XHQ8JX0pO30gZWxzZSB7ICU+XG5cdFx0XHQ8dGV4dD48JT1ib3gubGFiZWwlPjwvdGV4dD5cblx0XHQ8JX0lPlxuXHRcdDwlIGlmIChib3guY29uZmlnLnRpdGxlKSB7JT5cblx0XHRcdDx0aXRsZT48JT1ib3guY29uZmlnLnRpdGxlJT48L3RpdGxlPlxuXHRcdDwlfSU+XG5cdDwvZz5cbjwlfSU+XG5gLnRyaW0oKSwge3ZhcmlhYmxlOiBcImRhdGFcIn0pICAgLy9UT0RPIGFkZCBtb3JlIGlubGluZSB0ZXh0IHN0eWxlcy5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNWR1JlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9TVkdSZW5kZXJlci5qc1xuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=