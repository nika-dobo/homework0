class Calculator {
  constructor() {
    this.display = document.getElementById("display");

    const numbers = document.getElementsByClassName("number");
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].addEventListener("click", () => this.handleNumber(numbers[i]));
    }

    const operators = document.getElementsByClassName("operator");
    for (let i = 0; i < operators.length; i++) {
      operators[i].addEventListener("click", () =>
        this.handleOperator(operators[i]),
      );
    }

    document
      .getElementById("equals")
      .addEventListener("click", () => this.calculate());
    document
      .getElementById("delete")
      .addEventListener("click", () => this.deleteLast());
    document
      .getElementById("clear")
      .addEventListener("click", () => this.clear());
  }

  handleNumber(button) {
    if (this.display.textContent.length >= 11) {
      this.display.textContent = "Error";
      button.disabled = true;

      setTimeout(() => {
        this.display.textContent = "";
        button.disabled = false;
      }, 1000);
      return;
    }
    this.display.textContent += button.textContent;
  }

  handleOperator(operator) {
    this.display.textContent += operator.textContent;
  }

  calculate() {
    this.display.textContent = Function("return " + this.display.textContent)();
  }

  deleteLast() {
    this.display.textContent = this.display.textContent.slice(0, -1);
  }

  clear() {
    this.display.textContent = "";
  }
}

const calculator = new Calculator();
