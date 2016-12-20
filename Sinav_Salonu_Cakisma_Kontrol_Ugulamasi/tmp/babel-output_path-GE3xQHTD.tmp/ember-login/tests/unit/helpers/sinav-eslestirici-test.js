define('ember-login/tests/unit/helpers/sinav-eslestirici-test', ['exports', 'ember-login/helpers/sinav-eslestirici', 'qunit'], function (exports, _emberLoginHelpersSinavEslestirici, _qunit) {

  (0, _qunit.module)('Unit | Helper | sinav eslestirici');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _emberLoginHelpersSinavEslestirici.sinavEslestirici)([42]);
    assert.ok(result);
  });
});