define('ember-composable-helpers/helpers/find-by', ['exports', 'ember', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set', 'ember-array/utils', 'ember-utils'], function (exports, _ember, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet, _emberArrayUtils, _emberUtils) {
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

      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'byPath', byPath);
      (0, _emberMetalSet['default'])(this, 'value', value);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    byPathDidChange: (0, _emberMetalObserver['default'])('byPath', function () {
      var byPath = (0, _emberMetalGet['default'])(this, 'byPath');

      if ((0, _emberUtils.isEmpty)(byPath)) {
        defineProperty(this, 'content', []);
        return;
      }

      defineProperty(this, 'content', (0, _emberComputed['default'])('array.@each.' + byPath, 'value', function () {
        var array = (0, _emberMetalGet['default'])(this, 'array');
        var value = (0, _emberMetalGet['default'])(this, 'value');

        return (0, _emberArrayUtils.A)(array).findBy(byPath, value);
      }));
    }),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});