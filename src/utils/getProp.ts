// Inspired by lodash `get`
// https://gist.github.com/harish2704/d0ee530e6ee75bad6fd30c98e5ad9dab#gistcomment-2060415
const getProp = (obj: any, keys: string | string[], defaultVal?: any): any => {
  const path = Array.isArray(keys) ? keys : keys.split('.');

  obj = obj[path[0]];

  if (obj && path.length > 1) {
    return getProp(obj, path.slice(1), defaultVal);
  }

  return obj === undefined ? defaultVal : obj;
};

export default getProp;
