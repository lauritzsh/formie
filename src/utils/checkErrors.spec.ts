import checkErrors from './checkErrors';

describe('checkErrors', () => {
  it('checks for errors', () => {
    const values = { name: 'john', address: { zip: '' } };
    const validations = {
      name: (v: string) => !v && 'Empty name',
      address: { zip: (v: string) => !v && 'Empty ZIP code' },
    };

    expect(checkErrors(values, validations)).toEqual({
      name: false,
      address: {
        zip: 'Empty ZIP code',
      },
    });
  });
});
