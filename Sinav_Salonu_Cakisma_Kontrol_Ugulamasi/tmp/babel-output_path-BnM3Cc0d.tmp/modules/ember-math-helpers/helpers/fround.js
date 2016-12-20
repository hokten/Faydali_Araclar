export { fround };
import Ember from 'ember';
var Helper = Ember.Helper;

function fround(params) {
  return Math.fround(params[0]);
}

export default Helper.helper(fround);