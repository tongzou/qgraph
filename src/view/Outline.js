var Outline = gfw.Outline = function(graph, container, config) {
	this.graph = graph;
	this.width = 200;
	this.height = 140;
	this.minHeight = 15;
	this.minWidth = 15;
	this.initialExpanded = false;
	this.expanded = this.initialExpanded;
	this.init(config);

	this.createOutlineContainer(container);
	if (this.initialExpanded)
		this.show();
};
_.extend(Outline.prototype, Config);

Outline.DEFAULT_CONFIG = {
	border: 10,
	sizerSize: 8
};

Outline.prototype.updateOnPan = true;
Outline.prototype.createOutlineContainer = function(container) {
	var w = this.expanded ? this.width : this.minWidth;
	var h = this.expanded ? this.height : this.minHeight;
	var offset = this.expanded ? "0px" : "-15px";

	this.outlineContainer = d3.select(container).append('div')
		.style({
			position:"absolute", overflow:"hidden", width: w + 'px', height: h + 'px',
			bottom:"0px", right:"0px", "z-index": "9", border:"1px solid black", margin:"0px", cursor:"move"
		});

	this.toggle = this.outlineContainer.append('div').attr('id', 'outlineContainerToggle')
		.style({
			border: "none", position: "absolute", bottom:"0px", right:"0px", width:"15px", height:"15px", overflow:"hidden", cursor:"pointer", zIndex:10001
		}).on("click", _.bind(this.toggleOutline, this));

	this.toggle.append('img').attr({id: 'outlineContainerToggleImage', src: "images/pzmxgeditor_outline.png", title: "Expand minimap"}).style({position: "absolute", left: "0px", top: offset});
};

Outline.prototype.toggleOutline = function() {
	if(this.expanded) {
		//Set background image location from sprite
		this.toggle.select('img').attr("title", 'Expand minimap').style("top", '-15px');
		this.outlineContainer.transition().style("width", this.minWidth + 'px').style("height", this.minHeight + 'px').each('end', _.bind(this.hide, this));
	} else {
		//Set background image location from sprite
		this.toggle.select('img').attr("title", 'Collapse minimap').style("top", '0px');
		this.outlineContainer.transition().style("width", this.width + 'px').style("height", this.height + 'px').each('end', _.bind(this.show, this));
	}
	this.expanded = !this.expanded;
};

Outline.prototype.show = function() {
	this.svg = this.outlineContainer.append('svg').datum(null)
		.attr({"shape-rendering": "optimizeSpeed", "image-rendering": "optimizeSpeed", ns: "outline"})
		.style({width: "100%", height: "100%", "background-color": "white"});
	// Creating the graph
	var root = this.graph.renderer.cellLayer.node().cloneNode(true);
	this.root = d3.select(root);
	this.root.selectAll(".label").remove();
	this.svg.append(function() { return root; });

	// append a mask.
	this.svg.append('rect').attr({width: "100%", height: "100%"}).style({fill: "none", stroke: "none", "stroke-width": 0, "pointer-events": "all"});

	// creating the viewport
	var viewport = this.viewportNode = this.svg.append('g');
	viewport.append('g').attr('id', 'viewport').style('cursor', 'move').append('rect').attr({x: 0, y: 0}).style({fill: "none", stroke: "#0099ff", "stroke-width": 2, "pointer-events": "all"});
	var size = this.getProperty("sizerSize");
	viewport.append('g').attr({id: 'viewportSizer', ns: "vpsizer"}).style('cursor', 'pointer').append('rect').attr({x: -size/2, y: -size/2, width: size, height: size})
		.style({fill: "#00ffff", stroke: "#0033ff", "pointer-events": "all"});
	this.refreshView();

	this.start();
};

Outline.prototype.hide = function() {
	this.stop();
	if (this.svg) {
		this.svg.remove();
		delete this.svg;
		delete this.root;
		delete this.viewportNode;
	}
};

Outline.prototype.getContentWidth = function() {
	return this.width - this.getProperty("border");
};

Outline.prototype.getContentHeight = function() {
	return this.height - this.getProperty("border");
};

Outline.prototype.refreshView = function() {
	if (this.pauseRefresh) return;
	var graphViewport = this.graph.viewport(true);
	var graphBound = this.graph.getBounds();
	var viewable = Rectangle.getBoundingRectangle([graphViewport.getTopLeft(), graphViewport.getBottomRight(), graphBound.getTopLeft(), graphBound.getBottomRight()]);
	//util.log('Outline', 'Viewable Area: ' + viewable);
	//util.log('Outline', 'graphBound: ' + graphBound);
	var cw = this.getContentWidth();
	var ch = this.getContentHeight();
	var fitWidth = viewable.width/viewable.height >= cw/ch;
	var scale = fitWidth ? cw / viewable.width : ch / viewable.height;
	this.info = {
		scale: scale,
		translate: [-viewable.x*scale, -viewable.y*scale]
	};

	var graphPos = [(graphBound.x - viewable.x) * scale, (graphBound.y - viewable.y) * scale];
	//util.log('Outline', 'graph pos: ' + graphPos);
	var viewport = this.viewport = new Rectangle((graphViewport.x - viewable.x) * scale, (graphViewport.y - viewable.y) * scale, graphViewport.width * scale, graphViewport.height * scale);
	this.svg.datum(viewport);
	this.root.attr("transform", 'translate(' + graphPos[0] + ',' + graphPos[1] + ')scale(' + scale + ')');
	this.viewportNode.attr('transform', 'translate(' + viewport.x + ',' + viewport.y + ')');
	this.viewportNode.select('#viewport').select('rect').attr({width: viewport.width, height: viewport.height});
	this.viewportNode.select('#viewportSizer').datum(viewport).attr('transform', 'translate(' + viewport.width + ',' + viewport.height + ')');
};

