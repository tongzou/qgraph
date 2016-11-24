import _ from "lodash";
import Point from "./Point";
import Utils from "../util/Utils";

let defaultConfig = {
	type: "direct",
	showGauge: true,
	orthogonal: false
};

let defaultGeometry = {
	width: 0,
	height: 0,
	anchorX: 0,
	anchorY: 0,
	offsetX: 0,
	offsetY: 0
};

let linkTypes = {};

class Link {
	constructor(terminalVisual, shapeConfig = {}, startMarker = null, endMarker = null) {
		this.start = terminalVisual[0].point;
		this.end = terminalVisual[1].point;
		this.startNormal = terminalVisual[0].direction;
		this.endNormal = terminalVisual[1].direction;
		this.startMarker = startMarker;
		this.endMarker = endMarker;
		_.assign(this, shapeConfig);
	}

	render(view) {
		return view.renderLink(this);
	}

	get points() { return null; }
	get controlPts() { return null; }
	get length() {
		let points = this.points;
		let i, l = 0;
		for (i = 0; i < points.length - 1; i++)
			l += points[i].distance(points[i+1]);
		return l;
	}

	/**
	 * Calculate the position where to put modifiers or label..
	 *
	 * @param geometry: defines how far along the edge should the point be placed.
	 * @return *[] the relative position.
	 */
	getRelativePosition(geometry) {
		if (_.isNumber(geometry))
			geometry = {x: geometry};
		geometry = _.defaults(geometry, defaultGeometry);
		let p = geometry.x, l = this.length;
		if (Math.abs(p) <= 1) p *= l;
		if (p < 0) p = l + p;
		if (p > l) p = l;

		let points = this.points, d, point, dir;
		for (let i = 0; i < points.length - 1; i++) {
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
		return Utils.offsetPosition([point.x, point.y], geometry);
	}

	toString() {
		return 'Link';
	}

	static getLink(terminalVisual, shapeConfig = {}, startMarker = null, endMarker = null) {
		shapeConfig = _.defaultsDeep(shapeConfig, defaultConfig);
		let linkClass = linkTypes[shapeConfig.type];
		if (linkClass)
			return new linkClass(terminalVisual, shapeConfig, startMarker, endMarker);
		console.log('link type not supported: ' + shapeConfig.type);
		return null;
	}
}

class DirectLink extends Link {
	get points() {
		return [this.start, this.end];
	}
}

class BezierLink extends Link {
	get points() {
		return [this.start, this.end];
	}

	get controlPts() {
		let s = this.points[0], e = this.points[1];
		let pts = [];
		pts[0] = null;
		pts[1] = [];
		if (this.startNormal.x == 0) {
			pts[1][0] = new Point(s.x, (s.y + e.y)/2);
		}
		else {
			pts[1][0] = new Point((s.x + e.x)/2, s.y);
		}
		if (this.endNormal.x == 0) {
			pts[1][1] = new Point(e.x, (s.y + e.y)/2);
		}
		else {
			pts[1][1] = new Point((s.x + e.x)/2, e.y);
		}
		return pts;
	}

