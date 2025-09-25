// 2)ფუნქციამ მიიღოს სამი რიცხვი (a, b, c) და if else-ებით განსაზღვროს რომელი არის ყველაზე დიდი.

// დააბრუნოს შედეგი.

function bigest(a, b, c) {
  a = Number(prompt("enter num"));
  b = Number(prompt("enter num"));
  c = Number(prompt("enter num"));

  if (a > b && a > c) {
    console.log(a);
  } else if (b > a && b > c) {
    console.log(b);
  } else {
    console.log(c);
  }
}

bigest();
