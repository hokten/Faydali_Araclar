function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (params, _ref) {
    var _morphMoment;

    var precision = _ref.precision;
    var inclusivity = _ref.inclusivity;
    var locale = _ref.locale;
    var timeZone = _ref.timeZone;

    this._super.apply(this, arguments);

    var _params = [].concat(params);
    var length = params.length;

    if (length < 2 || length > 3) {
      throw new TypeError('ember-moment: Invalid Number of arguments, expected 2 or 3');
    }

    var args = [];

    if (length > 2) {
      args.push(_params.shift());
    }

    return (_morphMoment = this.morphMoment(moment.apply(undefined, args), { locale: locale, timeZone: timeZone })).isBetween.apply(_morphMoment, _toConsumableArray(_params).concat([precision, inclusivity]));
  })
});