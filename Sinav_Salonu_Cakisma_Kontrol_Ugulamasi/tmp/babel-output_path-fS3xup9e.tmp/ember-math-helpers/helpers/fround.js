define('ember-math-helpers/helpers/fround', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.fround = fround;

  var Helper = _ember['default'].Helper;

  function fround(params) {
    return Math.fround(params[0]);
  }

  exports['default'] = Helper.helper(fround);
});