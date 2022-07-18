// 4 ways declare a Javascript variable
// Using var, let, const, do nothing

// var is the precursor to the new ES6 declarative statements
var a = 1;
a = 2;
console.log(a);

// let 
let b = 2;
b = 3;
console.log(b);
// let b =4;

const myName = 'Pang';
console.log(myName)
// myName = 'PangPang';

// Const declarations must be initialised
// const name;


// We should avoid this because...
// It's a global variable
// accidental mutation (not secure)
// name collisions
myOtherName = 'PangS';
console.log(myOtherName)

// Scoping example using let, var, const
// Scoping
// var : function scoped or globally scoped
// let : block scoped
// const: block scoped
// do nothing : global

function myFunction() {
    // this is the function
    // this is the outer block
    let b = 'B'; // block scoped
    const c = 'C'; // block scoped
    if (true) {
        // this is the inner block
        var a = 'A'; // var is function scoped

        console.log(a);
        console.log(b);
        console.log(c);
    }
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunction();