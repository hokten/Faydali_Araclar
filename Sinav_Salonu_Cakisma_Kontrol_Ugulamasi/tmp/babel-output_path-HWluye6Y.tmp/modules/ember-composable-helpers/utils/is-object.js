

export default isObject;
import { typeOf } from 'ember-utils';
function isObject(val) {
  return typeOf(val) === 'object' || typeOf(val) === 'instance';
}