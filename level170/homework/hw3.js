// 3)Promise-მა დააბრუნოს "JavaScript", ხოლო then-ში დაუმატე " is awesome" და დაბეჭდე.

const promise = new Promise((resolve, reject) => {
  resolve("JavaScript");
});

promise.then((result) => {
  console.log(result + " is awesome");
});
