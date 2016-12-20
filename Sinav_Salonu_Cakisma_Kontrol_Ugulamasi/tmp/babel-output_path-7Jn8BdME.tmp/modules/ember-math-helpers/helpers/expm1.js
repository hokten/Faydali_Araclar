export { expm1 };
import Ember from 'ember';
var Helper = Ember.Helper;

function expm1(params) {
  return Math.expm1(params[0]);
}

export default Helper.helper(expm1);