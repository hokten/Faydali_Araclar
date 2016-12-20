define('ember-composable-helpers/helpers/toggle', ['exports', 'ember-helper', 'ember-metal/get', 'ember-metal/set', 'ember-utils'], function (exports, _emberHelper, _emberMetalGet, _emberMetalSet, _emberUtils) {
  'use strict';

  exports.toggle = toggle;

  function _toArray(arr) {
    return Array.isArray(arr) ? arr : Array.from(arr);
  }

  function nextIndex(length, currentIdx) {
    if (currentIdx === -1 || currentIdx + 1 === length) {
      return 0;
    }

    return currentIdx + 1;
  }

  function toggle(_ref) {
    var _ref2 = _toArray(_ref);

    var prop = _ref2[0];
    var obj = _ref2[1];

    var values = _ref2.slice(2);

    return function () {
      var currentValue = (0, _emberMetalGet['default'])(obj, prop);

      if ((0, _emberUtils.isPresent)(values)) {
        var currentIdx = values.indexOf(currentValue);
        var nextIdx = nextIndex((0, _emberMetalGet['default'])(values, 'length'), currentIdx);

        return (0, _emberMetalSet['default'])(obj, prop, values[nextIdx]);
      }

      return (0, _emberMetalSet['default'])(obj, prop, !currentValue);
    };
  }

  exports['default'] = (0, _emberHelper.helper)(toggle);
});