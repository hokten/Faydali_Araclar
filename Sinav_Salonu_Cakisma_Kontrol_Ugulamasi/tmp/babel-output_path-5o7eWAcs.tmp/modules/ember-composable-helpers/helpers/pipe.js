export { invokeFunction };
export { pipe };
import { helper } from 'ember-helper';
import isPromise from '../utils/is-promise';

function invokeFunction(acc, curr) {
  if (isPromise(acc)) {
    return acc.then(curr);
  }

  return curr(acc);
}

function pipe() {
  var actions = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return actions.reduce(function (acc, curr, idx) {
      if (idx === 0) {
        return curr.apply(undefined, args);
      }

      return invokeFunction(acc, curr);
    }, undefined);
  };
}

export default helper(pipe);