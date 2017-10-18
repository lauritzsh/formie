import deepMerge from './deepMerge';
import { isObject } from './is';

describe('deepMerge', () => {
  it('will copy everything to an empty object', () => {
    const simple = { a: 1, b: { c: 3 } };
    const values = { a: 1, b: 2, c: 3 };

    expect(deepMerge(l => l, simple, {})).toEqual(simple);
    expect(deepMerge(l => l, values, {})).toEqual(values);
  });

  it('will deeply merge two objects', () => {
    const first = { a: 1, b: { c: 2 }, e: 4 };
    const second = { a: 2, b: { d: 3 }, f: 5 };

    expect(deepMerge((l, r) => l || r, first, second)).toEqual({
      a: 1,
      b: { c: 2, d: 3 },
      e: 4,
      f: 5,
    });

    expect(deepMerge((l, r) => r || l, first, second)).toEqual({
      a: 2,
      b: { c: 2, d: 3 },
      e: 4,
      f: 5,
    });
  });

  it('can evaluate functions for merging', () => {
    const values = { hello: 'world' };
    const transformations = { hello: (v: string) => v + '!' };

    const transform = (value: any, func: any) => func(value);

    expect(deepMerge(transform, values, transformations)).toEqual({
      hello: 'world!',
    });
  });

  it('can be used for evaluating errors', () => {
    const values = {
      name: 'john doe',
      ssn: '',
      address: {
        zip: '',
      },
    };

    const validations = {
      name: (v: string) => !v && 'Missing name',
      ssn: (v: string) => !v && 'Missing SSN',
      address: {
        zip: (v: string) => !v && 'Missing ZIP code',
      },
    };

    const validate = (val: any, func: any) => (func ? func(val) : false);

    expect(deepMerge(validate, values, validations)).toEqual({
      name: false,
      ssn: 'Missing SSN',
      address: {
        zip: 'Missing ZIP code',
      },
    });
  });

  it('can be used for deep mapping', () => {
    const values = {
      name: 'john doe',
      address: {
        zip: '2000',
      },
    };

    const transform = () => false;

    expect(deepMerge(transform, values, {})).toEqual({
      name: false,
      address: {
        zip: false,
      },
    });
  });
});
