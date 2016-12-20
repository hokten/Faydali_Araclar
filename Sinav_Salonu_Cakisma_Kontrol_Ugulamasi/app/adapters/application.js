import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://193.255.105.70:3389',
    primaryKey: 'id'
});
