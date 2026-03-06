const obj = {};

const {
  firstName = prompt("შეიყვანეთ თქვენი სახელი:"),
  lastName = prompt("შეიყვანეთ თქვენი გვარი:"),
  age = 17,
  mail = "sadasda@gamil.com",
} = obj;

console.log(firstName, lastName, age, mail);
