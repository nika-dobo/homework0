const user = {
  name: "Nika",
  surname: "Beridze",
  address: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Pekini",
    },
  },
};

const {
  name: userName,
  surname,
  address: {
    country,
    city: { name: cityName, street },
  },
} = user1;

console.log(userName);
console.log(surname);
console.log(country);
console.log(cityName);
console.log(street);

// 📌 დესტრუქციის გამოყენებით გამოიტანე:

// name

// surname

// country

// city name

// street
