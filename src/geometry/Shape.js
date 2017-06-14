import _ from "lodash";
import Point from "./Point";
import Rectangle from "./Rectangle";

let registry = {};

class Shape {
	constructor(x, y, width, height, config) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		_.defaults(this, config, {x: 0, y: 0, width: 0, height: 0});
	}

	/**
	 * Return the y-coord of the top side of this rectangle
	 */
	get top() { return this.y - this.height/2; }

	/**
	 * Returns the y-coordinate of the bottom of this Rectangle.
	 */
	get bottom() { return this.y + this.height/2; }

	/**
	 * Return the x-coord of left side of this rectangle
	 */
	get left() { return this.x - this.width/2; }

	/**
	 * Returns the x-coordinate of the right side of this Rectangle.
	 */
	get right() { return this.x + this.width/2; }

	get center() { return new Point(this.x, this.y); }

	get bounds() { return new Rectangle(this.x, this.y, this.width, this.height); }

	contains(el) { return false; }

	/**
	 * This will generate n ports on the shape.
	 */
	getRegularPoints(n) {return null;}

	/**
	 * Get the intersection between boundary of this shape and the line connecting (x,y) with the refPt.
	 * @param refPt
	 * @param orthogonal
	 * @returns {*|{point, direction}}
	 */
	getPerimeter(refPt, orthogonal = false) {
		return this.constructor.getPerimeter(this, refPt, orthogonal);
	}

	render(view) {
		let template = _.template(view.getTemplate(this.name, this));
		return template(this);
	}

	static getShape(name) {
		return registry[name];
	}

	static addShape(name, c) {
		registry[name] = c;
	}

	static removeShape(name) {
		delete registry[name];
	}
}

export default Shape;


