define('ember-composable-helpers/helpers/group-by', ['exports', 'ember', 'ember-array/utils', 'ember-computed', 'ember-helper', 'ember-metal/get', 'ember-metal/observer', 'ember-metal/set'], function (exports, _ember, _emberArrayUtils, _emberComputed, _emberHelper, _emberMetalGet, _emberMetalObserver, _emberMetalSet) {
  'use strict';

  var _slicedToArray = (function () {
    function sliceIterator(arr, i) {
      var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;_e = err;
      } finally {
        try {
          if (!_n && _i['return']) _i['return']();
        } finally {
          if (_d) throw _e;
        }
      }return _arr;
    }return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError('Invalid attempt to destructure non-iterable instance');
      }
    };
  })();

  var defineProperty = _ember['default'].defineProperty;
  var emberObject = _ember['default'].Object;

  var groupFunction = function groupFunction() {
    var array = (0, _emberMetalGet['default'])(this, 'array');
    var byPath = (0, _emberMetalGet['default'])(this, 'byPath');
    var groups = emberObject.create();

    array.forEach(function (item) {
      var groupName = (0, _emberMetalGet['default'])(item, byPath).toString();
      var group = (0, _emberMetalGet['default'])(groups, groupName);

      if (!(0, _emberArrayUtils.isEmberArray)(group)) {
        group = (0, _emberArrayUtils.A)();
        (0, _emberMetalSet['default'])(groups, groupName, group);
      }

      group.push(item);
    });

    return groups;
  };

  exports['default'] = _emberHelper['default'].extend({
    compute: function compute(_ref) {
      var _ref2 = _slicedToArray(_ref, 2);

      var byPath = _ref2[0];
      var array = _ref2[1];

      (0, _emberMetalSet['default'])(this, 'array', array);
      (0, _emberMetalSet['default'])(this, 'byPath', byPath);

      return (0, _emberMetalGet['default'])(this, 'content');
    },

    byPathDidChange: (0, _emberMetalObserver['default'])('byPath', function () {
      var byPath = (0, _emberMetalGet['default'])(this, 'byPath');

      if (byPath) {
        defineProperty(this, 'content', (0, _emberComputed['default'])('array.@each.' + byPath, groupFunction));
      } else {
        defineProperty(this, 'content', null);
      }
    }),

    contentDidChange: (0, _emberMetalObserver['default'])('content', function () {
      this.recompute();
    })
  });
});