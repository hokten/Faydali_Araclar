define('ember-composable-helpers/helpers/html-safe', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var htmlSafe = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.htmlSafe);
  exports.htmlSafe = htmlSafe;
  exports['default'] = (0, _emberHelper.helper)(htmlSafe);
});