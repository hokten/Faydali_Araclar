define('ember-login/controllers/account', ['exports', 'ember', 'moment', 'ember-group-by', 'lodash/lodash'], function (exports, _ember, _moment, _emberGroupBy, _lodashLodash) {
  exports['default'] = _ember['default'].Controller.extend({
    gunler: ['02.01.2016', '03.01.2016', '04.01.2016', '05.01.2016', '06.01.2016', '09.01.2016'],
    saatler: ['09:00', '10:30', '12:00', '13:30', '15:00'],
    salonlar: ['C301', 'B202'],
    ssort: ["value:asc"],
    sortProperties: ["tarih:asc", "salon:desc"],
    deneme2: _ember['default'].computed.sort("deneme1", "ssort"),
    deneme1: (0, _emberGroupBy['default'])('deneme', 'tarih'),
    deneme: _ember['default'].computed("model.@each.bolum", function () {
      var modifiedModel = [];
      this.get('model').forEach(function (item) {
        modifiedModel.pushObject(_ember['default'].Object.create({
          bolum: item.get('bolum'),
          salon: item.get('salon'),
          tarih: item.get('tarih').toISOString()
        }));
      });
      return modifiedModel;
    }),
    sortedModel: _ember['default'].computed.sort("model", "sortProperties"),
    groupedResults: _ember['default'].computed(function () {
      var result = [];
      var that = this;

      this.get('model').forEach(function (item) {
        var fff = {};
        console.log(item.get('tarih'));
        fff.tarih = item.get('tarih').toISOString();
        fff.salon = item.get('salon');
        fff.bolum = item.get('bolum');
        result.push(fff);
      });

      var xyz = _lodashLodash['default'].groupBy(result, 'tarih');
      console.log(xyz);

      var donen = [];

      _lodashLodash['default'].forEach(xyz, function (value, key) {
        donen.pushObject(_ember['default'].Object.create({
          tarih: key,
          sinavlar: []
        }));
        console.log(key);
        _lodashLodash['default'].forEach(value, function (snv) {
          var vbg = _ember['default'].Object.create({ bolum: snv.bolum, salon: snv.salon });
          donen.findBy('tarih', key).get('sinavlar').pushObject(vbg);
        });
        var sirali = donen.findBy('tarih', key).get('sinavlar').sortBy('salon');
        donen.findBy('tarih', key).set('sinavlar', sirali);
      });
      console.log(donen);
      console.log(_lodashLodash['default'].sortBy(donen, function (value) {
        return _moment['default'].utc(value.tarih).toDate();
      }));
      return donen;
    }).property('model.@each.bolum'),
    actions: {
      kayitekle: function kayitekle(tarih, salon) {
        /*
        console.log(tarih);
        console.log(salon);
        var store;
        store = this.store;
        store.query('exam', { tarih: tarih, salon: salon  }).then(function(res) {
           return res.get('firstObject');
        }).then(function(user) {
          store.findRecord('exam', user.get('id')).then(function(fs) {
            if(Ember.isEmpty(fs.get('bolum'))) {
              fs.set('bolum','BIL');
            }
            else {
              fs.set('bolum', '');
            }
            return fs.save(); //return yapmayınca model yenilenmiyor
          });
        });
        
        store.findRecord('exam', '46331291902d29af').then(function(fs) {
          fs.set('bolum','111111111111111111111111111111111');
          return fs.save(); //return yapmayınca model yenilenmiyor
        });
        */
        var gunler = ['2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-07'];
        var saatler = ['09:00:00', '10:30:00', '12:00:00', '13:30:00', '15:00:00'];
        var salonlar = ['C301', 'B202', 'C203', 'B105'];

        var store;
        store = this.store;
        gunler.forEach(function (gun) {
          saatler.forEach(function (saat) {
            salonlar.forEach(function (salon) {
              var sinav = store.createRecord('exam', {
                salon: salon,
                bolum: '',
                tarih: _moment['default'].utc(gun + ' ' + saat, "YYYY-MM-DD HH:mm:ss").unix()
              });
              sinav.save();
            });
          });
        });
        /*
        var store;
        store = this.store;
        store.findRecord('sinav', '08a0ed2e6e1f087f').then(function(fs) {
          fs.set('bolum','fdsefwfwewer');
          return fs.save();
        });
         store.findRecord('zaman', '5b5b713594e3cba9').then(function(kl) {
          store.findRecord('sinav', '08a0ed2e6e1f087f').then(function(fs) {
            kl.get('sinavlar').pushObject(fs);
            kl.save().then(function() {
              return fs.save();
            });
          });
        });*/
      },
      kayitlistele: function kayitlistele() {

        console.log(this.get('deneme1'));
      },
      eylem: function eylem(parametre) {}
    }
  });
});