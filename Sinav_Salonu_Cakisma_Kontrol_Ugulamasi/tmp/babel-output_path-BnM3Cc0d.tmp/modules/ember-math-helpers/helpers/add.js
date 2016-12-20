export { add };
import Ember from 'ember';
var Helper = Ember.Helper;

function add(params) {
  return params.reduce(function (a, b) {
    return a + b;
  });
}

export default Helper.helper(add);