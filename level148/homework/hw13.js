const studentsNames = ["ანა", "ლაშა", "გიორგი", "ნინო"];

const joinedNames = studentsNames.reduce((acc, curr) => acc + "-" + curr);

console.log(joinedNames);
