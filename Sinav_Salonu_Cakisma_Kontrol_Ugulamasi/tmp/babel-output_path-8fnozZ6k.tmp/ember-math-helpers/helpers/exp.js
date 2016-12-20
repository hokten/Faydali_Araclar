define('ember-math-helpers/helpers/exp', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.exp = exp;

  var Helper = _ember['default'].Helper;

  function exp(params) {
    return Math.exp(params[0]);
  }

  exports['default'] = Helper.helper(exp);
});