	getRelativePosition(geometry) {
		if (_.isNumber(geometry))
			geometry = {x: geometry};
		geometry = _.defaults(geometry, defaultGeometry);
		let p = geometry.x, l = this.length;
		if (Math.abs(p) > 1) p /= l;
		if (p < 0) p++;
		if (p > 1) p--;

		let pts = this.points;
		let ctrlpts = this.controlPts;
		let p1 = pts[0];
		let p2 = ctrlpts[1][0];
		let p3 = ctrlpts[1][1];
		let p4 = pts[1];

		let point = [(1-p)*(1-p)*(1-p) * p1.x + 3*p*(1-p)*(1-p) * p2.x + 3*p*p*(1-p) * p3.x + p*p*p * p4.x, (1-p)*(1-p)*(1-p) * p1.y + 3*p*(1-p)*(1-p) * p2.y + 3*p*p*(1-p) * p3.y + p*p*p * p4.y];
		return Utils.offsetPosition([point.x, point.y], geometry);
	}
}

class EntityRelations extends Link {
	get points() {
		var source = Port.getBounds(edge, true);
		var target = Port.getBounds(edge, false);
		var isSourceLeft = target.right() < source.x;
		var isTargetLeft = source.right() < target.x;
		var result = [];

		var x0 = (isSourceLeft) ? source.x : source.x + source.width;
		var y0 = source.getCenterY();
		result.push(new Point(x0, y0));

		var xe = (isTargetLeft) ? target.x : target.x + target.width;
		var ye = target.getCenterY();

		var seg = this.segment;

		var dx = (isSourceLeft) ? -seg : seg;
		var dep = new Point(x0 + dx, y0);

		dx = (isTargetLeft) ? -seg : seg;
		var arr = new Point(xe + dx, ye);

		// Adds intermediate points if both go out on same side
		if (isSourceLeft == isTargetLeft)
		{
			var x = (isSourceLeft) ?
			Math.min(x0, xe)-seg :
			Math.max(x0, xe)+seg;

			result.push(new Point(x, y0));
			result.push(new Point(x, ye));
		}
		else if ((dep.x < arr.x) == isSourceLeft)
		{
			var midY = y0 + (ye - y0) / 2;

			result.push(dep);
			result.push(new Point(dep.x, midY));
			result.push(new Point(arr.x, midY));
			result.push(arr);
		}
		else
		{
			result.push(dep);
			result.push(arr);
		}

		result.push(new Point(xe, ye));
		return result;
	}
}

class Manhattan extends Link {
	constructor(terminalVisual, shapeConfig, startMarker, endMarker) {
		shapeConfig = _.defaults(shapeConfig, {
			MIN_BUFFER: 10,
			autoRoute: false,
			randomNoise: 0,
			step: 1,
			maxChannelWidth: 100
		});
		super(terminalVisual, shapeConfig, startMarker, endMarker);
	}

	get points() {
		let pos = Manhattan.route(this.start, this.end, this.startNormal, this.endNormal, this.MIN_BUFFER);
		if (this.autoRoute) {
			this._mergeSegments(pos);
			var boxes = [], node, startBox, endBox;
			var container = edge.source.getCommonAncestor(edge.target);
			var childNodes = container.getDescendants();
			var index = 0;
			for (var i = 0; i < childNodes.length; i++) {
				node = childNodes[i];
				// Do not include source or target ancestors in routing.
				if (node.excludeFromRouting(edge) || node.isAncestor(edge.source) || node.isAncestor(edge.target)) continue;
				if (node == edge.source)
				startBox = index;
				if (node == edge.target)
				endBox = index;
				boxes.push(node.getBounds(document));
				index++;
			}
			if (boxes.length > 1)
				this.autoRoute(pos, container.getBounds(document), boxes, startBox, endBox);
		}
		Manhattan._mergeSegments(pos);
		if (this.randomNoise && pos.length > 3) {
			for (var i = 1; i < pos.length - 2; i++) {
				var range = this.randomNoise / this.step;
				var randomNumber = Math.floor(Math.random() * range * 2 - range + 1) * this.step;
				this._moveSegment(pos, i, randomNumber, 1, 1);
			}
		}
		return pos;
	}

