define('ember-login/helpers/moment-format', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-format'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentFormat) {
  exports['default'] = _emberMomentHelpersMomentFormat['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});