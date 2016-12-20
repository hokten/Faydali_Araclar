export { atan2 };
import Ember from 'ember';
var Helper = Ember.Helper;

function atan2(params) {
  return Math.atan2(params[0], params[1]);
}

export default Helper.helper(atan2);