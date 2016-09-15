/**
 * Created by tong on 6/29/2016.
 */
import Behavior from "./Behavior";

class EdgeBehavior extends Behavior {
	constructor(renderer) {
		super(renderer);
		this.previousDataTarget = null;

		/*graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, function(type, unselected, selected) {
			this.hideHandles(_.filter(unselected, function(cell) { return cell instanceof Edge}));
			this.showHandles(_.filter(selected, function(cell) { return cell instanceof Edge}));
		}, this);*/

		this.renderer.dispatcher.register(/^drag.*\.edgehandle$/, this.handleDrag, this);
	}

	handleDrag(type, ns, data, pos, event) {
		if (type == 'dragstart'){
			// TODO: Check if we need to always remove label, chack also if we should hide previous edge
			// Check which anchor is dragged and create a temp edge accordingly
			if (data.source)
				this._newEdge = new Edge(null, data.edge.target, this.graph, {label:data.edge.getProperty("label"), refPts: [data.edge.getProperty("refPts")[0], new Point(pos[0], pos[1])]});
			else
				this._newEdge = new Edge(data.edge.source, null, this.graph, {label:data.edge.getProperty("label"), refPts: [new Point(pos[0], pos[1]), data.edge.getProperty("refPts")[1]]});

			this._newLink = d3.select(this.renderer.appendNode(this.renderer.getCellLayer(), this._newEdge));
			this._newLink.classed("invalid", true);
			return;
		}

		//d3.select( !data.source? 'g#' + data.edge.target.id : 'g#' + data.edge.source.id ).moveToFront();

		// Move the existing original vertex to front, so we can get right event target when drag edge on it
		d3.select( data.source ? 'g#' + data.edge.target.id : 'g#' + data.edge.source.id ).moveToFront().classed("valid", true);

		// check if currently a valid edge
		var newDataTarget = event.dataTarget ? event.dataTarget : null;
		var newVertex = newDataTarget ? newDataTarget.__data__ : null;
		if (!(newVertex instanceof Vertex) || newVertex == this.graph.getCurrentRoot()) newVertex = null;

		var isValid = data.source ? this.graph.isValidConnection(newVertex, data.edge.target) : this.graph.isValidConnection(data.edge.source, newVertex);
		var isOriginalTarget =  data.source? (newVertex == data.edge.source) : (newVertex == data.edge.target);

		// Connection Hints for valid vertex
		if (isValid  || isOriginalTarget) {
			d3.select(newDataTarget).classed("valid", true);
			this._newLink.classed("invalid", false).classed("valid", true);
			data.source ? this._newEdge.setSource(newVertex) : this._newEdge.setTarget(newVertex);
			this.renderer.refreshLinks(this._newLink);
			data.source ? this._newEdge.setSource(null) : this._newEdge.setTarget(null);
		}

		// Connection Hints for invalid vertex
		if ( !isValid && newVertex != null ) {
			d3.select(newDataTarget).classed("invalid", true);
			data.source ? this._newEdge.setSource(newVertex) : this._newEdge.setTarget(newVertex);
			this.renderer.refreshLinks(this._newLink);
			data.source ? this._newEdge.setSource(null) : this._newEdge.setTarget(null);
		}

		if ( this.previousDataTarget != newDataTarget ) {
			d3.select(this.previousDataTarget).classed("valid", false).classed("invalid", false);
			this._newLink.classed("invalid", true).classed("valid", false);
		}

		this.previousDataTarget = newDataTarget;

		if (type == 'dragend'){
			this.graph.removeEdges(this._newEdge);
			delete this._newEdge;
			delete this._newLink;
			if (isValid){
				this.graph.setSelection(null);
				data.source ? this.graph.setEdgeSource(data.edge, newVertex) : this.graph.setEdgeTarget(data.edge, newVertex);
			}
			d3.select(this.previousDataTarget).classed("valid", false).classed("invalid", false);
			d3.select( data.source ? 'g#' + data.edge.target.id : 'g#' + data.edge.source.id ).classed("valid", false);
			this.previousDataTarget = null;
			return;
		}

		if (data.source)
			this._newEdge.setProperty('refPts', [new Point(pos[0], pos[1]), data.edge.getProperty("refPts")[1]]);
		else
			this._newEdge.setProperty('refPts', [data.edge.getProperty("refPts")[0], new Point(pos[0], pos[1])]);

		// refresh only when the edge is not dragged to a valid vertex, for snapping
		if ( ( !isValid  && !isOriginalTarget ) && ( isValid || newVertex == null ) )
			this.renderer.refreshLinks(this._newLink);
	}

	showHandles(edges) {
		_.each(edges, function(edge) {
			this.renderer.appendNodes(this.renderer.getMarkerLayer(), EdgeHandle.getHandles(edge));
		}, this);
	}

	hideHandles(edges) {
		_.each(edges, function(edge) {
			this.renderer.getMarkerLayer().selectAll("#" + edge.id + "[ns=edgehandle").remove();
		}, this);
	}
}

export default EdgeBehavior;
