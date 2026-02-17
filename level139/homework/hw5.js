// 5)შექმენი ფუნქცია login(username, password)

// სწორი მონაცემები:
// username: "admin"

// password: "1234"

// მომხმარებელს შემოატანინე username და password და გადაეცით ფუნქციას არგუმენტად

// შეამოწმე:

// ორივე თუ სწორია → "Welcome"

// username სწორია, password არა → "Wrong password"

// სხვა შემთხვევაში → "Access denied"

const login = (username, password) => {
  if (username === "admin" && password === "1234") {
    return "Welcome";
  } else if (username === "admin") {
    return "Wrong password";
  } else {
    return "Access denied";
  }
};

let user = prompt("შეიყვანეთ username:");
let pass = prompt("შეიყვანეთ password:");

alert(login(user, pass));
console.log(login(user, pass));
