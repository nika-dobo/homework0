// 4)შექმენი Promise, რომელიც reject-ს იძახებს ტექსტით "Something went wrong".

const promise = new Promise((resolve, reject) => {
  reject("Something went wrong");
});

promise.catch((error) => {
  console.log(error);
});