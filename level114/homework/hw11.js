// 10)შექმენი ობიექტი student, რომელსაც ექნება "firstName", "lastName", "class", "id".
// ყველა იყოს სტრინგი.
// for...in ციკლით გამოიტანე მხოლოდ ის value-ები, რომელთა სიგრძე ტოლია 3-ის.

let student = {
  "firstName": "Nika",
  "lastName": "Dobo",
  "class": "12c",
  "id": "12345"
};

for (let i in student) {
  if (student[i].lenght = 3) {
    console.log(student[i]);
  }
}
