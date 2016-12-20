export { sin };
import Ember from 'ember';
var Helper = Ember.Helper;

function sin(params) {
  return Math.sin(params[0]);
}

export default Helper.helper(sin);