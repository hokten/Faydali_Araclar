define('ember-math-helpers/helpers/atan2', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.atan2 = atan2;

  var Helper = _ember['default'].Helper;

  function atan2(params) {
    return Math.atan2(params[0], params[1]);
  }

  exports['default'] = Helper.helper(atan2);
});