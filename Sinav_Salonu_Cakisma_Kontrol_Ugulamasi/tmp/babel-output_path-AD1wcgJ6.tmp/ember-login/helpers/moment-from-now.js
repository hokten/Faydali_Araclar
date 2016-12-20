define('ember-login/helpers/moment-from-now', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-from-now'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentFromNow) {
  exports['default'] = _emberMomentHelpersMomentFromNow['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});