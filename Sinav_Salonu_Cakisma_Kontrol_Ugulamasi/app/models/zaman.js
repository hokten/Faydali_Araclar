import DS from 'ember-data';

export default DS.Model.extend({
  tarih: DS.attr('string'),
  saat: DS.attr('string'),
  sinavlar: DS.hasMany('sinav', {async:true})
});
