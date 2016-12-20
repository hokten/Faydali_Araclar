define('ember-macro-helpers/computed', ['exports', 'ember-macro-helpers/-build-computed', 'ember-macro-helpers/get-value'], function (exports, _emberMacroHelpersBuildComputed, _emberMacroHelpersGetValue) {
  'use strict';

  exports['default'] = function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (0, _emberMacroHelpersBuildComputed['default'])(args, _emberMacroHelpersGetValue['default']);
  };
});