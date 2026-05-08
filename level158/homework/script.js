const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

let users = JSON.parse(localStorage.getItem("users")) || [];

function User(fullname, email, password) {
  this.fullname = fullname;
  this.email = email;
  this.password = password;
}

if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let user = new User(
      e.target.name.value,
      e.target.email.value,
      e.target.password.value,
    );
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    console.log(users);
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    for (let i of users) {
      if (
        e.target.email.value == i.email &&
        e.target.password.value == i.password
      ) {
        alert("Login successful");
      } else {
        alert("Invalid email or password");
      }
    }
  });
}
