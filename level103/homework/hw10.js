// 10)შექმენი ფუნქცია რომელსაც გადაეცემა სტრინგები და ინტეჯერები,შენი დავალებაა რომ თუ სიაში მყოფი რომელიმე ელემენტი არის სტრინგ ტიპის,ასეთი ელემენტი ჩაანაცვლო true - ით

function replace(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "string") {
      arr[i] = true;
    }
  }
  console.log(arr);
}

replace([34, 562, 3, 355, 4, 54, "asda", "sda", "dfg", "gdfg"]);
