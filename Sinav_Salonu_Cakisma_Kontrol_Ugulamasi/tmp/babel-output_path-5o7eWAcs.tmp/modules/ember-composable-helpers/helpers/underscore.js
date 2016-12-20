import { helper } from 'ember-helper';
import { underscore as _underscore } from 'ember-string';
import createStringHelperFunction from '../-private/create-string-helper';

var underscore = createStringHelperFunction(_underscore);
export { underscore };
export default helper(underscore);