// 7)Promise-მა დააბრუნოს 5, ხოლო then-ში გააორმაგე და დაბეჭდე.

// შედეგი:

// 10

const promise = new Promise((resolve, reject) => {
  resolve(5);
});

promise.then((result) => {
  console.log(result * 2);
});