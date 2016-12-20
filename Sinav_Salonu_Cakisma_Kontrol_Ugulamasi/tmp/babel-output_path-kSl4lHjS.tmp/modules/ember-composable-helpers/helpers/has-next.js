export { hasNext };
import Ember from 'ember';
import { next } from './next';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';
import isEqual from '../utils/is-equal';

var isPresent = Ember.isPresent;

function hasNext(currentValue, array) {
  var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var nextValue = next(currentValue, array, useDeepEqual);
  var isNotSameValue = !isEqual(nextValue, currentValue, useDeepEqual);

  return isNotSameValue && isPresent(nextValue);
}

export default createNeedleHaystackHelper(hasNext);