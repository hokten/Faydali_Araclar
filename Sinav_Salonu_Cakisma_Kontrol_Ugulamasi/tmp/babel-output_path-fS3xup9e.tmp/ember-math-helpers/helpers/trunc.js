define('ember-math-helpers/helpers/trunc', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.trunc = trunc;

  var Helper = _ember['default'].Helper;

  function trunc(params) {
    return Math.trunc(params[0]);
  }

  exports['default'] = Helper.helper(trunc);
});