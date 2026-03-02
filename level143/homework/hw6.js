// 6)მომხმარებელს შემოატანინე რიცხვი.
// switch(true) გამოყენებით განსაზღვრე:

// თუ არის 0

// თუ არის ლუწი

// თუ არის კენტი

const num = parseInt(prompt("შეიყვანეთ რიცხვი:"));

switch (true) {
  case num === 0:
    console.log("რიცხვი არის 0");
    break;
  case num % 2 === 0:
    console.log("რიცხვი არის ლუწი");
    break;
  case num % 2 !== 0:
    console.log("რიცხვი არის კენტი");
    break;
  default:
    console.log("არასწორი მონაცემი");
}
