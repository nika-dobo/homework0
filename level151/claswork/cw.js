const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const submitBtn = document.getElementById("submit");

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  changeName() {
    this.name = nameInput.value;
  }

  increaseAge() {
    this.age += Number(ageInput.value);
  }
}

const user1 = new User("გიორგი", 20);

console.log(user1);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  user1.changeName();
  user1.increaseAge();
  console.log(user1);
});
