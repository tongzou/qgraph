import Shape from "./Shape";

export default class Ellipse extends Shape {
	toString() {
		return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}';
	}
}
