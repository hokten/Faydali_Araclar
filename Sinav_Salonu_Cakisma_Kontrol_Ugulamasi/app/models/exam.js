import DS from 'ember-data';

export default DS.Model.extend({
    bolum: DS.attr('string'),
    tarih: DS.attr('number'),
    salon: DS.attr('string'),
    gorunurluk: Ember.computed(function() {
          return true;
    })
});
