let btn = document.getElementById("btn");
let count = 0;

function click() {
  console.log("button is clicked", count);
  count++;
}

btn.addEventListener("click", click);
