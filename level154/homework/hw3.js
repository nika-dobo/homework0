// 3)გაქვს:

// let map = new Map([
//   ["a", 1],
//   ["b", 2],
//   ["c", 3]
// ]);

// წაშალე "b"
// შემდეგ დაბეჭდე განახლებული Map

let map = new Map([
    ["a", 1],
    ["b", 2],
    ["c", 3]
]);

map.delete("b");
console.log(map);