define('ember-login/tests/helpers/sinav-eslestirici.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/sinav-eslestirici.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'helpers/sinav-eslestirici.js should pass jshint.\nhelpers/sinav-eslestirici.js: line 12, col 17, Expected \'===\' and instead saw \'==\'.\nhelpers/sinav-eslestirici.js: line 13, col 18, Expected \'===\' and instead saw \'==\'.\nhelpers/sinav-eslestirici.js: line 14, col 19, Expected \'===\' and instead saw \'==\'.\nhelpers/sinav-eslestirici.js: line 2, col 8, \'_\' is defined but never used.\n\n4 errors');
  });
});