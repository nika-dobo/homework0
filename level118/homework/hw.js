// 1)შექმენით HTML გვერდი <p> ელემენტით. დაწერეთ JavaScript ფუნქცია, რომელიც გამოძახებისას შეცვლის <p> ელემენტის ტექსტს და დააწერს "Hello, DOM!".

let p = document.getElementById("p");
let btn = document.getElementById("btn");

function click() {
  p.textContent = "Hello, DOM!";
}

btn.addEventListener("click", click);
