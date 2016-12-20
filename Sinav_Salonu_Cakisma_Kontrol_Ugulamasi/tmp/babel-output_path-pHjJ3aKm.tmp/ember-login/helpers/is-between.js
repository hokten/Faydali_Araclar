define('ember-login/helpers/is-between', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-between'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsBetween) {
  exports['default'] = _emberMomentHelpersIsBetween['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});