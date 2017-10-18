import { isObject, isFunction, isArray, isEmpty } from './is';

describe('isObject', () => {
  it('checks only for objects (not arrays, functions etc)', () => {
    expect(isObject({})).toBeTruthy();
    expect(isObject([])).toBeFalsy();
    expect(isObject(() => {})).toBeFalsy();
    expect(isObject(function o() {})).toBeFalsy();
  });
});

describe('isFunction', () => {
  it('checks if value is a function', () => {
    expect(isFunction({})).toBeFalsy();
    expect(isFunction([])).toBeFalsy();
    expect(isFunction(() => {})).toBeTruthy();
    expect(isFunction(function o() {})).toBeTruthy();
  });
});

describe('isArray', () => {
  it('check if value is an array', () => {
    expect(isArray({})).toBeFalsy();
    expect(isArray([])).toBeTruthy();
    expect(isArray(() => {})).toBeFalsy();
    expect(isArray(function o() {})).toBeFalsy();
  });
});

describe('isEmpty', () => {
  it('check if value is empty', () => {
    expect(isEmpty({})).toBeTruthy();
    expect(isEmpty([])).toBeTruthy();
    expect(isEmpty(() => {})).toBeFalsy();
    expect(isEmpty(function o() {})).toBeFalsy();
    expect(isEmpty('')).toBeTruthy();
    expect(isEmpty(0)).toBeTruthy();
    expect(isEmpty(undefined)).toBeTruthy();
    expect(isEmpty(null)).toBeTruthy();
  });
});
