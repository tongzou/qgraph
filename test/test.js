import qg from 'qgraph'

describe('Util tests', () => {
  test('stringbuffer', () => {
    const buf = new qg.StringBuffer('hey dude')
    console.log(buf.toString())
    expect(buf.toString()).toBe('hey dude')
  })
})
