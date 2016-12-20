define('ember-login/helpers/is-same', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/is-same'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersIsSame) {
  exports['default'] = _emberMomentHelpersIsSame['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});