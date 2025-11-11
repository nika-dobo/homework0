// 9)დააგენერირე 5 შემთხვევითი მთელი რიცხვი 1-დან 100-მდე და იპოვე ამ რიცხვებიდან
// მინიმალური და მაქსიმალური მნიშვნელობა Math.random(), Math.floor(), Math.min() და Math.max()-ის გამოყენებით.

arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(Math.floor(Math.random(1, 100)));
}

console.log(Math.min(...arr));
console.log(Math.max(...arr));