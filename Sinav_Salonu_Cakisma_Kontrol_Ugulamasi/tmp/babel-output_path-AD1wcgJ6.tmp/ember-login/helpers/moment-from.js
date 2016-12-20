define('ember-login/helpers/moment-from', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-from'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentFrom) {
  exports['default'] = _emberMomentHelpersMomentFrom['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});