	//New function for finding route
	static route(start, end, startNormal, endNormal, buffer) {
		var startBuffer = new Point(start.x + startNormal.x * buffer, start.y + startNormal.y * buffer);
		var endBuffer = new Point(end.x + endNormal.x * buffer, end.y + endNormal.y * buffer);
		var startBufferNormal, endBufferNormal;
		var pts;
		if (startNormal.x != 0) {
			if ((endBuffer.x - startBuffer.x) / startNormal.x > 0) {
				startBufferNormal = startNormal;
			}
			else {
				startBufferNormal = new Point(0, (endBuffer.y >= startBuffer.y) ? 1 : -1);
			}
		}
		else {
			if ((endBuffer.y - startBuffer.y) / startNormal.y > 0) {
				startBufferNormal = startNormal;
			}
			else {
				startBufferNormal = new Point((endBuffer.x >= startBuffer.x) ? 1 : -1, 0);
			}
		}
		if (endNormal.x != 0) {
			if ((startBuffer.x - endBuffer.x) / endNormal.x > 0) {
				endBufferNormal = endNormal;
			}
			else {
				endBufferNormal = new Point(0, (startBuffer.y >= endBuffer.y) ? 1 : -1);
			}
		}
		else {
			if ((startBuffer.y - endBuffer.y) / endNormal.y > 0) {
				endBufferNormal = endNormal;
			}
			else {
				endBufferNormal = new Point((startBuffer.x >= endBuffer.x) ? 1 : -1, 0);
			}
		}

		if (startBufferNormal.dotProduct(endBufferNormal) == 0) {
			var middle = (startBufferNormal.x == 0) ? new Point(startBuffer.x, endBuffer.y) : new Point(endBuffer.x, startBuffer.y);
			pts = [start, startBuffer, middle, endBuffer, end];
		}
		else if (startBufferNormal.dotProduct(endBufferNormal) < 0) {
			if (startBufferNormal.x == 0) {
				pts = [start, startBuffer, new Point(startBuffer.x, (start.y + end.y) / 2), new Point(endBuffer.x, (start.y + end.y) / 2), endBuffer, end];
			}
			else {
				pts = [start, startBuffer, new Point((start.x + end.x) / 2, startBuffer.y), new Point((start.x + end.x) / 2, endBuffer.y), endBuffer, end];
			}
		}
		else {
			pts = [start, startBuffer, new Point(startBuffer.x + startBufferNormal.x * buffer, startBuffer.y + startBufferNormal.y * buffer), new Point(endBuffer.x + endBufferNormal.x * buffer, endBuffer.y + endBufferNormal.y * buffer), endBuffer, end];
		}

		var prunePts = [];
		prunePts[0] = pts[0];
		for (var i = 1; i < pts.length - 1; i++) {
			if ((pts[i].x == pts[i-1].x && pts[i].x == pts[i+1].x) || (pts[i].y == pts[i-1].y && pts[i].y == pts[i+1].y)) {
				continue;
			}
			prunePts.push(pts[i]);
		}
		prunePts.push(pts[pts.length - 1]);
		return prunePts;
	}

