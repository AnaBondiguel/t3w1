console.log(11+1); // 12
console.log(11-1); // 10

console.log('11' + 1); // 111
console.log('11' - 1); // 10

// Javascript is a dynamically typed language
// It means you don't have to specify types every time
// Javascript will interpret the type of variable

// In console.log('11' + 1); JS sees '11' as a string. 
// Then it sees '+', something is going to be added to a string.
// Javascript sees that it's like a rule and converts 1 to a 1 string.
// '11' + '1' = '111'

// console.log('11' - 1); JS sees '11' as a string. 
// Then '-' doesn't make sense to substract from a string
// It turns '11' -> 11  for it to make sense 
// 11 - 1 = 10