export { tanh };
import Ember from 'ember';
var Helper = Ember.Helper;

function tanh(params) {
  return Math.tanh(params[0]);
}

export default Helper.helper(tanh);