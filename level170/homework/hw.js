// 1)შექმენი Promise, რომელიც აბრუნებს "Hello World"-ს resolve-ით და დაბეჭდე შედეგი then-ის საშუალებით.

const promise = new Promise((resolve, reject) => {
  resolve("Hello World");
});

promise.then((result) => {
  console.log(result);
});


