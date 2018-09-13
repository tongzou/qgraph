import Rectangle from '../geometry/Rectangle'

let registry = {}

let Marker = (function () {
  /** Begin Standard Marker Type **/
  function arrow (size, source, styles) {
    let sign = source ? -1 : 1
    let marker = {
      viewBox: new Rectangle(-5, -5, 10, 10),
      size: size,
      ref: [4 * sign, 0],
      fill: styles.color
    }
    marker.shape = {
      name: 'Polygon',
      points: [[-2 * sign, 0], [-4 * sign, 4], [4 * sign, 0], [-4 * sign, -4]]
    }
    return marker
  }

  function triangle (size, source, styles) {
    let sign = source ? -1 : 1
    let marker = {
      viewBox: new Rectangle(-5, -5, 10, 10),
      size: size,
      ref: [4 * sign, 0],
      fill: styles.color
    }
    marker.shape = {
      name: 'Polygon',
      points: [[-5 * sign, -5], [-5 * sign, 5], [4 * sign, 0]]
    }
    return marker
  }

  function oval (size, source, styles) {
    let r = size / 2
    let marker = {
      viewBox: new Rectangle(-r, -r, size, size),
      size: size,
      ref: [0, 0],
      fill: styles.color
    }
    marker.shape = '<ellipse cx="0" cy="0" rx="' + r + '" ry="' + r + '"></ellipse>'
    return marker
  }

  function diamond (size, source, styles) {
    let sign = source ? -1 : 1
    let marker = {
      viewBox: new Rectangle(-5, -5, 10, 10),
      size: size,
      ref: [4 * sign, 0],
      fill: styles.color
    }
    marker.shape = {
      name: 'Polygon',
      points: [[-4, 0], [0, 4], [4, 0], [0, -4]]
    }
    return marker
  }
  /** End Standard Marker Type **/
  function getMarker (config, source) {
    let factory = registry[config.type]
    let marker = factory(config.size, source, config)
    marker.id = config.id
    return marker
  }

  registry['arrow'] = arrow
  registry['triangle'] = triangle
  registry['oval'] = oval
  registry['diamond'] = diamond

  return {
    registry: registry,
    getMarker: getMarker
  }
})()

export default Marker
