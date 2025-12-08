const form = document.getElementById("form");
const inp = document.getElementsByTagName("input");

function User(name, mail, password) {
  this.name = name;
  this.mail = mail;
  this.password = password;
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let user = new User(
    e.target.name.value,
    e.target.mail.value,
    e.target.password.value
  );

  for (let i = 0; i < 3; i++) {
    inp[i].value = "";
  }
  
  console.log(user);
});
