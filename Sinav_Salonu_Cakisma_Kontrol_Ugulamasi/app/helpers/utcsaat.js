import Ember from 'ember';
import moment from 'moment';


export function utcsaat(params) {
  var tarih = params[0];
  return moment.utc(tarih, 'X').format("HH:mm");
}
export default Ember.Helper.helper(utcsaat);
