// 2)დაწერე ფუნქცია countEvenOdd(arr), რომელიც მიიღებს რიცხვების სიას და დაბეჭდავს რამდენია ლუწი და რამდენი კენტი.

function countEvenOdd(arr) {
  odd = 0;
  even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd++;
    }
  }
  console.log(odd);
  console.log(even);
}

countEvenOdd([3, 534, 345, 3453, 3463, 636, 34634, 65, 64, 756, 76, 75, 5]);
