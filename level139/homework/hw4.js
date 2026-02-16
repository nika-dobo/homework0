const numberStatus = (num) => {
  if (num === 0) return "Zero";

  if (num > 0 && num % 2 === 0) return "Positive Even";
  if (num < 0 && num % 2 === 0) return "Negative Even";
  if (num > 0 && num % 2 !== 0) return "Positive Odd";
  if (num < 0 && num % 2 !== 0) return "Negative Odd";
};


console.log(numberStatus(4));
console.log(numberStatus(-6));
console.log(numberStatus(7));
console.log(numberStatus(-9)); 
console.log(numberStatus(0)); 
