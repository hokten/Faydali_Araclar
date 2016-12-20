define('ember-login/serializers/zaman', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONSerializer.extend(_emberData['default'].EmbeddedRecordsMixin, {
    attrs: {
      sinavlar: {
        serialize: 'ids'
      }
    }
  });
});