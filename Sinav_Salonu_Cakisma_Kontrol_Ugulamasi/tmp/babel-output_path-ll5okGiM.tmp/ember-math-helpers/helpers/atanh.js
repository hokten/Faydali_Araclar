define('ember-math-helpers/helpers/atanh', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.atanh = atanh;

  var Helper = _ember['default'].Helper;

  function atanh(params) {
    return Math.atanh(params[0]);
  }

  exports['default'] = Helper.helper(atanh);
});