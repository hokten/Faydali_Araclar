export { floor };
import Ember from 'ember';
var Helper = Ember.Helper;

function floor(params) {
  return Math.floor(params[0]);
}

export default Helper.helper(floor);