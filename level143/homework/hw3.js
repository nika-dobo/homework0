// 3)მომხმარებელს შემოატანინე:

// პირველი რიცხვი

// ოპერატორი (+, -, *, /)

// მეორე რიცხვი

// switch–case გამოყენებით შეასრულე ოპერაცია.
// თუ ოპერატორი არასწორია → "არასწორი ოპერატორი".

const num1 = parseFloat(prompt("პირველი რიცხვი:"));
const operator = prompt("ოპერატორი (+, -, *, /):");
const num2 = parseFloat(prompt("მეორე რიცხვი:"));

switch (operator) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "*":
    console.log(num1 * num2);
    break;
  case "/":
    console.log(num1 / num2);
    break;
  default:
    console.log("არასწორი ოპერატორი");
}
