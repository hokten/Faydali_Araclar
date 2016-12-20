export { exp };
import Ember from 'ember';
var Helper = Ember.Helper;

function exp(params) {
  return Math.exp(params[0]);
}

export default Helper.helper(exp);