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
	
		downloadImage: function downloadImage(name, image) {
			if (!image) return;
			var mime = image.match(/^data:([^;]*)/)[1];
			var type = mime.split('/')[1];
			if (type.indexOf('+') > 0) type = type.split('+')[0];
			if (this.isIE) {
				image = this.b64toBlob(image.replace('data:' + mime + ';base64,', ''), mime);
				navigator.msSaveBlob(image, name + '.' + type);
			} else {
				var link = this.createElement('a', { href: image, download: name + '.' + type }, { display: "none" });
				document.body.appendChild(link);
				link.click();
				link.parentNode.removeChild(link);
			}
		},
	
		/**
	  * Convert b54 to blob. IE only
	  */
		b64toBlob: function b64toBlob(b64Data, contentType, sliceSize) {
			contentType = contentType || '';
			sliceSize = sliceSize || 512;
	
			var byteCharacters = atob(b64Data);
			var byteArrays = [];
	
			for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
				var slice = byteCharacters.slice(offset, offset + sliceSize);
	
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
				//let pos = Manhattan.routeInternal(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
				//pos = Manhattan.processPositions(this.start, this.end, pos, this.startNormal.x!=0);
				var pos = Manhattan.findPositions(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
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
	
			//New function for finding route
	
		}], [{
			key: "findPositions",
			value: function findPositions(start, end, startNormal, endNormal, buffer) {
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
	
			/**
	   * Make a route based on the start, end and startNormal and endNormal
	   * None of the parameters can be null
	   * TODO: This method could use some improvement...
	   */
	
		}, {
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
			var zoomScale = arguments.length <= 1 || arguments[1] === undefined ? [0, Infinity] : arguments[1];
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
	
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
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
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
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
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
	
				var parent = arguments.length <= 1 || arguments[1] === undefined ? this.currentRoot : arguments[1];
	
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
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
	
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
			var namespace = arguments.length <= 0 || arguments[0] === undefined ? 'default' : arguments[0];
	
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
	
				var scale = arguments.length <= 5 || arguments[5] === undefined ? 1.0 : arguments[5];
				var singleLine = arguments.length <= 6 || arguments[6] === undefined ? true : arguments[6];
	
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
			var config = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];
			var graph = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];
	
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
				var x = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
				var y = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];
				var scale = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
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
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(GraphBehavior).call(this, renderer));
	
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
	
			var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SelectionBehavior).call(this, renderer));
	
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
				_get(Object.getPrototypeOf(SelectionBehavior.prototype), "destroy", this).call(this);
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
			var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
	
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
	
			return _possibleConstructorReturn(this, Object.getPrototypeOf(SVGRenderer).apply(this, arguments));
		}
	
		_createClass(SVGRenderer, [{
			key: "render",
			value: function render() {
				var result = _get(Object.getPrototypeOf(SVGRenderer.prototype), "render", this).call(this);
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
		Label: _lodash2.default.template("\n<% var box = _.has(data, \"dx\") ? data : (data.getLabelBox ? data.getLabelBox() : null); \n   if (box) {%>\n\t<g <% if (box.config && box.config.class) {%>class=\"<%=box.config.class%>\"<%}%>\t\t<% if (box.config && box.config.ns) {%>ns=\"<%=box.config.ns%>\"<%}%>\t\t<% if (box.config && box.config.inlineStyle) {%>\t\t\tfont-size=\"<%=box.config.fontSize%>\"\t\t\tfont-family=\"<%=box.config.fontFamily%>\"\t\t\tfont-weight=\"<% if (box.bold) {%>bold<%} else {%>normal<%}%>\"\t\t\t<% if (box.underline) {%>text-decoration=\"underline\"<%}%>\t\t\t<% if (box.italic) {%>font-style=\"italic\"<%}%>\t\t<%}%>\t\ttext-anchor=\"<%=box.anchor%>\"\t\ttransform=\"translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>\">\n\t<% if (box.config.backgroundStyle) {%>\n\t\t<rect x=\"<%=-box.bounds.width/2%>\" y=\"<%=-box.bounds.height/2%>\" width=\"<%=box.bounds.width%>\" height=\"<%=box.bounds.height%>\" style=\"<%=box.config.backgroundStyle%>\"/>\n\t<% } if (_.isArray(box.label)) { \n\t\t_.each(box.label, function(value, line) {%>\n\t\t\t<text <% if (box.config && box.config.textStyle) {%>style=\"<%=box.config.textStyle%>\"<%}%>\t\t\t\tdx=\"<%=box.dx%>\" dy=\"<%=box.dy + box.lineHeight * line%>\"><%=value%></text>\n\t\t<%});} else { %>\n\t\t\t<text><%=box.label%></text>\n\t\t<%}%>\n\t</g>\n<%}%>\n".trim(), { variable: "data" }) //TODO add more inline text styles.
	};
	
	exports.default = SVGRenderer;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkYjc2MGIzZmRhYjBlMGJlNTg0MSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvYmFzZTY0LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy9nZW9tZXRyeS9Qb2ludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy9leHRlcm5hbCB7XCJyb290XCI6XCJfXCIsXCJjb21tb25qc1wiOlwibG9kYXNoXCIsXCJjb21tb25qczJcIjpcImxvZGFzaFwiLFwiYW1kXCI6XCJsb2Rhc2hcIn0iLCJ3ZWJwYWNrOi8vLy4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0RvbVV0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2VvbWV0cnkvTGluay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JlYW4vYmVhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZXZlbnQvRXZlbnREaXNwYXRjaGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9ldmVudC9LZXlVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ3JhcGgvR3JhcGguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL05vZGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0NlbGwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvQ2FjaGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTGFiZWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dyYXBoL0VkZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXcvTWFya2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQvRmxvd0xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlldy9SZW5kZXJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvR3JhcGhCZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2JlaGF2aW9yL1NlbGVjdGlvbkJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3RDQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBLGlCQUFNLFFBQU4sQ0FBZSxXQUFmO0FBQ0EsaUJBQU0sUUFBTixDQUFlLFNBQWY7O21CQUVlO0FBQ2Qsd0JBRGM7QUFFZCx3QkFGYztBQUdk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VUFBcUUsRUFIM0YsNEJBSVAsSUFKTyxFQUFQO0FBS0EsR0FqQ3NCO0FBa0N2QixRQUFNLGNBQVMsSUFBVCxFQUFlO0FBQ3BCLFVBQU8sNENBQzBCLElBRDFCLG9CQUMyQyxJQUQzQyx5SUFHYyxJQUhkLGlFQUlPLElBSlAsMEVBS08sSUFMUCxnQkFLb0IsSUFMcEIsMERBTUcsSUFOSCxFQUFQO0FBT0EsR0ExQ3NCO0FBMkN2QixTQUFPLGlCQUFFLFFBQUYsQ0FBVyxxNENBeUJqQixJQXpCaUIsRUFBWCxFQXlCRSxFQUFDLFVBQVUsTUFBWCxFQXpCRixDO0FBM0NnQixFQUF4Qjs7bUJBdUVlLFciLCJmaWxlIjoicWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwibG9kYXNoXCIpKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtcImxvZGFzaFwiXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJxZ3JhcGhcIl0gPSBmYWN0b3J5KHJlcXVpcmUoXCJsb2Rhc2hcIikpO1xuXHRlbHNlXG5cdFx0cm9vdFtcInFncmFwaFwiXSA9IGZhY3Rvcnkocm9vdFtcIl9cIl0pO1xufSkodGhpcywgZnVuY3Rpb24oX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV81X18pIHtcbnJldHVybiBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb25cbiAqKi8iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGRiNzYwYjNmZGFiMGUwYmU1ODQxXG4gKiovIiwiaW1wb3J0IEJhc2U2NCBmcm9tIFwiLi91dGlsL2Jhc2U2NFwiO1xuaW1wb3J0IENhY2hlIGZyb20gXCIuL3V0aWwvVXRpbHNcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4vdXRpbC9Eb21VdGlsc1wiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuaW1wb3J0IFBvaW50IGZyb20gXCIuL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9nZW9tZXRyeS9MaW5lXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vZ2VvbWV0cnkvU2hhcGVcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4vZ2VvbWV0cnkvUmVjdGFuZ2xlXCI7XG5pbXBvcnQgRWxsaXBzZSBmcm9tIFwiLi9nZW9tZXRyeS9FbGxpcHNlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwiLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgRXZlbnREaXNwYXRjaGVyIGZyb20gXCIuL2V2ZW50L0V2ZW50RGlzcGF0Y2hlclwiO1xuaW1wb3J0IEdyYXBoIGZyb20gXCIuL2dyYXBoL0dyYXBoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9ncmFwaC9DZWxsXCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ncmFwaC9Ob2RlXCI7XG5pbXBvcnQgRWRnZSBmcm9tIFwiLi9ncmFwaC9FZGdlXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBGbG93TGF5b3V0IGZyb20gXCIuL2xheW91dC9GbG93TGF5b3V0XCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4vdmlldy9MYWJlbFwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi92aWV3L01hcmtlclwiO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3ZpZXcvUmVuZGVyZXJcIjtcbmltcG9ydCBTVkdSZW5kZXJlciBmcm9tIFwiLi92aWV3L1NWR1JlbmRlcmVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi9iZWhhdmlvci9HcmFwaEJlaGF2aW9yXCI7XG5pbXBvcnQgU2VsZWN0aW9uQmVoYXZpb3IgZnJvbSBcIi4vYmVoYXZpb3IvU2VsZWN0aW9uQmVoYXZpb3JcIjtcblxuU2hhcGUuYWRkU2hhcGUoXCJSZWN0YW5nbGVcIiwgUmVjdGFuZ2xlKTtcblNoYXBlLmFkZFNoYXBlKFwiRWxsaXBzZVwiLCBFbGxpcHNlKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuXHRFdmVudHMsXG5cdEJhc2U2NCxcblx0Q2FjaGUsXG5cdFV0aWxzLFxuXHREb21VdGlscyxcblx0U3RyaW5nQnVmZmVyLFxuXHRQb2ludCxcblx0TGluZSxcblx0U2hhcGUsXG5cdFJlY3RhbmdsZSxcblx0RWxsaXBzZSxcblx0TGluayxcblx0RXZlbnREaXNwYXRjaGVyLFxuXHRMYWJlbCxcblx0TWFya2VyLFxuXHRHcmFwaCxcblx0Q2VsbCxcblx0Tm9kZSxcblx0RWRnZSxcblx0TGF5b3V0LFxuXHRGbG93TGF5b3V0LFxuXHRSZW5kZXJlcixcblx0U1ZHUmVuZGVyZXIsXG5cdEdyYXBoQmVoYXZpb3IsXG5cdFNlbGVjdGlvbkJlaGF2aW9yXG59O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvaW5kZXguanNcbiAqKi8iLCIvLyBodHRwOi8vd3d3LndlYnRvb2xraXQuaW5mby9qYXZhc2NyaXB0LWJhc2U2NC5odG1sXG5cbnZhciBCYXNlNjQgPSB7XG5cblx0Ly8gcHJpdmF0ZSBwcm9wZXJ0eVxuXHRfa2V5U3RyIDogXCJBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPVwiLFxuXG5cdC8vIHB1YmxpYyBtZXRob2QgZm9yIGVuY29kaW5nXG5cdGVuY29kZSA6IGZ1bmN0aW9uIChpbnB1dCkge1xuXHRcdHZhciBvdXRwdXQgPSBcIlwiO1xuXHRcdHZhciBjaHIxLCBjaHIyLCBjaHIzLCBlbmMxLCBlbmMyLCBlbmMzLCBlbmM0O1xuXHRcdHZhciBpID0gMDtcblxuXHRcdGlucHV0ID0gQmFzZTY0Ll91dGY4X2VuY29kZShpbnB1dCk7XG5cblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG5cdFx0XHRjaHIxID0gaW5wdXQuY2hhckNvZGVBdChpKyspO1xuXHRcdFx0Y2hyMiA9IGlucHV0LmNoYXJDb2RlQXQoaSsrKTtcblx0XHRcdGNocjMgPSBpbnB1dC5jaGFyQ29kZUF0KGkrKyk7XG5cblx0XHRcdGVuYzEgPSBjaHIxID4+IDI7XG5cdFx0XHRlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcblx0XHRcdGVuYzMgPSAoKGNocjIgJiAxNSkgPDwgMikgfCAoY2hyMyA+PiA2KTtcblx0XHRcdGVuYzQgPSBjaHIzICYgNjM7XG5cblx0XHRcdGlmIChpc05hTihjaHIyKSkge1xuXHRcdFx0XHRlbmMzID0gZW5jNCA9IDY0O1xuXHRcdFx0fSBlbHNlIGlmIChpc05hTihjaHIzKSkge1xuXHRcdFx0XHRlbmM0ID0gNjQ7XG5cdFx0XHR9XG5cblx0XHRcdG91dHB1dCA9IG91dHB1dCArXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzEpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmMyKSArXG5cdFx0XHR0aGlzLl9rZXlTdHIuY2hhckF0KGVuYzMpICsgdGhpcy5fa2V5U3RyLmNoYXJBdChlbmM0KTtcblxuXHRcdH1cblxuXHRcdHJldHVybiBvdXRwdXQ7XG5cdH0sXG5cblx0Ly8gcHVibGljIG1ldGhvZCBmb3IgZGVjb2Rpbmdcblx0ZGVjb2RlIDogZnVuY3Rpb24gKGlucHV0KSB7XG5cdFx0dmFyIG91dHB1dCA9IFwiXCI7XG5cdFx0dmFyIGNocjEsIGNocjIsIGNocjM7XG5cdFx0dmFyIGVuYzEsIGVuYzIsIGVuYzMsIGVuYzQ7XG5cdFx0dmFyIGkgPSAwO1xuXG5cdFx0aW5wdXQgPSBpbnB1dC5yZXBsYWNlKC9bXkEtWmEtejAtOVxcK1xcL1xcPV0vZywgXCJcIik7XG5cblx0XHR3aGlsZSAoaSA8IGlucHV0Lmxlbmd0aCkge1xuXG5cdFx0XHRlbmMxID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXHRcdFx0ZW5jMiA9IHRoaXMuX2tleVN0ci5pbmRleE9mKGlucHV0LmNoYXJBdChpKyspKTtcblx0XHRcdGVuYzMgPSB0aGlzLl9rZXlTdHIuaW5kZXhPZihpbnB1dC5jaGFyQXQoaSsrKSk7XG5cdFx0XHRlbmM0ID0gdGhpcy5fa2V5U3RyLmluZGV4T2YoaW5wdXQuY2hhckF0KGkrKykpO1xuXG5cdFx0XHRjaHIxID0gKGVuYzEgPDwgMikgfCAoZW5jMiA+PiA0KTtcblx0XHRcdGNocjIgPSAoKGVuYzIgJiAxNSkgPDwgNCkgfCAoZW5jMyA+PiAyKTtcblx0XHRcdGNocjMgPSAoKGVuYzMgJiAzKSA8PCA2KSB8IGVuYzQ7XG5cblx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMSk7XG5cblx0XHRcdGlmIChlbmMzICE9IDY0KSB7XG5cdFx0XHRcdG91dHB1dCA9IG91dHB1dCArIFN0cmluZy5mcm9tQ2hhckNvZGUoY2hyMik7XG5cdFx0XHR9XG5cdFx0XHRpZiAoZW5jNCAhPSA2NCkge1xuXHRcdFx0XHRvdXRwdXQgPSBvdXRwdXQgKyBTdHJpbmcuZnJvbUNoYXJDb2RlKGNocjMpO1xuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdFx0b3V0cHV0ID0gQmFzZTY0Ll91dGY4X2RlY29kZShvdXRwdXQpO1xuXG5cdFx0cmV0dXJuIG91dHB1dDtcblxuXHR9LFxuXG5cdC8vIHByaXZhdGUgbWV0aG9kIGZvciBVVEYtOCBlbmNvZGluZ1xuXHRfdXRmOF9lbmNvZGUgOiBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdFx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xcclxcbi9nLFwiXFxuXCIpO1xuXHRcdHZhciB1dGZ0ZXh0ID0gXCJcIjtcblxuXHRcdGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7XG5cblx0XHRcdHZhciBjID0gc3RyaW5nLmNoYXJDb2RlQXQobik7XG5cblx0XHRcdGlmIChjIDwgMTI4KSB7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHR1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTtcblx0XHRcdFx0dXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7XG5cdFx0XHRcdHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0XHRyZXR1cm4gdXRmdGV4dDtcblx0fSxcblxuXHQvLyBwcml2YXRlIG1ldGhvZCBmb3IgVVRGLTggZGVjb2Rpbmdcblx0X3V0ZjhfZGVjb2RlIDogZnVuY3Rpb24gKHV0ZnRleHQpIHtcblx0XHR2YXIgc3RyaW5nID0gXCJcIjtcblx0XHR2YXIgaSA9IDA7XG5cdFx0dmFyIGMgPSBjMSA9IGMyID0gMDtcblxuXHRcdHdoaWxlICggaSA8IHV0ZnRleHQubGVuZ3RoICkge1xuXG5cdFx0XHRjID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkpO1xuXG5cdFx0XHRpZiAoYyA8IDEyOCkge1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjKTtcblx0XHRcdFx0aSsrO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZigoYyA+IDE5MSkgJiYgKGMgPCAyMjQpKSB7XG5cdFx0XHRcdGMyID0gdXRmdGV4dC5jaGFyQ29kZUF0KGkrMSk7XG5cdFx0XHRcdHN0cmluZyArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyAmIDMxKSA8PCA2KSB8IChjMiAmIDYzKSk7XG5cdFx0XHRcdGkgKz0gMjtcblx0XHRcdH1cblx0XHRcdGVsc2Uge1xuXHRcdFx0XHRjMiA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzEpO1xuXHRcdFx0XHRjMyA9IHV0ZnRleHQuY2hhckNvZGVBdChpKzIpO1xuXHRcdFx0XHRzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgJiAxNSkgPDwgMTIpIHwgKChjMiAmIDYzKSA8PCA2KSB8IChjMyAmIDYzKSk7XG5cdFx0XHRcdGkgKz0gMztcblx0XHRcdH1cblxuXHRcdH1cblxuXHRcdHJldHVybiBzdHJpbmc7XG5cdH1cblxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFzZTY0O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9iYXNlNjQuanNcbiAqKi8iLCJpbXBvcnQgUG9pbnQgZnJvbSBcIi4uL2dlb21ldHJ5L1BvaW50XCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuLy8gYmVhbiByZXF1aXJlcyB0aGUgZXhpc3RlbmNlIG9mIHdpbmRvd1xuaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBnbG9iYWwgIT09ICd1bmRlZmluZWQnKSB7XG5cdGdsb2JhbC53aW5kb3cgPSB7IGFkZEV2ZW50SGFuZGxlcjogZnVuY3Rpb24oKSB7fSB9O1xuXHRnbG9iYWwuZG9jdW1lbnQgPSB7fTtcblx0Z2xvYmFsLm5hdmlnYXRvciA9IHt9O1xufVxuXG4vLyB1dGlsIHZhcmlhYmxlc1xubGV0IF9kZWJ1Z2dpbmcgPSBbXSwgX2RlYnVnQWxsID0gZmFsc2UsIHR5cGVSZWdpc3RyeSA9IHt9LCBzcGxpY2UgPSBBcnJheS5zcGxpY2U7XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQge1xuXHR0eXBlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBuYW1lLCB0eXBlKSB7XG5cdFx0aWYgKCF0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXSlcblx0XHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdID0gbmV3IE1hcCgpO1xuXHRcdGlmICghbmFtZSlcblx0XHRcdHJldHVybiB0eXBlUmVnaXN0cnlbbmFtZXNwYWNlXTtcblx0XHRpZiAoIXR5cGUpXG5cdFx0XHRyZXR1cm4gdHlwZVJlZ2lzdHJ5W25hbWVzcGFjZV0uZ2V0KG5hbWUpO1xuXHRcdHR5cGVSZWdpc3RyeVtuYW1lc3BhY2VdLnNldChuYW1lLCB0eXBlKTtcblx0fSxcblxuXHRjcmVhdGVUeXBlOiBmdW5jdGlvbiAobmFtZXNwYWNlLCBwcm9wcywgZGVmYXVsdFR5cGUpIHtcblx0XHRsZXQgbmFtZSA9IHByb3BzLm5hbWU7XG5cblx0XHQvLyBmaXJzdCBjaGVjayBpZiB0eXBlIGV4aXN0c1xuXHRcdGxldCB0eXBlID0gdGhpcy50eXBlKG5hbWVzcGFjZSwgbmFtZSk7XG5cdFx0aWYgKCF0eXBlKSB7XG5cdFx0XHRsZXQgZXh0ZW5kID0gcHJvcHMuZXh0ZW5kcyA/IHRoaXMudHlwZShuYW1lc3BhY2UsIHByb3BzLmV4dGVuZHMpIDogbnVsbDtcblx0XHRcdGlmICghZXh0ZW5kICYmIGRlZmF1bHRUeXBlKVxuXHRcdFx0XHRleHRlbmQgPSBkZWZhdWx0VHlwZTtcblx0XHRcdGlmIChleHRlbmQpXG5cdFx0XHRcdHR5cGUgPSBjbGFzcyBleHRlbmRzIGV4dGVuZCB7XG5cdFx0XHRcdH07XG5cdFx0XHRlbHNlIHtcblx0XHRcdFx0dHlwZSA9IGNsYXNzIHtcblx0XHRcdFx0XHRjb25zdHJ1Y3Rvcihjb25maWcpIHtcblx0XHRcdFx0XHRcdF8uYXNzaWduKHRoaXMsIGNvbmZpZyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0ZGVsZXRlIHByb3BzLm5hbWU7XG5cdFx0XHRkZWxldGUgcHJvcHMuZXh0ZW5kcztcblx0XHRcdF8uYXNzaWduKHR5cGUucHJvdG90eXBlLCBwcm9wcyk7XG5cdFx0XHR0eXBlLnR5cGVOYW1lID0gbmFtZTtcblx0XHRcdHRoaXMudHlwZShuYW1lc3BhY2UsIG5hbWUsIHR5cGUpO1xuXHRcdFx0dGhpcy5sb2coJ1V0aWxzJywgJ1V0aWxzLmNyZWF0ZVR5cGUgLSAnICsgbmFtZXNwYWNlICsgJy4nICsgbmFtZSk7XG5cdFx0fVxuXHRcdHJldHVybiB0eXBlO1xuXHR9LFxuXG5cdGJ1aWxkVHlwZXM6IGZ1bmN0aW9uICh0eXBlcywgbmFtZXNwYWNlLCBkZWZhdWx0VHlwZSkge1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIC0gJyArIG5hbWVzcGFjZSk7XG5cblx0XHRpZiAoIXR5cGVzICYmIGRlZmF1bHRUeXBlKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0XHR0aGlzLmxvZygnVXRpbHMnLCAnVXRpbHMuYnVpbGRUeXBlcyBlbmQnKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKGRlZmF1bHRUeXBlKSB7XG5cdFx0XHRsZXQgdHlwZSA9IF8ucmVtb3ZlKHR5cGVzLCB7bmFtZTogZGVmYXVsdFR5cGUubmFtZX0pO1xuXHRcdFx0dHlwZSA9IHR5cGUubGVuZ3RoID4gMCA/IHR5cGVbMF0gOiBudWxsO1xuXHRcdFx0aWYgKHR5cGUpXG5cdFx0XHRcdGRlZmF1bHRUeXBlID0gdGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgXy5kZWZhdWx0c0RlZXAodHlwZSwgZGVmYXVsdFR5cGUpKTtcblx0XHRcdGVsc2Vcblx0XHRcdFx0ZGVmYXVsdFR5cGUgPSB0aGlzLmNyZWF0ZVR5cGUobmFtZXNwYWNlLCBkZWZhdWx0VHlwZSk7XG5cdFx0fVxuXG5cdFx0Xy5mb3JFYWNoKHR5cGVzLCAodHlwZSkgPT4ge1xuXHRcdFx0dGhpcy5jcmVhdGVUeXBlKG5hbWVzcGFjZSwgdHlwZSwgZGVmYXVsdFR5cGUpO1xuXHRcdH0pO1xuXHRcdHRoaXMubG9nKCdVdGlscycsICdVdGlscy5idWlsZFR5cGVzIGVuZCcpO1xuXHR9LFxuXG5cdC8vIEhlbHBlciBmdW5jdGlvbiB0byBjb3JyZWN0bHkgc2V0IHVwIHRoZSBwcm90b3R5cGUgY2hhaW4sIGZvciBzdWJjbGFzc2VzLlxuXHQvLyBTaW1pbGFyIHRvIGBnb29nLmluaGVyaXRzYCwgYnV0IHVzZXMgYSBoYXNoIG9mIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFuZFxuXHQvLyBjbGFzcyBwcm9wZXJ0aWVzIHRvIGJlIGV4dGVuZGVkLlxuXHRleHRlbmQ6IGZ1bmN0aW9uIChjaGlsZCwgcGFyZW50LCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuXHRcdC8vIEFkZCBzdGF0aWMgcHJvcGVydGllcyB0byB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24sIGlmIHN1cHBsaWVkLlxuXHRcdF8uZXh0ZW5kKGNoaWxkLCBwYXJlbnQsIHN0YXRpY1Byb3BzKTtcblxuXHRcdC8vIFNldCB0aGUgcHJvdG90eXBlIGNoYWluIHRvIGluaGVyaXQgZnJvbSBgcGFyZW50YCwgd2l0aG91dCBjYWxsaW5nXG5cdFx0Ly8gYHBhcmVudGAncyBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cblx0XHR2YXIgU3Vycm9nYXRlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkO1xuXHRcdH07XG5cdFx0U3Vycm9nYXRlLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7XG5cdFx0Y2hpbGQucHJvdG90eXBlID0gbmV3IFN1cnJvZ2F0ZTtcblxuXHRcdC8vIEFkZCBwcm90b3R5cGUgcHJvcGVydGllcyAoaW5zdGFuY2UgcHJvcGVydGllcykgdG8gdGhlIHN1YmNsYXNzLFxuXHRcdC8vIGlmIHN1cHBsaWVkLlxuXHRcdGlmIChwcm90b1Byb3BzKSBfLmV4dGVuZChjaGlsZC5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuXG5cdFx0Ly8gU2V0IGEgY29udmVuaWVuY2UgcHJvcGVydHkgaW4gY2FzZSB0aGUgcGFyZW50J3MgcHJvdG90eXBlIGlzIG5lZWRlZCBsYXRlci5cblx0XHRjaGlsZC5zdXBlcmNsYXNzID0gcGFyZW50LnByb3RvdHlwZTtcblxuXHRcdHJldHVybiBjaGlsZDtcblx0fSxcblxuXHRpbml0Q29uZmlnOiBmdW5jdGlvbiAob2JqLCBjb25maWcpIHtcblx0XHRsZXQgcHJvcHMgPSB7fSwgYyA9IG9iai5jb25zdHJ1Y3RvciwgY0FyciA9IFtjXTtcblx0XHR3aGlsZSAoYykge1xuXHRcdFx0aWYgKGMuc3VwZXIpIHtcblx0XHRcdFx0YyA9IGMuc3VwZXIuY29uc3RydWN0b3I7XG5cdFx0XHRcdHNwbGljZS5hcHBseShjQXJyLCBbMCwgMCwgY10pO1xuXHRcdFx0fSBlbHNlXG5cdFx0XHRcdGMgPSBudWxsO1xuXHRcdH1cblxuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgY0Fyci5sZW5ndGg7IGkrKykge1xuXHRcdFx0YyA9IGNBcnJbaV07XG5cdFx0XHRpZiAoYy5ERUZBVUxUUylcblx0XHRcdFx0Xy5hc3NpZ24ocHJvcHMsIGMuREVGQVVMVFMpO1xuXHRcdH1cblx0XHRvYmoucHJvcHMgPSBfLmFzc2lnbihwcm9wcywgY29uZmlnKTtcblx0XHRjLnByb3RvdHlwZS5wcm9wID0gZnVuY3Rpb24gKG5hbWUsIHZhbHVlKSB7XG5cdFx0XHRpZiAoIXZhbHVlKVxuXHRcdFx0XHRyZXR1cm4gdGhpcy5wcm9wc1tuYW1lXTtcblx0XHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0XHR9O1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXRzIHRoZSBKUyBjbGFzcyBjb25zdHJ1Y3Rvci5cblx0ICogQHBhcmFtIHtPYmplY3R9IGpzQ2xhc3Ncblx0ICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRDbGFzc1xuXHQgKi9cblx0Z2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uIChqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHRpZiAoIWpzQ2xhc3MpXG5cdFx0XHRqc0NsYXNzID0gZGVmYXVsdENsYXNzO1xuXG5cdFx0aWYgKF8uaXNTdHJpbmcoanNDbGFzcykpXG5cdFx0XHRqc0NsYXNzID0gZXZhbChqc0NsYXNzKTtcblx0XHRyZXR1cm4ganNDbGFzcztcblx0fSxcblxuXHRkZWJ1ZzogZnVuY3Rpb24gKG1vZHVsZU5hbWUpIHtcblx0XHRpZiAobW9kdWxlTmFtZSkge1xuXHRcdFx0X2RlYnVnZ2luZy5wdXNoKG1vZHVsZU5hbWUpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRfZGVidWdBbGwgPSB0cnVlO1xuXHRcdH1cblx0fSxcblxuXHRsb2c6IGZ1bmN0aW9uIChuYW1lLCBtZXNzYWdlKSB7XG5cdFx0aWYgKCF3aW5kb3cuY29uc29sZSkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHR2YXIgZGVidWcgPSBfZGVidWdBbGw7XG5cdFx0aWYgKCFfZGVidWdBbGwpIHtcblx0XHRcdGRlYnVnID0gZmFsc2U7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IF9kZWJ1Z2dpbmcubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0aWYgKF9kZWJ1Z2dpbmdbaV0gPT0gbmFtZSkgZGVidWcgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIWRlYnVnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHdoaWxlIChuYW1lLmxlbmd0aCA8IDEwKSB7XG5cdFx0XHRuYW1lID0gbmFtZSArICcgJztcblx0XHR9XG5cdFx0bmFtZSA9IG5hbWUuc3Vic3RyaW5nKDAsIDEwKSArIFwiIC0gXCI7XG5cdFx0Y29uc29sZS5pbmZvKG5hbWUsIG1lc3NhZ2UpO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHJlbGF0aXZlIHBvc2l0aW9uIG9mIHN1YiBzaGFwZXMgd2l0aGluIGEgcGFyZW50IHNoYXJlLlxuXHQgKiBAcGFyYW0gYm91bmRzXG5cdCAqIEBwYXJhbSBnZW9tZXRyeSBUaGUgZ2VvbWV0cnkgaW5mb3JtYXRpb24sIHRoZSBmb3JtYXQgb2YgR2VvbWV0cnkgaXM6XG5cdCAqIHtcblx0ICogICAgICB4OiBcInggY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQsIGlmIGxlc3MgdGhhbiAxLCB3aWxsIGJlIHRyZWF0ZWQgYXMgdGhlIHBlcmNlbnRhZ2Ugb2YgdGhlIHBhcmVudCB3aWR0aC5cIixcblx0ICogICAgICB5OiBcInkgY29vcmRpbmF0ZSBvZiByZWYgcG9pbnQuXCIsXG5cdCAqICAgICAgYW5jaG9yWDogXCJ4IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgYW5jaG9yWTogXCJ5IHBvcyBvZiBjaGlsZCByZWxhdGl2ZSB0byB0aGUgcmVmIHBvaW50XCIsXG5cdCAqICAgICAgb2Zmc2V0WDogXCJ0aGUgb2Zmc2V0IGluIHRoZSB4IGRpcmVjdGlvbi5cIixcblx0ICogICAgICBvZmZzZXRZOiBcInRoZSBvZmZzZXQgaW4gdGhlIHkgZGlyZWN0aW9uLlwiLFxuXHQgKiAgICAgIHdpZHRoOiBcInRoZSB3aWR0aCBvZiB0aGUgY2hpbGQgZWxlbWVudFwiLFxuXHQgKiAgICAgIGhlaWdodDogXCJ0aGUgaGVpZ2h0IG9mIHRoZSBjaGlsZCBlbGVtZW50XCJcblx0ICogfVxuXHQgKiBAcmV0dXJucyB7KltdfVxuXHQgKi9cblx0Z2V0UmVsYXRpdmVQb3NpdGlvbjogZnVuY3Rpb24gKGJvdW5kcywgZ2VvbWV0cnkpIHtcblx0XHRsZXQgeCA9IE1hdGguYWJzKGdlb21ldHJ5LngpIDw9IDEgPyBib3VuZHMud2lkdGggKiBnZW9tZXRyeS54IDogZ2VvbWV0cnkueDtcblx0XHRsZXQgeSA9IE1hdGguYWJzKGdlb21ldHJ5LnkpIDw9IDEgPyBib3VuZHMuaGVpZ2h0ICogZ2VvbWV0cnkueSA6IGdlb21ldHJ5Lnk7XG5cdFx0cmV0dXJuIHRoaXMub2Zmc2V0UG9zaXRpb24oW3gsIHldLCBnZW9tZXRyeSk7XG5cdH0sXG5cblx0b2Zmc2V0UG9zaXRpb246IGZ1bmN0aW9uIChwb3MsIGdlb21ldHJ5KSB7XG5cdFx0cmV0dXJuIFtwb3NbMF0gKyBnZW9tZXRyeS53aWR0aCAqIGdlb21ldHJ5LmFuY2hvclggKyBnZW9tZXRyeS5vZmZzZXRYLCBwb3NbMV0gKyBnZW9tZXRyeS5oZWlnaHQgKiBnZW9tZXRyeS5hbmNob3JZICsgZ2VvbWV0cnkub2Zmc2V0WV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyB1bnNjYWxlZCwgaS5lLiwgYWJzb2x1dGUgcG9zaXRpb24gd2l0aG91dCBjb25zaWRlcmluZyB0cmFuc2xhdGlvbiBhbmQgc2NhbGUuXG5cdCAqIEBwYXJhbSB0IHRoZSBjdXJyZW50IHRyYW5zbGF0ZVxuXHQgKiBAcGFyYW0gc2NhbGUgdGhlIGN1cnJlbnQgc2NhbGVcblx0ICogQHBhcmFtIG8gY2FuIGJlIGVpdGhlciBhIFBvaW50IG9yIGEgUmVjdGFuZ2xlIG9yIGEgUG9pbnQgYXJyYXkuXG5cdCAqL1xuXHR1bnNjYWxlOiBmdW5jdGlvbiAodCwgc2NhbGUsIG8pIHtcblx0XHRpZiAobyBpbnN0YW5jZW9mIFJlY3RhbmdsZSlcblx0XHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG8ueCAqIHNjYWxlICsgdFswXSwgby55ICogc2NhbGUgKyB0WzFdLCBvLndpZHRoICogc2NhbGUsIG8uaGVpZ2h0ICogc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoby54ICogc2NhbGUgKyB0WzBdLCBvLnkgKiBzY2FsZSArIHRbMV0pO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBbb1swXSAqIHNjYWxlICsgdFswXSwgb1sxXSAqIHNjYWxlICsgdFsxXV07XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gcmVsYXRpdmUgdG8gdGhlIGdyYXBoIHRoYXQncyBzY2FsZWQsIGkuZS4sIHJlbGF0aXZlIHBvc2l0aW9uIGNvbnNpZGVyaW5nIHRyYW5zbGF0aW9uIGFuZCBzY2FsZS5cblx0ICogQHBhcmFtIHQgdGhlIGN1cnJlbnQgdHJhbnNsYXRpb25cblx0ICogQHBhcmFtIHNjYWxlIHRoZSBjdXJyZW50IHNjYWxlXG5cdCAqIEBwYXJhbSBvIGNhbiBiZSBlaXRoZXIgYSBQb2ludCBvciBhIFJlY3RhbmdsZSBvciBhIFBvaW50IGFycmF5LlxuXHQgKi9cblx0c2NhbGU6IGZ1bmN0aW9uICh0LCBzY2FsZSwgbykge1xuXHRcdGlmIChvIGluc3RhbmNlb2YgUmVjdGFuZ2xlKVxuXHRcdFx0cmV0dXJuIG5ldyBSZWN0YW5nbGUoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlLCBvLndpZHRoIC8gc2NhbGUsIG8uaGVpZ2h0IC8gc2NhbGUpO1xuXHRcdGVsc2UgaWYgKG8gaW5zdGFuY2VvZiBQb2ludClcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoKG8ueCAtIHRbMF0pIC8gc2NhbGUsIChvLnkgLSB0WzFdKSAvIHNjYWxlKTtcblx0XHRlbHNlXG5cdFx0XHRyZXR1cm4gWyhvWzBdIC0gdFswXSkgLyBzY2FsZSwgKG9bMV0gLSB0WzFdKSAvIHNjYWxlXTtcblx0fSxcblxuXHQvKipcblx0ICogQ29udmVuaWVuY2UgbWV0aG9kLlxuXHQgKi9cblx0Z2V0UHJvcGVydHk6IGZ1bmN0aW9uIChvYmosIHByb3ApIHtcblx0XHRpZiAoIW9iailcblx0XHRcdHJldHVybiBudWxsO1xuXHRcdGlmIChfLmhhcyhvYmosIHByb3ApKVxuXHRcdFx0cmV0dXJuIG9ialtwcm9wXTtcblx0XHRpZiAob2JqLnByb3AgJiYgXy5pc0Z1bmN0aW9uKG9iai5wcm9wKSlcblx0XHRcdHJldHVybiBvYmoucHJvcChwcm9wKTtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3V0aWwvVXRpbHMuanNcbiAqKi8iLCJjbGFzcyBQb2ludCB7XG5cdGNvbnN0cnVjdG9yKHgsIHkpIHtcblx0XHR0aGlzLnggPSB4O1xuXHRcdHRoaXMueSA9IHk7XG5cdH1cblxuXHQvKipcblx0ICogTWFrZSBhIGNsb25lIG9mIHRoaXMgcG9pbnRcblx0ICovXG5cdGNsb25lKCkge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgZnJvbSB0aGlzIHB0IHRvIHRoZSBvdGhlciBwdC5cblx0ICogQHBhcmFtIGFQdFxuXHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHQgKi9cblx0ZGlzdGFuY2UoYVB0KSB7XG5cdFx0cmV0dXJuIE1hdGguc3FydCgodGhpcy54IC0gYVB0LngpICogKHRoaXMueCAtIGFQdC54KSArICh0aGlzLnkgLSBhUHQueSkgKiAodGhpcy55IC0gYVB0LnkpKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2xhdGUgdGhpcyBwb2ludFxuIFx0ICovXG5cdHRyYW5zbGF0ZShwMikge1xuXHRcdHRoaXMueCArPSBwMi54O1xuXHRcdHRoaXMueSArPSBwMi55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNjYWxlIHRoaXMgdmVjdG9yXG4gXHQgKi9cblx0c2NhbGUoc2NhbGUpIHtcblx0XHR0aGlzLnggKj0gc2NhbGU7XG5cdFx0dGhpcy55ICo9IHNjYWxlO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0U2NhbGVkKHNjYWxlKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCh0aGlzLnggKiBzY2FsZSwgdGhpcy55ICogc2NhbGUpO1xuXHR9XG5cblx0Z2V0VHJhbnNsYXRlZChwMikge1xuXHRcdHJldHVybiBuZXcgUG9pbnQodGhpcy54ICsgcDIueCwgdGhpcy55ICsgcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogR2V0IHRoZSBkaXJlY3Rpb24gdmVjdG9yIGZyb20gdGhpcyBwb2ludCB0byBwMi5cblx0ICogQHBhcmFtIHAyXG5cdCAqIEByZXR1cm5zIHtQb2ludH1cblx0ICovXG5cdGdldERpcmVjdGlvbihwMikge1xuXHRcdHZhciBkaXN0ID0gdGhpcy5kaXN0YW5jZShwMik7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgocDIueCAtIHRoaXMueCkgLyBkaXN0LCAocDIueSAtIHRoaXMueSkgLyBkaXN0KTtcblx0fVxuXG5cdC8qKlxuXHQgKiByb3RhdGUgdGhlIHBvaW50IGFib3V0IHRoZSBvcmlnaW4uIFdpdGggdGhlIHNwZWNpZmllZCBhbmdsZS5cblx0ICogQHBhcmFtIGFuZ2xlIHRoZSBhbmdsZSB0byByb3RhdGVcblx0ICovXG5cdHJvdGF0ZShhbmdsZSkge1xuXHRcdHZhciBjb3MgPSBNYXRoLmNvcyhhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciBzaW4gPSBNYXRoLnNpbihhbmdsZSAqIE1hdGguUEkgLyAxODApO1xuXHRcdHZhciB4ID0gdGhpcy54LCB5ID0gdGhpcy55O1xuXHRcdHRoaXMueCA9IHggKiBjb3MgLSB5ICogc2luO1xuXHRcdHRoaXMueSA9IHggKiBzaW4gKyB5ICogY29zO1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0Z2V0Um90YXRlZChhbmdsZSkge1xuXHRcdHJldHVybiB0aGlzLmNsb25lKCkucm90YXRlKGFuZ2xlKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGRvdCBwcm9kdWN0LCB0cmVhdGluZyB0aGlzIGFuZCBwMiBhcyB2ZWN0b3JzLlxuXHQgKi9cblx0ZG90UHJvZHVjdChwMikge1xuXHRcdHJldHVybiB0aGlzLnggKiBwMi54ICsgdGhpcy55ICogcDIueTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIG1pZCBwb2ludCBiZXR3ZWVuIHRoaXMgYW5kIHAyLlxuIFx0ICovXG5cdGdldE1pZFBvaW50KHAyKSB7XG5cdFx0cmV0dXJuIG5ldyBQb2ludCgodGhpcy54ICsgcDIueCkgLyAyLCAodGhpcy55ICsgcDIueSkgLyAyKTtcblx0fVxuXG5cdHJldmVyc2UoKSB7XG5cdFx0dGhpcy54ID0gLXRoaXMueDtcblx0XHR0aGlzLnkgPSAtdGhpcy55O1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0ZXF1YWxzKHAyKSB7XG5cdFx0aWYgKCFwMiB8fCBwMi5jb25zdHJ1Y3RvciAhPSBQb2ludCkgcmV0dXJuIGZhbHNlO1xuXG5cdFx0cmV0dXJuICh0aGlzLnggPT0gcDIueCAmJiB0aGlzLnkgPT0gcDIueSk7XG5cdH1cblxuXHQvKipcblx0ICogUmVmbGVjdCB0aGlzIHBvaW50IHcuci50LiB0aGUgcmVjdGFuZ2xlLlxuXHQgKiBJZiB2ZXJ0aWNhbCBpcyB0cnVlLCBpdCB3aWxsIHJlZmxlY3QgdGhlIHBvaW50IGNyb3NzIHRoZSB2ZXJ0aWNhbFxuXHQgKiBjZW50cmFsIGxpbmUgb2YgdGhlIHJlY3RhbmdsZSwgb3RoZXJ3aXNlIHJlZmxlY3QgY3Jvc3MgdGhlIGhvcml6b250YWxcblx0ICogY2VudHJhbCBsaW5lLlxuXHQgKlxuXHQgKiBAcGFyYW0gcmVjdCB0aGUgcmVjdGFuZ2xlXG5cdCAqIEBwYXJhbSB2ZXJ0aWNhbCB3aGV0aGVyIGlzIHZlcnRpY2FsIHJlZmxlY3Rpb24gb3IgaG9yaXpvbnRhbCByZWZsZWN0aW9uLlxuXHQgKi9cblx0cmVmbGVjdChyZWN0LCB2ZXJ0aWNhbCkge1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHRoaXMueCA9IDIgKiByZWN0LnggLSB0aGlzLng7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy55ID0gMiAqIHJlY3QueSAtIHRoaXMueTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLnggKyBcIixcIiArIHRoaXMueTtcblx0fVxufVxuXG5Qb2ludC5XID0gbmV3IFBvaW50KC0xLCAwKTtcblBvaW50Lk4gPSBuZXcgUG9pbnQoMCwgLTEpO1xuUG9pbnQuUyA9IG5ldyBQb2ludCgwLCAxKTtcblBvaW50LkUgPSBuZXcgUG9pbnQoMSwgMCk7XG5Qb2ludC5ORSA9IG5ldyBQb2ludCgxLCAtMSk7XG5Qb2ludC5OVyA9IG5ldyBQb2ludCgtMSwgLTEpO1xuUG9pbnQuU0UgPSBuZXcgUG9pbnQoMSwgMSk7XG5Qb2ludC5TVyA9IG5ldyBQb2ludCgtMSwgMSk7XG5cbmV4cG9ydCBkZWZhdWx0IFBvaW50O1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUG9pbnQuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4vU2hhcGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFNoYXBlIHtcclxuXHQvKipcclxuXHQgKiBDaGVja3Mgd2hldGhlciB0aGlzIHJlY3RhbmdsZSBjb250YWlucyBhIGdpdmVuIHBvaW50IG9mIGEgZ2l2ZW4gcmVjdGFuZ2xlXHJcblx0ICovXHJcblx0Y29udGFpbnMoZWwpIHtcclxuXHRcdGxldCB3ID0gZWwud2lkdGggfHwgMDtcclxuXHRcdGxldCBoID0gZWwuaGVpZ2h0IHx8IDA7XHJcblx0XHRsZXQgbGVmdCA9IGVsLnggLSB3LzI7XHJcblx0XHRsZXQgcmlnaHQgPSBlbC54ICsgdy8yO1xyXG5cdFx0bGV0IHRvcCA9IGVsLnkgLSBoLzI7XHJcblx0XHRsZXQgYm90dG9tID0gZWwueSArIGgvMjtcclxuXHRcdHJldHVybiAocmlnaHQgPD0gdGhpcy5yaWdodCkgJiYgKGxlZnQgPj0gdGhpcy5sZWZ0KSAmJlxyXG5cdFx0XHQodG9wID49IHRoaXMudG9wKSAmJiAoYm90dG9tIDw9IHRoaXMuYm90dG9tKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIENhbGN1YWx0ZSB0aGUgZGlzdGFuY2UgdG8gYSBwb2ludC4gMCBpZiB0aGlzIHJlY3RhbmdsZSBjb250YWlucyB0aGUgcG9pbnQuXHJcblx0ICovXHJcblx0ZGlzdGFuY2UocHQpIHtcclxuXHRcdGlmICh0aGlzLmNvbnRhaW5zKHB0KSkgcmV0dXJuIDA7XHJcblxyXG5cdFx0aWYgKHB0LnggPCB0aGlzLmxlZnQpIHtcclxuXHRcdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gcHQuZGlzdGFuY2UobmV3IFBvaW50KHRoaXMubGVmdCwgdGhpcy50b3ApKTtcclxuXHRcdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdFx0cmV0dXJuIHRoaXMubGVmdCAtIHB0Lng7XHJcblx0XHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5sZWZ0LCB0aGlzLmJvdHRvbSkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnggPD0gdGhpcy5yaWdodCkge1xyXG5cdFx0XHRpZiAocHQueSA8PSB0aGlzLnRvcClcclxuXHRcdFx0XHRyZXR1cm4gdGhpcy50b3AgLSBwdC55O1xyXG5cdFx0XHRyZXR1cm4gcHQueSAtIHRoaXMuYm90dG9tO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHB0LnkgPCB0aGlzLnRvcClcclxuXHRcdFx0cmV0dXJuIHB0LmRpc3RhbmNlKG5ldyBQb2ludCh0aGlzLnJpZ2h0LCB0aGlzLnRvcCkpO1xyXG5cdFx0aWYgKHB0LnkgPD0gdGhpcy5ib3R0b20pXHJcblx0XHRcdHJldHVybiBwdC54IC0gdGhpcy5yaWdodDtcclxuXHRcdHJldHVybiBwdC5kaXN0YW5jZShuZXcgUG9pbnQodGhpcy5yaWdodCwgdGhpcy5ib3R0b20pKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEdpdmVuIHR3byBwb2ludHMsIHdlIHdhbnQgdG8gZGV0ZWN0IHdoZXRoZXIgdGhlIGxpbmUgam9pbmluZyB0aGUgcHRzIGludGVyc2VjdFxyXG5cdCAqIHdpdGggdGhlIHJlY3RhbmdsZSBvciBub3QuIFdlIGFzc3VtZSBvbmx5IGhvcml6b250YWwgb3IgdmVydGljYWwgbGluZSBzZWdtZW50cy5cclxuXHQgKlxyXG5cdCAqIEByZXR1cm4gaW50IHRoZSBzaWRlIG9mIHRoZSBpbnRlcnNlY3Rpb246IC0xOiBubyBpbnRlcnNlY3Rpb24sIDA6IGxlZnQsIDE6IHRvcCwgMjogcmlnaHQsIDM6IGJvdHRvbSwgNDogY29udGFpbm1lbnQuXHJcblx0ICovXHJcblx0ZGV0ZWN0SW50ZXJzZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRsZXQgaG9yaXpvbnRhbCA9IHB0MS55ID09IHB0Mi55O1xyXG5cdFx0bGV0IGNvbnRhaW5zMSA9IHRoaXMuY29udGFpbnMocHQxKTtcclxuXHRcdGxldCBjb250YWluczIgPSB0aGlzLmNvbnRhaW5zKHB0Mik7XHJcblx0XHRpZiAoY29udGFpbnMxICYmIGNvbnRhaW5zMikgcmV0dXJuIDQ7XHJcblx0XHRpZiAoIWNvbnRhaW5zMSAmJiAhY29udGFpbnMyKSB7XHJcblx0XHRcdGlmIChob3Jpem9udGFsICYmIChwdDEueSA+PSB0aGlzLnRvcCAmJiBwdDEueSA8PSB0aGlzLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRpZiAocHQxLnggPCB0aGlzLmxlZnQgJiYgcHQyLnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0aWYgKHB0MS54ID4gdGhpcy5yaWdodCAmJiBwdDIueCA8IHRoaXMubGVmdClcclxuXHRcdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmICghaG9yaXpvbnRhbCAmJiAocHQxLnggPj0gdGhpcy5sZWZ0ICYmIHB0MS54IDw9IHRoaXMucmlnaHQpKSB7XHJcblx0XHRcdFx0aWYgKHB0MS55IDwgdGhpcy50b3AgJiYgcHQyLnkgPiB0aGlzLmJvdHRvbSlcclxuXHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdGlmIChwdDEueSA+IHRoaXMuYm90dG9tICYmIHB0Mi55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0XHRyZXR1cm4gMztcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gLTE7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IG91dFB0ID0gY29udGFpbnMxID8gcHQyIDogcHQxO1xyXG5cdFx0aWYgKGhvcml6b250YWwpIHtcclxuXHRcdFx0aWYgKG91dFB0LnggPiB0aGlzLnJpZ2h0KVxyXG5cdFx0XHRcdHJldHVybiAyO1xyXG5cdFx0XHRyZXR1cm4gMDtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChvdXRQdC55IDwgdGhpcy50b3ApXHJcblx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdHJldHVybiAzO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ1JlY3RhbmdsZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRsZXQgeCA9IHJlY3QueDtcclxuXHRcdGxldCB5ID0gcmVjdC55O1xyXG5cdFx0bGV0IGR4ID0gcHQueCAtIHg7XHJcblx0XHRsZXQgZHkgPSBwdC55IC0geTtcclxuXHRcdGxldCBhbHBoYSA9IE1hdGguYXRhbjIoZHksIGR4KTtcclxuXHRcdGxldCBwID0gbmV3IFBvaW50KDAsIDApO1xyXG5cdFx0bGV0IHBpID0gTWF0aC5QSTtcclxuXHRcdGxldCBwaTIgPSBNYXRoLlBJLzI7XHJcblx0XHRsZXQgYmV0YSA9IHBpMiAtIGFscGhhO1xyXG5cdFx0bGV0IHQgPSBNYXRoLmF0YW4yKHJlY3QuaGVpZ2h0LCByZWN0LndpZHRoKTtcclxuXHJcblx0XHRpZiAoYWxwaGEgPCAtcGkgKyB0IHx8IGFscGhhID4gcGkgLSB0KSB7XHJcblx0XHRcdC8vIExlZnQgZWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdHAueSA9IHkgLSByZWN0LndpZHRoICogTWF0aC50YW4oYWxwaGEpIC8gMjtcclxuXHRcdH0gZWxzZSBpZiAoYWxwaGEgPCAtdCkge1xyXG5cdFx0XHQvLyBUb3AgRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0cC54ID0geCAtIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fSBlbHNlIGlmIChhbHBoYSA8IHQpIHtcclxuXHRcdFx0Ly8gUmlnaHQgRWRnZVxyXG5cdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRwLnkgPSB5ICsgcmVjdC53aWR0aCAqIE1hdGgudGFuKGFscGhhKSAvIDI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBCb3R0b20gRWRnZVxyXG5cdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0cC54ID0geCArIHJlY3QuaGVpZ2h0ICogTWF0aC50YW4oYmV0YSkgLyAyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChvcnRob2dvbmFsKSB7XHJcblx0XHRcdGlmIChhbHBoYSA8IC1waSArIHQgfHwgYWxwaGEgPiBwaSAtIHQpIHtcclxuXHRcdFx0XHQvLyBMZWZ0IGVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LmxlZnQ7XHJcblx0XHRcdFx0cC55ID0geTtcclxuXHRcdFx0fSBlbHNlIGlmIChhbHBoYSA8IC10KSB7XHJcblx0XHRcdFx0Ly8gVG9wIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LnRvcDtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9IGVsc2UgaWYgKGFscGhhIDwgdCkge1xyXG5cdFx0XHRcdC8vIFJpZ2h0IEVkZ2VcclxuXHRcdFx0XHRwLnggPSByZWN0LnJpZ2h0O1xyXG5cdFx0XHRcdHAueSA9IHk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gQm90dG9tIEVkZ2VcclxuXHRcdFx0XHRwLnkgPSByZWN0LmJvdHRvbTtcclxuXHRcdFx0XHRwLnggPSB4O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRyZXR1cm4ge3BvaW50OiBwLCBkaXJlY3Rpb246IGRpcn07XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm4gdGhlIGJvdW5kaW5nIHJlY3RhbmdsZSB0aGF0IGNvbnRhaW5zIHAxIGFuZCBwMlxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXRCb3VuZGluZ1JlY3RhbmdsZShwdHMsIG1hcmdpbikge1xyXG5cdFx0aWYgKCFwdHMgfHwgcHRzLmxlbmd0aCA9PSAwKSByZXR1cm4gbnVsbDtcclxuXHRcdG1hcmdpbiA9IG1hcmdpbiB8fCBbMCwgMCwgMCwgMF07XHJcblx0XHRpZiAoIV8uaXNBcnJheShtYXJnaW4pKVxyXG5cdFx0XHRtYXJnaW4gPSBbbWFyZ2luLCBtYXJnaW4sIG1hcmdpbiwgbWFyZ2luXTtcclxuXHRcdGxldCBtaW4gPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGxldCBtYXggPSBbcHRzWzBdLngsIHB0c1swXS55XTtcclxuXHRcdGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdGxldCBwID0gcHRzW2ldO1xyXG5cdFx0XHRpZiAocC54IDwgbWluWzBdKSB7XHJcblx0XHRcdFx0bWluWzBdID0gcC54O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChwLnkgPCBtaW5bMV0pIHtcclxuXHRcdFx0XHRtaW5bMV0gPSBwLnk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKHAueCA+IG1heFswXSkge1xyXG5cdFx0XHRcdG1heFswXSA9IHAueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAocC55ID4gbWF4WzFdKSB7XHJcblx0XHRcdFx0bWF4WzFdID0gcC55O1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRtaW5bMF0gPSBtaW5bMF0gLSBtYXJnaW5bMF07XHJcblx0XHRtaW5bMV0gPSBtaW5bMV0gLSBtYXJnaW5bMV07XHJcblx0XHRtYXhbMF0gPSBtYXhbMF0gKyBtYXJnaW5bMl07XHJcblx0XHRtYXhbMV0gPSBtYXhbMV0gKyBtYXJnaW5bM107XHJcblx0XHRsZXQgdyA9IE1hdGguYWJzKG1heFswXSAtIG1pblswXSk7XHJcblx0XHRsZXQgaCA9IE1hdGguYWJzKG1heFsxXSAtIG1pblsxXSk7XHJcblx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShtaW5bMF0gKyB3LzIsIG1pblsxXSArIGgvMiwgdywgaCk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBDcmVhdGUgYSB1bmlvbiBvZiBhbGwgdGhlIHJlY3RhbmdsZXMuXHJcblx0ICogQHBhcmFtIHJlY3RzXHJcblx0ICovXHJcblx0c3RhdGljIHVuaW9uKHJlY3RzKSB7XHJcblx0XHRsZXQgbWlueCA9IG51bGwsIG1pbnkgPSBudWxsLCBtYXh4ID0gLUluZmluaXR5LCBtYXh5ID0gLUluZmluaXR5O1xyXG5cdFx0Xy5lYWNoKHJlY3RzLCBmdW5jdGlvbiAocmVjdCkge1xyXG5cdFx0XHRtaW54ID0gbWlueCB8fCByZWN0Lng7XHJcblx0XHRcdG1pbnkgPSBtaW55IHx8IHJlY3QueTtcclxuXHRcdFx0bWlueCA9IE1hdGgubWluKG1pbngsIHJlY3QueCk7XHJcblx0XHRcdG1pbnkgPSBNYXRoLm1pbihtaW55LCByZWN0LnkpO1xyXG5cdFx0XHRtYXh4ID0gTWF0aC5tYXgobWF4eCwgcmVjdC5yaWdodCgpKTtcclxuXHRcdFx0bWF4eSA9IE1hdGgubWF4KG1heHksIHJlY3QuYm90dG9tKCkpO1xyXG5cdFx0fSk7XHJcblx0XHRtaW54ID0gbWlueCB8fCAwO1xyXG5cdFx0bWlueSA9IG1pbnkgfHwgMDtcclxuXHRcdHJldHVybiBuZXcgUmVjdGFuZ2xlKG1pbngsIG1pbnksIG1heHggLSBtaW54LCBtYXh5IC0gbWlueSk7XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBSZXR1cm5zIHRoZSBkaXJlY3Rpb24gdGhlIHBvaW50IDxpPnA8L2k+IGlzIGluIHJlbGF0aW9uIHRvIHRoZSBnaXZlbiByZWN0YW5nbGUuXHJcblx0ICogUG9zc2libGUgdmFsdWVzIGFyZSBXRVNUICgtMSwwKSwgRUFTVCAoMSwwKSwgTk9SVEggKDAsLTEpIGFuZCBTT1VUSCAoMCwxKSBpZiBvcnRob2dvbmFsIGlzIHRydWUsIG90aGVyd2lzZSByZXR1cm5cclxuXHQgKiB0aGUgZGlyZWN0aW9uIGNvbm5lY3Rpb24gdGhlIGNlbnRlciBvZiByIGFuZCBwLlxyXG5cdCAqIEBwYXJhbSByXHJcblx0ICogQHBhcmFtIHBcclxuXHQgKiBAcGFyYW0gb3J0aG9nb25hbFxyXG5cdCAqIEByZXR1cm5zIHtQb2ludHwqfVxyXG5cdCAqL1xyXG5cdHN0YXRpYyBnZXREaXJlY3Rpb24ociwgcCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHRpZiAoIW9ydGhvZ29uYWwpXHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoci54LCByLnkpLmdldERpcmVjdGlvbihuZXcgUG9pbnQocC54LCBwLnkpKTtcclxuXHJcblx0XHRsZXQgaSwgZGlzdGFuY2UgPSBNYXRoLmFicyhyLmxlZnQgLSBwLngpLCBkaXJlY3Rpb24gPSBQb2ludC5XO1xyXG5cclxuXHRcdGkgPSBNYXRoLmFicyhyLnRvcCAtIHAueSk7XHJcblx0XHRpZiAoaSA8PSBkaXN0YW5jZSkge1xyXG5cdFx0XHRkaXN0YW5jZSA9IGk7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50Lk47XHJcblx0XHR9XHJcblxyXG5cdFx0aSA9IE1hdGguYWJzKHIuYm90dG9tIC0gcC55KTtcclxuXHRcdGlmIChpIDw9IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpc3RhbmNlID0gaTtcclxuXHRcdFx0ZGlyZWN0aW9uID0gUG9pbnQuUztcclxuXHRcdH1cclxuXHJcblx0XHRpID0gTWF0aC5hYnMoci5yaWdodCAtIHAueCk7XHJcblx0XHRpZiAoaSA8IGRpc3RhbmNlKSB7XHJcblx0XHRcdGRpcmVjdGlvbiA9IFBvaW50LkU7XHJcblx0XHR9XHJcblxyXG5cdFx0cmV0dXJuIGRpcmVjdGlvbjtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvUmVjdGFuZ2xlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFXzVfXztcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIHtcInJvb3RcIjpcIl9cIixcImNvbW1vbmpzXCI6XCJsb2Rhc2hcIixcImNvbW1vbmpzMlwiOlwibG9kYXNoXCIsXCJhbWRcIjpcImxvZGFzaFwifVxuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuaW1wb3J0IFJlY3RhbmdsZSBmcm9tIFwiLi9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmNsYXNzIFNoYXBlIHtcblx0Y29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29uZmlnKSB7XG5cdFx0dGhpcy54ID0geDtcblx0XHR0aGlzLnkgPSB5O1xuXHRcdHRoaXMud2lkdGggPSB3aWR0aDtcblx0XHR0aGlzLmhlaWdodCA9IGhlaWdodDtcblx0XHRfLmRlZmF1bHRzKHRoaXMsIGNvbmZpZywge3g6IDAsIHk6IDAsIHdpZHRoOiAwLCBoZWlnaHQ6IDB9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm4gdGhlIHktY29vcmQgb2YgdGhlIHRvcCBzaWRlIG9mIHRoaXMgcmVjdGFuZ2xlXG5cdCAqL1xuXHRnZXQgdG9wKCkgeyByZXR1cm4gdGhpcy55IC0gdGhpcy5oZWlnaHQvMjsgfVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB5LWNvb3JkaW5hdGUgb2YgdGhlIGJvdHRvbSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCBib3R0b20oKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybiB0aGUgeC1jb29yZCBvZiBsZWZ0IHNpZGUgb2YgdGhpcyByZWN0YW5nbGVcblx0ICovXG5cdGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy54IC0gdGhpcy53aWR0aC8yOyB9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHgtY29vcmRpbmF0ZSBvZiB0aGUgcmlnaHQgc2lkZSBvZiB0aGlzIFJlY3RhbmdsZS5cblx0ICovXG5cdGdldCByaWdodCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGgvMjsgfVxuXG5cdGdldCBjZW50ZXIoKSB7IHJldHVybiBuZXcgUG9pbnQodGhpcy54LCB0aGlzLnkpOyB9XG5cblx0Z2V0IGJvdW5kcygpIHsgcmV0dXJuIG5ldyBSZWN0YW5nbGUodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTsgfVxuXG5cdGNvbnRhaW5zKGVsKSB7IHJldHVybiBmYWxzZTsgfVxuXG5cdC8qKlxuXHQgKiBUaGlzIHdpbGwgZ2VuZXJhdGUgbiBwb3J0cyBvbiB0aGUgc2hhcGUuXG5cdCAqL1xuXHRnZXRSZWd1bGFyUG9pbnRzKG4pIHtyZXR1cm4gbnVsbDt9XG5cblx0LyoqXG5cdCAqIEdldCB0aGUgaW50ZXJzZWN0aW9uIGJldHdlZW4gYm91bmRhcnkgb2YgdGhpcyBzaGFwZSBhbmQgdGhlIGxpbmUgY29ubmVjdGluZyAoeCx5KSB3aXRoIHRoZSByZWZQdC5cblx0ICogQHBhcmFtIHJlZlB0XG5cdCAqIEByZXR1cm5zIHtudWxsfVxuXHQgKi9cblx0Z2V0UGVyaW1ldGVyKHJlZlB0LCBvcnRob2dvbmFsID0gZmFsc2UpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5nZXRQZXJpbWV0ZXIodGhpcywgcmVmUHQsIG9ydGhvZ29uYWwpO1xuXHR9XG5cblx0cmVuZGVyKHZpZXcpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSBfLnRlbXBsYXRlKHZpZXcuZ2V0VGVtcGxhdGUodGhpcy5uYW1lLCB0aGlzKSk7XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMpO1xuXHR9XG5cblx0c3RhdGljIGdldFNoYXBlKG5hbWUpIHtcblx0XHRyZXR1cm4gcmVnaXN0cnlbbmFtZV07XG5cdH1cblxuXHRzdGF0aWMgYWRkU2hhcGUobmFtZSwgYykge1xuXHRcdHJlZ2lzdHJ5W25hbWVdID0gYztcblx0fVxuXG5cdHN0YXRpYyByZW1vdmVTaGFwZShuYW1lKSB7XG5cdFx0ZGVsZXRlIHJlZ2lzdHJ5W25hbWVdO1xuXHR9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoYXBlO1xuXG5cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dlb21ldHJ5L1NoYXBlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuXG4vKipcbiAqIGRvbSBVdGlsaXR5IGZ1bmN0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCB7XG5cdGlzSUU6IChmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKCF3aW5kb3cgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIW5hdmlnYXRvcikgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciBzQWdlbnQgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcblx0XHR2YXIgSWR4ID0gc0FnZW50LmluZGV4T2YoXCJNU0lFXCIpO1xuXG5cdFx0Ly8gSWYgSUUsIHJldHVybiB2ZXJzaW9uIG51bWJlci5cblx0XHRpZiAoSWR4ID4gMClcblx0XHRcdHJldHVybiBwYXJzZUludChzQWdlbnQuc3Vic3RyaW5nKElkeCArIDUsIHNBZ2VudC5pbmRleE9mKFwiLlwiLCBJZHgpKSk7XG5cblx0XHQvLyBJZiBJRSAxMSB0aGVuIGxvb2sgZm9yIFVwZGF0ZWQgdXNlciBhZ2VudCBzdHJpbmcuXG5cdFx0ZWxzZSBpZiAoISFuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50XFwvN1xcLi8pKVxuXHRcdFx0cmV0dXJuIDExO1xuXHRcdGVsc2UgaWYgKCEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRWRnZVxcLy8pKVxuXHRcdFx0cmV0dXJuIFwiRWRnZVwiO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiBmYWxzZTtcblx0fSkoKSxcblxuXHRpc0ZpcmVGb3ggOiAoZnVuY3Rpb24oKXtcblx0XHQvLyBJbnN0YWxsVHJpZ2dlcjogRmlyZWZveCdzIEFQSSB0byBpbnN0YWxsIGFkZC1vbnNcblx0XHRyZXR1cm4gdHlwZW9mIEluc3RhbGxUcmlnZ2VyICE9PSAndW5kZWZpbmVkJztcblx0fSkoKSxcblxuXHRpc0Nocm9tZTogKGZ1bmN0aW9uKCkge1xuXHRcdGlmICghd2luZG93IHx8ICF3aW5kb3cubmF2aWdhdG9yIHx8ICFuYXZpZ2F0b3IgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKCdFZGdlJykgPj0gMCkgcmV0dXJuIGZhbHNlO1xuXHRcdHZhciByYXcgPSBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9DaHJvbShlfGl1bSlcXC8oWzAtOV0rKVxcLi8pO1xuXHRcdHJldHVybiByYXcgPyBwYXJzZUludChyYXdbMl0sIDEwKSA6IGZhbHNlO1xuXHR9KSgpLFxuXG5cdGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uICh0YWcsIGF0dHJpYnMsIHN0eWxlcywgaHRtbCkge1xuXHRcdGxldCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcblx0XHR0aGlzLnNldEVsZW1lbnQoZWwsIGF0dHJpYnMsIHN0eWxlcyk7XG5cdFx0aWYgKGh0bWwpXG5cdFx0XHRlbC5pbm5lckhUTUwgPSBodG1sO1xuXHRcdHJldHVybiBlbDtcblx0fSxcblxuXHRjcmVhdGVFbGVtZW50QnlTdHJpbmc6IGZ1bmN0aW9uKHN0cikge1xuXHRcdGxldCB0ZW1wID0gdGhpcy5jcmVhdGVFbGVtZW50KCdkaXYnLCBudWxsLCBudWxsLCBzdHIpO1xuXHRcdHJldHVybiB0ZW1wLmNoaWxkTm9kZXM7XG5cdH0sXG5cblx0c2V0RWxlbWVudDogZnVuY3Rpb24gKGVsLCBhdHRyaWJzLCBzdHlsZXMpIHtcblx0XHRpZiAoYXR0cmlicykge1xuXHRcdFx0Xy5mb3JFYWNoKGF0dHJpYnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdCAgICBlbC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG5cdFx0XHQgfSk7XG5cdFx0fVxuXHRcdGlmIChzdHlsZXMpIHtcblx0XHRcdF8uZm9yRWFjaChzdHlsZXMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcblx0XHRcdFx0ZWwuc3R5bGVba2V5XSA9IHZhbHVlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9LFxuXG5cdHRlc3RFbGVtZW50OiBmdW5jdGlvbihub2RlLCBtZXRob2QpIHtcblx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLm5vZGVUeXBlID09IDEgJiYgKCAhbWV0aG9kIHx8IG1ldGhvZChub2RlKSApO1xuXHR9LFxuXG5cdGdldEFuY2VzdG9yQnk6IGZ1bmN0aW9uKG5vZGUsIG1ldGhvZCkge1xuXHRcdHdoaWxlIChub2RlID0gbm9kZS5wYXJlbnROb2RlKVxuXHRcdFx0aWYgKHRoaXMudGVzdEVsZW1lbnQobm9kZSwgbWV0aG9kKSApXG5cdFx0XHRcdHJldHVybiBub2RlO1xuXG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCB0aGUgcG9zaXRpb24gb2YgZWxlbWVudCByZWxhdGl2ZSB0byB0aGUgY29udGV4dC5cblx0ICogQHBhcmFtIGVsIHRoZSBlbGVtZW50XG5cdCAqIEBwYXJhbSBjb250ZXh0XG5cdCAqIEByZXR1cm5zIHsqW119XG5cdCAqL1xuXHRnZXRQb3NpdGlvbihlbCwgY29udGV4dCkge1xuXHRcdGlmICghY29udGV4dCkgY29udGV4dCA9IGRvY3VtZW50LmJvZHk7XG5cdFx0bGV0IGVsUmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCBjb250ZXh0UmVjdCA9IGNvbnRleHQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHRyZXR1cm4gW2VsUmVjdC5sZWZ0IC0gY29udGV4dFJlY3QubGVmdCwgZWxSZWN0LnRvcCAtIGNvbnRleHRSZWN0LnRvcF07XG5cdH0sXG5cblx0Z2V0Q2VudGVyUG9zaXRpb24oZWwsIGNvbnRleHQpIHtcblx0XHRpZiAoIWNvbnRleHQpIGNvbnRleHQgPSBkb2N1bWVudC5ib2R5O1xuXHRcdGxldCBlbFJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRsZXQgY29udGV4dFJlY3QgPSBjb250ZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdGxldCB3ID0gZWxSZWN0LnJpZ2h0IC0gZWxSZWN0LmxlZnQ7XG5cdFx0bGV0IGggPSBlbFJlY3QuYm90dG9tIC0gZWxSZWN0LnRvcDtcblxuXHRcdHJldHVybiBbZWxSZWN0LmxlZnQgLSBjb250ZXh0UmVjdC5sZWZ0ICsgdy8yLCBlbFJlY3QudG9wIC0gY29udGV4dFJlY3QudG9wICsgaC8yXTtcblx0fSxcblxuXHRtb3ZlOiBmdW5jdGlvbihlbCwgeCwgeSkge1xuXHRcdGlmICh4KSBlbC5zdHlsZS5sZWZ0ID0geCArICdweCc7XG5cdFx0aWYgKHkpIGVsLnN0eWxlLnRvcCA9IHkgKyAncHgnO1xuXHR9LFxuXG5cdGdldFNpemU6IGZ1bmN0aW9uKGVsKSB7XG5cdFx0dmFyIHcgPSBwYXJzZUludChlbC5zdHlsZS5vZmZzZXRXaWR0aCwgMTApO1xuXHRcdHZhciBoID0gcGFyc2VJbnQoZWwuc3R5bGUub2Zmc2V0SGVpZ2h0LCAxMCk7XG5cdFx0cmV0dXJuIFt3LCBoXTtcblx0fSxcblxuXHRyZXNpemU6IGZ1bmN0aW9uKGVsLCB3LCBoKSB7XG5cdFx0aWYgKHcpIGVsLnN0eWxlLndpZHRoID0gdyArIFwicHhcIjtcblx0XHRpZiAoaCkgZWwuc3R5bGUuaGVpZ2h0ID0gaCArICdweCc7XG5cdH0sXG5cblx0cHJlbG9hZEltYWdlczogZnVuY3Rpb24oYXJyYXkpIHtcblx0XHRpZiAoIXRoaXMucHJlbG9hZEltYWdlcy5saXN0KSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdCA9IFtdO1xuXHRcdGlmICghdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkgdGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCA9IHt9O1xuXG5cdFx0dmFyIGxpc3QgPSB0aGlzLnByZWxvYWRJbWFnZXMubGlzdDtcblx0XHR2YXIgaW1nLCB0aGF0ID0gdGhpcztcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdGltZy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gbGlzdC5pbmRleE9mKHRoaXMpO1xuXHRcdFx0XHRpZiAoaW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0dGhhdC5wcmVsb2FkSW1hZ2VzLmxvYWRlZFt0aGlzLm5hbWVdID0ge3dpZHRoOiB0aGlzLndpZHRoLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0fTtcblx0XHRcdFx0XHQvLyByZW1vdmUgaW1hZ2UgZnJvbSB0aGUgYXJyYXkgb25jZSBpdCdzIGxvYWRlZFxuXHRcdFx0XHRcdC8vIGZvciBtZW1vcnkgY29uc3VtcHRpb24gcmVhc29uc1xuXHRcdFx0XHRcdGxpc3Quc3BsaWNlKGluZGV4LCAxKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblx0XHRcdGxpc3QucHVzaChpbWcpO1xuXHRcdFx0aW1nLnNyYyA9IGFycmF5W2ldO1xuXHRcdFx0aW1nLm5hbWUgPSBhcnJheVtpXTtcblx0XHR9XG5cdH0sXG5cblx0LyoqXG5cdCAqIEdldCdzIHRoZSBpbWFnZSdzIGluZm9ybWF0aW9uIGdpdmVuIHRoZSB1cmwuIE11c3QgYmUgcHJlbG9hZGVkIGJ5IGNhbGxpbmcgdGhlIHByZWxvYWRJbWFnZSBmdW5jdGlvbi5cblx0ICogQHBhcmFtIHNyY1xuXHQgKi9cblx0Z2V0SW1hZ2VJbmZvOiBmdW5jdGlvbihzcmMpIHtcblx0XHRpZiAodGhpcy5wcmVsb2FkSW1hZ2VzLmxvYWRlZCkge1xuXHRcdFx0cmV0dXJuIHRoaXMucHJlbG9hZEltYWdlcy5sb2FkZWRbc3JjXTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH0sXG5cblx0ZG93bmxvYWRJbWFnZTogZnVuY3Rpb24obmFtZSwgaW1hZ2UpIHtcblx0XHRpZiAoIWltYWdlKSByZXR1cm47XG5cdFx0bGV0IG1pbWUgPSBpbWFnZS5tYXRjaCgvXmRhdGE6KFteO10qKS8pWzFdO1xuXHRcdGxldCB0eXBlID0gbWltZS5zcGxpdCgnLycpWzFdO1xuXHRcdGlmICh0eXBlLmluZGV4T2YoJysnKSA+IDApIHR5cGUgPSB0eXBlLnNwbGl0KCcrJylbMF07XG5cdFx0aWYgKHRoaXMuaXNJRSkge1xuXHRcdFx0aW1hZ2UgPSB0aGlzLmI2NHRvQmxvYihpbWFnZS5yZXBsYWNlKCdkYXRhOicgKyBtaW1lICsgJztiYXNlNjQsJywgJycpLCBtaW1lKTtcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKGltYWdlLCBuYW1lICsgJy4nICsgdHlwZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGxldCBsaW5rID0gdGhpcy5jcmVhdGVFbGVtZW50KCdhJywge2hyZWY6IGltYWdlLCBkb3dubG9hZDogbmFtZSArICcuJyArIHR5cGV9LCB7ZGlzcGxheTogXCJub25lXCJ9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobGluayk7XG5cdFx0XHRsaW5rLmNsaWNrKCk7XG5cdFx0XHRsaW5rLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobGluayk7XG5cdFx0fVxuXHR9LFxuXG5cdC8qKlxuXHQgKiBDb252ZXJ0IGI1NCB0byBibG9iLiBJRSBvbmx5XG5cdCAqL1xuXHRiNjR0b0Jsb2I6IGZ1bmN0aW9uIChiNjREYXRhLCBjb250ZW50VHlwZSwgc2xpY2VTaXplKSB7XG5cdFx0Y29udGVudFR5cGUgPSBjb250ZW50VHlwZSB8fCAnJztcblx0XHRzbGljZVNpemUgPSBzbGljZVNpemUgfHwgNTEyO1xuXG5cdFx0dmFyIGJ5dGVDaGFyYWN0ZXJzID0gYXRvYihiNjREYXRhKTtcblx0XHR2YXIgYnl0ZUFycmF5cyA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgYnl0ZUNoYXJhY3RlcnMubGVuZ3RoOyBvZmZzZXQgKz0gc2xpY2VTaXplKSB7XG5cdFx0XHR2YXIgc2xpY2UgPSBieXRlQ2hhcmFjdGVycy5zbGljZShvZmZzZXQsIG9mZnNldCArIHNsaWNlU2l6ZSk7XG5cblx0XHRcdHZhciBieXRlTnVtYmVycyA9IG5ldyBBcnJheShzbGljZS5sZW5ndGgpO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzbGljZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRieXRlTnVtYmVyc1tpXSA9IHNsaWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHR9XG5cdFx0XHR2YXIgYnl0ZUFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnl0ZU51bWJlcnMpO1xuXHRcdFx0Ynl0ZUFycmF5cy5wdXNoKGJ5dGVBcnJheSk7XG5cdFx0fVxuXHRcdHJldHVybiBuZXcgQmxvYihieXRlQXJyYXlzLCB7dHlwZTogY29udGVudFR5cGV9KTtcblx0fSxcblxuXHRvcGVuSW1hZ2U6IGZ1bmN0aW9uKG5hbWUsIGltYWdlKSB7XG5cdFx0dmFyIG15V2luZG93ID0gd2luZG93Lm9wZW4oXCJcIiwgXCJfYmxhbmtcIiwgXCJ0b29sYmFyPXllcywgc2Nyb2xsYmFycz15ZXMsIHJlc2l6YWJsZT15ZXMsIHdpZHRoPTUwMCwgaGVpZ2h0PTUwMFwiKTtcblx0XHR2YXIgbXlEb2N1bWVudCA9IG15V2luZG93LmRvY3VtZW50O1xuXHRcdHZhciBpbWcgPSBteURvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cdFx0dGhpcy5zZXRFbGVtZW50KGltZywge3NyYzogaW1hZ2UsIG5hbWU6IG5hbWV9KTtcblx0XHRteURvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW1nKTtcblx0fSxcblxuXHQvKipcblx0ICogQ2hlY2sgd2hldGhlciB0aGUga2V5IGV2ZW50IGlzIGZyb20gaW5wdXQsIHRleHRhcmVhIG9yIHNlbGVjdC5cblx0ICogQHBhcmFtIGUgIGlucHV0IGV2ZW50XG5cdCAqL1xuXHRldmVudEZyb21JbnB1dDogZnVuY3Rpb24oZSl7XG5cdFx0dmFyIHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lO1xuXHRcdHJldHVybiAodGFnTmFtZSA9PSAnSU5QVVQnIHx8IHRhZ05hbWUgPT0gJ1RFWFRBUkVBJyB8fCB0YWdOYW1lID09ICdTRUxFQ1QnKTtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdXRpbC9Eb21VdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcblxuLyoqXG4gKiBBIHN0cmluZyBidWZmZXIgZm9yIGZhc3Qgc3RyaW5nIG1hbmlwdWxhdGlvblxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdHJpbmdCdWZmZXIge1xuXHRjb25zdHJ1Y3RvcihzdHIpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHRcdGlmIChzdHIpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0cik7XG5cdH1cblxuXHRhcHBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5wdXNoKHN0dWZmKTtcblx0XHRlbHNlIGlmIChfLmlzQXJyYXkoc3R1ZmYpKVxuXHRcdFx0dGhpcy5idWZmZXIgPSB0aGlzLmJ1ZmZlci5jb25jYXQoc3R1ZmYpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuYnVmZmVyLnB1c2goXCJcIiArIHN0dWZmKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHByZXBlbmQoc3R1ZmYpIHtcblx0XHRpZiAoXy5pc1N0cmluZyhzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlci5zcGxpY2UoMCwgMCwgc3R1ZmYpO1xuXHRcdGVsc2UgaWYgKF8uaXNBcnJheShzdHVmZikpXG5cdFx0XHR0aGlzLmJ1ZmZlciA9IHN0dWZmLmNvbmNhdCh0aGlzLmJ1ZmZlcik7XG5cdFx0ZWxzZVxuXHRcdFx0dGhpcy5idWZmZXIuc3BsaWNlKDAsIDAsIFwiXCIgKyBzdHVmZik7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblxuXHRjbGVhcigpIHtcblx0XHR0aGlzLmJ1ZmZlciA9IFtdO1xuXHR9XG5cblx0cmVtb3ZlTGFzdCgpIHtcblx0XHR0aGlzLmJ1ZmZlci5wb3AoKTtcblx0XHRyZXR1cm4gdGhpcztcblx0fVxuXG5cdHRvU3RyaW5nKHNlcCkge1xuXHRcdGlmICghc2VwKSBzZXAgPSAnJztcblx0XHRyZXR1cm4gdGhpcy5idWZmZXIuam9pbihzZXApO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL1N0cmluZ0J1ZmZlci5qc1xuICoqLyIsImltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaW5lIHtcblx0Y29uc3RydWN0b3Ioc3RhcnQsIGVuZCkge1xuXHRcdHRoaXMuc3RhcnQgPSBzdGFydDtcblx0XHR0aGlzLmVuZCA9IGVuZDtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxjdWxhdGUgdGhlIGxlbmd0aCBvZiB0aGlzIGxpbmVcblx0ICovXG5cdGxlbmd0aCgpIHtcblx0XHRyZXR1cm4gdGhpcy5zdGFydC5kaXN0YW5jZSh0aGlzLmVuZCk7XG5cdH1cblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBkaXN0YW5jZSBvZiB0aGlzIGxpbmUgdG8gdGhlIHBvaW50LlxuXHQgKi9cblx0ZGlzdGFuY2UocHQpIHtcblx0XHR2YXIgeCA9IHRoaXMuc3RhcnQuZGlzdGFuY2UocHQpO1xuXHRcdGlmICh4ID09IDApIHJldHVybiAwO1xuXG5cdFx0dmFyIGwgPSB0aGlzLmxlbmd0aCgpO1xuXHRcdHZhciBjb3NhID0gbmV3IFBvaW50KCh0aGlzLmVuZC54IC0gdGhpcy5zdGFydC54KSAvIGwsICh0aGlzLmVuZC55IC0gdGhpcy5zdGFydC55KSAvIGwpLmRvdFByb2R1Y3QoXG5cdFx0XHRuZXcgUG9pbnQocHQueCAvIHgsIHB0LnkgLyB4KSk7XG5cblx0XHRyZXR1cm4geCAqIE1hdGguc3FydCgxIC0gY29zYSAqIGNvc2EpO1xuXHR9XG5cblx0LyoqXG5cdCAqIEZ1bmN0aW9uOiBpbnRlcnNlY3Rpb25cblx0ICpcblx0ICogUmV0dXJucyB0aGUgaW50ZXJzZWN0aW9uIG9mIHR3byBsaW5lcyBhcyBhbiA8bXhQb2ludD4uXG5cdCAqXG5cdCAqIFBhcmFtZXRlcnM6XG5cdCAqXG5cdCAqIHgwIC0gWC1jb29yZGluYXRlIG9mIHRoZSBmaXJzdCBsaW5lJ3Mgc3RhcnRwb2ludC5cblx0ICogeTAgLSBYLWNvb3JkaW5hdGUgb2YgdGhlIGZpcnN0IGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MSAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB5MSAtIFktY29vcmRpbmF0ZSBvZiB0aGUgZmlyc3QgbGluZSdzIGVuZHBvaW50LlxuXHQgKiB4MiAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB5MiAtIFktY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBzdGFydHBvaW50LlxuXHQgKiB4MyAtIFgtY29vcmRpbmF0ZSBvZiB0aGUgc2Vjb25kIGxpbmUncyBlbmRwb2ludC5cblx0ICogeTMgLSBZLWNvb3JkaW5hdGUgb2YgdGhlIHNlY29uZCBsaW5lJ3MgZW5kcG9pbnQuXG5cdCAqL1xuXHRzdGF0aWMgaW50ZXJzZWN0aW9uKHgwLCB5MCwgeDEsIHkxLCB4MiwgeTIsIHgzLCB5Mykge1xuXHRcdHZhciBkZW5vbSA9ICgoeTMgLSB5MikgKiAoeDEgLSB4MCkpIC0gKCh4MyAtIHgyKSAqICh5MSAtIHkwKSk7XG5cdFx0dmFyIG51bWVfYSA9ICgoeDMgLSB4MikgKiAoeTAgLSB5MikpIC0gKCh5MyAtIHkyKSAqICh4MCAtIHgyKSk7XG5cdFx0dmFyIG51bWVfYiA9ICgoeDEgLSB4MCkgKiAoeTAgLSB5MikpIC0gKCh5MSAtIHkwKSAqICh4MCAtIHgyKSk7XG5cblx0XHR2YXIgdWEgPSBudW1lX2EgLyBkZW5vbTtcblx0XHR2YXIgdWIgPSBudW1lX2IgLyBkZW5vbTtcblxuXHRcdGlmICh1YSA+PSAwLjAgJiYgdWEgPD0gMS4wICYmIHViID49IDAuMCAmJiB1YiA8PSAxLjApIHtcblx0XHRcdC8vIEdldCB0aGUgaW50ZXJzZWN0aW9uIHBvaW50XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWCA9IHgwICsgdWEgKiAoeDEgLSB4MCk7XG5cdFx0XHR2YXIgaW50ZXJzZWN0aW9uWSA9IHkwICsgdWEgKiAoeTEgLSB5MCk7XG5cblx0XHRcdHJldHVybiBuZXcgUG9pbnQoaW50ZXJzZWN0aW9uWCwgaW50ZXJzZWN0aW9uWSk7XG5cdFx0fVxuXG5cdFx0Ly8gTm8gaW50ZXJzZWN0aW9uXG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gJ0xpbmU6e3N0YXJ0PScgKyB0aGlzLnN0YXJ0ICsgJztlbmQ9JyArIHRoaXMuZW5kICsgJ30nO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5lLmpzXG4gKiovIiwiaW1wb3J0IFNoYXBlIGZyb20gXCIuL1NoYXBlXCI7XHJcbmltcG9ydCBQb2ludCBmcm9tIFwiLi9Qb2ludFwiO1xyXG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuL1JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRWxsaXBzZSBleHRlbmRzIFNoYXBlIHtcclxuXHR0b1N0cmluZygpIHtcclxuXHRcdHJldHVybiAnRWxsaXBzZTp7eD0nICsgdGhpcy54ICsgJzt5PScgKyB0aGlzLnkgKyAnO3dpZHRoPScgKyB0aGlzLndpZHRoICsgJztoZWlnaHQ9JyArIHRoaXMuaGVpZ2h0ICsgJ30nO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldFBlcmltZXRlcihyZWN0LCBwdCwgb3J0aG9nb25hbCA9IGZhbHNlKSB7XHJcblx0XHR2YXIgYSA9IHJlY3Qud2lkdGggLyAyO1xyXG5cdFx0dmFyIGIgPSByZWN0LmhlaWdodCAvIDI7XHJcblx0XHR2YXIgY3ggPSByZWN0Lng7XHJcblx0XHR2YXIgY3kgPSByZWN0Lnk7XHJcblx0XHR2YXIgcHggPSBwdC54O1xyXG5cdFx0dmFyIHB5ID0gcHQueTtcclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIHN0cmFpZ2h0IGxpbmUgZXF1YXRpb24gdGhyb3VnaFxyXG5cdFx0Ly8gcG9pbnQgYW5kIGVsbGlwc2UgY2VudGVyIHkgPSBkICogeCArIGhcclxuXHRcdHZhciBkeCA9IHBhcnNlSW50KHB4IC0gY3gpO1xyXG5cdFx0dmFyIGR5ID0gcGFyc2VJbnQocHkgLSBjeSk7XHJcblxyXG5cdFx0dmFyIHR4LCB0eTtcclxuXHJcblx0XHRpZiAoZHggPT0gMCAmJiBkeSAhPSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQoY3gsIGN5ICsgYiAqIGR5IC8gTWF0aC5hYnMoZHkpKTtcclxuXHRcdH0gZWxzZSBpZiAoZHggPT0gMCAmJiBkeSA9PSAwKSB7XHJcblx0XHRcdHJldHVybiBuZXcgUG9pbnQocHgsIHB5KTtcclxuXHRcdH1cclxuXHJcblx0XHQvLyBDYWxjdWxhdGVzIGludGVyc2VjdGlvblxyXG5cdFx0dmFyIGQgPSBkeSAvIGR4O1xyXG5cdFx0dmFyIGggPSBjeSAtIGQgKiBjeDtcclxuXHRcdHZhciBlID0gYSAqIGEgKiBkICogZCArIGIgKiBiO1xyXG5cdFx0dmFyIGYgPSAtMiAqIGN4ICogZTtcclxuXHRcdHZhciBnID0gYSAqIGEgKiBkICogZCAqIGN4ICogY3ggKyBiICogYiAqIGN4ICogY3ggLSBhICogYSAqIGIgKiBiO1xyXG5cdFx0dmFyIGRldCA9IE1hdGguc3FydChmICogZiAtIDQgKiBlICogZyk7XHJcblxyXG5cdFx0Ly8gVHdvIHNvbHV0aW9ucyAocGVyaW1ldGVyIHBvaW50cylcclxuXHRcdHZhciB4b3V0MSA9ICgtZiArIGRldCkgLyAoMiAqIGUpO1xyXG5cdFx0dmFyIHhvdXQyID0gKC1mIC0gZGV0KSAvICgyICogZSk7XHJcblx0XHR2YXIgeW91dDEgPSBkICogeG91dDEgKyBoO1xyXG5cdFx0dmFyIHlvdXQyID0gZCAqIHhvdXQyICsgaDtcclxuXHRcdHZhciBkaXN0MSA9IE1hdGguc3FydChNYXRoLnBvdygoeG91dDEgLSBweCksIDIpICsgTWF0aC5wb3coKHlvdXQxIC0gcHkpLCAyKSk7XHJcblx0XHR2YXIgZGlzdDIgPSBNYXRoLnNxcnQoTWF0aC5wb3coKHhvdXQyIC0gcHgpLCAyKSArIE1hdGgucG93KCh5b3V0MiAtIHB5KSwgMikpO1xyXG5cclxuXHRcdC8vIENvcnJlY3Qgc29sdXRpb25cclxuXHRcdHZhciB4b3V0ID0gMDtcclxuXHRcdHZhciB5b3V0ID0gMDtcclxuXHJcblx0XHRpZiAoZGlzdDEgPCBkaXN0Mikge1xyXG5cdFx0XHR4b3V0ID0geG91dDE7XHJcblx0XHRcdHlvdXQgPSB5b3V0MTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHhvdXQgPSB4b3V0MjtcclxuXHRcdFx0eW91dCA9IHlvdXQyO1xyXG5cdFx0fVxyXG5cclxuXHRcdGxldCBwID0gbmV3IFBvaW50KHhvdXQsIHlvdXQpO1xyXG5cdFx0bGV0IGRpciA9IFJlY3RhbmdsZS5nZXREaXJlY3Rpb24ocmVjdCwgcCwgb3J0aG9nb25hbCk7XHJcblx0XHRpZiAob3J0aG9nb25hbCkge1xyXG5cdFx0XHRpZiAoZGlyLnggPT0gLTEpIHtcclxuXHRcdFx0XHRyZXR1cm4ge3BvaW50OiBuZXcgUG9pbnQoY3ggLSBhLCBjeSksIGRpcmVjdGlvbjogZGlyfTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoZGlyLnggPT0gMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCArIGEsIGN5KSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAtMSkge1xyXG5cdFx0XHRcdHJldHVybiB7cG9pbnQ6IG5ldyBQb2ludChjeCwgY3kgLSBiKSwgZGlyZWN0aW9uOiBkaXJ9O1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmIChkaXIueSA9PSAxKSB7XHJcblx0XHRcdFx0cmV0dXJuIHtwb2ludDogbmV3IFBvaW50KGN4LCBjeSArIGIpLCBkaXJlY3Rpb246IGRpcn07XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiB7cG9pbnQ6IHAsIGRpcmVjdGlvbjogZGlyfTtcclxuXHR9XHJcbn1cclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvZ2VvbWV0cnkvRWxsaXBzZS5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcclxuaW1wb3J0IFBvaW50IGZyb20gXCIuL1BvaW50XCI7XHJcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xyXG5cclxubGV0IGRlZmF1bHRDb25maWcgPSB7XHJcblx0dHlwZTogXCJkaXJlY3RcIixcclxuXHRzaG93R2F1Z2U6IHRydWUsXHJcblx0b3J0aG9nb25hbDogZmFsc2VcclxufTtcclxuXHJcbmxldCBkZWZhdWx0R2VvbWV0cnkgPSB7XHJcblx0d2lkdGg6IDAsXHJcblx0aGVpZ2h0OiAwLFxyXG5cdGFuY2hvclg6IDAsXHJcblx0YW5jaG9yWTogMCxcclxuXHRvZmZzZXRYOiAwLFxyXG5cdG9mZnNldFk6IDBcclxufTtcclxuXHJcbmxldCBsaW5rVHlwZXMgPSB7fTtcclxuXHJcbmNsYXNzIExpbmsge1xyXG5cdGNvbnN0cnVjdG9yKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZyA9IHt9LCBzdGFydE1hcmtlciA9IG51bGwsIGVuZE1hcmtlciA9IG51bGwpIHtcclxuXHRcdHRoaXMuc3RhcnQgPSB0ZXJtaW5hbFZpc3VhbFswXS5wb2ludDtcclxuXHRcdHRoaXMuZW5kID0gdGVybWluYWxWaXN1YWxbMV0ucG9pbnQ7XHJcblx0XHR0aGlzLnN0YXJ0Tm9ybWFsID0gdGVybWluYWxWaXN1YWxbMF0uZGlyZWN0aW9uO1xyXG5cdFx0dGhpcy5lbmROb3JtYWwgPSB0ZXJtaW5hbFZpc3VhbFsxXS5kaXJlY3Rpb247XHJcblx0XHR0aGlzLnN0YXJ0TWFya2VyID0gc3RhcnRNYXJrZXI7XHJcblx0XHR0aGlzLmVuZE1hcmtlciA9IGVuZE1hcmtlcjtcclxuXHRcdF8uYXNzaWduKHRoaXMsIHNoYXBlQ29uZmlnKTtcclxuXHR9XHJcblxyXG5cdHJlbmRlcih2aWV3KSB7XHJcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMaW5rKHRoaXMpO1xyXG5cdH1cclxuXHJcblx0Z2V0IHBvaW50cygpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRnZXQgY29udHJvbFB0cygpIHsgcmV0dXJuIG51bGw7IH1cclxuXHRnZXQgbGVuZ3RoKCkge1xyXG5cdFx0bGV0IHBvaW50cyA9IHRoaXMucG9pbnRzO1xyXG5cdFx0bGV0IGksIGwgPSAwO1xyXG5cdFx0Zm9yIChpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspXHJcblx0XHRcdGwgKz0gcG9pbnRzW2ldLmRpc3RhbmNlKHBvaW50c1tpKzFdKTtcclxuXHRcdHJldHVybiBsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogQ2FsY3VsYXRlIHRoZSBwb3NpdGlvbiB3aGVyZSB0byBwdXQgbW9kaWZpZXJzIG9yIGxhYmVsLi5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBnZW9tZXRyeTogZGVmaW5lcyBob3cgZmFyIGFsb25nIHRoZSBlZGdlIHNob3VsZCB0aGUgcG9pbnQgYmUgcGxhY2VkLlxyXG5cdCAqIEByZXR1cm4gKltdIHRoZSByZWxhdGl2ZSBwb3NpdGlvbi5cclxuXHQgKi9cclxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XHJcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXHJcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcclxuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcclxuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0aWYgKE1hdGguYWJzKHApIDw9IDEpIHAgKj0gbDtcclxuXHRcdGlmIChwIDwgMCkgcCA9IGwgKyBwO1xyXG5cdFx0aWYgKHAgPiBsKSBwID0gbDtcclxuXHJcblx0XHRsZXQgcG9pbnRzID0gdGhpcy5wb2ludHMsIGQsIHBvaW50LCBkaXI7XHJcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHRcdFx0ZCA9IHBvaW50c1tpXS5kaXN0YW5jZShwb2ludHNbaSsxXSk7XHJcblx0XHRcdGlmIChwIDw9IGQpIHtcclxuXHRcdFx0XHQvLyB3ZSd2ZSBsb2NhdGVkIHRoZSBsaW5lIHNlZ21lbnQuXHJcblx0XHRcdFx0cG9pbnQgPSBwb2ludHNbaV0uY2xvbmUoKTtcclxuXHRcdFx0XHRkaXIgPSBwb2ludC5nZXREaXJlY3Rpb24ocG9pbnRzW2krMV0pO1xyXG5cdFx0XHRcdHBvaW50LnRyYW5zbGF0ZShkaXIuZ2V0U2NhbGVkKHApKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRwIC09IGQ7XHJcblx0XHR9XHJcblxyXG5cdFx0Ly8gcmV0dXJuIHRoZSBsYXN0IHBvaW50LlxyXG5cdFx0aWYgKCFwb2ludClcclxuXHRcdFx0cG9pbnQgPSBwb2ludHNbcG9pbnRzLmxlbmd0aCAtIDFdO1xyXG5cdFx0cmV0dXJuIFV0aWxzLm9mZnNldFBvc2l0aW9uKFtwb2ludC54LCBwb2ludC55XSwgZ2VvbWV0cnkpO1xyXG5cdH1cclxuXHJcblx0dG9TdHJpbmcoKSB7XHJcblx0XHRyZXR1cm4gJ0xpbmsnO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGdldExpbmsodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnID0ge30sIHN0YXJ0TWFya2VyID0gbnVsbCwgZW5kTWFya2VyID0gbnVsbCkge1xyXG5cdFx0c2hhcGVDb25maWcgPSBfLmRlZmF1bHRzRGVlcChzaGFwZUNvbmZpZywgZGVmYXVsdENvbmZpZyk7XHJcblx0XHRsZXQgbGlua0NsYXNzID0gbGlua1R5cGVzW3NoYXBlQ29uZmlnLnR5cGVdO1xyXG5cdFx0aWYgKGxpbmtDbGFzcylcclxuXHRcdFx0cmV0dXJuIG5ldyBsaW5rQ2xhc3ModGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKTtcclxuXHRcdGNvbnNvbGUubG9nKCdsaW5rIHR5cGUgbm90IHN1cHBvcnRlZDogJyArIHNoYXBlQ29uZmlnLnR5cGUpO1xyXG5cdFx0cmV0dXJuIG51bGw7XHJcblx0fVxyXG59XHJcblxyXG5jbGFzcyBEaXJlY3RMaW5rIGV4dGVuZHMgTGluayB7XHJcblx0Z2V0IHBvaW50cygpIHtcclxuXHRcdHJldHVybiBbdGhpcy5zdGFydCwgdGhpcy5lbmRdO1xyXG5cdH1cclxufVxyXG5cclxuY2xhc3MgQmV6aWVyTGluayBleHRlbmRzIExpbmsge1xyXG5cdGdldCBwb2ludHMoKSB7XHJcblx0XHRyZXR1cm4gW3RoaXMuc3RhcnQsIHRoaXMuZW5kXTtcclxuXHR9XHJcblxyXG5cdGdldCBjb250cm9sUHRzKCkge1xyXG5cdFx0bGV0IHMgPSB0aGlzLnBvaW50c1swXSwgZSA9IHRoaXMucG9pbnRzWzFdO1xyXG5cdFx0bGV0IHB0cyA9IFtdO1xyXG5cdFx0cHRzWzBdID0gbnVsbDtcclxuXHRcdHB0c1sxXSA9IFtdO1xyXG5cdFx0aWYgKHRoaXMuc3RhcnROb3JtYWwueCA9PSAwKSB7XHJcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludChzLngsIChzLnkgKyBlLnkpLzIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdHB0c1sxXVswXSA9IG5ldyBQb2ludCgocy54ICsgZS54KS8yLCBzLnkpO1xyXG5cdFx0fVxyXG5cdFx0aWYgKHRoaXMuZW5kTm9ybWFsLnggPT0gMCkge1xyXG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoZS54LCAocy55ICsgZS55KS8yKTtcclxuXHRcdH1cclxuXHRcdGVsc2Uge1xyXG5cdFx0XHRwdHNbMV1bMV0gPSBuZXcgUG9pbnQoKHMueCArIGUueCkvMiwgZS55KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBwdHM7XHJcblx0fVxyXG5cclxuXHRnZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KSB7XHJcblx0XHRpZiAoXy5pc051bWJlcihnZW9tZXRyeSkpXHJcblx0XHRcdGdlb21ldHJ5ID0ge3g6IGdlb21ldHJ5fTtcclxuXHRcdGdlb21ldHJ5ID0gXy5kZWZhdWx0cyhnZW9tZXRyeSwgZGVmYXVsdEdlb21ldHJ5KTtcclxuXHRcdGxldCBwID0gZ2VvbWV0cnkueCwgbCA9IHRoaXMubGVuZ3RoO1xyXG5cdFx0aWYgKE1hdGguYWJzKHApID4gMSkgcCAvPSBsO1xyXG5cdFx0aWYgKHAgPCAwKSBwKys7XHJcblx0XHRpZiAocCA+IDEpIHAtLTtcclxuXHJcblx0XHRsZXQgcHRzID0gdGhpcy5wb2ludHM7XHJcblx0XHRsZXQgY3RybHB0cyA9IHRoaXMuY29udHJvbFB0cztcclxuXHRcdGxldCBwMSA9IHB0c1swXTtcclxuXHRcdGxldCBwMiA9IGN0cmxwdHNbMV1bMF07XHJcblx0XHRsZXQgcDMgPSBjdHJscHRzWzFdWzFdO1xyXG5cdFx0bGV0IHA0ID0gcHRzWzFdO1xyXG5cclxuXHRcdGxldCBwb2ludCA9IFsoMS1wKSooMS1wKSooMS1wKSAqIHAxLnggKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi54ICsgMypwKnAqKDEtcCkgKiBwMy54ICsgcCpwKnAgKiBwNC54LCAoMS1wKSooMS1wKSooMS1wKSAqIHAxLnkgKyAzKnAqKDEtcCkqKDEtcCkgKiBwMi55ICsgMypwKnAqKDEtcCkgKiBwMy55ICsgcCpwKnAgKiBwNC55XTtcclxuXHRcdHJldHVybiBVdGlscy5vZmZzZXRQb3NpdGlvbihbcG9pbnQueCwgcG9pbnQueV0sIGdlb21ldHJ5KTtcclxuXHR9XHJcbn1cclxuXHJcbmNsYXNzIEVudGl0eVJlbGF0aW9ucyBleHRlbmRzIExpbmsge1xyXG5cdGdldCBwb2ludHMoKSB7XHJcblx0XHR2YXIgc291cmNlID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgdHJ1ZSk7XHJcblx0XHR2YXIgdGFyZ2V0ID0gUG9ydC5nZXRCb3VuZHMoZWRnZSwgZmFsc2UpO1xyXG5cdFx0dmFyIGlzU291cmNlTGVmdCA9IHRhcmdldC5yaWdodCgpIDwgc291cmNlLng7XHJcblx0XHR2YXIgaXNUYXJnZXRMZWZ0ID0gc291cmNlLnJpZ2h0KCkgPCB0YXJnZXQueDtcclxuXHRcdHZhciByZXN1bHQgPSBbXTtcclxuXHJcblx0XHR2YXIgeDAgPSAoaXNTb3VyY2VMZWZ0KSA/IHNvdXJjZS54IDogc291cmNlLnggKyBzb3VyY2Uud2lkdGg7XHJcblx0XHR2YXIgeTAgPSBzb3VyY2UuZ2V0Q2VudGVyWSgpO1xyXG5cdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KHgwLCB5MCkpO1xyXG5cclxuXHRcdHZhciB4ZSA9IChpc1RhcmdldExlZnQpID8gdGFyZ2V0LnggOiB0YXJnZXQueCArIHRhcmdldC53aWR0aDtcclxuXHRcdHZhciB5ZSA9IHRhcmdldC5nZXRDZW50ZXJZKCk7XHJcblxyXG5cdFx0dmFyIHNlZyA9IHRoaXMuc2VnbWVudDtcclxuXHJcblx0XHR2YXIgZHggPSAoaXNTb3VyY2VMZWZ0KSA/IC1zZWcgOiBzZWc7XHJcblx0XHR2YXIgZGVwID0gbmV3IFBvaW50KHgwICsgZHgsIHkwKTtcclxuXHJcblx0XHRkeCA9IChpc1RhcmdldExlZnQpID8gLXNlZyA6IHNlZztcclxuXHRcdHZhciBhcnIgPSBuZXcgUG9pbnQoeGUgKyBkeCwgeWUpO1xyXG5cclxuXHRcdC8vIEFkZHMgaW50ZXJtZWRpYXRlIHBvaW50cyBpZiBib3RoIGdvIG91dCBvbiBzYW1lIHNpZGVcclxuXHRcdGlmIChpc1NvdXJjZUxlZnQgPT0gaXNUYXJnZXRMZWZ0KVxyXG5cdFx0e1xyXG5cdFx0XHR2YXIgeCA9IChpc1NvdXJjZUxlZnQpID9cclxuXHRcdFx0TWF0aC5taW4oeDAsIHhlKS1zZWcgOlxyXG5cdFx0XHRNYXRoLm1heCh4MCwgeGUpK3NlZztcclxuXHJcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4LCB5MCkpO1xyXG5cdFx0XHRyZXN1bHQucHVzaChuZXcgUG9pbnQoeCwgeWUpKTtcclxuXHRcdH1cclxuXHRcdGVsc2UgaWYgKChkZXAueCA8IGFyci54KSA9PSBpc1NvdXJjZUxlZnQpXHJcblx0XHR7XHJcblx0XHRcdHZhciBtaWRZID0geTAgKyAoeWUgLSB5MCkgLyAyO1xyXG5cclxuXHRcdFx0cmVzdWx0LnB1c2goZGVwKTtcclxuXHRcdFx0cmVzdWx0LnB1c2gobmV3IFBvaW50KGRlcC54LCBtaWRZKSk7XHJcblx0XHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludChhcnIueCwgbWlkWSkpO1xyXG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xyXG5cdFx0fVxyXG5cdFx0ZWxzZVxyXG5cdFx0e1xyXG5cdFx0XHRyZXN1bHQucHVzaChkZXApO1xyXG5cdFx0XHRyZXN1bHQucHVzaChhcnIpO1xyXG5cdFx0fVxyXG5cclxuXHRcdHJlc3VsdC5wdXNoKG5ldyBQb2ludCh4ZSwgeWUpKTtcclxuXHRcdHJldHVybiByZXN1bHQ7XHJcblx0fVxyXG59XHJcblxyXG5cclxuY2xhc3MgTWFuaGF0dGFuIGV4dGVuZHMgTGluayB7XHJcblx0Y29uc3RydWN0b3IodGVybWluYWxWaXN1YWwsIHNoYXBlQ29uZmlnLCBzdGFydE1hcmtlciwgZW5kTWFya2VyKSB7XHJcblx0XHRzaGFwZUNvbmZpZyA9IF8uZGVmYXVsdHMoc2hhcGVDb25maWcsIHtcclxuXHRcdFx0TUlOX0JVRkZFUjogMTAsXHJcblx0XHRcdGF1dG9Sb3V0ZTogZmFsc2UsXHJcblx0XHRcdG1heENoYW5uZWxXaWR0aDogMTAwXHJcblx0XHR9KTtcclxuXHRcdHN1cGVyKHRlcm1pbmFsVmlzdWFsLCBzaGFwZUNvbmZpZywgc3RhcnRNYXJrZXIsIGVuZE1hcmtlcik7XHJcblx0fVxyXG5cclxuXHRnZXQgcG9pbnRzKCkge1xyXG5cdFx0Ly9sZXQgcG9zID0gTWFuaGF0dGFuLnJvdXRlSW50ZXJuYWwodGhpcy5zdGFydCwgdGhpcy5lbmQsIHRoaXMuc3RhcnROb3JtYWwsIHRoaXMuZW5kTm9ybWFsLCB0aGlzLk1JTl9CVUZGRVIpO1xyXG5cdFx0Ly9wb3MgPSBNYW5oYXR0YW4ucHJvY2Vzc1Bvc2l0aW9ucyh0aGlzLnN0YXJ0LCB0aGlzLmVuZCwgcG9zLCB0aGlzLnN0YXJ0Tm9ybWFsLnghPTApO1xyXG5cdFx0bGV0IHBvcyA9IE1hbmhhdHRhbi5maW5kUG9zaXRpb25zKHRoaXMuc3RhcnQsIHRoaXMuZW5kLCB0aGlzLnN0YXJ0Tm9ybWFsLCB0aGlzLmVuZE5vcm1hbCwgdGhpcy5NSU5fQlVGRkVSKTtcclxuXHRcdGlmICh0aGlzLmF1dG9Sb3V0ZSkge1xyXG5cdFx0XHR0aGlzLl9tZXJnZVNlZ21lbnRzKHBvcyk7XHJcblx0XHRcdHZhciBib3hlcyA9IFtdLCBub2RlLCBzdGFydEJveCwgZW5kQm94O1xyXG5cdFx0XHR2YXIgY29udGFpbmVyID0gZWRnZS5zb3VyY2UuZ2V0Q29tbW9uQW5jZXN0b3IoZWRnZS50YXJnZXQpO1xyXG5cdFx0XHR2YXIgY2hpbGROb2RlcyA9IGNvbnRhaW5lci5nZXREZXNjZW5kYW50cygpO1xyXG5cdFx0XHR2YXIgaW5kZXggPSAwO1xyXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRub2RlID0gY2hpbGROb2Rlc1tpXTtcclxuXHRcdFx0XHQvLyBEbyBub3QgaW5jbHVkZSBzb3VyY2Ugb3IgdGFyZ2V0IGFuY2VzdG9ycyBpbiByb3V0aW5nLlxyXG5cdFx0XHRcdGlmIChub2RlLmV4Y2x1ZGVGcm9tUm91dGluZyhlZGdlKSB8fCBub2RlLmlzQW5jZXN0b3IoZWRnZS5zb3VyY2UpIHx8IG5vZGUuaXNBbmNlc3RvcihlZGdlLnRhcmdldCkpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdGlmIChub2RlID09IGVkZ2Uuc291cmNlKVxyXG5cdFx0XHRcdHN0YXJ0Qm94ID0gaW5kZXg7XHJcblx0XHRcdFx0aWYgKG5vZGUgPT0gZWRnZS50YXJnZXQpXHJcblx0XHRcdFx0ZW5kQm94ID0gaW5kZXg7XHJcblx0XHRcdFx0Ym94ZXMucHVzaChub2RlLmdldEJvdW5kcyhkb2N1bWVudCkpO1xyXG5cdFx0XHRcdGluZGV4Kys7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGJveGVzLmxlbmd0aCA+IDEpXHJcblx0XHRcdFx0dGhpcy5hdXRvUm91dGUocG9zLCBjb250YWluZXIuZ2V0Qm91bmRzKGRvY3VtZW50KSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5fbWVyZ2VTZWdtZW50cyhwb3MpO1xyXG5cdFx0cmV0dXJuIHBvcztcclxuXHR9XHJcblxyXG5cdC8vTmV3IGZ1bmN0aW9uIGZvciBmaW5kaW5nIHJvdXRlXHJcblx0c3RhdGljIGZpbmRQb3NpdGlvbnMoc3RhcnQsIGVuZCwgc3RhcnROb3JtYWwsIGVuZE5vcm1hbCwgYnVmZmVyKSB7XHJcblx0XHR2YXIgc3RhcnRCdWZmZXIgPSBuZXcgUG9pbnQoc3RhcnQueCArIHN0YXJ0Tm9ybWFsLnggKiBidWZmZXIsIHN0YXJ0LnkgKyBzdGFydE5vcm1hbC55ICogYnVmZmVyKTtcclxuXHRcdHZhciBlbmRCdWZmZXIgPSBuZXcgUG9pbnQoZW5kLnggKyBlbmROb3JtYWwueCAqIGJ1ZmZlciwgZW5kLnkgKyBlbmROb3JtYWwueSAqIGJ1ZmZlcik7XHJcblx0XHR2YXIgc3RhcnRCdWZmZXJOb3JtYWwsIGVuZEJ1ZmZlck5vcm1hbDtcclxuXHRcdHZhciBwdHM7XHJcblx0XHRpZiAoc3RhcnROb3JtYWwueCAhPSAwKSB7XHJcblx0XHRcdGlmICgoZW5kQnVmZmVyLnggLSBzdGFydEJ1ZmZlci54KSAvIHN0YXJ0Tm9ybWFsLnggPiAwKSB7XHJcblx0XHRcdFx0c3RhcnRCdWZmZXJOb3JtYWwgPSBzdGFydE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IG5ldyBQb2ludCgwLCAoZW5kQnVmZmVyLnkgPj0gc3RhcnRCdWZmZXIueSkgPyAxIDogLTEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0aWYgKChlbmRCdWZmZXIueSAtIHN0YXJ0QnVmZmVyLnkpIC8gc3RhcnROb3JtYWwueSA+IDApIHtcclxuXHRcdFx0XHRzdGFydEJ1ZmZlck5vcm1hbCA9IHN0YXJ0Tm9ybWFsO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdHN0YXJ0QnVmZmVyTm9ybWFsID0gbmV3IFBvaW50KChlbmRCdWZmZXIueCA+PSBzdGFydEJ1ZmZlci54KSA/IDEgOiAtMSwgMCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChlbmROb3JtYWwueCAhPSAwKSB7XHJcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueCAtIGVuZEJ1ZmZlci54KSAvIGVuZE5vcm1hbC54ID4gMCkge1xyXG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoMCwgKHN0YXJ0QnVmZmVyLnkgPj0gZW5kQnVmZmVyLnkpID8gMSA6IC0xKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0ZWxzZSB7XHJcblx0XHRcdGlmICgoc3RhcnRCdWZmZXIueSAtIGVuZEJ1ZmZlci55KSAvIGVuZE5vcm1hbC55ID4gMCkge1xyXG5cdFx0XHRcdGVuZEJ1ZmZlck5vcm1hbCA9IGVuZE5vcm1hbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlIHtcclxuXHRcdFx0XHRlbmRCdWZmZXJOb3JtYWwgPSBuZXcgUG9pbnQoKHN0YXJ0QnVmZmVyLnggPj0gZW5kQnVmZmVyLngpID8gMSA6IC0xLCAwKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPT0gMCkge1xyXG5cdFx0XHR2YXIgbWlkZGxlID0gKHN0YXJ0QnVmZmVyTm9ybWFsLnggPT0gMCkgPyBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgZW5kQnVmZmVyLnkpIDogbmV3IFBvaW50KGVuZEJ1ZmZlci54LCBzdGFydEJ1ZmZlci55KTtcclxuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbWlkZGxlLCBlbmRCdWZmZXIsIGVuZF07XHJcblx0XHR9XHJcblx0XHRlbHNlIGlmIChzdGFydEJ1ZmZlck5vcm1hbC5kb3RQcm9kdWN0KGVuZEJ1ZmZlck5vcm1hbCkgPCAwKSB7XHJcblx0XHRcdGlmIChzdGFydEJ1ZmZlck5vcm1hbC54ID09IDApIHtcclxuXHRcdFx0XHRwdHMgPSBbc3RhcnQsIHN0YXJ0QnVmZmVyLCBuZXcgUG9pbnQoc3RhcnRCdWZmZXIueCwgKHN0YXJ0LnkgKyBlbmQueSkgLyAyKSwgbmV3IFBvaW50KGVuZEJ1ZmZlci54LCAoc3RhcnQueSArIGVuZC55KSAvIDIpLCBlbmRCdWZmZXIsIGVuZF07XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZSB7XHJcblx0XHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KChzdGFydC54ICsgZW5kLngpIC8gMiwgc3RhcnRCdWZmZXIueSksIG5ldyBQb2ludCgoc3RhcnQueCArIGVuZC54KSAvIDIsIGVuZEJ1ZmZlci55KSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRlbHNlIHtcclxuXHRcdFx0cHRzID0gW3N0YXJ0LCBzdGFydEJ1ZmZlciwgbmV3IFBvaW50KHN0YXJ0QnVmZmVyLnggKyBzdGFydEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBzdGFydEJ1ZmZlci55ICsgc3RhcnRCdWZmZXJOb3JtYWwueSAqIGJ1ZmZlciksIG5ldyBQb2ludChlbmRCdWZmZXIueCArIGVuZEJ1ZmZlck5vcm1hbC54ICogYnVmZmVyLCBlbmRCdWZmZXIueSArIGVuZEJ1ZmZlck5vcm1hbC55ICogYnVmZmVyKSwgZW5kQnVmZmVyLCBlbmRdO1xyXG5cdFx0fVxyXG5cclxuXHRcdHZhciBwcnVuZVB0cyA9IFtdO1xyXG5cdFx0cHJ1bmVQdHNbMF0gPSBwdHNbMF07XHJcblx0XHRmb3IgKHZhciBpID0gMTsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHRcdFx0aWYgKChwdHNbaV0ueCA9PSBwdHNbaS0xXS54ICYmIHB0c1tpXS54ID09IHB0c1tpKzFdLngpIHx8IChwdHNbaV0ueSA9PSBwdHNbaS0xXS55ICYmIHB0c1tpXS55ID09IHB0c1tpKzFdLnkpKSB7XHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdH1cclxuXHRcdFx0cHJ1bmVQdHMucHVzaChwdHNbaV0pO1xyXG5cdFx0fVxyXG5cdFx0cHJ1bmVQdHMucHVzaChwdHNbcHRzLmxlbmd0aCAtIDFdKTtcclxuXHRcdHJldHVybiBwcnVuZVB0cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIE1ha2UgYSByb3V0ZSBiYXNlZCBvbiB0aGUgc3RhcnQsIGVuZCBhbmQgc3RhcnROb3JtYWwgYW5kIGVuZE5vcm1hbFxyXG5cdCAqIE5vbmUgb2YgdGhlIHBhcmFtZXRlcnMgY2FuIGJlIG51bGxcclxuXHQgKiBUT0RPOiBUaGlzIG1ldGhvZCBjb3VsZCB1c2Ugc29tZSBpbXByb3ZlbWVudC4uLlxyXG5cdCAqL1xyXG5cdHN0YXRpYyByb3V0ZUludGVybmFsKHN0YXJ0LCBlbmQsIHN0YXJ0Tm9ybWFsLCBlbmROb3JtYWwsIGJ1ZmZlcikge1xyXG5cdFx0dmFyIGRpcmVjdGlvbiA9IHN0YXJ0LmdldERpcmVjdGlvbihlbmQpO1xyXG5cdFx0dmFyIGF2ZXJhZ2UgPSBzdGFydC5nZXRNaWRQb2ludChlbmQpO1xyXG5cdFx0dmFyIHBvcyA9IFtdO1xyXG5cdFx0dmFyIHN0YXJ0UG9zaXRpdmUgPSBuZXcgUG9pbnQoc3RhcnROb3JtYWwueCpzdGFydE5vcm1hbC54LCBzdGFydE5vcm1hbC55KnN0YXJ0Tm9ybWFsLnkpO1xyXG5cdFx0dmFyIGVuZFBvc2l0aXZlID0gbmV3IFBvaW50KGVuZE5vcm1hbC54KmVuZE5vcm1hbC54LCBlbmROb3JtYWwueSplbmROb3JtYWwueSk7XHJcblx0XHR2YXIgaG9yaXpvbnRhbCA9IHN0YXJ0Tm9ybWFsLnggIT0gMDtcclxuXHRcdHBvc1swXSA9IGhvcml6b250YWwgPyBzdGFydC55IDogc3RhcnQueDtcclxuXHJcblx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblx0XHR2YXIgaTtcclxuXHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPT0gMCkge1xyXG5cdFx0XHRpZiAoKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxyXG5cdFx0XHRcdCYmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDw9IDApKSB7XHJcblx0XHRcdFx0Ly8gMFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vIDJcclxuXHRcdFx0XHRpZiAoc3RhcnROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pIDwgMClcclxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xyXG5cclxuXHRcdFx0XHRwb3MucHVzaChpKTtcclxuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblxyXG5cdFx0XHRcdGlmIChlbmROb3JtYWwuZG90UHJvZHVjdChkaXJlY3Rpb24pID4gMClcclxuXHRcdFx0XHRcdGkgPSBlbmRQb3NpdGl2ZS5kb3RQcm9kdWN0KGVuZC5nZXRUcmFuc2xhdGVkKGVuZE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHRcdGkgPSBob3Jpem9udGFsID8gYXZlcmFnZS55IDogYXZlcmFnZS54O1xyXG5cclxuXHRcdFx0XHRwb3MucHVzaChpKTtcclxuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGVuZE5vcm1hbCkgPiAwKSB7XHJcblx0XHRcdFx0Ly8xXHJcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA+PSAwKVxyXG5cdFx0XHRcdFx0aSA9IHN0YXJ0UG9zaXRpdmUuZG90UHJvZHVjdChzdGFydC5nZXRUcmFuc2xhdGVkKHN0YXJ0Tm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XHJcblx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0aSA9IGVuZFBvc2l0aXZlLmRvdFByb2R1Y3QoZW5kLmdldFRyYW5zbGF0ZWQoZW5kTm9ybWFsLmdldFNjYWxlZChidWZmZXIpKSk7XHJcblx0XHRcdFx0cG9zLnB1c2goaSk7XHJcblx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdC8vMyBvciAxXHJcblx0XHRcdFx0aWYgKHN0YXJ0Tm9ybWFsLmRvdFByb2R1Y3QoZGlyZWN0aW9uKSA8IDApIHtcclxuXHRcdFx0XHRcdGkgPSBzdGFydFBvc2l0aXZlLmRvdFByb2R1Y3Qoc3RhcnQuZ2V0VHJhbnNsYXRlZChzdGFydE5vcm1hbC5nZXRTY2FsZWQoYnVmZmVyKSkpO1xyXG5cdFx0XHRcdFx0cG9zLnB1c2goaSk7XHJcblx0XHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRpID0gaG9yaXpvbnRhbCA/IGF2ZXJhZ2UueSA6IGF2ZXJhZ2UueDtcclxuXHRcdFx0XHRwb3MucHVzaChpKTtcclxuXHRcdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblxyXG5cdFx0XHRcdGlmIChzdGFydE5vcm1hbC5kb3RQcm9kdWN0KGRpcmVjdGlvbikgPCAwKSB7XHJcblx0XHRcdFx0XHRpID0gZW5kUG9zaXRpdmUuZG90UHJvZHVjdChlbmQuZ2V0VHJhbnNsYXRlZChlbmROb3JtYWwuZ2V0U2NhbGVkKGJ1ZmZlcikpKTtcclxuXHRcdFx0XHRcdHBvcy5wdXNoKGkpO1xyXG5cdFx0XHRcdFx0aG9yaXpvbnRhbCA9ICFob3Jpem9udGFsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cG9zLnB1c2goaG9yaXpvbnRhbCA/IGVuZC55IDogZW5kLngpO1xyXG5cclxuXHRcdHJldHVybiBwb3M7XHJcblx0fVxyXG5cclxuXHQvLyBQcm9jZXNzIHRoZSBwb3NpdGlvbnMuXHJcblx0c3RhdGljIHByb2Nlc3NQb3NpdGlvbnMoc3RhcnQsIGVuZCwgcG9zaXRpb25zLCBob3Jpem9udGFsKSB7XHJcblx0XHR2YXIgcG9zID0gW107XHJcblx0XHRwb3NbMF0gPSBob3Jpem9udGFsID8gc3RhcnQueCA6IHN0YXJ0Lnk7XHJcblx0XHR2YXIgaTtcclxuXHRcdGZvciAoaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0cG9zW2kgKyAxXSA9IHBvc2l0aW9uc1tpXTtcclxuXHRcdH1cclxuXHRcdHBvcy5wdXNoKChob3Jpem9udGFsID09IChwb3NpdGlvbnMubGVuZ3RoICUgMiA9PSAxKSkgPyBlbmQueCA6IGVuZC55KTtcclxuXHJcblx0XHR2YXIgcHRzID0gW107XHJcblx0XHRwdHNbMF0gPSBzdGFydDtcclxuXHRcdHZhciBwO1xyXG5cdFx0dmFyIGN1cnJlbnQsIHByZXY7XHJcblx0XHRmb3IgKGkgPSAyOyBpIDwgcG9zLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cdFx0XHRob3Jpem9udGFsID0gIWhvcml6b250YWw7XHJcblx0XHRcdHByZXYgPSBwb3NbaSAtIDFdO1xyXG5cdFx0XHRjdXJyZW50ID0gcG9zW2ldO1xyXG5cdFx0XHRwID0gaG9yaXpvbnRhbCA/IG5ldyBQb2ludChwcmV2LCBjdXJyZW50KSA6IG5ldyBQb2ludChjdXJyZW50LCBwcmV2KTtcclxuXHRcdFx0cHRzLnB1c2gocCk7XHJcblx0XHR9XHJcblx0XHRwdHMucHVzaChlbmQpO1xyXG5cdFx0cmV0dXJuIHB0cztcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIEF1dG9tYXRpY2FsbHkgcm91dGUgdGhlIGNvbm5lY3Rpb24gdG8gYXZvaWQgaW50ZXJzZWN0aW9ucyB3aXRoIG90aGVyIHZlcnRpY2VzLlxyXG5cdCAqL1xyXG5cdGF1dG9Sb3V0ZShwdHMsIGNvbnRhaW5lciwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcclxuXHRcdHZhciBzaWRlLCBzaWRlMiwgZCwgYm94LCBpbnRlcnNlY3QsIGo7XHJcblx0XHR2YXIgY2hhbm5lbCwgY2hhbm5lbDIsIHB0LCBkaXI7XHJcblxyXG5cdFx0dmFyIHN0YXJ0UGFkZGluZyA9IDAsIGVuZFBhZGRpbmc7XHJcblx0XHQvLyBmaXJzdCBnZXQgdGhlIHN0YXJ0IGFuZCBlbmQgY2hhbm5lbFxyXG5cdFx0Ym94ID0gYm94ZXNbZW5kQm94XTtcclxuXHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAyXTtcclxuXHRcdGlmIChwdC55IDwgYm94LnkpXHJcblx0XHRcdHNpZGUgPSAxO1xyXG5cdFx0ZWxzZSBpZiAocHQueSA+IGJveC55ICsgYm94LmhlaWdodClcclxuXHRcdFx0c2lkZSA9IDM7XHJcblx0XHRlbHNlIGlmIChwdC54IDwgYm94LngpXHJcblx0XHRcdHNpZGUgPSAwO1xyXG5cdFx0ZWxzZVxyXG5cdFx0XHRzaWRlID0gMjtcclxuXHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGVuZEJveCwgYm94ZXMsIHNpZGUpO1xyXG5cdFx0ZW5kUGFkZGluZyA9IGNoYW5uZWwuaG9yaXpvbnRhbCA/IChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0KS8yIDogKGNoYW5uZWwuYm90dG9tIC0gY2hhbm5lbC50b3ApLzI7XHJcblxyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdGlmIChwdHNbaSsxXS54ID09IHB0c1tpXS54ICYmIHB0c1tpKzFdLnkgPT0gcHRzW2ldLnkpIGNvbnRpbnVlO1xyXG5cdFx0XHRpbnRlcnNlY3QgPSBfZ2V0Rmlyc3RJbnRlcnNlY3Rpb24ocHRzLCBpLCBib3hlcywgc3RhcnRCb3gsIGVuZEJveCk7XHJcblx0XHRcdGlmICghaW50ZXJzZWN0KSBjb250aW51ZTtcclxuXHRcdFx0aiA9IGludGVyc2VjdFswXTtcclxuXHRcdFx0c2lkZSA9IGludGVyc2VjdFsxXTtcclxuXHRcdFx0Ym94ID0gYm94ZXNbal07XHJcblx0XHRcdGNoYW5uZWwgPSBfZ2V0Q2hhbm5lbChjb250YWluZXIsIGosIGJveGVzLCBzaWRlKTtcclxuXHRcdFx0c3dpdGNoKHNpZGUpIHtcclxuXHRcdFx0XHRjYXNlIDA6XHJcblx0XHRcdFx0Y2FzZSAyOlxyXG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQoKGNoYW5uZWwucmlnaHQgKyBjaGFubmVsLmxlZnQpLzIsIHB0c1tpXS55KTtcclxuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XHJcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAxIDogMztcclxuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnkgPT0gcHRzW2ktMV0ueSkgJiYgKHB0c1tpLTFdLnkgPiBjaGFubmVsMi50b3AgJiYgcHRzW2ktMV0ueSA8IGNoYW5uZWwyLmJvdHRvbSkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS55IC0gcHQueTtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueSA9PSBwdHNbaSszXS55KSAmJiAocHRzW2krMl0ueSA+IGNoYW5uZWwyLnRvcCAmJiBwdHNbaSsyXS55IDwgY2hhbm5lbDIuYm90dG9tKSlcclxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnkgLSBwdC55O1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLmJvdHRvbSArIGNoYW5uZWwyLnRvcCkvMiAtIHB0Lnk7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXHJcblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMCAmJiBwdC54IDw9IHB0c1tpXS54KSB8fCAoc2lkZSA9PSAyICYmIHB0LnggPj0gcHRzW2ldLngpKVxyXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXHJcblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54LCBwdHNbaV0ueSArIGQpLCBuZXcgUG9pbnQocHQueCwgcHQueSArIGQpXSxcclxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcclxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdFx0cHQgPSBuZXcgUG9pbnQocHRzW2ldLngsIChjaGFubmVsLmJvdHRvbSArIGNoYW5uZWwudG9wKS8yKTtcclxuXHRcdFx0XHRcdGRpciA9IF9nZXRSb3V0ZVRlbmRlbmN5KHB0cywgaSwgcHQsIGJveCwgc2lkZSk7XHJcblx0XHRcdFx0XHRzaWRlMiA9IGRpciA8IDAgPyAwIDogMjtcclxuXHRcdFx0XHRcdGNoYW5uZWwyID0gX2dldENoYW5uZWwoY29udGFpbmVyLCBqLCBib3hlcywgc2lkZTIpO1xyXG5cdFx0XHRcdFx0Ly8gaWYgdGhlIHByZXZpb3VzIHBvaW50IGlzIGluIHRoZSBjaGFubmVsMiwgdXNlIHRoYXQgcG9pbnQgaW5zdGVhZCBvZiBjZW50ZXIgb2YgdGhlIGNoYW5uZWwuXHJcblx0XHRcdFx0XHRpZiAoaSA+IDEgJiYgKHB0c1tpLTJdLnggPT0gcHRzW2ktMV0ueCkgJiYgKHB0c1tpLTFdLnggPiBjaGFubmVsMi5sZWZ0ICYmIHB0c1tpLTFdLnggPCBjaGFubmVsMi5yaWdodCkpXHJcblx0XHRcdFx0XHRcdGQgPSBwdHNbaS0xXS54IC0gcHQueDtcclxuXHRcdFx0XHRcdGVsc2UgaWYgKGkgPCBwdHMubGVuZ3RoIC0gMyAmJiAocHRzW2krMl0ueCA9PSBwdHNbaSszXS54KSAmJiAocHRzW2krMl0ueCA+IGNoYW5uZWwyLmxlZnQgJiYgcHRzW2krMl0ueCA8IGNoYW5uZWwyLnJpZ2h0KSlcclxuXHRcdFx0XHRcdFx0ZCA9IHB0c1tpKzJdLnggLSBwdC54O1xyXG5cdFx0XHRcdFx0ZWxzZVxyXG5cdFx0XHRcdFx0XHRkID0gKGNoYW5uZWwyLnJpZ2h0ICsgY2hhbm5lbDIubGVmdCkvMiAtIHB0Lng7XHJcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB3ZSBuZWVkIHRoaXMgcHQuXHJcblx0XHRcdFx0XHRpZiAoKHNpZGUgPT0gMSAmJiBwdC55IDw9IHB0c1tpXS55KSB8fCAoc2lkZSA9PSAzICYmIHB0LnkgPj0gcHRzW2ldLnkpKVxyXG5cdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHRlbHNlIGlmIChpID4gMCkge1xyXG5cdFx0XHRcdFx0XHQvLyBzZWUgaWYgd2UgY2FuIHB1c2ggdGhlIGxpbmUgb3V0IHRvIHdoZXJlIHdlIHN0YXJ0ZWQuXHJcblx0XHRcdFx0XHRcdGlmICghX2hhc0ludGVyc2VjdGlvbihcclxuXHRcdFx0XHRcdFx0XHRcdFtuZXcgUG9pbnQocHRzW2ldLngsIHB0c1tpXS55KSwgbmV3IFBvaW50KHB0c1tpXS54ICsgZCwgcHRzW2ldLnkpLCBuZXcgUG9pbnQocHQueCArIGQsIHB0LnkpXSxcclxuXHRcdFx0XHRcdFx0XHRcdGJveGVzKSlcclxuXHRcdFx0XHRcdFx0XHRwdCA9IG51bGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIDQ6XHJcblx0XHRcdFx0XHRjb250aW51ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHQvLyBtYXggcG9pbnRzLlxyXG5cdFx0XHRpZiAoaSA+IDIwKSByZXR1cm47XHJcblx0XHRcdGlmIChwdCAmJiAocHQueCAhPSBwdHNbaV0ueCB8fCBwdC55ICE9IHB0c1tpXS55KSkge1xyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSsxLCAwLCBwdCk7XHJcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSsxLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fSBlbHNlXHJcblx0XHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCwgc3RhcnRQYWRkaW5nLCBlbmRQYWRkaW5nKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdF9oYXNJbnRlcnNlY3Rpb24ocHRzLCBib3hlcykge1xyXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgYm94ZXMubGVuZ3RoOyBqKyspIHtcclxuXHRcdFx0XHRpZiAoYm94ZXNbal0uZGV0ZWN0SW50ZXJzZWN0aW9uKHB0c1tpXSwgcHRzW2krMV0pID49IDApXHJcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH1cclxuXHJcblx0X2dldEZpcnN0SW50ZXJzZWN0aW9uKHB0cywgaSwgYm94ZXMsIHN0YXJ0Qm94LCBlbmRCb3gpIHtcclxuXHRcdHZhciBib3gsIHNpZGUsIHNhdmVkSW5kZXggPSBudWxsLCBzYXZlZFNpZGUgPSBudWxsO1xyXG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBib3hlcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRpZiAoKGkgPT0gMCAmJiBqID09IHN0YXJ0Qm94KSB8fCAoaSA9PSBwdHMubGVuZ3RoIC0gMiAmJiBqID09IGVuZEJveCkpXHJcblx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdGJveCA9IGJveGVzW2pdO1xyXG5cdFx0XHRzaWRlID0gYm94LmRldGVjdEludGVyc2VjdGlvbihwdHNbaV0sIHB0c1tpKzFdKTtcclxuXHRcdFx0aWYgKHNpZGUgPj0gMCkge1xyXG5cdFx0XHRcdGlmIChzYXZlZEluZGV4ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdHNhdmVkSW5kZXggPSBqO1xyXG5cdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGJveGVzW3NhdmVkSW5kZXhdLmRpc3RhbmNlKHB0c1tpXSkgPiBib3guZGlzdGFuY2UocHRzW2ldKSkge1xyXG5cdFx0XHRcdFx0XHRzYXZlZEluZGV4ID0gajtcclxuXHRcdFx0XHRcdFx0c2F2ZWRTaWRlID0gc2lkZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChzYXZlZEluZGV4ICE9IG51bGwpXHJcblx0XHRcdHJldHVybiBbc2F2ZWRJbmRleCwgc2F2ZWRTaWRlXTtcclxuXHRcdHJldHVybiBudWxsO1xyXG5cdH1cclxuXHJcblx0X2dldFJvdXRlVGVuZGVuY3kocHRzLCBpLCBicmVha1B0LCBib3gsIHNpZGUpIHtcclxuXHRcdHZhciBkaXI7XHJcblx0XHR2YXIgcDtcclxuXHRcdHN3aXRjaCAoc2lkZSkge1xyXG5cdFx0XHRjYXNlIDA6XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRwID0gXCJ5XCI7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMTpcclxuXHRcdFx0Y2FzZSAzOlxyXG5cdFx0XHRcdHAgPSBcInhcIjtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdC8vZmlyc3QgdHJ5IHRoZSBicmVha3B0LlxyXG5cdFx0ZGlyID0gX2dldFJvdXRlRGlyZWN0aW9uKGJyZWFrUHQsIHB0c1twdHMubGVuZ3RoIC0gMV0pW3BdO1xyXG5cdFx0aWYgKGRpciA9PSAwKSB7XHJcblx0XHRcdGRpciA9IC1fZ2V0Um91dGVEaXJlY3Rpb24ocHRzWzBdLCBwdHNbcHRzLmxlbmd0aCAtIDFdKVtwXTtcclxuXHRcdFx0aWYgKGRpciA9PSAwKSB7XHJcblx0XHRcdFx0aWYgKGJyZWFrUHRbcF0gPCBib3guZ2V0Q2VudGVyKClbcF0pXHJcblx0XHRcdFx0XHRkaXIgPSAtMTtcclxuXHRcdFx0XHRlbHNlXHJcblx0XHRcdFx0XHRkaXIgPSAxO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZGlyO1xyXG5cdH1cclxuXHJcblx0X2dldFJvdXRlRGlyZWN0aW9uKHB0MSwgcHQyKSB7XHJcblx0XHRpZiAocHQxLnggPT0gcHQyLngpIHtcclxuXHRcdFx0aWYgKHB0MS55IDwgcHQyLnkpIHJldHVybiBQb2ludC5TO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTjtcclxuXHRcdH0gZWxzZSBpZiAocHQxLnkgPT0gcHQyLnkpIHtcclxuXHRcdFx0aWYgKHB0MS54IDwgcHQyLngpIHJldHVybiBQb2ludC5FO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuVztcclxuXHRcdH0gZWxzZSBpZiAocHQxLnggPCBwdDIueCkge1xyXG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNFO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTkU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAocHQxLnkgPCBwdDIueSkgcmV0dXJuIFBvaW50LlNXO1xyXG5cdFx0XHRyZXR1cm4gUG9pbnQuTlc7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRfZ2V0Q2hhbm5lbChjb250YWluZXIsIGluZGV4LCBib3hlcywgc2lkZSkge1xyXG5cdFx0dmFyIG1heENoYW5uZWxXaWR0aCA9IHRoaXMubWF4Q2hhbm5lbFdpZHRoO1xyXG5cdFx0dmFyIGJveDEgPSBib3hlc1tpbmRleF0sIGJveDI7XHJcblx0XHR2YXIgcHQsIGk7XHJcblx0XHR2YXIgY2hhbm5lbCA9IHt9LCBsLCB0LCBiLCByO1xyXG5cdFx0c3dpdGNoIChzaWRlKSB7XHJcblx0XHRcdGNhc2UgMDpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0TGVmdCgpO1xyXG5cdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBwdC54O1xyXG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IGZhbHNlO1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0ciA9IGJveGVzW2ldLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyID49IHB0LngpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5sZWZ0ID0gcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQpIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwubGVmdCA9IGNvbnRhaW5lci5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdGlmIChjaGFubmVsLnJpZ2h0IC0gY2hhbm5lbC5sZWZ0ID4gbWF4Q2hhbm5lbFdpZHRoKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSBjaGFubmVsLnJpZ2h0IC0gbWF4Q2hhbm5lbFdpZHRoO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmb3IgKGkgPSAwOyBpIDwgYm94ZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRcdGlmIChpID09IGluZGV4KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGJveDIgPSBib3hlc1tpXTtcclxuXHRcdFx0XHRcdGIgPSBib3gyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHR0ID0gYm94Mi5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdFx0aWYgKGIgPCBwdC55ICYmIChib3gyLmdldFJpZ2h0KCkgPiBjaGFubmVsLmxlZnQgJiYgYm94Mi5nZXRMZWZ0KCkgPCBjaGFubmVsLnJpZ2h0KSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wIHx8IGNoYW5uZWwudG9wIDwgYilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodCA+IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20gfHwgY2hhbm5lbC5ib3R0b20gPiB0KVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnRvcCkgY2hhbm5lbC50b3AgPSBjb250YWluZXIuZ2V0VG9wKCkueTtcclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwuYm90dG9tKSBjaGFubmVsLmJvdHRvbSA9IGNvbnRhaW5lci5nZXRCb3R0b20oKS55O1xyXG5cdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRjYXNlIDE6XHJcblx0XHRcdFx0cHQgPSBib3gxLmdldFRvcCgpO1xyXG5cdFx0XHRcdGNoYW5uZWwuaG9yaXpvbnRhbCA9IHRydWU7XHJcblx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBwdC55O1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0YiA9IGJveGVzW2ldLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHRpZiAoYiA+PSBwdC55KSBjb250aW51ZTtcclxuXHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxyXG5cdFx0XHRcdFx0XHRjaGFubmVsLnRvcCA9IGI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC50b3ApIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwudG9wID0gY29udGFpbmVyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC50b3AgPSBjaGFubmVsLmJvdHRvbSAtIG1heENoYW5uZWxXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcclxuXHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMjpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0UmlnaHQoKTtcclxuXHRcdFx0XHRjaGFubmVsLmhvcml6b250YWwgPSBmYWxzZTtcclxuXHRcdFx0XHRjaGFubmVsLmxlZnQgPSBwdC54O1xyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0bCA9IGJveGVzW2ldLmdldExlZnQoKS54O1xyXG5cdFx0XHRcdFx0aWYgKGwgPD0gcHQueCkgY29udGludWU7XHJcblx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBsO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQpIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjb250YWluZXIuZ2V0UmlnaHQoKS54O1xyXG5cdFx0XHRcdFx0aWYgKGNoYW5uZWwucmlnaHQgLSBjaGFubmVsLmxlZnQgPiBtYXhDaGFubmVsV2lkdGgpXHJcblx0XHRcdFx0XHRcdGNoYW5uZWwucmlnaHQgPSBjaGFubmVsLmxlZnQgKyBtYXhDaGFubmVsV2lkdGg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZvciAoaSA9IDA7IGkgPCBib3hlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0aWYgKGkgPT0gaW5kZXgpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0Ym94MiA9IGJveGVzW2ldO1xyXG5cdFx0XHRcdFx0YiA9IGJveDIuZ2V0Qm90dG9tKCkueTtcclxuXHRcdFx0XHRcdHQgPSBib3gyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0XHRpZiAoYiA8IHB0LnkgJiYgKGJveDIuZ2V0UmlnaHQoKSA+IGNoYW5uZWwubGVmdCAmJiBib3gyLmdldExlZnQoKSA8IGNoYW5uZWwucmlnaHQpKSB7XHJcblx0XHRcdFx0XHRcdGlmICghY2hhbm5lbC50b3AgfHwgY2hhbm5lbC50b3AgPCBiKVxyXG5cdFx0XHRcdFx0XHRcdGNoYW5uZWwudG9wID0gYjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh0ID4gcHQueSAmJiAoYm94Mi5nZXRSaWdodCgpID4gY2hhbm5lbC5sZWZ0ICYmIGJveDIuZ2V0TGVmdCgpIDwgY2hhbm5lbC5yaWdodCkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IHQpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSB0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoIWNoYW5uZWwudG9wKSBjaGFubmVsLnRvcCA9IGNvbnRhaW5lci5nZXRUb3AoKS55O1xyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgMzpcclxuXHRcdFx0XHRwdCA9IGJveDEuZ2V0Qm90dG9tKCk7XHJcblx0XHRcdFx0Y2hhbm5lbC5ob3Jpem9udGFsID0gdHJ1ZTtcclxuXHRcdFx0XHRjaGFubmVsLnRvcCA9IHB0Lnk7XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRpZiAoYm94Mi5nZXRUb3AoKS55IDw9IHB0LnkpIGNvbnRpbnVlO1xyXG5cdFx0XHRcdFx0aWYgKCFjaGFubmVsLmJvdHRvbSB8fCBjaGFubmVsLmJvdHRvbSA+IGJveDIuZ2V0VG9wKCkueSlcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBib3gyLmdldFRvcCgpLnk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5ib3R0b20pIHtcclxuXHRcdFx0XHRcdGNoYW5uZWwuYm90dG9tID0gY29udGFpbmVyLmdldEJvdHRvbSgpLnk7XHJcblx0XHRcdFx0XHRpZiAoY2hhbm5lbC5ib3R0b20gLSBjaGFubmVsLnRvcCA+IG1heENoYW5uZWxXaWR0aClcclxuXHRcdFx0XHRcdFx0Y2hhbm5lbC5ib3R0b20gPSBjaGFubmVsLnRvcCArIG1heENoYW5uZWxXaWR0aDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Zm9yIChpID0gMDsgaSA8IGJveGVzLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0XHRpZiAoaSA9PSBpbmRleCkgY29udGludWU7XHJcblx0XHRcdFx0XHRib3gyID0gYm94ZXNbaV07XHJcblx0XHRcdFx0XHRsID0gYm94Mi5nZXRMZWZ0KCkueDtcclxuXHRcdFx0XHRcdHIgPSBib3gyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRcdGlmIChyIDwgcHQueCAmJiAoYm94Mi5nZXRCb3R0b20oKSA+IGNoYW5uZWwudG9wICYmIGJveDIuZ2V0VG9wKCkgPCBjaGFubmVsLmJvdHRvbSkpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCFjaGFubmVsLmxlZnQgfHwgY2hhbm5lbC5sZWZ0IDwgcilcclxuXHRcdFx0XHRcdFx0XHRjaGFubmVsLmxlZnQgPSByO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKGwgPiBwdC54ICYmIChib3gyLmdldEJvdHRvbSgpID4gY2hhbm5lbC50b3AgJiYgYm94Mi5nZXRUb3AoKSA8IGNoYW5uZWwuYm90dG9tKSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoIWNoYW5uZWwucmlnaHQgfHwgY2hhbm5lbC5yaWdodCA+IGwpXHJcblx0XHRcdFx0XHRcdFx0Y2hhbm5lbC5yaWdodCA9IGw7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICghY2hhbm5lbC5sZWZ0KSBjaGFubmVsLmxlZnQgPSBjb250YWluZXIuZ2V0TGVmdCgpLng7XHJcblx0XHRcdFx0aWYgKCFjaGFubmVsLnJpZ2h0KSBjaGFubmVsLnJpZ2h0ID0gY29udGFpbmVyLmdldFJpZ2h0KCkueDtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHRcdHJldHVybiBjaGFubmVsO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogTW92ZSBhIGxpbmUgc2VnbWVudCBieSBhIHNwZWNpZmllZCBkaXN0YW5jZS5cclxuXHQgKlxyXG5cdCAqIEBwYXJhbSBwdHMgdGhlIGxpc3Qgb2YgcG9pbnRzLlxyXG5cdCAqIEBwYXJhbSBpIHRoZSBpbmRleCBvZiB0aGUgc2VnbWVudC5cclxuXHQgKiBAcGFyYW0gZCB0aGUgZGlzdGFuY2UgdG8gbW92ZS5cclxuXHQgKiBAcGFyYW0gc3RhcnRQYWRkaW5nXHJcblx0ICogQHBhcmFtIGVuZFBhZGRpbmdcclxuXHQgKi9cclxuXHRfbW92ZVNlZ21lbnQocHRzLCBpLCBkLCBzdGFydFBhZGRpbmcsIGVuZFBhZGRpbmcpIHtcclxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHdlIG5lZWQgdG8gYWRkIG5ldyBsaW5lIHNlZ21lbnRzLlxyXG5cdFx0dmFyIGRpciwgbCwgcHQ7XHJcblx0XHRpZiAoaSA9PSAwKSB7XHJcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIHN0YXJ0aW5nIHBvaW50LlxyXG5cdFx0XHRkaXIgPSBwdHNbMF0uZ2V0RGlyZWN0aW9uKHB0c1sxXSk7XHJcblx0XHRcdGlmICghc3RhcnRQYWRkaW5nKVxyXG5cdFx0XHRcdHN0YXJ0UGFkZGluZyA9IHRoaXMuTUlOX0JVRkZFUjtcclxuXHRcdFx0bCA9IE1hdGgubWluKHN0YXJ0UGFkZGluZywgcHRzWzBdLmRpc3RhbmNlKHB0c1sxXSkvMik7XHJcblx0XHRcdHB0ID0gcHRzWzBdLmdldFRyYW5zbGF0ZWQoZGlyLnNjYWxlKGwpKTtcclxuXHRcdFx0cHRzLnNwbGljZSgxLCAwLCBwdCk7XHJcblx0XHRcdF9tb3ZlU2VnbWVudChwdHMsIGkrMSwgZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdGlmIChpID09IHB0cy5sZW5ndGggLSAyKSB7XHJcblx0XHRcdC8vIHdlIG5lZWQgdG8gYnJlYWsgb2ZmIHRoZSBzZWdtZW50LCBzaW5jZSB3ZSBjYW4ndCBjaGFuZ2UgdGhlIGVuZCBwb2ludC5cclxuXHRcdFx0ZGlyID0gcHRzW3B0cy5sZW5ndGgtMV0uZ2V0RGlyZWN0aW9uKHB0c1twdHMubGVuZ3RoLTJdKTtcclxuXHRcdFx0aWYgKCFlbmRQYWRkaW5nKVxyXG5cdFx0XHRcdGVuZFBhZGRpbmcgPSB0aGlzLk1JTl9CVUZGRVI7XHJcblx0XHRcdGwgPSBNYXRoLm1pbihlbmRQYWRkaW5nLCBwdHNbcHRzLmxlbmd0aC0xXS5kaXN0YW5jZShwdHNbcHRzLmxlbmd0aC0yXSkvMik7XHJcblx0XHRcdHB0ID0gcHRzW3B0cy5sZW5ndGggLSAxXS5nZXRUcmFuc2xhdGVkKGRpci5zY2FsZShsKSk7XHJcblx0XHRcdHB0cy5zcGxpY2UocHRzLmxlbmd0aCAtIDEsIDAsIHB0KTtcclxuXHRcdFx0X21vdmVTZWdtZW50KHB0cywgaSwgZCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocHRzW2ldLnkgPT0gcHRzW2krMV0ueSkge1xyXG5cdFx0XHRpZiAoaSA+IDAgJiYgcHRzW2kgLSAxXS55ID09IHB0c1tpXS55KSB7XHJcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2ldLmNsb25lKCkpO1xyXG5cdFx0XHRcdGkrKztcclxuXHRcdFx0fVxyXG5cdFx0XHRpZiAoaSA8IHB0cy5sZW5ndGggLSAyICYmIHB0c1tpKzFdLnkgPT0gcHRzW2krMl0ueSlcclxuXHRcdFx0XHRwdHMuc3BsaWNlKGkgKyAxLCAwLCBwdHNbaSsxXS5jbG9uZSgpKTtcclxuXHRcdFx0cHRzW2ldLnkgKz0gZDtcclxuXHRcdFx0cHRzW2krMV0ueSArPSBkO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0aWYgKGkgPiAwICYmIHB0c1tpIC0gMV0ueCA9PSBwdHNbaV0ueCkge1xyXG5cdFx0XHRcdHB0cy5zcGxpY2UoaSArIDEsIDAsIHB0c1tpXS5jbG9uZSgpKTtcclxuXHRcdFx0XHRpKys7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYgKGkgPCBwdHMubGVuZ3RoIC0gMiAmJiBwdHNbaSsxXS54ID09IHB0c1tpKzJdLngpXHJcblx0XHRcdFx0cHRzLnNwbGljZShpICsgMSwgMCwgcHRzW2krMV0uY2xvbmUoKSk7XHJcblx0XHRcdHB0c1tpXS54ICs9IGQ7XHJcblx0XHRcdHB0c1tpKzFdLnggKz0gZDtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFRoaXMgbWV0aG9kIHdpbGwgbWVyZ2UgdGhlIHJlZHVuZGFudCBzZWdtZW50cy5cclxuXHQgKi9cclxuXHRfbWVyZ2VTZWdtZW50cyhwdHMpIHtcclxuXHRcdHZhciBoMSA9IHB0c1twdHMubGVuZ3RoLTFdLnkgPT0gcHRzW3B0cy5sZW5ndGgtMl0ueTtcclxuXHRcdHZhciBoMjtcclxuXHRcdGZvciAodmFyIGkgPSBwdHMubGVuZ3RoIC0gMjsgaSA+PSAxOyBpLS0pIHtcclxuXHRcdFx0aDIgPSBwdHNbaV0ueSA9PSBwdHNbaS0xXS55O1xyXG5cdFx0XHRpZiAoaDIgPT0gaDEgfHwgKHB0c1tpXS5lcXVhbHMocHRzW2ktMV0pKSlcclxuXHRcdFx0XHRwdHMuc3BsaWNlKGksIDEpO1xyXG5cdFx0XHRlbHNlXHJcblx0XHRcdFx0aDEgPSAhaDE7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5saW5rVHlwZXNbJ2RpcmVjdCddID0gRGlyZWN0TGluaztcclxubGlua1R5cGVzWydiZXppZXInXSA9IEJlemllckxpbms7XHJcbmxpbmtUeXBlc1snZW50aXR5UmVsYXRpb25zJ10gPSBFbnRpdHlSZWxhdGlvbnM7XHJcbmxpbmtUeXBlc1snbWFuaGF0dGFuJ10gPSBNYW5oYXR0YW47XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaW5rO1xyXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9nZW9tZXRyeS9MaW5rLmpzXG4gKiovIiwiLyohXG4gICogQmVhbiAtIGNvcHlyaWdodCAoYykgSmFjb2IgVGhvcm50b24gMjAxMS0yMDEyXG4gICogaHR0cHM6Ly9naXRodWIuY29tL2ZhdC9iZWFuXG4gICogTUlUIGxpY2Vuc2VcbiAgKi9cbihmdW5jdGlvbiAobmFtZSwgY29udGV4dCwgZGVmaW5pdGlvbikge1xuICBpZiAodHlwZW9mIG1vZHVsZSAhPSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykgbW9kdWxlLmV4cG9ydHMgPSBkZWZpbml0aW9uKClcbiAgZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShkZWZpbml0aW9uKVxuICBlbHNlIGNvbnRleHRbbmFtZV0gPSBkZWZpbml0aW9uKClcbn0pKCdiZWFuJywgdGhpcywgZnVuY3Rpb24gKG5hbWUsIGNvbnRleHQpIHtcbiAgbmFtZSAgICA9IG5hbWUgICAgfHwgJ2JlYW4nXG4gIGNvbnRleHQgPSBjb250ZXh0IHx8IHRoaXNcblxuICB2YXIgd2luICAgICAgICAgICAgPSB3aW5kb3dcbiAgICAsIG9sZCAgICAgICAgICAgID0gY29udGV4dFtuYW1lXVxuICAgICwgbmFtZXNwYWNlUmVnZXggPSAvW15cXC5dKig/PVxcLi4qKVxcLnwuKi9cbiAgICAsIG5hbWVSZWdleCAgICAgID0gL1xcLi4qL1xuICAgICwgYWRkRXZlbnQgICAgICAgPSAnYWRkRXZlbnRMaXN0ZW5lcidcbiAgICAsIHJlbW92ZUV2ZW50ICAgID0gJ3JlbW92ZUV2ZW50TGlzdGVuZXInXG4gICAgLCBkb2MgICAgICAgICAgICA9IGRvY3VtZW50IHx8IHt9XG4gICAgLCByb290ICAgICAgICAgICA9IGRvYy5kb2N1bWVudEVsZW1lbnQgfHwge31cbiAgICAsIFczQ19NT0RFTCAgICAgID0gcm9vdFthZGRFdmVudF1cbiAgICAsIGV2ZW50U3VwcG9ydCAgID0gVzNDX01PREVMID8gYWRkRXZlbnQgOiAnYXR0YWNoRXZlbnQnXG4gICAgLCBPTkUgICAgICAgICAgICA9IHt9IC8vIHNpbmdsZXRvbiBmb3IgcXVpY2sgbWF0Y2hpbmcgbWFraW5nIGFkZCgpIGRvIG9uZSgpXG5cbiAgICAsIHNsaWNlICAgICAgICAgID0gQXJyYXkucHJvdG90eXBlLnNsaWNlXG4gICAgLCBzdHIyYXJyICAgICAgICA9IGZ1bmN0aW9uIChzLCBkKSB7IHJldHVybiBzLnNwbGl0KGQgfHwgJyAnKSB9XG4gICAgLCBpc1N0cmluZyAgICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnc3RyaW5nJyB9XG4gICAgLCBpc0Z1bmN0aW9uICAgICA9IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbyA9PSAnZnVuY3Rpb24nIH1cblxuICAgICAgLy8gZXZlbnRzIHRoYXQgd2UgY29uc2lkZXIgdG8gYmUgJ25hdGl2ZScsIGFueXRoaW5nIG5vdCBpbiB0aGlzIGxpc3Qgd2lsbFxuICAgICAgLy8gYmUgdHJlYXRlZCBhcyBhIGN1c3RvbSBldmVudFxuICAgICwgc3RhbmRhcmROYXRpdmVFdmVudHMgPVxuICAgICAgICAnY2xpY2sgZGJsY2xpY2sgbW91c2V1cCBtb3VzZWRvd24gY29udGV4dG1lbnUgJyAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnbW91c2V3aGVlbCBtb3VzZW11bHRpd2hlZWwgRE9NTW91c2VTY3JvbGwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2Ugd2hlZWxcbiAgICAgICAgJ21vdXNlb3ZlciBtb3VzZW91dCBtb3VzZW1vdmUgc2VsZWN0c3RhcnQgc2VsZWN0ZW5kICcgICAgICAgICAgICArIC8vIG1vdXNlIG1vdmVtZW50XG4gICAgICAgICdrZXlkb3duIGtleXByZXNzIGtleXVwICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBrZXlib2FyZFxuICAgICAgICAnb3JpZW50YXRpb25jaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW9iaWxlXG4gICAgICAgICdmb2N1cyBibHVyIGNoYW5nZSByZXNldCBzZWxlY3Qgc3VibWl0ICcgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyBmb3JtIGVsZW1lbnRzXG4gICAgICAgICdsb2FkIHVubG9hZCBiZWZvcmV1bmxvYWQgcmVzaXplIG1vdmUgRE9NQ29udGVudExvYWRlZCAnICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UgbWVzc2FnZSAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHdpbmRvd1xuICAgICAgICAnZXJyb3IgYWJvcnQgc2Nyb2xsICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbWlzY1xuICAgICAgLy8gZWxlbWVudC5maXJlRXZlbnQoJ29uWFlaJy4uLiBpcyBub3QgZm9yZ2l2aW5nIGlmIHdlIHRyeSB0byBmaXJlIGFuIGV2ZW50XG4gICAgICAvLyB0aGF0IGRvZXNuJ3QgYWN0dWFsbHkgZXhpc3QsIHNvIG1ha2Ugc3VyZSB3ZSBvbmx5IGRvIHRoZXNlIG9uIG5ld2VyIGJyb3dzZXJzXG4gICAgLCB3M2NOYXRpdmVFdmVudHMgPVxuICAgICAgICAnc2hvdyAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gbW91c2UgYnV0dG9uc1xuICAgICAgICAnaW5wdXQgaW52YWxpZCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgLy8gZm9ybSBlbGVtZW50c1xuICAgICAgICAndG91Y2hzdGFydCB0b3VjaG1vdmUgdG91Y2hlbmQgdG91Y2hjYW5jZWwgJyAgICAgICAgICAgICAgICAgICAgICsgLy8gdG91Y2hcbiAgICAgICAgJ2dlc3R1cmVzdGFydCBnZXN0dXJlY2hhbmdlIGdlc3R1cmVlbmQgJyAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIGdlc3R1cmVcbiAgICAgICAgJ3RleHRpbnB1dCAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIFRleHRFdmVudFxuICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZSBwYWdlc2hvdyBwYWdlaGlkZSBwb3BzdGF0ZSAnICAgICAgICAgICAgICAgICAgICsgLy8gd2luZG93XG4gICAgICAgICdoYXNoY2hhbmdlIG9mZmxpbmUgb25saW5lICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKyAvLyB3aW5kb3dcbiAgICAgICAgJ2FmdGVycHJpbnQgYmVmb3JlcHJpbnQgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIHByaW50aW5nXG4gICAgICAgICdkcmFnc3RhcnQgZHJhZ2VudGVyIGRyYWdvdmVyIGRyYWdsZWF2ZSBkcmFnIGRyb3AgZHJhZ2VuZCAnICAgICAgKyAvLyBkbmRcbiAgICAgICAgJ2xvYWRzdGFydCBwcm9ncmVzcyBzdXNwZW5kIGVtcHRpZWQgc3RhbGxlZCBsb2FkbWV0YWRhdGEgJyAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdsb2FkZWRkYXRhIGNhbnBsYXkgY2FucGxheXRocm91Z2ggcGxheWluZyB3YWl0aW5nIHNlZWtpbmcgJyAgICAgKyAvLyBtZWRpYVxuICAgICAgICAnc2Vla2VkIGVuZGVkIGR1cmF0aW9uY2hhbmdlIHRpbWV1cGRhdGUgcGxheSBwYXVzZSByYXRlY2hhbmdlICcgICsgLy8gbWVkaWFcbiAgICAgICAgJ3ZvbHVtZWNoYW5nZSBjdWVjaGFuZ2UgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICArIC8vIG1lZGlhXG4gICAgICAgICdjaGVja2luZyBub3VwZGF0ZSBkb3dubG9hZGluZyBjYWNoZWQgdXBkYXRlcmVhZHkgb2Jzb2xldGUgJyAgICAgICAvLyBhcHBjYWNoZVxuXG4gICAgICAvLyBjb252ZXJ0IHRvIGEgaGFzaCBmb3IgcXVpY2sgbG9va3Vwc1xuICAgICwgbmF0aXZlRXZlbnRzID0gKGZ1bmN0aW9uIChoYXNoLCBldmVudHMsIGkpIHtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGV2ZW50cy5sZW5ndGg7IGkrKykgZXZlbnRzW2ldICYmIChoYXNoW2V2ZW50c1tpXV0gPSAxKVxuICAgICAgICByZXR1cm4gaGFzaFxuICAgICAgfSh7fSwgc3RyMmFycihzdGFuZGFyZE5hdGl2ZUV2ZW50cyArIChXM0NfTU9ERUwgPyB3M2NOYXRpdmVFdmVudHMgOiAnJykpKSlcblxuICAgICAgLy8gY3VzdG9tIGV2ZW50cyBhcmUgZXZlbnRzIHRoYXQgd2UgKmZha2UqLCB0aGV5IGFyZSBub3QgcHJvdmlkZWQgbmF0aXZlbHkgYnV0XG4gICAgICAvLyB3ZSBjYW4gdXNlIG5hdGl2ZSBldmVudHMgdG8gZ2VuZXJhdGUgdGhlbVxuICAgICwgY3VzdG9tRXZlbnRzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlzQW5jZXN0b3IgPSAnY29tcGFyZURvY3VtZW50UG9zaXRpb24nIGluIHJvb3RcbiAgICAgICAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gY29udGFpbmVyLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIChjb250YWluZXIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oZWxlbWVudCkgJiAxNikgPT09IDE2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6ICdjb250YWlucycgaW4gcm9vdFxuICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBjb250YWluZXIubm9kZVR5cGUgPT09IDkgfHwgY29udGFpbmVyID09PSB3aW5kb3cgPyByb290IDogY29udGFpbmVyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXIgIT09IGVsZW1lbnQgJiYgY29udGFpbmVyLmNvbnRhaW5zKGVsZW1lbnQpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBmdW5jdGlvbiAoZWxlbWVudCwgY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHdoaWxlIChlbGVtZW50ID0gZWxlbWVudC5wYXJlbnROb2RlKSBpZiAoZWxlbWVudCA9PT0gY29udGFpbmVyKSByZXR1cm4gMVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICwgY2hlY2sgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyIHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0XG4gICAgICAgICAgICAgIHJldHVybiAhcmVsYXRlZFxuICAgICAgICAgICAgICAgID8gcmVsYXRlZCA9PSBudWxsXG4gICAgICAgICAgICAgICAgOiAocmVsYXRlZCAhPT0gdGhpcyAmJiByZWxhdGVkLnByZWZpeCAhPT0gJ3h1bCcgJiYgIS9kb2N1bWVudC8udGVzdCh0aGlzLnRvU3RyaW5nKCkpXG4gICAgICAgICAgICAgICAgICAgICYmICFpc0FuY2VzdG9yKHJlbGF0ZWQsIHRoaXMpKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb3VzZWVudGVyOiB7IGJhc2U6ICdtb3VzZW92ZXInLCBjb25kaXRpb246IGNoZWNrIH1cbiAgICAgICAgICAsIG1vdXNlbGVhdmU6IHsgYmFzZTogJ21vdXNlb3V0JywgY29uZGl0aW9uOiBjaGVjayB9XG4gICAgICAgICAgLCBtb3VzZXdoZWVsOiB7IGJhc2U6IC9GaXJlZm94Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpID8gJ0RPTU1vdXNlU2Nyb2xsJyA6ICdtb3VzZXdoZWVsJyB9XG4gICAgICAgIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgcHJvdmlkZSBhIGNvbnNpc3RlbnQgRXZlbnQgb2JqZWN0IGFjcm9zcyBicm93c2VycyBieSB0YWtpbmcgdGhlIGFjdHVhbCBET01cbiAgICAgIC8vIGV2ZW50IG9iamVjdCBhbmQgZ2VuZXJhdGluZyBhIG5ldyBvbmUgZnJvbSBpdHMgcHJvcGVydGllcy5cbiAgICAsIEV2ZW50ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGEgd2hpdGVsaXN0IG9mIHByb3BlcnRpZXMgKGZvciBkaWZmZXJlbnQgZXZlbnQgdHlwZXMpIHRlbGxzIHVzIHdoYXQgdG8gY2hlY2sgZm9yIGFuZCBjb3B5XG4gICAgICAgIHZhciBjb21tb25Qcm9wcyAgPSBzdHIyYXJyKCdhbHRLZXkgYXR0ckNoYW5nZSBhdHRyTmFtZSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0ICcgK1xuICAgICAgICAgICAgICAnZGV0YWlsIGV2ZW50UGhhc2UgZ2V0TW9kaWZpZXJTdGF0ZSBpc1RydXN0ZWQgbWV0YUtleSByZWxhdGVkTm9kZSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5ICcgICtcbiAgICAgICAgICAgICAgJ3NyY0VsZW1lbnQgdGFyZ2V0IHRpbWVTdGFtcCB0eXBlIHZpZXcgd2hpY2ggcHJvcGVydHlOYW1lJylcbiAgICAgICAgICAsIG1vdXNlUHJvcHMgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdidXR0b24gYnV0dG9ucyBjbGllbnRYIGNsaWVudFkgZGF0YVRyYW5zZmVyICcgICAgICArXG4gICAgICAgICAgICAgICdmcm9tRWxlbWVudCBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudCcpKVxuICAgICAgICAgICwgbW91c2VXaGVlbFByb3BzID0gbW91c2VQcm9wcy5jb25jYXQoc3RyMmFycignd2hlZWxEZWx0YSB3aGVlbERlbHRhWCB3aGVlbERlbHRhWSB3aGVlbERlbHRhWiAnICtcbiAgICAgICAgICAgICAgJ2F4aXMnKSkgLy8gJ2F4aXMnIGlzIEZGIHNwZWNpZmljXG4gICAgICAgICAgLCBrZXlQcm9wcyAgICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZSBrZXlJZGVudGlmaWVyICcgICAgICAgICAgK1xuICAgICAgICAgICAgICAna2V5TG9jYXRpb24gbG9jYXRpb24nKSlcbiAgICAgICAgICAsIHRleHRQcm9wcyAgICA9IGNvbW1vblByb3BzLmNvbmNhdChzdHIyYXJyKCdkYXRhJykpXG4gICAgICAgICAgLCB0b3VjaFByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycigndG91Y2hlcyB0YXJnZXRUb3VjaGVzIGNoYW5nZWRUb3VjaGVzIHNjYWxlIHJvdGF0aW9uJykpXG4gICAgICAgICAgLCBtZXNzYWdlUHJvcHMgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignZGF0YSBvcmlnaW4gc291cmNlJykpXG4gICAgICAgICAgLCBzdGF0ZVByb3BzICAgPSBjb21tb25Qcm9wcy5jb25jYXQoc3RyMmFycignc3RhdGUnKSlcbiAgICAgICAgICAsIG92ZXJPdXRSZWdleCA9IC9vdmVyfG91dC9cbiAgICAgICAgICAgIC8vIHNvbWUgZXZlbnQgdHlwZXMgbmVlZCBzcGVjaWFsIGhhbmRsaW5nIGFuZCBzb21lIG5lZWQgc3BlY2lhbCBwcm9wZXJ0aWVzLCBkbyB0aGF0IGFsbCBoZXJlXG4gICAgICAgICAgLCB0eXBlRml4ZXJzICAgPSBbXG4gICAgICAgICAgICAgICAgeyAvLyBrZXkgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL2tleS9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LmtleUNvZGUgPSBldmVudC5rZXlDb2RlIHx8IGV2ZW50LndoaWNoXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGtleVByb3BzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBtb3VzZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvY2xpY2t8bW91c2UoPyEoLip3aGVlbHxzY3JvbGwpKXxtZW51fGRyYWd8ZHJvcC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKGV2ZW50LCBuZXdFdmVudCwgdHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgIG5ld0V2ZW50LnJpZ2h0Q2xpY2sgPSBldmVudC53aGljaCA9PT0gMyB8fCBldmVudC5idXR0b24gPT09IDJcbiAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5wb3MgPSB7IHg6IDAsIHk6IDAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5wYWdlWCB8fCBldmVudC5wYWdlWSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LnBhZ2VYXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQucGFnZVlcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmNsaWVudFggfHwgZXZlbnQuY2xpZW50WSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQuY2xpZW50WCA9IGV2ZW50LmNsaWVudFggKyBkb2MuYm9keS5zY3JvbGxMZWZ0ICsgcm9vdC5zY3JvbGxMZWZ0XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFdmVudC5jbGllbnRZID0gZXZlbnQuY2xpZW50WSArIGRvYy5ib2R5LnNjcm9sbFRvcCArIHJvb3Quc2Nyb2xsVG9wXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChvdmVyT3V0UmVnZXgudGVzdCh0eXBlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RXZlbnQucmVsYXRlZFRhcmdldCA9IGV2ZW50LnJlbGF0ZWRUYXJnZXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgZXZlbnRbKHR5cGUgPT0gJ21vdXNlb3ZlcicgPyAnZnJvbScgOiAndG8nKSArICdFbGVtZW50J11cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vdXNlUHJvcHNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1vdXNlIHdoZWVsIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9tb3VzZS4qKHdoZWVsfHNjcm9sbCkvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG1vdXNlV2hlZWxQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gVGV4dEV2ZW50XG4gICAgICAgICAgICAgICAgICAgIHJlZzogL150ZXh0L2lcbiAgICAgICAgICAgICAgICAgICwgZml4OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0ZXh0UHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIHRvdWNoIGFuZCBnZXN0dXJlIGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICByZWc6IC9edG91Y2h8Xmdlc3R1cmUvaVxuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRvdWNoUHJvcHMgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgLCB7IC8vIG1lc3NhZ2UgZXZlbnRzXG4gICAgICAgICAgICAgICAgICAgIHJlZzogL15tZXNzYWdlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbWVzc2FnZVByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICwgeyAvLyBwb3BzdGF0ZSBldmVudHNcbiAgICAgICAgICAgICAgICAgICAgcmVnOiAvXnBvcHN0YXRlJC9pXG4gICAgICAgICAgICAgICAgICAsIGZpeDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc3RhdGVQcm9wcyB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIHsgLy8gZXZlcnl0aGluZyBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlZzogLy4qL1xuICAgICAgICAgICAgICAgICAgLCBmaXg6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGNvbW1vblByb3BzIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgLCB0eXBlRml4ZXJNYXAgPSB7fSAvLyB1c2VkIHRvIG1hcCBldmVudCB0eXBlcyB0byBmaXhlciBmdW5jdGlvbnMgKGFib3ZlKSwgYSBiYXNpYyBjYWNoZSBtZWNoYW5pc21cblxuICAgICAgICAgICwgRXZlbnQgPSBmdW5jdGlvbiAoZXZlbnQsIGVsZW1lbnQsIGlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkgcmV0dXJuXG4gICAgICAgICAgICAgIGV2ZW50ID0gZXZlbnQgfHwgKChlbGVtZW50Lm93bmVyRG9jdW1lbnQgfHwgZWxlbWVudC5kb2N1bWVudCB8fCBlbGVtZW50KS5wYXJlbnRXaW5kb3cgfHwgd2luKS5ldmVudFxuICAgICAgICAgICAgICB0aGlzLm9yaWdpbmFsRXZlbnQgPSBldmVudFxuICAgICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgID0gaXNOYXRpdmVcbiAgICAgICAgICAgICAgdGhpcy5pc0JlYW4gICAgICAgICA9IHRydWVcblxuICAgICAgICAgICAgICBpZiAoIWV2ZW50KSByZXR1cm5cblxuICAgICAgICAgICAgICB2YXIgdHlwZSAgID0gZXZlbnQudHlwZVxuICAgICAgICAgICAgICAgICwgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnRcbiAgICAgICAgICAgICAgICAsIGksIGwsIHAsIHByb3BzLCBmaXhlclxuXG4gICAgICAgICAgICAgIHRoaXMudGFyZ2V0ID0gdGFyZ2V0ICYmIHRhcmdldC5ub2RlVHlwZSA9PT0gMyA/IHRhcmdldC5wYXJlbnROb2RlIDogdGFyZ2V0XG5cbiAgICAgICAgICAgICAgaWYgKGlzTmF0aXZlKSB7IC8vIHdlIG9ubHkgbmVlZCBiYXNpYyBhdWdtZW50YXRpb24gb24gY3VzdG9tIGV2ZW50cywgdGhlIHJlc3QgZXhwZW5zaXZlICYgcG9pbnRsZXNzXG4gICAgICAgICAgICAgICAgZml4ZXIgPSB0eXBlRml4ZXJNYXBbdHlwZV1cbiAgICAgICAgICAgICAgICBpZiAoIWZpeGVyKSB7IC8vIGhhdmVuJ3QgZW5jb3VudGVyZWQgdGhpcyBldmVudCB0eXBlIGJlZm9yZSwgbWFwIGEgZml4ZXIgZnVuY3Rpb24gZm9yIGl0XG4gICAgICAgICAgICAgICAgICBmb3IgKGkgPSAwLCBsID0gdHlwZUZpeGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVGaXhlcnNbaV0ucmVnLnRlc3QodHlwZSkpIHsgLy8gZ3VhcmFudGVlZCB0byBtYXRjaCBhdCBsZWFzdCBvbmUsIGxhc3QgaXMgLipcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlRml4ZXJNYXBbdHlwZV0gPSBmaXhlciA9IHR5cGVGaXhlcnNbaV0uZml4XG4gICAgICAgICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHByb3BzID0gZml4ZXIoZXZlbnQsIHRoaXMsIHR5cGUpXG4gICAgICAgICAgICAgICAgZm9yIChpID0gcHJvcHMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoISgocCA9IHByb3BzW2ldKSBpbiB0aGlzKSAmJiBwIGluIGV2ZW50KSB0aGlzW3BdID0gZXZlbnRbcF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAvLyBwcmV2ZW50RGVmYXVsdCgpIGFuZCBzdG9wUHJvcGFnYXRpb24oKSBhcmUgYSBjb25zaXN0ZW50IGludGVyZmFjZSB0byB0aG9zZSBmdW5jdGlvbnNcbiAgICAgICAgLy8gb24gdGhlIERPTSwgc3RvcCgpIGlzIGFuIGFsaWFzIGZvciBib3RoIG9mIHRoZW0gdG9nZXRoZXJcbiAgICAgICAgRXZlbnQucHJvdG90eXBlLnByZXZlbnREZWZhdWx0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQucHJldmVudERlZmF1bHQpIHRoaXMub3JpZ2luYWxFdmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgZWxzZSB0aGlzLm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIEV2ZW50LnByb3RvdHlwZS5zdG9wUHJvcGFnYXRpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24pIHRoaXMub3JpZ2luYWxFdmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgICAgICAgIGVsc2UgdGhpcy5vcmlnaW5hbEV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICB0aGlzLnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgdGhpcy5zdG9wcGVkID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIC8vIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyB0byBiZSBoYW5kbGVkIGludGVybmFsbHkgYmVjYXVzZSB3ZSBtYW5hZ2UgdGhlIGV2ZW50IGxpc3QgZm9yXG4gICAgICAgIC8vIGVhY2ggZWxlbWVudFxuICAgICAgICAvLyBub3RlIHRoYXQgb3JpZ2luYWxFbGVtZW50IG1heSBiZSBhIEJlYW4jRXZlbnQgb2JqZWN0IGluIHNvbWUgc2l0dWF0aW9uc1xuICAgICAgICBFdmVudC5wcm90b3R5cGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmICh0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKSB0aGlzLm9yaWdpbmFsRXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKClcbiAgICAgICAgICB0aGlzLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdHJ1ZSB9XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnQucHJvdG90eXBlLmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgJiYgdGhpcy5vcmlnaW5hbEV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKClcbiAgICAgICAgfVxuICAgICAgICBFdmVudC5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbiAoY3VycmVudFRhcmdldCkge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBpcyByaXBlIGZvciBvcHRpbWlzYXRpb24sIG5ldyBldmVudHMgYXJlICpleHBlbnNpdmUqXG4gICAgICAgICAgLy8gaW1wcm92aW5nIHRoaXMgd2lsbCBzcGVlZCB1cCBkZWxlZ2F0ZWQgZXZlbnRzXG4gICAgICAgICAgdmFyIG5lID0gbmV3IEV2ZW50KHRoaXMsIHRoaXMuZWxlbWVudCwgdGhpcy5pc05hdGl2ZSlcbiAgICAgICAgICBuZS5jdXJyZW50VGFyZ2V0ID0gY3VycmVudFRhcmdldFxuICAgICAgICAgIHJldHVybiBuZVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEV2ZW50XG4gICAgICB9KCkpXG5cbiAgICAgIC8vIGlmIHdlJ3JlIGluIG9sZCBJRSB3ZSBjYW4ndCBkbyBvbnByb3BlcnR5Y2hhbmdlIG9uIGRvYyBvciB3aW4gc28gd2UgdXNlIGRvYy5kb2N1bWVudEVsZW1lbnQgZm9yIGJvdGhcbiAgICAsIHRhcmdldEVsZW1lbnQgPSBmdW5jdGlvbiAoZWxlbWVudCwgaXNOYXRpdmUpIHtcbiAgICAgICAgcmV0dXJuICFXM0NfTU9ERUwgJiYgIWlzTmF0aXZlICYmIChlbGVtZW50ID09PSBkb2MgfHwgZWxlbWVudCA9PT0gd2luKSA/IHJvb3QgOiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIEJlYW4gbWFpbnRhaW5zIGFuIGludGVybmFsIHJlZ2lzdHJ5IGZvciBldmVudCBsaXN0ZW5lcnMuIFdlIGRvbid0IHRvdWNoIGVsZW1lbnRzLCBvYmplY3RzXG4gICAgICAgICogb3IgZnVuY3Rpb25zIHRvIGlkZW50aWZ5IHRoZW0sIGluc3RlYWQgd2Ugc3RvcmUgZXZlcnl0aGluZyBpbiB0aGUgcmVnaXN0cnkuXG4gICAgICAgICogRWFjaCBldmVudCBsaXN0ZW5lciBoYXMgYSBSZWdFbnRyeSBvYmplY3QsIHdlIGhhdmUgb25lICdyZWdpc3RyeScgZm9yIHRoZSB3aG9sZSBpbnN0YW5jZS5cbiAgICAgICAgKi9cbiAgICAsIFJlZ0VudHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZWFjaCBoYW5kbGVyIGlzIHdyYXBwZWQgc28gd2UgY2FuIGhhbmRsZSBkZWxlZ2F0aW9uIGFuZCBjdXN0b20gZXZlbnRzXG4gICAgICAgIHZhciB3cmFwcGVkSGFuZGxlciA9IGZ1bmN0aW9uIChlbGVtZW50LCBmbiwgY29uZGl0aW9uLCBhcmdzKSB7XG4gICAgICAgICAgICB2YXIgY2FsbCA9IGZ1bmN0aW9uIChldmVudCwgZWFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShlbGVtZW50LCBhcmdzID8gc2xpY2UuY2FsbChlYXJncywgZXZlbnQgPyAwIDogMSkuY29uY2F0KGFyZ3MpIDogZWFyZ3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGZpbmRUYXJnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGV2ZW50RWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuLl9fYmVhbkRlbCA/IGZuLl9fYmVhbkRlbC5mdChldmVudC50YXJnZXQsIGVsZW1lbnQpIDogZXZlbnRFbGVtZW50XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAsIGhhbmRsZXIgPSBjb25kaXRpb25cbiAgICAgICAgICAgICAgICAgID8gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9IGZpbmRUYXJnZXQoZXZlbnQsIHRoaXMpIC8vIGRlbGVhdGVkIGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5hcHBseSh0YXJnZXQsIGFyZ3VtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudCkgZXZlbnQuY3VycmVudFRhcmdldCA9IHRhcmdldFxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGwoZXZlbnQsIGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGZuLl9fYmVhbkRlbCkgZXZlbnQgPSBldmVudC5jbG9uZShmaW5kVGFyZ2V0KGV2ZW50KSkgLy8gZGVsZWdhdGVkIGV2ZW50LCBmaXggdGhlIGZpeFxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYWxsKGV2ZW50LCBhcmd1bWVudHMpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGhhbmRsZXIuX19iZWFuRGVsID0gZm4uX19iZWFuRGVsXG4gICAgICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgICAgIH1cblxuICAgICAgICAsIFJlZ0VudHJ5ID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGhhbmRsZXIsIG9yaWdpbmFsLCBuYW1lc3BhY2VzLCBhcmdzLCByb290KSB7XG4gICAgICAgICAgICB2YXIgY3VzdG9tVHlwZSAgICAgPSBjdXN0b21FdmVudHNbdHlwZV1cbiAgICAgICAgICAgICAgLCBpc05hdGl2ZVxuXG4gICAgICAgICAgICBpZiAodHlwZSA9PSAndW5sb2FkJykge1xuICAgICAgICAgICAgICAvLyBzZWxmIGNsZWFuLXVwXG4gICAgICAgICAgICAgIGhhbmRsZXIgPSBvbmNlKHJlbW92ZUxpc3RlbmVyLCBlbGVtZW50LCB0eXBlLCBoYW5kbGVyLCBvcmlnaW5hbClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUpIHtcbiAgICAgICAgICAgICAgaWYgKGN1c3RvbVR5cGUuY29uZGl0aW9uKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlciA9IHdyYXBwZWRIYW5kbGVyKGVsZW1lbnQsIGhhbmRsZXIsIGN1c3RvbVR5cGUuY29uZGl0aW9uLCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHR5cGUgPSBjdXN0b21UeXBlLmJhc2UgfHwgdHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmlzTmF0aXZlICAgICAgPSBpc05hdGl2ZSA9IG5hdGl2ZUV2ZW50c1t0eXBlXSAmJiAhIWVsZW1lbnRbZXZlbnRTdXBwb3J0XVxuICAgICAgICAgICAgdGhpcy5jdXN0b21UeXBlICAgID0gIVczQ19NT0RFTCAmJiAhaXNOYXRpdmUgJiYgdHlwZVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50ICAgICAgID0gZWxlbWVudFxuICAgICAgICAgICAgdGhpcy50eXBlICAgICAgICAgID0gdHlwZVxuICAgICAgICAgICAgdGhpcy5vcmlnaW5hbCAgICAgID0gb3JpZ2luYWxcbiAgICAgICAgICAgIHRoaXMubmFtZXNwYWNlcyAgICA9IG5hbWVzcGFjZXNcbiAgICAgICAgICAgIHRoaXMuZXZlbnRUeXBlICAgICA9IFczQ19NT0RFTCB8fCBpc05hdGl2ZSA/IHR5cGUgOiAncHJvcGVydHljaGFuZ2UnXG4gICAgICAgICAgICB0aGlzLnRhcmdldCAgICAgICAgPSB0YXJnZXRFbGVtZW50KGVsZW1lbnQsIGlzTmF0aXZlKVxuICAgICAgICAgICAgdGhpc1tldmVudFN1cHBvcnRdID0gISF0aGlzLnRhcmdldFtldmVudFN1cHBvcnRdXG4gICAgICAgICAgICB0aGlzLnJvb3QgICAgICAgICAgPSByb290XG4gICAgICAgICAgICB0aGlzLmhhbmRsZXIgICAgICAgPSB3cmFwcGVkSGFuZGxlcihlbGVtZW50LCBoYW5kbGVyLCBudWxsLCBhcmdzKVxuICAgICAgICAgIH1cblxuICAgICAgICAvLyBnaXZlbiBhIGxpc3Qgb2YgbmFtZXNwYWNlcywgaXMgb3VyIGVudHJ5IGluIGFueSBvZiB0aGVtP1xuICAgICAgICBSZWdFbnRyeS5wcm90b3R5cGUuaW5OYW1lc3BhY2VzID0gZnVuY3Rpb24gKGNoZWNrTmFtZXNwYWNlcykge1xuICAgICAgICAgIHZhciBpLCBqLCBjID0gMFxuICAgICAgICAgIGlmICghY2hlY2tOYW1lc3BhY2VzKSByZXR1cm4gdHJ1ZVxuICAgICAgICAgIGlmICghdGhpcy5uYW1lc3BhY2VzKSByZXR1cm4gZmFsc2VcbiAgICAgICAgICBmb3IgKGkgPSBjaGVja05hbWVzcGFjZXMubGVuZ3RoOyBpLS07KSB7XG4gICAgICAgICAgICBmb3IgKGogPSB0aGlzLm5hbWVzcGFjZXMubGVuZ3RoOyBqLS07KSB7XG4gICAgICAgICAgICAgIGlmIChjaGVja05hbWVzcGFjZXNbaV0gPT0gdGhpcy5uYW1lc3BhY2VzW2pdKSBjKytcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGNoZWNrTmFtZXNwYWNlcy5sZW5ndGggPT09IGNcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1hdGNoIGJ5IGVsZW1lbnQsIG9yaWdpbmFsIGZuIChvcHQpLCBoYW5kbGVyIGZuIChvcHQpXG4gICAgICAgIFJlZ0VudHJ5LnByb3RvdHlwZS5tYXRjaGVzID0gZnVuY3Rpb24gKGNoZWNrRWxlbWVudCwgY2hlY2tPcmlnaW5hbCwgY2hlY2tIYW5kbGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudCA9PT0gY2hlY2tFbGVtZW50ICYmXG4gICAgICAgICAgICAoIWNoZWNrT3JpZ2luYWwgfHwgdGhpcy5vcmlnaW5hbCA9PT0gY2hlY2tPcmlnaW5hbCkgJiZcbiAgICAgICAgICAgICghY2hlY2tIYW5kbGVyIHx8IHRoaXMuaGFuZGxlciA9PT0gY2hlY2tIYW5kbGVyKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFJlZ0VudHJ5XG4gICAgICB9KCkpXG5cbiAgICAsIHJlZ2lzdHJ5ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gb3VyIG1hcCBzdG9yZXMgYXJyYXlzIGJ5IGV2ZW50IHR5cGUsIGp1c3QgYmVjYXVzZSBpdCdzIGJldHRlciB0aGFuIHN0b3JpbmdcbiAgICAgICAgLy8gZXZlcnl0aGluZyBpbiBhIHNpbmdsZSBhcnJheS5cbiAgICAgICAgLy8gdXNlcyAnJCcgYXMgYSBwcmVmaXggZm9yIHRoZSBrZXlzIGZvciBzYWZldHkgYW5kICdyJyBhcyBhIHNwZWNpYWwgcHJlZml4IGZvclxuICAgICAgICAvLyByb290TGlzdGVuZXJzIHNvIHdlIGNhbiBsb29rIHRoZW0gdXAgZmFzdFxuICAgICAgICB2YXIgbWFwID0ge31cblxuICAgICAgICAgIC8vIGdlbmVyaWMgZnVuY3Rpb25hbCBzZWFyY2ggb2Ygb3VyIHJlZ2lzdHJ5IGZvciBtYXRjaGluZyBsaXN0ZW5lcnMsXG4gICAgICAgICAgLy8gYGZuYCByZXR1cm5zIGZhbHNlIHRvIGJyZWFrIG91dCBvZiB0aGUgbG9vcFxuICAgICAgICAgICwgZm9yQWxsID0gZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIG9yaWdpbmFsLCBoYW5kbGVyLCByb290LCBmbikge1xuICAgICAgICAgICAgICB2YXIgcGZ4ID0gcm9vdCA/ICdyJyA6ICckJ1xuICAgICAgICAgICAgICBpZiAoIXR5cGUgfHwgdHlwZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgICAvLyBzZWFyY2ggdGhlIHdob2xlIHJlZ2lzdHJ5XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdCBpbiBtYXApIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0LmNoYXJBdCgwKSA9PSBwZngpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yQWxsKGVsZW1lbnQsIHQuc3Vic3RyKDEpLCBvcmlnaW5hbCwgaGFuZGxlciwgcm9vdCwgZm4pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpID0gMCwgbCwgbGlzdCA9IG1hcFtwZnggKyB0eXBlXSwgYWxsID0gZWxlbWVudCA9PSAnKidcbiAgICAgICAgICAgICAgICBpZiAoIWxpc3QpIHJldHVyblxuICAgICAgICAgICAgICAgIGZvciAobCA9IGxpc3QubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoKGFsbCB8fCBsaXN0W2ldLm1hdGNoZXMoZWxlbWVudCwgb3JpZ2luYWwsIGhhbmRsZXIpKSAmJiAhZm4obGlzdFtpXSwgbGlzdCwgaSwgdHlwZSkpIHJldHVyblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgLCBoYXMgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgb3JpZ2luYWwsIHJvb3QpIHtcbiAgICAgICAgICAgICAgLy8gd2UncmUgbm90IHVzaW5nIGZvckFsbCBoZXJlIHNpbXBseSBiZWNhdXNlIGl0J3MgYSBiaXQgc2xvd2VyIGFuZCB0aGlzXG4gICAgICAgICAgICAgIC8vIG5lZWRzIHRvIGJlIGZhc3RcbiAgICAgICAgICAgICAgdmFyIGksIGxpc3QgPSBtYXBbKHJvb3QgPyAncicgOiAnJCcpICsgdHlwZV1cbiAgICAgICAgICAgICAgaWYgKGxpc3QpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFsaXN0W2ldLnJvb3QgJiYgbGlzdFtpXS5tYXRjaGVzKGVsZW1lbnQsIG9yaWdpbmFsLCBudWxsKSkgcmV0dXJuIHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGdldCA9IGZ1bmN0aW9uIChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgZW50cmllcyA9IFtdXG4gICAgICAgICAgICAgIGZvckFsbChlbGVtZW50LCB0eXBlLCBvcmlnaW5hbCwgbnVsbCwgcm9vdCwgZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXMucHVzaChlbnRyeSlcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuIGVudHJpZXNcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICwgcHV0ID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgICAgIHZhciBoYXMgPSAhZW50cnkucm9vdCAmJiAhdGhpcy5oYXMoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZmFsc2UpXG4gICAgICAgICAgICAgICAgLCBrZXkgPSAoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXG4gICAgICAgICAgICAgIDsobWFwW2tleV0gfHwgKG1hcFtrZXldID0gW10pKS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgICByZXR1cm4gaGFzXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAsIGRlbCA9IGZ1bmN0aW9uIChlbnRyeSkge1xuICAgICAgICAgICAgICBmb3JBbGwoZW50cnkuZWxlbWVudCwgZW50cnkudHlwZSwgbnVsbCwgZW50cnkuaGFuZGxlciwgZW50cnkucm9vdCwgZnVuY3Rpb24gKGVudHJ5LCBsaXN0LCBpKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UoaSwgMSlcbiAgICAgICAgICAgICAgICBlbnRyeS5yZW1vdmVkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGlmIChsaXN0Lmxlbmd0aCA9PT0gMCkgZGVsZXRlIG1hcFsoZW50cnkucm9vdCA/ICdyJyA6ICckJykgKyBlbnRyeS50eXBlXVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBkdW1wIGFsbCBlbnRyaWVzLCB1c2VkIGZvciBvbnVubG9hZFxuICAgICAgICAgICwgZW50cmllcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgdmFyIHQsIGVudHJpZXMgPSBbXVxuICAgICAgICAgICAgICBmb3IgKHQgaW4gbWFwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHQuY2hhckF0KDApID09ICckJykgZW50cmllcyA9IGVudHJpZXMuY29uY2F0KG1hcFt0XSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4gZW50cmllc1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7IGhhczogaGFzLCBnZXQ6IGdldCwgcHV0OiBwdXQsIGRlbDogZGVsLCBlbnRyaWVzOiBlbnRyaWVzIH1cbiAgICAgIH0oKSlcblxuICAgICAgLy8gd2UgbmVlZCBhIHNlbGVjdG9yIGVuZ2luZSBmb3IgZGVsZWdhdGVkIGV2ZW50cywgdXNlIHF1ZXJ5U2VsZWN0b3JBbGwgaWYgaXQgZXhpc3RzXG4gICAgICAvLyBidXQgZm9yIG9sZGVyIGJyb3dzZXJzIHdlIG5lZWQgUXdlcnksIFNpenpsZSBvciBzaW1pbGFyXG4gICAgLCBzZWxlY3RvckVuZ2luZVxuICAgICwgc2V0U2VsZWN0b3JFbmdpbmUgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGRvYy5xdWVyeVNlbGVjdG9yQWxsXG4gICAgICAgICAgICA/IGZ1bmN0aW9uIChzLCByKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHIucXVlcnlTZWxlY3RvckFsbChzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0JlYW46IE5vIHNlbGVjdG9yIGVuZ2luZSBpbnN0YWxsZWQnKSAvLyBlZWVrXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzZWxlY3RvckVuZ2luZSA9IGVcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyB3ZSBhdHRhY2ggdGhpcyBsaXN0ZW5lciB0byBlYWNoIERPTSBldmVudCB0aGF0IHdlIG5lZWQgdG8gbGlzdGVuIHRvLCBvbmx5IG9uY2VcbiAgICAgIC8vIHBlciBldmVudCB0eXBlIHBlciBET00gZWxlbWVudFxuICAgICwgcm9vdExpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50LCB0eXBlKSB7XG4gICAgICAgIGlmICghVzNDX01PREVMICYmIHR5cGUgJiYgZXZlbnQgJiYgZXZlbnQucHJvcGVydHlOYW1lICE9ICdfb24nICsgdHlwZSkgcmV0dXJuXG5cbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IHJlZ2lzdHJ5LmdldCh0aGlzLCB0eXBlIHx8IGV2ZW50LnR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgbCA9IGxpc3RlbmVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG5cbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnQsIHRoaXMsIHRydWUpXG4gICAgICAgIGlmICh0eXBlKSBldmVudC50eXBlID0gdHlwZVxuXG4gICAgICAgIC8vIGl0ZXJhdGUgdGhyb3VnaCBhbGwgaGFuZGxlcnMgcmVnaXN0ZXJlZCBmb3IgdGhpcyB0eXBlLCBjYWxsaW5nIHRoZW0gdW5sZXNzIHRoZXkgaGF2ZVxuICAgICAgICAvLyBiZWVuIHJlbW92ZWQgYnkgYSBwcmV2aW91cyBoYW5kbGVyIG9yIHN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpIGhhcyBiZWVuIGNhbGxlZFxuICAgICAgICBmb3IgKDsgaSA8IGwgJiYgIWV2ZW50LmlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkKCk7IGkrKykge1xuICAgICAgICAgIGlmICghbGlzdGVuZXJzW2ldLnJlbW92ZWQpIGxpc3RlbmVyc1tpXS5oYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gYWRkIGFuZCByZW1vdmUgbGlzdGVuZXJzIHRvIERPTSBlbGVtZW50c1xuICAgICwgbGlzdGVuZXIgPSBXM0NfTU9ERUxcbiAgICAgICAgPyBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYWRkKSB7XG4gICAgICAgICAgICAvLyBuZXcgYnJvd3NlcnNcbiAgICAgICAgICAgIGVsZW1lbnRbYWRkID8gYWRkRXZlbnQgOiByZW1vdmVFdmVudF0odHlwZSwgcm9vdExpc3RlbmVyLCBmYWxzZSlcbiAgICAgICAgICB9XG4gICAgICAgIDogZnVuY3Rpb24gKGVsZW1lbnQsIHR5cGUsIGFkZCwgY3VzdG9tKSB7XG4gICAgICAgICAgICAvLyBJRTggYW5kIGJlbG93LCB1c2UgYXR0YWNoRXZlbnQvZGV0YWNoRXZlbnQgYW5kIHdlIGhhdmUgdG8gcGlnZ3ktYmFjayBwcm9wZXJ0eWNoYW5nZSBldmVudHNcbiAgICAgICAgICAgIC8vIHRvIHNpbXVsYXRlIGV2ZW50IGJ1YmJsaW5nIGV0Yy5cbiAgICAgICAgICAgIHZhciBlbnRyeVxuICAgICAgICAgICAgaWYgKGFkZCkge1xuICAgICAgICAgICAgICByZWdpc3RyeS5wdXQoZW50cnkgPSBuZXcgUmVnRW50cnkoXG4gICAgICAgICAgICAgICAgICBlbGVtZW50XG4gICAgICAgICAgICAgICAgLCBjdXN0b20gfHwgdHlwZVxuICAgICAgICAgICAgICAgICwgZnVuY3Rpb24gKGV2ZW50KSB7IC8vIGhhbmRsZXJcbiAgICAgICAgICAgICAgICAgICAgcm9vdExpc3RlbmVyLmNhbGwoZWxlbWVudCwgZXZlbnQsIGN1c3RvbSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAsIHJvb3RMaXN0ZW5lclxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgbnVsbFxuICAgICAgICAgICAgICAgICwgdHJ1ZSAvLyBpcyByb290XG4gICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgIGlmIChjdXN0b20gJiYgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPT0gbnVsbCkgZWxlbWVudFsnX29uJyArIGN1c3RvbV0gPSAwXG4gICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5hdHRhY2hFdmVudCgnb24nICsgZW50cnkuZXZlbnRUeXBlLCBlbnRyeS5oYW5kbGVyKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZW50cnkgPSByZWdpc3RyeS5nZXQoZWxlbWVudCwgY3VzdG9tIHx8IHR5cGUsIHJvb3RMaXN0ZW5lciwgdHJ1ZSlbMF1cbiAgICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmRldGFjaEV2ZW50KCdvbicgKyBlbnRyeS5ldmVudFR5cGUsIGVudHJ5LmhhbmRsZXIpXG4gICAgICAgICAgICAgICAgcmVnaXN0cnkuZGVsKGVudHJ5KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgLCBvbmNlID0gZnVuY3Rpb24gKHJtLCBlbGVtZW50LCB0eXBlLCBmbiwgb3JpZ2luYWxGbikge1xuICAgICAgICAvLyB3cmFwIHRoZSBoYW5kbGVyIGluIGEgaGFuZGxlciB0aGF0IGRvZXMgYSByZW1vdmUgYXMgd2VsbFxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgICAgICBybShlbGVtZW50LCB0eXBlLCBvcmlnaW5hbEZuKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAsIHJlbW92ZUxpc3RlbmVyID0gZnVuY3Rpb24gKGVsZW1lbnQsIG9yZ1R5cGUsIGhhbmRsZXIsIG5hbWVzcGFjZXMpIHtcbiAgICAgICAgdmFyIHR5cGUgICAgID0gb3JnVHlwZSAmJiBvcmdUeXBlLnJlcGxhY2UobmFtZVJlZ2V4LCAnJylcbiAgICAgICAgICAsIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICwgcmVtb3ZlZCAgPSB7fVxuICAgICAgICAgICwgaSwgbFxuXG4gICAgICAgIGZvciAoaSA9IDAsIGwgPSBoYW5kbGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoKCFoYW5kbGVyIHx8IGhhbmRsZXJzW2ldLm9yaWdpbmFsID09PSBoYW5kbGVyKSAmJiBoYW5kbGVyc1tpXS5pbk5hbWVzcGFjZXMobmFtZXNwYWNlcykpIHtcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgaXMgcHJvYmxlbWF0aWMsIHdlIGhhdmUgYSByZWdpc3RyeS5nZXQoKSBhbmQgcmVnaXN0cnkuZGVsKCkgdGhhdFxuICAgICAgICAgICAgLy8gYm90aCBkbyByZWdpc3RyeSBzZWFyY2hlcyBzbyB3ZSB3YXN0ZSBjeWNsZXMgZG9pbmcgdGhpcy4gTmVlZHMgdG8gYmUgcm9sbGVkIGludG9cbiAgICAgICAgICAgIC8vIGEgc2luZ2xlIHJlZ2lzdHJ5LmZvckFsbChmbikgdGhhdCByZW1vdmVzIHdoaWxlIGZpbmRpbmcsIGJ1dCB0aGUgY2F0Y2ggaXMgdGhhdFxuICAgICAgICAgICAgLy8gd2UnbGwgYmUgc3BsaWNpbmcgdGhlIGFycmF5cyB0aGF0IHdlJ3JlIGl0ZXJhdGluZyBvdmVyLiBOZWVkcyBleHRyYSB0ZXN0cyB0b1xuICAgICAgICAgICAgLy8gbWFrZSBzdXJlIHdlIGRvbid0IHNjcmV3IGl0IHVwLiBAcnZhZ2dcbiAgICAgICAgICAgIHJlZ2lzdHJ5LmRlbChoYW5kbGVyc1tpXSlcbiAgICAgICAgICAgIGlmICghcmVtb3ZlZFtoYW5kbGVyc1tpXS5ldmVudFR5cGVdICYmIGhhbmRsZXJzW2ldW2V2ZW50U3VwcG9ydF0pXG4gICAgICAgICAgICAgIHJlbW92ZWRbaGFuZGxlcnNbaV0uZXZlbnRUeXBlXSA9IHsgdDogaGFuZGxlcnNbaV0uZXZlbnRUeXBlLCBjOiBoYW5kbGVyc1tpXS50eXBlIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2hlY2sgZWFjaCB0eXBlL2VsZW1lbnQgZm9yIHJlbW92ZWQgbGlzdGVuZXJzIGFuZCByZW1vdmUgdGhlIHJvb3RMaXN0ZW5lciB3aGVyZSBpdCdzIG5vIGxvbmdlciBuZWVkZWRcbiAgICAgICAgZm9yIChpIGluIHJlbW92ZWQpIHtcbiAgICAgICAgICBpZiAoIXJlZ2lzdHJ5LmhhcyhlbGVtZW50LCByZW1vdmVkW2ldLnQsIG51bGwsIGZhbHNlKSkge1xuICAgICAgICAgICAgLy8gbGFzdCBsaXN0ZW5lciBvZiB0aGlzIHR5cGUsIHJlbW92ZSB0aGUgcm9vdExpc3RlbmVyXG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50LCByZW1vdmVkW2ldLnQsIGZhbHNlLCByZW1vdmVkW2ldLmMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIHNldCB1cCBhIGRlbGVnYXRlIGhlbHBlciB1c2luZyB0aGUgZ2l2ZW4gc2VsZWN0b3IsIHdyYXAgdGhlIGhhbmRsZXIgZnVuY3Rpb25cbiAgICAsIGRlbGVnYXRlID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBmbikge1xuICAgICAgICAvL1RPRE86IGZpbmRUYXJnZXQgKHRoZXJlZm9yZSAkKSBpcyBjYWxsZWQgdHdpY2UsIG9uY2UgZm9yIG1hdGNoIGFuZCBvbmNlIGZvclxuICAgICAgICAvLyBzZXR0aW5nIGUuY3VycmVudFRhcmdldCwgZml4IHRoaXMgc28gaXQncyBvbmx5IG5lZWRlZCBvbmNlXG4gICAgICAgIHZhciBmaW5kVGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcm9vdCkge1xuICAgICAgICAgICAgICB2YXIgaSwgYXJyYXkgPSBpc1N0cmluZyhzZWxlY3RvcikgPyBzZWxlY3RvckVuZ2luZShzZWxlY3Rvciwgcm9vdCkgOiBzZWxlY3RvclxuICAgICAgICAgICAgICBmb3IgKDsgdGFyZ2V0ICYmIHRhcmdldCAhPT0gcm9vdDsgdGFyZ2V0ID0gdGFyZ2V0LnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSBhcnJheS5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAgICAgICAgIGlmIChhcnJheVtpXSA9PT0gdGFyZ2V0KSByZXR1cm4gdGFyZ2V0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgLCBoYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoID0gZmluZFRhcmdldChlLnRhcmdldCwgdGhpcylcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSBmbi5hcHBseShtYXRjaCwgYXJndW1lbnRzKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIC8vIF9fYmVhbkRlbCBpc24ndCBwbGVhc2FudCBidXQgaXQncyBhIHByaXZhdGUgZnVuY3Rpb24sIG5vdCBleHBvc2VkIG91dHNpZGUgb2YgQmVhblxuICAgICAgICBoYW5kbGVyLl9fYmVhbkRlbCA9IHtcbiAgICAgICAgICAgIGZ0ICAgICAgIDogZmluZFRhcmdldCAvLyBhdHRhY2ggaXQgaGVyZSBmb3IgY3VzdG9tRXZlbnRzIHRvIHVzZSB0b29cbiAgICAgICAgICAsIHNlbGVjdG9yIDogc2VsZWN0b3JcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFuZGxlclxuICAgICAgfVxuXG4gICAgLCBmaXJlTGlzdGVuZXIgPSBXM0NfTU9ERUwgPyBmdW5jdGlvbiAoaXNOYXRpdmUsIHR5cGUsIGVsZW1lbnQpIHtcbiAgICAgICAgLy8gbW9kZXJuIGJyb3dzZXJzLCBkbyBhIHByb3BlciBkaXNwYXRjaEV2ZW50KClcbiAgICAgICAgdmFyIGV2dCA9IGRvYy5jcmVhdGVFdmVudChpc05hdGl2ZSA/ICdIVE1MRXZlbnRzJyA6ICdVSUV2ZW50cycpXG4gICAgICAgIGV2dFtpc05hdGl2ZSA/ICdpbml0RXZlbnQnIDogJ2luaXRVSUV2ZW50J10odHlwZSwgdHJ1ZSwgdHJ1ZSwgd2luLCAxKVxuICAgICAgICBlbGVtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KVxuICAgICAgfSA6IGZ1bmN0aW9uIChpc05hdGl2ZSwgdHlwZSwgZWxlbWVudCkge1xuICAgICAgICAvLyBvbGQgYnJvd3NlciB1c2Ugb25wcm9wZXJ0eWNoYW5nZSwganVzdCBpbmNyZW1lbnQgYSBjdXN0b20gcHJvcGVydHkgdG8gdHJpZ2dlciB0aGUgZXZlbnRcbiAgICAgICAgZWxlbWVudCA9IHRhcmdldEVsZW1lbnQoZWxlbWVudCwgaXNOYXRpdmUpXG4gICAgICAgIGlzTmF0aXZlID8gZWxlbWVudC5maXJlRXZlbnQoJ29uJyArIHR5cGUsIGRvYy5jcmVhdGVFdmVudE9iamVjdCgpKSA6IGVsZW1lbnRbJ19vbicgKyB0eXBlXSsrXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIFB1YmxpYyBBUEk6IG9mZigpLCBvbigpLCBhZGQoKSwgKHJlbW92ZSgpKSwgb25lKCksIGZpcmUoKSwgY2xvbmUoKVxuICAgICAgICAqL1xuXG4gICAgICAvKipcbiAgICAgICAgKiBvZmYoZWxlbWVudFssIGV2ZW50VHlwZShzKVssIGhhbmRsZXIgXV0pXG4gICAgICAgICovXG4gICAgLCBvZmYgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZVNwZWMsIGZuKSB7XG4gICAgICAgIHZhciBpc1R5cGVTdHIgPSBpc1N0cmluZyh0eXBlU3BlYylcbiAgICAgICAgICAsIGssIHR5cGUsIG5hbWVzcGFjZXMsIGlcblxuICAgICAgICBpZiAoaXNUeXBlU3RyICYmIHR5cGVTcGVjLmluZGV4T2YoJyAnKSA+IDApIHtcbiAgICAgICAgICAvLyBvZmYoZWwsICd0MSB0MiB0MycsIGZuKSBvciBvZmYoZWwsICd0MSB0MiB0MycpXG4gICAgICAgICAgdHlwZVNwZWMgPSBzdHIyYXJyKHR5cGVTcGVjKVxuICAgICAgICAgIGZvciAoaSA9IHR5cGVTcGVjLmxlbmd0aDsgaS0tOylcbiAgICAgICAgICAgIG9mZihlbGVtZW50LCB0eXBlU3BlY1tpXSwgZm4pXG4gICAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICAgICAgfVxuXG4gICAgICAgIHR5cGUgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICBpZiAodHlwZSAmJiBjdXN0b21FdmVudHNbdHlwZV0pIHR5cGUgPSBjdXN0b21FdmVudHNbdHlwZV0uYmFzZVxuXG4gICAgICAgIGlmICghdHlwZVNwZWMgfHwgaXNUeXBlU3RyKSB7XG4gICAgICAgICAgLy8gb2ZmKGVsKSBvciBvZmYoZWwsIHQxLm5zKSBvciBvZmYoZWwsIC5ucykgb3Igb2ZmKGVsLCAubnMxLm5zMi5uczMpXG4gICAgICAgICAgaWYgKG5hbWVzcGFjZXMgPSBpc1R5cGVTdHIgJiYgdHlwZVNwZWMucmVwbGFjZShuYW1lc3BhY2VSZWdleCwgJycpKSBuYW1lc3BhY2VzID0gc3RyMmFycihuYW1lc3BhY2VzLCAnLicpXG4gICAgICAgICAgcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgdHlwZSwgZm4sIG5hbWVzcGFjZXMpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNGdW5jdGlvbih0eXBlU3BlYykpIHtcbiAgICAgICAgICAvLyBvZmYoZWwsIGZuKVxuICAgICAgICAgIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIG51bGwsIHR5cGVTcGVjKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIG9mZihlbCwgeyB0MTogZm4xLCB0MiwgZm4yIH0pXG4gICAgICAgICAgZm9yIChrIGluIHR5cGVTcGVjKSB7XG4gICAgICAgICAgICBpZiAodHlwZVNwZWMuaGFzT3duUHJvcGVydHkoaykpIG9mZihlbGVtZW50LCBrLCB0eXBlU3BlY1trXSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBvbihlbGVtZW50LCBldmVudFR5cGUocylbLCBzZWxlY3Rvcl0sIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICovXG4gICAgLCBvbiA9IGZ1bmN0aW9uKGVsZW1lbnQsIGV2ZW50cywgc2VsZWN0b3IsIGZuKSB7XG4gICAgICAgIHZhciBvcmlnaW5hbEZuLCB0eXBlLCB0eXBlcywgaSwgYXJncywgZW50cnksIGZpcnN0XG5cbiAgICAgICAgLy9UT0RPOiB0aGUgdW5kZWZpbmVkIGNoZWNrIG1lYW5zIHlvdSBjYW4ndCBwYXNzIGFuICdhcmdzJyBhcmd1bWVudCwgZml4IHRoaXMgcGVyaGFwcz9cbiAgICAgICAgaWYgKHNlbGVjdG9yID09PSB1bmRlZmluZWQgJiYgdHlwZW9mIGV2ZW50cyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIC8vVE9ETzogdGhpcyBjYW4ndCBoYW5kbGUgZGVsZWdhdGVkIGV2ZW50c1xuICAgICAgICAgIGZvciAodHlwZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIGlmIChldmVudHMuaGFzT3duUHJvcGVydHkodHlwZSkpIHtcbiAgICAgICAgICAgICAgb24uY2FsbCh0aGlzLCBlbGVtZW50LCB0eXBlLCBldmVudHNbdHlwZV0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFpc0Z1bmN0aW9uKHNlbGVjdG9yKSkge1xuICAgICAgICAgIC8vIGRlbGVnYXRlZCBldmVudFxuICAgICAgICAgIG9yaWdpbmFsRm4gPSBmblxuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgNClcbiAgICAgICAgICBmbiAgICAgICAgID0gZGVsZWdhdGUoc2VsZWN0b3IsIG9yaWdpbmFsRm4sIHNlbGVjdG9yRW5naW5lKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFyZ3MgICAgICAgPSBzbGljZS5jYWxsKGFyZ3VtZW50cywgMylcbiAgICAgICAgICBmbiAgICAgICAgID0gb3JpZ2luYWxGbiA9IHNlbGVjdG9yXG4gICAgICAgIH1cblxuICAgICAgICB0eXBlcyA9IHN0cjJhcnIoZXZlbnRzKVxuXG4gICAgICAgIC8vIHNwZWNpYWwgY2FzZSBmb3Igb25lKCksIHdyYXAgaW4gYSBzZWxmLXJlbW92aW5nIGhhbmRsZXJcbiAgICAgICAgaWYgKHRoaXMgPT09IE9ORSkge1xuICAgICAgICAgIGZuID0gb25jZShvZmYsIGVsZW1lbnQsIGV2ZW50cywgZm4sIG9yaWdpbmFsRm4pXG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICAvLyBhZGQgbmV3IGhhbmRsZXIgdG8gdGhlIHJlZ2lzdHJ5IGFuZCBjaGVjayBpZiBpdCdzIHRoZSBmaXJzdCBmb3IgdGhpcyBlbGVtZW50L3R5cGVcbiAgICAgICAgICBmaXJzdCA9IHJlZ2lzdHJ5LnB1dChlbnRyeSA9IG5ldyBSZWdFbnRyeShcbiAgICAgICAgICAgICAgZWxlbWVudFxuICAgICAgICAgICAgLCB0eXBlc1tpXS5yZXBsYWNlKG5hbWVSZWdleCwgJycpIC8vIGV2ZW50IHR5cGVcbiAgICAgICAgICAgICwgZm5cbiAgICAgICAgICAgICwgb3JpZ2luYWxGblxuICAgICAgICAgICAgLCBzdHIyYXJyKHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSwgJy4nKSAvLyBuYW1lc3BhY2VzXG4gICAgICAgICAgICAsIGFyZ3NcbiAgICAgICAgICAgICwgZmFsc2UgLy8gbm90IHJvb3RcbiAgICAgICAgICApKVxuICAgICAgICAgIGlmIChlbnRyeVtldmVudFN1cHBvcnRdICYmIGZpcnN0KSB7XG4gICAgICAgICAgICAvLyBmaXJzdCBldmVudCBvZiB0aGlzIHR5cGUgb24gdGhpcyBlbGVtZW50LCBhZGQgcm9vdCBsaXN0ZW5lclxuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCwgZW50cnkuZXZlbnRUeXBlLCB0cnVlLCBlbnRyeS5jdXN0b21UeXBlKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGFkZChlbGVtZW50Wywgc2VsZWN0b3JdLCBldmVudFR5cGUocyksIGhhbmRsZXJbLCBhcmdzIF0pXG4gICAgICAgICpcbiAgICAgICAgKiBEZXByZWNhdGVkOiBrZXB0IChmb3Igbm93KSBmb3IgYmFja3dhcmQtY29tcGF0aWJpbGl0eVxuICAgICAgICAqL1xuICAgICwgYWRkID0gZnVuY3Rpb24gKGVsZW1lbnQsIGV2ZW50cywgZm4sIGRlbGZuKSB7XG4gICAgICAgIHJldHVybiBvbi5hcHBseShcbiAgICAgICAgICAgIG51bGxcbiAgICAgICAgICAsICFpc1N0cmluZyhmbilcbiAgICAgICAgICAgICAgPyBzbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICAgICAgOiBbIGVsZW1lbnQsIGZuLCBldmVudHMsIGRlbGZuIF0uY29uY2F0KGFyZ3VtZW50cy5sZW5ndGggPiAzID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDUpIDogW10pXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgICogb25lKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIHNlbGVjdG9yXSwgaGFuZGxlclssIGFyZ3MgXSlcbiAgICAgICAgKi9cbiAgICAsIG9uZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG9uLmFwcGx5KE9ORSwgYXJndW1lbnRzKVxuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAgKiBmaXJlKGVsZW1lbnQsIGV2ZW50VHlwZShzKVssIGFyZ3MgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRoZSBvcHRpb25hbCAnYXJncycgYXJndW1lbnQgbXVzdCBiZSBhbiBhcnJheSwgaWYgbm8gJ2FyZ3MnIGFyZ3VtZW50IGlzIHByb3ZpZGVkXG4gICAgICAgICogdGhlbiB3ZSBjYW4gdXNlIHRoZSBicm93c2VyJ3MgRE9NIGV2ZW50IHN5c3RlbSwgb3RoZXJ3aXNlIHdlIHRyaWdnZXIgaGFuZGxlcnMgbWFudWFsbHlcbiAgICAgICAgKi9cbiAgICAsIGZpcmUgPSBmdW5jdGlvbiAoZWxlbWVudCwgdHlwZSwgYXJncykge1xuICAgICAgICB2YXIgdHlwZXMgPSBzdHIyYXJyKHR5cGUpXG4gICAgICAgICAgLCBpLCBqLCBsLCBuYW1lcywgaGFuZGxlcnNcblxuICAgICAgICBmb3IgKGkgPSB0eXBlcy5sZW5ndGg7IGktLTspIHtcbiAgICAgICAgICB0eXBlID0gdHlwZXNbaV0ucmVwbGFjZShuYW1lUmVnZXgsICcnKVxuICAgICAgICAgIGlmIChuYW1lcyA9IHR5cGVzW2ldLnJlcGxhY2UobmFtZXNwYWNlUmVnZXgsICcnKSkgbmFtZXMgPSBzdHIyYXJyKG5hbWVzLCAnLicpXG4gICAgICAgICAgaWYgKCFuYW1lcyAmJiAhYXJncyAmJiBlbGVtZW50W2V2ZW50U3VwcG9ydF0pIHtcbiAgICAgICAgICAgIGZpcmVMaXN0ZW5lcihuYXRpdmVFdmVudHNbdHlwZV0sIHR5cGUsIGVsZW1lbnQpXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIG5vbi1uYXRpdmUgZXZlbnQsIGVpdGhlciBiZWNhdXNlIG9mIGEgbmFtZXNwYWNlLCBhcmd1bWVudHMgb3IgYSBub24gRE9NIGVsZW1lbnRcbiAgICAgICAgICAgIC8vIGl0ZXJhdGUgb3ZlciBhbGwgbGlzdGVuZXJzIGFuZCBtYW51YWxseSAnZmlyZSdcbiAgICAgICAgICAgIGhhbmRsZXJzID0gcmVnaXN0cnkuZ2V0KGVsZW1lbnQsIHR5cGUsIG51bGwsIGZhbHNlKVxuICAgICAgICAgICAgYXJncyA9IFtmYWxzZV0uY29uY2F0KGFyZ3MpXG4gICAgICAgICAgICBmb3IgKGogPSAwLCBsID0gaGFuZGxlcnMubGVuZ3RoOyBqIDwgbDsgaisrKSB7XG4gICAgICAgICAgICAgIGlmIChoYW5kbGVyc1tqXS5pbk5hbWVzcGFjZXMobmFtZXMpKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlcnNbal0uaGFuZGxlci5hcHBseShlbGVtZW50LCBhcmdzKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICAqIGNsb25lKGRzdEVsZW1lbnQsIHNyY0VsZW1lbnRbLCBldmVudFR5cGUgXSlcbiAgICAgICAgKlxuICAgICAgICAqIFRPRE86IHBlcmhhcHMgZm9yIGNvbnNpc3RlbmN5IHdlIHNob3VsZCBhbGxvdyB0aGUgc2FtZSBmbGV4aWJpbGl0eSBpbiB0eXBlIHNwZWNpZmllcnM/XG4gICAgICAgICovXG4gICAgLCBjbG9uZSA9IGZ1bmN0aW9uIChlbGVtZW50LCBmcm9tLCB0eXBlKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IHJlZ2lzdHJ5LmdldChmcm9tLCB0eXBlLCBudWxsLCBmYWxzZSlcbiAgICAgICAgICAsIGwgPSBoYW5kbGVycy5sZW5ndGhcbiAgICAgICAgICAsIGkgPSAwXG4gICAgICAgICAgLCBhcmdzLCBiZWFuRGVsXG5cbiAgICAgICAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICBpZiAoaGFuZGxlcnNbaV0ub3JpZ2luYWwpIHtcbiAgICAgICAgICAgIGFyZ3MgPSBbIGVsZW1lbnQsIGhhbmRsZXJzW2ldLnR5cGUgXVxuICAgICAgICAgICAgaWYgKGJlYW5EZWwgPSBoYW5kbGVyc1tpXS5oYW5kbGVyLl9fYmVhbkRlbCkgYXJncy5wdXNoKGJlYW5EZWwuc2VsZWN0b3IpXG4gICAgICAgICAgICBhcmdzLnB1c2goaGFuZGxlcnNbaV0ub3JpZ2luYWwpXG4gICAgICAgICAgICBvbi5hcHBseShudWxsLCBhcmdzKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgICAgfVxuXG4gICAgLCBiZWFuID0ge1xuICAgICAgICAgICdvbicgICAgICAgICAgICAgICAgOiBvblxuICAgICAgICAsICdhZGQnICAgICAgICAgICAgICAgOiBhZGRcbiAgICAgICAgLCAnb25lJyAgICAgICAgICAgICAgIDogb25lXG4gICAgICAgICwgJ29mZicgICAgICAgICAgICAgICA6IG9mZlxuICAgICAgICAsICdyZW1vdmUnICAgICAgICAgICAgOiBvZmZcbiAgICAgICAgLCAnY2xvbmUnICAgICAgICAgICAgIDogY2xvbmVcbiAgICAgICAgLCAnZmlyZScgICAgICAgICAgICAgIDogZmlyZVxuICAgICAgICAsICdFdmVudCcgICAgICAgICAgICAgOiBFdmVudFxuICAgICAgICAsICdzZXRTZWxlY3RvckVuZ2luZScgOiBzZXRTZWxlY3RvckVuZ2luZVxuICAgICAgICAsICdub0NvbmZsaWN0JyAgICAgICAgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb250ZXh0W25hbWVdID0gb2xkXG4gICAgICAgICAgICByZXR1cm4gdGhpc1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAvLyBmb3IgSUUsIGNsZWFuIHVwIG9uIHVubG9hZCB0byBhdm9pZCBsZWFrc1xuICBpZiAod2luLmF0dGFjaEV2ZW50KSB7XG4gICAgdmFyIGNsZWFudXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaSwgZW50cmllcyA9IHJlZ2lzdHJ5LmVudHJpZXMoKVxuICAgICAgZm9yIChpIGluIGVudHJpZXMpIHtcbiAgICAgICAgaWYgKGVudHJpZXNbaV0udHlwZSAmJiBlbnRyaWVzW2ldLnR5cGUgIT09ICd1bmxvYWQnKSBvZmYoZW50cmllc1tpXS5lbGVtZW50LCBlbnRyaWVzW2ldLnR5cGUpXG4gICAgICB9XG4gICAgICB3aW4uZGV0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgICAgIHdpbi5Db2xsZWN0R2FyYmFnZSAmJiB3aW4uQ29sbGVjdEdhcmJhZ2UoKVxuICAgIH1cbiAgICB3aW4uYXR0YWNoRXZlbnQoJ29udW5sb2FkJywgY2xlYW51cClcbiAgfVxuXG4gIC8vIGluaXRpYWxpemUgc2VsZWN0b3IgZW5naW5lIHRvIGludGVybmFsIGRlZmF1bHQgKHFTQSBvciB0aHJvdyBFcnJvcilcbiAgc2V0U2VsZWN0b3JFbmdpbmUoKVxuXG4gIHJldHVybiBiZWFuXG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JlYW4vYmVhbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgRXZlbnRzIGZyb20gXCJiZWFuXCI7XG5pbXBvcnQgKiBhcyBLZXlVdGlscyBmcm9tIFwiLi9LZXlVdGlsc1wiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4vLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgREVGQVVMVFMgPSB7XG5cdHN0b3BQcm9wYWdhdGlvbjogZmFsc2Vcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV2ZW50RGlzcGF0Y2hlciB7XG5cdC8qKlxuXHQgKiBDb25zdHJ1Y3RvclxuXHQgKiBAcGFyYW0gcm9vdCB0aGUgcm9vdCBlbGVtZW50IHRoYXQgdGhlIG1hbmFnZXIgd2lsbCBsaXN0ZW4gdG8uXG5cdCAqIEBwYXJhbSB6b29tU2NhbGVcblx0ICogQHBhcmFtIGNvbmZpZyB0aGUgY29uZmlndXJhdG9uIGZvciB0aGUgZXZlbnQgZGlzcGF0Y2hlci5cblx0ICovXG5cdGNvbnN0cnVjdG9yKHJvb3QsIHpvb21TY2FsZSA9IFswLCBJbmZpbml0eV0sIGNvbmZpZyA9IHt9KSB7XG5cdFx0dGhpcy5yb290ID0gcm9vdDtcblx0XHR0aGlzLnJvb3ROUyA9IHJvb3QuZ2V0QXR0cmlidXRlKCducycpIHx8ICdyb290Jztcblx0XHR0aGlzLnpvb21TY2FsZSA9IHpvb21TY2FsZTtcblx0XHRfLmFzc2lnbih0aGlzLCBERUZBVUxUUywgY29uZmlnKTtcblx0XHR0aGlzLnNjYWxlID0gMS4wO1xuXHRcdHRoaXMubGlzdGVuZXJzID0ge307XG5cdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdHRoaXMuaGFuZGxlciA9IF8uYmluZCh0aGlzLmhhbmRsZUV2ZW50LCB0aGlzKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSBmYWxzZTtcblxuXHRcdC8vIFNpbXVsYXRlIG1vdXNlZW50ZXIvbW91c2VsZWF2ZSBldmVudHNcblx0XHR0aGlzLmVudGVyU3RhY2sgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cy5cblx0ICovXG5cdHN0YXJ0KCkge1xuXHRcdGlmICh0aGlzLnN0YXJ0ZWQpIHJldHVybjtcblx0XHRFdmVudHMub24odGhpcy5yb290LCAnbW91c2Vkb3duIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgZGJsY2xpY2sgY2xpY2sgY29udGV4dG1lbnUgbW91c2V3aGVlbCcsIHRoaXMuaGFuZGxlcik7XG5cdFx0dGhpcy5zdGFydEtleXMoKTtcblx0XHR0aGlzLnN0YXJ0ZWQgPSB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIFN0b3AgbGlzdGVuaW5nIGZvciBldmVudHMuXG5cdCAqL1xuXHRzdG9wKCkge1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0RXZlbnRzLm9mZih0aGlzLnJvb3QsICdtb3VzZWRvd24gbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBkYmxjbGljayBjbGljayBjb250ZXh0bWVudSBtb3VzZXdoZWVsJywgdGhpcy5oYW5kbGVyKTtcblx0XHR0aGlzLnN0b3BLZXlzKCk7XG5cdFx0dGhpcy5zdGFydGVkID0gZmFsc2U7XG5cdH1cblxuXHRzdGFydEtleXMoKSB7XG5cdFx0RXZlbnRzLm9uKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHRzdG9wS2V5cygpIHtcblx0XHRFdmVudHMub2ZmKGRvY3VtZW50LCAna2V5ZG93biBrZXl1cCcsIHRoaXMuaGFuZGxlcik7XG5cdH1cblxuXHR6b29tSW4oKSB7XG5cdFx0dGhpcy5zY2FsZSAqPSAxLjI1O1xuXHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRyZXR1cm4gdGhpcy5zY2FsZTtcblx0fVxuXG5cdHpvb21PdXQoKSB7XG5cdFx0dGhpcy5zY2FsZSAqPSAwLjg7XG5cdFx0dGhpcy5zY2FsZSA9IE1hdGgubWF4KE1hdGgubWluKHRoaXMuem9vbVNjYWxlWzFdLCB0aGlzLnNjYWxlKSwgdGhpcy56b29tU2NhbGVbMF0pO1xuXHRcdHJldHVybiB0aGlzLnNjYWxlO1xuXHR9XG5cblx0Z2V0RXZlbnRJbmZvKGV2ZW50KSB7XG5cdFx0bGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpLCBucywgc3RhY2sgPSBbXSwgaXNSb290ID0gZmFsc2U7XG5cdFx0d2hpbGUgKCFpc1Jvb3QgJiYgdGFyZ2V0ICYmIHRhcmdldCAhPSBkb2N1bWVudCkge1xuXHRcdFx0bnMgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKCducycpO1xuXHRcdFx0aWYgKG5zKSB7XG5cdFx0XHRcdGlzUm9vdCA9IF8uc3RhcnRzV2l0aChucywgXCJyb290LlwiKTtcblx0XHRcdFx0aWYgKGlzUm9vdCkge1xuXHRcdFx0XHRcdG5zID0gbnMuc3Vic3RyaW5nKDUpO1xuXHRcdFx0XHRcdGV2ZW50LnJvb3RUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFldmVudC5uc1RhcmdldCkgZXZlbnQubnNUYXJnZXQgPSB0YXJnZXQ7XG5cdFx0XHRcdHN0YWNrLnNwbGljZSgwLCAwLCB0YXJnZXQpO1xuXHRcdFx0XHRidWYucHJlcGVuZChucyk7XG5cdFx0XHR9XG5cdFx0XHR0YXJnZXQgPSB0YXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cdFx0aWYgKCFpc1Jvb3QpXG5cdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZXZlbnQubnNUYXJnZXQ7XG5cblx0XHQvLyB0YXJnZXQgc3RhY2sgaXMgYSBzdGFjayBvZiBhbGwgdGhlIG5zIHRhcmdldHMgdXAgdG8gdGhlIG9uZSB3aXRoIHRoZSBkYXRhIGJpbmRpbmcuXG5cdFx0ZXZlbnQudGFyZ2V0U3RhY2sgPSBzdGFjaztcblx0XHRucyA9IGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdGlmIChucyA9PSAnJykgbnMgPSB0aGlzLnJvb3ROUztcblx0XHRyZXR1cm4ge2RhdGE6IGV2ZW50LnJvb3RUYXJnZXQsIG5zOiBuc307XG5cdH1cblxuXHQvKipcblx0ICogVGhlIG1haW4gZXZlbnQgaGFuZGxlciBtZXRob2QsIGl0IHByb2Nlc3NlcyBldmVudCBhbmQgZ2VuZXJhdGUgcmVsZXZhbnQgZXZlbnRzIHRvIGRpc3BhdGNoLlxuXHQgKi9cblx0aGFuZGxlRXZlbnQoZXZlbnQpIHtcblx0XHRsZXQgdHlwZSA9IGV2ZW50LnR5cGU7XG5cblx0XHQvLyBEbyBub3QgZGlzcGF0Y2ggb3RoZXIgZXZlbnRzIGlmIHdlIGFyZSBkcmFnZ2luZy5cblx0XHRpZiAodGhpcy5kcmFnZ2luZyB8fCBEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHJldHVybjtcblxuXHRcdGxldCBkYXRhLCBucywgcG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCksIGluZm8sIGlzS2V5RXZlbnQgPSAodHlwZSA9PSAna2V5ZG93bicgfHwgdHlwZSA9PSdrZXl1cCcpO1xuXHRcdGlmIChpc0tleUV2ZW50KSB7XG5cdFx0XHRkYXRhID0gdGhpcy5yb290O1xuXHRcdFx0bnMgPSBLZXlVdGlscy5nZXRLZXlFdmVudChldmVudCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRpZiAoIWluZm8pIHJldHVybjtcblx0XHRcdGRhdGEgPSBpbmZvLmRhdGE7XG5cdFx0XHRucyA9IGluZm8ubnM7XG5cdFx0fVxuXG5cdFx0Ly9VdGlscy5sb2coJ0V2ZW50RGlzcGF0Y2hlcicsIFwiaGFuZGxlRXZlbnQgLSBcIiArIHR5cGUgKyAnO25zPScgKyBucyk7XG5cblx0XHRpZiAodHlwZSA9PSAnbW91c2V3aGVlbCcpIHtcblx0XHRcdHRoaXMuc2NhbGUgKj0gTWF0aC5wb3coMiwgZXZlbnQud2hlZWxEZWx0YSAqIDAuMDAyKTtcblx0XHRcdHRoaXMuc2NhbGUgPSBNYXRoLm1heChNYXRoLm1pbih0aGlzLnpvb21TY2FsZVsxXSwgdGhpcy5zY2FsZSksIHRoaXMuem9vbVNjYWxlWzBdKTtcblx0XHRcdGV2ZW50LnNjYWxlID0gdGhpcy5zY2FsZTtcblx0XHRcdHR5cGUgPSAnem9vbSc7XG5cdFx0fVxuXG5cdFx0Ly8gU2VlIGlmIHdlIHNob3VsZCBjcmVhdGUgZHJhZyBldmVudHNcblx0XHRpZiAodHlwZSA9PSAnbW91c2Vkb3duJyAmJiBldmVudC5idXR0b24gPT0gMCAvKm9ubHkgZHJhZyBvbiBsZWZ0IGNsaWNrKi8pIHtcblx0XHRcdC8vIENyZWF0ZSBkcmFnIG9iamVjdC5cblx0XHRcdGNvbnN0IGRyYWdPYmplY3QgPSB7ZGF0YTogZGF0YSwgcG9zOiBucyA9PSAncm9vdCcgPyBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCkgOiBwb3N9O1xuXHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0Ly8gU3RhcnQgbGlzdGVuaW5nIGZvciBtb3VzZSBtb3ZlLlxuXHRcdFx0bGV0IGRyYWdQb3M7XG5cblx0XHRcdGNvbnN0IG1vdXNlbW92ZSA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRsZXQgY3VycmVudFBvcyA9IHRoaXMuZ2V0UG9zaXRpb24oZXZlbnQpO1xuXHRcdFx0XHRpZiAoIXRoaXMuZHJhZ2dpbmcpIHtcblx0XHRcdFx0XHQvLyBjaGVjayBpZiB0aGUgbW91c2UgaGFzIG1vdmVkLiBJRSBhbHdheXMgZmlyZSBtb3VzZW1vdmUgYWZ0ZXIgbW91c2Vkb3duIGV2ZW4gaWYgdGhlIG1vdXNlIGhhc24ndCBtb3ZlZCB5ZXQuXG5cdFx0XHRcdFx0aWYgKGRyYWdPYmplY3QucG9zWzBdID09IGN1cnJlbnRQb3NbMF0gJiYgZHJhZ09iamVjdC5wb3NbMV0gPT0gY3VycmVudFBvc1sxXSkgcmV0dXJuO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgZHJhZ2dpbmdcblx0XHRcdFx0XHR0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcblx0XHRcdFx0XHRldmVudC5yb290VGFyZ2V0ID0gZHJhZ09iamVjdC5kYXRhO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnc3RhcnQnLCBucywgZHJhZ09iamVjdC5kYXRhLCBkcmFnT2JqZWN0LnBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gY3VycmVudFBvcztcblx0XHRcdFx0dGhpcy5nZXRFdmVudEluZm8oZXZlbnQpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnZHJhZycsIG5zLCBkcmFnT2JqZWN0LmRhdGEsIGRyYWdQb3MpO1xuXHRcdFx0fTtcblx0XHRcdGNvbnN0IG1vdXNldXAgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0aWYgKG5zID09IFwicm9vdFwiKVxuXHRcdFx0XHRcdGRyYWdQb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRkcmFnUG9zID0gdGhpcy5nZXRQb3NpdGlvbihldmVudCk7XG5cblx0XHRcdFx0bGV0IGluZm8gPSB0aGlzLmdldEV2ZW50SW5mbyhldmVudCk7XG5cdFx0XHRcdGlmICh0aGlzLmRyYWdnaW5nKSB7XG5cdFx0XHRcdFx0dGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuXHRcdFx0XHRcdHRoaXMuZGlzcGF0Y2goZXZlbnQsICdkcmFnZW5kJywgbnMsIGRyYWdPYmplY3QuZGF0YSwgZHJhZ1Bvcyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5kaXNwYXRjaChldmVudCwgJ21vdXNldXAnLCBucywgaW5mby5kYXRhLCBkcmFnUG9zKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdEV2ZW50cy5vZmYod2luZG93LCAnbW91c2Vtb3ZlJywgbW91c2Vtb3ZlKTtcblx0XHRcdFx0RXZlbnRzLm9mZih3aW5kb3csICdtb3VzZXVwJywgbW91c2V1cCk7XG5cdFx0XHR9O1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdEV2ZW50cy5vbih3aW5kb3csICdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xuXHRcdFx0RXZlbnRzLm9uKHdpbmRvdywgJ21vdXNldXAnLCBtb3VzZXVwKTtcblx0XHR9XG5cblx0XHRpZiAoIWlzS2V5RXZlbnQpXG5cdFx0XHR0aGlzLnNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cdFx0dGhpcy5kaXNwYXRjaChldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcyk7XG5cblx0XHQvLyBkaXNhYmxlIHRoZSBkZWZhdWx0IGNvbnRleHQgbWVudVxuXHRcdC8vaWYgKHR5cGUgPT0gJ2NvbnRleHRtZW51Jylcblx0XHQvL1x0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0fVxuXG5cdC8qKlxuXHQgKiB0cnkgdG8gc2ltdWxhdGUgbW91c2VlbnRlci9tb3VzZWxlYXZlIGV2ZW50cy5cblx0ICovXG5cdHNpbXVsYXRlRW50ZXJMZWF2ZShldmVudCwgdHlwZSwgbnMsIGRhdGEsIHBvcykge1xuXHRcdGxldCBsYXN0LCBzdGFjaztcblx0XHRjb25zdCBjbGVhckVudGVyU3RhY2sgPSAoaykgPT4ge1xuXHRcdFx0ayA9IGsgfHwgMDtcblx0XHRcdC8vIENsZWFyIG9mZiB0aGUgZW50ZXIgc3RhY2suXG5cdFx0XHR3aGlsZSAodGhpcy5lbnRlclN0YWNrLmxlbmd0aCA+PSBrICsgMSkge1xuXHRcdFx0XHRsYXN0ID0gdGhpcy5lbnRlclN0YWNrLnBvcCgpO1xuXHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VsZWF2ZScsIGxhc3QubnMsIGxhc3QuZGF0YSwgcG9zKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdGNvbnN0IGdldE5TID0gZnVuY3Rpb24oaW5kZXgpIHtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8PSBpbmRleDsgaSsrKSB7XG5cdFx0XHRcdHZhciB2YWwgPSBzdGFja1tpXS5nZXRBdHRyaWJ1dGUoXCJuc1wiKTtcblx0XHRcdFx0aWYgKF8uc3RhcnRzV2l0aCh2YWwsIFwicm9vdC5cIikpXG5cdFx0XHRcdFx0dmFsID0gdmFsLnN1YnN0cmluZyg1KTtcblx0XHRcdFx0YnVmLmFwcGVuZCh2YWwpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygnLicpO1xuXHRcdH07XG5cblx0XHRpZiAobnMgJiYgbnMgIT0gdGhpcy5yb290TlMpIHtcblx0XHRcdGlmICh0eXBlID09ICdtb3VzZW92ZXInKSB7XG5cdFx0XHRcdHN0YWNrID0gZXZlbnQudGFyZ2V0U3RhY2s7XG5cdFx0XHRcdGxldCBpdGVtO1xuXHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0aWYgKGkgPCB0aGlzLmVudGVyU3RhY2subGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHRpZiAodGhpcy5lbnRlclN0YWNrW2ldLnRhcmdldCAhPSBzdGFja1tpXSkge1xuXHRcdFx0XHRcdFx0XHRjbGVhckVudGVyU3RhY2soaSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGl0ZW0gPSB7ZGF0YTogZGF0YSwgbnM6IGdldE5TKGkpLCB0YXJnZXQ6IHN0YWNrW2ldfTtcblx0XHRcdFx0XHR0aGlzLmVudGVyU3RhY2sucHVzaChpdGVtKTtcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKGV2ZW50LCAnbW91c2VlbnRlcicsIGl0ZW0ubnMsIGRhdGEsIHBvcyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHN0YWNrLmxlbmd0aCA8IHRoaXMuZW50ZXJTdGFjay5sZW5ndGgpXG5cdFx0XHRcdFx0Y2xlYXJFbnRlclN0YWNrKHN0YWNrLmxlbmd0aCk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmIChucyA9PSB0aGlzLnJvb3ROUyAmJiB0aGlzLmVudGVyU3RhY2subGVuZ3RoID4gMClcblx0XHRcdGNsZWFyRW50ZXJTdGFjaygpO1xuXHR9XG5cblx0ZGlzcGF0Y2goZXZlbnQsIHR5cGUsIG5zLCBkYXRhLCBwb3MpIHtcblx0XHQvL2lmICh0eXBlICE9ICdtb3VzZW92ZXInICYmIHR5cGUgIT0gJ21vdXNlb3V0Jylcblx0XHQvL1x0VXRpbHMubG9nKCdFdmVudERpc3BhdGNoZXInLCBcImRpc3BhdGNoIC0gXCIgKyB0eXBlICsgJy4nICsgbnMgKyAnOycgKyBwb3MgKyAnO3Jvb3RUYXJnZXQ9JyArIGV2ZW50LnJvb3RUYXJnZXQgKyAnO2RhdGE9JyArIGRhdGEpO1xuXHRcdGlmICghdGhpcy5zdGFydGVkKSByZXR1cm47XG5cdFx0Y29uc3QgbnNUeXBlID0gbnMgPyB0eXBlICsgJy4nICsgbnMgOiB0eXBlO1xuXHRcdF8uZm9yRWFjaCh0aGlzLmxpc3RlbmVycywgKGxpc3RlbmVycywga2V5KSA9PiB7XG5cdFx0XHRpZiAoRXZlbnREaXNwYXRjaGVyLm1hdGNoKG5zVHlwZSwgbGlzdGVuZXJzLnJlZ2V4cCA/IGxpc3RlbmVycy5yZWdleHAgOiBrZXkpKSB7XG5cdFx0XHRcdF8uZm9yRWFjaChsaXN0ZW5lcnMsIChsaXN0ZW5lcikgPT4ge1xuXHRcdFx0XHRcdGlmICghbGlzdGVuZXIuY29udGV4dClcblx0XHRcdFx0XHRcdGxpc3RlbmVyLmNhbGxiYWNrLmFwcGx5KHdpbmRvdywgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0bGlzdGVuZXIuY2FsbGJhY2suYXBwbHkobGlzdGVuZXIuY29udGV4dCwgW3R5cGUsIG5zLCBkYXRhLCBwb3MsIGV2ZW50XSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gYWZ0ZXIgZGlzcGF0Y2hpbmcsIGRvIG5vdCBwcm9wYWdhdGUuXG5cdFx0aWYgKHRoaXMuc3RvcFByb3BhZ2F0aW9uICYmIGV2ZW50LnN0b3BQcm9wYWdhdGlvbilcblx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG5cblx0Z2V0UG9zaXRpb24oZXZlbnQpIHtcblx0XHRjb25zdCBwb3MgPSBFdmVudERpc3BhdGNoZXIubW91c2UodGhpcy5yb290LCBldmVudCk7XG5cdFx0aWYoISBfLmlzTmFOKHBvc1swXSkgJiYgISBfLmlzTmFOKHBvc1sxXSkpXG5cdFx0XHR0aGlzLmxhc3RQb3NpdGlvbiA9IHBvcztcblx0XHRyZXR1cm4gdGhpcy5sYXN0UG9zaXRpb247XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGEga2V5IGV2ZW50IGhhbmRsZXJcblx0ICogLy8gS2V5IGlzIG9iamVjdCB7Y3RybCwgYWx0LCBzaGlmdCwgbWV0YSwgY29kZX1cblx0ICovXG5cdHJlZ2lzdGVyS2V5KHR5cGUsIGtleSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcblx0XHRpZiAoXy5pc0FycmF5KGtleSkpIHtcblx0XHRcdF8uZm9yRWFjaChrZXksIChrKSA9PiB7XG5cdFx0XHRcdHRoaXMucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGNvbnN0IGxpc3RlbmVyID0ge2NhbGxiYWNrOiBjYWxsYmFjaywgY29udGV4dDogY29udGV4dH07XG5cdFx0dGhpcy5saXN0ZW5lcnNba2V5XSB8fCAodGhpcy5saXN0ZW5lcnNba2V5XSA9IFtdKTtcblx0XHR0aGlzLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuXHR9XG5cblx0dW5yZWdpc3RlcktleSh0eXBlLCBrZXksIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKF8uaXNBcnJheShrZXkpKSB7XG5cdFx0XHRfLmZvckVhY2goa2V5LCAoaykgPT4ge1xuXHRcdFx0XHR0aGlzLnVucmVnaXN0ZXJLZXkodHlwZSwgaywgY2FsbGJhY2ssIGNvbnRleHQpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGtleSA9IEtleVV0aWxzLmdldEtleURhdGEoa2V5LmN0cmwsIGtleS5hbHQsIGtleS5zaGlmdCwga2V5Lm1ldGEsIGtleS5jb2RlKTtcblx0XHRpZigha2V5Lmxlbmd0aCkgcmV0dXJuO1xuXHRcdGtleSA9IG5ldyBTdHJpbmdCdWZmZXIodHlwZSkuYXBwZW5kKGtleSkudG9TdHJpbmcoJy4nKTtcblxuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1trZXldLCBsaXN0ZW5lcjtcblx0XHRpZiAoIWxpc3RlbmVycykgcmV0dXJuO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRsaXN0ZW5lciA9IGxpc3RlbmVyc1tpXTtcblx0XHRcdGlmIChsaXN0ZW5lci5jYWxsYmFjayA9PT0gY2FsbGJhY2sgJiYgKCFjb250ZXh0IHx8IGNvbnRleHQgPT09IGxpc3RlbmVyLmNvbnRleHQpKSB7XG5cdFx0XHRcdGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogUmVnaXN0ZXJzIGFuIGV2ZW50IGhhbmRsZXJcblx0ICovXG5cdHJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0LCB6SW5kZXgpIHtcblx0XHRpZiAoXy5pc0FycmF5KHR5cGUpKSB7XG5cdFx0XHRfLmZvckVhY2godHlwZSwgKHQpID0+IHtcblx0XHRcdFx0dGhpcy5yZWdpc3Rlcih0LCBjYWxsYmFjaywgY29udGV4dCwgekluZGV4KTtcblx0XHRcdH0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRjb25zdCBsaXN0ZW5lciA9IHtjYWxsYmFjazogY2FsbGJhY2ssIGNvbnRleHQ6IGNvbnRleHQsIHpJbmRleDogekluZGV4fTtcblx0XHR2YXIgcmVnZXhwID0gbnVsbDtcblx0XHRpZiAodHlwZSBpbnN0YW5jZW9mIFJlZ0V4cCkge1xuXHRcdFx0cmVnZXhwID0gdHlwZTtcblx0XHRcdHR5cGUgPSB0eXBlICsgJyc7XG5cdFx0fVxuXHRcdHRoaXMubGlzdGVuZXJzW3R5cGVdIHx8ICh0aGlzLmxpc3RlbmVyc1t0eXBlXSA9IFtdKTtcblx0XHRpZiAocmVnZXhwICYmICF0aGlzLmxpc3RlbmVyc1t0eXBlXS5yZWdleHApXG5cdFx0XHR0aGlzLmxpc3RlbmVyc1t0eXBlXS5yZWdleHAgPSByZWdleHA7XG5cdFx0dGhpcy5saXN0ZW5lcnNbdHlwZV0ucHVzaChsaXN0ZW5lcik7XG5cdH1cblxuXHR1bnJlZ2lzdGVyKHR5cGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG5cdFx0aWYgKHR5cGUgaW5zdGFuY2VvZiBSZWdFeHApXG5cdFx0XHR0eXBlID0gdHlwZSArICcnO1xuXHRcdGxldCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVyc1t0eXBlXSwgbGlzdGVuZXI7XG5cdFx0aWYgKCFsaXN0ZW5lcnMpIHJldHVybjtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xuXHRcdFx0bGlzdGVuZXIgPSBsaXN0ZW5lcnNbaV07XG5cdFx0XHRpZiAobGlzdGVuZXIuY2FsbGJhY2sgPT09IGNhbGxiYWNrICYmICghY29udGV4dCB8fCBjb250ZXh0ID09PSBsaXN0ZW5lci5jb250ZXh0KSkge1xuXHRcdFx0XHRsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHR0aGlzLnN0b3AoKTtcblx0XHRkZWxldGUgdGhpcy5yb290O1xuXHRcdGRlbGV0ZSB0aGlzLmxpc3RlbmVycztcblx0XHRkZWxldGUgdGhpcy5lbnRlclN0YWNrO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrIGlmIHRoZSByZWdpc3RlcmVkIGV2ZW50IHR5cGUgbWF0Y2hlcyB0aGUgcmVhbCBldmVudCB0eXBlLiBcIipcIiBpcyBhbGxvd2VkIGFzIGEgd2lsZCBjYXJkLlxuXHQgKi9cblx0c3RhdGljIG1hdGNoKG5zVHlwZSwgcmVnaXN0ZXJlZFR5cGUpIHtcblx0XHRpZiAocmVnaXN0ZXJlZFR5cGUgaW5zdGFuY2VvZiBSZWdFeHApXG5cdFx0XHRyZXR1cm4gbnNUeXBlLm1hdGNoKHJlZ2lzdGVyZWRUeXBlKTtcblxuXHRcdHJldHVybiBuc1R5cGUgPT0gcmVnaXN0ZXJlZFR5cGU7XG5cdFx0Lypjb25zdCBhcnIgPSByZWdpc3RlcmVkVHlwZS5zcGxpdCgnKicpO1xuXHRcdGlmIChhcnIubGVuZ3RoID09IDEpXG5cdFx0XHRyZXR1cm4gbnNUeXBlID09IHJlZ2lzdGVyZWRUeXBlO1xuXG5cdFx0bGV0IHN1YnN0ciwgaW5kZXggPSAwO1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRpZiAoYXJyW2ldLmxlbmd0aCA9PSAwKSBjb250aW51ZTtcblx0XHRcdHN1YnN0ciA9IG5zVHlwZS5zbGljZShpbmRleCk7XG5cdFx0XHRpbmRleCA9IHN1YnN0ci5pbmRleE9mKGFycltpXSk7XG5cdFx0XHRpZiAoaW5kZXggPCAwKVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRpbmRleCArPSBhcnJbaV0ubGVuZ3RoO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTsqL1xuXHR9XG5cblx0c3RhdGljIG1vdXNlKGNvbnRhaW5lciwgZSkge1xuXHRcdGlmIChlLmNoYW5nZWRUb3VjaGVzKSBlID0gZS5jaGFuZ2VkVG91Y2hlc1swXTtcblx0XHR2YXIgc3ZnID0gY29udGFpbmVyLm93bmVyU1ZHRWxlbWVudCB8fCBjb250YWluZXI7XG5cdFx0aWYgKHN2Zy5jcmVhdGVTVkdQb2ludCkge1xuXHRcdFx0dmFyIHBvaW50ID0gc3ZnLmNyZWF0ZVNWR1BvaW50KCk7XG5cdFx0XHRwb2ludC54ID0gZS5jbGllbnRYOyBwb2ludC55ID0gZS5jbGllbnRZO1xuXHRcdFx0cG9pbnQgPSBwb2ludC5tYXRyaXhUcmFuc2Zvcm0oY29udGFpbmVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKSk7XG5cdFx0XHRyZXR1cm4gW3BvaW50LngsIHBvaW50LnldO1xuXHRcdH1cblx0XHR2YXIgcmVjdCA9IGNvbnRhaW5lci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHRyZXR1cm4gW2UuY2xpZW50WCAtIHJlY3QubGVmdCAtIGNvbnRhaW5lci5jbGllbnRMZWZ0LCBlLmNsaWVudFkgLSByZWN0LnRvcCAtIGNvbnRhaW5lci5jbGllbnRUb3BdO1xuXHR9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9FdmVudERpc3BhdGNoZXIuanNcbiAqKi8iLCIvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vXG4vLyAgICAgICAgICAgVGhlIEtleSBVdGlsaXR5IENMYXNzIGZvciB0aGUgRXZlbnQgRGlzcGF0Y2hlciAgICAgICAgICBcdCAgICAgLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi8uLi91dGlsL1N0cmluZ0J1ZmZlclwiO1xuXG4vKipcbiAqIEtFWSBjb25zdGFudFxuICovXG5jb25zdCBLRVkgPSB7XG5cdEFMVCAgICAgICAgICA6IDE4LFxuXHRCQUNLX1NQQUNFICAgOiA4LFxuXHRDQVBTX0xPQ0sgICAgOiAyMCxcblx0Q09OVFJPTCAgICAgIDogMTcsXG5cdERFTEVURSAgICAgICA6IDQ2LFxuXHRET1dOICAgICAgICAgOiA0MCxcblx0RU5EICAgICAgICAgIDogMzUsXG5cdEVOVEVSICAgICAgICA6IDEzLFxuXHRFU0NBUEUgICAgICAgOiAyMjAsXG5cdEhPTUUgICAgICAgICA6IDM2LFxuXHRMRUZUICAgICAgICAgOiAzNyxcblx0TUVUQSAgICAgICAgIDogMjI0LFxuXHROVU1fTE9DSyAgICAgOiAxNDQsXG5cdFBBR0VfRE9XTiAgICA6IDM0LFxuXHRQQUdFX1VQICAgICAgOiAzMyxcblx0UEFVU0UgICAgICAgIDogMTksXG5cdFBSSU5UU0NSRUVOICA6IDQ0LFxuXHRSSUdIVCAgICAgICAgOiAzOSxcblx0U0NST0xMX0xPQ0sgIDogMTQ1LFxuXHRTSElGVCAgICAgICAgOiAxNixcblx0U1BBQ0UgICAgICAgIDogMzIsXG5cdFRBQiAgICAgICAgICA6IDksXG5cdFVQICAgICAgICAgICA6IDM4XG5cdC8vQUREICAgICAgICAgIDogRG9tVXRpbHMuaXNGaXJlRm94ID8gNjEgIDogMTg3LFxuXHQvL1NVQlRSQUNUICAgICA6IERvbVV0aWxzLmlzRmlyZUZveCA/IDE3MyA6IDE4OVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleUV2ZW50KGV2ZW50KSB7XG5cdGlmICghZXZlbnQgfHwgIWV2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0dmFyIGtleSA9IGV2ZW50LmtleUNvZGUgfHwgZXZlbnQud2hpY2g7XG5cblx0Ly8gTmVlZCB0byBmaW5kIGEgd2F5IHRvIGF2b2lkIHRoaXNcblx0aWYgKGtleSA+PSAxNiAmJiBrZXkgPD0gMTgpIHtcblx0XHRrZXkgPSBudWxsO1xuXHR9XG5cblx0cmV0dXJuIGdldEtleURhdGEoZXZlbnQuY3RybEtleSwgZXZlbnQuYWx0S2V5LCBldmVudC5zaGlmdEtleSwgZXZlbnQubWV0YUtleSwga2V5KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEtleURhdGEoY3RybCwgYWx0LCBzaGlmdCwgbWV0YSwga2V5KSB7XG5cdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0aWYgKGN0cmwpIGJ1Zi5hcHBlbmQoXCJDVFJMXCIpO1xuXHRpZiAoYWx0KSBidWYuYXBwZW5kKFwiQUxUXCIpO1xuXHRpZiAoc2hpZnQpIGJ1Zi5hcHBlbmQoXCJTSElGVFwiKTtcblx0aWYgKG1ldGEpIGJ1Zi5hcHBlbmQoXCJNRVRBXCIpO1xuXHRpZiAoa2V5KSBidWYuYXBwZW5kKGtleSk7XG5cblx0cmV0dXJuIGJ1Zi50b1N0cmluZyhcIi5cIik7XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ldmVudC9LZXlVdGlscy5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuaW1wb3J0IE5vZGUgZnJvbSBcIi4vTm9kZVwiO1xuaW1wb3J0IEVkZ2UgZnJvbSBcIi4vRWRnZVwiO1xuaW1wb3J0IE1hcmtlciBmcm9tIFwiLi4vdmlldy9NYXJrZXJcIjtcblxuY29uc3Qgbm9kZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdub2RlJyxcblx0ZHJhZ2dhYmxlOiB0cnVlLFxuXHRzZWxlY3RhYmxlOiB0cnVlLFxuXHRlZGl0YWJsZTogdHJ1ZSxcblx0cmVzaXphYmxlOiBmYWxzZSxcblx0c291cmNlYWJsZTogdHJ1ZSxcblx0dGFyZ2V0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZVxufTtcblxuY29uc3QgZWRnZURlZmF1bHRzID0ge1xuXHRuYW1lOiAnRGVmYXVsdCcsXG5cdHJvbGU6ICdlZGdlJyxcblx0c2VsZWN0YWJsZTogdHJ1ZSxcblx0dmlzaWJsZTogdHJ1ZSxcblx0c3RhcnRNYXJrZXI6IG51bGwsXG5cdGVuZE1hcmtlcjoge1xuXHRcdGlkOiAnRGVmYXVsdF9FbmRNYXJrZXInLFxuXHRcdHR5cGU6ICdhcnJvdycsXG5cdFx0c2l6ZTogMTAsXG5cdFx0Y29sb3I6ICcjMGVhMTE3J1xuXHR9LFxuXHQvKiBzdGFydCBhbmQgZW5kIGlzIG9ubHkgdXNlZCBpZiB0aGUgZWRnZSBpcyBub3QgY29ubmVjdGVkIHRvIGEgbm9kZSAqL1xuXHRzdGFydDogWzAsIDBdLFxuXHRlbmQ6IFs0MDAsIDIwMF1cbn07XG5cbmNsYXNzIEdyYXBoIHtcblx0Y29uc3RydWN0b3IoaWQgPSBfLnVuaXF1ZUlkKFwiR1wiKSwgY29uZmlnID0ge30sIG1vZGVsKSB7XG5cdFx0dGhpcy5pZCA9IGlkO1xuXG5cdFx0dGhpcy5ub2RlcyA9IHt9O1xuXHRcdHRoaXMuZWRnZXMgPSB7fTtcblxuXHRcdHRoaXMuc2VsZWN0aW9uID0gbnVsbDtcblx0XHR0aGlzLmRlc3Ryb3llZCA9IGZhbHNlO1xuXG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcubm9kZVR5cGVzLCBcIk5vZGVzXCIsIG5vZGVEZWZhdWx0cyk7XG5cdFx0VXRpbHMuYnVpbGRUeXBlcyhjb25maWcuZWRnZVR5cGVzLCBcIkVkZ2VzXCIsIGVkZ2VEZWZhdWx0cyk7XG5cdFx0Ly8gY2hlY2sgZm9yIG1hcmtlcnMuXG5cdFx0dGhpcy5tYXJrZXJzID0gW107XG5cdFx0bGV0IGVkZ2VUeXBlcyA9IFV0aWxzLnR5cGUoRWRnZS5uYW1lc3BhY2UpLCBtYXJrZXIsIG1hcmtlckNvbmZpZztcblx0XHRlZGdlVHlwZXMuZm9yRWFjaChmdW5jdGlvbih0eXBlKSB7XG5cdFx0XHRtYXJrZXJDb25maWcgPSB0eXBlLnByb3RvdHlwZS5zdGFydE1hcmtlcjtcblx0XHRcdGlmIChtYXJrZXJDb25maWcpIHtcblx0XHRcdFx0bWFya2VyID0gTWFya2VyLmdldE1hcmtlcihtYXJrZXJDb25maWcsIHRydWUpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdFx0bWFya2VyQ29uZmlnID0gdHlwZS5wcm90b3R5cGUuZW5kTWFya2VyO1xuXHRcdFx0aWYgKG1hcmtlckNvbmZpZykge1xuXHRcdFx0XHRtYXJrZXIgPSBNYXJrZXIuZ2V0TWFya2VyKG1hcmtlckNvbmZpZywgZmFsc2UpO1xuXHRcdFx0XHR0aGlzLm1hcmtlcnMucHVzaChtYXJrZXIpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXG5cdFx0ZGVsZXRlIGNvbmZpZy5ub2RlVHlwZXM7XG5cdFx0ZGVsZXRlIGNvbmZpZy5lZGdlVHlwZXM7XG5cdFx0VXRpbHMuaW5pdENvbmZpZyh0aGlzLCBjb25maWcpO1xuXHRcdHRoaXMucm9vdCA9IG51bGw7XG5cdFx0aWYgKG1vZGVsKVxuXHRcdFx0dGhpcy5sb2FkTW9kZWwobW9kZWwpO1xuXHR9XG5cblx0c3RhdGljIGdldEpTQ2xhc3MoY29uZmlnLCBkZWZhdWx0Q2xhc3MpIHtcblx0XHR2YXIganNDbGFzcyA9IG51bGw7XG5cdFx0aWYgKGNvbmZpZyAmJiBjb25maWcudHlwZSkge1xuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiBnZXQgdGhlIGpzIGNsYXNzIGZyb20gY29uZmlnLlxuXHRcdFx0dmFyIHR5cGUgPSBVdGlscy50eXBlKGRlZmF1bHRDbGFzcy5uYW1lc3BhY2UsIGNvbmZpZy50eXBlKTtcblx0XHRcdGlmICh0eXBlKVxuXHRcdFx0XHRqc0NsYXNzID0gdHlwZS5qc0NsYXNzO1xuXHRcdH1cblxuXHRcdHJldHVybiBVdGlscy5nZXRDb25zdHJ1Y3Rvcihqc0NsYXNzLCBkZWZhdWx0Q2xhc3MpO1xuXHR9XG5cblx0LyoqXG5cdCAqIENyZWF0ZSBhIG5ldyBOb2RlXG5cdCAqL1xuXHRhZGROb2RlKGNvbmZpZywgcGFyZW50ID0gdGhpcy5jdXJyZW50Um9vdCwgcG9zKSB7XG5cdFx0bGV0IE5vZGVDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBOb2RlKTtcblx0XHRsZXQgbm9kZSA9IG5ldyBOb2RlQ2xhc3ModGhpcywgY29uZmlnKTtcblxuXHRcdGlmIChwYXJlbnQpXG5cdFx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIG5vZGUsIHBvcyk7XG5cdFx0ZWxzZSB7XG5cdFx0XHR0aGlzLnJvb3QgPSBub2RlO1xuXHRcdFx0dGhpcy5yb290LnByb3AoJ3JvbGUnLCAncm9vdCcpO1xuXHRcdH1cblxuXHRcdHRoaXMubm9kZXNbbm9kZS5pZF0gPSBub2RlO1xuXHRcdHJldHVybiBub2RlO1xuXHR9XG5cblx0YWRkRWRnZShjb25maWcsIHBhcmVudCA9IHRoaXMuY3VycmVudFJvb3QsIGZyb20sIHRvKSB7XG5cdFx0bGV0IEVkZ2VDbGFzcyA9IEdyYXBoLmdldEpTQ2xhc3MoY29uZmlnLCBFZGdlKTtcblx0XHRsZXQgZWRnZSA9IG5ldyBFZGdlQ2xhc3ModGhpcywgY29uZmlnLCBmcm9tLCB0byk7XG5cblx0XHRHcmFwaC5hZGRDaGlsZChwYXJlbnQsIGVkZ2UpO1xuXHRcdHRoaXMuZWRnZXNbZWRnZS5pZF0gPSBlZGdlO1xuXHRcdHJldHVybiBlZGdlO1xuXHR9XG5cblx0c3RhdGljIGFkZENoaWxkKHBhcmVudCwgY2hpbGQpIHtcblx0XHRpZiAoIXBhcmVudC5jaGlsZHJlbilcblx0XHRcdHBhcmVudC5jaGlsZHJlbiA9IFtdO1xuXG5cdFx0aWYgKGNoaWxkLnBhcmVudCAhPSBwYXJlbnQpIHtcblx0XHRcdHBhcmVudC5jaGlsZHJlbi5wdXNoKGNoaWxkKTtcblxuXHRcdFx0aWYgKGNoaWxkLnBhcmVudCAmJiBjaGlsZC5wYXJlbnQuY2hpbGRyZW4pXG5cdFx0XHRcdGNoaWxkLnBhcmVudC5jaGlsZHJlbiA9IF8ud2l0aG91dChjaGlsZC5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkKTtcblx0XHR9XG5cdFx0Y2hpbGQucGFyZW50ID0gcGFyZW50O1xuXHR9XG5cblx0bG9hZE1vZGVsKG1vZGVsLCBwYXJlbnQgPSB0aGlzLmN1cnJlbnRSb290KSB7XG5cdFx0dmFyIG5vZGVzID0gbW9kZWwubm9kZXM7XG5cdFx0dmFyIGVkZ2VzID0gbW9kZWwuZWRnZXM7XG5cdFx0ZGVsZXRlIG1vZGVsLm5vZGVzO1xuXHRcdGRlbGV0ZSBtb2RlbC5lZGdlcztcblxuXHRcdHZhciBub2RlID0gdGhpcy5hZGROb2RlKG1vZGVsLCBwYXJlbnQpO1xuXHRcdGlmIChub2Rlcykge1xuXHRcdFx0Xy5mb3JFYWNoKG5vZGVzLCAoY2hpbGQpID0+IHtcblx0XHRcdFx0dGhpcy5sb2FkTW9kZWwoY2hpbGQsIG5vZGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGlmIChlZGdlcykge1xuXHRcdFx0Xy5mb3JFYWNoKGVkZ2VzLCAoZWRnZSkgPT4ge1xuXHRcdFx0XHRsZXQgZnJvbSwgdG87XG5cdFx0XHRcdGlmIChlZGdlLmZyb20pXG5cdFx0XHRcdFx0ZnJvbSA9IHRoaXMubm9kZXNbZWRnZS5mcm9tXTtcblx0XHRcdFx0aWYgKGVkZ2UudG8pXG5cdFx0XHRcdFx0dG8gPSB0aGlzLm5vZGVzW2VkZ2UudG9dO1xuXHRcdFx0XHR0aGlzLmFkZEVkZ2UoZWRnZSwgbm9kZSwgZnJvbSwgdG8pO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0Z2V0IGN1cnJlbnRSb290KCkge1xuXHRcdHJldHVybiB0aGlzLnJvb3Q7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuXG5HcmFwaC5ERUZBVUxUUyA9IHtcblx0YWxsb3dEYW5nbGluZ0VkZ2VzOiB0cnVlLFxuXHRtdWx0aUNvbm5lY3Q6IGZhbHNlLFxuXHRyZWFkT25seTogZmFsc2UsXG5cdHZpZXdPbmx5OiBmYWxzZVxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JhcGg7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9HcmFwaC5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5cbmNsYXNzIE5vZGUgZXh0ZW5kcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHt9KSB7XG5cdFx0aWYgKCFjb25maWcuaWQpIGNvbmZpZy5pZCA9IF8udW5pcXVlSWQoJ04nKTtcblx0XHRzdXBlcihncmFwaCwgY29uZmlnKTtcblxuXHRcdHRoaXMuaW5FZGdlcyA9IFtdO1xuXHRcdHRoaXMub3V0RWRnZXMgPSBbXTtcblx0XHR0aGlzLnBvcnRzID0gbnVsbDtcblx0XHR0aGlzLnBhcmVudCA9IG51bGw7XG5cdH1cblxuXHRpc0FuY2VzdG9yKG4pIHtcblx0XHQvLyBUT0RPOiBzaG91bGQgd2UgbW92ZSB0aGlzIHRvIGdyYXBoIGNsYXNzID9cblx0XHR2YXIgbm9kZSA9IG4ucGFyZW50O1xuXHRcdHdoaWxlIChub2RlKSB7XG5cdFx0XHRpZiAodGhpcyA9PSBub2RlKSB7IHJldHVybiB0cnVlOyB9XG5cdFx0XHRub2RlID0gbm9kZS5wYXJlbnQ7XG5cdFx0fVxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJlbW92ZUVkZ2UoZWRnZSkge1xuXHRcdHZhciBlZGdlcyA9IGVkZ2Uuc291cmNlID09IHRoaXMgPyB0aGlzLm91dEVkZ2VzIDogdGhpcy5pbkVkZ2VzO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZWRnZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGlmIChlZGdlID09IGVkZ2VzW2ldKSB7XG5cdFx0XHRcdGVkZ2VzLnNwbGljZShpLCAxKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWRkIGEgbmV3IGluY29taW5nIGVkZ2Vcblx0YWRkSW5FZGdlKGVkZ2UsIHBvcykge1xuXHRcdGlmIChwb3MgPT0gbnVsbCB8fCBwb3MgPT09IHVuZGVmaW5lZClcblx0XHRcdHRoaXMuaW5FZGdlcy5wdXNoKGVkZ2UpO1xuXHRcdGVsc2Vcblx0XHRcdHRoaXMuaW5FZGdlcy5zcGxpY2UocG9zLCAwLCBlZGdlKTtcblx0fVxuXG5cdC8vIEFkZCBhIG5ldyBvdXRnb2luZyBlZGdlXG5cdGFkZE91dEVkZ2UoZWRnZSwgcG9zKSB7XG5cdFx0aWYgKHBvcyA9PSBudWxsIHx8IHBvcyA9PT0gdW5kZWZpbmVkIHx8IHBvcyA+IGVkZ2UubGVuZ3RoIC0gMSlcblx0XHRcdHRoaXMub3V0RWRnZXMucHVzaChlZGdlKTtcblx0XHRlbHNlXG5cdFx0XHR0aGlzLm91dEVkZ2VzLnNwbGljZShwb3MsIDAsIGVkZ2UpO1xuXHR9XG5cblx0cmVuZGVyQ2hpbGRyZW4odmlldykge1xuXHRcdGlmICh0aGlzLmNoaWxkcmVuKSB7XG5cdFx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdFx0Xy5mb3JFYWNoKHRoaXMuY2hpbGRyZW4sIChjaGlsZCkgPT4ge1xuXHRcdFx0XHRidWYuYXBwZW5kKGNoaWxkLnJlbmRlcih2aWV3KSk7XG5cdFx0XHR9KTtcblx0XHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0XHR9XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0UG9ydChrZXksIHBvcnROYW1lID0gJ2F1dG8nLCBlbmRQdCwgb3J0aG9nb25hbCkge1xuXHRcdGxldCBzaGFwZSA9IHRoaXMuZ2V0U2hhcGUoa2V5KTtcblx0XHRpZiAocG9ydE5hbWUgPT0gJ2F1dG8nKSB7XG5cdFx0XHRyZXR1cm4gc2hhcGUuZ2V0UGVyaW1ldGVyKGVuZFB0LCBvcnRob2dvbmFsKTtcblx0XHR9XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHR0b1N0cmluZygpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoXCJsYWJlbFwiKSA/IHRoaXMucHJvcChcImxhYmVsXCIpIDogXCJ1bmRlZmluZWRcIjtcblx0XHRpZiAoXy5pc0FycmF5KGxhYmVsKSlcblx0XHRcdGxhYmVsID0gbGFiZWxbMF07XG5cdFx0cmV0dXJuICdOb2RlOntpZDonICsgdGhpcy5pZCArICc7bGFiZWw6JyArIGxhYmVsICsgJzt0eXBlOicgKyB0aGlzLnByb3BzLmNvbnN0cnVjdG9yLnR5cGVOYW1lICsgJ30nO1xuXHR9XG59XG5Ob2RlLm5hbWVzcGFjZSA9IFwiTm9kZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgTm9kZTtcblxuLypcblxuLyoqXG4gKiBUaGUgRHJpbGxEb3duUGFyZW50IGlzIHRoZSBwYXJlbnQgdGhhdCBkaXNwbGF5cyB0aGUgdmVydGV4IHdoZW4gZHJpbGxlZCBkb3duLlxuICpcblZlcnRleC5wcm90b3R5cGUuZ2V0RHJpbGxEb3duUGFyZW50ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnBhcmVudDtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuaXNMb2NrZWQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1vZGUgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kZVwiKSB8fCAzO1xuXHRyZXR1cm4gIShtb2RlICYgR3JhcGguQUxMT1dfSU5URVJBQ1RJT05TKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuZ2V0Q3J1bWJUZXh0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICh0aGlzLmlzTG9ja2VkKCkpXG5cdFx0cmV0dXJuICc8c3Bhbj48aW1nIHNyYz1cIndlYndiL3B6cmVhZG9ubHkucG5nXCIgLz48L3NwYW4+PHNwYW4+Jm5ic3A7JyArIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKSArICc8L3NwYW4+Jztcblx0cmV0dXJuIHRoaXMuZ2V0UHJvcGVydHkoXCJsYWJlbFwiKTtcbn07XG5cblZlcnRleC5wcm90b3R5cGUuY2FuRWRpdCA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gKCF0aGlzLnBhcmVudCB8fCAhdGhpcy5wYXJlbnQuaXNMb2NrZWQoKSkgJiYgVmVydGV4LnN1cGVyY2xhc3MuY2FuRWRpdC5jYWxsKHRoaXMpO1xufTtcblxuVmVydGV4LnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5nZXRQcm9wZXJ0eShcImNvbnRhaW5lclwiKTtcbn07XG5cbiovXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9ncmFwaC9Ob2RlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgQ2FjaGUgZnJvbSBcIi4uL3V0aWwvQ2FjaGVcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgU2hhcGUgZnJvbSBcIi4uL2dlb21ldHJ5L1NoYXBlXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi4vdmlldy9MYWJlbFwiO1xuXG4vKipcbiAqIFRoZSBDZWxsIGlzIHRoZSBjb21tb24gcGFyZW50IGZvciBOb2RlIGFuZCBFZGdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDZWxsIHtcblx0Y29uc3RydWN0b3IoZ3JhcGgsIGNvbmZpZyA9IHtpZDogXy51bmlxdWVJZCgpfSkge1xuXHRcdHRoaXMuZ3JhcGggPSBncmFwaDtcblx0XHR0aGlzLmlkID0gY29uZmlnLmlkO1xuXHRcdGRlbGV0ZSBjb25maWcuaWQ7XG5cblx0XHQvLyBJbml0aWFsaXplIGRlY29yYXRvcnNcblx0XHRpZiAoY29uZmlnLmRlY29yYXRvcnMpIHtcblx0XHRcdHRoaXMuY3JlYXRlRGVjb3JhdG9ycyhjb25maWcuZGVjb3JhdG9ycyk7XG5cdFx0XHRkZWxldGUgY29uZmlnLmRlY29yYXRvcnM7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSBWaWV3IFByb3BlcnRpZXNcblx0XHRpZiAoY29uZmlnLnZpZXdzKSB7XG5cdFx0XHR0aGlzLnZpZXdQcm9wcyA9IGNvbmZpZy52aWV3cztcblx0XHRcdGRlbGV0ZSBjb25maWcudmlld3M7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdGlhbGl6ZSB0eXBlXG5cdFx0dmFyIHR5cGUgPSBjb25maWcudHlwZSB8fCBcIkRlZmF1bHRcIjtcblx0XHR0eXBlID0gVXRpbHMudHlwZSh0aGlzLmNvbnN0cnVjdG9yLm5hbWVzcGFjZSwgdHlwZSk7XG5cdFx0aWYgKCF0eXBlKVxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFwiVHlwZSBub3QgZm91bmQgXCIgKyBjb25maWcudHlwZSk7XG5cdFx0ZGVsZXRlIGNvbmZpZy50eXBlO1xuXHRcdHRoaXMucHJvcHMgPSBuZXcgdHlwZShjb25maWcpO1xuXHR9XG5cblx0cHJvcChuYW1lLCB2YWx1ZSkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHZhbHVlKSlcblx0XHRcdHJldHVybiB0aGlzLnByb3BzW25hbWVdO1xuXHRcdHRoaXMucHJvcHNbbmFtZV0gPSB2YWx1ZTtcblx0fVxuXG5cdC8qKlxuXHQgKiBHZXQvU2V0IHByb3BlcnR5IHN0b3JlZCBieSB2aWV3cy5cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gbmFtZVxuXHQgKiBAcGFyYW0gdmFsdWVcblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHR2aWV3UHJvcChrZXkgPSAnZGVmYXVsdCcsIG5hbWUsIHZhbHVlKSB7XG5cdFx0aWYgKF8uaXNVbmRlZmluZWQodmFsdWUpKSB7XG5cdFx0XHRpZiAoa2V5ID09ICdkZWZhdWx0Jylcblx0XHRcdFx0cmV0dXJuIHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gdGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXTtcblx0XHR9XG5cdFx0aWYgKGtleSA9PSAnZGVmYXVsdCcpIHtcblx0XHRcdHRoaXMucHJvcChuYW1lLCB2YWx1ZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghdGhpcy52aWV3UHJvcHNba2V5XSlcblx0XHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XSA9IHt9O1xuXHRcdFx0dGhpcy52aWV3UHJvcHNba2V5XVtuYW1lXSA9IHZhbHVlO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZURlY29yYXRvcnMoZGVjb3JhdG9ycykge31cblxuXHQvKipcblx0ICogR2V0IHByb3BlcnRpZXMgbmVlZGVkIGZvciByZW5kZXJpbmcgdGhpcyBlbGVtZW50XG5cdCAqIEByZXR1cm5zIHt7a2V5OiAoc3RyaW5nfCopLCBjbGFzc05hbWU6ICosIG5hbWVzcGFjZTogKiwgYm91bmRzOiAqfX1cblx0ICovXG5cdGdldFZpZXcoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZShrZXkpO1xuXHRcdHJldHVybiBfLmFzc2lnbih7XG5cdFx0XHRpZDogdGhpcy5pZCxcblx0XHRcdGtleToga2V5LFxuXHRcdFx0Y2xhc3NOYW1lOiB0aGlzLmNvbXB1dGVkQ2xhc3NOYW1lLFxuXHRcdFx0c3R5bGU6IHRoaXMudmlld1Byb3Aoa2V5LCAnc3R5bGUnKSxcblx0XHRcdG5hbWVzcGFjZTogdGhpcy5uYW1lc3BhY2Vcblx0XHR9LCBzaGFwZSk7XG5cdH1cblxuXHRnZXRTaGFwZShrZXkpIHtcblx0XHRsZXQgc2hhcGUgPSBDYWNoZS5nZXQodGhpcy5pZCArIFwiLnNoYXBlXCIsIGtleSk7XG5cdFx0aWYgKHNoYXBlKSByZXR1cm4gc2hhcGU7XG5cblx0XHRsZXQgc2hhcGVDb25maWcgPSB0aGlzLnZpZXdQcm9wKGtleSwgJ3NoYXBlJyk7XG5cdFx0bGV0IHNoYXBlQ2xhc3MgPSBzaGFwZUNvbmZpZyA/IFNoYXBlLmdldFNoYXBlKHNoYXBlQ29uZmlnLm5hbWUpIDogU2hhcGUuZ2V0U2hhcGUoJ1JlY3RhbmdsZScpO1xuXHRcdGxldCB4ID0gdGhpcy52aWV3UHJvcChrZXksIFwieFwiKTtcblx0XHRsZXQgeSA9IHRoaXMudmlld1Byb3Aoa2V5LCBcInlcIik7XG5cdFx0bGV0IHdpZHRoID0gdGhpcy52aWV3UHJvcChrZXksIFwid2lkdGhcIik7XG5cdFx0bGV0IGhlaWdodCA9IHRoaXMudmlld1Byb3Aoa2V5LCBcImhlaWdodFwiKTtcblx0XHRzaGFwZSA9IG5ldyBzaGFwZUNsYXNzKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNoYXBlQ29uZmlnKTtcblx0XHRDYWNoZS5zZXQodGhpcy5pZCArICcuc2hhcGUnLCBzaGFwZSwga2V5KTtcblx0XHRyZXR1cm4gc2hhcGU7XG5cdH1cblxuXHRyZW5kZXIodmlldykge1xuXHRcdGxldCB0ZW1wbGF0ZSA9IENhY2hlLmdldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHZpZXcuaWQpO1xuXHRcdGlmICghdGVtcGxhdGUpIHtcblx0XHRcdC8vY3JlYXRlIHRoZSB0ZW1wbGF0ZVxuXHRcdFx0bGV0IHJvbGUgPSB0aGlzLnByb3AoJ3JvbGUnKTtcblx0XHRcdHRlbXBsYXRlID0gdmlldy5nZXRUZW1wbGF0ZSgnJCcgKyByb2xlLCBudWxsLCB0aGlzKTtcblx0XHRcdGlmIChfLmlzU3RyaW5nKHRlbXBsYXRlKSlcblx0XHRcdFx0dGVtcGxhdGUgPSBfLnRlbXBsYXRlKHRlbXBsYXRlKTtcblx0XHRcdENhY2hlLnNldCh0aGlzLmlkICsgJy50ZW1wbGF0ZScsIHRlbXBsYXRlLCB2aWV3LmlkKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRlbXBsYXRlKHRoaXMuZ2V0Vmlldyh2aWV3LmlkKSk7XG5cdH1cblxuXHRyZW5kZXJTaGFwZSh2aWV3KSB7XG5cdFx0bGV0IHNoYXBlID0gdGhpcy5nZXRTaGFwZSh2aWV3LmlkKTtcblx0XHRpZiAoc2hhcGUpXG5cdFx0XHRyZXR1cm4gc2hhcGUucmVuZGVyKHZpZXcpO1xuXHRcdHJldHVybiAnJztcblx0fVxuXG5cdHJlbmRlckxhYmVsKHZpZXcpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0bGV0IGJveCA9IHRoaXMuZ2V0TGFiZWxCb3godmlldy5pZCk7XG5cdFx0aWYgKGJveClcblx0XHRcdHJldHVybiB2aWV3LnJlbmRlckxhYmVsKGJveCk7XG5cdFx0cmV0dXJuICcnO1xuXHR9XG5cblx0Z2V0TGFiZWxCb3goa2V5KSB7XG5cdFx0bGV0IGJveCA9IENhY2hlLmdldCh0aGlzLmlkICsgJy5sYWJlbEJveCcsIGtleSk7XG5cdFx0aWYgKGJveCkgcmV0dXJuIGJveDtcblx0XHRsZXQgc2hhcGUgPSB0aGlzLmdldFNoYXBlKGtleSk7XG5cdFx0Ly8gSnVzdCBnZXQgdGhlIGNvbmZpZyB3aWxsIGhhdmUgYSBwb3NpdGl2ZSBwZXJmb3JtYW5jZSBib29zdCBmb3IgSUUxMSBhbmQgSUUxMC5cblx0XHRib3ggPSBMYWJlbC5nZXRMYWJlbEJveCh0aGlzLnByb3AoJ2xhYmVsJyksIHRoaXMudmlld1Byb3Aoa2V5LCAnbGFiZWxDb25maWcnKSwgc2hhcGUud2lkdGgsIHNoYXBlLmhlaWdodCk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLmxhYmVsQm94JywgYm94LCBrZXkpO1xuXHRcdHJldHVybiBib3g7XG5cdH1cblxuXHRnZXQgY29tcHV0ZWRDbGFzc05hbWUoKSB7XG5cdFx0aWYgKCF0aGlzLl9jb21wdXRlZENsYXNzTmFtZSkge1xuXHRcdFx0dmFyIGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIodGhpcy5wcm9wKFwicm9sZVwiKSk7XG5cdFx0XHRsZXQgcHJvcHMgPSB0aGlzLnByb3BzO1xuXHRcdFx0aWYgKHByb3BzLmhhc093blByb3BlcnR5KFwiY2xhc3NOYW1lXCIpKVxuXHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdHByb3BzID0gcHJvcHMuY29uc3RydWN0b3IucHJvdG90eXBlO1xuXHRcdFx0d2hpbGUgKHByb3BzKSB7XG5cdFx0XHRcdGlmIChwcm9wcy5oYXNPd25Qcm9wZXJ0eShcImNsYXNzTmFtZVwiKSlcblx0XHRcdFx0XHRidWYuYXBwZW5kKHByb3BzW1wiY2xhc3NOYW1lXCJdKTtcblx0XHRcdFx0cHJvcHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvcHMpO1xuXHRcdFx0fVxuXHRcdFx0dGhpcy5fY29tcHV0ZWRDbGFzc05hbWUgPSBidWYudG9TdHJpbmcoJyAnKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuX2NvbXB1dGVkQ2xhc3NOYW1lO1xuXHR9XG5cblx0Z2V0IG5hbWVzcGFjZSgpIHtcblx0XHRpZiAodGhpcyA9PSB0aGlzLmdyYXBoLmN1cnJlbnRSb290KSByZXR1cm4gJyc7XG5cdFx0cmV0dXJuIFwicm9vdC5cIiArIHRoaXMucHJvcChcInJvbGVcIik7XG5cdH1cblxuXHRkZXN0cm95KCkge1xuXHRcdGRlbGV0ZSB0aGlzLmdyYXBoO1xuXHRcdGRlbGV0ZSB0aGlzLmRlY29yYXRvcnM7XG5cdFx0ZGVsZXRlIHRoaXMucHJvcHM7XG5cdFx0ZGVsZXRlIHRoaXMudmlld1Byb3BzO1xuXHRcdHRoaXMuZGVzdHJveWVkID0gdHJ1ZTtcblx0fVxufVxuXG4vKlxuXG5DZWxsLnByb3RvdHlwZS5tb3ZlID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnNldFByb3BlcnR5KFwieFwiLCBNYXRoLnJvdW5kKHgpKTtcblx0dGhpcy5zZXRQcm9wZXJ0eShcInlcIiwgTWF0aC5yb3VuZCh5KSk7XG5cdGRlbGV0ZSB0aGlzLmJvdW5kcztcbn07XG5cbkNlbGwucHJvdG90eXBlLnJlc2l6ZSA9IGZ1bmN0aW9uKHcsIGgpIHtcblx0dGhpcy5zZXRQcm9wZXJ0eShcIndpZHRoXCIsIHcpO1xuXHR0aGlzLnNldFByb3BlcnR5KFwiaGVpZ2h0XCIsIGgpO1xuXHRkZWxldGUgdGhpcy5ib3VuZHM7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5jYW5FZGl0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcImVkaXRhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuU2VsZWN0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuU2VsZWN0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwic2VsZWN0YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmNhbk1vdmUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuICh0aGlzLmdyYXBoID8gdGhpcy5ncmFwaC5jYW5FZGl0KCkgOiB0cnVlKSAmJiB0aGlzLmdldFByb3BlcnR5KFwiZHJhZ2dhYmxlXCIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY2FuUmVzaXplID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiAodGhpcy5ncmFwaCA/IHRoaXMuZ3JhcGguY2FuRWRpdCgpIDogdHJ1ZSkgJiYgdGhpcy5nZXRQcm9wZXJ0eShcInJlc2l6YWJsZVwiKTtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldFR5cGVGcm9tU3RyaW5nID0gZnVuY3Rpb24odHlwZVN0cikge1xuXHRyZXR1cm4gdGhpcy5ncmFwaC5nZXRUeXBlKHR5cGVTdHIpO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuY3JlYXRlTW9kaWZpZXJzID0gZnVuY3Rpb24obW9kaWZpZXJzKSB7XG5cdHRoaXMubW9kaWZpZXJzID0gbnVsbDtcblx0dmFyIG1vZGlmaWVyU2V0dGluZ3MgPSB0aGlzLmdldFByb3BlcnR5KFwibW9kaWZpZXJTZXR0aW5nc1wiKTtcblx0aWYgKG1vZGlmaWVyU2V0dGluZ3MpIHtcblx0XHRfLmVhY2gobW9kaWZpZXJzLCBmdW5jdGlvbihjb25maWcpIHtcblx0XHRcdGNvbmZpZy50eXBlID0gdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUoY29uZmlnLmNsYXNzTmFtZSk7XG5cdFx0XHRjb25maWcuc2V0dGluZyA9IG1vZGlmaWVyU2V0dGluZ3NbY29uZmlnLmNsYXNzTmFtZV07XG5cdFx0XHRpZiAoIWNvbmZpZy50eXBlIHx8ICFjb25maWcuc2V0dGluZykgcmV0dXJuO1xuXG5cdFx0XHR0aGlzLmFkZE1vZGlmaWVyKGNvbmZpZy5jbGFzc05hbWUsIG5ldyBNb2RpZmllcih0aGlzLCBjb25maWcpKTtcblx0XHR9LCB0aGlzKTtcblxuXHRcdC8vIENoZWNrIGZvciBzaG93QWx3YXlzIHNldHRpbmdzXG5cdFx0Xy5lYWNoKG1vZGlmaWVyU2V0dGluZ3MsIGZ1bmN0aW9uKHNldHRpbmcsIG5hbWUpIHtcblx0XHRcdGlmIChzZXR0aW5nLnNob3dBbHdheXMgJiYgKCF0aGlzLm1vZGlmaWVycyB8fCAhdGhpcy5tb2RpZmllcnNbbmFtZV0pKSB7XG5cdFx0XHRcdHZhciBjb25maWcgPSB7dHlwZTogdGhpcy5ncmFwaC5nZXRNb2RpZmllclR5cGUobmFtZSksIHNldHRpbmc6IHNldHRpbmd9O1xuXHRcdFx0XHRpZiAoIWNvbmZpZy50eXBlKSByZXR1cm47XG5cdFx0XHRcdHRoaXMuYWRkTW9kaWZpZXIobmFtZSwgbmV3IE1vZGlmaWVyKHRoaXMsIGNvbmZpZykpO1xuXHRcdFx0fVxuXHRcdH0sIHRoaXMpO1xuXHR9XG59O1xuXG5DZWxsLnByb3RvdHlwZS5hZGRNb2RpZmllciA9IGZ1bmN0aW9uKG5hbWUsIG1vZGlmaWVyKSB7XG5cdGlmICghdGhpcy5tb2RpZmllcnMpXG5cdFx0dGhpcy5tb2RpZmllcnMgPSB7fTtcblxuXHRpZiAoIW1vZGlmaWVyLmhhc093blByb3BlcnR5KFwic2hvd0hlYWRlclwiKSlcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gdHJ1ZTtcblxuXHQvLyBAaGFjayBwcmVmZXJhYmx5IHNldCBpdCBpbiBjb25maWd1cmF0aW9ucy5cblx0aWYgKG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclByb2Nlc3NNb2RpZmllclwiIHx8IG1vZGlmaWVyLm5hbWUgPT0gXCJIb3ZlclJlc3VsdHNcIilcblx0XHRtb2RpZmllci5zaG93SGVhZGVyID0gZmFsc2U7XG5cblx0dGhpcy5tb2RpZmllcnNbbmFtZV0gPSBtb2RpZmllcjtcbn07XG5cbkNlbGwucHJvdG90eXBlLmdldE1vZGlmaWVycyA9IGZ1bmN0aW9uKCkge1xuXHRpZiAoXy5pc1VuZGVmaW5lZCh0aGlzLm1vZGlmaWVycykpXG5cdFx0dGhpcy5jcmVhdGVNb2RpZmllcnMoKTtcblx0cmV0dXJuIHRoaXMubW9kaWZpZXJzO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuZ2V0TW9kaWZpZXIgPSBmdW5jdGlvbihuYW1lKSB7XG5cdHZhciBtb2RpZmllcnMgPSB0aGlzLmdldE1vZGlmaWVycygpO1xuXHRpZiAobW9kaWZpZXJzKVxuXHRcdHJldHVybiBtb2RpZmllcnNbbmFtZV07XG5cdHJldHVybiBudWxsO1xufTtcblxuQ2VsbC5wcm90b3R5cGUuaXNWaXNpYmxlID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLmdldFByb3BlcnR5KCd2aXNpYmxlJyk7XG59O1xuXG5DZWxsLnByb3RvdHlwZS5pc0NvbnRhaW5lciA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59O1xuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0NlbGwuanNcbiAqKi8iLCIvKipcbiAqIENyZWF0ZWQgYnkgdG9uZyBvbiA2LzcvMjAxNi5cbiAqL1xuXG5sZXQgY2FjaGVzID0ge307XG5cbmxldCBDYWNoZSA9IHtcblx0Z2V0OiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdHJldHVybiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUsIG5hbWVzcGFjZSkge1xuXHRcdHRoaXMuZ2V0Q2FjaGUobmFtZXNwYWNlKVtrZXldID0gdmFsdWU7XG5cdH0sXG5cblx0Y29udGFpbnM6IGZ1bmN0aW9uKGtleSwgbmFtZXNwYWNlKSB7XG5cdFx0cmV0dXJuIGtleSBpbiB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbihrZXksIG5hbWVzcGFjZSkge1xuXHRcdGRlbGV0ZSB0aGlzLmdldENhY2hlKG5hbWVzcGFjZSlba2V5XTtcblx0fSxcblxuXHRjbGVhcjogZnVuY3Rpb24obmFtZXNhcGNlKSB7XG5cdFx0aWYgKCFuYW1lc3BhY2UpXG5cdFx0XHRjYWNoZXMgPSB7fTtcblx0XHRlbHNlIGlmIChjYWNoZXNbbmFtZXNwYWNlXSlcblx0XHRcdGNhY2hlc1tuYW1lc3BhY2VdID0ge307XG5cdH0sXG5cblx0Z2V0Q2FjaGU6IGZ1bmN0aW9uKG5hbWVzcGFjZSA9ICdkZWZhdWx0Jykge1xuXHRcdGlmICghY2FjaGVzW25hbWVzcGFjZV0pXG5cdFx0XHRjYWNoZXNbbmFtZXNwYWNlXSA9IHt9O1xuXHRcdHJldHVybiBjYWNoZXNbbmFtZXNwYWNlXTtcblx0fVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FjaGU7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy91dGlsL0NhY2hlLmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBTdHJpbmdCdWZmZXIgZnJvbSBcIi4uL3V0aWwvU3RyaW5nQnVmZmVyXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxuY29uc3QgRk9OVF9CT0xEID0gMSwgRk9OVF9JVEFMSUMgPSAyLCBGT05UX1VOREVSTElORSA9IDQsIEZPTlRfU0hBRE9XID0gODtcblxubGV0IGRlZmF1bHRDb25maWcgPSB7XG5cdGZvbnRTaXplOiAxMSxcblx0Zm9udEZhbWlseTogXCJBcmlhbFwiLFxuXHRmb250U3R5bGU6IDAsXG5cdGZvbnRDb2xvcjogJ2JsYWNrJyxcblx0cGFkZGluZzogMCxcblx0bGluZVBhZGRpbmc6IDAsXG5cdGFsaWduOiBcImxlZnRcIixcblx0d2lkdGg6IDAsXG5cdGhlaWdodDogMCxcblx0cm90YXRpb246IG51bGwsXG5cdGdlb21ldHJ5OiB7eDogMCwgeTogMCwgYW5jaG9yWTogMCwgb2Zmc2V0WDogMCwgb2Zmc2V0WTogMH1cbn07XG5cbi8qKlxuICogVGhlIGxhYmVsIG9iamVjdCBoYW5kbGVzIGxhYmVsIHNpemluZy9wb3NpdGlvbmluZ1xuICovXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24oKSB7XG5cdGxldCBzdHJpbmdNZWFzdXJlRWwgPSBudWxsLCBtZWFzdXJlRGl2LCBiYXNlbGluZURpdjtcblxuXHQvKipcblx0ICogQ2FsY3VsYXRlIHRoZSBzaXplIG9mIHRoZSBzdHJpbmcuXG5cdCAqL1xuXHRsZXQgZ2V0U3RyaW5nU2l6ZSA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSB7XG5cdFx0Zm9udFNpemUgPSBmb250U2l6ZSB8fCAxMTtcblx0XHRmb250RmFtaWx5ID0gZm9udEZhbWlseSB8fCAnQXJpYWwsSGVsdmV0aWNhJztcblx0XHRib2xkID0gIV8uaXNVbmRlZmluZWQoYm9sZCkgPyBib2xkOiBmYWxzZTtcblxuXHRcdC8vIGZpcnN0IGNoZWNrIGlmIHRoZXJlIGlzIGEgc3RyaW5nLW1lYXN1cmluZyBkaXYgYXZhaWxhYmxlLCBpZiBub3QsIGNyZWF0ZSBub3cuXG5cdFx0aWYgKCFzdHJpbmdNZWFzdXJlRWwpIHtcblx0XHRcdHN0cmluZ01lYXN1cmVFbCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScsIHtpZDpcIl9Db21wdXRlU3R5bGVzSWZyYW1lXCJ9LCB7cG9zaXRpb246XCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OlwiaGlkZGVuXCIsIHdpZHRoOlwiYXV0b1wifSk7XG5cdFx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0cmluZ01lYXN1cmVFbCk7XG5cdFx0XHR2YXIgZG9jID0gc3RyaW5nTWVhc3VyZUVsLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG5cdFx0XHRkb2Mub3BlbigpO1xuXHRcdFx0ZG9jLndyaXRlKCc8aHRtbD48Ym9keT5cXFxuXHRcdFx0XHQ8ZGl2IGlkPVwiYmFzZWxpbmVEaXZcIiBzdHlsZT1cImhlaWdodDoxMDBweDtcIj48c3BhbiBzdHlsZT1cImxpbmUtaGVpZ2h0OjBcIj5UPC9zcGFuPjxzcGFuIHN0eWxlPVwiaGVpZ2h0OjEwMCU7ZGlzcGxheTppbmxpbmUtYmxvY2s7XCI+PC9zcGFuPjwvZGl2PlxcXG5cdFx0XHRcdDxkaXYgaWQ9XCJtZWFzdXJlRGl2XCIgc3R5bGU9XCJwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDphdXRvO2hlaWdodDphdXRvO3BhZGRpbmc6MDt3aGl0ZS1zcGFjZTpwcmUtd3JhcDt3b3JkLXdyYXA6YnJlYWstd29yZDtkaXNwbGF5OmlubGluZS1ibG9jaztcIj48L2Rpdj5cXFxuXHRcdFx0XHQ8L2JvZHk+PC9odG1sPicpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cdFx0XHRtZWFzdXJlRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwibWVhc3VyZURpdlwiKTtcblx0XHRcdGJhc2VsaW5lRGl2ID0gZG9jLmdldEVsZW1lbnRCeUlkKFwiYmFzZWxpbmVEaXZcIik7XG5cdFx0fVxuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRTaXplID0gbWVhc3VyZURpdi5zdHlsZS5mb250U2l6ZSA9IGZvbnRTaXplO1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRGYW1pbHkgPSBmb250RmFtaWx5O1xuXHRcdGJhc2VsaW5lRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBtZWFzdXJlRGl2LnN0eWxlLmZvbnRXZWlnaHQgPSBib2xkID8gJ2JvbGQnIDogJ25vcm1hbCc7XG5cdFx0bWVhc3VyZURpdi5pbm5lckhUTUwgPSBzdHI7XG5cblx0XHRsZXQgc3RydXQgPSBiYXNlbGluZURpdi5maXJzdENoaWxkO1xuXHRcdGxldCBiYXNlbGluZUhlaWdodCA9IHN0cnV0Lm9mZnNldFRvcCArIHN0cnV0Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldEhlaWdodCAtIGJhc2VsaW5lRGl2Lm9mZnNldFRvcDtcblxuXHRcdHJldHVybiB7d2lkdGg6IG1lYXN1cmVEaXYub2Zmc2V0V2lkdGgsIGhlaWdodDogbWVhc3VyZURpdi5vZmZzZXRIZWlnaHQsIGJhc2VsaW5lOiBiYXNlbGluZUhlaWdodH07XG5cdH0sIGZ1bmN0aW9uKHN0ciwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIGZvbnRTaXplICsgJzsnICsgZm9udEZhbWlseSArICc7JyArIGJvbGQ7IH0pO1xuXG5cdC8qKlxuXHQgKiBDcmVhdGUgYSB3cmFwcGVkIHRleHQuXG5cdCAqIEBwYXJhbSB7U3RyaW5nfSBzdHJpbmcgdGhlIHN0cmluZyB0byB3cmFwLlxuXHQgKiBAcGFyYW0ge21heFdpZHRofSB0aGUgbWF4aW11bSB3aWR0aCB0aGlzIHN0cmluZyBjYW4gdGFrZS5cblx0ICogQHBhcmFtIHtmb250U2l6ZX1cblx0ICogQHBhcmFtIHtmb250RmFtaWx5fVxuXHQgKiBAcGFyYW0ge2JvbGR9XG5cdCAqL1xuXHRsZXQgd3JhcCA9IF8ubWVtb2l6ZShmdW5jdGlvbihzdHJpbmcsIG1heFdpZHRoLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkge1xuXHRcdG1heFdpZHRoID0gbWF4V2lkdGggfHwgMDtcblx0XHRmb250U2l6ZSA9IGZvbnRTaXplIHx8IDExO1xuXHRcdGZvbnRGYW1pbHkgPSBmb250RmFtaWx5IHx8ICdBcmlhbCxIZWx2ZXRpY2EnO1xuXHRcdGJvbGQgPSAhXy5pc1VuZGVmaW5lZChib2xkKSA/IGJvbGQ6IGZhbHNlO1xuXG5cdFx0bGV0IGFyciA9IFtdO1xuXHRcdGxldCBzcGFjZVNpemUgPSBnZXRTdHJpbmdTaXplKFwiJm5ic3A7XCIsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKSwgc3BhY2UgPSBzcGFjZVNpemUud2lkdGg7XG5cdFx0YXJyLmxpbmVIZWlnaHQgPSBzcGFjZVNpemUuaGVpZ2h0O1xuXHRcdGFyci5iYXNlbGluZSA9IHNwYWNlU2l6ZS5iYXNlbGluZTtcblxuXHRcdGlmICghbWF4V2lkdGggfHwgIXN0cmluZyB8fCBzdHJpbmcgPT0gXCJcIikge1xuXHRcdFx0YXJyLnB1c2goc3RyaW5nKTtcblx0XHRcdGFyci53aWR0aCA9ICghc3RyaW5nIHx8IHN0cmluZyA9PSBcIlwiKSA/IHNwYWNlIDogZ2V0U3RyaW5nU2l6ZShzdHJpbmcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKS53aWR0aDtcblx0XHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodDtcblx0XHRcdHJldHVybiBhcnI7XG5cdFx0fVxuXG5cdFx0dmFyIHdpZHRoID0gMDtcblx0XHQvL3NwbGl0IHRoZSB0ZXh0IGJ5IGxpbmVzXG5cdFx0dmFyIGxpbmVzID0gc3RyaW5nLnNwbGl0KCdcXG4nKTtcblxuXHRcdHZhciBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGxpbmVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHQvL3NwbGl0IGVhY2ggbGluZSBieSB3b3JkXG5cdFx0XHR2YXIgd29yZHMgPSBsaW5lc1tqXS5zcGxpdCgvXFxzLyk7XG5cdFx0XHR2YXIgbGluZSA9IFwiXCIsIGN1cnJlbnRXaWR0aCA9IDAsIHdvcmRXaWR0aCA9IDAsIG5ld0xpbmUgPSB0cnVlLCB3b3JkO1xuXG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdHdvcmQgPSB3b3Jkc1tpXTtcblx0XHRcdFx0d29yZFdpZHRoID0gZ2V0U3RyaW5nU2l6ZSh3b3JkLCBmb250U2l6ZSwgZm9udEZhbWlseSwgYm9sZCkud2lkdGg7XG5cblx0XHRcdFx0aWYgKChuZXdMaW5lID8gd29yZFdpZHRoIDogY3VycmVudFdpZHRoICsgc3BhY2UgKyB3b3JkV2lkdGgpID4gbWF4V2lkdGgpIHtcblx0XHRcdFx0XHRpZiAobmV3TGluZSkge1xuXHRcdFx0XHRcdFx0YnVmLmFwcGVuZCh3b3JkKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIHdvcmRXaWR0aCk7XG5cdFx0XHRcdFx0XHRpZiAoaSA8IHdvcmRzLmxlbmd0aCAtIDEpIHtcblx0XHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdFx0XHRcdFx0XHRidWYuY2xlYXIoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YXJyLnB1c2goYnVmLmFwcGVuZChsaW5lKS50b1N0cmluZygpKTtcblx0XHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoKTtcblx0XHRcdFx0XHRcdGJ1Zi5jbGVhcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRsaW5lID0gXCJcIjtcblx0XHRcdFx0XHRjdXJyZW50V2lkdGggPSAwO1xuXHRcdFx0XHRcdGlmICghbmV3TGluZSlcblx0XHRcdFx0XHRcdGktLTsgLy8gbW92ZSBiYWNrIG9uZSB3b3JkLlxuXHRcdFx0XHRcdG5ld0xpbmUgPSB0cnVlO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGxpbmUgPSBuZXdMaW5lID8gd29yZCA6IGxpbmUgKyBcIiBcIiArIHdvcmQ7XG5cdFx0XHRcdFx0Y3VycmVudFdpZHRoID0gbmV3TGluZSA/IHdvcmRXaWR0aCA6IGN1cnJlbnRXaWR0aCArIHNwYWNlICsgd29yZFdpZHRoO1xuXHRcdFx0XHRcdHdpZHRoID0gTWF0aC5tYXgod2lkdGgsIGN1cnJlbnRXaWR0aCk7XG5cdFx0XHRcdFx0bmV3TGluZSA9IGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAobGluZSAhPSBcIlwiKVxuXHRcdFx0XHRidWYuYXBwZW5kKGxpbmUpO1xuXHRcdFx0aWYgKGogPCBsaW5lcy5sZW5ndGggLSAxKSB7XG5cdFx0XHRcdGFyci5wdXNoKGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdFx0YnVmLmNsZWFyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXJyLnB1c2goYnVmLnRvU3RyaW5nKCkpO1xuXHRcdGFyci53aWR0aCA9IHdpZHRoO1xuXHRcdGFyci5oZWlnaHQgPSBhcnIubGluZUhlaWdodCAqIGFyci5sZW5ndGg7XG5cdFx0cmV0dXJuIGFycjtcblx0fSwgZnVuY3Rpb24oc3RyLCBtYXhXaWR0aCwgZm9udFNpemUsIGZvbnRGYW1pbHksIGJvbGQpIHsgcmV0dXJuIHN0ciArICc7JyArIG1heFdpZHRoICsgJzsnICsgZm9udFNpemUgKyAnOycgKyBmb250RmFtaWx5ICsgJzsnICsgYm9sZDsgfSk7XG5cblx0LyoqXG5cdCAqICBHZXQgdGhlIHZpZXcgaW5mb3JtYXRpb24gZm9yIGhvdyB0byBkaXNwbGF5IHRoZSBsYWJlbC5cblx0ICogQHBhcmFtIGxhYmVsIFRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBkaXNwbGF5ZWRcblx0ICogQHBhcmFtIGNvbnRhaW5lcldpZHRoIFRoZSB3aWR0aCBvZiB0aGUgcGFyZW50IGNvbnRhaW5lci5cblx0ICogQHBhcmFtIGNvbnRhaW5lckhlaWdodCBUaGUgaGVpZ2h0IG9mIHRoZSBwYXJlbnQgY29udGFpbmVyLlxuXHQgKiBAcGFyYW0gbGFiZWxDb25maWcgVGhlIGNvbmZpZ3VyYXRpb24gb24gaG93IHRvIGRpc3BsYXkgbGFiZWwuIEl0IHNob3VsZCBiZSBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIHBhcmFtZXRlcnM6XG5cdCAqIHtcblx0ICogICAgICBmb250U2l6ZSwgZm9udEZhbWlseSwgZm9udFN0eWxlLCBwYWRkaW5nLFxuXHQgKiAgICAgIGFsaWduOiBjYW4gYmUgZWl0aGVyIFwibGVmdFwiLCBcImNlbnRlclwiIG9yIFwicmlnaHRcIixcblx0ICogICAgICB3aWR0aDogdGhlIG1heGltdW0gd2lkdGggb2YgdGhlIGxhYmVsLiBpZiBsZXNzIHRoYW4gMSwgdGhlbiBpcyB0cmVhdGVkIGFzIHBlcmNlbnRhZ2UuIElmIDAsIG5vIHdyYXBwaW5nIHdpbGwgb2NjdXIsXG5cdCAqICAgICAgaGVpZ2h0LFxuXHQgKiAgICAgIGdlb21ldHJ5XG5cdCAqIH1cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRmdW5jdGlvbiBnZXRMYWJlbEJveChsYWJlbCwgbGFiZWxDb25maWcsIGNvbnRhaW5lcldpZHRoLCBjb250YWluZXJIZWlnaHQpIHtcblx0XHRyZXR1cm4gX2dldExhYmVsQm94LmNhbGwodGhpcywgbGFiZWwsIGxhYmVsQ29uZmlnLCB7d2lkdGg6IGNvbnRhaW5lcldpZHRoLCBoZWlnaHQ6IGNvbnRhaW5lckhlaWdodH0pO1xuXHR9XG5cblx0ZnVuY3Rpb24gZ2V0TGFiZWxCb3hGb3JMaW5rKGxhYmVsLCBsYWJlbENvbmZpZywgbGluaykge1xuXHRcdHJldHVybiBfZ2V0TGFiZWxCb3guY2FsbCh0aGlzLCBsYWJlbCwgbGFiZWxDb25maWcsIGxpbmspO1xuXHR9XG5cblx0ZnVuY3Rpb24gX2dldExhYmVsQm94KGxhYmVsLCBsYWJlbENvbmZpZyA9IHt9LCBjb250ZXh0KSB7XG5cdFx0bGFiZWxDb25maWcgPSBfLmRlZmF1bHRzRGVlcChsYWJlbENvbmZpZywgZGVmYXVsdENvbmZpZyk7XG5cdFx0bGV0IGZvbnRTaXplID0gbGFiZWxDb25maWcuZm9udFNpemU7XG5cdFx0bGV0IGZvbnRGYW1pbHkgPSBsYWJlbENvbmZpZy5mb250RmFtaWx5O1xuXHRcdGxldCBmb250U3R5bGUgPSBsYWJlbENvbmZpZy5mb250U3R5bGU7XG5cdFx0bGV0IGJvbGQgPSAoZm9udFN0eWxlICYgRk9OVF9CT0xEKSA9PSBGT05UX0JPTEQ7XG5cdFx0bGV0IHBhZGRpbmcgPSBsYWJlbENvbmZpZy5wYWRkaW5nO1xuXHRcdGxldCBsaW5lUGFkZGluZyA9IGxhYmVsQ29uZmlnLmxpbmVQYWRkaW5nO1xuXHRcdGxldCBhbGlnbiA9IGxhYmVsQ29uZmlnLmFsaWduO1xuXG5cdFx0bGV0IHcgPSBsYWJlbENvbmZpZy53aWR0aCwgaCA9IGxhYmVsQ29uZmlnLmhlaWdodDtcblx0XHRpZiAoY29udGV4dC53aWR0aCkge1xuXHRcdFx0dyA9IHcgPD0gNSA/IGNvbnRleHQud2lkdGggKiB3IDogdztcblx0XHRcdGggPSBoIDw9IDUgPyBjb250ZXh0LmhlaWdodCAqIGggOiBoO1xuXHRcdH1cblx0XHR3IC09IDIgKiBwYWRkaW5nO1xuXHRcdGggLT0gMiAqIHBhZGRpbmc7XG5cdFx0dyA9IE1hdGgubWF4KDAsIHcpO1xuXHRcdGggPSBNYXRoLm1heCgwLCBoKTtcblxuXHRcdGxldCBnZW9tZXRyeSA9IF8uY2xvbmUobGFiZWxDb25maWcuZ2VvbWV0cnkpO1xuXHRcdGxldCB3cmFwcGVkTGFiZWwgPSB0aGlzLndyYXAobGFiZWwsIHcsIGZvbnRTaXplLCBmb250RmFtaWx5LCBib2xkKTtcblx0XHRnZW9tZXRyeS53aWR0aCA9IHdyYXBwZWRMYWJlbC53aWR0aCArIDIgKiBwYWRkaW5nO1xuXHRcdGdlb21ldHJ5LmhlaWdodCA9IHdyYXBwZWRMYWJlbC5oZWlnaHQgKyAyICogcGFkZGluZyArICh3cmFwcGVkTGFiZWwubGVuZ3RoIC0gMSkgKiBsaW5lUGFkZGluZztcblx0XHRsZXQgYW5jaG9yID0gXCJzdGFydFwiLCBkeCA9IDAsIHNldEFuY2hvclggPSAhXy5oYXMoZ2VvbWV0cnksIFwiYW5jaG9yWFwiKTtcblx0XHRzd2l0Y2ggKGFsaWduKSB7XG5cdFx0XHRjYXNlIFwiY2VudGVyXCI6XG5cdFx0XHRcdGFuY2hvciA9IFwibWlkZGxlXCI7XG5cdFx0XHRcdGlmIChzZXRBbmNob3JYKSBnZW9tZXRyeS5hbmNob3JYID0gMDtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlIFwicmlnaHRcIjpcblx0XHRcdFx0YW5jaG9yID0gXCJlbmRcIjtcblx0XHRcdFx0ZHggPSB3cmFwcGVkTGFiZWwud2lkdGgvMjtcblx0XHRcdFx0aWYgKHNldEFuY2hvclgpIGdlb21ldHJ5LmFuY2hvclggPSAtMC41O1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJsZWZ0XCI6XG5cdFx0XHRcdGR4ID0gLXdyYXBwZWRMYWJlbC53aWR0aC8yO1xuXHRcdFx0XHRpZiAoc2V0QW5jaG9yWCkgZ2VvbWV0cnkuYW5jaG9yWCA9IDAuNTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdGxldCBwb3M7XG5cdFx0aWYgKGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbilcblx0XHRcdHBvcyA9IGNvbnRleHQuZ2V0UmVsYXRpdmVQb3NpdGlvbihnZW9tZXRyeSk7XG5cdFx0ZWxzZVxuXHRcdFx0cG9zID0gVXRpbHMuZ2V0UmVsYXRpdmVQb3NpdGlvbih7d2lkdGg6IGNvbnRleHQud2lkdGgsIGhlaWdodDogY29udGV4dC5oZWlnaHR9LCBnZW9tZXRyeSk7XG5cblx0XHRsZXQgYm91bmRzID0gbmV3IFJlY3RhbmdsZShwb3NbMF0sIHBvc1sxXSwgZ2VvbWV0cnkud2lkdGgsIGdlb21ldHJ5LmhlaWdodCk7XG5cdFx0Ly8gdGhlIHBpdm90IGlzIHRoZSBjZW50ZXIgb2Ygcm90YXRpb24gd2hlbiB0aGUgbGFiZWwgaGFzIGEgcm90YXRpb24gc3BlY2lmaWVkLlxuXHRcdGxldCBwaXZvdCA9IGFsaWduID09ICdjZW50ZXInID8gWzAsIDBdIDogKGFsaWduID09ICdsZWZ0JyA/IFstd3JhcHBlZExhYmVsLndpZHRoLzIsIDBdIDogW3dyYXBwZWRMYWJlbC53aWR0aC8yLCAwXSk7XG5cblx0XHQvLyB0aGUgbWF4aW11bSBib3VuZHMgZm9yIHRoZSBsYWJlbCwgdXNlZCB0byBwb3NpdGlvbiBpbmxpbmUgZWRpdG9yXG5cdFx0Z2VvbWV0cnkud2lkdGggPSBNYXRoLm1heCh3ICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LndpZHRoKTtcblx0XHRnZW9tZXRyeS5oZWlnaHQgPSBNYXRoLm1heChoICsgMiAqIHBhZGRpbmcsIGdlb21ldHJ5LmhlaWdodCk7XG5cblx0XHRpZiAoY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKVxuXHRcdFx0cG9zID0gY29udGV4dC5nZXRSZWxhdGl2ZVBvc2l0aW9uKGdlb21ldHJ5KTtcblx0XHRlbHNlXG5cdFx0XHRwb3MgPSBVdGlscy5nZXRSZWxhdGl2ZVBvc2l0aW9uKHt3aWR0aDogY29udGV4dC53aWR0aCwgaGVpZ2h0OiBjb250ZXh0LmhlaWdodH0sIGdlb21ldHJ5KTtcblxuXHRcdGxldCBtYXhCb3VuZHMgPSBuZXcgUmVjdGFuZ2xlKHBvc1swXSwgcG9zWzFdLCBnZW9tZXRyeS53aWR0aCwgZ2VvbWV0cnkuaGVpZ2h0KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0Y29uZmlnOiBsYWJlbENvbmZpZywgbGFiZWw6IHdyYXBwZWRMYWJlbCwgX2xhYmVsOiBsYWJlbCxcblx0XHRcdGJvbGQsIHVuZGVybGluZTogZm9udFN0eWxlICYgRk9OVF9VTkRFUkxJTkUsIGl0YWxpYzogZm9udFN0eWxlICYgRk9OVF9JVEFMSUMsIHNoYWRvdzogZm9udFN0eWxlICYgRk9OVF9TSEFET1csXG5cdFx0XHRkeCwgZHk6IC1nZW9tZXRyeS5oZWlnaHQvMiArIHBhZGRpbmcgKyB3cmFwcGVkTGFiZWwubGluZUhlaWdodCAtIHdyYXBwZWRMYWJlbC5iYXNlbGluZSwgYW5jaG9yLCBsaW5lSGVpZ2h0OiB3cmFwcGVkTGFiZWwubGluZUhlaWdodCArIGxpbmVQYWRkaW5nLFxuXHRcdFx0cGl2b3QsIGJvdW5kcywgbWF4Qm91bmRzXG5cdFx0fTtcblx0fVxuXG5cdGZ1bmN0aW9uIHJlbmRlcih2aWV3LCBib3gpIHtcblx0XHRyZXR1cm4gdmlldy5yZW5kZXJMYWJlbChib3gpO1xuXHR9XG5cblx0bGV0IGVkaXRvciA9IHtcblx0XHRzdGFydDogZnVuY3Rpb24oa2V5LCBjb250YWluZXIsIGJveCwgcmVmRWwsIHRleHRFbCwgc2NhbGUgPSAxLjAsIHNpbmdsZUxpbmUgPSB0cnVlKSB7XG5cdFx0XHRpZiAodGhpcy5pbnB1dCkge1xuXHRcdFx0XHRpZiAodGhpcy5rZXkgIT0ga2V5KSB7XG5cdFx0XHRcdFx0Ly8gbmVlZCB0byBjbG9zZSB0aGUgZXhpc3RpbmcgZWRpdG9yIGZpcnN0XG5cdFx0XHRcdFx0dGhpcy5zdG9wKCk7XG5cdFx0XHRcdH0gZWxzZVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciB0YWcgPSBzaW5nbGVMaW5lID8gJ2lucHV0JyA6ICd0ZXh0YXJlYSc7XG5cdFx0XHR0aGlzLmlucHV0ID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCh0YWcsIHtpZDpcImlubGluZUVkaXRvclwiLCB1bnNlbGVjdGFibGU6XCJvZmZcIn0sIHtwb3NpdGlvbjpcImFic29sdXRlXCIsIG92ZXJmbG93OlwiaGlkZGVuXCIsIHBhZGRpbmc6XCIwcHhcIiwgbWFyZ2luOlwiMHB4XCIsIGJvcmRlcjpcInRyYW5zcGFyZW50XCJ9KTtcblx0XHRcdGlmIChzaW5nbGVMaW5lKSB7XG5cdFx0XHRcdEV2ZW50cy5vbih0aGlzLmlucHV0LCAna2V5ZG93biBrZXl1cCcsIChldmVudCkgPT4ge1xuXHRcdFx0XHRcdGlmIChldmVudC5rZXlDb2RlID09IDEzKSB7XG5cdFx0XHRcdFx0XHRFdmVudHMub2ZmKHRoaXMuaW5wdXQsICdrZXlkb3duIGtleXVwJyk7XG5cdFx0XHRcdFx0XHR0aGlzLnN0b3AoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuaW5wdXQpO1xuXG5cdFx0XHR0aGlzLmtleSA9IGtleTtcblx0XHRcdHRoaXMuYm94ID0gYm94O1xuXHRcdFx0dGhpcy5yZWZFbCA9IHJlZkVsO1xuXHRcdFx0dGhpcy50ZXh0RWwgPSB0ZXh0RWw7XG5cblx0XHRcdGxldCBsYWJlbENvbmZpZyA9IGJveC5jb25maWc7XG5cdFx0XHRsZXQgbWF4Qm91bmRzID0gbmV3IFJlY3RhbmdsZShib3gubWF4Qm91bmRzLngsIGJveC5tYXhCb3VuZHMueSwgYm94Lm1heEJvdW5kcy53aWR0aCAqIHNjYWxlLCBib3gubWF4Qm91bmRzLmhlaWdodCAqIHNjYWxlKTtcblx0XHRcdGxldCBwb3MgPSBEb21VdGlscy5nZXRDZW50ZXJQb3NpdGlvbihyZWZFbCwgY29udGFpbmVyKTtcblx0XHRcdHBvcyA9IFtwb3NbMF0gKyBtYXhCb3VuZHMubGVmdCwgcG9zWzFdICsgbWF4Qm91bmRzLnRvcF07XG5cblx0XHRcdGlmICh0ZXh0RWwpXG5cdFx0XHRcdHRleHRFbC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cblx0XHRcdERvbVV0aWxzLnNldEVsZW1lbnQodGhpcy5pbnB1dCwgbnVsbCwge1xuXHRcdFx0XHR2aXNpYmlsaXR5OiAndmlzaWJsZScsXG5cdFx0XHRcdGxlZnQ6IHBvc1swXSArIFwicHhcIixcblx0XHRcdFx0dG9wOiBwb3NbMV0gKyBcInB4XCIsXG5cdFx0XHRcdHdpZHRoOiBtYXhCb3VuZHMud2lkdGggKyAncHgnLFxuXHRcdFx0XHRoZWlnaHQ6IG1heEJvdW5kcy5oZWlnaHQgKyAncHgnLFxuXHRcdFx0XHRcImZvbnQtZmFtaWx5XCI6IGxhYmVsQ29uZmlnLmZvbnRGYW1pbHksXG5cdFx0XHRcdFwiZm9udC1zaXplXCI6IChsYWJlbENvbmZpZy5mb250U2l6ZSAqIHNjYWxlKSArICdweCcsXG5cdFx0XHRcdFwiZm9udC13ZWlnaHRcIjogKGxhYmVsQ29uZmlnLmZvbnRTdHlsZSAmIEZPTlRfQk9MRCkgPT0gRk9OVF9CT0xEID8gJ2JvbGQnIDogJ25vcm1hbCdcblx0XHRcdFx0LypcImNvbG9yXCI6IGxhYmVsQ29uZmlnLmZvbnRDb2xvciovXG5cdFx0XHR9KTtcblxuXHRcdFx0dGhpcy5pbnB1dC52YWx1ZSA9IGJveC5fbGFiZWw7XG5cdFx0XHR0aGlzLmlucHV0LmZvY3VzKCk7XG5cdFx0XHR0aGlzLmlucHV0LnNlbGVjdCgpO1xuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdGFydCcsIFt0aGlzLmtleV0pO1xuXHRcdH0sXG5cblx0XHRzdG9wOiBmdW5jdGlvbihjYW5jZWwpIHtcblx0XHRcdGlmICghdGhpcy5pbnB1dCkgcmV0dXJuO1xuXG5cdFx0XHRjYW5jZWwgPSBjYW5jZWwgfHwgZmFsc2U7XG5cdFx0XHRpZiAodGhpcy50ZXh0RWwpXG5cdFx0XHRcdHRoaXMudGV4dEVsLnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXG5cdFx0XHRpZiAoIWNhbmNlbClcblx0XHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci51cGRhdGUnLCBbdGhpcy5rZXksIHRoaXMuaW5wdXQudmFsdWVdKTtcblxuXHRcdFx0RXZlbnRzLmZpcmUodGhpcywgJ2VkaXRvci5zdG9wJywgW3RoaXMua2V5XSk7XG5cblx0XHRcdC8vIHJlbW92ZSB0aGUgaW5wdXRcblx0XHRcdHRoaXMuaW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0KTtcblx0XHRcdGRlbGV0ZSB0aGlzLmlucHV0O1xuXHRcdFx0ZGVsZXRlIHRoaXMua2V5O1xuXHRcdFx0ZGVsZXRlIHRoaXMuYm94O1xuXHRcdFx0ZGVsZXRlIHRoaXMucmVmRWw7XG5cdFx0XHRkZWxldGUgdGhpcy50ZXh0RWw7XG5cdFx0fVxuXHR9O1xuXG5cdHJldHVybiB7XG5cdFx0Rk9OVF9CT0xELFxuXHRcdEZPTlRfSVRBTElDLFxuXHRcdEZPTlRfVU5ERVJMSU5FLFxuXHRcdEZPTlRfU0hBRE9XLFxuXHRcdGdldFN0cmluZ1NpemUsXG5cdFx0d3JhcCxcblx0XHRnZXRMYWJlbEJveCxcblx0XHRnZXRMYWJlbEJveEZvckxpbmssXG5cdFx0cmVuZGVyLFxuXHRcdGVkaXRvclxuXHR9O1xufSkoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3ZpZXcvTGFiZWwuanNcbiAqKi8iLCJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgQ2VsbCBmcm9tIFwiLi9DZWxsXCI7XG5pbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBMaW5rIGZyb20gXCIuLi9nZW9tZXRyeS9MaW5rXCI7XG5pbXBvcnQgTGFiZWwgZnJvbSBcIi4uL3ZpZXcvTGFiZWxcIjtcbmltcG9ydCBDYWNoZSBmcm9tIFwiLi4vdXRpbC9DYWNoZVwiO1xuXG5jbGFzcyBFZGdlIGV4dGVuZHMgQ2VsbCB7XG5cdGNvbnN0cnVjdG9yKGdyYXBoLCBjb25maWcgPSB7fSwgc291cmNlLCB0YXJnZXQpIHtcblx0XHRpZiAoIWNvbmZpZy5pZCkgY29uZmlnLmlkID0gXy51bmlxdWVJZCgnRScpO1xuXHRcdHN1cGVyKGdyYXBoLCBjb25maWcpO1xuXG5cdFx0dGhpcy5zb3VyY2UgPSB0aGlzLnRhcmdldCA9IG51bGw7XG5cdFx0dGhpcy5zZXRTb3VyY2Uoc291cmNlLCBjb25maWcuc291cmNlUG9zKTtcblx0XHR0aGlzLnNldFRhcmdldCh0YXJnZXQsIGNvbmZpZy50YXJnZXRQb3MpO1xuXHR9XG5cblx0c2V0U291cmNlKG5vZGUsIHBvcykge1xuXHRcdHRoaXMuc2V0VGVybWluYWwobm9kZSwgcG9zLCAnc291cmNlJyk7XG5cdH1cblxuXHRzZXRUYXJnZXQobm9kZSwgcG9zKSB7XG5cdFx0dGhpcy5zZXRUZXJtaW5hbChub2RlLCBwb3MsICd0YXJnZXQnKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBJbnRlcm5hbCBtZXRob2RzIHRvIHNldCBlaXRoZXIgdGhlIHNvdXJjZSBvciB0YXJnZXRcblx0ICovXG5cdCBzZXRUZXJtaW5hbChub2RlLCBwb3MsIGRpcikge1xuXHRcdHZhciBlbmQgPSBkaXIgPT0gJ3NvdXJjZScgPyB0aGlzLnNvdXJjZSA6IHRoaXMudGFyZ2V0O1xuXHRcdGlmIChlbmQgPT0gbm9kZSkge1xuXHRcdFx0Ly8gc2ltcGx5IGNoYW5nZSB0aGUgcG9zaXRpb24gb2YgdGhlIGVkZ2UuXG5cdFx0XHRpZiAobm9kZSlcblx0XHRcdFx0bm9kZS5zZXRFZGdlQXQodGhpcywgcG9zKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKGVuZCkge1xuXHRcdFx0XHQvLyBmaXJzdCByZW1vdmUgdGhlIGVkZ2UgZnJvbSB0aGUgY3VycmVudCBlbmRcblx0XHRcdFx0ZW5kLnJlbW92ZUVkZ2UodGhpcyk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChub2RlKSB7XG5cdFx0XHRcdGlmIChkaXIgPT0gJ3NvdXJjZScpXG5cdFx0XHRcdFx0bm9kZS5hZGRPdXRFZGdlKHRoaXMsIHBvcyk7XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHRub2RlLmFkZEluRWRnZSh0aGlzLCBwb3MpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGRpciA9PSAnc291cmNlJylcblx0XHRcdFx0dGhpcy5zb3VyY2UgPSBub2RlO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHR0aGlzLnRhcmdldCA9IG5vZGU7XG5cdFx0XHQvL3RoaXMuY2xlYXJQb2ludHMoKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMYWJlbEJveChrZXkpIHtcblx0XHR2YXIgbGFiZWwgPSB0aGlzLnByb3AoJ2xhYmVsJyk7XG5cdFx0aWYgKGxhYmVsKVxuXHRcdFx0cmV0dXJuIExhYmVsLmdldExhYmVsQm94Rm9yTGluayhsYWJlbCwgdGhpcy52aWV3UHJvcChrZXksICdsYWJlbENvbmZpZycpLCB0aGlzLmdldFNoYXBlKGtleSkpO1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybiBhIHBhaXIgb2YgcG9pbnRzIGFzIHJlZmVyZW5jZSB0byB0aGUgY2FsY3VsYXRpb24gb2Ygc3RhcnQgYW5kIGVuZCBwb2ludHMuXG5cdCAqL1xuXHRnZXRSZWZlcmVuY2VQb2ludHMoa2V5KSB7XG5cdFx0bGV0IHB0cyA9IFtdO1xuXHRcdGlmICh0aGlzLnNvdXJjZSlcblx0XHRcdHB0cy5wdXNoKHRoaXMuc291cmNlLmdldFNoYXBlKGtleSkuY2VudGVyKTtcblx0XHRlbHNlXG5cdFx0XHRwdHMucHVzaCh0aGlzLnZpZXdQcm9wKGtleSwgJ3N0YXJ0JykpO1xuXG5cdFx0aWYgKHRoaXMudGFyZ2V0KVxuXHRcdFx0cHRzLnB1c2godGhpcy50YXJnZXQuZ2V0U2hhcGUoa2V5KS5jZW50ZXIpO1xuXHRcdGVsc2Vcblx0XHRcdHB0cy5wdXNoKHRoaXMudmlld1Byb3Aoa2V5LCAnZW5kJykpO1xuXG5cdFx0cmV0dXJuIHB0cztcblx0fVxuXG5cdGdldFRlcm1pbmFsVmlzdWFsKGtleSwgb3J0aG9nb25hbCkge1xuXHRcdGxldCByZWZQdHMgPSB0aGlzLmdldFJlZmVyZW5jZVBvaW50cyhrZXkpO1xuXHRcdGxldCB0ZXJtaW5hbHMgPSBbXTtcblxuXHRcdGxldCBnZXRCb3VuZCA9IGZ1bmN0aW9uKHB0KSB7XG5cdFx0XHRyZXR1cm4gbmV3IFJlY3RhbmdsZShwdC54LCBwdC55LCAzLCAzKTtcblx0XHR9O1xuXG5cdFx0aWYgKHRoaXMuc291cmNlKSB7XG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh0aGlzLnNvdXJjZS5nZXRQb3J0KGtleSwgdGhpcy5wcm9wKCdzb3VyY2VQb3J0JyksIHJlZlB0c1sxXSwgb3J0aG9nb25hbCkpO1xuXHRcdH0gZWxzZVxuXHRcdFx0dGVybWluYWxzLnB1c2goe3BvaW50OiByZWZQdHNbMF0sIGRpcmVjdGlvbjogUmVjdGFuZ2xlLmdldERpcmVjdGlvbihnZXRCb3VuZChyZWZQdHNbMF0pLCByZWZQdHNbMV0sIHRydWUpfSk7XG5cblx0XHRpZiAodGhpcy50YXJnZXQpIHtcblx0XHRcdHRlcm1pbmFscy5wdXNoKHRoaXMudGFyZ2V0LmdldFBvcnQoa2V5LCB0aGlzLnByb3AoJ3RhcmdldFBvcnQnKSwgcmVmUHRzWzBdLCBvcnRob2dvbmFsKSk7XG5cdFx0fSBlbHNlXG5cdFx0XHR0ZXJtaW5hbHMucHVzaCh7cG9pbnQ6IHJlZlB0c1sxXSwgZGlyZWN0aW9uOiBSZWN0YW5nbGUuZ2V0RGlyZWN0aW9uKGdldEJvdW5kKHJlZlB0c1sxXSksIHJlZlB0c1swXSwgdHJ1ZSl9KTtcblx0XHRyZXR1cm4gdGVybWluYWxzO1xuXHR9XG5cblx0Z2V0U2hhcGUoa2V5KSB7XG5cdFx0bGV0IHNoYXBlID0gQ2FjaGUuZ2V0KHRoaXMuaWQgKyBcIi5zaGFwZVwiLCBrZXkpO1xuXHRcdGlmIChzaGFwZSkgcmV0dXJuIHNoYXBlO1xuXG5cdFx0bGV0IGNvbmZpZyA9IHRoaXMudmlld1Byb3Aoa2V5LCAnc2hhcGUnKTtcblx0XHRzaGFwZSA9IExpbmsuZ2V0TGluayh0aGlzLmdldFRlcm1pbmFsVmlzdWFsKGtleSwgY29uZmlnLm9ydGhvZ29uYWwpLCBjb25maWcsIHRoaXMucHJvcCgnc3RhcnRNYXJrZXInKSwgdGhpcy5wcm9wKCdlbmRNYXJrZXInKSk7XG5cdFx0Q2FjaGUuc2V0KHRoaXMuaWQgKyAnLnNoYXBlJywgc2hhcGUsIGtleSk7XG5cdFx0cmV0dXJuIHNoYXBlO1xuXHR9XG5cblx0dG9TdHJpbmcoKSB7XG5cdFx0cmV0dXJuICdFZGdlOnsnICsgKCF0aGlzLnNvdXJjZSA/ICdudWxsJyA6IHRoaXMuc291cmNlLmlkKSArICctLScgKyAoIXRoaXMudGFyZ2V0ID8gJ251bGwnIDogdGhpcy50YXJnZXQuaWQpICsgJ30nO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0dGhpcy5zZXRTb3VyY2UobnVsbCk7XG5cdFx0dGhpcy5zZXRUYXJnZXQobnVsbCk7XG5cdH1cbn1cbkVkZ2UubmFtZXNwYWNlID0gXCJFZGdlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBFZGdlO1xuXG4vKlxuXG5FZGdlLnByb3RvdHlwZS5pc1Zpc2libGUgPSBmdW5jdGlvbigpIHtcblx0aWYgKHRoaXMuZ3JhcGguZ2V0UHJvcGVydHkoXCJhbGxvd0RhbmdsaW5nRWRnZXNcIikpIHtcblx0XHRyZXR1cm4gKHRoaXMuc291cmNlID8gdGhpcy5zb3VyY2UuaXNWaXNpYmxlKCkgOiB0cnVlKSAmJiAodGhpcy50YXJnZXQgPyB0aGlzLnRhcmdldC5pc1Zpc2libGUoKSA6IHRydWUpICYmIHRoaXMuZ2V0UHJvcGVydHkoXCJ2aXNpYmxlXCIpO1xuXHR9IGVsc2Vcblx0XHRyZXR1cm4gdGhpcy5zb3VyY2UgJiYgdGhpcy50YXJnZXQgJiYgdGhpcy5nZXRQcm9wZXJ0eSgndmlzaWJsZScpICYmIHRoaXMuc291cmNlLmlzVmlzaWJsZSgpICYmIHRoaXMudGFyZ2V0LmlzVmlzaWJsZSgpO1xufTtcblxuKi9cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2dyYXBoL0VkZ2UuanNcbiAqKi8iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcblxubGV0IHJlZ2lzdHJ5ID0ge307XG5cbmxldCBNYXJrZXIgPSAoZnVuY3Rpb24oKSB7XG5cblx0LyoqIEJlZ2luIFN0YW5kYXJkIE1hcmtlciBUeXBlICoqL1xuXHRmdW5jdGlvbiBhcnJvdyhzaXplLCBzb3VyY2UsIHN0eWxlcykge1xuXHRcdHZhciBzaWduID0gc291cmNlID8gLTEgOiAxO1xuXHRcdHZhciBtYXJrZXIgPSB7XG5cdFx0XHR2aWV3Qm94OiBuZXcgUmVjdGFuZ2xlKC01LCAtNSwgMTAsIDEwKSxcblx0XHRcdHNpemU6IHNpemUsXG5cdFx0XHRyZWY6IFs0KnNpZ24sIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSB7XG5cdFx0XHRuYW1lOiAnUG9seWdvbicsXG5cdFx0XHRwb2ludHM6IFtbLTIqc2lnbiwgMF0sIFstNCpzaWduLCA0XSwgWzQqc2lnbiwgMF0sIFstNCpzaWduLCAtNF1dXG5cdFx0fTtcblx0XHRyZXR1cm4gbWFya2VyO1xuXHR9XG5cblx0ZnVuY3Rpb24gdHJpYW5nbGUoc2l6ZSwgc291cmNlLCBzdHlsZXMpIHtcblx0XHR2YXIgc2lnbiA9IHNvdXJjZSA/IC0xIDogMTtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtNSwgLTUsIDEwLCAxMCksXG5cdFx0XHRzaXplOiBzaXplLFxuXHRcdFx0cmVmOiBbNCpzaWduLCAwXSxcblx0XHRcdGZpbGw6IHN0eWxlcy5jb2xvclxuXHRcdH07XG5cdFx0bWFya2VyLnNoYXBlID0ge1xuXHRcdFx0bmFtZTogJ1BvbHlnb24nLFxuXHRcdFx0cG9pbnRzOiBbWy01KnNpZ24sIC01XSwgWy01KnNpZ24sIDVdLCBbNCpzaWduLCAwXV1cblx0XHR9O1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBvdmFsKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHIgPSBzaXplIC8gMjtcblx0XHR2YXIgbWFya2VyID0ge1xuXHRcdFx0dmlld0JveDogbmV3IFJlY3RhbmdsZSgtciwgLXIsIHNpemUsIHNpemUpLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzAsIDBdLFxuXHRcdFx0ZmlsbDogc3R5bGVzLmNvbG9yXG5cdFx0fTtcblx0XHRtYXJrZXIuc2hhcGUgPSAnPGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCInICsgciArICdcIiByeT1cIicgKyByICsgJ1wiPjwvZWxsaXBzZT4nO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblxuXHRmdW5jdGlvbiBkaWFtb25kKHNpemUsIHNvdXJjZSwgc3R5bGVzKSB7XG5cdFx0dmFyIHNpZ24gPSBzb3VyY2UgPyAtMSA6IDE7XG5cdFx0dmFyIG1hcmtlciA9IHtcblx0XHRcdHZpZXdCb3g6IG5ldyBSZWN0YW5nbGUoLTUsIC01LCAxMCwgMTApLFxuXHRcdFx0c2l6ZTogc2l6ZSxcblx0XHRcdHJlZjogWzQqc2lnbiwgMF0sXG5cdFx0XHRmaWxsOiBzdHlsZXMuY29sb3Jcblx0XHR9O1xuXHRcdG1hcmtlci5zaGFwZSA9ICcnO1xuXHRcdHJldHVybiBtYXJrZXI7XG5cdH1cblx0LyoqIEVuZCBTdGFuZGFyZCBNYXJrZXIgVHlwZSAqKi9cblx0ZnVuY3Rpb24gZ2V0TWFya2VyKGNvbmZpZywgc291cmNlKSB7XG5cdFx0dmFyIGZhY3RvcnkgPSByZWdpc3RyeVtjb25maWcudHlwZV07XG5cdFx0dmFyIG1hcmtlciA9IGZhY3RvcnkoY29uZmlnLnNpemUsIHNvdXJjZSwgY29uZmlnKTtcblx0XHRtYXJrZXIuaWQgPSBjb25maWcuaWQ7XG5cdFx0cmV0dXJuIG1hcmtlcjtcblx0fVxuXG5cdHJlZ2lzdHJ5WydhcnJvdyddID0gYXJyb3c7XG5cdHJlZ2lzdHJ5Wyd0cmlhbmdsZSddID0gdHJpYW5nbGU7XG5cdHJlZ2lzdHJ5WydvdmFsJ10gPSBvdmFsO1xuXHRyZWdpc3RyeVsnZGlhbW9uZCddID0gZGlhbW9uZDtcblxuXHRyZXR1cm4ge1xuXHRcdHJlZ2lzdHJ5OiByZWdpc3RyeSxcblx0XHRnZXRNYXJrZXI6IGdldE1hcmtlclxuXHR9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgTWFya2VyO1xuXG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L01hcmtlci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBVdGlscyBmcm9tIFwiLi4vdXRpbC9VdGlsc1wiO1xuXG5jbGFzcyBMYXlvdXQge1xuXHRjb25zdHJ1Y3Rvcihjb25maWc9e30pIHtcblx0XHRpZiAoY29uZmlnLmhhc093blByb3BlcnR5KFwib3JpZW50YXRpb25cIikgJiYgXy5pc1N0cmluZyhjb25maWcub3JpZW50YXRpb24pKSB7XG5cdFx0XHRpZiAoY29uZmlnLm9yaWVudGF0aW9uLnRvVXBwZXJDYXNlKCkgPT0gXCJIT1JJWk9OVEFMXCIpXG5cdFx0XHRcdGNvbmZpZy5vcmllbnRhdGlvbiA9IExheW91dC5IT1JJWk9OVEFMO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRkZWxldGUgY29uZmlnLm9yaWVudGF0aW9uO1xuXHRcdH1cblx0XHRVdGlscy5pbml0Q29uZmlnKHRoaXMsIGNvbmZpZyk7XG5cdH1cblxuXHRsYXlvdXQocm9vdCwgYm91bmRzKSB7fVxuXHRyZXNldCgpIHt9XG5cdGRlc3Ryb3koKSB7fVxufVxuTGF5b3V0LlZFUlRJQ0FMID0gMDtcbkxheW91dC5IT1JJWk9OVEFMID0gMTtcblxuTGF5b3V0LkRFRkFVTFRTID0ge1xuXHRvcmllbnRhdGlvbjogTGF5b3V0LlZFUlRJQ0FMXG59O1xuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9sYXlvdXQvTGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi9MYXlvdXRcIjtcblxuY2xhc3MgRmxvd0xheW91dCBleHRlbmRzIExheW91dCB7XG5cdGxheW91dChyb290LCBib3VuZHMpIHtcblx0XHR2YXIgaXRlbXM7XG5cdFx0aWYgKCFyb290KVxuXHRcdFx0aXRlbXMgPSB0aGlzLm93bmVyLmNoaWxkTm9kZXM7XG5cdFx0ZWxzZSBpZiAoXy5pc0FycmF5KHJvb3QpKVxuXHRcdFx0aXRlbXMgPSByb290O1xuXHRcdGVsc2Vcblx0XHRcdGl0ZW1zID0gcm9vdC5nZXRMaW5rZWROb2RlcygndGFyZ2V0Jyk7XG5cdFx0aWYgKCFpdGVtcyB8fCBpdGVtcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xuXG5cdFx0dmFyIHggPSAwLCB5ID0gMCwgaCA9IDAsIG5vZGU7XG5cdFx0dmFyIHAxID0gMCwgcDIgPSAwO1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdG5vZGUgPSBpdGVtc1tpXTtcblx0XHRcdGlmICh4ID4gMCAmJiB4ICsgdGhpcy5oZ2FwICsgbm9kZS5nZXRQcm9wZXJ0eShcIndpZHRoXCIpID4gYm91bmRzLndpZHRoKSB7XG5cdFx0XHRcdC8vIGNyZWF0ZSBuZXcgbGluZVxuXHRcdFx0XHR5ICs9IGggKyB0aGlzLnZnYXA7XG5cdFx0XHRcdHggPSAwO2ggPSAwO3AxID0gMDtwMisrO1xuXHRcdFx0fVxuXHRcdFx0bm9kZS5fZmxQb3MgPSBbcDEsIHAyXTtcblx0XHRcdG5vZGUubW92ZVRvKFtib3VuZHMueCArIHgsIGJvdW5kcy55ICsgeV0pO1xuXHRcdFx0eCArPSB0aGlzLmhnYXAgKyBub2RlLmdldFByb3BlcnR5KFwid2lkdGhcIik7XG5cdFx0XHRwMSsrO1xuXHRcdFx0aCA9IGggPCBub2RlLmdldFByb3BlcnR5KFwiaGVpZ2h0XCIpID8gbm9kZS5nZXRQcm9wZXJ0eShcImhlaWdodFwiKSA6IGg7XG5cdFx0fVxuXHRcdHRoaXMudHJpZ2dlcihuZXcgUmVjdGFuZ2xlKGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCB5ICsgaCkpO1xuXHR9XG59XG5cbkZsb3dMYXlvdXQuREVGQVVMVFMgPSB7XG5cdGhnYXA6IDEwLFxuXHR2Z2FwOiAxMFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmxvd0xheW91dDtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2xheW91dC9GbG93TGF5b3V0LmpzXG4gKiovIiwiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEV2ZW50cyBmcm9tIFwiYmVhblwiO1xuaW1wb3J0IFV0aWxzIGZyb20gXCIuLi91dGlsL1V0aWxzXCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2xheW91dC9MYXlvdXRcIjtcbmltcG9ydCBSZWN0YW5nbGUgZnJvbSBcIi4uL2dlb21ldHJ5L1JlY3RhbmdsZVwiO1xuaW1wb3J0IEV2ZW50RGlzcGF0Y2hlciBmcm9tIFwiLi4vZXZlbnQvRXZlbnREaXNwYXRjaGVyXCI7XG5pbXBvcnQgR3JhcGhCZWhhdmlvciBmcm9tIFwiLi4vYmVoYXZpb3IvR3JhcGhCZWhhdmlvclwiO1xuaW1wb3J0IFNlbGVjdGlvbkJlaGF2aW9yIGZyb20gXCIuLi9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvclwiO1xuaW1wb3J0IExhYmVsIGZyb20gXCIuL0xhYmVsXCI7XG5cbmNsYXNzIFJlbmRlcmVyIHtcblx0Y29uc3RydWN0b3IoaWQsIGNvbnRhaW5lciwgY29uZmlnID0ge30sIGdyYXBoID0gbnVsbCkge1xuXHRcdHRoaXMuaWQgPSBpZDtcblx0XHR0aGlzLmJveCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIHtpZDogdGhpcy5pZCwgdGFiaW5kZXg6IDAsIG5zOiAnZ3JhcGgnfSwge292ZXJmbG93OiBcImhpZGRlblwiLCB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiAncmVsYXRpdmUnfSk7XG5cdFx0Y29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuYm94KTtcblx0XHRpZiAoY29uZmlnLmxheW91dCkge1xuXHRcdFx0bGV0IGxheW91dENsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IoY29uZmlnLmxheW91dC5qc0NsYXNzLCBMYXlvdXQpO1xuXHRcdFx0dGhpcy5sYXlvdXQgPSBuZXcgbGF5b3V0Q2xhc3MoY29uZmlnLmxheW91dC5jb25maWcpO1xuXHRcdFx0ZGVsZXRlIGNvbmZpZy5sYXlvdXQ7XG5cdFx0fVxuXHRcdHRoaXMuY2xlYXIgPSB0cnVlO1xuXHRcdHRoaXMuX3RyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHR0aGlzLl9zY2FsZSA9IDEuMDtcblx0XHR0aGlzLmdyYXBoID0gZ3JhcGg7XG5cdFx0dGhpcy5kaXNwYXRjaGVyID0gbnVsbDtcblx0XHR0aGlzLmdyYXBoQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdHRoaXMubm9kZUJlaGF2aW9yID0gbnVsbDtcblx0XHR0aGlzLmVkZ2VCZWhhdmlvciA9IG51bGw7XG5cdFx0dGhpcy5jb25uZWN0aW9uQmVoYXZpb3IgPSBudWxsO1xuXHRcdFV0aWxzLmluaXRDb25maWcodGhpcywgY29uZmlnKTtcblxuXHRcdEV2ZW50cy5vbihMYWJlbC5lZGl0b3IsICdlZGl0b3IudXBkYXRlLionLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhrZXkgKyAnPScgKyB2YWx1ZSk7XG5cdFx0fSk7XG5cdH1cblxuXHRnZXQgZ3JhcGgoKSB7XG5cdFx0cmV0dXJuIHRoaXMuX2dyYXBoO1xuXHR9XG5cblx0c2V0IGdyYXBoKGdyYXBoKSB7XG5cdFx0dGhpcy5fZ3JhcGggPSBncmFwaDtcblx0XHRsZXQgcm9vdCA9IGdyYXBoLmN1cnJlbnRSb290O1xuXHRcdGlmIChyb290KSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGUgPSBbcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAneCcpIHx8IDAsIHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3knKSB8fCAwXTtcblx0XHRcdHRoaXMuX3NjYWxlID0gcm9vdC52aWV3UHJvcCh0aGlzLmlkLCAnc2NhbGUnKSB8fCAxLjA7XG5cdFx0fVxuXHR9XG5cblx0dmlld3BvcnQoc2NhbGVkLCB2aWV3cG9ydCkge1xuXHRcdGlmIChfLmlzVW5kZWZpbmVkKHNjYWxlZCkgfHwgXy5pc051bGwoc2NhbGVkKSkgc2NhbGVkID0gZmFsc2U7XG5cdFx0aWYgKCF2aWV3cG9ydCkge1xuXHRcdFx0dmFyIHZwID0gbmV3IFJlY3RhbmdsZSgwLCAwLCB0aGlzLmJveC5vZmZzZXRXaWR0aCwgdGhpcy5ib3gub2Zmc2V0SGVpZ2h0KTtcblx0XHRcdGlmIChzY2FsZWQpXG5cdFx0XHRcdHJldHVybiBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdnApO1xuXHRcdFx0cmV0dXJuIHZwO1xuXHRcdH1cblx0XHRpZiAoIXNjYWxlZCkgdmlld3BvcnQgPSBVdGlscy5zY2FsZSh0aGlzLnRyYW5zbGF0ZSwgdGhpcy5zY2FsZSwgdmlld3BvcnQpO1xuXHRcdHZhciB3ID0gdGhpcy5ib3gub2Zmc2V0V2lkdGg7XG5cdFx0dmFyIHNjYWxlID0gdyAvIHZpZXdwb3J0LndpZHRoO1xuXHRcdHRoaXMudHJhbnNmb3JtKC12aWV3cG9ydC54KnNjYWxlLCAtdmlld3BvcnQueSpzY2FsZSwgc2NhbGUpO1xuXHR9XG5cblx0Z2V0IHRyYW5zbGF0ZSgpIHsgcmV0dXJuIHRoaXMuX3RyYW5zbGF0ZTsgfVxuXHRzZXQgdHJhbnNsYXRlKHQpIHsgdGhpcy50cmFuc2Zvcm0odFswXSwgdFsxXSk7IH1cblx0Z2V0IHNjYWxlKCkgeyByZXR1cm4gdGhpcy5fc2NhbGU7IH1cblx0c2V0IHNjYWxlKGspIHtcblx0XHRzd2l0Y2ggKGspIHtcblx0XHRcdGNhc2UgXCJpblwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAqIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcIm91dFwiOlxuXHRcdFx0XHRrID0gdGhpcy5zY2FsZSAvIHRoaXMucHJvcChcInpvb21GYWN0b3JcIik7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0Y2FzZSBcImFjdHVhbFwiOlxuXHRcdFx0XHRrID0gMS4wO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdGNhc2UgXCJmaXRcIjpcblx0XHRcdFx0dmFyIGdyaWRTaXplID0gdGhpcy5wcm9wKFwiZ3JpZFNpemVcIikgKiAyO1xuXG5cdFx0XHRcdHZhciBnQm91bmRzID0gdGhpcy5nZXRCb3VuZHMoKTtcblx0XHRcdFx0dmFyIHZCb3VuZHMgPSB0aGlzLnZpZXdwb3J0KCk7XG5cblx0XHRcdFx0dkJvdW5kcy53aWR0aCAtPSBncmlkU2l6ZTtcblx0XHRcdFx0dkJvdW5kcy5oZWlnaHQgLT0gZ3JpZFNpemU7XG5cblx0XHRcdFx0LyogRG8gbm90IHpvb20gbW9yZSB0aGFuIGFjdHVhbCBpZiBncmFwaCBhbHJlYWR5IGZpdHMgaW50byB0aGUgYm91bmRzICovXG5cdFx0XHRcdGsgPSBNYXRoLm1pbigodkJvdW5kcy53aWR0aCAvIGdCb3VuZHMud2lkdGgpLCAodkJvdW5kcy5oZWlnaHQgL2dCb3VuZHMuaGVpZ2h0KSwgMS4wKTtcblxuXHRcdFx0XHQvL1RPRE86IEFkZCBjZW50ZXJpbmcgY29kZSBoZXJlIG9yIHRyaWdnZXIgYW4gZXZlbnQgZm9yIHRoYXRcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRpZiAoXy5pc1N0cmluZyhrKSkgayA9IHBhcnNlRmxvYXQoayk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdH1cblx0XHR0aGlzLnRyYW5zZm9ybShudWxsLCBudWxsLCBrKTtcblx0fVxuXG5cdHRyYW5zZm9ybSh4ID0gbnVsbCwgeSA9IG51bGwsIHNjYWxlID0gbnVsbCkge1xuXHRcdGxldCBncmFwaCA9IHRoaXMuZ3JhcGg7XG5cdFx0bGV0IHJvb3QgPSBncmFwaCA/IGdyYXBoLmN1cnJlbnRSb290IDogbnVsbDtcblx0XHRpZiAoIV8uaXNOdWxsKHgpKSB7XG5cdFx0XHR0aGlzLl90cmFuc2xhdGVbMF0gPSB4O1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3gnLCB4KTtcblx0XHR9XG5cdFx0aWYgKCFfLmlzTnVsbCh5KSkge1xuXHRcdFx0dGhpcy5fdHJhbnNsYXRlWzFdID0geTtcblx0XHRcdGlmIChyb290KVxuXHRcdFx0XHRyb290LnZpZXdQcm9wKHRoaXMuaWQsICd5JywgeSk7XG5cdFx0fVxuXHRcdGlmICghXy5pc051bGwoc2NhbGUpKSB7XG5cdFx0XHR0aGlzLl9zY2FsZSA9IHNjYWxlO1xuXHRcdFx0aWYgKHJvb3QpXG5cdFx0XHRcdHJvb3Qudmlld1Byb3AodGhpcy5pZCwgJ3NjYWxlJywgc2NhbGUpO1xuXHRcdFx0Ly8gc3luYyB0aGUgc2NhbGUgYmV0d2VlbiB0aGUgZGlzcGF0Y2hlciBhbmQgdGhlIGdyYXBoXG5cdFx0XHRsZXQgcyA9IHRoaXMuZGlzcGF0Y2hlci5zY2FsZTtcblx0XHRcdGlmIChzICE9IHNjYWxlKVxuXHRcdFx0XHR0aGlzLmRpc3BhdGNoZXIuc2NhbGUgPSBzY2FsZTtcblx0XHR9XG5cdFx0dGhpcy5yZWZyZXNoKCk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0aWYgKCF0aGlzLl9ncmFwaCkgcmV0dXJuIGZhbHNlO1xuXHRcdGlmICh0aGlzLmxheW91dClcblx0XHRcdHRoaXMubGF5b3V0LmxheW91dCh0aGlzLl9ncmFwaC5jdXJyZW50Um9vdCwgdGhpcy52aWV3cG9ydCgpKTtcblxuXHRcdHRoaXMuaW5pdGlhbGl6ZUJlaGF2aW9ycygpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuY29uc3RydWN0b3IucmVuZGVyTGFiZWwoYm94KTtcblx0fVxuXG5cdHJlbmRlckxpbmsoc2hhcGUpIHtcblx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3Rvci5yZW5kZXJMaW5rKHNoYXBlKTtcblx0fVxuXG5cdHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yLnJlbmRlck1hcmtlcnMobWFya2Vycyk7XG5cdH1cblxuXHRpbml0aWFsaXplQmVoYXZpb3JzKCkge1xuXHRcdC8vIGNyZWF0ZSB0aGUgZXZlbnQgZGlzcGF0Y2hlciBpZiBuZWNlc3NhcnkuXG5cdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlciA9IG5ldyBFdmVudERpc3BhdGNoZXIodGhpcy5ib3gsIFt0aGlzLnByb3AoJ21pblpvb20nKSwgdGhpcy5wcm9wKCdtYXhab29tJyldKTtcblx0XHRcdGxldCBqc0NsYXNzO1xuXHRcdFx0aWYgKHRoaXMucHJvcCgnZ3JhcGhCZWhhdmlvcicpKSB7XG5cdFx0XHRcdGpzQ2xhc3MgPSBVdGlscy5nZXRDb25zdHJ1Y3Rvcih0aGlzLnByb3AoJ2dyYXBoQmVoYXZpb3InKSk7XG5cdFx0XHRcdHRoaXMuZ3JhcGhCZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHRoaXMucHJvcCgnc2VsZWN0aW9uQmVoYXZpb3InKSkge1xuXHRcdFx0XHRqc0NsYXNzID0gVXRpbHMuZ2V0Q29uc3RydWN0b3IodGhpcy5wcm9wKCdzZWxlY3Rpb25CZWhhdmlvcicpKTtcblx0XHRcdFx0dGhpcy5zZWxlY3Rpb25CZWhhdmlvciA9IG5ldyBqc0NsYXNzKHRoaXMpO1xuXHRcdFx0fVxuXHRcdFx0Lyp0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoJ21vdXNldXAubm9kZS5sYWJlbCcsIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0bGV0IG5vZGUgPSB0aGlzLl9ncmFwaC5ub2Rlc1t0YXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpXTtcblx0XHRcdFx0aWYgKCF0aGlzLmRpc3BhdGNoZXIuZHJhZ2dpbmcgJiYgIW5vZGUuX2ZpcnN0U2VsZWN0aW9uKSB7XG5cdFx0XHRcdFx0TGFiZWwuX2RlbGF5RWRpdCA9IF8uZGVsYXkoKCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKExhYmVsLl9kZWxheUVkaXQpIHtcblx0XHRcdFx0XHRcdFx0ZGVsZXRlIExhYmVsLl9kZWxheUVkaXQ7XG5cdFx0XHRcdFx0XHRcdExhYmVsLmVkaXRvci5zdGFydChub2RlLmlkLCB0aGlzLmJveCwgbm9kZS5nZXRMYWJlbEJveCh0aGlzLmlkKSwgdGFyZ2V0LCBldmVudC5uc1RhcmdldCwgdGhpcy5zY2FsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSwgMjUwKTtcblx0XHRcdFx0fVxuXHRcdFx0fSwgdGhpcyk7XG5cdFx0XHR0aGlzLmRpc3BhdGNoZXIucmVnaXN0ZXIoWy9ebW91c2Vkb3duLywgL156b29tL10sIGZ1bmN0aW9uKHR5cGUsIG5zLCB0YXJnZXQsIHBvcywgZXZlbnQpIHtcblx0XHRcdFx0aWYgKCFEb21VdGlscy5ldmVudEZyb21JbnB1dChldmVudCkpIHtcblx0XHRcdFx0XHRMYWJlbC5lZGl0b3Iuc3RvcCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9LCB0aGlzKTsqL1xuXHRcdH1cblx0XHR0aGlzLmRpc3BhdGNoZXIuc3RhcnQoKTtcblx0fVxuXG5cdHJlZnJlc2goKSB7fVxuXG5cdC8qKlxuXHQgKiBHZXQgdGhlIHRlbXBsYXRlIGZvciB0aGUgc3BlY2lmaWVkIGtleS5cblx0ICogQHBhcmFtIGtleVxuXHQgKiBAcGFyYW0gY29uZmlnIGlmIHRoZSB0ZW1wbGF0ZSBpcyBhIGZ1bmN0aW9uLCB0aGlzIGNvbmZpZyB3aWxsIGJlIHBhc3NlZCBhcyB0aGUgYXJndW1lbnQuXG5cdCAqIEBwYXJhbSBwcmVwcm9jZXNzb3IgaWYgdGhlIHRlbXBsYXRlIGNvbnRhaW5zIHByZXByb3NzaW5nIGVsZW1lbnRzLCBzdWNoIGFzICN7c2hhcGV9LCB0aGUgcHJlcHJvY2Vzc29yIHdpbGwgYmVcblx0ICogdXNlZCB0byByZW5kZXIgdGhlbS5cblx0ICogQHJldHVybnMgeyp9XG5cdCAqL1xuXHRnZXRUZW1wbGF0ZShrZXksIGNvbmZpZywgcHJlcHJvY2Vzc29yKSB7XG5cdFx0dmFyIHQgPSB0aGlzLmNvbnN0cnVjdG9yLlRFTVBMQVRFU1trZXldO1xuXHRcdGlmICh0ICYmIF8uaXNGdW5jdGlvbih0KSkge1xuXHRcdFx0dCA9IHQoY29uZmlnKTtcblx0XHR9XG5cdFx0Ly8gY2hlY2sgaWYgdGhlcmUgYXJlIGFueSBwcmVwcm9jZXNzaW5nIHRhZ3MuXG5cdFx0aWYgKHByZXByb2Nlc3Nvcikge1xuXHRcdFx0dmFyIHBhcnRzID0gdC5tYXRjaCgvKCN7W14jXSp9KS9nKTtcblx0XHRcdHZhciBvYmogPSB7fTtcblx0XHRcdGZvciAobGV0IHBhcnQgaW4gcGFydHMpIHtcblx0XHRcdFx0cGFydCA9IHBhcnRzW3BhcnRdO1xuXHRcdFx0XHRwYXJ0ID0gcGFydC5zdWJzdHJpbmcoMiwgcGFydC5sZW5ndGggLTEpLnRyaW0oKTtcblx0XHRcdFx0b2JqW3BhcnRdID0gcHJlcHJvY2Vzc29yW18uY2FtZWxDYXNlKCdyZW5kZXIgJyArIHBhcnQpXSh0aGlzKTtcblx0XHRcdH1cblx0XHRcdHQgPSBfLnRlbXBsYXRlKHQsIHtpbnRlcnBvbGF0ZTogLyN7KFtcXHNcXFNdKz8pfS9nfSkob2JqKTtcblx0XHR9XG5cdFx0cmV0dXJuIHQ7XG5cdH1cblxuXHRyZXNldCgpIHt9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5fZ3JhcGg7XG5cdFx0ZGVsZXRlIHRoaXMubGF5b3V0O1xuXHRcdGlmICh0aGlzLmRpc3BhdGNoZXIpIHtcblx0XHRcdHRoaXMuZGlzcGF0Y2hlci5zdG9wKCk7XG5cdFx0XHRkZWxldGUgdGhpcy5kaXNwYXRjaGVyO1xuXHRcdH1cblx0XHR0aGlzLmJveC5pbm5lckhUTUwgPSAnJztcblx0fVxufVxuUmVuZGVyZXIuREVGQVVMVFMgPSB7XG5cdGRlZmF1bHRDbGlja01vZGU6IFwicGFuXCIsXG5cdGhpZGVPdXRsaW5lOiBmYWxzZSxcblx0c2luZ2xlU2VsZWN0OiB0cnVlLFxuXHRkcmFnZ2FibGU6IHRydWUsXG5cdGdyaWRFbmFibGVkOiBmYWxzZSxcblx0Z3VpZGVzRW5hYmxlZDogdHJ1ZSxcblx0Z3JpZFNpemU6IDMwLFxuXHRtYXhab29tOiA0LjAsXG5cdG1pblpvb206IDAuMixcblx0em9vbUZhY3RvcjogMS4yLFxuXHRtYXNrT3BhY2l0eTogMC41LFxuXHRncmFwaEJlaGF2aW9yOiBHcmFwaEJlaGF2aW9yLFxuXHRzZWxlY3Rpb25CZWhhdmlvcjogU2VsZWN0aW9uQmVoYXZpb3Jcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvdmlldy9SZW5kZXJlci5qc1xuICoqLyIsIi8qKlxuICogQ3JlYXRlZCBieSB0b25nIG9uIDYvMjgvMjAxNi5cbiAqL1xuaW1wb3J0IEJlaGF2aW9yIGZyb20gXCIuL0JlaGF2aW9yXCI7XG5cbi8qKlxuICogR3JhcGggaGFuZGxlciBoYW5kbGVzIFBhbm5pbmcgYW5kIFpvb20gYW5kIHJ1YmJlciBiYW5kIHNlbGVjdGlvblxuICovXG5jbGFzcyBHcmFwaEJlaGF2aW9yIGV4dGVuZHMgQmVoYXZpb3Ige1xuXHRjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuXHRcdHN1cGVyKHJlbmRlcmVyKTtcblx0XHRsZXQgZGlzcGF0Y2hlciA9IHJlbmRlcmVyLmRpc3BhdGNoZXI7XG5cdFx0bGV0IGYgPSBmdW5jdGlvbih0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRcdC8vQ3Vyc29yLnVwZGF0ZUN1cnNvcih0eXBlLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHR9O1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL15kcmFnLipcXC5ncmFwaCQvLCB0aGlzLmhhbmRsZURyYWcsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoL156b29tLywgdGhpcy5oYW5kbGVab29tLCB0aGlzKTtcblx0XHQvL2Rpc3BhdGNoZXIucmVnaXN0ZXIoWydtb3VzZWRvd24uZ3JhcGgnLCAnbW91c2VlbnRlci5ncmFwaCcsICdtb3VzZWxlYXZlLmdyYXBoJ10sIGYpO1xuXHRcdHRoaXMub2Zmc2V0ID0gbnVsbDtcblx0fVxuXG5cdGhhbmRsZVpvb20odHlwZSwgbnMsIGdyYXBoLCBwb3MsIGV2ZW50KSB7XG5cdFx0dGhpcy5yZW5kZXJlci50cmFuc2Zvcm0obnVsbCwgbnVsbCwgZXZlbnQuc2NhbGUpO1xuXHR9XG5cblx0aGFuZGxlRHJhZyh0eXBlLCBucywgZ3JhcGgsIHBvcywgZXZlbnQpIHtcblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xuXHRcdFx0bGV0IHBhbiA9ICh0aGlzLnJlbmRlcmVyLnByb3AoXCJkZWZhdWx0Q2xpY2tNb2RlXCIpID09IFwicGFuXCIpIF4gKGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkpO1xuXHRcdFx0aWYgKCFwYW4pIHJldHVybjtcblx0XHRcdGxldCB0ID0gdGhpcy5yZW5kZXJlci50cmFuc2xhdGU7XG5cdFx0XHR0aGlzLm9mZnNldCA9IFt0WzBdIC0gcG9zWzBdLCB0WzFdIC0gcG9zWzFdXTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aWYgKCF0aGlzLm9mZnNldCkgcmV0dXJuO1xuXHRcdHRoaXMucmVuZGVyZXIudHJhbnNmb3JtKHBvc1swXSArIHRoaXMub2Zmc2V0WzBdLCBwb3NbMV0gKyB0aGlzLm9mZnNldFsxXSk7XG5cdFx0aWYgKHR5cGUgPT0gJ2RyYWdlbmQnKSB7XG5cdFx0XHQvL0N1cnNvci51cGRhdGVDdXJzb3IoJ21vdXNldXAnLCBucywgZ3JhcGgsIGV2ZW50KTtcblx0XHRcdGRlbGV0ZSB0aGlzLm9mZnNldDtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR3JhcGhCZWhhdmlvcjtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaGF2aW9yL0dyYXBoQmVoYXZpb3IuanNcbiAqKi8iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0dGhpcy5yZW5kZXJlciA9IHJlbmRlcmVyO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRkZWxldGUgdGhpcy5yZW5kZXJlcjtcblx0fVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVoYXZpb3IvQmVoYXZpb3IuanNcbiAqKi8iLCJpbXBvcnQgUmVjdGFuZ2xlIGZyb20gXCIuLi9nZW9tZXRyeS9SZWN0YW5nbGVcIjtcbmltcG9ydCBDZWxsIGZyb20gXCIuLi9ncmFwaC9DZWxsXCI7XG5pbXBvcnQgQmVoYXZpb3IgZnJvbSBcIi4vQmVoYXZpb3JcIjtcblxuY2xhc3MgU2VsZWN0aW9uQmVoYXZpb3IgZXh0ZW5kcyBCZWhhdmlvciB7XG5cdGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG5cdFx0c3VwZXIocmVuZGVyZXIpO1xuXHRcdGxldCBkaXNwYXRjaGVyID0gcmVuZGVyZXIuZGlzcGF0Y2hlcjtcblx0XHRkaXNwYXRjaGVyLnJlZ2lzdGVyKCdtb3VzZWRvd24uKicsIHRoaXMuc2VsZWN0Q2VsbCwgdGhpcyk7XG5cdFx0ZGlzcGF0Y2hlci5yZWdpc3RlcignbW91c2V1cC4qJywgdGhpcy51bnNlbGVjdENlbGwsIHRoaXMpO1xuXHRcdGRpc3BhdGNoZXIucmVnaXN0ZXIoJ2RyYWcqLmdyYXBoJywgdGhpcy5oYW5kbGVNdWx0aVNlbGVjdCwgdGhpcyk7XG5cdFx0Ly9ncmFwaC5vbihHcmFwaC5FVkVOVF9UWVBFUy5TRUxFQ1RJT05fQ0hBTkdFLCB0aGlzLnVwZGF0ZVNlbGVjdGlvbnMsIHRoaXMpO1xuXHRcdHRoaXMuc2VsZWN0ZWROb2RlcyA9IG51bGw7XG5cdFx0dGhpcy5zZWxlY3RlZExpbmtzID0gbnVsbDtcblx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSBudWxsO1xuXHR9XG5cblx0dXBkYXRlU2VsZWN0aW9ucygpIHtcblx0XHRpZiAodGhpcy5zZWxlY3RlZE5vZGVzKVxuXHRcdFx0dGhpcy5zZWxlY3RlZE5vZGVzLmNsYXNzZWQoJ3NlbGVjdGVkJywgZmFsc2UpO1xuXHRcdGlmICh0aGlzLnNlbGVjdGVkTGlua3MpXG5cdFx0XHR0aGlzLnNlbGVjdGVkTGlua3MuY2xhc3NlZCgnc2VsZWN0ZWQnLCBmYWxzZSk7XG5cblx0XHR0aGlzLnNlbGVjdGVkTm9kZXMgPSBudWxsO1xuXHRcdHRoaXMuc2VsZWN0ZWRMaW5rcyA9IG51bGw7XG5cdFx0dGhpcy5hdHRhY2hlZExpbmtzID0gbnVsbDtcblxuXHRcdGlmICh0aGlzLmdyYXBoLnNlbGVjdGVkVmVydGljZXMgJiYgdGhpcy5ncmFwaC5zZWxlY3RlZFZlcnRpY2VzLmxlbmd0aCA+IDApIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWROb2RlcyA9IHRoaXMuZ3JhcGgucmVuZGVyZXIuZ2V0U2hhcGVzKHRoaXMuZ3JhcGguc2VsZWN0ZWRWZXJ0aWNlcyk7XG5cdFx0XHR0aGlzLmF0dGFjaGVkTGlua3MgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLmdldEF0dGFjaGVkRWRnZXMoKSk7XG5cdFx0XHR0aGlzLnNlbGVjdGVkTm9kZXMuY2xhc3NlZCgnc2VsZWN0ZWQnLCB0cnVlKTtcblx0XHR9XG5cblx0XHRpZiAodGhpcy5ncmFwaC5zZWxlY3RlZEVkZ2VzICYmIHRoaXMuZ3JhcGguc2VsZWN0ZWRFZGdlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkTGlua3MgPSB0aGlzLmdyYXBoLnJlbmRlcmVyLmdldFNoYXBlcyh0aGlzLmdyYXBoLnNlbGVjdGVkRWRnZXMpO1xuXHRcdFx0dGhpcy5zZWxlY3RlZExpbmtzLmNsYXNzZWQoJ3NlbGVjdGVkJywgdHJ1ZSk7XG5cdFx0fVxuXHR9XG5cblx0c2VsZWN0Q2VsbCh0eXBlLCBucywgZGF0YSwgcG9zLCBldmVudCkge1xuXHRcdHZhciBjZWxsID0gZGF0YSA9PSB0aGlzLmdyYXBoID8gbnVsbCA6IGRhdGE7XG5cdFx0aWYgKGNlbGwgJiYgIShjZWxsIGluc3RhbmNlb2YgQ2VsbCkpIHJldHVybjtcblx0XHR2YXIgdG9nZ2xlID0gZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleTtcblx0XHRpZiAoY2VsbCAmJiAoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSB7XG5cdFx0XHRpZiAoIXRoaXMuZ3JhcGguaXNTZWxlY3RlZChjZWxsKSlcblx0XHRcdFx0ZGVsZXRlIGNlbGwuX2ZpcnN0U2VsZWN0aW9uO1xuXHRcdFx0ZWxzZVxuXHRcdFx0XHRjZWxsLl9maXJzdFNlbGVjdGlvbiA9IHRydWU7XG5cblx0XHRcdGQzLnNlbGVjdChldmVudC5kYXRhVGFyZ2V0KS5tb3ZlVG9Gcm9udCgpO1xuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgdG9nZ2xlKTtcblx0XHR9XG5cdH1cblxuXHR1bnNlbGVjdENlbGwodHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnQpIHtcblx0XHR2YXIgY2VsbCA9IGRhdGEgPT0gdGhpcy5ncmFwaCA/IG51bGwgOiBkYXRhO1xuXHRcdGlmIChjZWxsICYmICEoY2VsbCBpbnN0YW5jZW9mIENlbGwpKSByZXR1cm47XG5cdFx0dmFyIGN0cmxLZXkgPSBldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5O1xuXHRcdGlmICghY2VsbCkge1xuXHRcdFx0dGhpcy5ncmFwaC5zZXRTZWxlY3Rpb24oY2VsbCwgY3RybEtleSk7XG5cdFx0fVxuXHR9XG5cblx0aGFuZGxlTXVsdGlTZWxlY3QodHlwZSwgbnMsIGRhdGEsIHBvcywgZXZlbnQpIHtcblx0XHRwb3MgPSB1dGlsLnNjYWxlKHRoaXMuZ3JhcGgsIHBvcyk7XG5cblx0XHRpZiAodHlwZSA9PSAnZHJhZ3N0YXJ0Jykge1xuXHRcdFx0dmFyIHNlbGVjdCA9ICh0aGlzLmdyYXBoLmdldFByb3BlcnR5KFwiZGVmYXVsdENsaWNrTW9kZVwiKSA9PSBcInNlbGVjdFwiKSBeIChldmVudC5jdHJsS2V5IHx8IGV2ZW50LnNoaWZ0S2V5KTtcblx0XHRcdGlmICghc2VsZWN0KSByZXR1cm47XG5cdFx0XHR0aGlzLnN0YXJ0UHQgPSBuZXcgUG9pbnQocG9zWzBdLCBwb3NbMV0pO1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRpZiAoIXRoaXMuc3RhcnRQdCkgcmV0dXJuO1xuXHRcdHZhciByZWN0ID0gUmVjdGFuZ2xlLmdldEJvdW5kaW5nUmVjdGFuZ2xlKFtuZXcgUG9pbnQocG9zWzBdLCBwb3NbMV0pLCB0aGlzLnN0YXJ0UHRdKTtcblx0XHR2YXIgcmVuZGVyZXIgPSB0aGlzLmdyYXBoLnJlbmRlcmVyO1xuXHRcdGlmICghdGhpcy5ydWJiZXJiYW5kKSB7XG5cdFx0XHR0aGlzLnJ1YmJlcmJhbmQgPSBkMy5zZWxlY3QocmVuZGVyZXIuYXBwZW5kTm9kZShyZW5kZXJlci5nZXRDZWxsTGF5ZXIoKSwge1xuXHRcdFx0XHR0ZW1wbGF0ZTogXy50ZW1wbGF0ZSgnPGc+PHJlY3QgeD1cIjBcIiB5PVwiMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCIgc3Ryb2tlPVwiIzAwMDAwMFwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWRhc2hhcnJheT1cIjMgM1wiLz48L2c+Jylcblx0XHRcdH0sIGZhbHNlKSk7XG5cdFx0fVxuXHRcdGlmICh0eXBlID09ICdkcmFnZW5kJykge1xuXHRcdFx0dmFyIGNlbGxzID0gdGhpcy5ncmFwaC5nZXRDdXJyZW50Um9vdCgpLmNoaWxkcmVuO1xuXHRcdFx0Ly8gVE9ETzogRGVmaW5lIGlmIHdlIHdhbnQgdG8gc2VsZWN0IHZlcnRleGVzIC8gZWRnZXMgb3IgYm90aFxuXHRcdFx0Y2VsbHMgPSBfLmZpbHRlcihjZWxscywgZnVuY3Rpb24gKGNlbGwpIHtcblx0XHRcdFx0dmFyIGJveCA9IGNlbGwuZ2V0Qm91bmRzKCk7XG5cdFx0XHRcdGlmIChyZWN0LmNvbnRhaW5zKGJveCkpIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9KTtcblx0XHRcdC8vIFRPRE86IFNldCBzZWxlY3Rpb25cblx0XHRcdHRoaXMuZ3JhcGguc2V0U2VsZWN0aW9uKGNlbGxzLCBldmVudC5jdHJsS2V5KTtcblxuXHRcdFx0dGhpcy5ydWJiZXJiYW5kLnJlbW92ZSgpO1xuXHRcdFx0ZGVsZXRlIHRoaXMuc3RhcnRQdDtcblx0XHRcdGRlbGV0ZSB0aGlzLnJ1YmJlcmJhbmQ7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHRoaXMucnViYmVyYmFuZC5zZWxlY3QoXCJyZWN0XCIpLmF0dHIoe3g6IHJlY3QueCwgeTogcmVjdC55LCB3aWR0aDogcmVjdC53aWR0aCwgaGVpZ2h0OiByZWN0LmhlaWdodH0pO1xuXHR9XG5cblx0ZGVzdHJveSgpIHtcblx0XHRzdXBlci5kZXN0cm95KCk7XG5cdFx0ZGVsZXRlIHRoaXMuc2VsZWN0ZWROb2Rlcztcblx0XHRkZWxldGUgdGhpcy5zZWxlY3RlZExpbmtzO1xuXHRcdGRlbGV0ZSB0aGlzLmF0dGFjaGVkTGlua3M7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0aW9uQmVoYXZpb3I7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhhdmlvci9TZWxlY3Rpb25CZWhhdmlvci5qc1xuICoqLyIsImltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBCYXNlNjQgZnJvbSBcIi4uL3V0aWwvYmFzZTY0XCI7XG5pbXBvcnQgRG9tVXRpbHMgZnJvbSBcIi4uL3V0aWwvRG9tVXRpbHNcIjtcbmltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9SZW5kZXJlclwiO1xuaW1wb3J0IFN0cmluZ0J1ZmZlciBmcm9tIFwiLi4vdXRpbC9TdHJpbmdCdWZmZXJcIjtcblxuY29uc3QgTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuaWYgKHR5cGVvZiAoU1ZHRWxlbWVudCkgIT0gXCJ1bmRlZmluZWRcIikge1xuXHR2YXIgc3ZnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKE5TLCBcInN2Z1wiKTtcblx0c3ZnLmlubmVySFRNTCA9ICc8Y2lyY2xlLz4nO1xuXHRpZiAoc3ZnLmZpcnN0Q2hpbGQgIT09IFwiW29iamVjdCBTVkdDaXJjbGVFbGVtZW50XVwiKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoU1ZHRWxlbWVudC5wcm90b3R5cGUsIHtcblx0XHRcdFwib3V0ZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgJG5vZGUsICR0ZW1wO1xuXHRcdFx0XHRcdCR0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0XHRcdFx0JG5vZGUgPSB0aGlzLmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdFx0XHQkdGVtcC5hcHBlbmRDaGlsZCgkbm9kZSk7XG5cdFx0XHRcdFx0cmV0dXJuICR0ZW1wLmlubmVySFRNTDtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdFwiaW5uZXJIVE1MXCI6IHtcblx0XHRcdFx0ZW51bWVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHR2YXIgcyA9IHRoaXMub3V0ZXJIVE1MO1xuXHRcdFx0XHRcdHZhciByb3BlbiA9IG5ldyBSZWdFeHAoXCI8XCIgKyB0aGlzLm5vZGVOYW1lICsgJ1xcXFxiKD86KFtcIlxcJ10pW15cIl0qPyhcXFxcMSl8W14+XSkqPicsIFwiaVwiKTtcblx0XHRcdFx0XHR2YXIgcmNsb3NlID0gbmV3IFJlZ0V4cChcIjxcXC9cIiArIHRoaXMubm9kZU5hbWUgKyBcIj4kXCIsIFwiaVwiKTtcblx0XHRcdFx0XHRyZXR1cm4gIHMucmVwbGFjZShyb3BlbiwgXCJcIikucmVwbGFjZShyY2xvc2UsIFwiXCIpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRzZXQ6IGZ1bmN0aW9uKG1hcmt1cCkge1xuXHRcdFx0XHRcdC8vIGVtcHR5IGVsIGZpcnN0LlxuXHRcdFx0XHRcdGxldCBjaGlsZDtcblx0XHRcdFx0XHR3aGlsZSAoY2hpbGQgPSB0aGlzLmxhc3RDaGlsZClcblx0XHRcdFx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQoY2hpbGQpO1xuXHRcdFx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2Zz4nKS5hcHBlbmQobWFya3VwKS5hcHBlbmQoJzwvc3ZnJyk7XG5cdFx0XHRcdFx0bGV0ICR0ZW1wID0gRG9tVXRpbHMuY3JlYXRlRWxlbWVudCgnZGl2JywgbnVsbCwgbnVsbCwgYnVmLnRvU3RyaW5nKCkpLmZpcnN0RWxlbWVudENoaWxkO1xuXHRcdFx0XHRcdHdoaWxlICgkdGVtcC5maXJzdENoaWxkKVxuXHRcdFx0XHRcdFx0dGhpcy5hcHBlbmRDaGlsZCgkdGVtcC5maXJzdENoaWxkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblx0Ly8gRGVmaW5lIHRoZSB0b0RhdGFVUkwgZm9yIFNWR1xuXHRTVkdFbGVtZW50LnByb3RvdHlwZS50b0RhdGFVUkwgPSBmdW5jdGlvbih0eXBlLCBvcHRpb25zID0ge30pIHtcblx0XHRsZXQgX3N2ZyA9IHRoaXM7XG5cblx0XHRsZXQgZGVidWcgPSBmdW5jdGlvbihtc2cpIHt9O1xuXG5cdFx0aWYgKG9wdGlvbnNbJ2RlYnVnJ10gPT0gdHJ1ZSAmJiB0eXBlb2YoY29uc29sZSkgIT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRkZWJ1ZyA9IGZ1bmN0aW9uKG1zZykgeyBjb25zb2xlLmxvZyhcIlNWRy50b0RhdGFVUkw6XCIsIG1zZyk7IH07XG5cblx0XHRmdW5jdGlvbiBleHBvcnRTVkcoKSB7XG5cdFx0XHR2YXIgc3ZnX3htbCA9IF9zdmcub3V0ZXJIVE1MO1xuXHRcdFx0dmFyIHN2Z19kYXRhdXJsID0gYmFzZTY0ZGF0YVVSTGVuY29kZShzdmdfeG1sKTtcblx0XHRcdGRlYnVnKHR5cGUgKyBcIiBsZW5ndGg6IFwiICsgc3ZnX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0Ly8gTk9URSBkb3VibGUgZGF0YSBjYXJyaWVyXG5cdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayhzdmdfZGF0YXVybCk7XG5cdFx0XHRyZXR1cm4gc3ZnX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gYmFzZTY0ZGF0YVVSTGVuY29kZShzKSB7XG5cdFx0XHR2YXIgYjY0ID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFwiO1xuXG5cdFx0XHQvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9ET00vd2luZG93LmJ0b2Fcblx0XHRcdGlmICh3aW5kb3cuYnRvYSkge1xuXHRcdFx0XHRkZWJ1ZyhcInVzaW5nIHdpbmRvdy5idG9hIGZvciBiYXNlNjQgZW5jb2RpbmdcIik7XG5cdFx0XHRcdGI2NCArPSBidG9hKHMpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVidWcoXCJ1c2luZyBjdXN0b20gYmFzZTY0IGVuY29kZXJcIik7XG5cdFx0XHRcdGI2NCArPSBCYXNlNjQuZW5jb2RlKHMpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gYjY0O1xuXHRcdH1cblxuXHRcdC8vIE5hdGl2ZSBleHBvcnQgZG9lc24ndCB3b3JrIHZlcnkgd2VsbC4gc2hvdWxkIHVzZSBjYW52ZyBpbnN0ZWFkLlxuXHRcdGZ1bmN0aW9uIGV4cG9ydEltYWdlKHR5cGUpIHtcblx0XHRcdHZhciBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xuXHRcdFx0dmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG5cdFx0XHQvLyBUT0RPOiBpZiAob3B0aW9ucy5rZWVwT3V0c2lkZVZpZXdwb3J0KSwgZG8gc29tZSB0cmFuc2xhdGlvbiBtYWdpYz9cblxuXHRcdFx0dmFyIHN2Z19pbWcgPSBuZXcgSW1hZ2UoKTtcblx0XHRcdHZhciBzdmdfeG1sID0gX3N2Zy5vdXRlckhUTUw7XG5cdFx0XHRzdmdfaW1nLnNyYyA9IGJhc2U2NGRhdGFVUkxlbmNvZGUoc3ZnX3htbCk7XG5cblx0XHRcdHN2Z19pbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFwiZXhwb3J0ZWQgaW1hZ2Ugc2l6ZTogXCIgKyBbc3ZnX2ltZy53aWR0aCwgc3ZnX2ltZy5oZWlnaHRdKTtcblx0XHRcdFx0Y2FudmFzLndpZHRoID0gc3ZnX2ltZy53aWR0aDtcblx0XHRcdFx0Y2FudmFzLmhlaWdodCA9IHN2Z19pbWcuaGVpZ2h0O1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHN2Z19pbWcsIDAsIDApO1xuXG5cdFx0XHRcdC8vIFNFQ1VSSVRZX0VSUiBXSUxMIEhBUFBFTiBOT1dcblx0XHRcdFx0dmFyIGltYWdlX2RhdGF1cmwgPSBjYW52YXMudG9EYXRhVVJMKHR5cGUpO1xuXHRcdFx0XHRkZWJ1Zyh0eXBlICsgXCIgbGVuZ3RoOiBcIiArIGltYWdlX2RhdGF1cmwubGVuZ3RoKTtcblxuXHRcdFx0XHRpZiAob3B0aW9ucy5jYWxsYmFjaykgb3B0aW9ucy5jYWxsYmFjayggaW1hZ2VfZGF0YXVybCApO1xuXHRcdFx0XHRlbHNlIGRlYnVnKFwiV0FSTklORzogbm8gY2FsbGJhY2sgc2V0LCBzbyBub3RoaW5nIGhhcHBlbnMuXCIpO1xuXHRcdFx0fTtcblxuXHRcdFx0c3ZnX2ltZy5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlYnVnKFxuXHRcdFx0XHRcdFwiQ2FuJ3QgZXhwb3J0ISBNYXliZSB5b3VyIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IFwiICtcblx0XHRcdFx0XHRcIlNWRyBpbiBpbWcgZWxlbWVudCBvciBTVkcgaW5wdXQgZm9yIENhbnZhcyBkcmF3SW1hZ2U/XFxuXCIgK1xuXHRcdFx0XHRcdFwiaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9TVkcjTmF0aXZlX3N1cHBvcnRcIlxuXHRcdFx0XHQpO1xuXHRcdFx0fTtcblxuXHRcdFx0Ly8gTk9URTogd2lsbCBub3QgcmV0dXJuIGFueXRoaW5nXG5cdFx0fVxuXG5cdFx0ZnVuY3Rpb24gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKSB7XG5cdFx0XHRpZiAoIWNhbnZnKSByZXR1cm4gbnVsbDtcblx0XHRcdGxldCBjYW52YXMgPSBEb21VdGlscy5jcmVhdGVFbGVtZW50KCdjYW52YXMnLCBudWxsLCB7ZGlzcGxheTogXCJub25lXCJ9KTtcblx0XHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcblx0XHRcdGlmICh0eXBlID09ICdqYXZhc2NyaXB0Jykge1xuXHRcdFx0XHR2YXIgeGNhbnZhcyA9IG5ldyBqc0NhbnZhcyAoJ2pzY2FudmFzdGVzdCcpO1xuXHRcdFx0XHR4Y2FudmFzLmNhbnZhcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXHRcdFx0XHQvL3hjYW52YXMuY2FudmFzID0gY2FudmFzO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIW9wdGlvbnMua2VlcE91dHNpZGVWaWV3cG9ydCkge1xuXHRcdFx0XHRjYW52ZyhjYW52YXMsIF9zdmcub3V0ZXJIVE1MKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxldCBwYWRkaW5nID0gb3B0aW9ucy5wYWRkaW5nIHx8IDA7XG5cdFx0XHRcdGxldCBzY2FsZSA9IDEuMDtcblx0XHRcdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXTtcblx0XHRcdFx0bGV0IGJib3ggPSBfc3ZnLmdldEJCb3goKTtcblx0XHRcdFx0ZGVidWcoXCJkZXRlY3RlZCBzdmcgZGltZW5zaW9ucyBcIiArIFtiYm94LngsIGJib3gueSwgYmJveC53aWR0aCwgYmJveC5oZWlnaHRdKTtcblx0XHRcdFx0bGV0IHRyYW5zZm9ybSA9IF9zdmcuZmlyc3RFbGVtZW50Q2hpbGQuZ2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nKTtcblx0XHRcdFx0aWYgKHRyYW5zZm9ybSkge1xuXHRcdFx0XHRcdGRlYnVnKCdkZXRlY3RlZCBzdmcgdHJhbnNmb3JtICcgKyB0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zZm9ybSA9IFNWR1JlbmRlcmVyLnRyYW5zZm9ybSh0cmFuc2Zvcm0pO1xuXHRcdFx0XHRcdHRyYW5zbGF0ZSA9IHRyYW5zZm9ybS50cmFuc2xhdGU7XG5cdFx0XHRcdFx0c2NhbGUgPSB0cmFuc2Zvcm0uc2NhbGU7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGV0IGJ1ZiA9IG5ldyBTdHJpbmdCdWZmZXIoKTtcblx0XHRcdFx0YnVmLmFwcGVuZCgnPHN2ZyB3aWR0aD1cIicpLmFwcGVuZChiYm94LndpZHRoICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCIgaGVpZ2h0PVwiJykuYXBwZW5kKGJib3guaGVpZ2h0ICsgMipwYWRkaW5nKS5hcHBlbmQoJ3B4XCI+PGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpXG5cdFx0XHRcdFx0LmFwcGVuZCgtYmJveC54K3RyYW5zbGF0ZVswXStwYWRkaW5nKS5hcHBlbmQoJywnKS5hcHBlbmQoLWJib3gueSt0cmFuc2xhdGVbMV0rcGFkZGluZykuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHNjYWxlKS5hcHBlbmQoJylcIj4nKVxuXHRcdFx0XHRcdC5hcHBlbmQoX3N2Zy5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwpLmFwcGVuZCgnPC9nPjwvc3ZnPicpO1xuXHRcdFx0XHRpZiAodHlwZSA9PSAnamF2YXNjcmlwdCcpIHtcblx0XHRcdFx0XHR4Y2FudmFzLmNvbXBpbGUoYnVmLnRvU3RyaW5nKCksIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKHhjYW52YXMudG9TdHJpbmcoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRjYW52ZyhjYW52YXMsIGJ1Zi50b1N0cmluZygpKTtcblx0XHRcdH1cblx0XHRcdHZhciBpbWFnZV9kYXRhdXJsID0gY2FudmFzLnRvRGF0YVVSTCh0eXBlKTtcblx0XHRcdGlmIChvcHRpb25zLmNhbGxiYWNrKSBvcHRpb25zLmNhbGxiYWNrKCBpbWFnZV9kYXRhdXJsICk7XG5cdFx0XHRjYW52YXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjYW52YXMpO1xuXHRcdFx0cmV0dXJuIGltYWdlX2RhdGF1cmw7XG5cdFx0fVxuXG5cdFx0aWYgKCF0eXBlKSB0eXBlID0gXCJpbWFnZS9zdmcreG1sXCI7XG5cblx0XHRpZiAob3B0aW9ucy5rZWVwTm9uU2FmZSkgZGVidWcoXCJOT1RFOiBrZWVwTm9uU2FmZSBpcyBOT1Qgc3VwcG9ydGVkIGFuZCB3aWxsIGJlIGlnbm9yZWQhXCIpO1xuXHRcdGlmIChvcHRpb25zLmtlZXBPdXRzaWRlVmlld3BvcnQpIGRlYnVnKFwiTk9URToga2VlcE91dHNpZGVWaWV3cG9ydCBpcyBvbmx5IHN1cHBvcnRlZCB3aXRoIGNhbnZnIGV4cG9ydGVyLlwiKTtcblxuXHRcdHN3aXRjaCAodHlwZSkge1xuXHRcdFx0Y2FzZSBcImltYWdlL3N2Zyt4bWxcIjpcblx0XHRcdFx0cmV0dXJuIGV4cG9ydFNWRygpO1xuXHRcdFx0Y2FzZSBcImltYWdlL3BuZ1wiOlxuXHRcdFx0Y2FzZSBcImltYWdlL2pwZWdcIjpcblx0XHRcdGNhc2UgXCJqYXZhc2NyaXB0XCI6XG5cdFx0XHRcdGlmICghb3B0aW9ucy5yZW5kZXJlcikge1xuXHRcdFx0XHRcdGlmICh3aW5kb3cuY2FudmcpIG9wdGlvbnMucmVuZGVyZXIgPSBcImNhbnZnXCI7XG5cdFx0XHRcdFx0ZWxzZSBvcHRpb25zLnJlbmRlcmVyPVwibmF0aXZlXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3dpdGNoIChvcHRpb25zLnJlbmRlcmVyKSB7XG5cdFx0XHRcdFx0Y2FzZSBcImNhbnZnXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIGNhbnZnIHJlbmRlcmVyIGZvciBcIiArIHR5cGUgKyBcIiBpbWFnZSBleHBvcnRcIik7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZXhwb3J0SW1hZ2VDYW52Zyh0eXBlKTtcblx0XHRcdFx0XHRjYXNlIFwibmF0aXZlXCI6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVzaW5nIG5hdGl2ZSByZW5kZXJlciBmb3IgXCIgKyB0eXBlICsgXCIgZXhwb3J0LiBUSElTIE1JR0hUIEZBSUwuXCIpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIGV4cG9ydEltYWdlKHR5cGUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRkZWJ1ZyhcInVua25vd24gaW1hZ2UgcmVuZGVyZXIgZ2l2ZW4sIGRvaW5nIG5vdGluZyAoXCIgKyBvcHRpb25zLnJlbmRlcmVyICsgXCIpXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0ZGVidWcoXCJTb3JyeSEgRXhwb3J0aW5nIGFzICdcIiArIHR5cGUgKyBcIicgaXMgbm90IHN1cHBvcnRlZCFcIik7XG5cdFx0fVxuXHRcdHJldHVybiBudWxsO1xuXHR9XG59XG5cbmNsYXNzIFNWR1JlbmRlcmVyIGV4dGVuZHMgUmVuZGVyZXIge1xuXHRyZW5kZXIoKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHN1cGVyLnJlbmRlcigpO1xuXHRcdGlmIChyZXN1bHQpIHtcblx0XHRcdGxldCByb290ID0gdGhpcy5ncmFwaC5jdXJyZW50Um9vdDtcblx0XHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8c3ZnIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+Jyk7XG5cdFx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdFx0YnVmLmFwcGVuZCgnPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKCcpLmFwcGVuZCh0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQodFsxXSkuYXBwZW5kKCcpc2NhbGUoJykuYXBwZW5kKHRoaXMuc2NhbGUpLmFwcGVuZCgnKVwiPicpO1xuXHRcdFx0YnVmLmFwcGVuZCh0aGlzLnJlbmRlckRlZnMoKSk7XG5cdFx0XHRidWYuYXBwZW5kKHJvb3QucmVuZGVyKHRoaXMpKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJzwvZz48L3N2Zz4nKTtcblx0XHRcdHRoaXMuYm94LmlubmVySFRNTCA9IGJ1Zi50b1N0cmluZygpO1xuXHRcdFx0dGhpcy5zdmcgPSB0aGlzLmJveC5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHR9XG5cdH1cblxuXHRyZW5kZXJEZWZzKCkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8ZGVmcz4nKTtcblx0XHRidWYuYXBwZW5kKHRoaXMuZ2V0VGVtcGxhdGUoJ0dyaWQnLCB0aGlzLnByb3AoXCJncmlkU2l6ZVwiKSkpO1xuXHRcdGxldCBtYXJrZXJzID0gdGhpcy5ncmFwaC5tYXJrZXJzO1xuXHRcdGlmIChtYXJrZXJzLmxlbmd0aCA+IDApXG5cdFx0XHRidWYuYXBwZW5kKFNWR1JlbmRlcmVyLnJlbmRlck1hcmtlcnMobWFya2VycykpO1xuXHRcdGJ1Zi5hcHBlbmQoJzwvZGVmcz4nKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRyZWZyZXNoKCkge1xuXHRcdGlmICghdGhpcy5zdmcpIHJldHVybjtcblx0XHRsZXQgZyA9IHRoaXMuc3ZnLnF1ZXJ5U2VsZWN0b3IoJ2cnKTtcblx0XHRsZXQgdCA9IHRoaXMudHJhbnNsYXRlO1xuXHRcdGcuc2V0QXR0cmlidXRlKCd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlKCcgKyB0WzBdICsgJywnICsgdFsxXSArICcpc2NhbGUoJyArIHRoaXMuc2NhbGUgKyAnKScpO1xuXHR9XG5cblx0c3RhdGljIHJlbmRlck1hcmtlcnMobWFya2Vycykge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCksIHN0cjEsIHN0cjI7XG5cdFx0bWFya2Vycy5mb3JFYWNoKGZ1bmN0aW9uKG1hcmtlcikge1xuXHRcdFx0c3RyMSA9IHRoaXMuVEVNUExBVEVTWydNYXJrZXInXShtYXJrZXIpO1xuXHRcdFx0c3RyMiA9IG1hcmtlci5zaGFwZTtcblx0XHRcdGlmICghXy5pc1N0cmluZyhzdHIyKSlcblx0XHRcdFx0c3RyMiA9IHRoaXMucmVuZGVyU2hhcGUoc3RyMik7XG5cdFx0XHRzdHIxID0gc3RyMS5yZXBsYWNlKC9cXCNcXHtzaGFwZVxcfS8sIHN0cjIpO1xuXHRcdFx0YnVmLmFwcGVuZChzdHIxKTtcblx0XHR9LCB0aGlzKTtcblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGFiZWwoYm94KSB7XG5cdFx0cmV0dXJuIHRoaXMuVEVNUExBVEVTWydMYWJlbCddKGJveCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyU2hhcGUoc2hhcGUpIHtcblx0XHRsZXQgdGVtcGxhdGUgPSB0aGlzLlRFTVBMQVRFU1tzaGFwZS5uYW1lXTtcblx0XHRpZiAoXy5pc1N0cmluZyh0ZW1wbGF0ZSkpXG5cdFx0XHR0ZW1wbGF0ZSA9IF8udGVtcGxhdGUodGVtcGxhdGUpO1xuXHRcdHJldHVybiB0ZW1wbGF0ZShzaGFwZSk7XG5cdH1cblxuXHRzdGF0aWMgZ2V0UGF0aERhdGEoc2hhcGUpIHtcblx0XHRsZXQgcG9pbnRzID0gc2hhcGUucG9pbnRzO1xuXHRcdGxldCBjb250cm9sUHRzID0gc2hhcGUuY29udHJvbFB0cztcblx0XHRpZiAoIXBvaW50cyB8fCBwb2ludHMubGVuZ3RoID09IDApIHJldHVybiAnJztcblxuXHRcdGlmICghY29udHJvbFB0cyAmJiBzaGFwZS5yb3VuZCkge1xuXHRcdFx0Ly8gcmVuZGVyIHJvdW5kZWQgbGluZSBqb2lucy5cblx0XHRcdGxldCBuZXdQdHMgPSBbXTtcblx0XHRcdGNvbnRyb2xQdHMgPSBbXTtcblx0XHRcdGxldCBwcmV2ID0gcG9pbnRzWzBdLCBuZXh0LCBkMSwgZDIsIGNvcm5lcjtcblx0XHRcdG5ld1B0cy5wdXNoKHByZXYpO1xuXHRcdFx0Zm9yIChsZXQgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XG5cdFx0XHRcdG5leHQgPSBwb2ludHNbaV07XG5cdFx0XHRcdC8vIHNldCB0aGUgY29udHJvbCBwb2ludCBmaXJzdC5cblx0XHRcdFx0Y29udHJvbFB0c1syKmldID0gW25leHQsIG5leHRdO1xuXHRcdFx0XHQvLyBjaGVjayB0aGUgc2l6ZSBvZiB0aGUgY29ybmVyLlxuXHRcdFx0XHRkMSA9IHByZXYuZGlzdGFuY2UobmV4dCk7XG5cdFx0XHRcdGQyID0gbmV4dC5kaXN0YW5jZShwb2ludHNbaSsxXSk7XG5cdFx0XHRcdGNvcm5lciA9IE1hdGgubWluKHNoYXBlLnJvdW5kLCBkMS8yLCBkMi8yKTtcblx0XHRcdFx0Ly8gc3BsaXQgdGhlIHBvaW50IGludG8gdHdvLlxuXHRcdFx0XHRuZXdQdHMucHVzaChuZXh0LmdldERpcmVjdGlvbihwcmV2KS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdG5ld1B0cy5wdXNoKG5leHQuZ2V0RGlyZWN0aW9uKHBvaW50c1tpKzFdKS5zY2FsZShjb3JuZXIpLnRyYW5zbGF0ZShuZXh0KSk7XG5cdFx0XHRcdHByZXYgPSBuZXh0O1xuXHRcdFx0fVxuXHRcdFx0bmV3UHRzLnB1c2gocG9pbnRzW3BvaW50cy5sZW5ndGggLSAxXSk7XG5cdFx0XHRwb2ludHMgPSBuZXdQdHM7XG5cdFx0fVxuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCdNJyksIHBvaW50O1xuXHRcdGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRwb2ludCA9IHBvaW50c1tpXTtcblx0XHRcdGlmIChpID09IDApXG5cdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0ZWxzZSB7XG5cdFx0XHRcdGlmIChjb250cm9sUHRzICYmIGNvbnRyb2xQdHNbaV0pIHtcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgQyAnKTtcblx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNvbnRyb2xQdHNbaV0ubGVuZ3RoOyBqKyspXG5cdFx0XHRcdFx0XHRidWYuYXBwZW5kKGNvbnRyb2xQdHNbaV1bal0pLmFwcGVuZCgnICcpO1xuXHRcdFx0XHRcdGJ1Zi5hcHBlbmQocG9pbnQpO1xuXHRcdFx0XHR9IGVsc2Vcblx0XHRcdFx0XHRidWYuYXBwZW5kKCcgTCAnKS5hcHBlbmQocG9pbnQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gYnVmLnRvU3RyaW5nKCk7XG5cdH1cblxuXHRzdGF0aWMgcmVuZGVyTGluayhzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCk7XG5cdFx0bGV0IGQgPSBTVkdSZW5kZXJlci5nZXRQYXRoRGF0YShzaGFwZSk7XG5cdFx0aWYgKHNoYXBlLnNob3dHYXVnZSlcblx0XHRcdGJ1Zi5hcHBlbmQoJzxwYXRoIHN0eWxlPVwic3Ryb2tlOiB3aGl0ZTsgc3Ryb2tlLXdpZHRoOiA5OyB2aXNpYmlsaXR5OiBoaWRkZW47IHBvaW50ZXItZXZlbnRzOiBzdHJva2U7XCIgZD1cIicpXG5cdFx0XHRcdC5hcHBlbmQoZCkuYXBwZW5kKCdcIi8+Jyk7XG5cdFx0YnVmLmFwcGVuZCgnPHBhdGggZD1cIicpLmFwcGVuZChkKS5hcHBlbmQoJ1wiJyk7XG5cdFx0aWYgKHNoYXBlLnN0YXJ0TWFya2VyIHx8IHNoYXBlLmVuZE1hcmtlcikge1xuXHRcdFx0YnVmLmFwcGVuZCgnIHN0eWxlPVwiJyk7XG5cdFx0XHRpZiAoc2hhcGUuc3RhcnRNYXJrZXIpXG5cdFx0XHRcdGJ1Zi5hcHBlbmQoJ21hcmtlci1zdGFydDogdXJsKCMnKS5hcHBlbmQoXy5pc1N0cmluZyhzaGFwZS5zdGFydE1hcmtlcikgPyBzaGFwZS5zdGFydE1hcmtlciA6IHNoYXBlLnN0YXJ0TWFya2VyLmlkKS5hcHBlbmQoJyk7Jyk7XG5cdFx0XHRpZiAoc2hhcGUuZW5kTWFya2VyKVxuXHRcdFx0XHRidWYuYXBwZW5kKCdtYXJrZXItZW5kOiB1cmwoIycpLmFwcGVuZChfLmlzU3RyaW5nKHNoYXBlLmVuZE1hcmtlcikgPyBzaGFwZS5lbmRNYXJrZXIgOiBzaGFwZS5lbmRNYXJrZXIuaWQpLmFwcGVuZCgnKTsnKTtcblx0XHRcdGJ1Zi5hcHBlbmQoJ1wiJyk7XG5cdFx0fVxuXHRcdGJ1Zi5hcHBlbmQoJy8+Jyk7XG5cdFx0cmV0dXJuIGJ1Zi50b1N0cmluZygpO1xuXHR9XG5cblx0c3RhdGljIGFwcGVuZENvbnRlbnQoZWwsIGNvbnRlbnQpIHtcblx0XHRsZXQgYnVmID0gbmV3IFN0cmluZ0J1ZmZlcigpO1xuXHRcdGJ1Zi5hcHBlbmQoJzxzdmc+JykuYXBwZW5kKGNvbnRlbnQpLmFwcGVuZCgnPC9zdmcnKTtcblx0XHRsZXQgdGVtcCA9IERvbVV0aWxzLmNyZWF0ZUVsZW1lbnQoJ2RpdicsIG51bGwsIG51bGwsIGJ1Zi50b1N0cmluZygpKS5maXJzdEVsZW1lbnRDaGlsZDtcblxuXHRcdHdoaWxlICh0ZW1wLmZpcnN0Q2hpbGQpXG5cdFx0XHRlbC5hcHBlbmRDaGlsZCh0ZW1wLmZpcnN0Q2hpbGQpO1xuXHRcdHJldHVybiBlbDtcblx0fVxuXG5cdHN0YXRpYyB0cmFuc2Zvcm0odHJhbnNmb3JtKSB7XG5cdFx0bGV0IHRyYW5zbGF0ZSA9IFswLCAwXSwgc2NhbGUgPSAxLjA7XG5cdFx0Ly9cblx0XHRsZXQgcGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3RyYW5zbGF0ZVxcKFxccyooW14pXSspLyk7XG5cdFx0aWYgKHBhcnRzKSB7XG5cdFx0XHRsZXQgbSA9IHBhcnRzWzFdLnRyaW0oKS5tYXRjaCgvKFtcXGQuLV0rKVsgLF0oW1xcZC4tXSspLyk7XG5cdFx0XHRpZiAobSkge1xuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSBwYXJzZUZsb2F0KG1bMV0pIHx8IDA7XG5cdFx0XHRcdHRyYW5zbGF0ZVsxXSA9IHBhcnNlRmxvYXQobVsyXSkgfHwgMDtcblx0XHRcdH0gZWxzZVxuXHRcdFx0XHR0cmFuc2xhdGVbMF0gPSB0cmFuc2xhdGVbMV0gPSBwYXJzZUZsb2F0KHBhcnRzWzFdKTtcblx0XHR9XG5cdFx0cGFydHMgPSB0cmFuc2Zvcm0ubWF0Y2goL3NjYWxlXFwoXFxzKihbXildKykvKTtcblx0XHRpZiAocGFydHMpXG5cdFx0XHRzY2FsZSA9IHBhcnNlRmxvYXQocGFydHNbMV0pIHx8IDEuMDtcblxuXHRcdHJldHVybiB7dHJhbnNsYXRlLCBzY2FsZX07XG5cdH1cbn1cblNWR1JlbmRlcmVyLlRFTVBMQVRFUyA9IHtcblx0JHJvb3Q6ICc8ZyBpZD1cIiR7aWR9XCIgY2xhc3M9XCIke2NsYXNzTmFtZX1cIj4je2NoaWxkcmVufTwvZz4nLFxuXHQkbm9kZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgke3h9LCR7eX0pXCI+I3tzaGFwZX0je2xhYmVsfTwvZz4nLFxuXHQkZWRnZTogJzxnIGlkPVwiJHtpZH1cIiBjbGFzcz1cIiR7Y2xhc3NOYW1lfVwiIHN0eWxlPVwiJHtzdHlsZX1cIiBucz1cIiR7bmFtZXNwYWNlfVwiPiN7c2hhcGV9I3tsYWJlbH08L2c+Jyxcblx0RWxsaXBzZTogJzxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiMFwiIHJ4PVwiJHt3aWR0aC8yfVwiIHJ5PVwiJHtoZWlnaHQvMn1cIi8+Jyxcblx0UmVjdGFuZ2xlOiAnPHJlY3QgeD1cIiR7LXdpZHRoLzJ9XCIgeT1cIiR7LWhlaWdodC8yfVwiIHdpZHRoPVwiJHt3aWR0aH1cIiBoZWlnaHQ9XCIke2hlaWdodH1cIiByeD1cIjlcIiByeT1cIjlcIi8+Jyxcblx0VHJpYW5nbGU6ICc8cG9seWdvbiBwb2ludHM9XCIkey13aWR0aC8yfSwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvMn0gMCwke2hlaWdodC8yfVwiLz4nLFxuXHRSaG9tYnVzOiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwwIDAsJHtoZWlnaHQvMn0gJHstd2lkdGgvMn0sMFwiLz4nLFxuXHRIZXhhZ29uOiBmdW5jdGlvbihjb25maWcpIHtcblx0XHR2YXIgdmVydGljYWwgPSBjb25maWcuZGlyZWN0aW9uID09ICdub3J0aCcgfHwgY29uZmlnLmRpcmVjdGlvbiA9PSAnc291dGgnO1xuXHRcdGlmICh2ZXJ0aWNhbClcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiMCwkey1oZWlnaHQvMn0gJHt3aWR0aC8yfSwkey1oZWlnaHQvNH0gJHt3aWR0aC8yfSwke2hlaWdodC80fSAwLCR7aGVpZ2h0LzJ9ICR7LXdpZHRoLzJ9LCR7aGVpZ2h0LzR9ICR7LXdpZHRoLzJ9LCR7LWhlaWdodC80fVwiLz4nO1xuXHRcdGVsc2Vcblx0XHRcdHJldHVybiAnPHBvbHlnb24gcG9pbnRzPVwiJHstd2lkdGgvMn0sMCAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzR9LCR7LWhlaWdodC8yfSAke3dpZHRoLzJ9LDAgJHt3aWR0aC80fSwke2hlaWdodC8yfSAkey13aWR0aC80fSwke2hlaWdodC8yfVwiLz4nO1xuXHR9LFxuXHRQb2x5Z29uOiBmdW5jdGlvbihzaGFwZSkge1xuXHRcdGxldCBidWYgPSBuZXcgU3RyaW5nQnVmZmVyKCc8cG9seWdvbiBwb2ludHM9XCInKTtcblx0XHRzaGFwZS5wb2ludHMuZm9yRWFjaChmdW5jdGlvbihwdCl7XG5cdFx0XHRidWYuYXBwZW5kKHB0WzBdKS5hcHBlbmQoJywnKS5hcHBlbmQocHRbMV0pLmFwcGVuZCgnICcpO1xuXHRcdH0pO1xuXHRcdGJ1Zi5yZW1vdmVMYXN0KCk7XG5cdFx0YnVmLmFwcGVuZCgnXCIvPicpO1xuXHRcdHJldHVybiBidWYudG9TdHJpbmcoKTtcblx0fSxcblx0SW1hZ2U6IGZ1bmN0aW9uKGNvbmZpZykge1xuXHRcdHJldHVybiAnPGltYWdlIHg9XCIkey13aWR0aC8yfVwiIHk9XCIkey1oZWlnaHQvMn1cIiB3aWR0aD1cIiR7d2lkdGh9XCIgaGVpZ2h0PVwiJHtoZWlnaHR9XCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeGxpbms6aHJlZj1cIicgKyBjb25maWcuaW1hZ2UgKyAnXCIvPic7XG5cdH0sXG5cdE1hcmtlcjogZnVuY3Rpb24obWFya2VyKSB7XG5cdFx0cmV0dXJuIGBcbjxtYXJrZXIgaWQ9XCIke21hcmtlci5pZH1cIiBtYXJrZXJXaWR0aD1cIiR7bWFya2VyLnNpemV9XCIgbWFya2VySGVpZ2h0PVwiJHttYXJrZXIuc2l6ZX1cIiByZWZ4PVwiJHttYXJrZXIucmVmWzBdfVwiIFxucmVmeT1cIiR7bWFya2VyLnJlZlsxXX1cIiBvcmllbnQ9XCJhdXRvXCIgdmlld2JveD1cIiR7bWFya2VyLnZpZXdCb3gueH0gJHttYXJrZXIudmlld0JveC55fSAke21hcmtlci52aWV3Qm94LndpZHRofSAke21hcmtlci52aWV3Qm94LmhlaWdodH1cIlxubWFya2VyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiICR7bWFya2VyLmZpbGwgPyBgc3R5bGU9XCJzdHJva2U6ICR7bWFya2VyLmZpbGx9O2ZpbGw6JHttYXJrZXIuZmlsbH1cImAgOiAnJ30+I3tzaGFwZX08L21hcmtlcj5cbmAudHJpbSgpO1xuXHR9LFxuXHRHcmlkOiBmdW5jdGlvbihzaXplKSB7XG5cdFx0cmV0dXJuIGBcbjxwYXR0ZXJuIGlkPVwiR3JpZFBhdHRlcm5cIiB3aWR0aD1cIiR7c2l6ZX1cIiBoZWlnaHQ9XCIke3NpemV9XCIgcGF0dGVyblVuaXRzPVwidXNlclNwYWNlT25Vc2VcIj5cblx0PGVsbGlwc2UgY3g9XCIwXCIgY3k9XCIwXCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG5cdDxlbGxpcHNlIGN4PVwiMFwiIGN5PVwiJHtzaXplfVwiIHJ4PVwiMVwiIHJ5PVwiMVwiIGZpbGw9XCIjOTk5OTk5XCIvPlxuXHQ8ZWxsaXBzZSBjeD1cIiR7c2l6ZX1cIiBjeT1cIjBcIiByeD1cIjFcIiByeT1cIjFcIiBmaWxsPVwiIzk5OTk5OVwiLz5cblx0PGVsbGlwc2UgY3g9XCIke3NpemV9XCIgY3k9XCIke3NpemV9XCIgcng9XCIxXCIgcnk9XCIxXCIgZmlsbD1cIiM5OTk5OTlcIi8+XG48L3BhdHRlcm4+YC50cmltKCk7XG5cdH0sXG5cdExhYmVsOiBfLnRlbXBsYXRlKGBcbjwlIHZhciBib3ggPSBfLmhhcyhkYXRhLCBcImR4XCIpID8gZGF0YSA6IChkYXRhLmdldExhYmVsQm94ID8gZGF0YS5nZXRMYWJlbEJveCgpIDogbnVsbCk7IFxuICAgaWYgKGJveCkgeyU+XG5cdDxnIDwlIGlmIChib3guY29uZmlnICYmIGJveC5jb25maWcuY2xhc3MpIHslPmNsYXNzPVwiPCU9Ym94LmNvbmZpZy5jbGFzcyU+XCI8JX0lPlxcXG5cdFx0PCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5ucykgeyU+bnM9XCI8JT1ib3guY29uZmlnLm5zJT5cIjwlfSU+XFxcblx0XHQ8JSBpZiAoYm94LmNvbmZpZyAmJiBib3guY29uZmlnLmlubGluZVN0eWxlKSB7JT5cXFxuXHRcdFx0Zm9udC1zaXplPVwiPCU9Ym94LmNvbmZpZy5mb250U2l6ZSU+XCJcXFxuXHRcdFx0Zm9udC1mYW1pbHk9XCI8JT1ib3guY29uZmlnLmZvbnRGYW1pbHklPlwiXFxcblx0XHRcdGZvbnQtd2VpZ2h0PVwiPCUgaWYgKGJveC5ib2xkKSB7JT5ib2xkPCV9IGVsc2UgeyU+bm9ybWFsPCV9JT5cIlxcXG5cdFx0XHQ8JSBpZiAoYm94LnVuZGVybGluZSkgeyU+dGV4dC1kZWNvcmF0aW9uPVwidW5kZXJsaW5lXCI8JX0lPlxcXG5cdFx0XHQ8JSBpZiAoYm94Lml0YWxpYykgeyU+Zm9udC1zdHlsZT1cIml0YWxpY1wiPCV9JT5cXFxuXHRcdDwlfSU+XFxcblx0XHR0ZXh0LWFuY2hvcj1cIjwlPWJveC5hbmNob3IlPlwiXFxcblx0XHR0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoPCU9Ym94LmJvdW5kcy54JT4sPCU9Ym94LmJvdW5kcy55JT4pPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy5yb3RhdGlvbikgeyU+cm90YXRlKDwlPWJveC5jb25maWcucm90YXRpb24lPiA8JT1ib3gucGl2b3RbMF0lPiA8JT1ib3gucGl2b3RbMV0lPik8JX0lPlwiPlxuXHQ8JSBpZiAoYm94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUpIHslPlxuXHRcdDxyZWN0IHg9XCI8JT0tYm94LmJvdW5kcy53aWR0aC8yJT5cIiB5PVwiPCU9LWJveC5ib3VuZHMuaGVpZ2h0LzIlPlwiIHdpZHRoPVwiPCU9Ym94LmJvdW5kcy53aWR0aCU+XCIgaGVpZ2h0PVwiPCU9Ym94LmJvdW5kcy5oZWlnaHQlPlwiIHN0eWxlPVwiPCU9Ym94LmNvbmZpZy5iYWNrZ3JvdW5kU3R5bGUlPlwiLz5cblx0PCUgfSBpZiAoXy5pc0FycmF5KGJveC5sYWJlbCkpIHsgXG5cdFx0Xy5lYWNoKGJveC5sYWJlbCwgZnVuY3Rpb24odmFsdWUsIGxpbmUpIHslPlxuXHRcdFx0PHRleHQgPCUgaWYgKGJveC5jb25maWcgJiYgYm94LmNvbmZpZy50ZXh0U3R5bGUpIHslPnN0eWxlPVwiPCU9Ym94LmNvbmZpZy50ZXh0U3R5bGUlPlwiPCV9JT5cXFxuXHRcdFx0XHRkeD1cIjwlPWJveC5keCU+XCIgZHk9XCI8JT1ib3guZHkgKyBib3gubGluZUhlaWdodCAqIGxpbmUlPlwiPjwlPXZhbHVlJT48L3RleHQ+XG5cdFx0PCV9KTt9IGVsc2UgeyAlPlxuXHRcdFx0PHRleHQ+PCU9Ym94LmxhYmVsJT48L3RleHQ+XG5cdFx0PCV9JT5cblx0PC9nPlxuPCV9JT5cbmAudHJpbSgpLCB7dmFyaWFibGU6IFwiZGF0YVwifSkgICAvL1RPRE8gYWRkIG1vcmUgaW5saW5lIHRleHQgc3R5bGVzLlxufTtcblxuZXhwb3J0IGRlZmF1bHQgU1ZHUmVuZGVyZXI7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy92aWV3L1NWR1JlbmRlcmVyLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==