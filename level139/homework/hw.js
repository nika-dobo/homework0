// 1)შექმენი ფუნქცია checkNumber(num)

// პარამეტრი: num

// თუ რიცხვი დადებითია → დააბრუნოს "Positive"

// თუ უარყოფითია → "Negative"

// თუ 0-ია → "Zero"

// გამოიყენე ternary operator

const checkNumber = (num) => {
  return num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
};

console.log(checkNumber(10));
console.log(checkNumber(-5));
console.log(checkNumber(0));
