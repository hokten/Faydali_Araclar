define('moment/index', ['exports', 'ember'], function (exports, _ember) {
  /* globals self */

  'use strict';

  var moment = self.moment;

  moment.prototype.compare = function compare(a, b) {
    if (moment.isMoment(a) && moment.isMoment(b)) {
      if (a.isBefore(b)) {
        return -1;
      } else if (a.isSame(b)) {
        return 0;
      } else {
        return 1;
      }
    }

    throw new Error('Arguments provided to `compare` are not moment objects');
  };

  if (!moment.prototype.hasOwnProperty('clone')) {
    moment.prototype.clone = function clone() {
      return self.moment(this);
    };
  }

  exports['default'] = moment;
});