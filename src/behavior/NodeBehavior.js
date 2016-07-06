/**
 * Created by tong on 6/29/2016.
 */
import Behavior from "./Behavior";

/**
 * NodeBehavior handles node related events.
 */
class NodeBehavior extends Behavior {
	constructor(renderer) {
		super(renderer);
		let dispatcher = renderer.dispatcher;
		this.previousDataTarget = null;
		dispatcher.register('drag*.vertex', this.handleDrag, this);
		dispatcher.register('drag*.connectionMarker', this.handleConnection, this);
		dispatcher.register('mouseenter.vertex', this.handleMouseEnter, this);
		dispatcher.register('mouseleave.vertex', this.handleMouseLeave, this);
		dispatcher.register('mouseup.vertex.label', function(type, ns, vertex, pos, event) {
			// TO-DO Check if Vertex state is the correct one, add more if needed
			if (!vertex.getProperty("editable")) return;
			if (!dispatcher.dragging && !vertex._firstSelection) {
				Label._delayEdit = _.delay(function(vertex) {
					if (Label._delayEdit) {
						delete Label._delayEdit;
						Label.startEditor(vertex, event.nsTarget);
					}
				}, 250, vertex);
			}
		}, this);
		dispatcher.register(['mousedown.*', 'zoom*'], function(type, ns, data, pos, event) {
			this.hideConnectionMarker();
			if (!dom.eventFromInput(event))
				Label.stopEditor();
		}, this);
	}

	// TODO: this has issues when used together with minimap
	handleDrag(type, ns, vertex, pos, event) {
		if (!vertex.getProperty("draggable")) return;

		var cells = this.graph.selectedVertices;
		if (type == 'dragstart') {
			// we need to handle multiple selections.
			var offsets = this.offsets = [], edges = [];
			_.each(cells, function(cell) {
				var bounds = cell.getBounds();
				offsets.push([bounds.getCenterX() - pos[0], bounds.getCenterY() - pos[1]]);
				edges = edges.concat(cell.inEdges).concat(cell.outEdges);
			});

			if (this.graph.getProperty("guidesEnabled") || this.graph.getProperty("gridEnabled"))
				this.guide = new Guide(this.graph, cells, pos);
			this.dragNodes = this.renderer.getShapes(cells);
			this.dragLinks = this.renderer.getShapes(edges);
			return;
		}
		if (this.guide)
			pos = this.guide.move(pos);

		if (type == 'dragend') {
			delete this.dragNodes;
			if (this.guide) {
				this.guide.destroy();
				delete this.guide;
			}
			if (this.dragLinks && this.dragLinks.length > 0) {
				this.renderer.refreshLinks(this.dragLinks);
				delete this.dragLinks;
			}

			var newPos = [];
			_.each(cells, function(cell, i) {
				newPos.push([pos[0] + this.offsets[i][0], pos[1] + this.offsets[i][1]]);
			}, this);
			this.graph.moveCells(cells, newPos);
			delete this.offsets;
			return;
		}

		// TODO: This is now working but need to review and simplify it, still too messy
		// Probably can wrap it together in a function which gets called just once when
		// outside of hotspot and calls itself if mouse remains there
		var self = this;
		var viewbox = this.graph.viewport(true);

		var t2 = [0,0];

		viewbox.x += 15;
		viewbox.y += 15;

		viewbox.width -= 30;
		viewbox.height -= 30;

		if(pos[0] < viewbox.x) {
			t2[0] = 15;
		} else if(pos[0] > viewbox.x + viewbox.width) {
			t2[0] = -15;
		}

		if (pos[1] < viewbox.y) {
			t2[1] = 15;
		} else if(pos[1] > viewbox.y + viewbox.height) {
			t2[1] = -15;
		}

		this.stop = true;

		if(!t2[0] && !t2[1]) {
			//	var t1 = this.graph.translate();
			//this.graph.transform(t1[0] + t2[0], t1[1] + t2[1]);

			_.each(cells, function(cell, i) {
				cell.move(pos[0]+this.offsets[i][0], pos[1]+this.offsets[i][1]);
			}, this);

			this.renderer.refreshNodes(this.dragNodes);

			if (this.dragLinks && this.dragLinks.length > 0)
				this.renderer.refreshLinks(this.dragLinks);
		} else{
			this.stop = false;
			if(! this.fn){
				this.fn = function loopingFunction() {
					if(!t2[0] && !t2[1] || self.stop) {
						window.console.log("No Loop anymore");
						delete self.lastPos;
						delete self.stop;
						delete self.fn;
						return;
					}

					var t1 = self.graph.translate();
					self.graph.transform(t1[0] + t2[0], t1[1] + t2[1]);

					_.each(cells, function(cell, i) {
						var p = cell.getBounds().getCenter();
						//window.console.log("To: " + (self.lastPos[0]) + " " + (self.lastPos[1]))
						cell.move(p.x - t2[0], p.y - t2[1]);//self.lastPos[0], self.lastPos[1]);
					}, self);

					self.renderer.refreshNodes(self.dragNodes);

					if (self.dragLinks && self.dragLinks.length > 0)
						self.renderer.refreshLinks(self.dragLinks);

					setTimeout(loopingFunction, 10);
				};
				this.fn();}
		}
	}

