
// // Operators

// let number = 1;
// // unary make number negative 
// number = -number;
// console.log(number);

// let num1 = 5;
// let num2 = 4;
// console.log(num1 - num2)
// // Remainder operator
// console.log(num1%num2);
// // Exponential operator
// console.log(num1**num2);

// String concatation with + operator
console.log("Maham" + "Jabbar");
// Here, operators work one after another. The first + sums two numbers, so it returns 8, then the next + adds the string 3 to it, so it’s like 8 + '3' = '83'.
console.log(4 + 4 + '3');
// Here, the first operand is a string, the compiler treats the other two operands as strings too. The 2 gets concatenated to '4', so it’s like '4' + 4 = "44" and "44" + 3 = "443".
console.log('4' + 4 + 3);

// Numeric conversion using unary +
let apples = "2";
let oranges = "3";

console.log( apples + oranges ); 
// both values converted to numbers before the binary plus
console.log( +apples + +oranges );

let a = 1;
let b = 2;

let c = 3 - (a = b + 1);

console.log( a ); 
console.log( c ); 

// Chaining assignment
let x,y,z;
z = y = x = 2 + 2;
console.log(x)
console.log(y)
console.log(z)

let n = 2;
n *= 3 + 5; // n = n * 3 + 5   // n = 2 * 8
console.log( n );