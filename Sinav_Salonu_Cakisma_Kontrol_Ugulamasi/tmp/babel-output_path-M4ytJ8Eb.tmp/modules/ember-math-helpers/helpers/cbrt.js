export { cbrt };
import Ember from 'ember';
var Helper = Ember.Helper;

function cbrt(params) {
  return Math.cbrt(params[0]);
}

export default Helper.helper(cbrt);