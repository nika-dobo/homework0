store = {
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

const { h = "hi", name: storeName, ...all } = store;

console.log(storeName);
console.log(all);
