define('ember-math-helpers/helpers/acos', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.acos = acos;

  var Helper = _ember['default'].Helper;

  function acos(params) {
    return Math.acos(params[0]);
  }

  exports['default'] = Helper.helper(acos);
});