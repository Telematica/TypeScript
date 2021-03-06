class Point {
  constructor(public x: number, public y: number) {

  }
  add(point: Point): Point {
    return new Point(this.x + point.x, this.y + point.y);
  }
}

var p1: Point = new Point(0, 10);
var p2: Point = new Point(10, 20);
var p3: Point = p1.add(p2);

var inc: (x:number) => number = (x: number): number => {
    return x + 1;
};