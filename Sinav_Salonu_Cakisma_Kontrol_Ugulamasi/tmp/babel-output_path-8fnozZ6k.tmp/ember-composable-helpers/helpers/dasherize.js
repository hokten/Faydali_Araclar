define('ember-composable-helpers/helpers/dasherize', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var dasherize = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.dasherize);
  exports.dasherize = dasherize;
  exports['default'] = (0, _emberHelper.helper)(dasherize);
});