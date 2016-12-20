define('ember-login/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTAdapter.extend({
        host: 'http://193.255.105.70:3389',
        primaryKey: 'id'
    });
});