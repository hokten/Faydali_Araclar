var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export { range };
import { helper } from 'ember-helper';
import { typeOf } from 'ember-utils';
import { gte, lte, gt, lt } from '../utils/comparison';

function range(_ref) {
  var _ref2 = _slicedToArray(_ref, 3);

  var min = _ref2[0];
  var max = _ref2[1];
  var isInclusive = _ref2[2];

  isInclusive = typeOf(isInclusive) === 'boolean' ? isInclusive : false;
  var numbers = [];

  if (min < max) {
    var testFn = isInclusive ? lte : lt;
    for (var i = min; testFn(i, max); i++) {
      numbers.push(i);
    }
  }

  if (min > max) {
    var testFn = isInclusive ? gte : gt;
    for (var i = min; testFn(i, max); i--) {
      numbers.push(i);
    }
  }

  return numbers;
}

export default helper(range);