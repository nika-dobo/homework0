// 8)შექმენი 5 ცალი i თეგი და მოათავსე რაიმე ტექსტი შიგნით,შენი დავცალებაა რომ წამოიღო ყველა i თეგი და შეინახო ცვლადში,შენი დავალებააა რომ ყველა i თეგში მყოფი ტექსტი textContent ის გამოყენებით შეცვალო --> "viri" ით /გამოიყენე while loop/for loop ორივე

let items = document.getElementsByTagName("i");

for (let i of items) {
  i.textContent = "viri";
}

// let index = 0;
// while (index < items.length) {
//   items[index].textContent = "viri";
//   index++;
// }
