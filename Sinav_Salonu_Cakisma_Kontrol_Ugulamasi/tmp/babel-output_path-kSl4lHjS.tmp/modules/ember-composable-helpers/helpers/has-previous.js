export { hasPrevious };
import Ember from 'ember';
import { previous } from './previous';
import createNeedleHaystackHelper from '../-private/create-needle-haystack-helper';
import isEqual from '../utils/is-equal';

var isPresent = Ember.isPresent;

function hasPrevious(currentValue, array) {
  var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  var previousValue = previous(currentValue, array, useDeepEqual);
  var isNotSameValue = !isEqual(previousValue, currentValue, useDeepEqual);

  return isNotSameValue && isPresent(previousValue);
}

export default createNeedleHaystackHelper(hasPrevious);