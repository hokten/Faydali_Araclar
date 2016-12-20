export { asinh };
import Ember from 'ember';
var Helper = Ember.Helper;

function asinh(params) {
  return Math.asinh(params[0]);
}

export default Helper.helper(asinh);