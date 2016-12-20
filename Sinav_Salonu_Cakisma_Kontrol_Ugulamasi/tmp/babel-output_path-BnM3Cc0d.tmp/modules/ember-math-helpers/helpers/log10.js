export { log10 };
import Ember from 'ember';
var Helper = Ember.Helper;

function log10(params) {
  return Math.log10(params[0]);
}

export default Helper.helper(log10);