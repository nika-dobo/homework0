// 6)გაქვს:

// let map = new Map([
//   ["apple", 5],
//   ["banana", 2],
//   ["orange", 8]
// ]);

// forEach-ით:

// დაბეჭდე მხოლოდ ის ელემენტები, სადაც value > 4

let map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
]);

map.forEach((value) => {
    if (value > 4) {
        console.log(value);
    }
});