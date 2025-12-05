const body = document.body;
const form = document.getElementById("form");
const sec = document.getElementById("sec");
const inp = document.getElementsByTagName("input");
const p = document.getElementsByTagName("p");

for (let i = 0; i < p.length; i++) {
  p[i].style.display = "none";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const ul = document.createElement("ul");
  let name = ["name", "surename", "age"];

  for (let i of name) {
    const li = document.createElement("li");
    li.textContent += i + ":" + e.target[i].value;
    ul.appendChild(li);
  }

  sec.appendChild(ul);

  for (let i = 0; i < name.length; i++) {
    if (inp[i].value == "") {
      p[i].style.display = "inline";
      sec.removeChild(ul);
    }
    inp[i].value = "";
  }
});
