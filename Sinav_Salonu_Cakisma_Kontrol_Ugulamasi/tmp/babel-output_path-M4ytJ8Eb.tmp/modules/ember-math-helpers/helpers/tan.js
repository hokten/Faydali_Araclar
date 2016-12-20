export { tan };
import Ember from 'ember';
var Helper = Ember.Helper;

function tan(params) {
  return Math.tan(params[0]);
}

export default Helper.helper(tan);