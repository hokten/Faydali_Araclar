define('ember-composable-helpers/helpers/toggle-action', ['exports', 'ember-helper', 'ember-composable-helpers/helpers/toggle', 'ember-composable-helpers/-private/closure-action'], function (exports, _emberHelper, _emberComposableHelpersHelpersToggle, _emberComposableHelpersPrivateClosureAction) {
  'use strict';

  var closureToggle = _emberComposableHelpersHelpersToggle.toggle;
  if (_emberComposableHelpersPrivateClosureAction['default']) {
    closureToggle[_emberComposableHelpersPrivateClosureAction['default']] = true;
  }

  exports['default'] = (0, _emberHelper.helper)(closureToggle);
});