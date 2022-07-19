// What is a control flow?

// Control flow is basically the order of statements executed in a program.
// E.g. Left to right and top to bottom

// How to we change the control flow?
// We can use control structures like: if, else if, else and switch statements.

//if, else if, else

let age = 13;

if (age >= 20) {
    console.log("You're an adult");
} else if (age < 20 && age >= 13) {
    console.log("You're a teenager");
} else {
    console.log("You're a kid!");
}

// Ternary operators
// (CONDITION) ? (EXPRESSION If True) : (EXPRESSION If False);

let weather = "cold";
let clothing = (weather === "hot") ? ("singlet") : ("jacket");
console.log(`It is ${weather}, wear a ${clothing}!`);

// let age = 13;
// let message = (age >= 20) ? ("You're an adult") : ("You're NOT an adult");
// console.log(message);

// Switch
let animal = 'moose';

switch (animal) {
    case 'cow': // is animal a moose?
        console.log('Moo!'); 
        break;
    case 'moose': // is animal a moose?
        console.log('*Grunts*'); // yes!
        break;
    case 'cat':
        console.log('Meow!');
        break;
    case 'dog':
        console.log('Woof!');
        break;
    default:
        console.log(`No sound for ${animal}.`)
}

console.log("What happens if you forget a break?")
// let animal = 'moose';

// switch (animal) {
//     case 'cow': // is animal a cow?
//         console.log('Moo!'); 
//         // break;
//     case 'moose': // is animal a moose?
//         console.log('*Grunts*'); 
//         // break; // BUT! we forgot to write break;
//     case 'cat': // Since we forgot it, the cases will run regardless if the criteria was met
//         console.log('Meow!');
//         // break;
//     case 'dog':
//         console.log('Woof!'); // yes!
//         // break;
//     default:
//         console.log(`No sound for ${animal}.`)
// }

// DON'T FORGET BREAK!


console.log("Can I put a default between cases?")

// let animal = 'zebra';

// switch (animal) {
//     case 'cow':
//         console.log('Moo!'); 
//         break;
//     case 'moose':
//         console.log('*Grunts*');
//         break;
//     default:
//         console.log(`No sound for ${animal}.`)
//         // // BUT! we forgot to write break;
//     case 'cat': // condition doesn't matter
//         console.log('Meow!');
//         break; // see you later!
//     case 'dog':
//         console.log('Woof!');
//         break;
// }

// As you can see from the previous examples, if you forget a break then the code will fall through
// This is a technique called fall-through

console.log("Fall-through")
// let animal = 'puppy';

// switch (animal) {
//     case 'cow': // is animal a moose?
//         console.log('Moo!'); 
//         break;
//     case 'moose': // is animal a moose?
//         console.log('*Grunts*'); // yes!
//         break;
//     case 'cat':
//         console.log('Meow!');
//         break;
//     case 'puppy':
//     case 'sugar glider':
//     case 'dog': 
//         console.log('Woof!');
//         break;
//     default:
//         console.log(`No sound for ${animal}.`)
// }