export { append };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import computed from 'ember-computed';
import get from 'ember-metal/get';
import { isEmberArray } from 'ember-array/utils';
import createMultiArrayHelper from '../-private/create-multi-array-helper';

function append() {
  for (var _len = arguments.length, dependentKeys = Array(_len), _key = 0; _key < _len; _key++) {
    dependentKeys[_key] = arguments[_key];
  }

  dependentKeys = dependentKeys || [];
  var arrayKeys = dependentKeys.map(function (dependentKey) {
    return dependentKey + '.[]';
  });

  return computed.apply(undefined, _toConsumableArray(arrayKeys).concat([function () {
    var _ref,
        _this = this;

    var array = dependentKeys.map(function (dependentKey) {
      var value = get(_this, dependentKey);
      return isEmberArray(value) ? value.toArray() : [value];
    });

    return (_ref = []).concat.apply(_ref, _toConsumableArray(array));
  }]));
}

export default createMultiArrayHelper(append);