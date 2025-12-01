const input = document.getElementById("textInput");
const colorBoxes = document.getElementsByClassName("color");

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].addEventListener("click", function () {
    input.style.color = colorBoxes[i].style.color;
  });
}
