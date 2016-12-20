

export default getIndex;
import { A as emberArray } from 'ember-array/utils';
import isEqual from '../utils/is-equal';
function getIndex(array, currentValue, useDeepEqual) {
  var needle = currentValue;

  if (useDeepEqual) {
    needle = emberArray(array).find(function (object) {
      return isEqual(object, currentValue, useDeepEqual);
    });
  }

  var index = emberArray(array).indexOf(needle);

  return index >= 0 ? index : null;
}