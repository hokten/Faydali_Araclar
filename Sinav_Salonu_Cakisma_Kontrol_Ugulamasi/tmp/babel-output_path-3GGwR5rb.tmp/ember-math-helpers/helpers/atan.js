define('ember-math-helpers/helpers/atan', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.atan = atan;

  var Helper = _ember['default'].Helper;

  function atan(params) {
    return Math.atan(params[0]);
  }

  exports['default'] = Helper.helper(atan);
});