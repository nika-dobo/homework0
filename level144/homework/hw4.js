// შექმენით პიროვნების ობიექტი, რომელსაც აქვს სახელი, გვარი და მისამართი (მისამართი ცალკე ობიექტია და შეიცავს ქალაქსა და ქვეყანას).
// დავალება: დესტრუქციის გამოყენებით მიიღე სახელი, ქალაქი და ქვეყანა.

const person = {
  name: "nika",
  lastName: "dobo",
  address: {
    city: "tbilisi",
    country: "sakartvelo",
  },
};

const {
  name,
  lastName,
  address: { city, country },
} = person;

console.log(name);
console.log(lastName);
console.log(city);
console.log(country);
