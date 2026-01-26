if (true) {
  var a = 5;
  let b = 10;
}
console.log(a); // დაიბეჭდება (5), რადგან var-ს არ აქვს Block Scope.
console.log(b); // არ დაიბეჭდება (Error), რადგან let-ს აქვს Block Scope და გარეთ არ ჩანს.


