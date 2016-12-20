define('ember-login/components/sinav-cizelge-tablosu', ['exports', 'ember', 'moment', 'ember-group-by'], function (exports, _ember, _moment, _emberGroupBy) {
  exports['default'] = _ember['default'].Component.extend({
    currentUser: _ember['default'].inject.service('current-user'),
    store: _ember['default'].inject.service(),
    didInsertElement: function didInsertElement() {
      var that = this;
      this.$('td').on('mouseover', function () {
        var i = $(this).prevAll('td').length;
        var tdClassName = $(this).attr("class");
        var trClassName = $(this).parent().attr('class');
        if (trClassName.indexOf(" ")) {
          var ilk = trClassName.split(" ");
          trClassName = ilk[0];
        }
        console.log(trClassName);
        $(this).parent().addClass('hover');
        that.$('td.' + trClassName).addClass("hover");
        that.$('.' + tdClassName).addClass("hover");
      }).on('mouseout', function () {
        var i = $(this).prevAll('td').length;
        var className = $(this).attr("class");
        $(this).parent().removeClass('hover');
        that.$('tr').removeClass("hover");
        that.$('td').removeClass("hover");
      });
    },

    actions: {
      kayitekle: function kayitekle(tarih, salon) {
        console.log(this.get('model'));
        console.log(tarih);
        console.log(salon);
        var store;
        var that = this;
        store = this.get('store');
        store.query('exam', { tarih: tarih, salon: salon }).then(function (res) {
          return res.get('firstObject');
        }).then(function (user) {
          store.findRecord('exam', user.get('id')).then(function (fs) {
            if (_ember['default'].isEqual(fs.get('bolum'), that.get('currentUser').get('username'))) {
              fs.set('bolum', '');
            } else if (_ember['default'].isEmpty(fs.get('bolum'))) {
              fs.set('bolum', that.get('currentUser').get('username'));
            } else {
              alert("Baska bolum tarafindan alinmis. Sayfayi yenileyin");
            }
            return fs.save(); //return yapmayınca model yenilenmiyor
          });
        });
      }
    }
  });
});