"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepReduce_1 = require("./deepReduce");
exports.default = function (errors) {
    return !deepReduce_1.default(function (acc, error) { return acc && !error; }, errors, true);
};
//# sourceMappingURL=invalid.js.map