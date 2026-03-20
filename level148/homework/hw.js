const students = [
  { name: "ანა", age: 17, grade: 9 },
  { name: "ლაშა", age: 20, grade: 12 },
  { name: "მარიამი", age: 18, grade: 11 },
  { name: "გიორგი", age: 16, grade: 10 },
];

const adults = students.filter((student) => student.age >= 18);

console.log(adults);
