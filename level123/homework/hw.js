const body = document.body;
const form = document.getElementById("form");

function Info(name, age, profesion) {
  this.name = name;
  this.age = Number(age);
  this.profesion = profesion;
  this.fullInfo = function () {
    return `${this.name} ${this.profesion}`
  };
}

const div = document.createElement("div");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let info1 = new Info(
    e.target.name.value,
    e.target.age.value,
    e.target.profesion.value
  );

  const p = document.createElement("p");
  p.textContent = info1.fullInfo();
  div.appendChild(p);
  body.appendChild(div);
});
