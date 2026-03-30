const number1 = document.getElementById("num1");
const number2 = document.getElementById("num2");
const addBtn = document.getElementById("add");
const subtractBtn = document.getElementById("subtract");
const multiplyBtn = document.getElementById("multiply");
const divideBtn = document.getElementById("divide");

class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

const calc = new Calculator();

addBtn.addEventListener("click", () => {
  calc.num1 = Number(number1.value);
  calc.num2 = Number(number2.value);
  console.log(calc.add());
});

subtractBtn.addEventListener("click", () => {
  calc.num1 = Number(number1.value);
  calc.num2 = Number(number2.value);
  console.log(calc.subtract());
});

multiplyBtn.addEventListener("click", () => {
  calc.num1 = Number(number1.value);
  calc.num2 = Number(number2.value);
  console.log(calc.multiply());
});

divideBtn.addEventListener("click", () => {
  calc.num1 = Number(number1.value);
  calc.num2 = Number(number2.value);
  console.log(calc.divide());
});
