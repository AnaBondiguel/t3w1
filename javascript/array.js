// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

// Javascript arrays are resizable and can contain a mix of different data types

// One way to create a Javascript array
// This array only has numbers so it's not mixed
// The literal way
let numberArray = [0, 1, 2, 3];

// Another way to create an array in Javascript
// Create new instance of the Array class
let numberArray2 = new Array(0, 1, 2, 3);

// This is a mixed array
let mixedArray = [1, 'cat', true];
console.log(numberArray);
console.log(numberArray2);
console.log(mixedArray);

// Javascript arrays accessed using indexes
// Javascript arrays are zero-indexed

let fruits = ['mango', 'nashi', 'tomato'];
console.log(fruits[0]);

// Change mango to watermelon
fruits[0] = 'watermelon';
console.log(fruits[0]);

console.log(fruits[3]);

fruits[5] = 'banana';
console.log(fruits);
// A new value can be assigned to an unused index of an array
// The gaps will be undefined
console.log(fruits[3]);
console.log(fruits[4]);

// Nested Arrays

let shoppingList = [
    ['Apple', 'Orange', 'Banana'], // index = 0
    ['Strawberry', 'Lychee', 'Raspberry'], // index = 1
    ['Potato', 'Broccoli', 'Celery', 'Carrot'] // index = 2
];

console.log(shoppingList[1])
console.log(shoppingList[1][0])

console.log(shoppingList.length)
console.log(shoppingList[2].length)

// Reverse an array
const numbers = [3, 2, 1];
numbers.reverse();
console.log(numbers);
numbers.reverse();
console.log(numbers);

// For each
let values = [7, 21, 23, 44, 1];

let sumOfValues = 0;

// Do something
values.forEach(element => sumOfValues += element);

console.log(sumOfValues);