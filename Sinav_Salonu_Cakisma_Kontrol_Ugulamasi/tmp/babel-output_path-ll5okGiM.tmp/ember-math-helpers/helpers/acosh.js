define('ember-math-helpers/helpers/acosh', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.acosh = acosh;

  var Helper = _ember['default'].Helper;

  function acosh(params) {
    return Math.acosh(params[0]);
  }

  exports['default'] = Helper.helper(acosh);
});