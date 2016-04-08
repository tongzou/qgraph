///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//           Library for manipulating 2D Graphical Objects                   //
//                                                                           //
//                      !!!!!IMPORTANT!!!!!                                  //
//       DO NOT change without contacting the Great Fireworks Team!          //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * Currently, the following js libraries are required: lodash.js, underscore.string.js d3.js.
 *
 */

(function() {

if (typeof gfw !== 'undefined') return;

window.gfw = {
	version: "1.0.0"
};

// Create local references to array methods we'll want to use later.
var array = [];
var slice = array.slice;
var splice = array.splice;

/**
 * Extend d3 library
 */
d3.selection.prototype.moveToFront = function() {
	return this.each(function() { this.parentNode.appendChild(this); });
};

// util variables
var _debugging = [], _debugAll = false;
/**
 * Utility functions
 */
var util = gfw.util = {
	// Helper function to correctly set up the prototype chain, for subclasses.
	// Similar to `goog.inherits`, but uses a hash of prototype properties and
	// class properties to be extended.
	extend: function(child, parent, protoProps, staticProps) {
		// Add static properties to the constructor function, if supplied.
		_.extend(child, parent, staticProps);

		// Set the prototype chain to inherit from `parent`, without calling
		// `parent`'s constructor function.
		var Surrogate = function(){ this.constructor = child; };
		Surrogate.prototype = parent.prototype;
		child.prototype = new Surrogate;

		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		if (protoProps) _.extend(child.prototype, protoProps);

		// Set a convenience property in case the parent's prototype is needed later.
		child.superclass = parent.prototype;

		return child;
	},

	/**
	 * Gets the JS class constructor.
	 * @param {Object} jsClass
	 * @param {Object} defaultClass
	 */
	getConstructor: function(jsClass, defaultClass) {
		if (!jsClass)
			jsClass = defaultClass;

		if (_.isString(jsClass))
			jsClass = eval(jsClass);
		return jsClass;
	},

	debug: function(moduleName) {
		if (moduleName) {
			_debugging.push(moduleName);
		} else {
			_debugAll = true;
		}
	},

	log: function(name, message) {
		if (!window.console) { return; }
		var debug = _debugAll;
		if (!_debugAll) {
			debug = false;
			for (var i = 0; i<_debugging.length; i++) {
				if (_debugging[i]==name) debug = true;
			}
		}
		if (!debug) { return; }
		while (name.length<10) { name=name+' '; }
		name = name.substring(0, 10)+" - ";
		console.info(name, message);
	},

	getRelativeGeometry: function(config) {
		var h = config.h, v = config.v, x = config.x, y = config.y;
		var geometry = {width: config.width, height: config.height, relative: true};
		if (v == -1) {// TopAbove
			y -= 0.5 * geometry.height;
			v = 0;
		} else if (v == -2) {// TopBelow
			y += 0.5 * geometry.height;
			v = 0;
		} else if (v == -3) {// BottomAbove
			y -= 0.5 * geometry.height;
			v = 1;
		} else if (v == -4) {// BottomBelow
			y += 0.5 * geometry.height;
			v = 1;
		}

		if (h == -1) {// LeftOuter
			x -= 0.5 * geometry.width;
			h = 0;
		} else if (h == -2) {// LeftInner
			x += 0.5 * geometry.width;
			h = 0;
		} else if (h == -3) {// RightInner
			x -= 0.5 * geometry.width;
			h = 1;
		} else if (h == -4) {// RightOuter
			x += 0.5 * geometry.width;
			h = 1;
		}
		geometry.x = h;
		geometry.y = v;
		geometry.offsetX = x;
		geometry.offsetY = y;
		return geometry;
	},

	/**
	 * Get the relative position of sub shapes within a parent share.
	 */
	getRelativePosition: function(bounds, geometry) {
		var x = bounds.width * (geometry.x - 0.5);
		var y = bounds.height * (geometry.y - 0.5);
		x += geometry.offsetX;
		y += geometry.offsetY;
		return [x, y];
	},

	/**
	 * Get the position relative to the graph that's unscaled, i.e., absolute position without considering translation and scale.
	 * @param graph the graph object
	 * @param o can be either a Point or a Rectangle or a Point array.
	 */
	unscale: function(graph, o) {
		var scale = graph.scale();
		var t = graph.translate();
		if (o instanceof Rectangle)
			return new Rectangle(o.x*scale+t[0], o.y*scale+t[1], o.width*scale, o.height*scale);
		else if (o instanceof Point)
			return new Point(o.x*scale+t[0], o.y*scale+t[1]);
		else
			return [o[0]*scale+t[0], o[1]*scale+t[1]];
	},

	/**
	 * Get the position relative to the graph that's scaled, i.e., relative position considering translation and scale.
	 * @param graph the graph object
	 * @param o can be either a Point or a Rectangle or a Point array.
	 */
	scale: function(graph, o) {
		var scale = graph.scale();
		var t = graph.translate();
		if (o instanceof Rectangle)
			return new Rectangle((o.x-t[0])/scale, (o.y-t[1])/scale, o.width/scale, o.height/scale);
		else if (o instanceof Point)
			return new Point((o.x-t[0])/scale, (o.y-t[1])/scale);
		else
			return [(o[0]-t[0])/scale, (o[1]-t[1])/scale];
	},

	/**
	 * Convenience method.
	 */
	getObjProperty: function(obj, prop) {
		if (!obj)
			return null;
		if (_.has(obj, prop))
			return obj[prop];
		if (obj.getProperty && _.isFunction(obj.getProperty))
			return obj.getProperty(prop);
		return null;
	}
};

/**
 * dom Utility functions
 */
var dom = gfw.dom = {
	isIE: (function() {
		var isIE = false, version = null;
		if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
    		isIE = true;
    		version = 11;
		} else {
			var myNav = navigator.userAgent.toLowerCase();
			isIE = myNav.indexOf('msie') != -1;
			if (isIE)
				version = parseInt(myNav.split('msie')[1]);
		}

		return function() {
			return isIE ? version : false;
		};
	})(),

	isFireFox : (function(){
		// InstallTrigger: Firefox's API to install add-ons
		return typeof InstallTrigger !== 'undefined';
	})(),

	createElement: function (tag, attribs, styles, html) {
		var e = document.createElement(tag);
		dom.setElement(e, attribs, styles);
		if (html) {
			e.innerHTML = html;
		}
		return e;
	},

	setElement: function (e, attribs, styles) {
		if (!e) {
			return;
		}

		e = d3.select(e);
		if (attribs) {
			e.attr(attribs);
			/*_.each(attribs, function(value, key) {
				e.attr(key, value);
			});*/
		}
		if (styles)
			e.style(styles);
	},

	testElement: function(node, method) {
		return node && node.nodeType == 1 && ( !method || method(node) );
	},

	getAncestorBy: function(node, method) {
		while (node = node.parentNode)
			if (dom.testElement(node, method) )
				return node;

		return null;
	},

	getChildren: function(el) {
		return $(el).children();
	},

	getPosition: function(el) {
		var offset = $(el).offset();
		return [offset.left, offset.top];
	},

	getSize: function(el) {
		el = $(el);
		return [el.width(), el.height()];
	},

	resize: function(el, w, h) {
		el = d3.select(el);
		if (w)
			el.style('width', w + "px");
		if (h)
			el.style('height', h + 'px');
	},

	/**
	 * Check whether the key event is from input, textarea or select.
	 * @param Event e
	 */
	eventFromInput: function(e){
		var tagName = e.target.tagName;
		return (tagName == 'INPUT' || tagName == 'TEXTAREA' || tagName == 'SELECT');
	}
};

var Events = gfw.Events = {
	// extracted from Backbone.js

	// Bind an event to a `callback` function. Passing `"all"` will bind
	// the callback to all events fired.
	on : function(name, callback, context) {
		if (!eventsApi(this, 'on', name, [callback, context]) || !callback)
			return this;
		this._events || (this._events = {});
		var events = this._events[name] || (this._events[name] = []);
		events.push({
			callback : callback,
			context : context,
			ctx : context || this
		});
		return this;
	},

	// Bind an event to only be triggered a single time. After the first time
	// the callback is invoked, it will be removed.
	once : function(name, callback, context) {
		if (!eventsApi(this, 'once', name, [callback, context]) || !callback)
			return this;
		var self = this;
		var once = _.once(function() {
			self.off(name, once);
			callback.apply(this, arguments);
		});
		once._callback = callback;
		return this.on(name, once, context);
	},

	// Remove one or many callbacks. If `context` is null, removes all
	// callbacks with that function. If `callback` is null, removes all
	// callbacks for the event. If `name` is null, removes all bound
	// callbacks for all events.
	off : function(name, callback, context) {
		var retain, ev, events, names, i, l, j, k;
		if (!this._events || !eventsApi(this, 'off', name, [callback, context]))
			return this;
		if (!name && !callback && !context) {
			this._events =
			void 0;
			return this;
		}
		names = name ? [name] : _.keys(this._events);
		for ( i = 0, l = names.length; i < l; i++) {
			name = names[i];
			if ( events = this._events[name]) {
				this._events[name] = retain = [];
				if (callback || context) {
					for ( j = 0, k = events.length; j < k; j++) {
						ev = events[j];
						if ((callback && callback !== ev.callback && callback !== ev.callback._callback) || (context && context !== ev.context)) {
							retain.push(ev);
						}
					}
				}
				if (!retain.length)
					delete this._events[name];
			}
		}

		return this;
	},

	// Trigger one or many events, firing all bound callbacks. Callbacks are
	// passed the same arguments as `trigger` is, apart from the event name
	// (unless you're listening on `"all"`, which will cause your callback to
	// receive the true name of the event as the first argument).
	// result false means there is something wrong and the event originator should do something about it.
	trigger : function(name) {
		if (!this._events)
			return true;
		var args = slice.call(arguments, 1);
		if (!eventsApi(this, 'trigger', name, args))
			return true;
		var events = this._events[name];
		var allEvents = this._events.all;
		var result = true;
		if (events)
			result = result && triggerEvents(name, events, args);
		if (allEvents)
			result = result && triggerEvents(name, allEvents, arguments);
		return result;
	},

	// Tell this object to stop listening to either specific events ... or
	// to every object it's currently listening to.
	stopListening : function(obj, name, callback) {
		var listeningTo = this._listeningTo;
		if (!listeningTo)
			return this;
		var remove = !name && !callback;
		if (!callback && typeof name === 'object')
			callback = this;
		if (obj)
			(listeningTo = {})[obj._listenId] = obj;
		for (var id in listeningTo) {
			obj = listeningTo[id];
			obj.off(name, callback, this);
			if (remove || _.isEmpty(obj._events))
				delete this._listeningTo[id];
		}
		return this;
	}
};

// Regular expression used to split event strings.
var eventSplitter = /\s+/;

// Implement fancy features of the Events API such as multiple event
// names `"change blur"` and jQuery-style event maps `{change: action}`
// in terms of the existing API.
var eventsApi = function(obj, action, name, rest) {
	if (!name)
		return true;

	// Handle event maps.
	if ( typeof name === 'object') {
		for (var key in name) {
			obj[action].apply(obj, [key, name[key]].concat(rest));
		}
		return false;
	}

	// Handle space separated event names.
	if (eventSplitter.test(name)) {
		var names = name.split(eventSplitter);
		for (var i = 0, l = names.length; i < l; i++) {
			obj[action].apply(obj, [names[i]].concat(rest));
		}
		return false;
	}

	return true;
};

// A difficult-to-believe, but optimized internal dispatch function for
// triggering events. Tries to keep the usual cases speedy (most internal
// Backbone events have 3 arguments).
var triggerEvents = function(name, events, args) {
	var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2], result = true;
	switch (args.length) {
		case 0:
			while (++i < l)
				result = result && ((ev = events[i]).callback.call(ev.ctx, name) || true);
			return result;
		case 1:
			while (++i < l)
				result = result && ((ev = events[i]).callback.call(ev.ctx, name, a1) || true);
			return result;
		case 2:
			while (++i < l)
				result = result && ((ev = events[i]).callback.call(ev.ctx, name, a1, a2) || true);
			return result;
		case 3:
			while (++i < l)
				result = result && ((ev = events[i]).callback.call(ev.ctx, name, a1, a2, a3) || true);
			return result;
		default:
			while (++i < l)
				result = result && ((ev = events[i]).callback.apply(ev.ctx, [name].concat(args)) || true);
			return result;
	}
};

var listenMethods = {
	listenTo : 'on',
	listenToOnce : 'once'
};

// Inversion-of-control versions of `on` and `once`. Tell *this* object to
// listen to an event in another object ... keeping track of what it's
// listening to.
_.each(listenMethods, function(implementation, method) {
	Events[method] = function(obj, name, callback) {
		var listeningTo = this._listeningTo || (this._listeningTo = {});
		var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
		listeningTo[id] = obj;
		if (!callback && typeof name === 'object')
			callback = this;
		obj[implementation](name, callback, this);
		return this;
	};
});

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                        Configurable Object                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Config = gfw.Config = {
	/**
	 * initialize properties
	 *
	 * @method init
	 */
	init: function(config) {
		this.cfg = {};
		this._initDefaultConfig();
		if (config)
			this.applyConfig(config);
	},

 	_initDefaultConfig: function() {
		var c = this.constructor;
		var cArr = [c];
		while (c) {
			if (c.superclass) {
				c = c.superclass.constructor;
				splice.apply(cArr, [0, 0, c]);
			} else
				c = null;
		}

		for (var i = 0; i < cArr.length; i++) {
			c = cArr[i];
			if (c.DEFAULT_CONFIG)
				_.extend(this.cfg, c.DEFAULT_CONFIG);
		}
	},

	getConfig: function(keys) {
		if (!keys)
			return this.cfg;

		var config = {};
		_.each(keys, function(key) {
			config[key] = this.getProperty(key);
		}, this);
		return config;
	},

	applyConfig: function(config) {
		for (var key in config) {
			this.setProperty(key, config[key]);
		}
	},

	hasProperty: function(key) {
		return _.has(this.cfg, key);
	},

	getProperty: function(key, def) {
		var value = this.cfg[key];
		if (_.isUndefined(value))
			value = def;
		return value;
	},

	/**
	 * Config Property is for extra work to be done when setting the named property
	 */
	configProperty: function(key, value) {},

	setProperty: function(key, value) {
		this.cfg[key] = value;
		this.configProperty(key, value);
	},

	/* Toggle Property is an helper just for boolean properties */
	toggleProperty: function(key) {
		var value = this.getProperty(key, false);

		if (_.isBoolean(value)) {
			value = !value;
			this.setProperty(key, value);
			return true;
		}
		return false;
	},

	removeProperty: function(key) {
		if (!key) {
			// remove everything
			this.cfg = {};
			return;
		}
		if (_.has(this.cfg, key))
			delete this.cfg[key];
	}
};

var TypedConfig = gfw.TypedConfig = {
	/**
	 * The type of this. Type need to support the following methods: getProperty, hasProperty, setProperty and getConfig.
	 * @public
	 */
	type: null,

	hasProperty: function(key) {
		return !(!this.hasOwn(key) && (!this.type || !this.type.hasProperty(key)));
	},

	hasOwn: function(key) {
		return (this.cfg && _.has(this.cfg, key));
	},

	getProperty: function(key, def) {
		var value = !this.cfg ? undefined : this.cfg[key];
		if (_.isUndefined(value) && key != "type") {
			if (this.type)
				return this.type.getProperty(key, def);
		}
		return value;
	},

	setProperty: function(key, value) {
		if (key == "type") {
			if (_.isString(value)) {
				this.type = this.getTypeFromString(value);
				if (!this.type)
					util.log('gfw', "Type " + value + " not found", "error");
			} else
				this.type = value;
		} else
			this.cfg[key] = value;
	},

	getTypeFromString: function(typeStr) { return null; }
};
_.defaults(TypedConfig, Config);

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                    Type                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * The type of the node or edge
 * @param {Object} name
 * @param {Object} config
 */
var Type = gfw.Type = function(name, config) {
	this.name = name;
	this.init(config);
};
_.extend(Type.prototype, TypedConfig);

Type.prototype.equals = function(o) {
	if (!o) return false;
	if (_.isString(o))
		return this.name == o;
	return this.name == o.name;
};

