import deepReduce from './deepReduce';

describe('deepReduce', () => {
  it('will reduce an object to one value', () => {
    const ts = { a: true, b: true, c: true }; // truthies
    const fs = { a: true, b: false, c: true }; // falsies

    expect(deepReduce((acc, value) => acc && value, ts, true)).toBeTruthy();
    expect(deepReduce((acc, value) => acc && value, fs, true)).toBeFalsy();
  });

  it('will deeply reduce an object to one value', () => {
    const ts = { a: true, b: { c: true, d: true } }; // truthies
    const fs = { a: true, b: { c: false, d: true } }; // falsies

    expect(deepReduce((acc, value) => acc && value, ts, true)).toBeTruthy();
    expect(deepReduce((acc, value) => acc && value, fs, true)).toBeFalsy();
  });
});
