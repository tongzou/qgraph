import _ from 'lodash'

const inBrowser = () => {
  return typeof window !== 'undefined' && window.navigator && typeof navigator !== 'undefined'
}

/**
 * dom Utility functions
 */
export default {
  isIE: (function () {
    if (!inBrowser()) return false
    var sAgent = window.navigator.userAgent
    var Idx = sAgent.indexOf('MSIE')

    if (Idx > 0) {
      // If IE, return version number.
      return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf('.', Idx)))
    } else if (navigator.userAgent.match(/Trident\/7\./)) { // If IE 11 then look for Updated user agent string.
      return 11
    } else if (navigator.userAgent.match(/Edge\//)) {
      return 'Edge'
    } else {
      return false
    }
  })(),

  isFireFox: (function () {
    // InstallTrigger: Firefox's API to install add-ons
    return typeof InstallTrigger !== 'undefined'
  })(),

  isChrome: (function () {
    if (!inBrowser() || navigator.userAgent.indexOf('Edge') >= 0) return false
    var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
    return raw ? parseInt(raw[2], 10) : false
  })(),

  isMac: (function () {
    if (!inBrowser()) return false
    return navigator.platform.toUpperCase().indexOf('MAC') >= 0
  })(),

  isWindows: (function () {
    if (!inBrowser()) return false
    return navigator.appVersion.indexOf('Windows') >= 0
  })(),

  isLinux: (function () {
    if (!inBrowser()) return false
    return navigator.appVersion.indexOf('Linux') >= 0
  })(),

  createElement: function (tag, attribs, styles, html) {
    let el = document.createElement(tag)
    this.setElement(el, attribs, styles)
    if (html) { el.innerHTML = html }
    return el
  },

  createElementByString: function (str) {
    let temp = this.createElement('div', null, null, str)
    return temp.childNodes
  },

  setElement: function (el, attribs, styles) {
    if (attribs) {
      _.forEach(attribs, function (value, key) {
        el.setAttribute(key, value)
      })
    }
    if (styles) {
      _.forEach(styles, function (value, key) {
        el.style[key] = value
      })
    }
  },

  testElement: function (node, method) {
    return node && node.nodeType === 1 && (!method || method(node))
  },

  getAncestorBy: function (node, method) {
    while ((node = node.parentNode) !== null) {
      if (this.testElement(node, method)) { return node }
    }

    return null
  },

  /**
   * Get the position of element relative to the context.
   * @param el the element
   * @param context
   * @returns {*[]}
   */
  getPosition (el, context) {
    if (!context) context = document.body
    let elRect = el.getBoundingClientRect()
    let contextRect = context.getBoundingClientRect()

    return [elRect.left - contextRect.left, elRect.top - contextRect.top]
  },

  getCenterPosition (el, context) {
    if (!context) context = document.body
    let elRect = el.getBoundingClientRect()
    let contextRect = context.getBoundingClientRect()
    let w = elRect.right - elRect.left
    let h = elRect.bottom - elRect.top

    return [elRect.left - contextRect.left + w / 2, elRect.top - contextRect.top + h / 2]
  },

  move: function (el, x, y) {
    if (x) el.style.left = x + 'px'
    if (y) el.style.top = y + 'px'
  },

  getSize: function (el) {
    var w = parseInt(el.style.offsetWidth, 10)
    var h = parseInt(el.style.offsetHeight, 10)
    return [w, h]
  },

  resize: function (el, w, h) {
    if (w) el.style.width = w + 'px'
    if (h) el.style.height = h + 'px'
  },

  preloadImages: function (array) {
    if (!this.preloadImages.list) this.preloadImages.list = []
    if (!this.preloadImages.loaded) this.preloadImages.loaded = {}

    var list = this.preloadImages.list
    var img; var that = this
    for (var i = 0; i < array.length; i++) {
      img = new Image()
      img.onload = function () {
        var index = list.indexOf(this)
        if (index !== -1) {
          that.preloadImages.loaded[this.name] = { width: this.width, height: this.height }
          // remove image from the array once it's loaded
          // for memory consumption reasons
          list.splice(index, 1)
        }
      }
      list.push(img)
      img.src = array[i]
      img.name = array[i]
    }
  },

  /**
   * Get's the image's information given the url. Must be preloaded by calling the preloadImage function.
   * @param src
   */
  getImageInfo: function (src) {
    if (this.preloadImages.loaded) {
      return this.preloadImages.loaded[src]
    }
    return null
  },

  downloadFile: function (name, data) {
    if (!data) return
    let mime = data.match(/^data:([^;,]*)/)[1]
    if (name.indexOf('.') < 0) {
      if (!mime) mime = 'text/plain'
      if (mime === 'text/plain') { name = name + '.txt' } else {
        let type = mime.split('/')[1]
        if (type.indexOf('+') > 0) type = type.split('+')[0]
        name = name + '.' + type
      }
    }
    if (this.isIE) {
      let encoded = data.indexOf(';base64') >= 0
      if (encoded) { data = atob(data.replace('data:' + mime + ';base64,', '')) } else { data = decodeURI(data.replace('data:' + mime + ',', '')) }
      data = this.GetBlob(data, mime)
      navigator.msSaveBlob(data, name)
    } else {
      let link = this.createElement('a', { href: data, download: name }, { display: 'none' })
      document.body.appendChild(link)
      link.click()
      link.parentNode.removeChild(link)
    }
  },

  /**
   * Convert b54 to blob. IE only
   */
  GetBlob: function (data, contentType, sliceSize) {
    contentType = contentType || ''
    sliceSize = sliceSize || 512

    var byteArrays = []

    for (var offset = 0; offset < data.length; offset += sliceSize) {
      var slice = data.slice(offset, offset + sliceSize)

      var byteNumbers = new Array(slice.length)
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }
      var byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }
    return new Blob(byteArrays, { type: contentType })
  },

  openImage: function (name, image) {
    if (!inBrowser()) return
    var myWindow = window.open('', '_blank', 'toolbar=yes, scrollbars=yes, resizable=yes, width=500, height=500')
    var myDocument = myWindow.document
    var img = myDocument.createElement('img')
    this.setElement(img, { src: image, name: name })
    myDocument.body.appendChild(img)
  },

  /**
   * Check whether the key event is from input, textarea or select.
   * @param e  input event
   */
  eventFromInput: function (e) {
    var tagName = e.target.tagName
    return (tagName === 'INPUT' || tagName === 'TEXTAREA' || tagName === 'SELECT')
  },

  /**
   * Wait for the element with the specified id to come into existence. Returns a promise
   * @param {*} id The id of the element to wait for
   */
  waitForElement (id) {
    return new Promise(resolve => {
      const el = document.getElementById(id)
      if (!el.length) {
        const interval = setInterval(() => {
          const el = document.getElementById(id)
          if (el.length) {
            clearInterval(interval)
            return resolve(el[0])
          }
        }, 200)
      } else {
        return resolve(el[0])
      }
    })
  }
}
