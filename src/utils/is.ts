export const isObject = (o: any): o is object =>
  !!o && typeof o === 'object' && o.constructor === {}.constructor;

export const isFunction = (func: any): func is (() => any) =>
  typeof func === 'function';

export const isArray = (value: any): value is any[] => Array.isArray(value);

export const isEmpty = (value: any) => {
  if (isObject(value)) {
    return Object.keys(value).length === 0;
  }

  if (isArray(value)) {
    return value.length === 0;
  }

  return !value;
};
