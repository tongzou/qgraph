// --
// Setup: Creating the dataset and placing the data in the document.
// --

// Establish our dataset
var dwarfSet = {
	Fairytale : ["Blick","Flick","Glick","Quee"],
	Tolkien : ["Thorin","Gloin","Fili","Kili"],
	Pratchett : ["Carrot","Goodmountain","Littlebottom"]
};

var types = d3.keys(dwarfSet);
var dwarves = d3.shuffle(d3.merge(d3.values(dwarfSet)));

// Droppable items on the right
var draggables = d3.select(".draggables").append("ul");
draggables.selectAll("li").data(dwarves).enter()
	.append("li")
	.text(function(d) { return d })

// Drop targets on the left
var canvas = d3.select(".droptargets").append("svg")
	.attr("width",200)
	.attr("height",400)
	.attr("class","YlGn");

var dropTargets = canvas.selectAll("rect").data(types).enter().append("g");

dropTargets.append("rect")
	.attr({
		width: 180,
		height: 100,
		x: 10.5,
		y: function(d,i) { return (i * 110) + .5},
		rx: 20,
		ry: 20,
		class: function(d,i) { return "color" + (i+1) }
	});

dropTargets.append("text")
	.text(function (d) { return d })
	.attr({
		x: 25.5,
		dy: 30,
		y: function(d,i) { return (i * 110) + .5}
	});

// ---
// Handle dragging from HTML to dropping on SVG
// ---
var DragDropManager = {
	dragged: null,
	droppable: null,
	draggedMatchesTarget: function() {
		if (!this.droppable) return false;
		return (dwarfSet[this.droppable].indexOf(this.dragged) >= 0);
	}
};


(function(qdUtils) {
	var container = document.getElementById("container");
	container.__data__ = "testing";
    var manager = new qdUtils.EventManager(container);
    manager.startEvents();
})(window["qgraph"].default);

