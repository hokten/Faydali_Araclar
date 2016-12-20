define('ember-composable-helpers/helpers/contains', ['exports', 'ember-array/utils', 'ember-metal/get', 'ember-composable-helpers/-private/create-needle-haystack-helper', 'ember-composable-helpers/utils/includes'], function (exports, _emberArrayUtils, _emberMetalGet, _emberComposableHelpersPrivateCreateNeedleHaystackHelper, _emberComposableHelpersUtilsIncludes) {
  'use strict';

  exports.contains = contains;

  function _contains(needle, haystack) {
    return (0, _emberComposableHelpersUtilsIncludes['default'])((0, _emberArrayUtils.A)(haystack), needle);
  }

  function contains(needle, haystack) {
    if (!(0, _emberArrayUtils.isEmberArray)(haystack)) {
      return false;
    }

    if ((0, _emberArrayUtils.isEmberArray)(needle) && (0, _emberMetalGet['default'])(needle, 'length')) {
      return needle.reduce(function (acc, val) {
        return acc && _contains(val, haystack);
      }, true);
    }

    return _contains(needle, haystack);
  }

  exports['default'] = (0, _emberComposableHelpersPrivateCreateNeedleHaystackHelper['default'])(contains);
});