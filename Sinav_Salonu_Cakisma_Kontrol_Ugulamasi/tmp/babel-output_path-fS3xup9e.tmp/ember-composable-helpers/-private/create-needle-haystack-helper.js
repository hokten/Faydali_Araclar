define('ember-composable-helpers/-private/create-needle-haystack-helper', ['exports', 'ember', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set'], function (exports, _ember, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet) {
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

  exports['default'] = createNeedleHaystackHelper;

  var K = _ember['default'].K;
  var isEmpty = _ember['default'].isEmpty;

  /**
   * Creates a generic Helper class implementation that expects a `needle` and
   * `haystack` as arguments. A `fn` function is required to be passed in
   * that is invoked with the `needle` and `haystack` arguments.
   *
   * @private
   * @param  {Function} fn A function to run against the needle and haystack
   * @return {Any}
   */
  function createNeedleHaystackHelper() {
    var fn = arguments.length <= 0 || arguments[0] === undefined ? K : arguments[0];

    return _emberHelper['default'].extend({
      content: (0, _emberComputed['default'])('needle.[]', 'haystack.[]', 'option', function () {
        var needle = (0, _emberMetalGet['default'])(this, 'needle');
        var haystack = (0, _emberMetalGet['default'])(this, 'haystack');
        var option = (0, _emberMetalGet['default'])(this, 'option');

        return fn(needle, haystack, option);
      }).readOnly(),

      compute: function compute(_ref) {
        var _ref2 = _slicedToArray(_ref, 3);

        var needle = _ref2[0];
        var option = _ref2[1];
        var haystack = _ref2[2];

        if (isEmpty(haystack)) {
          haystack = option;
          option = null;
        }

        (0, _emberMetalSet['default'])(this, 'needle', needle);
        (0, _emberMetalSet['default'])(this, 'haystack', haystack);
        (0, _emberMetalSet['default'])(this, 'option', option);

        return (0, _emberMetalGet['default'])(this, 'content');
      },

      contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
        this.recompute();
      })
    });
  }
});