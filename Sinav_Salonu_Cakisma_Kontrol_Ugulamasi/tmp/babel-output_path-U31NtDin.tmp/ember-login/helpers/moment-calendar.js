define('ember-login/helpers/moment-calendar', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-calendar'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentCalendar) {
  exports['default'] = _emberMomentHelpersMomentCalendar['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});