define('ember-composable-helpers/helpers/has-previous', ['exports', 'ember', 'ember-composable-helpers/helpers/previous', 'ember-composable-helpers/-private/create-needle-haystack-helper', 'ember-composable-helpers/utils/is-equal'], function (exports, _ember, _emberComposableHelpersHelpersPrevious, _emberComposableHelpersPrivateCreateNeedleHaystackHelper, _emberComposableHelpersUtilsIsEqual) {
  'use strict';

  exports.hasPrevious = hasPrevious;

  var isPresent = _ember['default'].isPresent;

  function hasPrevious(currentValue, array) {
    var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    var previousValue = (0, _emberComposableHelpersHelpersPrevious.previous)(currentValue, array, useDeepEqual);
    var isNotSameValue = !(0, _emberComposableHelpersUtilsIsEqual['default'])(previousValue, currentValue, useDeepEqual);

    return isNotSameValue && isPresent(previousValue);
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(hasPrevious);
});