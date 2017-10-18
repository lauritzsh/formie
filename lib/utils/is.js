"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObject = function (o) {
    return !!o && typeof o === 'object' && o.constructor === {}.constructor;
};
exports.isFunction = function (func) {
    return typeof func === 'function';
};
exports.isArray = function (value) { return Array.isArray(value); };
exports.isEmpty = function (value) {
    if (exports.isObject(value)) {
        return Object.keys(value).length === 0;
    }
    if (exports.isArray(value)) {
        return value.length === 0;
    }
    return !value;
};
//# sourceMappingURL=is.js.map