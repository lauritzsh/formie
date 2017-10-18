"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepMerge_1 = require("./deepMerge");
exports.default = function (fields, validations) {
    var validate = function (_, func) { return (func ? func(fields) : false); };
    return deepMerge_1.default(validate, fields, validations);
};
//# sourceMappingURL=checkErrors.js.map