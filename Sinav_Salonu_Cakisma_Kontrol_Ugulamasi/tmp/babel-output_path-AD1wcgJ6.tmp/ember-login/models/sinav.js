define('ember-login/models/sinav', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        bolum: _emberData['default'].attr('string'),
        zaman: _emberData['default'].belongsTo('zaman'),
        salon: _emberData['default'].attr('string')
    });
});