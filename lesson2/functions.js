// What is a function?
// It is a reusable block of code 

// Syntax
// function name(parameter1, parameter2) {
    // Write code here to execute
// }

// Example: Adding two numbers together

// function sumOfTwo(num1, num2) {
//     return num1 + num2;
// }

// const result = sumOfTwo(32, 21);
// console.log(result);
// console.log(sumOfTwo(31, 21)); // this also works

// Arrow functions was introduced ES6.
// Cleaner, concise. Writes less memory when we create the function.
// With arrow functions we don't need to write 'function' instead we use => 

// A function expression
// Arrow function with 2 arguments 
// Add 2 numbers together

// const functionName = (parameter1, parameter2) => {
//     // Do something here with the parameters
// };

// const sumOfTwo = (number1, number2) => {
//     return number1 + number2;
// };
// console.log(sumOfTwo(31, 21)); 

// A function expression, with no arguments

// const printHello = () => {
//     console.log('hello');
//     // return 'hello';
// }

// printHello();
// console.log(printHello());

// A function expression, with 1 argument

// const printNumber = number1 => {
//     console.log(number1);
//     // return 'hello';
// }

// printNumber(1, 2);

// Single expression without curly braces , more concise 

// const multiply = (num1, num2) => num1 * num2;
// console.log(multiply(2, 12));

// Anonymous functions do not have a name (unnamed)

// Named function
// function greet() {
//     console.log('hi!')
// }
// greet();

// Syntax of anonymous function

/*
function () {
    // Function body
}
*/

// const greet = function () {
//     console.log('hi!!!')
// }
// greet();

// Functions that don't return a value is undefined

function Foo() {

}
let foo = Foo();
console.log(foo);

