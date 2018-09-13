import qg from 'qgraph'

describe('ManhattanLink', () => {
  test('should route', () => {
    let input = [{ point: new qg.Point(150, 40), direction: qg.Point.W }, { point: new qg.Point(0, -40), direction: qg.Point.W }]
    let link = qg.Link.getLink(input, { type: 'manhattan', MIN_BUFFER: 15 })
    expect(link.points).toBe([new qg.Point(150, 40), new qg.Point(-15, 40), new qg.Point(-15, -40), new qg.Point(0, -40)])

    input = [{ point: new qg.Point(150, 40), direction: qg.Point.S }, { point: new qg.Point(150, -40), direction: qg.Point.N }]
    link = qg.Link.getLink(input, { type: 'manhattan', MIN_BUFFER: 15 })
    expect(link.points).toBe([new qg.Point(150, 40), new qg.Point(150, 55), new qg.Point(165, 55), new qg.Point(165, -55), new qg.Point(150, -55), new qg.Point(150, -40)])
  })
})
