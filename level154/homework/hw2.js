// 2)გაქვს:

// let map = new Map([
//   ["apple", 2],
//   ["banana", 3]
// ]);

// შეამოწმე:

// არის თუ არა "apple"
// არის თუ არა "orange"


// თუ არსებობს → დაწერე "არსებობს"
// თუ არა → "არ არსებობს"

// გამოიყენე ternary

let map = new Map([
    ["apple", 2],
    ["banana", 3]
]);

console.log(map.has("apple") ? "არსებობს" : "არ არსებობს");
console.log(map.has("orange") ? "არსებობს" : "არ არსებობს");