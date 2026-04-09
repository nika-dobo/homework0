// გაქვს მასივი:

// let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

// შ
// ექმენი Map, სადაც:

// key = ელემენტი
// value = რამდენჯერ გვხვდება

// საბოლოოდ უნდა მიიღო მსგავსი:

// apple → 3
// banana → 2
// orange → 1

let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];

let map = new Map();

for (let i of arr) {
  if (!map.has(i)) {
    map.set(i, 0);
  }
  if (map.has(i)) {
    map.set(i, map.get(i) + 1);
  }
}

console.log(map);
