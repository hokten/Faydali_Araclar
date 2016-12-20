QUnit.module('JSHint | controllers/account.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/account.js should pass jshint.\ncontrollers/account.js: line 28, col 37, \'post\' is defined but never used.\n\n1 error');
});
