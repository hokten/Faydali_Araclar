import DS from 'ember-data';

export default DS.Model.extend({
    bolum: DS.attr('string'),
    zaman: DS.belongsTo('zaman'),
    salon: DS.attr('string')
});
