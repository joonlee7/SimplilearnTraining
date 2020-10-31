
function add(val1: number, val2: number): number
function add(val1: string, val2: string): string

function add(val1: any, val2: any): string | number {
    return val1 + val2;
}

console.log(add(10, 20));
console.log(add("Sandi", "Joon"));