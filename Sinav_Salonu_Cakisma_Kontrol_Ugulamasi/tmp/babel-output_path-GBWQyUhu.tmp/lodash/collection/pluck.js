define('lodash/collection/pluck', ['exports', 'lodash/collection/map', 'lodash/utility/property'], function (exports, _lodashCollectionMap, _lodashUtilityProperty) {
  'use strict';

  /**
   * Gets the property value of `path` from all elements in `collection`.
   *
   * @static
   * @memberOf _
   * @category Collection
   * @param {Array|Object|string} collection The collection to iterate over.
   * @param {Array|string} path The path of the property to pluck.
   * @returns {Array} Returns the property values.
   * @example
   *
   * var users = [
   *   { 'user': 'barney', 'age': 36 },
   *   { 'user': 'fred',   'age': 40 }
   * ];
   *
   * _.pluck(users, 'user');
   * // => ['barney', 'fred']
   *
   * var userIndex = _.indexBy(users, 'user');
   * _.pluck(userIndex, 'age');
   * // => [36, 40] (iteration order is not guaranteed)
   */
  function pluck(collection, path) {
    return (0, _lodashCollectionMap['default'])(collection, (0, _lodashUtilityProperty['default'])(path));
  }

  exports['default'] = pluck;
});