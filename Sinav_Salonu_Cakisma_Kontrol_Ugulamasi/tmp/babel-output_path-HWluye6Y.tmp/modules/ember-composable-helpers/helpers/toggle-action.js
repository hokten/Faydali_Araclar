import { helper } from 'ember-helper';
import { toggle } from './toggle';
import ACTION from '../-private/closure-action';

var closureToggle = toggle;
if (ACTION) {
  closureToggle[ACTION] = true;
}

export default helper(closureToggle);