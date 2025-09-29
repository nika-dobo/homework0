//5)შექმენით ფუნქცია average(arr) – მიიღოს რიცხვების სია და დააბრუნოს მათი საშუალო (ჯამი / რაოდენობა)

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum / arr.length);
}

sumArray([3, 534, 345, 3453, 3463, 636, 34634, 65, 64, 756, 76, 75, 5]);
