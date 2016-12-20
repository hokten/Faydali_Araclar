define('ember-math-helpers/helpers/tan', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.tan = tan;

  var Helper = _ember['default'].Helper;

  function tan(params) {
    return Math.tan(params[0]);
  }

  exports['default'] = Helper.helper(tan);
});