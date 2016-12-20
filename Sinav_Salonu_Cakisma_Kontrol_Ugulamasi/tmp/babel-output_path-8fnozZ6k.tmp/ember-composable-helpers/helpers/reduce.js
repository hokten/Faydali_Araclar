define('ember-composable-helpers/helpers/reduce', ['exports', 'ember', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set', 'ember-utils', 'ember-computed'], function (exports, _ember, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet, _emberUtils, _emberComputed) {
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

      var callback = _ref2[0];
      var initialValue = _ref2[1];
      var array = _ref2[2];

      (0, _emberMetalSet['default'])(this, 'callback', callback);
      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'initialValue', initialValue);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    callbackDidChange: (0, _emberMetalObserver['default'])('callback', 'initialValue', function () {
      var _this = this;

      var callback = (0, _emberMetalGet['default'])(this, 'callback');
      var initialValue = (0, _emberMetalGet['default'])(this, 'initialValue');

      if ((0, _emberUtils.isEmpty)(callback)) {
        defineProperty(this, 'content', []);
        return;
      }

      var cp = (0, _emberComputed['default'])('array.[]', function () {
        var array = (0, _emberMetalGet['default'])(_this, 'array');
        return array.reduce(callback, initialValue);
      });

      defineProperty(this, 'content', cp);
    }),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});