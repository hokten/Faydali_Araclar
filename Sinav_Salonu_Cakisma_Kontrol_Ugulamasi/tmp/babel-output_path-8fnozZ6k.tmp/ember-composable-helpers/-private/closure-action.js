define('ember-composable-helpers/-private/closure-action', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  var __loader = _ember['default'].__loader;

  var ClosureActionModule = { ACTION: null };

  if ('ember-htmlbars/keywords/closure-action' in __loader.registry) {
    ClosureActionModule = __loader.require('ember-htmlbars/keywords/closure-action');
  } else if ('ember-routing-htmlbars/keywords/closure-action' in __loader.registry) {
    ClosureActionModule = __loader.require('ember-routing-htmlbars/keywords/closure-action');
  }

  exports['default'] = ClosureActionModule.ACTION;
});