Type.prototype.toString = function() {
	return this.name;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                  Change                                   //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * Represents the change that happened to a graph during update.
 */
var Changes = gfw.Changes = function(graph) {
	this.graph = graph;
	this.clear();
};

Changes.prototype.add = function(cells) {
	if(_.isUndefined(cells)) {
		return this.adds;
	}

	if(!_.isArray(cells)) {
		cells = [cells];
	}

	this.adds = this.adds.concat(cells);
};


Changes.prototype.update = function(cells) {
	if(_.isUndefined(cells)) {
		return this.updates;
	}

	if(!_.isArray(cells)) {
		cells = [cells];
	}

	this.updates = this.updates.concat(cells);
};

Changes.prototype.remove = function(cells) {
	if(_.isUndefined(cells)) {
		return this.removes;
	}

	if(!_.isArray(cells)) {
		cells = [cells];
	}

	this.removes = this.removes.concat(cells);
};

Changes.prototype.clear = function() {
	var clean = function(el) {
		if(!el) {return;}
		if(_.isFunction(el.destroy)) {
			el.destroy();
		}
	};

	if(! this.adds) {
		this.adds = [];
	} else if (0 != this.adds.length) {
		_.each(this.adds, clean)
	}

	if(! this.updates) {
		this.updates = [];
	} else if (0 != this.updates.length) {
		_.each(this.updates, clean)
	}

	if(! this.removes) {
		this.removes = [];
	} else if (0 != this.removes.length) {
		_.each(this.removes, clean)
	}
};

Changes.prototype.destroy = function() {
	this.clear();
	delete this.graph;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                    A Vertex/Edge bidirectional graph                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
var Graph = gfw.Graph = function(container, config) {
	if (!config) config = {};
	if (config.hasOwnProperty("id")) {
		this.id = config.id;
		delete config.id;
	}

	if (!this.id || s.trim(this.id) == '')
		this.id = _.uniqueId("G_");

	// Create the canvas.
	this.viewBase = d3.select(container).append('div').datum(this).attr({"id":this.id, "tabindex":0}).style({overflow: "hidden", width: "100%", height: "100%", position: 'relative'}).node();

	this.vertices = {};
	this.edges = {};

	this.vertexTypes = {};
	this.edgeTypes = {};
	this.modifierTypes = {};

	this.selection = null;
	this.destroyed = false;

	this.breadCrumb = [];
	// This is to keep track how many times the disable() function is called.
	//this.disableCount = 0;

	// keep track of the updatelevel
	this.updateLevel = 0;

	this.createDefaultVertexType();
	this.createDefaultEdgeType();
	this.createDefaultModifierType();

	if (config.vertexTypes)
		this.buildTypes(config.vertexTypes, this.getVertexType, this.addVertexType);
	if (config.edgeTypes)
		this.buildTypes(config.edgeTypes, this.getEdgeType, this.addEdgeType);
	delete config.vertexTypes;
	delete config.edgeTypes;

	this.initialize(config);
};
// Graph can trigger custom events.
_.extend(Graph.prototype, Events, Config);

Graph.ALLOW_INTERACTION_EVENTS = 1;
Graph.ALLOW_INTERACTIONS = 2;

/**
 * Constant representing the Graph's configuration properties
 * @property DEFAULT_CONFIG
 * @private
 * @final
 * @type Object
 */
Graph.DEFAULT_CONFIG = {
	defaultClickMode: "pan",
	hideOutline: false,
	allowDanglingEdges: true,
	multigraph: false,
	singleSelect: false,
	draggable: true,
	mode: Graph.ALLOW_INTERACTION_EVENTS | Graph.ALLOW_INTERACTIONS,
	width: null,
	height: null,
	gridEnabled: false,
	gridSize: 30,
	maxZoom: 4.0,
	minZoom: 0.1,
	zoomFactor: 1.2,
	maskOpacity: 0.5
};

Graph.EVENT_TYPES = {
	BEGIN_UPDATE: "beginUpdate",
	END_UPDATE: "endUpdate",
	VERTEX_CREATED: "vertexCreated",
	VERTEX_REMOVED: "vertexRemoved",
	EDGE_CREATED: "edgeCreated",
	EDGE_REMOVED: "edgeRemoved",
	EDGE_CHANGED: "edgeChanged",
	CHANGE: "change",
	CELL_b4PROPERTY_CHANGE: 'cellb4PropertyChange',
	CELL_PROPERTY_CHANGE: 'celPropertyChange',
	CELL_MOVE: "cellMove",
	REFRESH: "refresh",
	b4BREAD_CRUMB_CHANGE: "b4BreadCrumbChange",
	BREAD_CRUMB_CHANGE: "breadCrumbChange",
	SELECTION_CHANGE: "selectionChange",
	SHOW: "show",
	HIDE: "hide",
	MODE_CHANGE: "modeChange",
	LAYOUT_COMPLETE: "layoutComplete",
	RESET: "reset",
	DESTROY: "destroy"
};

Graph.prototype.setProperty = function(key, value) {
	if (key == "mode") {
		if (value & Graph.ALLOW_INTERACTIONS) {
			if (!(value & Graph.ALLOW_INTERACTION_EVENTS)) {
				// We can't have a mode where interaction is allowed but interaction event is not.
				value = value | Graph.ALLOW_INTERACTION_EVENTS;
			}
		}
		this.cfg[key] = value;
		this.trigger(Graph.EVENT_TYPES.MODE_CHANGE);
		return;
	}
	this.cfg[key] = value;
	this.configProperty(key, value);
};

Graph.prototype.configProperty = function(key, value) {
	if (key == "defaultClickMode") {
		this.viewBase.style.cursor = Cursor.getDefaultCursor(this);
	}
};

Graph.prototype.initialize = function(config) {
	this.init(config);
	if (this.getProperty("mode") == 0)
		d3.select(this.viewBase).style("background-color", "#e7e7e7");
	this.initializeLayout(config.layout);
	this.initializeRenderer(config.renderer);
	this.initializeEventDispatcher();
	this.initializeBehaviorHandlers();
};

Graph.prototype.initializeLayout = function(config) {
	var layoutClass = util.getConstructor(config.jsClass, Layout);
	this.layout = new layoutClass(this, config);
};

Graph.prototype.initializeRenderer = function(config) {
	var rendererClass = util.getConstructor(config.jsClass, SVGRenderer);
	this.renderer = new rendererClass(this, this.viewBase, config);
};

Graph.prototype.initializeEventDispatcher = function() {
	this.eventDispatcher = new EventDispatcher(this);
};

Graph.prototype.initializeBehaviorHandlers = function() {
	this.selectionHandler = new SelectionHandler(this);
	this.graphHandler = new GraphHandler(this);
	this.vertexHandler = new VertexHandler(this);
    this.edgeHandler = new EdgeHandler(this);
};

/**
 * Function: beginUpdate
 *
 * Increments the <updateLevel> by one.
 * The event notification is queued until <updateLevel> reaches 0 by use of <endUpdate>.
 */
Graph.prototype.beginUpdate = function() {
	this.updateLevel++;
	if (!this.changes)
		this.changes = new Changes(this);
	this.trigger(Graph.EVENT_TYPES.BEGIN_UPDATE);
};

Graph.prototype.isUpdating = function() {
	return this.updateLevel != 0;
};

/**
 * Function: endUpdate
 *
 * Decrements the <updateLevel> by one.
 */
Graph.prototype.endUpdate = function() {
	this.updateLevel--;

	if (this.updateLevel == 0) {
		this.trigger(Graph.EVENT_TYPES.END_UPDATE, this.changes);
		delete this.changes;
	}
};

/**
 * Make this graph visible.
 */
Graph.prototype.show = function() {
	this.invalidateLayout();
	this.trigger(Graph.EVENT_TYPES.SHOW);
	if (!this.getProperty("hideOutline")) {
		_.defer(_.bind(function() {
			this.outline = new Outline(this, this.viewBase);
		}, this));
	}
};

Graph.prototype.hide = function() {
	this.trigger(Graph.EVENT_TYPES.HIDE);
};

Graph.prototype.disable = function() {
	/*if (!this.overlay) {
		this.overlay = dom.createElement('div', {id: "overlay"}, {position:"absolute", top:0, left:0, zIndex: 499});
		Dom.setStyle(this.overlay, 'opacity', this.getProperty("maskOpacity"));
	}
	var bounds = Dom.getRegion(this.parent.view);
	this.overlay.style.width = bounds.right - bounds.left;
	this.overlay.style.height = bounds.bottom - bounds.top;
	this.parent.view.appendChild(this.overlay);
	Dom.setXY(this.overlay, Dom.getXY(this.parent.view));
	if (this.selectedNode)
		this.selectedNode.updateKeyListeners(false);*/
	this.disableCount++;
};

Graph.prototype.enable = function(force) {
	if (this.disableCount == 0) return;
	if (force)
		this.disableCount = 0;
	else
		this.disableCount--;

	if (this.disableCount == 0) {
		d3.select(this.overlay).remove();
		//if (this.selectedNode)
		//	this.selectedNode.updateKeyListeners();
	}
};

Graph.prototype.isLocked = function() {
	return !(this.getProperty("mode") & Graph.ALLOW_INTERACTIONS);
};

Graph.prototype.toggleClickMode = function() {
	var prop = "defaultClickMode"
	var value = this.getProperty(prop);

	if(value == "select") {
		value = "pan";
	} else {
		value = "select"
	}

	this.setProperty(prop, value)
};

Graph.prototype.toggleGrid = function() {
	if(! this.getProperty("mode") & Graph.ALLOW_INTERACTION_EVENTS) { return false; }

	if(this.toggleProperty("gridEnabled")) {
		if(this.renderer) {
			this.renderer.refreshGrid();
		}

		return true;
	}

	return false;
};

Graph.prototype.toggleGuide = function() {
	if(! this.getProperty("mode") & Graph.ALLOW_INTERACTION_EVENTS) { return false; }
	return this.toggleProperty("guidesEnabled");
};

/**
 * Redo the layout if there is one.
 */
Graph.prototype.invalidateLayout = function() {
	if (this.layout) {
		var viewport = this.viewport();
		this.layout.layout(this.getCurrentRoot(), viewport.width, viewport.height);
	}
};

/**
 * Gets either a node type or an edge type.
 * @param {Object} name
 */
Graph.prototype.getType = function(name) {
	var type = this.getVertexType(name);
	if (!type)
		type = this.getEdgeType(name);
	return type;
};

/**
 * Return a node type based on the name
 */
Graph.prototype.getVertexType = function(name) {
	return this.vertexTypes[name];
};

Graph.prototype.getEdgeType = function(name) {
	return this.edgeTypes[name];
};

Graph.prototype.getModifierType = function(name) {
	return this.modifierTypes[name];
};

Graph.prototype.createDefaultVertexType = function() {
	this.addVertexType(new Type('default',
	{
		role: 'vertex',
		draggable: true,
		selectable: true,
		connectableIn: false,
		connectableOut: false,
		visible: true,
		x: 0,
		y: 0,
		width: 0,
		height: 0,
		container: false
	}));
};

Graph.prototype.createDefaultEdgeType = function() {
	this.addEdgeType(new Type('default', {
		role: 'edge',
		selectable: true,
		visible: true
	}));
};

Graph.prototype.createDefaultModifierType = function() {
	this.addModifierType(new Type('default', {
		role: 'modifier'
	}));
};

Graph.prototype.addVertexType = function(type) {
	this.vertexTypes[type.name] = type;
};

Graph.prototype.addEdgeType = function(type) {
	this.edgeTypes[type.name] = type;
};

Graph.prototype.addModifierType = function(type) {
	this.modifierTypes[type.name] = type;
};

Graph.prototype.getDefaultVertexType = function() {
	return this.getVertexType('default');
};

Graph.prototype.getDefaultEdgeType = function() {
	return this.getEdgeType('default');
};

Graph.prototype.getDefaultModifierType = function() {
	return this.getModifierType('default');
};

Graph.prototype.buildTypes = function(types, getType, addType) {
	util.log('Graph', 'Graph.buildTypes');
    _.each(types, function(type) {
        if (type.hasOwnProperty("type"))
            type.type = getType.call(this, type.type);
        else if (type.name != "default")
            type.type = getType.call(this, 'default');

        var nt = getType.call(this, type.name);
        if (nt)
            nt.applyConfig(type);
        else
            addType.call(this, nt = new Type(type.name, type));

        if (type.jsClass)
            nt.setProperty("jsClass", util.getConstructor(type.jsClass));
    }, this);
	util.log('Graph', 'Graph.buildTypes end');
};

/**
 * Gets the JS class constructor.
 * @param {Object} config
 * @param {Object} defaultClass
 */
Graph.prototype.getJSClass = function(config, defaultClass) {
	var jsClass = null;
	if (config && config.type) {
		// See if we can get the js class from config.
		var type = this.getType(config.type);
		if (type)
			jsClass = type.getProperty("jsClass");
	}

	return util.getConstructor(jsClass, defaultClass);
};

Graph.prototype.createRoot = function(config) {
	if (this.root)
		this.reset();

	if (!config)
		config = {};

	if (!config.id)
		config.id = "_root";

	// Make sure the root is a container
	config.container = true;
	vertexClass = this.getJSClass(config, Vertex);
	this.root = new vertexClass(this, config);
	this.vertices[this.root.id] = this.root;

	if (!this.isUpdating()) {
		this.trigger(Graph.EVENT_TYPES.VERTEX_CREATED, this.root);
	} else {
		this.changes.add(this.root);
	}

	this.replaceBreadCrumb([], false);
	return this.root;
};

/**
 * Create a new Node
 */
Graph.prototype.createVertex = function(parent, config, pos) {
	if (!this.root)
		this.createRoot();

	parent = parent || this.getCurrentRoot();

	var vertexClass = this.getJSClass(config, Vertex);
	var vertex = new vertexClass(this, config);

	this.addChild(parent, vertex, pos);
	this.vertices[vertex.id] = vertex;

	if (!this.isUpdating()) {
		this.trigger(Graph.EVENT_TYPES.VERTEX_CREATED, vertex);
	} else {
		this.changes.add(vertex);
	}

	return vertex;
};

/**
 * Attach a new edge between n1 and n2.
 *
 * @param v1 the first node (source node)
 * @param v2 the second node (target node)
 * @param config
 * @param parent
 */
Graph.prototype.createEdge = function(v1, v2, config, parent) {
	parent = parent || this.getCurrentRoot();

	var edgeClass = this.getJSClass(config, Edge);
	var edge = new edgeClass(v1, v2, this, config);

	this.addChild(parent, edge);
	this.edges[edge.id] = edge;

	if (!this.isUpdating()) {
		this.trigger(Graph.EVENT_TYPES.EDGE_CREATED, edge);
	} else {
		this.changes.add(edge);
	}

	return edge;
};

Graph.prototype.addChild = function(parent, child) {
	if (!parent.children)
		parent.children = [];

	if (child.parent != parent) {
		parent.children.push(child);

		if (child.parent && child.parent.children)
			child.parent.children = _.without(child.parent.children, child);
	}
	child.parent = parent;
};

Graph.prototype.removeCells = function(cells) {
	var vertices = [];
	var edges = [];
	if (cells && _.isArray(cells)) {
		_.each(cells, function(cell) {
			if (cell instanceof Vertex)
				vertices.push(cell);
			else
				edges.push(cell);
		}, this);
	}
	if (edges.length > 0)
		this.removeEdges(edges);
	if (vertices.length > 0)
		this.removeVertices(vertices);
};

Graph.prototype.removeVertices = function(vertexes) {
	if (!_.isArray(vertexes))
		vertexes = [vertexes];

	// Unlink vertexes from Graph

	_.each(vertexes, function(vertex) {
		if (vertex.parent && vertex.parent.children)
			vertex.parent.children = _.without(vertex.parent.children, vertex);
		//vertex.destroy();
		delete this.vertices[vertex.id];
		if (vertex == this.root)
			delete this.root;
	}, this);

	if (!this.isUpdating()) {
		this.setSelection(null);
		this.trigger(Graph.EVENT_TYPES.VERTEX_REMOVED, vertexes);
	} else {
		this.changes.remove(vertexes);
	}
};

Graph.prototype.removeEdges = function(edges) {
	if (!_.isArray(edges))
		edges = [edges];

	// Unlink edges from Graph
	_.each(edges, function(edge) {
		if (edge.parent && edge.parent.children)
			edge.parent.children = _.without(edge.parent.children, edge);
		//edge.destroy(); TODO: fix bug with edges
		delete this.edges[edge.id];
	}, this);

	if (!this.isUpdating()) {
		this.setSelection(null);
		this.trigger(Graph.EVENT_TYPES.EDGE_REMOVED, edges);
	} else {
		this.changes.remove(edges);
	}
};

/**
 * Change the edge's source to the given node
 */
Graph.prototype.setEdgeSource = function(edge, vertex, pos) {
	edge.setSource(vertex, pos);
	if (!this.isUpdating())
		this.trigger(Graph.EVENT_TYPES.EDGE_CHANGED, edge);
};

Graph.prototype.setEdgeTarget = function(edge, vertex, pos) {
	edge.setTarget(vertex, pos);
	if (!this.isUpdating())
		this.trigger(Graph.EVENT_TYPES.EDGE_CHANGED, edge);
};

Graph.prototype.isValidConnection = function(v1, v2) {
	if ((!v1 || !v2) && !this.getProperty('allowDanglingEdges'))
		return false;
	if (!this.getProperty('multigraph') && v1 && v2 && this.isConnected(v1, v2))
		return false;
	if( v1 == v2 ) return false;

	var validSource = !v1 || v1.getProperty('connectableOut');
	var validTarget = !v2 || v2.getProperty('connectableIn');
	return validSource && validTarget;
};

Graph.prototype.addBreadCrumb = function(vertex, reLayout) {
	if (_.isUndefined(reLayout))
		reLayout = true;
	this.trigger(Graph.EVENT_TYPES.b4BREAD_CRUMB_CHANGE, reLayout);
	//if (Util.indexOf(this.breadCrumb, node) < 0)
		this.breadCrumb.push(vertex);
	if (reLayout)
		this.invalidateLayout();
	this.trigger(Graph.EVENT_TYPES.BREAD_CRUMB_CHANGE, reLayout);
};

Graph.prototype.replaceBreadCrumb = function(arr, reLayout) {
	if (_.isUndefined(reLayout))
		reLayout = true;
	this.trigger(Graph.EVENT_TYPES.b4BREAD_CRUMB_CHANGE, reLayout);
	this.breadCrumb = arr;
	if (reLayout)
		this.invalidateLayout();
	this.trigger(Graph.EVENT_TYPES.BREAD_CRUMB_CHANGE, reLayout);
};

Graph.prototype.goBackInBreadCrumb = function(i) {
	this.trigger(Graph.EVENT_TYPES.b4BREAD_CRUMB_CHANGE, true);
	if (i > this.breadCrumb.length - 2) return;
	if (i < 0)
		this.breadCrumb = [];
	else
		this.breadCrumb.splice(i+1, this.breadCrumb.length-i-1);
	this.invalidateLayout();
	this.trigger(Graph.EVENT_TYPES.BREAD_CRUMB_CHANGE, true);
};

Graph.prototype.useRootAsCrumb = true;

Graph.prototype.getBreadCrumbs = function() {
	if (this.useRootAsCrumb && (this.breadCrumb.length == 0 || this.breadCrumb[0] != this.root))
		this.breadCrumb.splice(0, 0, this.root);
	return this.breadCrumb;
};

Graph.prototype.getCurrentRoot = function() {
	if (!this.root) return null;
	if (this.breadCrumb && this.breadCrumb.length > 0)
		return this.breadCrumb[this.breadCrumb.length - 1];
	return this.root;
};

Graph.prototype.saveBreadCrumb = function() {
	this.savedCrumb = [];
	if (this.breadCrumb.length > 0) {
		var parent = this.breadCrumb[this.breadCrumb.length-1];
		var index;
		while (parent != this.root) {
			index = _.indexOf(parent.parent.children, parent);
			this.savedCrumb.splice(0, 0, index);
			parent = parent.parent;
		}
	}
	this.breadCrumb = [];
};

Graph.prototype.restoreBreadCrumb = function() {
	var crumb = this.useRootAsCrumb ? [this.root] : [];
	var parent = this.root;
	var index, child;
	for (var i = 0; i < this.savedCrumb.length; i++) {
		index = this.savedCrumb[i];
		if (parent.children.length > index) {
			child = parent.children[index];
			crumb.push(child);
			parent = child;
		} else
			break;
	}
	this.replaceBreadCrumb(crumb, false);
	delete this.savedCrumb;
};

Graph.prototype.isConnected = function(v1, v2, direction) {
	if (!direction) {
		var r = this.isConnected(v1, v2, 'source');
		if (r) return r;
		return this.isConnected(v1, v2, 'target');
	}
	if (direction == 'source') {
		return !_.isUndefined(_.find(v1.inEdges, function(edge) {
			return edge.source == v2;
		}));
	} else {
		return !_.isUndefined(_.find(v1.outEdges, function(edge) {
			return edge.target == v2;
		}));
	}
};

/**
 * Find Nodes by property
 */
Graph.prototype.findVertices = function(name, value, ancestor) {
	return _.filter(this.vertices, function(vertex, id) {
		if (ancestor && !ancestor.isAncestor(vertex)) return false; // should we define the ancestor funciton on graph ?
		if (name == 'id')
			return value == id;
		else
			return vertex.getProperty(name) == value;
	}, this);
};

Graph.prototype.findEdges = function(name, value) {
	return _.filter(this.edges, function(edge, id) {
		if (name == 'id')
			return value == id;
		else
			return edge.getProperty(name) == value;
	}, this);
};

Graph.prototype.isSingleSelect = function() {
	return this.getProperty("singleSelect");
};

Graph.prototype.setSelection = function(cells, toggle) {
	if (!(this.getProperty("mode") & Graph.ALLOW_INTERACTION_EVENTS)) return;
	if (_.isUndefined(toggle) || this.isSingleSelect()) toggle = false;

	var fireEvent = true; // Only fire event if something changed.

	var unselected = toggle ? null : this.selection;
	if (!cells) {
		if (!this.selection) fireEvent = false;
		this.selection = null;
	} else {
		if (!_.isArray(cells))
			cells = [cells];

		if (this.isSingleSelect())
			cells = [cells[0]];

		cells = _.filter(cells, function(cell) { return cell.getProperty("selectable"); });

		// TODO: Add distinction between CTRL & SHIFT. Check old implementation
		if (toggle) {
			unselected = _.intersection(this.selection, cells);
			this.selection = _.xor(this.selection, cells);
		} else {
			unselected = _.difference(unselected, cells);
			if (this.selection && unselected.length == 0 && this.selection.length == cells.length)
				fireEvent = false;
			this.selection = cells;
		}
	}

	if (fireEvent) {
		delete this._attachedEdges;
		var v = this.selectedVertices = [];
		var e = this.selectedEdges = [];
		if (!_.isNull(this.selection)) {
			_.each(this.selection, function(cell) {
				if (cell instanceof Vertex)
					v.push(cell);
				else
					e.push(cell);
			});
			this.selectedVertices = v;
			this.selectedEdges = e;
		}
		this.trigger(Graph.EVENT_TYPES.SELECTION_CHANGE, unselected, this.selection);
	}
};

Graph.prototype.isSelected = function(cell) {
	if (this.selection == null) return false;
	return _.includes(this.selection, cell);
};

Graph.prototype.getSelection = function() { return this.selection; };

/**
 * Returns the extended selection, which includes the attached edges.
 */
Graph.prototype.getAttachedEdges = function() {
	if (!this._attachedEdges) {
		if (!this.selection) return this._attachedEdges = [];
		var arr = [].concat(this.selectedEdges);
		_.each(this.selectedVertices, function(cell) {
			if (cell instanceof Vertex) {
				arr = arr.concat(cell.inEdges).concat(cell.outEdges);
			}
		});
		this._attachedEdges = _.uniq(arr);
	}
	return this._attachedEdges;
};

Graph.prototype.moveCell = function(vertex, x, y) {
	vertex.move(x, y);
	if (!this.isUpdating())
		this.trigger(Graph.EVENT_TYPES.CELL_MOVE, vertex);
};

Graph.prototype.moveCells = function(cells, pos) {
	_.each(cells, function(cell, i) {
		cell.move(pos[i][0], pos[i][1]);
	})
	if (!this.isUpdating())
		this.trigger(Graph.EVENT_TYPES.CELL_MOVE, cells);
};

Graph.prototype.setCellProperty = function(cell, name, value) {
	var oldValue = cell.getProperty(name);
	if (value == oldValue) return;

	var result = this.trigger(Graph.EVENT_TYPES.CELL_b4PROPERTY_CHANGE, cell, name, oldValue, value);
	if (result)
		cell.setProperty(name, value);

	switch (name) {
		case 'label':
			delete cell.labelNode;
			break;
		case 'indicators':
			delete cell.modifiers;
			break;
	}

	if (!this.isUpdating())
		this.trigger(Graph.EVENT_TYPES.CELL_PROPERTY_CHANGE, cell, name);
};

Graph.prototype.viewport = function(scaled, viewport) {
	if (_.isUndefined(scaled) || _.isNull(scaled)) scaled = false;
	if (!viewport) {
		var vp = new Rectangle(0, 0, this.viewBase.offsetWidth, this.viewBase.offsetHeight);
		if (scaled)
			return util.scale(this, vp);
		return vp;
	}
	if (!scaled) viewport = util.scale(viewport);
	var w = this.viewBase.offsetWidth;
	var scale = w / viewport.width;
	this.transform(-viewport.x*scale, -viewport.y*scale, scale);
};

Graph.prototype.getBounds = function() {
	return this.renderer.getBounds();
};

Graph.prototype.translate = function(t) {
	if (!arguments.length) {
		var root = this.getCurrentRoot();
		if (!root)
			return [0, 0];
		return [root.getProperty('x'), root.getProperty('y')];
	}
	this.transform(t[0], t[1]);
};

Graph.prototype.scale = function(k) {
	if (!arguments.length) {
		var root = this.getCurrentRoot();
		if (!root) return 1.0;

		return root.getProperty('scale') || 1.0;
	}

	switch (k) {
		case "in":
			k = this.scale() * this.getProperty("zoomFactor");
			break;
		case "out":
			k = this.scale() / this.getProperty("zoomFactor");
			break;
		case "actual":
			k = 1.0;
			break;
		case "fit":
			var gridSize = this.getProperty("gridSize") * 2;

			var gBounds = this.getBounds();
			var vBounds = this.viewport();

			vBounds.width -= gridSize;
			vBounds.height -= gridSize;

			/* Do not zoom more than actual if graph already fits into the bounds */
			k = Math.min((vBounds.width / gBounds.width), (vBounds.height /gBounds.height), 1.0);

			//TODO: Add centering code here or trigger an event for that
			break;
		default:
			if (_.isString(k)) k = parseFloat(k);
			break;
	}
	this.transform(null, null, k);
};

Graph.prototype.transform = function(x, y, scale) {
	var root = this.getCurrentRoot();
	if (!root) return;

	if (!_.isNull(x) && !_.isNull(y))
		root.move(x, y);
	if (scale) {
		scale = Math.max(this.getProperty("minZoom"), Math.min(this.getProperty("maxZoom"), scale));
		root.setProperty('scale', scale);
		// sync the scale between the zoom behavior and the graph
		var zoom = this.eventDispatcher.zoom;
		if (zoom.scale() != scale)
			zoom.scale(scale);
	}

	this.trigger(Graph.EVENT_TYPES.REFRESH);
};

Graph.prototype.resize = function(w, h) {
	window.console.log("Called from sizer: " +  arguments);

	dom.resize(this.viewBase, w, h);
  	this.renderer.refreshGrid();
};

/**
 * Save the current state of the graph
 */
Graph.prototype.saveState = function(states) {
	states = states || [];
	var state = {name: 'transformation', translate: this.translate(), scale: this.scale()};
	states.push(state);
	return states;
};

/**
 * Restore the state for the graph
 */
Graph.prototype.restoreState = function(states) {
	_.each(states, function(state) {
		if (state.name == "transformation") {
			this.transform(state.translate[0], state.translate[1], state.scale);
		}
	}, this);
};

Graph.prototype.canEdit = function() {
	var currentRoot = this.getCurrentRoot();
	if (currentRoot && currentRoot != this.root)
		return !currentRoot.isLocked();

	return this.getProperty("mode") & Graph.ALLOW_INTERACTIONS;
};

Graph.prototype.canSelect = function() {
	return this.getProperty("mode") & Graph.ALLOW_INTERACTION_EVENTS;
};

/**
 * Cleans all the nodes and edges of this graph.
 */
Graph.prototype.reset = function() {
	this.setSelection(null);
	if (this.layout)
		this.layout.reset();

	delete this.root;
	this.vertices = {};
	this.edges = {};

	this.breadCrumb = [];
	this.savedCrumb = [];
	this.trigger(Graph.EVENT_TYPES.RESET);
};

/**
 * destroy the entire graph.
 */
Graph.prototype.destroy = function() {
	this.trigger(Graph.EVENT_TYPES.DESTROY);
	this.setSelection(null);

	this.off();
	this.removeProperty();

	delete this.root;
	delete this.vertices;
	delete this.edges;
	delete this.breadCrumb;
	delete this.savedCrumb;
	delete this.viewBase;
	delete this.vertexTypes;
	delete this.edgeTypes;
	delete this.modifierTypes;

	if (this.layout) {
		this.layout.destroy();
		delete this.layout;
	}
	if (this.graphHandler) {
		this.graphHandler.destroy();
		delete this.graphHandler;
	}
	if (this.selectionHandler) {
		this.selectionHandler.destroy();
		delete this.selectionHandler;
	}
	if (this.vertexHandler) {
		this.vertexHandler.destroy();
		delete this.vertexHandler;
	}
    if (this.edgeHandler) {
        this.edgeHandler.destroy();
        delete this.edgeHandler;
    }
	if (this.outline) {
		this.outline.destroy();
		delete this.outline;
	}
	if (this.eventDispatcher) {
		this.eventDispatcher.destroy();
		delete this.eventDispatcher;
	}
	if (this.renderer) {
		this.renderer.destroy();
		delete this.renderer;
	}
	this.destroyed = true;
};

Graph.prototype.toString = function() {
	return 'Graph:{id:' + this.id + '}';
};

Graph.prototype.getSIDHash = function() {
	if (!this.sidHash)
		this.sidHash = new SID(this);
	return this.sidHash;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                 The Cell is either a Vertex of an edge                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Cell = gfw.Cell = function(graph, config) {
	this.graph = graph;
	if (!config) config = {};
	if (config.id) {
		this.id = config.id;
		delete config.id;
	}
	var modifiers = config.indicators;
	delete config.indicators;
	this.init(config);
	this.createModifiers(modifiers);
};
_.extend(Cell.prototype, TypedConfig);

/**
 * Convenience methods
 */
Cell.prototype.getBounds = function() {
	if (this.bounds) return this.bounds;

	var x = this.getProperty("x");
	var y = this.getProperty("y");
	var w = this.getProperty("width");
	var h = this.getProperty("height");
	return this.bounds = new Rectangle(x - w / 2, y - h / 2, this.getProperty("width"), this.getProperty("height"));
};

Cell.prototype.move = function(x, y) {
	this.setProperty("x", Math.round(x));
	this.setProperty("y", Math.round(y));
	delete this.bounds;
};

Cell.prototype.resize = function(w, h) {
	this.setProperty("width", w);
	this.setProperty("height", h);
	delete this.bounds;
};

Cell.prototype.canEdit = function() {
	return (this.graph ? this.graph.canEdit() : true) && this.getProperty("editable");
};

Cell.prototype.canSelect = function() {
	return (this.graph ? this.graph.canSelect() : true) && this.getProperty("selectable");
};

Cell.prototype.canMove = function() {
	return (this.graph ? this.graph.canEdit() : true) && this.getProperty("draggable");
};

Cell.prototype.canResize = function() {
	return (this.graph ? this.graph.canEdit() : true) && this.getProperty("resizable");
};

Cell.prototype.getNamespace = function() {
	if (this == this.graph.getCurrentRoot()) return 'graph';
	return this.getProperty("role");
};

/**
 * Type methods
 */
Cell.prototype.getTypeFromString = function(typeStr) {
	return this.graph.getType(typeStr);
};

Cell.prototype.createModifiers = function(modifiers) {
	this.modifiers = null;
	var modifierSettings = this.getProperty("modifierSettings");
	if (modifierSettings) {
		_.each(modifiers, function(config) {
			config.type = this.graph.getModifierType(config.className);
			config.setting = modifierSettings[config.className];
			if (!config.type || !config.setting) return;

			this.addModifier(config.className, new Modifier(this, config));
		}, this);

		// Check for showAlways settings
		_.each(modifierSettings, function(setting, name) {
			if (setting.showAlways && (!this.modifiers || !this.modifiers[name])) {
				var config = {type: this.graph.getModifierType(name), setting: setting};
				if (!config.type) return;
				this.addModifier(name, new Modifier(this, config));
			}
		}, this);
	}
};

Cell.prototype.addModifier = function(name, modifier) {
	if (!this.modifiers)
		this.modifiers = {};

	if (!modifier.hasOwnProperty("showHeader"))
		modifier.showHeader = true;

	// @hack preferably set it in configurations.
	if (modifier.name == "HoverProcessModifier" || modifier.name == "HoverResults")
		modifier.showHeader = false;

	this.modifiers[name] = modifier;
};

Cell.prototype.getModifiers = function() {
	if (_.isUndefined(this.modifiers))
		this.createModifiers();
	return this.modifiers;
};

Cell.prototype.getModifier = function(name) {
	var modifiers = this.getModifiers();
	if (modifiers)
		return modifiers[name];
	return null;
};

Cell.prototype.getLabelNode = function() {
	if (this == this.graph.getCurrentRoot())
		return null;

	if (this.labelNode)
		return this.labelNode;

	// Just get the config will have a positive performance boost for IE11 and IE10.
	return this.labelNode = Label.getLabelNode(this.getProperty("label"), this.getProperty("width"), this.getProperty("height"), this.getProperty("labelConfig"));
};

Cell.prototype.getComputedClassName = function() {
	if (!this._computedClassName) {
		var buf = new StringBuffer(this.getProperty("role"));
		if (this.hasOwn("className"))
			buf.append(this.getProperty("className"));
		var type = this.type;
		while (type) {
			if (type.hasOwn("className"))
				buf.append(type.getProperty("className"));
			type = type.type;
		}
		this._computedClassName = buf.toString(' ');
	}
	return this._computedClassName;
};

Cell.prototype.isVisible = function() {
	return this.getProperty('visible');
};

Cell.prototype.isContainer = function() {
	return false;
};

Cell.prototype.destroy = function() {
	delete this.graph;
	delete this.modifiers;
	this.removeProperty();
	this.destroyed = true;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                  The Vertext is a node on the graph                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Vertex = gfw.Vertex = function(graph, config) {
	if (!config) config = {};
	if (!config.hasOwnProperty("id"))
		config.id = _.uniqueId("n_");

	Vertex.superclass.constructor.apply(this, arguments);
	// Check if we have a type, if not, we will set it to the default vertex type.
	if (!this.type)
		this.type = this.graph.getDefaultVertexType();

	this.inEdges = [];
	this.outEdges = [];
	this.parent = null;
};
util.extend(Vertex, Cell);

Vertex.prototype.removeEdge = function(edge) {
	var edges = edge.source == this ? this.outEdges : this.inEdges;
	for (var i = 0; i < edges.length; i++) {
		if (edge == edges[i]) {
			edges.splice(i, 1);
			break;
		}
	}
};

// Add a new incoming edge
Vertex.prototype.addInEdge = function(edge, pos) {
	if (pos == null || pos === undefined)
		this.inEdges.push(edge);
	else
		this.inEdges.splice(pos, 0, edge);
};

// Add a new outgoing edge
Vertex.prototype.addOutEdge = function(edge, pos) {
	if (pos == null || pos === undefined || pos > edge.length - 1)
		this.outEdges.push(edge);
	else
		this.outEdges.splice(pos, 0, edge);
};

/**
 * The DrillDownParent is the parent that displays the vertex when drilled down.
 */
Vertex.prototype.getDrillDownParent = function() {
	return this.parent;
};

Vertex.prototype.isLocked = function() {
	var mode = this.getProperty("mode") || 3;
	return !(mode & Graph.ALLOW_INTERACTIONS);
};

Vertex.prototype.getCrumbText = function() {
	if (this.isLocked())
		return '<span><img src="webwb/pzreadonly.png" /></span><span>&nbsp;' + this.getProperty("label") + '</span>';
	return this.getProperty("label");
};

Vertex.prototype.canEdit = function() {
	return (!this.parent || !this.parent.isLocked()) && Vertex.superclass.canEdit.call(this);
};

Vertex.prototype.isContainer = function() {
	return this.getProperty("container");
};


Vertex.prototype.isAncestor = function(v) {
// TODO: should we move this to graph class ?
	var vertex = v.parent;
	while (vertex) {
		if (this == vertex) { return true };
		vertex = vertex.parent;
	}
	return false;
};


Vertex.prototype.toString = function() {
	var label = this.hasProperty("label") ? this.getProperty("label") : "undefined";
	if (_.isArray(label))
		label = label[0];
	return 'Vertex:{id:' + this.id + ';label:' + label + ';type:' + this.type + '}';
};

/**
 * The connector between vertices
 */
var Edge = gfw.Edge = function(source, target, graph, config) {
	if (!config) config = {};
	if (!config.hasOwnProperty("id"))
		config.id = _.uniqueId("e_");

	this.source = this.target = null;
	this.setSource(source, config.sourcePos);
	this.setTarget(target, config.targetPos);

	Edge.superclass.constructor.call(this, graph, config);

	// Check if we have a type, if not, we will set it to the default edge type.
	if (!this.type)
		this.type = this.graph.getDefaultEdgeType();

	if (!this.getProperty('refPts'))
		this.setProperty('refPts', [new Point(0, 0), new Point(400, 200)]);
};
util.extend(Edge, Cell);

Edge.prototype.setSource = function(vertex, pos) {
	this._setEnd(vertex, pos, 'source');
};

Edge.prototype.setTarget = function(vertex, pos) {
	this._setEnd(vertex, pos, 'target');
};

/**
 * Internal methods to set either the source or target
 */
Edge.prototype._setEnd = function(vertex, pos, dir) {
	var end = dir == 'source' ? this.source : this.target;
	if (end == vertex) {
		// simply change the position of the edge.
		if (vertex)
			vertex.setEdgeAt(this, pos);
	} else {
		if (end) {
			// first remove the edge from the current end
			end.removeEdge(this);
		}

		if (vertex) {
			if (dir == 'source')
				vertex.addOutEdge(this, pos);
			else
				vertex.addInEdge(this, pos);
		}
		if (dir == 'source')
			this.source = vertex;
		else
			this.target = vertex;
		this.clearPoints();
	}
};

Edge.prototype.getPoints = function() {
	if (this.graph.eventDispatcher.dragging) {
		this.clearPoints();
		return [Anchor.getStartPoint(this), Anchor.getEndPoint(this)];
	}

	if (!this.points || this.points.length == 0) {
		delete this.length;
		this.points = EdgeStyle.getPoints(this);
	}

	return this.points;
};

/**
 * Return the total length of this connection, in pixels.
 */
Edge.prototype.getLength = function() {
	if (!_.isUndefined(this.length)) return this.length;

	var points = this.getPoints();
	var i, l = 0;
	for (i = 0; i < points.length - 1; i++)
		l += points[i].distance(points[i+1]);
	return this.length = l;
};

Edge.prototype.clearPoints = function() {
	delete this.points;
	delete this.length;
};

/**
 * Return a pair of points as reference to the calculation of start and end points.
 */
Edge.prototype.getReferencePoints = function() {
	var pts = [];
	var refPts = this.getProperty('refPts');
	if (this.source)
		pts.push(this.source.getBounds().getCenter());
	else
		pts.push(refPts[0]);

	if (this.target)
		pts.push(this.target.getBounds().getCenter());
	else
		pts.push(refPts[1]);
	return pts;
};

/**
 * Calculate the position where to put modifiers or label..
 *
 * @param geometry: defines how far along the edge should the point be placed.
 * @return the relative position.
 */
Edge.prototype.getRelativePosition = function(geometry) {
	var p = geometry.x, l = this.getLength();
	if (_.isString(p)) {
		if (/%$/.test(p)) {
			p = s(p).strLeft('%').toNumber() / 100;
		} else if (/px$/.test(p)) {
			p = s(p).strLeft('px').toNumber();
		}
	}
	if (p >= -1 && p <= 1) p *= l;
	if (p < 0) p = l + p;
	if (p > l) p = l;

	var points = this.getPoints(), d, point, dir;
	for (var i = 0; i < points.length - 1; i++) {
		d = points[i].distance(points[i+1]);
		if (p <= d) {
			// we've located the line segment.
			point = points[i].clone();
			dir = point.getDirection(points[i+1]);
			point.translate(dir.getScaled(p));
			break;
		}
		p -= d;
	}

	// return the last point.
	if (!point)
		point = points[points.length - 1];
	return [point.x + geometry.offsetX, point.y + geometry.offsetY];
};

Edge.prototype.isVisible = function() {
	if (this.graph.getProperty("allowDanglingEdges")) {
		return (this.source ? this.source.isVisible() : true) && (this.target ? this.target.isVisible() : true) && this.getProperty("visible");
	} else
		return this.source && this.target && this.getProperty('visible') && this.source.isVisible() && this.target.isVisible();
};

Edge.prototype.getLabelNode = function() {
	return Label.getLabelNodeForEdge(this);
};

Edge.prototype.toString = function() {
	return 'Edge:{' + (_.isNull(this.source) ? 'null' : this.source.id) + '--' + (_.isNull(this.target) ? 'null' : this.target.id) + '}';
};

Edge.prototype.destroy = function() {
	Edge.superclass.destroy.call(this);
	this.setSource(null);
	this.setTarget(null);
};

/**
 * The modifier decorates the vertex or the edge.
 */
var Modifier = gfw.Modifier = function(cell, config) {
	this.cell = cell;
	this.init(config);
};
_.extend(Modifier.prototype, TypedConfig);

Modifier.prototype.getBounds = function() {
	if (this.bounds)
		return this.bounds;

	var setting = {width: this.getProperty("width"), height: this.getProperty("height")};
	_.extend(setting, this.getProperty("setting"));
	var geometry = util.getRelativeGeometry(setting);
	var pos = util.getRelativePosition(this.cell.getConfig(['width', 'height']), geometry);
	return this.bounds = new Rectangle(pos[0] - setting.width / 2, pos[1] - setting.height / 2, setting.width, setting.height);
};

Modifier.prototype.getLabelNode = function() {
	if (this.labelNode)
		return this.labelNode;

	var setting = this.getProperty("setting");
	var label = this.getProperty("label") || setting.label;
	return this.labelNode = Label.getLabelNode(label, this.getProperty("width"), this.getProperty("height"), this.getProperty("labelConfig"));
};

Modifier.prototype.isContainer = function() { return false; };

/**
 * The label object handles label sizing/positioning
 */
var Label = gfw.Label = (function() {
	var canvasSupported = false, stringMeasureEl = null, inlineEditor = null, editorShowing = false, actualText = null;

	/**
	 * Calculate the size of the string.
	 */
	var getStringSize = _.memoize(function(str, fontSize, fontFamily, bold) {
		if (!str || str == "")
			return [0, 0];

		fontSize = fontSize || 11;
		fontFamily = fontFamily || 'Arial,Helvetica';
		bold = !_.isUndefined(bold) ? bold: false;

		var size;

		if (_.isNull(canvasSupported)) {
			stringMeasureEl = dom.createElement('canvas');
			canvasSupported = !!(stringMeasureEl.getContext && stringMeasureEl.getContext('2d'));
		}

		if (canvasSupported) {
			util.log('Label', 'using canvas');
			var ctx = stringMeasureEl.getContext("2d");
			ctx.font = fontSize + " " + fontFamily + " " + (bold ? "bold" : "normal");
			var measure = ctx.measureText(str);
			size = [measure.width, 10];
		} else {
			// first check if there is a string-measuring div available, if not, create now.
			if (!stringMeasureEl) {
				stringMeasureEl = dom.createElement('iframe', {id:"_ComputeStylesIframe"}, {position:"absolute", visibility:"hidden", display:"none", width:"auto"});
				document.body.appendChild(stringMeasureEl);
				var doc = stringMeasureEl.contentWindow.document;
				doc.open();
				doc.write('<html><body><div id="sizeMeasuringDiv" style="position:absolute;width:auto;height:auto;white-space:pre-wrap;word-wrap:break-word;display:inline-block;"></div></body></html>');
				doc.close();
			}
			stringMeasureEl.style.display = "";
			var div = stringMeasureEl.contentWindow.document.getElementById("sizeMeasuringDiv");
			div.style.fontSize = fontSize;
			div.style.fontFamily = fontFamily;
			div.style.fontWeight = bold ? 'bold' : 'normal';
			div.style.padding = 0;
			div.style.width = "auto";
			div.innerHTML = str;

			size = [div.offsetWidth, div.offsetHeight];
			stringMeasureEl.style.display = "none";
		}
		return size;
	}, function(str, fontSize, fontFamily, bold) { return str + ';' + fontSize + ';' + fontFamily + ';' + bold; });

	/**
	 * Create a wrapped text.
	 * @param {String} string the string to wrap.
	 * @param {maxWidth} the maximum width this string can take.
	 * @param {fontSize}
	 * @param {fontFamily}
	 * @param {bold}
	 */
	var wrap = _.memoize(function(string, maxWidth, fontSize, fontFamily, bold) {
		maxWidth = maxWidth || 0;
		fontSize = fontSize || 11;
		fontFamily = fontFamily || 'Arial,Helvetica';
		bold = !_.isUndefined(bold) ? bold: false;

		var arr = [];
		var spaceSize = getStringSize("&nbsp;", fontSize, fontFamily, bold), space = spaceSize[0];
		arr.lineHeight = spaceSize[1];

		if (!maxWidth || !string || string == "") {
			arr.push(string);
			arr.width = (!string || string == "") ? space : getStringSize(string, fontSize, fontFamily, bold)[0];
			arr.height = arr.lineHeight;
			return arr;
		}

		var width = 0;
		//split the text by lines
		var lines = string.split(/[\r\n|\n|\r]/);

		var buf = new StringBuffer();

		for (var j = 0; j < lines.length; j++) {
			//split each line by word
			var words = lines[j].split(/[\s]/);
			var line = "", currentWidth = 0, wordWidth = 0, newLine = true, word;

			for (var i = 0; i < words.length; i++) {
				word = words[i];
				wordWidth = getStringSize(word, fontSize, fontFamily, bold)[0];

				if ((newLine ? wordWidth : currentWidth + space + wordWidth) > maxWidth) {
					if (newLine) {
						buf.append(word);
						width = Math.max(width, wordWidth);
						if (i < words.length - 1) {
							arr.push(buf.toString());
							buf.clear();
						}
					} else {
						arr.push(buf.append(line).toString());
						width = Math.max(width, currentWidth + space + wordWidth);
						buf.clear();
					}
					line = "";
					currentWidth = 0;
					if (!newLine)
						i--; // move back one word.
					newLine = true;
				} else {
					line = newLine ? word : line + " " + word;
					currentWidth = newLine ? wordWidth : currentWidth + space + wordWidth;
					width = Math.max(width, currentWidth);
					newLine = false;
				}
			}
			if (line != "")
				buf.append(line);
			if (j < lines.length - 1) {
				arr.push(buf.toString());
	    		buf.clear();
			}
		}

		arr.push(buf.toString());
		arr.width = width;
		arr.height = arr.lineHeight * arr.length;
		return arr;
	}, function(str, maxWidth, fontSize, fontFamily, bold) { return str + ';' + maxWidth + ';' + fontSize + ';' + fontFamily + ';' + bold; });

	function getLabelNode(label, containerWidth, containerHeight, labelConfig) {
		if (!labelConfig) return null;

		var fontSize = labelConfig.fontSize;
		var fontFamily = labelConfig.fontFamily;
		var fontStyle = labelConfig.fontStyle || 0;
		var bold = (fontStyle & Label.FONT_BOLD) == Label.FONT_BOLD;
		var padding = labelConfig.labelPadding || 0;

		var w = labelConfig.labelWidth, h = labelConfig.labelHeight;
		w = w <= 1 ? containerWidth * w : w;
		h = h <= 1 ? containerHeight * h : h;
		w -= 2 * padding;
		h -= 2 * padding;

		var wrappedLabel = Label.wrap(label, w, fontSize, fontFamily, bold);

		var pos = util.getRelativePosition({width: containerWidth, height: containerHeight},
			util.getRelativeGeometry({
				h: labelConfig.labelHorizontalPos,
				v: labelConfig.labelVerticalPos,
				x: labelConfig.labelOffsetX,
				y: labelConfig.labelOffsetY,
				width: wrappedLabel.width + 2 * padding,
				height: wrappedLabel.height + 2 * padding
			})
		);

		var maxPos = util.getRelativePosition({width: containerWidth, height: containerHeight},
			util.getRelativeGeometry({
				h: labelConfig.labelHorizontalPos,
				v: labelConfig.labelVerticalPos,
				x: labelConfig.labelOffsetX,
				y: labelConfig.labelOffsetY,
				width: w + 2 * padding,
				height: h + 2 * padding
			})
		);

		var anchor = "start", dx;
		switch (labelConfig.align) {
			case "center":
				anchor = "middle";
				break;
			case "right":
				anchor = "end";
				dx = wrappedLabel.width/2;
				break;
			case "left":
			default:
				dx = -wrappedLabel.width/2;
				break;
		}
		return this.labelNode = {
			label: wrappedLabel,
			dx: dx,
			dy: -wrappedLabel.height/2 + wrappedLabel.lineHeight,
			anchor: anchor,
			lineHeight: wrappedLabel.lineHeight,
			// the -2 seems to work better for vertically centered labels. not sure why.
			bounds: new Rectangle(pos[0] - wrappedLabel.width/2 - padding, pos[1] - wrappedLabel.height/2 - padding - 2, wrappedLabel.width + 2*padding, wrappedLabel.height + 2*padding),
			maxBounds: new Rectangle(maxPos[0] - w / 2, maxPos[1] - h / 2 - 2, w, h) // the maxumum bounds for the label, used to position inline editor
		};
	}

	function getLabelNodeForEdge(edge) {
		var label = edge.getProperty("label");
		var labelConfig = edge.getProperty("labelConfig");

		if (!labelConfig || !label || label == "") return null;

		var fontSize = labelConfig.fontSize;
		var fontFamily = labelConfig.fontFamily;
		var fontStyle = labelConfig.fontStyle || 0;
		var bold = (fontStyle & Label.FONT_BOLD) == Label.FONT_BOLD;

		var wrappedLabel = Label.wrap(label, labelConfig.labelWidth || 0, fontSize, fontFamily, bold);
		var pos = edge.getRelativePosition({x: labelConfig.labelLocation/2, offsetX: labelConfig.labelOffsetX || 0, offsetY: labelConfig.labelOffsetY || 0});

		var anchor = "start", dx;
		switch (labelConfig.align) {
			case "center":
				anchor = "middle";
				break;
			case "right":
				anchor = "end";
				dx = wrappedLabel.width/2;
				break;
			case "left":
			default:
				dx = -wrappedLabel.width/2;
				break;
		}
		return this.labelNode = {
			label: wrappedLabel,
			dx: dx,
			dy: -wrappedLabel.height/2 + wrappedLabel.lineHeight,
			anchor: anchor,
			lineHeight: wrappedLabel.lineHeight,
			backgroundColor: labelConfig.labelBackgroundColor,
			bounds: new Rectangle(pos[0] - wrappedLabel.width/2, pos[1] - wrappedLabel.height/2 - 2, wrappedLabel.width, wrappedLabel.height)
		};
	}

	function startEditor(cell, textEl) {
		if (!inlineEditor) {
			inlineEditor = dom.createElement('textarea', {id:"inlineEditor", unselectable:"off"}, { position:"absolute", overflow:"hidden", padding:"0px", margin:"0px", border:"transparent"});
			cell.graph.viewBase.appendChild(inlineEditor);
		} else if (editorShowing && inlineEditor.__data__ != cell) {
			// need to close the existing editor first
			stopEditor(false);
		}
		actualText = textEl;
		if (actualText)
			d3.select(actualText).style('visibility', 'hidden');

		var labelConfig = cell.getProperty("labelConfig");
		var labelBounds = cell.getLabelNode().maxBounds;
		var graph = cell.graph;
		var pos = util.unscale(graph, [cell.getBounds().getCenterX() + labelBounds.x, cell.getBounds().getCenterY() + labelBounds.y + 5]);
		var scale = graph.scale();

		d3.select(inlineEditor).datum(cell)
		  .style({
		  	visibility: 'visible',
		  	left: pos[0] + "px",
		  	top: pos[1] + "px",
		  	width: (labelBounds.width * scale) + 'px',
		  	height: (labelBounds.height * scale) + 'px',
		  	"font-family": labelConfig.fontFamily,
			"font-size": (labelConfig.fontSize * scale) + 'px',
			"font-weight": (labelConfig.fontStyle & Label.FONT_BOLD) == Label.FONT_BOLD ? 'bold' : 'normal'
			/*"color": labelConfig.fontColor*/
		  });

		inlineEditor.value = cell.getProperty("label");
		inlineEditor.focus();
		inlineEditor.select();
		editorShowing = true;
	}

	function stopEditor(cancel) {
		if (!inlineEditor || !editorShowing) return;
		var editor = d3.select(inlineEditor);

		cancel = cancel || false;
		if (actualText) {
			d3.select(actualText).style('visibility', null);
			actualText = null;
		}

		editor.style('visibility', 'hidden');
		editorShowing = false;
		if (!cancel) {
			var cell = inlineEditor.__data__;
			var value = inlineEditor.value;
			cell.graph.setCellProperty(cell, 'label', value);
		}
	}

	return {
		FONT_BOLD: 1,
		FONT_ITALIC: 2,
		FONT_UNDERLINE: 4,
		FONT_SHADOW: 8,
		getStringSize: getStringSize,
		wrap: wrap,
		getLabelNode: getLabelNode,
		getLabelNodeForEdge: getLabelNodeForEdge,
		startEditor: startEditor,
		stopEditor: stopEditor
	};
})();

/**
 * Anchor takes care of the connection anchors on a vertex
 */
var Anchor = gfw.Anchor = (function () {
	function getStartPoint(edge) {
		var v = edge.source;
		var refPts = edge.getReferencePoints();
		var perimeter, bounds = getBounds(edge, true), direction;
		if (!v) {
			direction = null;
		} else {
			var config = v.getProperty("shapeConfig");
			direction = config.direction;
			perimeter = Perimeter[s.capitalize(config.perimeter)];
		}
		if (!perimeter)
			perimeter = Perimeter["RectanglePerimeter"];
		return perimeter(bounds, direction, refPts[1], false);
	}

	function getEndPoint(edge) {
		var v = edge.target;
		var refPts = edge.getReferencePoints();
		var perimeter, bounds = getBounds(edge, false), direction;
		if (!v) {
			direction = null;
		} else {
			var config = v.getProperty("shapeConfig");
			direction = config.direction;
			perimeter = Perimeter[s.capitalize(config.perimeter)];
		}
		if (!perimeter)
			perimeter = Perimeter["RectanglePerimeter"];
		return perimeter(bounds, direction, refPts[0], false);
	}

	function getBounds(edge, source) {
		var v = source ? edge.source : edge.target;
		var refPts = edge.getReferencePoints();
		var index = source ? 0 : 1;
		var bounds;
		if (!v)
			bounds = new Rectangle(refPts[index].x - 3, refPts[index].y - 3, 6, 6);
		else
			bounds = v.getBounds();
		return bounds;
	}

	function getAnchorLayouts(shape, count, direct) {
		var i;
		var coords = getCoords()[shape][count];
		if (shape == "trianglePerimeter") {
			var buf;
			switch (direct) {
				case "west":
					for (i = 0; i < coords.length; i++) {
						coords[i][0] = 1 - coords[i][0];
					}
					break;
				case "north":
					for (i = 0; i < coords.length; i++) {
						buf = coords[i][0];
						coords[i][0] = coords[i][1];
						coords[i][1] = 1 - buf;
					}
					break;
				case "south":
					for (i = 0; i < coords.length; i++) {
						buf = coords[i][0];
						coords[i][0] = coords[i][1];
						coords[i][1] = buf;
					}
					break;
			}
		}
		return coords;
	}

	function getCoords() {
		return {
			"rhombusPerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1], [0.25, 0.75], [0.75, 0.75]],
				"8": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1], [0.25, 0.25], [0.75, 0.25], [0.25, 0.75], [0.75, 0.75]]
			},
			"trianglePerimeter": {
				"0": [],
				"3": [[0, 0], [0, 1], [1, 0.5]],
				"4": [[0, 0], [0, 1], [1, 0.5], [0, 0.5]],
				"6": [[0, 0], [0, 1], [1, 0.5], [0, 0.5], [0.5, 0.25], [0.5, 0.75]],
				"8": [[0, 0], [0, 1], [1, 0.5], [0, 0.5], [0.25, 1], [0.75, 1], [0.25, 0], [0.75, 0]]
			},
			"rectanglePerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.33, 0], [0.67, 0], [0.33, 1], [0.67, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.25, 0], [0.5, 0], [0.75, 0], [0.25, 1], [0.5, 1], [0.75, 1]]
			},
			"ellipsePerimeter": {
				"0": [],
				"3": [[0.5, 0], [0, 1], [1, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.2, 0], [0.8, 0], [0.2, 1], [0.8, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.15, 0], [0.5, 0], [0.85, 0], [0.15, 1], [0.5, 1], [0.85, 1]]
			},
			"hexagonPerimeter": {
				"0": [],
				"3": [[0.5, 0], [0.25, 1], [0.75, 1]],
				"4": [[0, 0.5], [1, 0.5], [0.5, 0], [0.5, 1]],
				"6": [[0, 0.5], [1, 0.5], [0.25, 0], [0.75, 0], [0.25, 1], [0.75, 1]],
				"8": [[0, 0.5], [1, 0.5], [0.25, 0], [0.5, 0], [0.75, 0], [0.25, 1], [0.5, 1], [0.75, 1]]
			}
		};
	}

	return {
		getStartPoint: getStartPoint,
		getEndPoint: getEndPoint,
		getBounds: getBounds,
		getAnchorLayouts: getAnchorLayouts
	};
})();

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           Edge Related Classes                            //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var EdgeMarker = gfw.EdgeMarker = (function() {
	var registry = {};

	/** Begin Standard Marker Type **/
	function classic(size, source, styles) {
		var sign = source ? -1 : 1;
		var marker = {
			viewBox: new Rectangle(-5, -5, 10, 10),
			size: size,
			ref: [4*sign, 0],
			fill: styles.strokeColor
		};
		marker.shape = {
			type: 'polygon',
			points: [[-2*sign, 0], [-4*sign, 4], [4*sign, 0], [-4*sign, -4]]
		};
		return marker;
	}

	function block(size, source, styles) {
		var sign = source ? -1 : 1;
		var marker = {
			viewBox: new Rectangle(-5, -5, 10, 10),
			size: size,
			ref: [4*sign, 0],
			fill: styles.strokeColor
		};
		marker.shape = {
			type: 'polygon',
			points: [[-5*sign, -5], [-5*sign, 5], [4*sign, 0]]
		};
		return marker;
	}

	function oval(size, source, styles) {
		var r = size / 2;
		var marker = {
			viewBox: new Rectangle(-r, -r, size, size),
			size: size,
			ref: [0, 0],
			fill: styles.strokeColor
		};
		marker.shape = '<ellipse cx="0" cy="0" rx="' + r + '" ry="' + r + '"></ellipse>';
		return marker;
	}

	function diamond(size, source, styles) {
        var sign = source ? -1 : 1;
		var marker = {
			viewBox: new Rectangle(-5, -5, 10, 10),
			size: size,
			ref: [4*sign, 0],
			fill: styles.strokeColor
		};
		marker.shape = '';
		return marker;
	}
	/** End Standard Marker Type **/

	function addMarker(graph, id, type, size, source, styles) {
		var creator = registry[type];
		var marker = creator(size, source, styles);
		marker.id = id;
		if (!graph._markers)
			graph._markers = [];
		graph._markers.push(marker);
	}

	registry['classic'] = classic;
	registry['block'] = block;
	registry['oval'] = oval;
	registry['diamond'] = diamond;

	return {
		registry: registry,
		addMarker: addMarker,
		getMarkers: function(graph) {
			return graph._markers || [];
		}
	};
})();

