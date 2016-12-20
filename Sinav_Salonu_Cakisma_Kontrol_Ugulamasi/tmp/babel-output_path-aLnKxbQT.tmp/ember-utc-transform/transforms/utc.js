define('ember-utc-transform/transforms/utc', ['exports', 'ember-data', 'moment'], function (exports, _emberData, _moment) {
  'use strict';

  exports['default'] = _emberData['default'].Transform.extend({
    serialize: function serialize(value) {
      if (value) {
        return value.toJSON();
      } else {
        return null;
      }
    },

    deserialize: function deserialize(value) {
      if (value) {
        return _moment['default'].utc(value);
      } else {
        return null;
      }
    }
  });
});