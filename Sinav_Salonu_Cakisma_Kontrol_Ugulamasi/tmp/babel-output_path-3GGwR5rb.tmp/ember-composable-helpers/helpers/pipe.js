define('ember-composable-helpers/helpers/pipe', ['exports', 'ember-helper', 'ember-composable-helpers/utils/is-promise'], function (exports, _emberHelper, _emberComposableHelpersUtilsIsPromise) {
  'use strict';

  exports.invokeFunction = invokeFunction;
  exports.pipe = pipe;

  function invokeFunction(acc, curr) {
    if ((0, _emberComposableHelpersUtilsIsPromise['default'])(acc)) {
      return acc.then(curr);
    }

    return curr(acc);
  }

  function pipe() {
    var actions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    return function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return actions.reduce(function (acc, curr, idx) {
        if (idx === 0) {
          return curr.apply(undefined, args);
        }

        return invokeFunction(acc, curr);
      }, undefined);
    };
  }

  exports['default'] = (0, _emberHelper.helper)(pipe);
});