"use strict";
//var inc = (x) => x + 1;
exports.__esModule = true;
/* 1)
function Person(age) {
    this.age = age;
    this.growOld = function() {
        this.age++;
    }
}
*/
/* 1.1)
function Person(age) {
  this.age = age;
  this.growOld = function() { this.age++; };
  this.growOld = this.growOld.bind(this);
}
*/
/*
// 2)
function Person(age) {
  this.age = age;
  this.growOld = () => {
    this.age++;
  }
}
*/
/*
// 3)
function Person(age) {
  this.age = age;
  var _this = this; // capture this
  this.growOld = function() {
    _this.age++;
  }
}
*/
// 4) TypeScript
var Person = /** @class */ (function () {
    function Person(age) {
        var _this = this;
        this.age = age;
        this.growOld = function () {
            _this.age++;
        };
    }
    return Person;
}());
exports.Person = Person;
//var person = new Person(1);
//setTimeout(person.growOld, 1000);
console.log('TEST');
setTimeout(function () { console.log('LOOOL'); }, 1);
