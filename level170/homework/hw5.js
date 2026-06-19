// 5)შექმენი ცვლადი:

// const number = 8;

// თუ რიცხვი ლუწია — resolve("Even"),
// თუ კენტია — reject("Odd").

const number = 8;

const promise = new Promise((resolve, reject) => {
  if (number % 2 === 0) {
    resolve("Even");
  } else {
    reject("Odd");
  }
});

promise.then((result) => {
  console.log(result);
});