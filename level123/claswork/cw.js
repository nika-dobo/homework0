function Person(name, joinDate) {
  this.name = name;
  this.joinDate = joinDate;
  this.info = function () {
    console.log(`${name} is join goa in ${joinDate}`);
  };
}

let person1 = new Person("nika", 2024);
console.log(person1.info());


