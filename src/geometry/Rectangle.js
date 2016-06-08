import _ from "lodash";
import Point from "./Point";
import Shape from "./Shape";

export default class Rectangle extends Shape {

	/**
	 * Return the bounding rectangle that contains p1 and p2
	 */
	static getBoundingRectangle(pts, margin) {
		if (!pts || pts.length == 0) return null;
		margin = margin || [0, 0, 0, 0];
		if (!_.isArray(margin))
			margin = [margin, margin, margin, margin];
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
		return new Rectangle(min[0] + w/2, min[1] + h/2, w, h);
	}

	/**
	 * Create a union of all the rectangles.
	 * @param rects
	 */
	static union(rects) {
		var minx = null, miny = null, maxx = -Infinity, maxy = -Infinity;
		_.each(rects, function (rect) {
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
	 * Checks whether this rectangle contains a given point of a given rectangle
	 */
	contains(el) {
		let w = el.width || 0;
		let h = el.height || 0;
		let left = el.x - w/2;
		let right = el.x + w/2;
		let top = el.y - h/2;
		let bottom = el.y + h/2;
		return (right <= this.right) && (left >= this.left) &&
			(top >= this.top) && (bottom <= this.bottom);
	}

	/**
	 * Calcualte the distance to a point. 0 if this rectangle contains the point.
	 */
	distance(pt) {
		if (this.contains(pt)) return 0;

		if (pt.x < this.left) {
			if (pt.y < this.top)
				return pt.distance(new Point(this.left, this.top));
			if (pt.y <= this.bottom)
				return this.left - pt.x;
			return pt.distance(new Point(this.left, this.bottom));
		}
		if (pt.x <= this.right) {
			if (pt.y <= this.top)
				return this.top - pt.y;
			return pt.y - this.bottom;
		}
		if (pt.y < this.top)
			return pt.distance(new Point(this.right, this.top));
		if (pt.y <= this.bottom)
			return pt.x - this.right;
		return pt.distance(new Point(this.right, this.bottom));
	}

	/**
	 * Given two points, we want to detect whether the line joining the pts intersect
	 * with the rectangle or not. We assume only horizontal or vertical line segments.
	 *
	 * @return int the side of the intersection: -1: no intersection, 0: left, 1: top, 2: right, 3: bottom, 4: containment.
	 */
	detectIntersection(pt1, pt2) {
		var horizontal = pt1.y == pt2.y;
		var contains1 = this.contains(pt1);
		var contains2 = this.contains(pt2);
		if (contains1 && contains2) return 4;
		if (!contains1 && !contains2) {
			if (horizontal && (pt1.y >= this.top && pt1.y <= this.bottom)) {
				if (pt1.x < this.left && pt2.x > this.right)
					return 0;
				if (pt1.x > this.right && pt2.x < this.left)
					return 2;
			}
			if (!horizontal && (pt1.x >= this.left && pt1.x <= this.right)) {
				if (pt1.y < this.top && pt2.y > this.bottom)
					return 1;
				if (pt1.y > this.bottom && pt2.y < this.top)
					return 3;
			}
			return -1;
		}

		var outPt = contains1 ? pt2 : pt1;
		if (horizontal) {
			if (outPt.x > this.right)
				return 2;
			return 0;
		} else {
			if (outPt.y < this.top)
				return 1;
			return 3;
		}
	}

	toString() {
		return 'Rectangle:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
	}
}
