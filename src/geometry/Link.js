import Shape from "./Shape";

export default class Link extends Shape {
	constructor(x, y, width, height, config) {
		super(x, y, width, height, config);

	}

	set edge(edge) {
		this._edge = edge;
	}

	getPoints() {
		if (!this.points || this.points.length == 0) {
			delete this.length;
			this.points = EdgeStyle.getPoints(this);
		}

		return this.points;
	}

	/**
	 *
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
	 * Calculate the position where to put modifiers or label..
	 *
	 * @param geometry: defines how far along the edge should the point be placed.
	 * @return *[] the relative position.
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
		return 'Link';
	}
}

