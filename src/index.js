import Base64 from './util/base64'
import Cache from './util/Cache'
import Utils from './util/Utils'
import DomUtils from './util/dom-utils'
import StringBuffer from './util/string-buffer'
import Point from './geometry/Point'
import Line from './geometry/Line'
import Shape from './geometry/Shape'
import Rectangle from './geometry/Rectangle'
import Ellipse from './geometry/Ellipse'
import Rhombus from './geometry/Rhombus'
import Link from './geometry/Link'
import Events from '../lib/bean'
import EventDispatcher from './event/event-dispatcher'
import Graph from './graph/Graph'
import Cell from './graph/Cell'
import Node from './graph/Node'
import Edge from './graph/Edge'
import Layout from './layout/Layout'
import FlowLayout from './layout/FlowLayout'
import Label from './view/Label'
import Marker from './view/Marker'
import Renderer from './view/Renderer'
import SVGRenderer from './view/SVGRenderer'
import GraphBehavior from './behavior/GraphBehavior'
// import SelectionBehavior from './behavior/SelectionBehavior'

Shape.addShape('Rectangle', Rectangle)
Shape.addShape('Ellipse', Ellipse)
Shape.addShape('Rhombus', Rhombus)

export default {
  Base64,
  Cache,
  Utils,
  DomUtils,
  StringBuffer,
  Point,
  Line,
  Shape,
  Rectangle,
  Ellipse,
  Link,
  Events,
  EventDispatcher,
  Label,
  Marker,
  Graph,
  Cell,
  Node,
  Edge,
  Layout,
  FlowLayout,
  Renderer,
  SVGRenderer,
  GraphBehavior
  // SelectionBehavior
}
