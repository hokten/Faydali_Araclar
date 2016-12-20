define('ember-composable-helpers/helpers/filter-by', ['exports', 'ember', 'ember-array/utils', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set', 'ember-utils'], function (exports, _ember, _emberArrayUtils, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet, _emberUtils) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var defineProperty = _ember['default'].defineProperty;

  exports['default'] = _emberHelper['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 3);

      var byPath = _ref2[0];
      var value = _ref2[1];
      var array = _ref2[2];

      if (!(0, _emberArrayUtils.isEmberArray)(array) && (0, _emberArrayUtils.isEmberArray)(value)) {
        array = value;
        value = undefined;
      }

      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'byPath', byPath);
      (0, _emberMetalSet['default'])(this, 'value', value);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    byPathDidChange: (0, _emberMetalObserver['default'])('byPath', 'value', function () {
      var byPath = (0, _emberMetalGet['default'])(this, 'byPath');
      var value = (0, _emberMetalGet['default'])(this, 'value');

      if ((0, _emberUtils.isEmpty)(byPath)) {
        defineProperty(this, 'content', []);
        return;
      }

      var filterFn = undefined;

      if ((0, _emberUtils.isPresent)(value)) {
        if (typeof value === 'function') {
          filterFn = function (item) {
            return value((0, _emberMetalGet['default'])(item, byPath));
          };
        } else {
          filterFn = function (item) {
            return (0, _emberMetalGet['default'])(item, byPath) === value;
          };
        }
      } else {
        filterFn = function (item) {
          return (0, _emberUtils.isPresent)((0, _emberMetalGet['default'])(item, byPath));
        };
      }

      var cp = (0, _emberComputed.filter)('array.@each.' + byPath, filterFn);

      defineProperty(this, 'content', cp);
    }),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});