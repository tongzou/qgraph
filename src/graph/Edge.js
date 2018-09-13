import _ from 'lodash'
import Cell from './Cell'
import Rectangle from '../geometry/Rectangle'
import Link from '../geometry/Link'
import Label from '../view/Label'
import Cache from '../util/Cache'

class Edge extends Cell {
  constructor (graph, config = {}, source, target) {
    if (!config.id) config.id = _.uniqueId('E')
    super(graph, config)

    this.source = this.target = null
    this.setSource(source, config.sourcePos)
    this.setTarget(target, config.targetPos)
  }

  setSource (node, pos) {
    this.setTerminal(node, pos, 'source')
  }

  setTarget (node, pos) {
    this.setTerminal(node, pos, 'target')
  }

  /**
	 * Internal methods to set either the source or target
	 */
	 setTerminal (node, pos, dir) {
    var end = dir == 'source' ? this.source : this.target
    if (end == node) {
      // simply change the position of the edge.
      if (node) { node.setEdgeAt(this, pos) }
    } else {
      if (end) {
        // first remove the edge from the current end
        end.removeEdge(this)
      }

      if (node) {
        if (dir == 'source') { node.addOutEdge(this, pos) } else { node.addInEdge(this, pos) }
      }
      if (dir == 'source') { this.source = node } else { this.target = node }
      // this.clearPoints();
    }
  }

  getLabelBox (key) {
    var label = this.prop('label')
    if (label) { return Label.getLabelBoxForLink(label, this.viewProp(key, 'labelConfig'), this.getShape(key)) }
    return null
  }

  /**
	 * Return a pair of points as reference to the calculation of start and end points.
	 */
  getReferencePoints (key) {
    let pts = []
    if (this.source) { pts.push(this.source.getShape(key).center) } else { pts.push(this.viewProp(key, 'start')) }

    if (this.target) { pts.push(this.target.getShape(key).center) } else { pts.push(this.viewProp(key, 'end')) }

    return pts
  }

  getTerminalVisual (key, orthogonal) {
    let refPts = this.getReferencePoints(key)
    let terminals = []

    let getBound = function (pt) {
      return new Rectangle(pt.x, pt.y, 3, 3)
    }

    if (this.source) {
      terminals.push(this.source.getPort(key, this.prop('sourcePort'), refPts[1], orthogonal))
    } else { terminals.push({ point: refPts[0], direction: Rectangle.getDirection(getBound(refPts[0]), refPts[1], true) }) }

    if (this.target) {
      terminals.push(this.target.getPort(key, this.prop('targetPort'), refPts[0], orthogonal))
    } else { terminals.push({ point: refPts[1], direction: Rectangle.getDirection(getBound(refPts[1]), refPts[0], true) }) }
    return terminals
  }

  getShape (key) {
    let shape = Cache.get(this.id + '.shape', key)
    if (shape) return shape

    let config = this.viewProp(key, 'shape')
    shape = Link.getLink(this.getTerminalVisual(key, config.orthogonal), config, this.prop('startMarker'), this.prop('endMarker'))
    Cache.set(this.id + '.shape', shape, key)
    return shape
  }

  toString () {
    return 'Edge:{' + (!this.source ? 'null' : this.source.id) + '--' + (!this.target ? 'null' : this.target.id) + '}'
  }

  destroy () {
    super.destroy()
    this.setSource(null)
    this.setTarget(null)
  }
}
Edge.namespace = 'Edges'

export default Edge

/*

Edge.prototype.isVisible = function() {
	if (this.graph.getProperty("allowDanglingEdges")) {
		return (this.source ? this.source.isVisible() : true) && (this.target ? this.target.isVisible() : true) && this.getProperty("visible");
	} else
		return this.source && this.target && this.getProperty('visible') && this.source.isVisible() && this.target.isVisible();
};

*/
