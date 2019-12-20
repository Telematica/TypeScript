/* 1)
var foo = {}

// setup on foo as well as foo.__proto__
foo.bar = 123;
foo.__proto__.bar = 456;

console.log(foo.bar); // 123
delete foo.bar; // remove from object
console.log(foo.bar); // 456
delete foo.__proto__.bar; // remove from foo.__proto__
console.log(foo.bar); // undefined

*/
/* 2)
function Foo() {}
console.log(Foo.prototype); // {} i.e. it exists and is not undefined
console.log(Foo.prototype.constructor === Foo) // Has a member called `constructor` pointing back to the function
*/
/* 3)
function Foo() {
  this.bar = 123;
}

// call with the new operator
var newFoo = new Foo();
console.log(newFoo.bar); // 123
*/
/* 4)
function Foo() {}

var foo = new Foo();

console.log(foo.__proto__ === Foo.prototype);  // True!
*/
// 5) d.prototype.__proto__ = b.prototype significance
function Animal() { }
Animal.prototype.walk = function () { console.log('walk'); };
function Bird() { }
Bird.prototype.__proto__ = Animal.prototype;
Bird.prototype.fly = function () { console.log('fly'); };
var bird = new Bird();
bird.walk();
bird.fly();
