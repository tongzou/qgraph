import Shape from "./Shape";
import Point from "./Point";
import Rectangle from "./Rectangle";

export default class Ellipse extends Shape {
	toString() {
		return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
	}

	static getPerimeter(rect, pt, orthogonal = false) {
		var a = rect.width / 2;
		var b = rect.height / 2;
		var cx = rect.x;
		var cy = rect.y;
		var px = pt.x;
		var py = pt.y;

		// Calculates straight line equation through
		// point and ellipse center y = d * x + h
		var dx = parseInt(px - cx);
		var dy = parseInt(py - cy);

		var tx, ty;

		if (dx == 0 && dy != 0) {
			return new Point(cx, cy + b * dy / Math.abs(dy));
		} else if (dx == 0 && dy == 0) {
			return new Point(px, py);
		}

		if (orthogonal) {
			if (py >= rect.top && py <= rect.bottom) {
				ty = py - cy;
				tx = Math.sqrt(a * a * (1 - (ty * ty) / (b * b))) || 0;

				if (px <= rect.left) {
					tx = -tx;
				}

				return new Point(cx + tx, py);
			}

			if (px >= rect.left && px <= rect.right) {
				tx = px - cx;
				ty = Math.sqrt(b * b * (1 - (tx * tx) / (a * a))) || 0;

				if (py <= rect.top) {
					ty = -ty;
				}

				return new Point(px, cy + ty);
			}
		}

		// Calculates intersection
		var d = dy / dx;
		var h = cy - d * cx;
		var e = a * a * d * d + b * b;
		var f = -2 * cx * e;
		var g = a * a * d * d * cx * cx + b * b * cx * cx - a * a * b * b;
		var det = Math.sqrt(f * f - 4 * e * g);

		// Two solutions (perimeter points)
		var xout1 = (-f + det) / (2 * e);
		var xout2 = (-f - det) / (2 * e);
		var yout1 = d * xout1 + h;
		var yout2 = d * xout2 + h;
		var dist1 = Math.sqrt(Math.pow((xout1 - px), 2) + Math.pow((yout1 - py), 2));
		var dist2 = Math.sqrt(Math.pow((xout2 - px), 2) + Math.pow((yout2 - py), 2));

		// Correct solution
		var xout = 0;
		var yout = 0;

		if (dist1 < dist2) {
			xout = xout1;
			yout = yout1;
		} else {
			xout = xout2;
			yout = yout2;
		}

		let p = new Point(xout, yout);
		let dir = Rectangle.getDirection(rect, p, orthogonal);
		return {point: p, direction: dir};
	}
}
