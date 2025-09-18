// 1)დავალება 1 – ლუწი/კენტი მთვლელი

// მომხმარებელს prompt–ით შეეკითხე ორი რიცხვი: start და end.

// გამოიყენე for ციკლი, რომ გაიარო ყველა რიცხვი start-იდან end-მდე.

// დაითვალე ცალ–ცალკე რამდენია ლუწი და რამდენია კენტი.

// ბოლოს დაბეჭდე: "ლუწების რაოდენობა: X, კენტების რაოდენობა: Y".

let start = Number(prompt("enter the start"));
let end = Number(prompt("enter the end"));

let even = 0;
let odd = 0;

for (i = start; i < end; i++) {
  console.log(i);
  if (i % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(even);
console.log(odd);
