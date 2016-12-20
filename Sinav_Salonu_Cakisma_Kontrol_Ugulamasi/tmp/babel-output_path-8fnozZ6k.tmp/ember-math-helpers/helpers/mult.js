define('ember-math-helpers/helpers/mult', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.mult = mult;

  var Helper = _ember['default'].Helper;

  function mult(params) {
    return params.reduce(function (a, b) {
      return a * b;
    });
  }

  exports['default'] = Helper.helper(mult);
});