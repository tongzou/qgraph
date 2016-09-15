/*
 *		 Copyright (c) Apr  6 08:05:34  MTCC
 *	Author: Michael Thomas
 *	Module: jscanvas.js
 *	Created: Sat Apr  6 08:05:34 2013
 *      License: MIT
 *	Abstract:
 *	   fake out a 2d context to write the javascript that made the call.
 */

/* Edit History:
 */


// create a new jsCanvas which can be used to capture the javascript needed redraw
// the SVG file at a later time without the need of either the SVG, or the rendering
// javascript (canvg).
//
//  objectname: the name of the object that will be created when the javascript is loaded/evaled
//  [width, height]: optional values to scale the object to fixed values at compile time
//
// once you render() and toString (), the output will contain a new object which can be loaded
// at a later time in your production code (typically). You instantiate the object with:
//
//  var myobj = new myObject (ctx2d);
//
//  where ctx2d is the 2d context of a Canvas tag (eg getContext('2d')).
//  you can capture all of the sets to ctx2d's fields by overriding the
//  setter method of the object. eg:
//
//  myobj.setter = function (ctx, key, value) { ctx [key] = value; }
//
// obviously the setter function can be more elaborate and transform fill colors, etc.
// another niceism is that object contains the bounding box of the SVG file in
// myobj.inwidth and myobj.inheight. You can use them to scale your object at runtime
// to fit your canvas if you like, for example:
//
//  ctx2d.setTransform(1, 0, 0, 1, 0, 0);			// reset transforms to base
//  ctx2d.scale (200/myobj.inwidth, 400/myobj.inheight);	// squeeze this into 200x400
//
// once you've set everything up, you then just render the object:
//
// myobj.render ();
//

function jsCanvas(objectname, width, height) {
	this.canvas = document.createElement('canvas');
	this.canvas.width = width;
	this.canvas.height = height;
	document.body.appendChild(this.canvas);
	this.canvas.jsctx = new jsContext2d(this.canvas, objectname);
	this.canvas.real2dContext = this.canvas.getContext('2d');
	this.canvas.getContext = function (type) {
		if (type == '2d')
			return this.jsctx;
		else
			return null;
	};
}

// render the supplied SVG string
//  svg: the svg string to be processed
//  [oncomplete]: function to be called when rendering is complete; NB: this function is asynch
//                in nature because of the need to load images, etc
//  [opts]:       opts to supply to canvg if you want to override the defaults here.

jsCanvas.prototype.compile = function (svg, oncomplete, opts) {
	var state = this;
	if (!opts) {
		opts = {ignoreDimensions: false, ignoreClear: true, ignoreMouse: true};
		if (this.canvas.width) {
			opts.scaleWidth = this.canvas.width;
			opts.ignoreDimensions = true;
		}
		if (this.canvas.height) {
			opts.scaleHeight = this.canvas.height;
			opts.ignoreDimensions = true;
		}
	} else {
		if (opts.renderCallback)
			oncomplete = opts.renderCallback;
	}
	// we need to catch this to finish up...
	opts.renderCallback = function () {
		state.canvas.jsctx.done();
		if (oncomplete)
			oncomplete();
	};
	canvg(this.canvas, svg, opts);
};

// get the compiled output; you can eval this, or more likely POST the contents to your
//  site to be used later.

jsCanvas.prototype.toString = function () {
	return this.canvas.jsctx.toString();
};


// all of these are private objects/methods.


function jsContext2d(canvas, objectname) {
	this.canvas = canvas;
	/* defs from chrome
	 fillStyle: "#000000"
	 font: "10px sans-serif"
	 globalAlpha: 1
	 globalCompositeOperation: "source-over"
	 lineCap: "butt"
	 lineJoin: "miter"
	 lineWidth: 1
	 miterLimit: 10
	 shadowBlur: 0
	 shadowColor: "rgba(0, 0, 0, 0.0)"
	 shadowOffsetX: 0
	 shadowOffsetY: 0
	 strokeStyle: "#000000"
	 textAlign: "start"
	 textBaseline: "alphabetic"
	 */
	this.lastFields = {
		fillStyle: null,
		strokeStyle: null,
		font: '10px sans-serif',	// lest canvg melt down
		lineWidth: null,
		lineCap: null,
		lineJoin: null,
		miterLimit: null,
		globalAlpha: null,
		textBaseline: null,
		textAlign: null,
		shadowBlur: null,
		shadowColor: null,
		shadowOffsetX: null,
		shadowOffsetY: null

	};
	// initialize the context's fields
	for (var i in this.lastFields) {
		this [i] = this.lastFields [i];
	}
	this.fieldStack = [];
	this.finished = false;
	this.fn = objectname;
	this.output = '';
	this.output += 'window.' + this.fn + '= function (ctx) { this.ctx = ctx; this.gradients = [];};\n';
	this.output += 'window.' + this.fn + '.prototype.setter = function (ctx, key, val) { ctx [key] = val; };\n';
	this.output += 'window.' + this.fn + '.prototype.render = function (ctx) { if (! ctx) ctx = this.ctx; \n';
	this.outputimages = 'window.' + this.fn + '.imgs = [];\n';
	this.outputimages += 'window.' + this.fn + '.loadImages = function () { \n';
	this.ngradients = 0;
	this.nimages = 0;
}

