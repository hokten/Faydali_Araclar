define('ember-composable-helpers/helpers/append', ['exports', 'ember-computed', 'ember-metal/get', 'ember-array/utils', 'ember-composable-helpers/-private/create-multi-array-helper'], function (exports, _emberComputed, _emberMetalGet, _emberArrayUtils, _emberComposableHelpersPrivateCreateMultiArrayHelper) {
  'use strict';

  exports.append = append;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function append() {
    for (var _len = arguments.length, dependentKeys = Array(_len), _key = 0; _key < _len; _key++) {
      dependentKeys[_key] = arguments[_key];
    }

    dependentKeys = dependentKeys || [];
    var arrayKeys = dependentKeys.map(function (dependentKey) {
      return dependentKey + '.[]';
    });

    return _emberComputed['default'].apply(undefined, _toConsumableArray(arrayKeys).concat([function () {
      var _ref,
          _this = this;

      var array = dependentKeys.map(function (dependentKey) {
        var value = (0, _emberMetalGet['default'])(_this, dependentKey);
        return (0, _emberArrayUtils.isEmberArray)(value) ? value.toArray() : [value];
      });

      return (_ref = []).concat.apply(_ref, _toConsumableArray(array));
    }]));
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateMultiArrayHelper['default'])(append);
});