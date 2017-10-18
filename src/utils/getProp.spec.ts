import getProp from './getProp';

describe('getProp', () => {
  it('will get the correctly nested prop', () => {
    const message = 'hello';

    const obj = { a: { b: { c: message } } };

    expect(getProp(obj, 'a.b.c')).toEqual(message);
    expect(getProp(obj, 'a.x.c')).toBeUndefined();
    expect(getProp(obj, 'a.x.c', 'hello')).toEqual(message);
  });

  it('will return falsy values if found', () => {
    const obj = { hello: '' };

    expect(getProp(obj, 'hello')).toEqual('');
  });
});
