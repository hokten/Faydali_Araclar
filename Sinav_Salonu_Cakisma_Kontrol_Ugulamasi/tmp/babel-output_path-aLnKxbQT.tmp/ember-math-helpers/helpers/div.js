define('ember-math-helpers/helpers/div', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.div = div;

  var Helper = _ember['default'].Helper;

  function div(params) {
    return params.reduce(function (a, b) {
      return a / b;
    });
  }

  exports['default'] = Helper.helper(div);
});