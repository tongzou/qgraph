import Shape from './Shape'
import Point from './Point'
import Line from './Line'

export default class Rhombus extends Shape {
  toString () {
    return 'Rhombus:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}'
  }

  static getPerimeter (rect, pt, orthogonal = false) {
    let w = rect.width
    let h = rect.height
    let cx = rect.x
    let cy = rect.y
    let x = cx - w / 2
    let y = cy - h / 2

    let px = pt.x
    let py = pt.y

    // Special case for intersecting the diamond's corners
    if (cx === px) {
      if (cy > py) {
        return { point: new Point(cx, y), direction: Point.S }
        // top
      } else {
        return { point: new Point(cx, y + h), direction: Point.N }
        // bottom
      }
    } else if (cy === py) {
      if (cx > px) {
        return { point: new Point(x, cy), direction: Point.E }
        // left
      } else {
        return { point: new Point(x + w, cy), direction: Point.W }
        // right
      }
    }

    let tx = cx
    let ty = cy

    if (orthogonal) {
      if (px >= x && px <= x + w) {
        tx = px
      } else if (py >= y && py <= y + h) {
        ty = py
      }
    }

    let p, dir
    // TODO direction calculation is not quite right.
    // In which quadrant will the intersection be?
    // set the slope and offset of the border line accordingly
    if (px < cx) {
      if (py < cy) {
        p = Line.intersection(px, py, tx, ty, cx, y, x, cy)
        dir = Point.S
      } else {
        p = Line.intersection(px, py, tx, ty, cx, y + h, x, cy)
        dir = Point.N
      }
    } else if (py < cy) {
      p = Line.intersection(px, py, tx, ty, cx, y, x + w, cy)
      dir = Point.E
    } else {
      p = Line.intersection(px, py, tx, ty, cx, y + h, x + w, cy)
      dir = Point.W
    }
    return { point: p, direction: dir }
  }
}
