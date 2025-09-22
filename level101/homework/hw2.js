//2)მომხმარებელს შემოატანინე ორი რიცხვი,მომხმარებლის მიერ შემოტანილი პირველი რიცხვიდან მეორე რიცხვამდე იპოვეთ ყველა ლუწი რიცხვის ჯამი

let num1 = Number(prompt("enter num"));
let num2 = Number(prompt("enter num"));

let jami = 0;

for (let i = num1; i < num2; i++) {
  if (i % 2 == 0) {
    jami += i;
  }
}
