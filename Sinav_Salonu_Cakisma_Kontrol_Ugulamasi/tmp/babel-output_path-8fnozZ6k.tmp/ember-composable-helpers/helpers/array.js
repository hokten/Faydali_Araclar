define('ember-composable-helpers/helpers/array', ['exports', 'ember-helper', 'ember-array/utils'], function (exports, _emberHelper, _emberArrayUtils) {
  'use strict';

  exports.array = array;

  function array() {
    var params = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

    // slice params to avoid mutating the provided params
    return (0, _emberArrayUtils.A)(params.slice());
  }

  exports['default'] = (0, _emberHelper.helper)(array);
});