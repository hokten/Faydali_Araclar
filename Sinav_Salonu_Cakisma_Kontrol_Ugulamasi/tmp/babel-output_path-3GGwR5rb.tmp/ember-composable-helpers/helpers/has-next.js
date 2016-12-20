define('ember-composable-helpers/helpers/has-next', ['exports', 'ember', 'ember-composable-helpers/helpers/next', 'ember-composable-helpers/-private/create-needle-haystack-helper', 'ember-composable-helpers/utils/is-equal'], function (exports, _ember, _emberComposableHelpersHelpersNext, _emberComposableHelpersPrivateCreateNeedleHaystackHelper, _emberComposableHelpersUtilsIsEqual) {
  'use strict';

  exports.hasNext = hasNext;

  var isPresent = _ember['default'].isPresent;

  function hasNext(currentValue, array) {
    var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var nextValue = (0, _emberComposableHelpersHelpersNext.next)(currentValue, array, useDeepEqual);
    var isNotSameValue = !(0, _emberComposableHelpersUtilsIsEqual['default'])(nextValue, currentValue, useDeepEqual);

    return isNotSameValue && isPresent(nextValue);
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(hasNext);
});