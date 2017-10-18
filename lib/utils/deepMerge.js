"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var is_1 = require("./is");
var intersection = function (first, second) {
    return first.filter(function (v) { return second.indexOf(v) !== -1; });
};
var difference = function (first, second) {
    return first.filter(function (v) { return second.indexOf(v) === -1; });
};
var deepMerge = function (mapper, target, source) {
    if (is_1.isObject(target) && is_1.isObject(source)) {
        var targetKeys = Object.keys(target);
        var sourceKeys = Object.keys(source);
        var mutualKeys = intersection(targetKeys, sourceKeys);
        var leftKeys = difference(targetKeys, sourceKeys);
        var rightKeys = difference(sourceKeys, targetKeys);
        var destination_1 = {};
        leftKeys.forEach(function (key) {
            var left = target[key];
            if (is_1.isObject(left)) {
                destination_1[key] = deepMerge(mapper, left, {});
            }
            else {
                destination_1[key] = mapper(left, undefined);
            }
        });
        // prettier-ignore
        mutualKeys.forEach(function (key) {
            var left = target[key];
            var right = source[key];
            if (is_1.isObject(left) && is_1.isObject(right)) {
                destination_1[key] = deepMerge(mapper, left, right);
            }
            else if (is_1.isObject(left)) {
                destination_1[key] = mapper(deepMerge(mapper, left, {}), right);
            }
            else if (is_1.isObject(right)) {
                destination_1[key] = mapper(left, deepMerge(mapper, {}, right));
            }
            else {
                destination_1[key] = mapper(left, right);
            }
        });
        rightKeys.forEach(function (key) {
            var right = source[key];
            if (is_1.isObject(right)) {
                destination_1[key] = deepMerge(mapper, {}, right);
            }
            else {
                destination_1[key] = mapper(undefined, right);
            }
        });
        return destination_1;
    }
    throw new Error('deepMerge seems to be called with the wrong arguments');
};
exports.default = deepMerge;
//# sourceMappingURL=deepMerge.js.map