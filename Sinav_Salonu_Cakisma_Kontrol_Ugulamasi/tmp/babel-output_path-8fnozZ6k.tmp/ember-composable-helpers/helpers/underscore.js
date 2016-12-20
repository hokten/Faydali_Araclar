define('ember-composable-helpers/helpers/underscore', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var underscore = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.underscore);
  exports.underscore = underscore;
  exports['default'] = (0, _emberHelper.helper)(underscore);
});