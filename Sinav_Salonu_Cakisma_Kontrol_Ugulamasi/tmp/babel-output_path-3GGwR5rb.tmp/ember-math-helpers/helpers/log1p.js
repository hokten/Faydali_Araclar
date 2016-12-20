define('ember-math-helpers/helpers/log1p', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.log1p = log1p;

  var Helper = _ember['default'].Helper;

  function log1p(params) {
    return Math.log1p(params[0]);
  }

  exports['default'] = Helper.helper(log1p);
});