export { cosh };
import Ember from 'ember';
var Helper = Ember.Helper;

function cosh(params) {
  return Math.cosh(params[0]);
}

export default Helper.helper(cosh);