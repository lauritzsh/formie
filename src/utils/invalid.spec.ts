import invalid from './invalid';

describe('invalid', () => {
  it('checks for errors', () => {
    const nothing = {};
    const mixed = { a: 'Must not be empty', b: false };
    const errors = { a: 'Must not be empty' };
    const noErrors = { b: false };

    expect(invalid(nothing)).toBeFalsy();
    expect(invalid(mixed)).toBeTruthy();
    expect(invalid(errors)).toBeTruthy();
    expect(invalid(noErrors)).toBeFalsy();
  });

  it('deeply checks for errors', () => {});
});
