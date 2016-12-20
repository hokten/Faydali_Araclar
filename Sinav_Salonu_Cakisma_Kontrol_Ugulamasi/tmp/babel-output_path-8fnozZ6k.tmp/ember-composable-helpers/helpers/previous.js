define('ember-composable-helpers/helpers/previous', ['exports', 'ember', 'ember-composable-helpers/utils/get-index', 'ember-composable-helpers/-private/create-needle-haystack-helper'], function (exports, _ember, _emberComposableHelpersUtilsGetIndex, _emberComposableHelpersPrivateCreateNeedleHaystackHelper) {
  'use strict';

  exports.previous = previous;

  var isEmpty = _ember['default'].isEmpty;

  function previous(currentValue, array) {
    var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var currentIndex = (0, _emberComposableHelpersUtilsGetIndex['default'])(array, currentValue, useDeepEqual);

    if (isEmpty(currentIndex)) {
      return;
    }

    return currentIndex === 0 ? currentValue : array[currentIndex - 1];
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(previous);
});