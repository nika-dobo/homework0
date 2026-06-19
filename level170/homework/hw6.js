// 6)შექმენი ცვლადი:

// const age = 20;

// თუ ასაკი 18 ან მეტია — resolve("Access granted"),
// წინააღმდეგ შემთხვევაში — reject("Access denied").

const age = 20;

const promise = new Promise((resolve, reject) => {
  if (age >= 18) {
    resolve("Access granted");
  } else {
    reject("Access denied");
  }
});

promise.then((result) => {
  console.log(result);
});
promise.catch((error) => {
  console.log(error);
});