var EdgeStyle = gfw.EdgeStyle = (function() {
	var registry = {};

	/** Begin Standard Edge Style **/
	function entityRelation(edge) {
		var source = Anchor.getBounds(edge, true);
		var target = Anchor.getBounds(edge, false);
		var isSourceLeft = target.right() < source.x;
		var isTargetLeft = source.right() < target.x;
		var result = [];

		var x0 = (isSourceLeft) ? source.x : source.x + source.width;
		var y0 = source.getCenterY();
		result.push(new Point(x0, y0));

		var xe = (isTargetLeft) ? target.x : target.x + target.width;
		var ye = target.getCenterY();

		var seg = this.segment;

		var dx = (isSourceLeft) ? -seg : seg;
		var dep = new Point(x0 + dx, y0);

		dx = (isTargetLeft) ? -seg : seg;
		var arr = new Point(xe + dx, ye);

		// Adds intermediate points if both go out on same side
		if (isSourceLeft == isTargetLeft)
		{
			var x = (isSourceLeft) ?
				Math.min(x0, xe)-seg :
				Math.max(x0, xe)+seg;

			result.push(new Point(x, y0));
			result.push(new Point(x, ye));
		}
		else if ((dep.x < arr.x) == isSourceLeft)
		{
			var midY = y0 + (ye - y0) / 2;

			result.push(dep);
			result.push(new Point(dep.x, midY));
			result.push(new Point(arr.x, midY));
			result.push(arr);
		}
		else
		{
			result.push(dep);
			result.push(arr);
		}

		result.push(new Point(xe, ye));
		return result;
	}

	var manhattan = (function() {
		/**
		 * Make a route based on the start, end and startNormal and endNormal
		 * None of the parameters can be null
		 * TODO: This method could use some improvement...
		 */
		function routeInternal(start, end, startNormal, endNormal) {
			var direction = start.getDirection(end);
			var average = start.getMidPoint(end);
			var pos = [];
			var horizontal = startNormal.x != 0;
			pos[0] = horizontal ? start.y : start.x;

			horizontal = !horizontal;
			var i, l = this.MIN_BUFFER;
			if (startNormal.dotProduct(endNormal) == 0) {
				if ((startNormal.dotProduct(direction) >= 0)
					&& (endNormal.dotProduct(direction) <= 0)) {
					// 0
				} else {
					// 2
					if (startNormal.dotProduct(direction) < 0)
						i = startNormal.similarity(start.getTranslated(startNormal.getScaled(l)));
					else
						i = horizontal ? average.y : average.x;

					pos.push(i);
					horizontal = !horizontal;

					if (endNormal.dotProduct(direction) > 0)
						i = endNormal.similarity(end.getTranslated(endNormal.getScaled(l)));
					else
						i = horizontal ? average.y : average.x;

					pos.push(i);
					horizontal = !horizontal;
				}
			} else {
				if (startNormal.dotProduct(endNormal) > 0) {
					//1
					if (startNormal.dotProduct(direction) >= 0)
						i = startNormal.similarity(start.getTranslated(startNormal.getScaled(l)));
					else
						i = endNormal.similarity(end.getTranslated(endNormal.getScaled(l)));
					pos.push(i);
					horizontal = !horizontal;
				} else {
					//3 or 1
					if (startNormal.dotProduct(direction) < 0) {
						i = startNormal.similarity(start.getTranslated(startNormal.getScaled(l)));
						pos.push(i);
						horizontal = !horizontal;
					}

					i = horizontal ? average.y : average.x;
					pos.push(i);
					horizontal = !horizontal;

					if (startNormal.dotProduct(direction) < 0) {
						i = endNormal.similarity(end.getTranslated(endNormal.getScaled(l)));
						pos.push(i);
						horizontal = !horizontal;
					}
				}
			}
			pos.push(horizontal ? end.y : end.x);

			return pos;
		}

		// Process the positions.
		function processPositions(start, end, positions, horizontal) {
			var pos = [];
			pos[0] = horizontal ? start.x : start.y;
			var i;
			for (i = 0; i < positions.length; i++) {
				pos[i + 1] = positions[i];
			}
			pos.push((horizontal == (positions.length % 2 == 1)) ? end.x : end.y);

			var pts = [];
			pts[0] = start;
			var p;
			var current, prev;
			for (i = 2; i < pos.length - 1; i++) {
				horizontal = !horizontal;
				prev = pos[i - 1];
				current = pos[i];
				p = horizontal ? new Point(prev, current) : new Point(current, prev);
				pts.push(p);
			}
			pts.push(end);
			return pts;
		}

		/**
		 * Automatically route the connection to avoid intersections with other vertices.
		 */
		function autoRoute(pts, container, boxes, startBox, endBox) {
			var side, side2, d, box, intersect, j;
			var channel, channel2, pt, dir;

			var startPadding = 0, endPadding;
			// first get the start and end channel
			box = boxes[endBox];
			pt = pts[pts.length - 2];
			if (pt.y < box.y)
				side = 1;
			else if (pt.y > box.y + box.height)
				side = 3;
			else if (pt.x < box.x)
				side = 0;
			else
				side = 2;
			channel = _getChannel(container, endBox, boxes, side);
			endPadding = channel.horizontal ? (channel.right - channel.left)/2 : (channel.bottom - channel.top)/2;

			for (var i = 0; i < pts.length - 1; i++) {
				if (pts[i+1].x == pts[i].x && pts[i+1].y == pts[i].y) continue;
				intersect = _getFirstIntersection(pts, i, boxes, startBox, endBox);
				if (!intersect) continue;
				j = intersect[0];
				side = intersect[1];
				box = boxes[j];
				channel = _getChannel(container, j, boxes, side);
				switch(side) {
					case 0:
					case 2:
						pt = new Point((channel.right + channel.left)/2, pts[i].y);
						dir = _getRouteTendency(pts, i, pt, box, side);
						side2 = dir < 0 ? 1 : 3;
						channel2 = _getChannel(container, j, boxes, side2);
						// if the previous point is in the channel2, use that point instead of center of the channel.
						if (i > 1 && (pts[i-2].y == pts[i-1].y) && (pts[i-1].y > channel2.top && pts[i-1].y < channel2.bottom))
							d = pts[i-1].y - pt.y;
						else if (i < pts.length - 3 && (pts[i+2].y == pts[i+3].y) && (pts[i+2].y > channel2.top && pts[i+2].y < channel2.bottom))
							d = pts[i+2].y - pt.y;
						else
							d = (channel2.bottom + channel2.top)/2 - pt.y;
						// check if we need this pt.
						if ((side == 0 && pt.x <= pts[i].x) || (side == 2 && pt.x >= pts[i].x))
							pt = null;
						else if (i > 0) {
							// see if we can push the line out to where we started.
							if (!_hasIntersection(
								[new Point(pts[i].x, pts[i].y), new Point(pts[i].x, pts[i].y + d), new Point(pt.x, pt.y + d)],
								boxes))
								pt = null;
						}
						break;
					case 1:
					case 3:
						pt = new Point(pts[i].x, (channel.bottom + channel.top)/2);
						dir = _getRouteTendency(pts, i, pt, box, side);
						side2 = dir < 0 ? 0 : 2;
						channel2 = _getChannel(container, j, boxes, side2);
						// if the previous point is in the channel2, use that point instead of center of the channel.
						if (i > 1 && (pts[i-2].x == pts[i-1].x) && (pts[i-1].x > channel2.left && pts[i-1].x < channel2.right))
							d = pts[i-1].x - pt.x;
						else if (i < pts.length - 3 && (pts[i+2].x == pts[i+3].x) && (pts[i+2].x > channel2.left && pts[i+2].x < channel2.right))
							d = pts[i+2].x - pt.x;
						else
							d = (channel2.right + channel2.left)/2 - pt.x;
						// check if we need this pt.
						if ((side == 1 && pt.y <= pts[i].y) || (side == 3 && pt.y >= pts[i].y))
							pt = null;
						else if (i > 0) {
							// see if we can push the line out to where we started.
							if (!_hasIntersection(
								[new Point(pts[i].x, pts[i].y), new Point(pts[i].x + d, pts[i].y), new Point(pt.x + d, pt.y)],
								boxes))
								pt = null;
						}
						break;
					case 4:
						continue;
				}
				// max points.
				if (i > 20) return;
				if (pt && (pt.x != pts[i].x || pt.y != pts[i].y)) {
					pts.splice(i+1, 0, pt);
					_moveSegment(pts, i+1, d, startPadding, endPadding);
					i++;
				} else
					_moveSegment(pts, i, d, startPadding, endPadding);
			}
		}

		function _hasIntersection(pts, boxes) {
			for (var i = 0; i < pts.length - 1; i++) {
				for (var j = 0; j < boxes.length; j++) {
					if (boxes[j].detectIntersection(pts[i], pts[i+1]) >= 0)
						return true;
				}
			}
			return false;
		}

		function _getFirstIntersection(pts, i, boxes, startBox, endBox) {
			var box, side, savedIndex = null, savedSide = null;
			for (var j = 0; j < boxes.length; j++) {
				if ((i == 0 && j == startBox) || (i == pts.length - 2 && j == endBox))
					continue;
				box = boxes[j];
				side = box.detectIntersection(pts[i], pts[i+1]);
				if (side >= 0) {
					if (savedIndex == null) {
						savedIndex = j;
						savedSide = side;
					} else {
						if (boxes[savedIndex].distance(pts[i]) > box.distance(pts[i])) {
							savedIndex = j;
							savedSide = side;
						}
					}
				}
			}
			if (savedIndex != null)
				return [savedIndex, savedSide];
			return null;
		}

		function _getRouteTendency(pts, i, breakPt, box, side) {
			var dir;
			var p;
			switch (side) {
				case 0:
				case 2:
					p = "y";
					break;
				case 1:
				case 3:
					p = "x";
					break;
			}
			//first try the breakpt.
			dir = _getRouteDirection(breakPt, pts[pts.length - 1])[p];
			if (dir == 0) {
				dir = -_getRouteDirection(pts[0], pts[pts.length - 1])[p];
				if (dir == 0) {
					if (breakPt[p] < box.getCenter()[p])
						dir = -1;
					else
						dir = 1;
				}
			}
			return dir;
		}

		function _getRouteDirection(pt1, pt2) {
			if (pt1.x == pt2.x) {
				if (pt1.y < pt2.y) return Point.S;
				return Point.N;
			} else if (pt1.y == pt2.y) {
				if (pt1.x < pt2.x) return Point.E;
				return Point.W;
			} else if (pt1.x < pt2.x) {
				if (pt1.y < pt2.y) return Point.SE;
				return Point.NE;
			} else {
				if (pt1.y < pt2.y) return Point.SW;
				return Point.NW;
			}
		}

		function _getChannel(container, index, boxes, side) {
			var maxChannelWidth = this.maxChannelWidth;
			var box1 = boxes[index], box2;
			var pt, i;
			var channel = {}, l, t, b, r;
			switch (side) {
				case 0:
					pt = box1.getLeft();
					channel.right = pt.x;
					channel.horizontal = false;
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						r = boxes[i].getRight().x;
						if (r >= pt.x) continue;
						if (!channel.left || channel.left < r)
							channel.left = r;
					}
					if (!channel.left) {
						channel.left = container.getLeft().x;
						if (channel.right - channel.left > maxChannelWidth)
							channel.left = channel.right - maxChannelWidth;
					}
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						box2 = boxes[i];
						b = box2.getBottom().y;
						t = box2.getTop().y;
						if (b < pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
							if (!channel.top || channel.top < b)
								channel.top = b;
						}
						if (t > pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
							if (!channel.bottom || channel.bottom > t)
								channel.bottom = t;
						}
					}
					if (!channel.top) channel.top = container.getTop().y;
					if (!channel.bottom) channel.bottom = container.getBottom().y;
					break;
				case 1:
					pt = box1.getTop();
					channel.horizontal = true;
					channel.bottom = pt.y;
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						b = boxes[i].getBottom().y;
						if (b >= pt.y) continue;
						if (!channel.top || channel.top < b)
							channel.top = b;
					}
					if (!channel.top) {
						channel.top = container.getTop().y;
						if (channel.bottom - channel.top > maxChannelWidth)
							channel.top = channel.bottom - maxChannelWidth;
					}
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						box2 = boxes[i];
						l = box2.getLeft().x;
						r = box2.getRight().x;
						if (r < pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
							if (!channel.left || channel.left < r)
								channel.left = r;
						}
						if (l > pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
							if (!channel.right || channel.right > l)
								channel.right = l;
						}
					}
					if (!channel.left) channel.left = container.getLeft().x;
					if (!channel.right) channel.right = container.getRight().x;

					break;
				case 2:
					pt = box1.getRight();
					channel.horizontal = false;
					channel.left = pt.x;
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						l = boxes[i].getLeft().x;
						if (l <= pt.x) continue;
						if (!channel.right || channel.right > l)
							channel.right = l;
					}
					if (!channel.right) {
						channel.right = container.getRight().x;
						if (channel.right - channel.left > maxChannelWidth)
							channel.right = channel.left + maxChannelWidth;
					}
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						box2 = boxes[i];
						b = box2.getBottom().y;
						t = box2.getTop().y;
						if (b < pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
							if (!channel.top || channel.top < b)
								channel.top = b;
						}
						if (t > pt.y && (box2.getRight() > channel.left && box2.getLeft() < channel.right)) {
							if (!channel.bottom || channel.bottom > t)
								channel.bottom = t;
						}
					}
					if (!channel.top) channel.top = container.getTop().y;
					if (!channel.bottom) channel.bottom = container.getBottom().y;
					break;
				case 3:
					pt = box1.getBottom();
					channel.horizontal = true;
					channel.top = pt.y;
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						box2 = boxes[i];
						if (box2.getTop().y <= pt.y) continue;
						if (!channel.bottom || channel.bottom > box2.getTop().y)
							channel.bottom = box2.getTop().y;
					}
					if (!channel.bottom) {
						channel.bottom = container.getBottom().y;
						if (channel.bottom - channel.top > maxChannelWidth)
							channel.bottom = channel.top + maxChannelWidth;
					}
					for (i = 0; i < boxes.length; i++) {
						if (i == index) continue;
						box2 = boxes[i];
						l = box2.getLeft().x;
						r = box2.getRight().x;
						if (r < pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
							if (!channel.left || channel.left < r)
								channel.left = r;
						}
						if (l > pt.x && (box2.getBottom() > channel.top && box2.getTop() < channel.bottom)) {
							if (!channel.right || channel.right > l)
								channel.right = l;
						}
					}
					if (!channel.left) channel.left = container.getLeft().x;
					if (!channel.right) channel.right = container.getRight().x;
					break;
			}
			return channel;
		}

		/**
		 * Move a line segment by a specified distance.
		 *
		 * @param pts the list of points.
		 * @param i the index of the segment.
		 * @param d the distance to move.
         * @param startPadding
         * @param endPadding
		 */
		function _moveSegment(pts, i, d, startPadding, endPadding) {
			// first check if we need to add new line segments.
            var dir, l, pt;
			if (i == 0) {
				// we need to break off the segment, since we can't change the starting point.
				dir = pts[0].getDirection(pts[1]);
				if (!startPadding)
					startPadding = this.MIN_BUFFER;
				l = Math.min(startPadding, pts[0].distance(pts[1])/2);
				pt = pts[0].getTranslated(dir.scale(l));
				pts.splice(1, 0, pt);
				_moveSegment(pts, i+1, d);
				return;
			}
			if (i == pts.length - 2) {
				// we need to break off the segment, since we can't change the end point.
				dir = pts[pts.length-1].getDirection(pts[pts.length-2]);
				if (!endPadding)
					endPadding = this.MIN_BUFFER;
				l = Math.min(endPadding, pts[pts.length-1].distance(pts[pts.length-2])/2);
				pt = pts[pts.length - 1].getTranslated(dir.scale(l));
				pts.splice(pts.length - 1, 0, pt);
				_moveSegment(pts, i, d);
				return;
			}

			if (pts[i].y == pts[i+1].y) {
				if (i > 0 && pts[i - 1].y == pts[i].y) {
					pts.splice(i + 1, 0, pts[i].clone());
					i++;
				}
				if (i < pts.length - 2 && pts[i+1].y == pts[i+2].y)
					pts.splice(i + 1, 0, pts[i+1].clone());
				pts[i].y += d;
				pts[i+1].y += d;
			} else {
				if (i > 0 && pts[i - 1].x == pts[i].x) {
					pts.splice(i + 1, 0, pts[i].clone());
					i++;
				}
				if (i < pts.length - 2 && pts[i+1].x == pts[i+2].x)
					pts.splice(i + 1, 0, pts[i+1].clone());
				pts[i].x += d;
				pts[i+1].x += d;
			}
		}

		/**
		 * This method will merge the redundant segments.
		 */
		function _mergeSegments(pts) {
			var h1 = pts[pts.length-1].y == pts[pts.length-2].y;
			var h2;
			for (var i = pts.length - 2; i >= 1; i--) {
				h2 = pts[i].y == pts[i-1].y;
				if (h2 == h1 || (pts[i].equals(pts[i-1])))
					pts.splice(i, 1);
				else
					h1 = !h1;
			}
		}

		return function(edge) {
			if (!edge.source || !edge.target) return;

			var start = Anchor.getStartPoint(edge);
			var end = Anchor.getEndPoint(edge);

			if (!start || !end || start.equals(end)) return;
			var startNormal = getStartDirection(edge);
			var endNormal = getEndDirection(edge);
			var pos = routeInternal(start, end, startNormal, endNormal);
			pos = processPositions(start, end, pos, startNormal.x!=0, edge);
			if (this.autoRoute) {
				_mergeSegments(pos);
				var boxes = [], node, startBox, endBox;
				var container = edge.source.getCommonAncestor(edge.target);
				var childNodes = container.getDescendants();
				var index = 0;
				for (var i = 0; i < childNodes.length; i++) {
					node = childNodes[i];
					// Do not include source or target ancestors in routing.
					if (node.excludeFromRouting(edge) || node.isAncestor(edge.source) || node.isAncestor(edge.target)) continue;
					if (node == edge.source)
						startBox = index;
					if (node == edge.target)
						endBox = index;
					boxes.push(node.getBounds(document));
					index++;
				}
				if (boxes.length > 1)
					autoRoute(pos, container.getBounds(document), boxes, startBox, endBox);
			}
			_mergeSegments(pos);
			return pos;
		};
	})();
	/** End Standard Edge Style **/

	// Get the starting direction
	function getStartDirection(edge) {
		return getDirection(Anchor.getBounds(edge, true), Anchor.getStartPoint(edge));
	}

	// Get the ending direction
	function getEndDirection(edge) {
		return getDirection(Anchor.getBounds(edge, false), Anchor.getEndPoint(edge));
	}

	//  Returns the direction the point <i>p</i> is in relation to the given rectangle.
	//  Possible values are LEFT (-1,0), RIGHT (1,0), UP (0,-1) and DOWN (0,1).
	function getDirection(r, p) {
		var i, distance = Math.abs(r.x - p.x);
		var direction;

		direction = Point.W;

		i = Math.abs(r.y - p.y);
		if (i <= distance) {
			distance = i;
			direction = Point.N;
		}

		i = Math.abs(r.bottom() - p.y);
		if (i <= distance) {
			distance = i;
			direction = Point.S;
		}

		i = Math.abs(r.right() - p.x);
		if (i < distance) {
			direction = Point.E;
		}

		return direction;
	}

	function getPoints(edge) {
		var pts, edgeStyle = edge.getProperty('edgeStyle'), router;

		if (edgeStyle != 'none')
			router = registry[edgeStyle];

		if (router)
			pts = router.apply(this, arguments);
		else
			pts = [Anchor.getStartPoint(edge), Anchor.getEndPoint(edge)];

		return pts;
	}

	registry['entityRelationEdgeStyle'] = entityRelation;
	registry['orthogonalEdgeStyle'] = manhattan;

	return {
		// Entity Relation Settings
		segment: 30,

		// Orthogonal Settings
		MIN_BUFFER: 10,
		autoRoute: false,
		maxChannelWidth: 100,

		registry: registry,
		getPoints: getPoints
	};
})();

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//           This object will layout the vertices in the graph               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Layout = gfw.Layout = function(graph, config) {
	this.graph = graph;
	if (config.hasOwnProperty("orientation") && _.isString(config.orientation)) {
		if (config.orientation.toUpperCase() == "HORIZONTAL")
			config.orientation = Layout.HORIZONTAL;
		else
			delete config.orientation;
	}

	this.init(config);
};
_.extend(Layout.prototype, Config);

