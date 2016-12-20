QUnit.module('JSHint | services/current-user.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'services/current-user.js should pass jshint.\nservices/current-user.js: line 12, col 17, \'userId\' is defined but never used.\nservices/current-user.js: line 11, col 43, \'reject\' is defined but never used.\n\n2 errors');
});
