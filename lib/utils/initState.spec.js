"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var initState_1 = require("./initState");
describe('initState', function () {
    it('creates a state from initial vaues', function () {
        var values = { name: '', address: { zip: '' } };
        expect(initState_1.default(values)).toEqual({
            fields: {
                name: '',
                address: {
                    zip: '',
                },
            },
            touched: {
                name: false,
                address: {
                    zip: false,
                },
            },
            submitting: false,
        });
    });
});
//# sourceMappingURL=initState.spec.js.map