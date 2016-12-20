define('ember-composable-helpers/utils/is-promise', ['exports', 'ember-utils', 'ember-composable-helpers/utils/is-object'], function (exports, _emberUtils, _emberComposableHelpersUtilsIsObject) {
  'use strict';

  exports['default'] = isPromise;

  function isPromiseLike() {
    var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    return (0, _emberUtils.typeOf)(obj.then) === 'function' && (0, _emberUtils.typeOf)(obj['catch']) === 'function' && (0, _emberUtils.typeOf)(obj['finally']) === 'function';
  }
  function isPromise(obj) {
    return (0, _emberComposableHelpersUtilsIsObject['default'])(obj) && isPromiseLike(obj);
  }
});