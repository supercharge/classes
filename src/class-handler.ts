'use strict'

export class ClassHandler {
  /**
   * The input value.
   */
  private readonly input: any

  constructor (input: any) {
    this.input = input
  }

  /**
   * Determine whether the given `input` is an ES2015 class.
   *
   * @param {*} input
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
   * @param {*} input
   *
   * @returns {Boolean}
   */
  isFunction (): boolean {
    return typeof this.input === 'function'
  }
}
