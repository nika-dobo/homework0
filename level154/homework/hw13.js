// 13)გაქვს:

// let numbers = [1,2,3,4,5,6,7,8,9];

// შექმენი Map:

// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let map = new Map();
map.set("even", []);
map.set("odd", []);

for (let number of numbers) {
    if (number % 2 === 0) {
        map.get("even").push(number);
    } else {
        map.get("odd").push(number);
    }
}

console.log(map);