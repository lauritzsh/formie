"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getProp_1 = require("./getProp");
describe('getProp', function () {
    it('will get the correctly nested prop', function () {
        var message = 'hello';
        var obj = { a: { b: { c: message } } };
        expect(getProp_1.default(obj, 'a.b.c')).toEqual(message);
        expect(getProp_1.default(obj, 'a.x.c')).toBeUndefined();
        expect(getProp_1.default(obj, 'a.x.c', 'hello')).toEqual(message);
    });
    it('will return falsy values if found', function () {
        var obj = { hello: '' };
        expect(getProp_1.default(obj, 'hello')).toEqual('');
    });
});
//# sourceMappingURL=getProp.spec.js.map