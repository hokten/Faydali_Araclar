define('ember-composable-helpers/helpers/without', ['exports', 'ember-array/utils', 'ember-metal/get', 'ember-utils', 'ember-composable-helpers/-private/create-needle-haystack-helper', 'ember-composable-helpers/utils/includes'], function (exports, _emberArrayUtils, _emberMetalGet, _emberUtils, _emberComposableHelpersPrivateCreateNeedleHaystackHelper, _emberComposableHelpersUtilsIncludes) {
  'use strict';

  exports.without = without;

  function contains(needle, haystack) {
    return (0, _emberComposableHelpersUtilsIncludes['default'])((0, _emberArrayUtils.A)(haystack), needle);
  }

  function without(needle, haystack) {
    if (!(0, _emberArrayUtils.isEmberArray)(haystack)) {
      return false;
    }

    if ((0, _emberUtils.typeOf)(needle) === 'array' && (0, _emberMetalGet['default'])(needle, 'length')) {
      return haystack.reduce(function (acc, val) {
        return contains(val, needle) ? acc : acc.concat(val);
      }, []);
    }

    return (0, _emberArrayUtils.A)(haystack).without(needle);
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(without);
});