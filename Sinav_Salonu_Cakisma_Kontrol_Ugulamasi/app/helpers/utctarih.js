import Ember from 'ember';
import moment from 'moment';


export function utctarih(params) {
  var tarih = params[0];
  return moment.utc(tarih, 'X').format("DD-MM-YYYY");
}

export default Ember.Helper.helper(utctarih);
