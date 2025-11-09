// 15)შექმენი ობიექტი book, რომელსაც ექნება "title" და "author".ობიექტში დაამატე ფუნქცია სახელად info(),რომელიც დაარეთურნებს შემდეგ ტექსტს --> `ამ წიგნის ავტორი არის ... და ამ წიგნს ქვია ...`  ,გამოიყენე this keyword ი`  ,გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

let book = {
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  info: function() {
    return `ამ წიგნის ავტორი არის ${this.author} და ამ წიგნს ქვია ${this.title}`;
  }
};

console.log(book.info());