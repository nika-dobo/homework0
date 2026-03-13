const users = [
  { name: "Nika", age: 20 },
  { name: "Ana", age: 25 },
  { name: "Gio", age: 17 },
];

const onlyNames = users.map((user) => user.name);

console.log(onlyNames);
