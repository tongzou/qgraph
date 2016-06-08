import _ from "lodash";
import Utils from "../util/Utils";
import Node from "./Node";
import Edge from "./Edge";

const nodeDefaults = {
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

const edgeDefaults = {
	name: 'Default',
	role: 'edge',
	selectable: true,
	visible: true
};

class Graph {
	constructor(id = _.uniqueId("G"), config = {}, model) {
		this.id = id;

		this.nodes = {};
		this.edges = {};

		this.selection = null;
		this.destroyed = false;

		Utils.buildTypes(config.nodeTypes, "Nodes", nodeDefaults);
		Utils.buildTypes(config.edgeTypes, "Edges", edgeDefaults);

		delete config.nodeTypes;
		delete config.edgeTypes;
		Utils.initConfig(this, config);
		this.root = null;
		if (model)
			this.loadModel(model);
	}

	static getJSClass(config, defaultClass) {
		var jsClass = null;
		if (config && config.type) {
			// See if we can get the js class from config.
			var type = Utils.type(defaultClass.namespace, config.type);
			if (type)
				jsClass = type.jsClass;
		}

		return Utils.getConstructor(jsClass, defaultClass);
	}

	/**
	 * Create a new Node
	 */
	addNode(config, parent = this.getCurrentRoot(), pos) {
		let NodeClass = Graph.getJSClass(config, Node);
		let node = new NodeClass(this, config);

		if (parent)
			Graph.addChild(parent, node, pos);
		else {
			this.root = node;
			this.root.prop('role', 'root');
		}

		this.nodes[node.id] = node;
		return node;
	}

	addEdge(config, parent = this.getCurrentRoot(), from, to) {
		let EdgeClass = Graph.getJSClass(config, Edge);
		let edge = new EdgeClass(this, config, from, to);

		Graph.addChild(parent, edge);
		this.edges[edge.id] = edge;
		return edge;
	}

	static addChild(parent, child) {
		if (!parent.children)
			parent.children = [];

		if (child.parent != parent) {
			parent.children.push(child);

			if (child.parent && child.parent.children)
				child.parent.children = _.without(child.parent.children, child);
		}
		child.parent = parent;
	}

	loadModel(model, parent = this.getCurrentRoot()) {
		var nodes = model.nodes;
		var edges = model.edges;
		delete model.nodes;
		delete model.edges;

		var node = this.addNode(model, parent);
		if (nodes) {
			_.forEach(nodes, (child) => {
				this.loadModel(child, node);
			});
		}
		if (edges) {
			_.forEach(edges, (edge) => {
				let from, to;
				if (edge.from)
					from = this.nodes[edge.from];
				if (edge.to)
					to = this.nodes[edge.to];
				this.addEdge(edge, node, from, to);
			});
		}
	}

	getCurrentRoot() {
		return this.root;
	}

	reset() {}
	destroy() {}
}

Graph.DEFAULTS = {
	allowDanglingEdges: true,
	multiConnect: false,
	readOnly: false,
	viewOnly: false
};

export default Graph;
