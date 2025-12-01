const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log(e.target.name.velue);
  console.log(e.target.surename.velue);
  console.log(e.target.age.velue);
  console.log(e.target.email.velue);
});
