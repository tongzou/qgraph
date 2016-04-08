///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//                           The Event Manager                               //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

import _ from "lodash";
import * as KeyUtils from "./KeyUtils";
import DomUtils from "../util/DomUtils";
import StringBuffer from "./../util/StringBuffer";
const d3 = require("d3");

export default class EventManager {
	/**
	 * Constructor
	 * @param root the root element that the manager will listen to.
	 * @param data optional data element for the root.
	 */
	constructor(root, data) {
		this.root = root;
		if (data)
			this.root.__data__ = data;
		this.d3root = d3.select(root);
		this.listeners = {};

		// Simulate mouseenter/mouseleave events
		this.enterStack = [];
	}

	/**
	 * Start listening for events.
	 */
	startEvents() {
		let f = () => this.dispatch();
		this.d3root.on('mousedown', f)
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
	}

	startPositionEvents() {
		let t = _.throttle(this.getPosition, 100, {'leading':true, 'trailing':false});
		let f = _.bind(t, this);

		this.d3root.on('mousemove.p', f);
	}

	startZoomEvents() {
		// Initialize zoom listener
		let zoomHandler = () => {
			if (this.dragging) return;
			this.sendDispatch(d3.event.type, 'root', null);
		};
		this.zoom = d3.behavior.zoom()
			.scaleExtent([0.5, 4])
			.on("zoomstart", zoomHandler)
			.on("zoom", zoomHandler)
			.on("zoomend", zoomHandler);
		this.d3root.call(this.zoom).on('mousedown.zoom', null).on("dblclick.zoom", null);
	}

	startKeyEvents() {
		let f = () => this.dispatch();
		d3.select(document).on('keydown', f).on('keyup', f);
	}

	/**
	 * Stop listening for events.
	 */
	stopEvents() {
		this.d3root.on('mousedown', null)
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
	}

	stopPositionEvents() {
		this.d3root.on('mousemove.p', null);
	}

	stopZoomEvents() {
		this.d3root.on("mousedown.zoom", null)
			.on("mousemove.zoom", null)
			.on("dblclick.zoom", null)
			.on("touchstart.zoom", null)
			.on("wheel.zoom", null)
			.on("mousewheel.zoom", null)
			.on("MozMousePixelScroll.zoom", null);
	}

	stopKeyEvents() {
		d3.select(document).on('keydown', null).on('keyup', null);
	}

	getEventInfo() {
		let event = d3.event;
		let target = event.target;
		let buf = new StringBuffer(), ns, data, stack = [];

		while (!data && target && target != document) {
			data = target.__data__;
			if (data)
				event.dataTarget = target;
			ns = target.getAttribute('ns');
			if (ns) {
				if (!event.nsTarget) event.nsTarget = target;
				stack.splice(0, 0, target);
				buf.prepend(ns);
			}
			target = target.parentNode;
		}
		if (!data) return null;

		// target stack is a stack of all the ns targets up to the one with the data binding.
		event.targetStack = stack;
		ns = buf.toString('.');
		if (ns == '') ns = 'root';
		return {data: data, ns: ns};
	}

