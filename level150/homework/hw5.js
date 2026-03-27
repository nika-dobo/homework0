class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
    console.log(
      `ანგარიშზე შევიდა ${amount}₾. განახლებული ბალანსი: ${this.balance}₾`,
    );
  }

  withdraw(amount) {
    if (amount > this.balance) {
      console.log("ანგარიშზე არასაკმარისი თანხაა!");
    } else {
      this.balance -= amount;
      console.log(`გატანილია ${amount}₾. დარჩენილი ბალანსი: ${this.balance}₾`);
    }
  }
}

const myAccount = new BankAccount("ნინო", 1000);
myAccount.deposit(500);
myAccount.withdraw(300);

console.log(myAccount);
