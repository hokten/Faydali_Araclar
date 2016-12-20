define('ember-math-helpers/helpers/mod', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.mod = mod;

  var Helper = _ember['default'].Helper;

  function mod(params) {
    return params.reduce(function (a, b) {
      return a % b;
    });
  }

  exports['default'] = Helper.helper(mod);
});