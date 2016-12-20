define('ember-login/services/moment', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/services/moment'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentServicesMoment) {
  exports['default'] = _emberMomentServicesMoment['default'].extend({
    defaultFormat: _ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.outputFormat')
  });
});