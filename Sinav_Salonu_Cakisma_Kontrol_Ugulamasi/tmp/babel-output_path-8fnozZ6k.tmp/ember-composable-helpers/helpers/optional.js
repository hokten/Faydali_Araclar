define('ember-composable-helpers/helpers/optional', ['exports', 'ember-helper'], function (exports, _emberHelper) {
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

  exports.optional = optional;

  function optional(_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var action = _ref2[0];

    if (typeof action === 'function') {
      return action;
    }

    return function (i) {
      return i;
    };
  }

  exports['default'] = (0, _emberHelper.helper)(optional);
});