
abstract class BankAccount {

    welcomeMessage(): void {
        console.log('Welcome to my bank')
    }
    abstract deposit(amount: number): void;
    abstract withdraw(amount: number): void;
    abstract printBalance(): void;
}

/* ALL METHODS INSIDE INTERFACE ARE ABSTRACT */

interface IMyBank {

    openAccount(): void;
    closeAccount(): void;
}

interface IBankAccount extends IMyBank {

    deposit(): void;
    withdraw(): void;
    balance(): void;

}

class SavingsAccount implements IBankAccount {

    openAccount(): void {
        console.log("Successful")
    }

    closeAccount(): void {
        console.log("Successful")
    }

    deposit() {
        console.log("Successful")
    }

    withdraw() {
        console.log("Successful")
    }

    balance() {
        console.log("Successful")
    }
}

class CurrentAccount implements IBankAccount, IMyBank {

    openAccount(): void {
        console.log("Successful")
    }

    closeAccount(): void {
        console.log("Successful")
    }

    deposit() {
        console.log("Successful")
    }

    withdraw() {
        console.log("Successful")
    }

    balance() {
        console.log("Successful")
    }
}

var savingAccount = new SavingsAccount();
savingAccount.deposit();
savingAccount.withdraw();
savingAccount.balance();

var currentAccount = new CurrentAccount();
currentAccount.openAccount()
currentAccount.closeAccount()
currentAccount.deposit();
currentAccount.withdraw();
currentAccount.balance();