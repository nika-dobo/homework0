// 6)შექმენი ობიექტი person, რომელსაც ექნება "name", "age" და "city".
// for...in ციკლით გამოიტანე თითოეული key და მისი value.

let person = {
  name: "Nika",
  age: 16,
  city: "Tbilisi",
};

for (let i in person) {
  console.log(i);
  console.log(person[i]);
}
