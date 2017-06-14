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
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _Rhombus = __webpack_require__(11);
	
	var _Rhombus2 = _interopRequireDefault(_Rhombus);
	
	var _Link = __webpack_require__(12);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _bean = __webpack_require__(13);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _EventDispatcher = __webpack_require__(14);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _Graph = __webpack_require__(16);
	
	var _Graph2 = _interopRequireDefault(_Graph);
	
	var _Cell = __webpack_require__(18);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Node = __webpack_require__(17);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(21);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Layout = __webpack_require__(23);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _FlowLayout = __webpack_require__(24);
	
	var _FlowLayout2 = _interopRequireDefault(_FlowLayout);
	
	var _Label = __webpack_require__(20);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Marker = __webpack_require__(22);
	
	var _Marker2 = _interopRequireDefault(_Marker);
	
	var _Renderer = __webpack_require__(25);
	
	var _Renderer2 = _interopRequireDefault(_Renderer);
	
	var _SVGRenderer = __webpack_require__(29);
	
	var _SVGRenderer2 = _interopRequireDefault(_SVGRenderer);
	
	var _GraphBehavior = __webpack_require__(26);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _SelectionBehavior = __webpack_require__(28);
	
	var _SelectionBehavior2 = _interopRequireDefault(_SelectionBehavior);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	_Shape2.default.addShape("Rectangle", _Rectangle2.default);
	_Shape2.default.addShape("Ellipse", _Ellipse2.default);
	_Shape2.default.addShape("Rhombus", _Rhombus2.default);
	
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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 3 */
/***/ (function(module, exports) {

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

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

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
	
				var tx = void 0,
				    ty = void 0;
	
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

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Shape2 = __webpack_require__(6);
	
	var _Shape3 = _interopRequireDefault(_Shape2);
	
	var _Point = __webpack_require__(3);
	
	var _Point2 = _interopRequireDefault(_Point);
	
	var _Line = __webpack_require__(9);
	
	var _Line2 = _interopRequireDefault(_Line);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Rhombus = function (_Shape) {
		_inherits(Rhombus, _Shape);
	
		function Rhombus() {
			_classCallCheck(this, Rhombus);
	
			return _possibleConstructorReturn(this, (Rhombus.__proto__ || Object.getPrototypeOf(Rhombus)).apply(this, arguments));
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
				var py = pt.y;
	
				// Special case for intersecting the diamond's corners
				if (cx === px) {
					if (cy > py) {
						return { point: new _Point2.default(cx, y), direction: _Point2.default.S };
						// top
					} else {
						return { point: new _Point2.default(cx, y + h), direction: _Point2.default.N };
						// bottom
					}
				} else if (cy === py) {
					if (cx > px) {
						return { point: new _Point2.default(x, cy), direction: _Point2.default.E };
						// left
					} else {
						return { point: new _Point2.default(x + w, cy), direction: _Point2.default.W };
						// right
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
	
				var p = void 0,
				    dir = void 0;
				// TODO direction calculation is not quite right.
				// In which quadrant will the intersection be?
				// set the slope and offset of the border line accordingly
				if (px < cx) {
					if (py < cy) {
						p = _Line2.default.intersection(px, py, tx, ty, cx, y, x, cy);
						dir = _Point2.default.S;
					} else {
						p = _Line2.default.intersection(px, py, tx, ty, cx, y + h, x, cy);
						dir = _Point2.default.N;
					}
				} else if (py < cy) {
					p = _Line2.default.intersection(px, py, tx, ty, cx, y, x + w, cy);
					dir = _Point2.default.E;
				} else {
					p = _Line2.default.intersection(px, py, tx, ty, cx, y + h, x + w, cy);
					dir = _Point2.default.W;
				}
				return { point: p, direction: dir };
			}
		}]);
	
		return Rhombus;
	}(_Shape3.default);
	
	exports.default = Rhombus;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

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
	   * Calculate the position where to put decorators or label..
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
				if (this.startNormal.x === 0) {
					pts[1][0] = new _Point2.default(s.x, (s.y + e.y) / 2);
				} else {
					pts[1][0] = new _Point2.default((s.x + e.x) / 2, s.y);
				}
				if (this.endNormal.x === 0) {
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
				step: 1,
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
				var side = void 0,
				    side2 = void 0,
				    d = void 0,
				    box = void 0,
				    intersect = void 0,
				    j = void 0;
				var channel = void 0,
				    channel2 = void 0,
				    pt = void 0,
				    dir = void 0;
	
				var startPadding = 0,
				    endPadding = void 0;
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
				var dir = void 0;
				var p = void 0;
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
				    box2 = void 0;
				var pt = void 0,
				    i = void 0;
				var channel = {},
				    l = void 0,
				    t = void 0,
				    b = void 0,
				    r = void 0;
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
				var dir = void 0,
				    l = void 0,
				    pt = void 0;
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
					    node = void 0,
					    startBox = void 0,
					    endBox = void 0;
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
					for (var _i = 1; _i < pos.length - 2; _i++) {
						var range = this.randomNoise / this.step;
						var randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
						this._moveSegment(pos, _i, randomNumber, 1, 1);
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
				var startBufferNormal = void 0,
				    endBufferNormal = void 0;
				var pts = void 0;
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
				var box = void 0,
				    side = void 0,
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
				var h2 = void 0;
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

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

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


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(13);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _KeyUtils = __webpack_require__(15);
	
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
	
	/**
	 * The EventDispatcher is the central event management. It will monitor all events and translate it into the a higher
	 * level events for consumption.
	 */
	
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
						// Create drag object.
						var dragObject = { data: data, pos: ns == 'root' ? EventDispatcher.mouse(this.root, event) : pos };
						this.dragging = false;
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

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Node = __webpack_require__(17);
	
	var _Node2 = _interopRequireDefault(_Node);
	
	var _Edge = __webpack_require__(21);
	
	var _Edge2 = _interopRequireDefault(_Edge);
	
	var _Marker = __webpack_require__(22);
	
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
	   * @param config
	   * @param parent
	   * @param pos
	   * @returns {*}
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
				var from = arguments[2];
				var to = arguments[3];
	
				var EdgeClass = Graph.getJSClass(config, _Edge2.default);
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

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Cell2 = __webpack_require__(18);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * A Node represents vertex of the graph.
	 */
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
				if (this.children) {
					var buf = new _StringBuffer2.default();
					_lodash2.default.forEach(this.children, function (child) {
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

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _Cache = __webpack_require__(19);
	
	var _Cache2 = _interopRequireDefault(_Cache);
	
	var _StringBuffer = __webpack_require__(8);
	
	var _StringBuffer2 = _interopRequireDefault(_StringBuffer);
	
	var _Shape = __webpack_require__(6);
	
	var _Shape2 = _interopRequireDefault(_Shape);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Label = __webpack_require__(20);
	
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

/***/ }),
/* 19 */
/***/ (function(module, exports) {

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

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(13);
	
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
	
		// This is the inline editor for editing label text in place.
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
	
				// remove the input
				this.input.parentNode.removeChild(this.input);
	
				if (!cancel) _bean2.default.fire(this, 'editor.update', [this.key, this.input.value]);
	
				_bean2.default.fire(this, 'editor.stop', [this.key]);
	
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

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _Cell2 = __webpack_require__(18);
	
	var _Cell3 = _interopRequireDefault(_Cell2);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Link = __webpack_require__(12);
	
	var _Link2 = _interopRequireDefault(_Link);
	
	var _Label = __webpack_require__(20);
	
	var _Label2 = _interopRequireDefault(_Label);
	
	var _Cache = __webpack_require__(19);
	
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

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
			marker.shape = {
				name: 'Polygon',
				points: [[-4, 0], [0, 4], [4, 0], [0, -4]]
			};;
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

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

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

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Layout2 = __webpack_require__(23);
	
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

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(5);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _bean = __webpack_require__(13);
	
	var _bean2 = _interopRequireDefault(_bean);
	
	var _Utils = __webpack_require__(2);
	
	var _Utils2 = _interopRequireDefault(_Utils);
	
	var _DomUtils = __webpack_require__(7);
	
	var _DomUtils2 = _interopRequireDefault(_DomUtils);
	
	var _Layout = __webpack_require__(23);
	
	var _Layout2 = _interopRequireDefault(_Layout);
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _EventDispatcher = __webpack_require__(14);
	
	var _EventDispatcher2 = _interopRequireDefault(_EventDispatcher);
	
	var _GraphBehavior = __webpack_require__(26);
	
	var _GraphBehavior2 = _interopRequireDefault(_GraphBehavior);
	
	var _SelectionBehavior = __webpack_require__(28);
	
	var _SelectionBehavior2 = _interopRequireDefault(_SelectionBehavior);
	
	var _Label = __webpack_require__(20);
	
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
	
			_bean2.default.on(_Label2.default.editor, 'editor.update.*', _lodash2.default.bind(function (key, value) {
				//this.graph.nodes[key].prop('label', value);
				//this.render();
				console.log(key + '=' + value);
			}, this));
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
					this.dispatcher.register([/^mousedown/, /^zoom/], function (type, ns, target, pos, event) {
						if (!_DomUtils2.default.eventFromInput(event)) {
							_Label2.default.editor.stop();
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

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _Behavior2 = __webpack_require__(27);
	
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

/***/ }),
/* 27 */
/***/ (function(module, exports) {

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

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	var _Rectangle = __webpack_require__(4);
	
	var _Rectangle2 = _interopRequireDefault(_Rectangle);
	
	var _Cell = __webpack_require__(18);
	
	var _Cell2 = _interopRequireDefault(_Cell);
	
	var _Behavior2 = __webpack_require__(27);
	
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

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

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
	
	var _Renderer2 = __webpack_require__(25);
	
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
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\t<% if (box.config && box.config.inlineStyle) {%>\t\t\tfont-size=\"<%=box.config.fontSize%>\"\t\t\tfont-family=\"<%=box.config.fontFamily%>\"\t\t\tfont-weight=\"<% if (box.bold) {%>bold<%} else {%>normal<%}%>\"\t\t\t<% if (box.underline) {%>text-decoration=\"underline\"<%}%>\t\t\t<% if (box.italic) {%>font-style=\"italic\"<%}%>\t\t<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundStyle) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t\t<% if (box.config.title) {%>\n\t\t\t<title><%=box.config.title%></title>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" } //TODO add more inline text styles.
		) };
	
	exports.default = SVGRenderer;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4NWVkZTUxZTMwOTQ2YjIwYzBjOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmhvbWJ1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZFNoYXBlIiwiRXZlbnRzIiwiQmFzZTY0IiwiQ2FjaGUiLCJVdGlscyIsIkRvbVV0aWxzIiwiU3RyaW5nQnVmZmVyIiwiUG9pbnQiLCJMaW5lIiwiU2hhcGUiLCJSZWN0YW5nbGUiLCJFbGxpcHNlIiwiTGluayIsIkV2ZW50RGlzcGF0Y2hlciIsIkxhYmVsIiwiTWFya2VyIiwiR3JhcGgiLCJDZWxsIiwiTm9kZSIsIkVkZ2UiLCJMYXlvdXQiLCJGbG93TGF5b3V0IiwiUmVuZGVyZXIiLCJTVkdSZW5kZXJlciIsIkdyYXBoQmVoYXZpb3IiLCJTZWxlY3Rpb25CZWhhdmlvciIsIl9rZXlTdHIiLCJlbmNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJhZGRFdmVudEhhbmRsZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsIl9kZWJ1Z2dpbmciLCJfZGVidWdBbGwiLCJ0eXBlUmVnaXN0cnkiLCJzcGxpY2UiLCJBcnJheSIsInR5cGUiLCJuYW1lc3BhY2UiLCJuYW1lIiwiTWFwIiwiZ2V0Iiwic2V0IiwiY3JlYXRlVHlwZSIsInByb3BzIiwiZGVmYXVsdFR5cGUiLCJleHRlbmQiLCJleHRlbmRzIiwiY29uZmlnIiwiXyIsImFzc2lnbiIsInByb3RvdHlwZSIsInR5cGVOYW1lIiwibG9nIiwiYnVpbGRUeXBlcyIsInR5cGVzIiwicmVtb3ZlIiwiZGVmYXVsdHNEZWVwIiwiZm9yRWFjaCIsImNoaWxkIiwicGFyZW50IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiU3Vycm9nYXRlIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiaW5pdENvbmZpZyIsIm9iaiIsImNBcnIiLCJzdXBlciIsImFwcGx5IiwiREVGQVVMVFMiLCJwcm9wIiwidmFsdWUiLCJnZXRDb25zdHJ1Y3RvciIsImpzQ2xhc3MiLCJkZWZhdWx0Q2xhc3MiLCJpc1N0cmluZyIsImV2YWwiLCJkZWJ1ZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzdWJzdHJpbmciLCJpbmZvIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImJvdW5kcyIsImdlb21ldHJ5IiwieCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsInBvcyIsImFuY2hvclgiLCJvZmZzZXRYIiwiYW5jaG9yWSIsIm9mZnNldFkiLCJ1bnNjYWxlIiwidCIsInNjYWxlIiwibyIsImdldFByb3BlcnR5IiwiaGFzIiwiaXNGdW5jdGlvbiIsImFQdCIsInNxcnQiLCJwMiIsImRpc3QiLCJkaXN0YW5jZSIsImFuZ2xlIiwiY29zIiwiUEkiLCJzaW4iLCJjbG9uZSIsInJvdGF0ZSIsInJlY3QiLCJ2ZXJ0aWNhbCIsIlciLCJOIiwiUyIsIkUiLCJORSIsIk5XIiwiU0UiLCJTVyIsImVsIiwidyIsImgiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwdCIsImNvbnRhaW5zIiwicHQxIiwicHQyIiwiaG9yaXpvbnRhbCIsImNvbnRhaW5zMSIsImNvbnRhaW5zMiIsIm91dFB0Iiwib3J0aG9nb25hbCIsImR4IiwiZHkiLCJhbHBoYSIsImF0YW4yIiwicCIsInBpIiwicGkyIiwiYmV0YSIsInRhbiIsImRpciIsImdldERpcmVjdGlvbiIsInBvaW50IiwiZGlyZWN0aW9uIiwicHRzIiwibWFyZ2luIiwiaXNBcnJheSIsIm1pbiIsIm1heCIsInJlY3RzIiwibWlueCIsIm1pbnkiLCJtYXh4IiwiSW5maW5pdHkiLCJtYXh5IiwiZWFjaCIsInIiLCJyZWdpc3RyeSIsImRlZmF1bHRzIiwicmVmUHQiLCJnZXRQZXJpbWV0ZXIiLCJ2aWV3IiwidGVtcGxhdGUiLCJnZXRUZW1wbGF0ZSIsImlzSUUiLCJzQWdlbnQiLCJ1c2VyQWdlbnQiLCJJZHgiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNGaXJlRm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc0Nocm9tZSIsInJhdyIsImlzTWFjIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImlzV2luZG93cyIsImFwcFZlcnNpb24iLCJpc0xpbnV4IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJodG1sIiwic2V0RWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnRCeVN0cmluZyIsInN0ciIsInRlbXAiLCJjaGlsZE5vZGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0ZXN0RWxlbWVudCIsIm5vZGUiLCJtZXRob2QiLCJub2RlVHlwZSIsImdldEFuY2VzdG9yQnkiLCJwYXJlbnROb2RlIiwiZ2V0UG9zaXRpb24iLCJjb250ZXh0IiwiYm9keSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRleHRSZWN0IiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJtb3ZlIiwiZ2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplIiwicHJlbG9hZEltYWdlcyIsImFycmF5IiwibGlzdCIsImxvYWRlZCIsImltZyIsInRoYXQiLCJJbWFnZSIsIm9ubG9hZCIsImluZGV4Iiwic3JjIiwiZ2V0SW1hZ2VJbmZvIiwiZG93bmxvYWRGaWxlIiwiZGF0YSIsIm1pbWUiLCJzcGxpdCIsImVuY29kZWQiLCJhdG9iIiwiZGVjb2RlVVJJIiwiR2V0QmxvYiIsIm1zU2F2ZUJsb2IiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiQmxvYiIsIm9wZW5JbWFnZSIsImltYWdlIiwibXlXaW5kb3ciLCJvcGVuIiwibXlEb2N1bWVudCIsImV2ZW50RnJvbUlucHV0IiwiZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJidWZmZXIiLCJzdHVmZiIsImNvbmNhdCIsInBvcCIsInNlcCIsImpvaW4iLCJzdGFydCIsImVuZCIsImwiLCJjb3NhIiwiZG90UHJvZHVjdCIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJkZW5vbSIsIm51bWVfYSIsIm51bWVfYiIsInVhIiwidWIiLCJpbnRlcnNlY3Rpb25YIiwiaW50ZXJzZWN0aW9uWSIsImEiLCJiIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0eCIsInR5IiwiZCIsImYiLCJnIiwiZGV0IiwieG91dDEiLCJ4b3V0MiIsInlvdXQxIiwieW91dDIiLCJkaXN0MSIsInBvdyIsImRpc3QyIiwieG91dCIsInlvdXQiLCJSaG9tYnVzIiwiaW50ZXJzZWN0aW9uIiwiZGVmYXVsdENvbmZpZyIsInNob3dHYXVnZSIsImRlZmF1bHRHZW9tZXRyeSIsImxpbmtUeXBlcyIsInRlcm1pbmFsVmlzdWFsIiwic2hhcGVDb25maWciLCJzdGFydE1hcmtlciIsImVuZE1hcmtlciIsInN0YXJ0Tm9ybWFsIiwiZW5kTm9ybWFsIiwicmVuZGVyTGluayIsImlzTnVtYmVyIiwicG9pbnRzIiwidHJhbnNsYXRlIiwiZ2V0U2NhbGVkIiwibGlua0NsYXNzIiwiRGlyZWN0TGluayIsIkJlemllckxpbmsiLCJjdHJscHRzIiwiY29udHJvbFB0cyIsInAxIiwicDMiLCJwNCIsInMiLCJFbnRpdHlSZWxhdGlvbnMiLCJzb3VyY2UiLCJQb3J0IiwiZ2V0Qm91bmRzIiwiZWRnZSIsImlzU291cmNlTGVmdCIsImlzVGFyZ2V0TGVmdCIsInJlc3VsdCIsImdldENlbnRlclkiLCJ4ZSIsInllIiwic2VnIiwic2VnbWVudCIsImRlcCIsImFyciIsIm1pZFkiLCJNYW5oYXR0YW4iLCJNSU5fQlVGRkVSIiwiYXV0b1JvdXRlIiwicmFuZG9tTm9pc2UiLCJzdGVwIiwibWF4Q2hhbm5lbFdpZHRoIiwiY29udGFpbmVyIiwiYm94ZXMiLCJzdGFydEJveCIsImVuZEJveCIsInNpZGUiLCJzaWRlMiIsImJveCIsImludGVyc2VjdCIsImoiLCJjaGFubmVsIiwiY2hhbm5lbDIiLCJzdGFydFBhZGRpbmciLCJlbmRQYWRkaW5nIiwiX2dldENoYW5uZWwiLCJfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24iLCJfZ2V0Um91dGVUZW5kZW5jeSIsIl9oYXNJbnRlcnNlY3Rpb24iLCJfbW92ZVNlZ21lbnQiLCJicmVha1B0IiwiX2dldFJvdXRlRGlyZWN0aW9uIiwiZ2V0Q2VudGVyIiwiYm94MSIsImJveDIiLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJnZXRUb3AiLCJnZXRUcmFuc2xhdGVkIiwicm91dGUiLCJfbWVyZ2VTZWdtZW50cyIsImdldENvbW1vbkFuY2VzdG9yIiwiZ2V0RGVzY2VuZGFudHMiLCJleGNsdWRlRnJvbVJvdXRpbmciLCJpc0FuY2VzdG9yIiwicmFuZ2UiLCJyYW5kb21OdW1iZXIiLCJmbG9vciIsInJhbmRvbSIsInN0YXJ0QnVmZmVyIiwiZW5kQnVmZmVyIiwic3RhcnRCdWZmZXJOb3JtYWwiLCJlbmRCdWZmZXJOb3JtYWwiLCJtaWRkbGUiLCJwcnVuZVB0cyIsImRldGVjdEludGVyc2VjdGlvbiIsInNhdmVkSW5kZXgiLCJzYXZlZFNpZGUiLCJoMSIsImgyIiwiZXF1YWxzIiwiS2V5VXRpbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJyb290Iiwiem9vbVNjYWxlIiwicm9vdE5TIiwiZ2V0QXR0cmlidXRlIiwibGlzdGVuZXJzIiwiZHJhZ2dpbmciLCJoYW5kbGVyIiwiYmluZCIsImhhbmRsZUV2ZW50Iiwic3RhcnRlZCIsImVudGVyU3RhY2siLCJvbiIsInN0YXJ0S2V5cyIsIm9mZiIsInN0b3BLZXlzIiwiZXZlbnQiLCJidWYiLCJucyIsInN0YWNrIiwiaXNSb290Iiwic3RhcnRzV2l0aCIsInJvb3RUYXJnZXQiLCJuc1RhcmdldCIsInByZXBlbmQiLCJ0YXJnZXRTdGFjayIsInRvU3RyaW5nIiwiaXNLZXlFdmVudCIsImdldEtleUV2ZW50IiwiZ2V0RXZlbnRJbmZvIiwid2hlZWxEZWx0YSIsImJ1dHRvbiIsImRyYWdPYmplY3QiLCJtb3VzZSIsImRyYWdQb3MiLCJtb3VzZW1vdmUiLCJjdXJyZW50UG9zIiwiZGlzcGF0Y2giLCJtb3VzZXVwIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZUVudGVyTGVhdmUiLCJsYXN0IiwiY2xlYXJFbnRlclN0YWNrIiwiayIsImdldE5TIiwidmFsIiwiYXBwZW5kIiwiaXRlbSIsIm5zVHlwZSIsInJlZ2V4cCIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJsYXN0UG9zaXRpb24iLCJyZWdpc3RlcktleSIsImdldEtleURhdGEiLCJjdHJsIiwiYWx0Iiwic2hpZnQiLCJtZXRhIiwiY29kZSIsInVucmVnaXN0ZXJLZXkiLCJ6SW5kZXgiLCJyZWdpc3RlciIsIlJlZ0V4cCIsInN0b3AiLCJyZWdpc3RlcmVkVHlwZSIsImNoYW5nZWRUb3VjaGVzIiwic3ZnIiwib3duZXJTVkdFbGVtZW50IiwiY3JlYXRlU1ZHUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1hdHJpeFRyYW5zZm9ybSIsImdldFNjcmVlbkNUTSIsImludmVyc2UiLCJjbGllbnRMZWZ0IiwiY2xpZW50VG9wIiwiS0VZIiwiQUxUIiwiQkFDS19TUEFDRSIsIkNBUFNfTE9DSyIsIkNPTlRST0wiLCJERUxFVEUiLCJET1dOIiwiRU5EIiwiRU5URVIiLCJFU0NBUEUiLCJIT01FIiwiTEVGVCIsIk1FVEEiLCJOVU1fTE9DSyIsIlBBR0VfRE9XTiIsIlBBR0VfVVAiLCJQQVVTRSIsIlBSSU5UU0NSRUVOIiwiUklHSFQiLCJTQ1JPTExfTE9DSyIsIlNISUZUIiwiU1BBQ0UiLCJUQUIiLCJVUCIsIktleWJvYXJkRXZlbnQiLCJrZXlDb2RlIiwid2hpY2giLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJtZXRhS2V5Iiwibm9kZURlZmF1bHRzIiwicm9sZSIsImRyYWdnYWJsZSIsInNlbGVjdGFibGUiLCJlZGl0YWJsZSIsInJlc2l6YWJsZSIsInNvdXJjZWFibGUiLCJ0YXJnZXRhYmxlIiwidmlzaWJsZSIsImVkZ2VEZWZhdWx0cyIsImlkIiwic2l6ZSIsImNvbG9yIiwidW5pcXVlSWQiLCJtb2RlbCIsIm5vZGVzIiwiZWRnZXMiLCJzZWxlY3Rpb24iLCJkZXN0cm95ZWQiLCJub2RlVHlwZXMiLCJlZGdlVHlwZXMiLCJtYXJrZXJzIiwibWFya2VyIiwibWFya2VyQ29uZmlnIiwiZ2V0TWFya2VyIiwibG9hZE1vZGVsIiwiY3VycmVudFJvb3QiLCJOb2RlQ2xhc3MiLCJnZXRKU0NsYXNzIiwiYWRkQ2hpbGQiLCJmcm9tIiwidG8iLCJFZGdlQ2xhc3MiLCJhZGROb2RlIiwiYWRkRWRnZSIsImNoaWxkcmVuIiwid2l0aG91dCIsImFsbG93RGFuZ2xpbmdFZGdlcyIsIm11bHRpQ29ubmVjdCIsInJlYWRPbmx5Iiwidmlld09ubHkiLCJncmFwaCIsImluRWRnZXMiLCJvdXRFZGdlcyIsInBvcnRzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwicG9ydE5hbWUiLCJlbmRQdCIsInNoYXBlIiwiZ2V0U2hhcGUiLCJsYWJlbCIsImRlY29yYXRvcnMiLCJjcmVhdGVEZWNvcmF0b3JzIiwidmlld3MiLCJ2aWV3UHJvcHMiLCJFcnJvciIsImlzVW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwiY29tcHV0ZWRDbGFzc05hbWUiLCJ2aWV3UHJvcCIsInNoYXBlQ2xhc3MiLCJnZXRWaWV3IiwiZ2V0TGFiZWxCb3giLCJyZW5kZXJMYWJlbCIsIl9jb21wdXRlZENsYXNzTmFtZSIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjYWNoZXMiLCJnZXRDYWNoZSIsImNsZWFyIiwibmFtZXNhcGNlIiwiRk9OVF9CT0xEIiwiRk9OVF9JVEFMSUMiLCJGT05UX1VOREVSTElORSIsIkZPTlRfU0hBRE9XIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udENvbG9yIiwicGFkZGluZyIsImxpbmVQYWRkaW5nIiwiYWxpZ24iLCJyb3RhdGlvbiIsInN0cmluZ01lYXN1cmVFbCIsIm1lYXN1cmVEaXYiLCJiYXNlbGluZURpdiIsImdldFN0cmluZ1NpemUiLCJtZW1vaXplIiwiYm9sZCIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsImRvYyIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb250V2VpZ2h0Iiwic3RydXQiLCJmaXJzdENoaWxkIiwiYmFzZWxpbmVIZWlnaHQiLCJvZmZzZXRUb3AiLCJiYXNlbGluZSIsIndyYXAiLCJtYXhXaWR0aCIsInNwYWNlU2l6ZSIsInNwYWNlIiwibGluZUhlaWdodCIsImxpbmVzIiwid29yZHMiLCJsaW5lIiwiY3VycmVudFdpZHRoIiwid29yZFdpZHRoIiwibmV3TGluZSIsIndvcmQiLCJsYWJlbENvbmZpZyIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiX2dldExhYmVsQm94IiwiY2FsbCIsImdldExhYmVsQm94Rm9yTGluayIsIndyYXBwZWRMYWJlbCIsImFuY2hvciIsInNldEFuY2hvclgiLCJwaXZvdCIsIm1heEJvdW5kcyIsIl9sYWJlbCIsInVuZGVybGluZSIsIml0YWxpYyIsInNoYWRvdyIsImVkaXRvciIsInJlZkVsIiwidGV4dEVsIiwic2luZ2xlTGluZSIsInVuc2VsZWN0YWJsZSIsIm92ZXJmbG93IiwiYm9yZGVyIiwiZm9jdXMiLCJzZWxlY3QiLCJmaXJlIiwiY2FuY2VsIiwic2V0U291cmNlIiwic291cmNlUG9zIiwic2V0VGFyZ2V0IiwidGFyZ2V0UG9zIiwic2V0VGVybWluYWwiLCJzZXRFZGdlQXQiLCJyZW1vdmVFZGdlIiwiYWRkT3V0RWRnZSIsImFkZEluRWRnZSIsImNlbnRlciIsInJlZlB0cyIsImdldFJlZmVyZW5jZVBvaW50cyIsInRlcm1pbmFscyIsImdldEJvdW5kIiwiZ2V0UG9ydCIsImdldExpbmsiLCJnZXRUZXJtaW5hbFZpc3VhbCIsImFycm93Iiwic2lnbiIsInZpZXdCb3giLCJyZWYiLCJmaWxsIiwidHJpYW5nbGUiLCJvdmFsIiwiZGlhbW9uZCIsImZhY3RvcnkiLCJvcmllbnRhdGlvbiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIml0ZW1zIiwib3duZXIiLCJnZXRMaW5rZWROb2RlcyIsImhnYXAiLCJ2Z2FwIiwiX2ZsUG9zIiwibW92ZVRvIiwidHJpZ2dlciIsInRhYmluZGV4IiwibGF5b3V0IiwibGF5b3V0Q2xhc3MiLCJfdHJhbnNsYXRlIiwiX3NjYWxlIiwiZGlzcGF0Y2hlciIsImdyYXBoQmVoYXZpb3IiLCJzZWxlY3Rpb25CZWhhdmlvciIsIm5vZGVCZWhhdmlvciIsImVkZ2VCZWhhdmlvciIsImNvbm5lY3Rpb25CZWhhdmlvciIsInNjYWxlZCIsInZpZXdwb3J0IiwiaXNOdWxsIiwidnAiLCJ0cmFuc2Zvcm0iLCJyZWZyZXNoIiwiX2dyYXBoIiwiaW5pdGlhbGl6ZUJlaGF2aW9ycyIsInJlbmRlck1hcmtlcnMiLCJfZmlyc3RTZWxlY3Rpb24iLCJfZGVsYXlFZGl0IiwiZGVsYXkiLCJwcmVwcm9jZXNzb3IiLCJURU1QTEFURVMiLCJwYXJ0cyIsInBhcnQiLCJ0cmltIiwiY2FtZWxDYXNlIiwiaW50ZXJwb2xhdGUiLCJncmlkU2l6ZSIsImdCb3VuZHMiLCJ2Qm91bmRzIiwicGFyc2VGbG9hdCIsImRlZmF1bHRDbGlja01vZGUiLCJoaWRlT3V0bGluZSIsInNpbmdsZVNlbGVjdCIsImdyaWRFbmFibGVkIiwiZ3VpZGVzRW5hYmxlZCIsIm1heFpvb20iLCJtaW5ab29tIiwiem9vbUZhY3RvciIsIm1hc2tPcGFjaXR5IiwicmVuZGVyZXIiLCJoYW5kbGVEcmFnIiwiaGFuZGxlWm9vbSIsInBhbiIsIkJlaGF2aW9yIiwic2VsZWN0Q2VsbCIsInVuc2VsZWN0Q2VsbCIsImhhbmRsZU11bHRpU2VsZWN0Iiwic2VsZWN0ZWROb2RlcyIsInNlbGVjdGVkTGlua3MiLCJhdHRhY2hlZExpbmtzIiwiY2xhc3NlZCIsInNlbGVjdGVkVmVydGljZXMiLCJnZXRTaGFwZXMiLCJnZXRBdHRhY2hlZEVkZ2VzIiwic2VsZWN0ZWRFZGdlcyIsImNlbGwiLCJ0b2dnbGUiLCJpc1NlbGVjdGVkIiwiZDMiLCJkYXRhVGFyZ2V0IiwibW92ZVRvRnJvbnQiLCJzZXRTZWxlY3Rpb24iLCJ1dGlsIiwic3RhcnRQdCIsImdldEJvdW5kaW5nUmVjdGFuZ2xlIiwicnViYmVyYmFuZCIsImFwcGVuZE5vZGUiLCJnZXRDZWxsTGF5ZXIiLCJjZWxscyIsImdldEN1cnJlbnRSb290IiwiZmlsdGVyIiwiYXR0ciIsIk5TIiwiU1ZHRWxlbWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImRlZmluZVByb3BlcnRpZXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiJG5vZGUiLCIkdGVtcCIsImNsb25lTm9kZSIsIm91dGVySFRNTCIsInJvcGVuIiwibm9kZU5hbWUiLCJyY2xvc2UiLCJtYXJrdXAiLCJsYXN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRvRGF0YVVSTCIsIm9wdGlvbnMiLCJfc3ZnIiwibXNnIiwiZXhwb3J0U1ZHIiwic3ZnX3htbCIsInN2Z19kYXRhdXJsIiwiYmFzZTY0ZGF0YVVSTGVuY29kZSIsImI2NCIsImJ0b2EiLCJleHBvcnRJbWFnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzdmdfaW1nIiwiZHJhd0ltYWdlIiwiaW1hZ2VfZGF0YXVybCIsIm9uZXJyb3IiLCJleHBvcnRJbWFnZUNhbnZnIiwiY2FudmciLCJ4Y2FudmFzIiwianNDYW52YXMiLCJrZWVwT3V0c2lkZVZpZXdwb3J0IiwiYmJveCIsImdldEJCb3giLCJjb21waWxlIiwia2VlcE5vblNhZmUiLCJyZW5kZXJEZWZzIiwicXVlcnlTZWxlY3RvciIsInN0cjEiLCJzdHIyIiwicmVuZGVyU2hhcGUiLCJyb3VuZCIsIm5ld1B0cyIsInByZXYiLCJuZXh0IiwiZDEiLCJkMiIsImNvcm5lciIsImdldFBhdGhEYXRhIiwiY29udGVudCIsIm0iLCIkcm9vdCIsIiRlZGdlIiwiVHJpYW5nbGUiLCJIZXhhZ29uIiwiUG9seWdvbiIsInJlbW92ZUxhc3QiLCJHcmlkIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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c0I7QUEyQnZCclIsVUFBUSxnQkFBU2lqQixNQUFULEVBQWlCO0FBQ3hCLFVBQU8scUJBQ0tBLE9BQU9aLEVBRFoseUJBQ2dDWSxPQUFPWCxJQUR2QywwQkFDOERXLE9BQU9YLElBRHJFLGtCQUNvRlcsT0FBTzRJLEdBQVAsQ0FBVyxDQUFYLENBRHBGLG9CQUVENUksT0FBTzRJLEdBQVAsQ0FBVyxDQUFYLENBRkMscUNBRXdDNUksT0FBTzJJLE9BQVAsQ0FBZXJsQixDQUZ2RCxTQUU0RDBjLE9BQU8ySSxPQUFQLENBQWVqbEIsQ0FGM0UsU0FFZ0ZzYyxPQUFPMkksT0FBUCxDQUFlbGxCLEtBRi9GLFNBRXdHdWMsT0FBTzJJLE9BQVAsQ0FBZWhsQixNQUZ2SCw0Q0FHc0JxYyxPQUFPNkksSUFBUCx3QkFBZ0M3SSxPQUFPNkksSUFBdkMsY0FBb0Q3SSxPQUFPNkksSUFBM0QsVUFBcUUsRUFIM0YsNEJBSVAyQyxJQUpPLEVBQVA7QUFLQSxHQWpDc0I7QUFrQ3ZCaUgsUUFBTSxjQUFTcFQsSUFBVCxFQUFlO0FBQ3BCLFVBQU8sNENBQzBCQSxJQUQxQixvQkFDMkNBLElBRDNDLHlJQUdjQSxJQUhkLGlFQUlPQSxJQUpQLDBFQUtPQSxJQUxQLGdCQUtvQkEsSUFMcEIsMERBTUdtTSxJQU5ILEVBQVA7QUFPQSxHQTFDc0I7QUEyQ3ZCMXVCLFNBQU8saUJBQUUrTCxRQUFGLENBQVcsODlDQTRCakIyaUIsSUE1QmlCLEVBQVgsRUE0QkUsRUFBQ2tILFVBQVUsTUFBWCxFQTVCRixDQTRCd0I7QUE1QnhCLEdBM0NnQixFQUF4Qjs7bUJBMEVlbjFCLFciLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODVlZGU1MWUzMDk0NmIyMGMwYzgiLCJpbXBvcnQgQmFzZTY0IGZyb20gXCIuL3V0aWwvYmFzZTY0XCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcbmltcG9ydCBSaG9tYnVzIGZyb20gXCIuL2dlb21ldHJ5L1Job21idXNcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZ3JhcGgvR3JhcGhcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL2dyYXBoL0NlbGxcIjtcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcbmltcG9ydCBFZGdlIGZyb20gXCIuL2dyYXBoL0VkZ2VcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi92aWV3L0xhYmVsXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuL3ZpZXcvTWFya2VyXCI7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9SZW5kZXJlclwiO1xuaW1wb3J0IFNWR1JlbmRlcmVyIGZyb20gXCIuL3ZpZXcvU1ZHUmVuZGVyZXJcIjtcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3JcIjtcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvclwiO1xuXG5TaGFwZS5hZGRTaGFwZShcIlJlY3RhbmdsZVwiLCBSZWN0YW5nbGUpO1xuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xuU2hhcGUuYWRkU2hhcGUoXCJSaG9tYnVzXCIsIFJob21idXMpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG5cdEV2ZW50cyxcblx0QmFzZTY0LFxuXHRDYWNoZSxcblx0VXRpbHMsXG5cdERvbVV0aWxzLFxuXHRTdHJpbmdCdWZmZXIsXG5cdFBvaW50LFxuXHRMaW5lLFxuXHRTaGFwZSxcblx0UmVjdGFuZ2xlLFxuXHRFbGxpcHNlLFxuXHRMaW5rLFxuXHRFdmVudERpc3BhdGNoZXIsXG5cdExhYmVsLFxuXHRNYXJrZXIsXG5cdEdyYXBoLFxuXHRDZWxsLFxuXHROb2RlLFxuXHRFZGdlLFxuXHRMYXlvdXQsXG5cdEZsb3dMYXlvdXQsXG5cdFJlbmRlcmVyLFxuXHRTVkdSZW5kZXJlcixcblx0R3JhcGhCZWhhdmlvcixcblx0U2VsZWN0aW9uQmVoYXZpb3Jcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCIvLyBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9qYXZhc2NyaXB0LWJhc2U2NC5odG1sXG5cbnZhciBCYXNlNjQgPSB7XG5cblx0Ly8gcHJpdmF0ZSBwcm9wZXJ0eVxuXHRfa2V5U3RyIDogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG5cdGVuY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuXHRcdHZhciBpID0gMDtcblxuXHRcdGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XG5cblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG5cdFx0XHRjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXHRcdFx0Y2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblx0XHRcdGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cblx0XHRcdGVuYzEgPSBjaHIxID4+IDI7XG5cdFx0XHRlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcblx0XHRcdGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcblx0XHRcdGVuYzQgPSBjaHIzICYgNjM7XG5cblx0XHRcdGlmIChpc05hTihjaHIyKSkge1xuXHRcdFx0XHRlbmMzID0gZW5jNCA9IDY0O1xuXHRcdFx0fSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuXHRcdFx0XHRlbmM0ID0gNjQ7XG5cdFx0XHR9XG5cblx0XHRcdG91dHB1dCA9IG91dHB1dCArXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH0sXG5cblx0Ly8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2Rpbmdcblx0ZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0dmFyIG91dHB1dCA9IFwiXCI7XG5cdFx0dmFyIGNocjEsIGNocjIsIGNocjM7XG5cdFx0dmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG5cdFx0dmFyIGkgPSAwO1xuXG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XG5cblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG5cdFx0XHRlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXHRcdFx0ZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblx0XHRcdGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cdFx0XHRlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG5cdFx0XHRjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcblx0XHRcdGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcblx0XHRcdGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cblx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cblx0XHRcdGlmIChlbmMzICE9IDY0KSB7XG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW5jNCAhPSA2NCkge1xuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0b3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xuXG5cdFx0cmV0dXJuIG91dHB1dDtcblxuXHR9LFxuXG5cdC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xuXHRfdXRmOF9lbmNvZGUgOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO1xuXHRcdHZhciB1dGZ0ZXh0ID0gXCJcIjtcblxuXHRcdGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XG5cblx0XHRcdHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG5cblx0XHRcdGlmIChjIDwgMTI4KSB7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdXRmdGV4dDtcblx0fSxcblxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2Rpbmdcblx0X3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHtcblx0XHR2YXIgc3RyaW5nID0gXCJcIjtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIGMgPSBjMSA9IGMyID0gMDtcblxuXHRcdHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkge1xuXG5cdFx0XHRjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZigoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG5cdFx0XHRcdGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xuXHRcdFx0XHRjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG5cdFx0XHRcdGkgKz0gMztcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvYmFzZTY0LmpzIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuLi9nZW9tZXRyeS9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbi8vIGJlYW4gcmVxdWlyZXMgdGhlIGV4aXN0ZW5jZSBvZiB3aW5kb3dcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuXHRnbG9iYWwud2luZG93ID0geyBhZGRFdmVudEhhbmRsZXI6IGZ1bmN0aW9uKCkge30gfTtcblx0Z2xvYmFsLmRvY3VtZW50ID0ge307XG5cdGdsb2JhbC5uYXZpZ2F0b3IgPSB7fTtcbn1cblxuLy8gdXRpbCB2YXJpYWJsZXNcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xuXG4vKipcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0dHlwZTogZnVuY3Rpb24gKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSkge1xuXHRcdGlmICghdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0pXG5cdFx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSA9IG5ldyBNYXAoKTtcblx0XHRpZiAoIW5hbWUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV07XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLmdldChuYW1lKTtcblx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5zZXQobmFtZSwgdHlwZSk7XG5cdH0sXG5cblx0Y3JlYXRlVHlwZTogZnVuY3Rpb24gKG5hbWVzcGFjZSwgcHJvcHMsIGRlZmF1bHRUeXBlKSB7XG5cdFx0bGV0IG5hbWUgPSBwcm9wcy5uYW1lO1xuXG5cdFx0Ly8gZmlyc3QgY2hlY2sgaWYgdHlwZSBleGlzdHNcblx0XHRsZXQgdHlwZSA9IHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUpO1xuXHRcdGlmICghdHlwZSkge1xuXHRcdFx0bGV0IGV4dGVuZCA9IHByb3BzLmV4dGVuZHMgPyB0aGlzLnR5cGUobmFtZXNwYWNlLCBwcm9wcy5leHRlbmRzKSA6IG51bGw7XG5cdFx0XHRpZiAoIWV4dGVuZCAmJiBkZWZhdWx0VHlwZSlcblx0XHRcdFx0ZXh0ZW5kID0gZGVmYXVsdFR5cGU7XG5cdFx0XHRpZiAoZXh0ZW5kKVxuXHRcdFx0XHR0eXBlID0gY2xhc3MgZXh0ZW5kcyBleHRlbmQge1xuXHRcdFx0XHR9O1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XG5cdFx0XHRcdFx0XHRfLmFzc2lnbih0aGlzLCBjb25maWcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XG5cdFx0XHRfLmFzc2lnbih0eXBlLnByb3RvdHlwZSwgcHJvcHMpO1xuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5jcmVhdGVUeXBlIC0gJyArIG5hbWVzcGFjZSArICcuJyArIG5hbWUpO1xuXHRcdH1cblx0XHRyZXR1cm4gdHlwZTtcblx0fSxcblxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbiAodHlwZXMsIG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpIHtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyAtICcgKyBuYW1lc3BhY2UpO1xuXG5cdFx0aWYgKCF0eXBlcyAmJiBkZWZhdWx0VHlwZSkge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChkZWZhdWx0VHlwZSkge1xuXHRcdFx0bGV0IHR5cGUgPSBfLnJlbW92ZSh0eXBlcywge25hbWU6IGRlZmF1bHRUeXBlLm5hbWV9KTtcblx0XHRcdHR5cGUgPSB0eXBlLmxlbmd0aCA+IDAgPyB0eXBlWzBdIDogbnVsbDtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIF8uZGVmYXVsdHNEZWVwKHR5cGUsIGRlZmF1bHRUeXBlKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH1cblxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcblx0XHR9KTtcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0fSxcblxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcblx0Ly8gY2xhc3MgcHJvcGVydGllcyB0byBiZSBleHRlbmRlZC5cblx0ZXh0ZW5kOiBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcblx0XHQvLyBBZGQgc3RhdGljIHByb3BlcnRpZXMgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBpZiBzdXBwbGllZC5cblx0XHRfLmV4dGVuZChjaGlsZCwgcGFyZW50LCBzdGF0aWNQcm9wcyk7XG5cblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0byBpbmhlcml0IGZyb20gYHBhcmVudGAsIHdpdGhvdXQgY2FsbGluZ1xuXHRcdC8vIGBwYXJlbnRgJ3MgY29uc3RydWN0b3IgZnVuY3Rpb24uXG5cdFx0dmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDtcblx0XHR9O1xuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XG5cblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcblx0XHQvLyBpZiBzdXBwbGllZC5cblx0XHRpZiAocHJvdG9Qcm9wcykgXy5leHRlbmQoY2hpbGQucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcblxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXG5cdFx0Y2hpbGQuc3VwZXJjbGFzcyA9IHBhcmVudC5wcm90b3R5cGU7XG5cblx0XHRyZXR1cm4gY2hpbGQ7XG5cdH0sXG5cblx0aW5pdENvbmZpZzogZnVuY3Rpb24gKG9iaiwgY29uZmlnKSB7XG5cdFx0bGV0IHByb3BzID0ge30sIGMgPSBvYmouY29uc3RydWN0b3IsIGNBcnIgPSBbY107XG5cdFx0d2hpbGUgKGMpIHtcblx0XHRcdGlmIChjLnN1cGVyKSB7XG5cdFx0XHRcdGMgPSBjLnN1cGVyLmNvbnN0cnVjdG9yO1xuXHRcdFx0XHRzcGxpY2UuYXBwbHkoY0FyciwgWzAsIDAsIGNdKTtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHRjID0gbnVsbDtcblx0XHR9XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNBcnIubGVuZ3RoOyBpKyspIHtcblx0XHRcdGMgPSBjQXJyW2ldO1xuXHRcdFx0aWYgKGMuREVGQVVMVFMpXG5cdFx0XHRcdF8uYXNzaWduKHByb3BzLCBjLkRFRkFVTFRTKTtcblx0XHR9XG5cdFx0b2JqLnByb3BzID0gXy5hc3NpZ24ocHJvcHMsIGNvbmZpZyk7XG5cdFx0Yy5wcm90b3R5cGUucHJvcCA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuXHRcdFx0aWYgKCF2YWx1ZSlcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdFx0fTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0cyB0aGUgSlMgY2xhc3MgY29uc3RydWN0b3IuXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBqc0NsYXNzXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q2xhc3Ncblx0ICovXG5cdGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAoanNDbGFzcywgZGVmYXVsdENsYXNzKSB7XG5cdFx0aWYgKCFqc0NsYXNzKVxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcblxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XG5cdFx0cmV0dXJuIGpzQ2xhc3M7XG5cdH0sXG5cblx0ZGVidWc6IGZ1bmN0aW9uIChtb2R1bGVOYW1lKSB7XG5cdFx0aWYgKG1vZHVsZU5hbWUpIHtcblx0XHRcdF9kZWJ1Z2dpbmcucHVzaChtb2R1bGVOYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X2RlYnVnQWxsID0gdHJ1ZTtcblx0XHR9XG5cdH0sXG5cblx0bG9nOiBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xuXHRcdGlmICghd2luZG93LmNvbnNvbGUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dmFyIGRlYnVnID0gX2RlYnVnQWxsO1xuXHRcdGlmICghX2RlYnVnQWxsKSB7XG5cdFx0XHRkZWJ1ZyA9IGZhbHNlO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBfZGVidWdnaW5nLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGlmIChfZGVidWdnaW5nW2ldID09IG5hbWUpIGRlYnVnID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKCFkZWJ1Zykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR3aGlsZSAobmFtZS5sZW5ndGggPCAxMCkge1xuXHRcdFx0bmFtZSA9IG5hbWUgKyAnICc7XG5cdFx0fVxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkgKyBcIiAtIFwiO1xuXHRcdGNvbnNvbGUuaW5mbyhuYW1lLCBtZXNzYWdlKTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSByZWxhdGl2ZSBwb3NpdGlvbiBvZiBzdWIgc2hhcGVzIHdpdGhpbiBhIHBhcmVudCBzaGFyZS5cblx0ICogQHBhcmFtIGJvdW5kc1xuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIGdlb21ldHJ5IGluZm9ybWF0aW9uLCB0aGUgZm9ybWF0IG9mIEdlb21ldHJ5IGlzOlxuXHQgKiB7XG5cdCAqICAgICAgeDogXCJ4IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LCBpZiBsZXNzIHRoYW4gMSwgd2lsbCBiZSB0cmVhdGVkIGFzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBwYXJlbnQgd2lkdGguXCIsXG5cdCAqICAgICAgeTogXCJ5IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LlwiLFxuXHQgKiAgICAgIGFuY2hvclg6IFwieCBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIGFuY2hvclk6IFwieSBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxuXHQgKiAgICAgIG9mZnNldFg6IFwidGhlIG9mZnNldCBpbiB0aGUgeCBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgb2Zmc2V0WTogXCJ0aGUgb2Zmc2V0IGluIHRoZSB5IGRpcmVjdGlvbi5cIixcblx0ICogICAgICB3aWR0aDogXCJ0aGUgd2lkdGggb2YgdGhlIGNoaWxkIGVsZW1lbnRcIixcblx0ICogICAgICBoZWlnaHQ6IFwidGhlIGhlaWdodCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiXG5cdCAqIH1cblx0ICogQHJldHVybnMgeypbXX1cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb246IGZ1bmN0aW9uIChib3VuZHMsIGdlb21ldHJ5KSB7XG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xuXHRcdHJldHVybiB0aGlzLm9mZnNldFBvc2l0aW9uKFt4LCB5XSwgZ2VvbWV0cnkpO1xuXHR9LFxuXG5cdG9mZnNldFBvc2l0aW9uOiBmdW5jdGlvbiAocG9zLCBnZW9tZXRyeSkge1xuXHRcdHJldHVybiBbcG9zWzBdICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9zWzFdICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdCB0aGUgY3VycmVudCB0cmFuc2xhdGVcblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxuXHQgKi9cblx0dW5zY2FsZTogZnVuY3Rpb24gKHQsIHNjYWxlLCBvKSB7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShvLnggKiBzY2FsZSArIHRbMF0sIG8ueSAqIHNjYWxlICsgdFsxXSwgby53aWR0aCAqIHNjYWxlLCBvLmhlaWdodCAqIHNjYWxlKTtcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KG8ueCAqIHNjYWxlICsgdFswXSwgby55ICogc2NhbGUgKyB0WzFdKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gW29bMF0gKiBzY2FsZSArIHRbMF0sIG9bMV0gKiBzY2FsZSArIHRbMV1dO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0aW9uXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHNjYWxlOiBmdW5jdGlvbiAodCwgc2NhbGUsIG8pIHtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKChvLnggLSB0WzBdKSAvIHNjYWxlLCAoby55IC0gdFsxXSkgLyBzY2FsZSwgby53aWR0aCAvIHNjYWxlLCBvLmhlaWdodCAvIHNjYWxlKTtcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KChvLnggLSB0WzBdKSAvIHNjYWxlLCAoby55IC0gdFsxXSkgLyBzY2FsZSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIFsob1swXSAtIHRbMF0pIC8gc2NhbGUsIChvWzFdIC0gdFsxXSkgLyBzY2FsZV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cblx0ICovXG5cdGdldFByb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XG5cdFx0aWYgKCFvYmopXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRpZiAoXy5oYXMob2JqLCBwcm9wKSlcblx0XHRcdHJldHVybiBvYmpbcHJvcF07XG5cdFx0aWYgKG9iai5wcm9wICYmIF8uaXNGdW5jdGlvbihvYmoucHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqLnByb3AocHJvcCk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9VdGlscy5qcyIsImNsYXNzIFBvaW50IHtcblx0Y29uc3RydWN0b3IoeCwgeSkge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0fVxuXG5cdC8qKlxuXHQgKiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxuXHQgKi9cblx0Y2xvbmUoKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcHQgdG8gdGhlIG90aGVyIHB0LlxuXHQgKiBAcGFyYW0gYVB0XG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XG5cdCAqL1xuXHRkaXN0YW5jZShhUHQpIHtcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBhUHQueCkgKiAodGhpcy54IC0gYVB0LngpICsgKHRoaXMueSAtIGFQdC55KSAqICh0aGlzLnkgLSBhUHQueSkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFRyYW5zbGF0ZSB0aGlzIHBvaW50XG4gXHQgKi9cblx0dHJhbnNsYXRlKHAyKSB7XG5cdFx0dGhpcy54ICs9IHAyLng7XG5cdFx0dGhpcy55ICs9IHAyLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHQvKipcblx0ICogU2NhbGUgdGhpcyB2ZWN0b3JcbiBcdCAqL1xuXHRzY2FsZShzY2FsZSkge1xuXHRcdHRoaXMueCAqPSBzY2FsZTtcblx0XHR0aGlzLnkgKj0gc2NhbGU7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRTY2FsZWQoc2NhbGUpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSk7XG5cdH1cblxuXHRnZXRUcmFuc2xhdGVkKHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKyBwMi54LCB0aGlzLnkgKyBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgZnJvbSB0aGlzIHBvaW50IHRvIHAyLlxuXHQgKiBAcGFyYW0gcDJcblx0ICogQHJldHVybnMge1BvaW50fVxuXHQgKi9cblx0Z2V0RGlyZWN0aW9uKHAyKSB7XG5cdFx0dmFyIGRpc3QgPSB0aGlzLmRpc3RhbmNlKHAyKTtcblx0XHRyZXR1cm4gbmV3IFBvaW50KChwMi54IC0gdGhpcy54KSAvIGRpc3QsIChwMi55IC0gdGhpcy55KSAvIGRpc3QpO1xuXHR9XG5cblx0LyoqXG5cdCAqIHJvdGF0ZSB0aGUgcG9pbnQgYWJvdXQgdGhlIG9yaWdpbi4gV2l0aCB0aGUgc3BlY2lmaWVkIGFuZ2xlLlxuXHQgKiBAcGFyYW0gYW5nbGUgdGhlIGFuZ2xlIHRvIHJvdGF0ZVxuXHQgKi9cblx0cm90YXRlKGFuZ2xlKSB7XG5cdFx0dmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XG5cdFx0dGhpcy54ID0geCAqIGNvcyAtIHkgKiBzaW47XG5cdFx0dGhpcy55ID0geCAqIHNpbiArIHkgKiBjb3M7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRnZXRSb3RhdGVkKGFuZ2xlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2xvbmUoKS5yb3RhdGUoYW5nbGUpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QsIHRyZWF0aW5nIHRoaXMgYW5kIHAyIGFzIHZlY3RvcnMuXG5cdCAqL1xuXHRkb3RQcm9kdWN0KHAyKSB7XG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55O1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgbWlkIHBvaW50IGJldHdlZW4gdGhpcyBhbmQgcDIuXG4gXHQgKi9cblx0Z2V0TWlkUG9pbnQocDIpIHtcblx0XHRyZXR1cm4gbmV3IFBvaW50KCh0aGlzLnggKyBwMi54KSAvIDIsICh0aGlzLnkgKyBwMi55KSAvIDIpO1xuXHR9XG5cblx0cmV2ZXJzZSgpIHtcblx0XHR0aGlzLnggPSAtdGhpcy54O1xuXHRcdHRoaXMueSA9IC10aGlzLnk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRlcXVhbHMocDIpIHtcblx0XHRpZiAoIXAyIHx8IHAyLmNvbnN0cnVjdG9yICE9IFBvaW50KSByZXR1cm4gZmFsc2U7XG5cblx0XHRyZXR1cm4gKHRoaXMueCA9PSBwMi54ICYmIHRoaXMueSA9PSBwMi55KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZWZsZWN0IHRoaXMgcG9pbnQgdy5yLnQuIHRoZSByZWN0YW5nbGUuXG5cdCAqIElmIHZlcnRpY2FsIGlzIHRydWUsIGl0IHdpbGwgcmVmbGVjdCB0aGUgcG9pbnQgY3Jvc3MgdGhlIHZlcnRpY2FsXG5cdCAqIGNlbnRyYWwgbGluZSBvZiB0aGUgcmVjdGFuZ2xlLCBvdGhlcndpc2UgcmVmbGVjdCBjcm9zcyB0aGUgaG9yaXpvbnRhbFxuXHQgKiBjZW50cmFsIGxpbmUuXG5cdCAqXG5cdCAqIEBwYXJhbSByZWN0IHRoZSByZWN0YW5nbGVcblx0ICogQHBhcmFtIHZlcnRpY2FsIHdoZXRoZXIgaXMgdmVydGljYWwgcmVmbGVjdGlvbiBvciBob3Jpem9udGFsIHJlZmxlY3Rpb24uXG5cdCAqL1xuXHRyZWZsZWN0KHJlY3QsIHZlcnRpY2FsKSB7XG5cdFx0aWYgKHZlcnRpY2FsKVxuXHRcdFx0dGhpcy54ID0gMiAqIHJlY3QueCAtIHRoaXMueDtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLnkgPSAyICogcmVjdC55IC0gdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xuXHR9XG59XG5cblBvaW50LlcgPSBuZXcgUG9pbnQoLTEsIDApO1xuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xuUG9pbnQuRSA9IG5ldyBQb2ludCgxLCAwKTtcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XG5Qb2ludC5TRSA9IG5ldyBQb2ludCgxLCAxKTtcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9pbnQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L1JlY3RhbmdsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X187XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXG5cdCAqIEByZXR1cm5zIHsqfHtwb2ludCwgZGlyZWN0aW9ufX1cblx0ICovXG5cdGdldFBlcmltZXRlcihyZWZQdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh2aWV3LmdldFRlbXBsYXRlKHRoaXMubmFtZSwgdGhpcykpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzKTtcblx0fVxuXG5cdHN0YXRpYyBnZXRTaGFwZShuYW1lKSB7XG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG5cblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcblx0XHRyZWdpc3RyeVtuYW1lXSA9IGM7XG5cdH1cblxuXHRzdGF0aWMgcmVtb3ZlU2hhcGUobmFtZSkge1xuXHRcdGRlbGV0ZSByZWdpc3RyeVtuYW1lXTtcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogZG9tIFV0aWxpdHkgZnVuY3Rpb25zXG4gKi9cbmV4cG9ydCBkZWZhdWx0IHtcblx0aXNJRTogKGZ1bmN0aW9uICgpIHtcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuXHRcdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XG5cblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxuXHRcdGlmIChJZHggPiAwKVxuXHRcdFx0cmV0dXJuIHBhcnNlSW50KHNBZ2VudC5zdWJzdHJpbmcoSWR4ICsgNSwgc0FnZW50LmluZGV4T2YoXCIuXCIsIElkeCkpKTtcblxuXHRcdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnRcXC83XFwuLykpXG5cdFx0XHRyZXR1cm4gMTE7XG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLykpXG5cdFx0XHRyZXR1cm4gXCJFZGdlXCI7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHR9KSgpLFxuXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xuXHRcdC8vIEluc3RhbGxUcmlnZ2VyOiBGaXJlZm94J3MgQVBJIHRvIGluc3RhbGwgYWRkLW9uc1xuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuXHR9KSgpLFxuXG5cdGlzQ2hyb21lOiAoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvciB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+PSAwKSByZXR1cm4gZmFsc2U7XG5cdFx0dmFyIHJhdyA9IG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0Nocm9tKGV8aXVtKVxcLyhbMC05XSspXFwuLyk7XG5cdFx0cmV0dXJuIHJhdyA/IHBhcnNlSW50KHJhd1syXSwgMTApIDogZmFsc2U7XG5cdH0pKCksXG5cblx0aXNNYWM6IChmdW5jdGlvbigpIHtcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5wbGF0Zm9ybS50b1VwcGVyQ2FzZSgpLmluZGV4T2YoJ01BQycpID49IDA7XG5cdH0pKCksXG5cblx0aXNXaW5kb3dzOiAoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiV2luZG93c1wiKSA+PSAwO1xuXHR9KSgpLFxuXG5cdGlzTGludXg6IChmdW5jdGlvbigpIHtcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XG5cdFx0cmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJMaW51eFwiKSA+PSAwO1xuXHR9KSgpLFxuXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoZWwsIGF0dHJpYnMsIHN0eWxlcyk7XG5cdFx0aWYgKGh0bWwpXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblxuXHRjcmVhdGVFbGVtZW50QnlTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XG5cdH0sXG5cblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcblx0XHRpZiAoYXR0cmlicykge1xuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXMpIHtcblx0XHRcdF8uZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdHRlc3RFbGVtZW50OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xuXHR9LFxuXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0aWYgKHRoaXMudGVzdEVsZW1lbnQobm9kZSwgbWV0aG9kKSApXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XG5cdH0sXG5cblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCB3ID0gZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQ7XG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0ICsgdy8yLCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wICsgaC8yXTtcblx0fSxcblxuXHRtb3ZlOiBmdW5jdGlvbihlbCwgeCwgeSkge1xuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHR9LFxuXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHcgPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0cmV0dXJuIFt3LCBoXTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XG5cdFx0aWYgKHcpIGVsLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCA9IHt9O1xuXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcblx0XHR2YXIgaW1nLCB0aGF0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhhdC5wcmVsb2FkSW1hZ2VzLmxvYWRlZFt0aGlzLm5hbWVdID0ge3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fTtcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxpc3QucHVzaChpbWcpO1xuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHNyY1xuXHQgKi9cblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWRbc3JjXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0ZG93bmxvYWRGaWxlOiBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XG5cdFx0aWYgKCFkYXRhKSByZXR1cm47XG5cdFx0bGV0IG1pbWUgPSBkYXRhLm1hdGNoKC9eZGF0YTooW147LF0qKS8pWzFdO1xuXHRcdGlmIChuYW1lLmluZGV4T2YoJy4nKSA8IDApIHtcblx0XHRcdGlmICghbWltZSkgbWltZSA9ICd0ZXh0L3BsYWluJztcblx0XHRcdGlmIChtaW1lID09ICd0ZXh0L3BsYWluJylcblx0XHRcdFx0bmFtZSA9IG5hbWUgKyAnLnR4dCc7XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0bGV0IHR5cGUgPSBtaW1lLnNwbGl0KCcvJylbMV07XG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoJysnKSA+IDApIHR5cGUgPSB0eXBlLnNwbGl0KCcrJylbMF07XG5cdFx0XHRcdG5hbWUgPSBuYW1lICsgJy4nICsgdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHRoaXMuaXNJRSkge1xuXHRcdFx0bGV0IGVuY29kZWQgPSBkYXRhLmluZGV4T2YoJztiYXNlNjQnKSA+PSAwO1xuXHRcdFx0aWYgKGVuY29kZWQpXG5cdFx0XHRcdGRhdGEgPSBhdG9iKGRhdGEucmVwbGFjZSgnZGF0YTonICsgbWltZSArICc7YmFzZTY0LCcsICcnKSk7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRhdGEgPSBkZWNvZGVVUkkoZGF0YS5yZXBsYWNlKCdkYXRhOicgKyBtaW1lICsgJywnLCAnJykpO1xuXHRcdFx0ZGF0YSA9IHRoaXMuR2V0QmxvYihkYXRhLCBtaW1lKTtcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKGRhdGEsIG5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRsZXQgbGluayA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYScsIHtocmVmOiBkYXRhLCBkb3dubG9hZDogbmFtZX0sIHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcblx0XHRcdGxpbmsuY2xpY2soKTtcblx0XHRcdGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIENvbnZlcnQgYjU0IHRvIGJsb2IuIElFIG9ubHlcblx0ICovXG5cdEdldEJsb2I6IGZ1bmN0aW9uIChkYXRhLCBjb250ZW50VHlwZSwgc2xpY2VTaXplKSB7XG5cdFx0Y29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcblx0XHRzbGljZVNpemUgPSBzbGljZVNpemUgfHwgNTEyO1xuXG5cdFx0dmFyIGJ5dGVBcnJheXMgPSBbXTtcblxuXHRcdGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGRhdGEubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XG5cdFx0XHR2YXIgc2xpY2UgPSBkYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcblxuXHRcdFx0dmFyIGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdGJ5dGVOdW1iZXJzW2ldID0gc2xpY2UuY2hhckNvZGVBdChpKTtcblx0XHRcdH1cblx0XHRcdHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XG5cdFx0XHRieXRlQXJyYXlzLnB1c2goYnl0ZUFycmF5KTtcblx0XHR9XG5cdFx0cmV0dXJuIG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xuXHR9LFxuXG5cdG9wZW5JbWFnZTogZnVuY3Rpb24obmFtZSwgaW1hZ2UpIHtcblx0XHR2YXIgbXlXaW5kb3cgPSB3aW5kb3cub3BlbihcIlwiLCBcIl9ibGFua1wiLCBcInRvb2xiYXI9eWVzLCBzY3JvbGxiYXJzPXllcywgcmVzaXphYmxlPXllcywgd2lkdGg9NTAwLCBoZWlnaHQ9NTAwXCIpO1xuXHRcdHZhciBteURvY3VtZW50ID0gbXlXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0dmFyIGltZyA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoaW1nLCB7c3JjOiBpbWFnZSwgbmFtZTogbmFtZX0pO1xuXHRcdG15RG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBrZXkgZXZlbnQgaXMgZnJvbSBpbnB1dCwgdGV4dGFyZWEgb3Igc2VsZWN0LlxuXHQgKiBAcGFyYW0gZSAgaW5wdXQgZXZlbnRcblx0ICovXG5cdGV2ZW50RnJvbUlucHV0OiBmdW5jdGlvbihlKXtcblx0XHR2YXIgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWU7XG5cdFx0cmV0dXJuICh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcpO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9Eb21VdGlscy5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanMiLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGluZSB7XG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXG5cdCAqL1xuXHRsZW5ndGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cblx0ICovXG5cdGRpc3RhbmNlKHB0KSB7XG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcblx0XHRpZiAoeCA9PSAwKSByZXR1cm4gMDtcblxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcblx0XHR2YXIgY29zYSA9IG5ldyBQb2ludCgodGhpcy5lbmQueCAtIHRoaXMuc3RhcnQueCkgLyBsLCAodGhpcy5lbmQueSAtIHRoaXMuc3RhcnQueSkgLyBsKS5kb3RQcm9kdWN0KFxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xuXG5cdFx0cmV0dXJuIHggKiBNYXRoLnNxcnQoMSAtIGNvc2EgKiBjb3NhKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXG5cdCAqXG5cdCAqIFJldHVybnMgdGhlIGludGVyc2VjdGlvbiBvZiB0d28gbGluZXMgYXMgYW4gPG14UG9pbnQ+LlxuXHQgKlxuXHQgKiBQYXJhbWV0ZXJzOlxuXHQgKlxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDEgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTIgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKi9cblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xuXHRcdHZhciBudW1lX2EgPSAoKHgzIC0geDIpICogKHkwIC0geTIpKSAtICgoeTMgLSB5MikgKiAoeDAgLSB4MikpO1xuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xuXG5cdFx0dmFyIHVhID0gbnVtZV9hIC8gZGVub207XG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XG5cblx0XHRpZiAodWEgPj0gMC4wICYmIHVhIDw9IDEuMCAmJiB1YiA+PSAwLjAgJiYgdWIgPD0gMS4wKSB7XG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xuXHRcdFx0dmFyIGludGVyc2VjdGlvblkgPSB5MCArIHVhICogKHkxIC0geTApO1xuXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xuXHRcdH1cblxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9Jztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L0xpbmUuanMiLCJpbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFbGxpcHNlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRsZXQgYSA9IHJlY3Qud2lkdGggLyAyO1xuXHRcdGxldCBiID0gcmVjdC5oZWlnaHQgLyAyO1xuXHRcdGxldCBjeCA9IHJlY3QueDtcblx0XHRsZXQgY3kgPSByZWN0Lnk7XG5cdFx0bGV0IHB4ID0gcHQueDtcblx0XHRsZXQgcHkgPSBwdC55O1xuXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcblx0XHQvLyBwb2ludCBhbmQgZWxsaXBzZSBjZW50ZXIgeSA9IGQgKiB4ICsgaFxuXHRcdGxldCBkeCA9IHBhcnNlSW50KHB4IC0gY3gpO1xuXHRcdGxldCBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xuXG5cdFx0bGV0IHR4LCB0eTtcblxuXHRcdGlmIChkeCA9PSAwICYmIGR5ICE9IDApIHtcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoY3gsIGN5ICsgYiAqIGR5IC8gTWF0aC5hYnMoZHkpKTtcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChweCwgcHkpO1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZXMgaW50ZXJzZWN0aW9uXG5cdFx0bGV0IGQgPSBkeSAvIGR4O1xuXHRcdGxldCBoID0gY3kgLSBkICogY3g7XG5cdFx0bGV0IGUgPSBhICogYSAqIGQgKiBkICsgYiAqIGI7XG5cdFx0bGV0IGYgPSAtMiAqIGN4ICogZTtcblx0XHRsZXQgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcblx0XHRsZXQgZGV0ID0gTWF0aC5zcXJ0KGYgKiBmIC0gNCAqIGUgKiBnKTtcblxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXG5cdFx0bGV0IHhvdXQxID0gKC1mICsgZGV0KSAvICgyICogZSk7XG5cdFx0bGV0IHhvdXQyID0gKC1mIC0gZGV0KSAvICgyICogZSk7XG5cdFx0bGV0IHlvdXQxID0gZCAqIHhvdXQxICsgaDtcblx0XHRsZXQgeW91dDIgPSBkICogeG91dDIgKyBoO1xuXHRcdGxldCBkaXN0MSA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDEgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQxIC0gcHkpLCAyKSk7XG5cdFx0bGV0IGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcblxuXHRcdC8vIENvcnJlY3Qgc29sdXRpb25cblx0XHRsZXQgeG91dCA9IDA7XG5cdFx0bGV0IHlvdXQgPSAwO1xuXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcblx0XHRcdHhvdXQgPSB4b3V0MTtcblx0XHRcdHlvdXQgPSB5b3V0MTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0eG91dCA9IHhvdXQyO1xuXHRcdFx0eW91dCA9IHlvdXQyO1xuXHRcdH1cblxuXHRcdGxldCBwID0gbmV3IFBvaW50KHhvdXQsIHlvdXQpO1xuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xuXHRcdGlmIChvcnRob2dvbmFsKSB7XG5cdFx0XHRpZiAoZGlyLnggPT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyLnggPT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIueSA9PSAtMSkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcblx0XHRcdH1cblx0XHRcdGlmIChkaXIueSA9PSAxKSB7XG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmhvbWJ1cyBleHRlbmRzIFNoYXBlIHtcblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdSaG9tYnVzOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRsZXQgdyA9IHJlY3Qud2lkdGg7XG5cdFx0bGV0IGggPSByZWN0LmhlaWdodDtcblx0XHRsZXQgY3ggPSByZWN0Lng7XG5cdFx0bGV0IGN5ID0gcmVjdC55O1xuXHRcdGxldCB4ID0gY3ggLSB3LzI7XG5cdFx0bGV0IHkgPSBjeSAtIGgvMjtcblxuXHRcdGxldCBweCA9IHB0Lng7XG5cdFx0bGV0IHB5ID0gcHQueTtcblxuXHRcdC8vIFNwZWNpYWwgY2FzZSBmb3IgaW50ZXJzZWN0aW5nIHRoZSBkaWFtb25kJ3MgY29ybmVyc1xuXHRcdGlmIChjeCA9PT0gcHgpIHtcblx0XHRcdGlmIChjeSA+IHB5KSB7XG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgeSksIGRpcmVjdGlvbjogUG9pbnQuU307XG5cdFx0XHRcdC8vIHRvcFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCB5ICsgaCksIGRpcmVjdGlvbjogUG9pbnQuTn07XG5cdFx0XHRcdC8vIGJvdHRvbVxuXHRcdFx0fVxuXHRcdH0gZWxzZSBpZiAoY3kgPT09IHB5KSB7XG5cdFx0XHRpZiAoY3ggPiBweCkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoeCwgY3kpLCBkaXJlY3Rpb246IFBvaW50LkV9O1xuXHRcdFx0XHQvLyBsZWZ0XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoeCArIHcsIGN5KSwgZGlyZWN0aW9uOiBQb2ludC5XfTtcblx0XHRcdFx0Ly8gcmlnaHRcblx0XHRcdH1cblx0XHR9XG5cblx0XHRsZXQgdHggPSBjeDtcblx0XHRsZXQgdHkgPSBjeTtcblxuXHRcdGlmIChvcnRob2dvbmFsKSB7XG5cdFx0XHRpZiAocHggPj0geCAmJiBweCA8PSB4ICsgdykge1xuXHRcdFx0XHR0eCA9IHB4O1xuXHRcdFx0fSBlbHNlIGlmIChweSA+PSB5ICYmIHB5IDw9IHkgKyBoKSB7XG5cdFx0XHRcdHR5ID0gcHk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHAsIGRpcjtcblx0XHQvLyBUT0RPIGRpcmVjdGlvbiBjYWxjdWxhdGlvbiBpcyBub3QgcXVpdGUgcmlnaHQuXG5cdFx0Ly8gSW4gd2hpY2ggcXVhZHJhbnQgd2lsbCB0aGUgaW50ZXJzZWN0aW9uIGJlP1xuXHRcdC8vIHNldCB0aGUgc2xvcGUgYW5kIG9mZnNldCBvZiB0aGUgYm9yZGVyIGxpbmUgYWNjb3JkaW5nbHlcblx0XHRpZiAocHggPCBjeCkge1xuXHRcdFx0aWYgKHB5IDwgY3kpIHtcblx0XHRcdFx0cCA9IExpbmUuaW50ZXJzZWN0aW9uKHB4LCBweSwgdHgsIHR5LCBjeCwgeSwgeCwgY3kpO1xuXHRcdFx0XHRkaXIgPSBQb2ludC5TO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cCA9IExpbmUuaW50ZXJzZWN0aW9uKHB4LCBweSwgdHgsIHR5LCBjeCwgeSArIGgsIHgsIGN5KTtcblx0XHRcdFx0ZGlyID0gUG9pbnQuTjtcblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKHB5IDwgY3kpIHtcblx0XHRcdHAgPSBMaW5lLmludGVyc2VjdGlvbihweCwgcHksIHR4LCB0eSwgY3gsIHksIHggKyB3LCBjeSk7XG5cdFx0XHRkaXIgPSBQb2ludC5FO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwID0gTGluZS5pbnRlcnNlY3Rpb24ocHgsIHB5LCB0eCwgdHksIGN4LCB5ICsgaCwgeCArIHcsIGN5KTtcblx0XHRcdGRpciA9IFBvaW50Llc7XG5cdFx0fVxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L1Job21idXMuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0dHlwZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiB0cnVlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0YW5jaG9yWDogMCxcblx0YW5jaG9yWTogMCxcblx0b2Zmc2V0WDogMCxcblx0b2Zmc2V0WTogMFxufTtcblxubGV0IGxpbmtUeXBlcyA9IHt9O1xuXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIGw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgZGVjb3JhdG9ycyBvciBsYWJlbC4uXG5cdCAqXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxuXHQgKiBAcmV0dXJuICpbXSB0aGUgcmVsYXRpdmUgcG9zaXRpb24uXG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPD0gMSkgcCAqPSBsO1xuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xuXHRcdGlmIChwID4gbCkgcCA9IGw7XG5cblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHMsIGQsIHBvaW50LCBkaXI7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRkID0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcblx0XHRcdGlmIChwIDw9IGQpIHtcblx0XHRcdFx0Ly8gd2UndmUgbG9jYXRlZCB0aGUgbGluZSBzZWdtZW50LlxuXHRcdFx0XHRwb2ludCA9IHBvaW50c1tpXS5jbG9uZSgpO1xuXHRcdFx0XHRkaXIgPSBwb2ludC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pO1xuXHRcdFx0XHRwb2ludC50cmFuc2xhdGUoZGlyLmdldFNjYWxlZChwKSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0cCAtPSBkO1xuXHRcdH1cblxuXHRcdC8vIHJldHVybiB0aGUgbGFzdCBwb2ludC5cblx0XHRpZiAoIXBvaW50KVxuXHRcdFx0cG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluayc7XG5cdH1cblxuXHRzdGF0aWMgZ2V0TGluayh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGxpbmtDbGFzcyA9IGxpbmtUeXBlc1tzaGFwZUNvbmZpZy50eXBlXTtcblx0XHRpZiAobGlua0NsYXNzKVxuXHRcdFx0cmV0dXJuIG5ldyBsaW5rQ2xhc3ModGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0XHRjb25zb2xlLmxvZygnbGluayB0eXBlIG5vdCBzdXBwb3J0ZWQ6ICcgKyBzaGFwZUNvbmZpZy50eXBlKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufVxuXG5jbGFzcyBEaXJlY3RMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cbn1cblxuY2xhc3MgQmV6aWVyTGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG5cblx0Z2V0IGNvbnRyb2xQdHMoKSB7XG5cdFx0bGV0IHMgPSB0aGlzLnBvaW50c1swXSwgZSA9IHRoaXMucG9pbnRzWzFdO1xuXHRcdGxldCBwdHMgPSBbXTtcblx0XHRwdHNbMF0gPSBudWxsO1xuXHRcdHB0c1sxXSA9IFtdO1xuXHRcdGlmICh0aGlzLnN0YXJ0Tm9ybWFsLnggPT09IDApIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludChzLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBzLnkpO1xuXHRcdH1cblx0XHRpZiAodGhpcy5lbmROb3JtYWwueCA9PT0gMCkge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XG5cdFx0aWYgKHAgPCAwKSBwKys7XG5cdFx0aWYgKHAgPiAxKSBwLS07XG5cblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XG5cdFx0bGV0IHAxID0gcHRzWzBdO1xuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcblx0XHRsZXQgcDQgPSBwdHNbMV07XG5cblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdGxldCBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcblx0XHRsZXQgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xuXHRcdGxldCBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xuXHRcdGxldCBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xuXHRcdGxldCByZXN1bHQgPSBbXTtcblxuXHRcdGxldCB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcblx0XHRsZXQgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcblxuXHRcdGxldCB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcblx0XHRsZXQgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xuXG5cdFx0bGV0IHNlZyA9IHRoaXMuc2VnbWVudDtcblxuXHRcdGxldCBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcblx0XHRsZXQgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcblxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdGxldCBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xuXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxuXHRcdHtcblx0XHRcdGxldCB4ID0gKGlzU291cmNlTGVmdCkgP1xuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXG5cdFx0e1xuXHRcdFx0bGV0IG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cbmNsYXNzIE1hbmhhdHRhbiBleHRlbmRzIExpbmsge1xuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHMoc2hhcGVDb25maWcsIHtcblx0XHRcdE1JTl9CVUZGRVI6IDEwLFxuXHRcdFx0YXV0b1JvdXRlOiBmYWxzZSxcblx0XHRcdHJhbmRvbU5vaXNlOiAwLFxuXHRcdFx0c3RlcDogMSxcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXG5cdFx0fSk7XG5cdFx0c3VwZXIodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7XG5cdFx0bGV0IHBvcyA9IE1hbmhhdHRhbi5yb3V0ZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy5zdGFydE5vcm1hbCwgdGhpcy5lbmROb3JtYWwsIHRoaXMuTUlOX0JVRkZFUik7XG5cdFx0aWYgKHRoaXMuYXV0b1JvdXRlKSB7XG5cdFx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0XHRsZXQgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcblx0XHRcdGxldCBjb250YWluZXIgPSBlZGdlLnNvdXJjZS5nZXRDb21tb25BbmNlc3RvcihlZGdlLnRhcmdldCk7XG5cdFx0XHRsZXQgY2hpbGROb2RlcyA9IGNvbnRhaW5lci5nZXREZXNjZW5kYW50cygpO1xuXHRcdFx0bGV0IGluZGV4ID0gMDtcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGROb2Rlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRub2RlID0gY2hpbGROb2Rlc1tpXTtcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cblx0XHRcdFx0aWYgKG5vZGUuZXhjbHVkZUZyb21Sb3V0aW5nKGVkZ2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnNvdXJjZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2UudGFyZ2V0KSkgY29udGludWU7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2Uuc291cmNlKVxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnRhcmdldClcblx0XHRcdFx0ZW5kQm94ID0gaW5kZXg7XG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcblx0XHRcdFx0aW5kZXgrKztcblx0XHRcdH1cblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxuXHRcdFx0XHR0aGlzLmF1dG9Sb3V0ZShwb3MsIGNvbnRhaW5lci5nZXRCb3VuZHMoZG9jdW1lbnQpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XG5cdFx0fVxuXHRcdE1hbmhhdHRhbi5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdGlmICh0aGlzLnJhbmRvbU5vaXNlICYmIHBvcy5sZW5ndGggPiAzKSB7XG5cdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvcy5sZW5ndGggLSAyOyBpKyspIHtcblx0XHRcdFx0bGV0IHJhbmdlID0gdGhpcy5yYW5kb21Ob2lzZSAvIHRoaXMuc3RlcDtcblx0XHRcdFx0bGV0IHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlICogMiAtIHJhbmdlICsgMSkgKiB0aGlzLnN0ZXA7XG5cdFx0XHRcdHRoaXMuX21vdmVTZWdtZW50KHBvcywgaSwgcmFuZG9tTnVtYmVyLCAxLCAxKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHBvcztcblx0fVxuXG5cdC8vTmV3IGZ1bmN0aW9uIGZvciBmaW5kaW5nIHJvdXRlXG5cdHN0YXRpYyByb3V0ZShzdGFydCwgZW5kLCBzdGFydE5vcm1hbCwgZW5kTm9ybWFsLCBidWZmZXIpIHtcblx0XHRsZXQgc3RhcnRCdWZmZXIgPSBuZXcgUG9pbnQoc3RhcnQueCArIHN0YXJ0Tm9ybWFsLnggKiBidWZmZXIsIHN0YXJ0LnkgKyBzdGFydE5vcm1hbC55ICogYnVmZmVyKTtcblx0XHRsZXQgZW5kQnVmZmVyID0gbmV3IFBvaW50KGVuZC54ICsgZW5kTm9ybWFsLnggKiBidWZmZXIsIGVuZC55ICsgZW5kTm9ybWFsLnkgKiBidWZmZXIpO1xuXHRcdGxldCBzdGFydEJ1ZmZlck5vcm1hbCwgZW5kQnVmZmVyTm9ybWFsO1xuXHRcdGxldCBwdHM7XG5cdFx0aWYgKHN0YXJ0Tm9ybWFsLnggIT0gMCkge1xuXHRcdFx0aWYgKChlbmRCdWZmZXIueCAtIHN0YXJ0QnVmZmVyLngpIC8gc3RhcnROb3JtYWwueCA+IDApIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgwLCAoZW5kQnVmZmVyLnkgPj0gc3RhcnRCdWZmZXIueSkgPyAxIDogLTEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdGlmICgoZW5kQnVmZmVyLnkgLSBzdGFydEJ1ZmZlci55KSAvIHN0YXJ0Tm9ybWFsLnkgPiAwKSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gc3RhcnROb3JtYWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoKGVuZEJ1ZmZlci54ID49IHN0YXJ0QnVmZmVyLngpID8gMSA6IC0xLCAwKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKGVuZE5vcm1hbC54ICE9IDApIHtcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueCAtIGVuZEJ1ZmZlci54KSAvIGVuZE5vcm1hbC54ID4gMCkge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBlbmROb3JtYWw7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KDAsIChzdGFydEJ1ZmZlci55ID49IGVuZEJ1ZmZlci55KSA/IDEgOiAtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKChzdGFydEJ1ZmZlci55IC0gZW5kQnVmZmVyLnkpIC8gZW5kTm9ybWFsLnkgPiAwKSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoKHN0YXJ0QnVmZmVyLnggPj0gZW5kQnVmZmVyLngpID8gMSA6IC0xLCAwKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpID09IDApIHtcblx0XHRcdGxldCBtaWRkbGUgPSAoc3RhcnRCdWZmZXJOb3JtYWwueCA9PSAwKSA/IG5ldyBQb2ludChzdGFydEJ1ZmZlci54LCBlbmRCdWZmZXIueSkgOiBuZXcgUG9pbnQoZW5kQnVmZmVyLngsIHN0YXJ0QnVmZmVyLnkpO1xuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbWlkZGxlLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHN0YXJ0QnVmZmVyTm9ybWFsLmRvdFByb2R1Y3QoZW5kQnVmZmVyTm9ybWFsKSA8IDApIHtcblx0XHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApIHtcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIChzdGFydC55ICsgZW5kLnkpIC8gMiksIG5ldyBQb2ludChlbmRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIHN0YXJ0QnVmZmVyLnkpLCBuZXcgUG9pbnQoKHN0YXJ0LnggKyBlbmQueCkgLyAyLCBlbmRCdWZmZXIueSksIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCArIHN0YXJ0QnVmZmVyTm9ybWFsLnggKiBidWZmZXIsIHN0YXJ0QnVmZmVyLnkgKyBzdGFydEJ1ZmZlck5vcm1hbC55ICogYnVmZmVyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54ICsgZW5kQnVmZmVyTm9ybWFsLnggKiBidWZmZXIsIGVuZEJ1ZmZlci55ICsgZW5kQnVmZmVyTm9ybWFsLnkgKiBidWZmZXIpLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0fVxuXG5cdFx0bGV0IHBydW5lUHRzID0gW107XG5cdFx0cHJ1bmVQdHNbMF0gPSBwdHNbMF07XG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAoKHB0c1tpXS54ID09IHB0c1tpLTFdLnggJiYgcHRzW2ldLnggPT0gcHRzW2krMV0ueCkgfHwgKHB0c1tpXS55ID09IHB0c1tpLTFdLnkgJiYgcHRzW2ldLnkgPT0gcHRzW2krMV0ueSkpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRwcnVuZVB0cy5wdXNoKHB0c1tpXSk7XG5cdFx0fVxuXHRcdHBydW5lUHRzLnB1c2gocHRzW3B0cy5sZW5ndGggLSAxXSk7XG5cdFx0cmV0dXJuIHBydW5lUHRzO1xuXHR9XG5cblx0LyoqXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxuXHQgKi9cblx0YXV0b1JvdXRlKHB0cywgY29udGFpbmVyLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdGxldCBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XG5cdFx0bGV0IGNoYW5uZWwsIGNoYW5uZWwyLCBwdCwgZGlyO1xuXG5cdFx0bGV0IHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XG5cdFx0Ly8gZmlyc3QgZ2V0IHRoZSBzdGFydCBhbmQgZW5kIGNoYW5uZWxcblx0XHRib3ggPSBib3hlc1tlbmRCb3hdO1xuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcblx0XHRpZiAocHQueSA8IGJveC55KVxuXHRcdFx0c2lkZSA9IDE7XG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcblx0XHRcdHNpZGUgPSAzO1xuXHRcdGVsc2UgaWYgKHB0LnggPCBib3gueClcblx0XHRcdHNpZGUgPSAwO1xuXHRcdGVsc2Vcblx0XHRcdHNpZGUgPSAyO1xuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xuXHRcdGVuZFBhZGRpbmcgPSBjaGFubmVsLmhvcml6b250YWwgPyAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCkvMiA6IChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wKS8yO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRpZiAocHRzW2krMV0ueCA9PSBwdHNbaV0ueCAmJiBwdHNbaSsxXS55ID09IHB0c1tpXS55KSBjb250aW51ZTtcblx0XHRcdGludGVyc2VjdCA9IF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcblx0XHRcdGogPSBpbnRlcnNlY3RbMF07XG5cdFx0XHRzaWRlID0gaW50ZXJzZWN0WzFdO1xuXHRcdFx0Ym94ID0gYm94ZXNbal07XG5cdFx0XHRjaGFubmVsID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZSk7XG5cdFx0XHRzd2l0Y2goc2lkZSkge1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdGNhc2UgMjpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludCgoY2hhbm5lbC5yaWdodCArIGNoYW5uZWwubGVmdCkvMiwgcHRzW2ldLnkpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMSA6IDM7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS55ID09IHB0c1tpLTFdLnkpICYmIChwdHNbaS0xXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpLTFdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS55IC0gcHQueTtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAwICYmIHB0LnggPD0gcHRzW2ldLngpIHx8IChzaWRlID09IDIgJiYgcHQueCA+PSBwdHNbaV0ueCkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCwgcHRzW2ldLnkgKyBkKSwgbmV3IFBvaW50KHB0LngsIHB0LnkgKyBkKV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDE6XG5cdFx0XHRcdGNhc2UgMzpcblx0XHRcdFx0XHRwdCA9IG5ldyBQb2ludChwdHNbaV0ueCwgKGNoYW5uZWwuYm90dG9tICsgY2hhbm5lbC50b3ApLzIpO1xuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XG5cdFx0XHRcdFx0c2lkZTIgPSBkaXIgPCAwID8gMCA6IDI7XG5cdFx0XHRcdFx0Y2hhbm5lbDIgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlMik7XG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXG5cdFx0XHRcdFx0aWYgKGkgPiAxICYmIChwdHNbaS0yXS54ID09IHB0c1tpLTFdLngpICYmIChwdHNbaS0xXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaS0xXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpLTFdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcblx0XHRcdFx0XHRcdGQgPSBwdHNbaSsyXS54IC0gcHQueDtcblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgd2UgbmVlZCB0aGlzIHB0LlxuXHRcdFx0XHRcdGlmICgoc2lkZSA9PSAxICYmIHB0LnkgPD0gcHRzW2ldLnkpIHx8IChzaWRlID09IDMgJiYgcHQueSA+PSBwdHNbaV0ueSkpXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA+IDApIHtcblx0XHRcdFx0XHRcdC8vIHNlZSBpZiB3ZSBjYW4gcHVzaCB0aGUgbGluZSBvdXQgdG8gd2hlcmUgd2Ugc3RhcnRlZC5cblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcblx0XHRcdFx0XHRcdFx0XHRbbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSksIG5ldyBQb2ludChwdHNbaV0ueCArIGQsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0LnggKyBkLCBwdC55KV0sXG5cdFx0XHRcdFx0XHRcdFx0Ym94ZXMpKVxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIDQ6XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHQvLyBtYXggcG9pbnRzLlxuXHRcdFx0aWYgKGkgPiAyMCkgcmV0dXJuO1xuXHRcdFx0aWYgKHB0ICYmIChwdC54ICE9IHB0c1tpXS54IHx8IHB0LnkgIT0gcHRzW2ldLnkpKSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZyk7XG5cdFx0fVxuXHR9XG5cblx0c3RhdGljIF9oYXNJbnRlcnNlY3Rpb24ocHRzLCBib3hlcykge1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRpZiAoYm94ZXNbal0uZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pID49IDApXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHN0YXRpYyBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xuXHRcdGxldCBib3gsIHNpZGUsIHNhdmVkSW5kZXggPSBudWxsLCBzYXZlZFNpZGUgPSBudWxsO1xuXHRcdGZvciAobGV0IGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgoaSA9PSAwICYmIGogPT0gc3RhcnRCb3gpIHx8IChpID09IHB0cy5sZW5ndGggLSAyICYmIGogPT0gZW5kQm94KSlcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdHNpZGUgPSBib3guZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pO1xuXHRcdFx0aWYgKHNpZGUgPj0gMCkge1xuXHRcdFx0XHRpZiAoc2F2ZWRJbmRleCA9PSBudWxsKSB7XG5cdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XG5cdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpZiAoYm94ZXNbc2F2ZWRJbmRleF0uZGlzdGFuY2UocHRzW2ldKSA+IGJveC5kaXN0YW5jZShwdHNbaV0pKSB7XG5cdFx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRcdHNhdmVkU2lkZSA9IHNpZGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChzYXZlZEluZGV4ICE9IG51bGwpXG5cdFx0XHRyZXR1cm4gW3NhdmVkSW5kZXgsIHNhdmVkU2lkZV07XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIGJyZWFrUHQsIGJveCwgc2lkZSkge1xuXHRcdGxldCBkaXI7XG5cdFx0bGV0IHA7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHAgPSBcInlcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHAgPSBcInhcIjtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdC8vZmlyc3QgdHJ5IHRoZSBicmVha3B0LlxuXHRcdGRpciA9IF9nZXRSb3V0ZURpcmVjdGlvbihicmVha1B0LCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRpZiAoZGlyID09IDApIHtcblx0XHRcdGRpciA9IC1fZ2V0Um91dGVEaXJlY3Rpb24ocHRzWzBdLCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcblx0XHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0XHRpZiAoYnJlYWtQdFtwXSA8IGJveC5nZXRDZW50ZXIoKVtwXSlcblx0XHRcdFx0XHRkaXIgPSAtMTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdGRpciA9IDE7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBkaXI7XG5cdH1cblxuXHRzdGF0aWMgX2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XG5cdFx0aWYgKHB0MS54ID09IHB0Mi54KSB7XG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlM7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcblx0XHR9IGVsc2UgaWYgKHB0MS55ID09IHB0Mi55KSB7XG5cdFx0XHRpZiAocHQxLnggPCBwdDIueCkgcmV0dXJuIFBvaW50LkU7XG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcblx0XHR9IGVsc2UgaWYgKHB0MS54IDwgcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU0U7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuU1c7XG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XG5cdFx0fVxuXHR9XG5cblx0X2dldENoYW5uZWwoY29udGFpbmVyLCBpbmRleCwgYm94ZXMsIHNpZGUpIHtcblx0XHRsZXQgbWF4Q2hhbm5lbFdpZHRoID0gdGhpcy5tYXhDaGFubmVsV2lkdGg7XG5cdFx0bGV0IGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XG5cdFx0bGV0IHB0LCBpO1xuXHRcdGxldCBjaGFubmVsID0ge30sIGwsIHQsIGIsIHI7XG5cdFx0c3dpdGNoIChzaWRlKSB7XG5cdFx0XHRjYXNlIDA6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRMZWZ0KCk7XG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdHIgPSBib3hlc1tpXS5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPj0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcblx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAxOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0VG9wKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGIgPSBib3hlc1tpXS5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChiID49IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcblx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gZmFsc2U7XG5cdFx0XHRcdGNoYW5uZWwubGVmdCA9IHB0Lng7XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRsID0gYm94ZXNbaV0uZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY2hhbm5lbC5sZWZ0ICsgbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHRcdGlmIChiIDwgcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IHQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XG5cdFx0XHRcdGNoYW5uZWwudG9wID0gcHQueTtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiBib3gyLmdldFRvcCgpLnkpXG5cdFx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGJveDIuZ2V0VG9wKCkueTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSB7XG5cdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY2hhbm5lbC50b3AgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRyID0gYm94Mi5nZXRSaWdodCgpLng7XG5cdFx0XHRcdFx0aWYgKHIgPCBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0IHx8IGNoYW5uZWwucmlnaHQgPiBsKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHJldHVybiBjaGFubmVsO1xuXHR9XG5cblx0LyoqXG5cdCAqIE1vdmUgYSBsaW5lIHNlZ21lbnQgYnkgYSBzcGVjaWZpZWQgZGlzdGFuY2UuXG5cdCAqXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxuXHQgKiBAcGFyYW0gaSB0aGUgaW5kZXggb2YgdGhlIHNlZ21lbnQuXG5cdCAqIEBwYXJhbSBkIHRoZSBkaXN0YW5jZSB0byBtb3ZlLlxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXG5cdCAqIEBwYXJhbSBlbmRQYWRkaW5nXG5cdCAqL1xuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB3ZSBuZWVkIHRvIGFkZCBuZXcgbGluZSBzZWdtZW50cy5cblx0XHRsZXQgZGlyLCBsLCBwdDtcblx0XHRpZiAoaSA9PSAwKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBzdGFydGluZyBwb2ludC5cblx0XHRcdGRpciA9IHB0c1swXS5nZXREaXJlY3Rpb24ocHRzWzFdKTtcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxuXHRcdFx0XHRzdGFydFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XG5cdFx0XHRsID0gTWF0aC5taW4oc3RhcnRQYWRkaW5nLCBwdHNbMF0uZGlzdGFuY2UocHRzWzFdKS8yKTtcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcblx0XHRcdHB0cy5zcGxpY2UoMSwgMCwgcHQpO1xuXHRcdFx0dGhpcy5fbW92ZVNlZ21lbnQocHRzLCBpKzEsIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoaSA9PSBwdHMubGVuZ3RoIC0gMikge1xuXHRcdFx0Ly8gd2UgbmVlZCB0byBicmVhayBvZmYgdGhlIHNlZ21lbnQsIHNpbmNlIHdlIGNhbid0IGNoYW5nZSB0aGUgZW5kIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcblx0XHRcdGlmICghZW5kUGFkZGluZylcblx0XHRcdFx0ZW5kUGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XG5cdFx0XHRwdCA9IHB0c1twdHMubGVuZ3RoIC0gMV0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZShwdHMubGVuZ3RoIC0gMSwgMCwgcHQpO1xuXHRcdFx0dGhpcy5fbW92ZVNlZ21lbnQocHRzLCBpLCBkKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAocHRzW2ldLnkgPT0gcHRzW2krMV0ueSkge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueSA9PSBwdHNbaV0ueSkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueSA9PSBwdHNbaSsyXS55KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS55ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS55ICs9IGQ7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChpID4gMCAmJiBwdHNbaSAtIDFdLnggPT0gcHRzW2ldLngpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnggPT0gcHRzW2krMl0ueClcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XG5cdFx0XHRwdHNbaV0ueCArPSBkO1xuXHRcdFx0cHRzW2krMV0ueCArPSBkO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUaGlzIG1ldGhvZCB3aWxsIG1lcmdlIHRoZSByZWR1bmRhbnQgc2VnbWVudHMuXG5cdCAqL1xuXHRzdGF0aWMgX21lcmdlU2VnbWVudHMocHRzKSB7XG5cdFx0bGV0IGgxID0gcHRzW3B0cy5sZW5ndGgtMV0ueSA9PSBwdHNbcHRzLmxlbmd0aC0yXS55O1xuXHRcdGxldCBoMjtcblx0XHRmb3IgKGxldCBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XG5cdFx0XHRoMiA9IHB0c1tpXS55ID09IHB0c1tpLTFdLnk7XG5cdFx0XHRpZiAoaDIgPT0gaDEgfHwgKHB0c1tpXS5lcXVhbHMocHRzW2ktMV0pKSlcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0aDEgPSAhaDE7XG5cdFx0fVxuXHR9XG59XG5cbmxpbmtUeXBlc1snZGlyZWN0J10gPSBEaXJlY3RMaW5rO1xubGlua1R5cGVzWydiZXppZXInXSA9IEJlemllckxpbms7XG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xubGlua1R5cGVzWydtYW5oYXR0YW4nXSA9IE1hbmhhdHRhbjtcblxuZXhwb3J0IGRlZmF1bHQgTGluaztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9MaW5rLmpzIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9iZWFuL2JlYW4uanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgREVGQVVMVFMgPSB7XG5cdHN0b3BQcm9wYWdhdGlvbjogZmFsc2Vcbn07XG5cbi8qKlxuICogVGhlIEV2ZW50RGlzcGF0Y2hlciBpcyB0aGUgY2VudHJhbCBldmVudCBtYW5hZ2VtZW50LiBJdCB3aWxsIG1vbml0b3IgYWxsIGV2ZW50cyBhbmQgdHJhbnNsYXRlIGl0IGludG8gdGhlIGEgaGlnaGVyXG4gKiBsZXZlbCBldmVudHMgZm9yIGNvbnN1bXB0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFdmVudERpc3BhdGNoZXIge1xuXHQvKipcblx0ICogQ29uc3RydWN0b3Jcblx0ICogQHBhcmFtIHJvb3QgdGhlIHJvb3QgZWxlbWVudCB0aGF0IHRoZSBtYW5hZ2VyIHdpbGwgbGlzdGVuIHRvLlxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXG5cdCAqIEBwYXJhbSBjb25maWcgdGhlIGNvbmZpZ3VyYXRvbiBmb3IgdGhlIGV2ZW50IGRpc3BhdGNoZXIuXG5cdCAqL1xuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldLCBjb25maWcgPSB7fSkge1xuXHRcdHRoaXMucm9vdCA9IHJvb3Q7XG5cdFx0dGhpcy5yb290TlMgPSByb290LmdldEF0dHJpYnV0ZSgnbnMnKSB8fCAncm9vdCc7XG5cdFx0dGhpcy56b29tU2NhbGUgPSB6b29tU2NhbGU7XG5cdFx0Xy5hc3NpZ24odGhpcywgREVGQVVMVFMsIGNvbmZpZyk7XG5cdFx0dGhpcy5zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xuXHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHR0aGlzLmhhbmRsZXIgPSBfLmJpbmQodGhpcy5oYW5kbGVFdmVudCwgdGhpcyk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cblx0XHQvLyBTaW11bGF0ZSBtb3VzZWVudGVyL21vdXNlbGVhdmUgZXZlbnRzXG5cdFx0dGhpcy5lbnRlclN0YWNrID0gW107XG5cdH1cblxuXHQvKipcblx0ICogU3RhcnQgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdGFydCgpIHtcblx0XHRpZiAodGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9uKHRoaXMucm9vdCwgJ21vdXNlZG93biBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIGRibGNsaWNrIGNsaWNrIGNvbnRleHRtZW51IG1vdXNld2hlZWwnLCB0aGlzLmhhbmRsZXIpO1xuXHRcdHRoaXMuc3RhcnRLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gdHJ1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdG9wIGxpc3RlbmluZyBmb3IgZXZlbnRzLlxuXHQgKi9cblx0c3RvcCgpIHtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdEV2ZW50cy5vZmYodGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdG9wS2V5cygpO1xuXHRcdHRoaXMuc3RhcnRlZCA9IGZhbHNlO1xuXHR9XG5cblx0c3RhcnRLZXlzKCkge1xuXHRcdEV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0c3RvcEtleXMoKSB7XG5cdFx0RXZlbnRzLm9mZihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xuXHR9XG5cblx0em9vbUluKCkge1xuXHRcdHRoaXMuc2NhbGUgKj0gMS4yNTtcblx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XG5cdFx0cmV0dXJuIHRoaXMuc2NhbGU7XG5cdH1cblxuXHR6b29tT3V0KCkge1xuXHRcdHRoaXMuc2NhbGUgKj0gMC44O1xuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcblx0fVxuXG5cdGdldEV2ZW50SW5mbyhldmVudCkge1xuXHRcdGxldCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgbnMsIHN0YWNrID0gW10sIGlzUm9vdCA9IGZhbHNlO1xuXHRcdHdoaWxlICghaXNSb290ICYmIHRhcmdldCAmJiB0YXJnZXQgIT0gZG9jdW1lbnQpIHtcblx0XHRcdG5zID0gdGFyZ2V0LmdldEF0dHJpYnV0ZSgnbnMnKTtcblx0XHRcdGlmIChucykge1xuXHRcdFx0XHRpc1Jvb3QgPSBfLnN0YXJ0c1dpdGgobnMsIFwicm9vdC5cIik7XG5cdFx0XHRcdGlmIChpc1Jvb3QpIHtcblx0XHRcdFx0XHRucyA9IG5zLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghZXZlbnQubnNUYXJnZXQpIGV2ZW50Lm5zVGFyZ2V0ID0gdGFyZ2V0O1xuXHRcdFx0XHRzdGFjay5zcGxpY2UoMCwgMCwgdGFyZ2V0KTtcblx0XHRcdFx0YnVmLnByZXBlbmQobnMpO1xuXHRcdFx0fVxuXHRcdFx0dGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXHRcdGlmICghaXNSb290KVxuXHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGV2ZW50Lm5zVGFyZ2V0O1xuXG5cdFx0Ly8gdGFyZ2V0IHN0YWNrIGlzIGEgc3RhY2sgb2YgYWxsIHRoZSBucyB0YXJnZXRzIHVwIHRvIHRoZSBvbmUgd2l0aCB0aGUgZGF0YSBiaW5kaW5nLlxuXHRcdGV2ZW50LnRhcmdldFN0YWNrID0gc3RhY2s7XG5cdFx0bnMgPSBidWYudG9TdHJpbmcoJy4nKTtcblx0XHRpZiAobnMgPT0gJycpIG5zID0gdGhpcy5yb290TlM7XG5cdFx0cmV0dXJuIHtkYXRhOiBldmVudC5yb290VGFyZ2V0LCBuczogbnN9O1xuXHR9XG5cblx0LyoqXG5cdCAqIFRoZSBtYWluIGV2ZW50IGhhbmRsZXIgbWV0aG9kLCBpdCBwcm9jZXNzZXMgZXZlbnQgYW5kIGdlbmVyYXRlIHJlbGV2YW50IGV2ZW50cyB0byBkaXNwYXRjaC5cblx0ICovXG5cdGhhbmRsZUV2ZW50KGV2ZW50KSB7XG5cdFx0bGV0IHR5cGUgPSBldmVudC50eXBlO1xuXG5cdFx0Ly8gRG8gbm90IGRpc3BhdGNoIG90aGVyIGV2ZW50cyBpZiB3ZSBhcmUgZHJhZ2dpbmcuXG5cdFx0aWYgKHRoaXMuZHJhZ2dpbmcgfHwgRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSByZXR1cm47XG5cblx0XHRsZXQgZGF0YSwgbnMsIHBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpLCBpbmZvLCBpc0tleUV2ZW50ID0gKHR5cGUgPT0gJ2tleWRvd24nIHx8IHR5cGUgPT0na2V5dXAnKTtcblx0XHRpZiAoaXNLZXlFdmVudCkge1xuXHRcdFx0ZGF0YSA9IHRoaXMucm9vdDtcblx0XHRcdG5zID0gS2V5VXRpbHMuZ2V0S2V5RXZlbnQoZXZlbnQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0aWYgKCFpbmZvKSByZXR1cm47XG5cdFx0XHRkYXRhID0gaW5mby5kYXRhO1xuXHRcdFx0bnMgPSBpbmZvLm5zO1xuXHRcdH1cblxuXHRcdC8vVXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImhhbmRsZUV2ZW50IC0gXCIgKyB0eXBlICsgJztucz0nICsgbnMpO1xuXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNld2hlZWwnKSB7XG5cdFx0XHR0aGlzLnNjYWxlICo9IE1hdGgucG93KDIsIGV2ZW50LndoZWVsRGVsdGEgKiAwLjAwMik7XG5cdFx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XG5cdFx0XHRldmVudC5zY2FsZSA9IHRoaXMuc2NhbGU7XG5cdFx0XHR0eXBlID0gJ3pvb20nO1xuXHRcdH1cblxuXHRcdC8vIFNlZSBpZiB3ZSBzaG91bGQgY3JlYXRlIGRyYWcgZXZlbnRzXG5cdFx0aWYgKHR5cGUgPT0gJ21vdXNlZG93bicgJiYgZXZlbnQuYnV0dG9uID09IDAgLypvbmx5IGRyYWcgb24gbGVmdCBjbGljayovKSB7XG5cdFx0XHQvLyBDcmVhdGUgZHJhZyBvYmplY3QuXG5cdFx0XHRjb25zdCBkcmFnT2JqZWN0ID0ge2RhdGE6IGRhdGEsIHBvczogbnMgPT0gJ3Jvb3QnID8gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpIDogcG9zfTtcblx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdC8vIFN0YXJ0IGxpc3RlbmluZyBmb3IgbW91c2UgbW92ZS5cblx0XHRcdGxldCBkcmFnUG9zO1xuXG5cdFx0XHRjb25zdCBtb3VzZW1vdmUgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcblx0XHRcdFx0aWYgKCF0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0Ly8gY2hlY2sgaWYgdGhlIG1vdXNlIGhhcyBtb3ZlZC4gSUUgYWx3YXlzIGZpcmUgbW91c2Vtb3ZlIGFmdGVyIG1vdXNlZG93biBldmVuIGlmIHRoZSBtb3VzZSBoYXNuJ3QgbW92ZWQgeWV0LlxuXHRcdFx0XHRcdGlmIChkcmFnT2JqZWN0LnBvc1swXSA9PSBjdXJyZW50UG9zWzBdICYmIGRyYWdPYmplY3QucG9zWzFdID09IGN1cnJlbnRQb3NbMV0pIHJldHVybjtcblxuXHRcdFx0XHRcdC8vIHN0YXJ0IGRyYWdnaW5nXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XG5cdFx0XHRcdFx0ZXZlbnQucm9vdFRhcmdldCA9IGRyYWdPYmplY3QuZGF0YTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ3N0YXJ0JywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ09iamVjdC5wb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IGN1cnJlbnRQb3M7XG5cdFx0XHRcdHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWcnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdH07XG5cdFx0XHRjb25zdCBtb3VzZXVwID0gKGV2ZW50KSA9PiB7XG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcblx0XHRcdFx0XHRkcmFnUG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXG5cdFx0XHRcdGxldCBpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHRpZiAodGhpcy5kcmFnZ2luZykge1xuXHRcdFx0XHRcdHRoaXMuZHJhZ2dpbmcgPSBmYWxzZTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZ2VuZCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdtb3VzZXVwJywgbnMsIGluZm8uZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2V1cCcsIG1vdXNldXApO1xuXHRcdFx0fTtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRFdmVudHMub24od2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0fVxuXG5cdFx0aWYgKCFpc0tleUV2ZW50KVxuXHRcdFx0dGhpcy5zaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpO1xuXG5cdFx0Ly8gZGlzYWJsZSB0aGUgZGVmYXVsdCBjb250ZXh0IG1lbnVcblx0XHQvL2lmICh0eXBlID09ICdjb250ZXh0bWVudScpXG5cdFx0Ly9cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdH1cblxuXHQvKipcblx0ICogdHJ5IHRvIHNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHMuXG5cdCAqL1xuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHRsZXQgbGFzdCwgc3RhY2s7XG5cdFx0Y29uc3QgY2xlYXJFbnRlclN0YWNrID0gKGspID0+IHtcblx0XHRcdGsgPSBrIHx8IDA7XG5cdFx0XHQvLyBDbGVhciBvZmYgdGhlIGVudGVyIHN0YWNrLlxuXHRcdFx0d2hpbGUgKHRoaXMuZW50ZXJTdGFjay5sZW5ndGggPj0gayArIDEpIHtcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlbGVhdmUnLCBsYXN0Lm5zLCBsYXN0LmRhdGEsIHBvcyk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRjb25zdCBnZXROUyA9IGZ1bmN0aW9uKGluZGV4KSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xuXHRcdFx0XHRsZXQgdmFsID0gc3RhY2tbaV0uZ2V0QXR0cmlidXRlKFwibnNcIik7XG5cdFx0XHRcdGlmIChfLnN0YXJ0c1dpdGgodmFsLCBcInJvb3QuXCIpKVxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XG5cdFx0XHRcdGJ1Zi5hcHBlbmQodmFsKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcblx0XHR9O1xuXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XG5cdFx0XHRpZiAodHlwZSA9PSAnbW91c2VvdmVyJykge1xuXHRcdFx0XHRzdGFjayA9IGV2ZW50LnRhcmdldFN0YWNrO1xuXHRcdFx0XHRsZXQgaXRlbTtcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpIDwgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCkge1xuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcblx0XHRcdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKGkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpdGVtID0ge2RhdGE6IGRhdGEsIG5zOiBnZXROUyhpKSwgdGFyZ2V0OiBzdGFja1tpXX07XG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNlZW50ZXInLCBpdGVtLm5zLCBkYXRhLCBwb3MpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxuXHRcdFx0XHRcdGNsZWFyRW50ZXJTdGFjayhzdGFjay5sZW5ndGgpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAobnMgPT0gdGhpcy5yb290TlMgJiYgdGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+IDApXG5cdFx0XHRjbGVhckVudGVyU3RhY2soKTtcblx0fVxuXG5cdGRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKSB7XG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXG5cdFx0Ly9cdFV0aWxzLmxvZygnRXZlbnREaXNwYXRjaGVyJywgXCJkaXNwYXRjaCAtIFwiICsgdHlwZSArICcuJyArIG5zICsgJzsnICsgcG9zICsgJztyb290VGFyZ2V0PScgKyBldmVudC5yb290VGFyZ2V0ICsgJztkYXRhPScgKyBkYXRhKTtcblx0XHRpZiAoIXRoaXMuc3RhcnRlZCkgcmV0dXJuO1xuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcblx0XHRfLmZvckVhY2godGhpcy5saXN0ZW5lcnMsIChsaXN0ZW5lcnMsIGtleSkgPT4ge1xuXHRcdFx0aWYgKEV2ZW50RGlzcGF0Y2hlci5tYXRjaChuc1R5cGUsIGxpc3RlbmVycy5yZWdleHAgPyBsaXN0ZW5lcnMucmVnZXhwIDoga2V5KSkge1xuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcblx0XHRcdFx0XHRpZiAoIWxpc3RlbmVyLmNvbnRleHQpXG5cdFx0XHRcdFx0XHRsaXN0ZW5lci5jYWxsYmFjay5hcHBseSh3aW5kb3csIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KGxpc3RlbmVyLmNvbnRleHQsIFt0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudF0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxuXHRcdGlmICh0aGlzLnN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24pXG5cdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0fVxuXG5cdGdldFBvc2l0aW9uKGV2ZW50KSB7XG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xuXHRcdGlmKCEgXy5pc05hTihwb3NbMF0pICYmICEgXy5pc05hTihwb3NbMV0pKVxuXHRcdFx0dGhpcy5sYXN0UG9zaXRpb24gPSBwb3M7XG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhIGtleSBldmVudCBoYW5kbGVyXG5cdCAqIC8vIEtleSBpcyBvYmplY3Qge2N0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGNvZGV9XG5cdCAqL1xuXHRyZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0gfHwgKHRoaXMubGlzdGVuZXJzW2tleV0gPSBbXSk7XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XS5wdXNoKGxpc3RlbmVyKTtcblx0fVxuXG5cdHVucmVnaXN0ZXJLZXkodHlwZSwga2V5LCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xuXHRcdFx0Xy5mb3JFYWNoKGtleSwgKGspID0+IHtcblx0XHRcdFx0dGhpcy51bnJlZ2lzdGVyS2V5KHR5cGUsIGssIGNhbGxiYWNrLCBjb250ZXh0KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcblx0XHRrZXkgPSBuZXcgU3RyaW5nQnVmZmVyKHR5cGUpLmFwcGVuZChrZXkpLnRvU3RyaW5nKCcuJyk7XG5cblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNba2V5XSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyBhbiBldmVudCBoYW5kbGVyXG5cdCAqL1xuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XG5cdFx0aWYgKF8uaXNBcnJheSh0eXBlKSkge1xuXHRcdFx0Xy5mb3JFYWNoKHR5cGUsICh0KSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgbGlzdGVuZXIgPSB7Y2FsbGJhY2s6IGNhbGxiYWNrLCBjb250ZXh0OiBjb250ZXh0LCB6SW5kZXg6IHpJbmRleH07XG5cdFx0bGV0IHJlZ2V4cCA9IG51bGw7XG5cdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcblx0XHRcdHJlZ2V4cCA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdHlwZSArICcnO1xuXHRcdH1cblx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXSB8fCAodGhpcy5saXN0ZW5lcnNbdHlwZV0gPSBbXSk7XG5cdFx0aWYgKHJlZ2V4cCAmJiAhdGhpcy5saXN0ZW5lcnNbdHlwZV0ucmVnZXhwKVxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucmVnZXhwID0gcmVnZXhwO1xuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCkge1xuXHRcdGlmICh0eXBlIGluc3RhbmNlb2YgUmVnRXhwKVxuXHRcdFx0dHlwZSA9IHR5cGUgKyAnJztcblx0XHRsZXQgbGlzdGVuZXJzID0gdGhpcy5saXN0ZW5lcnNbdHlwZV0sIGxpc3RlbmVyO1xuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0dGhpcy5zdG9wKCk7XG5cdFx0ZGVsZXRlIHRoaXMucm9vdDtcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XG5cdFx0ZGVsZXRlIHRoaXMuZW50ZXJTdGFjaztcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVjayBpZiB0aGUgcmVnaXN0ZXJlZCBldmVudCB0eXBlIG1hdGNoZXMgdGhlIHJlYWwgZXZlbnQgdHlwZS4gXCIqXCIgaXMgYWxsb3dlZCBhcyBhIHdpbGQgY2FyZC5cblx0ICovXG5cdHN0YXRpYyBtYXRjaChuc1R5cGUsIHJlZ2lzdGVyZWRUeXBlKSB7XG5cdFx0aWYgKHJlZ2lzdGVyZWRUeXBlIGluc3RhbmNlb2YgUmVnRXhwKVxuXHRcdFx0cmV0dXJuIG5zVHlwZS5tYXRjaChyZWdpc3RlcmVkVHlwZSk7XG5cblx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXHRcdC8qY29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcblx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxKVxuXHRcdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcblxuXHRcdGxldCBzdWJzdHIsIGluZGV4ID0gMDtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XG5cdFx0XHRzdWJzdHIgPSBuc1R5cGUuc2xpY2UoaW5kZXgpO1xuXHRcdFx0aW5kZXggPSBzdWJzdHIuaW5kZXhPZihhcnJbaV0pO1xuXHRcdFx0aWYgKGluZGV4IDwgMClcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0aW5kZXggKz0gYXJyW2ldLmxlbmd0aDtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7Ki9cblx0fVxuXG5cdHN0YXRpYyBtb3VzZShjb250YWluZXIsIGUpIHtcblx0XHRpZiAoZS5jaGFuZ2VkVG91Y2hlcykgZSA9IGUuY2hhbmdlZFRvdWNoZXNbMF07XG5cdFx0bGV0IHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xuXHRcdGlmIChzdmcuY3JlYXRlU1ZHUG9pbnQpIHtcblx0XHRcdGxldCBwb2ludCA9IHN2Zy5jcmVhdGVTVkdQb2ludCgpO1xuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcblx0XHRcdHBvaW50ID0gcG9pbnQubWF0cml4VHJhbnNmb3JtKGNvbnRhaW5lci5nZXRTY3JlZW5DVE0oKS5pbnZlcnNlKCkpO1xuXHRcdFx0cmV0dXJuIFtwb2ludC54LCBwb2ludC55XTtcblx0XHR9XG5cdFx0bGV0IHJlY3QgPSBjb250YWluZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0cmV0dXJuIFtlLmNsaWVudFggLSByZWN0LmxlZnQgLSBjb250YWluZXIuY2xpZW50TGVmdCwgZS5jbGllbnRZIC0gcmVjdC50b3AgLSBjb250YWluZXIuY2xpZW50VG9wXTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qcyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vICAgICAgICAgICBUaGUgS2V5IFV0aWxpdHkgQ0xhc3MgZm9yIHRoZSBFdmVudCBEaXNwYXRjaGVyICAgICAgICAgIFx0ICAgICAvL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5cbi8qKlxuICogS0VZIGNvbnN0YW50XG4gKi9cbmNvbnN0IEtFWSA9IHtcblx0QUxUICAgICAgICAgIDogMTgsXG5cdEJBQ0tfU1BBQ0UgICA6IDgsXG5cdENBUFNfTE9DSyAgICA6IDIwLFxuXHRDT05UUk9MICAgICAgOiAxNyxcblx0REVMRVRFICAgICAgIDogNDYsXG5cdERPV04gICAgICAgICA6IDQwLFxuXHRFTkQgICAgICAgICAgOiAzNSxcblx0RU5URVIgICAgICAgIDogMTMsXG5cdEVTQ0FQRSAgICAgICA6IDIyMCxcblx0SE9NRSAgICAgICAgIDogMzYsXG5cdExFRlQgICAgICAgICA6IDM3LFxuXHRNRVRBICAgICAgICAgOiAyMjQsXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcblx0UEFHRV9ET1dOICAgIDogMzQsXG5cdFBBR0VfVVAgICAgICA6IDMzLFxuXHRQQVVTRSAgICAgICAgOiAxOSxcblx0UFJJTlRTQ1JFRU4gIDogNDQsXG5cdFJJR0hUICAgICAgICA6IDM5LFxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXG5cdFNISUZUICAgICAgICA6IDE2LFxuXHRTUEFDRSAgICAgICAgOiAzMixcblx0VEFCICAgICAgICAgIDogOSxcblx0VVAgICAgICAgICAgIDogMzhcblx0Ly9BREQgICAgICAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyA2MSAgOiAxODcsXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcblx0aWYgKCFldmVudCB8fCAhZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR2YXIga2V5ID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaDtcblxuXHQvLyBOZWVkIHRvIGZpbmQgYSB3YXkgdG8gYXZvaWQgdGhpc1xuXHRpZiAoa2V5ID49IDE2ICYmIGtleSA8PSAxOCkge1xuXHRcdGtleSA9IG51bGw7XG5cdH1cblxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcblx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XG5cdGlmIChhbHQpIGJ1Zi5hcHBlbmQoXCJBTFRcIik7XG5cdGlmIChzaGlmdCkgYnVmLmFwcGVuZChcIlNISUZUXCIpO1xuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XG5cdGlmIChrZXkpIGJ1Zi5hcHBlbmQoa2V5KTtcblxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdmlldy9NYXJrZXJcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZSxcblx0c3RhcnRNYXJrZXI6IG51bGwsXG5cdGVuZE1hcmtlcjoge1xuXHRcdGlkOiAnRGVmYXVsdF9FbmRNYXJrZXInLFxuXHRcdHR5cGU6ICdhcnJvdycsXG5cdFx0c2l6ZTogMTAsXG5cdFx0Y29sb3I6ICcjMGVhMTE3J1xuXHR9LFxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xuXHRzdGFydDogWzAsIDBdLFxuXHRlbmQ6IFs0MDAsIDIwMF1cbn07XG5cbmNsYXNzIEdyYXBoIHtcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xuXHRcdHRoaXMuZWRnZXMgPSB7fTtcblxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcuZWRnZVR5cGVzLCBcIkVkZ2VzXCIsIGVkZ2VEZWZhdWx0cyk7XG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XG5cdFx0bGV0IGVkZ2VUeXBlcyA9IFV0aWxzLnR5cGUoRWRnZS5uYW1lc3BhY2UpLCBtYXJrZXIsIG1hcmtlckNvbmZpZztcblx0XHRlZGdlVHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XG5cdFx0ZGVsZXRlIGNvbmZpZy5lZGdlVHlwZXM7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHRcdHRoaXMucm9vdCA9IG51bGw7XG5cdFx0aWYgKG1vZGVsKVxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xuXHR9XG5cblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudHlwZSkge1xuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXG5cdCAqIEBwYXJhbSBjb25maWdcblx0ICogQHBhcmFtIHBhcmVudFxuXHQgKiBAcGFyYW0gcG9zXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xuXHRcdGxldCBOb2RlQ2xhc3MgPSBHcmFwaC5nZXRKU0NsYXNzKGNvbmZpZywgTm9kZSk7XG5cdFx0bGV0IG5vZGUgPSBuZXcgTm9kZUNsYXNzKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRpZiAocGFyZW50KVxuXHRcdFx0R3JhcGguYWRkQ2hpbGQocGFyZW50LCBub2RlLCBwb3MpO1xuXHRcdGVsc2Uge1xuXHRcdFx0dGhpcy5yb290ID0gbm9kZTtcblx0XHRcdHRoaXMucm9vdC5wcm9wKCdyb2xlJywgJ3Jvb3QnKTtcblx0XHR9XG5cblx0XHR0aGlzLm5vZGVzW25vZGUuaWRdID0gbm9kZTtcblx0XHRyZXR1cm4gbm9kZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSBuZXcgRWRnZVxuXHQgKiBAcGFyYW0gY29uZmlnXG5cdCAqIEBwYXJhbSBwYXJlbnRcblx0ICogQHBhcmFtIGZyb21cblx0ICogQHBhcmFtIHRvXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIGZyb20sIHRvKSB7XG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcblx0XHRsZXQgZWRnZSA9IG5ldyBFZGdlQ2xhc3ModGhpcywgY29uZmlnLCBmcm9tLCB0byk7XG5cblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xuXHRcdHRoaXMuZWRnZXNbZWRnZS5pZF0gPSBlZGdlO1xuXHRcdHJldHVybiBlZGdlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEFkZGVkIGEgbmV3IGNoaWxkIHRvIHRoZSBwYXJlbnQuIFRoZSBwYXJlbnQgaGFzIHRvIGJlIGEgbm9kZS5cblx0ICogQHBhcmFtIHBhcmVudFxuXHQgKiBAcGFyYW0gY2hpbGRcblx0ICovXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XG5cdFx0aWYgKCFwYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4gPSBbXTtcblxuXHRcdGlmIChjaGlsZC5wYXJlbnQgIT0gcGFyZW50KSB7XG5cdFx0XHRwYXJlbnQuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG5cblx0XHRcdGlmIChjaGlsZC5wYXJlbnQgJiYgY2hpbGQucGFyZW50LmNoaWxkcmVuKVxuXHRcdFx0XHRjaGlsZC5wYXJlbnQuY2hpbGRyZW4gPSBfLndpdGhvdXQoY2hpbGQucGFyZW50LmNoaWxkcmVuLCBjaGlsZCk7XG5cdFx0fVxuXHRcdGNoaWxkLnBhcmVudCA9IHBhcmVudDtcblx0fVxuXG5cdGxvYWRNb2RlbChtb2RlbCwgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCkge1xuXHRcdHZhciBub2RlcyA9IG1vZGVsLm5vZGVzO1xuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xuXHRcdGRlbGV0ZSBtb2RlbC5ub2Rlcztcblx0XHRkZWxldGUgbW9kZWwuZWRnZXM7XG5cblx0XHR2YXIgbm9kZSA9IHRoaXMuYWRkTm9kZShtb2RlbCwgcGFyZW50KTtcblx0XHRpZiAobm9kZXMpIHtcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XG5cdFx0XHRcdHRoaXMubG9hZE1vZGVsKGNoaWxkLCBub2RlKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoZWRnZXMpIHtcblx0XHRcdF8uZm9yRWFjaChlZGdlcywgKGVkZ2UpID0+IHtcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xuXHRcdFx0XHRpZiAoZWRnZS5mcm9tKVxuXHRcdFx0XHRcdGZyb20gPSB0aGlzLm5vZGVzW2VkZ2UuZnJvbV07XG5cdFx0XHRcdGlmIChlZGdlLnRvKVxuXHRcdFx0XHRcdHRvID0gdGhpcy5ub2Rlc1tlZGdlLnRvXTtcblx0XHRcdFx0dGhpcy5hZGRFZGdlKGVkZ2UsIG5vZGUsIGZyb20sIHRvKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdGdldCBjdXJyZW50Um9vdCgpIHtcblx0XHRyZXR1cm4gdGhpcy5yb290O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXHRkZXN0cm95KCkge31cbn1cblxuR3JhcGguREVGQVVMVFMgPSB7XG5cdGFsbG93RGFuZ2xpbmdFZGdlczogdHJ1ZSxcblx0bXVsdGlDb25uZWN0OiBmYWxzZSxcblx0cmVhZE9ubHk6IGZhbHNlLFxuXHR2aWV3T25seTogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEdyYXBoO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyYXBoL0dyYXBoLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcblxuLyoqXG4gKiBBIE5vZGUgcmVwcmVzZW50cyB2ZXJ0ZXggb2YgdGhlIGdyYXBoLlxuICovXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdOJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLmluRWRnZXMgPSBbXTtcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XG5cdFx0dGhpcy5wb3J0cyA9IG51bGw7XG5cdFx0dGhpcy5wYXJlbnQgPSBudWxsO1xuXHR9XG5cblx0aXNBbmNlc3RvcihuKSB7XG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XG5cdFx0dmFyIG5vZGUgPSBuLnBhcmVudDtcblx0XHR3aGlsZSAobm9kZSkge1xuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxuXHRcdFx0bm9kZSA9IG5vZGUucGFyZW50O1xuXHRcdH1cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcblx0XHR2YXIgZWRnZXMgPSBlZGdlLnNvdXJjZSA9PSB0aGlzID8gdGhpcy5vdXRFZGdlcyA6IHRoaXMuaW5FZGdlcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xuXHRcdFx0XHRlZGdlcy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBpbmNvbWluZyBlZGdlXG5cdGFkZEluRWRnZShlZGdlLCBwb3MpIHtcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXG5cdFx0XHR0aGlzLmluRWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XG5cdH1cblxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxuXHRhZGRPdXRFZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZCB8fCBwb3MgPiBlZGdlLmxlbmd0aCAtIDEpXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5vdXRFZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdHJlbmRlckNoaWxkcmVuKHZpZXcpIHtcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdF8uZm9yRWFjaCh0aGlzLmNoaWxkcmVuLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdFx0fVxuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldFBvcnQoa2V5LCBwb3J0TmFtZSA9ICdhdXRvJywgZW5kUHQsIG9ydGhvZ29uYWwpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xuXHRcdFx0cmV0dXJuIHNoYXBlLmdldFBlcmltZXRlcihlbmRQdCwgb3J0aG9nb25hbCk7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKFwibGFiZWxcIikgPyB0aGlzLnByb3AoXCJsYWJlbFwiKSA6IFwidW5kZWZpbmVkXCI7XG5cdFx0aWYgKF8uaXNBcnJheShsYWJlbCkpXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xuXHRcdHJldHVybiAnTm9kZTp7aWQ6JyArIHRoaXMuaWQgKyAnO2xhYmVsOicgKyBsYWJlbCArICc7dHlwZTonICsgdGhpcy5wcm9wcy5jb25zdHJ1Y3Rvci50eXBlTmFtZSArICd9Jztcblx0fVxufVxuTm9kZS5uYW1lc3BhY2UgPSBcIk5vZGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5vZGU7XG5cbi8qXG5cbi8qKlxuICogVGhlIERyaWxsRG93blBhcmVudCBpcyB0aGUgcGFyZW50IHRoYXQgZGlzcGxheXMgdGhlIHZlcnRleCB3aGVuIGRyaWxsZWQgZG93bi5cbiAqXG5WZXJ0ZXgucHJvdG90eXBlLmdldERyaWxsRG93blBhcmVudCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5wYXJlbnQ7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmlzTG9ja2VkID0gZnVuY3Rpb24oKSB7XG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcblx0cmV0dXJuICEobW9kZSAmIEdyYXBoLkFMTE9XX0lOVEVSQUNUSU9OUyk7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmdldENydW1iVGV4dCA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5pc0xvY2tlZCgpKVxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIik7XG59O1xuXG5WZXJ0ZXgucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICghdGhpcy5wYXJlbnQgfHwgIXRoaXMucGFyZW50LmlzTG9ja2VkKCkpICYmIFZlcnRleC5zdXBlcmNsYXNzLmNhbkVkaXQuY2FsbCh0aGlzKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XG59O1xuXG4qL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyYXBoL05vZGUuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XG5cbi8qKlxuICogVGhlIENlbGwgaXMgdGhlIGNvbW1vbiBwYXJlbnQgZm9yIE5vZGUgYW5kIEVkZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENlbGwge1xuXHRjb25zdHJ1Y3RvcihncmFwaCwgY29uZmlnID0ge2lkOiBfLnVuaXF1ZUlkKCl9KSB7XG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdHRoaXMuaWQgPSBjb25maWcuaWQ7XG5cdFx0ZGVsZXRlIGNvbmZpZy5pZDtcblxuXHRcdC8vIEluaXRpYWxpemUgZGVjb3JhdG9yc1xuXHRcdGlmIChjb25maWcuZGVjb3JhdG9ycykge1xuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcblx0XHRcdGRlbGV0ZSBjb25maWcuZGVjb3JhdG9ycztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIFZpZXcgUHJvcGVydGllc1xuXHRcdGlmIChjb25maWcudmlld3MpIHtcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy52aWV3cztcblx0XHR9XG5cblx0XHQvLyBJbml0aWFsaXplIHR5cGVcblx0XHR2YXIgdHlwZSA9IGNvbmZpZy50eXBlIHx8IFwiRGVmYXVsdFwiO1xuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoXCJUeXBlIG5vdCBmb3VuZCBcIiArIGNvbmZpZy50eXBlKTtcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XG5cdFx0dGhpcy5wcm9wcyA9IG5ldyB0eXBlKGNvbmZpZyk7XG5cdH1cblxuXHRwcm9wKG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKVxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XG5cdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIEdldC9TZXQgcHJvcGVydHkgc3RvcmVkIGJ5IHZpZXdzLlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBuYW1lXG5cdCAqIEBwYXJhbSB2YWx1ZVxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdHZpZXdQcm9wKGtleSA9ICdkZWZhdWx0JywgbmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcblx0XHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xuXHRcdH1cblx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jykge1xuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCF0aGlzLnZpZXdQcm9wc1trZXldKVxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XG5cdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdID0gdmFsdWU7XG5cdFx0fVxuXHR9XG5cblx0Y3JlYXRlRGVjb3JhdG9ycyhkZWNvcmF0b3JzKSB7fVxuXG5cdC8qKlxuXHQgKiBHZXQgcHJvcGVydGllcyBuZWVkZWQgZm9yIHJlbmRlcmluZyB0aGlzIGVsZW1lbnRcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxuXHQgKi9cblx0Z2V0VmlldyhrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0cmV0dXJuIF8uYXNzaWduKHtcblx0XHRcdGlkOiB0aGlzLmlkLFxuXHRcdFx0a2V5OiBrZXksXG5cdFx0XHRjbGFzc05hbWU6IHRoaXMuY29tcHV0ZWRDbGFzc05hbWUsXG5cdFx0XHRzdHlsZTogdGhpcy52aWV3UHJvcChrZXksICdzdHlsZScpLFxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZVxuXHRcdH0sIHNoYXBlKTtcblx0fVxuXG5cdGdldFNoYXBlKGtleSkge1xuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcblxuXHRcdGxldCBzaGFwZUNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XG5cdFx0bGV0IHggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ4XCIpO1xuXHRcdGxldCB5ID0gdGhpcy52aWV3UHJvcChrZXksIFwieVwiKTtcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcblx0XHRsZXQgaGVpZ2h0ID0gdGhpcy52aWV3UHJvcChrZXksIFwiaGVpZ2h0XCIpO1xuXHRcdHNoYXBlID0gbmV3IHNoYXBlQ2xhc3MoeCwgeSwgd2lkdGgsIGhlaWdodCwgc2hhcGVDb25maWcpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xuXHRcdHJldHVybiBzaGFwZTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0bGV0IHRlbXBsYXRlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdmlldy5pZCk7XG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xuXHRcdFx0Ly9jcmVhdGUgdGhlIHRlbXBsYXRlXG5cdFx0XHRsZXQgcm9sZSA9IHRoaXMucHJvcCgncm9sZScpO1xuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xuXHRcdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxuXHRcdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcy5nZXRWaWV3KHZpZXcuaWQpKTtcblx0fVxuXG5cdHJlbmRlclNoYXBlKHZpZXcpIHtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xuXHRcdGlmIChzaGFwZSlcblx0XHRcdHJldHVybiBzaGFwZS5yZW5kZXIodmlldyk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwodmlldykge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguY3VycmVudFJvb3QpXG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcblx0XHRpZiAoYm94KVxuXHRcdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHRsZXQgYm94ID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94Jywga2V5KTtcblx0XHRpZiAoYm94KSByZXR1cm4gYm94O1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHQvLyBKdXN0IGdldCB0aGUgY29uZmlnIHdpbGwgaGF2ZSBhIHBvc2l0aXZlIHBlcmZvcm1hbmNlIGJvb3N0IGZvciBJRTExIGFuZCBJRTEwLlxuXHRcdGJveCA9IExhYmVsLmdldExhYmVsQm94KHRoaXMucHJvcCgnbGFiZWwnKSwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCBzaGFwZS53aWR0aCwgc2hhcGUuaGVpZ2h0KTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XG5cdFx0cmV0dXJuIGJveDtcblx0fVxuXG5cdGdldCBjb21wdXRlZENsYXNzTmFtZSgpIHtcblx0XHRpZiAoIXRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lKSB7XG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcblx0XHRcdGxldCBwcm9wcyA9IHRoaXMucHJvcHM7XG5cdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cdFx0XHR3aGlsZSAocHJvcHMpIHtcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xuXHRcdFx0XHRwcm9wcyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm9wcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLl9jb21wdXRlZENsYXNzTmFtZSA9IGJ1Zi50b1N0cmluZygnICcpO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XG5cdH1cblxuXHRnZXQgbmFtZXNwYWNlKCkge1xuXHRcdGlmICh0aGlzID09IHRoaXMuZ3JhcGguY3VycmVudFJvb3QpIHJldHVybiAnJztcblx0XHRyZXR1cm4gXCJyb290LlwiICsgdGhpcy5wcm9wKFwicm9sZVwiKTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMuZGVjb3JhdG9ycztcblx0XHRkZWxldGUgdGhpcy5wcm9wcztcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XG5cdFx0dGhpcy5kZXN0cm95ZWQgPSB0cnVlO1xuXHR9XG59XG5cbi8qXG5cbkNlbGwucHJvdG90eXBlLm1vdmUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ4XCIsIE1hdGgucm91bmQoeCkpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24odywgaCkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwid2lkdGhcIiwgdyk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbkVkaXQgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZWRpdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5TZWxlY3QgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJkcmFnZ2FibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5SZXNpemUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwicmVzaXphYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0VHlwZUZyb21TdHJpbmcgPSBmdW5jdGlvbih0eXBlU3RyKSB7XG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcblx0dGhpcy5tb2RpZmllcnMgPSBudWxsO1xuXHR2YXIgbW9kaWZpZXJTZXR0aW5ncyA9IHRoaXMuZ2V0UHJvcGVydHkoXCJtb2RpZmllclNldHRpbmdzXCIpO1xuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xuXHRcdF8uZWFjaChtb2RpZmllcnMsIGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdFx0Y29uZmlnLnR5cGUgPSB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShjb25maWcuY2xhc3NOYW1lKTtcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcblx0XHRcdGlmICghY29uZmlnLnR5cGUgfHwgIWNvbmZpZy5zZXR0aW5nKSByZXR1cm47XG5cblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdH0sIHRoaXMpO1xuXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3Ncblx0XHRfLmVhY2gobW9kaWZpZXJTZXR0aW5ncywgZnVuY3Rpb24oc2V0dGluZywgbmFtZSkge1xuXHRcdFx0aWYgKHNldHRpbmcuc2hvd0Fsd2F5cyAmJiAoIXRoaXMubW9kaWZpZXJzIHx8ICF0aGlzLm1vZGlmaWVyc1tuYW1lXSkpIHtcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XG5cdFx0XHRcdGlmICghY29uZmlnLnR5cGUpIHJldHVybjtcblx0XHRcdFx0dGhpcy5hZGRNb2RpZmllcihuYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cdH1cbn07XG5cbkNlbGwucHJvdG90eXBlLmFkZE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSwgbW9kaWZpZXIpIHtcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcblx0XHR0aGlzLm1vZGlmaWVycyA9IHt9O1xuXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSB0cnVlO1xuXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxuXHRpZiAobW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUHJvY2Vzc01vZGlmaWVyXCIgfHwgbW9kaWZpZXIubmFtZSA9PSBcIkhvdmVyUmVzdWx0c1wiKVxuXHRcdG1vZGlmaWVyLnNob3dIZWFkZXIgPSBmYWxzZTtcblxuXHR0aGlzLm1vZGlmaWVyc1tuYW1lXSA9IG1vZGlmaWVyO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXJzID0gZnVuY3Rpb24oKSB7XG5cdGlmIChfLmlzVW5kZWZpbmVkKHRoaXMubW9kaWZpZXJzKSlcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xuXHRyZXR1cm4gdGhpcy5tb2RpZmllcnM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUpIHtcblx0dmFyIG1vZGlmaWVycyA9IHRoaXMuZ2V0TW9kaWZpZXJzKCk7XG5cdGlmIChtb2RpZmllcnMpXG5cdFx0cmV0dXJuIG1vZGlmaWVyc1tuYW1lXTtcblx0cmV0dXJuIG51bGw7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBmYWxzZTtcbn07XG4qL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyYXBoL0NlbGwuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbC9DYWNoZS5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XG5cbmxldCBkZWZhdWx0Q29uZmlnID0ge1xuXHRmb250U2l6ZTogMTEsXG5cdGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcblx0Zm9udFN0eWxlOiAwLFxuXHRmb250Q29sb3I6ICdibGFjaycsXG5cdHBhZGRpbmc6IDAsXG5cdGxpbmVQYWRkaW5nOiAwLFxuXHRhbGlnbjogXCJsZWZ0XCIsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdHJvdGF0aW9uOiBudWxsLFxuXHRnZW9tZXRyeToge3g6IDAsIHk6IDAsIGFuY2hvclk6IDAsIG9mZnNldFg6IDAsIG9mZnNldFk6IDB9XG59O1xuXG4vKipcbiAqIFRoZSBsYWJlbCBvYmplY3QgaGFuZGxlcyBsYWJlbCBzaXppbmcvcG9zaXRpb25pbmdcbiAqL1xuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uKCkge1xuXHRsZXQgc3RyaW5nTWVhc3VyZUVsID0gbnVsbCwgbWVhc3VyZURpdiwgYmFzZWxpbmVEaXY7XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgc2l6ZSBvZiB0aGUgc3RyaW5nLlxuXHQgKi9cblx0bGV0IGdldFN0cmluZ1NpemUgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XG5cdFx0Ym9sZCA9ICFfLmlzVW5kZWZpbmVkKGJvbGQpID8gYm9sZDogZmFsc2U7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxuXHRcdGlmICghc3RyaW5nTWVhc3VyZUVsKSB7XG5cdFx0XHRzdHJpbmdNZWFzdXJlRWwgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdpZnJhbWUnLCB7aWQ6XCJfQ29tcHV0ZVN0eWxlc0lmcmFtZVwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTpcImhpZGRlblwiLCB3aWR0aDpcImF1dG9cIn0pO1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xuXHRcdFx0dmFyIGRvYyA9IHN0cmluZ01lYXN1cmVFbC5jb250ZW50V2luZG93LmRvY3VtZW50O1xuXHRcdFx0ZG9jLm9wZW4oKTtcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcblx0XHRcdFx0PGRpdiBpZD1cImJhc2VsaW5lRGl2XCIgc3R5bGU9XCJoZWlnaHQ6MTAwcHg7XCI+PHNwYW4gc3R5bGU9XCJsaW5lLWhlaWdodDowXCI+VDwvc3Bhbj48c3BhbiBzdHlsZT1cImhlaWdodDoxMDAlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvc3Bhbj48L2Rpdj5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwibWVhc3VyZURpdlwiIHN0eWxlPVwicG9zaXRpb246YWJzb2x1dGU7d2lkdGg6YXV0bztoZWlnaHQ6YXV0bztwYWRkaW5nOjA7d2hpdGUtc3BhY2U6cHJlLXdyYXA7d29yZC13cmFwOmJyZWFrLXdvcmQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9kaXY+XFxcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcblx0XHRcdGRvYy5jbG9zZSgpO1xuXHRcdFx0bWVhc3VyZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcIm1lYXN1cmVEaXZcIik7XG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xuXHRcdH1cblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250U2l6ZSA9IG1lYXN1cmVEaXYuc3R5bGUuZm9udFNpemUgPSBmb250U2l6ZTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gbWVhc3VyZURpdi5zdHlsZS5mb250V2VpZ2h0ID0gYm9sZCA/ICdib2xkJyA6ICdub3JtYWwnO1xuXHRcdG1lYXN1cmVEaXYuaW5uZXJIVE1MID0gc3RyO1xuXG5cdFx0bGV0IHN0cnV0ID0gYmFzZWxpbmVEaXYuZmlyc3RDaGlsZDtcblx0XHRsZXQgYmFzZWxpbmVIZWlnaHQgPSBzdHJ1dC5vZmZzZXRUb3AgKyBzdHJ1dC5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRIZWlnaHQgLSBiYXNlbGluZURpdi5vZmZzZXRUb3A7XG5cblx0XHRyZXR1cm4ge3dpZHRoOiBtZWFzdXJlRGl2Lm9mZnNldFdpZHRoLCBoZWlnaHQ6IG1lYXN1cmVEaXYub2Zmc2V0SGVpZ2h0LCBiYXNlbGluZTogYmFzZWxpbmVIZWlnaHR9O1xuXHR9LCBmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBmb250U2l6ZSArICc7JyArIGZvbnRGYW1pbHkgKyAnOycgKyBib2xkOyB9KTtcblxuXHQvKipcblx0ICogQ3JlYXRlIGEgd3JhcHBlZCB0ZXh0LlxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cblx0ICogQHBhcmFtIHttYXhXaWR0aH0gdGhlIG1heGltdW0gd2lkdGggdGhpcyBzdHJpbmcgY2FuIHRha2UuXG5cdCAqIEBwYXJhbSB7Zm9udFNpemV9XG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cblx0ICogQHBhcmFtIHtib2xkfVxuXHQgKi9cblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcblx0XHRtYXhXaWR0aCA9IG1heFdpZHRoIHx8IDA7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdGxldCBhcnIgPSBbXTtcblx0XHRsZXQgc3BhY2VTaXplID0gZ2V0U3RyaW5nU2l6ZShcIiZuYnNwO1wiLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCksIHNwYWNlID0gc3BhY2VTaXplLndpZHRoO1xuXHRcdGFyci5saW5lSGVpZ2h0ID0gc3BhY2VTaXplLmhlaWdodDtcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XG5cblx0XHRpZiAoIW1heFdpZHRoIHx8ICFzdHJpbmcgfHwgc3RyaW5nID09IFwiXCIpIHtcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XG5cdFx0XHRhcnIud2lkdGggPSAoIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikgPyBzcGFjZSA6IGdldFN0cmluZ1NpemUoc3RyaW5nLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cdFx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQ7XG5cdFx0XHRyZXR1cm4gYXJyO1xuXHRcdH1cblxuXHRcdHZhciB3aWR0aCA9IDA7XG5cdFx0Ly9zcGxpdCB0aGUgdGV4dCBieSBsaW5lc1xuXHRcdHZhciBsaW5lcyA9IHN0cmluZy5zcGxpdCgnXFxuJyk7XG5cblx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xuXHRcdFx0Ly9zcGxpdCBlYWNoIGxpbmUgYnkgd29yZFxuXHRcdFx0dmFyIHdvcmRzID0gbGluZXNbal0uc3BsaXQoL1xccy8pO1xuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcblxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XG5cdFx0XHRcdHdvcmRXaWR0aCA9IGdldFN0cmluZ1NpemUod29yZCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpLndpZHRoO1xuXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XG5cdFx0XHRcdFx0aWYgKG5ld0xpbmUpIHtcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQod29yZCk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xuXHRcdFx0XHRcdFx0aWYgKGkgPCB3b3Jkcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGluZSA9IFwiXCI7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gMDtcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXG5cdFx0XHRcdFx0XHRpLS07IC8vIG1vdmUgYmFjayBvbmUgd29yZC5cblx0XHRcdFx0XHRuZXdMaW5lID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsaW5lID0gbmV3TGluZSA/IHdvcmQgOiBsaW5lICsgXCIgXCIgKyB3b3JkO1xuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IG5ld0xpbmUgPyB3b3JkV2lkdGggOiBjdXJyZW50V2lkdGggKyBzcGFjZSArIHdvcmRXaWR0aDtcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xuXHRcdFx0XHRcdG5ld0xpbmUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYgKGxpbmUgIT0gXCJcIilcblx0XHRcdFx0YnVmLmFwcGVuZChsaW5lKTtcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xuXHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XG5cdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRhcnIud2lkdGggPSB3aWR0aDtcblx0XHRhcnIuaGVpZ2h0ID0gYXJyLmxpbmVIZWlnaHQgKiBhcnIubGVuZ3RoO1xuXHRcdHJldHVybiBhcnI7XG5cdH0sIGZ1bmN0aW9uKHN0ciwgbWF4V2lkdGgsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7IHJldHVybiBzdHIgKyAnOycgKyBtYXhXaWR0aCArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiAgR2V0IHRoZSB2aWV3IGluZm9ybWF0aW9uIGZvciBob3cgdG8gZGlzcGxheSB0aGUgbGFiZWwuXG5cdCAqIEBwYXJhbSBsYWJlbCBUaGUgc3RyaW5nIHRoYXQgbmVlZHMgdG8gYmUgZGlzcGxheWVkXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXG5cdCAqIEBwYXJhbSBjb250YWluZXJIZWlnaHQgVGhlIGhlaWdodCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGxhYmVsQ29uZmlnIFRoZSBjb25maWd1cmF0aW9uIG9uIGhvdyB0byBkaXNwbGF5IGxhYmVsLiBJdCBzaG91bGQgYmUgYW4gb2JqZWN0IHdpdGggdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuXHQgKiB7XG5cdCAqICAgICAgZm9udFNpemUsIGZvbnRGYW1pbHksIGZvbnRTdHlsZSwgcGFkZGluZyxcblx0ICogICAgICBhbGlnbjogY2FuIGJlIGVpdGhlciBcImxlZnRcIiwgXCJjZW50ZXJcIiBvciBcInJpZ2h0XCIsXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxuXHQgKiAgICAgIGhlaWdodCxcblx0ICogICAgICBnZW9tZXRyeVxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywge3dpZHRoOiBjb250YWluZXJXaWR0aCwgaGVpZ2h0OiBjb250YWluZXJIZWlnaHR9KTtcblx0fVxuXG5cdGZ1bmN0aW9uIGdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCBsaW5rKTtcblx0fVxuXG5cdGZ1bmN0aW9uIF9nZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcgPSB7fSwgY29udGV4dCkge1xuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBmb250U2l6ZSA9IGxhYmVsQ29uZmlnLmZvbnRTaXplO1xuXHRcdGxldCBmb250RmFtaWx5ID0gbGFiZWxDb25maWcuZm9udEZhbWlseTtcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xuXHRcdGxldCBib2xkID0gKGZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEO1xuXHRcdGxldCBwYWRkaW5nID0gbGFiZWxDb25maWcucGFkZGluZztcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcblx0XHRsZXQgYWxpZ24gPSBsYWJlbENvbmZpZy5hbGlnbjtcblxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XG5cdFx0aWYgKGNvbnRleHQud2lkdGgpIHtcblx0XHRcdHcgPSB3IDw9IDUgPyBjb250ZXh0LndpZHRoICogdyA6IHc7XG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcblx0XHR9XG5cdFx0dyAtPSAyICogcGFkZGluZztcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xuXHRcdHcgPSBNYXRoLm1heCgwLCB3KTtcblx0XHRoID0gTWF0aC5tYXgoMCwgaCk7XG5cblx0XHRsZXQgZ2VvbWV0cnkgPSBfLmNsb25lKGxhYmVsQ29uZmlnLmdlb21ldHJ5KTtcblx0XHRsZXQgd3JhcHBlZExhYmVsID0gdGhpcy53cmFwKGxhYmVsLCB3LCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCk7XG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSB3cmFwcGVkTGFiZWwuaGVpZ2h0ICsgMiAqIHBhZGRpbmcgKyAod3JhcHBlZExhYmVsLmxlbmd0aCAtIDEpICogbGluZVBhZGRpbmc7XG5cdFx0bGV0IGFuY2hvciA9IFwic3RhcnRcIiwgZHggPSAwLCBzZXRBbmNob3JYID0gIV8uaGFzKGdlb21ldHJ5LCBcImFuY2hvclhcIik7XG5cdFx0c3dpdGNoIChhbGlnbikge1xuXHRcdFx0Y2FzZSBcImNlbnRlclwiOlxuXHRcdFx0XHRhbmNob3IgPSBcIm1pZGRsZVwiO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcInJpZ2h0XCI6XG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XG5cdFx0XHRcdGR4ID0gd3JhcHBlZExhYmVsLndpZHRoLzI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gLTAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwibGVmdFwiOlxuXHRcdFx0XHRkeCA9IC13cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHRsZXQgcG9zO1xuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXG5cdFx0XHRwb3MgPSBjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpO1xuXHRcdGVsc2Vcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xuXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xuXHRcdC8vIHRoZSBwaXZvdCBpcyB0aGUgY2VudGVyIG9mIHJvdGF0aW9uIHdoZW4gdGhlIGxhYmVsIGhhcyBhIHJvdGF0aW9uIHNwZWNpZmllZC5cblx0XHRsZXQgcGl2b3QgPSBhbGlnbiA9PSAnY2VudGVyJyA/IFswLCAwXSA6IChhbGlnbiA9PSAnbGVmdCcgPyBbLXdyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSA6IFt3cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0pO1xuXG5cdFx0Ly8gdGhlIG1heGltdW0gYm91bmRzIGZvciB0aGUgbGFiZWwsIHVzZWQgdG8gcG9zaXRpb24gaW5saW5lIGVkaXRvclxuXHRcdGdlb21ldHJ5LndpZHRoID0gTWF0aC5tYXgodyArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS53aWR0aCk7XG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xuXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXG5cdFx0XHRib2xkLCB1bmRlcmxpbmU6IGZvbnRTdHlsZSAmIEZPTlRfVU5ERVJMSU5FLCBpdGFsaWM6IGZvbnRTdHlsZSAmIEZPTlRfSVRBTElDLCBzaGFkb3c6IGZvbnRTdHlsZSAmIEZPTlRfU0hBRE9XLFxuXHRcdFx0ZHgsIGR5OiAtZ2VvbWV0cnkuaGVpZ2h0LzIgKyBwYWRkaW5nICsgd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgLSB3cmFwcGVkTGFiZWwuYmFzZWxpbmUsIGFuY2hvciwgbGluZUhlaWdodDogd3JhcHBlZExhYmVsLmxpbmVIZWlnaHQgKyBsaW5lUGFkZGluZyxcblx0XHRcdHBpdm90LCBib3VuZHMsIG1heEJvdW5kc1xuXHRcdH07XG5cdH1cblxuXHRmdW5jdGlvbiByZW5kZXIodmlldywgYm94KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdC8vIFRoaXMgaXMgdGhlIGlubGluZSBlZGl0b3IgZm9yIGVkaXRpbmcgbGFiZWwgdGV4dCBpbiBwbGFjZS5cblx0bGV0IGVkaXRvciA9IHtcblx0XHRzdGFydDogZnVuY3Rpb24oa2V5LCBjb250YWluZXIsIGJveCwgcmVmRWwsIHRleHRFbCwgc2NhbGUgPSAxLjAsIHNpbmdsZUxpbmUgPSB0cnVlKSB7XG5cdFx0XHRpZiAodGhpcy5pbnB1dCkge1xuXHRcdFx0XHRpZiAodGhpcy5rZXkgIT0ga2V5KSB7XG5cdFx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciB0YWcgPSBzaW5nbGVMaW5lID8gJ2lucHV0JyA6ICd0ZXh0YXJlYSc7XG5cdFx0XHR0aGlzLmlucHV0ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCh0YWcsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KTtcblx0XHRcdGlmIChzaW5nbGVMaW5lKSB7XG5cdFx0XHRcdEV2ZW50cy5vbih0aGlzLmlucHV0LCAna2V5ZG93biBrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMub2ZmKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJyk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShib3gubWF4Qm91bmRzLngsIGJveC5tYXhCb3VuZHMueSwgYm94Lm1heEJvdW5kcy53aWR0aCAqIHNjYWxlLCBib3gubWF4Qm91bmRzLmhlaWdodCAqIHNjYWxlKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBtYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgbWF4Qm91bmRzLnRvcF07XG5cblx0XHRcdGlmICh0ZXh0RWwpXG5cdFx0XHRcdHRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblx0XHRcdERvbVV0aWxzLnNldEVsZW1lbnQodGhpcy5pbnB1dCwgbnVsbCwge1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdGxlZnQ6IHBvc1swXSArIFwicHhcIixcblx0XHRcdFx0dG9wOiBwb3NbMV0gKyBcInB4XCIsXG5cdFx0XHRcdHdpZHRoOiBtYXhCb3VuZHMud2lkdGggKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IG1heEJvdW5kcy5oZWlnaHQgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXG5cdFx0XHRcdHRoaXMudGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXG5cdFx0XHQvLyByZW1vdmUgdGhlIGlucHV0XG5cdFx0XHR0aGlzLmlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dCk7XG5cblx0XHRcdGlmICghY2FuY2VsKVxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xuXG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0b3AnLCBbdGhpcy5rZXldKTtcblxuXHRcdFx0ZGVsZXRlIHRoaXMuaW5wdXQ7XG5cdFx0XHRkZWxldGUgdGhpcy5rZXk7XG5cdFx0XHRkZWxldGUgdGhpcy5ib3g7XG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcblx0XHRcdGRlbGV0ZSB0aGlzLnRleHRFbDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIHtcblx0XHRGT05UX0JPTEQsXG5cdFx0Rk9OVF9JVEFMSUMsXG5cdFx0Rk9OVF9VTkRFUkxJTkUsXG5cdFx0Rk9OVF9TSEFET1csXG5cdFx0Z2V0U3RyaW5nU2l6ZSxcblx0XHR3cmFwLFxuXHRcdGdldExhYmVsQm94LFxuXHRcdGdldExhYmVsQm94Rm9yTGluayxcblx0XHRyZW5kZXIsXG5cdFx0ZWRpdG9yXG5cdH07XG59KSgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvTGFiZWwuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuXG5jbGFzcyBFZGdlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnRScpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xuXHR9XG5cblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAnc291cmNlJyk7XG5cdH1cblxuXHRzZXRUYXJnZXQobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcblx0ICovXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xuXHRcdGlmIChlbmQgPT0gbm9kZSkge1xuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXG5cdFx0XHRpZiAobm9kZSlcblx0XHRcdFx0bm9kZS5zZXRFZGdlQXQodGhpcywgcG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGVuZCkge1xuXHRcdFx0XHQvLyBmaXJzdCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBlbmRcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdFx0bm9kZS5hZGRPdXRFZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoJ2xhYmVsJyk7XG5cdFx0aWYgKGxhYmVsKVxuXHRcdFx0cmV0dXJuIExhYmVsLmdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCB0aGlzLmdldFNoYXBlKGtleSkpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXG5cdCAqL1xuXHRnZXRSZWZlcmVuY2VQb2ludHMoa2V5KSB7XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdGlmICh0aGlzLnNvdXJjZSlcblx0XHRcdHB0cy5wdXNoKHRoaXMuc291cmNlLmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxuXHRcdFx0cHRzLnB1c2godGhpcy50YXJnZXQuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xuXG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFRlcm1pbmFsVmlzdWFsKGtleSwgb3J0aG9nb25hbCkge1xuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xuXHRcdGxldCB0ZXJtaW5hbHMgPSBbXTtcblxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShwdC54LCBwdC55LCAzLCAzKTtcblx0XHR9O1xuXG5cdFx0aWYgKHRoaXMuc291cmNlKSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnNvdXJjZS5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCdzb3VyY2VQb3J0JyksIHJlZlB0c1sxXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMF0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMF0pLCByZWZQdHNbMV0sIHRydWUpfSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3RhcmdldFBvcnQnKSwgcmVmUHRzWzBdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcblx0XHRyZXR1cm4gdGVybWluYWxzO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XG5cdH1cbn1cbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuXG4vKlxuXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJhbGxvd0RhbmdsaW5nRWRnZXNcIikpIHtcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xuXHR9IGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UgJiYgdGhpcy50YXJnZXQgJiYgdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpICYmIHRoaXMuc291cmNlLmlzVmlzaWJsZSgpICYmIHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpO1xufTtcblxuKi9cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9ncmFwaC9FZGdlLmpzIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5sZXQgTWFya2VyID0gKGZ1bmN0aW9uKCkge1xuXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gYXJyb3coc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy0yKnNpZ24sIDBdLCBbLTQqc2lnbiwgNF0sIFs0KnNpZ24sIDBdLCBbLTQqc2lnbiwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdGZ1bmN0aW9uIHRyaWFuZ2xlKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNSpzaWduLCAtNV0sIFstNSpzaWduLCA1XSwgWzQqc2lnbiwgMF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gb3ZhbChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciByID0gc2l6ZSAvIDI7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLXIsIC1yLCBzaXplLCBzaXplKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFswLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+Jztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gZGlhbW9uZChzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTQsIDBdLCBbMCwgNF0sIFs0LCAwXSwgWzAsIC00XV1cblx0XHR9Oztcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXG5cdGZ1bmN0aW9uIGdldE1hcmtlcihjb25maWcsIHNvdXJjZSkge1xuXHRcdHZhciBmYWN0b3J5ID0gcmVnaXN0cnlbY29uZmlnLnR5cGVdO1xuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XG5cdFx0bWFya2VyLmlkID0gY29uZmlnLmlkO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRyZWdpc3RyeVsnYXJyb3cnXSA9IGFycm93O1xuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xuXHRyZWdpc3RyeVsnb3ZhbCddID0gb3ZhbDtcblx0cmVnaXN0cnlbJ2RpYW1vbmQnXSA9IGRpYW1vbmQ7XG5cblx0cmV0dXJuIHtcblx0XHRyZWdpc3RyeTogcmVnaXN0cnksXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcblx0fTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IE1hcmtlcjtcblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvTWFya2VyLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5cbmNsYXNzIExheW91dCB7XG5cdGNvbnN0cnVjdG9yKGNvbmZpZz17fSkge1xuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcblx0XHRcdGlmIChjb25maWcub3JpZW50YXRpb24udG9VcHBlckNhc2UoKSA9PSBcIkhPUklaT05UQUxcIilcblx0XHRcdFx0Y29uZmlnLm9yaWVudGF0aW9uID0gTGF5b3V0LkhPUklaT05UQUw7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGRlbGV0ZSBjb25maWcub3JpZW50YXRpb247XG5cdFx0fVxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblx0fVxuXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XG5cdHJlc2V0KCkge31cblx0ZGVzdHJveSgpIHt9XG59XG5MYXlvdXQuVkVSVElDQUwgPSAwO1xuTGF5b3V0LkhPUklaT05UQUwgPSAxO1xuXG5MYXlvdXQuREVGQVVMVFMgPSB7XG5cdG9yaWVudGF0aW9uOiBMYXlvdXQuVkVSVElDQUxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcblxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XG5cdGxheW91dChyb290LCBib3VuZHMpIHtcblx0XHR2YXIgaXRlbXM7XG5cdFx0aWYgKCFyb290KVxuXHRcdFx0aXRlbXMgPSB0aGlzLm93bmVyLmNoaWxkTm9kZXM7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHJvb3QpKVxuXHRcdFx0aXRlbXMgPSByb290O1xuXHRcdGVsc2Vcblx0XHRcdGl0ZW1zID0gcm9vdC5nZXRMaW5rZWROb2RlcygndGFyZ2V0Jyk7XG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG5cdFx0dmFyIHggPSAwLCB5ID0gMCwgaCA9IDAsIG5vZGU7XG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vZGUgPSBpdGVtc1tpXTtcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XG5cdFx0XHRcdC8vIGNyZWF0ZSBuZXcgbGluZVxuXHRcdFx0XHR5ICs9IGggKyB0aGlzLnZnYXA7XG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5fZmxQb3MgPSBbcDEsIHAyXTtcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xuXHRcdFx0eCArPSB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIik7XG5cdFx0XHRwMSsrO1xuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcihuZXcgUmVjdGFuZ2xlKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCB5ICsgaCkpO1xuXHR9XG59XG5cbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XG5cdGhnYXA6IDEwLFxuXHR2Z2FwOiAxMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvd0xheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9sYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4uL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoQmVoYXZpb3IgZnJvbSBcIi4uL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3JcIjtcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuXG5jbGFzcyBSZW5kZXJlciB7XG5cdGNvbnN0cnVjdG9yKGlkLCBjb250YWluZXIsIGNvbmZpZyA9IHt9LCBncmFwaCA9IG51bGwpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6IHRoaXMuaWQsIHRhYmluZGV4OiAwLCBuczogJ2dyYXBoJ30sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xuXHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmJveCk7XG5cdFx0aWYgKGNvbmZpZy5sYXlvdXQpIHtcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcblx0XHRcdHRoaXMubGF5b3V0ID0gbmV3IGxheW91dENsYXNzKGNvbmZpZy5sYXlvdXQuY29uZmlnKTtcblx0XHRcdGRlbGV0ZSBjb25maWcubGF5b3V0O1xuXHRcdH1cblx0XHR0aGlzLmNsZWFyID0gdHJ1ZTtcblx0XHR0aGlzLl90cmFuc2xhdGUgPSBbMCwgMF07XG5cdFx0dGhpcy5fc2NhbGUgPSAxLjA7XG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xuXHRcdHRoaXMuZGlzcGF0Y2hlciA9IG51bGw7XG5cdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGlvbkJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLm5vZGVCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5lZGdlQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuY29ubmVjdGlvbkJlaGF2aW9yID0gbnVsbDtcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cblx0XHRFdmVudHMub24oTGFiZWwuZWRpdG9yLCAnZWRpdG9yLnVwZGF0ZS4qJywgXy5iaW5kKGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcblx0XHRcdC8vdGhpcy5ncmFwaC5ub2Rlc1trZXldLnByb3AoJ2xhYmVsJywgdmFsdWUpO1xuXHRcdFx0Ly90aGlzLnJlbmRlcigpO1xuXHRcdFx0Y29uc29sZS5sb2coa2V5ICsgJz0nICsgdmFsdWUpO1xuXHRcdH0sIHRoaXMpKTtcblx0fVxuXG5cdGdldCBncmFwaCgpIHtcblx0XHRyZXR1cm4gdGhpcy5fZ3JhcGg7XG5cdH1cblxuXHRzZXQgZ3JhcGgoZ3JhcGgpIHtcblx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xuXHRcdGxldCByb290ID0gZ3JhcGguY3VycmVudFJvb3Q7XG5cdFx0aWYgKHJvb3QpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFtyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JykgfHwgMCwgcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScpIHx8IDBdO1xuXHRcdFx0dGhpcy5fc2NhbGUgPSByb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScpIHx8IDEuMDtcblx0XHR9XG5cdH1cblxuXHR2aWV3cG9ydChzY2FsZWQsIHZpZXdwb3J0KSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQoc2NhbGVkKSB8fCBfLmlzTnVsbChzY2FsZWQpKSBzY2FsZWQgPSBmYWxzZTtcblx0XHRpZiAoIXZpZXdwb3J0KSB7XG5cdFx0XHR2YXIgdnAgPSBuZXcgUmVjdGFuZ2xlKDAsIDAsIHRoaXMuYm94Lm9mZnNldFdpZHRoLCB0aGlzLmJveC5vZmZzZXRIZWlnaHQpO1xuXHRcdFx0aWYgKHNjYWxlZClcblx0XHRcdFx0cmV0dXJuIFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2cCk7XG5cdFx0XHRyZXR1cm4gdnA7XG5cdFx0fVxuXHRcdGlmICghc2NhbGVkKSB2aWV3cG9ydCA9IFV0aWxzLnNjYWxlKHRoaXMudHJhbnNsYXRlLCB0aGlzLnNjYWxlLCB2aWV3cG9ydCk7XG5cdFx0dmFyIHcgPSB0aGlzLmJveC5vZmZzZXRXaWR0aDtcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XG5cdFx0dGhpcy50cmFuc2Zvcm0oLXZpZXdwb3J0Lngqc2NhbGUsIC12aWV3cG9ydC55KnNjYWxlLCBzY2FsZSk7XG5cdH1cblxuXHRnZXQgdHJhbnNsYXRlKCkgeyByZXR1cm4gdGhpcy5fdHJhbnNsYXRlOyB9XG5cdHNldCB0cmFuc2xhdGUodCkgeyB0aGlzLnRyYW5zZm9ybSh0WzBdLCB0WzFdKTsgfVxuXHRnZXQgc2NhbGUoKSB7IHJldHVybiB0aGlzLl9zY2FsZTsgfVxuXHRzZXQgc2NhbGUoaykge1xuXHRcdHN3aXRjaCAoaykge1xuXHRcdFx0Y2FzZSBcImluXCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlICogdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwib3V0XCI6XG5cdFx0XHRcdGsgPSB0aGlzLnNjYWxlIC8gdGhpcy5wcm9wKFwiem9vbUZhY3RvclwiKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwiYWN0dWFsXCI6XG5cdFx0XHRcdGsgPSAxLjA7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImZpdFwiOlxuXHRcdFx0XHR2YXIgZ3JpZFNpemUgPSB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSAqIDI7XG5cblx0XHRcdFx0dmFyIGdCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xuXHRcdFx0XHR2YXIgdkJvdW5kcyA9IHRoaXMudmlld3BvcnQoKTtcblxuXHRcdFx0XHR2Qm91bmRzLndpZHRoIC09IGdyaWRTaXplO1xuXHRcdFx0XHR2Qm91bmRzLmhlaWdodCAtPSBncmlkU2l6ZTtcblxuXHRcdFx0XHQvKiBEbyBub3Qgem9vbSBtb3JlIHRoYW4gYWN0dWFsIGlmIGdyYXBoIGFscmVhZHkgZml0cyBpbnRvIHRoZSBib3VuZHMgKi9cblx0XHRcdFx0ayA9IE1hdGgubWluKCh2Qm91bmRzLndpZHRoIC8gZ0JvdW5kcy53aWR0aCksICh2Qm91bmRzLmhlaWdodCAvZ0JvdW5kcy5oZWlnaHQpLCAxLjApO1xuXG5cdFx0XHRcdC8vVE9ETzogQWRkIGNlbnRlcmluZyBjb2RlIGhlcmUgb3IgdHJpZ2dlciBhbiBldmVudCBmb3IgdGhhdFxuXHRcdFx0XHRicmVhaztcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmIChfLmlzU3RyaW5nKGspKSBrID0gcGFyc2VGbG9hdChrKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHRoaXMudHJhbnNmb3JtKG51bGwsIG51bGwsIGspO1xuXHR9XG5cblx0dHJhbnNmb3JtKHggPSBudWxsLCB5ID0gbnVsbCwgc2NhbGUgPSBudWxsKSB7XG5cdFx0bGV0IGdyYXBoID0gdGhpcy5ncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoID8gZ3JhcGguY3VycmVudFJvb3QgOiBudWxsO1xuXHRcdGlmICghXy5pc051bGwoeCkpIHtcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZVswXSA9IHg7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcsIHgpO1xuXHRcdH1cblx0XHRpZiAoIV8uaXNOdWxsKHkpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMV0gPSB5O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knLCB5KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbChzY2FsZSkpIHtcblx0XHRcdHRoaXMuX3NjYWxlID0gc2NhbGU7XG5cdFx0XHRpZiAocm9vdClcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnLCBzY2FsZSk7XG5cdFx0XHQvLyBzeW5jIHRoZSBzY2FsZSBiZXR3ZWVuIHRoZSBkaXNwYXRjaGVyIGFuZCB0aGUgZ3JhcGhcblx0XHRcdGxldCBzID0gdGhpcy5kaXNwYXRjaGVyLnNjYWxlO1xuXHRcdFx0aWYgKHMgIT0gc2NhbGUpXG5cdFx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zY2FsZSA9IHNjYWxlO1xuXHRcdH1cblx0XHR0aGlzLnJlZnJlc2goKTtcblx0fVxuXG5cdHJlbmRlcigpIHtcblx0XHRpZiAoIXRoaXMuX2dyYXBoKSByZXR1cm4gZmFsc2U7XG5cdFx0aWYgKHRoaXMubGF5b3V0KVxuXHRcdFx0dGhpcy5sYXlvdXQubGF5b3V0KHRoaXMuX2dyYXBoLmN1cnJlbnRSb290LCB0aGlzLnZpZXdwb3J0KCkpO1xuXG5cdFx0dGhpcy5pbml0aWFsaXplQmVoYXZpb3JzKCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZW5kZXJMYWJlbChib3gpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0cmVuZGVyTGluayhzaGFwZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxpbmsoc2hhcGUpO1xuXHR9XG5cblx0cmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTWFya2VycyhtYXJrZXJzKTtcblx0fVxuXG5cdGluaXRpYWxpemVCZWhhdmlvcnMoKSB7XG5cdFx0Ly8gY3JlYXRlIHRoZSBldmVudCBkaXNwYXRjaGVyIGlmIG5lY2Vzc2FyeS5cblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyID0gbmV3IEV2ZW50RGlzcGF0Y2hlcih0aGlzLmJveCwgW3RoaXMucHJvcCgnbWluWm9vbScpLCB0aGlzLnByb3AoJ21heFpvb20nKV0pO1xuXHRcdFx0bGV0IGpzQ2xhc3M7XG5cdFx0XHRpZiAodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpIHtcblx0XHRcdFx0anNDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKTtcblx0XHRcdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodGhpcy5wcm9wKCdzZWxlY3Rpb25CZWhhdmlvcicpKSB7XG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ3NlbGVjdGlvbkJlaGF2aW9yJykpO1xuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbkJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCwgdGhpcy5zY2FsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWy9ebW91c2Vkb3duLywgL156b29tL10sIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0aWYgKCFEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHtcblx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTtcblx0XHR9XG5cdFx0dGhpcy5kaXNwYXRjaGVyLnN0YXJ0KCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge31cblxuXHQvKipcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIGNvbmZpZyBpZiB0aGUgdGVtcGxhdGUgaXMgYSBmdW5jdGlvbiwgdGhpcyBjb25maWcgd2lsbCBiZSBwYXNzZWQgYXMgdGhlIGFyZ3VtZW50LlxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXG5cdCAqIHVzZWQgdG8gcmVuZGVyIHRoZW0uXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Z2V0VGVtcGxhdGUoa2V5LCBjb25maWcsIHByZXByb2Nlc3Nvcikge1xuXHRcdHZhciB0ID0gdGhpcy5jb25zdHJ1Y3Rvci5URU1QTEFURVNba2V5XTtcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcblx0XHRcdHQgPSB0KGNvbmZpZyk7XG5cdFx0fVxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxuXHRcdGlmIChwcmVwcm9jZXNzb3IpIHtcblx0XHRcdHZhciBwYXJ0cyA9IHQubWF0Y2goLygje1teI10qfSkvZyk7XG5cdFx0XHR2YXIgb2JqID0ge307XG5cdFx0XHRmb3IgKGxldCBwYXJ0IGluIHBhcnRzKSB7XG5cdFx0XHRcdHBhcnQgPSBwYXJ0c1twYXJ0XTtcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XG5cdFx0XHRcdG9ialtwYXJ0XSA9IHByZXByb2Nlc3NvcltfLmNhbWVsQ2FzZSgncmVuZGVyICcgKyBwYXJ0KV0odGhpcyk7XG5cdFx0XHR9XG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XG5cdFx0fVxuXHRcdHJldHVybiB0O1xuXHR9XG5cblx0cmVzZXQoKSB7fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMuX2dyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmxheW91dDtcblx0XHRpZiAodGhpcy5kaXNwYXRjaGVyKSB7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIuc3RvcCgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuZGlzcGF0Y2hlcjtcblx0XHR9XG5cdFx0dGhpcy5ib3guaW5uZXJIVE1MID0gJyc7XG5cdH1cbn1cblJlbmRlcmVyLkRFRkFVTFRTID0ge1xuXHRkZWZhdWx0Q2xpY2tNb2RlOiBcInBhblwiLFxuXHRoaWRlT3V0bGluZTogZmFsc2UsXG5cdHNpbmdsZVNlbGVjdDogdHJ1ZSxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRncmlkRW5hYmxlZDogZmFsc2UsXG5cdGd1aWRlc0VuYWJsZWQ6IHRydWUsXG5cdGdyaWRTaXplOiAzMCxcblx0bWF4Wm9vbTogNC4wLFxuXHRtaW5ab29tOiAwLjIsXG5cdHpvb21GYWN0b3I6IDEuMixcblx0bWFza09wYWNpdHk6IDAuNSxcblx0Z3JhcGhCZWhhdmlvcjogR3JhcGhCZWhhdmlvcixcblx0c2VsZWN0aW9uQmVoYXZpb3I6IFNlbGVjdGlvbkJlaGF2aW9yXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L1JlbmRlcmVyLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi8yOC8yMDE2LlxuICovXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcblxuLyoqXG4gKiBHcmFwaCBoYW5kbGVyIGhhbmRsZXMgUGFubmluZyBhbmQgWm9vbSBhbmQgcnViYmVyIGJhbmQgc2VsZWN0aW9uXG4gKi9cbmNsYXNzIEdyYXBoQmVoYXZpb3IgZXh0ZW5kcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0c3VwZXIocmVuZGVyZXIpO1xuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcblx0XHRsZXQgZiA9IGZ1bmN0aW9uKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKHR5cGUsIG5zLCBncmFwaCwgZXZlbnQpO1xuXHRcdH07XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcigvXmRyYWcuKlxcLmdyYXBoJC8sIHRoaXMuaGFuZGxlRHJhZywgdGhpcyk7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcigvXnpvb20vLCB0aGlzLmhhbmRsZVpvb20sIHRoaXMpO1xuXHRcdC8vZGlzcGF0Y2hlci5yZWdpc3RlcihbJ21vdXNlZG93bi5ncmFwaCcsICdtb3VzZWVudGVyLmdyYXBoJywgJ21vdXNlbGVhdmUuZ3JhcGgnXSwgZik7XG5cdFx0dGhpcy5vZmZzZXQgPSBudWxsO1xuXHR9XG5cblx0aGFuZGxlWm9vbSh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShudWxsLCBudWxsLCBldmVudC5zY2FsZSk7XG5cdH1cblxuXHRoYW5kbGVEcmFnKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xuXHRcdGlmICh0eXBlID09ICdkcmFnc3RhcnQnKSB7XG5cdFx0XHRsZXQgcGFuID0gKHRoaXMucmVuZGVyZXIucHJvcChcImRlZmF1bHRDbGlja01vZGVcIikgPT0gXCJwYW5cIikgXiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG5cdFx0XHRpZiAoIXBhbikgcmV0dXJuO1xuXHRcdFx0bGV0IHQgPSB0aGlzLnJlbmRlcmVyLnRyYW5zbGF0ZTtcblx0XHRcdHRoaXMub2Zmc2V0ID0gW3RbMF0gLSBwb3NbMF0sIHRbMV0gLSBwb3NbMV1dO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMub2Zmc2V0KSByZXR1cm47XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0ocG9zWzBdICsgdGhpcy5vZmZzZXRbMF0sIHBvc1sxXSArIHRoaXMub2Zmc2V0WzFdKTtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ2VuZCcpIHtcblx0XHRcdC8vQ3Vyc29yLnVwZGF0ZUN1cnNvcignbW91c2V1cCcsIG5zLCBncmFwaCwgZXZlbnQpO1xuXHRcdFx0ZGVsZXRlIHRoaXMub2Zmc2V0O1xuXHRcdH1cblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBHcmFwaEJlaGF2aW9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3IuanMiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW9yL0JlaGF2aW9yLmpzIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi4vZ3JhcGgvQ2VsbFwiO1xuaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XG5cbmNsYXNzIFNlbGVjdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuXHRcdHN1cGVyKHJlbmRlcmVyKTtcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcignbW91c2Vkb3duLionLCB0aGlzLnNlbGVjdENlbGwsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAuKicsIHRoaXMudW5zZWxlY3RDZWxsLCB0aGlzKTtcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlTXVsdGlTZWxlY3QsIHRoaXMpO1xuXHRcdC8vZ3JhcGgub24oR3JhcGguRVZFTlRfVFlQRVMuU0VMRUNUSU9OX0NIQU5HRSwgdGhpcy51cGRhdGVTZWxlY3Rpb25zLCB0aGlzKTtcblx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRMaW5rcyA9IG51bGw7XG5cdFx0dGhpcy5hdHRhY2hlZExpbmtzID0gbnVsbDtcblx0fVxuXG5cdHVwZGF0ZVNlbGVjdGlvbnMoKSB7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWROb2Rlcylcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcblx0XHRpZiAodGhpcy5zZWxlY3RlZExpbmtzKVxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzLmNsYXNzZWQoJ3NlbGVjdGVkJywgZmFsc2UpO1xuXG5cdFx0dGhpcy5zZWxlY3RlZE5vZGVzID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkTGlua3MgPSBudWxsO1xuXHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IG51bGw7XG5cblx0XHRpZiAodGhpcy5ncmFwaC5zZWxlY3RlZFZlcnRpY2VzICYmIHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMpO1xuXHRcdFx0dGhpcy5hdHRhY2hlZExpbmtzID0gdGhpcy5ncmFwaC5yZW5kZXJlci5nZXRTaGFwZXModGhpcy5ncmFwaC5nZXRBdHRhY2hlZEVkZ2VzKCkpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZE5vZGVzLmNsYXNzZWQoJ3NlbGVjdGVkJywgdHJ1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuZ3JhcGguc2VsZWN0ZWRFZGdlcyAmJiB0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gdGhpcy5ncmFwaC5yZW5kZXJlci5nZXRTaGFwZXModGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWRMaW5rcy5jbGFzc2VkKCdzZWxlY3RlZCcsIHRydWUpO1xuXHRcdH1cblx0fVxuXG5cdHNlbGVjdENlbGwodHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnQpIHtcblx0XHR2YXIgY2VsbCA9IGRhdGEgPT0gdGhpcy5ncmFwaCA/IG51bGwgOiBkYXRhO1xuXHRcdGlmIChjZWxsICYmICEoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSByZXR1cm47XG5cdFx0dmFyIHRvZ2dsZSA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXk7XG5cdFx0aWYgKGNlbGwgJiYgKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkge1xuXHRcdFx0aWYgKCF0aGlzLmdyYXBoLmlzU2VsZWN0ZWQoY2VsbCkpXG5cdFx0XHRcdGRlbGV0ZSBjZWxsLl9maXJzdFNlbGVjdGlvbjtcblx0XHRcdGVsc2Vcblx0XHRcdFx0Y2VsbC5fZmlyc3RTZWxlY3Rpb24gPSB0cnVlO1xuXG5cdFx0XHRkMy5zZWxlY3QoZXZlbnQuZGF0YVRhcmdldCkubW92ZVRvRnJvbnQoKTtcblx0XHRcdHRoaXMuZ3JhcGguc2V0U2VsZWN0aW9uKGNlbGwsIHRvZ2dsZSk7XG5cdFx0fVxuXHR9XG5cblx0dW5zZWxlY3RDZWxsKHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XG5cdFx0dmFyIGNlbGwgPSBkYXRhID09IHRoaXMuZ3JhcGggPyBudWxsIDogZGF0YTtcblx0XHRpZiAoY2VsbCAmJiAhKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkgcmV0dXJuO1xuXHRcdHZhciBjdHJsS2V5ID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleTtcblx0XHRpZiAoIWNlbGwpIHtcblx0XHRcdHRoaXMuZ3JhcGguc2V0U2VsZWN0aW9uKGNlbGwsIGN0cmxLZXkpO1xuXHRcdH1cblx0fVxuXG5cdGhhbmRsZU11bHRpU2VsZWN0KHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XG5cdFx0cG9zID0gdXRpbC5zY2FsZSh0aGlzLmdyYXBoLCBwb3MpO1xuXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcblx0XHRcdHZhciBzZWxlY3QgPSAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImRlZmF1bHRDbGlja01vZGVcIikgPT0gXCJzZWxlY3RcIikgXiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG5cdFx0XHRpZiAoIXNlbGVjdCkgcmV0dXJuO1xuXHRcdFx0dGhpcy5zdGFydFB0ID0gbmV3IFBvaW50KHBvc1swXSwgcG9zWzFdKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLnN0YXJ0UHQpIHJldHVybjtcblx0XHR2YXIgcmVjdCA9IFJlY3RhbmdsZS5nZXRCb3VuZGluZ1JlY3RhbmdsZShbbmV3IFBvaW50KHBvc1swXSwgcG9zWzFdKSwgdGhpcy5zdGFydFB0XSk7XG5cdFx0dmFyIHJlbmRlcmVyID0gdGhpcy5ncmFwaC5yZW5kZXJlcjtcblx0XHRpZiAoIXRoaXMucnViYmVyYmFuZCkge1xuXHRcdFx0dGhpcy5ydWJiZXJiYW5kID0gZDMuc2VsZWN0KHJlbmRlcmVyLmFwcGVuZE5vZGUocmVuZGVyZXIuZ2V0Q2VsbExheWVyKCksIHtcblx0XHRcdFx0dGVtcGxhdGU6IF8udGVtcGxhdGUoJzxnPjxyZWN0IHg9XCIwXCIgeT1cIjBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiIHN0cm9rZT1cIiMwMDAwMDBcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1kYXNoYXJyYXk9XCIzIDNcIi8+PC9nPicpXG5cdFx0XHR9LCBmYWxzZSkpO1xuXHRcdH1cblx0XHRpZiAodHlwZSA9PSAnZHJhZ2VuZCcpIHtcblx0XHRcdHZhciBjZWxscyA9IHRoaXMuZ3JhcGguZ2V0Q3VycmVudFJvb3QoKS5jaGlsZHJlbjtcblx0XHRcdC8vIFRPRE86IERlZmluZSBpZiB3ZSB3YW50IHRvIHNlbGVjdCB2ZXJ0ZXhlcyAvIGVkZ2VzIG9yIGJvdGhcblx0XHRcdGNlbGxzID0gXy5maWx0ZXIoY2VsbHMsIGZ1bmN0aW9uIChjZWxsKSB7XG5cdFx0XHRcdHZhciBib3ggPSBjZWxsLmdldEJvdW5kcygpO1xuXHRcdFx0XHRpZiAocmVjdC5jb250YWlucyhib3gpKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBUT0RPOiBTZXQgc2VsZWN0aW9uXG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxscywgZXZlbnQuY3RybEtleSk7XG5cblx0XHRcdHRoaXMucnViYmVyYmFuZC5yZW1vdmUoKTtcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXJ0UHQ7XG5cdFx0XHRkZWxldGUgdGhpcy5ydWJiZXJiYW5kO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR0aGlzLnJ1YmJlcmJhbmQuc2VsZWN0KFwicmVjdFwiKS5hdHRyKHt4OiByZWN0LngsIHk6IHJlY3QueSwgd2lkdGg6IHJlY3Qud2lkdGgsIGhlaWdodDogcmVjdC5oZWlnaHR9KTtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0c3VwZXIuZGVzdHJveSgpO1xuXHRcdGRlbGV0ZSB0aGlzLnNlbGVjdGVkTm9kZXM7XG5cdFx0ZGVsZXRlIHRoaXMuc2VsZWN0ZWRMaW5rcztcblx0XHRkZWxldGUgdGhpcy5hdHRhY2hlZExpbmtzO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkJlaGF2aW9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgQmFzZTY0IGZyb20gXCIuLi91dGlsL2Jhc2U2NFwiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcblxyXG5jb25zdCBOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XHJcbmlmICh0eXBlb2YgKFNWR0VsZW1lbnQpICE9IFwidW5kZWZpbmVkXCIpIHtcclxuXHR2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBcInN2Z1wiKTtcclxuXHRzdmcuaW5uZXJIVE1MID0gJzxjaXJjbGUvPic7XHJcblx0aWYgKHN2Zy5maXJzdENoaWxkICE9PSBcIltvYmplY3QgU1ZHQ2lyY2xlRWxlbWVudF1cIikge1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU1ZHRWxlbWVudC5wcm90b3R5cGUsIHtcclxuXHRcdFx0XCJvdXRlckhUTUxcIjoge1xyXG5cdFx0XHRcdGVudW1lcmFibGU6IGZhbHNlLFxyXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuXHRcdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyICRub2RlLCAkdGVtcDtcclxuXHRcdFx0XHRcdCR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblx0XHRcdFx0XHQkbm9kZSA9IHRoaXMuY2xvbmVOb2RlKHRydWUpO1xyXG5cdFx0XHRcdFx0JHRlbXAuYXBwZW5kQ2hpbGQoJG5vZGUpO1xyXG5cdFx0XHRcdFx0cmV0dXJuICR0ZW1wLmlubmVySFRNTDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0sXHJcblx0XHRcdFwiaW5uZXJIVE1MXCI6IHtcclxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciBzID0gdGhpcy5vdXRlckhUTUw7XHJcblx0XHRcdFx0XHR2YXIgcm9wZW4gPSBuZXcgUmVnRXhwKFwiPFwiICsgdGhpcy5ub2RlTmFtZSArICdcXFxcYig/OihbXCJcXCddKVteXCJdKj8oXFxcXDEpfFtePl0pKj4nLCBcImlcIik7XHJcblx0XHRcdFx0XHR2YXIgcmNsb3NlID0gbmV3IFJlZ0V4cChcIjxcXC9cIiArIHRoaXMubm9kZU5hbWUgKyBcIj4kXCIsIFwiaVwiKTtcclxuXHRcdFx0XHRcdHJldHVybiAgcy5yZXBsYWNlKHJvcGVuLCBcIlwiKS5yZXBsYWNlKHJjbG9zZSwgXCJcIik7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKG1hcmt1cCkge1xyXG5cdFx0XHRcdFx0Ly8gZW1wdHkgZWwgZmlyc3QuXHJcblx0XHRcdFx0XHRsZXQgY2hpbGQ7XHJcblx0XHRcdFx0XHR3aGlsZSAoY2hpbGQgPSB0aGlzLmxhc3RDaGlsZClcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW1vdmVDaGlsZChjaGlsZCk7XHJcblx0XHRcdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQobWFya3VwKS5hcHBlbmQoJzwvc3ZnJyk7XHJcblx0XHRcdFx0XHRsZXQgJHRlbXAgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBidWYudG9TdHJpbmcoKSkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblx0XHRcdFx0XHR3aGlsZSAoJHRlbXAuZmlyc3RDaGlsZClcclxuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCgkdGVtcC5maXJzdENoaWxkKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH0pXHJcblx0fVxyXG5cdC8vIERlZmluZSB0aGUgdG9EYXRhVVJMIGZvciBTVkdcclxuXHRTVkdFbGVtZW50LnByb3RvdHlwZS50b0RhdGFVUkwgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zID0ge30pIHtcclxuXHRcdGxldCBfc3ZnID0gdGhpcztcclxuXHJcblx0XHRsZXQgZGVidWcgPSBmdW5jdGlvbihtc2cpIHt9O1xyXG5cclxuXHRcdGlmIChvcHRpb25zWydkZWJ1ZyddID09IHRydWUgJiYgdHlwZW9mKGNvbnNvbGUpICE9ICd1bmRlZmluZWQnKVxyXG5cdFx0XHRkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykgeyBjb25zb2xlLmxvZyhcIlNWRy50b0RhdGFVUkw6XCIsIG1zZyk7IH07XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwb3J0U1ZHKCkge1xyXG5cdFx0XHR2YXIgc3ZnX3htbCA9IF9zdmcub3V0ZXJIVE1MO1xyXG5cdFx0XHR2YXIgc3ZnX2RhdGF1cmwgPSBiYXNlNjRkYXRhVVJMZW5jb2RlKHN2Z194bWwpO1xyXG5cdFx0XHRkZWJ1Zyh0eXBlICsgXCIgbGVuZ3RoOiBcIiArIHN2Z19kYXRhdXJsLmxlbmd0aCk7XHJcblxyXG5cdFx0XHQvLyBOT1RFIGRvdWJsZSBkYXRhIGNhcnJpZXJcclxuXHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soc3ZnX2RhdGF1cmwpO1xyXG5cdFx0XHRyZXR1cm4gc3ZnX2RhdGF1cmw7XHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gYmFzZTY0ZGF0YVVSTGVuY29kZShzKSB7XHJcblx0XHRcdHZhciBiNjQgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsXCI7XHJcblxyXG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LmJ0b2FcclxuXHRcdFx0aWYgKHdpbmRvdy5idG9hKSB7XHJcblx0XHRcdFx0ZGVidWcoXCJ1c2luZyB3aW5kb3cuYnRvYSBmb3IgYmFzZTY0IGVuY29kaW5nXCIpO1xyXG5cdFx0XHRcdGI2NCArPSBidG9hKHMpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGRlYnVnKFwidXNpbmcgY3VzdG9tIGJhc2U2NCBlbmNvZGVyXCIpO1xyXG5cdFx0XHRcdGI2NCArPSBCYXNlNjQuZW5jb2RlKHMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXR1cm4gYjY0O1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIE5hdGl2ZSBleHBvcnQgZG9lc24ndCB3b3JrIHZlcnkgd2VsbC4gc2hvdWxkIHVzZSBjYW52ZyBpbnN0ZWFkLlxyXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2UodHlwZSkge1xyXG5cdFx0XHR2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuXHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuXHRcdFx0Ly8gVE9ETzogaWYgKG9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCksIGRvIHNvbWUgdHJhbnNsYXRpb24gbWFnaWM/XHJcblxyXG5cdFx0XHR2YXIgc3ZnX2ltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHR2YXIgc3ZnX3htbCA9IF9zdmcub3V0ZXJIVE1MO1xyXG5cdFx0XHRzdmdfaW1nLnNyYyA9IGJhc2U2NGRhdGFVUkxlbmNvZGUoc3ZnX3htbCk7XHJcblxyXG5cdFx0XHRzdmdfaW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGRlYnVnKFwiZXhwb3J0ZWQgaW1hZ2Ugc2l6ZTogXCIgKyBbc3ZnX2ltZy53aWR0aCwgc3ZnX2ltZy5oZWlnaHRdKTtcclxuXHRcdFx0XHRjYW52YXMud2lkdGggPSBzdmdfaW1nLndpZHRoO1xyXG5cdFx0XHRcdGNhbnZhcy5oZWlnaHQgPSBzdmdfaW1nLmhlaWdodDtcclxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHN2Z19pbWcsIDAsIDApO1xyXG5cclxuXHRcdFx0XHQvLyBTRUNVUklUWV9FUlIgV0lMTCBIQVBQRU4gTk9XXHJcblx0XHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xyXG5cdFx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgaW1hZ2VfZGF0YXVybC5sZW5ndGgpO1xyXG5cclxuXHRcdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xyXG5cdFx0XHRcdGVsc2UgZGVidWcoXCJXQVJOSU5HOiBubyBjYWxsYmFjayBzZXQsIHNvIG5vdGhpbmcgaGFwcGVucy5cIik7XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRzdmdfaW1nLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRkZWJ1ZyhcclxuXHRcdFx0XHRcdFwiQ2FuJ3QgZXhwb3J0ISBNYXliZSB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFwiICtcclxuXHRcdFx0XHRcdFwiU1ZHIGluIGltZyBlbGVtZW50IG9yIFNWRyBpbnB1dCBmb3IgQ2FudmFzIGRyYXdJbWFnZT9cXG5cIiArXHJcblx0XHRcdFx0XHRcImh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvU1ZHI05hdGl2ZV9zdXBwb3J0XCJcclxuXHRcdFx0XHQpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0Ly8gTk9URTogd2lsbCBub3QgcmV0dXJuIGFueXRoaW5nXHJcblx0XHR9XHJcblxyXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKSB7XHJcblx0XHRcdGlmICghY2FudmcpIHJldHVybiBudWxsO1xyXG5cdFx0XHRsZXQgY2FudmFzID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnY2FudmFzJywgbnVsbCwge2Rpc3BsYXk6IFwibm9uZVwifSk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHRcdFx0aWYgKHR5cGUgPT0gJ2phdmFzY3JpcHQnKSB7XHJcblx0XHRcdFx0dmFyIHhjYW52YXMgPSBuZXcganNDYW52YXMgKCdqc2NhbnZhc3Rlc3QnKTtcclxuXHRcdFx0XHR4Y2FudmFzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0XHRcdC8veGNhbnZhcy5jYW52YXMgPSBjYW52YXM7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGlmICghb3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSB7XHJcblx0XHRcdFx0Y2FudmcoY2FudmFzLCBfc3ZnLm91dGVySFRNTCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0bGV0IHBhZGRpbmcgPSBvcHRpb25zLnBhZGRpbmcgfHwgMDtcclxuXHRcdFx0XHRsZXQgc2NhbGUgPSAxLjA7XHJcblx0XHRcdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXTtcclxuXHRcdFx0XHRsZXQgYmJveCA9IF9zdmcuZ2V0QkJveCgpO1xyXG5cdFx0XHRcdGRlYnVnKFwiZGV0ZWN0ZWQgc3ZnIGRpbWVuc2lvbnMgXCIgKyBbYmJveC54LCBiYm94LnksIGJib3gud2lkdGgsIGJib3guaGVpZ2h0XSk7XHJcblx0XHRcdFx0bGV0IHRyYW5zZm9ybSA9IF9zdmcuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKTtcclxuXHRcdFx0XHRpZiAodHJhbnNmb3JtKSB7XHJcblx0XHRcdFx0XHRkZWJ1ZygnZGV0ZWN0ZWQgc3ZnIHRyYW5zZm9ybSAnICsgdHJhbnNmb3JtKTtcclxuXHRcdFx0XHRcdHRyYW5zZm9ybSA9IFNWR1JlbmRlcmVyLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xyXG5cdFx0XHRcdFx0dHJhbnNsYXRlID0gdHJhbnNmb3JtLnRyYW5zbGF0ZTtcclxuXHRcdFx0XHRcdHNjYWxlID0gdHJhbnNmb3JtLnNjYWxlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJzxzdmcgd2lkdGg9XCInKS5hcHBlbmQoYmJveC53aWR0aCArIDIqcGFkZGluZykuYXBwZW5kKCdweFwiIGhlaWdodD1cIicpLmFwcGVuZChiYm94LmhlaWdodCArIDIqcGFkZGluZykuYXBwZW5kKCdweFwiPjxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgnKVxyXG5cdFx0XHRcdFx0LmFwcGVuZCgtYmJveC54K3RyYW5zbGF0ZVswXStwYWRkaW5nKS5hcHBlbmQoJywnKS5hcHBlbmQoLWJib3gueSt0cmFuc2xhdGVbMV0rcGFkZGluZykuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHNjYWxlKS5hcHBlbmQoJylcIj4nKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChfc3ZnLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCkuYXBwZW5kKCc8L2c+PC9zdmc+Jyk7XHJcblx0XHRcdFx0aWYgKHR5cGUgPT0gJ2phdmFzY3JpcHQnKSB7XHJcblx0XHRcdFx0XHR4Y2FudmFzLmNvbXBpbGUoYnVmLnRvU3RyaW5nKCksIGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soeGNhbnZhcy50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdFx0Y2FudmcoY2FudmFzLCBidWYudG9TdHJpbmcoKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xyXG5cdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xyXG5cdFx0XHRjYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYW52YXMpO1xyXG5cdFx0XHRyZXR1cm4gaW1hZ2VfZGF0YXVybDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAoIXR5cGUpIHR5cGUgPSBcImltYWdlL3N2Zyt4bWxcIjtcclxuXHJcblx0XHRpZiAob3B0aW9ucy5rZWVwTm9uU2FmZSkgZGVidWcoXCJOT1RFOiBrZWVwTm9uU2FmZSBpcyBOT1Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQhXCIpO1xyXG5cdFx0aWYgKG9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkgZGVidWcoXCJOT1RFOiBrZWVwT3V0c2lkZVZpZXdwb3J0IGlzIG9ubHkgc3VwcG9ydGVkIHdpdGggY2FudmcgZXhwb3J0ZXIuXCIpO1xyXG5cclxuXHRcdHN3aXRjaCAodHlwZSkge1xyXG5cdFx0XHRjYXNlIFwiaW1hZ2Uvc3ZnK3htbFwiOlxyXG5cdFx0XHRcdHJldHVybiBleHBvcnRTVkcoKTtcclxuXHRcdFx0Y2FzZSBcImltYWdlL3BuZ1wiOlxyXG5cdFx0XHRjYXNlIFwiaW1hZ2UvanBlZ1wiOlxyXG5cdFx0XHRjYXNlIFwiamF2YXNjcmlwdFwiOlxyXG5cdFx0XHRcdGlmICghb3B0aW9ucy5yZW5kZXJlcikge1xyXG5cdFx0XHRcdFx0aWYgKHdpbmRvdy5jYW52Zykgb3B0aW9ucy5yZW5kZXJlciA9IFwiY2FudmdcIjtcclxuXHRcdFx0XHRcdGVsc2Ugb3B0aW9ucy5yZW5kZXJlcj1cIm5hdGl2ZVwiO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzd2l0Y2ggKG9wdGlvbnMucmVuZGVyZXIpIHtcclxuXHRcdFx0XHRcdGNhc2UgXCJjYW52Z1wiOlxyXG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGNhbnZnIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBpbWFnZSBleHBvcnRcIik7XHJcblx0XHRcdFx0XHRcdHJldHVybiBleHBvcnRJbWFnZUNhbnZnKHR5cGUpO1xyXG5cdFx0XHRcdFx0Y2FzZSBcIm5hdGl2ZVwiOlxyXG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIG5hdGl2ZSByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgZXhwb3J0LiBUSElTIE1JR0hUIEZBSUwuXCIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2UodHlwZSk7XHJcblx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVua25vd24gaW1hZ2UgcmVuZGVyZXIgZ2l2ZW4sIGRvaW5nIG5vdGluZyAoXCIgKyBvcHRpb25zLnJlbmRlcmVyICsgXCIpXCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRkZWJ1ZyhcIlNvcnJ5ISBFeHBvcnRpbmcgYXMgJ1wiICsgdHlwZSArIFwiJyBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgU1ZHUmVuZGVyZXIgZXh0ZW5kcyBSZW5kZXJlciB7XHJcblx0cmVuZGVyKCkge1xyXG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRsZXQgcm9vdCA9IHRoaXMuZ3JhcGguY3VycmVudFJvb3Q7XHJcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Jyk7XHJcblx0XHRcdGxldCB0ID0gdGhpcy50cmFuc2xhdGU7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoJzxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgnKS5hcHBlbmQodFswXSkuYXBwZW5kKCcsJykuYXBwZW5kKHRbMV0pLmFwcGVuZCgnKXNjYWxlKCcpLmFwcGVuZCh0aGlzLnNjYWxlKS5hcHBlbmQoJylcIj4nKTtcclxuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XHJcblx0XHRcdGJ1Zi5hcHBlbmQocm9vdC5yZW5kZXIodGhpcykpO1xyXG5cdFx0XHRidWYuYXBwZW5kKCc8L2c+PC9zdmc+Jyk7XHJcblx0XHRcdHRoaXMuYm94LmlubmVySFRNTCA9IGJ1Zi50b1N0cmluZygpO1xyXG5cdFx0XHR0aGlzLnN2ZyA9IHRoaXMuYm94LmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0cmVuZGVyRGVmcygpIHtcclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcclxuXHRcdGJ1Zi5hcHBlbmQodGhpcy5nZXRUZW1wbGF0ZSgnR3JpZCcsIHRoaXMucHJvcChcImdyaWRTaXplXCIpKSk7XHJcblx0XHRsZXQgbWFya2VycyA9IHRoaXMuZ3JhcGgubWFya2VycztcclxuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXHJcblx0XHRcdGJ1Zi5hcHBlbmQoU1ZHUmVuZGVyZXIucmVuZGVyTWFya2VycyhtYXJrZXJzKSk7XHJcblx0XHRidWYuYXBwZW5kKCc8L2RlZnM+Jyk7XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoKCkge1xyXG5cdFx0aWYgKCF0aGlzLnN2ZykgcmV0dXJuO1xyXG5cdFx0bGV0IGcgPSB0aGlzLnN2Zy5xdWVyeVNlbGVjdG9yKCdnJyk7XHJcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xyXG5cdFx0Zy5zZXRBdHRyaWJ1dGUoJ3RyYW5zZm9ybScsICd0cmFuc2xhdGUoJyArIHRbMF0gKyAnLCcgKyB0WzFdICsgJylzY2FsZSgnICsgdGhpcy5zY2FsZSArICcpJyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBzdHIxLCBzdHIyO1xyXG5cdFx0bWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xyXG5cdFx0XHRzdHIxID0gdGhpcy5URU1QTEFURVNbJ01hcmtlciddKG1hcmtlcik7XHJcblx0XHRcdHN0cjIgPSBtYXJrZXIuc2hhcGU7XHJcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcclxuXHRcdFx0XHRzdHIyID0gdGhpcy5yZW5kZXJTaGFwZShzdHIyKTtcclxuXHRcdFx0c3RyMSA9IHN0cjEucmVwbGFjZSgvXFwjXFx7c2hhcGVcXH0vLCBzdHIyKTtcclxuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcclxuXHRcdH0sIHRoaXMpO1xyXG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlckxhYmVsKGJveCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcclxuXHRcdGxldCB0ZW1wbGF0ZSA9IHRoaXMuVEVNUExBVEVTW3NoYXBlLm5hbWVdO1xyXG5cdFx0aWYgKF8uaXNTdHJpbmcodGVtcGxhdGUpKVxyXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xyXG5cdFx0cmV0dXJuIHRlbXBsYXRlKHNoYXBlKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQYXRoRGF0YShzaGFwZSkge1xyXG5cdFx0bGV0IHBvaW50cyA9IHNoYXBlLnBvaW50cztcclxuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcclxuXHRcdGlmICghcG9pbnRzIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuICcnO1xyXG5cclxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xyXG5cdFx0XHQvLyByZW5kZXIgcm91bmRlZCBsaW5lIGpvaW5zLlxyXG5cdFx0XHRsZXQgbmV3UHRzID0gW107XHJcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcclxuXHRcdFx0bGV0IHByZXYgPSBwb2ludHNbMF0sIG5leHQsIGQxLCBkMiwgY29ybmVyO1xyXG5cdFx0XHRuZXdQdHMucHVzaChwcmV2KTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdFx0bmV4dCA9IHBvaW50c1tpXTtcclxuXHRcdFx0XHQvLyBzZXQgdGhlIGNvbnRyb2wgcG9pbnQgZmlyc3QuXHJcblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xyXG5cdFx0XHRcdC8vIGNoZWNrIHRoZSBzaXplIG9mIHRoZSBjb3JuZXIuXHJcblx0XHRcdFx0ZDEgPSBwcmV2LmRpc3RhbmNlKG5leHQpO1xyXG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XHJcblx0XHRcdFx0Y29ybmVyID0gTWF0aC5taW4oc2hhcGUucm91bmQsIGQxLzIsIGQyLzIpO1xyXG5cdFx0XHRcdC8vIHNwbGl0IHRoZSBwb2ludCBpbnRvIHR3by5cclxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XHJcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pLnNjYWxlKGNvcm5lcikudHJhbnNsYXRlKG5leHQpKTtcclxuXHRcdFx0XHRwcmV2ID0gbmV4dDtcclxuXHRcdFx0fVxyXG5cdFx0XHRuZXdQdHMucHVzaChwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdKTtcclxuXHRcdFx0cG9pbnRzID0gbmV3UHRzO1xyXG5cdFx0fVxyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJ00nKSwgcG9pbnQ7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcclxuXHRcdFx0aWYgKGkgPT0gMClcclxuXHRcdFx0XHRidWYuYXBwZW5kKHBvaW50KTtcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0aWYgKGNvbnRyb2xQdHMgJiYgY29udHJvbFB0c1tpXSkge1xyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnIEMgJyk7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXHJcblx0XHRcdFx0XHRcdGJ1Zi5hcHBlbmQoY29udHJvbFB0c1tpXVtqXSkuYXBwZW5kKCcgJyk7XHJcblx0XHRcdFx0XHRidWYuYXBwZW5kKHBvaW50KTtcclxuXHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBMICcpLmFwcGVuZChwb2ludCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXJMaW5rKHNoYXBlKSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0bGV0IGQgPSBTVkdSZW5kZXJlci5nZXRQYXRoRGF0YShzaGFwZSk7XHJcblx0XHRpZiAoc2hhcGUuc2hvd0dhdWdlKVxyXG5cdFx0XHRidWYuYXBwZW5kKCc8cGF0aCBzdHlsZT1cInN0cm9rZTogd2hpdGU7IHN0cm9rZS13aWR0aDogOTsgdmlzaWJpbGl0eTogaGlkZGVuOyBwb2ludGVyLWV2ZW50czogc3Ryb2tlO1wiIGQ9XCInKVxyXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XHJcblx0XHRidWYuYXBwZW5kKCc8cGF0aCBkPVwiJykuYXBwZW5kKGQpLmFwcGVuZCgnXCInKTtcclxuXHRcdGlmIChzaGFwZS5zdGFydE1hcmtlciB8fCBzaGFwZS5lbmRNYXJrZXIpIHtcclxuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XHJcblx0XHRcdGlmIChzaGFwZS5zdGFydE1hcmtlcilcclxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItc3RhcnQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuc3RhcnRNYXJrZXIpID8gc2hhcGUuc3RhcnRNYXJrZXIgOiBzaGFwZS5zdGFydE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xyXG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1lbmQ6IHVybCgjJykuYXBwZW5kKF8uaXNTdHJpbmcoc2hhcGUuZW5kTWFya2VyKSA/IHNoYXBlLmVuZE1hcmtlciA6IHNoYXBlLmVuZE1hcmtlci5pZCkuYXBwZW5kKCcpOycpO1xyXG5cdFx0XHRidWYuYXBwZW5kKCdcIicpO1xyXG5cdFx0fVxyXG5cdFx0YnVmLmFwcGVuZCgnLz4nKTtcclxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhcHBlbmRDb250ZW50KGVsLCBjb250ZW50KSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQoY29udGVudCkuYXBwZW5kKCc8L3N2ZycpO1xyXG5cdFx0bGV0IHRlbXAgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBidWYudG9TdHJpbmcoKSkuZmlyc3RFbGVtZW50Q2hpbGQ7XHJcblxyXG5cdFx0d2hpbGUgKHRlbXAuZmlyc3RDaGlsZClcclxuXHRcdFx0ZWwuYXBwZW5kQ2hpbGQodGVtcC5maXJzdENoaWxkKTtcclxuXHRcdHJldHVybiBlbDtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XHJcblx0XHRsZXQgdHJhbnNsYXRlID0gWzAsIDBdLCBzY2FsZSA9IDEuMDtcclxuXHRcdC8vXHJcblx0XHRsZXQgcGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3RyYW5zbGF0ZVxcKFxccyooW14pXSspLyk7XHJcblx0XHRpZiAocGFydHMpIHtcclxuXHRcdFx0bGV0IG0gPSBwYXJ0c1sxXS50cmltKCkubWF0Y2goLyhbXFxkLi1dKylbICxdKFtcXGQuLV0rKS8pO1xyXG5cdFx0XHRpZiAobSkge1xyXG5cdFx0XHRcdHRyYW5zbGF0ZVswXSA9IHBhcnNlRmxvYXQobVsxXSkgfHwgMDtcclxuXHRcdFx0XHR0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KG1bMl0pIHx8IDA7XHJcblx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdHRyYW5zbGF0ZVswXSA9IHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQocGFydHNbMV0pO1xyXG5cdFx0fVxyXG5cdFx0cGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3NjYWxlXFwoXFxzKihbXildKykvKTtcclxuXHRcdGlmIChwYXJ0cylcclxuXHRcdFx0c2NhbGUgPSBwYXJzZUZsb2F0KHBhcnRzWzFdKSB8fCAxLjA7XHJcblxyXG5cdFx0cmV0dXJuIHt0cmFuc2xhdGUsIHNjYWxlfTtcclxuXHR9XHJcbn1cclxuU1ZHUmVuZGVyZXIuVEVNUExBVEVTID0ge1xyXG5cdCRyb290OiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCI+I3tjaGlsZHJlbn08L2c+JyxcclxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxyXG5cdCRlZGdlOiAnPGcgaWQ9XCIke2lkfVwiIGNsYXNzPVwiJHtjbGFzc05hbWV9XCIgc3R5bGU9XCIke3N0eWxlfVwiIG5zPVwiJHtuYW1lc3BhY2V9XCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxyXG5cdEVsbGlwc2U6ICc8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIiR7d2lkdGgvMn1cIiByeT1cIiR7aGVpZ2h0LzJ9XCIvPicsXHJcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+JyxcclxuXHRUcmlhbmdsZTogJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LCR7LWhlaWdodC8yfSAwLCR7aGVpZ2h0LzJ9XCIvPicsXHJcblx0UmhvbWJ1czogJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LDBcIi8+JyxcclxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcclxuXHRcdHZhciB2ZXJ0aWNhbCA9IGNvbmZpZy5kaXJlY3Rpb24gPT0gJ25vcnRoJyB8fCBjb25maWcuZGlyZWN0aW9uID09ICdzb3V0aCc7XHJcblx0XHRpZiAodmVydGljYWwpXHJcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIiR7LXdpZHRoLzJ9LDAgJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC80fSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwICR7d2lkdGgvNH0sJHtoZWlnaHQvMn0gJHstd2lkdGgvNH0sJHtoZWlnaHQvMn1cIi8+JztcclxuXHR9LFxyXG5cdFBvbHlnb246IGZ1bmN0aW9uKHNoYXBlKSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHBvbHlnb24gcG9pbnRzPVwiJyk7XHJcblx0XHRzaGFwZS5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihwdCl7XHJcblx0XHRcdGJ1Zi5hcHBlbmQocHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZChwdFsxXSkuYXBwZW5kKCcgJyk7XHJcblx0XHR9KTtcclxuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XHJcblx0XHRidWYuYXBwZW5kKCdcIi8+Jyk7XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fSxcclxuXHRJbWFnZTogZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRyZXR1cm4gJzxpbWFnZSB4PVwiJHstd2lkdGgvMn1cIiB5PVwiJHstaGVpZ2h0LzJ9XCIgd2lkdGg9XCIke3dpZHRofVwiIGhlaWdodD1cIiR7aGVpZ2h0fVwiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHhsaW5rOmhyZWY9XCInICsgY29uZmlnLmltYWdlICsgJ1wiLz4nO1xyXG5cdH0sXHJcblx0TWFya2VyOiBmdW5jdGlvbihtYXJrZXIpIHtcclxuXHRcdHJldHVybiBgXHJcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxyXG5yZWZ5PVwiJHttYXJrZXIucmVmWzFdfVwiIG9yaWVudD1cImF1dG9cIiB2aWV3Ym94PVwiJHttYXJrZXIudmlld0JveC54fSAke21hcmtlci52aWV3Qm94Lnl9ICR7bWFya2VyLnZpZXdCb3gud2lkdGh9ICR7bWFya2VyLnZpZXdCb3guaGVpZ2h0fVwiXHJcbm1hcmtlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIiAke21hcmtlci5maWxsID8gYHN0eWxlPVwic3Ryb2tlOiAke21hcmtlci5maWxsfTtmaWxsOiR7bWFya2VyLmZpbGx9XCJgIDogJyd9PiN7c2hhcGV9PC9tYXJrZXI+XHJcbmAudHJpbSgpO1xyXG5cdH0sXHJcblx0R3JpZDogZnVuY3Rpb24oc2l6ZSkge1xyXG5cdFx0cmV0dXJuIGBcclxuPHBhdHRlcm4gaWQ9XCJHcmlkUGF0dGVyblwiIHdpZHRoPVwiJHtzaXplfVwiIGhlaWdodD1cIiR7c2l6ZX1cIiBwYXR0ZXJuVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiPlxyXG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiMFwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG5cdDxlbGxpcHNlIGN4PVwiJHtzaXplfVwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxyXG48L3BhdHRlcm4+YC50cmltKCk7XHJcblx0fSxcclxuXHRMYWJlbDogXy50ZW1wbGF0ZShgXHJcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxyXG4gICBpZiAoYm94KSB7JT5cclxuXHQ8ZyA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmNsYXNzKSB7JT5jbGFzcz1cIjwlPWJveC5jb25maWcuY2xhc3MlPlwiPCV9JT5cXFxyXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcclxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuaW5saW5lU3R5bGUpIHslPlxcXHJcblx0XHRcdGZvbnQtc2l6ZT1cIjwlPWJveC5jb25maWcuZm9udFNpemUlPlwiXFxcclxuXHRcdFx0Zm9udC1mYW1pbHk9XCI8JT1ib3guY29uZmlnLmZvbnRGYW1pbHklPlwiXFxcclxuXHRcdFx0Zm9udC13ZWlnaHQ9XCI8JSBpZiAoYm94LmJvbGQpIHslPmJvbGQ8JX0gZWxzZSB7JT5ub3JtYWw8JX0lPlwiXFxcclxuXHRcdFx0PCUgaWYgKGJveC51bmRlcmxpbmUpIHslPnRleHQtZGVjb3JhdGlvbj1cInVuZGVybGluZVwiPCV9JT5cXFxyXG5cdFx0XHQ8JSBpZiAoYm94Lml0YWxpYykgeyU+Zm9udC1zdHlsZT1cIml0YWxpY1wiPCV9JT5cXFxyXG5cdFx0PCV9JT5cXFxyXG5cdFx0dGV4dC1hbmNob3I9XCI8JT1ib3guYW5jaG9yJT5cIlxcXHJcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxyXG5cdDwlIGlmIChib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSkgeyU+XHJcblx0XHQ8cmVjdCB4PVwiPCU9LWJveC5ib3VuZHMud2lkdGgvMiU+XCIgeT1cIjwlPS1ib3guYm91bmRzLmhlaWdodC8yJT5cIiB3aWR0aD1cIjwlPWJveC5ib3VuZHMud2lkdGglPlwiIGhlaWdodD1cIjwlPWJveC5ib3VuZHMuaGVpZ2h0JT5cIiBzdHlsZT1cIjwlPWJveC5jb25maWcuYmFja2dyb3VuZFN0eWxlJT5cIi8+XHJcblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXHJcblx0XHRfLmVhY2goYm94LmxhYmVsLCBmdW5jdGlvbih2YWx1ZSwgbGluZSkgeyU+XHJcblx0XHRcdDx0ZXh0IDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcudGV4dFN0eWxlKSB7JT5zdHlsZT1cIjwlPWJveC5jb25maWcudGV4dFN0eWxlJT5cIjwlfSU+XFxcclxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XHJcblx0XHQ8JX0pO30gZWxzZSB7ICU+XHJcblx0XHRcdDx0ZXh0PjwlPWJveC5sYWJlbCU+PC90ZXh0PlxyXG5cdFx0PCV9JT5cclxuXHRcdDwlIGlmIChib3guY29uZmlnLnRpdGxlKSB7JT5cclxuXHRcdFx0PHRpdGxlPjwlPWJveC5jb25maWcudGl0bGUlPjwvdGl0bGU+XHJcblx0XHQ8JX0lPlxyXG5cdDwvZz5cclxuPCV9JT5cclxuYC50cmltKCksIHt2YXJpYWJsZTogXCJkYXRhXCJ9KSAgIC8vVE9ETyBhZGQgbW9yZSBpbmxpbmUgdGV4dCBzdHlsZXMuXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanMiXSwic291cmNlUm9vdCI6IiJ9