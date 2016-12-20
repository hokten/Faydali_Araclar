import Ember from 'ember';

var isBlank = Ember.isBlank;
var get = Ember.get;
var warn = Ember.Logger.warn;

export default function (cb) {
  return function (params, hash) {
    if (!params || params && params.length === 0) {
      throw new TypeError('ember-moment: Invalid Number of arguments, expected at least 1');
    }

    var datetime = params[0];

    var allowEmpty = hash.allowEmpty || hash['allow-empty'];

    if (allowEmpty === undefined || allowEmpty === null) {
      allowEmpty = !!get(this, 'globalAllowEmpty');
    }

    if (isBlank(datetime)) {
      if (allowEmpty) {
        return;
      }

      warn('ember-moment: an empty value (null, undefined, or "") was passed to moment-format');
    }

    return cb.apply(this, arguments);
  };
}