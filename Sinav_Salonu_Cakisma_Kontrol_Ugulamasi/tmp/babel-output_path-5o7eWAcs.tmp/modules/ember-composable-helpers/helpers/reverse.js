var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import { A as emberArray, isEmberArray } from 'ember-array/utils';
import Helper from 'ember-helper';
import observer from 'ember-metal/observer';
import set from 'ember-metal/set';

export default Helper.extend({
  compute: function compute(_ref) {
    var _ref2 = _slicedToArray(_ref, 1);

    var array = _ref2[0];

    if (!isEmberArray(array)) {
      return [array];
    }

    set(this, 'array', array);
    return emberArray(array).slice(0).reverse();
  },

  arrayContentDidChange: observer('array.[]', function () {
    this.recompute();
  })
});