"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var invalid_1 = require("./invalid");
describe('invalid', function () {
    it('checks for errors', function () {
        var nothing = {};
        var mixed = { a: 'Must not be empty', b: false };
        var errors = { a: 'Must not be empty' };
        var noErrors = { b: false };
        expect(invalid_1.default(nothing)).toBeFalsy();
        expect(invalid_1.default(mixed)).toBeTruthy();
        expect(invalid_1.default(errors)).toBeTruthy();
        expect(invalid_1.default(noErrors)).toBeFalsy();
    });
    it('deeply checks for errors', function () { });
});
//# sourceMappingURL=invalid.spec.js.map