import Ember from 'ember';

var ComputedProperty = Ember.ComputedProperty;

export default function (key) {
  return key instanceof ComputedProperty;
}