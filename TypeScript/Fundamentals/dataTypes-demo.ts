/**
 * Data types in TS:
 *  0. Number
 *  1. String
 *  2. Boolean
 *  3. Array
 *  4. Tuple
 *  5. Enum
 *  6. Union
 *  7. Any
 *  8. Void
 *  9. Never
 */

// var firstName: string = "Joon";
// var lastName: string = "Lee";

// console.log(firstName + " " + lastName);

// var str: string = "Hello TypeScript"
// console.log(str.charAt(0));
// console.log(str.charAt(2));
// console.log(str.charAt(5));

// let str1: string = "Hello";
// let str2: string = "TypeScript";
// console.log(str1.concat(str2));
// console.log(str1.concat(' ', str2));
// console.log(str1.concat(' Mr. ' + 'Bond'));

// --------------------------------------------------

/* Boolean Type */

// var isPresent: boolean = true;
// if (isPresent) {
//     console.log("Good")
// } else {
//     console.log("Bad")
// }

// ---------------------------------------------------

/* Array Type */

// var names: Array<string> = ["John", "Smith", "Karah"];
// console.log(names);

// var values1: Array<string | number> = [101, "John", 102, "Smith"];
// console.log(values1);
// var values2: (string | number)[] = [101, "John", 102, "Smith"];
// console.log(values2);

// var fruits: Array<string> = ["Apple", "Orange", "Banana"];
// fruits.sort();
// console.log(fruits); // [apple, banana, orange]
// console.log(fruits.pop()); // Orange
// fruits.push("Papaya")
// console.log(fruits); //[apple, banana, papaya]
// fruits = fruits.concat(["Fig", "Mango"]);
// console.log(fruits); // [apple, banana, papaya, fig, mango]
// console.log(fruits.indexOf("Papaya")); // 2

// ------------------------------------------------------------

/* Tuple Type - a new data type that can contain two values of different data type in one variable */

// var customerCode: number = 1001;
// var customerName: string = "Joon";
// var customerDetail: [number, string] = [1001, "Joon Lee"]; // Tuple
// console.log(customerDetail);

// var userDetail: [number, string, boolean, number, string]; // declaring tuple
// userDetail = [101, "Joon", true, 26, "Trainee"]; // initializing tuple
// console.log(userDetail)

// var customerDetail: [number, string][];
// customerDetail = [[1001, "Joon Lee"], [1002, "Sandi Lee"], [1003, "Lee Family"]];
// console.log(customerDetail)

// for (var [x, y] of customerDetail) {
//     console.log([x, y])
// }

// var customerDetail: [number, string] = [1001, "Joon Lee"];
// customerDetail.push(1002, "Sandi Lee");
// customerDetail.push(1003, "Lee Family");
// console.log(customerDetail)

// var customerDetail: [number, string] = [1001, "Joon Lee"];
// console.log(customerDetail[0]);
// console.log(customerDetail[1]);
// customerDetail[1] = customerDetail[1].concat(" Something");
// console.log(customerDetail[0]);
// console.log(customerDetail[1]);

// ------------------------------------------------------

/* Union Type */

// var experience: (number | string);
// experience = 2;
// experience = "2 years";
// // experience = false; // compile time error

// function displayType(code: string | number) {
//     if (typeof (code) === "number") {
//         console.log("Code is number");
//     } else {
//         console.log("Code is string");
//     }
// }
// displayType(123);
// displayType("ABC");
// // displayType(true); //compile time error

// ---------------------------------------------------

/* Any Type */

// var value: any = "Something here...";
// value = 123;
// value = true;
// console.log(value)

// ----------------------------------------------------

/* Void Type */

// function sayHello(): void {
//     console.log("Hello Sandi booby baby");
// }

// function sayBye(): string {
//     return "Bye Sandi baby booby";
// }

// sayHello();
// console.log(sayBye());
// var value: void = undefined;
// var value: void = null;
// // var value: void = 1; //void only works with undefined or null

// ----------------------------------------------------

/* Never Type: cannot have any value ever */

// var value1: void = null;
// var value2: number = 100;
// var value3: never; // no assignment
// var value4: never = ; // error

// function throwEror(errorMessage: string) {
//     throw new Error(errorMessage);
// }

// ----------------------------------------------------

/**
 * Enum Type:
 *  1. String Enum
 *  2. Numeric Enum
 *  3. Heterogenous Enum
 */

// enum Direction1 {
//     north,   //0
//     south,   //1
//     east,    //2
//     west     //3
// }

// enum Direction2 {
//     north = 10,   //10
//     south,        //11
//     east,         //12
//     west          //13
// }

// enum Direction3 {
//     north = 100,   //10
//     south = 200,   //11
//     east = 250,    //12
//     west = 300     //13
// }

// enum Direction4 {
//     north = "N",   //10
//     south = "S",   //11
//     east = "E",    //12
//     west = "W"     //13
// }

// enum Direction5 {
//     north = "N",   //10
//     south = "S",   //11
//     east = 200,    //12
//     west = 300     //13
// }
// console.log(Direction4.south);
// console.log(Direction4["east"]);
// console.log(Direction5[200]);