jsContext2d.prototype.done = function () {
	if (!this.finished) {
		this.finished = true;
		this.output += '};\n';
		this.output += "window." + this.fn + ".prototype.inheight = " + this.canvas.height + ";\n";
		this.output += "window." + this.fn + ".prototype.inwidth = " + this.canvas.width + ";\n",
			this.outputimages += '};\n';
		this.output += this.outputimages;
		this.output += 'window.' + this.fn + '.imagesLoaded = function () {\n';
		this.output += 'for (var i in window.' + this.fn + '.imgs) { if (window.' + this.fn + '.imgs [i].complete == false) return false; }\n';
		this.output += ' return true; };\n';
		// NB: we preload all of the images at js load time so that it's likely that
		//     they'll all be loaded at object instantiation time. since they're data:
		//     that should be a decent assumption, but if not it'll need async bizness.
		this.output += 'window.' + this.fn + '.loadImages ();';
	}
};

jsContext2d.prototype.toString = function () {
	return this.output;
};

jsContext2d.prototype.checkFields = function () {
	for (var i in this.lastFields) {
		var last = this.lastFields [i];
		if (this.fieldsInvalid || last != this [i] || typeof (last) != typeof (this [i])) {
			if (this [i] === null || this [i] === undefined)
				continue;
			switch (typeof this [i]) {
				case 'boolean':
				case 'number':
					this.output += 'this.setter (ctx, "' + this.slashify(i) + '", ' + this [i] + ');\n';
					break;
				case 'string':
					this.output += 'this.setter (ctx, "' + this.slashify(i) + '", "' + this.slashify(this [i]) + '");\n';
					break;
				default:
					if (this [i].jscGradient) {
						// found a gradient or pattern
						this.output += 'this.setter (ctx, "' + this.slashify(i) + '", this.gradients [' + (this[i].jscGradient - 1) + ']);\n';
					} else
						console.log(i + ": don't know how to handle field " + (typeof (this [i])) + " " + this[i]);
					xobj = this [i];
					break;
			}
			this.lastFields [i] = this [i];
			// update the real context too
			this.canvas.real2dContext [i] = this [i];
		}
	}
	this.fieldsInvalid = false;
};

jsContext2d.prototype.pushFields = function () {
	var push = {};
	for (var i in this.lastFields) {
		push [i] = this.lastFields [i];
	}
	this.fieldStack.push(push);
};

jsContext2d.prototype.popFields = function () {
	var pop = this.fieldStack.pop();
	for (var i in this.lastFields) {
		this.lastFields [i] = pop [i];
	}
};

jsContext2d.prototype.getBase64Image = function (img) {
	// Create an empty canvas element
	var canvas = document.createElement("canvas");
	canvas.width = img.width;
	canvas.height = img.height;

	// Copy the image contents to the canvas
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0);
	var dataURL = canvas.toDataURL("image/png");
	return dataURL;
};

jsContext2d.prototype.emitFunc = function (fn, args, fnprefix) {
	this.checkFields();
	argstr = '';
	beforestr = '';
	var nobj = 0;
	for (var i in args) {
		var arg = args [i];
		switch (typeof arg) {
			case 'number':
				argstr += arg.toFixed(2) + ',';
				break;
			case 'string':
				argstr += '"' + this.slashify(arg) + '"' + ',';
				break;
			default:
				if (arg.tagName == 'IMG') {		// should prolly check to see if it's a DOM object too.
					var data = this.getBase64Image(arg);
					this.outputimages += 'window.' + this.fn + '.imgs[' + this.nimages + '] = new Image ();\nwindow.' + this.fn + '.imgs[' + this.nimages + '].src="' + this.slashify(data) + '"' + ';\n';
					argstr += 'window.' + this.fn + '.imgs[' + this.nimages + '],';
					this.nimages++;
				} else if (arg.tagName == 'CANVAS') {
					var data = arg.toDataURL("image/png");
					this.outputimages += 'window.' + this.fn + '.imgs[' + this.nimages + '] = new Image ();\nwindow.' + this.fn + '.imgs[' + this.nimages + '].src="' + this.slashify(data) + '"' + ';\n';
					argstr += 'window.' + this.fn + '.imgs[' + this.nimages + '],';
					this.nimages++;
				} else {
					console.log(fn + ": don't know how to handle " + (typeof (arg)) + " " + arg.tagName);
					return this.canvas.real2dContext [fn].apply(this.canvas.real2dContext, args);
				}
		}
	}
	if (beforestr.length)
		this.output += beforestr;
	if (fnprefix)
		this.output += fnprefix;
	this.output += 'ctx.' + fn + '(';
	if (argstr.length)
		this.output += argstr.substr(0, argstr.length - 1);
	this.output += ');\n';
	// now execute it in the real canvas
	return this.canvas.real2dContext [fn].apply(this.canvas.real2dContext, args);
};

