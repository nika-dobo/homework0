// 5)გაქვს:

// let map = new Map([
//   ["x", 10],
//   ["y", 20],
//   ["z", 30]
// ]);

// დაბეჭდე მხოლოდ:

// ყველა key (for...of ითაც და forEach() ით )

// ზემოთ მოცემული Map იდან:

// დაბეჭდე:

// ყველა value

let map = new Map([
    ["x", 10],
    ["y", 20],
    ["z", 30]
]);

for (let key of map.keys()) {
    console.log(key);
}

map.forEach((value) => {
    console.log(value);
});