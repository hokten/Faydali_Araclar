export { round };
import Ember from 'ember';
var Helper = Ember.Helper;

function round(number) {
  return Math.round(number[0]);
}

export default Helper.helper(round);