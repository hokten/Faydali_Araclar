export { log2 };
import Ember from 'ember';
var Helper = Ember.Helper;

function log2(params) {
  return Math.log2(params[0]);
}

export default Helper.helper(log2);