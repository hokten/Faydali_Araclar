function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i]; return arr2; } else { return Array.from(arr); } }

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (_ref, _ref3) {
    var _morphMoment;

    var _ref2 = _toArray(_ref);

    var datetime = _ref2[0];

    var params = _ref2.slice(1);

    var locale = _ref3.locale;
    var timeZone = _ref3.timeZone;

    this._super.apply(this, arguments);

    return (_morphMoment = this.morphMoment(moment(datetime), { locale: locale, timeZone: timeZone })).to.apply(_morphMoment, _toConsumableArray(params));
  })
});