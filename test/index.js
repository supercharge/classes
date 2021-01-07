'use strict'

const { isClass, isFunction, isSubclassOf, className } = require('..')

describe('Classes', () => {
  it('isClass', () => {
    expect(isClass(class Rabbit { })).toBe(true)

    expect(isClass(Array)).toBe(false)
    expect(isClass('string')).toBe(false)
    expect(isClass(function classLike () { })).toBe(false)
  })

  it('isFunction', () => {
    expect(isFunction(Array)).toBe(true)
    expect(isFunction(class Rabbit { })).toBe(true)
    expect(isFunction(function func () { })).toBe(true)
    expect(isFunction(async function func () { })).toBe(true)

    expect(isFunction(1)).toBe(false)
    expect(isFunction('string')).toBe(false)
  })

  it('isSubclassOf', () => {
    class Base { }
    class Middle extends Base { }
    class Sub extends Middle { }

    expect(isSubclassOf(Sub, Base)).toBe(true)
    expect(isSubclassOf(Sub, Middle)).toBe(true)

    expect(isSubclassOf(Base, Sub)).toBe(false)
    expect(isSubclassOf(Base, Middle)).toBe(false)
    expect(isSubclassOf(1, 'Sub')).toBe(false)
    expect(isSubclassOf(1, 2)).toBe(false)
  })

  it('className', () => {
    class Base { }
    class Middle extends Base { }
    class Sub extends Middle { }

    expect(className(Sub)).toBe('Sub')
    expect(className(Middle)).toBe('Middle')
    expect(className(Base)).toBe('Base')

    expect(() => className()).toThrow('The given input is not a class constructor')
    expect(() => className(1)).toThrow('The given input is not a class constructor')
    expect(() => className(null)).toThrow('The given input is not a class constructor')
    expect(() => className(function () {})).toThrow('The given input is not a class constructor')
  })
})
