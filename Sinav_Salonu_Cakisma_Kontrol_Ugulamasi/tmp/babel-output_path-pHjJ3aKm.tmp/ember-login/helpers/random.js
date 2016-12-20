define('ember-login/helpers/random', ['exports', 'ember-math-helpers/helpers/random'], function (exports, _emberMathHelpersHelpersRandom) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRandom['default'];
    }
  });
  Object.defineProperty(exports, 'random', {
    enumerable: true,
    get: function get() {
      return _emberMathHelpersHelpersRandom.random;
    }
  });
});