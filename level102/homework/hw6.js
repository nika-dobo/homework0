// 6)ფუნქციამ მიიღოს ორი რიცხვი (start, end).

// for loop-ით შეკრიბოს ყველა რიცხვი ამ დიაპაზონში.

// თუ ჯამი > 100 → "დიდი ჯამი"

// სხვაგვარად → "პატარა ჯამი".

function big(a, b) {
  let jami = 0;
  for (let i = a; i < b; i++) {
    jami += i;
  }
  if (jami > 100) {
    console.log("didi jami");
  } else {
    console.log("patara jami");
  }
}
