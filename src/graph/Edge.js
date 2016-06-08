import _ from "lodash";
import Element from "./Element";
import Label from "../view/Label";

class Edge extends Element {
	constructor(graph, config = {}, source, target) {
		if (!config.id) config.id = _.uniqueId('E');
		super(graph, config);

		this.source = this.target = null;
		this.setSource(source, config.sourcePos);
		this.setTarget(target, config.targetPos);
	}

	setSource(node, pos) {
		this.setTerminal(node, pos, 'source');
	}

	setTarget(node, pos) {
		this.setTerminal(node, pos, 'target');
	}

	/**
	 * Internal methods to set either the source or target
	 */
	 setTerminal(node, pos, dir) {
		var end = dir == 'source' ? this.source : this.target;
		if (end == node) {
			// simply change the position of the edge.
			if (node)
				node.setEdgeAt(this, pos);
		} else {
			if (end) {
				// first remove the edge from the current end
				end.removeEdge(this);
			}

			if (node) {
				if (dir == 'source')
					node.addOutEdge(this, pos);
				else
					node.addInEdge(this, pos);
			}
			if (dir == 'source')
				this.source = node;
			else
				this.target = node;
			this.clearPoints();
		}
	}

	/*getView(key) {

	}*/

	getLabelBox(key) {
		return Label.getLabelBoxForEdge(this.prop('label'), this.getView(key), this.viewProp(key, 'labelConfig'));
	}

	getPoints() {
		/*if (this.graph.eventDispatcher.dragging) {
			this.clearPoints();
			return [Anchor.getStartPoint(this), Anchor.getEndPoint(this)];
		}*/

		if (!this.points || this.points.length == 0) {
			delete this.length;
			this.points = EdgeStyle.getPoints(this);
		}

		return this.points;
	}

	/**
	 * Return the total length of this connection, in pixels.
	 */
	getLength() {
		if (!_.isUndefined(this.length)) return this.length;

		var points = this.getPoints();
		var i, l = 0;
		for (i = 0; i < points.length - 1; i++)
			l += points[i].distance(points[i+1]);
		return this.length = l;
	}

	clearPoints() {
		delete this.points;
		delete this.length;
	}

	/**
	 * Return a pair of points as reference to the calculation of start and end points.
	 */
	getReferencePoints() {
		var pts = [];
		var refPts = this.prop('refPts');
		if (this.source)
			pts.push(this.source.getBounds().getCenter());
		else
			pts.push(refPts[0]);

		if (this.target)
			pts.push(this.target.getBounds().getCenter());
		else
			pts.push(refPts[1]);
		return pts;
	}

	 /**
	 * Calculate the position where to put modifiers or label..
	 *
	 * @param geometry: defines how far along the edge should the point be placed.
	 * @return the relative position.
	 */
	 getRelativePosition(geometry) {
		var p = geometry.x, l = this.getLength();
		if (_.isString(p)) {
			if (/%$/.test(p)) {
				p = s(p).strLeft('%').toNumber() / 100;
			} else if (/px$/.test(p)) {
				p = s(p).strLeft('px').toNumber();
			}
		}
		if (p >= -1 && p <= 1) p *= l;
		if (p < 0) p = l + p;
		if (p > l) p = l;

		var points = this.getPoints(), d, point, dir;
		for (var i = 0; i < points.length - 1; i++) {
			d = points[i].distance(points[i+1]);
			if (p <= d) {
				// we've located the line segment.
				point = points[i].clone();
				dir = point.getDirection(points[i+1]);
				point.translate(dir.getScaled(p));
				break;
			}
			p -= d;
		}

		// return the last point.
		if (!point)
			point = points[points.length - 1];
		return [point.x + geometry.offsetX, point.y + geometry.offsetY];
	}

	toString() {
		return 'Edge:{' + (_.isNull(this.source) ? 'null' : this.source.id) + '--' + (_.isNull(this.target) ? 'null' : this.target.id) + '}';
	}

	destroy() {
		super.destroy();
		this.setSource(null);
		this.setTarget(null);
	}
}
Edge.namespace = "Edges";

export default Edge;

/*

Edge.prototype.isVisible = function() {
	if (this.graph.getProperty("allowDanglingEdges")) {
		return (this.source ? this.source.isVisible() : true) && (this.target ? this.target.isVisible() : true) && this.getProperty("visible");
	} else
		return this.source && this.target && this.getProperty('visible') && this.source.isVisible() && this.target.isVisible();
};

*/
