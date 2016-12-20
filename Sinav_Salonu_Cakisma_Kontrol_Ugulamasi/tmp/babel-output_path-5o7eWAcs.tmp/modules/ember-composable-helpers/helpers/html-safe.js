import { helper } from 'ember-helper';
import { htmlSafe as _htmlSafe } from 'ember-string';
import createStringHelperFunction from '../-private/create-string-helper';

var htmlSafe = createStringHelperFunction(_htmlSafe);
export { htmlSafe };
export default helper(htmlSafe);