export { invoke };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import { isEmberArray } from 'ember-array/utils';
import { helper } from 'ember-helper';
import { tryInvoke } from 'ember-utils';
import RSVP from 'rsvp';

var all = RSVP.all;

function invoke(_ref) {
  var _ref2 = _toArray(_ref);

  var methodName = _ref2[0];

  var args = _ref2.slice(1);

  var obj = args.pop();

  if (isEmberArray(obj)) {
    return function () {
      var promises = obj.map(function (item) {
        return tryInvoke(item, methodName, args);
      });

      return all(promises);
    };
  }

  return function () {
    return tryInvoke(obj, methodName, args);
  };
}

export default helper(invoke);