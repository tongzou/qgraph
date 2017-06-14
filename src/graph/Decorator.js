/**
 * The Decorator decorates the vertex or the edge.
 *
var Decorator = function(cell, config) {
	this.cell = cell;
	this.init(config);
};
_.extend(Decorator.prototype, TypedConfig);

Decorator.prototype.getBounds = function() {
	if (this.bounds)
		return this.bounds;

	var setting = {width: this.getProperty("width"), height: this.getProperty("height")};
	_.extend(setting, this.getProperty("setting"));
	var geometry = util.getRelativeGeometry(setting);
	var pos = util.getRelativePosition(this.cell.getConfig(['width', 'height']), geometry);
	return this.bounds = new Rectangle(pos[0], pos[1], setting.width, setting.height);
};

Decorator.prototype.getLabelNode = function() {
	if (this.labelNode)
		return this.labelNode;

	var setting = this.getProperty("setting");
	var label = this.getProperty("label") || setting.label;
	return this.labelNode = Label.getLabelNode(label, this.getProperty("width"), this.getProperty("height"), this.getProperty("labelConfig"));
};

Decorator.prototype.isContainer = function() { return false; };*/
