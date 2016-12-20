export { clz32 };
import Ember from 'ember';
var Helper = Ember.Helper;

function clz32(params) {
  return Math.clz32(params[0]);
}

export default Helper.helper(clz32);