// 4)მომხმარებელს შემოატანინე ქულა (0–100).
// switch(true) <--მოიძიეთ  გამოიყენე და დააბრუნე:

// 90–100 → A

// 80–89 → B

// 70–79 → C

// 60–69 → D

// <60 → F

const score = parseInt(prompt("შეიყვანეთ ქულა (0-100):"));

switch (true) {
  case score >= 90 && score <= 100:
    console.log("A");
    break;
  case score >= 80 && score <= 89:
    console.log("B");
    break;
  case score >= 70 && score <= 79:
    console.log("C");
    break;
  case score >= 60 && score <= 69:
    console.log("D");
    break;
  case score >= 0 && score < 60:
    console.log("F");
    break;
  default:
    console.log("არასწორი ქულა");
}
