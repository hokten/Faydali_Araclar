var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export { objectAt };
import Helper from 'ember-helper';
import { A as emberArray, isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import observer from 'ember-metal/observer';
import get from 'ember-metal/get';
import set from 'ember-metal/set';

function objectAt(index, array) {
  if (!isEmberArray(array)) {
    return undefined;
  }

  index = parseInt(index, 10);

  return emberArray(array).objectAt(index);
}

export default Helper.extend({
  content: computed('index', 'array.[]', function () {
    var index = get(this, 'index');
    var array = get(this, 'array');

    return objectAt(index, array);
  }),

  compute: function compute(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var index = _ref2[0];
    var array = _ref2[1];

    set(this, 'index', index);
    set(this, 'array', array);

    return get(this, 'content');
  },

  contentDidChange: observer('content', function () {
    this.recompute();
  })
});