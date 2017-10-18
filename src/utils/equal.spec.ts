import equal from './equal';

describe('equal', () => {
  it('can do simple object equality', () => {
    const first = { a: 1, b: 2 };
    const second = { a: 1, b: 2 };
    const third = { a: 1, b: 3 };
    const fourth = { a: 1, c: 2 };

    expect(equal(first, second)).toBeTruthy();
    expect(equal(first, third)).toBeFalsy();
    expect(equal(first, fourth)).toBeFalsy();
  });

  it('can do deep object equality', () => {
    const first = { a: 1, b: { c: 3 }, d: [1, 2, 3] };
    const second = { a: 1, b: { c: 3 }, d: [1, 2, 3] };
    const third = { a: 1, b: 2, d: [1, 2, 3] };

    expect(equal(first, second)).toBeTruthy();
    expect(equal(first, third)).toBeFalsy();
  });
});
