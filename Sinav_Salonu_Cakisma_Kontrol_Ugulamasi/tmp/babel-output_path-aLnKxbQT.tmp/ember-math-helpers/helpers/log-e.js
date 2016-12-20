define('ember-math-helpers/helpers/log-e', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.logE = logE;

  var Helper = _ember['default'].Helper;

  function logE(params) {
    return Math.log(params[0]);
  }

  exports['default'] = Helper.helper(logE);
});