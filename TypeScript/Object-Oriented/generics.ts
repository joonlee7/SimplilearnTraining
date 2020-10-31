/**
function print1(num: number): number {
    return num;
}

function print2(str: string): string {
    return str;
}

function addition1(num1: number, num2: number): number {
    return num1 + num2;
}

function addition2(str1: string, str2: string): string {
    return str1 + str2;
}

console.log(print1(100));
console.log(print2("Sandi"));

console.log("---------------------")

console.log(addition1(100, 100));
console.log(addition2("Sandi", " Lee"));
*/

function print1<T>(arg: T): T {
    return arg;
}

console.log(print1<string>("Hello World"));
console.log(print1<number>(69));

function addition<T>(arg1: T, arg2: T): T {
    return <any>arg1 + <any>arg2;
}

console.log(addition<number>(69, 420));
console.log(addition<string>("Sandi", " Lee"))