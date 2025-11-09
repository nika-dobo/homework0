// 9)შექმენი ობიექტი fruit, რომელსაც ექნება "name", "color", "taste", "size".
// ყველას მიანიჭე სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომლებიც იწყება ასო "a"-ზე.

let fruit = {
  name: "Apple",
  color: "Red",
  taste: "Sweet",
  size: "Medium",
};

for (let i in fruit) {
  if (fruit[i][0] == "a") {
    console.log(fruit[i]);
  }
}
