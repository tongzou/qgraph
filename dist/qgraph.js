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
				if (this.randomNoise) {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxMjNlOWEzYzk4ZTY0MTYzNDk0YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbImFkZFNoYXBlIiwiRXZlbnRzIiwiQmFzZTY0IiwiQ2FjaGUiLCJVdGlscyIsIkRvbVV0aWxzIiwiU3RyaW5nQnVmZmVyIiwiUG9pbnQiLCJMaW5lIiwiU2hhcGUiLCJSZWN0YW5nbGUiLCJFbGxpcHNlIiwiTGluayIsIkV2ZW50RGlzcGF0Y2hlciIsIkxhYmVsIiwiTWFya2VyIiwiR3JhcGgiLCJDZWxsIiwiTm9kZSIsIkVkZ2UiLCJMYXlvdXQiLCJGbG93TGF5b3V0IiwiUmVuZGVyZXIiLCJTVkdSZW5kZXJlciIsIkdyYXBoQmVoYXZpb3IiLCJTZWxlY3Rpb25CZWhhdmlvciIsIl9rZXlTdHIiLCJlbmNvZGUiLCJpbnB1dCIsIm91dHB1dCIsImNocjEiLCJjaHIyIiwiY2hyMyIsImVuYzEiLCJlbmMyIiwiZW5jMyIsImVuYzQiLCJpIiwiX3V0ZjhfZW5jb2RlIiwibGVuZ3RoIiwiY2hhckNvZGVBdCIsImlzTmFOIiwiY2hhckF0IiwiZGVjb2RlIiwicmVwbGFjZSIsImluZGV4T2YiLCJTdHJpbmciLCJmcm9tQ2hhckNvZGUiLCJfdXRmOF9kZWNvZGUiLCJzdHJpbmciLCJ1dGZ0ZXh0IiwibiIsImMiLCJjMSIsImMyIiwiYzMiLCJ3aW5kb3ciLCJnbG9iYWwiLCJhZGRFdmVudEhhbmRsZXIiLCJkb2N1bWVudCIsIm5hdmlnYXRvciIsIl9kZWJ1Z2dpbmciLCJfZGVidWdBbGwiLCJ0eXBlUmVnaXN0cnkiLCJzcGxpY2UiLCJBcnJheSIsInR5cGUiLCJuYW1lc3BhY2UiLCJuYW1lIiwiTWFwIiwiZ2V0Iiwic2V0IiwiY3JlYXRlVHlwZSIsInByb3BzIiwiZGVmYXVsdFR5cGUiLCJleHRlbmQiLCJleHRlbmRzIiwiY29uZmlnIiwiXyIsImFzc2lnbiIsInByb3RvdHlwZSIsInR5cGVOYW1lIiwibG9nIiwiYnVpbGRUeXBlcyIsInR5cGVzIiwicmVtb3ZlIiwiZGVmYXVsdHNEZWVwIiwiZm9yRWFjaCIsImNoaWxkIiwicGFyZW50IiwicHJvdG9Qcm9wcyIsInN0YXRpY1Byb3BzIiwiU3Vycm9nYXRlIiwiY29uc3RydWN0b3IiLCJzdXBlcmNsYXNzIiwiaW5pdENvbmZpZyIsIm9iaiIsImNBcnIiLCJzdXBlciIsImFwcGx5IiwiREVGQVVMVFMiLCJwcm9wIiwidmFsdWUiLCJnZXRDb25zdHJ1Y3RvciIsImpzQ2xhc3MiLCJkZWZhdWx0Q2xhc3MiLCJpc1N0cmluZyIsImV2YWwiLCJkZWJ1ZyIsIm1vZHVsZU5hbWUiLCJwdXNoIiwibWVzc2FnZSIsImNvbnNvbGUiLCJzdWJzdHJpbmciLCJpbmZvIiwiZ2V0UmVsYXRpdmVQb3NpdGlvbiIsImJvdW5kcyIsImdlb21ldHJ5IiwieCIsIk1hdGgiLCJhYnMiLCJ3aWR0aCIsInkiLCJoZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsInBvcyIsImFuY2hvclgiLCJvZmZzZXRYIiwiYW5jaG9yWSIsIm9mZnNldFkiLCJ1bnNjYWxlIiwidCIsInNjYWxlIiwibyIsImdldFByb3BlcnR5IiwiaGFzIiwiaXNGdW5jdGlvbiIsImFQdCIsInNxcnQiLCJwMiIsImRpc3QiLCJkaXN0YW5jZSIsImFuZ2xlIiwiY29zIiwiUEkiLCJzaW4iLCJjbG9uZSIsInJvdGF0ZSIsInJlY3QiLCJ2ZXJ0aWNhbCIsIlciLCJOIiwiUyIsIkUiLCJORSIsIk5XIiwiU0UiLCJTVyIsImVsIiwidyIsImgiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJwdCIsImNvbnRhaW5zIiwicHQxIiwicHQyIiwiaG9yaXpvbnRhbCIsImNvbnRhaW5zMSIsImNvbnRhaW5zMiIsIm91dFB0Iiwib3J0aG9nb25hbCIsImR4IiwiZHkiLCJhbHBoYSIsImF0YW4yIiwicCIsInBpIiwicGkyIiwiYmV0YSIsInRhbiIsImRpciIsImdldERpcmVjdGlvbiIsInBvaW50IiwiZGlyZWN0aW9uIiwicHRzIiwibWFyZ2luIiwiaXNBcnJheSIsIm1pbiIsIm1heCIsInJlY3RzIiwibWlueCIsIm1pbnkiLCJtYXh4IiwiSW5maW5pdHkiLCJtYXh5IiwiZWFjaCIsInIiLCJyZWdpc3RyeSIsImRlZmF1bHRzIiwicmVmUHQiLCJnZXRQZXJpbWV0ZXIiLCJ2aWV3IiwidGVtcGxhdGUiLCJnZXRUZW1wbGF0ZSIsImlzSUUiLCJzQWdlbnQiLCJ1c2VyQWdlbnQiLCJJZHgiLCJwYXJzZUludCIsIm1hdGNoIiwiaXNGaXJlRm94IiwiSW5zdGFsbFRyaWdnZXIiLCJpc0Nocm9tZSIsInJhdyIsImlzTWFjIiwicGxhdGZvcm0iLCJ0b1VwcGVyQ2FzZSIsImlzV2luZG93cyIsImFwcFZlcnNpb24iLCJpc0xpbnV4IiwiY3JlYXRlRWxlbWVudCIsInRhZyIsImF0dHJpYnMiLCJzdHlsZXMiLCJodG1sIiwic2V0RWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0ZUVsZW1lbnRCeVN0cmluZyIsInN0ciIsInRlbXAiLCJjaGlsZE5vZGVzIiwia2V5Iiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJ0ZXN0RWxlbWVudCIsIm5vZGUiLCJtZXRob2QiLCJub2RlVHlwZSIsImdldEFuY2VzdG9yQnkiLCJwYXJlbnROb2RlIiwiZ2V0UG9zaXRpb24iLCJjb250ZXh0IiwiYm9keSIsImVsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNvbnRleHRSZWN0IiwiZ2V0Q2VudGVyUG9zaXRpb24iLCJtb3ZlIiwiZ2V0U2l6ZSIsIm9mZnNldFdpZHRoIiwib2Zmc2V0SGVpZ2h0IiwicmVzaXplIiwicHJlbG9hZEltYWdlcyIsImFycmF5IiwibGlzdCIsImxvYWRlZCIsImltZyIsInRoYXQiLCJJbWFnZSIsIm9ubG9hZCIsImluZGV4Iiwic3JjIiwiZ2V0SW1hZ2VJbmZvIiwiZG93bmxvYWRGaWxlIiwiZGF0YSIsIm1pbWUiLCJzcGxpdCIsImVuY29kZWQiLCJhdG9iIiwiZGVjb2RlVVJJIiwiR2V0QmxvYiIsIm1zU2F2ZUJsb2IiLCJsaW5rIiwiaHJlZiIsImRvd25sb2FkIiwiZGlzcGxheSIsImFwcGVuZENoaWxkIiwiY2xpY2siLCJyZW1vdmVDaGlsZCIsImNvbnRlbnRUeXBlIiwic2xpY2VTaXplIiwiYnl0ZUFycmF5cyIsIm9mZnNldCIsInNsaWNlIiwiYnl0ZU51bWJlcnMiLCJieXRlQXJyYXkiLCJVaW50OEFycmF5IiwiQmxvYiIsIm9wZW5JbWFnZSIsImltYWdlIiwibXlXaW5kb3ciLCJvcGVuIiwibXlEb2N1bWVudCIsImV2ZW50RnJvbUlucHV0IiwiZSIsInRhZ05hbWUiLCJ0YXJnZXQiLCJidWZmZXIiLCJzdHVmZiIsImNvbmNhdCIsInBvcCIsInNlcCIsImpvaW4iLCJzdGFydCIsImVuZCIsImwiLCJjb3NhIiwiZG90UHJvZHVjdCIsIngwIiwieTAiLCJ4MSIsInkxIiwieDIiLCJ5MiIsIngzIiwieTMiLCJkZW5vbSIsIm51bWVfYSIsIm51bWVfYiIsInVhIiwidWIiLCJpbnRlcnNlY3Rpb25YIiwiaW50ZXJzZWN0aW9uWSIsImEiLCJiIiwiY3giLCJjeSIsInB4IiwicHkiLCJ0eCIsInR5IiwiZCIsImYiLCJnIiwiZGV0IiwieG91dDEiLCJ4b3V0MiIsInlvdXQxIiwieW91dDIiLCJkaXN0MSIsInBvdyIsImRpc3QyIiwieG91dCIsInlvdXQiLCJkZWZhdWx0Q29uZmlnIiwic2hvd0dhdWdlIiwiZGVmYXVsdEdlb21ldHJ5IiwibGlua1R5cGVzIiwidGVybWluYWxWaXN1YWwiLCJzaGFwZUNvbmZpZyIsInN0YXJ0TWFya2VyIiwiZW5kTWFya2VyIiwic3RhcnROb3JtYWwiLCJlbmROb3JtYWwiLCJyZW5kZXJMaW5rIiwiaXNOdW1iZXIiLCJwb2ludHMiLCJ0cmFuc2xhdGUiLCJnZXRTY2FsZWQiLCJsaW5rQ2xhc3MiLCJEaXJlY3RMaW5rIiwiQmV6aWVyTGluayIsImN0cmxwdHMiLCJjb250cm9sUHRzIiwicDEiLCJwMyIsInA0IiwicyIsIkVudGl0eVJlbGF0aW9ucyIsInNvdXJjZSIsIlBvcnQiLCJnZXRCb3VuZHMiLCJlZGdlIiwiaXNTb3VyY2VMZWZ0IiwiaXNUYXJnZXRMZWZ0IiwicmVzdWx0IiwiZ2V0Q2VudGVyWSIsInhlIiwieWUiLCJzZWciLCJzZWdtZW50IiwiZGVwIiwiYXJyIiwibWlkWSIsIk1hbmhhdHRhbiIsIk1JTl9CVUZGRVIiLCJhdXRvUm91dGUiLCJyYW5kb21Ob2lzZSIsIm1heENoYW5uZWxXaWR0aCIsImNvbnRhaW5lciIsImJveGVzIiwic3RhcnRCb3giLCJlbmRCb3giLCJzaWRlIiwic2lkZTIiLCJib3giLCJpbnRlcnNlY3QiLCJqIiwiY2hhbm5lbCIsImNoYW5uZWwyIiwic3RhcnRQYWRkaW5nIiwiZW5kUGFkZGluZyIsIl9nZXRDaGFubmVsIiwiX2dldEZpcnN0SW50ZXJzZWN0aW9uIiwiX2dldFJvdXRlVGVuZGVuY3kiLCJfaGFzSW50ZXJzZWN0aW9uIiwiX21vdmVTZWdtZW50IiwiYnJlYWtQdCIsIl9nZXRSb3V0ZURpcmVjdGlvbiIsImdldENlbnRlciIsImJveDEiLCJib3gyIiwiZ2V0TGVmdCIsImdldFJpZ2h0IiwiZ2V0Qm90dG9tIiwiZ2V0VG9wIiwiZ2V0VHJhbnNsYXRlZCIsInJvdXRlIiwiX21lcmdlU2VnbWVudHMiLCJnZXRDb21tb25BbmNlc3RvciIsImdldERlc2NlbmRhbnRzIiwiZXhjbHVkZUZyb21Sb3V0aW5nIiwiaXNBbmNlc3RvciIsInN0YXJ0QnVmZmVyIiwiZW5kQnVmZmVyIiwic3RhcnRCdWZmZXJOb3JtYWwiLCJlbmRCdWZmZXJOb3JtYWwiLCJtaWRkbGUiLCJwcnVuZVB0cyIsImRldGVjdEludGVyc2VjdGlvbiIsInNhdmVkSW5kZXgiLCJzYXZlZFNpZGUiLCJoMSIsImgyIiwiZXF1YWxzIiwiS2V5VXRpbHMiLCJzdG9wUHJvcGFnYXRpb24iLCJyb290Iiwiem9vbVNjYWxlIiwicm9vdE5TIiwiZ2V0QXR0cmlidXRlIiwibGlzdGVuZXJzIiwiZHJhZ2dpbmciLCJoYW5kbGVyIiwiYmluZCIsImhhbmRsZUV2ZW50Iiwic3RhcnRlZCIsImVudGVyU3RhY2siLCJvbiIsInN0YXJ0S2V5cyIsIm9mZiIsInN0b3BLZXlzIiwiZXZlbnQiLCJidWYiLCJucyIsInN0YWNrIiwiaXNSb290Iiwic3RhcnRzV2l0aCIsInJvb3RUYXJnZXQiLCJuc1RhcmdldCIsInByZXBlbmQiLCJ0YXJnZXRTdGFjayIsInRvU3RyaW5nIiwiaXNLZXlFdmVudCIsImdldEtleUV2ZW50IiwiZ2V0RXZlbnRJbmZvIiwid2hlZWxEZWx0YSIsImJ1dHRvbiIsImRyYWdPYmplY3QiLCJtb3VzZSIsImRyYWdQb3MiLCJtb3VzZW1vdmUiLCJjdXJyZW50UG9zIiwiZGlzcGF0Y2giLCJtb3VzZXVwIiwicHJldmVudERlZmF1bHQiLCJzaW11bGF0ZUVudGVyTGVhdmUiLCJsYXN0IiwiY2xlYXJFbnRlclN0YWNrIiwiayIsImdldE5TIiwidmFsIiwiYXBwZW5kIiwiaXRlbSIsIm5zVHlwZSIsInJlZ2V4cCIsImxpc3RlbmVyIiwiY2FsbGJhY2siLCJsYXN0UG9zaXRpb24iLCJyZWdpc3RlcktleSIsImdldEtleURhdGEiLCJjdHJsIiwiYWx0Iiwic2hpZnQiLCJtZXRhIiwiY29kZSIsInVucmVnaXN0ZXJLZXkiLCJ6SW5kZXgiLCJyZWdpc3RlciIsIlJlZ0V4cCIsInN0b3AiLCJyZWdpc3RlcmVkVHlwZSIsImNoYW5nZWRUb3VjaGVzIiwic3ZnIiwib3duZXJTVkdFbGVtZW50IiwiY3JlYXRlU1ZHUG9pbnQiLCJjbGllbnRYIiwiY2xpZW50WSIsIm1hdHJpeFRyYW5zZm9ybSIsImdldFNjcmVlbkNUTSIsImludmVyc2UiLCJjbGllbnRMZWZ0IiwiY2xpZW50VG9wIiwiS0VZIiwiQUxUIiwiQkFDS19TUEFDRSIsIkNBUFNfTE9DSyIsIkNPTlRST0wiLCJERUxFVEUiLCJET1dOIiwiRU5EIiwiRU5URVIiLCJFU0NBUEUiLCJIT01FIiwiTEVGVCIsIk1FVEEiLCJOVU1fTE9DSyIsIlBBR0VfRE9XTiIsIlBBR0VfVVAiLCJQQVVTRSIsIlBSSU5UU0NSRUVOIiwiUklHSFQiLCJTQ1JPTExfTE9DSyIsIlNISUZUIiwiU1BBQ0UiLCJUQUIiLCJVUCIsIktleWJvYXJkRXZlbnQiLCJrZXlDb2RlIiwid2hpY2giLCJjdHJsS2V5IiwiYWx0S2V5Iiwic2hpZnRLZXkiLCJtZXRhS2V5Iiwibm9kZURlZmF1bHRzIiwicm9sZSIsImRyYWdnYWJsZSIsInNlbGVjdGFibGUiLCJlZGl0YWJsZSIsInJlc2l6YWJsZSIsInNvdXJjZWFibGUiLCJ0YXJnZXRhYmxlIiwidmlzaWJsZSIsImVkZ2VEZWZhdWx0cyIsImlkIiwic2l6ZSIsImNvbG9yIiwidW5pcXVlSWQiLCJtb2RlbCIsIm5vZGVzIiwiZWRnZXMiLCJzZWxlY3Rpb24iLCJkZXN0cm95ZWQiLCJub2RlVHlwZXMiLCJlZGdlVHlwZXMiLCJtYXJrZXJzIiwibWFya2VyIiwibWFya2VyQ29uZmlnIiwiZ2V0TWFya2VyIiwibG9hZE1vZGVsIiwiY3VycmVudFJvb3QiLCJOb2RlQ2xhc3MiLCJnZXRKU0NsYXNzIiwiYWRkQ2hpbGQiLCJmcm9tIiwidG8iLCJFZGdlQ2xhc3MiLCJhZGROb2RlIiwiYWRkRWRnZSIsImNoaWxkcmVuIiwid2l0aG91dCIsImFsbG93RGFuZ2xpbmdFZGdlcyIsIm11bHRpQ29ubmVjdCIsInJlYWRPbmx5Iiwidmlld09ubHkiLCJncmFwaCIsImluRWRnZXMiLCJvdXRFZGdlcyIsInBvcnRzIiwidW5kZWZpbmVkIiwicmVuZGVyIiwicG9ydE5hbWUiLCJlbmRQdCIsInNoYXBlIiwiZ2V0U2hhcGUiLCJsYWJlbCIsImRlY29yYXRvcnMiLCJjcmVhdGVEZWNvcmF0b3JzIiwidmlld3MiLCJ2aWV3UHJvcHMiLCJFcnJvciIsImlzVW5kZWZpbmVkIiwiY2xhc3NOYW1lIiwiY29tcHV0ZWRDbGFzc05hbWUiLCJ2aWV3UHJvcCIsInNoYXBlQ2xhc3MiLCJnZXRWaWV3IiwiZ2V0TGFiZWxCb3giLCJyZW5kZXJMYWJlbCIsIl9jb21wdXRlZENsYXNzTmFtZSIsImhhc093blByb3BlcnR5IiwiT2JqZWN0IiwiZ2V0UHJvdG90eXBlT2YiLCJjYWNoZXMiLCJnZXRDYWNoZSIsImNsZWFyIiwibmFtZXNhcGNlIiwiRk9OVF9CT0xEIiwiRk9OVF9JVEFMSUMiLCJGT05UX1VOREVSTElORSIsIkZPTlRfU0hBRE9XIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiZm9udENvbG9yIiwicGFkZGluZyIsImxpbmVQYWRkaW5nIiwiYWxpZ24iLCJyb3RhdGlvbiIsInN0cmluZ01lYXN1cmVFbCIsIm1lYXN1cmVEaXYiLCJiYXNlbGluZURpdiIsImdldFN0cmluZ1NpemUiLCJtZW1vaXplIiwiYm9sZCIsInBvc2l0aW9uIiwidmlzaWJpbGl0eSIsImRvYyIsImNvbnRlbnRXaW5kb3ciLCJ3cml0ZSIsImNsb3NlIiwiZ2V0RWxlbWVudEJ5SWQiLCJmb250V2VpZ2h0Iiwic3RydXQiLCJmaXJzdENoaWxkIiwiYmFzZWxpbmVIZWlnaHQiLCJvZmZzZXRUb3AiLCJiYXNlbGluZSIsIndyYXAiLCJtYXhXaWR0aCIsInNwYWNlU2l6ZSIsInNwYWNlIiwibGluZUhlaWdodCIsImxpbmVzIiwid29yZHMiLCJsaW5lIiwiY3VycmVudFdpZHRoIiwid29yZFdpZHRoIiwibmV3TGluZSIsIndvcmQiLCJsYWJlbENvbmZpZyIsImNvbnRhaW5lcldpZHRoIiwiY29udGFpbmVySGVpZ2h0IiwiX2dldExhYmVsQm94IiwiY2FsbCIsImdldExhYmVsQm94Rm9yTGluayIsIndyYXBwZWRMYWJlbCIsImFuY2hvciIsInNldEFuY2hvclgiLCJwaXZvdCIsIm1heEJvdW5kcyIsIl9sYWJlbCIsInVuZGVybGluZSIsIml0YWxpYyIsInNoYWRvdyIsImVkaXRvciIsInJlZkVsIiwidGV4dEVsIiwic2luZ2xlTGluZSIsInVuc2VsZWN0YWJsZSIsIm92ZXJmbG93IiwiYm9yZGVyIiwiZm9jdXMiLCJzZWxlY3QiLCJmaXJlIiwiY2FuY2VsIiwic2V0U291cmNlIiwic291cmNlUG9zIiwic2V0VGFyZ2V0IiwidGFyZ2V0UG9zIiwic2V0VGVybWluYWwiLCJzZXRFZGdlQXQiLCJyZW1vdmVFZGdlIiwiYWRkT3V0RWRnZSIsImFkZEluRWRnZSIsImNlbnRlciIsInJlZlB0cyIsImdldFJlZmVyZW5jZVBvaW50cyIsInRlcm1pbmFscyIsImdldEJvdW5kIiwiZ2V0UG9ydCIsImdldExpbmsiLCJnZXRUZXJtaW5hbFZpc3VhbCIsImFycm93Iiwic2lnbiIsInZpZXdCb3giLCJyZWYiLCJmaWxsIiwidHJpYW5nbGUiLCJvdmFsIiwiZGlhbW9uZCIsImZhY3RvcnkiLCJvcmllbnRhdGlvbiIsIkhPUklaT05UQUwiLCJWRVJUSUNBTCIsIml0ZW1zIiwib3duZXIiLCJnZXRMaW5rZWROb2RlcyIsImhnYXAiLCJ2Z2FwIiwiX2ZsUG9zIiwibW92ZVRvIiwidHJpZ2dlciIsInRhYmluZGV4IiwibGF5b3V0IiwibGF5b3V0Q2xhc3MiLCJfdHJhbnNsYXRlIiwiX3NjYWxlIiwiZGlzcGF0Y2hlciIsImdyYXBoQmVoYXZpb3IiLCJzZWxlY3Rpb25CZWhhdmlvciIsIm5vZGVCZWhhdmlvciIsImVkZ2VCZWhhdmlvciIsImNvbm5lY3Rpb25CZWhhdmlvciIsInNjYWxlZCIsInZpZXdwb3J0IiwiaXNOdWxsIiwidnAiLCJ0cmFuc2Zvcm0iLCJyZWZyZXNoIiwiX2dyYXBoIiwiaW5pdGlhbGl6ZUJlaGF2aW9ycyIsInJlbmRlck1hcmtlcnMiLCJwcmVwcm9jZXNzb3IiLCJURU1QTEFURVMiLCJwYXJ0cyIsInBhcnQiLCJ0cmltIiwiY2FtZWxDYXNlIiwiaW50ZXJwb2xhdGUiLCJncmlkU2l6ZSIsImdCb3VuZHMiLCJ2Qm91bmRzIiwicGFyc2VGbG9hdCIsImRlZmF1bHRDbGlja01vZGUiLCJoaWRlT3V0bGluZSIsInNpbmdsZVNlbGVjdCIsImdyaWRFbmFibGVkIiwiZ3VpZGVzRW5hYmxlZCIsIm1heFpvb20iLCJtaW5ab29tIiwiem9vbUZhY3RvciIsIm1hc2tPcGFjaXR5IiwicmVuZGVyZXIiLCJoYW5kbGVEcmFnIiwiaGFuZGxlWm9vbSIsInBhbiIsIkJlaGF2aW9yIiwic2VsZWN0Q2VsbCIsInVuc2VsZWN0Q2VsbCIsImhhbmRsZU11bHRpU2VsZWN0Iiwic2VsZWN0ZWROb2RlcyIsInNlbGVjdGVkTGlua3MiLCJhdHRhY2hlZExpbmtzIiwiY2xhc3NlZCIsInNlbGVjdGVkVmVydGljZXMiLCJnZXRTaGFwZXMiLCJnZXRBdHRhY2hlZEVkZ2VzIiwic2VsZWN0ZWRFZGdlcyIsImNlbGwiLCJ0b2dnbGUiLCJpc1NlbGVjdGVkIiwiX2ZpcnN0U2VsZWN0aW9uIiwiZDMiLCJkYXRhVGFyZ2V0IiwibW92ZVRvRnJvbnQiLCJzZXRTZWxlY3Rpb24iLCJ1dGlsIiwic3RhcnRQdCIsImdldEJvdW5kaW5nUmVjdGFuZ2xlIiwicnViYmVyYmFuZCIsImFwcGVuZE5vZGUiLCJnZXRDZWxsTGF5ZXIiLCJjZWxscyIsImdldEN1cnJlbnRSb290IiwiZmlsdGVyIiwiYXR0ciIsIk5TIiwiU1ZHRWxlbWVudCIsImNyZWF0ZUVsZW1lbnROUyIsImRlZmluZVByb3BlcnRpZXMiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwiJG5vZGUiLCIkdGVtcCIsImNsb25lTm9kZSIsIm91dGVySFRNTCIsInJvcGVuIiwibm9kZU5hbWUiLCJyY2xvc2UiLCJtYXJrdXAiLCJsYXN0Q2hpbGQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsInRvRGF0YVVSTCIsIm9wdGlvbnMiLCJfc3ZnIiwibXNnIiwiZXhwb3J0U1ZHIiwic3ZnX3htbCIsInN2Z19kYXRhdXJsIiwiYmFzZTY0ZGF0YVVSTGVuY29kZSIsImI2NCIsImJ0b2EiLCJleHBvcnRJbWFnZSIsImNhbnZhcyIsImN0eCIsImdldENvbnRleHQiLCJzdmdfaW1nIiwiZHJhd0ltYWdlIiwiaW1hZ2VfZGF0YXVybCIsIm9uZXJyb3IiLCJleHBvcnRJbWFnZUNhbnZnIiwiY2FudmciLCJ4Y2FudmFzIiwianNDYW52YXMiLCJrZWVwT3V0c2lkZVZpZXdwb3J0IiwiYmJveCIsImdldEJCb3giLCJjb21waWxlIiwia2VlcE5vblNhZmUiLCJyZW5kZXJEZWZzIiwicXVlcnlTZWxlY3RvciIsInN0cjEiLCJzdHIyIiwicmVuZGVyU2hhcGUiLCJyb3VuZCIsIm5ld1B0cyIsInByZXYiLCJuZXh0IiwiZDEiLCJkMiIsImNvcm5lciIsImdldFBhdGhEYXRhIiwiY29udGVudCIsIm0iLCIkcm9vdCIsIiRlZGdlIiwiVHJpYW5nbGUiLCJSaG9tYnVzIiwiSGV4YWdvbiIsIlBvbHlnb24iLCJyZW1vdmVMYXN0IiwiR3JpZCIsInZhcmlhYmxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSxpQkFBTUEs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SSxJQUEzRCxVQUFxRSxFQUgzRiw0QkFJUHdDLElBSk8sRUFBUDtBQUtBLEdBakNzQjtBQWtDdkJtSCxRQUFNLGNBQVNuVCxJQUFULEVBQWU7QUFDcEIsVUFBTyw0Q0FDMEJBLElBRDFCLG9CQUMyQ0EsSUFEM0MseUlBR2NBLElBSGQsaUVBSU9BLElBSlAsMEVBS09BLElBTFAsZ0JBS29CQSxJQUxwQiwwREFNR2dNLElBTkgsRUFBUDtBQU9BLEdBMUNzQjtBQTJDdkJodUIsU0FBTyxpQkFBRStMLFFBQUYsQ0FBVyw4OUNBNEJqQmlpQixJQTVCaUIsRUFBWCxFQTRCRSxFQUFDb0gsVUFBVSxNQUFYLEVBNUJGLENBM0NnQixDQXVFUTtBQXZFUixFQUF4Qjs7bUJBMEVlMzBCLFciLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDEyM2U5YTNjOThlNjQxNjM0OTRiXG4gKiovIiwiaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi91dGlsL2Jhc2U2NFwiO1xyXG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9nZW9tZXRyeS9Qb2ludFwiO1xyXG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi9nZW9tZXRyeS9TaGFwZVwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCIuL2dlb21ldHJ5L0xpbmtcIjtcclxuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xyXG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xyXG5pbXBvcnQgR3JhcGggZnJvbSBcIi4vZ3JhcGgvR3JhcGhcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vZ3JhcGgvQ2VsbFwiO1xyXG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XHJcbmltcG9ydCBFZGdlIGZyb20gXCIuL2dyYXBoL0VkZ2VcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXQvTGF5b3V0XCI7XHJcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi92aWV3L0xhYmVsXCI7XHJcbmltcG9ydCBNYXJrZXIgZnJvbSBcIi4vdmlldy9NYXJrZXJcIjtcclxuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcclxuaW1wb3J0IFNWR1JlbmRlcmVyIGZyb20gXCIuL3ZpZXcvU1ZHUmVuZGVyZXJcIjtcclxuaW1wb3J0IEdyYXBoQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xyXG5pbXBvcnQgU2VsZWN0aW9uQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcclxuXHJcblNoYXBlLmFkZFNoYXBlKFwiUmVjdGFuZ2xlXCIsIFJlY3RhbmdsZSk7XHJcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuXHRFdmVudHMsXHJcblx0QmFzZTY0LFxyXG5cdENhY2hlLFxyXG5cdFV0aWxzLFxyXG5cdERvbVV0aWxzLFxyXG5cdFN0cmluZ0J1ZmZlcixcclxuXHRQb2ludCxcclxuXHRMaW5lLFxyXG5cdFNoYXBlLFxyXG5cdFJlY3RhbmdsZSxcclxuXHRFbGxpcHNlLFxyXG5cdExpbmssXHJcblx0RXZlbnREaXNwYXRjaGVyLFxyXG5cdExhYmVsLFxyXG5cdE1hcmtlcixcclxuXHRHcmFwaCxcclxuXHRDZWxsLFxyXG5cdE5vZGUsXHJcblx0RWRnZSxcclxuXHRMYXlvdXQsXHJcblx0Rmxvd0xheW91dCxcclxuXHRSZW5kZXJlcixcclxuXHRTVkdSZW5kZXJlcixcclxuXHRHcmFwaEJlaGF2aW9yLFxyXG5cdFNlbGVjdGlvbkJlaGF2aW9yXHJcbn07XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2luZGV4LmpzXG4gKiovIiwiLy8gaHR0cDovL3d3dy53ZWJ0b29sa2l0LmluZm8vamF2YXNjcmlwdC1iYXNlNjQuaHRtbFxyXG5cclxudmFyIEJhc2U2NCA9IHtcclxuXHJcblx0Ly8gcHJpdmF0ZSBwcm9wZXJ0eVxyXG5cdF9rZXlTdHIgOiBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5Ky89XCIsXHJcblxyXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXHJcblx0ZW5jb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XHJcblx0XHR2YXIgb3V0cHV0ID0gXCJcIjtcclxuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cclxuXHRcdGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XHJcblxyXG5cdFx0d2hpbGUgKGkgPCBpbnB1dC5sZW5ndGgpIHtcclxuXHJcblx0XHRcdGNocjEgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdGNocjIgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcblx0XHRcdGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XHJcblxyXG5cdFx0XHRlbmMxID0gY2hyMSA+PiAyO1xyXG5cdFx0XHRlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcclxuXHRcdFx0ZW5jMyA9ICgoY2hyMiAmIDE1KSA8PCAyKSB8IChjaHIzID4+IDYpO1xyXG5cdFx0XHRlbmM0ID0gY2hyMyAmIDYzO1xyXG5cclxuXHRcdFx0aWYgKGlzTmFOKGNocjIpKSB7XHJcblx0XHRcdFx0ZW5jMyA9IGVuYzQgPSA2NDtcclxuXHRcdFx0fSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xyXG5cdFx0XHRcdGVuYzQgPSA2NDtcclxuXHRcdFx0fVxyXG5cclxuXHRcdFx0b3V0cHV0ID0gb3V0cHV0ICtcclxuXHRcdFx0dGhpcy5fa2V5U3RyLmNoYXJBdChlbmMxKSArIHRoaXMuX2tleVN0ci5jaGFyQXQoZW5jMikgK1xyXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIG91dHB1dDtcclxuXHR9LFxyXG5cclxuXHQvLyBwdWJsaWMgbWV0aG9kIGZvciBkZWNvZGluZ1xyXG5cdGRlY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xyXG5cdFx0dmFyIG91dHB1dCA9IFwiXCI7XHJcblx0XHR2YXIgY2hyMSwgY2hyMiwgY2hyMztcclxuXHRcdHZhciBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cclxuXHRcdGlucHV0ID0gaW5wdXQucmVwbGFjZSgvW15BLVphLXowLTlcXCtcXC9cXD1dL2csIFwiXCIpO1xyXG5cclxuXHRcdHdoaWxlIChpIDwgaW5wdXQubGVuZ3RoKSB7XHJcblxyXG5cdFx0XHRlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cdFx0XHRlbmMyID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cdFx0XHRlbmMzID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cdFx0XHRlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xyXG5cclxuXHRcdFx0Y2hyMSA9IChlbmMxIDw8IDIpIHwgKGVuYzIgPj4gNCk7XHJcblx0XHRcdGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcclxuXHRcdFx0Y2hyMyA9ICgoZW5jMyAmIDMpIDw8IDYpIHwgZW5jNDtcclxuXHJcblx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XHJcblxyXG5cdFx0XHRpZiAoZW5jMyAhPSA2NCkge1xyXG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGVuYzQgIT0gNjQpIHtcclxuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdG91dHB1dCA9IEJhc2U2NC5fdXRmOF9kZWNvZGUob3V0cHV0KTtcclxuXHJcblx0XHRyZXR1cm4gb3V0cHV0O1xyXG5cclxuXHR9LFxyXG5cclxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZW5jb2RpbmdcclxuXHRfdXRmOF9lbmNvZGUgOiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcblx0XHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvXFxyXFxuL2csXCJcXG5cIik7XHJcblx0XHR2YXIgdXRmdGV4dCA9IFwiXCI7XHJcblxyXG5cdFx0Zm9yICh2YXIgbiA9IDA7IG4gPCBzdHJpbmcubGVuZ3RoOyBuKyspIHtcclxuXHJcblx0XHRcdHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XHJcblxyXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XHJcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcclxuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiAxMikgfCAyMjQpO1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xyXG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XHJcblx0XHRcdH1cclxuXHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIHV0ZnRleHQ7XHJcblx0fSxcclxuXHJcblx0Ly8gcHJpdmF0ZSBtZXRob2QgZm9yIFVURi04IGRlY29kaW5nXHJcblx0X3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHtcclxuXHRcdHZhciBzdHJpbmcgPSBcIlwiO1xyXG5cdFx0dmFyIGkgPSAwO1xyXG5cdFx0dmFyIGMgPSBjMSA9IGMyID0gMDtcclxuXHJcblx0XHR3aGlsZSAoIGkgPCB1dGZ0ZXh0Lmxlbmd0aCApIHtcclxuXHJcblx0XHRcdGMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSk7XHJcblxyXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xyXG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIGlmKChjID4gMTkxKSAmJiAoYyA8IDIyNCkpIHtcclxuXHRcdFx0XHRjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xyXG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XHJcblx0XHRcdFx0aSArPSAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XHJcblx0XHRcdFx0YzMgPSB1dGZ0ZXh0LmNoYXJDb2RlQXQoaSsyKTtcclxuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XHJcblx0XHRcdFx0aSArPSAzO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0fVxyXG5cclxuXHRcdHJldHVybiBzdHJpbmc7XHJcblx0fVxyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhc2U2NDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9iYXNlNjQuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5cclxuLy8gYmVhbiByZXF1aXJlcyB0aGUgZXhpc3RlbmNlIG9mIHdpbmRvd1xyXG5pZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRnbG9iYWwud2luZG93ID0geyBhZGRFdmVudEhhbmRsZXI6IGZ1bmN0aW9uKCkge30gfTtcclxuXHRnbG9iYWwuZG9jdW1lbnQgPSB7fTtcclxuXHRnbG9iYWwubmF2aWdhdG9yID0ge307XHJcbn1cclxuXHJcbi8vIHV0aWwgdmFyaWFibGVzXHJcbmxldCBfZGVidWdnaW5nID0gW10sIF9kZWJ1Z0FsbCA9IGZhbHNlLCB0eXBlUmVnaXN0cnkgPSB7fSwgc3BsaWNlID0gQXJyYXkuc3BsaWNlO1xyXG5cclxuLyoqXHJcbiAqIFV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0dHlwZTogZnVuY3Rpb24gKG5hbWVzcGFjZSwgbmFtZSwgdHlwZSkge1xyXG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcclxuXHRcdFx0dHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0gPSBuZXcgTWFwKCk7XHJcblx0XHRpZiAoIW5hbWUpXHJcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcclxuXHRcdGlmICghdHlwZSlcclxuXHRcdFx0cmV0dXJuIHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLmdldChuYW1lKTtcclxuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcclxuXHR9LFxyXG5cclxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBwcm9wcywgZGVmYXVsdFR5cGUpIHtcclxuXHRcdGxldCBuYW1lID0gcHJvcHMubmFtZTtcclxuXHJcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0eXBlIGV4aXN0c1xyXG5cdFx0bGV0IHR5cGUgPSB0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lKTtcclxuXHRcdGlmICghdHlwZSkge1xyXG5cdFx0XHRsZXQgZXh0ZW5kID0gcHJvcHMuZXh0ZW5kcyA/IHRoaXMudHlwZShuYW1lc3BhY2UsIHByb3BzLmV4dGVuZHMpIDogbnVsbDtcclxuXHRcdFx0aWYgKCFleHRlbmQgJiYgZGVmYXVsdFR5cGUpXHJcblx0XHRcdFx0ZXh0ZW5kID0gZGVmYXVsdFR5cGU7XHJcblx0XHRcdGlmIChleHRlbmQpXHJcblx0XHRcdFx0dHlwZSA9IGNsYXNzIGV4dGVuZHMgZXh0ZW5kIHtcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHR0eXBlID0gY2xhc3Mge1xyXG5cdFx0XHRcdFx0Y29uc3RydWN0b3IoY29uZmlnKSB7XHJcblx0XHRcdFx0XHRcdF8uYXNzaWduKHRoaXMsIGNvbmZpZyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0fVxyXG5cdFx0XHRkZWxldGUgcHJvcHMubmFtZTtcclxuXHRcdFx0ZGVsZXRlIHByb3BzLmV4dGVuZHM7XHJcblx0XHRcdF8uYXNzaWduKHR5cGUucHJvdG90eXBlLCBwcm9wcyk7XHJcblx0XHRcdHR5cGUudHlwZU5hbWUgPSBuYW1lO1xyXG5cdFx0XHR0aGlzLnR5cGUobmFtZXNwYWNlLCBuYW1lLCB0eXBlKTtcclxuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmNyZWF0ZVR5cGUgLSAnICsgbmFtZXNwYWNlICsgJy4nICsgbmFtZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHlwZTtcclxuXHR9LFxyXG5cclxuXHRidWlsZFR5cGVzOiBmdW5jdGlvbiAodHlwZXMsIG5hbWVzcGFjZSwgZGVmYXVsdFR5cGUpIHtcclxuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XHJcblxyXG5cdFx0aWYgKCF0eXBlcyAmJiBkZWZhdWx0VHlwZSkge1xyXG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XHJcblx0XHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRpZiAoZGVmYXVsdFR5cGUpIHtcclxuXHRcdFx0bGV0IHR5cGUgPSBfLnJlbW92ZSh0eXBlcywge25hbWU6IGRlZmF1bHRUeXBlLm5hbWV9KTtcclxuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xyXG5cdFx0XHRpZiAodHlwZSlcclxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIF8uZGVmYXVsdHNEZWVwKHR5cGUsIGRlZmF1bHRUeXBlKSk7XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRkZWZhdWx0VHlwZSA9IHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIGRlZmF1bHRUeXBlKTtcclxuXHRcdH1cclxuXHJcblx0XHRfLmZvckVhY2godHlwZXMsICh0eXBlKSA9PiB7XHJcblx0XHRcdHRoaXMuY3JlYXRlVHlwZShuYW1lc3BhY2UsIHR5cGUsIGRlZmF1bHRUeXBlKTtcclxuXHRcdH0pO1xyXG5cdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmJ1aWxkVHlwZXMgZW5kJyk7XHJcblx0fSxcclxuXHJcblx0Ly8gSGVscGVyIGZ1bmN0aW9uIHRvIGNvcnJlY3RseSBzZXQgdXAgdGhlIHByb3RvdHlwZSBjaGFpbiwgZm9yIHN1YmNsYXNzZXMuXHJcblx0Ly8gU2ltaWxhciB0byBgZ29vZy5pbmhlcml0c2AsIGJ1dCB1c2VzIGEgaGFzaCBvZiBwcm90b3R5cGUgcHJvcGVydGllcyBhbmRcclxuXHQvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxyXG5cdGV4dGVuZDogZnVuY3Rpb24gKGNoaWxkLCBwYXJlbnQsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XHJcblx0XHQvLyBBZGQgc3RhdGljIHByb3BlcnRpZXMgdG8gdGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLCBpZiBzdXBwbGllZC5cclxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcclxuXHJcblx0XHQvLyBTZXQgdGhlIHByb3RvdHlwZSBjaGFpbiB0byBpbmhlcml0IGZyb20gYHBhcmVudGAsIHdpdGhvdXQgY2FsbGluZ1xyXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cclxuXHRcdHZhciBTdXJyb2dhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0XHRcdHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDtcclxuXHRcdH07XHJcblx0XHRTdXJyb2dhdGUucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHRcdGNoaWxkLnByb3RvdHlwZSA9IG5ldyBTdXJyb2dhdGU7XHJcblxyXG5cdFx0Ly8gQWRkIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChpbnN0YW5jZSBwcm9wZXJ0aWVzKSB0byB0aGUgc3ViY2xhc3MsXHJcblx0XHQvLyBpZiBzdXBwbGllZC5cclxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xyXG5cclxuXHRcdC8vIFNldCBhIGNvbnZlbmllbmNlIHByb3BlcnR5IGluIGNhc2UgdGhlIHBhcmVudCdzIHByb3RvdHlwZSBpcyBuZWVkZWQgbGF0ZXIuXHJcblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcclxuXHJcblx0XHRyZXR1cm4gY2hpbGQ7XHJcblx0fSxcclxuXHJcblx0aW5pdENvbmZpZzogZnVuY3Rpb24gKG9iaiwgY29uZmlnKSB7XHJcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcclxuXHRcdHdoaWxlIChjKSB7XHJcblx0XHRcdGlmIChjLnN1cGVyKSB7XHJcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XHJcblx0XHRcdFx0c3BsaWNlLmFwcGx5KGNBcnIsIFswLCAwLCBjXSk7XHJcblx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdGMgPSBudWxsO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRjID0gY0FycltpXTtcclxuXHRcdFx0aWYgKGMuREVGQVVMVFMpXHJcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xyXG5cdFx0fVxyXG5cdFx0b2JqLnByb3BzID0gXy5hc3NpZ24ocHJvcHMsIGNvbmZpZyk7XHJcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XHJcblx0XHRcdGlmICghdmFsdWUpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XHJcblx0XHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcclxuXHRcdH07XHJcblx0fSxcclxuXHJcblx0LyoqXHJcblx0ICogR2V0cyB0aGUgSlMgY2xhc3MgY29uc3RydWN0b3IuXHJcblx0ICogQHBhcmFtIHtPYmplY3R9IGpzQ2xhc3NcclxuXHQgKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdENsYXNzXHJcblx0ICovXHJcblx0Z2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIChqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcclxuXHRcdGlmICghanNDbGFzcylcclxuXHRcdFx0anNDbGFzcyA9IGRlZmF1bHRDbGFzcztcclxuXHJcblx0XHRpZiAoXy5pc1N0cmluZyhqc0NsYXNzKSlcclxuXHRcdFx0anNDbGFzcyA9IGV2YWwoanNDbGFzcyk7XHJcblx0XHRyZXR1cm4ganNDbGFzcztcclxuXHR9LFxyXG5cclxuXHRkZWJ1ZzogZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcclxuXHRcdGlmIChtb2R1bGVOYW1lKSB7XHJcblx0XHRcdF9kZWJ1Z2dpbmcucHVzaChtb2R1bGVOYW1lKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdF9kZWJ1Z0FsbCA9IHRydWU7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0bG9nOiBmdW5jdGlvbiAobmFtZSwgbWVzc2FnZSkge1xyXG5cdFx0aWYgKCF3aW5kb3cuY29uc29sZSkge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHR2YXIgZGVidWcgPSBfZGVidWdBbGw7XHJcblx0XHRpZiAoIV9kZWJ1Z0FsbCkge1xyXG5cdFx0XHRkZWJ1ZyA9IGZhbHNlO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoX2RlYnVnZ2luZ1tpXSA9PSBuYW1lKSBkZWJ1ZyA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmICghZGVidWcpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0d2hpbGUgKG5hbWUubGVuZ3RoIDwgMTApIHtcclxuXHRcdFx0bmFtZSA9IG5hbWUgKyAnICc7XHJcblx0XHR9XHJcblx0XHRuYW1lID0gbmFtZS5zdWJzdHJpbmcoMCwgMTApICsgXCIgLSBcIjtcclxuXHRcdGNvbnNvbGUuaW5mbyhuYW1lLCBtZXNzYWdlKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHN1YiBzaGFwZXMgd2l0aGluIGEgcGFyZW50IHNoYXJlLlxyXG5cdCAqIEBwYXJhbSBib3VuZHNcclxuXHQgKiBAcGFyYW0gZ2VvbWV0cnkgVGhlIGdlb21ldHJ5IGluZm9ybWF0aW9uLCB0aGUgZm9ybWF0IG9mIEdlb21ldHJ5IGlzOlxyXG5cdCAqIHtcclxuXHQgKiAgICAgIHg6IFwieCBjb29yZGluYXRlIG9mIHJlZiBwb2ludCwgaWYgbGVzcyB0aGFuIDEsIHdpbGwgYmUgdHJlYXRlZCBhcyB0aGUgcGVyY2VudGFnZSBvZiB0aGUgcGFyZW50IHdpZHRoLlwiLFxyXG5cdCAqICAgICAgeTogXCJ5IGNvb3JkaW5hdGUgb2YgcmVmIHBvaW50LlwiLFxyXG5cdCAqICAgICAgYW5jaG9yWDogXCJ4IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXHJcblx0ICogICAgICBhbmNob3JZOiBcInkgcG9zIG9mIGNoaWxkIHJlbGF0aXZlIHRvIHRoZSByZWYgcG9pbnRcIixcclxuXHQgKiAgICAgIG9mZnNldFg6IFwidGhlIG9mZnNldCBpbiB0aGUgeCBkaXJlY3Rpb24uXCIsXHJcblx0ICogICAgICBvZmZzZXRZOiBcInRoZSBvZmZzZXQgaW4gdGhlIHkgZGlyZWN0aW9uLlwiLFxyXG5cdCAqICAgICAgd2lkdGg6IFwidGhlIHdpZHRoIG9mIHRoZSBjaGlsZCBlbGVtZW50XCIsXHJcblx0ICogICAgICBoZWlnaHQ6IFwidGhlIGhlaWdodCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiXHJcblx0ICogfVxyXG5cdCAqIEByZXR1cm5zIHsqW119XHJcblx0ICovXHJcblx0Z2V0UmVsYXRpdmVQb3NpdGlvbjogZnVuY3Rpb24gKGJvdW5kcywgZ2VvbWV0cnkpIHtcclxuXHRcdGxldCB4ID0gTWF0aC5hYnMoZ2VvbWV0cnkueCkgPD0gMSA/IGJvdW5kcy53aWR0aCAqIGdlb21ldHJ5LnggOiBnZW9tZXRyeS54O1xyXG5cdFx0bGV0IHkgPSBNYXRoLmFicyhnZW9tZXRyeS55KSA8PSAxID8gYm91bmRzLmhlaWdodCAqIGdlb21ldHJ5LnkgOiBnZW9tZXRyeS55O1xyXG5cdFx0cmV0dXJuIHRoaXMub2Zmc2V0UG9zaXRpb24oW3gsIHldLCBnZW9tZXRyeSk7XHJcblx0fSxcclxuXHJcblx0b2Zmc2V0UG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGdlb21ldHJ5KSB7XHJcblx0XHRyZXR1cm4gW3Bvc1swXSArIGdlb21ldHJ5LndpZHRoICogZ2VvbWV0cnkuYW5jaG9yWCArIGdlb21ldHJ5Lm9mZnNldFgsIHBvc1sxXSArIGdlb21ldHJ5LmhlaWdodCAqIGdlb21ldHJ5LmFuY2hvclkgKyBnZW9tZXRyeS5vZmZzZXRZXTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3MgdW5zY2FsZWQsIGkuZS4sIGFic29sdXRlIHBvc2l0aW9uIHdpdGhvdXQgY29uc2lkZXJpbmcgdHJhbnNsYXRpb24gYW5kIHNjYWxlLlxyXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0ZVxyXG5cdCAqIEBwYXJhbSBzY2FsZSB0aGUgY3VycmVudCBzY2FsZVxyXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxyXG5cdCAqL1xyXG5cdHVuc2NhbGU6IGZ1bmN0aW9uICh0LCBzY2FsZSwgbykge1xyXG5cdFx0aWYgKG8gaW5zdGFuY2VvZiBSZWN0YW5nbGUpXHJcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCAqIHNjYWxlICsgdFswXSwgby55ICogc2NhbGUgKyB0WzFdLCBvLndpZHRoICogc2NhbGUsIG8uaGVpZ2h0ICogc2NhbGUpO1xyXG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KG8ueCAqIHNjYWxlICsgdFswXSwgby55ICogc2NhbGUgKyB0WzFdKTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIFtvWzBdICogc2NhbGUgKyB0WzBdLCBvWzFdICogc2NhbGUgKyB0WzFdXTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIHJlbGF0aXZlIHRvIHRoZSBncmFwaCB0aGF0J3Mgc2NhbGVkLCBpLmUuLCByZWxhdGl2ZSBwb3NpdGlvbiBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXHJcblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cclxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcclxuXHQgKiBAcGFyYW0gbyBjYW4gYmUgZWl0aGVyIGEgUG9pbnQgb3IgYSBSZWN0YW5nbGUgb3IgYSBQb2ludCBhcnJheS5cclxuXHQgKi9cclxuXHRzY2FsZTogZnVuY3Rpb24gKHQsIHNjYWxlLCBvKSB7XHJcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcclxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlLCBvLndpZHRoIC8gc2NhbGUsIG8uaGVpZ2h0IC8gc2NhbGUpO1xyXG5cdFx0ZWxzZSBpZiAobyBpbnN0YW5jZW9mIFBvaW50KVxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KChvLnggLSB0WzBdKSAvIHNjYWxlLCAoby55IC0gdFsxXSkgLyBzY2FsZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHJldHVybiBbKG9bMF0gLSB0WzBdKSAvIHNjYWxlLCAob1sxXSAtIHRbMV0pIC8gc2NhbGVdO1xyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlbmllbmNlIG1ldGhvZC5cclxuXHQgKi9cclxuXHRnZXRQcm9wZXJ0eTogZnVuY3Rpb24gKG9iaiwgcHJvcCkge1xyXG5cdFx0aWYgKCFvYmopXHJcblx0XHRcdHJldHVybiBudWxsO1xyXG5cdFx0aWYgKF8uaGFzKG9iaiwgcHJvcCkpXHJcblx0XHRcdHJldHVybiBvYmpbcHJvcF07XHJcblx0XHRpZiAob2JqLnByb3AgJiYgXy5pc0Z1bmN0aW9uKG9iai5wcm9wKSlcclxuXHRcdFx0cmV0dXJuIG9iai5wcm9wKHByb3ApO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59O1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1V0aWxzLmpzXG4gKiovIiwiY2xhc3MgUG9pbnQge1xyXG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcclxuXHQgKi9cclxuXHRjbG9uZSgpIHtcclxuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBmcm9tIHRoaXMgcHQgdG8gdGhlIG90aGVyIHB0LlxyXG5cdCAqIEBwYXJhbSBhUHRcclxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxyXG5cdCAqL1xyXG5cdGRpc3RhbmNlKGFQdCkge1xyXG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRyYW5zbGF0ZSB0aGlzIHBvaW50XHJcbiBcdCAqL1xyXG5cdHRyYW5zbGF0ZShwMikge1xyXG5cdFx0dGhpcy54ICs9IHAyLng7XHJcblx0XHR0aGlzLnkgKz0gcDIueTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU2NhbGUgdGhpcyB2ZWN0b3JcclxuIFx0ICovXHJcblx0c2NhbGUoc2NhbGUpIHtcclxuXHRcdHRoaXMueCAqPSBzY2FsZTtcclxuXHRcdHRoaXMueSAqPSBzY2FsZTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Z2V0U2NhbGVkKHNjYWxlKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCAqIHNjYWxlLCB0aGlzLnkgKiBzY2FsZSk7XHJcblx0fVxyXG5cclxuXHRnZXRUcmFuc2xhdGVkKHAyKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KHRoaXMueCArIHAyLngsIHRoaXMueSArIHAyLnkpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cclxuXHQgKiBAcGFyYW0gcDJcclxuXHQgKiBAcmV0dXJucyB7UG9pbnR9XHJcblx0ICovXHJcblx0Z2V0RGlyZWN0aW9uKHAyKSB7XHJcblx0XHR2YXIgZGlzdCA9IHRoaXMuZGlzdGFuY2UocDIpO1xyXG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIHJvdGF0ZSB0aGUgcG9pbnQgYWJvdXQgdGhlIG9yaWdpbi4gV2l0aCB0aGUgc3BlY2lmaWVkIGFuZ2xlLlxyXG5cdCAqIEBwYXJhbSBhbmdsZSB0aGUgYW5nbGUgdG8gcm90YXRlXHJcblx0ICovXHJcblx0cm90YXRlKGFuZ2xlKSB7XHJcblx0XHR2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xyXG5cdFx0dmFyIHggPSB0aGlzLngsIHkgPSB0aGlzLnk7XHJcblx0XHR0aGlzLnggPSB4ICogY29zIC0geSAqIHNpbjtcclxuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRnZXRSb3RhdGVkKGFuZ2xlKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jbG9uZSgpLnJvdGF0ZShhbmdsZSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxyXG5cdCAqL1xyXG5cdGRvdFByb2R1Y3QocDIpIHtcclxuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdldCB0aGUgbWlkIHBvaW50IGJldHdlZW4gdGhpcyBhbmQgcDIuXHJcbiBcdCAqL1xyXG5cdGdldE1pZFBvaW50KHAyKSB7XHJcblx0XHRyZXR1cm4gbmV3IFBvaW50KCh0aGlzLnggKyBwMi54KSAvIDIsICh0aGlzLnkgKyBwMi55KSAvIDIpO1xyXG5cdH1cclxuXHJcblx0cmV2ZXJzZSgpIHtcclxuXHRcdHRoaXMueCA9IC10aGlzLng7XHJcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHRlcXVhbHMocDIpIHtcclxuXHRcdGlmICghcDIgfHwgcDIuY29uc3RydWN0b3IgIT0gUG9pbnQpIHJldHVybiBmYWxzZTtcclxuXHJcblx0XHRyZXR1cm4gKHRoaXMueCA9PSBwMi54ICYmIHRoaXMueSA9PSBwMi55KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJlZmxlY3QgdGhpcyBwb2ludCB3LnIudC4gdGhlIHJlY3RhbmdsZS5cclxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxyXG5cdCAqIGNlbnRyYWwgbGluZSBvZiB0aGUgcmVjdGFuZ2xlLCBvdGhlcndpc2UgcmVmbGVjdCBjcm9zcyB0aGUgaG9yaXpvbnRhbFxyXG5cdCAqIGNlbnRyYWwgbGluZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSByZWN0IHRoZSByZWN0YW5nbGVcclxuXHQgKiBAcGFyYW0gdmVydGljYWwgd2hldGhlciBpcyB2ZXJ0aWNhbCByZWZsZWN0aW9uIG9yIGhvcml6b250YWwgcmVmbGVjdGlvbi5cclxuXHQgKi9cclxuXHRyZWZsZWN0KHJlY3QsIHZlcnRpY2FsKSB7XHJcblx0XHRpZiAodmVydGljYWwpXHJcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMueSA9IDIgKiByZWN0LnkgLSB0aGlzLnk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMueCArIFwiLFwiICsgdGhpcy55O1xyXG5cdH1cclxufVxyXG5cclxuUG9pbnQuVyA9IG5ldyBQb2ludCgtMSwgMCk7XHJcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xyXG5Qb2ludC5TID0gbmV3IFBvaW50KDAsIDEpO1xyXG5Qb2ludC5FID0gbmV3IFBvaW50KDEsIDApO1xyXG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XHJcblBvaW50Lk5XID0gbmV3IFBvaW50KC0xLCAtMSk7XHJcblBvaW50LlNFID0gbmV3IFBvaW50KDEsIDEpO1xyXG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb2ludDtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XHJcblxyXG5sZXQgcmVnaXN0cnkgPSB7fTtcclxuXHJcbmNsYXNzIFNoYXBlIHtcclxuXHRjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb25maWcpIHtcclxuXHRcdHRoaXMueCA9IHg7XHJcblx0XHR0aGlzLnkgPSB5O1xyXG5cdFx0dGhpcy53aWR0aCA9IHdpZHRoO1xyXG5cdFx0dGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiB0aGUgeS1jb29yZCBvZiB0aGUgdG9wIHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcclxuXHQgKi9cclxuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cclxuXHQgKi9cclxuXHRnZXQgYm90dG9tKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQvMjsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIHgtY29vcmQgb2YgbGVmdCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Z2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnggLSB0aGlzLndpZHRoLzI7IH1cclxuXHJcblx0LyoqXHJcblx0ICogUmV0dXJucyB0aGUgeC1jb29yZGluYXRlIG9mIHRoZSByaWdodCBzaWRlIG9mIHRoaXMgUmVjdGFuZ2xlLlxyXG5cdCAqL1xyXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxyXG5cclxuXHRnZXQgY2VudGVyKCkgeyByZXR1cm4gbmV3IFBvaW50KHRoaXMueCwgdGhpcy55KTsgfVxyXG5cclxuXHRnZXQgYm91bmRzKCkgeyByZXR1cm4gbmV3IFJlY3RhbmdsZSh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpOyB9XHJcblxyXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXHJcblx0ICovXHJcblx0Z2V0UmVndWxhclBvaW50cyhuKSB7cmV0dXJuIG51bGw7fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIGludGVyc2VjdGlvbiBiZXR3ZWVuIGJvdW5kYXJ5IG9mIHRoaXMgc2hhcGUgYW5kIHRoZSBsaW5lIGNvbm5lY3RpbmcgKHgseSkgd2l0aCB0aGUgcmVmUHQuXHJcblx0ICogQHBhcmFtIHJlZlB0XHJcblx0ICogQHJldHVybnMge251bGx9XHJcblx0ICovXHJcblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLmdldFBlcmltZXRlcih0aGlzLCByZWZQdCwgb3J0aG9nb25hbCk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXIodmlldykge1xyXG5cdFx0bGV0IHRlbXBsYXRlID0gXy50ZW1wbGF0ZSh2aWV3LmdldFRlbXBsYXRlKHRoaXMubmFtZSwgdGhpcykpO1xyXG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcclxuXHRcdHJldHVybiByZWdpc3RyeVtuYW1lXTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRTaGFwZShuYW1lLCBjKSB7XHJcblx0XHRyZWdpc3RyeVtuYW1lXSA9IGM7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgcmVtb3ZlU2hhcGUobmFtZSkge1xyXG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hhcGU7XHJcblxyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvU2hhcGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcblxyXG4vKipcclxuICogZG9tIFV0aWxpdHkgZnVuY3Rpb25zXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcblx0aXNJRTogKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcclxuXHRcdHZhciBJZHggPSBzQWdlbnQuaW5kZXhPZihcIk1TSUVcIik7XHJcblxyXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cclxuXHRcdGlmIChJZHggPiAwKVxyXG5cdFx0XHRyZXR1cm4gcGFyc2VJbnQoc0FnZW50LnN1YnN0cmluZyhJZHggKyA1LCBzQWdlbnQuaW5kZXhPZihcIi5cIiwgSWR4KSkpO1xyXG5cclxuXHRcdC8vIElmIElFIDExIHRoZW4gbG9vayBmb3IgVXBkYXRlZCB1c2VyIGFnZW50IHN0cmluZy5cclxuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudFxcLzdcXC4vKSlcclxuXHRcdFx0cmV0dXJuIDExO1xyXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9FZGdlXFwvLykpXHJcblx0XHRcdHJldHVybiBcIkVkZ2VcIjtcclxuXHRcdGVsc2VcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzRmlyZUZveCA6IChmdW5jdGlvbigpe1xyXG5cdFx0Ly8gSW5zdGFsbFRyaWdnZXI6IEZpcmVmb3gncyBBUEkgdG8gaW5zdGFsbCBhZGQtb25zXHJcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcclxuXHR9KSgpLFxyXG5cclxuXHRpc0Nocm9tZTogKGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvciB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ0VkZ2UnKSA+PSAwKSByZXR1cm4gZmFsc2U7XHJcblx0XHR2YXIgcmF3ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvQ2hyb20oZXxpdW0pXFwvKFswLTldKylcXC4vKTtcclxuXHRcdHJldHVybiByYXcgPyBwYXJzZUludChyYXdbMl0sIDEwKSA6IGZhbHNlO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzTWFjOiAoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoIXdpbmRvdyB8fCAhd2luZG93Lm5hdmlnYXRvciB8fCAhbmF2aWdhdG9yKSByZXR1cm4gZmFsc2U7XHJcblx0XHRyZXR1cm4gbmF2aWdhdG9yLnBsYXRmb3JtLnRvVXBwZXJDYXNlKCkuaW5kZXhPZignTUFDJykgPj0gMDtcclxuXHR9KSgpLFxyXG5cclxuXHRpc1dpbmRvd3M6IChmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiV2luZG93c1wiKSA+PSAwO1xyXG5cdH0pKCksXHJcblxyXG5cdGlzTGludXg6IChmdW5jdGlvbigpIHtcclxuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IpIHJldHVybiBmYWxzZTtcclxuXHRcdHJldHVybiBuYXZpZ2F0b3IuYXBwVmVyc2lvbi5pbmRleE9mKFwiTGludXhcIikgPj0gMDtcclxuXHR9KSgpLFxyXG5cclxuXHRjcmVhdGVFbGVtZW50OiBmdW5jdGlvbiAodGFnLCBhdHRyaWJzLCBzdHlsZXMsIGh0bWwpIHtcclxuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuXHRcdHRoaXMuc2V0RWxlbWVudChlbCwgYXR0cmlicywgc3R5bGVzKTtcclxuXHRcdGlmIChodG1sKVxyXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xyXG5cdFx0cmV0dXJuIGVsO1xyXG5cdH0sXHJcblxyXG5cdGNyZWF0ZUVsZW1lbnRCeVN0cmluZzogZnVuY3Rpb24oc3RyKSB7XHJcblx0XHRsZXQgdGVtcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgc3RyKTtcclxuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XHJcblx0fSxcclxuXHJcblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcclxuXHRcdGlmIChhdHRyaWJzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChhdHRyaWJzLCBmdW5jdGlvbih2YWx1ZSwga2V5KSB7XHJcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XHJcblx0XHRcdCB9KTtcclxuXHRcdH1cclxuXHRcdGlmIChzdHlsZXMpIHtcclxuXHRcdFx0Xy5mb3JFYWNoKHN0eWxlcywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xyXG5cdFx0XHRcdGVsLnN0eWxlW2tleV0gPSB2YWx1ZTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHJcblx0dGVzdEVsZW1lbnQ6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xyXG5cdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS5ub2RlVHlwZSA9PSAxICYmICggIW1ldGhvZCB8fCBtZXRob2Qobm9kZSkgKTtcclxuXHR9LFxyXG5cclxuXHRnZXRBbmNlc3RvckJ5OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcclxuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxyXG5cdFx0XHRpZiAodGhpcy50ZXN0RWxlbWVudChub2RlLCBtZXRob2QpIClcclxuXHRcdFx0XHRyZXR1cm4gbm9kZTtcclxuXHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQgdGhlIHBvc2l0aW9uIG9mIGVsZW1lbnQgcmVsYXRpdmUgdG8gdGhlIGNvbnRleHQuXHJcblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XHJcblx0ICogQHBhcmFtIGNvbnRleHRcclxuXHQgKiBAcmV0dXJucyB7KltdfVxyXG5cdCAqL1xyXG5cdGdldFBvc2l0aW9uKGVsLCBjb250ZXh0KSB7XHJcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xyXG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IGNvbnRleHRSZWN0ID0gY29udGV4dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XHJcblx0fSxcclxuXHJcblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcclxuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XHJcblx0XHRsZXQgZWxSZWN0ID0gZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cdFx0bGV0IHcgPSBlbFJlY3QucmlnaHQgLSBlbFJlY3QubGVmdDtcclxuXHRcdGxldCBoID0gZWxSZWN0LmJvdHRvbSAtIGVsUmVjdC50b3A7XHJcblxyXG5cdFx0cmV0dXJuIFtlbFJlY3QubGVmdCAtIGNvbnRleHRSZWN0LmxlZnQgKyB3LzIsIGVsUmVjdC50b3AgLSBjb250ZXh0UmVjdC50b3AgKyBoLzJdO1xyXG5cdH0sXHJcblxyXG5cdG1vdmU6IGZ1bmN0aW9uKGVsLCB4LCB5KSB7XHJcblx0XHRpZiAoeCkgZWwuc3R5bGUubGVmdCA9IHggKyAncHgnO1xyXG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xyXG5cdH0sXHJcblxyXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XHJcblx0XHR2YXIgdyA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldFdpZHRoLCAxMCk7XHJcblx0XHR2YXIgaCA9IHBhcnNlSW50KGVsLnN0eWxlLm9mZnNldEhlaWdodCwgMTApO1xyXG5cdFx0cmV0dXJuIFt3LCBoXTtcclxuXHR9LFxyXG5cclxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XHJcblx0XHRpZiAodykgZWwuc3R5bGUud2lkdGggPSB3ICsgXCJweFwiO1xyXG5cdFx0aWYgKGgpIGVsLnN0eWxlLmhlaWdodCA9IGggKyAncHgnO1xyXG5cdH0sXHJcblxyXG5cdHByZWxvYWRJbWFnZXM6IGZ1bmN0aW9uKGFycmF5KSB7XHJcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xyXG5cdFx0aWYgKCF0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkKSB0aGlzLnByZWxvYWRJbWFnZXMubG9hZGVkID0ge307XHJcblxyXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcclxuXHRcdHZhciBpbWcsIHRoYXQgPSB0aGlzO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHRcdFx0aW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHZhciBpbmRleCA9IGxpc3QuaW5kZXhPZih0aGlzKTtcclxuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XHJcblx0XHRcdFx0XHR0aGF0LnByZWxvYWRJbWFnZXMubG9hZGVkW3RoaXMubmFtZV0gPSB7d2lkdGg6IHRoaXMud2lkdGgsIGhlaWdodDogdGhpcy5oZWlnaHR9O1xyXG5cdFx0XHRcdFx0Ly8gcmVtb3ZlIGltYWdlIGZyb20gdGhlIGFycmF5IG9uY2UgaXQncyBsb2FkZWRcclxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xyXG5cdFx0XHRcdFx0bGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fTtcclxuXHRcdFx0bGlzdC5wdXNoKGltZyk7XHJcblx0XHRcdGltZy5zcmMgPSBhcnJheVtpXTtcclxuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcclxuXHRcdH1cclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQncyB0aGUgaW1hZ2UncyBpbmZvcm1hdGlvbiBnaXZlbiB0aGUgdXJsLiBNdXN0IGJlIHByZWxvYWRlZCBieSBjYWxsaW5nIHRoZSBwcmVsb2FkSW1hZ2UgZnVuY3Rpb24uXHJcblx0ICogQHBhcmFtIHNyY1xyXG5cdCAqL1xyXG5cdGdldEltYWdlSW5mbzogZnVuY3Rpb24oc3JjKSB7XHJcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZFtzcmNdO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fSxcclxuXHJcblx0ZG93bmxvYWRGaWxlOiBmdW5jdGlvbihuYW1lLCBkYXRhKSB7XHJcblx0XHRpZiAoIWRhdGEpIHJldHVybjtcclxuXHRcdGxldCBtaW1lID0gZGF0YS5tYXRjaCgvXmRhdGE6KFteOyxdKikvKVsxXTtcclxuXHRcdGlmIChuYW1lLmluZGV4T2YoJy4nKSA8IDApIHtcclxuXHRcdFx0aWYgKCFtaW1lKSBtaW1lID0gJ3RleHQvcGxhaW4nO1xyXG5cdFx0XHRpZiAobWltZSA9PSAndGV4dC9wbGFpbicpXHJcblx0XHRcdFx0bmFtZSA9IG5hbWUgKyAnLnR4dCc7XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdGxldCB0eXBlID0gbWltZS5zcGxpdCgnLycpWzFdO1xyXG5cdFx0XHRcdGlmICh0eXBlLmluZGV4T2YoJysnKSA+IDApIHR5cGUgPSB0eXBlLnNwbGl0KCcrJylbMF07XHJcblx0XHRcdFx0bmFtZSA9IG5hbWUgKyAnLicgKyB0eXBlO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5pc0lFKSB7XHJcblx0XHRcdGxldCBlbmNvZGVkID0gZGF0YS5pbmRleE9mKCc7YmFzZTY0JykgPj0gMDtcclxuXHRcdFx0aWYgKGVuY29kZWQpXHJcblx0XHRcdFx0ZGF0YSA9IGF0b2IoZGF0YS5yZXBsYWNlKCdkYXRhOicgKyBtaW1lICsgJztiYXNlNjQsJywgJycpKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGRhdGEgPSBkZWNvZGVVUkkoZGF0YS5yZXBsYWNlKCdkYXRhOicgKyBtaW1lICsgJywnLCAnJykpO1xyXG5cdFx0XHRkYXRhID0gdGhpcy5HZXRCbG9iKGRhdGEsIG1pbWUpO1xyXG5cdFx0XHRuYXZpZ2F0b3IubXNTYXZlQmxvYihkYXRhLCBuYW1lKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCBsaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IGRhdGEsIGRvd25sb2FkOiBuYW1lfSwge2Rpc3BsYXk6IFwibm9uZVwifSk7XHJcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XHJcblx0XHRcdGxpbmsuY2xpY2soKTtcclxuXHRcdFx0bGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xyXG5cdFx0fVxyXG5cdH0sXHJcblxyXG5cdC8qKlxyXG5cdCAqIENvbnZlcnQgYjU0IHRvIGJsb2IuIElFIG9ubHlcclxuXHQgKi9cclxuXHRHZXRCbG9iOiBmdW5jdGlvbiAoZGF0YSwgY29udGVudFR5cGUsIHNsaWNlU2l6ZSkge1xyXG5cdFx0Y29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcclxuXHRcdHNsaWNlU2l6ZSA9IHNsaWNlU2l6ZSB8fCA1MTI7XHJcblxyXG5cdFx0dmFyIGJ5dGVBcnJheXMgPSBbXTtcclxuXHJcblx0XHRmb3IgKHZhciBvZmZzZXQgPSAwOyBvZmZzZXQgPCBkYXRhLmxlbmd0aDsgb2Zmc2V0ICs9IHNsaWNlU2l6ZSkge1xyXG5cdFx0XHR2YXIgc2xpY2UgPSBkYXRhLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgc2xpY2VTaXplKTtcclxuXHJcblx0XHRcdHZhciBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHNsaWNlLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0Ynl0ZU51bWJlcnNbaV0gPSBzbGljZS5jaGFyQ29kZUF0KGkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHZhciBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblx0XHRcdGJ5dGVBcnJheXMucHVzaChieXRlQXJyYXkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5ldyBCbG9iKGJ5dGVBcnJheXMsIHt0eXBlOiBjb250ZW50VHlwZX0pO1xyXG5cdH0sXHJcblxyXG5cdG9wZW5JbWFnZTogZnVuY3Rpb24obmFtZSwgaW1hZ2UpIHtcclxuXHRcdHZhciBteVdpbmRvdyA9IHdpbmRvdy5vcGVuKFwiXCIsIFwiX2JsYW5rXCIsIFwidG9vbGJhcj15ZXMsIHNjcm9sbGJhcnM9eWVzLCByZXNpemFibGU9eWVzLCB3aWR0aD01MDAsIGhlaWdodD01MDBcIik7XHJcblx0XHR2YXIgbXlEb2N1bWVudCA9IG15V2luZG93LmRvY3VtZW50O1xyXG5cdFx0dmFyIGltZyA9IG15RG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuXHRcdHRoaXMuc2V0RWxlbWVudChpbWcsIHtzcmM6IGltYWdlLCBuYW1lOiBuYW1lfSk7XHJcblx0XHRteURvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcclxuXHR9LFxyXG5cclxuXHQvKipcclxuXHQgKiBDaGVjayB3aGV0aGVyIHRoZSBrZXkgZXZlbnQgaXMgZnJvbSBpbnB1dCwgdGV4dGFyZWEgb3Igc2VsZWN0LlxyXG5cdCAqIEBwYXJhbSBlICBpbnB1dCBldmVudFxyXG5cdCAqL1xyXG5cdGV2ZW50RnJvbUlucHV0OiBmdW5jdGlvbihlKXtcclxuXHRcdHZhciB0YWdOYW1lID0gZS50YXJnZXQudGFnTmFtZTtcclxuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuXHJcbi8qKlxyXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RyaW5nQnVmZmVyIHtcclxuXHRjb25zdHJ1Y3RvcihzdHIpIHtcclxuXHRcdHRoaXMuYnVmZmVyID0gW107XHJcblx0XHRpZiAoc3RyKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XHJcblx0fVxyXG5cclxuXHRhcHBlbmQoc3R1ZmYpIHtcclxuXHRcdGlmIChfLmlzU3RyaW5nKHN0dWZmKSlcclxuXHRcdFx0dGhpcy5idWZmZXIucHVzaChzdHVmZik7XHJcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHRoaXMuYnVmZmVyLmNvbmNhdChzdHVmZik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0cHJlcGVuZChzdHVmZikge1xyXG5cdFx0aWYgKF8uaXNTdHJpbmcoc3R1ZmYpKVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xyXG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHN0dWZmKSlcclxuXHRcdFx0dGhpcy5idWZmZXIgPSBzdHVmZi5jb25jYXQodGhpcy5idWZmZXIpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgXCJcIiArIHN0dWZmKTtcclxuXHRcdHJldHVybiB0aGlzO1xyXG5cdH1cclxuXHJcblx0Y2xlYXIoKSB7XHJcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xyXG5cdH1cclxuXHJcblx0cmVtb3ZlTGFzdCgpIHtcclxuXHRcdHRoaXMuYnVmZmVyLnBvcCgpO1xyXG5cdFx0cmV0dXJuIHRoaXM7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZyhzZXApIHtcclxuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcclxuXHRcdHJldHVybiB0aGlzLmJ1ZmZlci5qb2luKHNlcCk7XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvU3RyaW5nQnVmZmVyLmpzXG4gKiovIiwiaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcclxuXHRjb25zdHJ1Y3RvcihzdGFydCwgZW5kKSB7XHJcblx0XHR0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcblx0XHR0aGlzLmVuZCA9IGVuZDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgbGVuZ3RoIG9mIHRoaXMgbGluZVxyXG5cdCAqL1xyXG5cdGxlbmd0aCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnN0YXJ0LmRpc3RhbmNlKHRoaXMuZW5kKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2Ugb2YgdGhpcyBsaW5lIHRvIHRoZSBwb2ludC5cclxuXHQgKi9cclxuXHRkaXN0YW5jZShwdCkge1xyXG5cdFx0dmFyIHggPSB0aGlzLnN0YXJ0LmRpc3RhbmNlKHB0KTtcclxuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xyXG5cclxuXHRcdHZhciBsID0gdGhpcy5sZW5ndGgoKTtcclxuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXHJcblx0XHRcdG5ldyBQb2ludChwdC54IC8geCwgcHQueSAvIHgpKTtcclxuXHJcblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogRnVuY3Rpb246IGludGVyc2VjdGlvblxyXG5cdCAqXHJcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXHJcblx0ICpcclxuXHQgKiBQYXJhbWV0ZXJzOlxyXG5cdCAqXHJcblx0ICogeDAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHkwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cclxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxyXG5cdCAqIHkxIC0gWS1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3MgZW5kcG9pbnQuXHJcblx0ICogeDIgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3Mgc3RhcnRwb2ludC5cclxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxyXG5cdCAqIHgzIC0gWC1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxyXG5cdCAqIHkzIC0gWS1jb29yZGluYXRlIG9mIHRoZSBzZWNvbmQgbGluZSdzIGVuZHBvaW50LlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBpbnRlcnNlY3Rpb24oeDAsIHkwLCB4MSwgeTEsIHgyLCB5MiwgeDMsIHkzKSB7XHJcblx0XHR2YXIgZGVub20gPSAoKHkzIC0geTIpICogKHgxIC0geDApKSAtICgoeDMgLSB4MikgKiAoeTEgLSB5MCkpO1xyXG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XHJcblx0XHR2YXIgbnVtZV9iID0gKCh4MSAtIHgwKSAqICh5MCAtIHkyKSkgLSAoKHkxIC0geTApICogKHgwIC0geDIpKTtcclxuXHJcblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcclxuXHRcdHZhciB1YiA9IG51bWVfYiAvIGRlbm9tO1xyXG5cclxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcclxuXHRcdFx0Ly8gR2V0IHRoZSBpbnRlcnNlY3Rpb24gcG9pbnRcclxuXHRcdFx0dmFyIGludGVyc2VjdGlvblggPSB4MCArIHVhICogKHgxIC0geDApO1xyXG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XHJcblxyXG5cdFx0XHRyZXR1cm4gbmV3IFBvaW50KGludGVyc2VjdGlvblgsIGludGVyc2VjdGlvblkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIE5vIGludGVyc2VjdGlvblxyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnTGluZTp7c3RhcnQ9JyArIHRoaXMuc3RhcnQgKyAnO2VuZD0nICsgdGhpcy5lbmQgKyAnfSc7XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L0xpbmUuanNcbiAqKi8iLCJpbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vUmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbGxpcHNlIGV4dGVuZHMgU2hhcGUge1xyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdFbGxpcHNlOnt4PScgKyB0aGlzLnggKyAnO3k9JyArIHRoaXMueSArICc7d2lkdGg9JyArIHRoaXMud2lkdGggKyAnO2hlaWdodD0nICsgdGhpcy5oZWlnaHQgKyAnfSc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0UGVyaW1ldGVyKHJlY3QsIHB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcclxuXHRcdHZhciBhID0gcmVjdC53aWR0aCAvIDI7XHJcblx0XHR2YXIgYiA9IHJlY3QuaGVpZ2h0IC8gMjtcclxuXHRcdHZhciBjeCA9IHJlY3QueDtcclxuXHRcdHZhciBjeSA9IHJlY3QueTtcclxuXHRcdHZhciBweCA9IHB0Lng7XHJcblx0XHR2YXIgcHkgPSBwdC55O1xyXG5cclxuXHRcdC8vIENhbGN1bGF0ZXMgc3RyYWlnaHQgbGluZSBlcXVhdGlvbiB0aHJvdWdoXHJcblx0XHQvLyBwb2ludCBhbmQgZWxsaXBzZSBjZW50ZXIgeSA9IGQgKiB4ICsgaFxyXG5cdFx0dmFyIGR4ID0gcGFyc2VJbnQocHggLSBjeCk7XHJcblx0XHR2YXIgZHkgPSBwYXJzZUludChweSAtIGN5KTtcclxuXHJcblx0XHR2YXIgdHgsIHR5O1xyXG5cclxuXHRcdGlmIChkeCA9PSAwICYmIGR5ICE9IDApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChjeCwgY3kgKyBiICogZHkgLyBNYXRoLmFicyhkeSkpO1xyXG5cdFx0fSBlbHNlIGlmIChkeCA9PSAwICYmIGR5ID09IDApIHtcclxuXHRcdFx0cmV0dXJuIG5ldyBQb2ludChweCwgcHkpO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIENhbGN1bGF0ZXMgaW50ZXJzZWN0aW9uXHJcblx0XHR2YXIgZCA9IGR5IC8gZHg7XHJcblx0XHR2YXIgaCA9IGN5IC0gZCAqIGN4O1xyXG5cdFx0dmFyIGUgPSBhICogYSAqIGQgKiBkICsgYiAqIGI7XHJcblx0XHR2YXIgZiA9IC0yICogY3ggKiBlO1xyXG5cdFx0dmFyIGcgPSBhICogYSAqIGQgKiBkICogY3ggKiBjeCArIGIgKiBiICogY3ggKiBjeCAtIGEgKiBhICogYiAqIGI7XHJcblx0XHR2YXIgZGV0ID0gTWF0aC5zcXJ0KGYgKiBmIC0gNCAqIGUgKiBnKTtcclxuXHJcblx0XHQvLyBUd28gc29sdXRpb25zIChwZXJpbWV0ZXIgcG9pbnRzKVxyXG5cdFx0dmFyIHhvdXQxID0gKC1mICsgZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeG91dDIgPSAoLWYgLSBkZXQpIC8gKDIgKiBlKTtcclxuXHRcdHZhciB5b3V0MSA9IGQgKiB4b3V0MSArIGg7XHJcblx0XHR2YXIgeW91dDIgPSBkICogeG91dDIgKyBoO1xyXG5cdFx0dmFyIGRpc3QxID0gTWF0aC5zcXJ0KE1hdGgucG93KCh4b3V0MSAtIHB4KSwgMikgKyBNYXRoLnBvdygoeW91dDEgLSBweSksIDIpKTtcclxuXHRcdHZhciBkaXN0MiA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDIgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQyIC0gcHkpLCAyKSk7XHJcblxyXG5cdFx0Ly8gQ29ycmVjdCBzb2x1dGlvblxyXG5cdFx0dmFyIHhvdXQgPSAwO1xyXG5cdFx0dmFyIHlvdXQgPSAwO1xyXG5cclxuXHRcdGlmIChkaXN0MSA8IGRpc3QyKSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MTtcclxuXHRcdFx0eW91dCA9IHlvdXQxO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0eG91dCA9IHhvdXQyO1xyXG5cdFx0XHR5b3V0ID0geW91dDI7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHAgPSBuZXcgUG9pbnQoeG91dCwgeW91dCk7XHJcblx0XHRsZXQgZGlyID0gUmVjdGFuZ2xlLmdldERpcmVjdGlvbihyZWN0LCBwLCBvcnRob2dvbmFsKTtcclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChkaXIueCA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCAtIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueCA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4ICsgYSwgY3kpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci55ID09IC0xKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSAtIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGRpci55ID09IDEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3gsIGN5ICsgYiksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHtwb2ludDogcCwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9FbGxpcHNlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgUG9pbnQgZnJvbSBcIi4vUG9pbnRcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcblxyXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcclxuXHR0eXBlOiBcImRpcmVjdFwiLFxyXG5cdHNob3dHYXVnZTogdHJ1ZSxcclxuXHRvcnRob2dvbmFsOiBmYWxzZVxyXG59O1xyXG5cclxubGV0IGRlZmF1bHRHZW9tZXRyeSA9IHtcclxuXHR3aWR0aDogMCxcclxuXHRoZWlnaHQ6IDAsXHJcblx0YW5jaG9yWDogMCxcclxuXHRhbmNob3JZOiAwLFxyXG5cdG9mZnNldFg6IDAsXHJcblx0b2Zmc2V0WTogMFxyXG59O1xyXG5cclxubGV0IGxpbmtUeXBlcyA9IHt9O1xyXG5cclxuY2xhc3MgTGluayB7XHJcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xyXG5cdFx0dGhpcy5zdGFydCA9IHRlcm1pbmFsVmlzdWFsWzBdLnBvaW50O1xyXG5cdFx0dGhpcy5lbmQgPSB0ZXJtaW5hbFZpc3VhbFsxXS5wb2ludDtcclxuXHRcdHRoaXMuc3RhcnROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFswXS5kaXJlY3Rpb247XHJcblx0XHR0aGlzLmVuZE5vcm1hbCA9IHRlcm1pbmFsVmlzdWFsWzFdLmRpcmVjdGlvbjtcclxuXHRcdHRoaXMuc3RhcnRNYXJrZXIgPSBzdGFydE1hcmtlcjtcclxuXHRcdHRoaXMuZW5kTWFya2VyID0gZW5kTWFya2VyO1xyXG5cdFx0Xy5hc3NpZ24odGhpcywgc2hhcGVDb25maWcpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHZpZXcpIHtcclxuXHRcdHJldHVybiB2aWV3LnJlbmRlckxpbmsodGhpcyk7XHJcblx0fVxyXG5cclxuXHRnZXQgcG9pbnRzKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdGdldCBjb250cm9sUHRzKCkgeyByZXR1cm4gbnVsbDsgfVxyXG5cdGdldCBsZW5ndGgoKSB7XHJcblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHM7XHJcblx0XHRsZXQgaSwgbCA9IDA7XHJcblx0XHRmb3IgKGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKylcclxuXHRcdFx0bCArPSBwb2ludHNbaV0uZGlzdGFuY2UocG9pbnRzW2krMV0pO1xyXG5cdFx0cmV0dXJuIGw7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIHBvc2l0aW9uIHdoZXJlIHRvIHB1dCBtb2RpZmllcnMgb3IgbGFiZWwuLlxyXG5cdCAqXHJcblx0ICogQHBhcmFtIGdlb21ldHJ5OiBkZWZpbmVzIGhvdyBmYXIgYWxvbmcgdGhlIGVkZ2Ugc2hvdWxkIHRoZSBwb2ludCBiZSBwbGFjZWQuXHJcblx0ICogQHJldHVybiAqW10gdGhlIHJlbGF0aXZlIHBvc2l0aW9uLlxyXG5cdCAqL1xyXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcclxuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcclxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xyXG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xyXG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XHJcblx0XHRpZiAoTWF0aC5hYnMocCkgPD0gMSkgcCAqPSBsO1xyXG5cdFx0aWYgKHAgPCAwKSBwID0gbCArIHA7XHJcblx0XHRpZiAocCA+IGwpIHAgPSBsO1xyXG5cclxuXHRcdGxldCBwb2ludHMgPSB0aGlzLnBvaW50cywgZCwgcG9pbnQsIGRpcjtcclxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRkID0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcclxuXHRcdFx0aWYgKHAgPD0gZCkge1xyXG5cdFx0XHRcdC8vIHdlJ3ZlIGxvY2F0ZWQgdGhlIGxpbmUgc2VnbWVudC5cclxuXHRcdFx0XHRwb2ludCA9IHBvaW50c1tpXS5jbG9uZSgpO1xyXG5cdFx0XHRcdGRpciA9IHBvaW50LmdldERpcmVjdGlvbihwb2ludHNbaSsxXSk7XHJcblx0XHRcdFx0cG9pbnQudHJhbnNsYXRlKGRpci5nZXRTY2FsZWQocCkpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdHAgLT0gZDtcclxuXHRcdH1cclxuXHJcblx0XHQvLyByZXR1cm4gdGhlIGxhc3QgcG9pbnQuXHJcblx0XHRpZiAoIXBvaW50KVxyXG5cdFx0XHRwb2ludCA9IHBvaW50c1twb2ludHMubGVuZ3RoIC0gMV07XHJcblx0XHRyZXR1cm4gVXRpbHMub2Zmc2V0UG9zaXRpb24oW3BvaW50LngsIHBvaW50LnldLCBnZW9tZXRyeSk7XHJcblx0fVxyXG5cclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnTGluayc7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZ2V0TGluayh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcgPSB7fSwgc3RhcnRNYXJrZXIgPSBudWxsLCBlbmRNYXJrZXIgPSBudWxsKSB7XHJcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHNEZWVwKHNoYXBlQ29uZmlnLCBkZWZhdWx0Q29uZmlnKTtcclxuXHRcdGxldCBsaW5rQ2xhc3MgPSBsaW5rVHlwZXNbc2hhcGVDb25maWcudHlwZV07XHJcblx0XHRpZiAobGlua0NsYXNzKVxyXG5cdFx0XHRyZXR1cm4gbmV3IGxpbmtDbGFzcyh0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpO1xyXG5cdFx0Y29uc29sZS5sb2coJ2xpbmsgdHlwZSBub3Qgc3VwcG9ydGVkOiAnICsgc2hhcGVDb25maWcudHlwZSk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIERpcmVjdExpbmsgZXh0ZW5kcyBMaW5rIHtcclxuXHRnZXQgcG9pbnRzKCkge1xyXG5cdFx0cmV0dXJuIFt0aGlzLnN0YXJ0LCB0aGlzLmVuZF07XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBCZXppZXJMaW5rIGV4dGVuZHMgTGluayB7XHJcblx0Z2V0IHBvaW50cygpIHtcclxuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbnRyb2xQdHMoKSB7XHJcblx0XHRsZXQgcyA9IHRoaXMucG9pbnRzWzBdLCBlID0gdGhpcy5wb2ludHNbMV07XHJcblx0XHRsZXQgcHRzID0gW107XHJcblx0XHRwdHNbMF0gPSBudWxsO1xyXG5cdFx0cHRzWzFdID0gW107XHJcblx0XHRpZiAodGhpcy5zdGFydE5vcm1hbC54ID09IDApIHtcclxuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KHMueCwgKHMueSArIGUueSkvMik7XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cHRzWzFdWzBdID0gbmV3IFBvaW50KChzLnggKyBlLngpLzIsIHMueSk7XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5lbmROb3JtYWwueCA9PSAwKSB7XHJcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludChlLngsIChzLnkgKyBlLnkpLzIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHB0c1sxXVsxXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBlLnkpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHB0cztcclxuXHR9XHJcblxyXG5cdGdldFJlbGF0aXZlUG9zaXRpb24oZ2VvbWV0cnkpIHtcclxuXHRcdGlmIChfLmlzTnVtYmVyKGdlb21ldHJ5KSlcclxuXHRcdFx0Z2VvbWV0cnkgPSB7eDogZ2VvbWV0cnl9O1xyXG5cdFx0Z2VvbWV0cnkgPSBfLmRlZmF1bHRzKGdlb21ldHJ5LCBkZWZhdWx0R2VvbWV0cnkpO1xyXG5cdFx0bGV0IHAgPSBnZW9tZXRyeS54LCBsID0gdGhpcy5sZW5ndGg7XHJcblx0XHRpZiAoTWF0aC5hYnMocCkgPiAxKSBwIC89IGw7XHJcblx0XHRpZiAocCA8IDApIHArKztcclxuXHRcdGlmIChwID4gMSkgcC0tO1xyXG5cclxuXHRcdGxldCBwdHMgPSB0aGlzLnBvaW50cztcclxuXHRcdGxldCBjdHJscHRzID0gdGhpcy5jb250cm9sUHRzO1xyXG5cdFx0bGV0IHAxID0gcHRzWzBdO1xyXG5cdFx0bGV0IHAyID0gY3RybHB0c1sxXVswXTtcclxuXHRcdGxldCBwMyA9IGN0cmxwdHNbMV1bMV07XHJcblx0XHRsZXQgcDQgPSBwdHNbMV07XHJcblxyXG5cdFx0bGV0IHBvaW50ID0gWygxLXApKigxLXApKigxLXApICogcDEueCArIDMqcCooMS1wKSooMS1wKSAqIHAyLnggKyAzKnAqcCooMS1wKSAqIHAzLnggKyBwKnAqcCAqIHA0LngsICgxLXApKigxLXApKigxLXApICogcDEueSArIDMqcCooMS1wKSooMS1wKSAqIHAyLnkgKyAzKnAqcCooMS1wKSAqIHAzLnkgKyBwKnAqcCAqIHA0LnldO1xyXG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgRW50aXR5UmVsYXRpb25zIGV4dGVuZHMgTGluayB7XHJcblx0Z2V0IHBvaW50cygpIHtcclxuXHRcdHZhciBzb3VyY2UgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCB0cnVlKTtcclxuXHRcdHZhciB0YXJnZXQgPSBQb3J0LmdldEJvdW5kcyhlZGdlLCBmYWxzZSk7XHJcblx0XHR2YXIgaXNTb3VyY2VMZWZ0ID0gdGFyZ2V0LnJpZ2h0KCkgPCBzb3VyY2UueDtcclxuXHRcdHZhciBpc1RhcmdldExlZnQgPSBzb3VyY2UucmlnaHQoKSA8IHRhcmdldC54O1xyXG5cdFx0dmFyIHJlc3VsdCA9IFtdO1xyXG5cclxuXHRcdHZhciB4MCA9IChpc1NvdXJjZUxlZnQpID8gc291cmNlLnggOiBzb3VyY2UueCArIHNvdXJjZS53aWR0aDtcclxuXHRcdHZhciB5MCA9IHNvdXJjZS5nZXRDZW50ZXJZKCk7XHJcblx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeDAsIHkwKSk7XHJcblxyXG5cdFx0dmFyIHhlID0gKGlzVGFyZ2V0TGVmdCkgPyB0YXJnZXQueCA6IHRhcmdldC54ICsgdGFyZ2V0LndpZHRoO1xyXG5cdFx0dmFyIHllID0gdGFyZ2V0LmdldENlbnRlclkoKTtcclxuXHJcblx0XHR2YXIgc2VnID0gdGhpcy5zZWdtZW50O1xyXG5cclxuXHRcdHZhciBkeCA9IChpc1NvdXJjZUxlZnQpID8gLXNlZyA6IHNlZztcclxuXHRcdHZhciBkZXAgPSBuZXcgUG9pbnQoeDAgKyBkeCwgeTApO1xyXG5cclxuXHRcdGR4ID0gKGlzVGFyZ2V0TGVmdCkgPyAtc2VnIDogc2VnO1xyXG5cdFx0dmFyIGFyciA9IG5ldyBQb2ludCh4ZSArIGR4LCB5ZSk7XHJcblxyXG5cdFx0Ly8gQWRkcyBpbnRlcm1lZGlhdGUgcG9pbnRzIGlmIGJvdGggZ28gb3V0IG9uIHNhbWUgc2lkZVxyXG5cdFx0aWYgKGlzU291cmNlTGVmdCA9PSBpc1RhcmdldExlZnQpXHJcblx0XHR7XHJcblx0XHRcdHZhciB4ID0gKGlzU291cmNlTGVmdCkgP1xyXG5cdFx0XHRNYXRoLm1pbih4MCwgeGUpLXNlZyA6XHJcblx0XHRcdE1hdGgubWF4KHgwLCB4ZSkrc2VnO1xyXG5cclxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgsIHkwKSk7XHJcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5ZSkpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSBpZiAoKGRlcC54IDwgYXJyLngpID09IGlzU291cmNlTGVmdClcclxuXHRcdHtcclxuXHRcdFx0dmFyIG1pZFkgPSB5MCArICh5ZSAtIHkwKSAvIDI7XHJcblxyXG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xyXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoZGVwLngsIG1pZFkpKTtcclxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGFyci54LCBtaWRZKSk7XHJcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XHJcblx0XHR9XHJcblx0XHRlbHNlXHJcblx0XHR7XHJcblx0XHRcdHJlc3VsdC5wdXNoKGRlcCk7XHJcblx0XHRcdHJlc3VsdC5wdXNoKGFycik7XHJcblx0XHR9XHJcblxyXG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHhlLCB5ZSkpO1xyXG5cdFx0cmV0dXJuIHJlc3VsdDtcclxuXHR9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBNYW5oYXR0YW4gZXh0ZW5kcyBMaW5rIHtcclxuXHRjb25zdHJ1Y3Rvcih0ZXJtaW5hbFZpc3VhbCwgc2hhcGVDb25maWcsIHN0YXJ0TWFya2VyLCBlbmRNYXJrZXIpIHtcclxuXHRcdHNoYXBlQ29uZmlnID0gXy5kZWZhdWx0cyhzaGFwZUNvbmZpZywge1xyXG5cdFx0XHRNSU5fQlVGRkVSOiAxMCxcclxuXHRcdFx0YXV0b1JvdXRlOiBmYWxzZSxcclxuXHRcdFx0cmFuZG9tTm9pc2U6IDAsXHJcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXHJcblx0XHR9KTtcclxuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XHJcblx0fVxyXG5cclxuXHRnZXQgcG9pbnRzKCkge1xyXG5cdFx0bGV0IHBvcyA9IE1hbmhhdHRhbi5yb3V0ZSh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgdGhpcy5zdGFydE5vcm1hbCwgdGhpcy5lbmROb3JtYWwsIHRoaXMuTUlOX0JVRkZFUik7XHJcblx0XHRpZiAodGhpcy5hdXRvUm91dGUpIHtcclxuXHRcdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xyXG5cdFx0XHR2YXIgYm94ZXMgPSBbXSwgbm9kZSwgc3RhcnRCb3gsIGVuZEJveDtcclxuXHRcdFx0dmFyIGNvbnRhaW5lciA9IGVkZ2Uuc291cmNlLmdldENvbW1vbkFuY2VzdG9yKGVkZ2UudGFyZ2V0KTtcclxuXHRcdFx0dmFyIGNoaWxkTm9kZXMgPSBjb250YWluZXIuZ2V0RGVzY2VuZGFudHMoKTtcclxuXHRcdFx0dmFyIGluZGV4ID0gMDtcclxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bm9kZSA9IGNoaWxkTm9kZXNbaV07XHJcblx0XHRcdFx0Ly8gRG8gbm90IGluY2x1ZGUgc291cmNlIG9yIHRhcmdldCBhbmNlc3RvcnMgaW4gcm91dGluZy5cclxuXHRcdFx0XHRpZiAobm9kZS5leGNsdWRlRnJvbVJvdXRpbmcoZWRnZSkgfHwgbm9kZS5pc0FuY2VzdG9yKGVkZ2Uuc291cmNlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS50YXJnZXQpKSBjb250aW51ZTtcclxuXHRcdFx0XHRpZiAobm9kZSA9PSBlZGdlLnNvdXJjZSlcclxuXHRcdFx0XHRzdGFydEJveCA9IGluZGV4O1xyXG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2UudGFyZ2V0KVxyXG5cdFx0XHRcdGVuZEJveCA9IGluZGV4O1xyXG5cdFx0XHRcdGJveGVzLnB1c2gobm9kZS5nZXRCb3VuZHMoZG9jdW1lbnQpKTtcclxuXHRcdFx0XHRpbmRleCsrO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChib3hlcy5sZW5ndGggPiAxKVxyXG5cdFx0XHRcdHRoaXMuYXV0b1JvdXRlKHBvcywgY29udGFpbmVyLmdldEJvdW5kcyhkb2N1bWVudCksIGJveGVzLCBzdGFydEJveCwgZW5kQm94KTtcclxuXHRcdH1cclxuXHRcdE1hbmhhdHRhbi5fbWVyZ2VTZWdtZW50cyhwb3MpO1xyXG5cdFx0aWYgKHRoaXMucmFuZG9tTm9pc2UpIHtcclxuXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gcG9zO1xyXG5cdH1cclxuXHJcblx0Ly9OZXcgZnVuY3Rpb24gZm9yIGZpbmRpbmcgcm91dGVcclxuXHRzdGF0aWMgcm91dGUoc3RhcnQsIGVuZCwgc3RhcnROb3JtYWwsIGVuZE5vcm1hbCwgYnVmZmVyKSB7XHJcblx0XHR2YXIgc3RhcnRCdWZmZXIgPSBuZXcgUG9pbnQoc3RhcnQueCArIHN0YXJ0Tm9ybWFsLnggKiBidWZmZXIsIHN0YXJ0LnkgKyBzdGFydE5vcm1hbC55ICogYnVmZmVyKTtcclxuXHRcdHZhciBlbmRCdWZmZXIgPSBuZXcgUG9pbnQoZW5kLnggKyBlbmROb3JtYWwueCAqIGJ1ZmZlciwgZW5kLnkgKyBlbmROb3JtYWwueSAqIGJ1ZmZlcik7XHJcblx0XHR2YXIgc3RhcnRCdWZmZXJOb3JtYWwsIGVuZEJ1ZmZlck5vcm1hbDtcclxuXHRcdHZhciBwdHM7XHJcblx0XHRpZiAoc3RhcnROb3JtYWwueCAhPSAwKSB7XHJcblx0XHRcdGlmICgoZW5kQnVmZmVyLnggLSBzdGFydEJ1ZmZlci54KSAvIHN0YXJ0Tm9ybWFsLnggPiAwKSB7XHJcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgwLCAoZW5kQnVmZmVyLnkgPj0gc3RhcnRCdWZmZXIueSkgPyAxIDogLTEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKChlbmRCdWZmZXIueSAtIHN0YXJ0QnVmZmVyLnkpIC8gc3RhcnROb3JtYWwueSA+IDApIHtcclxuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KChlbmRCdWZmZXIueCA+PSBzdGFydEJ1ZmZlci54KSA/IDEgOiAtMSwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChlbmROb3JtYWwueCAhPSAwKSB7XHJcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueCAtIGVuZEJ1ZmZlci54KSAvIGVuZE5vcm1hbC54ID4gMCkge1xyXG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKHN0YXJ0QnVmZmVyLnkgPj0gZW5kQnVmZmVyLnkpID8gMSA6IC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueSAtIGVuZEJ1ZmZlci55KSAvIGVuZE5vcm1hbC55ID4gMCkge1xyXG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoKHN0YXJ0QnVmZmVyLnggPj0gZW5kQnVmZmVyLngpID8gMSA6IC0xLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPT0gMCkge1xyXG5cdFx0XHR2YXIgbWlkZGxlID0gKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkgPyBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgZW5kQnVmZmVyLnkpIDogbmV3IFBvaW50KGVuZEJ1ZmZlci54LCBzdGFydEJ1ZmZlci55KTtcclxuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbWlkZGxlLCBlbmRCdWZmZXIsIGVuZF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPCAwKSB7XHJcblx0XHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApIHtcclxuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBlbmRCdWZmZXIsIGVuZF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgc3RhcnRCdWZmZXIueSksIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIGVuZEJ1ZmZlci55KSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KHN0YXJ0QnVmZmVyLnggKyBzdGFydEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBzdGFydEJ1ZmZlci55ICsgc3RhcnRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIG5ldyBQb2ludChlbmRCdWZmZXIueCArIGVuZEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBlbmRCdWZmZXIueSArIGVuZEJ1ZmZlck5vcm1hbC55ICogYnVmZmVyKSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwcnVuZVB0cyA9IFtdO1xyXG5cdFx0cHJ1bmVQdHNbMF0gPSBwdHNbMF07XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHRcdFx0aWYgKChwdHNbaV0ueCA9PSBwdHNbaS0xXS54ICYmIHB0c1tpXS54ID09IHB0c1tpKzFdLngpIHx8IChwdHNbaV0ueSA9PSBwdHNbaS0xXS55ICYmIHB0c1tpXS55ID09IHB0c1tpKzFdLnkpKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJ1bmVQdHMucHVzaChwdHNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cHJ1bmVQdHMucHVzaChwdHNbcHRzLmxlbmd0aCAtIDFdKTtcclxuXHRcdHJldHVybiBwcnVuZVB0cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxyXG5cdCAqL1xyXG5cdGF1dG9Sb3V0ZShwdHMsIGNvbnRhaW5lciwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcclxuXHRcdHZhciBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XHJcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XHJcblxyXG5cdFx0dmFyIHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XHJcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxyXG5cdFx0Ym94ID0gYm94ZXNbZW5kQm94XTtcclxuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcclxuXHRcdGlmIChwdC55IDwgYm94LnkpXHJcblx0XHRcdHNpZGUgPSAxO1xyXG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcclxuXHRcdFx0c2lkZSA9IDM7XHJcblx0XHRlbHNlIGlmIChwdC54IDwgYm94LngpXHJcblx0XHRcdHNpZGUgPSAwO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzaWRlID0gMjtcclxuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xyXG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xyXG5cdFx0XHRpbnRlcnNlY3QgPSBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XHJcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcclxuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcclxuXHRcdFx0c2lkZSA9IGludGVyc2VjdFsxXTtcclxuXHRcdFx0Ym94ID0gYm94ZXNbal07XHJcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcclxuXHRcdFx0c3dpdGNoKHNpZGUpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQoKGNoYW5uZWwucmlnaHQgKyBjaGFubmVsLmxlZnQpLzIsIHB0c1tpXS55KTtcclxuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XHJcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcclxuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS55IC0gcHQueTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcclxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXHJcblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMCAmJiBwdC54IDw9IHB0c1tpXS54KSB8fCAoc2lkZSA9PSAyICYmIHB0LnggPj0gcHRzW2ldLngpKVxyXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXHJcblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcclxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcclxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQocHRzW2ldLngsIChjaGFubmVsLmJvdHRvbSArIGNoYW5uZWwudG9wKS8yKTtcclxuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XHJcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcclxuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS54IC0gcHQueDtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcclxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXHJcblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMSAmJiBwdC55IDw9IHB0c1tpXS55KSB8fCAoc2lkZSA9PSAzICYmIHB0LnkgPj0gcHRzW2ldLnkpKVxyXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXHJcblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcclxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcclxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBtYXggcG9pbnRzLlxyXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XHJcblx0XHRcdGlmIChwdCAmJiAocHQueCAhPSBwdHNbaV0ueCB8fCBwdC55ICE9IHB0c1tpXS55KSkge1xyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XHJcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHN0YXRpYyBfaGFzSW50ZXJzZWN0aW9uKHB0cywgYm94ZXMpIHtcclxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0aWYgKGJveGVzW2pdLmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKSA+PSAwKVxyXG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCkge1xyXG5cdFx0dmFyIGJveCwgc2lkZSwgc2F2ZWRJbmRleCA9IG51bGwsIHNhdmVkU2lkZSA9IG51bGw7XHJcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGJveGVzLmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdGlmICgoaSA9PSAwICYmIGogPT0gc3RhcnRCb3gpIHx8IChpID09IHB0cy5sZW5ndGggLSAyICYmIGogPT0gZW5kQm94KSlcclxuXHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0Ym94ID0gYm94ZXNbal07XHJcblx0XHRcdHNpZGUgPSBib3guZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pO1xyXG5cdFx0XHRpZiAoc2lkZSA+PSAwKSB7XHJcblx0XHRcdFx0aWYgKHNhdmVkSW5kZXggPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0c2F2ZWRJbmRleCA9IGo7XHJcblx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoYm94ZXNbc2F2ZWRJbmRleF0uZGlzdGFuY2UocHRzW2ldKSA+IGJveC5kaXN0YW5jZShwdHNbaV0pKSB7XHJcblx0XHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xyXG5cdFx0XHRcdFx0XHRzYXZlZFNpZGUgPSBzaWRlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0aWYgKHNhdmVkSW5kZXggIT0gbnVsbClcclxuXHRcdFx0cmV0dXJuIFtzYXZlZEluZGV4LCBzYXZlZFNpZGVdO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG5cclxuXHRfZ2V0Um91dGVUZW5kZW5jeShwdHMsIGksIGJyZWFrUHQsIGJveCwgc2lkZSkge1xyXG5cdFx0dmFyIGRpcjtcclxuXHRcdHZhciBwO1xyXG5cdFx0c3dpdGNoIChzaWRlKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdHAgPSBcInlcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAxOlxyXG5cdFx0XHRjYXNlIDM6XHJcblx0XHRcdFx0cCA9IFwieFwiO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0fVxyXG5cdFx0Ly9maXJzdCB0cnkgdGhlIGJyZWFrcHQuXHJcblx0XHRkaXIgPSBfZ2V0Um91dGVEaXJlY3Rpb24oYnJlYWtQdCwgcHRzW3B0cy5sZW5ndGggLSAxXSlbcF07XHJcblx0XHRpZiAoZGlyID09IDApIHtcclxuXHRcdFx0ZGlyID0gLV9nZXRSb3V0ZURpcmVjdGlvbihwdHNbMF0sIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xyXG5cdFx0XHRpZiAoZGlyID09IDApIHtcclxuXHRcdFx0XHRpZiAoYnJlYWtQdFtwXSA8IGJveC5nZXRDZW50ZXIoKVtwXSlcclxuXHRcdFx0XHRcdGRpciA9IC0xO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGRpciA9IDE7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiBkaXI7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgX2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcclxuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcclxuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcclxuXHRcdFx0aWYgKHB0MS54IDwgcHQyLngpIHJldHVybiBQb2ludC5FO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcclxuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xyXG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNFO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNXO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xyXG5cdFx0dmFyIG1heENoYW5uZWxXaWR0aCA9IHRoaXMubWF4Q2hhbm5lbFdpZHRoO1xyXG5cdFx0dmFyIGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XHJcblx0XHR2YXIgcHQsIGk7XHJcblx0XHR2YXIgY2hhbm5lbCA9IHt9LCBsLCB0LCBiLCByO1xyXG5cdFx0c3dpdGNoIChzaWRlKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0TGVmdCgpO1xyXG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xyXG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyID49IHB0LngpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcclxuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cHQgPSBib3gxLmdldFRvcCgpO1xyXG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XHJcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHRpZiAoYiA+PSBwdC55KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcclxuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcclxuXHRcdFx0XHRjaGFubmVsLmxlZnQgPSBwdC54O1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0bCA9IGJveGVzW2ldLmdldExlZnQoKS54O1xyXG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XHJcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xyXG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcclxuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XHJcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcclxuXHRcdFx0XHRjaGFubmVsLnRvcCA9IHB0Lnk7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBib3gyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBjaGFubmVsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxyXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cclxuXHQgKiBAcGFyYW0gZCB0aGUgZGlzdGFuY2UgdG8gbW92ZS5cclxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXHJcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcclxuXHQgKi9cclxuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxyXG5cdFx0dmFyIGRpciwgbCwgcHQ7XHJcblx0XHRpZiAoaSA9PSAwKSB7XHJcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxyXG5cdFx0XHRkaXIgPSBwdHNbMF0uZ2V0RGlyZWN0aW9uKHB0c1sxXSk7XHJcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxyXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcclxuXHRcdFx0bCA9IE1hdGgubWluKHN0YXJ0UGFkZGluZywgcHRzWzBdLmRpc3RhbmNlKHB0c1sxXSkvMik7XHJcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcclxuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XHJcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XHJcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cclxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcclxuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxyXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XHJcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XHJcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XHJcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcclxuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHRzW2ldLnkgPT0gcHRzW2krMV0ueSkge1xyXG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XHJcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcclxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcclxuXHRcdFx0cHRzW2ldLnkgKz0gZDtcclxuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXHJcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XHJcblx0XHRcdHB0c1tpXS54ICs9IGQ7XHJcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cclxuXHQgKi9cclxuXHRzdGF0aWMgX21lcmdlU2VnbWVudHMocHRzKSB7XHJcblx0XHR2YXIgaDEgPSBwdHNbcHRzLmxlbmd0aC0xXS55ID09IHB0c1twdHMubGVuZ3RoLTJdLnk7XHJcblx0XHR2YXIgaDI7XHJcblx0XHRmb3IgKHZhciBpID0gcHRzLmxlbmd0aCAtIDI7IGkgPj0gMTsgaS0tKSB7XHJcblx0XHRcdGgyID0gcHRzW2ldLnkgPT0gcHRzW2ktMV0ueTtcclxuXHRcdFx0aWYgKGgyID09IGgxIHx8IChwdHNbaV0uZXF1YWxzKHB0c1tpLTFdKSkpXHJcblx0XHRcdFx0cHRzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHRcdGgxID0gIWgxO1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxubGlua1R5cGVzWydkaXJlY3QnXSA9IERpcmVjdExpbms7XHJcbmxpbmtUeXBlc1snYmV6aWVyJ10gPSBCZXppZXJMaW5rO1xyXG5saW5rVHlwZXNbJ2VudGl0eVJlbGF0aW9ucyddID0gRW50aXR5UmVsYXRpb25zO1xyXG5saW5rVHlwZXNbJ21hbmhhdHRhbiddID0gTWFuaGF0dGFuO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGluaztcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvTGluay5qc1xuICoqLyIsIi8qIVxuICAqIEJlYW4gLSBjb3B5cmlnaHQgKGMpIEphY29iIFRob3JudG9uIDIwMTEtMjAxMlxuICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYXQvYmVhblxuICAqIE1JVCBsaWNlbnNlXG4gICovXG4oZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQsIGRlZmluaXRpb24pIHtcbiAgaWYgKHR5cGVvZiBtb2R1bGUgIT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIG1vZHVsZS5leHBvcnRzID0gZGVmaW5pdGlvbigpXG4gIGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoZGVmaW5pdGlvbilcbiAgZWxzZSBjb250ZXh0W25hbWVdID0gZGVmaW5pdGlvbigpXG59KSgnYmVhbicsIHRoaXMsIGZ1bmN0aW9uIChuYW1lLCBjb250ZXh0KSB7XG4gIG5hbWUgICAgPSBuYW1lICAgIHx8ICdiZWFuJ1xuICBjb250ZXh0ID0gY29udGV4dCB8fCB0aGlzXG5cbiAgdmFyIHdpbiAgICAgICAgICAgID0gd2luZG93XG4gICAgLCBvbGQgICAgICAgICAgICA9IGNvbnRleHRbbmFtZV1cbiAgICAsIG5hbWVzcGFjZVJlZ2V4ID0gL1teXFwuXSooPz1cXC4uKilcXC58LiovXG4gICAgLCBuYW1lUmVnZXggICAgICA9IC9cXC4uKi9cbiAgICAsIGFkZEV2ZW50ICAgICAgID0gJ2FkZEV2ZW50TGlzdGVuZXInXG4gICAgLCByZW1vdmVFdmVudCAgICA9ICdyZW1vdmVFdmVudExpc3RlbmVyJ1xuICAgICwgZG9jICAgICAgICAgICAgPSBkb2N1bWVudCB8fCB7fVxuICAgICwgcm9vdCAgICAgICAgICAgPSBkb2MuZG9jdW1lbnRFbGVtZW50IHx8IHt9XG4gICAgLCBXM0NfTU9ERUwgICAgICA9IHJvb3RbYWRkRXZlbnRdXG4gICAgLCBldmVudFN1cHBvcnQgICA9IFczQ19NT0RFTCA/IGFkZEV2ZW50IDogJ2F0dGFjaEV2ZW50J1xuICAgICwgT05FICAgICAgICAgICAgPSB7fSAvLyBzaW5nbGV0b24gZm9yIHF1aWNrIG1hdGNoaW5nIG1ha2luZyBhZGQoKSBkbyBvbmUoKVxuXG4gICAgLCBzbGljZSAgICAgICAgICA9IEFycmF5LnByb3RvdHlwZS5zbGljZVxuICAgICwgc3RyMmFyciAgICAgICAgPSBmdW5jdGlvbiAocywgZCkgeyByZXR1cm4gcy5zcGxpdChkIHx8ICcgJykgfVxuICAgICwgaXNTdHJpbmcgICAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ3N0cmluZycgfVxuICAgICwgaXNGdW5jdGlvbiAgICAgPSBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG8gPT0gJ2Z1bmN0aW9uJyB9XG5cbiAgICAgIC8vIGV2ZW50cyB0aGF0IHdlIGNvbnNpZGVyIHRvIGJlICduYXRpdmUnLCBhbnl0aGluZyBub3QgaW4gdGhpcyBsaXN0IHdpbGxcbiAgICAgIC8vIGJlIHRyZWF0ZWQgYXMgYSBjdXN0b20gZXZlbnRcbiAgICAsIHN0YW5kYXJkTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ2NsaWNrIGRibGNsaWNrIG1vdXNldXAgbW91c2Vkb3duIGNvbnRleHRtZW51ICcgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ21vdXNld2hlZWwgbW91c2VtdWx0aXdoZWVsIERPTU1vdXNlU2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIHdoZWVsXG4gICAgICAgICdtb3VzZW92ZXIgbW91c2VvdXQgbW91c2Vtb3ZlIHNlbGVjdHN0YXJ0IHNlbGVjdGVuZCAnICAgICAgICAgICAgKyAvLyBtb3VzZSBtb3ZlbWVudFxuICAgICAgICAna2V5ZG93biBrZXlwcmVzcyBrZXl1cCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8ga2V5Ym9hcmRcbiAgICAgICAgJ29yaWVudGF0aW9uY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vYmlsZVxuICAgICAgICAnZm9jdXMgYmx1ciBjaGFuZ2UgcmVzZXQgc2VsZWN0IHN1Ym1pdCAnICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAnbG9hZCB1bmxvYWQgYmVmb3JldW5sb2FkIHJlc2l6ZSBtb3ZlIERPTUNvbnRlbnRMb2FkZWQgJyAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdyZWFkeXN0YXRlY2hhbmdlIG1lc3NhZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2Vycm9yIGFib3J0IHNjcm9sbCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG1pc2NcbiAgICAgIC8vIGVsZW1lbnQuZmlyZUV2ZW50KCdvblhZWicuLi4gaXMgbm90IGZvcmdpdmluZyBpZiB3ZSB0cnkgdG8gZmlyZSBhbiBldmVudFxuICAgICAgLy8gdGhhdCBkb2Vzbid0IGFjdHVhbGx5IGV4aXN0LCBzbyBtYWtlIHN1cmUgd2Ugb25seSBkbyB0aGVzZSBvbiBuZXdlciBicm93c2Vyc1xuICAgICwgdzNjTmF0aXZlRXZlbnRzID1cbiAgICAgICAgJ3Nob3cgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1vdXNlIGJ1dHRvbnNcbiAgICAgICAgJ2lucHV0IGludmFsaWQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGZvcm0gZWxlbWVudHNcbiAgICAgICAgJ3RvdWNoc3RhcnQgdG91Y2htb3ZlIHRvdWNoZW5kIHRvdWNoY2FuY2VsICcgICAgICAgICAgICAgICAgICAgICArIC8vIHRvdWNoXG4gICAgICAgICdnZXN0dXJlc3RhcnQgZ2VzdHVyZWNoYW5nZSBnZXN0dXJlZW5kICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBnZXN0dXJlXG4gICAgICAgICd0ZXh0aW5wdXQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBUZXh0RXZlbnRcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgcGFnZXNob3cgcGFnZWhpZGUgcG9wc3RhdGUgJyAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnaGFzaGNoYW5nZSBvZmZsaW5lIG9ubGluZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdhZnRlcnByaW50IGJlZm9yZXByaW50ICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBwcmludGluZ1xuICAgICAgICAnZHJhZ3N0YXJ0IGRyYWdlbnRlciBkcmFnb3ZlciBkcmFnbGVhdmUgZHJhZyBkcm9wIGRyYWdlbmQgJyAgICAgICsgLy8gZG5kXG4gICAgICAgICdsb2Fkc3RhcnQgcHJvZ3Jlc3Mgc3VzcGVuZCBlbXB0aWVkIHN0YWxsZWQgbG9hZG1ldGFkYXRhICcgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnbG9hZGVkZGF0YSBjYW5wbGF5IGNhbnBsYXl0aHJvdWdoIHBsYXlpbmcgd2FpdGluZyBzZWVraW5nICcgICAgICsgLy8gbWVkaWFcbiAgICAgICAgJ3NlZWtlZCBlbmRlZCBkdXJhdGlvbmNoYW5nZSB0aW1ldXBkYXRlIHBsYXkgcGF1c2UgcmF0ZWNoYW5nZSAnICArIC8vIG1lZGlhXG4gICAgICAgICd2b2x1bWVjaGFuZ2UgY3VlY2hhbmdlICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnY2hlY2tpbmcgbm91cGRhdGUgZG93bmxvYWRpbmcgY2FjaGVkIHVwZGF0ZXJlYWR5IG9ic29sZXRlICcgICAgICAgLy8gYXBwY2FjaGVcblxuICAgICAgLy8gY29udmVydCB0byBhIGhhc2ggZm9yIHF1aWNrIGxvb2t1cHNcbiAgICAsIG5hdGl2ZUV2ZW50cyA9IChmdW5jdGlvbiAoaGFzaCwgZXZlbnRzLCBpKSB7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBldmVudHMubGVuZ3RoOyBpKyspIGV2ZW50c1tpXSAmJiAoaGFzaFtldmVudHNbaV1dID0gMSlcbiAgICAgICAgcmV0dXJuIGhhc2hcbiAgICAgIH0oe30sIHN0cjJhcnIoc3RhbmRhcmROYXRpdmVFdmVudHMgKyAoVzNDX01PREVMID8gdzNjTmF0aXZlRXZlbnRzIDogJycpKSkpXG5cbiAgICAgIC8vIGN1c3RvbSBldmVudHMgYXJlIGV2ZW50cyB0aGF0IHdlICpmYWtlKiwgdGhleSBhcmUgbm90IHByb3ZpZGVkIG5hdGl2ZWx5IGJ1dFxuICAgICAgLy8gd2UgY2FuIHVzZSBuYXRpdmUgZXZlbnRzIHRvIGdlbmVyYXRlIHRoZW1cbiAgICAsIGN1c3RvbUV2ZW50cyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpc0FuY2VzdG9yID0gJ2NvbXBhcmVEb2N1bWVudFBvc2l0aW9uJyBpbiByb290XG4gICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lci5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiAoY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKGVsZW1lbnQpICYgMTYpID09PSAxNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiAnY29udGFpbnMnIGluIHJvb3RcbiAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gY29udGFpbmVyLm5vZGVUeXBlID09PSA5IHx8IGNvbnRhaW5lciA9PT0gd2luZG93ID8gcm9vdCA6IGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyICE9PSBlbGVtZW50ICYmIGNvbnRhaW5lci5jb250YWlucyhlbGVtZW50KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWxlbWVudCA9IGVsZW1lbnQucGFyZW50Tm9kZSkgaWYgKGVsZW1lbnQgPT09IGNvbnRhaW5lcikgcmV0dXJuIDFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAsIGNoZWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciByZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldFxuICAgICAgICAgICAgICByZXR1cm4gIXJlbGF0ZWRcbiAgICAgICAgICAgICAgICA/IHJlbGF0ZWQgPT0gbnVsbFxuICAgICAgICAgICAgICAgIDogKHJlbGF0ZWQgIT09IHRoaXMgJiYgcmVsYXRlZC5wcmVmaXggIT09ICd4dWwnICYmICEvZG9jdW1lbnQvLnRlc3QodGhpcy50b1N0cmluZygpKVxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNBbmNlc3RvcihyZWxhdGVkLCB0aGlzKSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW91c2VlbnRlcjogeyBiYXNlOiAnbW91c2VvdmVyJywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZWxlYXZlOiB7IGJhc2U6ICdtb3VzZW91dCcsIGNvbmRpdGlvbjogY2hlY2sgfVxuICAgICAgICAgICwgbW91c2V3aGVlbDogeyBiYXNlOiAvRmlyZWZveC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSA/ICdET01Nb3VzZVNjcm9sbCcgOiAnbW91c2V3aGVlbCcgfVxuICAgICAgICB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIHByb3ZpZGUgYSBjb25zaXN0ZW50IEV2ZW50IG9iamVjdCBhY3Jvc3MgYnJvd3NlcnMgYnkgdGFraW5nIHRoZSBhY3R1YWwgRE9NXG4gICAgICAvLyBldmVudCBvYmplY3QgYW5kIGdlbmVyYXRpbmcgYSBuZXcgb25lIGZyb20gaXRzIHByb3BlcnRpZXMuXG4gICAgLCBFdmVudCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBhIHdoaXRlbGlzdCBvZiBwcm9wZXJ0aWVzIChmb3IgZGlmZmVyZW50IGV2ZW50IHR5cGVzKSB0ZWxscyB1cyB3aGF0IHRvIGNoZWNrIGZvciBhbmQgY29weVxuICAgICAgICB2YXIgY29tbW9uUHJvcHMgID0gc3RyMmFycignYWx0S2V5IGF0dHJDaGFuZ2UgYXR0ck5hbWUgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCAnICtcbiAgICAgICAgICAgICAgJ2RldGFpbCBldmVudFBoYXNlIGdldE1vZGlmaWVyU3RhdGUgaXNUcnVzdGVkIG1ldGFLZXkgcmVsYXRlZE5vZGUgcmVsYXRlZFRhcmdldCBzaGlmdEtleSAnICArXG4gICAgICAgICAgICAgICdzcmNFbGVtZW50IHRhcmdldCB0aW1lU3RhbXAgdHlwZSB2aWV3IHdoaWNoIHByb3BlcnR5TmFtZScpXG4gICAgICAgICAgLCBtb3VzZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIGRhdGFUcmFuc2ZlciAnICAgICAgK1xuICAgICAgICAgICAgICAnZnJvbUVsZW1lbnQgb2Zmc2V0WCBvZmZzZXRZIHBhZ2VYIHBhZ2VZIHNjcmVlblggc2NyZWVuWSB0b0VsZW1lbnQnKSlcbiAgICAgICAgICAsIG1vdXNlV2hlZWxQcm9wcyA9IG1vdXNlUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3doZWVsRGVsdGEgd2hlZWxEZWx0YVggd2hlZWxEZWx0YVkgd2hlZWxEZWx0YVogJyArXG4gICAgICAgICAgICAgICdheGlzJykpIC8vICdheGlzJyBpcyBGRiBzcGVjaWZpY1xuICAgICAgICAgICwga2V5UHJvcHMgICAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2NoYXIgY2hhckNvZGUga2V5IGtleUNvZGUga2V5SWRlbnRpZmllciAnICAgICAgICAgICtcbiAgICAgICAgICAgICAgJ2tleUxvY2F0aW9uIGxvY2F0aW9uJykpXG4gICAgICAgICAgLCB0ZXh0UHJvcHMgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YScpKVxuICAgICAgICAgICwgdG91Y2hQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3RvdWNoZXMgdGFyZ2V0VG91Y2hlcyBjaGFuZ2VkVG91Y2hlcyBzY2FsZSByb3RhdGlvbicpKVxuICAgICAgICAgICwgbWVzc2FnZVByb3BzID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ2RhdGEgb3JpZ2luIHNvdXJjZScpKVxuICAgICAgICAgICwgc3RhdGVQcm9wcyAgID0gY29tbW9uUHJvcHMuY29uY2F0KHN0cjJhcnIoJ3N0YXRlJykpXG4gICAgICAgICAgLCBvdmVyT3V0UmVnZXggPSAvb3ZlcnxvdXQvXG4gICAgICAgICAgICAvLyBzb21lIGV2ZW50IHR5cGVzIG5lZWQgc3BlY2lhbCBoYW5kbGluZyBhbmQgc29tZSBuZWVkIHNwZWNpYWwgcHJvcGVydGllcywgZG8gdGhhdCBhbGwgaGVyZVxuICAgICAgICAgICwgdHlwZUZpeGVycyAgID0gW1xuICAgICAgICAgICAgICAgIHsgLy8ga2V5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9rZXkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5rZXlDb2RlID0gZXZlbnQua2V5Q29kZSB8fCBldmVudC53aGljaFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBrZXlQcm9wc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gbW91c2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2NsaWNrfG1vdXNlKD8hKC4qd2hlZWx8c2Nyb2xsKSl8bWVudXxkcmFnfGRyb3AvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uIChldmVudCwgbmV3RXZlbnQsIHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5yaWdodENsaWNrID0gZXZlbnQud2hpY2ggPT09IDMgfHwgZXZlbnQuYnV0dG9uID09PSAyXG4gICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucG9zID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQucGFnZVggfHwgZXZlbnQucGFnZVkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5wYWdlWFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LnBhZ2VZXG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChldmVudC5jbGllbnRYIHx8IGV2ZW50LmNsaWVudFkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmNsaWVudFggPSBldmVudC5jbGllbnRYICsgZG9jLmJvZHkuc2Nyb2xsTGVmdCArIHJvb3Quc2Nyb2xsTGVmdFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WSA9IGV2ZW50LmNsaWVudFkgKyBkb2MuYm9keS5zY3JvbGxUb3AgKyByb290LnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAob3Zlck91dFJlZ2V4LnRlc3QodHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJlbGF0ZWRUYXJnZXQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGV2ZW50Wyh0eXBlID09ICdtb3VzZW92ZXInID8gJ2Zyb20nIDogJ3RvJykgKyAnRWxlbWVudCddXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBtb3VzZVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSB3aGVlbCBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvbW91c2UuKih3aGVlbHxzY3JvbGwpL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBtb3VzZVdoZWVsUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIFRleHRFdmVudFxuICAgICAgICAgICAgICAgICAgICByZWc6IC9edGV4dC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGV4dFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyB0b3VjaCBhbmQgZ2VzdHVyZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnRvdWNofF5nZXN0dXJlL2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0b3VjaFByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtZXNzYWdlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9ebWVzc2FnZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1lc3NhZ2VQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gcG9wc3RhdGUgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15wb3BzdGF0ZSQvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHN0YXRlUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIGV2ZXJ5dGhpbmcgZWxzZVxuICAgICAgICAgICAgICAgICAgICByZWc6IC8uKi9cbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjb21tb25Qcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICwgdHlwZUZpeGVyTWFwID0ge30gLy8gdXNlZCB0byBtYXAgZXZlbnQgdHlwZXMgdG8gZml4ZXIgZnVuY3Rpb25zIChhYm92ZSksIGEgYmFzaWMgY2FjaGUgbWVjaGFuaXNtXG5cbiAgICAgICAgICAsIEV2ZW50ID0gZnVuY3Rpb24gKGV2ZW50LCBlbGVtZW50LCBpc05hdGl2ZSkge1xuICAgICAgICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHJldHVyblxuICAgICAgICAgICAgICBldmVudCA9IGV2ZW50IHx8ICgoZWxlbWVudC5vd25lckRvY3VtZW50IHx8IGVsZW1lbnQuZG9jdW1lbnQgfHwgZWxlbWVudCkucGFyZW50V2luZG93IHx8IHdpbikuZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbEV2ZW50ID0gZXZlbnRcbiAgICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgICA9IGlzTmF0aXZlXG4gICAgICAgICAgICAgIHRoaXMuaXNCZWFuICAgICAgICAgPSB0cnVlXG5cbiAgICAgICAgICAgICAgaWYgKCFldmVudCkgcmV0dXJuXG5cbiAgICAgICAgICAgICAgdmFyIHR5cGUgICA9IGV2ZW50LnR5cGVcbiAgICAgICAgICAgICAgICAsIHRhcmdldCA9IGV2ZW50LnRhcmdldCB8fCBldmVudC5zcmNFbGVtZW50XG4gICAgICAgICAgICAgICAgLCBpLCBsLCBwLCBwcm9wcywgZml4ZXJcblxuICAgICAgICAgICAgICB0aGlzLnRhcmdldCA9IHRhcmdldCAmJiB0YXJnZXQubm9kZVR5cGUgPT09IDMgPyB0YXJnZXQucGFyZW50Tm9kZSA6IHRhcmdldFxuXG4gICAgICAgICAgICAgIGlmIChpc05hdGl2ZSkgeyAvLyB3ZSBvbmx5IG5lZWQgYmFzaWMgYXVnbWVudGF0aW9uIG9uIGN1c3RvbSBldmVudHMsIHRoZSByZXN0IGV4cGVuc2l2ZSAmIHBvaW50bGVzc1xuICAgICAgICAgICAgICAgIGZpeGVyID0gdHlwZUZpeGVyTWFwW3R5cGVdXG4gICAgICAgICAgICAgICAgaWYgKCFmaXhlcikgeyAvLyBoYXZlbid0IGVuY291bnRlcmVkIHRoaXMgZXZlbnQgdHlwZSBiZWZvcmUsIG1hcCBhIGZpeGVyIGZ1bmN0aW9uIGZvciBpdFxuICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IHR5cGVGaXhlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlRml4ZXJzW2ldLnJlZy50ZXN0KHR5cGUpKSB7IC8vIGd1YXJhbnRlZWQgdG8gbWF0Y2ggYXQgbGVhc3Qgb25lLCBsYXN0IGlzIC4qXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZUZpeGVyTWFwW3R5cGVdID0gZml4ZXIgPSB0eXBlRml4ZXJzW2ldLmZpeFxuICAgICAgICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBwcm9wcyA9IGZpeGVyKGV2ZW50LCB0aGlzLCB0eXBlKVxuICAgICAgICAgICAgICAgIGZvciAoaSA9IHByb3BzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCEoKHAgPSBwcm9wc1tpXSkgaW4gdGhpcykgJiYgcCBpbiBldmVudCkgdGhpc1twXSA9IGV2ZW50W3BdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgLy8gcHJldmVudERlZmF1bHQoKSBhbmQgc3RvcFByb3BhZ2F0aW9uKCkgYXJlIGEgY29uc2lzdGVudCBpbnRlcmZhY2UgdG8gdGhvc2UgZnVuY3Rpb25zXG4gICAgICAgIC8vIG9uIHRoZSBET00sIHN0b3AoKSBpcyBhbiBhbGlhcyBmb3IgYm90aCBvZiB0aGVtIHRvZ2V0aGVyXG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5wcmV2ZW50RGVmYXVsdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnByZXZlbnREZWZhdWx0KSB0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LnJldHVyblZhbHVlID0gZmFsc2VcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICBlbHNlIHRoaXMub3JpZ2luYWxFdmVudC5jYW5jZWxCdWJibGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgdGhpcy5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgdGhpcy5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIHRoaXMuc3RvcHBlZCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICAvLyBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgdG8gYmUgaGFuZGxlZCBpbnRlcm5hbGx5IGJlY2F1c2Ugd2UgbWFuYWdlIHRoZSBldmVudCBsaXN0IGZvclxuICAgICAgICAvLyBlYWNoIGVsZW1lbnRcbiAgICAgICAgLy8gbm90ZSB0aGF0IG9yaWdpbmFsRWxlbWVudCBtYXkgYmUgYSBCZWFuI0V2ZW50IG9iamVjdCBpbiBzb21lIHNpdHVhdGlvbnNcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbikgdGhpcy5vcmlnaW5hbEV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRydWUgfVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkICYmIHRoaXMub3JpZ2luYWxFdmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpXG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKGN1cnJlbnRUYXJnZXQpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgaXMgcmlwZSBmb3Igb3B0aW1pc2F0aW9uLCBuZXcgZXZlbnRzIGFyZSAqZXhwZW5zaXZlKlxuICAgICAgICAgIC8vIGltcHJvdmluZyB0aGlzIHdpbGwgc3BlZWQgdXAgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIHZhciBuZSA9IG5ldyBFdmVudCh0aGlzLCB0aGlzLmVsZW1lbnQsIHRoaXMuaXNOYXRpdmUpXG4gICAgICAgICAgbmUuY3VycmVudFRhcmdldCA9IGN1cnJlbnRUYXJnZXRcbiAgICAgICAgICByZXR1cm4gbmVcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBFdmVudFxuICAgICAgfSgpKVxuXG4gICAgICAvLyBpZiB3ZSdyZSBpbiBvbGQgSUUgd2UgY2FuJ3QgZG8gb25wcm9wZXJ0eWNoYW5nZSBvbiBkb2Mgb3Igd2luIHNvIHdlIHVzZSBkb2MuZG9jdW1lbnRFbGVtZW50IGZvciBib3RoXG4gICAgLCB0YXJnZXRFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgIHJldHVybiAhVzNDX01PREVMICYmICFpc05hdGl2ZSAmJiAoZWxlbWVudCA9PT0gZG9jIHx8IGVsZW1lbnQgPT09IHdpbikgPyByb290IDogZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBCZWFuIG1haW50YWlucyBhbiBpbnRlcm5hbCByZWdpc3RyeSBmb3IgZXZlbnQgbGlzdGVuZXJzLiBXZSBkb24ndCB0b3VjaCBlbGVtZW50cywgb2JqZWN0c1xuICAgICAgICAqIG9yIGZ1bmN0aW9ucyB0byBpZGVudGlmeSB0aGVtLCBpbnN0ZWFkIHdlIHN0b3JlIGV2ZXJ5dGhpbmcgaW4gdGhlIHJlZ2lzdHJ5LlxuICAgICAgICAqIEVhY2ggZXZlbnQgbGlzdGVuZXIgaGFzIGEgUmVnRW50cnkgb2JqZWN0LCB3ZSBoYXZlIG9uZSAncmVnaXN0cnknIGZvciB0aGUgd2hvbGUgaW5zdGFuY2UuXG4gICAgICAgICovXG4gICAgLCBSZWdFbnRyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGVhY2ggaGFuZGxlciBpcyB3cmFwcGVkIHNvIHdlIGNhbiBoYW5kbGUgZGVsZWdhdGlvbiBhbmQgY3VzdG9tIGV2ZW50c1xuICAgICAgICB2YXIgd3JhcHBlZEhhbmRsZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgZm4sIGNvbmRpdGlvbiwgYXJncykge1xuICAgICAgICAgICAgdmFyIGNhbGwgPSBmdW5jdGlvbiAoZXZlbnQsIGVhcmdzKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkoZWxlbWVudCwgYXJncyA/IHNsaWNlLmNhbGwoZWFyZ3MsIGV2ZW50ID8gMCA6IDEpLmNvbmNhdChhcmdzKSA6IGVhcmdzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBldmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5fX2JlYW5EZWwgPyBmbi5fX2JlYW5EZWwuZnQoZXZlbnQudGFyZ2V0LCBlbGVtZW50KSA6IGV2ZW50RWxlbWVudFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCBoYW5kbGVyID0gY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgICA/IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSBmaW5kVGFyZ2V0KGV2ZW50LCB0aGlzKSAvLyBkZWxlYXRlZCBldmVudFxuICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBwbHkodGFyZ2V0LCBhcmd1bWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQpIGV2ZW50LmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChmbi5fX2JlYW5EZWwpIGV2ZW50ID0gZXZlbnQuY2xvbmUoZmluZFRhcmdldChldmVudCkpIC8vIGRlbGVnYXRlZCBldmVudCwgZml4IHRoZSBmaXhcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FsbChldmVudCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IGZuLl9fYmVhbkRlbFxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgICAgICB9XG5cbiAgICAgICAgLCBSZWdFbnRyeSA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbCwgbmFtZXNwYWNlcywgYXJncywgcm9vdCkge1xuICAgICAgICAgICAgdmFyIGN1c3RvbVR5cGUgICAgID0gY3VzdG9tRXZlbnRzW3R5cGVdXG4gICAgICAgICAgICAgICwgaXNOYXRpdmVcblxuICAgICAgICAgICAgaWYgKHR5cGUgPT0gJ3VubG9hZCcpIHtcbiAgICAgICAgICAgICAgLy8gc2VsZiBjbGVhbi11cFxuICAgICAgICAgICAgICBoYW5kbGVyID0gb25jZShyZW1vdmVMaXN0ZW5lciwgZWxlbWVudCwgdHlwZSwgaGFuZGxlciwgb3JpZ2luYWwpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjdXN0b21UeXBlKSB7XG4gICAgICAgICAgICAgIGlmIChjdXN0b21UeXBlLmNvbmRpdGlvbikge1xuICAgICAgICAgICAgICAgIGhhbmRsZXIgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBjdXN0b21UeXBlLmNvbmRpdGlvbiwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0eXBlID0gY3VzdG9tVHlwZS5iYXNlIHx8IHR5cGVcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5pc05hdGl2ZSAgICAgID0gaXNOYXRpdmUgPSBuYXRpdmVFdmVudHNbdHlwZV0gJiYgISFlbGVtZW50W2V2ZW50U3VwcG9ydF1cbiAgICAgICAgICAgIHRoaXMuY3VzdG9tVHlwZSAgICA9ICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIHR5cGVcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudCAgICAgICA9IGVsZW1lbnRcbiAgICAgICAgICAgIHRoaXMudHlwZSAgICAgICAgICA9IHR5cGVcbiAgICAgICAgICAgIHRoaXMub3JpZ2luYWwgICAgICA9IG9yaWdpbmFsXG4gICAgICAgICAgICB0aGlzLm5hbWVzcGFjZXMgICAgPSBuYW1lc3BhY2VzXG4gICAgICAgICAgICB0aGlzLmV2ZW50VHlwZSAgICAgPSBXM0NfTU9ERUwgfHwgaXNOYXRpdmUgPyB0eXBlIDogJ3Byb3BlcnR5Y2hhbmdlJ1xuICAgICAgICAgICAgdGhpcy50YXJnZXQgICAgICAgID0gdGFyZ2V0RWxlbWVudChlbGVtZW50LCBpc05hdGl2ZSlcbiAgICAgICAgICAgIHRoaXNbZXZlbnRTdXBwb3J0XSA9ICEhdGhpcy50YXJnZXRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5yb290ICAgICAgICAgID0gcm9vdFxuICAgICAgICAgICAgdGhpcy5oYW5kbGVyICAgICAgID0gd3JhcHBlZEhhbmRsZXIoZWxlbWVudCwgaGFuZGxlciwgbnVsbCwgYXJncylcbiAgICAgICAgICB9XG5cbiAgICAgICAgLy8gZ2l2ZW4gYSBsaXN0IG9mIG5hbWVzcGFjZXMsIGlzIG91ciBlbnRyeSBpbiBhbnkgb2YgdGhlbT9cbiAgICAgICAgUmVnRW50cnkucHJvdG90eXBlLmluTmFtZXNwYWNlcyA9IGZ1bmN0aW9uIChjaGVja05hbWVzcGFjZXMpIHtcbiAgICAgICAgICB2YXIgaSwgaiwgYyA9IDBcbiAgICAgICAgICBpZiAoIWNoZWNrTmFtZXNwYWNlcykgcmV0dXJuIHRydWVcbiAgICAgICAgICBpZiAoIXRoaXMubmFtZXNwYWNlcykgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgZm9yIChpID0gY2hlY2tOYW1lc3BhY2VzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgZm9yIChqID0gdGhpcy5uYW1lc3BhY2VzLmxlbmd0aDsgai0tOykge1xuICAgICAgICAgICAgICBpZiAoY2hlY2tOYW1lc3BhY2VzW2ldID09IHRoaXMubmFtZXNwYWNlc1tqXSkgYysrXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBjaGVja05hbWVzcGFjZXMubGVuZ3RoID09PSBjXG4gICAgICAgIH1cblxuICAgICAgICAvLyBtYXRjaCBieSBlbGVtZW50LCBvcmlnaW5hbCBmbiAob3B0KSwgaGFuZGxlciBmbiAob3B0KVxuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUubWF0Y2hlcyA9IGZ1bmN0aW9uIChjaGVja0VsZW1lbnQsIGNoZWNrT3JpZ2luYWwsIGNoZWNrSGFuZGxlcikge1xuICAgICAgICAgIHJldHVybiB0aGlzLmVsZW1lbnQgPT09IGNoZWNrRWxlbWVudCAmJlxuICAgICAgICAgICAgKCFjaGVja09yaWdpbmFsIHx8IHRoaXMub3JpZ2luYWwgPT09IGNoZWNrT3JpZ2luYWwpICYmXG4gICAgICAgICAgICAoIWNoZWNrSGFuZGxlciB8fCB0aGlzLmhhbmRsZXIgPT09IGNoZWNrSGFuZGxlcilcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBSZWdFbnRyeVxuICAgICAgfSgpKVxuXG4gICAgLCByZWdpc3RyeSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIG91ciBtYXAgc3RvcmVzIGFycmF5cyBieSBldmVudCB0eXBlLCBqdXN0IGJlY2F1c2UgaXQncyBiZXR0ZXIgdGhhbiBzdG9yaW5nXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgaW4gYSBzaW5nbGUgYXJyYXkuXG4gICAgICAgIC8vIHVzZXMgJyQnIGFzIGEgcHJlZml4IGZvciB0aGUga2V5cyBmb3Igc2FmZXR5IGFuZCAncicgYXMgYSBzcGVjaWFsIHByZWZpeCBmb3JcbiAgICAgICAgLy8gcm9vdExpc3RlbmVycyBzbyB3ZSBjYW4gbG9vayB0aGVtIHVwIGZhc3RcbiAgICAgICAgdmFyIG1hcCA9IHt9XG5cbiAgICAgICAgICAvLyBnZW5lcmljIGZ1bmN0aW9uYWwgc2VhcmNoIG9mIG91ciByZWdpc3RyeSBmb3IgbWF0Y2hpbmcgbGlzdGVuZXJzLFxuICAgICAgICAgIC8vIGBmbmAgcmV0dXJucyBmYWxzZSB0byBicmVhayBvdXQgb2YgdGhlIGxvb3BcbiAgICAgICAgICAsIGZvckFsbCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pIHtcbiAgICAgICAgICAgICAgdmFyIHBmeCA9IHJvb3QgPyAncicgOiAnJCdcbiAgICAgICAgICAgICAgaWYgKCF0eXBlIHx8IHR5cGUgPT0gJyonKSB7XG4gICAgICAgICAgICAgICAgLy8gc2VhcmNoIHRoZSB3aG9sZSByZWdpc3RyeVxuICAgICAgICAgICAgICAgIGZvciAodmFyIHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodC5jaGFyQXQoMCkgPT0gcGZ4KSB7XG4gICAgICAgICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0LnN1YnN0cigxKSwgb3JpZ2luYWwsIGhhbmRsZXIsIHJvb3QsIGZuKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IDAsIGwsIGxpc3QgPSBtYXBbcGZ4ICsgdHlwZV0sIGFsbCA9IGVsZW1lbnQgPT0gJyonXG4gICAgICAgICAgICAgICAgaWYgKCFsaXN0KSByZXR1cm5cbiAgICAgICAgICAgICAgICBmb3IgKGwgPSBsaXN0Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgaWYgKChhbGwgfHwgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBoYW5kbGVyKSkgJiYgIWZuKGxpc3RbaV0sIGxpc3QsIGksIHR5cGUpKSByZXR1cm5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgaGFzID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCByb290KSB7XG4gICAgICAgICAgICAgIC8vIHdlJ3JlIG5vdCB1c2luZyBmb3JBbGwgaGVyZSBzaW1wbHkgYmVjYXVzZSBpdCdzIGEgYml0IHNsb3dlciBhbmQgdGhpc1xuICAgICAgICAgICAgICAvLyBuZWVkcyB0byBiZSBmYXN0XG4gICAgICAgICAgICAgIHZhciBpLCBsaXN0ID0gbWFwWyhyb290ID8gJ3InIDogJyQnKSArIHR5cGVdXG4gICAgICAgICAgICAgIGlmIChsaXN0KSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmICghbGlzdFtpXS5yb290ICYmIGxpc3RbaV0ubWF0Y2hlcyhlbGVtZW50LCBvcmlnaW5hbCwgbnVsbCkpIHJldHVybiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBnZXQgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3JBbGwoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIG51bGwsIHJvb3QsIGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzLnB1c2goZW50cnkpXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIHJldHVybiBlbnRyaWVzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIHB1dCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICB2YXIgaGFzID0gIWVudHJ5LnJvb3QgJiYgIXRoaXMuaGFzKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgICAgICwga2V5ID0gKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZVxuICAgICAgICAgICAgICA7KG1hcFtrZXldIHx8IChtYXBba2V5XSA9IFtdKSkucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgcmV0dXJuIGhhc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBkZWwgPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgZm9yQWxsKGVudHJ5LmVsZW1lbnQsIGVudHJ5LnR5cGUsIG51bGwsIGVudHJ5LmhhbmRsZXIsIGVudHJ5LnJvb3QsIGZ1bmN0aW9uIChlbnRyeSwgbGlzdCwgaSkge1xuICAgICAgICAgICAgICAgIGxpc3Quc3BsaWNlKGksIDEpXG4gICAgICAgICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWVcbiAgICAgICAgICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDApIGRlbGV0ZSBtYXBbKGVudHJ5LnJvb3QgPyAncicgOiAnJCcpICsgZW50cnkudHlwZV1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gZHVtcCBhbGwgZW50cmllcywgdXNlZCBmb3Igb251bmxvYWRcbiAgICAgICAgICAsIGVudHJpZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHZhciB0LCBlbnRyaWVzID0gW11cbiAgICAgICAgICAgICAgZm9yICh0IGluIG1hcCkge1xuICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSAnJCcpIGVudHJpZXMgPSBlbnRyaWVzLmNvbmNhdChtYXBbdF0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBoYXM6IGhhcywgZ2V0OiBnZXQsIHB1dDogcHV0LCBkZWw6IGRlbCwgZW50cmllczogZW50cmllcyB9XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIHdlIG5lZWQgYSBzZWxlY3RvciBlbmdpbmUgZm9yIGRlbGVnYXRlZCBldmVudHMsIHVzZSBxdWVyeVNlbGVjdG9yQWxsIGlmIGl0IGV4aXN0c1xuICAgICAgLy8gYnV0IGZvciBvbGRlciBicm93c2VycyB3ZSBuZWVkIFF3ZXJ5LCBTaXp6bGUgb3Igc2ltaWxhclxuICAgICwgc2VsZWN0b3JFbmdpbmVcbiAgICAsIHNldFNlbGVjdG9yRW5naW5lID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBkb2MucXVlcnlTZWxlY3RvckFsbFxuICAgICAgICAgICAgPyBmdW5jdGlvbiAocywgcikge1xuICAgICAgICAgICAgICAgIHJldHVybiByLnF1ZXJ5U2VsZWN0b3JBbGwocylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCZWFuOiBObyBzZWxlY3RvciBlbmdpbmUgaW5zdGFsbGVkJykgLy8gZWVla1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZWN0b3JFbmdpbmUgPSBlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gd2UgYXR0YWNoIHRoaXMgbGlzdGVuZXIgdG8gZWFjaCBET00gZXZlbnQgdGhhdCB3ZSBuZWVkIHRvIGxpc3RlbiB0bywgb25seSBvbmNlXG4gICAgICAvLyBwZXIgZXZlbnQgdHlwZSBwZXIgRE9NIGVsZW1lbnRcbiAgICAsIHJvb3RMaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCwgdHlwZSkge1xuICAgICAgICBpZiAoIVczQ19NT0RFTCAmJiB0eXBlICYmIGV2ZW50ICYmIGV2ZW50LnByb3BlcnR5TmFtZSAhPSAnX29uJyArIHR5cGUpIHJldHVyblxuXG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSByZWdpc3RyeS5nZXQodGhpcywgdHlwZSB8fCBldmVudC50eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBsaXN0ZW5lcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuXG4gICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KGV2ZW50LCB0aGlzLCB0cnVlKVxuICAgICAgICBpZiAodHlwZSkgZXZlbnQudHlwZSA9IHR5cGVcblxuICAgICAgICAvLyBpdGVyYXRlIHRocm91Z2ggYWxsIGhhbmRsZXJzIHJlZ2lzdGVyZWQgZm9yIHRoaXMgdHlwZSwgY2FsbGluZyB0aGVtIHVubGVzcyB0aGV5IGhhdmVcbiAgICAgICAgLy8gYmVlbiByZW1vdmVkIGJ5IGEgcHJldmlvdXMgaGFuZGxlciBvciBzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKSBoYXMgYmVlbiBjYWxsZWRcbiAgICAgICAgZm9yICg7IGkgPCBsICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpOyBpKyspIHtcbiAgICAgICAgICBpZiAoIWxpc3RlbmVyc1tpXS5yZW1vdmVkKSBsaXN0ZW5lcnNbaV0uaGFuZGxlci5jYWxsKHRoaXMsIGV2ZW50KVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIGFkZCBhbmQgcmVtb3ZlIGxpc3RlbmVycyB0byBET00gZWxlbWVudHNcbiAgICAsIGxpc3RlbmVyID0gVzNDX01PREVMXG4gICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCkge1xuICAgICAgICAgICAgLy8gbmV3IGJyb3dzZXJzXG4gICAgICAgICAgICBlbGVtZW50W2FkZCA/IGFkZEV2ZW50IDogcmVtb3ZlRXZlbnRdKHR5cGUsIHJvb3RMaXN0ZW5lciwgZmFsc2UpXG4gICAgICAgICAgfVxuICAgICAgICA6IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBhZGQsIGN1c3RvbSkge1xuICAgICAgICAgICAgLy8gSUU4IGFuZCBiZWxvdywgdXNlIGF0dGFjaEV2ZW50L2RldGFjaEV2ZW50IGFuZCB3ZSBoYXZlIHRvIHBpZ2d5LWJhY2sgcHJvcGVydHljaGFuZ2UgZXZlbnRzXG4gICAgICAgICAgICAvLyB0byBzaW11bGF0ZSBldmVudCBidWJibGluZyBldGMuXG4gICAgICAgICAgICB2YXIgZW50cnlcbiAgICAgICAgICAgIGlmIChhZGQpIHtcbiAgICAgICAgICAgICAgcmVnaXN0cnkucHV0KGVudHJ5ID0gbmV3IFJlZ0VudHJ5KFxuICAgICAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgICAgICwgY3VzdG9tIHx8IHR5cGVcbiAgICAgICAgICAgICAgICAsIGZ1bmN0aW9uIChldmVudCkgeyAvLyBoYW5kbGVyXG4gICAgICAgICAgICAgICAgICAgIHJvb3RMaXN0ZW5lci5jYWxsKGVsZW1lbnQsIGV2ZW50LCBjdXN0b20pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLCByb290TGlzdGVuZXJcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIG51bGxcbiAgICAgICAgICAgICAgICAsIHRydWUgLy8gaXMgcm9vdFxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICBpZiAoY3VzdG9tICYmIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID09IG51bGwpIGVsZW1lbnRbJ19vbicgKyBjdXN0b21dID0gMFxuICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuYXR0YWNoRXZlbnQoJ29uJyArIGVudHJ5LmV2ZW50VHlwZSwgZW50cnkuaGFuZGxlcilcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGVudHJ5ID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIGN1c3RvbSB8fCB0eXBlLCByb290TGlzdGVuZXIsIHRydWUpWzBdXG4gICAgICAgICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5kZXRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChlbnRyeSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICwgb25jZSA9IGZ1bmN0aW9uIChybSwgZWxlbWVudCwgdHlwZSwgZm4sIG9yaWdpbmFsRm4pIHtcbiAgICAgICAgLy8gd3JhcCB0aGUgaGFuZGxlciBpbiBhIGhhbmRsZXIgdGhhdCBkb2VzIGEgcmVtb3ZlIGFzIHdlbGxcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpXG4gICAgICAgICAgcm0oZWxlbWVudCwgdHlwZSwgb3JpZ2luYWxGbilcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgLCByZW1vdmVMaXN0ZW5lciA9IGZ1bmN0aW9uIChlbGVtZW50LCBvcmdUeXBlLCBoYW5kbGVyLCBuYW1lc3BhY2VzKSB7XG4gICAgICAgIHZhciB0eXBlICAgICA9IG9yZ1R5cGUgJiYgb3JnVHlwZS5yZXBsYWNlKG5hbWVSZWdleCwgJycpXG4gICAgICAgICAgLCBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIHJlbW92ZWQgID0ge31cbiAgICAgICAgICAsIGksIGxcblxuICAgICAgICBmb3IgKGkgPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCghaGFuZGxlciB8fCBoYW5kbGVyc1tpXS5vcmlnaW5hbCA9PT0gaGFuZGxlcikgJiYgaGFuZGxlcnNbaV0uaW5OYW1lc3BhY2VzKG5hbWVzcGFjZXMpKSB7XG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIGlzIHByb2JsZW1hdGljLCB3ZSBoYXZlIGEgcmVnaXN0cnkuZ2V0KCkgYW5kIHJlZ2lzdHJ5LmRlbCgpIHRoYXRcbiAgICAgICAgICAgIC8vIGJvdGggZG8gcmVnaXN0cnkgc2VhcmNoZXMgc28gd2Ugd2FzdGUgY3ljbGVzIGRvaW5nIHRoaXMuIE5lZWRzIHRvIGJlIHJvbGxlZCBpbnRvXG4gICAgICAgICAgICAvLyBhIHNpbmdsZSByZWdpc3RyeS5mb3JBbGwoZm4pIHRoYXQgcmVtb3ZlcyB3aGlsZSBmaW5kaW5nLCBidXQgdGhlIGNhdGNoIGlzIHRoYXRcbiAgICAgICAgICAgIC8vIHdlJ2xsIGJlIHNwbGljaW5nIHRoZSBhcnJheXMgdGhhdCB3ZSdyZSBpdGVyYXRpbmcgb3Zlci4gTmVlZHMgZXh0cmEgdGVzdHMgdG9cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBkb24ndCBzY3JldyBpdCB1cC4gQHJ2YWdnXG4gICAgICAgICAgICByZWdpc3RyeS5kZWwoaGFuZGxlcnNbaV0pXG4gICAgICAgICAgICBpZiAoIXJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSAmJiBoYW5kbGVyc1tpXVtldmVudFN1cHBvcnRdKVxuICAgICAgICAgICAgICByZW1vdmVkW2hhbmRsZXJzW2ldLmV2ZW50VHlwZV0gPSB7IHQ6IGhhbmRsZXJzW2ldLmV2ZW50VHlwZSwgYzogaGFuZGxlcnNbaV0udHlwZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNoZWNrIGVhY2ggdHlwZS9lbGVtZW50IGZvciByZW1vdmVkIGxpc3RlbmVycyBhbmQgcmVtb3ZlIHRoZSByb290TGlzdGVuZXIgd2hlcmUgaXQncyBubyBsb25nZXIgbmVlZGVkXG4gICAgICAgIGZvciAoaSBpbiByZW1vdmVkKSB7XG4gICAgICAgICAgaWYgKCFyZWdpc3RyeS5oYXMoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBudWxsLCBmYWxzZSkpIHtcbiAgICAgICAgICAgIC8vIGxhc3QgbGlzdGVuZXIgb2YgdGhpcyB0eXBlLCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgcmVtb3ZlZFtpXS50LCBmYWxzZSwgcmVtb3ZlZFtpXS5jKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBzZXQgdXAgYSBkZWxlZ2F0ZSBoZWxwZXIgdXNpbmcgdGhlIGdpdmVuIHNlbGVjdG9yLCB3cmFwIHRoZSBoYW5kbGVyIGZ1bmN0aW9uXG4gICAgLCBkZWxlZ2F0ZSA9IGZ1bmN0aW9uIChzZWxlY3RvciwgZm4pIHtcbiAgICAgICAgLy9UT0RPOiBmaW5kVGFyZ2V0ICh0aGVyZWZvcmUgJCkgaXMgY2FsbGVkIHR3aWNlLCBvbmNlIGZvciBtYXRjaCBhbmQgb25jZSBmb3JcbiAgICAgICAgLy8gc2V0dGluZyBlLmN1cnJlbnRUYXJnZXQsIGZpeCB0aGlzIHNvIGl0J3Mgb25seSBuZWVkZWQgb25jZVxuICAgICAgICB2YXIgZmluZFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHJvb3QpIHtcbiAgICAgICAgICAgICAgdmFyIGksIGFycmF5ID0gaXNTdHJpbmcoc2VsZWN0b3IpID8gc2VsZWN0b3JFbmdpbmUoc2VsZWN0b3IsIHJvb3QpIDogc2VsZWN0b3JcbiAgICAgICAgICAgICAgZm9yICg7IHRhcmdldCAmJiB0YXJnZXQgIT09IHJvb3Q7IHRhcmdldCA9IHRhcmdldC5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYXJyYXkubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoYXJyYXlbaV0gPT09IHRhcmdldCkgcmV0dXJuIHRhcmdldFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICwgaGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IGZpbmRUYXJnZXQoZS50YXJnZXQsIHRoaXMpXG4gICAgICAgICAgICAgIGlmIChtYXRjaCkgZm4uYXBwbHkobWF0Y2gsIGFyZ3VtZW50cylcbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBfX2JlYW5EZWwgaXNuJ3QgcGxlYXNhbnQgYnV0IGl0J3MgYSBwcml2YXRlIGZ1bmN0aW9uLCBub3QgZXhwb3NlZCBvdXRzaWRlIG9mIEJlYW5cbiAgICAgICAgaGFuZGxlci5fX2JlYW5EZWwgPSB7XG4gICAgICAgICAgICBmdCAgICAgICA6IGZpbmRUYXJnZXQgLy8gYXR0YWNoIGl0IGhlcmUgZm9yIGN1c3RvbUV2ZW50cyB0byB1c2UgdG9vXG4gICAgICAgICAgLCBzZWxlY3RvciA6IHNlbGVjdG9yXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhhbmRsZXJcbiAgICAgIH1cblxuICAgICwgZmlyZUxpc3RlbmVyID0gVzNDX01PREVMID8gZnVuY3Rpb24gKGlzTmF0aXZlLCB0eXBlLCBlbGVtZW50KSB7XG4gICAgICAgIC8vIG1vZGVybiBicm93c2VycywgZG8gYSBwcm9wZXIgZGlzcGF0Y2hFdmVudCgpXG4gICAgICAgIHZhciBldnQgPSBkb2MuY3JlYXRlRXZlbnQoaXNOYXRpdmUgPyAnSFRNTEV2ZW50cycgOiAnVUlFdmVudHMnKVxuICAgICAgICBldnRbaXNOYXRpdmUgPyAnaW5pdEV2ZW50JyA6ICdpbml0VUlFdmVudCddKHR5cGUsIHRydWUsIHRydWUsIHdpbiwgMSlcbiAgICAgICAgZWxlbWVudC5kaXNwYXRjaEV2ZW50KGV2dClcbiAgICAgIH0gOiBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gb2xkIGJyb3dzZXIgdXNlIG9ucHJvcGVydHljaGFuZ2UsIGp1c3QgaW5jcmVtZW50IGEgY3VzdG9tIHByb3BlcnR5IHRvIHRyaWdnZXIgdGhlIGV2ZW50XG4gICAgICAgIGVsZW1lbnQgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICBpc05hdGl2ZSA/IGVsZW1lbnQuZmlyZUV2ZW50KCdvbicgKyB0eXBlLCBkb2MuY3JlYXRlRXZlbnRPYmplY3QoKSkgOiBlbGVtZW50Wydfb24nICsgdHlwZV0rK1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBQdWJsaWMgQVBJOiBvZmYoKSwgb24oKSwgYWRkKCksIChyZW1vdmUoKSksIG9uZSgpLCBmaXJlKCksIGNsb25lKClcbiAgICAgICAgKi9cblxuICAgICAgLyoqXG4gICAgICAgICogb2ZmKGVsZW1lbnRbLCBldmVudFR5cGUocylbLCBoYW5kbGVyIF1dKVxuICAgICAgICAqL1xuICAgICwgb2ZmID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGVTcGVjLCBmbikge1xuICAgICAgICB2YXIgaXNUeXBlU3RyID0gaXNTdHJpbmcodHlwZVNwZWMpXG4gICAgICAgICAgLCBrLCB0eXBlLCBuYW1lc3BhY2VzLCBpXG5cbiAgICAgICAgaWYgKGlzVHlwZVN0ciAmJiB0eXBlU3BlYy5pbmRleE9mKCcgJykgPiAwKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCAndDEgdDIgdDMnLCBmbikgb3Igb2ZmKGVsLCAndDEgdDIgdDMnKVxuICAgICAgICAgIHR5cGVTcGVjID0gc3RyMmFycih0eXBlU3BlYylcbiAgICAgICAgICBmb3IgKGkgPSB0eXBlU3BlYy5sZW5ndGg7IGktLTspXG4gICAgICAgICAgICBvZmYoZWxlbWVudCwgdHlwZVNwZWNbaV0sIGZuKVxuICAgICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICAgIH1cblxuICAgICAgICB0eXBlID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgaWYgKHR5cGUgJiYgY3VzdG9tRXZlbnRzW3R5cGVdKSB0eXBlID0gY3VzdG9tRXZlbnRzW3R5cGVdLmJhc2VcblxuICAgICAgICBpZiAoIXR5cGVTcGVjIHx8IGlzVHlwZVN0cikge1xuICAgICAgICAgIC8vIG9mZihlbCkgb3Igb2ZmKGVsLCB0MS5ucykgb3Igb2ZmKGVsLCAubnMpIG9yIG9mZihlbCwgLm5zMS5uczIubnMzKVxuICAgICAgICAgIGlmIChuYW1lc3BhY2VzID0gaXNUeXBlU3RyICYmIHR5cGVTcGVjLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXNwYWNlcyA9IHN0cjJhcnIobmFtZXNwYWNlcywgJy4nKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIHR5cGUsIGZuLCBuYW1lc3BhY2VzKVxuICAgICAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odHlwZVNwZWMpKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsLCBmbilcbiAgICAgICAgICByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBudWxsLCB0eXBlU3BlYylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIHsgdDE6IGZuMSwgdDIsIGZuMiB9KVxuICAgICAgICAgIGZvciAoayBpbiB0eXBlU3BlYykge1xuICAgICAgICAgICAgaWYgKHR5cGVTcGVjLmhhc093blByb3BlcnR5KGspKSBvZmYoZWxlbWVudCwgaywgdHlwZVNwZWNba10pXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb24oZWxlbWVudCwgZXZlbnRUeXBlKHMpWywgc2VsZWN0b3JdLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqL1xuICAgICwgb24gPSBmdW5jdGlvbihlbGVtZW50LCBldmVudHMsIHNlbGVjdG9yLCBmbikge1xuICAgICAgICB2YXIgb3JpZ2luYWxGbiwgdHlwZSwgdHlwZXMsIGksIGFyZ3MsIGVudHJ5LCBmaXJzdFxuXG4gICAgICAgIC8vVE9ETzogdGhlIHVuZGVmaW5lZCBjaGVjayBtZWFucyB5b3UgY2FuJ3QgcGFzcyBhbiAnYXJncycgYXJndW1lbnQsIGZpeCB0aGlzIHBlcmhhcHM/XG4gICAgICAgIGlmIChzZWxlY3RvciA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiBldmVudHMgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAvL1RPRE86IHRoaXMgY2FuJ3QgaGFuZGxlIGRlbGVnYXRlZCBldmVudHNcbiAgICAgICAgICBmb3IgKHR5cGUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRzLmhhc093blByb3BlcnR5KHR5cGUpKSB7XG4gICAgICAgICAgICAgIG9uLmNhbGwodGhpcywgZWxlbWVudCwgdHlwZSwgZXZlbnRzW3R5cGVdKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghaXNGdW5jdGlvbihzZWxlY3RvcikpIHtcbiAgICAgICAgICAvLyBkZWxlZ2F0ZWQgZXZlbnRcbiAgICAgICAgICBvcmlnaW5hbEZuID0gZm5cbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDQpXG4gICAgICAgICAgZm4gICAgICAgICA9IGRlbGVnYXRlKHNlbGVjdG9yLCBvcmlnaW5hbEZuLCBzZWxlY3RvckVuZ2luZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzICAgICAgID0gc2xpY2UuY2FsbChhcmd1bWVudHMsIDMpXG4gICAgICAgICAgZm4gICAgICAgICA9IG9yaWdpbmFsRm4gPSBzZWxlY3RvclxuICAgICAgICB9XG5cbiAgICAgICAgdHlwZXMgPSBzdHIyYXJyKGV2ZW50cylcblxuICAgICAgICAvLyBzcGVjaWFsIGNhc2UgZm9yIG9uZSgpLCB3cmFwIGluIGEgc2VsZi1yZW1vdmluZyBoYW5kbGVyXG4gICAgICAgIGlmICh0aGlzID09PSBPTkUpIHtcbiAgICAgICAgICBmbiA9IG9uY2Uob2ZmLCBlbGVtZW50LCBldmVudHMsIGZuLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgLy8gYWRkIG5ldyBoYW5kbGVyIHRvIHRoZSByZWdpc3RyeSBhbmQgY2hlY2sgaWYgaXQncyB0aGUgZmlyc3QgZm9yIHRoaXMgZWxlbWVudC90eXBlXG4gICAgICAgICAgZmlyc3QgPSByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgIGVsZW1lbnRcbiAgICAgICAgICAgICwgdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKSAvLyBldmVudCB0eXBlXG4gICAgICAgICAgICAsIGZuXG4gICAgICAgICAgICAsIG9yaWdpbmFsRm5cbiAgICAgICAgICAgICwgc3RyMmFycih0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJyksICcuJykgLy8gbmFtZXNwYWNlc1xuICAgICAgICAgICAgLCBhcmdzXG4gICAgICAgICAgICAsIGZhbHNlIC8vIG5vdCByb290XG4gICAgICAgICAgKSlcbiAgICAgICAgICBpZiAoZW50cnlbZXZlbnRTdXBwb3J0XSAmJiBmaXJzdCkge1xuICAgICAgICAgICAgLy8gZmlyc3QgZXZlbnQgb2YgdGhpcyB0eXBlIG9uIHRoaXMgZWxlbWVudCwgYWRkIHJvb3QgbGlzdGVuZXJcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQsIGVudHJ5LmV2ZW50VHlwZSwgdHJ1ZSwgZW50cnkuY3VzdG9tVHlwZSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBhZGQoZWxlbWVudFssIHNlbGVjdG9yXSwgZXZlbnRUeXBlKHMpLCBoYW5kbGVyWywgYXJncyBdKVxuICAgICAgICAqXG4gICAgICAgICogRGVwcmVjYXRlZDoga2VwdCAoZm9yIG5vdykgZm9yIGJhY2t3YXJkLWNvbXBhdGliaWxpdHlcbiAgICAgICAgKi9cbiAgICAsIGFkZCA9IGZ1bmN0aW9uIChlbGVtZW50LCBldmVudHMsIGZuLCBkZWxmbikge1xuICAgICAgICByZXR1cm4gb24uYXBwbHkoXG4gICAgICAgICAgICBudWxsXG4gICAgICAgICAgLCAhaXNTdHJpbmcoZm4pXG4gICAgICAgICAgICAgID8gc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgICAgICAgIDogWyBlbGVtZW50LCBmbiwgZXZlbnRzLCBkZWxmbiBdLmNvbmNhdChhcmd1bWVudHMubGVuZ3RoID4gMyA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCA1KSA6IFtdKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIG9uZShlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShPTkUsIGFyZ3VtZW50cylcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogZmlyZShlbGVtZW50LCBldmVudFR5cGUocylbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUaGUgb3B0aW9uYWwgJ2FyZ3MnIGFyZ3VtZW50IG11c3QgYmUgYW4gYXJyYXksIGlmIG5vICdhcmdzJyBhcmd1bWVudCBpcyBwcm92aWRlZFxuICAgICAgICAqIHRoZW4gd2UgY2FuIHVzZSB0aGUgYnJvd3NlcidzIERPTSBldmVudCBzeXN0ZW0sIG90aGVyd2lzZSB3ZSB0cmlnZ2VyIGhhbmRsZXJzIG1hbnVhbGx5XG4gICAgICAgICovXG4gICAgLCBmaXJlID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFyZ3MpIHtcbiAgICAgICAgdmFyIHR5cGVzID0gc3RyMmFycih0eXBlKVxuICAgICAgICAgICwgaSwgaiwgbCwgbmFtZXMsIGhhbmRsZXJzXG5cbiAgICAgICAgZm9yIChpID0gdHlwZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgdHlwZSA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICBpZiAobmFtZXMgPSB0eXBlc1tpXS5yZXBsYWNlKG5hbWVzcGFjZVJlZ2V4LCAnJykpIG5hbWVzID0gc3RyMmFycihuYW1lcywgJy4nKVxuICAgICAgICAgIGlmICghbmFtZXMgJiYgIWFyZ3MgJiYgZWxlbWVudFtldmVudFN1cHBvcnRdKSB7XG4gICAgICAgICAgICBmaXJlTGlzdGVuZXIobmF0aXZlRXZlbnRzW3R5cGVdLCB0eXBlLCBlbGVtZW50KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBub24tbmF0aXZlIGV2ZW50LCBlaXRoZXIgYmVjYXVzZSBvZiBhIG5hbWVzcGFjZSwgYXJndW1lbnRzIG9yIGEgbm9uIERPTSBlbGVtZW50XG4gICAgICAgICAgICAvLyBpdGVyYXRlIG92ZXIgYWxsIGxpc3RlbmVycyBhbmQgbWFudWFsbHkgJ2ZpcmUnXG4gICAgICAgICAgICBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChlbGVtZW50LCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAgIGFyZ3MgPSBbZmFsc2VdLmNvbmNhdChhcmdzKVxuICAgICAgICAgICAgZm9yIChqID0gMCwgbCA9IGhhbmRsZXJzLmxlbmd0aDsgaiA8IGw7IGorKykge1xuICAgICAgICAgICAgICBpZiAoaGFuZGxlcnNbal0uaW5OYW1lc3BhY2VzKG5hbWVzKSkge1xuICAgICAgICAgICAgICAgIGhhbmRsZXJzW2pdLmhhbmRsZXIuYXBwbHkoZWxlbWVudCwgYXJncylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBjbG9uZShkc3RFbGVtZW50LCBzcmNFbGVtZW50WywgZXZlbnRUeXBlIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBUT0RPOiBwZXJoYXBzIGZvciBjb25zaXN0ZW5jeSB3ZSBzaG91bGQgYWxsb3cgdGhlIHNhbWUgZmxleGliaWxpdHkgaW4gdHlwZSBzcGVjaWZpZXJzP1xuICAgICAgICAqL1xuICAgICwgY2xvbmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgZnJvbSwgdHlwZSkge1xuICAgICAgICB2YXIgaGFuZGxlcnMgPSByZWdpc3RyeS5nZXQoZnJvbSwgdHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgLCBsID0gaGFuZGxlcnMubGVuZ3RoXG4gICAgICAgICAgLCBpID0gMFxuICAgICAgICAgICwgYXJncywgYmVhbkRlbFxuXG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgaWYgKGhhbmRsZXJzW2ldLm9yaWdpbmFsKSB7XG4gICAgICAgICAgICBhcmdzID0gWyBlbGVtZW50LCBoYW5kbGVyc1tpXS50eXBlIF1cbiAgICAgICAgICAgIGlmIChiZWFuRGVsID0gaGFuZGxlcnNbaV0uaGFuZGxlci5fX2JlYW5EZWwpIGFyZ3MucHVzaChiZWFuRGVsLnNlbGVjdG9yKVxuICAgICAgICAgICAgYXJncy5wdXNoKGhhbmRsZXJzW2ldLm9yaWdpbmFsKVxuICAgICAgICAgICAgb24uYXBwbHkobnVsbCwgYXJncylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgIH1cblxuICAgICwgYmVhbiA9IHtcbiAgICAgICAgICAnb24nICAgICAgICAgICAgICAgIDogb25cbiAgICAgICAgLCAnYWRkJyAgICAgICAgICAgICAgIDogYWRkXG4gICAgICAgICwgJ29uZScgICAgICAgICAgICAgICA6IG9uZVxuICAgICAgICAsICdvZmYnICAgICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAncmVtb3ZlJyAgICAgICAgICAgIDogb2ZmXG4gICAgICAgICwgJ2Nsb25lJyAgICAgICAgICAgICA6IGNsb25lXG4gICAgICAgICwgJ2ZpcmUnICAgICAgICAgICAgICA6IGZpcmVcbiAgICAgICAgLCAnRXZlbnQnICAgICAgICAgICAgIDogRXZlbnRcbiAgICAgICAgLCAnc2V0U2VsZWN0b3JFbmdpbmUnIDogc2V0U2VsZWN0b3JFbmdpbmVcbiAgICAgICAgLCAnbm9Db25mbGljdCcgICAgICAgIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29udGV4dFtuYW1lXSA9IG9sZFxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgLy8gZm9yIElFLCBjbGVhbiB1cCBvbiB1bmxvYWQgdG8gYXZvaWQgbGVha3NcbiAgaWYgKHdpbi5hdHRhY2hFdmVudCkge1xuICAgIHZhciBjbGVhbnVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGksIGVudHJpZXMgPSByZWdpc3RyeS5lbnRyaWVzKClcbiAgICAgIGZvciAoaSBpbiBlbnRyaWVzKSB7XG4gICAgICAgIGlmIChlbnRyaWVzW2ldLnR5cGUgJiYgZW50cmllc1tpXS50eXBlICE9PSAndW5sb2FkJykgb2ZmKGVudHJpZXNbaV0uZWxlbWVudCwgZW50cmllc1tpXS50eXBlKVxuICAgICAgfVxuICAgICAgd2luLmRldGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gICAgICB3aW4uQ29sbGVjdEdhcmJhZ2UgJiYgd2luLkNvbGxlY3RHYXJiYWdlKClcbiAgICB9XG4gICAgd2luLmF0dGFjaEV2ZW50KCdvbnVubG9hZCcsIGNsZWFudXApXG4gIH1cblxuICAvLyBpbml0aWFsaXplIHNlbGVjdG9yIGVuZ2luZSB0byBpbnRlcm5hbCBkZWZhdWx0IChxU0Egb3IgdGhyb3cgRXJyb3IpXG4gIHNldFNlbGVjdG9yRW5naW5lKClcblxuICByZXR1cm4gYmVhblxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iZWFuL2JlYW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCAqIGFzIEtleVV0aWxzIGZyb20gXCIuL0tleVV0aWxzXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5cclxuY29uc3QgREVGQVVMVFMgPSB7XHJcblx0c3RvcFByb3BhZ2F0aW9uOiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXZlbnREaXNwYXRjaGVyIHtcclxuXHQvKipcclxuXHQgKiBDb25zdHJ1Y3RvclxyXG5cdCAqIEBwYXJhbSByb290IHRoZSByb290IGVsZW1lbnQgdGhhdCB0aGUgbWFuYWdlciB3aWxsIGxpc3RlbiB0by5cclxuXHQgKiBAcGFyYW0gem9vbVNjYWxlXHJcblx0ICogQHBhcmFtIGNvbmZpZyB0aGUgY29uZmlndXJhdG9uIGZvciB0aGUgZXZlbnQgZGlzcGF0Y2hlci5cclxuXHQgKi9cclxuXHRjb25zdHJ1Y3Rvcihyb290LCB6b29tU2NhbGUgPSBbMCwgSW5maW5pdHldLCBjb25maWcgPSB7fSkge1xyXG5cdFx0dGhpcy5yb290ID0gcm9vdDtcclxuXHRcdHRoaXMucm9vdE5TID0gcm9vdC5nZXRBdHRyaWJ1dGUoJ25zJykgfHwgJ3Jvb3QnO1xyXG5cdFx0dGhpcy56b29tU2NhbGUgPSB6b29tU2NhbGU7XHJcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcclxuXHRcdHRoaXMuc2NhbGUgPSAxLjA7XHJcblx0XHR0aGlzLmxpc3RlbmVycyA9IHt9O1xyXG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0dGhpcy5oYW5kbGVyID0gXy5iaW5kKHRoaXMuaGFuZGxlRXZlbnQsIHRoaXMpO1xyXG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XHJcblxyXG5cdFx0Ly8gU2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50c1xyXG5cdFx0dGhpcy5lbnRlclN0YWNrID0gW107XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzdGFydCgpIHtcclxuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdEV2ZW50cy5vbih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcclxuXHRcdHRoaXMuc3RhcnRLZXlzKCk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogU3RvcCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzdG9wKCkge1xyXG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdEV2ZW50cy5vZmYodGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XHJcblx0XHR0aGlzLnN0b3BLZXlzKCk7XHJcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcclxuXHR9XHJcblxyXG5cdHN0YXJ0S2V5cygpIHtcclxuXHRcdEV2ZW50cy5vbihkb2N1bWVudCwgJ2tleWRvd24ga2V5dXAnLCB0aGlzLmhhbmRsZXIpO1xyXG5cdH1cclxuXHJcblx0c3RvcEtleXMoKSB7XHJcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XHJcblx0fVxyXG5cclxuXHR6b29tSW4oKSB7XHJcblx0XHR0aGlzLnNjYWxlICo9IDEuMjU7XHJcblx0XHR0aGlzLnNjYWxlID0gTWF0aC5tYXgoTWF0aC5taW4odGhpcy56b29tU2NhbGVbMV0sIHRoaXMuc2NhbGUpLCB0aGlzLnpvb21TY2FsZVswXSk7XHJcblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcclxuXHR9XHJcblxyXG5cdHpvb21PdXQoKSB7XHJcblx0XHR0aGlzLnNjYWxlICo9IDAuODtcclxuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcclxuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xyXG5cdH1cclxuXHJcblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XHJcblx0XHRsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xyXG5cdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKSwgbnMsIHN0YWNrID0gW10sIGlzUm9vdCA9IGZhbHNlO1xyXG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xyXG5cdFx0XHRucyA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoJ25zJyk7XHJcblx0XHRcdGlmIChucykge1xyXG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcclxuXHRcdFx0XHRpZiAoaXNSb290KSB7XHJcblx0XHRcdFx0XHRucyA9IG5zLnN1YnN0cmluZyg1KTtcclxuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghZXZlbnQubnNUYXJnZXQpIGV2ZW50Lm5zVGFyZ2V0ID0gdGFyZ2V0O1xyXG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xyXG5cdFx0XHRcdGJ1Zi5wcmVwZW5kKG5zKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcclxuXHRcdH1cclxuXHRcdGlmICghaXNSb290KVxyXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XHJcblxyXG5cdFx0Ly8gdGFyZ2V0IHN0YWNrIGlzIGEgc3RhY2sgb2YgYWxsIHRoZSBucyB0YXJnZXRzIHVwIHRvIHRoZSBvbmUgd2l0aCB0aGUgZGF0YSBiaW5kaW5nLlxyXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcclxuXHRcdG5zID0gYnVmLnRvU3RyaW5nKCcuJyk7XHJcblx0XHRpZiAobnMgPT0gJycpIG5zID0gdGhpcy5yb290TlM7XHJcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUaGUgbWFpbiBldmVudCBoYW5kbGVyIG1ldGhvZCwgaXQgcHJvY2Vzc2VzIGV2ZW50IGFuZCBnZW5lcmF0ZSByZWxldmFudCBldmVudHMgdG8gZGlzcGF0Y2guXHJcblx0ICovXHJcblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcclxuXHRcdGxldCB0eXBlID0gZXZlbnQudHlwZTtcclxuXHJcblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cclxuXHRcdGlmICh0aGlzLmRyYWdnaW5nIHx8IERvbVV0aWxzLmV2ZW50RnJvbUlucHV0KGV2ZW50KSkgcmV0dXJuO1xyXG5cclxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xyXG5cdFx0aWYgKGlzS2V5RXZlbnQpIHtcclxuXHRcdFx0ZGF0YSA9IHRoaXMucm9vdDtcclxuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpbmZvID0gdGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xyXG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcclxuXHRcdFx0ZGF0YSA9IGluZm8uZGF0YTtcclxuXHRcdFx0bnMgPSBpbmZvLm5zO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vVXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImhhbmRsZUV2ZW50IC0gXCIgKyB0eXBlICsgJztucz0nICsgbnMpO1xyXG5cclxuXHRcdGlmICh0eXBlID09ICdtb3VzZXdoZWVsJykge1xyXG5cdFx0XHR0aGlzLnNjYWxlICo9IE1hdGgucG93KDIsIGV2ZW50LndoZWVsRGVsdGEgKiAwLjAwMik7XHJcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcclxuXHRcdFx0ZXZlbnQuc2NhbGUgPSB0aGlzLnNjYWxlO1xyXG5cdFx0XHR0eXBlID0gJ3pvb20nO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIFNlZSBpZiB3ZSBzaG91bGQgY3JlYXRlIGRyYWcgZXZlbnRzXHJcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcclxuXHRcdFx0Ly8gQ3JlYXRlIGRyYWcgb2JqZWN0LlxyXG5cdFx0XHRjb25zdCBkcmFnT2JqZWN0ID0ge2RhdGE6IGRhdGEsIHBvczogbnMgPT0gJ3Jvb3QnID8gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpIDogcG9zfTtcclxuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHQvLyBTdGFydCBsaXN0ZW5pbmcgZm9yIG1vdXNlIG1vdmUuXHJcblx0XHRcdGxldCBkcmFnUG9zO1xyXG5cclxuXHRcdFx0Y29uc3QgbW91c2Vtb3ZlID0gKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0bGV0IGN1cnJlbnRQb3MgPSB0aGlzLmdldFBvc2l0aW9uKGV2ZW50KTtcclxuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcclxuXHRcdFx0XHRcdC8vIGNoZWNrIGlmIHRoZSBtb3VzZSBoYXMgbW92ZWQuIElFIGFsd2F5cyBmaXJlIG1vdXNlbW92ZSBhZnRlciBtb3VzZWRvd24gZXZlbiBpZiB0aGUgbW91c2UgaGFzbid0IG1vdmVkIHlldC5cclxuXHRcdFx0XHRcdGlmIChkcmFnT2JqZWN0LnBvc1swXSA9PSBjdXJyZW50UG9zWzBdICYmIGRyYWdPYmplY3QucG9zWzFdID09IGN1cnJlbnRQb3NbMV0pIHJldHVybjtcclxuXHJcblx0XHRcdFx0XHQvLyBzdGFydCBkcmFnZ2luZ1xyXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IHRydWU7XHJcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdzdGFydCcsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdPYmplY3QucG9zKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IEV2ZW50RGlzcGF0Y2hlci5tb3VzZSh0aGlzLnJvb3QsIGV2ZW50KTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcclxuXHRcdFx0XHR0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XHJcblx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWcnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0Y29uc3QgbW91c2V1cCA9IChldmVudCkgPT4ge1xyXG5cdFx0XHRcdGlmIChucyA9PSBcInJvb3RcIilcclxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0ZHJhZ1BvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xyXG5cclxuXHRcdFx0XHRsZXQgaW5mbyA9IHRoaXMuZ2V0RXZlbnRJbmZvKGV2ZW50KTtcclxuXHRcdFx0XHRpZiAodGhpcy5kcmFnZ2luZykge1xyXG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ2RyYWdlbmQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcclxuXHRcdFx0XHRFdmVudHMub2ZmKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcclxuXHRcdFx0fTtcclxuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNlbW92ZScsIG1vdXNlbW92ZSk7XHJcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCFpc0tleUV2ZW50KVxyXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XHJcblx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCB0eXBlLCBucywgZGF0YSwgcG9zKTtcclxuXHJcblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxyXG5cdFx0Ly9pZiAodHlwZSA9PSAnY29udGV4dG1lbnUnKVxyXG5cdFx0Ly9cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cclxuXHQgKi9cclxuXHRzaW11bGF0ZUVudGVyTGVhdmUoZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcclxuXHRcdGxldCBsYXN0LCBzdGFjaztcclxuXHRcdGNvbnN0IGNsZWFyRW50ZXJTdGFjayA9IChrKSA9PiB7XHJcblx0XHRcdGsgPSBrIHx8IDA7XHJcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXHJcblx0XHRcdHdoaWxlICh0aGlzLmVudGVyU3RhY2subGVuZ3RoID49IGsgKyAxKSB7XHJcblx0XHRcdFx0bGFzdCA9IHRoaXMuZW50ZXJTdGFjay5wb3AoKTtcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcclxuXHRcdFx0fVxyXG5cdFx0fTtcclxuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPD0gaW5kZXg7IGkrKykge1xyXG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcclxuXHRcdFx0XHRpZiAoXy5zdGFydHNXaXRoKHZhbCwgXCJyb290LlwiKSlcclxuXHRcdFx0XHRcdHZhbCA9IHZhbC5zdWJzdHJpbmcoNSk7XHJcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoJy4nKTtcclxuXHRcdH07XHJcblxyXG5cdFx0aWYgKG5zICYmIG5zICE9IHRoaXMucm9vdE5TKSB7XHJcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XHJcblx0XHRcdFx0c3RhY2sgPSBldmVudC50YXJnZXRTdGFjaztcclxuXHRcdFx0XHRsZXQgaXRlbTtcclxuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMuZW50ZXJTdGFja1tpXS50YXJnZXQgIT0gc3RhY2tbaV0pIHtcclxuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZVxyXG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aXRlbSA9IHtkYXRhOiBkYXRhLCBuczogZ2V0TlMoaSksIHRhcmdldDogc3RhY2tbaV19O1xyXG5cdFx0XHRcdFx0dGhpcy5lbnRlclN0YWNrLnB1c2goaXRlbSk7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChzdGFjay5sZW5ndGggPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKVxyXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcclxuXHRcdFx0Y2xlYXJFbnRlclN0YWNrKCk7XHJcblx0fVxyXG5cclxuXHRkaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xyXG5cdFx0Ly9pZiAodHlwZSAhPSAnbW91c2VvdmVyJyAmJiB0eXBlICE9ICdtb3VzZW91dCcpXHJcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xyXG5cdFx0aWYgKCF0aGlzLnN0YXJ0ZWQpIHJldHVybjtcclxuXHRcdGNvbnN0IG5zVHlwZSA9IG5zID8gdHlwZSArICcuJyArIG5zIDogdHlwZTtcclxuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XHJcblx0XHRcdGlmIChFdmVudERpc3BhdGNoZXIubWF0Y2gobnNUeXBlLCBsaXN0ZW5lcnMucmVnZXhwID8gbGlzdGVuZXJzLnJlZ2V4cCA6IGtleSkpIHtcclxuXHRcdFx0XHRfLmZvckVhY2gobGlzdGVuZXJzLCAobGlzdGVuZXIpID0+IHtcclxuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkod2luZG93LCBbdHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnRdKTtcclxuXHRcdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vIGFmdGVyIGRpc3BhdGNoaW5nLCBkbyBub3QgcHJvcGFnYXRlLlxyXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcclxuXHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fVxyXG5cclxuXHRnZXRQb3NpdGlvbihldmVudCkge1xyXG5cdFx0Y29uc3QgcG9zID0gRXZlbnREaXNwYXRjaGVyLm1vdXNlKHRoaXMucm9vdCwgZXZlbnQpO1xyXG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXHJcblx0XHRcdHRoaXMubGFzdFBvc2l0aW9uID0gcG9zO1xyXG5cdFx0cmV0dXJuIHRoaXMubGFzdFBvc2l0aW9uO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcclxuXHQgKiAvLyBLZXkgaXMgb2JqZWN0IHtjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBjb2RlfVxyXG5cdCAqL1xyXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xyXG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0a2V5ID0gS2V5VXRpbHMuZ2V0S2V5RGF0YShrZXkuY3RybCwga2V5LmFsdCwga2V5LnNoaWZ0LCBrZXkubWV0YSwga2V5LmNvZGUpO1xyXG5cdFx0aWYoIWtleS5sZW5ndGgpIHJldHVybjtcclxuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcclxuXHJcblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHR9O1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcclxuXHRcdHRoaXMubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcclxuXHRcdGlmIChfLmlzQXJyYXkoa2V5KSkge1xyXG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xyXG5cdFx0XHRcdHRoaXMudW5yZWdpc3RlcktleSh0eXBlLCBrLCBjYWxsYmFjaywgY29udGV4dCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRrZXkgPSBLZXlVdGlscy5nZXRLZXlEYXRhKGtleS5jdHJsLCBrZXkuYWx0LCBrZXkuc2hpZnQsIGtleS5tZXRhLCBrZXkuY29kZSk7XHJcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xyXG5cdFx0a2V5ID0gbmV3IFN0cmluZ0J1ZmZlcih0eXBlKS5hcHBlbmQoa2V5KS50b1N0cmluZygnLicpO1xyXG5cclxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcclxuXHRcdGlmICghbGlzdGVuZXJzKSByZXR1cm47XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcclxuXHRcdFx0aWYgKGxpc3RlbmVyLmNhbGxiYWNrID09PSBjYWxsYmFjayAmJiAoIWNvbnRleHQgfHwgY29udGV4dCA9PT0gbGlzdGVuZXIuY29udGV4dCkpIHtcclxuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRcdHJldHVybjtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcclxuXHQgKi9cclxuXHRyZWdpc3Rlcih0eXBlLCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KSB7XHJcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XHJcblx0XHRcdF8uZm9yRWFjaCh0eXBlLCAodCkgPT4ge1xyXG5cdFx0XHRcdHRoaXMucmVnaXN0ZXIodCwgY2FsbGJhY2ssIGNvbnRleHQsIHpJbmRleCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcclxuXHRcdHZhciByZWdleHAgPSBudWxsO1xyXG5cdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBSZWdFeHApIHtcclxuXHRcdFx0cmVnZXhwID0gdHlwZTtcclxuXHRcdFx0dHlwZSA9IHR5cGUgKyAnJztcclxuXHRcdH1cclxuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcclxuXHRcdGlmIChyZWdleHAgJiYgIXRoaXMubGlzdGVuZXJzW3R5cGVdLnJlZ2V4cClcclxuXHRcdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucmVnZXhwID0gcmVnZXhwO1xyXG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XHJcblx0fVxyXG5cclxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XHJcblx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIFJlZ0V4cClcclxuXHRcdFx0dHlwZSA9IHR5cGUgKyAnJztcclxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XHJcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XHJcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XHJcblx0XHRcdFx0bGlzdGVuZXJzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRlc3Ryb3koKSB7XHJcblx0XHR0aGlzLnN0b3AoKTtcclxuXHRcdGRlbGV0ZSB0aGlzLnJvb3Q7XHJcblx0XHRkZWxldGUgdGhpcy5saXN0ZW5lcnM7XHJcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2hlY2sgaWYgdGhlIHJlZ2lzdGVyZWQgZXZlbnQgdHlwZSBtYXRjaGVzIHRoZSByZWFsIGV2ZW50IHR5cGUuIFwiKlwiIGlzIGFsbG93ZWQgYXMgYSB3aWxkIGNhcmQuXHJcblx0ICovXHJcblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcclxuXHRcdGlmIChyZWdpc3RlcmVkVHlwZSBpbnN0YW5jZW9mIFJlZ0V4cClcclxuXHRcdFx0cmV0dXJuIG5zVHlwZS5tYXRjaChyZWdpc3RlcmVkVHlwZSk7XHJcblxyXG5cdFx0cmV0dXJuIG5zVHlwZSA9PSByZWdpc3RlcmVkVHlwZTtcclxuXHRcdC8qY29uc3QgYXJyID0gcmVnaXN0ZXJlZFR5cGUuc3BsaXQoJyonKTtcclxuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXHJcblx0XHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XHJcblxyXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xyXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0aWYgKGFycltpXS5sZW5ndGggPT0gMCkgY29udGludWU7XHJcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XHJcblx0XHRcdGluZGV4ID0gc3Vic3RyLmluZGV4T2YoYXJyW2ldKTtcclxuXHRcdFx0aWYgKGluZGV4IDwgMClcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdGluZGV4ICs9IGFycltpXS5sZW5ndGg7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdHJ1ZTsqL1xyXG5cdH1cclxuXHJcblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xyXG5cdFx0aWYgKGUuY2hhbmdlZFRvdWNoZXMpIGUgPSBlLmNoYW5nZWRUb3VjaGVzWzBdO1xyXG5cdFx0dmFyIHN2ZyA9IGNvbnRhaW5lci5vd25lclNWR0VsZW1lbnQgfHwgY29udGFpbmVyO1xyXG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xyXG5cdFx0XHR2YXIgcG9pbnQgPSBzdmcuY3JlYXRlU1ZHUG9pbnQoKTtcclxuXHRcdFx0cG9pbnQueCA9IGUuY2xpZW50WDsgcG9pbnQueSA9IGUuY2xpZW50WTtcclxuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XHJcblx0XHRcdHJldHVybiBbcG9pbnQueCwgcG9pbnQueV07XHJcblx0XHR9XHJcblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRcdHJldHVybiBbZS5jbGllbnRYIC0gcmVjdC5sZWZ0IC0gY29udGFpbmVyLmNsaWVudExlZnQsIGUuY2xpZW50WSAtIHJlY3QudG9wIC0gY29udGFpbmVyLmNsaWVudFRvcF07XHJcblx0fVxyXG59XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2V2ZW50L0V2ZW50RGlzcGF0Y2hlci5qc1xuICoqLyIsIi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1xyXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXHJcblxyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLy4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcblxyXG4vKipcclxuICogS0VZIGNvbnN0YW50XHJcbiAqL1xyXG5jb25zdCBLRVkgPSB7XHJcblx0QUxUICAgICAgICAgIDogMTgsXHJcblx0QkFDS19TUEFDRSAgIDogOCxcclxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcclxuXHRDT05UUk9MICAgICAgOiAxNyxcclxuXHRERUxFVEUgICAgICAgOiA0NixcclxuXHRET1dOICAgICAgICAgOiA0MCxcclxuXHRFTkQgICAgICAgICAgOiAzNSxcclxuXHRFTlRFUiAgICAgICAgOiAxMyxcclxuXHRFU0NBUEUgICAgICAgOiAyMjAsXHJcblx0SE9NRSAgICAgICAgIDogMzYsXHJcblx0TEVGVCAgICAgICAgIDogMzcsXHJcblx0TUVUQSAgICAgICAgIDogMjI0LFxyXG5cdE5VTV9MT0NLICAgICA6IDE0NCxcclxuXHRQQUdFX0RPV04gICAgOiAzNCxcclxuXHRQQUdFX1VQICAgICAgOiAzMyxcclxuXHRQQVVTRSAgICAgICAgOiAxOSxcclxuXHRQUklOVFNDUkVFTiAgOiA0NCxcclxuXHRSSUdIVCAgICAgICAgOiAzOSxcclxuXHRTQ1JPTExfTE9DSyAgOiAxNDUsXHJcblx0U0hJRlQgICAgICAgIDogMTYsXHJcblx0U1BBQ0UgICAgICAgIDogMzIsXHJcblx0VEFCICAgICAgICAgIDogOSxcclxuXHRVUCAgICAgICAgICAgOiAzOFxyXG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxyXG5cdC8vU1VCVFJBQ1QgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gMTczIDogMTg5XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RXZlbnQoZXZlbnQpIHtcclxuXHRpZiAoIWV2ZW50IHx8ICFldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XHJcblxyXG5cdC8vIE5lZWQgdG8gZmluZCBhIHdheSB0byBhdm9pZCB0aGlzXHJcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcclxuXHRcdGtleSA9IG51bGw7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZ2V0S2V5RGF0YShldmVudC5jdHJsS2V5LCBldmVudC5hbHRLZXksIGV2ZW50LnNoaWZ0S2V5LCBldmVudC5tZXRhS2V5LCBrZXkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0S2V5RGF0YShjdHJsLCBhbHQsIHNoaWZ0LCBtZXRhLCBrZXkpIHtcclxuXHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cclxuXHRpZiAoY3RybCkgYnVmLmFwcGVuZChcIkNUUkxcIik7XHJcblx0aWYgKGFsdCkgYnVmLmFwcGVuZChcIkFMVFwiKTtcclxuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcclxuXHRpZiAobWV0YSkgYnVmLmFwcGVuZChcIk1FVEFcIik7XHJcblx0aWYgKGtleSkgYnVmLmFwcGVuZChrZXkpO1xyXG5cclxuXHRyZXR1cm4gYnVmLnRvU3RyaW5nKFwiLlwiKTtcclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBOb2RlIGZyb20gXCIuL05vZGVcIjtcclxuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xyXG5pbXBvcnQgTWFya2VyIGZyb20gXCIuLi92aWV3L01hcmtlclwiO1xyXG5cclxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnbm9kZScsXHJcblx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdHNlbGVjdGFibGU6IHRydWUsXHJcblx0ZWRpdGFibGU6IHRydWUsXHJcblx0cmVzaXphYmxlOiBmYWxzZSxcclxuXHRzb3VyY2VhYmxlOiB0cnVlLFxyXG5cdHRhcmdldGFibGU6IHRydWUsXHJcblx0dmlzaWJsZTogdHJ1ZVxyXG59O1xyXG5cclxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xyXG5cdG5hbWU6ICdEZWZhdWx0JyxcclxuXHRyb2xlOiAnZWRnZScsXHJcblx0c2VsZWN0YWJsZTogdHJ1ZSxcclxuXHR2aXNpYmxlOiB0cnVlLFxyXG5cdHN0YXJ0TWFya2VyOiBudWxsLFxyXG5cdGVuZE1hcmtlcjoge1xyXG5cdFx0aWQ6ICdEZWZhdWx0X0VuZE1hcmtlcicsXHJcblx0XHR0eXBlOiAnYXJyb3cnLFxyXG5cdFx0c2l6ZTogMTAsXHJcblx0XHRjb2xvcjogJyMwZWExMTcnXHJcblx0fSxcclxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xyXG5cdHN0YXJ0OiBbMCwgMF0sXHJcblx0ZW5kOiBbNDAwLCAyMDBdXHJcbn07XHJcblxyXG5jbGFzcyBHcmFwaCB7XHJcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XHJcblx0XHR0aGlzLmlkID0gaWQ7XHJcblxyXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xyXG5cdFx0dGhpcy5lZGdlcyA9IHt9O1xyXG5cclxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcclxuXHRcdHRoaXMuZGVzdHJveWVkID0gZmFsc2U7XHJcblxyXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XHJcblx0XHRVdGlscy5idWlsZFR5cGVzKGNvbmZpZy5lZGdlVHlwZXMsIFwiRWRnZXNcIiwgZWRnZURlZmF1bHRzKTtcclxuXHRcdC8vIGNoZWNrIGZvciBtYXJrZXJzLlxyXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XHJcblx0XHRsZXQgZWRnZVR5cGVzID0gVXRpbHMudHlwZShFZGdlLm5hbWVzcGFjZSksIG1hcmtlciwgbWFya2VyQ29uZmlnO1xyXG5cdFx0ZWRnZVR5cGVzLmZvckVhY2goZnVuY3Rpb24odHlwZSkge1xyXG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcclxuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xyXG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCB0cnVlKTtcclxuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xyXG5cdFx0XHR9XHJcblx0XHRcdG1hcmtlckNvbmZpZyA9IHR5cGUucHJvdG90eXBlLmVuZE1hcmtlcjtcclxuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xyXG5cdFx0XHRcdG1hcmtlciA9IE1hcmtlci5nZXRNYXJrZXIobWFya2VyQ29uZmlnLCBmYWxzZSk7XHJcblx0XHRcdFx0dGhpcy5tYXJrZXJzLnB1c2gobWFya2VyKTtcclxuXHRcdFx0fVxyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XHJcblx0XHRkZWxldGUgY29uZmlnLmVkZ2VUeXBlcztcclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHRcdHRoaXMucm9vdCA9IG51bGw7XHJcblx0XHRpZiAobW9kZWwpXHJcblx0XHRcdHRoaXMubG9hZE1vZGVsKG1vZGVsKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBnZXRKU0NsYXNzKGNvbmZpZywgZGVmYXVsdENsYXNzKSB7XHJcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XHJcblx0XHRpZiAoY29uZmlnICYmIGNvbmZpZy50eXBlKSB7XHJcblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gZ2V0IHRoZSBqcyBjbGFzcyBmcm9tIGNvbmZpZy5cclxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcclxuXHRcdFx0aWYgKHR5cGUpXHJcblx0XHRcdFx0anNDbGFzcyA9IHR5cGUuanNDbGFzcztcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gVXRpbHMuZ2V0Q29uc3RydWN0b3IoanNDbGFzcywgZGVmYXVsdENsYXNzKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXHJcblx0ICovXHJcblx0YWRkTm9kZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIHBvcykge1xyXG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcclxuXHRcdGxldCBub2RlID0gbmV3IE5vZGVDbGFzcyh0aGlzLCBjb25maWcpO1xyXG5cclxuXHRcdGlmIChwYXJlbnQpXHJcblx0XHRcdEdyYXBoLmFkZENoaWxkKHBhcmVudCwgbm9kZSwgcG9zKTtcclxuXHRcdGVsc2Uge1xyXG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xyXG5cdFx0XHR0aGlzLnJvb3QucHJvcCgncm9sZScsICdyb290Jyk7XHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy5ub2Rlc1tub2RlLmlkXSA9IG5vZGU7XHJcblx0XHRyZXR1cm4gbm9kZTtcclxuXHR9XHJcblxyXG5cdGFkZEVkZ2UoY29uZmlnLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290LCBmcm9tLCB0bykge1xyXG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcclxuXHRcdGxldCBlZGdlID0gbmV3IEVkZ2VDbGFzcyh0aGlzLCBjb25maWcsIGZyb20sIHRvKTtcclxuXHJcblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xyXG5cdFx0dGhpcy5lZGdlc1tlZGdlLmlkXSA9IGVkZ2U7XHJcblx0XHRyZXR1cm4gZWRnZTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBhZGRDaGlsZChwYXJlbnQsIGNoaWxkKSB7XHJcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuID0gW107XHJcblxyXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcclxuXHRcdFx0cGFyZW50LmNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG5cclxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXHJcblx0XHRcdFx0Y2hpbGQucGFyZW50LmNoaWxkcmVuID0gXy53aXRob3V0KGNoaWxkLnBhcmVudC5jaGlsZHJlbiwgY2hpbGQpO1xyXG5cdFx0fVxyXG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xyXG5cdH1cclxuXHJcblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XHJcblx0XHR2YXIgbm9kZXMgPSBtb2RlbC5ub2RlcztcclxuXHRcdHZhciBlZGdlcyA9IG1vZGVsLmVkZ2VzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xyXG5cdFx0ZGVsZXRlIG1vZGVsLmVkZ2VzO1xyXG5cclxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xyXG5cdFx0aWYgKG5vZGVzKSB7XHJcblx0XHRcdF8uZm9yRWFjaChub2RlcywgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdGlmIChlZGdlcykge1xyXG5cdFx0XHRfLmZvckVhY2goZWRnZXMsIChlZGdlKSA9PiB7XHJcblx0XHRcdFx0bGV0IGZyb20sIHRvO1xyXG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXHJcblx0XHRcdFx0XHRmcm9tID0gdGhpcy5ub2Rlc1tlZGdlLmZyb21dO1xyXG5cdFx0XHRcdGlmIChlZGdlLnRvKVxyXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xyXG5cdFx0XHRcdHRoaXMuYWRkRWRnZShlZGdlLCBub2RlLCBmcm9tLCB0byk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IGN1cnJlbnRSb290KCkge1xyXG5cdFx0cmV0dXJuIHRoaXMucm9vdDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge31cclxuXHRkZXN0cm95KCkge31cclxufVxyXG5cclxuR3JhcGguREVGQVVMVFMgPSB7XHJcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxyXG5cdG11bHRpQ29ubmVjdDogZmFsc2UsXHJcblx0cmVhZE9ubHk6IGZhbHNlLFxyXG5cdHZpZXdPbmx5OiBmYWxzZVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0dyYXBoLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XHJcblxyXG5jbGFzcyBOb2RlIGV4dGVuZHMgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XHJcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnTicpO1xyXG5cdFx0c3VwZXIoZ3JhcGgsIGNvbmZpZyk7XHJcblxyXG5cdFx0dGhpcy5pbkVkZ2VzID0gW107XHJcblx0XHR0aGlzLm91dEVkZ2VzID0gW107XHJcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcclxuXHRcdHRoaXMucGFyZW50ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGlzQW5jZXN0b3Iobikge1xyXG5cdFx0Ly8gVE9ETzogc2hvdWxkIHdlIG1vdmUgdGhpcyB0byBncmFwaCBjbGFzcyA/XHJcblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xyXG5cdFx0d2hpbGUgKG5vZGUpIHtcclxuXHRcdFx0aWYgKHRoaXMgPT0gbm9kZSkgeyByZXR1cm4gdHJ1ZTsgfVxyXG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fVxyXG5cclxuXHRyZW1vdmVFZGdlKGVkZ2UpIHtcclxuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRpZiAoZWRnZSA9PSBlZGdlc1tpXSkge1xyXG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2VcclxuXHRhZGRJbkVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQpXHJcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHR0aGlzLmluRWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHQvLyBBZGQgYSBuZXcgb3V0Z29pbmcgZWRnZVxyXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XHJcblx0XHRpZiAocG9zID09IG51bGwgfHwgcG9zID09PSB1bmRlZmluZWQgfHwgcG9zID4gZWRnZS5sZW5ndGggLSAxKVxyXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnB1c2goZWRnZSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHRoaXMub3V0RWRnZXMuc3BsaWNlKHBvcywgMCwgZWRnZSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJDaGlsZHJlbih2aWV3KSB7XHJcblx0XHRpZiAodGhpcy5jaGlsZHJlbikge1xyXG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xyXG5cdFx0XHRfLmZvckVhY2godGhpcy5jaGlsZHJlbiwgKGNoaWxkKSA9PiB7XHJcblx0XHRcdFx0YnVmLmFwcGVuZChjaGlsZC5yZW5kZXIodmlldykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xyXG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xyXG5cdFx0aWYgKHBvcnROYW1lID09ICdhdXRvJykge1xyXG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcclxuXHRcdGlmIChfLmlzQXJyYXkobGFiZWwpKVxyXG5cdFx0XHRsYWJlbCA9IGxhYmVsWzBdO1xyXG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xyXG5cdH1cclxufVxyXG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5vZGU7XHJcblxyXG4vKlxyXG5cclxuLyoqXHJcbiAqIFRoZSBEcmlsbERvd25QYXJlbnQgaXMgdGhlIHBhcmVudCB0aGF0IGRpc3BsYXlzIHRoZSB2ZXJ0ZXggd2hlbiBkcmlsbGVkIGRvd24uXHJcbiAqXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMucGFyZW50O1xyXG59O1xyXG5cclxuVmVydGV4LnByb3RvdHlwZS5pc0xvY2tlZCA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBtb2RlID0gdGhpcy5nZXRQcm9wZXJ0eShcIm1vZGVcIikgfHwgMztcclxuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XHJcblx0aWYgKHRoaXMuaXNMb2NrZWQoKSlcclxuXHRcdHJldHVybiAnPHNwYW4+PGltZyBzcmM9XCJ3ZWJ3Yi9wenJlYWRvbmx5LnBuZ1wiIC8+PC9zcGFuPjxzcGFuPiZuYnNwOycgKyB0aGlzLmdldFByb3BlcnR5KFwibGFiZWxcIikgKyAnPC9zcGFuPic7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcclxufTtcclxuXHJcblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAoIXRoaXMucGFyZW50IHx8ICF0aGlzLnBhcmVudC5pc0xvY2tlZCgpKSAmJiBWZXJ0ZXguc3VwZXJjbGFzcy5jYW5FZGl0LmNhbGwodGhpcyk7XHJcbn07XHJcblxyXG5WZXJ0ZXgucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJjb250YWluZXJcIik7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgVXRpbHMgZnJvbSBcIi4uL3V0aWwvVXRpbHNcIjtcclxuaW1wb3J0IENhY2hlIGZyb20gXCIuLi91dGlsL0NhY2hlXCI7XHJcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XHJcbmltcG9ydCBTaGFwZSBmcm9tIFwiLi4vZ2VvbWV0cnkvU2hhcGVcIjtcclxuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2VsbCB7XHJcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xyXG5cdFx0dGhpcy5ncmFwaCA9IGdyYXBoO1xyXG5cdFx0dGhpcy5pZCA9IGNvbmZpZy5pZDtcclxuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XHJcblxyXG5cdFx0Ly8gSW5pdGlhbGl6ZSBkZWNvcmF0b3JzXHJcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcclxuXHRcdFx0dGhpcy5jcmVhdGVEZWNvcmF0b3JzKGNvbmZpZy5kZWNvcmF0b3JzKTtcclxuXHRcdFx0ZGVsZXRlIGNvbmZpZy5kZWNvcmF0b3JzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgVmlldyBQcm9wZXJ0aWVzXHJcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XHJcblx0XHRcdHRoaXMudmlld1Byb3BzID0gY29uZmlnLnZpZXdzO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLnZpZXdzO1xyXG5cdFx0fVxyXG5cclxuXHRcdC8vIEluaXRpYWxpemUgdHlwZVxyXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcclxuXHRcdHR5cGUgPSBVdGlscy50eXBlKHRoaXMuY29uc3RydWN0b3IubmFtZXNwYWNlLCB0eXBlKTtcclxuXHRcdGlmICghdHlwZSlcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XHJcblx0XHRkZWxldGUgY29uZmlnLnR5cGU7XHJcblx0XHR0aGlzLnByb3BzID0gbmV3IHR5cGUoY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHByb3AobmFtZSwgdmFsdWUpIHtcclxuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcclxuXHRcdFx0cmV0dXJuIHRoaXMucHJvcHNbbmFtZV07XHJcblx0XHR0aGlzLnByb3BzW25hbWVdID0gdmFsdWU7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cclxuXHQgKiBAcGFyYW0ga2V5XHJcblx0ICogQHBhcmFtIG5hbWVcclxuXHQgKiBAcGFyYW0gdmFsdWVcclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XHJcblx0XHRpZiAoXy5pc1VuZGVmaW5lZCh2YWx1ZSkpIHtcclxuXHRcdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XHJcblx0XHRcdHJldHVybiB0aGlzLnZpZXdQcm9wc1trZXldW25hbWVdO1xyXG5cdFx0fVxyXG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcclxuXHRcdFx0dGhpcy5wcm9wKG5hbWUsIHZhbHVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcclxuXHRcdFx0XHR0aGlzLnZpZXdQcm9wc1trZXldID0ge307XHJcblx0XHRcdHRoaXMudmlld1Byb3BzW2tleV1bbmFtZV0gPSB2YWx1ZTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XHJcblx0ICogQHJldHVybnMge3trZXk6IChzdHJpbmd8KiksIGNsYXNzTmFtZTogKiwgbmFtZXNwYWNlOiAqLCBib3VuZHM6ICp9fVxyXG5cdCAqL1xyXG5cdGdldFZpZXcoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XHJcblx0XHRyZXR1cm4gXy5hc3NpZ24oe1xyXG5cdFx0XHRpZDogdGhpcy5pZCxcclxuXHRcdFx0a2V5OiBrZXksXHJcblx0XHRcdGNsYXNzTmFtZTogdGhpcy5jb21wdXRlZENsYXNzTmFtZSxcclxuXHRcdFx0c3R5bGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc3R5bGUnKSxcclxuXHRcdFx0bmFtZXNwYWNlOiB0aGlzLm5hbWVzcGFjZVxyXG5cdFx0fSwgc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0Z2V0U2hhcGUoa2V5KSB7XHJcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XHJcblx0XHRpZiAoc2hhcGUpIHJldHVybiBzaGFwZTtcclxuXHJcblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRsZXQgc2hhcGVDbGFzcyA9IHNoYXBlQ29uZmlnID8gU2hhcGUuZ2V0U2hhcGUoc2hhcGVDb25maWcubmFtZSkgOiBTaGFwZS5nZXRTaGFwZSgnUmVjdGFuZ2xlJyk7XHJcblx0XHRsZXQgeCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInhcIik7XHJcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XHJcblx0XHRsZXQgd2lkdGggPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJ3aWR0aFwiKTtcclxuXHRcdGxldCBoZWlnaHQgPSB0aGlzLnZpZXdQcm9wKGtleSwgXCJoZWlnaHRcIik7XHJcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcclxuXHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy5zaGFwZScsIHNoYXBlLCBrZXkpO1xyXG5cdFx0cmV0dXJuIHNoYXBlO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKHZpZXcpIHtcclxuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xyXG5cdFx0aWYgKCF0ZW1wbGF0ZSkge1xyXG5cdFx0XHQvL2NyZWF0ZSB0aGUgdGVtcGxhdGVcclxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcclxuXHRcdFx0dGVtcGxhdGUgPSB2aWV3LmdldFRlbXBsYXRlKCckJyArIHJvbGUsIG51bGwsIHRoaXMpO1xyXG5cdFx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXHJcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcclxuXHRcdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnRlbXBsYXRlJywgdGVtcGxhdGUsIHZpZXcuaWQpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XHJcblx0fVxyXG5cclxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XHJcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKHZpZXcuaWQpO1xyXG5cdFx0aWYgKHNoYXBlKVxyXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xyXG5cdFx0cmV0dXJuICcnO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTGFiZWwodmlldykge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdClcclxuXHRcdFx0cmV0dXJuIG51bGw7XHJcblx0XHRsZXQgYm94ID0gdGhpcy5nZXRMYWJlbEJveCh2aWV3LmlkKTtcclxuXHRcdGlmIChib3gpXHJcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XHJcblx0XHRyZXR1cm4gJyc7XHJcblx0fVxyXG5cclxuXHRnZXRMYWJlbEJveChrZXkpIHtcclxuXHRcdGxldCBib3ggPSBDYWNoZS5nZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBrZXkpO1xyXG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcclxuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcclxuXHRcdC8vIEp1c3QgZ2V0IHRoZSBjb25maWcgd2lsbCBoYXZlIGEgcG9zaXRpdmUgcGVyZm9ybWFuY2UgYm9vc3QgZm9yIElFMTEgYW5kIElFMTAuXHJcblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcubGFiZWxCb3gnLCBib3gsIGtleSk7XHJcblx0XHRyZXR1cm4gYm94O1xyXG5cdH1cclxuXHJcblx0Z2V0IGNvbXB1dGVkQ2xhc3NOYW1lKCkge1xyXG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xyXG5cdFx0XHR2YXIgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcih0aGlzLnByb3AoXCJyb2xlXCIpKTtcclxuXHRcdFx0bGV0IHByb3BzID0gdGhpcy5wcm9wcztcclxuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocHJvcHNbXCJjbGFzc05hbWVcIl0pO1xyXG5cdFx0XHRwcm9wcyA9IHByb3BzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcclxuXHRcdFx0d2hpbGUgKHByb3BzKSB7XHJcblx0XHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxyXG5cdFx0XHRcdFx0YnVmLmFwcGVuZChwcm9wc1tcImNsYXNzTmFtZVwiXSk7XHJcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lID0gYnVmLnRvU3RyaW5nKCcgJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcy5fY29tcHV0ZWRDbGFzc05hbWU7XHJcblx0fVxyXG5cclxuXHRnZXQgbmFtZXNwYWNlKCkge1xyXG5cdFx0aWYgKHRoaXMgPT0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdCkgcmV0dXJuICcnO1xyXG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KCkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ3JhcGg7XHJcblx0XHRkZWxldGUgdGhpcy5kZWNvcmF0b3JzO1xyXG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XHJcblx0XHRkZWxldGUgdGhpcy52aWV3UHJvcHM7XHJcblx0XHR0aGlzLmRlc3Ryb3llZCA9IHRydWU7XHJcblx0fVxyXG59XHJcblxyXG4vKlxyXG5cclxuQ2VsbC5wcm90b3R5cGUubW92ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcclxuXHR0aGlzLnNldFByb3BlcnR5KFwieVwiLCBNYXRoLnJvdW5kKHkpKTtcclxuXHRkZWxldGUgdGhpcy5ib3VuZHM7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3LCBoKSB7XHJcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xyXG5cdHRoaXMuc2V0UHJvcGVydHkoXCJoZWlnaHRcIiwgaCk7XHJcblx0ZGVsZXRlIHRoaXMuYm91bmRzO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5TZWxlY3QoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJzZWxlY3RhYmxlXCIpO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuY2FuTW92ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImRyYWdnYWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmNhblJlc2l6ZSA9IGZ1bmN0aW9uKCkge1xyXG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xyXG5cdHJldHVybiB0aGlzLmdyYXBoLmdldFR5cGUodHlwZVN0cik7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5jcmVhdGVNb2RpZmllcnMgPSBmdW5jdGlvbihtb2RpZmllcnMpIHtcclxuXHR0aGlzLm1vZGlmaWVycyA9IG51bGw7XHJcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcclxuXHRpZiAobW9kaWZpZXJTZXR0aW5ncykge1xyXG5cdFx0Xy5lYWNoKG1vZGlmaWVycywgZnVuY3Rpb24oY29uZmlnKSB7XHJcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XHJcblx0XHRcdGNvbmZpZy5zZXR0aW5nID0gbW9kaWZpZXJTZXR0aW5nc1tjb25maWcuY2xhc3NOYW1lXTtcclxuXHRcdFx0aWYgKCFjb25maWcudHlwZSB8fCAhY29uZmlnLnNldHRpbmcpIHJldHVybjtcclxuXHJcblx0XHRcdHRoaXMuYWRkTW9kaWZpZXIoY29uZmlnLmNsYXNzTmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0fSwgdGhpcyk7XHJcblxyXG5cdFx0Ly8gQ2hlY2sgZm9yIHNob3dBbHdheXMgc2V0dGluZ3NcclxuXHRcdF8uZWFjaChtb2RpZmllclNldHRpbmdzLCBmdW5jdGlvbihzZXR0aW5nLCBuYW1lKSB7XHJcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XHJcblx0XHRcdFx0dmFyIGNvbmZpZyA9IHt0eXBlOiB0aGlzLmdyYXBoLmdldE1vZGlmaWVyVHlwZShuYW1lKSwgc2V0dGluZzogc2V0dGluZ307XHJcblx0XHRcdFx0aWYgKCFjb25maWcudHlwZSkgcmV0dXJuO1xyXG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xyXG5cdFx0XHR9XHJcblx0XHR9LCB0aGlzKTtcclxuXHR9XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XHJcblx0aWYgKCF0aGlzLm1vZGlmaWVycylcclxuXHRcdHRoaXMubW9kaWZpZXJzID0ge307XHJcblxyXG5cdGlmICghbW9kaWZpZXIuaGFzT3duUHJvcGVydHkoXCJzaG93SGVhZGVyXCIpKVxyXG5cdFx0bW9kaWZpZXIuc2hvd0hlYWRlciA9IHRydWU7XHJcblxyXG5cdC8vIEBoYWNrIHByZWZlcmFibHkgc2V0IGl0IGluIGNvbmZpZ3VyYXRpb25zLlxyXG5cdGlmIChtb2RpZmllci5uYW1lID09IFwiSG92ZXJQcm9jZXNzTW9kaWZpZXJcIiB8fCBtb2RpZmllci5uYW1lID09IFwiSG92ZXJSZXN1bHRzXCIpXHJcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XHJcblxyXG5cdHRoaXMubW9kaWZpZXJzW25hbWVdID0gbW9kaWZpZXI7XHJcbn07XHJcblxyXG5DZWxsLnByb3RvdHlwZS5nZXRNb2RpZmllcnMgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXHJcblx0XHR0aGlzLmNyZWF0ZU1vZGlmaWVycygpO1xyXG5cdHJldHVybiB0aGlzLm1vZGlmaWVycztcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVyID0gZnVuY3Rpb24obmFtZSkge1xyXG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xyXG5cdGlmIChtb2RpZmllcnMpXHJcblx0XHRyZXR1cm4gbW9kaWZpZXJzW25hbWVdO1xyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoJ3Zpc2libGUnKTtcclxufTtcclxuXHJcbkNlbGwucHJvdG90eXBlLmlzQ29udGFpbmVyID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIGZhbHNlO1xyXG59O1xyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9DZWxsLmpzXG4gKiovIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cclxuICovXHJcblxyXG5sZXQgY2FjaGVzID0ge307XHJcblxyXG5sZXQgQ2FjaGUgPSB7XHJcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSwgbmFtZXNwYWNlKSB7XHJcblx0XHR0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XSA9IHZhbHVlO1xyXG5cdH0sXHJcblxyXG5cdGNvbnRhaW5zOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XHJcblx0fSxcclxuXHJcblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xyXG5cdFx0ZGVsZXRlIHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldO1xyXG5cdH0sXHJcblxyXG5cdGNsZWFyOiBmdW5jdGlvbihuYW1lc2FwY2UpIHtcclxuXHRcdGlmICghbmFtZXNwYWNlKVxyXG5cdFx0XHRjYWNoZXMgPSB7fTtcclxuXHRcdGVsc2UgaWYgKGNhY2hlc1tuYW1lc3BhY2VdKVxyXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xyXG5cdH0sXHJcblxyXG5cdGdldENhY2hlOiBmdW5jdGlvbihuYW1lc3BhY2UgPSAnZGVmYXVsdCcpIHtcclxuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXHJcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XHJcblx0XHRyZXR1cm4gY2FjaGVzW25hbWVzcGFjZV07XHJcblx0fVxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvQ2FjaGUuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBFdmVudHMgZnJvbSBcImJlYW5cIjtcclxuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XHJcbmltcG9ydCBEb21VdGlscyBmcm9tIFwiLi4vdXRpbC9Eb21VdGlsc1wiO1xyXG5pbXBvcnQgU3RyaW5nQnVmZmVyIGZyb20gXCIuLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuXHJcbmNvbnN0IEZPTlRfQk9MRCA9IDEsIEZPTlRfSVRBTElDID0gMiwgRk9OVF9VTkRFUkxJTkUgPSA0LCBGT05UX1NIQURPVyA9IDg7XHJcblxyXG5sZXQgZGVmYXVsdENvbmZpZyA9IHtcclxuXHRmb250U2l6ZTogMTEsXHJcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG5cdGZvbnRTdHlsZTogMCxcclxuXHRmb250Q29sb3I6ICdibGFjaycsXHJcblx0cGFkZGluZzogMCxcclxuXHRsaW5lUGFkZGluZzogMCxcclxuXHRhbGlnbjogXCJsZWZ0XCIsXHJcblx0d2lkdGg6IDAsXHJcblx0aGVpZ2h0OiAwLFxyXG5cdHJvdGF0aW9uOiBudWxsLFxyXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGUgbGFiZWwgb2JqZWN0IGhhbmRsZXMgbGFiZWwgc2l6aW5nL3Bvc2l0aW9uaW5nXHJcbiAqL1xyXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XHJcblx0bGV0IHN0cmluZ01lYXN1cmVFbCA9IG51bGwsIG1lYXN1cmVEaXYsIGJhc2VsaW5lRGl2O1xyXG5cclxuXHQvKipcclxuXHQgKiBDYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIHN0cmluZy5cclxuXHQgKi9cclxuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XHJcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xyXG5cdFx0Zm9udEZhbWlseSA9IGZvbnRGYW1pbHkgfHwgJ0FyaWFsLEhlbHZldGljYSc7XHJcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcclxuXHJcblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0aGVyZSBpcyBhIHN0cmluZy1tZWFzdXJpbmcgZGl2IGF2YWlsYWJsZSwgaWYgbm90LCBjcmVhdGUgbm93LlxyXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcclxuXHRcdFx0c3RyaW5nTWVhc3VyZUVsID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnaWZyYW1lJywge2lkOlwiX0NvbXB1dGVTdHlsZXNJZnJhbWVcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIHZpc2liaWxpdHk6XCJoaWRkZW5cIiwgd2lkdGg6XCJhdXRvXCJ9KTtcclxuXHRcdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzdHJpbmdNZWFzdXJlRWwpO1xyXG5cdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XHJcblx0XHRcdGRvYy5vcGVuKCk7XHJcblx0XHRcdGRvYy53cml0ZSgnPGh0bWw+PGJvZHk+XFxcclxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXHJcblx0XHRcdFx0PGRpdiBpZD1cIm1lYXN1cmVEaXZcIiBzdHlsZT1cInBvc2l0aW9uOmFic29sdXRlO3dpZHRoOmF1dG87aGVpZ2h0OmF1dG87cGFkZGluZzowO3doaXRlLXNwYWNlOnByZS13cmFwO3dvcmQtd3JhcDpicmVhay13b3JkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO1wiPjwvZGl2PlxcXHJcblx0XHRcdFx0PC9ib2R5PjwvaHRtbD4nKTtcclxuXHRcdFx0ZG9jLmNsb3NlKCk7XHJcblx0XHRcdG1lYXN1cmVEaXYgPSBkb2MuZ2V0RWxlbWVudEJ5SWQoXCJtZWFzdXJlRGl2XCIpO1xyXG5cdFx0XHRiYXNlbGluZURpdiA9IGRvYy5nZXRFbGVtZW50QnlJZChcImJhc2VsaW5lRGl2XCIpO1xyXG5cdFx0fVxyXG5cdFx0YmFzZWxpbmVEaXYuc3R5bGUuZm9udFNpemUgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRTaXplID0gZm9udFNpemU7XHJcblx0XHRiYXNlbGluZURpdi5zdHlsZS5mb250RmFtaWx5ID0gbWVhc3VyZURpdi5zdHlsZS5mb250RmFtaWx5ID0gZm9udEZhbWlseTtcclxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XHJcblx0XHRtZWFzdXJlRGl2LmlubmVySFRNTCA9IHN0cjtcclxuXHJcblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xyXG5cdFx0bGV0IGJhc2VsaW5lSGVpZ2h0ID0gc3RydXQub2Zmc2V0VG9wICsgc3RydXQub2Zmc2V0SGVpZ2h0IC0gYmFzZWxpbmVEaXYub2Zmc2V0SGVpZ2h0IC0gYmFzZWxpbmVEaXYub2Zmc2V0VG9wO1xyXG5cclxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XHJcblx0fSwgZnVuY3Rpb24oc3RyLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkgeyByZXR1cm4gc3RyICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqIENyZWF0ZSBhIHdyYXBwZWQgdGV4dC5cclxuXHQgKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIHRoZSBzdHJpbmcgdG8gd3JhcC5cclxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cclxuXHQgKiBAcGFyYW0ge2ZvbnRTaXplfVxyXG5cdCAqIEBwYXJhbSB7Zm9udEZhbWlseX1cclxuXHQgKiBAcGFyYW0ge2JvbGR9XHJcblx0ICovXHJcblx0bGV0IHdyYXAgPSBfLm1lbW9pemUoZnVuY3Rpb24oc3RyaW5nLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHtcclxuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcclxuXHRcdGZvbnRTaXplID0gZm9udFNpemUgfHwgMTE7XHJcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcclxuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xyXG5cclxuXHRcdGxldCBhcnIgPSBbXTtcclxuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XHJcblx0XHRhcnIubGluZUhlaWdodCA9IHNwYWNlU2l6ZS5oZWlnaHQ7XHJcblx0XHRhcnIuYmFzZWxpbmUgPSBzcGFjZVNpemUuYmFzZWxpbmU7XHJcblxyXG5cdFx0aWYgKCFtYXhXaWR0aCB8fCAhc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSB7XHJcblx0XHRcdGFyci5wdXNoKHN0cmluZyk7XHJcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcclxuXHRcdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0O1xyXG5cdFx0XHRyZXR1cm4gYXJyO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciB3aWR0aCA9IDA7XHJcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXHJcblx0XHR2YXIgbGluZXMgPSBzdHJpbmcuc3BsaXQoJ1xcbicpO1xyXG5cclxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XHJcblxyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXHJcblx0XHRcdHZhciB3b3JkcyA9IGxpbmVzW2pdLnNwbGl0KC9cXHMvKTtcclxuXHRcdFx0dmFyIGxpbmUgPSBcIlwiLCBjdXJyZW50V2lkdGggPSAwLCB3b3JkV2lkdGggPSAwLCBuZXdMaW5lID0gdHJ1ZSwgd29yZDtcclxuXHJcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHR3b3JkID0gd29yZHNbaV07XHJcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XHJcblxyXG5cdFx0XHRcdGlmICgobmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKSA+IG1heFdpZHRoKSB7XHJcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xyXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKHdvcmQpO1xyXG5cdFx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCB3b3JkV2lkdGgpO1xyXG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcclxuXHRcdFx0XHRcdFx0XHRhcnIucHVzaChidWYudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGFyci5wdXNoKGJ1Zi5hcHBlbmQobGluZSkudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcclxuXHRcdFx0XHRcdFx0YnVmLmNsZWFyKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcclxuXHRcdFx0XHRcdGN1cnJlbnRXaWR0aCA9IDA7XHJcblx0XHRcdFx0XHRpZiAoIW5ld0xpbmUpXHJcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxyXG5cdFx0XHRcdFx0bmV3TGluZSA9IHRydWU7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XHJcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSBuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGg7XHJcblx0XHRcdFx0XHR3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBjdXJyZW50V2lkdGgpO1xyXG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxyXG5cdFx0XHRcdGJ1Zi5hcHBlbmQobGluZSk7XHJcblx0XHRcdGlmIChqIDwgbGluZXMubGVuZ3RoIC0gMSkge1xyXG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdFx0XHRidWYuY2xlYXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcclxuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xyXG5cdFx0YXJyLmhlaWdodCA9IGFyci5saW5lSGVpZ2h0ICogYXJyLmxlbmd0aDtcclxuXHRcdHJldHVybiBhcnI7XHJcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XHJcblxyXG5cdC8qKlxyXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cclxuXHQgKiBAcGFyYW0gbGFiZWwgVGhlIHN0cmluZyB0aGF0IG5lZWRzIHRvIGJlIGRpc3BsYXllZFxyXG5cdCAqIEBwYXJhbSBjb250YWluZXJXaWR0aCBUaGUgd2lkdGggb2YgdGhlIHBhcmVudCBjb250YWluZXIuXHJcblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxyXG5cdCAqIEBwYXJhbSBsYWJlbENvbmZpZyBUaGUgY29uZmlndXJhdGlvbiBvbiBob3cgdG8gZGlzcGxheSBsYWJlbC4gSXQgc2hvdWxkIGJlIGFuIG9iamVjdCB3aXRoIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcclxuXHQgKiB7XHJcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxyXG5cdCAqICAgICAgYWxpZ246IGNhbiBiZSBlaXRoZXIgXCJsZWZ0XCIsIFwiY2VudGVyXCIgb3IgXCJyaWdodFwiLFxyXG5cdCAqICAgICAgd2lkdGg6IHRoZSBtYXhpbXVtIHdpZHRoIG9mIHRoZSBsYWJlbC4gaWYgbGVzcyB0aGFuIDEsIHRoZW4gaXMgdHJlYXRlZCBhcyBwZXJjZW50YWdlLiBJZiAwLCBubyB3cmFwcGluZyB3aWxsIG9jY3VyLFxyXG5cdCAqICAgICAgaGVpZ2h0LFxyXG5cdCAqICAgICAgZ2VvbWV0cnlcclxuXHQgKiB9XHJcblx0ICogQHJldHVybnMgeyp9XHJcblx0ICovXHJcblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnLCBjb250YWluZXJXaWR0aCwgY29udGFpbmVySGVpZ2h0KSB7XHJcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xyXG5cdFx0cmV0dXJuIF9nZXRMYWJlbEJveC5jYWxsKHRoaXMsIGxhYmVsLCBsYWJlbENvbmZpZywgbGluayk7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBfZ2V0TGFiZWxCb3gobGFiZWwsIGxhYmVsQ29uZmlnID0ge30sIGNvbnRleHQpIHtcclxuXHRcdGxhYmVsQ29uZmlnID0gXy5kZWZhdWx0c0RlZXAobGFiZWxDb25maWcsIGRlZmF1bHRDb25maWcpO1xyXG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XHJcblx0XHRsZXQgZm9udEZhbWlseSA9IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHk7XHJcblx0XHRsZXQgZm9udFN0eWxlID0gbGFiZWxDb25maWcuZm9udFN0eWxlO1xyXG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XHJcblx0XHRsZXQgcGFkZGluZyA9IGxhYmVsQ29uZmlnLnBhZGRpbmc7XHJcblx0XHRsZXQgbGluZVBhZGRpbmcgPSBsYWJlbENvbmZpZy5saW5lUGFkZGluZztcclxuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xyXG5cclxuXHRcdGxldCB3ID0gbGFiZWxDb25maWcud2lkdGgsIGggPSBsYWJlbENvbmZpZy5oZWlnaHQ7XHJcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xyXG5cdFx0XHR3ID0gdyA8PSA1ID8gY29udGV4dC53aWR0aCAqIHcgOiB3O1xyXG5cdFx0XHRoID0gaCA8PSA1ID8gY29udGV4dC5oZWlnaHQgKiBoIDogaDtcclxuXHRcdH1cclxuXHRcdHcgLT0gMiAqIHBhZGRpbmc7XHJcblx0XHRoIC09IDIgKiBwYWRkaW5nO1xyXG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xyXG5cdFx0aCA9IE1hdGgubWF4KDAsIGgpO1xyXG5cclxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xyXG5cdFx0bGV0IHdyYXBwZWRMYWJlbCA9IHRoaXMud3JhcChsYWJlbCwgdywgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpO1xyXG5cdFx0Z2VvbWV0cnkud2lkdGggPSB3cmFwcGVkTGFiZWwud2lkdGggKyAyICogcGFkZGluZztcclxuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcclxuXHRcdGxldCBhbmNob3IgPSBcInN0YXJ0XCIsIGR4ID0gMCwgc2V0QW5jaG9yWCA9ICFfLmhhcyhnZW9tZXRyeSwgXCJhbmNob3JYXCIpO1xyXG5cdFx0c3dpdGNoIChhbGlnbikge1xyXG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XHJcblx0XHRcdFx0YW5jaG9yID0gXCJtaWRkbGVcIjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDA7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJyaWdodFwiOlxyXG5cdFx0XHRcdGFuY2hvciA9IFwiZW5kXCI7XHJcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcclxuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IC0wLjU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XHJcblx0XHRcdFx0ZHggPSAtd3JhcHBlZExhYmVsLndpZHRoLzI7XHJcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAwLjU7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHR9XHJcblx0XHRsZXQgcG9zO1xyXG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcclxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcclxuXHRcdGVsc2VcclxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XHJcblxyXG5cdFx0bGV0IGJvdW5kcyA9IG5ldyBSZWN0YW5nbGUocG9zWzBdLCBwb3NbMV0sIGdlb21ldHJ5LndpZHRoLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxyXG5cdFx0bGV0IHBpdm90ID0gYWxpZ24gPT0gJ2NlbnRlcicgPyBbMCwgMF0gOiAoYWxpZ24gPT0gJ2xlZnQnID8gWy13cmFwcGVkTGFiZWwud2lkdGgvMiwgMF0gOiBbd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdKTtcclxuXHJcblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXHJcblx0XHRnZW9tZXRyeS53aWR0aCA9IE1hdGgubWF4KHcgKyAyICogcGFkZGluZywgZ2VvbWV0cnkud2lkdGgpO1xyXG5cdFx0Z2VvbWV0cnkuaGVpZ2h0ID0gTWF0aC5tYXgoaCArIDIgKiBwYWRkaW5nLCBnZW9tZXRyeS5oZWlnaHQpO1xyXG5cclxuXHRcdGlmIChjb250ZXh0LmdldFJlbGF0aXZlUG9zaXRpb24pXHJcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XHJcblx0XHRlbHNlXHJcblx0XHRcdHBvcyA9IFV0aWxzLmdldFJlbGF0aXZlUG9zaXRpb24oe3dpZHRoOiBjb250ZXh0LndpZHRoLCBoZWlnaHQ6IGNvbnRleHQuaGVpZ2h0fSwgZ2VvbWV0cnkpO1xyXG5cclxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdGNvbmZpZzogbGFiZWxDb25maWcsIGxhYmVsOiB3cmFwcGVkTGFiZWwsIF9sYWJlbDogbGFiZWwsXHJcblx0XHRcdGJvbGQsIHVuZGVybGluZTogZm9udFN0eWxlICYgRk9OVF9VTkRFUkxJTkUsIGl0YWxpYzogZm9udFN0eWxlICYgRk9OVF9JVEFMSUMsIHNoYWRvdzogZm9udFN0eWxlICYgRk9OVF9TSEFET1csXHJcblx0XHRcdGR4LCBkeTogLWdlb21ldHJ5LmhlaWdodC8yICsgcGFkZGluZyArIHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0IC0gd3JhcHBlZExhYmVsLmJhc2VsaW5lLCBhbmNob3IsIGxpbmVIZWlnaHQ6IHdyYXBwZWRMYWJlbC5saW5lSGVpZ2h0ICsgbGluZVBhZGRpbmcsXHJcblx0XHRcdHBpdm90LCBib3VuZHMsIG1heEJvdW5kc1xyXG5cdFx0fTtcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcclxuXHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XHJcblx0fVxyXG5cclxuXHRsZXQgZWRpdG9yID0ge1xyXG5cdFx0c3RhcnQ6IGZ1bmN0aW9uKGtleSwgY29udGFpbmVyLCBib3gsIHJlZkVsLCB0ZXh0RWwsIHNjYWxlID0gMS4wLCBzaW5nbGVMaW5lID0gdHJ1ZSkge1xyXG5cdFx0XHRpZiAodGhpcy5pbnB1dCkge1xyXG5cdFx0XHRcdGlmICh0aGlzLmtleSAhPSBrZXkpIHtcclxuXHRcdFx0XHRcdC8vIG5lZWQgdG8gY2xvc2UgdGhlIGV4aXN0aW5nIGVkaXRvciBmaXJzdFxyXG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XHJcblx0XHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdH1cclxuXHRcdFx0dmFyIHRhZyA9IHNpbmdsZUxpbmUgPyAnaW5wdXQnIDogJ3RleHRhcmVhJztcclxuXHRcdFx0dGhpcy5pbnB1dCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQodGFnLCB7aWQ6XCJpbmxpbmVFZGl0b3JcIiwgdW5zZWxlY3RhYmxlOlwib2ZmXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCBvdmVyZmxvdzpcImhpZGRlblwiLCBwYWRkaW5nOlwiMHB4XCIsIG1hcmdpbjpcIjBweFwiLCBib3JkZXI6XCJ0cmFuc3BhcmVudFwifSk7XHJcblx0XHRcdGlmIChzaW5nbGVMaW5lKSB7XHJcblx0XHRcdFx0RXZlbnRzLm9uKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJywgKGV2ZW50KSA9PiB7XHJcblx0XHRcdFx0XHRpZiAoZXZlbnQua2V5Q29kZSA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRFdmVudHMub2ZmKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJyk7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3RvcCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLmlucHV0KTtcclxuXHJcblx0XHRcdHRoaXMua2V5ID0ga2V5O1xyXG5cdFx0XHR0aGlzLmJveCA9IGJveDtcclxuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xyXG5cdFx0XHR0aGlzLnRleHRFbCA9IHRleHRFbDtcclxuXHJcblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XHJcblx0XHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKGJveC5tYXhCb3VuZHMueCwgYm94Lm1heEJvdW5kcy55LCBib3gubWF4Qm91bmRzLndpZHRoICogc2NhbGUsIGJveC5tYXhCb3VuZHMuaGVpZ2h0ICogc2NhbGUpO1xyXG5cdFx0XHRsZXQgcG9zID0gRG9tVXRpbHMuZ2V0Q2VudGVyUG9zaXRpb24ocmVmRWwsIGNvbnRhaW5lcik7XHJcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBtYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgbWF4Qm91bmRzLnRvcF07XHJcblxyXG5cdFx0XHRpZiAodGV4dEVsKVxyXG5cdFx0XHRcdHRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG5cdFx0XHREb21VdGlscy5zZXRFbGVtZW50KHRoaXMuaW5wdXQsIG51bGwsIHtcclxuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcblx0XHRcdFx0bGVmdDogcG9zWzBdICsgXCJweFwiLFxyXG5cdFx0XHRcdHRvcDogcG9zWzFdICsgXCJweFwiLFxyXG5cdFx0XHRcdHdpZHRoOiBtYXhCb3VuZHMud2lkdGggKyAncHgnLFxyXG5cdFx0XHRcdGhlaWdodDogbWF4Qm91bmRzLmhlaWdodCArICdweCcsXHJcblx0XHRcdFx0XCJmb250LWZhbWlseVwiOiBsYWJlbENvbmZpZy5mb250RmFtaWx5LFxyXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXHJcblx0XHRcdFx0XCJmb250LXdlaWdodFwiOiAobGFiZWxDb25maWcuZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQgPyAnYm9sZCcgOiAnbm9ybWFsJ1xyXG5cdFx0XHRcdC8qXCJjb2xvclwiOiBsYWJlbENvbmZpZy5mb250Q29sb3IqL1xyXG5cdFx0XHR9KTtcclxuXHJcblx0XHRcdHRoaXMuaW5wdXQudmFsdWUgPSBib3guX2xhYmVsO1xyXG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XHJcblx0XHRcdHRoaXMuaW5wdXQuc2VsZWN0KCk7XHJcblx0XHRcdEV2ZW50cy5maXJlKHRoaXMsICdlZGl0b3Iuc3RhcnQnLCBbdGhpcy5rZXldKTtcclxuXHRcdH0sXHJcblxyXG5cdFx0c3RvcDogZnVuY3Rpb24oY2FuY2VsKSB7XHJcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xyXG5cclxuXHRcdFx0Y2FuY2VsID0gY2FuY2VsIHx8IGZhbHNlO1xyXG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXHJcblx0XHRcdFx0dGhpcy50ZXh0RWwuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XHJcblxyXG5cdFx0XHRpZiAoIWNhbmNlbClcclxuXHRcdFx0XHRFdmVudHMuZmlyZSh0aGlzLCAnZWRpdG9yLnVwZGF0ZScsIFt0aGlzLmtleSwgdGhpcy5pbnB1dC52YWx1ZV0pO1xyXG5cclxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XHJcblxyXG5cdFx0XHQvLyByZW1vdmUgdGhlIGlucHV0XHJcblx0XHRcdHRoaXMuaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuaW5wdXQ7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLmtleTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xyXG5cdFx0XHRkZWxldGUgdGhpcy5yZWZFbDtcclxuXHRcdFx0ZGVsZXRlIHRoaXMudGV4dEVsO1xyXG5cdFx0fVxyXG5cdH07XHJcblxyXG5cdHJldHVybiB7XHJcblx0XHRGT05UX0JPTEQsXHJcblx0XHRGT05UX0lUQUxJQyxcclxuXHRcdEZPTlRfVU5ERVJMSU5FLFxyXG5cdFx0Rk9OVF9TSEFET1csXHJcblx0XHRnZXRTdHJpbmdTaXplLFxyXG5cdFx0d3JhcCxcclxuXHRcdGdldExhYmVsQm94LFxyXG5cdFx0Z2V0TGFiZWxCb3hGb3JMaW5rLFxyXG5cdFx0cmVuZGVyLFxyXG5cdFx0ZWRpdG9yXHJcblx0fTtcclxufSkoKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9MYWJlbC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IENlbGwgZnJvbSBcIi4vQ2VsbFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIi4uL2dlb21ldHJ5L0xpbmtcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuLi92aWV3L0xhYmVsXCI7XHJcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xyXG5cclxuY2xhc3MgRWRnZSBleHRlbmRzIENlbGwge1xyXG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcclxuXHRcdGlmICghY29uZmlnLmlkKSBjb25maWcuaWQgPSBfLnVuaXF1ZUlkKCdFJyk7XHJcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcclxuXHJcblx0XHR0aGlzLnNvdXJjZSA9IHRoaXMudGFyZ2V0ID0gbnVsbDtcclxuXHRcdHRoaXMuc2V0U291cmNlKHNvdXJjZSwgY29uZmlnLnNvdXJjZVBvcyk7XHJcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xyXG5cdH1cclxuXHJcblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xyXG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICdzb3VyY2UnKTtcclxuXHR9XHJcblxyXG5cdHNldFRhcmdldChub2RlLCBwb3MpIHtcclxuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAndGFyZ2V0Jyk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcclxuXHQgKi9cclxuXHQgc2V0VGVybWluYWwobm9kZSwgcG9zLCBkaXIpIHtcclxuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xyXG5cdFx0aWYgKGVuZCA9PSBub2RlKSB7XHJcblx0XHRcdC8vIHNpbXBseSBjaGFuZ2UgdGhlIHBvc2l0aW9uIG9mIHRoZSBlZGdlLlxyXG5cdFx0XHRpZiAobm9kZSlcclxuXHRcdFx0XHRub2RlLnNldEVkZ2VBdCh0aGlzLCBwb3MpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGVuZCkge1xyXG5cdFx0XHRcdC8vIGZpcnN0IHJlbW92ZSB0aGUgZWRnZSBmcm9tIHRoZSBjdXJyZW50IGVuZFxyXG5cdFx0XHRcdGVuZC5yZW1vdmVFZGdlKHRoaXMpO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRpZiAobm9kZSkge1xyXG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0XHRub2RlLmFkZE91dEVkZ2UodGhpcywgcG9zKTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXHJcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0dGhpcy50YXJnZXQgPSBub2RlO1xyXG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGdldExhYmVsQm94KGtleSkge1xyXG5cdFx0dmFyIGxhYmVsID0gdGhpcy5wcm9wKCdsYWJlbCcpO1xyXG5cdFx0aWYgKGxhYmVsKVxyXG5cdFx0XHRyZXR1cm4gTGFiZWwuZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCB0aGlzLnZpZXdQcm9wKGtleSwgJ2xhYmVsQ29uZmlnJyksIHRoaXMuZ2V0U2hhcGUoa2V5KSk7XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXHJcblx0ICovXHJcblx0Z2V0UmVmZXJlbmNlUG9pbnRzKGtleSkge1xyXG5cdFx0bGV0IHB0cyA9IFtdO1xyXG5cdFx0aWYgKHRoaXMuc291cmNlKVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnNvdXJjZS5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnc3RhcnQnKSk7XHJcblxyXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxyXG5cdFx0XHRwdHMucHVzaCh0aGlzLnRhcmdldC5nZXRTaGFwZShrZXkpLmNlbnRlcik7XHJcblx0XHRlbHNlXHJcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xyXG5cclxuXHRcdHJldHVybiBwdHM7XHJcblx0fVxyXG5cclxuXHRnZXRUZXJtaW5hbFZpc3VhbChrZXksIG9ydGhvZ29uYWwpIHtcclxuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xyXG5cdFx0bGV0IHRlcm1pbmFscyA9IFtdO1xyXG5cclxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XHJcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKHB0LngsIHB0LnksIDMsIDMpO1xyXG5cdFx0fTtcclxuXHJcblx0XHRpZiAodGhpcy5zb3VyY2UpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy5zb3VyY2UuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgnc291cmNlUG9ydCcpLCByZWZQdHNbMV0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1swXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1swXSksIHJlZlB0c1sxXSwgdHJ1ZSl9KTtcclxuXHJcblx0XHRpZiAodGhpcy50YXJnZXQpIHtcclxuXHRcdFx0dGVybWluYWxzLnB1c2godGhpcy50YXJnZXQuZ2V0UG9ydChrZXksIHRoaXMucHJvcCgndGFyZ2V0UG9ydCcpLCByZWZQdHNbMF0sIG9ydGhvZ29uYWwpKTtcclxuXHRcdH0gZWxzZVxyXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcclxuXHRcdHJldHVybiB0ZXJtaW5hbHM7XHJcblx0fVxyXG5cclxuXHRnZXRTaGFwZShrZXkpIHtcclxuXHRcdGxldCBzaGFwZSA9IENhY2hlLmdldCh0aGlzLmlkICsgXCIuc2hhcGVcIiwga2V5KTtcclxuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xyXG5cclxuXHRcdGxldCBjb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XHJcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XHJcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcclxuXHRcdHJldHVybiBzaGFwZTtcclxuXHR9XHJcblxyXG5cdHRvU3RyaW5nKCkge1xyXG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHN1cGVyLmRlc3Ryb3koKTtcclxuXHRcdHRoaXMuc2V0U291cmNlKG51bGwpO1xyXG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XHJcblx0fVxyXG59XHJcbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRnZTtcclxuXHJcbi8qXHJcblxyXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcclxuXHRpZiAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImFsbG93RGFuZ2xpbmdFZGdlc1wiKSkge1xyXG5cdFx0cmV0dXJuICh0aGlzLnNvdXJjZSA/IHRoaXMuc291cmNlLmlzVmlzaWJsZSgpIDogdHJ1ZSkgJiYgKHRoaXMudGFyZ2V0ID8gdGhpcy50YXJnZXQuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwidmlzaWJsZVwiKTtcclxuXHR9IGVsc2VcclxuXHRcdHJldHVybiB0aGlzLnNvdXJjZSAmJiB0aGlzLnRhcmdldCAmJiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJykgJiYgdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgJiYgdGhpcy50YXJnZXQuaXNWaXNpYmxlKCk7XHJcbn07XHJcblxyXG4qL1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9FZGdlLmpzXG4gKiovIiwiaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XHJcblxyXG5sZXQgcmVnaXN0cnkgPSB7fTtcclxuXHJcbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8qKiBCZWdpbiBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cclxuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xyXG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XHJcblx0XHR2YXIgbWFya2VyID0ge1xyXG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcclxuXHRcdFx0c2l6ZTogc2l6ZSxcclxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0ge1xyXG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXHJcblx0XHRcdHBvaW50czogW1stMipzaWduLCAwXSwgWy00KnNpZ24sIDRdLCBbNCpzaWduLCAwXSwgWy00KnNpZ24sIC00XV1cclxuXHRcdH07XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcclxuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXHJcblx0XHRcdHNpemU6IHNpemUsXHJcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXHJcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxyXG5cdFx0fTtcclxuXHRcdG1hcmtlci5zaGFwZSA9IHtcclxuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxyXG5cdFx0XHRwb2ludHM6IFtbLTUqc2lnbiwgLTVdLCBbLTUqc2lnbiwgNV0sIFs0KnNpZ24sIDBdXVxyXG5cdFx0fTtcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgciA9IHNpemUgLyAyO1xyXG5cdFx0dmFyIG1hcmtlciA9IHtcclxuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFswLCAwXSxcclxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXHJcblx0XHR9O1xyXG5cdFx0bWFya2VyLnNoYXBlID0gJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJyArIHIgKyAnXCIgcnk9XCInICsgciArICdcIj48L2VsbGlwc2U+JztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XHJcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcclxuXHRcdHZhciBtYXJrZXIgPSB7XHJcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxyXG5cdFx0XHRzaXplOiBzaXplLFxyXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxyXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3JcclxuXHRcdH07XHJcblx0XHRtYXJrZXIuc2hhcGUgPSAnJztcclxuXHRcdHJldHVybiBtYXJrZXI7XHJcblx0fVxyXG5cdC8qKiBFbmQgU3RhbmRhcmQgTWFya2VyIFR5cGUgKiovXHJcblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XHJcblx0XHR2YXIgZmFjdG9yeSA9IHJlZ2lzdHJ5W2NvbmZpZy50eXBlXTtcclxuXHRcdHZhciBtYXJrZXIgPSBmYWN0b3J5KGNvbmZpZy5zaXplLCBzb3VyY2UsIGNvbmZpZyk7XHJcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XHJcblx0XHRyZXR1cm4gbWFya2VyO1xyXG5cdH1cclxuXHJcblx0cmVnaXN0cnlbJ2Fycm93J10gPSBhcnJvdztcclxuXHRyZWdpc3RyeVsndHJpYW5nbGUnXSA9IHRyaWFuZ2xlO1xyXG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xyXG5cdHJlZ2lzdHJ5WydkaWFtb25kJ10gPSBkaWFtb25kO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0cmVnaXN0cnk6IHJlZ2lzdHJ5LFxyXG5cdFx0Z2V0TWFya2VyOiBnZXRNYXJrZXJcclxuXHR9O1xyXG59KSgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xyXG5cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9NYXJrZXIuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5cclxuY2xhc3MgTGF5b3V0IHtcclxuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcclxuXHRcdGlmIChjb25maWcuaGFzT3duUHJvcGVydHkoXCJvcmllbnRhdGlvblwiKSAmJiBfLmlzU3RyaW5nKGNvbmZpZy5vcmllbnRhdGlvbikpIHtcclxuXHRcdFx0aWYgKGNvbmZpZy5vcmllbnRhdGlvbi50b1VwcGVyQ2FzZSgpID09IFwiSE9SSVpPTlRBTFwiKVxyXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0ZGVsZXRlIGNvbmZpZy5vcmllbnRhdGlvbjtcclxuXHRcdH1cclxuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcclxuXHR9XHJcblxyXG5cdGxheW91dChyb290LCBib3VuZHMpIHt9XHJcblx0cmVzZXQoKSB7fVxyXG5cdGRlc3Ryb3koKSB7fVxyXG59XHJcbkxheW91dC5WRVJUSUNBTCA9IDA7XHJcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcclxuXHJcbkxheW91dC5ERUZBVUxUUyA9IHtcclxuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9MYXlvdXQuanNcbiAqKi8iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL0xheW91dFwiO1xyXG5cclxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XHJcblx0bGF5b3V0KHJvb3QsIGJvdW5kcykge1xyXG5cdFx0dmFyIGl0ZW1zO1xyXG5cdFx0aWYgKCFyb290KVxyXG5cdFx0XHRpdGVtcyA9IHRoaXMub3duZXIuY2hpbGROb2RlcztcclxuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShyb290KSlcclxuXHRcdFx0aXRlbXMgPSByb290O1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRpdGVtcyA9IHJvb3QuZ2V0TGlua2VkTm9kZXMoJ3RhcmdldCcpO1xyXG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG5cclxuXHRcdHZhciB4ID0gMCwgeSA9IDAsIGggPSAwLCBub2RlO1xyXG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRub2RlID0gaXRlbXNbaV07XHJcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XHJcblx0XHRcdFx0Ly8gY3JlYXRlIG5ldyBsaW5lXHJcblx0XHRcdFx0eSArPSBoICsgdGhpcy52Z2FwO1xyXG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xyXG5cdFx0XHR9XHJcblx0XHRcdG5vZGUuX2ZsUG9zID0gW3AxLCBwMl07XHJcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xyXG5cdFx0XHR4ICs9IHRoaXMuaGdhcCArIG5vZGUuZ2V0UHJvcGVydHkoXCJ3aWR0aFwiKTtcclxuXHRcdFx0cDErKztcclxuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XHJcblx0XHR9XHJcblx0XHR0aGlzLnRyaWdnZXIobmV3IFJlY3RhbmdsZShib3VuZHMueCwgYm91bmRzLnksIGJvdW5kcy53aWR0aCwgeSArIGgpKTtcclxuXHR9XHJcbn1cclxuXHJcbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XHJcblx0aGdhcDogMTAsXHJcblx0dmdhcDogMTBcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZsb3dMYXlvdXQ7XHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xyXG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0L0xheW91dFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcclxuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XHJcbmltcG9ydCBHcmFwaEJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XHJcbmltcG9ydCBTZWxlY3Rpb25CZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcclxuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XHJcblxyXG5jbGFzcyBSZW5kZXJlciB7XHJcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30sIGdyYXBoID0gbnVsbCkge1xyXG5cdFx0dGhpcy5pZCA9IGlkO1xyXG5cdFx0dGhpcy5ib3ggPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdkaXYnLCB7aWQ6IHRoaXMuaWQsIHRhYmluZGV4OiAwLCBuczogJ2dyYXBoJ30sIHtvdmVyZmxvdzogXCJoaWRkZW5cIiwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBwb3NpdGlvbjogJ3JlbGF0aXZlJ30pO1xyXG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcclxuXHRcdGlmIChjb25maWcubGF5b3V0KSB7XHJcblx0XHRcdGxldCBsYXlvdXRDbGFzcyA9IFV0aWxzLmdldENvbnN0cnVjdG9yKGNvbmZpZy5sYXlvdXQuanNDbGFzcywgTGF5b3V0KTtcclxuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgbGF5b3V0Q2xhc3MoY29uZmlnLmxheW91dC5jb25maWcpO1xyXG5cdFx0XHRkZWxldGUgY29uZmlnLmxheW91dDtcclxuXHRcdH1cclxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xyXG5cdFx0dGhpcy5fdHJhbnNsYXRlID0gWzAsIDBdO1xyXG5cdFx0dGhpcy5fc2NhbGUgPSAxLjA7XHJcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XHJcblx0XHR0aGlzLmRpc3BhdGNoZXIgPSBudWxsO1xyXG5cdFx0dGhpcy5ncmFwaEJlaGF2aW9yID0gbnVsbDtcclxuXHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5ub2RlQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5lZGdlQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0dGhpcy5jb25uZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xyXG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xyXG5cclxuXHRcdEV2ZW50cy5vbihMYWJlbC5lZGl0b3IsICdlZGl0b3IudXBkYXRlLionLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGtleSArICc9JyArIHZhbHVlKTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0Z2V0IGdyYXBoKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xyXG5cdH1cclxuXHJcblx0c2V0IGdyYXBoKGdyYXBoKSB7XHJcblx0XHR0aGlzLl9ncmFwaCA9IGdyYXBoO1xyXG5cdFx0bGV0IHJvb3QgPSBncmFwaC5jdXJyZW50Um9vdDtcclxuXHRcdGlmIChyb290KSB7XHJcblx0XHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFtyb290LnZpZXdQcm9wKHRoaXMuaWQsICd4JykgfHwgMCwgcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneScpIHx8IDBdO1xyXG5cdFx0XHR0aGlzLl9zY2FsZSA9IHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJykgfHwgMS4wO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xyXG5cdFx0aWYgKF8uaXNVbmRlZmluZWQoc2NhbGVkKSB8fCBfLmlzTnVsbChzY2FsZWQpKSBzY2FsZWQgPSBmYWxzZTtcclxuXHRcdGlmICghdmlld3BvcnQpIHtcclxuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcclxuXHRcdFx0aWYgKHNjYWxlZClcclxuXHRcdFx0XHRyZXR1cm4gVXRpbHMuc2NhbGUodGhpcy50cmFuc2xhdGUsIHRoaXMuc2NhbGUsIHZwKTtcclxuXHRcdFx0cmV0dXJuIHZwO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFzY2FsZWQpIHZpZXdwb3J0ID0gVXRpbHMuc2NhbGUodGhpcy50cmFuc2xhdGUsIHRoaXMuc2NhbGUsIHZpZXdwb3J0KTtcclxuXHRcdHZhciB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XHJcblx0XHR2YXIgc2NhbGUgPSB3IC8gdmlld3BvcnQud2lkdGg7XHJcblx0XHR0aGlzLnRyYW5zZm9ybSgtdmlld3BvcnQueCpzY2FsZSwgLXZpZXdwb3J0Lnkqc2NhbGUsIHNjYWxlKTtcclxuXHR9XHJcblxyXG5cdGdldCB0cmFuc2xhdGUoKSB7IHJldHVybiB0aGlzLl90cmFuc2xhdGU7IH1cclxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cclxuXHRnZXQgc2NhbGUoKSB7IHJldHVybiB0aGlzLl9zY2FsZTsgfVxyXG5cdHNldCBzY2FsZShrKSB7XHJcblx0XHRzd2l0Y2ggKGspIHtcclxuXHRcdFx0Y2FzZSBcImluXCI6XHJcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUgKiB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwib3V0XCI6XHJcblx0XHRcdFx0ayA9IHRoaXMuc2NhbGUgLyB0aGlzLnByb3AoXCJ6b29tRmFjdG9yXCIpO1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIFwiYWN0dWFsXCI6XHJcblx0XHRcdFx0ayA9IDEuMDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSBcImZpdFwiOlxyXG5cdFx0XHRcdHZhciBncmlkU2l6ZSA9IHRoaXMucHJvcChcImdyaWRTaXplXCIpICogMjtcclxuXHJcblx0XHRcdFx0dmFyIGdCb3VuZHMgPSB0aGlzLmdldEJvdW5kcygpO1xyXG5cdFx0XHRcdHZhciB2Qm91bmRzID0gdGhpcy52aWV3cG9ydCgpO1xyXG5cclxuXHRcdFx0XHR2Qm91bmRzLndpZHRoIC09IGdyaWRTaXplO1xyXG5cdFx0XHRcdHZCb3VuZHMuaGVpZ2h0IC09IGdyaWRTaXplO1xyXG5cclxuXHRcdFx0XHQvKiBEbyBub3Qgem9vbSBtb3JlIHRoYW4gYWN0dWFsIGlmIGdyYXBoIGFscmVhZHkgZml0cyBpbnRvIHRoZSBib3VuZHMgKi9cclxuXHRcdFx0XHRrID0gTWF0aC5taW4oKHZCb3VuZHMud2lkdGggLyBnQm91bmRzLndpZHRoKSwgKHZCb3VuZHMuaGVpZ2h0IC9nQm91bmRzLmhlaWdodCksIDEuMCk7XHJcblxyXG5cdFx0XHRcdC8vVE9ETzogQWRkIGNlbnRlcmluZyBjb2RlIGhlcmUgb3IgdHJpZ2dlciBhbiBldmVudCBmb3IgdGhhdFxyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdGlmIChfLmlzU3RyaW5nKGspKSBrID0gcGFyc2VGbG9hdChrKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHRoaXMudHJhbnNmb3JtKG51bGwsIG51bGwsIGspO1xyXG5cdH1cclxuXHJcblx0dHJhbnNmb3JtKHggPSBudWxsLCB5ID0gbnVsbCwgc2NhbGUgPSBudWxsKSB7XHJcblx0XHRsZXQgZ3JhcGggPSB0aGlzLmdyYXBoO1xyXG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcclxuXHRcdGlmICghXy5pc051bGwoeCkpIHtcclxuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzBdID0geDtcclxuXHRcdFx0aWYgKHJvb3QpXHJcblx0XHRcdFx0cm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcsIHgpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xyXG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMV0gPSB5O1xyXG5cdFx0XHRpZiAocm9vdClcclxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XHJcblx0XHR9XHJcblx0XHRpZiAoIV8uaXNOdWxsKHNjYWxlKSkge1xyXG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xyXG5cdFx0XHRpZiAocm9vdClcclxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICdzY2FsZScsIHNjYWxlKTtcclxuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXHJcblx0XHRcdGxldCBzID0gdGhpcy5kaXNwYXRjaGVyLnNjYWxlO1xyXG5cdFx0XHRpZiAocyAhPSBzY2FsZSlcclxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcclxuXHRcdH1cclxuXHRcdHRoaXMucmVmcmVzaCgpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyKCkge1xyXG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xyXG5cdFx0aWYgKHRoaXMubGF5b3V0KVxyXG5cdFx0XHR0aGlzLmxheW91dC5sYXlvdXQodGhpcy5fZ3JhcGguY3VycmVudFJvb3QsIHRoaXMudmlld3BvcnQoKSk7XHJcblxyXG5cdFx0dGhpcy5pbml0aWFsaXplQmVoYXZpb3JzKCk7XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxhYmVsKGJveCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcclxuXHR9XHJcblxyXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcclxuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlckxpbmsoc2hhcGUpO1xyXG5cdH1cclxuXHJcblx0cmVuZGVyTWFya2VycyhtYXJrZXJzKSB7XHJcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJNYXJrZXJzKG1hcmtlcnMpO1xyXG5cdH1cclxuXHJcblx0aW5pdGlhbGl6ZUJlaGF2aW9ycygpIHtcclxuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXHJcblx0XHRpZiAoIXRoaXMuZGlzcGF0Y2hlcikge1xyXG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIgPSBuZXcgRXZlbnREaXNwYXRjaGVyKHRoaXMuYm94LCBbdGhpcy5wcm9wKCdtaW5ab29tJyksIHRoaXMucHJvcCgnbWF4Wm9vbScpXSk7XHJcblx0XHRcdGxldCBqc0NsYXNzO1xyXG5cdFx0XHRpZiAodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpIHtcclxuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdncmFwaEJlaGF2aW9yJykpO1xyXG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICh0aGlzLnByb3AoJ3NlbGVjdGlvbkJlaGF2aW9yJykpIHtcclxuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdzZWxlY3Rpb25CZWhhdmlvcicpKTtcclxuXHRcdFx0XHR0aGlzLnNlbGVjdGlvbkJlaGF2aW9yID0gbmV3IGpzQ2xhc3ModGhpcyk7XHJcblx0XHRcdH1cclxuXHRcdFx0Lyp0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0XHRsZXQgbm9kZSA9IHRoaXMuX2dyYXBoLm5vZGVzW3RhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJyldO1xyXG5cdFx0XHRcdGlmICghdGhpcy5kaXNwYXRjaGVyLmRyYWdnaW5nICYmICFub2RlLl9maXJzdFNlbGVjdGlvbikge1xyXG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoTGFiZWwuX2RlbGF5RWRpdCkge1xyXG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSBMYWJlbC5fZGVsYXlFZGl0O1xyXG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCwgdGhpcy5zY2FsZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sIDI1MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKTtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnJlZ2lzdGVyKFsvXm1vdXNlZG93bi8sIC9eem9vbS9dLCBmdW5jdGlvbih0eXBlLCBucywgdGFyZ2V0LCBwb3MsIGV2ZW50KSB7XHJcblx0XHRcdFx0aWYgKCFEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHtcclxuXHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdG9wKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9LCB0aGlzKTsqL1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5kaXNwYXRjaGVyLnN0YXJ0KCk7XHJcblx0fVxyXG5cclxuXHRyZWZyZXNoKCkge31cclxuXHJcblx0LyoqXHJcblx0ICogR2V0IHRoZSB0ZW1wbGF0ZSBmb3IgdGhlIHNwZWNpZmllZCBrZXkuXHJcblx0ICogQHBhcmFtIGtleVxyXG5cdCAqIEBwYXJhbSBjb25maWcgaWYgdGhlIHRlbXBsYXRlIGlzIGEgZnVuY3Rpb24sIHRoaXMgY29uZmlnIHdpbGwgYmUgcGFzc2VkIGFzIHRoZSBhcmd1bWVudC5cclxuXHQgKiBAcGFyYW0gcHJlcHJvY2Vzc29yIGlmIHRoZSB0ZW1wbGF0ZSBjb250YWlucyBwcmVwcm9zc2luZyBlbGVtZW50cywgc3VjaCBhcyAje3NoYXBlfSwgdGhlIHByZXByb2Nlc3NvciB3aWxsIGJlXHJcblx0ICogdXNlZCB0byByZW5kZXIgdGhlbS5cclxuXHQgKiBAcmV0dXJucyB7Kn1cclxuXHQgKi9cclxuXHRnZXRUZW1wbGF0ZShrZXksIGNvbmZpZywgcHJlcHJvY2Vzc29yKSB7XHJcblx0XHR2YXIgdCA9IHRoaXMuY29uc3RydWN0b3IuVEVNUExBVEVTW2tleV07XHJcblx0XHRpZiAodCAmJiBfLmlzRnVuY3Rpb24odCkpIHtcclxuXHRcdFx0dCA9IHQoY29uZmlnKTtcclxuXHRcdH1cclxuXHRcdC8vIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgcHJlcHJvY2Vzc2luZyB0YWdzLlxyXG5cdFx0aWYgKHByZXByb2Nlc3Nvcikge1xyXG5cdFx0XHR2YXIgcGFydHMgPSB0Lm1hdGNoKC8oI3tbXiNdKn0pL2cpO1xyXG5cdFx0XHR2YXIgb2JqID0ge307XHJcblx0XHRcdGZvciAobGV0IHBhcnQgaW4gcGFydHMpIHtcclxuXHRcdFx0XHRwYXJ0ID0gcGFydHNbcGFydF07XHJcblx0XHRcdFx0cGFydCA9IHBhcnQuc3Vic3RyaW5nKDIsIHBhcnQubGVuZ3RoIC0xKS50cmltKCk7XHJcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcclxuXHRcdFx0fVxyXG5cdFx0XHR0ID0gXy50ZW1wbGF0ZSh0LCB7aW50ZXJwb2xhdGU6IC8jeyhbXFxzXFxTXSs/KX0vZ30pKG9iaik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdDtcclxuXHR9XHJcblxyXG5cdHJlc2V0KCkge31cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGRlbGV0ZSB0aGlzLl9ncmFwaDtcclxuXHRcdGRlbGV0ZSB0aGlzLmxheW91dDtcclxuXHRcdGlmICh0aGlzLmRpc3BhdGNoZXIpIHtcclxuXHRcdFx0dGhpcy5kaXNwYXRjaGVyLnN0b3AoKTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMuZGlzcGF0Y2hlcjtcclxuXHRcdH1cclxuXHRcdHRoaXMuYm94LmlubmVySFRNTCA9ICcnO1xyXG5cdH1cclxufVxyXG5SZW5kZXJlci5ERUZBVUxUUyA9IHtcclxuXHRkZWZhdWx0Q2xpY2tNb2RlOiBcInBhblwiLFxyXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcclxuXHRzaW5nbGVTZWxlY3Q6IHRydWUsXHJcblx0ZHJhZ2dhYmxlOiB0cnVlLFxyXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcclxuXHRndWlkZXNFbmFibGVkOiB0cnVlLFxyXG5cdGdyaWRTaXplOiAzMCxcclxuXHRtYXhab29tOiA0LjAsXHJcblx0bWluWm9vbTogMC4yLFxyXG5cdHpvb21GYWN0b3I6IDEuMixcclxuXHRtYXNrT3BhY2l0eTogMC41LFxyXG5cdGdyYXBoQmVoYXZpb3I6IEdyYXBoQmVoYXZpb3IsXHJcblx0c2VsZWN0aW9uQmVoYXZpb3I6IFNlbGVjdGlvbkJlaGF2aW9yXHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHRvbmcgb24gNi8yOC8yMDE2LlxyXG4gKi9cclxuaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XHJcblxyXG4vKipcclxuICogR3JhcGggaGFuZGxlciBoYW5kbGVzIFBhbm5pbmcgYW5kIFpvb20gYW5kIHJ1YmJlciBiYW5kIHNlbGVjdGlvblxyXG4gKi9cclxuY2xhc3MgR3JhcGhCZWhhdmlvciBleHRlbmRzIEJlaGF2aW9yIHtcclxuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG5cdFx0c3VwZXIocmVuZGVyZXIpO1xyXG5cdFx0bGV0IGRpc3BhdGNoZXIgPSByZW5kZXJlci5kaXNwYXRjaGVyO1xyXG5cdFx0bGV0IGYgPSBmdW5jdGlvbih0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcclxuXHRcdFx0Ly9DdXJzb3IudXBkYXRlQ3Vyc29yKHR5cGUsIG5zLCBncmFwaCwgZXZlbnQpO1xyXG5cdFx0fTtcclxuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL15kcmFnLipcXC5ncmFwaCQvLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xyXG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcigvXnpvb20vLCB0aGlzLmhhbmRsZVpvb20sIHRoaXMpO1xyXG5cdFx0Ly9kaXNwYXRjaGVyLnJlZ2lzdGVyKFsnbW91c2Vkb3duLmdyYXBoJywgJ21vdXNlZW50ZXIuZ3JhcGgnLCAnbW91c2VsZWF2ZS5ncmFwaCddLCBmKTtcclxuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcclxuXHR9XHJcblxyXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR0aGlzLnJlbmRlcmVyLnRyYW5zZm9ybShudWxsLCBudWxsLCBldmVudC5zY2FsZSk7XHJcblx0fVxyXG5cclxuXHRoYW5kbGVEcmFnKHR5cGUsIG5zLCBncmFwaCwgcG9zLCBldmVudCkge1xyXG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdzdGFydCcpIHtcclxuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xyXG5cdFx0XHRpZiAoIXBhbikgcmV0dXJuO1xyXG5cdFx0XHRsZXQgdCA9IHRoaXMucmVuZGVyZXIudHJhbnNsYXRlO1xyXG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xyXG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0ocG9zWzBdICsgdGhpcy5vZmZzZXRbMF0sIHBvc1sxXSArIHRoaXMub2Zmc2V0WzFdKTtcclxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xyXG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcclxuXHRcdFx0ZGVsZXRlIHRoaXMub2Zmc2V0O1xyXG5cdFx0fVxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlaGF2aW9yIHtcclxuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdGRlbGV0ZSB0aGlzLnJlbmRlcmVyO1xyXG5cdH1cclxufVxyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xyXG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi4vZ3JhcGgvQ2VsbFwiO1xyXG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcclxuXHJcbmNsYXNzIFNlbGVjdGlvbkJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xyXG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcblx0XHRzdXBlcihyZW5kZXJlcik7XHJcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZWRvd24uKicsIHRoaXMuc2VsZWN0Q2VsbCwgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZXVwLionLCB0aGlzLnVuc2VsZWN0Q2VsbCwgdGhpcyk7XHJcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdkcmFnKi5ncmFwaCcsIHRoaXMuaGFuZGxlTXVsdGlTZWxlY3QsIHRoaXMpO1xyXG5cdFx0Ly9ncmFwaC5vbihHcmFwaC5FVkVOVF9UWVBFUy5TRUxFQ1RJT05fQ0hBTkdFLCB0aGlzLnVwZGF0ZVNlbGVjdGlvbnMsIHRoaXMpO1xyXG5cdFx0dGhpcy5zZWxlY3RlZE5vZGVzID0gbnVsbDtcclxuXHRcdHRoaXMuc2VsZWN0ZWRMaW5rcyA9IG51bGw7XHJcblx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSBudWxsO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlU2VsZWN0aW9ucygpIHtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTm9kZXMpXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdGlmICh0aGlzLnNlbGVjdGVkTGlua3MpXHJcblx0XHRcdHRoaXMuc2VsZWN0ZWRMaW5rcy5jbGFzc2VkKCdzZWxlY3RlZCcsIGZhbHNlKTtcclxuXHJcblx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSBudWxsO1xyXG5cdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gbnVsbDtcclxuXHRcdHRoaXMuYXR0YWNoZWRMaW5rcyA9IG51bGw7XHJcblxyXG5cdFx0aWYgKHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcyAmJiB0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMubGVuZ3RoID4gMCkge1xyXG5cdFx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMpO1xyXG5cdFx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLmdldEF0dGFjaGVkRWRnZXMoKSk7XHJcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2Rlcy5jbGFzc2VkKCdzZWxlY3RlZCcsIHRydWUpO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICh0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMgJiYgdGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gdGhpcy5ncmFwaC5yZW5kZXJlci5nZXRTaGFwZXModGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzKTtcclxuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzLmNsYXNzZWQoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRzZWxlY3RDZWxsKHR5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50KSB7XHJcblx0XHR2YXIgY2VsbCA9IGRhdGEgPT0gdGhpcy5ncmFwaCA/IG51bGwgOiBkYXRhO1xyXG5cdFx0aWYgKGNlbGwgJiYgIShjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHJldHVybjtcclxuXHRcdHZhciB0b2dnbGUgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xyXG5cdFx0aWYgKGNlbGwgJiYgKGNlbGwgaW5zdGFuY2VvZiBDZWxsKSkge1xyXG5cdFx0XHRpZiAoIXRoaXMuZ3JhcGguaXNTZWxlY3RlZChjZWxsKSlcclxuXHRcdFx0XHRkZWxldGUgY2VsbC5fZmlyc3RTZWxlY3Rpb247XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0XHRjZWxsLl9maXJzdFNlbGVjdGlvbiA9IHRydWU7XHJcblxyXG5cdFx0XHRkMy5zZWxlY3QoZXZlbnQuZGF0YVRhcmdldCkubW92ZVRvRnJvbnQoKTtcclxuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgdG9nZ2xlKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdHVuc2VsZWN0Q2VsbCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xyXG5cdFx0dmFyIGNlbGwgPSBkYXRhID09IHRoaXMuZ3JhcGggPyBudWxsIDogZGF0YTtcclxuXHRcdGlmIChjZWxsICYmICEoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSByZXR1cm47XHJcblx0XHR2YXIgY3RybEtleSA9IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXk7XHJcblx0XHRpZiAoIWNlbGwpIHtcclxuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgY3RybEtleSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRoYW5kbGVNdWx0aVNlbGVjdCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xyXG5cdFx0cG9zID0gdXRpbC5zY2FsZSh0aGlzLmdyYXBoLCBwb3MpO1xyXG5cclxuXHRcdGlmICh0eXBlID09ICdkcmFnc3RhcnQnKSB7XHJcblx0XHRcdHZhciBzZWxlY3QgPSAodGhpcy5ncmFwaC5nZXRQcm9wZXJ0eShcImRlZmF1bHRDbGlja01vZGVcIikgPT0gXCJzZWxlY3RcIikgXiAoZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XHJcblx0XHRcdGlmICghc2VsZWN0KSByZXR1cm47XHJcblx0XHRcdHRoaXMuc3RhcnRQdCA9IG5ldyBQb2ludChwb3NbMF0sIHBvc1sxXSk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmICghdGhpcy5zdGFydFB0KSByZXR1cm47XHJcblx0XHR2YXIgcmVjdCA9IFJlY3RhbmdsZS5nZXRCb3VuZGluZ1JlY3RhbmdsZShbbmV3IFBvaW50KHBvc1swXSwgcG9zWzFdKSwgdGhpcy5zdGFydFB0XSk7XHJcblx0XHR2YXIgcmVuZGVyZXIgPSB0aGlzLmdyYXBoLnJlbmRlcmVyO1xyXG5cdFx0aWYgKCF0aGlzLnJ1YmJlcmJhbmQpIHtcclxuXHRcdFx0dGhpcy5ydWJiZXJiYW5kID0gZDMuc2VsZWN0KHJlbmRlcmVyLmFwcGVuZE5vZGUocmVuZGVyZXIuZ2V0Q2VsbExheWVyKCksIHtcclxuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgnPGc+PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjMgM1wiLz48L2c+JylcclxuXHRcdFx0fSwgZmFsc2UpKTtcclxuXHRcdH1cclxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xyXG5cdFx0XHR2YXIgY2VsbHMgPSB0aGlzLmdyYXBoLmdldEN1cnJlbnRSb290KCkuY2hpbGRyZW47XHJcblx0XHRcdC8vIFRPRE86IERlZmluZSBpZiB3ZSB3YW50IHRvIHNlbGVjdCB2ZXJ0ZXhlcyAvIGVkZ2VzIG9yIGJvdGhcclxuXHRcdFx0Y2VsbHMgPSBfLmZpbHRlcihjZWxscywgZnVuY3Rpb24gKGNlbGwpIHtcclxuXHRcdFx0XHR2YXIgYm94ID0gY2VsbC5nZXRCb3VuZHMoKTtcclxuXHRcdFx0XHRpZiAocmVjdC5jb250YWlucyhib3gpKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0Ly8gVE9ETzogU2V0IHNlbGVjdGlvblxyXG5cdFx0XHR0aGlzLmdyYXBoLnNldFNlbGVjdGlvbihjZWxscywgZXZlbnQuY3RybEtleSk7XHJcblxyXG5cdFx0XHR0aGlzLnJ1YmJlcmJhbmQucmVtb3ZlKCk7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnN0YXJ0UHQ7XHJcblx0XHRcdGRlbGV0ZSB0aGlzLnJ1YmJlcmJhbmQ7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdHRoaXMucnViYmVyYmFuZC5zZWxlY3QoXCJyZWN0XCIpLmF0dHIoe3g6IHJlY3QueCwgeTogcmVjdC55LCB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodH0pO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpIHtcclxuXHRcdHN1cGVyLmRlc3Ryb3koKTtcclxuXHRcdGRlbGV0ZSB0aGlzLnNlbGVjdGVkTm9kZXM7XHJcblx0XHRkZWxldGUgdGhpcy5zZWxlY3RlZExpbmtzO1xyXG5cdFx0ZGVsZXRlIHRoaXMuYXR0YWNoZWRMaW5rcztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdGlvbkJlaGF2aW9yO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBCYXNlNjQgZnJvbSBcIi4uL3V0aWwvYmFzZTY0XCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuaWYgKHR5cGVvZiAoU1ZHRWxlbWVudCkgIT0gXCJ1bmRlZmluZWRcIikge1xuXHR2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBcInN2Z1wiKTtcblx0c3ZnLmlubmVySFRNTCA9ICc8Y2lyY2xlLz4nO1xuXHRpZiAoc3ZnLmZpcnN0Q2hpbGQgIT09IFwiW29iamVjdCBTVkdDaXJjbGVFbGVtZW50XVwiKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU1ZHRWxlbWVudC5wcm90b3R5cGUsIHtcblx0XHRcdFwib3V0ZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgJG5vZGUsICR0ZW1wO1xuXHRcdFx0XHRcdCR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0JG5vZGUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdFx0XHQkdGVtcC5hcHBlbmRDaGlsZCgkbm9kZSk7XG5cdFx0XHRcdFx0cmV0dXJuICR0ZW1wLmlubmVySFRNTDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiaW5uZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgcyA9IHRoaXMub3V0ZXJIVE1MO1xuXHRcdFx0XHRcdHZhciByb3BlbiA9IG5ldyBSZWdFeHAoXCI8XCIgKyB0aGlzLm5vZGVOYW1lICsgJ1xcXFxiKD86KFtcIlxcJ10pW15cIl0qPyhcXFxcMSl8W14+XSkqPicsIFwiaVwiKTtcblx0XHRcdFx0XHR2YXIgcmNsb3NlID0gbmV3IFJlZ0V4cChcIjxcXC9cIiArIHRoaXMubm9kZU5hbWUgKyBcIj4kXCIsIFwiaVwiKTtcblx0XHRcdFx0XHRyZXR1cm4gIHMucmVwbGFjZShyb3BlbiwgXCJcIikucmVwbGFjZShyY2xvc2UsIFwiXCIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0XHRcdGxldCBjaGlsZDtcblx0XHRcdFx0XHR3aGlsZSAoY2hpbGQgPSB0aGlzLmxhc3RDaGlsZClcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQobWFya3VwKS5hcHBlbmQoJzwvc3ZnJyk7XG5cdFx0XHRcdFx0bGV0ICR0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdHdoaWxlICgkdGVtcC5maXJzdENoaWxkKVxuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCgkdGVtcC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0Ly8gRGVmaW5lIHRoZSB0b0RhdGFVUkwgZm9yIFNWR1xuXHRTVkdFbGVtZW50LnByb3RvdHlwZS50b0RhdGFVUkwgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zID0ge30pIHtcblx0XHRsZXQgX3N2ZyA9IHRoaXM7XG5cblx0XHRsZXQgZGVidWcgPSBmdW5jdGlvbihtc2cpIHt9O1xuXG5cdFx0aWYgKG9wdGlvbnNbJ2RlYnVnJ10gPT0gdHJ1ZSAmJiB0eXBlb2YoY29uc29sZSkgIT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykgeyBjb25zb2xlLmxvZyhcIlNWRy50b0RhdGFVUkw6XCIsIG1zZyk7IH07XG5cblx0XHRmdW5jdGlvbiBleHBvcnRTVkcoKSB7XG5cdFx0XHR2YXIgc3ZnX3htbCA9IF9zdmcub3V0ZXJIVE1MO1xuXHRcdFx0dmFyIHN2Z19kYXRhdXJsID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcblx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgc3ZnX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0Ly8gTk9URSBkb3VibGUgZGF0YSBjYXJyaWVyXG5cdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayhzdmdfZGF0YXVybCk7XG5cdFx0XHRyZXR1cm4gc3ZnX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYmFzZTY0ZGF0YVVSTGVuY29kZShzKSB7XG5cdFx0XHR2YXIgYjY0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xuXG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LmJ0b2Fcblx0XHRcdGlmICh3aW5kb3cuYnRvYSkge1xuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIHdpbmRvdy5idG9hIGZvciBiYXNlNjQgZW5jb2RpbmdcIik7XG5cdFx0XHRcdGI2NCArPSBidG9hKHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVidWcoXCJ1c2luZyBjdXN0b20gYmFzZTY0IGVuY29kZXJcIik7XG5cdFx0XHRcdGI2NCArPSBCYXNlNjQuZW5jb2RlKHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYjY0O1xuXHRcdH1cblxuXHRcdC8vIE5hdGl2ZSBleHBvcnQgZG9lc24ndCB3b3JrIHZlcnkgd2VsbC4gc2hvdWxkIHVzZSBjYW52ZyBpbnN0ZWFkLlxuXHRcdGZ1bmN0aW9uIGV4cG9ydEltYWdlKHR5cGUpIHtcblx0XHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0XHQvLyBUT0RPOiBpZiAob3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSwgZG8gc29tZSB0cmFuc2xhdGlvbiBtYWdpYz9cblxuXHRcdFx0dmFyIHN2Z19pbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdHZhciBzdmdfeG1sID0gX3N2Zy5vdXRlckhUTUw7XG5cdFx0XHRzdmdfaW1nLnNyYyA9IGJhc2U2NGRhdGFVUkxlbmNvZGUoc3ZnX3htbCk7XG5cblx0XHRcdHN2Z19pbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFwiZXhwb3J0ZWQgaW1hZ2Ugc2l6ZTogXCIgKyBbc3ZnX2ltZy53aWR0aCwgc3ZnX2ltZy5oZWlnaHRdKTtcblx0XHRcdFx0Y2FudmFzLndpZHRoID0gc3ZnX2ltZy53aWR0aDtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9IHN2Z19pbWcuaGVpZ2h0O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHN2Z19pbWcsIDAsIDApO1xuXG5cdFx0XHRcdC8vIFNFQ1VSSVRZX0VSUiBXSUxMIEhBUFBFTiBOT1dcblx0XHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuXHRcdFx0XHRkZWJ1Zyh0eXBlICsgXCIgbGVuZ3RoOiBcIiArIGltYWdlX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xuXHRcdFx0XHRlbHNlIGRlYnVnKFwiV0FSTklORzogbm8gY2FsbGJhY2sgc2V0LCBzbyBub3RoaW5nIGhhcHBlbnMuXCIpO1xuXHRcdFx0fTtcblxuXHRcdFx0c3ZnX2ltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFxuXHRcdFx0XHRcdFwiQ2FuJ3QgZXhwb3J0ISBNYXliZSB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFwiICtcblx0XHRcdFx0XHRcIlNWRyBpbiBpbWcgZWxlbWVudCBvciBTVkcgaW5wdXQgZm9yIENhbnZhcyBkcmF3SW1hZ2U/XFxuXCIgK1xuXHRcdFx0XHRcdFwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TVkcjTmF0aXZlX3N1cHBvcnRcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gTk9URTogd2lsbCBub3QgcmV0dXJuIGFueXRoaW5nXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKSB7XG5cdFx0XHRpZiAoIWNhbnZnKSByZXR1cm4gbnVsbDtcblx0XHRcdGxldCBjYW52YXMgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdjYW52YXMnLCBudWxsLCB7ZGlzcGxheTogXCJub25lXCJ9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xuXHRcdFx0XHR2YXIgeGNhbnZhcyA9IG5ldyBqc0NhbnZhcyAoJ2pzY2FudmFzdGVzdCcpO1xuXHRcdFx0XHR4Y2FudmFzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHQvL3hjYW52YXMuY2FudmFzID0gY2FudmFzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkge1xuXHRcdFx0XHRjYW52ZyhjYW52YXMsIF9zdmcub3V0ZXJIVE1MKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIHx8IDA7XG5cdFx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblx0XHRcdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHRcdFx0bGV0IGJib3ggPSBfc3ZnLmdldEJCb3goKTtcblx0XHRcdFx0ZGVidWcoXCJkZXRlY3RlZCBzdmcgZGltZW5zaW9ucyBcIiArIFtiYm94LngsIGJib3gueSwgYmJveC53aWR0aCwgYmJveC5oZWlnaHRdKTtcblx0XHRcdFx0bGV0IHRyYW5zZm9ybSA9IF9zdmcuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKTtcblx0XHRcdFx0aWYgKHRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdGRlYnVnKCdkZXRlY3RlZCBzdmcgdHJhbnNmb3JtICcgKyB0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zZm9ybSA9IFNWR1JlbmRlcmVyLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZSA9IHRyYW5zZm9ybS50cmFuc2xhdGU7XG5cdFx0XHRcdFx0c2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2ZyB3aWR0aD1cIicpLmFwcGVuZChiYm94LndpZHRoICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCIgaGVpZ2h0PVwiJykuYXBwZW5kKGJib3guaGVpZ2h0ICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpXG5cdFx0XHRcdFx0LmFwcGVuZCgtYmJveC54K3RyYW5zbGF0ZVswXStwYWRkaW5nKS5hcHBlbmQoJywnKS5hcHBlbmQoLWJib3gueSt0cmFuc2xhdGVbMV0rcGFkZGluZykuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHNjYWxlKS5hcHBlbmQoJylcIj4nKVxuXHRcdFx0XHRcdC5hcHBlbmQoX3N2Zy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwpLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xuXHRcdFx0XHRpZiAodHlwZSA9PSAnamF2YXNjcmlwdCcpIHtcblx0XHRcdFx0XHR4Y2FudmFzLmNvbXBpbGUoYnVmLnRvU3RyaW5nKCksIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHhjYW52YXMudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRjYW52ZyhjYW52YXMsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdH1cblx0XHRcdHZhciBpbWFnZV9kYXRhdXJsID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKCBpbWFnZV9kYXRhdXJsICk7XG5cdFx0XHRjYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYW52YXMpO1xuXHRcdFx0cmV0dXJuIGltYWdlX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0aWYgKCF0eXBlKSB0eXBlID0gXCJpbWFnZS9zdmcreG1sXCI7XG5cblx0XHRpZiAob3B0aW9ucy5rZWVwTm9uU2FmZSkgZGVidWcoXCJOT1RFOiBrZWVwTm9uU2FmZSBpcyBOT1Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQhXCIpO1xuXHRcdGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpIGRlYnVnKFwiTk9URToga2VlcE91dHNpZGVWaWV3cG9ydCBpcyBvbmx5IHN1cHBvcnRlZCB3aXRoIGNhbnZnIGV4cG9ydGVyLlwiKTtcblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBcImltYWdlL3N2Zyt4bWxcIjpcblx0XHRcdFx0cmV0dXJuIGV4cG9ydFNWRygpO1xuXHRcdFx0Y2FzZSBcImltYWdlL3BuZ1wiOlxuXHRcdFx0Y2FzZSBcImltYWdlL2pwZWdcIjpcblx0XHRcdGNhc2UgXCJqYXZhc2NyaXB0XCI6XG5cdFx0XHRcdGlmICghb3B0aW9ucy5yZW5kZXJlcikge1xuXHRcdFx0XHRcdGlmICh3aW5kb3cuY2FudmcpIG9wdGlvbnMucmVuZGVyZXIgPSBcImNhbnZnXCI7XG5cdFx0XHRcdFx0ZWxzZSBvcHRpb25zLnJlbmRlcmVyPVwibmF0aXZlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLnJlbmRlcmVyKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImNhbnZnXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGNhbnZnIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBpbWFnZSBleHBvcnRcIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKTtcblx0XHRcdFx0XHRjYXNlIFwibmF0aXZlXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIG5hdGl2ZSByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgZXhwb3J0LiBUSElTIE1JR0hUIEZBSUwuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cG9ydEltYWdlKHR5cGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVua25vd24gaW1hZ2UgcmVuZGVyZXIgZ2l2ZW4sIGRvaW5nIG5vdGluZyAoXCIgKyBvcHRpb25zLnJlbmRlcmVyICsgXCIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGVidWcoXCJTb3JyeSEgRXhwb3J0aW5nIGFzICdcIiArIHR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdGxldCByb290ID0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdDtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Jyk7XG5cdFx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdFx0YnVmLmFwcGVuZCgnPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpLmFwcGVuZCh0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQodFsxXSkuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHRoaXMuc2NhbGUpLmFwcGVuZCgnKVwiPicpO1xuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdHRoaXMuYm94LmlubmVySFRNTCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5zdmcgPSB0aGlzLmJveC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaC5tYXJrZXJzO1xuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xuXHRcdGJ1Zi5hcHBlbmQoJzwvZGVmcz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdGlmICghdGhpcy5zdmcpIHJldHVybjtcblx0XHRsZXQgZyA9IHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2cnKTtcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0WzBdICsgJywnICsgdFsxXSArICcpc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKScpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIHN0cjEsIHN0cjI7XG5cdFx0bWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGF0aERhdGEoc2hhcGUpIHtcblx0XHRsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cblx0XHRcdGxldCBuZXdQdHMgPSBbXTtcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkMSA9IHByZXYuZGlzdGFuY2UobmV4dCk7XG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcblx0XHRcdFx0Ly8gc3BsaXQgdGhlIHBvaW50IGludG8gdHdvLlxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdHByZXYgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cdFx0XHRwb2ludHMgPSBuZXdQdHM7XG5cdFx0fVxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgQyAnKTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0bGV0IGQgPSBTVkdSZW5kZXJlci5nZXRQYXRoRGF0YShzaGFwZSk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG5cdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXSwgc2NhbGUgPSAxLjA7XG5cdFx0Ly9cblx0XHRsZXQgcGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3RyYW5zbGF0ZVxcKFxccyooW14pXSspLyk7XG5cdFx0aWYgKHBhcnRzKSB7XG5cdFx0XHRsZXQgbSA9IHBhcnRzWzFdLnRyaW0oKS5tYXRjaCgvKFtcXGQuLV0rKVsgLF0oW1xcZC4tXSspLyk7XG5cdFx0XHRpZiAobSkge1xuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSBwYXJzZUZsb2F0KG1bMV0pIHx8IDA7XG5cdFx0XHRcdHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQobVsyXSkgfHwgMDtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSB0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KHBhcnRzWzFdKTtcblx0XHR9XG5cdFx0cGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3NjYWxlXFwoXFxzKihbXildKykvKTtcblx0XHRpZiAocGFydHMpXG5cdFx0XHRzY2FsZSA9IHBhcnNlRmxvYXQocGFydHNbMV0pIHx8IDEuMDtcblxuXHRcdHJldHVybiB7dHJhbnNsYXRlLCBzY2FsZX07XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRzaGFwZS5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihwdCl7XG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdH0pO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJzdHJva2U6ICR7bWFya2VyLmZpbGx9O2ZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmlubGluZVN0eWxlKSB7JT5cXFxuXHRcdFx0Zm9udC1zaXplPVwiPCU9Ym94LmNvbmZpZy5mb250U2l6ZSU+XCJcXFxuXHRcdFx0Zm9udC1mYW1pbHk9XCI8JT1ib3guY29uZmlnLmZvbnRGYW1pbHklPlwiXFxcblx0XHRcdGZvbnQtd2VpZ2h0PVwiPCUgaWYgKGJveC5ib2xkKSB7JT5ib2xkPCV9IGVsc2UgeyU+bm9ybWFsPCV9JT5cIlxcXG5cdFx0XHQ8JSBpZiAoYm94LnVuZGVybGluZSkgeyU+dGV4dC1kZWNvcmF0aW9uPVwidW5kZXJsaW5lXCI8JX0lPlxcXG5cdFx0XHQ8JSBpZiAoYm94Lml0YWxpYykgeyU+Zm9udC1zdHlsZT1cIml0YWxpY1wiPCV9JT5cXFxuXHRcdDwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIHN0eWxlPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0XHQ8JSBpZiAoYm94LmNvbmZpZy50aXRsZSkgeyU+XG5cdFx0XHQ8dGl0bGU+PCU9Ym94LmNvbmZpZy50aXRsZSU+PC90aXRsZT5cblx0XHQ8JX0lPlxuXHQ8L2c+XG48JX0lPlxuYC50cmltKCksIHt2YXJpYWJsZTogXCJkYXRhXCJ9KSAgIC8vVE9ETyBhZGQgbW9yZSBpbmxpbmUgdGV4dCBzdHlsZXMuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTVkdSZW5kZXJlcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvU1ZHUmVuZGVyZXIuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9