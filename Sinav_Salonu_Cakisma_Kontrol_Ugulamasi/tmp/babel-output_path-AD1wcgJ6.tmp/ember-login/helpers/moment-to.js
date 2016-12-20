define('ember-login/helpers/moment-to', ['exports', 'ember', 'ember-login/config/environment', 'ember-moment/helpers/moment-to'], function (exports, _ember, _emberLoginConfigEnvironment, _emberMomentHelpersMomentTo) {
  exports['default'] = _emberMomentHelpersMomentTo['default'].extend({
    globalAllowEmpty: !!_ember['default'].get(_emberLoginConfigEnvironment['default'], 'moment.allowEmpty')
  });
});