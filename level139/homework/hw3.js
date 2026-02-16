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
