export { abs };
import Ember from 'ember';
var Helper = Ember.Helper;

function abs(params) {
  return Math.abs(params[0]);
}

export default Helper.helper(abs);