define('ember-login/helpers/utcsaat', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports.utcsaat = utcsaat;

  function utcsaat(params) {
    var tarih = params[0];
    return _moment['default'].utc(tarih, 'X').format("HH:mm");
  }

  exports['default'] = _ember['default'].Helper.helper(utcsaat);
});