export { atan };
import Ember from 'ember';
var Helper = Ember.Helper;

function atan(params) {
  return Math.atan(params[0]);
}

export default Helper.helper(atan);