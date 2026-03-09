const users = [
  { name: "Nika", age: 20 },
  { name: "Ana", age: 25 },
  { name: "Gio", age: 17 },
];

const newUser = users.map((age) => age.age * 2);

console.log(newUser);
