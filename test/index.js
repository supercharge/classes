'use strict'

const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')
const { isClass, isFunction } = require('..')

const { describe, it } = (exports.lab = Lab.script())

describe('Classes', () => {
  it('isClass', () => {
    expect(isClass(class Rabbit {})).to.be.true()

    expect(isClass(Array)).to.be.false()
    expect(isClass('string')).to.be.false()
    expect(isClass(function classLike () {})).to.be.false()
  })

  it('isFunction', () => {
    expect(isFunction(Array)).to.be.true()
    expect(isFunction(class Rabbit {})).to.be.true()
    expect(isFunction(function classLike () {})).to.be.true()

    expect(isFunction(1)).to.be.false()
    expect(isFunction('string')).to.be.false()
  })
})
