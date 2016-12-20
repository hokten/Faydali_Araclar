define('ember-math-helpers/helpers/ceil', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.ceil = ceil;

  var Helper = _ember['default'].Helper;

  function ceil(params) {
    return Math.ceil(params[0]);
  }

  exports['default'] = Helper.helper(ceil);
});