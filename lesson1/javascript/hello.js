console.log("hello world");

// // Variables
// // let, var, const
let colour = "green";
console.log(`My favourite ${colour}`);

// // Numbers
let boxes = 7;
console.log(`Boxes: ${boxes}.`);

let weight = 1.5;
console.log(`Weight: ${weight}.`);

let total = weight * boxes;
console.log(`Total: ${total}.`);

// // Booleans
let isTrue = true;
let isFalse = false;

// Array
let animals = ['monkey', 'fox', 'sugar glider'];
console.log(`${animals}`);

// For loops
for (let animal of animals) {
    console.log(`Animal is ${animal}`)
}

// Else if
for (let animal of animals) {
    console.log(`The ${animal} goes...`);
    if (animal == 'monkey') {
        console.log('oooaaa');
    } else if (animal === 'fox') {
        console.log('ding ding ding');
    } else if (animal === 'sugar glider') {
        console.log('woof!');
    }
}

// Objects vs hashes
let progress = {
    program: "Web development",
    language: "Javascript",
    is_interested: true
};

console.log(progress)

// Function
function greeting(name) {
    console.log(`Welcome back ${name}!`);
}

greeting("Hunter");
greeting("Hardeep");
greeting("Anthony");