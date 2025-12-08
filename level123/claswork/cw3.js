const body = document.body;
const form = document.getElementById("form");

function Info(age, feature) {
  this.age = Number(age);
  this.feature = Number(feature);
  this.fullInfo = function () {
    return this.age + this.feature;
  };
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let info1 = new Info(e.target.age.value, e.target.yearfeature.value);

  const p = document.createElement("p");
  p.textContent = info1.fullInfo();
  body.appendChild(p);
});
