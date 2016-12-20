define('ember-login/helpers/moment-to-now', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-to-now'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentToNow) {
  exports['default'] = _emberMomentHelpersMomentToNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});