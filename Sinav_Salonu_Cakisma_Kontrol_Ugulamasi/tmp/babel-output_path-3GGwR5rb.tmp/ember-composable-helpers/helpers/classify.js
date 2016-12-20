define('ember-composable-helpers/helpers/classify', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var classify = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.classify);
  exports.classify = classify;
  exports['default'] = (0, _emberHelper.helper)(classify);
});