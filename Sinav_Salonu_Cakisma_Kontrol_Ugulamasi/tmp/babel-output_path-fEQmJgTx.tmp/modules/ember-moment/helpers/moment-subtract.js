function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import Ember from 'ember';
import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (params, _ref) {
    var _morphMoment;

    var precision = _ref.precision;
    var locale = _ref.locale;
    var timeZone = _ref.timeZone;

    this._super.apply(this, arguments);

    var length = params.length;

    var args = [];
    var subtractionArgs = [];

    if (length === 1) {
      subtractionArgs.push(params[0]);
    } else if (length === 2 && Ember.typeOf(params[0]) === 'number' && Ember.typeOf(params[1]) === 'string') {
      subtractionArgs.push.apply(subtractionArgs, _toConsumableArray(params));
    } else {
      args.push(params[0]);
      subtractionArgs.push.apply(subtractionArgs, _toConsumableArray(params.slice(1)));
    }

    return (_morphMoment = this.morphMoment(moment.apply(undefined, args), { locale: locale, timeZone: timeZone })).subtract.apply(_morphMoment, subtractionArgs.concat([precision]));
  })
});