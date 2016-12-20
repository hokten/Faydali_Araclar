define('ember-login/tests/unit/helpers/hucre-yazici-test', ['exports', 'ember-login/helpers/hucre-yazici', 'qunit'], function (exports, _emberLoginHelpersHucreYazici, _qunit) {

  (0, _qunit.module)('Unit | Helper | hucre yazici');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _emberLoginHelpersHucreYazici.hucreYazici)([42]);
    assert.ok(result);
  });
});