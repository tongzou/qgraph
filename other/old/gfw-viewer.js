///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//           Viewer Framework for the Graphical Framework                    //
//                                                                           //
//                      !!!!!IMPORTANT!!!!!                                  //
//       DO NOT change without contacting the Great Fireworks Team!          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

(function() {

if (typeof gfw.vfw !== 'undefined') return;

var
	Events = gfw.Events,
	Config = gfw.Config,
	util = gfw.util,
	dom = gfw.dom;

_.extend(util, {
	/* These function should ideally be removed */
	getID: function(cell, useRef) {
		if (_.isUndefined(useRef))
			useRef = false;

		if (useRef && cell.hasProperty && cell.hasProperty("flowRule"))
			return util.getID(cell.getProperty("flowRule"));

		if (cell instanceof gfw.Vertex || cell instanceof gfw.Edge) {
			if (cell.hasProperty("sid"))
				return cell.getProperty("sid");
			else
				return cell.id;
		} else {
			if (cell.sid)
				return cell.sid;
			return cell.id;
		}
	},

	getIDName: function(cell) {
		if (cell instanceof gfw.Vertex || cell instanceof gfw.Edge) {
			if (cell.hasProperty("sid"))
				return "sid";
			else
				return "id";
		} else {
			if (cell.sid)
				return "sid";
			return "id";
		}
	},

	getIDModel: function(cell) {
		var model = {};
		model[util.getIDName(cell)] = util.getID(cell);
		return model;
	},

	setID: function(cells, id, viewer) {
		var isSharedID = viewer.builder.isSharedID;
		if (!_.isString(id))
			id = isSharedID ? id.sid : id.id;

		if (!_.isArray(cells)) cells = [cells];

		_.each(cells, function(cell) {
			if (isSharedID) {
				cell.setProperty("sid", id);
			} else {
				if (cell instanceof gfw.Vertex)
					viewer.graph.changeVertexId(cell, id);
				else
					viewer.graph.changeEdgeId(cell, id);
			}
		});
	},

	getPathKey: function(cell, useRef) {
		if (_.isUndefined(useRef))
			useRef = false;

		if (useRef) {
			if (cell.hasProperty && cell.hasProperty("flowRule"))
				return cell.getProperty("flowRule").pathKey;
		}
		return util.getObjProperty(cell, "pathKey");
	},

	refreshSection: function(sectionName, preActivity, preActivityParams, queryString, container) {
		if (!pega.u.d) return;
		if(_.isUndefined(container)) container = document;
		var sectionNode = pega.u.d.getSectionByName(sectionName, "", container);
		if(sectionNode) {
			if (preActivityParams && !Lang.isString(preActivityParams)) {
				var params = "";
				for (var n in preActivityParams)
					params += "&" + n + "=" + preActivityParams[n];
				preActivityParams = params;
			}
			pega.u.d.reloadSection(sectionNode, preActivity, preActivityParams, false, true, -1, false, null, null, queryString);
		}
	},

	getSectionsByName: function(sectionName, container) {
		if(typeof(container) == "undefined")
			var container = document;

		return d3.select(container).selectAll("div#RULE_KEY[node_type=MAIN_RULE][node_name=" + sectionName + "]")[0];
	},

	buildParamList: function(data) {
		var flat = {};

		var flatten = function(key, o) {
			if (_.isArray(o)) {
				_.each(o, function(o2, i) {
					flatten(key + '(' + (i+1) + ')', o2);
				});
			} else if (_.isObject(o)) {
				_.each(o, function(o2, key2) {
					flatten((key ? key + '.' : "") + key2, o2);
				});
			} else
				flat[key] = o;
		};

		flatten(null, data);

		var buf = new StringBuffer();
		_.each(flat, function(o, key) {
			buf.append(key + ':' + encodeURIComponent(o));
		});

		return buf.toString(',');
	}
});

if (!window.top.ViewerData) {
	window.top.ViewerData = {};
	window.top.ViewerData.managers = {};
	window.top.ViewerData.pasteBufferKey = null;
}

var vfw = gfw.vfw = {};

// Holds all the instances of the one viewer.
vfw.instances = {};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                            Viewer Manager                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

ViewerManager = {
	id: _.uniqueId('VM_'),

	hasDirtyViewer: function(exclude) {
		var v;
		for (var i in vfw.instances) {
			v = vfw.instances[i];
			if (v.isDirty() && v.id != exclude)
				return true;
		}
		return false;
	},

	clearDirty: function() {
		_.each(vfw.instances, function(v) { v.clearDirty(); });
	},

	/**
	 * Starts a viewer, if not exist, create one.
	 */
	startViewer: function(container, config, model) {
		util.log('Manager', 'startViewer begin');
		var id = config.id;

		// destroy the viewer with the same id.
		this.destroyViewer(id);

		if (typeof onBeforeViewerInit == 'function') onBeforeViewerInit();
		var v = this.createViewer(container, config, model);
		vfw.instances[id] = v;
		if (typeof onAfterViewerInit == 'function') onAfterViewerInit(v);
		this.currentViewer = v;

		// Transfer initial focus to graph container for keystroke handling
		try {
			container.focus();
		} catch(e) {}
		this.notifyAllViewers("viewerStarted");
		util.log('Manager', 'startViewer end');
		return v;
	},

	createViewer: function(container, config, model) {
		util.log('Manager', 'createViewer begin');
		var viewerClass = util.getConstructor(config.jsClass, Viewer);
		var v = new viewerClass(container, config, model);
		util.log('Manager', 'createViewer end');

		return v;
	},

	stopViewer: function(id) {
		var v = this.getViewer(id);
		if (v)
			v.stopViewer();
	},

	destroyViewer: function(id) {
		var v = this.getViewer(id);
		if (v) {
			v.destroy();
			delete vfw.instances[id || v.id];
			if (this.currentViewer == v)
				delete this.currentViewer;
		}
	},

	executeAction: function(actionParam, id) {
		var v = this.getViewer(id);
		if (v) {
			if (_.isString(actionParam))
				actionParam = {name: actionParam};
			// set async to default to false from outside viewer call
			if (!actionParam.hasOwnProperty("async"))
				actionParam.async = false;
			return v.executeAction.apply(v, arguments);
		}
		return true;
	},

	getViewer: function(id) {
		if (!id) return this.currentViewer;
		return vfw.instances[id];
	},

	notifyAllViewers: function(e) {
		var managers = window.top.ViewerData.managers;
		for (var i in managers) {
			if (managers[i].destroyed) {
				delete managers[i];
				continue;
			}
			try {
				managers[i].notifyViewers(e, ViewerManager);
			} catch (ex) {}
		}
	},

	notifyViewers: function(e, manager) {
		_.each(vfw.instances, function(v) { v.notify(e, manager); });
	},

	setPasteBufferKey: function(key) {
		window.top.ViewerData.pasteBufferKey = key;
		this.notifyAllViewers("updatePasteKey");
	},

	hasPasteBuffer: function(graph) {
		var key = window.top.ViewerData.pasteBufferKey;
		return (key !== undefined && key != null && (!graph || key == graph.pasteKey));
	},

	storeCutData: function(cells) {
		var cutData = window.top.ViewerData.cutData = [];
		cutData.manager = ViewerManager.id;
		cutData.viewer = this.currentViewer.id;
		_.each(cells, function(cell) { cutData.push(cell); });
	},

	clearCutData: function() {
		try {
			var cutData = window.top.ViewerData.cutData;
			if (cutData) {
				var manager = window.top.ViewerData.managers[cutData.manager];
				if (!manager) return;
				if (manager != ViewerManager) {
					manager.clearCutData();
					return;
				}
				var v = this.getViewer(cutData.viewer);
				v.executeAction({name: "clearCut", cells: cutData});
			}
		} catch(e) {}
		delete window.top.ViewerData.cutData;
	},

	removeCutData: function() {
		try {
			var cutData = window.top.ViewerData.cutData;
			if (cutData) {
				var manager = window.top.ViewerData.managers[cutData.manager];
				if (!manager) return;
				if (manager != ViewerManager) {
					manager.removeCutData();
					manager.trigger("cut");
					return;
				}
				var v = this.getViewer(cutData.viewer);
				v.executeAction({name: "performCut", cells: cutData});
				this.clearCutData();
			}
		} catch (e) {}
	},

	/**
	 * Destroy all viewers.
	 */
	destroy: function() {
		_.each(vfw.instances, function(v) { this.destroyViewer(v.id); }, this);
		delete window.top.ViewerData.managers[ViewerManager.id];
		this.destroyed = true;
	}
};
_.extend(ViewerManager, Events);
window.top.ViewerData.managers[ViewerManager.id] = ViewerManager;

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                Builder                                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Builder = vfw.Builder = function(viewer, config) {
	this.viewer = viewer;
	this.graph = viewer.graph;
	this.counter = 0;
	this.firstVertex = null;
	this.init(config);
};
_.extend(Builder.prototype, Events, Config);

Builder.DEFAULT_CONFIG = {
	childAsLink: true,
	asyncProcessing: false
};

Builder.EVENT_TYPES = {
	STARTED: "started",
	UPDATED: "updated"
};

Builder.prototype.start = function() {
	util.log('Builder', 'Builder.start');
	this.buildStencil();
	this.trigger(Builder.EVENT_TYPES.STARTED);
	util.log('Builder', 'Builder.start end');
};

/**
 * This is temporary. Converting stencil to templates
 */
Builder.prototype.buildStencil = function() {
	if (!stencil) return;

	var numbers = ['anchorPointsCount', 'width', 'height', 'strokeWidth', 'opacity', 'labelHorizontalPos', 'labelVerticalPos',
		'labelWidth', 'labelHeight', 'labelOffsetX', 'labelOffsetY', 'labelPadding', 'fontStyle', 'fontSize'];
	var booleans = ['shadow', 'rounded', 'isLabelAoutofit', 'dashed'];

	// Config properties for shape
	var SHAPE_CONFIG = gfw.SHAPE_CONFIG = ['shape', 'direction', 'image', 'fillColor', 'strokeColor', 'strokeWidth',
		'opacity', 'gradientDirection', 'shadow', 'rounded', 'anchorPointsCount', 'perimeter',
		'startArrow', 'endArrow', 'startSize', 'endSize', 'dashed'];

	// Config properties for label
	var LABEL_CONFIG = ['labelHorizontalPos', 'labelVerticalPos', 'labelWidth', 'labelHeight', 'labelOffsetX',
		'labelOffsetY', 'labelPadding', 'fontStyle', 'fontSize', 'fontColor', 'fontFamily', 'labelLocation', 'labelBackgroundColor', 'align'];

	var parseValue = function(name, value) {
		value = s.trim(value);
		if (_.includes(numbers, name)) {
			if (value == '') return null;

			// first check if value has the '%' or 'px' suffix.
			if (/%$/.test(value)) {
				return s(value).strLeft('%').toNumber() / 100;
			} else if (/px$/.test(value)) {
				return s(value).strLeft('px').toNumber();
			}
			return s.toNumber(value, 2);
		}

		if (_.includes(booleans, name)) {
			return s.toBoolean(value);
		}

		return value;
	};

	var $xml = $($.parseXML(stencil));
	var styles = this.styles = {}, styleName;

	var children = $($xml.children()[0]).children();

	_.each(children, function(child) {
		child = $(child);
		styleName = child.attr('as');
		styles[styleName] = {};
		_.each(child.children(), function(child) {
			child = $(child);
			styles[styleName][child.attr('as')] =  parseValue(child.attr('as'), child.attr('value'));
		});
	});

	var style, modifierSettings, shapeConfig, shapeStyles, labelConfig, labelStyles, self = this;

	function configType(type, name, value) {
		if (name == 'role') return;

		if (_.includes(SHAPE_CONFIG, name)) {
			if (!type.hasProperty('shapeConfig')) {
				type.setProperty('shapeConfig', {});
			}
			shapeConfig = type.getProperty('shapeConfig');
			shapeConfig[name] = value;
			//if (name == 'direction') { // direction should also be an anchor config.
			//	type.getProperty('anchors')[name] = value;
			//}
		} else if (_.includes(LABEL_CONFIG, name)) {
			if (!type.hasProperty('labelConfig'))
				type.setProperty('labelConfig', {});

			labelConfig = type.getProperty('labelConfig');
			labelConfig[name] = value;
		} else if (name.indexOf('$') > 0) { // check if it's an modifier.
			if (!type.hasProperty('modifierSettings'))
				type.setProperty('modifierSettings', {});

			modifierSettings = type.getProperty('modifierSettings');
			name = s.strLeft(name, '$');
			modifierSettings[name] = eval(value);
			// fix the showAlways bug
			modifierSettings[name].showAlways = s.toBoolean(modifierSettings[name].showAlways);
			// check if modifier type is created already.
			if (!self.graph.getModifierType(name)) {
				var mType = new gfw.Type(name);
				mType.type = self.graph.getDefaultModifierType();
				self.graph.addModifierType(mType);
			}
		} else if (!_.isNull(value))
			type.setProperty(name, value);
	}

	function addStyle(name, type) {
		shapeConfig = type.getProperty("shapeConfig");
		shapeStyles = {};
		shapeStyles.fill = shapeConfig.fillColor || 'none';
		if (shapeConfig.strokeColor)
			shapeStyles.stroke = shapeConfig.strokeColor;
		if (shapeConfig.strokeWidth)
			shapeStyles['stroke-width'] = shapeConfig.strokeWidth + '';
		if (shapeConfig.opacity != 100) {
			shapeStyles["fill-opacity"] = shapeConfig.opacity/100 + '';
			shapeStyles["stroke-opacity"] = shapeConfig.opacity/100 + '';
		}
		if (shapeConfig.dashed)
			shapeStyles["stroke-dasharray"] = "3 3";
		jss.set(name, shapeStyles);

		labelConfig = type.getProperty("labelConfig");
		labelStyles = {
			"font-family": labelConfig.fontFamily,
			"font-size": labelConfig.fontSize + 'px',
			"font-weight": (labelConfig.fontStyle & gfw.Label.FONT_BOLD) == gfw.Label.FONT_BOLD ? 'bold' : 'normal',
			"fill": labelConfig.fontColor,
			"stroke-width": "0"
		};
		jss.set(name + ' .label', labelStyles);
	}

	var renderer = this.graph.renderer;
	var types = this.graph.vertexTypes;
	var markers = [];

	_.each(types, function(type) {
		if (type.name == "default") {
			jss.set('.vertex', {
				// Add default styles for the vertex
			});
		}
		style = styles[type.getProperty("className")];
		if (!style) return;
		_.each(style, function(value, name) {
			configType(type, name, value);
		});

		// dynamically generate the styles.
		addStyle('.' + type.getProperty("className"), type);
	});

  	// TODO: Define classes that can be stacked together
	// TODO: Move to stencil and add additional styles for active and selected
	jss.set(".vertex .active", {
		stroke: "#ff6262",
		"stroke-width": "1"
	});

	jss.set(".vertex.selected", {
		stroke: "#000000",
		"stroke-opacity": "0.3",
		"stroke-width": "4"
	});

	jss.set(".vertex.invalid", {
		stroke: "#cc0033",
		"stroke-width": "4"
	});

	jss.set(".vertex.valid", {
		stroke: "#66ff00",
		"stroke-width": "4"
	});

	types = this.graph.edgeTypes;
	_.each(types, function(type) {
		if (type.name == "default") {
			jss.set('.edge', {
				fill: "none",
				"stroke-miterlimit": "10"
			});
		}
		style = styles[type.getProperty("className")];
		if (!style) return;
		_.each(style, function(value, name) {
			configType(type, name, value);
		});

		// see if we need to create any markers.
		if (style.startArrow != "none")
			gfw.EdgeMarker.addMarker(this.graph, type.name + '_StartArrow', style.startArrow, style.startSize, true, style);
		if (style.endArrow != "none")
			gfw.EdgeMarker.addMarker(this.graph, type.name + '_EndArrow', style.endArrow, style.endSize, false, style);

		addStyle('.' + type.getProperty("className"), type);
	}, this);

	jss.set(".edge.selected", {
		stroke: "#868E8E",
		"stroke-opacity": "0.6",
		"stroke-width": "2px"
	});
  
  	jss.set(".edge.valid", {
		stroke: "#66FF00",
		"stroke-opacity": "0.6",
		"stroke-width": "2px",
      	"stroke-dasharray": "6,3"
	});
  
   	jss.set(".edge.invalid", {
		stroke: "#FF0000",
		"stroke-opacity": "0.6",
		"stroke-width": "2px",
      	"stroke-dasharray": "6,3"
	});

	jss.set(".edge.reconnected", {
		stroke: "#66FF00",
		"stroke-opacity": "0.6",
		"stroke-width": "2px"
	});

	// Add additional styles for edge
	jss.set(".edge .sleeper", {
		stroke: "white",
		"stroke-width": "9",
		visibility: "hidden",
		"pointer-events": "stroke"
	});

	types = this.graph.modifierTypes;
	_.each(types, function(type) {
		style = styles[type.name];
		if (!style) return;
		_.each(style, function(value, name) {
			configType(type, name, value);
		});

		addStyle('.' + type.name, type);
	});
};

Builder.prototype.updateModel = function(model, replace, fireEvent) {
	util.log('Builder', 'updateModel');
	if (_.isUndefined(replace))
		replace = false;

	this.replace = replace;
	if (replace)
		this.graph.reset();


	this.graph.beginUpdate();

	this.firstVertex = null;
	if (model) {
		var vertices = [], edges = [], actions = [], i;
		if (!_.isArray(model)) {
			if (model.actions)
				actions = model.actions;
			if (model.nodes)
				vertices = model.nodes;
			if (model.edges)
				edges = model.edges;
		} else {
			vertices = model;
		}
		this.queue1 = [];
		this.queue2 = [];
		_.each(actions, function(action) {
			this.queue1.push({action:"action", param: action});
		}, this);
		if (vertices.length > 0) {
			var m = vertices[0];
			while (_.isArray(m))
				m = m[0];
			if (m.hasOwnProperty("sid"))
				this.graph.isSharedID = true;
			else
				this.graph.isSharedID = false;
		}
		_.each(vertices, function(vertex) {
			if (_.isArray(vertex))
				this.queue1.push({action:"vertex", model: vertex});
			else
				this.queue1.push({action:"vertex", model: [vertex]});
		}, this);
		_.each(edges, function(edge) {
			this.queue1.push({action:"edge", model: edge});
		}, this);
		this.processQueue(this.getProperty("asyncProcessing"), fireEvent);
	}
	util.log('Builder', 'updateModel end');
};

Builder.prototype.processQueue = function(asyncProcess, fireEvent) {
	if (_.isUndefined(asyncProcess)) asyncProcess = false;
	if (_.isUndefined(fireEvent)) fireEvent = true;
	var item;
	while (this.queue2.length > 0) {
		item = this.queue2.splice(0, 1)[0];
		this.updateVertex(item.parent, item.model, item.pos, asyncProcess);
		this.counter++;
		if (this.counter >= 50 && asyncProcess) {
			// Break the processing
			this.counter = 0;
			_.defer(_.bind(this.processQueue, this, arguments));
			return;
		}
	}
	while (this.queue1.length > 0) {
		item = this.queue1.splice(0, 1)[0];
		if (item.action == "action")
			this.viewer.executeAction(item.param);
		else if (item.action == "vertex")
			this.updateVertex(item.parent, item.model, item.pos, asyncProcess);
		else
			this.updateEdge(item.model);
		this.counter++;
		if (this.queue2.length > 0) {
			this.processQueue(asyncProcess, fireEvent);
			return;
		}
		if (this.counter >= 50 && asyncProcess) {
			// Break the processing
			this.counter = 0;
			_.defer(_.bind(this.processQueue, this, arguments));
			return;
		}
	}
	this.counter = 0;

	
	if (fireEvent)
		this.trigger(Builder.EVENT_TYPES.UPDATED, this.replace);

	
	this.graph.endUpdate();
};

Builder.prototype.updateVertex = function(parent, model, pos, async) {
	//util.log('Builder', 'updateVertex: parent=' + parent + ';pos=' + pos);
	if (_.isUndefined(async))
		async = true;
	if (!_.isArray(model))
		model = [model];

	var vertices;
	var applyAction = true;
	if (!parent) {
		vertices = this.findVertices(model[0]);
		if (!vertices || vertices.length == 0) {
			vertices = [this.createVertex(parent, model[0], pos)];
			applyAction = false;
		}
	} else {
		vertices = this.findVertices(model[0], parent);
		if (!vertices || vertices.length == 0) {
			if (this.getProperty("childAsLink")) {
				if (pos == null || Lang.isUndefined(pos) || parent.outEdges.length <= pos) {
					vertices = [this.createVertex(null, model[0])];
					this.createEdge(parent, vertices[0], {sourcePos: pos});
					applyAction = false;
				} else
					vertices = [parent.outEdges[pos].target];
			} else {
				vertices = [this.createVertex(parent, model[0], pos)];
				applyAction = false;
			}
		}
	}

	if (!this.firstVertex)
		this.firstVertex = vertices[0];

	_.each(vertices, function(vertex) {
		if (applyAction)
			vertex.applyConfig(model[0]);

		_.each(_.rest(model), function(childModel, index) {
			if (async)
				this.queue2.push({parent: vertex, model: childModel, pos: index});
			else
				this.updateVertex(vertex, childModel, index, async);
		}, this);
	}, this);
	//util.log('Builder', 'updateVertex end');
};

Builder.prototype.updateEdge = function(edgeConfig) {
	var edge;
	var froms = _.isEmpty(edgeConfig.from) ? null : this.findVertices(edgeConfig.from);
	var tos = _.isEmpty(edgeConfig.to) ? null : this.findVertices(edgeConfig.to);
	if ((froms && froms.length == 0) || (tos && tos.length == 0)) // the model contains error, the from is wrong
		return null;

	var v1 = null, v2 = null;
	if (froms) {
		_.each(froms, function(v1) {
			v2 = _.find(tos, function(vertex) { return v1.getDrillDownParent() == vertex.getDrillDownParent();});
			edge = this.createEdge(v1, v2, edgeConfig);
		}, this);
	} else if (tos) {
		_.each(tos, function(v2) {
			edge = this.createEdge(v1, v2, edgeConfig);
		}, this);
	} else
		edge = this.createEdge(v1, v2, edgeConfig);

	return edge;
};

Builder.prototype.createVertex = function(parent, config, pos) {
	if (!this.firstVertex) {
		//  Data from server is not guaranteed to have type 'root' as first cell - or any cell
		if (config.type == "root" || this.replace) {
			config.type = "root";
			
			if (!config.pathKey)
				config.pathKey = strPageName; // Where we should get the ClipboardPage path from ?

			return this.graph.createRoot(config);
		}
	}
	
	var type = this.graph.getVertexType(config.type);
	
	if (!type) {
		type = this.graph.getVertexType(this.getProperty("errorType"));
		config.type = type.name;
	}

	return this.graph.createVertex(parent, config, type.getProperty("jsClass"), pos);
};

Builder.prototype.createEdge = function(v1, v2, config) {
	var self = this;
	var f = function(parent) {
		var edge = self.findEdges(config, parent);
		if (!edge || edge.length == 0) {
			var multigraph = self.graph.getProperty("multigraph");
			var allowDanglingEdges = self.graph.getProperty("allowDanglingEdges");
			if (allowDanglingEdges || multigraph || (v1 && v2 && !(self.graph.isConnected(v1, v2)))) {
				edge = self.graph.createEdge(v1, v2, config, null, parent);
			} else {
				edge = v1 && v2 ? v1.getEdge(v2, 'target') : null;
				if (!edge)
					util.log('Builder', 'double connection found: ' + edge, 'error');
				else
					edge.applyConfig(config);
			}
		} else {
			edge = edge[0];
			edge.applyConfig(config);
		}
		return edge;
	};

	// Do not allow edges between child and parent.
	if ((v1 != null && v1.parent == v2) || (v2 != null && v2.parent == v1))
		return null;

	// find the parent first: kind of a hack
	var parent = v1 ? v1.getDrillDownParent() :
		(v2 ? v2.getDrillDownParent() : (config.id ? null :
			(this.graph.getSIDHash().getDuplicateFlows(config.sid.split('.')[0]))));

	var edge;
	if (_.isArray(parent)) {
		_.each(parent, function(p) { edge = f(p); });
	} else
		edge = f(parent);
	return edge;
};

Builder.prototype.findVertices = function(model, parent) {
	if (_.isString(model)) {
		var idName = this.graph.isSharedID ? "sid" : "id";
		var o = {};
		o[idName] = model;
		model = o;
	}

	// Check for id and sid
	if (model.id)
		return this.graph.findVertices("id", model.id, parent);
	if (model.sid) {
		return this.graph.findVertices("sid", model.sid, parent);
	}
	return [];
};

Builder.prototype.findEdges = function(model, parent) {
	if (_.isString(model)) {
		var idName = this.graph.isSharedID ? "sid" : "id";
		var o = {};
		o[idName] = model;
		model = o;
	}

	// check for id and sid
	if (model.id)
		return this.graph.findEdges("id", model.id);
	if (model.sid) {
		return this.graph.findEdges("sid", model.sid, parent);
	}
	return [];
};

/**
 * Shortcut methods to insert a model under a parent. The model should be an array of vertices or edges.
 */
Builder.prototype.insertModel = function(parent, model) {
	if (!parent)
		parent = this.graph.getCurrentRoot();
	if (!(parent instanceof gfw.Vertex)) {
		parent = this.findVertices(parent);
		if (parent.length > 0)
			parent = parent[0];
		else
			parent = this.graph.getCurrentRoot();
	}

	var edgeModel = [];
	var addedVertices = [];

	for (var i = 0; i < model.length; i++) {
		var childModel = model[i];
		this.firstVertex = null;
		if (_.isArray(childModel))
			this.updateVertex(parent, childModel, undefined, false);
		else {
			if (this.isVertexModel(childModel))
				this.updateVertex(parent, [childModel], undefined, false);
			else
				edgeModel.push(childModel); // we save the edges and do them later after all the cells are created.
		}
		if (this.firstVertex)
			addedVertices.push(this.firstVertex);
	}
	var edge;
	var addedEdges = [];
	for (i = 0; i < edgeModel.length; i++) {
		edge = this.updateEdge(edgeModel[i]);
		if (edge)
			addedEdges.push(edge);
	}

	// TODO: Check if this is the correct place
	this.graph.setSelection(addedVertices.concat(addedEdges));
};

Builder.prototype.isVertexModel = function(model) {
	var type = this.graph.getVertexType(model.type);
	if (type)
		return true;
	return false;
};

Builder.prototype.destroy = function() {
	this.off();
	delete this.viewer;
	delete this.graph;
	delete this.firstVertex;
	delete this.styles;
	this.removeProperty();
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                Server API                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var ServerAPI = vfw.ServerAPI = function(viewer, config){
	this.viewer = viewer;
	this.init(config);
	this.locked = false;
	this.busy = false;
	this.tick = 0;
	this.loop = 0;
	this.interval = 50;     /* NJ Task-93779; reduce delay for small flows - large are mxg draw constrained */
	this.timeout = 15*1000; /* 15 seconds */
};
_.extend(ServerAPI.prototype, Config);

ServerAPI.prototype.getDDGateway = function(viewer) {
	if (!pega.u.d) return null;
	return pega.u.d.getSectionByName('pxDDGateway_OneViewer', undefined, this.viewer.getParentSection());
};

ServerAPI.prototype.startProcess = function() {
	if (this.busy) return;

	this.busy = true;
	if (this.queue && this.queue.length > 0) {
		var self = this;
		this.loop = window.setInterval(function() {
			self.check();
		}, this.interval);
	} else {
		this.busy = false;
		this.stopProcess();
	}
};

ServerAPI.prototype.check = function() {
	if (!this.queue.length)
		this.stopProcess();
	if (!this.locked  &&  this.queue.length>0) {
		this.tick = 0;
		try {
			this._callServer.apply(this, this.queue.shift());
		} catch (e) {}
	}
	this.tick += this.interval;
	if (this.tick > this.timeout)
		this.stopProcess();
};

ServerAPI.prototype.stopProcess = function() {
	window.clearInterval(this.loop);
	this.tick = 0;
	this.busy = false;
	if (this.queue.length) {
		this.viewer.showDialog('Connection with the server seems to have been lost.','Server timeout.');
		// clean up the queue.
		this.queue = [];
	}
};

ServerAPI.prototype.callServer = function(method, actionParam, async) {
	if (_.isUndefined(async)) async = false;

	if (async) {
		if (!this.queue) this.queue = [];
		this.queue.push(arguments);
		if (!this.busy)
			this.startProcess();
	} else {
		this._callServer(method, actionParam, async);
	}
};

ServerAPI.prototype._callServer = function(method, actionParam, async) {
	//this.locked = true;

	var oSafeUrl = new SafeURL();
	if (method)
		oSafeUrl.put("action", method);

	var args = actionParam.args;
	if (!args.pzPrimaryPageName) {
		var pathKey = util.getPathKey(this.viewer.graph.root) ;
		if (pathKey == null || pathKey.length == 0) {
			pathKey = strPrimaryPage;
		}
		args.pzPrimaryPageName = pathKey;
	}
	args.embeddedViewer = this.viewer.isEmbedded();

	// check if there are additional params that need to be set
	if (this.hasProperty("addParam"))
		_.extend(args, this.getProperty("addParam"));

	for (var n in args) {
		if (args[n] != null)
			oSafeUrl.put(n, args[n]);
	}

	this.arguments = arguments;
	if (!async)
		this.viewer.graph.disable();

	var parentSection = this.viewer.getParentSection();
	if (!parentSection) {
		this.viewer.showDialog('Cannot find parent section for the server side operations.');
		return false;
	}

	/*  bug-64231, pzFromFrame required for transactionId processing to stay happy */
	var url = SafeURL_createFromURL(pega.u.d.url);

	var useTransactionId = actionParam.hasOwnProperty("useTransactionId") ? actionParam.useTransactionId : true;
	/* changetracker may have revised url - how to know if it is correct for this context?  */
	var tracker = pega.ui.ChangeTrackerMap.getTracker();
	if (useTransactionId && tracker != null) {
		var transId = tracker.trackedPropertiesList.pxThread.pxClientExchange;
		if (transId != null)
			url.put ("pzTransactionId", transId);
	}

	if (actionParam.activity)
		url.put("pyActivity", actionParam.activity);
	else
		url.put("pyActivity", "pzOneViewerInteractions");
	url.put("pzPrimaryPageName", args.pzPrimaryPageName);

	var outerGadgetID = parentSection.getAttribute("outerGadget");
	if(outerGadgetID){
		var hID = document.getElementById("pzHarnessID");
		url.put("pzHarnessID", hID.value);
		url.put("newSectionID", outerGadgetID);
	}

	var o = pega.util.Connect.getConnectionObject();
	o.conn.open("POST", url.toURL(), false);
	o.conn.send(oSafeUrl.toQueryString());
	var callbackArgs = [parentSection, false, '', '', '', null, '', parentSection.getAttribute("uniqueID")];
	var respObject = pega.util.Connect.createResponseObject(o, callbackArgs);
	// The responseHandler will handle the response object.
	if (actionParam.responseHandler) {
		actionParam.responseHandler(this, respObject);
		this.viewer.graph.enable();
	} else {
		var status = false, transactionId = null, data = null;
		try {
			eval (respObject.responseText);
		} catch (e) {
			data = "Server communication error: " + e.message;
			util.log("ServerAPI", data, "error");
		}
		if (transactionId) {
			var re = /pzTransactionId=\w*&/;
			var newpzId = "pzTransactionId=" + transactionId + "&" ;
			pega.u.d.url = pega.u.d.url.replace (re, newpzId);

			/* bug-73690; UI_Engine api change, no longer gets transactionid */
			/*if (typeof AJAXCTJSON != "undefined" && AJAXCTJSON != null && typeof AJAXCTJSON === 'object') {
				if(AJAXCTJSON.Values && AJAXCTJSON.Values.pxThread) {
					AJAXCTJSON.Values.pxThread.pxClientExchange = transactionId;
				}
			}*/
			var tracker = pega.ui.ChangeTrackerMap.getTracker();
			if (tracker)
				tracker.trackedPropertiesList.pxThread.pxClientExchange = transactionId;
			util.log("ServerAPI", "newTransactionId="+transactionId);
		}
		this.serverCallback(status, data);
	}

	// @hack. turn off the busy indicator at the bottom of the page.
	if (pega.u.d.gBusyInd)
		pega.u.d.gBusyInd.hide();
};

/**
 * Call Server to set the property.
 * @return
 * 		-1: this is not a server property.
 * 		 0: should not change to the new value.
 * 		 1: server approves change.
 * 		 2: server has an update for the change.
 */
ServerAPI.prototype.handlePropertyChange = function(cell, name, value, args) {
	if (this.viewer.isPaused() || !this.getProperty("propertyMap")) return -1;

	// first try to get the property map from the cell, if non exists then get it from this.
	var sProp;
	if (cell.hasProperty("propertyMap"))
		sProp = cell.getProperty("propertyMap")[name];
	if (!sProp)
		sProp = this.getProperty("propertyMap")[name];
	if (!sProp) return -1;

	var change = 1;
	// Send the change to server.
	var callback = _.bind(function(success, result) {
		var ret = false;
		this.viewer.pauseAction();
		if (!success) {
			change = 0;
			ret = true;
		} else if (result) {
			if (!this.isModelUpdate(result)) {
				cell.applyConfig(result);
				change = 2;
			} else
				ret = true;
		}
		this.viewer.resumeAction();
		return ret;
	}, this);

	if (value)
		value = value.replace(/,/gi, '/,').replace(/:/gi, '/:').replace(/\//gi, '//');

	var params = {objectPath: util.getPathKey(cell), objectData: sProp + ":" + value};
	if (args)
		_.extend(params, args);
	this.callServer("modify", {args: params, responseCallback: callback}, false);
	return change;
};

ServerAPI.prototype.serverCallback = function(success, result) {
	var update = true;
	// check if result is actually a confirm message.
	var cancel = false;
	if (result && result.confirm) {
		if (confirm(result.confirm)) {
			this.arguments[1].args.confirm = true;
			this.arguments[2] = false;
			this._callServer.apply(this, this.arguments);
			return;
		} else
			cancel = true;
	}
	if (!cancel) {
		var callback = this.arguments[1].responseCallback;
		if (callback)
			update = callback(success, this.parseModel(result));

		if (update == null || update) {
			var model = this.parseModel(result);
			if (model) {
				this.viewer.update(model, model.replace);
			} else if (this.isMessage(result)) {
				if (success)
					this.viewer.showDialog(result, "Server Response");
				else
					this.viewer.showDialog(result, "Invalid operation");
			} else if (!success) {
				this.viewer.showDialog('Server response error, no update data returned.');
			}
		}
	}
	delete this.arguments;
	this.viewer.graph.enable();

	this.locked = false;
};

ServerAPI.prototype.parseModel = function(model) {
	if (!_.isString(model)) return model;
	var firstBracket = model.indexOf('{');
	var secondBracket = model.lastIndexOf('}');
	if (firstBracket >= 0 && secondBracket >= 0) {
		var modelStr = model.substring(firstBracket, secondBracket + 1);
		return eval("(" + modelStr + ")");
	}
	return null;
};

/**
 * Check the return result to see if it's a model update.
 * @param {Object} result
 */
ServerAPI.prototype.isModelUpdate = function(result) {
	return result && (result.nodes || result.edges || result.actions);
};

/**
 * Check whether the return result is a message.
 */
ServerAPI.prototype.isMessage = function(result) {
	return result && (_.isString(result) || (_.isArray(result) && _.isString(result[0])));
};

/**
 * Gets the path key for the cell.
 * @param {Object} cell the cell to get the key for
 * @deprecated
 */
ServerAPI.prototype.getPathKey = function(cell) {
	var arr = [];
	var parent = cell;
	var i, str;
	while (parent) {
		if (parent.hasProperty("pathKey")) {
			arr.splice(0, 0, parent.getProperty("pathKey"));
			break;
		}
		if (!parent.getLinkParent()) break;
		i = parent.getLinkParent().findEdgePos(parent.inEdges[0]) + 1;
		str = parent.getProperty("pathKeyName");
		arr.splice(0, 0, str + '(' + i + ')');
		parent = parent.getLinkParent();
	}
	return arr.join(".");
};

ServerAPI.prototype.destroy = function() {
	delete this.viewer;
	this.removeProperty();
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                    Viewer                                 //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
Here is the format for the One Viewer configuration.

var viewerConfig =
{
	id:<viewer id>,
	jsClass: <viewer implementation class>,
	embedded: <whether viewer is embedded>,
	debug: <boolean>,
	sizer: <standard js class type>, // right now, there are only GreedySizer and ThriftySizer available. See below for their specification.

	serverAPI: {
		propertyMap:{
			label: "pyMOName",
			x: "pyCoordX",
			y: "pyCoordY",
			width: "pyWidth",
			height: "pyHeight"
		}
	},
	builder: {
		jsClass: <string>,
		errorType: <Error Type>,
		childAsLink: <not used for now>,
		vertexTypes: <all vertex types>,
		edgeTypes: <all edge types>
	},
	graphConfig: {
		className: <the class attribute>,
		multigraph: <whether supports multiple edges between the same pair of vertices>,
		singleSelect: <whether we can select more than one cell>,
		draggable: <whether the graph is draggable or not>,
		mode: <int: 0, 1, or 3> // 0: no interaction, 1: minimal interaction, 3: full interaction
		maskOpacity: 0,
		hideOutline: false,
		gridEnabled: true,
		guidesEnabled: true,
		defaultClickMode: "pan",
		connectorStyle: 'bigEdgeArrows',
		allowDanglingEdges: false,
		layout: {
			//jsClass: 'gfw.Layout',
			fitGraph: false
		},
		renderer: {
			//jsClass: 'gfw.SVGRenderer'
		}
	},
	toolbars: [<toolbar type>],
};

standard js class type:
{
	jsClass: <string of javaascript class name>,
	config: <object to pass in the constructor>
}

vertex type:
{
	name: <string>,
	*className: <string>, // the class name of the view
	*attributes: <object>, // additional attributes for the view of this vertex.
	*styles: <object>, // additional styles for the view of this vertex.
	*selectable: <boolean>,
	*editable: <boolean>,
	*draggable: <boolean>,
	*modifiers: [<indicator type>],
	*contextMenu: [<menu type>],
}

action type:
{
	name: <enum: 'js','runActivity','processAction','openWizard','openWorkItem','openAssignment'>,
	method: <string>,
	args: <object>
}

modifier type:
{
	name: <string>,
	className: <string>,
	label: <string>,
	tooltip: <string>
}

toolbar type:
{
	name: <string>,
	jsClass: <toolbar class>,
	config: {}
}

Current Sizers:

GreedSizer:
ThriftySizer:
{name: "GreedySizer", config: {xEnable: false, yOffset: 50}}
*/
var Viewer = vfw.Viewer = function(el, config, model) {
	this.state = Viewer.STATE_PAUSED;
	this.showBusyInd('Creating viewer...');
	if (!config) config = {};
	if (config.hasOwnProperty("id")) {
		this.id = config.id;
		delete config.id;
	}

	if (!this.id || this.id.trim() == '')
		this.id = _.uniqueId('v_');

	util.log('Viewer', 'creating new viewer ' + this.id);

	if (!el) {
		el = dom.createElement('div', {id: this.id}, {position: "relative"});
		document.body.appendChild(el);
	} else {
		d3.select(el).attr({id: this.id}).style({position: "relative"});
	}
	this.view = el;

	jss.set('div#' + this.id + ' svg', {
		//background-color: #FFF;
		//border: "1px solid gray",
		"-webkit-user-select": "none",
		"-moz-user-select": "none",
		"-ms-user-select": "none",
		"-o-user-select": "none",
		"user-select": "none"
	});

	this.model = model;

	this.initialize(config);
	util.log('Viewer', 'new viewer created;');
};
_.extend(Viewer.prototype, Events, Config);

Viewer.STATE_STARTED = "started";
Viewer.STATE_STOPPED = "stopped";
Viewer.STATE_PAUSED = "paused";
Viewer.STATE_DESTROYED = "destroyed";

Viewer.EVENT_TYPES = {
	b4UPDATE: "b4Update",
	UPDATED: "updated"
};

Viewer.prototype.initialize = function(config) {
	util.log('Viewer', this.id + ' initialize');
	this.hasDrawn = false;
	this.dirty = false;
	this._dirty = false;

	this.init(config);
	this.initializeActions();
	this.initializeServerAPI(config.serverAPI);
	this.initializeGraph(config.graphConfig);
	this.initializeSizer(config.sizer);
	this.initializeToolbar(config.toolbars);
	this.initializeSections();
	this.initializeBuilder(config.builder);
	this.initializeBehaviors();
	this.initializeKeyBehaviours();
	util.log('Viewer', 'initViewer end');
};

Viewer.prototype.initializeServerAPI = function(config) {
	var apiClass = util.getConstructor(config.jsClass, ServerAPI);
	this.API = new apiClass(this, config);
};

Viewer.prototype.initializeGraph = function(config) {
	// initialize the graph.
	_.extend(config, {id: this.id + '_g'});
	var graphClass = util.getConstructor(config.jsClass, gfw.Graph);
	this.graph = new graphClass(this.view, config);
};

Viewer.prototype.initializeToolbar = function(config) {
	// initialize the toolbar.
	if (config && config.length > 0) {
		this.toolbars = {};
		var toolbar;
		_.each(config, function(toolbarConfig) {
			toolbar = this.createToolbar(toolbarConfig);
			this.toolbars[toolbar.id] = toolbar;
			this.view.insertBefore(toolbar.getView(), this.graph.viewBase);
		}, this);
	}
};

Viewer.prototype.createToolbar = function(toolbarConfig) {
	var toolbarClass = util.getConstructor(toolbarConfig.jsClass, vfw.Toolbar);
	return new toolbarClass(this, toolbarConfig);
};

Viewer.prototype.initializeSections = function() {
	// Initializes the section related stuff
	this.localMode = true;
	if (pega.u.d) {
		this.secNode = dom.getAncestorBy(this.view, function(el) {
			if (el.getAttribute("node_type") == "MAIN_RULE")
				return true;
			return false;
		});

		// we get the parent section.
		if (this.secNode) {
			this.parentSect = dom.getAncestorBy(this.secNode, function(el){
				if (el.getAttribute("node_type") == "MAIN_RULE")
					return true;
				return false;
			});
			if (this.parentSect) {
				this.parentSect.setAttribute('viewerId', this.id);
				this.localMode = false;
			}
		}
		if (this.secNode &&  this.secNode.getAttribute("uniqueID")) {
			pega.u.d.registerAsHarnessElement(this, this.secNode.getAttribute("uniqueID"));
		}
	}
};

Viewer.prototype.initializeSizer = function(config) {
	// initialize the sizer
	if (config) {
		var sizerClass = util.getConstructor(config.jsClass);
		this.sizer = new sizerClass(this.graph, config);
		this.sizer.on(gfw.Sizer.EVENT_TYPES.RESIZE_COMPLETE, function(type, w, h) {
			ViewerManager.trigger(gfw.Sizer.EVENT_TYPES.RESIZE_COMPLETE, this, w, h);
		}, this);
	}
};

Viewer.prototype.initializeBuilder = function(config) {
	// initialize the builder
	var builderClass = util.getConstructor(config.jsClass, Builder);

	this.builder = new builderClass(this, config);
	_.defer(_.bind(this.builder.start, this.builder));
};

Viewer.prototype.initializeBehaviors = function() {
	// initializes context menu handler
	this.menu = ContextMenu.getMenu(this.graph);

	// initializes property change handler
	this.graph.on(gfw.Graph.EVENT_TYPES.CELL_b4PROPERTY_CHANGE, this.handlePropertyChange, this);

	// initializes double click handler
	var dblclick = function(type, ns, cell) {
		var actionParam = cell.getProperty('onDblClick');
		if (actionParam) {
			delete gfw.Label._delayEdit;
			if (actionParam.propPanel == "true")
				this.showPropertyPanel(_.clone(actionParam), cell);
			else
				this.executeAction(actionParam, cell);
		}
	};

	var dispatcher = this.graph.eventDispatcher;
	dispatcher.register('dblclick.vertex*', dblclick, this);
	dispatcher.register('dblclick.edge*', dblclick, this);
	dispatcher.register(['mouseenter.*modifier.Error', 'mouseenter.*modifier.Hover*'], function(type, ns, cell, pos, event) {
		var modifierName = s.strRightBack(ns, '.');
		gfw.Overlay.showOverlayFromModifier(cell.getModifier(modifierName), this.builder.styles[modifierName + "Message"], pos);
	}, this);

	// Builder event handling
	this.builder.on(Builder.EVENT_TYPES.STARTED, function() {
		this.startViewer();
	}, this);
	this.builder.on(Builder.EVENT_TYPES.UPDATED, function(type, replace) {
		this.trigger(Viewer.EVENT_TYPES.UPDATED, replace);
		if (this.pendingStates) {
			_.defer(_.bind(function() {
				this.restoreState(this.pendingStates);
				delete this.pendingStates;
			}, this));
		}
		this.graph.show();
		this.hasDrawn = true;
		this.resumeAction();
		this.hideBusyInd();
	}, this);

	// Property Panel
	this.propPanel = new PropertyPanel(this);
	// Someone implemented wrong behaviour of the property panel. Even if cancel, fields are not cleared.
	this.propPanel.on(PropertyPanel.EVENT_TYPES.CLOSE, function() {
		delete this.pendingStates;
		var actionParam = {activity: "Data-MO.pzReplaceWithTempPage", args:{pzPrimaryPageName: util.getPathKey(this.graph.getCurrentRoot(), true)}};
		actionParam.responseHandler = function() {};
		this.sendRequest(null, actionParam);
	}, this);

	this.dirtyFlows = [];
	this.mainDirty = false;

	// set readOnly so that these section refresh won't trigger viewer dirty.
	if (pega.u.d) {
		var sectNode = pega.u.d.getSectionByName("pzRuleFormDiagramHeader_RF", "", document);
		if (sectNode)
			sectNode.setAttribute("readOnly", "true");
		sectNode = pega.u.d.getSectionByName("pzRuleFormDiagramHeader_Embd", "", document);
		if (sectNode)
			sectNode.setAttribute("readOnly", "true");
		var sects = util.getSectionsByName(pega.u.d.pyCustomError);
		_.each(sects, function(sect) { sect.setAttribute("readOnly", "true"); });
	}
};

Viewer.prototype.initializeKeyBehaviours = function() {
	var dispatcher = this.graph.eventDispatcher;

	// EventDispacther should maybe provide a wrapper which suppresses event propagation
	// Should iterate over Viewer actions which have a shortcut defined.
	//_.each(this.actions, function(action) {
	/* var handler = action.keyHandler;
	/*if (handler) {
		dispatcher.registerKey(handler.event, handler.keys, handler.callback, handler.context);
	}*/
	// });

	dispatcher.registerKey("keydown", [{ctrl:false, code:"8"}, {ctrl:false, code:"46"}], function() {
		window.console.log("Delete");
		event.preventDefault();
		this.executeAction("remove");
	}, this);									//Delete & Backspace
	dispatcher.registerKey("keydown", {ctrl:false, code:"27"}, function() {
		window.console.log("Clear Cut");
		this.executeAction("clearCut");
	}, this);									//Escape
	dispatcher.registerKey("keydown", {ctrl:false, code:"36"}, function() {
		window.console.log("Refresh");
		this.executeAction("refresh");
	}, this);									//Home
	dispatcher.registerKey("keydown", {ctrl:false, code:"187"}, function(type, ns, data, pos, event) {
		window.console.log("Zoom In");
		this.executeAction({name:"zoom", zoom:"in"});
	}, this);									//Add
	dispatcher.registerKey("keydown", {ctrl:false, code:"189"}, function(type, ns, data, pos, event) {
		window.console.log("Zoom Out");
		this.executeAction({name:"zoom", zoom:"out"});
	}, this);									//Subtract
	dispatcher.registerKey("keydown", {ctrl:true,  code:"65"}, function(type, ns, data, pos, event) {
		window.console.log("Select All");
		event.preventDefault();
		this.executeAction({name:"select", type:"all"});
	}, this);									//Ctrl+A
	dispatcher.registerKey("keydown", {ctrl:true,  code:"67"}, function() {
		window.console.log("Copy");
		this.executeAction("copy");
	}, this);									//Ctrl+C
	dispatcher.registerKey("keydown", {ctrl:true,  code:"190"}, function() {
		window.console.log("Toggle Grid");
		event.preventDefault();
		this.executeAction("grid");
	}, this);									//Ctrl+.
	dispatcher.registerKey("keydown", {ctrl:true,  code:"191"}, function() {
		window.console.log("Toggle Guides");
		this.executeAction("guide");
	}, this);									//Ctrl+/
	dispatcher.registerKey("keydown", {ctrl:true,  code:"86"}, function(type, ns, data, pos, event) {
		window.console.log("Paste");

		this.executeAction({name:"paste", x:pos[0], y:pos[1]});
	}, this);									//Ctrl+V
	dispatcher.registerKey("keydown", {ctrl:true,  code:"88"}, function() {
		window.console.log("Cut");
		this.executeAction("cut");
	}, this);									//Ctrl+X

	/* Unsupported actions
	dispatcher.registerKey("keydown", {ctrl:true,  code:"89"}, function() {
		window.console.log("Redo")
	}, this);									//Ctrl+Y
	dispatcher.registerKey("keydown", {ctrl:true,  code:"90"}, function() {
		window.console.log("Undo")
	}, this);									//Ctrl+Z
	*/
};
Viewer.prototype.getBreadCrumbProvider = function() {
	return this.graph;
};

Viewer.prototype.startViewer = function() {
	util.log('Viewer', this.id + ' startViewer');
	if (this.sizer)
		this.sizer.start();

	this.showBusyInd('Starting display...');

	if (this.model) {
		this.update(this.model, true);
		delete this.model;
	} else {
		// check if the proxy button has the model
		var proxyButton = this.getProxyButton();
		if (proxyButton && proxyButton.model) {
			util.log('Viewer', 'updating model from proxybutton');
			this.update(proxyButton.model, true);
			delete proxyButton.model;
		}
	}
	this.state = Viewer.STATE_STARTED;

	util.log('Viewer', 'viewer ' + this.id + ' started');
};

Viewer.prototype.stopViewer = function() {
	if (this.state != Viewer.STATE_STOPPED) {
		this.stopDisplay();
		this.state = Viewer.STATE_STOPPED;
		util.log('Viewer', 'viewer ' + this.id + ' stopped');
	}
	if (this.sizer)
		this.sizer.stop();
};

/**
 * Handle the notifications from ViewerManager.
 */
Viewer.prototype.notify = function(e, manager) {
	if (e == "updatePasteKey") {
		if (this.hasDrawn) {
			util.refreshSection('pzModelerToolbarCutPasteActions');
		}
	}
};

/**
 * Whether this viewer is embedded
 */
Viewer.prototype.isEmbedded = function() {
	return this.getProperty('embedded', false);
};

/**
 * This will pause any server updates
 */
Viewer.prototype.pauseAction = function() {
	this._old_state = this.state;
	this.state = Viewer.STATE_PAUSED;
};

Viewer.prototype.resumeAction = function() {
	this.state = this._old_state;
	delete this._old_state;
};

Viewer.prototype.isPaused = function() {
	return this.state == Viewer.STATE_PAUSED;
};

Viewer.prototype.update = function(model, replace) {
	util.log('Viewer', this.id + ' update replace:' + replace);

	var result = this.trigger(Viewer.EVENT_TYPES.b4UPDATE, model, replace);
	if (result == false) return;

	if (!model) {
		this.graph.invalidateLayout();
		return;
	}

	this.showBusyInd('Updating model...');

	//this.pauseAction(); TODO:Commenting it out since we do not have distinction between local and server actions
	// first check settings
	if (model.settings) {
		if (model.settings.pasteKey)
			this.graph.pasteKey = model.settings.pasteKey;

		ViewerManager.setPasteBufferKey(model.settings.pasteBufferKey);
	}

	this.builder.updateModel(model, replace);
	util.log('Viewer', 'update end');
};

Viewer.prototype.isDirty = function() {
	return this._dirty || this.dirty;
};

Viewer.prototype.setDirty = function() {
	this.dirty = true;
	this._dirty = true;
	// This is for the gadget view, we need to set dirty so there will be warning popped up.
	if (pega.u.d)
		pega.u.d.gDirtyOverride = true;
};

Viewer.prototype.clearDirty = function() {
	this.dirty = false;
	this._dirty = false;
	// bug-120953; clear down all dirty flags, within viewer and within doc
	// bug-136579; global dirty not managed by dirty handling
	if (pega.u.d) {
		pega.u.d.clearDirtyState();
		delete pega.u.d.gDirtyOverride;
	}
};

Viewer.prototype.showDialog = function(msg, header) {
	var $dialog = $('<div></div>')
		.html(msg)
		.dialog({title:header});

	$dialog.dialog('open');
};

Viewer.prototype.hideDialog = function() {
	this.graph.enable();
	this.dialog.hide();
};

Viewer.prototype.showBusyInd = function(msg) {
	if (this.localMode) return;

	if (!this.busyInd)
		this.busyInd = this.createBusyInd();

	if (this.busyInd) {
		this.busyInd.setMessage(msg);
		if (!this.isBusy)
			this.busyInd.show(true);
	}
	this.isBusy = true;
	//pega.u.d.setBusyIndicator(this.view, true);
};

Viewer.prototype.hideBusyInd = function() {
	if (this.busyInd && this.isBusy) {
		this.busyInd.hide();
		this.isBusy = false;
	}
};

Viewer.prototype.createBusyInd = function() {
	if (pega.ui && pega.ui.busyIndicator)
		return new pega.ui.busyIndicator('', true, this.view);
	return null;
};

/**
 * saveState and restoreState are API functions for Viewer to implement. This is for when the section is reloaded without
 * cleaning up, to give the about-to-be-destroyed old viewer a chance to pass the state of the viewer to the new viewer.
 */
Viewer.prototype.saveState = function() {
	var states = [];
	this.graph.saveState(states);
	return states;
};

Viewer.prototype.restoreState = function(states) {
	this.graph.restoreState(states);
	//@TODO
	/*if (this.currentModule) {
		if (this.hasDrawn) {
			if (state && state.hash == this.computeModelHash())
				this.currentModule.restoreState(state);
			else
				this.currentModule.restoreState();
		} else
			this.pendingRestoreState = state;
	}*/
};

Viewer.prototype.initializeActions = function() {
	this.actions = {};
//TODO: Reorganize actions for specific category, define action class

	this.addAction('js', this.executeJS);
	this.addAction('runActivity', this.runActivity);
	// @deprecated
	this.addAction('processAction', this.processAction);
	this.addAction('openRule', function(actionParam, vertex) {
		// openRule can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		var insKey = util.getObjProperty(vertex, "pzInsKey");
		if (insKey) {
			openRule(insKey);
			return true;
		} else
			alert("Rule Key Not Found!");
		return false;
	});
	this.addAction('openRuleByClassAndName', function(actionParam, vertex) {
		// can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		openRuleByClassAndName(util.getObjProperty(vertex, "insName"), util.getObjProperty(vertex, "objClass"));
		return true;
	});
	this.addAction('openRuleByKeys', function(actionParam, vertex) {
		// can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		openRuleByKeys(util.getObjProperty(vertex, "objClass"), actionParam.args);
		return true;
	});
	this.addAction('openWizard', function(actionParam, vertex) {
		openWizard(actionParam.method, actionParam.args.query);
		return true;
	});
	this.addAction('openWorkItem', function(actionParam, vertex) {
		// can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		var key = vertex ? util.getObjProperty(vertex, "pzInsKey") : null;
		if (key) {
			openWorkByHandle(key);
			return true;
		} else
			util.log("Viewer", "Either vertex doesn't exist or vertex doesn't have a pzInsKey property", 'error');
		return false;
	});
	this.addAction('openAssignment', function(actionParam, vertex) {
		// can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		var key = vertex ? util.getObjProperty(vertex, "pzInsKey") : null;
		if (key) {
			openAssignment(key);
			return true;
		} else
			util.log("Viewer", "Either vertex doesn't exist or vertex doesn't have a pzInsKey property", 'error');
		return false;
	});
	this.addAction('run', function(actionParam, vertex) {
		// can not act on array of vertexs.
		if (_.isArray(vertex)) return false;
		if (!vertex) vertex = this.graph.root;
		var appliesTo = vertex ? util.getObjProperty(vertex, "pyClassName") : null;
		var flowName = vertex ? util.getObjProperty(vertex, "pyFlowType") : null;
		if (appliesTo && flowName) {
			createNewWork(appliesTo, 1, flowName);
			return true;
		} else
			util.log("Viewer", "Either vertex doesn't exist or vertex doesn't have a pyClassName property", 'error');
		return false;
	});
	
	this.addAction("updateSectionBaseRef", this.updateSectionBaseRef);

	this.addAction('refresh', this.refresh);
	this.addAction('reload', this.reload);

	this.addAction('interaction', function(actionParam) {
		if (!this.graph) {return;}
		this.graph.toggleClickMode();
	});

	this.addAction("select", function(actionParam) {
		//This function should support select all and by cell property
		var type = actionParam.type || "all";
		var selection = null;

		if(! this.graph) { return; }
		if(! type || !_.isString(type)) { return; }

		if(type == "property") {
			selection = null; // Not supported at the moment should use findVertices function
		} else {
			selection = this.graph.findVertices();
		}

		this.graph.setSelection(selection);
	});



	this.addAction('zoom', function(actionParam) {
		// TODO: Add extra check on Action Param
		if(! this.graph) {return;}
		this.graph.scale(actionParam.zoom);
	});
	this.addAction('grid', function(actionParam) {
		if(! this.graph) {return;}
		this.graph.toggleGrid();
	}); 
  	this.addAction('guide', function(actionParam) {
		if(! this.graph) {return;}
		this.graph.toggleGuide();
	});  
  
	this.addAction('showPropertyPanel', this.showPropertyPanel);
	this.addAction('hidePropertyPanel', this.hidePropertyPanel);
	this.addAction('commitPropertyPanel', this.commitPropertyPanel);
	this.addAction('saveFlowImage', this.saveFlowImage);
	this.addAction('rmaSave', this.rmaSave);
	this.addAction("saveRuleForm", this.saveRuleForm);
	this.addAction('addLocal', this.addLocal);
	this.addAction('cut', this.cut);
	this.addAction('copy', this.copy);
	this.addAction('paste', this.paste);
	this.addAction('performCut', this.performCut);
	this.addAction('clearCut', this.clearCut);
	this.addAction('drillDown', this.drillDown);
};

/**
 * Add a new action to the Module. The funct can be a real function or a function object.
 * A function object has the following format:
 * {fn: function, scope: <scope of the function>, }
 *
 * @param {Object} actionname
 * @param {Object} funct
 */
Viewer.prototype.addAction = function (actionname, funct) {
	this.actions[actionname] = funct;
};

Viewer.prototype.removeAction = function(name) {
	if (this.actions && this.actions[name])
		delete this.actions[name];
};

/**
 *
 * @param {Object} action Can be either a sincle action or arrays of action.
 * @param {Object} cells Can be either an array of cells or a single cell
 * @return true if the action is executed successfully, false otherwise.
 *
 */
Viewer.prototype.executeAction = function(actionParam, cells, evt) {
	if (!actionParam || this.isPaused()) return;
	if (_.isArray(actionParam)) { // handle an array of actions
		var result = true;
		_.each(actionParam, function(action) {
			result = result && this.executeAction(action, cells, evt);
		}, this);
		return result;
	}
	if (_.isString(actionParam))
		actionParam = {name: actionParam, args:{}};
	else if (!actionParam.noclone)
		actionParam = _.clone(actionParam);

	if (!actionParam.args) actionParam.args = {};

	var menuContext = this.menu.getContext();
	if (menuContext) {
		actionParam.x = actionParam.x || menuContext.x;
		actionParam.y = actionParam.y || menuContext.y;
		if (!cells)
			cells = menuContext.cell;
		this.menu.clearContext();
	}

	// @deprecated. This is for backward compatibility.
	var name = actionParam.name ? actionParam.name : actionParam.type;
	var action = this.actions[name];

	if (action != null) {
		if (actionParam.target)
			actionParam.target = this.evalProp(actionParam, "target");

		cells = actionParam.target ? actionParam.target : cells;
		try {
			// Invokes the function on the module using the args
			return action.apply(this, arguments);
		} catch (e) {
			util.log("Viewer", 'Cannot execute ' + name + ': ' + e.message, "error");
			throw e;
		}
	} else {
		util.log("Viewer", 'Cannot find action ' + name, "error");
		// We should return true since there is no action defined.
		return true;
	}
};

Viewer.prototype.evalProp = function(obj, prop){
	if (obj[prop] && _.isString(obj[prop])) {
		var pattern = /^\$([^\$]*)\$$/;
		var match = pattern.exec(obj[prop]);
		if (match)
			return eval(match[1]);
	}
	return obj[prop];
};

Viewer.prototype.sendRequest = function(method, actionParam, objects, targets, async) {
	if (_.isUndefined(async))
		async = actionParam.async;

	var addArg = function(cells, key, prop) {
		var value;
		if (!prop) prop = key;
		if (_.isArray(cells)) {
			for (i = 0; i < cells.length; i++) {
				value = util.getObjProperty(cells[i], prop);
				if (value)
					actionParam.args[key + "_" + i] = value;
			}
		} else if (!actionParam.args[key]) {
			value = util.getObjProperty(cells, prop);
			if (value)
				actionParam.args[key] = value;
		}
	};

	if (!actionParam.args) actionParam.args = {};
	if (objects) {
		addArg(objects, "objectKey", "pzinskey");
		addArg(objects, "objectPath", "pathKey");
		addArg(objects, "objectData");
	}
	if (targets) {
		addArg(targets, "targetKey", "pzinskey");
		addArg(targets, "targetPath", "pathKey");
		addArg(targets, "targetData");
	}

	if (!actionParam.args["viewerRootPath"])
		actionParam.args["viewerRootPath"] = util.getPathKey(this.graph.root);

	if (this.localMode) {
		util.log('Viewer', 'Sending Request: ' + actionParam);
		return;
	}

	this.API.callServer(method, actionParam, async);
};

/**
 * The JS action
 */
Viewer.prototype.executeJS = function(actionParam, cell) {
	var method;
	if (actionParam.method == "eval") {
		eval(actionParam.args);
	} else {
		method = this[actionParam.method];
		if (method && typeof(method) == "function")
			method.call(this, cell, actionParam.args);
		else {
			method = window[actionParam.method];
			if (method && typeof(method) == "function")
				method(cell, actionParam.args);
		}
	}
	return true;
};

Viewer.prototype.runActivity = function(actionParam, cell) {
	// runActivity can not act on array of cells.
	if (_.isArray(cell)) return;

	var query = actionParam.args ? (actionParam.args.query ? actionParam.args.query : '') : '';
	if (cell && cell.hasProperty("pzInsKey"))
		query += '&pzInsKey=' + cell.getProperty("pzInsKey");
	openUrlInSpace('pyActivity=' + actionParam.method + query);
	return true;
};

Viewer.prototype.processAction = function(actionParam, cell) {
	if (_.isArray(cell))
		cell = cell[0];
	var flowAction = actionParam.method ? actionParam.method : actionParam.args.flowAction;
	if (flowAction != null && flowAction.length > 0 && flowAction != "null") {
		if (!actionParam.args.pzPrimaryPageName)
			actionParam.args.pzPrimaryPageName = util.getPathKey(cell);

		var baseRef = util.getPathKey(cell);
		if (!baseRef)
			baseRef = actionParam.args.pzPrimaryPageName;
		var actionSection;
		if (actionParam.actionSection)
			actionSection = actionParam.actionSection;
		if (!actionSection) {
			// @deprecated
			if (actionParam.args && actionParam.args.actionSection != null && actionParam.args.actionSection != "") {
				actionSection = actionParam.args.actionSection;
			}
		}
		delete actionParam.args.actionSection;

		/* bug-73690; UI_Engine api change, no longer gets transactionid */
		var oSafeUrl = SafeURL_createFromURL(pega.u.d.url);
		/* bug-69970; primary page is accurately set 10 lines up, or passed in */
		/* bug-74483 we don't want to keep messages after modal dialog is gone */
		//oSafeUrl.put("KeepMessages" ,"true");
		//oSafeUrl.put("modelessDialog","true");

		for (var n in actionParam.args) {
			if (actionParam.args[n] != null)
				oSafeUrl.put(n, actionParam.args[n]);
		}

		this.processingAction = true;
		this._setBaseRef(baseRef);
		processAction(flowAction, '', '','','', true, null, actionSection, oSafeUrl, this.getProxySection());
	}
	return true;
};

Viewer.prototype._setBaseRef = function(value) {
	var baseRefElem = pega.u.d.findParentNamed(this.getProxyButton(), "BASE_REF");
	if (!this._origBaseRefSet) {
		this._origBaseRef = baseRefElem.getAttribute('BASE_REF');
		this._origBaseRefSet = true;
	}
	if (value) {
		baseRefElem.setAttribute ('BASE_REF', value);
		baseRefElem.setAttribute ('FULL_BASE_REF', value);
	} else {
		baseRefElem.setAttribute ('BASE_REF', this._origBaseRef);
		baseRefElem.setAttribute ('FULL_BASE_REF', this._origBaseRef);
	}
};

/**
 * Refresh action simply refreshes the view from clipboard.
 */
Viewer.prototype.refresh = function(actionParam, cell) {
	if (!cell)
		cell = this.graph.getCurrentRoot();
	if (!actionParam)
		actionParam = {};
	this.sendRequest("refresh", actionParam, cell);
	return true;
};

/**
 * Reload action regenerates the data, like first draw.
 */
Viewer.prototype.reload = function(actionParam, cell) {
	if (!cell)
		cell = {pathKey: strPageName};
	if (!actionParam)
		actionParam = {};
	this.sendRequest("reload", actionParam, cell);
	return true;
};

Viewer.prototype.updateSectionBaseRef = function(actionParam, cell) {
	if (!this.viewer.localMode) {
		if (!cell)
			cell = this.graph.getCurrentRoot();
		var sectionNode;
		if (actionParam.sectionNode)
			sectionNode = actionParam.sectionNode;
		else {
			var sectionName = actionParam.sectionName;
			sectionNode = pega.u.d.getSectionByName(sectionName, "", document);
		}
		if (sectionNode)
			sectionNode.setAttribute ('BASE_REF', util.getPathKey(cell, true));
	}
};

Viewer.prototype.showPropertyPanel = function(actionParam, cell) {
	if (!this.localMode) {
		if (!cell) {
			var cells = this.graph.getSelection();
			if (cells && cells.length > 0)
				cell = cells[0];
			else
				return true;
		}
		// do not launch on canvas
		if (cell && (cell.parent || actionParam.method) && cell.type.name != "Annotation") {
			var readOnly = actionParam.hasOwnProperty("readOnly") ? actionParam.readOnly : this.getPropertyPanelReadOnly(cell);
			this.propPanel.show(cell, actionParam, this.getModalHeader(cell), this.getModalPosition(cell), readOnly);
			this.pendingStates = this.graph.saveState();
		}
	}
	return true;
};

Viewer.prototype.hidePropertyPanel = function() {
	if (this.propPanel && this.propPanel.showing)
		this.propPanel.hide();
	return true;
};

Viewer.prototype.commitPropertyPanel = function(actionParam) {
	if (this.propPanel && this.propPanel.showing) {
		// processing when called from 'action' handler; this needs a redesign where action facility passes name value pairs
		if (arguments[1] == "KeepMessagesTrue") {
			actionParam.KeepMessages = true;
		} else if (arguments[1] == "KeepMessagesFalse") {
			actionParam.KeepMessages = false;
		}

		this.propPanel.commit(false, actionParam);
	}

	return true;
};

Viewer.prototype.getModalHeader = function(cell) {
	return "Properties";
};

Viewer.prototype.getModalPosition = function(cell) {
	return null;
};

Viewer.prototype.getPropertyPanelReadOnly = function(cell) {
	var readOnly = !(this.graph.getProperty("mode") & gfw.Graph.ALLOW_INTERACTIONS) || this.graph.root.isLocked();
	if (!readOnly && cell.parent)
		readOnly = cell.parent.isLocked();
	return readOnly;
};

/**
 * addLocal action
 */
Viewer.prototype.addLocal = function(actionParam, cell) {
	if (!cell)
		cell = actionParam.args.parent;
	this.builder.insertModel(cell, actionParam.args.model);
	return true;
};

/**
 * The "Cut" action
 */
Viewer.prototype.cut = function(actionParam, cells) {
	if (! this.graph || this.graph.isLocked()) { return true; }

	cells = cells || this.graph.getSelection();

	if (!_.isArray(cells))
		cells = [cells];

	cells = _.filter(cells, function(cell) {
		return cell.getProperty("editable");
	});

	if (!cells.length) { return true; }

	// Let's check if there are dangling edges
	if (this.actions["modifyEdge"]) {
		_.each(cells, function(cell, list) {
			if(! cell instanceof gfw.Edge) { return; }
			this.executeAction({name:"modifyEdge", async: false}, n);
		});

		/*for (i = 0; i < cells.length; i++) {
			var n = cells[i];
			if (n instanceof glib.Edge) {
				if (n.source == null || Util.indexOf(cells, n.source) < 0 || n.target == null || Util.indexOf(cells, n.target) < 0)
					this.executeAction({name:"modifyEdge", async: false}, n);
			}
		}*/

	}

	actionParam.responseCallback = _.bind(function(success, resultData) {
		if (success && resultData && resultData.settings) {
			ViewerManager.clearCutData();
			ViewerManager.setPasteBufferKey(resultData.settings.pasteKey);
			ViewerManager.storeCutData(this.convertNodesEdgesToStringArray(cells));
			for (i = 0; i < cells.length; i++)
				cells[i].showCutMask(true);
			this.cutCells = cells;
		}

		return false;
	}, this);

	actionParam.args.targetData = "cut";
	this.sendRequest("copy", actionParam, cells, {pathKey: "copyPasteBuffer"});
	return true;
};

/**
 * The "Copy" action
 */
Viewer.prototype.copy = function(actionParam, cells) {
	if (!cells && !actionParam.clearCut)
		cells = this.graph.getSelection();

	if (actionParam.clearCut) {
		if (!window.top.ViewerData.cutData) return true;
	} else {
		if (!_.isArray(cells))
			cells = [cells];
		if (cells && cells.length == 0) return true;
	}

	cells = _.filter(cells, function(cell) {
		return cell.getProperty("editable");
	});

	if (!cells.length) { return true; }

	// Let's check if there are dangling edges
	if (this.actions["modifyEdge"] && !actionParam.clearCut) {
		for (i = 0; i < cells.length; i++) {
			var n = cells[i];
			if (n instanceof gfw.Edge) {
				if (n.source == null || Util.indexOf(cells, n.source) < 0 || n.target == null || Util.indexOf(cells, n.target) < 0)
					this.executeAction({name:"modifyEdge", async: false}, n);
			}
		}
	}
	actionParam.responseCallback = _.bind(function(success, resultData) {
		if (success) {
			if (resultData && resultData.settings)
				ViewerManager.setPasteBufferKey(resultData.settings.pasteKey);
			ViewerManager.clearCutData();
		}
		return false;
	}, this);

	this.sendRequest("copy", actionParam, cells, {pathKey: "copyPasteBuffer"});
	return true;
};

/**
 * The "Paste" action
 */
Viewer.prototype.paste = function(actionParam, cell) {
	if (this.graph.isLocked() || !ViewerManager.hasPasteBuffer()) { return true; }

	/*if (!ViewerManager.hasPasteBuffer(this.graph)) {
		this.viewer.showDialog("Cannot paste between different types of flow", "Invalid operation");
		return true;
	}*/

	if (!cell) {
		cell = this.graph.getCurrentRoot();
	}
	if (_.isArray(cell))
		cell = cell[0];

	// Check if x, y are out of bounds
	var bounds = this.graph.viewport(true);
	var pt = new gfw.geom.Point(actionParam.x || 0, actionParam.y || 0);

	if(! bounds.contains(pt)) {
		pt.x = bounds.getCenterX();
		pt.y = bounds.getCenterY();
	}

	/*var pt1 = this.graph.convertFromAbsolutePoint({x: bounds.x, y: bounds.y});
	var pt2 = this.graph.convertFromAbsolutePoint({x: bounds.x + bounds.width, y : bounds.y + bounds.height});
	if (x < pt1.x) x = pt1.x;
	if (y < pt1.y) y = pt1.y;
	if (x > pt2.x)
		x = pt2.x - 200;
	if (y > pt2.y)
		y = pt2.y - 200;
	// see if there is previous data
	var pasteCount = 0;
	if (this.lastPaste && this.lastPaste.x == x && this.lastPaste.y == y) {
		pasteCount = this.lastPaste.pasteCount + 1;
	}
	this.lastPaste = {x: x, y: y, pasteCount: pasteCount};
	x += 20*pasteCount; y += 20*pasteCount;*/
	var targetData = {pyCoordX: pt.x/125, pyCoordY: pt.y/125};
	actionParam.args.targetData = util.buildParamList(targetData);

	actionParam.responseCallback = _.bind(function(success, resultData) {
		if (success) {
			// Remove the cut data after we did the paste.
			//Lang.later(1, ViewerManager, ViewerManager.removeCutData);
			_.defer(_.bind(ViewerManager.removeCutData, ViewerManager, arguments));
			//ViewerManager.fireEvent("paste");
		}
	}, this);

	this.sendRequest("copy", actionParam, {pathKey: "copyPasteBuffer"}, {pathKey: util.getPathKey(cell, true)});
	this.setDirty();
	return true;
};

Viewer.prototype.performCut = function(actionParam, cells) {
	if (!cells)
		cells = this.convertStringArrayTocellsEdges(actionParam.cells);
	this.graph.removeCells(cells);
	return true;
};

Viewer.prototype.clearCut = function(actionParam, cells) {
	cells = this.cutCells;
	if (!cells)
		cells = this.convertStringArrayTocellsEdges(actionParam.cells);
	for (var i = 0; i < cells.length; i++)
		cells[i].showCutMask(false);
	delete this.cutCells;
};

Viewer.prototype.saveFlowImage = function(actionParam) {
	var primaryPage;
	if (this.graph && this.graph.root)
		primaryPage = util.getPathKey(this.graph.root);
	if (!primaryPage)
		primaryPage = strPageName;

	var url;

	this.viewer.showBusyInd("Saving flow image...");
	this.graph.setSelection(null);
	var svg = this.graph.renderer.svg.node();
	svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
	svg.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");

	var self = this;
	var bounds = this.graph.getBounds();
	bounds.x -= 15;
	bounds.y -= 15;
	bounds.width += 30;
	bounds.height += 30;
	svg.toDataURL("image/jpeg", {
		renderer: "canvg",
		debug: false,
		keepOutsideViewport: true,
		boundingBox: bounds,
		backgroundColor: '#fff', /* setting the background to white for now.*/
		callback: function(data) {
			if (!self.localMode) {
				data = data.substring(data.indexOf(',')+1);
				/*var actionParam = {activity: "Rule-Obj-Flow.pzSaveFlowImage", useTransactionId: false,
					args:{pzPrimaryPageName: primaryPage, actualSave: "True", pyFileSource: data},
					responseHandler: {fn: function() {this.viewer.hideBusyInd();}, scope: self, correctScope: true}
				};
				self.sendRequest(null, actionParam);*/
				/* Bug-158613 transactionId error after saveImage */
				url = new SafeURL("Rule-Obj-Flow.pzSaveFlowImage");
				url.put("pzPrimaryPageName", primaryPage);
				url.put("actualSave", "True");
				pega.u.d.asyncRequest("POST", url, {success: function() {this.hideBusyInd();}, scope: self}, "pyFileSource=" + data);
			} else {
				var myWindow = window.open("", "_blank", "toolbar=yes, scrollbars=yes, resizable=yes, width=500, height=500");
				var myDocument = myWindow.document;
				var image = myDocument.createElement("img");
				image.setAttribute("src", data);
				myDocument.body.appendChild(image);
			}
		}
	});
	return true;
};

/**
 * Supporting function for saving the dirty subflows. Used by both PM and DM.
 */
Viewer.prototype.saveSubflows = function(actionParam, saveMain, callback, async) {
	if (_.isUndefined(async))
		async = true;

	var result = true;
	if (saveMain && this.mainDirty && !this.graph.root.isLocked())
		this.dirtyFlows.splice(0, 0, this.graph.root);

	// first check if there are subflows that's unsaved.
	var vertex, flow;
	for (var id in this.graph.vertices) {
		vertex = this.graph.vertices[id];
		if (vertex.hasProperty("flowRule")) {
			flow = vertex.getProperty("flowRule");
			if (flow.pzInsKey == "")
				this.addDirtyFlow(vertex);
		}
	}

	if (this.dirtyFlows.length > 0) {
		this.updateDirtyFlows();
		// make sure we save the child flow first.
		this.dirtyFlows.sort(function(f1, f2) {
			if (f1.isAncestor(f2))
				return -1;
			if (f2.isAncestor(f1))
				return 1;
			return 0;
		});

		var self = this;
		var clearBuffer = true;
		/*var updateWarning = function(flow, clearTransientBuffer) {
			if (Lang.isUndefined(clearTransientBuffer))
				clearTransientBuffer = false;
			var actionParam = {activity: "pzPMSaveUpdateWarningBuffer", args: {}};
			if (clearTransientBuffer)
				actionParam.args.clearTransientBuffer = true;
			else if (clearBuffer)
				actionParam.args.clearMainBuffer = true;

			actionParam.responseHandler = {
				fn: function() {},
				scope: self,
				correctScope: true
			};
			self.sendRequest(null, actionParam, null, flow ? {pathKey: Util.getPathKey(flow, true)} : null, false);
			clearBuffer = false;
		};*/

		if (!async) {
			var ret;
			for (var i = this.dirtyFlows.length - 1; i >= 0; i--) {
				ret = this._save(this.dirtyFlows[i], actionParam, null, async);
				result = result && ret;
				if (ret)
					this.dirtyFlows.splice(i, 1);
				else {
					flow = this.dirtyFlows[i].hasProperty("flowRule") ? this.dirtyFlows[i].getProperty("flowRule") : this.dirtyFlows[i];
					this.viewer.showDialog("Saving of flow " + Util.getObjProperty(flow, "label") + " has failed.", "Fail");
					break;
					//updateWarning(this.dirtyFlows[i]);
				}
			}
			//updateWarning(null, true);
		} else {
			var index = this.dirtyFlows.length - 1;
			var saveCallback = function(ret2) {
				result = result && ret2;
				if (ret2)
					self.dirtyFlows.splice(index, 1);
				else {
					flow = self.dirtyFlows[index].hasProperty("flowRule") ? self.dirtyFlows[index].getProperty("flowRule") : self.dirtyFlows[index];
					self.viewer.showDialog("Saving of flow " + Util.getObjProperty(flow, "label") + " has failed.", "Fail");
					//updateWarning(self.dirtyFlows[index]);
				}
				index--;
				if (index >= 0 && ret2)
					Lang.later(1, self, self._save, [self.dirtyFlows[index], actionParam, saveCallback, async]);
				else {
					//updateWarning(null, true);
					if (callback)
						callback(result);
				}
			};
			if (index >=0) {
				this._save(this.dirtyFlows[index], actionParam, saveCallback, async);
				return;
			}
		}
	}

	if (callback)
		callback(result);
};

/**
 * Supporting function to do the actual save of a single subflow.
 */
Viewer.prototype._save = function(cell, actionParam, callback, async) {
	if (_.isUndefined(async))
		async = true;

	actionParam = _.clone(actionParam);
	var flow = cell.hasProperty("flowRule") ? cell.getProperty("flowRule") : null;
	this.showBusyInd('Saving flow ' + (flow ? flow.label : cell.getProperty("label")));
	if (flow)
		actionParam.args.objectData = cell.getProperty("pathKey");
	else
		actionParam.args.objectData = null;

	var ret = false;
	actionParam.responseCallback = _.bind(function(success, result){
		ret = success;
		var update = !success;
		if (success) {
			if (result) {
				if (result.nodes)
					update = true;
				else {
					var insKey = Util.getObjProperty(flow, "pzInsKey");
					this.pauseAction();
					this.builder.updateVertex(null, result);
					this.resumeAction();
					var updatedFlow = result[0].flowRule;//this.viewer.builder.firstNode.getProperty("flowRule");
					if ((!insKey || insKey == "") && updatedFlow) {
						var data = {
							pyClassName: updatedFlow.pyClassName, pxInsName: updatedFlow.pxInsName, pxObjClass: updatedFlow.pxObjClass,
							pzInsKey: updatedFlow.pzInsKey, pyLabel: updatedFlow.pyFlowType, pyRuleName: updatedFlow.pyFlowType,
							pyRuleStarts: "", pyRuleEnds: "", pyCircumstanceProp: "", pyCircumstanceDateProp: "", isFirstSave: true
						};
						sendEvent(NewRuleCreatedEvent, data);
					}
				}
			}
		}
		this.viewer.hideBusyInd();
		if (callback)
			callback(success);
		return update;
	}, this);

	this.sendRequest("save", actionParam, flow ? flow : cell, null, async);
	return ret;
};

Viewer.prototype.rmaSave = function(actionParam, cell) {
	if (this.doRmaSave) {
		actionParam.responseCallback = _.bind(function(success, result) {
			if (success) {
				this.clearDirty();
				this.mainDirty = false;
			}
		}, this);
		this.sendRequest("rmasave", actionParam, this.graph.root, null, false);
	}

	this.mainDirty = false;
	return true;
};

/**
 * Save the rule form. This action will be triggered when user hit the save on the rule form.
 * This function will return false always, so as to stop the main rule form save, and will then try to save the subflows.
 * If subflows saves ok, will then trigger the save button again to save the main rule.
 *
 */
Viewer.prototype.saveRuleForm = function(actionParam, cell) {
	if (!this.isDirty()) {
		if (actionParam.saveFlowImage)
			this.executeAction("saveFlowImage");
		return true;
	} else
		this.executeAction("saveFlowImage");

	/*this.graph.disable();*/
	var self = this;
	var ret = true;
	var callback = function(result) {
		ret = result;
		if (!result) {
			self.graph.enable();
			/*self.updateDisplayErrorsBaseRef();
			Util.refreshSection(pega.u.d.pyCustomError);*/
		} else {
			self.clearDirty();
			self.mainDirty = false;
			//self.executeAction("saveFlowImage");
		}
	};
	this.doRmaSave = true;
	if (this.dirtyFlows.length > 0) {
		this.saveSubflows(actionParam, true, callback, false);
		this.doRmaSave = false;
	}

	return ret;
};

Viewer.prototype.handlePropertyChange = function(type, cell, name, oldValue, newValue) {
	if (this.localMode) return true;

	var change = this.API.handlePropertyChange(cell, name, newValue, {viewerRootPath : util.getPathKey(this.graph.root)});

	if (name == "label") {
		/*ViewerManager.fireEvent("labelChange", node);
		if (node.type.name == "Annotation") {
			// Annotation label change can result in a resize of the node.
			this.mxgraph.clearSelection();
			var myGraph = this.mxgraph;
			// Had to put this in a timeout to workaround bug where node cell does not
			// have updated coordinates
			window.setTimeout(function() {
				Util.updateNodeCoordinates(myGraph, node.cell);
			},1);
		}*/
	}
	if (change == 1 || change == 2)
		this.setDirty();
	return change != 0 && change != 2;
};

Viewer.prototype.getParentSection = function() {
	return this.parentSect;
};

Viewer.prototype.getProxySection = function() {
	var sect = pega.u.d.getSectionByName("pzOneViewerProxy", "", document);
	// Bug-94333 prevent the rule form sets the dirty flag because of modal dialog opening.
	sect.setAttribute("readOnly", "true");
	return sect;
};

Viewer.prototype.getProxyButton = function() {
	if (!pega.u.d) return null;
	return d3.select(this.getParentSection()).select("div#RULE_KEY[node_type=MAIN_RULE][node_name=pzOneViewerProxy]").select("button").node();
};

Viewer.prototype.computeModelHash = function() {
	var hash = 0;
	var self = this;
	var compute = function(parent, sign) {
		if (parent) {
			hash += sign * util.getPathKey(parent).hashCode();
			var children = parent.childNodes;
			if (children) {
				for (var i = 0; i < children.length; i++) {
					compute(children[i], -sign);
				}
			}
		}
	};
	compute(this.graph.root, 1);
	return hash;
};

/**
 * this is called by harness life cycle management.
 */
Viewer.prototype.nullify = Viewer.prototype.destroy = function() {
	if (this.state == Viewer.STATE_DESTROYED) return;
	this.hideBusyInd();

	_.each(this.toolbars, function(toolbar) {
		toolbar.destroy();
	});
	delete this.toolbars;
	if (this.builder) {
		this.builder.destroy();
		delete this.builder;
	}
	if (this.sizer) {
		this.sizer.destroy();
		delete this.sizer;
	}
	if (this.graph) {
		this.graph.destroy();
		delete this.graph;
	}
	if (this.API) {
		this.API.destroy();
		delete this.API;
	}
	if (this.menu) {
		this.menu.clearContext();
		delete this.menu;
	}
	delete this.propPanel;
	delete this.secNode;
	delete this.parentSect;
	delete this.busyInd;
	delete this.dialog;

	d3.select(this.view).remove();
	delete this.view;
	this.removeProperty();
	this.state = Viewer.STATE_DESTROYED;
	util.log('Viewer', 'viewer ' + this.id + ' destroyed');
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                 Context Menu                              //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var ContextMenu = vfw.ContextMenu = (function() {
	var context, contextMenuMgr, _originalCallback;

	function buildMenu(menu, enable, cell) {
		var buf = new StringBuffer();
		var disabledMenu = cell && cell.hasProperty && cell.hasProperty("disabledMenu") ? cell.getProperty("disabledMenu") : null;
		buf.append('<?xml version="1.0"?><pagedata>');
		for (var i = 0; i < menu.length; i++) {
			if (disabledMenu)
				MenuBuilder.buildMenuItem(buf, menu[i], enable && (Lang.isArray(disabledMenu) ? !disabledMenu[i] : !disabledMenu), true);
			else
				MenuBuilder.buildMenuItem(buf, menu[i], enable);
		}
		buf.append('</pagedata>');
		return buf.toString();
	}

	function buildMenuItem(buf, item, enable, force) {
		if (item.text == "Separator") {
			var sepClass = item.separatorClass && item.separatorClass != "" ? item.separatorClass : "Separator";
			buf.append('<Separator ColorClass ="' + sepClass + '" />');
			return;
		}

		buf.append('<Item Value="' + item.text +
			'" Caption="' + item.text +
			'" ContextAPI="true" ImageClass="' + item.icon +
			'" Tooltip="' + (item.tooltip ? item.tooltip : "") + '"');
		// TODO This is like a hack, need a better way to determine whether the menu is diabled or not.
		if (item.disabled || (force && !enable) || (Lang.isUndefined(item.action) && !enable) || (MenuBuilder.isServerAction(item.action) && !enable))
			buf.append(' disabled="true"');

		if (item.submenu && item.submenu.length > 0) {
			buf.append('>');
			for (var i = 0; i < item.submenu.length; i++) {
				MenuBuilder.buildMenuItem(buf, item.submenu[i], enable);
			}
			buf.append('</Item>');
		} else
			buf.append('/>');
	}

	// @TODO this is all of a big hack!!!!
	function isServerAction(action) {
		if (action) {
			if (action.type == "dmAPI" || action.type == "openRule" || action.name == "remove" || (action.method == "eval" && action.args.indexOf('"cut"') > 0))
				return true;
		}
		return false;
	}

	function loadNavRule(ruleName, primaryPage) {
		var actionParam = {activity: "pxMenuBarTranslator", args: {Name:ruleName, pzPrimaryPageName: primaryPage, viewerRootPath: util.getPathKey(ViewerManager.currentViewer.graph.root) }};
		var menuStr;
		actionParam.responseHandler = function(api, data) {
			menuStr = data.responseText;
			api.serverCallback(true, null);
		};

		ViewerManager.getViewer().API.callServer(null, actionParam, false);
		return menuStr;
	}

	function handleMenuClick(objMenuItem) {
		var path = objMenuItem.path.split("/");
		var menuItem = context.contextMenu;
		for (var i = 2; i < path.length; i++) {
			var text = path[i];
			if (menuItem.submenu)
				menuItem = menuItem.submenu;
			var menuFound = false;
			for (var j = 0; j < menuItem.length; j++) {
				if (menuItem[j].text == text) {
					menuItem = menuItem[j];
					menuFound = true;
					break;
				}
			}
			if (!menuFound)
				return;
		}
		var cell = context.cell;
		this.trigger('menuItem', cell, menuItem, [context.x, context.y]);
	}

	function _showContextMenu(type, ns, cell, pos, event) {
		// Bug-115156 & 123761 Changing the event x and y is not working, resolved to passing an object instead of the event in.
		this.showContextMenu(cell, pos, {pageX: event.clientX, pageY: event.clientY, x: (event.x || event.pageX), y: (event.y || event.pageY)});
	}

	/**
	 * @param pos: the graph position where the menu click happend
	 * @param menuPos: the absolute position to place the menu.
	 */
	function showContextMenu(cell, pos, menuPos, navrule, handler) {
		if (!pega || !pega.ui || !pega.ui.menubar) return;
		if (cell instanceof gfw.Graph)
			cell = cell.getCurrentRoot();

		var contextMenu = navrule ? navrule : getContextMenuConfig(cell);

		context = {x: pos[0], y: pos[1], cell: cell, contextMenu: contextMenu};

		if (contextMenuMgr == null)
			contextMenuMgr = new pega.ui.menubar.Manager();

		handler = handler ? handler : (_.isString(contextMenu) ? null : handleMenuClick);
		if (handler)
			contextMenuMgr.registerCallback(handler, this);
		else
			delete contextMenuMgr.callback;

		if (contextMenu) {
			var menuStr;
			if (_.isString(contextMenu)) {
				// this is a nav rule menu, we need to load the nav rule first.
				var primaryPage;
				if (!cell || _.isArray(cell))
					primaryPage = util.getPathKey(this.graph.getCurrentRoot(), true);
				else
					primaryPage = cell.getProperty("pathKey");
				menuStr = loadNavRule(contextMenu, primaryPage);
			} else {
				var cellMenuEnabled = cell && !_.isArray(cell) ? (cell.isMenuEnabled ? cell.isMenuEnabled() : true) : true;
				menuStr = buildMenu(contextMenu, cellMenuEnabled && this.canEdit(), cell);
			}
			if (menuStr) {
				var contextMenuXML = $($.parseXML(menuStr));
				contextMenuMgr.doContextMenu(contextMenuXML.children()[0], menuPos);
				// Bug-131570 The reload of the cut/paste section result in a harness resize witch deactivates the menu.
				// This fix is like a hack but currently no better options.
				_originalCallback = contextMenuMgr._handleDesktopResize;
				contextMenuMgr._handleDesktopResize = function() {};
			}
		}
	}

	function hideContextMenu() {
		if(contextMenuMgr) {
			contextMenuMgr._handleDesktopResize = _originalCallback;
			contextMenuMgr._hideAll();
		}
		delete context;
	}

	function getContextMenuConfig(cell) {
		if (!cell)
			cell = this.graph.getCurrentRoot();

		if (_.isArray(cell)) {
			// hard coding for now.
			return "pyMultiMenu";
		} else if (cell.getProperty) {
			if (cell.hasProperty("contextMenu_navRule"))
				return cell.getProperty("contextMenu_navRule");
			return cell.getProperty("contextMenu");
		}
		return null;
	}

	function getMenu(graph) {
		var menu = {
			graph: graph,
			getContext: function() { return context; },
			clearContext: function() { delete context; },
			showContextMenu: showContextMenu,
			hideContextMenu: hideContextMenu
		};
		var dispatcher = graph.eventDispatcher;
		dispatcher.register('contextmenu.*', _showContextMenu, menu);
		dispatcher.register('mousedown.*', function() {
			hideContextMenu();
		});
		return menu;
	}

	return {
		getMenu: getMenu
	};
})();

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                            The Property Panel                             //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var PropertyPanel = vfw.PropertyPanel = function(viewer, config) {
	this.viewer = viewer;
	this.init(config);
	// Whether the Prop Panel is modal or not.
	this.modal = true;

	this.initialized = false;

	//This flag controls whether the property panel will submit when a cancel button is clicked or
	//the x button is clicked.
	this.submitOnCancel = false;

	//Whether this property panel is showing.
	this.showing = false;

	if (pega.u.d) {
		var scope = this;
		this.modalListener = function(status) {
			if (status == "OPEN"){
				scope.handleModalShow();
			} else if (status == "CLOSE"){
				scope.handleModalHide();
			} else if (status == "ERROR"){
				scope.handleValidate();
			}
		};
		this.initialize();
	}
};
_.extend(PropertyPanel.prototype, Events, Config);

PropertyPanel.EVENT_TYPES = {
	SHOW: "show",
	HIDE: "hide",
	CLOSE: "close",
	COMMIT: "commit",
	COMMIT_FAIL: "commitFail",
	COMMIT_CLOSE: "commitClose"
};

PropertyPanel.prototype.initialize = function() {
	util.log('PropertyPanel', 'initialize start', 'info');

	this.origPerformFlowACallback = pega.u.d.performFlowACallback;
	this.origCloseModalFlowAction = pega.u.d.closeModalFlowAction;
	this.origShouldSubmitProceed = pega.u.d.shouldSubmitProceed;

	this.initialized = true;
	util.log('PropertyPanel', 'initialize end');
};

/**
 * We need to call this function everytime before we show the property panel.
 */
PropertyPanel.prototype.overrideModalFunctions = function() {
	var me = this;

	pega.u.d.performFlowACallback = function(oResponse) {
		var f = pega.u.d.hideModalWindow;
		var committed = oResponse.responseText.indexOf("COMMIT") > -1 && oResponse.responseText.indexOf("<!--COMMIT") == -1;
		if (oResponse.responseText == "CANCEL" || committed) {
			// BUG-72828, set committed flag if appropriate
			if (committed && me.committingCell == me.currentState.cell)
				me.currentState.committed = true;
			pega.u.d.hideModalWindow = function() {};
		} else { // submit modal failed. do something here
			me.currentState.committed = false;
			// when submit fails, the modal will stay open. set the showing to true.
			me.showing = true;
			me.trigger(PropertyPanel.EVENT_TYPES.COMMIT_FAIL);
		}

		me.origPerformFlowACallback.apply(pega.u.d, arguments);
		me.viewer.graph.enable();
		pega.u.d.hideModalWindow = f;
	};

	pega.u.d.closeModalFlowAction = function(e,args) {
		var bchildOverlayOpen = pega.u.d.closeChildOverLay(e);
	    if(bchildOverlayOpen){
	        return;
	    }
	    var buttonObj = pega.util.Dom.getElementsById("ModalButtonCancel",pega.u.d.modalDialog.innerElement);
	    if(buttonObj) {
	        pega.util.Event.fireEvent(buttonObj[0],'click');
	    } else{
	        if (pega.u.d.submitModalDlgParam && pega.u.d.submitModalDlgParam.taskStatus != "") {
	            if (me.showing) {
					if (!me.currentState.readOnly && me.submitOnCancel) {
						me.commit();
					} else {
						me.hide();
					}
				} else
					pega.u.d.performFlowAction("",e,"",pega.u.d.submitModalDlgParam.taskStatus);
	        }else {
	            pega.u.d.hideModalWindow();
	        }
	    }
	};

	pega.u.d.shouldSubmitProceed = function() {
		var ret = me.origShouldSubmitProceed.apply(pega.u.d, arguments);
		me.shouldSubmitProceed = ret;
		return ret;
	};
};

PropertyPanel.prototype.commit = function(stayOpen, actionParam) {
	// We are already in commit.
	if (this.committingCell) return;

	if (_.isUndefined(stayOpen))
		stayOpen = false;
	this.stayOpen = stayOpen;

	if (this.showing && !this.currentState.readOnly && !this.currentState.committed) {
		this.trigger(PropertyPanel.EVENT_TYPES.COMMIT);
		this.committingCell = this.currentState.cell;
		// bug-69970; url for submit is coming from document root, not page dialog is launched against
		// this is not a good fix; need to work with UIEngine to revise how url for OK button is built
		this.origUrl = pega.u.d.url;
		var ppName = util.getPathKey(this.currentState.cell); //this.module.viewer.graph.root);
		var re = /pzPrimaryPageName=[^&]*/g;
		pega.u.d.url = pega.u.d.url.replace (re, "pzPrimaryPageName="+ppName);
		pega.u.d.url += "&viewerRootPath=" + util.getPathKey(this.viewer.graph.root);
		// bug-81252; embeddedViewer param needed on post modal refresh
		if (this.viewer.isEmbedded())
			pega.u.d.url += "&embeddedViewer=true";

		// pass any additional params
		var args = actionParam ? actionParam.args : null;
		if (args) {
			for (var n in args) {
				if (args[n] != null)
					pega.u.d.url += "&"+n+"="+args[n];
			}
		}

		// bug-149505; the refresh section can be overwritten by actions within the prop panel (grid expand). Restore refresh section
		pega.u.d.insertButton = this.viewer.getProxySection();

		if (actionParam && actionParam.hasOwnProperty("KeepMessages"))
			pega.u.d.KeepMessages = actionParam.KeepMessages;

		doModalAction(pega.u.d.submitModalDlgParam);
		// bug-156326 and we should revert back to the original document url.
		pega.u.d.url = this.origUrl;

		// bug-96433 if validation error, showing should be true.
		if (!this.shouldSubmitProceed) {
			this.committingCell = null;
		} else {
			this.viewer.graph.disable();
			if (!stayOpen)
				this.showing = false;
		}
		/* end bug-69970 */
		// BUG-72828, moved this call to pega.u.d.performFlowACallback override instead
		//this.currentState.committed = true;
	}
};

PropertyPanel.prototype.hide = function(committed, fireEvent) {
	util.log('PropertyPanel', "PropertyPanel.hide start");
	if (_.isUndefined(fireEvent))
		fireEvent = true;

	if(this.showing || this.committingCell){
		pega.u.d.performFlowACallback = this.origPerformFlowACallback;
		pega.u.d.closeModalFlowAction = this.origCloseModalFlowAction;
		pega.u.d.shouldSubmitProceed = this.origShouldSubmitProceed;
		pega.u.d.unregisterModalListener(this.modalListener);
		if (!committed)
			pega.u.d.performFlowAction("",null,"",pega.u.d.submitModalDlgParam.taskStatus);
		// the hide event will always be fired.
		this.trigger(PropertyPanel.EVENT_TYPES.HIDE);
		if (fireEvent) {
			if (committed)
				this.trigger(PropertyPanel.EVENT_TYPES.COMMIT_CLOSE);
			else
				this.trigger(PropertyPanel.EVENT_TYPES.CLOSE);
		}
		pega.u.d.modalDialog.hide();
		if (this.origUrl)
			pega.u.d.url = this.origUrl;
		this.showing = false;
		delete this.currentState;
		delete this.committingCell;
	}
	util.log('PropertyPanel', "PropertyPanel.hide end");
};

/**
 * When showing property panel, should call this method.
 */
PropertyPanel.prototype.show = function(cell, actionParam, header, pos, readOnly) {
	if (!this.initialized) return;

	if (!cell) {
		if (this.currentState && this.currentState.cell)
			this.show(this.currentState.cell, this.currentState.actionParam, this.currentState.header, this.currentState.pos);
		return;
	}

	if (_.isUndefined(readOnly))
		readOnly = false;

	if (this.showing && cell == this.currentState.cell) {
		this.currentState.header = header;
		this.currentState.pos = pos;
		this.currentState.readOnly = readOnly;
		this.updateHeader();
		this.updatePosition();
		return;
	}

	if (this.isBusy()) {
		if (this.queue)
			this.queue.cancel();
		this.queue = _.defer(_.bind(this.show, this, arguments));
	} else {
		delete this.queue;
		this.viewer.showBusyInd('');
		this.showing = true;
		pega.u.d.registerModalListener(this.modalListener);
		this.overrideModalFunctions();
		this.trigger(PropertyPanel.EVENT_TYPES.SHOW);
		this.currentState = {cell: cell, actionParam: actionParam, header: header, pos: pos, readOnly: readOnly, committed: false};

		actionParam.name = "processAction";
		actionParam.modal = this.modal;
		if (!actionParam.args)
			actionParam.args = {};
		if (!actionParam.method)
			actionParam.method = cell.getProperty("localAction");
		if (!actionParam.actionSection && !actionParam.args.actionSection /*this is for backward compat*/)
			actionParam.actionSection = cell.getProperty("actionSection");

		actionParam.args.readOnly = readOnly;

		// fix size of 7.1 panel
		if (!actionParam.args.modalWindowSize)
			actionParam.args.modalWindowSize = "400,650";

		//bug-90352 - keep clipboard messages
		//Not removing the messages on shape on opening properties panel. Removing them on submit of it.
		actionParam.args.KeepMessages=true;
		//BUG-108044 not setting keepmessages to true. The messages on the flow page will be removed on submit of property panel.

		// @hack:
		delete actionParam.propPanel;
		this.viewer.executeAction(actionParam, cell);
		// @hack. turn off the busy indicator at the bottom of the page.
		if (pega.u.d.gBusyInd)
			pega.u.d.gBusyInd.hide();
	}
};

PropertyPanel.prototype.isBusy = function() {
	var proxyButton = this.viewer.getProxyButton();
	return !pega.u.d.isSafeToReload(proxyButton);
};

PropertyPanel.prototype.handleModalShow = function() {
	util.log('PropertyPanel', 'handleModalShow start');
	var me = this;

	//If the propPanel config setting is true, we should treat the Properties panel as 'non-modal'
	if (this.showing) {
		if (!this.modal) {
			var mdlDlg = $(document.getElementById("modalOverlay"));
			mdlDlg.removeClass("modal-overlay");
			mdlDlg.addClass("non-modal-overlay");
			mdlDlg.css("right", "18px");

			mdlDlg.css("top", dom.getPosition(this.viewer.graph.viewBase)[1] + 10);
		}

		//Store off the XY coordinates of the properties panel when the user moves the panel, this allows
		//us to reposition the panel to the user specified coordinates when the panel is refreshed or reopened
		// bug-86591 workaround
		/*if (pega.u.d.inStandardsMode != true) {
			pega.u.d.modalDialog.ddDragdrop.endDrag = function (e) {
				if(me.showing){
					var xy = Dom.getXY(pega.u.d.modalDialog.element);
					var parentXY = Dom.getXY(pega.u.d.modalDialog.element.parentNode);
					me.userOverrideModalXY = [xy[0] - parentXY[0], xy[1] - parentXY[1]];
				}
			};
		}*/

		//COMMENTING THIS BLOCK OUT UNTIL WE SUPPORT USER RESIZING OF PROPERTIES PANEL
		//Update the user override dimensions when the user finishes resizing the modal dialog
		/*
		pega.u.d.modalDialog.ddResize.endDrag = function(e) {
			me.userOverrideModalDimension = [pega.u.d.modalDialog.innerElement.offsetWidth, pega.u.d.modalDialog.innerElement.offsetHeight];
		}
		*/

		// bug-86591 workaround
		/*if (pega.u.d.inStandardsMode != true) {
			this.updatePosition();
		}*/

		/* UNCOMMENT THIS BLOCK IF WE DONT WANT PROPERTIES PANEL TO MOVE WHEN IT IS ALREADY OPEN
		this.currentModalXY = pega.u.d.modalDialog.cfg.getProperty("xy");
		*/

	} else {
		//In case resize handle has been hidden, we should show it again
		//Dom.setStyle(pega.u.d.modalDialog.resizeHandle,"display", "inline");
	}

	this.viewer.hideBusyInd();

	util.log('PropertyPanel', 'handleModalShow finish');
};

PropertyPanel.prototype.handleValidate= function() {
	this.showing = true;
	delete this.committingCell;
};

PropertyPanel.prototype.handleModalHide = function() {
	util.log('PropertyPanel', 'handleModalHide start');
	if (this.showing || this.committingCell) {
		if (!this.stayOpen) {
			// set the committed param.
			this.hide(true);
			if (!this.modal) {
				var mdlDlg = $(document.getElementById("modalOverlay"));
				mdlDlg.removeClass("non-modal-overlay");
				mdlDlg.addClass("modal-overlay");
				mdlDlg.css("right", "");
				mdlDlg.css("top", "");
			}
		} else
			delete this.committingCell;
	} else
		pega.u.d.hideModalWindow();

	util.log('PropertyPanel', 'handleModalHide finish');
};

PropertyPanel.prototype.setReadOnly = function(readOnly) {
	if (this.currentState)
		this.currentState.readOnly = readOnly;
};

PropertyPanel.prototype.updatePosition = function(pos) {
	if (this.userOverrideModalXY) {
		//If the user has moved the properties panel, we should use the user specified coordinates
		pega.u.d.modalDialog.cfg.setProperty("fixedcenter",false);
		pega.u.d.modalDialog.cfg.setProperty("x", this.userOverrideModalXY[0]);
		pega.u.d.modalDialog.cfg.setProperty("y", this.userOverrideModalXY[1]);
	} else {
		//If the user has NOT moved the properties panel, we should position it relative to the shape that it is open for

		/* UNCOMMENT THIS BLOCK IF WE DONT WANT PROPERTIES PANEL TO MOVE WHEN IT IS ALREADY OPEN
		if(this.currentModalXY){
			pega.u.d.modalDialog.moveTo(this.currentModalXY[0], this.currentModalXY[1]);
		} else {
		*/
			if (!pos)
				pos = this.currentState.pos;
			if (pos) {
				pega.u.d.modalDialog.cfg.setProperty("fixedcenter",false);
				pega.u.d.modalDialog.cfg.setProperty("x", pos[0]);
				pega.u.d.modalDialog.cfg.setProperty("y", pos[1]);
			}
		/*}*/
	}
};

PropertyPanel.prototype.saveState = function() {
	if (!this.stateSaved) {
		this.storedState = this.showing ? this.currentState : null;
		this.hide(false, false);
		this.stateSaved = true;
	}
};

PropertyPanel.prototype.restoreState= function() {
	if (this.stateSaved) {
		if (this.storedState) {
			/*BUG-59384 - deanm - Added last param to check readOnly on restore*/
			this.show(this.storedState.cell, this.storedState.actionParam, this.storedState.header, this.storedState.pos, this.viewer.getPropertyPanelReadOnly(this.storedState.cell));
			if (this.currentState)
				this.currentState.committed = this.storedState.committed;
			delete this.storedState;
		}
		this.stateSaved = false;
	}
};
})();