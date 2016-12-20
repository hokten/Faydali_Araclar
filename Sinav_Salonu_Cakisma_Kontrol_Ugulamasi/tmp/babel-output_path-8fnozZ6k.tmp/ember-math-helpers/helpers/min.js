define('ember-math-helpers/helpers/min', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.min = min;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var Helper = _ember['default'].Helper;

  function min(params) {
    return Math.min.apply(Math, _toConsumableArray(params));
  }

  exports['default'] = Helper.helper(min);
});