// 3)შექმენი კლასი Calculator, რომელსაც ექნება მეთოდები:

// add(a, b)
// subtract(a, b)
// multiply(a, b)
// divide(a, b)

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      return "ნულზე გაყოფა არ შეიძლება!";
    }
    return a / b;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 5));
console.log(calc.divide(10, 2));
