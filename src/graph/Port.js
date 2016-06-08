import Rectangle from "../geometry/Rectangle";

/**
 * Port takes care of the input/output points on a Node
 */
const Port = (function () {
	function getStartPoint(edge) {
		var n = edge.source;
		var refPts = edge.getReferencePoints();
		var perimeter, bounds = getBounds(edge, true), direction;
		if (!n) {
			direction = null;
		} else {
			var config = n.getProperty("shapeConfig");
			direction = config.direction;
			perimeter = Perimeter[s.capitalize(config.perimeter)];
		}
		if (!perimeter)
			perimeter = Perimeter["RectanglePerimeter"];
		return perimeter(bounds, direction, refPts[1], false);
	}

	function getEndPoint(edge) {
		var n = edge.target;
		var refPts = edge.getReferencePoints();
		var perimeter, bounds = getBounds(edge, false), direction;
		if (!n) {
			direction = null;
		} else {
			var config = n.getProperty("shapeConfig");
			direction = config.direction;
			perimeter = Perimeter[s.capitalize(config.perimeter)];
		}
		if (!perimeter)
			perimeter = Perimeter["RectanglePerimeter"];
		return perimeter(bounds, direction, refPts[0], false);
	}

	function getBounds(edge, source) {
		var v = source ? edge.source : edge.target;
		var refPts = edge.getReferencePoints();
		var index = source ? 0 : 1;
		var bounds;
		if (!v)
			bounds = new Rectangle(refPts[index].x, refPts[index].y, 6, 6);
		else
			bounds = v.getBounds();
		return bounds;
	}

	function getAnchorLayouts(shape, count, direct) {
		var i;
		var coords = getCoords()[shape][count];
		if (shape == "trianglePerimeter") {
			var buf;
			switch (direct) {
				case "west":
					for (i = 0; i < coords.length; i++) {
						coords[i][0] = 1 - coords[i][0];
					}
					break;
				case "north":
					for (i = 0; i < coords.length; i++) {
						buf = coords[i][0];
						coords[i][0] = coords[i][1];
						coords[i][1] = 1 - buf;
					}
					break;
				case "south":
					for (i = 0; i < coords.length; i++) {
						buf = coords[i][0];
						coords[i][0] = coords[i][1];
						coords[i][1] = buf;
					}
					break;
			}
		}
		return coords;
	}

	function getCoords() {
		return {
			"rhombusPerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1], [0.25, 0.75], [0.75, 0.75]],
				"8": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1], [0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]
			},
			"trianglePerimeter": {
				"0": [],
				"3": [[0, 0], [0, 1], [1, 0.5]],
				"4": [[0, 0], [0, 1], [1, 0.5], [0, 0.5]],
				"6": [[0, 0], [0, 1], [1, 0.5], [0, 0.5], [0.5, 0.25], [0.5, 0.75]],
				"8": [[0, 0], [0, 1], [1, 0.5], [0, 0.5], [0.25, 1], [0.75, 1], [0.25, 0], [0.75, 0]]
			},
			"rectanglePerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.33, 0], [0.67, 0], [0.33, 1], [0.67, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.25, 0], [0.5, 0], [0.75, 0], [0.25, 1], [0.5, 1], [0.75, 1]]
			},
			"ellipsePerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.2, 0], [0.8, 0], [0.2, 1], [0.8, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.15, 0], [0.5, 0], [0.85, 0], [0.15, 1], [0.5, 1], [0.85, 1]]
			},
			"hexagonPerimeter": {
				"0": [],
				"3": [[0.5, 0], [0.25, 1], [0.75, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.25, 0], [0.75, 0], [0.25, 1], [0.75, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.25, 0], [0.5, 0], [0.75, 0], [0.25, 1], [0.5, 1], [0.75, 1]]
			}
		};
	}

	return {
		getStartPoint,
		getEndPoint,
		getBounds,
		getAnchorLayouts
	};
})();

export default Port;
