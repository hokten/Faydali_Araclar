import Ember from 'ember';
import _moment from 'moment';

var computed = Ember.computed;
var _get = Ember.get;
var _set = Ember.set;
var logger = Ember.Logger;

export default Ember.Service.extend({
  _timeZone: null,

  locale: null,
  defaultFormat: null,

  timeZone: computed('_timeZone', {
    get: function get() {
      return _get(this, '_timeZone');
    },

    set: function set(propertyKey, timeZone) {
      if (!_moment.tz) {
        logger.warn('[ember-moment] attempted to set timezone, but moment-timezone unavailable.');
        return;
      }

      _set(this, '_timeZone', timeZone);

      return timeZone;
    }
  }),

  changeLocale: function changeLocale(locale) {
    _set(this, 'locale', locale);
  },

  changeTimeZone: function changeTimeZone(timeZone) {
    _set(this, 'timeZone', timeZone);
  },

  isMoment: function isMoment(obj) {
    return _moment.isMoment(obj);
  },

  moment: function moment() {
    var momentObj = _moment.apply(undefined, arguments);
    var locale = _get(this, 'locale');
    var timeZone = _get(this, 'timeZone');

    if (locale && momentObj.locale) {
      momentObj = momentObj.locale(locale);
    }

    if (timeZone && momentObj.tz) {
      momentObj = momentObj.tz(timeZone);
    }

    return momentObj;
  }
});