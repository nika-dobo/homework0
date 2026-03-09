const car = {
  brand: "BMW",
  model: "M5",
  engine: {
    type: "V8",
    power: {
      hp: 600,
      torque: 750,
    },
  },
};

const {
  brand,
  model,
  engine: {
    type,
    power: { hp, torque },
  },
} = car1;

console.log(brand);
console.log(model);
console.log(type);
console.log(hp);
console.log(torque);

// დესტრუქციის გამოყენებით გამოიტანე:

// brand

// model

// engine type

// hp

// torque
