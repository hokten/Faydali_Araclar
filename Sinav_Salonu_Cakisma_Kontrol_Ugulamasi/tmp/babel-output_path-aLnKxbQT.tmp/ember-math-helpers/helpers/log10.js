define('ember-math-helpers/helpers/log10', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.log10 = log10;

  var Helper = _ember['default'].Helper;

  function log10(params) {
    return Math.log10(params[0]);
  }

  exports['default'] = Helper.helper(log10);
});