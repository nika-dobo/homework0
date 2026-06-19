// 2)შექმენი Promise, რომელიც resolve-ით აბრუნებს რიცხვს 10 და then-ში დაბეჭდე.

const promise = new Promise((resolve, reject) => {
  resolve(10);
});

promise.then((result) => {
  console.log(result);
});