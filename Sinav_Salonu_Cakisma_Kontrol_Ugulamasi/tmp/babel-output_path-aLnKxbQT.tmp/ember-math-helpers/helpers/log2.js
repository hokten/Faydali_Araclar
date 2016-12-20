define('ember-math-helpers/helpers/log2', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.log2 = log2;

  var Helper = _ember['default'].Helper;

  function log2(params) {
    return Math.log2(params[0]);
  }

  exports['default'] = Helper.helper(log2);
});