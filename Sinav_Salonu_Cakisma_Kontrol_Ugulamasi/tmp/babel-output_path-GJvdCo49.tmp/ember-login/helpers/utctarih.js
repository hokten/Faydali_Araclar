define('ember-login/helpers/utctarih', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports.utctarih = utctarih;

  function utctarih(params) {
    var tarih = params[0];
    return _moment['default'].utc(tarih, 'X').format("DD-MM-YYYY");
  }

  exports['default'] = _ember['default'].Helper.helper(utctarih);
});