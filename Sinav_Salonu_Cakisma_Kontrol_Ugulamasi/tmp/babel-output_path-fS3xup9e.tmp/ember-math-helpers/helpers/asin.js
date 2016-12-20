define('ember-math-helpers/helpers/asin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.asin = asin;

  var Helper = _ember['default'].Helper;

  function asin(params) {
    return Math.asin(params[0]);
  }

  exports['default'] = Helper.helper(asin);
});