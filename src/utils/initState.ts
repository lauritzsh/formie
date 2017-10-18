import deepMerge from './deepMerge';

import { Touched } from '..';

export default <T>(initial: T) => {
  const deepClone = (t: T) => deepMerge(l => l, t, {}) as T;

  const fields = deepClone(initial);
  const touched = deepMerge(() => false, initial, {}) as Touched<T>;

  return {
    fields,
    touched,
    submitting: false,
  };
};
