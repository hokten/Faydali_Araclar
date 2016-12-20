define('ember-login/helpers/uppercase', ['exports', 'ember'], function (exports, _ember) {
  exports.uppercase = uppercase;

  function uppercase(params) {
    return params[0].toUpperCase();
  }

  exports['default'] = _ember['default'].Helper.helper(uppercase);
});