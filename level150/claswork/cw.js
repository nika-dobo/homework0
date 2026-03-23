class Bank {
  constructor(name, surename, balance) {
    this.name = name;
    this.surename = surename;
    this.balance = balance;
  }

  addMoney(amount) {
    this.balance += amount;
  }
}

const bank = new Bank("John", "Doe", 1000);
bank.addMoney(100);
console.log(bank);
