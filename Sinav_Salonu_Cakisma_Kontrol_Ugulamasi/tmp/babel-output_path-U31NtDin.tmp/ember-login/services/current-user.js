define('ember-login/services/current-user', ['exports', 'ember'], function (exports, _ember) {
    var service = _ember['default'].inject.service;
    var isEmpty = _ember['default'].isEmpty;
    var RSVP = _ember['default'].RSVP;
    exports['default'] = _ember['default'].Service.extend({
        session: service('session'),
        store: service(),
        load: function load() {
            var _this = this;

            var self = this;
            console.log("dasda");
            return new RSVP.Promise(function (resolve, reject) {
                var userId = null;
                _this.get('session').authorize('authorizer:oauth2', function (headerName, headerValue) {
                    var headers = {};
                    headers[headerName] = headerValue;
                    _ember['default'].$.ajax('/api/userinfo', { headers: headers }).then(function (response) {
                        if (!isEmpty(response)) {
                            self.set('user', response.name);
                            console.log(response);
                        }
                    });
                });
                resolve();
            });
        }
    });
});