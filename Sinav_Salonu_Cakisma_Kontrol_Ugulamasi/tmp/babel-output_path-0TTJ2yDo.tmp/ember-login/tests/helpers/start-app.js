define('ember-login/tests/helpers/start-app', ['exports', 'ember', 'ember-login/app', 'ember-login/config/environment'], function (exports, _ember, _emberLoginApp, _emberLoginConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _emberLoginConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _emberLoginApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});