export { compute };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import { helper } from 'ember-helper';

function compute(_ref) {
  var _ref2 = _toArray(_ref);

  var action = _ref2[0];

  var params = _ref2.slice(1);

  return action.apply(undefined, _toConsumableArray(params));
}

export default helper(compute);