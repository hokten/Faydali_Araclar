define("ember-composable-helpers/utils/is-equal", ["exports"], function (exports) {
  "use strict";

  exports["default"] = isEqual;

  function isEqual(firstValue, secondValue) {
    var useDeepEqual = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

    if (useDeepEqual) {
      return JSON.stringify(firstValue) === JSON.stringify(secondValue);
    } else {
      return firstValue === secondValue;
    }
  }
});