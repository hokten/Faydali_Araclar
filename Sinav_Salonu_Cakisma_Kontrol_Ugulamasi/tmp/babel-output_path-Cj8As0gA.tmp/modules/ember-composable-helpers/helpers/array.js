export { array };
import { helper } from 'ember-helper';
import { A as emberArray } from 'ember-array/utils';

function array() {
  var params = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

  // slice params to avoid mutating the provided params
  return emberArray(params.slice());
}

export default helper(array);