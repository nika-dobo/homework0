const users2 = [
  { name: "Nika", age: 20 },
  { name: "Ana", age: 16 },
  { name: "Gio", age: 25 },
];

users2.forEach((user) => {
  if (user.age > 18) {
    console.log(user.name);
  }
});
