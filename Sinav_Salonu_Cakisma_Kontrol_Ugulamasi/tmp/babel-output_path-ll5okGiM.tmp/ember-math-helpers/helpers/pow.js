define('ember-math-helpers/helpers/pow', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.pow = pow;

  var Helper = _ember['default'].Helper;

  function pow(params) {
    return params.reduce(function (base, exponent) {
      return Math.pow(base, exponent);
    });
  }

  exports['default'] = Helper.helper(pow);
});