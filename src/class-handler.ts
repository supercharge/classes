'use strict'

export class ClassHandler {
  /**
   * The input value.
   */
  private readonly input: any

  /**
   * Create a new instance for the given `input`.
   *
   * @param {*} input
   */
  constructor (input: any) {
    this.input = input
  }

  /**
   * Determine whether the given `input` is an ES2015 class.
   *
   * @returns {Boolean}
   */
  isClass (): boolean {
    return this.isFunction()
      ? this.input.toString().indexOf('class ') === 0
      : false
  }

  /**
   * Determine whether the given `input` is a function.
   *
   * @returns {Boolean}
   */
  isFunction (): boolean {
    return typeof this.input === 'function'
  }

  /**
   * Determine whether the given `input` is a function.
   *
   * @param {*} clazz
   *
   * @returns {Boolean}
   */
  isSubclassOf (clazz: any): boolean {
    return new ClassHandler(clazz).isClass()
      ? this.input.prototype instanceof clazz
      : false
  }
}
