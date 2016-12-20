define('ember-math-helpers/helpers/floor', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.floor = floor;

  var Helper = _ember['default'].Helper;

  function floor(params) {
    return Math.floor(params[0]);
  }

  exports['default'] = Helper.helper(floor);
});