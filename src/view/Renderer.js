import _ from "lodash";
import Events from "bean";
import Utils from "../util/Utils";
import DomUtils from "../util/DomUtils";
import Layout from "../layout/Layout";
import Rectangle from "../geometry/Rectangle";
import EventDispatcher from "../event/EventDispatcher";
import GraphBehavior from "../behavior/GraphBehavior";
import SelectionBehavior from "../behavior/SelectionBehavior";
import Label from "./Label";

class Renderer {
	constructor(id, container, config = {}, graph = null) {
		this.id = id;
		this.box = DomUtils.createElement('div', {id: this.id, tabindex: 0, ns: 'graph'}, {overflow: "hidden", width: "100%", height: "100%", position: 'relative'});
		container.appendChild(this.box);
		if (config.layout) {
			let layoutClass = Utils.getConstructor(config.layout.jsClass, Layout);
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
		Utils.initConfig(this, config);

		Events.on(Label.editor, 'editor.update.*', _.bind(function(key, value) {
			//this.graph.nodes[key].prop('label', value);
			//this.render();
			console.log(key + '=' + value);
		}, this));
	}

	get graph() {
		return this._graph;
	}

	set graph(graph) {
		this._graph = graph;
		let root = graph.currentRoot;
		if (root) {
			this._translate = [root.viewProp(this.id, 'x') || 0, root.viewProp(this.id, 'y') || 0];
			this._scale = root.viewProp(this.id, 'scale') || 1.0;
		}
	}

	viewport(scaled, viewport) {
		if (_.isUndefined(scaled) || _.isNull(scaled)) scaled = false;
		if (!viewport) {
			let vp = new Rectangle(0, 0, this.box.offsetWidth, this.box.offsetHeight);
			if (scaled)
				return Utils.scale(this.translate, this.scale, vp);
			return vp;
		}
		if (!scaled) viewport = Utils.scale(this.translate, this.scale, viewport);
		let w = this.box.offsetWidth;
		let scale = w / viewport.width;
		this.transform(-viewport.x*scale, -viewport.y*scale, scale);
	}

	get translate() { return this._translate; }
	set translate(t) { this.transform(t[0], t[1]); }
	get scale() { return this._scale; }
	set scale(k) {
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
				let gridSize = this.prop("gridSize") * 2;

				let gBounds = this.getBounds();
				let vBounds = this.viewport();

				vBounds.width -= gridSize;
				vBounds.height -= gridSize;

				/* Do not zoom more than actual if graph already fits into the bounds */
				k = Math.min((vBounds.width / gBounds.width), (vBounds.height /gBounds.height), 1.0);

				//TODO: Add centering code here or trigger an event for that
				break;
			default:
				if (_.isString(k)) k = parseFloat(k);
				break;
		}
		this.transform(null, null, k);
	}

	transform(x = null, y = null, scale = null) {
		let graph = this.graph;
		let root = graph ? graph.currentRoot : null;
		if (!_.isNull(x)) {
			this._translate[0] = x;
			if (root)
				root.viewProp(this.id, 'x', x);
		}
		if (!_.isNull(y)) {
			this._translate[1] = y;
			if (root)
				root.viewProp(this.id, 'y', y);
		}
		if (!_.isNull(scale)) {
			this._scale = scale;
			if (root)
				root.viewProp(this.id, 'scale', scale);
			// sync the scale between the dispatcher and the graph
			let s = this.dispatcher.scale;
			if (s != scale)
				this.dispatcher.scale = scale;
		}
		this.refresh();
	}

	render() {
		if (!this._graph) return false;
		if (this.layout)
			this.layout.layout(this._graph.currentRoot, this.viewport());

		this.initializeBehaviors();
		return true;
	}

	renderLabel(box) {
		return this.constructor.renderLabel(box);
	}

	renderLink(shape) {
		return this.constructor.renderLink(shape);
	}

	renderMarkers(markers) {
		return this.constructor.renderMarkers(markers);
	}

	initializeBehaviors() {
		// create the event dispatcher if necessary.
		if (!this.dispatcher) {
			this.dispatcher = new EventDispatcher(this.box, [this.prop('minZoom'), this.prop('maxZoom')]);
			let jsClass;
			if (this.prop('graphBehavior')) {
				jsClass = Utils.getConstructor(this.prop('graphBehavior'));
				this.graphBehavior = new jsClass(this);
			}
			if (this.prop('selectionBehavior')) {
				jsClass = Utils.getConstructor(this.prop('selectionBehavior'));
				this.selectionBehavior = new jsClass(this);
			}
			this.dispatcher.register('mouseup.node.label', function(type, ns, target, pos, event) {
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
			}, this);
		}
		this.dispatcher.start();
	}

	refresh() {}

	/**
	 * Get the template for the specified key.
	 * @param key
	 * @param config if the template is a function, this config will be passed as the argument.
	 * @param preprocessor if the template contains preprossing elements, such as #{shape}, the preprocessor will be
	 * used to render them.
	 * @returns {*}
	 */
	getTemplate(key, config, preprocessor) {
		let t = this.constructor.TEMPLATES[key];
		if (t && _.isFunction(t)) {
			t = t(config);
		}
		// check if there are any preprocessing tags.
		if (preprocessor) {
			let parts = t.match(/(#{[^#]*})/g);
			let obj = {};
			for (let part in parts) {
				part = parts[part];
				part = part.substring(2, part.length -1).trim();
				obj[part] = preprocessor[_.camelCase('render ' + part)](this);
			}
			t = _.template(t, {interpolate: /#{([\s\S]+?)}/g})(obj);
		}
		return t;
	}

	reset() {}

	destroy() {
		delete this._graph;
		delete this.layout;
		if (this.dispatcher) {
			this.dispatcher.stop();
			delete this.dispatcher;
		}
		this.box.innerHTML = '';
	}
}
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
	graphBehavior: GraphBehavior,
	selectionBehavior: SelectionBehavior
};

export default Renderer;
