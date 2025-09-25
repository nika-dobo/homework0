// 7)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და for loop-ით შეაჯამოს მხოლოდ კენტი რიცხვები.

// თუ ჯამი > 50 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".

function big(a, b) {
  let jami = 0;
  for (let i = a; i < b; i++) {
    if (i % 2 != 0) {
      jami += i;
    }
  }
  if (jami > 50) {
    console.log("didi jami");
  } else {
    console.log("patara jami");
  }
}
