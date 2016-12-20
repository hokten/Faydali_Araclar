import Ember from 'ember';
import _ from 'lodash/lodash';
export function sinavEslestirici(params, namedArgs) {
  var gun = namedArgs.gun,
    saat = namedArgs.saat,
    salon = namedArgs.salon,
    model = params[0],
    donen = {};
  var deger = false;
  var bolum;
   model.filter(function(snv) {
     if(salon == snv.get('salon')) {
       if(saat == snv.get('zaman').get('saat')) {
         if(gun ==  snv.get('zaman').get('tarih')) {
           bolum = snv.get('bolum');
           deger = true;
         }
       }
      }
  });
  if(deger) {
    donen.eylem = 'sil';
    donen.metin = bolum;
  }
  else {
    donen.eylem = 'ekle';
    donen.metin = 'EKLE';
  }
  /*console.log(donen);*/
  return donen;
}

export default Ember.Helper.helper(sinavEslestirici);
