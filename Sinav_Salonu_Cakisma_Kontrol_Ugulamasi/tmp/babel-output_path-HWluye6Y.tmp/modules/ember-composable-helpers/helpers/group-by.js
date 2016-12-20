var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import { A as emberArray, isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import Helper from 'ember-helper';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import set from 'ember-metal/set';

var defineProperty = Ember.defineProperty;
var emberObject = Ember.Object;

var groupFunction = function groupFunction() {
  var array = get(this, 'array');
  var byPath = get(this, 'byPath');
  var groups = emberObject.create();

  array.forEach(function (item) {
    var groupName = get(item, byPath).toString();
    var group = get(groups, groupName);

    if (!isEmberArray(group)) {
      group = emberArray();
      set(groups, groupName, group);
    }

    group.push(item);
  });

  return groups;
};

export default Helper.extend({
  compute: function compute(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var byPath = _ref2[0];
    var array = _ref2[1];

    set(this, 'array', array);
    set(this, 'byPath', byPath);

    return get(this, 'content');
  },

  byPathDidChange: observer('byPath', function () {
    var byPath = get(this, 'byPath');

    if (byPath) {
      defineProperty(this, 'content', computed('array.@each.' + byPath, groupFunction));
    } else {
      defineProperty(this, 'content', null);
    }
  }),

  contentDidChange: observer('content', function () {
    this.recompute();
  })
});