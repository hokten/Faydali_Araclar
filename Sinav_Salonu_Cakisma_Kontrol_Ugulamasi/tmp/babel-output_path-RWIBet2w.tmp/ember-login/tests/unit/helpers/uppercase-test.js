define('ember-login/tests/unit/helpers/uppercase-test', ['exports', 'ember-login/helpers/uppercase', 'qunit'], function (exports, _emberLoginHelpersUppercase, _qunit) {

  (0, _qunit.module)('Unit | Helper | uppercase');

  // Replace this with your real tests.
  (0, _qunit.test)('it works', function (assert) {
    var result = (0, _emberLoginHelpersUppercase.uppercase)([42]);
    assert.ok(result);
  });
});