// 4)შექმენი ფუნქცია numberStatus(num)

// თუ ლუწი და დადებითია → "Positive Even"

// თუ ლუწი და უარყოფითია → "Negative Even"

// თუ კენტი და დადებითია → "Positive Odd"

// თუ კენტი და უარყოფითია → "Negative Odd"

// თუ 0 → "Zero"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

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
