export { pow };
import Ember from 'ember';
var Helper = Ember.Helper;

function pow(params) {
  return params.reduce(function (base, exponent) {
    return Math.pow(base, exponent);
  });
}

export default Helper.helper(pow);