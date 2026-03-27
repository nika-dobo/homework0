class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  changeName(newName) {
    this.name = newName;
  }

  increaseAge(yearsToAdd) {
    this.age += yearsToAdd;
  }
}

const user1 = new User("გიორგი", 20);
user1.changeName("დავითი");
user1.increaseAge(5); 

console.log(user1); 
