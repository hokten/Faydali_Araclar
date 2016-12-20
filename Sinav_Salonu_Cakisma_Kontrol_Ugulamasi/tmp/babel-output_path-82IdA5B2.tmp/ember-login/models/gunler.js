define('ember-login/models/gunler', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        gun: _emberData['default'].attr('string'),
        sinavlar: _emberData['default'].hasMany('sinavlar')
    });
});