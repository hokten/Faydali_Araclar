define('ember-composable-helpers/utils/get-index', ['exports', 'ember-array/utils', 'ember-composable-helpers/utils/is-equal'], function (exports, _emberArrayUtils, _emberComposableHelpersUtilsIsEqual) {
  'use strict';

  exports['default'] = getIndex;

  function getIndex(array, currentValue, useDeepEqual) {
    var needle = currentValue;

    if (useDeepEqual) {
      needle = (0, _emberArrayUtils.A)(array).find(function (object) {
        return (0, _emberComposableHelpersUtilsIsEqual['default'])(object, currentValue, useDeepEqual);
      });
    }

    var index = (0, _emberArrayUtils.A)(array).indexOf(needle);

    return index >= 0 ? index : null;
  }
});