Layout.VERTICAL = 0;
Layout.HORIZONTAL = 1;

Layout.DEFAULT_CONFIG = {
	orientation: Layout.VERTICAL
};

Layout.prototype.layout = function(root, width, height) {};

Layout.prototype.reset = function() {};

Layout.prototype.destroy = function() {
	delete this.graph;
	this.removeProperty();
};

/**
 * Define a simple flow layout
 * @param {Object} owner
 * @param {Object} config
 */
var FlowLayout = gfw.FlowLayout = function(graph, config) {
	FlowLayout.superclass.constructor.call(this, graph, config);
};
util.extend(FlowLayout, Layout);

FlowLayout.DEFAULT_CONFIG = {
	hgap: 10,
	vgap: 10
};

FlowLayout.prototype.layout = function(bounds, root) {
	var items;
	if (!root)
		items = this.owner.childNodes;
	else if (_.isArray(root))
		items = root;
	else
		items = root.getLinkedNodes('target');
	if (!items || items.length == 0) return;

	var x = 0, y = 0, h = 0, node;
	var p1 = 0, p2 = 0;
	for (var i = 0; i < items.length; i++) {
		node = items[i];
		if (x > 0 && x + this.hgap + node.getProperty("width") > bounds.width) {
			// create new line
			y += h + this.vgap;
			x = 0;h = 0;p1 = 0;p2++;
		}
		node._flPos = [p1, p2];
		node.moveTo([bounds.x + x, bounds.y + y]);
		x += this.hgap + node.getProperty("width");
		p1++;
		h = h < node.getProperty("height") ? node.getProperty("height") : h;
	}
	this.trigger(new Rectangle(bounds.x, bounds.y, bounds.width, y + h));
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           The SVG Renderer                                //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var SVGRenderer = gfw.SVGRenderer = function(graph, viewBase, config) {
	this.graph = graph;
	this.viewBase = viewBase;
	this.init(config);
	this.clear = true;

	graph.on(Graph.EVENT_TYPES.SHOW, function() {
		//this.redraw();
	}, this);
	graph.on(Graph.EVENT_TYPES.END_UPDATE, function(type, changes) {
		this.redraw(changes);

		/*if(! changes) return;
		var layer = this.getCellLayer();

		_.each(changes.add(), function(cell) {
			this.appendNode(layer, cell);
		}, this);

		_.each(changes.remove(), function(cell) {
			this.getShapes(cell).remove();
		}, this);*/
	}, this);
	graph.on(Graph.EVENT_TYPES.REFRESH, this.refreshGraph, this);
	graph.on(Graph.EVENT_TYPES.VERTEX_CREATED, function(type, vertex) {
		this.appendNode(this.getCellLayer(), vertex);
	}, this);
	graph.on(Graph.EVENT_TYPES.VERTEX_REMOVED, function(type, vertices) {
		this.getShapes(vertices).remove();
	}, this);
	graph.on(Graph.EVENT_TYPES.EDGE_CREATED, function(type, edge) {
		this.appendNode(this.getCellLayer(), edge);
	}, this);
	graph.on(Graph.EVENT_TYPES.EDGE_REMOVED, function(type, edges) {
		this.getShapes(edges).remove();
	}, this);
	graph.on(Graph.EVENT_TYPES.EDGE_CHANGED, function(type, edge) {
		this.refreshLinks(this.getShapes(edge));
	}, this);
	graph.on(Graph.EVENT_TYPES.CELL_PROPERTY_CHANGE, function(type, cell, name) {
		switch (name) {
			case 'label':
				d3.select('g#' + cell.id + '>.label').remove();
				this.appendNode(this.getShapes(cell), {
					getLabelNode: function() { return cell.getLabelNode(); },
					template: _.template(this.getLabelTemplate(), null, {variable: 'data'})
				}, false);
				break;
			case 'indicators':
				break;
		}
	}, this);
	graph.on(Graph.EVENT_TYPES.RESET, this.reset, this);
};
_.extend(SVGRenderer.prototype, Config);

