export { queue };
import { helper } from 'ember-helper';
import isPromise from '../utils/is-promise';

function queue() {
  var actions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var invokeWithArgs = function invokeWithArgs(acc, curr) {
      if (isPromise(acc)) {
        return acc.then(function () {
          return curr.apply(undefined, args);
        });
      }

      return curr.apply(undefined, args);
    };

    return actions.reduce(function (acc, curr, idx) {
      if (idx === 0) {
        return curr.apply(undefined, args);
      }

      return invokeWithArgs(acc, curr);
    }, undefined);
  };
}

export default helper(queue);