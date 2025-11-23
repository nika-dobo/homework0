// 6)შექმენით HTML გვერდი 3 <button> ელემენტით, თითოეული განსხვავებული id-ით (btn1, btn2, btn3).
// -----დაწერეთ JavaScript, რომელიც თითოეული ღილაკის დაჭერისას:
// -----შეცვლის <h2> ელემენტის ტექსტს "Button X clicked!" (X = 1,2,3)
// -----შეცვლის <h2> ფონს განსხვავებულ ფერად, რაც დამოკიდებულია დაჭერილ ღილაკზე.

const header = document.getElementById("header");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");

function clickBtn1() {
  header.textContent = "Button 1 clicked!";
  header.style.backgroundColor = "red";
}

function clickBtn2() {
  header.textContent = "Button 2 clicked!";
  header.style.backgroundColor = "blue";
}

function clickBtn3() {
  header.textContent = "Button 3 clicked!";
  header.style.backgroundColor = "green";
}

btn1.addEventListener("click", clickBtn1);
btn2.addEventListener("click", clickBtn2);
btn3.addEventListener("click", clickBtn3);
