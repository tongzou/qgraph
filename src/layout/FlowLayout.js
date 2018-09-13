import Layout from './Layout'

class FlowLayout extends Layout {
  layout (root, bounds) {
    var items
    if (!root) { items = this.owner.childNodes } else if (_.isArray(root)) { items = root } else { items = root.getLinkedNodes('target') }
    if (!items || items.length == 0) return

    var x = 0; var y = 0; var h = 0; var node
    var p1 = 0; var p2 = 0
    for (var i = 0; i < items.length; i++) {
      node = items[i]
      if (x > 0 && x + this.hgap + node.getProperty('width') > bounds.width) {
        // create new line
        y += h + this.vgap
        x = 0; h = 0; p1 = 0; p2++
      }
      node._flPos = [p1, p2]
      node.moveTo([bounds.x + x, bounds.y + y])
      x += this.hgap + node.getProperty('width')
      p1++
      h = h < node.getProperty('height') ? node.getProperty('height') : h
    }
    this.trigger(new Rectangle(bounds.x, bounds.y, bounds.width, y + h))
  }
}

FlowLayout.DEFAULTS = {
  hgap: 10,
  vgap: 10
}

export default FlowLayout
