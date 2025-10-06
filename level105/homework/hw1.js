// 1)დაწერე ფუნქცია, რომელიც იღებს არგუმენტად რიცხვების სიას და ახალ სიაში ამატებს მხოლოდ ლუწ რიცხვებს. შემდეგ იპოვეთ ამ სიაში მყოფი რიცხვების ჯამი

function sum(num) {
  let sum = 0;
  let arr = [];

  for (let i = 0; i < num.length; i++) {
    if (i % 2 === 0) {
      arr.push(i);
    }
  }

  for (let even of arr) {
    sum += even;
  }

  console.log("ჯამი:", sum);
}

sum([3, 6, 8, 11, 14, 21, 28]);
