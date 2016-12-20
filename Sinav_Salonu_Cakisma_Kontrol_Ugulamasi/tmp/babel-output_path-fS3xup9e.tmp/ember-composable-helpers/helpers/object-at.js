define('ember-composable-helpers/helpers/object-at', ['exports', 'ember-helper', 'ember-array/utils', 'ember-computed', 'ember-metal/observer', 'ember-metal/get', 'ember-metal/set'], function (exports, _emberHelper, _emberArrayUtils, _emberComputed, _emberMetalObserver, _emberMetalGet, _emberMetalSet) {
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

  exports.objectAt = objectAt;

  function objectAt(index, array) {
    if (!(0, _emberArrayUtils.isEmberArray)(array)) {
      return undefined;
    }

    index = parseInt(index, 10);

    return (0, _emberArrayUtils.A)(array).objectAt(index);
  }

  exports['default'] = _emberHelper['default'].extend({
    content: (0, _emberComputed['default'])('index', 'array.[]', function () {
      var index = (0, _emberMetalGet['default'])(this, 'index');
      var array = (0, _emberMetalGet['default'])(this, 'array');

      return objectAt(index, array);
    }),

    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var index = _ref2[0];
      var array = _ref2[1];

      (0, _emberMetalSet['default'])(this, 'index', index);
      (0, _emberMetalSet['default'])(this, 'array', array);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});