define('ember-login/helpers/moment-subtract', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-subtract'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentSubtract) {
  exports['default'] = _emberMomentHelpersMomentSubtract['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});