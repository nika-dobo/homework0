const index6 = employees.findIndex(
  (emp) => emp.department === "IT" && emp.salary < 1500 && emp.age < 30,
);

console.log("ინდექსი:", index6);
console.log("ობიექტი:", employees[index6]);
