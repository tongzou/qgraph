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
							if (this.startNormal.x != this.endNormal.x || this.startNormal.y != this.endNormal.y) {
								_randomNumber = Math.floor(Math.random() * _range * 2 - _range + 1) * this.step;
							} else {
								_randomNumber = Math.sign(this.startNormal.x != 0 ? this.startNormal.x : this.startNormal.y) * Math.floor(Math.random() * _range + 1) * this.step;
							}
							this._moveSegment(pos, 1, _randomNumber, 1, 1);
						}
						if (this.randomNoise && pos.length > 4) {
							for (var _i2 = 1; _i2 < pos.length - 2; _i2++) {
								range = this.randomNoise / this.step;
								if (_i2 == 1) {
									randomNumber = Math.sign(this.startNormal.x != 0 ? this.startNormal.x : this.startNormal.y) * Math.floor(Math.random() * range + 1) * this.step;
								} else if (_i2 == pos.length - 3) {
									randomNumber = Math.sign(this.endNormal.x != 0 ? this.endNormal.x : this.endNormal.y) * Math.floor(Math.random() * range + 1) * this.step;
								} else {
									randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
								}
								this._moveSegment(pos, _i2, randomNumber, 1, 1);
							}
						}
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
				    word = void 0;
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyMDcxODhmMTM2NzkzOTIxOWY0ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmhvbWJ1cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZFNoYXBlIiwiRXZlbnRzIiwiQmFzZTY0IiwiQ2FjaGUiLCJVdGlscyIsIkRvbVV0aWxzIiwiU3RyaW5nQnVmZmVyIiwiUG9pbnQiLCJMaW5lIiwiU2hhcGUiLCJSZWN0YW5nbGUiLCJFbGxpcHNlIiwiTGluayIsIkV2ZW50RGlzcGF0Y2hlciIsIkxhYmVsIiwiTWFya2VyIiwiR3JhcGgiLCJDZWxsIiwiTm9kZSIsIkVkZ2UiLCJMYXlvdXQiLCJGbG93TGF5b3V0IiwiUmVuZGVyZXIiLCJTVkdSZW5kZXJlciIsIkdyYXBoQmVoYXZpb3IiLCJTZWxlY3Rpb25CZWhhdmlvciIsIl9rZXlTdHIiLCJlbmNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJhZGRFdmVudEhhbmRsZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsIl9kZWJ1Z2dpbmciLCJfZGVidWdBbGwiLCJ0eXBlUmVnaXN0cnkiLCJzcGxpY2UiLCJBcnJheSIsInR5cGUiLCJuYW1lc3BhY2UiLCJuYW1lIiwiTWFwIiwiZ2V0Iiwic2V0IiwiY3JlYXRlVHlwZSIsInByb3BzIiwiZGVmYXVsdFR5cGUiLCJleHRlbmQiLCJleHRlbmRzIiwiY29uZmlnIiwiXyIsImFzc2lnbiIsInByb3RvdHlwZSIsInR5cGVOYW1lIiwibG9nIiwiYnVpbGRUeXBlcyIsInR5cGVzIiwicmVtb3ZlIiwiZGVmYXVsdHNEZWVwIiwiZm9yRWFjaCIsImNoaWxkIiwicGFyZW50IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiU3Vycm9nYXRlIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiaW5pdENvbmZpZyIsIm9iaiIsImNBcnIiLCJzdXBlciIsImFwcGx5IiwiREVGQVVMVFMiLCJwcm9wIiwidmFsdWUiLCJnZXRDb25zdHJ1Y3RvciIsImpzQ2xhc3MiLCJkZWZhdWx0Q2xhc3MiLCJpc1N0cmluZyIsImV2YWwiLCJkZWJ1ZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzdWJzdHJpbmciLCJpbmZvIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImJvdW5kcyIsImdlb21ldHJ5IiwieCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsInBvcyIsImFuY2hvclgiLCJvZmZzZXRYIiwiYW5jaG9yWSIsIm9mZnNldFkiLCJ1bnNjYWxlIiwidCIsInNjYWxlIiwibyIsImdldFByb3BlcnR5IiwiaGFzIiwiaXNGdW5jdGlvbiIsImFQdCIsInNxcnQiLCJwMiIsImRpc3QiLCJkaXN0YW5jZSIsImFuZ2xlIiwiY29zIiwiUEkiLCJzaW4iLCJjbG9uZSIsInJvdGF0ZSIsInJlY3QiLCJ2ZXJ0aWNhbCIsIlciLCJOIiwiUyIsIkUiLCJORSIsIk5XIiwiU0UiLCJTVyIsImVsIiwidyIsImgiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwdCIsImNvbnRhaW5zIiwicHQxIiwicHQyIiwiaG9yaXpvbnRhbCIsImNvbnRhaW5zMSIsImNvbnRhaW5zMiIsIm91dFB0Iiwib3J0aG9nb25hbCIsImR4IiwiZHkiLCJhbHBoYSIsImF0YW4yIiwicCIsInBpIiwicGkyIiwiYmV0YSIsInRhbiIsImRpciIsImdldERpcmVjdGlvbiIsInBvaW50IiwiZGlyZWN0aW9uIiwicHRzIiwibWFyZ2luIiwiaXNBcnJheSIsIm1pbiIsIm1heCIsInJlY3RzIiwibWlueCIsIm1pbnkiLCJtYXh4IiwiSW5maW5pdHkiLCJtYXh5IiwiZWFjaCIsInIiLCJyZWdpc3RyeSIsImRlZmF1bHRzIiwicmVmUHQiLCJnZXRQZXJpbWV0ZXIiLCJ2aWV3IiwidGVtcGxhdGUiLCJnZXRUZW1wbGF0ZSIsImlzSUUiLCJzQWdlbnQiLCJ1c2VyQWdlbnQiLCJJZHgiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNGaXJlRm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc0Nocm9tZSIsInJhdyIsImlzTWFjIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImlzV2luZG93cyIsImFwcFZlcnNpb24iLCJpc0xpbnV4IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJodG1sIiwic2V0RWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnRCeVN0cmluZyIsInN0ciIsInRlbXAiLCJjaGlsZE5vZGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0ZXN0RWxlbWVudCIsIm5vZGUiLCJtZXRob2QiLCJub2RlVHlwZSIsImdldEFuY2VzdG9yQnkiLCJwYXJlbnROb2RlIiwiZ2V0UG9zaXRpb24iLCJjb250ZXh0IiwiYm9keSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRleHRSZWN0IiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJtb3ZlIiwiZ2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplIiwicHJlbG9hZEltYWdlcyIsImFycmF5IiwibGlzdCIsImxvYWRlZCIsImltZyIsInRoYXQiLCJJbWFnZSIsIm9ubG9hZCIsImluZGV4Iiwic3JjIiwiZ2V0SW1hZ2VJbmZvIiwiZG93bmxvYWRGaWxlIiwiZGF0YSIsIm1pbWUiLCJzcGxpdCIsImVuY29kZWQiLCJhdG9iIiwiZGVjb2RlVVJJIiwiR2V0QmxvYiIsIm1zU2F2ZUJsb2IiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiQmxvYiIsIm9wZW5JbWFnZSIsImltYWdlIiwibXlXaW5kb3ciLCJvcGVuIiwibXlEb2N1bWVudCIsImV2ZW50RnJvbUlucHV0IiwiZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJidWZmZXIiLCJzdHVmZiIsImNvbmNhdCIsInBvcCIsInNlcCIsImpvaW4iLCJzdGFydCIsImVuZCIsImwiLCJjb3NhIiwiZG90UHJvZHVjdCIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJkZW5vbSIsIm51bWVfYSIsIm51bWVfYiIsInVhIiwidWIiLCJpbnRlcnNlY3Rpb25YIiwiaW50ZXJzZWN0aW9uWSIsImEiLCJiIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0eCIsInR5IiwiZCIsImYiLCJnIiwiZGV0IiwieG91dDEiLCJ4b3V0MiIsInlvdXQxIiwieW91dDIiLCJkaXN0MSIsInBvdyIsImRpc3QyIiwieG91dCIsInlvdXQiLCJSaG9tYnVzIiwiaW50ZXJzZWN0aW9uIiwiZGVmYXVsdENvbmZpZyIsInNob3dHYXVnZSIsImRlZmF1bHRHZW9tZXRyeSIsImxpbmtUeXBlcyIsInRlcm1pbmFsVmlzdWFsIiwic2hhcGVDb25maWciLCJzdGFydE1hcmtlciIsImVuZE1hcmtlciIsInN0YXJ0Tm9ybWFsIiwiZW5kTm9ybWFsIiwicmVuZGVyTGluayIsImlzTnVtYmVyIiwicG9pbnRzIiwidHJhbnNsYXRlIiwiZ2V0U2NhbGVkIiwibGlua0NsYXNzIiwiRGlyZWN0TGluayIsIkJlemllckxpbmsiLCJjdHJscHRzIiwiY29udHJvbFB0cyIsInAxIiwicDMiLCJwNCIsInMiLCJFbnRpdHlSZWxhdGlvbnMiLCJzb3VyY2UiLCJQb3J0IiwiZ2V0Qm91bmRzIiwiZWRnZSIsImlzU291cmNlTGVmdCIsImlzVGFyZ2V0TGVmdCIsInJlc3VsdCIsImdldENlbnRlclkiLCJ4ZSIsInllIiwic2VnIiwic2VnbWVudCIsImRlcCIsImFyciIsIm1pZFkiLCJNYW5oYXR0YW4iLCJNSU5fQlVGRkVSIiwiYXV0b1JvdXRlIiwicmFuZG9tTm9pc2UiLCJzdGVwIiwibWF4Q2hhbm5lbFdpZHRoIiwiY29udGFpbmVyIiwiYm94ZXMiLCJzdGFydEJveCIsImVuZEJveCIsInNpZGUiLCJzaWRlMiIsImJveCIsImludGVyc2VjdCIsImoiLCJjaGFubmVsIiwiY2hhbm5lbDIiLCJzdGFydFBhZGRpbmciLCJlbmRQYWRkaW5nIiwiX2dldENoYW5uZWwiLCJfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24iLCJfZ2V0Um91dGVUZW5kZW5jeSIsIl9oYXNJbnRlcnNlY3Rpb24iLCJfbW92ZVNlZ21lbnQiLCJicmVha1B0IiwiX2dldFJvdXRlRGlyZWN0aW9uIiwiZ2V0Q2VudGVyIiwiYm94MSIsImJveDIiLCJnZXRMZWZ0IiwiZ2V0UmlnaHQiLCJnZXRCb3R0b20iLCJnZXRUb3AiLCJnZXRUcmFuc2xhdGVkIiwicm91dGUiLCJfbWVyZ2VTZWdtZW50cyIsImdldENvbW1vbkFuY2VzdG9yIiwiZ2V0RGVzY2VuZGFudHMiLCJleGNsdWRlRnJvbVJvdXRpbmciLCJpc0FuY2VzdG9yIiwicmFuZ2UiLCJyYW5kb21OdW1iZXIiLCJmbG9vciIsInJhbmRvbSIsIm5vaXNlIiwic2lnbiIsInN0YXJ0QnVmZmVyIiwiZW5kQnVmZmVyIiwic3RhcnRCdWZmZXJOb3JtYWwiLCJlbmRCdWZmZXJOb3JtYWwiLCJtaWRkbGUiLCJwcnVuZVB0cyIsImRldGVjdEludGVyc2VjdGlvbiIsInNhdmVkSW5kZXgiLCJzYXZlZFNpZGUiLCJoMSIsImgyIiwiZXF1YWxzIiwiS2V5VXRpbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJyb290Iiwiem9vbVNjYWxlIiwicm9vdE5TIiwiZ2V0QXR0cmlidXRlIiwibGlzdGVuZXJzIiwiZHJhZ2dpbmciLCJoYW5kbGVyIiwiYmluZCIsImhhbmRsZUV2ZW50Iiwic3RhcnRlZCIsImVudGVyU3RhY2siLCJvbiIsInN0YXJ0S2V5cyIsIm9mZiIsInN0b3BLZXlzIiwiZXZlbnQiLCJidWYiLCJucyIsInN0YWNrIiwiaXNSb290Iiwic3RhcnRzV2l0aCIsInJvb3RUYXJnZXQiLCJuc1RhcmdldCIsInByZXBlbmQiLCJ0YXJnZXRTdGFjayIsInRvU3RyaW5nIiwiaXNLZXlFdmVudCIsImdldEtleUV2ZW50IiwiZ2V0RXZlbnRJbmZvIiwid2hlZWxEZWx0YSIsImJ1dHRvbiIsImRyYWdPYmplY3QiLCJtb3VzZSIsImRyYWdQb3MiLCJtb3VzZW1vdmUiLCJjdXJyZW50UG9zIiwiZGlzcGF0Y2giLCJtb3VzZXVwIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZUVudGVyTGVhdmUiLCJsYXN0IiwiY2xlYXJFbnRlclN0YWNrIiwiayIsImdldE5TIiwidmFsIiwiYXBwZW5kIiwiaXRlbSIsIm5zVHlwZSIsInJlZ2V4cCIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJsYXN0UG9zaXRpb24iLCJyZWdpc3RlcktleSIsImdldEtleURhdGEiLCJjdHJsIiwiYWx0Iiwic2hpZnQiLCJtZXRhIiwiY29kZSIsInVucmVnaXN0ZXJLZXkiLCJ6SW5kZXgiLCJyZWdpc3RlciIsIlJlZ0V4cCIsInN0b3AiLCJyZWdpc3RlcmVkVHlwZSIsImNoYW5nZWRUb3VjaGVzIiwic3ZnIiwib3duZXJTVkdFbGVtZW50IiwiY3JlYXRlU1ZHUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1hdHJpeFRyYW5zZm9ybSIsImdldFNjcmVlbkNUTSIsImludmVyc2UiLCJjbGllbnRMZWZ0IiwiY2xpZW50VG9wIiwiS0VZIiwiQUxUIiwiQkFDS19TUEFDRSIsIkNBUFNfTE9DSyIsIkNPTlRST0wiLCJERUxFVEUiLCJET1dOIiwiRU5EIiwiRU5URVIiLCJFU0NBUEUiLCJIT01FIiwiTEVGVCIsIk1FVEEiLCJOVU1fTE9DSyIsIlBBR0VfRE9XTiIsIlBBR0VfVVAiLCJQQVVTRSIsIlBSSU5UU0NSRUVOIiwiUklHSFQiLCJTQ1JPTExfTE9DSyIsIlNISUZUIiwiU1BBQ0UiLCJUQUIiLCJVUCIsIktleWJvYXJkRXZlbnQiLCJrZXlDb2RlIiwid2hpY2giLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJtZXRhS2V5Iiwibm9kZURlZmF1bHRzIiwicm9sZSIsImRyYWdnYWJsZSIsInNlbGVjdGFibGUiLCJlZGl0YWJsZSIsInJlc2l6YWJsZSIsInNvdXJjZWFibGUiLCJ0YXJnZXRhYmxlIiwidmlzaWJsZSIsImVkZ2VEZWZhdWx0cyIsImlkIiwic2l6ZSIsImNvbG9yIiwidW5pcXVlSWQiLCJtb2RlbCIsIm5vZGVzIiwiZWRnZXMiLCJzZWxlY3Rpb24iLCJkZXN0cm95ZWQiLCJub2RlVHlwZXMiLCJlZGdlVHlwZXMiLCJtYXJrZXJzIiwibWFya2VyIiwibWFya2VyQ29uZmlnIiwiZ2V0TWFya2VyIiwibG9hZE1vZGVsIiwiY3VycmVudFJvb3QiLCJOb2RlQ2xhc3MiLCJnZXRKU0NsYXNzIiwiYWRkQ2hpbGQiLCJmcm9tIiwidG8iLCJFZGdlQ2xhc3MiLCJhZGROb2RlIiwiYWRkRWRnZSIsImNoaWxkcmVuIiwid2l0aG91dCIsImFsbG93RGFuZ2xpbmdFZGdlcyIsIm11bHRpQ29ubmVjdCIsInJlYWRPbmx5Iiwidmlld09ubHkiLCJncmFwaCIsImluRWRnZXMiLCJvdXRFZGdlcyIsInBvcnRzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwicG9ydE5hbWUiLCJlbmRQdCIsInNoYXBlIiwiZ2V0U2hhcGUiLCJsYWJlbCIsImRlY29yYXRvcnMiLCJjcmVhdGVEZWNvcmF0b3JzIiwidmlld3MiLCJ2aWV3UHJvcHMiLCJFcnJvciIsImlzVW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwiY29tcHV0ZWRDbGFzc05hbWUiLCJ2aWV3UHJvcCIsInNoYXBlQ2xhc3MiLCJnZXRWaWV3IiwiZ2V0TGFiZWxCb3giLCJyZW5kZXJMYWJlbCIsIl9jb21wdXRlZENsYXNzTmFtZSIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjYWNoZXMiLCJnZXRDYWNoZSIsImNsZWFyIiwibmFtZXNhcGNlIiwiRk9OVF9CT0xEIiwiRk9OVF9JVEFMSUMiLCJGT05UX1VOREVSTElORSIsIkZPTlRfU0hBRE9XIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udENvbG9yIiwicGFkZGluZyIsImxpbmVQYWRkaW5nIiwiYWxpZ24iLCJyb3RhdGlvbiIsInN0cmluZ01lYXN1cmVFbCIsIm1lYXN1cmVEaXYiLCJiYXNlbGluZURpdiIsImdldFN0cmluZ1NpemUiLCJtZW1vaXplIiwiYm9sZCIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsImRvYyIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb250V2VpZ2h0Iiwic3RydXQiLCJmaXJzdENoaWxkIiwiYmFzZWxpbmVIZWlnaHQiLCJvZmZzZXRUb3AiLCJiYXNlbGluZSIsIndyYXAiLCJtYXhXaWR0aCIsInNwYWNlU2l6ZSIsInNwYWNlIiwibGluZUhlaWdodCIsImxpbmVzIiwid29yZHMiLCJsaW5lIiwiY3VycmVudFdpZHRoIiwid29yZFdpZHRoIiwibmV3TGluZSIsIndvcmQiLCJsYWJlbENvbmZpZyIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiX2dldExhYmVsQm94IiwiY2FsbCIsImdldExhYmVsQm94Rm9yTGluayIsIndyYXBwZWRMYWJlbCIsImFuY2hvciIsInNldEFuY2hvclgiLCJwaXZvdCIsIm1heEJvdW5kcyIsIl9sYWJlbCIsInVuZGVybGluZSIsIml0YWxpYyIsInNoYWRvdyIsImVkaXRvciIsInJlZkVsIiwidGV4dEVsIiwic2luZ2xlTGluZSIsInVuc2VsZWN0YWJsZSIsIm92ZXJmbG93IiwiYm9yZGVyIiwiZm9jdXMiLCJzZWxlY3QiLCJmaXJlIiwiY2FuY2VsIiwic2V0U291cmNlIiwic291cmNlUG9zIiwic2V0VGFyZ2V0IiwidGFyZ2V0UG9zIiwic2V0VGVybWluYWwiLCJzZXRFZGdlQXQiLCJyZW1vdmVFZGdlIiwiYWRkT3V0RWRnZSIsImFkZEluRWRnZSIsImNlbnRlciIsInJlZlB0cyIsImdldFJlZmVyZW5jZVBvaW50cyIsInRlcm1pbmFscyIsImdldEJvdW5kIiwiZ2V0UG9ydCIsImdldExpbmsiLCJnZXRUZXJtaW5hbFZpc3VhbCIsImFycm93Iiwidmlld0JveCIsInJlZiIsImZpbGwiLCJ0cmlhbmdsZSIsIm92YWwiLCJkaWFtb25kIiwiZmFjdG9yeSIsIm9yaWVudGF0aW9uIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaXRlbXMiLCJvd25lciIsImdldExpbmtlZE5vZGVzIiwiaGdhcCIsInZnYXAiLCJfZmxQb3MiLCJtb3ZlVG8iLCJ0cmlnZ2VyIiwidGFiaW5kZXgiLCJsYXlvdXQiLCJsYXlvdXRDbGFzcyIsIl90cmFuc2xhdGUiLCJfc2NhbGUiLCJkaXNwYXRjaGVyIiwiZ3JhcGhCZWhhdmlvciIsInNlbGVjdGlvbkJlaGF2aW9yIiwibm9kZUJlaGF2aW9yIiwiZWRnZUJlaGF2aW9yIiwiY29ubmVjdGlvbkJlaGF2aW9yIiwic2NhbGVkIiwidmlld3BvcnQiLCJpc051bGwiLCJ2cCIsInRyYW5zZm9ybSIsInJlZnJlc2giLCJfZ3JhcGgiLCJpbml0aWFsaXplQmVoYXZpb3JzIiwicmVuZGVyTWFya2VycyIsIl9maXJzdFNlbGVjdGlvbiIsIl9kZWxheUVkaXQiLCJkZWxheSIsInByZXByb2Nlc3NvciIsIlRFTVBMQVRFUyIsInBhcnRzIiwicGFydCIsInRyaW0iLCJjYW1lbENhc2UiLCJpbnRlcnBvbGF0ZSIsImdyaWRTaXplIiwiZ0JvdW5kcyIsInZCb3VuZHMiLCJwYXJzZUZsb2F0IiwiZGVmYXVsdENsaWNrTW9kZSIsImhpZGVPdXRsaW5lIiwic2luZ2xlU2VsZWN0IiwiZ3JpZEVuYWJsZWQiLCJndWlkZXNFbmFibGVkIiwibWF4Wm9vbSIsIm1pblpvb20iLCJ6b29tRmFjdG9yIiwibWFza09wYWNpdHkiLCJyZW5kZXJlciIsImhhbmRsZURyYWciLCJoYW5kbGVab29tIiwicGFuIiwiQmVoYXZpb3IiLCJzZWxlY3RDZWxsIiwidW5zZWxlY3RDZWxsIiwiaGFuZGxlTXVsdGlTZWxlY3QiLCJzZWxlY3RlZE5vZGVzIiwic2VsZWN0ZWRMaW5rcyIsImF0dGFjaGVkTGlua3MiLCJjbGFzc2VkIiwic2VsZWN0ZWRWZXJ0aWNlcyIsImdldFNoYXBlcyIsImdldEF0dGFjaGVkRWRnZXMiLCJzZWxlY3RlZEVkZ2VzIiwiY2VsbCIsInRvZ2dsZSIsImlzU2VsZWN0ZWQiLCJkMyIsImRhdGFUYXJnZXQiLCJtb3ZlVG9Gcm9udCIsInNldFNlbGVjdGlvbiIsInV0aWwiLCJzdGFydFB0IiwiZ2V0Qm91bmRpbmdSZWN0YW5nbGUiLCJydWJiZXJiYW5kIiwiYXBwZW5kTm9kZSIsImdldENlbGxMYXllciIsImNlbGxzIiwiZ2V0Q3VycmVudFJvb3QiLCJmaWx0ZXIiLCJhdHRyIiwiTlMiLCJTVkdFbGVtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCIkbm9kZSIsIiR0ZW1wIiwiY2xvbmVOb2RlIiwib3V0ZXJIVE1MIiwicm9wZW4iLCJub2RlTmFtZSIsInJjbG9zZSIsIm1hcmt1cCIsImxhc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwidG9EYXRhVVJMIiwib3B0aW9ucyIsIl9zdmciLCJtc2ciLCJleHBvcnRTVkciLCJzdmdfeG1sIiwic3ZnX2RhdGF1cmwiLCJiYXNlNjRkYXRhVVJMZW5jb2RlIiwiYjY0IiwiYnRvYSIsImV4cG9ydEltYWdlIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN2Z19pbWciLCJkcmF3SW1hZ2UiLCJpbWFnZV9kYXRhdXJsIiwib25lcnJvciIsImV4cG9ydEltYWdlQ2FudmciLCJjYW52ZyIsInhjYW52YXMiLCJqc0NhbnZhcyIsImtlZXBPdXRzaWRlVmlld3BvcnQiLCJiYm94IiwiZ2V0QkJveCIsImNvbXBpbGUiLCJrZWVwTm9uU2FmZSIsInJlbmRlckRlZnMiLCJxdWVyeVNlbGVjdG9yIiwic3RyMSIsInN0cjIiLCJyZW5kZXJTaGFwZSIsInJvdW5kIiwibmV3UHRzIiwicHJldiIsIm5leHQiLCJkMSIsImQyIiwiY29ybmVyIiwiZ2V0UGF0aERhdGEiLCJjb250ZW50IiwibSIsIiRyb290IiwiJGVkZ2UiLCJUcmlhbmdsZSIsIkhleGFnb24iLCJQb2x5Z29uIiwicmVtb3ZlTGFzdCIsIkdyaWQiLCJ2YXJpYWJsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdENBOzs7O0FBQ0E7Ozs7QUFFQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNB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QURwRixvQkFFRDNJLE9BQU8ySSxHQUFQLENBQVcsQ0FBWCxDQUZDLHFDQUV3QzNJLE9BQU8wSSxPQUFQLENBQWV0bEIsQ0FGdkQsU0FFNEQ0YyxPQUFPMEksT0FBUCxDQUFlbGxCLENBRjNFLFNBRWdGd2MsT0FBTzBJLE9BQVAsQ0FBZW5sQixLQUYvRixTQUV3R3ljLE9BQU8wSSxPQUFQLENBQWVqbEIsTUFGdkgsNENBR3NCdWMsT0FBTzRJLElBQVAsd0JBQWdDNUksT0FBTzRJLElBQXZDLGNBQW9ENUksT0FBTzRJLElBQTNELFVBQXFFLEVBSDNGLDRCQUlQMkMsSUFKTyxFQUFQO0FBS0EsR0FqQ3NCO0FBa0N2QmlILFFBQU0sY0FBU25ULElBQVQsRUFBZTtBQUNwQixVQUFPLDRDQUMwQkEsSUFEMUIsb0JBQzJDQSxJQUQzQyx5SUFHY0EsSUFIZCxpRUFJT0EsSUFKUCwwRUFLT0EsSUFMUCxnQkFLb0JBLElBTHBCLDBEQU1Ha00sSUFOSCxFQUFQO0FBT0EsR0ExQ3NCO0FBMkN2QjN1QixTQUFPLGlCQUFFK0wsUUFBRixDQUFXLDg5Q0E0QmpCNGlCLElBNUJpQixFQUFYLEVBNEJFLEVBQUNrSCxVQUFVLE1BQVgsRUE1QkYsQ0E0QndCO0FBNUJ4QixHQTNDZ0IsRUFBeEI7O21CQTBFZXAxQixXIiwiZmlsZSI6InFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXCJsb2Rhc2hcIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wicWdyYXBoXCJdID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJvb3RbXCJfXCJdKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDIwNzE4OGYxMzY3OTM5MjE5ZjRmIiwiaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi91dGlsL2Jhc2U2NFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XG5pbXBvcnQgUmhvbWJ1cyBmcm9tIFwiLi9nZW9tZXRyeS9SaG9tYnVzXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5pbXBvcnQgU2VsZWN0aW9uQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcblxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcblNoYXBlLmFkZFNoYXBlKFwiUmhvbWJ1c1wiLCBSaG9tYnVzKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFdmVudHMsXG5cdEJhc2U2NCxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0Q2VsbCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXIsXG5cdEdyYXBoQmVoYXZpb3IsXG5cdFNlbGVjdGlvbkJlaGF2aW9yXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiLy8gaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vamF2YXNjcmlwdC1iYXNlNjQuaHRtbFxuXG52YXIgQmFzZTY0ID0ge1xuXG5cdC8vIHByaXZhdGUgcHJvcGVydHlcblx0X2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcblxuXHQvLyBwdWJsaWMgbWV0aG9kIGZvciBlbmNvZGluZ1xuXHRlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcblx0XHR2YXIgb3V0cHV0ID0gXCJcIjtcblx0XHR2YXIgY2hyMSwgY2hyMiwgY2hyMywgZW5jMSwgZW5jMiwgZW5jMywgZW5jNDtcblx0XHR2YXIgaSA9IDA7XG5cblx0XHRpbnB1dCA9IEJhc2U2NC5fdXRmOF9lbmNvZGUoaW5wdXQpO1xuXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuXHRcdFx0Y2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblx0XHRcdGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cdFx0XHRjaHIzID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXG5cdFx0XHRlbmMxID0gY2hyMSA+PiAyO1xuXHRcdFx0ZW5jMiA9ICgoY2hyMSAmIDMpIDw8IDQpIHwgKGNocjIgPj4gNCk7XG5cdFx0XHRlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG5cdFx0XHRlbmM0ID0gY2hyMyAmIDYzO1xuXG5cdFx0XHRpZiAoaXNOYU4oY2hyMikpIHtcblx0XHRcdFx0ZW5jMyA9IGVuYzQgPSA2NDtcblx0XHRcdH0gZWxzZSBpZiAoaXNOYU4oY2hyMykpIHtcblx0XHRcdFx0ZW5jNCA9IDY0O1xuXHRcdFx0fVxuXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgK1xuXHRcdFx0dGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xuXHRcdFx0dGhpcy5fa2V5U3RyLmNoYXJBdChlbmMzKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jNCk7XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gb3V0cHV0O1xuXHR9LFxuXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXG5cdGRlY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzO1xuXHRcdHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuXHRcdHZhciBpID0gMDtcblxuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xuXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcblxuXHRcdFx0ZW5jMSA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblx0XHRcdGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cdFx0XHRlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXHRcdFx0ZW5jNCA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblxuXHRcdFx0Y2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XG5cdFx0XHRjaHIyID0gKChlbmMyICYgMTUpIDw8IDQpIHwgKGVuYzMgPj4gMik7XG5cdFx0XHRjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xuXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjEpO1xuXG5cdFx0XHRpZiAoZW5jMyAhPSA2NCkge1xuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjIpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGVuYzQgIT0gNjQpIHtcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIzKTtcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cblx0fSxcblxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2Rpbmdcblx0X3V0ZjhfZW5jb2RlIDogZnVuY3Rpb24gKHN0cmluZykge1xuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcblx0XHR2YXIgdXRmdGV4dCA9IFwiXCI7XG5cblx0XHRmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xuXG5cdFx0XHR2YXIgYyA9IHN0cmluZy5jaGFyQ29kZUF0KG4pO1xuXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0cmV0dXJuIHV0ZnRleHQ7XG5cdH0sXG5cblx0Ly8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXG5cdF91dGY4X2RlY29kZSA6IGZ1bmN0aW9uICh1dGZ0ZXh0KSB7XG5cdFx0dmFyIHN0cmluZyA9IFwiXCI7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHZhciBjID0gYzEgPSBjMiA9IDA7XG5cblx0XHR3aGlsZSAoIGkgPCB1dGZ0ZXh0Lmxlbmd0aCApIHtcblxuXHRcdFx0YyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcblxuXHRcdFx0aWYgKGMgPCAxMjgpIHtcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xuXHRcdFx0XHRjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAzMSkgPDwgNikgfCAoYzIgJiA2MykpO1xuXHRcdFx0XHRpICs9IDI7XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0YzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcblx0XHRcdFx0YzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTtcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMTUpIDw8IDEyKSB8ICgoYzIgJiA2MykgPDwgNikgfCAoYzMgJiA2MykpO1xuXHRcdFx0XHRpICs9IDM7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gc3RyaW5nO1xuXHR9XG5cbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhc2U2NDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL2Jhc2U2NC5qcyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuXG4vLyBiZWFuIHJlcXVpcmVzIHRoZSBleGlzdGVuY2Ugb2Ygd2luZG93XG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0Z2xvYmFsLndpbmRvdyA9IHsgYWRkRXZlbnRIYW5kbGVyOiBmdW5jdGlvbigpIHt9IH07XG5cdGdsb2JhbC5kb2N1bWVudCA9IHt9O1xuXHRnbG9iYWwubmF2aWdhdG9yID0ge307XG59XG5cbi8vIHV0aWwgdmFyaWFibGVzXG5sZXQgX2RlYnVnZ2luZyA9IFtdLCBfZGVidWdBbGwgPSBmYWxzZSwgdHlwZVJlZ2lzdHJ5ID0ge30sIHNwbGljZSA9IEFycmF5LnNwbGljZTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdHR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIG5hbWUsIHR5cGUpIHtcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSBuZXcgTWFwKCk7XG5cdFx0aWYgKCFuYW1lKVxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXS5nZXQobmFtZSk7XG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xuXHR9LFxuXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcblx0XHRpZiAoIXR5cGUpIHtcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXG5cdFx0XHRcdGV4dGVuZCA9IGRlZmF1bHRUeXBlO1xuXHRcdFx0aWYgKGV4dGVuZClcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHtcblx0XHRcdFx0fTtcblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR0eXBlID0gY2xhc3Mge1xuXHRcdFx0XHRcdGNvbnN0cnVjdG9yKGNvbmZpZykge1xuXHRcdFx0XHRcdFx0Xy5hc3NpZ24odGhpcywgY29uZmlnKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRkZWxldGUgcHJvcHMubmFtZTtcblx0XHRcdGRlbGV0ZSBwcm9wcy5leHRlbmRzO1xuXHRcdFx0Xy5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3BzKTtcblx0XHRcdHR5cGUudHlwZU5hbWUgPSBuYW1lO1xuXHRcdFx0dGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuY3JlYXRlVHlwZSAtICcgKyBuYW1lc3BhY2UgKyAnLicgKyBuYW1lKTtcblx0XHR9XG5cdFx0cmV0dXJuIHR5cGU7XG5cdH0sXG5cblx0YnVpbGRUeXBlczogZnVuY3Rpb24gKHR5cGVzLCBuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKSB7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcblxuXHRcdGlmICghdHlwZXMgJiYgZGVmYXVsdFR5cGUpIHtcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcblx0XHRcdGxldCB0eXBlID0gXy5yZW1vdmUodHlwZXMsIHtuYW1lOiBkZWZhdWx0VHlwZS5uYW1lfSk7XG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XG5cdFx0XHRpZiAodHlwZSlcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBfLmRlZmF1bHRzRGVlcCh0eXBlLCBkZWZhdWx0VHlwZSkpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcblx0XHR9XG5cblx0XHRfLmZvckVhY2godHlwZXMsICh0eXBlKSA9PiB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCB0eXBlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fSk7XG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XG5cdH0sXG5cblx0Ly8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvcnJlY3RseSBzZXQgdXAgdGhlIHByb3RvdHlwZSBjaGFpbiwgZm9yIHN1YmNsYXNzZXMuXG5cdC8vIFNpbWlsYXIgdG8gYGdvb2cuaW5oZXJpdHNgLCBidXQgdXNlcyBhIGhhc2ggb2YgcHJvdG90eXBlIHByb3BlcnRpZXMgYW5kXG5cdC8vIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQuXG5cdGV4dGVuZDogZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG5cdFx0Ly8gQWRkIHN0YXRpYyBwcm9wZXJ0aWVzIHRvIHRoZSBjb25zdHJ1Y3RvciBmdW5jdGlvbiwgaWYgc3VwcGxpZWQuXG5cdFx0Xy5leHRlbmQoY2hpbGQsIHBhcmVudCwgc3RhdGljUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IHRoZSBwcm90b3R5cGUgY2hhaW4gdG8gaW5oZXJpdCBmcm9tIGBwYXJlbnRgLCB3aXRob3V0IGNhbGxpbmdcblx0XHQvLyBgcGFyZW50YCdzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuXHRcdHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7XG5cdFx0fTtcblx0XHRTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcblx0XHRjaGlsZC5wcm90b3R5cGUgPSBuZXcgU3Vycm9nYXRlO1xuXG5cdFx0Ly8gQWRkIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChpbnN0YW5jZSBwcm9wZXJ0aWVzKSB0byB0aGUgc3ViY2xhc3MsXG5cdFx0Ly8gaWYgc3VwcGxpZWQuXG5cdFx0aWYgKHByb3RvUHJvcHMpIF8uZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG5cblx0XHQvLyBTZXQgYSBjb252ZW5pZW5jZSBwcm9wZXJ0eSBpbiBjYXNlIHRoZSBwYXJlbnQncyBwcm90b3R5cGUgaXMgbmVlZGVkIGxhdGVyLlxuXHRcdGNoaWxkLnN1cGVyY2xhc3MgPSBwYXJlbnQucHJvdG90eXBlO1xuXG5cdFx0cmV0dXJuIGNoaWxkO1xuXHR9LFxuXG5cdGluaXRDb25maWc6IGZ1bmN0aW9uIChvYmosIGNvbmZpZykge1xuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xuXHRcdHdoaWxlIChjKSB7XG5cdFx0XHRpZiAoYy5zdXBlcikge1xuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3Rvcjtcblx0XHRcdFx0c3BsaWNlLmFwcGx5KGNBcnIsIFswLCAwLCBjXSk7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0YyA9IG51bGw7XG5cdFx0fVxuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjID0gY0FycltpXTtcblx0XHRcdGlmIChjLkRFRkFVTFRTKVxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XG5cdFx0fVxuXHRcdG9iai5wcm9wcyA9IF8uYXNzaWduKHByb3BzLCBjb25maWcpO1xuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcblx0XHRcdGlmICghdmFsdWUpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xuXHRcdH07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldHMgdGhlIEpTIGNsYXNzIGNvbnN0cnVjdG9yLlxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXG5cdCAqL1xuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcykge1xuXHRcdGlmICghanNDbGFzcylcblx0XHRcdGpzQ2xhc3MgPSBkZWZhdWx0Q2xhc3M7XG5cblx0XHRpZiAoXy5pc1N0cmluZyhqc0NsYXNzKSlcblx0XHRcdGpzQ2xhc3MgPSBldmFsKGpzQ2xhc3MpO1xuXHRcdHJldHVybiBqc0NsYXNzO1xuXHR9LFxuXG5cdGRlYnVnOiBmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xuXHRcdGlmIChtb2R1bGVOYW1lKSB7XG5cdFx0XHRfZGVidWdnaW5nLnB1c2gobW9kdWxlTmFtZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9kZWJ1Z0FsbCA9IHRydWU7XG5cdFx0fVxuXHR9LFxuXG5cdGxvZzogZnVuY3Rpb24gKG5hbWUsIG1lc3NhZ2UpIHtcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xuXHRcdFx0ZGVidWcgPSBmYWxzZTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX2RlYnVnZ2luZy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAoX2RlYnVnZ2luZ1tpXSA9PSBuYW1lKSBkZWJ1ZyA9IHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICghZGVidWcpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0d2hpbGUgKG5hbWUubGVuZ3RoIDwgMTApIHtcblx0XHRcdG5hbWUgPSBuYW1lICsgJyAnO1xuXHRcdH1cblx0XHRuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMTApICsgXCIgLSBcIjtcblx0XHRjb25zb2xlLmluZm8obmFtZSwgbWVzc2FnZSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXG5cdCAqIEBwYXJhbSBib3VuZHNcblx0ICogQHBhcmFtIGdlb21ldHJ5IFRoZSBnZW9tZXRyeSBpbmZvcm1hdGlvbiwgdGhlIGZvcm1hdCBvZiBHZW9tZXRyeSBpczpcblx0ICoge1xuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxuXHQgKiAgICAgIHk6IFwieSBjb29yZGluYXRlIG9mIHJlZiBwb2ludC5cIixcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcblx0ICogICAgICBvZmZzZXRYOiBcInRoZSBvZmZzZXQgaW4gdGhlIHggZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXG5cdCAqICAgICAgaGVpZ2h0OiBcInRoZSBoZWlnaHQgb2YgdGhlIGNoaWxkIGVsZW1lbnRcIlxuXHQgKiB9XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbiAoYm91bmRzLCBnZW9tZXRyeSkge1xuXHRcdGxldCB4ID0gTWF0aC5hYnMoZ2VvbWV0cnkueCkgPD0gMSA/IGJvdW5kcy53aWR0aCAqIGdlb21ldHJ5LnggOiBnZW9tZXRyeS54O1xuXHRcdGxldCB5ID0gTWF0aC5hYnMoZ2VvbWV0cnkueSkgPD0gMSA/IGJvdW5kcy5oZWlnaHQgKiBnZW9tZXRyeS55IDogZ2VvbWV0cnkueTtcblx0XHRyZXR1cm4gdGhpcy5vZmZzZXRQb3NpdGlvbihbeCwgeV0sIGdlb21ldHJ5KTtcblx0fSxcblxuXHRvZmZzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvcywgZ2VvbWV0cnkpIHtcblx0XHRyZXR1cm4gW3Bvc1swXSArIGdlb21ldHJ5LndpZHRoICogZ2VvbWV0cnkuYW5jaG9yWCArIGdlb21ldHJ5Lm9mZnNldFgsIHBvc1sxXSArIGdlb21ldHJ5LmhlaWdodCAqIGdlb21ldHJ5LmFuY2hvclkgKyBnZW9tZXRyeS5vZmZzZXRZXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHVuc2NhbGVkLCBpLmUuLCBhYnNvbHV0ZSBwb3NpdGlvbiB3aXRob3V0IGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRlXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cblx0ICovXG5cdHVuc2NhbGU6IGZ1bmN0aW9uICh0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0sIG8ud2lkdGggKiBzY2FsZSwgby5oZWlnaHQgKiBzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChvLnggKiBzY2FsZSArIHRbMF0sIG8ueSAqIHNjYWxlICsgdFsxXSk7XG5cdFx0ZWxzZVxuXHRcdFx0cmV0dXJuIFtvWzBdICogc2NhbGUgKyB0WzBdLCBvWzFdICogc2NhbGUgKyB0WzFdXTtcblx0fSxcblxuXHQvKipcblx0ICogR2V0IHRoZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZ3JhcGggdGhhdCdzIHNjYWxlZCwgaS5lLiwgcmVsYXRpdmUgcG9zaXRpb24gY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxuXHQgKiBAcGFyYW0gdCB0aGUgY3VycmVudCB0cmFuc2xhdGlvblxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHRzY2FsZTogZnVuY3Rpb24gKHQsIHNjYWxlLCBvKSB7XG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54IC0gdFswXSkgLyBzY2FsZSwgKG8ueSAtIHRbMV0pIC8gc2NhbGUsIG8ud2lkdGggLyBzY2FsZSwgby5oZWlnaHQgLyBzY2FsZSk7XG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludCgoby54IC0gdFswXSkgLyBzY2FsZSwgKG8ueSAtIHRbMV0pIC8gc2NhbGUpO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbKG9bMF0gLSB0WzBdKSAvIHNjYWxlLCAob1sxXSAtIHRbMV0pIC8gc2NhbGVdO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb252ZW5pZW5jZSBtZXRob2QuXG5cdCAqL1xuXHRnZXRQcm9wZXJ0eTogZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xuXHRcdGlmICghb2JqKVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0aWYgKF8uaGFzKG9iaiwgcHJvcCkpXG5cdFx0XHRyZXR1cm4gb2JqW3Byb3BdO1xuXHRcdGlmIChvYmoucHJvcCAmJiBfLmlzRnVuY3Rpb24ob2JqLnByb3ApKVxuXHRcdFx0cmV0dXJuIG9iai5wcm9wKHByb3ApO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvVXRpbHMuanMiLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L1BvaW50LmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBTaGFwZSB7XHJcblx0LyoqXHJcblx0ICogQ2hlY2tzIHdoZXRoZXIgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgYSBnaXZlbiBwb2ludCBvZiBhIGdpdmVuIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGNvbnRhaW5zKGVsKSB7XHJcblx0XHRsZXQgdyA9IGVsLndpZHRoIHx8IDA7XHJcblx0XHRsZXQgaCA9IGVsLmhlaWdodCB8fCAwO1xyXG5cdFx0bGV0IGxlZnQgPSBlbC54IC0gdy8yO1xyXG5cdFx0bGV0IHJpZ2h0ID0gZWwueCArIHcvMjtcclxuXHRcdGxldCB0b3AgPSBlbC55IC0gaC8yO1xyXG5cdFx0bGV0IGJvdHRvbSA9IGVsLnkgKyBoLzI7XHJcblx0XHRyZXR1cm4gKHJpZ2h0IDw9IHRoaXMucmlnaHQpICYmIChsZWZ0ID49IHRoaXMubGVmdCkgJiZcclxuXHRcdFx0KHRvcCA+PSB0aGlzLnRvcCkgJiYgKGJvdHRvbSA8PSB0aGlzLmJvdHRvbSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWFsdGUgdGhlIGRpc3RhbmNlIHRvIGEgcG9pbnQuIDAgaWYgdGhpcyByZWN0YW5nbGUgY29udGFpbnMgdGhlIHBvaW50LlxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKHB0KSB7XHJcblx0XHRpZiAodGhpcy5jb250YWlucyhwdCkpIHJldHVybiAwO1xyXG5cclxuXHRcdGlmIChwdC54IDwgdGhpcy5sZWZ0KSB7XHJcblx0XHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMudG9wKSk7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLmxlZnQgLSBwdC54O1xyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy5ib3R0b20pKTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC54IDw9IHRoaXMucmlnaHQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMudG9wIC0gcHQueTtcclxuXHRcdFx0cmV0dXJuIHB0LnkgLSB0aGlzLmJvdHRvbTtcclxuXHRcdH1cclxuXHRcdGlmIChwdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy50b3ApKTtcclxuXHRcdGlmIChwdC55IDw9IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRyZXR1cm4gcHQueCAtIHRoaXMucmlnaHQ7XHJcblx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHaXZlbiB0d28gcG9pbnRzLCB3ZSB3YW50IHRvIGRldGVjdCB3aGV0aGVyIHRoZSBsaW5lIGpvaW5pbmcgdGhlIHB0cyBpbnRlcnNlY3RcclxuXHQgKiB3aXRoIHRoZSByZWN0YW5nbGUgb3Igbm90LiBXZSBhc3N1bWUgb25seSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIGxpbmUgc2VnbWVudHMuXHJcblx0ICpcclxuXHQgKiBAcmV0dXJuIGludCB0aGUgc2lkZSBvZiB0aGUgaW50ZXJzZWN0aW9uOiAtMTogbm8gaW50ZXJzZWN0aW9uLCAwOiBsZWZ0LCAxOiB0b3AsIDI6IHJpZ2h0LCAzOiBib3R0b20sIDQ6IGNvbnRhaW5tZW50LlxyXG5cdCAqL1xyXG5cdGRldGVjdEludGVyc2VjdGlvbihwdDEsIHB0Mikge1xyXG5cdFx0bGV0IGhvcml6b250YWwgPSBwdDEueSA9PSBwdDIueTtcclxuXHRcdGxldCBjb250YWluczEgPSB0aGlzLmNvbnRhaW5zKHB0MSk7XHJcblx0XHRsZXQgY29udGFpbnMyID0gdGhpcy5jb250YWlucyhwdDIpO1xyXG5cdFx0aWYgKGNvbnRhaW5zMSAmJiBjb250YWluczIpIHJldHVybiA0O1xyXG5cdFx0aWYgKCFjb250YWluczEgJiYgIWNvbnRhaW5zMikge1xyXG5cdFx0XHRpZiAoaG9yaXpvbnRhbCAmJiAocHQxLnkgPj0gdGhpcy50b3AgJiYgcHQxLnkgPD0gdGhpcy5ib3R0b20pKSB7XHJcblx0XHRcdFx0aWYgKHB0MS54IDwgdGhpcy5sZWZ0ICYmIHB0Mi54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdGlmIChwdDEueCA+IHRoaXMucmlnaHQgJiYgcHQyLnggPCB0aGlzLmxlZnQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoIWhvcml6b250YWwgJiYgKHB0MS54ID49IHRoaXMubGVmdCAmJiBwdDEueCA8PSB0aGlzLnJpZ2h0KSkge1xyXG5cdFx0XHRcdGlmIChwdDEueSA8IHRoaXMudG9wICYmIHB0Mi55ID4gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRpZiAocHQxLnkgPiB0aGlzLmJvdHRvbSAmJiBwdDIueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDM7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBvdXRQdCA9IGNvbnRhaW5zMSA/IHB0MiA6IHB0MTtcclxuXHRcdGlmIChob3Jpem9udGFsKSB7XHJcblx0XHRcdGlmIChvdXRQdC54ID4gdGhpcy5yaWdodClcclxuXHRcdFx0XHRyZXR1cm4gMjtcclxuXHRcdFx0cmV0dXJuIDA7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAob3V0UHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRyZXR1cm4gMztcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdSZWN0YW5nbGU6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0bGV0IHggPSByZWN0Lng7XHJcblx0XHRsZXQgeSA9IHJlY3QueTtcclxuXHRcdGxldCBkeCA9IHB0LnggLSB4O1xyXG5cdFx0bGV0IGR5ID0gcHQueSAtIHk7XHJcblx0XHRsZXQgYWxwaGEgPSBNYXRoLmF0YW4yKGR5LCBkeCk7XHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCgwLCAwKTtcclxuXHRcdGxldCBwaSA9IE1hdGguUEk7XHJcblx0XHRsZXQgcGkyID0gTWF0aC5QSS8yO1xyXG5cdFx0bGV0IGJldGEgPSBwaTIgLSBhbHBoYTtcclxuXHRcdGxldCB0ID0gTWF0aC5hdGFuMihyZWN0LmhlaWdodCwgcmVjdC53aWR0aCk7XHJcblxyXG5cdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRwLnkgPSB5IC0gcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdHAueCA9IHggLSByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0cC55ID0geSArIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdHAueCA9IHggKyByZWN0LmhlaWdodCAqIE1hdGgudGFuKGJldGEpIC8gMjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5sZWZ0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC50b3A7XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdFx0cC54ID0gcmVjdC5yaWdodDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdFx0cC55ID0gcmVjdC5ib3R0b207XHJcblx0XHRcdFx0cC54ID0geDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSBib3VuZGluZyByZWN0YW5nbGUgdGhhdCBjb250YWlucyBwMSBhbmQgcDJcclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0Qm91bmRpbmdSZWN0YW5nbGUocHRzLCBtYXJnaW4pIHtcclxuXHRcdGlmICghcHRzIHx8IHB0cy5sZW5ndGggPT0gMCkgcmV0dXJuIG51bGw7XHJcblx0XHRtYXJnaW4gPSBtYXJnaW4gfHwgWzAsIDAsIDAsIDBdO1xyXG5cdFx0aWYgKCFfLmlzQXJyYXkobWFyZ2luKSlcclxuXHRcdFx0bWFyZ2luID0gW21hcmdpbiwgbWFyZ2luLCBtYXJnaW4sIG1hcmdpbl07XHJcblx0XHRsZXQgbWluID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRsZXQgbWF4ID0gW3B0c1swXS54LCBwdHNbMF0ueV07XHJcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsZXQgcCA9IHB0c1tpXTtcclxuXHRcdFx0aWYgKHAueCA8IG1pblswXSkge1xyXG5cdFx0XHRcdG1pblswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55IDwgbWluWzFdKSB7XHJcblx0XHRcdFx0bWluWzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnggPiBtYXhbMF0pIHtcclxuXHRcdFx0XHRtYXhbMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA+IG1heFsxXSkge1xyXG5cdFx0XHRcdG1heFsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0bWluWzBdID0gbWluWzBdIC0gbWFyZ2luWzBdO1xyXG5cdFx0bWluWzFdID0gbWluWzFdIC0gbWFyZ2luWzFdO1xyXG5cdFx0bWF4WzBdID0gbWF4WzBdICsgbWFyZ2luWzJdO1xyXG5cdFx0bWF4WzFdID0gbWF4WzFdICsgbWFyZ2luWzNdO1xyXG5cdFx0bGV0IHcgPSBNYXRoLmFicyhtYXhbMF0gLSBtaW5bMF0pO1xyXG5cdFx0bGV0IGggPSBNYXRoLmFicyhtYXhbMV0gLSBtaW5bMV0pO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWluWzBdICsgdy8yLCBtaW5bMV0gKyBoLzIsIHcsIGgpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ3JlYXRlIGEgdW5pb24gb2YgYWxsIHRoZSByZWN0YW5nbGVzLlxyXG5cdCAqIEBwYXJhbSByZWN0c1xyXG5cdCAqL1xyXG5cdHN0YXRpYyB1bmlvbihyZWN0cykge1xyXG5cdFx0bGV0IG1pbnggPSBudWxsLCBtaW55ID0gbnVsbCwgbWF4eCA9IC1JbmZpbml0eSwgbWF4eSA9IC1JbmZpbml0eTtcclxuXHRcdF8uZWFjaChyZWN0cywgZnVuY3Rpb24gKHJlY3QpIHtcclxuXHRcdFx0bWlueCA9IG1pbnggfHwgcmVjdC54O1xyXG5cdFx0XHRtaW55ID0gbWlueSB8fCByZWN0Lnk7XHJcblx0XHRcdG1pbnggPSBNYXRoLm1pbihtaW54LCByZWN0LngpO1xyXG5cdFx0XHRtaW55ID0gTWF0aC5taW4obWlueSwgcmVjdC55KTtcclxuXHRcdFx0bWF4eCA9IE1hdGgubWF4KG1heHgsIHJlY3QucmlnaHQoKSk7XHJcblx0XHRcdG1heHkgPSBNYXRoLm1heChtYXh5LCByZWN0LmJvdHRvbSgpKTtcclxuXHRcdH0pO1xyXG5cdFx0bWlueCA9IG1pbnggfHwgMDtcclxuXHRcdG1pbnkgPSBtaW55IHx8IDA7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW54LCBtaW55LCBtYXh4IC0gbWlueCwgbWF4eSAtIG1pbnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgZGlyZWN0aW9uIHRoZSBwb2ludCA8aT5wPC9pPiBpcyBpbiByZWxhdGlvbiB0byB0aGUgZ2l2ZW4gcmVjdGFuZ2xlLlxyXG5cdCAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgV0VTVCAoLTEsMCksIEVBU1QgKDEsMCksIE5PUlRIICgwLC0xKSBhbmQgU09VVEggKDAsMSkgaWYgb3J0aG9nb25hbCBpcyB0cnVlLCBvdGhlcndpc2UgcmV0dXJuXHJcblx0ICogdGhlIGRpcmVjdGlvbiBjb25uZWN0aW9uIHRoZSBjZW50ZXIgb2YgciBhbmQgcC5cclxuXHQgKiBAcGFyYW0gclxyXG5cdCAqIEBwYXJhbSBwXHJcblx0ICogQHBhcmFtIG9ydGhvZ29uYWxcclxuXHQgKiBAcmV0dXJucyB7UG9pbnR8Kn1cclxuXHQgKi9cclxuXHRzdGF0aWMgZ2V0RGlyZWN0aW9uKHIsIHAsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0aWYgKCFvcnRob2dvbmFsKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHIueCwgci55KS5nZXREaXJlY3Rpb24obmV3IFBvaW50KHAueCwgcC55KSk7XHJcblxyXG5cdFx0bGV0IGksIGRpc3RhbmNlID0gTWF0aC5hYnMoci5sZWZ0IC0gcC54KSwgZGlyZWN0aW9uID0gUG9pbnQuVztcclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci50b3AgLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5OO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLmJvdHRvbSAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LlM7XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIucmlnaHQgLSBwLngpO1xyXG5cdFx0aWYgKGkgPCBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5FO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBkaXJlY3Rpb247XHJcblx0fVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanMiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmxldCByZWdpc3RyeSA9IHt9O1xuXG5jbGFzcyBTaGFwZSB7XG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xuXHRcdHRoaXMueCA9IHg7XG5cdFx0dGhpcy55ID0geTtcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG5cdFx0Xy5kZWZhdWx0cyh0aGlzLCBjb25maWcsIHt4OiAwLCB5OiAwLCB3aWR0aDogMCwgaGVpZ2h0OiAwfSk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxuXHQgKi9cblx0Z2V0IHRvcCgpIHsgcmV0dXJuIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzI7IH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgeS1jb29yZGluYXRlIG9mIHRoZSBib3R0b20gb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHgtY29vcmQgb2YgbGVmdCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXG5cdCAqL1xuXHRnZXQgcmlnaHQoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoLzI7IH1cblxuXHRnZXQgY2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxuXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cblxuXHRjb250YWlucyhlbCkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHQvKipcblx0ICogVGhpcyB3aWxsIGdlbmVyYXRlIG4gcG9ydHMgb24gdGhlIHNoYXBlLlxuXHQgKi9cblx0Z2V0UmVndWxhclBvaW50cyhuKSB7cmV0dXJuIG51bGw7fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIGJvdW5kYXJ5IG9mIHRoaXMgc2hhcGUgYW5kIHRoZSBsaW5lIGNvbm5lY3RpbmcgKHgseSkgd2l0aCB0aGUgcmVmUHQuXG5cdCAqIEBwYXJhbSByZWZQdFxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxuXHQgKiBAcmV0dXJucyB7Knx7cG9pbnQsIGRpcmVjdGlvbn19XG5cdCAqL1xuXHRnZXRQZXJpbWV0ZXIocmVmUHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFBlcmltZXRlcih0aGlzLCByZWZQdCwgb3J0aG9nb25hbCk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodmlldy5nZXRUZW1wbGF0ZSh0aGlzLm5hbWUsIHRoaXMpKTtcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcyk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xuXHRcdHJldHVybiByZWdpc3RyeVtuYW1lXTtcblx0fVxuXG5cdHN0YXRpYyBhZGRTaGFwZShuYW1lLCBjKSB7XG5cdFx0cmVnaXN0cnlbbmFtZV0gPSBjO1xuXHR9XG5cblx0c3RhdGljIHJlbW92ZVNoYXBlKG5hbWUpIHtcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cblx0XHRpZiAoSWR4ID4gMClcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XG5cblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxuXHRcdFx0cmV0dXJuIDExO1xuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pKVxuXHRcdFx0cmV0dXJuIFwiRWRnZVwiO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSkoKSxcblxuXHRpc0ZpcmVGb3ggOiAoZnVuY3Rpb24oKXtcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblx0fSkoKSxcblxuXHRpc0Nocm9tZTogKGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlJykgPj0gMCkgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciByYXcgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xuXHRcdHJldHVybiByYXcgPyBwYXJzZUludChyYXdbMl0sIDEwKSA6IGZhbHNlO1xuXHR9KSgpLFxuXG5cdGlzTWFjOiAoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xuXHR9KSgpLFxuXG5cdGlzV2luZG93czogKGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcblx0XHRyZXR1cm4gbmF2aWdhdG9yLmFwcFZlcnNpb24uaW5kZXhPZihcIldpbmRvd3NcIikgPj0gMDtcblx0fSkoKSxcblxuXHRpc0xpbnV4OiAoZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTGludXhcIikgPj0gMDtcblx0fSkoKSxcblxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcblx0XHRsZXQgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xuXHRcdGlmIChodG1sKVxuXHRcdFx0ZWwuaW5uZXJIVE1MID0gaHRtbDtcblx0XHRyZXR1cm4gZWw7XG5cdH0sXG5cblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcblx0XHRyZXR1cm4gdGVtcC5jaGlsZE5vZGVzO1xuXHR9LFxuXG5cdHNldEVsZW1lbnQ6IGZ1bmN0aW9uIChlbCwgYXR0cmlicywgc3R5bGVzKSB7XG5cdFx0aWYgKGF0dHJpYnMpIHtcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHQgICAgZWwuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuXHRcdFx0IH0pO1xuXHRcdH1cblx0XHRpZiAoc3R5bGVzKSB7XG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fSxcblxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcblx0fSxcblxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHR3aGlsZSAobm9kZSA9IG5vZGUucGFyZW50Tm9kZSlcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcblxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXG5cdCAqIEBwYXJhbSBlbCB0aGUgZWxlbWVudFxuXHQgKiBAcGFyYW0gY29udGV4dFxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3BdO1xuXHR9LFxuXG5cdGdldENlbnRlclBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XG5cdH0sXG5cblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xuXHRcdGlmICh5KSBlbC5zdHlsZS50b3AgPSB5ICsgJ3B4Jztcblx0fSxcblxuXHRnZXRTaXplOiBmdW5jdGlvbihlbCkge1xuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xuXHRcdHJldHVybiBbdywgaF07XG5cdH0sXG5cblx0cmVzaXplOiBmdW5jdGlvbihlbCwgdywgaCkge1xuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xuXHR9LFxuXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubGlzdCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QgPSBbXTtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcblxuXHRcdHZhciBsaXN0ID0gdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3Q7XG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aW1nID0gbmV3IEltYWdlKCk7XG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcblx0XHRcdFx0aWYgKGluZGV4ICE9PSAtMSkge1xuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcblx0XHRcdFx0XHQvLyBmb3IgbWVtb3J5IGNvbnN1bXB0aW9uIHJlYXNvbnNcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcblx0XHRcdGltZy5uYW1lID0gYXJyYXlbaV07XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXG5cdCAqIEBwYXJhbSBzcmNcblx0ICovXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XG5cdFx0aWYgKHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHtcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9LFxuXG5cdGRvd25sb2FkRmlsZTogZnVuY3Rpb24obmFtZSwgZGF0YSkge1xuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xuXHRcdGxldCBtaW1lID0gZGF0YS5tYXRjaCgvXmRhdGE6KFteOyxdKikvKVsxXTtcblx0XHRpZiAobmFtZS5pbmRleE9mKCcuJykgPCAwKSB7XG5cdFx0XHRpZiAoIW1pbWUpIG1pbWUgPSAndGV4dC9wbGFpbic7XG5cdFx0XHRpZiAobWltZSA9PSAndGV4dC9wbGFpbicpXG5cdFx0XHRcdG5hbWUgPSBuYW1lICsgJy50eHQnO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGxldCB0eXBlID0gbWltZS5zcGxpdCgnLycpWzFdO1xuXHRcdFx0XHRpZiAodHlwZS5pbmRleE9mKCcrJykgPiAwKSB0eXBlID0gdHlwZS5zcGxpdCgnKycpWzBdO1xuXHRcdFx0XHRuYW1lID0gbmFtZSArICcuJyArIHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICh0aGlzLmlzSUUpIHtcblx0XHRcdGxldCBlbmNvZGVkID0gZGF0YS5pbmRleE9mKCc7YmFzZTY0JykgPj0gMDtcblx0XHRcdGlmIChlbmNvZGVkKVxuXHRcdFx0XHRkYXRhID0gYXRvYihkYXRhLnJlcGxhY2UoJ2RhdGE6JyArIG1pbWUgKyAnO2Jhc2U2NCwnLCAnJykpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkYXRhID0gZGVjb2RlVVJJKGRhdGEucmVwbGFjZSgnZGF0YTonICsgbWltZSArICcsJywgJycpKTtcblx0XHRcdGRhdGEgPSB0aGlzLkdldEJsb2IoZGF0YSwgbWltZSk7XG5cdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihkYXRhLCBuYW1lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bGV0IGxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogZGF0YSwgZG93bmxvYWQ6IG5hbWV9LCB7ZGlzcGxheTogXCJub25lXCJ9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0XHRsaW5rLmNsaWNrKCk7XG5cdFx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IGI1NCB0byBibG9iLiBJRSBvbmx5XG5cdCAqL1xuXHRHZXRCbG9iOiBmdW5jdGlvbiAoZGF0YSwgY29udGVudFR5cGUsIHNsaWNlU2l6ZSkge1xuXHRcdGNvbnRlbnRUeXBlID0gY29udGVudFR5cGUgfHwgJyc7XG5cdFx0c2xpY2VTaXplID0gc2xpY2VTaXplIHx8IDUxMjtcblxuXHRcdHZhciBieXRlQXJyYXlzID0gW107XG5cblx0XHRmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBkYXRhLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xuXHRcdFx0dmFyIHNsaWNlID0gZGF0YS5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XG5cblx0XHRcdHZhciBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xuXHRcdFx0Ynl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcblx0fSxcblxuXHRvcGVuSW1hZ2U6IGZ1bmN0aW9uKG5hbWUsIGltYWdlKSB7XG5cdFx0dmFyIG15V2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b29sYmFyPXllcywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHdpZHRoPTUwMCwgaGVpZ2h0PTUwMFwiKTtcblx0XHR2YXIgbXlEb2N1bWVudCA9IG15V2luZG93LmRvY3VtZW50O1xuXHRcdHZhciBpbWcgPSBteURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGltZywge3NyYzogaW1hZ2UsIG5hbWU6IG5hbWV9KTtcblx0XHRteURvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvRG9tVXRpbHMuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5cbi8qKlxuICogQSBzdHJpbmcgYnVmZmVyIGZvciBmYXN0IHN0cmluZyBtYW5pcHVsYXRpb25cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcblx0Y29uc3RydWN0b3Ioc3RyKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0XHRpZiAoc3RyKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHIpO1xuXHR9XG5cblx0YXBwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRwcmVwZW5kKHN0dWZmKSB7XG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Y2xlYXIoKSB7XG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcblx0fVxuXG5cdHJlbW92ZUxhc3QoKSB7XG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHR0b1N0cmluZyhzZXApIHtcblx0XHRpZiAoIXNlcCkgc2VwID0gJyc7XG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xuXHRjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XG5cdFx0dGhpcy5zdGFydCA9IHN0YXJ0O1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgbGluZVxuXHQgKi9cblx0bGVuZ3RoKCkge1xuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlKHRoaXMuZW5kKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIG9mIHRoaXMgbGluZSB0byB0aGUgcG9pbnQuXG5cdCAqL1xuXHRkaXN0YW5jZShwdCkge1xuXHRcdHZhciB4ID0gdGhpcy5zdGFydC5kaXN0YW5jZShwdCk7XG5cdFx0aWYgKHggPT0gMCkgcmV0dXJuIDA7XG5cblx0XHR2YXIgbCA9IHRoaXMubGVuZ3RoKCk7XG5cdFx0dmFyIGNvc2EgPSBuZXcgUG9pbnQoKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpIC8gbCwgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpIC8gbCkuZG90UHJvZHVjdChcblx0XHRcdG5ldyBQb2ludChwdC54IC8geCwgcHQueSAvIHgpKTtcblxuXHRcdHJldHVybiB4ICogTWF0aC5zcXJ0KDEgLSBjb3NhICogY29zYSk7XG5cdH1cblxuXHQvKipcblx0ICogRnVuY3Rpb246IGludGVyc2VjdGlvblxuXHQgKlxuXHQgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGxpbmVzIGFzIGFuIDxteFBvaW50Pi5cblx0ICpcblx0ICogUGFyYW1ldGVyczpcblx0ICpcblx0ICogeDAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgxIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHkxIC0gWS1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqIHgyIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHkyIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXG5cdCAqIHgzIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MyAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICovXG5cdHN0YXRpYyBpbnRlcnNlY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XG5cdFx0dmFyIGRlbm9tID0gKCh5MyAtIHkyKSAqICh4MSAtIHgwKSkgLSAoKHgzIC0geDIpICogKHkxIC0geTApKTtcblx0XHR2YXIgbnVtZV9hID0gKCh4MyAtIHgyKSAqICh5MCAtIHkyKSkgLSAoKHkzIC0geTIpICogKHgwIC0geDIpKTtcblx0XHR2YXIgbnVtZV9iID0gKCh4MSAtIHgwKSAqICh5MCAtIHkyKSkgLSAoKHkxIC0geTApICogKHgwIC0geDIpKTtcblxuXHRcdHZhciB1YSA9IG51bWVfYSAvIGRlbm9tO1xuXHRcdHZhciB1YiA9IG51bWVfYiAvIGRlbm9tO1xuXG5cdFx0aWYgKHVhID49IDAuMCAmJiB1YSA8PSAxLjAgJiYgdWIgPj0gMC4wICYmIHViIDw9IDEuMCkge1xuXHRcdFx0Ly8gR2V0IHRoZSBpbnRlcnNlY3Rpb24gcG9pbnRcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25YID0geDAgKyB1YSAqICh4MSAtIHgwKTtcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25ZID0geTAgKyB1YSAqICh5MSAtIHkwKTtcblxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChpbnRlcnNlY3Rpb25YLCBpbnRlcnNlY3Rpb25ZKTtcblx0XHR9XG5cblx0XHQvLyBObyBpbnRlcnNlY3Rpb25cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnTGluZTp7c3RhcnQ9JyArIHRoaXMuc3RhcnQgKyAnO2VuZD0nICsgdGhpcy5lbmQgKyAnfSc7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG5cblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0bGV0IGEgPSByZWN0LndpZHRoIC8gMjtcblx0XHRsZXQgYiA9IHJlY3QuaGVpZ2h0IC8gMjtcblx0XHRsZXQgY3ggPSByZWN0Lng7XG5cdFx0bGV0IGN5ID0gcmVjdC55O1xuXHRcdGxldCBweCA9IHB0Lng7XG5cdFx0bGV0IHB5ID0gcHQueTtcblxuXHRcdC8vIENhbGN1bGF0ZXMgc3RyYWlnaHQgbGluZSBlcXVhdGlvbiB0aHJvdWdoXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcblx0XHRsZXQgZHggPSBwYXJzZUludChweCAtIGN4KTtcblx0XHRsZXQgZHkgPSBwYXJzZUludChweSAtIGN5KTtcblxuXHRcdGxldCB0eCwgdHk7XG5cblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XG5cdFx0fSBlbHNlIGlmIChkeCA9PSAwICYmIGR5ID09IDApIHtcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcblx0XHR9XG5cblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxuXHRcdGxldCBkID0gZHkgLyBkeDtcblx0XHRsZXQgaCA9IGN5IC0gZCAqIGN4O1xuXHRcdGxldCBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xuXHRcdGxldCBmID0gLTIgKiBjeCAqIGU7XG5cdFx0bGV0IGcgPSBhICogYSAqIGQgKiBkICogY3ggKiBjeCArIGIgKiBiICogY3ggKiBjeCAtIGEgKiBhICogYiAqIGI7XG5cdFx0bGV0IGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XG5cblx0XHQvLyBUd28gc29sdXRpb25zIChwZXJpbWV0ZXIgcG9pbnRzKVxuXHRcdGxldCB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xuXHRcdGxldCB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xuXHRcdGxldCB5b3V0MSA9IGQgKiB4b3V0MSArIGg7XG5cdFx0bGV0IHlvdXQyID0gZCAqIHhvdXQyICsgaDtcblx0XHRsZXQgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xuXHRcdGxldCBkaXN0MiA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDIgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQyIC0gcHkpLCAyKSk7XG5cblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXG5cdFx0bGV0IHhvdXQgPSAwO1xuXHRcdGxldCB5b3V0ID0gMDtcblxuXHRcdGlmIChkaXN0MSA8IGRpc3QyKSB7XG5cdFx0XHR4b3V0ID0geG91dDE7XG5cdFx0XHR5b3V0ID0geW91dDE7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHhvdXQgPSB4b3V0Mjtcblx0XHRcdHlvdXQgPSB5b3V0Mjtcblx0XHR9XG5cblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcblx0XHRpZiAob3J0aG9nb25hbCkge1xuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCAtIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4ICsgYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSAtIGIpLCBkaXJlY3Rpb246IGRpcn07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5ICsgYiksIGRpcmVjdGlvbjogZGlyfTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9MaW5lXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJob21idXMgZXh0ZW5kcyBTaGFwZSB7XG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiAnUmhvbWJ1czp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xuXHR9XG5cblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XG5cdFx0bGV0IHcgPSByZWN0LndpZHRoO1xuXHRcdGxldCBoID0gcmVjdC5oZWlnaHQ7XG5cdFx0bGV0IGN4ID0gcmVjdC54O1xuXHRcdGxldCBjeSA9IHJlY3QueTtcblx0XHRsZXQgeCA9IGN4IC0gdy8yO1xuXHRcdGxldCB5ID0gY3kgLSBoLzI7XG5cblx0XHRsZXQgcHggPSBwdC54O1xuXHRcdGxldCBweSA9IHB0Lnk7XG5cblx0XHQvLyBTcGVjaWFsIGNhc2UgZm9yIGludGVyc2VjdGluZyB0aGUgZGlhbW9uZCdzIGNvcm5lcnNcblx0XHRpZiAoY3ggPT09IHB4KSB7XG5cdFx0XHRpZiAoY3kgPiBweSkge1xuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIHkpLCBkaXJlY3Rpb246IFBvaW50LlN9O1xuXHRcdFx0XHQvLyB0b3Bcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgeSArIGgpLCBkaXJlY3Rpb246IFBvaW50Lk59O1xuXHRcdFx0XHQvLyBib3R0b21cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKGN5ID09PSBweSkge1xuXHRcdFx0aWYgKGN4ID4gcHgpIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KHgsIGN5KSwgZGlyZWN0aW9uOiBQb2ludC5FfTtcblx0XHRcdFx0Ly8gbGVmdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KHggKyB3LCBjeSksIGRpcmVjdGlvbjogUG9pbnQuV307XG5cdFx0XHRcdC8vIHJpZ2h0XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHR4ID0gY3g7XG5cdFx0bGV0IHR5ID0gY3k7XG5cblx0XHRpZiAob3J0aG9nb25hbCkge1xuXHRcdFx0aWYgKHB4ID49IHggJiYgcHggPD0geCArIHcpIHtcblx0XHRcdFx0dHggPSBweDtcblx0XHRcdH0gZWxzZSBpZiAocHkgPj0geSAmJiBweSA8PSB5ICsgaCkge1xuXHRcdFx0XHR0eSA9IHB5O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGxldCBwLCBkaXI7XG5cdFx0Ly8gVE9ETyBkaXJlY3Rpb24gY2FsY3VsYXRpb24gaXMgbm90IHF1aXRlIHJpZ2h0LlxuXHRcdC8vIEluIHdoaWNoIHF1YWRyYW50IHdpbGwgdGhlIGludGVyc2VjdGlvbiBiZT9cblx0XHQvLyBzZXQgdGhlIHNsb3BlIGFuZCBvZmZzZXQgb2YgdGhlIGJvcmRlciBsaW5lIGFjY29yZGluZ2x5XG5cdFx0aWYgKHB4IDwgY3gpIHtcblx0XHRcdGlmIChweSA8IGN5KSB7XG5cdFx0XHRcdHAgPSBMaW5lLmludGVyc2VjdGlvbihweCwgcHksIHR4LCB0eSwgY3gsIHksIHgsIGN5KTtcblx0XHRcdFx0ZGlyID0gUG9pbnQuUztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHAgPSBMaW5lLmludGVyc2VjdGlvbihweCwgcHksIHR4LCB0eSwgY3gsIHkgKyBoLCB4LCBjeSk7XG5cdFx0XHRcdGRpciA9IFBvaW50Lk47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIGlmIChweSA8IGN5KSB7XG5cdFx0XHRwID0gTGluZS5pbnRlcnNlY3Rpb24ocHgsIHB5LCB0eCwgdHksIGN4LCB5LCB4ICsgdywgY3kpO1xuXHRcdFx0ZGlyID0gUG9pbnQuRTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cCA9IExpbmUuaW50ZXJzZWN0aW9uKHB4LCBweSwgdHgsIHR5LCBjeCwgeSArIGgsIHggKyB3LCBjeSk7XG5cdFx0XHRkaXIgPSBQb2ludC5XO1xuXHRcdH1cblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9nZW9tZXRyeS9SaG9tYnVzLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdHR5cGU6IFwiZGlyZWN0XCIsXG5cdHNob3dHYXVnZTogdHJ1ZSxcblx0b3J0aG9nb25hbDogZmFsc2Vcbn07XG5cbmxldCBkZWZhdWx0R2VvbWV0cnkgPSB7XG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDAsXG5cdGFuY2hvclg6IDAsXG5cdGFuY2hvclk6IDAsXG5cdG9mZnNldFg6IDAsXG5cdG9mZnNldFk6IDBcbn07XG5cbmxldCBsaW5rVHlwZXMgPSB7fTtcblxuY2xhc3MgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHR0aGlzLnN0YXJ0ID0gdGVybWluYWxWaXN1YWxbMF0ucG9pbnQ7XG5cdFx0dGhpcy5lbmQgPSB0ZXJtaW5hbFZpc3VhbFsxXS5wb2ludDtcblx0XHR0aGlzLnN0YXJ0Tm9ybWFsID0gdGVybWluYWxWaXN1YWxbMF0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuZW5kTm9ybWFsID0gdGVybWluYWxWaXN1YWxbMV0uZGlyZWN0aW9uO1xuXHRcdHRoaXMuc3RhcnRNYXJrZXIgPSBzdGFydE1hcmtlcjtcblx0XHR0aGlzLmVuZE1hcmtlciA9IGVuZE1hcmtlcjtcblx0XHRfLmFzc2lnbih0aGlzLCBzaGFwZUNvbmZpZyk7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsodGhpcyk7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgY29udHJvbFB0cygpIHsgcmV0dXJuIG51bGw7IH1cblx0Z2V0IGxlbmd0aCgpIHtcblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGksIGwgPSAwO1xuXHRcdGZvciAoaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKVxuXHRcdFx0bCArPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdHJldHVybiBsO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgcG9zaXRpb24gd2hlcmUgdG8gcHV0IGRlY29yYXRvcnMgb3IgbGFiZWwuLlxuXHQgKlxuXHQgKiBAcGFyYW0gZ2VvbWV0cnk6IGRlZmluZXMgaG93IGZhciBhbG9uZyB0aGUgZWRnZSBzaG91bGQgdGhlIHBvaW50IGJlIHBsYWNlZC5cblx0ICogQHJldHVybiAqW10gdGhlIHJlbGF0aXZlIHBvc2l0aW9uLlxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApIDw9IDEpIHAgKj0gbDtcblx0XHRpZiAocCA8IDApIHAgPSBsICsgcDtcblx0XHRpZiAocCA+IGwpIHAgPSBsO1xuXG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzLCBkLCBwb2ludCwgZGlyO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xuXHRcdFx0ZCA9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRpZiAocCA8PSBkKSB7XG5cdFx0XHRcdC8vIHdlJ3ZlIGxvY2F0ZWQgdGhlIGxpbmUgc2VnbWVudC5cblx0XHRcdFx0cG9pbnQgPSBwb2ludHNbaV0uY2xvbmUoKTtcblx0XHRcdFx0ZGlyID0gcG9pbnQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKTtcblx0XHRcdFx0cG9pbnQudHJhbnNsYXRlKGRpci5nZXRTY2FsZWQocCkpO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdHAgLT0gZDtcblx0XHR9XG5cblx0XHQvLyByZXR1cm4gdGhlIGxhc3QgcG9pbnQuXG5cdFx0aWYgKCFwb2ludClcblx0XHRcdHBvaW50ID0gcG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXTtcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmsnO1xuXHR9XG5cblx0c3RhdGljIGdldExpbmsodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAoc2hhcGVDb25maWcsIGRlZmF1bHRDb25maWcpO1xuXHRcdGxldCBsaW5rQ2xhc3MgPSBsaW5rVHlwZXNbc2hhcGVDb25maWcudHlwZV07XG5cdFx0aWYgKGxpbmtDbGFzcylcblx0XHRcdHJldHVybiBuZXcgbGlua0NsYXNzKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdFx0Y29uc29sZS5sb2coJ2xpbmsgdHlwZSBub3Qgc3VwcG9ydGVkOiAnICsgc2hhcGVDb25maWcudHlwZSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cbn1cblxuY2xhc3MgRGlyZWN0TGluayBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xuXHR9XG59XG5cbmNsYXNzIEJlemllckxpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxuXG5cdGdldCBjb250cm9sUHRzKCkge1xuXHRcdGxldCBzID0gdGhpcy5wb2ludHNbMF0sIGUgPSB0aGlzLnBvaW50c1sxXTtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0cHRzWzBdID0gbnVsbDtcblx0XHRwdHNbMV0gPSBbXTtcblx0XHRpZiAodGhpcy5zdGFydE5vcm1hbC54ID09PSAwKSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT09IDApIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludChlLngsIChzLnkgKyBlLnkpLzIpO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBlLnkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSkge1xuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcblx0XHRnZW9tZXRyeSA9IF8uZGVmYXVsdHMoZ2VvbWV0cnksIGRlZmF1bHRHZW9tZXRyeSk7XG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XG5cdFx0aWYgKE1hdGguYWJzKHApID4gMSkgcCAvPSBsO1xuXHRcdGlmIChwIDwgMCkgcCsrO1xuXHRcdGlmIChwID4gMSkgcC0tO1xuXG5cdFx0bGV0IHB0cyA9IHRoaXMucG9pbnRzO1xuXHRcdGxldCBjdHJscHRzID0gdGhpcy5jb250cm9sUHRzO1xuXHRcdGxldCBwMSA9IHB0c1swXTtcblx0XHRsZXQgcDIgPSBjdHJscHRzWzFdWzBdO1xuXHRcdGxldCBwMyA9IGN0cmxwdHNbMV1bMV07XG5cdFx0bGV0IHA0ID0gcHRzWzFdO1xuXG5cdFx0bGV0IHBvaW50ID0gWygxLXApKigxLXApKigxLXApICogcDEueCArIDMqcCooMS1wKSooMS1wKSAqIHAyLnggKyAzKnAqcCooMS1wKSAqIHAzLnggKyBwKnAqcCAqIHA0LngsICgxLXApKigxLXApKigxLXApICogcDEueSArIDMqcCooMS1wKSooMS1wKSAqIHAyLnkgKyAzKnAqcCooMS1wKSAqIHAzLnkgKyBwKnAqcCAqIHA0LnldO1xuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcblx0fVxufVxuXG5jbGFzcyBFbnRpdHlSZWxhdGlvbnMgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRsZXQgc291cmNlID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgdHJ1ZSk7XG5cdFx0bGV0IHRhcmdldCA9IFBvcnQuZ2V0Qm91bmRzKGVkZ2UsIGZhbHNlKTtcblx0XHRsZXQgaXNTb3VyY2VMZWZ0ID0gdGFyZ2V0LnJpZ2h0KCkgPCBzb3VyY2UueDtcblx0XHRsZXQgaXNUYXJnZXRMZWZ0ID0gc291cmNlLnJpZ2h0KCkgPCB0YXJnZXQueDtcblx0XHRsZXQgcmVzdWx0ID0gW107XG5cblx0XHRsZXQgeDAgPSAoaXNTb3VyY2VMZWZ0KSA/IHNvdXJjZS54IDogc291cmNlLnggKyBzb3VyY2Uud2lkdGg7XG5cdFx0bGV0IHkwID0gc291cmNlLmdldENlbnRlclkoKTtcblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeDAsIHkwKSk7XG5cblx0XHRsZXQgeGUgPSAoaXNUYXJnZXRMZWZ0KSA/IHRhcmdldC54IDogdGFyZ2V0LnggKyB0YXJnZXQud2lkdGg7XG5cdFx0bGV0IHllID0gdGFyZ2V0LmdldENlbnRlclkoKTtcblxuXHRcdGxldCBzZWcgPSB0aGlzLnNlZ21lbnQ7XG5cblx0XHRsZXQgZHggPSAoaXNTb3VyY2VMZWZ0KSA/IC1zZWcgOiBzZWc7XG5cdFx0bGV0IGRlcCA9IG5ldyBQb2ludCh4MCArIGR4LCB5MCk7XG5cblx0XHRkeCA9IChpc1RhcmdldExlZnQpID8gLXNlZyA6IHNlZztcblx0XHRsZXQgYXJyID0gbmV3IFBvaW50KHhlICsgZHgsIHllKTtcblxuXHRcdC8vIEFkZHMgaW50ZXJtZWRpYXRlIHBvaW50cyBpZiBib3RoIGdvIG91dCBvbiBzYW1lIHNpZGVcblx0XHRpZiAoaXNTb3VyY2VMZWZ0ID09IGlzVGFyZ2V0TGVmdClcblx0XHR7XG5cdFx0XHRsZXQgeCA9IChpc1NvdXJjZUxlZnQpID9cblx0XHRcdE1hdGgubWluKHgwLCB4ZSktc2VnIDpcblx0XHRcdE1hdGgubWF4KHgwLCB4ZSkrc2VnO1xuXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeTApKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5ZSkpO1xuXHRcdH1cblx0XHRlbHNlIGlmICgoZGVwLnggPCBhcnIueCkgPT0gaXNTb3VyY2VMZWZ0KVxuXHRcdHtcblx0XHRcdGxldCBtaWRZID0geTAgKyAoeWUgLSB5MCkgLyAyO1xuXG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGRlcC54LCBtaWRZKSk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoYXJyLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XG5cdFx0fVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeGUsIHllKSk7XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxufVxuXG5jbGFzcyBNYW5oYXR0YW4gZXh0ZW5kcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKSB7XG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzKHNoYXBlQ29uZmlnLCB7XG5cdFx0XHRNSU5fQlVGRkVSOiAxMCxcblx0XHRcdGF1dG9Sb3V0ZTogZmFsc2UsXG5cdFx0XHRyYW5kb21Ob2lzZTogMCxcblx0XHRcdHN0ZXA6IDEsXG5cdFx0XHRtYXhDaGFubmVsV2lkdGg6IDEwMFxuXHRcdH0pO1xuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XG5cdH1cblxuXHRnZXQgcG9pbnRzKCkge1xuXHRcdGxldCBwb3MgPSBNYW5oYXR0YW4ucm91dGUodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xuXHRcdFx0bGV0IGJveGVzID0gW10sIG5vZGUsIHN0YXJ0Qm94LCBlbmRCb3g7XG5cdFx0XHRsZXQgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xuXHRcdFx0bGV0IGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XG5cdFx0XHRcdC8vIERvIG5vdCBpbmNsdWRlIHNvdXJjZSBvciB0YXJnZXQgYW5jZXN0b3JzIGluIHJvdXRpbmcuXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcblx0XHRcdFx0c3RhcnRCb3ggPSBpbmRleDtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xuXHRcdFx0XHRib3hlcy5wdXNoKG5vZGUuZ2V0Qm91bmRzKGRvY3VtZW50KSk7XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYm94ZXMubGVuZ3RoID4gMSlcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdH1cblx0XHRNYW5oYXR0YW4uX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRpZiAodGhpcy5yYW5kb21Ob2lzZSAmJiBwb3MubGVuZ3RoID4gMykge1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb3MubGVuZ3RoIC0gMjsgaSsrKSB7XG5cdFx0XHRcdGxldCByYW5nZSA9IHRoaXMucmFuZG9tTm9pc2UgLyB0aGlzLnN0ZXA7XG5cdFx0XHRcdGxldCByYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSAqIDIgLSByYW5nZSArIDEpICogdGhpcy5zdGVwO1xuXG5cdFx0XHRcdGxldCBub2lzZTtcblx0XHRcdFx0aWYgKHRoaXMucmFuZG9tTm9pc2UgJiYgcG9zLmxlbmd0aCA9PSA0KSB7XG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCAhPSAwICYmIHRoaXMuc3RhcnROb3JtYWwueCAhPSB0aGlzLmVuZE5vcm1hbC54KSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5yYW5kb21Ob2lzZSA8PSBNYXRoLmFicyhwb3NbMV0ueCAtIHBvc1swXS54IC0gdGhpcy5zdGFydE5vcm1hbC54ICogdGhpcy5NSU5fQlVGRkVSKSkge1xuXHRcdFx0XHRcdFx0XHRub2lzZSA9IHRoaXMucmFuZG9tTm9pc2U7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRub2lzZSA9IE1hdGguYWJzKHBvc1sxXS54IC0gcG9zWzBdLnggLSB0aGlzLnN0YXJ0Tm9ybWFsLnggKiB0aGlzLk1JTl9CVUZGRVIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5zdGFydE5vcm1hbC55ICE9IDAgJiYgdGhpcy5zdGFydE5vcm1hbC55ICE9IHRoaXMuZW5kTm9ybWFsLnkpIHtcblx0XHRcdFx0XHRcdGlmICh0aGlzLnJhbmRvbU5vaXNlIDw9IE1hdGguYWJzKHBvc1sxXS55IC0gcG9zWzBdLnkgLSB0aGlzLnN0YXJ0Tm9ybWFsLnkgKiB0aGlzLk1JTl9CVUZGRVIpKSB7XG5cdFx0XHRcdFx0XHRcdG5vaXNlID0gdGhpcy5yYW5kb21Ob2lzZTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdG5vaXNlID0gTWF0aC5hYnMocG9zWzFdLnkgLSBwb3NbMF0ueSAtIHRoaXMuc3RhcnROb3JtYWwueSAqIHRoaXMuTUlOX0JVRkZFUik7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdG5vaXNlID0gdGhpcy5yYW5kb21Ob2lzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IHJhbmdlID0gbm9pc2UgLyB0aGlzLnN0ZXA7XG5cdFx0XHRcdFx0bGV0IHJhbmRvbU51bWJlcjtcblx0XHRcdFx0XHRpZiAodGhpcy5zdGFydE5vcm1hbC54ICE9IHRoaXMuZW5kTm9ybWFsLnggfHwgdGhpcy5zdGFydE5vcm1hbC55ICE9IHRoaXMuZW5kTm9ybWFsLnkpIHtcblx0XHRcdFx0XHRcdHJhbmRvbU51bWJlciA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlICogMiAtIHJhbmdlICsgMSkgKiB0aGlzLnN0ZXA7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHJhbmRvbU51bWJlciA9IE1hdGguc2lnbih0aGlzLnN0YXJ0Tm9ybWFsLnggIT0gMCA/IHRoaXMuc3RhcnROb3JtYWwueCA6IHRoaXMuc3RhcnROb3JtYWwueSkgKiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSArIDEpICogdGhpcy5zdGVwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwb3MsIDEsIHJhbmRvbU51bWJlciwgMSwgMSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRoaXMucmFuZG9tTm9pc2UgJiYgcG9zLmxlbmd0aCA+IDQpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHBvcy5sZW5ndGggLSAyOyBpKyspIHtcblx0XHRcdFx0XHRcdHJhbmdlID0gdGhpcy5yYW5kb21Ob2lzZSAvIHRoaXMuc3RlcDtcblx0XHRcdFx0XHRcdGlmIChpID09IDEpIHtcblx0XHRcdFx0XHRcdFx0cmFuZG9tTnVtYmVyID0gTWF0aC5zaWduKHRoaXMuc3RhcnROb3JtYWwueCAhPSAwID8gdGhpcy5zdGFydE5vcm1hbC54IDogdGhpcy5zdGFydE5vcm1hbC55KSAqIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlICsgMSkgKiB0aGlzLnN0ZXA7XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGkgPT0gcG9zLmxlbmd0aCAtIDMpIHtcblx0XHRcdFx0XHRcdFx0cmFuZG9tTnVtYmVyID0gTWF0aC5zaWduKHRoaXMuZW5kTm9ybWFsLnggIT0gMCA/IHRoaXMuZW5kTm9ybWFsLnggOiB0aGlzLmVuZE5vcm1hbC55KSAqIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJhbmdlICsgMSkgKiB0aGlzLnN0ZXA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyYW5kb21OdW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByYW5nZSAqIDIgLSByYW5nZSArIDEpICogdGhpcy5zdGVwO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dGhpcy5fbW92ZVNlZ21lbnQocG9zLCBpLCByYW5kb21OdW1iZXIsIDEsIDEpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Ly9OZXcgZnVuY3Rpb24gZm9yIGZpbmRpbmcgcm91dGVcblx0c3RhdGljIHJvdXRlKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdGxldCBzdGFydEJ1ZmZlciA9IG5ldyBQb2ludChzdGFydC54ICsgc3RhcnROb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnQueSArIHN0YXJ0Tm9ybWFsLnkgKiBidWZmZXIpO1xuXHRcdGxldCBlbmRCdWZmZXIgPSBuZXcgUG9pbnQoZW5kLnggKyBlbmROb3JtYWwueCAqIGJ1ZmZlciwgZW5kLnkgKyBlbmROb3JtYWwueSAqIGJ1ZmZlcik7XG5cdFx0bGV0IHN0YXJ0QnVmZmVyTm9ybWFsLCBlbmRCdWZmZXJOb3JtYWw7XG5cdFx0bGV0IHB0cztcblx0XHRpZiAoc3RhcnROb3JtYWwueCAhPSAwKSB7XG5cdFx0XHRpZiAoKGVuZEJ1ZmZlci54IC0gc3RhcnRCdWZmZXIueCkgLyBzdGFydE5vcm1hbC54ID4gMCkge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KDAsIChlbmRCdWZmZXIueSA+PSBzdGFydEJ1ZmZlci55KSA/IDEgOiAtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKChlbmRCdWZmZXIueSAtIHN0YXJ0QnVmZmVyLnkpIC8gc3RhcnROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoZW5kQnVmZmVyLnggPj0gc3RhcnRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZW5kTm9ybWFsLnggIT0gMCkge1xuXHRcdFx0aWYgKChzdGFydEJ1ZmZlci54IC0gZW5kQnVmZmVyLngpIC8gZW5kTm9ybWFsLnggPiAwKSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKHN0YXJ0QnVmZmVyLnkgPj0gZW5kQnVmZmVyLnkpID8gMSA6IC0xKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnkgLSBlbmRCdWZmZXIueSkgLyBlbmROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gZW5kTm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoc3RhcnRCdWZmZXIueCA+PSBlbmRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPT0gMCkge1xuXHRcdFx0bGV0IG1pZGRsZSA9IChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApID8gbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIGVuZEJ1ZmZlci55KSA6IG5ldyBQb2ludChlbmRCdWZmZXIueCwgc3RhcnRCdWZmZXIueSk7XG5cdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBtaWRkbGUsIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpIDwgMCkge1xuXHRcdFx0aWYgKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgc3RhcnRCdWZmZXIueSksIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIGVuZEJ1ZmZlci55KSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludChzdGFydEJ1ZmZlci54ICsgc3RhcnRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnRCdWZmZXIueSArIHN0YXJ0QnVmZmVyTm9ybWFsLnkgKiBidWZmZXIpLCBuZXcgUG9pbnQoZW5kQnVmZmVyLnggKyBlbmRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgZW5kQnVmZmVyLnkgKyBlbmRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cblx0XHRsZXQgcHJ1bmVQdHMgPSBbXTtcblx0XHRwcnVuZVB0c1swXSA9IHB0c1swXTtcblx0XHRmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmICgocHRzW2ldLnggPT0gcHRzW2ktMV0ueCAmJiBwdHNbaV0ueCA9PSBwdHNbaSsxXS54KSB8fCAocHRzW2ldLnkgPT0gcHRzW2ktMV0ueSAmJiBwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHBydW5lUHRzLnB1c2gocHRzW2ldKTtcblx0XHR9XG5cdFx0cHJ1bmVQdHMucHVzaChwdHNbcHRzLmxlbmd0aCAtIDFdKTtcblx0XHRyZXR1cm4gcHJ1bmVQdHM7XG5cdH1cblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSByb3V0ZSB0aGUgY29ubmVjdGlvbiB0byBhdm9pZCBpbnRlcnNlY3Rpb25zIHdpdGggb3RoZXIgdmVydGljZXMuXG5cdCAqL1xuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0bGV0IHNpZGUsIHNpZGUyLCBkLCBib3gsIGludGVyc2VjdCwgajtcblx0XHRsZXQgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XG5cblx0XHRsZXQgc3RhcnRQYWRkaW5nID0gMCwgZW5kUGFkZGluZztcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XG5cdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDJdO1xuXHRcdGlmIChwdC55IDwgYm94LnkpXG5cdFx0XHRzaWRlID0gMTtcblx0XHRlbHNlIGlmIChwdC55ID4gYm94LnkgKyBib3guaGVpZ2h0KVxuXHRcdFx0c2lkZSA9IDM7XG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxuXHRcdFx0c2lkZSA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0c2lkZSA9IDI7XG5cdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgZW5kQm94LCBib3hlcywgc2lkZSk7XG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdFx0aWYgKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcblx0XHRcdHN3aXRjaChzaWRlKSB7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS55ID09IHB0c1tpKzNdLnkpICYmIChwdHNbaSsyXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpKzJdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIuYm90dG9tICsgY2hhbm5lbDIudG9wKS8yIC0gcHQueTtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS54ID09IHB0c1tpKzNdLngpICYmIChwdHNbaSsyXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaSsyXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIucmlnaHQgKyBjaGFubmVsMi5sZWZ0KS8yIC0gcHQueDtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIG1heCBwb2ludHMuXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpKzEsIDAsIHB0KTtcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgX2hhc0ludGVyc2VjdGlvbihwdHMsIGJveGVzKSB7XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChib3hlc1tqXS5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSkgPj0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3RhdGljIF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0bGV0IGJveCwgc2lkZSwgc2F2ZWRJbmRleCA9IG51bGwsIHNhdmVkU2lkZSA9IG51bGw7XG5cdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChpID09IDAgJiYgaiA9PSBzdGFydEJveCkgfHwgKGkgPT0gcHRzLmxlbmd0aCAtIDIgJiYgaiA9PSBlbmRCb3gpKVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0c2lkZSA9IGJveC5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSk7XG5cdFx0XHRpZiAoc2lkZSA+PSAwKSB7XG5cdFx0XHRcdGlmIChzYXZlZEluZGV4ID09IG51bGwpIHtcblx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChib3hlc1tzYXZlZEluZGV4XS5kaXN0YW5jZShwdHNbaV0pID4gYm94LmRpc3RhbmNlKHB0c1tpXSkpIHtcblx0XHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNhdmVkSW5kZXggIT0gbnVsbClcblx0XHRcdHJldHVybiBbc2F2ZWRJbmRleCwgc2F2ZWRTaWRlXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgYnJlYWtQdCwgYm94LCBzaWRlKSB7XG5cdFx0bGV0IGRpcjtcblx0XHRsZXQgcDtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cCA9IFwieVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cCA9IFwieFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly9maXJzdCB0cnkgdGhlIGJyZWFrcHQuXG5cdFx0ZGlyID0gX2dldFJvdXRlRGlyZWN0aW9uKGJyZWFrUHQsIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0ZGlyID0gLV9nZXRSb3V0ZURpcmVjdGlvbihwdHNbMF0sIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRcdGlmIChicmVha1B0W3BdIDwgYm94LmdldENlbnRlcigpW3BdKVxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcjtcblx0fVxuXG5cdHN0YXRpYyBfZ2V0Um91dGVEaXJlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcblx0XHRcdHJldHVybiBQb2ludC5OO1xuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcblx0XHRcdHJldHVybiBQb2ludC5XO1xuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcblx0XHRcdHJldHVybiBQb2ludC5ORTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcblx0XHRcdHJldHVybiBQb2ludC5OVztcblx0XHR9XG5cdH1cblxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xuXHRcdGxldCBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcblx0XHRsZXQgYm94MSA9IGJveGVzW2luZGV4XSwgYm94Mjtcblx0XHRsZXQgcHQsIGk7XG5cdFx0bGV0IGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcblx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IHB0Lng7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkge1xuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNoYW5uZWwucmlnaHQgLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkge1xuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNoYW5uZWwuYm90dG9tIC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRSaWdodCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAobCA8PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRCb3R0b20oKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGlmIChib3gyLmdldFRvcCgpLnkgPD0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYW5uZWw7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHB0cyB0aGUgbGlzdCBvZiBwb2ludHMuXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSBzdGFydFBhZGRpbmdcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcblx0ICovXG5cdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZykge1xuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxuXHRcdGxldCBkaXIsIGwsIHB0O1xuXHRcdGlmIChpID09IDApIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xuXHRcdFx0aWYgKCFzdGFydFBhZGRpbmcpXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbMF0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XG5cdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBlbmQgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbcHRzLmxlbmd0aC0xXS5nZXREaXJlY3Rpb24ocHRzW3B0cy5sZW5ndGgtMl0pO1xuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxuXHRcdFx0XHRlbmRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKGVuZFBhZGRpbmcsIHB0c1twdHMubGVuZ3RoLTFdLmRpc3RhbmNlKHB0c1twdHMubGVuZ3RoLTJdKS8yKTtcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKHB0cy5sZW5ndGggLSAxLCAwLCBwdCk7XG5cdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnkgKz0gZDtcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS54ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cblx0ICovXG5cdHN0YXRpYyBfbWVyZ2VTZWdtZW50cyhwdHMpIHtcblx0XHRsZXQgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XG5cdFx0bGV0IGgyO1xuXHRcdGZvciAobGV0IGkgPSBwdHMubGVuZ3RoIC0gMjsgaSA+PSAxOyBpLS0pIHtcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcblx0XHRcdGlmIChoMiA9PSBoMSB8fCAocHRzW2ldLmVxdWFscyhwdHNbaS0xXSkpKVxuXHRcdFx0XHRwdHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRoMSA9ICFoMTtcblx0XHR9XG5cdH1cbn1cblxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XG5saW5rVHlwZXNbJ2JlemllciddID0gQmV6aWVyTGluaztcbmxpbmtUeXBlc1snZW50aXR5UmVsYXRpb25zJ10gPSBFbnRpdHlSZWxhdGlvbnM7XG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dlb21ldHJ5L0xpbmsuanMiLCIvKiFcbiAgKiBCZWFuIC0gY29weXJpZ2h0IChjKSBKYWNvYiBUaG9ybnRvbiAyMDExLTIwMTJcbiAgKiBodHRwczovL2dpdGh1Yi5jb20vZmF0L2JlYW5cbiAgKiBNSVQgbGljZW5zZVxuICAqL1xuKGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0LCBkZWZpbml0aW9uKSB7XG4gIGlmICh0eXBlb2YgbW9kdWxlICE9ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKSBtb2R1bGUuZXhwb3J0cyA9IGRlZmluaXRpb24oKVxuICBlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkgZGVmaW5lKGRlZmluaXRpb24pXG4gIGVsc2UgY29udGV4dFtuYW1lXSA9IGRlZmluaXRpb24oKVxufSkoJ2JlYW4nLCB0aGlzLCBmdW5jdGlvbiAobmFtZSwgY29udGV4dCkge1xuICBuYW1lICAgID0gbmFtZSAgICB8fCAnYmVhbidcbiAgY29udGV4dCA9IGNvbnRleHQgfHwgdGhpc1xuXG4gIHZhciB3aW4gICAgICAgICAgICA9IHdpbmRvd1xuICAgICwgb2xkICAgICAgICAgICAgPSBjb250ZXh0W25hbWVdXG4gICAgLCBuYW1lc3BhY2VSZWdleCA9IC9bXlxcLl0qKD89XFwuLiopXFwufC4qL1xuICAgICwgbmFtZVJlZ2V4ICAgICAgPSAvXFwuLiovXG4gICAgLCBhZGRFdmVudCAgICAgICA9ICdhZGRFdmVudExpc3RlbmVyJ1xuICAgICwgcmVtb3ZlRXZlbnQgICAgPSAncmVtb3ZlRXZlbnRMaXN0ZW5lcidcbiAgICAsIGRvYyAgICAgICAgICAgID0gZG9jdW1lbnQgfHwge31cbiAgICAsIHJvb3QgICAgICAgICAgID0gZG9jLmRvY3VtZW50RWxlbWVudCB8fCB7fVxuICAgICwgVzNDX01PREVMICAgICAgPSByb290W2FkZEV2ZW50XVxuICAgICwgZXZlbnRTdXBwb3J0ICAgPSBXM0NfTU9ERUwgPyBhZGRFdmVudCA6ICdhdHRhY2hFdmVudCdcbiAgICAsIE9ORSAgICAgICAgICAgID0ge30gLy8gc2luZ2xldG9uIGZvciBxdWljayBtYXRjaGluZyBtYWtpbmcgYWRkKCkgZG8gb25lKClcblxuICAgICwgc2xpY2UgICAgICAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2VcbiAgICAsIHN0cjJhcnIgICAgICAgID0gZnVuY3Rpb24gKHMsIGQpIHsgcmV0dXJuIHMuc3BsaXQoZCB8fCAnICcpIH1cbiAgICAsIGlzU3RyaW5nICAgICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdzdHJpbmcnIH1cbiAgICAsIGlzRnVuY3Rpb24gICAgID0gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvID09ICdmdW5jdGlvbicgfVxuXG4gICAgICAvLyBldmVudHMgdGhhdCB3ZSBjb25zaWRlciB0byBiZSAnbmF0aXZlJywgYW55dGhpbmcgbm90IGluIHRoaXMgbGlzdCB3aWxsXG4gICAgICAvLyBiZSB0cmVhdGVkIGFzIGEgY3VzdG9tIGV2ZW50XG4gICAgLCBzdGFuZGFyZE5hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdjbGljayBkYmxjbGljayBtb3VzZXVwIG1vdXNlZG93biBjb250ZXh0bWVudSAnICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdtb3VzZXdoZWVsIG1vdXNlbXVsdGl3aGVlbCBET01Nb3VzZVNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSB3aGVlbFxuICAgICAgICAnbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlbW92ZSBzZWxlY3RzdGFydCBzZWxlY3RlbmQgJyAgICAgICAgICAgICsgLy8gbW91c2UgbW92ZW1lbnRcbiAgICAgICAgJ2tleWRvd24ga2V5cHJlc3Mga2V5dXAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGtleWJvYXJkXG4gICAgICAgICdvcmllbnRhdGlvbmNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb2JpbGVcbiAgICAgICAgJ2ZvY3VzIGJsdXIgY2hhbmdlIHJlc2V0IHNlbGVjdCBzdWJtaXQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ2xvYWQgdW5sb2FkIGJlZm9yZXVubG9hZCByZXNpemUgbW92ZSBET01Db250ZW50TG9hZGVkICcgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBtZXNzYWdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdlcnJvciBhYm9ydCBzY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBtaXNjXG4gICAgICAvLyBlbGVtZW50LmZpcmVFdmVudCgnb25YWVonLi4uIGlzIG5vdCBmb3JnaXZpbmcgaWYgd2UgdHJ5IHRvIGZpcmUgYW4gZXZlbnRcbiAgICAgIC8vIHRoYXQgZG9lc24ndCBhY3R1YWxseSBleGlzdCwgc28gbWFrZSBzdXJlIHdlIG9ubHkgZG8gdGhlc2Ugb24gbmV3ZXIgYnJvd3NlcnNcbiAgICAsIHczY05hdGl2ZUV2ZW50cyA9XG4gICAgICAgICdzaG93ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtb3VzZSBidXR0b25zXG4gICAgICAgICdpbnB1dCBpbnZhbGlkICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICd0b3VjaHN0YXJ0IHRvdWNobW92ZSB0b3VjaGVuZCB0b3VjaGNhbmNlbCAnICAgICAgICAgICAgICAgICAgICAgKyAvLyB0b3VjaFxuICAgICAgICAnZ2VzdHVyZXN0YXJ0IGdlc3R1cmVjaGFuZ2UgZ2VzdHVyZWVuZCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZ2VzdHVyZVxuICAgICAgICAndGV4dGlucHV0ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gVGV4dEV2ZW50XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIHBhZ2VzaG93IHBhZ2VoaWRlIHBvcHN0YXRlICcgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2hhc2hjaGFuZ2Ugb2ZmbGluZSBvbmxpbmUgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnYWZ0ZXJwcmludCBiZWZvcmVwcmludCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gcHJpbnRpbmdcbiAgICAgICAgJ2RyYWdzdGFydCBkcmFnZW50ZXIgZHJhZ292ZXIgZHJhZ2xlYXZlIGRyYWcgZHJvcCBkcmFnZW5kICcgICAgICArIC8vIGRuZFxuICAgICAgICAnbG9hZHN0YXJ0IHByb2dyZXNzIHN1c3BlbmQgZW1wdGllZCBzdGFsbGVkIGxvYWRtZXRhZGF0YSAnICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2xvYWRlZGRhdGEgY2FucGxheSBjYW5wbGF5dGhyb3VnaCBwbGF5aW5nIHdhaXRpbmcgc2Vla2luZyAnICAgICArIC8vIG1lZGlhXG4gICAgICAgICdzZWVrZWQgZW5kZWQgZHVyYXRpb25jaGFuZ2UgdGltZXVwZGF0ZSBwbGF5IHBhdXNlIHJhdGVjaGFuZ2UgJyAgKyAvLyBtZWRpYVxuICAgICAgICAndm9sdW1lY2hhbmdlIGN1ZWNoYW5nZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ2NoZWNraW5nIG5vdXBkYXRlIGRvd25sb2FkaW5nIGNhY2hlZCB1cGRhdGVyZWFkeSBvYnNvbGV0ZSAnICAgICAgIC8vIGFwcGNhY2hlXG5cbiAgICAgIC8vIGNvbnZlcnQgdG8gYSBoYXNoIGZvciBxdWljayBsb29rdXBzXG4gICAgLCBuYXRpdmVFdmVudHMgPSAoZnVuY3Rpb24gKGhhc2gsIGV2ZW50cywgaSkge1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZXZlbnRzLmxlbmd0aDsgaSsrKSBldmVudHNbaV0gJiYgKGhhc2hbZXZlbnRzW2ldXSA9IDEpXG4gICAgICAgIHJldHVybiBoYXNoXG4gICAgICB9KHt9LCBzdHIyYXJyKHN0YW5kYXJkTmF0aXZlRXZlbnRzICsgKFczQ19NT0RFTCA/IHczY05hdGl2ZUV2ZW50cyA6ICcnKSkpKVxuXG4gICAgICAvLyBjdXN0b20gZXZlbnRzIGFyZSBldmVudHMgdGhhdCB3ZSAqZmFrZSosIHRoZXkgYXJlIG5vdCBwcm92aWRlZCBuYXRpdmVseSBidXRcbiAgICAgIC8vIHdlIGNhbiB1c2UgbmF0aXZlIGV2ZW50cyB0byBnZW5lcmF0ZSB0aGVtXG4gICAgLCBjdXN0b21FdmVudHMgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaXNBbmNlc3RvciA9ICdjb21wYXJlRG9jdW1lbnRQb3NpdGlvbicgaW4gcm9vdFxuICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgKGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbihlbGVtZW50KSAmIDE2KSA9PT0gMTZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogJ2NvbnRhaW5zJyBpbiByb290XG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9IGNvbnRhaW5lci5ub2RlVHlwZSA9PT0gOSB8fCBjb250YWluZXIgPT09IHdpbmRvdyA/IHJvb3QgOiBjb250YWluZXJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lciAhPT0gZWxlbWVudCAmJiBjb250YWluZXIuY29udGFpbnMoZWxlbWVudClcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2hpbGUgKGVsZW1lbnQgPSBlbGVtZW50LnBhcmVudE5vZGUpIGlmIChlbGVtZW50ID09PSBjb250YWluZXIpIHJldHVybiAxXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgLCBjaGVjayA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICB2YXIgcmVsYXRlZCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgcmV0dXJuICFyZWxhdGVkXG4gICAgICAgICAgICAgICAgPyByZWxhdGVkID09IG51bGxcbiAgICAgICAgICAgICAgICA6IChyZWxhdGVkICE9PSB0aGlzICYmIHJlbGF0ZWQucHJlZml4ICE9PSAneHVsJyAmJiAhL2RvY3VtZW50Ly50ZXN0KHRoaXMudG9TdHJpbmcoKSlcbiAgICAgICAgICAgICAgICAgICAgJiYgIWlzQW5jZXN0b3IocmVsYXRlZCwgdGhpcykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vdXNlZW50ZXI6IHsgYmFzZTogJ21vdXNlb3ZlcicsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2VsZWF2ZTogeyBiYXNlOiAnbW91c2VvdXQnLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNld2hlZWw6IHsgYmFzZTogL0ZpcmVmb3gvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgPyAnRE9NTW91c2VTY3JvbGwnIDogJ21vdXNld2hlZWwnIH1cbiAgICAgICAgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBwcm92aWRlIGEgY29uc2lzdGVudCBFdmVudCBvYmplY3QgYWNyb3NzIGJyb3dzZXJzIGJ5IHRha2luZyB0aGUgYWN0dWFsIERPTVxuICAgICAgLy8gZXZlbnQgb2JqZWN0IGFuZCBnZW5lcmF0aW5nIGEgbmV3IG9uZSBmcm9tIGl0cyBwcm9wZXJ0aWVzLlxuICAgICwgRXZlbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gYSB3aGl0ZWxpc3Qgb2YgcHJvcGVydGllcyAoZm9yIGRpZmZlcmVudCBldmVudCB0eXBlcykgdGVsbHMgdXMgd2hhdCB0byBjaGVjayBmb3IgYW5kIGNvcHlcbiAgICAgICAgdmFyIGNvbW1vblByb3BzICA9IHN0cjJhcnIoJ2FsdEtleSBhdHRyQ2hhbmdlIGF0dHJOYW1lIGJ1YmJsZXMgY2FuY2VsYWJsZSBjdHJsS2V5IGN1cnJlbnRUYXJnZXQgJyArXG4gICAgICAgICAgICAgICdkZXRhaWwgZXZlbnRQaGFzZSBnZXRNb2RpZmllclN0YXRlIGlzVHJ1c3RlZCBtZXRhS2V5IHJlbGF0ZWROb2RlIHJlbGF0ZWRUYXJnZXQgc2hpZnRLZXkgJyAgK1xuICAgICAgICAgICAgICAnc3JjRWxlbWVudCB0YXJnZXQgdGltZVN0YW1wIHR5cGUgdmlldyB3aGljaCBwcm9wZXJ0eU5hbWUnKVxuICAgICAgICAgICwgbW91c2VQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2J1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBkYXRhVHJhbnNmZXIgJyAgICAgICtcbiAgICAgICAgICAgICAgJ2Zyb21FbGVtZW50IG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50JykpXG4gICAgICAgICAgLCBtb3VzZVdoZWVsUHJvcHMgPSBtb3VzZVByb3BzLmNvbmNhdChzdHIyYXJyKCd3aGVlbERlbHRhIHdoZWVsRGVsdGFYIHdoZWVsRGVsdGFZIHdoZWVsRGVsdGFaICcgK1xuICAgICAgICAgICAgICAnYXhpcycpKSAvLyAnYXhpcycgaXMgRkYgc3BlY2lmaWNcbiAgICAgICAgICAsIGtleVByb3BzICAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlIGtleUlkZW50aWZpZXIgJyAgICAgICAgICArXG4gICAgICAgICAgICAgICdrZXlMb2NhdGlvbiBsb2NhdGlvbicpKVxuICAgICAgICAgICwgdGV4dFByb3BzICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEnKSlcbiAgICAgICAgICAsIHRvdWNoUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCd0b3VjaGVzIHRhcmdldFRvdWNoZXMgY2hhbmdlZFRvdWNoZXMgc2NhbGUgcm90YXRpb24nKSlcbiAgICAgICAgICAsIG1lc3NhZ2VQcm9wcyA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhIG9yaWdpbiBzb3VyY2UnKSlcbiAgICAgICAgICAsIHN0YXRlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdzdGF0ZScpKVxuICAgICAgICAgICwgb3Zlck91dFJlZ2V4ID0gL292ZXJ8b3V0L1xuICAgICAgICAgICAgLy8gc29tZSBldmVudCB0eXBlcyBuZWVkIHNwZWNpYWwgaGFuZGxpbmcgYW5kIHNvbWUgbmVlZCBzcGVjaWFsIHByb3BlcnRpZXMsIGRvIHRoYXQgYWxsIGhlcmVcbiAgICAgICAgICAsIHR5cGVGaXhlcnMgICA9IFtcbiAgICAgICAgICAgICAgICB7IC8vIGtleSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAva2V5L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQua2V5Q29kZSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2hcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ga2V5UHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9jbGlja3xtb3VzZSg/ISguKndoZWVsfHNjcm9sbCkpfG1lbnV8ZHJhZ3xkcm9wL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoZXZlbnQsIG5ld0V2ZW50LCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmlnaHRDbGljayA9IGV2ZW50LndoaWNoID09PSAzIHx8IGV2ZW50LmJ1dHRvbiA9PT0gMlxuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnBvcyA9IHsgeDogMCwgeTogMCB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LnBhZ2VYIHx8IGV2ZW50LnBhZ2VZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQucGFnZVhcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5wYWdlWVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuY2xpZW50WCB8fCBldmVudC5jbGllbnRZKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRYID0gZXZlbnQuY2xpZW50WCArIGRvYy5ib2R5LnNjcm9sbExlZnQgKyByb290LnNjcm9sbExlZnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFkgPSBldmVudC5jbGllbnRZICsgZG9jLmJvZHkuc2Nyb2xsVG9wICsgcm9vdC5zY3JvbGxUb3BcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG92ZXJPdXRSZWdleC50ZXN0KHR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yZWxhdGVkVGFyZ2V0ID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgICB8fCBldmVudFsodHlwZSA9PSAnbW91c2VvdmVyJyA/ICdmcm9tJyA6ICd0bycpICsgJ0VsZW1lbnQnXVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbW91c2VQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2Ugd2hlZWwgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL21vdXNlLiood2hlZWx8c2Nyb2xsKS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbW91c2VXaGVlbFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBUZXh0RXZlbnRcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRleHQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRleHRQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gdG91Y2ggYW5kIGdlc3R1cmUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150b3VjaHxeZ2VzdHVyZS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdG91Y2hQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbWVzc2FnZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXm1lc3NhZ2UkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtZXNzYWdlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHBvcHN0YXRlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ecG9wc3RhdGUkL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGF0ZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBldmVyeXRoaW5nIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvLiovXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gY29tbW9uUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAsIHR5cGVGaXhlck1hcCA9IHt9IC8vIHVzZWQgdG8gbWFwIGV2ZW50IHR5cGVzIHRvIGZpeGVyIGZ1bmN0aW9ucyAoYWJvdmUpLCBhIGJhc2ljIGNhY2hlIG1lY2hhbmlzbVxuXG4gICAgICAgICAgLCBFdmVudCA9IGZ1bmN0aW9uIChldmVudCwgZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSByZXR1cm5cbiAgICAgICAgICAgICAgZXZlbnQgPSBldmVudCB8fCAoKGVsZW1lbnQub3duZXJEb2N1bWVudCB8fCBlbGVtZW50LmRvY3VtZW50IHx8IGVsZW1lbnQpLnBhcmVudFdpbmRvdyB8fCB3aW4pLmV2ZW50XG4gICAgICAgICAgICAgIHRoaXMub3JpZ2luYWxFdmVudCA9IGV2ZW50XG4gICAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICAgPSBpc05hdGl2ZVxuICAgICAgICAgICAgICB0aGlzLmlzQmVhbiAgICAgICAgID0gdHJ1ZVxuXG4gICAgICAgICAgICAgIGlmICghZXZlbnQpIHJldHVyblxuXG4gICAgICAgICAgICAgIHZhciB0eXBlICAgPSBldmVudC50eXBlXG4gICAgICAgICAgICAgICAgLCB0YXJnZXQgPSBldmVudC50YXJnZXQgfHwgZXZlbnQuc3JjRWxlbWVudFxuICAgICAgICAgICAgICAgICwgaSwgbCwgcCwgcHJvcHMsIGZpeGVyXG5cbiAgICAgICAgICAgICAgdGhpcy50YXJnZXQgPSB0YXJnZXQgJiYgdGFyZ2V0Lm5vZGVUeXBlID09PSAzID8gdGFyZ2V0LnBhcmVudE5vZGUgOiB0YXJnZXRcblxuICAgICAgICAgICAgICBpZiAoaXNOYXRpdmUpIHsgLy8gd2Ugb25seSBuZWVkIGJhc2ljIGF1Z21lbnRhdGlvbiBvbiBjdXN0b20gZXZlbnRzLCB0aGUgcmVzdCBleHBlbnNpdmUgJiBwb2ludGxlc3NcbiAgICAgICAgICAgICAgICBmaXhlciA9IHR5cGVGaXhlck1hcFt0eXBlXVxuICAgICAgICAgICAgICAgIGlmICghZml4ZXIpIHsgLy8gaGF2ZW4ndCBlbmNvdW50ZXJlZCB0aGlzIGV2ZW50IHR5cGUgYmVmb3JlLCBtYXAgYSBmaXhlciBmdW5jdGlvbiBmb3IgaXRcbiAgICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSB0eXBlRml4ZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZUZpeGVyc1tpXS5yZWcudGVzdCh0eXBlKSkgeyAvLyBndWFyYW50ZWVkIHRvIG1hdGNoIGF0IGxlYXN0IG9uZSwgbGFzdCBpcyAuKlxuICAgICAgICAgICAgICAgICAgICAgIHR5cGVGaXhlck1hcFt0eXBlXSA9IGZpeGVyID0gdHlwZUZpeGVyc1tpXS5maXhcbiAgICAgICAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcHJvcHMgPSBmaXhlcihldmVudCwgdGhpcywgdHlwZSlcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBwcm9wcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghKChwID0gcHJvcHNbaV0pIGluIHRoaXMpICYmIHAgaW4gZXZlbnQpIHRoaXNbcF0gPSBldmVudFtwXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIHByZXZlbnREZWZhdWx0KCkgYW5kIHN0b3BQcm9wYWdhdGlvbigpIGFyZSBhIGNvbnNpc3RlbnQgaW50ZXJmYWNlIHRvIHRob3NlIGZ1bmN0aW9uc1xuICAgICAgICAvLyBvbiB0aGUgRE9NLCBzdG9wKCkgaXMgYW4gYWxpYXMgZm9yIGJvdGggb2YgdGhlbSB0b2dldGhlclxuICAgICAgICBFdmVudC5wcm90b3R5cGUucHJldmVudERlZmF1bHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCkgdGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRoaXMucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIHRoaXMuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLnN0b3BwZWQgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgLy8gc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIHRvIGJlIGhhbmRsZWQgaW50ZXJuYWxseSBiZWNhdXNlIHdlIG1hbmFnZSB0aGUgZXZlbnQgbGlzdCBmb3JcbiAgICAgICAgLy8gZWFjaCBlbGVtZW50XG4gICAgICAgIC8vIG5vdGUgdGhhdCBvcmlnaW5hbEVsZW1lbnQgbWF5IGJlIGEgQmVhbiNFdmVudCBvYmplY3QgaW4gc29tZSBzaXR1YXRpb25zXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCAmJiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uIChjdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGlzIHJpcGUgZm9yIG9wdGltaXNhdGlvbiwgbmV3IGV2ZW50cyBhcmUgKmV4cGVuc2l2ZSpcbiAgICAgICAgICAvLyBpbXByb3ZpbmcgdGhpcyB3aWxsIHNwZWVkIHVwIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICB2YXIgbmUgPSBuZXcgRXZlbnQodGhpcywgdGhpcy5lbGVtZW50LCB0aGlzLmlzTmF0aXZlKVxuICAgICAgICAgIG5lLmN1cnJlbnRUYXJnZXQgPSBjdXJyZW50VGFyZ2V0XG4gICAgICAgICAgcmV0dXJuIG5lXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gRXZlbnRcbiAgICAgIH0oKSlcblxuICAgICAgLy8gaWYgd2UncmUgaW4gb2xkIElFIHdlIGNhbid0IGRvIG9ucHJvcGVydHljaGFuZ2Ugb24gZG9jIG9yIHdpbiBzbyB3ZSB1c2UgZG9jLmRvY3VtZW50RWxlbWVudCBmb3IgYm90aFxuICAgICwgdGFyZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICByZXR1cm4gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgKGVsZW1lbnQgPT09IGRvYyB8fCBlbGVtZW50ID09PSB3aW4pID8gcm9vdCA6IGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogQmVhbiBtYWludGFpbnMgYW4gaW50ZXJuYWwgcmVnaXN0cnkgZm9yIGV2ZW50IGxpc3RlbmVycy4gV2UgZG9uJ3QgdG91Y2ggZWxlbWVudHMsIG9iamVjdHNcbiAgICAgICAgKiBvciBmdW5jdGlvbnMgdG8gaWRlbnRpZnkgdGhlbSwgaW5zdGVhZCB3ZSBzdG9yZSBldmVyeXRoaW5nIGluIHRoZSByZWdpc3RyeS5cbiAgICAgICAgKiBFYWNoIGV2ZW50IGxpc3RlbmVyIGhhcyBhIFJlZ0VudHJ5IG9iamVjdCwgd2UgaGF2ZSBvbmUgJ3JlZ2lzdHJ5JyBmb3IgdGhlIHdob2xlIGluc3RhbmNlLlxuICAgICAgICAqL1xuICAgICwgUmVnRW50cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlYWNoIGhhbmRsZXIgaXMgd3JhcHBlZCBzbyB3ZSBjYW4gaGFuZGxlIGRlbGVnYXRpb24gYW5kIGN1c3RvbSBldmVudHNcbiAgICAgICAgdmFyIHdyYXBwZWRIYW5kbGVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZuLCBjb25kaXRpb24sIGFyZ3MpIHtcbiAgICAgICAgICAgIHZhciBjYWxsID0gZnVuY3Rpb24gKGV2ZW50LCBlYXJncykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KGVsZW1lbnQsIGFyZ3MgPyBzbGljZS5jYWxsKGVhcmdzLCBldmVudCA/IDAgOiAxKS5jb25jYXQoYXJncykgOiBlYXJncylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgZmluZFRhcmdldCA9IGZ1bmN0aW9uIChldmVudCwgZXZlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uX19iZWFuRGVsID8gZm4uX19iZWFuRGVsLmZ0KGV2ZW50LnRhcmdldCwgZWxlbWVudCkgOiBldmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgaGFuZGxlciA9IGNvbmRpdGlvblxuICAgICAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZmluZFRhcmdldChldmVudCwgdGhpcykgLy8gZGVsZWF0ZWQgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uLmFwcGx5KHRhcmdldCwgYXJndW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50KSBldmVudC5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZm4uX19iZWFuRGVsKSBldmVudCA9IGV2ZW50LmNsb25lKGZpbmRUYXJnZXQoZXZlbnQpKSAvLyBkZWxlZ2F0ZWQgZXZlbnQsIGZpeCB0aGUgZml4XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSBmbi5fX2JlYW5EZWxcbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICAgICAgfVxuXG4gICAgICAgICwgUmVnRW50cnkgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwsIG5hbWVzcGFjZXMsIGFyZ3MsIHJvb3QpIHtcbiAgICAgICAgICAgIHZhciBjdXN0b21UeXBlICAgICA9IGN1c3RvbUV2ZW50c1t0eXBlXVxuICAgICAgICAgICAgICAsIGlzTmF0aXZlXG5cbiAgICAgICAgICAgIGlmICh0eXBlID09ICd1bmxvYWQnKSB7XG4gICAgICAgICAgICAgIC8vIHNlbGYgY2xlYW4tdXBcbiAgICAgICAgICAgICAgaGFuZGxlciA9IG9uY2UocmVtb3ZlTGlzdGVuZXIsIGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3VzdG9tVHlwZSkge1xuICAgICAgICAgICAgICBpZiAoY3VzdG9tVHlwZS5jb25kaXRpb24pIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgY3VzdG9tVHlwZS5jb25kaXRpb24sIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdHlwZSA9IGN1c3RvbVR5cGUuYmFzZSB8fCB0eXBlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuaXNOYXRpdmUgICAgICA9IGlzTmF0aXZlID0gbmF0aXZlRXZlbnRzW3R5cGVdICYmICEhZWxlbWVudFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLmN1c3RvbVR5cGUgICAgPSAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiB0eXBlXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQgICAgICAgPSBlbGVtZW50XG4gICAgICAgICAgICB0aGlzLnR5cGUgICAgICAgICAgPSB0eXBlXG4gICAgICAgICAgICB0aGlzLm9yaWdpbmFsICAgICAgPSBvcmlnaW5hbFxuICAgICAgICAgICAgdGhpcy5uYW1lc3BhY2VzICAgID0gbmFtZXNwYWNlc1xuICAgICAgICAgICAgdGhpcy5ldmVudFR5cGUgICAgID0gVzNDX01PREVMIHx8IGlzTmF0aXZlID8gdHlwZSA6ICdwcm9wZXJ0eWNoYW5nZSdcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0ICAgICAgICA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgICAgICB0aGlzW2V2ZW50U3VwcG9ydF0gPSAhIXRoaXMudGFyZ2V0W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMucm9vdCAgICAgICAgICA9IHJvb3RcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlciAgICAgICA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuXG4gICAgICAgIC8vIGdpdmVuIGEgbGlzdCBvZiBuYW1lc3BhY2VzLCBpcyBvdXIgZW50cnkgaW4gYW55IG9mIHRoZW0/XG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5pbk5hbWVzcGFjZXMgPSBmdW5jdGlvbiAoY2hlY2tOYW1lc3BhY2VzKSB7XG4gICAgICAgICAgdmFyIGksIGosIGMgPSAwXG4gICAgICAgICAgaWYgKCFjaGVja05hbWVzcGFjZXMpIHJldHVybiB0cnVlXG4gICAgICAgICAgaWYgKCF0aGlzLm5hbWVzcGFjZXMpIHJldHVybiBmYWxzZVxuICAgICAgICAgIGZvciAoaSA9IGNoZWNrTmFtZXNwYWNlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgIGZvciAoaiA9IHRoaXMubmFtZXNwYWNlcy5sZW5ndGg7IGotLTspIHtcbiAgICAgICAgICAgICAgaWYgKGNoZWNrTmFtZXNwYWNlc1tpXSA9PSB0aGlzLm5hbWVzcGFjZXNbal0pIGMrK1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aCA9PT0gY1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbWF0Y2ggYnkgZWxlbWVudCwgb3JpZ2luYWwgZm4gKG9wdCksIGhhbmRsZXIgZm4gKG9wdClcbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLm1hdGNoZXMgPSBmdW5jdGlvbiAoY2hlY2tFbGVtZW50LCBjaGVja09yaWdpbmFsLCBjaGVja0hhbmRsZXIpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50ID09PSBjaGVja0VsZW1lbnQgJiZcbiAgICAgICAgICAgICghY2hlY2tPcmlnaW5hbCB8fCB0aGlzLm9yaWdpbmFsID09PSBjaGVja09yaWdpbmFsKSAmJlxuICAgICAgICAgICAgKCFjaGVja0hhbmRsZXIgfHwgdGhpcy5oYW5kbGVyID09PSBjaGVja0hhbmRsZXIpXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gUmVnRW50cnlcbiAgICAgIH0oKSlcblxuICAgICwgcmVnaXN0cnkgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBvdXIgbWFwIHN0b3JlcyBhcnJheXMgYnkgZXZlbnQgdHlwZSwganVzdCBiZWNhdXNlIGl0J3MgYmV0dGVyIHRoYW4gc3RvcmluZ1xuICAgICAgICAvLyBldmVyeXRoaW5nIGluIGEgc2luZ2xlIGFycmF5LlxuICAgICAgICAvLyB1c2VzICckJyBhcyBhIHByZWZpeCBmb3IgdGhlIGtleXMgZm9yIHNhZmV0eSBhbmQgJ3InIGFzIGEgc3BlY2lhbCBwcmVmaXggZm9yXG4gICAgICAgIC8vIHJvb3RMaXN0ZW5lcnMgc28gd2UgY2FuIGxvb2sgdGhlbSB1cCBmYXN0XG4gICAgICAgIHZhciBtYXAgPSB7fVxuXG4gICAgICAgICAgLy8gZ2VuZXJpYyBmdW5jdGlvbmFsIHNlYXJjaCBvZiBvdXIgcmVnaXN0cnkgZm9yIG1hdGNoaW5nIGxpc3RlbmVycyxcbiAgICAgICAgICAvLyBgZm5gIHJldHVybnMgZmFsc2UgdG8gYnJlYWsgb3V0IG9mIHRoZSBsb29wXG4gICAgICAgICAgLCBmb3JBbGwgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKSB7XG4gICAgICAgICAgICAgIHZhciBwZnggPSByb290ID8gJ3InIDogJyQnXG4gICAgICAgICAgICAgIGlmICghdHlwZSB8fCB0eXBlID09ICcqJykge1xuICAgICAgICAgICAgICAgIC8vIHNlYXJjaCB0aGUgd2hvbGUgcmVnaXN0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09IHBmeCkge1xuICAgICAgICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdC5zdWJzdHIoMSksIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbilcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSAwLCBsLCBsaXN0ID0gbWFwW3BmeCArIHR5cGVdLCBhbGwgPSBlbGVtZW50ID09ICcqJ1xuICAgICAgICAgICAgICAgIGlmICghbGlzdCkgcmV0dXJuXG4gICAgICAgICAgICAgICAgZm9yIChsID0gbGlzdC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgIGlmICgoYWxsIHx8IGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgaGFuZGxlcikpICYmICFmbihsaXN0W2ldLCBsaXN0LCBpLCB0eXBlKSkgcmV0dXJuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGhhcyA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICAvLyB3ZSdyZSBub3QgdXNpbmcgZm9yQWxsIGhlcmUgc2ltcGx5IGJlY2F1c2UgaXQncyBhIGJpdCBzbG93ZXIgYW5kIHRoaXNcbiAgICAgICAgICAgICAgLy8gbmVlZHMgdG8gYmUgZmFzdFxuICAgICAgICAgICAgICB2YXIgaSwgbGlzdCA9IG1hcFsocm9vdCA/ICdyJyA6ICckJykgKyB0eXBlXVxuICAgICAgICAgICAgICBpZiAobGlzdCkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoIWxpc3RbaV0ucm9vdCAmJiBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIG51bGwpKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZ2V0ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBudWxsLCByb290LCBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cmllcy5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBwdXQgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgdmFyIGhhcyA9ICFlbnRyeS5yb290ICYmICF0aGlzLmhhcyhlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgICAgICAsIGtleSA9IChlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVcbiAgICAgICAgICAgICAgOyhtYXBba2V5XSB8fCAobWFwW2tleV0gPSBbXSkpLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIHJldHVybiBoYXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgZGVsID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIGZvckFsbChlbnRyeS5lbGVtZW50LCBlbnRyeS50eXBlLCBudWxsLCBlbnRyeS5oYW5kbGVyLCBlbnRyeS5yb290LCBmdW5jdGlvbiAoZW50cnksIGxpc3QsIGkpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKVxuICAgICAgICAgICAgICAgIGVudHJ5LnJlbW92ZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAwKSBkZWxldGUgbWFwWyhlbnRyeS5yb290ID8gJ3InIDogJyQnKSArIGVudHJ5LnR5cGVdXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGR1bXAgYWxsIGVudHJpZXMsIHVzZWQgZm9yIG9udW5sb2FkXG4gICAgICAgICAgLCBlbnRyaWVzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICB2YXIgdCwgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvciAodCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gJyQnKSBlbnRyaWVzID0gZW50cmllcy5jb25jYXQobWFwW3RdKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHsgaGFzOiBoYXMsIGdldDogZ2V0LCBwdXQ6IHB1dCwgZGVsOiBkZWwsIGVudHJpZXM6IGVudHJpZXMgfVxuICAgICAgfSgpKVxuXG4gICAgICAvLyB3ZSBuZWVkIGEgc2VsZWN0b3IgZW5naW5lIGZvciBkZWxlZ2F0ZWQgZXZlbnRzLCB1c2UgcXVlcnlTZWxlY3RvckFsbCBpZiBpdCBleGlzdHNcbiAgICAgIC8vIGJ1dCBmb3Igb2xkZXIgYnJvd3NlcnMgd2UgbmVlZCBRd2VyeSwgU2l6emxlIG9yIHNpbWlsYXJcbiAgICAsIHNlbGVjdG9yRW5naW5lXG4gICAgLCBzZXRTZWxlY3RvckVuZ2luZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGxcbiAgICAgICAgICAgID8gZnVuY3Rpb24gKHMsIHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gci5xdWVyeVNlbGVjdG9yQWxsKHMpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQmVhbjogTm8gc2VsZWN0b3IgZW5naW5lIGluc3RhbGxlZCcpIC8vIGVlZWtcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGVjdG9yRW5naW5lID0gZVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHdlIGF0dGFjaCB0aGlzIGxpc3RlbmVyIHRvIGVhY2ggRE9NIGV2ZW50IHRoYXQgd2UgbmVlZCB0byBsaXN0ZW4gdG8sIG9ubHkgb25jZVxuICAgICAgLy8gcGVyIGV2ZW50IHR5cGUgcGVyIERPTSBlbGVtZW50XG4gICAgLCByb290TGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQsIHR5cGUpIHtcbiAgICAgICAgaWYgKCFXM0NfTU9ERUwgJiYgdHlwZSAmJiBldmVudCAmJiBldmVudC5wcm9wZXJ0eU5hbWUgIT0gJ19vbicgKyB0eXBlKSByZXR1cm5cblxuICAgICAgICB2YXIgbGlzdGVuZXJzID0gcmVnaXN0cnkuZ2V0KHRoaXMsIHR5cGUgfHwgZXZlbnQudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gbGlzdGVuZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcblxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudCwgdGhpcywgdHJ1ZSlcbiAgICAgICAgaWYgKHR5cGUpIGV2ZW50LnR5cGUgPSB0eXBlXG5cbiAgICAgICAgLy8gaXRlcmF0ZSB0aHJvdWdoIGFsbCBoYW5kbGVycyByZWdpc3RlcmVkIGZvciB0aGlzIHR5cGUsIGNhbGxpbmcgdGhlbSB1bmxlc3MgdGhleSBoYXZlXG4gICAgICAgIC8vIGJlZW4gcmVtb3ZlZCBieSBhIHByZXZpb3VzIGhhbmRsZXIgb3Igc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCkgaGFzIGJlZW4gY2FsbGVkXG4gICAgICAgIGZvciAoOyBpIDwgbCAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKTsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFsaXN0ZW5lcnNbaV0ucmVtb3ZlZCkgbGlzdGVuZXJzW2ldLmhhbmRsZXIuY2FsbCh0aGlzLCBldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBhZGQgYW5kIHJlbW92ZSBsaXN0ZW5lcnMgdG8gRE9NIGVsZW1lbnRzXG4gICAgLCBsaXN0ZW5lciA9IFczQ19NT0RFTFxuICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQpIHtcbiAgICAgICAgICAgIC8vIG5ldyBicm93c2Vyc1xuICAgICAgICAgICAgZWxlbWVudFthZGQgPyBhZGRFdmVudCA6IHJlbW92ZUV2ZW50XSh0eXBlLCByb290TGlzdGVuZXIsIGZhbHNlKVxuICAgICAgICAgIH1cbiAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkLCBjdXN0b20pIHtcbiAgICAgICAgICAgIC8vIElFOCBhbmQgYmVsb3csIHVzZSBhdHRhY2hFdmVudC9kZXRhY2hFdmVudCBhbmQgd2UgaGF2ZSB0byBwaWdneS1iYWNrIHByb3BlcnR5Y2hhbmdlIGV2ZW50c1xuICAgICAgICAgICAgLy8gdG8gc2ltdWxhdGUgZXZlbnQgYnViYmxpbmcgZXRjLlxuICAgICAgICAgICAgdmFyIGVudHJ5XG4gICAgICAgICAgICBpZiAoYWRkKSB7XG4gICAgICAgICAgICAgIHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGN1c3RvbSB8fCB0eXBlXG4gICAgICAgICAgICAgICAgLCBmdW5jdGlvbiAoZXZlbnQpIHsgLy8gaGFuZGxlclxuICAgICAgICAgICAgICAgICAgICByb290TGlzdGVuZXIuY2FsbChlbGVtZW50LCBldmVudCwgY3VzdG9tKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICwgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCBudWxsXG4gICAgICAgICAgICAgICAgLCB0cnVlIC8vIGlzIHJvb3RcbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbSAmJiBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9PSBudWxsKSBlbGVtZW50Wydfb24nICsgY3VzdG9tXSA9IDBcbiAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmF0dGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBlbnRyeSA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCBjdXN0b20gfHwgdHlwZSwgcm9vdExpc3RlbmVyLCB0cnVlKVswXVxuICAgICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuZGV0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgICAgICByZWdpc3RyeS5kZWwoZW50cnkpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAsIG9uY2UgPSBmdW5jdGlvbiAocm0sIGVsZW1lbnQsIHR5cGUsIGZuLCBvcmlnaW5hbEZuKSB7XG4gICAgICAgIC8vIHdyYXAgdGhlIGhhbmRsZXIgaW4gYSBoYW5kbGVyIHRoYXQgZG9lcyBhIHJlbW92ZSBhcyB3ZWxsXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAgICAgICAgIHJtKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICwgcmVtb3ZlTGlzdGVuZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3JnVHlwZSwgaGFuZGxlciwgbmFtZXNwYWNlcykge1xuICAgICAgICB2YXIgdHlwZSAgICAgPSBvcmdUeXBlICYmIG9yZ1R5cGUucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgICwgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCByZW1vdmVkICA9IHt9XG4gICAgICAgICAgLCBpLCBsXG5cbiAgICAgICAgZm9yIChpID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmICgoIWhhbmRsZXIgfHwgaGFuZGxlcnNbaV0ub3JpZ2luYWwgPT09IGhhbmRsZXIpICYmIGhhbmRsZXJzW2ldLmluTmFtZXNwYWNlcyhuYW1lc3BhY2VzKSkge1xuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBpcyBwcm9ibGVtYXRpYywgd2UgaGF2ZSBhIHJlZ2lzdHJ5LmdldCgpIGFuZCByZWdpc3RyeS5kZWwoKSB0aGF0XG4gICAgICAgICAgICAvLyBib3RoIGRvIHJlZ2lzdHJ5IHNlYXJjaGVzIHNvIHdlIHdhc3RlIGN5Y2xlcyBkb2luZyB0aGlzLiBOZWVkcyB0byBiZSByb2xsZWQgaW50b1xuICAgICAgICAgICAgLy8gYSBzaW5nbGUgcmVnaXN0cnkuZm9yQWxsKGZuKSB0aGF0IHJlbW92ZXMgd2hpbGUgZmluZGluZywgYnV0IHRoZSBjYXRjaCBpcyB0aGF0XG4gICAgICAgICAgICAvLyB3ZSdsbCBiZSBzcGxpY2luZyB0aGUgYXJyYXlzIHRoYXQgd2UncmUgaXRlcmF0aW5nIG92ZXIuIE5lZWRzIGV4dHJhIHRlc3RzIHRvXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgd2UgZG9uJ3Qgc2NyZXcgaXQgdXAuIEBydmFnZ1xuICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGhhbmRsZXJzW2ldKVxuICAgICAgICAgICAgaWYgKCFyZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gJiYgaGFuZGxlcnNbaV1bZXZlbnRTdXBwb3J0XSlcbiAgICAgICAgICAgICAgcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdID0geyB0OiBoYW5kbGVyc1tpXS5ldmVudFR5cGUsIGM6IGhhbmRsZXJzW2ldLnR5cGUgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjaGVjayBlYWNoIHR5cGUvZWxlbWVudCBmb3IgcmVtb3ZlZCBsaXN0ZW5lcnMgYW5kIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyIHdoZXJlIGl0J3Mgbm8gbG9uZ2VyIG5lZWRlZFxuICAgICAgICBmb3IgKGkgaW4gcmVtb3ZlZCkge1xuICAgICAgICAgIGlmICghcmVnaXN0cnkuaGFzKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgbnVsbCwgZmFsc2UpKSB7XG4gICAgICAgICAgICAvLyBsYXN0IGxpc3RlbmVyIG9mIHRoaXMgdHlwZSwgcmVtb3ZlIHRoZSByb290TGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIHJlbW92ZWRbaV0udCwgZmFsc2UsIHJlbW92ZWRbaV0uYylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gc2V0IHVwIGEgZGVsZWdhdGUgaGVscGVyIHVzaW5nIHRoZSBnaXZlbiBzZWxlY3Rvciwgd3JhcCB0aGUgaGFuZGxlciBmdW5jdGlvblxuICAgICwgZGVsZWdhdGUgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIC8vVE9ETzogZmluZFRhcmdldCAodGhlcmVmb3JlICQpIGlzIGNhbGxlZCB0d2ljZSwgb25jZSBmb3IgbWF0Y2ggYW5kIG9uY2UgZm9yXG4gICAgICAgIC8vIHNldHRpbmcgZS5jdXJyZW50VGFyZ2V0LCBmaXggdGhpcyBzbyBpdCdzIG9ubHkgbmVlZGVkIG9uY2VcbiAgICAgICAgdmFyIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCByb290KSB7XG4gICAgICAgICAgICAgIHZhciBpLCBhcnJheSA9IGlzU3RyaW5nKHNlbGVjdG9yKSA/IHNlbGVjdG9yRW5naW5lKHNlbGVjdG9yLCByb290KSA6IHNlbGVjdG9yXG4gICAgICAgICAgICAgIGZvciAoOyB0YXJnZXQgJiYgdGFyZ2V0ICE9PSByb290OyB0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZSkge1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IGFycmF5Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKGFycmF5W2ldID09PSB0YXJnZXQpIHJldHVybiB0YXJnZXRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBmaW5kVGFyZ2V0KGUudGFyZ2V0LCB0aGlzKVxuICAgICAgICAgICAgICBpZiAobWF0Y2gpIGZuLmFwcGx5KG1hdGNoLCBhcmd1bWVudHMpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gX19iZWFuRGVsIGlzbid0IHBsZWFzYW50IGJ1dCBpdCdzIGEgcHJpdmF0ZSBmdW5jdGlvbiwgbm90IGV4cG9zZWQgb3V0c2lkZSBvZiBCZWFuXG4gICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0ge1xuICAgICAgICAgICAgZnQgICAgICAgOiBmaW5kVGFyZ2V0IC8vIGF0dGFjaCBpdCBoZXJlIGZvciBjdXN0b21FdmVudHMgdG8gdXNlIHRvb1xuICAgICAgICAgICwgc2VsZWN0b3IgOiBzZWxlY3RvclxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBoYW5kbGVyXG4gICAgICB9XG5cbiAgICAsIGZpcmVMaXN0ZW5lciA9IFczQ19NT0RFTCA/IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBtb2Rlcm4gYnJvd3NlcnMsIGRvIGEgcHJvcGVyIGRpc3BhdGNoRXZlbnQoKVxuICAgICAgICB2YXIgZXZ0ID0gZG9jLmNyZWF0ZUV2ZW50KGlzTmF0aXZlID8gJ0hUTUxFdmVudHMnIDogJ1VJRXZlbnRzJylcbiAgICAgICAgZXZ0W2lzTmF0aXZlID8gJ2luaXRFdmVudCcgOiAnaW5pdFVJRXZlbnQnXSh0eXBlLCB0cnVlLCB0cnVlLCB3aW4sIDEpXG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChldnQpXG4gICAgICB9IDogZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG9sZCBicm93c2VyIHVzZSBvbnByb3BlcnR5Y2hhbmdlLCBqdXN0IGluY3JlbWVudCBhIGN1c3RvbSBwcm9wZXJ0eSB0byB0cmlnZ2VyIHRoZSBldmVudFxuICAgICAgICBlbGVtZW50ID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgaXNOYXRpdmUgPyBlbGVtZW50LmZpcmVFdmVudCgnb24nICsgdHlwZSwgZG9jLmNyZWF0ZUV2ZW50T2JqZWN0KCkpIDogZWxlbWVudFsnX29uJyArIHR5cGVdKytcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogUHVibGljIEFQSTogb2ZmKCksIG9uKCksIGFkZCgpLCAocmVtb3ZlKCkpLCBvbmUoKSwgZmlyZSgpLCBjbG9uZSgpXG4gICAgICAgICovXG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9mZihlbGVtZW50WywgZXZlbnRUeXBlKHMpWywgaGFuZGxlciBdXSlcbiAgICAgICAgKi9cbiAgICAsIG9mZiA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlU3BlYywgZm4pIHtcbiAgICAgICAgdmFyIGlzVHlwZVN0ciA9IGlzU3RyaW5nKHR5cGVTcGVjKVxuICAgICAgICAgICwgaywgdHlwZSwgbmFtZXNwYWNlcywgaVxuXG4gICAgICAgIGlmIChpc1R5cGVTdHIgJiYgdHlwZVNwZWMuaW5kZXhPZignICcpID4gMCkge1xuICAgICAgICAgIC8vIG9mZihlbCwgJ3QxIHQyIHQzJywgZm4pIG9yIG9mZihlbCwgJ3QxIHQyIHQzJylcbiAgICAgICAgICB0eXBlU3BlYyA9IHN0cjJhcnIodHlwZVNwZWMpXG4gICAgICAgICAgZm9yIChpID0gdHlwZVNwZWMubGVuZ3RoOyBpLS07KVxuICAgICAgICAgICAgb2ZmKGVsZW1lbnQsIHR5cGVTcGVjW2ldLCBmbilcbiAgICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZSA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgIGlmICh0eXBlICYmIGN1c3RvbUV2ZW50c1t0eXBlXSkgdHlwZSA9IGN1c3RvbUV2ZW50c1t0eXBlXS5iYXNlXG5cbiAgICAgICAgaWYgKCF0eXBlU3BlYyB8fCBpc1R5cGVTdHIpIHtcbiAgICAgICAgICAvLyBvZmYoZWwpIG9yIG9mZihlbCwgdDEubnMpIG9yIG9mZihlbCwgLm5zKSBvciBvZmYoZWwsIC5uczEubnMyLm5zMylcbiAgICAgICAgICBpZiAobmFtZXNwYWNlcyA9IGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzcGFjZXMgPSBzdHIyYXJyKG5hbWVzcGFjZXMsICcuJylcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCB0eXBlLCBmbiwgbmFtZXNwYWNlcylcbiAgICAgICAgfSBlbHNlIGlmIChpc0Z1bmN0aW9uKHR5cGVTcGVjKSkge1xuICAgICAgICAgIC8vIG9mZihlbCwgZm4pXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgbnVsbCwgdHlwZVNwZWMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCB7IHQxOiBmbjEsIHQyLCBmbjIgfSlcbiAgICAgICAgICBmb3IgKGsgaW4gdHlwZVNwZWMpIHtcbiAgICAgICAgICAgIGlmICh0eXBlU3BlYy5oYXNPd25Qcm9wZXJ0eShrKSkgb2ZmKGVsZW1lbnQsIGssIHR5cGVTcGVjW2tdKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uID0gZnVuY3Rpb24oZWxlbWVudCwgZXZlbnRzLCBzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgdmFyIG9yaWdpbmFsRm4sIHR5cGUsIHR5cGVzLCBpLCBhcmdzLCBlbnRyeSwgZmlyc3RcblxuICAgICAgICAvL1RPRE86IHRoZSB1bmRlZmluZWQgY2hlY2sgbWVhbnMgeW91IGNhbid0IHBhc3MgYW4gJ2FyZ3MnIGFyZ3VtZW50LCBmaXggdGhpcyBwZXJoYXBzP1xuICAgICAgICBpZiAoc2VsZWN0b3IgPT09IHVuZGVmaW5lZCAmJiB0eXBlb2YgZXZlbnRzID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgLy9UT0RPOiB0aGlzIGNhbid0IGhhbmRsZSBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgZm9yICh0eXBlIGluIGV2ZW50cykge1xuICAgICAgICAgICAgaWYgKGV2ZW50cy5oYXNPd25Qcm9wZXJ0eSh0eXBlKSkge1xuICAgICAgICAgICAgICBvbi5jYWxsKHRoaXMsIGVsZW1lbnQsIHR5cGUsIGV2ZW50c1t0eXBlXSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWlzRnVuY3Rpb24oc2VsZWN0b3IpKSB7XG4gICAgICAgICAgLy8gZGVsZWdhdGVkIGV2ZW50XG4gICAgICAgICAgb3JpZ2luYWxGbiA9IGZuXG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA0KVxuICAgICAgICAgIGZuICAgICAgICAgPSBkZWxlZ2F0ZShzZWxlY3Rvciwgb3JpZ2luYWxGbiwgc2VsZWN0b3JFbmdpbmUpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJncyAgICAgICA9IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAzKVxuICAgICAgICAgIGZuICAgICAgICAgPSBvcmlnaW5hbEZuID0gc2VsZWN0b3JcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGVzID0gc3RyMmFycihldmVudHMpXG5cbiAgICAgICAgLy8gc3BlY2lhbCBjYXNlIGZvciBvbmUoKSwgd3JhcCBpbiBhIHNlbGYtcmVtb3ZpbmcgaGFuZGxlclxuICAgICAgICBpZiAodGhpcyA9PT0gT05FKSB7XG4gICAgICAgICAgZm4gPSBvbmNlKG9mZiwgZWxlbWVudCwgZXZlbnRzLCBmbiwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIC8vIGFkZCBuZXcgaGFuZGxlciB0byB0aGUgcmVnaXN0cnkgYW5kIGNoZWNrIGlmIGl0J3MgdGhlIGZpcnN0IGZvciB0aGlzIGVsZW1lbnQvdHlwZVxuICAgICAgICAgIGZpcnN0ID0gcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAsIHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJykgLy8gZXZlbnQgdHlwZVxuICAgICAgICAgICAgLCBmblxuICAgICAgICAgICAgLCBvcmlnaW5hbEZuXG4gICAgICAgICAgICAsIHN0cjJhcnIodHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpLCAnLicpIC8vIG5hbWVzcGFjZXNcbiAgICAgICAgICAgICwgYXJnc1xuICAgICAgICAgICAgLCBmYWxzZSAvLyBub3Qgcm9vdFxuICAgICAgICAgICkpXG4gICAgICAgICAgaWYgKGVudHJ5W2V2ZW50U3VwcG9ydF0gJiYgZmlyc3QpIHtcbiAgICAgICAgICAgIC8vIGZpcnN0IGV2ZW50IG9mIHRoaXMgdHlwZSBvbiB0aGlzIGVsZW1lbnQsIGFkZCByb290IGxpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCBlbnRyeS5ldmVudFR5cGUsIHRydWUsIGVudHJ5LmN1c3RvbVR5cGUpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogYWRkKGVsZW1lbnRbLCBzZWxlY3Rvcl0sIGV2ZW50VHlwZShzKSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIERlcHJlY2F0ZWQ6IGtlcHQgKGZvciBub3cpIGZvciBiYWNrd2FyZC1jb21wYXRpYmlsaXR5XG4gICAgICAgICovXG4gICAgLCBhZGQgPSBmdW5jdGlvbiAoZWxlbWVudCwgZXZlbnRzLCBmbiwgZGVsZm4pIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KFxuICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICwgIWlzU3RyaW5nKGZuKVxuICAgICAgICAgICAgICA/IHNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgICAgICA6IFsgZWxlbWVudCwgZm4sIGV2ZW50cywgZGVsZm4gXS5jb25jYXQoYXJndW1lbnRzLmxlbmd0aCA+IDMgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgNSkgOiBbXSlcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb25lID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoT05FLCBhcmd1bWVudHMpXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGZpcmUoZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogVGhlIG9wdGlvbmFsICdhcmdzJyBhcmd1bWVudCBtdXN0IGJlIGFuIGFycmF5LCBpZiBubyAnYXJncycgYXJndW1lbnQgaXMgcHJvdmlkZWRcbiAgICAgICAgKiB0aGVuIHdlIGNhbiB1c2UgdGhlIGJyb3dzZXIncyBET00gZXZlbnQgc3lzdGVtLCBvdGhlcndpc2Ugd2UgdHJpZ2dlciBoYW5kbGVycyBtYW51YWxseVxuICAgICAgICAqL1xuICAgICwgZmlyZSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhcmdzKSB7XG4gICAgICAgIHZhciB0eXBlcyA9IHN0cjJhcnIodHlwZSlcbiAgICAgICAgICAsIGksIGosIGwsIG5hbWVzLCBoYW5kbGVyc1xuXG4gICAgICAgIGZvciAoaSA9IHR5cGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHR5cGUgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgaWYgKG5hbWVzID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lcyA9IHN0cjJhcnIobmFtZXMsICcuJylcbiAgICAgICAgICBpZiAoIW5hbWVzICYmICFhcmdzICYmIGVsZW1lbnRbZXZlbnRTdXBwb3J0XSkge1xuICAgICAgICAgICAgZmlyZUxpc3RlbmVyKG5hdGl2ZUV2ZW50c1t0eXBlXSwgdHlwZSwgZWxlbWVudClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gbm9uLW5hdGl2ZSBldmVudCwgZWl0aGVyIGJlY2F1c2Ugb2YgYSBuYW1lc3BhY2UsIGFyZ3VtZW50cyBvciBhIG5vbiBET00gZWxlbWVudFxuICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGFsbCBsaXN0ZW5lcnMgYW5kIG1hbnVhbGx5ICdmaXJlJ1xuICAgICAgICAgICAgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICBhcmdzID0gW2ZhbHNlXS5jb25jYXQoYXJncylcbiAgICAgICAgICAgIGZvciAoaiA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGogPCBsOyBqKyspIHtcbiAgICAgICAgICAgICAgaWYgKGhhbmRsZXJzW2pdLmluTmFtZXNwYWNlcyhuYW1lcykpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVyc1tqXS5oYW5kbGVyLmFwcGx5KGVsZW1lbnQsIGFyZ3MpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogY2xvbmUoZHN0RWxlbWVudCwgc3JjRWxlbWVudFssIGV2ZW50VHlwZSBdKVxuICAgICAgICAqXG4gICAgICAgICogVE9ETzogcGVyaGFwcyBmb3IgY29uc2lzdGVuY3kgd2Ugc2hvdWxkIGFsbG93IHRoZSBzYW1lIGZsZXhpYmlsaXR5IGluIHR5cGUgc3BlY2lmaWVycz9cbiAgICAgICAgKi9cbiAgICAsIGNsb25lID0gZnVuY3Rpb24gKGVsZW1lbnQsIGZyb20sIHR5cGUpIHtcbiAgICAgICAgdmFyIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGZyb20sIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGhhbmRsZXJzLmxlbmd0aFxuICAgICAgICAgICwgaSA9IDBcbiAgICAgICAgICAsIGFyZ3MsIGJlYW5EZWxcblxuICAgICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgIGlmIChoYW5kbGVyc1tpXS5vcmlnaW5hbCkge1xuICAgICAgICAgICAgYXJncyA9IFsgZWxlbWVudCwgaGFuZGxlcnNbaV0udHlwZSBdXG4gICAgICAgICAgICBpZiAoYmVhbkRlbCA9IGhhbmRsZXJzW2ldLmhhbmRsZXIuX19iZWFuRGVsKSBhcmdzLnB1c2goYmVhbkRlbC5zZWxlY3RvcilcbiAgICAgICAgICAgIGFyZ3MucHVzaChoYW5kbGVyc1tpXS5vcmlnaW5hbClcbiAgICAgICAgICAgIG9uLmFwcGx5KG51bGwsIGFyZ3MpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAsIGJlYW4gPSB7XG4gICAgICAgICAgJ29uJyAgICAgICAgICAgICAgICA6IG9uXG4gICAgICAgICwgJ2FkZCcgICAgICAgICAgICAgICA6IGFkZFxuICAgICAgICAsICdvbmUnICAgICAgICAgICAgICAgOiBvbmVcbiAgICAgICAgLCAnb2ZmJyAgICAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ3JlbW92ZScgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdjbG9uZScgICAgICAgICAgICAgOiBjbG9uZVxuICAgICAgICAsICdmaXJlJyAgICAgICAgICAgICAgOiBmaXJlXG4gICAgICAgICwgJ0V2ZW50JyAgICAgICAgICAgICA6IEV2ZW50XG4gICAgICAgICwgJ3NldFNlbGVjdG9yRW5naW5lJyA6IHNldFNlbGVjdG9yRW5naW5lXG4gICAgICAgICwgJ25vQ29uZmxpY3QnICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnRleHRbbmFtZV0gPSBvbGRcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gIC8vIGZvciBJRSwgY2xlYW4gdXAgb24gdW5sb2FkIHRvIGF2b2lkIGxlYWtzXG4gIGlmICh3aW4uYXR0YWNoRXZlbnQpIHtcbiAgICB2YXIgY2xlYW51cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpLCBlbnRyaWVzID0gcmVnaXN0cnkuZW50cmllcygpXG4gICAgICBmb3IgKGkgaW4gZW50cmllcykge1xuICAgICAgICBpZiAoZW50cmllc1tpXS50eXBlICYmIGVudHJpZXNbaV0udHlwZSAhPT0gJ3VubG9hZCcpIG9mZihlbnRyaWVzW2ldLmVsZW1lbnQsIGVudHJpZXNbaV0udHlwZSlcbiAgICAgIH1cbiAgICAgIHdpbi5kZXRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICAgICAgd2luLkNvbGxlY3RHYXJiYWdlICYmIHdpbi5Db2xsZWN0R2FyYmFnZSgpXG4gICAgfVxuICAgIHdpbi5hdHRhY2hFdmVudCgnb251bmxvYWQnLCBjbGVhbnVwKVxuICB9XG5cbiAgLy8gaW5pdGlhbGl6ZSBzZWxlY3RvciBlbmdpbmUgdG8gaW50ZXJuYWwgZGVmYXVsdCAocVNBIG9yIHRocm93IEVycm9yKVxuICBzZXRTZWxlY3RvckVuZ2luZSgpXG5cbiAgcmV0dXJuIGJlYW5cbn0pO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JlYW4vYmVhbi5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0ICogYXMgS2V5VXRpbHMgZnJvbSBcIi4vS2V5VXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG5jb25zdCBERUZBVUxUUyA9IHtcblx0c3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxufTtcblxuLyoqXG4gKiBUaGUgRXZlbnREaXNwYXRjaGVyIGlzIHRoZSBjZW50cmFsIGV2ZW50IG1hbmFnZW1lbnQuIEl0IHdpbGwgbW9uaXRvciBhbGwgZXZlbnRzIGFuZCB0cmFuc2xhdGUgaXQgaW50byB0aGUgYSBoaWdoZXJcbiAqIGxldmVsIGV2ZW50cyBmb3IgY29uc3VtcHRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICogQHBhcmFtIGNvbmZpZyB0aGUgY29uZmlndXJhdG9uIGZvciB0aGUgZXZlbnQgZGlzcGF0Y2hlci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHR6b29tSW4oKSB7XG5cdFx0dGhpcy5zY2FsZSAqPSAxLjI1O1xuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcblx0fVxuXG5cdHpvb21PdXQoKSB7XG5cdFx0dGhpcy5zY2FsZSAqPSAwLjg7XG5cdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xuXHR9XG5cblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBucywgc3RhY2sgPSBbXSwgaXNSb290ID0gZmFsc2U7XG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xuXHRcdFx0bnMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCducycpO1xuXHRcdFx0aWYgKG5zKSB7XG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcblx0XHRcdFx0aWYgKGlzUm9vdCkge1xuXHRcdFx0XHRcdG5zID0gbnMuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFldmVudC5uc1RhcmdldCkgZXZlbnQubnNUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xuXHRcdFx0XHRidWYucHJlcGVuZChucyk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0aWYgKCFpc1Jvb3QpXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XG5cblx0XHQvLyB0YXJnZXQgc3RhY2sgaXMgYSBzdGFjayBvZiBhbGwgdGhlIG5zIHRhcmdldHMgdXAgdG8gdGhlIG9uZSB3aXRoIHRoZSBkYXRhIGJpbmRpbmcuXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcblx0XHRucyA9IGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdGlmIChucyA9PSAnJykgbnMgPSB0aGlzLnJvb3ROUztcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1haW4gZXZlbnQgaGFuZGxlciBtZXRob2QsIGl0IHByb2Nlc3NlcyBldmVudCBhbmQgZ2VuZXJhdGUgcmVsZXZhbnQgZXZlbnRzIHRvIGRpc3BhdGNoLlxuXHQgKi9cblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcblx0XHRsZXQgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cblx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHJldHVybjtcblxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xuXHRcdGlmIChpc0tleUV2ZW50KSB7XG5cdFx0XHRkYXRhID0gdGhpcy5yb290O1xuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcblx0XHRcdGRhdGEgPSBpbmZvLmRhdGE7XG5cdFx0XHRucyA9IGluZm8ubnM7XG5cdFx0fVxuXG5cdFx0Ly9VdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiaGFuZGxlRXZlbnQgLSBcIiArIHR5cGUgKyAnO25zPScgKyBucyk7XG5cblx0XHRpZiAodHlwZSA9PSAnbW91c2V3aGVlbCcpIHtcblx0XHRcdHRoaXMuc2NhbGUgKj0gTWF0aC5wb3coMiwgZXZlbnQud2hlZWxEZWx0YSAqIDAuMDAyKTtcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRcdGV2ZW50LnNjYWxlID0gdGhpcy5zY2FsZTtcblx0XHRcdHR5cGUgPSAnem9vbSc7XG5cdFx0fVxuXG5cdFx0Ly8gU2VlIGlmIHdlIHNob3VsZCBjcmVhdGUgZHJhZyBldmVudHNcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcblx0XHRcdC8vIENyZWF0ZSBkcmFnIG9iamVjdC5cblx0XHRcdGNvbnN0IGRyYWdPYmplY3QgPSB7ZGF0YTogZGF0YSwgcG9zOiBucyA9PSAncm9vdCcgPyBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCkgOiBwb3N9O1xuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciBtb3VzZSBtb3ZlLlxuXHRcdFx0bGV0IGRyYWdQb3M7XG5cblx0XHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgbW91c2UgaGFzIG1vdmVkLiBJRSBhbHdheXMgZmlyZSBtb3VzZW1vdmUgYWZ0ZXIgbW91c2Vkb3duIGV2ZW4gaWYgdGhlIG1vdXNlIGhhc24ndCBtb3ZlZCB5ZXQuXG5cdFx0XHRcdFx0aWYgKGRyYWdPYmplY3QucG9zWzBdID09IGN1cnJlbnRQb3NbMF0gJiYgZHJhZ09iamVjdC5wb3NbMV0gPT0gY3VycmVudFBvc1sxXSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgZHJhZ2dpbmdcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnc3RhcnQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnT2JqZWN0LnBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcblx0XHRcdFx0dGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZycsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG1vdXNldXAgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cblx0XHRcdFx0bGV0IGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnZW5kJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0XHR9O1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzS2V5RXZlbnQpXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cdFx0dGhpcy5kaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuXHRcdC8vaWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHQvL1x0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cblx0ICovXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdGxldCBsYXN0LCBzdGFjaztcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xuXHRcdFx0ayA9IGsgfHwgMDtcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdGxldCB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdH07XG5cblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XG5cdFx0XHRcdGxldCBpdGVtO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xuXHR9XG5cblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0Jylcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwgbGlzdGVuZXJzLnJlZ2V4cCA/IGxpc3RlbmVycy5yZWdleHAgOiBrZXkpKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KHdpbmRvdywgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHBvcztcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcblx0ICogLy8gS2V5IGlzIG9iamVjdCB7Y3RybCwgYWx0LCBzaGlmdCwgbWV0YSwgY29kZX1cblx0ICovXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnVucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XG5cdFx0XHRfLmZvckVhY2godHlwZSwgKHQpID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcblx0XHRsZXQgcmVnZXhwID0gbnVsbDtcblx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHRcdFx0cmVnZXhwID0gdHlwZTtcblx0XHRcdHR5cGUgPSB0eXBlICsgJyc7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0XHRpZiAocmVnZXhwICYmICF0aGlzLmxpc3RlbmVyc1t0eXBlXS5yZWdleHApXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5yZWdleHAgPSByZWdleHA7XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBSZWdFeHApXG5cdFx0XHR0eXBlID0gdHlwZSArICcnO1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRpZiAocmVnaXN0ZXJlZFR5cGUgaW5zdGFuY2VvZiBSZWdFeHApXG5cdFx0XHRyZXR1cm4gbnNUeXBlLm1hdGNoKHJlZ2lzdGVyZWRUeXBlKTtcblxuXHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XG5cdFx0Lypjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsqL1xuXHR9XG5cblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xuXHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHRsZXQgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuXHRcdFx0bGV0IHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG5cdFx0XHRyZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuXHRcdH1cblx0XHRsZXQgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRyZXR1cm4gW2UuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3BdO1xuXHR9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwiLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xuLy8gICAgICAgICAgIFRoZSBLZXkgVXRpbGl0eSBDTGFzcyBmb3IgdGhlIEV2ZW50IERpc3BhdGNoZXIgICAgICAgICAgXHQgICAgIC8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG5cbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuLyoqXG4gKiBLRVkgY29uc3RhbnRcbiAqL1xuY29uc3QgS0VZID0ge1xuXHRBTFQgICAgICAgICAgOiAxOCxcblx0QkFDS19TUEFDRSAgIDogOCxcblx0Q0FQU19MT0NLICAgIDogMjAsXG5cdENPTlRST0wgICAgICA6IDE3LFxuXHRERUxFVEUgICAgICAgOiA0Nixcblx0RE9XTiAgICAgICAgIDogNDAsXG5cdEVORCAgICAgICAgICA6IDM1LFxuXHRFTlRFUiAgICAgICAgOiAxMyxcblx0RVNDQVBFICAgICAgIDogMjIwLFxuXHRIT01FICAgICAgICAgOiAzNixcblx0TEVGVCAgICAgICAgIDogMzcsXG5cdE1FVEEgICAgICAgICA6IDIyNCxcblx0TlVNX0xPQ0sgICAgIDogMTQ0LFxuXHRQQUdFX0RPV04gICAgOiAzNCxcblx0UEFHRV9VUCAgICAgIDogMzMsXG5cdFBBVVNFICAgICAgICA6IDE5LFxuXHRQUklOVFNDUkVFTiAgOiA0NCxcblx0UklHSFQgICAgICAgIDogMzksXG5cdFNDUk9MTF9MT0NLICA6IDE0NSxcblx0U0hJRlQgICAgICAgIDogMTYsXG5cdFNQQUNFICAgICAgICA6IDMyLFxuXHRUQUIgICAgICAgICAgOiA5LFxuXHRVUCAgICAgICAgICAgOiAzOFxuXHQvL0FERCAgICAgICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDYxICA6IDE4Nyxcblx0Ly9TVUJUUkFDVCAgICAgOiBEb21VdGlscy5pc0ZpcmVGb3ggPyAxNzMgOiAxODlcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlFdmVudChldmVudCkge1xuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHZhciBrZXkgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoO1xuXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXG5cdGlmIChrZXkgPj0gMTYgJiYga2V5IDw9IDE4KSB7XG5cdFx0a2V5ID0gbnVsbDtcblx0fVxuXG5cdHJldHVybiBnZXRLZXlEYXRhKGV2ZW50LmN0cmxLZXksIGV2ZW50LmFsdEtleSwgZXZlbnQuc2hpZnRLZXksIGV2ZW50Lm1ldGFLZXksIGtleSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRLZXlEYXRhKGN0cmwsIGFsdCwgc2hpZnQsIG1ldGEsIGtleSkge1xuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXG5cdGlmIChjdHJsKSBidWYuYXBwZW5kKFwiQ1RSTFwiKTtcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcblx0aWYgKHNoaWZ0KSBidWYuYXBwZW5kKFwiU0hJRlRcIik7XG5cdGlmIChtZXRhKSBidWYuYXBwZW5kKFwiTUVUQVwiKTtcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xuXG5cdHJldHVybiBidWYudG9TdHJpbmcoXCIuXCIpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2V2ZW50L0tleVV0aWxzLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9FZGdlXCI7XG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xuXG5jb25zdCBub2RlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ25vZGUnLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdHNlbGVjdGFibGU6IHRydWUsXG5cdGVkaXRhYmxlOiB0cnVlLFxuXHRyZXNpemFibGU6IGZhbHNlLFxuXHRzb3VyY2VhYmxlOiB0cnVlLFxuXHR0YXJnZXRhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlXG59O1xuXG5jb25zdCBlZGdlRGVmYXVsdHMgPSB7XG5cdG5hbWU6ICdEZWZhdWx0Jyxcblx0cm9sZTogJ2VkZ2UnLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHR2aXNpYmxlOiB0cnVlLFxuXHRzdGFydE1hcmtlcjogbnVsbCxcblx0ZW5kTWFya2VyOiB7XG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXG5cdFx0dHlwZTogJ2Fycm93Jyxcblx0XHRzaXplOiAxMCxcblx0XHRjb2xvcjogJyMwZWExMTcnXG5cdH0sXG5cdC8qIHN0YXJ0IGFuZCBlbmQgaXMgb25seSB1c2VkIGlmIHRoZSBlZGdlIGlzIG5vdCBjb25uZWN0ZWQgdG8gYSBub2RlICovXG5cdHN0YXJ0OiBbMCwgMF0sXG5cdGVuZDogWzQwMCwgMjAwXVxufTtcblxuY2xhc3MgR3JhcGgge1xuXHRjb25zdHJ1Y3RvcihpZCA9IF8udW5pcXVlSWQoXCJHXCIpLCBjb25maWcgPSB7fSwgbW9kZWwpIHtcblx0XHR0aGlzLmlkID0gaWQ7XG5cblx0XHR0aGlzLm5vZGVzID0ge307XG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xuXG5cdFx0dGhpcy5zZWxlY3Rpb24gPSBudWxsO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XG5cblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5ub2RlVHlwZXMsIFwiTm9kZXNcIiwgbm9kZURlZmF1bHRzKTtcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcblx0XHQvLyBjaGVjayBmb3IgbWFya2Vycy5cblx0XHR0aGlzLm1hcmtlcnMgPSBbXTtcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xuXHRcdGVkZ2VUeXBlcy5mb3JFYWNoKGZ1bmN0aW9uKHR5cGUpIHtcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGUucHJvdG90eXBlLnN0YXJ0TWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgdHJ1ZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5lbmRNYXJrZXI7XG5cdFx0XHRpZiAobWFya2VyQ29uZmlnKSB7XG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCBmYWxzZSk7XG5cdFx0XHRcdHRoaXMubWFya2Vycy5wdXNoKG1hcmtlcik7XG5cdFx0XHR9XG5cdFx0fSwgdGhpcyk7XG5cblx0XHRkZWxldGUgY29uZmlnLm5vZGVUeXBlcztcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdFx0dGhpcy5yb290ID0gbnVsbDtcblx0XHRpZiAobW9kZWwpXG5cdFx0XHR0aGlzLmxvYWRNb2RlbChtb2RlbCk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0SlNDbGFzcyhjb25maWcsIGRlZmF1bHRDbGFzcykge1xuXHRcdGxldCBqc0NsYXNzID0gbnVsbDtcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIGdldCB0aGUganMgY2xhc3MgZnJvbSBjb25maWcuXG5cdFx0XHRsZXQgdHlwZSA9IFV0aWxzLnR5cGUoZGVmYXVsdENsYXNzLm5hbWVzcGFjZSwgY29uZmlnLnR5cGUpO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGpzQ2xhc3MgPSB0eXBlLmpzQ2xhc3M7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIFV0aWxzLmdldENvbnN0cnVjdG9yKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcyk7XG5cdH1cblxuXHQvKipcblx0ICogQ3JlYXRlIGEgbmV3IE5vZGVcblx0ICogQHBhcmFtIGNvbmZpZ1xuXHQgKiBAcGFyYW0gcGFyZW50XG5cdCAqIEBwYXJhbSBwb3Ncblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCwgcG9zKSB7XG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcblx0XHRsZXQgbm9kZSA9IG5ldyBOb2RlQ2xhc3ModGhpcywgY29uZmlnKTtcblxuXHRcdGlmIChwYXJlbnQpXG5cdFx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIG5vZGUsIHBvcyk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xuXHRcdFx0dGhpcy5yb290LnByb3AoJ3JvbGUnLCAncm9vdCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZXNbbm9kZS5pZF0gPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBFZGdlXG5cdCAqIEBwYXJhbSBjb25maWdcblx0ICogQHBhcmFtIHBhcmVudFxuXHQgKiBAcGFyYW0gZnJvbVxuXHQgKiBAcGFyYW0gdG9cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRhZGRFZGdlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCwgZnJvbSwgdG8pIHtcblx0XHRsZXQgRWRnZUNsYXNzID0gR3JhcGguZ2V0SlNDbGFzcyhjb25maWcsIEVkZ2UpO1xuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcblxuXHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgZWRnZSk7XG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XG5cdFx0cmV0dXJuIGVkZ2U7XG5cdH1cblxuXHQvKipcblx0ICogQWRkZWQgYSBuZXcgY2hpbGQgdG8gdGhlIHBhcmVudC4gVGhlIHBhcmVudCBoYXMgdG8gYmUgYSBub2RlLlxuXHQgKiBAcGFyYW0gcGFyZW50XG5cdCAqIEBwYXJhbSBjaGlsZFxuXHQgKi9cblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcblx0XHRcdHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRcdGNoaWxkLnBhcmVudC5jaGlsZHJlbiA9IF8ud2l0aG91dChjaGlsZC5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcblx0XHR9XG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XG5cdFx0bGV0IG5vZGVzID0gbW9kZWwubm9kZXM7XG5cdFx0bGV0IGVkZ2VzID0gbW9kZWwuZWRnZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xuXHRcdGRlbGV0ZSBtb2RlbC5lZGdlcztcblxuXHRcdGxldCBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xuXHRcdGlmIChub2Rlcykge1xuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChlZGdlcykge1xuXHRcdFx0Xy5mb3JFYWNoKGVkZ2VzLCAoZWRnZSkgPT4ge1xuXHRcdFx0XHRsZXQgZnJvbSwgdG87XG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXG5cdFx0XHRcdFx0ZnJvbSA9IHRoaXMubm9kZXNbZWRnZS5mcm9tXTtcblx0XHRcdFx0aWYgKGVkZ2UudG8pXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xuXHRcdFx0XHR0aGlzLmFkZEVkZ2UoZWRnZSwgbm9kZSwgZnJvbSwgdG8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGN1cnJlbnRSb290KCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5HcmFwaC5ERUZBVUxUUyA9IHtcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxuXHRtdWx0aUNvbm5lY3Q6IGZhbHNlLFxuXHRyZWFkT25seTogZmFsc2UsXG5cdHZpZXdPbmx5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xuXG4vKipcbiAqIEEgTm9kZSByZXByZXNlbnRzIHZlcnRleCBvZiB0aGUgZ3JhcGguXG4gKi9cbmNsYXNzIE5vZGUgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ04nKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuaW5FZGdlcyA9IFtdO1xuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRpc0FuY2VzdG9yKG4pIHtcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cblx0XHRsZXQgbm9kZSA9IG4ucGFyZW50O1xuXHRcdHdoaWxlIChub2RlKSB7XG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xuXHRcdGxldCBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2Vcblx0YWRkSW5FZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkIHx8IHBvcyA+IGVkZ2UubGVuZ3RoIC0gMSlcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4odmlldykge1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Xy5mb3JFYWNoKHRoaXMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRpZiAocG9ydE5hbWUgPT0gJ2F1dG8nKSB7XG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRsZXQgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcblx0XHRpZiAoXy5pc0FycmF5KGxhYmVsKSlcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xuXHR9XG59XG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcblxuLypcblxuLyoqXG4gKiBUaGUgRHJpbGxEb3duUGFyZW50IGlzIHRoZSBwYXJlbnQgdGhhdCBkaXNwbGF5cyB0aGUgdmVydGV4IHdoZW4gZHJpbGxlZCBkb3duLlxuICpcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNMb2NrZWQgPSBmdW5jdGlvbigpIHtcblx0bGV0IG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmlzTG9ja2VkKCkpXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+Jztcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQuaXNMb2NrZWQoKSkgJiYgVmVydGV4LnN1cGVyY2xhc3MuY2FuRWRpdC5jYWxsKHRoaXMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcbn07XG5cbiovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JhcGgvTm9kZS5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFNoYXBlIGZyb20gXCIuLi9nZW9tZXRyeS9TaGFwZVwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcblxuLyoqXG4gKiBUaGUgQ2VsbCBpcyB0aGUgY29tbW9uIHBhcmVudCBmb3IgTm9kZSBhbmQgRWRnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7aWQ6IF8udW5pcXVlSWQoKX0pIHtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcblx0XHRkZWxldGUgY29uZmlnLmlkO1xuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXG5cdFx0aWYgKGNvbmZpZy5kZWNvcmF0b3JzKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZURlY29yYXRvcnMoY29uZmlnLmRlY29yYXRvcnMpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXG5cdFx0aWYgKGNvbmZpZy52aWV3cykge1xuXHRcdFx0dGhpcy52aWV3UHJvcHMgPSBjb25maWcudmlld3M7XG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xuXHRcdH1cblxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxuXHRcdHZhciB0eXBlID0gY29uZmlnLnR5cGUgfHwgXCJEZWZhdWx0XCI7XG5cdFx0dHlwZSA9IFV0aWxzLnR5cGUodGhpcy5jb25zdHJ1Y3Rvci5uYW1lc3BhY2UsIHR5cGUpO1xuXHRcdGlmICghdHlwZSlcblx0XHRcdHRocm93IG5ldyBFcnJvcihcIlR5cGUgbm90IGZvdW5kIFwiICsgY29uZmlnLnR5cGUpO1xuXHRcdGRlbGV0ZSBjb25maWcudHlwZTtcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcblx0fVxuXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpXG5cdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XG5cdH1cblxuXHQvKipcblx0ICogR2V0L1NldCBwcm9wZXJ0eSBzdG9yZWQgYnkgdmlld3MuXG5cdCAqIEBwYXJhbSBrZXlcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHBhcmFtIHZhbHVlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0dmlld1Byb3Aoa2V5ID0gJ2RlZmF1bHQnLCBuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSkge1xuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXG5cdFx0XHRcdHJldHVybiB0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdFx0cmV0dXJuIHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV07XG5cdFx0fVxuXHRcdGlmIChrZXkgPT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLnByb3AobmFtZSwgdmFsdWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIXRoaXMudmlld1Byb3BzW2tleV0pXG5cdFx0XHRcdHRoaXMudmlld1Byb3BzW2tleV0gPSB7fTtcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEZWNvcmF0b3JzKGRlY29yYXRvcnMpIHt9XG5cblx0LyoqXG5cdCAqIEdldCBwcm9wZXJ0aWVzIG5lZWRlZCBmb3IgcmVuZGVyaW5nIHRoaXMgZWxlbWVudFxuXHQgKiBAcmV0dXJucyB7e2tleTogKHN0cmluZ3wqKSwgY2xhc3NOYW1lOiAqLCBuYW1lc3BhY2U6ICosIGJvdW5kczogKn19XG5cdCAqL1xuXHRnZXRWaWV3KGtleSkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xuXHRcdFx0aWQ6IHRoaXMuaWQsXG5cdFx0XHRrZXk6IGtleSxcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcblx0XHRcdHN0eWxlOiB0aGlzLnZpZXdQcm9wKGtleSwgJ3N0eWxlJyksXG5cdFx0XHRuYW1lc3BhY2U6IHRoaXMubmFtZXNwYWNlXG5cdFx0fSwgc2hhcGUpO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IHNoYXBlQ29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdGxldCBzaGFwZUNsYXNzID0gc2hhcGVDb25maWcgPyBTaGFwZS5nZXRTaGFwZShzaGFwZUNvbmZpZy5uYW1lKSA6IFNoYXBlLmdldFNoYXBlKCdSZWN0YW5nbGUnKTtcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XG5cdFx0bGV0IHkgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ5XCIpO1xuXHRcdGxldCB3aWR0aCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcIndpZHRoXCIpO1xuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XG5cdFx0c2hhcGUgPSBuZXcgc2hhcGVDbGFzcyh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBzaGFwZUNvbmZpZyk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBDYWNoZS5nZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB2aWV3LmlkKTtcblx0XHRpZiAoIXRlbXBsYXRlKSB7XG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcblx0XHRcdGxldCByb2xlID0gdGhpcy5wcm9wKCdyb2xlJyk7XG5cdFx0XHR0ZW1wbGF0ZSA9IHZpZXcuZ2V0VGVtcGxhdGUoJyQnICsgcm9sZSwgbnVsbCwgdGhpcyk7XG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHRcdHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh0ZW1wbGF0ZSk7XG5cdFx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcudGVtcGxhdGUnLCB0ZW1wbGF0ZSwgdmlldy5pZCk7XG5cdFx0fVxuXHRcdHJldHVybiB0ZW1wbGF0ZSh0aGlzLmdldFZpZXcodmlldy5pZCkpO1xuXHR9XG5cblx0cmVuZGVyU2hhcGUodmlldykge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUodmlldy5pZCk7XG5cdFx0aWYgKHNoYXBlKVxuXHRcdFx0cmV0dXJuIHNoYXBlLnJlbmRlcih2aWV3KTtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRyZW5kZXJMYWJlbCh2aWV3KSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdClcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGxldCBib3ggPSB0aGlzLmdldExhYmVsQm94KHZpZXcuaWQpO1xuXHRcdGlmIChib3gpXG5cdFx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdGxldCBib3ggPSBDYWNoZS5nZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBrZXkpO1xuXHRcdGlmIChib3gpIHJldHVybiBib3g7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdC8vIEp1c3QgZ2V0IHRoZSBjb25maWcgd2lsbCBoYXZlIGEgcG9zaXRpdmUgcGVyZm9ybWFuY2UgYm9vc3QgZm9yIElFMTEgYW5kIElFMTAuXG5cdFx0Ym94ID0gTGFiZWwuZ2V0TGFiZWxCb3godGhpcy5wcm9wKCdsYWJlbCcpLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHNoYXBlLndpZHRoLCBzaGFwZS5oZWlnaHQpO1xuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGJveCwga2V5KTtcblx0XHRyZXR1cm4gYm94O1xuXHR9XG5cblx0Z2V0IGNvbXB1dGVkQ2xhc3NOYW1lKCkge1xuXHRcdGlmICghdGhpcy5fY29tcHV0ZWRDbGFzc05hbWUpIHtcblx0XHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKHRoaXMucHJvcChcInJvbGVcIikpO1xuXHRcdFx0bGV0IHByb3BzID0gdGhpcy5wcm9wcztcblx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XG5cdFx0XHRwcm9wcyA9IHByb3BzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcblx0XHRcdHdoaWxlIChwcm9wcykge1xuXHRcdFx0XHRpZiAocHJvcHMuaGFzT3duUHJvcGVydHkoXCJjbGFzc05hbWVcIikpXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XG5cdFx0XHRcdHByb3BzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3BzKTtcblx0XHRcdH1cblx0XHRcdHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lID0gYnVmLnRvU3RyaW5nKCcgJyk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLl9jb21wdXRlZENsYXNzTmFtZTtcblx0fVxuXG5cdGdldCBuYW1lc3BhY2UoKSB7XG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdCkgcmV0dXJuICcnO1xuXHRcdHJldHVybiBcInJvb3QuXCIgKyB0aGlzLnByb3AoXCJyb2xlXCIpO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5ncmFwaDtcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xuXHRcdGRlbGV0ZSB0aGlzLnByb3BzO1xuXHRcdGRlbGV0ZSB0aGlzLnZpZXdQcm9wcztcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XG5cdH1cbn1cblxuLypcblxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInhcIiwgTWF0aC5yb3VuZCh4KSk7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ5XCIsIE1hdGgucm91bmQoeSkpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XG5cdHRoaXMuc2V0UHJvcGVydHkoXCJ3aWR0aFwiLCB3KTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcImhlaWdodFwiLCBoKTtcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJlZGl0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblNlbGVjdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhblNlbGVjdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInNlbGVjdGFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5Nb3ZlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKHRoaXMuZ3JhcGggPyB0aGlzLmdyYXBoLmNhbkVkaXQoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJyZXNpemFibGVcIik7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRUeXBlRnJvbVN0cmluZyA9IGZ1bmN0aW9uKHR5cGVTdHIpIHtcblx0cmV0dXJuIHRoaXMuZ3JhcGguZ2V0VHlwZSh0eXBlU3RyKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNyZWF0ZU1vZGlmaWVycyA9IGZ1bmN0aW9uKG1vZGlmaWVycykge1xuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XG5cdHZhciBtb2RpZmllclNldHRpbmdzID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGlmaWVyU2V0dGluZ3NcIik7XG5cdGlmIChtb2RpZmllclNldHRpbmdzKSB7XG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XG5cdFx0XHRjb25maWcudHlwZSA9IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKGNvbmZpZy5jbGFzc05hbWUpO1xuXHRcdFx0Y29uZmlnLnNldHRpbmcgPSBtb2RpZmllclNldHRpbmdzW2NvbmZpZy5jbGFzc05hbWVdO1xuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcblxuXHRcdFx0dGhpcy5hZGRNb2RpZmllcihjb25maWcuY2xhc3NOYW1lLCBuZXcgTW9kaWZpZXIodGhpcywgY29uZmlnKSk7XG5cdFx0fSwgdGhpcyk7XG5cblx0XHQvLyBDaGVjayBmb3Igc2hvd0Fsd2F5cyBzZXR0aW5nc1xuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XG5cdFx0XHRpZiAoc2V0dGluZy5zaG93QWx3YXlzICYmICghdGhpcy5tb2RpZmllcnMgfHwgIXRoaXMubW9kaWZpZXJzW25hbWVdKSkge1xuXHRcdFx0XHR2YXIgY29uZmlnID0ge3R5cGU6IHRoaXMuZ3JhcGguZ2V0TW9kaWZpZXJUeXBlKG5hbWUpLCBzZXR0aW5nOiBzZXR0aW5nfTtcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmFkZE1vZGlmaWVyKG5hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHRcdH1cblx0XHR9LCB0aGlzKTtcblx0fVxufTtcblxuQ2VsbC5wcm90b3R5cGUuYWRkTW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lLCBtb2RpZmllcikge1xuXHRpZiAoIXRoaXMubW9kaWZpZXJzKVxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XG5cblx0aWYgKCFtb2RpZmllci5oYXNPd25Qcm9wZXJ0eShcInNob3dIZWFkZXJcIikpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XG5cblx0Ly8gQGhhY2sgcHJlZmVyYWJseSBzZXQgaXQgaW4gY29uZmlndXJhdGlvbnMuXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IGZhbHNlO1xuXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcblx0aWYgKF8uaXNVbmRlZmluZWQodGhpcy5tb2RpZmllcnMpKVxuXHRcdHRoaXMuY3JlYXRlTW9kaWZpZXJzKCk7XG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xuXHR2YXIgbW9kaWZpZXJzID0gdGhpcy5nZXRNb2RpZmllcnMoKTtcblx0aWYgKG1vZGlmaWVycylcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xuXHRyZXR1cm4gbnVsbDtcbn07XG5cbkNlbGwucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNDb250YWluZXIgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGZhbHNlO1xufTtcbiovXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZ3JhcGgvQ2VsbC5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvNy8yMDE2LlxuICovXG5cbmxldCBjYWNoZXMgPSB7fTtcblxubGV0IENhY2hlID0ge1xuXHRnZXQ6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XG5cdFx0dGhpcy5nZXRDYWNoZShuYW1lc3BhY2UpW2tleV0gPSB2YWx1ZTtcblx0fSxcblxuXHRjb250YWluczogZnVuY3Rpb24oa2V5LCBuYW1lc3BhY2UpIHtcblx0XHRyZXR1cm4ga2V5IGluIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xuXHR9LFxuXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcblx0XHRpZiAoIW5hbWVzcGFjZSlcblx0XHRcdGNhY2hlcyA9IHt9O1xuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxuXHRcdFx0Y2FjaGVzW25hbWVzcGFjZV0gPSB7fTtcblx0fSxcblxuXHRnZXRDYWNoZTogZnVuY3Rpb24obmFtZXNwYWNlID0gJ2RlZmF1bHQnKSB7XG5cdFx0aWYgKCFjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdFx0cmV0dXJuIGNhY2hlc1tuYW1lc3BhY2VdO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYWNoZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy91dGlsL0NhY2hlLmpzIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdGZvbnRDb2xvcjogJ2JsYWNrJyxcblx0cGFkZGluZzogMCxcblx0bGluZVBhZGRpbmc6IDAsXG5cdGFsaWduOiBcImxlZnRcIixcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0cm90YXRpb246IG51bGwsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsLCBtZWFzdXJlRGl2LCBiYXNlbGluZURpdjtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XG5cdFx0XHRsZXQgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZWFzdXJlRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L2Rpdj5cXFxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHRtZWFzdXJlRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwibWVhc3VyZURpdlwiKTtcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XG5cdFx0fVxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRTaXplID0gbWVhc3VyZURpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0bWVhc3VyZURpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xuXHRcdGxldCBiYXNlbGluZUhlaWdodCA9IHN0cnV0Lm9mZnNldFRvcCArIHN0cnV0Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldFRvcDtcblxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0bGV0IGFyciA9IFtdO1xuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemUuaGVpZ2h0O1xuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcblxuXHRcdGlmICghbWF4V2lkdGggfHwgIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikge1xuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcblx0XHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodDtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0bGV0IHdpZHRoID0gMDtcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXG5cdFx0bGV0IGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcblxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHRsZXQgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvXFxzLyk7XG5cdFx0XHRsZXQgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xuXG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xuXHRcdFx0XHRcdFx0YnVmLmFwcGVuZCh3b3JkKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSAwO1xuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxuXHRcdFx0XHRcdG5ld0xpbmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gbmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoO1xuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxuXHRcdFx0XHRidWYuYXBwZW5kKGxpbmUpO1xuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xuXHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodCAqIGFyci5sZW5ndGg7XG5cdFx0cmV0dXJuIGFycjtcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XG5cblx0LyoqXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cblx0ICogQHBhcmFtIGxhYmVsIFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gbGFiZWxDb25maWcgVGhlIGNvbmZpZ3VyYXRpb24gb24gaG93IHRvIGRpc3BsYXkgbGFiZWwuIEl0IHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG5cdCAqIHtcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxuXHQgKiAgICAgIGFsaWduOiBjYW4gYmUgZWl0aGVyIFwibGVmdFwiLCBcImNlbnRlclwiIG9yIFwicmlnaHRcIixcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXG5cdCAqICAgICAgaGVpZ2h0LFxuXHQgKiAgICAgIGdlb21ldHJ5XG5cdCAqIH1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldExhYmVsQm94KGxhYmVsLCBsYWJlbENvbmZpZyA9IHt9LCBjb250ZXh0KSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XG5cdFx0bGV0IGZvbnRGYW1pbHkgPSBsYWJlbENvbmZpZy5mb250RmFtaWx5O1xuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XG5cdFx0bGV0IHBhZGRpbmcgPSBsYWJlbENvbmZpZy5wYWRkaW5nO1xuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xuXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xuXHRcdFx0dyA9IHcgPD0gNSA/IGNvbnRleHQud2lkdGggKiB3IDogdztcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xuXHRcdH1cblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3M7XG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxuXHRcdGxldCBwaXZvdCA9IGFsaWduID09ICdjZW50ZXInID8gWzAsIDBdIDogKGFsaWduID09ICdsZWZ0JyA/IFstd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdIDogW3dyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSk7XG5cblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXG5cdFx0Z2VvbWV0cnkud2lkdGggPSBNYXRoLm1heCh3ICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LndpZHRoKTtcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XG5cblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcblx0XHRlbHNlXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcblxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGJvbGQsIHVuZGVybGluZTogZm9udFN0eWxlICYgRk9OVF9VTkRFUkxJTkUsIGl0YWxpYzogZm9udFN0eWxlICYgRk9OVF9JVEFMSUMsIHNoYWRvdzogZm9udFN0eWxlICYgRk9OVF9TSEFET1csXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCAtIHdyYXBwZWRMYWJlbC5iYXNlbGluZSwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0Ly8gVGhpcyBpcyB0aGUgaW5saW5lIGVkaXRvciBmb3IgZWRpdGluZyBsYWJlbCB0ZXh0IGluIHBsYWNlLlxuXHRsZXQgZWRpdG9yID0ge1xuXHRcdHN0YXJ0OiBmdW5jdGlvbihrZXksIGNvbnRhaW5lciwgYm94LCByZWZFbCwgdGV4dEVsLCBzY2FsZSA9IDEuMCwgc2luZ2xlTGluZSA9IHRydWUpIHtcblx0XHRcdGlmICh0aGlzLmlucHV0KSB7XG5cdFx0XHRcdGlmICh0aGlzLmtleSAhPSBrZXkpIHtcblx0XHRcdFx0XHQvLyBuZWVkIHRvIGNsb3NlIHRoZSBleGlzdGluZyBlZGl0b3IgZmlyc3Rcblx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0fSBlbHNlXG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0bGV0IHRhZyA9IHNpbmdsZUxpbmUgPyAnaW5wdXQnIDogJ3RleHRhcmVhJztcblx0XHRcdHRoaXMuaW5wdXQgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KHRhZywge2lkOlwiaW5saW5lRWRpdG9yXCIsIHVuc2VsZWN0YWJsZTpcIm9mZlwifSwge3Bvc2l0aW9uOlwiYWJzb2x1dGVcIiwgb3ZlcmZsb3c6XCJoaWRkZW5cIiwgcGFkZGluZzpcIjBweFwiLCBtYXJnaW46XCIwcHhcIiwgYm9yZGVyOlwidHJhbnNwYXJlbnRcIn0pO1xuXHRcdFx0aWYgKHNpbmdsZUxpbmUpIHtcblx0XHRcdFx0RXZlbnRzLm9uKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJywgKGV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGV2ZW50LmtleUNvZGUgPT0gMTMpIHtcblx0XHRcdFx0XHRcdEV2ZW50cy5vZmYodGhpcy5pbnB1dCwgJ2tleWRvd24ga2V5dXAnKTtcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5pbnB1dCk7XG5cblx0XHRcdHRoaXMua2V5ID0ga2V5O1xuXHRcdFx0dGhpcy5ib3ggPSBib3g7XG5cdFx0XHR0aGlzLnJlZkVsID0gcmVmRWw7XG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcblxuXHRcdFx0bGV0IGxhYmVsQ29uZmlnID0gYm94LmNvbmZpZztcblx0XHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGJveC5tYXhCb3VuZHMueCwgYm94Lm1heEJvdW5kcy55LCBib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUsIGJveC5tYXhCb3VuZHMuaGVpZ2h0ICogc2NhbGUpO1xuXHRcdFx0bGV0IHBvcyA9IERvbVV0aWxzLmdldENlbnRlclBvc2l0aW9uKHJlZkVsLCBjb250YWluZXIpO1xuXHRcdFx0cG9zID0gW3Bvc1swXSArIG1heEJvdW5kcy5sZWZ0LCBwb3NbMV0gKyBtYXhCb3VuZHMudG9wXTtcblxuXHRcdFx0aWYgKHRleHRFbClcblx0XHRcdFx0dGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcblxuXHRcdFx0RG9tVXRpbHMuc2V0RWxlbWVudCh0aGlzLmlucHV0LCBudWxsLCB7XG5cdFx0XHRcdHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxuXHRcdFx0XHR0b3A6IHBvc1sxXSArIFwicHhcIixcblx0XHRcdFx0d2lkdGg6IG1heEJvdW5kcy53aWR0aCArICdweCcsXG5cdFx0XHRcdGhlaWdodDogbWF4Qm91bmRzLmhlaWdodCArICdweCcsXG5cdFx0XHRcdFwiZm9udC1mYW1pbHlcIjogbGFiZWxDb25maWcuZm9udEZhbWlseSxcblx0XHRcdFx0XCJmb250LXNpemVcIjogKGxhYmVsQ29uZmlnLmZvbnRTaXplICogc2NhbGUpICsgJ3B4Jyxcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xuXHRcdFx0XHQvKlwiY29sb3JcIjogbGFiZWxDb25maWcuZm9udENvbG9yKi9cblx0XHRcdH0pO1xuXG5cdFx0XHR0aGlzLmlucHV0LnZhbHVlID0gYm94Ll9sYWJlbDtcblx0XHRcdHRoaXMuaW5wdXQuZm9jdXMoKTtcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XG5cdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnN0YXJ0JywgW3RoaXMua2V5XSk7XG5cdFx0fSxcblxuXHRcdHN0b3A6IGZ1bmN0aW9uKGNhbmNlbCkge1xuXHRcdFx0aWYgKCF0aGlzLmlucHV0KSByZXR1cm47XG5cblx0XHRcdGNhbmNlbCA9IGNhbmNlbCB8fCBmYWxzZTtcblx0XHRcdGlmICh0aGlzLnRleHRFbClcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cblx0XHRcdC8vIHJlbW92ZSB0aGUgaW5wdXRcblx0XHRcdHRoaXMuaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcblxuXHRcdFx0aWYgKCFjYW5jZWwpXG5cdFx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3IudXBkYXRlJywgW3RoaXMua2V5LCB0aGlzLmlucHV0LnZhbHVlXSk7XG5cblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RvcCcsIFt0aGlzLmtleV0pO1xuXG5cdFx0XHRkZWxldGUgdGhpcy5pbnB1dDtcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcblx0XHRcdGRlbGV0ZSB0aGlzLmJveDtcblx0XHRcdGRlbGV0ZSB0aGlzLnJlZkVsO1xuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4ge1xuXHRcdEZPTlRfQk9MRCxcblx0XHRGT05UX0lUQUxJQyxcblx0XHRGT05UX1VOREVSTElORSxcblx0XHRGT05UX1NIQURPVyxcblx0XHRnZXRTdHJpbmdTaXplLFxuXHRcdHdyYXAsXG5cdFx0Z2V0TGFiZWxCb3gsXG5cdFx0Z2V0TGFiZWxCb3hGb3JMaW5rLFxuXHRcdHJlbmRlcixcblx0XHRlZGl0b3Jcblx0fTtcbn0pKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9MYWJlbC5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuL0NlbGxcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XG5cbmNsYXNzIEVkZ2UgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9LCBzb3VyY2UsIHRhcmdldCkge1xuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XG5cblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcblx0XHR0aGlzLnNldFNvdXJjZShzb3VyY2UsIGNvbmZpZy5zb3VyY2VQb3MpO1xuXHRcdHRoaXMuc2V0VGFyZ2V0KHRhcmdldCwgY29uZmlnLnRhcmdldFBvcyk7XG5cdH1cblxuXHRzZXRTb3VyY2Uobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcblx0fVxuXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcblx0XHR0aGlzLnNldFRlcm1pbmFsKG5vZGUsIHBvcywgJ3RhcmdldCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEludGVybmFsIG1ldGhvZHMgdG8gc2V0IGVpdGhlciB0aGUgc291cmNlIG9yIHRhcmdldFxuXHQgKi9cblx0IHNldFRlcm1pbmFsKG5vZGUsIHBvcywgZGlyKSB7XG5cdFx0dmFyIGVuZCA9IGRpciA9PSAnc291cmNlJyA/IHRoaXMuc291cmNlIDogdGhpcy50YXJnZXQ7XG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XG5cdFx0XHQvLyBzaW1wbHkgY2hhbmdlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZWRnZS5cblx0XHRcdGlmIChub2RlKVxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoZW5kKSB7XG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxuXHRcdFx0XHRlbmQucmVtb3ZlRWRnZSh0aGlzKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKG5vZGUpIHtcblx0XHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcblx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdG5vZGUuYWRkSW5FZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZGlyID09ICdzb3VyY2UnKVxuXHRcdFx0XHR0aGlzLnNvdXJjZSA9IG5vZGU7XG5cdFx0XHRlbHNlXG5cdFx0XHRcdHRoaXMudGFyZ2V0ID0gbm9kZTtcblx0XHRcdC8vdGhpcy5jbGVhclBvaW50cygpO1xuXHRcdH1cblx0fVxuXG5cdGdldExhYmVsQm94KGtleSkge1xuXHRcdHZhciBsYWJlbCA9IHRoaXMucHJvcCgnbGFiZWwnKTtcblx0XHRpZiAobGFiZWwpXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJuIGEgcGFpciBvZiBwb2ludHMgYXMgcmVmZXJlbmNlIHRvIHRoZSBjYWxjdWxhdGlvbiBvZiBzdGFydCBhbmQgZW5kIHBvaW50cy5cblx0ICovXG5cdGdldFJlZmVyZW5jZVBvaW50cyhrZXkpIHtcblx0XHRsZXQgcHRzID0gW107XG5cdFx0aWYgKHRoaXMuc291cmNlKVxuXHRcdFx0cHRzLnB1c2godGhpcy5zb3VyY2UuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XG5cdFx0ZWxzZVxuXHRcdFx0cHRzLnB1c2godGhpcy52aWV3UHJvcChrZXksICdlbmQnKSk7XG5cblx0XHRyZXR1cm4gcHRzO1xuXHR9XG5cblx0Z2V0VGVybWluYWxWaXN1YWwoa2V5LCBvcnRob2dvbmFsKSB7XG5cdFx0bGV0IHJlZlB0cyA9IHRoaXMuZ2V0UmVmZXJlbmNlUG9pbnRzKGtleSk7XG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xuXG5cdFx0bGV0IGdldEJvdW5kID0gZnVuY3Rpb24ocHQpIHtcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xuXHRcdH07XG5cblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMuc291cmNlLmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3NvdXJjZVBvcnQnKSwgcmVmUHRzWzFdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcblxuXHRcdGlmICh0aGlzLnRhcmdldCkge1xuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcblx0XHR9IGVsc2Vcblx0XHRcdHRlcm1pbmFscy5wdXNoKHtwb2ludDogcmVmUHRzWzFdLCBkaXJlY3Rpb246IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24oZ2V0Qm91bmQocmVmUHRzWzFdKSwgcmVmUHRzWzBdLCB0cnVlKX0pO1xuXHRcdHJldHVybiB0ZXJtaW5hbHM7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgY29uZmlnID0gdGhpcy52aWV3UHJvcChrZXksICdzaGFwZScpO1xuXHRcdHNoYXBlID0gTGluay5nZXRMaW5rKHRoaXMuZ2V0VGVybWluYWxWaXN1YWwoa2V5LCBjb25maWcub3J0aG9nb25hbCksIGNvbmZpZywgdGhpcy5wcm9wKCdzdGFydE1hcmtlcicpLCB0aGlzLnByb3AoJ2VuZE1hcmtlcicpKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0VkZ2U6eycgKyAoIXRoaXMuc291cmNlID8gJ251bGwnIDogdGhpcy5zb3VyY2UuaWQpICsgJy0tJyArICghdGhpcy50YXJnZXQgPyAnbnVsbCcgOiB0aGlzLnRhcmdldC5pZCkgKyAnfSc7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0XHR0aGlzLnNldFNvdXJjZShudWxsKTtcblx0XHR0aGlzLnNldFRhcmdldChudWxsKTtcblx0fVxufVxuRWRnZS5uYW1lc3BhY2UgPSBcIkVkZ2VzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IEVkZ2U7XG5cbi8qXG5cbkVkZ2UucHJvdG90eXBlLmlzVmlzaWJsZSA9IGZ1bmN0aW9uKCkge1xuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xuXHRcdHJldHVybiAodGhpcy5zb3VyY2UgPyB0aGlzLnNvdXJjZS5pc1Zpc2libGUoKSA6IHRydWUpICYmICh0aGlzLnRhcmdldCA/IHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInZpc2libGVcIik7XG5cdH0gZWxzZVxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XG59O1xuXG4qL1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2dyYXBoL0VkZ2UuanMiLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XG5cblx0LyoqIEJlZ2luIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdGxldCBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdGxldCBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTIqc2lnbiwgMF0sIFstNCpzaWduLCA0XSwgWzQqc2lnbiwgMF0sIFstNCpzaWduLCAtNF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHRsZXQgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHRsZXQgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy01KnNpZ24sIC01XSwgWy01KnNpZ24sIDVdLCBbNCpzaWduLCAwXV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0bGV0IHIgPSBzaXplIC8gMjtcblx0XHRsZXQgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzAsIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCInICsgciArICdcIiByeT1cIicgKyByICsgJ1wiPjwvZWxsaXBzZT4nO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0bGV0IHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0bGV0IG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9IHtcblx0XHRcdG5hbWU6ICdQb2x5Z29uJyxcblx0XHRcdHBvaW50czogW1stNCwgMF0sIFswLCA0XSwgWzQsIDBdLCBbMCwgLTRdXVxuXHRcdH07XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXHQvKiogRW5kIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBnZXRNYXJrZXIoY29uZmlnLCBzb3VyY2UpIHtcblx0XHRsZXQgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcblx0XHRsZXQgbWFya2VyID0gZmFjdG9yeShjb25maWcuc2l6ZSwgc291cmNlLCBjb25maWcpO1xuXHRcdG1hcmtlci5pZCA9IGNvbmZpZy5pZDtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcblx0cmVnaXN0cnlbJ3RyaWFuZ2xlJ10gPSB0cmlhbmdsZTtcblx0cmVnaXN0cnlbJ292YWwnXSA9IG92YWw7XG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xuXG5cdHJldHVybiB7XG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxuXHRcdGdldE1hcmtlcjogZ2V0TWFya2VyXG5cdH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBNYXJrZXI7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L01hcmtlci5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5jbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcblx0XHRpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwib3JpZW50YXRpb25cIikgJiYgXy5pc1N0cmluZyhjb25maWcub3JpZW50YXRpb24pKSB7XG5cdFx0XHRpZiAoY29uZmlnLm9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkgPT0gXCJIT1JJWk9OVEFMXCIpXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWxldGUgY29uZmlnLm9yaWVudGF0aW9uO1xuXHRcdH1cblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdH1cblxuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7fVxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuTGF5b3V0LlZFUlRJQ0FMID0gMDtcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcblxuTGF5b3V0LkRFRkFVTFRTID0ge1xuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L0xheW91dC5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4vTGF5b3V0XCI7XG5cbmNsYXNzIEZsb3dMYXlvdXQgZXh0ZW5kcyBMYXlvdXQge1xuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7XG5cdFx0dmFyIGl0ZW1zO1xuXHRcdGlmICghcm9vdClcblx0XHRcdGl0ZW1zID0gdGhpcy5vd25lci5jaGlsZE5vZGVzO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcblx0XHRcdGl0ZW1zID0gcm9vdDtcblx0XHRlbHNlXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xuXHRcdGlmICghaXRlbXMgfHwgaXRlbXMubGVuZ3RoID09IDApIHJldHVybjtcblxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xuXHRcdHZhciBwMSA9IDAsIHAyID0gMDtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRub2RlID0gaXRlbXNbaV07XG5cdFx0XHRpZiAoeCA+IDAgJiYgeCArIHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKSA+IGJvdW5kcy53aWR0aCkge1xuXHRcdFx0XHQvLyBjcmVhdGUgbmV3IGxpbmVcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xuXHRcdFx0XHR4ID0gMDtoID0gMDtwMSA9IDA7cDIrKztcblx0XHRcdH1cblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XG5cdFx0XHRub2RlLm1vdmVUbyhbYm91bmRzLnggKyB4LCBib3VuZHMueSArIHldKTtcblx0XHRcdHggKz0gdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpO1xuXHRcdFx0cDErKztcblx0XHRcdGggPSBoIDwgbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA/IG5vZGUuZ2V0UHJvcGVydHkoXCJoZWlnaHRcIikgOiBoO1xuXHRcdH1cblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcblx0fVxufVxuXG5GbG93TGF5b3V0LkRFRkFVTFRTID0ge1xuXHRoZ2FwOiAxMCxcblx0dmdhcDogMTBcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0L0Zsb3dMYXlvdXQuanMiLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuLi9ldmVudC9FdmVudERpc3BhdGNoZXJcIjtcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5pbXBvcnQgU2VsZWN0aW9uQmVoYXZpb3IgZnJvbSBcIi4uL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vTGFiZWxcIjtcblxuY2xhc3MgUmVuZGVyZXIge1xuXHRjb25zdHJ1Y3RvcihpZCwgY29udGFpbmVyLCBjb25maWcgPSB7fSwgZ3JhcGggPSBudWxsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXHRcdHRoaXMuYm94ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2Jywge2lkOiB0aGlzLmlkLCB0YWJpbmRleDogMCwgbnM6ICdncmFwaCd9LCB7b3ZlcmZsb3c6IFwiaGlkZGVuXCIsIHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiwgcG9zaXRpb246ICdyZWxhdGl2ZSd9KTtcblx0XHRjb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5ib3gpO1xuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XG5cdFx0XHRsZXQgbGF5b3V0Q2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcihjb25maWcubGF5b3V0LmpzQ2xhc3MsIExheW91dCk7XG5cdFx0XHR0aGlzLmxheW91dCA9IG5ldyBsYXlvdXRDbGFzcyhjb25maWcubGF5b3V0LmNvbmZpZyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcblx0XHR9XG5cdFx0dGhpcy5jbGVhciA9IHRydWU7XG5cdFx0dGhpcy5fdHJhbnNsYXRlID0gWzAsIDBdO1xuXHRcdHRoaXMuX3NjYWxlID0gMS4wO1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xuXHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5ub2RlQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuZWRnZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmNvbm5lY3Rpb25CZWhhdmlvciA9IG51bGw7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXG5cdFx0RXZlbnRzLm9uKExhYmVsLmVkaXRvciwgJ2VkaXRvci51cGRhdGUuKicsIF8uYmluZChmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHQvL3RoaXMuZ3JhcGgubm9kZXNba2V5XS5wcm9wKCdsYWJlbCcsIHZhbHVlKTtcblx0XHRcdC8vdGhpcy5yZW5kZXIoKTtcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcblx0XHR9LCB0aGlzKSk7XG5cdH1cblxuXHRnZXQgZ3JhcGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0c2V0IGdyYXBoKGdyYXBoKSB7XG5cdFx0dGhpcy5fZ3JhcGggPSBncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoLmN1cnJlbnRSb290O1xuXHRcdGlmIChyb290KSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUgPSBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHRcdHRoaXMuX3NjYWxlID0gcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnKSB8fCAxLjA7XG5cdFx0fVxuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0bGV0IHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdmlld3BvcnQpO1xuXHRcdGxldCB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XG5cdFx0bGV0IHNjYWxlID0gdyAvIHZpZXdwb3J0LndpZHRoO1xuXHRcdHRoaXMudHJhbnNmb3JtKC12aWV3cG9ydC54KnNjYWxlLCAtdmlld3BvcnQueSpzY2FsZSwgc2NhbGUpO1xuXHR9XG5cblx0Z2V0IHRyYW5zbGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZTsgfVxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cblx0Z2V0IHNjYWxlKCkgeyByZXR1cm4gdGhpcy5fc2NhbGU7IH1cblx0c2V0IHNjYWxlKGspIHtcblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAqIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm91dFwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0bGV0IGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdGxldCBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0bGV0IHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4ID0gbnVsbCwgeSA9IG51bGwsIHNjYWxlID0gbnVsbCkge1xuXHRcdGxldCBncmFwaCA9IHRoaXMuZ3JhcGg7XG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcblx0XHRpZiAoIV8uaXNOdWxsKHgpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMF0gPSB4O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnLCB4KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzFdID0geTtcblx0XHRcdGlmIChyb290KVxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XG5cdFx0fVxuXHRcdGlmICghXy5pc051bGwoc2NhbGUpKSB7XG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJywgc2NhbGUpO1xuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXG5cdFx0XHRsZXQgcyA9IHRoaXMuZGlzcGF0Y2hlci5zY2FsZTtcblx0XHRcdGlmIChzICE9IHNjYWxlKVxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcblx0XHR9XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5jdXJyZW50Um9vdCwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdHRoaXMuaW5pdGlhbGl6ZUJlaGF2aW9ycygpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHRpbml0aWFsaXplQmVoYXZpb3JzKCkge1xuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcblx0XHRcdGxldCBqc0NsYXNzO1xuXHRcdFx0aWYgKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKSB7XG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcCgnc2VsZWN0aW9uQmVoYXZpb3InKSkge1xuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdzZWxlY3Rpb25CZWhhdmlvcicpKTtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLm5vZGUubGFiZWwnLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGxldCBub2RlID0gdGhpcy5fZ3JhcGgubm9kZXNbdGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWQnKV07XG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xuXHRcdFx0XHRcdExhYmVsLl9kZWxheUVkaXQgPSBfLmRlbGF5KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChMYWJlbC5fZGVsYXlFZGl0KSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xuXHRcdFx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RhcnQobm9kZS5pZCwgdGhpcy5ib3gsIG5vZGUuZ2V0TGFiZWxCb3godGhpcy5pZCksIHRhcmdldCwgZXZlbnQubnNUYXJnZXQsIHRoaXMuc2NhbGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0sIDI1MCk7XG5cdFx0XHRcdH1cblx0XHRcdH0sIHRoaXMpO1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsvXm1vdXNlZG93bi8sIC9eem9vbS9dLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XG5cdFx0XHRcdGlmICghRG9tVXRpbHMuZXZlbnRGcm9tSW5wdXQoZXZlbnQpKSB7XG5cdFx0XHRcdFx0TGFiZWwuZWRpdG9yLnN0b3AoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0fVxuXHRcdHRoaXMuZGlzcGF0Y2hlci5zdGFydCgpO1xuXHR9XG5cblx0cmVmcmVzaCgpIHt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgdGVtcGxhdGUgZm9yIHRoZSBzcGVjaWZpZWQga2V5LlxuXHQgKiBAcGFyYW0ga2V5XG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cblx0ICogQHBhcmFtIHByZXByb2Nlc3NvciBpZiB0aGUgdGVtcGxhdGUgY29udGFpbnMgcHJlcHJvc3NpbmcgZWxlbWVudHMsIHN1Y2ggYXMgI3tzaGFwZX0sIHRoZSBwcmVwcm9jZXNzb3Igd2lsbCBiZVxuXHQgKiB1c2VkIHRvIHJlbmRlciB0aGVtLlxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldFRlbXBsYXRlKGtleSwgY29uZmlnLCBwcmVwcm9jZXNzb3IpIHtcblx0XHRsZXQgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XG5cdFx0aWYgKHQgJiYgXy5pc0Z1bmN0aW9uKHQpKSB7XG5cdFx0XHR0ID0gdChjb25maWcpO1xuXHRcdH1cblx0XHQvLyBjaGVjayBpZiB0aGVyZSBhcmUgYW55IHByZXByb2Nlc3NpbmcgdGFncy5cblx0XHRpZiAocHJlcHJvY2Vzc29yKSB7XG5cdFx0XHRsZXQgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xuXHRcdFx0bGV0IG9iaiA9IHt9O1xuXHRcdFx0Zm9yIChsZXQgcGFydCBpbiBwYXJ0cykge1xuXHRcdFx0XHRwYXJ0ID0gcGFydHNbcGFydF07XG5cdFx0XHRcdHBhcnQgPSBwYXJ0LnN1YnN0cmluZygyLCBwYXJ0Lmxlbmd0aCAtMSkudHJpbSgpO1xuXHRcdFx0XHRvYmpbcGFydF0gPSBwcmVwcm9jZXNzb3JbXy5jYW1lbENhc2UoJ3JlbmRlciAnICsgcGFydCldKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0dCA9IF8udGVtcGxhdGUodCwge2ludGVycG9sYXRlOiAvI3soW1xcc1xcU10rPyl9L2d9KShvYmopO1xuXHRcdH1cblx0XHRyZXR1cm4gdDtcblx0fVxuXG5cdHJlc2V0KCkge31cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLl9ncmFwaDtcblx0XHRkZWxldGUgdGhpcy5sYXlvdXQ7XG5cdFx0aWYgKHRoaXMuZGlzcGF0Y2hlcikge1xuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnN0b3AoKTtcblx0XHRcdGRlbGV0ZSB0aGlzLmRpc3BhdGNoZXI7XG5cdFx0fVxuXHRcdHRoaXMuYm94LmlubmVySFRNTCA9ICcnO1xuXHR9XG59XG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcblx0ZGVmYXVsdENsaWNrTW9kZTogXCJwYW5cIixcblx0aGlkZU91dGxpbmU6IGZhbHNlLFxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXG5cdGRyYWdnYWJsZTogdHJ1ZSxcblx0Z3JpZEVuYWJsZWQ6IGZhbHNlLFxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxuXHRncmlkU2l6ZTogMzAsXG5cdG1heFpvb206IDQuMCxcblx0bWluWm9vbTogMC4yLFxuXHR6b29tRmFjdG9yOiAxLjIsXG5cdG1hc2tPcGFjaXR5OiAwLjUsXG5cdGdyYXBoQmVoYXZpb3I6IEdyYXBoQmVoYXZpb3IsXG5cdHNlbGVjdGlvbkJlaGF2aW9yOiBTZWxlY3Rpb25CZWhhdmlvclxufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvMjgvMjAxNi5cbiAqL1xuaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XG5cbi8qKlxuICogR3JhcGggaGFuZGxlciBoYW5kbGVzIFBhbm5pbmcgYW5kIFpvb20gYW5kIHJ1YmJlciBiYW5kIHNlbGVjdGlvblxuICovXG5jbGFzcyBHcmFwaEJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuXHRcdHN1cGVyKHJlbmRlcmVyKTtcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XG5cdFx0bGV0IGYgPSBmdW5jdGlvbih0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRcdC8vQ3Vyc29yLnVwZGF0ZUN1cnNvcih0eXBlLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHR9O1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL15kcmFnLipcXC5ncmFwaCQvLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL156b29tLywgdGhpcy5oYW5kbGVab29tLCB0aGlzKTtcblx0XHQvL2Rpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uZ3JhcGgnLCAnbW91c2VlbnRlci5ncmFwaCcsICdtb3VzZWxlYXZlLmdyYXBoJ10sIGYpO1xuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcblx0fVxuXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0obnVsbCwgbnVsbCwgZXZlbnQuc2NhbGUpO1xuXHR9XG5cblx0aGFuZGxlRHJhZyh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xuXHRcdFx0aWYgKCFwYW4pIHJldHVybjtcblx0XHRcdGxldCB0ID0gdGhpcy5yZW5kZXJlci50cmFuc2xhdGU7XG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKHBvc1swXSArIHRoaXMub2Zmc2V0WzBdLCBwb3NbMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHRcdGRlbGV0ZSB0aGlzLm9mZnNldDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvci9HcmFwaEJlaGF2aW9yLmpzIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmVoYXZpb3Ige1xuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuXHRcdHRoaXMucmVuZGVyZXIgPSByZW5kZXJlcjtcblx0fVxuXG5cdGRlc3Ryb3koKSB7XG5cdFx0ZGVsZXRlIHRoaXMucmVuZGVyZXI7XG5cdH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qcyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IENlbGwgZnJvbSBcIi4uL2dyYXBoL0NlbGxcIjtcbmltcG9ydCBCZWhhdmlvciBmcm9tIFwiLi9CZWhhdmlvclwiO1xuXG5jbGFzcyBTZWxlY3Rpb25CZWhhdmlvciBleHRlbmRzIEJlaGF2aW9yIHtcblx0Y29uc3RydWN0b3IocmVuZGVyZXIpIHtcblx0XHRzdXBlcihyZW5kZXJlcik7XG5cdFx0bGV0IGRpc3BhdGNoZXIgPSByZW5kZXJlci5kaXNwYXRjaGVyO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNlZG93bi4qJywgdGhpcy5zZWxlY3RDZWxsLCB0aGlzKTtcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLionLCB0aGlzLnVuc2VsZWN0Q2VsbCwgdGhpcyk7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcignZHJhZyouZ3JhcGgnLCB0aGlzLmhhbmRsZU11bHRpU2VsZWN0LCB0aGlzKTtcblx0XHQvL2dyYXBoLm9uKEdyYXBoLkVWRU5UX1RZUEVTLlNFTEVDVElPTl9DSEFOR0UsIHRoaXMudXBkYXRlU2VsZWN0aW9ucywgdGhpcyk7XG5cdFx0dGhpcy5zZWxlY3RlZE5vZGVzID0gbnVsbDtcblx0XHR0aGlzLnNlbGVjdGVkTGlua3MgPSBudWxsO1xuXHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IG51bGw7XG5cdH1cblxuXHR1cGRhdGVTZWxlY3Rpb25zKCkge1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkTm9kZXMpXG5cdFx0XHR0aGlzLnNlbGVjdGVkTm9kZXMuY2xhc3NlZCgnc2VsZWN0ZWQnLCBmYWxzZSk7XG5cdFx0aWYgKHRoaXMuc2VsZWN0ZWRMaW5rcylcblx0XHRcdHRoaXMuc2VsZWN0ZWRMaW5rcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcblxuXHRcdHRoaXMuc2VsZWN0ZWROb2RlcyA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gbnVsbDtcblx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSBudWxsO1xuXG5cdFx0aWYgKHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcyAmJiB0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMubGVuZ3RoID4gMCkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZE5vZGVzID0gdGhpcy5ncmFwaC5yZW5kZXJlci5nZXRTaGFwZXModGhpcy5ncmFwaC5zZWxlY3RlZFZlcnRpY2VzKTtcblx0XHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IHRoaXMuZ3JhcGgucmVuZGVyZXIuZ2V0U2hhcGVzKHRoaXMuZ3JhcGguZ2V0QXR0YWNoZWRFZGdlcygpKTtcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIHRydWUpO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMgJiYgdGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRMaW5rcyA9IHRoaXMuZ3JhcGgucmVuZGVyZXIuZ2V0U2hhcGVzKHRoaXMuZ3JhcGguc2VsZWN0ZWRFZGdlcyk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkTGlua3MuY2xhc3NlZCgnc2VsZWN0ZWQnLCB0cnVlKTtcblx0XHR9XG5cdH1cblxuXHRzZWxlY3RDZWxsKHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XG5cdFx0dmFyIGNlbGwgPSBkYXRhID09IHRoaXMuZ3JhcGggPyBudWxsIDogZGF0YTtcblx0XHRpZiAoY2VsbCAmJiAhKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkgcmV0dXJuO1xuXHRcdHZhciB0b2dnbGUgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xuXHRcdGlmIChjZWxsICYmIChjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHtcblx0XHRcdGlmICghdGhpcy5ncmFwaC5pc1NlbGVjdGVkKGNlbGwpKVxuXHRcdFx0XHRkZWxldGUgY2VsbC5fZmlyc3RTZWxlY3Rpb247XG5cdFx0XHRlbHNlXG5cdFx0XHRcdGNlbGwuX2ZpcnN0U2VsZWN0aW9uID0gdHJ1ZTtcblxuXHRcdFx0ZDMuc2VsZWN0KGV2ZW50LmRhdGFUYXJnZXQpLm1vdmVUb0Zyb250KCk7XG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxsLCB0b2dnbGUpO1xuXHRcdH1cblx0fVxuXG5cdHVuc2VsZWN0Q2VsbCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xuXHRcdHZhciBjZWxsID0gZGF0YSA9PSB0aGlzLmdyYXBoID8gbnVsbCA6IGRhdGE7XG5cdFx0aWYgKGNlbGwgJiYgIShjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHJldHVybjtcblx0XHR2YXIgY3RybEtleSA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXk7XG5cdFx0aWYgKCFjZWxsKSB7XG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxsLCBjdHJsS2V5KTtcblx0XHR9XG5cdH1cblxuXHRoYW5kbGVNdWx0aVNlbGVjdCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xuXHRcdHBvcyA9IHV0aWwuc2NhbGUodGhpcy5ncmFwaCwgcG9zKTtcblxuXHRcdGlmICh0eXBlID09ICdkcmFnc3RhcnQnKSB7XG5cdFx0XHR2YXIgc2VsZWN0ID0gKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwic2VsZWN0XCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xuXHRcdFx0aWYgKCFzZWxlY3QpIHJldHVybjtcblx0XHRcdHRoaXMuc3RhcnRQdCA9IG5ldyBQb2ludChwb3NbMF0sIHBvc1sxXSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmICghdGhpcy5zdGFydFB0KSByZXR1cm47XG5cdFx0dmFyIHJlY3QgPSBSZWN0YW5nbGUuZ2V0Qm91bmRpbmdSZWN0YW5nbGUoW25ldyBQb2ludChwb3NbMF0sIHBvc1sxXSksIHRoaXMuc3RhcnRQdF0pO1xuXHRcdHZhciByZW5kZXJlciA9IHRoaXMuZ3JhcGgucmVuZGVyZXI7XG5cdFx0aWYgKCF0aGlzLnJ1YmJlcmJhbmQpIHtcblx0XHRcdHRoaXMucnViYmVyYmFuZCA9IGQzLnNlbGVjdChyZW5kZXJlci5hcHBlbmROb2RlKHJlbmRlcmVyLmdldENlbGxMYXllcigpLCB7XG5cdFx0XHRcdHRlbXBsYXRlOiBfLnRlbXBsYXRlKCc8Zz48cmVjdCB4PVwiMFwiIHk9XCIwXCIgd2lkdGg9XCIxMDBcIiBoZWlnaHQ9XCIxMDBcIiBzdHJva2U9XCIjMDAwMDAwXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtZGFzaGFycmF5PVwiMyAzXCIvPjwvZz4nKVxuXHRcdFx0fSwgZmFsc2UpKTtcblx0XHR9XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XG5cdFx0XHR2YXIgY2VsbHMgPSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkuY2hpbGRyZW47XG5cdFx0XHQvLyBUT0RPOiBEZWZpbmUgaWYgd2Ugd2FudCB0byBzZWxlY3QgdmVydGV4ZXMgLyBlZGdlcyBvciBib3RoXG5cdFx0XHRjZWxscyA9IF8uZmlsdGVyKGNlbGxzLCBmdW5jdGlvbiAoY2VsbCkge1xuXHRcdFx0XHR2YXIgYm94ID0gY2VsbC5nZXRCb3VuZHMoKTtcblx0XHRcdFx0aWYgKHJlY3QuY29udGFpbnMoYm94KSkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0pO1xuXHRcdFx0Ly8gVE9ETzogU2V0IHNlbGVjdGlvblxuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbHMsIGV2ZW50LmN0cmxLZXkpO1xuXG5cdFx0XHR0aGlzLnJ1YmJlcmJhbmQucmVtb3ZlKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5zdGFydFB0O1xuXHRcdFx0ZGVsZXRlIHRoaXMucnViYmVyYmFuZDtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0dGhpcy5ydWJiZXJiYW5kLnNlbGVjdChcInJlY3RcIikuYXR0cih7eDogcmVjdC54LCB5OiByZWN0LnksIHdpZHRoOiByZWN0LndpZHRoLCBoZWlnaHQ6IHJlY3QuaGVpZ2h0fSk7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdHN1cGVyLmRlc3Ryb3koKTtcblx0XHRkZWxldGUgdGhpcy5zZWxlY3RlZE5vZGVzO1xuXHRcdGRlbGV0ZSB0aGlzLnNlbGVjdGVkTGlua3M7XG5cdFx0ZGVsZXRlIHRoaXMuYXR0YWNoZWRMaW5rcztcblx0fVxufVxuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Rpb25CZWhhdmlvcjtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvci5qcyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi4vdXRpbC9iYXNlNjRcIjtcclxuaW1wb3J0IERvbVV0aWxzIGZyb20gXCIuLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5cclxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xyXG5pZiAodHlwZW9mIChTVkdFbGVtZW50KSAhPSBcInVuZGVmaW5lZFwiKSB7XHJcblx0dmFyIHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhOUywgXCJzdmdcIik7XHJcblx0c3ZnLmlubmVySFRNTCA9ICc8Y2lyY2xlLz4nO1xyXG5cdGlmIChzdmcuZmlyc3RDaGlsZCAhPT0gXCJbb2JqZWN0IFNWR0NpcmNsZUVsZW1lbnRdXCIpIHtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKFNWR0VsZW1lbnQucHJvdG90eXBlLCB7XHJcblx0XHRcdFwib3V0ZXJIVE1MXCI6IHtcclxuXHRcdFx0XHRlbnVtZXJhYmxlOiBmYWxzZSxcclxuXHRcdFx0XHRjb25maWd1cmFibGU6IHRydWUsXHJcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHZhciAkbm9kZSwgJHRlbXA7XHJcblx0XHRcdFx0XHQkdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cdFx0XHRcdFx0JG5vZGUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKTtcclxuXHRcdFx0XHRcdCR0ZW1wLmFwcGVuZENoaWxkKCRub2RlKTtcclxuXHRcdFx0XHRcdHJldHVybiAkdGVtcC5pbm5lckhUTUw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LFxyXG5cdFx0XHRcImlubmVySFRNTFwiOiB7XHJcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXHJcblx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlLFxyXG5cdFx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR2YXIgcyA9IHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0XHRcdFx0dmFyIHJvcGVuID0gbmV3IFJlZ0V4cChcIjxcIiArIHRoaXMubm9kZU5hbWUgKyAnXFxcXGIoPzooW1wiXFwnXSlbXlwiXSo/KFxcXFwxKXxbXj5dKSo+JywgXCJpXCIpO1xyXG5cdFx0XHRcdFx0dmFyIHJjbG9zZSA9IG5ldyBSZWdFeHAoXCI8XFwvXCIgKyB0aGlzLm5vZGVOYW1lICsgXCI+JFwiLCBcImlcIik7XHJcblx0XHRcdFx0XHRyZXR1cm4gIHMucmVwbGFjZShyb3BlbiwgXCJcIikucmVwbGFjZShyY2xvc2UsIFwiXCIpO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0c2V0OiBmdW5jdGlvbihtYXJrdXApIHtcclxuXHRcdFx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxyXG5cdFx0XHRcdFx0bGV0IGNoaWxkO1xyXG5cdFx0XHRcdFx0d2hpbGUgKGNoaWxkID0gdGhpcy5sYXN0Q2hpbGQpXHJcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xyXG5cdFx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKG1hcmt1cCkuYXBwZW5kKCc8L3N2ZycpO1xyXG5cdFx0XHRcdFx0bGV0ICR0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cdFx0XHRcdFx0d2hpbGUgKCR0ZW1wLmZpcnN0Q2hpbGQpXHJcblx0XHRcdFx0XHRcdHRoaXMuYXBwZW5kQ2hpbGQoJHRlbXAuZmlyc3RDaGlsZCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9KVxyXG5cdH1cclxuXHQvLyBEZWZpbmUgdGhlIHRvRGF0YVVSTCBmb3IgU1ZHXHJcblx0U1ZHRWxlbWVudC5wcm90b3R5cGUudG9EYXRhVVJMID0gZnVuY3Rpb24odHlwZSwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRsZXQgX3N2ZyA9IHRoaXM7XHJcblxyXG5cdFx0bGV0IGRlYnVnID0gZnVuY3Rpb24obXNnKSB7fTtcclxuXHJcblx0XHRpZiAob3B0aW9uc1snZGVidWcnXSA9PSB0cnVlICYmIHR5cGVvZihjb25zb2xlKSAhPSAndW5kZWZpbmVkJylcclxuXHRcdFx0ZGVidWcgPSBmdW5jdGlvbihtc2cpIHsgY29uc29sZS5sb2coXCJTVkcudG9EYXRhVVJMOlwiLCBtc2cpOyB9O1xyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cG9ydFNWRygpIHtcclxuXHRcdFx0dmFyIHN2Z194bWwgPSBfc3ZnLm91dGVySFRNTDtcclxuXHRcdFx0dmFyIHN2Z19kYXRhdXJsID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcclxuXHRcdFx0ZGVidWcodHlwZSArIFwiIGxlbmd0aDogXCIgKyBzdmdfZGF0YXVybC5sZW5ndGgpO1xyXG5cclxuXHRcdFx0Ly8gTk9URSBkb3VibGUgZGF0YSBjYXJyaWVyXHJcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHN2Z19kYXRhdXJsKTtcclxuXHRcdFx0cmV0dXJuIHN2Z19kYXRhdXJsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGJhc2U2NGRhdGFVUkxlbmNvZGUocykge1xyXG5cdFx0XHR2YXIgYjY0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xyXG5cclxuXHRcdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vRE9NL3dpbmRvdy5idG9hXHJcblx0XHRcdGlmICh3aW5kb3cuYnRvYSkge1xyXG5cdFx0XHRcdGRlYnVnKFwidXNpbmcgd2luZG93LmJ0b2EgZm9yIGJhc2U2NCBlbmNvZGluZ1wiKTtcclxuXHRcdFx0XHRiNjQgKz0gYnRvYShzKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGN1c3RvbSBiYXNlNjQgZW5jb2RlclwiKTtcclxuXHRcdFx0XHRiNjQgKz0gQmFzZTY0LmVuY29kZShzKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0cmV0dXJuIGI2NDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBOYXRpdmUgZXhwb3J0IGRvZXNuJ3Qgd29yayB2ZXJ5IHdlbGwuIHNob3VsZCB1c2UgY2FudmcgaW5zdGVhZC5cclxuXHRcdGZ1bmN0aW9uIGV4cG9ydEltYWdlKHR5cGUpIHtcclxuXHRcdFx0dmFyIGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcblx0XHRcdHZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcblx0XHRcdC8vIFRPRE86IGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpLCBkbyBzb21lIHRyYW5zbGF0aW9uIG1hZ2ljP1xyXG5cclxuXHRcdFx0dmFyIHN2Z19pbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0dmFyIHN2Z194bWwgPSBfc3ZnLm91dGVySFRNTDtcclxuXHRcdFx0c3ZnX2ltZy5zcmMgPSBiYXNlNjRkYXRhVVJMZW5jb2RlKHN2Z194bWwpO1xyXG5cclxuXHRcdFx0c3ZnX2ltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRkZWJ1ZyhcImV4cG9ydGVkIGltYWdlIHNpemU6IFwiICsgW3N2Z19pbWcud2lkdGgsIHN2Z19pbWcuaGVpZ2h0XSk7XHJcblx0XHRcdFx0Y2FudmFzLndpZHRoID0gc3ZnX2ltZy53aWR0aDtcclxuXHRcdFx0XHRjYW52YXMuaGVpZ2h0ID0gc3ZnX2ltZy5oZWlnaHQ7XHJcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShzdmdfaW1nLCAwLCAwKTtcclxuXHJcblx0XHRcdFx0Ly8gU0VDVVJJVFlfRVJSIFdJTEwgSEFQUEVOIE5PV1xyXG5cdFx0XHRcdHZhciBpbWFnZV9kYXRhdXJsID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcclxuXHRcdFx0XHRkZWJ1Zyh0eXBlICsgXCIgbGVuZ3RoOiBcIiArIGltYWdlX2RhdGF1cmwubGVuZ3RoKTtcclxuXHJcblx0XHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soIGltYWdlX2RhdGF1cmwgKTtcclxuXHRcdFx0XHRlbHNlIGRlYnVnKFwiV0FSTklORzogbm8gY2FsbGJhY2sgc2V0LCBzbyBub3RoaW5nIGhhcHBlbnMuXCIpO1xyXG5cdFx0XHR9O1xyXG5cclxuXHRcdFx0c3ZnX2ltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0ZGVidWcoXHJcblx0XHRcdFx0XHRcIkNhbid0IGV4cG9ydCEgTWF5YmUgeW91ciBicm93c2VyIGRvZXNuJ3Qgc3VwcG9ydCBcIiArXHJcblx0XHRcdFx0XHRcIlNWRyBpbiBpbWcgZWxlbWVudCBvciBTVkcgaW5wdXQgZm9yIENhbnZhcyBkcmF3SW1hZ2U/XFxuXCIgK1xyXG5cdFx0XHRcdFx0XCJodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL1NWRyNOYXRpdmVfc3VwcG9ydFwiXHJcblx0XHRcdFx0KTtcclxuXHRcdFx0fTtcclxuXHJcblx0XHRcdC8vIE5PVEU6IHdpbGwgbm90IHJldHVybiBhbnl0aGluZ1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIGV4cG9ydEltYWdlQ2FudmcodHlwZSkge1xyXG5cdFx0XHRpZiAoIWNhbnZnKSByZXR1cm4gbnVsbDtcclxuXHRcdFx0bGV0IGNhbnZhcyA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycsIG51bGwsIHtkaXNwbGF5OiBcIm5vbmVcIn0pO1xyXG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xyXG5cdFx0XHRcdHZhciB4Y2FudmFzID0gbmV3IGpzQ2FudmFzICgnanNjYW52YXN0ZXN0Jyk7XHJcblx0XHRcdFx0eGNhbnZhcy5jYW52YXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHRcdFx0XHQvL3hjYW52YXMuY2FudmFzID0gY2FudmFzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAoIW9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkge1xyXG5cdFx0XHRcdGNhbnZnKGNhbnZhcywgX3N2Zy5vdXRlckhUTUwpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGxldCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIHx8IDA7XHJcblx0XHRcdFx0bGV0IHNjYWxlID0gMS4wO1xyXG5cdFx0XHRcdGxldCB0cmFuc2xhdGUgPSBbMCwgMF07XHJcblx0XHRcdFx0bGV0IGJib3ggPSBfc3ZnLmdldEJCb3goKTtcclxuXHRcdFx0XHRkZWJ1ZyhcImRldGVjdGVkIHN2ZyBkaW1lbnNpb25zIFwiICsgW2Jib3gueCwgYmJveC55LCBiYm94LndpZHRoLCBiYm94LmhlaWdodF0pO1xyXG5cdFx0XHRcdGxldCB0cmFuc2Zvcm0gPSBfc3ZnLmZpcnN0RWxlbWVudENoaWxkLmdldEF0dHJpYnV0ZSgndHJhbnNmb3JtJyk7XHJcblx0XHRcdFx0aWYgKHRyYW5zZm9ybSkge1xyXG5cdFx0XHRcdFx0ZGVidWcoJ2RldGVjdGVkIHN2ZyB0cmFuc2Zvcm0gJyArIHRyYW5zZm9ybSk7XHJcblx0XHRcdFx0XHR0cmFuc2Zvcm0gPSBTVkdSZW5kZXJlci50cmFuc2Zvcm0odHJhbnNmb3JtKTtcclxuXHRcdFx0XHRcdHRyYW5zbGF0ZSA9IHRyYW5zZm9ybS50cmFuc2xhdGU7XHJcblx0XHRcdFx0XHRzY2FsZSA9IHRyYW5zZm9ybS5zY2FsZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdFx0XHRidWYuYXBwZW5kKCc8c3ZnIHdpZHRoPVwiJykuYXBwZW5kKGJib3gud2lkdGggKyAyKnBhZGRpbmcpLmFwcGVuZCgncHhcIiBoZWlnaHQ9XCInKS5hcHBlbmQoYmJveC5oZWlnaHQgKyAyKnBhZGRpbmcpLmFwcGVuZCgncHhcIj48ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJylcclxuXHRcdFx0XHRcdC5hcHBlbmQoLWJib3gueCt0cmFuc2xhdGVbMF0rcGFkZGluZykuYXBwZW5kKCcsJykuYXBwZW5kKC1iYm94LnkrdHJhbnNsYXRlWzFdK3BhZGRpbmcpLmFwcGVuZCgnKXNjYWxlKCcpLmFwcGVuZChzY2FsZSkuYXBwZW5kKCcpXCI+JylcclxuXHRcdFx0XHRcdC5hcHBlbmQoX3N2Zy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwpLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xyXG5cdFx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xyXG5cdFx0XHRcdFx0eGNhbnZhcy5jb21waWxlKGJ1Zi50b1N0cmluZygpLCBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHhjYW52YXMudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHR9IGVsc2VcclxuXHRcdFx0XHRcdGNhbnZnKGNhbnZhcywgYnVmLnRvU3RyaW5nKCkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBpbWFnZV9kYXRhdXJsID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcclxuXHRcdFx0aWYgKG9wdGlvbnMuY2FsbGJhY2spIG9wdGlvbnMuY2FsbGJhY2soIGltYWdlX2RhdGF1cmwgKTtcclxuXHRcdFx0Y2FudmFzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2FudmFzKTtcclxuXHRcdFx0cmV0dXJuIGltYWdlX2RhdGF1cmw7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0eXBlKSB0eXBlID0gXCJpbWFnZS9zdmcreG1sXCI7XHJcblxyXG5cdFx0aWYgKG9wdGlvbnMua2VlcE5vblNhZmUpIGRlYnVnKFwiTk9URToga2VlcE5vblNhZmUgaXMgTk9UIHN1cHBvcnRlZCBhbmQgd2lsbCBiZSBpZ25vcmVkIVwiKTtcclxuXHRcdGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpIGRlYnVnKFwiTk9URToga2VlcE91dHNpZGVWaWV3cG9ydCBpcyBvbmx5IHN1cHBvcnRlZCB3aXRoIGNhbnZnIGV4cG9ydGVyLlwiKTtcclxuXHJcblx0XHRzd2l0Y2ggKHR5cGUpIHtcclxuXHRcdFx0Y2FzZSBcImltYWdlL3N2Zyt4bWxcIjpcclxuXHRcdFx0XHRyZXR1cm4gZXhwb3J0U1ZHKCk7XHJcblx0XHRcdGNhc2UgXCJpbWFnZS9wbmdcIjpcclxuXHRcdFx0Y2FzZSBcImltYWdlL2pwZWdcIjpcclxuXHRcdFx0Y2FzZSBcImphdmFzY3JpcHRcIjpcclxuXHRcdFx0XHRpZiAoIW9wdGlvbnMucmVuZGVyZXIpIHtcclxuXHRcdFx0XHRcdGlmICh3aW5kb3cuY2FudmcpIG9wdGlvbnMucmVuZGVyZXIgPSBcImNhbnZnXCI7XHJcblx0XHRcdFx0XHRlbHNlIG9wdGlvbnMucmVuZGVyZXI9XCJuYXRpdmVcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLnJlbmRlcmVyKSB7XHJcblx0XHRcdFx0XHRjYXNlIFwiY2FudmdcIjpcclxuXHRcdFx0XHRcdFx0ZGVidWcoXCJ1c2luZyBjYW52ZyByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgaW1hZ2UgZXhwb3J0XCIpO1xyXG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKTtcclxuXHRcdFx0XHRcdGNhc2UgXCJuYXRpdmVcIjpcclxuXHRcdFx0XHRcdFx0ZGVidWcoXCJ1c2luZyBuYXRpdmUgcmVuZGVyZXIgZm9yIFwiICsgdHlwZSArIFwiIGV4cG9ydC4gVEhJUyBNSUdIVCBGQUlMLlwiKTtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cG9ydEltYWdlKHR5cGUpO1xyXG5cdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0ZGVidWcoXCJ1bmtub3duIGltYWdlIHJlbmRlcmVyIGdpdmVuLCBkb2luZyBub3RpbmcgKFwiICsgb3B0aW9ucy5yZW5kZXJlciArIFwiKVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0ZGVidWcoXCJTb3JyeSEgRXhwb3J0aW5nIGFzICdcIiArIHR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCFcIik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xyXG5cdHJlbmRlcigpIHtcclxuXHRcdGxldCByZXN1bHQgPSBzdXBlci5yZW5kZXIoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0bGV0IHJvb3QgPSB0aGlzLmdyYXBoLmN1cnJlbnRSb290O1xyXG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPHN2ZyB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicpO1xyXG5cdFx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xyXG5cdFx0XHRidWYuYXBwZW5kKCc8ZyB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJykuYXBwZW5kKHRbMF0pLmFwcGVuZCgnLCcpLmFwcGVuZCh0WzFdKS5hcHBlbmQoJylzY2FsZSgnKS5hcHBlbmQodGhpcy5zY2FsZSkuYXBwZW5kKCcpXCI+Jyk7XHJcblx0XHRcdGJ1Zi5hcHBlbmQodGhpcy5yZW5kZXJEZWZzKCkpO1xyXG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcclxuXHRcdFx0YnVmLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xyXG5cdFx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSBidWYudG9TdHJpbmcoKTtcclxuXHRcdFx0dGhpcy5zdmcgPSB0aGlzLmJveC5maXJzdEVsZW1lbnRDaGlsZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHJlbmRlckRlZnMoKSB7XHJcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcignPGRlZnM+Jyk7XHJcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xyXG5cdFx0bGV0IG1hcmtlcnMgPSB0aGlzLmdyYXBoLm1hcmtlcnM7XHJcblx0XHRpZiAobWFya2Vycy5sZW5ndGggPiAwKVxyXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xyXG5cdFx0YnVmLmFwcGVuZCgnPC9kZWZzPicpO1xyXG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdH1cclxuXHJcblx0cmVmcmVzaCgpIHtcclxuXHRcdGlmICghdGhpcy5zdmcpIHJldHVybjtcclxuXHRcdGxldCBnID0gdGhpcy5zdmcucXVlcnlTZWxlY3RvcignZycpO1xyXG5cdFx0bGV0IHQgPSB0aGlzLnRyYW5zbGF0ZTtcclxuXHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0WzBdICsgJywnICsgdFsxXSArICcpc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKScpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgc3RyMSwgc3RyMjtcclxuXHRcdG1hcmtlcnMuZm9yRWFjaChmdW5jdGlvbihtYXJrZXIpIHtcclxuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xyXG5cdFx0XHRzdHIyID0gbWFya2VyLnNoYXBlO1xyXG5cdFx0XHRpZiAoIV8uaXNTdHJpbmcoc3RyMikpXHJcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XHJcblx0XHRcdHN0cjEgPSBzdHIxLnJlcGxhY2UoL1xcI1xce3NoYXBlXFx9Lywgc3RyMik7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoc3RyMSk7XHJcblx0XHR9LCB0aGlzKTtcclxuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW5kZXJMYWJlbChib3gpIHtcclxuXHRcdHJldHVybiB0aGlzLlRFTVBMQVRFU1snTGFiZWwnXShib3gpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIHJlbmRlclNoYXBlKHNoYXBlKSB7XHJcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcclxuXHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcclxuXHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGF0aERhdGEoc2hhcGUpIHtcclxuXHRcdGxldCBwb2ludHMgPSBzaGFwZS5wb2ludHM7XHJcblx0XHRsZXQgY29udHJvbFB0cyA9IHNoYXBlLmNvbnRyb2xQdHM7XHJcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcclxuXHJcblx0XHRpZiAoIWNvbnRyb2xQdHMgJiYgc2hhcGUucm91bmQpIHtcclxuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cclxuXHRcdFx0bGV0IG5ld1B0cyA9IFtdO1xyXG5cdFx0XHRjb250cm9sUHRzID0gW107XHJcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcclxuXHRcdFx0bmV3UHRzLnB1c2gocHJldik7XHJcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XHJcblx0XHRcdFx0Ly8gc2V0IHRoZSBjb250cm9sIHBvaW50IGZpcnN0LlxyXG5cdFx0XHRcdGNvbnRyb2xQdHNbMippXSA9IFtuZXh0LCBuZXh0XTtcclxuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxyXG5cdFx0XHRcdGQxID0gcHJldi5kaXN0YW5jZShuZXh0KTtcclxuXHRcdFx0XHRkMiA9IG5leHQuZGlzdGFuY2UocG9pbnRzW2krMV0pO1xyXG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcclxuXHRcdFx0XHQvLyBzcGxpdCB0aGUgcG9pbnQgaW50byB0d28uXHJcblx0XHRcdFx0bmV3UHRzLnB1c2gobmV4dC5nZXREaXJlY3Rpb24ocHJldikuc2NhbGUoY29ybmVyKS50cmFuc2xhdGUobmV4dCkpO1xyXG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XHJcblx0XHRcdFx0cHJldiA9IG5leHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XHJcblx0XHRcdHBvaW50cyA9IG5ld1B0cztcclxuXHRcdH1cclxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cG9pbnQgPSBwb2ludHNbaV07XHJcblx0XHRcdGlmIChpID09IDApXHJcblx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcclxuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQoJyBDICcpO1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBjb250cm9sUHRzW2ldLmxlbmd0aDsgaisrKVxyXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwb2ludCk7XHJcblx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdGxldCBkID0gU1ZHUmVuZGVyZXIuZ2V0UGF0aERhdGEoc2hhcGUpO1xyXG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcclxuXHRcdFx0YnVmLmFwcGVuZCgnPHBhdGggc3R5bGU9XCJzdHJva2U6IHdoaXRlOyBzdHJva2Utd2lkdGg6IDk7IHZpc2liaWxpdHk6IGhpZGRlbjsgcG9pbnRlci1ldmVudHM6IHN0cm9rZTtcIiBkPVwiJylcclxuXHRcdFx0XHQuYXBwZW5kKGQpLmFwcGVuZCgnXCIvPicpO1xyXG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XHJcblx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIgfHwgc2hhcGUuZW5kTWFya2VyKSB7XHJcblx0XHRcdGJ1Zi5hcHBlbmQoJyBzdHlsZT1cIicpO1xyXG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXHJcblx0XHRcdFx0YnVmLmFwcGVuZCgnbWFya2VyLXN0YXJ0OiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLnN0YXJ0TWFya2VyKSA/IHNoYXBlLnN0YXJ0TWFya2VyIDogc2hhcGUuc3RhcnRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcclxuXHRcdFx0aWYgKHNoYXBlLmVuZE1hcmtlcilcclxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcclxuXHRcdFx0YnVmLmFwcGVuZCgnXCInKTtcclxuXHRcdH1cclxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XHJcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgYXBwZW5kQ29udGVudChlbCwgY29udGVudCkge1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcclxuXHRcdGxldCB0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xyXG5cclxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXHJcblx0XHRcdGVsLmFwcGVuZENoaWxkKHRlbXAuZmlyc3RDaGlsZCk7XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgdHJhbnNmb3JtKHRyYW5zZm9ybSkge1xyXG5cdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXSwgc2NhbGUgPSAxLjA7XHJcblx0XHQvL1xyXG5cdFx0bGV0IHBhcnRzID0gdHJhbnNmb3JtLm1hdGNoKC90cmFuc2xhdGVcXChcXHMqKFteKV0rKS8pO1xyXG5cdFx0aWYgKHBhcnRzKSB7XHJcblx0XHRcdGxldCBtID0gcGFydHNbMV0udHJpbSgpLm1hdGNoKC8oW1xcZC4tXSspWyAsXShbXFxkLi1dKykvKTtcclxuXHRcdFx0aWYgKG0pIHtcclxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSBwYXJzZUZsb2F0KG1bMV0pIHx8IDA7XHJcblx0XHRcdFx0dHJhbnNsYXRlWzFdID0gcGFyc2VGbG9hdChtWzJdKSB8fCAwO1xyXG5cdFx0XHR9IGVsc2VcclxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSB0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KHBhcnRzWzFdKTtcclxuXHRcdH1cclxuXHRcdHBhcnRzID0gdHJhbnNmb3JtLm1hdGNoKC9zY2FsZVxcKFxccyooW14pXSspLyk7XHJcblx0XHRpZiAocGFydHMpXHJcblx0XHRcdHNjYWxlID0gcGFyc2VGbG9hdChwYXJ0c1sxXSkgfHwgMS4wO1xyXG5cclxuXHRcdHJldHVybiB7dHJhbnNsYXRlLCBzY2FsZX07XHJcblx0fVxyXG59XHJcblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcclxuXHQkcm9vdDogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiPiN7Y2hpbGRyZW59PC9nPicsXHJcblx0JG5vZGU6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIiBzdHlsZT1cIiR7c3R5bGV9XCIgbnM9XCIke25hbWVzcGFjZX1cIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoJHt4fSwke3l9KVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+JyxcclxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+JyxcclxuXHRFbGxpcHNlOiAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIke3dpZHRoLzJ9XCIgcnk9XCIke2hlaWdodC8yfVwiLz4nLFxyXG5cdFJlY3RhbmdsZTogJzxyZWN0IHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgcng9XCI5XCIgcnk9XCI5XCIvPicsXHJcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxyXG5cdFJob21idXM6ICc8cG9seWdvbiBwb2ludHM9XCIwLCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwwXCIvPicsXHJcblx0SGV4YWdvbjogZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xyXG5cdFx0aWYgKHZlcnRpY2FsKVxyXG5cdFx0XHRyZXR1cm4gJzxwb2x5Z29uIHBvaW50cz1cIjAsJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sJHstaGVpZ2h0LzR9ICR7d2lkdGgvMn0sJHtoZWlnaHQvNH0gMCwke2hlaWdodC8yfSAkey13aWR0aC8yfSwke2hlaWdodC80fSAkey13aWR0aC8yfSwkey1oZWlnaHQvNH1cIi8+JztcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwwICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvNH0sJHstaGVpZ2h0LzJ9ICR7d2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzR9LCR7aGVpZ2h0LzJ9XCIvPic7XHJcblx0fSxcclxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoJzxwb2x5Z29uIHBvaW50cz1cIicpO1xyXG5cdFx0c2hhcGUucG9pbnRzLmZvckVhY2goZnVuY3Rpb24ocHQpe1xyXG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xyXG5cdFx0fSk7XHJcblx0XHRidWYucmVtb3ZlTGFzdCgpO1xyXG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xyXG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdH0sXHJcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xyXG5cdFx0cmV0dXJuICc8aW1hZ2UgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bGluazpocmVmPVwiJyArIGNvbmZpZy5pbWFnZSArICdcIi8+JztcclxuXHR9LFxyXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XHJcblx0XHRyZXR1cm4gYFxyXG48bWFya2VyIGlkPVwiJHttYXJrZXIuaWR9XCIgbWFya2VyV2lkdGg9XCIke21hcmtlci5zaXplfVwiIG1hcmtlckhlaWdodD1cIiR7bWFya2VyLnNpemV9XCIgcmVmeD1cIiR7bWFya2VyLnJlZlswXX1cIiBcclxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxyXG5tYXJrZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCIgJHttYXJrZXIuZmlsbCA/IGBzdHlsZT1cInN0cm9rZTogJHttYXJrZXIuZmlsbH07ZmlsbDoke21hcmtlci5maWxsfVwiYCA6ICcnfT4je3NoYXBlfTwvbWFya2VyPlxyXG5gLnRyaW0oKTtcclxuXHR9LFxyXG5cdEdyaWQ6IGZ1bmN0aW9uKHNpemUpIHtcclxuXHRcdHJldHVybiBgXHJcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cclxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cclxuXHQ8ZWxsaXBzZSBjeD1cIjBcIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cclxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cclxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIiR7c2l6ZX1cIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cclxuPC9wYXR0ZXJuPmAudHJpbSgpO1xyXG5cdH0sXHJcblx0TGFiZWw6IF8udGVtcGxhdGUoYFxyXG48JSB2YXIgYm94ID0gXy5oYXMoZGF0YSwgXCJkeFwiKSA/IGRhdGEgOiAoZGF0YS5nZXRMYWJlbEJveCA/IGRhdGEuZ2V0TGFiZWxCb3goKSA6IG51bGwpOyBcclxuICAgaWYgKGJveCkgeyU+XHJcblx0PGcgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5jbGFzcykgeyU+Y2xhc3M9XCI8JT1ib3guY29uZmlnLmNsYXNzJT5cIjwlfSU+XFxcclxuXHRcdDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcubnMpIHslPm5zPVwiPCU9Ym94LmNvbmZpZy5ucyU+XCI8JX0lPlxcXHJcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmlubGluZVN0eWxlKSB7JT5cXFxyXG5cdFx0XHRmb250LXNpemU9XCI8JT1ib3guY29uZmlnLmZvbnRTaXplJT5cIlxcXHJcblx0XHRcdGZvbnQtZmFtaWx5PVwiPCU9Ym94LmNvbmZpZy5mb250RmFtaWx5JT5cIlxcXHJcblx0XHRcdGZvbnQtd2VpZ2h0PVwiPCUgaWYgKGJveC5ib2xkKSB7JT5ib2xkPCV9IGVsc2UgeyU+bm9ybWFsPCV9JT5cIlxcXHJcblx0XHRcdDwlIGlmIChib3gudW5kZXJsaW5lKSB7JT50ZXh0LWRlY29yYXRpb249XCJ1bmRlcmxpbmVcIjwlfSU+XFxcclxuXHRcdFx0PCUgaWYgKGJveC5pdGFsaWMpIHslPmZvbnQtc3R5bGU9XCJpdGFsaWNcIjwlfSU+XFxcclxuXHRcdDwlfSU+XFxcclxuXHRcdHRleHQtYW5jaG9yPVwiPCU9Ym94LmFuY2hvciU+XCJcXFxyXG5cdFx0dHJhbnNmb3JtPVwidHJhbnNsYXRlKDwlPWJveC5ib3VuZHMueCU+LDwlPWJveC5ib3VuZHMueSU+KTwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcucm90YXRpb24pIHslPnJvdGF0ZSg8JT1ib3guY29uZmlnLnJvdGF0aW9uJT4gPCU9Ym94LnBpdm90WzBdJT4gPCU9Ym94LnBpdm90WzFdJT4pPCV9JT5cIj5cclxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxyXG5cdFx0PHJlY3QgeD1cIjwlPS1ib3guYm91bmRzLndpZHRoLzIlPlwiIHk9XCI8JT0tYm94LmJvdW5kcy5oZWlnaHQvMiU+XCIgd2lkdGg9XCI8JT1ib3guYm91bmRzLndpZHRoJT5cIiBoZWlnaHQ9XCI8JT1ib3guYm91bmRzLmhlaWdodCU+XCIgc3R5bGU9XCI8JT1ib3guY29uZmlnLmJhY2tncm91bmRTdHlsZSU+XCIvPlxyXG5cdDwlIH0gaWYgKF8uaXNBcnJheShib3gubGFiZWwpKSB7IFxyXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxyXG5cdFx0XHQ8dGV4dCA8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLnRleHRTdHlsZSkgeyU+c3R5bGU9XCI8JT1ib3guY29uZmlnLnRleHRTdHlsZSU+XCI8JX0lPlxcXHJcblx0XHRcdFx0ZHg9XCI8JT1ib3guZHglPlwiIGR5PVwiPCU9Ym94LmR5ICsgYm94LmxpbmVIZWlnaHQgKiBsaW5lJT5cIj48JT12YWx1ZSU+PC90ZXh0PlxyXG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxyXG5cdFx0XHQ8dGV4dD48JT1ib3gubGFiZWwlPjwvdGV4dD5cclxuXHRcdDwlfSU+XHJcblx0XHQ8JSBpZiAoYm94LmNvbmZpZy50aXRsZSkgeyU+XHJcblx0XHRcdDx0aXRsZT48JT1ib3guY29uZmlnLnRpdGxlJT48L3RpdGxlPlxyXG5cdFx0PCV9JT5cclxuXHQ8L2c+XHJcbjwlfSU+XHJcbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSkgICAvL1RPRE8gYWRkIG1vcmUgaW5saW5lIHRleHQgc3R5bGVzLlxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU1ZHUmVuZGVyZXI7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==