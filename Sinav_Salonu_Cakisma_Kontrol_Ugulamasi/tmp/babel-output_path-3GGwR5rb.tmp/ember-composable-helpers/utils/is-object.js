define('ember-composable-helpers/utils/is-object', ['exports', 'ember-utils'], function (exports, _emberUtils) {
  'use strict';

  exports['default'] = isObject;

  function isObject(val) {
    return (0, _emberUtils.typeOf)(val) === 'object' || (0, _emberUtils.typeOf)(val) === 'instance';
  }
});