import DS from 'ember-data';

export default DS.Model.extend({
    gun: DS.attr('string'),
    sinavlar: DS.hasMany('sinavlar')
});
