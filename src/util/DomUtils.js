import _ from "lodash";

/**
 * dom Utility functions
 */
export default {
	isIE: (function() {
		let isIE = false, version = null, window = window || {}, navigator = navigator || {userAgent: ""};
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
		let el = document.createElement(tag);
		this.setElement(el, attribs, styles);
		if (html)
			el.innerHTML = html;
		return el;
	},

	createElementByString: function(str) {
		let temp = this.createElement('div', null, null, str);
		return temp.childNodes;
	},

	setElement: function (el, attribs, styles) {
		if (attribs) {
			_.forEach(attribs, function(value, key) {
			    el.setAttribute(key, value);
			 });
		}
		if (styles) {
			_.forEach(styles, function(value, key) {
				el.style[key] = value;
			});
		}
	},

	testElement: function(node, method) {
		return node && node.nodeType == 1 && ( !method || method(node) );
	},

	getAncestorBy: function(node, method) {
		while (node = node.parentNode)
			if (this.testElement(node, method) )
				return node;

		return null;
	},

	/**
	 * Get the position of element relative to the context.
	 * @param el the element
	 * @param context
	 * @returns {*[]}
	 */
	getPosition(el, context) {
		if (!context) context = document.body;
		let elRect = el.getBoundingClientRect();
		let contextRect = context.getBoundingClientRect();

		return [elRect.left - contextRect.left, elRect.top - contextRect.top];
	},

	getCenterPosition(el, context) {
		if (!context) context = document.body;
		let elRect = el.getBoundingClientRect();
		let contextRect = context.getBoundingClientRect();
		let w = elRect.right - elRect.left;
		let h = elRect.bottom - elRect.top;

		return [elRect.left - contextRect.left + w/2, elRect.top - contextRect.top + h/2];
	},

	move: function(el, x, y) {
		if (x) el.style.left = x + 'px';
		if (y) el.style.top = y + 'px';
	},

	getSize: function(el) {
		var w = parseInt(el.style.offsetWidth, 10);
		var h = parseInt(el.style.offsetHeight, 10);
		return [w, h];
	},

	resize: function(el, w, h) {
		if (w) el.style.width = w + "px";
		if (h) el.style.height = h + 'px';
	},

	preloadImages: function(array) {
		if (!this.preloadImages.list) this.preloadImages.list = [];
		if (!this.preloadImages.loaded) this.preloadImages.loaded = {};

		var list = this.preloadImages.list;
		var img, that = this;
		for (var i = 0; i < array.length; i++) {
			img = new Image();
			img.onload = function() {
				var index = list.indexOf(this);
				if (index !== -1) {
					that.preloadImages.loaded[this.name] = {width: this.width, height: this.height};
					// remove image from the array once it's loaded
					// for memory consumption reasons
					list.splice(index, 1);
				}
			};
			list.push(img);
			img.src = array[i];
			img.name = array[i];
		}
	},

	/**
	 * Get's the image's information given the url. Must be preloaded by calling the preloadImage function.
	 * @param src
	 */
	getImageInfo: function(src) {
		if (this.preloadImages.loaded) {
			return this.preloadImages.loaded[src];
		}
		return null;
	},

	/**
	 * Check whether the key event is from input, textarea or select.
	 * @param e  input event
	 */
	eventFromInput: function(e){
		var tagName = e.target.tagName;
		return (tagName == 'INPUT' || tagName == 'TEXTAREA' || tagName == 'SELECT');
	}
}
