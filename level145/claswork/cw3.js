const user = [
  {
    name: "nika",
    surname: "nishnianidze",
    address: {
      city: {
        street: "beliashvili",
      },
      country: "Georgia",
    },
  },
];

const [
  {
    name,
    surname,
    address,
    address: {
      city,
      city: { street },
      country,
    },
  },
] = user;

console.log(name, surname, address, city, street, country);
