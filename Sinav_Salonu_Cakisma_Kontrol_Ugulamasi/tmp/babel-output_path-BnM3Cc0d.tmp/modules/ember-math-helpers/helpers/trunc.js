export { trunc };
import Ember from 'ember';
var Helper = Ember.Helper;

function trunc(params) {
  return Math.trunc(params[0]);
}

export default Helper.helper(trunc);