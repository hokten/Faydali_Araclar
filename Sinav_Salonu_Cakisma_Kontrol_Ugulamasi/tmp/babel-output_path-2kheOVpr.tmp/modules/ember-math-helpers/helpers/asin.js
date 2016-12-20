export { asin };
import Ember from 'ember';
var Helper = Ember.Helper;

function asin(params) {
  return Math.asin(params[0]);
}

export default Helper.helper(asin);