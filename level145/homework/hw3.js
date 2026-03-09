const store = {
  name: "MegaShop",
  address: {
    city: "Batumi",
    location: {
      street: "Chavchavadze",
      number: 10,
    },
  },
  products: [
    {
      name: "Laptop",
      price: 2500,
    },
    {
      name: "Phone",
      price: 1200,
    },
  ],
};

const {
  name: storeName,
  address: {
    city,
    location: { street },
  },
  products: [{ name: firstName }, { price }],
} = products1;

console.log(storeName);
console.log(city);
console.log(street);
console.log(firstName);
console.log(price);

// დესტრუქციით გამოიტანე:

// store name

// city

// street

// first product name

// second product price
