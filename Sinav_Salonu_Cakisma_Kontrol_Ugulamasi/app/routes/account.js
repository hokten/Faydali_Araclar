import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';
let rentals = [{
    bolum: 'INS',
    gun:'02.01.2016',
    saat: '15:00',
    salon: 'C301'
},
{
    bolum: 'ELK',
    gun:'03.01.2016',
    saat: '09:00',
    salon: 'B202'
}];

export default Ember.Route.extend(AuthenticatedRouteMixin, {
      model() {
     return this.store.findAll('exam');
     /*
        return this.store.findAll('sinav').then((sinavlar) => {
      return sinavlar.map(function(x) { return x.toJSON(); });
    });
    */
  }
});
