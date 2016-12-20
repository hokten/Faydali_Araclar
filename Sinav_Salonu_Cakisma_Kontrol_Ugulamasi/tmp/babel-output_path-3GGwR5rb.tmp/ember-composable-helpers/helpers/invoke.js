define('ember-composable-helpers/helpers/invoke', ['exports', 'ember-array/utils', 'ember-helper', 'ember-utils', 'rsvp'], function (exports, _emberArrayUtils, _emberHelper, _emberUtils, _rsvp) {
  'use strict';

  exports.invoke = invoke;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  var all = _rsvp['default'].all;

  function invoke(_ref) {
    var _ref2 = _toArray(_ref);

    var methodName = _ref2[0];

    var args = _ref2.slice(1);

    var obj = args.pop();

    if ((0, _emberArrayUtils.isEmberArray)(obj)) {
      return function () {
        var promises = obj.map(function (item) {
          return (0, _emberUtils.tryInvoke)(item, methodName, args);
        });

        return all(promises);
      };
    }

    return function () {
      return (0, _emberUtils.tryInvoke)(obj, methodName, args);
    };
  }

  exports['default'] = (0, _emberHelper.helper)(invoke);
});