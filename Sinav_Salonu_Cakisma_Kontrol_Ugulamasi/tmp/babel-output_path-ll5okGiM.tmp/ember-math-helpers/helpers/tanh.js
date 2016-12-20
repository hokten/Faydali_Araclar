define('ember-math-helpers/helpers/tanh', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.tanh = tanh;

  var Helper = _ember['default'].Helper;

  function tanh(params) {
    return Math.tanh(params[0]);
  }

  exports['default'] = Helper.helper(tanh);
});