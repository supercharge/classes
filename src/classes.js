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
      ? /^class /.test(Function.prototype.toString.call(input))
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
