define('ember-composable-helpers/helpers/capitalize', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var capitalize = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.capitalize);
  exports.capitalize = capitalize;
  exports['default'] = (0, _emberHelper.helper)(capitalize);
});