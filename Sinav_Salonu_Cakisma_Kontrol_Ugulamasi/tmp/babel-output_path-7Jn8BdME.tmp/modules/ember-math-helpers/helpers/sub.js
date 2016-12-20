export { sub };
import Ember from 'ember';
var Helper = Ember.Helper;

function sub(params) {
  return params.reduce(function (a, b) {
    return a - b;
  });
}

export default Helper.helper(sub);