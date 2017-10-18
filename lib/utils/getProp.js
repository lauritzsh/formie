"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Inspired by lodash `get`
// https://gist.github.com/harish2704/d0ee530e6ee75bad6fd30c98e5ad9dab#gistcomment-2060415
var getProp = function (obj, keys, defaultVal) {
    var path = Array.isArray(keys) ? keys : keys.split('.');
    obj = obj[path[0]];
    if (obj && path.length > 1) {
        return getProp(obj, path.slice(1), defaultVal);
    }
    return obj === undefined ? defaultVal : obj;
};
exports.default = getProp;
//# sourceMappingURL=getProp.js.map