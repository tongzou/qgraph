/**
 * Created by tong on 6/28/2016.
 */

/**
 * Graph handler handles Panning and Zoom and rubber band selection
 */
class GraphBehavior {
	constructor(renderer) {
		this.renderer = renderer;
		let dispatcher = renderer.dispatcher;
		let f = function(type, ns, graph, pos, event) {
			//Cursor.updateCursor(type, ns, graph, event);
		};
		dispatcher.register('drag*.graph', this.handleDrag, this);
		dispatcher.register('zoom.*', this.handleZoom, this);
		//dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
		this.offset = null;
	}

	handleZoom(type, ns, graph, pos, event) {
		this.renderer.transform(null, null, event.scale);
	}

	handleDrag(type, ns, graph, pos, event) {
		if (type == 'dragstart') {
			let pan = (this.renderer.prop("defaultClickMode") == "pan") ^ (event.ctrlKey || event.shiftKey);
			if (!pan) return;
			let t = this.renderer.translate;
			console.log('GraphBehavior:' + t);
			this.offset = [t[0] - pos[0], t[1] - pos[1]];
			return;
		}
		if (!this.offset) return;
		if (type == 'dragend') {
			this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
			//Cursor.updateCursor('mouseup', ns, graph, event);
			delete this.offset;
			return;
		}
		this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
	}

	destroy() {
		delete this.renderer;
	}
}

export default GraphBehavior;