	/**
	 * Automatically route the connection to avoid intersections with other vertices.
	 */
	autoRoute(pts, container, boxes, startBox, endBox) {
		var side, side2, d, box, intersect, j;
		var channel, channel2, pt, dir;

		var startPadding = 0, endPadding;
		// first get the start and end channel
		box = boxes[endBox];
		pt = pts[pts.length - 2];
		if (pt.y < box.y)
			side = 1;
		else if (pt.y > box.y + box.height)
			side = 3;
		else if (pt.x < box.x)
			side = 0;
		else
			side = 2;
		channel = _getChannel(container, endBox, boxes, side);
		endPadding = channel.horizontal ? (channel.right - channel.left)/2 : (channel.bottom - channel.top)/2;

		for (var i = 0; i < pts.length - 1; i++) {
			if (pts[i+1].x == pts[i].x && pts[i+1].y == pts[i].y) continue;
			intersect = _getFirstIntersection(pts, i, boxes, startBox, endBox);
			if (!intersect) continue;
			j = intersect[0];
			side = intersect[1];
			box = boxes[j];
			channel = _getChannel(container, j, boxes, side);
			switch(side) {
				case 0:
				case 2:
					pt = new Point((channel.right + channel.left)/2, pts[i].y);
					dir = _getRouteTendency(pts, i, pt, box, side);
					side2 = dir < 0 ? 1 : 3;
					channel2 = _getChannel(container, j, boxes, side2);
					// if the previous point is in the channel2, use that point instead of center of the channel.
					if (i > 1 && (pts[i-2].y == pts[i-1].y) && (pts[i-1].y > channel2.top && pts[i-1].y < channel2.bottom))
						d = pts[i-1].y - pt.y;
					else if (i < pts.length - 3 && (pts[i+2].y == pts[i+3].y) && (pts[i+2].y > channel2.top && pts[i+2].y < channel2.bottom))
						d = pts[i+2].y - pt.y;
					else
						d = (channel2.bottom + channel2.top)/2 - pt.y;
					// check if we need this pt.
					if ((side == 0 && pt.x <= pts[i].x) || (side == 2 && pt.x >= pts[i].x))
						pt = null;
					else if (i > 0) {
						// see if we can push the line out to where we started.
						if (!_hasIntersection(
								[new Point(pts[i].x, pts[i].y), new Point(pts[i].x, pts[i].y + d), new Point(pt.x, pt.y + d)],
								boxes))
							pt = null;
					}
					break;
				case 1:
				case 3:
					pt = new Point(pts[i].x, (channel.bottom + channel.top)/2);
					dir = _getRouteTendency(pts, i, pt, box, side);
					side2 = dir < 0 ? 0 : 2;
					channel2 = _getChannel(container, j, boxes, side2);
					// if the previous point is in the channel2, use that point instead of center of the channel.
					if (i > 1 && (pts[i-2].x == pts[i-1].x) && (pts[i-1].x > channel2.left && pts[i-1].x < channel2.right))
						d = pts[i-1].x - pt.x;
					else if (i < pts.length - 3 && (pts[i+2].x == pts[i+3].x) && (pts[i+2].x > channel2.left && pts[i+2].x < channel2.right))
						d = pts[i+2].x - pt.x;
					else
						d = (channel2.right + channel2.left)/2 - pt.x;
					// check if we need this pt.
					if ((side == 1 && pt.y <= pts[i].y) || (side == 3 && pt.y >= pts[i].y))
						pt = null;
					else if (i > 0) {
						// see if we can push the line out to where we started.
						if (!_hasIntersection(
								[new Point(pts[i].x, pts[i].y), new Point(pts[i].x + d, pts[i].y), new Point(pt.x + d, pt.y)],
								boxes))
							pt = null;
					}
					break;
				case 4:
					continue;
			}
			// max points.
			if (i > 20) return;
			if (pt && (pt.x != pts[i].x || pt.y != pts[i].y)) {
				pts.splice(i+1, 0, pt);
				_moveSegment(pts, i+1, d, startPadding, endPadding);
				i++;
			} else
				_moveSegment(pts, i, d, startPadding, endPadding);
		}
	}

	static _hasIntersection(pts, boxes) {
		for (var i = 0; i < pts.length - 1; i++) {
			for (var j = 0; j < boxes.length; j++) {
				if (boxes[j].detectIntersection(pts[i], pts[i+1]) >= 0)
					return true;
			}
		}
		return false;
	}

	static _getFirstIntersection(pts, i, boxes, startBox, endBox) {
		var box, side, savedIndex = null, savedSide = null;
		for (var j = 0; j < boxes.length; j++) {
			if ((i == 0 && j == startBox) || (i == pts.length - 2 && j == endBox))
				continue;
			box = boxes[j];
			side = box.detectIntersection(pts[i], pts[i+1]);
			if (side >= 0) {
				if (savedIndex == null) {
					savedIndex = j;
					savedSide = side;
				} else {
					if (boxes[savedIndex].distance(pts[i]) > box.distance(pts[i])) {
						savedIndex = j;
						savedSide = side;
					}
				}
			}
		}
		if (savedIndex != null)
			return [savedIndex, savedSide];
		return null;
	}

