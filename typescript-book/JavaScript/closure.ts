/*

function outerFunction(arg) {
  var variableInOuterFunction = arg;
  
  function bar() {
    console.log(variableInOuterFunction); // Access a variable from the outer scope
  }

  // Call the local function to demostrate that it has access to arg
  bar(); 
}

outerFunction("hello closure");

*/

// --------------------------------------------------------------------------------------------------

function outerFunction(arg) {
  var variableInOuterFunction = arg;

  return function() {
    console.log(variableInOuterFunction);
  }
}

var innerFunction = outerFunction("hello closure!");

innerFunction();
