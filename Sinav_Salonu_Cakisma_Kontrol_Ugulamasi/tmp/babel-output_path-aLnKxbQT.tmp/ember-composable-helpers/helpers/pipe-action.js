define('ember-composable-helpers/helpers/pipe-action', ['exports', 'ember-helper', 'ember-composable-helpers/helpers/pipe', 'ember-composable-helpers/-private/closure-action'], function (exports, _emberHelper, _emberComposableHelpersHelpersPipe, _emberComposableHelpersPrivateClosureAction) {
  'use strict';

  var closurePipe = _emberComposableHelpersHelpersPipe.pipe;
  if (_emberComposableHelpersPrivateClosureAction['default']) {
    closurePipe[_emberComposableHelpersPrivateClosureAction['default']] = true;
  }

  exports['default'] = (0, _emberHelper.helper)(closurePipe);
});