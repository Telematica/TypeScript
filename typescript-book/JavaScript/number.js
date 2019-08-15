console.log(.1 + .2); // 0.30000000000000004
console.log({ max: Number.MAX_VALUE, min: Number.MIN_VALUE });
// {max: 9007199254740991, min: -9007199254740991}
console.log(Number.MAX_VALUE + 1 === Number.MAX_VALUE + 2); // true!
console.log(Number.MIN_VALUE - 1 === Number.MIN_VALUE - 2); // true!
console.log(Number.MAX_VALUE); // 9007199254740991
console.log(Number.MAX_VALUE + 1); // 9007199254740992 - Correct
console.log(Number.MAX_VALUE + 2); // 9007199254740992 - Rounded!
console.log(Number.MAX_VALUE + 3); // 9007199254740994 - Rounded - correct by luck
console.log(Number.MAX_VALUE + 4); // 9007199254740996 - Rounded!
// Safe value
//console.log(Number.isSafeInteger(Number.MAX_VALUE)); // true
// Unsafe value
//console.log(Number.isSafeInteger(Number.MAX_VALUE + 1)); // false
// Because it might have been rounded to it due to overflow
//console.log(Number.isSafeInteger(Number.MAX_VALUE + 10)); // false
