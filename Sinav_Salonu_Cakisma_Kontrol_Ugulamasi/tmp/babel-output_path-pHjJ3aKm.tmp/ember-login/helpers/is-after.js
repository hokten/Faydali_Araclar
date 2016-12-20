define('ember-login/helpers/is-after', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-after'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsAfter) {
  exports['default'] = _emberMomentHelpersIsAfter['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});