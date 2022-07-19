// Javascript has different kind of loops
// while
// do/while
// for
// for/in
// for/of

// while loop
// syntax is...
// while (condition)
//     statement

// Simple while loop that counts up to 3
// let number = 0;

// while (number < 4) {
//     console.log(number);
//     number++; // increments the number by 1
// }

// Do while
// syntax...

// do
//  statement
// while(condition);

// Simple do..while statement
// let number = 0;

// do {
//     console.log(number);
//     number++; 
// } while (number < 4);

// Differences with while and do.. while
// Do while statements is executed at least once because 
// the while condition is written at the bottom
// The do... while loop syntax has 'do' and semicolon at the end.

// for
// for/in
// for/of

// Simple for loop that counts up to 3.
// for (let i = 0; i < 4; i++) {
//     console.log(i)
// }

// let i = 0 is the initialization (this is executed once before the code block)
// i < 4 is the stopping condition 
// i++ is executed on each iteration, it updates the iterator each time the loop is done

// Reverse loop print out: 3, 2, 1, 0

// i < 0 checks that 3 < 0 which is FALSE!
// So the for loop doesn't print out anything
// for (let i = 3; i < 0; i-=1) {
//     console.log(i);
// }

// i >= 0 works it checks 3 >= 0 and that is TRUE!
// i-- and i-=1 works , it's the same.
// for (let i = 3; i >= 0; i--) {
//     console.log(i);
// }

// The 3 statements are optional!

// Example of the first statement being ommitted out
// Instead, declare i before the loop
// let i = 0;
// for (; i < 4; i++) {
//     console.log(i);
// }

// Example of the second element being ommitted out
// for (let i = 0;; i++) {
//     console.log(i);
//     // Add some code here
//     if (i >= 3) {
//         break;
//     }
// }

// Example of removing all three statements
// let i = 0;
// for(;;) {
//     if (i>3) {
//         break;
//     }
//     console.log(i);
//     i++;
// }

// What should we consider instead? WHILE LOOP
// let i = 0;
// while (i <= 3) {
//     console.log(i);
//     i++;
// }


// For loop
// Example of two iterating variables

// [1, 2, 3, 4, 5, 6]
// We want to print:
// 1, 6
// 2, 5
// 3, 4

// const arr = [1, 2, 3, 4, 5, 6];
// let rightIndex = arr.length-1; // 5
// for (let left=0, right=rightIndex; left < right; left++, right--) {
//     console.log(arr[left], arr[right]);
// }

// for in, what do we use for in loops for?
// const pet = {nickName: 'peanut butter', animal:'dog', age: 1.5}
// for (const k in pet) {
//     console.log(`${k}: ${pet[k]}`);
// }
// use for in for objects!


// for of
// What is for of used on? ARRAYS!
// const array1 = ['a', 'b', 'c'];
// for (const e of array1) {
//     console.log(e);
// }

const string = 'hello'
for (i in string) {
    console.log(string.charAt(i));
}