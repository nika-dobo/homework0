//5)შექმენი ფუნქცია რომელიც იღებს სტრინგების სიას,შენი დავალებაა რომ შეამოწმო,თუ რომელიმე სტრინგის სიგრძე არის ლუწი რიცხვისგან შემდგარი მაშინ ასეთი სახელები ჩაამატეთ ახალ სიაში,ხოლო თუ რომელიმე სტრინგის სიგრძე არის კენტი რიცხვისგან შემდგარი ასეთი სტრინგები შეცვალე false მნიშვნელობით

function func(arr) {
  let even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length % 2 == 0) {
      even.push(arr[i]);
    } else {
      arr[i] = false;
    }
  }

  console.log(even);
  console.log(arr);
}

func(["dsa","dfss","fsdssd","fsdfsd","fdfdd"])