import getValue from './get-value';

export default function (context, key) {
  var value = getValue(context, key);
  if (value) {
    return value;
  }

  return key;
}