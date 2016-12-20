define('ember-login/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'ember-login/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _emberLoginConfigEnvironment) {
  var _config$APP = _emberLoginConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});