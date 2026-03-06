const myList = [
  { animeName: "frieren", role: "mage", age: 1000 },
  { virginGameTitle: "minecraft", genre: "sandbox", mode: "survival" },
  {
    language: "javascript",
    usePlace: "web development",
    difficulty: "sosososososososososososo ez",
  },
];

const [animeObj, gameObj, codingObj] = myList;

const { animeName, role, age } = animeObj;
const { gameTitle, genre, mode } = gameObj;
const { language, field, difficulty } = codingObj;

console.log(`სახელი: ${animeName}, როლი: ${role}, ასაკი: ${age}+ წელი`);
console.log(`სათაური: ${gameTitle}, ჟანრი: ${genre}, რეჟიმი: ${mode}`);
console.log(`ენა: ${language}, მიმართულება: ${field}, სირთულე: ${difficulty}`);
