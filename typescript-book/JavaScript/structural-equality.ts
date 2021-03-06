import * as deepEqual from "deep-equal";

console.log(deepEqual({a:123},{a:123})); // True
console.log({a:123} == {a:123}); // False
console.log({a:123} === {a:123}); // False

type IdDisplay = {
  id: string,
  display: string
}

const list: IdDisplay[] = [
  {
    id: 'foo',
    display: 'Foo Select'
  },
  {
    id: 'bar',
    display: 'Bar Select'
  }
];

const fooIndex: number = list.map(i => i.id).indexOf('foo');
console.log(fooIndex); // 0