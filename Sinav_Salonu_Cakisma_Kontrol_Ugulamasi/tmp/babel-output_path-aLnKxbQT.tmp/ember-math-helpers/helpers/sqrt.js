define('ember-math-helpers/helpers/sqrt', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.sqrt = sqrt;

  var Helper = _ember['default'].Helper;

  function sqrt(params) {
    return Math.sqrt(params[0]);
  }

  exports['default'] = Helper.helper(sqrt);
});