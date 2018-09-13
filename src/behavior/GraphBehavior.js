/**
 * Created by tong on 6/28/2016.
 */
import Behavior from './Behavior'

/**
 * Graph handler handles Panning and Zoom and rubber band selection
 */
class GraphBehavior extends Behavior {
  constructor (renderer) {
    super(renderer)
    let dispatcher = renderer.dispatcher
    // TODO:
    // let f = function(type, ns, graph, pos, event) {
    // 	//Cursor.updateCursor(type, ns, graph, event);
    // };
    dispatcher.register(/^drag.*\.graph$/, this.handleDrag, this)
    dispatcher.register(/^zoom/, this.handleZoom, this)
    // dispatcher.register(['mousedown.graph', 'mouseenter.graph', 'mouseleave.graph'], f);
    this.offset = null
  }

  handleZoom (type, ns, graph, pos, event) {
    this.renderer.transform(null, null, event.scale)
  }

  handleDrag (type, ns, graph, pos, event) {
    if (type == 'dragstart') {
      let pan = (this.renderer.prop('defaultClickMode') == 'pan') ^ (event.ctrlKey || event.shiftKey)
      if (!pan) return
      let t = this.renderer.translate
      this.offset = [t[0] - pos[0], t[1] - pos[1]]
      return
    }
    if (!this.offset) return
    this.renderer.transform(pos[0] + this.offset[0], pos[1] + this.offset[1])
    if (type == 'dragend') {
      // Cursor.updateCursor('mouseup', ns, graph, event);
      delete this.offset
    }
  }
}

export default GraphBehavior
