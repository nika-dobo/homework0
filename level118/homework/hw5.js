// 5)შექმენით HTML გვერდი <form> ელემენტით, რომელიც შეიცავს input ველს და submit ღილაკს.
// -----დაწერეთ JavaScript ფუნქცია, რომელიც ფორმის გაგზავნისას შეამოწმებს input ველს:
// ----- თუ ველი ცარიელია → გამოჩნდება შეცდომის შეტყობინება input ველის გვერდით.
// -----თუ ველი არაა ცარიელი → გამოჩნდება alert ს Mensagem-ით "Form submitted!".

let form = document.getElementById("myForm");
let inp = document.getElementById("myInput");

function fun(event) {
  event.preventDefault();
  if (inp.value !== "") {
    alert("Form submitted!");
  } else {
    alert("error");
  }
}

form.addEventListener("submit", fun);
