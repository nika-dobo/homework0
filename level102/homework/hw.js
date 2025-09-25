// 1)ფუნქციამ მიიღოს ორი რიცხვი (start, end) და while loop–ით გადაუაროს ამ დიაპაზონს.

// თითო რიცხვისთვის შეამოწმეთ if else-ით:

// თუ ლუწია → დაბეჭდოს "ლუწია"

// თუ კენტია → "კენტია". გამოიძახეთ ფუნქცია რომ ნახოთ შედეგი

function evenOrOdd(start, end) {
  while (start < end) {
    if (start % 2 === 0) {
      console.log("even");
    } else {
      console.log("odd");
    }
    start++;
  }
}

evenOrOdd(3, 54);
