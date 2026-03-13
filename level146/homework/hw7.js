const products = [
  { name: "Phone", price: 1000 },
  { name: "Laptop", price: 2000 },
];

const discountedProducts = products.map((product) => {
  return {
    ...product,
    price: product.price * 0.9,
  };
});

console.log(discountedProducts);
