define('ember-composable-helpers/helpers/compact', ['exports', 'ember-array/utils', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set', 'ember-utils'], function (exports, _emberArrayUtils, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet, _emberUtils) {
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

  exports['default'] = _emberHelper['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 1);

      var array = _ref2[0];

      if (!(0, _emberArrayUtils.isEmberArray)(array)) {
        return (0, _emberArrayUtils.A)([array]);
      }

      (0, _emberMetalSet['default'])(this, 'array', array);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    content: (0, _emberComputed.filter)('array', _emberUtils.isPresent),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});