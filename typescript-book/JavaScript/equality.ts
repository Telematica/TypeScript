console.log(5 == "5"); // true   , TS Error
console.log(5 === "5"); // false , TS Error


console.log("" == "0"); // false
console.log(0 == ""); // true

console.log("" === "0"); // false
console.log(0 === ""); // false

//So ProTip: Always use === and !== except for null checks, which we cover later.