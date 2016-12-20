import buildComputed from './-build-computed';
import getValueUnsafe from './get-value-unsafe';

export default function () {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return buildComputed(args, getValueUnsafe);
}