// Inspired by lodash `set`
// https://gist.github.com/harish2704/d0ee530e6ee75bad6fd30c98e5ad9dab
const setProp = (obj: any, keys: string | string[], val: any): undefined => {
  keys = Array.isArray(keys) ? keys : keys.split('.');

  if (keys.length > 1) {
    obj[keys[0]] = obj[keys[0]] || {};

    return setProp(obj[keys[0]], keys.slice(1), val);
  }

  obj[keys[0]] = val;

  return undefined;
};

export default setProp;
