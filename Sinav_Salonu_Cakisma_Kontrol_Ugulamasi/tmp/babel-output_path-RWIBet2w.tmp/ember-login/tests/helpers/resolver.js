define('ember-login/tests/helpers/resolver', ['exports', 'ember-login/resolver', 'ember-login/config/environment'], function (exports, _emberLoginResolver, _emberLoginConfigEnvironment) {

  var resolver = _emberLoginResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _emberLoginConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberLoginConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});