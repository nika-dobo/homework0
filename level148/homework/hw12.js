const products2 = [
    { name: "ვაშლი", price: 2 },
    { name: "ბანანი", price: 3 },
    { name: "სტაფილო", price: 1 }
];

const totalPrice = products2.reduce((acc, product) => acc + product.price, 0);

console.log(totalPrice);