import Ember from 'ember';
import moment from 'moment';


export function utcisim(params) {
  var tarih = params[0];
  return moment.utc(tarih, 'X').format("dddd");
}

export default Ember.Helper.helper(utcisim);
