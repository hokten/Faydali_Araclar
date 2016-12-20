define('ember-moment/services/moment', ['exports', 'ember', 'moment'], function (exports, _ember, _moment2) {
  'use strict';

  var computed = _ember['default'].computed;
  var _get = _ember['default'].get;
  var _set = _ember['default'].set;
  var logger = _ember['default'].Logger;

  exports['default'] = _ember['default'].Service.extend({
    _timeZone: null,

    locale: null,
    defaultFormat: null,

    timeZone: computed('_timeZone', {
      get: function get() {
        return _get(this, '_timeZone');
      },

      set: function set(propertyKey, timeZone) {
        if (!_moment2['default'].tz) {
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
      return _moment2['default'].isMoment(obj);
    },

    moment: function moment() {
      var momentObj = _moment2['default'].apply(undefined, arguments);
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
});