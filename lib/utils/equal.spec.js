"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var equal_1 = require("./equal");
describe('equal', function () {
    it('can do simple object equality', function () {
        var first = { a: 1, b: 2 };
        var second = { a: 1, b: 2 };
        var third = { a: 1, b: 3 };
        var fourth = { a: 1, c: 2 };
        expect(equal_1.default(first, second)).toBeTruthy();
        expect(equal_1.default(first, third)).toBeFalsy();
        expect(equal_1.default(first, fourth)).toBeFalsy();
    });
    it('can do deep object equality', function () {
        var first = { a: 1, b: { c: 3 }, d: [1, 2, 3] };
        var second = { a: 1, b: { c: 3 }, d: [1, 2, 3] };
        var third = { a: 1, b: 2, d: [1, 2, 3] };
        expect(equal_1.default(first, second)).toBeTruthy();
        expect(equal_1.default(first, third)).toBeFalsy();
    });
});
//# sourceMappingURL=equal.spec.js.map