"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var setProp_1 = require("./setProp");
describe('setProp', function () {
    it('will deeply set prop', function () {
        var message = 'hello';
        var obj = {};
        setProp_1.default(obj, 'a.b', message);
        expect(obj).toEqual({ a: { b: message } });
    });
});
//# sourceMappingURL=setProp.spec.js.map