export { imul };
import Ember from 'ember';
var Helper = Ember.Helper;

function imul(params) {
  return Math.imul(params[0], params[1]);
}

export default Helper.helper(imul);