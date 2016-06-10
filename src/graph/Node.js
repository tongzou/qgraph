import _ from "lodash";
import StringBuffer from "../util/StringBuffer";
import Element from "./Element";

class Node extends Element {
	constructor(graph, config = {}) {
		if (!config.id) config.id = _.uniqueId('N');
		super(graph, config);

		this.inEdges = [];
		this.outEdges = [];
		this.ports = null;
		this.parent = null;
	}

	isAncestor(n) {
		// TODO: should we move this to graph class ?
		var node = n.parent;
		while (node) {
			if (this == node) { return true };
			node = node.parent;
		}
		return false;
	}

	removeEdge(edge) {
		var edges = edge.source == this ? this.outEdges : this.inEdges;
		for (var i = 0; i < edges.length; i++) {
			if (edge == edges[i]) {
				edges.splice(i, 1);
				break;
			}
		}
	}

	// Add a new incoming edge
	addInEdge(edge, pos) {
		if (pos == null || pos === undefined)
			this.inEdges.push(edge);
		else
			this.inEdges.splice(pos, 0, edge);
	}

	// Add a new outgoing edge
	addOutEdge(edge, pos) {
		if (pos == null || pos === undefined || pos > edge.length - 1)
			this.outEdges.push(edge);
		else
			this.outEdges.splice(pos, 0, edge);
	}

	renderChildren(view) {
		if (this.children) {
			let buf = new StringBuffer();
			_.forEach(this.children, (child) => {
				buf.append(child.render(view));
			});
			return buf.toString();
		}
		return '';
	}

	getPort(key, portName = 'auto', endPt) {
		let shape = this.getShape(key), pt;
		if (portName == 'auto') {
			pt = shape.getPerimeter(endPt);
			return pt;
		}
		return null;
	}

	toString() {
		var label = this.prop("label") ? this.prop("label") : "undefined";
		if (_.isArray(label))
			label = label[0];
		return 'Node:{id:' + this.id + ';label:' + label + ';type:' + this.props.constructor.typeName + '}';
	}
}
Node.namespace = "Nodes";

export default Node;

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
