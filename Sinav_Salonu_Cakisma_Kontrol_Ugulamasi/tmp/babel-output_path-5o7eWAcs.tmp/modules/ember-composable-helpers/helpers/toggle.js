export { toggle };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import { helper } from 'ember-helper';
import get from 'ember-metal/get';
import set from 'ember-metal/set';
import { isPresent } from 'ember-utils';

function nextIndex(length, currentIdx) {
  if (currentIdx === -1 || currentIdx + 1 === length) {
    return 0;
  }

  return currentIdx + 1;
}

function toggle(_ref) {
  var _ref2 = _toArray(_ref);

  var prop = _ref2[0];
  var obj = _ref2[1];

  var values = _ref2.slice(2);

  return function () {
    var currentValue = get(obj, prop);

    if (isPresent(values)) {
      var currentIdx = values.indexOf(currentValue);
      var nextIdx = nextIndex(get(values, 'length'), currentIdx);

      return set(obj, prop, values[nextIdx]);
    }

    return set(obj, prop, !currentValue);
  };
}

export default helper(toggle);