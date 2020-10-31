
/**
 * Variables can be declared by using:
 *      -Var
 *      -Let
 *      -Const
 * 
 * let & const are block scoped
 * var variables can be defined and redefined/updated
 * var can be accessed before declaration (hosting)
 * const cannot be reassigned
 */

// var value = 100
// function func() {
//     if (true) {
//         value = 200;   // local variable(scope ends when curly brace ends)
//         console.log(value);
//     }
//     console.log(value)
// }

// func();
// console.log(value);   // error



// function func() {
//     if (true) {
//         let value = 200;   // local variable(scope ends when curly brace ends)
//         console.log(value);
//     }
//     console.log(value) // error
// }
// func();
// console.log(value);   // error


const value = 100
function func() {
    if (true) {
        // value = 200;   // error because const cannot be changed
        console.log(value);
    }
    console.log(value)
}

func();
console.log(value);