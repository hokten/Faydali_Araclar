import expandProperty from './expand-property';

export default function (propertyList) {
  return propertyList.reduce(function (newPropertyList, property) {
    return newPropertyList.concat(expandProperty(property));
  }, []);
}