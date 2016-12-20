QUnit.module('JSHint | models/exam.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/exam.js should pass jshint.\nmodels/exam.js: line 7, col 17, \'Ember\' is not defined.\n\n1 error');
});
