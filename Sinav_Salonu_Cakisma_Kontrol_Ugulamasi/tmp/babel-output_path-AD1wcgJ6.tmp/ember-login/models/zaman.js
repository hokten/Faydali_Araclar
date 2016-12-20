define('ember-login/models/zaman', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    tarih: _emberData['default'].attr('string'),
    saat: _emberData['default'].attr('string'),
    sinavlar: _emberData['default'].hasMany('sinav', { async: true })
  });
});