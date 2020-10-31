
// /**
//  * 
//  */

// abstract class BankAccount {

//     welcomeMessage(): void {
//         console.log('Welcome to my bank')
//     }
//     abstract deposit(amount: number): void;
//     abstract withdraw(amount: number): void;
//     abstract printBalance(): void;
// }

// class Savings extends BankAccount {

//     deposit() {
//         console.log('Deposit into savings account.')
//     }
//     withdraw() {
//         console.log('Withdraw from savings account.')
//     }
//     printBalance() {
//         console.log('Your current savings account balance is: ')
//     }
// }

// class Checking extends BankAccount {

//     deposit() {
//         console.log('Deposit into checking account.')
//     }
//     withdraw() {
//         console.log('Withdraw from checking account.')
//     }
//     printBalance() {
//         console.log('Your current checking account balance is: ')
//     }
// }

// var savingsAccount = new Savings();
// savingsAccount.welcomeMessage();
// savingsAccount.deposit();
// savingsAccount.withdraw();
// savingsAccount.printBalance();
// console.log('--------------------------')
// var checkingAccount = new Checking();
// checkingAccount.welcomeMessage();
// checkingAccount.deposit();
// checkingAccount.withdraw();
// checkingAccount.printBalance();


