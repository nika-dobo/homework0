const body = document.body;
const form = document.getElementById("form");
const sec = document.getElementById("sec");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const ul = document.createElement("ul");

  let name = ["name", "surename", "age"];

  for (let i of name) {
    const li = document.createElement("li");
    li.textContent += e.target[i].value;
    ul.appendChild(li);
  }

  body.appendChild(ul);
});
