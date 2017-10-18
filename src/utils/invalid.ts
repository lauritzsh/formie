import deepMerge from './deepMerge';
import deepReduce from './deepReduce';
import { isArray, isObject } from './is';

export default (errors: any): boolean => {
  return !deepReduce((acc, error) => acc && !error, errors, true);
};
