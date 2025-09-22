//1)მომხმარებელს შემოატანინე რაიმე რიცხვი,1 დან მომხმარებლის შემოტანილ რიცხვამდე დათვალე თუ რამდენი ლუწი და რამდენი კენტი რიცხვია

let num = Number(prompt("entern num"));

let even = 0;
let odd = 0;

for (let i = 1; i < num; i++) {
  if (i % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(even);
console.log(odd);
