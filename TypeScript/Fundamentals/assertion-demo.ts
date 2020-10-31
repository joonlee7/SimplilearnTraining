
// var value: any = 100;
// // var moreValue = value;
// var moreValue = <number>value;

// console.log(value);
// console.log(moreValue);

// console.log(typeof (value));
// console.log(typeof (moreValue));

// var customer = {};
// // customer.customerCode = 1001; // compile time error
// // customer.customerName = "Joon Lee" // compile time error

interface Customer {
    customerCode: number;
    customerName: string;
    customerAge: number;
}

var customer1 = <Customer>{customerCode: 1001, customerName: "Joon Lee", customerAge: 26};
var customer2 = <Customer>{customerCode: 1002, customerName: "Sandi Lee", customerAge: 3};
console.log(customer1);
console.log(customer2);

