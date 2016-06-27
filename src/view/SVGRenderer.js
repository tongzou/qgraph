import _ from "lodash";
import DomUtils from "../util/DomUtils";
import Renderer from "./Renderer";
import StringBuffer from "../util/StringBuffer";

class SVGRenderer extends Renderer {
	render() {
		let result = super.render();
		if (result) {
			var root = this._graph.getCurrentRoot();
			var buf = new StringBuffer('<svg width="100%" height="100%">');
			buf.append(this.renderDefs());
			buf.append(root.render(this));
			buf.append('</svg>');
			this.box.innerHTML = buf.toString();
		}
	}

	renderDefs() {
		let buf = new StringBuffer('<defs>');
		buf.append(this.getTemplate('Grid', this.prop("gridSize")));
		let markers = this.graph().markers;
		if (markers.length > 0)
			buf.append(SVGRenderer.renderMarkers(markers));
		buf.append('</defs>');
		return buf.toString();
	}

	static renderMarkers(markers) {
		let buf = new StringBuffer(), str1, str2;
		for (let marker of markers) {
			str1 = this.TEMPLATES['Marker'](marker);
			str2 = marker.shape;
			if (!_.isString(str2))
				str2 = this.renderShape(str2);
			str1 = str1.replace(/\#\{shape\}/, str2);
			buf.append(str1);
		}
		return buf.toString();
	}

	static renderLabel(box) {
		return this.TEMPLATES['Label'](box);
	}

	static renderShape(shape) {
		let template = this.TEMPLATES[shape.name];
		if (_.isString(template))
			template = _.template(template);
		return template(shape);
	}

	static renderLink(shape) {
		let points = shape.points;
		let controlPts = shape.controlPts;
		if (!points || points.length == 0) return '';

		if (!controlPts && shape.round) {
			// render rounded line joins.
			let newPts = [];
			controlPts = [];
			let prev = points[0], next, d1, d2, corner;
			newPts.push(prev);
			for (let i = 1; i < points.length - 1; i++) {
				next = points[i];
				// set the control point first.
				controlPts[2*i] = [next, next];
				// check the size of the corner.
				d1 = prev.distance(next);
				d2 = next.distance(points[i+1]);
				corner = Math.min(shape.round, d1/2, d2/2);
				// split the point into two.
				newPts.push(next.getDirection(prev).scale(corner).translate(next));
				newPts.push(next.getDirection(points[i+1]).scale(corner).translate(next));
				prev = next;
			}
			newPts.push(points[points.length - 1]);
			points = newPts;
		}
		let buf = new StringBuffer('M'), point;
		for (let i = 0; i < points.length; i++) {
			point = points[i];
			if (i == 0)
				buf.append(point);
			else {
				if (controlPts && controlPts[i]) {
					buf.append(' C ');
					for (let j = 0; j < controlPts[i].length; j++)
						buf.append(controlPts[i][j]).append(' ');
					buf.append(point);
				} else
					buf.append(' L ').append(point);
			}
		}
		let d = buf.toString();
		buf.clear();
		if (shape.showGauge)
			buf.append('<path style="stroke: white; stroke-width: 9; visibility: hidden; pointer-events: stroke;" d="')
				.append(d).append('"/>');
		buf.append('<path d="').append(d).append('"');
		if (shape.startMarker || shape.endMarker) {
			buf.append(' style="');
			if (shape.startMarker)
				buf.append('marker-start: url(#').append(_.isString(shape.startMarker) ? shape.startMarker : shape.startMarker.id).append(');');
			if (shape.endMarker)
				buf.append('marker-end: url(#').append(_.isString(shape.endMarker) ? shape.endMarker : shape.endMarker.id).append(');');
			buf.append('"');
		}
		buf.append('/>');
		return buf.toString();
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
			SVGRenderer.appendContent(el, content);
		} else
			el.innerHTML = content;
		return el;
	}
}
SVGRenderer.TEMPLATES = {
	$root: '<g id="${id}" class="${className}" ns="graph" transform="translate(${x},${y})scale(${scale})">#{children}</g>',
	$node: '<g id="${id}" class="${className}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
	$edge: '<g id="${id}" class="${className}" ns="${namespace}">#{shape}#{label}</g>',
	Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"/>',
	Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"/>',
	Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"/>',
	Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"/>',
	Hexagon: function(config) {
		var vertical = config.direction == 'north' || config.direction == 'south';
		if (vertical)
			return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"/>';
		else
			return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"/>';
	},
	Polygon: function(shape) {
		let buf = new StringBuffer('<polygon points="');
		for (let pt of shape.points)
			buf.append(pt[0]).append(',').append(pt[1]).append(' ');
		buf.removeLast();
		buf.append('"/>');
		return buf.toString();
	},
	Image: function(config) {
		return '<image x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + config.image + '"/>';
	},
	Marker: function(marker) {
		return `
<marker id="${marker.id}" markerWidth="${marker.size}" markerHeight="${marker.size}" refx="${marker.ref[0]}" 
refy="${marker.ref[1]}" orient="auto" viewbox="${marker.viewBox.x} ${marker.viewBox.y} ${marker.viewBox.width} ${marker.viewBox.height}"
markerUnits="userSpaceOnUse" ${marker.fill ? `style="fill:${marker.fill}"` : ''}>#{shape}</marker>
`.trim();
	},
	Grid: function(size) {
		return `
<pattern id="GridPattern" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
	<ellipse cx="0" cy="0" rx="1" ry="1" fill="#999999"/>
	<ellipse cx="0" cy="${size}" rx="1" ry="1" fill="#999999"/>
	<ellipse cx="${size}" cy="0" rx="1" ry="1" fill="#999999"/>
	<ellipse cx="${size}" cy="${size}" rx="1" ry="1" fill="#999999"/>
</pattern>`.trim();
	},
	Label: _.template(`
<% var box = _.has(data, "dx") ? data : (data.getLabelBox ? data.getLabelBox() : null); 
   if (box) {%>
	<g <% if (box.config && box.config.class) {%>class="<%=box.config.class%>"<%}%>\
		<% if (box.config && box.config.ns) {%>ns="<%=box.config.ns%>"<%}%>\
		text-anchor="<%=box.anchor%>"\
		transform="translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>">
	<% if (box.config.backgroundColor) {%>
		<rect x="<%=-box.bounds.width/2%>" y="<%=-box.bounds.height/2%>" width="<%=box.bounds.width%>" height="<%=box.bounds.height%>" fill="<%=box.config.backgroundColor%>"/>
	<% } if (_.isArray(box.label)) { 
		_.each(box.label, function(value, line) {%>
			<text <% if (box.config && box.config.textStyle) {%>style="<%=box.config.textStyle%>"<%}%>\
				dx="<%=box.dx%>" dy="<%=box.dy + box.lineHeight * line%>"><%=value%></text>
		<%});} else { %>
			<text><%=box.label%></text>
		<%}%>
	</g>
<%}%>
`.trim(), {variable: "data"})
};

export default SVGRenderer;
