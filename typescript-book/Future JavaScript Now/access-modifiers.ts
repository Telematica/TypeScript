class FooBase {
  public x: number;
  private y: number;
  protected z: number;
}

class FooChild extends FooBase {
  constructor() {
    super();
    this.x; // okay
    this.y; // ERROR: private
    this.z; // okay
  }
}

var foo = new FooBase();
foo.x; // okay
foo.y; // ERROR : private
foo.z; // ERROR : protected

/*
--------------------------------------------------
| accessible on   | public | protected | private |
-------------------------------------------------- 
| class	          | yes    | yes	     | yes     | 
| class children  | yes    | yes       | no      | 
| class instances | yes    | no        | no      | 
--------------------------------------------------
*/
