define('ember-group-by/macros/group-by', ['exports', 'ember'], function (exports, _ember) {
  'use strict';

  exports['default'] = groupBy;

  var A = _ember['default'].A;
  var computed = _ember['default'].computed;
  var get = _ember['default'].get;
  var isPresent = _ember['default'].isPresent;
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
          groups.pushObject(_ember['default'].Object.create({
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
});