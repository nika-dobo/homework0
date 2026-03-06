const user = {
  name: "nika",
  email: "blabla@gamil.com",
};

const { username, email, role = "guest" } = user;

console.log(username);
console.log(email);
console.log(role);
