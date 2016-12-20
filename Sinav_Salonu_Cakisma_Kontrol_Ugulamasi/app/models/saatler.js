import DS from 'ember-data';

export default DS.Model.extend({
    saat: DS.attr('string'),
    sinavlar: DS.hasMany('sinavlar')
});
