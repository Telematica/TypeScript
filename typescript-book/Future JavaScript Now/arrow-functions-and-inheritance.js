/*
// 1)
class Adder {
  constructor(public a:number) {}
  add = (b: number): number => {
    return this.a + b;
  }
}

class Child extends Adder {
  callAdd(b: number) {
    return this.add(b);
  }
}

const child = new Child(123);
console.log(child.callAdd(123));
*/
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
// 2)
var Adder = /** @class */ (function () {
    function Adder(a) {
        this.a = a;
        this.add = function (b) {
            return this.a + b;
        };
    }
    return Adder;
}());
var ExtendedAdder = /** @class */ (function (_super) {
    __extends(ExtendedAdder, _super);
    function ExtendedAdder() {
        // Create a copy of parent before creating our own
        //private superAdd = this.add;
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Now create our override
        _this.add2 = function (b) {
            return this.add(b);
        };
        return _this;
    }
    return ExtendedAdder;
}(Adder));
var child = new ExtendedAdder(123);
console.log(child.add2(123));
