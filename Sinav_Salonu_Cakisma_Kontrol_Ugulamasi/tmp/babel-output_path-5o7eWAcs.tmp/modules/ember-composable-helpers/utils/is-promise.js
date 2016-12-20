

export default isPromise;
import { typeOf } from 'ember-utils';
import isObject from './is-object';

function isPromiseLike() {
  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  return typeOf(obj.then) === 'function' && typeOf(obj['catch']) === 'function' && typeOf(obj['finally']) === 'function';
}
function isPromise(obj) {
  return isObject(obj) && isPromiseLike(obj);
}