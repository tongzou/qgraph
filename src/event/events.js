export default {
  on (el = (typeof window !== 'undefined' ? window : null), events, callback) {
    if (!el) return
    if (events.indexOf(' ') > 0) {
      events = events.split(' ')
    } else {
      events = [events]
    }
    events.forEach(eventName => {
      if (el.addEventListener) {
        el.addEventListener(eventName, callback, false)
      } else if (el.attachEvent) {
        el.attachEvent(eventName, callback)
      }
    })
  },

  off (el = (typeof window !== 'undefined' ? window : null), events, callback) {
    if (!el) return
    if (events.indexOf(' ') > 0) {
      events = events.split(' ')
    } else {
      events = [events]
    }
    events.forEach(eventName => {
      if (el.removeEventListener) {
        el.removeEventListener(eventName, callback, false)
      } else if (el.detachEvent) {
        el.detachEvent(eventName, callback)
      }
    })
  },

  fire (target, name, args) {
  }
}
