"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var deepReduce = function (reducer, obj, init) {
    return Object.keys(obj).reduce(function (acc, key) {
        var value = obj[key];
        if (is_1.isObject(value)) {
            return deepReduce(reducer, value, acc);
        }
        return reducer(acc, value, key);
    }, init);
};
exports.default = deepReduce;
//# sourceMappingURL=deepReduce.js.map