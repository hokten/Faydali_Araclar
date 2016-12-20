import { helper } from 'ember-helper';
import { capitalize as _capitalize } from 'ember-string';
import createStringHelperFunction from '../-private/create-string-helper';

var capitalize = createStringHelperFunction(_capitalize);
export { capitalize };
export default helper(capitalize);