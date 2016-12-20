define('ember-login/helpers/sinav-eslestirici', ['exports', 'ember', 'lodash/lodash'], function (exports, _ember, _lodashLodash) {
  exports.sinavEslestirici = sinavEslestirici;

  function sinavEslestirici(params, namedArgs) {
    var gun = namedArgs.gun,
        saat = namedArgs.saat,
        salon = namedArgs.salon,
        model = params[0],
        donen = {};
    var deger = _lodashLodash['default'].find(model, { 'gun': gun, 'saat': saat, 'salon': salon });
    if (deger) {
      donen.eylem = 'sil';
      donen.metin = deger.bolum;
    } else {
      donen.eylem = 'ekle';
      donen.metin = 'EKLE';
    }
    console.log(donen);
    return donen;
  }

  exports['default'] = _ember['default'].Helper.helper(sinavEslestirici);
});