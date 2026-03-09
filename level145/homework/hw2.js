const university = {
  name: "TSU",
  faculty: {
    title: "Computer Science",
    head: {
      name: "Irakli",
      age: 50,
    },
  },
  students: [
    {
      name: "Ana",
      grades: {
        math: 90,
        js: 95,
      },
    },
  ],
};

const {
  name: uniName,
  faculty: {
    title,
    head: { name: headName },
  },
  students: [
    {
      name: studName,
      grades: { math, js },
    },
  ],
} = university;

console.log(uniName);
console.log(title);
console.log(headName);
console.log(studName);
console.log(math);
console.log(js);

// დესტრუქციის გამოყენებით გამოიტანე კონსოლში:

// university name

// faculty title

// head name

// student name

// math grade

// js grade
