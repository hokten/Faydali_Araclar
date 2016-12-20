export { acos };
import Ember from 'ember';
var Helper = Ember.Helper;

function acos(params) {
  return Math.acos(params[0]);
}

export default Helper.helper(acos);