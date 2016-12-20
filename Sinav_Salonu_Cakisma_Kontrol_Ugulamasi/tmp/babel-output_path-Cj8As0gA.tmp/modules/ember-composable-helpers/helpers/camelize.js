import { helper } from 'ember-helper';
import { camelize as _camelize } from 'ember-string';
import createStringHelperFunction from '../-private/create-string-helper';

var camelize = createStringHelperFunction(_camelize);
export { camelize };
export default helper(camelize);