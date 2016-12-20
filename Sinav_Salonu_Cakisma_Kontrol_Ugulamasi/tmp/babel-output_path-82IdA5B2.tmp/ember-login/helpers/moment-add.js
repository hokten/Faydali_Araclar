define('ember-login/helpers/moment-add', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-add'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentAdd) {
  exports['default'] = _emberMomentHelpersMomentAdd['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});