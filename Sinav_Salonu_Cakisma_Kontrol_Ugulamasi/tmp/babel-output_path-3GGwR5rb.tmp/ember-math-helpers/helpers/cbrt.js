define('ember-math-helpers/helpers/cbrt', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.cbrt = cbrt;

  var Helper = _ember['default'].Helper;

  function cbrt(params) {
    return Math.cbrt(params[0]);
  }

  exports['default'] = Helper.helper(cbrt);
});