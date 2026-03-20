const products1 = [
  { name: "ვაშლი", type: "ხილი", price: 2 },
  { name: "სტაფილო", type: "ბოსტნეული", price: 1 },
  { name: "ბანანი", type: "ხილი", price: 3 },
  { name: "კარტოფილი", type: "ბოსტნეული", price: 2 },
  { name: "მანგო", type: "ხილი", price: 5 },
];

const expensiveFruits = products1.filter(
  (product) => product.type === "ხილი" && product.price > 2,
);

console.log(expensiveFruits);
