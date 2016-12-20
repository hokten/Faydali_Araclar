define('ember-login/tests/routes/account.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/account.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/account.js should pass jshint.\nroutes/account.js: line 3, col 5, \'rentals\' is defined but never used.\n\n1 error');
  });
});