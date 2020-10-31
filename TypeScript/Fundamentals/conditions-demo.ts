
// var num: number = 100;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// }

// var num: number = 100;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// var age: number = 19;
// if (age >= 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not eligible to vote.");
// }

/**
 * Turnery Operator (Conditional Operator): shortcut of if...else statement
 * (condition) ? (true-expression) : (false-expression)
 */

var age: number = 17;
var result: any = (age >= 18) ? "You are eligible to vote." : "You are not eligible to vote."
console.log(result);

var num: number = 0;
result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(result);

num = 100;
result = (num > 0) ? "Positive" : (num < 0) ? "Negative" : "Zero";
console.log(result);