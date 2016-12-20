define('ember-login/controllers/account', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    gunler: ['02.01.2016', '03.01.2016', '04.01.2016', '05.01.2016', '06.01.2016', '09.01.2016'],
    saatler: ['09:00', '10:30', '12:00', '13:30', '15:00'],
    salonlar: ['C301', 'B202'],
    actions: {
      kayitekle: function kayitekle() {
        /*
         var zzaman = this.get('store').createRecord('zaman', {
                  tarih: '02.01.2016',
                  saat: '10:30',
                  sinavlar: []
                });
        
                zzaman.save();
        */

        var zzaman = this.get('store').peekRecord('zaman', '-KYJOmObPDLPwWUfaI-F');

        var sinav = this.get('store').createRecord('sinav', {
          bolum: 'INS',
          zaman: zzaman,
          salon: 'C301'
        });

        zzaman.save().then(function (post) {
          sinav.save();
        });
      },
      kayitlistele: function kayitlistele() {
        var sinavlar = this.get('store').findAll('zaman');
        console.log(sinavlar);

        sinavlar.forEach(function (snv) {
          console.log(snv.get('tarih'));
        });
      },
      eylem: function eylem(parametre) {
        console.log(parametre);
      }
    }
  });
});