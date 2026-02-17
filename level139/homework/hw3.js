// 3)შექმენი ფუნქცია triangleType(a, b, c)

// თუ ყველა გვერდი ტოლია → "Equilateral"

// თუ ორი გვერდი ტოლია → "Isosceles"

// თუ ყველა განსხვავებულია → "Scalene"

// გამოიძახე ფუნქცია სხვადასხვა არგუმენტებით რამდენჯერმე

const triangleType = (a, b, c) => {
  if (a === b && b === c) {
    return "Equilateral";
  } else if (a === b || a === c || b === c) {
    return "Isosceles";
  } else {
    return "Scalene";
  }
};

console.log(triangleType(5, 5, 5));
