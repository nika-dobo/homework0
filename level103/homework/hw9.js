// 9)შექმენი ფუნქცია რომელსაც გადაეცემა რიცხვებით სავსე სია,შენი დავალებაა რომ გაიგო ამ სიაში მყოფი ლუწი რიცხვების რაოდენობა და კენტი რიცხვების ჯამი

function countEvenOdd(arr) {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      even++;
    } else {
      odd += arr[i];
    }
  }
  console.log(odd);
  console.log(even);
}

countEvenOdd([1, 3, 5, 7, 9, 2, 4, 6, 8]);
