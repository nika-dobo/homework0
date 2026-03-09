// 1)მოცემულია ობიექტი:

const company = {
  name: "TechCorp",
  location: {
    country: "Georgia",
    city: {
      name: "Tbilisi",
      street: "Rustaveli",
    },
  },
  employees: [
    { name: "Nika", age: 22 },
    { name: "Giorgi", age: 25 },
  ],
};

const {
  name: companyName,
  location: {
    country, 
    city: { name: cityName }, 
  },
  employees: [
    { name: emp1Name }, 
    { age: emp2Age },
  ],
} = company;

console.log(companyName);
console.log(country);
console.log(cityName);
console.log(emp1Name);
console.log(emp2Age);

// დესტრუქციის გამოყენებით ერთ ლაინში გამოიტანე კონსოლში:

// company name

// country

// city name

// street

// პირველი employee-ს name

// მეორე employee-ს age
