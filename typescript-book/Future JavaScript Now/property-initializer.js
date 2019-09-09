var Foo = /** @class */ (function () {
    function Foo() {
        this.members = []; // Initialize directly
    }
    Foo.prototype.add = function (x) {
        this.members.push(x);
    };
    return Foo;
}());
