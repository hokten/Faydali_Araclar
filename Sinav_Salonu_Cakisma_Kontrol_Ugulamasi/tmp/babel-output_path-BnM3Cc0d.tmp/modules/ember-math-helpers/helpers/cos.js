export { cos };
import Ember from 'ember';
var Helper = Ember.Helper;

function cos(params) {
  return Math.cos(params[0]);
}

export default Helper.helper(cos);