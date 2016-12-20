function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import Ember from 'ember';
import { A as emberArray, isEmberArray } from 'ember-array/utils';
import Helper from 'ember-helper';
import { guidFor } from 'ember-metal/utils';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { isEmpty } from 'ember-utils';

var defineProperty = Ember.defineProperty;

var idForArray = function idForArray(array) {
  return '__array-' + guidFor(array);
};

export default function (multiArrayComputed) {
  return Helper.extend({
    compute: function compute(_ref) {
      var _ref2 = _toArray(_ref);

      var arrays = _ref2;

      set(this, 'arrays', arrays.map(function (obj) {
        if (isEmberArray(obj)) {
          return emberArray(obj);
        }

        return obj;
      }));

      return get(this, 'content');
    },

    valuesDidChange: observer('arrays.[]', function () {
      this._recomputeArrayKeys();

      var arrays = get(this, 'arrays');
      var arrayKeys = get(this, 'arrayKeys');

      if (isEmpty(arrays)) {
        defineProperty(this, 'content', []);
        return;
      }

      defineProperty(this, 'content', multiArrayComputed.apply(undefined, _toConsumableArray(arrayKeys)));
    }),

    contentDidChange: observer('content.[]', function () {
      this.recompute();
    }),

    _recomputeArrayKeys: function _recomputeArrayKeys() {
      var _this = this;

      var arrays = get(this, 'arrays');

      var oldArrayKeys = get(this, 'arrayKeys') || [];
      var newArrayKeys = arrays.map(idForArray);

      var keysToRemove = oldArrayKeys.filter(function (key) {
        return newArrayKeys.indexOf(key) === -1;
      });

      keysToRemove.forEach(function (key) {
        return set(_this, key, null);
      });
      arrays.forEach(function (array) {
        return set(_this, idForArray(array), array);
      });

      set(this, 'arrayKeys', newArrayKeys);
    }
  });
}