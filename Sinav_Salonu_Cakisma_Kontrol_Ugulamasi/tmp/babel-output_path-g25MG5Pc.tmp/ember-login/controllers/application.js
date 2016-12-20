define('ember-login/controllers/application', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		session: _ember['default'].inject.service('session'),
		currentUser: _ember['default'].inject.service('current-user'),
		actions: {
			invalidateSession: function invalidateSession() {
				this.get('session').invalidate();
			}
		}
	});
});