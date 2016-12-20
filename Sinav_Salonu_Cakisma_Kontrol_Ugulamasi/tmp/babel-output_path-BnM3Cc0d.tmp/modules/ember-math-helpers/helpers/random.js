var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

export { random };
import Ember from 'ember';

var Helper = Ember.Helper;
var isArray = Array.isArray;
var min = Math.min;
var max = Math.max;

// @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#max(0, min(MAX_DECIMALS, decimals))));
var MAX_DECIMALS = 20;

// 💡 Using Number.toFixed, we'll get rounding for free alongside
// decimal precision. We'll default to whole-number rounding simply
// by defaulting `decimals` to 0
var DEFAULT_OPTS = {
  decimals: 0
};

function random(params) {
  var _ref = arguments.length <= 1 || arguments[1] === undefined ? DEFAULT_OPTS : arguments[1];

  var decimals = _ref.decimals;

  // no positional args, but only an options hash from named args
  if (typeof params === 'object' && !isArray(params)) {
    decimals = typeof params.decimals !== 'undefined' ? params.decimals : DEFAULT_OPTS.decimals;

    return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
  }

  // one positional arg: treat it as an upper bound
  if (params && params.length === 1) {
    var _params = _slicedToArray(params, 1);

    var upperBound = _params[0];

    return +(Math.random() * upperBound).toFixed(max(0, min(MAX_DECIMALS, decimals)));
  }

  // two positional args: use them to derive upper and lower bounds
  if (params && params.length === 2) {
    var _params2 = _slicedToArray(params, 2);

    var lowerBound = _params2[0];
    var upperBound = _params2[1];

    // for convinience, swap if a higher number is accidentally passed first
    if (upperBound < lowerBound) {
      var _ref2 = [upperBound, lowerBound];
      lowerBound = _ref2[0];
      upperBound = _ref2[1];
    }
    return +(lowerBound + Math.random() * (upperBound - lowerBound)).toFixed(max(0, min(MAX_DECIMALS, decimals)));
  }

  // no positional or named args: just return Math.random() w/ default decimal precision
  return +Math.random().toFixed(max(0, min(MAX_DECIMALS, decimals)));
}

export default Helper.helper(random);