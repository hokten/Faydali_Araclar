define('ember-composable-helpers/helpers/chunk', ['exports', 'ember-array/utils', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set'], function (exports, _emberArrayUtils, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet) {
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

  exports.chunk = chunk;

  var max = Math.max;
  var ceil = Math.ceil;

  function chunk(num, array) {
    var integer = parseInt(num, 10);
    var size = max(integer, 0);

    var length = 0;
    if ((0, _emberArrayUtils.isEmberArray)(array)) {
      length = (0, _emberMetalGet['default'])(array, 'length');
    }

    if (!length || size < 1) {
      return [];
    } else {
      var index = 0;
      var resultIndex = -1;
      var result = new Array(ceil(length / size));

      while (index < length) {
        result[++resultIndex] = array.slice(index, index += size);
      }

      return result;
    }
  }

  exports['default'] = _emberHelper['default'].extend({
    content: (0, _emberComputed['default'])('num', 'array.[]', function () {
      var array = (0, _emberMetalGet['default'])(this, 'array');
      var num = (0, _emberMetalGet['default'])(this, 'num');

      return chunk(num, array);
    }),

    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var num = _ref2[0];
      var array = _ref2[1];

      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'num', num);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});