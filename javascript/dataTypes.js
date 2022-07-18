// Data types
// Boolean
// Number
// BigInt
// String 
// Null 
// Undefined
// Symbol , Object (later)


// Boolean : two possible values (true, false)
let isTrue = true;
let isFalse = false;
console.log(isTrue);
console.log(isFalse);
console.log(typeof isTrue);

// Number
let pos = 9;
console.log(pos);
let neg = -9;
console.log(neg);
let decimal = 9.9;
console.log(decimal);

let bigNum = 999999999999999;
console.log(bigNum);

// 64-bit floats
let biggerNum = 9999999999999999;
console.log(biggerNum);

console.log(Number.MAX_SAFE_INTEGER);
// BigInt
let bigIntNum = 9999999999999999n;
console.log(bigIntNum);

let myBigNum = 1312321321;
console.log(Number.MAX_SAFE_INTEGER === Number.MAX_SAFE_INTEGER)

console.log(Number.MAX_SAFE_INTEGER+1 === Number.MAX_SAFE_INTEGER+2)


// Any number larger than 2^53-1 or less than -(2^53-1) 
// you have to append 'n' to the end
// Because Javascript numbers are 64-bit floats, and so we should convert it to a bigint


// STRINGS
let greeting = "Hi!";
let message = "You are doing great! Keep studying!";
console.log(greeting);
console.log(message);

let petName = 'Busta';
let mood = 'lazy';

console.log(`Your pet ${petName} is ${mood}!`);

let displayText = 'Your pet ' + petName + ' is ' + mood + '!';
console.log(displayText)

// The concat() method concatenates the string arguments to the calling string 
// and returns a new string.
console.log('I like cakes and '.concat('cookies.'))

const option1 = 'Do you like cakes';
const option2 = 'or cookies?';
console.log('Hey! '.concat(option1, ' ', option2));

// Undefined means its undefined for now but should be some value in there
let undeclaredVariable = undefined;

// Null. there is no value, it's empty
let items = null;

console.log(null == undefined);
console.log(items == undeclaredVariable); // True

console.log(items === undeclaredVariable); // False
console.log(typeof items);
console.log(typeof undeclaredVariable);