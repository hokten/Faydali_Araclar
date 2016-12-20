export { ceil };
import Ember from 'ember';
var Helper = Ember.Helper;

function ceil(params) {
  return Math.ceil(params[0]);
}

export default Helper.helper(ceil);