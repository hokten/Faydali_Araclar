define('ember-login/app', ['exports', 'ember', 'ember-login/resolver', 'ember-load-initializers', 'ember-login/config/environment'], function (exports, _ember, _emberLoginResolver, _emberLoadInitializers, _emberLoginConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _emberLoginConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _emberLoginConfigEnvironment['default'].podModulePrefix,
    Resolver: _emberLoginResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _emberLoginConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});