define('ember-login/helpers/is-same-or-before', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-same-or-before'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsSameOrBefore) {
  exports['default'] = _emberMomentHelpersIsSameOrBefore['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});