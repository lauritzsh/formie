import { isObject } from './is';

type Reducer = (accumulator: any, value: any, key: string) => any;

const deepReduce = (reducer: Reducer, obj: any, init: any): any =>
  Object.keys(obj).reduce((acc, key) => {
    const value = obj[key];

    if (isObject(value)) {
      return deepReduce(reducer, value, acc);
    }

    return reducer(acc, value, key);
  }, init);

export default deepReduce;
