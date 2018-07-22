const chai = require('chai')
chai.should()
const helper = require('../src/utils/helper')

describe('Utils and helpers', () => {
  describe('trimObject', () => {
    it('should do nothing on empty', () => {
      const obj = {}
      const result = helper.trimObject(obj, ['a'])
      result.should.deep.equals({})
    })
    it('should remove property on object', () => {
      const obj = {a: 1, b: 2, c: 3}
      const result = helper.trimObject(obj, ['a'])
      result.should.deep.equals({b: 2, c: 3})
    })
    it('should not remove unexisting property on object', () => {
      const obj = {a: 1, b: 2, c: 3}
      const result = helper.trimObject(obj, ['d'])
      result.should.deep.equals(obj)
    })
  })
})