SVGRenderer.prototype.redraw = function() {
	if (this.clear) {
		var root = this.graph.getCurrentRoot();

		var buf = new StringBuffer('<svg width="100%" height="100%">');
		this.addDefs(buf);
		this.drawNode(root, buf);
		buf.append('</svg>');
		this.viewBase.innerHTML = buf.toString();
		this.svg = d3.select(this.viewBase).select('svg');
		this.cellLayer = this.svg.select('g[ns=graph]');
		this.bindNode(this.cellLayer.node(), root);
		this.refreshGrid();
		this.clear = false;
	} else {

		var layer = this.getCellLayer();
		var changes = this.graph.changes;

		if(changes) {
			_.each(changes.add(), function(cell) {
				this.appendNode(layer, cell);
			}, this);

			_.each(changes.remove(), function(cell) {
				this.getShapes(cell).remove();
			}, this);
		}

	}
};

SVGRenderer.prototype.bindNode = function(element, cell) {
	element.__data__ = cell;

	if (cell.isContainer && cell.isContainer()) {
		var children = cell.children, child;
		_.each(dom.getChildren(element), function(childNode, index) {
			child = children[index];
			childNode.__data__ = child;
			if (child.isContainer && child.isContainer())
				this.bindNode(childNode, child);
		}, this);
	}
};

/**
 * Append the given shape to the parent and bind the given data.
 */
SVGRenderer.prototype.appendNode = function(parent, data, bind) {
	if (_.isUndefined(bind)) bind = true;
	var svg = this.drawNode(data);
	var node = d3.select(svg).select('g').node();
	if (bind)
		parent.append(function() { return node; }).datum(data);
	else
		parent.append(function() { return node; }).datum(null);
	return node;
};

SVGRenderer.prototype.appendNodes = function(parent, data, bind) {
	var nodes = [];
	_.each(data, function(datum) {
		nodes.push(this.appendNode(parent, datum, bind));
	}, this);
	return nodes;
};

SVGRenderer.prototype.addDefs = function(buf) {
	var markers = EdgeMarker.getMarkers(this.graph);
	if (markers.length > 0) {
		buf.append('<defs>');
		_.each(markers, function(marker) {
			buf.append('<marker id="').append(marker.id).append('" markerWidth="').append(marker.size).append('" markerHeight="').append(marker.size)
			   .append('" refx="').append(marker.ref[0]).append('" refy="').append(marker.ref[1]).append('" orient="auto" viewBox="')
			   .append(marker.viewBox.x).append(' ').append(marker.viewBox.y).append(' ').append(marker.viewBox.width).append(' ').append(marker.viewBox.height)
			   .append('" markerUnits="userSpaceOnUse"').append(' style="fill:').append(marker.fill).append('">');
			if (_.isString(marker.shape))
				buf.append(marker.shape);
			else {
				// TODO the shape should go through the drawShape API. Hack for now.
				switch (marker.shape.type) {
					case 'polygon':
						buf.append('<polygon points="');
						_.each(marker.shape.points, function(point) {
							buf.append(point[0]).append(',').append(point[1]).append(' ');
						});
						buf.append('"/>');
						break;
				}
			}
			buf.append('</marker>');
		});

		// Appending a grid of
		var gridSize = this.graph.getProperty("gridSize");
		buf.append('<pattern id="GridPattern" width="' + gridSize + '" height="' + gridSize + '" patternUnits="userSpaceOnUse">')
		   .append('<ellipse cx="0" cy="0" rx="1" ry="1" fill="#999999"/>')
		   .append('<ellipse cx="0" cy="').append(gridSize).append('" rx="1" ry="1" fill="#999999"/>')
		   .append('<ellipse cx="').append(gridSize).append('" cy="0" rx="1" ry="1" fill="#999999"/>')
		   .append('<ellipse cx="').append(gridSize).append('" cy="').append(gridSize).append('" rx="1" ry="1" fill="#999999"/>')
		   .append('</pattern>');
		buf.append('</defs>');
	}
};

SVGRenderer.prototype.drawNode = function(cell, buf) {
	if (buf) {
		this.applyTemplate(cell, buf);
	} else {
		buf = new StringBuffer();
		buf.append('<svg>');
		this.applyTemplate(cell, buf);
		buf.append('</svg>');
		var temp = dom.createElement('div', null, null, buf.toString());
		return d3.select(temp).select('svg').node();
	}
};

SVGRenderer.prototype.applyTemplate = function(cell, buf) {
	var template = cell.template || (cell.type && cell.type.template);
	if (!template) {
		var type = cell.type;
		switch (type.getProperty('role')) {
			case 'vertex':
			case 'node': // should be deprecated
				template = this.createVertexTemplate(cell.type);
				break;
			case 'edge':
			case 'connection': // should be deprecated
				template = this.createEdgeTemplate(cell.type);
				break;
			case 'modifier':
				template = this.createModifierTemplate(cell.type);
				break;
		}
	}

	var buf2;
	if (cell.isContainer && cell.isContainer()) {
		buf2 = new StringBuffer();
		_.each(cell.children, function(child) {
			this.applyTemplate(child, buf2);
		}, this);
		var arr = template(cell).split('$children');
		buf.append(arr[0]).append(buf2).append(arr[1]);
	} else
		buf.append(template(cell));

	var modifiers = cell.modifiers || (cell.getModifiers && cell.getModifiers());
	if (modifiers) {
		buf2 = new StringBuffer('<g class="modifier" ns="modifier">');
		_.each(modifiers, function(modifier, name) {
			this.applyTemplate(modifier, buf2);
		}, this);
		buf2.append('</g>');
		var str = _.last(buf.buffer);
		str = s.insert(str, str.length - 4, buf2.toString());
		buf.buffer[buf.buffer.length - 1] = str;
	}
};

SVGRenderer.prototype.createVertexTemplate = function(type) {
	// hack for now.
	var template;
	if (type.name == "root") {
		template = _.template('<g id="<%=data.id%>" class="<%=data.getComputedClassName()%>" ns="graph" transform="translate(<%=data.getProperty("' +
			'x' + '")%>,<%=data.getProperty("' + 'y' + '")%>)scale(<%print(data.getProperty("' + 'scale' + '")||1.0)%>)">$children</g>', null, {variable: "data"});
	} else {
		var buf = new StringBuffer();
		buf.append('<g id="<%=data.id%>" class="<%=data.getComputedClassName()%>" ns="<%=data.getNamespace()%>" transform="translate(<%=data.getBounds().getCenterX()%>,<%=data.getBounds().getCenterY()%>)">');

		var shapeConfig = type.getProperty("shapeConfig");
		if (shapeConfig.shape)
			this.drawShapeTemplate(shapeConfig, buf);

		buf.append(this.getLabelTemplate());
		buf.append('</g>');
		template = _.template(buf.toString(), null, {variable: "data"});
	}

	type.template = template;
 	return template;
};

SVGRenderer.prototype.createEdgeTemplate = function(type) {
	var template;
	var buf = new StringBuffer();
	buf.append('<g id="<%=data.id%>" class="<%=data.getComputedClassName()%>" ns="<%=data.getNamespace()%>">');

	var shapeConfig = type.getProperty("shapeConfig");
	if (shapeConfig.shape)
		this.drawShapeTemplate(shapeConfig, buf);

	buf.append(this.getLabelTemplate());

	buf.append('</g>');
	template = _.template(buf.toString(), null, {variable: "data"});
	type.template = template;
	return template;
};

SVGRenderer.prototype.createModifierTemplate = function(type) {
	var template;
	var buf = new StringBuffer();
	buf.append('<g class="').append(type.name).append('" ns="').append(type.name).append('" transform="translate(<%=data.getBounds().getCenterX()%>,<%=data.getBounds().getCenterY()%>)">');
	var shapeConfig = type.getProperty("shapeConfig");
	if (shapeConfig.shape)
		this.drawShapeTemplate(shapeConfig, buf);

	// Draw Label
	buf.append(this.getLabelTemplate());

	buf.append('</g>');
	template = _.template(buf.toString(), null, {variable: "data"});
	type.template = template;
	return template;
};

/**
 * Render a shape as specified by config. This should be a dispatcher method that delegates the actual shape drawing
 * to different methods. There should be a shape registry that maps shape types to functions.
 * @param config the shape config
 * @render whether to just return a string or the actual SVG element. (string only for now).
 */
SVGRenderer.prototype.drawShapeTemplate = function(config, buf) {
	// @TODO hack now, should have separate methods for each shape.
	switch (config.shape) {
		case 'ellipse':
			buf.append('<ellipse cx="0" cy="0" rx="<%=data.getBounds().width/2%>" ry="<%=data.getBounds().height/2%>"></ellipse>');
			break;
		case 'rectangle':
			buf.append('<rect x="<%=-data.getBounds().width/2%>" y="<%=-data.getBounds().height/2%>" width="<%=data.getBounds().width%>" height="<%=data.getBounds().height%>"');
			//buf.append('<rect x="').append(-config.width/2).append('" y="').append(-config.height/2).append('" width="').append(config.width).append('" height="').append(config.height).append('"');
			if (config.rounded)
				buf.append(' rx="9" ry="9">');
			else
				buf.append('>');
			buf.append('</rect>');
			break;
		case 'image':
			buf.append('<image x="<%=-data.getBounds().width/2%>" y="<%=-data.getBounds().height/2%>" width="<%=data.getBounds().width%>" height="<%=data.getBounds().height%>" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="').append(config.image).append('"></image>');
			break;
		case 'triangle':
			buf.append('<polygon points="<%=-data.getBounds().width/2%>,<%=-data.getBounds().height/2%> <%=data.getBounds().width/2%>,<%=-data.getBounds().height/2%> 0,<%=data.getBounds().height/2%>"></polygon>');
			break;
		case 'rhombus':
			buf.append('<polygon points="0,<%=-data.getBounds().height/2%> <%=data.getBounds().width/2%>,0 0,<%=data.getBounds().height/2%> <%=-data.getBounds().width/2%>,0"></polygon>');
			break;
		case 'hexagon':
			var vertical = config.direction == 'north' || config.direction == 'south';
			if (vertical)
				buf.append('<polygon points="0,<%=-data.getBounds().height/2%> <%=data.getBounds().width/2%>,<%=-data.getBounds().height/4%> <%=data.getBounds().width/2%>,<%=data.getBounds().height/4%> 0,<%=data.getBounds().height/2%> <%=-data.getBounds().width/2%>,<%=data.getBounds().height/4%> <%=-data.getBounds().width/2%>,<%=-data.getBounds().height/4%>"></polygon>');
			else
				buf.append('<polygon points="<%=-data.getBounds().width/2%>,0 <%=-data.getBounds().width/4%>,<%=-data.getBounds().height/2%> <%=data.getBounds().width/4%>,<%=-data.getBounds().height/2%> <%=data.getBounds().width/2%>,0 <%=data.getBounds().width/4%>,<%=data.getBounds().height/2%> <%=-data.getBounds().width/4%>,<%=data.getBounds().height/2%>"></polygon>');
			break;
		case 'connector':
			buf.append('<path class="sleeper" d="<%=gfw.SVGRenderer.getPathData(data.getPoints())%>"></path>');
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
			break;
		case 'swimlane':
		default:
			buf.append('<g></g>');
	}
};

SVGRenderer.prototype.getLabelTemplate = function() {
	if (!this.labelTemplate) {
		var buf = new StringBuffer();
		buf
			.append('<% var label = data.getLabelNode(); if (label) {%>')
			.append('<g class="label" ns="label" text-anchor="<%=label.anchor%>" transform="translate(<%=label.bounds.getCenterX()%>,<%=label.bounds.getCenterY()%>)">')
			.append('<% if (label.backgroundColor) {%>')
			.append('<rect x="<%=-label.bounds.width/2%>" y="<%=-label.bounds.height/2%>" width="<%=label.bounds.width%>" height="<%=label.bounds.height%>" fill="<%=label.backgroundColor%>"/>')
			.append('<% } if (_.isArray(label.label)) { _.each(label.label, function(value, line) {%>')
			.append('<text dx="<%=label.dx%>" dy="<%=label.dy + label.lineHeight * line%>"><%=value%></text>')
			.append('<%});} else { %>')
			.append('<text><%=label.label%></text>')
			.append('<%}%></g><%}%>');
		this.labelTemplate = buf.toString();
	}
	return this.labelTemplate;
};

SVGRenderer.getPathData = function(points) {
	if (!points || points.length == 0) return '';

	var buf = new StringBuffer();
	buf.append('M');
	_.each(points, function(pt, i) {
		if (i == 0)
			buf.append(Math.round(pt.x)).append(',').append(Math.round(pt.y));
		else
			buf.append(' L').append(Math.round(pt.x)).append(',').append(Math.round(pt.y));
	});
	return buf.toString();
};

SVGRenderer.prototype.refreshGraph = function() {
	if (!this.svg) return;

	var root = this.graph.getCurrentRoot();
	var x = root.getProperty('x');
	var y = root.getProperty('y');
	var scale = this.graph.scale();
	this.cellLayer.attr("transform", 'translate(' + x + ',' + y + ')scale(' + scale + ')');
	if (this.markerLayer)
		this.markerLayer.attr("transform", 'translate(' + x + ',' + y + ')scale(' + scale + ')');
	this.refreshGrid();
};

SVGRenderer.prototype.refreshNodes = function(nodes) {
	if (!this.svg) return;

	nodes.attr("transform", function(vertex) {
		return 'translate(' + vertex.getBounds().getCenterX() + ',' + vertex.getBounds().getCenterY() + ')';
	});
};

SVGRenderer.prototype.refreshLinks = function(links) {
	if (!this.svg) return;

	links.selectAll('path').attr("d", function() {
		return SVGRenderer.getPathData(this.parentNode.__data__.getPoints());
	});

	links.selectAll('.label').attr('transform', function() {
		var labelNode = this.parentNode.__data__.getLabelNode();
		return 'translate(' + labelNode.bounds.getCenterX() + ',' + labelNode.bounds.getCenterY() + ')';
	})

	// IE 10, 11 bug, links with markers not updating while dragging.
	var ie = dom.isIE();
	if (ie && (ie == 10 || ie == 11)) {
		links.each(function() {
            this.parentNode.insertBefore(this, this);
        });
	}
};

SVGRenderer.prototype.refreshGrid = function() {
  	if (!this.svg) return;

	var showGrid = this.graph.hasProperty("showGrid") ? this.graph.getProperty("showGrid") : this.graph.getProperty("gridEnabled");
	if (showGrid) {
		if (!this.grid) {
			this.grid = this.svg.insert('g', ':first-child').attr('id', 'Grid');
			this.grid.append('rect').attr("fill", "url(#GridPattern)");
		}
		var size = this.graph.getProperty("gridSize");
		var t = this.graph.translate();
		var s = this.graph.scale();
		var viewport = this.graph.viewport();
		var xmod = t[0] - Math.floor(t[0]/(size*s)) * (size*s);
		var ymod = t[1] - Math.floor(t[1]/(size*s)) * (size*s);
		this.grid.attr("transform", 'translate(' + xmod + ',' + ymod + ')scale(' + s + ')');
		this.grid.select('rect').attr({
			width: viewport.width / s + 2*size*s,
			height: viewport.height / s + 2*size*s,
			x: -size*s,
			y: -size*s
		});
	} else if (this.grid) {
		this.grid.remove();
		delete this.grid;
	}
};

SVGRenderer.prototype.getBounds = function() {
	if (!this.cellLayer)
		return new Rectangle(0, 0, 0, 0);

	var bbox = this.cellLayer.node().getBBox();
	return new Rectangle(bbox.x, bbox.y, bbox.width, bbox.height);
};

SVGRenderer.prototype.getShapes = function(cells) {
	if (!this.svg) return null;
	if (!_.isArray(cells)) cells = [cells];
	return this.svg.selectAll('[ns=vertex],[ns=edge]').data(cells, function(d) { return d.id; });
};

SVGRenderer.prototype.getCellLayer = function() {
	return this.cellLayer;
};

/**
 * Returns the layer where all the markers reside
 */
SVGRenderer.prototype.getMarkerLayer = function() {
	if (!this.svg) return null;
	if (!this.markerLayer) {
		this.markerLayer = this.svg.append('svg:g').attr('id', 'markers');
		this.refreshGraph();
	}
	return this.markerLayer;
};

SVGRenderer.prototype.reset = function() {
	this.clear = true;
	if (this.svg) this.svg.remove();
	delete this.svg;
	delete this.cellLayer;
	delete this.markerLayer;
	delete this.grid;
};

SVGRenderer.prototype.destroy = function() {
	this.reset();
	this.removeProperty();
	delete this.graph;
	delete this.viewBase;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                   The Outline renderer for the Graph                      //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

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

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                  Overlay                                  //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var Overlay = gfw.Overlay = (function() {
	var overlay;

	function showOverlay(cell, html, x, y, w, h, styles) {
		hideOverlay();
		if (cell.graph.vertexHandler)
			cell.graph.vertexHandler.hideConnectionMarker();
		overlay = dom.createElement('div', null, {
			position:"absolute", left: x + 'px', top: y + 'px',
			width: w, height: h,
			background: styles.fillColor,
			border: "solid " + styles.strokeWidth + "px " + styles.strokeColor
		}, html);
		cell.graph.viewBase.appendChild(overlay);
		d3.select(overlay).on('mouseleave', hideOverlay);
	}

	function showOverlayFromModifier(modifier, styles) {
		if (!modifier) return;
		var cell = modifier.cell;
		var bounds = modifier.getBounds();
		var cellBounds = cell.getBounds();
		var pos = util.unscale(cell.graph, [cellBounds.getCenterX() + bounds.x, cellBounds.getCenterY() + bounds.y]);

		var content;
		if (!modifier.showHeader) { //@HACK
			content = modifier.getProperty('tooltip');
		} else {
			var label = cell.getProperty('label');
			var messageHead = '<p style="margin: 10px; width:100%; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"><b>' + s.escapeHTML(label) + '</b></p>';
			var messageBody = '<p style="margin: 10px;"/>' + modifier.getProperty('tooltip');
			content = messageHead + messageBody;
		}

		showOverlay(cell, content, pos[0], pos[1], 'auto', null, styles);
	}

	function hideOverlay() {
		if (overlay) {
			d3.select(overlay).remove();
			overlay = null;
		}
	}

	return {
		showOverlay: showOverlay,
		showOverlayFromModifier: showOverlayFromModifier,
		hideOverlay: hideOverlay
	};
})();

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                  Markers for the Graph Interactions                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var ConnectionMarker = gfw.ConnectionMarker = (function() {
	var padding = 10;
	var shapes = [
		{
			shape: "image",
			image: "webwb/pzConnectionMarkerLeft.svg",
			width: 29, height: 29, x: -padding, y: 0, h: -1, v: 0.5
		},
		{
			shape: "image",
			image: "webwb/pzConnectionMarkerUp.svg",
			width: 29, height: 29, x: 0, y: -padding, h: 0.5, v: -1
		},
		{
			shape: "image",
			image: "webwb/pzConnectionMarkerRight.svg",
			width: 29, height: 29, x: padding, y: 0, h: -4, v: 0.5
		},
		{
			shape: "image",
			image: "webwb/pzConnectionMarkerDown.svg",
			width: 29, height: 29, x: 0, y: padding, h: 0.5, v: -4
		}
	];

	var template;

	//DK_ICONS: ['webwb/pzmxgeditor_connectorDkLeft2.png', 'webwb/mxgrapheditor/pzmxgeditor_connectorDkTop2.png',
	//	'webwb/mxgrapheditor/pzmxgeditor_connectorDkRight2.png', 'webwb/mxgrapheditor/pzmxgeditor_connectorDkBottom2.png'];


	function getMarker(vertex, renderer) {
		var center = vertex.getBounds().getCenter();
		var left = vertex.getBounds().x, right = vertex.getBounds().right(), top = vertex.getBounds().y, bottom = vertex.getBounds().bottom();
		var data = {x: center.x, y: center.y, template: getTemplate(renderer), images: [], vertex: vertex};
		_.each(shapes, function(shape) {
			var geom = util.getRelativeGeometry(shape);
			var pos = util.getRelativePosition(vertex.getBounds(), geom);
			left = Math.min(left, center.x + pos[0] - shape.width / 2);
			right = Math.max(right, center.x + pos[0] + shape.width / 2);
			top = Math.min(top, center.y + pos[1] - shape.height / 2);
			bottom = Math.max(bottom, center.y + pos[1] + shape.height / 2);
			data.images.push(
				{ x: pos[0], y: pos[1], width: shape.width, height: shape.height, url: shape.image }
			);
		});
		data.bounds = new Rectangle(left, top, right - left, bottom - top);
		return data;
	}

	function getTemplate() {
		if (!template) {
			var buf = new StringBuffer();
			buf.append('<g ns="connectionMarker" style="cursor:' + Cursor.CONNECTOR_DRAG + '" transform="translate(<%=data.x%>,<%=data.y%>)"><% _.each(data.images, function(image) {%>')
			   .append('<image x="<%=image.x-image.width/2%>" y="<%=image.y-image.height/2%>" width="<%=image.width%>" height="<%=image.height%>" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="<%=image.url%>"></image>')
			   .append('<%})%></g>');
			template = _.template(buf.toString(), null, {variable: "data"});
		}
		return template;
	}

	return {
		getMarker: getMarker
	};
})();

