define('ember-login/tests/test-helper', ['exports', 'ember-login/tests/helpers/resolver', 'ember-qunit'], function (exports, _emberLoginTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_emberLoginTestsHelpersResolver['default']);
});