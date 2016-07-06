export default class Behavior {
	constructor(renderer) {
		this.renderer = renderer;
	}

	destroy() {
		delete this.renderer;
	}
}
