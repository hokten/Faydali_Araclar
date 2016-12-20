export { next };
import Ember from 'ember';
import getIndex from '../utils/get-index';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';

var get = Ember.get;
var isEmpty = Ember.isEmpty;

function next(currentValue, array) {
  var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var currentIndex = getIndex(array, currentValue, useDeepEqual);
  var lastIndex = get(array, 'length') - 1;

  if (isEmpty(currentIndex)) {
    return;
  }

  return currentIndex === lastIndex ? currentValue : array[currentIndex + 1];
}

export default createNeedleHaystackHelper(next);