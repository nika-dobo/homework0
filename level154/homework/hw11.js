// 11)გაქვს:

// let map = new Map([
//   ["a", 10],
//   ["b", 20],
//   ["c", 30]
// ]);

// იპოვე:

// ყველა value-ს საშვალო

let map = new Map([
    ["a", 10],
    ["b", 20],
    ["c", 30]
]);

let sum = 0;
map.forEach((value) => {
    sum += value;
});

console.log(sum / map.size);