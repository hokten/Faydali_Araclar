import Ember from 'ember';

var __loader = Ember.__loader;

var ClosureActionModule = { ACTION: null };

if ('ember-htmlbars/keywords/closure-action' in __loader.registry) {
  ClosureActionModule = __loader.require('ember-htmlbars/keywords/closure-action');
} else if ('ember-routing-htmlbars/keywords/closure-action' in __loader.registry) {
  ClosureActionModule = __loader.require('ember-routing-htmlbars/keywords/closure-action');
}

export default ClosureActionModule.ACTION;