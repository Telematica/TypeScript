var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Test = /** @class */ (function () {
    function Test() {
    }
    return Test;
}());
var Test2 = /** @class */ (function (_super) {
    __extends(Test2, _super);
    function Test2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Test2;
}(Test));
var t = new Test2();