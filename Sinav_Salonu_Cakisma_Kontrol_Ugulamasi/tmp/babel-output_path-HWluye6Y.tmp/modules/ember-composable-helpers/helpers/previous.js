export { previous };
import Ember from 'ember';
import getIndex from '../utils/get-index';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

var isEmpty = Ember.isEmpty;

function previous(currentValue, array) {
  var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var currentIndex = getIndex(array, currentValue, useDeepEqual);

  if (isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === 0 ? currentValue : array[currentIndex - 1];
}

export default createNeedleHaystackHelper(previous);