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
