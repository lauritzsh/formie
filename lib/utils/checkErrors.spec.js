"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkErrors_1 = require("./checkErrors");
describe('checkErrors', function () {
    it('checks for errors', function () {
        var values = { name: 'john', address: { zip: '' } };
        var validations = {
            name: function (v) { return !v && 'Empty name'; },
            address: { zip: function (v) { return !v && 'Empty ZIP code'; } },
        };
        expect(checkErrors_1.default(values, validations)).toEqual({
            name: false,
            address: {
                zip: 'Empty ZIP code',
            },
        });
    });
});
//# sourceMappingURL=checkErrors.spec.js.map