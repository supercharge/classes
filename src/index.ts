'use strict'

import { ClassHandler } from './class-handler'

/**
 * Determine whether the given `value` is a function.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export const isFunction = function (value: any): boolean {
  return new ClassHandler(value).isFunction()
}

/**
 * Determine whether the given `value` is an ES2015 class.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export const isClass = function (value: any): boolean {
  return new ClassHandler(value).isClass()
}

/**
 * Determine whether the given `input` is subclassing a given base class.
 *
 * @param {*} input
 * @param {*} base
 *
 * @returns {Boolean}
 */
export const isSubclassOf = function (input: any, base: any): boolean {
  return new ClassHandler(input).isSubclassOf(base)
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
export const className = function (input: any): string {
  return new ClassHandler(input).className()
}
