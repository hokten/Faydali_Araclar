define('ember-login/routes/application', ['exports', 'ember', 'ember-simple-auth/mixins/application-route-mixin'], function (exports, _ember, _emberSimpleAuthMixinsApplicationRouteMixin) {
    var service = _ember['default'].inject.service;
    exports['default'] = _ember['default'].Route.extend(_emberSimpleAuthMixinsApplicationRouteMixin['default'], {
        currentUser: service(),

        beforeModel: function beforeModel() {
            return this._loadCurrentUser();
        },

        sessionAuthenticated: function sessionAuthenticated() {
            var _this = this;

            this._super.apply(this, arguments);
            this._loadCurrentUser()['catch'](function () {
                return _this.get('session').invalidate();
            });
        },

        _loadCurrentUser: function _loadCurrentUser() {
            return this.get('currentUser').load();
        }
    });
});