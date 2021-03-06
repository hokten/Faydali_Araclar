import Ember from 'ember';

var expandProperties = Ember.expandProperties;

export default function (property) {
  var atEachIndex = property.indexOf('.@each');
  if (atEachIndex !== -1) {
    return [property.slice(0, atEachIndex)];
  } else if (property.slice(-2) === '[]') {
    return [property.slice(0, -3)];
  }

  var newPropertyList = [];
  expandProperties(property, function (expandedProperties) {
    newPropertyList = newPropertyList.concat(expandedProperties);
  });
  return newPropertyList;
}