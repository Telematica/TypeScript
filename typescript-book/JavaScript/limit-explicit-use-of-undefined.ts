/*
function foo() {
  // if Something
  return {a:1,b:2};
  // else
  return {a:1,b:undefined};
}
*/

function foo() : {a:number,b?:number} {
  // if Something
  return {a:1,b:2};
  // else
  return {a:1};
}