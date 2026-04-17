// 9)გაქვს:

// let map = new Map([
//   ["apple", 5],
//   ["banana", 2],
//   ["orange", 8]
// ]);

// შექმენი ახალი Map, სადაც:

// დარჩება მხოლოდ ის მნიშვნელობათა წყვილი რომლის value > 4

// გამოიყენე:forEach

let map = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
]);

let newMap = new Map();

map.forEach((value, key) => {
    if (value > 4) {
        newMap.set(key, value);
    }
});

console.log(newMap);

// second version whit delete

let map2 = new Map([
    ["apple", 5],
    ["banana", 2],
    ["orange", 8]
]);

map2.forEach((value, key) => {
    if (value < 4) {
        map2.delete(key);
    }
});

console.log(map2);