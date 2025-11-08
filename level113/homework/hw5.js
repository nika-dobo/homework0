// 5)შექმენი ობიექტი movie ველებით: name, genre, rating.
// Object.keys() მეთოდის გამოყენებით გამოიტანე ყველა key ცალ ცალკე ხაზზე (for loop)
// ასევე
// Object.values() მეთოდის გამოყენებით გამოიტანე ყველა value ცალ ცალკე ხაზზე (for loop)

let movie = {
  title: "the lord of the rings",
  genre: "Fantasy",
  rating: 8.9,
};

let key = Object.keys(movie);
let value = Object.values(movie);

for (let i of key) {
  console.log(i);
}

for (let i of value) {
  console.log(i);
}
