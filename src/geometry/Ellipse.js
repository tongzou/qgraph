import Shape from './Shape'
import Point from './Point'
import Rectangle from './Rectangle'

export default class Ellipse extends Shape {
  toString () {
    return 'Ellipse:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}'
  }

  static getPerimeter (rect, pt, orthogonal = false) {
    let a = rect.width / 2
    let b = rect.height / 2
    let cx = rect.x
    let cy = rect.y
    let px = pt.x
    let py = pt.y

    // Calculates straight line equation through
    // point and ellipse center y = d * x + h
    let dx = parseInt(px - cx)
    let dy = parseInt(py - cy)

    if (dx === 0 && dy !== 0) {
      return new Point(cx, cy + b * dy / Math.abs(dy))
    } else if (dx === 0 && dy === 0) {
      return new Point(px, py)
    }

    // Calculates intersection
    let d = dy / dx
    let h = cy - d * cx
    let e = a * a * d * d + b * b
    let f = -2 * cx * e
    let g = a * a * d * d * cx * cx + b * b * cx * cx - a * a * b * b
    let det = Math.sqrt(f * f - 4 * e * g)

    // Two solutions (perimeter points)
    let xout1 = (-f + det) / (2 * e)
    let xout2 = (-f - det) / (2 * e)
    let yout1 = d * xout1 + h
    let yout2 = d * xout2 + h
    let dist1 = Math.sqrt(Math.pow((xout1 - px), 2) + Math.pow((yout1 - py), 2))
    let dist2 = Math.sqrt(Math.pow((xout2 - px), 2) + Math.pow((yout2 - py), 2))

    // Correct solution
    let xout = 0
    let yout = 0

    if (dist1 < dist2) {
      xout = xout1
      yout = yout1
    } else {
      xout = xout2
      yout = yout2
    }

    let p = new Point(xout, yout)
    let dir = Rectangle.getDirection(rect, p, orthogonal)
    if (orthogonal) {
      if (dir.x === -1) {
        return { point: new Point(cx - a, cy), direction: dir }
      }
      if (dir.x === 1) {
        return { point: new Point(cx + a, cy), direction: dir }
      }
      if (dir.y === -1) {
        return { point: new Point(cx, cy - b), direction: dir }
      }
      if (dir.y === 1) {
        return { point: new Point(cx, cy + b), direction: dir }
      }
    }
    return { point: p, direction: dir }
  }
}
