let globalVar = "მე გლობალური ვარ";

if (true) {
  let blockIf = "მე if-ში ვარ";
}

for (let i = 0; i < 1; i++) {
  let blockFor = "მე for-ში ვარ";
}

console.log(globalVar); // დაიბეჭდება
// console.log(blockIf); // ERROR: blockIf is not defined
// console.log(blockFor); // ERROR: blockFor is not defined
