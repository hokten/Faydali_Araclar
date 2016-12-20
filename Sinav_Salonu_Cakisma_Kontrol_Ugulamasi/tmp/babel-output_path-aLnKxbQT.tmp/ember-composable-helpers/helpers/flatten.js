define('ember-composable-helpers/helpers/flatten', ['exports', 'ember-helper', 'ember-array/utils', 'ember-metal/observer', 'ember-metal/set'], function (exports, _emberHelper, _emberArrayUtils, _emberMetalObserver, _emberMetalSet) {
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

  exports.flatten = flatten;

  function flatten(array) {
    if (!(0, _emberArrayUtils.isEmberArray)(array)) {
      return array;
    }

    return array.reduce(function (flattened, el) {
      return flattened.concat(flatten(el));
    }, []);
  }

  exports['default'] = _emberHelper['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 1);

      var array = _ref2[0];

      (0, _emberMetalSet['default'])(this, 'array', array);

      return flatten(array);
    },

    arrayContentDidChange: (0, _emberMetalObserver['default'])('array.[]', function () {
      this.recompute();
    })
  });
});