const wellPaidEmployee = employees.find((emp) => emp.salary > 1500);

if (wellPaidEmployee) {
  console.log(
    `სახელი: ${wellPaidEmployee.name}, ანაზღაურება: ${wellPaidEmployee.salary}`,
  );
}
