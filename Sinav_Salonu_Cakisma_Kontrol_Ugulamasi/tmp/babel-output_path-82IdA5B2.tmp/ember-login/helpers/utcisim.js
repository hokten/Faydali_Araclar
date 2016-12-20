define('ember-login/helpers/utcisim', ['exports', 'ember', 'moment'], function (exports, _ember, _moment) {
  exports.utcisim = utcisim;

  function utcisim(params) {
    var tarih = params[0];
    return _moment['default'].utc(tarih, 'X').format("dddd");
  }

  exports['default'] = _ember['default'].Helper.helper(utcisim);
});