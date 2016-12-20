var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import { map } from 'ember-computed';
import Helper from 'ember-helper';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import set from 'ember-metal/set';
import { isEmpty } from 'ember-utils';

var defineProperty = Ember.defineProperty;

export default Helper.extend({
  compute: function compute(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var callback = _ref2[0];
    var array = _ref2[1];

    set(this, 'array', array);
    set(this, 'callback', callback);

    return get(this, 'content');
  },

  byPathDidChange: observer('callback', function () {
    var callback = get(this, 'callback');

    if (isEmpty(callback)) {
      defineProperty(this, 'content', []);
      return;
    }

    defineProperty(this, 'content', map('array', callback));
  }),

  contentDidChange: observer('content', function () {
    this.recompute();
  })
});