	/**
	 * The main dispatcher method, it dispatches the event and data to registered handlers.
	 */
	dispatch() {
		let event = d3.event, type = event.type;

		// Do not dispatch other events if we are dragging.
		if (this.dragging || DomUtils.eventFromInput(event)) return;

		let data, ns, pos = this.getPosition(), info;
		if (type == 'keydown' || type == 'keyup') {
			data = this.graph;
			ns = KeyUtils.getKeyEvent(event);
		} else {
			info = this.getEventInfo();
			if (!info) return;
			data = info.data;
			ns = info.ns;
		}

		// See if we should create drag events
		if (type == 'mousedown' && event.button == 0 /*only drag on left click*/) {
			// Create drag object.
			const dragObject = {data: data, pos: ns == 'root' ? d3.mouse(this.root) : pos};
			this.dragging = false;
			// Start listening for mouse move.
			let w, dragPos;

			const mousemove = _.bind(function() {
				let currentPos = this.getPosition();
				if (!this.dragging) {
					// check if the mouse has moved. IE always fire mousemove after mousedown even if the mouse hasn't moved yet.
					if (dragObject.pos[0] == currentPos[0] && dragObject.pos[1] == currentPos[1]) return;

					// start dragging
					this.dragging = true;
					this.sendDispatch('dragstart', ns, dragObject.data, dragObject.pos);
				}
				if (ns == "graph")
					dragPos = d3.mouse(this.root);
				else
					dragPos = currentPos;
				this.getEventInfo();
				this.sendDispatch('drag', ns, dragObject.data, dragPos);
			}, this);
			const mouseup = _.bind(function() {
				if (ns == "root")
					dragPos = d3.mouse(this.root);
				else
					dragPos = this.getPosition();

				if (this.dragging) {
					this.dragging = false;
					this.sendDispatch('dragend', ns, dragObject.data, dragPos);
				} else
					this.sendDispatch('mouseup', ns, this.getEventInfo().data, dragPos);

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
	}

	/**
	 * try to simulate mouseenter/mouseleave events.
	 */
	simulateEnterLeave(type, ns, data, pos) {
		let last, stack;
		const clearEnterStack = k => {
			k = k || 0;
			// Clear off the enter stack.
			while (this.enterStack.length >= k + 1) {
				last = this.enterStack.pop();
				this.sendDispatch('mouseleave', last.ns, last.data, pos);
			}
		};

		if (ns && ns != 'root') {
			const getNS = function(index) {
				let buf = new StringBuffer();
				for (let j = 0; j <= index; j++)
					buf.append(stack[j].getAttribute("ns"));
				return buf.toString('.');
			};
			if (type == 'mouseover') {
				stack = d3.event.targetStack;
				let item;
				for (let i = 0; i < stack.length; i++) {
					if (i < this.enterStack.length) {
						if (this.enterStack[i].target != stack[i]) {
							clearEnterStack(i);
						} else
							continue;
					}
					item = {data: data, ns: getNS(i), target: stack[i]};
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
		if (ns == 'root' && this.enterStack.length > 0)
			clearEnterStack();
	}

	sendDispatch(type, ns, data, pos) {
		const event = d3.event;
		//if (type != 'mouseover' && type != 'mouseout')
		//	console.log('EventDispatcher', "sendDispatch - " + type + '.' + ns + ';' + pos + ';datatarget=' + event.dataTarget + ';data=' + data);
		let listeners, listener;
		const nsType = ns ? type + '.' + ns : type;
		for (let key in this.listeners) {
			listeners = this.listeners[key];
			if (this.match(nsType, key)) {
				for (let i = 0; i < listeners.length; i++) {
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
	}

	/**
	 * Check if the registered event type matches the real event type. "*" is allowed as a wild card.
	 */
	match(nsType, registeredType) {
		const arr = registeredType.split('*');
		if (arr.length == 1)
			return nsType == registeredType;

		let substr, index = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i].length == 0) continue;
			substr = nsType.slice(index);
			index = substr.indexOf(arr[i]);
			if (index < 0)
				return false;
			index += arr[i].length;
		}
		return true;
	}

	getPosition() {
		const pos = d3.mouse(this.root); //util.scale(this.graph, d3.mouse(this.graph.viewBase));
		if(! _.isNaN(pos[0]) && ! _.isNaN(pos[1])) {
			this.lastPosition = pos;
		}
		return this.lastPosition;
	}

	/**
	 * Registers a key event handler
	 * // Key is object {ctrl, alt, shift, meta, code}
	 */
	registerKey(event, key, callback, context) {
		if (_.isArray(key)) {
			_.each(key, function(k) {
				this.registerKey(event, k, callback, context);
			}, this);
			return;
		}

		if(!_.isString(event)) {
			return;
		}

		key = KeyUtils.getKeyData(key.ctrl, key.alt, key.shift, key.meta, key.code)

		if(!key.length) {
			return;
		}

		key = new StringBuffer(event).append(key).toString('.');

		const listener = {callback: callback, context: context};
		this.listeners[key] || (this.listeners[key] = []);
		this.listeners[key].push(listener);
	}

	// TODO: Review since this is a just a copy
	unregisterKey(event, key, callback, context) {
		let listeners = this.listeners[type], listener;
		if (!listeners) return;
		for (let i = 0; i < listeners.length; i++) {
			listener = listeners[i];
			if (listener.callback === callback && (!context || context === listener.context)) {
				listeners.splice(i, 1);
				return;
			}
		}
	}

	/**
	 * Registers an event handler
	 */
	register(type, callback, context, zIndex) {
		if (_.isArray(type)) {
			_.each(type, function(t) {
				this.register(t, callback, context, zIndex);
			}, this);
			return;
		}
		const listener = {callback: callback, context: context, zIndex: zIndex};
		this.listeners[type] || (this.listeners[type] = []);
		this.listeners[type].push(listener);
	}

	unregister(type, callback, context) {
		let listeners = this.listeners[type], listener;
		if (!listeners) return;
		for (let i = 0; i < listeners.length; i++) {
			listener = listeners[i];
			if (listener.callback === callback && (!context || context === listener.context)) {
				listeners.splice(i, 1);
				return;
			}
		}
	}

	destroy() {
		this.stopEvents();
		delete this.root.__data__;
		delete this.root;
		delete this.d3root;
		delete this.zoom;
		delete this.listeners;
		delete this.enterStack;
	}
}
