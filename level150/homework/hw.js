class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getInfo() {
    return `მანქანა: ${this.brand} ${this.model}, გამოშვების წელი: ${this.year}`;
  }
}

const myCar = new Car("Toyota", "Prius", 2015);
console.log(myCar.getInfo());
