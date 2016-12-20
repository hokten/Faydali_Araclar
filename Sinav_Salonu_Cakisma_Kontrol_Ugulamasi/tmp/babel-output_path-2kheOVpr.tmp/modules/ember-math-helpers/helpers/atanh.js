export { atanh };
import Ember from 'ember';
var Helper = Ember.Helper;

function atanh(params) {
  return Math.atanh(params[0]);
}

export default Helper.helper(atanh);