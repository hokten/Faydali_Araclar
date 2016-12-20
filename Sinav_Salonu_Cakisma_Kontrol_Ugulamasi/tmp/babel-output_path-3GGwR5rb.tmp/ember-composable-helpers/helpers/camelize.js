define('ember-composable-helpers/helpers/camelize', ['exports', 'ember-helper', 'ember-string', 'ember-composable-helpers/-private/create-string-helper'], function (exports, _emberHelper, _emberString, _emberComposableHelpersPrivateCreateStringHelper) {
  'use strict';

  var camelize = (0, _emberComposableHelpersPrivateCreateStringHelper['default'])(_emberString.camelize);
  exports.camelize = camelize;
  exports['default'] = (0, _emberHelper.helper)(camelize);
});