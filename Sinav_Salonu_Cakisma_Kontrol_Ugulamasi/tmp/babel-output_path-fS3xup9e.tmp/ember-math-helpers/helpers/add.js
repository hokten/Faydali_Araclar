define('ember-math-helpers/helpers/add', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.add = add;

  var Helper = _ember['default'].Helper;

  function add(params) {
    return params.reduce(function (a, b) {
      return a + b;
    });
  }

  exports['default'] = Helper.helper(add);
});