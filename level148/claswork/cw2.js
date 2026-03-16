// 2)შექმენით სია სადაც მოათავსებთ რიცხვებს,შენიდ ავალებაა რომ გაიგო სიაშ პირველი შემხვედრი ელემენტის ინდექსი რომელიც დააკმაყოფილებს შემდეგ პირობას ==>

// თუ რიცხვი არის ლუწი ან (არის 50ზე მეტი და 100 ზე ნაკლები)

const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 101,
  102, 103, 104, 105, 106, 107, 108, 109, 110,
];

const result = numbers.findIndex(
  (number) => number % 2 === 0 || (number > 50 && number < 100),
);
console.log(result);

const result2 = numbers.findIndex((number) => {
  return number % 2 === 0 || (number > 50 && number < 100);
});
console.log(result2);
