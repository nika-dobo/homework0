// 2)შექმენით HTML გვერდი <button> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <button> ელემენტის ფონს წითლად და ტექსტის ფერს – თეთრად.

let btn = document.getElementById("btn");

function click() {
  btn.style.backgroundColor = "red";
  btn.style.color = "withe";
}

btn.addEventListener("click", click);
