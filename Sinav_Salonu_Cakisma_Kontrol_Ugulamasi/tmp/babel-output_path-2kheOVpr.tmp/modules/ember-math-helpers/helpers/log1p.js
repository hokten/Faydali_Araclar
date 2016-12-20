export { log1p };
import Ember from 'ember';
var Helper = Ember.Helper;

function log1p(params) {
  return Math.log1p(params[0]);
}

export default Helper.helper(log1p);