var EdgeHandle = gfw.EdgeHandle = (function() {
	var size = 10;
	var shape = {
		shape: "rectangle",
		width: size, height: size
	};

	var template;

	function getHandles(edge) {
		var handles = [];
		var points = edge.getPoints();
		var handle = _.clone(shape);
		_.extend(handle, {
			x: points[0].x - handle.width/2,
			y: points[0].y - handle.height/2,
			source: true,
			template: getTemplate(),
			edge: edge
		});
		handles.push(handle);
		handle = _.clone(shape);
		_.extend(handle, {
			x: points[points.length-1].x - handle.width/2,
			y: points[points.length-1].y - handle.height/2,
			source: false,
			template: getTemplate(),
			edge: edge
		});
		handles.push(handle);
		return handles;
	}

	function getTemplate() {
		if (!template) {
			template = _.template('<g id="<%=data.edge.id%>" ns="edgehandle" style="cursor: pointer;"><rect x="<%=data.x%>" ' +
				'y="<%=data.y%>" width="<%=data.width%>" height="<%=data.height%>" fill="white" stroke="black" ' +
				'pointer-events="all"></rect></g>',
				null, {variable: "data"});
		}
		return template;
	}

	return {
		getHandles: getHandles
	};
})();

/**
 * Implement Guides.
 * @type {Function}
 */
var Guide = gfw.Guide = function(graph, cells, pos) {
	this.graph = graph;
	this.gridEnabled = graph.getProperty("gridEnabled");
	this.guidesEnabled = graph.getProperty("guidesEnabled");
	this.gridSize = graph.getProperty("gridSize");
	this.tolerance = this.gridSize / 2;
	this.horizontal = true;
	this.vertical = true;
	var bounds = [];
	_.each(cells, function(cell) { bounds.push(cell.getBounds()); });
	this.bounds = Rectangle.union(bounds);
	this.offset = [this.bounds.getCenterX() - pos[0], this.bounds.getCenterY() - pos[1]];
	// create the list of bounds to match
	this.alignX = [], this.alignY = [];
	var b;
	_.forEach(graph.getCurrentRoot().children, function(cell) {
		if (cell instanceof Vertex && cell.isVisible() && !_.includes(cells, cell)) {
			b = cell.getBounds();
			this.alignX.push(b.getCenterX());
			this.alignX.push(b.x);
			this.alignX.push(b.right());
			this.alignY.push(b.getCenterY());
			this.alignY.push(b.y);
			this.alignY.push(b.bottom());
		}
	}, this);
	this.alignX = this.alignX.sort(function(a, b) { return a-b; });
	this.alignX = _.uniq(this.alignX, true);
	this.alignY = this.alignY.sort(function(a, b) { return a-b; });
	this.alignY = _.uniq(this.alignY, true);
};

Guide.template = _.template('<g><path fill="none" stroke="#a8a8a8" stroke-dasharray="3 3" pointer-events="none"/></g>');

Guide.prototype.move = function(pos) {
	pos = [pos[0] + this.offset[0], pos[1] + this.offset[1]];
	var overrideX = false;
	var overrideY = false;
	var newPos = [pos[0], pos[1]];

	if (this.guidesEnabled && ((this.horizontal && this.alignX.length > 0) || (this.vertical && this.alignY.length > 0))) {
		var left = pos[0] - this.bounds.width/ 2, right = pos[0] + this.bounds.width/ 2, center = pos[0];
		var top = pos[1] - this.bounds.height/ 2, bottom = pos[1] + this.bounds.height/ 2, middle = pos[1];
		var t = this.tolerance;

		// try to snap to position
		if (this.horizontal) {
			_.forEach(this.alignX, function(x, index) {
				if (Math.abs(center - x) < t) {
					newPos[0] = x;
					overrideX = true;
				} else if (Math.abs(left - x) < t) {
					newPos[0] = x + this.bounds.width/2;
					overrideX = true;
				} else if (Math.abs(right - x) < t) {
					newPos[0] = x - this.bounds.width/2;
					overrideX = true;
				}
				if (overrideX) {
					this.show(x, true);
					return false;
				}
			}, this);
			if (!overrideX) this.hide(true);
		}

		if (this.vertical) {
			_.forEach(this.alignY, function(y, index) {
				if (Math.abs(middle - y) < t) {
					newPos[1] = y;
					overrideY = true;
				} else if (Math.abs(top - y) < t) {
					newPos[1] = y + this.bounds.height/2;
					overrideY = true;
				} else if (Math.abs(bottom - y) < t) {
					newPos[1] = y - this.bounds.height/2;
					overrideY = true;
				}
				if (overrideY) {
					this.show(y, false);
					return false;
				}
			}, this);
			if (!overrideY) this.hide(false);
		}
	}

	if (this.gridEnabled && (!overrideX || !overrideY)) {
		var refPos = [pos[0] - this.bounds.width/2, pos[1] - this.bounds.height/2];
		// Grid snapping takes precedence to alignment snapping
		//if (!overrideX) {
			var xoff = refPos[0] % this.gridSize;
			xoff = xoff > this.gridSize / 2 ? this.gridSize - xoff : -xoff;
			newPos[0] = refPos[0] + xoff + this.bounds.width/2;
		//}

		//if (!overrideY) {
			var yoff = refPos[1] % this.gridSize;
			yoff = yoff > this.gridSize / 2 ? this.gridSize - yoff : -yoff;
			newPos[1] = refPos[1] + yoff + this.bounds.height/2;
		//}
	}
	return [newPos[0] - this.offset[0], newPos[1] - this.offset[1]];
};

Guide.prototype.show = function(p, horizontal) {
	var guide, viewport = this.graph.viewport(true);
	if (horizontal) {
		if (!this.hguide)
			this.hguide = d3.select(this.graph.renderer.appendNode(this.graph.renderer.getMarkerLayer(), {template: Guide.template}, false));
		this.hguide.select('path').attr('d', "M" + p + ',' + (viewport.y - 10) + ' L' + p + ',' + (viewport.bottom() + 10));
	} else {
		if (!this.vguide)
			this.vguide = d3.select(this.graph.renderer.appendNode(this.graph.renderer.getMarkerLayer(), {template: Guide.template}, false));
		this.vguide.select('path').attr('d', "M" + (viewport.x - 10) + ',' + p + ' L' + (viewport.right() + 10) + ',' + p);
	}
};

Guide.prototype.hide = function(horizontal) {
	if (_.isUndefined(horizontal)) {
		this.hide(true);
		this.hide(false);
		return;
	}
	if (horizontal) {
		if (this.hguide) {
			this.hguide.remove();
			delete this.hguide;
		}
	} else {
		if (this.vguide) {
			this.vguide.remove();
			delete this.vguide;
		}
	}
};

Guide.prototype.destroy = function() {
	this.hide();
	delete this.graph;
};

var Cursor = gfw.Cursor = {
	CONNECTOR_DRAG: "pointer",
	CONNECTOR_DROP: "pointer",
	MOVABLE: "default",
	MOVABLE_EDGE: "default",
	MOVABLE_VERTEX: "move",
	PANNING_DOWN:"url('images/pzMxGraphHandClosed.cur'), pointer",
	PANNING_UP:"url('images/pzMxGraphHandOpen.cur'), pointer",
	POINTER_MOVE_MODE: "url('images/pzMxGraphMoveWithPointer.cur'), pointer",
	RUBBERBAND:"default",
	SELECT_MODE: "default",
	SELECT_MOVE_MODE: "url('images/pzMxGraphMoveWithArrow.cur'), pointer",

	updateCursor: function(type, ns, cell, event) {
		var view = cell instanceof Cell ? cell.graph.viewBase: cell.viewBase;
		if (cell instanceof Vertex) {
			if (type == 'mouseenter') {
				if (cell.canMove())
					view.style.cursor = Cursor.POINTER_MOVE_MODE;
			}
			if (type == 'mouseleave')
				view.style.cursor = Cursor.getDefaultCursor(cell.graph);
		} else if (cell instanceof Edge) {
		} else if (cell instanceof Graph) {
			if (type == 'mouseenter')
				view.style.cursor = Cursor.getDefaultCursor(cell);
			if (type == 'mousedown') {
				var pan = (cell.getProperty("defaultClickMode") == "pan") ^ (event.ctrlKey || event.shiftKey);
				if (pan)
					view.style.cursor = Cursor.PANNING_DOWN;
				else
					view.style.cursor = Cursor.SELECT_MODE;
			}
			if (type == 'mouseup') {
				view.style.cursor = Cursor.getDefaultCursor(cell);
			}
		}
	},
	// not sure if this is needed.
	getDefaultCursor: function(cell) {
		if (cell instanceof Vertex) {
			if (cell.canMove())
				return Cursor.SELECT_MOVE_MODE;
			else
				return Cursor.SELECT_MODE;
		} else if (cell instanceof Edge) {
			return Cursor.SELECT_MODE;
		}
		else if (cell instanceof Graph) { // we are getting default cursor for Graph;
			if (cell.getProperty("defaultClickMode") == "pan")
				return Cursor.PANNING_UP;
			else
				return Cursor.SELECT_MODE;
		}
	}
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//           The Key Utility CLass for the Event Dispatcher          	     //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////
var KeyUtils = gfw.Key = function() {
};

KeyUtils.prototype.getKeyEvent =  function(event) {
	if (!event || !event instanceof KeyboardEvent) {
		return null;
	}

	var key = event.keyCode || event.which;

	// Need to find a way to avoid this
	if (key >= 16 && key <= 18) {
		key = null;
	}

	return this.getKeyData(event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, key);
};

KeyUtils.prototype.getKeyData =  function(ctrl, alt, shift, meta, key) {
	var buf = new StringBuffer();

	if (ctrl) {
		buf.append("CTRL");
	}

	if (alt) {
		buf.append("ALT");
	}

	if (shift) {
		buf.append("SHIFT");
	}

	if (meta) {
		buf.append("META");
	}

	if (key) {
		buf.append(key);
	}

	return buf.toString(".");
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                  The Event Dispatcher for the Graph                       //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var EventDispatcher = gfw.EventDispatcher = function(graph) {
	this.graph = graph;
	this.base = d3.select(graph.viewBase);
	this.utils = new KeyUtils();
	this.listeners = {};

	// Simulate mouseenter/mouseleave events
	this.enterStack = [];
	this.graph.on(Graph.EVENT_TYPES.MODE_CHANGE, this.checkGraphMode, this);
	this.checkGraphMode();
};

// TODO: Graph.mode is currently not defined
EventDispatcher.prototype.checkGraphMode = function() {
	if (Graph.mode | Graph.ALLOW_INTERACTION_EVENTS)
		this.startEvents();
	else
		this.stopEvents();
};

/**
 * Start listening for events.
 */
EventDispatcher.prototype.startEvents = function() {
	var f = _.bind(this.dispatch, this);
	this.base.on('mousedown', f)
		.on('mouseover', f)
		.on('mouseout', f)
		.on('mouseenter', f)
		.on('mouseleave', f)
		.on('dblclick', f)
		.on('click', f)
		.on('contextmenu', f);

	this.startPositionEvents();
	this.startZoomEvents();
	this.startKeyEvents();
};

EventDispatcher.prototype.startPositionEvents = function() {
	var t = _.throttle(this.getPosition, 100, {'leading':true, 'trailing':false});
	var f = _.bind(t, this);

	this.base
		.on('mousemove.p', f);
};

EventDispatcher.prototype.startZoomEvents = function() {
	// Initialize zoom listener
	var zoomHandler = _.bind(function() {
		if (this.dragging) return;
		this.sendDispatch(d3.event.type, 'graph', this.graph);
	}, this);
	this.zoom = d3.behavior.zoom()
		.scaleExtent([this.graph.getProperty("minZoom"), this.graph.getProperty("maxZoom")])
		.on("zoomstart", zoomHandler)
		.on("zoom", zoomHandler)
		.on("zoomend", zoomHandler);
	this.base.call(this.zoom).on('mousedown.zoom', null).on("dblclick.zoom", null);
};

EventDispatcher.prototype.startKeyEvents = function() {
	var f = _.bind(this.dispatch, this);
	d3.select(document)
		.on('keydown', f)
		.on('keyup', f);
};

/**
 * Stop listening for events.
 */
EventDispatcher.prototype.stopEvents = function() {
	this.base.on('mousedown', null)
		.on('mouseover', null)
		.on('mouseout', null)
		.on('mouseenter', null)
		.on('mouseleave', null)
		.on('dblclick', null)
		.on('click', null)
		.on('contextmenu', null);

	this.stopPositionEvents();
	this.stopZoomEvents();
	this.stopKeyEvents();
};

EventDispatcher.prototype.stopPositionEvents = function() {
	this.base
		.on('mousemove.p', null);
};

EventDispatcher.prototype.stopZoomEvents = function() {
	this.base.on("mousedown.zoom", null)
		.on("mousemove.zoom", null)
		.on("dblclick.zoom", null)
		.on("touchstart.zoom", null)
		.on("wheel.zoom", null)
		.on("mousewheel.zoom", null)
		.on("MozMousePixelScroll.zoom", null);
};

EventDispatcher.prototype.stopKeyEvents = function() {
	d3.select(document)
		.on('keydown', null)
		.on('keyup', null);
};

EventDispatcher.prototype.getEventInfo = function() {
	var event = d3.event;
	var target = event.target;
	var buf = new StringBuffer(), ns, data, stack = [];

	while (!data && target && target != document) {
		data = target.__data__;
		if (data)
			event.dataTarget = target;
		ns = target.getAttribute('ns');
		if (ns) {
			if (!event.nsTarget) event.nsTarget = target;
			splice.apply(stack, [0, 0, target]);
			buf.prepend(ns);
		}
		target = target.parentNode;
	}
	if (!data) return null;

	// target stack is a stack of all the ns targets up to the one with the data binding.
	event.targetStack = stack;
	ns = buf.toString('.');
	if (ns == '') ns = 'graph';
	return {data: data, ns: ns};
};

/**
 * The main dispatcher method, it dispatches the event and data to registered handlers.
 */
EventDispatcher.prototype.dispatch = function() {
	var event = d3.event, type = event.type;

	// Do not dispatch other events if we are dragging.
	if (this.dragging || dom.eventFromInput(event)) return;

	var data, ns, pos = this.getPosition(), info;
	if (type == 'keydown' || type == 'keyup') {
		data = this.graph;
		ns = this.utils.getKeyEvent(event);


		//pos = null;
	} else {
		info = this.getEventInfo();
		if (!info) return;
		data = info.data;
		ns = info.ns;
		//pos = this.getPosition();
	}

	// See if we should create drag events
	if (type == 'mousedown' && event.button == 0 /*only drag on left click*/) {
		// Create drag object.
		var dragObject = {data: data, pos: ns == 'graph' ? d3.mouse(this.graph.viewBase) : pos};
		this.dragging = false;
		// Start listening for mouse move.
		var w, dragPos;

		var mousemove = _.bind(function() {
			var currentPos = this.getPosition();
			if (!this.dragging) {
				// check if the mouse has moved. IE always fire mousemove after mousedown even if the mouse hasn't moved yet.
				if (dragObject.pos[0] == currentPos[0] && dragObject.pos[1] == currentPos[1]) return;

				// start dragging
				this.dragging = true;
				this.sendDispatch('dragstart', ns, dragObject.data, dragObject.pos);
			}
			if (ns == "graph")
				dragPos = d3.mouse(this.graph.viewBase);
			else
				dragPos = currentPos;
			this.getEventInfo();
			this.sendDispatch('drag', ns, dragObject.data, dragPos);
		}, this);
		var mouseup = _.bind(function() {
			if (ns == "graph")
				dragPos = d3.mouse(this.graph.viewBase);
			else
				dragPos = this.getPosition();
			var info = this.getEventInfo();

			if (this.dragging) {
				this.dragging = false;
				this.sendDispatch('dragend', ns, dragObject.data, dragPos);
			} else
				this.sendDispatch('mouseup', ns, info.data, dragPos);

			w.on('mousemove', null).on('mouseup', null);
		}, this);
		event.preventDefault();
		w = d3.select(window).on('mousemove', mousemove).on('mouseup', mouseup);
	}

	this.simulateEnterLeave(type, ns, data, pos);
	this.sendDispatch(type, ns, data, pos);

	// disable the default context menu
	if (type == 'contextmenu')
		event.preventDefault();
};

/**
 * try to simulate mouseenter/mouseleave events.
 */
EventDispatcher.prototype.simulateEnterLeave = function(type, ns, data, pos) {
	var last, i, j, item, stack;
	var clearEnterStack = _.bind(function(k) {
		k = k || 0;
		// Clear off the enter stack.
		while (this.enterStack.length >= k + 1) {
			last = this.enterStack.pop();
			this.sendDispatch('mouseleave', last.ns, last.data, pos);
		}
	}, this);

	if (ns && ns != 'graph') {
		var getNS = function() {
			var buf = new StringBuffer();
			for (j = 0; j <= i; j++)
				buf.append(stack[j].getAttribute("ns"));
			return buf.toString('.');
		};
		if (type == 'mouseover') {
			stack = d3.event.targetStack;
			for (i = 0; i < stack.length; i++) {
				if (i < this.enterStack.length) {
					if (this.enterStack[i].target != stack[i]) {
						clearEnterStack(i);
					} else
						continue;
				}
				item = {data: data, ns: getNS(), target: stack[i]};
				this.enterStack.push(item);
				this.sendDispatch('mouseenter', item.ns, data, pos);
				if (i == stack.length - 1)
					d3.select(item.target).on('mouseleave', _.bind(this.dispatch, this));
			}
		} else if (type == 'mouseleave') {
			last = this.enterStack.pop();
			if (last)
				d3.select(last.target).on('mouseleave', null);
		}
	}
	if (ns == 'graph' && this.enterStack.length > 0)
		clearEnterStack();
};

EventDispatcher.prototype.sendDispatch = function(type, ns, data, pos) {
	//if (type != 'mouseover' && type != 'mouseout' && ns != 'graph')
	//	util.log('EventDispatcher', "sendDispatch - " + type + '.' + ns + ';' + pos);
	var event = d3.event;
	var listeners, listener, key, i;
	var nsType = ns ? type + '.' + ns : type;
	for (key in this.listeners) {
		listeners = this.listeners[key];
		if (this.match(nsType, key)) {
			for (i = 0; i < listeners.length; i++) {
				listener = listeners[i];
				if (!listener.context)
					listener.callback.apply(window, [type, ns, data, pos, event]);
				else
					listener.callback.apply(listener.context, [type, ns, data, pos, event]);
			}
		}
	}
	// after dispatching, do not propagate.
	if (event.stopPropagation)
		event.stopPropagation();
};

/**
 * Check if the registered event type matches the real event type. "*" is allowed as a wild card.
 */
EventDispatcher.prototype.match = function(nsType, registeredType) {
	var arr = registeredType.split('*');
	if (arr.length == 1)
		return nsType == registeredType;

	var substr, i, index = 0;
	for (i = 0; i < arr.length; i++) {
		if (arr[i].length == 0) continue;
		substr = nsType.slice(index);
		index = substr.indexOf(arr[i]);
		if (index < 0)
			return false;
		index += arr[i].length;
	}
	return true;
};

EventDispatcher.prototype.getPosition = function() {
	var pos = util.scale(this.graph, d3.mouse(this.graph.viewBase));
	if(! _.isNaN(pos[0]) && ! _.isNaN(pos[1])) {
		this.lastPosition = pos;
	}
	return this.lastPosition;
};

/**
 * Registers a key event handler
 * // Key is object {ctrl, alt, shift, meta, code}
 */
EventDispatcher.prototype.registerKey = function(event, key, callback, context) {
	if (_.isArray(key)) {
		_.each(key, function(k) {
			this.registerKey(event, k, callback, context);
		}, this);
		return;
	}

	if(!_.isString(event)) {
		return;
	}

	key = this.utils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code)

	if(! key.length) {
		return;
	}

	var buf = new StringBuffer(event);
	key = buf.append(key);
	key = buf.toString(".");

	var listener = {callback: callback, context: context};
	this.listeners[key] || (this.listeners[key] = []);
	this.listeners[key].push(listener);
};

// TODO: Review since this is a just a copy
EventDispatcher.prototype.unregisterKey = function(event, key, callback, context) {
	var listeners = this.listeners[type], i;
	if (!listeners) return;
	for (i = 0; i < listeners.length; i++) {
		listener = listeners[i];
		if (listener.callback === callback && (!context || context === listener.context)) {
			splice.apply(listeners, [i, 1]);
			return;
		}
	}
};

/**
 * Registers an event handler
 */
EventDispatcher.prototype.register = function(type, callback, context, zIndex) {
	if (_.isArray(type)) {
		_.each(type, function(t) {
			this.register(t, callback, context, zIndex);
		}, this);
		return;
	}
	var listener = {callback: callback, context: context, zIndex: zIndex};
	this.listeners[type] || (this.listeners[type] = []);
	this.listeners[type].push(listener);
};

EventDispatcher.prototype.unregister = function(type, callback, context) {
	var listeners = this.listeners[type], i;
	if (!listeners) return;
	for (i = 0; i < listeners.length; i++) {
		listener = listeners[i];
		if (listener.callback === callback && (!context || context === listener.context)) {
			splice.apply(listeners, [i, 1]);
			return;
		}
	}
};

EventDispatcher.prototype.destroy = function() {
	this.stopEvents();
	// TODO: destroy the keyutils
	delete this.graph;
	delete this.base;
	delete this.zoom;
	delete this.listeners;
	delete this.enterStack;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                The Behavior Handlers for the Graph                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * Graph handler handles Panning and Zoom and rubber band selection
 */
var GraphHandler = gfw.GraphHandler = function(graph) {
	this.graph = graph;
	var dispatcher = graph.eventDispatcher;
	var f = function(type, ns, graph, pos, event) {
		Cursor.updateCursor(type, ns, graph, event);
	};
	dispatcher.register('drag*.graph', this.handleDrag, this);
	dispatcher.register('zoom.graph', this.handleZoom, this);
	dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
};

GraphHandler.prototype.handleZoom = function(type, ns, graph, pos, event) {
	this.graph.transform(null, null, event.scale);
};

GraphHandler.prototype.handleDrag = function(type, ns, graph, pos, event) {
	if (type == 'dragstart') {
		var pan = (this.graph.getProperty("defaultClickMode") == "pan") ^ (event.ctrlKey || event.shiftKey);
		if (! pan) return;
		var t = this.graph.translate();
		this.offset = [t[0] - pos[0], t[1] - pos[1]];
		return;
	}
	if (!this.offset) return;
	if (type == 'dragend') {
		this.graph.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
		Cursor.updateCursor('mouseup', ns, graph, event);
		delete this.offset;
		return;
	}
	this.graph.transform(pos[0] + this.offset[0], pos[1] + this.offset[1]);
};

GraphHandler.prototype.destroy = function() {
	delete this.graph;
};

/**
 * Selection Handler
 */
var SelectionHandler = gfw.SelectionHandler = function(graph) {
	this.graph = graph;
	var dispatcher = graph.eventDispatcher;
	dispatcher.register('mousedown.*', this.selectCell, this);
	dispatcher.register('mouseup.*', this.unselectCell, this);
	dispatcher.register('drag*.graph', this.handleMultiSelect, this);
	graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, this.updateSelections, this);
	this.selectedNodes = null;
	this.selectedLinks = null;
	this.attachedLinks = null;
};

SelectionHandler.prototype.updateSelections = function() {
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
};

SelectionHandler.prototype.selectCell = function(type, ns, data, pos, event) {
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
};

SelectionHandler.prototype.unselectCell = function(type, ns, data, pos, event) {
	var cell = data == this.graph ? null : data;
	if (cell && !(cell instanceof Cell)) return;
	var ctrlKey = event.ctrlKey || event.shiftKey;
	if (!cell) {
		this.graph.setSelection(cell, ctrlKey);
	}
};

SelectionHandler.prototype.handleMultiSelect = function(type, ns, data, pos, event) {
	pos = util.scale(this.graph, pos);

	if (type == 'dragstart') {
		var select = (this.graph.getProperty("defaultClickMode") == "select") ^ (event.ctrlKey || event.shiftKey);
		if (! select) return;
		this.startPt = new Point(pos[0], pos[1]);
		return;
	}
	if (!this.startPt) return;
	var rect = Rectangle.getBoundingRectangle([new Point(pos[0], pos[1]), this.startPt]);
	var renderer = this.graph.renderer;
	if (! this.rubberband) {
		this.rubberband = d3.select(renderer.appendNode(renderer.getCellLayer(), {
			template: _.template('<g><rect x="0" y="0" width="100" height="100" stroke="#000000" fill="none" stroke-dasharray="3 3"/></g>')
		}, false));
	}
	if (type == 'dragend') {
		var cells = this.graph.getCurrentRoot().children;
		// TODO: Define if we want to select vertexes / edges or both
		cells = _.filter(cells, function(cell){var box = cell.getBounds(); if(rect.contains(box)){ return true; } return false; });
		// TODO: Set selection
		this.graph.setSelection(cells, event.ctrlKey);

		this.rubberband.remove();
		delete this.startPt;
		delete this.rubberband;
		return;
	}
	this.rubberband.select("rect").attr({x: rect.x, y: rect.y, width: rect.width, height: rect.height});
};

