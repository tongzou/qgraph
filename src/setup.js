// bean requires the existence of window
if (typeof window === 'undefined' && typeof global !== 'undefined') {
  global.window = {
    addEventHandler: function () {}
  }
  global.document = {}
  global.navigator = {}
}

export default {}
