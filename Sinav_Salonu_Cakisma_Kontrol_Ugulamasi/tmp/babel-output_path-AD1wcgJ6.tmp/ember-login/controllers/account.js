define('ember-login/controllers/account', ['exports', 'ember', 'moment', 'ember-group-by', 'lodash/lodash'], function (exports, _ember, _moment, _emberGroupBy, _lodashLodash) {
  exports['default'] = _ember['default'].Controller.extend({
    currentUser: _ember['default'].inject.service('current-user'),
    gunler: ['02.01.2016', '03.01.2016', '04.01.2016', '05.01.2016', '06.01.2016', '09.01.2016'],
    saatler: ['09:00', '10:30', '12:00', '13:30', '15:00'],
    salonlar: _ember['default'].computed(function () {
      var essiz_salonlar = this.get('model').uniqBy('salon');
      var sirali_salonlar = essiz_salonlar.sortBy('salon');
      return sirali_salonlar;
    }),
    didInsertElement: function didInsertElement() {
      _ember['default'].$("table").delegate('td', 'mouseover mouseleave', function (e) {
        if (e.type == 'mouseover') {
          $(this).parent().addClass("hover");
        } else {
          $(this).parent().removeClass("hover");
        }
      });
    },
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
      /*
      kayitekle(tarih, salon) {
      console.log(this.get('model'));
      console.log(tarih);
      console.log(salon);
      var store;
      var that = this;
      store = this.store;
      store.query('exam', { tarih: tarih, salon: salon  }).then(function(res) {
         return res.get('firstObject');
      }).then(function(user) {
        store.findRecord('exam', user.get('id')).then(function(fs) {
          if(Ember.isEmpty(fs.get('bolum'))) {
            fs.set('bolum',that.get('currentUser').get('username'));
          }
          else {
            fs.set('bolum', '');
          }
          return fs.save(); //return yapmayınca model yenilenmiyor
        });
      });
      store.findRecord('exam', 'fe1eeeadfd7248d0').then(function(fs) {
        fs.set('bolum','INS');
        return fs.save(); //return yapmayınca model yenilenmiyor
      });
       var  gunler = ['2017-01-02','2017-01-03','2017-01-04','2017-01-05','2017-01-06','2017-01-09','2017-01-10','2017-01-11','2017-01-12','2017-01-13'];
      var saatler = ['09:00:00','10:30:00','12:00:00','13:30:00','15:00:00'];
      var salonlar = ['B101','B102','B103','C101','C102','C104','C105','C111','B312','C201','C202','C204','C205','C211','C212','C302','C303','C309'];
       var store;
      store = this.store;
      gunler.forEach(gun => {
        saatler.forEach(saat => {
          salonlar.forEach(salon => {
              var hour = saat;
              if(gun == '2017-01-09' && saat == '10:30:00') {
                  hour = '10:00:00';
              }
              if(gun == '2017-01-11' && saat == '10:30:00') {
                  hour = '10:00:00';
              }
             var sinav = store.createRecord('exam', {
              salon: salon,
              bolum: '',
              tarih: moment.utc(gun + ' ' + hour, "YYYY-MM-DD HH:mm:ss").unix(),
            });
            sinav.save();
          });
        });
      });
         },
      */
      kayitlistele: function kayitlistele() {
        var gunler = ['2017-01-02', '2017-01-03', '2017-01-04', '2017-01-05', '2017-01-06', '2017-01-09', '2017-01-10', '2017-01-11', '2017-01-12', '2017-01-13'];
        var saatler = ['09:00:00', '10:30:00', '12:00:00', '13:30:00', '15:00:00'];
        var salonlar = ['408', '409', 'B101', 'B102', 'B103', 'C101', 'C102', 'C104', 'C105', 'C111', 'B312', 'B313', 'C201', 'C202', 'C204', 'C205', 'C211', 'C212', 'C302', 'C303', 'C309'];

        var store;
        store = this.store;
        gunler.forEach(function (gun) {
          saatler.forEach(function (saat) {
            salonlar.forEach(function (salon) {
              var hour = saat;
              if (gun == '2017-01-09' && saat == '10:30:00') {
                hour = '10:00:00';
              }
              if (gun == '2017-01-11' && saat == '10:30:00') {
                hour = '10:00:00';
              }

              var sinav = store.createRecord('exam', {
                salon: salon,
                bolum: '',
                tarih: _moment['default'].utc(gun + ' ' + hour, "YYYY-MM-DD HH:mm:ss").unix()
              });
              sinav.save();
            });
          });
        });
      },
      eylem: function eylem(parametre) {}
    }
  });
});