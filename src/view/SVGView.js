import _ from "lodash";
import DomUtils from "../util/DomUtils";
import GraphView from "./GraphView";
import StringBuffer from "../util/StringBuffer";

const TEMPLATES = {
	$root: '<g id="${id}" class="${className}" ns="graph" transform="translate(${x},${y})scale(${scale})">#{children}</g>',
	$node: '<g id="${id}" class="${className}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
	$edge: '<g id="${id}" class="${className}" ns="${namespace}">#{shape}</g>',
	Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"></ellipse>',
	Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"></rect>',
	Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"></polygon>',
	Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"></polygon>',
	Hexagon: function(config) {
		var vertical = config.direction == 'north' || config.direction == 'south';
		if (vertical)
			return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"></polygon>';
		else
			return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"></polygon>';
	},
	Path: function(config) {
		var buf = new StringBuffer();
		buf.append('<path class="gauge" d="<%=gfw.SVGRenderer.getPathData(data.getPoints())%>"></path>');
		buf.append('<path d="<%=gfw.SVGRenderer.getPathData(data.getPoints())%>"');
		if (config.startArrow != 'none' || config.endArrow != 'none') {
			buf.append(' style="');
			if (config.startArrow != 'none')
				buf.append('marker-start: url(#<%=data.type.name%>_StartArrow);');
			if (config.endArrow != 'none')
				buf.append('marker-end: url(#<%=data.type.name%>_EndArrow);');
			buf.append('"');
		}
		buf.append('></path>');
		return buf.toString();
	},
	Image: function(config) {
		return '<image x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + config.image + '"></image>';
	}
};

class SVGView extends GraphView {
	constructor(id, container, config) {
		super(id, container, config);
		_.assign(this.templateStore, TEMPLATES);
	}

	render() {
		let result = super.render();
		if (result) {
			var root = this._graph.getCurrentRoot();
			var buf = new StringBuffer('<svg width="100%" height="100%">');
			buf.append(root.render(this));
			buf.append('</svg>');
			this.box.innerHTML = buf.toString();
		}
	}

	static appendContent(el, content) {
		let buf = new StringBuffer();
		buf.append('<svg>').append(content).append('</svg');
		let temp = DomUtils.createElement('div', null, null, buf.toString()).firstElementChild;

		while (temp.firstChild)
			el.appendChild(temp.firstChild);
		return el;
	}

	static setContent(el, content) {
		if (DomUtils.isIE) {
			// empty el first.
			let child;
			while (child = el.lastChild)
				el.removeChild(child);
			SVGView.appendContent(el, content);
		} else
			el.innerHTML = content;
		return el;
	}
}

export default SVGView;
