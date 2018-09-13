import Point from './Point'

export default class Line {
  constructor (start, end) {
    this.start = start
    this.end = end
  }

  /**
   * Calculate the length of this line
   */
  length () {
    return this.start.distance(this.end)
  }

  /**
   * Calculate the distance of this line to the point.
   */
  distance (pt) {
    const x = this.start.distance(pt)
    if (x === 0) return 0

    const l = this.length()
    const cosa = new Point((this.end.x - this.start.x) / l, (this.end.y - this.start.y) / l).dotProduct(
      new Point(pt.x / x, pt.y / x))

    return x * Math.sqrt(1 - cosa * cosa)
  }

  /**
   * Function: intersection
   *
   * Returns the intersection of two lines as an <mxPoint>.
   *
   * Parameters:
   *
   * x0 - X-coordinate of the first line's startpoint.
   * y0 - X-coordinate of the first line's startpoint.
   * x1 - X-coordinate of the first line's endpoint.
   * y1 - Y-coordinate of the first line's endpoint.
   * x2 - X-coordinate of the second line's startpoint.
   * y2 - Y-coordinate of the second line's startpoint.
   * x3 - X-coordinate of the second line's endpoint.
   * y3 - Y-coordinate of the second line's endpoint.
   */
  static intersection (x0, y0, x1, y1, x2, y2, x3, y3) {
    const denom = ((y3 - y2) * (x1 - x0)) - ((x3 - x2) * (y1 - y0))
    const numeA = ((x3 - x2) * (y0 - y2)) - ((y3 - y2) * (x0 - x2))
    const numeB = ((x1 - x0) * (y0 - y2)) - ((y1 - y0) * (x0 - x2))

    const ua = numeA / denom
    const ub = numeB / denom

    if (ua >= 0.0 && ua <= 1.0 && ub >= 0.0 && ub <= 1.0) {
      // Get the intersection point
      var intersectionX = x0 + ua * (x1 - x0)
      var intersectionY = y0 + ua * (y1 - y0)

      return new Point(intersectionX, intersectionY)
    }

    // No intersection
    return null
  }

  toString () {
    return 'Line:{start=' + this.start + ';end=' + this.end + '}'
  }
}
