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
    return typeof input === 'function'
      ? /^class /.test(Function.prototype.toString.call(input))
      : false
  }
}

module.exports = Classes
