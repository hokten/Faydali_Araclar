

export default groupBy;
import Ember from 'ember';

var A = Ember.A;
var computed = Ember.computed;
var get = Ember.get;
var isPresent = Ember.isPresent;
function groupBy(collection, property) {
  var dependentKey = collection + '.@each.bolum';

  return computed(dependentKey, function () {
    var groups = new A();
    var items = get(this, collection);

    items.forEach(function (item) {
      var value = get(item, property);
      var group = groups.findBy('value', value);

      if (isPresent(group)) {
        get(group, 'items').pushObject(item);
      } else {
        group = { property: property, value: value, items: [item] };
        groups.pushObject(Ember.Object.create({
          property: property,
          value: value,
          items: [item]
        }));
      }
    });
    groups.forEach(function (item) {
      var value = get(item, 'value');
      var sirali = get(item, 'items').sortBy('salon');
      console.log(groups.findBy('value', value));
      groups.findBy('value', value).set('items', sirali);
    });
    return groups;
  }).readOnly();
}