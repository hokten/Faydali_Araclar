export { mod };
import Ember from 'ember';
var Helper = Ember.Helper;

function mod(params) {
  return params.reduce(function (a, b) {
    return a % b;
  });
}

export default Helper.helper(mod);