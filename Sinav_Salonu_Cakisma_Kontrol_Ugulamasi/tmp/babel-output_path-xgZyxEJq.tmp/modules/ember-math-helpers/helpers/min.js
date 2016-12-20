export { min };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
var Helper = Ember.Helper;

function min(params) {
  return Math.min.apply(Math, _toConsumableArray(params));
}

export default Helper.helper(min);