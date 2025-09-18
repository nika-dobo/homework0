// 5)prompt–ით მომხმარებელს შეეკითხე სამი რიცხვი.

// გამოიყენე if/else რომ იპოვო:

// ყველაზე დიდი რიცხვი

// ყველაზე პატარა რიცხვი

// შემდეგ შეამოწმე:

// თუ ყველაზე დიდი რიცხვი ლუწია → დაბეჭდე "ყველაზე დიდი რიცხვი ლუწია"

// თუ კენტია → "ყველაზე დიდი რიცხვი კენტია"

let num1 = Number(prompt("enter num"));
let num2 = Number(prompt("enter num"));
let num3 = Number(prompt("enter num"));

if (num1 > num2 && num1 > num3) {
  console.log(num1);
  if (num1 % 2 == 0) {
    console.log("ყველაზე დიდი რიცხვი ლუწია");
  } else {
    console.log("ყველაზე დიდი რიცხვი კენტია");
  }
} else if (num2 > num1 && num2 > num3) {
  console.log(num2);
  if (num2 % 2 == 0) {
    console.log("ყველაზე დიდი რიცხვი ლუწია");
  } else {
    console.log("ყველაზე დიდი რიცხვი კენტია");
  }
} else {
  console.log(num3);
  if (num3 % 2 == 0) {
    console.log("ყველაზე დიდი რიცხვი ლუწია");
  } else {
    console.log("ყველაზე დიდი რიცხვი კენტია");
  }
}

if (num1 < num2 && num1 < num3) {
  console.log(num1);
  if (num1 % 2 == 0) {
    console.log("ყველაზე პატარა რიცხვი ლუწია");
  } else {
    console.log("ყველაზე პატარა რიცხვი კენტია");
  }
} else if (num2 < num1 && num2 < num3) {
  console.log(num2);
  if (num2 % 2 == 0) {
    console.log("ყველაზე პატარა რიცხვი ლუწია");
  } else {
    console.log("ყველაზე პატარა რიცხვი კენტია");
  }
} else {
  console.log(num3);
  if (num3 % 2 == 0) {
    console.log("ყველაზე პატარა რიცხვი ლუწია");
  } else {
    console.log("ყველაზე პატარა რიცხვი კენტია");
  }
}
