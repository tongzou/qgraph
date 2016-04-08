/**
 * dom Utility functions
 */
export default {
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
		this.setElement(e, attribs, styles);
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
		var x = 0;
		var y = 0;

		while(el && el != context) {
			x += (el.offsetLeft - el.scrollLeft + el.clientLeft);
			y += (el.offsetTop - el.scrollTop + el.clientTop);
			el = el.offsetParent;
		}
		return [x, y];
	},

	move: function(el, x, y) {
		if (!_.isFunction(el.node))
			el = d3.select(el);
		if (el.empty()) return;
		if (x) el.style('left', x + 'px');
		if (y) el.style('top', y + 'px');
	},

	/*getPosition: function(el) {
		var offset = $(el).offset();
		return [offset.left, offset.top];
	},*/

	getSize: function(el) {
		if (!_.isFunction(el.node))
			el = d3.select(el);
		if (el.empty()) return [0, 0];
		var w = parseInt(el.style("width"), 10);
		var h = parseInt(el.style("height"), 10);
		return [w, h];
	},

	resize: function(el, w, h) {
		if (!_.isFunction(el.node))
			el = d3.select(el);
		if (el.empty()) return;
		if (w) el.style('width', w + "px");
		if (h) el.style('height', h + 'px');
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
};
