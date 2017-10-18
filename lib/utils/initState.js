"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepMerge_1 = require("./deepMerge");
exports.default = function (initial) {
    var deepClone = function (t) { return deepMerge_1.default(function (l) { return l; }, t, {}); };
    var fields = deepClone(initial);
    var touched = deepMerge_1.default(function () { return false; }, initial, {});
    return {
        fields: fields,
        touched: touched,
        submitting: false,
    };
};
//# sourceMappingURL=initState.js.map