
// The Key Utility CLass for the Event Dispatcher
import StringBuffer from '../util/string-buffer'

/**
 * KEY constant
 */
export const KEY = {
  ALT: 18,
  BACK_SPACE: 8,
  CAPS_LOCK: 20,
  CONTROL: 17,
  DELETE: 46,
  DOWN: 40,
  END: 35,
  ENTER: 13,
  ESCAPE: 220,
  HOME: 36,
  LEFT: 37,
  META: 224,
  NUM_LOCK: 144,
  PAGE_DOWN: 34,
  PAGE_UP: 33,
  PAUSE: 19,
  PRINTSCREEN: 44,
  RIGHT: 39,
  SCROLL_LOCK: 145,
  SHIFT: 16,
  SPACE: 32,
  TAB: 9,
  UP: 38
  // ADD          : DomUtils.isFireFox ? 61  : 187,
  // SUBTRACT     : DomUtils.isFireFox ? 173 : 189
}

export function getKeyEvent (event) {
  if (!event || !(event instanceof KeyboardEvent)) {
    return null
  }

  var key = event.keyCode || event.which

  // Need to find a way to avoid this
  if (key >= 16 && key <= 18) {
    key = null
  }

  return getKeyData(event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, key)
}

export function getKeyData (ctrl, alt, shift, meta, key) {
  var buf = new StringBuffer()

  if (ctrl) buf.append('CTRL')
  if (alt) buf.append('ALT')
  if (shift) buf.append('SHIFT')
  if (meta) buf.append('META')
  if (key) buf.append(key)

  return buf.toString('.')
}
