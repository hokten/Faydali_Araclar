define('ember-math-helpers/helpers/max', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.max = max;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var Helper = _ember['default'].Helper;

  function max(params) {
    return Math.max.apply(Math, _toConsumableArray(params));
  }

  exports['default'] = Helper.helper(max);
});