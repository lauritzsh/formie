"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepReduce_1 = require("./deepReduce");
describe('deepReduce', function () {
    it('will reduce an object to one value', function () {
        var ts = { a: true, b: true, c: true }; // truthies
        var fs = { a: true, b: false, c: true }; // falsies
        expect(deepReduce_1.default(function (acc, value) { return acc && value; }, ts, true)).toBeTruthy();
        expect(deepReduce_1.default(function (acc, value) { return acc && value; }, fs, true)).toBeFalsy();
    });
    it('will deeply reduce an object to one value', function () {
        var ts = { a: true, b: { c: true, d: true } }; // truthies
        var fs = { a: true, b: { c: false, d: true } }; // falsies
        expect(deepReduce_1.default(function (acc, value) { return acc && value; }, ts, true)).toBeTruthy();
        expect(deepReduce_1.default(function (acc, value) { return acc && value; }, fs, true)).toBeFalsy();
    });
});
//# sourceMappingURL=deepReduce.spec.js.map