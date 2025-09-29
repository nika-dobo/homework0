//1)შექმენი ფუნქცია sumArray(arr), რომელიც მიიღებს რიცხვების სიას პარამეტრად და დააბრუნებს სიაში მყოფი რიცხვების  ჯამს.

function sumArray(arr) {
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += i;
  }
  console.log(sum);
}

sumArray([3, 534, 345, 3453, 3463, 636, 34634, 65, 64, 756, 76, 75, 5]);
