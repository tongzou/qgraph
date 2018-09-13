import _ from 'lodash'
import Point from './Point'
import Shape from './Shape'

export default class Rectangle extends Shape {
  /**
   * Checks whether this rectangle contains a given point of a given rectangle
   */
  contains (el) {
    let w = el.width || 0
    let h = el.height || 0
    let left = el.x - w / 2
    let right = el.x + w / 2
    let top = el.y - h / 2
    let bottom = el.y + h / 2
    return (right <= this.right) && (left >= this.left) &&
      (top >= this.top) && (bottom <= this.bottom)
  }

  /**
   * Calcualte the distance to a point. 0 if this rectangle contains the point.
   */
  distance (pt) {
    if (this.contains(pt)) return 0

    if (pt.x < this.left) {
      if (pt.y < this.top) {
        return pt.distance(new Point(this.left, this.top))
      }
      if (pt.y <= this.bottom) return this.left - pt.x
      return pt.distance(new Point(this.left, this.bottom))
    }
    if (pt.x <= this.right) {
      if (pt.y <= this.top) return this.top - pt.y
      return pt.y - this.bottom
    }
    if (pt.y < this.top) {
      return pt.distance(new Point(this.right, this.top))
    }
    if (pt.y <= this.bottom) return pt.x - this.right
    return pt.distance(new Point(this.right, this.bottom))
  }

  /**
   * Given two points, we want to detect whether the line joining the pts intersect
   * with the rectangle or not. We assume only horizontal or vertical line segments.
   *
   * @return int the side of the intersection: -1: no intersection, 0: left, 1: top, 2: right, 3: bottom, 4: containment.
   */
  detectIntersection (pt1, pt2) {
    let horizontal = pt1.y === pt2.y
    let contains1 = this.contains(pt1)
    let contains2 = this.contains(pt2)
    if (contains1 && contains2) return 4
    if (!contains1 && !contains2) {
      if (horizontal && (pt1.y >= this.top && pt1.y <= this.bottom)) {
        if (pt1.x < this.left && pt2.x > this.right) return 0
        if (pt1.x > this.right && pt2.x < this.left) return 2
      }
      if (!horizontal && (pt1.x >= this.left && pt1.x <= this.right)) {
        if (pt1.y < this.top && pt2.y > this.bottom) return 1
        if (pt1.y > this.bottom && pt2.y < this.top) return 3
      }
      return -1
    }

    let outPt = contains1 ? pt2 : pt1
    if (horizontal) {
      if (outPt.x > this.right) return 2
      return 0
    } else {
      if (outPt.y < this.top) return 1
      return 3
    }
  }

  toString () {
    return 'Rectangle:{x=' + this.x + ';y=' + this.y + ';width=' + this.width + ';height=' + this.height + '}'
  }

  static getPerimeter (rect, pt, orthogonal = false) {
    let x = rect.x
    let y = rect.y
    let dx = pt.x - x
    let dy = pt.y - y
    let alpha = Math.atan2(dy, dx)
    let p = new Point(0, 0)
    let pi = Math.PI
    let pi2 = Math.PI / 2
    let beta = pi2 - alpha
    let t = Math.atan2(rect.height, rect.width)

    if (alpha < -pi + t || alpha > pi - t) {
      // Left edge
      p.x = rect.left
      p.y = y - rect.width * Math.tan(alpha) / 2
    } else if (alpha < -t) {
      // Top Edge
      p.y = rect.top
      p.x = x - rect.height * Math.tan(beta) / 2
    } else if (alpha < t) {
      // Right Edge
      p.x = rect.right
      p.y = y + rect.width * Math.tan(alpha) / 2
    } else {
      // Bottom Edge
      p.y = rect.bottom
      p.x = x + rect.height * Math.tan(beta) / 2
    }

    if (orthogonal) {
      if (alpha < -pi + t || alpha > pi - t) {
        // Left edge
        p.x = rect.left
        p.y = y
      } else if (alpha < -t) {
        // Top Edge
        p.y = rect.top
        p.x = x
      } else if (alpha < t) {
        // Right Edge
        p.x = rect.right
        p.y = y
      } else {
        // Bottom Edge
        p.y = rect.bottom
        p.x = x
      }
    }

    let dir = Rectangle.getDirection(rect, p, orthogonal)
    return { point: p, direction: dir }
  }

  /**
   * Return the bounding rectangle that contains p1 and p2
   */
  static getBoundingRectangle (pts, margin) {
    if (!pts || pts.length === 0) return null
    margin = margin || [0, 0, 0, 0]
    if (!_.isArray(margin)) {
      margin = [margin, margin, margin, margin]
    }
    let min = [pts[0].x, pts[0].y]
    let max = [pts[0].x, pts[0].y]
    for (let i = 1; i < pts.length; i++) {
      let p = pts[i]
      if (p.x < min[0]) {
        min[0] = p.x
      }
      if (p.y < min[1]) {
        min[1] = p.y
      }
      if (p.x > max[0]) {
        max[0] = p.x
      }
      if (p.y > max[1]) {
        max[1] = p.y
      }
    }
    min[0] = min[0] - margin[0]
    min[1] = min[1] - margin[1]
    max[0] = max[0] + margin[2]
    max[1] = max[1] + margin[3]
    let w = Math.abs(max[0] - min[0])
    let h = Math.abs(max[1] - min[1])
    return new Rectangle(min[0] + w / 2, min[1] + h / 2, w, h)
  }

  /**
   * Create a union of all the rectangles.
   * @param rects
   */
  static union (rects) {
    let minx = null; let miny = null; let maxx = -Infinity; let maxy = -Infinity
    _.each(rects, function (rect) {
      minx = minx || rect.x
      miny = miny || rect.y
      minx = Math.min(minx, rect.x)
      miny = Math.min(miny, rect.y)
      maxx = Math.max(maxx, rect.right())
      maxy = Math.max(maxy, rect.bottom())
    })
    minx = minx || 0
    miny = miny || 0
    return new Rectangle(minx, miny, maxx - minx, maxy - miny)
  }

  /**
   * Returns the direction the point <i>p</i> is in relation to the given rectangle.
   * Possible values are WEST (-1,0), EAST (1,0), NORTH (0,-1) and SOUTH (0,1) if orthogonal is true, otherwise return
   * the direction connection the center of r and p.
   * @param r
   * @param p
   * @param orthogonal
   * @returns {Point|*}
   */
  static getDirection (r, p, orthogonal = false) {
    if (!orthogonal) {
      return new Point(r.x, r.y).getDirection(new Point(p.x, p.y))
    }

    let i; let distance = Math.abs(r.left - p.x); let direction = Point.W

    i = Math.abs(r.top - p.y)
    if (i <= distance) {
      distance = i
      direction = Point.N
    }

    i = Math.abs(r.bottom - p.y)
    if (i <= distance) {
      distance = i
      direction = Point.S
    }

    i = Math.abs(r.right - p.x)
    if (i < distance) {
      direction = Point.E
    }

    return direction
  }
}
