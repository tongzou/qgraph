import _ from 'lodash'
import Events from '../event/events'
import Utils from '../util/Utils'
import DomUtils from '../util/dom-utils'
import StringBuffer from '../util/string-buffer'
import Rectangle from '../geometry/Rectangle'

const FONT_BOLD = 1; const FONT_ITALIC = 2; const FONT_UNDERLINE = 4; const FONT_SHADOW = 8

let defaultConfig = {
  fontSize: 11,
  fontFamily: 'Arial',
  fontStyle: 0,
  fontColor: 'black',
  padding: 0,
  linePadding: 0,
  align: 'left',
  width: 0,
  height: 0,
  rotation: null,
  geometry: { x: 0, y: 0, anchorY: 0, offsetX: 0, offsetY: 0 }
}

/**
 * The label object handles label sizing/positioning
 */
export default (function () {
  let stringMeasureEl = null; let measureDiv; let baselineDiv

  /**
   * Calculate the size of the string.
   */
  let getStringSize = _.memoize(function (str, fontSize, fontFamily, bold) {
    fontSize = fontSize || 11
    fontFamily = fontFamily || 'Arial,Helvetica'
    bold = !_.isUndefined(bold) ? bold : false

    // first check if there is a string-measuring div available, if not, create now.
    if (!stringMeasureEl) {
      stringMeasureEl = DomUtils.createElement('iframe', { id: '_ComputeStylesIframe' }, { position: 'absolute', visibility: 'hidden', width: 'auto' })
      document.body.appendChild(stringMeasureEl)
      let doc = stringMeasureEl.contentWindow.document
      doc.open()
      doc.write(
        `<html><body>
        <div id="baselineDiv" style="height:100px;"><span style="line-height:0">T</span><span style="height:100%;display:inline-block;"></span></div>
        <div id="measureDiv" style="position:absolute;width:auto;height:auto;padding:0;white-space:nowrap;display:inline-block;"></div>
        </body></html>`)
      doc.close()
      measureDiv = doc.getElementById('measureDiv')
      baselineDiv = doc.getElementById('baselineDiv')
    }
    baselineDiv.style.fontSize = measureDiv.style.fontSize = fontSize
    baselineDiv.style.fontFamily = measureDiv.style.fontFamily = fontFamily
    baselineDiv.style.fontWeight = measureDiv.style.fontWeight = bold ? 'bold' : 'normal'
    measureDiv.innerHTML = str

    let strut = baselineDiv.firstChild
    let baselineHeight = strut.offsetTop + strut.offsetHeight - baselineDiv.offsetHeight - baselineDiv.offsetTop

    return { width: measureDiv.offsetWidth, height: measureDiv.offsetHeight, baseline: baselineHeight }
  }, function (str, fontSize, fontFamily, bold) { return str + ';' + fontSize + ';' + fontFamily + ';' + bold })

  /**
   * Create a wrapped text.
   * @param {String} string the string to wrap.
   * @param {maxWidth} the maximum width this string can take.
   * @param {fontSize}
   * @param {fontFamily}
   * @param {bold}
   */
  let wrap = _.memoize(function (string, maxWidth, fontSize, fontFamily, bold) {
    maxWidth = maxWidth || 0
    fontSize = fontSize || 11
    fontFamily = fontFamily || 'Arial,Helvetica'
    bold = !_.isUndefined(bold) ? bold : false

    let arr = []
    let spaceSize = getStringSize('&nbsp;', fontSize, fontFamily, bold); let space = spaceSize.width
    arr.lineHeight = spaceSize.height
    arr.baseline = spaceSize.baseline

    if (!maxWidth || !string || string === '') {
      arr.push(string)
      arr.width = (!string || string === '') ? space : getStringSize(string, fontSize, fontFamily, bold).width
      arr.height = arr.lineHeight
      return arr
    }

    let width = 0
    // split the text by lines
    let lines = string.split('\n')

    let buf = new StringBuffer()

    for (let j = 0; j < lines.length; j++) {
      // split each line by word
      let words = lines[j].split(/\s/)
      let line = ''; let currentWidth = 0; let wordWidth = 0; let newLine = true; let word

      for (let i = 0; i < words.length; i++) {
        word = words[i]
        wordWidth = getStringSize(word, fontSize, fontFamily, bold).width

        if ((newLine ? wordWidth : currentWidth + space + wordWidth) > maxWidth) {
          if (newLine) {
            buf.append(word)
            width = Math.max(width, wordWidth)
            if (i < words.length - 1) {
              arr.push(buf.toString())
              buf.clear()
            }
          } else {
            arr.push(buf.append(line).toString())
            width = Math.max(width, currentWidth + space + wordWidth)
            buf.clear()
          }
          line = ''
          currentWidth = 0
          if (!newLine) { i-- } // move back one word.
          newLine = true
        } else {
          line = newLine ? word : line + ' ' + word
          currentWidth = newLine ? wordWidth : currentWidth + space + wordWidth
          width = Math.max(width, currentWidth)
          newLine = false
        }
      }
      if (line !== '') { buf.append(line) }
      if (j < lines.length - 1) {
        arr.push(buf.toString())
        buf.clear()
      }
    }

    arr.push(buf.toString())
    arr.width = width
    arr.height = arr.lineHeight * arr.length
    return arr
  }, function (str, maxWidth, fontSize, fontFamily, bold) { return str + ';' + maxWidth + ';' + fontSize + ';' + fontFamily + ';' + bold })

  /**
   *  Get the view information for how to display the label.
   * @param label The string that needs to be displayed
   * @param containerWidth The width of the parent container.
   * @param containerHeight The height of the parent container.
   * @param labelConfig The configuration on how to display label. It should be an object with the following parameters:
   * {
   *      fontSize, fontFamily, fontStyle, padding,
   *      align: can be either "left", "center" or "right",
   *      width: the maximum width of the label. if less than 1, then is treated as percentage. If 0, no wrapping will occur,
   *      height,
   *      geometry
   * }
   * @returns {*}
   */
  function getLabelBox (label, labelConfig, containerWidth, containerHeight) {
    return _getLabelBox.call(this, label, labelConfig, { width: containerWidth, height: containerHeight })
  }

  function getLabelBoxForLink (label, labelConfig, link) {
    return _getLabelBox.call(this, label, labelConfig, link)
  }

  function _getLabelBox (label, labelConfig = {}, context) {
    labelConfig = _.defaultsDeep(labelConfig, defaultConfig)
    let fontSize = labelConfig.fontSize
    let fontFamily = labelConfig.fontFamily
    let fontStyle = labelConfig.fontStyle
    let bold = (fontStyle & FONT_BOLD) === FONT_BOLD
    let padding = labelConfig.padding
    let linePadding = labelConfig.linePadding
    let align = labelConfig.align

    let w = labelConfig.width; let h = labelConfig.height
    if (context.width) {
      w = w <= 5 ? context.width * w : w
      h = h <= 5 ? context.height * h : h
    }
    w -= 2 * padding
    h -= 2 * padding
    w = Math.max(0, w)
    h = Math.max(0, h)

    let geometry = _.clone(labelConfig.geometry)
    let wrappedLabel = this.wrap(label, w, fontSize, fontFamily, bold)
    geometry.width = wrappedLabel.width + 2 * padding
    geometry.height = wrappedLabel.height + 2 * padding + (wrappedLabel.length - 1) * linePadding
    let anchor = 'start'; let dx = 0; let setAnchorX = !_.has(geometry, 'anchorX')
    switch (align) {
      case 'center':
        anchor = 'middle'
        if (setAnchorX) geometry.anchorX = 0
        break
      case 'right':
        anchor = 'end'
        dx = wrappedLabel.width / 2
        if (setAnchorX) geometry.anchorX = -0.5
        break
      case 'left':
        dx = -wrappedLabel.width / 2
        if (setAnchorX) geometry.anchorX = 0.5
        break
    }
    let pos
    if (context.getRelativePosition) { pos = context.getRelativePosition(geometry) } else { pos = Utils.getRelativePosition({ width: context.width, height: context.height }, geometry) }

    let bounds = new Rectangle(pos[0], pos[1], geometry.width, geometry.height)
    // the pivot is the center of rotation when the label has a rotation specified.
    let pivot = align === 'center' ? [0, 0] : (align === 'left' ? [-wrappedLabel.width / 2, 0] : [wrappedLabel.width / 2, 0])

    // the maximum bounds for the label, used to position inline editor
    geometry.width = Math.max(w + 2 * padding, geometry.width)
    geometry.height = Math.max(h + 2 * padding, geometry.height)

    if (context.getRelativePosition) { pos = context.getRelativePosition(geometry) } else { pos = Utils.getRelativePosition({ width: context.width, height: context.height }, geometry) }

    let maxBounds = new Rectangle(pos[0], pos[1], geometry.width, geometry.height)
    return {
      config: labelConfig,
      label: wrappedLabel,
      _label: label,
      bold,
      underline: fontStyle & FONT_UNDERLINE,
      italic: fontStyle & FONT_ITALIC,
      shadow: fontStyle & FONT_SHADOW,
      dx,
      dy: -geometry.height / 2 + padding + wrappedLabel.lineHeight - wrappedLabel.baseline,
      anchor,
      lineHeight: wrappedLabel.lineHeight + linePadding,
      pivot,
      bounds,
      maxBounds
    }
  }

  function render (view, box) {
    return view.renderLabel(box)
  }

  // This is the inline editor for editing label text in place.
  let editor = {
    start: function (key, container, box, refEl, textEl, scale = 1.0, singleLine = true) {
      if (this.input) {
        if (this.key !== key) {
          // need to close the existing editor first
          this.stop()
        } else { return }
      }
      let tag = singleLine ? 'input' : 'textarea'
      this.input = DomUtils.createElement(tag, { id: 'inlineEditor', unselectable: 'off' }, { position: 'absolute', overflow: 'hidden', padding: '0px', margin: '0px', border: 'transparent' })
      if (singleLine) {
        Events.on(this.input, 'keydown keyup', (event) => {
          if (event.keyCode === 13) {
            Events.off(this.input, 'keydown keyup')
            this.stop()
          }
        })
      }
      container.appendChild(this.input)

      this.key = key
      this.box = box
      this.refEl = refEl
      this.textEl = textEl

      let labelConfig = box.config
      let maxBounds = new Rectangle(box.maxBounds.x, box.maxBounds.y, box.maxBounds.width * scale, box.maxBounds.height * scale)
      let pos = DomUtils.getCenterPosition(refEl, container)
      pos = [pos[0] + maxBounds.left, pos[1] + maxBounds.top]

      if (textEl) { textEl.style.visibility = 'hidden' }

      DomUtils.setElement(this.input, null, {
        visibility: 'visible',
        left: pos[0] + 'px',
        top: pos[1] + 'px',
        width: maxBounds.width + 'px',
        height: maxBounds.height + 'px',
        'font-family': labelConfig.fontFamily,
        'font-size': (labelConfig.fontSize * scale) + 'px',
        'font-weight': (labelConfig.fontStyle & FONT_BOLD) === FONT_BOLD ? 'bold' : 'normal'
        /* "color": labelConfig.fontColor */
      })

      this.input.value = box._label
      this.input.focus()
      this.input.select()
      Events.fire(this, 'editor.start', [this.key])
    },

    stop: function (cancel) {
      if (!this.input) return

      cancel = cancel || false
      if (this.textEl) { this.textEl.style.visibility = null }

      // remove the input
      this.input.parentNode.removeChild(this.input)

      if (!cancel) { Events.fire(this, 'editor.update', [this.key, this.input.value]) }

      Events.fire(this, 'editor.stop', [this.key])

      delete this.input
      delete this.key
      delete this.box
      delete this.refEl
      delete this.textEl
    }
  }

  return {
    FONT_BOLD,
    FONT_ITALIC,
    FONT_UNDERLINE,
    FONT_SHADOW,
    getStringSize,
    wrap,
    getLabelBox,
    getLabelBoxForLink,
    render,
    editor
  }
})()
