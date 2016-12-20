define('ember-login/helpers/is-before', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-before'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsBefore) {
  exports['default'] = _emberMomentHelpersIsBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});