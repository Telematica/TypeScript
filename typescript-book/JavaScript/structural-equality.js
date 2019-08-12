"use strict";
exports.__esModule = true;
var deepEqual = require("deep-equal");
console.log(deepEqual({ a: 123 }, { a: 123 })); // True
console.log({ a: 123 } == { a: 123 }); // False
console.log({ a: 123 } === { a: 123 }); // False
var list = [
    {
        id: 'foo',
        display: 'Foo Select'
    },
    {
        id: 'bar',
        display: 'Bar Select'
    }
];
var fooIndex = list.map(function (i) { return i.id; }).indexOf('foo');
console.log(fooIndex); // 0
