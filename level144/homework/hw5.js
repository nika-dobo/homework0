const product = {
  name: "ლეპტოპი",
  price: 2500,
  currency: "₾",
};

function displayProductInfo({ name, price, currency }) {
  console.log(`პროდუქტის დასახელება: ${name}`);
  console.log(`ღირებულება: ${price}${currency}`);
}

displayProductInfo(product);