SelectionHandler.prototype.destroy = function() {
	delete this.graph;
	delete this.selectedNodes;
	delete this.selectedLinks;
	delete this.attachedLinks;
};

/**
 * Vertex Handler
 */
var VertexHandler = gfw.VertexHandler = function(graph) {
	this.graph = graph;
	this.renderer = graph.renderer;
	var dispatcher = graph.eventDispatcher;
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
};
// TODO: this has issues when used together with minimap
VertexHandler.prototype.handleDrag = function(type, ns, vertex, pos, event) {
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
};

VertexHandler.prototype.handleMouseEnter = function(type, ns, vertex, pos, event) {
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
};

VertexHandler.prototype.handleMouseLeave = function(type, ns, vertex, pos, event) {
	Cursor.updateCursor(type, ns, vertex, event);
	// remove the highlight
	//d3.select(event.dataTarget).classed('active', false);
};

VertexHandler.prototype.handleConnection = function(type, ns, data, pos, event) {
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
};

VertexHandler.prototype.showConnectionMarker = function(vertex) {
	var data = this.connectionMarker = ConnectionMarker.getMarker(vertex);
	this.renderer.appendNode(this.renderer.getMarkerLayer(), data);
	var mousemove = _.bind(function() {
		var pos = this.graph.eventDispatcher.getPosition();
		if (!data.bounds.contains(new Point(pos[0], pos[1])))
			this.hideConnectionMarker();
	}, this);
	this._w = d3.select(this.graph.viewBase).on('mousemove', mousemove);
};

VertexHandler.prototype.hideConnectionMarker = function() {
	if (!this.connectionMarker) return;
	this.renderer.getMarkerLayer().selectAll('[ns=connectionMarker]').remove();
	delete this.connectionMarker;
	if (this._w)
		this._w.on('mousemove', null);
};

VertexHandler.prototype.destroy = function() {
	delete this.graph;
	delete this.renderer;
	delete this.connectionMarker;
};

/**
 * Edge Handler
 */
var EdgeHandler = gfw.EdgeHandler = function(graph) {
	this.graph = graph;
	this.renderer = graph.renderer;
	this.previousDataTarget = null;

	graph.on(Graph.EVENT_TYPES.SELECTION_CHANGE, function(type, unselected, selected) {
		this.hideHandles(_.filter(unselected, function(cell) { return cell instanceof Edge}));
		this.showHandles(_.filter(selected, function(cell) { return cell instanceof Edge}));
	}, this);

	graph.eventDispatcher.register('drag*.edgehandle', this.handleDrag, this);
};

EdgeHandler.prototype.handleDrag = function(type, ns, data, pos, event) {
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
};

EdgeHandler.prototype.showHandles = function(edges) {
	_.each(edges, function(edge) {
		this.renderer.appendNodes(this.renderer.getMarkerLayer(), EdgeHandle.getHandles(edge));
	}, this);
};

EdgeHandler.prototype.hideHandles = function(edges) {
	_.each(edges, function(edge) {
		this.renderer.getMarkerLayer().selectAll("#" + edge.id + "[ns=edgehandle").remove();
	}, this);
};

