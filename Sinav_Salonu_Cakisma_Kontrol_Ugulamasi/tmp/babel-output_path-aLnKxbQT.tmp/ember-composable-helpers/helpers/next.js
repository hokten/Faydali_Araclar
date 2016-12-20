define('ember-composable-helpers/helpers/next', ['exports', 'ember', 'ember-composable-helpers/utils/get-index', 'ember-composable-helpers/-private/create-needle-haystack-helper'], function (exports, _ember, _emberComposableHelpersUtilsGetIndex, _emberComposableHelpersPrivateCreateNeedleHaystackHelper) {
  'use strict';

  exports.next = next;

  var get = _ember['default'].get;
  var isEmpty = _ember['default'].isEmpty;

  function next(currentValue, array) {
    var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var currentIndex = (0, _emberComposableHelpersUtilsGetIndex['default'])(array, currentValue, useDeepEqual);
    var lastIndex = get(array, 'length') - 1;

    if (isEmpty(currentIndex)) {
      return;
    }

    return currentIndex === lastIndex ? currentValue : array[currentIndex + 1];
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(next);
});