jsContext2d.prototype.fill = function () {
	return this.emitFunc('fill', arguments);
};
jsContext2d.prototype.stroke = function () {
	return this.emitFunc('stroke', arguments);
};
jsContext2d.prototype.translate = function () {
	return this.emitFunc('translate', arguments);
};
jsContext2d.prototype.transform = function () {
	return this.emitFunc('transform', arguments);
};
jsContext2d.prototype.rotate = function () {
	return this.emitFunc('rotate', arguments);
};
jsContext2d.prototype.scale = function () {
	return this.emitFunc('scale', arguments);
};
jsContext2d.prototype.save = function () {
	this.emitFunc('save', arguments);
	this.pushFields();
};
jsContext2d.prototype.restore = function () {
	this.emitFunc('restore', arguments);
	this.popFields();
};
jsContext2d.prototype.beginPath = function () {
	return this.emitFunc('beginPath', arguments);
};
jsContext2d.prototype.closePath = function () {
	return this.emitFunc('closePath', arguments);
};
jsContext2d.prototype.moveTo = function () {
	return this.emitFunc('moveTo', arguments);
};
jsContext2d.prototype.lineTo = function () {
	return this.emitFunc('lineTo', arguments);
};
jsContext2d.prototype.clip = function () {
	return this.emitFunc('clip', arguments);
};
jsContext2d.prototype.quadraticCurveTo = function () {
	return this.emitFunc('quadraticCurveTo', arguments);
};
jsContext2d.prototype.bezierCurveTo = function () {
	return this.emitFunc('bezierCurveTo', arguments);
};
jsContext2d.prototype.arc = function () {
	return this.emitFunc('arc', arguments);
};
jsContext2d.prototype.createPattern = function () {
	var g = this.emitFunc('createPattern', arguments, 'this.gradients [' + this.ngradients + '] = ');
	g.jscGradient = ++this.ngradients;
	return g;
};
jsContext2d.prototype.createLinearGradient = function () {
	this.output += 'this.gradients [' + this.ngradients + '] = ';
	var n = this.ngradients;
	var g = this.emitFunc('createLinearGradient', arguments);
	var oldadd = g.addColorStop;
	var state = this;
	// override the colorstop function
	g.addColorStop = function (stop, color) {
		state.output += sprintf('this.gradients [%d].addColorStop (%f, "%s");\n',
			n, stop, color);
		// execute in parent
		oldadd.apply(g, arguments);
	};
	g.jscGradient = ++this.ngradients;
	return g;
};
jsContext2d.prototype.createRadialGradient = function () {
	this.output += 'this.gradients [' + this.ngradients + '] = ';
	var n = this.ngradients;
	var g = this.emitFunc('createRadialGradient', arguments);
	var oldadd = g.addColorStop;
	var state = this;
	g.addColorStop = function (stop, color) {
		state.output += sprintf('this.gradients [%d].addColorStop (%f, "%s");\n',
			n, stop, color);
		oldadd.apply(g, arguments);
	};
	g.jscGradient = ++this.ngradients;
	return g;
};

jsContext2d.prototype.fillText = function () {
	return this.emitFunc('fillText', arguments);
};
jsContext2d.prototype.strokeText = function () {
	return this.emitFunc('strokeText', arguments);
};
jsContext2d.prototype.measureText = function () {
	return this.emitFunc('measureText', arguments);
};
jsContext2d.prototype.drawImage = function () {			// XXX: problematic because it takes an img/canvas
	return this.emitFunc('drawImage', arguments);
};
jsContext2d.prototype.fillRect = function () {
	return this.emitFunc('fillRect', arguments);
};
jsContext2d.prototype.clearRect = function () {
	return this.emitFunc('clearRect', arguments);
};
jsContext2d.prototype.getImageData = function () {
	return this.emitFunc('getImageData', arguments);
};
jsContext2d.prototype.putImageData = function () {		// XXX: problematic it takes an array of image data
	return this.emitFunc('putImageData', arguments);
};
jsContext2d.prototype.isPointPath = function () {
	return this.emitFunc('isPointPath', arguments);
};

jsContext2d.prototype.slashify = function (s) {
	if (!s)
		return '';
	s = s.replace(/\\'/g, "\\\\'");
	return s.replace(/'/g, "\\'");
};



