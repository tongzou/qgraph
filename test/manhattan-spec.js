/**
 * Created by tong on 7/6/2016.
 */
var expect = require('chai').expect;

describe('ManhattanLink', function() {
	it('should route', function() {
		var qg = require('../dist/qgraph').default;
		var input = [{point: new qg.Point(150, 40), direction: qg.Point.W}, {point: new qg.Point(0, -40), direction: qg.Point.W}];
		var link = qg.Link.getLink(input, {type: 'manhattan', MIN_BUFFER: 15});
		expect(link.points).to.eql([new qg.Point(150, 40), new qg.Point(-15, 40), new qg.Point(-15, -40), new qg.Point(0, -40)]);

		input = [{point: new qg.Point(150, 40), direction: qg.Point.S}, {point: new qg.Point(150, -40), direction: qg.Point.N}];
		link = qg.Link.getLink(input, {type: 'manhattan', MIN_BUFFER: 15});
		expect(link.points).to.eql([new qg.Point(150, 40), new qg.Point(150, 55), new qg.Point(165, 55), new qg.Point(165, -55), new qg.Point(150, -55), new qg.Point(150, -40)]);
	});
});
