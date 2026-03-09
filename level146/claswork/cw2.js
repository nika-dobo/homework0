const numbers = [5, 10, 15, 20];

numbers.forEach((num) => {
  if (num % 2 == 0) {
    console.log(num ** 2);
  }
});

const users = [
  { name: "Nika", age: 20 },
  { name: "Ana", age: 25 },
  { name: "Gio", age: 17 },
];

users.forEach((info) => {
  console.log(
    `name is ${info.name} and his age in 15 year be ${info.age + 15}`,
  );
});