	_getRouteTendency(pts, i, breakPt, box, side) {
		var dir;
		var p;
		switch (side) {
			case 0:
			case 2:
				p = "y";
				break;
			case 1:
			case 3:
				p = "x";
				break;
		}
		//first try the breakpt.
		dir = _getRouteDirection(breakPt, pts[pts.length - 1])[p];
		if (dir == 0) {
			dir = -_getRouteDirection(pts[0], pts[pts.length - 1])[p];
			if (dir == 0) {
				if (breakPt[p] < box.getCenter()[p])
					dir = -1;
				else
					dir = 1;
			}
		}
		return dir;
	}

	static _getRouteDirection(pt1, pt2) {
		if (pt1.x == pt2.x) {
			if (pt1.y < pt2.y) return Point.S;
			return Point.N;
		} else if (pt1.y == pt2.y) {
			if (pt1.x < pt2.x) return Point.E;
			return Point.W;
		} else if (pt1.x < pt2.x) {
			if (pt1.y < pt2.y) return Point.SE;
			return Point.NE;
		} else {
			if (pt1.y < pt2.y) return Point.SW;
			return Point.NW;
		}
	}

	_getChannel(container, index, boxes, side) {
		var maxChannelWidth = this.maxChannelWidth;
		var box1 = boxes[index], box2;
		var pt, i;
		var channel = {}, l, t, b, r;
		switch (side) {
			case 0:
				pt = box1.getLeft();
				channel.right = pt.x;
				channel.horizontal = false;
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					r = boxes[i].getRight().x;
					if (r >= pt.x) continue;
					if (!channel.left || channel.left < r)
						channel.left = r;
				}
				if (!channel.left) {
					channel.left = container.getLeft().x;
					if (channel.right - channel.left > maxChannelWidth)
						channel.left = channel.right - maxChannelWidth;
				}
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					box2 = boxes[i];
					b = box2.getBottom().y;
					t = box2.getTop().y;
					if (b < pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
						if (!channel.top || channel.top < b)
							channel.top = b;
					}
					if (t > pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
						if (!channel.bottom || channel.bottom > t)
							channel.bottom = t;
					}
				}
				if (!channel.top) channel.top = container.getTop().y;
				if (!channel.bottom) channel.bottom = container.getBottom().y;
				break;
			case 1:
				pt = box1.getTop();
				channel.horizontal = true;
				channel.bottom = pt.y;
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					b = boxes[i].getBottom().y;
					if (b >= pt.y) continue;
					if (!channel.top || channel.top < b)
						channel.top = b;
				}
				if (!channel.top) {
					channel.top = container.getTop().y;
					if (channel.bottom - channel.top > maxChannelWidth)
						channel.top = channel.bottom - maxChannelWidth;
				}
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					box2 = boxes[i];
					l = box2.getLeft().x;
					r = box2.getRight().x;
					if (r < pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
						if (!channel.left || channel.left < r)
							channel.left = r;
					}
					if (l > pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
						if (!channel.right || channel.right > l)
							channel.right = l;
					}
				}
				if (!channel.left) channel.left = container.getLeft().x;
				if (!channel.right) channel.right = container.getRight().x;

				break;
			case 2:
				pt = box1.getRight();
				channel.horizontal = false;
				channel.left = pt.x;
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					l = boxes[i].getLeft().x;
					if (l <= pt.x) continue;
					if (!channel.right || channel.right > l)
						channel.right = l;
				}
				if (!channel.right) {
					channel.right = container.getRight().x;
					if (channel.right - channel.left > maxChannelWidth)
						channel.right = channel.left + maxChannelWidth;
				}
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					box2 = boxes[i];
					b = box2.getBottom().y;
					t = box2.getTop().y;
					if (b < pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
						if (!channel.top || channel.top < b)
							channel.top = b;
					}
					if (t > pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
						if (!channel.bottom || channel.bottom > t)
							channel.bottom = t;
					}
				}
				if (!channel.top) channel.top = container.getTop().y;
				if (!channel.bottom) channel.bottom = container.getBottom().y;
				break;
			case 3:
				pt = box1.getBottom();
				channel.horizontal = true;
				channel.top = pt.y;
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					box2 = boxes[i];
					if (box2.getTop().y <= pt.y) continue;
					if (!channel.bottom || channel.bottom > box2.getTop().y)
						channel.bottom = box2.getTop().y;
				}
				if (!channel.bottom) {
					channel.bottom = container.getBottom().y;
					if (channel.bottom - channel.top > maxChannelWidth)
						channel.bottom = channel.top + maxChannelWidth;
				}
				for (i = 0; i < boxes.length; i++) {
					if (i == index) continue;
					box2 = boxes[i];
					l = box2.getLeft().x;
					r = box2.getRight().x;
					if (r < pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
						if (!channel.left || channel.left < r)
							channel.left = r;
					}
					if (l > pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
						if (!channel.right || channel.right > l)
							channel.right = l;
					}
				}
				if (!channel.left) channel.left = container.getLeft().x;
				if (!channel.right) channel.right = container.getRight().x;
				break;
		}
		return channel;
	}

	/**
	 * Move a line segment by a specified distance.
	 *
	 * @param pts the list of points.
	 * @param i the index of the segment.
	 * @param d the distance to move.
	 * @param startPadding
	 * @param endPadding
	 */
	_moveSegment(pts, i, d, startPadding, endPadding) {
		// first check if we need to add new line segments.
		var dir, l, pt;
		if (i == 0) {
			// we need to break off the segment, since we can't change the starting point.
			dir = pts[0].getDirection(pts[1]);
			if (!startPadding)
				startPadding = this.MIN_BUFFER;
			l = Math.min(startPadding, pts[0].distance(pts[1])/2);
			pt = pts[0].getTranslated(dir.scale(l));
			pts.splice(1, 0, pt);
			this._moveSegment(pts, i+1, d);
			return;
		}
		if (i == pts.length - 2) {
			// we need to break off the segment, since we can't change the end point.
			dir = pts[pts.length-1].getDirection(pts[pts.length-2]);
			if (!endPadding)
				endPadding = this.MIN_BUFFER;
			l = Math.min(endPadding, pts[pts.length-1].distance(pts[pts.length-2])/2);
			pt = pts[pts.length - 1].getTranslated(dir.scale(l));
			pts.splice(pts.length - 1, 0, pt);
			this._moveSegment(pts, i, d);
			return;
		}

		if (pts[i].y == pts[i+1].y) {
			if (i > 0 && pts[i - 1].y == pts[i].y) {
				pts.splice(i + 1, 0, pts[i].clone());
				i++;
			}
			if (i < pts.length - 2 && pts[i+1].y == pts[i+2].y)
				pts.splice(i + 1, 0, pts[i+1].clone());
			pts[i].y += d;
			pts[i+1].y += d;
		} else {
			if (i > 0 && pts[i - 1].x == pts[i].x) {
				pts.splice(i + 1, 0, pts[i].clone());
				i++;
			}
			if (i < pts.length - 2 && pts[i+1].x == pts[i+2].x)
				pts.splice(i + 1, 0, pts[i+1].clone());
			pts[i].x += d;
			pts[i+1].x += d;
		}
	}

	/**
	 * This method will merge the redundant segments.
	 */
	static _mergeSegments(pts) {
		var h1 = pts[pts.length-1].y == pts[pts.length-2].y;
		var h2;
		for (var i = pts.length - 2; i >= 1; i--) {
			h2 = pts[i].y == pts[i-1].y;
			if (h2 == h1 || (pts[i].equals(pts[i-1])))
				pts.splice(i, 1);
			else
				h1 = !h1;
		}
	}
}

linkTypes['direct'] = DirectLink;
linkTypes['bezier'] = BezierLink;
linkTypes['entityRelations'] = EntityRelations;
linkTypes['manhattan'] = Manhattan;

export default Link;
