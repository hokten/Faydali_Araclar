define('ember-macro-helpers/is-computed', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var ComputedProperty = _ember['default'].ComputedProperty;

  exports['default'] = function (key) {
    return key instanceof ComputedProperty;
  };
});