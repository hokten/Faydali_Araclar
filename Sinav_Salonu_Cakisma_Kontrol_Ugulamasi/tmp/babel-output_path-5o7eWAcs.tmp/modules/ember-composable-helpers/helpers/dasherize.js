import { helper } from 'ember-helper';
import { dasherize as _dasherize } from 'ember-string';
import createStringHelperFunction from '../-private/create-string-helper';

var dasherize = createStringHelperFunction(_dasherize);
export { dasherize };
export default helper(dasherize);