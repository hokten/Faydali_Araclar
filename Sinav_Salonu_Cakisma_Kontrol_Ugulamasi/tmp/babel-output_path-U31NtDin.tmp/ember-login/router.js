define('ember-login/router', ['exports', 'ember', 'ember-login/config/environment'], function (exports, _ember, _emberLoginConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _emberLoginConfigEnvironment['default'].locationType,
    rootURL: _emberLoginConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('scientists');
    this.route('login');
    this.route('account');
  });

  exports['default'] = Router;
});