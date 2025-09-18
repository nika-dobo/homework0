// 4)მომხმარებელს შეეკითხე ქულა (0–100).

// თუ ქულა < 50 → "ჩაიჭერი".

// თუ 50–69 → "საშუალო".

// თუ 70–89 → "კარგი".

// თუ 90–100 → "ძალიან კარგი".

// თუ სხვა რიცხვი შეიყვანა → "არასწორი მონაცემი".

let score = Number(prompt("enter score"));

if (score < 50) {
  console.log("ჩაიჭერი");
} else if (score >= 50 && score <= 69) {
  console.log("საშუალო");
} else if (score >= 70 && score <= 89) {
  console.log("კარგი");
} else if (score >= 90 && score <= 100) {
  console.log("ძალიან კარგი");
} else {
  console.log("არასწორი მონაცემი");
}
