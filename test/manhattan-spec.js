/**
 * Created by tong on 7/6/2016.
 */
var expect = require('chai').expect;

// bean requires the existence of window
global.window = { addEventHandler: function() {} };
global.document = {};
global.navigator = {};

describe('ManhattanLink', function() {
	it('should route', function() {
		var qg = require('../dist/qgraph').default;
		var link = qg.Link.getLink([{point: new qg.Point(150, 40), direction: qg.Point.W}, {point: new qg.Point(0, -40), direction: qg.Point.W}], {type: 'manhattan', MIN_BUFFER: 15});
		expect(link.points).to.eql([new qg.Point(150, 40), new qg.Point(-15, 40), new qg.Point(-15, -14), new qg.Point(0, -40)]);
	});
});
