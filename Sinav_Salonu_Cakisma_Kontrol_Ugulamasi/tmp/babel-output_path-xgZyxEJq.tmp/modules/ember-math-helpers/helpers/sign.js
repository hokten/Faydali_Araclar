export { sign };
import Ember from 'ember';
var Helper = Ember.Helper;

function sign(params) {
  return Math.sign(params[0]);
}

export default Helper.helper(sign);