define('ember-login/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].RESTAdapter.extend({
        host: 'http://localhost:2403',
        primaryKey: 'id'
    });
});