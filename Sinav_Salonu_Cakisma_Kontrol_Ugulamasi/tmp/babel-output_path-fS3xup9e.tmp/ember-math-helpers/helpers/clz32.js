define('ember-math-helpers/helpers/clz32', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.clz32 = clz32;

  var Helper = _ember['default'].Helper;

  function clz32(params) {
    return Math.clz32(params[0]);
  }

  exports['default'] = Helper.helper(clz32);
});