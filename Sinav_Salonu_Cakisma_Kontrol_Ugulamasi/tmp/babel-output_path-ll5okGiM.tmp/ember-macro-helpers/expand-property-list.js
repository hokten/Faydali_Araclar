define('ember-macro-helpers/expand-property-list', ['exports', 'ember-macro-helpers/expand-property'], function (exports, _emberMacroHelpersExpandProperty) {
  'use strict';

  exports['default'] = function (propertyList) {
    return propertyList.reduce(function (newPropertyList, property) {
      return newPropertyList.concat((0, _emberMacroHelpersExpandProperty['default'])(property));
    }, []);
  };
});