EdgeHandler.prototype.destroy = function() {
	// don't need to unregister the graph events as those will be unregistered by graph.
	delete this.graph;
	delete this.renderer;
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                         GFW Geometry Library                              //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

gfw.geom = {};

//
// Represent a point on the canvas
//
var Point = gfw.geom.Point = function(x, y) {
	this.x = x;
	this.y = y;
};

Point.W = new Point(-1, 0);
Point.N = new Point(0, -1);
Point.S = new Point(0, 1);
Point.E = new Point(1, 0);
Point.NE = new Point(1, -1);
Point.NW = new Point(-1, -1);
Point.SE = new Point(1, 1);
Point.SW = new Point(-1, 1);

// Make a clone of this point
Point.prototype.clone = function() {
	return new Point(this.x, this.y);
};

// Calculate the distance from this pt to the other pt.
Point.prototype.distance = function(aPt) {
	return Math.sqrt((this.x - aPt.x) * (this.x - aPt.x) + (this.y - aPt.y) * (this.y - aPt.y));
};

// Translate this point
Point.prototype.translate = function(p2) {
	this.x += p2.x;
	this.y += p2.y;
	return this;
};

// Scale this vector
Point.prototype.scale = function(scale) {
	this.x *= scale;
	this.y *= scale;
	return this;
};

Point.prototype.getScaled = function(scale) {
	return new Point(this.x * scale, this.y * scale);
};

Point.prototype.getTranslated = function(p2) {
	return new Point(this.x + p2.x, this.y + p2.y);
};

// Get the direction vector from this point to p2.
Point.prototype.getDirection = function(p2) {
	var dist = this.distance(p2);
	return new Point((p2.x-this.x)/dist,(p2.y-this.y)/dist);
};

/**
 * rotate the point about the origin. With the specified angle.
 * @param angle the angle to rotate
 */
Point.prototype.rotate = function(angle) {
	var cos = Math.cos(angle * Math.PI / 180);
	var sin = Math.sin(angle * Math.PI / 180);
	var x = this.x, y = this.y;
	this.x = x * cos - y * sin;
	this.y = x * sin + y * cos;
	return this;
};

Point.prototype.getRotated = function(angle) {
	return this.clone().rotate(angle);
};

// Calculate the dot product, treating this and p2 as vectors.
Point.prototype.dotProduct = function(p2) {
	return this.x * p2.x + this.y * p2.y;
};

// Calculates the similarity of this Ray with another.
// Similarity is defined as the absolute value of the dotProduct()
Point.prototype.similarity = function(p2) {
	return Math.abs(this.dotProduct(p2));
};

// Get the mid point between this and p2.
Point.prototype.getMidPoint = function(p2) {
	return new Point((this.x + p2.x)/2, (this.y + p2.y)/2);
};

Point.prototype.reverse = function() {
	this.x = -this.x;
	this.y = -this.y;
	return this;
};

Point.prototype.equals = function(p2) {
	if (!p2 || p2.constructor != Point) return false;

	return (this.x == p2.x && this.y == p2.y);
};

/**
 * Reflect this point w.r.t. the rectangle.
 * If vertical is true, it will reflect the point cross the vertical
 * central line of the rectangle, otherwise reflect cross the horizontal
 * central line.
 *
 * @param rect the rectangle
 * @param vertical whether is vertical reflection or horizontal reflection.
 */
Point.prototype.reflect = function(rect, vertical) {
	if (vertical)
		this.x = 2 * rect.x + rect.width - this.x;
	else
		this.y = 2 * rect.y + rect.height - this.y;
	return this;
};

Point.prototype.toString = function() {
	return "Point:{x=" + this.x + ";y=" + this.y + "}";
};

/**
 * Represents a line segment.
 */
var Line = gfw.geom.Line = function(start, end) {
	this.start = start;
	this.end = end;
};

/**
 * Calculate the length of this line
 */
Line.prototype.length = function() {
	return this.start.distance(this.end);
};

/**
 * Calculate the distance of this line to the point.
 */
Line.prototype.distance = function(pt) {
	var x = this.start.distance(pt);
	if (x == 0) return 0;

	var l = this.length();
	var cosa = new Point((this.end.x - this.start.x)/l, (this.end.y - this.start.y)/l).dotProduct(
		new Point(pt.x/x, pt.y/x));

	return x * Math.sqrt(1 - cosa * cosa);
};

/**
 * Function: intersection
 *
 * Returns the intersection of two lines as an <mxPoint>.
 *
 * Parameters:
 *
 * x0 - X-coordinate of the first line's startpoint.
 * y0 - X-coordinate of the first line's startpoint.
 * x1 - X-coordinate of the first line's endpoint.
 * y1 - Y-coordinate of the first line's endpoint.
 * x2 - X-coordinate of the second line's startpoint.
 * y2 - Y-coordinate of the second line's startpoint.
 * x3 - X-coordinate of the second line's endpoint.
 * y3 - Y-coordinate of the second line's endpoint.
 */
Line.intersection = function (x0, y0, x1, y1, x2, y2, x3, y3) {
	var denom = ((y3 - y2)*(x1 - x0)) - ((x3 - x2)*(y1 - y0));
	var nume_a = ((x3 - x2)*(y0 - y2)) - ((y3 - y2)*(x0 - x2));
	var nume_b = ((x1 - x0)*(y0 - y2)) - ((y1 - y0)*(x0 - x2));

	var ua = nume_a / denom;
	var ub = nume_b / denom;

	if(ua >= 0.0 && ua <= 1.0 && ub >= 0.0 && ub <= 1.0)
	{
		// Get the intersection point
		var intersectionX = x0 + ua*(x1 - x0);
		var intersectionY = y0 + ua*(y1 - y0);

		return new Point(intersectionX, intersectionY);
	}

	// No intersection
	return null;
};

Line.prototype.toString = function() {
	return 'Line:{start=' + this.start + ';end=' + this.end + '}';
};

//
// Represent a rectangle
//
var Rectangle = gfw.geom.Rectangle = function(x, y, width, height) {
	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
};

// Return the bounding rectangle that contains p1 and p2
Rectangle.getBoundingRectangle = function(pts, margin) {
	if (!pts || pts.length == 0) return null;
	margin = margin || [0, 0, 0, 0];
	if (!_.isArray(margin))
		margin = [margin, margin, margin, margin];
	var min = [pts[0].x, pts[0].y];
	var max = [pts[0].x, pts[0].y];
	for (var i = 1; i < pts.length; i++) {
		var p = pts[i];
		if (p.x < min[0]) {
			min[0] = p.x;
		}
		if (p.y < min[1]) {
			min[1] = p.y;
		}
		if (p.x > max[0]) {
			max[0] = p.x;
		}
		if (p.y > max[1]) {
			max[1] = p.y;
		}
	}
	min[0] = min[0] - margin[0];
	min[1] = min[1] - margin[1];
	max[0] = max[0] + margin[2];
	max[1] = max[1] + margin[3];
	var w = Math.abs(max[0] - min[0]);
	var h = Math.abs(max[1] - min[1]);
	return new Rectangle(min[0], min[1], w, h);
};

/**
 * Create a union of all the rectangles.
 * @param rects
 */
Rectangle.union = function(rects) {
	var minx = null, miny = null, maxx = -Infinity, maxy = -Infinity;
	_.each(rects, function(rect) {
		minx = minx || rect.x; miny = miny || rect.y;
		minx = Math.min(minx, rect.x);
		miny = Math.min(miny, rect.y);
		maxx = Math.max(maxx, rect.right());
		maxy = Math.max(maxy, rect.bottom());
	});
	minx = minx || 0;
	miny = miny || 0;
	return new Rectangle(minx, miny, maxx - minx, maxy - miny);
};

/**
 * Returns the y-coordinate of the bottom of this Rectangle.
 */
Rectangle.prototype.bottom = function() {
	return this.y + this.height;
};

/**
 * Returns the x-coordinate of the right side of this Rectangle.
 */
Rectangle.prototype.right = function() {
	return this.x + this.width;
};

/**
 * Return the mid point on the left side of this rectangle
 */
Rectangle.prototype.getLeft = function() {
	return new Point(this.x, this.y + this.height / 2);
};

/**
 * Return the mid point on the right side of this rectangle
 */
Rectangle.prototype.getRight = function() {
	return new Point(this.x + this.width, this.y + this.height / 2);
};

/**
 * Return the mid point on the top side of this rectangle
 */
Rectangle.prototype.getTop = function() {
	return new Point(this.x + this.width / 2, this.y);
};

/**
 * Return the mid point on the bottom side of this rectangle
 */
Rectangle.prototype.getBottom = function() {
	return new Point(this.x + this.width / 2, this.y + this.height);
};

Rectangle.prototype.getTopLeft = function() {
	return new Point(this.x, this.y);
};

Rectangle.prototype.getBottomRight = function() {
	return new Point(this.x + this.width, this.y + this.height);
};

/**
 * Return the center point of this rectangle
 */
Rectangle.prototype.getCenter = function() {
	return new Point(this.x + this.width / 2, this.y + this.height / 2);
};

Rectangle.prototype.getCenterX = function() {
	return this.x + this.width / 2;
};

Rectangle.prototype.getCenterY = function() {
	return this.y + this.height / 2;
};

/**
 * Checks whether this rectangle contains a given point or a given rectangle
 */
Rectangle.prototype.contains = function(el) {
	var w = el.width || 0;
	var h = el.height || 0;
	return (el.x + w <= this.x + this.width) && (el.x >= this.x) &&
		(el.y + h <= this.y + this.height) && (el.y >= this.y);
};

/**
 * Calcualte the distance to a point. 0 if this rectangle contains the point.
 */
Rectangle.prototype.distance = function(pt) {
	if (this.contains(pt)) return 0;

	if (pt.x < this.x) {
		if (pt.y < this.y)
			return pt.distance(new Point(this.x, this.y));
		if (pt.y <= this.y + this.height)
			return this.x - pt.x;
		return pt.distance(new Point(this.x, this.y + this.height));
	}
	if (pt.x <= this.x + this.width) {
		if (pt.y <= this.y)
			return this.y - pt.y;
		return pt.y - this.y - this.height;
	}
	if (pt.y < this.y)
		return pt.distance(new Point(this.x + this.width, this.y));
	if (pt.y <= this.y + this.height)
		return pt.x - this.x;
	return pt.distance(new Point(this.x + this.width, this.y + this.height));
	/*var top = new Line(new Point(this.x, this.y), new Point(this.x + this.width, this.y));
	var left = new Line(new Point(this.x, this.y), new Point(this.x, this.y + this.height));
	var right = new Line(new Point(this.x + this.width, this.y), new Point(this.x + this.width, this.y + this.height));
	var bottom = new Line(new Point(this.x, this.y + this.height), new Point(this.x + this.width, this.y + this.height));
	return Math.min(top.distance(pt), Math.min(left.distance(pt), Math.min(right.distance(pt), bottom.distance(pt))));*/
};

/**
 * Given two points, we want to detect whether the line joining the pts intersect
 * with the rectangle or not. We assume only horizontal or vertical line segments.
 *
 * @return int the side of the intersection: -1: no intersection, 0: left, 1: top, 2: right, 3: bottom, 4: containment.
 */
Rectangle.prototype.detectIntersection = function(pt1, pt2) {
	var horizontal = pt1.y == pt2.y;
	var contains1 = this.contains(pt1);
	var contains2 = this.contains(pt2);
	if (contains1 && contains2) return 4;
	if (!contains1 && !contains2) {
		if (horizontal && (pt1.y >= this.y && pt1.y <= this.y + this.height)) {
			if (pt1.x < this.x && pt2.x > this.x + this.width)
				return 0;
			if (pt1.x > this.x + this.width && pt2.x < this.x)
				return 2;
		}
		if (!horizontal && (pt1.x >= this.x && pt1.x <= this.x + this.width)) {
			if (pt1.y < this.y && pt2.y > this.y + this.height)
				return 1;
			if (pt1.y > this.y + this.height && pt2.y < this.y)
				return 3;
		}
		return -1;
	}

	var outPt = contains1 ? pt2 : pt1;
	if (horizontal) {
		if (outPt.x > this.getRight().x)
			return 2;
		return 0;
	} else {
		if (outPt.y < this.getTop().y)
			return 1;
		return 3;
	}
};

Rectangle.prototype.toString = function() {
	return 'Rectangle:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
};

/**
 * Copyright (c) 2006-2013, JGraph Ltd
 */
var Perimeter = gfw.geom.Perimeter = {

	/**
	 * Function: RectanglePerimeter
	 *
	 * Describes a rectangular perimeter for the given bounds.
	 *
	 * Parameters:
	 *
	 * bounds - Rectangle that represents the absolute bounds of the
	 * vertex.
	 * vertex - <mxCellState> that represents the vertex.
	 * next - <Point> that represents the nearest neighbour point on the
	 * given edge.
	 * orthogonal - Boolean that specifies if the orthogonal projection onto
	 * the perimeter should be returned. If this is false then the intersection
	 * of the perimeter and the line between the next and the center point is
	 * returned.
	 */
	RectanglePerimeter: function (bounds, direction, next, orthogonal)
	{
		var cx = bounds.getCenterX();
		var cy = bounds.getCenterY();
		var dx = next.x - cx;
		var dy = next.y - cy;
		var alpha = Math.atan2(dy, dx);
		var p = new Point(0, 0);
		var pi = Math.PI;
		var pi2 = Math.PI/2;
		var beta = pi2 - alpha;
		var t = Math.atan2(bounds.height, bounds.width);

		if (alpha < -pi + t || alpha > pi - t) {
			// Left edge
			p.x = bounds.x;
			p.y = cy - bounds.width * Math.tan(alpha) / 2;
		} else if (alpha < -t) {
			// Top Edge
			p.y = bounds.y;
			p.x = cx - bounds.height * Math.tan(beta) / 2;
		} else if (alpha < t) {
			// Right Edge
			p.x = bounds.x + bounds.width;
			p.y = cy + bounds.width * Math.tan(alpha) / 2;
		} else {
			// Bottom Edge
			p.y = bounds.y + bounds.height;
			p.x = cx + bounds.height * Math.tan(beta) / 2;
		}

		if (orthogonal) {
			if (next.x >= bounds.x &&
				next.x <= bounds.x + bounds.width) {
				p.x = next.x;
			} else if (next.y >= bounds.y &&
					   next.y <= bounds.y + bounds.height) {
				p.y = next.y;
			}

			if (next.x < bounds.x) {
				p.x = bounds.x;
			} else if (next.x > bounds.x + bounds.width) {
				p.x = bounds.x + bounds.width;
			}

			if (next.y < bounds.y) {
				p.y = bounds.y;
			} else if (next.y > bounds.y + bounds.height) {
				p.y = bounds.y + bounds.height;
			}
		}

		return p;
	},

	/**
	 * Function: EllipsePerimeter
	 *
	 * Describes an elliptic perimeter. See <RectanglePerimeter>
	 * for a description of the parameters.
	 */
	EllipsePerimeter: function (bounds, direction, next, orthogonal) {
		var x = bounds.x;
		var y = bounds.y;
		var a = bounds.width / 2;
		var b = bounds.height / 2;
		var cx = x + a;
		var cy = y + b;
		var px = next.x;
		var py = next.y;

		// Calculates straight line equation through
		// point and ellipse center y = d * x + h
		var dx = parseInt(px - cx);
		var dy = parseInt(py - cy);

        var tx, ty;

		if (dx == 0 && dy != 0) {
			return new Point(cx, cy + b * dy / Math.abs(dy));
		} else if (dx == 0 && dy == 0) {
			return new Point(px, py);
		}

		if (orthogonal) {
			if (py >= y && py <= y + bounds.height) {
				ty = py - cy;
				tx = Math.sqrt(a * a * (1 - (ty * ty) / (b * b))) || 0;

				if (px <= x) {
					tx = -tx;
				}

				return new Point(cx + tx, py);
			}

			if (px >= x && px <= x + bounds.width) {
				tx = px - cx;
				ty = Math.sqrt(b * b * (1 - (tx * tx) / (a * a))) || 0;

				if (py <= y) {
					ty = -ty;
				}

				return new Point(px, cy + ty);
			}
		}

		// Calculates intersection
		var d = dy / dx;
		var h = cy - d * cx;
		var e = a * a * d * d + b * b;
		var f = -2 * cx * e;
		var g = a * a * d * d * cx * cx + b * b * cx * cx - a * a * b * b;
		var det = Math.sqrt(f * f - 4 * e * g);

		// Two solutions (perimeter points)
		var xout1 = (-f + det) / (2 * e);
		var xout2 = (-f - det) / (2 * e);
		var yout1 = d * xout1 + h;
		var yout2 = d * xout2 + h;
		var dist1 = Math.sqrt(Math.pow((xout1 - px), 2) + Math.pow((yout1 - py), 2));
		var dist2 = Math.sqrt(Math.pow((xout2 - px), 2) + Math.pow((yout2 - py), 2));

		// Correct solution
		var xout = 0;
		var yout = 0;

		if (dist1 < dist2) {
			xout = xout1;
			yout = yout1;
		} else {
			xout = xout2;
			yout = yout2;
		}

		return new Point(xout, yout);
	},


	/**
	 * Function: RhombusPerimeter
	 *
	 * Describes a rhombus (aka diamond) perimeter. See <RectanglePerimeter>
	 * for a description of the parameters.
	 */
	RhombusPerimeter: function (bounds, direction, next, orthogonal) {
		var x = bounds.x;
		var y = bounds.y;
		var w = bounds.width;
		var h = bounds.height;

		var cx = x + w / 2;
		var cy = y + h / 2;

		var px = next.x;
		var py = next.y;

		// Special case for intersecting the diamond's corners
		if (cx == px) {
			if (cy > py) {
				return new Point(cx, y);
				// top
			} else {
				return new Point(cx, y + h);
				// bottom
			}
		} else if (cy == py) {
			if (cx > px) {
				return new Point(x, cy);
				// left
			} else {
				return new Point(x + w, cy);
				// right
			}
		}

		var tx = cx;
		var ty = cy;

		if (orthogonal) {
			if (px >= x && px <= x + w) {
				tx = px;
			} else if (py >= y && py <= y + h) {
				ty = py;
			}
		}

		// In which quadrant will the intersection be?
		// set the slope and offset of the border line accordingly
		if (px < cx) {
			if (py < cy) {
				return Line.intersection(px, py, tx, ty, cx, y, x, cy);
			} else {
				return Line.intersection(px, py, tx, ty, cx, y + h, x, cy);
			}
		} else if (py < cy) {
			return Line.intersection(px, py, tx, ty, cx, y, x + w, cy);
		} else {
			return Line.intersection(px, py, tx, ty, cx, y + h, x + w, cy);
		}
	},


	/**
	 * Function: TrianglePerimeter
	 *
	 * Describes a triangle perimeter. See <RectanglePerimeter>
	 * for a description of the parameters.
	 */
	TrianglePerimeter: function (bounds, direction, next, orthogonal) {
		var vertical = direction == "north" || direction == "south";

		var x = bounds.x;
		var y = bounds.y;
		var w = bounds.width;
		var h = bounds.height;

		var cx = x + w / 2;
		var cy = y + h / 2;

		var start = new Point(x, y);
		var corner = new Point(x + w, cy);
		var end = new Point(x, y + h);

		if (direction == "north") {
			start = end;
			corner = new Point(cx, y);
			end = new Point(x + w, y + h);
		} else if (direction == "south") {
			corner = new Point(cx, y + h);
			end = new Point(x + w, y);
		} else if (direction == "west") {
			start = new Point(x + w, y);
			corner = new Point(x, cy);
			end = new Point(x + w, y + h);
		}

		var dx = next.x - cx;
		var dy = next.y - cy;

		var alpha = (vertical) ? Math.atan2(dx, dy) : Math.atan2(dy, dx);
		var t = (vertical) ? Math.atan2(w, h) : Math.atan2(h, w);

		var base = false;

		if (direction == "north" || direction == "west") {
			base = alpha > -t && alpha < t;
		} else {
			base = alpha < -Math.PI + t || alpha > Math.PI - t;
		}

		var result = null;

		if (base) {
			if (orthogonal && ((vertical && next.x >= start.x && next.x <= end.x) || (!vertical && next.y >= start.y && next.y <= end.y))) {
				if (vertical) {
					result = new Point(next.x, start.y);
				} else {
					result = new Point(start.x, next.y);
				}
			} else {
				if (direction == "north") {
					result = new Point(x + w / 2 + h * Math.tan(alpha) / 2, y + h);
				} else if (direction == "south") {
					result = new Point(x + w / 2 - h * Math.tan(alpha) / 2, y);
				} else if (direction == "west") {
					result = new Point(x + w, y + h / 2 + w * Math.tan(alpha) / 2);
				} else {
					result = new Point(x, y + h / 2 - w * Math.tan(alpha) / 2);
				}
			}
		} else {
			if (orthogonal) {
				var pt = new Point(cx, cy);

				if (next.y >= y && next.y <= y + h) {
					pt.x = (vertical) ? cx : ((direction == "west") ? x + w : x);
					pt.y = next.y;
				} else if (next.x >= x && next.x <= x + w) {
					pt.x = next.x;
					pt.y = (!vertical) ? cy : ((direction == "north") ? y + h : y);
				}

				cx = pt.x;
				cy = pt.y;
			}

			if ((vertical && next.x <= x + w / 2) || (!vertical && next.y <= y + h / 2)) {
				result = Line.intersection(next.x, next.y, cx, cy, start.x, start.y, corner.x, corner.y);
			} else {
				result = Line.intersection(next.x, next.y, cx, cy, corner.x, corner.y, end.x, end.y);
			}
		}

		if (result == null) {
			result = new Point(cx, cy);
		}

		return result;
	},

	/**
	 * Function: HexagonPerimeter
	 *
	 * Describes a hexagon perimeter. See <RectanglePerimeter>
	 * for a description of the parameters.
	 */
	HexagonPerimeter: function (bounds, direction, next, orthogonal)
	{
		var x = bounds.x;
		var y = bounds.y;
		var w = bounds.width;
		var h = bounds.height;

		var cx = bounds.getCenterX();
		var cy = bounds.getCenterY();
		var px = next.x;
		var py = next.y;
		var dx = px - cx;
		var dy = py - cy;
		var alpha = -Math.atan2(dy, dx);
		var pi = Math.PI;
		var pi2 = Math.PI / 2;

		var result = new Point(cx, cy);

		var vertical = direction == 'north' || direction == 'south';
		var a = new Point();
		var b = new Point();
        var beta;

		//Only consider corrects quadrants for the orthogonal case.
		if ((px < x) && (py < y) || (px < x) && (py > y + h)
				|| (px > x + w) && (py < y) || (px > x + w) && (py > y + h)) {
			orthogonal = false;
		}

		if (orthogonal) {
			if (vertical) {
				//Special cases where intersects with hexagon corners
				if (px == cx) {
					if (py <= y) {
						return new Point(cx, y);
					} else if (py >= y + h) {
						return new Point(cx, y + h);
					}
				} else if (px < x) {
					if (py == y + h / 4) {
						return new Point(x, y + h / 4);
					} else if (py == y + 3 * h / 4) {
						return new Point(x, y + 3 * h / 4);
					}
				} else if (px > x + w) {
					if (py == y + h / 4) {
						return new Point(x + w, y + h / 4);
					} else if (py == y + 3 * h / 4) {
						return new Point(x + w, y + 3 * h / 4);
					}
				} else if (px == x) {
					if (py < cy) {
						return new Point(x, y + h / 4);
					} else if (py > cy) {
						return new Point(x, y + 3 * h / 4);
					}
				} else if (px == x + w) {
					if (py < cy) {
						return new Point(x + w, y + h / 4);
					} else if (py > cy) {
						return new Point(x + w, y + 3 * h / 4);
					}
				}

				if (py == y) {
					return new Point(cx, y);
				} else if (py == y + h) {
					return new Point(cx, y + h);
				}

				if (px < cx) {
					if ((py > y + h / 4) && (py < y + 3 * h / 4)) {
						a = new Point(x, y);
						b = new Point(x, y + h);
					} else if (py < y + h / 4) {
						a = new Point(x - Math.floor(0.5 * w), y
								+ Math.floor(0.5 * h));
						b = new Point(x + w, y - Math.floor(0.25 * h));
					} else if (py > y + 3 * h / 4) {
						a = new Point(x - Math.floor(0.5 * w), y
								+ Math.floor(0.5 * h));
						b = new Point(x + w, y + Math.floor(1.25 * h));
					}
				} else if (px > cx) {
					if ((py > y + h / 4) && (py < y + 3 * h / 4)) {
						a = new Point(x + w, y);
						b = new Point(x + w, y + h);
					} else if (py < y + h / 4) {
						a = new Point(x, y - Math.floor(0.25 * h));
						b = new Point(x + Math.floor(1.5 * w), y
								+ Math.floor(0.5 * h));
					} else if (py > y + 3 * h / 4) {
						a = new Point(x + Math.floor(1.5 * w), y
								+ Math.floor(0.5 * h));
						b = new Point(x, y + Math.floor(1.25 * h));
					}
				}

			} else {
				//Special cases where intersects with hexagon corners
				if (py == cy) {
					if (px <= x) {
						return new Point(x, y + h / 2);
					} else if (px >= x + w) {
						return new Point(x + w, y + h / 2);
					}
				} else if (py < y) {
					if (px == x + w / 4) {
						return new Point(x + w / 4, y);
					} else if (px == x + 3 * w / 4) {
						return new Point(x + 3 * w / 4, y);
					}
				} else if (py > y + h) {
					if (px == x + w / 4) {
						return new Point(x + w / 4, y + h);
					} else if (px == x + 3 * w / 4) {
						return new Point(x + 3 * w / 4, y + h);
					}
				} else if (py == y) {
					if (px < cx) {
						return new Point(x + w / 4, y);
					} else if (px > cx) {
						return new Point(x + 3 * w / 4, y);
					}
				} else if (py == y + h) {
					if (px < cx) {
						return new Point(x + w / 4, y + h);
					} else if (py > cy) {
						return new Point(x + 3 * w / 4, y + h);
					}
				} if (px == x) {
					return new Point(x, cy);
				} else if (px == x + w) {
					return new Point(x + w, cy);
				}

				if (py < cy) {
					if ((px > x + w / 4) && (px < x + 3 * w / 4)) {
						a = new Point(x, y);
						b = new Point(x + w, y);
					} else if (px < x + w / 4) {
						a = new Point(x - Math.floor(0.25 * w), y + h);
						b = new Point(x + Math.floor(0.5 * w), y
								- Math.floor(0.5 * h));
					} else if (px > x + 3 * w / 4) {
						a = new Point(x + Math.floor(0.5 * w), y
								- Math.floor(0.5 * h));
						b = new Point(x + Math.floor(1.25 * w), y + h);
					}
				} else if (py > cy) {
					if ((px > x + w / 4) && (px < x + 3 * w / 4)) {
						a = new Point(x, y + h);
						b = new Point(x + w, y + h);
					} else if (px < x + w / 4) {
						a = new Point(x - Math.floor(0.25 * w), y);
						b = new Point(x + Math.floor(0.5 * w), y
								+ Math.floor(1.5 * h));
					} else if (px > x + 3 * w / 4) {
						a = new Point(x + Math.floor(0.5 * w), y
								+ Math.floor(1.5 * h));
						b = new Point(x + Math.floor(1.25 * w), y);
					}
				}
			}

			var tx = cx;
			var ty = cy;

			if (px >= x && px <= x + w) {
				tx = px;

				if (py < cy) {
					ty = y + h;
				} else {
					ty = y;
				}
			} else if (py >= y && py <= y + h) {
				ty = py;

				if (px < cx) {
					tx = x + w;
				} else {
					tx = x;
				}
			}

			result = Line.intersection(tx, ty, next.x, next.y, a.x, a.y, b.x, b.y);
		} else {
			if (vertical) {
				beta = Math.atan2(h / 4, w / 2);

				//Special cases where intersects with hexagon corners
				if (alpha == beta) {
					return new Point(x + w, y + Math.floor(0.25 * h));
				} else if (alpha == pi2) {
					return new Point(x + Math.floor(0.5 * w), y);
				} else if (alpha == (pi - beta)) {
					return new Point(x, y + Math.floor(0.25 * h));
				} else if (alpha == -beta) {
					return new Point(x + w, y + Math.floor(0.75 * h));
				} else if (alpha == (-pi2)) {
					return new Point(x + Math.floor(0.5 * w), y + h);
				} else if (alpha == (-pi + beta)) {
					return new Point(x, y + Math.floor(0.75 * h));
				}

				if ((alpha < beta) && (alpha > -beta)) {
					a = new Point(x + w, y);
					b = new Point(x + w, y + h);
				} else if ((alpha > beta) && (alpha < pi2)) {
					a = new Point(x, y - Math.floor(0.25 * h));
					b = new Point(x + Math.floor(1.5 * w), y
							+ Math.floor(0.5 * h));
				} else if ((alpha > pi2) && (alpha < (pi - beta))) {
					a = new Point(x - Math.floor(0.5 * w), y
							+ Math.floor(0.5 * h));
					b = new Point(x + w, y - Math.floor(0.25 * h));
				} else if (((alpha > (pi - beta)) && (alpha <= pi))
						|| ((alpha < (-pi + beta)) && (alpha >= -pi))) {
					a = new Point(x, y);
					b = new Point(x, y + h);
				} else if ((alpha < -beta) && (alpha > -pi2)) {
					a = new Point(x + Math.floor(1.5 * w), y
							+ Math.floor(0.5 * h));
					b = new Point(x, y + Math.floor(1.25 * h));
				} else if ((alpha < -pi2) && (alpha > (-pi + beta))) {
					a = new Point(x - Math.floor(0.5 * w), y
							+ Math.floor(0.5 * h));
					b = new Point(x + w, y + Math.floor(1.25 * h));
				}
			} else {
				beta = Math.atan2(h / 2, w / 4);

				//Special cases where intersects with hexagon corners
				if (alpha == beta) {
					return new Point(x + Math.floor(0.75 * w), y);
				} else if (alpha == (pi - beta)) {
					return new Point(x + Math.floor(0.25 * w), y);
				} else if ((alpha == pi) || (alpha == -pi)) {
					return new Point(x, y + Math.floor(0.5 * h));
				} else if (alpha == 0) {
					return new Point(x + w, y + Math.floor(0.5 * h));
				} else if (alpha == -beta) {
					return new Point(x + Math.floor(0.75 * w), y + h);
				} else if (alpha == (-pi + beta)) {
					return new Point(x + Math.floor(0.25 * w), y + h);
				}

				if ((alpha > 0) && (alpha < beta)) {
					a = new Point(x + Math.floor(0.5 * w), y
							- Math.floor(0.5 * h));
					b = new Point(x + Math.floor(1.25 * w), y + h);
				} else if ((alpha > beta) && (alpha < (pi - beta))) {
					a = new Point(x, y);
					b = new Point(x + w, y);
				} else if ((alpha > (pi - beta)) && (alpha < pi)) {
					a = new Point(x - Math.floor(0.25 * w), y + h);
					b = new Point(x + Math.floor(0.5 * w), y
							- Math.floor(0.5 * h));
				} else if ((alpha < 0) && (alpha > -beta)) {
					a = new Point(x + Math.floor(0.5 * w), y
							+ Math.floor(1.5 * h));
					b = new Point(x + Math.floor(1.25 * w), y);
				} else if ((alpha < -beta) && (alpha > (-pi + beta))) {
					a = new Point(x, y + h);
					b = new Point(x + w, y + h);
				} else if ((alpha < (-pi + beta)) && (alpha > -pi)) {
					a = new Point(x - Math.floor(0.25 * w), y);
					b = new Point(x + Math.floor(0.5 * w), y
							+ Math.floor(1.5 * h));
				}
			}

			result = Line.intersection(cx, cy, next.x, next.y, a.x, a.y, b.x, b.y);
		}

		if (result == null) {
			return new Point(cx, cy);
		}

		return result;
	}
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                    The Sizer will resize the graph                        //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

/**
 * The Sizer is an Interface, actual sizers will resize the graph based on different criteria.
 * @param {Object} graph
 */
var Sizer = gfw.Sizer = function(graph, config) {
	this.graph = graph;
	this.init(config);
	if (this.graph)
		this.graph.on(Graph.EVENT_TYPES.DESTROY, this.destroy, this, true);
};
_.extend(Sizer.prototype, Events, Config);

Sizer.EVENT_TYPES = {
	RESIZE_COMPLETE: "resizeComplete"
};

Sizer.prototype.start = function() {};
Sizer.prototype.stop = function() {};
Sizer.prototype.resize = function() {};

Sizer.prototype.getStartPosition = function() {
	return dom.getPosition(this.getResizeElement());
};

Sizer.prototype.getResizeElement = function() {
	return this.graph.viewBase;
};

Sizer.prototype.resizeElement = function(w, h) {
  	/* TODO: Should we allow graph to  override this or should it just define additional actions ? */
	if (this.graph && this.graph.resize)
		this.graph.resize(w, h);
	else
		dom.resize(this.getResizeElement(), w, h);
};

Sizer.prototype.destroy = function() {
	this.stop();
	this.off();
	delete this.graph;
};

/**
 * The Thrifty Sizer will always resize the canvas to the size of the graph.
 * @param {Object} graph
 * @param {Object} config
 */
var ThriftySizer = gfw.ThriftySizer = function(graph, config) {
	ThriftySizer.superclass.constructor.call(this, graph, config);
};
util.extend(ThriftySizer, Sizer);

ThriftySizer.DEFAULT_CONFIG = {
	xEnable: true,
	yEnable: true,
	// Legacy support, when IFrame contains the viewer, we have the option to resize the iframe.
	resizeIFrame: false,
	frameMargin: [0, 0]
};

ThriftySizer.prototype.start = function() {
	this.layoutCompleteListener = function(type, args) {
		this.layoutBounds = args[0];
		delete this.savedSize;
		this.resize();
	};
	this.graph.on(Graph.EVENT_TYPES.LAYOUT_COMPLETE, this.layoutCompleteListener, this);
};

ThriftySizer.prototype.stop = function() {
	this.graph.off(Graph.EVENT_TYPES.LAYOUT_COMPLETE, this.layoutCompleteListener, this);
};

ThriftySizer.prototype.resize = function() {
	/*if (!this.layoutBounds) return;
	var w = null, h = null;
	if (this.getProperty("xEnable"))
		w = this.layoutBounds.width;
	if (this.getProperty("yEnable"))
		h = this.layoutBounds.height;
	var z = this.graph.getProperty("zoom");
	w = w ? w * z : w;
	h = h ? h * z : h;
	this.resizeElement(w, h);

	var w2, h2;
	if (this.getProperty("resizeIFrame")) {
		if (window.frameElement) {
			var margin = this.getProperty("frameMargin");
			w2 = Dom.getDocumentWidth();
			h2 = Dom.getDocumentHeight();
			if (w2 == 0) {
				// The size information is not ready, call later
				Lang.later(10, this, this.resize);
				return;
			}
			if (UA.ie) {
				w2 += parseInt(document.body.rightMargin) + parseInt(document.body.leftMargin);
				h2 += parseInt(document.body.topMargin) + parseInt(document.body.bottomMargin);
			}
			window.frameElement.style.width = (w2 + margin[0]) + "px";
			window.frameElement.style.height = (h2 + margin[1]) + "px";
		}
	}
	if (pega.u.d)
		pega.u.d.doHarnessResize();
	this.trigger(Sizer.EVENT_TYPES.RESIZE_COMPLETE, w, h);*/
};

/**
 * Greedy Sizer will try to take the whole window space. If graph is larger, scrollbars are created.
 * @param {Object} graph
 * @param {Object} config
 */
var GreedySizer = gfw.GreedySizer = function(graph, config) {
	GreedySizer.superclass.constructor.call(this, graph, config);
	this.resizeWidth = this.getProperty("xEnable");
	this.resizeHeight = this.getProperty("yEnable");
};
util.extend(GreedySizer, ThriftySizer);

GreedySizer.DEFAULT_CONFIG = {
	xOffset: 20,
	xMin: 20,
	xMax: 9999,
	yOffset: 20,
	yMin: 20,
	yMax: 9999
};

GreedySizer.prototype.start = function() {
	this.resizer = _.debounce(_.bind(this.resize, this), 100);
	d3.select(window).on('resize', this.resizer);
	this.resize();
};

GreedySizer.prototype.stop = function() {
	d3.select(window).on('resize', null);
};

GreedySizer.prototype.resize = function() {
	util.log('Sizer', 'resize');
	if (this.graph && this.graph.destroyed) return;

	var xy = this.getStartPosition();
	if (!xy || xy[0] < 0 || xy[1] < 0) return;
	// frist get window sizing.
	var size = dom.getSize(window);

	if (this.savedSize && this.savedSize[0] == xy[0] && this.savedSize[1] == xy[1] && this.savedSize[2] == size[0] && this.savedSize[3] == size[1])
		return;
	else
		this.savedSize = [xy[0], xy[1], size[0], size[1]];
	var w = null, h = null, min, max;

	if (this.resizeWidth) {
		w = size[0] - xy[0] - this.getProperty("xOffset");
		min = this.getProperty("xMin");
		if (min == "graph") min = this.layoutBounds.width;
		max = this.getProperty("xMax");
		if (max == "graph") max = this.layoutBounds.width;
		w = Math.min(Math.max(w, min), max);
	}
	if (this.resizeHeight) {
		h = size[1] - xy[1] - this.getProperty("yOffset");
		min = this.getProperty("yMin");
		if (min == "graph" && this.layoutBounds)
			min = this.layoutBounds.height;
		max = this.getProperty("yMax");
		if (max == "graph" && this.layoutBounds)
			max = this.layoutBounds.height;
		h = Math.min(Math.max(h, min), max);
	}
	this.resizeElement(w, h);
	this.trigger(Sizer.EVENT_TYPES.RESIZE_COMPLETE, w, h);
	util.log('Sizer', 'resize end');
};

///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                                SIDHash                                    //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

var SID = gfw.SID = function(graph) {
	this.graph = graph;
	this.graph.on(Graph.EVENT_TYPES.VERTEX_CREATED, this.addHandler, this);
	this.graph.on(Graph.EVENT_TYPES.VERTEX_REMOVED, this.removeHandler, this);
	this.graph.on(Graph.EVENT_TYPES.RESET, function() { this.hash = {}; this.flowHash = {};}, this);
	this.initHash();
};

SID.prototype.addHandler = function(type, vertex) { this.addVertex(vertex); };
SID.prototype.removeHandler = function(type, vertices) {
	_.each(vertices, function(v) { this.removeVertex(v); }, this);
};

SID.prototype.addVertex = function(vertex) {
	var sid = vertex.getProperty("sid");
	if (sid) {
		if (this.hash[sid])
			this.hash[sid].push(vertex);
		else
			this.hash[sid] = [vertex];
		if (vertex.hasProperty("flowRule")) {
			sid = vertex.getProperty("flowRule").sid;
			if (sid)
				this.addFlow(sid, vertex);
		} else if (vertex == this.graph.root) {
			this.addFlow(SID.getID(vertex), vertex);
		}
	}
};

SID.prototype.removeVertex = function(vertex) {
	var sid = vertex.getProperty("sid");
	var i;
	if (sid) {
		for (i = this.hash[sid].length - 1; i >= 0; i--) {
			if (this.hash[sid][i] == vertex)
				this.hash[sid].splice(i, 1);
		}
		if (vertex.hasProperty("flowRule")) {
			sid = vertex.getProperty("flowRule").sid;
			if (sid) {
				for (i = this.flowHash[sid].length - 1; i >= 0; i--) {
					if (this.flowHash[sid][i] == vertex)
						this.flowHash[sid].splice(i, 1);
				}
			}
		}
	}
};

SID.prototype.addFlow = function(sid, vertex) {
	if (this.flowHash[sid]) {
		if (_.indexOf(this.flowHash[sid], vertex) < 0)
			this.flowHash[sid].push(vertex);
	} else
		this.flowHash[sid] = [vertex];
};

SID.prototype.updateFlowRule = function(vertex, oldID, newID) {
	if (oldID && this.flowHash[oldID]) {
		for (var i = this.flowHash[oldID].length - 1; i >= 0; i--) {
			if (this.flowHash[oldID][i] == vertex)
				this.flowHash[oldID].splice(i, 1);
		}
	}
	if (newID)
		this.addFlow(newID, vertex);
};

SID.prototype.initHash = function() {
	this.hash = {};
	this.flowHash = {};
	_.each(this.graph.vertices, function(vertex) { this.addVertex(vertex); }, this);
};

SID.prototype.getDuplicates = function(sid, ancestor) {
	var dups = this.hash[sid];
	dups = !dups ? [] : dups;
	if (!ancestor)
		return _.clone(dups);

	var arr = _.clone(dups);
	if (!arr) return [];

	for (var i = arr.length - 1; i >= 0; i--) {
		if (!this.graph.isAncestor(ancestor, arr[i]))
			arr.splice(i, 1);
	}
	return arr;
};

SID.prototype.getDuplicateFlows = function(sid) {
	var dups = this.flowHash[sid];
	dups = !dups ? [] : dups;
	return _.clone(dups);
};

SID.prototype.destroy = function() {
	this.graph.off(Graph.EVENT_TYPES.VERTEX_CREATED, this.addHandler, this);
	this.graph.off(Graph.EVENT_TYPES.VERTEX_REMOVED, this.removeHandlers, this);
};

SID.prototype.print = function() {
	for (var i in this.hash) {
		util.log('SID', 'sid=' + i);
		for (var j = 0; j < this.hash[i].length; j++) {
			util.log('SID', '    ' + this.hash[i][j]);
		}
	}
};

SID.getID = function(cell, useRef) {
	if (_.isUndefined(useRef))
		useRef = false;

	if (useRef && cell.hasProperty && cell.hasProperty("flowRule"))
		return SID.getID(cell.getProperty("flowRule"));

	if (cell instanceof Vertex || cell instanceof Edge) {
		if (cell.hasProperty("sid"))
			return cell.getProperty("sid");
		else
			return cell.id;
	} else {
		if (cell.sid)
			return cell.sid;
		return cell.id;
	}
};

SID.getIDName = function(cell) {
	if (cell instanceof Vertex || cell instanceof Edge) {
		if (cell.hasProperty("sid"))
			return "sid";
		else
			return "id";
	} else {
		if (cell.sid)
			return "sid";
		return "id";
	}
};

SID.getIDModel = function(cell) {
	var model = {};
	model[SID.getIDName(cell)] = SID.getID(cell);
	return model;
};

SID.setID = function(cells, id, graph) {
	var isSharedID = graph.isSharedID;
	if (!_.isString(id))
		id = isSharedID ? id.sid : id.id;

	var f = function(cell) {
		if (isSharedID) {
			cell.setProperty("sid", id);
			if (cell instanceof Vertex)
				graph.getSIDHash().addVertex(cell);
		} else {
			if (cell instanceof Vertex)
				graph.changeVertexId(cell, id);
			else
				graph.changeEdgeId(cell, id);
		}
	};
	if (_.isArray(cells)) {
		_.each(cells, function(cell) { f(cell); });
	} else
		f(cells);
};

SID.getPathKey = function(cell, useRef) {
	if (_.isUndefined(useRef))
		useRef = false;

	if (useRef) {
		if (cell.hasProperty && cell.hasProperty("flowRule"))
			return cell.getProperty("flowRule").pathKey;
	}
	return util.getObjProperty(cell, "pathKey");
};

/**
 * KEY constant
 */
var KEY = gfw.KEY = {
  ALT          : 18,
  BACK_SPACE   : 8,
  CAPS_LOCK    : 20,
  CONTROL      : 17,
  DELETE       : 46,
  DOWN         : 40,
  END          : 35,
  ENTER        : 13,
  ESCAPE       : 220,
  HOME         : 36,
  LEFT         : 37,
  META         : 224,
  NUM_LOCK     : 144,
  PAGE_DOWN    : 34,
  PAGE_UP      : 33,
  PAUSE        : 19,
  PRINTSCREEN  : 44,
  RIGHT        : 39,
  SCROLL_LOCK  : 145,
  SHIFT        : 16,
  SPACE        : 32,
  TAB          : 9,
  UP           : 38,
  ADD          : gfw.dom.isFireFox ? 61  : 187,
  SUBTRACT     : gfw.dom.isFireFox ? 173 : 189
};

})();

String.prototype.hashCode = function() {
	var hash = 5381;
	var c;
    for (var i = 0; i < this.length; i++) {
        c = this.charCodeAt(i);
        hash = ((hash << 5) + hash) + c; /* hash * 33 + c */
    }
    return hash;
};

/**
 * A string buffer for fast string manipulation
 */
function StringBuffer(str) {
	this.buffer = [];
	if (str)
		this.buffer.push(str);
};

StringBuffer.prototype.append = function(stuff) {
	if (_.isString(stuff))
		this.buffer.push(stuff);
	else if (_.isArray(stuff))
		this.buffer = this.buffer.concat(stuff);
	else
		this.buffer.push("" + stuff);
	return this;
};

StringBuffer.prototype.prepend = function(stuff) {
	if (_.isString(stuff))
		this.buffer.splice(0, 0, stuff);
	else if (_.isArray(stuff))
		this.buffer = stuff.concat(this.buffer);
	else
		this.buffer.splice(0, 0, "" + stuff);
	return this;
};

StringBuffer.prototype.clear = function() {
	this.buffer = [];
};

StringBuffer.prototype.toString = function(sep) {
	if (!sep) sep = '';
	return this.buffer.join(sep);
};