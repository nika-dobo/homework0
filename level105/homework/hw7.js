// 7)შექმენი ფუნქცია, რომელიც იღებს რიცხვების სიას და აბრუნებს ახალ სიას მხოლოდ იმ რიცხვებისგან შემდგარს, რომლებიც ერთდროულად ლუწებიც არიან და 5-ის ჯერადებიც,შემდეგ ამ სიაში მყოფი კენტი რიცხვების ჯამი იპოვეთ

function func(num) {
  let oddSum = 0;
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0 && num[i] % 5 == 0) {
      arr.push(num[i]);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      oddSum += arr[i];
    }
  }

  console.log(arr, oddSum);
}

func([10, 15, 20, 25, 30, 35, 40, 45]);
