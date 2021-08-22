'use strict'

type Class<T = any, Arguments extends any[] = any[]> = new(...arguments_: Arguments) => T

/**
 * Determine whether the given `value` is a function.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isFunction (value: any): value is Function {
  return typeof value === 'function'
}

/**
 * Determine whether the given `value` is an ES2015 class.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isClass (value: any): value is Class {
  return isFunction(value)
    ? value.toString().indexOf('class ') === 0
    : false
}

/**
 * Determine whether the given `input` is subclassing a given base class.
 *
 * @param {*} input
 * @param {*} base
 *
 * @returns {Boolean}
 */
export function isSubclassOf (input: Class, Base: Class): boolean {
  return isClass(Base)
    ? input.prototype instanceof Base
    : false
}

/**
 * Returns the class name of the given `input`. Throws if the given `input` is not a class.
 *
 * @param {*} input
 *
 * @returns {String}
 *
 * @throws
 */
export function className (input: Class): string {
  if (isClass(input)) {
    return input.name
  }

  throw new Error(`The given input is not a class constructor. Received "${typeof input}"`)
}
