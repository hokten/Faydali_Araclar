define('ember-login/helpers/is-same-or-after', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-same-or-after'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsSameOrAfter) {
  exports['default'] = _emberMomentHelpersIsSameOrAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});