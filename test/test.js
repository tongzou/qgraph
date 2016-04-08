var qd = require("../lib/qgraph.js").default;

var buf = new qd.StringBuffer("hey dude");
console.log(buf.toString());

var manager = new qd.EventManager({});

console.log(manager.startEvents());


