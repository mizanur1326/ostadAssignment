class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited: $${amount} & New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
        } else {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
    }

    getBalance() {
        return this.balance;
    }

    displayAccountInfo() {
        console.log("Account Number:" + this.accountNumber);
        console.log("Owner Name:" + this.ownerName);
        console.log("Balance: $"+this.balance);
    }
}

// Two instances of the BankAccount class
const account1 = new BankAccount(101, "John Doe", 500);
const account2 = new BankAccount(102, "Mizanur Rahman", 1000);

// Function Calling
account1.displayAccountInfo();
account1.deposit(200);
account1.withdraw(1000);
console.log(`Account ${account1.accountNumber} Balance: $`+account1.getBalance());

console.log("\n");


account2.displayAccountInfo();
account2.deposit(300);
account2.withdraw(500);
console.log(`Account ${account2.accountNumber} Balance: $`+account2.getBalance());
