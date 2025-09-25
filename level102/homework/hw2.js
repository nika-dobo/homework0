// 2)ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.

// დააბრუნოს შედეგი.

let num1 = Number(prompt("enter num"));
let num2 = Number(prompt("enter num"));
let num3 = Number(prompt("enter num"));

function bigest(a, b, c) {
  if (a >= b && a >= c) {
    console.log(a);
  } else if (b >= a && b >= c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

bigest(num1, num2, num3);
