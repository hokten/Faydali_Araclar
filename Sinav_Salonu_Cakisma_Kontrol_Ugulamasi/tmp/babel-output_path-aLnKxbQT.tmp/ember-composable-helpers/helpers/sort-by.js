define('ember-composable-helpers/helpers/sort-by', ['exports', 'ember', 'ember-array/utils', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set', 'ember-utils'], function (exports, _ember, _emberArrayUtils, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet, _emberUtils) {
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
    compute: function compute(params) {
      // slice params to avoid mutating the provided params
      var sortProps = params.slice();
      var array = sortProps.pop();
      var _sortProps = sortProps;

      var _sortProps2 = _slicedToArray(_sortProps, 1);

      var firstSortProp = _sortProps2[0];

      if ((0, _emberUtils.typeOf)(firstSortProp) === 'function' || (0, _emberArrayUtils.isEmberArray)(firstSortProp)) {
        sortProps = firstSortProp;
      }

      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'sortProps', sortProps);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    sortPropsDidChange: (0, _emberMetalObserver['default'])('sortProps', function () {
      var sortProps = (0, _emberMetalGet['default'])(this, 'sortProps');

      if ((0, _emberUtils.isEmpty)(sortProps)) {
        defineProperty(this, 'content', []);
      }

      if (typeof sortProps === 'function') {
        defineProperty(this, 'content', (0, _emberComputed.sort)('array', sortProps));
      } else {
        defineProperty(this, 'content', (0, _emberComputed.sort)('array', 'sortProps'));
      }
    }),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});