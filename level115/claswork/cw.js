// 1. მაქსიმალური და მინიმალური

// დაწერეთ კოდი, რომელიც გამოიტანს მაქსიმალურ და მინიმუმ 5 დარტყმას.

// გამოიტანეთ Math.max() და Math.min()

Math.max(1, 24, 63, 45, 78);
Math.min(1, 24, 63, 45, 78);



// 2. მიიღეთ

// Boy Math.round(), Math.ceil() Math.floor()

// შემდეგი დარტყმებისთვის: 4.7, 9.1, -3.6.

Math.round(4.7);
Math.round(9.1);
Math.round(-3.6);

Math.ceil(4.7);
Math.ceil(9.1);
Math.ceil(-3.6);

Math.floor(4.7);
Math.floor(9.1);
Math.floor(-3.6);



// 3. Exponentiation

// Calculate:

// 34, 52, 210

// Use Math.pow()

Math.pow(3, 4);
Math.pow(5, 2);
Math.pow(2, 1);



// 4. კვადრატული ფესვი

// გამოთვალეთ რიცხვების კვადრატული ფესვი: 25, 144, 2

// შედეგები დამრგვალებულია Math.round()-ით.

Math.round(25);
Math.round(144);
Math.round(2);



// 5. აბსოლუტური მნიშვნელობა

// გარანტირებული რიცხვების დადებითად გადაყვანა: -8.3,5 12

// გამოიყენეთ Math.abs()

Math.abs(-8.3);
Math.abs(5 - 12);



// 7. კომბინირებული გამოთვლა

// დაწერე ფუნქცია გამოთვლა(რაოდენობა), რომელიც:

// 1. აიყვანს num -ს მე-2 გეში

// 2. ამოიღებს კვადრატულ ზედაპირზე

// 3. გაამრგვალებს ქვევით ( მათემ. სართული) ტესტი: გამოთვლა(7.8) -> 7

function calulate(x) {
  Math.pow(x, 2);
  Math.round(x);
  Math.floor(x);
  console.log(x);
}

calulate(7.8);

// 9. პითაგორას თეორემა

// დაწერე ფუნქცია Pythagoras (a, b), რომელიც აბრუნებს

// ჰიპოტენუზას:

// c= √a2 + b2

// პასუხი: pythagoras(3, 4) 5



function pythagoras(a,b) {
    console.log(Math.round(Math.pow(a) + Math.pow(b)));
}

pyt(3,5)
