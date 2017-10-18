"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var React = require("react");
var utils_1 = require("./utils");
var Formie = /** @class */ (function (_super) {
    tslib_1.__extends(Formie, _super);
    function Formie(props) {
        var _this = _super.call(this, props) || this;
        _this.mounted = true;
        _this.field = function (key, comp) {
            var value = utils_1.getProp(_this.state.fields, key);
            if (value === undefined) {
                throw new Error("Not able to find key \"" + key + "\" in fields!");
            }
            return comp({
                value: utils_1.getProp(_this.state.fields, key),
                touched: utils_1.getProp(_this.state.touched, key),
                error: utils_1.getProp(_this.errors, key),
                update: function (value) {
                    utils_1.setProp(_this.state.fields, key, value);
                    _this.setState(function (state) { return ({
                        fields: state.fields,
                    }); });
                },
                touch: function () {
                    utils_1.setProp(_this.state.touched, key, true);
                    _this.setState(function (state) { return ({
                        touched: state.touched,
                    }); });
                },
            });
        };
        _this.handleSubmit = function (event) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        this.setState(function (state) { return ({
                            submitting: true,
                        }); });
                        return [4 /*yield*/, this.props.onSubmit(this.state.fields)];
                    case 1:
                        _a.sent();
                        if (this.mounted) {
                            this.setState(function (state) { return ({
                                submitting: false,
                            }); });
                        }
                        return [2 /*return*/];
                }
            });
        }); };
        _this.state = utils_1.initState(_this.props.initial);
        return _this;
    }
    Object.defineProperty(Formie.prototype, "errors", {
        get: function () {
            return utils_1.checkErrors(this.state.fields, this.props.validate);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formie.prototype, "invalid", {
        get: function () {
            return utils_1.invalid(this.errors);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Formie.prototype, "pristine", {
        get: function () {
            return utils_1.equal(this.state.fields, this.props.initial);
        },
        enumerable: true,
        configurable: true
    });
    Formie.prototype.componentWillUnmount = function () {
        this.mounted = false;
    };
    Formie.prototype.componentWillReceiveProps = function (_a) {
        var initial = _a.initial;
        var newState = utils_1.initState(initial);
        this.setState(function (state) { return newState; });
    };
    Formie.prototype.render = function () {
        var funcProps = {
            dirty: !this.pristine,
            errors: this.errors,
            field: this.field,
            handleSubmit: this.handleSubmit,
            invalid: this.invalid,
            pristine: this.pristine,
            submitting: this.state.submitting,
            touched: this.state.touched,
            values: this.state.fields,
        };
        return this.props.form(funcProps);
    };
    return Formie;
}(React.Component));
exports.default = Formie;
//# sourceMappingURL=index.js.map