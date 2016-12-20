define('ember-login/tests/unit/helpers/utcisim-test', ['exports', 'ember-login/helpers/utcisim', 'qunit'], function (exports, _emberLoginHelpersUtcisim, _qunit) {

  (0, _qunit.module)('Unit | Helper | utcisim');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _emberLoginHelpersUtcisim.utcisim)([42]);
    assert.ok(result);
  });
});