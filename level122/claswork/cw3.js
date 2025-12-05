body = document.body;

btn = document.createElement("button");
btn.textContent = "click me";
body.appendChild(btn);

function User(name, password) {
  this.name = name;
  this.password = password;
}

let userArr = [];




btn.addEventListener("click", function () {
  let nikname = prompt();
  let password = prompt();

  let user1 = new User(nikname, password);
  userArr.push(user1);
  console.log(userArr);
});
