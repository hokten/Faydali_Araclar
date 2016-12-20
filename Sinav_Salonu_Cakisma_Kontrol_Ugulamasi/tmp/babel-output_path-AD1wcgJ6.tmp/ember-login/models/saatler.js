define('ember-login/models/saatler', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        saat: _emberData['default'].attr('string'),
        sinavlar: _emberData['default'].hasMany('sinavlar')
    });
});