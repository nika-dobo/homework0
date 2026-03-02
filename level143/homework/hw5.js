// 5)მომხმარებელს შემოატანინე ტექსტი:
// "car", "bus", "bike", "train"

// switch–case გამოყენებით დაბეჭდე შესაბამისი აღწერა.
// default შემთხვევაში → "უცნობი ტრანსპორტი".

const transport = prompt("შეიყვანეთ ტრანსპორტი (car, bus, bike, train):");

switch (transport) {
  case "car":
    console.log("მანქანა — 4 ბორბლიანი პირადი ტრანსპორტი");
    break;
  case "bus":
    console.log("ავტობუსი — საზოგადოებრივი ტრანსპორტი");
    break;
  case "bike":
    console.log("ველოსიპედი — ორბორბლიანი, ეკოლოგიური");
    break;
  case "train":
    console.log("მატარებელი — რელსებზე მოძრავი");
    break;
  default:
    console.log("უცნობი ტრანსპორტი");
}
