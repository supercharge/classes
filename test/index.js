'use strict'

const { test } = require('uvu')
const expect = require('expect')
const { isConstructor, isNotConstructor, isClass, isClassInstance, isFunction, isSubclassOf, className } = require('..')

test('isConstructor', () => {
  expect(isConstructor(class Rabbit { })).toBe(true)

  expect(isConstructor(Array)).toBe(false)
  expect(isConstructor('string')).toBe(false)
  expect(isConstructor(function classLike () { })).toBe(false)
})

test('isNotConstructor', () => {
  expect(isNotConstructor(class Rabbit { })).toBe(false)

  expect(isNotConstructor(Array)).toBe(true)
  expect(isNotConstructor('string')).toBe(true)
  expect(isNotConstructor(function classLike () { })).toBe(true)
})

test('isClass', () => {
  expect(isClass(class Rabbit { })).toBe(true)

  expect(isClass(Array)).toBe(false)
  expect(isClass('string')).toBe(false)
  expect(isClass(function classLike () { })).toBe(false)
})

test('isClassInstance', () => {
  class Rabbit { }

  expect(isClassInstance(new Rabbit())).toBe(true)

  expect(isClassInstance()).toBe(false)
  expect(isClassInstance(null)).toBe(false)
  expect(isClassInstance(undefined)).toBe(false)
  expect(isClassInstance(Array)).toBe(false)
  expect(isClassInstance(Rabbit)).toBe(false)
  expect(isClassInstance('string')).toBe(false)
  expect(isClassInstance(function classLike () { })).toBe(false)
})

test('isFunction', () => {
  expect(isFunction(Array)).toBe(true)
  expect(isFunction(class Rabbit { })).toBe(true)
  expect(isFunction(function func () { })).toBe(true)
  expect(isFunction(async function func () { })).toBe(true)

  expect(isFunction(1)).toBe(false)
  expect(isFunction('string')).toBe(false)
})

test('isSubclassOf', () => {
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

test('className', () => {
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

test.run()
