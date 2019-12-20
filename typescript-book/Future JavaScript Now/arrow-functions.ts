//var inc = (x) => x + 1;

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
export class Person {
  constructor(public age:number) {}
  growOld = () => {
    this.age++;
  }
}

var person = new Person(1);

setTimeout(person.growOld, 1000);

console.log('TEST');
setTimeout(function() { console.log('LOOOL'); }, 1);