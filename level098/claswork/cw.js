let cifri = Number(prompt("enetr number"));

if (cifri > 0 && cifri % 2 == 0) {
  console.log("this number is positive and Even");
} else if (cifri < 0 && cifri % 2 != 0) {
  console.log("this number is Odd");
} else {
  console.log("This number is zero");
}
