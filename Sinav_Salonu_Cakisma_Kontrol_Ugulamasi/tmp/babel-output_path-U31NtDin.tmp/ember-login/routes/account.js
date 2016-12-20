define('ember-login/routes/account', ['exports', 'ember', 'ember-simple-auth/mixins/authenticated-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsAuthenticatedRouteMixin) {
    var rentals = [{
        bolum: 'INS',
        gun: '02.01.2016',
        saat: '15:00',
        salon: 'C301'
    }, {
        bolum: 'ELK',
        gun: '03.01.2016',
        saat: '09:00',
        salon: 'B202'
    }];

    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsAuthenticatedRouteMixin['default'], {
        model: function model() {
            return this.store.findAll('exam');
            /*
               return this.store.findAll('sinav').then((sinavlar) => {
             return sinavlar.map(function(x) { return x.toJSON(); });
            });
            */
        }
    });
});