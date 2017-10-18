import deepMerge from './deepMerge';

export default (fields: any, validations: any) => {
  const validate = (_: any, func: any) => (func ? func(fields) : false);

  return deepMerge(validate, fields, validations);
};
