define('ember-math-helpers/helpers/sub', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports.sub = sub;

  var Helper = _ember['default'].Helper;

  function sub(params) {
    return params.reduce(function (a, b) {
      return a - b;
    });
  }

  exports['default'] = Helper.helper(sub);
});