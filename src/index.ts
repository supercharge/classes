'use strict'

/**
 * https://github.com/sindresorhus/type-fest/blob/1fa8872ae0bf261ec857a18b39ed9a157e320237/source/basic.d.ts#L6-L13
 */
export type Class<T, Arguments extends unknown[] = any[]> = Constructor<T, Arguments> & { prototype: T }
export type Constructor<T, Arguments extends unknown[] = any[]> = new(...arguments_: Arguments) => T

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
 * Determine whether the given `value` is an ES2015 class constructor.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isConstructor<T> (value: any): value is Constructor<T> {
  return isClass<T>(value)
}

/**
 * Determine whether the given `value` is not an ES2015 class constructor.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isNotConstructor<T> (value: T | Constructor<any>): value is T {
  return !isConstructor<any>(value)
}

/**
 * Determine whether the given `value` is an ES2015 class.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isClass<T> (value: any): value is Constructor<T> {
  return isFunction(value)
    ? value.toString().indexOf('class ') === 0
    : false
}

/**
 * Determine whether the given `value` is an instance of a JavaScript class.
 *
 * @param {*} value
 *
 * @returns {Boolean}
 */
export function isClassInstance<T> (value: any): value is InstanceType<Constructor<T>> {
  return isClass(value?.constructor)
}

/**
 * Determine whether the given `input` is subclassing a given base class.
 *
 * @param {*} input
 * @param {*} base
 *
 * @returns {Boolean}
 */
export function isSubclassOf<T> (input: Constructor<T>, Base: Constructor<T>): boolean {
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
export function className<T> (input: Class<T>): string {
  if (isClass(input)) {
    return input.name
  }

  throw new Error(`The given input is not a class constructor. Received "${typeof input}"`)
}

/**
 * Returns the class names of the given `input` and all parent classes.
 * Throws if the given `input` is not a class.
 *
 * @param {*} input
 *
 * @returns {String[]}
 *
 * @throws
 */
export function classNames<T> (input: Class<T>): string[] {
  if (!isClass(input)) {
    throw new Error(`The given input is not a class constructor. Received "${typeof input}"`)
  }

  let clazz = input
  const names = []

  do {
    names.push(clazz.name)
    clazz = Object.getPrototypeOf(clazz)
  } while (clazz.name)

  return names
}
