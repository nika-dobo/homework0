//8)მომხმარებელს შემოატანინე ასაკი და სახელი,შემდეგ შეამოწმეთ --> თუ სახელი უდრის "nika" და ასაკი მეტია 18 ზე დაუკონსოლლოგეთ -->"your name is nika and you are adult" , ასევე შეამოწმეთ თუ შემოყვანილი სახელი უდრის "dorblavaso" და შემოტანილი ასაკი ნაკლებია 18 ზე მაშინ დაუკონსოლლოგეთ --> "You are dorbla and you are too young" სხვა შშემთხვევაში დაუკონსოლლოგეთ --> "you have weird name and age"

let name2 = prompt("enter name: ");
let age = Number(prompt("enter age: "));

if (name2 == "nika" && age >= 18) {
  console.log("your name is nika and you are adult");
} else if (name2 == "dorblavaso" && age <= 18) {
  console.log("You are dorbla and you are too young");
} else {
  console.log("you have weird name and age");
}
