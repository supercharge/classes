'use strict'

const Cls = require('../src')
const Lab = require('@hapi/lab')
const { expect } = require('@hapi/code')

const { describe, it } = (exports.lab = Lab.script())

describe('Classes', () => {
  it('isClass', () => {
    expect(Cls.isClass(class Rabbit {})).to.be.true()

    expect(Cls.isClass(Array)).to.be.false()
    expect(Cls.isClass('string')).to.be.false()
    expect(Cls.isClass(function classLike () {})).to.be.false()
  })
})
