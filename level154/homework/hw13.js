// 13)გაქვს:

// let numbers = [1,2,3,4,5,6,7,8,9];

// შექმენი Map:

// key = "even" / "odd"
// value = შესაბამისი რიცხვების მასივი

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let map = new Map();

for (let number of numbers) {
    if (number % 2 === 0) {
        if (map.has("even")) {
            map.get("even").push(number);
        } else {
            map.set("even", [number]);
        }
    } else {
        if (map.has("odd")) {
            map.get("odd").push(number);
        } else {
            map.set("odd", [number]);
        }
    }
}

console.log(map);