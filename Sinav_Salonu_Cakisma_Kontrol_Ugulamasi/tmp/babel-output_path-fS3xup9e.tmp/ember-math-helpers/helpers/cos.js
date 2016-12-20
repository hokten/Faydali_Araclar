define('ember-math-helpers/helpers/cos', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.cos = cos;

  var Helper = _ember['default'].Helper;

  function cos(params) {
    return Math.cos(params[0]);
  }

  exports['default'] = Helper.helper(cos);
});