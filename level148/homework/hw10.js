const employees = [
  { name: "მარიამი", age: 25, department: "IT", salary: 1200 },
  { name: "გიორგი", age: 30, department: "HR", salary: 900 },
  { name: "ანა", age: 22, department: "IT", salary: 1000 },
  { name: "ლაშა", age: 28, department: "Finance", salary: 1500 },
  { name: "ნინო", age: 35, department: "IT", salary: 2000 },
];

const index10 = employees.findIndex(
  (emp) =>
    emp.department === "IT" &&
    emp.age < 30 &&
    emp.salary < 1500 &&
    emp.name.startsWith("ა"),
);

console.log("ინდექსი:", index10);
console.log("ობიექტი:", employees[index10]);
