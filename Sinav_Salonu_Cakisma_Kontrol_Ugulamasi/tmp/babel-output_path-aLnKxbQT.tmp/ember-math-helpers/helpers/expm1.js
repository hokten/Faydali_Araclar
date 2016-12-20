define('ember-math-helpers/helpers/expm1', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.expm1 = expm1;

  var Helper = _ember['default'].Helper;

  function expm1(params) {
    return Math.expm1(params[0]);
  }

  exports['default'] = Helper.helper(expm1);
});