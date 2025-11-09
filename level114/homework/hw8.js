// 8)შექმენი ობიექტი student, რომელსაც ექნება "age", "grade", "height", "score" ყველა მათგანს ვალუებად მიანიჭეთ მხოლოდ ნამბერ ტიპის მონაცემები.
// for...in ციკლით გადაუარე ამ ობიექტს და კონსოლში გამოიტანე მხოლოდ ის ვალუები რომელიც მეტია 50 ზე

let student = {
  age: 16,
  grade: 11,
  height: 175,
  score: 95,
};

for (let i in student) {
  if (student[i] > 50) {
    console.log(student[i]);
  }
}
