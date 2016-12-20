define('ember-math-helpers/helpers/abs', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.abs = abs;

  var Helper = _ember['default'].Helper;

  function abs(params) {
    return Math.abs(params[0]);
  }

  exports['default'] = Helper.helper(abs);
});