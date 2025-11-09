// 13)შექმენი ობიექტი car, რომელსაც ექნება "brand" და "model".
// ობიექტში დაამატე ფუნქცია სახელად fullName, რომელიც დააბრუნებს შემდეგნაირ ტიპის ტექსტს ---> `მე მყავს ... რომლის მოდელიც არის ...` ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let car = {
  brand: "Toyota",
  model: "Corolla",
};

car.fullName = function fullName() {
  return `მე მყავს ${this.brand} რომლის მოდელიც არის ${this.model}`;
};


console.log(car.fullName());