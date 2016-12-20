export { acosh };
import Ember from 'ember';
var Helper = Ember.Helper;

function acosh(params) {
  return Math.acosh(params[0]);
}

export default Helper.helper(acosh);