import _ from "lodash";
import Utils from "../util/Utils";
import Cache from "../util/Cache";
import StringBuffer from "../util/StringBuffer";
import Rectangle from "../geometry/Rectangle";
import Label from "../view/Label";

/**
 * The Element is the common parent for Node and Edge.
 */
export default class Element {
	constructor(graph, config = {id: _.uniqueId()}) {
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
		type = Utils.type(this.constructor.namespace, type);
		if (!type)
			throw new Error("Type not found " + config.type);
		delete config.type;
		this.props = new type(config);
	}

	prop(name, value) {
		if (_.isUndefined(value))
			return this.props[name];
		this.props[name] = value;
	}

	/**
	 * Get/Set property stored by views.
	 * @param key
	 * @param name
	 * @param value
	 * @returns {*}
	 */
	viewProp(key = 'default', name, value) {
		if (_.isUndefined(value)) {
			if (key == 'default')
				return this.prop(name, value);
			return this.viewProps[key][name];
		}
		if (key == 'default') {
			this.prop(name, value);
		} else {
			if (!this.viewProps[key])
				this.viewProps[key] = {};
			this.viewProps[key][name] = value;
		}
	}

	createDecorators(decorators) {}

	/**
	 * Get properties needed for rendering this element
	 * @returns {{key: (string|*), className: *, namespace: *, bounds: *}}
	 */
	getView(key) {
		let bounds = this.getBounds(key);
		return {
			id: this.id,
			key: key,
			className: this.computedClassName,
			namespace: this.namespace,
			x: bounds.x,
			y: bounds.y,
			width: bounds.width,
			height: bounds.height,
			scale: this.viewProp(key, 'scale') || 1.0
		}
	}

	getBounds(key) {
		let bounds = Cache.get(this.id + ".bounds", key);
		if (bounds) return bounds;

		let shape = this.viewProp(key, 'shape');
		let x = this.viewProp(key, "x") || 0;
		let y = this.viewProp(key, "y") || 0;
		let w = this.viewProp(key, "width") || (shape ? shape.width : 0);
		let h = this.viewProp(key, "height") || (shape ? shape.height : 0);
		bounds = new Rectangle(x, y, w, h);
		Cache.set(this.id + '.bounds', bounds, key);
		return bounds;
	}

	render(view) {
		let template = Cache.get(this.id + '.template', view.id);
		if (!template) {
			//create the template
			let role = this.prop('role');
			template = view.getTemplate('$' + role, null, this);
			if (_.isString(template))
				template = _.template(template);
			Cache.set(this.id + '.template', template, view.id);
		}
		return template(this.getView(view.id));
	}

	renderShape(view) {
		let shape = this.prop('shape');
		if (shape) {
			let template = _.template(view.getTemplate(shape.name, shape));
			return template(this.getView(view.id));
		}
		return '';
	}

	renderLabel(view) {
		if (this == this.graph.getCurrentRoot())
			return null;
		let box = this.getLabelBox(view.id);
		if (box)
			return Label.SVG_TEMPLATE(box);
		return '';
	}

	getLabelBox(key) {
		let box = Cache.get(this.id + '.labelBox', key);
		if (box) return box;
		let bounds = this.getBounds(key);
		// Just get the config will have a positive performance boost for IE11 and IE10.
		box = Label.getLabelBox(this.prop('label'), bounds.width, bounds.height, this.viewProp(key, 'labelConfig'));
		Cache.set(this.id + '.labelBox', box, key);
		return box;
	}

	get computedClassName() {
		if (!this._computedClassName) {
			var buf = new StringBuffer(this.prop("role"));
			let props = this.props;
			if (props.hasOwnProperty("className"))
				buf.append(props["className"]);
			props = props.constructor.prototype;
			while (props) {
				if (props.hasOwnProperty("className"))
					buf.append(props["className"]);
				props = Object.getPrototypeOf(props);
			}
			this._computedClassName = buf.toString(' ');
		}
		return this._computedClassName;
	}

	get namespace() {
		if (this == this.graph.getCurrentRoot()) return '';
		return "root." + this.prop("role");
	}

	destroy() {
		delete this.graph;
		delete this.decorators;
		delete this.props;
		delete this.viewProps;
		this.destroyed = true;
	}
}

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
