class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }
}

const laptop = new Product("ლეპტოპი", 1500, 2);
console.log(`ჯამური ფასი: ${laptop.getTotalPrice()}`);