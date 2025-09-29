function rame(arr) {
  console.log(arr.length);
  console.log(arr.slice(3, 8));
  console.log(arr.splice(4, 3));
}

rame([
  "aa",
  "aaa",
  "AAa",
  "Aaa",
  "aa",
  "asd",
  "sad",
  "das",
  "das",
  "das",
  "asd",
]);

function plus(arr1, arr2) {
  let both = arr1.concat(arr2);
}

plus([2, 564, 45645, 6], [345, 3453, 345]);
