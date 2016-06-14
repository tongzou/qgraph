import _ from "lodash";
import Events from "bean";
import Utils from "../util/Utils";
import DomUtils from "../util/DomUtils";
import Layout from "../layout/Layout";
import Rectangle from "../geometry/Rectangle";
import EventDispatcher from "../event/EventDispatcher";
import Label from "./Label";

class GraphView {
	constructor(id, container, config = {}) {
		this.id = id;
		this.box = DomUtils.createElement('div', {id:this.id, tabindex:0}, {overflow: "hidden", width: "100%", height: "100%", position: 'relative'});
		container.appendChild(this.box);
		if (config.layout) {
			let layoutClass = Utils.getConstructor(config.layout.jsClass, Layout);
			this.layout = new layoutClass(config.layout.config);
			delete config.layout;
		}
		this.clear = true;
		this._graph = null;
		this.dispatcher = null;
		Utils.initConfig(this, config);

		Events.on(Label.editor, 'editor.update.*', function(key, value) {
			console.log(key + '=' + value);
		});
	}

	graph(graph) {
		if (graph) {
			this._graph = graph;
			return this;
		}
		return this._graph;
	}

	viewport(scaled, viewport) {
		if (_.isUndefined(scaled) || _.isNull(scaled)) scaled = false;
		if (!viewport) {
			var vp = new Rectangle(0, 0, this.box.offsetWidth, this.box.offsetHeight);
			if (scaled)
				return Utils.scale(this, vp);
			return vp;
		}
		if (!scaled) viewport = Utils.scale(this, viewport);
		var w = this.box.offsetWidth;
		var scale = w / viewport.width;
		this.transform(-viewport.x*scale, -viewport.y*scale, scale);
	}

	translate(t) {
		if (!this._graph) return [0, 0];
		if (!arguments.length) {
			var root = this._graph.getCurrentRoot();
			if (!root)
				return [0, 0];
			return [root.viewProp(this.id, 'x') || 0, root.viewProp(this.id, 'y') || 0];
		}
		this.transform(t[0], t[1]);
	}

	scale(k) {
		if (!this._graph) return 1.0;
		if (!arguments.length) {
			var root = this._graph.getCurrentRoot();
			if (!root) return 1.0;

			return root.viewProp(this.id, 'scale') || 1.0;
		}

		switch (k) {
			case "in":
				k = this.scale() * this.prop("zoomFactor");
				break;
			case "out":
				k = this.scale() / this.prop("zoomFactor");
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
				k = Math.min((vBounds.width / gBounds.width), (vBounds.height /gBounds.height), 1.0);

				//TODO: Add centering code here or trigger an event for that
				break;
			default:
				if (_.isString(k)) k = parseFloat(k);
				break;
		}
		this.transform(null, null, k);
	}

	transform(x, y, scale) {
		if (!this._graph) return;
		var root = this._graph.getCurrentRoot();
		if (!root) return;

		/*if (!_.isNull(x) && !_.isNull(y))
			root.move(x, y);
		if (scale) {
			scale = Math.max(this.getProperty("minZoom"), Math.min(this.getProperty("maxZoom"), scale));
			root.setProperty('scale', scale);
			// sync the scale between the zoom behavior and the graph
			var zoom = this.eventDispatcher.zoom;
			if (zoom.scale() != scale)
				zoom.scale(scale);
		}

		this.trigger(Graph.EVENT_TYPES.REFRESH);*/
	}

	render() {
		if (!this._graph) return false;
		// intialize views
		if (this.layout)
			this.layout.layout(this._graph.getCurrentRoot(), this.viewport());

		// create the event dispatcher if necessary.
		if (!this.dispatcher) {
			this.dispatcher = new EventDispatcher(this.box);
			this.dispatcher.register('mouseup.node.label', function(type, ns, target, pos, event) {
				let node = this._graph.nodes[target.getAttribute('id')];
				if (!this.dispatcher.dragging && !node._firstSelection) {
					Label._delayEdit = _.delay(() => {
						if (Label._delayEdit) {
							delete Label._delayEdit;
							Label.editor.start(node.id, this.box, node.getLabelBox(this.id), target, event.nsTarget);
						}
					}, 250);
				}
			}, this);
			this.dispatcher.register(['mousedown.*', 'zoom*'], function(type, ns, target, pos, event) {
				if (!DomUtils.eventFromInput(event)) {
					Label.editor.stop();
				}
			}, this);
		}
		this.dispatcher.start();
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

	/**
	 * Get the template for the specified key.
	 * @param key
	 * @param config if the template is a function, this config will be passed as the argument.
	 * @param preprocessor if the template contains preprossing elements, such as #{shape}, the preprocessor will be
	 * used to render them.
	 * @returns {*}
	 */
	getTemplate(key, config, preprocessor) {
		var t = this.constructor.TEMPLATES[key];
		if (t && _.isFunction(t)) {
			t = t(config);
		}
		// check if there are any preprocessing tags.
		if (preprocessor) {
			var parts = t.match(/(#{[^#]*})/g);
			var obj = {};
			for (let part of parts) {
				part = part.substring(2, part.length -1).trim();
				obj[part] = preprocessor[_.camelCase('render ' + part)](this);
			}
			t = _.template(t, {interpolate: /#{([\s\S]+?)}/g})(obj);
		}
		return t;
	}

	reset() {}
	destroy() {}
}
GraphView.DEFAULTS = {
	defaultClickMode: "pan",
	hideOutline: false,
	singleSelect: true,
	draggable: true,
	gridEnabled: false,
	guidesEnabled: true,
	gridSize: 30,
	maxZoom: 4.0,
	minZoom: 0.1,
	zoomFactor: 1.2,
	maskOpacity: 0.5
};

export default GraphView;
