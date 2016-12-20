var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export { chunk };
import { isEmberArray } from 'ember-array/utils';
import computed from 'ember-computed';
import Helper from 'ember-helper';
import get from 'ember-metal/get';
import observer from 'ember-metal/observer';
import set from 'ember-metal/set';

var max = Math.max;
var ceil = Math.ceil;

function chunk(num, array) {
  var integer = parseInt(num, 10);
  var size = max(integer, 0);

  var length = 0;
  if (isEmberArray(array)) {
    length = get(array, 'length');
  }

  if (!length || size < 1) {
    return [];
  } else {
    var index = 0;
    var resultIndex = -1;
    var result = new Array(ceil(length / size));

    while (index < length) {
      result[++resultIndex] = array.slice(index, index += size);
    }

    return result;
  }
}

export default Helper.extend({
  content: computed('num', 'array.[]', function () {
    var array = get(this, 'array');
    var num = get(this, 'num');

    return chunk(num, array);
  }),

  compute: function compute(_ref) {
    var _ref2 = _slicedToArray(_ref, 2);

    var num = _ref2[0];
    var array = _ref2[1];

    set(this, 'array', array);
    set(this, 'num', num);

    return get(this, 'content');
  },

  contentDidChange: observer('content', function () {
    this.recompute();
  })
});