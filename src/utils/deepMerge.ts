import { isObject } from './is';

const intersection = <T>(first: T[], second: T[]): T[] =>
  first.filter(v => second.indexOf(v) !== -1);

const difference = <T>(first: T[], second: T[]): T[] =>
  first.filter(v => second.indexOf(v) === -1);

type Mapper = <L, R>(left: L, right: R) => any;

type Values<V> = { [K in keyof V]: V[K] };

const deepMerge = <T, U>(
  mapper: Mapper,
  target: Values<T>,
  source: Values<U>,
) => {
  if (isObject(target) && isObject(source)) {
    const targetKeys = Object.keys(target);
    const sourceKeys = Object.keys(source);

    const mutualKeys = intersection(targetKeys, sourceKeys);
    const leftKeys = difference(targetKeys, sourceKeys);
    const rightKeys = difference(sourceKeys, targetKeys);

    const destination = {} as any;

    leftKeys.forEach((key: keyof T) => {
      const left = target[key];

      if (isObject(left)) {
        destination[key] = deepMerge(mapper, left, {});
      } else {
        destination[key] = mapper(left, undefined);
      }
    });

    // prettier-ignore
    mutualKeys.forEach((key: keyof (T | U)) => {
      const left = target[key];
      const right = source[key];

      if (isObject(left) && isObject(right)) {
        destination[key] = deepMerge(mapper, left, right);
      } else if (isObject(left)) {
        destination[key] = mapper(deepMerge(mapper, left, {}), right);
      } else if (isObject(right)) {
        destination[key] = mapper(left, deepMerge(mapper, {}, right));
      } else {
        destination[key] = mapper(left, right);
      }
    });

    rightKeys.forEach((key: keyof U) => {
      const right = source[key];

      if (isObject(right)) {
        destination[key] = deepMerge(mapper, {}, right);
      } else {
        destination[key] = mapper(undefined, right);
      }
    });

    return destination;
  }

  throw new Error('deepMerge seems to be called with the wrong arguments');
};

export default deepMerge;
