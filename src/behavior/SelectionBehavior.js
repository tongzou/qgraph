import Rectangle from "../geometry/Rectangle";
import Cell from "../graph/Cell";
import Behavior from "./Behavior";

class SelectionBehavior extends Behavior {
	constructor(renderer) {
		super(renderer);
		let dispatcher = renderer.dispatcher;
		dispatcher.register('mousedown.*', this.selectCell, this);
		dispatcher.register('mouseup.*', this.unselectCell, this);
		dispatcher.register('drag*.graph', this.handleMultiSelect, this);
		//graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, this.updateSelections, this);
		this.selectedNodes = null;
		this.selectedLinks = null;
		this.attachedLinks = null;
	}

	updateSelections() {
		if (this.selectedNodes)
			this.selectedNodes.classed('selected', false);
		if (this.selectedLinks)
			this.selectedLinks.classed('selected', false);

		this.selectedNodes = null;
		this.selectedLinks = null;
		this.attachedLinks = null;

		if (this.graph.selectedVertices && this.graph.selectedVertices.length > 0) {
			this.selectedNodes = this.graph.renderer.getShapes(this.graph.selectedVertices);
			this.attachedLinks = this.graph.renderer.getShapes(this.graph.getAttachedEdges());
			this.selectedNodes.classed('selected', true);
		}

		if (this.graph.selectedEdges && this.graph.selectedEdges.length > 0) {
			this.selectedLinks = this.graph.renderer.getShapes(this.graph.selectedEdges);
			this.selectedLinks.classed('selected', true);
		}
	}

	selectCell(type, ns, data, pos, event) {
		var cell = data == this.graph ? null : data;
		if (cell && !(cell instanceof Cell)) return;
		var toggle = event.ctrlKey || event.shiftKey;
		if (cell && (cell instanceof Cell)) {
			if (!this.graph.isSelected(cell))
				delete cell._firstSelection;
			else
				cell._firstSelection = true;

			d3.select(event.dataTarget).moveToFront();
			this.graph.setSelection(cell, toggle);
		}
	}

	unselectCell(type, ns, data, pos, event) {
		var cell = data == this.graph ? null : data;
		if (cell && !(cell instanceof Cell)) return;
		var ctrlKey = event.ctrlKey || event.shiftKey;
		if (!cell) {
			this.graph.setSelection(cell, ctrlKey);
		}
	}

	handleMultiSelect(type, ns, data, pos, event) {
		pos = util.scale(this.graph, pos);

		if (type == 'dragstart') {
			var select = (this.graph.getProperty("defaultClickMode") == "select") ^ (event.ctrlKey || event.shiftKey);
			if (!select) return;
			this.startPt = new Point(pos[0], pos[1]);
			return;
		}
		if (!this.startPt) return;
		var rect = Rectangle.getBoundingRectangle([new Point(pos[0], pos[1]), this.startPt]);
		var renderer = this.graph.renderer;
		if (!this.rubberband) {
			this.rubberband = d3.select(renderer.appendNode(renderer.getCellLayer(), {
				template: _.template('<g><rect x="0" y="0" width="100" height="100" stroke="#000000" fill="none" stroke-dasharray="3 3"/></g>')
			}, false));
		}
		if (type == 'dragend') {
			var cells = this.graph.getCurrentRoot().children;
			// TODO: Define if we want to select vertexes / edges or both
			cells = _.filter(cells, function (cell) {
				var box = cell.getBounds();
				if (rect.contains(box)) {
					return true;
				}
				return false;
			});
			// TODO: Set selection
			this.graph.setSelection(cells, event.ctrlKey);

			this.rubberband.remove();
			delete this.startPt;
			delete this.rubberband;
			return;
		}
		this.rubberband.select("rect").attr({x: rect.x, y: rect.y, width: rect.width, height: rect.height});
	}

	destroy() {
		super.destroy();
		delete this.selectedNodes;
		delete this.selectedLinks;
		delete this.attachedLinks;
	}
}

export default SelectionBehavior;
