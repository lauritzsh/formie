import deepMerge from './deepMerge';
import deepReduce from './deepReduce';
import { isArray, isObject } from './is';

const equalArrays = (first: any[], second: any[]) => {
  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }

  return true;
};

const equalValue = (first: any, second: any) => {
  if (first === second) {
    return true;
  }

  if (first == null || second == null) {
    return false;
  }

  if (isArray(first) && isArray(second)) {
    return equalArrays(first, second);
  }

  return false;
};

export default (first: any, second: any): boolean => {
  const merged = deepMerge((l, r) => equalValue(l, r), first, second);

  return deepReduce((acc, eq) => acc && eq, merged, true);
};
