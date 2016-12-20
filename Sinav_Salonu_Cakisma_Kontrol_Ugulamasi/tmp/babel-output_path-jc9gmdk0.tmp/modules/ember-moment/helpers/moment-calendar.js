var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

import Ember from 'ember';
import moment from 'moment';

import computeFn from '../utils/helper-compute';
import BaseHelper from './-base';

export default BaseHelper.extend({
  globalAllowEmpty: false,

  compute: computeFn(function (params) {
    var formatHash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    this._super.apply(this, arguments);

    if (!params || params && params.length > 3) {
      throw new TypeError('ember-moment: Invalid Number of arguments, at most 3');
    }

    var locale = formatHash.locale;
    var timeZone = formatHash.timeZone;

    var _params = _slicedToArray(params, 3);

    var date = _params[0];
    var referenceTime = _params[1];
    var formats = _params[2];

    var clone = Object.create(formatHash);

    delete clone.locale;
    delete clone.timeZone;

    var mergedFormats = Ember.merge(clone, formats);

    return this.morphMoment(moment(date), { locale: locale, timeZone: timeZone }).calendar(referenceTime, mergedFormats);
  })
});