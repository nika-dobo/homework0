const input = document.getElementById("textInput");
const colorBoxes = document.getElementsByClassName("color");

let arr = ["#c1f4cf", "#25f23d", "#00f1ff", "#ff33ff"];

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].style.backgroundColor = arr[i];
  colorBoxes[i].addEventListener("click", function () {
    input.style.color = arr[i];
  });
}
