const form = document.getElementById("form");
const li = document.getElementsByTagName("li");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  li[0].textContent += e.target.name.value;
  li[1].textContent += e.target.surename.value;
  li[2].textContent += e.target.age.value;
  li[3].textContent += e.target.email.value;
});
