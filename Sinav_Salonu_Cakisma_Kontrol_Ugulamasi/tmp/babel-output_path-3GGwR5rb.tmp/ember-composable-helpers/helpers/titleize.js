define('ember-composable-helpers/helpers/titleize', ['exports', 'ember-helper', 'ember-composable-helpers/utils/titleize', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberComposableHelpersUtilsTitleize, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var titleize = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberComposableHelpersUtilsTitleize['default']);
  exports.titleize = titleize;
  exports['default'] = (0, _emberHelper.helper)(titleize);
});