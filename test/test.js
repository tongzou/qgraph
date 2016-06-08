var qd = require("../dist/qgraph.js").default;

var buf = new qd.StringBuffer("hey dude");
console.log(buf.toString());

var manager = new qd.EventManager({});

console.log(manager.start());
