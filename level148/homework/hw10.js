const index10 = employees.findIndex(
  (emp) =>
    emp.department === "IT" &&
    emp.age < 30 &&
    emp.salary < 1500 &&
    emp.name.startsWith("ა"),
);

console.log("ინდექსი:", index10);
console.log("ობიექტი:", employees[index10]);
