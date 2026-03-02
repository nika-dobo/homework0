// 8)მომხმარებელს შემოატანინე ფერი:
// "red", "green", "blue"

// switch–case-ით დაბეჭდე შესაბამისი ტექსტი.
// თუ სხვა ფერია → default →
// "ასეთი ფერი სისტემაში არ არის"

const color = prompt("შეიყვანეთ ფერი (red, green, blue):");

switch (color) {
  case "red":
    console.log("თქვენ აირჩიეთ წითელი ფერი");
    break;
  case "green":
    console.log("თქვენ აირჩიეთ მწვანე ფერი");
    break;
  case "blue":
    console.log("თქვენ აირჩიეთ ლურჯი ფერი");
    break;
  default:
    console.log("ასეთი ფერი სისტემაში არ არის");
}
