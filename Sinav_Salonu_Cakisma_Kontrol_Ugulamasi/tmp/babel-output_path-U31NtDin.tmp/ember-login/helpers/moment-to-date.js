define('ember-login/helpers/moment-to-date', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-to-date'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentToDate) {
  exports['default'] = _emberMomentHelpersMomentToDate['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});