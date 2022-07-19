// Hoisting

// Javascript declarations are hoisted
// Default behaviour
// Moves declarations to the top of the scope (top of page/script)

// What does this mean?
// It means Javascript knows about these declarations before the rest of the code is executed.
// You could assign a value to a variable first and then declare it later.

// Example

// do not code like this
console.log(`My pet's name is ${petName}`);
var petName = 'bill gates';

// This is what happens, the code will refactor like in the execution phase
var petName;
console.log(`My pet's name is ${petName}`);
petName = 'bill gates';


// code like this
var petName = 'bill gates';
console.log(`My pet's name is ${petName}`);

// this will work too
var petName;
petName = 'bill gates';
console.log(`My pet's name is ${petName}`);

// let petName;
// petName = 'bill gates';
// console.log(`My pet's name is ${petName}`);

// console.log(`My pet's name is ${petName}`);
// let petName = 'bill gates';

// Hoisting move declarations to the top of the scope (top of page/script)
// let petName;
// console.log(`My pet's name is ${petName}`);
// petName = 'bill gates';

// const hoisting
// const petName = 'billgates';
// console.log(`My pet's name is ${petName}`);

// Hoisting
// console.log(`My pet's name is ${petName}`);
// const petName = 'billgates';

// Refactor
// const petName;
// console.log(`My pet's name is ${petName}`);
// petName = 'billgates';

// declare const first to make it work
// const petName = 'billgates';
// console.log(`My pet's name is ${petName}`);

// Declare your variables first before you try to do anything with them

// functions are also hoisted

greeting();
function greeting() {
    console.log('hello!')
}


// because of hoisting
function greeting() {
    console.log('hello!')
}

greeting();
