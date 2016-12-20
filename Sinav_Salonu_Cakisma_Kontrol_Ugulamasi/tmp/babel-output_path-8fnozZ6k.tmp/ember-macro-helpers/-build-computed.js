define('ember-macro-helpers/-build-computed', ['exports', 'ember-computed', 'ember-macro-helpers/collapse-keys', 'ember-macro-helpers/flatten-keys'], function (exports, _emberComputed, _emberMacroHelpersCollapseKeys, _emberMacroHelpersFlattenKeys) {
  'use strict';

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function parseComputedArgs(args) {
    return {
      keys: args.slice(0, -1),
      callback: args[args.length - 1]
    };
  }

  function buildCallback(keys, incomingCallback, getValue) {
    var collapsedKeys = (0, _emberMacroHelpersCollapseKeys['default'])(keys);

    var newCallback = undefined;
    if (typeof incomingCallback === 'function') {
      newCallback = function () {
        var _this = this;

        var values = collapsedKeys.map(function (key) {
          return getValue(_this, key);
        });
        return incomingCallback.apply(this, values);
      };
    } else {
      newCallback = {};
      if (incomingCallback.get) {
        newCallback.get = function () {
          var _this2 = this;

          var values = collapsedKeys.map(function (key) {
            return getValue(_this2, key);
          });
          return incomingCallback.get.apply(this, values);
        };
      }
      if (incomingCallback.set) {
        newCallback.set = incomingCallback.set;
      }
    }

    return newCallback;
  }

  exports['default'] = function (args, getValue) {
    var _parseComputedArgs = parseComputedArgs(args);

    var keys = _parseComputedArgs.keys;
    var incomingCallback = _parseComputedArgs.callback;

    var newCallback = buildCallback(keys, incomingCallback, getValue);

    return _emberComputed['default'].apply(undefined, _toConsumableArray((0, _emberMacroHelpersFlattenKeys['default'])(keys)).concat([newCallback]));
  };
});