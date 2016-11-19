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
						var range = this.randomNoise / this.step;
						var randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA1NDE0Mjk5NDNlMGI4ZTZlY2M4ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZFNoYXBlIiwiRXZlbnRzIiwiQmFzZTY0IiwiQ2FjaGUiLCJVdGlscyIsIkRvbVV0aWxzIiwiU3RyaW5nQnVmZmVyIiwiUG9pbnQiLCJMaW5lIiwiU2hhcGUiLCJSZWN0YW5nbGUiLCJFbGxpcHNlIiwiTGluayIsIkV2ZW50RGlzcGF0Y2hlciIsIkxhYmVsIiwiTWFya2VyIiwiR3JhcGgiLCJDZWxsIiwiTm9kZSIsIkVkZ2UiLCJMYXlvdXQiLCJGbG93TGF5b3V0IiwiUmVuZGVyZXIiLCJTVkdSZW5kZXJlciIsIkdyYXBoQmVoYXZpb3IiLCJTZWxlY3Rpb25CZWhhdmlvciIsIl9rZXlTdHIiLCJlbmNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJhZGRFdmVudEhhbmRsZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsIl9kZWJ1Z2dpbmciLCJfZGVidWdBbGwiLCJ0eXBlUmVnaXN0cnkiLCJzcGxpY2UiLCJBcnJheSIsInR5cGUiLCJuYW1lc3BhY2UiLCJuYW1lIiwiTWFwIiwiZ2V0Iiwic2V0IiwiY3JlYXRlVHlwZSIsInByb3BzIiwiZGVmYXVsdFR5cGUiLCJleHRlbmQiLCJleHRlbmRzIiwiY29uZmlnIiwiXyIsImFzc2lnbiIsInByb3RvdHlwZSIsInR5cGVOYW1lIiwibG9nIiwiYnVpbGRUeXBlcyIsInR5cGVzIiwicmVtb3ZlIiwiZGVmYXVsdHNEZWVwIiwiZm9yRWFjaCIsImNoaWxkIiwicGFyZW50IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiU3Vycm9nYXRlIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiaW5pdENvbmZpZyIsIm9iaiIsImNBcnIiLCJzdXBlciIsImFwcGx5IiwiREVGQVVMVFMiLCJwcm9wIiwidmFsdWUiLCJnZXRDb25zdHJ1Y3RvciIsImpzQ2xhc3MiLCJkZWZhdWx0Q2xhc3MiLCJpc1N0cmluZyIsImV2YWwiLCJkZWJ1ZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzdWJzdHJpbmciLCJpbmZvIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImJvdW5kcyIsImdlb21ldHJ5IiwieCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsInBvcyIsImFuY2hvclgiLCJvZmZzZXRYIiwiYW5jaG9yWSIsIm9mZnNldFkiLCJ1bnNjYWxlIiwidCIsInNjYWxlIiwibyIsImdldFByb3BlcnR5IiwiaGFzIiwiaXNGdW5jdGlvbiIsImFQdCIsInNxcnQiLCJwMiIsImRpc3QiLCJkaXN0YW5jZSIsImFuZ2xlIiwiY29zIiwiUEkiLCJzaW4iLCJjbG9uZSIsInJvdGF0ZSIsInJlY3QiLCJ2ZXJ0aWNhbCIsIlciLCJOIiwiUyIsIkUiLCJORSIsIk5XIiwiU0UiLCJTVyIsImVsIiwidyIsImgiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwdCIsImNvbnRhaW5zIiwicHQxIiwicHQyIiwiaG9yaXpvbnRhbCIsImNvbnRhaW5zMSIsImNvbnRhaW5zMiIsIm91dFB0Iiwib3J0aG9nb25hbCIsImR4IiwiZHkiLCJhbHBoYSIsImF0YW4yIiwicCIsInBpIiwicGkyIiwiYmV0YSIsInRhbiIsImRpciIsImdldERpcmVjdGlvbiIsInBvaW50IiwiZGlyZWN0aW9uIiwicHRzIiwibWFyZ2luIiwiaXNBcnJheSIsIm1pbiIsIm1heCIsInJlY3RzIiwibWlueCIsIm1pbnkiLCJtYXh4IiwiSW5maW5pdHkiLCJtYXh5IiwiZWFjaCIsInIiLCJyZWdpc3RyeSIsImRlZmF1bHRzIiwicmVmUHQiLCJnZXRQZXJpbWV0ZXIiLCJ2aWV3IiwidGVtcGxhdGUiLCJnZXRUZW1wbGF0ZSIsImlzSUUiLCJzQWdlbnQiLCJ1c2VyQWdlbnQiLCJJZHgiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNGaXJlRm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc0Nocm9tZSIsInJhdyIsImlzTWFjIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImlzV2luZG93cyIsImFwcFZlcnNpb24iLCJpc0xpbnV4IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJodG1sIiwic2V0RWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnRCeVN0cmluZyIsInN0ciIsInRlbXAiLCJjaGlsZE5vZGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0ZXN0RWxlbWVudCIsIm5vZGUiLCJtZXRob2QiLCJub2RlVHlwZSIsImdldEFuY2VzdG9yQnkiLCJwYXJlbnROb2RlIiwiZ2V0UG9zaXRpb24iLCJjb250ZXh0IiwiYm9keSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRleHRSZWN0IiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJtb3ZlIiwiZ2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplIiwicHJlbG9hZEltYWdlcyIsImFycmF5IiwibGlzdCIsImxvYWRlZCIsImltZyIsInRoYXQiLCJJbWFnZSIsIm9ubG9hZCIsImluZGV4Iiwic3JjIiwiZ2V0SW1hZ2VJbmZvIiwiZG93bmxvYWRGaWxlIiwiZGF0YSIsIm1pbWUiLCJzcGxpdCIsImVuY29kZWQiLCJhdG9iIiwiZGVjb2RlVVJJIiwiR2V0QmxvYiIsIm1zU2F2ZUJsb2IiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiQmxvYiIsIm9wZW5JbWFnZSIsImltYWdlIiwibXlXaW5kb3ciLCJvcGVuIiwibXlEb2N1bWVudCIsImV2ZW50RnJvbUlucHV0IiwiZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJidWZmZXIiLCJzdHVmZiIsImNvbmNhdCIsInBvcCIsInNlcCIsImpvaW4iLCJzdGFydCIsImVuZCIsImwiLCJjb3NhIiwiZG90UHJvZHVjdCIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJkZW5vbSIsIm51bWVfYSIsIm51bWVfYiIsInVhIiwidWIiLCJpbnRlcnNlY3Rpb25YIiwiaW50ZXJzZWN0aW9uWSIsImEiLCJiIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0eCIsInR5IiwiZCIsImYiLCJnIiwiZGV0IiwieG91dDEiLCJ4b3V0MiIsInlvdXQxIiwieW91dDIiLCJkaXN0MSIsInBvdyIsImRpc3QyIiwieG91dCIsInlvdXQiLCJkZWZhdWx0Q29uZmlnIiwic2hvd0dhdWdlIiwiZGVmYXVsdEdlb21ldHJ5IiwibGlua1R5cGVzIiwidGVybWluYWxWaXN1YWwiLCJzaGFwZUNvbmZpZyIsInN0YXJ0TWFya2VyIiwiZW5kTWFya2VyIiwic3RhcnROb3JtYWwiLCJlbmROb3JtYWwiLCJyZW5kZXJMaW5rIiwiaXNOdW1iZXIiLCJwb2ludHMiLCJ0cmFuc2xhdGUiLCJnZXRTY2FsZWQiLCJsaW5rQ2xhc3MiLCJEaXJlY3RMaW5rIiwiQmV6aWVyTGluayIsImN0cmxwdHMiLCJjb250cm9sUHRzIiwicDEiLCJwMyIsInA0IiwicyIsIkVudGl0eVJlbGF0aW9ucyIsInNvdXJjZSIsIlBvcnQiLCJnZXRCb3VuZHMiLCJlZGdlIiwiaXNTb3VyY2VMZWZ0IiwiaXNUYXJnZXRMZWZ0IiwicmVzdWx0IiwiZ2V0Q2VudGVyWSIsInhlIiwieWUiLCJzZWciLCJzZWdtZW50IiwiZGVwIiwiYXJyIiwibWlkWSIsIk1hbmhhdHRhbiIsIk1JTl9CVUZGRVIiLCJhdXRvUm91dGUiLCJyYW5kb21Ob2lzZSIsInN0ZXAiLCJtYXhDaGFubmVsV2lkdGgiLCJjb250YWluZXIiLCJib3hlcyIsInN0YXJ0Qm94IiwiZW5kQm94Iiwic2lkZSIsInNpZGUyIiwiYm94IiwiaW50ZXJzZWN0IiwiaiIsImNoYW5uZWwiLCJjaGFubmVsMiIsInN0YXJ0UGFkZGluZyIsImVuZFBhZGRpbmciLCJfZ2V0Q2hhbm5lbCIsIl9nZXRGaXJzdEludGVyc2VjdGlvbiIsIl9nZXRSb3V0ZVRlbmRlbmN5IiwiX2hhc0ludGVyc2VjdGlvbiIsIl9tb3ZlU2VnbWVudCIsImJyZWFrUHQiLCJfZ2V0Um91dGVEaXJlY3Rpb24iLCJnZXRDZW50ZXIiLCJib3gxIiwiYm94MiIsImdldExlZnQiLCJnZXRSaWdodCIsImdldEJvdHRvbSIsImdldFRvcCIsImdldFRyYW5zbGF0ZWQiLCJyb3V0ZSIsIl9tZXJnZVNlZ21lbnRzIiwiZ2V0Q29tbW9uQW5jZXN0b3IiLCJnZXREZXNjZW5kYW50cyIsImV4Y2x1ZGVGcm9tUm91dGluZyIsImlzQW5jZXN0b3IiLCJyYW5nZSIsInJhbmRvbU51bWJlciIsImZsb29yIiwicmFuZG9tIiwic3RhcnRCdWZmZXIiLCJlbmRCdWZmZXIiLCJzdGFydEJ1ZmZlck5vcm1hbCIsImVuZEJ1ZmZlck5vcm1hbCIsIm1pZGRsZSIsInBydW5lUHRzIiwiZGV0ZWN0SW50ZXJzZWN0aW9uIiwic2F2ZWRJbmRleCIsInNhdmVkU2lkZSIsImgxIiwiaDIiLCJlcXVhbHMiLCJLZXlVdGlscyIsInN0b3BQcm9wYWdhdGlvbiIsInJvb3QiLCJ6b29tU2NhbGUiLCJyb290TlMiLCJnZXRBdHRyaWJ1dGUiLCJsaXN0ZW5lcnMiLCJkcmFnZ2luZyIsImhhbmRsZXIiLCJiaW5kIiwiaGFuZGxlRXZlbnQiLCJzdGFydGVkIiwiZW50ZXJTdGFjayIsIm9uIiwic3RhcnRLZXlzIiwib2ZmIiwic3RvcEtleXMiLCJldmVudCIsImJ1ZiIsIm5zIiwic3RhY2siLCJpc1Jvb3QiLCJzdGFydHNXaXRoIiwicm9vdFRhcmdldCIsIm5zVGFyZ2V0IiwicHJlcGVuZCIsInRhcmdldFN0YWNrIiwidG9TdHJpbmciLCJpc0tleUV2ZW50IiwiZ2V0S2V5RXZlbnQiLCJnZXRFdmVudEluZm8iLCJ3aGVlbERlbHRhIiwiYnV0dG9uIiwiZHJhZ09iamVjdCIsIm1vdXNlIiwiZHJhZ1BvcyIsIm1vdXNlbW92ZSIsImN1cnJlbnRQb3MiLCJkaXNwYXRjaCIsIm1vdXNldXAiLCJwcmV2ZW50RGVmYXVsdCIsInNpbXVsYXRlRW50ZXJMZWF2ZSIsImxhc3QiLCJjbGVhckVudGVyU3RhY2siLCJrIiwiZ2V0TlMiLCJ2YWwiLCJhcHBlbmQiLCJpdGVtIiwibnNUeXBlIiwicmVnZXhwIiwibGlzdGVuZXIiLCJjYWxsYmFjayIsImxhc3RQb3NpdGlvbiIsInJlZ2lzdGVyS2V5IiwiZ2V0S2V5RGF0YSIsImN0cmwiLCJhbHQiLCJzaGlmdCIsIm1ldGEiLCJjb2RlIiwidW5yZWdpc3RlcktleSIsInpJbmRleCIsInJlZ2lzdGVyIiwiUmVnRXhwIiwic3RvcCIsInJlZ2lzdGVyZWRUeXBlIiwiY2hhbmdlZFRvdWNoZXMiLCJzdmciLCJvd25lclNWR0VsZW1lbnQiLCJjcmVhdGVTVkdQb2ludCIsImNsaWVudFgiLCJjbGllbnRZIiwibWF0cml4VHJhbnNmb3JtIiwiZ2V0U2NyZWVuQ1RNIiwiaW52ZXJzZSIsImNsaWVudExlZnQiLCJjbGllbnRUb3AiLCJLRVkiLCJBTFQiLCJCQUNLX1NQQUNFIiwiQ0FQU19MT0NLIiwiQ09OVFJPTCIsIkRFTEVURSIsIkRPV04iLCJFTkQiLCJFTlRFUiIsIkVTQ0FQRSIsIkhPTUUiLCJMRUZUIiwiTUVUQSIsIk5VTV9MT0NLIiwiUEFHRV9ET1dOIiwiUEFHRV9VUCIsIlBBVVNFIiwiUFJJTlRTQ1JFRU4iLCJSSUdIVCIsIlNDUk9MTF9MT0NLIiwiU0hJRlQiLCJTUEFDRSIsIlRBQiIsIlVQIiwiS2V5Ym9hcmRFdmVudCIsImtleUNvZGUiLCJ3aGljaCIsImN0cmxLZXkiLCJhbHRLZXkiLCJzaGlmdEtleSIsIm1ldGFLZXkiLCJub2RlRGVmYXVsdHMiLCJyb2xlIiwiZHJhZ2dhYmxlIiwic2VsZWN0YWJsZSIsImVkaXRhYmxlIiwicmVzaXphYmxlIiwic291cmNlYWJsZSIsInRhcmdldGFibGUiLCJ2aXNpYmxlIiwiZWRnZURlZmF1bHRzIiwiaWQiLCJzaXplIiwiY29sb3IiLCJ1bmlxdWVJZCIsIm1vZGVsIiwibm9kZXMiLCJlZGdlcyIsInNlbGVjdGlvbiIsImRlc3Ryb3llZCIsIm5vZGVUeXBlcyIsImVkZ2VUeXBlcyIsIm1hcmtlcnMiLCJtYXJrZXIiLCJtYXJrZXJDb25maWciLCJnZXRNYXJrZXIiLCJsb2FkTW9kZWwiLCJjdXJyZW50Um9vdCIsIk5vZGVDbGFzcyIsImdldEpTQ2xhc3MiLCJhZGRDaGlsZCIsImZyb20iLCJ0byIsIkVkZ2VDbGFzcyIsImFkZE5vZGUiLCJhZGRFZGdlIiwiY2hpbGRyZW4iLCJ3aXRob3V0IiwiYWxsb3dEYW5nbGluZ0VkZ2VzIiwibXVsdGlDb25uZWN0IiwicmVhZE9ubHkiLCJ2aWV3T25seSIsImdyYXBoIiwiaW5FZGdlcyIsIm91dEVkZ2VzIiwicG9ydHMiLCJ1bmRlZmluZWQiLCJyZW5kZXIiLCJwb3J0TmFtZSIsImVuZFB0Iiwic2hhcGUiLCJnZXRTaGFwZSIsImxhYmVsIiwiZGVjb3JhdG9ycyIsImNyZWF0ZURlY29yYXRvcnMiLCJ2aWV3cyIsInZpZXdQcm9wcyIsIkVycm9yIiwiaXNVbmRlZmluZWQiLCJjbGFzc05hbWUiLCJjb21wdXRlZENsYXNzTmFtZSIsInZpZXdQcm9wIiwic2hhcGVDbGFzcyIsImdldFZpZXciLCJnZXRMYWJlbEJveCIsInJlbmRlckxhYmVsIiwiX2NvbXB1dGVkQ2xhc3NOYW1lIiwiaGFzT3duUHJvcGVydHkiLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsImNhY2hlcyIsImdldENhY2hlIiwiY2xlYXIiLCJuYW1lc2FwY2UiLCJGT05UX0JPTEQiLCJGT05UX0lUQUxJQyIsIkZPTlRfVU5ERVJMSU5FIiwiRk9OVF9TSEFET1ciLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJmb250Q29sb3IiLCJwYWRkaW5nIiwibGluZVBhZGRpbmciLCJhbGlnbiIsInJvdGF0aW9uIiwic3RyaW5nTWVhc3VyZUVsIiwibWVhc3VyZURpdiIsImJhc2VsaW5lRGl2IiwiZ2V0U3RyaW5nU2l6ZSIsIm1lbW9pemUiLCJib2xkIiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiZG9jIiwiY29udGVudFdpbmRvdyIsIndyaXRlIiwiY2xvc2UiLCJnZXRFbGVtZW50QnlJZCIsImZvbnRXZWlnaHQiLCJzdHJ1dCIsImZpcnN0Q2hpbGQiLCJiYXNlbGluZUhlaWdodCIsIm9mZnNldFRvcCIsImJhc2VsaW5lIiwid3JhcCIsIm1heFdpZHRoIiwic3BhY2VTaXplIiwic3BhY2UiLCJsaW5lSGVpZ2h0IiwibGluZXMiLCJ3b3JkcyIsImxpbmUiLCJjdXJyZW50V2lkdGgiLCJ3b3JkV2lkdGgiLCJuZXdMaW5lIiwid29yZCIsImxhYmVsQ29uZmlnIiwiY29udGFpbmVyV2lkdGgiLCJjb250YWluZXJIZWlnaHQiLCJfZ2V0TGFiZWxCb3giLCJjYWxsIiwiZ2V0TGFiZWxCb3hGb3JMaW5rIiwid3JhcHBlZExhYmVsIiwiYW5jaG9yIiwic2V0QW5jaG9yWCIsInBpdm90IiwibWF4Qm91bmRzIiwiX2xhYmVsIiwidW5kZXJsaW5lIiwiaXRhbGljIiwic2hhZG93IiwiZWRpdG9yIiwicmVmRWwiLCJ0ZXh0RWwiLCJzaW5nbGVMaW5lIiwidW5zZWxlY3RhYmxlIiwib3ZlcmZsb3ciLCJib3JkZXIiLCJmb2N1cyIsInNlbGVjdCIsImZpcmUiLCJjYW5jZWwiLCJzZXRTb3VyY2UiLCJzb3VyY2VQb3MiLCJzZXRUYXJnZXQiLCJ0YXJnZXRQb3MiLCJzZXRUZXJtaW5hbCIsInNldEVkZ2VBdCIsInJlbW92ZUVkZ2UiLCJhZGRPdXRFZGdlIiwiYWRkSW5FZGdlIiwiY2VudGVyIiwicmVmUHRzIiwiZ2V0UmVmZXJlbmNlUG9pbnRzIiwidGVybWluYWxzIiwiZ2V0Qm91bmQiLCJnZXRQb3J0IiwiZ2V0TGluayIsImdldFRlcm1pbmFsVmlzdWFsIiwiYXJyb3ciLCJzaWduIiwidmlld0JveCIsInJlZiIsImZpbGwiLCJ0cmlhbmdsZSIsIm92YWwiLCJkaWFtb25kIiwiZmFjdG9yeSIsIm9yaWVudGF0aW9uIiwiSE9SSVpPTlRBTCIsIlZFUlRJQ0FMIiwiaXRlbXMiLCJvd25lciIsImdldExpbmtlZE5vZGVzIiwiaGdhcCIsInZnYXAiLCJfZmxQb3MiLCJtb3ZlVG8iLCJ0cmlnZ2VyIiwidGFiaW5kZXgiLCJsYXlvdXQiLCJsYXlvdXRDbGFzcyIsIl90cmFuc2xhdGUiLCJfc2NhbGUiLCJkaXNwYXRjaGVyIiwiZ3JhcGhCZWhhdmlvciIsInNlbGVjdGlvbkJlaGF2aW9yIiwibm9kZUJlaGF2aW9yIiwiZWRnZUJlaGF2aW9yIiwiY29ubmVjdGlvbkJlaGF2aW9yIiwic2NhbGVkIiwidmlld3BvcnQiLCJpc051bGwiLCJ2cCIsInRyYW5zZm9ybSIsInJlZnJlc2giLCJfZ3JhcGgiLCJpbml0aWFsaXplQmVoYXZpb3JzIiwicmVuZGVyTWFya2VycyIsInByZXByb2Nlc3NvciIsIlRFTVBMQVRFUyIsInBhcnRzIiwicGFydCIsInRyaW0iLCJjYW1lbENhc2UiLCJpbnRlcnBvbGF0ZSIsImdyaWRTaXplIiwiZ0JvdW5kcyIsInZCb3VuZHMiLCJwYXJzZUZsb2F0IiwiZGVmYXVsdENsaWNrTW9kZSIsImhpZGVPdXRsaW5lIiwic2luZ2xlU2VsZWN0IiwiZ3JpZEVuYWJsZWQiLCJndWlkZXNFbmFibGVkIiwibWF4Wm9vbSIsIm1pblpvb20iLCJ6b29tRmFjdG9yIiwibWFza09wYWNpdHkiLCJyZW5kZXJlciIsImhhbmRsZURyYWciLCJoYW5kbGVab29tIiwicGFuIiwiQmVoYXZpb3IiLCJzZWxlY3RDZWxsIiwidW5zZWxlY3RDZWxsIiwiaGFuZGxlTXVsdGlTZWxlY3QiLCJzZWxlY3RlZE5vZGVzIiwic2VsZWN0ZWRMaW5rcyIsImF0dGFjaGVkTGlua3MiLCJjbGFzc2VkIiwic2VsZWN0ZWRWZXJ0aWNlcyIsImdldFNoYXBlcyIsImdldEF0dGFjaGVkRWRnZXMiLCJzZWxlY3RlZEVkZ2VzIiwiY2VsbCIsInRvZ2dsZSIsImlzU2VsZWN0ZWQiLCJfZmlyc3RTZWxlY3Rpb24iLCJkMyIsImRhdGFUYXJnZXQiLCJtb3ZlVG9Gcm9udCIsInNldFNlbGVjdGlvbiIsInV0aWwiLCJzdGFydFB0IiwiZ2V0Qm91bmRpbmdSZWN0YW5nbGUiLCJydWJiZXJiYW5kIiwiYXBwZW5kTm9kZSIsImdldENlbGxMYXllciIsImNlbGxzIiwiZ2V0Q3VycmVudFJvb3QiLCJmaWx0ZXIiLCJhdHRyIiwiTlMiLCJTVkdFbGVtZW50IiwiY3JlYXRlRWxlbWVudE5TIiwiZGVmaW5lUHJvcGVydGllcyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCIkbm9kZSIsIiR0ZW1wIiwiY2xvbmVOb2RlIiwib3V0ZXJIVE1MIiwicm9wZW4iLCJub2RlTmFtZSIsInJjbG9zZSIsIm1hcmt1cCIsImxhc3RDaGlsZCIsImZpcnN0RWxlbWVudENoaWxkIiwidG9EYXRhVVJMIiwib3B0aW9ucyIsIl9zdmciLCJtc2ciLCJleHBvcnRTVkciLCJzdmdfeG1sIiwic3ZnX2RhdGF1cmwiLCJiYXNlNjRkYXRhVVJMZW5jb2RlIiwiYjY0IiwiYnRvYSIsImV4cG9ydEltYWdlIiwiY2FudmFzIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN2Z19pbWciLCJkcmF3SW1hZ2UiLCJpbWFnZV9kYXRhdXJsIiwib25lcnJvciIsImV4cG9ydEltYWdlQ2FudmciLCJjYW52ZyIsInhjYW52YXMiLCJqc0NhbnZhcyIsImtlZXBPdXRzaWRlVmlld3BvcnQiLCJiYm94IiwiZ2V0QkJveCIsImNvbXBpbGUiLCJrZWVwTm9uU2FmZSIsInJlbmRlckRlZnMiLCJxdWVyeVNlbGVjdG9yIiwic3RyMSIsInN0cjIiLCJyZW5kZXJTaGFwZSIsInJvdW5kIiwibmV3UHRzIiwicHJldiIsIm5leHQiLCJkMSIsImQyIiwiY29ybmVyIiwiZ2V0UGF0aERhdGEiLCJjb250ZW50IiwibSIsIiRyb290IiwiJGVkZ2UiLCJUcmlhbmdsZSIsIlJob21idXMiLCJIZXhhZ29uIiwiUG9seWdvbiIsInJlbW92ZUxhc3QiLCJHcmlkIiwidmFyaWFibGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFNQSxRQUFOLENBQWUsV0FBZjtBQUNBLGlCQUFNQSxRQUFOLENBQWUsU0FBZjs7bUJBRWU7QUFDZEMsd0JBRGM7QUFFZEMsd0JBRmM7QUFHZEMsd0JBSGM7QUFJZEMsd0JBSmM7QUFLZEMsOEJBTGM7QUFNZEMsc0NBTmM7QUFPZEMsd0JBUGM7QUFRZEMsc0JBUmM7QUFTZEMsd0JBVGM7QUFVZEMsZ0NBVmM7QUFXZEMsNEJBWGM7QUFZZEMsc0JBWmM7QUFhZEMsNENBYmM7QUFjZEMsd0JBZGM7QUFlZEMsMEJBZmM7QUFnQmRDLHdCQWhCYztBQWlCZEMsc0JBakJjO0FBa0JkQyxzQkFsQmM7QUFtQmRDLHNCQW5CYztBQW9CZEMsMEJBcEJjO0FBcUJkQyxrQ0FyQmM7QUFzQmRDLDhCQXRCYztBQXVCZEMsb0NBdkJjO0FBd0JkQyx3Q0F4QmM7QUF5QmRDO0FBekJjLEU7Ozs7Ozs7Ozs7O0FDN0JmOztBQUVBLEtBQUl2QixTQUFTOztBQUVaO0FBQ0F3QixXQUFVLG1FQUhFOztBQUtaO0FBQ0FDLFVBQVMsZ0JBQVVDLEtBQVYsRUFBaUI7QUFDekIsT0FBSUMsU0FBUyxFQUFiO0FBQ0EsT0FBSUMsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxJQUFoQixFQUFzQkMsSUFBdEIsRUFBNEJDLElBQTVCLEVBQWtDQyxJQUFsQyxFQUF3Q0MsSUFBeEM7QUFDQSxPQUFJQyxJQUFJLENBQVI7O0FBRUFULFdBQVExQixPQUFPb0MsWUFBUCxDQUFvQlYsS0FBcEIsQ0FBUjs7QUFFQSxVQUFPUyxJQUFJVCxNQUFNVyxNQUFqQixFQUF5Qjs7QUFFeEJULFdBQU9GLE1BQU1ZLFVBQU4sQ0FBaUJILEdBQWpCLENBQVA7QUFDQU4sV0FBT0gsTUFBTVksVUFBTixDQUFpQkgsR0FBakIsQ0FBUDtBQUNBTCxXQUFPSixNQUFNWSxVQUFOLENBQWlCSCxHQUFqQixDQUFQOztBQUVBSixXQUFPSCxRQUFRLENBQWY7QUFDQUksV0FBUSxDQUFDSixPQUFPLENBQVIsS0FBYyxDQUFmLEdBQXFCQyxRQUFRLENBQXBDO0FBQ0FJLFdBQVEsQ0FBQ0osT0FBTyxFQUFSLEtBQWUsQ0FBaEIsR0FBc0JDLFFBQVEsQ0FBckM7QUFDQUksV0FBT0osT0FBTyxFQUFkOztBQUVBLFFBQUlTLE1BQU1WLElBQU4sQ0FBSixFQUFpQjtBQUNoQkksWUFBT0MsT0FBTyxFQUFkO0FBQ0EsS0FGRCxNQUVPLElBQUlLLE1BQU1ULElBQU4sQ0FBSixFQUFpQjtBQUN2QkksWUFBTyxFQUFQO0FBQ0E7O0FBRURQLGFBQVNBLFNBQ1QsS0FBS0gsT0FBTCxDQUFhZ0IsTUFBYixDQUFvQlQsSUFBcEIsQ0FEUyxHQUNtQixLQUFLUCxPQUFMLENBQWFnQixNQUFiLENBQW9CUixJQUFwQixDQURuQixHQUVULEtBQUtSLE9BQUwsQ0FBYWdCLE1BQWIsQ0FBb0JQLElBQXBCLENBRlMsR0FFbUIsS0FBS1QsT0FBTCxDQUFhZ0IsTUFBYixDQUFvQk4sSUFBcEIsQ0FGNUI7QUFJQTs7QUFFRCxVQUFPUCxNQUFQO0FBQ0EsR0FyQ1c7O0FBdUNaO0FBQ0FjLFVBQVMsZ0JBQVVmLEtBQVYsRUFBaUI7QUFDekIsT0FBSUMsU0FBUyxFQUFiO0FBQ0EsT0FBSUMsSUFBSixFQUFVQyxJQUFWLEVBQWdCQyxJQUFoQjtBQUNBLE9BQUlDLElBQUosRUFBVUMsSUFBVixFQUFnQkMsSUFBaEIsRUFBc0JDLElBQXRCO0FBQ0EsT0FBSUMsSUFBSSxDQUFSOztBQUVBVCxXQUFRQSxNQUFNZ0IsT0FBTixDQUFjLHFCQUFkLEVBQXFDLEVBQXJDLENBQVI7O0FBRUEsVUFBT1AsSUFBSVQsTUFBTVcsTUFBakIsRUFBeUI7O0FBRXhCTixXQUFPLEtBQUtQLE9BQUwsQ0FBYW1CLE9BQWIsQ0FBcUJqQixNQUFNYyxNQUFOLENBQWFMLEdBQWIsQ0FBckIsQ0FBUDtBQUNBSCxXQUFPLEtBQUtSLE9BQUwsQ0FBYW1CLE9BQWIsQ0FBcUJqQixNQUFNYyxNQUFOLENBQWFMLEdBQWIsQ0FBckIsQ0FBUDtBQUNBRixXQUFPLEtBQUtULE9BQUwsQ0FBYW1CLE9BQWIsQ0FBcUJqQixNQUFNYyxNQUFOLENBQWFMLEdBQWIsQ0FBckIsQ0FBUDtBQUNBRCxXQUFPLEtBQUtWLE9BQUwsQ0FBYW1CLE9BQWIsQ0FBcUJqQixNQUFNYyxNQUFOLENBQWFMLEdBQWIsQ0FBckIsQ0FBUDs7QUFFQVAsV0FBUUcsUUFBUSxDQUFULEdBQWVDLFFBQVEsQ0FBOUI7QUFDQUgsV0FBUSxDQUFDRyxPQUFPLEVBQVIsS0FBZSxDQUFoQixHQUFzQkMsUUFBUSxDQUFyQztBQUNBSCxXQUFRLENBQUNHLE9BQU8sQ0FBUixLQUFjLENBQWYsR0FBb0JDLElBQTNCOztBQUVBUCxhQUFTQSxTQUFTaUIsT0FBT0MsWUFBUCxDQUFvQmpCLElBQXBCLENBQWxCOztBQUVBLFFBQUlLLFFBQVEsRUFBWixFQUFnQjtBQUNmTixjQUFTQSxTQUFTaUIsT0FBT0MsWUFBUCxDQUFvQmhCLElBQXBCLENBQWxCO0FBQ0E7QUFDRCxRQUFJSyxRQUFRLEVBQVosRUFBZ0I7QUFDZlAsY0FBU0EsU0FBU2lCLE9BQU9DLFlBQVAsQ0FBb0JmLElBQXBCLENBQWxCO0FBQ0E7QUFFRDs7QUFFREgsWUFBUzNCLE9BQU84QyxZQUFQLENBQW9CbkIsTUFBcEIsQ0FBVDs7QUFFQSxVQUFPQSxNQUFQO0FBRUEsR0ExRVc7O0FBNEVaO0FBQ0FTLGdCQUFlLHNCQUFVVyxNQUFWLEVBQWtCO0FBQ2hDQSxZQUFTQSxPQUFPTCxPQUFQLENBQWUsT0FBZixFQUF1QixJQUF2QixDQUFUO0FBQ0EsT0FBSU0sVUFBVSxFQUFkOztBQUVBLFFBQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJRixPQUFPVixNQUEzQixFQUFtQ1ksR0FBbkMsRUFBd0M7O0FBRXZDLFFBQUlDLElBQUlILE9BQU9ULFVBQVAsQ0FBa0JXLENBQWxCLENBQVI7O0FBRUEsUUFBSUMsSUFBSSxHQUFSLEVBQWE7QUFDWkYsZ0JBQVdKLE9BQU9DLFlBQVAsQ0FBb0JLLENBQXBCLENBQVg7QUFDQSxLQUZELE1BR0ssSUFBSUEsSUFBSSxHQUFMLElBQWNBLElBQUksSUFBckIsRUFBNEI7QUFDaENGLGdCQUFXSixPQUFPQyxZQUFQLENBQXFCSyxLQUFLLENBQU4sR0FBVyxHQUEvQixDQUFYO0FBQ0FGLGdCQUFXSixPQUFPQyxZQUFQLENBQXFCSyxJQUFJLEVBQUwsR0FBVyxHQUEvQixDQUFYO0FBQ0EsS0FISSxNQUlBO0FBQ0pGLGdCQUFXSixPQUFPQyxZQUFQLENBQXFCSyxLQUFLLEVBQU4sR0FBWSxHQUFoQyxDQUFYO0FBQ0FGLGdCQUFXSixPQUFPQyxZQUFQLENBQXNCSyxLQUFLLENBQU4sR0FBVyxFQUFaLEdBQWtCLEdBQXRDLENBQVg7QUFDQUYsZ0JBQVdKLE9BQU9DLFlBQVAsQ0FBcUJLLElBQUksRUFBTCxHQUFXLEdBQS9CLENBQVg7QUFDQTtBQUVEOztBQUVELFVBQU9GLE9BQVA7QUFDQSxHQXJHVzs7QUF1R1o7QUFDQUYsZ0JBQWUsc0JBQVVFLE9BQVYsRUFBbUI7QUFDakMsT0FBSUQsU0FBUyxFQUFiO0FBQ0EsT0FBSVosSUFBSSxDQUFSO0FBQ0EsT0FBSWUsSUFBSUMsS0FBS0MsS0FBSyxDQUFsQjs7QUFFQSxVQUFRakIsSUFBSWEsUUFBUVgsTUFBcEIsRUFBNkI7O0FBRTVCYSxRQUFJRixRQUFRVixVQUFSLENBQW1CSCxDQUFuQixDQUFKOztBQUVBLFFBQUllLElBQUksR0FBUixFQUFhO0FBQ1pILGVBQVVILE9BQU9DLFlBQVAsQ0FBb0JLLENBQXBCLENBQVY7QUFDQWY7QUFDQSxLQUhELE1BSUssSUFBSWUsSUFBSSxHQUFMLElBQWNBLElBQUksR0FBckIsRUFBMkI7QUFDL0JFLFVBQUtKLFFBQVFWLFVBQVIsQ0FBbUJILElBQUUsQ0FBckIsQ0FBTDtBQUNBWSxlQUFVSCxPQUFPQyxZQUFQLENBQXFCLENBQUNLLElBQUksRUFBTCxLQUFZLENBQWIsR0FBbUJFLEtBQUssRUFBNUMsQ0FBVjtBQUNBakIsVUFBSyxDQUFMO0FBQ0EsS0FKSSxNQUtBO0FBQ0ppQixVQUFLSixRQUFRVixVQUFSLENBQW1CSCxJQUFFLENBQXJCLENBQUw7QUFDQWtCLFVBQUtMLFFBQVFWLFVBQVIsQ0FBbUJILElBQUUsQ0FBckIsQ0FBTDtBQUNBWSxlQUFVSCxPQUFPQyxZQUFQLENBQXFCLENBQUNLLElBQUksRUFBTCxLQUFZLEVBQWIsR0FBb0IsQ0FBQ0UsS0FBSyxFQUFOLEtBQWEsQ0FBakMsR0FBdUNDLEtBQUssRUFBaEUsQ0FBVjtBQUNBbEIsVUFBSyxDQUFMO0FBQ0E7QUFFRDs7QUFFRCxVQUFPWSxNQUFQO0FBQ0E7O0FBcElXLEVBQWI7O21CQXdJZS9DLE07Ozs7Ozs7Ozs7OztBQzFJZjs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQTtBQUNBLEtBQUksT0FBT3NELE1BQVAsS0FBa0IsV0FBbEIsSUFBaUMsT0FBT0MsTUFBUCxLQUFrQixXQUF2RCxFQUFvRTtBQUNuRUEsU0FBT0QsTUFBUCxHQUFnQixFQUFFRSxpQkFBaUIsMkJBQVcsQ0FBRSxDQUFoQyxFQUFoQjtBQUNBRCxTQUFPRSxRQUFQLEdBQWtCLEVBQWxCO0FBQ0FGLFNBQU9HLFNBQVAsR0FBbUIsRUFBbkI7QUFDQTs7QUFFRDtBQUNBLEtBQUlDLGFBQWEsRUFBakI7QUFBQSxLQUFxQkMsWUFBWSxLQUFqQztBQUFBLEtBQXdDQyxlQUFlLEVBQXZEO0FBQUEsS0FBMkRDLFNBQVNDLE1BQU1ELE1BQTFFOztBQUVBOzs7bUJBR2U7QUFDZEUsUUFBTSxjQUFVQyxTQUFWLEVBQXFCQyxJQUFyQixFQUEyQkYsS0FBM0IsRUFBaUM7QUFDdEMsT0FBSSxDQUFDSCxhQUFhSSxTQUFiLENBQUwsRUFDQ0osYUFBYUksU0FBYixJQUEwQixJQUFJRSxHQUFKLEVBQTFCO0FBQ0QsT0FBSSxDQUFDRCxJQUFMLEVBQ0MsT0FBT0wsYUFBYUksU0FBYixDQUFQO0FBQ0QsT0FBSSxDQUFDRCxLQUFMLEVBQ0MsT0FBT0gsYUFBYUksU0FBYixFQUF3QkcsR0FBeEIsQ0FBNEJGLElBQTVCLENBQVA7QUFDREwsZ0JBQWFJLFNBQWIsRUFBd0JJLEdBQXhCLENBQTRCSCxJQUE1QixFQUFrQ0YsS0FBbEM7QUFDQSxHQVRhOztBQVdkTSxjQUFZLG9CQUFVTCxTQUFWLEVBQXFCTSxLQUFyQixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDcEQsT0FBSU4sT0FBT0ssTUFBTUwsSUFBakI7O0FBRUE7QUFDQSxPQUFJRixPQUFPLEtBQUtBLElBQUwsQ0FBVUMsU0FBVixFQUFxQkMsSUFBckIsQ0FBWDtBQUNBLE9BQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1YsUUFBSVMsU0FBU0YsTUFBTUcsT0FBTixHQUFnQixLQUFLVixJQUFMLENBQVVDLFNBQVYsRUFBcUJNLE1BQU1HLE9BQTNCLENBQWhCLEdBQXNELElBQW5FO0FBQ0EsUUFBSSxDQUFDRCxNQUFELElBQVdELFdBQWYsRUFDQ0MsU0FBU0QsV0FBVDtBQUNELFFBQUlDLE1BQUosRUFDQ1Q7QUFBQTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUE7QUFBQSxNQUFxQlMsTUFBckIsRUFERCxLQUdLO0FBQ0pULFlBQ0MsY0FBWVcsTUFBWixFQUFvQjtBQUFBOztBQUNuQkMsUUFBRUMsTUFBRixDQUFTLElBQVQsRUFBZUYsTUFBZjtBQUNBLE1BSEY7QUFLQTtBQUNELFdBQU9KLE1BQU1MLElBQWI7QUFDQSxXQUFPSyxNQUFNRyxPQUFiO0FBQ0FFLE1BQUVDLE1BQUYsQ0FBU2IsS0FBS2MsU0FBZCxFQUF5QlAsS0FBekI7QUFDQVAsU0FBS2UsUUFBTCxHQUFnQmIsSUFBaEI7QUFDQSxTQUFLRixJQUFMLENBQVVDLFNBQVYsRUFBcUJDLElBQXJCLEVBQTJCRixJQUEzQjtBQUNBLFNBQUtnQixHQUFMLENBQVMsT0FBVCxFQUFrQix3QkFBd0JmLFNBQXhCLEdBQW9DLEdBQXBDLEdBQTBDQyxJQUE1RDtBQUNBO0FBQ0QsVUFBT0YsSUFBUDtBQUNBLEdBdENhOztBQXdDZGlCLGNBQVksb0JBQVVDLEtBQVYsRUFBaUJqQixTQUFqQixFQUE0Qk8sV0FBNUIsRUFBeUM7QUFBQTs7QUFDcEQsUUFBS1EsR0FBTCxDQUFTLE9BQVQsRUFBa0Isd0JBQXdCZixTQUExQzs7QUFFQSxPQUFJLENBQUNpQixLQUFELElBQVVWLFdBQWQsRUFBMkI7QUFDMUIsU0FBS0YsVUFBTCxDQUFnQkwsU0FBaEIsRUFBMkJPLFdBQTNCO0FBQ0EsU0FBS1EsR0FBTCxDQUFTLE9BQVQsRUFBa0Isc0JBQWxCO0FBQ0E7QUFDQTtBQUNELE9BQUlSLFdBQUosRUFBaUI7QUFDaEIsUUFBSVIsT0FBT1ksRUFBRU8sTUFBRixDQUFTRCxLQUFULEVBQWdCLEVBQUNoQixNQUFNTSxZQUFZTixJQUFuQixFQUFoQixDQUFYO0FBQ0FGLFdBQU9BLEtBQUszQixNQUFMLEdBQWMsQ0FBZCxHQUFrQjJCLEtBQUssQ0FBTCxDQUFsQixHQUE0QixJQUFuQztBQUNBLFFBQUlBLElBQUosRUFDQ1EsY0FBYyxLQUFLRixVQUFMLENBQWdCTCxTQUFoQixFQUEyQlcsRUFBRVEsWUFBRixDQUFlcEIsSUFBZixFQUFxQlEsV0FBckIsQ0FBM0IsQ0FBZCxDQURELEtBR0NBLGNBQWMsS0FBS0YsVUFBTCxDQUFnQkwsU0FBaEIsRUFBMkJPLFdBQTNCLENBQWQ7QUFDRDs7QUFFREksS0FBRVMsT0FBRixDQUFVSCxLQUFWLEVBQWlCLFVBQUNsQixJQUFELEVBQVU7QUFDMUIsV0FBS00sVUFBTCxDQUFnQkwsU0FBaEIsRUFBMkJELElBQTNCLEVBQWlDUSxXQUFqQztBQUNBLElBRkQ7QUFHQSxRQUFLUSxHQUFMLENBQVMsT0FBVCxFQUFrQixzQkFBbEI7QUFDQSxHQTdEYTs7QUErRGQ7QUFDQTtBQUNBO0FBQ0FQLFVBQVEsZ0JBQVVhLEtBQVYsRUFBaUJDLE1BQWpCLEVBQXlCQyxVQUF6QixFQUFxQ0MsV0FBckMsRUFBa0Q7QUFDekQ7QUFDQWIsS0FBRUgsTUFBRixDQUFTYSxLQUFULEVBQWdCQyxNQUFoQixFQUF3QkUsV0FBeEI7O0FBRUE7QUFDQTtBQUNBLE9BQUlDLFlBQVksU0FBWkEsU0FBWSxHQUFZO0FBQzNCLFNBQUtDLFdBQUwsR0FBbUJMLEtBQW5CO0FBQ0EsSUFGRDtBQUdBSSxhQUFVWixTQUFWLEdBQXNCUyxPQUFPVCxTQUE3QjtBQUNBUSxTQUFNUixTQUFOLEdBQWtCLElBQUlZLFNBQUosRUFBbEI7O0FBRUE7QUFDQTtBQUNBLE9BQUlGLFVBQUosRUFBZ0JaLEVBQUVILE1BQUYsQ0FBU2EsTUFBTVIsU0FBZixFQUEwQlUsVUFBMUI7O0FBRWhCO0FBQ0FGLFNBQU1NLFVBQU4sR0FBbUJMLE9BQU9ULFNBQTFCOztBQUVBLFVBQU9RLEtBQVA7QUFDQSxHQXRGYTs7QUF3RmRPLGNBQVksb0JBQVVDLEdBQVYsRUFBZW5CLE1BQWYsRUFBdUI7QUFDbEMsT0FBSUosUUFBUSxFQUFaO0FBQUEsT0FBZ0JyQixJQUFJNEMsSUFBSUgsV0FBeEI7QUFBQSxPQUFxQ0ksT0FBTyxDQUFDN0MsQ0FBRCxDQUE1QztBQUNBLFVBQU9BLENBQVAsRUFBVTtBQUNULFFBQUlBLEVBQUU4QyxLQUFOLEVBQWE7QUFDWjlDLFNBQUlBLEVBQUU4QyxLQUFGLENBQVFMLFdBQVo7QUFDQTdCLFlBQU9tQyxLQUFQLENBQWFGLElBQWIsRUFBbUIsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPN0MsQ0FBUCxDQUFuQjtBQUNBLEtBSEQsTUFJQ0EsSUFBSSxJQUFKO0FBQ0Q7O0FBRUQsUUFBSyxJQUFJZixJQUFJLENBQWIsRUFBZ0JBLElBQUk0RCxLQUFLMUQsTUFBekIsRUFBaUNGLEdBQWpDLEVBQXNDO0FBQ3JDZSxRQUFJNkMsS0FBSzVELENBQUwsQ0FBSjtBQUNBLFFBQUllLEVBQUVnRCxRQUFOLEVBQ0N0QixFQUFFQyxNQUFGLENBQVNOLEtBQVQsRUFBZ0JyQixFQUFFZ0QsUUFBbEI7QUFDRDtBQUNESixPQUFJdkIsS0FBSixHQUFZSyxFQUFFQyxNQUFGLENBQVNOLEtBQVQsRUFBZ0JJLE1BQWhCLENBQVo7QUFDQXpCLEtBQUU0QixTQUFGLENBQVlxQixJQUFaLEdBQW1CLFVBQVVqQyxJQUFWLEVBQWdCa0MsS0FBaEIsRUFBdUI7QUFDekMsUUFBSSxDQUFDQSxLQUFMLEVBQ0MsT0FBTyxLQUFLN0IsS0FBTCxDQUFXTCxJQUFYLENBQVA7QUFDRCxTQUFLSyxLQUFMLENBQVdMLElBQVgsSUFBbUJrQyxLQUFuQjtBQUNBLElBSkQ7QUFLQSxHQTdHYTs7QUErR2Q7Ozs7O0FBS0FDLGtCQUFnQix3QkFBVUMsT0FBVixFQUFtQkMsWUFBbkIsRUFBaUM7QUFDaEQsT0FBSSxDQUFDRCxPQUFMLEVBQ0NBLFVBQVVDLFlBQVY7O0FBRUQsT0FBSTNCLEVBQUU0QixRQUFGLENBQVdGLE9BQVgsQ0FBSixFQUNDQSxVQUFVRyxLQUFLSCxPQUFMLENBQVY7QUFDRCxVQUFPQSxPQUFQO0FBQ0EsR0EzSGE7O0FBNkhkSSxTQUFPLGVBQVVDLFVBQVYsRUFBc0I7QUFDNUIsT0FBSUEsVUFBSixFQUFnQjtBQUNmaEQsZUFBV2lELElBQVgsQ0FBZ0JELFVBQWhCO0FBQ0EsSUFGRCxNQUVPO0FBQ04vQyxnQkFBWSxJQUFaO0FBQ0E7QUFDRCxHQW5JYTs7QUFxSWRvQixPQUFLLGFBQVVkLElBQVYsRUFBZ0IyQyxPQUFoQixFQUF5QjtBQUM3QixPQUFJLENBQUN2RCxPQUFPd0QsT0FBWixFQUFxQjtBQUNwQjtBQUNBO0FBQ0QsT0FBSUosUUFBUTlDLFNBQVo7QUFDQSxPQUFJLENBQUNBLFNBQUwsRUFBZ0I7QUFDZjhDLFlBQVEsS0FBUjtBQUNBLFNBQUssSUFBSXZFLElBQUksQ0FBYixFQUFnQkEsSUFBSXdCLFdBQVd0QixNQUEvQixFQUF1Q0YsR0FBdkMsRUFBNEM7QUFDM0MsU0FBSXdCLFdBQVd4QixDQUFYLEtBQWlCK0IsSUFBckIsRUFBMkJ3QyxRQUFRLElBQVI7QUFDM0I7QUFDRDtBQUNELE9BQUksQ0FBQ0EsS0FBTCxFQUFZO0FBQ1g7QUFDQTtBQUNELFVBQU94QyxLQUFLN0IsTUFBTCxHQUFjLEVBQXJCLEVBQXlCO0FBQ3hCNkIsV0FBT0EsT0FBTyxHQUFkO0FBQ0E7QUFDREEsVUFBT0EsS0FBSzZDLFNBQUwsQ0FBZSxDQUFmLEVBQWtCLEVBQWxCLElBQXdCLEtBQS9CO0FBQ0FELFdBQVFFLElBQVIsQ0FBYTlDLElBQWIsRUFBbUIyQyxPQUFuQjtBQUNBLEdBeEphOztBQTBKZDs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQUksdUJBQXFCLDZCQUFVQyxNQUFWLEVBQWtCQyxRQUFsQixFQUE0QjtBQUNoRCxPQUFJQyxJQUFJQyxLQUFLQyxHQUFMLENBQVNILFNBQVNDLENBQWxCLEtBQXdCLENBQXhCLEdBQTRCRixPQUFPSyxLQUFQLEdBQWVKLFNBQVNDLENBQXBELEdBQXdERCxTQUFTQyxDQUF6RTtBQUNBLE9BQUlJLElBQUlILEtBQUtDLEdBQUwsQ0FBU0gsU0FBU0ssQ0FBbEIsS0FBd0IsQ0FBeEIsR0FBNEJOLE9BQU9PLE1BQVAsR0FBZ0JOLFNBQVNLLENBQXJELEdBQXlETCxTQUFTSyxDQUExRTtBQUNBLFVBQU8sS0FBS0UsY0FBTCxDQUFvQixDQUFDTixDQUFELEVBQUlJLENBQUosQ0FBcEIsRUFBNEJMLFFBQTVCLENBQVA7QUFDQSxHQTlLYTs7QUFnTGRPLGtCQUFnQix3QkFBVUMsR0FBVixFQUFlUixRQUFmLEVBQXlCO0FBQ3hDLFVBQU8sQ0FBQ1EsSUFBSSxDQUFKLElBQVNSLFNBQVNJLEtBQVQsR0FBaUJKLFNBQVNTLE9BQW5DLEdBQTZDVCxTQUFTVSxPQUF2RCxFQUFnRUYsSUFBSSxDQUFKLElBQVNSLFNBQVNNLE1BQVQsR0FBa0JOLFNBQVNXLE9BQXBDLEdBQThDWCxTQUFTWSxPQUF2SCxDQUFQO0FBQ0EsR0FsTGE7O0FBb0xkOzs7Ozs7QUFNQUMsV0FBUyxpQkFBVUMsQ0FBVixFQUFhQyxLQUFiLEVBQW9CQyxDQUFwQixFQUF1QjtBQUMvQixPQUFJQSxnQ0FBSixFQUNDLE9BQU8sd0JBQWNBLEVBQUVmLENBQUYsR0FBTWMsS0FBTixHQUFjRCxFQUFFLENBQUYsQ0FBNUIsRUFBa0NFLEVBQUVYLENBQUYsR0FBTVUsS0FBTixHQUFjRCxFQUFFLENBQUYsQ0FBaEQsRUFBc0RFLEVBQUVaLEtBQUYsR0FBVVcsS0FBaEUsRUFBdUVDLEVBQUVWLE1BQUYsR0FBV1MsS0FBbEYsQ0FBUCxDQURELEtBRUssSUFBSUMsNEJBQUosRUFDSixPQUFPLG9CQUFVQSxFQUFFZixDQUFGLEdBQU1jLEtBQU4sR0FBY0QsRUFBRSxDQUFGLENBQXhCLEVBQThCRSxFQUFFWCxDQUFGLEdBQU1VLEtBQU4sR0FBY0QsRUFBRSxDQUFGLENBQTVDLENBQVAsQ0FESSxLQUdKLE9BQU8sQ0FBQ0UsRUFBRSxDQUFGLElBQU9ELEtBQVAsR0FBZUQsRUFBRSxDQUFGLENBQWhCLEVBQXNCRSxFQUFFLENBQUYsSUFBT0QsS0FBUCxHQUFlRCxFQUFFLENBQUYsQ0FBckMsQ0FBUDtBQUNELEdBak1hOztBQW1NZDs7Ozs7O0FBTUFDLFNBQU8sZUFBVUQsQ0FBVixFQUFhQyxNQUFiLEVBQW9CQyxDQUFwQixFQUF1QjtBQUM3QixPQUFJQSxnQ0FBSixFQUNDLE9BQU8sd0JBQWMsQ0FBQ0EsRUFBRWYsQ0FBRixHQUFNYSxFQUFFLENBQUYsQ0FBUCxJQUFlQyxNQUE3QixFQUFvQyxDQUFDQyxFQUFFWCxDQUFGLEdBQU1TLEVBQUUsQ0FBRixDQUFQLElBQWVDLE1BQW5ELEVBQTBEQyxFQUFFWixLQUFGLEdBQVVXLE1BQXBFLEVBQTJFQyxFQUFFVixNQUFGLEdBQVdTLE1BQXRGLENBQVAsQ0FERCxLQUVLLElBQUlDLDRCQUFKLEVBQ0osT0FBTyxvQkFBVSxDQUFDQSxFQUFFZixDQUFGLEdBQU1hLEVBQUUsQ0FBRixDQUFQLElBQWVDLE1BQXpCLEVBQWdDLENBQUNDLEVBQUVYLENBQUYsR0FBTVMsRUFBRSxDQUFGLENBQVAsSUFBZUMsTUFBL0MsQ0FBUCxDQURJLEtBR0osT0FBTyxDQUFDLENBQUNDLEVBQUUsQ0FBRixJQUFPRixFQUFFLENBQUYsQ0FBUixJQUFnQkMsTUFBakIsRUFBd0IsQ0FBQ0MsRUFBRSxDQUFGLElBQU9GLEVBQUUsQ0FBRixDQUFSLElBQWdCQyxNQUF4QyxDQUFQO0FBQ0QsR0FoTmE7O0FBa05kOzs7QUFHQUUsZUFBYSxxQkFBVXRDLEdBQVYsRUFBZUssSUFBZixFQUFxQjtBQUNqQyxPQUFJLENBQUNMLEdBQUwsRUFDQyxPQUFPLElBQVA7QUFDRCxPQUFJbEIsRUFBRXlELEdBQUYsQ0FBTXZDLEdBQU4sRUFBV0ssSUFBWCxDQUFKLEVBQ0MsT0FBT0wsSUFBSUssSUFBSixDQUFQO0FBQ0QsT0FBSUwsSUFBSUssSUFBSixJQUFZdkIsRUFBRTBELFVBQUYsQ0FBYXhDLElBQUlLLElBQWpCLENBQWhCLEVBQ0MsT0FBT0wsSUFBSUssSUFBSixDQUFTQSxJQUFULENBQVA7QUFDRCxVQUFPLElBQVA7QUFDQTtBQTdOYSxFOzs7Ozs7Ozs7Ozs7Ozs7OztLQ2hCVDlGLEs7QUFDTCxpQkFBWStHLENBQVosRUFBZUksQ0FBZixFQUFrQjtBQUFBOztBQUNqQixRQUFLSixDQUFMLEdBQVNBLENBQVQ7QUFDQSxRQUFLSSxDQUFMLEdBQVNBLENBQVQ7QUFDQTs7QUFFRDs7Ozs7OzsyQkFHUTtBQUNQLFdBQU8sSUFBSW5ILEtBQUosQ0FBVSxLQUFLK0csQ0FBZixFQUFrQixLQUFLSSxDQUF2QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OzRCQUtTZSxHLEVBQUs7QUFDYixXQUFPbEIsS0FBS21CLElBQUwsQ0FBVSxDQUFDLEtBQUtwQixDQUFMLEdBQVNtQixJQUFJbkIsQ0FBZCxLQUFvQixLQUFLQSxDQUFMLEdBQVNtQixJQUFJbkIsQ0FBakMsSUFBc0MsQ0FBQyxLQUFLSSxDQUFMLEdBQVNlLElBQUlmLENBQWQsS0FBb0IsS0FBS0EsQ0FBTCxHQUFTZSxJQUFJZixDQUFqQyxDQUFoRCxDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs2QkFHVWlCLEUsRUFBSTtBQUNiLFNBQUtyQixDQUFMLElBQVVxQixHQUFHckIsQ0FBYjtBQUNBLFNBQUtJLENBQUwsSUFBVWlCLEdBQUdqQixDQUFiO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozt5QkFHTVUsTSxFQUFPO0FBQ1osU0FBS2QsQ0FBTCxJQUFVYyxNQUFWO0FBQ0EsU0FBS1YsQ0FBTCxJQUFVVSxNQUFWO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7Ozs2QkFFU0EsSyxFQUFPO0FBQ2hCLFdBQU8sSUFBSTdILEtBQUosQ0FBVSxLQUFLK0csQ0FBTCxHQUFTYyxLQUFuQixFQUEwQixLQUFLVixDQUFMLEdBQVNVLEtBQW5DLENBQVA7QUFDQTs7O2lDQUVhTyxFLEVBQUk7QUFDakIsV0FBTyxJQUFJcEksS0FBSixDQUFVLEtBQUsrRyxDQUFMLEdBQVNxQixHQUFHckIsQ0FBdEIsRUFBeUIsS0FBS0ksQ0FBTCxHQUFTaUIsR0FBR2pCLENBQXJDLENBQVA7QUFDQTs7QUFFRDs7Ozs7Ozs7Z0NBS2FpQixFLEVBQUk7QUFDaEIsUUFBSUMsT0FBTyxLQUFLQyxRQUFMLENBQWNGLEVBQWQsQ0FBWDtBQUNBLFdBQU8sSUFBSXBJLEtBQUosQ0FBVSxDQUFDb0ksR0FBR3JCLENBQUgsR0FBTyxLQUFLQSxDQUFiLElBQWtCc0IsSUFBNUIsRUFBa0MsQ0FBQ0QsR0FBR2pCLENBQUgsR0FBTyxLQUFLQSxDQUFiLElBQWtCa0IsSUFBcEQsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7OzBCQUlPRSxLLEVBQU87QUFDYixRQUFJQyxNQUFNeEIsS0FBS3dCLEdBQUwsQ0FBU0QsUUFBUXZCLEtBQUt5QixFQUFiLEdBQWtCLEdBQTNCLENBQVY7QUFDQSxRQUFJQyxNQUFNMUIsS0FBSzBCLEdBQUwsQ0FBU0gsUUFBUXZCLEtBQUt5QixFQUFiLEdBQWtCLEdBQTNCLENBQVY7QUFDQSxRQUFJMUIsSUFBSSxLQUFLQSxDQUFiO0FBQUEsUUFBZ0JJLElBQUksS0FBS0EsQ0FBekI7QUFDQSxTQUFLSixDQUFMLEdBQVNBLElBQUl5QixHQUFKLEdBQVVyQixJQUFJdUIsR0FBdkI7QUFDQSxTQUFLdkIsQ0FBTCxHQUFTSixJQUFJMkIsR0FBSixHQUFVdkIsSUFBSXFCLEdBQXZCO0FBQ0EsV0FBTyxJQUFQO0FBQ0E7Ozs4QkFFVUQsSyxFQUFPO0FBQ2pCLFdBQU8sS0FBS0ksS0FBTCxHQUFhQyxNQUFiLENBQW9CTCxLQUFwQixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs4QkFHV0gsRSxFQUFJO0FBQ2QsV0FBTyxLQUFLckIsQ0FBTCxHQUFTcUIsR0FBR3JCLENBQVosR0FBZ0IsS0FBS0ksQ0FBTCxHQUFTaUIsR0FBR2pCLENBQW5DO0FBQ0E7O0FBRUQ7Ozs7OzsrQkFHWWlCLEUsRUFBSTtBQUNmLFdBQU8sSUFBSXBJLEtBQUosQ0FBVSxDQUFDLEtBQUsrRyxDQUFMLEdBQVNxQixHQUFHckIsQ0FBYixJQUFrQixDQUE1QixFQUErQixDQUFDLEtBQUtJLENBQUwsR0FBU2lCLEdBQUdqQixDQUFiLElBQWtCLENBQWpELENBQVA7QUFDQTs7OzZCQUVTO0FBQ1QsU0FBS0osQ0FBTCxHQUFTLENBQUMsS0FBS0EsQ0FBZjtBQUNBLFNBQUtJLENBQUwsR0FBUyxDQUFDLEtBQUtBLENBQWY7QUFDQSxXQUFPLElBQVA7QUFDQTs7OzBCQUVNaUIsRSxFQUFJO0FBQ1YsUUFBSSxDQUFDQSxFQUFELElBQU9BLEdBQUc5QyxXQUFILElBQWtCdEYsS0FBN0IsRUFBb0MsT0FBTyxLQUFQOztBQUVwQyxXQUFRLEtBQUsrRyxDQUFMLElBQVVxQixHQUFHckIsQ0FBYixJQUFrQixLQUFLSSxDQUFMLElBQVVpQixHQUFHakIsQ0FBdkM7QUFDQTs7QUFFRDs7Ozs7Ozs7Ozs7OzJCQVNRMEIsSSxFQUFNQyxRLEVBQVU7QUFDdkIsUUFBSUEsUUFBSixFQUNDLEtBQUsvQixDQUFMLEdBQVMsSUFBSThCLEtBQUs5QixDQUFULEdBQWEsS0FBS0EsQ0FBM0IsQ0FERCxLQUdDLEtBQUtJLENBQUwsR0FBUyxJQUFJMEIsS0FBSzFCLENBQVQsR0FBYSxLQUFLQSxDQUEzQjtBQUNELFdBQU8sSUFBUDtBQUNBOzs7OEJBRVU7QUFDVixXQUFPLEtBQUtKLENBQUwsR0FBUyxHQUFULEdBQWUsS0FBS0ksQ0FBM0I7QUFDQTs7Ozs7O0FBR0ZuSCxPQUFNK0ksQ0FBTixHQUFVLElBQUkvSSxLQUFKLENBQVUsQ0FBQyxDQUFYLEVBQWMsQ0FBZCxDQUFWO0FBQ0FBLE9BQU1nSixDQUFOLEdBQVUsSUFBSWhKLEtBQUosQ0FBVSxDQUFWLEVBQWEsQ0FBQyxDQUFkLENBQVY7QUFDQUEsT0FBTWlKLENBQU4sR0FBVSxJQUFJakosS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQVY7QUFDQUEsT0FBTWtKLENBQU4sR0FBVSxJQUFJbEosS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQVY7QUFDQUEsT0FBTW1KLEVBQU4sR0FBVyxJQUFJbkosS0FBSixDQUFVLENBQVYsRUFBYSxDQUFDLENBQWQsQ0FBWDtBQUNBQSxPQUFNb0osRUFBTixHQUFXLElBQUlwSixLQUFKLENBQVUsQ0FBQyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQVg7QUFDQUEsT0FBTXFKLEVBQU4sR0FBVyxJQUFJckosS0FBSixDQUFVLENBQVYsRUFBYSxDQUFiLENBQVg7QUFDQUEsT0FBTXNKLEVBQU4sR0FBVyxJQUFJdEosS0FBSixDQUFVLENBQUMsQ0FBWCxFQUFjLENBQWQsQ0FBWDs7bUJBRWVBLEs7Ozs7Ozs7Ozs7Ozs7O0FDcElmOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0tBRXFCRyxTOzs7Ozs7Ozs7Ozs7QUFDcEI7Ozs0QkFHU29KLEUsRUFBSTtBQUNaLFFBQUlDLElBQUlELEdBQUdyQyxLQUFILElBQVksQ0FBcEI7QUFDQSxRQUFJdUMsSUFBSUYsR0FBR25DLE1BQUgsSUFBYSxDQUFyQjtBQUNBLFFBQUlzQyxPQUFPSCxHQUFHeEMsQ0FBSCxHQUFPeUMsSUFBRSxDQUFwQjtBQUNBLFFBQUlHLFFBQVFKLEdBQUd4QyxDQUFILEdBQU95QyxJQUFFLENBQXJCO0FBQ0EsUUFBSUksTUFBTUwsR0FBR3BDLENBQUgsR0FBT3NDLElBQUUsQ0FBbkI7QUFDQSxRQUFJSSxTQUFTTixHQUFHcEMsQ0FBSCxHQUFPc0MsSUFBRSxDQUF0QjtBQUNBLFdBQVFFLFNBQVMsS0FBS0EsS0FBZixJQUEwQkQsUUFBUSxLQUFLQSxJQUF2QyxJQUNMRSxPQUFPLEtBQUtBLEdBRFAsSUFDZ0JDLFVBQVUsS0FBS0EsTUFEdEM7QUFFQTs7QUFFRDs7Ozs7OzRCQUdTQyxFLEVBQUk7QUFDWixRQUFJLEtBQUtDLFFBQUwsQ0FBY0QsRUFBZCxDQUFKLEVBQXVCLE9BQU8sQ0FBUDs7QUFFdkIsUUFBSUEsR0FBRy9DLENBQUgsR0FBTyxLQUFLMkMsSUFBaEIsRUFBc0I7QUFDckIsU0FBSUksR0FBRzNDLENBQUgsR0FBTyxLQUFLeUMsR0FBaEIsRUFDQyxPQUFPRSxHQUFHeEIsUUFBSCxDQUFZLG9CQUFVLEtBQUtvQixJQUFmLEVBQXFCLEtBQUtFLEdBQTFCLENBQVosQ0FBUDtBQUNELFNBQUlFLEdBQUczQyxDQUFILElBQVEsS0FBSzBDLE1BQWpCLEVBQ0MsT0FBTyxLQUFLSCxJQUFMLEdBQVlJLEdBQUcvQyxDQUF0QjtBQUNELFlBQU8rQyxHQUFHeEIsUUFBSCxDQUFZLG9CQUFVLEtBQUtvQixJQUFmLEVBQXFCLEtBQUtHLE1BQTFCLENBQVosQ0FBUDtBQUNBO0FBQ0QsUUFBSUMsR0FBRy9DLENBQUgsSUFBUSxLQUFLNEMsS0FBakIsRUFBd0I7QUFDdkIsU0FBSUcsR0FBRzNDLENBQUgsSUFBUSxLQUFLeUMsR0FBakIsRUFDQyxPQUFPLEtBQUtBLEdBQUwsR0FBV0UsR0FBRzNDLENBQXJCO0FBQ0QsWUFBTzJDLEdBQUczQyxDQUFILEdBQU8sS0FBSzBDLE1BQW5CO0FBQ0E7QUFDRCxRQUFJQyxHQUFHM0MsQ0FBSCxHQUFPLEtBQUt5QyxHQUFoQixFQUNDLE9BQU9FLEdBQUd4QixRQUFILENBQVksb0JBQVUsS0FBS3FCLEtBQWYsRUFBc0IsS0FBS0MsR0FBM0IsQ0FBWixDQUFQO0FBQ0QsUUFBSUUsR0FBRzNDLENBQUgsSUFBUSxLQUFLMEMsTUFBakIsRUFDQyxPQUFPQyxHQUFHL0MsQ0FBSCxHQUFPLEtBQUs0QyxLQUFuQjtBQUNELFdBQU9HLEdBQUd4QixRQUFILENBQVksb0JBQVUsS0FBS3FCLEtBQWYsRUFBc0IsS0FBS0UsTUFBM0IsQ0FBWixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7OztzQ0FNbUJHLEcsRUFBS0MsRyxFQUFLO0FBQzVCLFFBQUlDLGFBQWFGLElBQUk3QyxDQUFKLElBQVM4QyxJQUFJOUMsQ0FBOUI7QUFDQSxRQUFJZ0QsWUFBWSxLQUFLSixRQUFMLENBQWNDLEdBQWQsQ0FBaEI7QUFDQSxRQUFJSSxZQUFZLEtBQUtMLFFBQUwsQ0FBY0UsR0FBZCxDQUFoQjtBQUNBLFFBQUlFLGFBQWFDLFNBQWpCLEVBQTRCLE9BQU8sQ0FBUDtBQUM1QixRQUFJLENBQUNELFNBQUQsSUFBYyxDQUFDQyxTQUFuQixFQUE4QjtBQUM3QixTQUFJRixjQUFlRixJQUFJN0MsQ0FBSixJQUFTLEtBQUt5QyxHQUFkLElBQXFCSSxJQUFJN0MsQ0FBSixJQUFTLEtBQUswQyxNQUF0RCxFQUErRDtBQUM5RCxVQUFJRyxJQUFJakQsQ0FBSixHQUFRLEtBQUsyQyxJQUFiLElBQXFCTyxJQUFJbEQsQ0FBSixHQUFRLEtBQUs0QyxLQUF0QyxFQUNDLE9BQU8sQ0FBUDtBQUNELFVBQUlLLElBQUlqRCxDQUFKLEdBQVEsS0FBSzRDLEtBQWIsSUFBc0JNLElBQUlsRCxDQUFKLEdBQVEsS0FBSzJDLElBQXZDLEVBQ0MsT0FBTyxDQUFQO0FBQ0Q7QUFDRCxTQUFJLENBQUNRLFVBQUQsSUFBZ0JGLElBQUlqRCxDQUFKLElBQVMsS0FBSzJDLElBQWQsSUFBc0JNLElBQUlqRCxDQUFKLElBQVMsS0FBSzRDLEtBQXhELEVBQWdFO0FBQy9ELFVBQUlLLElBQUk3QyxDQUFKLEdBQVEsS0FBS3lDLEdBQWIsSUFBb0JLLElBQUk5QyxDQUFKLEdBQVEsS0FBSzBDLE1BQXJDLEVBQ0MsT0FBTyxDQUFQO0FBQ0QsVUFBSUcsSUFBSTdDLENBQUosR0FBUSxLQUFLMEMsTUFBYixJQUF1QkksSUFBSTlDLENBQUosR0FBUSxLQUFLeUMsR0FBeEMsRUFDQyxPQUFPLENBQVA7QUFDRDtBQUNELFlBQU8sQ0FBQyxDQUFSO0FBQ0E7O0FBRUQsUUFBSVMsUUFBUUYsWUFBWUYsR0FBWixHQUFrQkQsR0FBOUI7QUFDQSxRQUFJRSxVQUFKLEVBQWdCO0FBQ2YsU0FBSUcsTUFBTXRELENBQU4sR0FBVSxLQUFLNEMsS0FBbkIsRUFDQyxPQUFPLENBQVA7QUFDRCxZQUFPLENBQVA7QUFDQSxLQUpELE1BSU87QUFDTixTQUFJVSxNQUFNbEQsQ0FBTixHQUFVLEtBQUt5QyxHQUFuQixFQUNDLE9BQU8sQ0FBUDtBQUNELFlBQU8sQ0FBUDtBQUNBO0FBQ0Q7Ozs4QkFFVTtBQUNWLFdBQU8sa0JBQWtCLEtBQUs3QyxDQUF2QixHQUEyQixLQUEzQixHQUFtQyxLQUFLSSxDQUF4QyxHQUE0QyxTQUE1QyxHQUF3RCxLQUFLRCxLQUE3RCxHQUFxRSxVQUFyRSxHQUFrRixLQUFLRSxNQUF2RixHQUFnRyxHQUF2RztBQUNBOzs7Z0NBRW1CeUIsSSxFQUFNaUIsRSxFQUF3QjtBQUFBLFFBQXBCUSxVQUFvQix1RUFBUCxLQUFPOztBQUNqRCxRQUFJdkQsSUFBSThCLEtBQUs5QixDQUFiO0FBQ0EsUUFBSUksSUFBSTBCLEtBQUsxQixDQUFiO0FBQ0EsUUFBSW9ELEtBQUtULEdBQUcvQyxDQUFILEdBQU9BLENBQWhCO0FBQ0EsUUFBSXlELEtBQUtWLEdBQUczQyxDQUFILEdBQU9BLENBQWhCO0FBQ0EsUUFBSXNELFFBQVF6RCxLQUFLMEQsS0FBTCxDQUFXRixFQUFYLEVBQWVELEVBQWYsQ0FBWjtBQUNBLFFBQUlJLElBQUksb0JBQVUsQ0FBVixFQUFhLENBQWIsQ0FBUjtBQUNBLFFBQUlDLEtBQUs1RCxLQUFLeUIsRUFBZDtBQUNBLFFBQUlvQyxNQUFNN0QsS0FBS3lCLEVBQUwsR0FBUSxDQUFsQjtBQUNBLFFBQUlxQyxPQUFPRCxNQUFNSixLQUFqQjtBQUNBLFFBQUk3QyxJQUFJWixLQUFLMEQsS0FBTCxDQUFXN0IsS0FBS3pCLE1BQWhCLEVBQXdCeUIsS0FBSzNCLEtBQTdCLENBQVI7O0FBRUEsUUFBSXVELFFBQVEsQ0FBQ0csRUFBRCxHQUFNaEQsQ0FBZCxJQUFtQjZDLFFBQVFHLEtBQUtoRCxDQUFwQyxFQUF1QztBQUN0QztBQUNBK0MsT0FBRTVELENBQUYsR0FBTThCLEtBQUthLElBQVg7QUFDQWlCLE9BQUV4RCxDQUFGLEdBQU1BLElBQUkwQixLQUFLM0IsS0FBTCxHQUFhRixLQUFLK0QsR0FBTCxDQUFTTixLQUFULENBQWIsR0FBK0IsQ0FBekM7QUFDQSxLQUpELE1BSU8sSUFBSUEsUUFBUSxDQUFDN0MsQ0FBYixFQUFnQjtBQUN0QjtBQUNBK0MsT0FBRXhELENBQUYsR0FBTTBCLEtBQUtlLEdBQVg7QUFDQWUsT0FBRTVELENBQUYsR0FBTUEsSUFBSThCLEtBQUt6QixNQUFMLEdBQWNKLEtBQUsrRCxHQUFMLENBQVNELElBQVQsQ0FBZCxHQUErQixDQUF6QztBQUNBLEtBSk0sTUFJQSxJQUFJTCxRQUFRN0MsQ0FBWixFQUFlO0FBQ3JCO0FBQ0ErQyxPQUFFNUQsQ0FBRixHQUFNOEIsS0FBS2MsS0FBWDtBQUNBZ0IsT0FBRXhELENBQUYsR0FBTUEsSUFBSTBCLEtBQUszQixLQUFMLEdBQWFGLEtBQUsrRCxHQUFMLENBQVNOLEtBQVQsQ0FBYixHQUErQixDQUF6QztBQUNBLEtBSk0sTUFJQTtBQUNOO0FBQ0FFLE9BQUV4RCxDQUFGLEdBQU0wQixLQUFLZ0IsTUFBWDtBQUNBYyxPQUFFNUQsQ0FBRixHQUFNQSxJQUFJOEIsS0FBS3pCLE1BQUwsR0FBY0osS0FBSytELEdBQUwsQ0FBU0QsSUFBVCxDQUFkLEdBQStCLENBQXpDO0FBQ0E7O0FBRUQsUUFBSVIsVUFBSixFQUFnQjtBQUNmLFNBQUlHLFFBQVEsQ0FBQ0csRUFBRCxHQUFNaEQsQ0FBZCxJQUFtQjZDLFFBQVFHLEtBQUtoRCxDQUFwQyxFQUF1QztBQUN0QztBQUNBK0MsUUFBRTVELENBQUYsR0FBTThCLEtBQUthLElBQVg7QUFDQWlCLFFBQUV4RCxDQUFGLEdBQU1BLENBQU47QUFDQSxNQUpELE1BSU8sSUFBSXNELFFBQVEsQ0FBQzdDLENBQWIsRUFBZ0I7QUFDdEI7QUFDQStDLFFBQUV4RCxDQUFGLEdBQU0wQixLQUFLZSxHQUFYO0FBQ0FlLFFBQUU1RCxDQUFGLEdBQU1BLENBQU47QUFDQSxNQUpNLE1BSUEsSUFBSTBELFFBQVE3QyxDQUFaLEVBQWU7QUFDckI7QUFDQStDLFFBQUU1RCxDQUFGLEdBQU04QixLQUFLYyxLQUFYO0FBQ0FnQixRQUFFeEQsQ0FBRixHQUFNQSxDQUFOO0FBQ0EsTUFKTSxNQUlBO0FBQ047QUFDQXdELFFBQUV4RCxDQUFGLEdBQU0wQixLQUFLZ0IsTUFBWDtBQUNBYyxRQUFFNUQsQ0FBRixHQUFNQSxDQUFOO0FBQ0E7QUFDRDs7QUFFRCxRQUFJaUUsTUFBTTdLLFVBQVU4SyxZQUFWLENBQXVCcEMsSUFBdkIsRUFBNkI4QixDQUE3QixFQUFnQ0wsVUFBaEMsQ0FBVjtBQUNBLFdBQU8sRUFBQ1ksT0FBT1AsQ0FBUixFQUFXUSxXQUFXSCxHQUF0QixFQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozt3Q0FHNEJJLEcsRUFBS0MsTSxFQUFRO0FBQ3hDLFFBQUksQ0FBQ0QsR0FBRCxJQUFRQSxJQUFJcEosTUFBSixJQUFjLENBQTFCLEVBQTZCLE9BQU8sSUFBUDtBQUM3QnFKLGFBQVNBLFVBQVUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQW5CO0FBQ0EsUUFBSSxDQUFDLGlCQUFFQyxPQUFGLENBQVVELE1BQVYsQ0FBTCxFQUNDQSxTQUFTLENBQUNBLE1BQUQsRUFBU0EsTUFBVCxFQUFpQkEsTUFBakIsRUFBeUJBLE1BQXpCLENBQVQ7QUFDRCxRQUFJRSxNQUFNLENBQUNILElBQUksQ0FBSixFQUFPckUsQ0FBUixFQUFXcUUsSUFBSSxDQUFKLEVBQU9qRSxDQUFsQixDQUFWO0FBQ0EsUUFBSXFFLE1BQU0sQ0FBQ0osSUFBSSxDQUFKLEVBQU9yRSxDQUFSLEVBQVdxRSxJQUFJLENBQUosRUFBT2pFLENBQWxCLENBQVY7QUFDQSxTQUFLLElBQUlyRixJQUFJLENBQWIsRUFBZ0JBLElBQUlzSixJQUFJcEosTUFBeEIsRUFBZ0NGLEdBQWhDLEVBQXFDO0FBQ3BDLFNBQUk2SSxJQUFJUyxJQUFJdEosQ0FBSixDQUFSO0FBQ0EsU0FBSTZJLEVBQUU1RCxDQUFGLEdBQU13RSxJQUFJLENBQUosQ0FBVixFQUFrQjtBQUNqQkEsVUFBSSxDQUFKLElBQVNaLEVBQUU1RCxDQUFYO0FBQ0E7QUFDRCxTQUFJNEQsRUFBRXhELENBQUYsR0FBTW9FLElBQUksQ0FBSixDQUFWLEVBQWtCO0FBQ2pCQSxVQUFJLENBQUosSUFBU1osRUFBRXhELENBQVg7QUFDQTtBQUNELFNBQUl3RCxFQUFFNUQsQ0FBRixHQUFNeUUsSUFBSSxDQUFKLENBQVYsRUFBa0I7QUFDakJBLFVBQUksQ0FBSixJQUFTYixFQUFFNUQsQ0FBWDtBQUNBO0FBQ0QsU0FBSTRELEVBQUV4RCxDQUFGLEdBQU1xRSxJQUFJLENBQUosQ0FBVixFQUFrQjtBQUNqQkEsVUFBSSxDQUFKLElBQVNiLEVBQUV4RCxDQUFYO0FBQ0E7QUFDRDtBQUNEb0UsUUFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixJQUFTRixPQUFPLENBQVAsQ0FBbEI7QUFDQUUsUUFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixJQUFTRixPQUFPLENBQVAsQ0FBbEI7QUFDQUcsUUFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixJQUFTSCxPQUFPLENBQVAsQ0FBbEI7QUFDQUcsUUFBSSxDQUFKLElBQVNBLElBQUksQ0FBSixJQUFTSCxPQUFPLENBQVAsQ0FBbEI7QUFDQSxRQUFJN0IsSUFBSXhDLEtBQUtDLEdBQUwsQ0FBU3VFLElBQUksQ0FBSixJQUFTRCxJQUFJLENBQUosQ0FBbEIsQ0FBUjtBQUNBLFFBQUk5QixJQUFJekMsS0FBS0MsR0FBTCxDQUFTdUUsSUFBSSxDQUFKLElBQVNELElBQUksQ0FBSixDQUFsQixDQUFSO0FBQ0EsV0FBTyxJQUFJcEwsU0FBSixDQUFjb0wsSUFBSSxDQUFKLElBQVMvQixJQUFFLENBQXpCLEVBQTRCK0IsSUFBSSxDQUFKLElBQVM5QixJQUFFLENBQXZDLEVBQTBDRCxDQUExQyxFQUE2Q0MsQ0FBN0MsQ0FBUDtBQUNBOztBQUVEOzs7Ozs7O3lCQUlhZ0MsSyxFQUFPO0FBQ25CLFFBQUlDLE9BQU8sSUFBWDtBQUFBLFFBQWlCQyxPQUFPLElBQXhCO0FBQUEsUUFBOEJDLE9BQU8sQ0FBQ0MsUUFBdEM7QUFBQSxRQUFnREMsT0FBTyxDQUFDRCxRQUF4RDtBQUNBLHFCQUFFRSxJQUFGLENBQU9OLEtBQVAsRUFBYyxVQUFVNUMsSUFBVixFQUFnQjtBQUM3QjZDLFlBQU9BLFFBQVE3QyxLQUFLOUIsQ0FBcEI7QUFDQTRFLFlBQU9BLFFBQVE5QyxLQUFLMUIsQ0FBcEI7QUFDQXVFLFlBQU8xRSxLQUFLdUUsR0FBTCxDQUFTRyxJQUFULEVBQWU3QyxLQUFLOUIsQ0FBcEIsQ0FBUDtBQUNBNEUsWUFBTzNFLEtBQUt1RSxHQUFMLENBQVNJLElBQVQsRUFBZTlDLEtBQUsxQixDQUFwQixDQUFQO0FBQ0F5RSxZQUFPNUUsS0FBS3dFLEdBQUwsQ0FBU0ksSUFBVCxFQUFlL0MsS0FBS2MsS0FBTCxFQUFmLENBQVA7QUFDQW1DLFlBQU85RSxLQUFLd0UsR0FBTCxDQUFTTSxJQUFULEVBQWVqRCxLQUFLZ0IsTUFBTCxFQUFmLENBQVA7QUFDQSxLQVBEO0FBUUE2QixXQUFPQSxRQUFRLENBQWY7QUFDQUMsV0FBT0EsUUFBUSxDQUFmO0FBQ0EsV0FBTyxJQUFJeEwsU0FBSixDQUFjdUwsSUFBZCxFQUFvQkMsSUFBcEIsRUFBMEJDLE9BQU9GLElBQWpDLEVBQXVDSSxPQUFPSCxJQUE5QyxDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7OztnQ0FTb0JLLEMsRUFBR3JCLEMsRUFBdUI7QUFBQSxRQUFwQkwsVUFBb0IsdUVBQVAsS0FBTzs7QUFDN0MsUUFBSSxDQUFDQSxVQUFMLEVBQ0MsT0FBTyxvQkFBVTBCLEVBQUVqRixDQUFaLEVBQWVpRixFQUFFN0UsQ0FBakIsRUFBb0I4RCxZQUFwQixDQUFpQyxvQkFBVU4sRUFBRTVELENBQVosRUFBZTRELEVBQUV4RCxDQUFqQixDQUFqQyxDQUFQOztBQUVELFFBQUlyRixVQUFKO0FBQUEsUUFBT3dHLFdBQVd0QixLQUFLQyxHQUFMLENBQVMrRSxFQUFFdEMsSUFBRixHQUFTaUIsRUFBRTVELENBQXBCLENBQWxCO0FBQUEsUUFBMENvRSxZQUFZLGdCQUFNcEMsQ0FBNUQ7O0FBRUFqSCxRQUFJa0YsS0FBS0MsR0FBTCxDQUFTK0UsRUFBRXBDLEdBQUYsR0FBUWUsRUFBRXhELENBQW5CLENBQUo7QUFDQSxRQUFJckYsS0FBS3dHLFFBQVQsRUFBbUI7QUFDbEJBLGdCQUFXeEcsQ0FBWDtBQUNBcUosaUJBQVksZ0JBQU1uQyxDQUFsQjtBQUNBOztBQUVEbEgsUUFBSWtGLEtBQUtDLEdBQUwsQ0FBUytFLEVBQUVuQyxNQUFGLEdBQVdjLEVBQUV4RCxDQUF0QixDQUFKO0FBQ0EsUUFBSXJGLEtBQUt3RyxRQUFULEVBQW1CO0FBQ2xCQSxnQkFBV3hHLENBQVg7QUFDQXFKLGlCQUFZLGdCQUFNbEMsQ0FBbEI7QUFDQTs7QUFFRG5ILFFBQUlrRixLQUFLQyxHQUFMLENBQVMrRSxFQUFFckMsS0FBRixHQUFVZ0IsRUFBRTVELENBQXJCLENBQUo7QUFDQSxRQUFJakYsSUFBSXdHLFFBQVIsRUFBa0I7QUFDakI2QyxpQkFBWSxnQkFBTWpDLENBQWxCO0FBQ0E7O0FBRUQsV0FBT2lDLFNBQVA7QUFDQTs7Ozs7O21CQS9ObUJoTCxTOzs7Ozs7QUNKckIsZ0Q7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7OztBQUVBLEtBQUk4TCxXQUFXLEVBQWY7O0tBRU0vTCxLO0FBQ0wsaUJBQVk2RyxDQUFaLEVBQWVJLENBQWYsRUFBa0JELEtBQWxCLEVBQXlCRSxNQUF6QixFQUFpQzlDLE1BQWpDLEVBQXlDO0FBQUE7O0FBQ3hDLFFBQUt5QyxDQUFMLEdBQVNBLENBQVQ7QUFDQSxRQUFLSSxDQUFMLEdBQVNBLENBQVQ7QUFDQSxRQUFLRCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxRQUFLRSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxvQkFBRThFLFFBQUYsQ0FBVyxJQUFYLEVBQWlCNUgsTUFBakIsRUFBeUIsRUFBQ3lDLEdBQUcsQ0FBSixFQUFPSSxHQUFHLENBQVYsRUFBYUQsT0FBTyxDQUFwQixFQUF1QkUsUUFBUSxDQUEvQixFQUF6QjtBQUNBOztBQUVEOzs7Ozs7OzRCQXdCU21DLEUsRUFBSTtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUU5Qjs7Ozs7O29DQUdpQjNHLEMsRUFBRztBQUFDLFdBQU8sSUFBUDtBQUFhOztBQUVsQzs7Ozs7Ozs7Z0NBS2F1SixLLEVBQTJCO0FBQUEsUUFBcEI3QixVQUFvQix1RUFBUCxLQUFPOztBQUN2QyxXQUFPLEtBQUtoRixXQUFMLENBQWlCOEcsWUFBakIsQ0FBOEIsSUFBOUIsRUFBb0NELEtBQXBDLEVBQTJDN0IsVUFBM0MsQ0FBUDtBQUNBOzs7MEJBRU0rQixJLEVBQU07QUFDWixRQUFJQyxXQUFXLGlCQUFFQSxRQUFGLENBQVdELEtBQUtFLFdBQUwsQ0FBaUIsS0FBSzFJLElBQXRCLEVBQTRCLElBQTVCLENBQVgsQ0FBZjtBQUNBLFdBQU95SSxTQUFTLElBQVQsQ0FBUDtBQUNBOzs7dUJBeENTO0FBQUUsV0FBTyxLQUFLbkYsQ0FBTCxHQUFTLEtBQUtDLE1BQUwsR0FBWSxDQUE1QjtBQUFnQzs7QUFFNUM7Ozs7Ozt1QkFHYTtBQUFFLFdBQU8sS0FBS0QsQ0FBTCxHQUFTLEtBQUtDLE1BQUwsR0FBWSxDQUE1QjtBQUFnQzs7QUFFL0M7Ozs7Ozt1QkFHVztBQUFFLFdBQU8sS0FBS0wsQ0FBTCxHQUFTLEtBQUtHLEtBQUwsR0FBVyxDQUEzQjtBQUErQjs7QUFFNUM7Ozs7Ozt1QkFHWTtBQUFFLFdBQU8sS0FBS0gsQ0FBTCxHQUFTLEtBQUtHLEtBQUwsR0FBVyxDQUEzQjtBQUErQjs7O3VCQUVoQztBQUFFLFdBQU8sb0JBQVUsS0FBS0gsQ0FBZixFQUFrQixLQUFLSSxDQUF2QixDQUFQO0FBQW1DOzs7dUJBRXJDO0FBQUUsV0FBTyx3QkFBYyxLQUFLSixDQUFuQixFQUFzQixLQUFLSSxDQUEzQixFQUE4QixLQUFLRCxLQUFuQyxFQUEwQyxLQUFLRSxNQUEvQyxDQUFQO0FBQWdFOzs7NEJBdUIvRHZELEksRUFBTTtBQUNyQixXQUFPb0ksU0FBU3BJLElBQVQsQ0FBUDtBQUNBOzs7NEJBRWVBLEksRUFBTWhCLEMsRUFBRztBQUN4Qm9KLGFBQVNwSSxJQUFULElBQWlCaEIsQ0FBakI7QUFDQTs7OytCQUVrQmdCLEksRUFBTTtBQUN4QixXQUFPb0ksU0FBU3BJLElBQVQsQ0FBUDtBQUNBOzs7Ozs7bUJBR2EzRCxLOzs7Ozs7Ozs7Ozs7QUN6RWY7Ozs7OztBQUVBOzs7bUJBR2U7QUFDZHNNLFFBQU8sWUFBWTtBQUNsQixPQUFJLENBQUN2SixNQUFELElBQVcsQ0FBQ0EsT0FBT0ksU0FBbkIsSUFBZ0MsQ0FBQ0EsU0FBckMsRUFBZ0QsT0FBTyxLQUFQO0FBQ2hELE9BQUlvSixTQUFTeEosT0FBT0ksU0FBUCxDQUFpQnFKLFNBQTlCO0FBQ0EsT0FBSUMsTUFBTUYsT0FBT25LLE9BQVAsQ0FBZSxNQUFmLENBQVY7O0FBRUE7QUFDQSxPQUFJcUssTUFBTSxDQUFWLEVBQ0MsT0FBT0MsU0FBU0gsT0FBTy9GLFNBQVAsQ0FBaUJpRyxNQUFNLENBQXZCLEVBQTBCRixPQUFPbkssT0FBUCxDQUFlLEdBQWYsRUFBb0JxSyxHQUFwQixDQUExQixDQUFULENBQVA7O0FBRUQ7QUFIQSxRQUlLLElBQUksQ0FBQyxDQUFDdEosVUFBVXFKLFNBQVYsQ0FBb0JHLEtBQXBCLENBQTBCLGNBQTFCLENBQU4sRUFDSixPQUFPLEVBQVAsQ0FESSxLQUVBLElBQUksQ0FBQyxDQUFDeEosVUFBVXFKLFNBQVYsQ0FBb0JHLEtBQXBCLENBQTBCLFFBQTFCLENBQU4sRUFDSixPQUFPLE1BQVAsQ0FESSxLQUdKLE9BQU8sS0FBUDtBQUNELEdBaEJLLEVBRFE7O0FBbUJkQyxhQUFhLFlBQVU7QUFDdEI7QUFDQSxVQUFPLE9BQU9DLGNBQVAsS0FBMEIsV0FBakM7QUFDQSxHQUhXLEVBbkJFOztBQXdCZEMsWUFBVyxZQUFXO0FBQ3JCLE9BQUksQ0FBQy9KLE1BQUQsSUFBVyxDQUFDQSxPQUFPSSxTQUFuQixJQUFnQyxDQUFDQSxTQUFqQyxJQUE4Q0EsVUFBVXFKLFNBQVYsQ0FBb0JwSyxPQUFwQixDQUE0QixNQUE1QixLQUF1QyxDQUF6RixFQUE0RixPQUFPLEtBQVA7QUFDNUYsT0FBSTJLLE1BQU01SixVQUFVcUosU0FBVixDQUFvQkcsS0FBcEIsQ0FBMEIsMEJBQTFCLENBQVY7QUFDQSxVQUFPSSxNQUFNTCxTQUFTSyxJQUFJLENBQUosQ0FBVCxFQUFpQixFQUFqQixDQUFOLEdBQTZCLEtBQXBDO0FBQ0EsR0FKUyxFQXhCSTs7QUE4QmRDLFNBQVEsWUFBVztBQUNsQixPQUFJLENBQUNqSyxNQUFELElBQVcsQ0FBQ0EsT0FBT0ksU0FBbkIsSUFBZ0MsQ0FBQ0EsU0FBckMsRUFBZ0QsT0FBTyxLQUFQO0FBQ2hELFVBQU9BLFVBQVU4SixRQUFWLENBQW1CQyxXQUFuQixHQUFpQzlLLE9BQWpDLENBQXlDLEtBQXpDLEtBQW1ELENBQTFEO0FBQ0EsR0FITSxFQTlCTzs7QUFtQ2QrSyxhQUFZLFlBQVc7QUFDdEIsT0FBSSxDQUFDcEssTUFBRCxJQUFXLENBQUNBLE9BQU9JLFNBQW5CLElBQWdDLENBQUNBLFNBQXJDLEVBQWdELE9BQU8sS0FBUDtBQUNoRCxVQUFPQSxVQUFVaUssVUFBVixDQUFxQmhMLE9BQXJCLENBQTZCLFNBQTdCLEtBQTJDLENBQWxEO0FBQ0EsR0FIVSxFQW5DRzs7QUF3Q2RpTCxXQUFVLFlBQVc7QUFDcEIsT0FBSSxDQUFDdEssTUFBRCxJQUFXLENBQUNBLE9BQU9JLFNBQW5CLElBQWdDLENBQUNBLFNBQXJDLEVBQWdELE9BQU8sS0FBUDtBQUNoRCxVQUFPQSxVQUFVaUssVUFBVixDQUFxQmhMLE9BQXJCLENBQTZCLE9BQTdCLEtBQXlDLENBQWhEO0FBQ0EsR0FIUSxFQXhDSzs7QUE2Q2RrTCxpQkFBZSx1QkFBVUMsR0FBVixFQUFlQyxPQUFmLEVBQXdCQyxNQUF4QixFQUFnQ0MsSUFBaEMsRUFBc0M7QUFDcEQsT0FBSXJFLEtBQUtuRyxTQUFTb0ssYUFBVCxDQUF1QkMsR0FBdkIsQ0FBVDtBQUNBLFFBQUtJLFVBQUwsQ0FBZ0J0RSxFQUFoQixFQUFvQm1FLE9BQXBCLEVBQTZCQyxNQUE3QjtBQUNBLE9BQUlDLElBQUosRUFDQ3JFLEdBQUd1RSxTQUFILEdBQWVGLElBQWY7QUFDRCxVQUFPckUsRUFBUDtBQUNBLEdBbkRhOztBQXFEZHdFLHlCQUF1QiwrQkFBU0MsR0FBVCxFQUFjO0FBQ3BDLE9BQUlDLE9BQU8sS0FBS1QsYUFBTCxDQUFtQixLQUFuQixFQUEwQixJQUExQixFQUFnQyxJQUFoQyxFQUFzQ1EsR0FBdEMsQ0FBWDtBQUNBLFVBQU9DLEtBQUtDLFVBQVo7QUFDQSxHQXhEYTs7QUEwRGRMLGNBQVksb0JBQVV0RSxFQUFWLEVBQWNtRSxPQUFkLEVBQXVCQyxNQUF2QixFQUErQjtBQUMxQyxPQUFJRCxPQUFKLEVBQWE7QUFDWixxQkFBRTFJLE9BQUYsQ0FBVTBJLE9BQVYsRUFBbUIsVUFBUzNILEtBQVQsRUFBZ0JvSSxHQUFoQixFQUFxQjtBQUNwQzVFLFFBQUc2RSxZQUFILENBQWdCRCxHQUFoQixFQUFxQnBJLEtBQXJCO0FBQ0YsS0FGRjtBQUdBO0FBQ0QsT0FBSTRILE1BQUosRUFBWTtBQUNYLHFCQUFFM0ksT0FBRixDQUFVMkksTUFBVixFQUFrQixVQUFTNUgsS0FBVCxFQUFnQm9JLEdBQWhCLEVBQXFCO0FBQ3RDNUUsUUFBRzhFLEtBQUgsQ0FBU0YsR0FBVCxJQUFnQnBJLEtBQWhCO0FBQ0EsS0FGRDtBQUdBO0FBQ0QsR0FyRWE7O0FBdUVkdUksZUFBYSxxQkFBU0MsSUFBVCxFQUFlQyxNQUFmLEVBQXVCO0FBQ25DLFVBQU9ELFFBQVFBLEtBQUtFLFFBQUwsSUFBaUIsQ0FBekIsS0FBZ0MsQ0FBQ0QsTUFBRCxJQUFXQSxPQUFPRCxJQUFQLENBQTNDLENBQVA7QUFDQSxHQXpFYTs7QUEyRWRHLGlCQUFlLHVCQUFTSCxJQUFULEVBQWVDLE1BQWYsRUFBdUI7QUFDckMsVUFBT0QsT0FBT0EsS0FBS0ksVUFBbkI7QUFDQyxRQUFJLEtBQUtMLFdBQUwsQ0FBaUJDLElBQWpCLEVBQXVCQyxNQUF2QixDQUFKLEVBQ0MsT0FBT0QsSUFBUDtBQUZGLElBSUEsT0FBTyxJQUFQO0FBQ0EsR0FqRmE7O0FBbUZkOzs7Ozs7QUFNQUssYUF6RmMsdUJBeUZGckYsRUF6RkUsRUF5RkVzRixPQXpGRixFQXlGVztBQUN4QixPQUFJLENBQUNBLE9BQUwsRUFBY0EsVUFBVXpMLFNBQVMwTCxJQUFuQjtBQUNkLE9BQUlDLFNBQVN4RixHQUFHeUYscUJBQUgsRUFBYjtBQUNBLE9BQUlDLGNBQWNKLFFBQVFHLHFCQUFSLEVBQWxCOztBQUVBLFVBQU8sQ0FBQ0QsT0FBT3JGLElBQVAsR0FBY3VGLFlBQVl2RixJQUEzQixFQUFpQ3FGLE9BQU9uRixHQUFQLEdBQWFxRixZQUFZckYsR0FBMUQsQ0FBUDtBQUNBLEdBL0ZhO0FBaUdkc0YsbUJBakdjLDZCQWlHSTNGLEVBakdKLEVBaUdRc0YsT0FqR1IsRUFpR2lCO0FBQzlCLE9BQUksQ0FBQ0EsT0FBTCxFQUFjQSxVQUFVekwsU0FBUzBMLElBQW5CO0FBQ2QsT0FBSUMsU0FBU3hGLEdBQUd5RixxQkFBSCxFQUFiO0FBQ0EsT0FBSUMsY0FBY0osUUFBUUcscUJBQVIsRUFBbEI7QUFDQSxPQUFJeEYsSUFBSXVGLE9BQU9wRixLQUFQLEdBQWVvRixPQUFPckYsSUFBOUI7QUFDQSxPQUFJRCxJQUFJc0YsT0FBT2xGLE1BQVAsR0FBZ0JrRixPQUFPbkYsR0FBL0I7O0FBRUEsVUFBTyxDQUFDbUYsT0FBT3JGLElBQVAsR0FBY3VGLFlBQVl2RixJQUExQixHQUFpQ0YsSUFBRSxDQUFwQyxFQUF1Q3VGLE9BQU9uRixHQUFQLEdBQWFxRixZQUFZckYsR0FBekIsR0FBK0JILElBQUUsQ0FBeEUsQ0FBUDtBQUNBLEdBekdhOzs7QUEyR2QwRixRQUFNLGNBQVM1RixFQUFULEVBQWF4QyxDQUFiLEVBQWdCSSxDQUFoQixFQUFtQjtBQUN4QixPQUFJSixDQUFKLEVBQU93QyxHQUFHOEUsS0FBSCxDQUFTM0UsSUFBVCxHQUFnQjNDLElBQUksSUFBcEI7QUFDUCxPQUFJSSxDQUFKLEVBQU9vQyxHQUFHOEUsS0FBSCxDQUFTekUsR0FBVCxHQUFlekMsSUFBSSxJQUFuQjtBQUNQLEdBOUdhOztBQWdIZGlJLFdBQVMsaUJBQVM3RixFQUFULEVBQWE7QUFDckIsT0FBSUMsSUFBSW9ELFNBQVNyRCxHQUFHOEUsS0FBSCxDQUFTZ0IsV0FBbEIsRUFBK0IsRUFBL0IsQ0FBUjtBQUNBLE9BQUk1RixJQUFJbUQsU0FBU3JELEdBQUc4RSxLQUFILENBQVNpQixZQUFsQixFQUFnQyxFQUFoQyxDQUFSO0FBQ0EsVUFBTyxDQUFDOUYsQ0FBRCxFQUFJQyxDQUFKLENBQVA7QUFDQSxHQXBIYTs7QUFzSGQ4RixVQUFRLGdCQUFTaEcsRUFBVCxFQUFhQyxDQUFiLEVBQWdCQyxDQUFoQixFQUFtQjtBQUMxQixPQUFJRCxDQUFKLEVBQU9ELEdBQUc4RSxLQUFILENBQVNuSCxLQUFULEdBQWlCc0MsSUFBSSxJQUFyQjtBQUNQLE9BQUlDLENBQUosRUFBT0YsR0FBRzhFLEtBQUgsQ0FBU2pILE1BQVQsR0FBa0JxQyxJQUFJLElBQXRCO0FBQ1AsR0F6SGE7O0FBMkhkK0YsaUJBQWUsdUJBQVNDLEtBQVQsRUFBZ0I7QUFDOUIsT0FBSSxDQUFDLEtBQUtELGFBQUwsQ0FBbUJFLElBQXhCLEVBQThCLEtBQUtGLGFBQUwsQ0FBbUJFLElBQW5CLEdBQTBCLEVBQTFCO0FBQzlCLE9BQUksQ0FBQyxLQUFLRixhQUFMLENBQW1CRyxNQUF4QixFQUFnQyxLQUFLSCxhQUFMLENBQW1CRyxNQUFuQixHQUE0QixFQUE1Qjs7QUFFaEMsT0FBSUQsT0FBTyxLQUFLRixhQUFMLENBQW1CRSxJQUE5QjtBQUNBLE9BQUlFLEdBQUo7QUFBQSxPQUFTQyxPQUFPLElBQWhCO0FBQ0EsUUFBSyxJQUFJL04sSUFBSSxDQUFiLEVBQWdCQSxJQUFJMk4sTUFBTXpOLE1BQTFCLEVBQWtDRixHQUFsQyxFQUF1QztBQUN0QzhOLFVBQU0sSUFBSUUsS0FBSixFQUFOO0FBQ0FGLFFBQUlHLE1BQUosR0FBYSxZQUFXO0FBQ3ZCLFNBQUlDLFFBQVFOLEtBQUtwTixPQUFMLENBQWEsSUFBYixDQUFaO0FBQ0EsU0FBSTBOLFVBQVUsQ0FBQyxDQUFmLEVBQWtCO0FBQ2pCSCxXQUFLTCxhQUFMLENBQW1CRyxNQUFuQixDQUEwQixLQUFLOUwsSUFBL0IsSUFBdUMsRUFBQ3FELE9BQU8sS0FBS0EsS0FBYixFQUFvQkUsUUFBUSxLQUFLQSxNQUFqQyxFQUF2QztBQUNBO0FBQ0E7QUFDQXNJLFdBQUtqTSxNQUFMLENBQVl1TSxLQUFaLEVBQW1CLENBQW5CO0FBQ0E7QUFDRCxLQVJEO0FBU0FOLFNBQUtuSixJQUFMLENBQVVxSixHQUFWO0FBQ0FBLFFBQUlLLEdBQUosR0FBVVIsTUFBTTNOLENBQU4sQ0FBVjtBQUNBOE4sUUFBSS9MLElBQUosR0FBVzRMLE1BQU0zTixDQUFOLENBQVg7QUFDQTtBQUNELEdBaEphOztBQWtKZDs7OztBQUlBb08sZ0JBQWMsc0JBQVNELEdBQVQsRUFBYztBQUMzQixPQUFJLEtBQUtULGFBQUwsQ0FBbUJHLE1BQXZCLEVBQStCO0FBQzlCLFdBQU8sS0FBS0gsYUFBTCxDQUFtQkcsTUFBbkIsQ0FBMEJNLEdBQTFCLENBQVA7QUFDQTtBQUNELFVBQU8sSUFBUDtBQUNBLEdBM0phOztBQTZKZEUsZ0JBQWMsc0JBQVN0TSxJQUFULEVBQWV1TSxJQUFmLEVBQXFCO0FBQ2xDLE9BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1gsT0FBSUMsT0FBT0QsS0FBS3ZELEtBQUwsQ0FBVyxnQkFBWCxFQUE2QixDQUE3QixDQUFYO0FBQ0EsT0FBSWhKLEtBQUt2QixPQUFMLENBQWEsR0FBYixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixRQUFJLENBQUMrTixJQUFMLEVBQVdBLE9BQU8sWUFBUDtBQUNYLFFBQUlBLFFBQVEsWUFBWixFQUNDeE0sT0FBT0EsT0FBTyxNQUFkLENBREQsS0FFSztBQUNKLFNBQUlGLE9BQU8wTSxLQUFLQyxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFYO0FBQ0EsU0FBSTNNLEtBQUtyQixPQUFMLENBQWEsR0FBYixJQUFvQixDQUF4QixFQUEyQnFCLE9BQU9BLEtBQUsyTSxLQUFMLENBQVcsR0FBWCxFQUFnQixDQUFoQixDQUFQO0FBQzNCek0sWUFBT0EsT0FBTyxHQUFQLEdBQWFGLElBQXBCO0FBQ0E7QUFDRDtBQUNELE9BQUksS0FBSzZJLElBQVQsRUFBZTtBQUNkLFFBQUkrRCxVQUFVSCxLQUFLOU4sT0FBTCxDQUFhLFNBQWIsS0FBMkIsQ0FBekM7QUFDQSxRQUFJaU8sT0FBSixFQUNDSCxPQUFPSSxLQUFLSixLQUFLL04sT0FBTCxDQUFhLFVBQVVnTyxJQUFWLEdBQWlCLFVBQTlCLEVBQTBDLEVBQTFDLENBQUwsQ0FBUCxDQURELEtBR0NELE9BQU9LLFVBQVVMLEtBQUsvTixPQUFMLENBQWEsVUFBVWdPLElBQVYsR0FBaUIsR0FBOUIsRUFBbUMsRUFBbkMsQ0FBVixDQUFQO0FBQ0RELFdBQU8sS0FBS00sT0FBTCxDQUFhTixJQUFiLEVBQW1CQyxJQUFuQixDQUFQO0FBQ0FoTixjQUFVc04sVUFBVixDQUFxQlAsSUFBckIsRUFBMkJ2TSxJQUEzQjtBQUNBLElBUkQsTUFRTztBQUNOLFFBQUkrTSxPQUFPLEtBQUtwRCxhQUFMLENBQW1CLEdBQW5CLEVBQXdCLEVBQUNxRCxNQUFNVCxJQUFQLEVBQWFVLFVBQVVqTixJQUF2QixFQUF4QixFQUFzRCxFQUFDa04sU0FBUyxNQUFWLEVBQXRELENBQVg7QUFDQTNOLGFBQVMwTCxJQUFULENBQWNrQyxXQUFkLENBQTBCSixJQUExQjtBQUNBQSxTQUFLSyxLQUFMO0FBQ0FMLFNBQUtqQyxVQUFMLENBQWdCdUMsV0FBaEIsQ0FBNEJOLElBQTVCO0FBQ0E7QUFDRCxHQXhMYTs7QUEwTGQ7OztBQUdBRixXQUFTLGlCQUFVTixJQUFWLEVBQWdCZSxXQUFoQixFQUE2QkMsU0FBN0IsRUFBd0M7QUFDaERELGlCQUFjQSxlQUFlLEVBQTdCO0FBQ0FDLGVBQVlBLGFBQWEsR0FBekI7O0FBRUEsT0FBSUMsYUFBYSxFQUFqQjs7QUFFQSxRQUFLLElBQUlDLFNBQVMsQ0FBbEIsRUFBcUJBLFNBQVNsQixLQUFLcE8sTUFBbkMsRUFBMkNzUCxVQUFVRixTQUFyRCxFQUFnRTtBQUMvRCxRQUFJRyxRQUFRbkIsS0FBS21CLEtBQUwsQ0FBV0QsTUFBWCxFQUFtQkEsU0FBU0YsU0FBNUIsQ0FBWjs7QUFFQSxRQUFJSSxjQUFjLElBQUk5TixLQUFKLENBQVU2TixNQUFNdlAsTUFBaEIsQ0FBbEI7QUFDQSxTQUFLLElBQUlGLElBQUksQ0FBYixFQUFnQkEsSUFBSXlQLE1BQU12UCxNQUExQixFQUFrQ0YsR0FBbEMsRUFBdUM7QUFDdEMwUCxpQkFBWTFQLENBQVosSUFBaUJ5UCxNQUFNdFAsVUFBTixDQUFpQkgsQ0FBakIsQ0FBakI7QUFDQTtBQUNELFFBQUkyUCxZQUFZLElBQUlDLFVBQUosQ0FBZUYsV0FBZixDQUFoQjtBQUNBSCxlQUFXOUssSUFBWCxDQUFnQmtMLFNBQWhCO0FBQ0E7QUFDRCxVQUFPLElBQUlFLElBQUosQ0FBU04sVUFBVCxFQUFxQixFQUFDMU4sTUFBTXdOLFdBQVAsRUFBckIsQ0FBUDtBQUNBLEdBOU1hOztBQWdOZFMsYUFBVyxtQkFBUy9OLElBQVQsRUFBZWdPLEtBQWYsRUFBc0I7QUFDaEMsT0FBSUMsV0FBVzdPLE9BQU84TyxJQUFQLENBQVksRUFBWixFQUFnQixRQUFoQixFQUEwQixtRUFBMUIsQ0FBZjtBQUNBLE9BQUlDLGFBQWFGLFNBQVMxTyxRQUExQjtBQUNBLE9BQUl3TSxNQUFNb0MsV0FBV3hFLGFBQVgsQ0FBeUIsS0FBekIsQ0FBVjtBQUNBLFFBQUtLLFVBQUwsQ0FBZ0IrQixHQUFoQixFQUFxQixFQUFDSyxLQUFLNEIsS0FBTixFQUFhaE8sTUFBTUEsSUFBbkIsRUFBckI7QUFDQW1PLGNBQVdsRCxJQUFYLENBQWdCa0MsV0FBaEIsQ0FBNEJwQixHQUE1QjtBQUNBLEdBdE5hOztBQXdOZDs7OztBQUlBcUMsa0JBQWdCLHdCQUFTQyxDQUFULEVBQVc7QUFDMUIsT0FBSUMsVUFBVUQsRUFBRUUsTUFBRixDQUFTRCxPQUF2QjtBQUNBLFVBQVFBLFdBQVcsT0FBWCxJQUFzQkEsV0FBVyxVQUFqQyxJQUErQ0EsV0FBVyxRQUFsRTtBQUNBO0FBL05hLEU7Ozs7Ozs7Ozs7Ozs7O0FDTGY7Ozs7Ozs7O0FBRUE7OztLQUdxQnBTLFk7QUFDcEIsd0JBQVlpTyxHQUFaLEVBQWlCO0FBQUE7O0FBQ2hCLFFBQUtxRSxNQUFMLEdBQWMsRUFBZDtBQUNBLE9BQUlyRSxHQUFKLEVBQ0MsS0FBS3FFLE1BQUwsQ0FBWTlMLElBQVosQ0FBaUJ5SCxHQUFqQjtBQUNEOzs7OzBCQUVNc0UsSyxFQUFPO0FBQ2IsUUFBSSxpQkFBRW5NLFFBQUYsQ0FBV21NLEtBQVgsQ0FBSixFQUNDLEtBQUtELE1BQUwsQ0FBWTlMLElBQVosQ0FBaUIrTCxLQUFqQixFQURELEtBRUssSUFBSSxpQkFBRWhILE9BQUYsQ0FBVWdILEtBQVYsQ0FBSixFQUNKLEtBQUtELE1BQUwsR0FBYyxLQUFLQSxNQUFMLENBQVlFLE1BQVosQ0FBbUJELEtBQW5CLENBQWQsQ0FESSxLQUdKLEtBQUtELE1BQUwsQ0FBWTlMLElBQVosQ0FBaUIsS0FBSytMLEtBQXRCO0FBQ0QsV0FBTyxJQUFQO0FBQ0E7OzsyQkFFT0EsSyxFQUFPO0FBQ2QsUUFBSSxpQkFBRW5NLFFBQUYsQ0FBV21NLEtBQVgsQ0FBSixFQUNDLEtBQUtELE1BQUwsQ0FBWTVPLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUI2TyxLQUF6QixFQURELEtBRUssSUFBSSxpQkFBRWhILE9BQUYsQ0FBVWdILEtBQVYsQ0FBSixFQUNKLEtBQUtELE1BQUwsR0FBY0MsTUFBTUMsTUFBTixDQUFhLEtBQUtGLE1BQWxCLENBQWQsQ0FESSxLQUdKLEtBQUtBLE1BQUwsQ0FBWTVPLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsS0FBSzZPLEtBQTlCO0FBQ0QsV0FBTyxJQUFQO0FBQ0E7OzsyQkFFTztBQUNQLFNBQUtELE1BQUwsR0FBYyxFQUFkO0FBQ0E7OztnQ0FFWTtBQUNaLFNBQUtBLE1BQUwsQ0FBWUcsR0FBWjtBQUNBLFdBQU8sSUFBUDtBQUNBOzs7NEJBRVFDLEcsRUFBSztBQUNiLFFBQUksQ0FBQ0EsR0FBTCxFQUFVQSxNQUFNLEVBQU47QUFDVixXQUFPLEtBQUtKLE1BQUwsQ0FBWUssSUFBWixDQUFpQkQsR0FBakIsQ0FBUDtBQUNBOzs7Ozs7bUJBdkNtQjFTLFk7Ozs7Ozs7Ozs7Ozs7O0FDTHJCOzs7Ozs7OztLQUVxQkUsSTtBQUNwQixnQkFBWTBTLEtBQVosRUFBbUJDLEdBQW5CLEVBQXdCO0FBQUE7O0FBQ3ZCLFFBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFFBQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBOztBQUVEOzs7Ozs7OzRCQUdTO0FBQ1IsV0FBTyxLQUFLRCxLQUFMLENBQVdySyxRQUFYLENBQW9CLEtBQUtzSyxHQUF6QixDQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs0QkFHUzlJLEUsRUFBSTtBQUNaLFFBQUkvQyxJQUFJLEtBQUs0TCxLQUFMLENBQVdySyxRQUFYLENBQW9Cd0IsRUFBcEIsQ0FBUjtBQUNBLFFBQUkvQyxLQUFLLENBQVQsRUFBWSxPQUFPLENBQVA7O0FBRVosUUFBSThMLElBQUksS0FBSzdRLE1BQUwsRUFBUjtBQUNBLFFBQUk4USxPQUFPLG9CQUFVLENBQUMsS0FBS0YsR0FBTCxDQUFTN0wsQ0FBVCxHQUFhLEtBQUs0TCxLQUFMLENBQVc1TCxDQUF6QixJQUE4QjhMLENBQXhDLEVBQTJDLENBQUMsS0FBS0QsR0FBTCxDQUFTekwsQ0FBVCxHQUFhLEtBQUt3TCxLQUFMLENBQVd4TCxDQUF6QixJQUE4QjBMLENBQXpFLEVBQTRFRSxVQUE1RSxDQUNWLG9CQUFVakosR0FBRy9DLENBQUgsR0FBT0EsQ0FBakIsRUFBb0IrQyxHQUFHM0MsQ0FBSCxHQUFPSixDQUEzQixDQURVLENBQVg7O0FBR0EsV0FBT0EsSUFBSUMsS0FBS21CLElBQUwsQ0FBVSxJQUFJMkssT0FBT0EsSUFBckIsQ0FBWDtBQUNBOztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzhCQW9DVztBQUNWLFdBQU8saUJBQWlCLEtBQUtILEtBQXRCLEdBQThCLE9BQTlCLEdBQXdDLEtBQUtDLEdBQTdDLEdBQW1ELEdBQTFEO0FBQ0E7OztnQ0F0Qm1CSSxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSUMsRSxFQUFJQyxFLEVBQUlDLEUsRUFBSTtBQUNuRCxRQUFJQyxRQUFTLENBQUNELEtBQUtGLEVBQU4sS0FBYUgsS0FBS0YsRUFBbEIsQ0FBRCxHQUEyQixDQUFDTSxLQUFLRixFQUFOLEtBQWFELEtBQUtGLEVBQWxCLENBQXZDO0FBQ0EsUUFBSVEsU0FBVSxDQUFDSCxLQUFLRixFQUFOLEtBQWFILEtBQUtJLEVBQWxCLENBQUQsR0FBMkIsQ0FBQ0UsS0FBS0YsRUFBTixLQUFhTCxLQUFLSSxFQUFsQixDQUF4QztBQUNBLFFBQUlNLFNBQVUsQ0FBQ1IsS0FBS0YsRUFBTixLQUFhQyxLQUFLSSxFQUFsQixDQUFELEdBQTJCLENBQUNGLEtBQUtGLEVBQU4sS0FBYUQsS0FBS0ksRUFBbEIsQ0FBeEM7O0FBRUEsUUFBSU8sS0FBS0YsU0FBU0QsS0FBbEI7QUFDQSxRQUFJSSxLQUFLRixTQUFTRixLQUFsQjs7QUFFQSxRQUFJRyxNQUFNLEdBQU4sSUFBYUEsTUFBTSxHQUFuQixJQUEwQkMsTUFBTSxHQUFoQyxJQUF1Q0EsTUFBTSxHQUFqRCxFQUFzRDtBQUNyRDtBQUNBLFNBQUlDLGdCQUFnQmIsS0FBS1csTUFBTVQsS0FBS0YsRUFBWCxDQUF6QjtBQUNBLFNBQUljLGdCQUFnQmIsS0FBS1UsTUFBTVIsS0FBS0YsRUFBWCxDQUF6Qjs7QUFFQSxZQUFPLG9CQUFVWSxhQUFWLEVBQXlCQyxhQUF6QixDQUFQO0FBQ0E7O0FBRUQ7QUFDQSxXQUFPLElBQVA7QUFDQTs7Ozs7O21CQTdEbUI3VCxJOzs7Ozs7Ozs7Ozs7OztBQ0ZyQjs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztLQUVxQkcsTzs7Ozs7Ozs7Ozs7OEJBQ1Q7QUFDVixXQUFPLGdCQUFnQixLQUFLMkcsQ0FBckIsR0FBeUIsS0FBekIsR0FBaUMsS0FBS0ksQ0FBdEMsR0FBMEMsU0FBMUMsR0FBc0QsS0FBS0QsS0FBM0QsR0FBbUUsVUFBbkUsR0FBZ0YsS0FBS0UsTUFBckYsR0FBOEYsR0FBckc7QUFDQTs7O2dDQUVtQnlCLEksRUFBTWlCLEUsRUFBd0I7QUFBQSxRQUFwQlEsVUFBb0IsdUVBQVAsS0FBTzs7QUFDakQsUUFBSXlKLElBQUlsTCxLQUFLM0IsS0FBTCxHQUFhLENBQXJCO0FBQ0EsUUFBSThNLElBQUluTCxLQUFLekIsTUFBTCxHQUFjLENBQXRCO0FBQ0EsUUFBSTZNLEtBQUtwTCxLQUFLOUIsQ0FBZDtBQUNBLFFBQUltTixLQUFLckwsS0FBSzFCLENBQWQ7QUFDQSxRQUFJZ04sS0FBS3JLLEdBQUcvQyxDQUFaO0FBQ0EsUUFBSXFOLEtBQUt0SyxHQUFHM0MsQ0FBWjs7QUFFQTtBQUNBO0FBQ0EsUUFBSW9ELEtBQUtxQyxTQUFTdUgsS0FBS0YsRUFBZCxDQUFUO0FBQ0EsUUFBSXpKLEtBQUtvQyxTQUFTd0gsS0FBS0YsRUFBZCxDQUFUOztBQUVBLFFBQUlHLEVBQUosRUFBUUMsRUFBUjs7QUFFQSxRQUFJL0osTUFBTSxDQUFOLElBQVdDLE1BQU0sQ0FBckIsRUFBd0I7QUFDdkIsWUFBTyxvQkFBVXlKLEVBQVYsRUFBY0MsS0FBS0YsSUFBSXhKLEVBQUosR0FBU3hELEtBQUtDLEdBQUwsQ0FBU3VELEVBQVQsQ0FBNUIsQ0FBUDtBQUNBLEtBRkQsTUFFTyxJQUFJRCxNQUFNLENBQU4sSUFBV0MsTUFBTSxDQUFyQixFQUF3QjtBQUM5QixZQUFPLG9CQUFVMkosRUFBVixFQUFjQyxFQUFkLENBQVA7QUFDQTs7QUFFRDtBQUNBLFFBQUlHLElBQUkvSixLQUFLRCxFQUFiO0FBQ0EsUUFBSWQsSUFBSXlLLEtBQUtLLElBQUlOLEVBQWpCO0FBQ0EsUUFBSS9CLElBQUk2QixJQUFJQSxDQUFKLEdBQVFRLENBQVIsR0FBWUEsQ0FBWixHQUFnQlAsSUFBSUEsQ0FBNUI7QUFDQSxRQUFJUSxJQUFJLENBQUMsQ0FBRCxHQUFLUCxFQUFMLEdBQVUvQixDQUFsQjtBQUNBLFFBQUl1QyxJQUFJVixJQUFJQSxDQUFKLEdBQVFRLENBQVIsR0FBWUEsQ0FBWixHQUFnQk4sRUFBaEIsR0FBcUJBLEVBQXJCLEdBQTBCRCxJQUFJQSxDQUFKLEdBQVFDLEVBQVIsR0FBYUEsRUFBdkMsR0FBNENGLElBQUlBLENBQUosR0FBUUMsQ0FBUixHQUFZQSxDQUFoRTtBQUNBLFFBQUlVLE1BQU0xTixLQUFLbUIsSUFBTCxDQUFVcU0sSUFBSUEsQ0FBSixHQUFRLElBQUl0QyxDQUFKLEdBQVF1QyxDQUExQixDQUFWOztBQUVBO0FBQ0EsUUFBSUUsUUFBUSxDQUFDLENBQUNILENBQUQsR0FBS0UsR0FBTixLQUFjLElBQUl4QyxDQUFsQixDQUFaO0FBQ0EsUUFBSTBDLFFBQVEsQ0FBQyxDQUFDSixDQUFELEdBQUtFLEdBQU4sS0FBYyxJQUFJeEMsQ0FBbEIsQ0FBWjtBQUNBLFFBQUkyQyxRQUFRTixJQUFJSSxLQUFKLEdBQVlsTCxDQUF4QjtBQUNBLFFBQUlxTCxRQUFRUCxJQUFJSyxLQUFKLEdBQVluTCxDQUF4QjtBQUNBLFFBQUlzTCxRQUFRL04sS0FBS21CLElBQUwsQ0FBVW5CLEtBQUtnTyxHQUFMLENBQVVMLFFBQVFSLEVBQWxCLEVBQXVCLENBQXZCLElBQTRCbk4sS0FBS2dPLEdBQUwsQ0FBVUgsUUFBUVQsRUFBbEIsRUFBdUIsQ0FBdkIsQ0FBdEMsQ0FBWjtBQUNBLFFBQUlhLFFBQVFqTyxLQUFLbUIsSUFBTCxDQUFVbkIsS0FBS2dPLEdBQUwsQ0FBVUosUUFBUVQsRUFBbEIsRUFBdUIsQ0FBdkIsSUFBNEJuTixLQUFLZ08sR0FBTCxDQUFVRixRQUFRVixFQUFsQixFQUF1QixDQUF2QixDQUF0QyxDQUFaOztBQUVBO0FBQ0EsUUFBSWMsT0FBTyxDQUFYO0FBQ0EsUUFBSUMsT0FBTyxDQUFYOztBQUVBLFFBQUlKLFFBQVFFLEtBQVosRUFBbUI7QUFDbEJDLFlBQU9QLEtBQVA7QUFDQVEsWUFBT04sS0FBUDtBQUNBLEtBSEQsTUFHTztBQUNOSyxZQUFPTixLQUFQO0FBQ0FPLFlBQU9MLEtBQVA7QUFDQTs7QUFFRCxRQUFJbkssSUFBSSxvQkFBVXVLLElBQVYsRUFBZ0JDLElBQWhCLENBQVI7QUFDQSxRQUFJbkssTUFBTSxvQkFBVUMsWUFBVixDQUF1QnBDLElBQXZCLEVBQTZCOEIsQ0FBN0IsRUFBZ0NMLFVBQWhDLENBQVY7QUFDQSxRQUFJQSxVQUFKLEVBQWdCO0FBQ2YsU0FBSVUsSUFBSWpFLENBQUosSUFBUyxDQUFDLENBQWQsRUFBaUI7QUFDaEIsYUFBTyxFQUFDbUUsT0FBTyxvQkFBVStJLEtBQUtGLENBQWYsRUFBa0JHLEVBQWxCLENBQVIsRUFBK0IvSSxXQUFXSCxHQUExQyxFQUFQO0FBQ0E7QUFDRCxTQUFJQSxJQUFJakUsQ0FBSixJQUFTLENBQWIsRUFBZ0I7QUFDZixhQUFPLEVBQUNtRSxPQUFPLG9CQUFVK0ksS0FBS0YsQ0FBZixFQUFrQkcsRUFBbEIsQ0FBUixFQUErQi9JLFdBQVdILEdBQTFDLEVBQVA7QUFDQTtBQUNELFNBQUlBLElBQUk3RCxDQUFKLElBQVMsQ0FBQyxDQUFkLEVBQWlCO0FBQ2hCLGFBQU8sRUFBQytELE9BQU8sb0JBQVUrSSxFQUFWLEVBQWNDLEtBQUtGLENBQW5CLENBQVIsRUFBK0I3SSxXQUFXSCxHQUExQyxFQUFQO0FBQ0E7QUFDRCxTQUFJQSxJQUFJN0QsQ0FBSixJQUFTLENBQWIsRUFBZ0I7QUFDZixhQUFPLEVBQUMrRCxPQUFPLG9CQUFVK0ksRUFBVixFQUFjQyxLQUFLRixDQUFuQixDQUFSLEVBQStCN0ksV0FBV0gsR0FBMUMsRUFBUDtBQUNBO0FBQ0Q7QUFDRCxXQUFPLEVBQUNFLE9BQU9QLENBQVIsRUFBV1EsV0FBV0gsR0FBdEIsRUFBUDtBQUNBOzs7Ozs7bUJBdkVtQjVLLE87Ozs7Ozs7Ozs7Ozs7O0FDSnJCOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsS0FBSWdWLGdCQUFnQjtBQUNuQnpSLFFBQU0sUUFEYTtBQUVuQjBSLGFBQVcsSUFGUTtBQUduQi9LLGNBQVk7QUFITyxFQUFwQjs7QUFNQSxLQUFJZ0wsa0JBQWtCO0FBQ3JCcE8sU0FBTyxDQURjO0FBRXJCRSxVQUFRLENBRmE7QUFHckJHLFdBQVMsQ0FIWTtBQUlyQkUsV0FBUyxDQUpZO0FBS3JCRCxXQUFTLENBTFk7QUFNckJFLFdBQVM7QUFOWSxFQUF0Qjs7QUFTQSxLQUFJNk4sWUFBWSxFQUFoQjs7S0FFTWxWLEk7QUFDTCxnQkFBWW1WLGNBQVosRUFBb0Y7QUFBQSxPQUF4REMsV0FBd0QsdUVBQTFDLEVBQTBDO0FBQUEsT0FBdENDLFdBQXNDLHVFQUF4QixJQUF3QjtBQUFBLE9BQWxCQyxTQUFrQix1RUFBTixJQUFNOztBQUFBOztBQUNuRixRQUFLaEQsS0FBTCxHQUFhNkMsZUFBZSxDQUFmLEVBQWtCdEssS0FBL0I7QUFDQSxRQUFLMEgsR0FBTCxHQUFXNEMsZUFBZSxDQUFmLEVBQWtCdEssS0FBN0I7QUFDQSxRQUFLMEssV0FBTCxHQUFtQkosZUFBZSxDQUFmLEVBQWtCckssU0FBckM7QUFDQSxRQUFLMEssU0FBTCxHQUFpQkwsZUFBZSxDQUFmLEVBQWtCckssU0FBbkM7QUFDQSxRQUFLdUssV0FBTCxHQUFtQkEsV0FBbkI7QUFDQSxRQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjtBQUNBLG9CQUFFblIsTUFBRixDQUFTLElBQVQsRUFBZWlSLFdBQWY7QUFDQTs7OzswQkFFTXBKLEksRUFBTTtBQUNaLFdBQU9BLEtBQUt5SixVQUFMLENBQWdCLElBQWhCLENBQVA7QUFDQTs7Ozs7QUFZRDs7Ozs7O3VDQU1vQmhQLFEsRUFBVTtBQUM3QixRQUFJLGlCQUFFaVAsUUFBRixDQUFXalAsUUFBWCxDQUFKLEVBQ0NBLFdBQVcsRUFBQ0MsR0FBR0QsUUFBSixFQUFYO0FBQ0RBLGVBQVcsaUJBQUVvRixRQUFGLENBQVdwRixRQUFYLEVBQXFCd08sZUFBckIsQ0FBWDtBQUNBLFFBQUkzSyxJQUFJN0QsU0FBU0MsQ0FBakI7QUFBQSxRQUFvQjhMLElBQUksS0FBSzdRLE1BQTdCO0FBQ0EsUUFBSWdGLEtBQUtDLEdBQUwsQ0FBUzBELENBQVQsS0FBZSxDQUFuQixFQUFzQkEsS0FBS2tJLENBQUw7QUFDdEIsUUFBSWxJLElBQUksQ0FBUixFQUFXQSxJQUFJa0ksSUFBSWxJLENBQVI7QUFDWCxRQUFJQSxJQUFJa0ksQ0FBUixFQUFXbEksSUFBSWtJLENBQUo7O0FBRVgsUUFBSW1ELFNBQVMsS0FBS0EsTUFBbEI7QUFBQSxRQUEwQnpCLFVBQTFCO0FBQUEsUUFBNkJySixjQUE3QjtBQUFBLFFBQW9DRixZQUFwQztBQUNBLFNBQUssSUFBSWxKLElBQUksQ0FBYixFQUFnQkEsSUFBSWtVLE9BQU9oVSxNQUFQLEdBQWdCLENBQXBDLEVBQXVDRixHQUF2QyxFQUE0QztBQUMzQ3lTLFNBQUl5QixPQUFPbFUsQ0FBUCxFQUFVd0csUUFBVixDQUFtQjBOLE9BQU9sVSxJQUFFLENBQVQsQ0FBbkIsQ0FBSjtBQUNBLFNBQUk2SSxLQUFLNEosQ0FBVCxFQUFZO0FBQ1g7QUFDQXJKLGNBQVE4SyxPQUFPbFUsQ0FBUCxFQUFVNkcsS0FBVixFQUFSO0FBQ0FxQyxZQUFNRSxNQUFNRCxZQUFOLENBQW1CK0ssT0FBT2xVLElBQUUsQ0FBVCxDQUFuQixDQUFOO0FBQ0FvSixZQUFNK0ssU0FBTixDQUFnQmpMLElBQUlrTCxTQUFKLENBQWN2TCxDQUFkLENBQWhCO0FBQ0E7QUFDQTtBQUNEQSxVQUFLNEosQ0FBTDtBQUNBOztBQUVEO0FBQ0EsUUFBSSxDQUFDckosS0FBTCxFQUNDQSxRQUFROEssT0FBT0EsT0FBT2hVLE1BQVAsR0FBZ0IsQ0FBdkIsQ0FBUjtBQUNELFdBQU8sZ0JBQU1xRixjQUFOLENBQXFCLENBQUM2RCxNQUFNbkUsQ0FBUCxFQUFVbUUsTUFBTS9ELENBQWhCLENBQXJCLEVBQXlDTCxRQUF6QyxDQUFQO0FBQ0E7Ozs4QkFFVTtBQUNWLFdBQU8sTUFBUDtBQUNBOzs7dUJBOUNZO0FBQUUsV0FBTyxJQUFQO0FBQWM7Ozt1QkFDWjtBQUFFLFdBQU8sSUFBUDtBQUFjOzs7dUJBQ3BCO0FBQ1osUUFBSWtQLFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxRQUFJbFUsVUFBSjtBQUFBLFFBQU8rUSxJQUFJLENBQVg7QUFDQSxTQUFLL1EsSUFBSSxDQUFULEVBQVlBLElBQUlrVSxPQUFPaFUsTUFBUCxHQUFnQixDQUFoQyxFQUFtQ0YsR0FBbkM7QUFDQytRLFVBQUttRCxPQUFPbFUsQ0FBUCxFQUFVd0csUUFBVixDQUFtQjBOLE9BQU9sVSxJQUFFLENBQVQsQ0FBbkIsQ0FBTDtBQURELEtBRUEsT0FBTytRLENBQVA7QUFDQTs7OzJCQXdDYzJDLGMsRUFBd0U7QUFBQSxRQUF4REMsV0FBd0QsdUVBQTFDLEVBQTBDO0FBQUEsUUFBdENDLFdBQXNDLHVFQUF4QixJQUF3QjtBQUFBLFFBQWxCQyxTQUFrQix1RUFBTixJQUFNOztBQUN0RkYsa0JBQWMsaUJBQUUxUSxZQUFGLENBQWUwUSxXQUFmLEVBQTRCTCxhQUE1QixDQUFkO0FBQ0EsUUFBSWUsWUFBWVosVUFBVUUsWUFBWTlSLElBQXRCLENBQWhCO0FBQ0EsUUFBSXdTLFNBQUosRUFDQyxPQUFPLElBQUlBLFNBQUosQ0FBY1gsY0FBZCxFQUE4QkMsV0FBOUIsRUFBMkNDLFdBQTNDLEVBQXdEQyxTQUF4RCxDQUFQO0FBQ0RsUCxZQUFROUIsR0FBUixDQUFZLDhCQUE4QjhRLFlBQVk5UixJQUF0RDtBQUNBLFdBQU8sSUFBUDtBQUNBOzs7Ozs7S0FHSXlTLFU7Ozs7Ozs7Ozs7O3VCQUNRO0FBQ1osV0FBTyxDQUFDLEtBQUt6RCxLQUFOLEVBQWEsS0FBS0MsR0FBbEIsQ0FBUDtBQUNBOzs7O0dBSHVCdlMsSTs7S0FNbkJnVyxVOzs7Ozs7Ozs7Ozt1Q0F5QmV2UCxRLEVBQVU7QUFDN0IsUUFBSSxpQkFBRWlQLFFBQUYsQ0FBV2pQLFFBQVgsQ0FBSixFQUNDQSxXQUFXLEVBQUNDLEdBQUdELFFBQUosRUFBWDtBQUNEQSxlQUFXLGlCQUFFb0YsUUFBRixDQUFXcEYsUUFBWCxFQUFxQndPLGVBQXJCLENBQVg7QUFDQSxRQUFJM0ssSUFBSTdELFNBQVNDLENBQWpCO0FBQUEsUUFBb0I4TCxJQUFJLEtBQUs3USxNQUE3QjtBQUNBLFFBQUlnRixLQUFLQyxHQUFMLENBQVMwRCxDQUFULElBQWMsQ0FBbEIsRUFBcUJBLEtBQUtrSSxDQUFMO0FBQ3JCLFFBQUlsSSxJQUFJLENBQVIsRUFBV0E7QUFDWCxRQUFJQSxJQUFJLENBQVIsRUFBV0E7O0FBRVgsUUFBSVMsTUFBTSxLQUFLNEssTUFBZjtBQUNBLFFBQUlNLFVBQVUsS0FBS0MsVUFBbkI7QUFDQSxRQUFJQyxLQUFLcEwsSUFBSSxDQUFKLENBQVQ7QUFDQSxRQUFJaEQsS0FBS2tPLFFBQVEsQ0FBUixFQUFXLENBQVgsQ0FBVDtBQUNBLFFBQUlHLEtBQUtILFFBQVEsQ0FBUixFQUFXLENBQVgsQ0FBVDtBQUNBLFFBQUlJLEtBQUt0TCxJQUFJLENBQUosQ0FBVDs7QUFFQSxRQUFJRixRQUFRLENBQUMsQ0FBQyxJQUFFUCxDQUFILEtBQU8sSUFBRUEsQ0FBVCxLQUFhLElBQUVBLENBQWYsSUFBb0I2TCxHQUFHelAsQ0FBdkIsR0FBMkIsSUFBRTRELENBQUYsSUFBSyxJQUFFQSxDQUFQLEtBQVcsSUFBRUEsQ0FBYixJQUFrQnZDLEdBQUdyQixDQUFoRCxHQUFvRCxJQUFFNEQsQ0FBRixHQUFJQSxDQUFKLElBQU8sSUFBRUEsQ0FBVCxJQUFjOEwsR0FBRzFQLENBQXJFLEdBQXlFNEQsSUFBRUEsQ0FBRixHQUFJQSxDQUFKLEdBQVErTCxHQUFHM1AsQ0FBckYsRUFBd0YsQ0FBQyxJQUFFNEQsQ0FBSCxLQUFPLElBQUVBLENBQVQsS0FBYSxJQUFFQSxDQUFmLElBQW9CNkwsR0FBR3JQLENBQXZCLEdBQTJCLElBQUV3RCxDQUFGLElBQUssSUFBRUEsQ0FBUCxLQUFXLElBQUVBLENBQWIsSUFBa0J2QyxHQUFHakIsQ0FBaEQsR0FBb0QsSUFBRXdELENBQUYsR0FBSUEsQ0FBSixJQUFPLElBQUVBLENBQVQsSUFBYzhMLEdBQUd0UCxDQUFyRSxHQUF5RXdELElBQUVBLENBQUYsR0FBSUEsQ0FBSixHQUFRK0wsR0FBR3ZQLENBQTVLLENBQVo7QUFDQSxXQUFPLGdCQUFNRSxjQUFOLENBQXFCLENBQUM2RCxNQUFNbkUsQ0FBUCxFQUFVbUUsTUFBTS9ELENBQWhCLENBQXJCLEVBQXlDTCxRQUF6QyxDQUFQO0FBQ0E7Ozt1QkExQ1k7QUFDWixXQUFPLENBQUMsS0FBSzZMLEtBQU4sRUFBYSxLQUFLQyxHQUFsQixDQUFQO0FBQ0E7Ozt1QkFFZ0I7QUFDaEIsUUFBSStELElBQUksS0FBS1gsTUFBTCxDQUFZLENBQVosQ0FBUjtBQUFBLFFBQXdCOUQsSUFBSSxLQUFLOEQsTUFBTCxDQUFZLENBQVosQ0FBNUI7QUFDQSxRQUFJNUssTUFBTSxFQUFWO0FBQ0FBLFFBQUksQ0FBSixJQUFTLElBQVQ7QUFDQUEsUUFBSSxDQUFKLElBQVMsRUFBVDtBQUNBLFFBQUksS0FBS3dLLFdBQUwsQ0FBaUI3TyxDQUFqQixJQUFzQixDQUExQixFQUE2QjtBQUM1QnFFLFNBQUksQ0FBSixFQUFPLENBQVAsSUFBWSxvQkFBVXVMLEVBQUU1UCxDQUFaLEVBQWUsQ0FBQzRQLEVBQUV4UCxDQUFGLEdBQU0rSyxFQUFFL0ssQ0FBVCxJQUFZLENBQTNCLENBQVo7QUFDQSxLQUZELE1BR0s7QUFDSmlFLFNBQUksQ0FBSixFQUFPLENBQVAsSUFBWSxvQkFBVSxDQUFDdUwsRUFBRTVQLENBQUYsR0FBTW1MLEVBQUVuTCxDQUFULElBQVksQ0FBdEIsRUFBeUI0UCxFQUFFeFAsQ0FBM0IsQ0FBWjtBQUNBO0FBQ0QsUUFBSSxLQUFLME8sU0FBTCxDQUFlOU8sQ0FBZixJQUFvQixDQUF4QixFQUEyQjtBQUMxQnFFLFNBQUksQ0FBSixFQUFPLENBQVAsSUFBWSxvQkFBVThHLEVBQUVuTCxDQUFaLEVBQWUsQ0FBQzRQLEVBQUV4UCxDQUFGLEdBQU0rSyxFQUFFL0ssQ0FBVCxJQUFZLENBQTNCLENBQVo7QUFDQSxLQUZELE1BR0s7QUFDSmlFLFNBQUksQ0FBSixFQUFPLENBQVAsSUFBWSxvQkFBVSxDQUFDdUwsRUFBRTVQLENBQUYsR0FBTW1MLEVBQUVuTCxDQUFULElBQVksQ0FBdEIsRUFBeUJtTCxFQUFFL0ssQ0FBM0IsQ0FBWjtBQUNBO0FBQ0QsV0FBT2lFLEdBQVA7QUFDQTs7OztHQXZCdUIvSyxJOztLQThDbkJ1VyxlOzs7Ozs7Ozs7Ozt1QkFDUTtBQUNaLFFBQUlDLFNBQVNDLEtBQUtDLFNBQUwsQ0FBZUMsSUFBZixFQUFxQixJQUFyQixDQUFiO0FBQ0EsUUFBSTVFLFNBQVMwRSxLQUFLQyxTQUFMLENBQWVDLElBQWYsRUFBcUIsS0FBckIsQ0FBYjtBQUNBLFFBQUlDLGVBQWU3RSxPQUFPekksS0FBUCxLQUFpQmtOLE9BQU85UCxDQUEzQztBQUNBLFFBQUltUSxlQUFlTCxPQUFPbE4sS0FBUCxLQUFpQnlJLE9BQU9yTCxDQUEzQztBQUNBLFFBQUlvUSxTQUFTLEVBQWI7O0FBRUEsUUFBSW5FLEtBQU1pRSxZQUFELEdBQWlCSixPQUFPOVAsQ0FBeEIsR0FBNEI4UCxPQUFPOVAsQ0FBUCxHQUFXOFAsT0FBTzNQLEtBQXZEO0FBQ0EsUUFBSStMLEtBQUs0RCxPQUFPTyxVQUFQLEVBQVQ7QUFDQUQsV0FBTzVRLElBQVAsQ0FBWSxvQkFBVXlNLEVBQVYsRUFBY0MsRUFBZCxDQUFaOztBQUVBLFFBQUlvRSxLQUFNSCxZQUFELEdBQWlCOUUsT0FBT3JMLENBQXhCLEdBQTRCcUwsT0FBT3JMLENBQVAsR0FBV3FMLE9BQU9sTCxLQUF2RDtBQUNBLFFBQUlvUSxLQUFLbEYsT0FBT2dGLFVBQVAsRUFBVDs7QUFFQSxRQUFJRyxNQUFNLEtBQUtDLE9BQWY7O0FBRUEsUUFBSWpOLEtBQU0wTSxZQUFELEdBQWlCLENBQUNNLEdBQWxCLEdBQXdCQSxHQUFqQztBQUNBLFFBQUlFLE1BQU0sb0JBQVV6RSxLQUFLekksRUFBZixFQUFtQjBJLEVBQW5CLENBQVY7O0FBRUExSSxTQUFNMk0sWUFBRCxHQUFpQixDQUFDSyxHQUFsQixHQUF3QkEsR0FBN0I7QUFDQSxRQUFJRyxNQUFNLG9CQUFVTCxLQUFLOU0sRUFBZixFQUFtQitNLEVBQW5CLENBQVY7O0FBRUE7QUFDQSxRQUFJTCxnQkFBZ0JDLFlBQXBCLEVBQ0E7QUFDQyxTQUFJblEsSUFBS2tRLFlBQUQsR0FDUmpRLEtBQUt1RSxHQUFMLENBQVN5SCxFQUFULEVBQWFxRSxFQUFiLElBQWlCRSxHQURULEdBRVJ2USxLQUFLd0UsR0FBTCxDQUFTd0gsRUFBVCxFQUFhcUUsRUFBYixJQUFpQkUsR0FGakI7O0FBSUFKLFlBQU81USxJQUFQLENBQVksb0JBQVVRLENBQVYsRUFBYWtNLEVBQWIsQ0FBWjtBQUNBa0UsWUFBTzVRLElBQVAsQ0FBWSxvQkFBVVEsQ0FBVixFQUFhdVEsRUFBYixDQUFaO0FBQ0EsS0FSRCxNQVNLLElBQUtHLElBQUkxUSxDQUFKLEdBQVEyUSxJQUFJM1EsQ0FBYixJQUFtQmtRLFlBQXZCLEVBQ0w7QUFDQyxTQUFJVSxPQUFPMUUsS0FBSyxDQUFDcUUsS0FBS3JFLEVBQU4sSUFBWSxDQUE1Qjs7QUFFQWtFLFlBQU81USxJQUFQLENBQVlrUixHQUFaO0FBQ0FOLFlBQU81USxJQUFQLENBQVksb0JBQVVrUixJQUFJMVEsQ0FBZCxFQUFpQjRRLElBQWpCLENBQVo7QUFDQVIsWUFBTzVRLElBQVAsQ0FBWSxvQkFBVW1SLElBQUkzUSxDQUFkLEVBQWlCNFEsSUFBakIsQ0FBWjtBQUNBUixZQUFPNVEsSUFBUCxDQUFZbVIsR0FBWjtBQUNBLEtBUkksTUFVTDtBQUNDUCxZQUFPNVEsSUFBUCxDQUFZa1IsR0FBWjtBQUNBTixZQUFPNVEsSUFBUCxDQUFZbVIsR0FBWjtBQUNBOztBQUVEUCxXQUFPNVEsSUFBUCxDQUFZLG9CQUFVOFEsRUFBVixFQUFjQyxFQUFkLENBQVo7QUFDQSxXQUFPSCxNQUFQO0FBQ0E7Ozs7R0FsRDRCOVcsSTs7S0FzRHhCdVgsUzs7O0FBQ0wscUJBQVlwQyxjQUFaLEVBQTRCQyxXQUE1QixFQUF5Q0MsV0FBekMsRUFBc0RDLFNBQXRELEVBQWlFO0FBQUE7O0FBQ2hFRixpQkFBYyxpQkFBRXZKLFFBQUYsQ0FBV3VKLFdBQVgsRUFBd0I7QUFDckNvQyxnQkFBWSxFQUR5QjtBQUVyQ0MsZUFBVyxLQUYwQjtBQUdyQ0MsaUJBQWEsQ0FId0I7QUFJckNDLFVBQU0sQ0FKK0I7QUFLckNDLHFCQUFpQjtBQUxvQixJQUF4QixDQUFkO0FBRGdFLGdIQVExRHpDLGNBUjBELEVBUTFDQyxXQVIwQyxFQVE3QkMsV0FSNkIsRUFRaEJDLFNBUmdCO0FBU2hFOzs7Ozs7QUFzR0Q7Ozs2QkFHVXZLLEcsRUFBSzhNLFMsRUFBV0MsSyxFQUFPQyxRLEVBQVVDLE0sRUFBUTtBQUNsRCxRQUFJQyxJQUFKLEVBQVVDLEtBQVYsRUFBaUJoRSxDQUFqQixFQUFvQmlFLEdBQXBCLEVBQXlCQyxTQUF6QixFQUFvQ0MsQ0FBcEM7QUFDQSxRQUFJQyxPQUFKLEVBQWFDLFFBQWIsRUFBdUI5TyxFQUF2QixFQUEyQmtCLEdBQTNCOztBQUVBLFFBQUk2TixlQUFlLENBQW5CO0FBQUEsUUFBc0JDLFVBQXRCO0FBQ0E7QUFDQU4sVUFBTUwsTUFBTUUsTUFBTixDQUFOO0FBQ0F2TyxTQUFLc0IsSUFBSUEsSUFBSXBKLE1BQUosR0FBYSxDQUFqQixDQUFMO0FBQ0EsUUFBSThILEdBQUczQyxDQUFILEdBQU9xUixJQUFJclIsQ0FBZixFQUNDbVIsT0FBTyxDQUFQLENBREQsS0FFSyxJQUFJeE8sR0FBRzNDLENBQUgsR0FBT3FSLElBQUlyUixDQUFKLEdBQVFxUixJQUFJcFIsTUFBdkIsRUFDSmtSLE9BQU8sQ0FBUCxDQURJLEtBRUEsSUFBSXhPLEdBQUcvQyxDQUFILEdBQU95UixJQUFJelIsQ0FBZixFQUNKdVIsT0FBTyxDQUFQLENBREksS0FHSkEsT0FBTyxDQUFQO0FBQ0RLLGNBQVVJLFlBQVliLFNBQVosRUFBdUJHLE1BQXZCLEVBQStCRixLQUEvQixFQUFzQ0csSUFBdEMsQ0FBVjtBQUNBUSxpQkFBYUgsUUFBUXpPLFVBQVIsR0FBcUIsQ0FBQ3lPLFFBQVFoUCxLQUFSLEdBQWdCZ1AsUUFBUWpQLElBQXpCLElBQStCLENBQXBELEdBQXdELENBQUNpUCxRQUFROU8sTUFBUixHQUFpQjhPLFFBQVEvTyxHQUExQixJQUErQixDQUFwRzs7QUFFQSxTQUFLLElBQUk5SCxJQUFJLENBQWIsRUFBZ0JBLElBQUlzSixJQUFJcEosTUFBSixHQUFhLENBQWpDLEVBQW9DRixHQUFwQyxFQUF5QztBQUN4QyxTQUFJc0osSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxJQUFjcUUsSUFBSXRKLENBQUosRUFBT2lGLENBQXJCLElBQTBCcUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBVCxJQUFjaUUsSUFBSXRKLENBQUosRUFBT3FGLENBQW5ELEVBQXNEO0FBQ3REc1IsaUJBQVlPLHNCQUFzQjVOLEdBQXRCLEVBQTJCdEosQ0FBM0IsRUFBOEJxVyxLQUE5QixFQUFxQ0MsUUFBckMsRUFBK0NDLE1BQS9DLENBQVo7QUFDQSxTQUFJLENBQUNJLFNBQUwsRUFBZ0I7QUFDaEJDLFNBQUlELFVBQVUsQ0FBVixDQUFKO0FBQ0FILFlBQU9HLFVBQVUsQ0FBVixDQUFQO0FBQ0FELFdBQU1MLE1BQU1PLENBQU4sQ0FBTjtBQUNBQyxlQUFVSSxZQUFZYixTQUFaLEVBQXVCUSxDQUF2QixFQUEwQlAsS0FBMUIsRUFBaUNHLElBQWpDLENBQVY7QUFDQSxhQUFPQSxJQUFQO0FBQ0MsV0FBSyxDQUFMO0FBQ0EsV0FBSyxDQUFMO0FBQ0N4TyxZQUFLLG9CQUFVLENBQUM2TyxRQUFRaFAsS0FBUixHQUFnQmdQLFFBQVFqUCxJQUF6QixJQUErQixDQUF6QyxFQUE0QzBCLElBQUl0SixDQUFKLEVBQU9xRixDQUFuRCxDQUFMO0FBQ0E2RCxhQUFNaU8sa0JBQWtCN04sR0FBbEIsRUFBdUJ0SixDQUF2QixFQUEwQmdJLEVBQTFCLEVBQThCME8sR0FBOUIsRUFBbUNGLElBQW5DLENBQU47QUFDQUMsZUFBUXZOLE1BQU0sQ0FBTixHQUFVLENBQVYsR0FBYyxDQUF0QjtBQUNBNE4sa0JBQVdHLFlBQVliLFNBQVosRUFBdUJRLENBQXZCLEVBQTBCUCxLQUExQixFQUFpQ0ksS0FBakMsQ0FBWDtBQUNBO0FBQ0EsV0FBSXpXLElBQUksQ0FBSixJQUFVc0osSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBVCxJQUFjaUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBakMsSUFBd0NpRSxJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFULEdBQWF5UixTQUFTaFAsR0FBdEIsSUFBNkJ3QixJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFULEdBQWF5UixTQUFTL08sTUFBL0YsRUFDQzBLLElBQUluSixJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFULEdBQWEyQyxHQUFHM0MsQ0FBcEIsQ0FERCxLQUVLLElBQUlyRixJQUFJc0osSUFBSXBKLE1BQUosR0FBYSxDQUFqQixJQUF1Qm9KLElBQUl0SixJQUFFLENBQU4sRUFBU3FGLENBQVQsSUFBY2lFLElBQUl0SixJQUFFLENBQU4sRUFBU3FGLENBQTlDLElBQXFEaUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBVCxHQUFheVIsU0FBU2hQLEdBQXRCLElBQTZCd0IsSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBVCxHQUFheVIsU0FBUy9PLE1BQTVHLEVBQ0owSyxJQUFJbkosSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBVCxHQUFhMkMsR0FBRzNDLENBQXBCLENBREksS0FHSm9OLElBQUksQ0FBQ3FFLFNBQVMvTyxNQUFULEdBQWtCK08sU0FBU2hQLEdBQTVCLElBQWlDLENBQWpDLEdBQXFDRSxHQUFHM0MsQ0FBNUM7QUFDRDtBQUNBLFdBQUttUixRQUFRLENBQVIsSUFBYXhPLEdBQUcvQyxDQUFILElBQVFxRSxJQUFJdEosQ0FBSixFQUFPaUYsQ0FBN0IsSUFBb0N1UixRQUFRLENBQVIsSUFBYXhPLEdBQUcvQyxDQUFILElBQVFxRSxJQUFJdEosQ0FBSixFQUFPaUYsQ0FBcEUsRUFDQytDLEtBQUssSUFBTCxDQURELEtBRUssSUFBSWhJLElBQUksQ0FBUixFQUFXO0FBQ2Y7QUFDQSxZQUFJLENBQUNvWCxpQkFDSCxDQUFDLG9CQUFVOU4sSUFBSXRKLENBQUosRUFBT2lGLENBQWpCLEVBQW9CcUUsSUFBSXRKLENBQUosRUFBT3FGLENBQTNCLENBQUQsRUFBZ0Msb0JBQVVpRSxJQUFJdEosQ0FBSixFQUFPaUYsQ0FBakIsRUFBb0JxRSxJQUFJdEosQ0FBSixFQUFPcUYsQ0FBUCxHQUFXb04sQ0FBL0IsQ0FBaEMsRUFBbUUsb0JBQVV6SyxHQUFHL0MsQ0FBYixFQUFnQitDLEdBQUczQyxDQUFILEdBQU9vTixDQUF2QixDQUFuRSxDQURHLEVBRUg0RCxLQUZHLENBQUwsRUFHQ3JPLEtBQUssSUFBTDtBQUNEO0FBQ0Q7QUFDRCxXQUFLLENBQUw7QUFDQSxXQUFLLENBQUw7QUFDQ0EsWUFBSyxvQkFBVXNCLElBQUl0SixDQUFKLEVBQU9pRixDQUFqQixFQUFvQixDQUFDNFIsUUFBUTlPLE1BQVIsR0FBaUI4TyxRQUFRL08sR0FBMUIsSUFBK0IsQ0FBbkQsQ0FBTDtBQUNBb0IsYUFBTWlPLGtCQUFrQjdOLEdBQWxCLEVBQXVCdEosQ0FBdkIsRUFBMEJnSSxFQUExQixFQUE4QjBPLEdBQTlCLEVBQW1DRixJQUFuQyxDQUFOO0FBQ0FDLGVBQVF2TixNQUFNLENBQU4sR0FBVSxDQUFWLEdBQWMsQ0FBdEI7QUFDQTROLGtCQUFXRyxZQUFZYixTQUFaLEVBQXVCUSxDQUF2QixFQUEwQlAsS0FBMUIsRUFBaUNJLEtBQWpDLENBQVg7QUFDQTtBQUNBLFdBQUl6VyxJQUFJLENBQUosSUFBVXNKLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQVQsSUFBY3FFLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQWpDLElBQXdDcUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxHQUFhNlIsU0FBU2xQLElBQXRCLElBQThCMEIsSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxHQUFhNlIsU0FBU2pQLEtBQWhHLEVBQ0M0SyxJQUFJbkosSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxHQUFhK0MsR0FBRy9DLENBQXBCLENBREQsS0FFSyxJQUFJakYsSUFBSXNKLElBQUlwSixNQUFKLEdBQWEsQ0FBakIsSUFBdUJvSixJQUFJdEosSUFBRSxDQUFOLEVBQVNpRixDQUFULElBQWNxRSxJQUFJdEosSUFBRSxDQUFOLEVBQVNpRixDQUE5QyxJQUFxRHFFLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQVQsR0FBYTZSLFNBQVNsUCxJQUF0QixJQUE4QjBCLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQVQsR0FBYTZSLFNBQVNqUCxLQUE3RyxFQUNKNEssSUFBSW5KLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQVQsR0FBYStDLEdBQUcvQyxDQUFwQixDQURJLEtBR0p3TixJQUFJLENBQUNxRSxTQUFTalAsS0FBVCxHQUFpQmlQLFNBQVNsUCxJQUEzQixJQUFpQyxDQUFqQyxHQUFxQ0ksR0FBRy9DLENBQTVDO0FBQ0Q7QUFDQSxXQUFLdVIsUUFBUSxDQUFSLElBQWF4TyxHQUFHM0MsQ0FBSCxJQUFRaUUsSUFBSXRKLENBQUosRUFBT3FGLENBQTdCLElBQW9DbVIsUUFBUSxDQUFSLElBQWF4TyxHQUFHM0MsQ0FBSCxJQUFRaUUsSUFBSXRKLENBQUosRUFBT3FGLENBQXBFLEVBQ0MyQyxLQUFLLElBQUwsQ0FERCxLQUVLLElBQUloSSxJQUFJLENBQVIsRUFBVztBQUNmO0FBQ0EsWUFBSSxDQUFDb1gsaUJBQ0gsQ0FBQyxvQkFBVTlOLElBQUl0SixDQUFKLEVBQU9pRixDQUFqQixFQUFvQnFFLElBQUl0SixDQUFKLEVBQU9xRixDQUEzQixDQUFELEVBQWdDLG9CQUFVaUUsSUFBSXRKLENBQUosRUFBT2lGLENBQVAsR0FBV3dOLENBQXJCLEVBQXdCbkosSUFBSXRKLENBQUosRUFBT3FGLENBQS9CLENBQWhDLEVBQW1FLG9CQUFVMkMsR0FBRy9DLENBQUgsR0FBT3dOLENBQWpCLEVBQW9CekssR0FBRzNDLENBQXZCLENBQW5FLENBREcsRUFFSGdSLEtBRkcsQ0FBTCxFQUdDck8sS0FBSyxJQUFMO0FBQ0Q7QUFDRDtBQUNELFdBQUssQ0FBTDtBQUNDO0FBbERGO0FBb0RBO0FBQ0EsU0FBSWhJLElBQUksRUFBUixFQUFZO0FBQ1osU0FBSWdJLE9BQU9BLEdBQUcvQyxDQUFILElBQVFxRSxJQUFJdEosQ0FBSixFQUFPaUYsQ0FBZixJQUFvQitDLEdBQUczQyxDQUFILElBQVFpRSxJQUFJdEosQ0FBSixFQUFPcUYsQ0FBMUMsQ0FBSixFQUFrRDtBQUNqRGlFLFVBQUkzSCxNQUFKLENBQVczQixJQUFFLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJnSSxFQUFuQjtBQUNBcVAsbUJBQWEvTixHQUFiLEVBQWtCdEosSUFBRSxDQUFwQixFQUF1QnlTLENBQXZCLEVBQTBCc0UsWUFBMUIsRUFBd0NDLFVBQXhDO0FBQ0FoWDtBQUNBLE1BSkQsTUFLQ3FYLGFBQWEvTixHQUFiLEVBQWtCdEosQ0FBbEIsRUFBcUJ5UyxDQUFyQixFQUF3QnNFLFlBQXhCLEVBQXNDQyxVQUF0QztBQUNEO0FBQ0Q7OztxQ0FvQ2lCMU4sRyxFQUFLdEosQyxFQUFHc1gsTyxFQUFTWixHLEVBQUtGLEksRUFBTTtBQUM3QyxRQUFJdE4sR0FBSjtBQUNBLFFBQUlMLENBQUo7QUFDQSxZQUFRMk4sSUFBUjtBQUNDLFVBQUssQ0FBTDtBQUNBLFVBQUssQ0FBTDtBQUNDM04sVUFBSSxHQUFKO0FBQ0E7QUFDRCxVQUFLLENBQUw7QUFDQSxVQUFLLENBQUw7QUFDQ0EsVUFBSSxHQUFKO0FBQ0E7QUFSRjtBQVVBO0FBQ0FLLFVBQU1xTyxtQkFBbUJELE9BQW5CLEVBQTRCaE8sSUFBSUEsSUFBSXBKLE1BQUosR0FBYSxDQUFqQixDQUE1QixFQUFpRDJJLENBQWpELENBQU47QUFDQSxRQUFJSyxPQUFPLENBQVgsRUFBYztBQUNiQSxXQUFNLENBQUNxTyxtQkFBbUJqTyxJQUFJLENBQUosQ0FBbkIsRUFBMkJBLElBQUlBLElBQUlwSixNQUFKLEdBQWEsQ0FBakIsQ0FBM0IsRUFBZ0QySSxDQUFoRCxDQUFQO0FBQ0EsU0FBSUssT0FBTyxDQUFYLEVBQWM7QUFDYixVQUFJb08sUUFBUXpPLENBQVIsSUFBYTZOLElBQUljLFNBQUosR0FBZ0IzTyxDQUFoQixDQUFqQixFQUNDSyxNQUFNLENBQUMsQ0FBUCxDQURELEtBR0NBLE1BQU0sQ0FBTjtBQUNEO0FBQ0Q7QUFDRCxXQUFPQSxHQUFQO0FBQ0E7OzsrQkFrQldrTixTLEVBQVdsSSxLLEVBQU9tSSxLLEVBQU9HLEksRUFBTTtBQUMxQyxRQUFJTCxrQkFBa0IsS0FBS0EsZUFBM0I7QUFDQSxRQUFJc0IsT0FBT3BCLE1BQU1uSSxLQUFOLENBQVg7QUFBQSxRQUF5QndKLElBQXpCO0FBQ0EsUUFBSTFQLEVBQUosRUFBUWhJLENBQVI7QUFDQSxRQUFJNlcsVUFBVSxFQUFkO0FBQUEsUUFBa0I5RixDQUFsQjtBQUFBLFFBQXFCakwsQ0FBckI7QUFBQSxRQUF3Qm9NLENBQXhCO0FBQUEsUUFBMkJoSSxDQUEzQjtBQUNBLFlBQVFzTSxJQUFSO0FBQ0MsVUFBSyxDQUFMO0FBQ0N4TyxXQUFLeVAsS0FBS0UsT0FBTCxFQUFMO0FBQ0FkLGNBQVFoUCxLQUFSLEdBQWdCRyxHQUFHL0MsQ0FBbkI7QUFDQTRSLGNBQVF6TyxVQUFSLEdBQXFCLEtBQXJCO0FBQ0EsV0FBS3BJLElBQUksQ0FBVCxFQUFZQSxJQUFJcVcsTUFBTW5XLE1BQXRCLEVBQThCRixHQUE5QixFQUFtQztBQUNsQyxXQUFJQSxLQUFLa08sS0FBVCxFQUFnQjtBQUNoQmhFLFdBQUltTSxNQUFNclcsQ0FBTixFQUFTNFgsUUFBVCxHQUFvQjNTLENBQXhCO0FBQ0EsV0FBSWlGLEtBQUtsQyxHQUFHL0MsQ0FBWixFQUFlO0FBQ2YsV0FBSSxDQUFDNFIsUUFBUWpQLElBQVQsSUFBaUJpUCxRQUFRalAsSUFBUixHQUFlc0MsQ0FBcEMsRUFDQzJNLFFBQVFqUCxJQUFSLEdBQWVzQyxDQUFmO0FBQ0Q7QUFDRCxVQUFJLENBQUMyTSxRQUFRalAsSUFBYixFQUFtQjtBQUNsQmlQLGVBQVFqUCxJQUFSLEdBQWV3TyxVQUFVdUIsT0FBVixHQUFvQjFTLENBQW5DO0FBQ0EsV0FBSTRSLFFBQVFoUCxLQUFSLEdBQWdCZ1AsUUFBUWpQLElBQXhCLEdBQStCdU8sZUFBbkMsRUFDQ1UsUUFBUWpQLElBQVIsR0FBZWlQLFFBQVFoUCxLQUFSLEdBQWdCc08sZUFBL0I7QUFDRDtBQUNELFdBQUtuVyxJQUFJLENBQVQsRUFBWUEsSUFBSXFXLE1BQU1uVyxNQUF0QixFQUE4QkYsR0FBOUIsRUFBbUM7QUFDbEMsV0FBSUEsS0FBS2tPLEtBQVQsRUFBZ0I7QUFDaEJ3SixjQUFPckIsTUFBTXJXLENBQU4sQ0FBUDtBQUNBa1MsV0FBSXdGLEtBQUtHLFNBQUwsR0FBaUJ4UyxDQUFyQjtBQUNBUyxXQUFJNFIsS0FBS0ksTUFBTCxHQUFjelMsQ0FBbEI7QUFDQSxXQUFJNk0sSUFBSWxLLEdBQUczQyxDQUFQLElBQWFxUyxLQUFLRSxRQUFMLEtBQWtCZixRQUFRalAsSUFBMUIsSUFBa0M4UCxLQUFLQyxPQUFMLEtBQWlCZCxRQUFRaFAsS0FBNUUsRUFBb0Y7QUFDbkYsWUFBSSxDQUFDZ1AsUUFBUS9PLEdBQVQsSUFBZ0IrTyxRQUFRL08sR0FBUixHQUFjb0ssQ0FBbEMsRUFDQzJFLFFBQVEvTyxHQUFSLEdBQWNvSyxDQUFkO0FBQ0Q7QUFDRCxXQUFJcE0sSUFBSWtDLEdBQUczQyxDQUFQLElBQWFxUyxLQUFLRSxRQUFMLEtBQWtCZixRQUFRalAsSUFBMUIsSUFBa0M4UCxLQUFLQyxPQUFMLEtBQWlCZCxRQUFRaFAsS0FBNUUsRUFBb0Y7QUFDbkYsWUFBSSxDQUFDZ1AsUUFBUTlPLE1BQVQsSUFBbUI4TyxRQUFROU8sTUFBUixHQUFpQmpDLENBQXhDLEVBQ0MrUSxRQUFROU8sTUFBUixHQUFpQmpDLENBQWpCO0FBQ0Q7QUFDRDtBQUNELFVBQUksQ0FBQytRLFFBQVEvTyxHQUFiLEVBQWtCK08sUUFBUS9PLEdBQVIsR0FBY3NPLFVBQVUwQixNQUFWLEdBQW1CelMsQ0FBakM7QUFDbEIsVUFBSSxDQUFDd1IsUUFBUTlPLE1BQWIsRUFBcUI4TyxRQUFROU8sTUFBUixHQUFpQnFPLFVBQVV5QixTQUFWLEdBQXNCeFMsQ0FBdkM7QUFDckI7QUFDRCxVQUFLLENBQUw7QUFDQzJDLFdBQUt5UCxLQUFLSyxNQUFMLEVBQUw7QUFDQWpCLGNBQVF6TyxVQUFSLEdBQXFCLElBQXJCO0FBQ0F5TyxjQUFROU8sTUFBUixHQUFpQkMsR0FBRzNDLENBQXBCO0FBQ0EsV0FBS3JGLElBQUksQ0FBVCxFQUFZQSxJQUFJcVcsTUFBTW5XLE1BQXRCLEVBQThCRixHQUE5QixFQUFtQztBQUNsQyxXQUFJQSxLQUFLa08sS0FBVCxFQUFnQjtBQUNoQmdFLFdBQUltRSxNQUFNclcsQ0FBTixFQUFTNlgsU0FBVCxHQUFxQnhTLENBQXpCO0FBQ0EsV0FBSTZNLEtBQUtsSyxHQUFHM0MsQ0FBWixFQUFlO0FBQ2YsV0FBSSxDQUFDd1IsUUFBUS9PLEdBQVQsSUFBZ0IrTyxRQUFRL08sR0FBUixHQUFjb0ssQ0FBbEMsRUFDQzJFLFFBQVEvTyxHQUFSLEdBQWNvSyxDQUFkO0FBQ0Q7QUFDRCxVQUFJLENBQUMyRSxRQUFRL08sR0FBYixFQUFrQjtBQUNqQitPLGVBQVEvTyxHQUFSLEdBQWNzTyxVQUFVMEIsTUFBVixHQUFtQnpTLENBQWpDO0FBQ0EsV0FBSXdSLFFBQVE5TyxNQUFSLEdBQWlCOE8sUUFBUS9PLEdBQXpCLEdBQStCcU8sZUFBbkMsRUFDQ1UsUUFBUS9PLEdBQVIsR0FBYytPLFFBQVE5TyxNQUFSLEdBQWlCb08sZUFBL0I7QUFDRDtBQUNELFdBQUtuVyxJQUFJLENBQVQsRUFBWUEsSUFBSXFXLE1BQU1uVyxNQUF0QixFQUE4QkYsR0FBOUIsRUFBbUM7QUFDbEMsV0FBSUEsS0FBS2tPLEtBQVQsRUFBZ0I7QUFDaEJ3SixjQUFPckIsTUFBTXJXLENBQU4sQ0FBUDtBQUNBK1EsV0FBSTJHLEtBQUtDLE9BQUwsR0FBZTFTLENBQW5CO0FBQ0FpRixXQUFJd04sS0FBS0UsUUFBTCxHQUFnQjNTLENBQXBCO0FBQ0EsV0FBSWlGLElBQUlsQyxHQUFHL0MsQ0FBUCxJQUFheVMsS0FBS0csU0FBTCxLQUFtQmhCLFFBQVEvTyxHQUEzQixJQUFrQzRQLEtBQUtJLE1BQUwsS0FBZ0JqQixRQUFROU8sTUFBM0UsRUFBb0Y7QUFDbkYsWUFBSSxDQUFDOE8sUUFBUWpQLElBQVQsSUFBaUJpUCxRQUFRalAsSUFBUixHQUFlc0MsQ0FBcEMsRUFDQzJNLFFBQVFqUCxJQUFSLEdBQWVzQyxDQUFmO0FBQ0Q7QUFDRCxXQUFJNkcsSUFBSS9JLEdBQUcvQyxDQUFQLElBQWF5UyxLQUFLRyxTQUFMLEtBQW1CaEIsUUFBUS9PLEdBQTNCLElBQWtDNFAsS0FBS0ksTUFBTCxLQUFnQmpCLFFBQVE5TyxNQUEzRSxFQUFvRjtBQUNuRixZQUFJLENBQUM4TyxRQUFRaFAsS0FBVCxJQUFrQmdQLFFBQVFoUCxLQUFSLEdBQWdCa0osQ0FBdEMsRUFDQzhGLFFBQVFoUCxLQUFSLEdBQWdCa0osQ0FBaEI7QUFDRDtBQUNEO0FBQ0QsVUFBSSxDQUFDOEYsUUFBUWpQLElBQWIsRUFBbUJpUCxRQUFRalAsSUFBUixHQUFld08sVUFBVXVCLE9BQVYsR0FBb0IxUyxDQUFuQztBQUNuQixVQUFJLENBQUM0UixRQUFRaFAsS0FBYixFQUFvQmdQLFFBQVFoUCxLQUFSLEdBQWdCdU8sVUFBVXdCLFFBQVYsR0FBcUIzUyxDQUFyQzs7QUFFcEI7QUFDRCxVQUFLLENBQUw7QUFDQytDLFdBQUt5UCxLQUFLRyxRQUFMLEVBQUw7QUFDQWYsY0FBUXpPLFVBQVIsR0FBcUIsS0FBckI7QUFDQXlPLGNBQVFqUCxJQUFSLEdBQWVJLEdBQUcvQyxDQUFsQjtBQUNBLFdBQUtqRixJQUFJLENBQVQsRUFBWUEsSUFBSXFXLE1BQU1uVyxNQUF0QixFQUE4QkYsR0FBOUIsRUFBbUM7QUFDbEMsV0FBSUEsS0FBS2tPLEtBQVQsRUFBZ0I7QUFDaEI2QyxXQUFJc0YsTUFBTXJXLENBQU4sRUFBUzJYLE9BQVQsR0FBbUIxUyxDQUF2QjtBQUNBLFdBQUk4TCxLQUFLL0ksR0FBRy9DLENBQVosRUFBZTtBQUNmLFdBQUksQ0FBQzRSLFFBQVFoUCxLQUFULElBQWtCZ1AsUUFBUWhQLEtBQVIsR0FBZ0JrSixDQUF0QyxFQUNDOEYsUUFBUWhQLEtBQVIsR0FBZ0JrSixDQUFoQjtBQUNEO0FBQ0QsVUFBSSxDQUFDOEYsUUFBUWhQLEtBQWIsRUFBb0I7QUFDbkJnUCxlQUFRaFAsS0FBUixHQUFnQnVPLFVBQVV3QixRQUFWLEdBQXFCM1MsQ0FBckM7QUFDQSxXQUFJNFIsUUFBUWhQLEtBQVIsR0FBZ0JnUCxRQUFRalAsSUFBeEIsR0FBK0J1TyxlQUFuQyxFQUNDVSxRQUFRaFAsS0FBUixHQUFnQmdQLFFBQVFqUCxJQUFSLEdBQWV1TyxlQUEvQjtBQUNEO0FBQ0QsV0FBS25XLElBQUksQ0FBVCxFQUFZQSxJQUFJcVcsTUFBTW5XLE1BQXRCLEVBQThCRixHQUE5QixFQUFtQztBQUNsQyxXQUFJQSxLQUFLa08sS0FBVCxFQUFnQjtBQUNoQndKLGNBQU9yQixNQUFNclcsQ0FBTixDQUFQO0FBQ0FrUyxXQUFJd0YsS0FBS0csU0FBTCxHQUFpQnhTLENBQXJCO0FBQ0FTLFdBQUk0UixLQUFLSSxNQUFMLEdBQWN6UyxDQUFsQjtBQUNBLFdBQUk2TSxJQUFJbEssR0FBRzNDLENBQVAsSUFBYXFTLEtBQUtFLFFBQUwsS0FBa0JmLFFBQVFqUCxJQUExQixJQUFrQzhQLEtBQUtDLE9BQUwsS0FBaUJkLFFBQVFoUCxLQUE1RSxFQUFvRjtBQUNuRixZQUFJLENBQUNnUCxRQUFRL08sR0FBVCxJQUFnQitPLFFBQVEvTyxHQUFSLEdBQWNvSyxDQUFsQyxFQUNDMkUsUUFBUS9PLEdBQVIsR0FBY29LLENBQWQ7QUFDRDtBQUNELFdBQUlwTSxJQUFJa0MsR0FBRzNDLENBQVAsSUFBYXFTLEtBQUtFLFFBQUwsS0FBa0JmLFFBQVFqUCxJQUExQixJQUFrQzhQLEtBQUtDLE9BQUwsS0FBaUJkLFFBQVFoUCxLQUE1RSxFQUFvRjtBQUNuRixZQUFJLENBQUNnUCxRQUFROU8sTUFBVCxJQUFtQjhPLFFBQVE5TyxNQUFSLEdBQWlCakMsQ0FBeEMsRUFDQytRLFFBQVE5TyxNQUFSLEdBQWlCakMsQ0FBakI7QUFDRDtBQUNEO0FBQ0QsVUFBSSxDQUFDK1EsUUFBUS9PLEdBQWIsRUFBa0IrTyxRQUFRL08sR0FBUixHQUFjc08sVUFBVTBCLE1BQVYsR0FBbUJ6UyxDQUFqQztBQUNsQixVQUFJLENBQUN3UixRQUFROU8sTUFBYixFQUFxQjhPLFFBQVE5TyxNQUFSLEdBQWlCcU8sVUFBVXlCLFNBQVYsR0FBc0J4UyxDQUF2QztBQUNyQjtBQUNELFVBQUssQ0FBTDtBQUNDMkMsV0FBS3lQLEtBQUtJLFNBQUwsRUFBTDtBQUNBaEIsY0FBUXpPLFVBQVIsR0FBcUIsSUFBckI7QUFDQXlPLGNBQVEvTyxHQUFSLEdBQWNFLEdBQUczQyxDQUFqQjtBQUNBLFdBQUtyRixJQUFJLENBQVQsRUFBWUEsSUFBSXFXLE1BQU1uVyxNQUF0QixFQUE4QkYsR0FBOUIsRUFBbUM7QUFDbEMsV0FBSUEsS0FBS2tPLEtBQVQsRUFBZ0I7QUFDaEJ3SixjQUFPckIsTUFBTXJXLENBQU4sQ0FBUDtBQUNBLFdBQUkwWCxLQUFLSSxNQUFMLEdBQWN6UyxDQUFkLElBQW1CMkMsR0FBRzNDLENBQTFCLEVBQTZCO0FBQzdCLFdBQUksQ0FBQ3dSLFFBQVE5TyxNQUFULElBQW1COE8sUUFBUTlPLE1BQVIsR0FBaUIyUCxLQUFLSSxNQUFMLEdBQWN6UyxDQUF0RCxFQUNDd1IsUUFBUTlPLE1BQVIsR0FBaUIyUCxLQUFLSSxNQUFMLEdBQWN6UyxDQUEvQjtBQUNEO0FBQ0QsVUFBSSxDQUFDd1IsUUFBUTlPLE1BQWIsRUFBcUI7QUFDcEI4TyxlQUFROU8sTUFBUixHQUFpQnFPLFVBQVV5QixTQUFWLEdBQXNCeFMsQ0FBdkM7QUFDQSxXQUFJd1IsUUFBUTlPLE1BQVIsR0FBaUI4TyxRQUFRL08sR0FBekIsR0FBK0JxTyxlQUFuQyxFQUNDVSxRQUFROU8sTUFBUixHQUFpQjhPLFFBQVEvTyxHQUFSLEdBQWNxTyxlQUEvQjtBQUNEO0FBQ0QsV0FBS25XLElBQUksQ0FBVCxFQUFZQSxJQUFJcVcsTUFBTW5XLE1BQXRCLEVBQThCRixHQUE5QixFQUFtQztBQUNsQyxXQUFJQSxLQUFLa08sS0FBVCxFQUFnQjtBQUNoQndKLGNBQU9yQixNQUFNclcsQ0FBTixDQUFQO0FBQ0ErUSxXQUFJMkcsS0FBS0MsT0FBTCxHQUFlMVMsQ0FBbkI7QUFDQWlGLFdBQUl3TixLQUFLRSxRQUFMLEdBQWdCM1MsQ0FBcEI7QUFDQSxXQUFJaUYsSUFBSWxDLEdBQUcvQyxDQUFQLElBQWF5UyxLQUFLRyxTQUFMLEtBQW1CaEIsUUFBUS9PLEdBQTNCLElBQWtDNFAsS0FBS0ksTUFBTCxLQUFnQmpCLFFBQVE5TyxNQUEzRSxFQUFvRjtBQUNuRixZQUFJLENBQUM4TyxRQUFRalAsSUFBVCxJQUFpQmlQLFFBQVFqUCxJQUFSLEdBQWVzQyxDQUFwQyxFQUNDMk0sUUFBUWpQLElBQVIsR0FBZXNDLENBQWY7QUFDRDtBQUNELFdBQUk2RyxJQUFJL0ksR0FBRy9DLENBQVAsSUFBYXlTLEtBQUtHLFNBQUwsS0FBbUJoQixRQUFRL08sR0FBM0IsSUFBa0M0UCxLQUFLSSxNQUFMLEtBQWdCakIsUUFBUTlPLE1BQTNFLEVBQW9GO0FBQ25GLFlBQUksQ0FBQzhPLFFBQVFoUCxLQUFULElBQWtCZ1AsUUFBUWhQLEtBQVIsR0FBZ0JrSixDQUF0QyxFQUNDOEYsUUFBUWhQLEtBQVIsR0FBZ0JrSixDQUFoQjtBQUNEO0FBQ0Q7QUFDRCxVQUFJLENBQUM4RixRQUFRalAsSUFBYixFQUFtQmlQLFFBQVFqUCxJQUFSLEdBQWV3TyxVQUFVdUIsT0FBVixHQUFvQjFTLENBQW5DO0FBQ25CLFVBQUksQ0FBQzRSLFFBQVFoUCxLQUFiLEVBQW9CZ1AsUUFBUWhQLEtBQVIsR0FBZ0J1TyxVQUFVd0IsUUFBVixHQUFxQjNTLENBQXJDO0FBQ3BCO0FBcklGO0FBdUlBLFdBQU80UixPQUFQO0FBQ0E7O0FBRUQ7Ozs7Ozs7Ozs7OztnQ0FTYXZOLEcsRUFBS3RKLEMsRUFBR3lTLEMsRUFBR3NFLFksRUFBY0MsVSxFQUFZO0FBQ2pEO0FBQ0EsUUFBSTlOLEdBQUosRUFBUzZILENBQVQsRUFBWS9JLEVBQVo7QUFDQSxRQUFJaEksS0FBSyxDQUFULEVBQVk7QUFDWDtBQUNBa0osV0FBTUksSUFBSSxDQUFKLEVBQU9ILFlBQVAsQ0FBb0JHLElBQUksQ0FBSixDQUFwQixDQUFOO0FBQ0EsU0FBSSxDQUFDeU4sWUFBTCxFQUNDQSxlQUFlLEtBQUtoQixVQUFwQjtBQUNEaEYsU0FBSTdMLEtBQUt1RSxHQUFMLENBQVNzTixZQUFULEVBQXVCek4sSUFBSSxDQUFKLEVBQU85QyxRQUFQLENBQWdCOEMsSUFBSSxDQUFKLENBQWhCLElBQXdCLENBQS9DLENBQUo7QUFDQXRCLFVBQUtzQixJQUFJLENBQUosRUFBT3lPLGFBQVAsQ0FBcUI3TyxJQUFJbkQsS0FBSixDQUFVZ0wsQ0FBVixDQUFyQixDQUFMO0FBQ0F6SCxTQUFJM0gsTUFBSixDQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCcUcsRUFBakI7QUFDQSxVQUFLcVAsWUFBTCxDQUFrQi9OLEdBQWxCLEVBQXVCdEosSUFBRSxDQUF6QixFQUE0QnlTLENBQTVCO0FBQ0E7QUFDQTtBQUNELFFBQUl6UyxLQUFLc0osSUFBSXBKLE1BQUosR0FBYSxDQUF0QixFQUF5QjtBQUN4QjtBQUNBZ0osV0FBTUksSUFBSUEsSUFBSXBKLE1BQUosR0FBVyxDQUFmLEVBQWtCaUosWUFBbEIsQ0FBK0JHLElBQUlBLElBQUlwSixNQUFKLEdBQVcsQ0FBZixDQUEvQixDQUFOO0FBQ0EsU0FBSSxDQUFDOFcsVUFBTCxFQUNDQSxhQUFhLEtBQUtqQixVQUFsQjtBQUNEaEYsU0FBSTdMLEtBQUt1RSxHQUFMLENBQVN1TixVQUFULEVBQXFCMU4sSUFBSUEsSUFBSXBKLE1BQUosR0FBVyxDQUFmLEVBQWtCc0csUUFBbEIsQ0FBMkI4QyxJQUFJQSxJQUFJcEosTUFBSixHQUFXLENBQWYsQ0FBM0IsSUFBOEMsQ0FBbkUsQ0FBSjtBQUNBOEgsVUFBS3NCLElBQUlBLElBQUlwSixNQUFKLEdBQWEsQ0FBakIsRUFBb0I2WCxhQUFwQixDQUFrQzdPLElBQUluRCxLQUFKLENBQVVnTCxDQUFWLENBQWxDLENBQUw7QUFDQXpILFNBQUkzSCxNQUFKLENBQVcySCxJQUFJcEosTUFBSixHQUFhLENBQXhCLEVBQTJCLENBQTNCLEVBQThCOEgsRUFBOUI7QUFDQSxVQUFLcVAsWUFBTCxDQUFrQi9OLEdBQWxCLEVBQXVCdEosQ0FBdkIsRUFBMEJ5UyxDQUExQjtBQUNBO0FBQ0E7O0FBRUQsUUFBSW5KLElBQUl0SixDQUFKLEVBQU9xRixDQUFQLElBQVlpRSxJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUF6QixFQUE0QjtBQUMzQixTQUFJckYsSUFBSSxDQUFKLElBQVNzSixJQUFJdEosSUFBSSxDQUFSLEVBQVdxRixDQUFYLElBQWdCaUUsSUFBSXRKLENBQUosRUFBT3FGLENBQXBDLEVBQXVDO0FBQ3RDaUUsVUFBSTNILE1BQUosQ0FBVzNCLElBQUksQ0FBZixFQUFrQixDQUFsQixFQUFxQnNKLElBQUl0SixDQUFKLEVBQU82RyxLQUFQLEVBQXJCO0FBQ0E3RztBQUNBO0FBQ0QsU0FBSUEsSUFBSXNKLElBQUlwSixNQUFKLEdBQWEsQ0FBakIsSUFBc0JvSixJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFULElBQWNpRSxJQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFqRCxFQUNDaUUsSUFBSTNILE1BQUosQ0FBVzNCLElBQUksQ0FBZixFQUFrQixDQUFsQixFQUFxQnNKLElBQUl0SixJQUFFLENBQU4sRUFBUzZHLEtBQVQsRUFBckI7QUFDRHlDLFNBQUl0SixDQUFKLEVBQU9xRixDQUFQLElBQVlvTixDQUFaO0FBQ0FuSixTQUFJdEosSUFBRSxDQUFOLEVBQVNxRixDQUFULElBQWNvTixDQUFkO0FBQ0EsS0FURCxNQVNPO0FBQ04sU0FBSXpTLElBQUksQ0FBSixJQUFTc0osSUFBSXRKLElBQUksQ0FBUixFQUFXaUYsQ0FBWCxJQUFnQnFFLElBQUl0SixDQUFKLEVBQU9pRixDQUFwQyxFQUF1QztBQUN0Q3FFLFVBQUkzSCxNQUFKLENBQVczQixJQUFJLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJzSixJQUFJdEosQ0FBSixFQUFPNkcsS0FBUCxFQUFyQjtBQUNBN0c7QUFDQTtBQUNELFNBQUlBLElBQUlzSixJQUFJcEosTUFBSixHQUFhLENBQWpCLElBQXNCb0osSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxJQUFjcUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBakQsRUFDQ3FFLElBQUkzSCxNQUFKLENBQVczQixJQUFJLENBQWYsRUFBa0IsQ0FBbEIsRUFBcUJzSixJQUFJdEosSUFBRSxDQUFOLEVBQVM2RyxLQUFULEVBQXJCO0FBQ0R5QyxTQUFJdEosQ0FBSixFQUFPaUYsQ0FBUCxJQUFZd04sQ0FBWjtBQUNBbkosU0FBSXRKLElBQUUsQ0FBTixFQUFTaUYsQ0FBVCxJQUFjd04sQ0FBZDtBQUNBO0FBQ0Q7O0FBRUQ7Ozs7Ozt1QkFyZGE7QUFDWixRQUFJak4sTUFBTXNRLFVBQVVrQyxLQUFWLENBQWdCLEtBQUtuSCxLQUFyQixFQUE0QixLQUFLQyxHQUFqQyxFQUFzQyxLQUFLZ0QsV0FBM0MsRUFBd0QsS0FBS0MsU0FBN0QsRUFBd0UsS0FBS2dDLFVBQTdFLENBQVY7QUFDQSxRQUFJLEtBQUtDLFNBQVQsRUFBb0I7QUFDbkIsVUFBS2lDLGNBQUwsQ0FBb0J6UyxHQUFwQjtBQUNBLFNBQUk2USxRQUFRLEVBQVo7QUFBQSxTQUFnQjVKLElBQWhCO0FBQUEsU0FBc0I2SixRQUF0QjtBQUFBLFNBQWdDQyxNQUFoQztBQUNBLFNBQUlILFlBQVlsQixLQUFLSCxNQUFMLENBQVltRCxpQkFBWixDQUE4QmhELEtBQUs1RSxNQUFuQyxDQUFoQjtBQUNBLFNBQUlsRSxhQUFhZ0ssVUFBVStCLGNBQVYsRUFBakI7QUFDQSxTQUFJakssUUFBUSxDQUFaO0FBQ0EsVUFBSyxJQUFJbE8sSUFBSSxDQUFiLEVBQWdCQSxJQUFJb00sV0FBV2xNLE1BQS9CLEVBQXVDRixHQUF2QyxFQUE0QztBQUMzQ3lNLGFBQU9MLFdBQVdwTSxDQUFYLENBQVA7QUFDQTtBQUNBLFVBQUl5TSxLQUFLMkwsa0JBQUwsQ0FBd0JsRCxJQUF4QixLQUFpQ3pJLEtBQUs0TCxVQUFMLENBQWdCbkQsS0FBS0gsTUFBckIsQ0FBakMsSUFBaUV0SSxLQUFLNEwsVUFBTCxDQUFnQm5ELEtBQUs1RSxNQUFyQixDQUFyRSxFQUFtRztBQUNuRyxVQUFJN0QsUUFBUXlJLEtBQUtILE1BQWpCLEVBQ0F1QixXQUFXcEksS0FBWDtBQUNBLFVBQUl6QixRQUFReUksS0FBSzVFLE1BQWpCLEVBQ0FpRyxTQUFTckksS0FBVDtBQUNBbUksWUFBTTVSLElBQU4sQ0FBV2dJLEtBQUt3SSxTQUFMLENBQWUzVCxRQUFmLENBQVg7QUFDQTRNO0FBQ0E7QUFDRCxTQUFJbUksTUFBTW5XLE1BQU4sR0FBZSxDQUFuQixFQUNDLEtBQUs4VixTQUFMLENBQWV4USxHQUFmLEVBQW9CNFEsVUFBVW5CLFNBQVYsQ0FBb0IzVCxRQUFwQixDQUFwQixFQUFtRCtVLEtBQW5ELEVBQTBEQyxRQUExRCxFQUFvRUMsTUFBcEU7QUFDRDtBQUNEVCxjQUFVbUMsY0FBVixDQUF5QnpTLEdBQXpCO0FBQ0EsUUFBSSxLQUFLeVEsV0FBTCxJQUFvQnpRLElBQUl0RixNQUFKLEdBQWEsQ0FBckMsRUFBd0M7QUFDdkMsVUFBSyxJQUFJRixJQUFJLENBQWIsRUFBZ0JBLElBQUl3RixJQUFJdEYsTUFBSixHQUFhLENBQWpDLEVBQW9DRixHQUFwQyxFQUF5QztBQUN4QyxVQUFJc1ksUUFBUSxLQUFLckMsV0FBTCxHQUFtQixLQUFLQyxJQUFwQztBQUNBLFVBQUlxQyxlQUFlclQsS0FBS3NULEtBQUwsQ0FBV3RULEtBQUt1VCxNQUFMLEtBQWdCSCxLQUFoQixHQUF3QixDQUF4QixHQUE0QkEsS0FBNUIsR0FBb0MsQ0FBL0MsSUFBb0QsS0FBS3BDLElBQTVFO0FBQ0EsV0FBS21CLFlBQUwsQ0FBa0I3UixHQUFsQixFQUF1QnhGLENBQXZCLEVBQTBCdVksWUFBMUIsRUFBd0MsQ0FBeEMsRUFBMkMsQ0FBM0M7QUFDQTtBQUNEO0FBQ0QsV0FBTy9TLEdBQVA7QUFDQTs7QUFFRDs7Ozt5QkFDYXFMLEssRUFBT0MsRyxFQUFLZ0QsVyxFQUFhQyxTLEVBQVd4RCxNLEVBQVE7QUFDeEQsUUFBSW1JLGNBQWMsb0JBQVU3SCxNQUFNNUwsQ0FBTixHQUFVNk8sWUFBWTdPLENBQVosR0FBZ0JzTCxNQUFwQyxFQUE0Q00sTUFBTXhMLENBQU4sR0FBVXlPLFlBQVl6TyxDQUFaLEdBQWdCa0wsTUFBdEUsQ0FBbEI7QUFDQSxRQUFJb0ksWUFBWSxvQkFBVTdILElBQUk3TCxDQUFKLEdBQVE4TyxVQUFVOU8sQ0FBVixHQUFjc0wsTUFBaEMsRUFBd0NPLElBQUl6TCxDQUFKLEdBQVEwTyxVQUFVMU8sQ0FBVixHQUFja0wsTUFBOUQsQ0FBaEI7QUFDQSxRQUFJcUksaUJBQUosRUFBdUJDLGVBQXZCO0FBQ0EsUUFBSXZQLEdBQUo7QUFDQSxRQUFJd0ssWUFBWTdPLENBQVosSUFBaUIsQ0FBckIsRUFBd0I7QUFDdkIsU0FBSSxDQUFDMFQsVUFBVTFULENBQVYsR0FBY3lULFlBQVl6VCxDQUEzQixJQUFnQzZPLFlBQVk3TyxDQUE1QyxHQUFnRCxDQUFwRCxFQUF1RDtBQUN0RDJULDBCQUFvQjlFLFdBQXBCO0FBQ0EsTUFGRCxNQUdLO0FBQ0o4RSwwQkFBb0Isb0JBQVUsQ0FBVixFQUFjRCxVQUFVdFQsQ0FBVixJQUFlcVQsWUFBWXJULENBQTVCLEdBQWlDLENBQWpDLEdBQXFDLENBQUMsQ0FBbkQsQ0FBcEI7QUFDQTtBQUNELEtBUEQsTUFRSztBQUNKLFNBQUksQ0FBQ3NULFVBQVV0VCxDQUFWLEdBQWNxVCxZQUFZclQsQ0FBM0IsSUFBZ0N5TyxZQUFZek8sQ0FBNUMsR0FBZ0QsQ0FBcEQsRUFBdUQ7QUFDdER1VCwwQkFBb0I5RSxXQUFwQjtBQUNBLE1BRkQsTUFHSztBQUNKOEUsMEJBQW9CLG9CQUFXRCxVQUFVMVQsQ0FBVixJQUFleVQsWUFBWXpULENBQTVCLEdBQWlDLENBQWpDLEdBQXFDLENBQUMsQ0FBaEQsRUFBbUQsQ0FBbkQsQ0FBcEI7QUFDQTtBQUNEO0FBQ0QsUUFBSThPLFVBQVU5TyxDQUFWLElBQWUsQ0FBbkIsRUFBc0I7QUFDckIsU0FBSSxDQUFDeVQsWUFBWXpULENBQVosR0FBZ0IwVCxVQUFVMVQsQ0FBM0IsSUFBZ0M4TyxVQUFVOU8sQ0FBMUMsR0FBOEMsQ0FBbEQsRUFBcUQ7QUFDcEQ0VCx3QkFBa0I5RSxTQUFsQjtBQUNBLE1BRkQsTUFHSztBQUNKOEUsd0JBQWtCLG9CQUFVLENBQVYsRUFBY0gsWUFBWXJULENBQVosSUFBaUJzVCxVQUFVdFQsQ0FBNUIsR0FBaUMsQ0FBakMsR0FBcUMsQ0FBQyxDQUFuRCxDQUFsQjtBQUNBO0FBQ0QsS0FQRCxNQVFLO0FBQ0osU0FBSSxDQUFDcVQsWUFBWXJULENBQVosR0FBZ0JzVCxVQUFVdFQsQ0FBM0IsSUFBZ0MwTyxVQUFVMU8sQ0FBMUMsR0FBOEMsQ0FBbEQsRUFBcUQ7QUFDcER3VCx3QkFBa0I5RSxTQUFsQjtBQUNBLE1BRkQsTUFHSztBQUNKOEUsd0JBQWtCLG9CQUFXSCxZQUFZelQsQ0FBWixJQUFpQjBULFVBQVUxVCxDQUE1QixHQUFpQyxDQUFqQyxHQUFxQyxDQUFDLENBQWhELEVBQW1ELENBQW5ELENBQWxCO0FBQ0E7QUFDRDs7QUFFRCxRQUFJMlQsa0JBQWtCM0gsVUFBbEIsQ0FBNkI0SCxlQUE3QixLQUFpRCxDQUFyRCxFQUF3RDtBQUN2RCxTQUFJQyxTQUFVRixrQkFBa0IzVCxDQUFsQixJQUF1QixDQUF4QixHQUE2QixvQkFBVXlULFlBQVl6VCxDQUF0QixFQUF5QjBULFVBQVV0VCxDQUFuQyxDQUE3QixHQUFxRSxvQkFBVXNULFVBQVUxVCxDQUFwQixFQUF1QnlULFlBQVlyVCxDQUFuQyxDQUFsRjtBQUNBaUUsV0FBTSxDQUFDdUgsS0FBRCxFQUFRNkgsV0FBUixFQUFxQkksTUFBckIsRUFBNkJILFNBQTdCLEVBQXdDN0gsR0FBeEMsQ0FBTjtBQUNBLEtBSEQsTUFJSyxJQUFJOEgsa0JBQWtCM0gsVUFBbEIsQ0FBNkI0SCxlQUE3QixJQUFnRCxDQUFwRCxFQUF1RDtBQUMzRCxTQUFJRCxrQkFBa0IzVCxDQUFsQixJQUF1QixDQUEzQixFQUE4QjtBQUM3QnFFLFlBQU0sQ0FBQ3VILEtBQUQsRUFBUTZILFdBQVIsRUFBcUIsb0JBQVVBLFlBQVl6VCxDQUF0QixFQUF5QixDQUFDNEwsTUFBTXhMLENBQU4sR0FBVXlMLElBQUl6TCxDQUFmLElBQW9CLENBQTdDLENBQXJCLEVBQXNFLG9CQUFVc1QsVUFBVTFULENBQXBCLEVBQXVCLENBQUM0TCxNQUFNeEwsQ0FBTixHQUFVeUwsSUFBSXpMLENBQWYsSUFBb0IsQ0FBM0MsQ0FBdEUsRUFBcUhzVCxTQUFySCxFQUFnSTdILEdBQWhJLENBQU47QUFDQSxNQUZELE1BR0s7QUFDSnhILFlBQU0sQ0FBQ3VILEtBQUQsRUFBUTZILFdBQVIsRUFBcUIsb0JBQVUsQ0FBQzdILE1BQU01TCxDQUFOLEdBQVU2TCxJQUFJN0wsQ0FBZixJQUFvQixDQUE5QixFQUFpQ3lULFlBQVlyVCxDQUE3QyxDQUFyQixFQUFzRSxvQkFBVSxDQUFDd0wsTUFBTTVMLENBQU4sR0FBVTZMLElBQUk3TCxDQUFmLElBQW9CLENBQTlCLEVBQWlDMFQsVUFBVXRULENBQTNDLENBQXRFLEVBQXFIc1QsU0FBckgsRUFBZ0k3SCxHQUFoSSxDQUFOO0FBQ0E7QUFDRCxLQVBJLE1BUUE7QUFDSnhILFdBQU0sQ0FBQ3VILEtBQUQsRUFBUTZILFdBQVIsRUFBcUIsb0JBQVVBLFlBQVl6VCxDQUFaLEdBQWdCMlQsa0JBQWtCM1QsQ0FBbEIsR0FBc0JzTCxNQUFoRCxFQUF3RG1JLFlBQVlyVCxDQUFaLEdBQWdCdVQsa0JBQWtCdlQsQ0FBbEIsR0FBc0JrTCxNQUE5RixDQUFyQixFQUE0SCxvQkFBVW9JLFVBQVUxVCxDQUFWLEdBQWM0VCxnQkFBZ0I1VCxDQUFoQixHQUFvQnNMLE1BQTVDLEVBQW9Eb0ksVUFBVXRULENBQVYsR0FBY3dULGdCQUFnQnhULENBQWhCLEdBQW9Ca0wsTUFBdEYsQ0FBNUgsRUFBMk5vSSxTQUEzTixFQUFzTzdILEdBQXRPLENBQU47QUFDQTs7QUFFRCxRQUFJaUksV0FBVyxFQUFmO0FBQ0FBLGFBQVMsQ0FBVCxJQUFjelAsSUFBSSxDQUFKLENBQWQ7QUFDQSxTQUFLLElBQUl0SixJQUFJLENBQWIsRUFBZ0JBLElBQUlzSixJQUFJcEosTUFBSixHQUFhLENBQWpDLEVBQW9DRixHQUFwQyxFQUF5QztBQUN4QyxTQUFLc0osSUFBSXRKLENBQUosRUFBT2lGLENBQVAsSUFBWXFFLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQXJCLElBQTBCcUUsSUFBSXRKLENBQUosRUFBT2lGLENBQVAsSUFBWXFFLElBQUl0SixJQUFFLENBQU4sRUFBU2lGLENBQWhELElBQXVEcUUsSUFBSXRKLENBQUosRUFBT3FGLENBQVAsSUFBWWlFLElBQUl0SixJQUFFLENBQU4sRUFBU3FGLENBQXJCLElBQTBCaUUsSUFBSXRKLENBQUosRUFBT3FGLENBQVAsSUFBWWlFLElBQUl0SixJQUFFLENBQU4sRUFBU3FGLENBQTFHLEVBQThHO0FBQzdHO0FBQ0E7QUFDRDBULGNBQVN0VSxJQUFULENBQWM2RSxJQUFJdEosQ0FBSixDQUFkO0FBQ0E7QUFDRCtZLGFBQVN0VSxJQUFULENBQWM2RSxJQUFJQSxJQUFJcEosTUFBSixHQUFhLENBQWpCLENBQWQ7QUFDQSxXQUFPNlksUUFBUDtBQUNBOzs7b0NBK0Z1QnpQLEcsRUFBSytNLEssRUFBTztBQUNuQyxTQUFLLElBQUlyVyxJQUFJLENBQWIsRUFBZ0JBLElBQUlzSixJQUFJcEosTUFBSixHQUFhLENBQWpDLEVBQW9DRixHQUFwQyxFQUF5QztBQUN4QyxVQUFLLElBQUk0VyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLE1BQU1uVyxNQUExQixFQUFrQzBXLEdBQWxDLEVBQXVDO0FBQ3RDLFVBQUlQLE1BQU1PLENBQU4sRUFBU29DLGtCQUFULENBQTRCMVAsSUFBSXRKLENBQUosQ0FBNUIsRUFBb0NzSixJQUFJdEosSUFBRSxDQUFOLENBQXBDLEtBQWlELENBQXJELEVBQ0MsT0FBTyxJQUFQO0FBQ0Q7QUFDRDtBQUNELFdBQU8sS0FBUDtBQUNBOzs7eUNBRTRCc0osRyxFQUFLdEosQyxFQUFHcVcsSyxFQUFPQyxRLEVBQVVDLE0sRUFBUTtBQUM3RCxRQUFJRyxHQUFKO0FBQUEsUUFBU0YsSUFBVDtBQUFBLFFBQWV5QyxhQUFhLElBQTVCO0FBQUEsUUFBa0NDLFlBQVksSUFBOUM7QUFDQSxTQUFLLElBQUl0QyxJQUFJLENBQWIsRUFBZ0JBLElBQUlQLE1BQU1uVyxNQUExQixFQUFrQzBXLEdBQWxDLEVBQXVDO0FBQ3RDLFNBQUs1VyxLQUFLLENBQUwsSUFBVTRXLEtBQUtOLFFBQWhCLElBQThCdFcsS0FBS3NKLElBQUlwSixNQUFKLEdBQWEsQ0FBbEIsSUFBdUIwVyxLQUFLTCxNQUE5RCxFQUNDO0FBQ0RHLFdBQU1MLE1BQU1PLENBQU4sQ0FBTjtBQUNBSixZQUFPRSxJQUFJc0Msa0JBQUosQ0FBdUIxUCxJQUFJdEosQ0FBSixDQUF2QixFQUErQnNKLElBQUl0SixJQUFFLENBQU4sQ0FBL0IsQ0FBUDtBQUNBLFNBQUl3VyxRQUFRLENBQVosRUFBZTtBQUNkLFVBQUl5QyxjQUFjLElBQWxCLEVBQXdCO0FBQ3ZCQSxvQkFBYXJDLENBQWI7QUFDQXNDLG1CQUFZMUMsSUFBWjtBQUNBLE9BSEQsTUFHTztBQUNOLFdBQUlILE1BQU00QyxVQUFOLEVBQWtCelMsUUFBbEIsQ0FBMkI4QyxJQUFJdEosQ0FBSixDQUEzQixJQUFxQzBXLElBQUlsUSxRQUFKLENBQWE4QyxJQUFJdEosQ0FBSixDQUFiLENBQXpDLEVBQStEO0FBQzlEaVoscUJBQWFyQyxDQUFiO0FBQ0FzQyxvQkFBWTFDLElBQVo7QUFDQTtBQUNEO0FBQ0Q7QUFDRDtBQUNELFFBQUl5QyxjQUFjLElBQWxCLEVBQ0MsT0FBTyxDQUFDQSxVQUFELEVBQWFDLFNBQWIsQ0FBUDtBQUNELFdBQU8sSUFBUDtBQUNBOzs7c0NBNkJ5QmhSLEcsRUFBS0MsRyxFQUFLO0FBQ25DLFFBQUlELElBQUlqRCxDQUFKLElBQVNrRCxJQUFJbEQsQ0FBakIsRUFBb0I7QUFDbkIsU0FBSWlELElBQUk3QyxDQUFKLEdBQVE4QyxJQUFJOUMsQ0FBaEIsRUFBbUIsT0FBTyxnQkFBTThCLENBQWI7QUFDbkIsWUFBTyxnQkFBTUQsQ0FBYjtBQUNBLEtBSEQsTUFHTyxJQUFJZ0IsSUFBSTdDLENBQUosSUFBUzhDLElBQUk5QyxDQUFqQixFQUFvQjtBQUMxQixTQUFJNkMsSUFBSWpELENBQUosR0FBUWtELElBQUlsRCxDQUFoQixFQUFtQixPQUFPLGdCQUFNbUMsQ0FBYjtBQUNuQixZQUFPLGdCQUFNSCxDQUFiO0FBQ0EsS0FITSxNQUdBLElBQUlpQixJQUFJakQsQ0FBSixHQUFRa0QsSUFBSWxELENBQWhCLEVBQW1CO0FBQ3pCLFNBQUlpRCxJQUFJN0MsQ0FBSixHQUFROEMsSUFBSTlDLENBQWhCLEVBQW1CLE9BQU8sZ0JBQU1rQyxFQUFiO0FBQ25CLFlBQU8sZ0JBQU1GLEVBQWI7QUFDQSxLQUhNLE1BR0E7QUFDTixTQUFJYSxJQUFJN0MsQ0FBSixHQUFROEMsSUFBSTlDLENBQWhCLEVBQW1CLE9BQU8sZ0JBQU1tQyxFQUFiO0FBQ25CLFlBQU8sZ0JBQU1GLEVBQWI7QUFDQTtBQUNEOzs7a0NBNE1xQmdDLEcsRUFBSztBQUMxQixRQUFJNlAsS0FBSzdQLElBQUlBLElBQUlwSixNQUFKLEdBQVcsQ0FBZixFQUFrQm1GLENBQWxCLElBQXVCaUUsSUFBSUEsSUFBSXBKLE1BQUosR0FBVyxDQUFmLEVBQWtCbUYsQ0FBbEQ7QUFDQSxRQUFJK1QsRUFBSjtBQUNBLFNBQUssSUFBSXBaLElBQUlzSixJQUFJcEosTUFBSixHQUFhLENBQTFCLEVBQTZCRixLQUFLLENBQWxDLEVBQXFDQSxHQUFyQyxFQUEwQztBQUN6Q29aLFVBQUs5UCxJQUFJdEosQ0FBSixFQUFPcUYsQ0FBUCxJQUFZaUUsSUFBSXRKLElBQUUsQ0FBTixFQUFTcUYsQ0FBMUI7QUFDQSxTQUFJK1QsTUFBTUQsRUFBTixJQUFhN1AsSUFBSXRKLENBQUosRUFBT3FaLE1BQVAsQ0FBYy9QLElBQUl0SixJQUFFLENBQU4sQ0FBZCxDQUFqQixFQUNDc0osSUFBSTNILE1BQUosQ0FBVzNCLENBQVgsRUFBYyxDQUFkLEVBREQsS0FHQ21aLEtBQUssQ0FBQ0EsRUFBTjtBQUNEO0FBQ0Q7Ozs7R0E5ZXNCNWEsSTs7QUFpZnhCa1YsV0FBVSxRQUFWLElBQXNCYSxVQUF0QjtBQUNBYixXQUFVLFFBQVYsSUFBc0JjLFVBQXRCO0FBQ0FkLFdBQVUsaUJBQVYsSUFBK0JxQixlQUEvQjtBQUNBckIsV0FBVSxXQUFWLElBQXlCcUMsU0FBekI7O21CQUVldlgsSTs7Ozs7O0FDOXJCZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5Qjs7QUFFekI7QUFDQSx5Q0FBd0M7QUFDeEMsc0NBQXFDO0FBQ3JDLHNDQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW1CLG1CQUFtQjtBQUN0QztBQUNBLFFBQU8sR0FBRzs7QUFFVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQXlCO0FBQ3pCLDBCQUF5QjtBQUN6QiwwQkFBeUI7QUFDekI7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHVDQUFzQztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQSxrQkFBaUI7QUFDakI7QUFDQSx1Q0FBc0M7QUFDdEM7QUFDQTtBQUNBLDhCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw4QkFBNkI7QUFDN0I7QUFDQSw4QkFBNkI7QUFDN0IscURBQW9ELE9BQU87QUFDM0Qsd0RBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1Q0FBc0MsS0FBSztBQUMzQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTREO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQyxLQUFLO0FBQy9DLDZDQUE0QyxLQUFLO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsUUFBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFlO0FBQ2Y7QUFDQTtBQUNBLHNDQUFxQyxPQUFPO0FBQzVDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBcUMsS0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNB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QUFDQSxHQXZCc0I7QUF3QnZCak4sU0FBTyxlQUFTeEwsTUFBVCxFQUFpQjtBQUN2QixVQUFPLHdJQUF3SUEsT0FBT3VOLEtBQS9JLEdBQXVKLEtBQTlKO0FBQ0EsR0ExQnNCO0FBMkJ2QnJSLFVBQVEsZ0JBQVMraUIsTUFBVCxFQUFpQjtBQUN4QixVQUFPLHFCQUNLQSxPQUFPWixFQURaLHlCQUNnQ1ksT0FBT1gsSUFEdkMsMEJBQzhEVyxPQUFPWCxJQURyRSxrQkFDb0ZXLE9BQU80SSxHQUFQLENBQVcsQ0FBWCxDQURwRixvQkFFRDVJLE9BQU80SSxHQUFQLENBQVcsQ0FBWCxDQUZDLHFDQUV3QzVJLE9BQU8ySSxPQUFQLENBQWVubEIsQ0FGdkQsU0FFNER3YyxPQUFPMkksT0FBUCxDQUFlL2tCLENBRjNFLFNBRWdGb2MsT0FBTzJJLE9BQVAsQ0FBZWhsQixLQUYvRixTQUV3R3FjLE9BQU8ySSxPQUFQLENBQWU5a0IsTUFGdkgsNENBR3NCbWMsT0FBTzZJLElBQVAsd0JBQWdDN0ksT0FBTzZJLElBQXZDLGNBQW9EN0ksT0FBTzZJLElBQTNELFVBQXFFLEVBSDNGLDRCQUlQd0MsSUFKTyxFQUFQO0FBS0EsR0FqQ3NCO0FBa0N2Qm1ILFFBQU0sY0FBU25ULElBQVQsRUFBZTtBQUNwQixVQUFPLDRDQUMwQkEsSUFEMUIsb0JBQzJDQSxJQUQzQyx5SUFHY0EsSUFIZCxpRUFJT0EsSUFKUCwwRUFLT0EsSUFMUCxnQkFLb0JBLElBTHBCLDBEQU1HZ00sSUFOSCxFQUFQO0FBT0EsR0ExQ3NCO0FBMkN2QnJ1QixTQUFPLGlCQUFFK0wsUUFBRixDQUFXLDg5Q0E0QmpCc2lCLElBNUJpQixFQUFYLEVBNEJFLEVBQUNvSCxVQUFVLE1BQVgsRUE1QkYsQ0EzQ2dCLENBdUVRO0FBdkVSLEVBQXhCOzttQkEwRWVoMUIsVyIsImZpbGUiOiJxZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW1wibG9kYXNoXCJdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcInFncmFwaFwiXSA9IGZhY3RvcnkocmVxdWlyZShcImxvZGFzaFwiKSk7XG5cdGVsc2Vcblx0XHRyb290W1wicWdyYXBoXCJdID0gZmFjdG9yeShyb290W1wiX1wiXSk7XG59KSh0aGlzLCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXykge1xucmV0dXJuIFxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvblxuICoqLyIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTQxNDI5OTQzZTBiOGU2ZWNjOGZcbiAqKi8iLCJpbXBvcnQgQmFzZTY0IGZyb20gXCIuL3V0aWwvYmFzZTY0XCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi91dGlsL0RvbVV0aWxzXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XHJcbmltcG9ydCBMaW5lIGZyb20gXCIuL2dlb21ldHJ5L0xpbmVcIjtcclxuaW1wb3J0IFNoYXBlIGZyb20gXCIuL2dlb21ldHJ5L1NoYXBlXCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBFbGxpcHNlIGZyb20gXCIuL2dlb21ldHJ5L0VsbGlwc2VcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4vZ2VvbWV0cnkvTGlua1wiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCBFdmVudERpc3BhdGNoZXIgZnJvbSBcIi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XHJcbmltcG9ydCBHcmFwaCBmcm9tIFwiLi9ncmFwaC9HcmFwaFwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL2dyYXBoL05vZGVcIjtcclxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vZ3JhcGgvRWRnZVwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcclxuaW1wb3J0IEZsb3dMYXlvdXQgZnJvbSBcIi4vbGF5b3V0L0Zsb3dMYXlvdXRcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuL3ZpZXcvTGFiZWxcIjtcclxuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xyXG5pbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9SZW5kZXJlclwiO1xyXG5pbXBvcnQgU1ZHUmVuZGVyZXIgZnJvbSBcIi4vdmlldy9TVkdSZW5kZXJlclwiO1xyXG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XHJcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvclwiO1xyXG5cclxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcclxuU2hhcGUuYWRkU2hhcGUoXCJFbGxpcHNlXCIsIEVsbGlwc2UpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cdEV2ZW50cyxcclxuXHRCYXNlNjQsXHJcblx0Q2FjaGUsXHJcblx0VXRpbHMsXHJcblx0RG9tVXRpbHMsXHJcblx0U3RyaW5nQnVmZmVyLFxyXG5cdFBvaW50LFxyXG5cdExpbmUsXHJcblx0U2hhcGUsXHJcblx0UmVjdGFuZ2xlLFxyXG5cdEVsbGlwc2UsXHJcblx0TGluayxcclxuXHRFdmVudERpc3BhdGNoZXIsXHJcblx0TGFiZWwsXHJcblx0TWFya2VyLFxyXG5cdEdyYXBoLFxyXG5cdENlbGwsXHJcblx0Tm9kZSxcclxuXHRFZGdlLFxyXG5cdExheW91dCxcclxuXHRGbG93TGF5b3V0LFxyXG5cdFJlbmRlcmVyLFxyXG5cdFNWR1JlbmRlcmVyLFxyXG5cdEdyYXBoQmVoYXZpb3IsXHJcblx0U2VsZWN0aW9uQmVoYXZpb3JcclxufTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9qYXZhc2NyaXB0LWJhc2U2NC5odG1sXHJcblxyXG52YXIgQmFzZTY0ID0ge1xyXG5cclxuXHQvLyBwcml2YXRlIHByb3BlcnR5XHJcblx0X2tleVN0ciA6IFwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIixcclxuXHJcblx0Ly8gcHVibGljIG1ldGhvZCBmb3IgZW5jb2RpbmdcclxuXHRlbmNvZGUgOiBmdW5jdGlvbiAoaW5wdXQpIHtcclxuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xyXG5cdFx0dmFyIGNocjEsIGNocjIsIGNocjMsIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcblx0XHR2YXIgaSA9IDA7XHJcblxyXG5cdFx0aW5wdXQgPSBCYXNlNjQuX3V0ZjhfZW5jb2RlKGlucHV0KTtcclxuXHJcblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xyXG5cclxuXHRcdFx0Y2hyMSA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0Y2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHRcdFx0Y2hyMyA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcclxuXHJcblx0XHRcdGVuYzEgPSBjaHIxID4+IDI7XHJcblx0XHRcdGVuYzIgPSAoKGNocjEgJiAzKSA8PCA0KSB8IChjaHIyID4+IDQpO1xyXG5cdFx0XHRlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XHJcblx0XHRcdGVuYzQgPSBjaHIzICYgNjM7XHJcblxyXG5cdFx0XHRpZiAoaXNOYU4oY2hyMikpIHtcclxuXHRcdFx0XHRlbmMzID0gZW5jNCA9IDY0O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGlzTmFOKGNocjMpKSB7XHJcblx0XHRcdFx0ZW5jNCA9IDY0O1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRvdXRwdXQgPSBvdXRwdXQgK1xyXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXHJcblx0XHRcdHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMykgKyB0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzQpO1xyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cdH0sXHJcblxyXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGRlY29kaW5nXHJcblx0ZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcblx0XHR2YXIgb3V0cHV0ID0gXCJcIjtcclxuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzO1xyXG5cdFx0dmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XHJcblx0XHR2YXIgaSA9IDA7XHJcblxyXG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XHJcblxyXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdGVuYzEgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzIgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblx0XHRcdGVuYzQgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XHJcblxyXG5cdFx0XHRjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcclxuXHRcdFx0Y2hyMiA9ICgoZW5jMiAmIDE1KSA8PCA0KSB8IChlbmMzID4+IDIpO1xyXG5cdFx0XHRjaHIzID0gKChlbmMzICYgMykgPDwgNikgfCBlbmM0O1xyXG5cclxuXHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIxKTtcclxuXHJcblx0XHRcdGlmIChlbmMzICE9IDY0KSB7XHJcblx0XHRcdFx0b3V0cHV0ID0gb3V0cHV0ICsgU3RyaW5nLmZyb21DaGFyQ29kZShjaHIyKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZW5jNCAhPSA2NCkge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMyk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0b3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xyXG5cclxuXHRcdHJldHVybiBvdXRwdXQ7XHJcblxyXG5cdH0sXHJcblxyXG5cdC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xyXG5cdF91dGY4X2VuY29kZSA6IGZ1bmN0aW9uIChzdHJpbmcpIHtcclxuXHRcdHN0cmluZyA9IHN0cmluZy5yZXBsYWNlKC9cXHJcXG4vZyxcIlxcblwiKTtcclxuXHRcdHZhciB1dGZ0ZXh0ID0gXCJcIjtcclxuXHJcblx0XHRmb3IgKHZhciBuID0gMDsgbiA8IHN0cmluZy5sZW5ndGg7IG4rKykge1xyXG5cclxuXHRcdFx0dmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTtcclxuXHJcblx0XHRcdGlmIChjIDwgMTI4KSB7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcclxuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gNikgfCAxOTIpO1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdXRmdGV4dDtcclxuXHR9LFxyXG5cclxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2RpbmdcclxuXHRfdXRmOF9kZWNvZGUgOiBmdW5jdGlvbiAodXRmdGV4dCkge1xyXG5cdFx0dmFyIHN0cmluZyA9IFwiXCI7XHJcblx0XHR2YXIgaSA9IDA7XHJcblx0XHR2YXIgYyA9IGMxID0gYzIgPSAwO1xyXG5cclxuXHRcdHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkge1xyXG5cclxuXHRcdFx0YyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKTtcclxuXHJcblx0XHRcdGlmIChjIDwgMTI4KSB7XHJcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XHJcblx0XHRcdFx0aSsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2UgaWYoKGMgPiAxOTEpICYmIChjIDwgMjI0KSkge1xyXG5cdFx0XHRcdGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcblx0XHRcdFx0c3RyaW5nICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuXHRcdFx0XHRpICs9IDI7XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0YzIgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsxKTtcclxuXHRcdFx0XHRjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xyXG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuXHRcdFx0XHRpICs9IDM7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHN0cmluZztcclxuXHR9XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL2Jhc2U2NC5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi4vZ2VvbWV0cnkvUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcblxyXG4vLyBiZWFuIHJlcXVpcmVzIHRoZSBleGlzdGVuY2Ugb2Ygd2luZG93XHJcbmlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG5cdGdsb2JhbC53aW5kb3cgPSB7IGFkZEV2ZW50SGFuZGxlcjogZnVuY3Rpb24oKSB7fSB9O1xyXG5cdGdsb2JhbC5kb2N1bWVudCA9IHt9O1xyXG5cdGdsb2JhbC5uYXZpZ2F0b3IgPSB7fTtcclxufVxyXG5cclxuLy8gdXRpbCB2YXJpYWJsZXNcclxubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XHJcblxyXG4vKipcclxuICogVXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHR0eXBlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XHJcblx0XHRpZiAoIXR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdKVxyXG5cdFx0XHR0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSA9IG5ldyBNYXAoKTtcclxuXHRcdGlmICghbmFtZSlcclxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdO1xyXG5cdFx0aWYgKCF0eXBlKVxyXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xyXG5cdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uc2V0KG5hbWUsIHR5cGUpO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZVR5cGU6IGZ1bmN0aW9uIChuYW1lc3BhY2UsIHByb3BzLCBkZWZhdWx0VHlwZSkge1xyXG5cdFx0bGV0IG5hbWUgPSBwcm9wcy5uYW1lO1xyXG5cclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHR5cGUgZXhpc3RzXHJcblx0XHRsZXQgdHlwZSA9IHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUpO1xyXG5cdFx0aWYgKCF0eXBlKSB7XHJcblx0XHRcdGxldCBleHRlbmQgPSBwcm9wcy5leHRlbmRzID8gdGhpcy50eXBlKG5hbWVzcGFjZSwgcHJvcHMuZXh0ZW5kcykgOiBudWxsO1xyXG5cdFx0XHRpZiAoIWV4dGVuZCAmJiBkZWZhdWx0VHlwZSlcclxuXHRcdFx0XHRleHRlbmQgPSBkZWZhdWx0VHlwZTtcclxuXHRcdFx0aWYgKGV4dGVuZClcclxuXHRcdFx0XHR0eXBlID0gY2xhc3MgZXh0ZW5kcyBleHRlbmQge1xyXG5cdFx0XHRcdH07XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHR5cGUgPSBjbGFzcyB7XHJcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcclxuXHRcdFx0XHRcdFx0Xy5hc3NpZ24odGhpcywgY29uZmlnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGRlbGV0ZSBwcm9wcy5uYW1lO1xyXG5cdFx0XHRkZWxldGUgcHJvcHMuZXh0ZW5kcztcclxuXHRcdFx0Xy5hc3NpZ24odHlwZS5wcm90b3R5cGUsIHByb3BzKTtcclxuXHRcdFx0dHlwZS50eXBlTmFtZSA9IG5hbWU7XHJcblx0XHRcdHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUsIHR5cGUpO1xyXG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuY3JlYXRlVHlwZSAtICcgKyBuYW1lc3BhY2UgKyAnLicgKyBuYW1lKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0eXBlO1xyXG5cdH0sXHJcblxyXG5cdGJ1aWxkVHlwZXM6IGZ1bmN0aW9uICh0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xyXG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgLSAnICsgbmFtZXNwYWNlKTtcclxuXHJcblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XHJcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcclxuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChkZWZhdWx0VHlwZSkge1xyXG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xyXG5cdFx0XHR0eXBlID0gdHlwZS5sZW5ndGggPiAwID8gdHlwZVswXSA6IG51bGw7XHJcblx0XHRcdGlmICh0eXBlKVxyXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5kZWZhdWx0c0RlZXAodHlwZSwgZGVmYXVsdFR5cGUpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdF8uZm9yRWFjaCh0eXBlcywgKHR5cGUpID0+IHtcclxuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xyXG5cdFx0fSk7XHJcblx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcclxuXHR9LFxyXG5cclxuXHQvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY29ycmVjdGx5IHNldCB1cCB0aGUgcHJvdG90eXBlIGNoYWluLCBmb3Igc3ViY2xhc3Nlcy5cclxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxyXG5cdC8vIGNsYXNzIHByb3BlcnRpZXMgdG8gYmUgZXh0ZW5kZWQuXHJcblx0ZXh0ZW5kOiBmdW5jdGlvbiAoY2hpbGQsIHBhcmVudCwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcclxuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxyXG5cdFx0Xy5leHRlbmQoY2hpbGQsIHBhcmVudCwgc3RhdGljUHJvcHMpO1xyXG5cclxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXHJcblx0XHQvLyBgcGFyZW50YCdzIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxyXG5cdFx0dmFyIFN1cnJvZ2F0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0dGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkO1xyXG5cdFx0fTtcclxuXHRcdFN1cnJvZ2F0ZS5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcclxuXHJcblx0XHQvLyBBZGQgcHJvdG90eXBlIHByb3BlcnRpZXMgKGluc3RhbmNlIHByb3BlcnRpZXMpIHRvIHRoZSBzdWJjbGFzcyxcclxuXHRcdC8vIGlmIHN1cHBsaWVkLlxyXG5cdFx0aWYgKHByb3RvUHJvcHMpIF8uZXh0ZW5kKGNoaWxkLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XHJcblxyXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cclxuXHRcdGNoaWxkLnN1cGVyY2xhc3MgPSBwYXJlbnQucHJvdG90eXBlO1xyXG5cclxuXHRcdHJldHVybiBjaGlsZDtcclxuXHR9LFxyXG5cclxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbiAob2JqLCBjb25maWcpIHtcclxuXHRcdGxldCBwcm9wcyA9IHt9LCBjID0gb2JqLmNvbnN0cnVjdG9yLCBjQXJyID0gW2NdO1xyXG5cdFx0d2hpbGUgKGMpIHtcclxuXHRcdFx0aWYgKGMuc3VwZXIpIHtcclxuXHRcdFx0XHRjID0gYy5zdXBlci5jb25zdHJ1Y3RvcjtcclxuXHRcdFx0XHRzcGxpY2UuYXBwbHkoY0FyciwgWzAsIDAsIGNdKTtcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0YyA9IG51bGw7XHJcblx0XHR9XHJcblxyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjQXJyLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGMgPSBjQXJyW2ldO1xyXG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcclxuXHRcdFx0XHRfLmFzc2lnbihwcm9wcywgYy5ERUZBVUxUUyk7XHJcblx0XHR9XHJcblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcclxuXHRcdGMucHJvdG90eXBlLnByb3AgPSBmdW5jdGlvbiAobmFtZSwgdmFsdWUpIHtcclxuXHRcdFx0aWYgKCF2YWx1ZSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcclxuXHRcdFx0dGhpcy5wcm9wc1tuYW1lXSA9IHZhbHVlO1xyXG5cdFx0fTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXRzIHRoZSBKUyBjbGFzcyBjb25zdHJ1Y3Rvci5cclxuXHQgKiBAcGFyYW0ge09iamVjdH0ganNDbGFzc1xyXG5cdCAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0Q2xhc3NcclxuXHQgKi9cclxuXHRnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24gKGpzQ2xhc3MsIGRlZmF1bHRDbGFzcykge1xyXG5cdFx0aWYgKCFqc0NsYXNzKVxyXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xyXG5cclxuXHRcdGlmIChfLmlzU3RyaW5nKGpzQ2xhc3MpKVxyXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcclxuXHRcdHJldHVybiBqc0NsYXNzO1xyXG5cdH0sXHJcblxyXG5cdGRlYnVnOiBmdW5jdGlvbiAobW9kdWxlTmFtZSkge1xyXG5cdFx0aWYgKG1vZHVsZU5hbWUpIHtcclxuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0X2RlYnVnQWxsID0gdHJ1ZTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHRsb2c6IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XHJcblx0XHRpZiAoIXdpbmRvdy5jb25zb2xlKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHZhciBkZWJ1ZyA9IF9kZWJ1Z0FsbDtcclxuXHRcdGlmICghX2RlYnVnQWxsKSB7XHJcblx0XHRcdGRlYnVnID0gZmFsc2U7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgX2RlYnVnZ2luZy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdGlmIChfZGVidWdnaW5nW2ldID09IG5hbWUpIGRlYnVnID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKCFkZWJ1Zykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR3aGlsZSAobmFtZS5sZW5ndGggPCAxMCkge1xyXG5cdFx0XHRuYW1lID0gbmFtZSArICcgJztcclxuXHRcdH1cclxuXHRcdG5hbWUgPSBuYW1lLnN1YnN0cmluZygwLCAxMCkgKyBcIiAtIFwiO1xyXG5cdFx0Y29uc29sZS5pbmZvKG5hbWUsIG1lc3NhZ2UpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcmVsYXRpdmUgcG9zaXRpb24gb2Ygc3ViIHNoYXBlcyB3aXRoaW4gYSBwYXJlbnQgc2hhcmUuXHJcblx0ICogQHBhcmFtIGJvdW5kc1xyXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgZ2VvbWV0cnkgaW5mb3JtYXRpb24sIHRoZSBmb3JtYXQgb2YgR2VvbWV0cnkgaXM6XHJcblx0ICoge1xyXG5cdCAqICAgICAgeDogXCJ4IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LCBpZiBsZXNzIHRoYW4gMSwgd2lsbCBiZSB0cmVhdGVkIGFzIHRoZSBwZXJjZW50YWdlIG9mIHRoZSBwYXJlbnQgd2lkdGguXCIsXHJcblx0ICogICAgICB5OiBcInkgY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQuXCIsXHJcblx0ICogICAgICBhbmNob3JYOiBcInggcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcclxuXHQgKiAgICAgIGFuY2hvclk6IFwieSBwb3Mgb2YgY2hpbGQgcmVsYXRpdmUgdG8gdGhlIHJlZiBwb2ludFwiLFxyXG5cdCAqICAgICAgb2Zmc2V0WDogXCJ0aGUgb2Zmc2V0IGluIHRoZSB4IGRpcmVjdGlvbi5cIixcclxuXHQgKiAgICAgIG9mZnNldFk6IFwidGhlIG9mZnNldCBpbiB0aGUgeSBkaXJlY3Rpb24uXCIsXHJcblx0ICogICAgICB3aWR0aDogXCJ0aGUgd2lkdGggb2YgdGhlIGNoaWxkIGVsZW1lbnRcIixcclxuXHQgKiAgICAgIGhlaWdodDogXCJ0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBlbGVtZW50XCJcclxuXHQgKiB9XHJcblx0ICogQHJldHVybnMgeypbXX1cclxuXHQgKi9cclxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uOiBmdW5jdGlvbiAoYm91bmRzLCBnZW9tZXRyeSkge1xyXG5cdFx0bGV0IHggPSBNYXRoLmFicyhnZW9tZXRyeS54KSA8PSAxID8gYm91bmRzLndpZHRoICogZ2VvbWV0cnkueCA6IGdlb21ldHJ5Lng7XHJcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XHJcblx0XHRyZXR1cm4gdGhpcy5vZmZzZXRQb3NpdGlvbihbeCwgeV0sIGdlb21ldHJ5KTtcclxuXHR9LFxyXG5cclxuXHRvZmZzZXRQb3NpdGlvbjogZnVuY3Rpb24gKHBvcywgZ2VvbWV0cnkpIHtcclxuXHRcdHJldHVybiBbcG9zWzBdICsgZ2VvbWV0cnkud2lkdGggKiBnZW9tZXRyeS5hbmNob3JYICsgZ2VvbWV0cnkub2Zmc2V0WCwgcG9zWzFdICsgZ2VvbWV0cnkuaGVpZ2h0ICogZ2VvbWV0cnkuYW5jaG9yWSArIGdlb21ldHJ5Lm9mZnNldFldO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXHJcblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRlXHJcblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXHJcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXHJcblx0ICovXHJcblx0dW5zY2FsZTogZnVuY3Rpb24gKHQsIHNjYWxlLCBvKSB7XHJcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcclxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0sIG8ud2lkdGggKiBzY2FsZSwgby5oZWlnaHQgKiBzY2FsZSk7XHJcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0pO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gW29bMF0gKiBzY2FsZSArIHRbMF0sIG9bMV0gKiBzY2FsZSArIHRbMV1dO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyBzY2FsZWQsIGkuZS4sIHJlbGF0aXZlIHBvc2l0aW9uIGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cclxuXHQgKiBAcGFyYW0gdCB0aGUgY3VycmVudCB0cmFuc2xhdGlvblxyXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxyXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxyXG5cdCAqL1xyXG5cdHNjYWxlOiBmdW5jdGlvbiAodCwgc2NhbGUsIG8pIHtcclxuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxyXG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZSgoby54IC0gdFswXSkgLyBzY2FsZSwgKG8ueSAtIHRbMV0pIC8gc2NhbGUsIG8ud2lkdGggLyBzY2FsZSwgby5oZWlnaHQgLyBzY2FsZSk7XHJcblx0XHRlbHNlIGlmIChvIGluc3RhbmNlb2YgUG9pbnQpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFsob1swXSAtIHRbMF0pIC8gc2NhbGUsIChvWzFdIC0gdFsxXSkgLyBzY2FsZV07XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxyXG5cdCAqL1xyXG5cdGdldFByb3BlcnR5OiBmdW5jdGlvbiAob2JqLCBwcm9wKSB7XHJcblx0XHRpZiAoIW9iailcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRpZiAoXy5oYXMob2JqLCBwcm9wKSlcclxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcclxuXHRcdGlmIChvYmoucHJvcCAmJiBfLmlzRnVuY3Rpb24ob2JqLnByb3ApKVxyXG5cdFx0XHRyZXR1cm4gb2JqLnByb3AocHJvcCk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XHJcblx0Y29uc3RydWN0b3IoeCwgeSkge1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBNYWtlIGEgY2xvbmUgb2YgdGhpcyBwb2ludFxyXG5cdCAqL1xyXG5cdGNsb25lKCkge1xyXG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLngsIHRoaXMueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGZyb20gdGhpcyBwdCB0byB0aGUgb3RoZXIgcHQuXHJcblx0ICogQHBhcmFtIGFQdFxyXG5cdCAqIEByZXR1cm5zIHtudW1iZXJ9XHJcblx0ICovXHJcblx0ZGlzdGFuY2UoYVB0KSB7XHJcblx0XHRyZXR1cm4gTWF0aC5zcXJ0KCh0aGlzLnggLSBhUHQueCkgKiAodGhpcy54IC0gYVB0LngpICsgKHRoaXMueSAtIGFQdC55KSAqICh0aGlzLnkgLSBhUHQueSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogVHJhbnNsYXRlIHRoaXMgcG9pbnRcclxuIFx0ICovXHJcblx0dHJhbnNsYXRlKHAyKSB7XHJcblx0XHR0aGlzLnggKz0gcDIueDtcclxuXHRcdHRoaXMueSArPSBwMi55O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTY2FsZSB0aGlzIHZlY3RvclxyXG4gXHQgKi9cclxuXHRzY2FsZShzY2FsZSkge1xyXG5cdFx0dGhpcy54ICo9IHNjYWxlO1xyXG5cdFx0dGhpcy55ICo9IHNjYWxlO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXRTY2FsZWQoc2NhbGUpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICogc2NhbGUsIHRoaXMueSAqIHNjYWxlKTtcclxuXHR9XHJcblxyXG5cdGdldFRyYW5zbGF0ZWQocDIpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGRpcmVjdGlvbiB2ZWN0b3IgZnJvbSB0aGlzIHBvaW50IHRvIHAyLlxyXG5cdCAqIEBwYXJhbSBwMlxyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cclxuXHQgKi9cclxuXHRnZXREaXJlY3Rpb24ocDIpIHtcclxuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KChwMi54IC0gdGhpcy54KSAvIGRpc3QsIChwMi55IC0gdGhpcy55KSAvIGRpc3QpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogcm90YXRlIHRoZSBwb2ludCBhYm91dCB0aGUgb3JpZ2luLiBXaXRoIHRoZSBzcGVjaWZpZWQgYW5nbGUuXHJcblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcclxuXHQgKi9cclxuXHRyb3RhdGUoYW5nbGUpIHtcclxuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cdFx0dmFyIHNpbiA9IE1hdGguc2luKGFuZ2xlICogTWF0aC5QSSAvIDE4MCk7XHJcblx0XHR2YXIgeCA9IHRoaXMueCwgeSA9IHRoaXMueTtcclxuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xyXG5cdFx0dGhpcy55ID0geCAqIHNpbiArIHkgKiBjb3M7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGdldFJvdGF0ZWQoYW5nbGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgZG90IHByb2R1Y3QsIHRyZWF0aW5nIHRoaXMgYW5kIHAyIGFzIHZlY3RvcnMuXHJcblx0ICovXHJcblx0ZG90UHJvZHVjdChwMikge1xyXG5cdFx0cmV0dXJuIHRoaXMueCAqIHAyLnggKyB0aGlzLnkgKiBwMi55O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBtaWQgcG9pbnQgYmV0d2VlbiB0aGlzIGFuZCBwMi5cclxuIFx0ICovXHJcblx0Z2V0TWlkUG9pbnQocDIpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQoKHRoaXMueCArIHAyLngpIC8gMiwgKHRoaXMueSArIHAyLnkpIC8gMik7XHJcblx0fVxyXG5cclxuXHRyZXZlcnNlKCkge1xyXG5cdFx0dGhpcy54ID0gLXRoaXMueDtcclxuXHRcdHRoaXMueSA9IC10aGlzLnk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdGVxdWFscyhwMikge1xyXG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuXHRcdHJldHVybiAodGhpcy54ID09IHAyLnggJiYgdGhpcy55ID09IHAyLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxyXG5cdCAqIElmIHZlcnRpY2FsIGlzIHRydWUsIGl0IHdpbGwgcmVmbGVjdCB0aGUgcG9pbnQgY3Jvc3MgdGhlIHZlcnRpY2FsXHJcblx0ICogY2VudHJhbCBsaW5lIG9mIHRoZSByZWN0YW5nbGUsIG90aGVyd2lzZSByZWZsZWN0IGNyb3NzIHRoZSBob3Jpem9udGFsXHJcblx0ICogY2VudHJhbCBsaW5lLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIHJlY3QgdGhlIHJlY3RhbmdsZVxyXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxyXG5cdCAqL1xyXG5cdHJlZmxlY3QocmVjdCwgdmVydGljYWwpIHtcclxuXHRcdGlmICh2ZXJ0aWNhbClcclxuXHRcdFx0dGhpcy54ID0gMiAqIHJlY3QueCAtIHRoaXMueDtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gdGhpcy54ICsgXCIsXCIgKyB0aGlzLnk7XHJcblx0fVxyXG59XHJcblxyXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcclxuUG9pbnQuTiA9IG5ldyBQb2ludCgwLCAtMSk7XHJcblBvaW50LlMgPSBuZXcgUG9pbnQoMCwgMSk7XHJcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XHJcblBvaW50Lk5FID0gbmV3IFBvaW50KDEsIC0xKTtcclxuUG9pbnQuTlcgPSBuZXcgUG9pbnQoLTEsIC0xKTtcclxuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XHJcblBvaW50LlNXID0gbmV3IFBvaW50KC0xLCAxKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9Qb2ludC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgU2hhcGUge1xyXG5cdC8qKlxyXG5cdCAqIENoZWNrcyB3aGV0aGVyIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIGEgZ2l2ZW4gcG9pbnQgb2YgYSBnaXZlbiByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRjb250YWlucyhlbCkge1xyXG5cdFx0bGV0IHcgPSBlbC53aWR0aCB8fCAwO1xyXG5cdFx0bGV0IGggPSBlbC5oZWlnaHQgfHwgMDtcclxuXHRcdGxldCBsZWZ0ID0gZWwueCAtIHcvMjtcclxuXHRcdGxldCByaWdodCA9IGVsLnggKyB3LzI7XHJcblx0XHRsZXQgdG9wID0gZWwueSAtIGgvMjtcclxuXHRcdGxldCBib3R0b20gPSBlbC55ICsgaC8yO1xyXG5cdFx0cmV0dXJuIChyaWdodCA8PSB0aGlzLnJpZ2h0KSAmJiAobGVmdCA+PSB0aGlzLmxlZnQpICYmXHJcblx0XHRcdCh0b3AgPj0gdGhpcy50b3ApICYmIChib3R0b20gPD0gdGhpcy5ib3R0b20pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VhbHRlIHRoZSBkaXN0YW5jZSB0byBhIHBvaW50LiAwIGlmIHRoaXMgcmVjdGFuZ2xlIGNvbnRhaW5zIHRoZSBwb2ludC5cclxuXHQgKi9cclxuXHRkaXN0YW5jZShwdCkge1xyXG5cdFx0aWYgKHRoaXMuY29udGFpbnMocHQpKSByZXR1cm4gMDtcclxuXHJcblx0XHRpZiAocHQueCA8IHRoaXMubGVmdCkge1xyXG5cdFx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLnRvcCkpO1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy5sZWZ0IC0gcHQueDtcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLmxlZnQsIHRoaXMuYm90dG9tKSk7XHJcblx0XHR9XHJcblx0XHRpZiAocHQueCA8PSB0aGlzLnJpZ2h0KSB7XHJcblx0XHRcdGlmIChwdC55IDw9IHRoaXMudG9wKVxyXG5cdFx0XHRcdHJldHVybiB0aGlzLnRvcCAtIHB0Lnk7XHJcblx0XHRcdHJldHVybiBwdC55IC0gdGhpcy5ib3R0b207XHJcblx0XHR9XHJcblx0XHRpZiAocHQueSA8IHRoaXMudG9wKVxyXG5cdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMucmlnaHQsIHRoaXMudG9wKSk7XHJcblx0XHRpZiAocHQueSA8PSB0aGlzLmJvdHRvbSlcclxuXHRcdFx0cmV0dXJuIHB0LnggLSB0aGlzLnJpZ2h0O1xyXG5cdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2l2ZW4gdHdvIHBvaW50cywgd2Ugd2FudCB0byBkZXRlY3Qgd2hldGhlciB0aGUgbGluZSBqb2luaW5nIHRoZSBwdHMgaW50ZXJzZWN0XHJcblx0ICogd2l0aCB0aGUgcmVjdGFuZ2xlIG9yIG5vdC4gV2UgYXNzdW1lIG9ubHkgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBsaW5lIHNlZ21lbnRzLlxyXG5cdCAqXHJcblx0ICogQHJldHVybiBpbnQgdGhlIHNpZGUgb2YgdGhlIGludGVyc2VjdGlvbjogLTE6IG5vIGludGVyc2VjdGlvbiwgMDogbGVmdCwgMTogdG9wLCAyOiByaWdodCwgMzogYm90dG9tLCA0OiBjb250YWlubWVudC5cclxuXHQgKi9cclxuXHRkZXRlY3RJbnRlcnNlY3Rpb24ocHQxLCBwdDIpIHtcclxuXHRcdGxldCBob3Jpem9udGFsID0gcHQxLnkgPT0gcHQyLnk7XHJcblx0XHRsZXQgY29udGFpbnMxID0gdGhpcy5jb250YWlucyhwdDEpO1xyXG5cdFx0bGV0IGNvbnRhaW5zMiA9IHRoaXMuY29udGFpbnMocHQyKTtcclxuXHRcdGlmIChjb250YWluczEgJiYgY29udGFpbnMyKSByZXR1cm4gNDtcclxuXHRcdGlmICghY29udGFpbnMxICYmICFjb250YWluczIpIHtcclxuXHRcdFx0aWYgKGhvcml6b250YWwgJiYgKHB0MS55ID49IHRoaXMudG9wICYmIHB0MS55IDw9IHRoaXMuYm90dG9tKSkge1xyXG5cdFx0XHRcdGlmIChwdDEueCA8IHRoaXMubGVmdCAmJiBwdDIueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRpZiAocHQxLnggPiB0aGlzLnJpZ2h0ICYmIHB0Mi54IDwgdGhpcy5sZWZ0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKCFob3Jpem9udGFsICYmIChwdDEueCA+PSB0aGlzLmxlZnQgJiYgcHQxLnggPD0gdGhpcy5yaWdodCkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnkgPCB0aGlzLnRvcCAmJiBwdDIueSA+IHRoaXMuYm90dG9tKVxyXG5cdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0aWYgKHB0MS55ID4gdGhpcy5ib3R0b20gJiYgcHQyLnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRcdHJldHVybiAzO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiAtMTtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgb3V0UHQgPSBjb250YWluczEgPyBwdDIgOiBwdDE7XHJcblx0XHRpZiAoaG9yaXpvbnRhbCkge1xyXG5cdFx0XHRpZiAob3V0UHQueCA+IHRoaXMucmlnaHQpXHJcblx0XHRcdFx0cmV0dXJuIDI7XHJcblx0XHRcdHJldHVybiAwO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKG91dFB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0cmV0dXJuIDM7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnUmVjdGFuZ2xlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGxldCB4ID0gcmVjdC54O1xyXG5cdFx0bGV0IHkgPSByZWN0Lnk7XHJcblx0XHRsZXQgZHggPSBwdC54IC0geDtcclxuXHRcdGxldCBkeSA9IHB0LnkgLSB5O1xyXG5cdFx0bGV0IGFscGhhID0gTWF0aC5hdGFuMihkeSwgZHgpO1xyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoMCwgMCk7XHJcblx0XHRsZXQgcGkgPSBNYXRoLlBJO1xyXG5cdFx0bGV0IHBpMiA9IE1hdGguUEkvMjtcclxuXHRcdGxldCBiZXRhID0gcGkyIC0gYWxwaGE7XHJcblx0XHRsZXQgdCA9IE1hdGguYXRhbjIocmVjdC5oZWlnaHQsIHJlY3Qud2lkdGgpO1xyXG5cclxuXHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0Ly8gTGVmdCBlZGdlXHJcblx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0cC55ID0geSAtIHJlY3Qud2lkdGggKiBNYXRoLnRhbihhbHBoYSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdC8vIFRvcCBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRwLnggPSB4IC0gcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHQvLyBSaWdodCBFZGdlXHJcblx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdHAueSA9IHkgKyByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEJvdHRvbSBFZGdlXHJcblx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRwLnggPSB4ICsgcmVjdC5oZWlnaHQgKiBNYXRoLnRhbihiZXRhKSAvIDI7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGFscGhhIDwgLXBpICsgdCB8fCBhbHBoYSA+IHBpIC0gdCkge1xyXG5cdFx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QubGVmdDtcclxuXHRcdFx0XHRwLnkgPSB5O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgLXQpIHtcclxuXHRcdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QudG9wO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH0gZWxzZSBpZiAoYWxwaGEgPCB0KSB7XHJcblx0XHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRcdHAueCA9IHJlY3QucmlnaHQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRcdHAueSA9IHJlY3QuYm90dG9tO1xyXG5cdFx0XHRcdHAueCA9IHg7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgYm91bmRpbmcgcmVjdGFuZ2xlIHRoYXQgY29udGFpbnMgcDEgYW5kIHAyXHJcblx0ICovXHJcblx0c3RhdGljIGdldEJvdW5kaW5nUmVjdGFuZ2xlKHB0cywgbWFyZ2luKSB7XHJcblx0XHRpZiAoIXB0cyB8fCBwdHMubGVuZ3RoID09IDApIHJldHVybiBudWxsO1xyXG5cdFx0bWFyZ2luID0gbWFyZ2luIHx8IFswLCAwLCAwLCAwXTtcclxuXHRcdGlmICghXy5pc0FycmF5KG1hcmdpbikpXHJcblx0XHRcdG1hcmdpbiA9IFttYXJnaW4sIG1hcmdpbiwgbWFyZ2luLCBtYXJnaW5dO1xyXG5cdFx0bGV0IG1pbiA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0bGV0IG1heCA9IFtwdHNbMF0ueCwgcHRzWzBdLnldO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGV0IHAgPSBwdHNbaV07XHJcblx0XHRcdGlmIChwLnggPCBtaW5bMF0pIHtcclxuXHRcdFx0XHRtaW5bMF0gPSBwLng7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueSA8IG1pblsxXSkge1xyXG5cdFx0XHRcdG1pblsxXSA9IHAueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC54ID4gbWF4WzBdKSB7XHJcblx0XHRcdFx0bWF4WzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPiBtYXhbMV0pIHtcclxuXHRcdFx0XHRtYXhbMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdG1pblswXSA9IG1pblswXSAtIG1hcmdpblswXTtcclxuXHRcdG1pblsxXSA9IG1pblsxXSAtIG1hcmdpblsxXTtcclxuXHRcdG1heFswXSA9IG1heFswXSArIG1hcmdpblsyXTtcclxuXHRcdG1heFsxXSA9IG1heFsxXSArIG1hcmdpblszXTtcclxuXHRcdGxldCB3ID0gTWF0aC5hYnMobWF4WzBdIC0gbWluWzBdKTtcclxuXHRcdGxldCBoID0gTWF0aC5hYnMobWF4WzFdIC0gbWluWzFdKTtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pblswXSArIHcvMiwgbWluWzFdICsgaC8yLCB3LCBoKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHVuaW9uIG9mIGFsbCB0aGUgcmVjdGFuZ2xlcy5cclxuXHQgKiBAcGFyYW0gcmVjdHNcclxuXHQgKi9cclxuXHRzdGF0aWMgdW5pb24ocmVjdHMpIHtcclxuXHRcdGxldCBtaW54ID0gbnVsbCwgbWlueSA9IG51bGwsIG1heHggPSAtSW5maW5pdHksIG1heHkgPSAtSW5maW5pdHk7XHJcblx0XHRfLmVhY2gocmVjdHMsIGZ1bmN0aW9uIChyZWN0KSB7XHJcblx0XHRcdG1pbnggPSBtaW54IHx8IHJlY3QueDtcclxuXHRcdFx0bWlueSA9IG1pbnkgfHwgcmVjdC55O1xyXG5cdFx0XHRtaW54ID0gTWF0aC5taW4obWlueCwgcmVjdC54KTtcclxuXHRcdFx0bWlueSA9IE1hdGgubWluKG1pbnksIHJlY3QueSk7XHJcblx0XHRcdG1heHggPSBNYXRoLm1heChtYXh4LCByZWN0LnJpZ2h0KCkpO1xyXG5cdFx0XHRtYXh5ID0gTWF0aC5tYXgobWF4eSwgcmVjdC5ib3R0b20oKSk7XHJcblx0XHR9KTtcclxuXHRcdG1pbnggPSBtaW54IHx8IDA7XHJcblx0XHRtaW55ID0gbWlueSB8fCAwO1xyXG5cdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUobWlueCwgbWlueSwgbWF4eCAtIG1pbngsIG1heHkgLSBtaW55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIGRpcmVjdGlvbiB0aGUgcG9pbnQgPGk+cDwvaT4gaXMgaW4gcmVsYXRpb24gdG8gdGhlIGdpdmVuIHJlY3RhbmdsZS5cclxuXHQgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFdFU1QgKC0xLDApLCBFQVNUICgxLDApLCBOT1JUSCAoMCwtMSkgYW5kIFNPVVRIICgwLDEpIGlmIG9ydGhvZ29uYWwgaXMgdHJ1ZSwgb3RoZXJ3aXNlIHJldHVyblxyXG5cdCAqIHRoZSBkaXJlY3Rpb24gY29ubmVjdGlvbiB0aGUgY2VudGVyIG9mIHIgYW5kIHAuXHJcblx0ICogQHBhcmFtIHJcclxuXHQgKiBAcGFyYW0gcFxyXG5cdCAqIEBwYXJhbSBvcnRob2dvbmFsXHJcblx0ICogQHJldHVybnMge1BvaW50fCp9XHJcblx0ICovXHJcblx0c3RhdGljIGdldERpcmVjdGlvbihyLCBwLCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdGlmICghb3J0aG9nb25hbClcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChyLngsIHIueSkuZ2V0RGlyZWN0aW9uKG5ldyBQb2ludChwLngsIHAueSkpO1xyXG5cclxuXHRcdGxldCBpLCBkaXN0YW5jZSA9IE1hdGguYWJzKHIubGVmdCAtIHAueCksIGRpcmVjdGlvbiA9IFBvaW50Llc7XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIudG9wIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuTjtcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5ib3R0b20gLSBwLnkpO1xyXG5cdFx0aWYgKGkgPD0gZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlzdGFuY2UgPSBpO1xyXG5cdFx0XHRkaXJlY3Rpb24gPSBQb2ludC5TO1xyXG5cdFx0fVxyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnJpZ2h0IC0gcC54KTtcclxuXHRcdGlmIChpIDwgZGlzdGFuY2UpIHtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuRTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gZGlyZWN0aW9uO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9SZWN0YW5nbGUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfNV9fO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwge1wicm9vdFwiOlwiX1wiLFwiY29tbW9uanNcIjpcImxvZGFzaFwiLFwiY29tbW9uanMyXCI6XCJsb2Rhc2hcIixcImFtZFwiOlwibG9kYXNoXCJ9XG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmxldCByZWdpc3RyeSA9IHt9O1xyXG5cclxuY2xhc3MgU2hhcGUge1xyXG5cdGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbmZpZykge1xyXG5cdFx0dGhpcy54ID0geDtcclxuXHRcdHRoaXMueSA9IHk7XHJcblx0XHR0aGlzLndpZHRoID0gd2lkdGg7XHJcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHRcdF8uZGVmYXVsdHModGhpcywgY29uZmlnLCB7eDogMCwgeTogMCwgd2lkdGg6IDAsIGhlaWdodDogMH0pO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJuIHRoZSB5LWNvb3JkIG9mIHRoZSB0b3Agc2lkZSBvZiB0aGlzIHJlY3RhbmdsZVxyXG5cdCAqL1xyXG5cdGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnkgLSB0aGlzLmhlaWdodC8yOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybnMgdGhlIHktY29vcmRpbmF0ZSBvZiB0aGUgYm90dG9tIG9mIHRoaXMgUmVjdGFuZ2xlLlxyXG5cdCAqL1xyXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRnZXQgbGVmdCgpIHsgcmV0dXJuIHRoaXMueCAtIHRoaXMud2lkdGgvMjsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB4LWNvb3JkaW5hdGUgb2YgdGhlIHJpZ2h0IHNpZGUgb2YgdGhpcyBSZWN0YW5nbGUuXHJcblx0ICovXHJcblx0Z2V0IHJpZ2h0KCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aC8yOyB9XHJcblxyXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XHJcblxyXG5cdGdldCBib3VuZHMoKSB7IHJldHVybiBuZXcgUmVjdGFuZ2xlKHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7IH1cclxuXHJcblx0Y29udGFpbnMoZWwpIHsgcmV0dXJuIGZhbHNlOyB9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgd2lsbCBnZW5lcmF0ZSBuIHBvcnRzIG9uIHRoZSBzaGFwZS5cclxuXHQgKi9cclxuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cclxuXHQgKiBAcGFyYW0gcmVmUHRcclxuXHQgKiBAcmV0dXJucyB7bnVsbH1cclxuXHQgKi9cclxuXHRnZXRQZXJpbWV0ZXIocmVmUHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IuZ2V0UGVyaW1ldGVyKHRoaXMsIHJlZlB0LCBvcnRob2dvbmFsKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcih2aWV3KSB7XHJcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5uYW1lLCB0aGlzKSk7XHJcblx0XHRyZXR1cm4gdGVtcGxhdGUodGhpcyk7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0U2hhcGUobmFtZSkge1xyXG5cdFx0cmV0dXJuIHJlZ2lzdHJ5W25hbWVdO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGFkZFNoYXBlKG5hbWUsIGMpIHtcclxuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XHJcblx0XHRkZWxldGUgcmVnaXN0cnlbbmFtZV07XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTaGFwZTtcclxuXHJcblxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9TaGFwZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4gKiBkb20gVXRpbGl0eSBmdW5jdGlvbnNcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRpc0lFOiAoZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0dmFyIHNBZ2VudCA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xyXG5cdFx0dmFyIElkeCA9IHNBZ2VudC5pbmRleE9mKFwiTVNJRVwiKTtcclxuXHJcblx0XHQvLyBJZiBJRSwgcmV0dXJuIHZlcnNpb24gbnVtYmVyLlxyXG5cdFx0aWYgKElkeCA+IDApXHJcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XHJcblxyXG5cdFx0Ly8gSWYgSUUgMTEgdGhlbiBsb29rIGZvciBVcGRhdGVkIHVzZXIgYWdlbnQgc3RyaW5nLlxyXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxyXG5cdFx0XHRyZXR1cm4gMTE7XHJcblx0XHRlbHNlIGlmICghIW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0VkZ2VcXC8vKSlcclxuXHRcdFx0cmV0dXJuIFwiRWRnZVwiO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSkoKSxcclxuXHJcblx0aXNGaXJlRm94IDogKGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcclxuXHRcdHJldHVybiB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzQ2hyb21lOiAoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignRWRnZScpID49IDApIHJldHVybiBmYWxzZTtcclxuXHRcdHZhciByYXcgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xyXG5cdFx0cmV0dXJuIHJhdyA/IHBhcnNlSW50KHJhd1syXSwgMTApIDogZmFsc2U7XHJcblx0fSkoKSxcclxuXHJcblx0aXNNYWM6IChmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0udG9VcHBlckNhc2UoKS5pbmRleE9mKCdNQUMnKSA+PSAwO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzV2luZG93czogKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJXaW5kb3dzXCIpID49IDA7XHJcblx0fSkoKSxcclxuXHJcblx0aXNMaW51eDogKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xyXG5cdFx0cmV0dXJuIG5hdmlnYXRvci5hcHBWZXJzaW9uLmluZGV4T2YoXCJMaW51eFwiKSA+PSAwO1xyXG5cdH0pKCksXHJcblxyXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xyXG5cdFx0bGV0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG5cdFx0dGhpcy5zZXRFbGVtZW50KGVsLCBhdHRyaWJzLCBzdHlsZXMpO1xyXG5cdFx0aWYgKGh0bWwpXHJcblx0XHRcdGVsLmlubmVySFRNTCA9IGh0bWw7XHJcblx0XHRyZXR1cm4gZWw7XHJcblx0fSxcclxuXHJcblx0Y3JlYXRlRWxlbWVudEJ5U3RyaW5nOiBmdW5jdGlvbihzdHIpIHtcclxuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xyXG5cdFx0cmV0dXJuIHRlbXAuY2hpbGROb2RlcztcclxuXHR9LFxyXG5cclxuXHRzZXRFbGVtZW50OiBmdW5jdGlvbiAoZWwsIGF0dHJpYnMsIHN0eWxlcykge1xyXG5cdFx0aWYgKGF0dHJpYnMpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcclxuXHRcdFx0ICAgIGVsLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcclxuXHRcdFx0IH0pO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHN0eWxlcykge1xyXG5cdFx0XHRfLmZvckVhY2goc3R5bGVzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XHJcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHR0ZXN0RWxlbWVudDogZnVuY3Rpb24obm9kZSwgbWV0aG9kKSB7XHJcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xyXG5cdH0sXHJcblxyXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xyXG5cdFx0d2hpbGUgKG5vZGUgPSBub2RlLnBhcmVudE5vZGUpXHJcblx0XHRcdGlmICh0aGlzLnRlc3RFbGVtZW50KG5vZGUsIG1ldGhvZCkgKVxyXG5cdFx0XHRcdHJldHVybiBub2RlO1xyXG5cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cclxuXHQgKiBAcGFyYW0gZWwgdGhlIGVsZW1lbnRcclxuXHQgKiBAcGFyYW0gY29udGV4dFxyXG5cdCAqIEByZXR1cm5zIHsqW119XHJcblx0ICovXHJcblx0Z2V0UG9zaXRpb24oZWwsIGNvbnRleHQpIHtcclxuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0LCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wXTtcclxuXHR9LFxyXG5cclxuXHRnZXRDZW50ZXJQb3NpdGlvbihlbCwgY29udGV4dCkge1xyXG5cdFx0aWYgKCFjb250ZXh0KSBjb250ZXh0ID0gZG9jdW1lbnQuYm9keTtcclxuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgdyA9IGVsUmVjdC5yaWdodCAtIGVsUmVjdC5sZWZ0O1xyXG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcclxuXHJcblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCArIHcvMiwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcCArIGgvMl07XHJcblx0fSxcclxuXHJcblx0bW92ZTogZnVuY3Rpb24oZWwsIHgsIHkpIHtcclxuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XHJcblx0XHRpZiAoeSkgZWwuc3R5bGUudG9wID0geSArICdweCc7XHJcblx0fSxcclxuXHJcblx0Z2V0U2l6ZTogZnVuY3Rpb24oZWwpIHtcclxuXHRcdHZhciB3ID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0V2lkdGgsIDEwKTtcclxuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XHJcblx0XHRyZXR1cm4gW3csIGhdO1xyXG5cdH0sXHJcblxyXG5cdHJlc2l6ZTogZnVuY3Rpb24oZWwsIHcsIGgpIHtcclxuXHRcdGlmICh3KSBlbC5zdHlsZS53aWR0aCA9IHcgKyBcInB4XCI7XHJcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XHJcblx0fSxcclxuXHJcblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcclxuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxpc3QpIHRoaXMucHJlbG9hZEltYWdlcy5saXN0ID0gW107XHJcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQpIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWQgPSB7fTtcclxuXHJcblx0XHR2YXIgbGlzdCA9IHRoaXMucHJlbG9hZEltYWdlcy5saXN0O1xyXG5cdFx0dmFyIGltZywgdGhhdCA9IHRoaXM7XHJcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGltZyA9IG5ldyBJbWFnZSgpO1xyXG5cdFx0XHRpbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xyXG5cdFx0XHRcdGlmIChpbmRleCAhPT0gLTEpIHtcclxuXHRcdFx0XHRcdHRoYXQucHJlbG9hZEltYWdlcy5sb2FkZWRbdGhpcy5uYW1lXSA9IHt3aWR0aDogdGhpcy53aWR0aCwgaGVpZ2h0OiB0aGlzLmhlaWdodH07XHJcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxyXG5cdFx0XHRcdFx0Ly8gZm9yIG1lbW9yeSBjb25zdW1wdGlvbiByZWFzb25zXHJcblx0XHRcdFx0XHRsaXN0LnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9O1xyXG5cdFx0XHRsaXN0LnB1c2goaW1nKTtcclxuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xyXG5cdFx0XHRpbWcubmFtZSA9IGFycmF5W2ldO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cclxuXHQgKiBAcGFyYW0gc3JjXHJcblx0ICovXHJcblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcclxuXHRcdGlmICh0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkW3NyY107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cclxuXHRkb3dubG9hZEZpbGU6IGZ1bmN0aW9uKG5hbWUsIGRhdGEpIHtcclxuXHRcdGlmICghZGF0YSkgcmV0dXJuO1xyXG5cdFx0bGV0IG1pbWUgPSBkYXRhLm1hdGNoKC9eZGF0YTooW147LF0qKS8pWzFdO1xyXG5cdFx0aWYgKG5hbWUuaW5kZXhPZignLicpIDwgMCkge1xyXG5cdFx0XHRpZiAoIW1pbWUpIG1pbWUgPSAndGV4dC9wbGFpbic7XHJcblx0XHRcdGlmIChtaW1lID09ICd0ZXh0L3BsYWluJylcclxuXHRcdFx0XHRuYW1lID0gbmFtZSArICcudHh0JztcclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0bGV0IHR5cGUgPSBtaW1lLnNwbGl0KCcvJylbMV07XHJcblx0XHRcdFx0aWYgKHR5cGUuaW5kZXhPZignKycpID4gMCkgdHlwZSA9IHR5cGUuc3BsaXQoJysnKVswXTtcclxuXHRcdFx0XHRuYW1lID0gbmFtZSArICcuJyArIHR5cGU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICh0aGlzLmlzSUUpIHtcclxuXHRcdFx0bGV0IGVuY29kZWQgPSBkYXRhLmluZGV4T2YoJztiYXNlNjQnKSA+PSAwO1xyXG5cdFx0XHRpZiAoZW5jb2RlZClcclxuXHRcdFx0XHRkYXRhID0gYXRvYihkYXRhLnJlcGxhY2UoJ2RhdGE6JyArIG1pbWUgKyAnO2Jhc2U2NCwnLCAnJykpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGF0YSA9IGRlY29kZVVSSShkYXRhLnJlcGxhY2UoJ2RhdGE6JyArIG1pbWUgKyAnLCcsICcnKSk7XHJcblx0XHRcdGRhdGEgPSB0aGlzLkdldEJsb2IoZGF0YSwgbWltZSk7XHJcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKGRhdGEsIG5hbWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IGxpbmsgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2EnLCB7aHJlZjogZGF0YSwgZG93bmxvYWQ6IG5hbWV9LCB7ZGlzcGxheTogXCJub25lXCJ9KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChsaW5rKTtcclxuXHRcdFx0bGluay5jbGljaygpO1xyXG5cdFx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogQ29udmVydCBiNTQgdG8gYmxvYi4gSUUgb25seVxyXG5cdCAqL1xyXG5cdEdldEJsb2I6IGZ1bmN0aW9uIChkYXRhLCBjb250ZW50VHlwZSwgc2xpY2VTaXplKSB7XHJcblx0XHRjb250ZW50VHlwZSA9IGNvbnRlbnRUeXBlIHx8ICcnO1xyXG5cdFx0c2xpY2VTaXplID0gc2xpY2VTaXplIHx8IDUxMjtcclxuXHJcblx0XHR2YXIgYnl0ZUFycmF5cyA9IFtdO1xyXG5cclxuXHRcdGZvciAodmFyIG9mZnNldCA9IDA7IG9mZnNldCA8IGRhdGEubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XHJcblx0XHRcdHZhciBzbGljZSA9IGRhdGEuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBzbGljZVNpemUpO1xyXG5cclxuXHRcdFx0dmFyIGJ5dGVOdW1iZXJzID0gbmV3IEFycmF5KHNsaWNlLmxlbmd0aCk7XHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc2xpY2UubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIGJ5dGVBcnJheSA9IG5ldyBVaW50OEFycmF5KGJ5dGVOdW1iZXJzKTtcclxuXHRcdFx0Ynl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbmV3IEJsb2IoYnl0ZUFycmF5cywge3R5cGU6IGNvbnRlbnRUeXBlfSk7XHJcblx0fSxcclxuXHJcblx0b3BlbkltYWdlOiBmdW5jdGlvbihuYW1lLCBpbWFnZSkge1xyXG5cdFx0dmFyIG15V2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b29sYmFyPXllcywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHdpZHRoPTUwMCwgaGVpZ2h0PTUwMFwiKTtcclxuXHRcdHZhciBteURvY3VtZW50ID0gbXlXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHR2YXIgaW1nID0gbXlEb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG5cdFx0dGhpcy5zZXRFbGVtZW50KGltZywge3NyYzogaW1hZ2UsIG5hbWU6IG5hbWV9KTtcclxuXHRcdG15RG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbWcpO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENoZWNrIHdoZXRoZXIgdGhlIGtleSBldmVudCBpcyBmcm9tIGlucHV0LCB0ZXh0YXJlYSBvciBzZWxlY3QuXHJcblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XHJcblx0ICovXHJcblx0ZXZlbnRGcm9tSW5wdXQ6IGZ1bmN0aW9uKGUpe1xyXG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xyXG5cdFx0cmV0dXJuICh0YWdOYW1lID09ICdJTlBVVCcgfHwgdGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IHRhZ05hbWUgPT0gJ1NFTEVDVCcpO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0RvbVV0aWxzLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5cclxuLyoqXHJcbiAqIEEgc3RyaW5nIGJ1ZmZlciBmb3IgZmFzdCBzdHJpbmcgbWFuaXB1bGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xyXG5cdGNvbnN0cnVjdG9yKHN0cikge1xyXG5cdFx0dGhpcy5idWZmZXIgPSBbXTtcclxuXHRcdGlmIChzdHIpXHJcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goc3RyKTtcclxuXHR9XHJcblxyXG5cdGFwcGVuZChzdHVmZikge1xyXG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyID0gdGhpcy5idWZmZXIuY29uY2F0KHN0dWZmKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChcIlwiICsgc3R1ZmYpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRwcmVwZW5kKHN0dWZmKSB7XHJcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXHJcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBzdHVmZik7XHJcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuYnVmZmVyLnNwbGljZSgwLCAwLCBcIlwiICsgc3R1ZmYpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRjbGVhcigpIHtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0fVxyXG5cclxuXHRyZW1vdmVMYXN0KCkge1xyXG5cdFx0dGhpcy5idWZmZXIucG9wKCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKHNlcCkge1xyXG5cdFx0aWYgKCFzZXApIHNlcCA9ICcnO1xyXG5cdFx0cmV0dXJuIHRoaXMuYnVmZmVyLmpvaW4oc2VwKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9TdHJpbmdCdWZmZXIuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpbmUge1xyXG5cdGNvbnN0cnVjdG9yKHN0YXJ0LCBlbmQpIHtcclxuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcclxuXHRcdHRoaXMuZW5kID0gZW5kO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBsZW5ndGggb2YgdGhpcyBsaW5lXHJcblx0ICovXHJcblx0bGVuZ3RoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuc3RhcnQuZGlzdGFuY2UodGhpcy5lbmQpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKHB0KSB7XHJcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xyXG5cdFx0aWYgKHggPT0gMCkgcmV0dXJuIDA7XHJcblxyXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xyXG5cdFx0dmFyIGNvc2EgPSBuZXcgUG9pbnQoKHRoaXMuZW5kLnggLSB0aGlzLnN0YXJ0LngpIC8gbCwgKHRoaXMuZW5kLnkgLSB0aGlzLnN0YXJ0LnkpIC8gbCkuZG90UHJvZHVjdChcclxuXHRcdFx0bmV3IFBvaW50KHB0LnggLyB4LCBwdC55IC8geCkpO1xyXG5cclxuXHRcdHJldHVybiB4ICogTWF0aC5zcXJ0KDEgLSBjb3NhICogY29zYSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBGdW5jdGlvbjogaW50ZXJzZWN0aW9uXHJcblx0ICpcclxuXHQgKiBSZXR1cm5zIHRoZSBpbnRlcnNlY3Rpb24gb2YgdHdvIGxpbmVzIGFzIGFuIDxteFBvaW50Pi5cclxuXHQgKlxyXG5cdCAqIFBhcmFtZXRlcnM6XHJcblx0ICpcclxuXHQgKiB4MCAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHgxIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICogeTEgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBlbmRwb2ludC5cclxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHkyIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIHN0YXJ0cG9pbnQuXHJcblx0ICogeDMgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICovXHJcblx0c3RhdGljIGludGVyc2VjdGlvbih4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCB4MywgeTMpIHtcclxuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XHJcblx0XHR2YXIgbnVtZV9hID0gKCh4MyAtIHgyKSAqICh5MCAtIHkyKSkgLSAoKHkzIC0geTIpICogKHgwIC0geDIpKTtcclxuXHRcdHZhciBudW1lX2IgPSAoKHgxIC0geDApICogKHkwIC0geTIpKSAtICgoeTEgLSB5MCkgKiAoeDAgLSB4MikpO1xyXG5cclxuXHRcdHZhciB1YSA9IG51bWVfYSAvIGRlbm9tO1xyXG5cdFx0dmFyIHViID0gbnVtZV9iIC8gZGVub207XHJcblxyXG5cdFx0aWYgKHVhID49IDAuMCAmJiB1YSA8PSAxLjAgJiYgdWIgPj0gMC4wICYmIHViIDw9IDEuMCkge1xyXG5cdFx0XHQvLyBHZXQgdGhlIGludGVyc2VjdGlvbiBwb2ludFxyXG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XHJcblx0XHRcdHZhciBpbnRlcnNlY3Rpb25ZID0geTAgKyB1YSAqICh5MSAtIHkwKTtcclxuXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdMaW5lOntzdGFydD0nICsgdGhpcy5zdGFydCArICc7ZW5kPScgKyB0aGlzLmVuZCArICd9JztcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluZS5qc1xuICoqLyIsImltcG9ydCBTaGFwZSBmcm9tIFwiLi9TaGFwZVwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVsbGlwc2UgZXh0ZW5kcyBTaGFwZSB7XHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0VsbGlwc2U6e3g9JyArIHRoaXMueCArICc7eT0nICsgdGhpcy55ICsgJzt3aWR0aD0nICsgdGhpcy53aWR0aCArICc7aGVpZ2h0PScgKyB0aGlzLmhlaWdodCArICd9JztcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRQZXJpbWV0ZXIocmVjdCwgcHQsIG9ydGhvZ29uYWwgPSBmYWxzZSkge1xyXG5cdFx0dmFyIGEgPSByZWN0LndpZHRoIC8gMjtcclxuXHRcdHZhciBiID0gcmVjdC5oZWlnaHQgLyAyO1xyXG5cdFx0dmFyIGN4ID0gcmVjdC54O1xyXG5cdFx0dmFyIGN5ID0gcmVjdC55O1xyXG5cdFx0dmFyIHB4ID0gcHQueDtcclxuXHRcdHZhciBweSA9IHB0Lnk7XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBzdHJhaWdodCBsaW5lIGVxdWF0aW9uIHRocm91Z2hcclxuXHRcdC8vIHBvaW50IGFuZCBlbGxpcHNlIGNlbnRlciB5ID0gZCAqIHggKyBoXHJcblx0XHR2YXIgZHggPSBwYXJzZUludChweCAtIGN4KTtcclxuXHRcdHZhciBkeSA9IHBhcnNlSW50KHB5IC0gY3kpO1xyXG5cclxuXHRcdHZhciB0eCwgdHk7XHJcblxyXG5cdFx0aWYgKGR4ID09IDAgJiYgZHkgIT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGN4LCBjeSArIGIgKiBkeSAvIE1hdGguYWJzKGR5KSk7XHJcblx0XHR9IGVsc2UgaWYgKGR4ID09IDAgJiYgZHkgPT0gMCkge1xyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KHB4LCBweSk7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gQ2FsY3VsYXRlcyBpbnRlcnNlY3Rpb25cclxuXHRcdHZhciBkID0gZHkgLyBkeDtcclxuXHRcdHZhciBoID0gY3kgLSBkICogY3g7XHJcblx0XHR2YXIgZSA9IGEgKiBhICogZCAqIGQgKyBiICogYjtcclxuXHRcdHZhciBmID0gLTIgKiBjeCAqIGU7XHJcblx0XHR2YXIgZyA9IGEgKiBhICogZCAqIGQgKiBjeCAqIGN4ICsgYiAqIGIgKiBjeCAqIGN4IC0gYSAqIGEgKiBiICogYjtcclxuXHRcdHZhciBkZXQgPSBNYXRoLnNxcnQoZiAqIGYgLSA0ICogZSAqIGcpO1xyXG5cclxuXHRcdC8vIFR3byBzb2x1dGlvbnMgKHBlcmltZXRlciBwb2ludHMpXHJcblx0XHR2YXIgeG91dDEgPSAoLWYgKyBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB4b3V0MiA9ICgtZiAtIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHlvdXQxID0gZCAqIHhvdXQxICsgaDtcclxuXHRcdHZhciB5b3V0MiA9IGQgKiB4b3V0MiArIGg7XHJcblx0XHR2YXIgZGlzdDEgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQxIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MSAtIHB5KSwgMikpO1xyXG5cdFx0dmFyIGRpc3QyID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MiAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDIgLSBweSksIDIpKTtcclxuXHJcblx0XHQvLyBDb3JyZWN0IHNvbHV0aW9uXHJcblx0XHR2YXIgeG91dCA9IDA7XHJcblx0XHR2YXIgeW91dCA9IDA7XHJcblxyXG5cdFx0aWYgKGRpc3QxIDwgZGlzdDIpIHtcclxuXHRcdFx0eG91dCA9IHhvdXQxO1xyXG5cdFx0XHR5b3V0ID0geW91dDE7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR4b3V0ID0geG91dDI7XHJcblx0XHRcdHlvdXQgPSB5b3V0MjtcclxuXHRcdH1cclxuXHJcblx0XHRsZXQgcCA9IG5ldyBQb2ludCh4b3V0LCB5b3V0KTtcclxuXHRcdGxldCBkaXIgPSBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKHJlY3QsIHAsIG9ydGhvZ29uYWwpO1xyXG5cdFx0aWYgKG9ydGhvZ29uYWwpIHtcclxuXHRcdFx0aWYgKGRpci54ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4IC0gYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci54ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggKyBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5IC0gYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnkgPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgKyBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0VsbGlwc2UuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcblx0dHlwZTogXCJkaXJlY3RcIixcblx0c2hvd0dhdWdlOiB0cnVlLFxuXHRvcnRob2dvbmFsOiBmYWxzZVxufTtcblxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0YW5jaG9yWDogMCxcblx0YW5jaG9yWTogMCxcblx0b2Zmc2V0WDogMCxcblx0b2Zmc2V0WTogMFxufTtcblxubGV0IGxpbmtUeXBlcyA9IHt9O1xuXG5jbGFzcyBMaW5rIHtcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcblx0XHR0aGlzLmVuZCA9IHRlcm1pbmFsVmlzdWFsWzFdLnBvaW50O1xuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XG5cdFx0dGhpcy5zdGFydE1hcmtlciA9IHN0YXJ0TWFya2VyO1xuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcblx0fVxuXG5cdHJlbmRlcih2aWV3KSB7XG5cdFx0cmV0dXJuIHZpZXcucmVuZGVyTGluayh0aGlzKTtcblx0fVxuXG5cdGdldCBwb2ludHMoKSB7IHJldHVybiBudWxsOyB9XG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxuXHRnZXQgbGVuZ3RoKCkge1xuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cztcblx0XHRsZXQgaSwgbCA9IDA7XG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXG5cdFx0XHRsICs9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0cmV0dXJuIGw7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgbW9kaWZpZXJzIG9yIGxhYmVsLi5cblx0ICpcblx0ICogQHBhcmFtIGdlb21ldHJ5OiBkZWZpbmVzIGhvdyBmYXIgYWxvbmcgdGhlIGVkZ2Ugc2hvdWxkIHRoZSBwb2ludCBiZSBwbGFjZWQuXG5cdCAqIEByZXR1cm4gKltdIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cblx0ICovXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXG5cdFx0XHRnZW9tZXRyeSA9IHt4OiBnZW9tZXRyeX07XG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xuXHRcdGlmIChNYXRoLmFicyhwKSA8PSAxKSBwICo9IGw7XG5cdFx0aWYgKHAgPCAwKSBwID0gbCArIHA7XG5cdFx0aWYgKHAgPiBsKSBwID0gbDtcblxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cywgZCwgcG9pbnQsIGRpcjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGQgPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xuXHRcdFx0aWYgKHAgPD0gZCkge1xuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXG5cdFx0XHRcdHBvaW50ID0gcG9pbnRzW2ldLmNsb25lKCk7XG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRwIC09IGQ7XG5cdFx0fVxuXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxuXHRcdGlmICghcG9pbnQpXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdMaW5rJztcblx0fVxuXG5cdHN0YXRpYyBnZXRMaW5rKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1R5cGVzW3NoYXBlQ29uZmlnLnR5cGVdO1xuXHRcdGlmIChsaW5rQ2xhc3MpXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHR5cGUgbm90IHN1cHBvcnRlZDogJyArIHNoYXBlQ29uZmlnLnR5cGUpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcblx0Z2V0IHBvaW50cygpIHtcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcblx0fVxufVxuXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XG5cdGdldCBwb2ludHMoKSB7XG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XG5cdH1cblxuXHRnZXQgY29udHJvbFB0cygpIHtcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdHB0c1swXSA9IG51bGw7XG5cdFx0cHRzWzFdID0gW107XG5cdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCA9PSAwKSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQocy54LCAocy55ICsgZS55KS8yKTtcblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRwdHNbMV1bMF0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgcy55KTtcblx0XHR9XG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KGUueCwgKHMueSArIGUueSkvMik7XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0cHRzWzFdWzFdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIGUueSk7XG5cdFx0fVxuXHRcdHJldHVybiBwdHM7XG5cdH1cblxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XG5cdFx0aWYgKF8uaXNOdW1iZXIoZ2VvbWV0cnkpKVxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcblx0XHRsZXQgcCA9IGdlb21ldHJ5LngsIGwgPSB0aGlzLmxlbmd0aDtcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XG5cdFx0aWYgKHAgPCAwKSBwKys7XG5cdFx0aWYgKHAgPiAxKSBwLS07XG5cblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XG5cdFx0bGV0IGN0cmxwdHMgPSB0aGlzLmNvbnRyb2xQdHM7XG5cdFx0bGV0IHAxID0gcHRzWzBdO1xuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XG5cdFx0bGV0IHAzID0gY3RybHB0c1sxXVsxXTtcblx0XHRsZXQgcDQgPSBwdHNbMV07XG5cblx0XHRsZXQgcG9pbnQgPSBbKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS54ICsgMypwKigxLXApKigxLXApICogcDIueCArIDMqcCpwKigxLXApICogcDMueCArIHAqcCpwICogcDQueCwgKDEtcCkqKDEtcCkqKDEtcCkgKiBwMS55ICsgMypwKigxLXApKigxLXApICogcDIueSArIDMqcCpwKigxLXApICogcDMueSArIHAqcCpwICogcDQueV07XG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xuXHR9XG59XG5cbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xuXHRnZXQgcG9pbnRzKCkge1xuXHRcdHZhciBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcblx0XHR2YXIgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xuXHRcdHZhciBpc1NvdXJjZUxlZnQgPSB0YXJnZXQucmlnaHQoKSA8IHNvdXJjZS54O1xuXHRcdHZhciBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xuXHRcdHZhciByZXN1bHQgPSBbXTtcblxuXHRcdHZhciB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcblx0XHR2YXIgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4MCwgeTApKTtcblxuXHRcdHZhciB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcblx0XHR2YXIgeWUgPSB0YXJnZXQuZ2V0Q2VudGVyWSgpO1xuXG5cdFx0dmFyIHNlZyA9IHRoaXMuc2VnbWVudDtcblxuXHRcdHZhciBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcblx0XHR2YXIgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcblxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xuXHRcdHZhciBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xuXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxuXHRcdHtcblx0XHRcdHZhciB4ID0gKGlzU291cmNlTGVmdCkgP1xuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxuXHRcdFx0TWF0aC5tYXgoeDAsIHhlKStzZWc7XG5cblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHllKSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXG5cdFx0e1xuXHRcdFx0dmFyIG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XG5cblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xuXHRcdFx0cmVzdWx0LnB1c2goYXJyKTtcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xuXHRcdH1cblxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG59XG5cblxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcikge1xuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xuXHRcdFx0TUlOX0JVRkZFUjogMTAsXG5cdFx0XHRhdXRvUm91dGU6IGZhbHNlLFxuXHRcdFx0cmFuZG9tTm9pc2U6IDAsXG5cdFx0XHRzdGVwOiAxLFxuXHRcdFx0bWF4Q2hhbm5lbFdpZHRoOiAxMDBcblx0XHR9KTtcblx0XHRzdXBlcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xuXHR9XG5cblx0Z2V0IHBvaW50cygpIHtcblx0XHRsZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnN0YXJ0Tm9ybWFsLCB0aGlzLmVuZE5vcm1hbCwgdGhpcy5NSU5fQlVGRkVSKTtcblx0XHRpZiAodGhpcy5hdXRvUm91dGUpIHtcblx0XHRcdHRoaXMuX21lcmdlU2VnbWVudHMocG9zKTtcblx0XHRcdHZhciBib3hlcyA9IFtdLCBub2RlLCBzdGFydEJveCwgZW5kQm94O1xuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGVkZ2Uuc291cmNlLmdldENvbW1vbkFuY2VzdG9yKGVkZ2UudGFyZ2V0KTtcblx0XHRcdHZhciBjaGlsZE5vZGVzID0gY29udGFpbmVyLmdldERlc2NlbmRhbnRzKCk7XG5cdFx0XHR2YXIgaW5kZXggPSAwO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXHRcdFx0XHQvLyBEbyBub3QgaW5jbHVkZSBzb3VyY2Ugb3IgdGFyZ2V0IGFuY2VzdG9ycyBpbiByb3V0aW5nLlxuXHRcdFx0XHRpZiAobm9kZS5leGNsdWRlRnJvbVJvdXRpbmcoZWRnZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2Uuc291cmNlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS50YXJnZXQpKSBjb250aW51ZTtcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS5zb3VyY2UpXG5cdFx0XHRcdHN0YXJ0Qm94ID0gaW5kZXg7XG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2UudGFyZ2V0KVxuXHRcdFx0XHRlbmRCb3ggPSBpbmRleDtcblx0XHRcdFx0Ym94ZXMucHVzaChub2RlLmdldEJvdW5kcyhkb2N1bWVudCkpO1xuXHRcdFx0XHRpbmRleCsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGJveGVzLmxlbmd0aCA+IDEpXG5cdFx0XHRcdHRoaXMuYXV0b1JvdXRlKHBvcywgY29udGFpbmVyLmdldEJvdW5kcyhkb2N1bWVudCksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcblx0XHR9XG5cdFx0TWFuaGF0dGFuLl9tZXJnZVNlZ21lbnRzKHBvcyk7XG5cdFx0aWYgKHRoaXMucmFuZG9tTm9pc2UgJiYgcG9zLmxlbmd0aCA+IDMpIHtcblx0XHRcdGZvciAodmFyIGkgPSAxOyBpIDwgcG9zLmxlbmd0aCAtIDI7IGkrKykge1xuXHRcdFx0XHR2YXIgcmFuZ2UgPSB0aGlzLnJhbmRvbU5vaXNlIC8gdGhpcy5zdGVwO1xuXHRcdFx0XHR2YXIgcmFuZG9tTnVtYmVyID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcmFuZ2UgKiAyIC0gcmFuZ2UgKyAxKSAqIHRoaXMuc3RlcDtcblx0XHRcdFx0dGhpcy5fbW92ZVNlZ21lbnQocG9zLCBpLCByYW5kb21OdW1iZXIsIDEsIDEpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gcG9zO1xuXHR9XG5cblx0Ly9OZXcgZnVuY3Rpb24gZm9yIGZpbmRpbmcgcm91dGVcblx0c3RhdGljIHJvdXRlKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xuXHRcdHZhciBzdGFydEJ1ZmZlciA9IG5ldyBQb2ludChzdGFydC54ICsgc3RhcnROb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnQueSArIHN0YXJ0Tm9ybWFsLnkgKiBidWZmZXIpO1xuXHRcdHZhciBlbmRCdWZmZXIgPSBuZXcgUG9pbnQoZW5kLnggKyBlbmROb3JtYWwueCAqIGJ1ZmZlciwgZW5kLnkgKyBlbmROb3JtYWwueSAqIGJ1ZmZlcik7XG5cdFx0dmFyIHN0YXJ0QnVmZmVyTm9ybWFsLCBlbmRCdWZmZXJOb3JtYWw7XG5cdFx0dmFyIHB0cztcblx0XHRpZiAoc3RhcnROb3JtYWwueCAhPSAwKSB7XG5cdFx0XHRpZiAoKGVuZEJ1ZmZlci54IC0gc3RhcnRCdWZmZXIueCkgLyBzdGFydE5vcm1hbC54ID4gMCkge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KDAsIChlbmRCdWZmZXIueSA+PSBzdGFydEJ1ZmZlci55KSA/IDEgOiAtMSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2Uge1xuXHRcdFx0aWYgKChlbmRCdWZmZXIueSAtIHN0YXJ0QnVmZmVyLnkpIC8gc3RhcnROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoZW5kQnVmZmVyLnggPj0gc3RhcnRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZW5kTm9ybWFsLnggIT0gMCkge1xuXHRcdFx0aWYgKChzdGFydEJ1ZmZlci54IC0gZW5kQnVmZmVyLngpIC8gZW5kTm9ybWFsLnggPiAwKSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKHN0YXJ0QnVmZmVyLnkgPj0gZW5kQnVmZmVyLnkpID8gMSA6IC0xKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRpZiAoKHN0YXJ0QnVmZmVyLnkgLSBlbmRCdWZmZXIueSkgLyBlbmROb3JtYWwueSA+IDApIHtcblx0XHRcdFx0ZW5kQnVmZmVyTm9ybWFsID0gZW5kTm9ybWFsO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgoc3RhcnRCdWZmZXIueCA+PSBlbmRCdWZmZXIueCkgPyAxIDogLTEsIDApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPT0gMCkge1xuXHRcdFx0dmFyIG1pZGRsZSA9IChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApID8gbmV3IFBvaW50KHN0YXJ0QnVmZmVyLngsIGVuZEJ1ZmZlci55KSA6IG5ldyBQb2ludChlbmRCdWZmZXIueCwgc3RhcnRCdWZmZXIueSk7XG5cdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBtaWRkbGUsIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAoc3RhcnRCdWZmZXJOb3JtYWwuZG90UHJvZHVjdChlbmRCdWZmZXJOb3JtYWwpIDwgMCkge1xuXHRcdFx0aWYgKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkge1xuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBlbmRCdWZmZXIsIGVuZF07XG5cdFx0XHR9XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgc3RhcnRCdWZmZXIueSksIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIGVuZEJ1ZmZlci55KSwgZW5kQnVmZmVyLCBlbmRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdHB0cyA9IFtzdGFydCwgc3RhcnRCdWZmZXIsIG5ldyBQb2ludChzdGFydEJ1ZmZlci54ICsgc3RhcnRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgc3RhcnRCdWZmZXIueSArIHN0YXJ0QnVmZmVyTm9ybWFsLnkgKiBidWZmZXIpLCBuZXcgUG9pbnQoZW5kQnVmZmVyLnggKyBlbmRCdWZmZXJOb3JtYWwueCAqIGJ1ZmZlciwgZW5kQnVmZmVyLnkgKyBlbmRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIGVuZEJ1ZmZlciwgZW5kXTtcblx0XHR9XG5cblx0XHR2YXIgcHJ1bmVQdHMgPSBbXTtcblx0XHRwcnVuZVB0c1swXSA9IHB0c1swXTtcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmICgocHRzW2ldLnggPT0gcHRzW2ktMV0ueCAmJiBwdHNbaV0ueCA9PSBwdHNbaSsxXS54KSB8fCAocHRzW2ldLnkgPT0gcHRzW2ktMV0ueSAmJiBwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdHBydW5lUHRzLnB1c2gocHRzW2ldKTtcblx0XHR9XG5cdFx0cHJ1bmVQdHMucHVzaChwdHNbcHRzLmxlbmd0aCAtIDFdKTtcblx0XHRyZXR1cm4gcHJ1bmVQdHM7XG5cdH1cblxuXHQvKipcblx0ICogQXV0b21hdGljYWxseSByb3V0ZSB0aGUgY29ubmVjdGlvbiB0byBhdm9pZCBpbnRlcnNlY3Rpb25zIHdpdGggb3RoZXIgdmVydGljZXMuXG5cdCAqL1xuXHRhdXRvUm91dGUocHRzLCBjb250YWluZXIsIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIHNpZGUsIHNpZGUyLCBkLCBib3gsIGludGVyc2VjdCwgajtcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XG5cblx0XHR2YXIgc3RhcnRQYWRkaW5nID0gMCwgZW5kUGFkZGluZztcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxuXHRcdGJveCA9IGJveGVzW2VuZEJveF07XG5cdFx0cHQgPSBwdHNbcHRzLmxlbmd0aCAtIDJdO1xuXHRcdGlmIChwdC55IDwgYm94LnkpXG5cdFx0XHRzaWRlID0gMTtcblx0XHRlbHNlIGlmIChwdC55ID4gYm94LnkgKyBib3guaGVpZ2h0KVxuXHRcdFx0c2lkZSA9IDM7XG5cdFx0ZWxzZSBpZiAocHQueCA8IGJveC54KVxuXHRcdFx0c2lkZSA9IDA7XG5cdFx0ZWxzZVxuXHRcdFx0c2lkZSA9IDI7XG5cdFx0Y2hhbm5lbCA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgZW5kQm94LCBib3hlcywgc2lkZSk7XG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xuXHRcdFx0aW50ZXJzZWN0ID0gX2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xuXHRcdFx0aWYgKCFpbnRlcnNlY3QpIGNvbnRpbnVlO1xuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcblx0XHRcdHNpZGUgPSBpbnRlcnNlY3RbMV07XG5cdFx0XHRib3ggPSBib3hlc1tqXTtcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcblx0XHRcdHN3aXRjaChzaWRlKSB7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0Y2FzZSAyOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KChjaGFubmVsLnJpZ2h0ICsgY2hhbm5lbC5sZWZ0KS8yLCBwdHNbaV0ueSk7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueSAtIHB0Lnk7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS55ID09IHB0c1tpKzNdLnkpICYmIChwdHNbaSsyXS55ID4gY2hhbm5lbDIudG9wICYmIHB0c1tpKzJdLnkgPCBjaGFubmVsMi5ib3R0b20pKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIuYm90dG9tICsgY2hhbm5lbDIudG9wKS8yIC0gcHQueTtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDAgJiYgcHQueCA8PSBwdHNbaV0ueCkgfHwgKHNpZGUgPT0gMiAmJiBwdC54ID49IHB0c1tpXS54KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgMTpcblx0XHRcdFx0Y2FzZSAzOlxuXHRcdFx0XHRcdHB0ID0gbmV3IFBvaW50KHB0c1tpXS54LCAoY2hhbm5lbC5ib3R0b20gKyBjaGFubmVsLnRvcCkvMik7XG5cdFx0XHRcdFx0ZGlyID0gX2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBwdCwgYm94LCBzaWRlKTtcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcblx0XHRcdFx0XHRjaGFubmVsMiA9IF9nZXRDaGFubmVsKGNvbnRhaW5lciwgaiwgYm94ZXMsIHNpZGUyKTtcblx0XHRcdFx0XHQvLyBpZiB0aGUgcHJldmlvdXMgcG9pbnQgaXMgaW4gdGhlIGNoYW5uZWwyLCB1c2UgdGhhdCBwb2ludCBpbnN0ZWFkIG9mIGNlbnRlciBvZiB0aGUgY2hhbm5lbC5cblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXG5cdFx0XHRcdFx0XHRkID0gcHRzW2ktMV0ueCAtIHB0Lng7XG5cdFx0XHRcdFx0ZWxzZSBpZiAoaSA8IHB0cy5sZW5ndGggLSAzICYmIChwdHNbaSsyXS54ID09IHB0c1tpKzNdLngpICYmIChwdHNbaSsyXS54ID4gY2hhbm5lbDIubGVmdCAmJiBwdHNbaSsyXS54IDwgY2hhbm5lbDIucmlnaHQpKVxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRcdGQgPSAoY2hhbm5lbDIucmlnaHQgKyBjaGFubmVsMi5sZWZ0KS8yIC0gcHQueDtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXG5cdFx0XHRcdFx0aWYgKChzaWRlID09IDEgJiYgcHQueSA8PSBwdHNbaV0ueSkgfHwgKHNpZGUgPT0gMyAmJiBwdC55ID49IHB0c1tpXS55KSlcblx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xuXHRcdFx0XHRcdFx0Ly8gc2VlIGlmIHdlIGNhbiBwdXNoIHRoZSBsaW5lIG91dCB0byB3aGVyZSB3ZSBzdGFydGVkLlxuXHRcdFx0XHRcdFx0aWYgKCFfaGFzSW50ZXJzZWN0aW9uKFxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcblx0XHRcdFx0XHRcdFx0XHRib3hlcykpXG5cdFx0XHRcdFx0XHRcdHB0ID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgNDpcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdC8vIG1heCBwb2ludHMuXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XG5cdFx0XHRpZiAocHQgJiYgKHB0LnggIT0gcHRzW2ldLnggfHwgcHQueSAhPSBwdHNbaV0ueSkpIHtcblx0XHRcdFx0cHRzLnNwbGljZShpKzEsIDAsIHB0KTtcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xuXHRcdFx0XHRpKys7XG5cdFx0XHR9IGVsc2Vcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcblx0XHR9XG5cdH1cblxuXHRzdGF0aWMgX2hhc0ludGVyc2VjdGlvbihwdHMsIGJveGVzKSB7XG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGlmIChib3hlc1tqXS5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSkgPj0gMClcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3RhdGljIF9nZXRGaXJzdEludGVyc2VjdGlvbihwdHMsIGksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KSB7XG5cdFx0dmFyIGJveCwgc2lkZSwgc2F2ZWRJbmRleCA9IG51bGwsIHNhdmVkU2lkZSA9IG51bGw7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChpID09IDAgJiYgaiA9PSBzdGFydEJveCkgfHwgKGkgPT0gcHRzLmxlbmd0aCAtIDIgJiYgaiA9PSBlbmRCb3gpKVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdGJveCA9IGJveGVzW2pdO1xuXHRcdFx0c2lkZSA9IGJveC5kZXRlY3RJbnRlcnNlY3Rpb24ocHRzW2ldLCBwdHNbaSsxXSk7XG5cdFx0XHRpZiAoc2lkZSA+PSAwKSB7XG5cdFx0XHRcdGlmIChzYXZlZEluZGV4ID09IG51bGwpIHtcblx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcblx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGlmIChib3hlc1tzYXZlZEluZGV4XS5kaXN0YW5jZShwdHNbaV0pID4gYm94LmRpc3RhbmNlKHB0c1tpXSkpIHtcblx0XHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xuXHRcdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHNhdmVkSW5kZXggIT0gbnVsbClcblx0XHRcdHJldHVybiBbc2F2ZWRJbmRleCwgc2F2ZWRTaWRlXTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgYnJlYWtQdCwgYm94LCBzaWRlKSB7XG5cdFx0dmFyIGRpcjtcblx0XHR2YXIgcDtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdGNhc2UgMjpcblx0XHRcdFx0cCA9IFwieVwiO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgMTpcblx0XHRcdGNhc2UgMzpcblx0XHRcdFx0cCA9IFwieFwiO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0Ly9maXJzdCB0cnkgdGhlIGJyZWFrcHQuXG5cdFx0ZGlyID0gX2dldFJvdXRlRGlyZWN0aW9uKGJyZWFrUHQsIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdGlmIChkaXIgPT0gMCkge1xuXHRcdFx0ZGlyID0gLV9nZXRSb3V0ZURpcmVjdGlvbihwdHNbMF0sIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xuXHRcdFx0aWYgKGRpciA9PSAwKSB7XG5cdFx0XHRcdGlmIChicmVha1B0W3BdIDwgYm94LmdldENlbnRlcigpW3BdKVxuXHRcdFx0XHRcdGRpciA9IC0xO1xuXHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0ZGlyID0gMTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGRpcjtcblx0fVxuXG5cdHN0YXRpYyBfZ2V0Um91dGVEaXJlY3Rpb24ocHQxLCBwdDIpIHtcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcblx0XHRcdGlmIChwdDEueSA8IHB0Mi55KSByZXR1cm4gUG9pbnQuUztcblx0XHRcdHJldHVybiBQb2ludC5OO1xuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcblx0XHRcdGlmIChwdDEueCA8IHB0Mi54KSByZXR1cm4gUG9pbnQuRTtcblx0XHRcdHJldHVybiBQb2ludC5XO1xuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TRTtcblx0XHRcdHJldHVybiBQb2ludC5ORTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TVztcblx0XHRcdHJldHVybiBQb2ludC5OVztcblx0XHR9XG5cdH1cblxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xuXHRcdHZhciBtYXhDaGFubmVsV2lkdGggPSB0aGlzLm1heENoYW5uZWxXaWR0aDtcblx0XHR2YXIgYm94MSA9IGJveGVzW2luZGV4XSwgYm94Mjtcblx0XHR2YXIgcHQsIGk7XG5cdFx0dmFyIGNoYW5uZWwgPSB7fSwgbCwgdCwgYiwgcjtcblx0XHRzd2l0Y2ggKHNpZGUpIHtcblx0XHRcdGNhc2UgMDpcblx0XHRcdFx0cHQgPSBib3gxLmdldExlZnQoKTtcblx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IHB0Lng7XG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA+PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkge1xuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNoYW5uZWwucmlnaHQgLSBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDE6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRUb3AoKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPj0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkge1xuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3AgPiBtYXhDaGFubmVsV2lkdGgpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGNoYW5uZWwuYm90dG9tIC0gbWF4Q2hhbm5lbFdpZHRoO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XG5cdFx0XHRcdFx0bCA9IGJveDIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdFx0ciA9IGJveDIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0IHx8IGNoYW5uZWwubGVmdCA8IHIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IHI7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmIChsID4gcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCB8fCBjaGFubmVsLnJpZ2h0ID4gbClcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XG5cdFx0XHRcdGlmICghY2hhbm5lbC5yaWdodCkgY2hhbm5lbC5yaWdodCA9IGNvbnRhaW5lci5nZXRSaWdodCgpLng7XG5cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDI6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRSaWdodCgpO1xuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcblx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcHQueDtcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGwgPSBib3hlc1tpXS5nZXRMZWZ0KCkueDtcblx0XHRcdFx0XHRpZiAobCA8PSBwdC54KSBjb250aW51ZTtcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcblx0XHRcdFx0XHRjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5yaWdodCAtIGNoYW5uZWwubGVmdCA+IG1heENoYW5uZWxXaWR0aClcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcblx0XHRcdFx0XHRiID0gYm94Mi5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCB8fCBjaGFubmVsLnRvcCA8IGIpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHQgPiBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcblx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSkgY2hhbm5lbC5ib3R0b20gPSBjb250YWluZXIuZ2V0Qm90dG9tKCkueTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIDM6XG5cdFx0XHRcdHB0ID0gYm94MS5nZXRCb3R0b20oKTtcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcblx0XHRcdFx0Y2hhbm5lbC50b3AgPSBwdC55O1xuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGlmIChib3gyLmdldFRvcCgpLnkgPD0gcHQueSkgY29udGludWU7XG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcblx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gYm94Mi5nZXRUb3AoKS55O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcblx0XHRcdFx0XHRjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xuXHRcdFx0XHRcdGlmIChjaGFubmVsLmJvdHRvbSAtIGNoYW5uZWwudG9wID4gbWF4Q2hhbm5lbFdpZHRoKVxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xuXHRcdFx0XHRcdGwgPSBib3gyLmdldExlZnQoKS54O1xuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcblx0XHRcdFx0XHRpZiAociA8IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCB8fCBjaGFubmVsLmxlZnQgPCByKVxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAobCA+IHB0LnggJiYgKGJveDIuZ2V0Qm90dG9tKCkgPiBjaGFubmVsLnRvcCAmJiBib3gyLmdldFRvcCgpIDwgY2hhbm5lbC5ib3R0b20pKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoIWNoYW5uZWwubGVmdCkgY2hhbm5lbC5sZWZ0ID0gY29udGFpbmVyLmdldExlZnQoKS54O1xuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdFx0cmV0dXJuIGNoYW5uZWw7XG5cdH1cblxuXHQvKipcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cblx0ICpcblx0ICogQHBhcmFtIHB0cyB0aGUgbGlzdCBvZiBwb2ludHMuXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cblx0ICogQHBhcmFtIGQgdGhlIGRpc3RhbmNlIHRvIG1vdmUuXG5cdCAqIEBwYXJhbSBzdGFydFBhZGRpbmdcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcblx0ICovXG5cdF9tb3ZlU2VnbWVudChwdHMsIGksIGQsIHN0YXJ0UGFkZGluZywgZW5kUGFkZGluZykge1xuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxuXHRcdHZhciBkaXIsIGwsIHB0O1xuXHRcdGlmIChpID09IDApIHtcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxuXHRcdFx0ZGlyID0gcHRzWzBdLmdldERpcmVjdGlvbihwdHNbMV0pO1xuXHRcdFx0aWYgKCFzdGFydFBhZGRpbmcpXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcblx0XHRcdGwgPSBNYXRoLm1pbihzdGFydFBhZGRpbmcsIHB0c1swXS5kaXN0YW5jZShwdHNbMV0pLzIpO1xuXHRcdFx0cHQgPSBwdHNbMF0uZ2V0VHJhbnNsYXRlZChkaXIuc2NhbGUobCkpO1xuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XG5cdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XG5cdFx0XHQvLyB3ZSBuZWVkIHRvIGJyZWFrIG9mZiB0aGUgc2VnbWVudCwgc2luY2Ugd2UgY2FuJ3QgY2hhbmdlIHRoZSBlbmQgcG9pbnQuXG5cdFx0XHRkaXIgPSBwdHNbcHRzLmxlbmd0aC0xXS5nZXREaXJlY3Rpb24ocHRzW3B0cy5sZW5ndGgtMl0pO1xuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxuXHRcdFx0XHRlbmRQYWRkaW5nID0gdGhpcy5NSU5fQlVGRkVSO1xuXHRcdFx0bCA9IE1hdGgubWluKGVuZFBhZGRpbmcsIHB0c1twdHMubGVuZ3RoLTFdLmRpc3RhbmNlKHB0c1twdHMubGVuZ3RoLTJdKS8yKTtcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XG5cdFx0XHRwdHMuc3BsaWNlKHB0cy5sZW5ndGggLSAxLCAwLCBwdCk7XG5cdFx0XHR0aGlzLl9tb3ZlU2VnbWVudChwdHMsIGksIGQpO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmIChwdHNbaV0ueSA9PSBwdHNbaSsxXS55KSB7XG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS55ID09IHB0c1tpKzJdLnkpXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpKzFdLmNsb25lKCkpO1xuXHRcdFx0cHRzW2ldLnkgKz0gZDtcblx0XHRcdHB0c1tpKzFdLnkgKz0gZDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaV0uY2xvbmUoKSk7XG5cdFx0XHRcdGkrKztcblx0XHRcdH1cblx0XHRcdGlmIChpIDwgcHRzLmxlbmd0aCAtIDIgJiYgcHRzW2krMV0ueCA9PSBwdHNbaSsyXS54KVxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcblx0XHRcdHB0c1tpXS54ICs9IGQ7XG5cdFx0XHRwdHNbaSsxXS54ICs9IGQ7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cblx0ICovXG5cdHN0YXRpYyBfbWVyZ2VTZWdtZW50cyhwdHMpIHtcblx0XHR2YXIgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XG5cdFx0dmFyIGgyO1xuXHRcdGZvciAodmFyIGkgPSBwdHMubGVuZ3RoIC0gMjsgaSA+PSAxOyBpLS0pIHtcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcblx0XHRcdGlmIChoMiA9PSBoMSB8fCAocHRzW2ldLmVxdWFscyhwdHNbaS0xXSkpKVxuXHRcdFx0XHRwdHMuc3BsaWNlKGksIDEpO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRoMSA9ICFoMTtcblx0XHR9XG5cdH1cbn1cblxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XG5saW5rVHlwZXNbJ2JlemllciddID0gQmV6aWVyTGluaztcbmxpbmtUeXBlc1snZW50aXR5UmVsYXRpb25zJ10gPSBFbnRpdHlSZWxhdGlvbnM7XG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xuXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5cclxuY29uc3QgREVGQVVMVFMgPSB7XHJcblx0c3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSByb290IHRoZSByb290IGVsZW1lbnQgdGhhdCB0aGUgbWFuYWdlciB3aWxsIGxpc3RlbiB0by5cclxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXHJcblx0ICogQHBhcmFtIGNvbmZpZyB0aGUgY29uZmlndXJhdG9uIGZvciB0aGUgZXZlbnQgZGlzcGF0Y2hlci5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldLCBjb25maWcgPSB7fSkge1xyXG5cdFx0dGhpcy5yb290ID0gcm9vdDtcclxuXHRcdHRoaXMucm9vdE5TID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ25zJykgfHwgJ3Jvb3QnO1xyXG5cdFx0dGhpcy56b29tU2NhbGUgPSB6b29tU2NhbGU7XHJcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcclxuXHRcdHRoaXMuc2NhbGUgPSAxLjA7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xyXG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYW5kbGVyID0gXy5iaW5kKHRoaXMuaGFuZGxlRXZlbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gU2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50c1xyXG5cdFx0dGhpcy5lbnRlclN0YWNrID0gW107XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzdGFydCgpIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdEV2ZW50cy5vbih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcclxuXHRcdHRoaXMuc3RhcnRLZXlzKCk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzdG9wKCkge1xyXG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdEV2ZW50cy5vZmYodGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XHJcblx0XHR0aGlzLnN0b3BLZXlzKCk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0S2V5cygpIHtcclxuXHRcdEV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xyXG5cdH1cclxuXHJcblx0c3RvcEtleXMoKSB7XHJcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHR6b29tSW4oKSB7XHJcblx0XHR0aGlzLnNjYWxlICo9IDEuMjU7XHJcblx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcclxuXHR9XHJcblxyXG5cdHpvb21PdXQoKSB7XHJcblx0XHR0aGlzLnNjYWxlICo9IDAuODtcclxuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcclxuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xyXG5cdH1cclxuXHJcblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgbnMsIHN0YWNrID0gW10sIGlzUm9vdCA9IGZhbHNlO1xyXG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xyXG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XHJcblx0XHRcdGlmIChucykge1xyXG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcclxuXHRcdFx0XHRpZiAoaXNSb290KSB7XHJcblx0XHRcdFx0XHRucyA9IG5zLnN1YnN0cmluZyg1KTtcclxuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghZXZlbnQubnNUYXJnZXQpIGV2ZW50Lm5zVGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xyXG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdH1cclxuXHRcdGlmICghaXNSb290KVxyXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XHJcblxyXG5cdFx0Ly8gdGFyZ2V0IHN0YWNrIGlzIGEgc3RhY2sgb2YgYWxsIHRoZSBucyB0YXJnZXRzIHVwIHRvIHRoZSBvbmUgd2l0aCB0aGUgZGF0YSBiaW5kaW5nLlxyXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcclxuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XHJcblx0XHRpZiAobnMgPT0gJycpIG5zID0gdGhpcy5yb290TlM7XHJcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXHJcblx0ICovXHJcblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcclxuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcclxuXHJcblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cclxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xyXG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcclxuXHRcdFx0ZGF0YSA9IHRoaXMucm9vdDtcclxuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xyXG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcclxuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcclxuXHRcdFx0bnMgPSBpbmZvLm5zO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vVXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImhhbmRsZUV2ZW50IC0gXCIgKyB0eXBlICsgJztucz0nICsgbnMpO1xyXG5cclxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xyXG5cdFx0XHR0aGlzLnNjYWxlICo9IE1hdGgucG93KDIsIGV2ZW50LndoZWVsRGVsdGEgKiAwLjAwMik7XHJcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcclxuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xyXG5cdFx0XHR0eXBlID0gJ3pvb20nO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFNlZSBpZiB3ZSBzaG91bGQgY3JlYXRlIGRyYWcgZXZlbnRzXHJcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcclxuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxyXG5cdFx0XHRjb25zdCBkcmFnT2JqZWN0ID0ge2RhdGE6IGRhdGEsIHBvczogbnMgPT0gJ3Jvb3QnID8gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpIDogcG9zfTtcclxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXHJcblx0XHRcdGxldCBkcmFnUG9zO1xyXG5cclxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcclxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cclxuXHRcdFx0XHRcdGlmIChkcmFnT2JqZWN0LnBvc1swXSA9PSBjdXJyZW50UG9zWzBdICYmIGRyYWdPYmplY3QucG9zWzFdID09IGN1cnJlbnRQb3NbMV0pIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xyXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcclxuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWcnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcclxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnZ2luZykge1xyXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XHJcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc0tleUV2ZW50KVxyXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XHJcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcclxuXHJcblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxyXG5cdFx0Ly9pZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxyXG5cdFx0Ly9cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcclxuXHRcdGxldCBsYXN0LCBzdGFjaztcclxuXHRcdGNvbnN0IGNsZWFyRW50ZXJTdGFjayA9IChrKSA9PiB7XHJcblx0XHRcdGsgPSBrIHx8IDA7XHJcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXHJcblx0XHRcdHdoaWxlICh0aGlzLmVudGVyU3RhY2subGVuZ3RoID49IGsgKyAxKSB7XHJcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xyXG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcclxuXHRcdFx0XHRpZiAoXy5zdGFydHNXaXRoKHZhbCwgXCJyb290LlwiKSlcclxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XHJcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XHJcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XHJcblx0XHRcdFx0c3RhY2sgPSBldmVudC50YXJnZXRTdGFjaztcclxuXHRcdFx0XHRsZXQgaXRlbTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aXRlbSA9IHtkYXRhOiBkYXRhLCBuczogZ2V0TlMoaSksIHRhcmdldDogc3RhY2tbaV19O1xyXG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxyXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcclxuXHRcdFx0Y2xlYXJFbnRlclN0YWNrKCk7XHJcblx0fVxyXG5cclxuXHRkaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xyXG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXHJcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xyXG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcclxuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XHJcblx0XHRcdGlmIChFdmVudERpc3BhdGNoZXIubWF0Y2gobnNUeXBlLCBsaXN0ZW5lcnMucmVnZXhwID8gbGlzdGVuZXJzLnJlZ2V4cCA6IGtleSkpIHtcclxuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxyXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbihldmVudCkge1xyXG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xyXG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXHJcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gcG9zO1xyXG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcclxuXHQgKiAvLyBLZXkgaXMgb2JqZWN0IHtjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBjb2RlfVxyXG5cdCAqL1xyXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xyXG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xyXG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcclxuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcclxuXHJcblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcclxuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xyXG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xyXG5cdFx0XHRcdHRoaXMudW5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XHJcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xyXG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xyXG5cclxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcclxuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHQgKi9cclxuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XHJcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XHJcblx0XHRcdF8uZm9yRWFjaCh0eXBlLCAodCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcclxuXHRcdHZhciByZWdleHAgPSBudWxsO1xyXG5cdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuXHRcdFx0cmVnZXhwID0gdHlwZTtcclxuXHRcdFx0dHlwZSA9IHR5cGUgKyAnJztcclxuXHRcdH1cclxuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcclxuXHRcdGlmIChyZWdleHAgJiYgIXRoaXMubGlzdGVuZXJzW3R5cGVdLnJlZ2V4cClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucmVnZXhwID0gcmVnZXhwO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcblx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIFJlZ0V4cClcclxuXHRcdFx0dHlwZSA9IHR5cGUgKyAnJztcclxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XHJcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XHJcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XHJcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XHJcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgdHlwZSBtYXRjaGVzIHRoZSByZWFsIGV2ZW50IHR5cGUuIFwiKlwiIGlzIGFsbG93ZWQgYXMgYSB3aWxkIGNhcmQuXHJcblx0ICovXHJcblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcclxuXHRcdGlmIChyZWdpc3RlcmVkVHlwZSBpbnN0YW5jZW9mIFJlZ0V4cClcclxuXHRcdFx0cmV0dXJuIG5zVHlwZS5tYXRjaChyZWdpc3RlcmVkVHlwZSk7XHJcblxyXG5cdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcclxuXHRcdC8qY29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcclxuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XHJcblxyXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XHJcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XHJcblx0XHRcdGluZGV4ID0gc3Vic3RyLmluZGV4T2YoYXJyW2ldKTtcclxuXHRcdFx0aWYgKGluZGV4IDwgMClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGluZGV4ICs9IGFycltpXS5sZW5ndGg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTsqL1xyXG5cdH1cclxuXHJcblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xyXG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xyXG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xyXG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcclxuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcclxuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XHJcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XHJcblx0XHR9XHJcblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcblxyXG4vKipcclxuICogS0VZIGNvbnN0YW50XHJcbiAqL1xyXG5jb25zdCBLRVkgPSB7XHJcblx0QUxUICAgICAgICAgIDogMTgsXHJcblx0QkFDS19TUEFDRSAgIDogOCxcclxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcclxuXHRDT05UUk9MICAgICAgOiAxNyxcclxuXHRERUxFVEUgICAgICAgOiA0NixcclxuXHRET1dOICAgICAgICAgOiA0MCxcclxuXHRFTkQgICAgICAgICAgOiAzNSxcclxuXHRFTlRFUiAgICAgICAgOiAxMyxcclxuXHRFU0NBUEUgICAgICAgOiAyMjAsXHJcblx0SE9NRSAgICAgICAgIDogMzYsXHJcblx0TEVGVCAgICAgICAgIDogMzcsXHJcblx0TUVUQSAgICAgICAgIDogMjI0LFxyXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcclxuXHRQQUdFX0RPV04gICAgOiAzNCxcclxuXHRQQUdFX1VQICAgICAgOiAzMyxcclxuXHRQQVVTRSAgICAgICAgOiAxOSxcclxuXHRQUklOVFNDUkVFTiAgOiA0NCxcclxuXHRSSUdIVCAgICAgICAgOiAzOSxcclxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXHJcblx0U0hJRlQgICAgICAgIDogMTYsXHJcblx0U1BBQ0UgICAgICAgIDogMzIsXHJcblx0VEFCICAgICAgICAgIDogOSxcclxuXHRVUCAgICAgICAgICAgOiAzOFxyXG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxyXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcclxuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcblxyXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXHJcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcclxuXHRcdGtleSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcclxuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cclxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XHJcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcclxuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcclxuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XHJcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xyXG5cclxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcclxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xyXG5cclxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnbm9kZScsXHJcblx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdHNlbGVjdGFibGU6IHRydWUsXHJcblx0ZWRpdGFibGU6IHRydWUsXHJcblx0cmVzaXphYmxlOiBmYWxzZSxcclxuXHRzb3VyY2VhYmxlOiB0cnVlLFxyXG5cdHRhcmdldGFibGU6IHRydWUsXHJcblx0dmlzaWJsZTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnZWRnZScsXHJcblx0c2VsZWN0YWJsZTogdHJ1ZSxcclxuXHR2aXNpYmxlOiB0cnVlLFxyXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxyXG5cdGVuZE1hcmtlcjoge1xyXG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXHJcblx0XHR0eXBlOiAnYXJyb3cnLFxyXG5cdFx0c2l6ZTogMTAsXHJcblx0XHRjb2xvcjogJyMwZWExMTcnXHJcblx0fSxcclxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xyXG5cdHN0YXJ0OiBbMCwgMF0sXHJcblx0ZW5kOiBbNDAwLCAyMDBdXHJcbn07XHJcblxyXG5jbGFzcyBHcmFwaCB7XHJcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xyXG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XHJcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcclxuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxyXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XHJcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xyXG5cdFx0ZWRnZVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xyXG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcclxuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xyXG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCB0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGUucHJvdG90eXBlLmVuZE1hcmtlcjtcclxuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xyXG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCBmYWxzZSk7XHJcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XHJcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHRcdHRoaXMucm9vdCA9IG51bGw7XHJcblx0XHRpZiAobW9kZWwpXHJcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XHJcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XHJcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XHJcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cclxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcclxuXHRcdFx0aWYgKHR5cGUpXHJcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXHJcblx0ICovXHJcblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xyXG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcclxuXHRcdGxldCBub2RlID0gbmV3IE5vZGVDbGFzcyh0aGlzLCBjb25maWcpO1xyXG5cclxuXHRcdGlmIChwYXJlbnQpXHJcblx0XHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgbm9kZSwgcG9zKTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xyXG5cdFx0XHR0aGlzLnJvb3QucHJvcCgncm9sZScsICdyb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ub2Rlc1tub2RlLmlkXSA9IG5vZGU7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xyXG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcclxuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcclxuXHJcblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xyXG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XHJcblx0XHRyZXR1cm4gZWRnZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XHJcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cclxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXHJcblx0XHRcdFx0Y2hpbGQucGFyZW50LmNoaWxkcmVuID0gXy53aXRob3V0KGNoaWxkLnBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xyXG5cdH1cclxuXHJcblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XHJcblx0XHR2YXIgbm9kZXMgPSBtb2RlbC5ub2RlcztcclxuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLmVkZ2VzO1xyXG5cclxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xyXG5cdFx0aWYgKG5vZGVzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChlZGdlcykge1xyXG5cdFx0XHRfLmZvckVhY2goZWRnZXMsIChlZGdlKSA9PiB7XHJcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xyXG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXHJcblx0XHRcdFx0XHRmcm9tID0gdGhpcy5ub2Rlc1tlZGdlLmZyb21dO1xyXG5cdFx0XHRcdGlmIChlZGdlLnRvKVxyXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xyXG5cdFx0XHRcdHRoaXMuYWRkRWRnZShlZGdlLCBub2RlLCBmcm9tLCB0byk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGN1cnJlbnRSb290KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge31cclxuXHRkZXN0cm95KCkge31cclxufVxyXG5cclxuR3JhcGguREVGQVVMVFMgPSB7XHJcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxyXG5cdG11bHRpQ29ubmVjdDogZmFsc2UsXHJcblx0cmVhZE9ubHk6IGZhbHNlLFxyXG5cdHZpZXdPbmx5OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XHJcblxyXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnTicpO1xyXG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5pbkVkZ2VzID0gW107XHJcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XHJcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGlzQW5jZXN0b3Iobikge1xyXG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XHJcblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xyXG5cdFx0d2hpbGUgKG5vZGUpIHtcclxuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcclxuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xyXG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2VcclxuXHRhZGRJbkVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxyXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQgfHwgcG9zID4gZWRnZS5sZW5ndGggLSAxKVxyXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3V0RWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDaGlsZHJlbih2aWV3KSB7XHJcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xyXG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRfLmZvckVhY2godGhpcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xyXG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xyXG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xyXG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxyXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xyXG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xyXG5cdH1cclxufVxyXG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcblxyXG4vKlxyXG5cclxuLyoqXHJcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXHJcbiAqXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMucGFyZW50O1xyXG59O1xyXG5cclxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcclxuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcclxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xyXG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xyXG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcclxuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXHJcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcclxuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXHJcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XHJcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxyXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcclxuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcclxuXHRcdGlmICghdHlwZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XHJcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcclxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XHJcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogQHBhcmFtIG5hbWVcclxuXHQgKiBAcGFyYW0gdmFsdWVcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XHJcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcclxuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcclxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XHJcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XHJcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxyXG5cdCAqL1xyXG5cdGdldFZpZXcoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XHJcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xyXG5cdFx0XHRpZDogdGhpcy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcclxuXHRcdFx0c3R5bGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc3R5bGUnKSxcclxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZVxyXG5cdFx0fSwgc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2hhcGUoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XHJcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcclxuXHJcblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XHJcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XHJcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XHJcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcclxuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XHJcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcclxuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xyXG5cdFx0cmV0dXJuIHNoYXBlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHZpZXcpIHtcclxuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xyXG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xyXG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcclxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcclxuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xyXG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXHJcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xyXG5cdFx0aWYgKHNoYXBlKVxyXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTGFiZWwodmlldykge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcclxuXHRcdGlmIChib3gpXHJcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRMYWJlbEJveChrZXkpIHtcclxuXHRcdGxldCBib3ggPSBDYWNoZS5nZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBrZXkpO1xyXG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcclxuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcclxuXHRcdC8vIEp1c3QgZ2V0IHRoZSBjb25maWcgd2lsbCBoYXZlIGEgcG9zaXRpdmUgcGVyZm9ybWFuY2UgYm9vc3QgZm9yIElFMTEgYW5kIElFMTAuXHJcblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XHJcblx0XHRyZXR1cm4gYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbXB1dGVkQ2xhc3NOYW1lKCkge1xyXG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xyXG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcclxuXHRcdFx0bGV0IHByb3BzID0gdGhpcy5wcm9wcztcclxuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xyXG5cdFx0XHRwcm9wcyA9IHByb3BzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuXHRcdFx0d2hpbGUgKHByb3BzKSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XHJcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lID0gYnVmLnRvU3RyaW5nKCcgJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgbmFtZXNwYWNlKCkge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdCkgcmV0dXJuICcnO1xyXG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XHJcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xyXG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XHJcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XHJcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cclxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcclxuXHRkZWxldGUgdGhpcy5ib3VuZHM7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XHJcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xyXG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XHJcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xyXG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcclxuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XHJcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcclxuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xyXG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XHJcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcclxuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcclxuXHJcblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3NcclxuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XHJcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XHJcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XHJcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzKTtcclxuXHR9XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XHJcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcclxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XHJcblxyXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxyXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XHJcblxyXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxyXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXHJcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXHJcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xyXG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xyXG5cdGlmIChtb2RpZmllcnMpXHJcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9DZWxsLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cclxuICovXHJcblxyXG5sZXQgY2FjaGVzID0ge307XHJcblxyXG5sZXQgQ2FjaGUgPSB7XHJcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XHJcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XHJcblx0fSxcclxuXHJcblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcclxuXHRcdGlmICghbmFtZXNwYWNlKVxyXG5cdFx0XHRjYWNoZXMgPSB7fTtcclxuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxyXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xyXG5cdH0sXHJcblxyXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcclxuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXHJcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XHJcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuXHJcbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XHJcblxyXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcclxuXHRmb250U2l6ZTogMTEsXHJcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG5cdGZvbnRTdHlsZTogMCxcclxuXHRmb250Q29sb3I6ICdibGFjaycsXHJcblx0cGFkZGluZzogMCxcclxuXHRsaW5lUGFkZGluZzogMCxcclxuXHRhbGlnbjogXCJsZWZ0XCIsXHJcblx0d2lkdGg6IDAsXHJcblx0aGVpZ2h0OiAwLFxyXG5cdHJvdGF0aW9uOiBudWxsLFxyXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgbGFiZWwgb2JqZWN0IGhhbmRsZXMgbGFiZWwgc2l6aW5nL3Bvc2l0aW9uaW5nXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XHJcblx0bGV0IHN0cmluZ01lYXN1cmVFbCA9IG51bGwsIG1lYXN1cmVEaXYsIGJhc2VsaW5lRGl2O1xyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIHN0cmluZy5cclxuXHQgKi9cclxuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XHJcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xyXG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XHJcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcclxuXHJcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxyXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcclxuXHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge2lkOlwiX0NvbXB1dGVTdHlsZXNJZnJhbWVcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIHZpc2liaWxpdHk6XCJoaWRkZW5cIiwgd2lkdGg6XCJhdXRvXCJ9KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xyXG5cdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHRcdGRvYy5vcGVuKCk7XHJcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcclxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXHJcblx0XHRcdFx0PGRpdiBpZD1cIm1lYXN1cmVEaXZcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87cGFkZGluZzowO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvZGl2PlxcXHJcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcclxuXHRcdFx0ZG9jLmNsb3NlKCk7XHJcblx0XHRcdG1lYXN1cmVEaXYgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJtZWFzdXJlRGl2XCIpO1xyXG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xyXG5cdFx0fVxyXG5cdFx0YmFzZWxpbmVEaXYuc3R5bGUuZm9udFNpemUgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XHJcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcclxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XHJcblx0XHRtZWFzdXJlRGl2LmlubmVySFRNTCA9IHN0cjtcclxuXHJcblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xyXG5cdFx0bGV0IGJhc2VsaW5lSGVpZ2h0ID0gc3RydXQub2Zmc2V0VG9wICsgc3RydXQub2Zmc2V0SGVpZ2h0IC0gYmFzZWxpbmVEaXYub2Zmc2V0SGVpZ2h0IC0gYmFzZWxpbmVEaXYub2Zmc2V0VG9wO1xyXG5cclxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XHJcblx0fSwgZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHdyYXBwZWQgdGV4dC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cclxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cclxuXHQgKiBAcGFyYW0ge2ZvbnRTaXplfVxyXG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cclxuXHQgKiBAcGFyYW0ge2JvbGR9XHJcblx0ICovXHJcblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcclxuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcclxuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XHJcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcclxuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xyXG5cclxuXHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XHJcblx0XHRhcnIubGluZUhlaWdodCA9IHNwYWNlU2l6ZS5oZWlnaHQ7XHJcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XHJcblxyXG5cdFx0aWYgKCFtYXhXaWR0aCB8fCAhc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSB7XHJcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XHJcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcclxuXHRcdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0O1xyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB3aWR0aCA9IDA7XHJcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXHJcblx0XHR2YXIgbGluZXMgPSBzdHJpbmcuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblxyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXHJcblx0XHRcdHZhciB3b3JkcyA9IGxpbmVzW2pdLnNwbGl0KC9cXHMvKTtcclxuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XHJcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XHJcblxyXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xyXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcclxuXHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IDA7XHJcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXHJcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxyXG5cdFx0XHRcdFx0bmV3TGluZSA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XHJcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSBuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGg7XHJcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xyXG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQobGluZSk7XHJcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xyXG5cdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0ICogYXJyLmxlbmd0aDtcclxuXHRcdHJldHVybiBhcnI7XHJcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cclxuXHQgKiBAcGFyYW0gbGFiZWwgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxyXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXHJcblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxyXG5cdCAqIEBwYXJhbSBsYWJlbENvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBvbiBob3cgdG8gZGlzcGxheSBsYWJlbC4gSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuXHQgKiB7XHJcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxyXG5cdCAqICAgICAgYWxpZ246IGNhbiBiZSBlaXRoZXIgXCJsZWZ0XCIsIFwiY2VudGVyXCIgb3IgXCJyaWdodFwiLFxyXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxyXG5cdCAqICAgICAgaGVpZ2h0LFxyXG5cdCAqICAgICAgZ2VvbWV0cnlcclxuXHQgKiB9XHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XHJcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xyXG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywgbGluayk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnID0ge30sIGNvbnRleHQpIHtcclxuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xyXG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XHJcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XHJcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xyXG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XHJcblx0XHRsZXQgcGFkZGluZyA9IGxhYmVsQ29uZmlnLnBhZGRpbmc7XHJcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcclxuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xyXG5cclxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XHJcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xyXG5cdFx0XHR3ID0gdyA8PSA1ID8gY29udGV4dC53aWR0aCAqIHcgOiB3O1xyXG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcclxuXHRcdH1cclxuXHRcdHcgLT0gMiAqIHBhZGRpbmc7XHJcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xyXG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xyXG5cdFx0aCA9IE1hdGgubWF4KDAsIGgpO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xyXG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgdywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpO1xyXG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcclxuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcclxuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4ID0gMCwgc2V0QW5jaG9yWCA9ICFfLmhhcyhnZW9tZXRyeSwgXCJhbmNob3JYXCIpO1xyXG5cdFx0c3dpdGNoIChhbGlnbikge1xyXG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XHJcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxyXG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XHJcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IC0wLjU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XHJcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XHJcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgcG9zO1xyXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcclxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XHJcblxyXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxyXG5cdFx0bGV0IHBpdm90ID0gYWxpZ24gPT0gJ2NlbnRlcicgPyBbMCwgMF0gOiAoYWxpZ24gPT0gJ2xlZnQnID8gWy13cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0gOiBbd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdKTtcclxuXHJcblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXHJcblx0XHRnZW9tZXRyeS53aWR0aCA9IE1hdGgubWF4KHcgKyAyICogcGFkZGluZywgZ2VvbWV0cnkud2lkdGgpO1xyXG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cclxuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXHJcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xyXG5cclxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXHJcblx0XHRcdGJvbGQsIHVuZGVybGluZTogZm9udFN0eWxlICYgRk9OVF9VTkRFUkxJTkUsIGl0YWxpYzogZm9udFN0eWxlICYgRk9OVF9JVEFMSUMsIHNoYWRvdzogZm9udFN0eWxlICYgRk9OVF9TSEFET1csXHJcblx0XHRcdGR4LCBkeTogLWdlb21ldHJ5LmhlaWdodC8yICsgcGFkZGluZyArIHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0IC0gd3JhcHBlZExhYmVsLmJhc2VsaW5lLCBhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0ICsgbGluZVBhZGRpbmcsXHJcblx0XHRcdHBpdm90LCBib3VuZHMsIG1heEJvdW5kc1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcclxuXHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XHJcblx0fVxyXG5cclxuXHRsZXQgZWRpdG9yID0ge1xyXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKGtleSwgY29udGFpbmVyLCBib3gsIHJlZkVsLCB0ZXh0RWwsIHNjYWxlID0gMS4wLCBzaW5nbGVMaW5lID0gdHJ1ZSkge1xyXG5cdFx0XHRpZiAodGhpcy5pbnB1dCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmtleSAhPSBrZXkpIHtcclxuXHRcdFx0XHRcdC8vIG5lZWQgdG8gY2xvc2UgdGhlIGV4aXN0aW5nIGVkaXRvciBmaXJzdFxyXG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHRhZyA9IHNpbmdsZUxpbmUgPyAnaW5wdXQnIDogJ3RleHRhcmVhJztcclxuXHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQodGFnLCB7aWQ6XCJpbmxpbmVFZGl0b3JcIiwgdW5zZWxlY3RhYmxlOlwib2ZmXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMHB4XCIsIG1hcmdpbjpcIjBweFwiLCBib3JkZXI6XCJ0cmFuc3BhcmVudFwifSk7XHJcblx0XHRcdGlmIChzaW5nbGVMaW5lKSB7XHJcblx0XHRcdFx0RXZlbnRzLm9uKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRFdmVudHMub2ZmKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuXHJcblx0XHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0XHR0aGlzLmJveCA9IGJveDtcclxuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xyXG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcclxuXHJcblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XHJcblx0XHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGJveC5tYXhCb3VuZHMueCwgYm94Lm1heEJvdW5kcy55LCBib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUsIGJveC5tYXhCb3VuZHMuaGVpZ2h0ICogc2NhbGUpO1xyXG5cdFx0XHRsZXQgcG9zID0gRG9tVXRpbHMuZ2V0Q2VudGVyUG9zaXRpb24ocmVmRWwsIGNvbnRhaW5lcik7XHJcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBtYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgbWF4Qm91bmRzLnRvcF07XHJcblxyXG5cdFx0XHRpZiAodGV4dEVsKVxyXG5cdFx0XHRcdHRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxyXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiBtYXhCb3VuZHMud2lkdGggKyAncHgnLFxyXG5cdFx0XHRcdGhlaWdodDogbWF4Qm91bmRzLmhlaWdodCArICdweCcsXHJcblx0XHRcdFx0XCJmb250LWZhbWlseVwiOiBsYWJlbENvbmZpZy5mb250RmFtaWx5LFxyXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXHJcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xyXG5cdFx0XHRcdC8qXCJjb2xvclwiOiBsYWJlbENvbmZpZy5mb250Q29sb3IqL1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBib3guX2xhYmVsO1xyXG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XHJcblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RhcnQnLCBbdGhpcy5rZXldKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c3RvcDogZnVuY3Rpb24oY2FuY2VsKSB7XHJcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xyXG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXHJcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XHJcblxyXG5cdFx0XHRpZiAoIWNhbmNlbClcclxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xyXG5cclxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XHJcblxyXG5cdFx0XHQvLyByZW1vdmUgdGhlIGlucHV0XHJcblx0XHRcdHRoaXMuaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuaW5wdXQ7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xyXG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcclxuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRGT05UX0JPTEQsXHJcblx0XHRGT05UX0lUQUxJQyxcclxuXHRcdEZPTlRfVU5ERVJMSU5FLFxyXG5cdFx0Rk9OVF9TSEFET1csXHJcblx0XHRnZXRTdHJpbmdTaXplLFxyXG5cdFx0d3JhcCxcclxuXHRcdGdldExhYmVsQm94LFxyXG5cdFx0Z2V0TGFiZWxCb3hGb3JMaW5rLFxyXG5cdFx0cmVuZGVyLFxyXG5cdFx0ZWRpdG9yXHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xyXG5cclxuY2xhc3MgRWRnZSBleHRlbmRzIENlbGwge1xyXG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcclxuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XHJcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHRcdHRoaXMuc2V0U291cmNlKHNvdXJjZSwgY29uZmlnLnNvdXJjZVBvcyk7XHJcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xyXG5cdH1cclxuXHJcblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xyXG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcclxuXHR9XHJcblxyXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcclxuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAndGFyZ2V0Jyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcclxuXHQgKi9cclxuXHQgc2V0VGVybWluYWwobm9kZSwgcG9zLCBkaXIpIHtcclxuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xyXG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XHJcblx0XHRcdC8vIHNpbXBseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBlZGdlLlxyXG5cdFx0XHRpZiAobm9kZSlcclxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGVuZCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxyXG5cdFx0XHRcdGVuZC5yZW1vdmVFZGdlKHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobm9kZSkge1xyXG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBub2RlO1xyXG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExhYmVsQm94KGtleSkge1xyXG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKCdsYWJlbCcpO1xyXG5cdFx0aWYgKGxhYmVsKVxyXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXHJcblx0ICovXHJcblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xyXG5cdFx0bGV0IHB0cyA9IFtdO1xyXG5cdFx0aWYgKHRoaXMuc291cmNlKVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xyXG5cclxuXHRcdHJldHVybiBwdHM7XHJcblx0fVxyXG5cclxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcclxuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xyXG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xyXG5cclxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcclxuXHJcblx0XHRpZiAodGhpcy50YXJnZXQpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcclxuXHRcdHJldHVybiB0ZXJtaW5hbHM7XHJcblx0fVxyXG5cclxuXHRnZXRTaGFwZShrZXkpIHtcclxuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcclxuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xyXG5cclxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcclxuXHRcdHJldHVybiBzaGFwZTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHN1cGVyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xyXG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XHJcblx0fVxyXG59XHJcbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcclxuXHJcbi8qXHJcblxyXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcclxuXHR9IGVsc2VcclxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcblxyXG5sZXQgcmVnaXN0cnkgPSB7fTtcclxuXHJcbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cclxuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xyXG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XHJcblx0XHR2YXIgbWFya2VyID0ge1xyXG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcclxuXHRcdFx0c2l6ZTogc2l6ZSxcclxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0ge1xyXG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXHJcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcclxuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXHJcblx0XHRcdHNpemU6IHNpemUsXHJcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXHJcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxyXG5cdFx0fTtcclxuXHRcdG1hcmtlci5zaGFwZSA9IHtcclxuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxyXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgciA9IHNpemUgLyAyO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFswLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+JztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcclxuXHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxyXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3JcclxuXHRcdH07XHJcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXHJcblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XHJcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcclxuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XHJcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcclxuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xyXG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xyXG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxyXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5cclxuY2xhc3MgTGF5b3V0IHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcclxuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcclxuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxyXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcclxuXHRcdH1cclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XHJcblx0cmVzZXQoKSB7fVxyXG5cdGRlc3Ryb3koKSB7fVxyXG59XHJcbkxheW91dC5WRVJUSUNBTCA9IDA7XHJcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcclxuXHJcbkxheW91dC5ERUZBVUxUUyA9IHtcclxuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XHJcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xyXG5cdFx0dmFyIGl0ZW1zO1xyXG5cdFx0aWYgKCFyb290KVxyXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2RlcztcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcclxuXHRcdFx0aXRlbXMgPSByb290O1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xyXG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRub2RlID0gaXRlbXNbaV07XHJcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXHJcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xyXG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XHJcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xyXG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcclxuXHRcdFx0cDErKztcclxuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcclxuXHR9XHJcbn1cclxuXHJcbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XHJcblx0aGdhcDogMTAsXHJcblx0dmdhcDogMTBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XHJcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XHJcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XHJcblxyXG5jbGFzcyBSZW5kZXJlciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30sIGdyYXBoID0gbnVsbCkge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6IHRoaXMuaWQsIHRhYmluZGV4OiAwLCBuczogJ2dyYXBoJ30sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcclxuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XHJcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcclxuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgbGF5b3V0Q2xhc3MoY29uZmlnLmxheW91dC5jb25maWcpO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5fdHJhbnNsYXRlID0gWzAsIDBdO1xyXG5cdFx0dGhpcy5fc2NhbGUgPSAxLjA7XHJcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XHJcblx0XHR0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbnVsbDtcclxuXHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5ub2RlQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5lZGdlQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5jb25uZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xyXG5cclxuXHRcdEV2ZW50cy5vbihMYWJlbC5lZGl0b3IsICdlZGl0b3IudXBkYXRlLionLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGdyYXBoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xyXG5cdH1cclxuXHJcblx0c2V0IGdyYXBoKGdyYXBoKSB7XHJcblx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xyXG5cdFx0bGV0IHJvb3QgPSBncmFwaC5jdXJyZW50Um9vdDtcclxuXHRcdGlmIChyb290KSB7XHJcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFtyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JykgfHwgMCwgcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScpIHx8IDBdO1xyXG5cdFx0XHR0aGlzLl9zY2FsZSA9IHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xyXG5cdFx0aWYgKF8uaXNVbmRlZmluZWQoc2NhbGVkKSB8fCBfLmlzTnVsbChzY2FsZWQpKSBzY2FsZWQgPSBmYWxzZTtcclxuXHRcdGlmICghdmlld3BvcnQpIHtcclxuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcclxuXHRcdFx0aWYgKHNjYWxlZClcclxuXHRcdFx0XHRyZXR1cm4gVXRpbHMuc2NhbGUodGhpcy50cmFuc2xhdGUsIHRoaXMuc2NhbGUsIHZwKTtcclxuXHRcdFx0cmV0dXJuIHZwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFzY2FsZWQpIHZpZXdwb3J0ID0gVXRpbHMuc2NhbGUodGhpcy50cmFuc2xhdGUsIHRoaXMuc2NhbGUsIHZpZXdwb3J0KTtcclxuXHRcdHZhciB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XHJcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XHJcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcclxuXHR9XHJcblxyXG5cdGdldCB0cmFuc2xhdGUoKSB7IHJldHVybiB0aGlzLl90cmFuc2xhdGU7IH1cclxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cclxuXHRnZXQgc2NhbGUoKSB7IHJldHVybiB0aGlzLl9zY2FsZTsgfVxyXG5cdHNldCBzY2FsZShrKSB7XHJcblx0XHRzd2l0Y2ggKGspIHtcclxuXHRcdFx0Y2FzZSBcImluXCI6XHJcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwib3V0XCI6XHJcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUgLyB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYWN0dWFsXCI6XHJcblx0XHRcdFx0ayA9IDEuMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImZpdFwiOlxyXG5cdFx0XHRcdHZhciBncmlkU2l6ZSA9IHRoaXMucHJvcChcImdyaWRTaXplXCIpICogMjtcclxuXHJcblx0XHRcdFx0dmFyIGdCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xyXG5cdFx0XHRcdHZhciB2Qm91bmRzID0gdGhpcy52aWV3cG9ydCgpO1xyXG5cclxuXHRcdFx0XHR2Qm91bmRzLndpZHRoIC09IGdyaWRTaXplO1xyXG5cdFx0XHRcdHZCb3VuZHMuaGVpZ2h0IC09IGdyaWRTaXplO1xyXG5cclxuXHRcdFx0XHQvKiBEbyBub3Qgem9vbSBtb3JlIHRoYW4gYWN0dWFsIGlmIGdyYXBoIGFscmVhZHkgZml0cyBpbnRvIHRoZSBib3VuZHMgKi9cclxuXHRcdFx0XHRrID0gTWF0aC5taW4oKHZCb3VuZHMud2lkdGggLyBnQm91bmRzLndpZHRoKSwgKHZCb3VuZHMuaGVpZ2h0IC9nQm91bmRzLmhlaWdodCksIDEuMCk7XHJcblxyXG5cdFx0XHRcdC8vVE9ETzogQWRkIGNlbnRlcmluZyBjb2RlIGhlcmUgb3IgdHJpZ2dlciBhbiBldmVudCBmb3IgdGhhdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlmIChfLmlzU3RyaW5nKGspKSBrID0gcGFyc2VGbG9hdChrKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMudHJhbnNmb3JtKG51bGwsIG51bGwsIGspO1xyXG5cdH1cclxuXHJcblx0dHJhbnNmb3JtKHggPSBudWxsLCB5ID0gbnVsbCwgc2NhbGUgPSBudWxsKSB7XHJcblx0XHRsZXQgZ3JhcGggPSB0aGlzLmdyYXBoO1xyXG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcclxuXHRcdGlmICghXy5pc051bGwoeCkpIHtcclxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzBdID0geDtcclxuXHRcdFx0aWYgKHJvb3QpXHJcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcsIHgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xyXG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMV0gPSB5O1xyXG5cdFx0XHRpZiAocm9vdClcclxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XHJcblx0XHR9XHJcblx0XHRpZiAoIV8uaXNOdWxsKHNjYWxlKSkge1xyXG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xyXG5cdFx0XHRpZiAocm9vdClcclxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScsIHNjYWxlKTtcclxuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXHJcblx0XHRcdGxldCBzID0gdGhpcy5kaXNwYXRjaGVyLnNjYWxlO1xyXG5cdFx0XHRpZiAocyAhPSBzY2FsZSlcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKHRoaXMubGF5b3V0KVxyXG5cdFx0XHR0aGlzLmxheW91dC5sYXlvdXQodGhpcy5fZ3JhcGguY3VycmVudFJvb3QsIHRoaXMudmlld3BvcnQoKSk7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsaXplQmVoYXZpb3JzKCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxhYmVsKGJveCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxpbmsoc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZUJlaGF2aW9ycygpIHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXHJcblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKHRoaXMuYm94LCBbdGhpcy5wcm9wKCdtaW5ab29tJyksIHRoaXMucHJvcCgnbWF4Wm9vbScpXSk7XHJcblx0XHRcdGxldCBqc0NsYXNzO1xyXG5cdFx0XHRpZiAodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpIHtcclxuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpO1xyXG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnByb3AoJ3NlbGVjdGlvbkJlaGF2aW9yJykpIHtcclxuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdzZWxlY3Rpb25CZWhhdmlvcicpKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbkJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Lyp0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgbm9kZSA9IHRoaXMuX2dyYXBoLm5vZGVzW3RhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyldO1xyXG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoTGFiZWwuX2RlbGF5RWRpdCkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xyXG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCwgdGhpcy5zY2FsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIDI1MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsvXm1vdXNlZG93bi8sIC9eem9vbS9dLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XHJcblx0XHRcdFx0aWYgKCFEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHtcclxuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKTsqL1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaXNwYXRjaGVyLnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoKCkge31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cclxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXHJcblx0ICogdXNlZCB0byByZW5kZXIgdGhlbS5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRnZXRUZW1wbGF0ZShrZXksIGNvbmZpZywgcHJlcHJvY2Vzc29yKSB7XHJcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XHJcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcclxuXHRcdFx0dCA9IHQoY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxyXG5cdFx0aWYgKHByZXByb2Nlc3Nvcikge1xyXG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xyXG5cdFx0XHR2YXIgb2JqID0ge307XHJcblx0XHRcdGZvciAobGV0IHBhcnQgaW4gcGFydHMpIHtcclxuXHRcdFx0XHRwYXJ0ID0gcGFydHNbcGFydF07XHJcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XHJcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge31cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGRlbGV0ZSB0aGlzLl9ncmFwaDtcclxuXHRcdGRlbGV0ZSB0aGlzLmxheW91dDtcclxuXHRcdGlmICh0aGlzLmRpc3BhdGNoZXIpIHtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnN0b3AoKTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZGlzcGF0Y2hlcjtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm94LmlubmVySFRNTCA9ICcnO1xyXG5cdH1cclxufVxyXG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcclxuXHRkZWZhdWx0Q2xpY2tNb2RlOiBcInBhblwiLFxyXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcclxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXHJcblx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcclxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxyXG5cdGdyaWRTaXplOiAzMCxcclxuXHRtYXhab29tOiA0LjAsXHJcblx0bWluWm9vbTogMC4yLFxyXG5cdHpvb21GYWN0b3I6IDEuMixcclxuXHRtYXNrT3BhY2l0eTogMC41LFxyXG5cdGdyYXBoQmVoYXZpb3I6IEdyYXBoQmVoYXZpb3IsXHJcblx0c2VsZWN0aW9uQmVoYXZpb3I6IFNlbGVjdGlvbkJlaGF2aW9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi8yOC8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XHJcblxyXG4vKipcclxuICogR3JhcGggaGFuZGxlciBoYW5kbGVzIFBhbm5pbmcgYW5kIFpvb20gYW5kIHJ1YmJlciBiYW5kIHNlbGVjdGlvblxyXG4gKi9cclxuY2xhc3MgR3JhcGhCZWhhdmlvciBleHRlbmRzIEJlaGF2aW9yIHtcclxuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG5cdFx0c3VwZXIocmVuZGVyZXIpO1xyXG5cdFx0bGV0IGRpc3BhdGNoZXIgPSByZW5kZXJlci5kaXNwYXRjaGVyO1xyXG5cdFx0bGV0IGYgPSBmdW5jdGlvbih0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKHR5cGUsIG5zLCBncmFwaCwgZXZlbnQpO1xyXG5cdFx0fTtcclxuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL15kcmFnLipcXC5ncmFwaCQvLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xyXG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcigvXnpvb20vLCB0aGlzLmhhbmRsZVpvb20sIHRoaXMpO1xyXG5cdFx0Ly9kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLmdyYXBoJywgJ21vdXNlZW50ZXIuZ3JhcGgnLCAnbW91c2VsZWF2ZS5ncmFwaCddLCBmKTtcclxuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShudWxsLCBudWxsLCBldmVudC5zY2FsZSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVEcmFnKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcclxuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xyXG5cdFx0XHRpZiAoIXBhbikgcmV0dXJuO1xyXG5cdFx0XHRsZXQgdCA9IHRoaXMucmVuZGVyZXIudHJhbnNsYXRlO1xyXG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0ocG9zWzBdICsgdGhpcy5vZmZzZXRbMF0sIHBvc1sxXSArIHRoaXMub2Zmc2V0WzFdKTtcclxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xyXG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMub2Zmc2V0O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGRlbGV0ZSB0aGlzLnJlbmRlcmVyO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi4vZ3JhcGgvQ2VsbFwiO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcclxuXHJcbmNsYXNzIFNlbGVjdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcihyZW5kZXJlcik7XHJcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZWRvd24uKicsIHRoaXMuc2VsZWN0Q2VsbCwgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLionLCB0aGlzLnVuc2VsZWN0Q2VsbCwgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlTXVsdGlTZWxlY3QsIHRoaXMpO1xyXG5cdFx0Ly9ncmFwaC5vbihHcmFwaC5FVkVOVF9UWVBFUy5TRUxFQ1RJT05fQ0hBTkdFLCB0aGlzLnVwZGF0ZVNlbGVjdGlvbnMsIHRoaXMpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZE5vZGVzID0gbnVsbDtcclxuXHRcdHRoaXMuc2VsZWN0ZWRMaW5rcyA9IG51bGw7XHJcblx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2VsZWN0aW9ucygpIHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTm9kZXMpXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTGlua3MpXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRMaW5rcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gbnVsbDtcclxuXHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IG51bGw7XHJcblxyXG5cdFx0aWYgKHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcyAmJiB0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMpO1xyXG5cdFx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLmdldEF0dGFjaGVkRWRnZXMoKSk7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMgJiYgdGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gdGhpcy5ncmFwaC5yZW5kZXJlci5nZXRTaGFwZXModGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzKTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzLmNsYXNzZWQoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZWxlY3RDZWxsKHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR2YXIgY2VsbCA9IGRhdGEgPT0gdGhpcy5ncmFwaCA/IG51bGwgOiBkYXRhO1xyXG5cdFx0aWYgKGNlbGwgJiYgIShjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHJldHVybjtcclxuXHRcdHZhciB0b2dnbGUgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xyXG5cdFx0aWYgKGNlbGwgJiYgKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ3JhcGguaXNTZWxlY3RlZChjZWxsKSlcclxuXHRcdFx0XHRkZWxldGUgY2VsbC5fZmlyc3RTZWxlY3Rpb247XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjZWxsLl9maXJzdFNlbGVjdGlvbiA9IHRydWU7XHJcblxyXG5cdFx0XHRkMy5zZWxlY3QoZXZlbnQuZGF0YVRhcmdldCkubW92ZVRvRnJvbnQoKTtcclxuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgdG9nZ2xlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVuc2VsZWN0Q2VsbCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xyXG5cdFx0dmFyIGNlbGwgPSBkYXRhID09IHRoaXMuZ3JhcGggPyBudWxsIDogZGF0YTtcclxuXHRcdGlmIChjZWxsICYmICEoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSByZXR1cm47XHJcblx0XHR2YXIgY3RybEtleSA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXk7XHJcblx0XHRpZiAoIWNlbGwpIHtcclxuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgY3RybEtleSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNdWx0aVNlbGVjdCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xyXG5cdFx0cG9zID0gdXRpbC5zY2FsZSh0aGlzLmdyYXBoLCBwb3MpO1xyXG5cclxuXHRcdGlmICh0eXBlID09ICdkcmFnc3RhcnQnKSB7XHJcblx0XHRcdHZhciBzZWxlY3QgPSAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImRlZmF1bHRDbGlja01vZGVcIikgPT0gXCJzZWxlY3RcIikgXiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XHJcblx0XHRcdGlmICghc2VsZWN0KSByZXR1cm47XHJcblx0XHRcdHRoaXMuc3RhcnRQdCA9IG5ldyBQb2ludChwb3NbMF0sIHBvc1sxXSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5zdGFydFB0KSByZXR1cm47XHJcblx0XHR2YXIgcmVjdCA9IFJlY3RhbmdsZS5nZXRCb3VuZGluZ1JlY3RhbmdsZShbbmV3IFBvaW50KHBvc1swXSwgcG9zWzFdKSwgdGhpcy5zdGFydFB0XSk7XHJcblx0XHR2YXIgcmVuZGVyZXIgPSB0aGlzLmdyYXBoLnJlbmRlcmVyO1xyXG5cdFx0aWYgKCF0aGlzLnJ1YmJlcmJhbmQpIHtcclxuXHRcdFx0dGhpcy5ydWJiZXJiYW5kID0gZDMuc2VsZWN0KHJlbmRlcmVyLmFwcGVuZE5vZGUocmVuZGVyZXIuZ2V0Q2VsbExheWVyKCksIHtcclxuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgnPGc+PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjMgM1wiLz48L2c+JylcclxuXHRcdFx0fSwgZmFsc2UpKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xyXG5cdFx0XHR2YXIgY2VsbHMgPSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkuY2hpbGRyZW47XHJcblx0XHRcdC8vIFRPRE86IERlZmluZSBpZiB3ZSB3YW50IHRvIHNlbGVjdCB2ZXJ0ZXhlcyAvIGVkZ2VzIG9yIGJvdGhcclxuXHRcdFx0Y2VsbHMgPSBfLmZpbHRlcihjZWxscywgZnVuY3Rpb24gKGNlbGwpIHtcclxuXHRcdFx0XHR2YXIgYm94ID0gY2VsbC5nZXRCb3VuZHMoKTtcclxuXHRcdFx0XHRpZiAocmVjdC5jb250YWlucyhib3gpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gVE9ETzogU2V0IHNlbGVjdGlvblxyXG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxscywgZXZlbnQuY3RybEtleSk7XHJcblxyXG5cdFx0XHR0aGlzLnJ1YmJlcmJhbmQucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXJ0UHQ7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnJ1YmJlcmJhbmQ7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMucnViYmVyYmFuZC5zZWxlY3QoXCJyZWN0XCIpLmF0dHIoe3g6IHJlY3QueCwgeTogcmVjdC55LCB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodH0pO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHN1cGVyLmRlc3Ryb3koKTtcclxuXHRcdGRlbGV0ZSB0aGlzLnNlbGVjdGVkTm9kZXM7XHJcblx0XHRkZWxldGUgdGhpcy5zZWxlY3RlZExpbmtzO1xyXG5cdFx0ZGVsZXRlIHRoaXMuYXR0YWNoZWRMaW5rcztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkJlaGF2aW9yO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBCYXNlNjQgZnJvbSBcIi4uL3V0aWwvYmFzZTY0XCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuaWYgKHR5cGVvZiAoU1ZHRWxlbWVudCkgIT0gXCJ1bmRlZmluZWRcIikge1xuXHR2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBcInN2Z1wiKTtcblx0c3ZnLmlubmVySFRNTCA9ICc8Y2lyY2xlLz4nO1xuXHRpZiAoc3ZnLmZpcnN0Q2hpbGQgIT09IFwiW29iamVjdCBTVkdDaXJjbGVFbGVtZW50XVwiKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU1ZHRWxlbWVudC5wcm90b3R5cGUsIHtcblx0XHRcdFwib3V0ZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgJG5vZGUsICR0ZW1wO1xuXHRcdFx0XHRcdCR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0JG5vZGUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdFx0XHQkdGVtcC5hcHBlbmRDaGlsZCgkbm9kZSk7XG5cdFx0XHRcdFx0cmV0dXJuICR0ZW1wLmlubmVySFRNTDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiaW5uZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgcyA9IHRoaXMub3V0ZXJIVE1MO1xuXHRcdFx0XHRcdHZhciByb3BlbiA9IG5ldyBSZWdFeHAoXCI8XCIgKyB0aGlzLm5vZGVOYW1lICsgJ1xcXFxiKD86KFtcIlxcJ10pW15cIl0qPyhcXFxcMSl8W14+XSkqPicsIFwiaVwiKTtcblx0XHRcdFx0XHR2YXIgcmNsb3NlID0gbmV3IFJlZ0V4cChcIjxcXC9cIiArIHRoaXMubm9kZU5hbWUgKyBcIj4kXCIsIFwiaVwiKTtcblx0XHRcdFx0XHRyZXR1cm4gIHMucmVwbGFjZShyb3BlbiwgXCJcIikucmVwbGFjZShyY2xvc2UsIFwiXCIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0XHRcdGxldCBjaGlsZDtcblx0XHRcdFx0XHR3aGlsZSAoY2hpbGQgPSB0aGlzLmxhc3RDaGlsZClcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQobWFya3VwKS5hcHBlbmQoJzwvc3ZnJyk7XG5cdFx0XHRcdFx0bGV0ICR0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdHdoaWxlICgkdGVtcC5maXJzdENoaWxkKVxuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCgkdGVtcC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0Ly8gRGVmaW5lIHRoZSB0b0RhdGFVUkwgZm9yIFNWR1xuXHRTVkdFbGVtZW50LnByb3RvdHlwZS50b0RhdGFVUkwgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zID0ge30pIHtcblx0XHRsZXQgX3N2ZyA9IHRoaXM7XG5cblx0XHRsZXQgZGVidWcgPSBmdW5jdGlvbihtc2cpIHt9O1xuXG5cdFx0aWYgKG9wdGlvbnNbJ2RlYnVnJ10gPT0gdHJ1ZSAmJiB0eXBlb2YoY29uc29sZSkgIT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykgeyBjb25zb2xlLmxvZyhcIlNWRy50b0RhdGFVUkw6XCIsIG1zZyk7IH07XG5cblx0XHRmdW5jdGlvbiBleHBvcnRTVkcoKSB7XG5cdFx0XHR2YXIgc3ZnX3htbCA9IF9zdmcub3V0ZXJIVE1MO1xuXHRcdFx0dmFyIHN2Z19kYXRhdXJsID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcblx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgc3ZnX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0Ly8gTk9URSBkb3VibGUgZGF0YSBjYXJyaWVyXG5cdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayhzdmdfZGF0YXVybCk7XG5cdFx0XHRyZXR1cm4gc3ZnX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYmFzZTY0ZGF0YVVSTGVuY29kZShzKSB7XG5cdFx0XHR2YXIgYjY0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xuXG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LmJ0b2Fcblx0XHRcdGlmICh3aW5kb3cuYnRvYSkge1xuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIHdpbmRvdy5idG9hIGZvciBiYXNlNjQgZW5jb2RpbmdcIik7XG5cdFx0XHRcdGI2NCArPSBidG9hKHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVidWcoXCJ1c2luZyBjdXN0b20gYmFzZTY0IGVuY29kZXJcIik7XG5cdFx0XHRcdGI2NCArPSBCYXNlNjQuZW5jb2RlKHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYjY0O1xuXHRcdH1cblxuXHRcdC8vIE5hdGl2ZSBleHBvcnQgZG9lc24ndCB3b3JrIHZlcnkgd2VsbC4gc2hvdWxkIHVzZSBjYW52ZyBpbnN0ZWFkLlxuXHRcdGZ1bmN0aW9uIGV4cG9ydEltYWdlKHR5cGUpIHtcblx0XHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0XHQvLyBUT0RPOiBpZiAob3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSwgZG8gc29tZSB0cmFuc2xhdGlvbiBtYWdpYz9cblxuXHRcdFx0dmFyIHN2Z19pbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdHZhciBzdmdfeG1sID0gX3N2Zy5vdXRlckhUTUw7XG5cdFx0XHRzdmdfaW1nLnNyYyA9IGJhc2U2NGRhdGFVUkxlbmNvZGUoc3ZnX3htbCk7XG5cblx0XHRcdHN2Z19pbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFwiZXhwb3J0ZWQgaW1hZ2Ugc2l6ZTogXCIgKyBbc3ZnX2ltZy53aWR0aCwgc3ZnX2ltZy5oZWlnaHRdKTtcblx0XHRcdFx0Y2FudmFzLndpZHRoID0gc3ZnX2ltZy53aWR0aDtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9IHN2Z19pbWcuaGVpZ2h0O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHN2Z19pbWcsIDAsIDApO1xuXG5cdFx0XHRcdC8vIFNFQ1VSSVRZX0VSUiBXSUxMIEhBUFBFTiBOT1dcblx0XHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuXHRcdFx0XHRkZWJ1Zyh0eXBlICsgXCIgbGVuZ3RoOiBcIiArIGltYWdlX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xuXHRcdFx0XHRlbHNlIGRlYnVnKFwiV0FSTklORzogbm8gY2FsbGJhY2sgc2V0LCBzbyBub3RoaW5nIGhhcHBlbnMuXCIpO1xuXHRcdFx0fTtcblxuXHRcdFx0c3ZnX2ltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFxuXHRcdFx0XHRcdFwiQ2FuJ3QgZXhwb3J0ISBNYXliZSB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFwiICtcblx0XHRcdFx0XHRcIlNWRyBpbiBpbWcgZWxlbWVudCBvciBTVkcgaW5wdXQgZm9yIENhbnZhcyBkcmF3SW1hZ2U/XFxuXCIgK1xuXHRcdFx0XHRcdFwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TVkcjTmF0aXZlX3N1cHBvcnRcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gTk9URTogd2lsbCBub3QgcmV0dXJuIGFueXRoaW5nXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKSB7XG5cdFx0XHRpZiAoIWNhbnZnKSByZXR1cm4gbnVsbDtcblx0XHRcdGxldCBjYW52YXMgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdjYW52YXMnLCBudWxsLCB7ZGlzcGxheTogXCJub25lXCJ9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xuXHRcdFx0XHR2YXIgeGNhbnZhcyA9IG5ldyBqc0NhbnZhcyAoJ2pzY2FudmFzdGVzdCcpO1xuXHRcdFx0XHR4Y2FudmFzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHQvL3hjYW52YXMuY2FudmFzID0gY2FudmFzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkge1xuXHRcdFx0XHRjYW52ZyhjYW52YXMsIF9zdmcub3V0ZXJIVE1MKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIHx8IDA7XG5cdFx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblx0XHRcdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHRcdFx0bGV0IGJib3ggPSBfc3ZnLmdldEJCb3goKTtcblx0XHRcdFx0ZGVidWcoXCJkZXRlY3RlZCBzdmcgZGltZW5zaW9ucyBcIiArIFtiYm94LngsIGJib3gueSwgYmJveC53aWR0aCwgYmJveC5oZWlnaHRdKTtcblx0XHRcdFx0bGV0IHRyYW5zZm9ybSA9IF9zdmcuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKTtcblx0XHRcdFx0aWYgKHRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdGRlYnVnKCdkZXRlY3RlZCBzdmcgdHJhbnNmb3JtICcgKyB0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zZm9ybSA9IFNWR1JlbmRlcmVyLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZSA9IHRyYW5zZm9ybS50cmFuc2xhdGU7XG5cdFx0XHRcdFx0c2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2ZyB3aWR0aD1cIicpLmFwcGVuZChiYm94LndpZHRoICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCIgaGVpZ2h0PVwiJykuYXBwZW5kKGJib3guaGVpZ2h0ICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpXG5cdFx0XHRcdFx0LmFwcGVuZCgtYmJveC54K3RyYW5zbGF0ZVswXStwYWRkaW5nKS5hcHBlbmQoJywnKS5hcHBlbmQoLWJib3gueSt0cmFuc2xhdGVbMV0rcGFkZGluZykuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHNjYWxlKS5hcHBlbmQoJylcIj4nKVxuXHRcdFx0XHRcdC5hcHBlbmQoX3N2Zy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwpLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xuXHRcdFx0XHRpZiAodHlwZSA9PSAnamF2YXNjcmlwdCcpIHtcblx0XHRcdFx0XHR4Y2FudmFzLmNvbXBpbGUoYnVmLnRvU3RyaW5nKCksIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHhjYW52YXMudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRjYW52ZyhjYW52YXMsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdH1cblx0XHRcdHZhciBpbWFnZV9kYXRhdXJsID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKCBpbWFnZV9kYXRhdXJsICk7XG5cdFx0XHRjYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYW52YXMpO1xuXHRcdFx0cmV0dXJuIGltYWdlX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0aWYgKCF0eXBlKSB0eXBlID0gXCJpbWFnZS9zdmcreG1sXCI7XG5cblx0XHRpZiAob3B0aW9ucy5rZWVwTm9uU2FmZSkgZGVidWcoXCJOT1RFOiBrZWVwTm9uU2FmZSBpcyBOT1Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQhXCIpO1xuXHRcdGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpIGRlYnVnKFwiTk9URToga2VlcE91dHNpZGVWaWV3cG9ydCBpcyBvbmx5IHN1cHBvcnRlZCB3aXRoIGNhbnZnIGV4cG9ydGVyLlwiKTtcblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBcImltYWdlL3N2Zyt4bWxcIjpcblx0XHRcdFx0cmV0dXJuIGV4cG9ydFNWRygpO1xuXHRcdFx0Y2FzZSBcImltYWdlL3BuZ1wiOlxuXHRcdFx0Y2FzZSBcImltYWdlL2pwZWdcIjpcblx0XHRcdGNhc2UgXCJqYXZhc2NyaXB0XCI6XG5cdFx0XHRcdGlmICghb3B0aW9ucy5yZW5kZXJlcikge1xuXHRcdFx0XHRcdGlmICh3aW5kb3cuY2FudmcpIG9wdGlvbnMucmVuZGVyZXIgPSBcImNhbnZnXCI7XG5cdFx0XHRcdFx0ZWxzZSBvcHRpb25zLnJlbmRlcmVyPVwibmF0aXZlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLnJlbmRlcmVyKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImNhbnZnXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGNhbnZnIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBpbWFnZSBleHBvcnRcIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKTtcblx0XHRcdFx0XHRjYXNlIFwibmF0aXZlXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIG5hdGl2ZSByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgZXhwb3J0LiBUSElTIE1JR0hUIEZBSUwuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cG9ydEltYWdlKHR5cGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVua25vd24gaW1hZ2UgcmVuZGVyZXIgZ2l2ZW4sIGRvaW5nIG5vdGluZyAoXCIgKyBvcHRpb25zLnJlbmRlcmVyICsgXCIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGVidWcoXCJTb3JyeSEgRXhwb3J0aW5nIGFzICdcIiArIHR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdGxldCByb290ID0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdDtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Jyk7XG5cdFx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdFx0YnVmLmFwcGVuZCgnPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpLmFwcGVuZCh0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQodFsxXSkuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHRoaXMuc2NhbGUpLmFwcGVuZCgnKVwiPicpO1xuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdHRoaXMuYm94LmlubmVySFRNTCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5zdmcgPSB0aGlzLmJveC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaC5tYXJrZXJzO1xuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xuXHRcdGJ1Zi5hcHBlbmQoJzwvZGVmcz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdGlmICghdGhpcy5zdmcpIHJldHVybjtcblx0XHRsZXQgZyA9IHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2cnKTtcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0WzBdICsgJywnICsgdFsxXSArICcpc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKScpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIHN0cjEsIHN0cjI7XG5cdFx0bWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGF0aERhdGEoc2hhcGUpIHtcblx0XHRsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cblx0XHRcdGxldCBuZXdQdHMgPSBbXTtcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkMSA9IHByZXYuZGlzdGFuY2UobmV4dCk7XG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcblx0XHRcdFx0Ly8gc3BsaXQgdGhlIHBvaW50IGludG8gdHdvLlxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdHByZXYgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cdFx0XHRwb2ludHMgPSBuZXdQdHM7XG5cdFx0fVxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgQyAnKTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0bGV0IGQgPSBTVkdSZW5kZXJlci5nZXRQYXRoRGF0YShzaGFwZSk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG5cdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXSwgc2NhbGUgPSAxLjA7XG5cdFx0Ly9cblx0XHRsZXQgcGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3RyYW5zbGF0ZVxcKFxccyooW14pXSspLyk7XG5cdFx0aWYgKHBhcnRzKSB7XG5cdFx0XHRsZXQgbSA9IHBhcnRzWzFdLnRyaW0oKS5tYXRjaCgvKFtcXGQuLV0rKVsgLF0oW1xcZC4tXSspLyk7XG5cdFx0XHRpZiAobSkge1xuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSBwYXJzZUZsb2F0KG1bMV0pIHx8IDA7XG5cdFx0XHRcdHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQobVsyXSkgfHwgMDtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSB0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KHBhcnRzWzFdKTtcblx0XHR9XG5cdFx0cGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3NjYWxlXFwoXFxzKihbXildKykvKTtcblx0XHRpZiAocGFydHMpXG5cdFx0XHRzY2FsZSA9IHBhcnNlRmxvYXQocGFydHNbMV0pIHx8IDEuMDtcblxuXHRcdHJldHVybiB7dHJhbnNsYXRlLCBzY2FsZX07XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRzaGFwZS5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihwdCl7XG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdH0pO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJzdHJva2U6ICR7bWFya2VyLmZpbGx9O2ZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmlubGluZVN0eWxlKSB7JT5cXFxuXHRcdFx0Zm9udC1zaXplPVwiPCU9Ym94LmNvbmZpZy5mb250U2l6ZSU+XCJcXFxuXHRcdFx0Zm9udC1mYW1pbHk9XCI8JT1ib3guY29uZmlnLmZvbnRGYW1pbHklPlwiXFxcblx0XHRcdGZvbnQtd2VpZ2h0PVwiPCUgaWYgKGJveC5ib2xkKSB7JT5ib2xkPCV9IGVsc2UgeyU+bm9ybWFsPCV9JT5cIlxcXG5cdFx0XHQ8JSBpZiAoYm94LnVuZGVybGluZSkgeyU+dGV4dC1kZWNvcmF0aW9uPVwidW5kZXJsaW5lXCI8JX0lPlxcXG5cdFx0XHQ8JSBpZiAoYm94Lml0YWxpYykgeyU+Zm9udC1zdHlsZT1cIml0YWxpY1wiPCV9JT5cXFxuXHRcdDwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIHN0eWxlPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0XHQ8JSBpZiAoYm94LmNvbmZpZy50aXRsZSkgeyU+XG5cdFx0XHQ8dGl0bGU+PCU9Ym94LmNvbmZpZy50aXRsZSU+PC90aXRsZT5cblx0XHQ8JX0lPlxuXHQ8L2c+XG48JX0lPlxuYC50cmltKCksIHt2YXJpYWJsZTogXCJkYXRhXCJ9KSAgIC8vVE9ETyBhZGQgbW9yZSBpbmxpbmUgdGV4dCBzdHlsZXMuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9