const gradeCategory = (score) => {
  return score < 0 || score > 100
    ? "Invalid score"
    : score >= 90
      ? "Excellent"
      : score >= 75
        ? "Good"
        : score >= 50
          ? "Average"
          : "Fail";
};

console.log(gradeCategory(95));
