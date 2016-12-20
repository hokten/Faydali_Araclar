define('ember-math-helpers/helpers/imul', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.imul = imul;

  var Helper = _ember['default'].Helper;

  function imul(params) {
    return Math.imul(params[0], params[1]);
  }

  exports['default'] = Helper.helper(imul);
});