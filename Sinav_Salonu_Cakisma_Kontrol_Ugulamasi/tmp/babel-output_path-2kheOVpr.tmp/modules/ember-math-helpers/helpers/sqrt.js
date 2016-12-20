export { sqrt };
import Ember from 'ember';
var Helper = Ember.Helper;

function sqrt(params) {
  return Math.sqrt(params[0]);
}

export default Helper.helper(sqrt);