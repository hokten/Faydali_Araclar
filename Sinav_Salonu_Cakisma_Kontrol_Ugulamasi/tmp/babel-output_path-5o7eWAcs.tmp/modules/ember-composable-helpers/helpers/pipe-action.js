import { helper } from 'ember-helper';
import { pipe } from './pipe';
import ACTION from '../-private/closure-action';

var closurePipe = pipe;
if (ACTION) {
  closurePipe[ACTION] = true;
}

export default helper(closurePipe);