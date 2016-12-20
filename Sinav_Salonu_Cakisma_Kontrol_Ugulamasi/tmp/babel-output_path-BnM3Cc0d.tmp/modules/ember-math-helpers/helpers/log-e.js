export { logE };
import Ember from 'ember';
var Helper = Ember.Helper;

function logE(params) {
  return Math.log(params[0]);
}

export default Helper.helper(logE);