// 2)let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

// ამ სიიდან :

// ცალკე მასივში ჩაწერე truthy მნიშვნელობები

// ცალკე მასივში ჩაწერე falsy მნიშვნელობები

// გამოიყენე for of და სიის მეთოდი რომელიც ამატემს ელემენტებს სიაში

// დაბეჭდე ორივე



let values = [0, "0", "", "false", false, null, undefined, [], {}, NaN, 25];

let truthyList = [];
let falsyList = [];

for (let item of values) {
  if (item) {
    truthyList.push(item);
  } else {
    falsyList.push(item);
  }
}

console.log("Truthy Values:", truthyList);

console.log("Falsy Values:", falsyList);
