"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
describe('isObject', function () {
    it('checks only for objects (not arrays, functions etc)', function () {
        expect(is_1.isObject({})).toBeTruthy();
        expect(is_1.isObject([])).toBeFalsy();
        expect(is_1.isObject(function () { })).toBeFalsy();
        expect(is_1.isObject(function o() { })).toBeFalsy();
    });
});
describe('isFunction', function () {
    it('checks if value is a function', function () {
        expect(is_1.isFunction({})).toBeFalsy();
        expect(is_1.isFunction([])).toBeFalsy();
        expect(is_1.isFunction(function () { })).toBeTruthy();
        expect(is_1.isFunction(function o() { })).toBeTruthy();
    });
});
describe('isArray', function () {
    it('check if value is an array', function () {
        expect(is_1.isArray({})).toBeFalsy();
        expect(is_1.isArray([])).toBeTruthy();
        expect(is_1.isArray(function () { })).toBeFalsy();
        expect(is_1.isArray(function o() { })).toBeFalsy();
    });
});
describe('isEmpty', function () {
    it('check if value is empty', function () {
        expect(is_1.isEmpty({})).toBeTruthy();
        expect(is_1.isEmpty([])).toBeTruthy();
        expect(is_1.isEmpty(function () { })).toBeFalsy();
        expect(is_1.isEmpty(function o() { })).toBeFalsy();
        expect(is_1.isEmpty('')).toBeTruthy();
        expect(is_1.isEmpty(0)).toBeTruthy();
        expect(is_1.isEmpty(undefined)).toBeTruthy();
        expect(is_1.isEmpty(null)).toBeTruthy();
    });
});
//# sourceMappingURL=is.spec.js.map