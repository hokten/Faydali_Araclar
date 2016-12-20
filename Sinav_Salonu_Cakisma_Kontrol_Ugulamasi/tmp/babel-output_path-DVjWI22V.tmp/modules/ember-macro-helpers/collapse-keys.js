import expandProperty from './expand-property';

export default function (keys) {
  return keys.reduce(function (newKeys, key) {
    if (typeof key === 'string') {
      newKeys = newKeys.concat(expandProperty(key));
    } else {
      newKeys.push(key);
    }
    return newKeys;
  }, []);
}