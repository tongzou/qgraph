import _ from 'lodash'
import Base64 from '../util/base64'
import DomUtils from '../util/dom-utils'
import Renderer from './Renderer'
import StringBuffer from '../util/string-buffer'

const NS = 'http://www.w3.org/2000/svg'
if (typeof (SVGElement) !== 'undefined') {
  var svg = document.createElementNS(NS, 'svg')
  svg.innerHTML = '<circle/>'
  if (svg.firstChild !== '[object SVGCircleElement]') {
    Object.defineProperties(SVGElement.prototype, {
      'outerHTML': {
        enumerable: false,
        configurable: true,
        get: function () {
          var $node, $temp
          $temp = document.createElement('div')
          $node = this.cloneNode(true)
          $temp.appendChild($node)
          return $temp.innerHTML
        }
      },
      'innerHTML': {
        enumerable: false,
        configurable: true,
        get: function () {
          var s = this.outerHTML
          var ropen = new RegExp('<' + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', 'i')
          var rclose = new RegExp('</' + this.nodeName + '>$', 'i')
          return s.replace(ropen, '').replace(rclose, '')
        },
        set: function (markup) {
          // empty el first.
          let child
          while ((child = this.lastChild) !== null) { this.removeChild(child) }
          let buf = new StringBuffer()
          buf.append('<svg>').append(markup).append('</svg')
          let $temp = DomUtils.createElement('div', null, null, buf.toString()).firstElementChild
          while ($temp.firstChild) { this.appendChild($temp.firstChild) }
        }
      }
    })
  }
  // Define the toDataURL for SVG
  SVGElement.prototype.toDataURL = function (type, options = {}) {
    let _svg = this

    let debug = function (msg) {}

    if (options['debug'] === true && typeof (console) !== 'undefined') { debug = function (msg) { console.log('SVG.toDataURL:', msg) } }

    function exportSVG () {
      var svgXml = _svg.outerHTML
      var svgDataurl = base64dataURLencode(svgXml)
      debug(type + ' length: ' + svgDataurl.length)

      // NOTE double data carrier
      if (options.callback) options.callback(svgDataurl)
      return svgDataurl
    }

    function base64dataURLencode (s) {
      var b64 = 'data:image/svg+xml;base64,'

      // https://developer.mozilla.org/en/DOM/window.btoa
      if (window && window.btoa) {
        debug('using window.btoa for base64 encoding')
        b64 += btoa(s)
      } else {
        debug('using custom base64 encoder')
        b64 += Base64.encode(s)
      }

      return b64
    }

    // Native export doesn't work very well. should use canvg instead.
    function exportImage (type) {
      var canvas = document.createElement('canvas')
      var ctx = canvas.getContext('2d')

      // TODO: if (options.keepOutsideViewport), do some translation magic?

      var svgImg = new Image()
      var svgXml = _svg.outerHTML
      svgImg.src = base64dataURLencode(svgXml)

      svgImg.onload = function () {
        debug('exported image size: ' + [svgImg.width, svgImg.height])
        canvas.width = svgImg.width
        canvas.height = svgImg.height
        ctx.drawImage(svgImg, 0, 0)

        // SECURITY_ERR WILL HAPPEN NOW
        var imageDataurl = canvas.toDataURL(type)
        debug(type + ' length: ' + imageDataurl.length)

        if (options.callback) options.callback(imageDataurl)
        else debug('WARNING: no callback set, so nothing happens.')
      }

      svgImg.onerror = function () {
        debug(
          "Can't export! Maybe your browser doesn't support " +
          'SVG in img element or SVG input for Canvas drawImage?\n' +
          'http://en.wikipedia.org/wiki/SVG#Native_support'
        )
      }

      // NOTE: will not return anything
    }

    function exportImageCanvg (type) {
      if (typeof canvg === 'undefined') return null
      let canvas = DomUtils.createElement('canvas', null, { display: 'none' })
      document.body.appendChild(canvas)
      if (type === 'javascript' && typeof jsCanvas !== 'undefined') {
        var xcanvas = new jsCanvas('jscanvastest') // eslint-disable-line new-cap
        xcanvas.canvas.style.display = 'none'
        // xcanvas.canvas = canvas;
      }

      if (!options.keepOutsideViewport) {
        canvg(canvas, _svg.outerHTML)
      } else {
        let padding = options.padding || 0
        let scale = 1.0
        let translate = [0, 0]
        let bbox = _svg.getBBox()
        debug('detected svg dimensions ' + [bbox.x, bbox.y, bbox.width, bbox.height])
        let transform = _svg.firstElementChild.getAttribute('transform')
        if (transform) {
          debug('detected svg transform ' + transform)
          transform = SVGRenderer.transform(transform)
          translate = transform.translate
          scale = transform.scale
        }
        let buf = new StringBuffer()
        buf.append('<svg width="').append(bbox.width + 2 * padding).append('px" height="').append(bbox.height + 2 * padding).append('px"><g transform="translate(')
          .append(-bbox.x + translate[0] + padding).append(',').append(-bbox.y + translate[1] + padding).append(')scale(').append(scale).append(')">')
          .append(_svg.firstElementChild.innerHTML).append('</g></svg>')
        if (type === 'javascript') {
          xcanvas.compile(buf.toString(), function () {
            if (options.callback) options.callback(xcanvas.toString())
          })
          return
        } else { canvg(canvas, buf.toString()) }
      }
      var imageDataurl = canvas.toDataURL(type)
      if (options.callback) options.callback(imageDataurl)
      canvas.parentNode.removeChild(canvas)
      return imageDataurl
    }

    if (!type) type = 'image/svg+xml'

    if (options.keepNonSafe) debug('NOTE: keepNonSafe is NOT supported and will be ignored!')
    if (options.keepOutsideViewport) debug('NOTE: keepOutsideViewport is only supported with canvg exporter.')

    switch (type) {
      case 'image/svg+xml':
        return exportSVG()
      case 'image/png':
      case 'image/jpeg':
      case 'javascript':
        if (!options.renderer) {
          if (window && window.canvg) options.renderer = 'canvg'
          else options.renderer = 'native'
        }
        switch (options.renderer) {
          case 'canvg':
            debug('using canvg renderer for ' + type + ' image export')
            return exportImageCanvg(type)
          case 'native':
            debug('using native renderer for ' + type + ' export. THIS MIGHT FAIL.')
            return exportImage(type)
          default:
            debug('unknown image renderer given, doing noting (' + options.renderer + ')')
        }
        break
      default:
        debug("Sorry! Exporting as '" + type + "' is not supported!")
    }
    return null
  }
}

class SVGRenderer extends Renderer {
  render () {
    let result = super.render()
    if (result) {
      let root = this.graph.currentRoot
      let buf = new StringBuffer('<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">')
      let t = this.translate
      buf.append('<g transform="translate(').append(t[0]).append(',').append(t[1]).append(')scale(').append(this.scale).append(')">')
      buf.append(this.renderDefs())
      buf.append(root.render(this))
      buf.append('</g></svg>')
      this.box.innerHTML = buf.toString()
      this.svg = this.box.firstElementChild
    }
  }

  renderDefs () {
    let buf = new StringBuffer('<defs>')
    buf.append(this.getTemplate('Grid', this.prop('gridSize')))
    let markers = this.graph.markers
    if (markers.length > 0) { buf.append(SVGRenderer.renderMarkers(markers)) }
    buf.append('</defs>')
    return buf.toString()
  }

  refresh () {
    if (!this.svg) return
    let g = this.svg.querySelector('g')
    let t = this.translate
    g.setAttribute('transform', 'translate(' + t[0] + ',' + t[1] + ')scale(' + this.scale + ')')
  }

  static renderMarkers (markers) {
    let buf = new StringBuffer(); let str1; let str2
    markers.forEach(function (marker) {
      str1 = this.TEMPLATES['Marker'](marker)
      str2 = marker.shape
      if (!_.isString(str2)) { str2 = this.renderShape(str2) }
      str1 = str1.replace(/#\{shape\}/, str2)
      buf.append(str1)
    }, this)
    return buf.toString()
  }

  static renderLabel (box) {
    return this.TEMPLATES['Label'](box)
  }

  static renderShape (shape) {
    let template = this.TEMPLATES[shape.name]
    if (_.isString(template)) { template = _.template(template) }
    return template(shape)
  }

  static getPathData (shape) {
    let points = shape.points
    let controlPts = shape.controlPts
    if (!points || points.length === 0) return ''

    if (!controlPts && shape.round) {
      // render rounded line joins.
      let newPts = []
      controlPts = []
      let prev = points[0]; let next; let d1; let d2; let corner
      newPts.push(prev)
      for (let i = 1; i < points.length - 1; i++) {
        next = points[i]
        // set the control point first.
        controlPts[2 * i] = [next, next]
        // check the size of the corner.
        d1 = prev.distance(next)
        d2 = next.distance(points[i + 1])
        corner = Math.min(shape.round, d1 / 2, d2 / 2)
        // split the point into two.
        newPts.push(next.getDirection(prev).scale(corner).translate(next))
        newPts.push(next.getDirection(points[i + 1]).scale(corner).translate(next))
        prev = next
      }
      newPts.push(points[points.length - 1])
      points = newPts
    }
    let buf = new StringBuffer('M'); let point
    for (let i = 0; i < points.length; i++) {
      point = points[i]
      if (i === 0) { buf.append(point) } else {
        if (controlPts && controlPts[i]) {
          buf.append(' C ')
          for (let j = 0; j < controlPts[i].length; j++) { buf.append(controlPts[i][j]).append(' ') }
          buf.append(point)
        } else { buf.append(' L ').append(point) }
      }
    }
    return buf.toString()
  }

  static renderLink (shape) {
    let buf = new StringBuffer()
    let d = SVGRenderer.getPathData(shape)
    if (shape.showGauge) {
      buf.append('<path style="stroke: white; stroke-width: 9; visibility: hidden; pointer-events: stroke;" d="')
        .append(d).append('"/>')
    }
    buf.append('<path d="').append(d).append('"')
    if (shape.startMarker || shape.endMarker) {
      buf.append(' style="')
      if (shape.startMarker) { buf.append('marker-start: url(#').append(_.isString(shape.startMarker) ? shape.startMarker : shape.startMarker.id).append(');') }
      if (shape.endMarker) { buf.append('marker-end: url(#').append(_.isString(shape.endMarker) ? shape.endMarker : shape.endMarker.id).append(');') }
      buf.append('"')
    }
    buf.append('/>')
    return buf.toString()
  }

  static appendContent (el, content) {
    let buf = new StringBuffer()
    buf.append('<svg>').append(content).append('</svg')
    let temp = DomUtils.createElement('div', null, null, buf.toString()).firstElementChild

    while (temp.firstChild) { el.appendChild(temp.firstChild) }
    return el
  }

  static transform (transform) {
    let translate = [0, 0]; let scale = 1.0
    //
    let parts = transform.match(/translate\(\s*([^)]+)/)
    if (parts) {
      let m = parts[1].trim().match(/([\d.-]+)[ ,]([\d.-]+)/)
      if (m) {
        translate[0] = parseFloat(m[1]) || 0
        translate[1] = parseFloat(m[2]) || 0
      } else { translate[0] = translate[1] = parseFloat(parts[1]) }
    }
    parts = transform.match(/scale\(\s*([^)]+)/)
    if (parts) { scale = parseFloat(parts[1]) || 1.0 }

    return { translate, scale }
  }
}
/* eslint-disable no-template-curly-in-string */
SVGRenderer.TEMPLATES = {
  $root: '<g id="${id}" class="${className}">#{children}</g>',
  $node: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}" transform="translate(${x},${y})">#{shape}#{label}</g>',
  $edge: '<g id="${id}" class="${className}" style="${style}" ns="${namespace}">#{shape}#{label}</g>',
  Ellipse: '<ellipse cx="0" cy="0" rx="${width/2}" ry="${height/2}"/>',
  Rectangle: '<rect x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" rx="9" ry="9"/>',
  Triangle: '<polygon points="${-width/2},${-height/2} ${width/2},${-height/2} 0,${height/2}"/>',
  Rhombus: '<polygon points="0,${-height/2} ${width/2},0 0,${height/2} ${-width/2},0"/>',
  Hexagon: function (config) {
    var vertical = config.direction === 'north' || config.direction === 'south'
    if (vertical) { return '<polygon points="0,${-height/2} ${width/2},${-height/4} ${width/2},${height/4} 0,${height/2} ${-width/2},${height/4} ${-width/2},${-height/4}"/>' } else { return '<polygon points="${-width/2},0 ${width/4},${-height/2} ${width/4},${-height/2} ${width/2},0 ${width/4},${height/2} ${-width/4},${height/2}"/>' }
  },
  Polygon: function (shape) {
    let buf = new StringBuffer('<polygon points="')
    shape.points.forEach(function (pt) {
      buf.append(pt[0]).append(',').append(pt[1]).append(' ')
    })
    buf.removeLast()
    buf.append('"/>')
    return buf.toString()
  },
  Image: function (config) {
    return '<image x="${-width/2}" y="${-height/2}" width="${width}" height="${height}" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="' + config.image + '"/>'
  },
  Marker: function (marker) {
    return `
<marker id="${marker.id}" markerWidth="${marker.size}" markerHeight="${marker.size}" refx="${marker.ref[0]}"
refy="${marker.ref[1]}" orient="auto" viewbox="${marker.viewBox.x} ${marker.viewBox.y} ${marker.viewBox.width} ${marker.viewBox.height}"
markerUnits="userSpaceOnUse" ${marker.fill ? `style="stroke: ${marker.fill};fill:${marker.fill}"` : ''}>#{shape}</marker>
`.trim()
  },
  Grid: function (size) {
    return `
<pattern id="GridPattern" width="${size}" height="${size}" patternUnits="userSpaceOnUse">
  <ellipse cx="0" cy="0" rx="1" ry="1" fill="#999999"/>
  <ellipse cx="0" cy="${size}" rx="1" ry="1" fill="#999999"/>
  <ellipse cx="${size}" cy="0" rx="1" ry="1" fill="#999999"/>
  <ellipse cx="${size}" cy="${size}" rx="1" ry="1" fill="#999999"/>
</pattern>`.trim()
  },
  Label: _.template(`
<% var box = _.has(data, "dx") ? data : (data.getLabelBox ? data.getLabelBox() : null);
   if (box) {%>
  <g <% if (box.config && box.config.class) {%>class="<%=box.config.class%>"<%}%>\
    <% if (box.config && box.config.ns) {%>ns="<%=box.config.ns%>"<%}%>\
    <% if (box.config && box.config.inlineStyle) {%>\
      font-size="<%=box.config.fontSize%>"\
      font-family="<%=box.config.fontFamily%>"\
      font-weight="<% if (box.bold) {%>bold<%} else {%>normal<%}%>"\
      <% if (box.underline) {%>text-decoration="underline"<%}%>\
      <% if (box.italic) {%>font-style="italic"<%}%>\
    <%}%>\
    text-anchor="<%=box.anchor%>"\
    transform="translate(<%=box.bounds.x%>,<%=box.bounds.y%>)<% if (box.config && box.config.rotation) {%>rotate(<%=box.config.rotation%> <%=box.pivot[0]%> <%=box.pivot[1]%>)<%}%>">
  <% if (box.config.backgroundStyle) {%>
    <rect x="<%=-box.bounds.width/2%>" y="<%=-box.bounds.height/2%>" width="<%=box.bounds.width%>" height="<%=box.bounds.height%>" style="<%=box.config.backgroundStyle%>"/>
  <% } if (_.isArray(box.label)) {
    _.each(box.label, function(value, line) {%>
      <text <% if (box.config && box.config.textStyle) {%>style="<%=box.config.textStyle%>"<%}%>\
        dx="<%=box.dx%>" dy="<%=box.dy + box.lineHeight * line%>"><%=value%></text>
    <%});} else { %>
      <text><%=box.label%></text>
    <%}%>
    <% if (box.config.title) {%>
      <title><%=box.config.title%></title>
    <%}%>
  </g>
<%}%>
`.trim(), { variable: 'data' }) // TODO add more inline text styles.
}

export default SVGRenderer
