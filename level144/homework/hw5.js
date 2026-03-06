// შექმენით პროდუქტის ობიექტი, რომელსაც აქვს დასახელება, ფასი და ვალუტა.
// დავალება: შექმენი ფუნქცია, რომელიც პარამეტრში მიიღებს ამ ობიექტს და დესტრუქციის გამოყენებით გამოიყენებს მის კუთვნილებას პროდუქტის ინფორმაციის გამოსატანად.

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
