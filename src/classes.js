'use strict'

class Classes {
  /**
   * Determine whether the given `input` is an ES2015 class.
   *
   * @param {*} input
   *
   * @returns {Boolean}
   */
  static isClass (input) {
    return this.isFunction(input)
      ? input.toString().indexOf('class ') === 0
      : false
  }

  /**
   * Determine whether the given `input` is a function.
   *
   * @param {*} input
   *
   * @returns {Boolean}
   */
  static isFunction (input) {
    return typeof input === 'function'
  }
}

module.exports = Classes
