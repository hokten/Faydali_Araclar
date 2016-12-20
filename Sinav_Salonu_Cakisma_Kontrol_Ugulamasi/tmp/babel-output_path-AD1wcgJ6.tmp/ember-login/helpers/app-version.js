define('ember-login/helpers/app-version', ['exports', 'ember', 'ember-login/config/environment'], function (exports, _ember, _emberLoginConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _emberLoginConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});