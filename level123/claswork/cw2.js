const body = document.body;
const form = document.getElementById("form");

function Info(name, age) {
  this.name = name;
  this.age = age;
  this.fullInfo = function () {
    return `person name is ${name} and age is ${age}`;
  };
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let info1 = new Info(e.target.name.value, e.target.age.value);
  let p = document.createElement("p");
  p.textContent = info1.fullInfo();
  body.appendChild(p);
});
