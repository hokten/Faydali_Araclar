define('ember-math-helpers/helpers/round', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.round = round;

  var Helper = _ember['default'].Helper;

  function round(number) {
    return Math.round(number[0]);
  }

  exports['default'] = Helper.helper(round);
});