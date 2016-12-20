export { mult };
import Ember from 'ember';
var Helper = Ember.Helper;

function mult(params) {
  return params.reduce(function (a, b) {
    return a * b;
  });
}

export default Helper.helper(mult);