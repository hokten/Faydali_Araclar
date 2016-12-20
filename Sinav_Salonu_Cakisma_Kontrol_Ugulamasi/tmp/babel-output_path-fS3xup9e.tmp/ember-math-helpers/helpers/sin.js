define('ember-math-helpers/helpers/sin', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.sin = sin;

  var Helper = _ember['default'].Helper;

  function sin(params) {
    return Math.sin(params[0]);
  }

  exports['default'] = Helper.helper(sin);
});