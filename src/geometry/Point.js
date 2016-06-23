class Point {
	constructor(x, y) {
		this.x = x;
		this.y = y;
	}

	/**
	 * Make a clone of this point
	 */
	clone() {
		return new Point(this.x, this.y);
	}

	/**
	 * Calculate the distance from this pt to the other pt.
	 * @param aPt
	 * @returns {number}
	 */
	distance(aPt) {
		return Math.sqrt((this.x - aPt.x) * (this.x - aPt.x) + (this.y - aPt.y) * (this.y - aPt.y));
	}

	/**
	 * Translate this point
 	 */
	translate(p2) {
		this.x += p2.x;
		this.y += p2.y;
		return this;
	}

	/**
	 * Scale this vector
 	 */
	scale(scale) {
		this.x *= scale;
		this.y *= scale;
		return this;
	}

	getScaled(scale) {
		return new Point(this.x * scale, this.y * scale);
	}

	getTranslated(p2) {
		return new Point(this.x + p2.x, this.y + p2.y);
	}

	/**
	 * Get the direction vector from this point to p2.
	 * @param p2
	 * @returns {Point}
	 */
	getDirection(p2) {
		var dist = this.distance(p2);
		return new Point((p2.x - this.x) / dist, (p2.y - this.y) / dist);
	}

	/**
	 * rotate the point about the origin. With the specified angle.
	 * @param angle the angle to rotate
	 */
	rotate(angle) {
		var cos = Math.cos(angle * Math.PI / 180);
		var sin = Math.sin(angle * Math.PI / 180);
		var x = this.x, y = this.y;
		this.x = x * cos - y * sin;
		this.y = x * sin + y * cos;
		return this;
	}

	getRotated(angle) {
		return this.clone().rotate(angle);
	}

	/**
	 * Calculate the dot product, treating this and p2 as vectors.
	 */
	dotProduct(p2) {
		return this.x * p2.x + this.y * p2.y;
	}

	/**
	 * Get the mid point between this and p2.
 	 */
	getMidPoint(p2) {
		return new Point((this.x + p2.x) / 2, (this.y + p2.y) / 2);
	}

	reverse() {
		this.x = -this.x;
		this.y = -this.y;
		return this;
	}

	equals(p2) {
		if (!p2 || p2.constructor != Point) return false;

		return (this.x == p2.x && this.y == p2.y);
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
	reflect(rect, vertical) {
		if (vertical)
			this.x = 2 * rect.x - this.x;
		else
			this.y = 2 * rect.y - this.y;
		return this;
	}

	toString() {
		return this.x + "," + this.y;
	}
}

Point.W = new Point(-1, 0);
Point.N = new Point(0, -1);
Point.S = new Point(0, 1);
Point.E = new Point(1, 0);
Point.NE = new Point(1, -1);
Point.NW = new Point(-1, -1);
Point.SE = new Point(1, 1);
Point.SW = new Point(-1, 1);

export default Point;
