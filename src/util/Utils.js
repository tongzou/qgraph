import Point from "../geometry/Point";
import Rectangle from "../geometry/Rectangle";

// util variables
let _debugging = [], _debugAll = false, typeRegistry = {}, splice = Array.splice;

/**
 * Utility functions
 */
export default {
	type: function(namespace, name, type) {
		if (!typeRegistry[namespace])
			typeRegistry[namespace] = new Map();
		if (!name)
			return typeRegistry[namespace];
		if (!type)
			return typeRegistry[namespace].get(name);
		typeRegistry[namespace].set(name, type);
	},

	createType: function(namespace, props, defaultType) {
		let name = props.name;

		// first check if type exists
		let type = this.type(namespace, name);
		if (!type) {
			let extend = props.extends ? this.type(namespace, props.extends) : null;
			if (!extend && defaultType)
				extend = defaultType;
			if (extend)
				type = class extends extend {};
			else {
				type = class {
					constructor(config) {
						_.assign(this, config);
					}
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

	buildTypes: function(types, namespace, defaultType) {
		this.log('Utils', 'Utils.buildTypes - ' + namespace);

		if (!types && defaultType) {
			this.createType(namespace, defaultType);
			this.log('Utils', 'Utils.buildTypes end');
			return;
		}
		if (defaultType) {
			let type = _.remove(types, {name: defaultType.name});
			type = type.length > 0 ? type[0] : null;
			if (type)
				defaultType = this.createType(namespace, _.assign({}, defaultType, type));
			else
				defaultType = this.createType(namespace, defaultType);
		}

		_.forEach(types, (type) => {
			this.createType(namespace, type, defaultType);
		});
		this.log('Utils', 'Utils.buildTypes end');
	},

	// Helper function to correctly set up the prototype chain, for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	extend: function(child, parent, protoProps, staticProps) {
		// Add static properties to the constructor function, if supplied.
		_.extend(child, parent, staticProps);

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		var Surrogate = function(){ this.constructor = child; };
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if (protoProps) _.extend(child.prototype, protoProps);

		// Set a convenience property in case the parent's prototype is needed later.
		child.superclass = parent.prototype;

		return child;
	},

	initConfig: function(obj, config) {
		let props = {}, c = obj.constructor, cArr = [c];
		while (c) {
			if (c.super) {
				c = c.super.constructor;
				splice.apply(cArr, [0, 0, c]);
			} else
				c = null;
		}

		for (let i = 0; i < cArr.length; i++) {
			c = cArr[i];
			if (c.DEFAULTS)
				_.assign(props, c.DEFAULTS);
		}
		obj.props = _.assign(props, config);
		c.prototype.prop = function(name, value) {
			if (!value)
				return this.props[name];
			this.props[name] = value;
		};
	},

	/**
	 * Gets the JS class constructor.
	 * @param {Object} jsClass
	 * @param {Object} defaultClass
	 */
	getConstructor: function(jsClass, defaultClass) {
		if (!jsClass)
			jsClass = defaultClass;

		if (_.isString(jsClass))
			jsClass = eval(jsClass);
		return jsClass;
	},

	debug: function(moduleName) {
		if (moduleName) {
			_debugging.push(moduleName);
		} else {
			_debugAll = true;
		}
	},

	log: function(name, message) {
		if (!window.console) { return; }
		var debug = _debugAll;
		if (!_debugAll) {
			debug = false;
			for (var i = 0; i<_debugging.length; i++) {
				if (_debugging[i]==name) debug = true;
			}
		}
		if (!debug) { return; }
		while (name.length<10) { name=name+' '; }
		name = name.substring(0, 10)+" - ";
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
	getRelativePosition: function(bounds, geometry) {
		let x = Math.abs(geometry.x) <= 1 ? bounds.width * geometry.x : geometry.x;
		let y = Math.abs(geometry.y) <= 1 ? bounds.height * geometry.y : geometry.y;
		return this.offsetPosition([x, y], geometry);
	},

	offsetPosition: function(pos, geometry) {
		return [pos[0] + geometry.width * geometry.anchorX + geometry.offsetX, pos[1] + geometry.height * geometry.anchorY + geometry.offsetY];
	},

	/**
	 * Get the position relative to the graph that's unscaled, i.e., absolute position without considering translation and scale.
	 * @param t the current translate
	 * @param scale the current scale
	 * @param o can be either a Point or a Rectangle or a Point array.
	 */
	unscale: function(t, scale, o) {
		if (o instanceof Rectangle)
			return new Rectangle(o.x*scale+t[0], o.y*scale+t[1], o.width*scale, o.height*scale);
		else if (o instanceof Point)
			return new Point(o.x*scale+t[0], o.y*scale+t[1]);
		else
			return [o[0]*scale+t[0], o[1]*scale+t[1]];
	},

	/**
	 * Get the position relative to the graph that's scaled, i.e., relative position considering translation and scale.
	 * @param t the current translation
	 * @param scale the current scale
	 * @param o can be either a Point or a Rectangle or a Point array.
	 */
	scale: function(t, scale, o) {
		if (o instanceof Rectangle)
			return new Rectangle((o.x-t[0])/scale, (o.y-t[1])/scale, o.width/scale, o.height/scale);
		else if (o instanceof Point)
			return new Point((o.x-t[0])/scale, (o.y-t[1])/scale);
		else
			return [(o[0]-t[0])/scale, (o[1]-t[1])/scale];
	},

	/**
	 * Convenience method.
	 */
	getProperty: function(obj, prop) {
		if (!obj)
			return null;
		if (_.has(obj, prop))
			return obj[prop];
		if (obj.prop && _.isFunction(obj.prop))
			return obj.prop(prop);
		return null;
	}
};
