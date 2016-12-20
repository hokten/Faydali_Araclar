define('ember-math-helpers/helpers/sign', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.sign = sign;

  var Helper = _ember['default'].Helper;

  function sign(params) {
    return Math.sign(params[0]);
  }

  exports['default'] = Helper.helper(sign);
});