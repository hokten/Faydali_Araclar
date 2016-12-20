QUnit.module('JSHint | controllers/account.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/account.js should pass jshint.\ncontrollers/account.js: line 18, col 20, Expected \'===\' and instead saw \'==\'.\ncontrollers/account.js: line 45, col 9, \'that\' is defined but never used.\ncontrollers/account.js: line 141, col 11, \'parametre\' is defined but never used.\ncontrollers/account.js: line 19, col 9, \'$\' is not defined.\ncontrollers/account.js: line 22, col 9, \'$\' is not defined.\n\n5 errors');
});
