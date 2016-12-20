define('ember-login/routes/scientists', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
		}
	});
});