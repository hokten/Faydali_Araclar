import { helper } from 'ember-helper';
import titleizeLib from 'ember-composable-helpers/utils/titleize';
import createStringHelperFunction from '../-private/create-string-helper';

var titleize = createStringHelperFunction(titleizeLib);
export { titleize };
export default helper(titleize);