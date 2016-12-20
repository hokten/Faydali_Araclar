define("lodash/array/first", ["exports"], function (exports) {
  /**
   * Gets the first element of `array`.
   *
   * @static
   * @memberOf _
   * @alias head
   * @category Array
   * @param {Array} array The array to query.
   * @returns {*} Returns the first element of `array`.
   * @example
   *
   * _.first([1, 2, 3]);
   * // => 1
   *
   * _.first([]);
   * // => undefined
   */
  "use strict";

  function first(array) {
    return array ? array[0] : undefined;
  }

  exports["default"] = first;
});