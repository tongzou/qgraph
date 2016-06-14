import _ from "lodash";
import Events from "bean";
import Utils from "../util/Utils";
import DomUtils from "../util/DomUtils";
import StringBuffer from "../util/StringBuffer";
import Rectangle from "../geometry/Rectangle";

const FONT_BOLD = 1, FONT_ITALIC = 2, FONT_UNDERLINE = 4, FONT_SHADOW = 8;

let defaultConfig = {
	fontSize: 11,
	fontFamily: "Arial",
	fontStyle: 0,
	padding: 0,
	linePadding: 0,
	align: "left",
	width: 0,
	height: 0,
	geometry: {x: 0, y: 0, anchorY: 0, offsetX: 0, offsetY: 0}
};

/**
 * The label object handles label sizing/positioning
 */
export default (function() {
	let canvasSupported = false, stringMeasureEl = null;

	/**
	 * Calculate the size of the string.
	 */
	let getStringSize = _.memoize(function(str, fontSize, fontFamily, bold) {
		if (!str || str == "")
			return [0, 0];

		fontSize = fontSize || 11;
		fontFamily = fontFamily || 'Arial,Helvetica';
		bold = !_.isUndefined(bold) ? bold: false;

		var size;

		if (_.isNull(canvasSupported)) {
			stringMeasureEl = DomUtils.createElement('canvas');
			canvasSupported = !!(stringMeasureEl.getContext && stringMeasureEl.getContext('2d'));
		}

		if (canvasSupported) {
			Utils.log('Label', 'using canvas');
			var ctx = stringMeasureEl.getContext("2d");
			ctx.font = fontSize + " " + fontFamily + " " + (bold ? "bold" : "normal");
			var measure = ctx.measureText(str);
			size = [measure.width, 10];
		} else {
			// first check if there is a string-measuring div available, if not, create now.
			if (!stringMeasureEl) {
				stringMeasureEl = DomUtils.createElement('iframe', {id:"_ComputeStylesIframe"}, {position:"absolute", visibility:"hidden", display:"none", width:"auto"});
				document.body.appendChild(stringMeasureEl);
				var doc = stringMeasureEl.contentWindow.document;
				doc.open();
				doc.write('<html><body><div id="sizeMeasuringDiv" style="position:absolute;width:auto;height:auto;white-space:pre-wrap;word-wrap:break-word;display:inline-block;"></div></body></html>');
				doc.close();
			}
			stringMeasureEl.style.display = "";
			var div = stringMeasureEl.contentWindow.document.getElementById("sizeMeasuringDiv");
			div.style.fontSize = fontSize;
			div.style.fontFamily = fontFamily;
			div.style.fontWeight = bold ? 'bold' : 'normal';
			div.style.padding = 0;
			div.style.width = "auto";
			div.innerHTML = str;

			size = [div.offsetWidth, div.offsetHeight];
			stringMeasureEl.style.display = "none";
		}
		return size;
	}, function(str, fontSize, fontFamily, bold) { return str + ';' + fontSize + ';' + fontFamily + ';' + bold; });

	/**
	 * Create a wrapped text.
	 * @param {String} string the string to wrap.
	 * @param {maxWidth} the maximum width this string can take.
	 * @param {fontSize}
	 * @param {fontFamily}
	 * @param {bold}
	 */
	let wrap = _.memoize(function(string, maxWidth, fontSize, fontFamily, bold) {
		maxWidth = maxWidth || 0;
		fontSize = fontSize || 11;
		fontFamily = fontFamily || 'Arial,Helvetica';
		bold = !_.isUndefined(bold) ? bold: false;

		var arr = [];
		var spaceSize = getStringSize("&nbsp;", fontSize, fontFamily, bold), space = spaceSize[0];
		arr.lineHeight = spaceSize[1];

		if (!maxWidth || !string || string == "") {
			arr.push(string);
			arr.width = (!string || string == "") ? space : getStringSize(string, fontSize, fontFamily, bold)[0];
			arr.height = arr.lineHeight;
			return arr;
		}

		var width = 0;
		//split the text by lines
		var lines = string.split(/[\r\n|\n|\r]/);

		var buf = new StringBuffer();

		for (var j = 0; j < lines.length; j++) {
			//split each line by word
			var words = lines[j].split(/[\s]/);
			var line = "", currentWidth = 0, wordWidth = 0, newLine = true, word;

			for (var i = 0; i < words.length; i++) {
				word = words[i];
				wordWidth = getStringSize(word, fontSize, fontFamily, bold)[0];

				if ((newLine ? wordWidth : currentWidth + space + wordWidth) > maxWidth) {
					if (newLine) {
						buf.append(word);
						width = Math.max(width, wordWidth);
						if (i < words.length - 1) {
							arr.push(buf.toString());
							buf.clear();
						}
					} else {
						arr.push(buf.append(line).toString());
						width = Math.max(width, currentWidth + space + wordWidth);
						buf.clear();
					}
					line = "";
					currentWidth = 0;
					if (!newLine)
						i--; // move back one word.
					newLine = true;
				} else {
					line = newLine ? word : line + " " + word;
					currentWidth = newLine ? wordWidth : currentWidth + space + wordWidth;
					width = Math.max(width, currentWidth);
					newLine = false;
				}
			}
			if (line != "")
				buf.append(line);
			if (j < lines.length - 1) {
				arr.push(buf.toString());
				buf.clear();
			}
		}

		arr.push(buf.toString());
		arr.width = width;
		arr.height = arr.lineHeight * arr.length;
		return arr;
	}, function(str, maxWidth, fontSize, fontFamily, bold) { return str + ';' + maxWidth + ';' + fontSize + ';' + fontFamily + ';' + bold; });

	/**
	 *  Get the view information for how to display the label.
	 * @param label The string that needs to be displayed
	 * @param containerWidth The width of the parent container.
	 * @param containerHeight The height of the parent container.
	 * @param labelConfig The configuration on how to display label. It should be an object with the following parameters:
	 * {
	 *      fontSize, fontFamily, fontStyle, padding,
	 *      align: can be either "left", "center" or "right",
	 *      width: the maximum width of the label. if less than 1, then is treated as percentage. If 0, no wrapping will occur,
	 *      height,
	 *      geometry
	 * }
	 * @returns {*}
	 */
	function getLabelBox(label, containerWidth, containerHeight, labelConfig = {}) {
		labelConfig = _.defaultsDeep(labelConfig, defaultConfig);
		let fontSize = labelConfig.fontSize;
		let fontFamily = labelConfig.fontFamily;
		let fontStyle = labelConfig.fontStyle;
		let bold = (fontStyle & FONT_BOLD) == FONT_BOLD;
		let padding = labelConfig.padding;
		let linePadding = labelConfig.linePadding;
		let align = labelConfig.align;

		let w = labelConfig.width, h = labelConfig.height;
		w = w <= 5 ? containerWidth * w : w;
		h = h <= 5 ? containerHeight * h : h;
		w -= 2 * padding;
		h -= 2 * padding;
		w = Math.max(0, w);
		h = Math.max(0, h);

		let geometry = _.clone(labelConfig.geometry);
		let wrappedLabel = this.wrap(label, w, fontSize, fontFamily, bold);
		geometry.width = wrappedLabel.width + 2 * padding;
		geometry.height = wrappedLabel.height + 2 * padding + (wrappedLabel.length - 1) * linePadding;
		let anchor = "start", dx = 0, setAnchorX = !_.has(geometry, "anchorX");
		switch (align) {
			case "center":
				anchor = "middle";
				if (setAnchorX) geometry.anchorX = 0;
				break;
			case "right":
				anchor = "end";
				dx = wrappedLabel.width/2;
				if (setAnchorX) geometry.anchorX = -0.5;
				break;
			case "left":
				dx = -wrappedLabel.width/2;
				if (setAnchorX) geometry.anchorX = 0.5;
				break;
		}
		let pos = Utils.getRelativePosition({width: containerWidth, height: containerHeight}, geometry);
		let bounds = new Rectangle(pos[0], pos[1], geometry.width, geometry.height);

		// the maximum bounds for the label, used to position inline editor
		geometry.width = Math.max(w + 2 * padding, geometry.width);
		geometry.height = Math.max(h + 2 * padding, geometry.height);
		pos = Utils.getRelativePosition({width: containerWidth, height: containerHeight}, geometry);
		let maxBounds = new Rectangle(pos[0], pos[1], geometry.width, geometry.height);

		return {
			config: labelConfig, label: wrappedLabel, _label: label,
			dx, dy: -geometry.height/2 + padding + wrappedLabel.lineHeight, anchor, lineHeight: wrappedLabel.lineHeight + linePadding,
			bounds, maxBounds
		};
	}

	function getLabelBoxForEdge(label, edge, labelConfig) {
		labelConfig = _.defaultsDeep(labelConfig, defaultConfig);
		if (!label || label == "") return null;

		let fontSize = labelConfig.fontSize;
		let fontFamily = labelConfig.fontFamily;
		let fontStyle = labelConfig.fontStyle;
		let bold = (fontStyle & FONT_BOLD) == FONT_BOLD;

		let wrappedLabel = this.wrap(label, labelConfig.width, fontSize, fontFamily, bold);
		let pos = edge.getRelativePosition({x: labelConfig.labelLocation/2, offsetX: labelConfig.labelOffsetX || 0, offsetY: labelConfig.labelOffsetY || 0});

		let anchor = "start", dx;
		switch (labelConfig.align) {
			case "center":
				anchor = "middle";
				break;
			case "right":
				anchor = "end";
				dx = wrappedLabel.width/2;
				break;
			case "left":
			default:
				dx = -wrappedLabel.width/2;
				break;
		}
		return {
			config: labelConfig, label: wrappedLabel, _label: label,
			dx: dx, dy: -wrappedLabel.height/2 + wrappedLabel.lineHeight,
			anchor: anchor, lineHeight: wrappedLabel.lineHeight,
			bounds: new Rectangle(pos[0], pos[1], wrappedLabel.width, wrappedLabel.height)
		};
	}

	function render(view, box) {
		return view.renderLabel(box);
	}

	let editor = {
		visible: function() { return this.input && this.input.style.visibility == 'visible'; },

		start: function(key, container, box, refEl, textEl) {
			if (!this.input) {
				this.input = DomUtils.createElement('textarea', {id:"inlineEditor", unselectable:"off"}, {position:"absolute", overflow:"hidden", padding:"0px", margin:"0px", border:"transparent"}),
				container.appendChild(this.input);
			} else if (this.visible() && this.key != key) {
				// need to close the existing editor first
				this.stop();
			}
			this.key = key;
			this.box = box;
			this.refEl = refEl;
			this.textEl = textEl;

			let labelConfig = box.config;
			//let pos = Utils.unscale(graph, [cell.getBounds().getCenterX() + bounds.x, cell.getBounds().getCenterY() + bounds.y + 5]);
			let pos = DomUtils.getCenterPosition(refEl, container);
			pos = [pos[0] + box.maxBounds.left, pos[1] + box.maxBounds.top];
			let scale = 1.0;

			if (textEl)
				textEl.style.visibility = 'hidden';

			DomUtils.setElement(this.input, null, {
				visibility: 'visible',
				left: pos[0] + "px",
				top: pos[1] + "px",
				width: (box.maxBounds.width * scale) + 'px',
				height: (box.maxBounds.height * scale) + 'px',
				"font-family": labelConfig.fontFamily,
				"font-size": (labelConfig.fontSize * scale) + 'px',
				"font-weight": (labelConfig.fontStyle & FONT_BOLD) == FONT_BOLD ? 'bold' : 'normal'
				/*"color": labelConfig.fontColor*/
			});

			this.input.value = box._label;
			this.input.focus();
			this.input.select();
			Events.fire(this, 'editor.start', [this.key]);
		},

		stop: function(cancel) {
			if (!this.visible()) return;

			cancel = cancel || false;
			if (this.textEl)
				this.textEl.style.visibility = null;

			this.input.style.visibility = 'hidden';
			if (!cancel)
				Events.fire(this, 'editor.update', [this.key, this.input.value]);

			Events.fire(this, 'editor.stop', [this.key]);
			delete this.key;
			delete this.box;
			delete this.refEl;
			delete this.textEl;
		}
	};

	return {
		FONT_BOLD,
		FONT_ITALIC,
		FONT_UNDERLINE,
		FONT_SHADOW,
		getStringSize,
		wrap,
		getLabelBox,
		getLabelBoxForEdge,
		render,
		editor
	};
})();
