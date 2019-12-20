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

// 2)
class Adder {
  constructor(public a: number) {}
  
  add = function(b: number): number {
    return this.a + b;
  }
}

class ExtendedAdder extends Adder {
  // Create a copy of parent before creating our own
  private superAdd = this.add;

  // Now create our override
  add = function(b: number): number {
    return this.superAdd(b);
  }
}

const child = new ExtendedAdder(123);
console.log(child.add(123));
