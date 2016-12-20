import DS from 'ember-data';
import moment from 'moment';

export default DS.Transform.extend({
  serialize: function serialize(value) {
    if (value) {
      return value.toJSON();
    } else {
      return null;
    }
  },

  deserialize: function deserialize(value) {
    if (value) {
      return moment.utc(value);
    } else {
      return null;
    }
  }
});