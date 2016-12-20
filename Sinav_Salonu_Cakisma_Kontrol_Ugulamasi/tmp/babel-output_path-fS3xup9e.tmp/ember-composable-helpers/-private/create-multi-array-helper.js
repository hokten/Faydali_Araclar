define('ember-composable-helpers/-private/create-multi-array-helper', ['exports', 'ember', 'ember-array/utils', 'ember-helper', 'ember-metal/utils', 'ember-metal/observer', 'ember-metal/get', 'ember-metal/set', 'ember-utils'], function (exports, _ember, _emberArrayUtils, _emberHelper, _emberMetalUtils, _emberMetalObserver, _emberMetalGet, _emberMetalSet, _emberUtils) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  var defineProperty = _ember['default'].defineProperty;

  var idForArray = function idForArray(array) {
    return '__array-' + (0, _emberMetalUtils.guidFor)(array);
  };

  exports['default'] = function (multiArrayComputed) {
    return _emberHelper['default'].extend({
      compute: function compute(_ref) {
        var _ref2 = _toArray(_ref);

        var arrays = _ref2;

        (0, _emberMetalSet['default'])(this, 'arrays', arrays.map(function (obj) {
          if ((0, _emberArrayUtils.isEmberArray)(obj)) {
            return (0, _emberArrayUtils.A)(obj);
          }

          return obj;
        }));

        return (0, _emberMetalGet['default'])(this, 'content');
      },

      valuesDidChange: (0, _emberMetalObserver['default'])('arrays.[]', function () {
        this._recomputeArrayKeys();

        var arrays = (0, _emberMetalGet['default'])(this, 'arrays');
        var arrayKeys = (0, _emberMetalGet['default'])(this, 'arrayKeys');

        if ((0, _emberUtils.isEmpty)(arrays)) {
          defineProperty(this, 'content', []);
          return;
        }

        defineProperty(this, 'content', multiArrayComputed.apply(undefined, _toConsumableArray(arrayKeys)));
      }),

      contentDidChange: (0, _emberMetalObserver['default'])('content.[]', function () {
        this.recompute();
      }),

      _recomputeArrayKeys: function _recomputeArrayKeys() {
        var _this = this;

        var arrays = (0, _emberMetalGet['default'])(this, 'arrays');

        var oldArrayKeys = (0, _emberMetalGet['default'])(this, 'arrayKeys') || [];
        var newArrayKeys = arrays.map(idForArray);

        var keysToRemove = oldArrayKeys.filter(function (key) {
          return newArrayKeys.indexOf(key) === -1;
        });

        keysToRemove.forEach(function (key) {
          return (0, _emberMetalSet['default'])(_this, key, null);
        });
        arrays.forEach(function (array) {
          return (0, _emberMetalSet['default'])(_this, idForArray(array), array);
        });

        (0, _emberMetalSet['default'])(this, 'arrayKeys', newArrayKeys);
      }
    });
  };
});