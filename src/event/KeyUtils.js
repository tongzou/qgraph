///////////////////////////////////////////////////////////////////////////////
//                                                                           //
//           The Key Utility CLass for the Event Dispatcher          	     //
//                                                                           //
///////////////////////////////////////////////////////////////////////////////

import _ from "lodash";
import StringBuffer from "./../util/StringBuffer";

export function getKeyEvent(event) {
	if (!event || !event instanceof KeyboardEvent) {
		return null;
	}

	var key = event.keyCode || event.which;

	// Need to find a way to avoid this
	if (key >= 16 && key <= 18) {
		key = null;
	}

	return getKeyData(event.ctrlKey, event.altKey, event.shiftKey, event.metaKey, key);
}

export function getKeyData(ctrl, alt, shift, meta, key) {
	var buf = new StringBuffer();

	if (ctrl) buf.append("CTRL");
	if (alt) buf.append("ALT");
	if (shift) buf.append("SHIFT");
	if (meta) buf.append("META");
	if (key) buf.append(key);

	return buf.toString(".");
}
