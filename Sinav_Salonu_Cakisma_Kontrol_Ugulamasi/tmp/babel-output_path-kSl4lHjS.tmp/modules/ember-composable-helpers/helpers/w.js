export { w };

function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }

import { helper } from 'ember-helper';
import { w as toWords } from 'ember-string';

function w(_ref) {
  var _ref2 = _toArray(_ref);

  var wordStrings = _ref2;

  return wordStrings.map(toWords).reduce(function (words, moreWords) {
    return words.concat(moreWords);
  });
}

export default helper(w);