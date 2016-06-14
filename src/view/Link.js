import _ from "lodash";
import Events from "bean";
import Utils from "../util/Utils";
import DomUtils from "../util/DomUtils";
import StringBuffer from "../util/StringBuffer";
import Rectangle from "../geometry/Rectangle";

let defaultConfig = {
	linkStyle: "direct",
	showGauge: false
};

/**
 * The Link object handles link calculations and rendering.
 */
let Link = (function() {

	function getLinkShape(terminalPts, terminalDirections, shapeConfig = {}, startMarker = null, endMarker = null) {
		shapeConfig = _.defaultsDeep(shapeConfig, defaultConfig);

		return {
			config: shapeConfig,
			startMarker,
			endMarker,
			points: terminalPts,
			render: function(view) {
				return Link.render(view, this);
			}
		};
	}

	function render(view, shape) {
		return view.renderLink(shape);
	}

	return {
		getLinkShape,
		render
	};
})();

export default Link;
