define('ember-math-helpers/helpers/asinh', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.asinh = asinh;

  var Helper = _ember['default'].Helper;

  function asinh(params) {
    return Math.asinh(params[0]);
  }

  exports['default'] = Helper.helper(asinh);
});