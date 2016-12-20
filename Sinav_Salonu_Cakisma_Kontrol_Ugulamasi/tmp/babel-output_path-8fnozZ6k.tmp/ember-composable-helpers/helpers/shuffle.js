define('ember-composable-helpers/helpers/shuffle', ['exports', 'ember-array/utils', 'ember-helper', 'ember-metal/observer', 'ember-metal/get', 'ember-metal/set', 'ember-utils'], function (exports, _emberArrayUtils, _emberHelper, _emberMetalObserver, _emberMetalGet, _emberMetalSet, _emberUtils) {
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

  exports.shuffle = shuffle;

  function shuffle(array, randomizer) {
    array = array.slice(0);
    var count = (0, _emberMetalGet['default'])(array, 'length');
    var rand = undefined,
        temp = undefined;
    randomizer = (0, _emberUtils.typeOf)(randomizer) === 'function' && randomizer || Math.random;

    while (count > 1) {
      rand = Math.floor(randomizer() * count--);

      temp = array[count];
      array[count] = array[rand];
      array[rand] = temp;
    }
    return array;
  }

  exports['default'] = _emberHelper['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var random = _ref2[0];
      var array = _ref2[1];

      if (array === undefined) {
        array = random;
        random = undefined;
      }

      if (!(0, _emberArrayUtils.isEmberArray)(array)) {
        return (0, _emberArrayUtils.A)([array]);
      }

      (0, _emberMetalSet['default'])(this, 'array', array);
      return shuffle(array, random);
    },

    arrayContentDidChange: (0, _emberMetalObserver['default'])('array.[]', function () {
      this.recompute();
    })
  });
});