import Events from "bean";
import Cache from "./util/Utils";
import Utils from "./util/Utils";
import DomUtils from "./util/DomUtils";
import StringBuffer from "./util/StringBuffer";
import Point from "./geometry/Point";
import Line from "./geometry/Line";
import Shape from "./geometry/Shape";
import Rectangle from "./geometry/Rectangle";
import Ellipse from "./geometry/Ellipse";
import EventDispatcher from "./event/EventDispatcher";
import Graph from "./graph/Graph";
import Element from "./graph/Element";
import Node from "./graph/Node";
import Edge from "./graph/Edge";
import Layout from "./layout/Layout";
import FlowLayout from "./layout/FlowLayout";
import Label from "./view/Label";
import Link from "./view/Link";
import Marker from "./view/Marker";
import GraphView from "./view/GraphView";
import SVGView from "./view/SVGView";

Shape.addShape("Rectangle", Rectangle);
Shape.addShape("Ellipse", Ellipse);

export default {
	Events,
	Cache,
	Utils,
	DomUtils,
	StringBuffer,
	Point,
	Line,
	Shape,
	Rectangle,
	Ellipse,
	EventDispatcher,
	Label,
	Link,
	Marker,
	Graph,
	Element,
	Node,
	Edge,
	Layout,
	FlowLayout,
	GraphView,
	SVGView
};
