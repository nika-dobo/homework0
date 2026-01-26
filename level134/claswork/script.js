let numbers = document.getElementsByClassName("num");
let delet = document.getElementById("del");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let dot = document.getElementById("dot");
let gayofa = document.getElementById("gayofa");
let x = document.getElementById("x");
let reset = document.getElementById("reset");
let equal = document.getElementById("equal");

let result = document.getElementById("res");

let fin = "";

for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", function (e) {
    fin += numbers[i].textContent;
    result.textContent = fin;
  });
}

plus.addEventListener("click", function () {
  fin += "+";
  result.textContent = fin;
});
minus.addEventListener("click", function () {
  fin += "-";
  result.textContent = fin;
});
x.addEventListener("click", function () {
  fin += "*";
  result.textContent = fin;
});
dot.addEventListener("click", function () {
  fin += ".";
  result.textContent = fin;
});
gayofa.addEventListener("click", function () {
  fin += "/";
  result.textContent = fin;
});
delet.addEventListener("click", function () {
  fin = fin.slice(0, -1);
  result.textContent = fin;
});
reset.addEventListener("click", function () {
  result.textContent = "";
  fin = "";
});
equal.addEventListener("click", function () {
  result.textContent = eval(fin);
});

let bk = document.getElementById("bk");
let btn = document.getElementById("btn");
let operation = document.getElementsByClassName("operation");

let position = 1;

btn.addEventListener("click", function () {
  position++;
  if (position == 1) {
    bk.style.justifyContent = "start";
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.color = "#424a5d";
    }
  }
  if (position == 2) {
    bk.style.justifyContent = "center";
  }
  if (position == 3) {
    bk.style.justifyContent = "end";
    position = 0;
    document.body.style.background = "#17062a";
    for (let i = 0; i < numbers.length; i++) {
      numbers[i].style.color = "#fee83a";
      numbers[i].style.background = "#331b4d";
    }
    for (let i = 0; i < operation.length; i++) {
      operation[i].style.color = "#fee83a";
      operation[i].style.background = "#331b4d";
    }
  }

  console.log(position);
});
