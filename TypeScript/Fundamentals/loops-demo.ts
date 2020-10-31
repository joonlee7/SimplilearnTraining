
/**
 * TypeScript supports five types of loops:
 *  1. for => iterates based upon the iteration variable
 *  2. for...of => iterates the elements of collections
 *  3. for...in => iterates the index elements
 *  4. while => iterates based upon the iteration variable
 *  5. do...while => iterates based upon the iteration variable OR user choice
 */

// for (var i = 1; i <= 5; i++) {
//     console.log("Hello everybody " + i);
// }
// console.log(i);

// var i: number = 7;
// while (i <= 10) {
//     console.log(i);
//     i = i + 1;
// }

// var i: number = 100;
// do {
//     console.log(i);
//     i++;
// } while (i <= 105)

/**
 * for...of => iterates the elements of collections
 * for...in => iterates the index elements
*/

var values = [10, 20, 30, 40, 50];

for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}

console.log("----------------------");

for (var val1 of values) {
    console.log(val1);
}

console.log("----------------------");

for (var val2 in values) {
    console.log(val2 + " : " + values[val2]);
    // console.log(val2);
    // console.log(values[val2]);
}