import _ from "lodash";

/**
 * A string buffer for fast string manipulation
 */
export default class StringBuffer {
	constructor(str) {
		this.buffer = [];
		if (str)
			this.buffer.push(str);
	}

	append(stuff) {
		if (_.isString(stuff))
			this.buffer.push(stuff);
		else if (_.isArray(stuff))
			this.buffer = this.buffer.concat(stuff);
		else
			this.buffer.push("" + stuff);
		return this;
	}

	prepend(stuff) {
		if (_.isString(stuff))
			this.buffer.splice(0, 0, stuff);
		else if (_.isArray(stuff))
			this.buffer = stuff.concat(this.buffer);
		else
			this.buffer.splice(0, 0, "" + stuff);
		return this;
	}

	clear() {
		this.buffer = [];
	}

	removeLast() {
		this.buffer.pop();
		return this;
	}

	toString(sep) {
		if (!sep) sep = '';
		return this.buffer.join(sep);
	}
}
