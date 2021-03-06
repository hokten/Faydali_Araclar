define('ember-moment/helpers/unix', ['exports', 'moment', 'ember-moment/helpers/-base'], function (exports, _moment, _emberMomentHelpersBase) {
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

  exports['default'] = _emberMomentHelpersBase['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 1);

      var unixTimeStamp = _ref2[0];

      this._super.apply(this, arguments);

      return _moment['default'].unix(unixTimeStamp);
    }
  });
});