	handleMouseEnter(type, ns, vertex, pos, event) {
		Cursor.updateCursor(type, ns, vertex, event);
		if (!vertex.getProperty("connectableOut")) {
			this.hideConnectionMarker();
			return;
		}

		if (this.connectionMarker && this.connectionMarker.vertex != vertex)
			this.hideConnectionMarker();

		if (!this.connectionMarker)
			this.showConnectionMarker(vertex);

		// highlight the vertex
		//d3.select(event.dataTarget).classed('active', true);
	}

	handleMouseLeave(type, ns, vertex, pos, event) {
		Cursor.updateCursor(type, ns, vertex, event);
		// remove the highlight
		//d3.select(event.dataTarget).classed('active', false);
	}

	handleConnection(type, ns, data, pos, event) {
		if (type == 'dragstart') {
			var vertex = data.vertex;
			// Create a temporary edge.
			this._newEdge = new Edge(vertex, null, this.graph, {label:'', refPts: [new Point(0, 0), new Point(pos[0], pos[1])]});
			this._newLink = d3.select(this.renderer.appendNode(this.renderer.getCellLayer(), this._newEdge));
			this._newLink.classed("invalid", true);
			return;
		}

		// move the existing original vertex to front, so we can get right event target when drag edge on it
		d3.select( 'g#' + this._newEdge.source.id ).moveToFront().classed("valid", true);

		// check if currently a valid edge
		var newDataTarget = event.dataTarget ? event.dataTarget : null;
		var newVertex = newDataTarget ? newDataTarget.__data__ : null;
		if (!(newVertex instanceof Vertex) || newVertex == this.graph.getCurrentRoot()) newVertex = null;
		var isValid = this.graph.isValidConnection(this._newEdge.source, newVertex);

		// Connection Hints for valid vertex
		if( isValid )   {
			d3.select(newDataTarget).classed("valid", true);
			this._newLink.classed("invalid", false).classed("valid", true);
			this._newEdge.setTarget(newVertex);
			this.renderer.refreshLinks(this._newLink);
			this._newEdge.setTarget(null);
		}

		// TODO: unselect the original source to display the right color, select it again when mouse leave
		// Connection Hints for invalid vertex
		if( !isValid && newVertex != null ) {
			d3.select(newDataTarget).classed("invalid", true);
			this._newEdge.setTarget(newVertex);
			this.renderer.refreshLinks(this._newLink);
			this._newEdge.setTarget(null);
		}

		if( this.previousDataTarget != newDataTarget ) {
			d3.select(this.previousDataTarget).classed("valid", false).classed("invalid", false);
			this._newLink.classed("invalid", true).classed("valid", false);
		}

		this.previousDataTarget = newDataTarget;


		if (type == 'dragend') {
			d3.select( 'g#' + this._newEdge.source.id ).classed("valid", false);
			var v1 = this._newEdge.source;
			// Delete this edge
			this.graph.removeEdges(this._newEdge);
			delete this._newEdge;
			delete this._newLink;

			if (isValid) {
				this.graph.setSelection(null);
				this.graph.createEdge(v1, newVertex, {refPts: [new Point(0, 0), new Point(pos[0], pos[1])]});
			}

			d3.select(this.previousDataTarget).classed("valid", false).classed("invalid", false);
			this.previousDataTarget = null;
			return;
		}

		this._newEdge.setProperty('refPts', [new Point(0, 0), new Point(pos[0], pos[1])]);

		if ( !isValid  && ( isValid || newVertex == null ) )
			this.renderer.refreshLinks(this._newLink);
	}

	showConnectionMarker(vertex) {
		var data = this.connectionMarker = ConnectionMarker.getMarker(vertex);
		this.renderer.appendNode(this.renderer.getMarkerLayer(), data);
		var mousemove = _.bind(function() {
			var pos = this.graph.eventDispatcher.getPosition();
			if (!data.bounds.contains(new Point(pos[0], pos[1])))
				this.hideConnectionMarker();
		}, this);
		this._w = d3.select(this.graph.viewBase).on('mousemove', mousemove);
	}

	hideConnectionMarker() {
		if (!this.connectionMarker) return;
		this.renderer.getMarkerLayer().selectAll('[ns=connectionMarker]').remove();
		delete this.connectionMarker;
		if (this._w)
			this._w.on('mousemove', null);
	}

	destroy() {
		super.destroy();
		delete this.connectionMarker;
	}
}

export default NodeBehavior;
