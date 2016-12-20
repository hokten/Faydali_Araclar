import Ember from 'ember';
import moment from 'moment';
import groupBy from 'ember-group-by';


export default Ember.Component.extend({
  currentUser: Ember.inject.service('current-user'),
  store: Ember.inject.service(),
  didInsertElement: function () {
    var that = this;
    this.$('td').on('mouseover', function(){
      var i = $(this).prevAll('td').length;
      var tdClassName = $(this).attr("class");
      var trClassName =  $(this).parent().attr('class');
      if(trClassName.indexOf(" ")) {
        var ilk = trClassName.split(" ");
        trClassName =  ilk[0];
      }
      console.log(trClassName);
      $(this).parent().addClass('hover');
      that.$('td.' + trClassName).addClass("hover");
      that.$('.' + tdClassName).addClass("hover");
    }).on('mouseout', function(){
      var i = $(this).prevAll('td').length;
      var className = $(this).attr("class");
      $(this).parent().removeClass('hover');
       that.$('tr').removeClass("hover");
      that.$('td').removeClass("hover");
    });

  },

  actions: {
    kayitekle(tarih, salon) {
      console.log(this.get('model'));
      console.log(tarih);
      console.log(salon);
      var store;
      var that = this;
      store = this.get('store');
      store.query('exam', { tarih: tarih, salon: salon  }).then(function(res) {
         return res.get('firstObject');
      }).then(function(user) {
          store.findRecord('exam', user.get('id')).then(function(fs) {
              if(Ember.isEqual(fs.get('bolum'), that.get('currentUser').get('username'))) {
                  fs.set('bolum', '');
              }
              else if(Ember.isEmpty(fs.get('bolum'))) {
                  fs.set('bolum',that.get('currentUser').get('username'));
              }
              else {
                  alert("Baska bolum tarafindan alinmis. Sayfayi yenileyin");
              }
          return fs.save(); //return yapmayınca model yenilenmiyor
        });
      });
    }
  }
});
