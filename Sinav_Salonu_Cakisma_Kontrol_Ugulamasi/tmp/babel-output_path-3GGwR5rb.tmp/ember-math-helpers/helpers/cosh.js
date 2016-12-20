define('ember-math-helpers/helpers/cosh', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.cosh = cosh;

  var Helper = _ember['default'].Helper;

  function cosh(params) {
    return Math.cosh(params[0]);
  }

  exports['default'] = Helper.helper(cosh);
});