Outline.prototype.scale = function() {
	return this.info.scale;
};

Outline.prototype.translate = function() {
	return this.info.translate;
};

/**
 * Start tracking changes.
 */
Outline.prototype.start = function() {
	this.graph.on(Graph.EVENT_TYPES.REFRESH, _.debounce(this.refreshView, 50), this);
	this.graph.on(Graph.EVENT_TYPES.VERTEX_CREATED, function(type, vertex) {
		var node = this.graph.renderer.getShapes(vertex);
		if (node) {
			node = node.node().cloneNode(true);
			d3.select(node).selectAll(".label").remove();
			this.root.append(function() { return node; });
		}
	}, this);
	this.graph.on(Graph.EVENT_TYPES.VERTEX_REMOVED, function(type, vertices) {
		_.each(vertices, function(vertex) {
			this.root.selectAll('g#' + vertex.id + '[ns=vertex]').remove();
		}, this);
	}, this);
	this.graph.on(Graph.EVENT_TYPES.EDGE_CREATED, function(type, edge) {
		var link = this.graph.renderer.getShapes(edge);
		if (link) {
			link = link.node().cloneNode(true);
			this.root.append(function() { return link; });
		}
	}, this);
	this.graph.on(Graph.EVENT_TYPES.EDGE_REMOVED, function(type, edges) {
		_.each(edges, function(edge) {
			this.root.selectAll('g#' + edge.id + '[ns=edge]').remove();
		}, this);
	}, this);
	this.graph.on(Graph.EVENT_TYPES.EDGE_CHANGED, function(type, edge) {
		// recopy the changed edge.
		this.root.selectAll('g#' + edge.id + '[ns=edge]').remove();
		var link = this.graph.renderer.getShapes(edge);
		if (link) {
			link = link.node().cloneNode(true);
			this.root.append(function() { return link; });
		}
	}, this);
	this.graph.on(Graph.EVENT_TYPES.CELL_MOVE, function(type, cells) {
		_.each(cells, function(cell) {
			var bounds = cell.getBounds();
			this.root.select('g#' + cell.id + '[ns=vertex]').attr('transform', 'translate(' + bounds.getCenterX() + ',' + bounds.getCenterY() + ')');
		}, this);
		this.refreshView();
	}, this);
	this.graph.on(Graph.EVENT_TYPES.RESET, this.reset, this);

	this.graph.eventDispatcher.register('drag*.outline', this.handleDrag, this);
	this.graph.eventDispatcher.register('drag*.vpsizer', this.handleSizer, this);
};

/**
 * Stop tracking changes.
 */
Outline.prototype.stop = function() {
	this.graph.off(null, null, this);
	this.graph.eventDispatcher.unregister('drag*.outline', this.handleDrag, this);
	this.graph.eventDispatcher.unregister('drag*.vpsizer', this.handleSizer, this);
};

Outline.prototype.handleDrag = function(type, ns, data) {
	var pos = d3.mouse(this.svg.node());
	if (type == 'dragstart') {
		this.pauseRefresh = true;
		this.offset = [data.x - pos[0], data.y - pos[1]];
		return;
	}

	var t = [-(pos[0] + this.offset[0] - this.translate()[0]) / this.scale() * this.graph.scale(), -(pos[1] + this.offset[1] - this.translate()[1]) / this.scale() * this.graph.scale()];

	if (type == 'dragend') {
		this.pauseRefresh = false;
		this.graph.transform(t[0], t[1]);
		delete this.offset;
		return;
	}
	this.graph.transform(t[0], t[1]);
	this.viewportNode.attr('transform', 'translate(' + (pos[0] + this.offset[0]) + ',' + (pos[1] + this.offset[1]) + ')');
};

Outline.prototype.handleSizer = function(type, ns, data) {
	var pos = d3.mouse(this.svg.node());
	if (type == 'dragstart') {
		this.offset = [data.width - pos[0], data.height - pos[1]];
		return;
	}

	var width = pos[0] + this.offset[0];
	width = width < this.getProperty("sizerSize")/2 ? this.getProperty("sizerSize")/2 : width;
	var height = data.height / data.width * width;

	if (type == 'dragend') {
		this.graph.viewport(true, util.scale(this, new Rectangle(data.x, data.y, width, height)));
		delete this.offset;
		return;
	}
	this.viewportNode.select('#viewport').select('rect').attr({width: width, height: height});
	this.viewportNode.select('#viewportSizer').attr('transform', 'translate(' + width + ',' + height + ')');
};

Outline.prototype.reset = function() {
	// @HACK works for now.
	this.hide();
	this.show();
};

Outline.prototype.destroy = function() {
	this.hide();
	delete this.graph;
	this.removeProperty();
	if (this.outlineContainer) {
		d3.select(this.outlineContainer).remove();
		delete this.outlineContainer;
	}
	delete this.toggle;
};
