import Ember from 'ember';

const { inject: { service }, isEmpty, RSVP } = Ember;

export default Ember.Service.extend({
    session: service('session'),
    store: service(),
    load() {
        let self = this;
        console.log("dasda");
        return new RSVP.Promise((resolve, reject) => {
            let userId = null;
            this.get('session').authorize('authorizer:oauth2', (headerName, headerValue) => {
                const headers = {};
                headers[headerName] = headerValue;
                Ember.$.ajax('/api/userinfo', { headers }).then(function(response) {
                    if (!isEmpty(response)) {
                        self.set('user', response.name);
                        self.set('username', response.username);
                        console.log(response);
                    }
                });
            });
            resolve();
        });
    }
});
