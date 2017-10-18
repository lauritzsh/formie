"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var deepMerge_1 = require("./deepMerge");
var deepReduce_1 = require("./deepReduce");
var is_1 = require("./is");
var equalArrays = function (first, second) {
    if (first.length !== second.length) {
        return false;
    }
    for (var i = 0; i < first.length; i++) {
        if (first[i] !== second[i]) {
            return false;
        }
    }
    return true;
};
var equalValue = function (first, second) {
    if (first === second) {
        return true;
    }
    if (first == null || second == null) {
        return false;
    }
    if (is_1.isArray(first) && is_1.isArray(second)) {
        return equalArrays(first, second);
    }
    return false;
};
exports.default = function (first, second) {
    var merged = deepMerge_1.default(function (l, r) { return equalValue(l, r); }, first, second);
    return deepReduce_1.default(function (acc, eq) { return acc && eq; }, merged, true);
};
//# sourceMappingURL=equal.js.map