"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepMerge_1 = require("./deepMerge");
describe('deepMerge', function () {
    it('will copy everything to an empty object', function () {
        var simple = { a: 1, b: { c: 3 } };
        var values = { a: 1, b: 2, c: 3 };
        expect(deepMerge_1.default(function (l) { return l; }, simple, {})).toEqual(simple);
        expect(deepMerge_1.default(function (l) { return l; }, values, {})).toEqual(values);
    });
    it('will deeply merge two objects', function () {
        var first = { a: 1, b: { c: 2 }, e: 4 };
        var second = { a: 2, b: { d: 3 }, f: 5 };
        expect(deepMerge_1.default(function (l, r) { return l || r; }, first, second)).toEqual({
            a: 1,
            b: { c: 2, d: 3 },
            e: 4,
            f: 5,
        });
        expect(deepMerge_1.default(function (l, r) { return r || l; }, first, second)).toEqual({
            a: 2,
            b: { c: 2, d: 3 },
            e: 4,
            f: 5,
        });
    });
    it('can evaluate functions for merging', function () {
        var values = { hello: 'world' };
        var transformations = { hello: function (v) { return v + '!'; } };
        var transform = function (value, func) { return func(value); };
        expect(deepMerge_1.default(transform, values, transformations)).toEqual({
            hello: 'world!',
        });
    });
    it('can be used for evaluating errors', function () {
        var values = {
            name: 'john doe',
            ssn: '',
            address: {
                zip: '',
            },
        };
        var validations = {
            name: function (v) { return !v && 'Missing name'; },
            ssn: function (v) { return !v && 'Missing SSN'; },
            address: {
                zip: function (v) { return !v && 'Missing ZIP code'; },
            },
        };
        var validate = function (val, func) { return (func ? func(val) : false); };
        expect(deepMerge_1.default(validate, values, validations)).toEqual({
            name: false,
            ssn: 'Missing SSN',
            address: {
                zip: 'Missing ZIP code',
            },
        });
    });
    it('can be used for deep mapping', function () {
        var values = {
            name: 'john doe',
            address: {
                zip: '2000',
            },
        };
        var transform = function () { return false; };
        expect(deepMerge_1.default(transform, values, {})).toEqual({
            name: false,
            address: {
                zip: false,
            },
        });
    });
});
//# sourceMappingURL=deepMerge.spec.js.map