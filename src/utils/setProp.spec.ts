import setProp from './setProp';

describe('setProp', () => {
  it('will deeply set prop', () => {
    const message = 'hello';

    const obj = {};

    setProp(obj, 'a.b', message);

    expect(obj).toEqual({ a: { b: message } });
  });
});
